import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { priceWithCoupon, couponAppliesTo } from '../_shared/coupons.ts';

// ─────────────────────────────────────────────────────────────────────────
// Quotes what a code would do to a price. It RESERVES NOTHING.
//
// Also quotes mock interview codes now, when body.product is 'interview'.
// Kept in this one endpoint rather than a second one, because the point of a
// quote is the guessing-budget check (coupon_attempt_allowed /
// coupon_attempts): a code carries money, and create-mock-interview-order has
// no rate limiting of its own. Splitting the product into its own file would
// have meant building that protection twice or leaving the interview path
// unprotected. product defaults to 'course', so every existing course call
// that never sends it is unaffected.
//
// A quote is not a hold, deliberately. Holding a slot the moment someone
// types a code would let one person park the last redemption of a limited
// coupon indefinitely just by looking at it. create-razorpay-order is the
// only thing that claims a slot, and it re-validates everything from scratch
// because by then the answer may have changed.
//
// So this endpoint can be optimistic and the order endpoint is the authority.
// The worst case is a buyer who is quoted a price and then told at checkout
// that the code just ran out, which is correct behaviour rather than a race.
// ─────────────────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

// One message for every kind of "no". Telling the buyer whether a code does
// not exist, is spent, or is not for their plan would turn this endpoint into
// an oracle for discovering live codes, and a code is now worth money.
const VAGUE = 'That code is not valid for this plan';

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
    const ANON_KEY         = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authErr } = await userClient.auth.getUser();
    if (authErr || !user) return json({ error: 'Unauthorized' }, 401);

    const body = await req.json().catch(() => ({}));
    const rawCode = body?.code;
    const product: 'course' | 'interview' = body?.product === 'interview' ? 'interview' : 'course';
    const duration = product === 'course' ? (body?.plan as string) : null;
    const scope    = product === 'course' ? (body?.scope as string) : null;
    if (!rawCode || typeof rawCode !== 'string') return json({ error: 'Enter a code' }, 400);
    if (product === 'course' && (!duration || !scope)) {
      return json({ error: 'plan and scope are required' }, 400);
    }

    const code = rawCode.trim().toUpperCase();
    if (!/^[A-Z0-9_-]{3,32}$/.test(code)) return json({ error: VAGUE }, 400);

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // Guessing budget, checked before anything is looked up.
    const { data: allowed } = await sb.rpc('coupon_attempt_allowed', { p_user: user.id });
    if (allowed === false) {
      return json({ error: 'Too many attempts. Wait a few minutes and try again.' }, 429);
    }

    const note = (succeeded: boolean) =>
      sb.from('coupon_attempts').insert({ user_id: user.id, code, succeeded });

    // Course reads pricing_plans, keyed on duration and scope. An interview has
    // one flat price with no tiers, so it reads mock_interview_config instead
    // and is expressed as a PlanRow with no site-wide sale, which is exactly
    // what create-mock-interview-order already does with the same value.
    const [{ data: coupon }, planLookup] = await Promise.all([
      sb.from('coupons').select('*').eq('code', code).maybeSingle(),
      product === 'interview'
        ? sb.from('mock_interview_config').select('price_paise, is_enabled').eq('id', true).maybeSingle()
        : sb.from('pricing_plans').select('*').eq('duration', duration).eq('scope', scope).maybeSingle(),
    ]);

    let planRow: { base_amount: number; discount_percent?: number | null } | null = null;
    if (product === 'interview') {
      const cfg = planLookup.data as { price_paise?: number; is_enabled?: boolean } | null;
      if (cfg && cfg.is_enabled && Number.isInteger(cfg.price_paise) && (cfg.price_paise as number) > 0) {
        planRow = { base_amount: cfg.price_paise as number };
      }
    } else {
      planRow = planLookup.data as typeof planRow;
    }

    if (!planRow || (product === 'course' && !(planLookup.data as { active?: boolean })?.active)) {
      await note(false);
      return json({ error: product === 'interview' ? 'Booking is temporarily unavailable' : 'Invalid plan' }, 400);
    }
    if (!coupon) { await note(false); return json({ error: VAGUE }, 400); }

    const now = new Date();
    const priceBefore = priceWithCoupon(planRow, null, now).final;

    // Targeting is NOT a hard rejection here, deliberately.
    //
    // The upgrade modal shows three durations at once and can only ask about
    // one of them, so it asks about the one it guesses the buyer wants. A code
    // aimed at the 3-month plan was therefore being rejected outright whenever
    // that guess landed on 12-month, which is what the buyer sees as "my valid
    // code does not work". The code is live and usable; it just does not cover
    // the plan we happened to ask about.
    //
    // So only the code's own liveness is fatal here. Whether it covers a given
    // plan is per-card information, which the client already renders, and
    // create-razorpay-order still refuses outright at purchase time because by
    // then exactly one plan is being bought.
    const hardDead = !coupon.active
      || (coupon.expires_at && new Date(coupon.expires_at) < now);
    if (hardDead) { await note(false); return json({ error: VAGUE }, 400); }

    const applies = couponAppliesTo(coupon, duration, scope, priceBefore, now, product);

    // Cheap pre-check on the limit so an obviously spent code fails here
    // rather than at checkout. This is NOT the authority - coupon_reserve
    // re-counts under a row lock - it just gives a better error, earlier.
    const { data: liveUsed } = await sb.rpc('coupon_live_count', { p_code: code, p_exclude_user: user.id });
    if (typeof liveUsed === 'number' && liveUsed >= (coupon.max_redemptions ?? 1)) {
      await note(false);
      return json({ error: VAGUE }, 400);
    }

    // Already spent by this buyer. 'refunded' still blocks, matching
    // coupon_reserve: the slot went back to the pool, they do not get another.
    const { data: mine } = await sb
      .from('coupon_redemptions')
      .select('status')
      .eq('code', code).eq('user_id', user.id)
      .maybeSingle();
    if (mine && (mine.status === 'committed' || mine.status === 'refunded')) {
      await note(false);
      return json({ error: 'You have already used this code' }, 409);
    }

    await note(true);

    // A grant is not a discount at all: it hands over access with no payment.
    // Tell the client to use the existing redeem-coupon path instead of
    // quoting a price that will never be charged.
    //
    // A grant on an interview should not be possible at all - the
    // coupons_interview_not_grant CHECK refuses the row at write time - but
    // this reads the same table over a second surface, so it is not trusted
    // blind. Reported as VAGUE rather than a distinct message: a buyer never
    // needs to know why a code fails, and a specific message here would say
    // "this looks like a data problem", which invites exactly the kind of
    // probing the vague message elsewhere is meant to prevent.
    if (product === 'interview' && (coupon.kind === 'grant' || !coupon.kind)) {
      await note(false);
      return json({ error: VAGUE }, 400);
    }
    if (coupon.kind === 'grant' || !coupon.kind) {
      return json({ ok: true, kind: 'grant', code });
    }

    const p = priceWithCoupon(planRow, coupon, now);

    // A 100%-off discount is a giveaway wearing a discount's clothes. Route it
    // down the same grant path rather than creating a ₹0 order Razorpay would
    // reject anyway.
    //
    // Not for an interview. There is no redeem-as-grant path for a booking -
    // create-mock-interview-order refuses this outright, since a booking is
    // never free - so quoting kind:'grant' here would hand the client a state
    // with nowhere to go. Told plainly instead, matching the order endpoint's
    // own wording.
    if (p.isFullGrant && applies.ok && product === 'interview') {
      return json({
        error: 'That code covers the whole booking, which is not supported yet. '
             + 'Ask for a code that takes an amount off instead.',
      }, 400);
    }
    if (p.isFullGrant && applies.ok) return json({ ok: true, kind: 'grant', code, was_discount: true });

    return json({
      ok: true,
      kind: coupon.kind,
      code,
      // False means the code is live but does not cover the plan we asked
      // about. The client still applies it and marks the eligible cards.
      applies_here: applies.ok,
      min_amount_message: (!applies.ok && applies.reason === 'below_minimum' && coupon.min_amount)
        ? 'needs an order of at least ₹' + Math.ceil(coupon.min_amount / 100)
        : null,
      sticker: p.sticker,
      was: p.salePrice,          // what they would pay without the code
      now: applies.ok ? p.final : p.salePrice,
      discount: applies.ok ? p.salePrice - p.final : 0,
      sale_active: p.saleActive,
      // Best-of means a weak code can lose to a live sale and change nothing.
      // Only meaningful when the code actually covers this plan.
      no_effect: applies.ok && p.couponHadNoEffect,
      // The upgrade modal shows three durations at once but this quote priced
      // only one, so hand back the code's own terms and let the client apply
      // the identical rule to the other cards. Not a leak: the buyer already
      // holds a working code and can see its effect on any plan by re-quoting.
      terms: {
        value: coupon.discount_value,
        applies_duration: coupon.applies_duration ?? null,
        applies_scope: coupon.applies_scope ?? null,
        min_amount: coupon.min_amount ?? null,
      },
    });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { priceWithCoupon, couponAppliesTo } from '../_shared/coupons.ts';

// ─────────────────────────────────────────────────────────────────────────
// Quotes what a code would do to a price. It RESERVES NOTHING.
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
    const duration = body?.plan as string;
    const scope = body?.scope as string;
    if (!rawCode || typeof rawCode !== 'string') return json({ error: 'Enter a code' }, 400);
    if (!duration || !scope) return json({ error: 'plan and scope are required' }, 400);

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

    const [{ data: coupon }, { data: planRow }] = await Promise.all([
      sb.from('coupons').select('*').eq('code', code).maybeSingle(),
      sb.from('pricing_plans').select('*').eq('duration', duration).eq('scope', scope).maybeSingle(),
    ]);

    if (!planRow || !planRow.active) { await note(false); return json({ error: 'Invalid plan' }, 400); }
    if (!coupon) { await note(false); return json({ error: VAGUE }, 400); }

    const now = new Date();
    const priceBefore = priceWithCoupon(planRow, null, now).final;
    const applies = couponAppliesTo(coupon, duration, scope, priceBefore, now);
    if (!applies.ok) {
      await note(false);
      return json({
        error: applies.reason === 'below_minimum'
          // Worth being specific about: the buyer can act on this one by
          // picking a larger plan, and it gives nothing away about the code.
          ? 'This code needs an order of at least ₹' + Math.ceil((coupon.min_amount ?? 0) / 100)
          : VAGUE,
      }, 400);
    }

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
    if (coupon.kind === 'grant' || !coupon.kind) {
      return json({ ok: true, kind: 'grant', code });
    }

    const p = priceWithCoupon(planRow, coupon, now);

    // A 100%-off discount is a giveaway wearing a discount's clothes. Route it
    // down the same grant path rather than creating a ₹0 order Razorpay would
    // reject anyway.
    if (p.isFullGrant) return json({ ok: true, kind: 'grant', code, was_discount: true });

    return json({
      ok: true,
      kind: coupon.kind,
      code,
      sticker: p.sticker,
      was: p.salePrice,          // what they would pay without the code
      now: p.final,              // what they will pay with it
      discount: p.salePrice - p.final,
      sale_active: p.saleActive,
      // Best-of means a weak code can lose to a live sale and change nothing.
      // The client says so plainly rather than showing an identical price twice.
      no_effect: p.couponHadNoEffect,
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

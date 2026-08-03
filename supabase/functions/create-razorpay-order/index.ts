import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { priceWithCoupon, priceWithoutCoupon, couponAppliesTo } from '../_shared/coupons.ts';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RZP_KEY_ID        = Deno.env.get('RAZORPAY_KEY_ID')!;
    const RZP_KEY_SECRET    = Deno.env.get('RAZORPAY_KEY_SECRET')!;

    // Verify user JWT
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authError } = await userClient.auth.getUser();
    if (authError || !user) return json({ error: 'Unauthorized' }, 401);

    const body  = await req.json();
    const plan  = body?.plan as string;
    const scope = body?.scope as string;
    const rawCode = body?.code as string | undefined;
    if (!plan || !scope) return json({ error: 'plan and scope are required' }, 400);

    const code = typeof rawCode === 'string' && rawCode.trim()
      ? rawCode.trim().toUpperCase()
      : null;
    if (code && !/^[A-Z0-9_-]{3,32}$/.test(code)) {
      return json({ error: 'That code is not valid for this plan' }, 400);
    }

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // ── Lifetime guard ───────────────────────────────────────────────────
    // The old guard here also blocked any OVERLAPPING purchase, because
    // payments used to overwrite a single plan_scope slot and a second
    // purchase could silently shrink access. That is no longer true: every
    // purchase now stacks per scope from that scope's own expiry (see
    // _shared/entitlements.ts), so a repeat or complementary purchase can
    // only ever add time. Blocking it would cost a code path and buy nothing.
    //
    // Lifetime is still blocked - they already hold everything, forever, so
    // charging them again would take money for nothing.
    const { data: existingProfile } = await sb
      .from('profiles')
      .select('subscription_plan')
      .eq('id', user.id)
      .maybeSingle();

    if (existingProfile?.subscription_plan === 'lifetime') {
      return json({
        error: 'You already have lifetime access to everything. Contact support if something looks wrong.',
      }, 409);
    }

    // ── Live price lookup — never trust a client-sent amount ──────────────
    const { data: planRow } = await sb
      .from('pricing_plans')
      .select('base_amount, discount_percent, discount_starts_at, discount_ends_at, active')
      .eq('duration', plan)
      .eq('scope', scope)
      .maybeSingle();

    if (!planRow || !planRow.active) return json({ error: 'Invalid plan/scope' }, 400);

    const now = new Date();
    // Price with no code. Same rule the quote endpoint used, from _shared so
    // the two cannot drift into showing one number and charging another.
    const listAmount = priceWithoutCoupon(planRow, now);

    // ── Apply a discount code, if one was supplied ────────────────────────
    // The quote from validate-coupon is NOT trusted and is not even sent: the
    // coupon is looked up again here, and the slot is claimed under a row lock
    // inside coupon_reserve. Anything that changed since the quote (code spent,
    // expired, disabled) is caught here, which is the only place that matters
    // because this is the only place that charges.
    let amount = listAmount;
    let couponCode: string | null = null;
    let discountAmount = 0;

    if (code) {
      const { data: coupon } = await sb
        .from('coupons').select('*').eq('code', code).maybeSingle();

      const vague = json({ error: 'That code is not valid for this plan' }, 400);
      if (!coupon) return vague;

      // A grant hands over access with no payment, so it must never reach
      // Razorpay. The client is told to use redeem-coupon instead.
      if (!coupon.kind || coupon.kind === 'grant') {
        return json({ error: 'use_redeem_coupon', code }, 409);
      }

      const applies = couponAppliesTo(coupon, plan, scope, listAmount, now);
      if (!applies.ok) {
        return json({
          error: applies.reason === 'below_minimum'
            ? 'This code needs an order of at least ₹' + Math.ceil((coupon.min_amount ?? 0) / 100)
            : 'That code is not valid for this plan',
        }, 400);
      }

      const priced = priceWithCoupon(planRow, coupon, now);
      if (priced.isFullGrant) return json({ error: 'use_redeem_coupon', code }, 409);

      // Claim the slot. Raises if the code is spent, already used by this
      // buyer, or otherwise ineligible; the row lock inside makes a limited
      // code impossible to oversell no matter how many buyers arrive at once.
      const { error: reserveErr } = await sb.rpc('coupon_reserve', {
        p_code: code, p_user: user.id, p_duration: plan, p_scope: scope,
        p_amount: listAmount, p_ttl_minutes: 30,
      });
      if (reserveErr) {
        const m = String(reserveErr.message || '');
        return json({
          error: m.includes('already_used') ? 'You have already used this code'
               : m.includes('below_minimum') ? 'This code needs a larger order'
               : 'That code is not valid for this plan',
        }, 400);
      }

      couponCode = code;
      amount = priced.final;
      discountAmount = listAmount - priced.final;
    }

    // Hand the slot back if we cannot get as far as a payment row. This is
    // best-effort only: the reserved_until TTL is the actual guarantee, since
    // a crashed isolate never runs its own cleanup.
    const releaseReservation = async () => {
      if (couponCode) {
        await sb.rpc('coupon_release', { p_code: couponCode, p_user: user.id }).catch(() => {});
      }
    };

    // Create Razorpay order
    const credentials = btoa(`${RZP_KEY_ID}:${RZP_KEY_SECRET}`);
    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `eb_${user.id.slice(0, 8)}_${Date.now()}`,
        notes: { user_id: user.id, plan, scope },
      }),
    });

    if (!rzpRes.ok) {
      const err = await rzpRes.text();
      console.error('Razorpay error:', err);
      await releaseReservation();
      return json({ error: 'Could not create order' }, 502);
    }

    const order = await rzpRes.json();

    // Log pending payment. razorpay_order_id is UNIQUE NOT NULL, so this row
    // cannot exist any earlier than here - which is why the settle trigger
    // finds the redemption by (coupon_code, user_id) rather than payment_id.
    const { error: payErr } = await sb.from('payments').insert({
      user_id:           user.id,
      razorpay_order_id: order.id,
      plan,
      scope,
      amount,                          // what will actually be charged
      original_amount:   listAmount,   // what it would have been without a code
      discount_amount:   discountAmount,
      coupon_code:       couponCode,
      currency:          'INR',
      status:            'created',
    });
    if (payErr) {
      // No local row means nothing can ever settle this order, so do not send
      // the buyer to a checkout we cannot honour.
      console.error('payments insert failed:', payErr);
      await releaseReservation();
      return json({ error: 'Could not create order' }, 500);
    }

    return json({
      order_id: order.id,
      amount,
      currency: 'INR',
      original_amount: listAmount,
      discount_amount: discountAmount,
      coupon_code: couponCode,
    });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

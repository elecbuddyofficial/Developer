import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { applyPurchase, applyGrant } from '../_shared/entitlements.ts';

// ─────────────────────────────────────────────────────────────────────────────
// Redeems a comp code for the calling user.
//
// Validation happens entirely server side. The client only ever sends a code
// string, so nothing here trusts the caller for the plan, the duration, or
// how many redemptions are left.
// ─────────────────────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
    if (!rawCode || typeof rawCode !== 'string') {
      return json({ error: 'Enter a code' }, 400);
    }
    const code = rawCode.trim().toUpperCase();
    if (!/^[A-Z0-9_-]{3,32}$/.test(code)) {
      return json({ error: 'That code is not valid' }, 400);
    }

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: coupon } = await sb
      .from('coupons')
      .select('*')
      .eq('code', code)
      .maybeSingle();

    // Deliberately vague: distinguishing "no such code" from "already spent"
    // would let someone probe for valid codes.
    const invalid = json({ error: 'That code is not valid or has already been used' }, 400);
    if (!coupon || !coupon.active) return invalid;

    // ONLY grant coupons are redeemable here. This endpoint hands out access
    // for free, and a discount coupon carries no plan and no months, so
    // without this check `coupon.months || 1` silently turns a "₹100 off"
    // code into a free month of full access. That is reachable by anyone
    // holding a discount code, because this is a JWT endpoint they can call
    // directly rather than through the checkout screen.
    //
    // Discount codes belong to create-razorpay-order, which reads `kind` and
    // charges the remainder. It already refuses grant coupons with a 409, so
    // the two endpoints now cover exactly one kind each with no overlap.
    if (coupon.kind && coupon.kind !== 'grant') return invalid;
    // A grant with no plan cannot say what it grants, so it is not honoured
    // rather than defaulting to something.
    if (!coupon.plan) return invalid;
    if (coupon.expires_at && new Date(coupon.expires_at) < new Date()) return invalid;
    if (coupon.times_redeemed >= coupon.max_redemptions) return invalid;

    // Has this user already used it? The unique(code,user_id) constraint is
    // the real guard; this is just for a clearer message.
    const { data: prior } = await sb
      .from('coupon_redemptions')
      .select('id')
      .eq('code', code)
      .eq('user_id', user.id)
      .maybeSingle();
    if (prior) return json({ error: 'You have already used this code' }, 409);

    // Claim a slot with an optimistic lock. If two people race for the last
    // redemption, only the one whose times_redeemed still matches wins.
    const { data: claimed } = await sb
      .from('coupons')
      .update({ times_redeemed: coupon.times_redeemed + 1 })
      .eq('code', code)
      .eq('times_redeemed', coupon.times_redeemed)
      .lt('times_redeemed', coupon.max_redemptions)
      .select();

    if (!claimed || claimed.length === 0) return invalid;

    // Record the redemption. If this trips the unique constraint the user
    // double-submitted, so give the slot back rather than leaking it.
    const { error: redErr } = await sb.from('coupon_redemptions').insert({
      code, user_id: user.id,
    });
    if (redErr) {
      await sb.from('coupons')
        .update({ times_redeemed: coupon.times_redeemed })
        .eq('code', code)
        .eq('times_redeemed', coupon.times_redeemed + 1);
      return json({ error: 'You have already used this code' }, 409);
    }

    // Grant access. Same per-scope stacking as a paid purchase (see
    // _shared/entitlements.ts): the coupon extends only the scope(s) it
    // covers, each from its own expiry, and the trial-aware start means
    // redeeming early during a trial does not waste the free days.
    let expiresAt: string | null = null;
    const grant: Record<string, unknown> = {
      subscription_plan: coupon.plan,
      plan_scope:        coupon.plan === 'lifetime' ? null : (coupon.scope || 'both'),
    };

    if (coupon.plan === 'lifetime') {
      // Lifetime is not date-based; clearing the per-scope columns keeps them
      // from later contradicting the lifetime flag.
      grant.subscription_expires_at = null;
      grant.written_expires_at = null;
      grant.oral_expires_at = null;
      grant.granted_written_expires_at = null;
      grant.granted_oral_expires_at = null;
    } else {
      const months = coupon.months || 1;
      const { data: profile } = await sb
        .from('profiles')
        .select('subscription_plan, trial_started_at, written_expires_at, oral_expires_at, granted_written_expires_at, granted_oral_expires_at')
        .eq('id', user.id)
        .maybeSingle();

      const effect = applyPurchase(profile ?? {}, coupon.scope, months, new Date());
      // Legacy single-slot value: earliest covered scope, so a stale client
      // under-grants rather than over-grants.
      expiresAt = new Date(
        Math.min(...effect.changes.map(c => new Date(c.to).getTime())),
      ).toISOString();

      grant.subscription_expires_at = expiresAt;
      grant.written_expires_at = effect.written_expires_at;
      grant.oral_expires_at = effect.oral_expires_at;

      // Also recorded on the grant-only ledger. This is what a later refund
      // rebuilds from: without it, refunding an unrelated purchase would wipe
      // the comped time, because a replay of `payments` cannot see a coupon.
      const granted = applyGrant(profile ?? {}, coupon.scope, months, new Date());
      grant.granted_written_expires_at = granted.granted_written_expires_at;
      grant.granted_oral_expires_at    = granted.granted_oral_expires_at;
    }

    await sb.from('profiles').update(grant).eq('id', user.id);

    await sb.from('admin_actions').insert({
      admin_id:       coupon.created_by,
      admin_email:    null,
      action:         'coupon_redeemed',
      target_user_id: user.id,
      target_email:   user.email ?? null,
      details:        { code, plan: coupon.plan, expires_at: expiresAt },
    });

    return json({
      ok:         true,
      plan:       coupon.plan,
      scope:      coupon.plan === 'lifetime' ? null : (coupon.scope || 'both'),
      expires_at: expiresAt,
    });

  } catch (err) {
    console.error(err);
    return json({ error: 'Something went wrong' }, 500);
  }
});

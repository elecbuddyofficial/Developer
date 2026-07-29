import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

const ALL_PAID_PLANS = ['starter', 'standard', 'pro', '3mo', '6mo', '12mo'];

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
    if (!plan || !scope) return json({ error: 'plan and scope are required' }, 400);

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // ── Repeat-purchase guard ────────────────────────────────────────────
    // verify-razorpay-payment overwrites subscription_plan/plan_scope on
    // every successful payment rather than merging with existing access, so
    // a second purchase that overlaps what the buyer already holds could
    // silently shrink their access (e.g. buying Oral while Written is still
    // active would leave them Oral-only). Block it here and point to support
    // rather than guessing at merge/stacking semantics.
    const { data: existingProfile } = await sb
      .from('profiles')
      .select('subscription_plan, subscription_expires_at, plan_scope')
      .eq('id', user.id)
      .maybeSingle();

    const existingPlan = existingProfile?.subscription_plan;
    const hasActivePaid = existingPlan === 'lifetime'
      || (ALL_PAID_PLANS.includes(existingPlan) && existingProfile?.subscription_expires_at
          && new Date(existingProfile.subscription_expires_at) > new Date());

    if (hasActivePaid) {
      const existingScope = existingPlan === 'lifetime' ? 'both' : (existingProfile?.plan_scope || 'both');
      const overlaps = existingScope === 'both' || scope === 'both' || existingScope === scope;
      if (overlaps) {
        return json({
          error: 'You already have active access that overlaps this plan. Contact support to change your plan.',
        }, 409);
      }
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
    const discountActive = planRow.discount_percent > 0
      && (!planRow.discount_starts_at || new Date(planRow.discount_starts_at) <= now)
      && (!planRow.discount_ends_at   || new Date(planRow.discount_ends_at)   >= now);
    const amount = discountActive
      ? Math.round(planRow.base_amount * (1 - planRow.discount_percent / 100))
      : planRow.base_amount;

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
      return json({ error: 'Could not create order' }, 502);
    }

    const order = await rzpRes.json();

    // Log pending payment
    await sb.from('payments').insert({
      user_id:           user.id,
      razorpay_order_id: order.id,
      plan,
      scope,
      amount,
      currency:          'INR',
      status:            'created',
    });

    return json({ order_id: order.id, amount, currency: 'INR' });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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
    if (!plan || !scope) return json({ error: 'plan and scope are required' }, 400);

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

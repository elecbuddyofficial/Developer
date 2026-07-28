import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

const PLANS: Record<string, { amount: number; label: string }> = {
  starter:  { amount: 49900,  label: 'Starter' },
  standard: { amount: 99900,  label: 'Standard' },
  pro:      { amount: 199900, label: 'Pro' },
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

    const body = await req.json();
    const plan = body?.plan as string;
    const planInfo = PLANS[plan];
    if (!planInfo) return json({ error: 'Invalid plan' }, 400);

    // Create Razorpay order
    const credentials = btoa(`${RZP_KEY_ID}:${RZP_KEY_SECRET}`);
    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: planInfo.amount,
        currency: 'INR',
        receipt: `eb_${user.id.slice(0, 8)}_${Date.now()}`,
        notes: { user_id: user.id, plan },
      }),
    });

    if (!rzpRes.ok) {
      const err = await rzpRes.text();
      console.error('Razorpay error:', err);
      return json({ error: 'Could not create order' }, 502);
    }

    const order = await rzpRes.json();

    // Log pending payment
    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    await sb.from('payments').insert({
      user_id:           user.id,
      razorpay_order_id: order.id,
      plan,
      amount:            planInfo.amount,
      currency:          'INR',
      status:            'created',
    });

    return json({ order_id: order.id, amount: planInfo.amount, currency: 'INR' });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

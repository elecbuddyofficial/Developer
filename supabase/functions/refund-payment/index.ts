import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────────
// Admin-triggered refund. Issues the refund through Razorpay, records it on
// the payment row, and recomputes the customer's access from whatever paid
// purchases they have left.
//
// Refunds are irreversible and involve real money, so every branch here fails
// closed: the Razorpay call happens first, and local state is only written
// after Razorpay confirms. If the DB write fails afterwards, the refund still
// stands and the razorpay-webhook refund.processed handler reconciles it.
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
    const RZP_KEY_ID       = Deno.env.get('RAZORPAY_KEY_ID')!;
    const RZP_KEY_SECRET   = Deno.env.get('RAZORPAY_KEY_SECRET')!;

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user: caller }, error: callerErr } = await callerClient.auth.getUser();
    if (callerErr || !caller) return json({ error: 'Unauthorized' }, 401);

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: callerProfile } = await sb
      .from('profiles')
      .select('is_admin, email')
      .eq('id', caller.id)
      .single();
    if (!callerProfile?.is_admin) return json({ error: 'Forbidden: admin access required' }, 403);

    const body = await req.json().catch(() => ({}));
    const { payment_id, revoke_access } = body;
    const shouldRevoke = revoke_access !== false;

    if (!payment_id || typeof payment_id !== 'string') {
      return json({ error: 'payment_id required' }, 400);
    }

    // payment_id here is our own row id, not Razorpay's, so an admin cannot
    // aim this at an arbitrary Razorpay payment outside our records.
    const { data: payment } = await sb
      .from('payments')
      .select('*')
      .eq('id', payment_id)
      .maybeSingle();

    if (!payment) return json({ error: 'Payment not found' }, 404);
    if (payment.status === 'refunded') return json({ error: 'Already refunded' }, 409);
    if (payment.status !== 'paid') return json({ error: 'Only paid payments can be refunded' }, 400);
    if (!payment.razorpay_payment_id) {
      return json({ error: 'No Razorpay payment id on this record' }, 400);
    }

    // ── Issue the refund with Razorpay ───────────────────────────────────
    const credentials = btoa(`${RZP_KEY_ID}:${RZP_KEY_SECRET}`);
    const rzpRes = await fetch(
      `https://api.razorpay.com/v1/payments/${payment.razorpay_payment_id}/refund`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        // Omitting amount refunds the full captured amount.
        body: JSON.stringify({
          speed: 'normal',
          notes: { refunded_by: callerProfile.email ?? caller.id },
        }),
      },
    );

    const rzpBody = await rzpRes.json().catch(() => ({}));
    if (!rzpRes.ok) {
      console.error('Razorpay refund failed:', JSON.stringify(rzpBody));
      return json({
        error: rzpBody?.error?.description || 'Razorpay refused the refund',
      }, 502);
    }

    // ── Record it locally ────────────────────────────────────────────────
    const now = new Date().toISOString();
    await sb.from('payments').update({
      status:             'refunded',
      razorpay_refund_id: rzpBody?.id ?? null,
      refund_amount:      rzpBody?.amount ?? payment.amount,
      refunded_at:        now,
    }).eq('id', payment.id);

    // ── Recompute the customer's access ──────────────────────────────────
    // Their entitlement is whatever their longest-running remaining paid
    // purchase grants. A manually granted lifetime plan is left alone: it was
    // never tied to this payment, so a refund should not silently strip it.
    let accessResult = 'skipped';
    if (shouldRevoke && payment.user_id) {
      const { data: profile } = await sb
        .from('profiles')
        .select('subscription_plan')
        .eq('id', payment.user_id)
        .maybeSingle();

      if (profile?.subscription_plan === 'lifetime') {
        accessResult = 'kept_lifetime';
      } else {
        const { data: remaining } = await sb
          .from('payments')
          .select('plan, scope, subscription_expires_at')
          .eq('user_id', payment.user_id)
          .eq('status', 'paid')
          .not('subscription_expires_at', 'is', null)
          .order('subscription_expires_at', { ascending: false })
          .limit(1);

        if (remaining && remaining.length > 0) {
          await sb.from('profiles').update({
            subscription_plan:       remaining[0].plan,
            subscription_expires_at: remaining[0].subscription_expires_at,
            plan_scope:               remaining[0].scope || 'both',
          }).eq('id', payment.user_id);
          accessResult = `downgraded_to_${remaining[0].plan}`;
        } else {
          await sb.from('profiles').update({
            subscription_plan:       'trial',
            subscription_expires_at: null,
            plan_scope:               null,
          }).eq('id', payment.user_id);
          accessResult = 'reverted_to_trial';
        }
      }
    }

    // ── Audit ────────────────────────────────────────────────────────────
    const { data: targetProfile } = await sb
      .from('profiles').select('email').eq('id', payment.user_id).maybeSingle();

    await sb.from('admin_actions').insert({
      admin_id:       caller.id,
      admin_email:    callerProfile.email,
      action:         'refund_payment',
      target_user_id: payment.user_id,
      target_email:   targetProfile?.email ?? null,
      details: {
        payment_id:          payment.id,
        razorpay_payment_id: payment.razorpay_payment_id,
        razorpay_refund_id:  rzpBody?.id ?? null,
        amount:              rzpBody?.amount ?? payment.amount,
        plan:                payment.plan,
        access:              accessResult,
      },
    });

    return json({
      ok:        true,
      refund_id: rzpBody?.id ?? null,
      amount:    rzpBody?.amount ?? payment.amount,
      access:    accessResult,
    });

  } catch (err) {
    console.error(err);
    return json({ error: String(err) }, 500);
  }
});

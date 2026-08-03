import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { recomputeFromPayments } from '../_shared/entitlements.ts';

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
    // Rebuilt by REPLAYING every remaining paid purchase in the order it was
    // paid, rather than picking the single longest-running one. With per-scope
    // stacking you cannot subtract a refund arithmetically: each purchase's
    // start date depended on what already existed at the time, so replay is
    // the only method that agrees with applyPurchase. It also fixes the old
    // logic's assumption that a customer only ever holds one scope - refunding
    // an Oral purchase used to be able to wipe an unrelated Written one.
    //
    // A manually granted lifetime plan is left alone: it was never tied to
    // this payment, so a refund should not silently strip it.
    let accessResult = 'skipped';
    if (shouldRevoke && payment.user_id) {
      const { data: profile } = await sb
        .from('profiles')
        // granted_* is what makes this replay safe: it is access that came from
        // a comp coupon or an admin grant, which leaves no payments row, so
        // rebuilding from payments alone used to destroy it.
        .select('subscription_plan, trial_started_at, granted_written_expires_at, granted_oral_expires_at')
        .eq('id', payment.user_id)
        .maybeSingle();

      if (profile?.subscription_plan === 'lifetime') {
        accessResult = 'kept_lifetime';
      } else {
        // Everything still paid for. The row refunded above is already
        // status='refunded', so it is excluded by this filter.
        const { data: remaining } = await sb
          .from('payments')
          .select('plan, scope, paid_at, status')
          .eq('user_id', payment.user_id)
          .eq('status', 'paid');

        const effect = recomputeFromPayments(remaining ?? [], profile ?? {});
        const live = [effect.written_expires_at, effect.oral_expires_at]
          .filter(Boolean)
          .map(iso => new Date(iso as string).getTime())
          .filter(t => t > Date.now());

        if (live.length > 0) {
          await sb.from('profiles').update({
            written_expires_at:      effect.written_expires_at,
            oral_expires_at:         effect.oral_expires_at,
            // Legacy display columns kept roughly consistent.
            subscription_expires_at: new Date(Math.min(...live)).toISOString(),
          }).eq('id', payment.user_id);
          accessResult = 'recomputed_from_remaining_payments';
        } else {
          await sb.from('profiles').update({
            subscription_plan:       'trial',
            subscription_expires_at: null,
            plan_scope:               null,
            written_expires_at:      null,
            oral_expires_at:         null,
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

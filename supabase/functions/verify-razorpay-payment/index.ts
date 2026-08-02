import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { sendEmail } from '../_shared/email-layout.ts';
import { paymentConfirmedHtml, paymentConfirmedSubject } from '../_shared/payment-email.ts';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

const PLAN_MONTHS: Record<string, number> = {
  starter: 2,
  standard: 5,
  pro: 12,
  '3mo': 3,
  '6mo': 6,
  '12mo': 12,
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const KEY_SECRET        = Deno.env.get('RAZORPAY_KEY_SECRET')!;
    const RESEND_API_KEY    = Deno.env.get('RESEND_API_KEY');

    // Verify user JWT
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authError } = await userClient.auth.getUser();
    if (authError || !user) return json({ error: 'Unauthorized' }, 401);

    const { order_id, payment_id, signature } = await req.json();
    if (!order_id || !payment_id || !signature) {
      return json({ error: 'Missing fields' }, 400);
    }

    // Verify Razorpay signature: HMAC-SHA256(key_secret, order_id + "|" + payment_id)
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(KEY_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign'],
    );
    const sigBytes = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(`${order_id}|${payment_id}`),
    );
    const expectedSig = Array.from(new Uint8Array(sigBytes))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    if (expectedSig !== signature) {
      console.error('Signature mismatch');
      return json({ error: 'Invalid signature' }, 400);
    }

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // Find payment record — must belong to this user
    const { data: payment } = await sb
      .from('payments')
      .select('*')
      .eq('razorpay_order_id', order_id)
      .eq('user_id', user.id)
      .single();

    if (!payment) return json({ error: 'Payment not found' }, 404);

    const months = PLAN_MONTHS[payment.plan];
    if (!months) return json({ error: 'Unknown plan' }, 400);

    // Subscription starts after trial if trial is still running, else now
    const { data: profile } = await sb
      .from('profiles')
      .select('trial_started_at')
      .eq('id', user.id)
      .single();

    const now = new Date();
    let startDate = now;
    if (profile?.trial_started_at) {
      const trialEnd = new Date(
        new Date(profile.trial_started_at).getTime() + 3 * 24 * 60 * 60 * 1000,
      );
      if (trialEnd > now) startDate = trialEnd;
    }
    const expiresAt = addMonths(startDate, months);

    // Compare-and-swap rather than a read-then-write. The razorpay-webhook
    // function processes the same payment independently and the two can race;
    // guarding on status means whichever lands second matches zero rows and
    // skips the profile write instead of applying the purchase twice.
    const { data: claimed } = await sb
      .from('payments')
      .update({
        razorpay_payment_id:     payment_id,
        status:                  'paid',
        subscription_starts_at:  startDate.toISOString(),
        subscription_expires_at: expiresAt.toISOString(),
        paid_at:                 now.toISOString(),
      })
      .eq('razorpay_order_id', order_id)
      .neq('status', 'paid')
      .select();

    if (!claimed || claimed.length === 0) {
      // The webhook already activated this purchase. Report the stored dates
      // so the buyer still sees a success state rather than a confusing error.
      const { data: settled } = await sb
        .from('payments')
        .select('plan, scope, subscription_starts_at, subscription_expires_at')
        .eq('razorpay_order_id', order_id)
        .single();
      return json({
        ok:         true,
        plan:       settled?.plan ?? payment.plan,
        scope:      settled?.scope ?? payment.scope ?? 'both',
        starts_at:  settled?.subscription_starts_at ?? startDate.toISOString(),
        expires_at: settled?.subscription_expires_at ?? expiresAt.toISOString(),
      });
    }

    // Activate subscription on profile. A NULL payment.scope means this
    // order was created before the scope split (or during the deploy
    // window) — that always meant full access under the old model, so fall
    // back to 'both' rather than leaving the buyer with nothing.
    await sb.from('profiles').update({
      subscription_plan:       payment.plan,
      subscription_expires_at: expiresAt.toISOString(),
      plan_scope:               payment.scope || 'both',
    }).eq('id', user.id);

    // Payment confirmation email. The purchase is already applied above by
    // this point, so a send failure here must never change the response the
    // paying user gets — sendEmail reports failure instead of throwing.
    if (RESEND_API_KEY && user.email) {
      const emailInput = {
        plan:        payment.plan,
        scope:       payment.scope || 'both',
        amountPaise: payment.amount,
        expiresAt:   expiresAt.toISOString(),
        orderId:     order_id,
        paymentId:   payment_id,
      };
      const sent = await sendEmail({
        resendKey: RESEND_API_KEY,
        from:      'Elec-Buddy Payments <payments@elec-buddy.com>',
        to:        user.email,
        subject:   paymentConfirmedSubject(emailInput),
        html:      paymentConfirmedHtml(emailInput),
      });
      if (!sent.ok) console.error('Payment confirmation email failed:', sent.error);
    }

    return json({
      ok: true,
      plan:       payment.plan,
      scope:      payment.scope || 'both',
      starts_at:  startDate.toISOString(),
      expires_at: expiresAt.toISOString(),
    });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

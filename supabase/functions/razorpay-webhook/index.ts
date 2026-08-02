import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { sendEmail } from '../_shared/email-layout.ts';
import { paymentConfirmedHtml, paymentConfirmedSubject } from '../_shared/payment-email.ts';
import { applyPurchase, PLAN_MONTHS } from '../_shared/entitlements.ts';

// ─────────────────────────────────────────────────────────────────────────────
// Razorpay webhook: the authoritative record of what actually got paid.
//
// The client-side verify-razorpay-payment call is the fast path that gives the
// buyer instant access. It is NOT reliable on its own: if the tab closes, the
// network drops, or the browser crashes between Razorpay capturing the money
// and our client firing, the payment silently never lands in our database.
// This webhook closes that gap. Razorpay retries it until we return 2xx.
//
// Both paths can therefore run for the same payment, sometimes concurrently.
// Every write here is a compare-and-swap guarded on status, so whichever path
// arrives second becomes a no-op instead of double-applying.
//
// Deployed with --no-verify-jwt: Razorpay cannot present a Supabase JWT.
// Authentication is the HMAC signature check below, which is why that check
// must happen before anything else touches the database.
// ─────────────────────────────────────────────────────────────────────────────

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Length-independent, constant-time-ish comparison so a bad signature cannot
// be brute forced by measuring how early the mismatch happened.
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hmacHex(secret: string, payload: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return toHex(await crypto.subtle.sign('HMAC', key, encoder.encode(payload)));
}

serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const WEBHOOK_SECRET   = Deno.env.get('RAZORPAY_WEBHOOK_SECRET');
  const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY');

  if (!WEBHOOK_SECRET) {
    console.error('RAZORPAY_WEBHOOK_SECRET is not set');
    return json({ error: 'Server misconfigured' }, 500);
  }

  // The signature is computed over the exact bytes Razorpay sent. Parsing and
  // re-serializing the JSON would change key order and whitespace and break
  // the comparison, so the raw text has to be read first.
  const rawBody = await req.text();
  const signature = req.headers.get('x-razorpay-signature');
  if (!signature) return json({ error: 'Missing signature' }, 400);

  const expected = await hmacHex(WEBHOOK_SECRET, rawBody);
  if (!safeEqual(expected, signature)) {
    console.error('Webhook signature mismatch');
    return json({ error: 'Invalid signature' }, 401);
  }

  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  const eventType = event?.event as string | undefined;
  const eventId   = req.headers.get('x-razorpay-event-id') || null;
  if (!eventType) return json({ error: 'Missing event type' }, 400);

  // ── Replay protection ────────────────────────────────────────────────────
  // Razorpay retries until it gets a 2xx, so the same event can arrive many
  // times. Record it first with processed=false. If a row already exists and
  // is marked processed, this is a duplicate and we stop. If it exists but is
  // unprocessed, an earlier attempt died partway and we let it run again.
  if (eventId) {
    const { data: existing } = await sb
      .from('webhook_events')
      .select('id, processed')
      .eq('event_id', eventId)
      .maybeSingle();

    if (existing?.processed) {
      return json({ ok: true, duplicate: true });
    }
    if (!existing) {
      await sb.from('webhook_events').insert({
        event_id:   eventId,
        event_type: eventType,
        payload:    event,
        processed:  false,
      });
    }
  }

  const finish = async (result: Record<string, unknown>, errorMsg?: string) => {
    if (eventId) {
      await sb.from('webhook_events')
        .update({ processed: !errorMsg, error: errorMsg ?? null })
        .eq('event_id', eventId);
    }
    return json({ ok: !errorMsg, ...result }, errorMsg ? 500 : 200);
  };

  try {
    // ── Money is actually settled ──────────────────────────────────────────
    // payment.captured and order.paid both fire on a successful payment and
    // both carry payload.payment.entity, so either is enough. Subscribing to
    // both is safe: the compare-and-swap below means whichever arrives second
    // is a no-op rather than a double-apply.
    if (eventType === 'payment.captured' || eventType === 'order.paid') {
      const entity    = event?.payload?.payment?.entity;
      const orderId   = entity?.order_id;
      const paymentId = entity?.id;
      if (!orderId || !paymentId) return finish({}, `Malformed ${eventType} payload`);

      const { data: payment } = await sb
        .from('payments')
        .select('*')
        .eq('razorpay_order_id', orderId)
        .maybeSingle();

      // No local row means the order was created outside our flow, or our
      // insert failed at order-creation time. Record it rather than dropping
      // it on the floor, because Razorpay has the customer's money either way.
      if (!payment) {
        console.error('payment.captured for unknown order', orderId);
        return finish({ unknown_order: orderId });
      }

      const months = PLAN_MONTHS[payment.plan];
      if (!months) return finish({}, `Unknown plan on payment: ${payment.plan}`);

      // Subscription starts when the trial runs out, not the moment they pay,
      // so buying early during a trial does not burn the days already given.
      // Per-scope stacking, identical to verify-razorpay-payment - both paths
      // go through _shared/entitlements.ts so they cannot drift. This purchase
      // extends only the scope(s) it covers, each from its own current expiry.
      const now = new Date();
      const startDate = now;
      let buyerEmail: string | null = null;
      let profile: Record<string, unknown> = {};
      if (payment.user_id) {
        const { data } = await sb
          .from('profiles')
          .select('subscription_plan, trial_started_at, email, written_expires_at, oral_expires_at')
          .eq('id', payment.user_id)
          .maybeSingle();
        profile = data ?? {};
        buyerEmail = (data?.email as string) ?? null;
      }
      const effect = applyPurchase(profile, payment.scope, months, now);
      // Legacy single-slot value: earliest of the covered scopes, so a client
      // on cached JS under-grants rather than over-grants. See the same note
      // in verify-razorpay-payment.
      const expiresAt = new Date(
        Math.min(...effect.changes.map(c => new Date(c.to).getTime())),
      );

      // Compare-and-swap. If the client-side verify already flipped this row
      // to paid, this matches zero rows and we skip the profile write, so the
      // two paths can never both apply the same purchase.
      const { data: claimed } = await sb
        .from('payments')
        .update({
          razorpay_payment_id:     paymentId,
          status:                  'paid',
          subscription_starts_at:  startDate.toISOString(),
          subscription_expires_at: expiresAt.toISOString(),
          paid_at:                 now.toISOString(),
        })
        .eq('razorpay_order_id', orderId)
        .neq('status', 'paid')
        .select();

      if (!claimed || claimed.length === 0) {
        return finish({ already_applied: true, order_id: orderId });
      }

      if (payment.user_id) {
        await sb.from('profiles').update({
          subscription_plan:       payment.plan,
          subscription_expires_at: expiresAt.toISOString(),
          plan_scope:               payment.scope || 'both',
          written_expires_at:      effect.written_expires_at,
          oral_expires_at:         effect.oral_expires_at,
        }).eq('id', payment.user_id);
      }

      // Payment confirmation email. Only one of this function and
      // verify-razorpay-payment ever reaches this point for a given payment
      // (see the compare-and-swap above), so this is exactly one email per
      // purchase — covering the case where the buyer's tab closed before the
      // client-side path could fire at all.
      if (RESEND_API_KEY && buyerEmail) {
        const emailInput = {
          plan:        payment.plan,
          scope:       payment.scope || 'both',
          amountPaise: payment.amount,
          changes:     effect.changes,
          orderId:     orderId,
          paymentId:   paymentId,
        };
        const sent = await sendEmail({
          resendKey: RESEND_API_KEY,
          from:      'Elec-Buddy Payments <payments@elec-buddy.com>',
          to:        buyerEmail,
          subject:   paymentConfirmedSubject(emailInput),
          html:      paymentConfirmedHtml(emailInput),
        });
        if (!sent.ok) console.error('Payment confirmation email failed:', sent.error);
      }

      return finish({ applied: true, order_id: orderId, plan: payment.plan });
    }

    // ── payment.failed ─────────────────────────────────────────────────────
    if (eventType === 'payment.failed') {
      const entity  = event?.payload?.payment?.entity;
      const orderId = entity?.order_id;
      if (orderId) {
        // Only demote orders still awaiting payment. A captured payment must
        // never be walked back by a late-arriving failure for an earlier retry.
        await sb.from('payments')
          .update({ status: 'failed', razorpay_payment_id: entity?.id ?? null })
          .eq('razorpay_order_id', orderId)
          .eq('status', 'created');
      }
      return finish({ handled: 'payment.failed' });
    }

    // ── refund.processed: refunds issued from the Razorpay dashboard ───────
    // Refunds triggered from our own admin panel already write this row, so
    // the status guard keeps this a no-op in that case.
    if (eventType === 'refund.processed' || eventType === 'refund.created') {
      const refund    = event?.payload?.refund?.entity;
      const paymentId = refund?.payment_id;
      if (paymentId) {
        await sb.from('payments')
          .update({
            status:              'refunded',
            razorpay_refund_id:  refund?.id ?? null,
            refund_amount:       refund?.amount ?? null,
            refunded_at:         new Date().toISOString(),
          })
          .eq('razorpay_payment_id', paymentId)
          .neq('status', 'refunded');
      }
      return finish({ handled: eventType });
    }

    return finish({ ignored: eventType });

  } catch (err) {
    console.error('Webhook processing error:', err);
    // Returning 500 makes Razorpay retry, which is what we want for a
    // transient failure. The event row stays unprocessed so the retry runs.
    return finish({}, String(err));
  }
});

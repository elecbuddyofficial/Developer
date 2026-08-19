import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

/**
 * Confirms a mock interview booking after Razorpay reports success.
 *
 * Mirrors verify-razorpay-payment: same HMAC check, same constant-time
 * compare, same compare-and-swap. It confirms a booking and nothing else. It
 * grants no course access, touches no expiry column and writes no row in
 * public.payments, so a bug here cannot cost or give away course time.
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

/** Constant-time compare, so a wrong signature cannot be narrowed down by
 *  timing how long the check took. Same helper as verify-razorpay-payment. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const KEY_SECRET        = Deno.env.get('RAZORPAY_KEY_SECRET')!;

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authError } = await userClient.auth.getUser();
    if (authError || !user) return json({ error: 'Unauthorized' }, 401);

    const { order_id, payment_id, signature } = await req.json().catch(() => ({}));
    if (!order_id || !payment_id || !signature) {
      return json({ error: 'Missing fields' }, 400);
    }

    // HMAC-SHA256(key_secret, order_id + "|" + payment_id), Razorpay's scheme.
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw', encoder.encode(KEY_SECRET),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
    );
    const sigBytes = await crypto.subtle.sign(
      'HMAC', key, encoder.encode(`${order_id}|${payment_id}`),
    );
    const expectedSig = Array.from(new Uint8Array(sigBytes))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    if (!safeEqual(expectedSig, signature)) {
      console.error('Signature mismatch on mock interview order', order_id);
      return json({ error: 'Invalid signature' }, 400);
    }

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // ── The compare-and-swap ──────────────────────────────────────────────
    // Matching on status='reserved' AND user_id is what makes a replayed
    // call harmless: the second one updates nothing. Matching on user_id as
    // well means a valid signature for somebody else's order cannot confirm
    // a booking that is not theirs.
    const { data: rows, error: casErr } = await sb
      .from('mock_interview_bookings')
      .update({
        status: 'paid',
        razorpay_payment_id: payment_id,
        paid_at: new Date().toISOString(),
        reserved_until: null,
      })
      .eq('razorpay_order_id', order_id)
      .eq('user_id', user.id)
      .eq('status', 'reserved')
      .select('id, slot_id, amount_paise, email');

    if (casErr) {
      console.error('Booking confirm failed:', casErr);
      return json({ error: 'Could not confirm the booking' }, 500);
    }

    if (!rows || rows.length === 0) {
      // Either already confirmed (a replay, or the reconciliation job got
      // there first) or the hold lapsed and the row reads 'expired'. Both are
      // reported honestly rather than as a success or as a hard failure: the
      // money is real either way and the cadet needs to know which it is.
      const { data: existing } = await sb
        .from('mock_interview_bookings')
        .select('id, status, slot_id')
        .eq('razorpay_order_id', order_id)
        .eq('user_id', user.id)
        .maybeSingle();

      if (existing && (existing.status === 'paid' || existing.status === 'completed')) {
        return json({ ok: true, already: true, booking_id: existing.id });
      }
      return json({
        error: 'Your payment went through but the slot could not be confirmed. '
             + 'Do not pay again, we will sort this out and email you.',
        booking_id: existing?.id ?? null,
      }, 409);
    }

    const booking = rows[0];

    // ── Gateway fee, best effort ──────────────────────────────────────────
    // Bookkeeping, not the customer's money. Its own try/catch so a failure
    // here can never fail a confirmed booking, exactly as in razorpay-webhook.
    // Absent fee means "not known yet", never zero.
    try {
      const RZP_KEY_ID = Deno.env.get('RAZORPAY_KEY_ID')!;
      const credentials = btoa(`${RZP_KEY_ID}:${KEY_SECRET}`);
      const r = await fetch(`https://api.razorpay.com/v1/payments/${payment_id}`, {
        headers: { 'Authorization': `Basic ${credentials}` },
      });
      if (r.ok) {
        const p = await r.json();
        if (typeof p?.fee === 'number') {
          await sb.from('mock_interview_bookings').update({
            gateway_fee_paise: p.fee,
            gateway_tax_paise: typeof p.tax === 'number' ? p.tax : null,
            fee_synced_at: new Date().toISOString(),
          }).eq('id', booking.id);
        }
      }
    } catch (feeErr) {
      console.error('Fee capture failed (booking unaffected):', feeErr);
    }

    const { data: slot } = await sb
      .from('mock_interview_slots')
      .select('starts_at, duration_minutes')
      .eq('id', booking.slot_id)
      .maybeSingle();

    return json({
      ok: true,
      booking_id: booking.id,
      starts_at: slot?.starts_at ?? null,
      duration_minutes: slot?.duration_minutes ?? null,
      email: booking.email,
    });
  } catch (e) {
    console.error('verify-mock-interview-payment failed:', e);
    return json({ error: 'Something went wrong confirming your booking' }, 500);
  }
});

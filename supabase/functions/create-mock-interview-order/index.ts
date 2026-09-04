import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { priceWithCoupon, type CouponRow } from '../_shared/coupons.ts';

/**
 * Creates a Razorpay order for a mock interview booking.
 *
 * Deliberately NOT create-razorpay-order with an extra branch. That function
 * sells course access: it reads pricing_plans, reserves coupons and writes a
 * public.payments row that razorpay-webhook later turns into months of
 * entitlement. A booking is none of those things, and the one rule this
 * codebase keeps relearning is that the course money path does not get edited
 * for features that are not the course.
 *
 * The order of operations matters and is not arbitrary:
 *
 *   1. authenticate      - anonymous callers never reach the database
 *   2. read config       - and refuse outright while is_enabled is false
 *   3. price from the DB - the client's idea of the price is never read
 *   4. the coupon        - reserved under a row lock, priced by the shared
 *                          module, and released again if anything below fails
 *   5. reserve the slot  - under a row lock, before Razorpay is involved
 *   6. create the order  - and release the slot if this fails
 *
 * The coupon is reserved BEFORE the slot on purpose. A bad code is the more
 * likely failure of the two and it costs nothing to undo, whereas a held slot
 * is a booking nobody else can make. Failing on the cheap thing first means
 * fewer slots held for people who were never going to get through checkout.
 *
 * p_product is 'interview'. That is what stops a general course code, one with
 * no duration and no scope, being spent here: without it a "50 per cent off"
 * written for the course would quietly halve the interview price too.
 *
 * Reserving before calling Razorpay is what stops two cadets reaching
 * checkout on one slot. Reserving after would mean both got a payment page
 * and one of them would be told, after paying, that their slot was gone.
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

/** Trim, cap, and reject blank. The form checks these too; the form is not
 *  the boundary. Length caps are here because these land in an admin table
 *  and a CSV, and a 40KB "degree" is somebody probing, not a cadet. */
function field(v: unknown, max: number): string | null {
  if (typeof v !== 'string') return null;
  const t = v.trim();
  if (!t || t.length > max) return null;
  return t;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RZP_KEY_ID        = Deno.env.get('RAZORPAY_KEY_ID')!;
    const RZP_KEY_SECRET    = Deno.env.get('RAZORPAY_KEY_SECRET')!;

    // ── 1. Who is asking ──────────────────────────────────────────────────
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authError } = await userClient.auth.getUser();
    if (authError || !user) return json({ error: 'Unauthorized' }, 401);

    const body = await req.json().catch(() => ({}));
    const slotId = field(body?.slot_id, 64);
    if (!slotId) return json({ error: 'Pick a slot first' }, 400);

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // ── 2. Is this on sale at all ─────────────────────────────────────────
    // Checked server-side as well as in the UI. Hiding the button is
    // presentation; this is the part that means the feature is off.
    const { data: cfg } = await sb
      .from('mock_interview_config')
      .select('price_paise, is_enabled')
      .eq('id', true)
      .maybeSingle();

    if (!cfg || !cfg.is_enabled) {
      return json({ error: 'Mock interviews are not open for booking right now.' }, 409);
    }

    // ── 3. The price, from the database ───────────────────────────────────
    // body.amount is never read. It is not even destructured, so it cannot be
    // reached for by a later edit that means well.
    const sticker = Number(cfg.price_paise);
    if (!Number.isInteger(sticker) || sticker <= 0) {
      console.error('Bad price in mock_interview_config:', cfg.price_paise);
      return json({ error: 'Booking is temporarily unavailable' }, 500);
    }

    // ── 4. The intake sheet ───────────────────────────────────────────────
    const fullName = field(body?.full_name, 120);
    const phone    = field(body?.phone, 32);
    const degree   = field(body?.degree, 80);
    const stream   = field(body?.stream, 80);
    const college  = typeof body?.college === 'string' ? body.college.trim().slice(0, 160) : null;

    if (!fullName || !phone || !degree || !stream) {
      return json({ error: 'Name, phone, degree and stream are all needed.' }, 400);
    }
    // Digits only, 7 to 15, which covers every national format without
    // pretending to validate an Indian mobile specifically.
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      return json({ error: 'That phone number does not look right.' }, 400);
    }

    let gradYear: number | null = null;
    if (body?.graduation_year != null && body.graduation_year !== '') {
      const y = Number(body.graduation_year);
      if (!Number.isInteger(y) || y < 1980 || y > 2100) {
        return json({ error: 'Check the graduation year.' }, 400);
      }
      gradYear = y;
    }

    // The contact address is the account's, not one typed into the form.
    // Sending an assessment to an address a stranger typed is how this
    // becomes a way to mail people.
    const email = user.email;
    if (!email) return json({ error: 'Your account has no email address.' }, 400);

    // ── 4b. The coupon, if one was typed ──────────────────────────────────
    // Reserved through coupon_reserve, which is the authority: it takes the row
    // lock, counts live redemptions and enforces the product gate. Nothing here
    // decides whether the code is allowed; it only asks and reports the answer.
    const couponCode = field(body?.coupon_code, 32)?.toUpperCase() ?? null;
    let amount   = sticker;
    let discount = 0;
    let couponReserved = false;

    if (couponCode) {
      const { data: cRow, error: cErr } = await sb.rpc('coupon_reserve', {
        p_code: couponCode, p_user: user.id,
        p_duration: null, p_scope: null,
        p_amount: sticker, p_ttl_minutes: 15,
        p_product: 'interview',
      });

      if (cErr || !cRow) {
        // The vague messages are deliberate and come from the function itself:
        // distinguishing "no such code" from "already spent" lets someone probe
        // for codes that carry money. Only the two a buyer can act on are named.
        const m = String(cErr?.message || '');
        return json({
          error: m.includes('coupon_below_minimum')
            ? 'That code needs a larger order than this booking.'
            : m.includes('coupon_already_used')
              ? 'You have already used that code.'
              : 'That code is not valid for a mock interview.',
        }, 400);
      }
      couponReserved = true;

      // Same module the course path prices with, so a percent means the same
      // thing in both places. A booking has no site-wide sale, so base_amount
      // is the whole plan and salePrice comes back equal to the sticker.
      const price = priceWithCoupon({ base_amount: sticker }, cRow as CouponRow);

      // A code that takes it to nothing is a giveaway, not a discount, and a
      // free booking needs a path that never touches Razorpay at all. Refuse
      // it plainly rather than charging the 1 rupee floor to somebody who was
      // told it was free.
      if (price.isFullGrant) {
        await sb.rpc('coupon_release', { p_code: couponCode, p_user: user.id }).catch(() => {});
        return json({
          error: 'That code covers the whole booking, which is not supported yet. '
               + 'Ask for a code that takes an amount off instead.',
        }, 400);
      }

      amount   = price.final;
      discount = price.discount;
    }

    const releaseCoupon = async () => {
      if (!couponReserved || !couponCode) return;
      await sb.rpc('coupon_release', { p_code: couponCode, p_user: user.id }).catch(() => {});
    };

    // ── 5. Hold the slot ──────────────────────────────────────────────────
    const { data: booking, error: reserveErr } = await sb.rpc('mock_slot_reserve', {
      p_slot: slotId, p_user: user.id, p_email: email,
      p_full_name: fullName, p_phone: phone, p_degree: degree, p_stream: stream,
      p_college: college || null, p_grad_year: gradYear,
      p_amount: amount, p_ttl_minutes: 15,
    });

    if (reserveErr || !booking) {
      await releaseCoupon();
      const m = String(reserveErr?.message || '');
      return json({
        error: m.includes('details_incomplete')
          ? 'Name, phone, degree and stream are all needed.'
          : 'That slot has just been taken. Pick another one.',
      }, 409);
    }

    const bookingId = (booking as { id: string }).id;

    // Hand the slot back if we cannot get as far as an order. Best-effort
    // only: reserved_until is the actual guarantee, because a crashed isolate
    // never runs its own cleanup.
    const release = async () => {
      await sb.rpc('mock_slot_release', { p_booking: bookingId, p_user: user.id })
        .catch(() => {});
      // The code goes back with the slot. Without this a Razorpay outage would
      // spend somebody's single-use code on a booking that never happened.
      await releaseCoupon();
    };

    // ── 6. Razorpay ───────────────────────────────────────────────────────
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
        receipt: `mi_${bookingId.slice(0, 8)}_${Date.now()}`,
        // kind is what tells anything downstream that this is not a course
        // sale, without it having to know the booking table exists.
        notes: { kind: 'mock_interview', booking_id: bookingId, user_id: user.id },
      }),
    });

    if (!rzpRes.ok) {
      console.error('Razorpay error:', await rzpRes.text());
      await release();
      return json({ error: 'Could not start the payment. Nothing was charged.' }, 502);
    }

    const order = await rzpRes.json();

    // The discount is written here rather than passed through mock_slot_reserve,
    // for the same reason razorpay_order_id is: changing that function's
    // signature means reproducing its whole body, and the settle trigger only
    // reads these columns when the booking turns paid, which is long after.
    //
    // These three are what let a disposable code be deleted without making the
    // booking unexplainable: the row says what it cost, what came off, and
    // which code did it, with no coupons table needed to read it back.
    const { error: linkErr } = await sb
      .from('mock_interview_bookings')
      .update({
        razorpay_order_id: order.id,
        coupon_code:     couponCode,
        original_amount: sticker,
        discount_amount: discount,
      })
      .eq('id', bookingId);

    if (linkErr) {
      // Without the order id on the row, verify has no way to find this
      // booking and the cadet would pay into nothing. Refuse now instead.
      console.error('Could not attach order id:', linkErr);
      await release();
      return json({ error: 'Could not start the payment. Nothing was charged.' }, 500);
    }

    return json({
      order_id:   order.id,
      amount,
      currency:   'INR',
      key_id:     RZP_KEY_ID,
      booking_id: bookingId,
      // For the confirmation line. The client never computes a price; it is
      // told one, and this is only so it can show what was taken off.
      coupon_code:     couponCode,
      original_amount: sticker,
      discount_amount: discount,
    });
  } catch (e) {
    console.error('create-mock-interview-order failed:', e);
    return json({ error: 'Something went wrong. Nothing was charged.' }, 500);
  }
});

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// Fills in what Razorpay charged us on each sale.
//
// WHY THIS EXISTS AT ALL. public.payments records what the customer paid and
// nothing about what it cost us to take it. Razorpay's cut is roughly 2% plus
// GST on that fee, so a profit figure built from gross overstates every single
// sale. Small money today, wrong money forever if it is never recorded.
//
// WHY A BACKFILL AND NOT JUST THE WEBHOOK. razorpay-webhook writes fee and tax
// straight off the payment.captured payload, which covers the normal case. It
// is not sufficient on its own:
//
//   - The six payments taken before any of this existed have no fee recorded,
//     and no webhook will ever fire for them again.
//   - For some methods Razorpay computes the fee at settlement rather than at
//     capture, so the captured payload carries no fee and the webhook writes
//     nothing, correctly.
//   - A webhook can be missed. Razorpay retries, but the log is not forever.
//
// So this walks anything still missing a fee and asks the API directly.
//
// NULL MEANS UNKNOWN, NOT ZERO. Nothing here ever writes 0 to stand in for a
// fee it could not determine. A payment whose fee is genuinely still unknown
// keeps NULL, v_finance_revenue reports it as fee_unknown, and the finance page
// says so on screen. Defaulting to zero would silently report a sale as having
// cost nothing, which is the exact failure this whole column exists to avoid.
//
// Safe to run repeatedly: it only ever touches rows where the fee is missing.
//
// DEPLOY WITH --no-verify-jwt, like every other cron function here. Without it
// the call fails with UNAUTHORIZED_INVALID_JWT_FORMAT before reaching any of
// this code, which looks like the function being broken rather than
// misconfigured. That has already cost a debugging session once.
// ─────────────────────────────────────────────────────────────────────────

// Razorpay's payments API is rate limited. This is a backfill, not a hot path,
// and there are single digits of rows to do, so it goes one at a time with a
// small pause rather than in parallel.
const BATCH_LIMIT  = 200;
const PAUSE_MS     = 120;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

serve(async (req) => {
  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const CRON_SECRET      = Deno.env.get('CRON_SECRET');
  const RZP_KEY_ID       = Deno.env.get('RAZORPAY_KEY_ID');
  const RZP_KEY_SECRET   = Deno.env.get('RAZORPAY_KEY_SECRET');

  // Two callers: the GitHub Actions cron with the shared secret, and an admin
  // pressing the button on the finance page with their own session. Both are
  // checked; neither is assumed.
  const auth = req.headers.get('Authorization') ?? '';
  let allowed = false;
  let via = '';

  if (CRON_SECRET && auth === `Bearer ${CRON_SECRET}`) {
    allowed = true;
    via = 'cron';
  } else if (auth.startsWith('Bearer ')) {
    const token = auth.slice(7);
    const asUser = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data: { user } } = await asUser.auth.getUser(token);
    if (user) {
      // Re-checked here rather than trusted from the client. The page knowing
      // you are an admin is not the same as you being one.
      const { data: prof } = await asUser
        .from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
      if (prof?.is_admin) { allowed = true; via = 'admin'; }
    }
  }
  if (!allowed) return json({ error: 'Unauthorized' }, 401);

  if (!RZP_KEY_ID || !RZP_KEY_SECRET) {
    return json({ error: 'Razorpay keys are not configured on this project' }, 500);
  }

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
  const basic = btoa(`${RZP_KEY_ID}:${RZP_KEY_SECRET}`);

  let scanned = 0, updated = 0, stillUnknown = 0, failed = 0;
  const errors: string[] = [];

  try {
    // Only rows that actually took money and are missing the fee. A payment
    // with no razorpay_payment_id cannot be looked up at all.
    const { data: rows, error } = await sb
      .from('payments')
      .select('id, razorpay_payment_id, amount, status')
      .in('status', ['paid', 'refunded'])
      .is('gateway_fee_paise', null)
      .not('razorpay_payment_id', 'is', null)
      .limit(BATCH_LIMIT);

    if (error) throw new Error(error.message);

    for (const row of (rows ?? []) as Array<{ id: string; razorpay_payment_id: string }>) {
      scanned++;
      try {
        const res = await fetch(
          `https://api.razorpay.com/v1/payments/${row.razorpay_payment_id}`,
          { headers: { Authorization: `Basic ${basic}` } },
        );
        if (!res.ok) {
          failed++;
          errors.push(`${row.razorpay_payment_id}: HTTP ${res.status}`);
          await sleep(PAUSE_MS);
          continue;
        }
        const entity = await res.json();

        // The whole point of the guard: Razorpay returns fee: null until it
        // has computed one. Writing that as 0 would turn "we do not know" into
        // "it was free", permanently and invisibly.
        if (typeof entity?.fee !== 'number') {
          stillUnknown++;
          await sleep(PAUSE_MS);
          continue;
        }

        const { error: upErr } = await sb.from('payments').update({
          gateway_fee_paise: entity.fee,
          gateway_tax_paise: typeof entity.tax === 'number' ? entity.tax : null,
          fee_synced_at:     new Date().toISOString(),
        }).eq('id', row.id);

        if (upErr) { failed++; errors.push(`${row.razorpay_payment_id}: ${upErr.message}`); }
        else updated++;

        await sleep(PAUSE_MS);
      } catch (e) {
        failed++;
        errors.push(`${row.razorpay_payment_id}: ${String(e)}`);
      }
    }

    // Logged like the other jobs so a silent failure is visible in the admin
    // console rather than only in the function logs.
    await sb.from('cron_runs').insert({
      job: 'sync-razorpay-fees',
      ok: failed === 0,
      sent: updated,
      failed,
      skipped: stillUnknown,
      error: errors.length ? errors.slice(0, 5).join('; ') : null,
    });

    return json({
      ok: failed === 0,
      via,
      scanned,
      updated,
      still_unknown: stillUnknown,
      failed,
      errors: errors.slice(0, 5),
    });
  } catch (err) {
    await sb.from('cron_runs').insert({
      job: 'sync-razorpay-fees', ok: false, sent: updated, failed: failed + 1,
      error: String(err),
    });
    return json({ ok: false, error: String(err) }, 500);
  }
});

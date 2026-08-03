import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// Destroys accounts whose 30 day grace period has run out.
//
// Triggered daily by GitHub Actions with the shared CRON_SECRET, the same way
// send-expiry-emails is. There is no pg_cron on this project.
//
// Order matters and is not negotiable. prepare_account_purge() runs FIRST and
// does the two things that must outlive the account:
//
//   1. Copies the payer's email and name onto their payment rows. payments is
//      ON DELETE SET NULL so the rows survive, but the email only ever lived
//      in profiles, which is ON DELETE CASCADE. Without this step a deletion
//      leaves financial records that cannot be attributed to anyone, which
//      breaks bookkeeping and makes a later chargeback impossible to answer.
//   2. Writes a one way hash of the email, so a deleted account cannot come
//      back for a second free trial or re-use a single-use coupon.
//
// Only then is the auth user deleted, which cascades profiles away. If the
// delete fails after step 1 the account simply gets picked up again tomorrow;
// prepare_account_purge is idempotent, so repeating it is harmless.
// ─────────────────────────────────────────────────────────────────────────

const GRACE_DAYS = 30;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

serve(async (req) => {
  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const CRON_SECRET      = Deno.env.get('CRON_SECRET');

  // Not a user-facing endpoint. Without a configured secret it refuses to run
  // at all, rather than defaulting to open on the one job that deletes people.
  const auth = req.headers.get('Authorization');
  if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  let purged = 0;
  let failed = 0;
  const errors: string[] = [];

  try {
    const { data: due, error } = await sb.rpc('accounts_due_for_purge', { p_grace_days: GRACE_DAYS });
    if (error) throw new Error(error.message);

    for (const acc of (due ?? []) as { id: string }[]) {
      try {
        const { error: prepErr } = await sb.rpc('prepare_account_purge', { p_user: acc.id });
        if (prepErr) throw new Error('prepare failed: ' + prepErr.message);

        const { error: delErr } = await sb.auth.admin.deleteUser(acc.id);
        if (delErr) throw new Error('delete failed: ' + delErr.message);

        purged++;
      } catch (e) {
        failed++;
        // Never log the address itself: this job exists to erase it.
        errors.push(`${acc.id.slice(0, 8)}: ${String(e).slice(0, 120)}`);
      }
    }

    await sb.from('cron_runs').insert({
      job: 'purge-deleted-accounts',
      ok: failed === 0,
      sent: purged,
      failed,
      skipped: 0,
      error: errors.length ? errors.join(' | ').slice(0, 500) : null,
    });

    return json({ ok: failed === 0, purged, failed, errors });

  } catch (e) {
    await sb.from('cron_runs').insert({
      job: 'purge-deleted-accounts',
      ok: false, sent: purged, failed, skipped: 0,
      error: String(e).slice(0, 500),
    }).then(() => {}, () => {});
    return json({ error: String(e) }, 500);
  }
});

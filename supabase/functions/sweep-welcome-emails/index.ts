import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { sendEmail } from '../_shared/email-layout.ts';
import { welcomeEmailHtml, welcomeEmailSubject } from '../_shared/welcome-email.ts';
import { loadTemplate } from '../_shared/templates.ts';

// ─────────────────────────────────────────────────────────────────────────
// Catches welcome emails the browser failed to send.
//
// send-welcome-email is called from the signup page and is the fast path: it
// fires within seconds and this sweep then finds nothing to do. That is the
// normal outcome and an empty run is a healthy run.
//
// This exists because the browser is not a reliable trigger. It cancels
// in-flight requests on navigation, it can be closed instantly, it can lose
// connectivity, and it can land on an error URL when a mail scanner spends the
// confirmation token first. All four were silently costing real welcome
// emails, and none of them are visible from the client side.
//
// It reads the database and does not care what the browser did, so it cannot
// fail the same way.
//
// SAFE TO RUN REPEATEDLY. Claiming a send is a compare-and-swap on
// welcome_email_sent_at, so a user already welcomed, by either path, is never
// picked up again. Two overlapping runs cannot both claim the same person.
// ─────────────────────────────────────────────────────────────────────────

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

/** How far back to look. Deliberately short: welcoming somebody who signed up
 *  last week is a surprise, not a welcome. Also means deploying this can never
 *  mail the whole back catalogue by accident. */
const WINDOW_HOURS = 24;

/** A ceiling per run. If something goes wrong with the query or the window,
 *  the blast radius is this number and not the user table. */
const MAX_PER_RUN = 40;

/** Sent a few at a time with a pause, to stay inside provider rate limits
 *  rather than discovering them mid-sweep. */
const BATCH = 5;
const PAUSE_MS = 1100;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok');
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  // Same cron secret the other scheduled jobs use.
  const CRON_SECRET = Deno.env.get('CRON_SECRET');
  if (!CRON_SECRET || req.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY');

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
  const results = { found: 0, sent: 0, failed: 0, skipped: 0 };

  try {
    if (!RESEND_API_KEY) return json({ error: 'Email is not configured' }, 500);

    const { data: backlog, error } = await sb
      .rpc('welcome_email_backlog', { p_hours: WINDOW_HOURS });

    if (error) {
      console.error('welcome_email_backlog failed:', error.message);
      await sb.from('cron_runs').insert({
        job: 'sweep-welcome-emails', ok: false, sent: 0, failed: 0, skipped: 0,
        error: 'backlog query failed: ' + error.message,
      });
      return json({ error: 'Could not read the backlog' }, 500);
    }

    const list = (backlog ?? []) as { id: string; email: string; full_name: string | null }[];
    results.found = list.length;

    // Loaded once for the whole sweep, not per recipient.
    const tpl = await loadTemplate(sb, 'welcome');
    const due = list.slice(0, MAX_PER_RUN);

    for (let i = 0; i < due.length; i += BATCH) {
      const chunk = due.slice(i, i + BATCH);
      await Promise.all(chunk.map(async (u) => {
        // Claim first, exactly as send-welcome-email does, so the fast path and
        // this sweep can never both mail the same person. Note there is no
        // recency filter here: this function's whole job is the case where the
        // browser path already missed its window.
        const { data: claimed } = await sb
          .from('profiles')
          .update({ welcome_email_sent_at: new Date().toISOString() })
          .eq('id', u.id)
          .is('welcome_email_sent_at', null)
          .select('id')
          .maybeSingle();

        if (!claimed) { results.skipped++; return; }   // the browser beat us to it

        const sent = await sendEmail({
          resendKey: RESEND_API_KEY,
          from:      'Elec-Buddy <noreply@elec-buddy.com>',
          to:        u.email,
          subject:   welcomeEmailSubject(tpl, u.full_name),
          html:      welcomeEmailHtml({ name: u.full_name, template: tpl }),
        });

        if (sent.ok) {
          results.sent++;
        } else {
          // Hand the claim back so the next run retries, rather than burning
          // this user's only attempt on a transient Resend failure.
          results.failed++;
          console.error('sweep welcome failed for one user:', sent.error);
          await sb.from('profiles')
            .update({ welcome_email_sent_at: null })
            .eq('id', u.id);
        }
      }));
      if (i + BATCH < due.length) await sleep(PAUSE_MS);
    }

    // Recorded so a job that silently stops firing is visible in the admin
    // panel rather than discovered weeks later by a customer.
    await sb.from('cron_runs').insert({
      job: 'sweep-welcome-emails',
      ok: results.failed === 0,
      sent: results.sent,
      failed: results.failed,
      skipped: results.skipped,
      error: list.length > MAX_PER_RUN
        ? `backlog of ${list.length} exceeded the ${MAX_PER_RUN} per-run cap; the rest follow next run`
        : null,
    });

    return json({ ok: true, results });

  } catch (e) {
    console.error(e);
    await sb.from('cron_runs').insert({
      job: 'sweep-welcome-emails', ok: false,
      sent: results.sent, failed: results.failed, skipped: results.skipped,
      error: String(e).slice(0, 400),
    }).then(() => {}, () => {});
    return json({ error: 'Internal error' }, 500);
  }
});

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { emailLayout, sendEmail, escapeHtml, APP_URL } from '../_shared/email-layout.ts';

// ─────────────────────────────────────────────────────────────────────────
// Self-service account deletion, with a 30 day grace period.
//
// Distinct from delete-user, which is the admin tool and explicitly refuses
// self-deletion. This one only ever acts on the caller's own account: the id
// comes from the JWT and there is no way to name a different target.
//
// Nothing is destroyed here. It sets a marker; the purge job acts on it once
// the grace window has passed. That window exists because a deletion made in
// frustration at 2am is a support ticket and a refund, and because it gives
// us a chance to notice if a wave of deletions is really coupon abuse.
//
// The confirmation email is not a courtesy. It is the recovery path: if the
// account was deleted by someone who got hold of the session, the real owner
// finds out while there is still time to stop it.
// ─────────────────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

const GRACE_DAYS = 30;

function fmt(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
    const ANON_KEY         = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY');

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authErr } = await userClient.auth.getUser();
    if (authErr || !user) return json({ error: 'Unauthorized' }, 401);

    const body = await req.json().catch(() => ({}));
    const action = body?.action === 'cancel' ? 'cancel' : 'request';

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: profile } = await sb
      .from('profiles')
      .select('email, full_name, is_admin, deletion_requested_at, written_expires_at, oral_expires_at, subscription_plan')
      .eq('id', user.id)
      .single();
    if (!profile) return json({ error: 'Profile not found' }, 404);

    // ── Cancel ─────────────────────────────────────────────────────────
    if (action === 'cancel') {
      const { error } = await sb
        .from('profiles')
        .update({ deletion_requested_at: null })
        .eq('id', user.id);
      if (error) return json({ error: 'Could not cancel. Please try again.' }, 500);
      return json({ ok: true, cancelled: true });
    }

    // ── Request ────────────────────────────────────────────────────────

    // An admin deleting themselves locks the panel, and profiles.is_admin is
    // what every RLS policy checks. Deliberate act only, via another admin.
    if (profile.is_admin) {
      return json({ error: 'Admin accounts cannot be deleted from here. Contact support.' }, 400);
    }

    // Typing the address is the deliberate act. Checked server-side as well as
    // in the UI, so a stray call to this endpoint can never delete an account
    // on its own.
    const typed = String(body?.confirm_email ?? '').trim().toLowerCase();
    if (!typed || typed !== String(profile.email ?? '').trim().toLowerCase()) {
      return json({ error: 'Type your account email exactly to confirm.' }, 400);
    }

    // Already scheduled: report the existing date rather than restarting the
    // clock, otherwise pressing the button twice quietly buys another 30 days.
    if (profile.deletion_requested_at) {
      const due = new Date(new Date(profile.deletion_requested_at).getTime() + GRACE_DAYS * 86400000);
      return json({ ok: true, already: true, deletes_on: due.toISOString() });
    }

    const now = new Date();
    const { error } = await sb
      .from('profiles')
      .update({ deletion_requested_at: now.toISOString() })
      .eq('id', user.id);
    if (error) return json({ error: 'Could not schedule deletion. Please try again.' }, 500);

    const due = new Date(now.getTime() + GRACE_DAYS * 86400000);

    // Best effort. The deletion is already scheduled and must not depend on
    // the mail provider, so a failure here is logged and nothing more.
    if (RESEND_API_KEY && profile.email) {
      const name = profile.full_name ? escapeHtml(String(profile.full_name).split(' ')[0]) : 'there';
      const html = emailLayout({
        preheader: `Your Elec-Buddy account is scheduled for deletion on ${fmt(due)}.`,
        heading: 'Your account is scheduled for deletion',
        bodyHtml: `
          <p>Hi ${name},</p>
          <p>We received a request to delete your Elec-Buddy account. Nothing has been
             removed yet. Your account and everything in it will be permanently deleted on
             <strong>${fmt(due)}</strong>.</p>
          <p>Until then you can still sign in normally, and your access continues as usual.
             If you change your mind, sign in and choose <strong>Keep my account</strong> on
             the notice at the bottom of the screen, or in Settings.</p>
          <p><strong>If you did not ask for this</strong>, sign in now and cancel it, then
             change your password. Someone else may have access to your account.</p>
          <p style="font-size:13px;color:#8FA3B8">After ${fmt(due)} we will delete your
             profile, your name and email, and your study progress. We keep a record of
             payments you have made, because we are required to retain financial records,
             and a one way hash of your email address so that a deleted account cannot be
             used to claim a second free trial. Neither can be used to identify you.</p>
        `,
        ctaUrl: APP_URL,
        ctaLabel: 'Sign in and cancel',
        signerName: 'Elec-Buddy',
      });
      const sent = await sendEmail({
        resendKey: RESEND_API_KEY,
        from: 'Elec-Buddy <noreply@elec-buddy.com>',
        to: profile.email,
        subject: 'Your Elec-Buddy account is scheduled for deletion',
        html,
      });
      if (!sent.ok) console.error('Deletion notice email failed:', sent.error);
    }

    return json({ ok: true, deletes_on: due.toISOString(), grace_days: GRACE_DAYS });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

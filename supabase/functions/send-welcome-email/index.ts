import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { sendEmail } from '../_shared/email-layout.ts';
import { welcomeEmailHtml, welcomeEmailSubject } from '../_shared/welcome-email.ts';
import { loadTemplate } from '../_shared/templates.ts';

// ─────────────────────────────────────────────────────────────────────────
// Called from the client right after auth.signUp() resolves (both the
// "session issued immediately" and "confirm your email first" branches —
// handle_new_user() stamps trial_started_at at the same moment either way,
// so the trial is genuinely live before this fires in both cases).
//
// No JWT to check here: in the email-confirmation-required branch there is
// no session yet to present one. Abuse is bounded a different way — the
// update below is a one-shot compare-and-swap on welcome_email_sent_at, so
// a retried call, or someone guessing a real user_id, can never produce more
// than one send per account, and the recency window on trial_started_at
// means it can only ever fire in the few minutes around actual signup.
// ─────────────────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
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
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY');

    const { user_id } = await req.json();
    if (!user_id) return json({ error: 'user_id required' }, 400);

    const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const recentCutoff = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: claimed } = await sb
      .from('profiles')
      .update({ welcome_email_sent_at: new Date().toISOString() })
      .eq('id', user_id)
      .is('welcome_email_sent_at', null)
      .gte('trial_started_at', recentCutoff)
      .select('email, full_name')
      .maybeSingle();

    // Not an error: already sent, unknown id, or outside the signup window —
    // all of these are expected no-ops, not failures.
    if (!claimed || !claimed.email || !RESEND_API_KEY) {
      return json({ ok: true, skipped: true });
    }

    // Null unless an admin has written and activated one, in which case it
    // replaces the wording and can carry a coupon. It never blocks the send.
    const tpl = await loadTemplate(sb, 'welcome');

    const sent = await sendEmail({
      resendKey: RESEND_API_KEY,
      from:      'Elec-Buddy <noreply@elec-buddy.com>',
      to:        claimed.email,
      subject:   welcomeEmailSubject(tpl, claimed.full_name),
      html:      welcomeEmailHtml({ name: claimed.full_name, template: tpl }),
    });

    // The stamp above is what makes this one-shot, but it is claimed BEFORE
    // Resend is called (so two concurrent calls can't both send). If the send
    // then fails, hand the slot back - otherwise a transient Resend outage
    // burns the only attempt and that user never gets a welcome email at all.
    if (!sent.ok) {
      console.error('Welcome email failed:', sent.error);
      await sb.from('profiles')
        .update({ welcome_email_sent_at: null })
        .eq('id', user_id);
    }

    return json({ ok: sent.ok });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

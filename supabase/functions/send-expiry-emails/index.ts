import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

async function sendEmail(
  to: string,
  subject: string,
  html: string,
  resendKey: string,
): Promise<boolean> {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Elec-Buddy <noreply@elec-buddy.com>',
        to,
        subject,
        html,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ── Email templates ────────────────────────────────────────────────────────

function baseLayout(preheader: string, heading: string, body: string, ctaUrl: string, ctaLabel: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Elec-Buddy</title>
</head>
<body style="margin:0;padding:0;background-color:#070D1A;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;color:#DDE5EF;">
<span style="display:none;max-height:0;overflow:hidden">${preheader}</span>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#070D1A;padding:40px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:480px;background-color:#0D1E33;border:1px solid #1A3050;border-radius:16px;">
        <tr>
          <td style="padding:40px 32px;text-align:center;">

            <div style="font-family:Georgia,serif;font-size:34px;font-weight:bold;color:#C8A44A;line-height:1.2;">
              Elec-Buddy
            </div>
            <div style="margin-top:8px;font-family:Consolas,Monaco,'Courier New',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#4A6880;">
              ETO EXAM PREPARATION
            </div>

            <h1 style="margin:36px 0 20px 0;font-size:24px;font-weight:700;line-height:1.3;color:#DDE5EF;">
              ${heading}
            </h1>

            <div style="font-size:15px;line-height:1.75;color:#DDE5EF;text-align:left;">
              ${body}
            </div>

            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:32px auto 8px;">
              <tr>
                <td align="center" bgcolor="#C8A44A" style="border-radius:10px;">
                  <a href="${ctaUrl}"
                     style="display:inline-block;padding:15px 32px;background-color:#C8A44A;color:#070D1A;text-decoration:none;font-size:15px;font-weight:700;border-radius:10px;">
                    ${ctaLabel}
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:28px 0 0 0;font-size:13px;line-height:1.6;color:#4A6880;">
              Open the app, tap your profile, then Upgrade Plan to see your options.
            </p>

          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #1A3050;text-align:center;">
            <div style="font-size:12px;color:#2E5577;line-height:1.7;">
              Elec-Buddy · ETO CoC and STCW Exam Preparation<br>
              Questions? <a href="mailto:noreply@elec-buddy.com" style="color:#4A6880;text-decoration:none;">noreply@elec-buddy.com</a>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

const APP_URL = 'https://elecbuddyofficial.github.io/Developer/app/';

function trialExpiringHtml(): string {
  return baseLayout(
    'Your free trial ends in 3 days. Upgrade to keep full access.',
    'Your free trial ends in 3 days',
    `<p style="margin:0 0 16px 0;">Your Elec-Buddy free trial ends in 3 days. After that, access to study notes, quizzes, and Surveyor Q&amp;A will be restricted.</p>
     <p style="margin:0;">Upgrade now to keep studying without interruption.</p>`,
    APP_URL,
    'Upgrade My Plan',
  );
}

function trialExpiredHtml(): string {
  return baseLayout(
    'Your Elec-Buddy trial has ended. Upgrade to continue.',
    'Your free trial has ended',
    `<p style="margin:0 0 16px 0;">Your Elec-Buddy free trial has ended. Your reading progress and quiz scores are all saved, and you can pick up right where you left off as soon as you upgrade.</p>
     <p style="margin:0;">Nothing is lost. Upgrade and continue studying today.</p>`,
    APP_URL,
    'Upgrade My Plan',
  );
}

function subExpiringHtml(plan: string): string {
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  return baseLayout(
    `Your ${planLabel} plan expires in 3 days. Renew to stay on track.`,
    `Your ${planLabel} plan expires in 3 days`,
    `<p style="margin:0 0 16px 0;">Your Elec-Buddy ${planLabel} plan expires in 3 days. Renew before it lapses to keep uninterrupted access to all your study materials.</p>
     <p style="margin:0;">If you have any questions about renewal, just reply to this email.</p>`,
    APP_URL,
    'Renew My Plan',
  );
}

function subExpiredHtml(plan: string): string {
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  return baseLayout(
    `Your ${planLabel} plan has ended. Renew to continue studying.`,
    `Your ${planLabel} plan has expired`,
    `<p style="margin:0 0 16px 0;">Your Elec-Buddy ${planLabel} plan has expired. Your reading progress and quiz history are intact. Renew to get back to studying right away.</p>
     <p style="margin:0;">Questions? Reply to this email and we will sort it out quickly.</p>`,
    APP_URL,
    'Renew My Plan',
  );
}

// ── Main handler ───────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok');
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  // Verify cron secret so only GitHub Actions can trigger this
  const auth = req.headers.get('Authorization');
  const CRON_SECRET = Deno.env.get('CRON_SECRET');
  if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY')!;

  const sb  = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
  const now = new Date();

  const dateOnly = (d: Date) => d.toISOString().split('T')[0];
  const daysAgo  = (n: number) => { const d = new Date(now); d.setDate(d.getDate() - n); return dateOnly(d); };
  const daysAhead = (n: number) => { const d = new Date(now); d.setDate(d.getDate() + n); return dateOnly(d); };

  const results = { sent: 0, failed: 0, skipped: 0, errors: [] as string[] };

  async function dispatch(email: string | null, subject: string, html: string) {
    if (!email) { results.skipped++; return; }
    const ok = await sendEmail(email, subject, html, RESEND_API_KEY);
    ok ? results.sent++ : results.failed++;
  }

  // ── 1. Trial expiring in 3 days ──────────────────────────────────────────
  // Trial is 7 days; started 4 days ago means it expires exactly 3 days from now
  const trialWarnDay = daysAgo(4);
  const { data: trialWarning } = await sb
    .from('profiles')
    .select('email')
    .eq('subscription_plan', 'trial')
    .gte('trial_started_at', trialWarnDay + 'T00:00:00Z')
    .lte('trial_started_at', trialWarnDay + 'T23:59:59Z');

  for (const u of trialWarning ?? []) {
    await dispatch(u.email, 'Your Elec-Buddy trial expires in 3 days', trialExpiringHtml());
  }

  // ── 2. Trial expired yesterday ───────────────────────────────────────────
  // Started 8 days ago means 7-day trial ended yesterday
  const trialExpiredDay = daysAgo(8);
  const { data: trialExpired } = await sb
    .from('profiles')
    .select('email')
    .eq('subscription_plan', 'trial')
    .gte('trial_started_at', trialExpiredDay + 'T00:00:00Z')
    .lte('trial_started_at', trialExpiredDay + 'T23:59:59Z');

  for (const u of trialExpired ?? []) {
    await dispatch(u.email, 'Your Elec-Buddy trial has ended', trialExpiredHtml());
  }

  // ── 3. Subscription expiring in 3 days ───────────────────────────────────
  const subWarnDay = daysAhead(3);
  const { data: subWarning } = await sb
    .from('profiles')
    .select('email, subscription_plan')
    .in('subscription_plan', ['starter', 'standard', 'pro'])
    .gte('subscription_expires_at', subWarnDay + 'T00:00:00Z')
    .lte('subscription_expires_at', subWarnDay + 'T23:59:59Z');

  for (const u of subWarning ?? []) {
    await dispatch(
      u.email,
      'Your Elec-Buddy subscription expires in 3 days',
      subExpiringHtml(u.subscription_plan),
    );
  }

  // ── 4. Subscription expired yesterday ────────────────────────────────────
  const subExpiredDay = daysAgo(1);
  const { data: subExpired } = await sb
    .from('profiles')
    .select('email, subscription_plan')
    .in('subscription_plan', ['starter', 'standard', 'pro'])
    .gte('subscription_expires_at', subExpiredDay + 'T00:00:00Z')
    .lte('subscription_expires_at', subExpiredDay + 'T23:59:59Z');

  for (const u of subExpired ?? []) {
    await dispatch(
      u.email,
      'Your Elec-Buddy subscription has ended',
      subExpiredHtml(u.subscription_plan),
    );
  }

  return json({ ok: true, results, timestamp: now.toISOString() });
});

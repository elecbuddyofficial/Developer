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

function baseLayout(preheader: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>Elec-Buddy</title>
<style>
  body{margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
  .wrap{max-width:560px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
  .header{background:#0f172a;padding:28px 36px;display:flex;align-items:center}
  .logo{font-size:20px;font-weight:800;letter-spacing:-.3px}
  .logo-e{color:#3b82f6}
  .logo-b{color:#e2e8f0}
  .body{padding:36px}
  .body p{margin:0 0 16px;font-size:15px;line-height:1.65;color:#334155}
  .body p:last-child{margin-bottom:0}
  .cta{display:inline-block;margin:24px 0;background:#3b82f6;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:10px;letter-spacing:.1px}
  .box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:18px 20px;margin:20px 0}
  .box p{margin:0;font-size:14px;color:#64748b}
  .footer{padding:20px 36px;border-top:1px solid #f1f5f9;text-align:center}
  .footer p{margin:0;font-size:12px;color:#94a3b8;line-height:1.6}
  .footer a{color:#64748b;text-decoration:none}
</style>
</head>
<body>
<span style="display:none;max-height:0;overflow:hidden">${preheader}</span>
<div class="wrap">
  <div class="header">
    <span class="logo"><span class="logo-e">Elec</span><span class="logo-b">-Buddy</span></span>
  </div>
  <div class="body">${body}</div>
  <div class="footer">
    <p>
      Elec-Buddy &mdash; ETO CoC &amp; STCW Exam Preparation<br>
      Questions? <a href="mailto:jojiblesson@gmail.com">jojiblesson@gmail.com</a>
    </p>
  </div>
</div>
</body>
</html>`;
}

function trialExpiringHtml(): string {
  return baseLayout(
    'Your free trial ends in 3 days — upgrade to keep full access.',
    `<p>Hi,</p>
    <p>Your <strong>Elec-Buddy free trial ends in 3 days</strong>. After that, access to study notes, quizzes, and Surveyor Q&amp;A will be restricted.</p>
    <p>Upgrade now to keep studying without interruption:</p>
    <a class="cta" href="https://elecbuddyofficial.github.io/Developer/app/">Upgrade My Plan</a>
    <div class="box">
      <p>Open the app &rarr; tap your profile &rarr; Upgrade Plan to see available options.</p>
    </div>
    <p>If you have any questions, just reply to this email — we're happy to help.</p>`,
  );
}

function trialExpiredHtml(): string {
  return baseLayout(
    'Your Elec-Buddy trial has ended — upgrade to continue.',
    `<p>Hi,</p>
    <p>Your <strong>Elec-Buddy free trial has ended</strong>. Your progress is saved, and you can pick up right where you left off as soon as you upgrade.</p>
    <a class="cta" href="https://elecbuddyofficial.github.io/Developer/app/">Upgrade My Plan</a>
    <div class="box">
      <p>All your reading progress and quiz scores are waiting for you — nothing is lost.</p>
    </div>
    <p>Questions about plans? Reply to this email and we'll get back to you.</p>`,
  );
}

function subExpiringHtml(plan: string): string {
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  return baseLayout(
    `Your ${planLabel} plan expires in 3 days — renew to stay on track.`,
    `<p>Hi,</p>
    <p>Your <strong>Elec-Buddy ${planLabel} plan expires in 3 days</strong>. To keep uninterrupted access to all your study materials, please renew before it lapses.</p>
    <a class="cta" href="https://elecbuddyofficial.github.io/Developer/app/">Renew My Plan</a>
    <div class="box">
      <p>Open the app &rarr; tap your profile &rarr; Upgrade Plan to renew.</p>
    </div>
    <p>Need help or have a question about renewal? Just reply here.</p>`,
  );
}

function subExpiredHtml(plan: string): string {
  const planLabel = plan.charAt(0).toUpperCase() + plan.slice(1);
  return baseLayout(
    `Your ${planLabel} plan has ended — renew to continue studying.`,
    `<p>Hi,</p>
    <p>Your <strong>Elec-Buddy ${planLabel} plan has expired</strong>. Your reading progress and quiz history are all saved — renew to get back to studying right away.</p>
    <a class="cta" href="https://elecbuddyofficial.github.io/Developer/app/">Renew My Plan</a>
    <div class="box">
      <p>All your progress is intact. Renew and continue exactly where you left off.</p>
    </div>
    <p>Questions? Reply to this email — we'll help you sort it out quickly.</p>`,
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

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

const APP_URL = 'https://elecbuddyofficial.github.io/Developer/app/';

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Blank-line-separated paragraphs get proper spacing instead of one long
// <br>-riddled block, so a multi-thought message actually reads like one.
function formatMessage(raw: string): string {
  const paragraphs = raw.split(/\n{2,}/).filter(function(p) { return p.trim(); });
  return paragraphs.map(function(p, i) {
    const escaped = escapeHtml(p).replace(/\n/g, '<br>');
    const marginBottom = i === paragraphs.length - 1 ? '0' : '16px';
    return `<p style="margin:0 0 ${marginBottom} 0;">${escaped}</p>`;
  }).join('');
}

// "Normal" mode: a true plain-text email with no branding, just the message
// and a plain signature, like something typed directly in an inbox.
function plainTextBody(message: string, signerName: string | null): string {
  let text = message.trim();
  if (signerName) text += `\n\nRegards,\n${signerName}\nElec-Buddy Team`;
  return text;
}

function layout(opts: { heading: string; bodyHtml: string; signerName: string | null }): string {
  const { heading, bodyHtml, signerName } = opts;

  const signature = signerName
    ? `<p style="margin:26px 0 0 0;font-size:14px;line-height:1.6;color:#8FA3B8;">
         Regards,<br>
         ${escapeHtml(signerName)}<br>
         <span style="font-size:12px;color:#4A6880;">Elec-Buddy Team</span>
       </p>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Elec-Buddy</title>
</head>
<body style="margin:0;padding:0;background-color:#070D1A;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;color:#DDE5EF;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#070D1A;padding:40px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:480px;background-color:#0D1E33;border:1px solid #1A3050;border-radius:16px;">
        <tr>
          <td style="padding:36px 32px 4px;text-align:center;">
            <div style="font-family:Georgia,serif;font-size:28px;font-weight:bold;color:#C8A44A;line-height:1.2;">
              Elec-Buddy
            </div>
            <div style="margin-top:7px;font-family:Consolas,Monaco,'Courier New',monospace;font-size:10.5px;letter-spacing:2px;text-transform:uppercase;color:#4A6880;">
              ETO EXAM PREPARATION
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:30px 32px 6px;">
            <h1 style="margin:0 0 18px 0;font-size:20px;font-weight:700;line-height:1.35;color:#DDE5EF;text-align:left;">
              ${heading}
            </h1>
            <div style="font-size:15px;line-height:1.75;color:#DDE5EF;text-align:left;">
              ${bodyHtml}
            </div>
            ${signature}
          </td>
        </tr>
        <tr>
          <td style="padding:10px 32px 34px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:8px auto 0;">
              <tr>
                <td align="center" bgcolor="#C8A44A" style="border-radius:10px;">
                  <a href="${APP_URL}"
                     style="display:inline-block;padding:13px 30px;background-color:#C8A44A;color:#070D1A;text-decoration:none;font-size:14px;font-weight:700;border-radius:10px;">
                    Open Elec-Buddy
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #1A3050;text-align:center;">
            <div style="font-size:12px;color:#2E5577;line-height:1.7;">
              Elec-Buddy &middot; ETO CoC and STCW Exam Preparation<br>
              You can reply directly to this email.
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

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
    const ANON_KEY         = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY')!;

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    // Verify caller identity
    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user: caller }, error: callerErr } = await callerClient.auth.getUser();
    if (callerErr || !caller) return json({ error: 'Unauthorized' }, 401);

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // Confirm caller is an admin
    const { data: callerProfile } = await admin
      .from('profiles')
      .select('is_admin, email, full_name')
      .eq('id', caller.id)
      .single();
    if (!callerProfile?.is_admin) return json({ error: 'Forbidden: admin access required' }, 403);

    const body = await req.json().catch(() => ({}));
    const { user_id, subject, message, from_admin_id, email_format } = body;
    const useTemplate = email_format !== 'plain';

    if (!user_id || typeof user_id !== 'string') return json({ error: 'user_id required' }, 400);
    if (!subject || typeof subject !== 'string' || !subject.trim()) return json({ error: 'subject required' }, 400);
    if (!message || typeof message !== 'string' || !message.trim()) return json({ error: 'message required' }, 400);
    if (subject.length > 200) return json({ error: 'subject too long' }, 400);
    if (message.length > 8000) return json({ error: 'message too long' }, 400);

    // Look up target user's email
    const { data: target } = await admin
      .from('profiles')
      .select('email')
      .eq('id', user_id)
      .single();
    if (!target?.email) return json({ error: 'User not found' }, 404);

    // Who this email appears to come from. "official" is a generic identity;
    // otherwise any admin can pick another admin from the dropdown to send
    // "as" them. Resend can only originate mail from a domain we've verified
    // (elec-buddy.com) — if the picked admin's own address is on that
    // domain, we use it directly as the envelope "from" (their real inbox).
    // If their login is on some other domain (personal Gmail etc.), we
    // can't originate from there, so "from" falls back to official@ and
    // reply-to is set to their real address instead.
    const ELEC_BUDDY_DOMAIN = '@elec-buddy.com';
    let fromHeader: string;
    let replyTo: string | undefined;
    let signerProfile = callerProfile; // who signs the email — defaults to whoever's sending it

    if (!from_admin_id || from_admin_id === 'official') {
      fromHeader = 'Elec-Buddy <official@elec-buddy.com>';
      replyTo = callerProfile.full_name ? `${callerProfile.full_name} <${callerProfile.email}>` : callerProfile.email;
    } else {
      let sender = callerProfile;
      if (from_admin_id !== caller.id) {
        const { data: pickedAdmin } = await admin
          .from('profiles')
          .select('is_admin, email, full_name')
          .eq('id', from_admin_id)
          .single();
        if (!pickedAdmin?.is_admin) return json({ error: 'Selected sender is not an admin' }, 400);
        sender = pickedAdmin;
      }
      signerProfile = sender;

      const onVerifiedDomain = !!sender.email && sender.email.toLowerCase().endsWith(ELEC_BUDDY_DOMAIN);
      if (onVerifiedDomain) {
        fromHeader = sender.full_name ? `${sender.full_name} <${sender.email}>` : sender.email!;
        replyTo = undefined; // replies naturally return to the from address itself
      } else {
        const senderName = sender.full_name ? `${sender.full_name} · Elec-Buddy` : 'Elec-Buddy';
        fromHeader = `${senderName} <official@elec-buddy.com>`;
        replyTo = sender.email
          ? (sender.full_name ? `${sender.full_name} <${sender.email}>` : sender.email)
          : undefined;
      }
    }

    const signerName = signerProfile.full_name || null;
    const emailBody = useTemplate
      ? { html: layout({ heading: subject, bodyHtml: formatMessage(message), signerName }) }
      : { text: plainTextBody(message, signerName) };

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromHeader,
        to: target.email,
        reply_to: replyTo,
        subject,
        ...emailBody,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend error:', errText);
      return json({ error: 'Failed to send email' }, 502);
    }

    // Log for audit / profile history
    await admin.from('admin_emails').insert({
      user_id,
      admin_id: caller.id,
      to_email: target.email,
      subject,
      message,
    });

    return json({ ok: true });

  } catch (err) {
    console.error(err);
    return json({ error: String(err) }, 500);
  }
});

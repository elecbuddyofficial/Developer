// Shared HTML layout for every transactional email Elec-Buddy sends.
// Previously each function (send-admin-email, send-expiry-emails) carried
// its own near-identical copy of this table-based dark-navy layout. A third
// copy for payment confirmations was the point where that stopped being
// reasonable — this is the one place to change the look going forward.
//
// Deno edge functions import this via a relative path to `_shared`, which
// Supabase bundles alongside every function at deploy time (the standard
// convention for code shared across functions in this project style).

export function escapeHtml(s: string): string {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Where the button in every automated email sends the reader. THE one
// definition: send-admin-email and send-expiry-emails import this rather than
// keeping their own copies, which is how all three ended up still naming the
// old GitHub Pages host after the site had already moved to elec-buddy.com.
//
// It must match the origin people actually sign in on. A different origin has
// its own session storage, so a customer clicking "Start Studying" in their
// receipt would arrive signed out and have to log in again straight after
// paying.
export const APP_URL = 'https://elec-buddy.com/app/';

export interface EmailLayoutOptions {
  preheader?: string;   // hidden preview text shown in inbox lists, before the email is opened
  heading: string;
  bodyHtml: string;
  ctaUrl?: string;
  ctaLabel?: string;
  footNote?: string;    // small text under the button, e.g. "Open the app, tap your profile..."
  signerName?: string | null; // if set, renders a "Regards, <name>" signature instead of a CTA-only close
}

export function emailLayout(opts: EmailLayoutOptions): string {
  const { preheader, heading, bodyHtml, ctaUrl, ctaLabel, footNote, signerName } = opts;

  const preheaderHtml = preheader
    ? `<span style="display:none;max-height:0;overflow:hidden">${escapeHtml(preheader)}</span>`
    : '';

  const ctaHtml = ctaUrl && ctaLabel
    ? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:32px auto 8px;">
         <tr>
           <td align="center" bgcolor="#C8A44A" style="border-radius:10px;">
             <a href="${ctaUrl}"
                style="display:inline-block;padding:15px 32px;background-color:#C8A44A;color:#070D1A;text-decoration:none;font-size:15px;font-weight:700;border-radius:10px;">
               ${escapeHtml(ctaLabel)}
             </a>
           </td>
         </tr>
       </table>`
    : '';

  const footNoteHtml = footNote
    ? `<p style="margin:28px 0 0 0;font-size:13px;line-height:1.6;color:#6E8AA6;">${footNote}</p>`
    : '';

  const signatureHtml = signerName
    ? `<p style="margin:26px 0 0 0;font-size:14px;line-height:1.6;color:#8FA3B8;">
         Regards,<br>
         ${escapeHtml(signerName)}<br>
         <span style="font-size:12px;color:#6E8AA6;">Elec-Buddy Team</span>
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
${preheaderHtml}
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#070D1A;padding:40px 16px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:480px;background-color:#0D1E33;border:1px solid #1A3050;border-radius:16px;">
        <tr>
          <td style="padding:40px 32px;text-align:center;">

            <div style="font-family:Georgia,serif;font-size:34px;font-weight:bold;color:#C8A44A;line-height:1.2;">
              Elec-Buddy
            </div>
            <div style="margin-top:8px;font-family:Consolas,Monaco,'Courier New',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#6E8AA6;">
              ETO EXAM PREPARATION
            </div>

            <h1 style="margin:36px 0 20px 0;font-size:24px;font-weight:700;line-height:1.3;color:#DDE5EF;">
              ${heading}
            </h1>

            <div style="font-size:15px;line-height:1.75;color:#DDE5EF;text-align:left;">
              ${bodyHtml}
            </div>

            ${ctaHtml}
            ${footNoteHtml}
            ${signatureHtml}

          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #1A3050;text-align:center;">
            <div style="font-size:12px;color:#6E8AA6;line-height:1.7;">
              Elec-Buddy &middot; ETO CoC and STCW Exam Preparation<br>
              Questions? <a href="mailto:support@elec-buddy.com" style="color:#6E8AA6;text-decoration:none;">support@elec-buddy.com</a>
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

export async function sendEmail(opts: {
  resendKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${opts.resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: opts.from,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        reply_to: opts.replyTo,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      return { ok: false, error: errText };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

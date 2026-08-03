import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// Feedback, bug reports and content contributions from inside the app.
//
// Files are sent as real email attachments rather than uploaded somewhere and
// linked. That decision is deliberate: a link needs a storage bucket, access
// policies, a signing scheme and an expiry, and an expiring link in a support
// mailbox is worthless the moment someone comes back to an old thread. An
// attachment lands in Gmail as an attachment, stays with the thread forever,
// and is searchable. The cost is a size ceiling, which is enforced below.
//
// The reply-to is set to the reporter, so support can just hit Reply.
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

const SUPPORT_INBOX = 'support@elec-buddy.com';

// Base64 inflates by about a third, and the whole message has to fit through
// both the edge function's request body and the mail provider. These caps are
// on the DECODED size, checked server-side; the client enforces the same
// numbers first so the reporter is told before a long upload, not after.
const MAX_FILES = 5;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_TOTAL_BYTES = 12 * 1024 * 1024;

// Screenshots of a bug, and documents for a content contribution. Anything
// executable is refused: this address is read by a person, and an attachment
// that arrives from "inside the app" carries more implied trust than one from
// a stranger, which is exactly what makes it worth restricting.
const ALLOWED = new Set([
  'image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/heic', 'image/heif',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
]);

const KINDS: Record<string, string> = {
  bug: 'Bug report',
  content: 'Content request',
  correction: 'Content correction',
  other: 'Feedback',
};

function esc(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Rough decoded size of a base64 payload without allocating it.
function b64Bytes(b64: string): number {
  const len = b64.length;
  const pad = b64.endsWith('==') ? 2 : b64.endsWith('=') ? 1 : 0;
  return Math.floor(len * 3 / 4) - pad;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
    const ANON_KEY         = Deno.env.get('SUPABASE_ANON_KEY')!;
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY');
    // Checked at the point of sending, not here. Bailing out this early made
    // every validation failure report "email is not configured", so a reporter
    // with an unsupported file type was told the wrong thing entirely.

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);
    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authErr } = await userClient.auth.getUser();
    if (authErr || !user) return json({ error: 'Unauthorized' }, 401);

    const body = await req.json().catch(() => ({}));
    const kind = KINDS[body?.kind] ? body.kind : 'other';
    const subject = String(body?.subject ?? '').trim();
    const message = String(body?.message ?? '').trim();
    const files = Array.isArray(body?.files) ? body.files : [];

    if (!message) return json({ error: 'Please describe the problem or request' }, 400);
    if (message.length > 8000) return json({ error: 'Description is too long (8000 characters max)' }, 400);
    if (subject.length > 200) return json({ error: 'Subject is too long' }, 400);
    if (files.length > MAX_FILES) return json({ error: `Up to ${MAX_FILES} files, please` }, 400);

    let total = 0;
    const attachments: { filename: string; content: string }[] = [];
    for (const f of files) {
      const name = String(f?.name ?? 'attachment').replace(/[\r\n"]/g, '').slice(0, 120);
      const type = String(f?.type ?? '');
      const content = String(f?.content ?? '');
      if (!content) continue;
      if (!ALLOWED.has(type)) {
        return json({ error: `"${name}" is not a supported file type. Images, PDF, Word and text only.` }, 400);
      }
      const size = b64Bytes(content);
      if (size > MAX_FILE_BYTES) {
        return json({ error: `"${name}" is larger than 5 MB` }, 400);
      }
      total += size;
      if (total > MAX_TOTAL_BYTES) {
        return json({ error: 'Those files come to more than 12 MB in total' }, 400);
      }
      attachments.push({ filename: name, content });
    }

    // Reporter details, so support does not have to ask who this is.
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data: profile } = await admin
      .from('profiles')
      .select('email, full_name, subscription_plan, plan_scope, written_expires_at, oral_expires_at')
      .eq('id', user.id)
      .maybeSingle();

    const reporterEmail = profile?.email || user.email || '';
    const reporterName = profile?.full_name || '';
    const label = KINDS[kind];
    const mailSubject = `[${label}] ${subject || message.slice(0, 60).replace(/\s+/g, ' ')}`;

    const row = (k: string, v: string) =>
      `<tr><td style="padding:4px 14px 4px 0;color:#6E8AA6;white-space:nowrap;vertical-align:top">${k}</td>`
      + `<td style="padding:4px 0;color:#DDE5EF">${v}</td></tr>`;

    const html = `<div style="font-family:ui-sans-serif,system-ui,'Segoe UI',sans-serif;font-size:14px;line-height:1.6;color:#DDE5EF;background:#0D1E33;padding:22px;border-radius:12px">
  <div style="font-size:16px;font-weight:700;margin-bottom:14px">${esc(label)}</div>
  <div style="white-space:pre-wrap;background:#0A1828;border:1px solid #1A3050;border-radius:8px;padding:14px;margin-bottom:16px">${esc(message)}</div>
  <table style="font-size:12.5px;border-collapse:collapse">
    ${row('From', esc(reporterName ? `${reporterName} &lt;${reporterEmail}&gt;` : reporterEmail))}
    ${row('Plan', esc(profile?.subscription_plan || 'trial') + (profile?.plan_scope ? ' / ' + esc(profile.plan_scope) : ''))}
    ${row('Written until', profile?.written_expires_at ? esc(String(profile.written_expires_at).slice(0, 10)) : '-')}
    ${row('Oral until', profile?.oral_expires_at ? esc(String(profile.oral_expires_at).slice(0, 10)) : '-')}
    ${row('Attachments', attachments.length ? String(attachments.length) : 'none')}
    ${row('User ID', esc(user.id))}
  </table>
</div>`;

    if (!RESEND_API_KEY) return json({ error: 'Email is not configured' }, 500);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Elec-Buddy Feedback <noreply@elec-buddy.com>',
        to: SUPPORT_INBOX,
        // Support replies straight to the person who reported it.
        reply_to: reporterEmail || undefined,
        subject: mailSubject,
        html,
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', await res.text());
      return json({ error: 'Could not send. Please try again in a moment.' }, 502);
    }

    return json({ ok: true, attachments: attachments.length });

  } catch (e) {
    console.error(e);
    return json({ error: 'Internal error' }, 500);
  }
});

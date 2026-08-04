import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { emailLayout, sendEmail, escapeHtml, APP_URL } from '../_shared/email-layout.ts';

// ─────────────────────────────────────────────────────────────────────────
// One message to a group of users. Admin only.
//
// This is the one endpoint in the system that can reach every customer at
// once, so it is deliberately unglamorous: it resolves the audience through
// the same SQL function the admin console counted with, sends in small
// batches, carries an unsubscribe link on every message, and records what it
// did whether or not it succeeded.
//
// WHY THE UNSUBSCRIBE LINK IS NOT OPTIONAL. Everything else this app sends is
// transactional and needs no opt-out. This is marketing. Promotional mail with
// no easy way out gets reported as spam, and the domain carrying those
// complaints is the same one carrying password resets and receipts. Losing its
// reputation breaks sign-in for everybody, which is a far worse outcome than a
// few people opting out.
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

/** Sent this many at a time, with a pause between, to stay well inside
 *  provider rate limits rather than discovering them mid-campaign. */
const BATCH = 8;
const PAUSE_MS = 1100;
/** A hard ceiling so a mis-set segment cannot mail tens of thousands. */
const MAX_RECIPIENTS = 5000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const ANON_KEY         = Deno.env.get('SUPABASE_ANON_KEY')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const RESEND_API_KEY   = Deno.env.get('RESEND_API_KEY');

  let campaignId: number | null = null;
  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return json({ error: 'Unauthorized' }, 401);

    const userClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authErr } = await userClient.auth.getUser();
    if (authErr || !user) return json({ error: 'Unauthorized' }, 401);

    // Admin is re-checked here against profiles.is_admin, the same flag every
    // RLS policy uses, rather than trusted from the caller.
    const { data: me } = await sb.from('profiles').select('is_admin, email').eq('id', user.id).single();
    if (!me?.is_admin) return json({ error: 'Forbidden' }, 403);

    if (!RESEND_API_KEY) return json({ error: 'Email is not configured' }, 500);

    const body = await req.json().catch(() => ({}));
    const segment = String(body?.segment ?? '').trim();
    const subject = String(body?.subject ?? '').trim();
    const heading = String(body?.heading ?? '').trim();
    const message = String(body?.body ?? '').trim();
    const couponCode = body?.coupon_code ? String(body.coupon_code).trim() : null;

    if (!segment) return json({ error: 'Pick who should receive this' }, 400);
    if (!subject) return json({ error: 'A subject is required' }, 400);
    if (!message) return json({ error: 'A message is required' }, 400);
    if (subject.length > 200) return json({ error: 'Subject is too long' }, 400);
    if (message.length > 8000) return json({ error: 'Message is too long' }, 400);

    // A coupon is only included if it is still redeemable. Mailing a spent or
    // expired code to hundreds of people is worse than sending none.
    let coupon: string | null = null;
    if (couponCode) {
      const { data: c } = await sb
        .from('coupons').select('code, active, expires_at').eq('code', couponCode).maybeSingle();
      const live = c && c.active && (!c.expires_at || new Date(c.expires_at) > new Date());
      if (live) coupon = c!.code;
      else return json({ error: `Coupon ${couponCode} is not active, so nothing was sent.` }, 400);
    }

    const { data: recipients, error: segErr } = await sb.rpc('email_segment', { p_segment: segment });
    if (segErr) return json({ error: 'Could not resolve that group' }, 500);
    const list = (recipients ?? []) as { id: string; email: string; full_name: string | null; unsubscribe_token: string | null }[];

    if (!list.length) return json({ error: 'Nobody is in that group' }, 400);
    if (list.length > MAX_RECIPIENTS) {
      return json({ error: `That group has ${list.length} people, above the ${MAX_RECIPIENTS} limit.` }, 400);
    }

    const { data: campaign } = await sb.from('email_campaigns').insert({
      segment, subject, coupon_code: coupon,
      recipients: list.length, status: 'sending',
      sent_by: user.id, sent_by_email: me.email,
    }).select('id').single();
    campaignId = campaign?.id ?? null;

    let delivered = 0;
    let failed = 0;

    for (let i = 0; i < list.length; i += BATCH) {
      const chunk = list.slice(i, i + BATCH);
      await Promise.all(chunk.map(async (r) => {
        const first = (r.full_name || '').trim().split(/\s+/)[0];
        const unsub = `${SUPABASE_URL}/functions/v1/unsubscribe?t=${encodeURIComponent(r.unsubscribe_token ?? '')}`;

        // Escaped first, then placeholders filled with already-safe values, so
        // an admin cannot inject markup into a mail going to everybody.
        const filled = escapeHtml(message)
          .split('{{name}}').join(escapeHtml(first || 'there'))
          .split('{{first_name}}').join(escapeHtml(first || 'there'))
          .split('{{coupon}}').join(coupon ? `<strong>${escapeHtml(coupon)}</strong>` : '')
          .split('\n').join('<br>');

        const html = emailLayout({
          preheader: subject,
          heading: heading || subject,
          bodyHtml: `<p style="margin:0 0 16px 0;">${filled}</p>`
            + (coupon
              ? `<p style="margin:0 0 16px 0;">Use code <strong style="font-size:16px;letter-spacing:1px">${escapeHtml(coupon)}</strong> at checkout.</p>`
              : ''),
          ctaUrl: APP_URL,
          ctaLabel: 'Open Elec-Buddy',
          footNote: `You are receiving this because you have an Elec-Buddy account. <a href="${unsub}" style="color:#8FA3B8">Unsubscribe from updates like this</a>. Receipts and account emails are unaffected.`,
        });

        const sent = await sendEmail({
          resendKey: RESEND_API_KEY,
          from: 'Elec-Buddy <noreply@elec-buddy.com>',
          to: r.email,
          subject,
          html,
        });
        if (sent.ok) delivered++; else { failed++; console.error('bulk send failed for one recipient:', sent.error); }
      }));
      if (i + BATCH < list.length) await sleep(PAUSE_MS);
    }

    if (campaignId) {
      await sb.from('email_campaigns').update({
        delivered, failed, status: 'done', finished_at: new Date().toISOString(),
      }).eq('id', campaignId);
    }

    return json({ ok: true, recipients: list.length, delivered, failed });

  } catch (e) {
    console.error(e);
    // A campaign row that stays 'sending' forever would hide a crash, so it is
    // closed out even on the failure path.
    if (campaignId) {
      await sb.from('email_campaigns').update({
        status: 'failed', finished_at: new Date().toISOString(), error: String(e).slice(0, 400),
      }).eq('id', campaignId).then(() => {}, () => {});
    }
    return json({ error: 'Internal error' }, 500);
  }
});

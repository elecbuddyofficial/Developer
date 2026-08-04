// ─────────────────────────────────────────────────────────────────────────
// Admin-editable wording for the automatic emails.
//
// Every automatic email keeps its built-in wording. A row in email_templates
// is an OPTIONAL override, and this module is the only thing that decides
// whether one applies. It returns null far more often than not, and null
// means "use the wording compiled into the function".
//
// THE RULE THAT MATTERS: wording living in a database must never be able to
// stop an email going out. A missing row, an inactive row, an empty body, a
// dropped connection, a malformed template, a dead coupon: every one of those
// resolves to null and the built-in email sends exactly as it did before.
// There is no path through here that throws, and no path that returns a
// half-applied template. An admin cannot break signup mail from a text box.
// ─────────────────────────────────────────────────────────────────────────

import { escapeHtml } from './email-layout.ts';

export interface EmailTemplate {
  subject: string | null;
  heading: string | null;
  /** Plain text as the admin typed it, newlines and all. Never trusted as HTML. */
  body: string;
  ctaLabel: string | null;
  /** Only ever set when the code was confirmed still redeemable at send time. */
  coupon: string | null;
}

/**
 * Fetch the override for `key`, or null to use the built-in wording.
 *
 * `sb` must be a service-role client: email_templates is admin-only under RLS,
 * so an anon client would silently read zero rows and every template would
 * appear inactive.
 */
export async function loadTemplate(
  // deno-lint-ignore no-explicit-any
  sb: any,
  key: string,
): Promise<EmailTemplate | null> {
  try {
    const { data, error } = await sb
      .from('email_templates')
      .select('subject, heading, body_html, cta_label, coupon_code, active')
      .eq('key', key)
      .maybeSingle();

    // An error here is a database problem, not an editorial decision. Falling
    // back to the built-in wording is the right answer either way.
    if (error || !data) return null;
    if (!data.active) return null;

    const body = String(data.body_html ?? '').trim();
    // Active with an empty body would mail somebody a blank page. The admin
    // console refuses to save that, but this is the layer that actually sends,
    // so it refuses too rather than trusting the form.
    if (!body) return null;

    // A coupon is attached only if it is still redeemable. Mailing a dead code
    // is worse than mailing none, so the code is dropped and the rest of the
    // admin's wording still sends. {{coupon}} then renders as nothing.
    let coupon: string | null = null;
    if (data.coupon_code) {
      const { data: c } = await sb
        .from('coupons')
        .select('code, active, expires_at, max_redemptions, times_redeemed')
        .eq('code', data.coupon_code)
        .maybeSingle();
      const live = c
        && c.active
        && (!c.expires_at || new Date(c.expires_at) > new Date())
        && (!c.max_redemptions || (c.times_redeemed ?? 0) < c.max_redemptions);
      if (live) coupon = c.code;
      else console.warn(`Template ${key} references coupon ${data.coupon_code}, which is not redeemable. Sending without it.`);
    }

    return {
      subject:  data.subject?.trim() || null,
      heading:  data.heading?.trim() || null,
      body,
      ctaLabel: data.cta_label?.trim() || null,
      coupon,
    };
  } catch (e) {
    console.error('loadTemplate failed, using built-in wording:', e);
    return null;
  }
}

/**
 * Turn an admin's plain text into the body HTML.
 *
 * Escaped FIRST, then placeholders are filled with values that are already
 * safe. Doing it the other way round would let an admin's angle bracket, or a
 * customer's own name, become live markup in a message going to everybody.
 */
export function renderBody(body: string, vars: Record<string, string>): string {
  let out = escapeHtml(body);
  for (const [name, value] of Object.entries(vars)) {
    out = out.split(`{{${name}}}`).join(value);
  }
  // Anything the admin left unfilled is removed rather than shown raw, so a
  // typo like {{nmae}} reads as a gap instead of leaking the syntax.
  out = out.replace(/\{\{\s*[a-z_]+\s*\}\}/gi, '');
  return `<p style="margin:0 0 16px 0;">${out.split('\n').join('<br>')}</p>`;
}

/** The coupon line appended under the body whenever a live code is attached. */
export function couponBlock(code: string): string {
  return `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:22px 0 0 0;">
    <tr><td align="center" style="background-color:#12263F;border:1px dashed #C8A44A;border-radius:12px;padding:18px 16px;">
      <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#8FA3B8;margin-bottom:8px;">Your code</div>
      <div style="font-size:22px;font-weight:700;letter-spacing:2px;color:#C8A44A;">${escapeHtml(code)}</div>
      <div style="font-size:12.5px;color:#8FA3B8;margin-top:8px;">Enter this at checkout.</div>
    </td></tr>
  </table>`;
}

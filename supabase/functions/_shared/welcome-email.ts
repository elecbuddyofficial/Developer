// Welcome email — sent once, right after signup, from noreply@elec-buddy.com.
// Trial length must stay in sync with get-content-key (the authoritative
// server-side access gate) and razorpay-webhook/send-expiry-emails, which
// each keep their own copy of the same constant for the same reason.

import { emailLayout, escapeHtml, APP_URL } from './email-layout.ts';
import { EmailTemplate, renderBody, couponBlock, fillSubject, fillHeading } from './templates.ts';

export const TRIAL_DAYS = 3;

export function welcomeEmailSubject(tpl?: EmailTemplate | null, name?: string | null): string {
  if (!tpl?.subject) return 'Welcome to Elec-Buddy: your free trial has started';
  const firstName = (name || '').trim().split(/\s+/)[0];
  return fillSubject(tpl.subject, {
    name:       firstName || 'there',
    first_name: firstName || 'there',
    trial_days: String(TRIAL_DAYS),
    coupon:     tpl.coupon ?? '',
  });
}

export interface WelcomeEmailInput {
  name?: string | null;
  /** An admin's override, or null/absent to send the built-in wording. */
  template?: EmailTemplate | null;
}

export function welcomeEmailHtml(input: WelcomeEmailInput): string {
  const firstName = (input.name || '').trim().split(/\s+/)[0];
  const greeting = firstName ? `Welcome aboard, ${escapeHtml(firstName)}!` : 'Welcome aboard!';

  const tpl = input.template;

  const defaultBody = `
    <p style="margin:0 0 16px 0;">Your ${TRIAL_DAYS}-day free trial just started, with full access to every Oral topic, every Written numerical, quizzes, and the Surveyor Q&amp;A bank. No card required.</p>
    <p style="margin:0 0 16px 0;">Work through a topic, quiz yourself, then check your numericals against worked solutions, the same way a real MMD oral panel will push you.</p>
    <p style="margin:0;">When your trial ends, everything you've already read and answered stays saved. Upgrade anytime to keep going without a gap.</p>
  `;

  // Composed field by field rather than all or nothing. Attaching a coupon and
  // leaving everything else blank is the common case, and it must produce the
  // normal welcome email with a code on the end, not force a full rewrite.
  const body = tpl?.body
    ? renderBody(tpl.body, {
        name:        escapeHtml(firstName || 'there'),
        first_name:  escapeHtml(firstName || 'there'),
        trial_days:  String(TRIAL_DAYS),
        coupon:      tpl.coupon ? `<strong style="color:#C8A44A">${escapeHtml(tpl.coupon)}</strong>` : '',
      })
    : defaultBody;

  return emailLayout({
    preheader: tpl?.subject
      ? welcomeEmailSubject(tpl, input.name)
      : `Your ${TRIAL_DAYS}-day free trial is live. Full access, no card required.`,
    heading: tpl?.heading
      ? fillHeading(tpl.heading, {
          name:       firstName || 'there',
          first_name: firstName || 'there',
          trial_days: String(TRIAL_DAYS),
          coupon:     tpl.coupon ?? '',
        })
      : greeting,
    bodyHtml: body + (tpl?.coupon ? couponBlock(tpl.coupon) : ''),
    ctaUrl: APP_URL,
    ctaLabel: tpl?.ctaLabel || 'Start Studying',
    footNote: 'Questions while you get started? Reply to support@elec-buddy.com and we\'ll help.',
  });
}

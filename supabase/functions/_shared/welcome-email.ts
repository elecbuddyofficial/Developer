// Welcome email — sent once, right after signup, from noreply@elec-buddy.com.
// Trial length must stay in sync with get-content-key (the authoritative
// server-side access gate) and razorpay-webhook/send-expiry-emails, which
// each keep their own copy of the same constant for the same reason.

import { emailLayout, escapeHtml, APP_URL } from './email-layout.ts';

export const TRIAL_DAYS = 3;

export function welcomeEmailSubject(): string {
  return 'Welcome to Elec-Buddy — your free trial has started';
}

export interface WelcomeEmailInput {
  name?: string | null;
}

export function welcomeEmailHtml(input: WelcomeEmailInput): string {
  const firstName = (input.name || '').trim().split(/\s+/)[0];
  const greeting = firstName ? `Welcome aboard, ${escapeHtml(firstName)}!` : 'Welcome aboard!';

  const body = `
    <p style="margin:0 0 16px 0;">Your ${TRIAL_DAYS}-day free trial just started &mdash; full access to every Oral topic, every Written numerical, quizzes, and the Surveyor Q&amp;A bank. No card required.</p>
    <p style="margin:0 0 16px 0;">Work through a topic, quiz yourself, then check your numericals against worked solutions, the same way a real MMD oral panel will push you.</p>
    <p style="margin:0;">When your trial ends, everything you've already read and answered stays saved. Upgrade anytime to keep going without a gap.</p>
  `;

  return emailLayout({
    preheader: `Your ${TRIAL_DAYS}-day free trial is live. Full access, no card required.`,
    heading: greeting,
    bodyHtml: body,
    ctaUrl: APP_URL,
    ctaLabel: 'Start Studying',
    footNote: 'Questions while you get started? Reply to support@elec-buddy.com and we\'ll help.',
  });
}

// Payment confirmation email — shared by verify-razorpay-payment (the fast
// client-side path) and razorpay-webhook (the authoritative server path).
// Exactly one of those two ever actually applies a given purchase (see the
// compare-and-swap comments in each), so calling this from the branch that
// wins the race is what keeps this to one email per payment, never zero,
// never two.

import { emailLayout, escapeHtml, APP_URL } from './email-layout.ts';

const DURATION_LABELS: Record<string, string> = {
  '3mo': '3-Month', '6mo': '6-Month', '12mo': '12-Month',
  // Legacy pre-scope-split plans, kept so an old plan value still renders
  // something readable rather than falling through to raw text.
  starter: 'Starter', standard: 'Standard', pro: 'Pro',
};

// Mirrors TRACK_FALLBACK_NAME in app/index.html's upgrade modal — the
// branded name for each scope, shown next to the plain duration so the
// receipt reads the same way the purchase screen did.
const TRACK_NAME: Record<string, string> = {
  written: 'Passage', oral: 'Voyage', both: 'Expedition',
};

const SCOPE_ACCESS_DESCRIPTION: Record<string, string> = {
  written: 'the full Written exam prep section — theory notes and all 39 numericals',
  oral: 'the full Oral exam prep section — all 23 topics, quizzes, and Surveyor Q&amp;A',
  both: 'the full Oral <em>and</em> Written exam prep sections — every topic, every numerical, quizzes, and Surveyor Q&amp;A',
};

function planLabel(plan: string, scope: string | null | undefined): string {
  const duration = DURATION_LABELS[plan] || plan;
  const track = scope ? (TRACK_NAME[scope] || null) : null;
  return track ? `${track} &middot; ${duration}` : duration;
}

function fmtINR(paise: number): string {
  return '₹' + (paise / 100).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export interface PaymentConfirmedInput {
  plan: string;                 // duration key: '3mo' | '6mo' | '12mo' (or a legacy plan value)
  scope: string | null;         // 'written' | 'oral' | 'both' | null (null = pre-scope-split legacy purchase, treated as 'both')
  amountPaise: number;
  expiresAt: string;            // ISO timestamp
  orderId: string;
  paymentId: string | null;
}

export function paymentConfirmedSubject(input: PaymentConfirmedInput): string {
  return `Payment confirmed — ${planLabel(input.plan, input.scope)} plan is now active`;
}

export function paymentConfirmedHtml(input: PaymentConfirmedInput): string {
  const scope = input.scope || 'both';
  const label = planLabel(input.plan, input.scope);
  const accessDesc = SCOPE_ACCESS_DESCRIPTION[scope] || SCOPE_ACCESS_DESCRIPTION.both;

  const row = (label: string, value: string, mono = false) => `
    <tr>
      <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:13px;color:#8FA3B8;">${label}</td>
      <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;${mono ? 'font-family:Consolas,Monaco,monospace;font-size:12px;font-weight:400;color:#8FA3B8;' : ''}">${value}</td>
    </tr>`;

  const body = `
    <p style="margin:0 0 20px 0;">Thanks for subscribing to Elec-Buddy! Your payment has gone through and your plan is active right now — no need to do anything else.</p>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 20px 0;">
      <tr>
        <td style="padding:0 0 10px 0;font-size:13px;color:#8FA3B8;">Plan</td>
        <td style="padding:0 0 10px 0;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;">${escapeHtml(label)}</td>
      </tr>
      ${row('Amount Paid', fmtINR(input.amountPaise))}
      ${row('Access Until', fmtDate(input.expiresAt))}
      ${row('Order ID', escapeHtml(input.orderId), true)}
      ${input.paymentId ? row('Payment ID', escapeHtml(input.paymentId), true) : ''}
    </table>

    <p style="margin:0;">You now have access to ${accessDesc}. Your reading progress and quiz scores carry over exactly as they were.</p>
  `;

  return emailLayout({
    preheader: `Your ${label} plan is active. Access until ${fmtDate(input.expiresAt)}.`,
    heading: 'Payment Confirmed',
    bodyHtml: body,
    ctaUrl: APP_URL,
    ctaLabel: 'Start Studying',
    footNote: 'Keep this email as your receipt. Questions about your purchase? Just reply — this inbox is monitored.',
  });
}

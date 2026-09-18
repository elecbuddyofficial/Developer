// Refund confirmation, sent to the customer.
//
// Until 18 Sep 2026 a refund sent nothing from us: the customer saw only
// Razorpay's own notification, which names a merchant and an amount and says
// nothing about what happened to their access or when the money lands. People
// wrote in to ask whether the refund had actually gone through, which is the
// question this email answers before it is asked.
//
// One email per refund. Both paths that mark a payment refunded (the admin
// panel and the refund.processed webhook, for refunds issued from the Razorpay
// dashboard) gate the send on their own status-guarded write, so whichever one
// gets there first is the only one that mails.

import { emailLayout, escapeHtml, appUrlFor } from './email-layout.ts';

/** What happened to the customer's access. null = not known on this path. */
export type RefundAccessOutcome =
  | 'recomputed_from_remaining_payments'
  | 'reverted_to_trial'
  | 'kept_lifetime'
  | 'skipped'
  | null;

export interface RefundIssuedInput {
  name?: string | null;
  amountPaise: number;
  /** Our own plan value on the refunded payment, e.g. '3mo'. */
  plan?: string | null;
  /** The scope that payment bought: 'written' | 'oral' | 'both' | 'sponsorship'. */
  scope?: string | null;
  orderId?: string | null;
  paymentId?: string | null;
  refundId?: string | null;
  access: RefundAccessOutcome;
}

const DURATION_LABELS: Record<string, string> = {
  '3mo': '3-Month', '6mo': '6-Month', '12mo': '12-Month',
  starter: 'Starter', standard: 'Standard', pro: 'Pro',
};

const SCOPE_NAME: Record<string, string> = {
  written: 'Written Paper', oral: 'Oral & Viva', both: 'Full COC Preparation',
  sponsorship: 'Sponsorship',
};

function planLabel(plan?: string | null, scope?: string | null): string {
  const duration = plan ? (DURATION_LABELS[plan] || plan) : null;
  const track = scope ? (SCOPE_NAME[scope] || (scope.charAt(0).toUpperCase() + scope.slice(1))) : null;
  if (track && duration) return `${track} · ${duration}`;
  return track || duration || 'Subscription';
}

function fmtINR(paise: number): string {
  return '₹' + (paise / 100).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// Said plainly, because this is the part people actually want to know. The
// wording never promises access the refund has removed, and never claims to
// have removed access the refund left alone.
function accessLine(access: RefundAccessOutcome): string {
  switch (access) {
    case 'reverted_to_trial':
      return 'The access this payment paid for has ended. Everything you read and answered is still saved on your account, and it comes straight back if you subscribe again.';
    case 'recomputed_from_remaining_payments':
      return 'The access this payment paid for has ended. Any other subscription on your account is untouched and keeps running to its own end date.';
    case 'kept_lifetime':
      return 'Your lifetime access is not affected by this refund and stays exactly as it was.';
    case 'skipped':
      return 'Your access has been left in place.';
    default:
      return 'If this changes your access, you will see it the next time you open the app.';
  }
}

export function refundIssuedSubject(input: RefundIssuedInput): string {
  return `Refund issued: ${fmtINR(input.amountPaise)} is on its way back`;
}

export function refundIssuedHtml(input: RefundIssuedInput): string {
  const row = (label: string, value: string, mono = false) => `
    <tr>
      <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:13px;color:#8FA3B8;">${label}</td>
      <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;${mono ? 'font-family:Consolas,Monaco,monospace;font-size:12px;font-weight:400;color:#8FA3B8;' : ''}">${value}</td>
    </tr>`;

  const greeting = input.name
    ? `<p style="margin:0 0 20px 0;">Hi ${escapeHtml(input.name)}, we have refunded your payment in full.</p>`
    : '<p style="margin:0 0 20px 0;">We have refunded your payment in full.</p>';

  const body = `
    ${greeting}

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 20px 0;">
      <tr>
        <td style="padding:0 0 10px 0;font-size:13px;color:#8FA3B8;">Refunded</td>
        <td style="padding:0 0 10px 0;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;">${fmtINR(input.amountPaise)}</td>
      </tr>
      ${row('Original Purchase', escapeHtml(planLabel(input.plan, input.scope)))}
      ${input.orderId ? row('Order ID', escapeHtml(input.orderId), true) : ''}
      ${input.paymentId ? row('Payment ID', escapeHtml(input.paymentId), true) : ''}
      ${input.refundId ? row('Refund ID', escapeHtml(input.refundId), true) : ''}
    </table>

    <p style="margin:0 0 16px 0;">The money goes back to the card, account or wallet you paid from. Banks usually take 5 to 7 working days to show it, and some show it as a reversal of the original charge rather than as a new credit, so it is worth looking at the original entry on your statement.</p>

    <p style="margin:0;">${accessLine(input.access)}</p>
  `;

  return emailLayout({
    preheader: `${fmtINR(input.amountPaise)} refunded. Usually 5 to 7 working days to reach your bank.`,
    heading: 'Refund Issued',
    bodyHtml: body,
    ctaUrl: appUrlFor(input.scope),
    ctaLabel: 'Open Elec-Buddy',
    footNote: 'Keep this email as your record of the refund. If it has not arrived after 7 working days, reply to this email with your Refund ID and we will chase it with the bank.',
  });
}

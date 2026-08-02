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
  written: 'the full Written exam prep section: theory notes and all 39 numericals',
  oral: 'the full Oral exam prep section: all 23 topics, quizzes, and Surveyor Q&amp;A',
  both: 'the full Oral <em>and</em> Written exam prep sections: every topic, every numerical, quizzes, and Surveyor Q&amp;A',
};

function planLabel(plan: string, scope: string | null | undefined): string {
  const duration = DURATION_LABELS[plan] || plan;
  const track = scope ? (TRACK_NAME[scope] || null) : null;
  return track ? `${track} · ${duration}` : duration;
}

function fmtINR(paise: number): string {
  return '₹' + (paise / 100).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export interface ScopeChange {
  scope: 'written' | 'oral';
  from: string | null;   // ISO, or null if they never had this scope
  to: string;            // ISO
  extended: boolean;     // true = they already held live access and it grew
  months: number;
}

export interface PaymentConfirmedInput {
  plan: string;                 // duration key: '3mo' | '6mo' | '12mo' (or a legacy plan value)
  scope: string | null;         // 'written' | 'oral' | 'both' | null (null = pre-scope-split legacy purchase, treated as 'both')
  amountPaise: number;
  changes: ScopeChange[];       // per-scope before/after, straight from applyPurchase
  orderId: string;
  paymentId: string | null;
}

export function paymentConfirmedSubject(input: PaymentConfirmedInput): string {
  return `Payment confirmed: ${planLabel(input.plan, input.scope)} plan is now active`;
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

  // One row per section, stating plainly whether this purchase STARTED that
  // access or EXTENDED what was already there. A buyer who holds Written and
  // buys Oral must be able to see at a glance that their Written date did not
  // move - that ambiguity is what made the old overwrite bug survivable.
  const SCOPE_NAME = { written: 'Written', oral: 'Oral' } as const;
  const changeRows = (input.changes || []).map(c => {
    const name = SCOPE_NAME[c.scope];
    const value = c.extended && c.from
      ? `${fmtDate(c.from)} &rarr; ${fmtDate(c.to)}`
      : fmtDate(c.to);
    const note = c.extended
      ? `extended by ${c.months} month${c.months === 1 ? '' : 's'}`
      : 'new access';
    return `
      <tr>
        <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:13px;color:#8FA3B8;">${name} access</td>
        <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;">
          ${value}<br>
          <span style="font-size:11px;font-weight:400;color:#6E8AA6;">${note}</span>
        </td>
      </tr>`;
  }).join('');

  // Only worth saying when something they already owned was left alone.
  const untouched = (input.changes || []).some(c => c.extended)
    ? ''
    : '<p style="margin:16px 0 0 0;font-size:13px;color:#8FA3B8;">Any access you already had is unchanged, and keeps running to its own end date.</p>';

  const body = `
    <p style="margin:0 0 20px 0;">Thanks for subscribing to Elec-Buddy! Your payment has gone through and your access is live right now, no need to do anything else.</p>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 20px 0;">
      <tr>
        <td style="padding:0 0 10px 0;font-size:13px;color:#8FA3B8;">Plan</td>
        <td style="padding:0 0 10px 0;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;">${escapeHtml(label)}</td>
      </tr>
      ${row('Amount Paid', fmtINR(input.amountPaise))}
      ${changeRows}
      ${row('Order ID', escapeHtml(input.orderId), true)}
      ${input.paymentId ? row('Payment ID', escapeHtml(input.paymentId), true) : ''}
    </table>

    <p style="margin:0;">You now have access to ${accessDesc}. Your reading progress and quiz scores carry over exactly as they were.</p>
    ${untouched}
  `;

  const earliest = (input.changes || []).length
    ? input.changes.map(c => c.to).sort()[0]
    : null;

  return emailLayout({
    preheader: earliest
      ? `Your ${label} plan is active. Access until ${fmtDate(earliest)}.`
      : `Your ${label} plan is active.`,
    heading: 'Payment Confirmed',
    bodyHtml: body,
    ctaUrl: APP_URL,
    ctaLabel: 'Start Studying',
    footNote: 'Keep this email as your receipt. Questions about your purchase? Just reply, this inbox is monitored.',
  });
}

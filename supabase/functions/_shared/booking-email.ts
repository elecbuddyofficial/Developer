// Mock interview booking confirmation.
//
// The booking screen tells the buyer "We will email <address> to confirm, and
// your assessment and feedback come to the same address afterwards"
// (app/sponsorship/index.html). Until 18 Sep 2026 nothing sent that email:
// every other purchase on the site produced a receipt, a paid interview slot
// produced none, so the only record of the appointment was a line of text the
// buyer had already navigated away from.
//
// Mock interviews are part of the Sponsorship course, so the button opens the
// Sponsorship app, not the COC one.

import { emailLayout, escapeHtml, SPONSORSHIP_URL } from './email-layout.ts';

export interface BookingConfirmedInput {
  name?: string | null;
  /** ISO start of the slot, or null when the slot is marked time-to-be-confirmed. */
  startsAt: string | null;
  durationMinutes?: number | null;
  amountPaise: number;
  orderId: string;
  paymentId: string | null;
  bookingId?: string | null;
}

function fmtINR(paise: number): string {
  return '₹' + (paise / 100).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// Everything the customer is told is in IST, because that is the timezone the
// slot was picked in and the one the interview runs in. A booking rendered in
// the server's UTC would read five and a half hours early, which on an evening
// slot is the wrong day.
const IST = 'Asia/Kolkata';

function fmtDayIST(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: IST,
  });
}

function fmtTimeIST(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-IN', {
    hour: 'numeric', minute: '2-digit', hour12: true, timeZone: IST,
  }) + ' IST';
}

/** "Saturday, 4 October 2026, 7:30 pm IST", or the TBC wording. */
export function bookingWhen(startsAt: string | null): string {
  return startsAt ? `${fmtDayIST(startsAt)}, ${fmtTimeIST(startsAt)}` : 'a time we will confirm with you';
}

export function bookingConfirmedSubject(input: BookingConfirmedInput): string {
  return input.startsAt
    ? `Mock interview booked: ${fmtDayIST(input.startsAt)}, ${fmtTimeIST(input.startsAt)}`
    : 'Mock interview booked: we will confirm your time';
}

export function bookingConfirmedHtml(input: BookingConfirmedInput): string {
  const when = bookingWhen(input.startsAt);
  const mins = input.durationMinutes && input.durationMinutes > 0 ? input.durationMinutes : null;

  const row = (label: string, value: string, mono = false) => `
    <tr>
      <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:13px;color:#8FA3B8;">${label}</td>
      <td style="padding:10px 0;border-top:1px solid #1A3050;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;${mono ? 'font-family:Consolas,Monaco,monospace;font-size:12px;font-weight:400;color:#8FA3B8;' : ''}">${value}</td>
    </tr>`;

  const greeting = input.name
    ? `<p style="margin:0 0 20px 0;">Hi ${escapeHtml(input.name)}, your mock interview slot is booked and paid for.</p>`
    : '<p style="margin:0 0 20px 0;">Your mock interview slot is booked and paid for.</p>';

  const timing = input.startsAt
    ? `<p style="margin:0 0 16px 0;">We will send the joining link to this address closer to the date. If you need to move the slot, reply to this email at least 24 hours before it starts and we will find you another one.</p>`
    : `<p style="margin:0 0 16px 0;">The time for this slot is still being fixed. We will email this address as soon as it is set, and the payment below holds your place either way.</p>`;

  const body = `
    ${greeting}

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 20px 0;">
      <tr>
        <td style="padding:0 0 10px 0;font-size:13px;color:#8FA3B8;">Session</td>
        <td style="padding:0 0 10px 0;font-size:14px;font-weight:600;color:#DDE5EF;text-align:right;">Mock Interview</td>
      </tr>
      ${row('When', escapeHtml(when))}
      ${mins ? row('Duration', `${mins} minutes`) : ''}
      ${row('Amount Paid', fmtINR(input.amountPaise))}
      ${row('Order ID', escapeHtml(input.orderId), true)}
      ${input.paymentId ? row('Payment ID', escapeHtml(input.paymentId), true) : ''}
    </table>

    ${timing}

    <p style="margin:0 0 16px 0;">Come prepared the way you would for the real thing: your CV to hand, a quiet room, a working camera and microphone, and the company you are targeting in mind. The panel runs it like a sponsorship interview, not a chat.</p>

    <p style="margin:0;">Your written assessment and feedback come to this same address after the session.</p>
  `;

  return emailLayout({
    preheader: input.startsAt
      ? `Booked for ${fmtDayIST(input.startsAt)}, ${fmtTimeIST(input.startsAt)}.`
      : 'Booked. We will confirm the time with you.',
    heading: 'Mock Interview Booked',
    bodyHtml: body,
    ctaUrl: SPONSORSHIP_URL,
    ctaLabel: 'Open Sponsorship',
    footNote: 'Keep this email as your receipt. Questions about your booking? Just reply, this inbox is monitored.',
  });
}

// Render every transactional email, for every scope and course, and read what
// the customer would actually see.
//
// WHY THIS EXISTS. On 18 Sep 2026 a Sponsorship buyer's receipt said they now
// had "the full Oral and Written exam prep sections", and carried a row reading
// "undefined access". The template's three lookup tables (track name, access
// description, scope name) were written before Sponsorship existed, and the
// scope fell through every one of them. Nothing caught it: the money path is
// tested, the email is not, because nothing ever rendered it.
//
// Run through audits/emails.py, which finds Deno. Renders only; sends nothing.

import {
  paymentConfirmedHtml, paymentConfirmedSubject, ScopeChange,
} from '../supabase/functions/_shared/payment-email.ts';
import { welcomeEmailHtml } from '../supabase/functions/_shared/welcome-email.ts';
import {
  bookingConfirmedHtml, bookingConfirmedSubject,
} from '../supabase/functions/_shared/booking-email.ts';
import {
  refundIssuedHtml, refundIssuedSubject,
} from '../supabase/functions/_shared/refund-email.ts';
import { ACCESS_SCOPES } from '../supabase/functions/_shared/entitlements.ts';
import { APP_URL, SPONSORSHIP_URL } from '../supabase/functions/_shared/email-layout.ts';

const problems: string[] = [];
const fail = (what: string, why: string) => problems.push(`${what}: ${why}`);

const ISO = (d: string) => new Date(d).toISOString();
const change = (scope: string, extended = false): ScopeChange => ({
  scope: scope as ScopeChange['scope'],
  from: extended ? ISO('2026-10-01') : null,
  to: ISO('2026-12-12'),
  extended,
  months: 3,
});

// Text a reader sees, with tags stripped, so a check cannot pass on markup.
const text = (html: string) =>
  html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// ── 1. Payment receipts, one per purchasable scope ─────────────────────────
const PURCHASE: Record<string, { scopes: string[]; must: RegExp; mustNot: RegExp; cta: string }> = {
  written:     { scopes: ['written'], must: /Written exam prep/i, mustNot: /Sponsorship course/i, cta: APP_URL },
  oral:        { scopes: ['oral'], must: /Oral exam prep/i, mustNot: /Sponsorship course/i, cta: APP_URL },
  both:        { scopes: ['written', 'oral'], must: /Oral and Written exam prep/i, mustNot: /Sponsorship course/i, cta: APP_URL },
  sponsorship: { scopes: ['sponsorship'], must: /Sponsorship course/i, mustNot: /Written exam prep|Oral exam prep/i, cta: SPONSORSHIP_URL },
};

for (const [scope, spec] of Object.entries(PURCHASE)) {
  const input = {
    plan: '3mo', scope, amountPaise: 100,
    changes: spec.scopes.map(s => change(s)),
    orderId: 'order_TEST', paymentId: 'pay_TEST',
  };
  const html = paymentConfirmedHtml(input);
  const body = text(html);
  const subject = paymentConfirmedSubject(input);
  const what = `receipt/${scope}`;

  if (/undefined|\[object Object\]|NaN/.test(body)) fail(what, 'renders "undefined" or similar: ' + body.slice(0, 160));
  if (!spec.must.test(body)) fail(what, 'does not tell the buyer what they bought (' + spec.must + ')');
  if (spec.mustNot.test(body)) fail(what, 'promises the wrong course (' + spec.mustNot + ')');
  if (!html.includes(`href="${spec.cta}"`)) fail(what, 'button does not point at ' + spec.cta);
  // Each scope in this purchase gets its own dated row, named.
  for (const s of spec.scopes) {
    const label = s.charAt(0).toUpperCase() + s.slice(1);
    if (!body.includes(`${label} access`)) fail(what, `no "${label} access" row`);
  }
  if (scope === 'sponsorship' && !/Sponsorship/.test(subject)) fail(what, 'subject does not name the course: ' + subject);
}

// ── 2. Every scope the entitlement code knows must render as itself ────────
// The rule that would have caught the reported bug: a scope that exists in
// entitlements.ts and not in the email's tables renders as "undefined".
for (const scope of ACCESS_SCOPES) {
  const body = text(paymentConfirmedHtml({
    plan: '3mo', scope, amountPaise: 100, changes: [change(scope)],
    orderId: 'order_TEST', paymentId: null,
  }));
  const label = scope.charAt(0).toUpperCase() + scope.slice(1);
  if (!body.includes(`${label} access`)) fail(`scope/${scope}`, `row is not named "${label} access" (is it missing from SCOPE_NAME?)`);
  if (/undefined/.test(body)) fail(`scope/${scope}`, 'renders "undefined"');
}

// ── 3. A legacy purchase with no scope still reads sensibly ────────────────
{
  const body = text(paymentConfirmedHtml({
    plan: 'starter', scope: null, amountPaise: 100,
    changes: [change('written'), change('oral')],
    orderId: 'order_LEGACY', paymentId: null,
  }));
  if (/undefined/.test(body)) fail('receipt/legacy-null-scope', 'renders "undefined"');
  if (!/Oral and Written exam prep/i.test(body)) fail('receipt/legacy-null-scope', 'lost the old full-access wording');
}

// ── 4. Extended vs new access, both readable ───────────────────────────────
{
  const body = text(paymentConfirmedHtml({
    plan: '6mo', scope: 'sponsorship', amountPaise: 100,
    changes: [change('sponsorship', true)],
    orderId: 'order_EXT', paymentId: null,
  }));
  if (!/extended by 3 months/.test(body)) fail('receipt/extended', 'does not say the access was extended');
  if (/undefined/.test(body)) fail('receipt/extended', 'renders "undefined"');
}

// ── 5. Welcome email follows the course the account signed up for ──────────
const WELCOME: Record<string, { must: RegExp; cta: string }> = {
  coc:         { must: /Oral topic/i, cta: APP_URL },
  sponsorship: { must: /Sponsorship course/i, cta: SPONSORSHIP_URL },
};
for (const [track, spec] of Object.entries(WELCOME)) {
  const html = welcomeEmailHtml({ name: 'Test Cadet', track });
  const body = text(html);
  const what = `welcome/${track}`;
  if (/undefined/.test(body)) fail(what, 'renders "undefined"');
  if (!spec.must.test(body)) fail(what, 'wording does not match the track (' + spec.must + ')');
  if (!html.includes(`href="${spec.cta}"`)) fail(what, 'button does not point at ' + spec.cta);
}
{
  const html = welcomeEmailHtml({ name: 'Test Cadet' });   // no track recorded
  if (!html.includes(`href="${APP_URL}"`)) fail('welcome/no-track', 'does not fall back to the main app');
  if (/undefined/.test(text(html))) fail('welcome/no-track', 'renders "undefined"');
}

// ── 6. Mock interview booking confirmation ─────────────────────────────────
// The booking screen promises "We will email <address> to confirm". Nothing
// sent that email until 18 Sep 2026: a paid slot was the one purchase on the
// site with no receipt at all.
{
  const base = {
    name: 'Test Cadet', amountPaise: 150000,
    orderId: 'order_MI', paymentId: 'pay_MI', bookingId: 'b-1',
  };

  // A settled slot. 7:30pm IST on 4 Oct 2026 is 14:00 UTC: if the email ever
  // renders in UTC it prints 2:00 pm, and an evening slot near midnight IST
  // would print the wrong day entirely.
  const html = bookingConfirmedHtml({
    ...base, startsAt: ISO('2026-10-04T14:00:00Z'), durationMinutes: 45,
  });
  const body = text(html);
  const subject = bookingConfirmedSubject({
    ...base, startsAt: ISO('2026-10-04T14:00:00Z'), durationMinutes: 45,
  });
  if (/undefined|null|NaN|Invalid Date/.test(body)) fail('booking/confirmed', 'renders a placeholder: ' + body.slice(0, 200));
  if (!/7:30 pm IST/.test(body)) fail('booking/confirmed', 'does not show the slot in IST: ' + body.slice(0, 200));
  if (!/4 October 2026/.test(body)) fail('booking/confirmed', 'does not name the date');
  if (!/45 minutes/.test(body)) fail('booking/confirmed', 'does not say how long it runs');
  if (!/₹1,500/.test(body)) fail('booking/confirmed', 'does not show what was paid');
  if (!body.includes('order_MI')) fail('booking/confirmed', 'no order id to quote back at us');
  if (!html.includes(`href="${SPONSORSHIP_URL}"`)) fail('booking/confirmed', 'button does not open the Sponsorship app');
  if (!/4 October 2026/.test(subject)) fail('booking/confirmed', 'subject does not carry the date: ' + subject);

  // Time not fixed yet: the slot row carries time_tbc, and starts_at must not
  // be printed as though it were settled.
  const tbc = text(bookingConfirmedHtml({ ...base, startsAt: null, durationMinutes: null }));
  if (/undefined|NaN|Invalid Date/.test(tbc)) fail('booking/tbc', 'renders a placeholder: ' + tbc.slice(0, 200));
  if (!/confirm/i.test(tbc)) fail('booking/tbc', 'does not say the time is still to be confirmed');
  if (/minutes/.test(tbc)) fail('booking/tbc', 'invents a duration it was not given');
  // "Invalid Date" is not the failure mode to guard against here: new Date(null)
  // is the epoch, so a missing start renders as "Thursday, 1 January 1970,
  // 5:30 am IST" and reads like a real appointment. No year may appear at all.
  if (/\b(19|20)\d{2}\b/.test(tbc)) fail('booking/tbc', 'prints a date for a slot whose time is not fixed: ' + tbc.slice(0, 200));
}

// ── 7. Refund confirmation ─────────────────────────────────────────────────
// A refund used to send nothing from us, so the customer had only Razorpay's
// notice, which says nothing about access or timing.
{
  const base = {
    name: 'Test Cadet', amountPaise: 299900, plan: '3mo',
    orderId: 'order_R', paymentId: 'pay_R', refundId: 'rfnd_R',
  };
  const OUTCOMES: Record<string, { must: RegExp; mustNot?: RegExp }> = {
    reverted_to_trial: { must: /access .* has ended/i },
    recomputed_from_remaining_payments: { must: /untouched|own end date/i },
    kept_lifetime: { must: /lifetime access is not affected/i, mustNot: /has ended/i },
    skipped: { must: /left in place/i, mustNot: /has ended/i },
  };
  for (const [access, spec] of Object.entries(OUTCOMES)) {
    const input = { ...base, scope: 'oral', access } as Parameters<typeof refundIssuedHtml>[0];
    const body = text(refundIssuedHtml(input));
    const what = `refund/${access}`;
    if (/undefined|NaN|Invalid Date/.test(body)) fail(what, 'renders a placeholder: ' + body.slice(0, 200));
    if (!/₹2,999/.test(body)) fail(what, 'does not say how much came back');
    if (!body.includes('rfnd_R')) fail(what, 'no refund id, so the bank cannot be chased');
    if (!/5 to 7 working days/.test(body)) fail(what, 'does not say when to expect the money');
    if (!spec.must.test(body)) fail(what, 'does not describe what happened to access (' + spec.must + ')');
    if (spec.mustNot?.test(body)) fail(what, 'claims access ended when it did not (' + spec.mustNot + ')');
    if (!/Refund Issued/i.test(body)) fail(what, 'does not read as a refund');
  }

  // The webhook path (a refund issued from the Razorpay dashboard) does not
  // recompute access, so its email must not claim to know the outcome.
  const unknown = text(refundIssuedHtml({ ...base, scope: null, access: null }));
  if (/undefined|NaN/.test(unknown)) fail('refund/unknown-access', 'renders a placeholder');
  if (/has ended|lifetime access/.test(unknown)) fail('refund/unknown-access', 'claims an access outcome it does not know');

  // A refunded Sponsorship purchase sends the reader back to Sponsorship.
  const spon = refundIssuedHtml({ ...base, scope: 'sponsorship', access: 'reverted_to_trial' });
  if (!spon.includes(`href="${SPONSORSHIP_URL}"`)) fail('refund/sponsorship', 'button does not open the Sponsorship app');
  if (!/Sponsorship/.test(text(spon))) fail('refund/sponsorship', 'does not name what was refunded');

  // Subject carries the amount, so the inbox line answers the question.
  const subject = refundIssuedSubject({ ...base, scope: 'oral', access: 'skipped' });
  if (!/₹2,999/.test(subject)) fail('refund/subject', 'does not name the amount: ' + subject);
}

if (problems.length) {
  console.log('');
  for (const p of problems) console.log('  FAIL  ' + p);
  console.log('');
  console.log(`  ${problems.length} problem(s) in the transactional emails.`);
  Deno.exit(1);
}
console.log('  Every receipt, welcome, booking and refund email names the right course, links to');
console.log('  the right app, shows times in IST, and renders no "undefined" for any scope in');
console.log('  entitlements.ts.');

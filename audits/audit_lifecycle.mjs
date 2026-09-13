/* AUDIT 4 - one Sponsorship customer, cradle to grave.

   purchase.e2e.mjs already checks each money path in isolation. This walks a
   single profile through the whole life of a customer, in order, applying the
   REAL applyPurchase and asking the REAL deriveAccess after every step, so
   that a fault which only appears in sequence has somewhere to show up.

   Every step asserts the COC columns too. The single most expensive failure
   this project has had was a purchase quietly destroying access the customer
   had already paid for, and that is invisible if you only look at the column
   you just wrote.
*/
/* applyPurchase takes a MONTH COUNT, not a plan name. Passing '6mo' makes
   addMonths produce an Invalid Date, and the crash is several frames away in
   toISOString. Worth knowing: every caller has to look up PLAN_MONTHS first,
   and a caller that forgets does not get a wrong date, it gets a throw. */
import { applyPurchase, deriveAccess, TRIAL_DAYS, PLAN_MONTHS } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

const DAY = 86400000;
const at = (d) => new Date(Date.now() + d * DAY);
const iso = (d) => at(d).toISOString();
const days = (a, b) => Math.round((new Date(a) - new Date(b)) / DAY);

// A brand new signup, three days of trial, nothing bought.
let p = {
  subscription_plan: 'trial',
  trial_started_at: iso(0),
  written_expires_at: null,
  oral_expires_at: null,
  sponsorship_expires_at: null,
};

console.log('');
console.log('  day 0 - signs up');
let a = deriveAccess(p, at(0));
ok('the trial opens all three courses', a.written && a.oral && a.sponsorship);

console.log('');
console.log('  day ' + TRIAL_DAYS + ' - the trial ends, nothing bought');
a = deriveAccess(p, at(TRIAL_DAYS + 0.1));
ok('everything closes', !a.written && !a.oral && !a.sponsorship);

console.log('');
console.log('  day 4 - buys Sponsorship 6mo');
p = { ...p, ...applyPurchase(p, 'sponsorship', PLAN_MONTHS['6mo'], at(4)) };
a = deriveAccess(p, at(4.1));
ok('Sponsorship opens', a.sponsorship);
ok('Written and Oral stay shut, because they were not bought',
   !a.written && !a.oral);
ok('an expiry was actually written', !!p.sponsorship_expires_at);
ok('it is ' + PLAN_MONTHS['6mo'] + ' months out, not days or nothing',
   Math.abs(days(p.sponsorship_expires_at, at(4)) - 6 * 30.44) < 4,
   'got ' + days(p.sponsorship_expires_at, at(4)) + ' days');
ok('no COC column was touched',
   p.written_expires_at === null && p.oral_expires_at === null);

const afterFirst = p.sponsorship_expires_at;

console.log('');
console.log('  day 30 - renews Sponsorship early, still inside the first term');
p = { ...p, ...applyPurchase(p, 'sponsorship', PLAN_MONTHS['3mo'], at(30)) };
ok('the renewal STACKS onto the existing expiry rather than replacing it',
   new Date(p.sponsorship_expires_at) > new Date(afterFirst));
ok('it added ' + PLAN_MONTHS['3mo'] + ' months to the old date, not to today',
   Math.abs(days(p.sponsorship_expires_at, afterFirst) - 3 * 30.44) < 4,
   'added ' + days(p.sponsorship_expires_at, afterFirst) + ' days');
ok('COC still untouched',
   p.written_expires_at === null && p.oral_expires_at === null);

const afterRenew = p.sponsorship_expires_at;

console.log('');
console.log('  day 40 - also buys COC (both)');
p = { ...p, ...applyPurchase(p, 'both', PLAN_MONTHS['12mo'], at(40)) };
a = deriveAccess(p, at(40.1));
ok('Written and Oral open', a.written && a.oral);
ok('Sponsorship is STILL open on its own clock', a.sponsorship);
ok('the COC purchase did not move the Sponsorship date',
   p.sponsorship_expires_at === afterRenew,
   'was ' + afterRenew + ', now ' + p.sponsorship_expires_at);

console.log('');
console.log('  after the Sponsorship term ends, with COC still running');
const sponEnd = new Date(p.sponsorship_expires_at);
a = deriveAccess(p, new Date(sponEnd.getTime() + DAY));
ok('Sponsorship closes', !a.sponsorship);
ok('COC stays open, because it is a separate clock', a.written && a.oral);

console.log('');
console.log('  a lifetime grant');
const life = deriveAccess({ ...p, subscription_plan: 'lifetime' }, at(9999));
ok('lifetime opens all three, Sponsorship included',
   life.written && life.oral && life.sponsorship);

console.log('');
console.log('  edge cases that have bitten before');
console.log('  ' + '-'.repeat(68));

// A purchase on a profile that has never had the column populated.
const fresh = applyPurchase(
  { subscription_plan: 'trial', trial_started_at: iso(-400) },
  'sponsorship', PLAN_MONTHS['3mo'], at(0));
ok('buying with a null expiry starts from now, not from epoch',
   !!fresh.sponsorship_expires_at && new Date(fresh.sponsorship_expires_at) > at(80),
   JSON.stringify(fresh));

// A purchase made DURING a live trial should not be shortened by the trial.
const inTrial = applyPurchase(
  { subscription_plan: 'trial', trial_started_at: iso(-1) },
  'sponsorship', PLAN_MONTHS['3mo'], at(0));
ok('buying during a live trial does not lose the trial remainder',
   new Date(inTrial.sponsorship_expires_at) >= at(88),
   'ends ' + inTrial.sponsorship_expires_at);

// 'both' must never silently include sponsorship.
const bothOnly = applyPurchase(
  { subscription_plan: 'trial', trial_started_at: iso(-400) }, 'both', PLAN_MONTHS['12mo'], at(0));
ok("a 'both' purchase grants NO sponsorship, as every historical row assumes",
   !bothOnly.sponsorship_expires_at,
   'wrote ' + bothOnly.sponsorship_expires_at);

// An expired profile buying again starts from now, not from the stale date.
const stale = applyPurchase(
  { subscription_plan: '3mo', trial_started_at: iso(-400), sponsorship_expires_at: iso(-100) },
  'sponsorship', PLAN_MONTHS['3mo'], at(0));
ok('buying after a long lapse starts from today, not from the old expiry',
   new Date(stale.sponsorship_expires_at) > at(80),
   'ends ' + stale.sponsorship_expires_at);

console.log('');
console.log(fail ? '  ' + fail + ' problem(s) in the customer lifecycle.'
                 : '  A Sponsorship customer can buy, renew, stack COC alongside, and lapse,');
if (!fail) console.log('  with every course on its own clock and nothing destroyed on the way.');
process.exit(fail ? 1 : 0);

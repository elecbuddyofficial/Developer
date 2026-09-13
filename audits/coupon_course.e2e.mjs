/* The course lock, checked in all the places that enforce it.

   A coupon's course is decided three times, in three languages:

     public.coupon_course_of    SQL, inside coupon_reserve. The authority:
                                nothing is charged without it.
     courseOfPurchase           TypeScript, inside validate-coupon. Quotes the
                                price the buyer is shown.
     _courseOfScope             the browser, deciding what the OTHER cards in
                                the modal say without re-quoting.

   If the quote and the authority disagree, the buyer is offered a discount
   that the reserve then refuses, and they meet a bare failure at the payment
   step with nothing explaining it. That is worse than the bug being fixed, so
   the three are checked against each other here over every combination.
*/
import { readFileSync } from 'node:fs';
import { couponAppliesTo, courseOfPurchase } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/coupons.ts';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

/* ── 1. The three copies agree ───────────────────────────────────────── */

// The browser's copy, parsed out of the real file rather than restated.
const checkoutSrc = readFileSync(ROOT + 'app/checkout.js', 'utf8');
const m = checkoutSrc.match(/function _courseOfScope\(scope\)\s*\{[\s\S]*?\n\}/);
const clientCourseOf = m ? new Function('return (' + m[0] + ')')() : null;

// The SQL copy, read as its CASE expression and evaluated the same way
// Postgres would. Parsed so that editing the .sql without editing the others
// fails here rather than in production.
const sqlSrc = readFileSync(ROOT + 'app/admin/coupon_course_lock_setup.sql', 'utf8');
const sqlHasInterview = /WHEN COALESCE\(p_product, 'course'\) = 'interview' THEN 'sponsorship'/.test(sqlSrc);
const sqlHasSponsor   = /WHEN p_scope = 'sponsorship'\s*THEN 'sponsorship'/.test(sqlSrc);
const sqlHasElseCoc   = /ELSE 'coc'/.test(sqlSrc);
const sqlCourseOf = (scope, product) =>
  (product ?? 'course') === 'interview' ? 'sponsorship'
  : scope === 'sponsorship' ? 'sponsorship' : 'coc';

console.log('');
console.log('  the same rule, three times');
console.log('  ' + '-'.repeat(68));
ok('the browser copy was found in app/checkout.js', !!clientCourseOf);
ok('the SQL copy still has all three branches',
   sqlHasInterview && sqlHasSponsor && sqlHasElseCoc,
   'interview=' + sqlHasInterview + ' sponsorship=' + sqlHasSponsor + ' else=' + sqlHasElseCoc);

const SCOPES = ['written', 'oral', 'both', 'sponsorship', null, undefined, '', 'nonsense'];
const PRODUCTS = ['course', 'interview', null, undefined];

if (clientCourseOf) {
  const bad = [];
  for (const s of SCOPES) {
    for (const pr of PRODUCTS) {
      const ts = courseOfPurchase(s, pr);
      const sql = sqlCourseOf(s, pr);
      // The browser copy takes no product: no modal sells an interview.
      const cl = clientCourseOf(s);
      if (ts !== sql) bad.push(`TS vs SQL on (${s}, ${pr}): ${ts} vs ${sql}`);
      if ((pr ?? 'course') !== 'interview' && cl !== ts) {
        bad.push(`browser vs TS on (${s}, ${pr}): ${cl} vs ${ts}`);
      }
    }
  }
  ok('all three agree on every scope and product combination (' +
     SCOPES.length * PRODUCTS.length + ' cases)', bad.length === 0, bad.slice(0, 5).join('\n         '));
}

/* ── 2. The gate actually gates ──────────────────────────────────────── */

console.log('');
console.log('  what the lock lets through');
console.log('  ' + '-'.repeat(68));

const base = { active: true, kind: 'percent', discount_value: 50 };
const price = 100000;
const applies = (coupon, scope, product = 'course') =>
  couponAppliesTo({ ...base, ...coupon }, '3mo', scope, price, new Date(), product).ok;

// A Sponsorship-locked code
ok('a Sponsorship code works on Sponsorship',
   applies({ applies_course: 'sponsorship' }, 'sponsorship'));
ok('a Sponsorship code is REFUSED on Full COC',
   !applies({ applies_course: 'sponsorship' }, 'both'));
ok('a Sponsorship code is REFUSED on Written',
   !applies({ applies_course: 'sponsorship' }, 'written'));
ok('a Sponsorship code is REFUSED on Oral',
   !applies({ applies_course: 'sponsorship' }, 'oral'));

// A CoC-locked code
ok('a CoC code works on Written', applies({ applies_course: 'coc' }, 'written'));
ok('a CoC code works on Oral',    applies({ applies_course: 'coc' }, 'oral'));
ok('a CoC code works on Full COC', applies({ applies_course: 'coc' }, 'both'));
ok('a CoC code is REFUSED on Sponsorship',
   !applies({ applies_course: 'coc' }, 'sponsorship'));

// This is the specific failure that started this: a 99% code written for CoC,
// left on "any scope", spendable on a Sponsorship plan.
ok('ADITH45RU-shaped code (CoC, 99% off) can no longer reach Sponsorship',
   !applies({ applies_course: 'coc', discount_value: 99 }, 'sponsorship'));

/* ── 3. Nothing already issued changes behaviour ─────────────────────── */

console.log('');
console.log('  codes written before the lock existed');
console.log('  ' + '-'.repeat(68));
ok('a null course still reaches BOTH courses, exactly as it did',
   applies({ applies_course: null }, 'sponsorship') &&
   applies({ applies_course: null }, 'both'));
ok('an absent column behaves the same as null',
   applies({}, 'sponsorship') && applies({}, 'written'));
ok('the scope lock still works alongside it',
   applies({ applies_course: 'coc', applies_scope: 'written' }, 'written') &&
   !applies({ applies_course: 'coc', applies_scope: 'written' }, 'oral'));
ok('the duration lock is unaffected',
   !couponAppliesTo({ ...base, applies_duration: '12mo' }, '3mo', 'written', price).ok);
ok('the minimum is still reported as its own reason, not as invalid',
   couponAppliesTo({ ...base, min_amount: 999999 }, '3mo', 'written', price).reason
     === 'below_minimum');

const admin = readFileSync(ROOT + 'app/admin/index.html', 'utf8');

/* ── 4. Interviews ───────────────────────────────────────────────────── */

console.log('');
console.log('  mock interviews (a Sponsorship product, with no scope)');
console.log('  ' + '-'.repeat(68));
ok('a Sponsorship code works on an interview booking',
   applies({ applies_course: 'sponsorship', applies_product: 'interview' }, null, 'interview'));
ok('a CoC code is REFUSED on an interview booking',
   !applies({ applies_course: 'coc', applies_product: 'interview' }, null, 'interview'));

/* The product gate, which the preview used to ignore. Blesson picked "Mock
   interview" and was shown three Sponsorship COURSE plans discounted. The
   money was never at risk - both authorities have gated on product all along -
   but the screen described a different coupon from the one being made. */
ok('an interview code is REFUSED on every course plan',
   !applies({ applies_product: 'interview' }, 'sponsorship') &&
   !applies({ applies_product: 'interview' }, 'both') &&
   !applies({ applies_product: 'interview' }, 'written') &&
   !applies({ applies_product: 'interview' }, 'oral'));
ok('a course code is REFUSED on an interview booking',
   !applies({ applies_product: 'course' }, null, 'interview') &&
   !applies({}, null, 'interview'));

ok('the preview prices the INTERVIEW when the product is an interview',
   /if \(product === 'interview'\)/.test(admin)
   && /base_amount: mi\.price_paise/.test(admin));
ok('the preview says plainly that an interview code buys no course',
   /cannot be spent on any course plan/.test(admin));
ok('the preview fetches the interview price if the admin came straight here',
   /async function cpEnsureInterview\(\)/.test(admin));
ok('a disabled interview product is disclosed rather than priced silently',
   /Mock interviews are currently switched off/.test(admin));

/* ── 5. The admin console files them the same way ────────────────────── */

console.log('');
console.log('  the admin console');
console.log('  ' + '-'.repeat(68));
ok('a new code is stamped with the course tab it was made in',
   /row\.applies_course = _adminCourse === 'sponsorship' \? 'sponsorship' : 'coc';/.test(admin));
ok('the list trusts an explicit lock over inference',
   /if \(c\.applies_course === 'sponsorship'\) return \['sponsorship'\];/.test(admin));
ok('the preview builds its list from THIS course only',
   /var lines = mine\.map\(render\)\.join\(''\);/.test(admin)
   && !/var other/.test(admin));
ok('the cross-course heading is gone, not merely unreachable',
   !/Also reaches/.test(admin));
ok('the scope dropdown no longer claims to reach the other course',
   !/Any scope \(CoC purchases too\)/.test(admin) &&
   !/Any scope \(Sponsorship too\)/.test(admin));

/* ── 6. The view has to carry the column ─────────────────────────────── */

ok('coupon_usage is rebuilt to expose applies_course',
   /CREATE OR REPLACE VIEW public\.coupon_usage[\s\S]*c\.applies_course/.test(sqlSrc));
ok('coupon_reserve gained the course gate',
   /c\.applies_course IS NOT NULL[\s\S]{0,160}coupon_course_of\(p_scope, p_product\)/.test(sqlSrc));

console.log('');
console.log(fail ? '  ' + fail + ' problem(s) with the course lock.'
                 : '  A code cannot leave the course it was written in, and every code that');
if (!fail) console.log('  already exists behaves exactly as it did.');
process.exit(fail ? 1 : 0);

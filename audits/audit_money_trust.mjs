/* Can a buyer decide what they pay, or what they get?

   Everything in the checkout runs in the buyer's own browser, so every number
   it sends is a number they can change. The only question that matters is
   which of them the SERVER re-derives and which it believes.

   Four ways this goes wrong, and all four have been shipped by somebody:

     the price comes from the request        pay 1 rupee for a 12-month plan
     the scope comes from the request        buy Written, be granted everything
     the duration comes from the request     buy 3 months, be granted 12
     the coupon's discount comes from the
     request                                 invent a 100% code

   So: read the money functions and check that each of these is looked up from
   the database rather than taken from the body.
*/
import { readFileSync, existsSync } from 'node:fs';

const FN = 'D:/Notes 1/Original/ETO_Study_App/supabase/functions/';
let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};
const head = (t) => { console.log(''); console.log('  ' + t); console.log('  ' + '-'.repeat(68)); };

const read = (p) => existsSync(FN + p) ? readFileSync(FN + p, 'utf8') : '';

const order = read('create-razorpay-order/index.ts');
const verify = read('verify-razorpay-payment/index.ts');
const hook = read('razorpay-webhook/index.ts');
const mock = read('create-mock-interview-order/index.ts');

head('the amount charged');
ok('create-razorpay-order reads the price from pricing_plans, not the body',
   /from\(['"]pricing_plans['"]\)/.test(order));
ok('and never takes an amount from the request',
   !/\bamount\s*[:=]\s*(?:body|req)\b/.test(order)
   && !/body[?.]*\.amount/.test(order),
   (order.match(/body[^\n]*amount[^\n]*/g) || []).slice(0, 2).join(' | '));
ok('the interview price comes from mock_interview_config',
   /from\(['"]mock_interview_config['"]\)/.test(mock));

head('what the buyer is granted');
ok('verify-razorpay-payment reads the order back from the payments table',
   /from\(['"]payments['"]\)/.test(verify));
ok('the granted months come from PLAN_MONTHS, not from the request',
   /PLAN_MONTHS/.test(verify) && !/months\s*[:=]\s*body/.test(verify));
ok('the granted scope comes from the stored row',
   /applyPurchase\(/.test(verify));
ok('the webhook does the same, independently of the browser',
   /applyPurchase\(/.test(hook) && /from\(['"]payments['"]\)/.test(hook));

head('the coupon');
const shared = read('_shared/coupons.ts');
ok('the discount is read from the coupons table',
   /from\(['"]coupons['"]\)/.test(read('validate-coupon/index.ts')));
ok('redemption limits are counted under a row lock in SQL, not in TypeScript',
   /coupon_reserve/.test(order) || /coupon_reserve/.test(read('validate-coupon/index.ts')));
ok('the shared rule never reads a discount off the request',
   !/body[?.]*\.(discount|value|amount)/.test(shared));

head('the webhook is really from Razorpay');
ok('the signature is verified',
   /x-razorpay-signature/i.test(hook) && /(createHmac|hmac|sha256)/i.test(hook));
/* The rejection has to come BEFORE the first write, and it is written with a
   json() helper rather than `new Response`. Matching only the latter reported
   this as a failure while the code returns 401 at line 81, above everything.
   So: find the signature comparison, find the first grant, and require the
   refusal to sit between the top of the file and that grant. */
{
  const firstWrite = Math.min(
    ...['applyPurchase(', "from('profiles')", 'expiryUpdate(']
      .map((t) => { const i = hook.indexOf(t); return i === -1 ? Infinity : i; }));
  const before = hook.slice(0, firstWrite === Infinity ? hook.length : firstWrite);
  /* The comparison must be CALLED in the guard, not merely defined somewhere.
     Matching the bare name passed while the call was replaced by `if (false)`,
     because the helper's own definition still contains it - the same trap as
     checking for a `return` that a gutted condition makes unreachable. */
  ok('a bad signature is rejected before anything is written',
     /if\s*\(\s*!\s*(safeEqual|timingSafeEqual)\s*\(/.test(before)
     && /(json|new Response)\([^;]*(400|401|403)/.test(before));
  ok('the signature is computed over the raw bytes, before any parsing',
     hook.indexOf('hmacHex') < hook.indexOf('JSON.parse'));
  ok('the comparison is constant-time, so it cannot be probed byte by byte',
     /constant-time|safeEqual/.test(hook));
}

head('who may call what');
for (const [name, src] of [['create-razorpay-order', order],
                           ['verify-razorpay-payment', verify],
                           ['create-mock-interview-order', mock],
                           ['validate-coupon', read('validate-coupon/index.ts')],
                           ['refund-payment', read('refund-payment/index.ts')]]) {
  if (!src) { ok(name + ' was found', false, 'file missing'); continue; }
  const authed = /auth\.getUser\(/.test(src) || /Authorization/.test(src);
  ok(name + ' identifies the caller', authed);
}
const refund = read('refund-payment/index.ts');
ok('refund-payment is admin only',
   /is_admin|isAdmin/.test(refund), 'no admin check found');

head('the service role key never reaches the browser');
for (const page of ['app/index.html', 'app/admin/index.html', 'app/sponsorship/index.html',
                    'app/auth.html', 'app/checkout.js', 'app/app.js']) {
  const p = 'D:/Notes 1/Original/ETO_Study_App/' + page;
  const src = existsSync(p) ? readFileSync(p, 'utf8') : '';
  ok(page + ' carries no service key',
     !/SERVICE_ROLE/i.test(src) && !/"role"\s*:\s*"service_role"/.test(src));
}

console.log('');
console.log(fail ? '  ' + fail + ' problem(s) on the money path.'
                 : '  Every number that decides a charge or a grant is re-derived on the server.');
process.exit(fail ? 1 : 0);

/* What happens when the same thing arrives twice?

   Two paths grant access for one purchase, on purpose: the buyer's browser
   confirms the payment, and Razorpay's webhook confirms it independently so a
   closed tab cannot cost somebody their access. That redundancy is correct and
   it is also the risk, because both can land.

   Four ways a duplicate turns into a second grant:

     the webhook is retried          Razorpay retries on any non-2xx, and will
                                     send the same event again
     browser and webhook race        both see a 'created' row and both apply
     the buyer double-clicks         two orders, or two confirmations
     a refund is replayed            access restored that was taken away

   applyPurchase ADDS months to the current expiry, which is right for a
   renewal and catastrophic for a duplicate: the same payment applied twice
   grants twice the time. So the guard cannot be inside applyPurchase - it has
   to be the status check that stops the second call happening at all.
*/
import { readFileSync, existsSync } from 'node:fs';
import { applyPurchase, PLAN_MONTHS } from
  '../supabase/functions/_shared/entitlements.ts';

const FN = new URL('../supabase/functions/', import.meta.url);
const read = (p) => {
  const f = new URL(p, FN);
  return existsSync(f) ? readFileSync(f, 'utf8') : '';
};

let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};
const head = (t) => { console.log(''); console.log('  ' + t); console.log('  ' + '-'.repeat(68)); };

const hook = read('razorpay-webhook/index.ts');
const verify = read('verify-razorpay-payment/index.ts');
const refund = read('refund-payment/index.ts');

head('why a duplicate matters here');
{
  const base = { subscription_plan: '6mo', trial_started_at: '2020-01-01T00:00:00Z' };
  const once = applyPurchase(base, 'sponsorship', PLAN_MONTHS['6mo'], new Date());
  const twice = applyPurchase({ ...base, ...once }, 'sponsorship', PLAN_MONTHS['6mo'], new Date());
  const d1 = new Date(once.sponsorship_expires_at) - Date.now();
  const d2 = new Date(twice.sponsorship_expires_at) - Date.now();
  ok('applying the same purchase twice really does grant twice the time',
     d2 > d1 * 1.8,
     'so the protection must stop the second call, not sit inside applyPurchase');
}

head('the webhook');
/* The table name has to be exact. A bare /webhook_events/ still matches
   `webhook_events_x`, so a mutation that renamed the ledger out from under the
   function went undetected: the dedupe would have been writing to a table that
   does not exist while this reported it present. */
const LEDGER = /from\(\s*['"]webhook_events['"]\s*\)/;
ok('it records the events it has already handled',
   LEDGER.test(hook), 'no ledger of seen events');
ok('a repeat of the same event id is detected',
   /(already|duplicate|seen|exists)/i.test(hook) && LEDGER.test(hook));
ok('and the duplicate is detected BEFORE the order is claimed',
   LEDGER.test(hook)
   && hook.search(LEDGER) < hook.indexOf(".neq('status', 'paid')"));
ok('it only grants on a row that is not already paid',
   /status[^\n]*created|neq\(['"]status['"],\s*['"]paid['"]\)|eq\(['"]status['"],\s*['"]created['"]\)/.test(hook),
   'nothing restricts the update to an unpaid order');
ok('a duplicate still answers 2xx, so Razorpay stops retrying',
   /(200|ok:\s*true)/.test(hook));

head('the browser confirmation');
ok('it also refuses to grant twice',
   /eq\(['"]status['"],\s*['"]created['"]\)|already|settled/i.test(verify));
ok('and reads back what was actually stored rather than trusting its own write',
   /settled|maybeSingle\(\)/.test(verify));

head('the two cannot both apply');
/* The real defence is that the grant is conditional on the row still being
   'created', so whichever arrives second updates nothing. Asserted on both
   sides because one alone leaves the race open. */
/* Two equivalent spellings of the same compare-and-swap, and the first version
   of this only knew one of them. verify-razorpay-payment uses
   .neq('status','paid'), which is the same claim as .eq('status','created'),
   and was reported as unguarded for a run. */
const guarded = (src) =>
     /\.eq\(\s*['"]status['"]\s*,\s*['"]created['"]\s*\)/.test(src)
  || /\.neq\(\s*['"]status['"]\s*,\s*['"]paid['"]\s*\)/.test(src)
  || /status\s*===?\s*['"]created['"]/.test(src);
ok('the webhook claims the order before granting', guarded(hook));
ok('the browser path claims the order before granting', guarded(verify));

/* The claim is only worth anything if losing it STOPS the grant.

   Establishing that from text is delicate, and the first attempt got it wrong
   in both directions: it matched the word "already" inside a comment as the
   bail-out, and matched a profile READ as the grant. Crude offsets across a
   whole file cannot describe control flow.

   So this anchors on three exact things and refuses to conclude anything if it
   cannot find all of them:

     the claim      the guarded update that sets status to paid
     the bail       a `return` reached when that update matched no rows
     the grant      a profiles UPDATE, not a profiles select

   and requires them in that order. If the shape ever changes, this says it
   cannot tell rather than quietly passing. */
for (const [name, src] of [['the webhook', hook], ['the browser path', verify]]) {
  /* The FIRST claim, not the last.

     Math.max was wrong here: the webhook also handles refunds further down and
     claims that row the same way, so the largest index landed past the payment
     grant entirely and the check reported it could locate nothing. The one that
     matters is the earliest, because that is the purchase branch. */
  const firstOf = (...needles) => {
    const found = needles.map((n) => src.indexOf(n)).filter((i) => i > -1);
    return found.length ? Math.min(...found) : -1;
  };
  const claim = firstOf(".neq('status', 'paid')", ".neq('status','paid')",
                        ".eq('status', 'created')", ".eq('status','created')");

  // A profiles UPDATE after the claim, not the read that feeds applyPurchase.
  const after = claim > -1 ? src.slice(claim) : '';
  const grantRel = after.search(/from\(['"]profiles['"]\)[\s\S]{0,80}?\.update\(/);
  const grant = grantRel > -1 ? claim + grantRel : -1;

  /* The early exit: a return between the claim and that write, AND a test of
     the claim's own result.

     Requiring only a `return` was not enough. A mutation that replaced
     `if (!claimed || claimed.length === 0)` with `if (false)` left the return
     textually present but unreachable, and the audit passed. Text cannot decide
     reachability, so the next best thing is to insist the branch actually reads
     what the claim returned: with the condition gutted, that name disappears.

     The honest residual limit: this proves the losing branch is TESTED and that
     it returns, not that the return executes. A determined rewrite could still
     fool it. The live proof is the compare-and-swap in the database, which
     matches zero rows either way. */
  // The name the claim's result was assigned to: the last `data: X` before it.
  // Matched in a short window rather than with one big pattern, because the
  // statement spans several lines and contains an object literal, which any
  // single regex trying to cross it will trip over.
  const lead = src.slice(Math.max(0, claim - 600), claim);
  const names = [...lead.matchAll(/data:\s*([A-Za-z_$][\w$]*)/g)].map((m) => m[1]);
  const captured = names.length ? names[names.length - 1] : null;
  const between = (claim > -1 && grant > claim) ? src.slice(claim, grant) : '';
  const bails = /return\s/.test(between)
             // '\b' in a JS string is a BACKSPACE character, not a word
             // boundary. It has to survive into the RegExp as two characters,
             // so the backslash is escaped. Written the other way this matched
             // nothing and reported both paths unguarded.
             && !!captured
             && new RegExp('\\b' + captured + '\\b').test(between);

  if (claim === -1 || grant === -1) {
    ok(name + ' abandons the grant when it loses the race', false,
       'could not locate the claim or the profile write, so nothing was proven');
  } else {
    ok(name + ' returns before writing the profile when it loses the race', bails,
       'no return, or the losing branch never reads the claim result');
  }
}

head('refunds');
ok('a refund recomputes from the payments table rather than subtracting',
   /recomputeFromPayments/.test(refund),
   'subtracting months cannot be right when two purchases overlap');
ok('a refunded coupon slot does not become reusable by that buyer',
   /refunded/.test(read('_shared/coupons.ts')) || /refunded/.test(refund));

console.log('');
console.log(fail ? '  ' + fail + ' way(s) a duplicate could grant twice.'
                 : '  A repeated payment, webhook or refund cannot grant anything twice.');
process.exit(fail ? 1 : 0);

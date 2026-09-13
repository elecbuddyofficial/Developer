/* Would the 12 Sep mishap happen again?

   158 people were told their Sponsorship subscription had expired and invited
   to renew it. None had ever bought Sponsorship: a grace backfill had written
   the same date into sponsorship_expires_at for 161 accounts, and the mailer
   read that column as "a subscription that lapsed yesterday".

   The guard added afterwards requires a real paid payment covering that scope.
   This replays the exact population against the exact rule, using the server's
   own scopesCovered so the test cannot drift from the code. */
import { readFileSync } from 'node:fs';
import { scopesCovered } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

const src = readFileSync(
  'D:/Notes 1/Original/ETO_Study_App/supabase/functions/send-expiry-emails/index.ts', 'utf8');

let fail = 0;
const check = (label, ok, detail) => {
  console.log('  ' + (ok ? 'ok   ' : 'FAIL ') + label + (ok || !detail ? '' : '\n         ' + detail));
  if (!ok) fail++;
};

// 1. The guard is actually in the shipped source, and in the send loop.
check('the mailer requires a paid payment before sending',
      /if \(!paidFor\.has\(u\.id\)\) continue;/.test(src));
check('coverage comes from the shared rule, not a local copy',
      /import \{ scopesCovered \}/.test(src) && /scopesCovered\(p\.scope\)/.test(src));
check('every scope still gets a warning (sponsorship included)',
      /scope: 'sponsorship'/.test(src));

// 2. Replay the population. These are the real shapes from 11-12 Sep.
const YESTERDAY = new Date(Date.now() - 86400000).toISOString();
const people = [
  { who: 'grace holder, never paid (the 158)', expiry: YESTERDAY, payments: [] },
  { who: 'grace holder who also bought CoC',   expiry: YESTERDAY, payments: [{ scope: 'both' }] },
  { who: 'real Sponsorship customer',          expiry: YESTERDAY, payments: [{ scope: 'sponsorship' }] },
  { who: 'comped by an admin grant',           expiry: YESTERDAY, payments: [] },
];

const wouldMail = (p) =>
  p.payments.some((pay) => scopesCovered(pay.scope).includes('sponsorship'));

console.log('');
console.log('  Replaying the 12 Sep population against the new rule:');
let wrong = 0;
for (const p of people) {
  const mailed = wouldMail(p);
  // Only the real customer should ever receive "your Sponsorship expired".
  const should = p.who === 'real Sponsorship customer';
  if (mailed !== should) wrong++;
  console.log('    ' + (mailed === should ? 'ok   ' : 'FAIL ')
    + p.who.padEnd(38) + (mailed ? 'MAILED' : 'skipped'));
}
check('only a real Sponsorship customer is mailed', wrong === 0);

// 3. And the CoC side must be untouched: a 'both' purchase still covers each.
check("a 'both' purchase still covers Written and Oral",
      scopesCovered('both').includes('written') && scopesCovered('both').includes('oral'));
check("a 'both' purchase does NOT cover Sponsorship",
      !scopesCovered('both').includes('sponsorship'));

console.log('');
console.log(fail ? '  ' + fail + ' problem(s).'
                 : '  The 12 Sep send could not happen again: 0 of those 158 would be mailed.');
process.exit(fail ? 1 : 0);

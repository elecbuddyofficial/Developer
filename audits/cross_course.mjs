/* Can a customer of one course reach the other?

   Blesson: "sponsorship users should in no way reach the coc and vice versa".

   Reaching splits into two different questions that need different answers:

     CONTENT   can they read the other course's notes and quizzes?
               Must be no, and it is enforced by the key each app is issued.
     NAVIGATION can they walk to the other app and see its paywall?
               Must be yes: that is the shop window, and it is how somebody
               who wants both courses buys the second one.

   This checks the first, over every profile shape, using the real server
   rules rather than a restatement of them.
*/
import { deriveAccess, scopesCovered, applyPurchase, PLAN_MONTHS } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';
import { readFileSync } from 'node:fs';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

const DAY = 86400000;
const iso = (d) => new Date(Date.now() + d * DAY).toISOString();

/* A pure Sponsorship customer: bought Sponsorship, never bought COC, and
   whose trial is long over so it cannot be lending them anything. */
const sponsorOnly = {
  subscription_plan: '6mo',
  trial_started_at: iso(-400),
  ...applyPurchase({ subscription_plan: '6mo', trial_started_at: iso(-400) },
                   'sponsorship', PLAN_MONTHS['6mo'], new Date()),
};
const cocOnly = {
  subscription_plan: '12mo',
  trial_started_at: iso(-400),
  ...applyPurchase({ subscription_plan: '12mo', trial_started_at: iso(-400) },
                   'both', PLAN_MONTHS['12mo'], new Date()),
};

console.log('');
console.log('  content access, from the server rule both key endpoints use');
console.log('  ' + '-'.repeat(68));

const s = deriveAccess(sponsorOnly, new Date());
ok('a Sponsorship customer can read Sponsorship', s.sponsorship);
ok('a Sponsorship customer canNOT read Written', !s.written);
ok('a Sponsorship customer canNOT read Oral', !s.oral);

const c = deriveAccess(cocOnly, new Date());
ok('a COC customer can read Written and Oral', c.written && c.oral);
ok('a COC customer canNOT read Sponsorship', !c.sponsorship);

ok("no COC scope covers sponsorship",
   !scopesCovered('both').includes('sponsorship')
   && !scopesCovered('written').includes('sponsorship')
   && !scopesCovered('oral').includes('sponsorship'));
ok("sponsorship covers nothing but itself",
   scopesCovered('sponsorship').join(',') === 'sponsorship');

/* The one thing that DOES open both, on purpose. Worth asserting so that if
   somebody ever narrows it, the change is deliberate rather than accidental. */
console.log('');
console.log('  what deliberately opens both');
console.log('  ' + '-'.repeat(68));
const life = deriveAccess({ subscription_plan: 'lifetime', trial_started_at: iso(-400) }, new Date());
ok('lifetime opens both courses', life.written && life.oral && life.sponsorship);
const tr = deriveAccess({ subscription_plan: 'trial', trial_started_at: iso(-1) }, new Date());
ok('a running trial opens both courses', tr.written && tr.oral && tr.sponsorship);

/* Each app asks a DIFFERENT endpoint for its key, and neither endpoint can
   hand over the other's. That is the wall, not the navigation. */
console.log('');
console.log('  the keys themselves');
console.log('  ' + '-'.repeat(68));
const cocKey = readFileSync(ROOT + 'supabase/functions/get-content-key/index.ts', 'utf8');
const sponKey = readFileSync(ROOT + 'supabase/functions/get-sponsorship-key/index.ts', 'utf8');

ok('the COC key endpoint never serves the sponsorship key',
   !/CONTENT_KEY_SPONSORSHIP/.test(cocKey));
ok('the sponsorship key endpoint never serves a COC key',
   !/CONTENT_KEY_ORAL|CONTENT_KEY_WRITTEN/.test(sponKey));
ok('the COC key is gated on written/oral only',
   /const \{ written: hasWritten, oral: hasOral \} = deriveAccess/.test(cocKey));
ok('the sponsorship key is gated on sponsorship only',
   /const \{ sponsorship \} = deriveAccess/.test(sponKey));

console.log('');
console.log(fail ? '  ' + fail + ' way(s) one course reaches the other.'
                 : '  Neither course can read the other. Only lifetime and the trial open both,');
if (!fail) console.log('  and both do so deliberately.');
process.exit(fail ? 1 : 0);

/* Does the sponsorship fix move ANY existing customer's COC access?

   Replays a COC purchase over all 163 real prod profiles through the OLD write
   shape (two hand-listed columns) and the NEW one (expiryUpdate, all three),
   and diffs the resulting profile. Anything that differs in written_expires_at
   or oral_expires_at is a regression that reaches a paying customer. */
import { readFileSync } from 'node:fs';
import { applyPurchase, applyGrant, deriveAccess, expiryUpdate, recomputeFromPayments,
         ACCESS_SCOPES, SCOPE_COLUMN, GRANT_COLUMN } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

/* The snapshot is 163 real customer rows and is NOT in the repo: this one is
   public, because GitHub Pages serves the live site from it, so account ids and
   subscription dates cannot be committed here.

   Regenerate it before running this audit:

     select id, subscription_plan, trial_started_at,
            written_expires_at, oral_expires_at, sponsorship_expires_at,
            granted_written_expires_at, granted_oral_expires_at,
            granted_sponsorship_expires_at
       from profiles;

   saved as audits/all_profiles.json (gitignored). Without it this exits 2
   rather than passing, because an audit that quietly checks nothing is worse
   than one that is missing. */
let profiles;
try {
  profiles = JSON.parse(readFileSync(
    new URL('./all_profiles.json', import.meta.url), 'utf8'));
} catch {
  console.log('  audits/all_profiles.json is not present, so no profile was replayed.');
  console.log('  See the note at the top of this file for the query that rebuilds it.');
  process.exit(2);
}

const iso = v => (v == null ? null : new Date(v).toISOString());
const norm = p => {
  const o = { subscription_plan: p.subscription_plan, trial_started_at: iso(p.trial_started_at) };
  for (const s of ACCESS_SCOPES) {
    o[SCOPE_COLUMN[s]] = iso(p[SCOPE_COLUMN[s]]);
    o[GRANT_COLUMN[s]] = iso(p[GRANT_COLUMN[s]]);
  }
  return o;
};

// The write each version of the code performs, for a purchase of `scope`.
const OLD_WRITE = e => ({ written_expires_at: e.written_expires_at,
                          oral_expires_at:    e.oral_expires_at });
const NEW_WRITE = e => expiryUpdate(e);

const NOW = new Date();
let cocDiffs = 0, sponTouched = 0, graceTouched = 0, accessDiffs = 0, n = 0;
const examples = [];

for (const raw of profiles) {
  const p = norm(raw);
  for (const scope of ['written', 'oral', 'both']) {
    for (const months of [3, 6, 12]) {
      n++;
      const e = applyPurchase(p, scope, months, NOW);
      const oldP = { ...p, ...OLD_WRITE(e) };
      const newP = { ...p, ...NEW_WRITE(e) };

      // 1. COC dates must be byte-identical between old and new.
      if (oldP.written_expires_at !== newP.written_expires_at ||
          oldP.oral_expires_at !== newP.oral_expires_at) {
        cocDiffs++;
        if (examples.length < 5) examples.push({ id: raw.id, scope, months,
          old: [oldP.written_expires_at, oldP.oral_expires_at],
          neu: [newP.written_expires_at, newP.oral_expires_at] });
      }
      // 2. The new write must leave sponsorship exactly as it found it.
      if (newP.sponsorship_expires_at !== p.sponsorship_expires_at) {
        sponTouched++;
        if (examples.length < 5) examples.push({ id: raw.id, scope, months,
          was: p.sponsorship_expires_at, now: newP.sponsorship_expires_at });
      }
      // 3. Grace (the grant ledger) must be untouched by a purchase.
      if (newP.granted_sponsorship_expires_at !== p.granted_sponsorship_expires_at) graceTouched++;
      // 4. Resolved access must be identical old vs new, all scopes.
      const a = deriveAccess(oldP, NOW), b = deriveAccess(newP, NOW);
      if (a.written !== b.written || a.oral !== b.oral) accessDiffs++;
    }
  }
}

// A COC comp coupon must not disturb the sponsorship grant ledger either.
let couponGraceLoss = 0;
for (const raw of profiles) {
  const p = norm(raw);
  const g = applyGrant(p, 'both', 3, NOW);
  if (g.granted_sponsorship_expires_at !== p.granted_sponsorship_expires_at) couponGraceLoss++;
}

// And a refund on a COC-only account must not silently revoke sponsorship time
// that came from the grant ledger.
let refundGraceLoss = 0;
for (const raw of profiles) {
  const p = norm(raw);
  const r = recomputeFromPayments([], p);
  if ((r.sponsorship_expires_at ?? null) !== (p.granted_sponsorship_expires_at ?? null)) refundGraceLoss++;
}

const out = [];
out.push('  COC REGRESSION over ' + profiles.length + ' real production profiles');
out.push('  ' + '='.repeat(70));
out.push('  purchase simulations run:            ' + n + '  (3 scopes x 3 durations x profiles)');
out.push('');
out.push('  COC dates differ old vs new:         ' + cocDiffs);
out.push('  resolved COC access differs:         ' + accessDiffs);
out.push('  sponsorship column moved by COC buy: ' + sponTouched);
out.push('  grace ledger moved by COC buy:       ' + graceTouched);
out.push('  grace lost by a COC comp coupon:     ' + couponGraceLoss);
out.push('  grace lost by a refund replay:       ' + refundGraceLoss);
out.push('');
const clean = !cocDiffs && !accessDiffs && !sponTouched && !graceTouched
           && !couponGraceLoss && !refundGraceLoss;
out.push(clean
  ? '  CLEAN. No existing COC customer moves by a single millisecond, and no\n'
  + '  sponsorship or grace value is disturbed by any COC operation.'
  : '  REGRESSION FOUND:\n' + JSON.stringify(examples, null, 1));
const txt = out.join('\n');
console.log(txt);
process.exit(clean ? 0 : 1);

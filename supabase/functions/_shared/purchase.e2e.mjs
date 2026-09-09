/* ═══════════════════════════════════════════════════════════════════════════
   Buy the thing, then check you got it.

   Run:  node supabase/functions/_shared/purchase.e2e.mjs

   WHY THIS EXISTS

   On 9 Sep 2026, two days before 163 users' sponsorship grace expired, every
   money path in production was checked by hand and all of them dropped the
   sponsorship entitlement on the floor. entitlements.ts had been refactored to
   be scope-generic and was correct. The call sites had not followed: each one
   still hand-listed the two COC columns.

       written_expires_at: effect.written_expires_at,
       oral_expires_at:    effect.oral_expires_at,
       // and nothing else

   applyPurchase returned a perfectly good sponsorship_expires_at that nobody
   wrote down. Worse, the deployed verify-razorpay-payment and redeem-coupon
   still bundled the PREVIOUS scopesCovered, whose final else is
   ['written','oral'] - so a sponsorship purchase did not merely fail to
   unlock sponsorship, it silently extended the buyer's CoC access instead.

   None of that was visible from any existing check. The unit tests exercised
   entitlements.ts, which was right; the modal render test exercised the
   client, which was separately wrong; nothing joined a purchase to the access
   it is supposed to buy.

   WHAT THIS CHECKS

   Two kinds of assertion, and it needs both:

     - BEHAVIOUR: run the real entitlements module over real profile shapes and
       confirm that a purchase leads to deriveAccess granting the scope, that
       time stacks instead of resetting, and that unrelated scopes are left
       alone.
     - WIRING: read the actual function sources and confirm each money path
       SELECTS and WRITES all three scope columns. This half is what would have
       caught the bug. A behaviour-only test passes happily while the value is
       computed correctly and then thrown away, which is exactly what happened.

   Adding a fourth course means adding it to ACCESS_SCOPES in entitlements.ts;
   this file reads that list rather than repeating it, so the new course is
   covered here the moment it exists.
   ═══════════════════════════════════════════════════════════════════════════ */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  ACCESS_SCOPES, SCOPE_COLUMN, GRANT_COLUMN,
  scopesCovered, applyPurchase, applyGrant, deriveAccess,
  recomputeFromPayments, PLAN_MONTHS, expiryUpdate,
} from './entitlements.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const FN = join(HERE, '..');

let pass = 0;
const fails = [];
function check(label, ok, detail) {
  if (ok) { pass++; return; }
  fails.push(label + (detail ? '\n      ' + detail : ''));
}
function eq(label, actual, expected) {
  check(label, JSON.stringify(actual) === JSON.stringify(expected),
        'expected ' + JSON.stringify(expected) + '\n      actual   ' + JSON.stringify(actual));
}

const NOW = new Date('2026-09-12T00:00:00.000Z');   // the day after grace ends
const day = (iso) => iso ? new Date(iso).toISOString().slice(0, 10) : null;

/* Real profile shapes, taken from prod on 9 Sep 2026: the three kinds of
   account sitting in the 163 that grace covers. */
const BUYERS = {
  'paying COC customer, grace expired': {
    subscription_plan: '3mo',
    trial_started_at: '2026-07-26T12:54:44.980Z',
    written_expires_at: '2027-01-29T17:58:56.896Z',
    oral_expires_at: '2026-11-03T05:20:31.850Z',
    sponsorship_expires_at: null,
    granted_sponsorship_expires_at: '2026-09-11T18:29:59.000Z',
  },
  'lapsed customer, grace expired': {
    subscription_plan: 'starter',
    trial_started_at: '2026-07-27T16:55:01.591Z',
    written_expires_at: '2026-08-31T00:00:00.000Z',
    oral_expires_at: '2026-08-31T00:00:00.000Z',
    sponsorship_expires_at: null,
    granted_sponsorship_expires_at: '2026-09-11T18:29:59.000Z',
  },
  'never paid anything, grace expired': {
    subscription_plan: 'trial',
    trial_started_at: '2026-07-29T12:12:42.614Z',
    written_expires_at: null,
    oral_expires_at: null,
    sponsorship_expires_at: null,
    granted_sponsorship_expires_at: '2026-09-11T18:29:59.000Z',
  },
};

console.log('\n  BUYING SPONSORSHIP, START TO FINISH');
console.log('  ' + '='.repeat(72));

/* ── LINK 1 ── The gate is shut before they pay ─────────────────────────── */
for (const [who, p] of Object.entries(BUYERS)) {
  const acc = deriveAccess(p, NOW);
  check('L1 gate shut for ' + who, acc.sponsorship === false,
        'deriveAccess said sponsorship=' + acc.sponsorship);
}
// And a granted (grace) expiry that has NOT lapsed must still open it, or the
// 163 lose access early.
check('L1 grace still open before it lapses',
      deriveAccess({ ...BUYERS['never paid anything, grace expired'],
                     sponsorship_expires_at: '2026-09-11T18:29:59.000Z' },
                   new Date('2026-09-10T00:00:00Z')).sponsorship === true);

/* ── LINK 2 ── The order carries the right scope ────────────────────────── */
eq('L2 a sponsorship order covers only sponsorship',
   scopesCovered('sponsorship'), ['sponsorship']);
eq('L2 COC scopes are unchanged by the sponsorship work',
   [scopesCovered('written'), scopesCovered('oral'), scopesCovered('both')],
   [['written'], ['oral'], ['written', 'oral']]);
eq('L2 plan lengths', [PLAN_MONTHS['3mo'], PLAN_MONTHS['6mo'], PLAN_MONTHS['12mo']],
   [3, 6, 12]);

/* ── LINK 3 ── The payment computes the right entitlement ───────────────── */
const effect = applyPurchase(BUYERS['paying COC customer, grace expired'],
                             'sponsorship', 3, NOW);
eq('L3 sponsorship expiry is 3 months out',
   day(effect.sponsorship_expires_at), '2026-12-12');
eq('L3 the buyer\'s existing Written is untouched',
   day(effect.written_expires_at), '2027-01-29');
eq('L3 the buyer\'s existing Oral is untouched',
   day(effect.oral_expires_at), '2026-11-03');
eq('L3 only sponsorship is reported as changed',
   effect.changes.map(c => c.scope), ['sponsorship']);

/* ── LINK 4 ── The write reaches the profile, and the gate opens ────────── */
/* This is the link that was broken. applyPurchase returned the right value and
   the function never wrote it, so the assertion has to be about the profile
   AFTER the update, not about the effect object. */
function payAndSave(profile, scope, months, now) {
  const e = applyPurchase(profile, scope, months, now);
  const saved = { ...profile };
  // Exactly what a correct money path must persist: every scope column.
  for (const s of ACCESS_SCOPES) saved[SCOPE_COLUMN[s]] = e[SCOPE_COLUMN[s]];
  return saved;
}
for (const [who, p] of Object.entries(BUYERS)) {
  const after = payAndSave(p, 'sponsorship', 3, NOW);
  check('L4 gate opens after paying, for ' + who,
        deriveAccess(after, NOW).sponsorship === true,
        'still locked; sponsorship_expires_at=' + after.sponsorship_expires_at);
  check('L4 paying for sponsorship did not grant COC, for ' + who,
        deriveAccess(after, NOW).written === deriveAccess(p, NOW).written &&
        deriveAccess(after, NOW).oral === deriveAccess(p, NOW).oral,
        'COC access changed: before=' + JSON.stringify(deriveAccess(p, NOW)) +
        ' after=' + JSON.stringify(deriveAccess(after, NOW)));
}

/* ── LINK 5 ── Buying again stacks instead of resetting ─────────────────── */
const first = payAndSave(BUYERS['never paid anything, grace expired'],
                         'sponsorship', 3, NOW);
const LATER = new Date('2026-10-01T00:00:00Z');     // renews early, 2 months in
const second = payAndSave(first, 'sponsorship', 3, LATER);
eq('L5 renewing early extends from the existing expiry, not from today',
   day(second.sponsorship_expires_at), '2027-03-12');
check('L5 renewing never shortens access',
      new Date(second.sponsorship_expires_at) > new Date(first.sponsorship_expires_at));

/* ── LINK 6 ── A comp coupon grants it too, on its own ledger ───────────── */
const granted = applyGrant(BUYERS['never paid anything, grace expired'],
                           'sponsorship', 3, NOW);
eq('L6 grant ledger records sponsorship',
   day(granted[GRANT_COLUMN.sponsorship]), '2026-12-12');
check('L6 a grant also opens the gate',
      deriveAccess(payAndSave(BUYERS['never paid anything, grace expired'],
                              'sponsorship', 3, NOW), NOW).sponsorship === true);

/* ── LINK 7 ── A refund takes it back ───────────────────────────────────── */
const bought = payAndSave(BUYERS['never paid anything, grace expired'],
                          'sponsorship', 3, NOW);
const afterRefund = recomputeFromPayments([], bought);   // nothing left paid
check('L7 refunding the only sponsorship payment revokes sponsorship',
      !afterRefund.sponsorship_expires_at ||
      new Date(afterRefund.sponsorship_expires_at) <= NOW,
      'still holds sponsorship until ' + afterRefund.sponsorship_expires_at);

/* ── WIRING ── every money path must read and write every scope column ──── */
/* The half that actually catches this class of bug. A function can compute the
   right answer and still not save it, and behaviour tests over the shared
   module cannot see that. */
/* The invariant is NOT "the source mentions every column". The fix for this
   bug deliberately stopped mentioning them: four hand-written lists became
   ENTITLEMENT_COLUMNS and expiryUpdate(), and a check demanding the literal
   names would then fail the correct code while passing the broken code the
   day a fourth course arrives.

   What actually goes wrong is a PARTIAL hand-written list: a call site that
   spells its columns out and misses one. So the rule is: name all of them, or
   name none and use the helpers. Naming some is the bug. */
const MONEY_PATHS = [
  'verify-razorpay-payment',
  'razorpay-webhook',
  'redeem-coupon',
  'refund-payment',
];
const GENERIC = ['expiryUpdate', 'ENTITLEMENT_COLUMNS', 'SCOPE_COLUMNS',
                 'clearedExpiries', 'clearedGrants', 'liveExpiries', 'GRANT_COLUMNS'];

for (const fn of MONEY_PATHS) {
  let src;
  try { src = readFileSync(join(FN, fn, 'index.ts'), 'utf8'); }
  catch { fails.push('WIRING ' + fn + ' source not found'); continue; }

  // Comments in these files describe the bug and name the columns while doing
  // it; only code counts.
  const code = src.split('\n')
    .filter(l => !/^\s*(\/\/|\*|\/\*)/.test(l))
    .join('\n');

  const named = ACCESS_SCOPES.filter(s => code.includes(SCOPE_COLUMN[s]));
  const missing = ACCESS_SCOPES.filter(s => !named.includes(s));
  const usesHelper = GENERIC.some(h => code.includes(h));

  check('WIRING ' + fn + ' covers every scope',
        named.length === ACCESS_SCOPES.length || (named.length === 0 && usesHelper),
        named.length === 0
          ? 'names no scope column and imports none of the scope-generic helpers'
          : 'hand-lists ' + named.join(', ') + ' but not ' + missing.join(', ') +
            ' - a partial list is how a paid course silently grants nothing');

  check('WIRING ' + fn + ' persists what it computed',
        usesHelper || named.length === ACCESS_SCOPES.length,
        'applyPurchase returns every scope; this path has to save every scope');
}

/* send-expiry-emails is not a money path, but a course nobody warns about
   lapses silently and the renewal never happens. */
{
  const src = readFileSync(join(FN, 'send-expiry-emails', 'index.ts'), 'utf8');
  for (const s of ACCESS_SCOPES) {
    check('WIRING send-expiry-emails covers ' + s,
          src.includes(SCOPE_COLUMN[s]),
          'buyers of this course never get a renewal warning');
  }
}

/* ── COC MUST NOT MOVE ──────────────────────────────────────────────────────
   The sponsorship fix widened every money path from two columns to three, and
   the paying customers on this app are COC customers. Two ways that could hurt
   them, both checked here.

   1. ARITHMETIC. A COC purchase must produce exactly the dates it produced
      before. entitlements.ts was only added to, never edited, so this should
      hold trivially - which is precisely why it is worth asserting rather than
      assumed.

   2. THE WIPE. This is the dangerous one. expiryUpdate() writes EVERY scope
      column, including sponsorship, on a COC purchase. That is a harmless
      pass-through only while the profile was SELECTED with that column: an
      unselected column reads as undefined, becomes null in the update, and
      erases access the buyer holds. The 163 accounts on sponsorship grace are
      sitting in granted_sponsorship_expires_at right now, so a COC coupon
      redemption or a COC refund that wrote a column it had not read would take
      the whole grace cohort out.

      So the invariant is: a path may not write a column it does not select. */
{
  // A COC buyer who also holds sponsorship and grace: the state that a wipe
  // would destroy.
  const cocBuyerWithSponsorship = {
    subscription_plan: '3mo',
    trial_started_at: '2026-07-26T12:54:44.980Z',
    written_expires_at: '2026-11-01T00:00:00.000Z',
    oral_expires_at: '2026-11-01T00:00:00.000Z',
    sponsorship_expires_at: '2027-02-01T00:00:00.000Z',
    granted_sponsorship_expires_at: '2026-09-11T18:29:59.000Z',
    granted_written_expires_at: null,
    granted_oral_expires_at: null,
  };

  // 1. Arithmetic: buying COC 'both' moves written and oral, and nothing else.
  const cocEffect = applyPurchase(cocBuyerWithSponsorship, 'both', 3, NOW);
  eq('COC 3mo "both" still stacks Written from its own expiry',
     day(cocEffect.written_expires_at), '2027-02-01');
  eq('COC 3mo "both" still stacks Oral from its own expiry',
     day(cocEffect.oral_expires_at), '2027-02-01');
  eq('COC purchase leaves the sponsorship column exactly as found',
     cocEffect.sponsorship_expires_at, cocBuyerWithSponsorship.sponsorship_expires_at);
  eq('COC purchase reports only COC scopes as changed',
     cocEffect.changes.map(c => c.scope), ['written', 'oral']);

  for (const sc of ['written', 'oral']) {
    const e = applyPurchase(cocBuyerWithSponsorship, sc, 6, NOW);
    eq('COC "' + sc + '" purchase does not touch sponsorship',
       e.sponsorship_expires_at, cocBuyerWithSponsorship.sponsorship_expires_at);
    eq('COC "' + sc + '" purchase does not touch the other COC scope',
       e[SCOPE_COLUMN[sc === 'written' ? 'oral' : 'written']],
       cocBuyerWithSponsorship[SCOPE_COLUMN[sc === 'written' ? 'oral' : 'written']]);
  }

  // 2. The persisted patch must be a pure pass-through for the scope nobody
  //    bought, which is only true when the value came from a real select.
  const patch = expiryUpdate(cocEffect);
  eq('the saved patch carries sponsorship through unchanged',
     patch.sponsorship_expires_at, cocBuyerWithSponsorship.sponsorship_expires_at);
  check('the saved patch never nulls a column the buyer holds',
        Object.entries(patch).every(([k, v]) =>
          !(v === null && cocBuyerWithSponsorship[k])),
        JSON.stringify(patch));

  // And the failure mode itself: an unselected column really does erase access.
  const blindProfile = { ...cocBuyerWithSponsorship };
  delete blindProfile.sponsorship_expires_at;          // as if never selected
  const blindPatch = expiryUpdate(applyPurchase(blindProfile, 'both', 3, NOW));
  check('an unselected sponsorship column WOULD wipe it (why the rule exists)',
        blindPatch.sponsorship_expires_at === null,
        'expected the demonstration of the hazard to produce null');

  /* 3. Every money path must SELECT whatever its effect-producing call READS.

     Not "select everything it writes", which is the obvious rule and the wrong
     one: refund-payment writes all three scope columns while selecting none of
     them, and is correct, because recomputeFromPayments does not read them. It
     seeds each scope from the GRANT ledger and replays the surviving payments
     on top, so the grant columns are its real input. Demanding scope columns
     there would have been a false alarm, and the natural way to silence a
     false alarm is to weaken the check that also catches the real thing.

     So the rule follows the data:
       applyPurchase          reads SCOPE_COLUMN  -> needs the scope columns
       applyGrant             reads GRANT_COLUMN  -> needs the grant columns
       recomputeFromPayments  reads GRANT_COLUMN  -> needs the grant columns */
  const READS = {
    applyPurchase:         { needs: 'scopes', why: 'stacking would restart from today' },
    applyGrant:            { needs: 'grants', why: 'the grant ledger would be rebuilt from nothing' },
    recomputeFromPayments: { needs: 'grants', why: 'comped and graced time would be erased on any refund' },
  };
  for (const fn of MONEY_PATHS) {
    const src = readFileSync(join(FN, fn, 'index.ts'), 'utf8');
    const code = src.split('\n')
      .filter(l => !/^\s*(\/\/|\*|\/\*)/.test(l)).join('\n');

    /* Look inside the .select() calls, NOT at the whole file.

       The first version of this searched the file for 'GRANT_COLUMNS', and a
       mutation that deleted it from the select while leaving the write in
       place - the precise shape that would erase the grace cohort - passed,
       because the `import { GRANT_COLUMNS }` line still matched. An import
       proves the symbol is available, not that anything reads it. */
    const selects = [...code.matchAll(/\.select\(([\s\S]*?)\)\s*(?:\.|;|$)/g)]
      .map(m => m[1]).join(' | ');

    const selectsScopes = /ENTITLEMENT_COLUMNS|SCOPE_COLUMNS/.test(selects)
      || ACCESS_SCOPES.every(s => selects.includes(SCOPE_COLUMN[s]));
    const selectsGrants = /GRANT_COLUMNS/.test(selects)
      || ACCESS_SCOPES.every(s => selects.includes(GRANT_COLUMN[s]));

    for (const [call, rule] of Object.entries(READS)) {
      if (!new RegExp('\\b' + call + '\\s*\\(').test(code)) continue;
      const ok = rule.needs === 'scopes' ? selectsScopes : selectsGrants;
      check('COC-SAFE ' + fn + ' selects the ' + rule.needs + ' ' + call + ' reads',
            ok,
            'an unselected column reads as null: ' + rule.why);
    }

    // Writing a cleared value is only safe where clearing is the intent.
    if (code.includes('clearedExpiries') || code.includes('clearedGrants')) {
      check('COC-SAFE ' + fn + ' only clears on lifetime or full revocation',
            /lifetime/.test(code) || /revoke|refund/i.test(code),
            'clears every scope column outside a lifetime or revocation branch');
    }
  }
}

/* ── THE GATE ── the half the buyer actually sees ───────────────────────────
   Everything above proves the profile ends up correct. This proves the app
   then opens, by running the REAL gate source out of app/sponsorship/index.html
   rather than a paraphrase of it. If the extraction stops matching, that is a
   failure too: a gate this file cannot find is a gate nobody is checking. */
{
  const page = readFileSync(
    join(HERE, '..', '..', '..', 'app', 'sponsorship', 'index.html'), 'utf8');

  const resolver = page.match(
    /window\._sponStateReady = \(async function \(\) \{[\s\S]*?\}\)\(\);/);
  const freeFn = page.match(/function _sponFreeTopic\(topicId\) \{[\s\S]*?\n  \}/);
  const lockFn = page.match(/window\.isLocked = function \(topicId\) \{[\s\S]*?\n  \};/);

  check('GATE resolver found in the shipped page', !!resolver);
  check('GATE isLocked found in the shipped page', !!lockFn);

  if (resolver && freeFn && lockFn) {
    // A tiny stand-in for the two tables the gate reads, shaped like the
    // supabase-js chain it actually calls.
    const makeClient = (config, profile) => ({
      from(table) {
        const api = {
          select: () => api,
          eq: () => api,
          single: () => Promise.resolve({
            error: null,
            data: table === 'course_config' ? config : profile,
          }),
        };
        return api;
      },
    });

    const SECTIONS = { s1: { topics: [
      { id: 'F01', free: true }, { id: 'F05', free: false }, { id: 'F14', free: false },
    ] } };

    const runGate = async (config, profile) => {
      const w = {
        _authReady: Promise.resolve(),
        _sbUser: { id: 'u1' },
        _sbClient: makeClient(config, profile),
      };
      const body = `
        return (async () => {
          ${resolver[0].replace(/window\./g, 'w.')}
          ${freeFn[0]}
          ${lockFn[0].replace(/window\./g, 'w.')}
          await w._sponStateReady;
          return { paid: w._sponPaid, access: w._sponAccess,
                   lockedPaidTopic: w.isLocked('F05'),
                   lockedFreeTopic: w.isLocked('F01') };
        })();`;
      // eslint-disable-next-line no-new-func
      return new Function('w', 'SECTIONS', body)(w, SECTIONS);
    };

    /* The gate calls Date.now() directly rather than taking an injected clock,
       so these have to be past and future against the REAL clock, not against
       the NOW constant this file uses elsewhere. Written as offsets so the
       test does not quietly start lying the day a hardcoded date goes by:
       the first draft used the real grace date, 11 Sep, as "already lapsed"
       while it was still two days away, and the case passed for the wrong
       reason. */
    const FUTURE = new Date(Date.now() + 120 * 86400000).toISOString();
    const PAST   = new Date(Date.now() -  30 * 86400000).toISOString();

    const cases = [
      ['course still free: nothing is locked',
       { sponsorship_paid: false }, { sponsorship_expires_at: null, granted_sponsorship_expires_at: PAST },
       { lockedPaidTopic: false }],
      ['paid, grace lapsed, never bought: locked',
       { sponsorship_paid: true }, { sponsorship_expires_at: null, granted_sponsorship_expires_at: PAST },
       { lockedPaidTopic: true }],
      ['paid, still inside grace: open',
       { sponsorship_paid: true }, { sponsorship_expires_at: null, granted_sponsorship_expires_at: FUTURE },
       { lockedPaidTopic: false }],
      ['paid, and they just bought it: open',
       { sponsorship_paid: true }, { sponsorship_expires_at: FUTURE, granted_sponsorship_expires_at: PAST },
       { lockedPaidTopic: false }],
    ];

    for (const [label, cfg, prof, want] of cases) {
      const r = await runGate(cfg, prof);
      check('GATE ' + label, r.lockedPaidTopic === want.lockedPaidTopic,
            'isLocked(paid topic) was ' + r.lockedPaidTopic +
            ' (paid=' + r.paid + ' access=' + r.access + ')');
      check('GATE free sample stays readable: ' + label,
            r.lockedFreeTopic === false);
    }

    /* The join. This is the assertion that would have caught the whole thing:
       take the profile a purchase actually leaves behind, and ask the gate. */
    const boughtProfile = payAndSave(
      BUYERS['never paid anything, grace expired'], 'sponsorship', 3, NOW);
    const afterBuy = await runGate({ sponsorship_paid: true }, {
      sponsorship_expires_at: boughtProfile.sponsorship_expires_at,
      granted_sponsorship_expires_at: PAST,
    });
    check('GATE opens on the profile a real purchase produces',
          afterBuy.lockedPaidTopic === false,
          'paid for sponsorship and the app stayed locked');
  }
}

/* ── Report ─────────────────────────────────────────────────────────────── */
console.log('  scopes under test: ' + ACCESS_SCOPES.join(', '));
console.log('');
if (fails.length === 0) {
  console.log('  PASS  ' + pass + ' checks. A sponsorship purchase unlocks sponsorship,');
  console.log('        stacks on renewal, leaves COC alone, and every money path');
  console.log('        persists every scope column.\n');
  process.exit(0);
}
console.log('  FAIL  ' + fails.length + ' of ' + (pass + fails.length) + ' checks\n');
for (const f of fails) console.log('   x  ' + f);
console.log('');
process.exit(1);

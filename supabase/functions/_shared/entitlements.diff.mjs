/* ═══════════════════════════════════════════════════════════════════════════
   Prove the entitlements refactor did not change a single COC answer.

   entitlements.ts was rewritten from written/oral pairs to a scope-keyed map
   so that Sponsorship could become a third sellable course. The app has
   paying COC customers; a refactor that shifts an expiry by a day, or drops a
   scope from a stacking calculation, takes access somebody paid for and does
   it silently.

   So this does not test the new code against my expectations. It runs the
   PREVIOUS implementation, preserved verbatim, against the new one over the
   same inputs, and fails on any difference in the written/oral answers.
   Sponsorship fields are ignored here by design: they are new, the old code
   has no opinion about them, and it is the OLD behaviour that must be
   preserved.

   Run:  node supabase/functions/_shared/entitlements.diff.mjs
   ═══════════════════════════════════════════════════════════════════════════ */

import * as NEW from './entitlements.ts';

const OLD_PATH = process.env.ENTITLEMENTS_OLD
  || 'C:/Users/blesw/AppData/Local/Temp/claude/d--Notes-1-Original/356b3cf9-cb1f-4c8b-89ae-1c3bc041f8f8/scratchpad/entitlements_old.ts';
const OLD = await import('file:///' + OLD_PATH.replace(/^\/+/, ''));

const NOW = new Date('2026-08-14T12:00:00.000Z');
const iso = s => s === null ? null : new Date(s).toISOString();

let checks = 0, fails = [];
function same(label, a, b) {
  checks++;
  const A = JSON.stringify(a), B = JSON.stringify(b);
  if (A !== B) fails.push(label + '\n      old: ' + A + '\n      new: ' + B);
}

/* Profiles covering every shape the real table produces. */
const PROFILES = {
  'nothing at all':        {},
  'live trial':            { trial_started_at: '2026-08-13T00:00:00Z' },
  'expired trial':         { trial_started_at: '2026-01-01T00:00:00Z' },
  'lifetime':              { subscription_plan: 'lifetime' },
  'written live only':     { written_expires_at: '2026-12-01T00:00:00Z' },
  'oral live only':        { oral_expires_at: '2026-12-01T00:00:00Z' },
  'both live, differing':  { written_expires_at: '2026-12-01T00:00:00Z', oral_expires_at: '2027-03-15T00:00:00Z' },
  'both lapsed':           { written_expires_at: '2026-01-01T00:00:00Z', oral_expires_at: '2026-02-01T00:00:00Z' },
  'one live one lapsed':   { written_expires_at: '2027-01-01T00:00:00Z', oral_expires_at: '2026-01-01T00:00:00Z' },
  'trial + existing paid': { trial_started_at: '2026-08-13T00:00:00Z', oral_expires_at: '2026-12-01T00:00:00Z' },
  'grants only':           { granted_written_expires_at: '2027-06-01T00:00:00Z', granted_oral_expires_at: '2027-06-01T00:00:00Z' },
  'grants + paid':         { granted_written_expires_at: '2027-06-01T00:00:00Z', written_expires_at: '2027-09-01T00:00:00Z' },
};

const SCOPES = ['written', 'oral', 'both', null, undefined];
const PLANS  = ['3mo', '6mo', '12mo', 'starter', 'standard', 'pro'];

// ── deriveAccess ──────────────────────────────────────────────────────────
for (const [name, p] of Object.entries(PROFILES)) {
  const o = OLD.deriveAccess(p, NOW), n = NEW.deriveAccess(p, NOW);
  same('deriveAccess / ' + name,
       { written: o.written, oral: o.oral },
       { written: n.written, oral: n.oral });
}

// ── scopesCovered ─────────────────────────────────────────────────────────
for (const s of SCOPES) {
  same('scopesCovered / ' + String(s), OLD.scopesCovered(s), NEW.scopesCovered(s));
}

// ── applyPurchase, every profile x scope x plan ───────────────────────────
for (const [name, p] of Object.entries(PROFILES)) {
  for (const s of SCOPES) {
    for (const plan of PLANS) {
      const months = NEW.PLAN_MONTHS[plan];
      const o = OLD.applyPurchase(p, s, months, NOW);
      const n = NEW.applyPurchase(p, s, months, NOW);
      same(`applyPurchase / ${name} / scope=${s} / ${plan}`,
           { w: iso(o.written_expires_at), o: iso(o.oral_expires_at), c: o.changes },
           { w: iso(n.written_expires_at), o: iso(n.oral_expires_at), c: n.changes });
    }
  }
}

// ── applyGrant ────────────────────────────────────────────────────────────
for (const [name, p] of Object.entries(PROFILES)) {
  for (const s of SCOPES) {
    const o = OLD.applyGrant(p, s, 6, NOW);
    const n = NEW.applyGrant(p, s, 6, NOW);
    same('applyGrant / ' + name + ' / scope=' + String(s),
         { w: iso(o.granted_written_expires_at), o: iso(o.granted_oral_expires_at) },
         { w: iso(n.granted_written_expires_at), o: iso(n.granted_oral_expires_at) });
  }
}

// ── recomputeFromPayments, the refund path ────────────────────────────────
// Ordering, stacking and the grant seed all matter here. This is the function
// that rebuilds a customer's access after a refund, so an error means either
// giving away months or taking back months that were paid for.
const HISTORIES = {
  'empty': [],
  'single written': [
    { plan: '3mo', scope: 'written', paid_at: '2026-03-01T00:00:00Z', status: 'paid' },
  ],
  'stacked same scope': [
    { plan: '3mo', scope: 'written', paid_at: '2026-03-01T00:00:00Z', status: 'paid' },
    { plan: '6mo', scope: 'written', paid_at: '2026-04-01T00:00:00Z', status: 'paid' },
  ],
  'mixed scopes': [
    { plan: '3mo', scope: 'written', paid_at: '2026-03-01T00:00:00Z', status: 'paid' },
    { plan: '6mo', scope: 'oral',    paid_at: '2026-04-01T00:00:00Z', status: 'paid' },
    { plan: '12mo', scope: 'both',   paid_at: '2026-05-01T00:00:00Z', status: 'paid' },
  ],
  'out of order paid_at': [
    { plan: '6mo', scope: 'both', paid_at: '2026-06-01T00:00:00Z', status: 'paid' },
    { plan: '3mo', scope: 'both', paid_at: '2026-02-01T00:00:00Z', status: 'paid' },
  ],
  'with unpaid rows': [
    { plan: '3mo', scope: 'both', paid_at: '2026-03-01T00:00:00Z', status: 'paid' },
    { plan: '12mo', scope: 'both', paid_at: null, status: 'created' },
    { plan: '6mo', scope: 'both', paid_at: '2026-04-01T00:00:00Z', status: 'refunded' },
  ],
  'unknown plan name': [
    { plan: 'mystery', scope: 'both', paid_at: '2026-03-01T00:00:00Z', status: 'paid' },
    { plan: '3mo', scope: 'both', paid_at: '2026-04-01T00:00:00Z', status: 'paid' },
  ],
};

for (const [hname, hist] of Object.entries(HISTORIES)) {
  for (const [pname, p] of Object.entries(PROFILES)) {
    const o = OLD.recomputeFromPayments(hist, p);
    const n = NEW.recomputeFromPayments(hist, p);
    same(`recomputeFromPayments / ${hname} / ${pname}`,
         { w: iso(o.written_expires_at), o: iso(o.oral_expires_at) },
         { w: iso(n.written_expires_at), o: iso(n.oral_expires_at) });
  }
}

// ── trialEnd / addMonths / PLAN_MONTHS ────────────────────────────────────
for (const [name, p] of Object.entries(PROFILES)) {
  const o = OLD.trialEnd(p), n = NEW.trialEnd(p);
  same('trialEnd / ' + name, o && o.toISOString(), n && n.toISOString());
}
for (const m of [1, 2, 3, 5, 6, 12]) {
  // 31 Jan + 1 month is the classic overflow; it must not change behaviour.
  for (const d of ['2026-01-31T00:00:00Z', '2026-08-14T12:00:00Z', '2026-02-28T00:00:00Z']) {
    same('addMonths / ' + d + ' + ' + m,
         OLD.addMonths(new Date(d), m).toISOString(),
         NEW.addMonths(new Date(d), m).toISOString());
  }
}
same('PLAN_MONTHS', OLD.PLAN_MONTHS, NEW.PLAN_MONTHS);
same('TRIAL_DAYS', OLD.TRIAL_DAYS, NEW.TRIAL_DAYS);

// ── new behaviour, asserted rather than diffed ────────────────────────────
// The old module cannot speak to these, so they are checked directly.
const sponsOnly = NEW.applyPurchase({}, 'sponsorship', 3, NOW);
if (sponsOnly.written_expires_at !== null || sponsOnly.oral_expires_at !== null) {
  fails.push('buying Sponsorship must not touch the COC expiries');
}
checks++;
if (!sponsOnly.sponsorship_expires_at) { fails.push('buying Sponsorship must set its own expiry'); }
checks++;
const bothEff = NEW.applyPurchase({}, 'both', 3, NOW);
if (bothEff.sponsorship_expires_at !== null) {
  fails.push("'both' must still mean written+oral only, never Sponsorship");
}
checks++;

console.log('  ' + checks + ' comparisons');
if (fails.length) {
  console.log('\n  ' + fails.length + ' DIFFERENCE(S) - do not ship:\n');
  fails.slice(0, 12).forEach(f => console.log('    ' + f));
  process.exit(1);
}
console.log('\n  no difference: every COC answer is identical to before the refactor');

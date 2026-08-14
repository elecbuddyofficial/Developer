// ═══════════════════════════════════════════════════════════════════════════
//  Entitlements: the single definition of who can read what, and of what a
//  purchase does to their access.
//
//  Every scope keeps its OWN expiry date. profiles used to hold one
//  plan_scope + one subscription_expires_at, which cannot represent "Written
//  until Dec 1, Oral until Mar 15" - so a second, complementary purchase
//  overwrote the first and silently destroyed access the customer had paid
//  for. See app/admin/per_scope_expiry_setup.sql for the full history.
//
//  THE RULE, and it is the only one:
//    A purchase adds its months to every scope it covers, starting from THAT
//    scope's own current expiry (or from now / trial end if that scope has
//    lapsed or was never bought).
//
//  This lives in _shared because three separate functions apply purchases
//  (verify-razorpay-payment, razorpay-webhook, redeem-coupon) and two derive
//  access (get-content-key, send-expiry-emails). Those copies drifting apart
//  is exactly how the original bug survived review.
//
//  ── WHY THIS IS KEYED BY SCOPE RATHER THAN WRITTEN/ORAL PAIRS ─────────────
//
//  It used to be pairs: an Access of {written, oral}, two named columns, and
//  a two-way ternary in baseFor and applyPurchase. Adding Sponsorship as a
//  third sellable course meant either a third branch in every one of those
//  places, or doing it once here. Everything is now driven off SCOPE_COLUMN,
//  so a fourth course is a line of data rather than six more branches.
//
//  The maths is unchanged. That is not an aspiration: entitlements.diff.mjs
//  runs the old implementation and this one over the same inputs and fails on
//  any difference, because a rounding change here silently robs somebody who
//  paid.
// ═══════════════════════════════════════════════════════════════════════════

export const TRIAL_DAYS = 3;

export const PLAN_MONTHS: Record<string, number> = {
  starter: 2,
  standard: 5,
  pro: 12,
  '3mo': 3,
  '6mo': 6,
  '12mo': 12,
};

/** A course someone can actually hold access to. One expiry column each. */
export type AccessScope = 'written' | 'oral' | 'sponsorship';

/**
 * What a purchase can be sold as.
 *
 * 'both' still means written + oral, NOT everything. Every historical
 * payments and coupons row says 'both', and those rows have to keep meaning
 * exactly what the customer was sold. An everything-bundle, if it is ever
 * wanted, is a NEW value here and never a redefinition of this one.
 */
export type Scope = AccessScope | 'both';

/** Where each scope's live expiry lives on the profiles row. */
export const SCOPE_COLUMN: Record<AccessScope, string> = {
  written:     'written_expires_at',
  oral:        'oral_expires_at',
  sponsorship: 'sponsorship_expires_at',
};

/** The grant-only ledger, same shape. See applyGrant. */
export const GRANT_COLUMN: Record<AccessScope, string> = {
  written:     'granted_written_expires_at',
  oral:        'granted_oral_expires_at',
  sponsorship: 'granted_sponsorship_expires_at',
};

export const ACCESS_SCOPES: AccessScope[] = ['written', 'oral', 'sponsorship'];

/** The scopes a purchase of `scope` actually grants. */
export function scopesCovered(scope: string | null | undefined): AccessScope[] {
  const s = scope || 'both';
  if (s === 'written')     return ['written'];
  if (s === 'oral')        return ['oral'];
  if (s === 'sponsorship') return ['sponsorship'];
  return ['written', 'oral'];          // 'both' = the two COC scopes
}

export interface EntitlementProfile {
  subscription_plan?: string | null;
  trial_started_at?: string | null;
  written_expires_at?: string | null;
  oral_expires_at?: string | null;
  sponsorship_expires_at?: string | null;
  // Legacy single-slot columns. Still written for display/back-compat, but
  // never read for access decisions once the migration has run.
  plan_scope?: string | null;
  subscription_expires_at?: string | null;
  // Access that did NOT come from a payment: a comp coupon or an admin grant.
  // Maintained as its own little ledger, stacked the same way, so that a
  // refund can rebuild from payments WITHOUT destroying it. See
  // recomputeFromPayments for why reconstructing this after the fact is not
  // possible: months are added from a moving anchor, so subtracting two
  // replays does not recover the grant, it lands weeks out.
  granted_written_expires_at?: string | null;
  granted_oral_expires_at?: string | null;
  granted_sponsorship_expires_at?: string | null;
  [key: string]: unknown;
}

export type Access = Record<AccessScope, boolean>;

export function trialEnd(profile: EntitlementProfile): Date | null {
  if (!profile.trial_started_at) return null;
  return new Date(new Date(profile.trial_started_at).getTime() + TRIAL_DAYS * 86400000);
}

export function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function expiryOf(profile: EntitlementProfile, scope: AccessScope): string | null {
  return (profile[SCOPE_COLUMN[scope]] as string | null | undefined) ?? null;
}

/**
 * Who can read what, right now.
 *
 * Lifetime and an active trial both grant everything; a trial is never
 * scope-restricted, it is a full preview of every section. Paid access is
 * purely per-scope and does NOT consult subscription_plan, so a buyer whose
 * Written has lapsed while Oral is still running resolves correctly rather
 * than being judged by whichever plan they happened to buy last.
 *
 * Note that "everything" now includes Sponsorship. That follows the existing
 * rule rather than inventing an exception: a trial has always been a full
 * preview of the whole app, and carving one course out of it would be a new
 * behaviour, not a preserved one.
 */
export function deriveAccess(profile: EntitlementProfile, now: Date = new Date()): Access {
  const all = (v: boolean): Access =>
    ACCESS_SCOPES.reduce((acc, s) => { acc[s] = v; return acc; }, {} as Access);

  if (profile.subscription_plan === 'lifetime') return all(true);

  const tEnd = trialEnd(profile);
  if (tEnd && now < tEnd) return all(true);

  const live = (iso: string | null | undefined) => !!iso && now < new Date(iso);
  return ACCESS_SCOPES.reduce((acc, s) => {
    acc[s] = live(expiryOf(profile, s));
    return acc;
  }, {} as Access);
}

/**
 * Where a scope's next purchase should start counting from.
 *
 * Whichever is latest of: now, the end of a still-running trial, and that
 * scope's existing expiry. Using the existing expiry is what makes time
 * stack instead of being overwritten; using trial end preserves the
 * long-standing behaviour that buying early during a trial does not burn the
 * free days already given.
 */
function baseFor(profile: EntitlementProfile, scope: AccessScope, now: Date): Date {
  let base = now;

  const tEnd = trialEnd(profile);
  if (tEnd && tEnd > base) base = tEnd;

  const current = expiryOf(profile, scope);
  if (current) {
    const cur = new Date(current);
    if (cur > base) base = cur;
  }

  return base;
}

export interface PurchaseEffect {
  written_expires_at: string | null;
  oral_expires_at: string | null;
  sponsorship_expires_at: string | null;
  /** Per-scope before/after, for telling the buyer exactly what they got. */
  changes: {
    scope: AccessScope;
    from: string | null;
    to: string;
    extended: boolean;   // true = they already had this scope and it grew
    months: number;
  }[];
}

/**
 * Apply a purchase and return the new per-scope expiries.
 *
 * Scopes NOT covered by this purchase are passed through untouched - that is
 * the entire point, and the thing the old single-slot write got wrong.
 */
export function applyPurchase(
  profile: EntitlementProfile,
  scope: string | null | undefined,
  months: number,
  now: Date = new Date(),
): PurchaseEffect {
  const result: PurchaseEffect = {
    written_expires_at:     profile.written_expires_at ?? null,
    oral_expires_at:        profile.oral_expires_at ?? null,
    sponsorship_expires_at: profile.sponsorship_expires_at ?? null,
    changes: [],
  };

  for (const s of scopesCovered(scope)) {
    const from = expiryOf(profile, s);
    const to = addMonths(baseFor(profile, s, now), months);
    const iso = to.toISOString();

    (result as unknown as Record<string, unknown>)[SCOPE_COLUMN[s]] = iso;

    // "Extended" means they held live access to this scope already. An
    // expired date is a restart, not an extension, and should read that way.
    result.changes.push({
      scope: s,
      from,
      to: iso,
      extended: !!from && new Date(from) > now,
      months,
    });
  }

  return result;
}

/**
 * Rebuild every expiry from scratch by replaying each still-valid paid
 * purchase in the order it was paid.
 *
 * Used after a refund, where incremental arithmetic cannot work: you cannot
 * subtract months from a stacked total and land on the right date, because
 * each purchase's start depended on what existed at the time. Replaying is
 * the only way to get an answer that agrees with applyPurchase.
 *
 * `payments` should already exclude the refunded row.
 */
export function recomputeFromPayments(
  payments: {
    plan: string;
    scope: string | null;
    paid_at: string | null;
    status: string;
  }[],
  profile: EntitlementProfile,
): PurchaseEffect {
  const ordered = payments
    .filter(p => p.status === 'paid')
    .slice()
    .sort((a, b) => new Date(a.paid_at ?? 0).getTime() - new Date(b.paid_at ?? 0).getTime());

  // Start from whatever was GRANTED rather than from nothing.
  //
  // Starting from null was a real bug. Comp coupons (redeem-coupon) and the
  // admin panel's Grant Access both write expiry straight to profiles and
  // leave no payments row, so a replay could not see them. Refunding any
  // payment on such an account therefore wiped the granted time as well: a
  // reviewer given a free year, who bought one month and asked for that month
  // back, lost the year too.
  //
  // Seeding here is exact, because the grant ledger is stacked by the same
  // applyPurchase, so replaying payments on top of it reproduces the real
  // sequence rather than approximating it.
  let running: EntitlementProfile = {
    subscription_plan: profile.subscription_plan,
    trial_started_at:  profile.trial_started_at,
  };
  for (const s of ACCESS_SCOPES) {
    running[SCOPE_COLUMN[s]] = (profile[GRANT_COLUMN[s]] as string | null | undefined) ?? null;
  }

  for (const p of ordered) {
    const months = PLAN_MONTHS[p.plan];
    if (!months) continue;
    // Replay each purchase as of the moment it was actually paid, so the
    // stacking maths matches what the buyer was told at the time.
    const at = p.paid_at ? new Date(p.paid_at) : new Date();
    const eff = applyPurchase(running, p.scope, months, at);
    running = { ...running };
    for (const s of ACCESS_SCOPES) {
      running[SCOPE_COLUMN[s]] = (eff as unknown as Record<string, string | null>)[SCOPE_COLUMN[s]];
    }
  }

  return {
    written_expires_at:     (running.written_expires_at as string | null) ?? null,
    oral_expires_at:        (running.oral_expires_at as string | null) ?? null,
    sponsorship_expires_at: (running.sponsorship_expires_at as string | null) ?? null,
    changes: [],
  };
}

/**
 * Apply a grant (comp coupon or admin Grant Access) to the grant-only ledger.
 *
 * Kept separate from the real expiry columns on purpose. The real columns are
 * grants and payments combined; these are grants alone, and they are what a
 * refund rebuilds on top of. Stacking uses the same applyPurchase, so the two
 * ledgers can never drift in how they count a month.
 */
export function applyGrant(
  profile: EntitlementProfile,
  scope: string | null | undefined,
  months: number,
  now: Date = new Date(),
): Record<string, string | null> {
  const seed: EntitlementProfile = {
    subscription_plan: profile.subscription_plan,
    trial_started_at:  profile.trial_started_at,
  };
  for (const s of ACCESS_SCOPES) {
    seed[SCOPE_COLUMN[s]] = (profile[GRANT_COLUMN[s]] as string | null | undefined) ?? null;
  }

  const eff = applyPurchase(seed, scope, months, now);

  const out: Record<string, string | null> = {};
  for (const s of ACCESS_SCOPES) {
    out[GRANT_COLUMN[s]] = (eff as unknown as Record<string, string | null>)[SCOPE_COLUMN[s]];
  }
  return out;
}

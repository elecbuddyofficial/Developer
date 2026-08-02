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

export type Scope = 'written' | 'oral' | 'both';

/** The scopes a purchase of `scope` actually grants. */
export function scopesCovered(scope: string | null | undefined): ('written' | 'oral')[] {
  const s = scope || 'both';
  if (s === 'written') return ['written'];
  if (s === 'oral') return ['oral'];
  return ['written', 'oral'];
}

export interface EntitlementProfile {
  subscription_plan?: string | null;
  trial_started_at?: string | null;
  written_expires_at?: string | null;
  oral_expires_at?: string | null;
  // Legacy single-slot columns. Still written for display/back-compat, but
  // never read for access decisions once the migration has run.
  plan_scope?: string | null;
  subscription_expires_at?: string | null;
}

export interface Access {
  written: boolean;
  oral: boolean;
}

export function trialEnd(profile: EntitlementProfile): Date | null {
  if (!profile.trial_started_at) return null;
  return new Date(new Date(profile.trial_started_at).getTime() + TRIAL_DAYS * 86400000);
}

export function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

/**
 * Who can read what, right now.
 *
 * Lifetime and an active trial both grant everything; a trial is never
 * scope-restricted, it is a full preview of both sections. Paid access is
 * purely per-scope and does NOT consult subscription_plan, so a buyer whose
 * Written has lapsed while Oral is still running resolves correctly rather
 * than being judged by whichever plan they happened to buy last.
 */
export function deriveAccess(profile: EntitlementProfile, now: Date = new Date()): Access {
  if (profile.subscription_plan === 'lifetime') {
    return { written: true, oral: true };
  }

  const tEnd = trialEnd(profile);
  if (tEnd && now < tEnd) {
    return { written: true, oral: true };
  }

  const live = (iso: string | null | undefined) => !!iso && now < new Date(iso);
  return {
    written: live(profile.written_expires_at),
    oral:    live(profile.oral_expires_at),
  };
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
function baseFor(
  profile: EntitlementProfile,
  scope: 'written' | 'oral',
  now: Date,
): Date {
  let base = now;

  const tEnd = trialEnd(profile);
  if (tEnd && tEnd > base) base = tEnd;

  const current = scope === 'written' ? profile.written_expires_at : profile.oral_expires_at;
  if (current) {
    const cur = new Date(current);
    if (cur > base) base = cur;
  }

  return base;
}

export interface PurchaseEffect {
  written_expires_at: string | null;
  oral_expires_at: string | null;
  /** Per-scope before/after, for telling the buyer exactly what they got. */
  changes: {
    scope: 'written' | 'oral';
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
    written_expires_at: profile.written_expires_at ?? null,
    oral_expires_at:    profile.oral_expires_at ?? null,
    changes: [],
  };

  for (const s of scopesCovered(scope)) {
    const from = (s === 'written' ? profile.written_expires_at : profile.oral_expires_at) ?? null;
    const to = addMonths(baseFor(profile, s, now), months);
    const iso = to.toISOString();

    if (s === 'written') result.written_expires_at = iso;
    else                 result.oral_expires_at = iso;

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
 * Rebuild both expiries from scratch by replaying every still-valid paid
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

  // Start from a clean slate, keeping only trial info - anything else would
  // re-credit the very purchase being refunded.
  let running: EntitlementProfile = {
    subscription_plan: profile.subscription_plan,
    trial_started_at:  profile.trial_started_at,
    written_expires_at: null,
    oral_expires_at:    null,
  };

  for (const p of ordered) {
    const months = PLAN_MONTHS[p.plan];
    if (!months) continue;
    // Replay each purchase as of the moment it was actually paid, so the
    // stacking maths matches what the buyer was told at the time.
    const at = p.paid_at ? new Date(p.paid_at) : new Date();
    const eff = applyPurchase(running, p.scope, months, at);
    running = {
      ...running,
      written_expires_at: eff.written_expires_at,
      oral_expires_at:    eff.oral_expires_at,
    };
  }

  return {
    written_expires_at: running.written_expires_at ?? null,
    oral_expires_at:    running.oral_expires_at ?? null,
    changes: [],
  };
}

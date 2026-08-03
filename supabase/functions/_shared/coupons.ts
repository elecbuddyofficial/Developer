// ═══════════════════════════════════════════════════════════════════════════
//  Coupons: the single definition of what a buyer is charged when a code is
//  applied.
//
//  THE RULE, and it is the only one:
//    The buyer pays the CHEAPER of the sale price and the coupon price. Never
//    both discounts compounded, and never below Razorpay's floor.
//
//  Best-of rather than stacking is a deliberate choice: a 50% sale plus a 50%
//  code compounds to 75% off, which is far too easy to trigger by accident
//  from two innocent-looking settings edited days apart. Best-of also means a
//  buyer is never worse off for holding a code, which "coupon replaces sale"
//  would not guarantee.
//
//  This lives in _shared because two functions price the same purchase:
//  validate-coupon (which only quotes) and create-razorpay-order (which
//  actually charges). If those two ever disagree the buyer sees one number and
//  is charged another, so they must read from one definition. The same
//  reasoning as _shared/entitlements.ts, and for the same reason: duplicated
//  money logic is how the scope-overwrite bug survived review.
//
//  NOTHING here trusts the client. Both callers look the plan up in
//  pricing_plans and the coupon up in coupons, server-side, every time.
// ═══════════════════════════════════════════════════════════════════════════

/** Razorpay rejects orders under ₹1, so this is the lowest chargeable amount. */
export const FLOOR_PAISE = 100;

export type CouponKind = 'grant' | 'percent' | 'fixed';

export interface PlanRow {
  base_amount: number;                  // paise, the sticker price
  discount_percent?: number | null;     // site-wide sale, applies to everyone
  discount_starts_at?: string | null;
  discount_ends_at?: string | null;
  active?: boolean | null;
}

export interface CouponRow {
  code: string;
  kind?: CouponKind | null;
  discount_value?: number | null;       // percent 1-100, or paise for 'fixed'
  applies_duration?: string | null;     // null = any
  applies_scope?: string | null;        // null = any
  min_amount?: number | null;           // paise, null = no minimum
  active?: boolean | null;
  expires_at?: string | null;
  max_redemptions?: number | null;
}

export interface Price {
  sticker: number;      // list price before anything
  salePrice: number;    // after the site-wide sale (== sticker when no sale)
  couponPrice: number;  // what the code alone would make it
  final: number;        // what the buyer is actually charged
  discount: number;     // sticker - final, for the payments record
  saleActive: boolean;
  /** The code effectively makes this free, so no Razorpay order should exist. */
  isFullGrant: boolean;
  /** The sale already beat the code, so the code changes nothing here. */
  couponHadNoEffect: boolean;
}

/** Is the plan's own sale running right now? */
export function saleIsActive(plan: PlanRow, now: Date = new Date()): boolean {
  const pct = plan.discount_percent ?? 0;
  if (pct <= 0) return false;
  if (plan.discount_starts_at && new Date(plan.discount_starts_at) > now) return false;
  if (plan.discount_ends_at && new Date(plan.discount_ends_at) < now) return false;
  return true;
}

/** The price with no code applied. This is what an ordinary buyer pays today. */
export function priceWithoutCoupon(plan: PlanRow, now: Date = new Date()): number {
  return saleIsActive(plan, now)
    ? Math.round(plan.base_amount * (1 - (plan.discount_percent ?? 0) / 100))
    : plan.base_amount;
}

/**
 * What a buyer is charged for `plan` when `coupon` is applied.
 *
 * Pass coupon = null to get the undiscounted price in the same shape.
 * A 'grant' coupon is not a price at all, so it comes back as isFullGrant and
 * the caller must route it to redeem-coupon instead of creating an order.
 */
export function priceWithCoupon(
  plan: PlanRow,
  coupon: CouponRow | null,
  now: Date = new Date(),
): Price {
  const sticker = plan.base_amount;
  const saleActive = saleIsActive(plan, now);
  const salePrice = priceWithoutCoupon(plan, now);

  let couponPrice = salePrice;
  if (coupon && coupon.kind === 'percent') {
    // Percent is taken off the STICKER, not off the sale price. Taking it off
    // the sale price would be stacking, which is the thing this rule exists to
    // prevent; the min() below is what decides which discount actually wins.
    couponPrice = Math.round(sticker * (1 - (coupon.discount_value ?? 0) / 100));
  } else if (coupon && coupon.kind === 'fixed') {
    couponPrice = sticker - (coupon.discount_value ?? 0);
  } else if (coupon && coupon.kind === 'grant') {
    couponPrice = 0;
  }

  const best = Math.min(salePrice, couponPrice);
  const final = Math.max(FLOOR_PAISE, best);

  return {
    sticker,
    salePrice,
    couponPrice,
    final,
    discount: sticker - final,
    saleActive,
    // Below the floor there is nothing chargeable left, so this is a giveaway
    // wearing a discount's clothes. Unifying it with the existing grant path
    // avoids inventing a second way to hand out free access.
    isFullGrant: best < FLOOR_PAISE,
    couponHadNoEffect: coupon != null && coupon.kind !== 'grant' && couponPrice >= salePrice,
  };
}

/**
 * Everything about a coupon that does not need the database to answer:
 * is it live, and is it allowed on this particular plan?
 *
 * Redemption limits are NOT checked here. Counting live redemptions requires a
 * row lock to be correct, so that lives in the coupon_reserve SQL function and
 * is the authority. This is the cheap pre-check, used by the quote endpoint so
 * an obviously wrong code fails without touching the reservation path.
 */
export function couponAppliesTo(
  coupon: CouponRow,
  duration: string,
  scope: string,
  priceBeforeCoupon: number,
  now: Date = new Date(),
): { ok: true } | { ok: false; reason: 'invalid' | 'below_minimum' } {
  if (!coupon.active) return { ok: false, reason: 'invalid' };
  if (coupon.expires_at && new Date(coupon.expires_at) < now) return { ok: false, reason: 'invalid' };
  if (coupon.applies_duration && coupon.applies_duration !== duration) return { ok: false, reason: 'invalid' };
  if (coupon.applies_scope && coupon.applies_scope !== scope) return { ok: false, reason: 'invalid' };
  // Distinguished from 'invalid' on purpose: this one is worth telling the
  // buyer about, because they can act on it by choosing a bigger plan.
  if (coupon.min_amount && priceBeforeCoupon < coupon.min_amount) {
    return { ok: false, reason: 'below_minimum' };
  }
  return { ok: true };
}

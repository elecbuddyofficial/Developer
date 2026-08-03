-- ═══════════════════════════════════════════════════════════════════════════
--  Grant ledger: access that did not come from a payment.
--
--  THE BUG THIS FIXES. Refunding a payment rebuilds the customer's access by
--  replaying their remaining `payments` rows (refund-payment ->
--  recomputeFromPayments). That replay started from nothing. But access can
--  also arrive from two places that leave NO payments row at all:
--
--    - redeem-coupon, for a `grant` coupon, writes expiry straight to profiles
--    - the admin panel's Grant Access does the same
--
--  So refunding any payment on such an account destroyed the granted time too.
--  A reviewer given a free year, who later bought one month and asked for that
--  month back, lost the whole year. Silently, with nothing in `payments` that
--  could have rebuilt it.
--
--  WHY A LEDGER RATHER THAN WORKING IT OUT AFTERWARDS. The obvious fix is to
--  subtract "replay of all payments" from the stored expiry and call the
--  remainder the grant. That does not work, and it was tried and measured:
--  applyPurchase adds months from a MOVING anchor (max of now, trial end, and
--  the current expiry), so the same 3 months lands on a different date
--  depending on what already existed. Subtracting two replays came out weeks
--  wrong in testing. Grants have to be recorded when they are given.
--
--  These two columns are grants ALONE, stacked by the same applyPurchase as
--  everything else. The real expiry columns stay what they always were: grants
--  and payments combined. A refund now replays payments on top of this
--  baseline instead of on top of nothing.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS granted_written_expires_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS granted_oral_expires_at    TIMESTAMPTZ;


-- ── Backfill, deliberately only where it is exact ──────────────────────────
-- An account holding access with NO paid payment behind it can only have been
-- granted, so the whole expiry is the grant and we can say so precisely.
--
-- Accounts that mix grants and payments are left NULL on purpose. Their split
-- cannot be recovered for the reason above, and guessing would either invent
-- access or destroy it. NULL means those accounts behave exactly as they do
-- today, so this migration cannot make anything worse; every grant issued from
-- now on is recorded exactly.
UPDATE public.profiles p
SET granted_written_expires_at = p.written_expires_at,
    granted_oral_expires_at    = p.oral_expires_at
WHERE (p.written_expires_at IS NOT NULL OR p.oral_expires_at IS NOT NULL)
  AND p.granted_written_expires_at IS NULL
  AND p.granted_oral_expires_at IS NULL
  AND NOT EXISTS (
    SELECT 1 FROM public.payments pm
    WHERE pm.user_id = p.id AND pm.status = 'paid'
  );

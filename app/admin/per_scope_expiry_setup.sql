-- ═══════════════════════════════════════════════════════════════════════════
--  PER-SCOPE SUBSCRIPTION EXPIRY
--  Run once in the Supabase SQL Editor. Safe to re-run.
--
--  Fixes: buying a second, complementary scope destroyed the first purchase.
--
--  A cadet buys Written 12 months, passes the written exam two months later,
--  then buys Oral 3 months. He ends up with Oral ONLY - the 10 remaining
--  months of Written he paid for are silently erased.
--
--  The cause is this table's shape, not a bug in one query: profiles has
--  exactly one plan_scope and one subscription_expires_at, so it cannot
--  represent "Written until Dec 1, Oral until Mar 15". Every purchase
--  overwrites the single slot. create-razorpay-order's guard only blocked
--  OVERLAPPING purchases, and Written vs Oral do not overlap, so the exact
--  scenario above was allowed straight through.
--
--  The rule from here on:
--    Each scope has its own expiry. A purchase adds its months to every scope
--    it covers, starting from THAT scope's own current expiry (or from now /
--    trial end if that scope has lapsed or was never bought).
--
--  Verified before writing this: zero users currently hold paid purchases in
--  more than one scope, so no historical data repair is required.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. The two new columns ────────────────────────────────────────────────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS written_expires_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS oral_expires_at    TIMESTAMPTZ;

-- ── 2. Backfill from the single slot ──────────────────────────────────────
-- A NULL plan_scope on a paid plan is a pre-scope-split purchase, which meant
-- full access under the old all-or-nothing model - so it maps to BOTH scopes,
-- never to neither. Guarded with IS NULL so re-running cannot clobber real
-- per-scope data written after this migration first ran.
UPDATE public.profiles
   SET written_expires_at = CASE
         WHEN COALESCE(plan_scope, 'both') IN ('written', 'both')
         THEN subscription_expires_at END,
       oral_expires_at = CASE
         WHEN COALESCE(plan_scope, 'both') IN ('oral', 'both')
         THEN subscription_expires_at END
 WHERE subscription_plan IN ('starter', 'standard', 'pro', '3mo', '6mo', '12mo')
   AND written_expires_at IS NULL
   AND oral_expires_at IS NULL;

-- ── 3. CRITICAL: extend the privilege-escalation guard ────────────────────
-- These two columns now decide who can read paid content, which makes them
-- exactly as sensitive as subscription_plan. Without this a signed-in
-- non-admin could self-grant access with a single .update() from the browser
-- console - the same hole security_fix_setup.sql closed for subscription_plan
-- and pricing_v2_setup.sql closed for plan_scope. Ships in the SAME script
-- that adds the columns, never as a follow-up.
--
-- auth.uid() is NULL for the service role, which is how the edge functions
-- (payment verification, webhook, coupon redemption, refunds) legitimately
-- set these. Those keep working.
CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    NEW.is_admin                := OLD.is_admin;
    NEW.subscription_plan       := OLD.subscription_plan;
    NEW.subscription_expires_at := OLD.subscription_expires_at;
    NEW.trial_started_at        := OLD.trial_started_at;
    NEW.plan_scope              := OLD.plan_scope;
    NEW.welcome_email_sent_at   := OLD.welcome_email_sent_at;
    NEW.written_expires_at      := OLD.written_expires_at;
    NEW.oral_expires_at         := OLD.oral_expires_at;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
-- Trigger guard_privileged_fields already binds by name; no re-CREATE needed.

-- ── 4. Verify ─────────────────────────────────────────────────────────────
-- Every currently-active subscriber must end up with the SAME effective
-- access as before. This compares old-model access against new-model access
-- and must return zero rows.
SELECT id, email, subscription_plan, plan_scope,
       subscription_expires_at, written_expires_at, oral_expires_at
  FROM public.profiles
 WHERE subscription_plan IN ('starter', 'standard', 'pro', '3mo', '6mo', '12mo')
   AND (
     -- old model said written, new model disagrees
     (COALESCE(plan_scope, 'both') IN ('written', 'both'))
       <> (written_expires_at IS NOT NULL)
     OR
     (COALESCE(plan_scope, 'both') IN ('oral', 'both'))
       <> (oral_expires_at IS NOT NULL)
   );

-- Distribution sanity check.
SELECT subscription_plan,
       count(*)                                              AS users,
       count(written_expires_at)                             AS has_written,
       count(oral_expires_at)                                AS has_oral
  FROM public.profiles
 GROUP BY subscription_plan
 ORDER BY subscription_plan;

-- ── Pricing v2: Duration × Content Scope ────────────────────────────────────
-- Run once in the Supabase SQL Editor. Safe to re-run (ADD COLUMN IF NOT
-- EXISTS, DROP+ADD CONSTRAINT, ON CONFLICT DO NOTHING throughout).
--
-- Restructures subscription plans from single-dimension (starter/standard/pro
-- = duration only, all-or-nothing access) into duration (3mo/6mo/12mo) x
-- content scope (written/oral/both). Old plan values are NEVER renamed —
-- CHECK constraints are widened to accept both old and new values so existing
-- subscribers keep working with zero data migration, and are backfilled with
-- plan_scope='both' since that's what they actually bought under the old
-- all-or-nothing model.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Widen CHECK constraints — old values stay valid forever ────────────
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_subscription_plan_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_subscription_plan_check
  CHECK (subscription_plan IN ('trial','starter','standard','pro','lifetime','3mo','6mo','12mo'));

ALTER TABLE public.payments DROP CONSTRAINT IF EXISTS payments_plan_check;
ALTER TABLE public.payments ADD CONSTRAINT payments_plan_check
  CHECK (plan IN ('starter','standard','pro','3mo','6mo','12mo'));

ALTER TABLE public.coupons DROP CONSTRAINT IF EXISTS coupons_plan_check;
ALTER TABLE public.coupons ADD CONSTRAINT coupons_plan_check
  CHECK (plan IN ('starter','standard','pro','lifetime','3mo','6mo','12mo'));

-- ── 2. New scope columns (nullable — CHECK auto-permits NULL) ─────────────
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS plan_scope TEXT
  CHECK (plan_scope IN ('written','oral','both'));

ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS scope TEXT
  CHECK (scope IN ('written','oral','both'));

ALTER TABLE public.coupons ADD COLUMN IF NOT EXISTS scope TEXT
  CHECK (scope IN ('written','oral','both'));

-- ── 3. Backfill: everyone who had full access under the old model keeps it ─
UPDATE public.profiles
   SET plan_scope = 'both'
 WHERE subscription_plan IN ('starter','standard','pro')
   AND plan_scope IS NULL;

-- refund-payment's downgrade fallback reads payments.scope, not
-- profiles.plan_scope, so historical paid rows need the same backfill or a
-- refund on a newer purchase could incorrectly leave a legacy row looking
-- scope-less instead of 'both'.
UPDATE public.payments
   SET scope = 'both'
 WHERE plan IN ('starter','standard','pro')
   AND status = 'paid'
   AND scope IS NULL;

-- ── 4. CRITICAL: extend the privilege-escalation guard to plan_scope ──────
-- Without this, plan_scope is a column the trigger has never heard of, so a
-- signed-in non-admin user could self-grant plan_scope='both' via a direct
-- .update() the instant the column exists — the exact bug
-- security_fix_setup.sql's protect_privileged_fields() trigger was written
-- to close for subscription_plan/subscription_expires_at/trial_started_at.
-- Must ship in the same script as step 2, never as a follow-up.
CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    NEW.is_admin                := OLD.is_admin;
    NEW.subscription_plan       := OLD.subscription_plan;
    NEW.subscription_expires_at := OLD.subscription_expires_at;
    NEW.trial_started_at        := OLD.trial_started_at;
    NEW.plan_scope              := OLD.plan_scope;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
-- Trigger guard_privileged_fields already binds to this function by name
-- (see security_fix_setup.sql) — no need to re-CREATE TRIGGER.

-- ── 5. Pricing plans table — admin-editable price/discount/branding ───────
-- Duration x scope = 9 fixed combos, branded as three "tracks" (Passage =
-- written, Voyage = oral, Expedition = both) each with three named tiers
-- (Launch = 3mo, Mariner = 6mo, Master = 12mo). track_name/tier_name are
-- editable here rather than hardcoded, so a future rebrand is an admin edit,
-- not a code change. The upgrade modal and every plan-display surface in the
-- app read this table directly.
CREATE TABLE IF NOT EXISTS public.pricing_plans (
  id                 UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  duration           TEXT        NOT NULL CHECK (duration IN ('3mo','6mo','12mo')),
  scope              TEXT        NOT NULL CHECK (scope IN ('written','oral','both')),
  track_name         TEXT        NOT NULL,
  tier_name          TEXT        NOT NULL,
  base_amount        INTEGER     NOT NULL,               -- paise, the sticker price
  discount_percent   INTEGER     NOT NULL DEFAULT 0 CHECK (discount_percent BETWEEN 0 AND 100),
  label              TEXT,                                -- promo overlay, e.g. "Friday Special"
  description        TEXT,                                -- e.g. "Ends Sunday midnight"
  active             BOOLEAN     NOT NULL DEFAULT TRUE,
  discount_starts_at TIMESTAMPTZ,                          -- null = no start bound
  discount_ends_at   TIMESTAMPTZ,                          -- null = no end bound
  updated_at         TIMESTAMPTZ DEFAULT NOW(),
  updated_by         UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  UNIQUE (duration, scope)
);

ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read active plans" ON public.pricing_plans;
CREATE POLICY "Anyone can read active plans"
  ON public.pricing_plans FOR SELECT
  USING (active);

DROP POLICY IF EXISTS "Admins can manage plans" ON public.pricing_plans;
CREATE POLICY "Admins can manage plans"
  ON public.pricing_plans FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Keep updated_at current on every admin edit.
CREATE OR REPLACE FUNCTION public.touch_pricing_plans_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS touch_pricing_plans ON public.pricing_plans;
CREATE TRIGGER touch_pricing_plans
  BEFORE UPDATE ON public.pricing_plans
  FOR EACH ROW EXECUTE FUNCTION public.touch_pricing_plans_updated_at();

-- Seed the 9 combos at the agreed prices/names, no discount.
INSERT INTO public.pricing_plans (duration, scope, track_name, tier_name, base_amount) VALUES
  ('3mo', 'written','Passage',   'Launch',   49900),
  ('6mo', 'written','Passage',   'Mariner',  79900),
  ('12mo','written','Passage',   'Master',  129900),
  ('3mo', 'oral',   'Voyage',    'Launch',   69900),
  ('6mo', 'oral',   'Voyage',    'Mariner',  89900),
  ('12mo','oral',   'Voyage',    'Master',  149900),
  ('3mo', 'both',   'Expedition','Launch',   99900),
  ('6mo', 'both',   'Expedition','Mariner', 149900),
  ('12mo','both',   'Expedition','Master',  269900)
ON CONFLICT (duration, scope) DO NOTHING;

-- ── 6. Verify ───────────────────────────────────────────────────────────
SELECT subscription_plan, plan_scope, count(*) FROM public.profiles GROUP BY 1,2 ORDER BY 1;
SELECT duration, scope, track_name, tier_name, base_amount, discount_percent, active FROM public.pricing_plans ORDER BY scope, duration;

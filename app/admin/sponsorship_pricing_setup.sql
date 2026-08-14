-- ═══════════════════════════════════════════════════════════════════════════
--  Sponsorship becomes a sellable course.
--
--  Until now Sponsorship was free to anyone with an account, and its content
--  was plaintext in a public repo, so a paywall would have meant nothing. The
--  encryption work on 14 Aug 2026 changed that: get-sponsorship-key is now the
--  single choke point deciding who may read the course. This file gives that
--  function something to check.
--
--  NOTHING HERE MAKES ANYTHING BUYABLE. Two independent locks:
--
--    1. course_config.sponsorship_paid defaults FALSE, so the key function
--       keeps handing the key to every logged-in user exactly as it does now.
--    2. All three pricing_plans rows ship active = FALSE.
--
--  Both must be changed by hand, in the admin console, and that is deliberate:
--  32 of the 64 Sponsorship topics are still notesReady:false. Aptitude is 6
--  of 34 written and Interview Prep is 0 of 4. Selling that today would be
--  selling stubs.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. The expiry columns ─────────────────────────────────────────────────
-- Sponsorship gets its OWN pair, exactly like Written and Oral, for the
-- reason per_scope_expiry_setup.sql records: one shared slot cannot express
-- "Sponsorship until March, Oral until December", so a second purchase
-- silently destroys the first.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS sponsorship_expires_at         TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS granted_sponsorship_expires_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.sponsorship_expires_at IS
  'When paid Sponsorship access ends. Grants and payments combined. Read by '
  'deriveAccess; never write it from the client.';

COMMENT ON COLUMN public.profiles.granted_sponsorship_expires_at IS
  'Sponsorship time given rather than bought (comp coupon or admin grant). '
  'The ledger a refund rebuilds on top of, so refunding a purchase cannot '
  'destroy a grant.';

-- NOT added to the protect_privileged_fields allowlist, and that is the
-- point. The guard is an ALLOWLIST: anything unlisted is reverted to the
-- stored value, so these are protected by doing nothing. Stated explicitly
-- because the opposite mistake has already been made once here -
-- sponsorship_progress WAS meant to be user-writable and was left out, so
-- every write was silently discarded for a week. These two are the reverse
-- case: leaving them out is correct. Adding them would let any signed-in
-- user grant themselves the course.


-- ── 2. Let 'sponsorship' through the six CHECK constraints ────────────────
-- Drop-then-add because Postgres has no ADD CONSTRAINT IF NOT EXISTS. Same
-- shape pricing_v2_setup.sql uses.
--
-- 'both' is NOT redefined. It still means written + oral. Every historical
-- payments and coupons row says 'both', and those rows must keep meaning what
-- the customer was actually sold. An everything-bundle would be a NEW value.
ALTER TABLE public.profiles       DROP CONSTRAINT IF EXISTS profiles_plan_scope_check;
ALTER TABLE public.profiles       ADD  CONSTRAINT profiles_plan_scope_check
  CHECK (plan_scope IS NULL OR plan_scope IN ('written','oral','both','sponsorship'));

ALTER TABLE public.payments       DROP CONSTRAINT IF EXISTS payments_scope_check;
ALTER TABLE public.payments       ADD  CONSTRAINT payments_scope_check
  CHECK (scope IN ('written','oral','both','sponsorship'));

ALTER TABLE public.pricing_plans  DROP CONSTRAINT IF EXISTS pricing_plans_scope_check;
ALTER TABLE public.pricing_plans  ADD  CONSTRAINT pricing_plans_scope_check
  CHECK (scope IN ('written','oral','both','sponsorship'));

ALTER TABLE public.coupons        DROP CONSTRAINT IF EXISTS coupons_scope_check;
ALTER TABLE public.coupons        ADD  CONSTRAINT coupons_scope_check
  CHECK (scope IN ('written','oral','both','sponsorship'));

ALTER TABLE public.coupons        DROP CONSTRAINT IF EXISTS coupons_applies_scope_check;
ALTER TABLE public.coupons        ADD  CONSTRAINT coupons_applies_scope_check
  CHECK (applies_scope IS NULL OR applies_scope IN ('written','oral','both','sponsorship'));

-- pricing_plans UNIQUE (duration, scope) needs no change: it already permits
-- a fourth scope, and is what stops a duplicate Sponsorship 3mo row.


-- ── 3. The three price rows, switched off ─────────────────────────────────
-- Sponsorship is ONE product. It has no Written/Oral split and no bundle, so
-- it is a single row of three durations rather than a 3x3 block.
--
-- Seeded at 1200 / 1900 / 3000 rupees (stored in paise). These are starting
-- values: prices are edited in the admin Plans tab without a deploy, which is
-- the whole reason that editor exists.
--
-- ON CONFLICT DO NOTHING so re-running never overwrites a price Blesson has
-- since changed. That is the important half of this statement.
INSERT INTO public.pricing_plans
  (duration, scope, track_name, tier_name, base_amount, active, description)
VALUES
  ('3mo',  'sponsorship', 'Sponsorship', '3 Months',   120000, false,
   'Company sponsorship and selection preparation'),
  ('6mo',  'sponsorship', 'Sponsorship', '6 Months',   190000, false,
   'Company sponsorship and selection preparation'),
  ('12mo', 'sponsorship', 'Sponsorship', '12 Months',  300000, false,
   'Company sponsorship and selection preparation')
ON CONFLICT (duration, scope) DO NOTHING;


-- ── 4. The switch ─────────────────────────────────────────────────────────
-- One row, on the referral_config pattern. get-sponsorship-key reads this to
-- decide whether to check entitlement or keep serving everyone.
--
-- A flag rather than "are there active sponsorship plans?" because those are
-- two different questions. Blesson may want the prices visible and editable
-- while the course is still free, and inferring the gate from the price rows
-- would turn saving a price into switching on a paywall.
CREATE TABLE IF NOT EXISTS public.course_config (
  id                BOOLEAN PRIMARY KEY DEFAULT true CHECK (id),   -- exactly one row
  sponsorship_paid  BOOLEAN NOT NULL DEFAULT false,
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by        UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

INSERT INTO public.course_config (id) VALUES (true) ON CONFLICT (id) DO NOTHING;

COMMENT ON COLUMN public.course_config.sponsorship_paid IS
  'FALSE = Sponsorship is free to any signed-in user (the state it shipped '
  'in). TRUE = it requires a purchase. Read server-side by '
  'get-sponsorship-key. Flipping this is a product decision, not a deploy.';

ALTER TABLE public.course_config ENABLE ROW LEVEL SECURITY;

-- Readable by any signed-in user: the client needs it to decide whether to
-- draw a padlock. It is NOT the gate. The gate is the key function, which
-- reads this table itself and never trusts what the browser thinks.
DROP POLICY IF EXISTS course_config_read ON public.course_config;
CREATE POLICY course_config_read ON public.course_config
  FOR SELECT TO authenticated USING (true);

-- Only admins may change it. No INSERT or DELETE policy at all, so the single
-- row cannot be removed or duplicated by anyone but the service role.
DROP POLICY IF EXISTS course_config_admin_write ON public.course_config;
CREATE POLICY course_config_admin_write ON public.course_config
  FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());


-- ── Verification ──────────────────────────────────────────────────────────
-- Expect: 2 new columns, 5 constraints listing sponsorship, 3 inactive
-- sponsorship plans, and sponsorship_paid = false.
--
--   SELECT count(*) FROM information_schema.columns
--    WHERE table_name='profiles'
--      AND column_name IN ('sponsorship_expires_at','granted_sponsorship_expires_at');
--
--   SELECT duration, base_amount/100 AS rupees, active
--     FROM public.pricing_plans WHERE scope='sponsorship' ORDER BY base_amount;
--
--   SELECT sponsorship_paid FROM public.course_config;
--
-- And the one that matters most, run BEFORE and AFTER, expecting no change:
--
--   SELECT id, written_expires_at, oral_expires_at FROM public.profiles
--    WHERE written_expires_at > now() OR oral_expires_at > now() ORDER BY id;

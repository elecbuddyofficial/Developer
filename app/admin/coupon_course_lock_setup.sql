-- ============================================================
--  Lock a coupon to ONE course.
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  WHY
--
--  A coupon could name a scope (Written, Oral, Full COC, Sponsorship) or name
--  nothing at all. Naming nothing meant "any plan", and "any plan" has quietly
--  meant "both courses" ever since Sponsorship went on sale. There was no way
--  to say "this code is for the Sponsorship course" without also pinning it to
--  a single duration-and-scope row.
--
--  That is not a theoretical gap. ADITH45RU and ELECTRICIAN25 were both
--  written as COC promotions, both left on "any scope", and both were
--  therefore spendable on Sponsorship at 99% off. Nobody intended it and
--  nothing on the screen said it.
--
--  The COC side could not be expressed as a scope even in principle: COC owns
--  three scopes, so "any COC plan" is not a value the applies_scope column can
--  hold. A course is a different axis from a scope, and it needed its own
--  column.
--
--  THE RULE
--
--    applies_course IS NULL  ->  both courses, exactly as before
--    'coc'                   ->  Written, Oral and Full COC only
--    'sponsorship'           ->  Sponsorship plans and mock interviews only
--
--  NULL is kept as "both" rather than being backfilled away, because changing
--  what an existing, active, partly-redeemed code does to the next person who
--  types it is not a migration, it is a surprise. New codes always carry a
--  course; the admin console sets it from whichever course tab you are in.
--
--  WHERE IT IS ENFORCED
--
--  Two places, and both are required:
--
--    coupon_reserve       the authority. Nothing is charged without it.
--    couponAppliesTo (TS) the quote. Runs in validate-coupon so the buyer is
--                         told the truth before they pay.
--
--  Enforcing in only one of them is worse than neither: the quote would offer
--  a discount the reserve then refuses, and the buyer would meet a failure at
--  the payment step with no explanation. The TypeScript copy exists solely
--  because it quotes a price without ever calling this function, and the two
--  are tested against each other by coupon_course.e2e.mjs.
--
--  GRANT CODES ARE NOT AFFECTED, and that is deliberate. A grant code is typed
--  in to receive access, not applied to a purchase, so there is no scope being
--  bought for it to disagree with. Its course is already fully determined by
--  the scope it grants. It is backfilled below only so the admin console can
--  file it under the right tab.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   see the block at the foot of this file.
-- ============================================================

-- ── 1. The column ────────────────────────────────────────────
ALTER TABLE public.coupons
  ADD COLUMN IF NOT EXISTS applies_course TEXT;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'coupons_applies_course_check'
  ) THEN
    ALTER TABLE public.coupons
      ADD CONSTRAINT coupons_applies_course_check
      CHECK (applies_course IS NULL OR applies_course IN ('coc', 'sponsorship'));
  END IF;
END $$;

COMMENT ON COLUMN public.coupons.applies_course IS
  'Which course this code may be spent on. NULL means both, which is what every code written before this column existed meant.';

-- ── 2. Which course is a purchase in? ────────────────────────
--
-- One definition, called by coupon_reserve and mirrored in TypeScript. A
-- purchase is identified by the scope being bought, except for an interview,
-- which has no scope and is a Sponsorship product.
--
-- Anything unrecognised answers 'coc', because every scope that existed before
-- Sponsorship was a COC scope and a NULL scope has always been read as 'both'
-- by razorpay-webhook. Answering NULL here instead would make the comparison
-- below vacuously pass and silently disable the whole lock.
CREATE OR REPLACE FUNCTION public.coupon_course_of(p_scope text, p_product text)
RETURNS text
LANGUAGE sql
IMMUTABLE
SET search_path TO 'public'
AS $function$
  SELECT CASE
    WHEN COALESCE(p_product, 'course') = 'interview' THEN 'sponsorship'
    WHEN p_scope = 'sponsorship'                     THEN 'sponsorship'
    ELSE 'coc'
  END;
$function$;

COMMENT ON FUNCTION public.coupon_course_of(text, text) IS
  'Which course a purchase belongs to. Mirrored by courseOfPurchase() in supabase/functions/_shared/coupons.ts; the two are tested against each other.';

-- ── 3. Backfill, conservatively ──────────────────────────────
--
-- Only where the intent is already unambiguous from the row itself. Anything
-- that genuinely said "any plan" keeps saying it.
UPDATE public.coupons SET applies_course = 'sponsorship'
 WHERE applies_course IS NULL
   AND (applies_scope = 'sponsorship' OR applies_product = 'interview');

UPDATE public.coupons SET applies_course = 'coc'
 WHERE applies_course IS NULL
   AND applies_scope IN ('written', 'oral', 'both');

-- Grant codes: filed by what they grant, so they appear under the right tab.
UPDATE public.coupons SET applies_course = 'sponsorship'
 WHERE applies_course IS NULL AND kind = 'grant' AND scope = 'sponsorship';

UPDATE public.coupons SET applies_course = 'coc'
 WHERE applies_course IS NULL AND kind = 'grant' AND scope IN ('written', 'oral', 'both');

-- ── 3a. The admin list reads a VIEW, not the table ───────────
--
-- coupon_usage names its columns explicitly, so adding a column to coupons
-- does NOT make it visible to the admin console. Without this the console
-- would fall back to guessing each code's course from its scope, the new
-- column would be invisible, and nothing would report an error: the list would
-- simply keep behaving as it did. That silence is the whole reason this block
-- exists.
--
-- CREATE OR REPLACE VIEW can only append columns, never reorder or retype
-- them, so applies_course goes last after applies_product.
CREATE OR REPLACE VIEW public.coupon_usage AS
 SELECT c.code,
    c.kind,
    c.discount_value,
    c.plan,
    c.scope,
    c.months,
    c.applies_duration,
    c.applies_scope,
    c.min_amount,
    c.max_redemptions,
    c.expires_at,
    c.active,
    c.note,
    c.created_at,
    count(r.*) FILTER (WHERE r.status = 'committed'::text) AS committed,
    count(r.*) FILTER (WHERE r.status = 'reserved'::text AND r.reserved_until > now()) AS reserved,
    count(r.*) FILTER (WHERE r.status = 'refunded'::text) AS refunded,
    count(r.*) FILTER (WHERE r.status = 'committed'::text OR r.status = 'reserved'::text AND r.reserved_until > now()) AS live_used,
    count(r.*) FILTER (WHERE r.status = 'committed'::text OR r.status = 'reserved'::text AND r.reserved_until > now()) > COALESCE(c.max_redemptions, 1) AS over_redeemed,
    c.disposable,
    c.applies_product,
    c.applies_course
   FROM coupons c
     LEFT JOIN coupon_redemptions r ON r.code = c.code
  GROUP BY c.code;

-- ── 4. The authority ─────────────────────────────────────────
--
-- Identical to the live body except for the one block marked below. Replaced
-- whole rather than patched, because this function decides whether money
-- changes hands and a half-applied edit to it is not something to risk.
CREATE OR REPLACE FUNCTION public.coupon_reserve(
  p_code text, p_user uuid, p_duration text, p_scope text,
  p_amount integer, p_ttl_minutes integer, p_product text DEFAULT 'course'::text)
RETURNS coupons
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  c       public.coupons;
  mine    TEXT;
  in_use  INTEGER;
BEGIN
  SELECT * INTO c FROM public.coupons WHERE code = p_code FOR UPDATE;

  -- Deliberately one vague message for every "no" below. Distinguishing
  -- "no such code" from "already spent" would let someone probe for valid
  -- codes, and a code that carries money is worth probing for.
  IF c.code IS NULL OR NOT c.active THEN
    RAISE EXCEPTION 'coupon_invalid' USING ERRCODE = 'P0001';
  END IF;
  IF c.expires_at IS NOT NULL AND c.expires_at < NOW() THEN
    RAISE EXCEPTION 'coupon_invalid' USING ERRCODE = 'P0001';
  END IF;

  -- The product gate. COALESCE on both sides because NULL means course, so a
  -- code written before applies_product existed still behaves as a course
  -- code and a general course code cannot be spent on an interview.
  IF COALESCE(c.applies_product, 'course') IS DISTINCT FROM COALESCE(p_product, 'course') THEN
    RAISE EXCEPTION 'coupon_invalid' USING ERRCODE = 'P0001';
  END IF;

  -- ── THE COURSE GATE (new) ──────────────────────────────────
  -- NULL still means both courses, so every pre-existing code behaves exactly
  -- as it did. A code that names a course cannot be spent outside it.
  IF c.applies_course IS NOT NULL
     AND c.applies_course IS DISTINCT FROM public.coupon_course_of(p_scope, p_product) THEN
    RAISE EXCEPTION 'coupon_invalid' USING ERRCODE = 'P0001';
  END IF;
  -- ───────────────────────────────────────────────────────────

  IF c.applies_duration IS NOT NULL AND c.applies_duration IS DISTINCT FROM p_duration THEN
    RAISE EXCEPTION 'coupon_invalid' USING ERRCODE = 'P0001';
  END IF;
  IF c.applies_scope IS NOT NULL AND c.applies_scope IS DISTINCT FROM p_scope THEN
    RAISE EXCEPTION 'coupon_invalid' USING ERRCODE = 'P0001';
  END IF;
  IF c.min_amount IS NOT NULL AND p_amount < c.min_amount THEN
    RAISE EXCEPTION 'coupon_below_minimum' USING ERRCODE = 'P0001';
  END IF;

  -- Has this buyer already spent it? 'refunded' still blocks: the slot went
  -- back to the pool, but they do not get a second go.
  SELECT status INTO mine
    FROM public.coupon_redemptions
   WHERE code = p_code AND user_id = p_user;

  IF mine IN ('committed','refunded') THEN
    RAISE EXCEPTION 'coupon_already_used' USING ERRCODE = 'P0001';
  END IF;

  -- Slots held by OTHER buyers. Excluding this buyer matters: re-quoting the
  -- same code after switching plan must refresh their own reservation, not
  -- collide with it. Counting their own row here would make a one-slot code
  -- reject the very person already holding it.
  in_use := public.coupon_live_count(p_code, p_user);
  IF in_use >= COALESCE(c.max_redemptions, 1) THEN
    RAISE EXCEPTION 'coupon_exhausted' USING ERRCODE = 'P0001';
  END IF;

  INSERT INTO public.coupon_redemptions (code, user_id, status, reserved_until)
  VALUES (p_code, p_user, 'reserved', NOW() + make_interval(mins => p_ttl_minutes))
  ON CONFLICT (code, user_id) DO UPDATE
     SET status         = 'reserved',
         reserved_until = EXCLUDED.reserved_until
   WHERE public.coupon_redemptions.status IN ('reserved','released');

  -- Display counter only. Never read for a decision - coupon_live_count is
  -- the source of truth - so it can never drift into over- or under-granting.
  UPDATE public.coupons
     SET times_redeemed = public.coupon_live_count(p_code, NULL)
   WHERE code = p_code;

  RETURN c;
END;
$function$;

-- ============================================================
--  Verify
-- ============================================================
-- Expect every code to be filed, except any that genuinely means "both".
-- SELECT code, kind, scope, applies_scope, applies_product, applies_course
--   FROM public.coupons ORDER BY applies_course NULLS FIRST, code;
--
-- Expect: sponsorship, coc, coc, sponsorship
-- SELECT public.coupon_course_of('sponsorship', 'course'),
--        public.coupon_course_of('both',        'course'),
--        public.coupon_course_of(NULL,          'course'),
--        public.coupon_course_of(NULL,          'interview');

-- ============================================================
--  UNDO
-- ============================================================
-- Removing the gate is enough to restore the old behaviour; the column can
-- stay, because a NULL applies_course was always "both" and a populated one
-- becomes inert the moment the gate is gone.
--
--   Re-run this file with the THE COURSE GATE block deleted.
--
-- To remove it completely as well:
--   ALTER TABLE public.coupons DROP CONSTRAINT IF EXISTS coupons_applies_course_check;
--   ALTER TABLE public.coupons DROP COLUMN IF EXISTS applies_course;
--   DROP FUNCTION IF EXISTS public.coupon_course_of(text, text);

-- ── Discount codes at checkout ──────────────────────────────────────────────
-- Run once in the Supabase SQL Editor. Safe to re-run (ADD COLUMN IF NOT
-- EXISTS, DROP+ADD CONSTRAINT, CREATE OR REPLACE throughout).
--
-- RUN ORDER: this is the last script. It requires, in this order:
--   payments_setup.sql      -> public.payments
--   payments_v2_setup.sql   -> public.coupons, public.coupon_redemptions
--   pricing_v2_setup.sql    -> the 3mo/6mo/12mo + written/oral/both vocabulary
--                              that applies_duration / applies_scope validate against
-- Running it on a database missing any of those fails loudly on a missing
-- relation rather than half-applying.
--
-- Until now a coupon was all-or-nothing: redeem-coupon granted a plan outright
-- and Razorpay never ran. This adds codes that REDUCE the price of a purchase
-- that still goes through Razorpay, without disturbing the existing grant
-- coupons - every new column defaults to exactly what today's rows already
-- mean, so nothing in flight changes behaviour.
--
-- Two rules are load-bearing and are enforced here rather than in application
-- code, because both edge functions and the admin panel write these tables:
--
--   1. Reservation is serialised with SELECT ... FOR UPDATE, so a limited code
--      cannot be oversold by concurrent buyers.
--   2. Settlement is a TRIGGER on payments.status, not a code path. A payment
--      becomes real in two independent places (verify-razorpay-payment from
--      the browser, razorpay-webhook from Razorpay), each guarded by its own
--      compare-and-swap. Duplicating the commit in both is exactly the kind of
--      drift that caused the scope-overwrite bug this codebase already fixed.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. Coupons: what kind of code is this? ────────────────────────────────
-- 'grant' is the default so every existing row keeps meaning what it means
-- today: free access, no payment.
ALTER TABLE public.coupons ADD COLUMN IF NOT EXISTS kind TEXT NOT NULL DEFAULT 'grant';
ALTER TABLE public.coupons ADD COLUMN IF NOT EXISTS discount_value   INTEGER;
ALTER TABLE public.coupons ADD COLUMN IF NOT EXISTS applies_duration TEXT;
ALTER TABLE public.coupons ADD COLUMN IF NOT EXISTS applies_scope    TEXT;
ALTER TABLE public.coupons ADD COLUMN IF NOT EXISTS min_amount       INTEGER;

ALTER TABLE public.coupons DROP CONSTRAINT IF EXISTS coupons_kind_check;
ALTER TABLE public.coupons ADD CONSTRAINT coupons_kind_check
  CHECK (kind IN ('grant','percent','fixed'));

-- A discount decides what you PAY, not what you GET, so plan/months are
-- meaningless for it. They stay required for 'grant'.
ALTER TABLE public.coupons ALTER COLUMN plan DROP NOT NULL;

ALTER TABLE public.coupons DROP CONSTRAINT IF EXISTS coupons_kind_shape_check;
ALTER TABLE public.coupons ADD CONSTRAINT coupons_kind_shape_check CHECK (
  (kind = 'grant'   AND plan IS NOT NULL AND discount_value IS NULL)
  OR (kind = 'percent' AND discount_value BETWEEN 1 AND 100)
  OR (kind = 'fixed'   AND discount_value > 0)
);

ALTER TABLE public.coupons DROP CONSTRAINT IF EXISTS coupons_applies_duration_check;
ALTER TABLE public.coupons ADD CONSTRAINT coupons_applies_duration_check
  CHECK (applies_duration IS NULL OR applies_duration IN ('3mo','6mo','12mo'));

ALTER TABLE public.coupons DROP CONSTRAINT IF EXISTS coupons_applies_scope_check;
ALTER TABLE public.coupons ADD CONSTRAINT coupons_applies_scope_check
  CHECK (applies_scope IS NULL OR applies_scope IN ('written','oral','both'));

-- ── 2. Redemptions gain a lifecycle ───────────────────────────────────────
-- Defaulting to 'committed' is what keeps every existing grant redemption
-- counting exactly as it does today.
ALTER TABLE public.coupon_redemptions
  ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'committed';
ALTER TABLE public.coupon_redemptions ADD COLUMN IF NOT EXISTS payment_id UUID;
ALTER TABLE public.coupon_redemptions ADD COLUMN IF NOT EXISTS reserved_until  TIMESTAMPTZ;
ALTER TABLE public.coupon_redemptions ADD COLUMN IF NOT EXISTS discount_amount INTEGER;

ALTER TABLE public.coupon_redemptions DROP CONSTRAINT IF EXISTS coupon_redemptions_status_check;
ALTER TABLE public.coupon_redemptions ADD CONSTRAINT coupon_redemptions_status_check
  CHECK (status IN ('reserved','committed','released','refunded'));

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'coupon_redemptions_payment_id_fkey'
  ) THEN
    ALTER TABLE public.coupon_redemptions
      ADD CONSTRAINT coupon_redemptions_payment_id_fkey
      FOREIGN KEY (payment_id) REFERENCES public.payments(id) ON DELETE SET NULL;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS coupon_redemptions_code_status_idx
  ON public.coupon_redemptions (code, status);

-- ── 3. Payments record what was actually charged ──────────────────────────
-- payments.amount keeps meaning "what the buyer was charged". These two are
-- additive, so existing revenue queries are unaffected.
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS coupon_code     TEXT;
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS original_amount INTEGER;
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS discount_amount INTEGER;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'payments_coupon_code_fkey'
  ) THEN
    ALTER TABLE public.payments
      ADD CONSTRAINT payments_coupon_code_fkey
      FOREIGN KEY (coupon_code) REFERENCES public.coupons(code) ON DELETE SET NULL;
  END IF;
END $$;

-- ── 4. How many redemptions of a code are live right now ──────────────────
-- "Live" = committed, or reserved and not yet timed out. A released or
-- expired-reserved row does not hold a slot. A refunded row does not either:
-- Blesson's rule is that a refund returns the slot to the pool but still
-- blocks that buyer from redeeming again, so it stops counting here while
-- continuing to block in coupon_reserve below.
CREATE OR REPLACE FUNCTION public.coupon_live_count(p_code TEXT, p_exclude_user UUID DEFAULT NULL)
RETURNS INTEGER AS $$
  SELECT COUNT(*)::INTEGER
    FROM public.coupon_redemptions r
   WHERE r.code = p_code
     AND (p_exclude_user IS NULL OR r.user_id IS DISTINCT FROM p_exclude_user)
     AND ( r.status = 'committed'
        OR (r.status = 'reserved' AND r.reserved_until > NOW()) );
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- ── 5. Reserve a slot ─────────────────────────────────────────────────────
-- Returns the coupon row on success; raises with a caller-safe message on
-- failure. The FOR UPDATE on the coupon row is what makes this safe: every
-- concurrent claim on the same code queues behind it, so a code with one slot
-- can only ever hand out one reservation.
CREATE OR REPLACE FUNCTION public.coupon_reserve(
  p_code        TEXT,
  p_user        UUID,
  p_duration    TEXT,
  p_scope       TEXT,
  p_amount      INTEGER,          -- price the buyer would otherwise pay, in paise
  p_ttl_minutes INTEGER DEFAULT 30
)
RETURNS public.coupons AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- ── 6. Release a reservation the caller could not use ─────────────────────
-- Best-effort tidy for the case where Razorpay refuses the order after we
-- reserved. Not the guarantee: reserved_until is, because a crashed isolate
-- never runs its catch block.
CREATE OR REPLACE FUNCTION public.coupon_release(p_code TEXT, p_user UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.coupon_redemptions
     SET status = 'released', reserved_until = NULL
   WHERE code = p_code AND user_id = p_user AND status = 'reserved';

  UPDATE public.coupons
     SET times_redeemed = public.coupon_live_count(p_code, NULL)
   WHERE code = p_code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- ── 7. Settlement follows the payment, automatically ──────────────────────
-- The payments row is the source of truth and the coupon ledger follows it.
-- Whichever of verify-razorpay-payment / razorpay-webhook wins the existing
-- compare-and-swap on payments.status also settles the coupon, exactly once,
-- and admin refunds are covered for free.
CREATE OR REPLACE FUNCTION public.coupon_settle_from_payment()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.coupon_code IS NULL OR NEW.user_id IS NULL THEN RETURN NEW; END IF;
  IF NEW.status IS NOT DISTINCT FROM OLD.status THEN RETURN NEW; END IF;

  IF NEW.status = 'paid' THEN
    -- Note there is no reserved_until check here, deliberately. If the money
    -- settled after the reservation lapsed we honour it: refusing to record a
    -- payment we already took would be far worse than briefly exceeding
    -- max_redemptions, which the admin list surfaces as "over-redeemed".
    -- Upsert rather than update, so a lost reservation still lands in the
    -- ledger instead of leaving the payment silently unaccounted.
    INSERT INTO public.coupon_redemptions
      (code, user_id, status, payment_id, discount_amount, reserved_until)
    VALUES
      (NEW.coupon_code, NEW.user_id, 'committed', NEW.id, NEW.discount_amount, NULL)
    ON CONFLICT (code, user_id) DO UPDATE
       SET status          = 'committed',
           payment_id      = EXCLUDED.payment_id,
           discount_amount = EXCLUDED.discount_amount,
           reserved_until  = NULL
     WHERE public.coupon_redemptions.status <> 'refunded';

  ELSIF NEW.status = 'failed' THEN
    UPDATE public.coupon_redemptions
       SET status = 'released', reserved_until = NULL
     WHERE code = NEW.coupon_code AND user_id = NEW.user_id AND status = 'reserved';

  ELSIF NEW.status = 'refunded' THEN
    UPDATE public.coupon_redemptions
       SET status = 'refunded', reserved_until = NULL
     WHERE code = NEW.coupon_code AND user_id = NEW.user_id;
  END IF;

  UPDATE public.coupons
     SET times_redeemed = public.coupon_live_count(NEW.coupon_code, NULL)
   WHERE code = NEW.coupon_code;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS settle_coupon_on_payment ON public.payments;
CREATE TRIGGER settle_coupon_on_payment
  AFTER UPDATE OF status ON public.payments
  FOR EACH ROW EXECUTE FUNCTION public.coupon_settle_from_payment();

-- ── 8. Lock the functions down ────────────────────────────────────────────
-- SECURITY DEFINER means these run as the owner, so they must not be reachable
-- from a browser session. The edge functions use the service role, which is
-- unaffected by these REVOKEs.
REVOKE ALL ON FUNCTION public.coupon_reserve(TEXT, UUID, TEXT, TEXT, INTEGER, INTEGER) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.coupon_release(TEXT, UUID)                               FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.coupon_live_count(TEXT, UUID)                            FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.coupon_settle_from_payment()                             FROM PUBLIC, anon, authenticated;

-- ── 8b. Rate limiting for code guessing ───────────────────────────────────
-- A grant code was only worth free access to someone who already had an
-- account; a discount code is worth money on every purchase, which makes
-- guessing worth attempting. There is no rate limiting anywhere else in this
-- codebase, so this is new ground rather than a pattern to copy.
--
-- Only failures are counted. A buyer legitimately re-quoting the same working
-- code while comparing plans must never lock themselves out.
CREATE TABLE IF NOT EXISTS public.coupon_attempts (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      UUID        REFERENCES auth.users(id) ON DELETE CASCADE,
  code         TEXT,
  succeeded    BOOLEAN     NOT NULL DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS coupon_attempts_user_time_idx
  ON public.coupon_attempts (user_id, attempted_at DESC);

-- No policies at all: RLS on with nothing granted means only the service role
-- can read or write this. Nobody needs to see their own failure history.
ALTER TABLE public.coupon_attempts ENABLE ROW LEVEL SECURITY;

-- TRUE while the user is under the limit. Ten wrong guesses in ten minutes is
-- far beyond normal mistyping and nowhere near enough to brute-force a code.
CREATE OR REPLACE FUNCTION public.coupon_attempt_allowed(p_user UUID, p_max INTEGER DEFAULT 10)
RETURNS BOOLEAN AS $$
  SELECT COUNT(*) < p_max
    FROM public.coupon_attempts
   WHERE user_id = p_user
     AND NOT succeeded
     AND attempted_at > NOW() - INTERVAL '10 minutes';
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

REVOKE ALL ON FUNCTION public.coupon_attempt_allowed(UUID, INTEGER) FROM PUBLIC, anon, authenticated;

-- ── 8c. Editing and deleting a coupon safely ──────────────────────────────
-- Deleting a coupon that has been used is destructive in a way that is not
-- obvious from the admin panel: coupon_redemptions.code CASCADES, so the
-- redemption history disappears, and payments.coupon_code is SET NULL, so a
-- real payment silently forgets why it was discounted. A ₹374 charge against
-- a ₹499 plan with nothing recording the reason is an accounting problem, not
-- a tidy-up.
--
-- Changing a coupon's TERMS after someone has used it is a milder version of
-- the same thing. It claws nothing back (each payment stores its own
-- discount_amount), but the code then says one thing while a real buyer got
-- another, which is a support problem. Stripe treats coupons as immutable
-- once used for exactly this reason.
--
-- So: limit, expiry, note and active stay editable forever. Terms freeze on
-- first use. Deletion is allowed only while the code has no history at all.
-- Enforced here rather than in the admin panel, because the panel is not the
-- only way to reach these tables.

CREATE OR REPLACE FUNCTION public.coupon_freeze_terms_once_used()
RETURNS TRIGGER AS $$
DECLARE
  used INTEGER;
BEGIN
  IF (NEW.kind, NEW.discount_value, NEW.plan, NEW.scope, NEW.months,
      NEW.applies_duration, NEW.applies_scope, NEW.min_amount)
     IS NOT DISTINCT FROM
     (OLD.kind, OLD.discount_value, OLD.plan, OLD.scope, OLD.months,
      OLD.applies_duration, OLD.applies_scope, OLD.min_amount) THEN
    RETURN NEW;   -- only limit / expiry / note / active changed
  END IF;

  SELECT COUNT(*) INTO used
    FROM public.coupon_redemptions r
   WHERE r.code = OLD.code AND r.status IN ('committed','refunded');

  IF used > 0 THEN
    RAISE EXCEPTION 'coupon_terms_locked' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS freeze_coupon_terms ON public.coupons;
CREATE TRIGGER freeze_coupon_terms
  BEFORE UPDATE ON public.coupons
  FOR EACH ROW EXECUTE FUNCTION public.coupon_freeze_terms_once_used();

-- Deletes only an untouched code. Anything with a redemption row or a payment
-- pointing at it is refused, so the audit trail cannot be removed by accident.
CREATE OR REPLACE FUNCTION public.coupon_delete_if_unused(p_code TEXT)
RETURNS VOID AS $$
DECLARE
  n INTEGER;
BEGIN
  SELECT COUNT(*) INTO n FROM public.coupon_redemptions WHERE code = p_code;
  IF n > 0 THEN RAISE EXCEPTION 'coupon_has_history' USING ERRCODE = 'P0001'; END IF;

  SELECT COUNT(*) INTO n FROM public.payments WHERE coupon_code = p_code;
  IF n > 0 THEN RAISE EXCEPTION 'coupon_has_history' USING ERRCODE = 'P0001'; END IF;

  DELETE FROM public.coupons WHERE code = p_code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Admins call this from the panel, so unlike the reservation functions it is
-- reachable by a signed-in session. The is_admin() check inside the RLS policy
-- on coupons no longer applies to a SECURITY DEFINER function, so gate it here.
CREATE OR REPLACE FUNCTION public.admin_delete_coupon(p_code TEXT)
RETURNS VOID AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not_admin' USING ERRCODE = 'P0001';
  END IF;
  PERFORM public.coupon_delete_if_unused(p_code);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

REVOKE ALL ON FUNCTION public.coupon_delete_if_unused(TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.coupon_freeze_terms_once_used() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.admin_delete_coupon(TEXT) TO authenticated;

-- ── 9. Admin reporting view ───────────────────────────────────────────────
-- One row per code with the numbers the admin list needs, including the
-- over-redeemed flag from the honour-the-payment rule above.
-- The counting is inlined rather than calling coupon_live_count, deliberately.
-- This view is security_invoker so the existing admin RLS policies on coupons
-- and coupon_redemptions govern who can read it; but that also means it
-- executes as the admin's own role, which section 8 just revoked EXECUTE from.
-- Calling the function here would fail with permission denied for every admin.
-- DROP first, not CREATE OR REPLACE: replacing a view cannot change a column's
-- data type, so any future edit that turns an integer column into a bigint (as
-- swapping a function call for COUNT(*) does) would fail on re-run and silently
-- leave the previous definition in place.
DROP VIEW IF EXISTS public.coupon_usage;
CREATE VIEW public.coupon_usage AS
  SELECT c.code, c.kind, c.discount_value, c.plan, c.scope, c.months,
         c.applies_duration, c.applies_scope, c.min_amount,
         c.max_redemptions, c.expires_at, c.active, c.note, c.created_at,
         COUNT(r.*) FILTER (WHERE r.status = 'committed')                             AS committed,
         COUNT(r.*) FILTER (WHERE r.status = 'reserved' AND r.reserved_until > NOW()) AS reserved,
         COUNT(r.*) FILTER (WHERE r.status = 'refunded')                              AS refunded,
         COUNT(r.*) FILTER (WHERE r.status = 'committed'
                               OR (r.status = 'reserved' AND r.reserved_until > NOW())) AS live_used,
         COUNT(r.*) FILTER (WHERE r.status = 'committed'
                               OR (r.status = 'reserved' AND r.reserved_until > NOW()))
           > COALESCE(c.max_redemptions, 1)                                           AS over_redeemed
    FROM public.coupons c
    LEFT JOIN public.coupon_redemptions r ON r.code = c.code
   GROUP BY c.code;

ALTER VIEW public.coupon_usage SET (security_invoker = on);

-- ── 10. Verify ────────────────────────────────────────────────────────────
-- Existing coupons must be untouched: every pre-existing row should read
-- kind='grant' with a non-null plan, and every pre-existing redemption should
-- read status='committed'.
SELECT code, kind, plan, discount_value, max_redemptions, times_redeemed
  FROM public.coupons ORDER BY created_at;

SELECT status, COUNT(*) FROM public.coupon_redemptions GROUP BY status;

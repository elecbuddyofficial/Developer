-- ═══════════════════════════════════════════════════════════════════════════
--  Mock interview bookings.
--
--  The first thing Elec-Buddy sells that is NOT course access. A cadet picks a
--  slot, pays, and gives us enough about themselves to run the interview from.
--  The assessment goes back by email, to the address they signed up with.
--
--  WHY ITS OWN TABLES, NOT public.payments:
--
--  razorpay-webhook reads payments.plan, looks it up in PLAN_MONTHS and grants
--  that many months of course access. A booking is not months of anything.
--  Putting one in payments would need either a fake plan value or a new branch
--  inside the function that settles real course purchases, and the change
--  ledger already records what a careless edit to a shared money-path function
--  costs. So bookings live here, with their own order and verify functions.
--  The existing webhook looks an order up in payments, misses, and returns.
--
--  NOTHING HERE MAKES ANYTHING BUYABLE. mock_interview_config.is_enabled ships
--  FALSE, so applying this file changes nothing a cadet can see. The floating
--  button does not render and the order function refuses. Turning it on is a
--  deliberate act in the admin console, the same way sponsorship_pricing_setup
--  ships its plans inactive.
--
--  Re-runnable, like every other setup file here.
--
--  UNDO:  DROP TABLE public.mock_interview_bookings;
--         DROP TABLE public.mock_interview_slots;
--         DROP TABLE public.mock_interview_config;
--         DROP FUNCTION public.mock_slot_reserve(UUID,UUID,TEXT,TEXT,TEXT,TEXT,TEXT,TEXT,INTEGER,BIGINT,INTEGER);
--         DROP FUNCTION public.mock_slot_release(UUID,UUID);
--         DROP FUNCTION public.mock_expire_stale_bookings();
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. Config: one row, admin-editable ────────────────────────────────────
-- Single-row table on the referral_config / finance_config pattern: the
-- CHECK (id) makes a second row impossible, so "the settings" is always one
-- SELECT with no ordering question.
CREATE TABLE IF NOT EXISTS public.mock_interview_config (
  id               BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (id),

  -- Paise, like every other money column in this schema. One price; there is
  -- no duration or scope axis here because there is only one product.
  price_paise      BIGINT  NOT NULL DEFAULT 49900 CHECK (price_paise > 0),

  -- Ships off. See the header.
  is_enabled       BOOLEAN NOT NULL DEFAULT FALSE,

  duration_minutes INTEGER NOT NULL DEFAULT 30 CHECK (duration_minutes BETWEEN 10 AND 180),

  -- The modal pitch, editable without a deploy so the offer can be reworded
  -- without touching the Sponsorship page.
  headline         TEXT    NOT NULL DEFAULT 'Test your interview prep',
  blurb            TEXT    NOT NULL DEFAULT
    'A live mock interview with a working ETO. We assess where you actually stand, tell you which areas are costing you marks, and give you specific things to fix before the real thing.',

  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by       UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

INSERT INTO public.mock_interview_config (id) VALUES (TRUE)
  ON CONFLICT (id) DO NOTHING;


-- ── 2. Slots ──────────────────────────────────────────────────────────────
-- One cadet per slot. Capacity is not a column: it was considered and left
-- out, because a capacity of 1 is enforceable with a unique index and any
-- other number needs counting logic that can race. If group sessions ever
-- happen they are a different product, not a bigger number here.
CREATE TABLE IF NOT EXISTS public.mock_interview_slots (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- TIMESTAMPTZ, rendered in IST everywhere. A DATE plus a TEXT time would
  -- put the timezone question in the render layer, where it gets answered
  -- differently in each of the three places that render it.
  starts_at        TIMESTAMPTZ NOT NULL UNIQUE,

  duration_minutes INTEGER     NOT NULL DEFAULT 30 CHECK (duration_minutes BETWEEN 10 AND 180),
  is_active        BOOLEAN     NOT NULL DEFAULT TRUE,
  note             TEXT,                      -- admin-only, never shown to cadets
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by       UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- The cadet-facing query is always "active, future, in time order".
CREATE INDEX IF NOT EXISTS mock_interview_slots_upcoming_idx
  ON public.mock_interview_slots (starts_at)
  WHERE is_active;


-- ── 3. Bookings: the candidate sheet and the sale in one row ──────────────
CREATE TABLE IF NOT EXISTS public.mock_interview_bookings (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- RESTRICT, not CASCADE: a slot somebody paid for cannot be deleted out
  -- from under them. Deactivate instead.
  slot_id             UUID NOT NULL REFERENCES public.mock_interview_slots(id) ON DELETE RESTRICT,
  user_id             UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Copied at booking time rather than joined from auth.users on read. This
  -- is the address the assessment is sent to, so it has to survive the
  -- account being deleted, and it has to be the address that was true when
  -- they booked rather than whatever it is now.
  email               TEXT NOT NULL,

  full_name           TEXT NOT NULL,
  phone               TEXT NOT NULL,
  degree              TEXT NOT NULL,
  stream              TEXT NOT NULL,
  college             TEXT,
  graduation_year     INTEGER CHECK (graduation_year BETWEEN 1980 AND 2100),

  status              TEXT NOT NULL DEFAULT 'reserved'
                        CHECK (status IN ('reserved','paid','completed','cancelled','expired')),

  amount_paise        BIGINT NOT NULL CHECK (amount_paise > 0),
  razorpay_order_id   TEXT UNIQUE,
  razorpay_payment_id TEXT,

  -- Nullable on purpose. NULL is "not known yet", not "free", exactly as on
  -- payments. sync-razorpay-fees taught this one.
  gateway_fee_paise   INTEGER,
  gateway_tax_paise   INTEGER,
  fee_synced_at       TIMESTAMPTZ,

  -- Only meaningful while status = 'reserved'.
  reserved_until      TIMESTAMPTZ,

  paid_at             TIMESTAMPTZ,
  cancelled_at        TIMESTAMPTZ,
  admin_note          TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── THE LOAD-BEARING LINE IN THIS FILE ────────────────────────────────────
-- Two cadets cannot hold one slot. Enforced by Postgres, not by a
-- check-then-insert in application code, which loses the race by definition.
-- 'cancelled' and 'expired' are excluded so a released slot returns to the
-- pool without having to delete the history of who held it.
CREATE UNIQUE INDEX IF NOT EXISTS mock_interview_one_live_booking_per_slot
  ON public.mock_interview_bookings (slot_id)
  WHERE status IN ('reserved','paid','completed');

CREATE INDEX IF NOT EXISTS mock_interview_bookings_user_idx
  ON public.mock_interview_bookings (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS mock_interview_bookings_stale_idx
  ON public.mock_interview_bookings (reserved_until)
  WHERE status = 'reserved';


-- ── 4. Expire lapsed holds ────────────────────────────────────────────────
-- A cadet who opens checkout and closes the tab holds a slot until its TTL
-- runs out. This releases those. Called at the top of every reserve, so the
-- pool tidies itself under exactly the traffic that dirties it, with no cron
-- to forget about.
--
-- Note it only touches rows that never reached Razorpay's success callback.
-- A row that is 'paid' is never expired here no matter how old, because the
-- money moved.
CREATE OR REPLACE FUNCTION public.mock_expire_stale_bookings()
RETURNS INTEGER AS $$
DECLARE
  n INTEGER;
BEGIN
  UPDATE public.mock_interview_bookings
     SET status = 'expired'
   WHERE status = 'reserved'
     AND reserved_until IS NOT NULL
     AND reserved_until < NOW();
  GET DIAGNOSTICS n = ROW_COUNT;
  RETURN n;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;


-- ── 5. Reserve a slot ─────────────────────────────────────────────────────
-- Returns the booking row on success; raises with a caller-safe message on
-- failure. Modelled on public.coupon_reserve in coupon_discounts_setup.sql.
--
-- The FOR UPDATE on the SLOT row is what makes this safe: every concurrent
-- claim on the same slot queues behind it, so the "is anyone holding this"
-- check below cannot be answered stale. The unique index is still there as
-- the backstop, because a lock you forget to take is a lock you do not have.
CREATE OR REPLACE FUNCTION public.mock_slot_reserve(
  p_slot        UUID,
  p_user        UUID,
  p_email       TEXT,
  p_full_name   TEXT,
  p_phone       TEXT,
  p_degree      TEXT,
  p_stream      TEXT,
  p_college     TEXT,
  p_grad_year   INTEGER,
  p_amount      BIGINT,           -- paise, read from config by the caller
  p_ttl_minutes INTEGER DEFAULT 15
)
RETURNS public.mock_interview_bookings AS $$
DECLARE
  s     public.mock_interview_slots;
  b     public.mock_interview_bookings;
  taken INTEGER;
BEGIN
  IF p_user IS NULL THEN
    RAISE EXCEPTION 'slot_unavailable' USING ERRCODE = 'P0001';
  END IF;

  -- Required intake fields. Checked here as well as in the edge function and
  -- the form, because this is the last place before the row exists and the
  -- other two are not the boundary.
  IF COALESCE(BTRIM(p_email), '')     = ''
  OR COALESCE(BTRIM(p_full_name), '') = ''
  OR COALESCE(BTRIM(p_phone), '')     = ''
  OR COALESCE(BTRIM(p_degree), '')    = ''
  OR COALESCE(BTRIM(p_stream), '')    = '' THEN
    RAISE EXCEPTION 'details_incomplete' USING ERRCODE = 'P0001';
  END IF;

  PERFORM public.mock_expire_stale_bookings();

  SELECT * INTO s FROM public.mock_interview_slots WHERE id = p_slot FOR UPDATE;

  -- One message for every "no" about the slot itself. A cadet does not need
  -- to know whether a slot is inactive, past or taken; all three mean the
  -- same thing to them, and distinguishing them leaks the calendar.
  IF s.id IS NULL OR NOT s.is_active OR s.starts_at <= NOW() THEN
    RAISE EXCEPTION 'slot_unavailable' USING ERRCODE = 'P0001';
  END IF;

  SELECT COUNT(*) INTO taken
    FROM public.mock_interview_bookings
   WHERE slot_id = p_slot
     AND status IN ('reserved','paid','completed');

  IF taken > 0 THEN
    RAISE EXCEPTION 'slot_unavailable' USING ERRCODE = 'P0001';
  END IF;

  INSERT INTO public.mock_interview_bookings (
    slot_id, user_id, email, full_name, phone, degree, stream,
    college, graduation_year, status, amount_paise, reserved_until
  ) VALUES (
    p_slot, p_user, BTRIM(p_email), BTRIM(p_full_name), BTRIM(p_phone),
    BTRIM(p_degree), BTRIM(p_stream), NULLIF(BTRIM(COALESCE(p_college, '')), ''),
    p_grad_year, 'reserved', p_amount,
    NOW() + make_interval(mins => p_ttl_minutes)
  )
  RETURNING * INTO b;

  RETURN b;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;


-- ── 6. Release a hold the caller could not use ────────────────────────────
-- Best-effort tidy for the case where Razorpay refuses the order after we
-- reserved. Not the guarantee: reserved_until is, because a crashed isolate
-- never runs its catch block. Same reasoning as coupon_release.
CREATE OR REPLACE FUNCTION public.mock_slot_release(p_booking UUID, p_user UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.mock_interview_bookings
     SET status = 'expired', reserved_until = NULL
   WHERE id = p_booking
     AND user_id = p_user
     AND status = 'reserved';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;


-- ── 7. RLS ────────────────────────────────────────────────────────────────
ALTER TABLE public.mock_interview_config   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_interview_slots    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_interview_bookings ENABLE ROW LEVEL SECURITY;

-- Config: everyone signed in reads it (the modal needs the price and the
-- copy), only admins write.
DROP POLICY IF EXISTS "Authenticated users can read mock config" ON public.mock_interview_config;
CREATE POLICY "Authenticated users can read mock config"
  ON public.mock_interview_config FOR SELECT
  TO authenticated USING (TRUE);

DROP POLICY IF EXISTS "Admins can manage mock config" ON public.mock_interview_config;
CREATE POLICY "Admins can manage mock config"
  ON public.mock_interview_config FOR ALL
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Slots: a cadet sees active future slots and nothing else. Past and
-- deactivated slots are not their business, and the admin's note never
-- leaves the console because the cadet-facing query cannot reach the row.
DROP POLICY IF EXISTS "Authenticated users can read open slots" ON public.mock_interview_slots;
CREATE POLICY "Authenticated users can read open slots"
  ON public.mock_interview_slots FOR SELECT
  TO authenticated USING (is_active AND starts_at > NOW());

DROP POLICY IF EXISTS "Admins can read all slots" ON public.mock_interview_slots;
CREATE POLICY "Admins can read all slots"
  ON public.mock_interview_slots FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can write slots" ON public.mock_interview_slots;
CREATE POLICY "Admins can write slots"
  ON public.mock_interview_slots FOR ALL
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Bookings: read your own, write none. There is deliberately no INSERT or
-- UPDATE policy for a cadet. Every write goes through mock_slot_reserve or an
-- edge function running as the service role, so a hand-rolled POST cannot
-- create a booking, set its own price, or mark itself paid.
DROP POLICY IF EXISTS "Users can read own bookings" ON public.mock_interview_bookings;
CREATE POLICY "Users can read own bookings"
  ON public.mock_interview_bookings FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can read all bookings" ON public.mock_interview_bookings;
CREATE POLICY "Admins can read all bookings"
  ON public.mock_interview_bookings FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "Admins can update bookings" ON public.mock_interview_bookings;
CREATE POLICY "Admins can update bookings"
  ON public.mock_interview_bookings FOR UPDATE
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());


-- ── 8. Lock the functions down ────────────────────────────────────────────
-- SECURITY DEFINER plus a REST-exposed schema means anything callable is
-- callable by a signed-in stranger. mock_slot_reserve writes a booking row
-- with a price it is handed, so a cadet who could call it directly could book
-- themselves a slot for one paisa. Only the service role gets these.
REVOKE ALL ON FUNCTION public.mock_slot_reserve(UUID,UUID,TEXT,TEXT,TEXT,TEXT,TEXT,TEXT,INTEGER,BIGINT,INTEGER)
  FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.mock_slot_release(UUID, UUID)
  FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.mock_expire_stale_bookings()
  FROM PUBLIC, anon, authenticated;


-- ── 9. Comments ───────────────────────────────────────────────────────────
COMMENT ON TABLE public.mock_interview_config IS
  'Single-row settings for the mock interview product. is_enabled gates the '
  'floating button and the order function; it ships FALSE.';
COMMENT ON TABLE public.mock_interview_slots IS
  'Bookable interview times. One cadet each, enforced by the partial unique '
  'index on mock_interview_bookings, not by a capacity column.';
COMMENT ON TABLE public.mock_interview_bookings IS
  'A booking is both the candidate sheet and the sale. Deliberately separate '
  'from public.payments so the course entitlement path is never involved.';


-- ── VERIFY ────────────────────────────────────────────────────────────────
-- Run app/admin/mock_interview_verify.sql after this. It includes a
-- deliberate double-book attempt, which must fail.

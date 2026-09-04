-- Discount coupons on mock interview bookings.
--
-- WHY. Coupons only ever worked on course sales. A mock interview is paid for
-- through a completely separate path (create-mock-interview-order rather than
-- create-razorpay-order, mock_interview_bookings rather than payments) and that
-- path has no coupon logic in it at all, so a code could not be applied to a
-- booking however much it looked like it should.
--
-- ── A COURSE CODE MUST NOT WORK ON A BOOKING ──────────────────────────────
--
-- This is the whole reason for applies_product. coupon_reserve already refuses
-- a coupon whose applies_duration or applies_scope does not match, and passing
-- NULL for those on an interview makes a course-targeted code fail correctly.
-- But a GENERAL code, one with no duration and no scope, matches everything.
-- Without this column a "50 per cent off" code written for the course would
-- quietly halve the interview price too.
--
-- NULL means course, so all 9 existing coupons keep their exact meaning and
-- nothing has to be backfilled.
--
-- ── THE CHECK BELONGS IN THE FUNCTION, NOT THE EDGE FUNCTION ──────────────
--
-- coupon_reserve is the authority: it takes the row lock, counts live
-- redemptions and decides. A check that lives only in TypeScript is a check
-- one direct RPC call away from being gone, and this one decides what somebody
-- pays.
--
-- ── HOW A BOOKING EXPLAINS ITSELF ─────────────────────────────────────────
--
-- mock_interview_bookings gains coupon_code, original_amount and
-- discount_amount, exactly as payments already has them. That is what lets a
-- disposable coupon be deleted without making the sale unexplainable, and it
-- is the same reasoning as coupons_disposable.sql: the sale carries its own
-- record, so the coupon row is free to go.
--
-- ── THIS IS THE OTHER HALF OF THE DISPOSABLE WORK ────────────────────────
--
-- coupons_disposable.sql shipped first and wired the self-deleting code into
-- the COURSE sale path, because that was the only path coupons ran through.
-- Blesson's actual intent was a single-use code for a MOCK INTERVIEW: hand it
-- to one person, they book, it is gone.
--
-- That needs both files. This one makes a code spendable on a booking at all,
-- and section 5 gives the booking the same disposable delete the payment
-- trigger already has. A code marked applies_product='interview' AND
-- disposable is the thing that was actually asked for.
--
-- SAFE TO RUN MORE THAN ONCE.

begin;

-- ── 1. which product a code is for ────────────────────────────────────────
alter table public.coupons
  add column if not exists applies_product text;

alter table public.coupons
  drop constraint if exists coupons_applies_product_check;

alter table public.coupons
  add constraint coupons_applies_product_check
  check (applies_product is null or applies_product in ('course', 'interview'));

comment on column public.coupons.applies_product is
  'Which product the code may be spent on. NULL or ''course'' is course '
  'access, ''interview'' is a mock interview booking. NULL rather than a '
  'default so every coupon written before this existed keeps its meaning '
  'without a backfill. Enforced in coupon_reserve(), which is the authority.';

-- A grant hands over course access, so it has no meaning on a booking: there
-- is nothing for it to grant. Refuse the combination rather than letting
-- somebody create a code that silently never works.
alter table public.coupons
  drop constraint if exists coupons_interview_not_grant;

alter table public.coupons
  add constraint coupons_interview_not_grant
  check (applies_product is distinct from 'interview' or kind <> 'grant');

-- ── 2. the booking records its own discount ───────────────────────────────
alter table public.mock_interview_bookings
  add column if not exists coupon_code     text,
  add column if not exists original_amount integer,
  add column if not exists discount_amount integer;

comment on column public.mock_interview_bookings.coupon_code is
  'The code as applied at booking. Deliberately NOT a foreign key, for the '
  'same reason as payments.coupon_code: a disposable coupon may be deleted '
  'and this row must still explain its own price. Read with original_amount '
  'and discount_amount. amount_paise is what was actually charged.';

-- ── 3. a redemption can point at a booking instead of a payment ───────────
alter table public.coupon_redemptions
  add column if not exists booking_id uuid
  references public.mock_interview_bookings(id) on delete set null;

comment on column public.coupon_redemptions.booking_id is
  'Set for an interview redemption, where payment_id is null. Exactly one of '
  'the two is set: course sales write payments, bookings write here.';

-- ── 4. the authority learns about products ────────────────────────────────
-- Reproduced in full because CREATE OR REPLACE takes the whole body. The only
-- change is the p_product argument and the block that uses it. The argument
-- defaults to 'course', so create-razorpay-order keeps working untouched.
--
-- THE OLD SIGNATURE MUST BE DROPPED FIRST, AND THIS IS NOT OPTIONAL.
-- CREATE OR REPLACE only replaces a function with the SAME argument list.
-- Adding p_product makes a seven-argument function, so the six-argument one
-- survives alongside it and every existing six-argument call becomes
-- ambiguous: Postgres answers "function public.coupon_reserve(...) is not
-- unique" and refuses. create-razorpay-order calls it with six, so without
-- this line EVERY COURSE CHECKOUT WOULD START FAILING the moment this was
-- applied. Found by running it, not by reading it.
--
-- Dropping also drops the grants, so they are restated below. Prod has EXECUTE
-- for postgres and service_role only, which is right: the edge functions call
-- it with the service role and no browser should reach it directly.
drop function if exists public.coupon_reserve(text, uuid, text, text, integer, integer);

create or replace function public.coupon_reserve(
  p_code text, p_user uuid, p_duration text, p_scope text,
  p_amount integer, p_ttl_minutes integer, p_product text default 'course'
)
returns public.coupons
language plpgsql
security definer
set search_path = public
as $$
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
$$;

-- AUTHENTICATED MUST BE REVOKED EXPLICITLY, and the first version of this
-- file did not. Supabase's default privileges grant EXECUTE on a newly created
-- function in public to anon and authenticated, so dropping and recreating
-- silently WIDENED access: before this change coupon_reserve was reachable by
-- postgres and service_role only, and afterwards any signed-in user could call
-- it directly. It is SECURITY DEFINER and it hands out reservations, so that
-- is a hole. Caught by reading the grants back after applying, not before.
revoke all on function public.coupon_reserve(text, uuid, text, text, integer, integer, text)
  from public, anon, authenticated;
grant execute on function public.coupon_reserve(text, uuid, text, text, integer, integer, text)
  to postgres, service_role;

-- ── 5. settle a booking the way a payment settles ─────────────────────────
-- The mirror of coupon_settle_from_payment, including the disposable delete,
-- because an interview code should behave the same way a course code does.
create or replace function public.coupon_settle_from_booking()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
BEGIN
  IF NEW.coupon_code IS NULL OR NEW.user_id IS NULL THEN RETURN NEW; END IF;
  IF NEW.status IS NOT DISTINCT FROM OLD.status THEN RETURN NEW; END IF;

  IF NEW.status IN ('paid', 'completed') THEN
    INSERT INTO public.coupon_redemptions
      (code, user_id, status, booking_id, discount_amount, reserved_until)
    VALUES
      (NEW.coupon_code, NEW.user_id, 'committed', NEW.id, NEW.discount_amount, NULL)
    ON CONFLICT (code, user_id) DO UPDATE
       SET status          = 'committed',
           booking_id      = EXCLUDED.booking_id,
           discount_amount = EXCLUDED.discount_amount,
           reserved_until  = NULL
     WHERE public.coupon_redemptions.status <> 'refunded';

  ELSIF NEW.status = 'cancelled' THEN
    -- A cancelled booking hands the code back only if it was never paid for.
    -- A cancelled PAID booking is a refund, and a refund does not return the
    -- code, exactly as on the course side.
    UPDATE public.coupon_redemptions
       SET status = CASE WHEN OLD.status = 'reserved' THEN 'released' ELSE 'refunded' END,
           reserved_until = NULL
     WHERE code = NEW.coupon_code AND user_id = NEW.user_id
       AND status IN ('reserved', 'committed');
  END IF;

  UPDATE public.coupons
     SET times_redeemed = public.coupon_live_count(NEW.coupon_code, NULL)
   WHERE code = NEW.coupon_code;

  -- Disposable, same rule as on a payment: gone once it is spent and paid.
  IF NEW.status IN ('paid', 'completed') THEN
    DELETE FROM public.coupons c
     WHERE c.code = NEW.coupon_code
       AND c.disposable
       AND c.max_redemptions IS NOT NULL
       AND public.coupon_live_count(c.code, NULL) >= c.max_redemptions;
  END IF;

  RETURN NEW;
END;
$$;

drop trigger if exists settle_coupon_on_booking on public.mock_interview_bookings;
create trigger settle_coupon_on_booking
  after update of status on public.mock_interview_bookings
  for each row execute function public.coupon_settle_from_booking();

-- ── 6. the admin list shows what a code is for ────────────────────────────
-- Appended at the END. CREATE OR REPLACE VIEW cannot insert a column in the
-- middle: it fails with 'cannot change name of view column', and because this
-- file is one transaction that would roll back everything above it. That
-- exact mistake was made in coupons_disposable.sql and cost a re-run.
-- security_invoker is restated because CREATE OR REPLACE does not carry
-- reloptions across, and losing it reopens the hole the 17 Aug audit closed.
--
-- THIS IS NOW THE CANONICAL DEFINITION of coupon_usage: it carries both
-- disposable and applies_product. coupons_disposable.sql still holds an older
-- one without applies_product, so re-running THAT file after this one fails
-- with "cannot drop columns from view". Harmless, it rolls back, but if it
-- happens run this file again straight afterwards.
create or replace view public.coupon_usage
with (security_invoker = true) as
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
    c.applies_product
   FROM coupons c
     LEFT JOIN coupon_redemptions r ON r.code = c.code
  GROUP BY c.code;

commit;

-- ── verify ────────────────────────────────────────────────────────────────
--   select count(*) from information_schema.columns
--    where table_name = 'coupons' and column_name = 'applies_product';          -- 1
--   select count(*) from information_schema.columns
--    where table_name = 'mock_interview_bookings'
--      and column_name in ('coupon_code','original_amount','discount_amount');  -- 3
--   select count(*) from information_schema.columns
--    where table_name = 'coupon_redemptions' and column_name = 'booking_id';    -- 1
--   select count(*) from pg_trigger
--    where tgname = 'settle_coupon_on_booking';                                 -- 1
--
--   select oid::regprocedure::text from pg_proc where proname = 'coupon_reserve';
--     -- EXACTLY ONE ROW, the 7-argument one. Two rows means the old signature
--     -- survived and every 6-argument call is now ambiguous.
--
--   select string_agg(grantee, ', ' order by grantee)
--     from information_schema.role_routine_grants
--    where routine_name = 'coupon_reserve';
--     -- MUST read exactly "postgres, service_role". If authenticated appears,
--     -- Supabase's default privileges re-granted it on creation and the
--     -- revoke above did not take.
--   select reloptions from pg_class where relname = 'coupon_usage';
--     -- must still be {security_invoker=true}
--
-- The gate is the point, so prove both directions with a real reservation.
-- A general course code must be refused on an interview:
--   select public.coupon_reserve('SOMECOURSECODE', '<user>'::uuid, null, null,
--                                49900, 15, 'interview');   -- must RAISE coupon_invalid
--
-- ── undo ──────────────────────────────────────────────────────────────────
--   drop trigger if exists settle_coupon_on_booking on public.mock_interview_bookings;
--   drop function if exists public.coupon_settle_from_booking();
--   alter table public.coupon_redemptions drop column if exists booking_id;
--   alter table public.mock_interview_bookings
--     drop column if exists coupon_code,
--     drop column if exists original_amount,
--     drop column if exists discount_amount;
--   alter table public.coupons drop constraint if exists coupons_interview_not_grant;
--   alter table public.coupons drop constraint if exists coupons_applies_product_check;
--   alter table public.coupons drop column if exists applies_product;
--   -- then restore coupon_reserve without p_product from
--   -- app/admin/coupon_discounts_setup.sql, and re-run coupons_disposable.sql
--   -- to put coupon_usage back without applies_product.

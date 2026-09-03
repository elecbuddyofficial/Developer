-- Disposable coupons: single-use codes that delete themselves once spent.
--
-- WHY. Blesson wants codes he can hand out that disappear from the database
-- the moment they are redeemed and paid for, rather than sitting in the list
-- forever.
--
-- ── THE PROBLEM WITH DELETING, AND HOW IT IS SOLVED ────────────────────────
--
-- Three things point at coupons.code today:
--
--   coupon_redemptions.code    ON DELETE CASCADE    the redemption record dies
--   payments.coupon_code       ON DELETE SET NULL   the payment forgets the code
--   email_templates.coupon_code ON DELETE SET NULL  a template loses its code
--
-- The second one is the dangerous one. Five of the thirty-six payments in
-- production carry a coupon code, and deleting the coupon would have turned
-- each into a sale for an unexplained lower amount: a problem when reconciling
-- revenue, and an unanswerable question if the buyer later disputes it.
--
-- Blesson's own suggestion is what fixes it, and the data was already there:
-- payments ALREADY records coupon_code, original_amount and discount_amount.
-- A row reads "WELCOME69, was 49900, less 6900, paid 43000" entirely on its
-- own. It never needed the coupons table to explain itself; it only needed the
-- foreign key to stop erasing the code. So section 1 turns that column from a
-- link into a plain record, and the delete becomes lossless.
--
-- ── WHY GRANT COUPONS CANNOT BE DISPOSABLE ────────────────────────────────
--
-- A grant hands over free access and creates NO payment row. In production 4
-- of the 9 redemptions are grants and none has a payment behind it, so the
-- redemption record is the only evidence the access was ever given. There is
-- nowhere for that story to go, so it must not be deleted. Enforced by a CHECK
-- rather than by remembering.
--
-- ── WHEN IT FIRES ─────────────────────────────────────────────────────────
--
-- On the payment being CONFIRMED, not on redemption. A reservation is someone
-- with the checkout open who has not paid; deleting then would pull the code
-- out from under a real buyer mid-purchase. There is a reserved redemption in
-- production right now, which is exactly that case.
--
-- A REFUND AFTERWARDS DOES NOT BRING THE CODE BACK. It cannot: the row is
-- gone. That is the accepted trade for a code that truly disappears. The
-- payment still records what was applied, so the refund itself is unaffected.
-- If a buyer needs another chance, issue a new code.
--
-- SAFE TO RUN MORE THAN ONCE.

begin;

-- ── 1. payments.coupon_code becomes a record, not a link ──────────────────
-- The column, its data and every existing value stay exactly as they are.
-- Only the rule that blanks it when the coupon is deleted goes away.
alter table public.payments
  drop constraint if exists payments_coupon_code_fkey;

comment on column public.payments.coupon_code is
  'The code as applied at purchase. Deliberately NOT a foreign key: a coupon '
  'may be deleted (see coupons.disposable) and this row must still explain '
  'its own discount. Read with original_amount and discount_amount.';

-- ── 2. the flag ───────────────────────────────────────────────────────────
alter table public.coupons
  add column if not exists disposable boolean not null default false;

alter table public.coupons
  drop constraint if exists coupons_disposable_not_grant;

alter table public.coupons
  add constraint coupons_disposable_not_grant
  check (not disposable or kind <> 'grant');

-- A disposable coupon with no redemption limit would never reach its limit and
-- so would never delete itself: the admin ticks the box, the code lives
-- forever, and nothing says why. Found by testing exactly that case. Require
-- the limit rather than leaving a tickbox that silently does nothing.
alter table public.coupons
  drop constraint if exists coupons_disposable_needs_limit;

alter table public.coupons
  add constraint coupons_disposable_needs_limit
  check (not disposable or max_redemptions is not null);

comment on column public.coupons.disposable is
  'Single use and self deleting. When the paid redemption count reaches '
  'max_redemptions the row is deleted by coupon_settle_from_payment(). Never '
  'true for kind=grant: a grant creates no payment, so deleting it would '
  'destroy the only record that access was given.';

-- ── 3. the terms guard learns about it ────────────────────────────────────
-- Unchanged except that disposable joins the frozen tuple, so it cannot be
-- switched on or off after a coupon has been used, like every other term.
create or replace function public.coupon_freeze_terms_once_used()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
DECLARE
  used INTEGER;
BEGIN
  IF (NEW.kind, NEW.discount_value, NEW.plan, NEW.scope, NEW.months,
      NEW.applies_duration, NEW.applies_scope, NEW.min_amount, NEW.disposable)
     IS NOT DISTINCT FROM
     (OLD.kind, OLD.discount_value, OLD.plan, OLD.scope, OLD.months,
      OLD.applies_duration, OLD.applies_scope, OLD.min_amount, OLD.disposable) THEN
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
$$;

-- ── 4. spend it, then remove it ───────────────────────────────────────────
-- Identical to the existing function except for the final block. Reproduced in
-- full rather than patched, because CREATE OR REPLACE takes the whole body and
-- a partial copy would silently drop the rest of the settlement logic.
create or replace function public.coupon_settle_from_payment()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
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

  -- ── disposable: the code is spent, so remove it ─────────────────────────
  -- Only on a confirmed payment, so a reservation in progress is never pulled
  -- out from under the buyer. The CASCADE on coupon_redemptions takes the
  -- redemption row with it; the payment keeps coupon_code, original_amount and
  -- discount_amount, which is the whole record of what was applied.
  IF NEW.status = 'paid' THEN
    DELETE FROM public.coupons c
     WHERE c.code = NEW.coupon_code
       AND c.disposable
       AND c.max_redemptions IS NOT NULL
       AND public.coupon_live_count(c.code, NULL) >= c.max_redemptions;
  END IF;

  RETURN NEW;
END;
$$;

-- ── 5. the admin list has to be able to see it ────────────────────────────
-- The Existing Coupons table reads coupon_usage, not coupons, so without this
-- the flag would be set and invisible: no way to tell a disposable code from
-- an ordinary one until it vanished.
--
-- Recreated in full from the live definition, with c.disposable added and
-- nothing else touched. security_invoker is restated deliberately: CREATE OR
-- REPLACE VIEW does NOT carry reloptions across, and dropping it would leave
-- the view running with the owner's rights instead of the caller's, which is
-- exactly the hole the 17 Aug security audit went through and closed.
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
    -- APPENDED, NOT INSERTED. CREATE OR REPLACE VIEW can only add columns at
    -- the END: putting this after created_at, where it reads better, fails with
    -- 'cannot change name of view column "committed" to "disposable"'. Because
    -- the whole file is one transaction that error rolled back every section
    -- above it, so the migration silently did nothing. Found by running it.
    c.disposable
   FROM coupons c
     LEFT JOIN coupon_redemptions r ON r.code = c.code
  GROUP BY c.code;

commit;

-- ── verify ────────────────────────────────────────────────────────────────
--   select conname from pg_constraint
--    where conrelid = 'public.payments'::regclass and contype = 'f'
--      and pg_get_constraintdef(oid) ilike '%coupon%';
--     -- expect NO ROWS: the link is gone
--
--   select column_name, is_nullable, column_default
--     from information_schema.columns
--    where table_name = 'coupons' and column_name = 'disposable';
--     -- expect NO / false
--
--   select count(*) from information_schema.columns
--    where table_name = 'coupon_usage' and column_name = 'disposable';
--     -- expect 1: the admin list can see the flag
--
--   select reloptions from pg_class where relname = 'coupon_usage';
--     -- expect {security_invoker=true}. If this is null the view runs with the
--     -- owner's rights and stops respecting RLS.
--
--   select conname, pg_get_constraintdef(oid) from pg_constraint
--    where conname in ('coupons_disposable_not_grant',
--                      'coupons_disposable_needs_limit');
--     -- expect ((NOT disposable) OR (kind <> 'grant'::text))
--     -- and    ((NOT disposable) OR (max_redemptions IS NOT NULL))
--
-- ── undo ──────────────────────────────────────────────────────────────────
-- Restoring the foreign key requires every payments.coupon_code to still match
-- a live coupon, so any disposable code already spent must be cleared first.
-- That loses the record, which is the whole reason the key was dropped:
--
--   update public.payments set coupon_code = null
--    where coupon_code is not null
--      and coupon_code not in (select code from public.coupons);
--   alter table public.payments
--     add constraint payments_coupon_code_fkey
--     foreign key (coupon_code) references public.coupons(code) on delete set null;
--   alter table public.coupons drop constraint if exists coupons_disposable_not_grant;
--   alter table public.coupons drop constraint if exists coupons_disposable_needs_limit;
--   alter table public.coupons drop column if exists disposable;
--   -- then re-run the previous definitions of coupon_settle_from_payment()
--   -- and coupon_freeze_terms_once_used() from app/admin/coupon_discounts_setup.sql

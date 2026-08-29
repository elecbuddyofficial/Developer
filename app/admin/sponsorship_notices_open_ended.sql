-- Sponsorship notices without a closing date.
--
-- WHY. A sponsorship window often opens before anyone knows when it shuts, and
-- sometimes the closing date is only announced weeks later. Today closes_on is
-- NOT NULL, so such a notice cannot be posted at all, and posting a guessed
-- date is worse than posting none: readers plan around it.
--
-- SAFE TO RUN MORE THAN ONCE. Both statements are guarded.
--
-- ORDER MATTERS. Apply this BEFORE deploying the client change that stops
-- requiring a closing date, or the admin form will offer a field the database
-- still rejects. The client query change that goes with it is harmless either
-- way, because no NULL rows can exist until this runs.

begin;

-- 1. Let the column be empty.
alter table public.sponsorship_notices
  alter column closes_on drop not null;

-- 2. Make the window check explicit about NULL.
--    It already tolerated it, because a CHECK fails only on FALSE and
--    `NULL >= date` evaluates to NULL, which passes. Spelling it out so the
--    next person reading the constraint does not have to know that rule.
alter table public.sponsorship_notices
  drop constraint if exists sponsorship_notices_window;

alter table public.sponsorship_notices
  add constraint sponsorship_notices_window
  check (closes_on is null or closes_on >= opens_on);

commit;

-- ── verify ────────────────────────────────────────────────────────────────
-- Expect: is_nullable = YES, and the constraint mentioning "closes_on IS NULL".
--
--   select is_nullable from information_schema.columns
--    where table_name = 'sponsorship_notices' and column_name = 'closes_on';
--
--   select pg_get_constraintdef(oid) from pg_constraint
--    where conrelid = 'public.sponsorship_notices'::regclass
--      and conname  = 'sponsorship_notices_window';
--
-- Round trip, which also proves the guard still bites:
--
--   insert into sponsorship_notices (company, link, opens_on, closes_on, course, is_published)
--   values ('__selftest__','https://example.com', current_date, null, 'ETO', false);   -- must SUCCEED
--
--   insert into sponsorship_notices (company, link, opens_on, closes_on, course, is_published)
--   values ('__selftest__','https://example.com', current_date, current_date - 1, 'ETO', false);  -- must FAIL
--
--   delete from sponsorship_notices where company = '__selftest__';
--
-- ── undo ──────────────────────────────────────────────────────────────────
-- Only possible while no open-ended notice exists, because SET NOT NULL fails
-- if any row holds a NULL. Fill or delete those rows first:
--
--   delete from public.sponsorship_notices where closes_on is null;
--   alter table public.sponsorship_notices alter column closes_on set not null;
--   alter table public.sponsorship_notices drop constraint sponsorship_notices_window;
--   alter table public.sponsorship_notices add constraint sponsorship_notices_window
--     check (closes_on >= opens_on);

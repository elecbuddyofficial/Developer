-- Mock interview slots with the time not yet decided.
--
-- WHY. Slots are blocked out a week at a time, and the day is often settled
-- before the hour is. Today starts_at is NOT NULL, so a day cannot be held
-- without inventing a time, and an invented time is worse than none: the
-- Sponsorship app would offer it to a cadet, who would book it and be told a
-- time that was never real.
--
-- THE RULE THIS ENCODES: a slot with no time is a planning row. It is visible
-- to admins and is NOT offered to cadets. The Sponsorship app filters on
-- time_tbc, so a cadet can only ever book a slot with a real time on it. Set
-- the time in the admin console and the slot becomes bookable.
--
-- starts_at stays NOT NULL and keeps carrying the date, so ordering, the
-- bookings join and every existing query keep working untouched. What changes
-- is that the time part of it is not to be believed while time_tbc is true.
--
-- SAFE TO RUN MORE THAN ONCE. Every statement is guarded.

begin;

-- 1. The flag. Default false, so every existing slot keeps its exact meaning.
alter table public.mock_interview_slots
  add column if not exists time_tbc boolean not null default false;

-- 2. UNIQUE(starts_at) has to go, and be replaced by the same rule applied only
--    to real slots.
--
--    The constraint exists so two slots cannot be created at the same moment.
--    That is still what we want for timed slots. But every undecided slot on a
--    given day is stored at the same placeholder instant, so under the old
--    constraint the second one on a date would be rejected with "there is
--    already a slot at that time", which is both wrong and confusing.
--
--    A partial unique index keeps the guarantee where it means something and
--    lifts it where it does not.
alter table public.mock_interview_slots
  drop constraint if exists mock_interview_slots_starts_at_key;

drop index if exists mock_interview_slots_starts_at_key;

create unique index if not exists mock_interview_slots_starts_at_timed_key
  on public.mock_interview_slots (starts_at)
  where not time_tbc;

-- 3. Keep undecided slots away from cadets in the database, not only in the
--    page. The client filters them out of the picker, but the read policy
--    admits any active future slot to any authenticated user, so a direct
--    PostgREST call would still list them. A filter that lives only in the
--    client is a filter one fetch away from being gone.
drop policy if exists "Authenticated users can read open slots"
  on public.mock_interview_slots;

create policy "Authenticated users can read open slots"
  on public.mock_interview_slots for select
  using (is_active and starts_at > now() and not time_tbc);

commit;

-- ── KNOWN GAP, deliberately not closed here ───────────────────────────────
-- public.mock_slot_reserve(p_slot uuid, ...) does not check time_tbc. With the
-- policy above a cadet can no longer discover the id of an undecided slot, so
-- this is not reachable through the app, but a caller who already had an id
-- could still reserve one. Closing it means editing the function that takes
-- p_amount and writes the booking, and that is not something to do blind in
-- the same change as a column addition. The guard to add, once someone has
-- read that function properly, is a single early exit:
--
--   if exists (select 1 from public.mock_interview_slots
--               where id = p_slot and time_tbc) then
--     raise exception 'slot has no time set';
--   end if;

-- ── verify ────────────────────────────────────────────────────────────────
--   select column_name, is_nullable, column_default
--     from information_schema.columns
--    where table_name = 'mock_interview_slots' and column_name = 'time_tbc';
--     -- expect NO / false
--
--   select indexname, indexdef from pg_indexes
--    where tablename = 'mock_interview_slots';
--     -- expect mock_interview_slots_starts_at_timed_key carrying WHERE (NOT time_tbc)
--
--   select policyname, qual from pg_policies
--    where tablename = 'mock_interview_slots' and cmd = 'SELECT';
--     -- the authenticated policy must now carry NOT time_tbc
--
-- The guarantee must still bite for timed slots, and must not for undecided
-- ones. Run all four, then clean up:
--
--   insert into mock_interview_slots (starts_at, time_tbc)
--   values (timestamptz '2099-01-01 10:00+05:30', false);            -- SUCCEEDS
--   insert into mock_interview_slots (starts_at, time_tbc)
--   values (timestamptz '2099-01-01 10:00+05:30', false);            -- MUST FAIL
--   insert into mock_interview_slots (starts_at, time_tbc)
--   values (timestamptz '2099-01-02 00:00+05:30', true);             -- SUCCEEDS
--   insert into mock_interview_slots (starts_at, time_tbc)
--   values (timestamptz '2099-01-02 00:00+05:30', true);             -- SUCCEEDS TOO
--
--   delete from mock_interview_slots where starts_at >= timestamptz '2099-01-01';
--
-- ── undo ──────────────────────────────────────────────────────────────────
-- Only possible once no undecided slot shares a date with another, since the
-- old constraint allows one row per instant. Clear them first:
--
--   delete from public.mock_interview_slots where time_tbc;
--   drop policy if exists "Authenticated users can read open slots"
--     on public.mock_interview_slots;
--   create policy "Authenticated users can read open slots"
--     on public.mock_interview_slots for select
--     using (is_active and starts_at > now());
--   drop index if exists mock_interview_slots_starts_at_timed_key;
--   alter table public.mock_interview_slots
--     add constraint mock_interview_slots_starts_at_key unique (starts_at);
--   alter table public.mock_interview_slots drop column if exists time_tbc;
--
-- ── ORDER MATTERS: APPLY THIS BEFORE DEPLOYING THE CLIENT ─────────────────
-- app/sponsorship/index.html names time_tbc in its slot select. PostgREST
-- fails the whole query on an unknown column, so deploying that page against a
-- database without this migration EMPTIES THE PICKER: the cadet is told no
-- times are open while the slots sit there.
--
-- The column is named rather than using select *, because * would also hand
-- every cadet the admin-only note field. Naming it is the right call and the
-- ordering constraint is the price.
--
-- The admin console is the gentler half: without the column the Add Slot
-- insert fails with a plain error and nothing else on the tab changes.

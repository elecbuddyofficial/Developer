-- Per reader acknowledgement of sponsorship notices.
--
-- WHY. A sponsorship window is time critical: a cadet who misses it waits for
-- the next intake. The notices list can be scrolled past, so the notices are
-- also put in front of a reader as a blocking modal the first time they open
-- the Sponsorship app, and again whenever a notice they have not seen appears.
-- That needs a record of what each reader has acknowledged.
--
-- Deliberately mirrors public.notification_reads, which already solves this
-- exact problem for the CoC app: same primary key shape, same RLS, same
-- SECURITY DEFINER helper. A second pattern here would be a second thing to
-- reason about for no gain.
--
-- Without this table the client falls back to localStorage, which is per
-- device: a reader on a phone and a laptop is asked twice, and clearing site
-- data asks again. That fallback is a stopgap, not the design.
--
-- SAFE TO RUN MORE THAN ONCE.

create table if not exists public.sponsorship_notice_reads (
  notice_id  uuid        not null references public.sponsorship_notices(id) on delete cascade,
  user_id    uuid        not null references auth.users(id)                 on delete cascade,
  read_at    timestamptz not null default now(),
  primary key (notice_id, user_id)
);

alter table public.sponsorship_notice_reads enable row level security;

-- A reader sees only their own rows. Admins see all, so the admin console can
-- report how many people actually acknowledged a notice.
drop policy if exists "own or admin notice reads" on public.sponsorship_notice_reads;
create policy "own or admin notice reads"
  on public.sponsorship_notice_reads for select
  using (user_id = auth.uid() or public.is_admin());

-- A reader can only ever record their own acknowledgement.
drop policy if exists "record own notice read" on public.sponsorship_notice_reads;
create policy "record own notice read"
  on public.sponsorship_notice_reads for insert
  with check (user_id = auth.uid());

-- SECURITY DEFINER with a pinned search_path, matching every other definer
-- function in this database. ON CONFLICT DO NOTHING because the first
-- acknowledgement is the one that counts; a second click is not a second read.
create or replace function public.mark_sponsorship_notice_read(p_id uuid)
returns void
language plpgsql
security definer
set search_path to 'public'
as $$
begin
  if auth.uid() is null then return; end if;
  insert into public.sponsorship_notice_reads (notice_id, user_id)
  values (p_id, auth.uid())
  on conflict (notice_id, user_id) do nothing;
end;
$$;

grant execute on function public.mark_sponsorship_notice_read(uuid) to authenticated;

-- ── verify ────────────────────────────────────────────────────────────────
--   select relrowsecurity from pg_class where relname = 'sponsorship_notice_reads';
--     -- expect true
--   select policyname, cmd from pg_policies
--    where tablename = 'sponsorship_notice_reads';
--     -- expect the two above
--   select prosecdef, proconfig from pg_proc where proname = 'mark_sponsorship_notice_read';
--     -- expect true, and search_path=public
--
-- ── undo ──────────────────────────────────────────────────────────────────
--   drop function if exists public.mark_sponsorship_notice_read(uuid);
--   drop table if exists public.sponsorship_notice_reads;
--   -- The client falls back to localStorage on its own, so dropping these
--   -- degrades the feature rather than breaking the page.

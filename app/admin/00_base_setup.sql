-- ═══════════════════════════════════════════════════════════════════════════
--  ELEC-BUDDY: BASE SCHEMA  ·  RUN THIS FIRST
--
--  Creates the profiles table that every other setup script assumes already
--  exists (they all ALTER TABLE public.profiles). Previously this lived
--  untracked at the repo root as supabase_setup.sql, i.e. the foundation of
--  the entire database existed on exactly one laptop. Moved here and
--  committed so a Supabase project can be rebuilt from the repo alone.
--
--  FULL RUN ORDER for a fresh project - this order matters, later scripts
--  depend on objects and functions created by earlier ones:
--
--    1.  00_base_setup.sql          <- you are here (profiles, RLS, signup trigger)
--    2.  setup.sql                  (email + is_admin columns, admin_users, notifications)
--    3.  security_fix_setup.sql     (is_admin() reads profiles, privileged-field guard)
--    4.  payments_setup.sql         (payments table)
--    5.  payments_v2_setup.sql      (refunds, webhook_events, admin_actions, cron_runs, coupons)
--    6.  pricing_v2_setup.sql       (plan_scope, pricing_plans, widened CHECKs)
--    7.  admin_emails_setup.sql     (admin email log)
--    8.  welcome_email_setup.sql    (welcome_email_sent_at + guard)
--    9.  email_sends_setup.sql      (per-user/day send dedupe)
--    10. per_scope_expiry_setup.sql (written_expires_at / oral_expires_at + guard)
--
--  Note that handle_new_user() and the subscription_plan CHECK constraint
--  defined below are both deliberately REPLACED by later scripts (2 and 6).
--  That is expected: this file is the starting point, not the final state.
-- ═══════════════════════════════════════════════════════════════════════════

-- 1. Profiles table (one row per user, auto-created on signup)
create table if not exists public.profiles (
  id                     uuid references auth.users on delete cascade primary key,
  full_name              text,
  subscription_plan      text check (subscription_plan in ('trial','starter','standard','pro','lifetime')),
  trial_started_at       timestamptz,
  subscription_expires_at timestamptz,
  created_at             timestamptz default now() not null
);

alter table public.profiles enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile row when a new user signs up.
-- setup.sql replaces this with a version that also stores email and
-- auto-grants admin to the team addresses.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, trial_started_at, subscription_plan)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    now(),
    'trial'
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Devices table (max 2 per user)
create table if not exists public.devices (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid references auth.users on delete cascade not null,
  fingerprint  text not null,
  device_label text,
  last_seen    timestamptz default now(),
  created_at   timestamptz default now() not null,
  unique (user_id, fingerprint)
);

alter table public.devices enable row level security;

drop policy if exists "Users can manage own devices" on public.devices;
create policy "Users can manage own devices"
  on public.devices for all
  using (auth.uid() = user_id);

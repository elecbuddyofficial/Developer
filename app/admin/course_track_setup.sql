-- ═══════════════════════════════════════════════════════════════════════════
--  Which course a user is here for, remembered on the account.
--
--  Two things in one file, because they are the same edit to the same guard
--  and splitting them would mean touching protect_privileged_fields() twice.
--
--  ── 1. A BUG FIX THAT IS OVERDUE ──────────────────────────────────────────
--
--  sponsorship_progress has never once been saved.
--
--  profile_guard_setup.sql made the guard an ALLOWLIST, and its own header
--  says why: "A column added next month is protected by default rather than
--  protected only if somebody remembers." That is exactly what then happened.
--  sponsorship_progress was added later by sponsorship_progress_setup.sql and
--  never added to the allowlist, so every write from app/progress.js:77 is
--  reverted to OLD by this trigger.
--
--  The failure is silent in the worst way. Postgres returns success, PostgREST
--  returns 204, the client has no idea, and app/sponsorship/index.html:812
--  caches the same numbers in localStorage under eb_sp_progress, so the bar
--  moves and looks right. The user only discovers it on a second device, where
--  their progress is gone.
--
--  This is the reading-progress tracking built on 14 Aug. It has been dead the
--  whole time.
--
--  ── 2. THE NEW COLUMN ─────────────────────────────────────────────────────
--
--  default_track replaces localStorage 'eb_track', which app/courses.html
--  writes and app/auth.html reads to skip the course picker on later logins.
--  As device-local state it fails in three ways: it does not follow anyone to
--  their phone, clearing site data loses it, and courses.html signOut() never
--  cleared it, so on a shared browser the next person inherited the last
--  person's course.
--
--  Deliberately NOT part of the entitlement vocabulary. Scope
--  ('written'|'oral'|'both') is hard-wired through _shared/entitlements.ts,
--  the pricing_plans CHECK constraints, the coupon columns and the
--  expiry-email pairing; a third value there would ripple through all of it.
--  This column is a navigation preference and nothing reads it for access.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── The column ────────────────────────────────────────────────────────────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS default_track TEXT;

-- Drop-then-add so the file stays re-runnable: Postgres has no
-- ADD CONSTRAINT IF NOT EXISTS. Same shape as profiles_signup_status_check.
ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_default_track_check;
ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_default_track_check
  CHECK (default_track IS NULL OR default_track IN ('coc', 'sponsorship'));

COMMENT ON COLUMN public.profiles.default_track IS
  'Which course to open after sign-in: coc or sponsorship. NULL means never '
  'asked, which is what makes the first-load question fire exactly once. A '
  'navigation preference only - it grants nothing and is never read for access.';


-- ── The guard, with the two missing columns added ─────────────────────────
-- Replaced whole rather than patched, per the rule welcome_email_setup.sql
-- set: extend the guard in the same script that adds the column. Keep this
-- body identical to profile_guard_setup.sql except for the allowlist itself,
-- so the two files can be diffed at a glance.
--
-- Both additions are safe to hand to the user. sponsorship_progress is their
-- own reading position, exactly like topic_progress next to it.
-- default_track decides which page they land on and nothing else; the worst a
-- malicious write achieves is sending themselves to the wrong course.
CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name             TEXT;
  v_topic_progress        JSONB;
  v_marketing_opt_out     BOOLEAN;
  v_sponsorship_progress  JSONB;
  v_default_track         TEXT;
BEGIN
  -- auth.uid() IS NULL means a service-role or SQL caller, which is trusted.
  -- Admins are trusted too, which is how the console grants access.
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    -- Keep the only five fields a user owns, then discard everything else
    -- they tried to send by reverting the row to what is stored.
    v_full_name            := NEW.full_name;
    v_topic_progress       := NEW.topic_progress;
    v_marketing_opt_out    := NEW.marketing_opt_out;
    v_sponsorship_progress := NEW.sponsorship_progress;
    v_default_track        := NEW.default_track;

    NEW := OLD;

    NEW.full_name            := v_full_name;
    NEW.topic_progress       := v_topic_progress;
    NEW.marketing_opt_out    := v_marketing_opt_out;
    NEW.sponsorship_progress := v_sponsorship_progress;
    NEW.default_track        := v_default_track;
  END IF;

  RETURN NEW;
END;
$$;

-- Recreated so this file also works on a fresh database.
DROP TRIGGER IF EXISTS guard_privileged_fields ON public.profiles;
CREATE TRIGGER guard_privileged_fields
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_privileged_fields();


-- ── Proof, not assumption ─────────────────────────────────────────────────
-- The whole reason this bug survived is that the failure returns success. So
-- do not trust that the allowlist above is right because it reads right: run
-- this as a REAL non-admin user (an authenticated session, not the SQL editor,
-- because auth.uid() is NULL here and the guard would not even fire):
--
--   update profiles
--      set sponsorship_progress = '{"F01":0.5}'::jsonb,
--          default_track        = 'sponsorship'
--    where id = auth.uid();
--
--   select sponsorship_progress, default_track from profiles where id = auth.uid();
--
-- Both values must come back. If either returns its old value the allowlist is
-- still wrong, and no error will have told you.
--
-- Before deploying, confirm the diagnosis holds on live data:
--
--   select count(*) as total,
--          count(*) filter (where sponsorship_progress <> '{}'::jsonb) as with_data
--     from public.profiles;
--
-- with_data should be 0. Anything else means sponsorship progress IS being
-- persisted somehow and the reasoning above needs re-examining before this
-- file is applied.

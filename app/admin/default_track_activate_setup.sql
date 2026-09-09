-- ═══════════════════════════════════════════════════════════════════════════
--  Wiring up default_track, for real this time.
--
--  course_track_setup.sql (14 Aug 2026) added this column and reserved it,
--  explicitly unused: "NOTHING READS OR WRITES default_track... The intent,
--  if it is ever picked up: replace localStorage 'eb_track'." app/auth.html
--  went further and recorded that an account-based version was actually
--  built and tested there once, then deliberately dropped in favour of
--  localStorage-only, to avoid a backfill and avoid silently changing any
--  existing user's routing.
--
--  Reversed on 9 Sep 2026, on purpose: Sponsorship is about to become a
--  paid course (sponsorship_pricing_setup.sql), and there is currently no
--  way to answer "how many accounts use CoC vs Sponsorship" at all.
--  default_track is that number, once it is actually populated.
--
--  New signups: app/auth.html's handleRegister() now sends default_track
--  as signup metadata (whichever course tab they were on), and the trigger
--  below writes it into profiles at the same moment the account row is
--  created - before email confirmation, before any session exists, so it
--  is already correct by the time they first log in.
--
--  Existing accounts: every one of them has default_track NULL today.
--  app/auth.html's goAfterAuth() asks once, on next login, and writes the
--  answer straight to the account.
--
--  ONLY handle_new_user() changes here. protect_privileged_fields() already
--  lets a signed-in user write their own default_track -
--  profile_guard_fix_setup.sql (14 Aug) put it on the allowlist and nothing
--  since has touched that function. Re-checked against the LIVE body in
--  pg_proc before writing this, not against any single .sql file, per the
--  lesson that same file records: several files replace handle_new_user
--  and the newest one wins, so before running this, re-confirm nothing
--  newer than signup_guard_setup.sql (10 Aug 2026) has replaced it since.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _trial  TIMESTAMPTZ := NOW();
  _prior  TIMESTAMPTZ;
  _dom    TEXT := split_part(lower(btrim(coalesce(NEW.email, ''))), '@', 2);
  _status TEXT := 'approved';
  _track  TEXT := NEW.raw_user_meta_data->>'default_track';
BEGIN
  -- Only a value the CHECK constraint already accepts is ever trusted from
  -- signup metadata (client-controlled input). Anything else, including a
  -- missing key, becomes NULL rather than a failed signup over a routing
  -- preference - profiles_default_track_check would otherwise abort the
  -- whole INSERT below on a malformed or spoofed value.
  IF _track NOT IN ('coc', 'sponsorship') THEN
    _track := NULL;
  END IF;

  -- A returning account keeps its original trial start, so deleting and
  -- signing up again does not hand out a fresh trial.
  BEGIN
    SELECT t.trial_started_at INTO _prior
    FROM public.deleted_account_tombstones t
    WHERE t.email_hash = public.eb_email_hash(NEW.email);

    IF _prior IS NOT NULL THEN
      _trial := _prior;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    _trial := NOW();   -- never block a signup over this
  END;

  -- Not a pre-approved provider: hold for review. The trial clock stays unset
  -- so nothing is consumed while waiting, EXCEPT where a tombstone already
  -- pins an earlier trial, which must survive review or deleting the account
  -- would become a way to reset the trial.
  IF NOT EXISTS (SELECT 1 FROM public.allowed_email_domains a WHERE a.domain = _dom) THEN
    _status := 'pending';
    _trial  := _prior;     -- NULL unless this mailbox has trialled before
  END IF;

  -- subscription_plan deliberately stays 'trial' even while pending. Every
  -- admin filter and access check already understands 'trial'; introducing a
  -- fourth plan value would mean auditing all of them. signup_status is the
  -- flag that gates entry, and a NULL trial_started_at is what stops the clock.
  INSERT INTO public.profiles (id, full_name, email, trial_started_at,
                               subscription_plan, signup_status, default_track)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email, _trial,
          'trial', _status, _track)
  ON CONFLICT (id) DO UPDATE SET
    email    = EXCLUDED.email,
    -- Preserved, never granted. An existing admin re-confirming or changing
    -- their email keeps the flag; nobody gains it here.
    is_admin = public.profiles.is_admin;
    -- default_track deliberately NOT in this SET, same as full_name isn't:
    -- a returning account (deleted, then signed up again) keeps whatever it
    -- already had rather than being overwritten by this signup's metadata.

  RETURN NEW;
END;
$$;


-- ── Verification ──────────────────────────────────────────────────────────
-- Expect: the function body above, and going forward, new signups land
-- with a non-NULL default_track while every pre-existing row stays NULL
-- until app/auth.html's goAfterAuth() asks and writes it.
--
--   SELECT proname, prosrc FROM pg_proc WHERE proname = 'handle_new_user';
--
--   SELECT default_track, count(*) FROM public.profiles GROUP BY 1;

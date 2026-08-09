-- ═══════════════════════════════════════════════════════════════════════════
--  Stop granting admin automatically from a hardcoded email list.
--
--  WHAT WAS WRONG. handle_new_user carried five addresses and set
--  profiles.is_admin = true for any signup matching one. is_admin() reads that
--  column and EVERY admin RLS policy calls is_admin(), so the flag is total
--  authority: read every profile and payment, mail all customers, grant access,
--  delete accounts.
--
--  Two problems with granting it that way:
--
--    1. A TYPO IN THE LIST WAS A LIVE BACKDOOR. It contained
--       yadh@elec-buddy.com while the real account is yadhu@elec-buddy.com. So
--       yadh@elec-buddy.com was an unregistered address that would have made
--       whoever signed up with it an admin. Exploiting it needs mail at that
--       address, so it was not remotely reachable, but a catch-all mailbox or
--       anyone with domain mail access would have been enough.
--
--    2. IT FIRES BEFORE THE EMAIL IS CONFIRMED. The trigger runs on INSERT into
--       auth.users, which is signup, not verification. The flag is therefore
--       set on an account nobody has yet proven they own.
--
--  The list also has no purpose left: all five admin accounts already exist,
--  and the console has an Admins tab for granting it deliberately. An
--  automatic grant keyed on an unverified string is pure downside, and it gets
--  worse the moment an admin account is deleted and frees its address.
--
--  EXISTING ADMINS ARE UNAFFECTED. The upsert keeps `OR public.profiles.is_admin`,
--  so a row that already holds admin keeps it.
--
--  Also pins search_path, which this function was missing. It is SECURITY
--  DEFINER and owned by postgres, so an unpinned search_path is the standard
--  escalation shape and Supabase's own linter flags it.
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
  _trial TIMESTAMPTZ := NOW();
  _prior TIMESTAMPTZ;
BEGIN
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

  -- No is_admin in the INSERT column list at all. A new account is never an
  -- admin; the Admins tab grants it deliberately, to a confirmed account.
  INSERT INTO public.profiles (id, full_name, email, trial_started_at, subscription_plan)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email, _trial, 'trial')
  ON CONFLICT (id) DO UPDATE SET
    email    = EXCLUDED.email,
    -- Preserved, never granted. An existing admin re-confirming or changing
    -- their email keeps the flag; nobody gains it here.
    is_admin = public.profiles.is_admin;

  RETURN NEW;
END;
$$;

-- ═══════════════════════════════════════════════════════════════════════════
--  Telling people where their signup stands.
--
--  The review queue already held and released accounts correctly, but it never
--  said anything to the person waiting. Three gaps, all on the account holder's
--  side rather than the admin's:
--
--    pending   they saw the app as if nothing were wrong. The hold screen
--              existed but only ran on a ten minute timer, so a new signup got
--              several minutes inside before it appeared.
--    approved  nothing marked the moment. They had no way to know their trial
--              had started other than noticing content had unlocked.
--    rejected  a dead-end screen with no reason given, and the row sat in the
--              database forever.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

-- Shown once, the first time they load the app after being approved. Without
-- this the notice either never appears or appears on every load forever.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS approval_seen_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.approval_seen_at IS
  'When the account holder was shown the "you are approved" notice. NULL and '
  'signup_status = approved and reviewed_at set means it is still owed to them.';


-- ── What the account holder is allowed to know about their own signup ──────
-- The client needs the status to decide what to show, and a plain SELECT would
-- mean granting read access to the profiles row before we have decided whether
-- this person should be in at all. This returns only the four fields the
-- screens need, for the caller and nobody else.
CREATE OR REPLACE FUNCTION public.eb_my_signup_state()
RETURNS TABLE (status TEXT, domain TEXT, reviewed BOOLEAN, owed_notice BOOLEAN)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  RETURN QUERY
  SELECT p.signup_status,
         split_part(lower(p.email), '@', 2),
         p.reviewed_at IS NOT NULL,
         -- Owed the good news: approved, reviewed by a human, not yet told.
         (p.signup_status = 'approved' AND p.reviewed_at IS NOT NULL
                                       AND p.approval_seen_at IS NULL)
  FROM public.profiles p
  WHERE p.id = auth.uid();
END $$;

REVOKE ALL ON FUNCTION public.eb_my_signup_state() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_my_signup_state() TO authenticated;


CREATE OR REPLACE FUNCTION public.eb_mark_approval_seen()
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  UPDATE public.profiles
     SET approval_seen_at = NOW()
   WHERE id = auth.uid() AND approval_seen_at IS NULL;
END $$;

REVOKE ALL ON FUNCTION public.eb_mark_approval_seen() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_mark_approval_seen() TO authenticated;


-- ── Removing a rejected account ───────────────────────────────────────────
-- Blesson: a rejected signup should be told why and then deleted.
--
-- Deliberately NOT deleted at the moment of rejection. Deleting immediately
-- means the person is never told anything: they return, the login fails, and
-- they have no idea whether it is their password, the site, or a decision
-- somebody made. So the row survives just long enough to deliver the message,
-- and is removed the moment it has been.
--
-- Guarded on signup_status = 'rejected' so it can only ever remove an account
-- already turned down. It cannot be used to delete a live one, whoever calls
-- it, which matters because the caller is the account holder themselves.
CREATE OR REPLACE FUNCTION public.eb_delete_my_rejected_account()
RETURNS BOOLEAN
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE v_id UUID; v_status TEXT;
BEGIN
  v_id := auth.uid();
  IF v_id IS NULL THEN RETURN false; END IF;

  SELECT signup_status INTO v_status FROM public.profiles WHERE id = v_id;
  IF v_status IS DISTINCT FROM 'rejected' THEN
    RETURN false;                       -- never touches a live account
  END IF;

  -- auth.users cascades to profiles and everything keyed on the user.
  DELETE FROM auth.users WHERE id = v_id;
  RETURN true;
END $$;

REVOKE ALL ON FUNCTION public.eb_delete_my_rejected_account() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_delete_my_rejected_account() TO authenticated;


-- Sweeper, for the ones who never come back. Without it a rejected row sits
-- forever waiting to deliver a message nobody will read. Run from the same
-- schedule as the other cleanups, or by hand.
CREATE OR REPLACE FUNCTION public.eb_purge_stale_rejections(p_days INT DEFAULT 30)
RETURNS INT
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE n INT;
BEGIN
  IF NOT public.is_admin() THEN RAISE EXCEPTION 'not authorised'; END IF;
  WITH gone AS (
    DELETE FROM auth.users u
     USING public.profiles p
     WHERE p.id = u.id
       AND p.signup_status = 'rejected'
       AND p.reviewed_at < NOW() - (p_days || ' days')::interval
    RETURNING u.id
  )
  SELECT count(*) INTO n FROM gone;
  RETURN n;
END $$;

REVOKE ALL ON FUNCTION public.eb_purge_stale_rejections(INT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_purge_stale_rejections(INT) TO authenticated;

-- ═══════════════════════════════════════════════════════════════════════════
--  Restore the profile guard's escape hatches. REGRESSION FIX.
--
--  ── WHAT I BROKE, 14 Aug 2026 09:49 UTC ───────────────────────────────────
--
--  course_track_setup.sql did CREATE OR REPLACE on protect_privileged_fields
--  to add sponsorship_progress and default_track. I wrote that new body from
--  the copy in profile_guard_setup.sql, because that file is named as though
--  it owns the function.
--
--  It does not. activity_tracker_setup.sql had ALSO replaced the same
--  function later, adding a carefully-built escape hatch: last_active_at is
--  normally reverted like any other privileged column, EXCEPT when the
--  transaction-local flag eb.activity_beat is set, which only touch_activity
--  can do. My replacement silently dropped that branch.
--
--  Result: every non-admin heartbeat has been reverted since 09:49. Admins
--  kept working, because the guard trusts them, which is exactly why it
--  looked fine from the admin console. Online Status quietly stopped seeing
--  students. Blesson caught it by logging in as a normal user and watching
--  himself not appear.
--
--  THE LESSON, and it is the same one as sponsorship_progress: CREATE OR
--  REPLACE on a shared trigger is a whole-body overwrite. Before touching
--  this function again, read the LIVE definition out of pg_proc, not
--  whichever .sql file looks authoritative. Several files here replace it and
--  the newest one wins, so no single file is the source of truth.
--
--  ── WHAT WAS ALREADY BROKEN, since 7 Aug ──────────────────────────────────
--
--  eb_mark_approval_seen has never once worked. It stamps approval_seen_at so
--  the "your account is approved" notice shows a single time. That column was
--  never on the allowlist and the function never set a flag, so the write has
--  always been reverted: 0 accounts have ever been stamped, and 1 account is
--  currently owed that notice on every single page load, forever.
--
--  Not my regression, but the identical fault, so it is fixed here rather
--  than left for whoever trips over it next.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name            TEXT;
  v_topic_progress       JSONB;
  v_marketing_opt_out    BOOLEAN;
  v_sponsorship_progress JSONB;
  v_default_track        TEXT;
  v_last_active_at       TIMESTAMPTZ;
  v_approval_seen_at     TIMESTAMPTZ;
  v_is_beat              BOOLEAN;
  v_is_notice            BOOLEAN;
BEGIN
  -- auth.uid() IS NULL means a service-role or SQL caller, which is trusted.
  -- Admins are trusted too, which is how the console grants access.
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN

    -- SECURITY DEFINER changes the ROLE, not auth.uid(), so a trusted RPC
    -- still arrives here looking like an ordinary user. These flags are how
    -- such an RPC says "I set this, not the browser". Transaction-local, so
    -- they cannot leak into a later statement, and unreachable from the
    -- client because nothing else sets them.
    v_is_beat   := COALESCE(current_setting('eb.activity_beat', true), '') = '1';
    v_is_notice := COALESCE(current_setting('eb.approval_seen', true), '') = '1';

    -- The five fields a user genuinely owns.
    v_full_name            := NEW.full_name;
    v_topic_progress       := NEW.topic_progress;
    v_marketing_opt_out    := NEW.marketing_opt_out;
    v_sponsorship_progress := NEW.sponsorship_progress;
    v_default_track        := NEW.default_track;
    -- Plus two a trusted RPC may set on their behalf.
    v_last_active_at       := NEW.last_active_at;
    v_approval_seen_at     := NEW.approval_seen_at;

    NEW := OLD;

    NEW.full_name            := v_full_name;
    NEW.topic_progress       := v_topic_progress;
    NEW.marketing_opt_out    := v_marketing_opt_out;
    NEW.sponsorship_progress := v_sponsorship_progress;
    NEW.default_track        := v_default_track;

    IF v_is_beat   THEN NEW.last_active_at   := v_last_active_at;   END IF;
    IF v_is_notice THEN NEW.approval_seen_at := v_approval_seen_at; END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS guard_privileged_fields ON public.profiles;
CREATE TRIGGER guard_privileged_fields
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_privileged_fields();


-- ── The approval notice can now actually stamp itself ─────────────────────
-- Body unchanged apart from raising the flag the guard looks for.
CREATE OR REPLACE FUNCTION public.eb_mark_approval_seen()
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  PERFORM set_config('eb.approval_seen', '1', true);
  UPDATE public.profiles
     SET approval_seen_at = NOW()
   WHERE id = auth.uid() AND approval_seen_at IS NULL;
END $$;

REVOKE ALL ON FUNCTION public.eb_mark_approval_seen() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_mark_approval_seen() TO authenticated;


-- ── Proof, as a real non-admin ────────────────────────────────────────────
-- The SQL editor runs with auth.uid() NULL, so the guard never fires and a
-- test here would pass whether or not the fix works. That is how both of
-- these survived. Verify by impersonating a real user, as
-- course_track_setup.sql documents.

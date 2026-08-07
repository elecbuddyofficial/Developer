-- ═══════════════════════════════════════════════════════════════════════════
--  Who is actually using the app right now.
--
--  WHY. Nothing today distinguishes "signed up and never came back" from
--  "studying every evening". Both look identical in the users list, and they
--  need opposite responses. It also answers the question the funnel cannot:
--  whether the 71 people who never opened the upgrade window are studying and
--  simply never reached the paywall, or never really started.
--
--  WHAT IS STORED. One timestamp per account, overwritten. No history, no
--  page contents, no IP, no location. Deliberately not a log: a rolling
--  "last active" answers the question without accumulating a record of
--  somebody's study habits.
--
--  WRITTEN THROUGH A FUNCTION, NOT A DIRECT UPDATE. The allowlist guard on
--  profiles now reverts everything a user writes except full_name,
--  topic_progress and marketing_opt_out, so a client-side UPDATE of this
--  column would be silently discarded. That is the correct default, and the
--  answer is a narrow function that can only ever stamp the caller's own row
--  with the current time, rather than widening what the client may write.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS last_active_at TIMESTAMPTZ;

-- The admin view sorts and filters on this, and it is the only query that
-- ever touches it.
CREATE INDEX IF NOT EXISTS profiles_last_active_idx
  ON public.profiles (last_active_at DESC NULLS LAST);


-- The heartbeat. Takes no arguments on purpose: it cannot be pointed at
-- another account, and it cannot backdate or forward-date anything, because
-- both the row and the value are decided here rather than sent by the caller.
CREATE OR REPLACE FUNCTION public.touch_activity()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- The allowlist guard on profiles reverts every column a user did not write
  -- through, and last_active_at is deliberately not one they may write. So the
  -- guard would discard this update too: SECURITY DEFINER changes the role,
  -- not auth.uid(), so the trigger still sees an ordinary user. It did exactly
  -- that on the first attempt, returning success and stamping nothing.
  --
  -- This flag is how the guard tells "the heartbeat set this" from "the client
  -- sent it". Transaction-local, so it cannot leak into any later statement,
  -- and unreachable from the client because nothing else sets it.
  PERFORM set_config('eb.activity_beat', '1', true);

  UPDATE public.profiles
     SET last_active_at = NOW()
   WHERE id = auth.uid();
END;
$$;

-- This one IS meant to be called by signed-in users: it is how the heartbeat
-- works. Safe to grant because it exposes nothing and can only write NOW()
-- onto the caller's own row. `anon` is revoked because a caller with no
-- session has no row to stamp.
REVOKE ALL ON FUNCTION public.touch_activity() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.touch_activity() TO authenticated;


-- ── Admin view ─────────────────────────────────────────────────────────────
-- Buckets rather than raw timestamps, because "online now" and "lapsed" are
-- the two things worth acting on and a wall of timestamps buries both.
-- Dropped rather than replaced: CREATE OR REPLACE VIEW cannot add a column in
-- the middle of the list, it can only append.
DROP VIEW IF EXISTS public.user_activity;
CREATE VIEW public.user_activity
WITH (security_invoker = on) AS
SELECT
  p.id AS user_id,
  p.email,
  p.full_name,
  p.subscription_plan,
  -- So the console can keep the team out of the customer figures.
  COALESCE(p.is_admin, false) AS is_admin,
  p.created_at AS signed_up_at,
  p.trial_started_at,
  p.last_active_at,
  CASE
    WHEN p.last_active_at IS NULL                         THEN 'never'
    WHEN p.last_active_at > NOW() - INTERVAL '5 minutes'  THEN 'online'
    WHEN p.last_active_at > NOW() - INTERVAL '1 hour'     THEN 'recent'
    WHEN p.last_active_at > NOW() - INTERVAL '1 day'      THEN 'today'
    WHEN p.last_active_at > NOW() - INTERVAL '7 days'     THEN 'this_week'
    ELSE 'lapsed'
  END AS activity,
  -- Signed up and never opened the app even once. The clearest failure to
  -- act on, and invisible in every other view.
  (p.last_active_at IS NULL) AS never_used
FROM public.profiles p
WHERE p.deletion_requested_at IS NULL;

REVOKE ALL ON public.user_activity FROM anon;


-- ── Teach the profile guard about the heartbeat ───────────────────────────
-- Same allowlist as profile_guard_setup.sql, plus one narrow exception:
-- last_active_at survives when, and only when, touch_activity set the flag
-- above. A client PATCHing last_active_at directly is still discarded, so
-- nobody can fake being online.
CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name         TEXT;
  v_topic_progress    JSONB;
  v_marketing_opt_out BOOLEAN;
  v_last_active_at    TIMESTAMPTZ;
  v_is_beat           BOOLEAN;
BEGIN
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    v_is_beat := COALESCE(current_setting('eb.activity_beat', true), '') = '1';

    v_full_name         := NEW.full_name;
    v_topic_progress    := NEW.topic_progress;
    v_marketing_opt_out := NEW.marketing_opt_out;
    v_last_active_at    := NEW.last_active_at;

    NEW := OLD;

    NEW.full_name         := v_full_name;
    NEW.topic_progress    := v_topic_progress;
    NEW.marketing_opt_out := v_marketing_opt_out;
    IF v_is_beat THEN
      NEW.last_active_at := v_last_active_at;
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

-- Record Sponsorship module opens in topic_activity.
--
-- WHY. touch_topic has always guarded its input with
--
--     IF p_topic !~ '^([TW][0-9]{2}|ALL)$' THEN RETURN; END IF;
--
-- which accepts COC topic codes and nothing else. Every one of the 77
-- Sponsorship module ids (S00, F01-F25, APT, A01-A32, DI01-DI04, ET01-ET09,
-- CA, IP01-IP04) fails that pattern, so the function returned without
-- inserting. The Sponsorship app has been calling ebProgress.touch() on every
-- module open the whole time.
--
-- It failed in silence from end to end. The client is fire and forget by
-- design (measurement must never delay reading), and the guard RETURNs rather
-- than raising, so there was no error in the browser, none in the logs, and a
-- healthy looking topic_activity table. The only visible symptom was the one
-- Blesson eventually noticed: open any user in the admin console and their COC
-- reading is there while their Sponsorship reading is not.
--
-- NOTE ON WHAT THIS DOES NOT DO. There is no history to backfill. Opens that
-- were never written cannot be recovered, so this starts the record from the
-- day it is applied. profiles.sponsorship_progress is unaffected: that is a
-- separate column written by a direct update, and it has been saving since
-- course_track_setup.sql fixed the profiles guard on 14 Aug 2026.
--
-- SAFE TO RUN MORE THAN ONCE. CREATE OR REPLACE on one function, no DDL, no
-- data touched. Nothing here can drop a row.

CREATE OR REPLACE FUNCTION public.touch_topic(p_topic TEXT, p_kind TEXT DEFAULT 'notes')
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN; END IF;

  -- Still an allowlist by shape, not a wildcard. Anything that is not a real
  -- topic code is a client bug or a probe and is not worth a row.
  --   [TW]nn        COC:         T01-T23, W01-W08
  --   [FA]nn        Sponsorship: F01-F25, A01-A32
  --   (IP|DI|ET)nn  Sponsorship: IP01-IP04, DI01-DI04, ET01-ET09
  --   S00 APT CA    Sponsorship: the three that are not numbered
  --   ALL           surfaces not tied to one topic (Surveyor bank, question bank)
  IF p_topic !~ '^([TWFA][0-9]{2}|(IP|DI|ET)[0-9]{2}|S00|APT|CA|ALL)$' THEN
    RETURN;
  END IF;

  IF p_kind NOT IN ('notes', 'quiz', 'surveyor', 'qbank',
                    'surveyor_blocked', 'qbank_blocked') THEN RETURN; END IF;

  INSERT INTO public.topic_activity (user_id, topic_id, kind, opens)
  VALUES (auth.uid(), p_topic, p_kind, 1)
  ON CONFLICT (user_id, topic_id, kind) DO UPDATE
    SET opens          = public.topic_activity.opens + 1,
        last_opened_at = NOW();
END;
$$;

REVOKE ALL ON FUNCTION public.touch_topic(TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.touch_topic(TEXT, TEXT) TO authenticated;

-- ── verify ────────────────────────────────────────────────────────────────
-- The guard is the whole point, so test both directions. Run as a signed-in
-- user, not as the service role: auth.uid() is NULL for the latter and the
-- function returns before it reaches the regex.
--
--   select public.touch_topic('F08', 'notes');    -- must INSERT
--   select public.touch_topic('DI02', 'notes');   -- must INSERT
--   select public.touch_topic('T15', 'notes');    -- must still INSERT
--   select public.touch_topic('DROP', 'notes');   -- must be IGNORED
--   select public.touch_topic('F8',   'notes');   -- must be IGNORED (one digit)
--
--   select topic_id, kind, opens from public.topic_activity
--    where user_id = auth.uid() order by last_opened_at desc limit 10;
--
-- Then, a day after deploying, the real check is that rows exist at all:
--
--   select count(*) filter (where topic_id ~ '^([FA][0-9]{2}|(IP|DI|ET)[0-9]{2}|S00|APT|CA)$')
--            as sponsorship_rows,
--          count(*) filter (where topic_id ~ '^[TW][0-9]{2}$') as coc_rows
--     from public.topic_activity;
--
-- sponsorship_rows was 0 before this and must climb after. If it is still 0
-- with Sponsorship traffic in the app, the client is not calling touch at all
-- and this file is not the remaining problem.
--
-- ── undo ──────────────────────────────────────────────────────────────────
-- Re-run app/admin/topic_activity_setup.sql, which still carries the original
-- COC-only guard. Rows already recorded for Sponsorship modules stay; they are
-- real opens and nothing reads them in a way that breaks. To remove them too:
--
--   delete from public.topic_activity
--    where topic_id ~ '^([FA][0-9]{2}|(IP|DI|ET)[0-9]{2}|S00|APT|CA)$';

-- Per-user record of which topics were opened and when, split by surface
-- (notes, quiz, Surveyor Q&A bank, mixed question bank).
--
-- ⚠️  THIS FILE USED TO OPEN WITH `DROP TABLE IF EXISTS public.topic_activity;`
-- That was written on the day the table was created, when it held nothing and
-- the primary key still had to change. It stopped being safe the moment real
-- traffic landed in it, and on 2026-08-11 re-running this file on production
-- wiped every recorded open. The drop is gone and the table is now created
-- only if absent, with schema changes expressed as explicit ALTERs below.
--
-- If the shape ever has to change again, ALTER it. Do not reintroduce a drop:
-- there is no PITR on this project and no stored backups, so a drop here is
-- unrecoverable.

CREATE TABLE IF NOT EXISTS public.topic_activity (
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- A topic code (T01..T23, W01..W08), or ALL for surfaces that are not tied
  -- to one topic: the Surveyor Q&A bank and the mixed question bank.
  topic_id        TEXT NOT NULL,
  -- The *_blocked kinds record someone reaching a locked surface and being
  -- turned away. Worth keeping separate rather than dropping: it is the
  -- clearest buying signal in the app, and merging it with a real open made
  -- the admin panel imply an expired user had read paid content when the
  -- paywall had in fact stopped them.
  kind            TEXT NOT NULL DEFAULT 'notes'
                  CHECK (kind IN ('notes', 'quiz', 'surveyor', 'qbank',
                                  'surveyor_blocked', 'qbank_blocked')),
  opens           INTEGER NOT NULL DEFAULT 0,
  first_opened_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_opened_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, topic_id, kind)
);

-- The CREATE TABLE above only runs on a fresh database, so an existing table
-- keeps its original four-value CHECK and would silently reject the blocked
-- kinds. Re-stated here so this file stays safely re-runnable on a live one.
ALTER TABLE public.topic_activity DROP CONSTRAINT IF EXISTS topic_activity_kind_check;
ALTER TABLE public.topic_activity ADD CONSTRAINT topic_activity_kind_check
  CHECK (kind IN ('notes', 'quiz', 'surveyor', 'qbank',
                  'surveyor_blocked', 'qbank_blocked'));

CREATE INDEX IF NOT EXISTS topic_activity_user_recent_idx
  ON public.topic_activity (user_id, last_opened_at DESC);

ALTER TABLE public.topic_activity ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins read topic activity" ON public.topic_activity;
CREATE POLICY "Admins read topic activity" ON public.topic_activity
  FOR SELECT USING (public.is_admin());
-- Still no INSERT or UPDATE policy: everything goes through the function
-- below, so nobody can forge activity on their own or anyone else's account.

DROP FUNCTION IF EXISTS public.touch_topic(TEXT, NUMERIC);

CREATE OR REPLACE FUNCTION public.touch_topic(p_topic TEXT, p_kind TEXT DEFAULT 'notes')
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN; END IF;
  -- Anything that is not a real topic code or ALL is a client bug or a probe,
  -- and either way is not worth a row.
  IF p_topic !~ '^([TW][0-9]{2}|ALL)$' THEN RETURN; END IF;
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

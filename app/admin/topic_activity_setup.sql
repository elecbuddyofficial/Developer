-- Adds `kind` so notes, quizzes and the Surveyor Q&A bank are recorded
-- separately. Dropped and recreated rather than altered because the table was
-- created minutes ago, has never been written to, and the primary key itself
-- has to change: the same topic can now be both read and quizzed.
--
-- Applied on top of topic_activity_setup.sql, which this supersedes.

DROP TABLE IF EXISTS public.topic_activity;

CREATE TABLE public.topic_activity (
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  -- A topic code (T01..T23, W01..W08), or ALL for surfaces that are not tied
  -- to one topic: the Surveyor Q&A bank and the mixed question bank.
  topic_id        TEXT NOT NULL,
  kind            TEXT NOT NULL DEFAULT 'notes'
                  CHECK (kind IN ('notes', 'quiz', 'surveyor', 'qbank')),
  opens           INTEGER NOT NULL DEFAULT 0,
  first_opened_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_opened_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, topic_id, kind)
);

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
  IF p_kind NOT IN ('notes', 'quiz', 'surveyor', 'qbank') THEN RETURN; END IF;

  INSERT INTO public.topic_activity (user_id, topic_id, kind, opens)
  VALUES (auth.uid(), p_topic, p_kind, 1)
  ON CONFLICT (user_id, topic_id, kind) DO UPDATE
    SET opens          = public.topic_activity.opens + 1,
        last_opened_at = NOW();
END;
$$;

REVOKE ALL ON FUNCTION public.touch_topic(TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.touch_topic(TEXT, TEXT) TO authenticated;

-- ═══════════════════════════════════════════════════════════════════════════
--  LIVE EXAM FEED: questions from the MMD sitting that is running right now.
--
--  WHY THIS IS NOT IN sq_data.js
--
--  The Surveyor Q&A bank is a static AES-encrypted file in the repo. Adding a
--  question to it means decrypt, edit, re-encrypt, commit, push, wait for
--  GitHub Pages, and bump the service worker. That is a full production deploy.
--
--  This feature adds questions EVERY DAY for the 3 to 7 days a sitting runs,
--  often in the evening from a phone. A deploy per day is not a workflow that
--  survives contact with an exam week, and a missed evening kills the feed
--  during the only period it exists for. So it lives in Postgres, is written
--  from the admin console, and reaches cadets without any deploy at all.
--
--  WHY TWO TABLES
--
--  A sitting is a window with a life: it is announced, it runs for a few days,
--  it ends. Questions belong to a day within that window. Keeping the window
--  on its own row means the app can decide what to show from dates alone,
--  with nobody remembering to switch anything off. That is the same reasoning
--  as sponsorship_notices, and the same failure it avoids: a cadet acting on
--  something that is no longer true.
--
--  ANSWERS ARRIVE LATER THAN QUESTIONS, AND THE SCHEMA SAYS SO
--
--  answer_text is nullable on purpose. In practice a candidate reports the
--  question the same evening and the model answer is written afterwards. If
--  the answer were mandatory, the honest choice would be to hold the question
--  back, which defeats the point of a live feed. A question with no answer
--  yet still tells the next candidate what is being asked today.
--
--  APPLY:  paste into the Supabase SQL editor and run. Re-runnable.
--  UNDO:   DROP TABLE public.exam_questions;
--          DROP TABLE public.exam_sittings;
--          (record in claude-cowork/CHANGE_LEDGER.md)
-- ═══════════════════════════════════════════════════════════════════════════

-- ── Sittings ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.exam_sittings (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Shown to cadets, e.g. "August 2026". Kept separate from the centre so the
  -- feed can say "Mumbai, August 2026" without the title repeating it.
  title        TEXT NOT NULL,
  centre       TEXT NOT NULL DEFAULT 'Mumbai',

  starts_on    DATE NOT NULL,
  ends_on      DATE NOT NULL,

  -- Draft until ticked, so a sitting can be set up before it is announced.
  is_published BOOLEAN NOT NULL DEFAULT FALSE,

  note         TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by   UUID REFERENCES auth.users ON DELETE SET NULL,

  -- A sitting that ends before it starts is a typo.
  CONSTRAINT exam_sittings_window CHECK (ends_on >= starts_on),
  -- Orals run days, not months. This catches a mistyped year, which would
  -- otherwise leave a feed "live" indefinitely.
  CONSTRAINT exam_sittings_length CHECK (ends_on - starts_on <= 31)
);

CREATE INDEX IF NOT EXISTS exam_sittings_window_idx
  ON public.exam_sittings (starts_on, ends_on) WHERE is_published;

-- ── Questions ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.exam_questions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sitting_id    UUID NOT NULL REFERENCES public.exam_sittings(id) ON DELETE CASCADE,

  -- Which day of the sitting. The feed groups by this, newest day first.
  asked_on      DATE NOT NULL,

  question_text TEXT NOT NULL,
  -- Nullable by design: see the header. A question with no answer yet is
  -- still worth showing.
  answer_text   TEXT,

  -- Both optional. A candidate often cannot say which surveyor asked what,
  -- and forcing a topic would mean guessing.
  surveyor      TEXT,
  topic         TEXT CHECK (topic IS NULL OR topic ~ '^T[0-2][0-9]$'),

  is_published  BOOLEAN NOT NULL DEFAULT TRUE,

  -- Preserves paste order within a day, so a bulk paste keeps the sequence
  -- the candidate wrote it in. Ties break on created_at.
  sort_order    INTEGER NOT NULL DEFAULT 0,

  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by    UUID REFERENCES auth.users ON DELETE SET NULL,

  CONSTRAINT exam_questions_text CHECK (length(btrim(question_text)) > 0)
);

CREATE INDEX IF NOT EXISTS exam_questions_sitting_idx
  ON public.exam_questions (sitting_id, asked_on DESC, sort_order);

-- ── RLS ───────────────────────────────────────────────────────────────────
ALTER TABLE public.exam_sittings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_questions ENABLE ROW LEVEL SECURITY;

-- Cadets see published sittings only. Note this deliberately does NOT filter
-- on dates: the app decides what to surface from the window, and a sitting
-- that has just ended still needs to be readable while its questions are
-- being folded into the permanent bank.
DROP POLICY IF EXISTS "Signed-in users read published sittings" ON public.exam_sittings;
CREATE POLICY "Signed-in users read published sittings"
  ON public.exam_sittings FOR SELECT
  TO authenticated USING (is_published OR public.is_admin());

DROP POLICY IF EXISTS "Admins write sittings" ON public.exam_sittings;
CREATE POLICY "Admins write sittings"
  ON public.exam_sittings FOR ALL
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- A question is readable only if its sitting is. Without the EXISTS clause a
-- cadet could read questions belonging to an unpublished sitting by querying
-- the child table directly, which is exactly the kind of hole that makes a
-- draft feed leak before it is announced.
DROP POLICY IF EXISTS "Signed-in users read published questions" ON public.exam_questions;
CREATE POLICY "Signed-in users read published questions"
  ON public.exam_questions FOR SELECT
  TO authenticated USING (
    public.is_admin()
    OR (
      is_published
      AND EXISTS (
        SELECT 1 FROM public.exam_sittings s
        WHERE s.id = exam_questions.sitting_id AND s.is_published
      )
    )
  );

DROP POLICY IF EXISTS "Admins write questions" ON public.exam_questions;
CREATE POLICY "Admins write questions"
  ON public.exam_questions FOR ALL
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- ── Realtime, so a question posted mid-evening reaches a cadet already in
--    the app rather than waiting for their next reload. RLS applies to
--    realtime exactly as it does to a query: a client is only sent rows it
--    could have SELECTed for itself.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'exam_questions'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.exam_questions;
  END IF;
END $$;

-- ── A view the app can ask one question of: what is running today?
--    security_invoker so RLS still applies to whoever selects from it.
DROP VIEW IF EXISTS public.v_live_exam_sitting;
CREATE VIEW public.v_live_exam_sitting
WITH (security_invoker = true) AS
SELECT s.*,
       (SELECT count(*) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published)                    AS question_count,
       (SELECT count(*) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published
           AND q.asked_on = CURRENT_DATE)                                 AS today_count,
       (SELECT max(q.asked_on) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published)                    AS latest_day
FROM public.exam_sittings s
WHERE s.is_published
  AND CURRENT_DATE BETWEEN s.starts_on AND s.ends_on;

COMMENT ON VIEW public.v_live_exam_sitting IS
  'The sitting running today, if any, with its question counts. Empty most of '
  'the month, which is the normal state and not a fault.';


-- ── VERIFY ────────────────────────────────────────────────────────────────
-- SELECT count(*) FROM pg_policies WHERE tablename IN ('exam_sittings','exam_questions');
--   expect 4
-- SELECT rowsecurity FROM pg_tables WHERE tablename IN ('exam_sittings','exam_questions');
--   expect true, true
-- SELECT * FROM public.v_live_exam_sitting;
--   expect 0 rows until a sitting is published with today inside its window

-- ── Added 24 Aug 2026: what the drafting model said about its own answer ──
--  Stored so the console can put the uncertain ones in front of you and leave
--  the rest alone. Without this every drafted answer would look equally
--  trustworthy, which is the failure this whole feature has to avoid.
ALTER TABLE public.exam_questions
  ADD COLUMN IF NOT EXISTS ai_confidence TEXT
    CHECK (ai_confidence IS NULL OR ai_confidence IN ('high','medium','low')),
  ADD COLUMN IF NOT EXISTS ai_flags      TEXT,
  ADD COLUMN IF NOT EXISTS ai_model      TEXT,
  ADD COLUMN IF NOT EXISTS reviewed_at   TIMESTAMPTZ;

COMMENT ON COLUMN public.exam_questions.ai_confidence IS
  'Self-assessed by the drafting model. Anything not high, and anything with '
  'ai_flags set, is surfaced for a human read before it is trusted.';
COMMENT ON COLUMN public.exam_questions.reviewed_at IS
  'Set when an admin has actually read the drafted answer. NULL means nobody has.';

-- ── Revised 25 Aug 2026: month, not just the live window ─────────────────
--  v_live_exam_sitting only ever returned a sitting whose window contained
--  TODAY, so the August batch became invisible the moment the orals finished,
--  which is exactly when cadets studying for September want to read it.
--
--  This returns the most recent PUBLISHED sitting instead, with a flag saying
--  whether it happens to be running right now. The app shows "running now"
--  when it is and "this month" when it is not, off the same row.
DROP VIEW IF EXISTS public.v_current_exam_sitting;
CREATE VIEW public.v_current_exam_sitting
WITH (security_invoker = true) AS
SELECT s.*,
       (CURRENT_DATE BETWEEN s.starts_on AND s.ends_on)                   AS is_running,
       (SELECT count(*) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published)                    AS question_count,
       (SELECT count(*) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published
           AND q.answer_text IS NOT NULL
           AND length(btrim(q.answer_text)) > 0)                          AS answered_count,
       (SELECT count(DISTINCT q.surveyor) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published
           AND q.surveyor IS NOT NULL)                                    AS surveyor_count,
       (SELECT count(*) FROM public.exam_questions q
         WHERE q.sitting_id = s.id AND q.is_published
           AND q.asked_on = CURRENT_DATE)                                 AS today_count
FROM public.exam_sittings s
WHERE s.is_published
ORDER BY s.ends_on DESC
LIMIT 1;

COMMENT ON VIEW public.v_current_exam_sitting IS
  'The most recent published sitting, running or finished. is_running says '
  'which, so the app can label it "running now" or "this month" from one row.';

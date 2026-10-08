-- ============================================================
--  AI tutor (TEST): one row per tutor reply, for cost and usage.
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  WHAT THIS IS
--
--  A test of the Socratic tutor parked in claude-cowork/PARKED_AI_TUTOR.md,
--  open to admins and lifetime users only, with no payment path. Every reply
--  the tutor gives writes one row here, from the tutor-chat edge function
--  with the service role, carrying the token counts from response.usage and
--  the cost worked out from them.
--
--  Two jobs: the per-user daily spend cap is summed from today's rows, and the
--  real cost per session is what a price will eventually be set from.
--
--  WHO CAN READ IT
--
--  A reader sees their own rows; admins see all. Nobody inserts from the
--  browser: there is no INSERT policy, so only the service role can write.
--
--  APPLY:  python audits/sbq.py prod --file app/admin/tutor_setup.sql
--  UNDO:   DROP TABLE public.tutor_turns;
--          (record in claude-cowork/CHANGE_LEDGER.md when applied)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.tutor_turns (
  id             BIGSERIAL PRIMARY KEY,
  user_id        UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  topic          TEXT NOT NULL CHECK (topic ~ '^T[0-2][0-9]$'),
  model          TEXT NOT NULL,
  input_tokens   INT  NOT NULL DEFAULT 0,
  output_tokens  INT  NOT NULL DEFAULT 0,
  cache_write    INT  NOT NULL DEFAULT 0,
  cache_read     INT  NOT NULL DEFAULT 0,
  -- USD, from the model's list price at the time of the call. Numeric so a
  -- month of fractions of a cent adds up exactly.
  cost_usd       NUMERIC(12,6) NOT NULL DEFAULT 0,
  stop_reason    TEXT,
  -- Set when the reply was a refusal to go off topic or reveal the notes, so
  -- attempts to misuse it are visible without reading every conversation.
  flagged        BOOLEAN NOT NULL DEFAULT FALSE,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS tutor_turns_user_day_idx
  ON public.tutor_turns (user_id, created_at DESC);

ALTER TABLE public.tutor_turns ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Read own tutor turns, admins read all" ON public.tutor_turns;
CREATE POLICY "Read own tutor turns, admins read all"
  ON public.tutor_turns FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

REVOKE ALL ON public.tutor_turns FROM anon;

COMMENT ON TABLE public.tutor_turns IS
  'AI tutor test: one row per reply with token usage and cost. Written only by the tutor-chat edge function. See app/admin/tutor_setup.sql.';

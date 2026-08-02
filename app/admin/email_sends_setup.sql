-- ── Transactional email send log (duplicate protection) ────────────────────
-- send-expiry-emails picks recipients purely from date windows on profiles, so
-- running it twice in one day (the workflow has BOTH a daily schedule and a
-- manual workflow_dispatch trigger) used to send every matching customer the
-- same "your trial ends tomorrow" mail twice. cron_runs recorded the second
-- run but did nothing to prevent it.
--
-- The UNIQUE (user_id, kind, sent_on) constraint below is the actual guard:
-- the function inserts a claim row before sending, and a duplicate insert
-- fails, which it treats as "already sent today, skip".
--
-- Run once in the Supabase SQL Editor. Safe to re-run.

CREATE TABLE IF NOT EXISTS public.email_sends (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID        REFERENCES auth.users(id) ON DELETE CASCADE,
  kind       TEXT        NOT NULL,
  sent_on    DATE        NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, kind, sent_on)
);

CREATE INDEX IF NOT EXISTS email_sends_created_at_idx
  ON public.email_sends (created_at DESC);

ALTER TABLE public.email_sends ENABLE ROW LEVEL SECURITY;

-- Only admins can read it. The edge function writes with the service role,
-- which bypasses RLS, so no INSERT policy is needed for normal operation.
DROP POLICY IF EXISTS "Admins can read email_sends" ON public.email_sends;
CREATE POLICY "Admins can read email_sends"
  ON public.email_sends FOR SELECT
  USING (public.is_admin());

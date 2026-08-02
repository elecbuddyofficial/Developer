-- ── Admin-sent emails log: run once in Supabase SQL Editor ────────────────

CREATE TABLE IF NOT EXISTS public.admin_emails (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  admin_id   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  to_email   TEXT        NOT NULL,
  subject    TEXT        NOT NULL,
  message    TEXT        NOT NULL,
  sent_at    TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.admin_emails ENABLE ROW LEVEL SECURITY;

-- Admins can read the full log
DROP POLICY IF EXISTS "Admins can read admin_emails" ON public.admin_emails;
CREATE POLICY "Admins can read admin_emails"
  ON public.admin_emails FOR SELECT
  USING (public.is_admin());

-- Service role (Edge Function) inserts — bypasses RLS automatically

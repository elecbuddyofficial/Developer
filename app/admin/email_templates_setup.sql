-- ═══════════════════════════════════════════════════════════════════════════
--  Editable email templates, and the groundwork for sending to a group.
--
--  WHY. Every automated email's wording lives in TypeScript today, so changing
--  a sentence, or putting a coupon in the welcome mail, means a code change and
--  a deploy. That is the wrong shape for copy that should be edited freely.
--
--  A template row is OPTIONAL. Every function keeps its built-in default and
--  falls back to it when a row is missing, inactive, or empty. Wording living
--  in a database must never be able to stop an email going out.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. The templates ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.email_templates (
  key          TEXT PRIMARY KEY,
  label        TEXT NOT NULL,
  subject      TEXT,
  heading      TEXT,
  body_html    TEXT,
  -- Attaching a coupon is the reason this table exists. Stored as a reference
  -- rather than pasted into the body, so the send can check the code is still
  -- live and skip it rather than mail somebody a code that already expired.
  coupon_code  TEXT REFERENCES public.coupons(code) ON DELETE SET NULL,
  cta_label    TEXT,
  active       BOOLEAN NOT NULL DEFAULT false,
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by   UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admins manage email templates" ON public.email_templates;
CREATE POLICY "Admins manage email templates" ON public.email_templates
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

-- The payment receipt is deliberately NOT in this list. It states the plan, the
-- amount and the order id, which are the record of a transaction rather than
-- copy to be edited, and the functions that send it do not read templates. A
-- row here would be a control that changes nothing, which is worse than no
-- control at all.
--
-- Seeded inactive, so nothing changes until an admin edits one and turns it on.
-- The body is left empty on purpose: an empty body means "use the built in
-- wording", which is a safer default than a copy of it that silently goes stale
-- the next time the real one is improved.
INSERT INTO public.email_templates (key, label, active) VALUES
  ('welcome',          'Welcome, sent when a new account verifies',   false),
  ('trial_expiring',   'Trial ends tomorrow',                          false),
  ('trial_expired',    'Trial has ended',                              false),
  ('access_expiring',  'Paid access ends in 3 days',                   false),
  ('access_expired',   'Paid access has ended',                        false)
ON CONFLICT (key) DO NOTHING;


-- ── 2. Consent, which group sending needs and one-to-one sending does not ──
--
--  Everything sent today is transactional: a receipt, a trial warning, a reply
--  to one person. Those need no opt-out and legitimately have none.
--
--  A coupon mailed to every trial user is marketing, and that is a different
--  thing. Beyond the legal position, there is a practical one that matters
--  more here: promotional mail without an easy opt-out gets reported as spam,
--  and the domain carrying those complaints is the SAME domain that carries
--  password resets and receipts. Damaging it breaks sign-in for everybody.
--
--  So group sending checks this column, and one-to-one transactional mail
--  ignores it.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS marketing_opt_out BOOLEAN NOT NULL DEFAULT false,
  -- Lets an unsubscribe link work from an email client without signing in.
  ADD COLUMN IF NOT EXISTS unsubscribe_token TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS profiles_unsubscribe_token_key
  ON public.profiles (unsubscribe_token) WHERE unsubscribe_token IS NOT NULL;

-- Backfill a token for everyone who does not have one.
UPDATE public.profiles
   SET unsubscribe_token = encode(extensions.gen_random_bytes(16), 'hex')
 WHERE unsubscribe_token IS NULL;


-- ── 3. Who a group send would reach ───────────────────────────────────────
-- One definition, used by the recipient count shown before sending and by the
-- send itself, so the number an admin confirms is the number that receives it.
CREATE OR REPLACE FUNCTION public.email_segment(p_segment TEXT)
RETURNS TABLE (id UUID, email TEXT, full_name TEXT, unsubscribe_token TEXT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.id, p.email, p.full_name, p.unsubscribe_token
  FROM public.profiles p
  WHERE p.email IS NOT NULL
    AND COALESCE(p.marketing_opt_out, false) = false
    -- Never mail an account that has asked to be deleted.
    AND p.deletion_requested_at IS NULL
    AND CASE p_segment
      WHEN 'all' THEN true
      WHEN 'trial_active' THEN
        p.subscription_plan = 'trial'
        AND p.trial_started_at > NOW() - INTERVAL '3 days'
      WHEN 'trial_expired' THEN
        p.subscription_plan = 'trial'
        AND p.trial_started_at <= NOW() - INTERVAL '3 days'
        AND p.written_expires_at IS NULL AND p.oral_expires_at IS NULL
      WHEN 'paid_active' THEN
        p.subscription_plan = 'lifetime'
        OR p.written_expires_at > NOW() OR p.oral_expires_at > NOW()
      WHEN 'paid_expired' THEN
        p.subscription_plan <> 'lifetime'
        AND (p.written_expires_at IS NOT NULL OR p.oral_expires_at IS NOT NULL)
        AND COALESCE(p.written_expires_at, '-infinity') <= NOW()
        AND COALESCE(p.oral_expires_at, '-infinity') <= NOW()
      WHEN 'never_paid' THEN
        NOT EXISTS (SELECT 1 FROM public.payments pm
                    WHERE pm.user_id = p.id AND pm.status = 'paid')
      ELSE false
    END;
$$;

-- `authenticated` MUST be in this list. Without it any signed-in customer can
-- call this over RPC and read every user's email address and unsubscribe
-- token. It is SECURITY DEFINER, so RLS does not save you here; the execute
-- grant is the only thing standing in front of it.
REVOKE ALL ON FUNCTION public.email_segment(TEXT) FROM PUBLIC, anon, authenticated;


-- ── 4. A record of every group send ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.email_campaigns (
  id           BIGSERIAL PRIMARY KEY,
  segment      TEXT NOT NULL,
  subject      TEXT NOT NULL,
  template_key TEXT REFERENCES public.email_templates(key) ON DELETE SET NULL,
  coupon_code  TEXT,
  recipients   INTEGER NOT NULL DEFAULT 0,
  delivered    INTEGER NOT NULL DEFAULT 0,
  failed       INTEGER NOT NULL DEFAULT 0,
  status       TEXT NOT NULL DEFAULT 'sending'
               CHECK (status IN ('sending','done','failed')),
  sent_by      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  sent_by_email TEXT,
  started_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  finished_at  TIMESTAMPTZ,
  error        TEXT
);

ALTER TABLE public.email_campaigns ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admins read campaigns" ON public.email_campaigns;
CREATE POLICY "Admins read campaigns" ON public.email_campaigns
  FOR SELECT USING (public.is_admin());

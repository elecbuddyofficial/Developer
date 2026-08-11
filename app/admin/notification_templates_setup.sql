-- ═══════════════════════════════════════════════════════════════════════════
--  Notification templates, and read receipts.
--
--  TEMPLATES. A notification was title + body text, so a coupon announcement
--  meant typing the code into a sentence and hoping the reader retyped it
--  correctly on the checkout screen. `template` plus a small `meta` object lets
--  the app render the right shape: a coupon gets a code box with a copy button,
--  a link gets a real button. New shapes are a new template value and a new
--  branch in the renderer, with no migration.
--
--  READ RECEIPTS. "Read" was a single localStorage timestamp, so it was per
--  device, per browser, and invisible to the admin console. There was no way to
--  answer "did anyone actually see the coupon". notification_reads records one
--  row per person per notification, written when they open it, never on merely
--  seeing it in the list, because a badge glimpsed in passing is not readership.
--
--  NO DROP STATEMENTS IN THIS FILE. Re-running it must never cost data. This
--  project has no PITR and no stored backups.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. Template shape on the notification ──────────────────────────────────
ALTER TABLE public.notifications
  ADD COLUMN IF NOT EXISTS template TEXT NOT NULL DEFAULT 'plain',
  -- Free-form so a new template does not need a migration. Expected keys:
  --   coupon : { "code": "SUPER100", "detail": "Flat 100 off any plan",
  --              "expires": "2026-08-31" }
  --   cta    : { "label": "Open the channel", "url": "https://..." }
  ADD COLUMN IF NOT EXISTS meta JSONB NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE public.notifications DROP CONSTRAINT IF EXISTS notifications_template_check;
ALTER TABLE public.notifications ADD CONSTRAINT notifications_template_check
  CHECK (template IN ('plain', 'coupon', 'cta'));


-- ── 2. Who has read what ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.notification_reads (
  notification_id UUID NOT NULL REFERENCES public.notifications(id) ON DELETE CASCADE,
  user_id         UUID NOT NULL REFERENCES auth.users(id)          ON DELETE CASCADE,
  read_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (notification_id, user_id)
);

CREATE INDEX IF NOT EXISTS notification_reads_notif_idx
  ON public.notification_reads (notification_id, read_at DESC);

ALTER TABLE public.notification_reads ENABLE ROW LEVEL SECURITY;

-- A reader may see and record their own receipts; an admin may see everyone's.
-- Nobody can read another person's, so this cannot become a way to see who else
-- is on the platform.
DROP POLICY IF EXISTS "own or admin reads" ON public.notification_reads;
CREATE POLICY "own or admin reads" ON public.notification_reads
  FOR SELECT USING (user_id = auth.uid() OR public.is_admin());

DROP POLICY IF EXISTS "record own read" ON public.notification_reads;
CREATE POLICY "record own read" ON public.notification_reads
  FOR INSERT WITH CHECK (user_id = auth.uid());

REVOKE ALL ON public.notification_reads FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT ON public.notification_reads TO authenticated;


-- ── 3. Marking one read ────────────────────────────────────────────────────
-- A function rather than a bare insert from the client: it pins the user id to
-- the caller's own, so a modified client cannot mark a receipt on somebody
-- else's behalf and inflate the numbers.
CREATE OR REPLACE FUNCTION public.mark_notification_read(p_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN; END IF;
  INSERT INTO public.notification_reads (notification_id, user_id)
  VALUES (p_id, auth.uid())
  ON CONFLICT (notification_id, user_id) DO NOTHING;   -- first open is the read
END;
$$;

REVOKE ALL ON FUNCTION public.mark_notification_read(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.mark_notification_read(UUID) TO authenticated;


-- ── 4. What the admin console reads ────────────────────────────────────────
-- Reach is deliberately the number of accounts the notice was aimed at, not the
-- whole user base, so a notice targeted at trial users is not scored against
-- people who were never shown it.
CREATE OR REPLACE VIEW public.notification_stats AS
  SELECT
    n.id,
    n.title,
    n.type,
    n.template,
    n.target_plan,
    n.created_at,
    (SELECT count(*) FROM public.notification_reads r WHERE r.notification_id = n.id) AS reads,
    (SELECT count(*) FROM public.profiles p
      WHERE n.target_plan IS NULL OR p.subscription_plan = n.target_plan)             AS audience,
    (SELECT max(r.read_at) FROM public.notification_reads r WHERE r.notification_id = n.id) AS last_read_at
  FROM public.notifications n;

ALTER VIEW public.notification_stats SET (security_invoker = on);
REVOKE ALL ON public.notification_stats FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.notification_stats TO authenticated;

-- Who exactly, for the admin drill-down. security_invoker means the policy
-- above still applies, so a non-admin querying this sees only their own row.
CREATE OR REPLACE VIEW public.notification_readers AS
  SELECT r.notification_id, r.read_at, p.id AS user_id, p.email, p.full_name,
         p.subscription_plan
  FROM public.notification_reads r
  JOIN public.profiles p ON p.id = r.user_id;

ALTER VIEW public.notification_readers SET (security_invoker = on);
REVOKE ALL ON public.notification_readers FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.notification_readers TO authenticated;

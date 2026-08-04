-- ═══════════════════════════════════════════════════════════════════════════
--  Realtime on notifications, so a notice reaches people already in the app.
--
--  Without this, a published notice is only noticed when someone next opens
--  the app, or when the ten minute session check happens to come round. This
--  makes it arrive at once, as a small toast they can tap or ignore.
--
--  Row level security still applies to realtime exactly as it does to a query:
--  a client is only sent rows it could have SELECTed for itself. Audience
--  targeting (target_plan) is then applied client-side by nfVisible, the same
--  filter the panel and the What's new banner use, so a notice aimed at one
--  plan is never shown to another.
--
--  Re-runnable: adding a table already in the publication raises, so it is
--  guarded.
-- ═══════════════════════════════════════════════════════════════════════════

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'notifications'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
  END IF;
END $$;

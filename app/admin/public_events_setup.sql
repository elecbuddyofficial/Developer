-- ============================================================
--  Public events: admin-scheduled webinars and similar, announced
--  with an off-platform registration link.
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  WHAT THIS IS AND ISN'T
--
--  Registration happens off-platform: register_link points at wherever the
--  admin actually runs sign-ups (a form, a Zoom/Meet registration page,
--  a WhatsApp group, whatever). This table only announces that an event
--  exists and where to go, the same shape as sponsorship_notices for a
--  company's own application page. There is no in-app RSVP, no capacity,
--  no reserve function, nothing here manages seats. If a capacity-limited
--  in-app booking is ever wanted, that is a different feature built on the
--  mock_interview_slots pattern, not this table.
--
--  WHY ANON CAN READ THIS
--
--  Every other admin-controlled table in this app is read by signed-in
--  users only. This one is different on purpose: it feeds the Updates
--  panel on app/try-4875.html, which a visitor sees BEFORE signing in.
--  is_admin() already returns FALSE, not an error, for a NULL auth.uid(),
--  so granting the SELECT policy to anon as well as authenticated is
--  safe: an anonymous visitor still only ever sees is_published = true
--  rows, same as any signed-in non-admin.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   DROP TABLE public.public_events;
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.public_events (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  blurb         TEXT,                      -- optional, one line
  event_at      TIMESTAMPTZ NOT NULL,
  register_link TEXT NOT NULL,
  -- null shows under both course tabs; scoped otherwise. Same convention
  -- as coupons.applies_product and app/updates.js's own track field.
  track         TEXT CHECK (track IS NULL OR track IN ('coc', 'sponsorship')),
  is_published  BOOLEAN NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by    UUID REFERENCES auth.users ON DELETE SET NULL,

  -- The link is the source. An event without one cannot be registered for,
  -- and an unregisterable event is worse than no event.
  CONSTRAINT public_events_link CHECK (register_link ~* '^https?://')
);

-- Reads are almost always "what is coming up", soonest first.
CREATE INDEX IF NOT EXISTS public_events_when_idx
  ON public.public_events (event_at)
  WHERE is_published;

ALTER TABLE public.public_events ENABLE ROW LEVEL SECURITY;

-- anon included deliberately, see WHY ANON CAN READ THIS above.
DROP POLICY IF EXISTS "Anyone can read published public events" ON public.public_events;
CREATE POLICY "Anyone can read published public events"
  ON public.public_events FOR SELECT
  TO anon, authenticated
  USING (is_published OR public.is_admin());

DROP POLICY IF EXISTS "Admin can insert public events" ON public.public_events;
CREATE POLICY "Admin can insert public events"
  ON public.public_events FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can update public events" ON public.public_events;
CREATE POLICY "Admin can update public events"
  ON public.public_events FOR UPDATE
  USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can delete public events" ON public.public_events;
CREATE POLICY "Admin can delete public events"
  ON public.public_events FOR DELETE
  USING (public.is_admin());

COMMENT ON TABLE public.public_events IS
  'Admin-scheduled public events (webinars etc.), announced with an off-platform registration link via register_link. Read by anon as well as authenticated because it feeds the Updates panel on app/try-4875.html, shown before sign-in. No in-app RSVP or capacity tracking.';

-- ============================================================
--  Verify (expect: table present, RLS enabled, 4 policies, anon in the
--  SELECT policy's roles)
-- ============================================================
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'public_events';
-- SELECT policyname, cmd, roles FROM pg_policies WHERE tablename = 'public_events' ORDER BY cmd;
--
--  A row to prove it works, then remove it:
-- INSERT INTO public.public_events (title, blurb, event_at, register_link, track)
--   VALUES ('Test Webinar', 'Delete me', NOW() + interval '3 days', 'https://example.com/register', null);
-- DELETE FROM public.public_events WHERE title = 'Test Webinar';

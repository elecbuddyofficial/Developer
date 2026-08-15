-- ============================================================
--  Sponsorship notices: ETO sponsorship windows shown to cadets
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  WHY A SEPARATE TABLE FROM public.notifications
--
--  The existing notifications table holds one-off announcements with no
--  lifecycle: an admin posts one, everyone sees it, it stays. These rows are
--  different. They describe an application window that opens, closes, and must
--  then stop being shown, because a cadet acting on a dead deadline is the
--  whole failure this feature exists to prevent.
--
--  Putting both in one table would mean every query filtering on dates that
--  half the rows do not have, and the admin screen for one would have to skip
--  rows belonging to the other. The existing notifications control is left
--  exactly as it is.
--
--  WHY THE DATES ARE THE POINT
--
--  With opens_on and closes_on the app maintains itself: it shows what is open,
--  warns on what closes soon, previews what opens later, and drops what has
--  passed without anyone remembering to delete it.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   DROP TABLE public.sponsorship_notices;
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.sponsorship_notices (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company      TEXT NOT NULL,
  link         TEXT NOT NULL,
  opens_on     DATE NOT NULL,
  closes_on    DATE NOT NULL,
  -- ETO is the audience for this app; the others are here so a notice does not
  -- have to be left out or mislabelled when a company runs a combined drive.
  course       TEXT NOT NULL DEFAULT 'ETO'
                 CHECK (course IN ('ETO','GME','DNS','Other')),
  note         TEXT,          -- eligibility, stipend, anything short and useful
  is_published BOOLEAN NOT NULL DEFAULT TRUE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by   UUID REFERENCES auth.users ON DELETE SET NULL,

  -- A window that closes before it opens is a typo, not a notice.
  CONSTRAINT sponsorship_notices_window CHECK (closes_on >= opens_on),
  -- The link is the source. A notice without one cannot be verified by the
  -- cadet, and an unverifiable deadline is worse than no deadline.
  CONSTRAINT sponsorship_notices_link CHECK (link ~* '^https?://')
);

-- Reads are almost always "what is open now", ordered by what shuts first.
CREATE INDEX IF NOT EXISTS sponsorship_notices_window_idx
  ON public.sponsorship_notices (closes_on, opens_on)
  WHERE is_published;

ALTER TABLE public.sponsorship_notices ENABLE ROW LEVEL SECURITY;

-- Same shape as the notifications policies: any signed-in user may read,
-- only admins may write. Unpublished rows stay hidden from cadets so a notice
-- can be drafted before its window opens.
DROP POLICY IF EXISTS "Authenticated users can read sponsorship notices" ON public.sponsorship_notices;
CREATE POLICY "Authenticated users can read sponsorship notices"
  ON public.sponsorship_notices FOR SELECT
  TO authenticated USING (is_published OR public.is_admin());

DROP POLICY IF EXISTS "Admin can insert sponsorship notices" ON public.sponsorship_notices;
CREATE POLICY "Admin can insert sponsorship notices"
  ON public.sponsorship_notices FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can update sponsorship notices" ON public.sponsorship_notices;
CREATE POLICY "Admin can update sponsorship notices"
  ON public.sponsorship_notices FOR UPDATE
  USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can delete sponsorship notices" ON public.sponsorship_notices;
CREATE POLICY "Admin can delete sponsorship notices"
  ON public.sponsorship_notices FOR DELETE
  USING (public.is_admin());

COMMENT ON TABLE public.sponsorship_notices IS
  'ETO sponsorship application windows shown in the Sponsorship app Notifications tab. Entered by hand in the admin console: the link is the source of truth and no row is generated automatically. Separate from public.notifications, which holds one-off announcements with no lifecycle.';

-- ============================================================
--  Verify (expect: table present, 4 policies, RLS enabled)
-- ============================================================
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'sponsorship_notices';
-- SELECT policyname, cmd FROM pg_policies WHERE tablename = 'sponsorship_notices' ORDER BY cmd;
--
--  A row to prove it works, then remove it:
-- INSERT INTO public.sponsorship_notices (company, link, opens_on, closes_on, course, note)
--   VALUES ('Test Shipping', 'https://example.com/careers', CURRENT_DATE, CURRENT_DATE + 30, 'ETO', 'Delete me');
-- DELETE FROM public.sponsorship_notices WHERE company = 'Test Shipping';

-- ═══════════════════════════════════════════════════════════════════════════
--  Lock Maritime News behind the same entitlement as the rest of Sponsorship
--  Re-runnable. Apply AFTER maritime_news_setup.sql.
-- ═══════════════════════════════════════════════════════════════════════════
--
--  THE HOLE THIS CLOSES
--
--  maritime_news_setup.sql let any authenticated user read published stories.
--  That was right while Sponsorship is free, and wrong the moment it is sold:
--  the topic card locks in the app, but the table is still readable straight
--  from the API by anyone with a session. Every other Sponsorship module is
--  protected by encryption and a key endpoint. This one is plain rows, so the
--  lock has to live in the policy.
--
--  IT MATCHES get-sponsorship-key DELIBERATELY. Same three-part rule, so the
--  news and the course can never disagree about who is entitled:
--    * while sponsorship_paid is false, any signed-in user  (today)
--    * once it is true, only lifetime, a live trial, or paid access
--    * admins always
--
--  NOTHING CHANGES TODAY. sponsorship_paid is false, so this behaves exactly
--  as it does now. It is the switch being wired before it is flipped, which is
--  the point: nobody wants to discover the news was readable for free on the
--  day the paywall goes up.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   re-run the SELECT policy from maritime_news_setup.sql, which
--          restores "any authenticated user".
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ═══════════════════════════════════════════════════════════════════════════

/* Who may read the paid Sponsorship material, as one answer in one place.

   SECURITY DEFINER so it can read profiles and course_config regardless of
   the caller's own row-level access, and search_path pinned so it cannot be
   tricked by a caller-controlled path. STABLE, so Postgres evaluates it once
   per statement rather than once per row.

   FAILS OPEN ON THE FLAG, ON PURPOSE, and this is the opposite of the usual
   instinct. If course_config is missing or unreadable, COALESCE treats the
   course as free. Treating it as paid would lock every reader out of content
   that is currently given away, turning a transient fault into an outage. The
   worst case of failing open is giving away what is already being given
   away. */
CREATE OR REPLACE FUNCTION public.has_sponsorship_access()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT
    -- Not being sold yet: anyone signed in, exactly as today.
    NOT COALESCE((SELECT sponsorship_paid FROM public.course_config LIMIT 1), false)
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (
          p.subscription_plan = 'lifetime'
          -- A trial has always been a full preview of the whole app, so it
          -- includes this. TRIAL_DAYS is 3 in _shared/entitlements.ts; if that
          -- ever changes, change it here too.
          OR (p.trial_started_at IS NOT NULL
              AND NOW() < p.trial_started_at + INTERVAL '3 days')
          OR (p.sponsorship_expires_at IS NOT NULL AND NOW() < p.sponsorship_expires_at)
          OR (p.granted_sponsorship_expires_at IS NOT NULL
              AND NOW() < p.granted_sponsorship_expires_at)
        )
    );
$$;

COMMENT ON FUNCTION public.has_sponsorship_access() IS
  'Whether the current user may read paid Sponsorship material. Mirrors the rule in the get-sponsorship-key Edge Function so the news and the course cannot disagree. Returns true for everyone while course_config.sponsorship_paid is false, and defaults to free if that flag cannot be read, because failing closed would lock readers out of content currently given away.';

REVOKE ALL ON FUNCTION public.has_sponsorship_access() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_sponsorship_access() TO authenticated;

-- The story still has to be published and in date. The entitlement check is
-- added to those, never instead of them.
DROP POLICY IF EXISTS "Authenticated read published news" ON public.maritime_news;
CREATE POLICY "Authenticated read published news"
  ON public.maritime_news FOR SELECT
  TO authenticated USING (
    (is_published
      AND published_until >= CURRENT_DATE
      AND public.has_sponsorship_access())
    OR public.is_admin()
  );

-- ═══════════════════════════════════════════════════════════════════════════
--  Verify
-- ═══════════════════════════════════════════════════════════════════════════
-- SELECT public.has_sponsorship_access();   -- expect TRUE today (course free)
--
--  The real test has to be run AS A NON-ADMIN, because the policy's second
--  branch trusts admins and reads as working either way from the SQL editor.
--  That is the trap recorded in CHANGE_LEDGER.md which hid two bugs for weeks.
--
--  To prove the lock actually bites before the paywall goes live:
--    UPDATE public.course_config SET sponsorship_paid = true;
--    -- as a signed-in user with no sponsorship access, this must return 0:
--    SELECT count(*) FROM public.maritime_news;
--    -- and put it back:
--    UPDATE public.course_config SET sponsorship_paid = false;

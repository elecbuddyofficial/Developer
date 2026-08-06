-- ═══════════════════════════════════════════════════════════════════════════
--  Safety net for the welcome email.
--
--  WHY. The welcome email is triggered by the browser right after signup, and
--  the browser is not a reliable place to trigger anything. Two real failures
--  on production, both silent:
--
--    1. The page calls fetch() and then location.replace() on the next line.
--       Navigation cancels the in-flight request. Only 2 of 12 signups ever
--       reached the endpoint.
--    2. The send was gated on `type=signup` appearing in the URL hash. Mail
--       providers PREFETCH confirmation links to scan them, which spends the
--       single-use token, so the person lands on an "expired" error instead.
--       Their account is confirmed and they sign in fine, but they were never
--       welcomed.
--
--  Both are fixed client side. This exists because they were invisible for
--  days, and because no client-side fix covers a browser that is closed
--  instantly or loses connectivity. A sweep that reads the database and does
--  not care what the browser did cannot fail the same way.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════


-- Accounts that should have been welcomed and were not.
--
-- Lives in SQL rather than the edge function because it needs auth.users, and
-- because the sweep and any admin-facing count must agree on the definition.
CREATE OR REPLACE FUNCTION public.welcome_email_backlog(p_hours INTEGER DEFAULT 24)
RETURNS TABLE (id UUID, email TEXT, full_name TEXT, created_at TIMESTAMPTZ)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.id, p.email, p.full_name, p.created_at
  FROM public.profiles p
  JOIN auth.users u ON u.id = p.id
  WHERE p.welcome_email_sent_at IS NULL
    AND p.email IS NOT NULL
    -- Confirmed only. An unverified address must never be mailed: it may not
    -- belong to the person who typed it, and mailing it is what generates the
    -- bounces that damage the sending domain.
    AND u.email_confirmed_at IS NOT NULL
    -- Never mail an account that has asked to be deleted.
    AND p.deletion_requested_at IS NULL
    -- A window, not the whole table. Welcoming somebody who signed up three
    -- weeks ago is not a welcome, it is a surprise. It also means deploying
    -- this cannot accidentally mail the entire back catalogue.
    AND p.created_at > NOW() - (p_hours || ' hours')::INTERVAL
  ORDER BY p.created_at;
$$;

-- `authenticated` MUST be in this list. This is SECURITY DEFINER and returns
-- email addresses, so the execute grant is the only thing in front of it.
-- Leaving `authenticated` out would let any signed-in customer read other
-- people's addresses over RPC, which is exactly the mistake made on
-- email_segment in this same codebase.
REVOKE ALL ON FUNCTION public.welcome_email_backlog(INTEGER) FROM PUBLIC, anon, authenticated;

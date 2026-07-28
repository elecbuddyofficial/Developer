-- ═══════════════════════════════════════════════════════════════════════════
--  SECURITY FIX. Run this in the Supabase SQL Editor.
--
--  Fixes two issues found during the audit:
--
--  1. CRITICAL: any signed-in user could grant themselves free access.
--     The "Users can update own profile" policy allows a user to update their
--     own row, and Postgres RLS is row-level, not column-level. The only
--     trigger on the table guarded is_admin and nothing else, so a user could
--     open the browser console and run:
--
--       supabase.from('profiles')
--         .update({ subscription_plan: 'lifetime' })
--         .eq('id', <their own id>)
--
--     and get permanent free access. Payments bypassed entirely.
--
--  2. HIGH: two disconnected sources of truth for "who is an admin".
--     public.is_admin() reads the admin_users table, but the Team Admins tab
--     writes profiles.is_admin. So an admin added through the panel is not
--     recognised by any RLS policy that calls is_admin(), and an admin
--     removed through the panel keeps whatever admin_users row they had.
--     profiles.is_admin becomes the single authority below.
--
--  Safe to re-run.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── Step 1: make sure nobody loses admin when the authority changes ───────
-- Anyone currently trusted via admin_users is promoted in profiles first, so
-- switching is_admin() over cannot lock an existing admin out.
UPDATE public.profiles p
   SET is_admin = TRUE
  FROM public.admin_users a
 WHERE a.user_id = p.id
   AND COALESCE(p.is_admin, FALSE) = FALSE;

-- ── Step 2: is_admin() now reads profiles ─────────────────────────────────
-- SECURITY DEFINER runs as the function owner, which also owns profiles, and
-- a table owner bypasses that table's RLS. That is what stops this recursing
-- through the profiles SELECT policy (which itself calls is_admin()).
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT p.is_admin FROM public.profiles p WHERE p.id = auth.uid()),
    FALSE
  );
$$;

-- ── Step 3: guard every privileged column, not just is_admin ──────────────
-- auth.uid() is NULL when the caller is the service role, which is how the
-- Edge Functions (payment verification, webhook, coupon redemption, refunds)
-- legitimately set a plan. Those keep working. A signed-in non-admin has any
-- change to a privileged column silently reverted to its previous value,
-- while ordinary fields like topic_progress stay writable.
CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    NEW.is_admin                := OLD.is_admin;
    NEW.subscription_plan       := OLD.subscription_plan;
    NEW.subscription_expires_at := OLD.subscription_expires_at;
    NEW.trial_started_at        := OLD.trial_started_at;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS guard_is_admin ON public.profiles;
DROP TRIGGER IF EXISTS guard_privileged_fields ON public.profiles;
CREATE TRIGGER guard_privileged_fields
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_privileged_fields();

-- The old single-purpose function is now unused.
DROP FUNCTION IF EXISTS public.protect_is_admin();

-- ── Step 4: verify ────────────────────────────────────────────────────────
-- Should list your admins, sourced from profiles.
SELECT id, email, is_admin
  FROM public.profiles
 WHERE is_admin = TRUE
 ORDER BY email;

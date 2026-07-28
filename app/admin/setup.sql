-- ── Admin Setup: Run this once in the Supabase SQL Editor ──────────────────
-- After running, create the 5 accounts in Auth > Users > Add user

-- 1. Add is_admin and email columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS email TEXT;

-- 2. Backfill email for all existing users
UPDATE public.profiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id AND p.email IS NULL;

-- 3. Update handle_new_user trigger:
--    saves email, auto-grants admin to the 5 team emails on first signup
--    also inserts into admin_users so is_admin() works immediately
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  _admin_emails TEXT[] := ARRAY[
    'elecbuddyofficial@gmail.com',
    'adith@elec-buddy.com',
    'blesson@elec-buddy.com',
    'rahul@elec-buddy.com',
    'yadh@elec-buddy.com'
  ];
  _is_admin BOOLEAN;
BEGIN
  _is_admin := NEW.email = ANY(_admin_emails);

  INSERT INTO public.profiles (id, full_name, email, trial_started_at, subscription_plan, is_admin)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    NOW(),
    'trial',
    _is_admin
  )
  ON CONFLICT (id) DO UPDATE SET
    email    = EXCLUDED.email,
    is_admin = EXCLUDED.is_admin OR public.profiles.is_admin;

  IF _is_admin THEN
    INSERT INTO public.admin_users (user_id) VALUES (NEW.id)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Separate table for admin IDs (breaks RLS recursion with profiles)
CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE
);
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authenticated users can read admin list"
  ON public.admin_users FOR SELECT TO authenticated USING (TRUE);
CREATE POLICY "Admin can insert admin users"
  ON public.admin_users FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin can delete admin users"
  ON public.admin_users FOR DELETE USING (public.is_admin());

-- Helper function reads from admin_users (no recursion with profiles SELECT policy)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- 5. Trigger: prevents any non-admin from flipping their own is_admin flag
CREATE OR REPLACE FUNCTION public.protect_is_admin()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.is_admin IS DISTINCT FROM NEW.is_admin AND NOT public.is_admin() THEN
    NEW.is_admin := OLD.is_admin;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS guard_is_admin ON public.profiles;
CREATE TRIGGER guard_is_admin
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_is_admin();

-- 6. Allow admin to read ALL profiles (not just their own)
CREATE POLICY "Admin can read all profiles"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

-- 7. Allow admin to update ANY profile
CREATE POLICY "Admin can update all profiles"
  ON public.profiles FOR UPDATE
  USING (public.is_admin());

-- 8. Notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title      TEXT NOT NULL,
  body       TEXT NOT NULL,
  type       TEXT CHECK (type IN ('info','warning','update','deadline')) DEFAULT 'info',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users ON DELETE SET NULL
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read notifications"
  ON public.notifications FOR SELECT
  TO authenticated USING (TRUE);

CREATE POLICY "Admin can insert notifications"
  ON public.notifications FOR INSERT
  WITH CHECK (public.is_admin());

CREATE POLICY "Admin can delete notifications"
  ON public.notifications FOR DELETE
  USING (public.is_admin());

-- 9. Grant admin to the 5 team members who are already registered
UPDATE public.profiles
SET is_admin = TRUE
WHERE email IN (
  'elecbuddyofficial@gmail.com',
  'adith@elec-buddy.com',
  'blesson@elec-buddy.com',
  'rahul@elec-buddy.com',
  'yadh@elec-buddy.com'
);

-- 10. Populate admin_users table from confirmed admin profiles
INSERT INTO public.admin_users (user_id)
SELECT p.id FROM public.profiles p
JOIN auth.users u ON p.id = u.id
WHERE u.email IN (
  'elecbuddyofficial@gmail.com',
  'adith@elec-buddy.com',
  'blesson@elec-buddy.com',
  'rahul@elec-buddy.com',
  'yadh@elec-buddy.com'
)
ON CONFLICT DO NOTHING;

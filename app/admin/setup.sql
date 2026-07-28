-- ── Admin Setup: Run this once in the Supabase SQL Editor ──────────────────

-- 1. Add is_admin and email columns to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS email TEXT;

-- 2. Backfill email for all existing users
UPDATE public.profiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id AND p.email IS NULL;

-- 3. Update handle_new_user trigger to save email on every new signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, trial_started_at, subscription_plan)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    NOW(),
    'trial'
  )
  ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Helper function to check admin status (security definer bypasses RLS)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE id = auth.uid()),
    FALSE
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- 5. Allow admin to read ALL profiles (not just their own)
CREATE POLICY "Admin can read all profiles"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

-- 6. Allow admin to update ANY profile (for granting access)
CREATE POLICY "Admin can update all profiles"
  ON public.profiles FOR UPDATE
  USING (public.is_admin());

-- 7. Notifications table
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

-- 8. Set yourself as admin (run last, after everything above)
UPDATE public.profiles
SET is_admin = TRUE
WHERE email = 'blessonjoji472@gmail.com';

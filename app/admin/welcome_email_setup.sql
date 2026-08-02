-- Welcome email: one-shot send tracking ────────────────────────────────────
-- send-welcome-email claims a send by stamping this column (compare-and-swap
-- on IS NULL), so a retried client call — or anyone hitting the endpoint
-- with a guessed user_id — can never trigger more than one send per account.
-- Run this once in the Supabase SQL Editor before deploying send-welcome-email.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS welcome_email_sent_at TIMESTAMPTZ;

-- Extend the privilege guard to the new column, in the same script that adds
-- it — the rule pricing_v2_setup.sql established after plan_scope was briefly
-- left unguarded. Impact here is far smaller than plan_scope (at worst a
-- duplicate welcome email, and only inside the 10-minute window that
-- send-welcome-email enforces against trial_started_at, which is itself
-- guarded) but a privileged column nobody can self-edit is the invariant
-- worth keeping, rather than re-deciding it per column.
CREATE OR REPLACE FUNCTION public.protect_privileged_fields()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.uid() IS NOT NULL AND NOT public.is_admin() THEN
    NEW.is_admin                := OLD.is_admin;
    NEW.subscription_plan       := OLD.subscription_plan;
    NEW.subscription_expires_at := OLD.subscription_expires_at;
    NEW.trial_started_at        := OLD.trial_started_at;
    NEW.plan_scope              := OLD.plan_scope;
    NEW.welcome_email_sent_at   := OLD.welcome_email_sent_at;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
-- Trigger guard_privileged_fields already binds by name; no re-CREATE needed.

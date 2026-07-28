-- ── Payments hardening + refunds + audit log ──────────────────────────────
-- Run once in the Supabase SQL Editor. Safe to re-run.

-- ── 1. Refund columns on payments ─────────────────────────────────────────
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS razorpay_refund_id TEXT;
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS refund_amount      INTEGER;
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS refunded_at        TIMESTAMPTZ;

-- The original CHECK only allowed created/paid/failed, so a refund could not
-- be recorded at all. Widen it to include refunded.
ALTER TABLE public.payments DROP CONSTRAINT IF EXISTS payments_status_check;
ALTER TABLE public.payments ADD CONSTRAINT payments_status_check
  CHECK (status IN ('created','paid','failed','refunded'));

-- The webhook looks payments up by razorpay_payment_id on refund events.
CREATE INDEX IF NOT EXISTS payments_razorpay_payment_id_idx
  ON public.payments (razorpay_payment_id);
CREATE INDEX IF NOT EXISTS payments_user_id_idx
  ON public.payments (user_id);

-- ── 2. Webhook event log (replay protection + debugging) ──────────────────
CREATE TABLE IF NOT EXISTS public.webhook_events (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id    TEXT        UNIQUE,
  event_type  TEXT        NOT NULL,
  payload     JSONB,
  processed   BOOLEAN     DEFAULT FALSE,
  error       TEXT,
  received_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS webhook_events_received_at_idx
  ON public.webhook_events (received_at DESC);

ALTER TABLE public.webhook_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can read webhook_events" ON public.webhook_events;
CREATE POLICY "Admins can read webhook_events"
  ON public.webhook_events FOR SELECT
  USING (public.is_admin());

-- ── 3. Admin activity log ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.admin_actions (
  id             UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id       UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  admin_email    TEXT,
  action         TEXT        NOT NULL,
  target_user_id UUID,
  target_email   TEXT,
  details        JSONB,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS admin_actions_created_at_idx
  ON public.admin_actions (created_at DESC);
CREATE INDEX IF NOT EXISTS admin_actions_target_user_idx
  ON public.admin_actions (target_user_id);

ALTER TABLE public.admin_actions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can read admin_actions" ON public.admin_actions;
CREATE POLICY "Admins can read admin_actions"
  ON public.admin_actions FOR SELECT
  USING (public.is_admin());

-- Admins log their own actions from the panel. admin_id is forced to the
-- caller's own id so one admin cannot write log entries attributed to another.
DROP POLICY IF EXISTS "Admins can log own actions" ON public.admin_actions;
CREATE POLICY "Admins can log own actions"
  ON public.admin_actions FOR INSERT
  WITH CHECK (public.is_admin() AND admin_id = auth.uid());

-- ── 4. Cron run log (automation health) ───────────────────────────────────
CREATE TABLE IF NOT EXISTS public.cron_runs (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  job        TEXT        NOT NULL,
  ok         BOOLEAN     DEFAULT TRUE,
  sent       INTEGER     DEFAULT 0,
  failed     INTEGER     DEFAULT 0,
  skipped    INTEGER     DEFAULT 0,
  error      TEXT,
  ran_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS cron_runs_ran_at_idx ON public.cron_runs (ran_at DESC);

ALTER TABLE public.cron_runs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can read cron_runs" ON public.cron_runs;
CREATE POLICY "Admins can read cron_runs"
  ON public.cron_runs FOR SELECT
  USING (public.is_admin());

-- ── 5. Coupons ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.coupons (
  code            TEXT        PRIMARY KEY,
  plan            TEXT        NOT NULL CHECK (plan IN ('starter','standard','pro','lifetime')),
  months          INTEGER,
  max_redemptions INTEGER     DEFAULT 1,
  times_redeemed  INTEGER     DEFAULT 0,
  expires_at      TIMESTAMPTZ,
  note            TEXT,
  created_by      UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  active          BOOLEAN     DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS public.coupon_redemptions (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  code        TEXT        REFERENCES public.coupons(code) ON DELETE CASCADE,
  user_id     UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  redeemed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (code, user_id)
);

ALTER TABLE public.coupons            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupon_redemptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins manage coupons" ON public.coupons;
CREATE POLICY "Admins manage coupons"
  ON public.coupons FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admins read redemptions" ON public.coupon_redemptions;
CREATE POLICY "Admins read redemptions"
  ON public.coupon_redemptions FOR SELECT
  USING (public.is_admin());

DROP POLICY IF EXISTS "Users read own redemptions" ON public.coupon_redemptions;
CREATE POLICY "Users read own redemptions"
  ON public.coupon_redemptions FOR SELECT
  USING (auth.uid() = user_id);

-- ── 6. Notification targeting ─────────────────────────────────────────────
-- NULL/'all' keeps every existing notification behaving exactly as before.
ALTER TABLE public.notifications ADD COLUMN IF NOT EXISTS target_plan TEXT;

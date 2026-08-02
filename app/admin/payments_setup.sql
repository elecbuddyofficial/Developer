-- ── Payments table: run once in Supabase SQL Editor ────────────────────────

CREATE TABLE IF NOT EXISTS public.payments (
  id                      UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id                 UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  razorpay_order_id       TEXT        UNIQUE NOT NULL,
  razorpay_payment_id     TEXT,
  plan                    TEXT        NOT NULL CHECK (plan IN ('starter','standard','pro')),
  amount                  INTEGER     NOT NULL,
  currency                TEXT        DEFAULT 'INR',
  status                  TEXT        DEFAULT 'created' CHECK (status IN ('created','paid','failed')),
  subscription_starts_at  TIMESTAMPTZ,
  subscription_expires_at TIMESTAMPTZ,
  created_at              TIMESTAMPTZ DEFAULT NOW(),
  paid_at                 TIMESTAMPTZ
);

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Users can read their own payments
DROP POLICY IF EXISTS "Users can read own payments" ON public.payments;
CREATE POLICY "Users can read own payments"
  ON public.payments FOR SELECT
  USING (auth.uid() = user_id);

-- Admins can read all payments
DROP POLICY IF EXISTS "Admins can read all payments" ON public.payments;
CREATE POLICY "Admins can read all payments"
  ON public.payments FOR SELECT
  USING (public.is_admin());

-- Service role (Edge Functions) can insert and update — bypasses RLS automatically

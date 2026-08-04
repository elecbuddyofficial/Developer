-- ═══════════════════════════════════════════════════════════════════════════
--  Referral and rewards: schema and configuration.
--
--  PHASE 1. This creates the tables, the config, the codes and the tracking.
--  It pays out NOTHING. `referral_config.enabled` ships false, and no reward
--  is issued anywhere until the payout functions land and that flag is turned
--  on. Everything here is safe to apply to a live database.
--
--  EVERY NUMBER LIVES IN THE DATABASE, not in code. The reward amounts, the
--  caps, the milestone rules, the credit expiry and the fraud switches are all
--  rows an admin edits. Nothing about this programme should need a deploy to
--  change, because the whole point of the numbers is that they will be wrong
--  at first and need tuning against real behaviour.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. The single row of settings ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.referral_config (
  id                          BOOLEAN PRIMARY KEY DEFAULT true CHECK (id),  -- exactly one row
  enabled                     BOOLEAN NOT NULL DEFAULT false,

  -- Sign-up reward, paid when a referred account verifies.
  signup_reward_referrer      INTEGER NOT NULL DEFAULT 1000,   -- paise
  signup_reward_new_user      INTEGER NOT NULL DEFAULT 1000,   -- paise
  -- THE SINGLE MOST IMPORTANT SWITCH ON THIS TABLE.
  -- With this true, the referrer's sign-up credit is held until the person
  -- they referred actually pays. With it false, verifying an email is enough,
  -- and a disposable address costs nothing to obtain: 200 throwaway sign-ups
  -- would earn a referrer 2000 rupees of credit for zero revenue. Defaults to
  -- true deliberately. Turning it off is a decision, not an oversight.
  signup_reward_after_payment BOOLEAN NOT NULL DEFAULT true,
  -- A second belt: caps how many unpaid sign-ups can ever pay out, even if the
  -- switch above is off.
  max_signup_rewards          INTEGER NOT NULL DEFAULT 5,

  -- Paid referrals.
  max_paid_referrals          INTEGER NOT NULL DEFAULT 5,

  -- Milestones. Zero disables either one.
  milestone_a_referrals       INTEGER NOT NULL DEFAULT 3,
  milestone_a_months          INTEGER NOT NULL DEFAULT 1,
  milestone_b_referrals       INTEGER NOT NULL DEFAULT 5,
  milestone_b_type            TEXT    NOT NULL DEFAULT 'credits'
                              CHECK (milestone_b_type IN ('credits','months','none')),
  milestone_b_credits         INTEGER NOT NULL DEFAULT 50000,  -- paise
  milestone_b_months          INTEGER NOT NULL DEFAULT 2,

  -- Credits.
  credit_expiry_days          INTEGER NOT NULL DEFAULT 365,    -- 0 = never expires
  -- Credits are applied AFTER the existing best-of rule (sale versus coupon,
  -- never compounded). Without a ceiling a large balance plus a deep coupon
  -- could take an order to the 1 rupee floor, so this caps how much of any one
  -- order credits may cover.
  credit_max_percent          INTEGER NOT NULL DEFAULT 50 CHECK (credit_max_percent BETWEEN 0 AND 100),

  -- Fraud switches.
  block_self_referral         BOOLEAN NOT NULL DEFAULT true,
  block_repeat_email          BOOLEAN NOT NULL DEFAULT true,
  -- OFF by default, and this is a policy question rather than a technical one.
  -- The Privacy Policy states that the device id is a random value that
  -- "cannot be used to recognise you under any other account". Using it to
  -- detect duplicate accounts is precisely recognising someone across
  -- accounts. Turning this on means updating that wording first.
  block_same_device           BOOLEAN NOT NULL DEFAULT false,

  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_by                  UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

INSERT INTO public.referral_config (id) VALUES (true) ON CONFLICT (id) DO NOTHING;

ALTER TABLE public.referral_config ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admins manage referral config" ON public.referral_config;
CREATE POLICY "Admins manage referral config" ON public.referral_config
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
-- Readers need to know only whether it is on, which the edge function tells
-- them. The amounts are not readable client-side, so nobody can work out the
-- payout table without being told.


-- ── 2. Reward per price point ──────────────────────────────────────────────
-- A row per list price rather than a formula, because the tiers are a
-- commercial decision and will be edited by hand.
CREATE TABLE IF NOT EXISTS public.referral_tiers (
  base_amount      INTEGER PRIMARY KEY,   -- paise, matches pricing_plans.base_amount
  buyer_discount   INTEGER NOT NULL,      -- paise off for the person being referred
  referrer_credit  INTEGER NOT NULL,      -- paise credited to the referrer
  counts_to_milestone BOOLEAN NOT NULL DEFAULT true,
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.referral_tiers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Admins manage referral tiers" ON public.referral_tiers;
CREATE POLICY "Admins manage referral tiers" ON public.referral_tiers
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Seeded from the agreed table. Every live price is covered; 149900 is shared
-- by Oral 12 month and Both 6 month, which is why there are eight rows for
-- nine plans.
INSERT INTO public.referral_tiers (base_amount, buyer_discount, referrer_credit) VALUES
  ( 49900,  5000,  5000),
  ( 69900,  7500,  7500),
  ( 79900,  7500,  7500),
  ( 89900, 10000, 12500),
  ( 99900, 10000, 12500),
  (129900, 15000, 20000),
  (149900, 15000, 20000),
  (269900, 20000, 30000)
ON CONFLICT (base_amount) DO NOTHING;


-- ── 3. One code per user ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.referral_codes (
  user_id    UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  code       TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS referral_codes_code_idx ON public.referral_codes (code);

ALTER TABLE public.referral_codes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users read own referral code" ON public.referral_codes;
CREATE POLICY "Users read own referral code" ON public.referral_codes
  FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Admins read referral codes" ON public.referral_codes;
CREATE POLICY "Admins read referral codes" ON public.referral_codes
  FOR SELECT USING (public.is_admin());
-- No INSERT policy at all: codes are minted by a SECURITY DEFINER function so
-- nobody can choose their own, or mint one for somebody else.


-- ── 4. The referral itself ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.referrals (
  id                 BIGSERIAL PRIMARY KEY,
  referrer_id        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  referred_id        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  -- Kept alongside the id so a deleted account does not erase the referrer's
  -- history, the same reasoning as payer_email on payments.
  referred_email_hash TEXT,
  code               TEXT,

  status             TEXT NOT NULL DEFAULT 'signed_up'
                     CHECK (status IN ('signed_up','verified','payment_pending','paid','rewarded','cancelled','expired')),

  payment_id         UUID REFERENCES public.payments(id) ON DELETE SET NULL,
  plan_amount        INTEGER,   -- paise, list price of what they bought
  buyer_discount     INTEGER,   -- paise actually taken off
  referrer_credit    INTEGER,   -- paise actually credited

  counts_to_cap      BOOLEAN NOT NULL DEFAULT false,   -- set when it reaches 'paid'
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- One referral per referred person, full stop. This is what stops the same
-- account being claimed twice by two different referrers.
CREATE UNIQUE INDEX IF NOT EXISTS referrals_referred_once
  ON public.referrals (referred_id) WHERE referred_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS referrals_referrer_idx ON public.referrals (referrer_id, status);

ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users read own referrals" ON public.referrals;
CREATE POLICY "Users read own referrals" ON public.referrals
  FOR SELECT USING (auth.uid() = referrer_id);
DROP POLICY IF EXISTS "Admins read referrals" ON public.referrals;
CREATE POLICY "Admins read referrals" ON public.referrals
  FOR SELECT USING (public.is_admin());


-- ── 5. The credit wallet, as a ledger ──────────────────────────────────────
-- Entries, never a running total. A balance you can only reach by summing
-- rows cannot silently drift, and every rupee has a reason and a date attached.
CREATE TABLE IF NOT EXISTS public.credit_ledger (
  id          BIGSERIAL PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  amount      INTEGER NOT NULL,        -- paise, positive to grant, negative to spend
  reason      TEXT NOT NULL,           -- signup_referrer, signup_new_user, referral_paid, milestone, redeemed, expired, admin_adjust
  referral_id BIGINT REFERENCES public.referrals(id) ON DELETE SET NULL,
  payment_id  UUID REFERENCES public.payments(id) ON DELETE SET NULL,
  -- Pending entries do not count towards a spendable balance. This is how the
  -- referrer's sign-up credit is held until the person they referred pays.
  pending     BOOLEAN NOT NULL DEFAULT false,
  expires_at  TIMESTAMPTZ,
  note        TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS credit_ledger_user_idx ON public.credit_ledger (user_id, created_at DESC);

ALTER TABLE public.credit_ledger ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users read own credits" ON public.credit_ledger;
CREATE POLICY "Users read own credits" ON public.credit_ledger
  FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Admins read credits" ON public.credit_ledger;
CREATE POLICY "Admins read credits" ON public.credit_ledger
  FOR SELECT USING (public.is_admin());
-- No write policy for anyone. Every entry is written by a SECURITY DEFINER
-- function reachable only by the service role, so a balance cannot be typed
-- into existence from a browser.


-- ── 6. Spendable balance ───────────────────────────────────────────────────
-- Excludes pending entries and anything past its expiry, so the number a
-- reader sees is what they can actually spend today.
CREATE OR REPLACE FUNCTION public.credit_balance(p_user UUID)
RETURNS INTEGER
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(SUM(amount), 0)::INTEGER
  FROM public.credit_ledger
  WHERE user_id = p_user
    AND pending = false
    AND (expires_at IS NULL OR expires_at > NOW());
$$;


-- ── 7. Minting a code ──────────────────────────────────────────────────────
-- Server side so nobody picks their own, and unambiguous by construction: the
-- alphabet omits O, 0, I and 1 because these get read off a phone screen and
-- typed by someone else.
CREATE OR REPLACE FUNCTION public.mint_referral_code(p_user UUID)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _existing TEXT;
  _alphabet TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  _code TEXT;
  _try INT := 0;
BEGIN
  SELECT code INTO _existing FROM public.referral_codes WHERE user_id = p_user;
  IF _existing IS NOT NULL THEN RETURN _existing; END IF;

  LOOP
    _try := _try + 1;
    _code := '';
    FOR i IN 1..7 LOOP
      _code := _code || substr(_alphabet, 1 + floor(random() * length(_alphabet))::INT, 1);
    END LOOP;
    BEGIN
      INSERT INTO public.referral_codes (user_id, code) VALUES (p_user, _code);
      RETURN _code;
    EXCEPTION WHEN unique_violation THEN
      IF _try > 12 THEN RAISE EXCEPTION 'could_not_mint_referral_code'; END IF;
    END;
  END LOOP;
END;
$$;

REVOKE ALL ON FUNCTION public.mint_referral_code(UUID) FROM PUBLIC, anon, authenticated;
-- Takes a user id, so leaving it open to `authenticated` would let anyone read
-- anyone else's balance. Reachable only by the service role.
REVOKE ALL ON FUNCTION public.credit_balance(UUID) FROM PUBLIC, anon, authenticated;


-- ── 8. What an admin looks at ──────────────────────────────────────────────
CREATE OR REPLACE VIEW public.referral_summary
WITH (security_invoker = on) AS
SELECT
  r.referrer_id,
  p.email                                             AS referrer_email,
  count(*)                                            AS total_referrals,
  count(*) FILTER (WHERE r.status IN ('paid','rewarded'))            AS paid_referrals,
  count(*) FILTER (WHERE r.status IN ('signed_up','verified'))       AS pending_referrals,
  COALESCE(sum(r.buyer_discount)  FILTER (WHERE r.status IN ('paid','rewarded')), 0) AS discounts_given,
  COALESCE(sum(r.referrer_credit) FILTER (WHERE r.status IN ('paid','rewarded')), 0) AS credits_issued,
  COALESCE(sum(r.plan_amount)     FILTER (WHERE r.status IN ('paid','rewarded')), 0) AS revenue_influenced
FROM public.referrals r
LEFT JOIN public.profiles p ON p.id = r.referrer_id
GROUP BY r.referrer_id, p.email;

REVOKE ALL ON public.referral_summary FROM anon;

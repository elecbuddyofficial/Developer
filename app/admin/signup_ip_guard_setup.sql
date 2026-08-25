-- ═══════════════════════════════════════════════════════════════════════════
--  Signup IP guard: catch a second trial taken from an address whose first
--  trial has already run out.
--
--  WHY THIS, WHEN signup_guard_setup.sql ALREADY EXISTS
--
--  That guard is good at what it does: an allowlist of providers, a review
--  queue for everything else, the trial clock paused while pending, tombstones
--  so delete-and-retry cannot mint a fresh trial, and a hard refusal for the
--  Gmail dot and plus trick. What it cannot see is the same person coming back
--  with a genuinely different mailbox, because nothing in the system has ever
--  recorded WHERE a signup came from.
--
--  A scan on 25 Aug 2026 found trishalsingh07@ and trishaltumear@ sharing one
--  IP, the second created three days after the first, which is the day the
--  first trial expired. It was only visible because both happened to still
--  have a live session; auth.sessions keeps current sessions, not history, so
--  the evidence for that pattern normally evaporates. Recording it is the whole
--  point of this file.
--
--  THE SIGNAL, AND WHY IT IS NARROW ON PURPOSE
--
--  Not "more than one account from this IP". Cadets share college, hostel and
--  ship networks, and the same scan found two genuine students one day apart on
--  one college address. Flagging that trains everyone to ignore the flag.
--
--  The pattern that actually means abuse is a NEW trial from an address whose
--  PREVIOUS trial had already expired. Nobody legitimately does that. Two
--  students signing up in the same week do not, because neither trial has run
--  out yet.
--
--  HOLD, DO NOT REFUSE, which is the same choice the existing guard made. A
--  false positive costs a real cadet a wait and one admin click. A hard refusal
--  costs them the sale, and the ways to be wrong here (shared campus NAT, a
--  carrier recycling addresses, one family, one ship) are all real.
--
--  WHERE THE IP COMES FROM
--
--  Not the client, which can say anything it likes. Supabase writes the real
--  address into auth.sessions when the session is created, so this hangs off
--  that insert. It means the record lands seconds after signup rather than
--  during it, which is fine: the account is held before it has done anything.
--
--  APPLY:  paste into the Supabase SQL editor and run. Re-runnable.
--  UNDO:   DROP TRIGGER eb_capture_signup_ip_trg ON auth.sessions;
--          DROP FUNCTION public.eb_capture_signup_ip();
--          DROP TABLE public.signup_ips;
--          (record in claude-cowork/CHANGE_LEDGER.md)
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. Where each account first appeared from ──────────────────────────────
CREATE TABLE IF NOT EXISTS public.signup_ips (
  user_id     UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  ip          INET NOT NULL,
  user_agent  TEXT,
  first_seen  TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- What the check made of it at the time. Kept so a later change of threshold
  -- does not silently rewrite history.
  verdict     TEXT NOT NULL DEFAULT 'clean'
              CHECK (verdict IN ('clean', 'held', 'skipped')),
  matched     UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

COMMENT ON TABLE public.signup_ips IS
  'First observed address per account, captured from auth.sessions rather than '
  'from the client. One row per user, never updated, so it records where an '
  'account STARTED and not where it has been since.';

CREATE INDEX IF NOT EXISTS signup_ips_ip_idx ON public.signup_ips (ip, first_seen);

ALTER TABLE public.signup_ips ENABLE ROW LEVEL SECURITY;

-- Admins only. A cadet has no business reading anybody's address, including
-- their own, and nothing in the app needs it.
DROP POLICY IF EXISTS "Admins read signup ips" ON public.signup_ips;
CREATE POLICY "Admins read signup ips"
  ON public.signup_ips FOR SELECT TO authenticated USING (public.is_admin());


-- ── 2. Capture, and hold when the pattern matches ──────────────────────────
CREATE OR REPLACE FUNCTION public.eb_capture_signup_ip()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_prior   UUID;
  v_created TIMESTAMPTZ;
  v_status  TEXT;
BEGIN
  -- Nothing to record without an address.
  IF NEW.ip IS NULL THEN RETURN NEW; END IF;

  -- One row per account, and only for a genuinely new one. A returning user
  -- signing in from a café is not a signup, and overwriting the original would
  -- destroy the only fact this table exists to keep.
  IF EXISTS (SELECT 1 FROM public.signup_ips WHERE user_id = NEW.user_id) THEN
    RETURN NEW;
  END IF;

  SELECT created_at, signup_status INTO v_created, v_status
    FROM public.profiles WHERE id = NEW.user_id;

  -- Only within a few minutes of the account being created. Beyond that this
  -- is an ordinary sign-in and says nothing about where the account began.
  IF v_created IS NULL OR NEW.created_at > v_created + interval '10 minutes' THEN
    RETURN NEW;
  END IF;

  /* The pattern: an EARLIER account from this same address whose trial had
     ALREADY expired before this one was created.

     Deliberately not "any other account here". Two cadets on one campus
     network in the same week are both inside their trials, so neither matches,
     and that is exactly the false positive worth avoiding. */
  SELECT si.user_id INTO v_prior
  FROM public.signup_ips si
  JOIN public.profiles p ON p.id = si.user_id
  WHERE si.ip = NEW.ip
    AND si.user_id <> NEW.user_id
    AND p.trial_started_at IS NOT NULL
    AND p.trial_started_at + interval '3 days' < v_created
    -- Somebody who paid is not farming trials; their household may legitimately
    -- open a second account.
    AND COALESCE(p.oral_expires_at, 'epoch'::timestamptz) < NOW()
    AND COALESCE(p.written_expires_at, 'epoch'::timestamptz) < NOW()
    AND COALESCE(p.subscription_plan, 'trial') = 'trial'
  ORDER BY si.first_seen DESC
  LIMIT 1;

  INSERT INTO public.signup_ips (user_id, ip, user_agent, verdict, matched)
  VALUES (
    NEW.user_id, NEW.ip, NEW.user_agent,
    CASE WHEN v_prior IS NULL THEN 'clean'
         WHEN v_status <> 'approved' THEN 'skipped'   -- already waiting anyway
         ELSE 'held' END,
    v_prior
  )
  ON CONFLICT (user_id) DO NOTHING;

  /* Hold for review, exactly as the domain guard does: the account exists, the
     person is told, and one admin click clears it. The trial clock is stopped
     at the same time so nobody burns free days in the queue, which is the rule
     signup_guard_setup.sql already established. */
  IF v_prior IS NOT NULL AND v_status = 'approved' THEN
    UPDATE public.profiles
       SET signup_status    = 'pending',
           trial_started_at = NULL
     WHERE id = NEW.user_id
       AND signup_status = 'approved';
  END IF;

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Never let this break a sign-in. A guard that can lock people out of their
  -- own accounts is worse than the abuse it prevents.
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS eb_capture_signup_ip_trg ON auth.sessions;
CREATE TRIGGER eb_capture_signup_ip_trg
  AFTER INSERT ON auth.sessions
  FOR EACH ROW EXECUTE FUNCTION public.eb_capture_signup_ip();


-- ── 3. What an admin looks at ──────────────────────────────────────────────
DROP VIEW IF EXISTS public.v_signup_ip_flags;
CREATE VIEW public.v_signup_ip_flags
WITH (security_invoker = true) AS
SELECT si.user_id,
       p.email,
       p.full_name,
       p.signup_status,
       p.created_at        AS signed_up,
       host(si.ip)         AS ip,
       si.verdict,
       pm.email            AS matched_email,
       pm.created_at       AS matched_signed_up,
       (pm.trial_started_at + interval '3 days') AS matched_trial_ended,
       (SELECT count(*) FROM public.signup_ips s2 WHERE s2.ip = si.ip) AS accounts_from_ip
FROM public.signup_ips si
JOIN public.profiles p  ON p.id  = si.user_id
LEFT JOIN public.profiles pm ON pm.id = si.matched
WHERE si.verdict <> 'clean'
ORDER BY p.created_at DESC;

COMMENT ON VIEW public.v_signup_ip_flags IS
  'Signups held because an earlier trial from the same address had already '
  'expired. Held, not refused: a shared campus or carrier address can produce '
  'a false positive and one admin click clears it.';


-- ── VERIFY ────────────────────────────────────────────────────────────────
-- SELECT tgname FROM pg_trigger WHERE tgname = 'eb_capture_signup_ip_trg';
--   expect one row
-- SELECT count(*) FROM pg_policies WHERE tablename = 'signup_ips';
--   expect 1
-- SELECT * FROM public.v_signup_ip_flags;
--   expect 0 rows until the pattern actually occurs

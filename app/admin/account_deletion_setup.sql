-- ═══════════════════════════════════════════════════════════════════════════
--  Self-service account deletion, with a 30 day grace period.
--
--  A reader can delete their own account. What that means precisely:
--
--    DESTROYED   profile, name, email, study progress, sessions, devices,
--                and the auth identity itself. The actual personal data.
--
--    RETAINED    payment rows, with the payer's email and name copied ONTO
--                the row, plus an irreversible hash of the email.
--
--  Retaining payments is not us being difficult. payments.user_id is already
--  ON DELETE SET NULL, so the rows survive a deletion today, but nothing on
--  the row says who paid: the admin panel resolves the email by joining
--  profiles, and profiles is ON DELETE CASCADE. So a deletion currently
--  leaves a financial record that cannot be attributed to anyone. That breaks
--  bookkeeping, and it makes a later chargeback or refund request impossible
--  to answer. Hence payer_email / payer_name below.
--
--  The hash exists for two specific abuse paths that self-service deletion
--  opens and admin-only deletion never did:
--
--    1. Free trial farming. Delete, sign up again with the same address, get
--       another 3 day trial. Repeatable forever, and a one click way never to
--       pay.
--    2. Single-use coupon reuse. The per-user check ("you already used this
--       code") keys on user_id, which deletion nulls, so that half of the
--       guard IS defeated by deleting.
--
--       It does not actually open the loophole, but NOT because of the
--       tombstone, and the distinction matters. coupon_redemptions.user_id is
--       ON DELETE SET NULL, so the redemption ROW survives the purge, and
--       coupon_live_count counts committed rows regardless of who they belong
--       to. The slot therefore stays consumed forever, and max_redemptions
--       defaults to 1 via COALESCE, so every coupon has a slot to consume.
--
--       READ THIS BEFORE TIDYING ANYTHING. That protection rests entirely on
--       those orphaned redemption rows continuing to exist. Changing the
--       foreign key to CASCADE, or "cleaning up" rows whose user_id is null,
--       frees the slot and silently opens the hole.
--
--  A SHA-256 of the address answers "has this person been here before?"
--  without storing the address, so it is not a way of quietly keeping the
--  personal data we just promised to delete.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. Who paid, recorded on the payment itself ────────────────────────────
ALTER TABLE public.payments
  ADD COLUMN IF NOT EXISTS payer_email TEXT,
  ADD COLUMN IF NOT EXISTS payer_name  TEXT;

-- Backfill every existing payment. Without this, any account deleted before
-- its payments were ever touched again would leave exactly the orphaned rows
-- this file exists to prevent.
UPDATE public.payments p
SET    payer_email = pr.email,
       payer_name  = pr.full_name
FROM   public.profiles pr
WHERE  pr.id = p.user_id
  AND  p.payer_email IS NULL;


-- ── 2. The grace period marker ─────────────────────────────────────────────
-- Set when the reader asks to be deleted; cleared if they change their mind.
-- Nothing is destroyed until the purge job runs past the grace window, so a
-- deletion made in frustration or by accident is recoverable.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS deletion_requested_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS profiles_deletion_requested_idx
  ON public.profiles (deletion_requested_at)
  WHERE deletion_requested_at IS NOT NULL;


-- ── 3. Hashing helper ──────────────────────────────────────────────────────
-- One definition, so the trigger, the purge and any future check can never
-- disagree about what the hash of an address is. Normalised first, because
-- Gmail treats case as insignificant and a stray space would otherwise
-- produce a different hash for the same person.
CREATE OR REPLACE FUNCTION public.eb_email_hash(p_email TEXT)
RETURNS TEXT
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT encode(extensions.digest(lower(btrim(coalesce(p_email, ''))), 'sha256'), 'hex');
$$;


-- ── 4. The tombstone ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.deleted_account_tombstones (
  email_hash        TEXT PRIMARY KEY,
  -- The ORIGINAL trial date, carried forward. A returning signup inherits it
  -- rather than getting a fresh one, which is what actually closes the free
  -- trial farming loop: their trial is simply already long over.
  trial_started_at  TIMESTAMPTZ,
  had_paid          BOOLEAN NOT NULL DEFAULT false,
  deleted_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.deleted_account_tombstones ENABLE ROW LEVEL SECURITY;

-- Readable by admins only. The purge and the signup trigger both run as
-- service role or SECURITY DEFINER, which bypasses RLS, so no other policy is
-- needed and nothing is exposed to ordinary callers.
DROP POLICY IF EXISTS "Admins read tombstones" ON public.deleted_account_tombstones;
CREATE POLICY "Admins read tombstones" ON public.deleted_account_tombstones
  FOR SELECT USING (public.is_admin());


-- ── 5. Everything that must happen before the auth user is destroyed ───────
-- Kept in one function so the edge function cannot do half of it. Deleting the
-- auth row is the caller's next step, and by then this has already preserved
-- what has to survive.
CREATE OR REPLACE FUNCTION public.prepare_account_purge(p_user UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _email TEXT;
  _name  TEXT;
  _trial TIMESTAMPTZ;
  _paid  BOOLEAN;
BEGIN
  SELECT email, full_name, trial_started_at
    INTO _email, _name, _trial
  FROM public.profiles WHERE id = p_user;

  IF _email IS NULL THEN
    RETURN;   -- already gone; nothing to preserve
  END IF;

  SELECT EXISTS (
    SELECT 1 FROM public.payments
    WHERE user_id = p_user AND status IN ('paid', 'refunded')
  ) INTO _paid;

  -- Stamp the payer onto every payment, so the financial record stays
  -- attributable after the profile is gone.
  UPDATE public.payments
     SET payer_email = COALESCE(payer_email, _email),
         payer_name  = COALESCE(payer_name,  _name)
   WHERE user_id = p_user;

  -- ON CONFLICT because the same address may be deleted more than once over
  -- time. Keep the EARLIEST trial date: taking the newer one would hand back
  -- a fresh trial to anyone who deleted twice.
  INSERT INTO public.deleted_account_tombstones (email_hash, trial_started_at, had_paid, deleted_at)
  VALUES (public.eb_email_hash(_email), _trial, COALESCE(_paid, false), NOW())
  ON CONFLICT (email_hash) DO UPDATE SET
    trial_started_at = LEAST(
      public.deleted_account_tombstones.trial_started_at,
      EXCLUDED.trial_started_at
    ),
    had_paid   = public.deleted_account_tombstones.had_paid OR EXCLUDED.had_paid,
    deleted_at = EXCLUDED.deleted_at;
END;
$$;

REVOKE ALL ON FUNCTION public.prepare_account_purge(UUID) FROM PUBLIC, anon, authenticated;


-- ── 6. Who is due ──────────────────────────────────────────────────────────
-- The grace window lives here rather than in the edge function, so changing
-- it is a single statement and cannot drift between callers.
CREATE OR REPLACE FUNCTION public.accounts_due_for_purge(p_grace_days INT DEFAULT 30)
RETURNS TABLE (id UUID, email TEXT, deletion_requested_at TIMESTAMPTZ)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.id, p.email, p.deletion_requested_at
  FROM public.profiles p
  WHERE p.deletion_requested_at IS NOT NULL
    AND p.deletion_requested_at < NOW() - (p_grace_days || ' days')::INTERVAL
    -- An admin is never purged by a background job. If one ever needs to go,
    -- that is a deliberate act, not a timer.
    AND COALESCE(p.is_admin, false) = false;
$$;

REVOKE ALL ON FUNCTION public.accounts_due_for_purge(INT) FROM PUBLIC, anon, authenticated;


-- ── 7. A returning address does not get a second free trial ────────────────
-- The hole this closes: delete the account, sign up again with the same
-- address, collect another 3 day trial, repeat forever. Nobody could do that
-- while deletion was admin-only; self-service deletion makes it one click.
--
-- The fix is not to refuse the signup. People are allowed to come back, and
-- refusing would mean holding their address to check it against, which is the
-- opposite of having deleted it. Instead the new profile INHERITS the original
-- trial date from the tombstone, so their trial is simply already long over
-- and every existing access check reaches the right answer with no change.
--
-- The lookup is wrapped in its own block. This trigger is the whole of
-- signup: if anything in here raises, nobody can create an account at all. A
-- failure to read the tombstone must degrade to "give them a trial", never to
-- a broken signup.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  _admin_emails TEXT[] := ARRAY[
    'elecbuddyofficial@gmail.com',
    'adith@elec-buddy.com',
    'blesson@elec-buddy.com',
    'rahul@elec-buddy.com',
    'yadh@elec-buddy.com'
  ];
  _is_admin BOOLEAN;
  _trial    TIMESTAMPTZ := NOW();
  _prior    TIMESTAMPTZ;
BEGIN
  _is_admin := NEW.email = ANY(_admin_emails);

  BEGIN
    SELECT t.trial_started_at INTO _prior
    FROM public.deleted_account_tombstones t
    WHERE t.email_hash = public.eb_email_hash(NEW.email);

    IF _prior IS NOT NULL THEN
      _trial := _prior;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    _trial := NOW();   -- never block a signup over this
  END;

  INSERT INTO public.profiles (id, full_name, email, trial_started_at, subscription_plan, is_admin)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email, _trial, 'trial', _is_admin)
  ON CONFLICT (id) DO UPDATE SET
    email    = EXCLUDED.email,
    is_admin = EXCLUDED.is_admin OR public.profiles.is_admin;

  IF _is_admin THEN
    INSERT INTO public.admin_users (user_id) VALUES (NEW.id)
    ON CONFLICT DO NOTHING;
  END IF;

  RETURN NEW;
END;
$function$;

-- ═══════════════════════════════════════════════════════════════════════════
--  Signup guard: approved mail providers, and a review queue for everything
--  else.
--
--  WHY. Three trial accounts were created from disposable-mail providers
--  (yopmail.com 4 Aug, dnsink.com 8 Aug, maximail.fyi 10 Aug). None converted,
--  so nothing was lost yet, but the cadence is rising and a throwaway address
--  makes the free trial repeatable at zero cost. Those three accounts are
--  deliberately left alone; this governs signups from here on.
--
--  HOLD, DON'T REFUSE. A blocklist loses by default: it only knows the
--  throwaway providers somebody already noticed, and maximail.fyi and
--  dnsink.com are exactly the newer domains a canned list misses. A pure
--  allowlist fails closed but also dead-ends real cadets, and marine students
--  legitimately use college and shipping-company addresses.
--
--  So: an address on an approved provider signs in immediately, exactly as
--  today. Anything else still gets an account, but lands in `pending` and waits
--  for an admin. Nothing is silently lost, the person is told what is
--  happening, and a genuine cadet is one click away from access.
--
--  THE TRIAL CLOCK DOES NOT RUN WHILE PENDING. trial_started_at stays NULL
--  until approval, so nobody burns free days sitting in a queue. A returning
--  account still inherits its original trial date from the tombstone, so
--  delete-and-retry cannot mint a fresh trial by routing through review.
--
--  ONE HARD REFUSAL REMAINS: one mailbox, one account. Gmail ignores dots and
--  everything after "+", so blesson@, b.l.e.s.s.o.n@ and blesson+trial2@gmail.com
--  are one inbox and three free trials. That is a fact, not a judgement call, so
--  it is refused outright rather than queued. NOTE it does NOT catch sequential
--  addresses like sunilkumarkarn603/604@gmail.com: genuinely different
--  mailboxes, and only phone verification would see through them.
--
--  WHERE IT RUNS. Provider classification happens in handle_new_user (AFTER
--  INSERT), which is where the profile row is written. The duplicate refusal
--  has to be BEFORE INSERT on auth.users, since by AFTER it is too late to say
--  no.
--
--  TO DISABLE THE REFUSAL, if it ever misfires on the signup path:
--    DROP TRIGGER eb_guard_new_signup_trg ON auth.users;
--  Pending review keeps working without it; only the duplicate check goes away.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 0. Supersedes the blocklist revision ───────────────────────────────────
-- An earlier revision shipped blocked_email_domains. The allowlist replaces it
-- outright rather than running alongside: two lists that can disagree about the
-- same domain is a bug waiting to be written. The view goes first, because it
-- depends on the table.
DROP VIEW  IF EXISTS public.signup_domains;
DROP TABLE IF EXISTS public.blocked_email_domains;


-- ── 1. Approved providers ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.allowed_email_domains (
  domain    TEXT PRIMARY KEY,
  -- Display name, so the signup page says "Gmail" once rather than listing
  -- gmail.com and googlemail.com as though they were different providers.
  label     TEXT NOT NULL,
  -- Whether to advertise it on the signup page. Mainstream providers are
  -- listed; a college or employer domain approved for one cadet is accepted
  -- but not advertised, since it is not an option the public can pick.
  is_public BOOLEAN NOT NULL DEFAULT false,
  note      TEXT,
  added_by  UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  added_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.allowed_email_domains ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin manages allowed domains" ON public.allowed_email_domains;
CREATE POLICY "admin manages allowed domains" ON public.allowed_email_domains
  FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

REVOKE ALL ON public.allowed_email_domains FROM PUBLIC, anon, authenticated;
-- Stated outright rather than inherited from Supabase's default privileges, so
-- the admin console cannot quietly lose write access if those defaults change.
-- RLS above is what restricts this to admins; the grant only decides who may
-- attempt it.
GRANT SELECT, INSERT, UPDATE, DELETE ON public.allowed_email_domains TO authenticated;

-- Mainstream consumer mail, weighted for an Indian cadet audience (rediffmail
-- and Zoho matter here in a way they would not elsewhere), plus the team's own
-- domain so staff accounts can still be created.
INSERT INTO public.allowed_email_domains (domain, label, is_public, note) VALUES
  ('gmail.com',       'Gmail',             true,  NULL),
  ('googlemail.com',  'Gmail',             false, 'same mailbox as gmail.com'),
  ('yahoo.com',       'Yahoo',             true,  NULL),
  ('yahoo.in',        'Yahoo',             false, NULL),
  ('yahoo.co.in',     'Yahoo',             false, NULL),
  ('yahoo.co.uk',     'Yahoo',             false, NULL),
  ('ymail.com',       'Yahoo',             false, NULL),
  ('rocketmail.com',  'Yahoo',             false, NULL),
  ('hotmail.fr',      'Hotmail',           false, NULL),
  ('hotmail.de',      'Hotmail',           false, NULL),
  ('hotmail.it',      'Hotmail',           false, NULL),
  ('hotmail.es',      'Hotmail',           false, NULL),
  ('outlook.fr',      'Outlook',           false, NULL),
  ('outlook.de',      'Outlook',           false, NULL),
  ('outlook.es',      'Outlook',           false, NULL),
  ('outlook.it',      'Outlook',           false, NULL),
  ('outlook.com',     'Outlook',           true,  NULL),
  ('outlook.in',      'Outlook',           false, NULL),
  ('hotmail.com',     'Hotmail',           true,  NULL),
  ('hotmail.co.uk',   'Hotmail',           false, NULL),
  ('live.com',        'Outlook',           false, NULL),
  ('msn.com',         'Outlook',           false, NULL),
  ('icloud.com',      'iCloud',            true,  NULL),
  ('me.com',          'iCloud',            false, NULL),
  ('mac.com',         'iCloud',            false, NULL),
  ('proton.me',       'Proton Mail',       true,  NULL),
  ('protonmail.com',  'Proton Mail',       false, NULL),
  ('rediffmail.com',  'Rediffmail',        true,  NULL),
  ('zoho.com',        'Zoho Mail',         true,  NULL),
  ('zohomail.in',     'Zoho Mail',         false, NULL),
  ('aol.com',         'AOL',               false, NULL),
  ('elec-buddy.com',  'Elec-Buddy (team)', false, 'our own domain, staff accounts')
ON CONFLICT (domain) DO NOTHING;

-- Domains already behind an account keep working, so no existing customer's
-- institution starts landing in review. Deliberately EXCLUDES the known
-- throwaway providers: those three accounts stay valid, but their domains are
-- not blessed for future signups. Non-public, since these are historical facts
-- rather than advertised options.
INSERT INTO public.allowed_email_domains (domain, label, is_public, note)
SELECT DISTINCT split_part(p.email, '@', 2),
       split_part(p.email, '@', 2),
       false,
       'pre-existing domain, auto-approved at guard rollout'
FROM public.profiles p
WHERE p.email IS NOT NULL
  AND split_part(p.email, '@', 2) NOT IN
      ('maximail.fyi', 'dnsink.com', 'yopmail.com', 'mailinator.com',
       'guerrillamail.com', 'sharklasers.com', 'grr.la', '10minutemail.com',
       'temp-mail.org', 'tempr.email', 'throwawaymail.com', 'maildrop.cc',
       'dispostable.com', 'trashmail.com', 'getnada.com', 'mohmal.com',
       'moakt.com', 'fakeinbox.com', 'mintemail.com', 'emailondeck.com',
       'discard.email', 'spam4.me')
ON CONFLICT (domain) DO NOTHING;


-- ── 2. Review state on the profile ─────────────────────────────────────────
-- Defaulting to 'approved' is what keeps every existing account working
-- untouched, and what makes this file safe to run on a live database.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS signup_status TEXT NOT NULL DEFAULT 'approved',
  ADD COLUMN IF NOT EXISTS reviewed_at   TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS reviewed_by   UUID REFERENCES auth.users(id) ON DELETE SET NULL;

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_signup_status_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_signup_status_check
  CHECK (signup_status IN ('approved', 'pending', 'rejected'));

CREATE INDEX IF NOT EXISTS profiles_signup_status_idx
  ON public.profiles (signup_status) WHERE signup_status <> 'approved';


-- ── 3. Canonical form of an address ────────────────────────────────────────
-- Reduces an address to the mailbox it actually reaches, so aliases compare
-- equal. Sub-addressing ("+tag") is applied only to providers that genuinely
-- support it; applying it blindly would merge two real mailboxes on any host
-- that treats "+" as an ordinary character. Dot-stripping is Gmail-only,
-- because only Gmail ignores dots.
CREATE OR REPLACE FUNCTION public.eb_email_canonical(p_email TEXT)
RETURNS TEXT
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  e     TEXT := lower(btrim(coalesce(p_email, '')));
  lpart TEXT;
  dpart TEXT;
BEGIN
  IF position('@' IN e) = 0 THEN
    RETURN e;
  END IF;

  lpart := split_part(e, '@', 1);
  dpart := split_part(e, '@', 2);

  IF dpart IN ('gmail.com', 'googlemail.com', 'outlook.com', 'outlook.in',
               'hotmail.com', 'hotmail.co.uk', 'live.com', 'msn.com',
               'icloud.com', 'me.com', 'mac.com', 'proton.me',
               'protonmail.com', 'zoho.com', 'zohomail.in') THEN
    lpart := split_part(lpart, '+', 1);
  END IF;

  IF dpart IN ('gmail.com', 'googlemail.com') THEN
    lpart := replace(lpart, '.', '');
    dpart := 'gmail.com';          -- same mailbox, two names
  END IF;

  RETURN lpart || '@' || dpart;
END;
$$;

-- Without this the duplicate check is a sequential scan that recomputes the
-- canonical form of every profile on every signup.
CREATE INDEX IF NOT EXISTS profiles_email_canonical_idx
  ON public.profiles (public.eb_email_canonical(email));


-- ── 4. What the signup page may ask ────────────────────────────────────────
-- Callable by anon, because it runs before the account exists. Safe to expose:
-- it answers only "is this provider pre-approved", a property of the domain
-- that reveals nothing about any user. The duplicate check is deliberately NOT
-- exposed this way, since answering "that mailbox is taken" for an arbitrary
-- address is an account-enumeration oracle.
CREATE OR REPLACE FUNCTION public.eb_signup_domain_allowed(p_email TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.allowed_email_domains a
    WHERE a.domain = split_part(lower(btrim(coalesce(p_email, ''))), '@', 2)
  );
$$;

REVOKE ALL ON FUNCTION public.eb_signup_domain_allowed(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.eb_signup_domain_allowed(TEXT) TO anon, authenticated;

-- The provider names the signup page lists, so the page never hardcodes a list
-- that drifts from what is actually accepted. Public entries only: an employer
-- domain approved for one cadet is not an option to advertise, and publishing
-- the whole list would hand the full set of accepted domains to anyone probing.
CREATE OR REPLACE FUNCTION public.eb_allowed_email_providers()
RETURNS TABLE (label TEXT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT DISTINCT a.label
  FROM public.allowed_email_domains a
  WHERE a.is_public
  ORDER BY 1;
$$;

REVOKE ALL ON FUNCTION public.eb_allowed_email_providers() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.eb_allowed_email_providers() TO anon, authenticated;


-- ── 5. Classify at signup ──────────────────────────────────────────────────
-- Extends the existing handle_new_user rather than adding a second trigger, so
-- there is one place that decides what a new profile row looks like.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _trial  TIMESTAMPTZ := NOW();
  _prior  TIMESTAMPTZ;
  _dom    TEXT := split_part(lower(btrim(coalesce(NEW.email, ''))), '@', 2);
  _status TEXT := 'approved';
BEGIN
  -- A returning account keeps its original trial start, so deleting and
  -- signing up again does not hand out a fresh trial.
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

  -- Not a pre-approved provider: hold for review. The trial clock stays unset
  -- so nothing is consumed while waiting, EXCEPT where a tombstone already
  -- pins an earlier trial, which must survive review or deleting the account
  -- would become a way to reset the trial.
  IF NOT EXISTS (SELECT 1 FROM public.allowed_email_domains a WHERE a.domain = _dom) THEN
    _status := 'pending';
    _trial  := _prior;     -- NULL unless this mailbox has trialled before
  END IF;

  -- subscription_plan deliberately stays 'trial' even while pending. Every
  -- admin filter and access check already understands 'trial'; introducing a
  -- fourth plan value would mean auditing all of them. signup_status is the
  -- flag that gates entry, and a NULL trial_started_at is what stops the clock.
  INSERT INTO public.profiles (id, full_name, email, trial_started_at,
                               subscription_plan, signup_status)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email, _trial,
          'trial', _status)
  ON CONFLICT (id) DO UPDATE SET
    email    = EXCLUDED.email,
    -- Preserved, never granted. An existing admin re-confirming or changing
    -- their email keeps the flag; nobody gains it here.
    is_admin = public.profiles.is_admin;

  RETURN NEW;
END;
$$;


-- ── 6. The one hard refusal ────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.eb_guard_new_signup()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _canon TEXT := public.eb_email_canonical(NEW.email);
BEGIN
  -- One mailbox, one account. An address whose profile has since been purged is
  -- free to sign up again: the tombstone carries the original trial date
  -- forward, so delete-and-retry still hands out no second trial.
  IF EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE public.eb_email_canonical(p.email) = _canon
  ) THEN
    RAISE EXCEPTION 'eb_duplicate_inbox: %', _canon
      USING HINT = 'An account already exists for this mailbox',
            ERRCODE = 'unique_violation';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS eb_guard_new_signup_trg ON auth.users;
CREATE TRIGGER eb_guard_new_signup_trg
  BEFORE INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.eb_guard_new_signup();


-- ── 7. Approve / reject ────────────────────────────────────────────────────
-- Admin-checked inside the function rather than relying on the caller, since
-- SECURITY DEFINER means this runs with elevated rights whoever calls it.
CREATE OR REPLACE FUNCTION public.eb_review_signup(
  p_user         UUID,
  p_approve      BOOLEAN,
  p_allow_domain BOOLEAN DEFAULT false
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _email TEXT;
  _dom   TEXT;
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'not authorised';
  END IF;

  SELECT p.email INTO _email FROM public.profiles p WHERE p.id = p_user;
  IF _email IS NULL THEN
    RAISE EXCEPTION 'no such account';
  END IF;
  _dom := split_part(lower(_email), '@', 2);

  IF p_approve THEN
    UPDATE public.profiles
       SET signup_status    = 'approved',
           -- The clock starts at approval, not at signup, so time spent in the
           -- queue is not taken out of their trial. COALESCE preserves a
           -- tombstoned date, so a returning account does not get a fresh one.
           trial_started_at = COALESCE(trial_started_at, NOW()),
           reviewed_at      = NOW(),
           reviewed_by      = auth.uid()
     WHERE id = p_user;

    -- Approving the whole domain, for a real college or employer, so the next
    -- cadet from there is not queued as well. Off by default: one person from
    -- a domain is not evidence the domain is trustworthy.
    IF p_allow_domain THEN
      INSERT INTO public.allowed_email_domains (domain, label, is_public, note, added_by)
      VALUES (_dom, _dom, false, 'approved from the review queue', auth.uid())
      ON CONFLICT (domain) DO NOTHING;
    END IF;
  ELSE
    UPDATE public.profiles
       SET signup_status = 'rejected',
           reviewed_at   = NOW(),
           reviewed_by   = auth.uid()
     WHERE id = p_user;
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.eb_review_signup(UUID, BOOLEAN, BOOLEAN) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_review_signup(UUID, BOOLEAN, BOOLEAN) TO authenticated;


-- ── 8. What the admin console reads ────────────────────────────────────────
CREATE OR REPLACE VIEW public.pending_signups AS
  SELECT
    p.id,
    p.email,
    p.full_name,
    split_part(p.email, '@', 2) AS domain,
    p.signup_status,
    p.created_at,
    p.reviewed_at,
    -- How many other accounts share this domain, so a one-off throwaway is
    -- distinguishable at a glance from a college half the class uses.
    (SELECT count(*) FROM public.profiles q
      WHERE split_part(q.email, '@', 2) = split_part(p.email, '@', 2)) AS domain_accounts
  FROM public.profiles p
  WHERE p.signup_status <> 'approved';

ALTER VIEW public.pending_signups SET (security_invoker = on);
-- authenticated is named in the REVOKE too, not just anon: Supabase's default
-- privileges hand new objects full rights to authenticated, so revoking only
-- PUBLIC and anon leaves INSERT/UPDATE/DELETE/TRUNCATE sitting there. RLS and
-- the view being non-updatable both stop it being exploitable, but least
-- privilege should be what the grant says, not what the defaults left behind.
REVOKE ALL ON public.pending_signups FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.pending_signups TO authenticated;

-- Every domain that has ever signed up, with whether it is pre-approved. The
-- domain is computed in a CTE rather than inline so the allowlist can be joined
-- against it; referencing split_part(p.email,...) inside a subquery of the
-- aggregate is an ungrouped-column error.
CREATE OR REPLACE VIEW public.signup_domains AS
  WITH d AS (
    SELECT
      split_part(p.email, '@', 2) AS domain,
      p.created_at,
      (p.written_expires_at IS NOT NULL OR p.oral_expires_at IS NOT NULL) AS is_paid
    FROM public.profiles p
    WHERE p.email IS NOT NULL
  )
  SELECT
    d.domain,
    count(*)                          AS accounts,
    count(*) FILTER (WHERE d.is_paid) AS paid_accounts,
    min(d.created_at)                 AS first_seen,
    max(d.created_at)                 AS last_seen,
    bool_or(a.domain IS NOT NULL)     AS allowed
  FROM d
  LEFT JOIN public.allowed_email_domains a ON a.domain = d.domain
  GROUP BY d.domain;

ALTER VIEW public.signup_domains SET (security_invoker = on);
REVOKE ALL ON public.signup_domains FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.signup_domains TO authenticated;

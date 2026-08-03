-- ═══════════════════════════════════════════════════════════════════════════
--  Device limit.
--
--  Terms section 9 has always said "Each account may be signed in on a limited
--  number of registered devices at a time", but nothing enforced it: the
--  devices table existed with a policy and not one line of code anywhere read
--  or wrote it. This makes that promise true.
--
--  WHAT IS STORED, and what is deliberately not:
--
--    devices.fingerprint is a RANDOM UUID the browser generates once and keeps
--    in localStorage. It is NOT a hardware or canvas fingerprint. Nothing
--    about the machine is measured, so this cannot be used to recognise the
--    same person across accounts or anywhere off this site. Clearing site data
--    produces a new id, which registers as a new device and costs a slot; that
--    is the honest trade for not tracking anybody.
--
--    device_label is a coarse "Chrome on Windows" string derived from the user
--    agent, so a reader can tell their own devices apart when removing one.
--
--  WHY NOT A GEOGRAPHIC RULE: the readers are marine ETOs. Their IP moves
--  continent when the ship's satellite link changes teleport, and again when
--  they fly home on leave. A distance rule would lock out genuine paying users
--  far more often than it would catch a sharer, so device identity is the
--  measure rather than location. Nothing here records IP or location.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── One row per device per account ─────────────────────────────────────────
-- Without this, a client retrying registration silently creates duplicate rows
-- and the same physical device eats several slots.
CREATE UNIQUE INDEX IF NOT EXISTS devices_user_fingerprint_key
  ON public.devices (user_id, fingerprint);

CREATE INDEX IF NOT EXISTS devices_user_last_seen_idx
  ON public.devices (user_id, last_seen DESC);


-- ── RLS: readable and removable by the owner, writable only by the server ──
-- The old policy was FOR ALL, so a reader could INSERT their own rows. That
-- makes the cap meaningless: anyone could add slots, or rewrite last_seen to
-- keep a device from being the one evicted. Registration now happens only
-- through the register-device edge function, which runs as service role and
-- bypasses RLS entirely.
--
-- DELETE stays with the owner on purpose. Removing your old phone is the
-- normal way out of hitting the cap, and it must not need a support ticket.
DROP POLICY IF EXISTS "Users can manage own devices" ON public.devices;

DROP POLICY IF EXISTS "Users read own devices" ON public.devices;
CREATE POLICY "Users read own devices" ON public.devices
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users remove own devices" ON public.devices;
CREATE POLICY "Users remove own devices" ON public.devices
  FOR DELETE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins read all devices" ON public.devices;
CREATE POLICY "Admins read all devices" ON public.devices
  FOR SELECT USING (public.is_admin());


-- ── Registration and enforcement, in one place ─────────────────────────────
-- Done in the database rather than the edge function because the decision
-- needs a row lock. Two tabs opening at once on a fresh device would otherwise
-- both count the same N-1 existing rows, both conclude there is room, and both
-- insert, putting the account over its cap.
--
-- Returns the caller's devices and whether this one is allowed. It never
-- evicts anything on its own: silently signing out a reader's other device
-- because they opened a browser is hostile, so being over the cap is reported
-- and the reader chooses what to remove.
CREATE OR REPLACE FUNCTION public.register_device(
  p_user        UUID,
  p_fingerprint TEXT,
  p_label       TEXT,
  p_limit       INT DEFAULT 3
)
RETURNS TABLE (allowed BOOLEAN, device_count INT, device_limit INT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _exists BOOLEAN;
  _count  INT;
BEGIN
  IF p_fingerprint IS NULL OR btrim(p_fingerprint) = '' THEN
    RAISE EXCEPTION 'fingerprint_required';
  END IF;

  -- Serialise every concurrent registration for this account. Locking the
  -- profile row is enough: it is the one row every device of this account has
  -- in common, and it always exists.
  PERFORM 1 FROM public.profiles WHERE id = p_user FOR UPDATE;

  SELECT EXISTS (
    SELECT 1 FROM public.devices
    WHERE user_id = p_user AND fingerprint = p_fingerprint
  ) INTO _exists;

  -- A device already on the list is always let through, even if the account is
  -- somehow over its cap. Otherwise lowering the limit, or any past bug, would
  -- lock out every device at once with no way back in to fix it.
  IF _exists THEN
    UPDATE public.devices
       SET last_seen = NOW(),
           device_label = COALESCE(NULLIF(btrim(p_label), ''), device_label)
     WHERE user_id = p_user AND fingerprint = p_fingerprint;

    SELECT count(*)::INT INTO _count FROM public.devices WHERE user_id = p_user;
    RETURN QUERY SELECT true, _count, p_limit;
    RETURN;
  END IF;

  SELECT count(*)::INT INTO _count FROM public.devices WHERE user_id = p_user;

  IF _count >= p_limit THEN
    -- Nothing is written. The reader is told to remove a device first.
    RETURN QUERY SELECT false, _count, p_limit;
    RETURN;
  END IF;

  INSERT INTO public.devices (user_id, fingerprint, device_label, last_seen, created_at)
  VALUES (p_user, p_fingerprint, NULLIF(btrim(p_label), ''), NOW(), NOW())
  ON CONFLICT (user_id, fingerprint) DO UPDATE SET last_seen = NOW();

  RETURN QUERY SELECT true, _count + 1, p_limit;
END;
$$;

-- Reachable only by the edge function's service role. If `authenticated` could
-- call it, a reader could register devices directly and choose their own
-- p_limit, which is the whole cap gone.
REVOKE ALL ON FUNCTION public.register_device(UUID, TEXT, TEXT, INT) FROM PUBLIC, anon, authenticated;

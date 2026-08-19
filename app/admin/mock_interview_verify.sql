-- ═══════════════════════════════════════════════════════════════════════════
--  Paste into the Supabase SQL editor AFTER mock_interview_setup.sql.
--  Two parts. Run them in order. Every row of both should read 'ok'.
--
--  Part B is the one that matters. It actually tries to double-book a slot,
--  because "the unique index is there" and "a second cadet cannot take the
--  slot" are different claims, and only the second one is the feature. It
--  cleans up after itself: the slot it creates is 400 days out, marked
--  __verify__, and deleted before the block ends.
-- ═══════════════════════════════════════════════════════════════════════════


-- ══ PART A: structure ══════════════════════════════════════════════════════
WITH c AS (
  SELECT
    (SELECT count(*) FROM pg_tables WHERE schemaname = 'public' AND tablename IN
       ('mock_interview_config','mock_interview_slots','mock_interview_bookings'))
                                                                       AS tables,
    (SELECT count(*) FROM pg_tables WHERE schemaname = 'public' AND rowsecurity
        AND tablename IN
       ('mock_interview_config','mock_interview_slots','mock_interview_bookings'))
                                                                       AS rls,
    -- The line that stops a cadet writing their own booking at their own
    -- price. There must be no INSERT policy on bookings at all: every write
    -- goes through the service role.
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public'
        AND tablename = 'mock_interview_bookings' AND cmd = 'INSERT')   AS booking_ins,
    (SELECT count(*) FROM pg_policies WHERE schemaname = 'public'
        AND tablename = 'mock_interview_bookings' AND cmd = 'DELETE')   AS booking_del,
    -- The partial unique index. Without it the reserve function is the only
    -- thing standing between two buyers and one slot.
    (SELECT count(*) FROM pg_indexes WHERE schemaname = 'public'
        AND indexname = 'mock_interview_one_live_booking_per_slot')     AS uniq_idx,
    -- SECURITY DEFINER functions reachable by a signed-in stranger are how a
    -- booking gets made for one paisa.
    (SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace
      WHERE n.nspname = 'public'
        AND p.proname IN ('mock_slot_reserve','mock_slot_release','mock_expire_stale_bookings')
        AND has_function_privilege('authenticated', p.oid, 'EXECUTE'))  AS callable,
    -- Every SECURITY DEFINER function here must pin search_path, or it runs
    -- whatever a caller-controlled schema shadows.
    (SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace
      WHERE n.nspname = 'public'
        AND p.proname IN ('mock_slot_reserve','mock_slot_release','mock_expire_stale_bookings')
        AND p.prosecdef
        AND array_to_string(p.proconfig, ',') LIKE '%search_path=public%') AS pinned,
    (SELECT count(*) FROM public.mock_interview_config)                 AS cfg_rows,
    (SELECT is_enabled::text FROM public.mock_interview_config LIMIT 1)  AS enabled
)
SELECT x.item, x.got, x.want,
       CASE WHEN x.got = x.want THEN 'ok' ELSE 'FAIL' END AS result
FROM c, LATERAL (VALUES
  ('tables created',                          c.tables::text,      '3'),
  ('RLS enabled on every one',                c.rls::text,         '3'),
  ('INSERT policies on bookings (must be 0)', c.booking_ins::text, '0'),
  ('DELETE policies on bookings (must be 0)', c.booking_del::text, '0'),
  ('one-live-booking-per-slot index',         c.uniq_idx::text,    '1'),
  ('reserve/release callable by authenticated (must be 0)',
                                              c.callable::text,    '0'),
  ('SECURITY DEFINER fns with pinned search_path',
                                              c.pinned::text,      '3'),
  ('config rows (single-row table)',          c.cfg_rows::text,    '1'),
  ('ships disabled',                          c.enabled,           'false')
) AS x(item, got, want);


-- ══ PART B: behaviour ══════════════════════════════════════════════════════
-- Run this second, on its own. It creates one far-future slot, drives the
-- real reserve path against it, and deletes everything it made.
DO $$
DECLARE
  v_user  UUID;
  v_user2 UUID;
  v_slot  UUID;
  v_b1    public.mock_interview_bookings;
  v_tmp   public.mock_interview_bookings;
  n       INTEGER;
BEGIN
  CREATE TEMP TABLE IF NOT EXISTS _mock_verify (item TEXT, got TEXT, want TEXT);
  DELETE FROM _mock_verify;

  SELECT id INTO v_user  FROM auth.users ORDER BY created_at LIMIT 1;
  SELECT id INTO v_user2 FROM auth.users ORDER BY created_at OFFSET 1 LIMIT 1;
  v_user2 := COALESCE(v_user2, v_user);   -- a dev project may hold one account

  IF v_user IS NULL THEN
    INSERT INTO _mock_verify VALUES ('needs at least one auth user', 'none', 'one');
    RETURN;
  END IF;

  INSERT INTO public.mock_interview_slots (starts_at, note)
  VALUES (NOW() + INTERVAL '400 days', '__verify__')
  RETURNING id INTO v_slot;

  -- 1. A normal reservation works.
  BEGIN
    v_b1 := public.mock_slot_reserve(
      v_slot, v_user, 'verify@example.com', 'Verify Cadet', '9000000000',
      'B.Tech', 'EEE', NULL, NULL, 49900, 15);
    INSERT INTO _mock_verify VALUES ('a free slot can be reserved', 'reserved', 'reserved');
  EXCEPTION WHEN OTHERS THEN
    INSERT INTO _mock_verify VALUES ('a free slot can be reserved', SQLERRM, 'reserved');
  END;

  -- 2. THE TEST. A second cadet on the same slot must be refused.
  BEGIN
    v_tmp := public.mock_slot_reserve(
      v_slot, v_user2, 'other@example.com', 'Other Cadet', '9000000001',
      'B.E', 'ECE', NULL, NULL, 49900, 15);
    INSERT INTO _mock_verify VALUES ('second cadet on a held slot', 'ALLOWED', 'refused');
  EXCEPTION WHEN OTHERS THEN
    INSERT INTO _mock_verify VALUES ('second cadet on a held slot', 'refused', 'refused');
  END;

  -- 3. Missing intake details are refused, not stored blank.
  BEGIN
    v_tmp := public.mock_slot_reserve(
      v_slot, v_user, 'x@example.com', 'No Phone', '   ',
      'B.Tech', 'EEE', NULL, NULL, 49900, 15);
    INSERT INTO _mock_verify VALUES ('blank phone', 'ACCEPTED', 'refused');
  EXCEPTION WHEN OTHERS THEN
    INSERT INTO _mock_verify VALUES ('blank phone', 'refused', 'refused');
  END;

  -- 4. A lapsed hold releases the slot.
  UPDATE public.mock_interview_bookings
     SET reserved_until = NOW() - INTERVAL '1 minute'
   WHERE id = v_b1.id;

  SELECT public.mock_expire_stale_bookings() INTO n;

  BEGIN
    v_tmp := public.mock_slot_reserve(
      v_slot, v_user2, 'second@example.com', 'Second Cadet', '9000000002',
      'B.Tech', 'EEE', NULL, NULL, 49900, 15);
    INSERT INTO _mock_verify VALUES ('lapsed hold frees the slot', 'freed', 'freed');
  EXCEPTION WHEN OTHERS THEN
    INSERT INTO _mock_verify VALUES ('lapsed hold frees the slot', SQLERRM, 'freed');
  END;

  -- 5. A PAID booking is never expired, however old the timestamp is. This is
  --    the one that would quietly resell a slot somebody already paid for.
  UPDATE public.mock_interview_bookings
     SET status = 'paid', reserved_until = NOW() - INTERVAL '30 days'
   WHERE slot_id = v_slot AND status = 'reserved';

  PERFORM public.mock_expire_stale_bookings();

  SELECT count(*) INTO n
    FROM public.mock_interview_bookings
   WHERE slot_id = v_slot AND status = 'paid';
  INSERT INTO _mock_verify VALUES ('paid booking survives expiry sweep', n::text, '1');

  -- 6. And the slot it holds stays unavailable.
  BEGIN
    v_tmp := public.mock_slot_reserve(
      v_slot, v_user, 'third@example.com', 'Third Cadet', '9000000003',
      'B.Tech', 'EEE', NULL, NULL, 49900, 15);
    INSERT INTO _mock_verify VALUES ('slot held by a paid booking', 'ALLOWED', 'refused');
  EXCEPTION WHEN OTHERS THEN
    INSERT INTO _mock_verify VALUES ('slot held by a paid booking', 'refused', 'refused');
  END;

  -- 7. A past slot cannot be booked at all.
  UPDATE public.mock_interview_slots
     SET starts_at = NOW() - INTERVAL '1 day' WHERE id = v_slot;
  DELETE FROM public.mock_interview_bookings WHERE slot_id = v_slot;

  BEGIN
    v_tmp := public.mock_slot_reserve(
      v_slot, v_user, 'past@example.com', 'Past Cadet', '9000000004',
      'B.Tech', 'EEE', NULL, NULL, 49900, 15);
    INSERT INTO _mock_verify VALUES ('a slot in the past', 'ALLOWED', 'refused');
  EXCEPTION WHEN OTHERS THEN
    INSERT INTO _mock_verify VALUES ('a slot in the past', 'refused', 'refused');
  END;

  -- Clean up everything this block created.
  DELETE FROM public.mock_interview_bookings WHERE slot_id = v_slot;
  DELETE FROM public.mock_interview_slots    WHERE id = v_slot;

  SELECT count(*) INTO n FROM public.mock_interview_slots WHERE note = '__verify__';
  INSERT INTO _mock_verify VALUES ('verify slot cleaned up', n::text, '0');
END $$;

SELECT item, got, want,
       CASE WHEN got = want THEN 'ok' ELSE 'FAIL' END AS result
FROM _mock_verify;


-- ── If 'second cadet on a held slot' reads ALLOWED ─────────────────────────
-- Stop. Either the partial unique index did not get created, or its WHERE
-- clause does not cover 'reserved'. Nothing else in this feature matters
-- until that line reads 'refused': it is the difference between selling a
-- slot and selling it twice.

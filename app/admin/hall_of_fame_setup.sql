-- ============================================================
--  Hall of Fame: cadets who passed CoC, or were selected for
--  sponsorship, announced to other cadets after they sign in.
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  EVERY ENTRY IS A REAL PERSON WHO AGREED TO BE HERE
--
--  So consent is enforced by the database, not left to a checkbox in the
--  admin form. How consent was given lives in hall_of_fame_consent, which
--  only admins can read, and a trigger refuses to publish any entry that has
--  no consent row. The admin console writes both through hof_save(), in one
--  transaction, so there is no window where an entry is public without it.
--
--  WHO CAN READ IT
--
--  Signed-in users only, published rows only. Nothing on the sign-in page
--  shows this yet, so anon gets nothing. If a public teaser is added later,
--  widen the SELECT policy to anon the way public_events_setup.sql does, and
--  add the table to INTENDED in audits/audit_anon.py in the same change.
--
--  PHOTOS
--
--  Stored inline as a small data: URL, resized to 320 px webp in the admin's
--  browser before upload. At a few dozen entries that is cheaper than a
--  storage bucket with its own policies, and the size cap below stops a
--  full-resolution phone photo from being pasted in by accident.
--
--  THE LOGIN POPUP
--
--  hall_of_fame_seen records which entries each reader has already been
--  shown, server side, so an entry appears once per person rather than once
--  per device. Rows go when the account or the entry does.
--
--  APPLY:  python audits/sbq.py prod --file app/admin/hall_of_fame_setup.sql
--  UNDO:   DROP TABLE public.hall_of_fame_seen, public.hall_of_fame_consent,
--                     public.hall_of_fame CASCADE;
--          DROP FUNCTION public.hof_save(jsonb), public.hof_publish_guard();
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.hall_of_fame (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Which course's console owns it and whose readers see it.
  track         TEXT NOT NULL CHECK (track IN ('coc', 'sponsorship')),
  display_name  TEXT NOT NULL CHECK (length(btrim(display_name)) BETWEEN 2 AND 80),
  -- "Passed Class I ETO Oral, Mumbai MMD" or "Selected by Anglo-Eastern".
  achievement   TEXT NOT NULL CHECK (length(btrim(achievement)) BETWEEN 3 AND 140),
  -- The month it happened. Stored as the first of the month.
  achieved_on   DATE NOT NULL CHECK (extract(day FROM achieved_on) = 1),
  quote         TEXT CHECK (quote IS NULL OR length(quote) <= 400),
  photo         TEXT CHECK (photo IS NULL OR (photo ~ '^data:image/(webp|jpeg|png);base64,'
                                              AND length(photo) <= 120000)),
  is_published  BOOLEAN NOT NULL DEFAULT FALSE,
  -- Set the first time it goes public, and kept. The popup shows entries
  -- by this, so unpublishing and republishing a typo fix does not push the
  -- same person in front of everyone twice.
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_by    UUID REFERENCES auth.users ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS hall_of_fame_pub_idx
  ON public.hall_of_fame (track, published_at DESC)
  WHERE is_published;

CREATE TABLE IF NOT EXISTS public.hall_of_fame_consent (
  entry_id     UUID PRIMARY KEY REFERENCES public.hall_of_fame ON DELETE CASCADE,
  -- How and when they agreed, e.g. "WhatsApp to Blesson, 27 Sep 2026".
  how_given    TEXT NOT NULL CHECK (length(btrim(how_given)) >= 5),
  recorded_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  recorded_by  UUID REFERENCES auth.users ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS public.hall_of_fame_seen (
  user_id   UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users ON DELETE CASCADE,
  entry_id  UUID NOT NULL REFERENCES public.hall_of_fame ON DELETE CASCADE,
  seen_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, entry_id)
);

-- ── Publishing needs consent, and stamps published_at once ──
-- SECURITY DEFINER so the consent lookup is not itself filtered by RLS.
CREATE OR REPLACE FUNCTION public.hof_publish_guard()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NEW.is_published THEN
    IF NOT EXISTS (SELECT 1 FROM public.hall_of_fame_consent c WHERE c.entry_id = NEW.id) THEN
      RAISE EXCEPTION 'hall_of_fame: cannot publish % without a consent record', NEW.display_name;
    END IF;
    IF NEW.published_at IS NULL THEN NEW.published_at := NOW(); END IF;
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS hof_publish_guard ON public.hall_of_fame;
CREATE TRIGGER hof_publish_guard
  BEFORE INSERT OR UPDATE ON public.hall_of_fame
  FOR EACH ROW EXECUTE FUNCTION public.hof_publish_guard();

-- ── RLS ─────────────────────────────────────────────────────
ALTER TABLE public.hall_of_fame         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hall_of_fame_consent ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hall_of_fame_seen    ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Signed-in users read published hall of fame" ON public.hall_of_fame;
CREATE POLICY "Signed-in users read published hall of fame"
  ON public.hall_of_fame FOR SELECT TO authenticated
  USING (is_published OR public.is_admin());

DROP POLICY IF EXISTS "Admin can update hall of fame" ON public.hall_of_fame;
CREATE POLICY "Admin can update hall of fame"
  ON public.hall_of_fame FOR UPDATE TO authenticated
  USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin can delete hall of fame" ON public.hall_of_fame;
CREATE POLICY "Admin can delete hall of fame"
  ON public.hall_of_fame FOR DELETE TO authenticated
  USING (public.is_admin());
-- No INSERT policy: new entries come only through hof_save(), which writes
-- the consent row in the same transaction.

DROP POLICY IF EXISTS "Admin reads consent" ON public.hall_of_fame_consent;
CREATE POLICY "Admin reads consent"
  ON public.hall_of_fame_consent FOR SELECT TO authenticated
  USING (public.is_admin());

DROP POLICY IF EXISTS "Reader sees own seen rows" ON public.hall_of_fame_seen;
CREATE POLICY "Reader sees own seen rows"
  ON public.hall_of_fame_seen FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.is_admin());

DROP POLICY IF EXISTS "Reader marks own seen rows" ON public.hall_of_fame_seen;
CREATE POLICY "Reader marks own seen rows"
  ON public.hall_of_fame_seen FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

REVOKE ALL ON public.hall_of_fame, public.hall_of_fame_consent, public.hall_of_fame_seen FROM anon;

-- ── hof_save: the one way in for the admin console ──────────
-- p: {id?, track, display_name, achievement, achieved_on 'YYYY-MM-01',
--     quote?, photo?, is_published, consent}
-- An id updates, no id inserts. Returns the entry id.
CREATE OR REPLACE FUNCTION public.hof_save(p JSONB)
RETURNS UUID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_id  UUID := NULLIF(p->>'id', '')::uuid;
  v_pub BOOLEAN := COALESCE((p->>'is_published')::boolean, FALSE);
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'admin only' USING ERRCODE = '42501';
  END IF;

  -- Written unpublished first, so the consent row can reference it before
  -- the publish guard looks for it.
  IF v_id IS NULL THEN
    INSERT INTO public.hall_of_fame (track, display_name, achievement, achieved_on, quote, photo, created_by)
    VALUES (p->>'track', btrim(p->>'display_name'), btrim(p->>'achievement'),
            (p->>'achieved_on')::date, NULLIF(btrim(p->>'quote'), ''), NULLIF(p->>'photo', ''), auth.uid())
    RETURNING id INTO v_id;
  ELSE
    UPDATE public.hall_of_fame SET
      track        = p->>'track',
      display_name = btrim(p->>'display_name'),
      achievement  = btrim(p->>'achievement'),
      achieved_on  = (p->>'achieved_on')::date,
      quote        = NULLIF(btrim(p->>'quote'), ''),
      photo        = NULLIF(p->>'photo', '')
    WHERE id = v_id;
    IF NOT FOUND THEN RAISE EXCEPTION 'hall_of_fame: no entry %', v_id; END IF;
  END IF;

  IF NULLIF(btrim(p->>'consent'), '') IS NOT NULL THEN
    INSERT INTO public.hall_of_fame_consent (entry_id, how_given, recorded_by)
    VALUES (v_id, btrim(p->>'consent'), auth.uid())
    ON CONFLICT (entry_id) DO UPDATE
      SET how_given = EXCLUDED.how_given, recorded_by = EXCLUDED.recorded_by, recorded_at = NOW();
  END IF;

  UPDATE public.hall_of_fame SET is_published = v_pub WHERE id = v_id;
  RETURN v_id;
END $$;

REVOKE ALL ON FUNCTION public.hof_save(JSONB) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.hof_save(JSONB) TO authenticated;

COMMENT ON TABLE public.hall_of_fame IS
  'Real cadets who passed CoC or were selected for sponsorship, with consent. Written only via hof_save(). See app/admin/hall_of_fame_setup.sql.';

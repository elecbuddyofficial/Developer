-- ═══════════════════════════════════════════════════════════════════════════
--  "Action taken" marks for shared-device clusters.
--
--  The Approvals tab lists every browser fingerprint used by more than one
--  account. That list only grows, and nothing recorded that a cluster had
--  already been looked at, so the same eight clusters were re-read every time
--  and a genuinely new one had nothing to distinguish it.
--
--  This stores the decision, not a judgement. Marking a cluster means "I have
--  looked at this and dealt with it", whatever dealing with it meant. No
--  account is blocked, restricted or changed by anything here. The device
--  fingerprint is not proof of anything on its own, which is why the panel
--  itself says so, and that has not changed.
--
--  THE MEMBER COUNT IS PART OF THE MARK, DELIBERATELY.
--  A cluster of two you cleared in August is not the same cluster when a third
--  account appears on it in September. If the mark did not remember how many
--  accounts it covered, a used-up trial coming back on the same laptop would
--  land inside something already ticked off and never be seen again. So the
--  count at review time is stored, and the console reopens the cluster when it
--  grows past that.
--
--  Re-runnable, like every other setup file here.
--
--  UNDO:  DROP TABLE public.device_cluster_reviews;
-- ═══════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.device_cluster_reviews (
  -- The fingerprint is the cluster's identity. It is not a foreign key to
  -- devices: rows there come and go as browsers are cleared, and the mark
  -- should outlive that.
  fingerprint        TEXT PRIMARY KEY,

  reviewed_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewed_by        UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_by_email  TEXT,

  -- How many accounts were on the device when it was marked. The console
  -- compares this against the live count and treats any increase as unread.
  members_at_review  INTEGER NOT NULL CHECK (members_at_review > 0),

  note               TEXT
);

COMMENT ON TABLE public.device_cluster_reviews IS
  'Admin "action taken" marks for shared-device clusters. Records that a '
  'cluster was reviewed and how many accounts it held at the time; a cluster '
  'that grows past that count is shown as unread again.';

ALTER TABLE public.device_cluster_reviews ENABLE ROW LEVEL SECURITY;

-- Admins only, in both directions. This is an internal working note and
-- nothing in the cadet-facing app reads it.
DROP POLICY IF EXISTS "Admins read device reviews" ON public.device_cluster_reviews;
CREATE POLICY "Admins read device reviews"
  ON public.device_cluster_reviews FOR SELECT
  TO authenticated USING (public.is_admin());

DROP POLICY IF EXISTS "Admins write device reviews" ON public.device_cluster_reviews;
CREATE POLICY "Admins write device reviews"
  ON public.device_cluster_reviews FOR ALL
  TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());


-- ── VERIFY ────────────────────────────────────────────────────────────────
-- SELECT count(*) FROM pg_policies WHERE tablename = 'device_cluster_reviews';
--   expect 2
-- SELECT rowsecurity FROM pg_tables WHERE tablename = 'device_cluster_reviews';
--   expect true

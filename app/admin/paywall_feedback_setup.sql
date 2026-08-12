-- ═══════════════════════════════════════════════════════════════════════════
--  Exit feedback: why somebody looked at the price and did not buy.
--
--  WHY. The funnel says WHERE people stop. 17 opened the price list, 6 picked
--  a plan, 3 paid, so the largest single drop is people who read the prices
--  and closed the window. No amount of event tracking can say why, and the
--  two most likely reasons need opposite fixes:
--
--    "price is too high"        -> pricing or a discount
--    "still deciding, not yet"  -> a reminder before the trial lapses
--
--  ASKED ONCE, EVER. This is the hard requirement, and it is enforced here
--  rather than in the browser. localStorage is per device and per browser, so
--  a flag there would re-ask the same person on their phone, after clearing
--  site data, or in a private window. UNIQUE (user_id) cannot be talked out
--  of it.
--
--  The row is created when the survey is SHOWN, not when it is answered. That
--  is the whole trick: somebody who dismisses it without answering still gets
--  a row, so they are never asked again. Storing only answers would mean the
--  people least willing to respond get pestered the most.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.paywall_feedback (
  user_id     UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  reason      TEXT,
  note        TEXT,
  plan_shown  TEXT,
  scope_shown TEXT,
  shown_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  answered_at TIMESTAMPTZ
);

-- user_id as the PRIMARY KEY is what makes "once, ever" true. There is no
-- second row to be had, on any device, in any session.

-- reason stays NULL until they actually pick something, so:
--   reason IS NULL      -> shown, dismissed without answering
--   reason IS NOT NULL  -> answered
-- Constrained so a future client bug cannot invent a sixth bucket and quietly
-- fragment the counts.
ALTER TABLE public.paywall_feedback DROP CONSTRAINT IF EXISTS paywall_feedback_reason_check;
ALTER TABLE public.paywall_feedback ADD CONSTRAINT paywall_feedback_reason_check
  CHECK (reason IS NULL OR reason IN ('price','not_ready','unsure_coverage','payment_problem','other'));

CREATE INDEX IF NOT EXISTS paywall_feedback_shown_idx  ON public.paywall_feedback (shown_at DESC);
CREATE INDEX IF NOT EXISTS paywall_feedback_reason_idx ON public.paywall_feedback (reason) WHERE reason IS NOT NULL;

ALTER TABLE public.paywall_feedback ENABLE ROW LEVEL SECURITY;

-- Users may claim their own row, once, and may then fill in their answer.
-- WITH CHECK ties both to the caller, so nobody can write feedback onto
-- somebody else's account or stuff the counts.
DROP POLICY IF EXISTS "Users claim own feedback row" ON public.paywall_feedback;
CREATE POLICY "Users claim own feedback row" ON public.paywall_feedback
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users answer own feedback row" ON public.paywall_feedback;
CREATE POLICY "Users answer own feedback row" ON public.paywall_feedback
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Deliberately no user SELECT policy: they have no reason to read this back.
DROP POLICY IF EXISTS "Admins read feedback" ON public.paywall_feedback;
CREATE POLICY "Admins read feedback" ON public.paywall_feedback
  FOR SELECT USING (public.is_admin());


-- ── Claim and answer, as functions ─────────────────────────────────────────
-- The client asks the DATABASE whether this user has been asked before. It is
-- not allowed to decide for itself, and it is not allowed to read the table.
--
-- Doing it as ON CONFLICT DO NOTHING inside one statement makes the check and
-- the claim a single atomic step, so two tabs closing the price list at the
-- same moment cannot both be told they are first.
--
-- (A plain insert plus .select() from the browser would have needed a user
-- SELECT policy on this table just to learn whether the insert happened,
-- which is a wider grant than the feature needs. This keeps SELECT
-- admin-only.)
CREATE OR REPLACE FUNCTION public.eb_claim_paywall_feedback(p_plan TEXT DEFAULT NULL, p_scope TEXT DEFAULT NULL)
RETURNS BOOLEAN
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE v_id UUID; v_new UUID;
BEGIN
  v_id := auth.uid();
  IF v_id IS NULL THEN RETURN false; END IF;

  INSERT INTO public.paywall_feedback (user_id, plan_shown, scope_shown)
  VALUES (v_id, p_plan, p_scope)
  ON CONFLICT (user_id) DO NOTHING
  RETURNING user_id INTO v_new;

  -- A returned id means this insert created the row, so this caller is the
  -- first and only one who will ever be shown the survey.
  RETURN v_new IS NOT NULL;
END $$;

REVOKE ALL ON FUNCTION public.eb_claim_paywall_feedback(TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_claim_paywall_feedback(TEXT, TEXT) TO authenticated;

-- Recording the answer. Only ever fills in a row the caller already owns, and
-- only while it is still unanswered, so a reply cannot be overwritten later.
CREATE OR REPLACE FUNCTION public.eb_answer_paywall_feedback(p_reason TEXT, p_note TEXT DEFAULT NULL)
RETURNS VOID
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  IF auth.uid() IS NULL THEN RETURN; END IF;
  UPDATE public.paywall_feedback
     SET reason      = p_reason,
         note        = NULLIF(btrim(COALESCE(p_note, '')), ''),
         answered_at = NOW()
   WHERE user_id = auth.uid()
     AND answered_at IS NULL;
END $$;

REVOKE ALL ON FUNCTION public.eb_answer_paywall_feedback(TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.eb_answer_paywall_feedback(TEXT, TEXT) TO authenticated;


-- ── Counts, for the admin funnel tab ───────────────────────────────────────
-- Only answered rows are counted. A dismissal is not an opinion, and folding
-- dismissals into the totals would make every reason look less common than it
-- is. The dismissal count is reported separately by the view below, because
-- the ratio of shown to answered is the response rate and is worth watching.
CREATE OR REPLACE VIEW public.paywall_feedback_summary
WITH (security_invoker = on) AS
SELECT
  reason,
  count(*) AS people,
  round(100.0 * count(*) / NULLIF((SELECT count(*) FROM public.paywall_feedback WHERE reason IS NOT NULL), 0), 1) AS pct_of_answers
FROM public.paywall_feedback
WHERE reason IS NOT NULL
GROUP BY reason
ORDER BY count(*) DESC;

REVOKE ALL ON public.paywall_feedback_summary FROM anon;

CREATE OR REPLACE VIEW public.paywall_feedback_stats
WITH (security_invoker = on) AS
SELECT
  count(*)                                        AS shown,
  count(*) FILTER (WHERE reason IS NOT NULL)      AS answered,
  count(*) FILTER (WHERE note IS NOT NULL AND btrim(note) <> '') AS with_note,
  round(100.0 * count(*) FILTER (WHERE reason IS NOT NULL) / NULLIF(count(*), 0), 1) AS response_rate
FROM public.paywall_feedback;

REVOKE ALL ON public.paywall_feedback_stats FROM anon;

-- ── The notes, which are the actual payload ────────────────────────────────
-- At this volume a single sentence from a real cadet is worth more than any
-- percentage, so the notes are joined to the email to be read and replied to
-- rather than aggregated.
CREATE OR REPLACE VIEW public.paywall_feedback_notes
WITH (security_invoker = on) AS
SELECT f.user_id, p.email, p.full_name, f.reason, f.note,
       f.plan_shown, f.scope_shown, f.answered_at
FROM public.paywall_feedback f
JOIN public.profiles p ON p.id = f.user_id
WHERE f.note IS NOT NULL AND btrim(f.note) <> ''
ORDER BY f.answered_at DESC;

REVOKE ALL ON public.paywall_feedback_notes FROM anon;

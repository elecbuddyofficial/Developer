-- ═══════════════════════════════════════════════════════════════════════════
--  Upgrade funnel: where people fall out on the way to paying.
--
--  WHY. `payments` only gets a row once someone has already pressed buy and an
--  order was created. Everyone who opens the upgrade window, looks at the
--  price and closes it is invisible. So a low conversion rate can be read but
--  not explained, and the explanations need opposite fixes:
--
--    lost at "picked a plan"   -> price, or the three tiers are confusing
--    lost at "reached Razorpay" -> checkout is failing, often only on mobile
--
--  This cannot be backfilled. If it is not recording before a cohort hits the
--  paywall, that cohort's answer is gone.
--
--  WHAT IS NOT STORED. No IP, no user agent, no page contents. The event name,
--  which plan card it concerned, and who. Tied to the account rather than
--  anonymous because "the same person came back three times and still did not
--  buy" is the single most useful thing this can tell you, and it is a
--  logged-in first-party record of actions on their own account.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.funnel_events (
  id         BIGSERIAL PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  event      TEXT NOT NULL,
  plan       TEXT,
  scope      TEXT,
  detail     TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- SET NULL rather than CASCADE, matching payments: a deleted account should
-- not silently rewrite history and make past weeks look quieter than they were.

CREATE INDEX IF NOT EXISTS funnel_events_created_idx ON public.funnel_events (created_at DESC);
CREATE INDEX IF NOT EXISTS funnel_events_event_idx   ON public.funnel_events (event, created_at DESC);
CREATE INDEX IF NOT EXISTS funnel_events_user_idx    ON public.funnel_events (user_id);

ALTER TABLE public.funnel_events ENABLE ROW LEVEL SECURITY;

-- Signed-in users may record their own steps, and only their own: the WITH
-- CHECK ties the row to the caller, so nobody can write events onto someone
-- else's account or forge a conversion.
DROP POLICY IF EXISTS "Users log own funnel events" ON public.funnel_events;
CREATE POLICY "Users log own funnel events" ON public.funnel_events
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Deliberately no SELECT policy for ordinary users. They have no reason to
-- read this back, and not granting it means one less thing to get wrong.
DROP POLICY IF EXISTS "Admins read funnel events" ON public.funnel_events;
CREATE POLICY "Admins read funnel events" ON public.funnel_events
  FOR SELECT USING (public.is_admin());


-- ── The funnel itself ──────────────────────────────────────────────────────
-- Counts PEOPLE, not events, at each step. Someone who opens the window four
-- times is one person still deciding, and counting them four times would make
-- the top of the funnel look healthier than it is.
--
-- Steps are cumulative by definition: reaching Razorpay means they picked a
-- plan first. So each row's count is the number who got at least that far.
CREATE OR REPLACE VIEW public.funnel_summary
WITH (security_invoker = on) AS
WITH ev AS (
  SELECT user_id, event, created_at FROM public.funnel_events WHERE user_id IS NOT NULL
)
-- Step 1 is the wall itself, not the price list. Until `paywall_shown` was
-- added the funnel began at 'opened the price list', which only happens once
-- somebody is already considering paying: 34 expired users were active in a
-- week, 12 carried any funnel event at all, and the other 22 were invisible.
-- The biggest drop-off is meeting the wall and leaving, and it could not be
-- seen.
--
-- 'upgrade_opened' is counted in this step as well, for two reasons. The
-- steps are cumulative by the rule above, and opening the price list means
-- you were stopped by something first. And it repairs the backfill gap:
-- events cannot be backdated, so without it every user recorded before
-- `paywall_shown` shipped would sit under an empty top and the funnel would
-- read 0 -> 16, which is impossible rather than merely incomplete.
--
-- Consequence worth knowing when reading this: until the client that emits
-- `paywall_shown` is deployed, steps 1 and 2 are the same 16 people by
-- construction. They only separate once the new event starts arriving, and
-- the gap between them is the number this whole change exists to show.
SELECT 1 AS step, 'Hit the paywall' AS label,
       count(DISTINCT user_id) AS people
  FROM ev WHERE event IN ('paywall_shown', 'upgrade_opened')
UNION ALL
SELECT 2, 'Opened the price list',
       count(DISTINCT user_id) FROM ev WHERE event = 'upgrade_opened'
UNION ALL
SELECT 3, 'Picked a plan',
       count(DISTINCT user_id) FROM ev WHERE event = 'plan_selected'
UNION ALL
SELECT 4, 'Reached the payment window',
       count(DISTINCT user_id) FROM ev WHERE event = 'checkout_opened'
UNION ALL
-- Taken from payments rather than from an event, because that is the only
-- record that means money actually moved. A client-sent "I paid" event would
-- be the one number in here worth faking.
SELECT 5, 'Paid',
       count(DISTINCT user_id) FROM public.payments WHERE status = 'paid'
ORDER BY step;

REVOKE ALL ON public.funnel_summary FROM anon;

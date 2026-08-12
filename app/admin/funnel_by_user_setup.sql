-- ═══════════════════════════════════════════════════════════════════════════
--  The funnel, per person.
--
--  WHY. funnel_summary answers "how many fell out at each step". That tells
--  you the shape of the problem and nothing about who to talk to. With a few
--  dozen users, the individual answer is worth more than the percentage: a
--  cadet who opened the upgrade window four times and never picked a plan is
--  someone to email, not a number to average away.
--
--  Reads only what funnel_events already records. No new tracking, nothing
--  extra stored about anyone.
--
--  Re-runnable, like every other setup file here.
-- ═══════════════════════════════════════════════════════════════════════════

CREATE OR REPLACE VIEW public.funnel_by_user
WITH (security_invoker = on) AS
WITH ev AS (
  SELECT
    user_id,
    -- Stopped by a locked topic, the question bank or Surveyor Q&A. Recorded
    -- from showGate(), so it is the first thing that happens to anyone who
    -- runs out of access, and the only step the funnel used to miss entirely.
    bool_or(event = 'paywall_shown')    AS hit_paywall,
    bool_or(event = 'upgrade_opened')   AS opened,
    bool_or(event = 'plan_selected')    AS picked,
    bool_or(event = 'checkout_opened')  AS reached_checkout,
    -- Tried to pay and it broke. The most urgent row in the whole table:
    -- they decided to buy and the app failed them.
    bool_or(event = 'payment_failed')   AS payment_failed,
    bool_or(event = 'checkout_blocked') AS checkout_blocked,
    -- Repeat visits are intent. Someone who keeps coming back to the price
    -- and leaving is weighing it up, not uninterested.
    count(*) FILTER (WHERE event = 'upgrade_opened') AS times_opened,
    min(created_at) AS first_seen,
    max(created_at) AS last_seen,
    -- The plan they were last looking at, which is the one to mention if you
    -- contact them.
    (array_agg(plan  ORDER BY created_at DESC) FILTER (WHERE plan  IS NOT NULL))[1] AS last_plan,
    (array_agg(scope ORDER BY created_at DESC) FILTER (WHERE scope IS NOT NULL))[1] AS last_scope
  FROM public.funnel_events
  WHERE user_id IS NOT NULL
  GROUP BY user_id
),
paid AS (
  -- Same rule as funnel_summary: paid comes from money, never from an event.
  SELECT user_id, min(created_at) AS first_paid_at
  FROM public.payments
  WHERE status = 'paid' AND user_id IS NOT NULL
  GROUP BY user_id
)
SELECT
  p.id                                   AS user_id,
  p.email,
  p.full_name,
  p.created_at                           AS signed_up_at,
  p.subscription_plan,
  p.trial_started_at,
  COALESCE(e.times_opened, 0)            AS times_opened,
  e.first_seen,
  e.last_seen,
  e.last_plan,
  e.last_scope,
  COALESCE(e.payment_failed, false)      AS payment_failed,
  COALESCE(e.checkout_blocked, false)    AS checkout_blocked,
  (pd.first_paid_at IS NOT NULL)         AS paid,
  pd.first_paid_at,
  -- Cumulative by definition, so the furthest step reached is the answer.
  CASE
    WHEN pd.first_paid_at IS NOT NULL THEN 4
    WHEN COALESCE(e.reached_checkout, false) THEN 3
    WHEN COALESCE(e.picked, false)           THEN 2
    WHEN COALESCE(e.opened, false)           THEN 1
    ELSE 0
  END AS furthest_step,
  CASE
    WHEN pd.first_paid_at IS NOT NULL THEN 'Paid'
    WHEN COALESCE(e.reached_checkout, false) THEN 'Left at the payment window'
    WHEN COALESCE(e.picked, false)           THEN 'Picked a plan, did not reach payment'
    WHEN COALESCE(e.opened, false)           THEN 'Opened prices, did not pick a plan'
    -- Step 0 used to mean two very different things at once. Somebody who met
    -- the paywall and walked away has told you they wanted something and the
    -- price stopped them; somebody who never met it has told you nothing.
    -- Same step number, because the numbering feeds the admin filter and the
    -- colour scale, but no longer the same sentence.
    WHEN COALESCE(e.hit_paywall, false)      THEN 'Hit the paywall, never opened prices'
    ELSE 'Never opened the upgrade window'
  END AS dropped_at,
  -- Appended rather than slotted in beside the other flags: CREATE OR REPLACE
  -- VIEW can only add columns at the end, and this file has to stay
  -- re-runnable without a DROP.
  COALESCE(e.hit_paywall, false)         AS hit_paywall
FROM public.profiles p
LEFT JOIN ev   e  ON e.user_id  = p.id
LEFT JOIN paid pd ON pd.user_id = p.id
-- Everyone is included, including people who never opened the window at all
-- (step 0). That group is usually the biggest and the easiest to forget, and
-- "never even looked at the price" is a different problem from "looked and
-- said no".
WHERE p.deletion_requested_at IS NULL;

-- security_invoker means this runs as the caller, so the SELECT policies on
-- funnel_events, payments and profiles all still apply and only an admin can
-- read it. Revoking anon as well, matching funnel_summary.
REVOKE ALL ON public.funnel_by_user FROM anon;

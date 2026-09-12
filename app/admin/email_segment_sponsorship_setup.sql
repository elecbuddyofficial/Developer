-- ============================================================
--  email_segment: teach it that Sponsorship exists, and let a
--  group mail be aimed at one course.
--  Re-runnable. Safe to apply more than once.
-- ============================================================
--
--  WHY
--
--  This function was written when Written and Oral were the only things sold.
--  Three of its branches still list only those two columns, so once
--  Sponsorship went on sale it started answering wrongly:
--
--    paid_active    a Sponsorship-only buyer was NOT counted as a paying
--                   customer, so "an offer for our paying customers" skipped
--                   the people who had most recently paid
--    paid_expired   a lapsed Sponsorship customer was invisible to win-back
--    trial_expired  a Sponsorship buyer whose old trial had ended still
--                   counted as an expired trial, so they could be sent
--                   "upgrade to continue" after already buying. Fixed by
--                   asking the payments table instead of the columns - see
--                   the note on that branch for why the obvious fix was wrong
--
--  This is the same fault as the four money functions that granted nothing on
--  11 Sep: a hand-written list of scope columns that a new course was added
--  behind. Fixed the same way - name every scope, every time.
--
--  never_paid is deliberately left alone. It already asks the payments table
--  rather than the profile columns, so it has been scope-agnostic all along
--  and a Sponsorship buyer was never in it.
--
--  AND THE COURSE FILTER
--
--  There was no way to aim a group mail at one course. Everything went to
--  everybody, so a Sponsorship announcement reached CoC-only readers who have
--  never opened that course. p_course fixes that and defaults to NULL, which
--  means "everyone" - so both existing callers keep working untouched.
--
--  Membership of a course is "they chose it OR they bought it".
--
--  KNOWN LIMIT, worth saying out loud: default_track only exists from 9 Sep
--  2026, so 148 of 174 accounts still have NULL and belong to neither course
--  until they next sign in and answer. A course-filtered mail reaches a small,
--  precise audience - 17 for Sponsorship today - and everybody else is only
--  reachable with p_course NULL. That is the honest trade: a filter that
--  silently includes everyone is worse than one that visibly includes few.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   restore the previous one-argument body from
--          claude-cowork/CHANGE_LEDGER.md, which has it recorded verbatim.
-- ============================================================

-- A parameter cannot be added by CREATE OR REPLACE, so the old signature goes
-- first. Both callers pass p_segment by name and p_course defaults to NULL, so
-- neither needs changing for this to be correct.
DROP FUNCTION IF EXISTS public.email_segment(text);

CREATE OR REPLACE FUNCTION public.email_segment(
  p_segment text,
  p_course  text DEFAULT NULL
)
RETURNS TABLE(id uuid, email text, full_name text, unsubscribe_token text)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT p.id, p.email, p.full_name, p.unsubscribe_token
  FROM public.profiles p
  WHERE p.email IS NOT NULL
    AND COALESCE(p.marketing_opt_out, false) = false
    -- Never mail an account that has asked to be deleted.
    AND p.deletion_requested_at IS NULL
    -- Which course this mail is for. NULL means everyone, which is what both
    -- callers asked for before this parameter existed.
    AND CASE
      WHEN p_course IS NULL THEN true
      -- Sponsorship membership is "chose it, or bought it" - NOT "has a
      -- sponsorship_expires_at". That column was filled for 161 accounts by
      -- the blanket grace backfill on 11 Sep, so it says nothing at all about
      -- whether somebody wants this course. Using it made the filter return
      -- 173 of 174 people, which is not a filter. Measured before changing.
      WHEN p_course = 'sponsorship' THEN
        p.default_track = 'sponsorship'
        OR EXISTS (SELECT 1 FROM public.payments pm
                   WHERE pm.user_id = p.id AND pm.status = 'paid'
                     AND pm.scope = 'sponsorship')
      -- The COC columns were never blanket-filled, so holding one is real
      -- evidence of the course, and they stay a membership signal here.
      WHEN p_course = 'coc' THEN
        p.default_track = 'coc'
        OR p.written_expires_at IS NOT NULL
        OR p.oral_expires_at IS NOT NULL
      ELSE false          -- an unknown course mails nobody, never everybody
    END
    AND CASE p_segment
      WHEN 'all' THEN true
      WHEN 'trial_active' THEN
        p.subscription_plan = 'trial'
        AND p.trial_started_at > NOW() - INTERVAL '3 days'
      -- "Trial over, never converted." Asked of the payments table, not of
      -- the profile columns.
      --
      -- Adding "AND sponsorship_expires_at IS NULL" here, which is the obvious
      -- fix and what this file first did, takes this segment from 141 people
      -- to 1: the grace backfill on 11 Sep put a date in that column for 161
      -- accounts who never paid anything, so "has a date" stopped meaning
      -- "bought something". Measured before keeping.
      WHEN 'trial_expired' THEN
        p.subscription_plan = 'trial'
        AND p.trial_started_at <= NOW() - INTERVAL '3 days'
        AND NOT EXISTS (SELECT 1 FROM public.payments pm
                        WHERE pm.user_id = p.id AND pm.status = 'paid')
      WHEN 'paid_active' THEN
        p.subscription_plan = 'lifetime'
        OR p.written_expires_at > NOW()
        OR p.oral_expires_at > NOW()
        OR p.sponsorship_expires_at > NOW()
      -- "Paid once, lapsed now." The EXISTS is load-bearing: without it,
      -- naming sponsorship_expires_at here sweeps in all 161 grace accounts,
      -- who never bought anything, and aims win-back mail at them. That is
      -- precisely the mistake that mailed 158 people on 12 Sep.
      --
      -- Reads 0 today, and that is correct: the one account this drops
      -- (starter plan, lapsed 31 Aug) has zero paid rows - it was comped, not
      -- sold. It remains reachable through never_paid and all.
      WHEN 'paid_expired' THEN
        p.subscription_plan <> 'lifetime'
        AND EXISTS (SELECT 1 FROM public.payments pm
                    WHERE pm.user_id = p.id AND pm.status = 'paid')
        AND COALESCE(p.written_expires_at,     '-infinity') <= NOW()
        AND COALESCE(p.oral_expires_at,        '-infinity') <= NOW()
        AND COALESCE(p.sponsorship_expires_at, '-infinity') <= NOW()
      WHEN 'never_paid' THEN
        NOT EXISTS (SELECT 1 FROM public.payments pm
                    WHERE pm.user_id = p.id AND pm.status = 'paid')
      ELSE false
    END;
$function$;

COMMENT ON FUNCTION public.email_segment(text, text) IS
  'Recipients for a group mail. p_segment picks the audience, p_course narrows it to one course (NULL = both). Every paid branch names all three scope columns; never_paid asks the payments table instead.';

-- ============================================================
--  Verify (expect: the Sponsorship grace cohort counted as paid_expired
--  rather than as never-buyers, and the course filter actually narrowing)
-- ============================================================
-- SELECT count(*) FROM public.email_segment('all');
-- SELECT count(*) FROM public.email_segment('all', 'sponsorship');
-- SELECT count(*) FROM public.email_segment('all', 'coc');
-- SELECT count(*) FROM public.email_segment('paid_active');
-- SELECT count(*) FROM public.email_segment('paid_active', 'sponsorship');
-- SELECT count(*) FROM public.email_segment('nonsense', 'sponsorship');  -- 0
-- SELECT count(*) FROM public.email_segment('all', 'nonsense');          -- 0

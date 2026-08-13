-- Sponsorship reading progress.
--
-- A SEPARATE column rather than sharing topic_progress. The main app writes
-- that column as a whole object (update({topic_progress: wholeMap})), so a
-- sponsorship key living in it would be wiped the next time somebody read an
-- oral topic, and vice versa. Two writers, one blob, last one wins.
--
-- Topic-open events still share topic_activity: the id prefix already
-- separates them (F01/A01/IP01 against T01/W01) and the existing kind values
-- 'notes' and 'quiz' cover what Sponsorship records, so nothing there changes.
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS sponsorship_progress JSONB NOT NULL DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.profiles.sponsorship_progress IS
  'Fraction of each Sponsorship module read, keyed by module id (F01, A01, IP01). '
  'Separate from topic_progress because both are written as whole objects.';

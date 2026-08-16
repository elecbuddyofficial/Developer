-- ═══════════════════════════════════════════════════════════════════════════
--  Maritime News: headlines pulled daily, published by hand
--  Re-runnable. Safe to apply more than once.
-- ═══════════════════════════════════════════════════════════════════════════
--
--  WHY THIS IS A TABLE AND NOT A CONTENT FILE
--
--  Every other module under data/Sponsorship/ is AES-encrypted JS, built and
--  encrypted at deploy time. News cannot work that way: it changes daily and
--  a deploy per day is not a pipeline, it is a chore that will be abandoned in
--  a fortnight. So it lives in the database, like sponsorship_notices.
--
--  AND IT IS NOT ENCRYPTED, DELIBERATELY. The encryption exists to stop the
--  course being copied out of a public repo. A headline from gCaptain is not
--  the course; it is already public on gCaptain. Encrypting it would be effort
--  spent protecting something anyone can read anyway.
--
--  WHY is_published DEFAULTS TO FALSE
--
--  This is the whole design. The feeds are a firehose: the first item in
--  Maritime Executive's feed the day this was written was "Diversified Marine
--  Completes M/V Edwin Rider for Vulcan Materials", which no cadet can use in
--  an interview. Asked what is happening in the industry, they need five or
--  ten stories they can actually discuss.
--
--  So the fetcher only ever proposes. Nothing reaches a cadet until an admin
--  publishes it, which is also where "why this matters" gets written. Auto
--  publishing would lower the bar of a paid product rather than fill a gap in
--  it.
--
--  APPLY:  paste into the Supabase SQL editor and run.
--  UNDO:   DROP TABLE public.maritime_news;
--          (recorded in claude-cowork/CHANGE_LEDGER.md)
-- ═══════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.maritime_news (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- The link identifies the story. Two feeds syndicating the same Reuters
  -- piece carry the same URL, and the fetcher runs every day over a window
  -- that overlaps yesterday's, so without this the table would fill with
  -- duplicates within a week.
  link          TEXT NOT NULL UNIQUE,
  title         TEXT NOT NULL,
  source        TEXT NOT NULL,           -- 'gCaptain', 'Splash 247', ...
  summary       TEXT,                    -- plain text, stripped of the feed's HTML
  published_at  TIMESTAMPTZ,             -- from the feed, may be null if unparseable

  -- The curation gate.
  is_published  BOOLEAN NOT NULL DEFAULT FALSE,
  editor_note   TEXT,                    -- "why a cadet should know this"
  published_by  UUID REFERENCES auth.users ON DELETE SET NULL,
  published_at_by_us TIMESTAMPTZ,

  fetched_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT maritime_news_link_http CHECK (link ~* '^https?://')
);

-- The cadet-facing read: published only, newest first.
CREATE INDEX IF NOT EXISTS maritime_news_published_idx
  ON public.maritime_news (published_at DESC NULLS LAST)
  WHERE is_published;

-- The admin review read: what has come in and not been decided on.
CREATE INDEX IF NOT EXISTS maritime_news_queue_idx
  ON public.maritime_news (fetched_at DESC)
  WHERE NOT is_published;

ALTER TABLE public.maritime_news ENABLE ROW LEVEL SECURITY;

-- Same shape as sponsorship_notices. Signed-in users read what is published;
-- admins see and change everything. An unpublished row is invisible to cadets,
-- which is what makes the gate real rather than cosmetic.
DROP POLICY IF EXISTS "Authenticated read published news" ON public.maritime_news;
CREATE POLICY "Authenticated read published news"
  ON public.maritime_news FOR SELECT
  TO authenticated USING (is_published OR public.is_admin());

DROP POLICY IF EXISTS "Admin insert news" ON public.maritime_news;
CREATE POLICY "Admin insert news"
  ON public.maritime_news FOR INSERT
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin update news" ON public.maritime_news;
CREATE POLICY "Admin update news"
  ON public.maritime_news FOR UPDATE
  USING (public.is_admin()) WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Admin delete news" ON public.maritime_news;
CREATE POLICY "Admin delete news"
  ON public.maritime_news FOR DELETE
  USING (public.is_admin());

-- NOTE the fetcher does NOT rely on those policies. It runs as the service
-- role from an Edge Function, which bypasses RLS. The policies govern the two
-- browsers: the admin console and the Sponsorship app.

COMMENT ON TABLE public.maritime_news IS
  'Maritime headlines pulled daily by the fetch-maritime-news Edge Function and shown in the Sponsorship app once an admin publishes them. Not encrypted, unlike the rest of data/Sponsorship, because the content is public news rather than course material. is_published defaults false on purpose: the feeds are a firehose and only a handful of stories are worth an interview.';

-- ═══════════════════════════════════════════════════════════════════════════
--  Housekeeping
-- ═══════════════════════════════════════════════════════════════════════════
--  The fetcher prunes stale unpublished rows itself so the review queue does
--  not grow without limit. Published rows are never pruned automatically:
--  somebody decided those were worth keeping, and a story a cadet was told to
--  read should not vanish because it aged.
--
--  To clear the queue by hand if it ever gets away from you:
--    DELETE FROM public.maritime_news
--     WHERE NOT is_published AND fetched_at < NOW() - INTERVAL '30 days';

-- ═══════════════════════════════════════════════════════════════════════════
--  Verify (expect: table present, RLS on, 4 policies)
-- ═══════════════════════════════════════════════════════════════════════════
-- SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'maritime_news';
-- SELECT policyname, cmd FROM pg_policies WHERE tablename = 'maritime_news' ORDER BY cmd;
--
--  The unique link is what stops daily re-runs duplicating everything:
-- INSERT INTO public.maritime_news (link, title, source)
--   VALUES ('https://example.com/a', 'x', 'test');
-- INSERT INTO public.maritime_news (link, title, source)
--   VALUES ('https://example.com/a', 'y', 'test');   -- expect: duplicate key
-- DELETE FROM public.maritime_news WHERE source = 'test';

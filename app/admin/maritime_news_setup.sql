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

  /* WHEN IT STOPS BEING SHOWN.
     This module is current affairs, so stale content is not untidy, it is
     wrong: a cadet citing a three-month-old story as recent is worse off than
     one who says nothing. A week is the right default, and it costs nothing
     to maintain because it happens by itself.

     NOT NULL with a default, so the fail-safe direction is "expires". A
     nullable column meaning "never expires" would mean one forgotten field
     leaves a story on the page indefinitely, which is exactly the failure
     this is here to prevent.

     Adjustable per story, because some do not go stale in a week. "Hormuz
     Ship Attacks Mount As US Vows To Cripple Iran Economy" is a question a
     cadet will face for months; a newbuild delivery is finished in days. */
  published_until DATE NOT NULL DEFAULT (CURRENT_DATE + 7),

  fetched_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT maritime_news_link_http CHECK (link ~* '^https?://')
);

-- The cadet-facing read: published, not yet expired, newest first.
CREATE INDEX IF NOT EXISTS maritime_news_published_idx
  ON public.maritime_news (published_until, published_at DESC NULLS LAST)
  WHERE is_published;

-- The admin review read: what has come in and not been decided on.
CREATE INDEX IF NOT EXISTS maritime_news_queue_idx
  ON public.maritime_news (fetched_at DESC)
  WHERE NOT is_published;

ALTER TABLE public.maritime_news ENABLE ROW LEVEL SECURITY;

-- Same shape as sponsorship_notices. Signed-in users read what is published;
-- admins see and change everything. An unpublished row is invisible to cadets,
-- which is what makes the gate real rather than cosmetic.
/* The expiry is enforced HERE, not in the client. A stale story cannot reach
   a cadet even if a future query forgets to filter, which is the same reason
   sponsorship_notices puts its window in the query rather than the render. */
DROP POLICY IF EXISTS "Authenticated read published news" ON public.maritime_news;
CREATE POLICY "Authenticated read published news"
  ON public.maritime_news FOR SELECT
  TO authenticated USING (
    (is_published AND published_until >= CURRENT_DATE)
    OR public.is_admin()
  );

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
  'Maritime headlines pulled daily by the fetch-maritime-news Edge Function and shown in the Sponsorship app once an admin publishes them, until published_until passes. Not encrypted, unlike the rest of data/Sponsorship, because the content is public news rather than course material. is_published defaults false on purpose: the feeds are a firehose and only a handful of stories are worth an interview. published_until defaults to a week, because a current-affairs module carrying stale news is wrong rather than merely untidy.';

COMMENT ON COLUMN public.maritime_news.published_until IS
  'Last day this story is shown. Defaults to a week after publishing and can be pushed out for a story that stays interview-relevant. Enforced in the RLS policy, so an expired story cannot reach a cadet even if a client query forgets to filter.';

-- ═══════════════════════════════════════════════════════════════════════════
--  Housekeeping
-- ═══════════════════════════════════════════════════════════════════════════
--  Two separate things, and the difference matters.
--
--  DISAPPEARING is instant and automatic: once published_until passes, the RLS
--  policy stops returning the row and it is gone from the app that day. That
--  is what keeps the module fresh, and it needs nobody to remember anything.
--
--  DELETING happens 30 days later, in the fetcher. The gap is deliberate. An
--  expired row still holds the editor note explaining why the story mattered,
--  and that note is the only part nobody can re-fetch. A month of tail costs a
--  few hundred rows and buys back a mis-set date or a story that becomes
--  relevant again.
--
--  To clear things by hand if either ever gets away from you:
--    DELETE FROM public.maritime_news
--     WHERE NOT is_published AND fetched_at < NOW() - INTERVAL '30 days';
--    DELETE FROM public.maritime_news
--     WHERE published_until < CURRENT_DATE - 30;
--
--  To bring an expired story back, move the date rather than re-publishing:
--    UPDATE public.maritime_news
--       SET published_until = CURRENT_DATE + 7 WHERE id = '...';

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
--
--  A new row should default to a week from today:
-- SELECT published_until, published_until - CURRENT_DATE AS days
--   FROM public.maritime_news WHERE source = 'test';   -- expect: 7
--
-- DELETE FROM public.maritime_news WHERE source = 'test';
--
--  And the expiry must actually hide things. Run as a NON-ADMIN, because the
--  policy's second branch trusts admins and this reads as working either way
--  from the SQL editor, which is the trap recorded in CHANGE_LEDGER.md:
-- INSERT INTO public.maritime_news (link, title, source, is_published, published_until)
--   VALUES ('https://example.com/stale', 'should be invisible', 'test',
--           TRUE, CURRENT_DATE - 1);
--  -- as a signed-in non-admin, this must return 0 rows:
-- SELECT count(*) FROM public.maritime_news WHERE link = 'https://example.com/stale';
-- DELETE FROM public.maritime_news WHERE source = 'test';

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// Pulls maritime headlines once a day into public.maritime_news.
//
// Triggered by GitHub Actions with the shared CRON_SECRET, the same way
// purge-deleted-accounts and send-expiry-emails are. There is no pg_cron on
// this project.
//
// IT PROPOSES, IT DOES NOT PUBLISH. Everything lands with is_published false
// and stays invisible to cadets until an admin decides otherwise. The feeds
// are a firehose and most of what they carry is useless in an interview, so
// the gate is the point of the feature rather than an obstacle to it.
//
// WHY THIS RUNS SERVER SIDE AT ALL. None of the four feeds sends an
// Access-Control-Allow-Origin header, checked rather than assumed, so a
// browser cannot read them. The alternative was a third-party CORS proxy in
// the reader's request path, which would put a free service with no SLA
// between a paying cadet and the page.
//
// TWO FORMATS, NOT ONE. Maritime Executive publishes Atom (<entry>, and the
// URL in a link href attribute); the other three publish RSS 2.0 (<item>, and
// the URL as element text). A parser written for only one silently returns
// zero items for the other, which looks exactly like a quiet feed.
// ─────────────────────────────────────────────────────────────────────────

const FEEDS: { name: string; url: string }[] = [
  { name: 'gCaptain',           url: 'https://gcaptain.com/feed/' },
  { name: 'Splash 247',         url: 'https://splash247.com/feed/' },
  { name: 'Marine Insight',     url: 'https://www.marineinsight.com/feed/' },
  { name: 'Maritime Executive', url: 'https://maritime-executive.com/articles.rss' },
  // IMO's own feed returns HTTP 500 and is left out until it does not.
];

// Per feed, newest first. A day's worth is a handful; this is headroom for a
// busy day, not a target.
const MAX_PER_FEED = 25;

// Unpublished rows older than this are dropped, so the review queue cannot
// grow without limit. Published rows are never touched: somebody decided
// those were worth keeping.
const PRUNE_DAYS = 30;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

/** Text out of one XML element, CDATA or not. */
function tag(block: string, name: string): string | null {
  const m = block.match(new RegExp('<' + name + '(?:\\s[^>]*)?>([\\s\\S]*?)<\\/' + name + '>', 'i'));
  if (!m) return null;
  return m[1].replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '').trim();
}

/** The named attribute of the first matching element. */
function attr(block: string, name: string, key: string): string | null {
  const m = block.match(new RegExp('<' + name + '\\s[^>]*' + key + '\\s*=\\s*"([^"]*)"', 'i'));
  return m ? m[1] : null;
}

/* Feed text is HTML-escaped, and often twice: gCaptain ships
   "Don&#8217;t" for a curly apostrophe. Left alone, a title reads with raw
   entity codes in the middle of it. */
function decode(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')            // last, or it un-escapes the others early
    .replace(/\s+/g, ' ')
    .trim();
}

function toISO(raw: string | null): string | null {
  if (!raw) return null;
  const t = Date.parse(raw);            // handles RFC 822 and ISO 8601 alike
  return Number.isNaN(t) ? null : new Date(t).toISOString();
}

type Item = { link: string; title: string; source: string; summary: string | null; published_at: string | null };

function parseFeed(xml: string, source: string): Item[] {
  const blocks = xml.match(/<(item|entry)(?:\s[^>]*)?>[\s\S]*?<\/\1>/gi) ?? [];
  const out: Item[] = [];

  for (const b of blocks) {
    // RSS puts the URL in the element; Atom puts it in a href attribute.
    let link = tag(b, 'link');
    if (!link || !/^https?:\/\//i.test(link)) link = attr(b, 'link', 'href');
    const title = tag(b, 'title');
    if (!link || !title || !/^https?:\/\//i.test(link)) continue;

    const summaryRaw = tag(b, 'description') ?? tag(b, 'summary') ?? tag(b, 'content');
    const dateRaw    = tag(b, 'pubDate') ?? tag(b, 'published') ?? tag(b, 'updated');
    const summary    = summaryRaw ? decode(summaryRaw).slice(0, 600) : null;

    out.push({
      link: decode(link),
      title: decode(title).slice(0, 400),
      source,
      summary: summary && summary.length > 20 ? summary : null,
      published_at: toISO(dateRaw),
    });
    if (out.length >= MAX_PER_FEED) break;
  }
  return out;
}

serve(async (req) => {
  const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const CRON_SECRET      = Deno.env.get('CRON_SECRET');

  // Not a user-facing endpoint. Refuses outright when no secret is set rather
  // than defaulting to open, matching the other cron functions here.
  const auth = req.headers.get('Authorization');
  if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) return json({ error: 'Unauthorized' }, 401);

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  let added = 0, seen = 0, feedsOk = 0;
  const errors: string[] = [];

  try {
    for (const feed of FEEDS) {
      /* Each feed is wrapped on its own. One site being down, slow or
         reformatted must cost that site's headlines and nothing else: three
         working feeds are still a useful day, and a run that aborts on the
         first failure would give none. */
      try {
        const ctl = new AbortController();
        const timer = setTimeout(() => ctl.abort(), 15000);
        const res = await fetch(feed.url, {
          signal: ctl.signal,
          headers: { 'User-Agent': 'Elec-Buddy news fetcher (+https://elec-buddy.com)' },
        });
        clearTimeout(timer);
        if (!res.ok) throw new Error('HTTP ' + res.status);

        const items = parseFeed(await res.text(), feed.name);
        // A feed that parses to nothing is a parser problem or a redesign,
        // not a quiet news day. Say so rather than reporting a clean run.
        if (!items.length) throw new Error('parsed 0 items');
        seen += items.length;
        feedsOk++;

        /* onConflict on the unique link, ignoreDuplicates so a story already
           in the table is left exactly as it is. That is what protects an
           admin's decision: without it, tomorrow's run would overwrite a
           published row and reset it, quietly un-publishing curated news. */
        const { data, error } = await sb
          .from('maritime_news')
          .upsert(items, { onConflict: 'link', ignoreDuplicates: true })
          .select('id');
        if (error) throw new Error(error.message);
        added += (data ?? []).length;

      } catch (e) {
        errors.push(`${feed.name}: ${String(e).slice(0, 120)}`);
      }
    }

    // Housekeeping, and only ever on rows nobody chose to keep.
    const cutoff = new Date(Date.now() - PRUNE_DAYS * 86400000).toISOString();
    const { error: pruneErr } = await sb.from('maritime_news')
      .delete().eq('is_published', false).lt('fetched_at', cutoff);
    if (pruneErr) errors.push('prune: ' + pruneErr.message);

    /* ok means every feed answered. A partial run still stores what it got,
       but it must not report itself as healthy: a feed that quietly stopped
       working for a month is exactly the kind of thing that is only noticed
       when somebody wonders why the queue looks thin. */
    const ok = feedsOk === FEEDS.length;
    await sb.from('cron_runs').insert({
      job: 'fetch-maritime-news',
      ok,
      sent: added,
      failed: FEEDS.length - feedsOk,
      skipped: seen - added,
      error: errors.length ? errors.join(' | ').slice(0, 500) : null,
    });

    return json({ ok, feeds_ok: feedsOk, of: FEEDS.length, items_seen: seen, added, errors });

  } catch (e) {
    await sb.from('cron_runs').insert({
      job: 'fetch-maritime-news',
      ok: false, sent: added, failed: FEEDS.length - feedsOk, skipped: 0,
      error: String(e).slice(0, 500),
    }).then(() => {}, () => {});
    return json({ error: String(e) }, 500);
  }
});

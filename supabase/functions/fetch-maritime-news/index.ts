import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─────────────────────────────────────────────────────────────────────────
// Pulls maritime headlines once a day into public.maritime_news.
//
// Triggered by GitHub Actions with the shared CRON_SECRET, the same way
// purge-deleted-accounts and send-expiry-emails are. There is no pg_cron on
// this project.
//
// IT RUNS ITSELF. The model scores every story for interview usefulness and
// the best few are published automatically. There is nobody to work a review
// queue daily, and a gate nobody operates leaves the module empty forever,
// which is worse than an imperfect automatic one. Changed from human curation
// on 16 Aug 2026 at Blesson's direction.
//
// The feeds are still a firehose, so the selection is the point of the
// feature: about 62 stories arrive daily and perhaps five matter. A score
// threshold plus a per-run cap does what the reviewer was there for, and the
// one-week expiry keeps the page from growing into a wall.
//
// Anything published can still be pulled by hand in the database. The model
// decides what goes up; it does not get the last word on what stays.
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

/* Claude picks what is worth reading.
   Set with:  supabase secrets set ANTHROPIC_API_KEY=sk-ant-...

   Gemini was tried first and abandoned: an AI Studio key works for listing
   models but returns 403 PERMISSION_DENIED on generateContent, because the
   Cloud project behind it is refused. Anthropic keys carry no Cloud project,
   so there is nothing equivalent to go wrong.

   Leave the key unset and everything else still works. Stories are fetched and
   stored, just never scored, and with nothing scored nothing is published.

   Haiku rather than Sonnet: this is classification against a written rubric,
   which is what the small model is for, and it runs once a day over about
   sixty short headlines. Override with CLAUDE_MODEL if the picks look poor. */
const CLAUDE_MODEL = Deno.env.get('CLAUDE_MODEL') ?? 'claude-haiku-4-5-20251001';

/* Only enough of the summary to disambiguate a vague headline. Feed titles
   are written to stand alone, so this is a hint rather than the evidence, and
   sending the full 300 characters for all sixty stories tripled the input for
   almost no change in the scores. */
const SUMMARY_CHARS_SENT = 90;

// One batch a day, so a limit far above a day's volume. Caps the blast radius
// of a feed suddenly returning hundreds of items.
const MAX_TO_SCORE = 80;

/* ── Autonomous publishing ────────────────────────────────────────────
   There is nobody to work a review queue daily, and a gate nobody operates
   means an empty module forever, which is worse than an imperfect automatic
   one. So the model's score decides.

   THE SCORE IS A JUDGEMENT, WHICH IS THE SAFE PART TO AUTOMATE. What is not
   safe is generated prose asserted as fact, so the page always shows the
   publisher's own headline and summary beside the note, and links out to the
   source. A cadet can always see where it came from.

   THE THRESHOLD AND THE CAP TOGETHER DO WHAT THE HUMAN WAS FOR. 62 stories a
   day arrive and perhaps five matter. Publishing everything above a bar would
   still flood the page on a busy news day, so the cap holds the module to a
   readable size no matter what the feeds do. Combined with the one-week
   expiry, a cadet sees roughly a fortnight's worth of significant stories
   rather than a wall. */
const AUTO_PUBLISH_MIN_SCORE = 7;   // 10 is a major industry event, 0 is a vessel delivery
const AUTO_PUBLISH_MAX_PER_RUN = 8;

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

/* Wire copy opens with boilerplate that means nothing to a reader here:
   "By Arsalan Shahla, Catherine Lucey and Sara Gharaibeh Aug 15, 2026
   (Bloomberg) –" and "CAIRO, Aug 15 (Reuters) –". Left in, the first line of
   every card is a byline instead of the story, and with the summary trimmed
   to a couple of hundred characters that boilerplate crowds out the actual
   news.

   Anchored to the start and bounded in length on purpose. A greedy rule would
   happily eat a sentence that merely begins with a place name. */
function stripDateline(s: string): string {
  return s
    // "By Name, Name and Name Aug 15, 2026 (Bloomberg) -"
    .replace(/^By\s+[^.]{0,120}?\((?:Bloomberg|Reuters|AP|AFP|PA)\)\s*[–—-]+\s*/i, '')
    // "CAIRO, Aug 15 (Reuters) -"
    .replace(/^[A-Z][A-Za-z .'-]{0,30},?\s+\w{3,9}\s+\d{1,2}\s*\((?:Reuters|Bloomberg|AP|AFP|PA)\)\s*[–—-]+\s*/, '')
    // A bare trailing byline with no agency, e.g. "By Jane Doe -"
    .replace(/^By\s+[A-Z][A-Za-z .'-]{2,60}\s*[–—-]+\s*/, '')
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
    const summary    = summaryRaw ? stripDateline(decode(summaryRaw)).slice(0, 600) : null;

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

type Scored = { i: number; score: number; note: string };

/* Rank a batch by how useful each story would be in a sponsorship interview,
   and draft one line on why.

   THE PROMPT IS WRITTEN AROUND ONE RULE: never state a fact that is not in
   the text supplied. A model that invents a plausible-sounding reason, copied
   into the module unchecked, sends a cadet to repeat something untrue in an
   interview. So it is told to work only from what it is given, and to score
   low rather than reach when a headline does not say enough.

   Returns [] on any failure. Scoring is a convenience for sorting a queue; if
   it does not happen, the queue is simply in date order and the day's news is
   still there. It must never cost us the fetch. */
async function scoreBatch(items: { title: string; summary: string | null; source: string }[],
                          apiKey: string): Promise<Scored[]> {
  const list = items.map((it, i) =>
    `${i}|${it.source}|${it.title}${it.summary ? ' — ' + it.summary.slice(0, SUMMARY_CHARS_SENT) : ''}`
  ).join('\n');

  /* Terse on purpose. Every word here is paid for once per run, and a rubric
     the model can apply does not need to be written out as prose. */
  const prompt =
`Indian marine engineering cadets face sponsorship interviews where they are asked what is happening in the shipping industry.

Score each story 0-10 for how useful it is to know in that interview.
8-10: regulation, casualties, war, sanctions, trade routes, fuel and emissions, big shifts in employment or company activity.
4-7: notable but narrow.
0-3: one company's routine news, a vessel delivery, a product launch, an appointment.

note: leave it EMPTY unless the score is 7 or more. For 7+, at most 20 words on why it matters to a cadet.
Use only the text given. Add no facts, figures, dates or context that are not above. If the line is too vague to judge, score it low.

id|source|headline
${list}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    signal: AbortSignal.timeout(90000),
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      /* Enough for sixty {i,score} pairs plus the handful of notes. Notes are
         suppressed below the bar precisely because they are most of the
         output cost: roughly eight of sixty qualify. */
      max_tokens: 3000,
      temperature: 0,               // classification, not writing: no variance wanted
      /* A tool schema rather than "please reply in JSON". The API enforces
         the shape, so there is no prose to strip, no markdown fence to trip
         over, and no wasted tokens explaining the format. */
      tools: [{
        name: 'rank',
        description: 'Return a score for every story, in order.',
        input_schema: {
          type: 'object',
          properties: {
            s: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  i:     { type: 'integer', description: 'the id from the list' },
                  score: { type: 'integer', description: '0-10' },
                  note:  { type: 'string',  description: 'empty unless score >= 7' },
                },
                required: ['i', 'score', 'note'],
              },
            },
          },
          required: ['s'],
        },
      }],
      tool_choice: { type: 'tool', name: 'rank' },
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!res.ok) throw new Error('claude HTTP ' + res.status + ' ' + (await res.text()).slice(0, 200));

  const body = await res.json();
  const block = (body?.content ?? []).find((c: { type: string }) => c.type === 'tool_use');
  if (!block) throw new Error('claude returned no tool_use block');

  /* Validated rather than trusted. The schema makes the shape very likely,
     not certain, and a bad index would write one story's note onto another. */
  const rows = block.input?.s;
  if (!Array.isArray(rows)) throw new Error('claude did not return an array');
  return rows.filter((r: Scored) =>
    Number.isInteger(r?.i) && r.i >= 0 && r.i < items.length &&
    Number.isInteger(r?.score) && r.score >= 0 && r.score <= 10 &&
    typeof r?.note === 'string'
  );
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

    /* ── Rank what came in ────────────────────────────────────────────
       Wrapped whole. Gemini being down, out of quota, slow or newly fussy
       about a schema costs the sorting and nothing else: the stories are
       already saved by this point, and an unranked queue in date order is
       exactly what this did before the key existed. */
    let scored = 0, published = 0;
    const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY');
    if (ANTHROPIC_API_KEY) {
      try {
        // Only what has never been scored, so a re-run does not re-spend on
        // stories already ranked, and a manual re-trigger is cheap.
        const { data: todo, error: todoErr } = await sb
          .from('maritime_news')
          .select('id, title, summary, source')
          .is('ai_score', null)
          .eq('is_published', false)
          .order('fetched_at', { ascending: false })
          .limit(MAX_TO_SCORE);
        if (todoErr) throw new Error(todoErr.message);

        if (todo && todo.length) {
          const ranked = await scoreBatch(todo, ANTHROPIC_API_KEY);

          // Step one: record what the model thought. No publishing here.
          for (const r of ranked) {
            const row = todo[r.i];
            if (!row) continue;
            const { error: upErr } = await sb.from('maritime_news')
              .update({
                ai_score: r.score,
                ai_note: r.note.slice(0, 300),
                ai_model: CLAUDE_MODEL,
              })
              .eq('id', row.id);
            if (!upErr) scored++;
          }
        }

        /* Step two, and deliberately a SEPARATE query over everything still
           unpublished rather than only over what was scored a moment ago.

           The first version capped this run's winners, which quietly threw
           work away: today's real batch scored 17 stories at 7 or above
           against a cap of 8, so nine good stories would have been marked
           scored, never published, and then skipped by every future run
           because they already had a score. Nine lost per day, invisibly.

           Reading the whole unpublished pool instead means a story that lost
           to a busier day is still in the running tomorrow, and a quiet day
           fills its slots from the backlog rather than publishing nothing. */
        const backlogSince = new Date(Date.now() - 3 * 86400000).toISOString();
        const { data: best, error: bestErr } = await sb
          .from('maritime_news')
          .select('id, ai_note')
          .eq('is_published', false)
          .gte('ai_score', AUTO_PUBLISH_MIN_SCORE)
          // Not older than a few days: a week-old story published today would
          // expire almost immediately and reads as stale on arrival.
          .gte('fetched_at', backlogSince)
          .order('ai_score', { ascending: false })
          .order('published_at', { ascending: false, nullsFirst: false })
          .limit(AUTO_PUBLISH_MAX_PER_RUN);
        if (bestErr) throw new Error(bestErr.message);

        for (const row of best ?? []) {
          /* editor_note is written from ai_note here rather than the app
             reading ai_note directly. It keeps what was published distinct
             from what the model last said, so a note corrected by hand is not
             reverted by a later run. */
          const { error: pubErr } = await sb.from('maritime_news')
            .update({ is_published: true, editor_note: (row.ai_note ?? '').slice(0, 300) })
            .eq('id', row.id);
          if (!pubErr) published++;
        }
      } catch (e) {
        errors.push('scoring: ' + String(e).slice(0, 160));
      }
    }

    /* Housekeeping. Note this is NOT what makes the module fresh: a story
       stops being shown the day published_until passes, enforced in the RLS
       policy, with nothing needing to run at all. This only reclaims rows
       long after they went dark.

       Two cases, kept separate because they are different mistakes to make:
       headlines nobody ever chose, and stories whose week ran out a month
       ago. Neither can touch anything currently visible. */
    const cutoff = new Date(Date.now() - PRUNE_DAYS * 86400000).toISOString();

    const { error: pruneQueueErr } = await sb.from('maritime_news')
      .delete().eq('is_published', false).lt('fetched_at', cutoff);
    if (pruneQueueErr) errors.push('prune queue: ' + pruneQueueErr.message);

    // A DATE column, so this is compared as a plain date string. Building it
    // from toISOString and slicing keeps it in UTC rather than straddling the
    // function's timezone and the database's.
    const expiredBefore = new Date(Date.now() - PRUNE_DAYS * 86400000).toISOString().slice(0, 10);
    const { error: pruneOldErr } = await sb.from('maritime_news')
      .delete().lt('published_until', expiredBefore);
    if (pruneOldErr) errors.push('prune expired: ' + pruneOldErr.message);

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
      skipped: published,   // reused: how many auto-published this run
      error: errors.length ? errors.join(' | ').slice(0, 500) : null,
    });

    return json({ ok, feeds_ok: feedsOk, of: FEEDS.length, items_seen: seen, added, scored, published, errors });

  } catch (e) {
    await sb.from('cron_runs').insert({
      job: 'fetch-maritime-news',
      ok: false, sent: added, failed: FEEDS.length - feedsOk, skipped: 0,
      error: String(e).slice(0, 500),
    }).then(() => {}, () => {});
    return json({ error: String(e) }, 500);
  }
});

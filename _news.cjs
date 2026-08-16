#!/usr/bin/env node
/* Maritime news pipeline: does it propose without publishing?
   Run: node _news.cjs
   Add --live to also parse the four real feeds (needs network and Deno).

   THE THING THIS PROTECTS. Every row must land unpublished. The feeds carry
   about a hundred stories a day and a handful are worth an interview: the
   first item in Maritime Executive's feed the day this was written was
   "Diversified Marine Completes M/V Edwin Rider for Vulcan Materials", which
   no cadet can use. If a change ever lets the fetcher publish directly, or
   lets a daily re-run overwrite a row an admin already curated, the module
   quietly becomes a firehose and nobody would notice from the outside. */

const fs = require('fs');

const FN   = 'supabase/functions/fetch-maritime-news/index.ts';
const SQL  = 'app/admin/maritime_news_setup.sql';
const YML  = '.github/workflows/maritime-news.yml';

let fails = 0, checks = 0;
function ok(cond, label, detail) {
  checks++;
  if (cond) { console.log('  ok    ' + label); return true; }
  fails++;
  console.log('  FAIL  ' + label + (detail ? '\n          ' + detail : ''));
  return false;
}

for (const f of [FN, SQL, YML]) {
  if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(1); }
}
const fn  = fs.readFileSync(FN, 'utf8');
const sql = fs.readFileSync(SQL, 'utf8');
const yml = fs.readFileSync(YML, 'utf8');

console.log('MARITIME NEWS PIPELINE\n');

/* ── The curation gate ───────────────────────────────────────────────── */
console.log('── Nothing reaches a cadet unreviewed ───────────────────');

ok(/is_published\s+BOOLEAN\s+NOT NULL\s+DEFAULT\s+FALSE/i.test(sql),
   'is_published defaults to FALSE in the schema');

// The fetcher must never set it. Publishing is a human act.
ok(!/is_published\s*:\s*true/i.test(fn),
   'the fetcher never sets is_published');

/* Matched on the two halves rather than one literal string, so reformatting
   the policy does not fail the check while rewriting its meaning does. */
const selectPolicy = sql.slice(sql.indexOf('CREATE POLICY "Authenticated read published news"'),
                               sql.indexOf('DROP POLICY IF EXISTS "Admin insert news"'));
ok(/is_published\s+AND/.test(selectPolicy) && /OR public\.is_admin\(\)/.test(selectPolicy),
   'RLS hides unpublished rows from everyone but an admin');

/* The single most damaging regression available here: drop
   ignoreDuplicates and tomorrow's run overwrites a curated row, resetting
   is_published and the editor note. The module would look fine and quietly
   un-publish itself every night. */
ok(/ignoreDuplicates:\s*true/.test(fn),
   're-running leaves existing rows alone, so a published story is never reset');
ok(/onConflict:\s*'link'/.test(fn),
   'de-duplication is keyed on the link');
ok(/link\s+TEXT NOT NULL UNIQUE/i.test(sql),
   'and the database enforces that key rather than trusting the fetcher');

/* ── Freshness ───────────────────────────────────────────────────────── */
console.log('\n── Stale news cannot reach a cadet ──────────────────────');

/* This is a CURRENT affairs module, so an old story is not untidy, it is
   wrong: a cadet citing a three-month-old event as recent is worse off than
   one who says nothing. */

ok(/published_until DATE NOT NULL DEFAULT \(CURRENT_DATE \+ 7\)/i.test(sql),
   'every story gets a week by default');

/* NOT NULL matters more than the 7 does. Nullable, meaning "never expires",
   would let one forgotten field pin a story on the page forever, which is
   the exact failure the column exists to prevent. */
ok(!/published_until\s+DATE\s*,/i.test(sql) && /published_until DATE NOT NULL/i.test(sql),
   'the column cannot be left empty, so the fail-safe direction is "expires"');

// Enforced in RLS, not in a query a future change could forget.
ok(/is_published AND published_until >= CURRENT_DATE/.test(sql),
   'the expiry is enforced by RLS, so no client query can leak a stale story');

/* Pruning is housekeeping, NOT the freshness mechanism. It must never be able
   to remove something still visible, or a bug in the fetcher becomes a hole
   in the module. */
/* Anchored on both ends, and asserted non-empty. Renaming the comment made
   indexOf return -1, which sliced from the end of the file: here that failed
   loudly, but the same slip on a negative assertion would have passed while
   testing nothing at all. */
const pruneFrom = fn.indexOf('Housekeeping'), pruneTo = fn.indexOf('const ok =');
ok(pruneFrom > 0 && pruneTo > pruneFrom,
   'the housekeeping block was located  (anchors still match)',
   'from ' + pruneFrom + ' to ' + pruneTo);
const pruneBlock = fn.slice(pruneFrom, pruneTo);
ok(/PRUNE_DAYS/.test(pruneBlock) && !/published_until',\s*(new Date\(\)|today)/.test(pruneBlock),
   'the delete runs well after expiry, never on the day it happens',
   'deleting on expiry would destroy the editor note, the one part nobody can re-fetch');
ok(/\.lt\('published_until'/.test(pruneBlock),
   'long-expired rows are eventually reclaimed');

/* ── The model ranks; it does not write the module ──────────────────── */
console.log('\n── Nothing a model wrote can reach a cadet ──────────────');

/* The specific failure this guards against: a model invents a plausible
   reason a story matters, it gets published unchecked, and a cadet repeats
   something untrue in an interview. Scoring is a judgement and safe to
   automate. Facts are not. */

ok(/ai_note\s+TEXT/i.test(sql) && /editor_note\s+TEXT/i.test(sql),
   'ai_note and editor_note are separate columns');

/* This is the guarantee, and it is structural rather than a rule someone has
   to remember: there is no code path from the model to a reader.

   Comments are stripped first. The prose explaining WHY the fetcher must not
   touch editor_note obviously mentions it, and a check that cannot tell code
   from a comment fails on its own documentation. */
const fnCode = fn.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
ok(!/editor_note/.test(fnCode),
   'the fetcher never writes editor_note, so a draft cannot publish itself',
   'the app reads editor_note; ai_note has to be moved across by a person');

ok(/ai_note:\s*r\.note/.test(fn) && /ai_score:\s*r\.score/.test(fn),
   'model output lands in the ai_ columns only');

// Grounding instructions, because the prompt is the only thing standing
// between a thin headline and an invented explanation.
ok(/Do not add facts/i.test(fn) && /Never guess/i.test(fn),
   'the prompt forbids adding anything not in the source text');

// A wrong index would write one story's note onto another, silently.
ok(/r\.i >= 0 && r\.i < items\.length/.test(fn),
   'returned indices are range-checked before being used');
ok(/r\.score >= 0 && r\.score <= 10/.test(fn),
   'scores are range-checked too');
ok(/ai_score\s+SMALLINT CHECK \(ai_score BETWEEN 0 AND 10\)/i.test(sql),
   'and the database enforces the range independently');

/* Scoring is a convenience for sorting a queue. If Gemini is down, out of
   quota or newly fussy about a schema, the day's news must still land. */
const scoreBlock = fn.slice(fn.indexOf('Rank what came in'), fn.indexOf('Housekeeping'));
ok(scoreBlock.length > 200, 'the scoring block was located  (anchors still match)');
ok(/try\s*\{/.test(scoreBlock) && /catch\s*\(/.test(scoreBlock),
   'scoring failures are caught, so the fetch still succeeds without them');
ok(/if \(GEMINI_API_KEY\)/.test(scoreBlock),
   'with no key configured the pipeline still runs, just unranked');
ok(/\.is\('ai_score', null\)/.test(scoreBlock),
   'only unscored stories are sent, so a re-run does not re-spend');
ok(/AbortSignal\.timeout/.test(fn.slice(fn.indexOf('async function scoreBatch'))),
   'the model call is bounded by a timeout');

// The key must come from the environment, never the repo, which is public.
ok(/Deno\.env\.get\('GEMINI_API_KEY'\)/.test(fn),
   'the key is read from the environment');
ok(!/AIza[0-9A-Za-z_\-]{20,}/.test(fn + sql + yml),
   'no API key is hardcoded anywhere in the pipeline');

/* ── Both feed formats ───────────────────────────────────────────────── */
console.log('\n── Both feed formats are handled ────────────────────────');

ok(/item\|entry/.test(fn),
   'RSS <item> and Atom <entry> are both matched');
ok(/attr\(b, 'link', 'href'\)/.test(fn),
   "Atom's link href is read, not just RSS's link text",
   'Maritime Executive is Atom; without this it silently yields zero items');

const feeds = (fn.match(/url:\s*'https?:\/\/[^']+'/g) || []).length;
ok(feeds === 4, 'four feeds are configured  (got ' + feeds + ')');
ok(!/imo\.org/i.test(fn), "IMO's feed is left out while it returns HTTP 500");

/* ── Failure behaviour ───────────────────────────────────────────────── */
console.log('\n── One dead feed must not cost the others ───────────────');

const loop = fn.slice(fn.indexOf('for (const feed of FEEDS)'), fn.indexOf('// Housekeeping'));
ok(/try\s*\{/.test(loop) && /catch\s*\(/.test(loop),
   'each feed is fetched inside its own try/catch');
ok(/errors\.push\(`\$\{feed\.name\}/.test(loop),
   'a failing feed is named in the error rather than swallowed');
ok(/AbortController/.test(fn) && /setTimeout\(\(\) => ctl\.abort\(\)/.test(fn),
   'a hanging feed is cut off by a timeout');

/* A parse that yields nothing is a redesign or a broken parser, never a
   quiet news day. Reporting it as success is how a feed stays dead for a
   month before anyone wonders why the queue looks thin. */
ok(/parsed 0 items/.test(fn),
   'a feed that parses to nothing is treated as a failure, not a quiet day');
ok(/const ok = feedsOk === FEEDS\.length/.test(fn),
   'the run only reports ok when every feed answered');

/* ── Housekeeping cannot eat curated work ────────────────────────────── */
console.log('\n── Pruning only touches what nobody kept ────────────────');

ok(/\.eq\('is_published',\s*false\)/.test(pruneBlock),
   'the review queue prune is restricted to unpublished rows');
ok(/\.lt\('fetched_at'/.test(pruneBlock),
   'and to old ones');

/* ── Wiring ──────────────────────────────────────────────────────────── */
console.log('\n── Scheduling ──────────────────────────────────────────');

ok(/cron:\s*'[\d*\/,\- ]+'/.test(yml), 'the workflow has a schedule');
const cron = (yml.match(/cron:\s*'([^']+)'/) || [])[1] || '';
ok(/^\d+\s+\d+\s+\*\s+\*\s+\*$/.test(cron),
   'it runs once a day, as asked  (' + cron + ')');
ok(/workflow_dispatch/.test(yml), 'and can be triggered by hand for the first test');
ok(/fetch-maritime-news/.test(yml) && /CRON_SECRET/.test(yml),
   'it calls the right function with the shared secret');
ok(/CRON_SECRET/.test(fn) && /Unauthorized/.test(fn),
   'the function refuses callers without that secret');
ok(/job: 'fetch-maritime-news'/.test(fn),
   'runs are recorded in cron_runs like the other jobs');

console.log('\n' + (fails === 0
  ? checks + ' checks, all passing.'
  : fails + ' of ' + checks + ' checks FAILED.'));
process.exit(fails === 0 ? 0 : 1);

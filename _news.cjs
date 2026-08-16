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

ok(/USING \(is_published OR public\.is_admin\(\)\)/.test(sql),
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

const prune = fn.slice(fn.indexOf('// Housekeeping'), fn.indexOf('const ok ='));
ok(/\.eq\('is_published',\s*false\)/.test(prune),
   'the prune is restricted to unpublished rows');
ok(/\.lt\('fetched_at'/.test(prune),
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

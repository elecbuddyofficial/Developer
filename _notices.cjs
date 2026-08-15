#!/usr/bin/env node
/* Sponsorship notices: wiring and lifecycle check.
   Run: node _notices.cjs

   Two failures this is aimed at, both of which have actually happened here.

   1. A control referring to an element id that does not exist. It throws
      only when clicked, so it ships looking fine. The stale section badge
      and the loadQuizzes key mismatch were both this shape.

   2. A date read in the wrong timezone. opens_on and closes_on are DATE
      columns and arrive as 'YYYY-MM-DD'. new Date() on one of those parses
      it as UTC midnight, so west of Greenwich every window silently reads
      as opening and closing a day early: a cadet in a UTC-8 zone would be
      told a window shut yesterday while it is still open. This runs the
      real extracted functions under several timezones and requires the
      answers to be identical.

   The functions are pulled out of the pages and executed, not pattern
   matched. A check that only looks for the right-looking source can pass
   while the code is wrong, and this repo has shipped two of those. */

const fs = require('fs');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ADMIN = 'app/admin/index.html';
const SPON  = 'app/sponsorship/index.html';

let fails = 0, checks = 0;
function ok(cond, label, detail) {
  checks++;
  if (cond) { console.log('  ok    ' + label); return true; }
  fails++;
  console.log('  FAIL  ' + label + (detail ? '\n          ' + detail : ''));
  return false;
}

/* ── Pull a function out of a page by name, braces balanced ──────────── */
function extract(src, name) {
  const at = src.search(new RegExp('function\\s+' + name + '\\s*\\('));
  if (at === -1) return null;
  let i = src.indexOf('{', at), depth = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '{') depth++;
    else if (src[j] === '}') { depth--; if (depth === 0) return src.slice(at, j + 1); }
  }
  return null;
}

function sandbox(file, names) {
  const src = fs.readFileSync(file, 'utf8');
  const ctx = vm.createContext({ console });
  for (const n of names) {
    const fn = extract(src, n);
    if (!fn) { ok(false, file + ': function ' + n + ' not found'); return null; }
    vm.runInContext(fn, ctx);
  }
  return ctx;
}

console.log('SPONSORSHIP NOTICES CHECK\n');

/* ── 1. Every id the JS touches exists in the markup ─────────────────── */
console.log('── Admin: controls point at elements that exist ──────────');

const adminSrc = fs.readFileSync(ADMIN, 'utf8');

/* Just the notices JS: from its banner to whichever section banner comes
   next. Slicing to the end of the file instead swept in every later tab and
   turned this into a check on the whole console, which is how it first
   reported ids like 'pp-amount-' that are only ever half of a concatenation. */
const jsStart = adminSrc.indexOf('/* ── SPONSORSHIP NOTICES');
const jsEnd = adminSrc.indexOf('/* ── ', jsStart + 10);
ok(jsStart !== -1 && jsEnd > jsStart, 'the notices JS section is delimited by banners');
const noticeJs = adminSrc.slice(jsStart, jsEnd === -1 ? undefined : jsEnd);

const usedIds = new Set();
for (const m of noticeJs.matchAll(/getElementById\(\s*'([^']+)'\s*\)/g)) usedIds.add(m[1]);

const declaredIds = new Set();
for (const m of adminSrc.matchAll(/\sid="([^"]+)"/g)) declaredIds.add(m[1]);

const missing = [...usedIds].filter(id => !declaredIds.has(id));
ok(missing.length === 0,
   'every id the notices code reads is in the page  (' + usedIds.size + ' checked)',
   missing.length ? 'not in the markup: ' + missing.join(', ') : '');

// And the reverse: a form field nothing ever reads is a field that silently
// does not save.
const formIds = [...declaredIds].filter(id => /^nt-/.test(id) && !/^nt-(tbody|save|cancel|form)/.test(id));
const unread = formIds.filter(id => !usedIds.has(id));
ok(unread.length === 0,
   'every nt- form field is read back by the code  (' + formIds.length + ' fields)',
   unread.length ? 'never read: ' + unread.join(', ') : '');

/* Handlers named in onclick must be defined. Both sources matter: the ones
   written into the markup, and the ones the row renderer builds as strings,
   which no parser would ever see. */
const handlers = new Set();
const panel = adminSrc.slice(adminSrc.indexOf('id="tab-notices"'),
                             adminSrc.indexOf('<!-- CONTENT STATUS'));
for (const m of panel.matchAll(/onclick="(\w+)\(/g)) handlers.add(m[1]);
for (const m of noticeJs.matchAll(/onclick="\s*\+?\s*\'?(\w+)\(/g)) handlers.add(m[1]);
for (const m of noticeJs.matchAll(/onclick=\\?"(\w+)\(/g)) handlers.add(m[1]);
const undef = [...handlers].filter(h => !new RegExp('function\\s+' + h + '\\s*\\(').test(adminSrc));
ok(undef.length === 0, 'every notices onclick handler is defined  (' + handlers.size + ' found)',
   undef.length ? 'missing: ' + undef.join(', ') : '');

/* Both checks above pass trivially if the scraping found nothing, which is
   how a check ends up reporting clean while blind. These say what it must
   have found, so a regex that stops matching fails here instead of going
   quiet. */
const mustHandle = ['saveNotice', 'cancelNoticeEdit', 'editNotice', 'deleteNotice'];
const notFound = mustHandle.filter(h => !handlers.has(h));
ok(notFound.length === 0, 'the scrape found all four notice controls',
   notFound.length ? 'never seen by the scraper: ' + notFound.join(', ') : '');

const mustRead = ['nt-company', 'nt-link', 'nt-opens', 'nt-closes', 'nt-tbody'];
const notRead = mustRead.filter(i => !usedIds.has(i));
ok(notRead.length === 0, 'the scrape found the form fields it should have',
   notRead.length ? 'never seen by the scraper: ' + notRead.join(', ') : '');

/* ── 2. The tab is registered, and Sponsorship-only ──────────────────── */
console.log('\n── Admin: tab registration ───────────────────────────────');

const tabNames = (adminSrc.match(/var TAB_NAMES = \[([^\]]+)\]/) || [])[1] || '';
ok(/'notices'/.test(tabNames), "'notices' is in TAB_NAMES (otherwise the #notices hash does nothing)");

const courseTabs = (adminSrc.match(/var COURSE_TABS = \{([\s\S]*?)\n\};/) || [])[1] || '';
const sponLine = (courseTabs.match(/sponsorship:\s*\[([^\]]+)\]/) || [])[1] || '';
const cocLine  = (courseTabs.match(/coc:\s*\[([^\]]+)\]/) || [])[1] || '';
ok(/'notices'/.test(sponLine), "'notices' is in COURSE_TABS.sponsorship");
ok(!/'notices'/.test(cocLine),
   "'notices' is NOT in COURSE_TABS.coc  (the COC app never reads the table)");

ok(/id="tab-notices"/.test(adminSrc), 'the tab-notices panel exists');
ok(/data-tab="notices"/.test(adminSrc), 'the nav button exists');
ok(/name === 'notices'.*loadNotices/.test(adminSrc),
   'showTab refetches on every visit  (each status is computed against today)');

/* ── 3. The lifecycle rules, actually executed ───────────────────────── */
console.log('\n── Lifecycle: the two pages must agree ───────────────────');

const A = sandbox(ADMIN, ['ntToday', 'ntDays', 'ntDate', 'noticeState', 'noticeHost']);
const S = sandbox(SPON,  ['spToday', 'spDays', 'spDate', 'spState']);

if (A && S) {
  // Freeze "today" so the test is the same in a year's time.
  const TODAY = '2026-08-15';
  A.ntToday = () => TODAY;
  S.spToday = () => TODAY;

  const cases = [
    // company            opens         closes        published  expected admin label
    ['open, long window', '2026-08-01', '2026-12-31', true,  'Open, 138 days left'],
    ['closes in a week',  '2026-08-01', '2026-08-22', true,  'Closes in 7 days'],
    ['closes tomorrow',   '2026-08-01', '2026-08-16', true,  'Closes tomorrow'],
    ['closes today',      '2026-08-01', '2026-08-15', true,  'Closes today'],
    ['opens tomorrow',    '2026-08-16', '2026-09-30', true,  'Opens tomorrow'],
    ['opens later',       '2026-09-01', '2026-09-30', true,  'Opens in 17 days'],
    ['single day, today', '2026-08-15', '2026-08-15', true,  'Closes today'],
    ['closed yesterday',  '2026-07-01', '2026-08-14', true,  'Closed'],
    ['draft',             '2026-08-01', '2026-12-31', false, 'Draft'],
  ];

  let labelBad = [], rankBad = [], agreeBad = [];
  for (const [name, opens_on, closes_on, is_published, want] of cases) {
    const row = { opens_on, closes_on, is_published };
    const a = A.noticeState(row);
    if (a.label !== want) labelBad.push(name + ': got "' + a.label + '", expected "' + want + '"');

    // The cadet-facing side never sees closed or draft rows: the query drops
    // them. For everything else the wording must match, or the two screens
    // describe the same window differently.
    if (a.label !== 'Closed' && a.label !== 'Draft') {
      const s = S.spState(row);
      if (s.label !== a.label) agreeBad.push(name + ': admin "' + a.label + '" vs app "' + s.label + '"');
      if (s.rank !== a.rank)   rankBad.push(name + ': admin rank ' + a.rank + ' vs app ' + s.rank);
    }
  }

  ok(labelBad.length === 0, 'every window state reads correctly  (' + cases.length + ' cases)',
     labelBad.join('\n          '));
  ok(agreeBad.length === 0, 'the admin table and the cadet list say the same thing',
     agreeBad.join('\n          '));
  ok(rankBad.length === 0, 'both order open windows ahead of upcoming ones',
     rankBad.join('\n          '));

  // Ordering: open first, soonest-closing first inside that.
  const rows = [
    { company: 'later',    opens_on: '2026-09-01', closes_on: '2026-09-30', is_published: true },
    { company: 'open-far', opens_on: '2026-08-01', closes_on: '2026-12-31', is_published: true },
    { company: 'urgent',   opens_on: '2026-08-01', closes_on: '2026-08-18', is_published: true },
  ];
  const order = rows.map(n => ({ n, s: S.spState(n) }))
    .sort((a, b) => a.s.rank !== b.s.rank ? a.s.rank - b.s.rank
                  : (a.n.closes_on < b.n.closes_on ? -1 : a.n.closes_on > b.n.closes_on ? 1 : 0))
    .map(r => r.n.company).join(',');
  ok(order === 'urgent,open-far,later',
     'a window opening next month cannot outrank one open today',
     'order was: ' + order);

  // A closed window must never be describable as open, whatever else changes.
  const dead = A.noticeState({ opens_on: '2020-01-01', closes_on: '2020-02-01', is_published: true });
  ok(dead.label === 'Closed' && dead.dead === true,
     'an expired window is Closed, and nothing else');

  // The table prints the host instead of the whole URL. It must never throw:
  // a row that cannot render takes the entire list down with it.
  A.URL = URL;
  const hosts = [
    ['https://www.synergymarinegroup.com/careers/cadet', 'synergymarinegroup.com'],
    ['http://fleetship.com', 'fleetship.com'],
    ['https://careers.maersk.com/a/b?x=1#z', 'careers.maersk.com'],
  ];
  const hostBad = hosts.filter(([u, want]) => A.noticeHost(u) !== want)
                       .map(([u, want]) => u + ' gave "' + A.noticeHost(u) + '", expected "' + want + '"');
  ok(hostBad.length === 0, 'the link is shown as its host', hostBad.join('\n          '));

  let threw = false;
  try { A.noticeHost('not a url at all'); } catch (e) { threw = true; }
  ok(!threw, 'a malformed link falls back instead of throwing and blanking the table');
}

/* ── 4. Expiry is enforced by the query, not by the rendering ────────── */
console.log('\n── App: a dead deadline cannot reach the screen ──────────');

const sponSrc = fs.readFileSync(SPON, 'utf8');
const spq = (sponSrc.match(/async function spNotices[\s\S]*?\n  \}/) || [''])[0];

ok(/\.eq\('is_published',\s*true\)/.test(spq),
   'unpublished drafts are excluded in the query');
ok(/\.gte\('closes_on',\s*spToday\(\)\)/.test(spq),
   'closed windows are excluded in the query, so no render path can show one');
ok(/catch\s*\(/.test(spq) && /return \[\]/.test(spq),
   'a failed notices query returns [] rather than throwing away the announcements');

// The link opens off-site, so it must not hand the target a live window handle.
ok(/rel="noopener noreferrer"/.test(sponSrc.slice(sponSrc.indexOf('function spCard'))),
   'the apply link carries rel="noopener noreferrer"');
ok(/function escAttr/.test(sponSrc) && /escAttr\(n\.link\)/.test(sponSrc),
   'the link is escaped for an attribute, not just for text');

/* ── 5. Same answers in every timezone ───────────────────────────────── */
if (!process.env._NOTICES_TZ_CHILD) {
  console.log('\n── Timezones: the same window in five places ─────────────');
  const zones = ['UTC', 'America/Los_Angeles', 'Asia/Kolkata', 'Pacific/Kiritimati', 'Pacific/Niue'];
  const out = zones.map(tz => {
    try {
      return execFileSync(process.execPath, [__filename], {
        env: { ...process.env, TZ: tz, _NOTICES_TZ_CHILD: '1' },
        encoding: 'utf8',
      });
    } catch (e) { return 'RAN WITH FAILURES:\n' + (e.stdout || String(e)); }
  });
  const differing = zones.filter((_, i) => out[i] !== out[0]);
  ok(differing.length === 0,
     'identical results in ' + zones.join(', '),
     differing.length ? 'differs in: ' + differing.join(', ')
       + '\n          A DATE column read through new Date() is parsed as UTC midnight.'
       : '');
  ok(!/FAIL/.test(out[0]), 'the run under a fixed timezone passes too');
}

/* ── Result ──────────────────────────────────────────────────────────── */
console.log('\n' + (fails === 0
  ? checks + ' checks, all passing.'
  : fails + ' of ' + checks + ' checks FAILED.'));
process.exit(fails === 0 ? 0 : 1);

/* Things the app refers to that may not exist.

   Each of these fails quietly, which is why none of them would show up in a
   screenshot or a contrast check:

     a precached file that is missing    cache.addAll is ATOMIC, so one bad
                                         path fails the whole service worker
                                         install and the app stops working
                                         offline for everybody
     an onclick naming a function that
     was renamed or deleted              the button does nothing, with one
                                         console error nobody sees
     a script or stylesheet that 404s    silent until the feature is used
     a getElementById for an id that is
     not in the page                     usually a crash on first use
*/
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
const APP = ROOT + 'app/';

let problems = 0;
const head = (t) => { console.log(''); console.log('  ' + t); console.log('  ' + '-'.repeat(68)); };
const bad = (m) => { console.log('   ' + m); problems++; };

/* ── 1. Service worker precache ─────────────────────────────────────── */
head('service worker precache (atomic: one bad path breaks offline entirely)');
const sw = readFileSync(APP + 'sw.js', 'utf8');
const pre = sw.match(/PRECACHE\s*=\s*\[([\s\S]*?)\]/);
let missing = 0;
if (!pre) {
  bad('PRECACHE list not found - the sweep below tested nothing');
} else {
  const paths = [...pre[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
  for (const p of paths) {
    if (/^https?:/.test(p)) continue;                 // CDN, not ours
    const rel = p.replace(/^\.\//, '').split('?')[0];
    if (!existsSync(APP + rel)) { bad('precached but missing on disk: ' + p); missing++; }
  }
  console.log('   ' + paths.length + ' entries, ' + (missing || 'none') + ' missing');
}

/* ── 2. Scripts and stylesheets each page asks for ───────────────────── */
head('script and stylesheet references');
/* courses.html is deliberately absent: it was retired on 5 Sep 2026 when the
   course choice moved into sign-in. Every remaining mention of it in the repo
   is a comment saying so. Listing it here reported a missing page for two runs
   and the missing thing was this list. */
const PAGES = ['index.html', 'auth.html', 'terms.html', 'privacy.html',
               'sponsorship/index.html', 'admin/index.html'];
for (const page of PAGES) {
  const full = APP + page;
  if (!existsSync(full)) { bad('page missing: ' + page); continue; }
  const html = readFileSync(full, 'utf8');
  const dir = dirname(full);
  const refs = [
    ...[...html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)].map((m) => m[1]),
    ...[...html.matchAll(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/g)].map((m) => m[1]),
  ];
  for (const r of refs) {
    if (/^https?:|^\/\//.test(r)) continue;
    const f = resolve(dir, r.split('?')[0]);
    if (!existsSync(f)) bad(page + ' -> ' + r + ' does not exist');
  }
}
console.log('   checked ' + PAGES.length + ' pages');

/* ── 3. onclick handlers naming functions that do not exist ──────────── */
head('inline handlers naming a function that is not defined');
for (const page of PAGES) {
  const full = APP + page;
  if (!existsSync(full)) continue;
  const html = readFileSync(full, 'utf8');

  // Every function this page can see: its own, plus the shared files it loads.
  let js = '';
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) js += m[1] + '\n';
  for (const m of html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)) {
    if (/^https?:|^\/\//.test(m[1])) continue;
    const f = resolve(dirname(full), m[1].split('?')[0]);
    if (existsSync(f)) js += readFileSync(f, 'utf8') + '\n';
  }

  const defined = new Set();
  for (const m of js.matchAll(/function\s+([A-Za-z_$][\w$]*)/g)) defined.add(m[1]);
  for (const m of js.matchAll(/(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?(?:function|\()/g)) defined.add(m[1]);
  for (const m of js.matchAll(/window\.([A-Za-z_$][\w$]*)\s*=/g)) defined.add(m[1]);

  // Browser and library globals an inline handler legitimately uses.
  const BUILTIN = new Set(['window', 'document', 'console', 'alert', 'confirm', 'history',
    'location', 'localStorage', 'sessionStorage', 'JSON', 'Math', 'Date', 'Number',
    'String', 'Array', 'Object', 'parseInt', 'parseFloat', 'setTimeout', 'open',
    'encodeURIComponent', 'decodeURIComponent', 'navigator', 'event', 'this', 'return',
    'function',   // an inline handler passing an anonymous callback
    'if', 'else', 'var', 'let', 'const', 'new', 'typeof', 'true', 'false', 'null']);

  const called = new Set();
  for (const m of html.matchAll(/\bon(?:click|change|input|submit|keyup|keydown|focus|blur)\s*=\s*"([^"]*)"/g)) {
    /* A bare call, not a method. `(^|[^.\w$])` is load-bearing: without it
       every `event.preventDefault()` and `document.getElementById()` in an
       inline handler was reported as a missing function, which is how the
       first run of this produced 14 findings and zero real ones. */
    for (const c of m[1].matchAll(/(?:^|[^.\w$])([A-Za-z_$][\w$]*)\s*\(/g)) called.add(c[1]);
  }
  const dead = [...called].filter((n) => !defined.has(n) && !BUILTIN.has(n));
  if (dead.length) bad(page + ': ' + dead.length + ' handler(s) call a missing function: ' + dead.join(', '));
}
console.log('   checked inline handlers on every page');

/* ── 4. Content files the pages load ─────────────────────────────────── */
head('content manifests point at files that exist');

// The Sponsorship app names each file outright.
{
  const html = readFileSync(APP + 'sponsorship/index.html', 'utf8');
  const files = new Set();
  for (const m of html.matchAll(/(?:notesFile|quizFile|videosFile)\s*:\s*'([^']+)'/g)) files.add(m[1]);
  let gone = 0;
  for (const f of files) {
    if (!existsSync(ROOT + 'data/Sponsorship/' + f)) { gone++; if (gone <= 5) bad('sponsorship -> ' + f + ' missing'); }
  }
  console.log('   sponsorship: ' + files.size + ' named files, ' + (gone || 'none') + ' missing');
}

/* The COC app builds its paths from the topic id instead:
     '../data/Orals/quizzes/' + topicId.toLowerCase() + '_quiz.js'
   so nothing to match on. The first run of this reported "0 referenced, none
   missing" for index.html and was checking nothing at all - a clean result over
   ground it never looked at. The ids have to be enumerated and the paths built
   the same way the app builds them. */
{
  const appjs = readFileSync(APP + 'app.js', 'utf8');
  const grabList = (name) => {
    const at = appjs.indexOf('var ' + name + ' = [');
    if (at === -1) return [];
    const end = appjs.indexOf('\n];', at);
    return [...appjs.slice(at, end).matchAll(/id:\s*'([TW]\d+)'/g)].map((m) => m[1]);
  };
  const oral = grabList('TOPICS');
  const written = grabList('WRITTEN_TOPICS');
  if (!oral.length) bad('TOPICS not found in app.js - the COC sweep tested nothing');

  let gone = 0, checked = 0;
  const want = (rel) => {
    checked++;
    if (!existsSync(ROOT + rel)) { gone++; if (gone <= 6) bad('COC -> ' + rel + ' missing'); }
  };
  for (const id of oral) {
    const t = id.toLowerCase();
    want('data/Orals/notes/' + t + '_notes.js');
    want('data/Orals/quizzes/' + t + '_quiz.js');
  }
  for (const id of written) {
    want('data/Written/notes/' + id.toLowerCase() + '_notes.js');
  }
  console.log('   COC: ' + oral.length + ' oral + ' + written.length + ' written topics, '
    + checked + ' files checked, ' + (gone || 'none') + ' missing');
}

console.log('');
console.log(problems ? '  ' + problems + ' reference problem(s).'
                     : '  Every file, handler and content path the app names exists.');
process.exit(problems ? 1 : 0);

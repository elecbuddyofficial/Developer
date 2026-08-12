#!/usr/bin/env node
/* ───────────────────────────────────────────────────────────────────────────
   Validate content note files by EXECUTING them, not by reading them.

   WHY THIS EXISTS. Three separate faults shipped in one day where the repo
   looked right and the app did nothing: email templates never read, 23 modules
   flagged notesReady:false, 18 quizzes declaring a key the app does not look
   up. Every one of them would have survived any amount of proof-reading. The
   only check that catches this class is running the thing.

   What it checks, in the order the failures actually happen:

     1. The file parses and calls loadNotes/loadQuiz at all. A stray backtick
        or a ${ inside the template literal breaks the whole file silently:
        the app just never registers that module.
     2. Tags balance. An unclosed <div> does not error, it swallows the rest
        of the page layout.
     3. Every jumpTo() target exists. A dead anchor button is a click that
        does nothing, and nothing in the app complains.
     4. House rules: exactly 2 backticks, no ${, no em dashes.

   Usage:
     node validate-notes.js                          # all Sponsorship notes
     node validate-notes.js data/Sponsorship/fundamentals/f08_notes.js
     node validate-notes.js data/Sponsorship/fundamentals

   Exit code is 1 if anything failed, so it can gate a commit.
   ─────────────────────────────────────────────────────────────────────────── */

const fs = require('fs');
const path = require('path');

const DEFAULT_DIR = path.join(__dirname, 'data', 'Sponsorship', 'fundamentals');

function collect(args) {
  if (!args.length) {
    return fs.readdirSync(DEFAULT_DIR)
      .filter(f => /_notes\.js$/.test(f))
      .sort()
      .map(f => path.join(DEFAULT_DIR, f));
  }
  // Deliberately no glob dependency: expand a trailing directory, otherwise
  // take the paths as given. Fewer moving parts than pulling in a package for
  // something run by hand a few times a session.
  const out = [];
  for (const a of args) {
    const p = path.resolve(a);
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
      fs.readdirSync(p).filter(f => /_notes\.js$/.test(f)).sort()
        .forEach(f => out.push(path.join(p, f)));
    } else {
      out.push(p);
    }
  }
  return out;
}

function check(file) {
  const name = path.basename(file);
  const problems = [];
  const src = fs.readFileSync(file, 'utf8');

  // Full modules wrap their HTML in one template literal, so two backticks.
  // Stubs are single-quoted one-liners and legitimately have none. What is
  // never legitimate is an ODD count: that means a backtick was opened and not
  // closed, or one leaked into the HTML, and the file silently stops parsing.
  const ticks = (src.match(/`/g) || []).length;
  if (ticks % 2 !== 0) problems.push(`${ticks} backticks, an unclosed template literal`);
  else if (ticks > 2) problems.push(`${ticks} backticks, expected 2 (one template literal) or 0 (a stub)`);
  if (src.includes('${')) problems.push('contains ${, which breaks the template literal');
  if (/—/.test(src)) problems.push('contains an em dash');

  // Execute it. This is the check that matters; everything above is cheap
  // pre-screening for the two ways execution fails confusingly.
  let html = null, id = null;
  const prevWindow = global.window;
  global.window = {
    loadNotes: (i, h) => { id = i; html = h; },
    loadQuiz:  (i, h) => { id = i; html = h; },
    loadQuizzes: (i, h) => { id = i; html = h; },
  };
  try {
    delete require.cache[require.resolve(file)];
    require(file);
  } catch (e) {
    problems.push('does not execute: ' + e.message);
  } finally {
    global.window = prevWindow;
  }

  if (html === null) {
    if (!problems.length) problems.push('executed but never called loadNotes()');
    return { name, id, problems, stats: null };
  }

  const pairs = [['div', /<div\b/g, /<\/div>/g], ['table', /<table\b/g, /<\/table>/g],
                 ['span', /<span\b/g, /<\/span>/g], ['p', /<p\b/g, /<\/p>/g]];
  for (const [tag, o, c] of pairs) {
    const no = (html.match(o) || []).length, nc = (html.match(c) || []).length;
    if (no !== nc) problems.push(`${tag}: ${no} open vs ${nc} close`);
  }

  const targets = [...html.matchAll(/jumpTo\(.([\w-]+)./g)].map(m => m[1]);
  const ids = new Set([...html.matchAll(/id="([\w-]+)"/g)].map(m => m[1]));
  const dead = [...new Set(targets.filter(t => !ids.has(t)))];
  if (dead.length) problems.push('dead jumpTo targets: ' + dead.join(', '));

  const n = re => (html.match(re) || []).length;
  const kb = Math.round(html.length / 1024);
  // 20-45 KB is the house range. Outside it is a warning, not a failure: it
  // means the module is thin or has drifted into oral-notes depth.
  const stats = { kb, p: n(/<p\b/g), tables: n(/<table\b/g), formula: n(/n-formula/g),
                  val: n(/n-val/g), crit: n(/n-crit/g), h2: n(/n-h2/g) };
  return { name, id, problems, stats };
}

const files = collect(process.argv.slice(2));
if (!files.length) { console.error('No files to check.'); process.exit(1); }

let failed = 0, thin = [];
console.log('file            id    KB  para  tbl  form  n-val  crit  n-h2');
for (const f of files) {
  const r = check(f);
  if (r.stats) {
    const s = r.stats;
    console.log(
      r.name.padEnd(16) + String(r.id || '?').padEnd(6) +
      String(s.kb).padStart(3) + String(s.p).padStart(6) + String(s.tables).padStart(5) +
      String(s.formula).padStart(6) + String(s.val).padStart(7) + String(s.crit).padStart(6) +
      String(s.h2).padStart(6) +
      (r.problems.length ? '   <- FAILED' : ''));
    if (s.kb < 20 || s.kb > 45) thin.push(`${r.name} is ${s.kb} KB, outside the 20-45 KB house range`);
    if (s.val === 0) thin.push(`${r.name} has no n-val, so no figure is highlighted anywhere in it`);
  } else {
    console.log(r.name.padEnd(16) + '   <- FAILED');
  }
  for (const p of r.problems) { console.log('    ! ' + p); failed++; }
}

if (thin.length) {
  console.log('\nWorth a look (not failures):');
  thin.forEach(t => console.log('  - ' + t));
}
console.log(`\n${files.length} file(s) checked, ${failed} problem(s).`);
process.exit(failed ? 1 : 0);

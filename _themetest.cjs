#!/usr/bin/env node
/* Tests theme-audit.cjs against pages built to collide.
   Run: node _themetest.cjs

   WHY THIS EXISTS. theme-audit is the only thing standing between this app and
   a bug that has shipped four times: a container with a fixed background
   holding text coloured with a theme variable, which looks right in the dark
   themes and turns unreadable in light. Every one of those four was found by
   Blesson, not by a test.

   The audit itself has been wrong three times:

     1. It compared background and colour only within a single style
        attribute, and missed a background sitting on the parent.
     2. It read style attributes only, and missed backgrounds set in <style>.
     3. It could not see inside a media query at all, so a fixed background
        declared in `@media (max-width: 780px)` was invisible. Measured, not
        guessed: the same fixture passed against the version of the audit from
        before that fix.

   A guard that has been half-blind three times needs its own test. Each case
   below is a page the audit MUST flag, or one it must leave alone, and the
   fixtures are written to a temp directory so nothing real is ever touched.
   The earlier version of this test mutated the actual finance page and a stray
   `git checkout --` destroyed a day's work; hence THEME_AUDIT_PAGES. */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'themetest-'));

/* KNOWN LIMITATION, documented rather than hidden.

   theme-audit reads selectors line-wise: `m[1].trim().split('\n').pop()`. Put
   two rules on ONE line and it stops seeing them, so a single-line
   `.box { background:#fff; } .t { color:var(--text); }` is NOT flagged.

   That is pre-existing and separate from the media-query blindness fixed
   today. It is left alone for now because every stylesheet in this repo is
   written one declaration per line, so it hides no live bug, and rewriting the
   selector parser is a bigger change to the one guard than is worth making at
   the end of a session. Fixtures below are therefore multi-line, matching how
   CSS is actually written here.

   If anything ever minifies this app's CSS, this audit goes blind and this
   comment is the reason. */
function page(head, body) {
  return '<!doctype html><html data-theme="dark"><head><meta charset="utf-8">'
       + '<link rel="stylesheet" href="../style.css"><style>\n'
       + head.replace(/\}\s*/g, '}\n').replace(/\{\s*/g, ' {\n  ')
       + '\n</style></head><body>' + body + '</body></html>';
}

function audit(html) {
  const f = path.join(DIR, 'fixture-' + Math.random().toString(36).slice(2) + '.html');
  fs.writeFileSync(f, html);
  try {
    const out = execFileSync('node', ['theme-audit.cjs'], {
      cwd: __dirname, encoding: 'utf8',
      env: Object.assign({}, process.env, { THEME_AUDIT_PAGES: f }),
    });
    return /No collisions/.test(out) ? 'CLEAN' : 'FLAGGED';
  } catch (e) {
    return 'FLAGGED';
  }
}

let fails = 0, n = 0;
function expect(label, html, want) {
  n++;
  const got = audit(html);
  if (got === want) { console.log('  ok    ' + label); return; }
  fails++;
  console.log('  FAIL  ' + label + '  -> ' + got + ', want ' + want);
}

console.log('\nMUST FLAG');

expect('fixed background on a rule, themed text inside',
  page('.box { background:#ffffff; } .t { color:var(--text); }',
       '<div class="box"><span class="t">hello</span></div>'), 'FLAGGED');

// The case the audit was blind to until today.
expect('fixed background declared inside a screen media query',
  page('@media (max-width: 780px) { .box { background:#ffffff; } } .t { color:var(--text); }',
       '<div class="box"><span class="t">hello</span></div>'), 'FLAGGED');

expect('fixed background nested two at-rules deep',
  page('@media (max-width: 780px) { @supports (display:grid) { .box { background:#ffffff; } } }'
     + ' .t { color:var(--text); }',
       '<div class="box"><span class="t">hello</span></div>'), 'FLAGGED');

expect('fixed background in a style attribute, themed text below it',
  page('.t { color:var(--text); }',
       '<div style="background:#ffffff"><span class="t">hello</span></div>'), 'FLAGGED');

console.log('\nMUST LEAVE ALONE');

expect('both sides themed',
  page('.box { background:var(--surface); } .t { color:var(--text); }',
       '<div class="box"><span class="t">hello</span></div>'), 'CLEAN');

// Paper has no theme. Fixed colours here are the correct answer, and a token
// would print a dark surface as a solid block or drop it entirely.
expect('fixed colours inside @media print',
  page('@media print { .box { background:#ffffff; } } .t { color:var(--text); }',
       '<div class="box"><span class="t">hello</span></div>'), 'CLEAN');

expect('a page with no fixed colours at all',
  page('.box { background:var(--surface); }', '<div class="box">hello</div>'), 'CLEAN');

// @font-face holds declarations, not rules. Unwrapping it would invent a
// selector that does not exist and could report a collision on nothing.
expect('@font-face is not flattened into a bogus rule',
  page('@font-face { font-family:X; src:url(x.woff2); } .t { color:var(--text); }',
       '<span class="t">hello</span>'), 'CLEAN');

try { fs.rmSync(DIR, { recursive: true, force: true }); } catch (e) {}

console.log('\n' + (fails ? fails + ' FAILED of ' + n : 'all ' + n + ' pass') + '\n');
process.exit(fails ? 1 : 0);

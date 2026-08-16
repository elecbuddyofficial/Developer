#!/usr/bin/env node
/* Email typo suggestion on the auth page.
   Run: node _mailfix.cjs

   WHY THIS EXISTS. On 16 Aug a real cadet signed up on gmail.CON, got no
   confirmation mail because that domain has no mail server, and retyped it
   correctly two minutes later. He recovered on his own; most would not. The
   suggestion catches that before the bounce.

   WHAT IT MUST NOT DO is more important than what it must do. There are live
   accounts on tulas.edu.in and miet.ac.in, and the next one might be a
   shipping company nobody has seen before. A suggestion fired at a real
   domain is noise; a suggestion that fired and was obeyed would be a lost
   signup. So the silent cases below carry more weight than the loud ones.

   The real function is extracted from app/auth.html and executed. Matching on
   the source would pass while the logic was wrong, which this repo has
   shipped twice. */

const fs = require('fs');
const vm = require('vm');

const AUTH = 'app/auth.html';
const src = fs.readFileSync(AUTH, 'utf8');

let fails = 0, checks = 0;
function ok(cond, label, detail) {
  checks++;
  if (cond) { console.log('  ok    ' + label); return true; }
  fails++;
  console.log('  FAIL  ' + label + (detail ? '\n          ' + detail : ''));
  return false;
}

function extract(s, name, kind) {
  const re = kind === 'var'
    ? new RegExp('var\\s+' + name + '\\s*=\\s*\\[')
    : new RegExp('function\\s+' + name + '\\s*\\(');
  const at = s.search(re);
  if (at === -1) throw new Error('not found in ' + AUTH + ': ' + name);
  const open = kind === 'var' ? '[' : '{';
  const close = kind === 'var' ? ']' : '}';
  let i = s.indexOf(open, at), depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === open) depth++;
    else if (s[j] === close) { depth--; if (depth === 0) return s.slice(at, j + 1) + (kind === 'var' ? ';' : ''); }
  }
  throw new Error('unbalanced: ' + name);
}

console.log('EMAIL TYPO SUGGESTION\n');

const ctx = vm.createContext({ Math });
vm.runInContext(extract(src, 'MAIL_PROVIDERS', 'var'), ctx);
vm.runInContext(extract(src, 'mailDistance'), ctx);
vm.runInContext(extract(src, 'mailSuggest'), ctx);

/* ── 1. Typos it must catch ──────────────────────────────────────────── */
console.log('── Must suggest ─────────────────────────────────────────');

const CATCH = [
  ['sarath@gmail.con',      'sarath@gmail.com',      'the one that actually happened'],
  ['sarath@gmial.com',      'sarath@gmail.com',      'transposition'],
  ['sarath@gmail.co',       'sarath@gmail.com',      'dropped character'],
  ['sarath@gnail.com',      'sarath@gmail.com',      'adjacent key'],
  ['sarath@gmaill.com',     'sarath@gmail.com',      'doubled character'],
  ['sarath@gmail',          'sarath@gmail.com',      'no TLD, which type=email permits'],
  ['sarath@yahoo.con',      'sarath@yahoo.com',      ''],
  ['sarath@hotmial.com',    'sarath@hotmail.com',    ''],
  ['sarath@outlok.com',     'sarath@outlook.com',    ''],
  ['sarath@rediffmail.co',  'sarath@rediffmail.com', ''],
  ['cadet@aol.con',         'cadet@aol.com',         'seven characters, still worth it'],
];
const missed = CATCH.filter(([i, w]) => ctx.mailSuggest(i) !== w)
  .map(([i, w]) => i + ' gave ' + ctx.mailSuggest(i) + ', expected ' + w);
ok(missed.length === 0, 'every typo is caught  (' + CATCH.length + ' cases)', missed.join('\n          '));

/* ── 2. Real addresses it must leave alone ───────────────────────────── */
console.log('\n── Must stay silent (this is the half that matters) ──────');

const SILENT = [
  ['sarath@gmail.com',            'already correct'],
  ['sarath@yahoo.in',             'a real provider one edit from yahoo.com'],
  ['blesson@elec-buddy.com',      'your own domain'],
  ['cadet@tulas.edu.in',          'a live account'],
  ['cadet@miet.ac.in',            'a live account'],
  ['crew@synergymarinegroup.com', 'a shipping company'],
  ['cadet@anglo-eastern.com',     'a shipping company'],
  ['x@fleetship.com',             'a shipping company'],
  ['a@we.com',                    'short: one edit from me.com is weak evidence'],
  ['a@he.com',                    'short: same'],
];
const noisy = SILENT.filter(([i]) => ctx.mailSuggest(i) !== null)
  .map(([i, why]) => i + ' (' + why + ') was told to change to ' + ctx.mailSuggest(i));
ok(noisy.length === 0, 'no real address is second-guessed  (' + SILENT.length + ' cases)',
   noisy.join('\n          '));

// Every provider on the list must be silent about itself, or the suggestion
// would fire on the exact addresses it is meant to approve of.
const selfNoisy = ctx.MAIL_PROVIDERS.filter(d => ctx.mailSuggest('a@' + d) !== null);
ok(selfNoisy.length === 0,
   'no provider is corrected to another  (' + ctx.MAIL_PROVIDERS.length + ' providers)',
   selfNoisy.join(', '));

/* ── 3. Malformed input must not throw ──────────────────────────────── */
console.log('\n── Must not throw ───────────────────────────────────────');

let threw = null;
for (const bad of ['', 'nodomain', '@gmail.com', 'sarath@', '@', 'a@@b', '   ', 'a@b@c.com']) {
  try { ctx.mailSuggest(bad); } catch (e) { threw = bad + ': ' + e.message; break; }
}
ok(!threw, 'malformed input returns rather than throwing', threw || '');

/* ── 4. It is wired to every email field, and refuses nothing ───────── */
console.log('\n── Wiring ───────────────────────────────────────────────');

for (const id of ['reg-email', 'login-email', 'reset-email']) {
  ok(src.includes('id="mailfix-' + id + '"'), 'the ' + id + ' field has a suggestion slot');
}
ok(/\['reg-email', 'login-email', 'reset-email'\]\.forEach\(wireMailFix\)/.test(src),
   'all three fields are wired');

/* The whole design rests on this: it suggests, it never blocks. If the
   suggestion is ever consulted inside handleRegister, a wrong guess stops a
   real cadet from signing up, which is worse than the typo it prevents. */
const reg = src.slice(src.indexOf('async function handleRegister'),
                      src.indexOf('function signupErrorMessage'));
ok(!/mailSuggest|mailfix/i.test(reg),
   'handleRegister never consults the suggestion, so it cannot block a signup');

/* auth.html carries no theme tokens and does not load style.css. A var(--x)
   here resolves to nothing, and the text would simply not be visible. */
const cssStart = src.indexOf('.mailfix {');
const cssEnd = src.indexOf('.divider');
ok(cssStart !== -1 && !/var\(--/.test(src.slice(cssStart, cssEnd)),
   'the styles use literal colours, since this page has no theme tokens');

console.log('\n' + (fails === 0
  ? checks + ' checks, all passing.'
  : fails + ' of ' + checks + ' checks FAILED.'));
process.exit(fails === 0 ? 0 : 1);

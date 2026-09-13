/* AUDIT 2 - every client copy of a server rule must agree with the server.

   The server owns three rules that clients cannot import, because the app is
   static HTML and the server is Deno:

     scopesCovered(scope)  what a purchase of that scope unlocks
     deriveAccess(profile) whether a profile can read a given course right now
     PLAN_MONTHS           how many months each plan duration is worth

   So the clients keep copies. A copy is not wrong in itself - there is no
   other option here - but an UNTESTED copy is, and this is the exact fault
   that produced the worst bug of the month: _scopesCovered in the checkout
   drifted from the server and told a Sponsorship buyer they were unlocking
   Written and Oral while charging them for Sponsorship.

   Three copies are known to exist. This finds them by parsing the real files,
   runs them against the real server implementation over every input, and
   fails on any disagreement. If somebody adds a fourth copy, the sweep in
   audit_scopelists.mjs is what surfaces it.
*/
import { readFileSync } from 'node:fs';
import { scopesCovered, PLAN_MONTHS, TRIAL_DAYS, deriveAccess } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

/* Pull a named function's source out of a file and make it callable. Parsing
   rather than re-typing is the whole point: a test that restates the client's
   logic tests nothing about the client. */
function extractFn(path, name) {
  const src = readFileSync(ROOT + path, 'utf8');
  const at = src.indexOf('function ' + name);
  if (at === -1) return null;
  let i = src.indexOf('{', at), depth = 0, end = -1;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '{') depth++;
    else if (src[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
  }
  if (end === -1) return null;
  return new Function('return (' + src.slice(at, end) + ')')();
}

console.log('');
console.log('  scopesCovered - every client copy against the server');
console.log('  ' + '-'.repeat(68));

const MIRRORS = [
  ['app/checkout.js',      '_scopesCovered',     'the checkout modal'],
  ['app/admin/index.html', 'scopesCoveredAdmin', 'the admin grant preview'],
];

// Every value the column can hold, plus the shapes bad data actually takes.
const INPUTS = ['written', 'oral', 'both', 'sponsorship', null, undefined, '',
                'BOTH', 'Sponsorship', 'nonsense'];

for (const [path, name, what] of MIRRORS) {
  const fn = extractFn(path, name);
  if (!fn) { ok(what + ' (' + name + ') was found', false, 'not found in ' + path); continue; }
  const bad = [];
  for (const inp of INPUTS) {
    const mine = JSON.stringify(fn(inp));
    const theirs = JSON.stringify(scopesCovered(inp));
    if (mine !== theirs) bad.push(JSON.stringify(inp) + ': client ' + mine + ' vs server ' + theirs);
  }
  ok(what + ' agrees with the server on all ' + INPUTS.length + ' inputs',
     bad.length === 0, bad.join('\n         '));
}

/* The Sponsorship gate is a copy of deriveAccess, written inline on the page.
   It cannot be extracted as a function because it is a few statements inside
   an async block, so its CONSTANTS are checked instead: a trial length or a
   column name that drifts is how it would go wrong. */
console.log('');
console.log('  the Sponsorship gate against deriveAccess');
console.log('  ' + '-'.repeat(68));

/* Comments are stripped before any of these checks.

   Not a detail: the first run of this audit reported the profile panel still
   reading subscription_expires_at, and the only occurrence on the page was
   the word inside the comment explaining that it no longer does. An audit
   that reads prose as code fails precisely when the code is well documented,
   which is backwards. The same fault hit the grace sweep earlier this month,
   where a match on the import line hid a real hole. */
const stripComments = (s) => s
  .replace(/\/\*[\s\S]*?\*\//g, ' ')
  .replace(/(^|[^:])\/\/[^\n]*/g, '$1')
  .replace(/<!--[\s\S]*?-->/g, ' ');

const sponRaw = readFileSync(ROOT + 'app/sponsorship/index.html', 'utf8');
const spon = stripComments(sponRaw);

/* Prove the stripper actually did something, or every "not present" check
   below is vacuously true and this audit reports clean over nothing. */
ok('comment stripping is working (a known comment phrase is gone)',
   /single mirror of/.test(sponRaw) && !/single mirror of/.test(spon));

ok('the gate uses the same trial length as the server (' + TRIAL_DAYS + ' days)',
   new RegExp('TRIAL_MS\\s*=\\s*' + TRIAL_DAYS + '\\s*\\*\\s*24\\s*\\*\\s*60\\s*\\*\\s*60\\s*\\*\\s*1000').test(spon));

ok('the gate reads sponsorship_expires_at, not a COC column',
   /sponsorship_expires_at/.test(spon) &&
   !/_sponAccess[\s\S]{0,200}written_expires_at/.test(spon));

ok('the gate honours lifetime, which the server grants every scope',
   /subscription_plan\s*===\s*'lifetime'/.test(spon));

/* The grant ledger is deliberately NOT read by the gate. The server never
   looks at granted_* when deriving access, so a gate that did would open for
   people deriveAccess turns away. It was removed once already; this keeps it
   removed. */
ok('the gate does NOT read the grant ledger (the server never does)',
   !/_sponAccess[\s\S]{0,300}granted_sponsorship_expires_at/.test(spon));

/* The profile panel is the other place on that page that answers "is this
   course live", and it disagreeing with the gate is a bug users see. */
ok('the profile panel reads the same column as the gate',
   /function renderPlan[\s\S]{0,2000}sponsorship_expires_at/.test(spon));

ok('the profile panel no longer reads the pre-split subscription_expires_at',
   !/function renderPlan[\s\S]{0,2500}subscription_expires_at/.test(spon));

console.log('');
console.log('  plan durations');
console.log('  ' + '-'.repeat(68));

/* A duration the client offers but the server cannot price is a purchase that
   takes money and adds zero months. */
const durs = [...new Set([...readFileSync(ROOT + 'app/checkout.js', 'utf8')
  .matchAll(/'(\d+mo)'/g)].map((m) => m[1]))];
const unpriced = durs.filter((d) => !(d in PLAN_MONTHS));
ok('every duration the checkout offers is priced by the server '
   + '(' + durs.sort().join(', ') + ')',
   unpriced.length === 0, 'server cannot price: ' + unpriced.join(', '));

console.log('');
console.log(fail ? '  ' + fail + ' disagreement(s) between a client copy and the server.'
                 : '  Every client copy of a server rule agrees with the server.');
process.exit(fail ? 1 : 0);

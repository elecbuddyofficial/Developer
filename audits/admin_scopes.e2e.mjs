/* The admin console's idea of "has access", against the server's.

   The console now decides this in adminLiveScopes rather than by reading
   subscription_expires_at. That makes it a fourth copy of deriveAccess, and an
   untested copy is the fault that has produced most of this month's bugs. So
   it is parsed out of the page and run against the real deriveAccess over
   every profile shape, including the 174 real ones from production.

   A disagreement here is not cosmetic: it is the admin console telling Blesson
   that somebody does or does not have access, while the app does the opposite.
*/
import { readFileSync } from 'node:fs';
import { deriveAccess, TRIAL_DAYS } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
const admin = readFileSync(ROOT + 'app/admin/index.html', 'utf8');

let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

// Pull the real functions out of the page rather than restating them.
function grab(name) {
  const at = admin.indexOf('function ' + name);
  if (at === -1) return null;
  let depth = 0, end = -1;
  for (let j = admin.indexOf('{', at); j < admin.length; j++) {
    if (admin[j] === '{') depth++;
    else if (admin[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
  }
  return end === -1 ? null : admin.slice(at, end);
}

const src = [
  'var TRIAL_DAYS = ' + TRIAL_DAYS + ';',
  "var ADMIN_SCOPE_COL = { written:'written_expires_at', oral:'oral_expires_at', sponsorship:'sponsorship_expires_at' };",
  grab('adminLiveScopes'),
  grab('adminHasAccess'),
  'return { adminLiveScopes: adminLiveScopes, adminHasAccess: adminHasAccess };'
].join('\n');

ok('adminLiveScopes was found in the console', !!grab('adminLiveScopes'));
ok('adminHasAccess was found in the console', !!grab('adminHasAccess'));
const api = new Function(src)();

// The console must use the same trial length as the server.
ok('the console uses the server trial length (' + TRIAL_DAYS + ' days)',
   new RegExp('TRIAL_DAYS \\* 864e5').test(admin) && /var TRIAL_DAYS = 3;/.test(admin));

const DAY = 86400000;
const iso = (d) => new Date(Date.now() + d * DAY).toISOString();

const SHAPES = [];
for (const plan of ['trial', 'lifetime', '3mo', '6mo', '12mo', 'starter', null]) {
  for (const t of [null, iso(-1), iso(-30)]) {
    for (const w of [null, iso(30), iso(-30)]) {
      for (const o of [null, iso(30), iso(-30)]) {
        for (const s of [null, iso(30), iso(-30)]) {
          SHAPES.push({ subscription_plan: plan, trial_started_at: t,
                        written_expires_at: w, oral_expires_at: o,
                        sponsorship_expires_at: s });
        }
      }
    }
  }
}

let bad = [];
for (const p of SHAPES) {
  const mine = api.adminLiveScopes(p, new Date()).sort().join(',');
  const srv = deriveAccess(p, new Date());
  const theirs = ['written', 'oral', 'sponsorship'].filter((k) => srv[k]).sort().join(',');
  if (mine !== theirs) {
    bad.push(JSON.stringify(p) + '\n           console: [' + mine + ']  server: [' + theirs + ']');
  }
}
ok('the console agrees with deriveAccess on all ' + SHAPES.length + ' synthetic shapes',
   bad.length === 0, bad.slice(0, 3).join('\n         '));

// And over the real population.
let real = [];
try {
  real = JSON.parse(readFileSync(
    './all_profiles.json', 'utf8'));
} catch { /* measured below */ }

if (real.length) {
  const diffs = real.filter((p) => {
    const mine = api.adminLiveScopes(p, new Date()).sort().join(',');
    const srv = deriveAccess(p, new Date());
    const theirs = ['written', 'oral', 'sponsorship'].filter((k) => srv[k]).sort().join(',');
    return mine !== theirs;
  });
  ok('and on all ' + real.length + ' real production profiles', diffs.length === 0,
     diffs.slice(0, 3).map((d) => d.email).join(', '));
} else {
  console.log('  note real profile snapshot not found, synthetic shapes only');
}

/* The display must name Sponsorship, or a customer's third clock is invisible
   however correct the logic behind it is. */
console.log('');
console.log('  what the Users tab renders');
console.log('  ' + '-'.repeat(68));
ok('the expiry cell renders a line per scope, Sponsorship included',
   /\['written', 'oral', 'sponsorship'\]\.map\(function \(s\) \{[\s\S]{0,140}ADMIN_SCOPE_COL\[s\]/.test(admin));
ok('sponsorship_expires_at is actually fetched for the Users tab',
   /var USER_COLS = [^;]*sponsorship_expires_at/.test(admin));
ok('and for the dashboard and the CSV export',
   (admin.match(/sponsorship_expires_at/g) || []).length >= 6);
ok('the pills no longer judge access from subscription_expires_at',
   !/ALL_PAID_PLANS\.indexOf\(u\.subscription_plan\) !== -1\s*\n\s*&& u\.subscription_expires_at/.test(admin));

console.log('');
console.log(fail ? '  ' + fail + ' disagreement(s) with the server.'
                 : '  The console reports the same access the app grants, per course.');
process.exit(fail ? 1 : 0);

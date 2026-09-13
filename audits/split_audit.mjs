/* The course split, audited across both admin consoles.

   The console has a CoC / Sponsorship switch, and most tabs appear under both.
   The question is not whether a tab is listed for a course - COURSE_TABS
   answers that - but whether the ACTION it performs is confined to that
   course. A tab that appears under Sponsorship and then writes to COC is worse
   than one that is missing, because the admin has no reason to check.

   This reads the real helpers out of the page and runs them, rather than
   reasoning about the source.
*/
import { readFileSync } from 'node:fs';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
const admin = readFileSync(ROOT + 'app/admin/index.html', 'utf8');

const problems = [];
const note = (tab, what, detail) => problems.push({ tab, what, detail });

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

// Rebuild just enough of the page to run the grant helpers for real.
const env = new Function(`
  var _adminCourse = 'coc';
  var ACCESS_SCOPES_ADMIN = ['written','oral','sponsorship'];
  var COURSE_SCOPES = { coc:['written','oral','both'], sponsorship:['sponsorship'] };
  var LEGACY_PAID_PLANS = ['starter','standard','pro'];
  var NEW_PAID_PLANS = ['3mo','6mo','12mo'];
  var ALL_PAID_PLANS = LEGACY_PAID_PLANS.concat(NEW_PAID_PLANS);
  var ACCESS_SCOPES_ADMIN = ['written','oral','sponsorship'];
  var ADMIN_FOREVER = '2099-12-31T00:00:00.000Z';
  ${grab('scopesCoveredAdmin')}
  ${grab('scopesOfCourse')}
  ${grab('intersect')}
  ${grab('scopeAccessUpdate')}
  ${grab('requiresScope')}
  ${grab('scopesForCourse')}
  return {
    scopeAccessUpdate: scopeAccessUpdate,
    scopesCoveredAdmin: scopesCoveredAdmin,
    requiresScope: requiresScope,
    setCourse: function (c) { _adminCourse = c; },
    scopesForCourse: scopesForCourse
  };
`)();

/* A customer who already holds paid COC access. Every grant made from the
   SPONSORSHIP console must leave these two columns exactly as they are. */
const FUT = '2027-03-01T00:00:00.000Z';
const cocCustomer = {
  written_expires_at: FUT, oral_expires_at: FUT, sponsorship_expires_at: null,
};

console.log('');
console.log('  GRANT ACCESS, used from the Sponsorship console');
console.log('  ' + '-'.repeat(68));
console.log('  A customer holding paid COC access to 1 Mar 2027.');
console.log('  Each row is a plan an admin can pick while the switch says Sponsorship.');
console.log('');

const rows = [];
for (const plan of ['trial', 'lifetime', '3mo', '6mo', '12mo', 'starter']) {
  env.setCourse('sponsorship');
  const scope = env.requiresScope(plan) ? 'sponsorship'
              : (['starter', 'standard', 'pro'].includes(plan) ? 'both' : null);
  const upd = env.scopeAccessUpdate(plan, scope, plan === 'lifetime' ? null : FUT, 'sponsorship');

  const cocKept = upd.written_expires_at === undefined && upd.oral_expires_at === undefined
    ? 'untouched'
    : (upd.written_expires_at === null ? 'WIPED' : 'overwritten -> ' + String(upd.written_expires_at).slice(0, 10));
  const sponSet = upd.sponsorship_expires_at === undefined ? 'untouched'
    : (upd.sponsorship_expires_at === null ? 'cleared'
       : String(upd.sponsorship_expires_at).slice(0, 10));

  rows.push({ plan, scope: scope === null ? '(none offered)' : scope, cocKept, sponSet,
              planFlag: upd.subscription_plan });

  if (cocKept === 'WIPED') {
    note('grant', 'a Sponsorship-console grant destroys paid COC access',
         'plan "' + plan + '" nulls written_expires_at and oral_expires_at');
  }
  if (cocKept.startsWith('overwritten')) {
    note('grant', 'a Sponsorship-console grant rewrites COC dates',
         'plan "' + plan + '" sets written/oral as well');
  }
  if (plan === 'lifetime' && sponSet === 'untouched') {
    note('grant', 'there is no Sponsorship-only lifetime',
         'lifetime ignores the course and opens every scope');
  }
  if (plan === 'lifetime' && upd.subscription_plan === 'lifetime') {
    note('grant', 'a Sponsorship lifetime still sets the GLOBAL lifetime flag',
         'that flag opens every course through deriveAccess');
  }
}

console.log('  %-10s %-16s %-34s %s'
  .replace('%-10s', 'plan'.padEnd(10)).replace('%-16s', 'scope offered'.padEnd(16))
  .replace('%-34s', "buyer's COC access".padEnd(34)).replace('%s', 'sponsorship set to'));
console.log('  ' + '-'.repeat(68));
for (const r of rows) {
  console.log('  %s %s %s %s'
    .replace('%s', r.plan.padEnd(10))
    .replace('%s', r.scope.padEnd(16))
    .replace('%s', r.cocKept.padEnd(34))
    .replace('%s', r.sponSet));
}

/* The same question in reverse. */
console.log('');
console.log('  GRANT ACCESS, used from the CoC console');
console.log('  ' + '-'.repeat(68));
const sponCustomer = { sponsorship_expires_at: FUT };
for (const plan of ['trial', 'lifetime', '12mo']) {
  env.setCourse('coc');
  const scope = env.requiresScope(plan) ? 'both' : (plan === 'starter' ? 'both' : null);
  const upd = env.scopeAccessUpdate(plan, scope, plan === 'lifetime' ? null : FUT, 'coc');
  const sponKept = upd.sponsorship_expires_at === undefined ? 'untouched'
    : (upd.sponsorship_expires_at === null ? 'WIPED' : 'set to ' + String(upd.sponsorship_expires_at).slice(0, 10));
  console.log('  %s %s'.replace('%s', plan.padEnd(12)).replace('%s', "buyer's Sponsorship access: " + sponKept));
  if (sponKept === 'WIPED') {
    note('grant', 'a CoC-console grant destroys Sponsorship access',
         'plan "' + plan + '" nulls sponsorship_expires_at');
  }
}

/* Which tabs claim to be per-course at all. */
console.log('');
console.log('  WHICH TABS ARE PER-COURSE');
console.log('  ' + '-'.repeat(68));
const gm = admin.match(/var GLOBAL_TABS = \[([^\]]+)\]/);
const cm = admin.match(/var COURSE_TABS = \{([\s\S]*?)\n\};/);
console.log('  whole site : ' + (gm ? gm[1].replace(/['\s]/g, '') : '?'));
if (cm) {
  for (const line of cm[1].split('\n')) {
    const m = line.match(/(\w+):\s*\[([\s\S]*)/);
    if (m) console.log('  ' + m[1].padEnd(11) + ': ' + m[2].replace(/['\s\]]/g, '').replace(/,$/, ''));
  }
}

console.log('');
console.log('  FINDINGS');
console.log('  ' + '-'.repeat(68));
if (!problems.length) console.log('  none');
const seen = new Set();
for (const p of problems) {
  const k = p.what + '|' + p.detail;
  if (seen.has(k)) continue;
  seen.add(k);
  console.log('  [' + p.tab + '] ' + p.what + '\n        ' + p.detail);
}
console.log('');
console.log('  ' + seen.size + ' distinct problem(s) with the split.');

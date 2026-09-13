/* A grant may never touch the course it was not made from.

   The Grant tab sits under a course switch and appears under both consoles. An
   audit on 13 Sep 2026 found nine faults from it ignoring that switch, the
   worst being that granting Trial or Lifetime from the Sponsorship console
   wiped the customer's paid COC dates.

   The rule this locks in: an action taken under a course writes that course's
   scope columns and names no other. 'all' is the Users tab, which is
   whole-account by design and says so.

   The helpers are parsed out of the real page, so a change there fails here.
*/
import { readFileSync } from 'node:fs';
import { deriveAccess } from
  'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

const admin = readFileSync(
  'D:/Notes 1/Original/ETO_Study_App/app/admin/index.html', 'utf8');

let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

function grab(name) {
  const at = admin.indexOf('function ' + name);
  if (at === -1) return '';
  let depth = 0, end = -1;
  for (let j = admin.indexOf('{', at); j < admin.length; j++) {
    if (admin[j] === '{') depth++;
    else if (admin[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
  }
  return admin.slice(at, end);
}

const env = new Function(`
  var ACCESS_SCOPES_ADMIN = ['written','oral','sponsorship'];
  var ADMIN_FOREVER = '2099-12-31T00:00:00.000Z';
  ${grab('scopesCoveredAdmin')} ${grab('scopesOfCourse')} ${grab('intersect')}
  ${grab('scopeAccessUpdate')} ${grab('isForever')} ${grab('hasAnyLifetime')}
  return { scopeAccessUpdate, scopesOfCourse, isForever, hasAnyLifetime, ADMIN_FOREVER };
`)();

const FUT = '2027-03-01T00:00:00.000Z';
const COC = ['written_expires_at', 'oral_expires_at', 'granted_written_expires_at', 'granted_oral_expires_at'];
const SPON = ['sponsorship_expires_at', 'granted_sponsorship_expires_at'];
const names = (upd, cols) => cols.filter((c) => Object.prototype.hasOwnProperty.call(upd, c));

const PLANS = ['trial', 'lifetime', '3mo', '6mo', '12mo', 'starter', 'standard', 'pro'];
const SCOPES = ['written', 'oral', 'both', 'sponsorship', 'everything', null];

console.log('');
console.log('  nothing written outside the console you are standing in');
console.log('  ' + '-'.repeat(68));

let leaked = [];
for (const plan of PLANS) {
  for (const scope of SCOPES) {
    const fromSpon = env.scopeAccessUpdate(plan, scope, FUT, 'sponsorship');
    const hit = names(fromSpon, COC);
    // 'everything' is the one deliberate exception and only for lifetime.
    const allowed = plan === 'lifetime' && scope === 'everything';
    if (hit.length && !allowed) leaked.push(`Sponsorship console, ${plan}/${scope} wrote ${hit.join(', ')}`);

    const fromCoc = env.scopeAccessUpdate(plan, scope, FUT, 'coc');
    const hit2 = names(fromCoc, SPON);
    if (hit2.length && !allowed) leaked.push(`CoC console, ${plan}/${scope} wrote ${hit2.join(', ')}`);
  }
}
ok('no grant reaches the other course (' + PLANS.length * SCOPES.length * 2 + ' combinations)',
   leaked.length === 0, leaked.slice(0, 4).join('\n         '));

/* The specific damage that was happening, named so a regression is obvious. */
console.log('');
console.log('  the faults the audit found, each one now impossible');
console.log('  ' + '-'.repeat(68));
const t = (c) => env.scopeAccessUpdate('trial', null, null, c);
ok('Trial from Sponsorship no longer wipes paid CoC dates',
   names(t('sponsorship'), COC).length === 0);
ok('Trial from CoC no longer wipes Sponsorship',
   names(t('coc'), SPON).length === 0);
const l = (c, sc) => env.scopeAccessUpdate('lifetime', sc, null, c);
ok('Lifetime from Sponsorship no longer wipes paid CoC dates',
   names(l('sponsorship', 'sponsorship'), COC).length === 0);
ok('Lifetime from Sponsorship does NOT set the global lifetime flag',
   l('sponsorship', 'sponsorship').subscription_plan !== 'lifetime');
ok('a legacy bundle from Sponsorship grants no CoC',
   names(env.scopeAccessUpdate('starter', 'both', FUT, 'sponsorship'), COC).length === 0);

console.log('');
console.log('  per-course lifetime');
console.log('  ' + '-'.repeat(68));
const sponLife = l('sponsorship', 'sponsorship');
ok('it sets a sponsorship date far in the future',
   env.isForever(sponLife.sponsorship_expires_at), JSON.stringify(sponLife));
ok('the server reads that as live Sponsorship access, and only that',
   (() => {
     const a = deriveAccess({ subscription_plan: 'trial', trial_started_at: '2020-01-01T00:00:00Z',
                              ...sponLife }, new Date());
     return a.sponsorship && !a.written && !a.oral;
   })());
ok('and still live in fifty years',
   deriveAccess({ subscription_plan: 'trial', trial_started_at: '2020-01-01T00:00:00Z', ...sponLife },
                new Date('2075-01-01')).sponsorship);
ok('the Lifetime pill counts it', env.hasAnyLifetime(sponLife));

const everything = l('coc', 'everything');
ok('"Everything" still grants the global lifetime flag',
   everything.subscription_plan === 'lifetime');
ok('and clears the per-scope dates, as it always did',
   everything.written_expires_at === null && everything.sponsorship_expires_at === null);
ok('an existing global-lifetime holder is unaffected by any of this',
   env.hasAnyLifetime({ subscription_plan: 'lifetime' }));

console.log('');
console.log('  removal');
console.log('  ' + '-'.repeat(68));
ok('Revoke from Sponsorship clears sponsorship and its grant ledger',
   t('sponsorship').sponsorship_expires_at === null
   && t('sponsorship').granted_sponsorship_expires_at === null);
ok('Revoke from CoC clears both CoC scopes and their ledgers',
   COC.every((c) => t('coc')[c] === null));
ok('the Users tab clears every course, because it is whole-account',
   [...COC, ...SPON].every((c) => t('all')[c] === null));
ok('a revoked customer really has nothing left',
   (() => {
     const a = deriveAccess({ subscription_plan: 'trial', trial_started_at: '2020-01-01T00:00:00Z',
                              ...t('all') }, new Date());
     return !a.written && !a.oral && !a.sponsorship;
   })());

console.log('');
console.log('  the console refuses a grant that would do nothing');
console.log('  ' + '-'.repeat(68));
ok('a grant writing no scope column is blocked before it reaches the database',
   /_touches\.length/.test(admin) && /covers no /.test(admin));

console.log('');
console.log(fail ? '  ' + fail + ' problem(s) with the grant split.'
                 : '  A grant touches its own course and nothing else, and a course can be');
if (!fail) console.log('  comped forever without giving away the other.');
process.exit(fail ? 1 : 0);

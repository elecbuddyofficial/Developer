/* Does the Sponsorship gate now agree with the server?

   The gate decides whether to draw a paywall. deriveAccess() decides whether
   get-sponsorship-key hands over the content key. When they disagree the
   reader gets the worst of both, which is exactly what happened on 12 Sep:
   the server said yes and the screen said pay.

   So this runs BOTH over the same profiles: the real deriveAccess from
   _shared/entitlements.ts, and the gate's own logic extracted out of the
   shipped app/sponsorship/index.html rather than retyped here. If the
   extraction stops matching, that is a failure too - a gate this cannot find
   is a gate nobody is checking. */
import { readFileSync } from 'node:fs';
import { deriveAccess } from 'file:///D:/Notes 1/Original/ETO_Study_App/supabase/functions/_shared/entitlements.ts';

const page = readFileSync(
  'D:/Notes 1/Original/ETO_Study_App/app/sponsorship/index.html', 'utf8');

// Every assignment, then the longest. The FIRST one in the file is the
// `= false` initialiser at the top, and matching that instead of the real
// expression is how this test handed itself a tautology on its first run.
const all = [...page.matchAll(/window\._sponAccess\s*=\s*([\s\S]*?);\n/g)].map(x => x[1]);
if (!all.length) { console.log('FAIL: could not find _sponAccess in the shipped page'); process.exit(1); }
const expr = all.slice().sort((a, b) => b.length - a.length)[0];
if (!/subscription_plan/.test(expr) || !/trialLive/.test(expr)) {
  console.log('FAIL: the extracted expression ignores lifetime or the trial:\n' + expr);
  process.exit(1);
}
const trialM = page.match(/var TRIAL_MS = ([^;]+);/);
if (!trialM) { console.log('FAIL: could not find TRIAL_MS'); process.exit(1); }

function gateSaysHasAccess(prof) {
  const now = Date.now();
  const live = (t) => !!t && new Date(t).getTime() > now;
  const TRIAL_MS = eval(trialM[1]);
  const tStart = prof.trial_started_at ? new Date(prof.trial_started_at).getTime() : 0;
  const trialLive = tStart > 0 && now < tStart + TRIAL_MS;
  // The shipped expression reads prof.data.*, because in the page `prof` is
  // the Supabase response. Wrap the fixture the same way rather than editing
  // the expression, which would stop it being the shipped code.
  // eslint-disable-next-line no-new-func
  return new Function('prof', 'now', 'live', 'trialLive',
    'return (' + expr + ');')({ data: prof }, now, live, trialLive);
}

const future = new Date(Date.now() + 60 * 86400000).toISOString();
const past   = new Date(Date.now() - 10 * 86400000).toISOString();
const fresh  = new Date(Date.now() - 1 * 86400000).toISOString();   // trial day 2
const stale  = new Date(Date.now() - 30 * 86400000).toISOString();

const PROFILES = {
  'lifetime, nothing else set':      { subscription_plan: 'lifetime' },
  'live trial, nothing bought':      { subscription_plan: 'trial', trial_started_at: fresh },
  'expired trial, nothing bought':   { subscription_plan: 'trial', trial_started_at: stale },
  'bought sponsorship':              { subscription_plan: '3mo', trial_started_at: stale, sponsorship_expires_at: future },
  'sponsorship lapsed':              { subscription_plan: '3mo', trial_started_at: stale, sponsorship_expires_at: past },
  'granted sponsorship only':        { subscription_plan: 'trial', trial_started_at: stale, granted_sponsorship_expires_at: future },
  'COC customer, no sponsorship':    { subscription_plan: '3mo', trial_started_at: stale, written_expires_at: future, oral_expires_at: future },
  'brand new, nothing at all':       {},
};

let bad = 0;
console.log('  %-32s %-10s %-10s'.replace(/%-(\d+)s/g, (s, n) => ' '.repeat(0) + 'X'.padEnd(0)) ? '' : '');
console.log('  ' + 'profile'.padEnd(32) + 'server'.padEnd(10) + 'gate'.padEnd(10) + 'verdict');
console.log('  ' + '-'.repeat(66));
for (const [label, prof] of Object.entries(PROFILES)) {
  const server = deriveAccess(prof, new Date()).sponsorship;
  const gate   = gateSaysHasAccess(prof);
  const ok = server === gate;
  if (!ok) bad++;
  console.log('  ' + label.padEnd(32)
    + String(server).padEnd(10) + String(gate).padEnd(10)
    + (ok ? 'agree' : '*** DISAGREE ***'));
}
console.log('');
if (bad) {
  console.log('  ' + bad + ' profile(s) where the screen and the server disagree.');
  process.exit(1);
}
console.log('  The gate and deriveAccess agree on every profile shape.');

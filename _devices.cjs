#!/usr/bin/env node
/* Shared-device review panel: does it rank the right thing first?
   Run: node _devices.cjs

   WHY. On 16 Aug one device turned out to hold three accounts: a real gmail
   on 3 Aug, then dnsink.com on 8 Aug, then luhupo.com on 15 Aug. The same
   person, cycling free trials on throwaway addresses for twelve days. No
   email check could see it, because every address was genuinely different.

   WHAT WOULD MAKE THE PANEL USELESS is not failing to find that. It is
   burying it. Three of the six clusters in the live data are Blesson's own
   accounts and two staff members, and one is a PAYING customer sharing a
   device with a team account. A panel that lists those first stops being
   read, and anything that auto-blocked on this signal would have banned a
   customer on day one. So most of what follows checks that the harmless
   clusters sink.

   The real scoring function is extracted from app/admin/index.html and
   executed against fixtures shaped like the live rows. */

const fs = require('fs');
const vm = require('vm');

const ADMIN = 'app/admin/index.html';
const src = fs.readFileSync(ADMIN, 'utf8');

let fails = 0, checks = 0;
function ok(cond, label, detail) {
  checks++;
  if (cond) { console.log('  ok    ' + label); return true; }
  fails++;
  console.log('  FAIL  ' + label + (detail ? '\n          ' + detail : ''));
  return false;
}

function extract(s, name) {
  // The `async` prefix has to come along. Starting at `function` produced a
  // body full of awaits with nothing to await in, which fails at parse rather
  // than at the assertion, so it looked like a broken check instead of a
  // broken extractor.
  const at = s.search(new RegExp('(?:async\\s+)?function\\s+' + name + '\\s*\\('));
  if (at === -1) throw new Error('not found in ' + ADMIN + ': ' + name);
  let i = s.indexOf('{', at), depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') { depth--; if (depth === 0) return s.slice(at, j + 1); }
  }
  throw new Error('unbalanced: ' + name);
}

const ctx = vm.createContext({ String });
vm.runInContext(extract(src, 'scoreDeviceCluster'), ctx);

// Mirrors the live allowlist closely enough: mainstream providers plus the
// one college domain that has actually been approved.
const ALLOWED = { 'gmail.com': true, 'yahoo.com': true, 'outlook.com': true,
                  'icloud.com': true, 'miet.ac.in': true };

const acc = (email, extra) => Object.assign(
  { email: email, is_admin: false, written_expires_at: null, oral_expires_at: null }, extra || {});

const CLUSTERS = {
  abuser: [                                   // the one that actually happened
    acc('solankihitarth512@gmail.com'),
    acc('wofori9922@dnsink.com'),
    acc('nihod68409@luhupo.com'),
  ],
  twoGmails: [                                // same person, two normal addresses
    acc('sameerzaidi834@gmail.com'),
    acc('sameer.haider.ec.2018@miet.ac.in'),
  ],
  ownTeam: [                                  // Blesson's own laptop
    acc('blesson@elec-buddy.com'),
    acc('elecbuddyofficial@gmail.com', { is_admin: true }),
    acc('blessonjoji472@gmail.com'),
  ],
  payingCustomer: [                           // a customer beside a staff account
    acc('jain96232@gmail.com', { written_expires_at: '2026-11-01' }),
    acc('rahul@elec-buddy.com'),
    acc('imnair1499@gmail.com'),
  ],
};

const S = {};
for (const k of Object.keys(CLUSTERS)) S[k] = ctx.scoreDeviceCluster(CLUSTERS[k], ALLOWED);

console.log('SHARED-DEVICE RANKING\n');
console.log('── The case it exists for ───────────────────────────────');

ok(S.abuser.odd === 2, 'both throwaway domains are counted as unrecognised',
   'got ' + S.abuser.odd);
ok(S.abuser.score > 0, 'the cycling cluster scores positive  (' + S.abuser.score + ')');

const order = Object.keys(S).sort((a, b) => S[b].score - S[a].score);
ok(order[0] === 'abuser',
   'it ranks above everything else',
   'order was: ' + order.map(k => k + '(' + S[k].score + ')').join(' > '));

console.log('\n── The false positives, which matter more ───────────────');

ok(S.ownTeam.team === 2 && S.ownTeam.score < 0,
   'your own accounts sink below zero  (' + S.ownTeam.score + ')');
ok(S.payingCustomer.paid === 1 && S.payingCustomer.score < 0,
   'a paying customer sinks below zero  (' + S.payingCustomer.score + ')');
ok(S.payingCustomer.score < S.abuser.score && S.ownTeam.score < S.abuser.score,
   'neither can ever outrank a real cycling cluster');
ok(S.twoGmails.odd === 0,
   'an approved college domain is not called unrecognised',
   'miet.ac.in was flagged, which would flag every real cadet on it');

console.log('\n── Degrading safely ─────────────────────────────────────');

// If the allowlist cannot be read, every domain would look unrecognised.
// Under-reporting is the right failure: a panel crying wolf gets ignored.
const noList = ctx.scoreDeviceCluster(CLUSTERS.abuser.map(m => acc(m.email)), null);
ok(noList.odd === 0,
   'with no allowlist, nothing is called unrecognised rather than everything');

let threw = null;
try {
  ctx.scoreDeviceCluster([acc(''), acc(null), { }], ALLOWED);
} catch (e) { threw = e.message; }
ok(!threw, 'a row with no email does not throw', threw || '');

console.log('\n── Wiring ───────────────────────────────────────────────');

ok(/id="dev-clusters"/.test(src), 'the panel has a mount point');
ok(/name === 'approvals'[\s\S]{0,200}loadDeviceClusters/.test(src),
   'it loads when the Approvals tab opens');
/* Read-only by construction. A flag column or a trigger here could quietly
   stop working, which is the failure recorded at the bottom of
   CHANGE_LEDGER.md; computing on read cannot. */
const fn = extract(src, 'loadDeviceClusters');
ok(!/\.(insert|update|upsert|delete)\(/.test(fn),
   'the panel only reads, so nothing it does can break a signup');

/* ── Disify: a free third party, kept where it cannot hurt ──────────── */
console.log('\n── Disify lookups fail open ─────────────────────────────');

/* The point of these is not that the lookup works. It is that nothing breaks
   when it does not. disify.com has no SLA, and a labelling nicety must never
   be able to make the console look broken, still less reach the signup path. */

ok(/disify\.com\/api\/domain\//.test(src) && !/disify\.com\/api\/email\//.test(src),
   'only the DOMAIN endpoint is used, so no cadet address leaves the machine');

const dfy = extract(src, 'disifyDomain');
ok(/AbortController/.test(dfy) && /setTimeout/.test(dfy),
   'the request is bounded by a timeout rather than hanging forever');

// Executed rather than pattern matched: the failure path is the whole point.
const sandbox = vm.createContext({
  Object, setTimeout, clearTimeout, AbortController,
  _disifyCache: {}, calls: 0,
});
vm.runInContext('var _disifyCache = {}; var calls = 0;', sandbox);
vm.runInContext(dfy, sandbox);

(async () => {
  // 1. A thrown fetch must resolve to null, never propagate.
  sandbox.fetch = () => { sandbox.calls++; return Promise.reject(new Error('offline')); };
  let threw = false, v1;
  try { v1 = await sandbox.disifyDomain('luhupo.com'); } catch (e) { threw = true; }
  ok(!threw && v1 === null, 'a failed lookup returns null instead of throwing');

  // 2. And it must be remembered, or a dead endpoint is retried on every
  //    render, turning one slow lookup into a stalled table.
  const before = sandbox.calls;
  await sandbox.disifyDomain('luhupo.com');
  ok(sandbox.calls === before, 'a failure is cached, so a dead endpoint is not retried in a loop');

  // 3. A non-200 is a failure too, not a body to parse.
  sandbox.fetch = () => Promise.resolve({ ok: false, status: 500 });
  ok(await sandbox.disifyDomain('example.invalid') === null, 'an HTTP error resolves to null');

  // 4. A good answer is passed through intact.
  sandbox.fetch = () => Promise.resolve({ ok: true, status: 200,
    json: () => Promise.resolve({ domain: 'dnsink.com', disposable: true, confidence: 100 }) });
  const good = await sandbox.disifyDomain('dnsink.com');
  ok(good && good.disposable === true && good.confidence === 100, 'a real verdict is returned unchanged');

  // 5. Neither renderer may block on it. Awaiting a third party before
  //    painting is how a free endpoint becomes a blank screen.
  for (const fname of ['loadApprovals', 'loadDeviceClusters']) {
    const body = extract(src, fname);
    ok(/(^|[^.\w])annotateDisify\(\)/m.test(body) && !/await\s+annotateDisify/.test(body),
       fname + ' calls the lookup without awaiting it');
  }

  console.log('\n' + (fails === 0
    ? checks + ' checks, all passing.'
    : fails + ' of ' + checks + ' checks FAILED.'));
  process.exit(fails === 0 ? 0 : 1);
})();

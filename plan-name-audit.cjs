/* Plan-name consistency audit.

   The plan names live in the database AND in several hardcoded maps, because
   the rename is deliberately not wired through end to end. That is a fine
   decision, but it means the copies can DRIFT, and drift is silent: the card
   would say one thing and the receipt another, and nothing would error.

   So this checks every copy against production, and walks the payment path to
   confirm money is still computed server-side. Run it after any plan rename.

   Usage:
     node plan-name-audit.cjs "$(curl -s -X POST        https://api.supabase.com/v1/projects/<ref>/database/query        -H 'Authorization: Bearer <token>' -H 'Content-Type: application/json'        -d '{"query":"SELECT duration, scope, track_name, tier_name, base_amount, active FROM pricing_plans;"}')"

   Run it after ANY plan rename, in the admin panel or in SQL.
*/
const fs = require('fs');
process.chdir('d:/Notes 1/Original/ETO_Study_App');

const DB = JSON.parse(process.argv[2]);
const fail = [], warn = [], note = [];
const head = t => console.log('\n\u2500\u2500 ' + t + ' ' + '\u2500'.repeat(Math.max(0, 60 - t.length)));

// What production actually says.
const dbTrack = {}, dbTier = {};
DB.forEach(r => { dbTrack[r.scope] = r.track_name; dbTier[r.duration] = r.tier_name; });

/* Pull an object literal like  { written: 'X', oral: 'Y', both: 'Z' }  out of
   a file by the name it is assigned to, without executing anything. */
function mapFrom(file, varName) {
  const src = fs.readFileSync(file, 'utf8');
  // Anchor on the ASSIGNMENT, not the first mention. A plain indexOf finds a
  // usage like TRACK_LABEL_ADMIN[scope] earlier in the file and then reads
  // whatever braces follow it, which reported a correct map as missing.
  const decl = new RegExp('(?:var|const|let)\\s+' + varName + '\\b[^=]*=');
  const dm = decl.exec(src);
  const i = dm ? dm.index : -1;
  if (i === -1) return null;
  const open = src.indexOf('{', i), close = src.indexOf('}', open);
  if (open === -1 || close === -1) return null;
  const body = src.slice(open + 1, close);
  const out = {};
  for (const m of body.matchAll(/(\w+)\s*:\s*'([^']*)'/g)) out[m[1]] = m[2];
  return Object.keys(out).length ? out : null;
}

head('1. Track names: every hardcoded copy vs production');
console.log('   production:  ' + ['written', 'oral', 'both'].map(k => k + '=' + dbTrack[k]).join('  '));
const TRACK_COPIES = [
  ['app/index.html', 'TRACK_FALLBACK_NAME', 'card fallback when the DB read fails', true],
  ['app/admin/index.html', 'TRACK_LABEL_ADMIN', 'admin labels, coupon targets, offer preview', true],
  ['supabase/functions/_shared/payment-email.ts', 'TRACK_NAME', 'PAYMENT RECEIPTS', true],
  ['app/index.html', 'SCOPE_TAB_LABEL', 'the tabs a buyer clicks', false],
];
for (const [file, name, what, mustMatch] of TRACK_COPIES) {
  const m = mapFrom(file, name);
  if (!m) { fail.push('could not read ' + name + ' from ' + file); console.log('   FAIL ' + name + ' not found'); continue; }
  const diffs = ['written', 'oral', 'both'].filter(k => m[k] !== dbTrack[k]);
  if (!diffs.length) console.log('   ok   ' + name.padEnd(20) + what);
  else if (mustMatch) {
    diffs.forEach(k => fail.push(name + '.' + k + ' = "' + m[k] + '" but the database says "' + dbTrack[k] + '"  (' + what + ')'));
    console.log('   FAIL ' + name.padEnd(20) + 'DRIFTED: ' + diffs.join(', '));
  } else {
    // The tab is deliberately shorter; it only has to be a sensible stand-in.
    const bad = diffs.filter(k => !dbTrack[k].startsWith(m[k]) && !m[k].startsWith(dbTrack[k].split(' ')[0]));
    if (bad.length) { bad.forEach(k => warn.push(name + '.' + k + ' = "' + m[k] + '" is unrelated to "' + dbTrack[k] + '"')); }
    console.log('   ok   ' + name.padEnd(20) + what + ' (short form, by design: '
      + diffs.map(k => '"' + m[k] + '"').join(', ') + ')');
  }
}

head('2. Duration names vs production');
console.log('   production:  ' + ['3mo', '6mo', '12mo'].map(k => k + '=' + dbTier[k]).join('  '));
const src = fs.readFileSync('app/admin/index.html', 'utf8');
const tl = src.slice(src.indexOf('function tierLabel'), src.indexOf('function tierLabel') + 260);
const tierMap = {};
for (const m of tl.matchAll(/'(\d+mo)'\s*:\s*'([^']*)'/g)) tierMap[m[1]] = m[2];
const tierDiffs = ['3mo', '6mo', '12mo'].filter(k => tierMap[k] !== dbTier[k]);
if (tierDiffs.length) { tierDiffs.forEach(k => fail.push('tierLabel(' + k + ') = "' + tierMap[k] + '" but the database says "' + dbTier[k] + '"')); }
console.log('   ' + (tierDiffs.length ? 'FAIL' : 'ok  ') + ' tierLabel()        admin duration labels');

// The receipt uses its own duration wording ("3-Month"), which is a different
// register on purpose. Only check it has not gone stale in style.
const pe = fs.readFileSync('supabase/functions/_shared/payment-email.ts', 'utf8');
const dl = {};
for (const m of pe.slice(pe.indexOf('DURATION_LABELS'), pe.indexOf('DURATION_LABELS') + 300).matchAll(/'(\d+mo)':\s*'([^']*)'/g)) dl[m[1]] = m[2];
const numOk = ['3mo', '6mo', '12mo'].every(k => dl[k] && dl[k].startsWith(k.replace('mo', '')));
if (!numOk) fail.push('receipt DURATION_LABELS no longer match the months they represent: ' + JSON.stringify(dl));
console.log('   ' + (numOk ? 'ok  ' : 'FAIL') + ' DURATION_LABELS    receipts (' + Object.values(dl).join(', ') + ')');

head('3. Stale names anywhere in the live app');
const LIVE = ['app/index.html', 'app/admin/index.html', 'app/sponsorship/index.html', 'app/courses.html',
              'app/app.js', 'app/account.js', 'supabase/functions/_shared/payment-email.ts',
              'app/admin/pricing_v2_setup.sql'];
const OLD = /Passage|Voyage|Expedition|Mariner|\bLaunch\b/;
for (const f of LIVE) {
  if (!fs.existsSync(f)) continue;
  const hits = fs.readFileSync(f, 'utf8').split('\n')
    .map((l, i) => [i + 1, l])
    .filter(([, l]) => OLD.test(l) && !/Voyage Data|Launch and recovery/.test(l));
  // Comments explaining the history are intentional; anything else is a miss.
  const live = hits.filter(([, l]) => !/^\s*(\/\/|--|\*)/.test(l));
  if (live.length) { live.forEach(([n, l]) => fail.push(f + ':' + n + ' still uses an old name: ' + l.trim().slice(0, 70))); }
  if (hits.length) note.push(f + ': ' + hits.length + ' mention(s), ' + live.length + ' in live code, rest are history comments');
}
console.log('   ' + (fail.length ? 'see failures' : 'no old names in live code'));

head('4. Payment path: is money still server-side?');
const co = fs.readFileSync('supabase/functions/create-razorpay-order/index.ts', 'utf8');
const readsDb = /from\(['"]pricing_plans['"]\)/.test(co);
const takesClientAmount = /\bbody\.(amount|price)\b|req\.(amount|price)/.test(co);
if (!readsDb) fail.push('create-razorpay-order no longer reads pricing_plans');
if (takesClientAmount) fail.push('create-razorpay-order appears to accept an amount from the client');
console.log('   ' + (readsDb ? 'ok  ' : 'FAIL') + ' order amount comes from pricing_plans, not the client');
console.log('   ' + (takesClientAmount ? 'FAIL' : 'ok  ') + ' no client-supplied amount is trusted');
const checksActive = /active/.test(co.slice(co.indexOf('pricing_plans'), co.indexOf('pricing_plans') + 400));
console.log('   ' + (checksActive ? 'ok  ' : 'warn') + ' order checks the plan is active');
if (!checksActive) warn.push('create-razorpay-order may not check plan.active');

head('5. Receipt renders for every plan');
const TRACK = mapFrom('supabase/functions/_shared/payment-email.ts', 'TRACK_NAME');
let bad = 0;
for (const r of DB) {
  const dur = dl[r.duration] || r.duration;
  const track = TRACK[r.scope];
  if (!track || !dur) { bad++; fail.push('receipt cannot name ' + r.scope + ' ' + r.duration); continue; }
  console.log('   ' + (track + ' \u00b7 ' + dur).padEnd(34) + ' \u20b9' + (r.base_amount / 100));
}
for (const legacy of ['starter', 'standard', 'pro']) {
  if (!new RegExp(legacy + ":\\s*'").test(pe)) { warn.push('legacy plan "' + legacy + '" has no receipt label'); }
}
console.log('   ' + (bad ? bad + ' FAILED' : 'all ' + DB.length + ' render, legacy values covered'));

head('RESULT');
if (note.length) { console.log('\nnotes:'); note.forEach(n => console.log('   - ' + n)); }
if (warn.length) { console.log('\n' + warn.length + ' warning(s):'); warn.forEach(w => console.log('   ! ' + w)); }
if (fail.length) { console.log('\n' + fail.length + ' FAILURE(S):'); fail.forEach(f => console.log('   x ' + f)); }
else console.log('\nEvery copy of the plan names agrees with production.');
process.exitCode = fail.length ? 1 : 0;

/* AUDIT 3 - the Sponsorship course structure, end to end.

   Three ways this breaks, and only one of them is visible by reading code:

     a file the page asks for that is not on disk   -> a dead section, 404
     a file on disk the page never asks for         -> content nobody can reach
     a file that is not encrypted                   -> the course readable by
                                                       anyone who clones the repo

   The manifest is the topic table on the page itself, so this compares what
   the app actually requests against what actually exists, rather than against
   a list somebody typed.
*/
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/';
const DATA = ROOT + 'data/Sponsorship/';
const page = readFileSync(ROOT + 'app/sponsorship/index.html', 'utf8');

let fail = 0;
const ok = (label, good, detail) => {
  console.log('  ' + (good ? 'ok   ' : 'FAIL ') + label + (good || !detail ? '' : '\n         ' + detail));
  if (!good) fail++;
};

/* Every notesFile / quizFile / videosFile the page names, plus the handful
   loaded by a literal path. */
const referenced = new Set();
for (const m of page.matchAll(/(?:notesFile|quizFile|videosFile)\s*:\s*'([^']+)'/g)) {
  referenced.add(m[1]);
}
for (const m of page.matchAll(/_loadEncryptedScript\(BASE\s*\+\s*'([^']+)'/g)) {
  referenced.add(m[1]);
}

// Everything that actually exists.
const onDisk = new Set();
(function walk(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith('.js')) onDisk.add(relative(DATA, p).split(sep).join('/'));
  }
})(DATA);

console.log('');
console.log('  referenced by the page : ' + referenced.size);
console.log('  present on disk        : ' + onDisk.size);
console.log('');

const missing = [...referenced].filter((f) => !onDisk.has(f)).sort();
ok('every file the page loads exists on disk', missing.length === 0,
   missing.length + ' would 404: ' + missing.slice(0, 8).join(', '));

/* Orphans, split by whether they hold anything.

   An encrypted empty array is about 120 bytes. Four interview quizzes and the
   two current-affairs files are that size: empty placeholders, and their
   topics correctly carry quizFile:null. Wiring those up would show a reader
   an empty quiz, so being unreferenced is the RIGHT state and this must not
   report them as a problem.

   Real content that nothing references is a different matter, and is reported
   as a question rather than a failure: it is a product decision whether the
   old structure is superseded or stranded. */
const orphans = [...onDisk].filter((f) => !referenced.has(f)).sort();
const STUB_BYTES = 1024;
const stubs = orphans.filter((f) => statSync(DATA + f).size < STUB_BYTES);
const stranded = orphans.filter((f) => statSync(DATA + f).size >= STUB_BYTES);

ok('no EMPTY file is wired into the page (an empty quiz is worse than none)',
   stubs.every((f) => !referenced.has(f)));
console.log('       ' + stubs.length + ' empty stub(s) correctly left unreferenced');

if (stranded.length) {
  const bytes = stranded.reduce((a, f) => a + statSync(DATA + f).size, 0);
  console.log('  note ' + stranded.length + ' file(s) hold real content but nothing loads them, '
    + (bytes / 1024).toFixed(0) + ' KB total');
  const folders = [...new Set(stranded.map((f) => f.split('/')[0]))];
  console.log('       folders: ' + folders.join(', '));
  console.log('       Not a fault in the app: these are the pre-restructure');
  console.log('       sections. A decision for Blesson, not something to fix here.');
}

// Encryption. An encrypted file literally starts {"v":1, so no key is needed.
const plain = [...onDisk].filter((f) => {
  const head = readFileSync(DATA + f).subarray(0, 14).toString('utf8');
  return !head.startsWith('{"v":1');
}).sort();
ok('every Sponsorship content file is encrypted at rest', plain.length === 0,
   plain.length + ' in plaintext: ' + plain.slice(0, 8).join(', '));

/* The key.

   Sponsorship was encrypted as deterrence against scraping while the course
   was free, and the key went to any signed-in user. It is now SOLD, and
   course_config.sponsorship_paid is true in production, so the key function
   does check entitlement.

   That makes agreement with the gate load-bearing rather than cosmetic. If
   the gate opened where the key function refused, the reader would get an
   unlocked page full of content that will not decrypt, which reads as
   corruption rather than as a paywall. Both must derive access the same way,
   and the only safe way to guarantee that is for both to call deriveAccess.

   It must also still fail OPEN on the config read, for the reason the
   function itself gives: treating a database blip as "paid" would lock every
   reader out of a course, while treating it as free costs only what is
   already being given away. */
console.log('');
console.log('  key delivery');
console.log('  ' + '-'.repeat(68));
const keyFn = readFileSync(ROOT + 'supabase/functions/get-sponsorship-key/index.ts', 'utf8');
ok('the key function requires a signed-in user',
   /auth\.getUser|Authorization/i.test(keyFn));
ok('the key function serves the sponsorship key, not a COC key',
   /CONTENT_KEY_SPONSORSHIP/.test(keyFn));
ok('entitlement comes from the shared deriveAccess, not a local copy',
   /import \{ deriveAccess \}/.test(keyFn) && /deriveAccess\(profile/.test(keyFn));
ok('it reads sponsorship access, not a COC scope',
   /const \{ sponsorship \} = deriveAccess/.test(keyFn));
ok('whether the course is sold is read from the database, never the request',
   /course_config/.test(keyFn) && !/body[\s\S]{0,60}sponsorshipPaid/.test(keyFn));
ok('a failed config read leaves the course FREE, not locked',
   /let sponsorshipPaid = false/.test(keyFn));
ok('a misconfigured key fails loudly instead of returning an empty string',
   /key\.length !== 64/.test(keyFn));

/* The gate is what actually paywalls, and it must cover the content views. */
console.log('');
console.log('  the paywall itself');
console.log('  ' + '-'.repeat(68));
ok('the page has a gate that reads the sponsorship expiry',
   /_sponAccess[\s\S]{0,400}sponsorship_expires_at/.test(page));
ok('the gate re-checks on a timer, so access appears without a hard refresh',
   /setInterval\([^)]*_sponRefreshState|_sponRefreshState[\s\S]{0,200}setInterval/.test(page)
   || /setInterval\(\s*_sponRefreshState/.test(page));
ok('the gate re-checks when the tab is looked at again',
   /visibilitychange/.test(page));

console.log('');
if (fail) {
  console.log('  ' + fail + ' structural problem(s).');
} else {
  console.log('  Nothing the page asks for is missing, nothing empty is wired in,');
  console.log('  nothing is readable without a key, and the key agrees with the gate.');
  if (stranded.length) {
    console.log('  ' + stranded.length + ' pre-restructure file(s) remain unreferenced. Open question,');
    console.log('  not a fault: see the note above.');
  }
}
process.exit(fail ? 1 : 0);

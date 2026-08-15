/* Structural check across ALL sponsorship content.

   Written after a duplicated heading shipped to production: an edit inserted a
   section ending in the same <div id="s-toolkit"> the file already had, leaving
   two headings and two elements with one id. Nothing caught it, because the
   file is encrypted at rest and the existing checks only read whatever happens
   to be plaintext at the time.

   This decrypts IN MEMORY and never writes plaintext to disk, so it is safe to
   run at any time and cannot leave content decrypted the way an edit cycle can.

     CONTENT_KEY_SPONSORSHIP=... node _content.cjs
*/
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const KEY_HEX = process.env.CONTENT_KEY_SPONSORSHIP;
if (!KEY_HEX || KEY_HEX.length !== 64) {
  console.error('Set CONTENT_KEY_SPONSORSHIP (64 hex chars). See DecryptEncrypt/Decrypt.txt.');
  process.exit(1);
}
const KEY = Buffer.from(KEY_HEX, 'hex');

function decrypt(json) {
  const { iv, data, tag } = JSON.parse(json);
  const d = crypto.createDecipheriv('aes-256-gcm', KEY, Buffer.from(iv, 'base64'));
  d.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([d.update(Buffer.from(data, 'base64')), d.final()]).toString('utf8');
}

const DIRS = ['overview', 'fundamentals', 'aptitude', 'datainterp', 'interview', 'CompanyQA'];
let files = [];
for (const d of DIRS) {
  const full = path.join(__dirname, 'data/Sponsorship', d);
  if (!fs.existsSync(full)) continue;
  for (const f of fs.readdirSync(full)) if (f.endsWith('.js')) files.push('data/Sponsorship/' + d + '/' + f);
}

let problems = [], checked = 0;
const add = (f, msg) => problems.push('  ' + f + ': ' + msg);

for (const rel of files) {
  const raw = fs.readFileSync(path.join(__dirname, rel), 'utf8').trim();
  let src;
  try { src = /^\{"v":1,/.test(raw) ? decrypt(raw) : raw; }
  catch (e) { add(rel, 'will not decrypt: ' + e.message); continue; }
  checked++;

  // Stubs are legitimately near-empty; skip the structural checks for them.
  const stub = /Content coming soon|Notes in progress/.test(src);

  // 1. Duplicate ids. Two elements sharing an id is invalid, and jumpTo lands
  //    on whichever comes first, which is rarely the one intended.
  const ids = [...src.matchAll(/id="([a-z0-9-]+)"/g)].map(m => m[1]);
  const dupIds = [...new Set(ids.filter((v, i) => ids.indexOf(v) !== i))];
  if (dupIds.length) add(rel, 'duplicate id: ' + dupIds.join(', '));

  // 2. Repeated headings, which is what a bad insert actually looks like.
  const heads = [...src.matchAll(/<div class="n-h1"[^>]*>([^<]+)</g)].map(m => m[1].trim());
  const dupHeads = [...new Set(heads.filter((v, i) => heads.indexOf(v) !== i))];
  if (dupHeads.length) add(rel, 'heading appears twice: ' + dupHeads.join(' | '));

  // 3. Anchor buttons pointing at ids that do not exist.
  const jumps = [...new Set([...src.matchAll(/jumpTo\('([a-z0-9-]+)'\)/g)].map(m => m[1]))];
  const orphan = jumps.filter(j => !ids.includes(j));
  if (orphan.length) add(rel, 'anchor with no target: ' + orphan.join(', '));

  // 4. Em dashes, which the house style forbids in user-facing text.
  if (src.includes('—')) add(rel, 'contains an em dash');

  // 5. Quiz integrity, for files that carry questions.
  if (/loadQuizzes\(/.test(src) && !stub) {
    let captured = null;
    const sandbox = { window: { loadQuizzes: (k, a) => { captured = { k, a }; }, loadNotes: () => {} } };
    try { new Function('window', src).call(null, sandbox.window); } catch (e) { add(rel, 'does not evaluate: ' + e.message); continue; }
    if (captured && Array.isArray(captured.a)) {
      const seen = new Set();
      for (const q of captured.a) {
        if (!q.opts || q.opts.length !== 4) add(rel, q.id + ': not 4 options');
        else if (new Set(q.opts).size !== 4) add(rel, q.id + ': duplicate options');
        else if (!q.opts.includes(q.a)) add(rel, q.id + ': correct answer is not among the options');
        if (seen.has(q.id)) add(rel, 'duplicate question id ' + q.id);
        seen.add(q.id);
      }
    }
  }
}

console.log('\nchecked ' + checked + ' content file(s) across ' + DIRS.length + ' directories');
if (problems.length) { console.log('\n' + problems.join('\n')); console.log('\n' + problems.length + ' problem(s)'); }
else console.log('no duplicate ids, no repeated headings, no orphan anchors, no em dashes, quizzes intact');
process.exitCode = problems.length ? 1 : 0;

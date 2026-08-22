/* Generates app/counts.js: the content figures the app puts on screen.

   The Surveyor Q&A badge on the Oral landing said "281 questions" for months
   while the file held 1,193, because the badge was a literal string in the
   HTML. The About panel on the same page said 1,196, so the app contradicted
   itself, and 1,196 was itself three out - it had been hand-corrected once and
   drifted again. Every number a cadet uses to judge whether this is worth
   paying for was maintained by hand in one file, and had failed twice.

   So they are counted from the content instead, by the same loader shape the
   app uses: each file is evaluated against a stub window, and whatever it hands
   the loader is what gets counted. A regex over the source would drift the
   first time a file's shape changed; this cannot, because it IS the app's read
   path.

   Decrypts IN MEMORY. Nothing plaintext is ever written to disk, so this is
   safe to run at any time and cannot leave content decrypted the way an edit
   cycle can.

     CONTENT_KEY_ORAL=... CONTENT_KEY_WRITTEN=... node _counts.cjs

   Output lives in app/, not data/, deliberately. The key-free plaintext scan in
   CLAUDE.md walks data/Orals data/Written data/Sponsorship and expects a known
   set of lines; a permanently-plaintext file under data/ would add one more to
   memorise and blunt the check that catches content left decrypted. counts.js
   holds integers, not content, and belongs with the app anyway.
*/
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const OUT = path.join(__dirname, 'app', 'counts.js');

/* Both keys, or nothing. A missing key here would mean counting zero files and
   writing "0 questions" onto the homepage of a paid product. This is the exact
   failure CLAUDE.md records for encrypt-content.js --status, where an error
   path read as a clean result, so it exits loudly and writes nothing. */
const KEYS = {};
for (const name of ['ORAL', 'WRITTEN']) {
  const hex = process.env['CONTENT_KEY_' + name];
  if (!hex || hex.length !== 64) {
    console.error('ERROR: set CONTENT_KEY_' + name + ' (64 hex chars). See DecryptEncrypt/Decrypt.txt.');
    console.error('Nothing was written. ' + OUT + ' is unchanged.');
    process.exit(1);
  }
  KEYS[name] = Buffer.from(hex, 'hex');
}

function read(rel, group) {
  const raw = fs.readFileSync(path.join(__dirname, rel), 'utf8').trim();
  if (!/^\{"v":1,/.test(raw)) return raw;          // free previews are plaintext
  const { iv, data, tag } = JSON.parse(raw);
  const d = crypto.createDecipheriv('aes-256-gcm', KEYS[group], Buffer.from(iv, 'base64'));
  d.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([d.update(Buffer.from(data, 'base64')), d.final()]).toString('utf8');
}

const failures = [];

/* Runs a content file against a stub window and returns whatever the stub
   collected. The stub, not the source text, defines what counts. */
function evalContent(rel, group, stub) {
  let src;
  try { src = read(rel, group); }
  catch (e) { failures.push(rel + ': will not decrypt: ' + e.message); return false; }
  try {
    const window = stub;
    eval(src);                                      // eslint-disable-line no-eval
    return true;
  } catch (e) {
    failures.push(rel + ': will not evaluate: ' + e.message);
    return false;
  }
}

function jsFiles(dir) {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter(f => f.endsWith('.js')).sort();
}

// ── Quiz questions ────────────────────────────────────────────────────────
// loadQuizzes(topicId, obj) where obj is either an array or categories of
// arrays. Both shapes are in use, so both are summed.
let quizQuestions = 0;
for (const f of jsFiles('data/Orals/quizzes')) {
  evalContent('data/Orals/quizzes/' + f, 'ORAL', {
    loadQuizzes: function (id, obj) {
      if (Array.isArray(obj)) quizQuestions += obj.length;
      else if (obj && typeof obj === 'object') {
        for (const v of Object.values(obj)) if (Array.isArray(v)) quizQuestions += v.length;
      }
    },
  });
}

// ── Surveyor Q&A ──────────────────────────────────────────────────────────
let surveyorQuestions = 0, surveyors = 0;
{
  const stub = {};
  if (evalContent('data/Orals/SurveyorQA/sq_data.js', 'ORAL', stub)) {
    const D = stub.SQ_DATA;
    if (D && Array.isArray(D.questions)) {
      surveyorQuestions = D.questions.length;
      // Named surveyors only. The monthly-mock entries are sittings, not
      // people, and counting them would overstate who a cadet might face.
      surveyors = Object.keys(D.surveyors || {})
        .filter(n => (D.surveyors[n] || {}).role !== 'monthly-mock').length;
    } else {
      failures.push('data/Orals/SurveyorQA/sq_data.js: no SQ_DATA.questions array');
    }
  }
}

// ── Numericals ────────────────────────────────────────────────────────────
let numericals = 0;
{
  const stub = {};
  if (evalContent('data/Written/numericals.js', 'WRITTEN', stub)) {
    if (Array.isArray(stub.NUMERICALS)) numericals = stub.NUMERICALS.length;
    else failures.push('data/Written/numericals.js: no NUMERICALS array');
  }
}

// ── Topics ────────────────────────────────────────────────────────────────
const oralTopics = jsFiles('data/Orals/notes').length;
const writtenTopics = jsFiles('data/Written/notes').length;

// ── Refuse to write anything doubtful ─────────────────────────────────────
const counts = { oralTopics, writtenTopics, numericals, quizQuestions, surveyorQuestions, surveyors };

for (const [k, v] of Object.entries(counts)) {
  if (!v) failures.push(k + ' counted ' + v + ', which can only mean a file failed to load');
}

if (failures.length) {
  console.error('ERROR: refusing to write ' + OUT);
  for (const f of failures) console.error('  ' + f);
  console.error('\nThe file is unchanged, so the app keeps the last good numbers.');
  process.exit(1);
}

// ── Write ─────────────────────────────────────────────────────────────────
// Local date, not toISOString(). IST is UTC+5:30, so for most of the evening
// the UTC date is still yesterday and the stamp would read a day behind.
const now = new Date();
const today = now.getFullYear() + '-'
  + String(now.getMonth() + 1).padStart(2, '0') + '-'
  + String(now.getDate()).padStart(2, '0');
const body = '/* GENERATED by _counts.cjs on ' + today + ' - do not edit by hand.\n'
  + '   Counted from the encrypted content itself, so these cannot drift from\n'
  + '   what the app actually loads. Regenerate after adding content:\n'
  + '     CONTENT_KEY_ORAL=... CONTENT_KEY_WRITTEN=... node _counts.cjs  */\n'
  + 'window.EB_COUNTS = {\n'
  + Object.entries(counts).map(([k, v]) => '  ' + k + ': ' + v + ',').join('\n') + '\n'
  + "  generatedOn: '" + today + "'\n"
  + '};\n';

const before = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
fs.writeFileSync(OUT, body);

console.log('Content counts');
console.log('  oral topics        ' + oralTopics);
console.log('  written topics     ' + writtenTopics);
console.log('  numericals         ' + numericals);
console.log('  quiz questions     ' + quizQuestions.toLocaleString('en-IN'));
console.log('  surveyor questions ' + surveyorQuestions.toLocaleString('en-IN'));
console.log('  named surveyors    ' + surveyors);
console.log(before === body ? '\napp/counts.js unchanged.' : '\napp/counts.js updated.');

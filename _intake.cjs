#!/usr/bin/env node
/* Intake check: are we up to date against the questions that were actually asked?
 *
 *   node _intake.cjs questions.json
 *   node _intake.cjs questions.json --new-only
 *
 * questions.json is an array of rows from exam_questions, at minimum
 * { question_text, topic, asked_on }. Export it with:
 *
 *   select id, asked_on, topic, surveyor, question_text, answer_text
 *     from exam_questions order by asked_on;
 *
 * WHY THIS EXISTS. Recollections from a live sitting are the only ground truth
 * for what surveyors ask. Everything else is a guess about what they might.
 * Every question that comes in should therefore be checked BOTH ways:
 *
 *   1. Is it in the Surveyor Q&A bank?   If not, cadets cannot practise it.
 *   2. Do the notes cover it?            If not, they cannot learn it either.
 *
 * A question can pass one and fail the other, and the two failures need
 * different work, so they are reported separately.
 *
 * TWO SCORING MISTAKES THIS FILE HAS ALREADY MADE, both found by checking the
 * output by hand rather than trusting the number:
 *
 *   - Matching on raw strings. "BESS" scored zero against T23 while that topic
 *     carried two full sections on lithium-ion ESS, and a ten-item gap list
 *     built that way survived nothing once the concepts were checked. Terms are
 *     stemmed and stopped here, and the report is only ever a shortlist for a
 *     person to read.
 *   - Scoring whole sections. A long section contains more distinct words, so
 *     it wins by size: "engine room flooding" matched the CO2 section and "low
 *     insulation resistance" matched a Q&A block. Coverage is now the best
 *     WINDOW of about 120 words, so the terms have to appear near each other,
 *     which is what actually reading like coverage means.
 *
 * Needs CONTENT_KEY_ORAL exported. It exits non-zero rather than run against an
 * empty corpus, because an empty corpus reports every question as a gap and
 * that reads exactly like a real finding.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

process.chdir(__dirname);

const KEY_HEX = process.env.CONTENT_KEY_ORAL;
if (!KEY_HEX || KEY_HEX.length !== 64) {
  console.error('ERROR: export CONTENT_KEY_ORAL first (see DecryptEncrypt/Decrypt.txt).');
  console.error('Refusing to run: with no corpus every question looks like a gap.');
  process.exit(2);
}
const KEY = Buffer.from(KEY_HEX, 'hex');

function read(rel) {
  const raw = fs.readFileSync(rel, 'utf8').trim();
  if (!/^\{"v":1,/.test(raw)) return raw;              // free previews
  const { iv, data, tag } = JSON.parse(raw);
  const d = crypto.createDecipheriv('aes-256-gcm', KEY, Buffer.from(iv, 'base64'));
  d.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([d.update(Buffer.from(data, 'base64')), d.final()]).toString('utf8');
}

/* ── text ────────────────────────────────────────────────────────────── */
const STOP = new Set(('a an the and or of in on at to for is are was were be been being with by from as it its this ' +
  'that these those what which how why when where who do does did done can could should would will shall may might ' +
  'must have has had not no nor but if then than so such also into over under about between during before after ' +
  'above below out up down off again further once here there all any both each few more most other some only own ' +
  'same too very you your we our they them he she his her i me my one two three tell explain describe give state ' +
  'name list define question answer ship vessel board onboard').split(/\s+/));

function stem(w) {
  w = w.replace(/[^a-z0-9]/g, '');
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.length > 4 && w.endsWith('sses')) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
  if (w.length > 5 && w.endsWith('ed')) return w.slice(0, -2);
  return w;
}
const terms = s => (s || '').toLowerCase().replace(/&[a-z]+;/g, ' ')
  .split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOP.has(w)).map(stem).filter(Boolean);

const strip = h => h.replace(/<!--[\s\S]*?-->/g, ' ').replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();

/* ── corpus: overlapping windows over each topic's prose ─────────────── */
const WIN = 120, STEP = 60;
const windows = [];
for (let i = 1; i <= 23; i++) {
  const id = 'T' + String(i).padStart(2, '0');
  const html = read('data/Orals/notes/t' + String(i).padStart(2, '0') + '_notes.js');
  // Keep the nearest heading with each window, so a hit can be named.
  const parts = html.split(/(?=<div class="n-h[12]")/);
  let head = '(top)';
  for (const p of parts) {
    const h = p.match(/<div class="n-h[12]"[^>]*>([^<]{0,60})/);
    if (h) head = h[1].trim().replace(/&amp;/g, '&');
    const w = strip(p).split(' ');
    for (let s = 0; s < Math.max(1, w.length - 1); s += STEP) {
      const slice = w.slice(s, s + WIN);
      if (slice.length < 25) break;
      windows.push({ topic: id, head, t: new Set(terms(slice.join(' '))) });
      if (s + WIN >= w.length) break;
    }
  }
}
if (windows.length < 200) {
  console.error('ERROR: only ' + windows.length + ' windows built. Corpus looks wrong; refusing to report.');
  process.exit(2);
}

/* ── the bank ────────────────────────────────────────────────────────── */
const bank = [];
{
  const g = {};
  new Function('window', read('data/Orals/SurveyorQA/sq_data.js'))(g);
  const qs = (g.SQ_DATA && g.SQ_DATA.questions) || [];
  if (!qs.length) { console.error('ERROR: SQ_DATA.questions empty.'); process.exit(2); }
  for (const q of qs) if (q.question) bank.push({ q: q.question, topic: q.topic, t: new Set(terms(q.question)) });
}

/* idf over windows */
const df = new Map();
for (const w of windows) for (const t of w.t) df.set(t, (df.get(t) || 0) + 1);
const N = windows.length;
const idf = t => Math.log((N + 1) / ((df.get(t) || 0) + 1)) + 1;

function coverage(qt) {
  let best = 0, at = null;
  const total = qt.reduce((a, t) => a + idf(t), 0) || 1;
  for (const w of windows) {
    let hit = 0;
    for (const t of qt) if (w.t.has(t)) hit += idf(t);
    const sc = hit / total;
    if (sc > best) { best = sc; at = w; }
  }
  return { score: best, at };
}

function inBank(qt) {
  const A = new Set(qt);
  let best = 0, bq = '', bt = '';
  for (const b of bank) {
    let inter = 0;
    for (const t of A) if (b.t.has(t)) inter++;
    if (!inter) continue;
    const j = inter / (A.size + b.t.size - inter);
    const c = inter / Math.min(A.size, b.t.size);
    const sc = Math.max(j, c * 0.9);
    if (sc > best) { best = sc; bq = b.q; bt = b.topic; }
  }
  return { score: best, q: bq, topic: bt };
}

/* ── run ─────────────────────────────────────────────────────────────── */
const file = process.argv[2];
if (!file) { console.error('usage: node _intake.cjs questions.json [--new-only]'); process.exit(2); }
const newOnly = process.argv.includes('--new-only');
const rows = JSON.parse(fs.readFileSync(file, 'utf8'));

const BANK_HIT = 0.55, BANK_MAYBE = 0.40, NOTE_OK = 0.55, NOTE_THIN = 0.38;
const out = [];
for (const r of rows) {
  const qt = terms(r.question_text);
  if (!qt.length) continue;
  const cov = coverage(qt), bk = inBank(qt);
  out.push({ q: r.question_text, topic: r.topic || '--', date: r.asked_on,
             bank: bk.score, bankQ: bk.q, cov: cov.score,
             covAt: cov.at ? cov.at.topic + ' ' + cov.at.head : '-' });
}

const missingBank = out.filter(o => o.bank < BANK_MAYBE);
const weakBank    = out.filter(o => o.bank >= BANK_MAYBE && o.bank < BANK_HIT);
const thinNotes   = out.filter(o => o.cov < NOTE_THIN);

console.log('INTAKE CHECK  ' + rows.length + ' questions   bank ' + bank.length
          + '   note windows ' + N + '\n');
console.log('  in the bank        : ' + out.filter(o => o.bank >= BANK_HIT).length);
console.log('  probably in bank   : ' + weakBank.length);
console.log('  NOT IN THE BANK    : ' + missingBank.length);
console.log('  notes look thin    : ' + thinNotes.length + '\n');

console.log('── NOT IN THE BANK. These need a Q&A entry ' + '─'.repeat(28));
for (const o of missingBank.sort((a, b) => a.bank - b.bank)) {
  console.log('  [' + o.topic + '] ' + o.q.slice(0, 78));
  console.log('        notes ' + o.cov.toFixed(2) + ' at ' + o.covAt.slice(0, 58));
}
if (!newOnly) {
  console.log('\n── NOTES LOOK THIN. Read these before believing them ' + '─'.repeat(18));
  for (const o of thinNotes.sort((a, b) => a.cov - b.cov)) {
    console.log('  ' + o.cov.toFixed(2) + ' [' + o.topic + '] ' + o.q.slice(0, 72));
    console.log('        best window: ' + o.covAt.slice(0, 66));
  }
}
/* --all prints every question with both scores.
 *
 * The buckets alone hide the questions most worth a human eye: the ones that
 * scored just over a threshold. "probably in bank" was counted and never
 * listed, so five questions could sit in it unread. Short questions are the
 * other reason: a two-word recollection scores high against almost anything,
 * so a high number there means nothing and you have to look at the text. */
if (process.argv.includes('--all')) {
  console.log('\n── EVERY QUESTION, both scores ' + '─'.repeat(40));
  console.log('  bank  notes  question');
  for (const o of out.slice().sort((a, b) => a.bank - b.bank)) {
    const flag = o.bank >= BANK_HIT ? '   ' : (o.bank >= BANK_MAYBE ? ' ? ' : ' ! ');
    console.log(flag + o.bank.toFixed(2) + '  ' + o.cov.toFixed(2) + '   ' + o.q.slice(0, 66));
    if (o.bankQ) console.log('              closest in bank: ' + o.bankQ.slice(0, 62));
  }
  console.log('\n  ! not in the bank   ? probably in it   blank means in it');
  console.log('  A short question scores high against anything. Read, do not trust.');
}

/* --emit writes the not-in-bank rows as bank-ready entries, deduplicated on
   the question text, so the same recollection posted twice from two candidates
   does not become two Q&A entries. Nothing is written into the bank here: the
   answers still want reading before they go in front of a paying cadet. */
const emitAt = process.argv.indexOf('--emit');
if (emitAt > -1 && process.argv[emitAt + 1]) {
  const src = new Map(rows.map(r => [r.question_text, r]));
  const seen = new Set();
  const entries = [];
  for (const o of missingBank) {
    const key = o.q.trim().toLowerCase().replace(/\s+/g, ' ');
    if (seen.has(key)) continue;
    seen.add(key);
    const r = src.get(o.q) || {};
    if (!r.answer_text) { console.error('  skipped, no answer: ' + o.q.slice(0, 60)); continue; }
    entries.push({ topic: r.topic || null, surveyor: r.surveyor || null,
                   question: r.question_text, answer: r.answer_text, asked_on: r.asked_on });
  }
  fs.writeFileSync(process.argv[emitAt + 1], JSON.stringify(entries, null, 1));
  console.log('\nemitted ' + entries.length + ' bank-ready entries (from '
            + missingBank.length + ' rows, duplicates folded) -> ' + process.argv[emitAt + 1]);
}

console.log('\nEvery line above is a shortlist, not a verdict. This file has been');
console.log('wrong twice by trusting its own score; read the topic before acting.');

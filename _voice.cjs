/* Flags the cadences that make prose read as machine-generated.

   The content is sold to cadets paying for expertise, and writing that reads as
   generated undercuts material that is otherwise correct. This lists the tells
   per file so a rewrite pass can be targeted rather than guessed at.

   It reports, it does not judge: some hits are legitimate. A file with four
   "which is exactly why" in it is the problem, not a single one.

     CONTENT_KEY_SPONSORSHIP=... node _voice.cjs            all content
     CONTENT_KEY_SPONSORSHIP=... node _voice.cjs interview  one directory
*/
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const KEY_HEX = process.env.CONTENT_KEY_SPONSORSHIP;
if (!KEY_HEX || KEY_HEX.length !== 64) { console.error('Set CONTENT_KEY_SPONSORSHIP.'); process.exit(1); }
const KEY = Buffer.from(KEY_HEX, 'hex');
const decrypt = json => {
  const { iv, data, tag } = JSON.parse(json);
  const d = crypto.createDecipheriv('aes-256-gcm', KEY, Buffer.from(iv, 'base64'));
  d.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([d.update(Buffer.from(data, 'base64')), d.final()]).toString('utf8');
};

const TELLS = [
  ['antithesis',      /\b(?:is|are|was|were)\s+not\s+[^.,;]{3,40},\s*(?:it|they)\s+(?:is|are)\b/gi],
  ['not-X-but-Y',     /\bnot\s+[a-z][^.,;]{2,30},?\s+but\s+(?:rather\s+)?[a-z]/gi],
  ['summary clause',  /\bwhich is (?:exactly )?(?:why|what|the)\b|\bthat is the (?:whole|entire|point)\b|\bwhich is the (?:whole|entire|point)\b/gi],
  ['"worth" hedge',   /\bworth (?:having|doing|knowing|the time|it|remembering|noting|asking|owning|a)\b/gi],
  ['announced list',  /\b(?:Two|Three|Four) (?:things|conclusions|points|reasons)\s+(?:follow|fall out|matter)\b/gi],
  ['stock opener',    /(?:^|[.!?]\s+|>)(?:Indeed|Moreover|Furthermore|Crucially|Notably|Importantly),/g],
  ['stock vocab',     /\b(?:delve|leverag(?:e|ing)|robust|crucial|landscape|realm|testament|underscore[sd]?)\b/gi],
  ['em dash',         /—/g],
];

const only = process.argv[2];
const DIRS = ['overview', 'fundamentals', 'aptitude', 'datainterp', 'interview', 'CompanyQA']
  .filter(d => !only || d === only);

let rows = [];
for (const d of DIRS) {
  const full = path.join(__dirname, 'data/Sponsorship', d);
  if (!fs.existsSync(full)) continue;
  for (const f of fs.readdirSync(full).filter(x => x.endsWith('.js'))) {
    const rel = 'data/Sponsorship/' + d + '/' + f;
    const raw = fs.readFileSync(path.join(__dirname, rel), 'utf8').trim();
    let src;
    try { src = /^\{"v":1,/.test(raw) ? decrypt(raw) : raw; } catch (e) { continue; }
    // Strip tags so markup does not count as prose.
    const text = src.replace(/<[^>]+>/g, ' ');
    const words = (text.match(/\b[a-z]{2,}\b/gi) || []).length;
    if (words < 200) continue;                       // stubs and quiz-only files
    const hits = TELLS.map(([name, re]) => [name, (text.match(re) || []).length]).filter(h => h[1] > 0);
    const total = hits.reduce((t, h) => t + h[1], 0);
    if (total) rows.push({ rel, words, total, per1k: (total / words) * 1000, hits });
  }
}

rows.sort((a, b) => b.per1k - a.per1k);
console.log('\nfile'.padEnd(50) + 'words   tells  per 1k words');
console.log('-'.repeat(86));
for (const r of rows) {
  console.log(r.rel.replace('data/Sponsorship/', '').padEnd(50) +
    String(r.words).padStart(5) + String(r.total).padStart(7) + r.per1k.toFixed(1).padStart(9) +
    '   ' + r.hits.map(h => h[0] + ' ' + h[1]).join(', '));
}
const tot = rows.reduce((t, r) => t + r.total, 0);
const wtot = rows.reduce((t, r) => t + r.words, 0);
console.log('-'.repeat(86));
console.log(rows.length + ' file(s) with tells, ' + tot + ' total, ' +
  ((tot / wtot) * 1000).toFixed(1) + ' per 1000 words overall');
console.log('\nHigh per-1k is the signal. A long file with a few hits is fine;');
console.log('a short one that is dense with them is where the voice slips.');

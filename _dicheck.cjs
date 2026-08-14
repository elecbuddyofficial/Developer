/* Checks for the Data Interpretation charts.

   These exist because the same class of bug bit four times while DI02 was
   built: an SVG's geometry is fixed when it is generated, while the CSS
   resizes its text at run time on a phone. Everything looked correct on a
   desktop and broke at 360px, and each time it was found by eye rather than by
   a test. Run this after touching _digen.cjs or the .di-* CSS.

     node _dicheck.cjs
*/
const fs = require('fs');
const { JSDOM } = require('jsdom');
const C = require('./_digen.cjs');

let fail = 0;
const ok = (c, l, d) => { console.log('  ' + (c ? 'ok  ' : 'FAIL') + ' ' + l + (d ? '  ' + d : '')); if (!c) fail++; };

/* The values each chart is supposed to encode. A chart that merely parses can
   still be a lie, so the bar heights are read back and compared. */
const EXPECT = {
  c1: [80,105,75,65,95,110,85,95,75,95,70,80],
  c2: [2640,3720,2520,3360,3120,4320,5040,3120],
  c3: [30,25,35,45,35,40,25,35,45,50,40,35,40,50,35],
  c4: [200,120,300,225,500,375,400,330,600,525,460,420],
  c5: [25,40,60,45,65,50,75,80],
  c7: [20.15,48.17,5.93,37.76,14.97,29.14,7.88,12.21,5.01,10.19],
  c8: [50,55,45,40,60,50,55,50,60,45,55,60,60,50,45,50,55,40],
  c9: [30,40,15,20,20,15,10,10,15,10,10,5],
  c10:[35,45,50,40,40,45,40,30,50,45],
};

const SCREEN = 360, avail = SCREEN - 32 - 12;   // page padding + .di-figure padding
const AX_CSS = 19;                              // .di-ax inside @media (max-width:520px)
const textW = (s, px) => [...String(s)].reduce((w, c) => w + px * ('.,:-'.includes(c) ? 0.32 : 0.58), 0);
const doc = svg => new JSDOM(svg, { contentType: 'image/svg+xml' }).window.document;

console.log('\n── geometry: does each bar encode its value? ──');
const PT = 26, ph = 306 - 26 - 58;
for (const [k, want] of Object.entries(EXPECT)) {
  const d = doc(C[k]);
  const top = Math.max(...[...d.querySelectorAll('text.di-ax-y')].map(t => parseFloat(t.textContent)));
  const bars = [...d.querySelectorAll('rect')]
    .filter(r => parseFloat(r.getAttribute('height')) > 0 && parseFloat(r.getAttribute('y')) < PT + ph - 0.5);
  if (bars.length !== want.length) { ok(false, k, `${bars.length} bars, expected ${want.length}`); continue; }
  const worst = Math.max(...want.map((w, i) =>
    Math.abs((parseFloat(bars[i].getAttribute('height')) / ph) * top - w) / top));
  ok(worst < 0.001, k, `${want.length} bars, max error ${(worst * 100).toFixed(3)}% of axis`);
}

console.log('\n── markup: valid SVG, no hardcoded colour ──');
for (const [k, svg] of Object.entries(C)) {
  ok(!doc(svg).querySelector('parsererror'), k + ' parses as XML');
  if (/#[0-9a-f]{3,6}|rgb\(/i.test(svg)) ok(false, k + ' carries a literal colour, which breaks the four themes');
}

console.log(`\n── axis labels at ${SCREEN}px: do neighbours collide? ──`);
for (const [k, svg] of Object.entries(C)) {
  const d = doc(svg);
  const vb = d.documentElement.getAttribute('viewBox').split(' ').map(Number);
  const scale = avail / vb[2], px = AX_CSS * scale;
  // Legend text also carries .di-ax and would collapse the measured spacing;
  // it is the text with an inline style, so exclude it.
  const cats = [...d.querySelectorAll('text.di-ax:not(.di-ax-y):not([style])')];
  if (!cats.length) { ok(true, k + ': horizontal chart, labels sit clear'); continue; }
  const lineW = t => Math.max(...(t.querySelectorAll('tspan').length
    ? [...t.querySelectorAll('tspan')].map(s => textW(s.textContent, px))
    : [textW(t.textContent, px)]));
  const byX = cats.slice().sort((a, b) => +a.getAttribute('x') - +b.getAttribute('x'));
  let worst = 0;
  for (let i = 1; i < byX.length; i++) {
    const gap = (+byX[i].getAttribute('x') - +byX[i - 1].getAttribute('x')) * scale;
    if (gap < 1) continue;   // the two lines of one wrapped label share an x
    worst = Math.max(worst, (lineW(byX[i]) + lineW(byX[i - 1])) / 2 - gap);
  }
  ok(worst <= 0, k, worst > 0 ? `overlap ${worst.toFixed(1)}px` : `clear, type ${px.toFixed(1)}px`);
  if (px < 10.5) ok(false, k + ' axis type under 10.5px');
}

console.log(`\n── legends at ${SCREEN}px ──`);
for (const [k, svg] of Object.entries(C)) {
  const d = doc(svg);
  const vb = d.documentElement.getAttribute('viewBox').split(' ').map(Number);
  const scale = avail / vb[2], px = AX_CSS * scale;
  const items = [...d.querySelectorAll('text.di-ax[style]')];
  if (items.length < 2) { ok(true, k + ': no legend'); continue; }
  const sw = [...d.querySelectorAll('rect')].filter(r => +r.getAttribute('width') === 12);
  let worst = 0;
  for (let i = 1; i < items.length; i++) {
    const endPrev = (+items[i - 1].getAttribute('x')) * scale + textW(items[i - 1].textContent, px);
    const startNext = (+(sw[i] ? sw[i].getAttribute('x') : items[i].getAttribute('x'))) * scale;
    worst = Math.max(worst, endPrev - startNext);
  }
  ok(worst <= 0, k, worst > 0 ? `legend overlap ${worst.toFixed(1)}px` : 'clear');
}

/* The generator is only worth committing if it still reproduces what shipped.
   Readable only while the content is decrypted, so report the count: a check
   that silently verifies nothing is the failure mode all of these exist for. */
console.log('\n── does the generator still match the shipped content? ──');
let checked = 0;
const seen = new Set();
for (const f of ['data/Sponsorship/datainterp/di02_notes.js', 'data/Sponsorship/datainterp/di02_quiz.js']) {
  if (!fs.existsSync(f)) continue;
  const body = fs.readFileSync(f, 'utf8');
  if (/^\s*\{"v":1,/.test(body)) { console.log('  (encrypted, skipped) ' + f); continue; }
  checked++;
  // The notes inline the SVG into a template literal; the quiz carries it
  // through JSON.stringify, so it is present in escaped form. Accept either.
  const hits = Object.entries(C).filter(([k, svg]) => {
    const hit = body.includes(svg) || body.includes(JSON.stringify(svg).slice(1, -1));
    if (hit) seen.add(k);
    return hit;
  }).length;
  console.log(`  ${f}: ${hits} chart(s) match the generator byte for byte`);
}
if (!checked) {
  console.log('  both files encrypted: decrypt them to verify the generator still matches');
} else {
  // The notes deliberately use a subset, so the requirement is that every
  // chart appears in at least one of the two files, not in both.
  const absent = Object.keys(C).filter(k => !seen.has(k));
  ok(absent.length === 0, `all 10 charts appear in the shipped content (${checked} file(s) readable)`,
     absent.length ? 'missing: ' + absent.join(', ') : '');
}

console.log(fail ? `\n${fail} problem(s)` : '\nall chart checks pass');
process.exitCode = fail ? 1 : 0;

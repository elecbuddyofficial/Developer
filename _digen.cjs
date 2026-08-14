/* Bar chart SVG generator for DI02.
   Every dataset below was reconstructed from indiabix worked solutions and
   then checked against all five stated answers for its set. Only 044001 had a
   mismatch, and that is a fault in the source's question wording, not the data
   (its own solution computes raw-over-sales while the question says the
   reverse). Values here are the ones the solutions actually use. */
const fs = require('fs');

const W = 480, H = 306, PL = 46, PR = 12, PT = 26, PB = 58;
const pw = W - PL - PR, ph = H - PT - PB;

/* Pick a round axis maximum and a gridline step that lands on clean numbers,
   because the reader is meant to be able to read a bar against the grid. */
function axis(max) {
  const targets = [1, 2, 2.5, 5, 10];
  const mag = Math.pow(10, Math.floor(Math.log10(max / 4)));
  let step = targets.map(t => t * mag).find(s => max / s <= 6) || 10 * mag;
  return { top: Math.ceil(max / step) * step, step };
}
const fmt = n => (Number.isInteger(n) ? String(n) : n.toFixed(2));
/* Labels reach <text> nodes, so an unescaped & (as in "R & D") is invalid
   markup. innerHTML would probably have tolerated it, which is exactly why it
   needed catching here rather than by eye. */
const esc = t => String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function vbar({ groups, series, max, decimals, step }) {
  const a = axis(max), n = groups.length, m = series.length;
  if (step) { a.step = step; a.top = Math.ceil(max / step) * step; }
  const dense = n * m > 12;
  const slot = pw / n, gap = slot * 0.16, bw = (slot - gap * 2) / m;
  // Do the per-bar labels survive a 360px screen? Measure the tightest
  // ADJACENT pair rather than assuming a worst case: c1's pairs are "80"/"105"
  // and fit, while c7's "48.17"/"10.19" cannot at any readable size.
  const scale360 = (360 - 32 - 12) / W, valPx = 13 * scale360;
  const wOf = t => [...String(t)].reduce((w, ch) => w + valPx * ('.,'.includes(ch) ? 0.32 : 0.58), 0);
  let tight = false;
  for (let i = 0; i < n && !tight; i++)
    for (let j = 1; j < m; j++) {
      const a = decimals ? series[j-1].data[i].toFixed(2) : series[j-1].data[i];
      const b = decimals ? series[j].data[i].toFixed(2) : series[j].data[i];
      if ((wOf(a) + wOf(b)) / 2 > bw * scale360) tight = true;
    }
  let s = `<svg viewBox="0 0 ${W} ${H}" class="di-chart${tight ? ' di-tight' : ''}" role="img">`;
  for (let v = 0; v <= a.top + 1e-9; v += a.step) {
    const y = (PT + ph - (v / a.top) * ph).toFixed(1);
    s += `<line x1="${PL}" y1="${y}" x2="${W - PR}" y2="${y}" class="di-grid"/>`;
    s += `<text x="${PL - 7}" y="${(+y + 5).toFixed(1)}" class="di-ax di-ax-y">${fmt(v)}</text>`;
  }
  groups.forEach((g, i) => {
    const x0 = PL + i * slot + gap;
    series.forEach((ser, j) => {
      const v = ser.data[i], h = (v / a.top) * ph;
      const x = x0 + j * bw;
      s += `<rect x="${x.toFixed(1)}" y="${(PT + ph - h).toFixed(1)}" width="${(bw - 1.5).toFixed(1)}" height="${h.toFixed(1)}" class="di-bar-${'abc'[j]}"/>`;
      if (!dense) s += `<text x="${(x + bw / 2 - 0.75).toFixed(1)}" y="${(PT + ph - h - 5).toFixed(1)}" class="di-val">${decimals ? v.toFixed(2) : v}</text>`;
    });
    // Long two-word categories wrap onto a second line. "Nail enamels" is
    // about 87px of text in a 55px slot, which overlaps its neighbours at any
    // screen size, not just on a phone.
    const cx = (PL + i * slot + slot / 2).toFixed(1);
    const gs = String(g);
    // Split on a space when there is one. A long single word ("Conditioners")
    // has none, so it is hyphenated near the middle rather than left to run
    // into its neighbours.
    const parts = gs.length > 8 && gs.includes(' ') ? gs.split(' ')
      : gs.length > 9 ? [gs.slice(0, Math.ceil(gs.length / 2)) + '-', gs.slice(Math.ceil(gs.length / 2))]
      : [gs];
    s += `<text x="${cx}" y="${PT + ph + 19}" class="di-ax">` +
         parts.map((t, li) => `<tspan x="${cx}" dy="${li ? 17 : 0}">${esc(t)}</tspan>`).join('') +
         `</text>`;
  });
  s += `<line x1="${PL}" y1="${PT + ph}" x2="${W - PR}" y2="${PT + ph}" class="di-axis"/>`;
  // Legend, only when there is more than one series to tell apart.
  if (m > 1) {
    // 11 units per character, not 8. The legend text is .di-ax, which the
    // mobile media query raises to 19px, so a character needs about 11 units:
    // at 8 the label ran straight into the next swatch on a phone.
    const lw = series.map(x => x.name.length * 11 + 34);
    let lx = (W - lw.reduce((p, c) => p + c, 0)) / 2;
    series.forEach((ser, j) => {
      s += `<rect x="${lx.toFixed(1)}" y="${H - 20}" width="12" height="12" class="di-bar-${'abc'[j]}"/>`;
      s += `<text x="${(lx + 17).toFixed(1)}" y="${H - 10}" class="di-ax" style="text-anchor:start">${esc(ser.name)}</text>`;
      lx += lw[j];
    });
  }
  return s + `</svg>`;
}

function hbar({ groups, data, max, unit }) {
  const a = axis(max), n = groups.length;
  const L = 118, HH = 40 + n * 30, PHt = HH - 46;
  const pwh = W - L - 46, slot = PHt / n;
  let s = `<svg viewBox="0 0 ${W} ${HH}" class="di-chart" role="img">`;
  for (let v = 0; v <= a.top + 1e-9; v += a.step) {
    const x = (L + (v / a.top) * pwh).toFixed(1);
    s += `<line x1="${x}" y1="20" x2="${x}" y2="${20 + PHt}" class="di-grid"/>`;
    s += `<text x="${x}" y="${20 + PHt + 19}" class="di-ax">${fmt(v)}${unit || ''}</text>`;
  }
  groups.forEach((g, i) => {
    const y = 20 + i * slot + slot * 0.18, bh = slot * 0.64;
    const w = (data[i] / a.top) * pwh;
    s += `<rect x="${L}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${bh.toFixed(1)}" class="di-bar-a"/>`;
    s += `<text x="${L - 8}" y="${(y + bh / 2 + 5).toFixed(1)}" class="di-ax di-ax-y">${esc(g)}</text>`;
    s += `<text x="${(L + w + 6).toFixed(1)}" y="${(y + bh / 2 + 5).toFixed(1)}" class="di-val" style="text-anchor:start">${data[i]}${unit || ''}</text>`;
  });
  s += `<line x1="${L}" y1="${20 + PHt}" x2="${W - 46}" y2="${20 + PHt}" class="di-axis"/>`;
  return s + `</svg>`;
}

const C = {};
C.c1 = vbar({ groups: ['B1','B2','B3','B4','B5','B6'], max: 110, series: [
  { name: '2000', data: [80,75,95,85,75,70] }, { name: '2001', data: [105,65,110,95,95,80] }] });
C.c2 = vbar({ groups: ['91-92','92-93','93-94','94-95','95-96','96-97','97-98','98-99'], max: 5040,
  series: [{ name: 'Reserves', data: [2640,3720,2520,3360,3120,4320,5040,3120] }] });
C.c3 = vbar({ groups: ['1996','1997','1998','1999','2000'], max: 50, step: 5, series: [
  { name: 'X', data: [30,45,25,50,40] }, { name: 'Y', data: [25,35,35,40,50] }, { name: 'Z', data: [35,40,45,35,35] }] });
C.c4 = vbar({ groups: ['1995','1996','1997','1998','1999','2000'], max: 600, series: [
  { name: 'Raw materials', data: [200,300,500,400,600,460] }, { name: 'Sales', data: [120,225,375,330,525,420] }] });
C.c5 = vbar({ groups: ['1995','1996','1997','1998','1999','2000','2001','2002'], max: 80,
  series: [{ name: 'Production', data: [25,40,60,45,65,50,75,80] }] });
C.c6 = hbar({ groups: ['R & D','Advertisement','Infrastructure','Transport','Taxes','Interest on loans'],
  data: [5,15,20,12.5,10,17.5], max: 20, unit: '%' });
/* Singular axis labels: the plural forms overlap their neighbours at phone
   width, and the questions and caption carry the full names anyway. */
C.c7 = vbar({ groups: ['Lipstick','Nail enamel','Talcum','Shampoo','Conditioner'], max: 48.17, decimals: true,
  series: [{ name: '1995', data: [20.15,5.93,14.97,7.88,5.01] }, { name: '2000', data: [48.17,37.76,29.14,12.21,10.19] }] });
C.c8 = vbar({ groups: ['1995','1996','1997','1998','1999','2000'], max: 60, step: 5, series: [
  { name: 'X', data: [50,40,55,45,60,50] }, { name: 'Y', data: [55,60,50,55,50,55] }, { name: 'Z', data: [45,50,60,60,45,40] }] });
C.c9 = vbar({ groups: ['P','Q','R','S','T','U'], max: 40, series: [
  { name: '2000', data: [30,15,20,10,15,10] }, { name: '2001', data: [40,20,15,10,10,5] }] });
C.c10 = vbar({ groups: ['M','N','P','Q','R'], max: 50, series: [
  { name: 'Income', data: [35,50,40,40,50] }, { name: 'Expenditure', data: [45,40,45,30,45] }] });

fs.writeFileSync(__dirname + '/_dicharts.json', JSON.stringify(C));
module.exports = C;

if (require.main === module) {
  let tot = 0;
  for (const k of Object.keys(C)) { tot += C[k].length; console.log(k.padEnd(5), String(C[k].length).padStart(5), 'bytes'); }
  console.log('\ntotal', (tot / 1024).toFixed(1), 'KB raw,', (require('zlib').gzipSync(Object.values(C).join('')).length / 1024).toFixed(1), 'KB gzipped');
  // Guard: nothing may carry a literal colour, or the four-theme rule is broken.
  const bad = Object.entries(C).filter(([, v]) => /#[0-9a-f]{3,6}|rgb\(/i.test(v));
  console.log('hardcoded colours:', bad.length ? bad.map(x => x[0]).join(',') : 'none');
}

/* Chart SVG generator: DI02 bars, DI03 pies, DI04 line graphs.
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
/* ── Pie charts, DI03 ──────────────────────────────────────────────────────
   Same discipline as the bars: every dataset below was reconstructed from the
   worked solutions and checked against each stated answer. Where a value is
   genuinely unrecoverable it is combined and labelled as such rather than
   invented, which matters on the NHAI chart: its SPVS and Annuity figures
   appear nowhere in the text, only their sum can be derived, and no question
   needs the split.

   The legend sits below the circle rather than labelling slices in place.
   Seven labels around a circle collide at any size, and on a phone the pie
   itself is only ~300px across. */
function pie({ slices, unit, r = 86 }) {
  const total = slices.reduce((t, s) => t + s.v, 0);
  // One column when any entry is long. Two columns give each label about
  // 145px on a phone, and "External Assistance 11486" needs roughly 181px,
  // which would run into the next column.
  const longest = Math.max(...slices.map(x => (x.n + ' ' + (x.t || x.v + (unit || ''))).length));
  const cols = longest > 14 ? 1 : 2, rows = Math.ceil(slices.length / cols);
  const cy = 24 + r, H2 = cy + r + 26 + rows * 26;
  const cx = W / 2;
  const pt = (a, rad) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
  let s = `<svg viewBox="0 0 ${W} ${H2}" class="di-chart di-pie" role="img">`;
  let a0 = -Math.PI / 2;
  slices.forEach((sl, i) => {
    const frac = sl.v / total, a1 = a0 + frac * Math.PI * 2;
    const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r);
    const large = a1 - a0 > Math.PI ? 1 : 0;
    // A single slice covering the whole circle cannot be drawn as one arc.
    s += `<path d="M ${cx} ${cy} L ${x0.toFixed(1)} ${y0.toFixed(1)} ` +
         `A ${r} ${r} 0 ${large} 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" class="di-sl di-s${i % 6}"` +
         `${i >= 6 ? ' opacity="0.55"' : ''}/>`;
    // Share written inside the slice, but only when the wedge is wide enough
    // to hold it. Narrow wedges rely on the legend.
    // Does the label actually FIT the wedge? A flat percentage cutoff let an
    // 8.5% slice keep its label, which then spilled onto its neighbour and past
    // the rim. At the label radius the room available is the chord
    // 2 x 0.62r x sin(theta/2), so measure the text against that. Anything that
    // does not fit is read from the legend, which carries every value anyway.
    const txt = sl.t || Math.round(frac * 1000) / 10 + '%';
    const room = 2 * r * 0.62 * Math.sin((a1 - a0) / 2);
    // Glyph widths matter here: .di-pv is BOLD, and '%' is one of the widest
    // characters in the set at roughly 0.85em. Costing it at 0.4em made an
    // 8.5% label measure 27.4px against 28.2px of room, so it passed by a hair
    // and still overflowed on screen. The 0.9 factor keeps a little air either
    // side rather than letting text touch the slice edges.
    const em = ch => ch === '%' ? 0.85 : ch === '.' ? 0.3 : ch === '°' ? 0.5 : 0.6;
    const need = [...String(txt)].reduce((w, ch) => w + 14 * em(ch), 0);
    if (need <= room * 0.9) {
      const [lx, ly] = pt((a0 + a1) / 2, r * 0.62);
      s += `<text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" class="di-pv">${sl.t || Math.round(frac * 1000) / 10 + '%'}</text>`;
    }
    a0 = a1;
  });
  // Legend: two columns under the circle.
  const colW = (W - 40) / cols;
  slices.forEach((sl, i) => {
    const c = i % cols, rw = Math.floor(i / cols);
    const lx = 20 + c * colW, ly = cy + r + 24 + rw * 26;
    s += `<rect x="${lx}" y="${ly - 11}" width="13" height="13" class="di-sl di-s${i % 6}"${i >= 6 ? ' opacity="0.55"' : ''}/>`;
    s += `<text x="${lx + 19}" y="${ly}" class="di-ax" style="text-anchor:start">${esc(sl.n)}` +
         `<tspan class="di-lv"> ${esc(sl.t || sl.v + (unit || ''))}</tspan></text>`;
  });
  return s + `</svg>`;
}

/* NHAI Phase II funds, in crores of rupees. An absolute-value pie: the slices
   are amounts, not shares, so a percentage has to be worked out rather than
   read off. SPVS and Annuity are shown combined because only their sum, 11252,
   is recoverable from the source; no question turns on the split. */
C.p1 = pie({ unit: '', slices: [
  { n: 'Market Borrowing', v: 29952 }, { n: 'External Assistance', v: 11486 },
  { n: 'SPVS and Annuity', v: 11252 }, { n: 'Toll', v: 4910 },
]});

/* Spending on sports, given in DEGREES rather than percentages: the format
   that catches people out, since a slice must be divided by 360 and not by
   100. The six named sports come to 329 degrees, so the balance of 31 is the
   remaining slice; that it closes the circle is what fixes its value. */
C.p2 = pie({ slices: [
  { n: 'Cricket', v: 81, t: '81°' }, { n: 'Hockey', v: 63, t: '63°' },
  { n: 'Football', v: 54, t: '54°' }, { n: 'Basketball', v: 50, t: '50°' },
  { n: 'Tennis', v: 45, t: '45°' }, { n: 'Golf', v: 36, t: '36°' },
  { n: 'Other sports', v: 31, t: '31°' },
]});

/* Graduate students across seven institutes, 27,300 in total, and
   post-graduates across the same seven, 24,700 in total.

   Only four shares per chart are recoverable from the worked solutions. The
   rest are grouped rather than split, because inventing a plausible division
   that happens to reach 100% would be fabricating data to make a total work.
   Every question in the set uses only the four named shares.

   Two charts with DIFFERENT totals is the point of this pair: a share cannot
   be compared across them without converting to numbers first. */
C.p3 = pie({ unit: '%', slices: [
  { n: 'M', v: 17, t: '17%' }, { n: 'R', v: 17, t: '17%' }, { n: 'S', v: 14, t: '14%' },
  { n: 'Q', v: 13, t: '13%' }, { n: 'N, P and T', v: 39, t: '39%' },
]});
C.p4 = pie({ unit: '%', slices: [
  { n: 'S', v: 21, t: '21%' }, { n: 'N', v: 15, t: '15%' }, { n: 'R', v: 14, t: '14%' },
  { n: 'P', v: 12, t: '12%' }, { n: 'M, Q and T', v: 38, t: '38%' },
]});

/* MBA entrance: candidates enrolled (8550) and candidates passed (5700). */
C.p5 = pie({ unit: '%', slices: [
  { n: 'P', v: 22, t: '22%' }, { n: 'Q', v: 15, t: '15%' }, { n: 'R', v: 10, t: '10%' },
  { n: 'S', v: 17, t: '17%' }, { n: 'T', v: 8, t: '8%' }, { n: 'V', v: 12, t: '12%' },
  { n: 'X', v: 16, t: '16%' },
]});
C.p6 = pie({ unit: '%', slices: [
  { n: 'P', v: 18, t: '18%' }, { n: 'Q', v: 17, t: '17%' }, { n: 'R', v: 13, t: '13%' },
  { n: 'S', v: 16, t: '16%' }, { n: 'T', v: 9, t: '9%' }, { n: 'V', v: 15, t: '15%' },
  { n: 'X', v: 12, t: '12%' },
]});

/* Composition of the human body, and how its protein is distributed. The
   second chart is a breakdown OF one slice of the first, which is where the
   two-step questions come from. */
C.p7 = pie({ unit: '%', slices: [
  { n: 'Water', v: 70, t: '70%' }, { n: 'Proteins', v: 16, t: '16%' },
  { n: 'Other dry elements', v: 14, t: '14%' },
]});
C.p8 = pie({ slices: [
  { n: 'Muscles', v: 10, t: '1/3' }, { n: 'Other parts', v: 12, t: '2/5' },
  { n: 'Bones', v: 5, t: '1/6' }, { n: 'Skin', v: 3, t: '1/10' },
]});

/* Subscriptions to India Bonds. */
C.p9 = pie({ unit: '%', slices: [
  { n: 'Corporate sector', v: 34, t: '34%' }, { n: 'FII', v: 33, t: '33%' },
  { n: 'Offshore funds', v: 22, t: '22%' }, { n: 'NRI', v: 11, t: '11%' },
]});

/* Two pies in one image, stacked with a caption on each. Quiz questions on a
   paired set need both charts on screen at once, and a question can carry only
   one svg. Each source pie is re-wrapped in a <g> and shifted down, which
   keeps a single coordinate system and avoids nested <svg> sizing rules. */
function stack(a, b, ta, tb) {
  const vb = x => x.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/).slice(1).map(Number);
  const body = x => x.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  const [wa, ha] = vb(a), [wb, hb] = vb(b);
  const CAP = 22, H2 = ha + hb + CAP * 2;
  const lab = (t, y) => `<text x="${Math.max(wa, wb) / 2}" y="${y}" class="di-ax di-ttl">${esc(t)}</text>`;
  return `<svg viewBox="0 0 ${Math.max(wa, wb)} ${H2}" class="di-chart di-pie di-stack" role="img">` +
    lab(ta, 15) + `<g transform="translate(0 ${CAP})">` + body(a) + `</g>` +
    lab(tb, ha + CAP + 15) + `<g transform="translate(0 ${ha + CAP * 2})">` + body(b) + `</g>` +
    `</svg>`;
}

C.p34 = stack(C.p3, C.p4, 'Graduate level, 27,300 in total', 'Post-graduate level, 24,700 in total');
C.p56 = stack(C.p5, C.p6, 'Enrolled, 8,550 in total', 'Passed, 5,700 in total');
C.p78 = stack(C.p7, C.p8, 'Composition of the body', 'Where the protein sits');

/* ── Line graphs, DI04 ─────────────────────────────────────────────────────
   Points are marked as well as joined: a line alone forces the reader to
   estimate against the grid, and these values are exact. Reuses the bar
   chart's axis maths so the two modules cannot drift apart. */
function line({ groups, series, max, min = 0, step, unit }) {
  const a = axis(max);
  if (step) { a.step = step; a.top = Math.ceil(max / step) * step; }
  const n = groups.length, m = series.length;
  const slot = pw / (n - 1), y = v => PT + ph - ((v - min) / (a.top - min)) * ph;
  let s = `<svg viewBox="0 0 ${W} ${H}" class="di-chart di-line" role="img">`;
  for (let v = min; v <= a.top + 1e-9; v += a.step) {
    const yy = y(v).toFixed(1);
    s += `<line x1="${PL}" y1="${yy}" x2="${W - PR}" y2="${yy}" class="di-grid"/>`;
    s += `<text x="${PL - 7}" y="${(+yy + 5).toFixed(1)}" class="di-ax di-ax-y">${fmt(v)}${unit || ''}</text>`;
  }
  groups.forEach((g, i) =>
    s += `<text x="${(PL + i * slot).toFixed(1)}" y="${PT + ph + 19}" class="di-ax">${esc(g)}</text>`);
  series.forEach((ser, j) => {
    const pts = ser.data.map((v, i) => `${(PL + i * slot).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    s += `<polyline points="${pts}" class="di-ln di-l${j}"/>`;
    ser.data.forEach((v, i) =>
      s += `<circle cx="${(PL + i * slot).toFixed(1)}" cy="${y(v).toFixed(1)}" r="4" class="di-pt di-p${j}"/>`);
  });
  s += `<line x1="${PL}" y1="${PT + ph}" x2="${W - PR}" y2="${PT + ph}" class="di-axis"/>`;
  if (m > 1) {
    const lw = series.map(x => x.name.length * 11 + 34);
    let lx = (W - lw.reduce((p, c) => p + c, 0)) / 2;
    series.forEach((ser, j) => {
      s += `<line x1="${lx.toFixed(1)}" y1="${H - 14}" x2="${(lx + 16).toFixed(1)}" y2="${H - 14}" class="di-ln di-l${j}"/>`;
      s += `<circle cx="${(lx + 8).toFixed(1)}" cy="${H - 14}" r="4" class="di-pt di-p${j}"/>`;
      s += `<text x="${(lx + 22).toFixed(1)}" y="${H - 10}" class="di-ax" style="text-anchor:start">${esc(ser.name)}</text>`;
      lx += lw[j];
    });
  }
  return s + `</svg>`;
}

/* Exports from three companies, Rs. crore. Verified against all five stated
   answers: 1995 and 1996 both total 220, and Y/Z averages are 80 and 85.71,
   giving 93.33%. */
C.g1 = line({ groups: ['1993','1994','1995','1996','1997','1998','1999'], max: 140, step: 20, series: [
  { name: 'X', data: [30,60,40,70,100,50,120] },
  { name: 'Y', data: [80,40,60,60,80,100,140] },
  { name: 'Z', data: [60,90,120,90,60,80,100] },
]});

/* Vehicles manufactured by two companies, in thousands. Verified against all
   five: totals 716 and 742, a difference of 26 thousand, and X averages
   119.33 thousand. */
C.g2 = line({ groups: ['1997','1998','1999','2000','2001','2002'], max: 160, step: 20, series: [
  { name: 'X', data: [119,99,141,78,120,159] },
  { name: 'Y', data: [139,120,100,128,107,148] },
]});

/* Percent profit earned by a company. A single line whose y-axis is itself a
   percentage, which is the format that makes "cannot be determined" a correct
   answer: a profit percentage fixes the RATIO of income to expenditure and
   never their size. The six values are confirmed by the set's own average
   question, since they sum to 335 and 335/6 is the stated 55.83%. */
C.g3 = line({ groups: ['1995','1996','1997','1998','1999','2000'], max: 80, step: 10, unit: '%', series: [
  { name: 'Percent profit', data: [40,55,45,65,70,60] },
]});

module.exports = C;

if (require.main === module) {
  let tot = 0;
  for (const k of Object.keys(C)) { tot += C[k].length; console.log(k.padEnd(5), String(C[k].length).padStart(5), 'bytes'); }
  console.log('\ntotal', (tot / 1024).toFixed(1), 'KB raw,', (require('zlib').gzipSync(Object.values(C).join('')).length / 1024).toFixed(1), 'KB gzipped');
  // Guard: nothing may carry a literal colour, or the four-theme rule is broken.
  const bad = Object.entries(C).filter(([, v]) => /#[0-9a-f]{3,6}|rgb\(/i.test(v));
  console.log('hardcoded colours:', bad.length ? bad.map(x => x[0]).join(',') : 'none');
}

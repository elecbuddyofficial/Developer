/* The quiz chart field is opt-in, and the risk in an opt-in field is not that
   the new path fails loudly but that the old path quietly changes. Two things
   must hold: a question with no .svg must render exactly as before, and a chart
   must not survive into the next question that has none.

   This runs the real renderQ chart block, lifted from the page source rather
   than retyped, so the test cannot pass against code that is no longer there. */
const fs = require('fs');
const { JSDOM } = require('jsdom');
const src = fs.readFileSync('app/sponsorship/index.html', 'utf8');

let fail = 0;
const ok = (c, l, d) => { console.log('  ' + (c ? 'ok  ' : 'FAIL') + ' ' + l + (d ? '  ' + d : '')); if (!c) fail++; };

// Lift the block out of renderQ. If it has been renamed or removed, the match
// fails and the test fails, rather than silently verifying nothing.
const block = src.match(/var chartEl=document\.getElementById\('qchart'\);[\s\S]*?else \{ chartEl\.innerHTML=''; chartEl\.hidden=true; \}/);
ok(!!block, 'the chart block is present in renderQ');
if (!block) { process.exit(1); }

ok(/id="qchart"/.test(src), 'the #qchart container exists in the quiz markup');
// It must sit inside the question area, or it renders detached from the question.
ok(/quiz-q-area"><div class="qtext" id="qtext">[^<]*<\/div><div class="qchart" id="qchart" hidden>/.test(src),
   '#qchart sits inside .quiz-q-area, after the question text');

const dom = new JSDOM('<div id="qchart" hidden></div>');
const document = dom.window.document;
const run = new Function('document', 'q', block[0]);
const el = document.getElementById('qchart');

// 1. A question carrying a chart shows it.
run(document, { q: 'with chart', svg: '<svg viewBox="0 0 10 10"><rect/></svg>' });
ok(el.hidden === false, 'a question with a chart un-hides the container');
ok(/^<svg/.test(el.innerHTML), 'the chart markup is inserted');

// 2. The next question without one must clear it. This is the regression that
//    would otherwise leave the previous question's chart on screen.
run(document, { q: 'no chart' });
ok(el.hidden === true, 'a question with no chart re-hides the container');
ok(el.innerHTML === '', 'the previous chart is cleared, not left behind');

// 3. And a question with no chart must not disturb the question text path.
ok(!/textContent=q\.q;[\s\S]{0,40}innerHTML/.test(src),
   'question text is still set with textContent, not innerHTML');

console.log(fail ? '\n' + fail + ' problem(s)' : '\nchart field is opt-in and leaves the no-chart path unchanged');
process.exitCode = fail ? 1 : 0;

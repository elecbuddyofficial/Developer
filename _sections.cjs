/* Check the section restructure holds together: every section a card or
   sidebar item points at must exist, every topic file must exist on disk,
   and the back-navigation chain must not skip a level. */
const fs = require('fs');
const { JSDOM } = require('jsdom');
const src = fs.readFileSync('app/sponsorship/index.html', 'utf8');
const doc = new JSDOM(src).window.document;

let fail = 0;
const ok = (c, l, d) => { console.log('  ' + (c ? 'ok  ' : 'FAIL') + ' ' + l + (d ? '  ' + d : '')); if (!c) fail++; };

// Pull the real SECTIONS object out and evaluate it.
const m = src.match(/var SECTIONS = \{[\s\S]*?\n\};/);
const SECTIONS = new Function(m[0] + '; return SECTIONS;')();
const ids = Object.keys(SECTIONS);
console.log('  sections: ' + ids.join(', ') + '\n');

ok(ids.includes('datainterp'), 'Data Interpretation section exists');
ok(ids.includes('currentaffairs'), 'Current Affairs is its own section');
ok(!SECTIONS.aptitude.topics.some(t => t.id === 'CA'), 'CA no longer inside Aptitude');
ok(SECTIONS.currentaffairs.topics.some(t => t.id === 'CA'), 'CA now inside Current Affairs');
ok(SECTIONS.aptitude.topics.length === 33, 'Aptitude has 33 topics after the move',
   'has ' + SECTIONS.aptitude.topics.length);

// Every openSection target must be a real section.
// 'companyqa' is a deliberate special case: openSection routes it straight to
// showCompanyQA() at the top of the function, so it is not a SECTIONS entry.
const targets = [...new Set([...src.matchAll(/openSection\('([a-z]+)'\)/g)].map(x => x[1]))];
const bogus = targets.filter(t => !ids.includes(t) && t !== 'companyqa');
ok(bogus.length === 0, 'every openSection target is a real section', bogus.join(', '));

// Every section needs a sidebar button with its declared sbId.
const missingSb = ids.filter(id => !doc.getElementById(SECTIONS[id].sbId));
ok(missingSb.length === 0, 'every section has its sidebar button', missingSb.join(', '));

// Every topic file must actually exist.
let missingFiles = [];
for (const id of ids) {
  for (const t of SECTIONS[id].topics) {
    for (const f of [t.notesFile, t.quizFile]) {
      if (f && !fs.existsSync('data/Sponsorship/' + f)) missingFiles.push(f);
    }
  }
}
ok(missingFiles.length === 0, 'every topic file exists on disk', missingFiles.slice(0, 4).join(', '));

// Colours must be tokens, and each section's must differ so cards are scannable.
const colours = ids.map(id => SECTIONS[id].color);
ok(colours.every(c => /^var\(--/.test(c)), 'every section colour is a theme token');
ok(new Set(colours).size === colours.length, 'no two sections share a colour', colours.join(' '));

// Back navigation: a section must return to the hub, not skip to home.
const views = [...src.matchAll(/<div class="view[^"]*" id="(view-[a-z-]+)"/g)];
const backOf = name => {
  const i = views.findIndex(v => v[1] === name);
  const end = i + 1 < views.length ? views[i + 1].index : src.length;
  const body = src.slice(views[i].index, end);
  const b = body.match(/onclick="(showHome\(\)|showStudyHub\(\))"/);
  return b ? b[1] : null;
};
ok(backOf('view-section') === 'showStudyHub()', 'a section goes back to Study Materials, not Home');
ok(backOf('view-companyqa') === 'showStudyHub()', 'Company Q&A likewise');
ok(backOf('view-study-hub') === 'showHome()', 'Study Materials still goes back to Home');

// The registry key a quiz file passes to loadQuizzes() must equal the topic's
// `key`, because the app looks the questions up as window.QD[t.key]. A mismatch
// is silent: the file parses, the module opens, and the quiz is simply empty.
// Same for loadNotes() against the topic id. Only plaintext files can be read,
// so this reports the number actually checked — a check that silently verifies
// nothing is the failure mode it exists to catch.
let keyChecked = 0, keyBad = [];
for (const id of ids) {
  for (const t of SECTIONS[id].topics) {
    for (const [f, fn, want] of [[t.notesFile, 'loadNotes', t.id],
                                 [t.quizFile, 'loadQuizzes', t.key]]) {
      if (!f) continue;
      const p = 'data/Sponsorship/' + f;
      if (!fs.existsSync(p)) continue;
      const body = fs.readFileSync(p, 'utf8');
      if (/^\s*\{"v":1,/.test(body)) continue;           // encrypted, unreadable here
      const call = body.match(new RegExp(fn + '\\(\\s*"([^"]+)"'));
      if (!call) continue;
      keyChecked++;
      if (call[1] !== want) keyBad.push(f + ': ' + fn + ' says "' + call[1] + '", SECTIONS says "' + want + '"');
    }
  }
}
ok(keyBad.length === 0, 'loadNotes/loadQuizzes keys match SECTIONS  (' + keyChecked + ' plaintext file(s) checked)',
   keyBad.join(' | '));

// The new directory must be in the encryption group, or it stays plaintext silently.
const enc = fs.readFileSync('encrypt-content.js', 'utf8');
ok(/data\/Sponsorship\/datainterp/.test(enc), 'datainterp is in KEY_GROUPS.sponsorship.dirs');

console.log(fail ? '\n' + fail + ' problem(s)' : '\nsection restructure is consistent');
process.exitCode = fail ? 1 : 0;

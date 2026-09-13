/* Duplicate element ids, and ids the code looks for that are not there.

   These pages are very large single files - the admin console is past 12,000
   lines - and getElementById returns the FIRST match. So a duplicated id does
   not error: one of the two elements simply stops working, usually the one
   added later, and only in the state where both are present.

   The mirror of it is a getElementById for an id nothing renders, which
   returns null and throws on first use.
*/
import { readFileSync, existsSync } from 'node:fs';

const APP = 'D:/Notes 1/Original/ETO_Study_App/app/';
const PAGES = ['index.html', 'auth.html', 'terms.html', 'privacy.html',
               'sponsorship/index.html', 'admin/index.html'];

let problems = 0;
const head = (t) => { console.log(''); console.log('  ' + t); console.log('  ' + '-'.repeat(68)); };

/* Strip comments and string literals before hunting for ids, or every id
   MENTIONED in a comment counts as one the page renders. */
function stripNoise(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\/\*[\s\S]*?\*\//g, ' ');
}

head('duplicate ids (getElementById silently takes the first)');
let dupTotal = 0;
for (const page of PAGES) {
  const full = APP + page;
  if (!existsSync(full)) continue;
  const html = stripNoise(readFileSync(full, 'utf8'));

  // Only real attributes in markup, not ids built in a template string.
  const counts = new Map();
  for (const m of html.matchAll(/<[a-zA-Z][^>]*?\sid=["']([^"']+)["']/g)) {
    counts.set(m[1], (counts.get(m[1]) || 0) + 1);
  }
  const dups = [...counts].filter(([, n]) => n > 1);
  if (dups.length) {
    problems += dups.length;
    dupTotal += dups.length;
    console.log('   ' + page + ':');
    for (const [id, n] of dups.slice(0, 12)) console.log('      ' + id + ' x' + n);
    if (dups.length > 12) console.log('      ... and ' + (dups.length - 12) + ' more');
  }
}
if (!dupTotal) console.log('   none');

head('getElementById for an id that is never rendered');
for (const page of PAGES) {
  const full = APP + page;
  if (!existsSync(full)) continue;
  const raw = readFileSync(full, 'utf8');
  const html = stripNoise(raw);

  // Everything that could ever carry an id: real attributes, plus ids written
  // into template strings by the renderers.
  /* Built from the RAW file, deliberately, while `looked` below uses the
     stripped one.

     Be generous about what exists and strict about what is demanded. The
     stripper removes /* … *​/ across the whole file, and in a page that mixes
     CSS, JS and markup that swallowed real elements: tx-modal and fb-send are
     plainly there at lines 1549 and 1557 and were reported missing for two
     runs. Counting an id that only appears in a comment is the far cheaper
     mistake, because it costs a missed warning rather than a false one. */
  const present = new Set();
  for (const m of raw.matchAll(/\sid=["']([^"'${}]+)["']/g)) present.add(m[1]);
  for (const m of raw.matchAll(/id=\\?["']([a-zA-Z][\w-]*)\\?["']/g)) present.add(m[1]);
  // Shared files this page loads render ids too.
  let extra = '';
  for (const m of raw.matchAll(/<script[^>]+src=["']([^"']+)["']/g)) {
    if (/^https?:|^\/\//.test(m[1])) continue;
    const f = APP + (page.includes('/') ? page.replace(/[^/]+$/, '') : '') + m[1].split('?')[0];
    const norm = f.replace(/\/\.\.\//g, '/');
    if (existsSync(norm)) extra += readFileSync(norm, 'utf8');
  }
  for (const m of extra.matchAll(/id=\\?["']([a-zA-Z][\w-]*)\\?["']/g)) present.add(m[1]);

  /* Elements built in script carry their id by assignment, not by attribute:
       var o = document.createElement('div'); o.id = '_signup-hold';
     Without this the first run reported 22 ids as never rendered, and every
     one of them was created exactly this way. */
  for (const src of [raw, extra]) {
    for (const m of src.matchAll(/\.id\s*=\s*['"]([a-zA-Z_][\w-]*)['"]/g)) present.add(m[1]);
    for (const m of src.matchAll(/setAttribute\(\s*['"]id['"]\s*,\s*['"]([^'"]+)['"]/g)) present.add(m[1]);
  }

  const looked = new Set();
  for (const src of [html, extra]) {
    for (const m of src.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g)) looked.add(m[1]);
  }
  /* An id built from a variable is not a literal id and cannot be checked
     this way: `id="${uid}-summary"` is a template, and the page renders one
     per row. Excluded rather than reported, because "it exists" is a question
     about runtime, not about the source. */
  const absent = [...looked].filter((id) => !present.has(id) && !id.includes('${'));
  if (absent.length) {
    problems += absent.length;
    console.log('   ' + page + ': ' + absent.length + ' -> ' + absent.slice(0, 10).join(', '));
  }
}

console.log('');
console.log(problems ? '  ' + problems + ' DOM problem(s).'
                     : '  No duplicate ids, and every id the code reaches for is rendered somewhere.');
process.exit(problems ? 1 : 0);

/* AUDIT 1 - every hand-written scope list in the codebase.

   Every fault this month had one shape: a list of scopes or expiry columns
   typed out by hand before Sponsorship was sellable, which a third course
   then fell straight through. It has appeared in the entitlement helpers, in
   four money functions, in the sponsorship gate, in email_segment, in the
   profile panel and in the coupon preview. Six times. Reviewing for it by
   reading is clearly not working, so this enumerates them instead.

   The output is NOT a bug list. Plenty of these are correct: 'both' really
   does mean written+oral and must never grow, and the COC app is entitled to
   talk about only its own two sections. The point is that every one of them
   gets LOOKED AT and given a verdict, rather than being invisible.

   Two patterns are searched:
     A. a list naming written and oral but not sponsorship
     B. a read of written_expires_at / oral_expires_at with no sibling read
        of sponsorship_expires_at anywhere nearby
*/
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App';
const SKIP = new Set(['node_modules', '.git', '_visual-shots', 'Backup',
                      'DecryptEncrypt', 'data', 'Logos', 'graphify-out']);
const EXT = /\.(ts|js|mjs|cjs|html|sql)$/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.test(name)) out.push(p);
  }
  return out;
}

const files = walk(ROOT);

/* Lines that are known-correct by design, with the reason. Anything not on
   this list and still matching is reported for a human verdict. A file is
   keyed by path + the matched text so that moving code does not silently
   re-approve a different line. */
const EXPECTED = [
  // 'both' is a historical payments/coupons value. Growing it would silently
  // rewrite what past customers were sold.
  /both.*means.*written/i,
  /'both':\s*\['written',\s*'oral'\]/,
  // The COC app's own track ordering. Sponsorship is a separate app.
  /TRACK_ORDER\s*=\s*\['written',\s*'oral',\s*'both'\]/,
];

const A = [];
const B = [];

for (const f of files) {
  const rel = relative(ROOT, f).split(sep).join('/');
  const src = readFileSync(f, 'utf8');
  const lines = src.split(/\r?\n/);

  lines.forEach((line, i) => {
    const t = line.trim();
    if (!t || t.startsWith('*') || t.startsWith('//') || t.startsWith('--')) return;

    const hasW = /\bwritten\b/.test(t), hasO = /\boral\b/.test(t);
    const hasS = /\bsponsorship\b/i.test(t);

    // A: a list-looking line naming written and oral but never sponsorship
    if (hasW && hasO && !hasS && /[\[\{(]/.test(t)) {
      if (!EXPECTED.some((re) => re.test(t))) {
        A.push({ rel, n: i + 1, t: t.slice(0, 118) });
      }
    }

    // B: an expiry-column read with no sponsorship sibling on the same line
    const cols = /(written|oral)_expires_at/.test(t);
    if (cols && !/sponsorship_expires_at/.test(t)) {
      // Look for a sponsorship sibling within a few lines, which is how these
      // are normally written across a multi-line select or object literal.
      const near = lines.slice(Math.max(0, i - 6), i + 7).join('\n');
      if (!/sponsorship_expires_at/.test(near)) {
        B.push({ rel, n: i + 1, t: t.slice(0, 118) });
      }
    }
  });
}

const group = (rows) => {
  const by = new Map();
  for (const r of rows) {
    if (!by.has(r.rel)) by.set(r.rel, []);
    by.get(r.rel).push(r);
  }
  return by;
};

console.log('');
console.log('A. Scope lists naming written+oral but never sponsorship');
console.log('   (correct wherever the thing really is COC-only)');
console.log('   ' + '-'.repeat(72));
if (!A.length) console.log('   none');
for (const [rel, rows] of group(A)) {
  console.log('   ' + rel);
  for (const r of rows) console.log('     ' + String(r.n).padStart(5) + '  ' + r.t);
}

console.log('');
console.log('B. Expiry-column reads with no sponsorship_expires_at anywhere near');
console.log('   (this is the shape that granted nothing on 11 Sep)');
console.log('   ' + '-'.repeat(72));
if (!B.length) console.log('   none');
for (const [rel, rows] of group(B)) {
  console.log('   ' + rel);
  for (const r of rows) console.log('     ' + String(r.n).padStart(5) + '  ' + r.t);
}

console.log('');
console.log('   A: ' + A.length + ' line(s), B: ' + B.length + ' line(s). '
  + 'Each needs a verdict, not a fix.');

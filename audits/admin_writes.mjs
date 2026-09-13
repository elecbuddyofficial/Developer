/* Every write to a profile's access, and which scopes it names.

   The rule that has held everywhere else in this codebase: name every scope
   column, or name none and use a helper. A write that names some but not all
   is the exact shape of every fault this month - a list typed out before
   Sponsorship existed, which the third course then fell through.

   Two opposite failures come out of it and both are here:

     naming too MANY   a grant made from the Sponsorship console that also
                       writes written_expires_at destroys paid COC access
     naming too FEW    a revoke that clears written and oral but not
                       sponsorship leaves the customer still reading

   This finds each object literal passed to .update() in the admin console and
   reports which of the three it names.
*/
import { readFileSync } from 'node:fs';

const admin = readFileSync(
  'D:/Notes 1/Original/ETO_Study_App/app/admin/index.html', 'utf8');

const SCOPES = ['written', 'oral', 'sponsorship'];
const lines = admin.split(/\r?\n/);

// Find each .update({ ... }) and take the object literal that follows.
const findings = [];
const re = /\.update\(\s*\{/g;
let m;
while ((m = re.exec(admin)) !== null) {
  let depth = 0, end = -1;
  const start = admin.indexOf('{', m.index);
  for (let j = start; j < admin.length; j++) {
    if (admin[j] === '{') depth++;
    else if (admin[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
  }
  if (end === -1) continue;
  const body = admin.slice(start, end);
  // Only writes that touch access at all.
  if (!/_expires_at|subscription_plan|plan_scope/.test(body)) continue;

  const named = SCOPES.filter((s) => new RegExp('\\b' + s + '_expires_at\\s*:').test(body));
  const grants = SCOPES.filter((s) => new RegExp('granted_' + s + '_expires_at\\s*:').test(body));
  const line = admin.slice(0, start).split(/\r?\n/).length;

  // Which function is this in?
  let fn = '(top level)';
  for (let i = line; i > 0; i--) {
    const mm = lines[i - 1].match(/^\s*(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/);
    if (mm) { fn = mm[1]; break; }
  }

  findings.push({ line, fn, named, grants, body });
}

console.log('');
console.log('  %s %s %s %s'
  .replace('%s', 'line'.padEnd(6)).replace('%s', 'function'.padEnd(24))
  .replace('%s', 'scope columns named'.padEnd(30)).replace('%s', 'grant ledger'));
console.log('  ' + '-'.repeat(78));

let bad = 0;
for (const f of findings) {
  const partial = f.named.length > 0 && f.named.length < SCOPES.length;
  const gPartial = f.grants.length > 0 && f.grants.length < SCOPES.length;
  const flag = (partial || gPartial) ? '**' : '  ';
  if (partial || gPartial) bad++;
  console.log('  %s%s %s %s %s'
    .replace('%s', flag)
    .replace('%s', String(f.line).padEnd(6))
    .replace('%s', f.fn.padEnd(24))
    .replace('%s', (f.named.length ? f.named.join(', ') : 'none (helper?)').padEnd(30))
    .replace('%s', f.grants.length ? f.grants.join(', ') : '-'));
}

console.log('');
console.log('  ** = names SOME scope columns but not all three');
console.log('');
if (bad) {
  console.log('  ' + bad + ' write(s) treat the three courses unequally.');
  console.log('');
  console.log('  Each is either destroying a course it was not asked to touch,');
  console.log('  or leaving one behind that it was.');
} else {
  console.log('  Every access write names all three scopes or delegates to a helper.');
}
process.exit(bad ? 1 : 0);

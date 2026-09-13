/* checkout.js is deliberately not an IIFE, so every top-level name it declares
   is a global on both pages that load it. A name it shares with either page's
   own inline script would silently overwrite one of them - last definition
   wins, with no error anywhere. That is the one way this extraction can break
   something without any test noticing.

   So: pull the top-level declarations out of checkout.js and out of each
   page's inline scripts, and intersect them. */
import { readFileSync } from 'node:fs';

const ROOT = 'D:/Notes 1/Original/ETO_Study_App/app/';

function topLevel(js) {
  const names = new Set();
  // Only column-0 declarations are top level in these files.
  for (const m of js.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  for (const m of js.matchAll(/^(?:var|let|const)\s+([A-Za-z_$][\w$]*)/gm)) names.add(m[1]);
  return names;
}

function inlineJs(html) {
  let out = '';
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) out += m[1] + '\n';
  return out;
}

const checkout = topLevel(readFileSync(ROOT + 'checkout.js', 'utf8'));
console.log('checkout.js top-level names: ' + checkout.size);

let bad = 0;
for (const page of ['index.html', 'sponsorship/index.html']) {
  const own = topLevel(inlineJs(readFileSync(ROOT + page, 'utf8')));
  const clash = [...checkout].filter(n => own.has(n));
  console.log('\n  ' + page + ' own top-level names: ' + own.size);
  if (clash.length) {
    bad += clash.length;
    console.log('  *** COLLIDES ON ' + clash.length + ': ' + clash.join(', '));
  } else {
    console.log('  no collisions');
  }
}

// And the other shared files, which land in the same global scope.
for (const f of ['app.js', 'account.js', 'progress.js', 'table-hints.js']) {
  const own = topLevel(readFileSync(ROOT + f, 'utf8'));
  const clash = [...checkout].filter(n => own.has(n));
  if (clash.length) { bad += clash.length; console.log('\n  *** ' + f + ' COLLIDES: ' + clash.join(', ')); }
}

console.log('');
console.log(bad ? '  ' + bad + ' collision(s) - last definition would silently win.'
                : '  No global collisions on either page or any shared file.');
process.exit(bad ? 1 : 0);

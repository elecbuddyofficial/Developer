#!/usr/bin/env node
/* Theme responsiveness audit.
 *
 * WHY THIS EXISTS. The same bug has now shipped three times: a container with
 * a hardcoded dark background holding text coloured with a theme variable. In
 * a dark theme both are light-on-dark and it looks fine. In light theme the
 * background stays dark while the text turns dark, and the panel becomes
 * unreadable. It has hit the notification modal, the exit survey and the
 * "What's new" modal, and each time it was found by a user, not by a test.
 *
 * An earlier version of this check compared background and color WITHIN one
 * style attribute, and reported zero problems while "What's new" was
 * unreadable, because the background sat on the parent and the colour on a
 * child. Colour is inherited down the tree, so the check has to walk the tree.
 *
 * This parses each page, and for every element carrying a fixed background it
 * looks at every descendant's text colour, resolving each theme's palette to
 * see whether the pair collides in any of them.
 *
 * Usage: node theme-audit.cjs
 */
const fs = require('fs');
const path = require('path');
let JSDOM;
try { ({ JSDOM } = require('jsdom')); }
catch (e) { console.error('needs jsdom:  npm i --no-save jsdom'); process.exit(2); }

process.chdir(path.join(__dirname));

/* The four palettes, as defined in style.css. Only the tokens that can appear
   as a text colour or a surface are needed. */
const THEMES = {
  'default/dark': { '--text': '#F8FAFC', '--text2': '#CBD5E1', '--text3': '#94A3B8',
                    '--surface': '#141C2F', '--surface2': '#1C2740', '--surface3': '#252F45',
                    '--bg': '#0B1220', '--blue': '#5D98F8', '--green': '#22c55e',
                    '--orange': '#f59e0b', '--red': '#F36E6E', '--amber': '#C8A44A',
                    '--on-accent': '#0B1220' },
  'amoled':       { '--text': '#FFFFFF', '--text2': '#E2E8F0', '--text3': '#94A3B8',
                    '--surface': '#0E0E0E', '--surface2': '#171717', '--surface3': '#1F1F1F',
                    '--bg': '#000000', '--blue': '#5D98F8', '--green': '#22c55e',
                    '--orange': '#f59e0b', '--red': '#F36E6E', '--amber': '#C8A44A',
                    '--on-accent': '#000000' },
  'light':        { '--text': '#0F172A', '--text2': '#475569', '--text3': '#5C708A',
                    '--surface': '#FFFFFF', '--surface2': '#F8FAFC', '--surface3': '#F1F5F9',
                    '--bg': '#F8FAFC', '--blue': '#2563EB', '--green': '#117F3A',
                    '--orange': '#A25905', '--red': '#D52222', '--amber': '#846C31',
                    '--on-accent': '#FFFFFF' },
};

const hex = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const lin = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const lum = r => 0.2126 * lin(r[0]) + 0.7152 * lin(r[1]) + 0.0722 * lin(r[2]);
const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

/* Resolve a CSS colour to rgb under one theme, or null if it cannot be
   resolved (gradients, currentColor, transparent and so on). */
function resolve(value, theme) {
  if (!value) return null;
  const v = value.trim();
  if (/^#[0-9a-f]{6}$/i.test(v)) return hex(v);
  if (/^#[0-9a-f]{3}$/i.test(v)) return hex('#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3]);
  const varM = /^var\(\s*(--[\w-]+)\s*(?:,\s*([^)]+))?\)$/.exec(v);
  if (varM) {
    if (theme[varM[1]]) return hex(theme[varM[1]]);
    return varM[2] ? resolve(varM[2], theme) : null;
  }
  const rgb = /^rgba?\(([^)]+)\)$/.exec(v);
  if (rgb) {
    const p = rgb[1].split(',').map(x => parseFloat(x));
    if (p.length >= 3 && (p.length < 4 || p[3] > 0.85)) return [p[0], p[1], p[2]];
  }
  return null;
}
const isVar = v => /var\(/.test(v || '');
const isFixed = v => v && !isVar(v) && /^#[0-9a-f]{3,6}$/i.test(v.trim());

const PAGES = ['app/index.html', 'app/admin/index.html', 'app/sponsorship/index.html'];
const findings = [];

/* Every element carrying a fixed background, whether it came from a style
   attribute or a CSS rule. The first version looked only at style attributes
   and missed #profile-panel, whose background lives in a <style> block. */
function elementsWithFixedBackground(doc, src) {
  const out = [];
  for (const el of doc.querySelectorAll('[style*="background"]')) {
    const bg = (el.getAttribute('style').match(/background(?:-color)?\s*:\s*([^;]+)/) || [])[1];
    if (isFixed(bg)) out.push([el, bg]);
  }
  // Rules in <style> blocks: take the selector, find what it matches.
  const css = (src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n');
  for (const m of css.matchAll(/([^{}@]+)\{([^}]*background(?:-color)?\s*:\s*(#[0-9a-fA-F]{3,6})[^}]*)\}/g)) {
    const selector = m[1].trim().split('\n').pop().trim();
    if (!selector || /[%]/.test(selector)) continue;   // skip keyframes
    let matched = [];
    try { matched = [...doc.querySelectorAll(selector)]; } catch (e) { continue; }
    matched.forEach(el => out.push([el, m[3]]));
  }
  return out;
}

for (const page of PAGES) {
  const src = fs.readFileSync(page, 'utf8');
  const dom = new JSDOM(src);
  const doc = dom.window.document;

  for (const [el, bg] of elementsWithFixedBackground(doc, src)) {

    // Every descendant that sets a text colour, plus the element itself.
    const kids = [el, ...el.querySelectorAll('[style*="color"]')];
    for (const kid of kids) {
      const col = (kid.getAttribute('style') || '').match(/(?:^|;)\s*color\s*:\s*([^;]+)/);
      if (!col || !isVar(col[1])) continue;           // only theme-driven text

      // Does an inner element re-declare the background between the two?
      let a = kid.parentElement, shadowed = false;
      while (a && a !== el) {
        if (/background(?:-color)?\s*:/.test(a.getAttribute('style') || '')) { shadowed = true; break; }
        a = a.parentElement;
      }
      if (shadowed) continue;

      for (const [name, theme] of Object.entries(THEMES)) {
        const b = resolve(bg, theme), f = resolve(col[1], theme);
        if (!b || !f) continue;
        const r = ratio(f, b);
        if (r < 4.5) {
          findings.push({ page, theme: name, ratio: r, bg: bg.trim(), fg: col[1].trim(),
            text: (kid.textContent || '').trim().slice(0, 46) || '(no text)',
            id: el.id || kid.id || '' });
        }
      }
    }
  }
}

console.log('THEME RESPONSIVENESS AUDIT');
console.log('Fixed background + theme-variable text, checked in every theme.\n');

if (!findings.length) {
  console.log('  No collisions. Every fixed background holding themed text stays');
  console.log('  readable in all four themes.');
} else {
  const seen = new Set();
  for (const f of findings) {
    const key = f.page + f.bg + f.fg + f.text;
    if (seen.has(key)) continue;
    seen.add(key);
    const all = findings.filter(x => x.page + x.bg + x.fg + x.text === key);
    console.log('  ' + f.page + (f.id ? '  #' + f.id : ''));
    console.log('    "' + f.text + '"');
    console.log('    background ' + f.bg + '  +  text ' + f.fg);
    all.forEach(x => console.log('      ' + x.theme.padEnd(14) + x.ratio.toFixed(2) + ':1'
      + (x.ratio < 3 ? '   UNREADABLE' : '   below AA')));
    console.log('');
  }
}
console.log('\nRule: a fixed colour on one side of a pair and a theme variable on');
console.log('the other is always a bug. Fix both sides, or neither.');
process.exitCode = findings.length ? 1 : 0;

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

/* Resolve a CSS colour to [r,g,b,a] under one theme, or null if it cannot be
   resolved. Alpha is kept, because a translucent layer has to be composited
   over what is beneath it before any contrast number means anything.

   The first four versions of this audit only understood #hex. Every rgba()
   background was skipped in silence, which is how .up-plan-card, a fixed
   translucent dark panel holding var(--text), passed four consecutive clean
   runs while being unreadable in light theme. */
const NAMED = { white: [255,255,255,1], black: [0,0,0,1], transparent: [0,0,0,0] };

function resolve(value, theme, depth) {
  if (!value || (depth || 0) > 4) return null;
  const v = String(value).trim().toLowerCase();
  if (NAMED[v]) return NAMED[v].slice();
  let m;
  if ((m = /^#([0-9a-f]{6})$/.exec(v))) return [...hex('#' + m[1]), 1];
  if ((m = /^#([0-9a-f]{3})$/.exec(v)))
    return [...hex('#' + m[1][0] + m[1][0] + m[1][1] + m[1][1] + m[1][2] + m[1][2]), 1];
  if ((m = /^var\(\s*(--[\w-]+)\s*(?:,\s*([^)]+))?\)$/.exec(v))) {
    if (theme[m[1]]) return resolve(theme[m[1]], theme, (depth || 0) + 1);
    return m[2] ? resolve(m[2], theme, (depth || 0) + 1) : null;
  }
  if ((m = /^rgba?\(([^)]+)\)$/.exec(v))) {
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(parseFloat);
    if (p.length >= 3) return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
  }
  return null;
}

/* Flatten a stack of layers, nearest first, onto an opaque base. */
function flatten(layers, base) {
  let out = base.slice(0, 3);
  for (let i = layers.length - 1; i >= 0; i--) {
    const l = layers[i];
    if (!l) continue;
    const a = l[3] == null ? 1 : l[3];
    out = [0, 1, 2].map(k => Math.round(l[k] * a + out[k] * (1 - a)));
  }
  return out;
}

const isVar = v => /var\(/.test(v || '');
const isFixed = v => {
  if (!v || isVar(v)) return false;
  const t = String(v).trim().toLowerCase();
  return /^#[0-9a-f]{3,6}$/.test(t) || /^rgba?\(/.test(t) || !!NAMED[t];
};

const PAGES = ['app/index.html', 'app/admin/index.html', 'app/sponsorship/index.html'];
const findings = [];

/* Scoped palettes. #gate-overlay redefines --text, --surface and the rest
   inside itself so the paywall stays dark whatever the page theme is, which is
   a deliberate and correct pattern. An audit that does not know about it
   reports every element in there as broken, which is worse than useless: cry
   wolf often enough and the real findings get skipped too.

   So: collect every selector that redefines tokens, and when scoring an
   element, merge the overrides of any ancestor that matches one. */
function collectScopes(src) {
  const css = (src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n')
            + '\n' + (fs.existsSync('app/style.css') ? fs.readFileSync('app/style.css', 'utf8') : '');
  const scopes = [];
  for (const m of css.matchAll(/([^{}@\n]+)\{([^}]*--[\w-]+\s*:[^}]*)\}/g)) {
    const selector = m[1].trim();
    if (!selector || selector === ':root' || /^\[data-theme/.test(selector)) continue;
    const tokens = {};
    for (const t of m[2].matchAll(/(--[\w-]+)\s*:\s*([^;]+)/g)) tokens[t[1]] = t[2].trim();
    if (Object.keys(tokens).length) scopes.push({ selector, tokens });
  }
  return scopes;
}

/* The palette in force for one element: the page theme, with any scoped
   overrides from itself or an ancestor layered on top. */
function themeFor(el, baseTheme, scopes) {
  let merged = null;
  for (let a = el; a; a = a.parentElement) {
    for (const sc of scopes) {
      let hit = false;
      try { hit = a.matches(sc.selector); } catch (e) { continue; }
      if (hit) merged = Object.assign({}, sc.tokens, merged || {});
    }
  }
  return merged ? Object.assign({}, baseTheme, merged) : baseTheme;
}

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
  for (const m of css.matchAll(/([^{}@]+)\{([^}]*background(?:-color)?\s*:\s*(#[0-9a-fA-F]{3,6}|rgba?\([^)]*\))[^}]*)\}/g)) {
    const selector = m[1].trim().split('\n').pop().trim();
    if (!selector || /[%]/.test(selector)) continue;   // skip keyframes
    let matched = [];
    try { matched = [...doc.querySelectorAll(selector)]; } catch (e) { continue; }
    matched.forEach(el => out.push([el, m[3]]));
  }
  return out;
}

/* Every element whose TEXT COLOUR comes from a CSS rule rather than a style
   attribute.

   This is the third blind spot found in this file, and it is the exact mirror
   of the second. That one collected backgrounds from style attributes only and
   missed backgrounds set in <style> blocks; it was fixed. The foreground side
   was left reading `kid.getAttribute('style')` and nothing else, so any text
   coloured by a rule stayed invisible to the audit.

   That mattered most on the page with the fewest inline styles. app/admin sets
   nearly every colour in a rule, so a hardcoded background holding var(--text)
   there scored clean no matter how badly it broke. Found by planting a
   deliberate bug and watching the audit report "no collisions", which is the
   only way to trust a check that has already been wrong twice.

   Later rules win, which approximates the cascade well enough here: this is
   looking for pairs, not computing exact specificity. */
function ruleTextColours(doc, src) {
  const map = new Map();
  const css = (src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n')
            + '\n' + (fs.existsSync('app/style.css') ? fs.readFileSync('app/style.css', 'utf8') : '');
  for (const m of css.matchAll(/([^{}@]+)\{([^}]*)\}/g)) {
    // (?:^|;) so background-color and border-color are not read as color.
    const c = m[2].match(/(?:^|;)\s*color\s*:\s*([^;}]+)/);
    if (!c) continue;
    const sel = m[1].trim().split('\n').pop().trim();
    if (!sel || /[%]/.test(sel)) continue;              // skip keyframe stops
    try { doc.querySelectorAll(sel).forEach(e => map.set(e, c[1].trim())); } catch (e) {}
  }
  return map;
}

for (const page of PAGES) {
  const src = fs.readFileSync(page, 'utf8');
  const dom = new JSDOM(src);
  const doc = dom.window.document;
  const scopes = collectScopes(src);
  const ruleColours = ruleTextColours(doc, src);
  // Every element that paints a background from any source, used below to tell
  // whether a nearer layer stands between a scrim and its text.
  const painted = elementsWithFixedBackground(doc, src);
  const painters = new Set(painted.map(x => x[0]));
  for (const el of doc.querySelectorAll('[style*="background"]')) {
    const st = el.getAttribute('style') || '';
    if (/background(?:-color)?\s*:\s*(?!none|transparent)/.test(st)) painters.add(el);
  }
  {
    const allCss = (src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n')
      + '\n' + (fs.existsSync('app/style.css') ? fs.readFileSync('app/style.css', 'utf8') : '');
    for (const m of allCss.matchAll(/([^{}@]+)\{([^}]*background(?:-color)?\s*:\s*([^;}]+))/g)) {
      if (/none|transparent|inherit/.test(m[3])) continue;
      const sel = m[1].trim().split('\n').pop().trim();
      if (!sel || /[%]/.test(sel)) continue;
      try { doc.querySelectorAll(sel).forEach(e => painters.add(e)); } catch (e) {}
    }
  }

  for (const [el, bg] of painted) {

    // Every descendant that sets a text colour from EITHER source, plus the
    // element itself. Restricting this to [style*="color"] is what let a
    // rule-coloured element sit on a hardcoded background unnoticed.
    const kids = new Set([el, ...el.querySelectorAll('[style*="color"]')]);
    for (const e of ruleColours.keys()) if (el.contains(e)) kids.add(e);

    for (const kid of kids) {
      // A style attribute beats a rule, as it does in the browser.
      const inline = (kid.getAttribute('style') || '').match(/(?:^|;)\s*color\s*:\s*([^;]+)/);
      const colour = inline ? inline[1] : ruleColours.get(kid);
      if (!colour || !isVar(colour)) continue;         // only theme-driven text
      const col = [null, colour];

      // Does anything between the two paint its own background? Checked
      // against elements painted from EITHER source: a child panel styled by
      // a CSS rule shadows the scrim behind it just as surely as an inline
      // one, and missing that scored everything inside #profile-panel against
      // the dim overlay instead of the panel it actually sits on.
      // When the background and the text are on the SAME element there is
      // nothing in between, so the walk must not run at all. It used to start
      // at el.parentElement regardless, and since the loop stops at `el` -
      // which it can never reach going upwards - it climbed to the document
      // root and found some painted ancestor practically every time. Every
      // same-element pair was therefore discarded as "shadowed". That is the
      // single commonest shape of this bug: one rule setting both background
      // and color.
      let a = (kid === el) ? null : kid.parentElement, shadowed = false;
      while (a && a !== el) {
        if (painters.has(a) || /background(?:-color)?\s*:/.test(a.getAttribute('style') || '')) { shadowed = true; break; }
        a = a.parentElement;
      }
      if (shadowed) continue;

      for (const [name, baseTheme] of Object.entries(THEMES)) {
        const theme = themeFor(kid, baseTheme, scopes);
        const braw = resolve(bg, theme), f = resolve(col[1], theme);
        if (!braw || !f) continue;
        const b = flatten([braw], resolve(theme['--bg'], theme));
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

/* PASS TWO: the mirror image, and the one this audit itself caused.
   Converting a hardcoded dark panel to var(--surface) fixes the background but
   leaves any hardcoded pale text still tuned for a dark ground. On the light
   palette that text lands on white and disappears. Fixing one side of a pair
   without the other just moves the bug. */
for (const page of PAGES) {
  const src = fs.readFileSync(page, 'utf8');
  const dom = new JSDOM(src);
  const doc = dom.window.document;
  const scopes = collectScopes(src);

  for (const kid of doc.querySelectorAll('[style*="color"]')) {
    const col = (kid.getAttribute('style').match(/(?:^|;)\s*color\s*:\s*([^;]+)/) || [])[1];
    if (!isFixed(col)) continue;                       // only fixed text

    // Nearest ancestor (or self) that actually paints a background.
    let a = kid, bg = null;
    while (a) {
      const s = a.getAttribute && a.getAttribute('style');
      const m = s && s.match(/background(?:-color)?\s*:\s*([^;]+)/);
      if (m && !/none|transparent/.test(m[1])) { bg = m[1].trim(); break; }
      a = a.parentElement;
    }
    if (!bg || !isVar(bg)) continue;                   // only themed grounds

    for (const [name, baseTheme] of Object.entries(THEMES)) {
      const theme = themeFor(kid, baseTheme, scopes);
      const braw = resolve(bg, theme), f = resolve(col, theme);
      if (!braw || !f) continue;
      const b = flatten([braw], resolve(theme['--bg'], theme));
      const r = ratio(f, b);
      if (r < 4.5) findings.push({ page, theme: name, ratio: r, bg: bg, fg: col,
        text: (kid.textContent || '').trim().slice(0, 46) || '(icon or empty)',
        id: kid.id || '', reverse: true });
    }
  }
}

/* PASS THREE: markup built in JavaScript.
   The two passes above parse the HTML pages, so anything a .js file writes
   into the DOM at runtime is invisible to them. account.js builds the contact
   footer and the payments list and carried 32 hardcoded colours through both
   earlier sweeps untouched, which is why the social icons stayed pale after
   the pages were fixed.

   Executing those files to inspect the result would mean standing up most of
   the app, so this settles for the cheaper and still decisive check: a colour
   literal inside a style string in JS is a colour that cannot follow the
   theme, whatever it resolves to. */
const JS_FILES = ['app/app.js', 'app/account.js', 'app/table-hints.js'];
const jsHits = [];
for (const f of JS_FILES) {
  if (!fs.existsSync(f)) continue;
  fs.readFileSync(f, 'utf8').split('\n').forEach((line, i) => {
    // Only colour and background declarations; ignore box-shadow, gradients
    // and rgba() overlays, which are decoration rather than legibility.
    for (const m of line.matchAll(/(?:^|[;"'\s])(color|background(?:-color)?)\s*:\s*(#[0-9a-fA-F]{3,6})/g)) {
      jsHits.push({ file: f, line: i + 1, prop: m[1], value: m[2],
                    snippet: line.trim().slice(0, 60) });
    }
  });
}

console.log('THEME RESPONSIVENESS AUDIT');
console.log('Both directions: a fixed colour on one side of a pair and a theme');
console.log('variable on the other, checked in every theme.\n');

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
console.log('\n── Colours hardcoded in JavaScript ───────────────────────');
if (!jsHits.length) {
  console.log('  None. Every colour written from JS goes through a token.');
} else {
  console.log('  These cannot follow the theme, wherever they end up:\n');
  for (const h of jsHits.slice(0, 25))
    console.log('  ' + (h.file + ':' + h.line).padEnd(24) + h.prop + ': ' + h.value + '   ' + h.snippet);
  if (jsHits.length > 25) console.log('  ... and ' + (jsHits.length - 25) + ' more');
}

console.log('\nRule: a fixed colour on one side of a pair and a theme variable on');
console.log('the other is always a bug. Fix both sides, or neither.');
process.exitCode = (findings.length || jsHits.length) ? 1 : 0;

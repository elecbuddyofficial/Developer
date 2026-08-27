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

/* The palettes, READ FROM style.css rather than copied into this file.

   They used to be a hand-kept table here, and it had already drifted: light
   --amber was #846C31 while style.css said #75601E, and --purple, --teal and
   --cyan were missing outright. A missing token makes resolve() return null,
   and a null pair is skipped in silence, so every purple element in the app
   was exempt from this audit with nothing saying so. The content counts failed
   the same way and were fixed the same way, by generating rather than typing. */
function readPalettes() {
  const css = fs.readFileSync('app/style.css', 'utf8');
  const block = sel => {
    const i = css.indexOf(sel + '{');
    if (i < 0) return null;
    const open = i + sel.length + 1;
    const end = css.indexOf('}', open);
    return end < 0 ? null : css.slice(open, end);
  };
  const vars = text => {
    const out = {};
    if (text) for (const m of text.matchAll(/(--[\w-]+)\s*:\s*([^;]+)/g)) out[m[1]] = m[2].trim();
    return out;
  };
  // :root is the dark default; each [data-theme] block overrides only what it
  // redefines, which is how the cascade applies them.
  const base = vars(block(':root'));
  if (Object.keys(base).length < 10) {
    console.error('ERROR: could not read the palette from app/style.css :root.');
    console.error('Refusing to audit against an empty palette: it would report clean.');
    process.exit(2);
  }
  return {
    'default/dark': base,
    'amoled': Object.assign({}, base, vars(block('[data-theme="amoled"]'))),
    'light':  Object.assign({}, base, vars(block('[data-theme="light"]'))),
  };
}
const THEMES = readPalettes();

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

/* style.css applies only to pages that actually link it. auth.html is written
   entirely in literal colours and loads no stylesheet, so folding style.css
   into its cascade invented a var(--text) on a #070D1A ground and reported the
   sign-in page unreadable when it renders identically in every theme. */
const linksGlobalCss = src => /href\s*=\s*["'][^"']*style\.css/.test(src);
const globalCss = src => (linksGlobalCss(src) && fs.existsSync('app/style.css'))
  ? fs.readFileSync('app/style.css', 'utf8') : '';

const isVar = v => /var\(/.test(v || '');
const isFixed = v => {
  if (!v || isVar(v)) return false;
  const t = String(v).trim().toLowerCase();
  return /^#[0-9a-f]{3,6}$/.test(t) || /^rgba?\(/.test(t) || !!NAMED[t];
};

/* Overridable so this file can be tested against fixtures. It has now been
   wrong three times (style attributes only; single-attribute pairs only; and
   blind to anything inside a media query), each time found by a person rather
   than by anything automatic, so `_themetest.cjs` exercises it against pages
   built to collide. Without an override that test would have to mutate a real
   page, which is how Phase 4 of the finance page got destroyed today. */
const PAGES = process.env.THEME_AUDIT_PAGES
  ? process.env.THEME_AUDIT_PAGES.split(',')
  : ['app/index.html', 'app/admin/index.html', 'app/sponsorship/index.html',
     'app/admin/finance.html',
     // courses.html and auth.html were missing from this list, so neither was
     // ever audited. courses.html is the page a cadet sees first, and it held
     // white text on a filled --blue at 2.87:1, the exact pair named in
     // CLAUDE.md, for as long as the rule has been written down.
     'app/courses.html', 'app/auth.html'];
const findings = [];

/* Scoped palettes. #gate-overlay redefines --text, --surface and the rest
   inside itself so the paywall stays dark whatever the page theme is, which is
   a deliberate and correct pattern. An audit that does not know about it
   reports every element in there as broken, which is worse than useless: cry
   wolf often enough and the real findings get skipped too.

   So: collect every selector that redefines tokens, and when scoring an
   element, merge the overrides of any ancestor that matches one. */
/* Removes @media print blocks, and ONLY those, before anything below looks at
   the CSS.

   THIS IS NOT A WEAKENING OF THE CHECK, and the distinction matters because
   two earlier versions of this file were weakened and let real bugs through.
   The rule being enforced is that a fixed colour paired with a theme variable
   breaks when the theme changes. Inside @media print there is no theme: the
   page is going on paper, where the background is white and the ink is black
   whatever the viewer had selected on screen. Fixed colours there are the
   correct answer, and a token is the bug, because a dark surface prints as a
   solid block or is dropped and takes the text with it.

   Screen media queries are deliberately NOT stripped. A colour inside
   `@media (max-width: 780px)` absolutely can collide, and those rules are
   still analysed exactly as before.

   The parser below treats rules nested in any @media as though they were
   top-level, which is why a print rule was being scored against the screen
   palettes at all. */
/* Two jobs, because they are the same walk over the same at-rules:

   PRINT blocks are removed entirely, for the reason above.

   EVERY OTHER at-rule is FLATTENED: the `@media (max-width: 780px) {` header
   and its matching `}` are deleted and the rules inside are left behind as
   top-level rules.

   THE BUG THIS FIXES, WHICH WAS HERE BEFORE THE PRINT WORK. Every scan below
   matches `selector { ... }` with a selector pattern that excludes `@`. A rule
   nested inside a media query therefore never matched cleanly, so **a fixed
   background declared inside `@media (max-width: 780px)` was invisible to this
   audit**. It was measured, not guessed: the identical mutation was run
   against the version of this file before any of today's changes and it passed
   just as happily. That is a third way this check has been half-blind, after
   the style-attribute-only version and the single-attribute-pair version.

   It matters here specifically because this app does a lot of mobile-only
   styling, which is exactly where a hardcoded background would hide.

   Flattening deliberately over-reports rather than under-reports: a rule that
   only applies below 780px is judged as though it always applies. If that ever
   produces a false positive, the collision it names is still real on a phone,
   and this file's whole history says the expensive direction is the other one. */
function stripPrintCss(css) {
  let out = '', i = 0;
  while (i < css.length) {
    const at = css.indexOf('@', i);
    if (at === -1) { out += css.slice(i); break; }

    const brace = css.indexOf('{', at);
    const semi  = css.indexOf(';', at);
    // A statement at-rule (@import, @charset) has no block. Copy and move on.
    if (brace === -1 || (semi !== -1 && semi < brace)) {
      out += css.slice(i, semi === -1 ? css.length : semi + 1);
      i = semi === -1 ? css.length : semi + 1;
      continue;
    }

    const head = css.slice(at, brace);
    // Only at-rules that WRAP other rules may be flattened. @font-face and
    // @keyframes contain declarations, not rules, and unwrapping them would
    // invent selectors that do not exist.
    const wraps = /^@(media|supports|layer|container)\b/.test(head);

    let d = 0, end = -1;
    for (let j = brace; j < css.length; j++) {
      if (css[j] === '{') d++;
      else if (css[j] === '}') { d--; if (d === 0) { end = j; break; } }
    }
    if (end === -1) { out += css.slice(i); break; }

    out += css.slice(i, at);
    if (wraps && !/\bprint\b/.test(head)) {
      // Recurse: media queries can nest, and so can @supports inside @media.
      out += '\n' + stripPrintCss(css.slice(brace + 1, end)) + '\n';
    } else if (!wraps) {
      out += css.slice(at, end + 1);          // @font-face and friends, intact
    }
    // print blocks: contribute nothing
    i = end + 1;
  }
  return out;
}

function collectScopes(src) {
  const css = stripPrintCss((src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n'))
            + '\n' + globalCss(src);
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
  const css = stripPrintCss((src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n'));
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
  const css = stripPrintCss((src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n'))
            + '\n' + globalCss(src);
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
    const allCss = stripPrintCss((src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n'))
      + '\n' + globalCss(src);
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

/* Every element's background, from a style attribute or from any rule, with a
   style attribute winning over a rule.

   This is the mirror of ruleTextColours, and the piece PASS TWO was missing.
   It walked style attributes only, so a pair written entirely in CSS, such as
   `.btn-blue { background: var(--blue); color: #fff }` in a <style> block, was
   invisible to it. That is the same blind spot documented twice at the top of
   this file, left unfixed on the reverse direction, and it is why white text
   on a filled accent kept shipping while this audit printed "no collisions". */
function allBackgrounds(doc, src) {
  const map = new Map();
  const css = stripPrintCss((src.match(/<style[^>]*>([\s\S]*?)<\/style>/g) || []).join('\n'))
            + '\n' + globalCss(src);
  for (const m of css.matchAll(/([^{}@]+)\{([^}]*)\}/g)) {
    const b = m[2].match(/(?:^|;)\s*background(?:-color)?\s*:\s*([^;}]+)/);
    if (!b) continue;
    const sel = m[1].trim().split('\n').pop().trim();
    if (!sel || /[%]/.test(sel)) continue;             // skip keyframe stops
    const val = b[1].trim();
    if (/^(none|transparent)$/i.test(val)) continue;
    try { doc.querySelectorAll(sel).forEach(e => map.set(e, val)); } catch (e) {}
  }
  for (const el of doc.querySelectorAll('[style*="background"]')) {
    const m = (el.getAttribute('style') || '').match(/background(?:-color)?\s*:\s*([^;]+)/);
    if (m && !/none|transparent/.test(m[1])) map.set(el, m[1].trim());
  }
  return map;
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

  const ruleColours = ruleTextColours(doc, src);
  const backgrounds = allBackgrounds(doc, src);

  const textColourOf = el => {
    const s = el.getAttribute && el.getAttribute('style');
    const m = s && s.match(/(?:^|;)\s*color\s*:\s*([^;]+)/);
    return m ? m[1].trim() : (ruleColours.get(el) || null);
  };

  // Both sources. Reading style attributes alone is what let
  // `.btn-blue { background: var(--blue); color: #fff }` through.
  const candidates = new Set([...doc.querySelectorAll('[style*="color"]'),
                              ...ruleColours.keys()]);

  for (const kid of candidates) {
    const col = textColourOf(kid);
    if (!isFixed(col)) continue;                       // only fixed text

    // Nearest ancestor (or self) that actually paints a background.
    let a = kid, bg = null;
    while (a) {
      const v = backgrounds.get(a);
      if (v) { bg = v; break; }
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

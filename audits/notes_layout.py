# -*- coding: utf-8 -*-
"""Render every notes file at phone widths and find broken grid layouts.

A reader recorded W01 "Overcurrent Protection - 3 Methods" on an Android phone
on 14 Sep 2026: the section appeared to start at Method 2, with a huge empty
gap before Method 3. The cause was a card written with
style="grid-column: span 2". On a phone every grid is forced to one column,
and a span-2 child makes CSS create an implicit second column, so the cards
before it sit side by side and the first one is squeezed to a sliver whose
text stacks hundreds of pixels tall.

Nothing that reads source caught it, because nothing in the source is wrong.
It only exists as a rendered layout, so this renders.

It is also width-dependent. The reader's phone is 360 CSS pixels wide, and with
the fix removed the overlap appears at 360px but not at 390 or 412. Keep all
three widths: a run at iPhone width alone reports clean over this exact bug.

    python audits/notes_layout.py <plaintext-dir> [<plaintext-dir> ...]

The notes are encrypted in the repo, so this takes directories of DECRYPTED
copies kept outside it (the session scratchpad), never the repo files. Each
file calls some window.loadXxxNotes(id, `html`); every such loader is stubbed
to capture the HTML, whatever it is called.

What it reports, per file and per width:

  IMPLICIT COLUMNS  a grid the phone layout forces to one column that still
                    renders more than one track
  SQUEEZED          a grid child narrower than half its grid
  OVERLAP           two grid children sharing pixels
  OVERHANG          anything wider than the reading column, which .note-doc
                    clips on mobile, so it is unreachable rather than awkward
"""
import glob, os, re, subprocess, sys, time, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, os.pardir))
PORT = 8188
BASE = 'http://127.0.0.1:%d/' % PORT

WIDTHS = [360, 390, 412]
DIRS = [d for d in sys.argv[1:] if not d.startswith('--')]
if not DIRS:
    print('  Pass one or more directories of DECRYPTED notes files.')
    print('  They must live outside the repo: the repo copies stay encrypted.')
    sys.exit(2)

files = []
for d in DIRS:
    files += sorted(glob.glob(os.path.join(d, '*_notes.js')))
    files += sorted(glob.glob(os.path.join(d, '*_overview.js')))
if not files:
    print('  No *_notes.js files found in %s' % ', '.join(DIRS))
    sys.exit(2)


def up():
    try:
        urllib.request.urlopen(BASE + 'app/style.css', timeout=2); return True
    except Exception:
        return False


proc = None
if not up():
    proc = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--bind', '127.0.0.1'],
                            cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(60):
        time.sleep(0.5)
        if up():
            break

# The Sponsorship page adds its own <style> blocks on top of style.css; notes
# from that course are rendered with those too, or its layout is not tested.
spon_css = ''
try:
    sp = open(os.path.join(ROOT, 'app', 'sponsorship', 'index.html'), encoding='utf-8').read()
    spon_css = '\n'.join(re.findall(r'<style[^>]*>([\s\S]*?)</style>', sp))
except Exception:
    pass


def shell(extra_css):
    return ('<!doctype html><html><head><meta charset="utf-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<link rel="stylesheet" href="/app/style.css">'
            '<style>' + extra_css + '</style></head>'
            '<body><div id="notes-container"></div></body></html>')


MEASURE = r"""
() => {
  const doc = document.querySelector('.note-doc') || document.body;
  const docR = doc.getBoundingClientRect();
  const out = { implicit: [], squeezed: [], overlap: [], overhang: [] };
  const where = (n) => {
    let h = n, id = '';
    while (h && h !== document.body) {
      const prev = [];
      for (let s = h; s; s = s.previousElementSibling) {
        if (s.id && /^[a-z0-9]+-/.test(s.id)) { id = s.id; break; }
      }
      if (id) break;
      h = h.parentElement;
    }
    return id || '(top)';
  };
  const text = (n) => (n.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 48);

  const phoneForced = (g) => g.matches('.welcome-grid, .n-grid, .n-grid-3, .qcat-grid, [style*="grid-template-columns"]');

  doc.querySelectorAll('*').forEach(g => {
    const cs = getComputedStyle(g);
    if (cs.display !== 'grid' && cs.display !== 'inline-grid') return;
    const kids = [...g.children].filter(k => getComputedStyle(k).display !== 'none');
    if (!kids.length) return;
    const gr = g.getBoundingClientRect();
    if (gr.width < 2) return;

    const tracks = cs.gridTemplateColumns.split(' ').filter(Boolean).length;
    if (phoneForced(g) && tracks > 1) {
      out.implicit.push({ at: where(g), tracks, first: text(kids[0]) });
    }
    kids.forEach(k => {
      const kr = k.getBoundingClientRect();
      if (kr.width < gr.width * 0.5 && tracks <= 1) {
        out.squeezed.push({ at: where(g), width: Math.round(kr.width), of: Math.round(gr.width),
                            height: Math.round(kr.height), text: text(k) });
      }
    });
    for (let i = 0; i < kids.length; i++) {
      for (let j = i + 1; j < kids.length; j++) {
        const a = kids[i].getBoundingClientRect(), b = kids[j].getBoundingClientRect();
        const ox = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const oy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (ox > 2 && oy > 2) {
          out.overlap.push({ at: where(g), a: text(kids[i]), b: text(kids[j]) });
        }
      }
    }
  });

  // Wider than the reading column. Tables scroll inside their own wrapper by
  // design, so anything inside a scroll container is excluded.
  doc.querySelectorAll('*').forEach(n => {
    const r = n.getBoundingClientRect();
    if (r.width < 2 || r.right <= docR.right + 2) return;
    for (let a = n.parentElement; a && a !== doc; a = a.parentElement) {
      const ox = getComputedStyle(a).overflowX;
      if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') return;
    }
    out.overhang.push({ at: where(n), tag: n.tagName.toLowerCase(),
                        by: Math.round(r.right - docR.right), text: text(n) });
  });

  const dedupe = (arr, key) => {
    const s = new Set();
    return arr.filter(x => { const k = key(x); if (s.has(k)) return false; s.add(k); return true; });
  };
  out.overhang = dedupe(out.overhang, x => x.at).slice(0, 5);
  out.squeezed = dedupe(out.squeezed, x => x.at + x.text);
  out.overlap = dedupe(out.overlap, x => x.at + x.a + x.b);
  out.implicit = dedupe(out.implicit, x => x.at + x.first);
  return out;
}
"""

from playwright.sync_api import sync_playwright

totals = {'implicit': 0, 'squeezed': 0, 'overlap': 0, 'overhang': 0}
unrendered = [0]
bad_files = 0
try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        for path in files:
            name = os.path.basename(path)
            is_spon = 'spon' in path.lower()
            src = open(path, encoding='utf-8').read()
            loaders = sorted(set(re.findall(r'window\.([A-Za-z_$][\w$]*)\s*\(', src)))
            file_bad = []
            for w in WIDTHS:
                ctx = br.new_context(viewport={'width': w, 'height': 900}, is_mobile=True)
                pg = ctx.new_page()
                pg.route('**/_notes_shell.html',
                         (lambda body: (lambda route: route.fulfill(
                             status=200, body=body, content_type='text/html; charset=utf-8')))(
                             shell(spon_css if is_spon else '')))
                pg.goto(BASE + '_notes_shell.html')
                pg.wait_for_load_state('domcontentloaded')
                ok = pg.evaluate(r"""
                ({src, loaders}) => {
                  const box = document.getElementById('notes-container');
                  let captured = '';
                  loaders.forEach(n => { window[n] = (a, b) => {
                    const h = typeof b === 'string' ? b : (typeof a === 'string' ? a : '');
                    if (h.length > captured.length) captured = h;
                  }; });
                  try { (0, eval)(src); } catch (e) { return 'eval: ' + String(e).slice(0, 80); }
                  if (!captured) return 'no html captured';
                  box.innerHTML = captured;
                  /* Show the view, the way showView does in the app.

                     Every notes file wraps its HTML in <div class="view">, and
                     style.css has .view{display:none} until .active is added. The
                     first version of this skipped that, so the whole reading column
                     was display:none, every rectangle measured zero, and it reported
                     all 117 files clean. Reinstating the real W01 bug and a planted
                     one, it still reported clean. */
                  box.querySelectorAll('.view').forEach(v => v.classList.add('active'));
                  box.querySelectorAll('img').forEach(i => { i.removeAttribute('loading'); });
                  // Control probe: a file that renders empty must never pass.
                  const doc = box.querySelector('.note-doc') || box;
                  const h = doc.getBoundingClientRect().height;
                  if (h < 200) return 'rendered only ' + Math.round(h) + 'px tall, nothing was measured';
                  return 'ok';
                }""", {'src': src, 'loaders': loaders})
                if ok != 'ok':
                    file_bad.append((w, 'could not render: ' + ok, None))
                    unrendered[0] += 1
                    ctx.close()
                    continue
                pg.wait_for_timeout(250)
                r = pg.evaluate(MEASURE)
                for kind in totals:
                    for item in r[kind]:
                        totals[kind] += 1
                        file_bad.append((w, kind, item))
                ctx.close()

            if file_bad:
                bad_files += 1
                print('')
                print('  %s' % name)
                seen = set()
                for w, kind, item in file_bad:
                    if item is None:
                        print('    %dpx  %s' % (w, kind)); continue
                    key = (kind, str(item))
                    if key in seen:
                        continue
                    seen.add(key)
                    if kind == 'implicit':
                        msg = '%s: forced to 1 column but renders %d, starting "%s"' % (
                            item['at'], item['tracks'], item['first'])
                    elif kind == 'squeezed':
                        msg = '%s: child %dpx wide in a %dpx grid, %dpx tall, "%s"' % (
                            item['at'], item['width'], item['of'], item['height'], item['text'])
                    elif kind == 'overlap':
                        msg = '%s: "%s" overlaps "%s"' % (item['at'], item['a'], item['b'])
                    else:
                        msg = '%s: <%s> runs %dpx past the reading column, "%s"' % (
                            item['at'], item['tag'], item['by'], item['text'])
                    print('    %dpx  %-9s %s' % (w, kind.upper(), msg[:140]))
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d notes files rendered at %s px' % (len(files), ', '.join(map(str, WIDTHS))))
print('  implicit columns %d, squeezed %d, overlapping %d, overhanging %d'
      % (totals['implicit'], totals['squeezed'], totals['overlap'], totals['overhang']))
total = sum(totals.values())
if unrendered[0]:
    print('  %d render(s) produced nothing to measure. Treated as failure, not a pass:' % unrendered[0])
    print('  an audit that measures an empty page reports clean over ground it never saw.')
    total += unrendered[0]
print('')
print('  %d layout problem(s) in %d file(s).' % (total, bad_files) if total else
      '  Every grid renders as one clean column on a phone, and nothing runs off the page.')
sys.exit(1 if total else 0)

# -*- coding: utf-8 -*-
"""Render a decrypted topic notes file against the real stylesheet.

This is the gap that let the bare <table> bug ship. _visual.py cannot reach a
notes view: index.html needs a session and the content needs a key, so every
check so far has been structural (does it parse, do the anchors match) and
never visual. The notes are plaintext during an edit, which is exactly the
window in which they can be looked at.

The harness page is served through Playwright's router, so nothing is written
into the repo.
"""
import io
import os
import sys
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, '_visual-shots')
os.makedirs(OUT, exist_ok=True)
BASE = 'http://127.0.0.1:8123/app'
THEMES = ['dark', 'light']

PAGE = """<!doctype html><html data-theme="dark"><head><meta charset="utf-8">
<link rel="stylesheet" href="style.css">
<style>body{margin:0;padding:24px;background:var(--bg);color:var(--text)}
.note-doc{max-width:1000px;margin:0 auto}</style>
<script>
  window.loadNotes = function (id, html) {
    document.getElementById('slot').innerHTML = html;
    var v = document.querySelector('.view');
    if (v) v.classList.add('active');
    document.title = 'notes ' + id;
  };
  window.showView = function(){}; window.goToQuizFromNotes = function(){};
  window.jumpTo = function(){};
</script>
</head><body><div id="slot"></div>
<script src="../data/Orals/notes/__FILE__"></script>
</body></html>"""


def shoot(topic, anchor):
    fname = 't%s_notes.js' % topic
    body = PAGE.replace('__FILE__', fname)
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 1180, 'height': 1000}, device_scale_factor=2)
        pg = ctx.new_page()
        pg.route('**/app/_notes.html', lambda r: r.fulfill(
            status=200, body=body, content_type='text/html; charset=utf-8'))
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)[:200]))
        pg.goto(BASE + '/_notes.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(600)

        ok = pg.evaluate("!!document.getElementById('%s')" % anchor)
        if not ok:
            print('  T%s: anchor %s NOT in the rendered DOM' % (topic, anchor))
            br.close(); return
        for t in THEMES:
            pg.evaluate("t => document.documentElement.setAttribute('data-theme', t)", t)
            pg.wait_for_timeout(250)
            pg.evaluate("id => document.getElementById(id).scrollIntoView({block:'start'})", anchor)
            pg.wait_for_timeout(200)
            pg.screenshot(path=os.path.join(OUT, 'notes-t%s-%s.png' % (topic, t)))
        # Are the tables actually styled?
        info = pg.evaluate("""() => {
          const t = document.querySelector('table');
          if (!t) return 'no table';
          const cs = getComputedStyle(t);
          const th = t.querySelector('th');
          const hl = document.querySelector('.hl');
          return {cls: t.className, border: cs.border, radius: cs.borderRadius,
                  thBg: th ? getComputedStyle(th).backgroundColor : '-',
                  hlColor: hl ? getComputedStyle(hl).color : 'no .hl'};
        }""")
        print('  T%s  %s' % (topic, info))
        if errs: print('  T%s page errors: %s' % (topic, errs))
        br.close()


def lint(topic):
    """Bare <table> is the trap this tool exists for. The house class is
    n-table, and .hl/.ok/.bad are scoped underneath it, so a bare table loses
    its border, its header styling AND every highlight inside it. 327 of the
    328 tables in this course carry the class; one without it is a mistake."""
    p = os.path.join(ROOT, 'data', 'Orals', 'notes', 't%s_notes.js' % topic)
    s = io.open(p, encoding='utf-8').read()
    if s.lstrip().startswith('{"v":1'):
        return 'encrypted. Decrypt it first to lint or render.'
    bare = s.count('<table>')
    return ('BARE <table> x%d, needs class="n-table"' % bare) if bare else 'tables ok'


if __name__ == '__main__':
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        print('usage:  python _notes_visual.py 06:s-hart-onboard 15:s-fire-onboard')
        print('        python _notes_visual.py 06        (lint only)')
        raise SystemExit(0)
    for a in args:
        topic, _, anchor = a.partition(':')
        print('T%s  %s' % (topic, lint(topic)))
        if anchor:
            shoot(topic, anchor)
    print('\nwritten to', OUT)

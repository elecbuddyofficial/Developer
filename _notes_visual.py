# -*- coding: utf-8 -*-
"""Render a decrypted topic notes file against the real stylesheet.

This is the gap that let the bare <table> bug ship. _visual.py cannot reach a
notes view: index.html needs a session and the content needs a key, so every
check so far has been structural (does it parse, do the anchors match) and
never visual. The notes are plaintext during an edit, which is exactly the
window in which they can be looked at.

    python _notes_visual.py 06                 lint only, no browser
    python _notes_visual.py 06:s-hart-onboard  lint and render that section

IT USED TO NEED A SERVER AND NEVER SAID SO. The harness page is fulfilled by
Playwright's router, so `goto` succeeded whether or not anything was listening
on port 8123. The stylesheet and the notes file are ordinary relative requests,
so without a server they quietly failed, the page came up empty, and the tool
printed "anchor NOT in the rendered DOM" and then "written to _visual-shots"
having written nothing. That reads like a finding about the notes when it is a
finding about the harness. It now serves the files itself, reports any request
that failed, and exits non-zero when it could not render, so a silent miss
cannot be mistaken for a clean run.
"""
import contextlib
import functools
import http.server
import io
import os
import socket
import sys
import threading
import urllib.request
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, '_visual-shots')
os.makedirs(OUT, exist_ok=True)
THEMES = ['dark', 'light']
PREFERRED_PORT = 8123

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


def _already_serving(port):
    """True only if something on this port is serving THIS repo. A server on
    another folder would answer 200 for nothing we need and send us back to
    the same empty page the tool used to produce."""
    try:
        with urllib.request.urlopen('http://127.0.0.1:%d/app/style.css' % port, timeout=1.5) as r:
            return r.status == 200
    except Exception:
        return False


def _free_port():
    with contextlib.closing(socket.socket()) as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


@contextlib.contextmanager
def server():
    """Serve the repo, reusing a server that is already up on the usual port."""
    if _already_serving(PREFERRED_PORT):
        yield 'http://127.0.0.1:%d' % PREFERRED_PORT
        return
    port = _free_port()

    class Quiet(http.server.SimpleHTTPRequestHandler):
        # Subclassed rather than setting log_message on a functools.partial,
        # which silently does nothing and leaves every request logged to stdout.
        def log_message(self, *a, **k):
            pass

    handler = functools.partial(Quiet, directory=ROOT)
    httpd = http.server.ThreadingHTTPServer(('127.0.0.1', port), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    try:
        yield 'http://127.0.0.1:%d' % port
    finally:
        httpd.shutdown()


def shoot(topic, anchor, base):
    fname = 't%s_notes.js' % topic
    body = PAGE.replace('__FILE__', fname)
    written = []
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 1180, 'height': 1000}, device_scale_factor=2)
        pg = ctx.new_page()
        pg.route('**/app/_notes.html', lambda r: r.fulfill(
            status=200, body=body, content_type='text/html; charset=utf-8'))
        errs, failed = [], []
        pg.on('pageerror', lambda e: errs.append(str(e)[:200]))
        pg.on('requestfailed', lambda r: failed.append(r.url.rsplit('/', 1)[-1]))
        pg.on('response', lambda r: failed.append('%s -> HTTP %d' % (r.url.rsplit('/', 1)[-1], r.status))
              if r.status >= 400 else None)
        pg.goto(base + '/app/_notes.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(600)

        loaded = pg.evaluate("document.getElementById('slot').children.length > 0")
        if not loaded:
            # The harness failed, not the notes. Say which, and say it loudly.
            print('  T%s  COULD NOT RENDER: the page loaded but no notes content arrived.' % topic)
            if failed:
                print('        requests that failed: %s' % ', '.join(sorted(set(failed))[:6]))
            if errs:
                print('        page errors: %s' % errs[:2])
            print('        Is %s decrypted? An encrypted file is not valid JS.' % fname)
            br.close()
            return False

        if not pg.evaluate("!!document.getElementById('%s')" % anchor):
            have = pg.evaluate("[...document.querySelectorAll('[id^=s-]')].map(e => e.id).slice(0, 12)")
            print('  T%s  anchor %s is not in this topic. Present: %s' % (topic, anchor, ', '.join(have)))
            br.close()
            return False

        for t in THEMES:
            pg.evaluate("t => document.documentElement.setAttribute('data-theme', t)", t)
            pg.wait_for_timeout(250)
            pg.evaluate("id => document.getElementById(id).scrollIntoView({block:'start'})", anchor)
            pg.wait_for_timeout(200)
            path = os.path.join(OUT, 'notes-t%s-%s.png' % (topic, t))
            pg.screenshot(path=path)
            written.append(os.path.basename(path))
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
        if info != 'no table' and 'n-table' not in (info.get('cls') or ''):
            print('  T%s  the first table resolved WITHOUT the n-table class' % topic)
        if errs:
            print('  T%s page errors: %s' % (topic, errs))
        print('  T%s  wrote %s' % (topic, ', '.join(written)))
        br.close()
    return True


def lint(topic):
    """Bare <table> is the trap this tool exists for. The house class is
    n-table, and .hl/.ok/.bad are scoped underneath it, so a bare table loses
    its border, its header styling AND every highlight inside it. 327 of the
    328 tables in this course carry the class; one without it is a mistake."""
    p = os.path.join(ROOT, 'data', 'Orals', 'notes', 't%s_notes.js' % topic)
    if not os.path.exists(p):
        return 'no such topic file'
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

    problems = rendered = 0
    wants_render = any(':' in a for a in args)
    with (server() if wants_render else contextlib.nullcontext(None)) as base:
        for a in args:
            topic, _, anchor = a.partition(':')
            verdict = lint(topic)
            print('T%s  %s' % (topic, verdict))
            if verdict.startswith('BARE') or verdict.startswith('encrypted') or verdict.startswith('no such'):
                problems += 1
                continue
            if anchor:
                if shoot(topic, anchor, base):
                    rendered += 1
                else:
                    problems += 1

    # Only claim to have written something when something was written. The old
    # version printed this line unconditionally, which is how a run that
    # rendered nothing still read like a successful one.
    if rendered:
        print('\n%d screenshot set(s) in %s' % (rendered, OUT))
    if problems:
        print('%d topic(s) could not be checked or failed the lint.' % problems)
        raise SystemExit(1)

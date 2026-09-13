# -*- coding: utf-8 -*-
"""Does every control have room for its own text?

Blesson's iOS screenshots showed the bottom of every dropdown's text cut off.
The cause was arithmetic, not a WebKit quirk, which matters because it means it
can be measured rather than guessed at:

  .ad-input:not(.ad-textarea), .ad-select   height: 39px, line-height: 1.35
  @media (max-width: 768px)                 font-size: 16px, padding: 11px

The mobile block raised the font and the padding and left the height alone. A
39px border-box minus 22px of padding and 3px of border leaves 14px of room for
a 21.6px line, so every field and dropdown on a phone rendered with its text
sliced across the bottom.

The same sweep found a second one nobody had reported: three textareas carry
.ad-input without .ad-textarea, so the same 39px was overriding rows="8" and
rendering an eight-line paste box one line tall.

A contrast checker cannot see either. The colours are perfect; there is simply
not enough room, and nothing errors.

  python audits/text_fits.py
"""
import os, subprocess, sys, time, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, os.pardir))
PORT = 8187

PAGES = [
    ('admin',       'app/admin/index.html'),
    ('app',         'app/index.html'),
    ('sponsorship', 'app/sponsorship/index.html'),
    ('sign-in',     'app/auth.html'),
]
WIDTHS = [('phone 390', 390, 844), ('phone 360', 360, 800),
          ('tablet 768', 768, 1024), ('desktop 1440', 1440, 900)]

BASE = 'http://127.0.0.1:%d/' % PORT


def up():
    try:
        urllib.request.urlopen(BASE + 'app/index.html', timeout=2); return True
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


def served(rel):
    src = open(os.path.join(ROOT, rel), encoding='utf-8').read()
    # These pages redirect to sign-in without a session. Replaced rather than
    # forging a session: nothing here needs to be signed in to be measured.
    return src.replace("window.location.replace('../auth.html');", "console.warn('x');") \
              .replace("window.location.replace('./auth.html');", "console.warn('x');") \
              .replace("window.location.replace('auth.html');", "console.warn('x');")


def mk(b):
    def s(route):
        route.fulfill(status=200, body=b, content_type='text/html; charset=utf-8')
    return s


MEASURE = r"""
() => {
  document.documentElement.style.visibility = 'visible';
  const out = [];

  /* Arithmetic, applied only where the box actually clips.

     Three approaches were tried and only this one both finds the real bug and
     stays quiet on things that are fine:

       scrollHeight vs clientHeight   found nothing. A <select> clips inside its
                                      native widget, so the text is cut off on
                                      screen while scrollHeight stays equal to
                                      clientHeight.
       height:auto and re-measure     found nothing either, for the same reason:
                                      a native select does not grow when you
                                      free its height.
       height minus padding vs line   finds it, and its single false positive
                                      was a sign-in tab - a <button> whose
                                      height comes from its own padding and
                                      whose overflow is visible, so it cannot
                                      clip whatever the numbers say.

     So the arithmetic is kept and the scope is narrowed on a principle rather
     than a threshold: a form control always clips its own text, and anything
     else clips only if its overflow says so. A button with visible overflow is
     excluded because it genuinely cannot cut text off. */
  const FORM = ['INPUT', 'SELECT', 'TEXTAREA'];
  document.querySelectorAll('input, select, textarea, button, .ad-btn').forEach(n => {
    const cs = getComputedStyle(n);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    if (['checkbox', 'radio', 'range', 'color', 'file', 'hidden'].includes(n.type)) return;

    const clips = FORM.includes(n.tagName)
               || ['hidden', 'clip', 'auto', 'scroll'].includes(cs.overflowY);
    if (!clips) return;

    const fs = parseFloat(cs.fontSize);
    const lh = cs.lineHeight === 'normal' ? fs * 1.2 : parseFloat(cs.lineHeight);
    const room = parseFloat(cs.height)
               - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
               - parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomWidth);
    if (!isFinite(room) || !isFinite(lh)) return;

    const rows = n.tagName === 'TEXTAREA' ? (parseInt(n.rows, 10) || 2) : 1;
    const needed = lh * rows;
    if (room >= needed - 1) return;

    out.push({
      what: n.tagName.toLowerCase() + (n.id ? '#' + n.id : '')
            + (n.className && typeof n.className === 'string'
               ? '.' + n.className.trim().split(/\s+/)[0] : ''),
      height: cs.height, font: cs.fontSize, rows,
      room: Math.round(room * 10) / 10, needed: Math.round(needed * 10) / 10,
      short: Math.round((needed - room) * 10) / 10
    });
  });

  const seen = new Set();
  return out.filter(o => {
    const k = o.what + o.height + o.font;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
"""

from playwright.sync_api import sync_playwright

problems = 0
try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        for label, rel in PAGES:
            body = served(rel)
            for wlabel, w, h in WIDTHS:
                ctx = br.new_context(viewport={'width': w, 'height': h})
                pg = ctx.new_page()
                pg.route('**/' + rel.split('/')[-1], mk(body))
                pg.goto(BASE + rel)
                pg.wait_for_load_state('domcontentloaded')
                pg.wait_for_timeout(400)
                rows = pg.evaluate(MEASURE)
                if rows:
                    problems += len(rows)
                    print('')
                    print('  %s at %s' % (label, wlabel))
                    print('  ' + '-' * 66)
                    for r in rows:
                        print('   %-28s %s tall: %spx of room for %spx of text (%spx cut off)'
                              % (r['what'][:28], r['height'], r['room'], r['needed'], r['short']))
                ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
if problems:
    print('  %d control(s) too short for their own text.' % problems)
    print('')
    print('  Usually a fixed height that a later rule outgrew. Prefer min-height,')
    print('  so a larger accessibility font cannot bring the clipping back.')
else:
    print('  Every control has room for its text, at every width tested.')
sys.exit(1 if problems else 0)

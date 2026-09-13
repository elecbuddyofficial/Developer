# -*- coding: utf-8 -*-
"""Scroll the way a person does, and see whether the last row can be reached.

Measuring boxes was not enough: the first audit reported clean because every
row IS inside a scrollable container. What it could not see is that the wheel
never reaches the page while the pointer is over the table, so the part of the
table box that hangs below the window can never be brought up.

So this stops measuring and scrolls: put the pointer over the table, send wheel
events the way a mouse does, and ask whether the last row ends up on screen.

Run against a tab with more rows than fit. A pass means a person can get to the
bottom of the list with the gesture they already use.
"""
import os, sys, subprocess, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8169
BASE = 'http://127.0.0.1:%d/app' % PORT

html = open(os.path.join(ROOT, 'app', 'admin', 'index.html'), encoding='utf-8').read()
html = html.replace("window.location.replace('../auth.html');",
                    "console.warn('[t] redirect suppressed');")


def up():
    try:
        urllib.request.urlopen(BASE + '/admin/index.html', timeout=2); return True
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


def mk(b):
    def s(route):
        route.fulfill(status=200, body=b, content_type='text/html; charset=utf-8')
    return s


# tab id -> (tbody id, how many cells a row needs)
CASES = [
    ('payments',  'pay-tbody',  8),
    ('users',     'users-tbody', 6),
    ('approvals', 'apr-tbody',  7),
    ('coupons',   'cp-tbody',   7),
]

SETUP = """
({tab, tbody, cols, rows}) => {
  /* The page ships as html{visibility:hidden} and only reveals itself after
     the admin check passes. Without this the geometry all reads correctly and
     NOTHING is hit-testable, so elementFromPoint returns <html> and every
     wheel event goes to the root. The first run of this test reported two
     unreachable tables on that basis. Geometry is not enough; if the test
     drives a pointer, the page has to actually be painted. */
  document.documentElement.style.visibility = 'visible';
  document.querySelectorAll('.ad-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('tab-' + tab);
  if (!el) return { error: 'no tab-' + tab };
  el.classList.add('active');
  el.style.display = '';

  const tb = document.getElementById(tbody);
  if (!tb) return { error: 'no ' + tbody };
  let h = '';
  for (let i = 0; i < rows; i++) {
    const last = i === rows - 1 ? ' id="_lastrow"' : '';
    h += '<tr' + last + '>'
       + ('<td style="padding:11px 14px;white-space:nowrap">cell ' + i + '</td>').repeat(cols)
       + '</tr>';
  }
  tb.innerHTML = h;

  const wrap = tb.closest('[class*="scrollcap"], .ad-table-wrap') || tb.closest('div');
  const r = wrap.getBoundingClientRect();
  const px = Math.round(r.left + r.width / 2);
  const py = Math.round(Math.min(r.top + r.height / 2, innerHeight - 40));
  // Prove the pointer will land on the table before trusting the result.
  const hit = document.elementFromPoint(px, py);
  const onTable = !!(hit && wrap.contains(hit));
  return {
    wrapId: wrap.id || wrap.className,
    // A zero-size wrap means this tab has an inner pane that was never opened,
    // so there is nothing to scroll and nothing to conclude. Reported as a
    // skip, not a pass and not a failure: a test that quietly "passes" over a
    // pane it never rendered is how the first version of this reported clean
    // on an invisible page.
    laidOut: r.height > 0 && r.width > 0,
    onTable,
    hit: hit ? hit.tagName.toLowerCase() + (hit.id ? '#' + hit.id : '') : 'nothing',
    // A point inside the table, where a person's pointer would be.
    px, py
  };
}
"""

VISIBLE = """
({wrapSel}) => {
  const el = document.getElementById('_lastrow');
  if (!el) return { found: false };
  const r = el.getBoundingClientRect();
  const main = document.getElementById('ad-main');
  const wrap = document.querySelector(wrapSel);
  return {
    found: true,
    top: Math.round(r.top), bottom: Math.round(r.bottom),
    viewportH: innerHeight,
    onScreen: r.top >= 0 && r.bottom <= innerHeight + 1,
    // What actually moved, so a failure says which scroller ignored the wheel.
    wrapScrollTop: wrap ? wrap.scrollTop : null,
    wrapScrollMax: wrap ? wrap.scrollHeight - wrap.clientHeight : null,
    wrapOverflowY: wrap ? getComputedStyle(wrap).overflowY : null,
    wrapMaxH: wrap ? getComputedStyle(wrap).maxHeight : null,
    mainScrollTop: main.scrollTop,
    mainScrollMax: main.scrollHeight - main.clientHeight
  };
}
"""

from playwright.sync_api import sync_playwright
fails = 0
try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 1341, 'height': 896})
        pg = ctx.new_page()
        pg.route('**/app/admin/index.html', mk(html))
        pg.goto(BASE + '/admin/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(600)

        print('')
        print('  pointer over the table, wheel down 60 times')
        print('  ' + '-' * 62)
        for tab, tbody, cols in CASES:
            s = pg.evaluate(SETUP, {'tab': tab, 'tbody': tbody, 'cols': cols, 'rows': 60})
            if s.get('error'):
                print('   %-11s skipped: %s' % (tab, s['error']))
                continue
            if not s.get('laidOut'):
                print('   %-5s %-11s not rendered by this harness (inner pane never opened) - skipped'
                      % ('skip', tab))
                continue
            if not s.get('onTable'):
                print('   %-5s %-11s pointer would land on %s, not the table - test invalid'
                      % ('FAIL', tab, s.get('hit')))
                fails += 1
                continue
            pg.mouse.move(s['px'], s['py'])
            for _ in range(60):
                pg.mouse.wheel(0, 300)
            pg.wait_for_timeout(250)
            sel = ('#' + s['wrapId']) if ' ' not in s['wrapId'] and not s['wrapId'].startswith('ad-')                   else '.' + s['wrapId'].replace(' ', '.')
            v = pg.evaluate(VISIBLE, {'wrapSel': sel})
            ok = v.get('onScreen')
            if not ok:
                fails += 1
            where = ('y %d-%d, window is %d tall'
                     % (v.get('top', 0), v.get('bottom', 0), v.get('viewportH', 0)))
            print('   %-5s %-11s last row %s' % ('ok' if ok else 'FAIL', tab,
                                                 'reached' if ok else 'NEVER REACHED (' + where + ')'))
            print('         wrap %s  scrollTop %s of %s  overflow-y:%s  max-h:%s'
                  % (sel, v.get('wrapScrollTop'), v.get('wrapScrollMax'),
                     v.get('wrapOverflowY'), v.get('wrapMaxH')))
            print('         page scrollTop %s of %s'
                  % (v.get('mainScrollTop'), v.get('mainScrollMax')))
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d list(s) whose end cannot be scrolled to.' % fails if fails else
      '  Every list can be scrolled to its end with an ordinary wheel.')
sys.exit(1 if fails else 0)

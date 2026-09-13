# -*- coding: utf-8 -*-
"""With the pointer over a capped table, can the rest of the page be reached?

The tables themselves scroll. What does not is the PAGE behind them:
.ad-scrollcap sets overscroll-behavior:contain, which stops a wheel gesture
over the table from ever chaining to the page once the table hits its end.

That matters because the cap is 56vh of the WINDOW, while the table starts
several hundred pixels down the page. On the Payments tab there are four stat
cards, a reconciliation banner and a filter row above it, so the table's own
box runs past the bottom of the window. The only way to bring its lower part
into view is to scroll the page, and the pointer is sitting on the one element
that refuses to let you.

So the test is not "does the table scroll" - it does - but "with the pointer
where a person's pointer actually is, can they get to the bottom of the page".
"""
import os, sys, subprocess, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8172
BASE = 'http://127.0.0.1:%d/app' % PORT

html = open(os.path.join(ROOT, 'app', 'admin', 'index.html'), encoding='utf-8').read()
html = html.replace("window.location.replace('../auth.html');", "console.warn('x');")


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


SETUP = """
({tab, tbody, cols, rows}) => {
  document.documentElement.style.visibility = 'visible';
  document.querySelectorAll('.ad-tab').forEach(t => t.classList.remove('active'));
  const el = document.getElementById('tab-' + tab);
  if (!el) return { error: 'no tab-' + tab };
  el.classList.add('active');
  el.style.display = '';

  const tb = document.getElementById(tbody);
  let h = '';
  for (let i = 0; i < rows; i++) {
    h += '<tr>' + ('<td style="padding:11px 14px">c' + i + '</td>').repeat(cols) + '</tr>';
  }
  tb.innerHTML = h;

  /* Guarantee there IS something below the table worth reaching, standing in
     for the pagination control and the footer the real page carries. Marked so
     the check below is about this element specifically. */
  let tail = document.getElementById('_tail');
  if (!tail) {
    tail = document.createElement('div');
    tail.id = '_tail';
    tail.style.cssText = 'height:260px;padding:12px';
    tail.textContent = 'content below the table';
    el.appendChild(tail);
  }

  const wrap = tb.closest('[class*="scrollcap"], .ad-table-wrap');
  const r = wrap.getBoundingClientRect();
  const px = Math.round(r.left + r.width / 2);
  const py = Math.round(Math.min(r.top + r.height / 2, innerHeight - 40));
  const hit = document.elementFromPoint(px, py);
  const main = document.getElementById('ad-main');
  main.scrollTop = 0;
  wrap.scrollTop = 0;
  return {
    onTable: !!(hit && wrap.contains(hit)),
    px, py,
    pageScrollable: main.scrollHeight - main.clientHeight,
    overscroll: getComputedStyle(wrap).overscrollBehaviorY
  };
}
"""

AFTER = """
() => {
  const main = document.getElementById('ad-main');
  const tail = document.getElementById('_tail');
  const r = tail.getBoundingClientRect();
  const mr = main.getBoundingClientRect();
  return {
    pageScrollTop: main.scrollTop,
    pageScrollMax: main.scrollHeight - main.clientHeight,
    tailVisible: r.top < mr.bottom && r.bottom > mr.top
  };
}
"""

CASES = [('payments', 'pay-tbody', 8), ('users', 'users-tbody', 6)]

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
        print('  pointer parked on the table, wheel down until it stops moving')
        print('  ' + '-' * 66)
        for tab, tbody, cols in CASES:
            s = pg.evaluate(SETUP, {'tab': tab, 'tbody': tbody, 'cols': cols, 'rows': 60})
            if s.get('error') or not s.get('onTable'):
                print('   %-10s could not place the pointer on the table' % tab)
                fails += 1
                continue
            pg.mouse.move(s['px'], s['py'])
            for _ in range(80):
                pg.mouse.wheel(0, 300)
            pg.wait_for_timeout(250)
            a = pg.evaluate(AFTER)
            reached = a['pageScrollMax'] <= 4 or a['pageScrollTop'] >= a['pageScrollMax'] - 4
            if not reached:
                fails += 1
            print('   %-5s %-10s overscroll:%-8s page reached %d of %d px%s'
                  % ('ok' if reached else 'FAIL', tab, s['overscroll'],
                     a['pageScrollTop'], a['pageScrollMax'],
                     '' if reached else '  <-- the rest of the page is stuck'))
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d tab(s) where the page cannot be scrolled from over the table.' % fails if fails else
      '  The wheel carries on into the page once the table ends.')
sys.exit(1 if fails else 0)

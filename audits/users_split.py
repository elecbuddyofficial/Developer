# -*- coding: utf-8 -*-
"""Does the Users tab show a Sponsorship customer's access as its own line?

Blesson's question: is the purchase shown divided between the two courses. It
was not. The expiry cell had a line for Written and a line for Oral and nothing
for Sponsorship, so a Sponsorship customer fell through to
subscription_expires_at - a single mirror of whichever purchase happened most
recently in ANY scope - and one holding Sponsorship alongside COC had their
Sponsorship omitted entirely behind the two COC lines.

Each case below is a real shape a customer can be in.
"""
import os, sys, subprocess, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8175
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


DRIVE = """
({u}) => {
  if (typeof expiryDisplay !== 'function') return { error: 'expiryDisplay not reachable' };
  const box = document.createElement('div');
  box.innerHTML = expiryDisplay(u.subscription_expires_at, u.subscription_plan,
                                u.trial_started_at, u);
  const txt = box.textContent.replace(/\\s+/g, ' ').trim();
  return {
    text: txt,
    lines: [...box.querySelectorAll('.exp-line')].map(e => e.textContent.replace(/\\s+/g,' ').trim()),
    scopes: typeof adminLiveScopes === 'function' ? adminLiveScopes(u, new Date()) : null
  };
}
"""

import datetime as _dt
FUT = '2027-03-01T00:00:00Z'
PAST = '2026-06-01T00:00:00Z'
# Started an hour ago, so the 3-day trial is unambiguously running.
NOWISH = (_dt.datetime.now(_dt.timezone.utc) - _dt.timedelta(hours=1)
          ).strftime('%Y-%m-%dT%H:%M:%SZ')

CASES = [
    ('Sponsorship only, live',
     {'subscription_plan': '6mo', 'trial_started_at': PAST,
      'subscription_expires_at': FUT, 'written_expires_at': None,
      'oral_expires_at': None, 'sponsorship_expires_at': FUT},
     ['Sponsorship'], ['Written', 'Oral']),

    ('Sponsorship AND CoC, both live',
     {'subscription_plan': '12mo', 'trial_started_at': PAST,
      'subscription_expires_at': FUT, 'written_expires_at': FUT,
      'oral_expires_at': FUT, 'sponsorship_expires_at': FUT},
     ['Written', 'Oral', 'Sponsorship'], []),

    ('CoC live, Sponsorship lapsed',
     {'subscription_plan': '12mo', 'trial_started_at': PAST,
      'subscription_expires_at': FUT, 'written_expires_at': FUT,
      'oral_expires_at': None, 'sponsorship_expires_at': PAST},
     ['Written', 'Sponsorship'], ['Oral']),

    ('CoC only, no Sponsorship at all',
     {'subscription_plan': '12mo', 'trial_started_at': PAST,
      'subscription_expires_at': FUT, 'written_expires_at': FUT,
      'oral_expires_at': FUT, 'sponsorship_expires_at': None},
     ['Written', 'Oral'], ['Sponsorship']),

    # The regression shipped in v283: a LIVE trial grants every scope, so asking
    # deriveAccess "do they hold anything" answered yes and skipped the branch
    # that names the trial, printing a bare "-" instead. Six of the seven rows
    # on Blesson's screen were this.
    ('trial running, nothing bought',
     {'subscription_plan': 'trial', 'trial_started_at': NOWISH,
      'subscription_expires_at': None, 'written_expires_at': None,
      'oral_expires_at': None, 'sponsorship_expires_at': None},
     ['Trial until'], ['Sponsorship', 'Written']),

    ('trial expired, nothing bought',
     {'subscription_plan': 'trial', 'trial_started_at': PAST,
      'subscription_expires_at': None, 'written_expires_at': None,
      'oral_expires_at': None, 'sponsorship_expires_at': None},
     ['Trial expired'], ['Sponsorship', 'Written']),

    # A comped account keeps plan 'trial'; the grant must still win.
    ('trial plan, Sponsorship granted',
     {'subscription_plan': 'trial', 'trial_started_at': PAST,
      'subscription_expires_at': None, 'written_expires_at': None,
      'oral_expires_at': None, 'sponsorship_expires_at': FUT},
     ['Sponsorship'], ['Trial expired']),

    ('lifetime',
     {'subscription_plan': 'lifetime', 'trial_started_at': PAST,
      'subscription_expires_at': None, 'written_expires_at': None,
      'oral_expires_at': None, 'sponsorship_expires_at': None},
     ['Lifetime'], ['Written', 'Sponsorship']),
]

from playwright.sync_api import sync_playwright
fails = 0
try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 1440, 'height': 900})
        pg = ctx.new_page()
        pg.route('**/app/admin/index.html', mk(html))
        pg.goto(BASE + '/admin/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(600)

        print('')
        for name, u, must, must_not in CASES:
            r = pg.evaluate(DRIVE, {'u': u})
            if r.get('error'):
                print('  FAIL %s: %s' % (name, r['error']))
                fails += 1
                continue
            bad = [w for w in must if w not in r['text']]
            extra = [w for w in must_not if w in r['text']]
            good = not bad and not extra
            if not good:
                fails += 1
            print('  %-5s %-34s %s' % ('ok' if good else 'FAIL', name, r['text'][:78]))
            if r['scopes'] is not None:
                print('        access now: %s' % (', '.join(r['scopes']) or 'none'))
            for w in bad:
                print('        FAIL: "%s" is missing' % w)
            for w in extra:
                print('        FAIL: "%s" should not appear' % w)
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d problem(s).' % fails if fails else
      '  Every course a customer holds is shown on its own line, with its own date.')
sys.exit(1 if fails else 0)

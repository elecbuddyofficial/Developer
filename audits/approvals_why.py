# -*- coding: utf-8 -*-
"""Does the approvals queue now say WHY an account is held?

The page asserted one reason for every row: "Accounts on unrecognised mail
providers". mehulimurao1412@gmail.com was held for an entirely different
reason, and sat under that heading beside a badge reading REAL PROVIDER. The
page contradicted itself and named nothing, so the only reading left was that
the person was cheating. They were not: a different person had signed up from
the same mobile network a month earlier.

Two reasons, two explanations, and the action that only makes sense for one of
them offered only for that one.
"""
import os, sys, subprocess, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8165
BASE = 'http://127.0.0.1:%d/app' % PORT

html = open(os.path.join(ROOT, 'app', 'admin', 'index.html'), encoding='utf-8').read()
assert html.count("window.location.replace('../auth.html');") >= 3
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


# The two shapes, using the real production row for the one that matters.
DRIVE = """
({rows, heldMap}) => {
  if (typeof aprRow !== 'function') return { error: 'aprRow not reachable' };
  window._aprHeld = heldMap;
  const out = {};
  for (const r of rows) {
    const tr = document.createElement('table');
    tr.innerHTML = '<tbody>' + aprRow(r) + '</tbody>';
    const txt = tr.textContent.replace(/\\s+/g, ' ').trim();
    out[r.email] = {
      text: txt,
      cells: tr.querySelectorAll('tbody tr > td').length,
      hasDomainBtn: /Approve \\+ domain/.test(tr.textContent),
      hasApprove: /Approve/.test(tr.textContent)
    };
  }
  return out;
}
"""

ROWS = [
    {'id': 'a1aad783-b423-41c9-82c4-6ac26ac8ff03', 'email': 'mehulimurao1412@gmail.com',
     'full_name': 'mehuli murai', 'domain': 'gmail.com', 'domain_accounts': 163,
     'created_at': '2026-09-12T08:38:52Z', 'signup_status': 'pending'},
    {'id': 'zz-domain-case', 'email': 'cadet@somecollege.edu.in',
     'full_name': 'A Cadet', 'domain': 'somecollege.edu.in', 'domain_accounts': 1,
     'created_at': '2026-09-12T09:00:00Z', 'signup_status': 'pending'},
]
HELD = {'a1aad783-b423-41c9-82c4-6ac26ac8ff03':
        {'ip': '103.88.76.94', 'other': {'email': 'abiram.a200415@gmail.com',
                                         'full_name': 'A Abiram'}}}

from playwright.sync_api import sync_playwright
fails = 0


def check(label, good, detail=''):
    global fails
    print('  ' + ('ok   ' if good else 'FAIL ') + label + ('' if good or not detail else '\n         ' + detail))
    if not good:
        fails += 1


try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 1440, 'height': 900})
        pg = ctx.new_page()
        pg.route('**/app/admin/index.html', mk(html))
        errs = []
        pg.on('pageerror', lambda e, s=errs: s.append(str(e)[:160]))
        pg.goto(BASE + '/admin/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(700)

        r = pg.evaluate(DRIVE, {'rows': ROWS, 'heldMap': HELD})
        if r.get('error'):
            check('the row renderer ran', False, r['error'])
        else:
            ip = r['mehulimurao1412@gmail.com']
            dom = r['cadet@somecollege.edu.in']

            print('')
            print('  the account held for a shared connection')
            print('  ' + '-' * 66)
            check('is labelled a shared connection', 'shared connection' in ip['text'])
            check('is NOT labelled a mail-provider problem',
                  'mail provider' not in ip['text'], ip['text'][:160])
            check('names the other account, so it can be checked',
                  'abiram.a200415@gmail.com' in ip['text'], ip['text'][:160])
            check('says plainly it is not a second signup on the same address',
                  'not a second signup on this address' in ip['text'], ip['text'][:200])
            check('does NOT offer "Approve + domain", which would do nothing here',
                  not ip['hasDomainBtn'])
            check('still offers Approve', ip['hasApprove'])

            print('')
            print('  the account held for its mail provider')
            print('  ' + '-' * 66)
            check('is labelled a mail-provider hold', 'mail provider' in dom['text'])
            check('is NOT labelled a shared connection',
                  'shared connection' not in dom['text'], dom['text'][:160])
            check('DOES offer "Approve + domain"', dom['hasDomainBtn'])

            print('')
            print('  table shape')
            print('  ' + '-' * 66)
            check('both rows have the same number of cells as the header (7)',
                  ip['cells'] == 7 and dom['cells'] == 7,
                  'ip=%s domain=%s' % (ip['cells'], dom['cells']))

        # The page must no longer claim a single reason for the whole queue.
        body = pg.evaluate("() => document.getElementById('tab-approvals').textContent.replace(/\\s+/g,' ')")
        print('')
        print('  the page heading')
        print('  ' + '-' * 66)
        check('no longer says the queue is only unrecognised providers',
              'Accounts on unrecognised mail providers' not in body)
        check('explains the shared-connection reason too',
              'Shared internet connection' in body)
        check('states that an email cannot be reused',
              'Nobody can reuse an email address' in body)

        print('')
        print('  page errors: %s' % (errs or 'none'))
        if errs:
            fails += 1
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d problem(s).' % fails if fails else
      '  Every held account now says why, and the two reasons cannot be confused.')
sys.exit(1 if fails else 0)

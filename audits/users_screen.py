# -*- coding: utf-8 -*-
"""The Users screen after three changes Blesson asked for.

  1. a live trial must say so. Six of the seven rows on his screen showed a
     bare "-", a regression shipped in v283: a running trial grants every
     scope, so asking "does this account hold anything" answered yes and
     skipped the branch that names the trial.
  2. a Course column, because nothing on that screen told a Sponsorship reader
     from a COC one.
  3. icon-only actions, to give the row back the width column 3 takes.

The mobile captions are checked too. They were nth-child rules, so inserting a
column relabelled every cell after it.
"""
import os, sys, subprocess, time, urllib.request, datetime as dt
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8177
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


NOWISH = (dt.datetime.now(dt.timezone.utc) - dt.timedelta(hours=1)).strftime('%Y-%m-%dT%H:%M:%SZ')
PAST = '2026-06-01T00:00:00Z'
FUT = '2027-03-01T00:00:00Z'

# The real rows from Blesson's screenshot, plus the shapes they do not cover.
USERS = [
    {'id': 'u1', 'email': 'opawan23@gmail.com', 'full_name': 'Pawan Oza',
     'subscription_plan': 'trial', 'trial_started_at': NOWISH, 'created_at': NOWISH,
     'default_track': 'sponsorship', 'topic_progress': None, 'sponsorship_progress': None},
    {'id': 'u2', 'email': 'mehulimurao1412@gmail.com', 'full_name': 'mehuli murai',
     'subscription_plan': 'trial', 'trial_started_at': NOWISH, 'created_at': NOWISH,
     'default_track': 'coc', 'topic_progress': None, 'sponsorship_progress': None},
    {'id': 'u3', 'email': 'pratikdas201721@gmail.com', 'full_name': 'Pratik Das',
     'subscription_plan': 'trial', 'trial_started_at': PAST, 'created_at': PAST,
     'default_track': 'sponsorship', 'topic_progress': None, 'sponsorship_progress': None},
    {'id': 'u4', 'email': 'buyer@example.com', 'full_name': 'A Buyer',
     'subscription_plan': '6mo', 'trial_started_at': PAST, 'created_at': PAST,
     'sponsorship_expires_at': FUT, 'default_track': None,
     'topic_progress': None, 'sponsorship_progress': None},
    {'id': 'u5', 'email': 'nocourse@example.com', 'full_name': 'No Course',
     'subscription_plan': 'trial', 'trial_started_at': PAST, 'created_at': PAST,
     'default_track': None, 'topic_progress': None, 'sponsorship_progress': None},
    {'id': 'u6', 'email': 'reader@example.com', 'full_name': 'Only Read It',
     'subscription_plan': 'trial', 'trial_started_at': PAST, 'created_at': PAST,
     'default_track': None, 'topic_progress': {'T01': 3}, 'sponsorship_progress': None},
]

DRIVE = """
({users}) => {
  document.documentElement.style.visibility = 'visible';
  if (typeof renderUsers !== 'function') return { error: 'renderUsers not reachable' };
  renderUsers(users);
  const rows = [...document.querySelectorAll('#users-tbody tr')];
  const headers = [...document.querySelectorAll('#tab-users thead th')].map(t => t.textContent.trim());
  return {
    headers,
    rows: rows.map(tr => {
      const tds = [...tr.querySelectorAll('td')];
      return {
        cells: tds.length,
        labels: tds.map(td => td.getAttribute('data-label')),
        course: (tds[2] || {}).textContent ? tds[2].textContent.trim() : '',
        expires: (tds[4] || {}).textContent ? tds[4].textContent.replace(/\\s+/g,' ').trim() : '',
        iconButtons: tr.querySelectorAll('.ad-icon-btn').length,
        textButtons: [...tr.querySelectorAll('button')].filter(b => /View|Edit|Delete/.test(b.textContent)).length,
        labelled: [...tr.querySelectorAll('.ad-icon-btn')].every(b => b.getAttribute('aria-label') && b.getAttribute('title'))
      };
    })
  };
}
"""

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
        pg.goto(BASE + '/admin/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(600)
        r = pg.evaluate(DRIVE, {'users': USERS})

        if r.get('error'):
            check('the users table rendered', False, r['error'])
        else:
            rows = r['rows']
            print('')
            print('  %-30s %-26s %s' % ('account', 'course', 'expires'))
            print('  ' + '-' * 72)
            for u, row in zip(USERS, rows):
                print('  %-30s %-26s %s' % (u['email'][:30], row['course'][:26], row['expires'][:30]))

            print('')
            check('the header carries a Course column', 'Course' in r['headers'], str(r['headers']))
            check('every row has the same cell count as the header',
                  all(x['cells'] == len(r['headers']) for x in rows),
                  'cells: %s vs %d headers' % ([x['cells'] for x in rows], len(r['headers'])))

            print('')
            check('a running trial says so instead of "-"',
                  'Trial until' in rows[0]['expires'] and rows[0]['expires'] != '-',
                  rows[0]['expires'])
            check('an expired trial still says expired', 'Trial expired' in rows[2]['expires'],
                  rows[2]['expires'])
            check('a Sponsorship buyer shows their own line',
                  'Sponsorship' in rows[3]['expires'], rows[3]['expires'])

            print('')
            check('a Sponsorship chooser is marked Sponsorship',
                  'Sponsorship' in rows[0]['course'] and 'CoC' not in rows[0]['course'],
                  rows[0]['course'])
            check('a CoC chooser is marked CoC',
                  'CoC' in rows[1]['course'] and 'Sponsorship' not in rows[1]['course'],
                  rows[1]['course'])
            check('a buyer with no chosen track is marked by what they bought',
                  'Sponsorship' in rows[3]['course'], rows[3]['course'])
            check('an account with no evidence at all is left blank, not guessed',
                  rows[4]['course'] in ('-', ''), rows[4]['course'])
            check('reading a course alone is enough to mark it',
                  'CoC' in rows[5]['course'], rows[5]['course'])

            print('')
            check('actions are icons, not words',
                  all(x['iconButtons'] == 3 and x['textButtons'] == 0 for x in rows),
                  'icons %s, text %s' % ([x['iconButtons'] for x in rows], [x['textButtons'] for x in rows]))
            check('every icon button is named for a screen reader',
                  all(x['labelled'] for x in rows))
            check('mobile captions come from data-label, so a new column cannot shift them',
                  all(None not in x['labels'] for x in rows),
                  str(rows[0]['labels']))

        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d problem(s).' % fails if fails else
      '  Trials read correctly, the course is visible, and the actions fit.')
sys.exit(1 if fails else 0)

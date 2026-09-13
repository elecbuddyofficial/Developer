# -*- coding: utf-8 -*-
"""The Grant Access form, in both consoles.

The logic is tested elsewhere. This checks the part an admin actually touches:
that Lifetime now offers a scope at all, that each console offers only its own
course's scopes, that "Everything (both courses)" appears for Lifetime and for
nothing else, and that a course comped forever reads as "Lifetime" rather than
as the year 2099.
"""
import os, sys, subprocess, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8176
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
({course, plan}) => {
  document.documentElement.style.visibility = 'visible';
  window._adminCourse = course;
  try { _adminCourse = course; } catch (e) {}
  if (typeof applyScopeOptionFilter === 'function') applyScopeOptionFilter();

  const planSel = document.getElementById('grant-plan');
  const scopeSel = document.getElementById('grant-scope');
  if (!planSel || !scopeSel) return { error: 'grant form not found' };
  planSel.value = plan;
  if (typeof grantPlanChanged === 'function') grantPlanChanged();

  const field = document.getElementById('grant-scope-field');
  const visible = [...scopeSel.options]
    .filter(o => !o.hidden && !o.disabled)
    .map(o => o.value);
  return {
    scopeFieldShown: getComputedStyle(field).display !== 'none',
    options: visible,
    selected: scopeSel.value
  };
}
"""

LIFETIME_LINE = """
({iso}) => {
  const u = { subscription_plan: 'trial', trial_started_at: '2020-01-01T00:00:00Z',
              written_expires_at: null, oral_expires_at: null,
              sponsorship_expires_at: iso };
  const box = document.createElement('div');
  box.innerHTML = expiryDisplay(null, 'trial', u.trial_started_at, u);
  return { text: box.textContent.replace(/\\s+/g,' ').trim(),
           counted: typeof hasAnyLifetime === 'function' ? hasAnyLifetime(u) : null };
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
        pg.wait_for_timeout(700)

        print('')
        print('  Grant Access, Sponsorship console')
        print('  ' + '-' * 66)
        r = pg.evaluate(DRIVE, {'course': 'sponsorship', 'plan': 'lifetime'})
        if r.get('error'):
            check('the grant form rendered', False, r['error'])
        else:
            check('Lifetime now offers a scope at all', r['scopeFieldShown'])
            check('it offers Sponsorship', 'sponsorship' in r['options'])
            check('it does NOT offer CoC scopes',
                  not any(o in r['options'] for o in ('written', 'oral', 'both')),
                  str(r['options']))
            check('it offers "Everything (both courses)"', 'everything' in r['options'])

        r = pg.evaluate(DRIVE, {'course': 'sponsorship', 'plan': '6mo'})
        check('a 6-month plan offers no "Everything"', 'everything' not in r['options'],
              str(r['options']))
        check('and still offers Sponsorship', 'sponsorship' in r['options'])

        r = pg.evaluate(DRIVE, {'course': 'sponsorship', 'plan': 'trial'})
        check('Trial offers no scope at all, as before', not r['scopeFieldShown'])

        print('')
        print('  Grant Access, CoC console')
        print('  ' + '-' * 66)
        r = pg.evaluate(DRIVE, {'course': 'coc', 'plan': 'lifetime'})
        check('Lifetime offers the CoC scopes',
              all(o in r['options'] for o in ('written', 'oral', 'both')), str(r['options']))
        check('it does NOT offer Sponsorship', 'sponsorship' not in r['options'], str(r['options']))
        check('it offers "Everything (both courses)"', 'everything' in r['options'])

        print('')
        print('  how a comped course reads in the Users tab')
        print('  ' + '-' * 66)
        r = pg.evaluate(LIFETIME_LINE, {'iso': '2099-12-31T00:00:00.000Z'})
        check('it says Sponsorship Lifetime', 'Sponsorship Lifetime' in r['text'], r['text'])
        check('it does not print the sentinel year', '2099' not in r['text'], r['text'])
        check('the Lifetime pill counts them', r['counted'] is True)

        r = pg.evaluate(LIFETIME_LINE, {'iso': '2027-03-01T00:00:00.000Z'})
        check('an ordinary date still prints as a date', '2027' in r['text'], r['text'])
        check('and is not counted as lifetime', r['counted'] is False)

        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d problem(s).' % fails if fails else
      '  Each console offers only its own course, and Lifetime can be given to one.')
sys.exit(1 if fails else 0)

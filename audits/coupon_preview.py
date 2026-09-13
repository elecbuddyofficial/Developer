# -*- coding: utf-8 -*-
"""Standing in the Sponsorship coupon view, what does the price preview show?

Blesson's report, with a screenshot: the Sponsorship view listed Full COC
Preparation and Oral & Viva alongside the Sponsorship plans.

Hiding them was refused the first time round, and that was right at the time: a
code left on "Any scope" really was spendable on COC, and a preview headed
"what buyers will be charged" that omits half of what they will be charged is
how two 99%-off codes came to reach Sponsorship without anyone realising.

What changed is the coupon, not the display. Every new code now carries
applies_course, stamped from the course tab, and both coupon_reserve and
couponAppliesTo refuse it outside that course. The other course is no longer
hidden here - it is unreachable, and listing it would be the lie.

So the correct answer is now: this course, and nothing else, in either
direction, with or without an explicit scope.
"""
import json, os, subprocess, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8163
BASE = 'http://127.0.0.1:%d/app' % PORT
HERE = os.path.dirname(os.path.abspath(__file__))
PLANS = [p for p in json.load(open(os.path.join(HERE, 'plans_real.json'))) if p['active']]

html = open(os.path.join(ROOT, 'app', 'admin', 'index.html'), encoding='utf-8').read()
n = html.count("window.location.replace('../auth.html');")
assert n >= 3, 'admin auth redirects not found - page restructured'
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


DRIVE = """
async ({plans, course, wantScope}) => {
  if (typeof cpPreview !== 'function') return { error: 'cpPreview not reachable' };
  if (typeof scopesForCourse !== 'function') return { error: 'scopesForCourse not reachable' };

  window._adminCourse = course;
  try { _adminCourse = course; } catch (e) { return { error: '_adminCourse not assignable' }; }
  window._plansRows = plans;

  // A 50% code, so every plan shows a real reduction.
  document.getElementById('cp-kind').value = 'percent';
  document.getElementById('cp-value').value = '50';
  document.getElementById('cp-applies-duration').value = '';
  document.getElementById('cp-applies-scope').value = wantScope;
  document.getElementById('cp-min-amount').value = '';
  if (typeof applyScopeOptionFilter === 'function') applyScopeOptionFilter();
  document.getElementById('cp-applies-scope').value = wantScope;

  cpPreview();

  const box = document.getElementById('cp-preview');
  const shown = getComputedStyle(box).display !== 'none';
  // Read the rendered order, tagging each line as this course or the other.
  const rows = [...box.querySelectorAll('div')].map(d => d.textContent.trim()).filter(Boolean);
  const order = [];
  for (const el of box.children) {
    const t = el.textContent.trim();
    if (!t) continue;
    if (/^Also reaches/i.test(t)) { order.push('--HEADING--'); continue; }
    if (/^What buyers/i.test(t)) continue;
    if (/^This takes more/i.test(t)) continue;
    order.push(/Sponsorship/.test(t) ? 'S' : 'C');
  }
  return {
    shown,
    order: order.join(''),
    heading: (box.textContent.match(/Also reaches [A-Za-z]+/) || [null])[0],
    scopesHere: scopesForCourse()
  };
}
"""

CASES = [
    # course, applies_scope, what must be true
    ('sponsorship', '',            'only Sponsorship, no heading, no CoC'),
    ('sponsorship', 'sponsorship', 'only Sponsorship'),
    ('coc',         '',            'only CoC, no heading, no Sponsorship'),
    ('coc',         'both',        'only CoC'),
]

from playwright.sync_api import sync_playwright
fails = 0
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

        for course, want_scope, note in CASES:
            r = pg.evaluate(DRIVE, {'plans': PLANS, 'course': course, 'wantScope': want_scope})
            if r.get('error'):
                print('  ERROR: ' + r['error']); fails += 1; break

            order = r['order']
            mine_tag = 'S' if course == 'sponsorship' else 'C'
            other_tag = 'C' if course == 'sponsorship' else 'S'
            bad = []

            if not r['shown']:
                bad.append('preview hidden')
            if not order:
                bad.append('nothing rendered')
            else:
                # Everything before the heading is this course, everything after
                # is the other. No heading means no other-course lines at all.
                if '--HEADING--' in order:
                    before, after = order.split('--HEADING--', 1)
                    if other_tag in before:
                        bad.append('the other course appears ABOVE the heading')
                    if mine_tag in after:
                        bad.append('this course appears BELOW the heading')
                    if not after:
                        bad.append('heading with nothing under it')
                else:
                    if other_tag in order:
                        bad.append('the other course is listed with NO heading - the reported bug')
                if order and order[0] != mine_tag:
                    bad.append('does not lead with this course')

            # Every new code carries applies_course now, so the other course
            # is unreachable and must never be listed, heading or not.
            if other_tag in order:
                bad.append('the other course is shown at all')
            if '--HEADING--' in order:
                bad.append('a cross-course heading is still being rendered')

            print('  %-12s applies_scope=%-12s -> %-28s %s'
                  % (course, want_scope or '(any)', order or '(empty)',
                     r['heading'] or ''))
            print('        want: ' + note)
            for b in bad:
                fails += 1
                print('        FAIL: ' + b)

        print('')
        print('  page errors: %s' % (errs or 'none'))
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d problem(s).' % fails if fails else
      '  Each course view shows only its own plans, because a code made there can only be spent there.')
sys.exit(1 if fails else 0)

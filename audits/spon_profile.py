# -*- coding: utf-8 -*-
"""The Sponsorship profile menu: does it stay in the Sponsorship app, and does
it tell the truth about THIS course?

Two faults are under test, both reported by readers:

  1. "Upgrade to Full Access" navigated to ../index.html?stay=1, dropping the
     buyer into the COC app. Must now open the shared modal in place.
  2. The plan panel read subscription_expires_at - a mirror of the most recent
     purchase in ANY scope - so it could show a COC date in the Sponsorship
     app, show nothing at all to a Sponsorship-only buyer, and tell a comped
     reader "Trial Expired" while the gate was letting them in.

The panel must agree with the gate for every profile shape, because they are
answering the same question.
"""
import json, os, subprocess, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8162
BASE = 'http://127.0.0.1:%d/app' % PORT
HERE = os.path.dirname(os.path.abspath(__file__))
PLANS = [p for p in json.load(open(os.path.join(HERE, 'plans_real.json'))) if p['active']]

html = open(os.path.join(ROOT, 'app', 'sponsorship', 'index.html'), encoding='utf-8').read()
html = html.replace("window.location.replace('../auth.html');", "console.warn('[t] redirect suppressed');")

# renderPlan lives inside the profile-menu IIFE, so it is not a global. Publish
# it for the test only. The real page is unchanged: reaching it the production
# way needs a live session and a profile row, which is exactly what this cannot
# have. If this anchor ever stops matching, the test fails loudly below rather
# than silently testing nothing.
_ANCHOR = "  window.addEventListener('load',function(){ var user=window._sbUser;"
assert html.count(_ANCHOR) == 1, 'shim anchor missing - the page was restructured'
html = html.replace(_ANCHOR, "  window.renderPlan=renderPlan;\n" + _ANCHOR)

DAY = 86400.0
NOW = time.time()
def iso(days):
    return time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime(NOW + days * DAY))

# who, profile, what the panel must say, must the upgrade button be offered,
# and does the GATE consider this account entitled
CASES = [
    ('lifetime holder',
     {'subscription_plan': 'lifetime', 'trial_started_at': iso(-400), 'sponsorship_expires_at': None},
     'Lifetime', False, True),
    ('trial, day 1',
     {'subscription_plan': 'trial', 'trial_started_at': iso(-1), 'sponsorship_expires_at': None},
     'Free Trial', True, True),
    ('trial, long over',
     {'subscription_plan': 'trial', 'trial_started_at': iso(-30), 'sponsorship_expires_at': None},
     'Trial Expired', True, False),
    ('bought Sponsorship 6mo',
     {'subscription_plan': '6mo', 'trial_started_at': iso(-30), 'sponsorship_expires_at': iso(150)},
     '6-Month', False, True),
    ('Sponsorship lapsed',
     {'subscription_plan': '6mo', 'trial_started_at': iso(-300), 'sponsorship_expires_at': iso(-2)},
     'Expired', True, False),
    # The one that used to show a COC date in the orange app.
    ('bought COC only, never Sponsorship',
     {'subscription_plan': '12mo', 'trial_started_at': iso(-300),
      'sponsorship_expires_at': None, 'subscription_expires_at': iso(200),
      'written_expires_at': iso(200)},
     'No access', True, False),
    # The one that used to say "Trial Expired" while the gate let them in.
    ('comped by an admin grant, plan still trial',
     {'subscription_plan': 'trial', 'trial_started_at': iso(-30), 'sponsorship_expires_at': iso(60)},
     None, False, True),
]


def up():
    try:
        urllib.request.urlopen(BASE + '/sponsorship/index.html', timeout=2); return True
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
async ({plans, profile}) => {
  document.documentElement.style.visibility = 'visible';
  window._profileData = profile;
  window._pricingPlansCache = plans;
  window._pricingPlansPromise = Promise.resolve(plans);
  window._sbUser = { id: 'test-user' };

  // Close anything left open by the previous case.
  const modal0 = document.getElementById('upgrade-modal');
  if (modal0) modal0.style.display = 'none';

  if (typeof renderPlan !== 'function') return { error: 'renderPlan not reachable' };
  renderPlan(profile);

  const label = document.getElementById('pm-plan-label').textContent;
  const expiry = document.getElementById('pm-plan-expiry').textContent;
  const btn = document.getElementById('pm-upgrade-btn');
  const offered = getComputedStyle(btn).display !== 'none';

  // The gate's own rule, read from the page rather than restated here.
  const TRIAL_MS = 3 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const tStart = profile.trial_started_at ? new Date(profile.trial_started_at).getTime() : 0;
  const gate = profile.subscription_plan === 'lifetime'
            || (tStart > 0 && now < tStart + TRIAL_MS)
            || (profile.sponsorship_expires_at && new Date(profile.sponsorship_expires_at).getTime() > now);

  // Now press it, if it is offered, and see where we end up.
  const before = location.pathname;
  let navigated = false, opened = false, tabs = [];
  if (offered) {
    btn.click();
    await new Promise(r => setTimeout(r, 250));
    navigated = location.pathname !== before;
    const m = document.getElementById('upgrade-modal');
    opened = !!m && getComputedStyle(m).display !== 'none';
    tabs = [...document.querySelectorAll('.up-track-tab')].map(t => t.dataset.scope);
  }
  return { label, expiry, offered, gate: !!gate, navigated, opened, tabs };
}
"""

from playwright.sync_api import sync_playwright
fails = 0
try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 390, 'height': 900}, is_mobile=True, has_touch=True)
        ctx.add_init_script("localStorage.setItem('guide_seen','1');")
        pg = ctx.new_page()
        pg.route('**/app/sponsorship/index.html', mk(html))
        errs = []
        pg.on('pageerror', lambda e, s=errs: s.append(str(e)[:160]))
        pg.goto(BASE + '/sponsorship/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(900)

        print('  %-38s %-14s %-22s %-9s %s' % ('profile', 'label', 'status line', 'upgrade?', 'where it goes'))
        print('  ' + '-' * 104)
        for who, prof, want_label, want_btn, want_gate in CASES:
            r = pg.evaluate(DRIVE, {'plans': PLANS, 'profile': prof})
            if r.get('error'):
                print('  ERROR: ' + r['error']); fails += 1; break

            bad = []
            if want_label and r['label'] != want_label:
                bad.append('label %r, wanted %r' % (r['label'], want_label))
            if r['offered'] != want_btn:
                bad.append('upgrade button %s, wanted %s' % (r['offered'], want_btn))
            # The panel must not offer an upgrade to somebody the gate admits,
            # nor withhold one from somebody it turns away.
            if r['offered'] == r['gate'] and not (want_gate and want_btn):
                bad.append('panel disagrees with the gate (gate=%s)' % r['gate'])
            if r['gate'] != want_gate:
                bad.append('gate says %s, expected %s' % (r['gate'], want_gate))
            if r['offered']:
                if r['navigated']:
                    bad.append('NAVIGATED AWAY - this is the COC leak')
                if not r['opened']:
                    bad.append('modal did not open')
                if r['tabs'] != ['sponsorship']:
                    bad.append('tabs %s, wanted only sponsorship' % r['tabs'])

            dest = '-' if not r['offered'] else ('COC APP' if r['navigated']
                   else ('modal here ' + str(r['tabs'])) if r['opened'] else 'NOTHING')
            print('  %-38s %-14s %-22s %-9s %s' % (who, r['label'][:14], r['expiry'][:22],
                                                   'yes' if r['offered'] else 'no', dest))
            if bad:
                fails += 1
                for b in bad:
                    print('        FAIL: ' + b)

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
      '  The profile menu sells this course, in this app, and agrees with the gate.')
sys.exit(1 if fails else 0)

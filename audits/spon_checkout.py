# -*- coding: utf-8 -*-
"""Does Sponsorship checkout now happen INSIDE the Sponsorship app?

The complaint was that paying threw the reader into the CoC app. So the test
is not just "a modal opens" - it is "a modal opens and we are still on
sponsorship/index.html, showing only Sponsorship, at Sponsorship prices."
"""
import json, os, re, subprocess, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8161
BASE = 'http://127.0.0.1:%d/app' % PORT
HERE = os.path.dirname(os.path.abspath(__file__))
PLANS = [p for p in json.load(open(os.path.join(HERE, 'plans_real.json'))) if p['active']]

html = open(os.path.join(ROOT, 'app', 'sponsorship', 'index.html'), encoding='utf-8').read()
html = html.replace("window.location.replace('../auth.html');", "console.warn('[t] redirect suppressed');")


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

  const before = location.pathname;
  if (typeof openUpgradeModal !== 'function') return { error: 'checkout.js did not load' };

  openUpgradeModal('6mo', 'sponsorship');
  await window._pricingPlansPromise;
  await new Promise(r => setTimeout(r, 300));

  const modal = document.getElementById('upgrade-modal');
  const tabs  = [...document.querySelectorAll('.up-track-tab')];
  const cards = document.getElementById('up-tier-cards');
  const styled = modal ? getComputedStyle(modal.querySelector('.up-modal-inner') || modal) : null;

  return {
    stillOnSponsorship: location.pathname === before && /sponsorship/.test(location.pathname),
    modalInjected: !!modal,
    modalVisible: !!modal && getComputedStyle(modal).display !== 'none',
    tabs: tabs.map(t => t.dataset.scope),
    activeTab: (tabs.find(t => t.classList.contains('active')) || {}).dataset?.scope || null,
    cardsText: cards ? cards.textContent.replace(/\\s+/g, ' ').slice(0, 260) : '',
    cssApplied: styled ? styled.borderRadius : null,
    couponBox: !!document.getElementById('up-coupon-input')
  };
}
"""

from playwright.sync_api import sync_playwright
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
        r = pg.evaluate(DRIVE, {'plans': PLANS,
                                'profile': {'subscription_plan': 'trial',
                                            'trial_started_at': '2026-08-01T00:00:00Z'}})
        print('  still on the Sponsorship app : %s' % r.get('stillOnSponsorship'))
        print('  modal injected               : %s' % r.get('modalInjected'))
        print('  modal visible                : %s' % r.get('modalVisible'))
        print('  tabs shown                   : %s' % r.get('tabs'))
        print('  active tab                   : %s' % r.get('activeTab'))
        print('  coupon box present           : %s' % r.get('couponBox'))
        print('  CSS reached it (radius)      : %s' % r.get('cssApplied'))
        print('  cards                        : %s' % (r.get('cardsText') or '')[:150].replace('\u20b9', 'Rs.'))
        print('  page errors                  : %s' % (errs or 'none'))
        if r.get('error'):
            print('  ERROR: ' + r['error'])
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

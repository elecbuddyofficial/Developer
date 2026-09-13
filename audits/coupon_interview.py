# -*- coding: utf-8 -*-
"""Pick "Mock interview" as the product. What does the preview show?

Blesson's screenshot: product set to Mock interview, and the preview listing
Sponsorship 12/6/3 Months with the discount applied to each. Those are course
plans. An interview code is refused on every one of them, by couponAppliesTo
and by coupon_reserve, and both have gated on product since the column existed.

So nothing was ever mis-sold. The screen was describing a different coupon from
the one being created, which is its own kind of serious: it is the screen an
admin uses to decide whether a discount is safe to publish.

The preview must price the interview, name it, and say that no course is
included.
"""
import json, os, subprocess, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = r'D:\Notes 1\Original\ETO_Study_App'
PORT = 8164
BASE = 'http://127.0.0.1:%d/app' % PORT
HERE = os.path.dirname(os.path.abspath(__file__))
PLANS = [p for p in json.load(open(os.path.join(HERE, 'plans_real.json'))) if p['active']]

# The real production values, so the arithmetic below is the arithmetic an
# admin would actually see.
MI_PRICE_PAISE = 49900
MI_ENABLED = True

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


DRIVE = """
async ({plans, course, product, kind, value, minR, price, enabled}) => {
  if (typeof cpPreview !== 'function') return { error: 'cpPreview not reachable' };
  window._adminCourse = course;
  try { _adminCourse = course; } catch (e) {}
  window._plansRows = plans;
  // Supplied directly so the preview never needs the network.
  window._miPriceRow = { price_paise: price, is_enabled: enabled };

  const prod = document.getElementById('cp-product');
  if (!prod) return { error: 'no product selector' };
  prod.value = product;
  if (typeof cpProductChanged === 'function') cpProductChanged();

  document.getElementById('cp-kind').value = kind;
  document.getElementById('cp-value').value = String(value);
  document.getElementById('cp-min-amount').value = minR ? String(minR) : '';
  cpPreview();

  const box = document.getElementById('cp-preview');
  const txt = (box.textContent || '').replace(/\\s+/g, ' ').trim();
  return {
    shown: getComputedStyle(box).display !== 'none',
    text: txt,
    mentionsCoursePlan: /Months/.test(txt),
    mentionsInterview: /Mock Interview/i.test(txt),
    saysNoCourse: /cannot be spent on any course plan/i.test(txt),
    saysOff: /currently switched off/i.test(txt)
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
        errs = []
        pg.on('pageerror', lambda e, s=errs: s.append(str(e)[:160]))
        pg.goto(BASE + '/admin/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(700)

        def run(**kw):
            base = dict(plans=PLANS, course='sponsorship', product='interview',
                        kind='fixed', value=100, minR=0,
                        price=MI_PRICE_PAISE, enabled=MI_ENABLED)
            base.update(kw)
            return pg.evaluate(DRIVE, base)

        print('')
        print('  product = Mock interview, Rs.100 off a Rs.%d booking' % (MI_PRICE_PAISE / 100))
        print('  ' + '-' * 66)
        r = run(kind='fixed', value=100)
        if r.get('error'):
            check('the preview ran', False, r['error'])
        else:
            check('the preview is shown at all', r['shown'])
            check('it names the Mock Interview', r['mentionsInterview'])
            check('it does NOT list course plans - the reported bug',
                  not r['mentionsCoursePlan'], r['text'][:150])
            check('it states that no course is included', r['saysNoCourse'])
            check('the arithmetic is right: Rs.499 becomes Rs.399',
                  '499' in r['text'] and '399' in r['text'], r['text'][:150])

        print('')
        print('  a percentage, and a code that would make it free')
        print('  ' + '-' * 66)
        r = run(kind='percent', value=50)
        check('50% off Rs.499 shows Rs.250', '250' in r['text'], r['text'][:140])
        r = run(kind='percent', value=100)
        check('100% off is shown as free, not as Rs.0',
              'free' in r['text'].lower(), r['text'][:140])

        print('')
        print('  a minimum the booking can never meet')
        print('  ' + '-' * 66)
        r = run(kind='fixed', value=100, minR=1000)
        check('says the code would never apply, rather than showing a discount',
              'below minimum' in r['text'].lower(), r['text'][:140])

        print('')
        print('  interviews switched off')
        print('  ' + '-' * 66)
        r = run(enabled=False)
        check('warns that nobody can book one yet', r['saysOff'], r['text'][:140])

        print('')
        print('  and a course code still previews course plans')
        print('  ' + '-' * 66)
        r = run(product='course', kind='percent', value=50)
        check('course plans are listed', r['mentionsCoursePlan'], r['text'][:140])
        check('the interview line is not', not r['mentionsInterview'], r['text'][:140])

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
      '  The preview prices whatever the code actually buys, and says so.')
sys.exit(1 if fails else 0)

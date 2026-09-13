# -*- coding: utf-8 -*-
"""AUDIT 5 - is the checkout extraction a no-op for CoC buyers?

1,310 lines left app/index.html and became app/checkout.js. That is by far the
largest change shipped today, and it touches the only screen that takes money
from the CoC course. Reading the diff proves nothing: the whole point of a
move is that the diff is enormous and says nothing about behaviour.

So this renders the upgrade modal from the commit BEFORE the extraction and
from the working tree, in the same browser, with the same pricing rows and the
same profile, and compares what a buyer would actually see: which tabs, which
tab is active, the full text of the cards, and the coupon box.

Anything that differs is a change to the paying CoC experience.
"""
import json, os, subprocess, sys, time, urllib.request, difflib
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
# Derived, not hardcoded: this audit now lives in the repo and has to run from
# wherever the repo is checked out.
NEW_ROOT = os.path.abspath(os.path.join(HERE, os.pardir))
ROOT = NEW_ROOT
OLD_ROOT = os.path.join(HERE, '_coc_before')

def build_baseline():
    """Rebuild the pre-extraction page from git, rather than keeping a copy.

    This used to read a folder prepared by hand, which meant the audit passed
    only on the machine where that folder happened to exist and failed silently
    everywhere else. The commit is the real baseline, so it is checked out on
    demand into a scratch folder beside this file (gitignored).
    """
    import subprocess, shutil
    if os.path.isdir(OLD_ROOT):
        shutil.rmtree(OLD_ROOT, ignore_errors=True)
    os.makedirs(os.path.join(OLD_ROOT, 'app'), exist_ok=True)
    # The last commit before app/checkout.js existed: the extraction's parent.
    rev = subprocess.run(['git', 'log', '--format=%H', '--diff-filter=A', '-1',
                          '--', 'app/checkout.js'],
                         cwd=ROOT, capture_output=True, text=True).stdout.strip()
    if not rev:
        return False
    parent = subprocess.run(['git', 'rev-parse', rev + '^'], cwd=ROOT,
                            capture_output=True, text=True).stdout.strip()
    if not parent:
        return False
    for f in ('index.html', 'style.css', 'app.js', 'account.js', 'progress.js',
              'table-hints.js', 'counts.js', 'sw.js'):
        r = subprocess.run(['git', 'show', '%s:app/%s' % (parent, f)], cwd=ROOT,
                           capture_output=True)
        if r.returncode == 0 and r.stdout:
            open(os.path.join(OLD_ROOT, 'app', f), 'wb').write(r.stdout)
    return os.path.exists(os.path.join(OLD_ROOT, 'app', 'index.html'))


if not build_baseline():
    print('  Could not rebuild the pre-extraction page from git.')
    print('  Nothing was compared, so nothing is proven.')
    sys.exit(2)
PLANS = [p for p in json.load(open(os.path.join(HERE, 'plans_real.json'))) if p['active']]

# Four real buyer situations. Each renders a different card set, so a
# difference in any of them is a difference a real person would have met.
CASES = [
    ('on trial, day 1',     {'subscription_plan': 'trial',    'trial_started_at': '2026-09-11T00:00:00Z'}, None),
    ('trial long expired',  {'subscription_plan': 'trial',    'trial_started_at': '2026-06-01T00:00:00Z'}, None),
    ('holds Written only',  {'subscription_plan': '6mo', 'plan_scope': 'written',
                             'trial_started_at': '2026-06-01T00:00:00Z',
                             'written_expires_at': '2027-01-01T00:00:00Z'}, None),
    ('arriving on Oral',    {'subscription_plan': 'trial',    'trial_started_at': '2026-06-01T00:00:00Z'}, 'oral'),
]


def serve(root, port):
    p = subprocess.Popen([sys.executable, '-m', 'http.server', str(port), '--bind', '127.0.0.1'],
                         cwd=root, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(60):
        time.sleep(0.5)
        try:
            urllib.request.urlopen('http://127.0.0.1:%d/app/index.html' % port, timeout=2)
            return p
        except Exception:
            pass
    return p


def fulfiller(body):
    """A route handler must take EXACTLY ONE parameter.

    `lambda route, b=html: ...` looks like a closure and is not: Playwright
    sees room for a second argument and passes the Request into it, so `b`
    becomes a Request and the fulfil never delivers the page. The symptom is a
    goto that hangs until timeout with no error, which is what three runs of
    this script did. The project's own _visual.py documents this trap and I
    walked into it anyway. A factory has no second parameter to fill."""
    def handler(route):
        route.fulfill(status=200, body=body, content_type='text/html; charset=utf-8')
    return handler


def page_html(root):
    """index.html redirects to auth.html without a session. Replace the
    redirects rather than forging one: no session is created and no content
    key is requested. This is the same trick _visual.py documents."""
    src = open(os.path.join(root, 'app', 'index.html'), encoding='utf-8').read()
    n = src.count("window.location.replace(")
    src = src.replace("window.location.replace(", "console.warn('[t] redirect suppressed', ")
    return src, n


DRIVE = """
async ({plans, profile, scope}) => {
  document.documentElement.style.visibility = 'visible';
  window._profileData = profile;
  window._pricingPlansCache = plans;
  window._pricingPlansPromise = Promise.resolve(plans);
  window._sbUser = { id: 'test-user' };
  window._access = { written: false, oral: false };

  if (typeof openUpgradeModal !== 'function') return { error: 'openUpgradeModal missing' };
  openUpgradeModal(null, scope || undefined);
  await new Promise(r => setTimeout(r, 400));

  const modal = document.getElementById('upgrade-modal');
  if (!modal) return { error: 'modal not in the DOM' };
  const tabs = [...document.querySelectorAll('.up-track-tab')];
  const cards = document.getElementById('up-tier-cards');
  const notice = document.getElementById('up-trial-notice');

  const norm = s => (s || '').replace(/\\s+/g, ' ').trim();
  return {
    tabs: tabs.map(t => t.dataset.scope),
    active: (tabs.find(t => t.classList.contains('active')) || {}).dataset?.scope || null,
    cards: norm(cards ? cards.textContent : ''),
    notice: norm(notice && getComputedStyle(notice).display !== 'none' ? notice.textContent : ''),
    coupon: !!document.getElementById('up-coupon-input'),
    title: norm((modal.querySelector('h2, .up-title') || {}).textContent)
  };
}
"""

from playwright.sync_api import sync_playwright

procs = []
results = {}
try:
    procs.append(serve(OLD_ROOT, 8171))
    procs.append(serve(NEW_ROOT, 8172))

    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        for label, root, port in (('before', OLD_ROOT, 8171), ('after', NEW_ROOT, 8172)):
            html, nred = page_html(root)
            ctx = br.new_context(viewport={'width': 1280, 'height': 900})
            ctx.add_init_script("""
              localStorage.setItem('guide_seen','1');
              // supabase-js is loaded from a CDN that is blocked below, so the
              // global it defines has to exist or inline code throws before the
              // checkout is ever parsed. Nothing here talks to a real backend:
              // the test supplies the profile and the pricing rows directly.
              window.supabase = { createClient: function () {
                var noop = function () { return Promise.resolve({ data: null, error: null }); };
                var chain = {};
                ['from','select','eq','single','insert','update','order','limit','in','or','rpc']
                  .forEach(function (m) { chain[m] = function () { return chain; }; });
                chain.then = function (r) { return Promise.resolve({ data: null, error: null }).then(r); };
                return { from: function () { return chain; }, rpc: noop,
                         auth: { getSession: noop, getUser: noop,
                                 onAuthStateChange: function () { return { data: { subscription: {} } }; } },
                         functions: { invoke: noop } };
              } };
            """)
            pg = ctx.new_page()
            # The page pulls an analytics script from gc.zgo.at. It is not part
            # of checkout, it is slow or blocked here, and waiting on it is what
            # made the first run of this time out rather than report anything.
            # Block EVERY external host. This comparison must be decided by the
            # two versions of the code and nothing else: a CDN that is slow on
            # one run and fast on the next would make the diff meaningless, and
            # a blocking external script in <head> is what stopped the first two
            # runs from reaching DOMContentLoaded at all.
            pg.route('**/*', lambda route: (
                route.continue_() if '127.0.0.1' in route.request.url else route.abort()))
            pg.route('**/app/index.html', fulfiller(html))
            errs = []
            pg.on('pageerror', lambda e, s=errs: s.append(str(e)[:200]))
            pg.goto('http://127.0.0.1:%d/app/index.html' % port,
                    wait_until='domcontentloaded', timeout=60000)
            # The checkout is the last script on the page and defines its
            # functions at parse time, so domcontentloaded is enough. Waiting
            # for every sub-resource is not, because some never arrive.
            pg.wait_for_function('typeof openUpgradeModal === "function"', timeout=30000)
            pg.wait_for_timeout(600)

            out = {}
            for name, prof, scope in CASES:
                r = pg.evaluate(DRIVE, {'plans': PLANS, 'profile': prof, 'scope': scope})
                out[name] = r
            results[label] = {'cases': out, 'errors': errs, 'redirects': nred}
            ctx.close()
        br.close()
finally:
    for p in procs:
        if p:
            p.kill()

print('')
print('  redirects suppressed: before=%s after=%s'
      % (results['before']['redirects'], results['after']['redirects']))
print('  page errors: before=%s after=%s'
      % (results['before']['errors'] or 'none', results['after']['errors'] or 'none'))
print('')

fails = 0
for name, _, _ in CASES:
    b = results['before']['cases'][name]
    a = results['after']['cases'][name]
    if b.get('error') or a.get('error'):
        print('  FAIL %-22s before=%s after=%s' % (name, b.get('error'), a.get('error')))
        fails += 1
        continue
    same = b == a
    print('  %-4s %-22s tabs=%s active=%s coupon=%s'
          % ('ok' if same else 'DIFF', name, a['tabs'], a['active'], a['coupon']))
    if not same:
        fails += 1
        for k in sorted(set(b) | set(a)):
            if b.get(k) != a.get(k):
                print('        %s:' % k)
                if k == 'cards':
                    for line in difflib.unified_diff(
                            [b.get(k, '')], [a.get(k, '')], 'before', 'after', lineterm='', n=0):
                        print('          ' + line[:200])
                else:
                    print('          before: %r' % (b.get(k),))
                    print('          after : %r' % (a.get(k),))

if results['after']['errors']:
    fails += 1

print('')
print('  %d difference(s) in the CoC checkout.' % fails if fails else
      '  The CoC checkout renders identically before and after the extraction.')
sys.exit(1 if fails else 0)

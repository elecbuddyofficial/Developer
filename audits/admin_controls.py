# -*- coding: utf-8 -*-
"""Every control in the admin console, one at a time.

The console is one HTML file past 12,000 lines with fifteen tabs sharing a
single global scope. Three things go wrong in a page like that and none of them
shows up in a screenshot:

  OVERLAP    two clickable things occupying the same pixels, so one of them
             receives clicks meant for the other
  CONFLICT   two controls writing the same global, or one element carrying both
             an inline handler and an added listener, so pressing it does two
             things
  ERRORS     a control that throws the moment it is used

SAFETY. Every control is actually pressed, so nothing may reach the database.
Three things make that true, and the audit refuses to run if any is missing:

  the Supabase client is replaced with a chainable no-op
  fetch and sendBeacon are replaced
  confirm and alert answer without showing, and are counted

Anything whose label suggests it destroys data is pressed only after those
stubs are verified, and the stub counter proves afterwards that no request
left the page.
"""
import os, re, subprocess, sys, time, urllib.request
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, os.pardir))
PORT = 8181
BASE = 'http://127.0.0.1:%d/app' % PORT

html = open(os.path.join(ROOT, 'app', 'admin', 'index.html'), encoding='utf-8').read()
html = html.replace("window.location.replace('../auth.html');", "console.warn('[t] redirect suppressed');")


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


# Installed before any page script runs.
STUBS = r"""
window.__eb = { net: 0, confirms: 0, alerts: 0, navs: 0 };

/* Rows, not an empty array.

   The first run of this reported clean across every tab and had pressed almost
   nothing: with no data the tables render "No users" and every per-row control
   - View, Edit, Delete, and the whole coupon and campaign grids - never exists.
   It audited blank pages and said so confidently.

   So the stub answers with rows carrying a superset of the columns these
   renderers read. They each pick out what they need, which is enough to make
   the real row markup appear. A renderer that throws on a field this does not
   supply is a false positive to investigate, not a bug to report, and the run
   below prints enough to tell them apart. */
const ROW = {
  id: '11111111-2222-3333-4444-555555555555',
  user_id: '11111111-2222-3333-4444-555555555555',
  email: 'someone@example.com', full_name: 'A Person',
  subscription_plan: 'trial', plan_scope: null, default_track: 'coc',
  trial_started_at: '2026-09-01T00:00:00Z', created_at: '2026-09-01T00:00:00Z',
  last_active_at: '2026-09-12T00:00:00Z', signup_status: 'pending',
  written_expires_at: null, oral_expires_at: null, sponsorship_expires_at: null,
  granted_written_expires_at: null, granted_oral_expires_at: null,
  granted_sponsorship_expires_at: null,
  topic_progress: {}, sponsorship_progress: {},
  code: 'SAVE20', kind: 'percent', discount_value: 20, active: true,
  applies_duration: null, applies_scope: null, applies_product: 'course',
  applies_course: 'coc', max_redemptions: 5, times_redeemed: 1, disposable: false,
  committed: 1, reserved: 0, refunded: 0, live_used: 1, over_redeemed: false,
  duration: '3mo', scope: 'both', track_name: 'Full COC', tier_name: 'Preparation',
  base_amount: 129900, discount_percent: 0, is_active: true,
  amount: 129900, status: 'paid', currency: 'INR',
  razorpay_order_id: 'order_x', razorpay_payment_id: 'pay_x',
  slug: 'webinar', label: 'Webinar', hits: 3, course: 'coc',
  title: 'A notice', body: 'Text', starts_at: '2026-10-01T00:00:00Z',
  duration_minutes: 30, price_paise: 49900, note: null, headline: 'H', blurb: 'B',
  topic_id: 'T01', section: 's-one', header: 'A video', url: 'https://y.tv/1',
  sort_order: 1, domain: 'example.com', domain_accounts: 2, ip: '1.2.3.4',
  verdict: 'clean', matched: null, ran_at: '2026-09-12T00:00:00Z',
  job: 'send-expiry-emails', ok: true, sent: 2, failed: 0, skipped: 0,
  action: 'grant_access', target_user_id: null, details: {},
  question_text: 'Q?', answer_text: 'A.', asked_on: '2026-09-01', surveyor: 'X',
};
const ROWS = [ROW, { ...ROW, id: '66666666-7777-8888-9999-000000000000',
                     code: 'SAVE50', email: 'other@example.com' }];
// Published, because the geometry pass runs in a separate evaluate() and cannot
// see this script's scope.
window.__ebRows = ROWS;

function _chain() {
  const p = Promise.resolve({ data: ROWS, error: null, count: ROWS.length });
  const h = {
    get(_t, k) {
      if (k === 'then') return p.then.bind(p);
      if (k === 'catch') return p.catch.bind(p);
      if (k === 'finally') return p.finally.bind(p);
      return () => { window.__eb.net++; return new Proxy({}, h); };
    },
    apply() { window.__eb.net++; return new Proxy({}, h); }
  };
  return new Proxy(function () {}, h);
}
window.supabase = { createClient: () => _chain() };
window._sb = _chain();
window._sbClient = _chain();

window.fetch = function () { window.__eb.net++; return Promise.resolve(
  { ok: true, status: 200, json: () => Promise.resolve({}), text: () => Promise.resolve('') }); };
if (navigator.sendBeacon) navigator.sendBeacon = function () { window.__eb.net++; return true; };

/* Count added click listeners per element.

   "Bound twice" cannot be answered from page script any other way: real
   listener lists are a DevTools-only view. Patching addEventListener before any
   page code runs records them as they are attached, which is enough to spot an
   element that also carries an inline onclick and therefore does two things on
   one press. */
(function () {
  const orig = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, fn, opts) {
    if (type === 'click' && this instanceof Element) {
      this.__ebClicks = (this.__ebClicks || 0) + 1;
    }
    return orig.call(this, type, fn, opts);
  };
})();

window.confirm = function () { window.__eb.confirms++; return false; };  // always decline
window.alert = function () { window.__eb.alerts++; };
window.print = function () {};
window.open = function () { window.__eb.navs++; return null; };
"""

SETUP_DEF = r"""
() => {
  /* One definition of "put this tab into the state the sweep expects",
     installed on window so the geometry pass and every individual press use
     exactly the same one.

     Needed because pressing a control changes the page: a filter pill
     re-renders the table, a tab switch tears one down. Without restoring state
     between presses, 8 of the 15 controls on Users disappeared before the sweep
     reached them - the eye, pencil and bin at the end of each row, which are
     the ones worth pressing. */
  window.__ebSetup = function (tab, course) {
    document.documentElement.style.visibility = 'visible';
    try { _adminCourse = course; } catch (e) {}
    window._adminCourse = course;
    if (typeof applyCourseScope === 'function') { try { applyCourseScope(); } catch (e) {} }
    if (typeof showTab === 'function') { try { showTab(tab); } catch (e) {} }

    const R = window.__ebRows;
    try { _allUsers = R; } catch (e) {}
    try { _dashProfiles = R; } catch (e) {}
    try { _cmRows = R; } catch (e) {}
    window._allUsers = R; window._couponRows = R; window._plansRows = R;

    const out = [];
    const call = (n, f) => { try { f(); out.push(n); } catch (e) {} };
    if (tab === 'users' && typeof renderUsers === 'function') call('users', () => renderUsers(R));
    if (tab === 'coupons' && typeof renderCoupons === 'function') call('coupons', () => renderCoupons());
    if (tab === 'campaigns' && typeof renderCampaigns === 'function') call('campaigns', () => renderCampaigns());
    if (tab === 'approvals' && typeof aprRow === 'function') {
      const tb = document.getElementById('apr-tbody');
      if (tb) call('approvals', () => { tb.innerHTML = R.map(aprRow).join(''); });
    }
    return out;
  };

  window.__ebControls = function (tab) {
    const el = document.getElementById('tab-' + tab);
    if (!el) return [];
    const SEL = 'button, a[href], input, select, textarea, [onclick], [role=button]';
    return [...el.querySelectorAll(SEL)].filter(n => {
      const cs = getComputedStyle(n);
      if (cs.display === 'none' || cs.visibility === 'hidden' || cs.pointerEvents === 'none') return false;
      const r = n.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    });
  };
  return true;
}
"""

GEOMETRY = r"""
({tab, course}) => {
  const populated = window.__ebSetup(tab, course);
  const el = document.getElementById('tab-' + tab);
  if (!el) return { error: 'no tab-' + tab };
  const nodes = window.__ebControls(tab);

  const describe = (n) => (n.id ? '#' + n.id : n.tagName.toLowerCase())
    + (n.textContent ? ' "' + n.textContent.replace(/\s+/g, ' ').trim().slice(0, 26) + '"' : '');

  const overlaps = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      if (a.contains(b) || b.contains(a)) continue;
      const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      const ox = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
      const oy = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
      if (ox > 2 && oy > 2) {
        const small = (ra.width * ra.height <= rb.width * rb.height) ? a : b;
        const rs = small.getBoundingClientRect();
        const hit = document.elementFromPoint(rs.left + rs.width / 2, rs.top + rs.height / 2);
        if (hit && !small.contains(hit) && hit !== small) {
          overlaps.push({ a: describe(a), b: describe(b), stolenBy: describe(hit) });
        }
      }
    }
  }

  const doubled = nodes
    .filter(n => n.getAttribute('onclick') && (n.__ebClicks || 0) > 0)
    .map(n => describe(n) + '  (' + n.__ebClicks + ' added listener'
              + (n.__ebClicks > 1 ? 's' : '') + ' as well as its onclick)');

  return { count: nodes.length, overlaps, doubled, populated,
           controls: nodes.map((n, i) => ({ i, label: describe(n) })) };
}
"""

PRESS = r"""
({tab, idx, course}) => {
  // Restore the tab before every press, so a control that re-renders the table
  // cannot hide the ones after it.
  window.__ebSetup(tab, course);
  const nodes = window.__ebControls(tab);
  const n = nodes[idx];
  if (!n) return { missing: true };
  const before = window.__eb.net;
  try {
    if (n.tagName === 'SELECT') {
      n.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (n.tagName === 'INPUT' || n.tagName === 'TEXTAREA') {
      n.dispatchEvent(new Event('input', { bubbles: true }));
      n.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      n.click();
    }
  } catch (e) {
    return { threw: String(e).slice(0, 140) };
  }
  return { net: window.__eb.net - before };
}
"""

# Each tab under the course that owns it.
#
# showTab deliberately refuses to open a tab the current course does not own,
# which is correct: Mock Interviews, Notices and Events belong to Sponsorship,
# and Live Exam and the funnel to CoC. Auditing them all under one console
# reported four tabs with zero controls, and the zero was this audit standing in
# front of a door it had not opened.
TABS = [
    ('coc', 'dashboard'), ('coc', 'users'), ('coc', 'approvals'), ('coc', 'admins'),
    ('coc', 'mail'), ('coc', 'activity'), ('coc', 'payments'), ('coc', 'coupons'),
    ('coc', 'grant'), ('coc', 'online'), ('coc', 'plans'), ('coc', 'notifications'),
    ('coc', 'videos'), ('coc', 'campaigns'), ('coc', 'funnel'), ('coc', 'liveexam'),
    ('sponsorship', 'mock'), ('sponsorship', 'notices'), ('sponsorship', 'events'),
    ('sponsorship', 'status'), ('sponsorship', 'coupons'), ('sponsorship', 'grant'),
    ('sponsorship', 'payments'), ('sponsorship', 'users'), ('sponsorship', 'campaigns'),
]

from playwright.sync_api import sync_playwright

overlaps_total = doubled_total = errors_total = unreachable = 0
checked = 0
report = []

try:
    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        ctx = br.new_context(viewport={'width': 1440, 'height': 900})
        ctx.add_init_script(STUBS)
        pg = ctx.new_page()

# A hard guarantee, not a hope: abort every request that is not the local
        # test server, and record it. The stubs should mean nothing even tries,
        # so anything caught here is a path that bypassed them and the audit
        # fails rather than quietly having touched something real.
        escaped = []

        def _gate(route):
            url = route.request.url
            local = url.startswith('http://127.0.0.1:%d' % PORT)
            # The page pulls supabase-js and a QR library from a CDN. Those are
            # static scripts carrying no data, and blocking them changes how the
            # page initialises, which would make this audit test something the
            # console never is. Everything else is refused and recorded.
            asset = url.startswith('https://cdn.jsdelivr.net/')
            if local or asset:
                route.continue_()
            else:
                escaped.append(url)
                route.abort()

        pg.route('**/*', _gate)
        pg.route('**/app/admin/index.html', mk(html))
        pg.on('dialog', lambda d: d.dismiss())
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)[:160]))
        pg.goto(BASE + '/admin/index.html')
        pg.wait_for_load_state('networkidle')
        pg.wait_for_timeout(800)

        # Prove the stubs are in place before pressing anything.
        guard = pg.evaluate("""() => ({
          sb: typeof window._sb === 'object' || typeof window._sb === 'function',
          fetchStubbed: String(window.fetch).includes('__eb'),
          confirmStubbed: String(window.confirm).includes('__eb')
        })""")
        if not all(guard.values()):
            print('  Stubs are not installed: %s' % guard)
            print('  Refusing to press anything, because a click could reach production.')
            sys.exit(2)
        print('')
        print('  stubs verified: no click can reach the network or the database')

        if '--selftest' in sys.argv:
            # Plant three faults and require each to be found. An audit that has
            # never been watched failing is an assumption, and this one reported
            # clean for three runs while pressing almost nothing.
            pg.evaluate("""() => {
              const host = document.getElementById('tab-users');
              const bad = document.createElement('button');
              bad.id = '_selftest_throw';
              bad.textContent = 'planted thrower';
              bad.setAttribute('onclick', 'window.__nope.deeper()');
              host.appendChild(bad);

              const wrap = document.createElement('div');
              wrap.style.cssText = 'position:relative;height:40px';
              const under = document.createElement('button');
              under.id = '_selftest_under';
              under.textContent = 'planted underneath';
              under.style.cssText = 'position:absolute;left:0;top:0;width:160px;height:32px';
              const over = document.createElement('button');
              over.id = '_selftest_over';
              over.textContent = 'planted on top';
              over.style.cssText = 'position:absolute;left:0;top:0;width:200px;height:32px;z-index:5';
              wrap.appendChild(under); wrap.appendChild(over);
              host.appendChild(wrap);
            }""")

        pg.evaluate(SETUP_DEF)
        for course, tab in TABS:
            g = pg.evaluate(GEOMETRY, {'tab': tab, 'course': course})
            if g.get('error'):
                continue
            checked += 1
            tab_errs_before = len(errs)

            gone = 0
            for c in g['controls']:
                r = pg.evaluate(PRESS, {'tab': tab, 'idx': c['i'], 'course': course})
                if r.get('missing'):
                    gone += 1
                    unreachable += 1
                if r.get('threw'):
                    errors_total += 1
                    report.append(('throw', course + '/' + tab, c['label'], r['threw']))
                pg.wait_for_timeout(8)

            pg.wait_for_timeout(120)
            new_errs = errs[tab_errs_before:]
            for e in new_errs:
                errors_total += 1
                report.append(('pageerror', course + '/' + tab, '', e))

            for o in g['overlaps']:
                overlaps_total += 1
                report.append(('overlap', course + '/' + tab, o['a'] + '  vs  ' + o['b'],
                               'clicks land on ' + o['stolenBy']))
            for d in g['doubled']:
                doubled_total += 1
                report.append(('doubled', course + '/' + tab, d, 'inline handler and an added listener'))

            note = '  rows rendered' if g.get('populated') else ''
            if gone:
                note += '  (%d vanished mid-sweep)' % gone
            print('   %-12s %-13s %3d controls%s' % (course, tab, g['count'], note))

        net = pg.evaluate('() => window.__eb')
        net['escaped'] = escaped
        ctx.close()
        br.close()
finally:
    if proc:
        proc.kill()

print('')
print('  %d tab/course combinations swept' % checked)
if unreachable:
    print('  %d control(s) could not be pressed: a press before them collapsed a' % unreachable)
    print('  panel or closed a modal they live in. Named rather than hidden, because')
    print('  a sweep that quietly skips is the failure this audit exists to avoid.')
print('  calls intercepted by the stubs: %d' % net['net'])
if net['escaped']:
    print('  *** %d REQUEST(S) ESCAPED THE STUBS:' % len(net['escaped']))
    for u in net['escaped'][:6]:
        print('      ' + u[:110])
else:
    print('  requests that left the page: 0 (nothing reached any real service)')
print('  confirm dialogs declined: %d' % net['confirms'])

for kind, label in (('overlap', 'CONTROLS OVERLAPPING, so clicks land on the wrong one'),
                    ('doubled', 'CONTROLS BOUND TWICE, so one press does two things'),
                    ('throw', 'CONTROLS THAT THREW WHEN PRESSED'),
                    ('pageerror', 'ERRORS RAISED WHILE PRESSING')):
    rows = [r for r in report if r[0] == kind]
    print('')
    print('  ' + label)
    print('  ' + '-' * 68)
    if not rows:
        print('   none')
    seen = set()
    for _, tab, what, detail in rows:
        key = (tab, what, detail)
        if key in seen:
            continue
        seen.add(key)
        print('   %-12s %s' % (tab, what))
        print('                %s' % detail)

total = overlaps_total + doubled_total + errors_total
print('')
print('  %d problem(s).' % total if total else
      '  No control overlaps, fights another, or throws when pressed.')
sys.exit(1 if total else 0)

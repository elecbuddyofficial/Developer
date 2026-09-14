# -*- coding: utf-8 -*-
"""Every screen of the app, on every phone size people actually use.

WHY
A reader on a 360px Android phone recorded W01 Overcurrent Protection starting
at Method 2 with a huge gap before Method 3 (14 Sep 2026). It showed at 360px
and not at 390 or 412, which is why nothing caught it: the checks that existed
rendered at iPhone width or read source, and the source was not wrong.

So this renders the real pages, walks every screen and modal it can reach, and
measures each one at every width below, portrait and landscape.

    python audits/mobile_matrix.py --plain <dir>        full matrix
    python audits/mobile_matrix.py --plain <dir> --quick
    python audits/mobile_matrix.py --selftest --plain <dir>
    python audits/mobile_matrix.py --state coc:notes-W01 --plain <dir>

--plain is a DECRYPTED mirror of data/ kept outside the repo (the session
scratchpad). Content requests are answered from it, and the pages' own
plaintext branch renders it. Without it the screens that need content cannot
be checked, and the run says so and exits 2 rather than passing.

NOTHING HERE CAN REACH PRODUCTION. Every request to supabase.co or razorpay is
answered locally with a 503 before it leaves the browser, and counted. No
session exists and none is forged.

WHAT IT REPORTS
  OVERFLOW     something sticks out past the screen edge. Either the page scrolls
               sideways, or a clipping box cuts it off and it cannot be reached.
  NOHINT       a notes table hiding columns sideways with no scroll hint.
  NARROW       text squeezed into a column a few words wide, stacking far taller
               than it should. This is the shape of the W01 bug.
  IMPLICIT     a grid the phone CSS forces to one column still renders several.
  OVERLAP      two in-flow siblings drawn on top of each other.
  CUT          text inside a box that clips it, with no ellipsis to say so.
  CONTROL      a field or dropdown too short for its own text (text_fits.py).
  UNREACHABLE  a button inside a fixed panel that runs off the screen, with
               nothing to scroll it into view.
  TAP          one control's centre is covered by another, so a tap lands wrong.

Findings are grouped by screen and element, with every width they occur at.

HOW IT MEASURES MANY SIZES QUICKLY
Each screen is loaded once and then resized through the widths, the way a phone
rotating does. A resize is not a fresh load, so every finding is then CONFIRMED
on a fresh load at its narrowest width, and only confirmed findings fail the run.
"""
import argparse, json, os, re, subprocess, sys, time, urllib.parse, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, os.pardir))

# name, width, height. Heights matter for modals: a panel that fits at 915 tall
# can run off the bottom at 568.
PORTRAIT = [
    ('Galaxy Fold cover', 280, 653), ('iPhone SE 1st gen', 320, 568),
    ('Galaxy Z Fold cover', 344, 882), ('Galaxy S8 / A-series', 360, 740),
    ('iPhone SE2 / 8', 375, 667), ('Xiaomi / Oppo', 384, 854),
    ('iPhone 12 / 13 / 14', 390, 844), ('Pixel 7 / iPhone 15', 393, 852),
    ('iPhone 16 Pro', 402, 874), ('Pixel XL / Galaxy', 412, 915),
    ('iPhone XR / 11', 414, 896), ('iPhone 14 Plus', 428, 926),
    ('iPhone 16 Pro Max', 430, 932), ('small tablet', 480, 853),
    ('Surface Duo', 540, 720), ('7 inch tablet', 600, 960),
    ('iPad mini', 768, 1024), ('just past 768', 769, 1024),
    ('iPad Air', 820, 1180), ('breakpoint 900', 900, 1200),
]
LANDSCAPE = [
    ('iPhone SE 1 landscape', 568, 320), ('Android landscape', 640, 360),
    ('iPhone SE2 landscape', 667, 375), ('Galaxy S8 landscape', 740, 360),
    ('iPhone 14 landscape', 844, 390), ('Pixel 7 landscape', 852, 393),
    ('Pixel XL landscape', 915, 412), ('iPhone Pro Max landscape', 932, 430),
]
# One pixel either side of the breakpoints the CSS actually uses, where a rule
# switches off and the next one has not switched on.
EDGES = [('edge', w, 800) for w in (361, 421, 481, 521, 561, 601, 621, 641, 721, 761)]
QUICK = [PORTRAIT[0], PORTRAIT[1], PORTRAIT[3], PORTRAIT[6], PORTRAIT[9],
         PORTRAIT[16], PORTRAIT[17], LANDSCAPE[3]]

ap = argparse.ArgumentParser()
ap.add_argument('--plain', help='decrypted mirror of data/, outside the repo')
ap.add_argument('--quick', action='store_true')
ap.add_argument('--state', action='append', help='only these states (prefix match)')
ap.add_argument('--selftest', action='store_true')
ap.add_argument('--shard', default='0/1')
ap.add_argument('--port', type=int, default=8195)
ap.add_argument('--json', help='write raw findings here')
ap.add_argument('--no-confirm', action='store_true')
ap.add_argument('--shots', help='save an outlined screenshot of each confirmed finding here')
ARGS = ap.parse_args()

# EB_PLAIN lets run_all.py hand the same directory to every audit that needs it.
_plain = ARGS.plain or os.environ.get('EB_PLAIN')
PLAIN = os.path.abspath(_plain) if _plain else None
if PLAIN and os.path.abspath(PLAIN).lower().startswith(ROOT.lower()):
    sys.exit('  --plain must live outside the repo. The repo copies stay encrypted.')
PORT = ARGS.port
BASE = 'http://127.0.0.1:%d/' % PORT

_vis_src = open(os.path.join(ROOT, '_visual.py'), encoding='utf-8').read()
_ns = {'__name__': '_visual_import', '__file__': os.path.join(ROOT, '_visual.py')}
exec(compile(_vis_src, '_visual.py', 'exec'), _ns)
VIS = _ns['SCREENS']
FIRST_RUN, OVERLAYS, SEED = _ns['FIRST_RUN'], _ns['OVERLAYS'], _ns['SEED']

# The admin console's stubs live in admin_controls.py and are read from it, not
# copied, so the two cannot drift apart.
_ac = open(os.path.join(HERE, 'admin_controls.py'), encoding='utf-8').read()
ADMIN_STUBS = re.search(r'STUBS = r"""(.*?)"""', _ac, re.S).group(1)
ADMIN_SETUP = re.search(r'SETUP_DEF = r"""(.*?)"""', _ac, re.S).group(1)


# --------------------------------------------------------------------------
# States. 'open' runs in the page (may return a promise); 'expect' is a JS
# expression that must become true, or the screen rendered nothing and the run
# fails rather than passing over an empty page.
# --------------------------------------------------------------------------
UNLOCK = "window._access = { oral: true, written: true };"
WAIT_FN = """
window.__until = (f, ms) => new Promise(res => {
  const t0 = Date.now();
  (function poll() { let ok = false; try { ok = !!f(); } catch (e) {}
    if (ok || Date.now() - t0 > (ms || 20000)) return res(ok);
    setTimeout(poll, 80); })();
});
"""
STATES = {}


def st(name, page, open_js, expect, content=False, reopen=False):
    STATES[name] = {'page': page, 'open': open_js, 'expect': expect,
                    'content': content, 'reopen': reopen}


COC = 'app/index.html'
SPON = 'app/sponsorship/index.html'

for v, exp in [('welcome', '#view-welcome'), ('oral', '#view-oral'), ('written', '#view-written'),
               ('notes-picker', '#view-notes-picker'), ('written-notes-picker', '#view-written-notes-picker'),
               ('quiz-picker', '#view-quiz-picker'), ('num-landing', '#view-num-landing')]:
    st('coc:' + v, COC, UNLOCK + "showView('%s')" % v,
       "document.querySelector('%s.active') && document.querySelector('%s').offsetHeight > 80" % (exp, exp),
       reopen=True)

st('coc:live-exam', COC, UNLOCK + SEED.replace('__RUNNING__', 'true') +
   ";showView('live-exam'); renderLiveExamFeed();",
   "document.querySelector('#view-live-exam.active') && document.querySelector('#view-live-exam').offsetHeight > 150")
st('coc:home-live', COC, UNLOCK + SEED.replace('__RUNNING__', 'true') +
   ";showView('welcome'); lxRenderHomeCard();", "document.querySelector('#view-welcome.active')")

st('coc:quiz-bank', COC, UNLOCK + "showView('quiz-bank'); initQuizBank();",
   "document.querySelector('#view-quiz-bank.active') && document.querySelector('#view-quiz-bank').offsetHeight > 150",
   content=True)

for v, fn, box in [('num-freq', 'loadNumericalsIfNeeded', 'numerical-list-container'),
                   ('num-cat', 'loadNumericalsByCatIfNeeded', 'numerical-cat-topics-container'),
                   ('num-year', 'loadNumericalsByYearIfNeeded', 'numerical-year-container')]:
    st('coc:' + v, COC, UNLOCK + "showView('%s'); %s();" % (v, fn),
       "document.querySelectorAll('#%s *').length > 20" % box, content=True)
st('coc:num-detail', COC, UNLOCK + """showView('num-freq'); loadNumericalsIfNeeded();
   return __until(() => document.querySelector('#numerical-list-container [onclick]'))
     .then(() => document.querySelector('#numerical-list-container [onclick]').click());""",
   "!document.querySelector('#view-num-freq.active') || document.querySelectorAll('.view.active *').length > 40",
   content=True)

st('coc:sq-landing', COC, UNLOCK + "openSurveyorQA();",
   "window.SQ_DATA && document.querySelector('#view-sq-landing.active')", content=True)
for v, fn in [('sq-grid', 'renderSqGrid'), ('sq-all', 'renderSqAll'), ('sq-monthly', 'renderSqMonthly')]:
    st('coc:' + v, COC, UNLOCK + "openSurveyorQA(function(){ showView('%s'); try { %s(); } catch (e) {} });" % (v, fn),
       "window.SQ_DATA && document.querySelector('#view-%s.active') && document.querySelector('#view-%s').offsetHeight > 150" % (v, v),
       content=True)
st('coc:sq-detail', COC, UNLOCK + """openSurveyorQA(function(){
     const s = window.SQ_DATA.surveyors, name = Array.isArray(s) ? (s[0].name || s[0]) : Object.keys(s)[0];
     openSqDetail(name); });""",
   "document.querySelector('#view-sq-detail.active') && document.querySelector('#view-sq-detail').offsetHeight > 150",
   content=True)

for tid in ['T01', 'T04', 'T06', 'T13', 'T15', 'T16', 'T23', 'W01', 'W02', 'W04', 'W07', 'W08']:
    key = "((window.TOPICS||[]).find(x => x.id === '%s') || {key:'%s'}).key" % (tid, tid)
    st('coc:notes-' + tid, COC, UNLOCK + "fetchTopicData('%s', %s);" % (tid, key),
       "document.querySelector('#notes-container .view.active') && document.querySelector('#notes-container').offsetHeight > 400",
       content=True)

st('coc:videos-T04', COC, UNLOCK + """fetchTopicData('T04', ((window.TOPICS||[]).find(x => x.id === 'T04')||{}).key);
   return __until(() => document.querySelectorAll('#notes-container .qb-seg-btn').length > 1)
     .then(() => { document.querySelectorAll('#notes-container .qb-seg-btn')[1].click(); });""",
   "document.querySelectorAll('#notes-container .qb-seg-btn').length > 1", content=True)
st('coc:quiz-cats', COC, UNLOCK + "goToQuizFromNotes('T04');",
   "document.querySelectorAll('#qcat-grid .qcat-btn').length > 1", content=True)
st('coc:quiz-question', COC, UNLOCK + """goToQuizFromNotes('T04');
   return __until(() => document.querySelector('#qcat-grid .qcat-btn.all-btn .cat-count') && !/^0 /.test(document.querySelector('#qcat-grid .qcat-btn.all-btn .cat-count').textContent))
     .then(() => document.querySelector('#qcat-grid .qcat-btn.all-btn').click());""",
   "document.querySelectorAll('.qopt').length > 1", content=True)
st('coc:quiz-answered', COC, UNLOCK + """goToQuizFromNotes('T04');
   return __until(() => document.querySelector('#qcat-grid .qcat-btn.all-btn .cat-count') && !/^0 /.test(document.querySelector('#qcat-grid .qcat-btn.all-btn .cat-count').textContent))
     .then(() => { document.querySelector('#qcat-grid .qcat-btn.all-btn').click();
                   return __until(() => document.querySelector('.qopt')); })
     .then(() => document.querySelector('.qopt').click());""",
   "document.querySelectorAll('.qopt').length > 1", content=True)

# Modals and panels, reusing _visual.py's openers so there is one definition.
for k in ['feedback', 'whatsnew', 'toast', 'nfdetail', 'nfplain', 'profile', 'profnotif', 'upgrade']:
    st('coc:' + k, COC, UNLOCK + "showView('welcome');" + VIS[k]['open'] + ";",
       "document.querySelector('#view-welcome.active')")
st('coc:gate', COC, UNLOCK + "window._access = {oral:false, written:false}; showGate('written');",
   "document.getElementById('gate-overlay') && getComputedStyle(document.getElementById('gate-overlay')).display !== 'none'")
st('coc:settings', COC, UNLOCK + "openSettings();",
   "getComputedStyle(document.getElementById('settings-modal')).display !== 'none'")
st('coc:transactions', COC, UNLOCK + "openTransactions();",
   "getComputedStyle(document.getElementById('tx-modal')).display !== 'none'")
st('coc:menu', COC, UNLOCK + "showView('welcome'); if (innerWidth <= 768) toggleMobileMenu();",
   "document.querySelector('#view-welcome.active')", reopen=False)
st('coc:confirm', COC, UNLOCK + """showView('welcome'); showCustomConfirm('Resume Quiz',
   "You have an unfinished quiz in 'All Categories'.", 'Resume Quiz', 'Start Fresh', function(){}, function(){});""",
   "document.querySelector('#view-welcome.active')")

# Sponsorship
for name, js, exp in [
        ('home', 'showHome()', '#view-home'),
        ('study-hub', 'showStudyHub()', '#view-study-hub'),
        ('aptitude-hub', 'showAptitudeHub()', '#view-aptitude-hub'),
        ('notifications', 'showNotifications()', '#view-notifications')]:
    st('spon:' + name, SPON, js + ';', "document.querySelector('%s.active')" % exp, reopen=True)
st('spon:companyqa', SPON, 'showCompanyQA();',
   "document.querySelectorAll('.cqa-list-item').length > 1", content=True)
st('spon:companyqa-detail', SPON, """showCompanyQA();
   return __until(() => document.querySelector('.cqa-list-item'))
     .then(() => document.querySelector('.cqa-list-item').click());""",
   "document.querySelector('.cqa-list-item.active')", content=True)
for sid in ['fundamentals', 'aptitude', 'datainterp', 'entrancetest', 'interview']:
    st('spon:section-' + sid, SPON, "openSection('%s');" % sid,
       "document.querySelector('#view-section.active') && document.querySelectorAll('#sec-topic-grid > *').length > 0",
       reopen=True)
for tid in ['S00', 'F01', 'F25', 'A01', 'A10', 'DI01', 'ET01', 'IP01', 'IP04']:
    st('spon:notes-' + tid, SPON, "fetchTopicData('%s');" % tid,
       "document.querySelector('#notes-container') && document.querySelector('#notes-container').offsetHeight > 400",
       content=True)
st('spon:quiz-cats', SPON, "goToQuizFromNotes('F01');",
   "document.querySelectorAll('#qcat-grid .qcat-btn').length > 1", content=True)
st('spon:quiz-question', SPON, """goToQuizFromNotes('F01');
   return __until(() => document.querySelector('#qcat-grid .qcat-btn'))
     .then(() => document.querySelector('#qcat-grid .qcat-btn').click());""",
   "document.querySelectorAll('.qopt').length > 1", content=True)
st('spon:quiz-answered', SPON, """goToQuizFromNotes('F01');
   return __until(() => document.querySelector('#qcat-grid .qcat-btn'))
     .then(() => { document.querySelector('#qcat-grid .qcat-btn').click();
                   return __until(() => document.querySelector('.qopt')); })
     .then(() => document.querySelector('.qopt').click());""",
   "document.querySelectorAll('.qopt').length > 1", content=True)
for k in ['notifpanel', 'mockpick', 'mockdetails', 'spforced', 'sponupgrade']:
    st('spon:' + k, SPON, VIS[k]['open'] + ";", "true")
st('spon:gate', SPON, "window._sponPaid = true; window._sponAccess = false; showGate();",
   "[...document.querySelectorAll('body *')].some(e => /gate/i.test(e.id || '') && e.offsetHeight > 100)")
st('spon:settings', SPON, "openSettings();",
   "getComputedStyle(document.getElementById('settings-modal')).display !== 'none'")
st('spon:profile', SPON, "openProfile();",
   "getComputedStyle(document.getElementById('profile-modal')).display !== 'none'")
st('spon:menu', SPON, "showHome(); if (innerWidth <= 768) toggleMobileMenu();",
   "document.querySelector('#view-home.active')")

# Sign-in and the static pages
st('auth:signin', 'app/auth.html', "switchTab('login');", "document.querySelector('#form-login.active')", reopen=True)
st('auth:signup', 'app/auth.html', "switchTab('register');", "document.querySelector('#form-register.active')", reopen=True)
st('auth:reset', 'app/auth.html', "switchTab('reset');", "document.querySelector('#form-reset.active')", reopen=True)
st('auth:track', 'app/auth.html', "showTrackPrompt('00000000-0000-0000-0000-000000000000');",
   "document.body.offsetHeight > 200")
st('auth:menu', 'app/auth.html', "openNavPanel();", "document.getElementById('tn-panel')")
st('page:terms', 'app/terms.html', "", "document.body.offsetHeight > 400")
st('page:privacy', 'app/privacy.html', "", "document.body.offsetHeight > 400")
st('admin:login', 'app/admin/login.html', "", "document.body.offsetHeight > 200")

# Read from the console itself. A tab listed under one course in COURSE_TABS is
# hidden in the other; a tab in neither list is shared. Hardcoding the list
# had the sweep report six tabs "empty" that were correctly hidden.
_admin_src = open(os.path.join(ROOT, 'app', 'admin', 'index.html'), encoding='utf-8').read()
ADMIN_TABS = list(dict.fromkeys(re.findall(r'id="tab-([a-z]+)"', _admin_src)))
_ct = re.search(r'var COURSE_TABS = \{(.*?)\};', _admin_src, re.S).group(1)
COURSE_ONLY = {c: re.findall(r"'([a-z]+)'", body)
               for c, body in re.findall(r'(sponsorship|coc):\s*\[(.*?)\]', _ct, re.S)}
_scoped = set(COURSE_ONLY.get('coc', [])) | set(COURSE_ONLY.get('sponsorship', []))
for course in ['coc', 'sponsorship']:
    for tab in ADMIN_TABS:
        if tab in _scoped and tab not in COURSE_ONLY.get(course, []):
            continue
        st('admin:%s-%s' % (course, tab), 'app/admin/index.html',
           "(%s)(); window.__ebSetup('%s', '%s');" % (ADMIN_SETUP.strip(), tab, course),
           "document.getElementById('tab-%s') && document.getElementById('tab-%s').offsetHeight > 40" % (tab, tab))


# --------------------------------------------------------------------------
# The measurement.
# --------------------------------------------------------------------------
MEASURE = r"""
() => {
  const W = innerWidth, H = innerHeight, out = [];
  const csOf = new Map();
  const cs = (e) => { let c = csOf.get(e); if (!c) { c = getComputedStyle(e); csOf.set(e, c); } return c; };
  const hidden = new Map();
  const isHidden = (e) => {
    if (!e || e === document.documentElement) return false;
    if (hidden.has(e)) return hidden.get(e);
    const c = cs(e);
    const h = c.display === 'none' || c.visibility === 'hidden' || parseFloat(c.opacity) < 0.05
              || isHidden(e.parentElement);
    hidden.set(e, h);
    return h;
  };
  const ownText = (e) => [...e.childNodes].filter(n => n.nodeType === 3)
                         .map(n => n.textContent).join(' ').replace(/\s+/g, ' ').trim();
  const text = (e) => (e.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40);
  const sel = (e) => {
    let s = e.tagName.toLowerCase();
    if (e.id) return s + '#' + e.id;
    if (typeof e.className === 'string' && e.className.trim())
      s += '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.');
    for (let a = e.parentElement; a; a = a.parentElement) {
      if (a.id) return '#' + a.id + ' ' + s;
    }
    return s;
  };
  const push = (kind, e, detail) => out.push({ kind, sel: sel(e), text: text(e), detail });

  const all = [...document.body.querySelectorAll('*')].filter(e => {
    if (isHidden(e)) return false;
    if (['SCRIPT', 'STYLE', 'BR', 'svg', 'path', 'NOSCRIPT', 'TEMPLATE'].includes(e.tagName)) return false;
    const r = e.getBoundingClientRect();
    return r.width > 0.5 && r.height > 0.5;
  });
  const R = new Map(all.map(e => [e, e.getBoundingClientRect()]));

  /* OVERFLOW. Past the right edge (or left), and not held inside a narrower box
     that clips or scrolls it on purpose, which is how every table wrapper
     works. Wholly off-screen elements are drawers parked out of view. */
  const flagged = new Set();
  for (const e of all) {
    const r = R.get(e);
    const past = Math.max(r.right - W, -r.left);
    if (past <= 1.5) continue;
    if (r.left >= W - 1 || r.right <= 1) continue;
    /* Who holds it decides what the reader experiences.
         a local scroller (a table wrapper, a chip rail)  by design, skipped
         the page's own scroller                         the screen scrolls sideways
         a box that clips                                 cut off, unreachable
       The first version skipped every holder that sat inside the screen, which
       is every page scroller, and so missed a planted 640px block at 360px. */
    /* The holder is the first clipping or scrolling ancestor the element
       actually sticks out of. Taking merely the first non-visible ancestor
       blamed a table's own overflow:hidden for rows that sit wholly inside it,
       when the table was scrolling, as designed, inside .n-table-wrap. */
    let holder = null;
    for (let a = e.parentElement; a && a !== document.documentElement; a = a.parentElement) {
      if (cs(a).overflowX === 'visible') continue;
      const ar = a.getBoundingClientRect();
      if (r.right > ar.right + 1 || r.left < ar.left - 1) { holder = a; break; }
    }
    let how = 'past the screen edge';
    if (holder && holder !== document.body) {
      const hr = holder.getBoundingClientRect();
      const pageScroller = hr.width >= W * 0.98 && hr.height >= H * 0.5;
      const ox = cs(holder).overflowX;
      if (ox === 'auto' || ox === 'scroll') {
        if (!pageScroller) continue;
        how = 'past the screen edge; the screen scrolls sideways to show it';
      } else {
        if ((e.textContent || '').trim().length < 2 && !e.matches('button, a, input, select, textarea')) continue;
        /* A ticker is a long strip slid through a clipping window on purpose.
           Only a looping animation marks one: every app view slides up once on
           arrival, and counting that skipped a planted 640px block. */
        let moving = false;
        for (let m = e; m && m !== holder; m = m.parentElement) {
          if (cs(m).animationName !== 'none' && cs(m).animationIterationCount === 'infinite') { moving = true; break; }
        }
        if (moving) continue;
        how = 'past the screen edge, cut off by ' + sel(holder);
      }
    }
    let a = e.parentElement, dup = false;
    for (; a; a = a.parentElement) if (flagged.has(a)) { dup = true; break; }
    if (dup) continue;
    flagged.add(e);
    push('OVERFLOW', e, Math.round(past) + 'px ' + how);
  }

  // Page-level sideways scroll, reported once whatever caused it.
  const se = document.scrollingElement;
  if (se.scrollWidth > W + 1) {
    out.push({ kind: 'OVERFLOW', sel: '(page)', text: '', detail: 'the page scrolls sideways by ' + (se.scrollWidth - W) + 'px' });
  }

  for (const e of all) {
    const c = cs(e), r = R.get(e);
    const own = ownText(e);
    const fs = parseFloat(c.fontSize) || 14;
    const lh = c.lineHeight === 'normal' ? fs * 1.25 : parseFloat(c.lineHeight);

    /* NARROW. The W01 symptom: a sentence stacked one or two words per line. */
    if (own.length >= 18 && own.split(' ').length >= 4 && r.width < Math.max(56, fs * 4.2)
        && r.height > lh * 5 && c.writingMode === 'horizontal-tb') {
      push('NARROW', e, Math.round(r.width) + 'px wide, ' + Math.round(r.height) + 'px tall');
    }

    /* IMPLICIT. The phone CSS forces these grids to one column. */
    if (W <= 768 && (c.display === 'grid' || c.display === 'inline-grid')
        && e.matches('.welcome-grid, .n-grid, .n-grid-3, .qcat-grid, [style*="grid-template-columns"]')) {
      const tracks = c.gridTemplateColumns.split(' ').filter(Boolean).length;
      if (tracks > 1) push('IMPLICIT', e, tracks + ' columns at ' + W + 'px');
    }

    /* CUT. Text in a box that clips it, with nothing to say it was clipped. */
    if (own.length >= 3) {
      const clipsX = ['hidden', 'clip'].includes(c.overflowX);
      const clipsY = ['hidden', 'clip'].includes(c.overflowY);
      const animated = c.animationName !== 'none';
      const clamped = c.webkitLineClamp && c.webkitLineClamp !== 'none';
      if (!animated && clipsX && c.textOverflow !== 'ellipsis' && e.scrollWidth > e.clientWidth + 3) {
        push('CUT', e, 'text ' + (e.scrollWidth - e.clientWidth) + 'px wider than its box');
      } else if (!animated && !clamped && clipsY && e.scrollHeight > e.clientHeight + 4 && r.height > lh * 0.8) {
        push('CUT', e, 'text ' + (e.scrollHeight - e.clientHeight) + 'px taller than its box');
      }
    }

    /* CONTROL. Same arithmetic as text_fits.py. */
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.tagName)
        && !['checkbox', 'radio', 'range', 'color', 'file', 'hidden'].includes(e.type)) {
      const room = parseFloat(c.height) - parseFloat(c.paddingTop) - parseFloat(c.paddingBottom)
                 - parseFloat(c.borderTopWidth) - parseFloat(c.borderBottomWidth);
      const rows = e.tagName === 'TEXTAREA' ? (parseInt(e.rows, 10) || 2) : 1;
      if (isFinite(room) && isFinite(lh) && room < lh * rows - 1) {
        push('CONTROL', e, Math.round(room) + 'px of room for ' + Math.round(lh * rows) + 'px of text');
      }
    }
  }

  /* OVERLAP between in-flow siblings. Sorted by top and swept, so a list of a
     thousand questions costs a thousand comparisons, not a million. */
  const parents = new Set(all.map(e => e.parentElement).filter(Boolean));
  for (const p of parents) {
    if (cs(p).display === 'contents') continue;
    const kids = [...p.children].filter(k => R.has(k)).filter(k => {
      const c = cs(k);
      if (c.position === 'absolute' || c.position === 'fixed') return false;
      // An inline element that wraps reports one rectangle around both of its
      // lines, so it "overlaps" whatever follows it on the second line. That
      // flagged every wrapped <strong> and value chip in W01.
      if (c.display === 'inline' || c.display === 'contents') return false;
      if (parseFloat(c.marginTop) < 0 || parseFloat(c.marginLeft) < 0
          || parseFloat(c.marginRight) < 0 || parseFloat(c.marginBottom) < 0) return false;
      if (c.transform !== 'none') return false;
      return true;
    }).sort((a, b) => R.get(a).top - R.get(b).top);
    for (let i = 0; i < kids.length; i++) {
      const a = R.get(kids[i]);
      for (let j = i + 1; j < kids.length; j++) {
        const b = R.get(kids[j]);
        if (b.top >= a.bottom - 2) break;
        const ox = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const oy = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (ox > 3 && oy > 3) {
          out.push({ kind: 'OVERLAP', sel: sel(kids[i]), text: text(kids[i]),
                     detail: 'overlaps ' + sel(kids[j]) + ' "' + text(kids[j]).slice(0, 24) + '" by ' + Math.round(ox) + 'x' + Math.round(oy) });
        }
      }
    }
  }

  /* NOHINT. A notes table scrolling sideways inside its wrapper with no hint
     that there is more. The wrapper clipping is by design; hiding columns
     without saying so is not. table-hints.js measured only the table, which
     at 769px+ is exactly as wide as itself, so tablets got no hint. */
  document.querySelectorAll('.n-table-wrap').forEach(w => {
    if (isHidden(w)) return;
    if (w.scrollWidth > w.clientWidth + 2 && !w.classList.contains('has-scroll-hint')
        && !w.classList.contains('hint-dismissed')) {
      const t = w.querySelector('table') || w;
      push('NOHINT', t, (w.scrollWidth - w.clientWidth) + 'px of table out of sight, no scroll hint');
    }
  });

  /* UNREACHABLE. A control off the top or bottom of the screen, inside a fixed
     panel, with no scroller between it and that panel. */
  const INTERACTIVE = 'button, a[href], input:not([type=hidden]), select, textarea, [onclick], [role=button]';
  for (const e of all) {
    if (!e.matches(INTERACTIVE)) continue;
    const r = R.get(e);
    if (r.bottom <= H + 1 && r.top >= -1) continue;
    let fixed = cs(e).position === 'fixed' ? e : null, scroller = false;
    for (let a = e.parentElement; a && !fixed; a = a.parentElement) {
      const c = cs(a);
      if (['auto', 'scroll'].includes(c.overflowY) && a.scrollHeight > a.clientHeight + 1) { scroller = true; break; }
      if (c.position === 'fixed') fixed = a;
    }
    if (fixed && !scroller) push('UNREACHABLE', e, 'at y ' + Math.round(r.top) + '-' + Math.round(r.bottom) + ' on a ' + H + 'px screen');
  }

  /* TAP. The centre of a control lands on a different control. Only for
     controls on screen, since elementFromPoint cannot see anything else. */
  const ctrls = all.filter(e => e.matches(INTERACTIVE));
  for (const e of ctrls) {
    const r = R.get(e);
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    if (x < 0 || y < 0 || x > W || y > H || r.width < 8 || r.height < 8) continue;
    /* Scrolled out of its own box. The admin rail at 768px scrolls, and a nav
       button below its fold has its centre "on screen" while the footer is what
       is actually drawn there. The reader scrolls the rail to reach it, so that
       is not a covered control. */
    let clipped = false;
    for (let a = e.parentElement; a && a !== document.body; a = a.parentElement) {
      if (cs(a).overflowX === 'visible' && cs(a).overflowY === 'visible') continue;
      const ar = a.getBoundingClientRect();
      if (x < ar.left || x > ar.right || y < ar.top || y > ar.bottom) { clipped = true; break; }
    }
    if (clipped) continue;
    const hit = document.elementFromPoint(x, y);
    if (!hit || hit === e || e.contains(hit) || hit.contains(e)) continue;
    const hc = hit.closest(INTERACTIVE);
    // A full-screen scrim is a control too, and everything sits over it.
    if (r.width * r.height >= W * H * 0.5) continue;
    if (hc && hc !== e && !hc.contains(e) && !e.contains(hc)) {
      const hr = hc.getBoundingClientRect();
      /* An open menu, drawer or dialog covers the page under it by design. The
         first version only recognised position:fixed written inline, so every
         open menu reported the whole page as covered. The layer is found by
         computed style now: a fixed or sticky ancestor of the covering control
         that does not also hold the covered one. A large layer is a panel and
         is skipped; a small one (a floating button) is still reported. */
      let layer = null;
      for (let a = hc; a && a !== document.body; a = a.parentElement) {
        const p = cs(a).position;
        if ((p === 'fixed' || p === 'sticky') && !a.contains(e)) { layer = a; break; }
      }
      const lr = layer && layer.getBoundingClientRect();
      const panel = lr && lr.width * lr.height >= W * H * 0.2;
      if (!panel && hr.width * hr.height < W * H * 0.5) {
        push('TAP', e, 'its centre is taken by ' + sel(hc) + ' "' + text(hc).slice(0, 24) + '"');
      }
    }
  }

  const seen = new Set();
  return out.filter(o => { const k = o.kind + o.sel + o.text + o.detail.replace(/\d+/g, '#');
                           if (seen.has(k)) return false; seen.add(k); return true; });
}
"""

# Planted faults for --selftest. Each must be found; the clean run must not
# report any of them. An audit nobody has seen fail is an assumption.
PLANTS = r"""
() => {
  const host = document.querySelector('.view.active') || document.body;
  host.insertAdjacentHTML('afterbegin', `
    <div style="position:relative;height:44px"><button id="plant-tap-under" style="width:120px;height:40px">plant under</button><button id="plant-tap-over" style="position:absolute;left:0;top:0;width:120px;height:40px">plant over</button></div>
    <div id="plant-wide" style="width:640px;background:#333;color:#fff;padding:4px">plant wide block of text</div>
    <div style="display:flex;gap:4px"><div id="plant-narrow" style="flex:0 0 30px">plant narrow column text that stacks one word per line</div><div style="flex:1">rest</div></div>
    <div id="plant-cut" style="width:60px;overflow:hidden;white-space:nowrap">plant cut text that runs on</div>
    <div><div id="plant-ov-a" style="height:40px;background:#444">plant overlap a</div><div id="plant-ov-b" style="height:40px;position:relative;top:-30px;background:#666">plant overlap b</div></div>
    <div class="n-grid plant-grid" style="grid-template-columns:1fr 1fr 1fr !important"><div id="plant-grid-a">plant grid a</div><div>plant grid b</div></div>
    <select id="plant-control" style="height:20px;padding:10px;font-size:16px"><option>plant</option></select>
  `);
  document.body.insertAdjacentHTML('beforeend', `
    <div id="plant-modal" style="position:fixed;left:0;right:0;top:55%;bottom:0;z-index:99999;background:rgba(0,0,0,.5)">
      <div style="height:2000px;background:#222;color:#fff">tall modal<button id="plant-unreach" style="margin-top:1900px">plant unreachable</button></div>
    </div>`);
  return true;
}
"""
PLANT_EXPECT = [('OVERFLOW', 'plant-wide'), ('NARROW', 'plant-narrow'), ('CUT', 'plant-cut'),
                ('OVERLAP', 'plant-ov-a'), ('IMPLICIT', 'n-grid'), ('CONTROL', 'plant-control'),
                ('UNREACHABLE', 'plant-unreach'), ('TAP', 'plant-tap-under')]


# --------------------------------------------------------------------------
# Serving. Pages are patched past the sign-in redirect; content comes from the
# plaintext mirror; production is unreachable.
# --------------------------------------------------------------------------
REDIRECTS = ["window.location.replace('./auth.html');", "window.location.replace('../auth.html');",
             "window.location.replace('auth.html');", "window.location.replace('/app/auth.html');"]
blocked = [0]


def page_body(rel):
    src = open(os.path.join(ROOT, rel), encoding='utf-8').read()
    if not rel.endswith('auth.html'):
        for r in REDIRECTS:
            src = src.replace(r, "console.warn('[matrix] redirect suppressed');")
    return src


def up():
    try:
        urllib.request.urlopen(BASE + 'app/style.css', timeout=2)
        return True
    except Exception:
        return False


def make_router(state, css_override=None, swaps=None):
    """swaps: {served path: [(old, new), ...]}, for mutation tests. Every
    swap must apply, or the test would pass against an unmutated file."""
    pages = {}

    def handler(route):
        req = route.request
        url = req.url
        host = urllib.parse.urlparse(url).netloc
        if 'supabase.co' in host or 'razorpay' in host:
            blocked[0] += 1
            return route.fulfill(status=503, body='{"error":"blocked by mobile_matrix"}',
                                 content_type='application/json')
        if not host.startswith('127.0.0.1'):
            return route.continue_()
        path = urllib.parse.unquote(urllib.parse.urlparse(url).path).lstrip('/')
        if path.startswith('data/') and path.endswith('.js'):
            if PLAIN and os.path.exists(os.path.join(PLAIN, path)):
                return route.fulfill(status=200, body=open(os.path.join(PLAIN, path), encoding='utf-8').read(),
                                     content_type='application/javascript; charset=utf-8')
            return route.continue_()
        # Swaps first. Checked after the page, a swap to the page itself never
        # applied, and a mutation test of auth.html ran on the unmutated file.
        if swaps and path in swaps:
            body = open(os.path.join(ROOT, path), encoding='utf-8').read()
            for a, b in swaps[path]:
                if a not in body:
                    raise SystemExit('  mutation did not apply to %s: %r' % (path, a[:60]))
                body = body.replace(a, b)
            kind = 'text/css' if path.endswith('.css') else ('application/javascript' if path.endswith('.js') else 'text/html')
            if path == state['page']:
                for r in REDIRECTS:
                    body = body.replace(r, "console.warn('[matrix] redirect suppressed');")
            return route.fulfill(status=200, body=body, content_type=kind + '; charset=utf-8')
        if path == state['page']:
            if path not in pages:
                pages[path] = page_body(path)
            return route.fulfill(status=200, body=pages[path], content_type='text/html; charset=utf-8')
        if css_override and path == 'app/style.css':
            return route.fulfill(status=200, body=css_override, content_type='text/css; charset=utf-8')
        return route.continue_()
    return handler


def open_state(br, name, size, plants=False, css_override=None, swaps=None):
    s = STATES[name]
    _, w, h = size
    ctx = br.new_context(viewport={'width': w, 'height': h}, is_mobile=w < 1024, has_touch=True,
                         device_scale_factor=2)
    ctx.add_init_script(FIRST_RUN)
    ctx.add_init_script(WAIT_FN)
    ctx.add_init_script("window.confirm = () => false; window.alert = () => {}; window.open = () => null;")
    if s['page'].endswith('admin/index.html'):
        ctx.add_init_script(ADMIN_STUBS)
    pg = ctx.new_page()
    errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)[:160]))
    pg.route('**/*', make_router(s, css_override, swaps))
    pg.goto(BASE + s['page'], wait_until='load', timeout=45000)
    pg.wait_for_timeout(900)
    pg.evaluate("""(ids) => {
        document.documentElement.style.visibility = 'visible';
        ids.forEach(i => { const e = document.getElementById(i); if (e) e.style.display = 'none'; });
    }""", OVERLAYS)
    ok = True
    if s['open']:
        try:
            pg.evaluate("async () => { %s }" % s['open'])
        except Exception as e:
            errs.append('open: ' + str(e)[:160])
    try:
        ok = pg.evaluate("() => __until(() => (%s), 12000)" % s['expect'])
    except Exception as e:
        ok = False
        errs.append('expect: ' + str(e)[:120])
    pg.wait_for_timeout(500)
    if plants:
        pg.evaluate(PLANTS)
        pg.wait_for_timeout(150)
    return ctx, pg, ok, errs


def measure_at(pg, size, reopen_js=None):
    _, w, h = size
    pg.set_viewport_size({'width': w, 'height': h})
    pg.wait_for_timeout(220)
    if reopen_js:
        try:
            pg.evaluate("async () => { %s }" % reopen_js)
            pg.wait_for_timeout(200)
        except Exception:
            pass
    return pg.evaluate(MEASURE)


def main():
    from playwright.sync_api import sync_playwright
    proc = None
    if not up():
        proc = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--bind', '127.0.0.1'],
                                cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(60):
            time.sleep(0.5)
            if up():
                break
    try:
        with sync_playwright() as pw:
            br = pw.chromium.launch(headless=True)
            code = selftest(br) if ARGS.selftest else sweep(br)
            br.close()
    finally:
        if proc:
            proc.kill()
    sys.exit(code)


def selftest(br):
    size = ('Galaxy S8', 360, 740)
    failures = 0
    # 1. Planted faults on a content-free screen: every kind must be caught.
    ctx, pg, ok, errs = open_state(br, 'coc:welcome', size, plants=True)
    found = measure_at(pg, size)
    ctx.close()
    for kind, needle in PLANT_EXPECT:
        hit = [f for f in found if f['kind'] == kind and needle in f['sel']]
        print('  %-5s planted %-11s %s' % ('ok' if hit else 'MISS', kind, needle))
        failures += 0 if hit else 1
    # 2. The control: the same screen, unplanted, reports none of them.
    ctx, pg, ok, errs = open_state(br, 'coc:welcome', size)
    clean = measure_at(pg, size)
    ctx.close()
    leaked = [f for f in clean if 'plant' in f['sel']]
    print('  %-5s control run carries no planted finding' % ('ok' if not leaked else 'FAIL'))
    failures += 1 if leaked else 0
    if not ok:
        print('  FAIL  control screen did not render'); failures += 1
    # 3. The real bug. W01 with the 14 Sep fix removed must be caught at 360.
    if PLAIN:
        css = open(os.path.join(ROOT, 'app', 'style.css'), encoding='utf-8').read()
        broken = css.replace('grid-column: 1 / -1 !important;', '')
        if broken == css:
            print('  FAIL  could not find the grid-column reset to remove'); failures += 1
        else:
            ctx, pg, ok, errs = open_state(br, 'coc:notes-W01', size, css_override=broken)
            got = measure_at(pg, size) if ok else []
            ctx.close()
            # IMPLICIT or NARROW specifically. Accepting OVERLAP here once let a
            # false positive from wrapped inline text stand in for the real bug.
            hit = [f for f in got if f['kind'] in ('IMPLICIT', 'NARROW')]
            print('  %-5s the real W01 bug, fix removed, is caught at 360px (%d findings)'
                  % ('ok' if hit else 'MISS', len(hit)))
            failures += 0 if hit else 1
            ctx, pg, ok, errs = open_state(br, 'coc:notes-W01', size)
            got = measure_at(pg, size) if ok else None
            ctx.close()
            bad = [f for f in (got or []) if f['kind'] in ('IMPLICIT', 'NARROW')]
            print('  %-5s ...and W01 as shipped is clean of it' % ('ok' if got is not None and not bad else 'FAIL'))
            failures += 0 if (got is not None and not bad) else 1
    else:
        print('  skip  the real W01 bug (needs --plain)')
    # Each fix made from this sweep, undone in the served copy only. The repo
    # files are never written.
    MUTATIONS = [
        ('Surveyor Q&A filters fit a 360px phone', 'coc:sq-all', ('x', 360, 740), 'OVERFLOW', 'sq-all-topic-filter',
         {'app/style.css': [('cursor: pointer; max-width: 100%; }', 'cursor: pointer; }')]}, True),
        ('a long Surveyor Q&A label wraps at 280px', 'coc:sq-all', ('x', 280, 653), 'OVERFLOW', 'sq-label',
         {'app/style.css': [('.sq-label { font-size: 12px; white-space: normal; flex-shrink: 1; max-width: 100%; }', '.sq-label { font-size: 12px; }')]}, True),
        ('the sign-in scroll button stays off Sign In', 'auth:signin', ('x', 280, 653), 'TAP', 'login-btn',
         {'app/auth.html': [("targetVisible || coversControl()", "targetVisible")]}, False),
        ('the quiz buttons fit a 280px phone', 'coc:quiz-answered', ('x', 280, 653), 'OVERFLOW', 'Skip',
         {'app/style.css': [('.quiz-actions { padding: 12px 16px; flex-wrap: wrap; gap: 8px; }', '.quiz-actions { padding: 12px 16px; }'),
                            ('.quiz-actions > div { flex-wrap: wrap; justify-content: flex-end; margin-left: auto; }', '')]}, True),
        ('tablet tables say they scroll', 'coc:notes-T15', ('x', 769, 1024), 'NOHINT', 'n-table',
         {'app/table-hints.js': [("|| wrap.scrollWidth > wrap.clientWidth + 2;", ";")]}, True),
    ]
    for label, name, sz, kind, needle, swaps, needs_plain in MUTATIONS:
        if needs_plain and not PLAIN and STATES[name]['content']:
            print('  skip  %s (needs --plain)' % label); continue
        # Checked here, before any page loads. A stale search string used to
        # raise inside the route handler and take the whole self-test down with
        # it; now it fails this one line, loudly, and the rest still run.
        stale = [(pth, a) for pth, pairs in swaps.items() for a, _ in pairs
                 if a not in open(os.path.join(ROOT, pth), encoding='utf-8').read()]
        if stale:
            print('  FAIL  %s (the undo no longer matches %s: %r)' % (label, stale[0][0], stale[0][1][:50]))
            failures += 1
            continue
        results = []
        for mutated in (True, False):
            ctx, pg, ok, errs = open_state(br, name, sz, swaps=swaps if mutated else None)
            got = measure_at(pg, sz) if ok else None
            ctx.close()
            results.append(None if got is None else [f for f in got if f['kind'] == kind
                                                    and (needle in f['sel'] or needle in f['text'])])
        broke, fixed = results
        good = broke is not None and fixed is not None and bool(broke) and not fixed
        print('  %-5s %s (undone: %s, as shipped: %s)' % (
            'ok' if good else 'FAIL', label,
            'no render' if broke is None else ('caught' if broke else 'MISSED'),
            'no render' if fixed is None else ('clean' if not fixed else 'STILL FLAGGED')))
        failures += 0 if good else 1
    print('  production requests blocked: %d, none sent' % blocked[0])
    print('')
    print('  selftest: %s' % ('PASS' if not failures else '%d FAILED' % failures))
    return 1 if failures else 0


def sweep(br):
    sizes = QUICK if ARGS.quick else PORTRAIT + LANDSCAPE + EDGES
    sizes = sorted(sizes, key=lambda s: (s[1], s[2]))
    names = list(STATES)
    if ARGS.state:
        names = [n for n in names if any(n.startswith(p) for p in ARGS.state)]
    i, n = map(int, ARGS.shard.split('/'))
    names = names[i::n]

    groups = {}      # (state, kind, sel, text) -> {widths, detail}
    empty, unchecked, harness = [], [], []
    t0 = time.time()
    for name in names:
        s = STATES[name]
        if s['content'] and not PLAIN:
            unchecked.append(name)
            continue
        try:
            ctx, pg, ok, errs = open_state(br, name, sizes[0])
        except Exception as e:
            harness.append('%s: %s' % (name, str(e)[:140]))
            continue
        if not ok:
            empty.append((name, errs[:2]))
            ctx.close()
            continue
        count = 0
        for size in sizes:
            try:
                found = measure_at(pg, size, s['open'] if s['reopen'] else None)
            except Exception as e:
                harness.append('%s @%d: %s' % (name, size[1], str(e)[:120]))
                continue
            for f in found:
                key = (name, f['kind'], f['sel'], f['text'])
                g = groups.setdefault(key, {'sizes': [], 'detail': f['detail']})
                g['sizes'].append(size)
                count += 1
        ctx.close()
        print('  %-28s %s' % (name, ('%d finding(s)' % count) if count else 'clean'), flush=True)

    # Confirm every finding on a fresh load at its narrowest size.
    confirmed = {}
    if not ARGS.no_confirm:
        by_state = {}
        for key, g in groups.items():
            by_state.setdefault((key[0], g['sizes'][0]), []).append(key)
        for (name, size), keys in by_state.items():
            try:
                ctx, pg, ok, errs = open_state(br, name, size)
                fresh = measure_at(pg, size) if ok else []
                ctx.close()
            except Exception:
                fresh = []
            fk = {(name, f['kind'], f['sel'], f['text']) for f in fresh}
            if ARGS.shots and fresh:
                os.makedirs(ARGS.shots, exist_ok=True)
                try:
                    ctx, pg, ok, errs = open_state(br, name, size)
                    pg.evaluate("""(sels) => {
                      sels.forEach(s => { try {
                        document.querySelectorAll(s).forEach(e => { e.style.outline = '3px solid red'; });
                      } catch (e) {} });
                      // A finding below the fold photographs as nothing, so
                      // bring the first one into view.
                      for (const s of sels) { try { const e = document.querySelector(s);
                        if (e) { e.scrollIntoView({block: 'center'}); break; } } catch (e) {} }
                    }""", [k[2] for k in keys if k[2] != '(page)'])
                    pg.wait_for_timeout(250)
                    pg.screenshot(path=os.path.join(ARGS.shots, '%s@%dx%d.png'
                                                    % (name.replace(':', '_'), size[1], size[2])))
                    ctx.close()
                except Exception:
                    pass
            for k in keys:
                confirmed[k] = k in fk
    else:
        confirmed = {k: True for k in groups}

    print('')
    print('  %d screens x %d sizes in %.0fs; %d production requests blocked, none sent'
          % (len(names), len(sizes), time.time() - t0, blocked[0]))
    real = {k: g for k, g in groups.items() if confirmed.get(k)}
    resize_only = {k: g for k, g in groups.items() if not confirmed.get(k)}
    last = None
    for key in sorted(real, key=lambda k: (k[0], k[1], k[2])):
        g = real[key]
        if key[0] != last:
            print('')
            print('  ' + key[0])
            last = key[0]
        ws = sorted({s[1] if s[2] >= s[1] else s[1] for s in g['sizes']})
        lands = sorted({'%dx%d' % (s[1], s[2]) for s in g['sizes'] if s[2] < s[1]})
        where = ', '.join(map(str, ws[:10])) + (' ...' if len(ws) > 10 else '')
        if lands:
            where += ' | landscape ' + ', '.join(lands[:4])
        print('    %-11s %s "%s"' % (key[1], key[2][:60], key[3][:30]))
        print('                %s   @ %s' % (g['detail'], where))
    if resize_only:
        print('')
        print('  %d finding(s) seen only after a resize, not on a fresh load (rotation-only, not failed):'
              % len(resize_only))
        for key in list(resize_only)[:15]:
            print('    %-28s %-11s %s' % (key[0], key[1], key[2][:60]))
    for name, errs in empty:
        print('')
        print('  EMPTY  %s rendered nothing to measure. Treated as failure: %s' % (name, '; '.join(errs) or ''))
    for h in harness[:10]:
        print('  HARNESS  ' + h)
    if ARGS.json:
        with open(ARGS.json, 'w', encoding='utf-8') as fh:
            json.dump([{'state': k[0], 'kind': k[1], 'sel': k[2], 'text': k[3], 'detail': g['detail'],
                        'sizes': g['sizes'], 'confirmed': confirmed.get(k)} for k, g in groups.items()],
                      fh, indent=1)
    print('')
    if unchecked:
        print('  %d screen(s) need decrypted content and were NOT checked (pass --plain).' % len(unchecked))
    bad = len(real) + len(empty) + len(harness)
    print('  %d confirmed layout problem(s), %d empty screen(s), %d harness error(s).'
          % (len(real), len(empty), len(harness)))
    if bad:
        return 1
    return 2 if unchecked else 0


if __name__ == '__main__':
    main()

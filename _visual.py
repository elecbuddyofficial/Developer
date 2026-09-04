# -*- coding: utf-8 -*-
"""Visual check. Run after any change that touches a page.

    python _visual.py                    # every screen, every theme
    python _visual.py --screen home      # one screen
    python _visual.py --theme light      # one palette

Exits non-zero if a page throws, if a background comes out transparent, or if
text lands under its contrast floor in any palette.

WHY THIS EXISTS

CLAUDE.md records that every theme bug in this project's history was found by
Blesson and not by a test, and this session added three more: text at 1.41:1 on
the dark theme, badges rendering blue because a two-class selector outranked
them, and the home card flashing "Work in progress" on every load. All three
were invisible to the checks that existed, because those checks read CSS
instead of looking at a rendered page.

theme-audit.cjs still earns its place. It reasons about every element in all
palettes from the source, including states never rendered here. This is the
other half: the real page, the real cascade, the colours the browser actually
computed, in all three palettes.

THE AUTH GATE

index.html redirects to auth.html without a session, so a plain visit tests the
login form and nothing else. Three ways past it were tried:

  overriding window.location.replace   Location properties are non-configurable
                                       in Chromium. Both the define and the
                                       assignment fail, and a try/catch hides it.
  aborting the auth.html request       Chromium replaces the document with its
                                       own error page. Worse than the gate.
  patching the served HTML             works.

So the file is read from disk, the four redirect calls become a console.warn,
and that patched copy is served to the browser. Nothing else is altered, no
session is fabricated, and no content key is ever requested: any real call
still fails, which is correct. What this tests is layout, theming and
rendering, which is what the eye-checks were for.
"""
import argparse
import os
import subprocess
import sys
import time
import urllib.request

# The Windows console is cp1252, and page text is not. A finding whose snippet
# contained an emoji crashed the whole report with UnicodeEncodeError, so the
# run failed at the moment it had something to say. Replace what cannot be
# encoded rather than lose the finding.
try:
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

ROOT = os.path.dirname(os.path.abspath(__file__))
SHOTS = os.path.join(ROOT, '_visual-shots')
PORT = 8123
BASE = 'http://127.0.0.1:%d/app' % PORT

# The three real palettes. "system" is a fourth setting, but it resolves to
# dark or light, so it is another code path rather than another palette.
THEMES = ['dark', 'light', 'amoled']

# 'running' picks which live-exam card is on screen. Both are listed because
# they are different components: the month card is blue, the running card is
# red with a pulsing dot, and a palette bug in one says nothing about the other.
SCREENS = {
    'home':     {'file': 'index.html',   'view': 'view-welcome',   'running': False},
    'homelive': {'file': 'index.html',   'view': 'view-welcome',   'running': True},
    'oral':     {'file': 'index.html',   'view': 'view-oral'},
    'livefeed': {'file': 'index.html',   'view': 'view-live-exam', 'running': False},
    'written':  {'file': 'index.html',   'view': 'view-written'},
    # Modals are where the theme bugs in this project have actually shipped:
    # the notification modal, the exit survey, the "What's new" panel. They are
    # invisible to a check that only looks at the page underneath them.
    'feedback': {'file': 'index.html',   'view': 'view-welcome',
                 'open': 'openFeedback()'},
    # The "What's new" modal, which is the app's startup notice. It was in
    # OVERLAYS below (dismissed, never looked at) while being one of the very
    # modals this file exists to check. Seeded with markup matching what
    # maybeShowUpdates builds, so the layout under test is the real one.
    'whatsnew': {'file': 'index.html',   'view': 'view-welcome', 'open': """
        (() => {
          const card = (t, chip, title, body) =>
            '<div style="background:var(--surface2);border:1px solid var(--border);'
            + 'border-radius:9px;padding:13px 15px;margin-bottom:10px;">'
            + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">'
            + '<span class="nf-chip nf-chip-' + chip + '">' + chip + '</span>'
            + '<span style="font-size:11px;color:var(--text3);">' + t + '</span></div>'
            + '<div style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px;">'
            + title + '</div>'
            + '<div style="font-size:13px;color:var(--text3);line-height:1.6;">' + body + '</div></div>';
          document.getElementById('upd-list').innerHTML =
            card('2 h ago','update','Join our update channel',
                 'Running MMD oral questions the same day candidates report them.')
          + card('1 d ago','info','SUPER100',
                 'A hundred rupees off any plan, for readers who reported a question.');
          document.getElementById('upd-modal').style.display = 'block';
        })()"""},
    # The notification toast. Two bugs have shipped in it unseen: a hardcoded
    # navy background under themed text, and a top offset that put it across
    # the topbar. Neither was visible to any check, because nothing rendered it.
    'toast':    {'file': 'index.html',   'view': 'view-welcome', 'open': """
        EBNotify.showToast({ type:'update', title:'Feature Update' })"""},
    # The notification DETAIL dialog, with a coupon. Its markup is built in JS
    # by openNotifDetail, so it never exists in the parsed DOM and theme-audit
    # cannot reach it: that is how .nfd-copy shipped at 3.00:1 in light. Seeded
    # through _nfById, which is the same path the real bell uses.
    'nfdetail': {'file': 'index.html',   'view': 'view-welcome', 'open': """
        (() => {
          // openNotifDetail records the read. There is no session here, so the
          // real call returns 401 and that noise would read as a page error.
          // Stubbed rather than skipped, so the code path still runs.
          if (window._sbClient) window._sbClient.rpc = () => Promise.resolve({});
          window._nfById = { d1: { id:'d1', type:'info', title:'SUPER100',
            created_at: new Date(Date.now()-86400e3).toISOString(),
            body:'Flat 100 rupees off, just for you. Use the code on any subscription.',
            template:'coupon',
            meta:{ code:'SUPER100', detail:'One use per account.', expires:'30 Sep 2026' } } };
          openNotifDetail('d1');
        })()"""},
    # The PLAIN detail, which is what both live notices actually are. It has no
    # coupon block and no CTA under it, so it is the variant most likely to
    # look unfinished, and the one worth keeping an eye on.
    'nfplain':  {'file': 'index.html',   'view': 'view-welcome', 'open': """
        (() => {
          if (window._sbClient) window._sbClient.rpc = () => Promise.resolve({});
          window._nfById = { p1: { id:'p1', type:'update', title:'Feature Update',
            created_at: new Date().toISOString(), template:'plain', meta:{},
            body:'New live exam feed. Please go to Orals to access it.\\n\\nQuestions asked in ongoing oral examinations are updated the same day candidates report them.' } };
          openNotifDetail('p1');
        })()"""},
    # The profile panel's two tabs. It used to be Account with a Notifications
    # screen stacked behind a Back button, so neither pane was ever rendered by
    # any check. Both are now, because a tab strip that looks wrong in one
    # palette is exactly the bug this file exists to catch.
    'profile':  {'file': 'index.html',   'view': 'view-welcome',
                 'open': "openProfile(); showProfilePane('main')"},
    'profnotif':{'file': 'index.html',   'view': 'view-welcome',
                 'open': "openProfile(); showProfilePane('notif')"},
    # The forced sponsorship notice. Hard blocking, so if it renders wrong in a
    # palette a reader is stuck looking at it with no way past.
    # The Sponsorship notifications panel. Real notice bodies are long runs of
    # hand-typed eligibility criteria, which is the case the layout has to
    # survive, so the stub uses one.
    'notifpanel': {'file': 'sponsorship/index.html', 'view': None, 'open': """
        (() => {
          const N = [
            { company:'Anglo Eastern', course:'ETO', link:'https://example.com/a',
              opens_on:'2026-08-21', closes_on:'2026-09-03',
              note:'Examination Schedule for September 2026 : 5th September 2026 - Kolkata, 6th September 2026 - Delhi, 12th September 2026 - Mumbai & Chennai' },
            { company:'MSC', course:'ETO', link:'https://example.com/b',
              opens_on:'2026-08-18', closes_on:'2026-09-16',
              note:'Age below 27 years on 1st Nov 2026. More than 65% in BE/B.Tech from AICTE approved college. Score more than 50% in English in 10th or 12th. Score more than 65% in 12th PCM.' },
            { company:'Maersk', course:'ETO', link:'https://example.com/c',
              opens_on:'2026-08-28', closes_on:null,
              note:'Admission Open: Electro Technical Officer (ETO) Batch: January 2027. Institution: AMET University. Eligibility: 4-year degree in Electrical, Electronics, or equivalent. Course Duration: 17 weeks.' }
          ];
          document.getElementById('nf-overlay').classList.add('open');
          document.documentElement.classList.add('_modal-open');
          document.getElementById('nf-list').innerHTML =
            '<div class="nf-group">Sponsorship windows</div>'
            + N.map(spCard).join('')
            + '<div class="nf-group">Announcements</div>'
            + '<div class="nf-item unread"><div class="nf-type-dot nf-dot-info"></div>'
            + '<div class="nf-content"><div class="nf-item-title">Sponsorship Guidance &amp; Interview Prep</div>'
            + '<div class="nf-item-body">Need help with your ETO sponsorship and interview preparation? '
            + 'Get one-to-one guidance from a working ETO to understand your current preparation level.</div>'
            + '<div class="nf-item-meta"><span class="nf-chip nf-chip-info">info</span>2 days ago</div>'
            + '</div></div>';
        })();
    """},

    # The mock interview slot picker. It was a long scroll of day headings and
    # is a day rail now, so it is exactly the kind of screen that regresses
    # silently: the modal is only reachable behind auth and a live slot query.
    'mockpick': {'file': 'sponsorship/index.html', 'view': None, 'open': """
        (() => {
          const mk = (d, h) => ({ id: 'x' + d + h, duration_minutes: 30,
            starts_at: new Date(Date.UTC(2026, 8, d, h - 5, 30)).toISOString() });
          _miSlots = [mk(3,12), mk(3,15), mk(3,17), mk(3,19),
                      mk(4,12), mk(4,15), mk(4,17),
                      mk(5,12), mk(5,15),
                      mk(6,19), mk(7,12), mk(8,15)];
          document.getElementById('mi-modal').style.display = 'block';
          // Step shown directly rather than via mockStep('slots'), which would
          // fire the real Supabase query. There is no session here, and until
          // mock_slots_time_tbc.sql is applied the time_tbc column does not
          // exist, so that query 400s. The slots are stubbed below anyway.
          ['pitch','slots','details','done'].forEach(k => {
            const el = document.getElementById('mi-step-' + k);
            if (el) el.style.display = (k === 'slots') ? '' : 'none';
          });
          const byDay = {}, order = [];
          _miSlots.forEach(sl => { const d = _miDay(sl.starts_at);
            if (!byDay[d]) { byDay[d] = []; order.push(d); } byDay[d].push(sl); });
          _miByDay = byDay; _miDayOrder = order;
          const box = document.getElementById('mi-slot-box');
          box.innerHTML =
            '<div class="mi-daybar" role="tablist">' + order.map((d, i) => {
              const f = byDay[d][0].starts_at, n = byDay[d].length;
              return '<button type="button" class="mi-daycard" role="tab" data-day="' + i +
                '" aria-pressed="' + (i === 0) + '" onclick="pickMockDay(' + i + ')">' +
                '<div class="mi-dc-dow">' + _miDowShort(f) + '</div>' +
                '<div class="mi-dc-num">' + _miDayNum(f) + '</div>' +
                '<div class="mi-dc-n">' + n + (n === 1 ? ' time' : ' times') + '</div></button>';
            }).join('') + '</div>' +
            '<div class="mi-daysel" id="mi-daysel"></div>' +
            '<div class="mi-slots" id="mi-times"></div>';
          pickMockDay(0);
          pickMockSlot(_miByDay[_miDayOrder[0]][1].id);
        })();
    """},

    # The mock interview details step, with the "Have a code?" coupon box
    # applied. Added alongside the interview-coupon feature, since a view
    # nobody registers is a view nobody checks on the next change near it.
    'mockdetails': {'file': 'sponsorship/index.html', 'view': None, 'open': """
        (() => {
          _miCfg = { headline:'Test your interview prep', blurb:'',
                     price_paise: 49900, duration_minutes: 30 };
          document.getElementById('mi-modal').style.display = 'block';
          _miPicked = { id:'x', starts_at: new Date(Date.now()+86400000).toISOString() };
          ['pitch','slots','details','done'].forEach(k => {
            const el = document.getElementById('mi-step-' + k);
            if (el) el.style.display = (k === 'details') ? '' : 'none';
          });
          document.getElementById('mi-chosen').innerHTML =
            'Booking <b>' + _miDay(_miPicked.starts_at) + ', ' + _miTime(_miPicked.starts_at) + ' IST</b>';
          toggleMockCouponBox();
          document.getElementById('mi-coupon-input').value = 'SAVE20';
          _miCoupon = { code: 'SAVE20' };
          document.getElementById('mi-coupon-box').style.display = 'none';
          const toggle = document.getElementById('mi-coupon-toggle');
          toggle.textContent = 'SAVE20 applied · remove';
          toggle.onclick = clearMockCoupon;
          const status = document.getElementById('mi-coupon-status');
          status.textContent = 'SAVE20 applied: ₹399 (was ₹499).';
          status.className = 'mi-coupon-status ok';
          status.style.display = '';
        })();
    """},

    'spforced': {'file': 'sponsorship/index.html', 'view': None, 'open': """
        (() => {
          _spShowForced([
            { id:'a', company:'Synergy Marine Group', course:'ETO',
              opens_on:'2026-08-01', closes_on:'2026-09-30',
              link:'https://example.com/apply',
              note:'Sponsorship for ETO cadets, 2027 intake. Written test followed by an interview.' },
            { id:'b', company:'Anglo Eastern', course:'GME',
              opens_on:'2026-08-15', closes_on:null,
              link:'https://example.com/apply2',
              note:'Rolling intake, closing date not announced.' }
          ]);
        })()"""},
    'auth':     {'file': 'auth.html',    'view': None},
}

# Both spellings. index.html sits beside auth.html and uses './auth.html';
# sponsorship/index.html is a directory deeper and uses '../auth.html'.
# Matching only the first sent every sponsorship run to the sign-in page,
# and the screen then reported "function is not defined" for a function
# that was never loaded, which reads like a code fault rather than a
# harness one. (courses.html retired 5 Sep 2026 - the course choice now
# lives on auth.html itself, before signing in.)
REDIRECTS = ["window.location.replace('./auth.html');",
             "window.location.replace('../auth.html');"]
SUPPRESS = "console.warn('[visual] auth redirect suppressed');"

# app.js runs startGuide() on a first visit, and the onboarding modal then sits
# over every page with a scrim behind it. Left in place it makes the whole run
# an audit of one modal: the first clean pass here was mostly measuring "Take
# the tour" over a dimmed backdrop. The app's own flag is the honest way past.
FIRST_RUN = "try { localStorage.setItem('guide_seen', '1'); } catch (e) {}"

# Anything still covering the page after that is dismissed and NAMED in the
# output, so a modal can never be hidden without it showing up in the report.
# upd-modal is NOT dismissed here any more: the 'whatsnew' screen above opens
# it deliberately, and a screen that dismisses the thing it is meant to check
# reports clean over ground it never looked at.
OVERLAYS = ['guide-overlay', 'guide-tooltip', 'tx-modal', 'wel-modal', 'notif-modal']

# Sample rows for screens that would otherwise lay out nothing. None of this is
# real content; it exists so the layout has something to lay out.
SEED = r"""
window._lxFeed = {
  sitting: { title: 'August 2026', centre: 'Mumbai', is_running: __RUNNING__ },
  questions: [
    { id:'1', asked_on:'2026-08-24', topic:'T04', surveyor:'Bijay Yadav',
      question_text:'What is a preferential trip and how does it operate?',
      answer_text:'Purpose: to shed non essential load when a generator is overloaded.\nWhat Gets Shed: air conditioning first, then galley equipment.\nHow It Works: a current relay opens the preference contactors in stages.' },
    { id:'2', asked_on:'2026-08-24', topic:'T15', surveyor:'Srivastava',
      question_text:'Class K fire',
      answer_text:'Definition: a cooking media fire, in vegetable oil and animal fat.\nMarine Classification: IMO practice calls the same hazard Class F.' },
    { id:'3', asked_on:'2026-08-21', topic:'T04', surveyor:'Srivastava',
      question_text:'HRC fuse',
      answer_text:'Construction: ceramic body, silver element, silica sand filler.\nBreaking Capacity: 80 to 100 kA.' }
  ]
};
"""

# Contrast on the rendered page. Walks up for the first opaque ancestor
# background, which is how the eye reads it, and is where the hardcoded
# background paired with themed text gives itself away.
CONTRAST = r"""
() => {
  const lum = (r, g, b) => {
    const f = v => { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
    return 0.2126*f(r) + 0.7152*f(g) + 0.0722*f(b);
  };
  const parse = s => {
    const m = (s || '').match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(',').map(x => parseFloat(x));
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  // Source-over, carrying alpha. Doing this without the alpha term looks right
  // until two translucent layers of the same hue stack up: they average back to
  // the raw colour, and forcing the result opaque reports a tint as a solid
  // fill. That misread the live-exam badge as 1.00:1 invisible text when it
  // actually sits near 5:1.
  const over = (f, b) => {
    const a = f.a + b.a*(1 - f.a);
    if (a === 0) return { r:0, g:0, b:0, a:0 };
    return {
      r: (f.r*f.a + b.r*b.a*(1-f.a)) / a,
      g: (f.g*f.a + b.g*b.a*(1-f.a)) / a,
      b: (f.b*f.a + b.b*b.a*(1-f.a)) / a, a
    };
  };

  const rootBg = parse(getComputedStyle(document.body).backgroundColor);
  const base = (rootBg && rootBg.a === 1) ? rootBg : { r:255, g:255, b:255, a:1 };

  const effBg = el => {
    let acc = null;
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (!c || c.a === 0) continue;
      acc = acc ? over(acc, c) : c;
      if (acc.a >= 0.999) return acc;
    }
    return acc ? over(acc, base) : base;
  };

  const out = [];
  document.querySelectorAll('body *').forEach(el => {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.3) return;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return;

    const text = [...el.childNodes]
      .filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').trim();
    if (text.length < 2) return;

    const fg = parse(cs.color);
    if (!fg || fg.a === 0) return;
    const bg = effBg(el);
    const f = fg.a < 1 ? over(fg, bg) : fg;
    const L1 = lum(f.r, f.g, f.b), L2 = lum(bg.r, bg.g, bg.b);
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

    const px = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = px >= 24 || (px >= 18.66 && bold);
    const floor = large ? 3.0 : 4.5;
    if (ratio < floor) {
      const cls = (el.className && typeof el.className === 'string')
        ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
      out.push({
        ratio: Math.round(ratio*100)/100, floor,
        sel: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + cls,
        text: text.slice(0, 42), fg: cs.color,
        bg: 'rgb(' + Math.round(bg.r) + ', ' + Math.round(bg.g) + ', ' + Math.round(bg.b) + ')'
      });
    }
  });
  return out.sort((a, b) => a.ratio - b.ratio);
}
"""


def server_up():
    try:
        urllib.request.urlopen(BASE + '/index.html', timeout=2)
        return True
    except Exception:
        return False


def start_server():
    if server_up():
        return None
    p = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--bind', '127.0.0.1'],
                         cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(25):
        time.sleep(0.4)
        if server_up():
            return p
    p.kill()
    raise SystemExit('could not start the dev server on port %d' % PORT)


def patched_html(fname):
    """The page as shipped, minus the redirect that would take us to the gate."""
    html = open(os.path.join(ROOT, 'app', fname), encoding='utf-8').read()
    if fname == 'auth.html':
        return html, 0
    n = 0
    for r in REDIRECTS:
        n += html.count(r)
        html = html.replace(r, SUPPRESS)
    return html, n


def make_server(body):
    """A one-argument route handler serving `body`. See the call site."""
    def serve(route):
        route.fulfill(status=200, body=body,
                      content_type='text/html; charset=utf-8')
    return serve


def run(screens, themes):
    from playwright.sync_api import sync_playwright
    os.makedirs(SHOTS, exist_ok=True)
    problems = []

    with sync_playwright() as pw:
        br = pw.chromium.launch(headless=True)
        for name in screens:
            cfg = SCREENS[name]
            body, npatch = patched_html(cfg['file'])
            ctx = br.new_context(viewport={'width': 1280, 'height': 950})
            ctx.add_init_script(FIRST_RUN)
            pg = ctx.new_page()
            # Strictly one parameter. Playwright counts a handler's arguments
            # and passes the Request as a second positional whenever there is
            # room for one, and a default argument counts as room: carrying the
            # body that way hands it the Request instead, which fails on the
            # wire as "Object of type Request is not JSON serializable".
            # So the body is closed over rather than passed.
            pg.route('**/app/' + cfg['file'], make_server(body))
            errs = []
            pg.on('pageerror', lambda e, s=errs: s.append(str(e)[:200]))
            pg.on('console', lambda m, s=errs:
                  s.append('console.error: ' + m.text[:170]) if m.type == 'error' else None)

            pg.goto('%s/%s' % (BASE, cfg['file']))
            pg.wait_for_load_state('networkidle')
            pg.wait_for_timeout(900)

            # The gate hides the document until a session exists; show it,
            # clear anything still covering the page, and switch to the view
            # under test.
            dismissed = pg.evaluate("""({view, ids}) => {
              document.documentElement.style.visibility = 'visible';
              document.body.style.overflow = 'auto';
              const gone = [];
              ids.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                const cs = getComputedStyle(el);
                if (cs.display === 'none' || cs.visibility === 'hidden') return;
                if (el.getBoundingClientRect().height < 4) return;
                el.style.display = 'none';
                gone.push(id);
              });
              if (view) {
                document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                const el = document.getElementById(view);
                if (el) el.classList.add('active');
              }
              return gone;
            }""", {'view': cfg['view'], 'ids': OVERLAYS})

            if cfg.get('open'):
                pg.evaluate("""(call) => { try { eval(call); }
                  catch (e) { console.error('open: ' + e.message); } }""", cfg['open'])
                pg.wait_for_timeout(400)

            if 'running' in cfg:
                pg.evaluate(SEED.replace('__RUNNING__', 'true' if cfg['running'] else 'false'))
                pg.evaluate("""() => { try {
                  if (window.lxRenderHomeCard) lxRenderHomeCard();
                  if (window.renderLiveExamFeed) renderLiveExamFeed();
                } catch (e) { console.error('render: ' + e.message); } }""")

            note = '  (%d redirects suppressed' % npatch if npatch else '  ('
            note += ('; dismissed ' + ', '.join(dismissed)) if dismissed else ''
            note = '' if note == '  (' else note + ')'
            bad = 0
            for t in themes:
                pg.evaluate("t => document.documentElement.setAttribute('data-theme', t)", t)
                pg.wait_for_timeout(260)
                pg.screenshot(path=os.path.join(SHOTS, '%s-%s.png' % (name, t)), full_page=True)

                bg = pg.evaluate("getComputedStyle(document.body).backgroundColor")
                if bg in ('rgba(0, 0, 0, 0)', 'transparent'):
                    problems.append('%s/%s: body background is transparent, so the page '
                                    'borrows the host ground' % (name, t))

                for f in pg.evaluate(CONTRAST)[:6]:
                    bad += 1
                    problems.append('%s/%-6s %5.2f:1 (needs %.1f)  %s  "%s"  %s on %s'
                                    % (name, t, f['ratio'], f['floor'], f['sel'],
                                       f['text'], f['fg'], f['bg']))

            for e in dict.fromkeys(errs):
                problems.append('%s: %s' % (name, e))
            state = 'ERRORS' if errs else ('%d contrast' % bad if bad else 'ok')
            print('  %-9s %s%s' % (name, state, note))
            ctx.close()
        br.close()

    print('\nscreenshots: %s' % SHOTS)
    if problems:
        print('\n%d problem(s):' % len(problems))
        for p in problems:
            print('  ' + p)
        return 1
    print('clean: no page errors, no transparent grounds, nothing under contrast floor')
    return 0


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--screen', choices=list(SCREENS) + ['all'], default='all')
    ap.add_argument('--theme', choices=THEMES + ['all'], default='all')
    a = ap.parse_args()

    proc = start_server()
    try:
        code = run(list(SCREENS) if a.screen == 'all' else [a.screen],
                   THEMES if a.theme == 'all' else [a.theme])
    finally:
        if proc:
            proc.kill()
    sys.exit(code)

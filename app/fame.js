/* Hall of Fame popup, shared by the CoC and Sponsorship apps.

   When a cadet passes CoC or is selected for sponsorship, an admin adds them
   in the console (Hall of Fame tab, app/admin/hall_of_fame_setup.sql). The
   next time any other cadet opens that course's app, this puts the entry in
   front of them once, then never again.

   "Once" is recorded server side in hall_of_fame_seen, not localStorage, so a
   cadet who reads it on their phone is not shown it again on their laptop.
   It is written on the Congratulations button, never on display: closing the tab mid-read
   leaves it to be shown next time rather than lost. Same rule the What's new
   modal follows, and for the same reason.

   One file rather than a copy in each page, because two copies of a rule is
   how every drift bug in this app started (see checkout.js). Zero DOM work at
   load: the modal is built on first use, the way EBDevices._overlay() is.

   It never stacks. The What's new modal, the first-run welcome, the forced
   sponsorship notice, the device limit and the upgrade modal all outrank
   it, and if any is open this does nothing and tries again on the next
   page load. */
(function () {
  'use strict';

  // An entry older than this is not news any more. Without a window, someone
  // signing up a year from now would be handed the whole archive at once.
  var WINDOW_DAYS = 45;
  var MAX_SHOWN = 3;
  var BLOCKERS = ['upd-modal', 'wel-modal', 'spf-back', 'dev-block', 'upgrade-modal'];

  // Lucide "flame" (ISC licence), stroked to match every other icon here.
  // Sized in the markup, not only in style.css. On the first load after a
  // deploy the old service worker can hand back the previous style.css
  // alongside this new file; an SVG with no size then fills the screen until
  // the update reloads the page. Blesson saw exactly that on 27 Sep 2026.
  var FLAME = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '
    + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 '
    + '2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>';

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];

  var _ran = false;
  var _introTrack = null;   // set while the one-time introduction is on screen
  var _tried = false;
  var _shown = [];
  var _client = null;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function monthLabel(d) {
    var m = /^(\d{4})-(\d{2})/.exec(d || '');
    return m ? MONTHS[+m[2] - 1] + ' ' + m[1] : '';
  }

  function initials(name) {
    return String(name || '').trim().split(/\s+/).slice(0, 2)
      .map(function (w) { return w.charAt(0).toUpperCase(); }).join('');
  }

  function isOpen(id) {
    var el = document.getElementById(id);
    if (!el || el.hidden) return false;
    var cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden';
  }

  function card(e) {
    // A photo is only ever a data: URL the database has already checked the
    // prefix of, so it is safe in src. Everything else is escaped.
    var face = e.photo
      ? '<img class="hof-face" src="' + esc(e.photo) + '" alt="">'
      : '<div class="hof-face hof-face-init" aria-hidden="true">' + esc(initials(e.display_name)) + '</div>';
    return '<div class="hof-card">'
      + face
      + '<div class="hof-who">'
      +   '<div class="hof-name">' + esc(e.display_name) + '</div>'
      +   '<div class="hof-what">' + esc(e.achievement) + '</div>'
      +   '<div class="hof-when">' + esc(monthLabel(e.achieved_on)) + '</div>'
      +   (e.quote ? '<blockquote class="hof-quote">' + esc(e.quote) + '</blockquote>' : '')
      + '</div></div>';
  }

  function modal() {
    var el = document.getElementById('hof-modal');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'hof-modal';
    // Hidden inline from birth, not by the stylesheet: if style.css is stale
    // the stylesheet rule does not exist, and the markup would show as raw.
    el.style.display = 'none';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'hof-title');
    el.innerHTML = '<div class="hof-wrap"><div class="hof-box">'
      + '<div class="hof-mark">' + FLAME + '</div>'
      + '<div class="hof-title" id="hof-title">Hall of Fame</div>'
      + '<p class="hof-intro" id="hof-intro" hidden></p>'
      + '<div class="hof-sub" id="hof-sub"></div>'
      + '<div id="hof-list"></div>'
      + '<button type="button" class="hof-btn" id="hof-ok">Congratulations!</button>'
      + '<a class="hof-all" id="hof-all" href="#">See the whole Hall of Fame</a>'
      + '</div></div>';
    document.body.appendChild(el);
    el.querySelector('#hof-ok').addEventListener('click', dismiss);
    // Counts as seen: they are leaving to read the full board.
    el.querySelector('#hof-all').addEventListener('click', function (ev) {
      ev.preventDefault();
      var href = el.querySelector('#hof-all').getAttribute('data-href');
      dismiss();
      setTimeout(function () { window.location.href = href; }, 150);
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && isOpen('hof-modal')) dismiss();
    });
    return el;
  }

  function dismiss() {
    var el = document.getElementById('hof-modal');
    if (el) el.style.display = 'none';
    document.documentElement.classList.remove('_modal-open');
    var ids = _shown; _shown = [];
    if (_introTrack) { try { localStorage.setItem(introKey(_introTrack), new Date().toISOString()); } catch (e) {} }
    _introTrack = null;
    if (_client && ids.length) {
      // Fire and forget: a failed write must never stop the modal closing.
      // ignoreDuplicates because a second tab may have recorded it already.
      _client.from('hall_of_fame_seen')
        .upsert(ids.map(function (id) { return { entry_id: id }; }),
                { onConflict: 'user_id,entry_id', ignoreDuplicates: true })
        .then(function () {}, function () {});
    }
  }

  /* The introduction. Shown once per reader per course, the first time they
     open the app after the board has a real name on it, and never before:
     introducing an empty board would be announcing nothing.

     Remembered in localStorage, keyed per user, the same trade the first-run
     welcome makes: the worst case is a second device seeing the introduction
     once more, which is not worth another table. The entries themselves are
     still tracked server side, so no NAME is ever announced twice. */
  var INTRO = {
    coc: 'Every cadet who prepares here and clears their Certificate of Competency earns a place on this board.',
    sponsorship: 'Every cadet who prepares here and is selected for sponsorship by a shipping company earns a place on this board.',
  };
  function introKey(track) {
    return 'eb_hof_intro_' + track + '_' + (window._sbUser ? window._sbUser.id : 'anon');
  }

  // "Today" only while it is true. A cadet opening the app three weeks later
  // is not told a three-week-old entry happened today.
  function headline(track, rows, intro) {
    var newest = rows.reduce(function (m, e) { return Math.max(m, new Date(e.published_at || 0).getTime()); }, 0);
    var fresh = Date.now() - newest < 2 * 86400000;
    if (intro && !fresh) return 'Already on the board';
    var base = fresh ? 'Entering the Hall of Fame today' : 'New in the Hall of Fame';
    return track === 'sponsorship' ? 'Selected for sponsorship. ' + base : base;
  }

  /* track: 'coc' or 'sponsorship'. Call it after the page's own startup
     modals have had their turn; it checks for them itself regardless.

     Only the FIRST routine call on a page load counts. The pages call this
     from checkSession(), which fires again every ten minutes and on every tab
     focus, and a popup that was blocked at startup must not ambush someone
     mid-quiz later. opts.after is for the one legitimate retry: the modal
     that blocked it has just been dismissed. */
  async function maybeShow(track, opts) {
    if (_ran) return;
    if (_tried && !(opts && opts.after)) return;
    _tried = true;
    _client = window._sbClient;
    if (!_client || !window._sbUser) return;
    if (BLOCKERS.some(isOpen)) return;   // not marked as run: the next caller retries
    _ran = true;

    var introDue = false;
    try { introDue = !localStorage.getItem(introKey(track)); } catch (e) {}
    var since = new Date(Date.now() - WINDOW_DAYS * 86400000).toISOString();
    try {
      // The introduction shows the latest names however old they are; after
      // that, only entries inside the window are news.
      var q = _client.from('hall_of_fame')
        .select('id,display_name,achievement,achieved_on,quote,photo,published_at')
        .eq('track', track).eq('is_published', true);
      if (!introDue) q = q.gte('published_at', since);
      var got = await Promise.all([
        q.order('published_at', { ascending: false }).limit(20),
        _client.from('hall_of_fame_seen').select('entry_id'),
      ]);
      if (got[0].error || got[1].error) return;
      var seen = {};
      (got[1].data || []).forEach(function (r) { seen[r.entry_id] = true; });
      var all = got[0].data || [];
      var fresh = all.filter(function (e) { return !seen[e.id]; }).slice(0, MAX_SHOWN);
      // An introduction still goes out if this reader has somehow seen every
      // name already (another device): it then shows the latest ones.
      if (introDue && !fresh.length) fresh = all.slice(0, MAX_SHOWN);
      if (!fresh.length) return;

      // Something else may have opened while we were fetching.
      if (BLOCKERS.some(isOpen)) { _ran = false; return; }

      var el = modal();
      // Our styles must be the ones on the page. If style.css is still the
      // pre-deploy copy, #hof-modal has no rules at all and would render as
      // raw markup. Do nothing and leave it unseen: the service worker update
      // reloads the page moments later, and it shows properly then.
      if (getComputedStyle(el).position !== 'fixed') { _ran = false; return; }
      el.classList.toggle('hof-spon', track === 'sponsorship');
      // The Sponsorship app lives one folder down.
      var up = /\/sponsorship\//.test(location.pathname) ? '../' : './';
      el.querySelector('#hof-all').setAttribute('data-href', up + 'hall-of-fame.html?track=' + track);
      var introEl = document.getElementById('hof-intro');
      document.getElementById('hof-title').textContent = introDue ? 'Introducing the Hall of Fame' : 'Hall of Fame';
      introEl.textContent = introDue ? INTRO[track] : '';
      introEl.hidden = !introDue;
      _introTrack = introDue ? track : null;
      document.getElementById('hof-sub').textContent = headline(track, fresh, introDue);
      document.getElementById('hof-list').innerHTML = fresh.map(card).join('');
      _shown = fresh.map(function (e) { return e.id; });
      el.style.display = 'block';
      document.documentElement.classList.add('_modal-open');
    } catch (e) {
      console.warn('hall of fame:', e);
    }
  }

  window.EBFame = { maybeShow: maybeShow, _card: card };
})();

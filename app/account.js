// ═══════════════════════════════════════════════════════════════════════════
//  Account: the profile menu's shared pieces.
//
//  Loaded by app/index.html, app/courses.html and app/sponsorship/index.html.
//  Those three each grew their own profile panel, which is why they drifted
//  into offering different things - one had a Settings screen, one had it in a
//  footer link, one had neither. Anything the three panels must agree on lives
//  here so it can only be written once.
//
//  Reads nothing privileged. payments and coupon_redemptions both carry an
//  "own rows only" RLS policy, so this works with the ordinary signed-in
//  session and needs no edge function.
// ═══════════════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function rupees(paise) {
    if (paise == null) return '';
    return '₹' + (paise / 100).toLocaleString('en-IN', { maximumFractionDigits: 0 });
  }

  function longDate(iso) {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // Plain words rather than the marketing names. Track and tier names are
  // admin-editable in pricing_plans, so a receipt built from them would
  // silently rewrite itself the day a name changes. What the buyer actually
  // bought never changes.
  var SCOPE_WORDS = { written: 'Written', oral: 'Oral', both: 'Written + Oral' };
  var PLAN_MONTHS = { starter: 2, standard: 5, pro: 12, '3mo': 3, '6mo': 6, '12mo': 12 };

  function planWords(p) {
    var scope = SCOPE_WORDS[p.scope || 'both'] || 'Full access';
    var months = PLAN_MONTHS[p.plan];
    return scope + (months ? ', ' + months + ' month' + (months === 1 ? '' : 's') : '');
  }

  var STATUS = {
    paid:     { label: 'Paid',      color: '#7FD18B' },
    refunded: { label: 'Refunded',  color: '#C08A3E' },
    failed:   { label: 'Failed',    color: '#E06C6C' },
    created:  { label: 'Incomplete', color: '#6E8AA6' },
  };

  // One definition of where to find us. Three profile panels, two legal pages
  // and a handful of inline mailto: links already referenced the support
  // address separately; a handle added by hand in each of those is a handle
  // that will be wrong in one of them within a month.
  var CONTACT = {
    instagram: 'elec.buddy',
    email: 'support@elec-buddy.com',
    whatsapp: 'https://whatsapp.com/channel/0029Vb8IHLiHbFUyd1ICGl2t',
  };

  var IG_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>';
  var MAIL_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>';
  var WA_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M21 11.6a8.4 8.4 0 0 1-12.5 7.3L3.5 20.5l1.7-4.8A8.4 8.4 0 1 1 21 11.6Z"/>'
    + '<path d="M9.2 9.1c.2 1.3.8 2.5 1.8 3.4a6.2 6.2 0 0 0 3.3 1.7"/></svg>';

  function contactHtml() {
    // min-height 44px matches the touch-target floor used everywhere else in
    // the app; the natural height of this row was 38px, which is under it.
    var row = 'display:flex;align-items:center;justify-content:center;gap:7px;'
            + 'padding:9px 10px;min-height:44px;box-sizing:border-box;'
            + 'border:1px solid #1A3050;border-radius:6px;'
            + 'font-size:12px;color:#8FA3B8;text-decoration:none;min-width:0;';
    // Each control shows what it actually is, the handle and the address,
    // rather than a generic label with the address repeated underneath it.
    // The address is worth showing rather than hiding behind "Contact us":
    // on a desktop with no mail client configured a mailto: link does nothing
    // at all, and then the only useful thing is being able to read and copy it.
    //
    // flex-basis is what decides the arrangement: the address needs roughly
    // 200px to sit on one line, so on a narrow phone it takes a row of its own
    // instead of being squeezed to an ellipsis.
    // Symmetric margin top and bottom. Without the bottom one the block sat
    // flush against whatever button followed it, which reads as two boxes
    // touching rather than as a separate group. The panels that place this
    // between other controls do not add spacing of their own.
    // Three icon buttons rather than labelled rows: the labels repeated what
    // the icons already say and took three stacked rows to do it.
    //
    // The address stays visible underneath as a caption, which is the one thing
    // an icon cannot carry. On a desktop with no mail client a mailto: link
    // does nothing at all, and then being able to read and copy the address is
    // the only useful outcome. It is selectable text for exactly that reason.
    var btn = 'display:flex;align-items:center;justify-content:center;'
            + 'flex:1;min-height:44px;box-sizing:border-box;'
            + 'border:1px solid #1A3050;border-radius:8px;'
            + 'color:#8FA3B8;text-decoration:none;transition:border-color .15s,color .15s;';
    return '<div style="margin:14px 0;padding-top:14px;border-top:1px solid #1A3050;">'
      + '<div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6E8AA6;text-align:center;margin-bottom:9px;">Get in touch</div>'
      + '<div style="display:flex;gap:8px;">'
      +   '<a href="mailto:' + CONTACT.email + '" title="Email support" aria-label="Email support" style="' + btn + '">' + MAIL_ICON + '</a>'
      +   '<a href="' + CONTACT.whatsapp + '" target="_blank" rel="noopener noreferrer" title="Updates on WhatsApp" aria-label="Updates on WhatsApp" style="' + btn + '">' + WA_ICON + '</a>'
      +   '<a href="https://instagram.com/' + CONTACT.instagram + '" target="_blank" rel="noopener noreferrer" title="@' + CONTACT.instagram + ' on Instagram" aria-label="Instagram" style="' + btn + '">' + IG_ICON + '</a>'
      + '</div>'
      + '<div style="text-align:center;margin-top:8px;font-size:11px;color:#6E8AA6;user-select:text;">' + CONTACT.email + '</div>'
      + '</div>';
  }

  // Any page that wants the block just puts an empty element with
  // data-eb-contact in its markup; no per-page wiring to keep in step.
  function mountContact() {
    var slots = document.querySelectorAll('[data-eb-contact]');
    for (var i = 0; i < slots.length; i++) {
      if (!slots[i].getAttribute('data-eb-mounted')) {
        slots[i].innerHTML = contactHtml();
        slots[i].setAttribute('data-eb-mounted', '1');
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountContact);
  } else {
    mountContact();
  }

  window.EBAccount = {
    esc: esc,
    rupees: rupees,
    CONTACT: CONTACT,
    contactHtml: contactHtml,
    mountContact: mountContact,

    /**
     * Every payment this user has ever started, newest first, with the coupon
     * redemption attached where there was one.
     *
     * Includes unfinished attempts on purpose. A cadet who thinks they paid
     * and cannot see the attempt anywhere has no way to tell "it failed" from
     * "you lost my money", and support has nothing to work from either.
     */
    async loadTransactions(sb, userId) {
      var res = await sb
        .from('payments')
        .select('id,plan,scope,amount,original_amount,discount_amount,coupon_code,status,' +
                'created_at,paid_at,subscription_starts_at,subscription_expires_at,' +
                'razorpay_order_id,razorpay_payment_id,refund_amount,refunded_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (res.error) throw res.error;
      return res.data || [];
    },

    transactionsHtml(rows) {
      if (!rows || !rows.length) {
        return '<div style="text-align:center;padding:34px 16px;color:#6E8AA6;font-size:13px;line-height:1.6">'
             + 'No payments yet.<br><span style="font-size:12px">Anything you buy will show up here with a full breakdown.</span>'
             + '</div>';
      }

      return rows.map(function (p) {
        var st = STATUS[p.status] || STATUS.created;
        var discounted = p.discount_amount > 0 && p.original_amount;
        var when = p.paid_at || p.created_at;

        var lines = '';

        // What the money did. Only shown when a code actually moved the price,
        // so an ordinary purchase stays a single clean number.
        if (discounted) {
          lines += row('Price before discount', '<s style="color:#6E8AA6">' + rupees(p.original_amount) + '</s>');
          lines += row('Discount' + (p.coupon_code ? ' (' + esc(p.coupon_code) + ')' : ''),
                       '<span style="color:#7FD18B">− ' + rupees(p.discount_amount) + '</span>');
        }
        lines += row(p.status === 'paid' || p.status === 'refunded' ? 'Amount paid' : 'Amount',
                     '<strong style="color:#DDE5EF">' + rupees(p.amount) + '</strong>');

        if (p.status === 'refunded') {
          lines += row('Refunded', rupees(p.refund_amount == null ? p.amount : p.refund_amount)
                     + (p.refunded_at ? ' on ' + longDate(p.refunded_at) : ''));
        }

        if (p.subscription_starts_at && p.subscription_expires_at) {
          lines += row('Access', longDate(p.subscription_starts_at) + ' to ' + longDate(p.subscription_expires_at));
        }

        // Reference last and quiet: only ever needed when contacting support.
        var ref = p.razorpay_payment_id || p.razorpay_order_id;
        if (ref) lines += row('Reference', '<span style="font-family:ui-monospace,monospace;font-size:10.5px">' + esc(ref) + '</span>');

        return '<div style="background:#0A1828;border:1px solid #1A3050;border-radius:8px;padding:13px 15px;margin-bottom:10px">'
          + '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:9px">'
          +   '<div style="font-size:13.5px;color:#DDE5EF;font-weight:600">' + esc(planWords(p)) + '</div>'
          +   '<div style="font-size:10.5px;font-weight:700;color:' + st.color + ';white-space:nowrap">' + st.label + '</div>'
          + '</div>'
          + '<div style="font-size:11px;color:#6E8AA6;margin-bottom:9px">' + longDate(when) + '</div>'
          + lines
          + '</div>';
      }).join('');

      function row(label, value) {
        return '<div style="display:flex;justify-content:space-between;gap:12px;font-size:12px;padding:2.5px 0">'
          + '<span style="color:#8FA3B8">' + label + '</span>'
          + '<span style="text-align:right;color:#B8C6D6">' + value + '</span>'
          + '</div>';
      }
    },

    /**
     * Fill a container with this user's history. Handles its own loading and
     * error states so each page does not reinvent them.
     */
    async renderTransactions(container, sb, userId) {
      if (!container) return;
      container.innerHTML = '<div style="text-align:center;padding:30px;color:#6E8AA6;font-size:13px">Loading…</div>';
      try {
        var rows = await this.loadTransactions(sb, userId);
        container.innerHTML = this.transactionsHtml(rows);
      } catch (e) {
        container.innerHTML = '<div style="text-align:center;padding:30px;color:#E06C6C;font-size:12.5px;line-height:1.6">'
          + 'Could not load your payments.<br><span style="color:#6E8AA6">Check your connection and try again.</span></div>';
      }
    },
  };
})();

/* ═══════════════════════════════════════════════════════════════════════════
   EBNotify: notifications, on every page.

   This lives here rather than in a page because it has to be everywhere. The
   toast was originally built only in index.html, and after signing in a reader
   lands on courses.html, so in practice it never fired once. Anything a reader
   should see wherever they happen to be belongs in this file, which every page
   already loads.

   What it provides:
     - a toast when a notice is published while they are using the app
     - an unread COUNT badge, not just a dot
     - the realtime subscription, with the JWT the socket actually needs

   What it deliberately does NOT do: mark anything as read. Seeing a toast is
   not reading a notice. The count stays until they open the notifications
   menu, which is the only thing that clears it.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var SEEN_KEY = 'eb_notif_seen';
  var toastTimer = null;
  var started = false;

  // Styles are injected rather than copied into three stylesheets, so a page
  // can never end up with the markup and not the CSS.
  function injectStyles() {
    if (document.getElementById('eb-notify-css')) return;
    var s = document.createElement('style');
    s.id = 'eb-notify-css';
    s.textContent = [
      '#nf-toast{position:fixed;z-index:10007;left:50%;top:14px;transform:translate(-50%,-140%);',
      'display:flex;align-items:stretch;width:calc(100% - 28px);max-width:400px;',
      'background:rgba(13,30,51,0.97);border:1px solid #24466E;border-radius:12px;overflow:hidden;',
      'box-shadow:0 10px 30px rgba(0,0,0,0.45);opacity:0;pointer-events:none;',
      'transition:transform .34s cubic-bezier(.2,.9,.3,1.2),opacity .28s ease}',
      '#nf-toast.show{transform:translate(-50%,0);opacity:1;pointer-events:auto}',
      '#nf-toast-open{flex:1;min-width:0;display:flex;align-items:center;gap:10px;background:none;',
      'border:none;cursor:pointer;text-align:left;padding:11px 4px 11px 13px;font-family:inherit;color:inherit}',
      '.nf-toast-chip{flex-shrink:0;font-size:9px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;',
      'padding:3px 7px;border-radius:100px;background:rgba(93,200,122,.16);color:#5DC87A}',
      '.nf-toast-chip.t-info{background:rgba(122,184,224,.16);color:#7AB8E0}',
      '.nf-toast-chip.t-warning{background:rgba(245,158,11,.16);color:#F59E0B}',
      '.nf-toast-chip.t-deadline{background:rgba(224,90,106,.16);color:#E05A6A}',
      '.nf-toast-text{min-width:0;display:flex;flex-direction:column;gap:1px}',
      '.nf-toast-title{font-size:13px;font-weight:650;color:#DDE5EF;line-height:1.3;overflow:hidden;',
      'text-overflow:ellipsis;white-space:nowrap}',
      '.nf-toast-sub{font-size:11px;color:#6E8AA6}',
      '.nf-toast-arrow{flex-shrink:0;color:#4E6B88;margin-left:auto}',
      '#nf-toast-x{flex-shrink:0;background:none;border:none;border-left:1px solid #1A3050;color:#5A7B98;',
      'font-size:19px;line-height:1;cursor:pointer;padding:0 13px;font-family:inherit}',
      '#nf-toast-x:hover{color:#DDE5EF}',
      // The dot becomes a count. Still circular at one digit so it reads as a
      // badge rather than stray text, and widens past nine.
      '.nb-dot.nb-count{width:auto!important;min-width:17px;height:17px!important;border-radius:9px;',
      'padding:0 4px;display:none;align-items:center;justify-content:center;font-size:10px;',
      'font-weight:800;color:#fff;line-height:1;font-family:inherit}',
      '.nb-dot.nb-count.show{display:inline-flex!important}',
      '@media (max-width:600px){#nf-toast{top:10px;width:calc(100% - 20px);border-radius:11px}',
      '#nf-toast-open{padding:12px 4px 12px 12px;min-height:52px}#nf-toast-x{padding:0 15px}}',
      '@media (prefers-reduced-motion:reduce){#nf-toast{transition:opacity .2s ease;transform:translate(-50%,0)}}',
    ].join('');
    document.head.appendChild(s);
  }

  // Appended to <body> on purpose. Every page nests its content in a scrolling
  // container, and on iOS -webkit-overflow-scrolling:touch traps a
  // position:fixed descendant underneath the sidebar.
  function injectToast() {
    if (document.getElementById('nf-toast')) return;
    if (!document.body) return;
    var t = document.createElement('div');
    t.id = 'nf-toast';
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.innerHTML =
      '<button type="button" id="nf-toast-open" aria-label="Open notifications">'
      + '<span class="nf-toast-chip" id="nf-toast-chip"></span>'
      + '<span class="nf-toast-text"><span class="nf-toast-title" id="nf-toast-title"></span>'
      + '<span class="nf-toast-sub">Tap to read</span></span>'
      + '<svg class="nf-toast-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" '
      + 'stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'
      + '<path d="m9 18 6-6-6-6"/></svg></button>'
      + '<button type="button" id="nf-toast-x" aria-label="Dismiss">&times;</button>';
    document.body.appendChild(t);

    t.querySelector('#nf-toast-open').addEventListener('click', function () {
      EBNotify.hideToast();
      // Pages differ in how the panel is reached, so use whichever exists.
      if (typeof window.openProfile === 'function') {
        window.openProfile();
        setTimeout(function () {
          if (typeof window.openNotifs === 'function') window.openNotifs();
        }, 80);
      } else if (typeof window.openNotifs === 'function') {
        window.openNotifs();
      }
    });
    t.querySelector('#nf-toast-x').addEventListener('click', function () { EBNotify.hideToast(); });
  }

  // A notice with no target is for everyone. A targeted one is shown only when
  // the page can say who this reader is; guessing would put a paid-only notice
  // in front of somebody on trial.
  function visible(n) {
    if (!n) return false;
    if (typeof window.nfVisible === 'function') {
      try { return window.nfVisible(n); } catch (e) { return !n.target_plan; }
    }
    return !n.target_plan;
  }

  var EBNotify = {
    hideToast: function () {
      var t = document.getElementById('nf-toast');
      if (t) t.classList.remove('show');
      if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
    },

    showToast: function (n) {
      injectStyles(); injectToast();
      var t = document.getElementById('nf-toast');
      if (!t) return;
      // Never on top of something that already has their attention.
      var blocking = ['upd-modal', 'wel-modal', 'gate-overlay', 'dev-block'];
      for (var i = 0; i < blocking.length; i++) {
        var el = document.getElementById(blocking[i]);
        if (el && (el.style.display === 'block' || el.classList.contains('open'))) return;
      }
      var type = n.type || 'info';
      var chip = document.getElementById('nf-toast-chip');
      chip.textContent = type;
      chip.className = 'nf-toast-chip t-' + type;
      document.getElementById('nf-toast-title').textContent = n.title || 'New notification';
      t.classList.add('show');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(EBNotify.hideToast, 7000);
    },

    /** How many are unread. A number on every badge, not a dot. */
    refreshBadge: async function (sb) {
      sb = sb || window._sbClient;
      if (!sb) return;
      try {
        var res = await sb.from('notifications')
          .select('created_at,target_plan,type')
          .order('created_at', { ascending: false }).limit(50);
        var rows = (res.data || []).filter(visible);
        var seen = null;
        try { seen = localStorage.getItem(SEEN_KEY); } catch (e) {}
        var unread = seen
          ? rows.filter(function (n) { return new Date(n.created_at) > new Date(seen); }).length
          : rows.length;
        EBNotify.setBadge(unread);
      } catch (e) {}
    },

    setBadge: function (count) {
      injectStyles();
      var dots = document.querySelectorAll('.nb-dot');
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.classList.add('nb-count');
        if (count > 0) {
          d.textContent = count > 9 ? '9+' : String(count);
          d.classList.add('show');
        } else {
          d.textContent = '';
          d.classList.remove('show');
        }
      }
    },

    /** Called once the notifications menu has actually been opened. */
    markRead: function () {
      try { localStorage.setItem(SEEN_KEY, new Date().toISOString()); } catch (e) {}
      EBNotify.setBadge(0);
    },

    start: async function () {
      if (started) return;
      var sb = window._sbClient, user = window._sbUser;
      if (!sb || !user) return;
      started = true;

      injectStyles(); injectToast();
      EBNotify.refreshBadge(sb);

      try {
        // The socket must be handed the user's JWT. Without it it connects as
        // `anon`; the SELECT policy on notifications is TO authenticated, so
        // the server delivers nothing while still reporting SUBSCRIBED.
        var sess = await sb.auth.getSession();
        var tok = sess && sess.data && sess.data.session && sess.data.session.access_token;
        if (tok && sb.realtime && sb.realtime.setAuth) sb.realtime.setAuth(tok);

        window._nfChannel = sb.channel('eb-notify-' + Math.random().toString(36).slice(2, 8))
          .on('postgres_changes',
              { event: 'INSERT', schema: 'public', table: 'notifications' },
              function (payload) {
                var n = payload && payload.new;
                if (!n || !visible(n)) return;
                EBNotify.refreshBadge(sb);
                EBNotify.showToast(n);
              })
          .subscribe();
      } catch (e) {
        // Realtime is a nicety. The badge and the menu still work without it.
        console.warn('notification stream unavailable:', e);
      }
    },
  };

  window.EBNotify = EBNotify;
  /* ── Device limit ─────────────────────────────────────────────────────
     Lives here because account.js is the only file loaded by all three
     surfaces: index.html, courses.html and sponsorship/index.html. It used
     to live inside index.html, which meant the limit was enforced on
     exactly one page while sign-in sends most people to courses.html. The
     visible symptom was a reader being told "too many devices" and then
     carrying on regardless; the real cost was that 39 of 79 accounts had
     never registered a device at all, so there was no data to judge whether
     sharing was happening.

     This is a deterrent, not an access gate. get-content-key decides what a
     reader may actually open, and it deliberately knows nothing about
     devices: a bug here should cost a nag screen, never somebody's notes. */
  var EBDevices = {
    KEY: 'eb_device_id',
    _done: false,

    /* A random id this browser generates once, NOT a measurement of the
       machine. No canvas, no fonts, no hardware probing. Clearing site data
       therefore looks like a new device and costs a slot, which is the
       honest price of not fingerprinting anybody. */
    deviceId: function () {
      try {
        var id = localStorage.getItem(this.KEY);
        if (!id) {
          id = (window.crypto && crypto.randomUUID)
            ? crypto.randomUUID()
            : String(Date.now()) + Math.random().toString(36).slice(2);
          localStorage.setItem(this.KEY, id);
        }
        return id;
      } catch (e) {
        // Private mode: no stable id, so this browser is simply not counted.
        // Better than refusing entry to somebody who paid.
        return null;
      }
    },

    /* Coarse on purpose. Enough for a reader to recognise which row is their
       own phone when choosing one to remove, and nothing more. */
    label: function () {
      var ua = navigator.userAgent || '';
      var os = /iPhone|iPad|iPod/.test(ua) ? 'iPhone'
             : /Android/.test(ua)          ? 'Android'
             : /Macintosh/.test(ua)        ? 'Mac'
             : /Windows/.test(ua)          ? 'Windows'
             : /Linux/.test(ua)            ? 'Linux' : 'Device';
      var br = /Edg\//.test(ua)     ? 'Edge'
             : /OPR\//.test(ua)     ? 'Opera'
             : /Chrome\//.test(ua)  ? 'Chrome'
             : /Firefox\//.test(ua) ? 'Firefox'
             : /Safari\//.test(ua)  ? 'Safari' : 'Browser';
      return br + ' on ' + os;
    },

    /* Self-contained rather than depending on the page-level escape helper,
       which happens to exist on all three surfaces today but is defined
       separately in each of them. */
    esc: function (v) {
      return String(v == null ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    },

    rowsHtml: function (rows, ctx) {
      if (!rows || !rows.length) {
        return '<div style="font-size:11.5px;color:#6E8AA6;">No devices registered yet.</div>';
      }
      var mine = null, self = this;
      try { mine = localStorage.getItem(this.KEY); } catch (e) {}
      return rows.map(function (r) {
        var when = r.last_seen
          ? new Date(r.last_seen).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
          : '';
        var isThis = r.fingerprint && mine && r.fingerprint === mine;
        return '<div style="display:flex;align-items:center;gap:10px;background:#070D1A;border:1px solid #1A3050;border-radius:6px;padding:9px 11px;margin-bottom:8px;">'
          + '<div style="flex:1;min-width:0;">'
          +   '<div style="font-size:12.5px;color:#DDE5EF;font-weight:600;">' + self.esc(r.device_label || 'Unknown device')
          +     (isThis ? ' <span style="font-size:10px;color:#C8A44A;font-weight:700;white-space:nowrap;">THIS DEVICE</span>' : '')
          +   '</div>'
          +   (when ? '<div style="font-size:11px;color:#6E8AA6;margin-top:2px;">Last used ' + self.esc(when) + '</div>' : '')
          + '</div>'
          + '<button onclick="EBDevices.remove(' + JSON.stringify(String(r.id)).replace(/"/g, '&quot;') + ',&quot;' + ctx + '&quot;)" '
          +   'style="flex-shrink:0;min-height:34px;padding:6px 12px;background:none;border:1px solid #E05A6A;border-radius:6px;font-size:12px;color:#E05A6A;font-weight:600;cursor:pointer;font-family:inherit;">Remove</button>'
          + '</div>';
      }).join('');
    },

    remove: async function (id, ctx) {
      if (!window._sbClient || !window._sbUser) return;
      // RLS allows a reader to delete only their own device rows.
      var res = await window._sbClient.from('devices').delete()
        .eq('id', id).eq('user_id', window._sbUser.id);
      if (res.error) { alert('Could not remove that device. Please try again.'); return; }
      if (ctx === 'dev-block') location.reload();       // re-register into the freed slot
      else if (typeof window.loadDevices === 'function') window.loadDevices();
    },

    /* Built here rather than in page markup, and appended to <body>, so all
       three pages get the same thing and it cannot end up trapped inside a
       scrolling container the way a fixed element does on iOS. */
    _overlay: function () {
      var el = document.getElementById('dev-block');
      if (el) return el;
      el = document.createElement('div');
      el.id = 'dev-block';
      el.style.cssText = 'display:none;position:fixed;inset:0;z-index:10006;background:rgba(4,9,20,0.95);backdrop-filter:blur(6px);overflow-y:auto;';
      el.innerHTML =
        '<div style="min-height:100%;display:flex;align-items:flex-start;justify-content:center;padding:24px 16px 48px;">'
        + '<div style="width:100%;max-width:440px;background:#0D1E33;border:1px solid #1A3050;border-radius:16px;padding:24px;">'
        +   '<div style="font-size:18px;font-weight:700;color:#DDE5EF;">Too many devices</div>'
        +   '<div style="font-size:12.5px;color:#8FA3B8;margin-top:6px;line-height:1.55;">'
        +     'Your account is already signed in on <strong id="dev-block-limit">3</strong> devices, which is the limit. '
        +     'Remove one below to use this device. Whichever you remove is signed out the next time it opens the app.'
        +   '</div>'
        +   '<div id="dev-block-list" style="margin-top:16px;"></div>'
        +   '<button onclick="location.reload()" style="width:100%;min-height:44px;margin-top:14px;background:none;border:1px solid #1A3050;border-radius:8px;font-size:13px;color:#8FA3B8;font-weight:600;cursor:pointer;font-family:inherit;">Try again</button>'
        + '</div></div>';
      document.body.appendChild(el);
      return el;
    },

    register: async function () {
      if (this._done) return;
      if (!window._sbClient || !window._sbUser) return;
      var id = this.deviceId();
      if (!id) return;                       // private mode, see deviceId()
      this._done = true;

      try {
        var res = await window._sbClient.functions.invoke('register-device', {
          body: { fingerprint: id, label: this.label() },
        });
        var d = res && res.data;
        if (!d || d.allowed !== false) return;

        var el = this._overlay();
        el.querySelector('#dev-block-limit').textContent = d.limit || 3;
        el.querySelector('#dev-block-list').innerHTML = this.rowsHtml(d.devices || [], 'dev-block');
        el.style.display = 'block';
        document.documentElement.classList.add('_modal-open');
      } catch (e) {
        // Fail open. This exists to discourage sharing, not to be the reason
        // a paying reader cannot open their notes.
        console.warn('device check skipped:', e);
      }
    },
  };

  window.EBDevices = EBDevices;


  // Self-starting with a bounded wait, so a page only has to load this file.
  // Auth is established asynchronously and each page does it differently, so
  // polling briefly is more reliable than picking one page's hook.
  var tries = 0;
  var iv = setInterval(function () {
    if (window._sbClient && window._sbUser) { clearInterval(iv); EBNotify.start(); EBActivity.start(); EBDevices.register(); }
    else if (++tries > 60) { clearInterval(iv); }      // ~30s, then give up
  }, 500);

  /* ── Activity heartbeat ───────────────────────────────────────────────
     Stamps last_active_at so the admin console can tell "signed up and never
     came back" from "studying every evening". Those look identical in the
     users list today and need opposite responses.

     Through an RPC rather than an UPDATE: the allowlist guard on profiles
     reverts anything a user writes beyond their name, progress and mail
     preference, so a direct write here would be silently discarded. The
     function takes no arguments, so it cannot be aimed at another account or
     used to backdate anything.

     Cheap by construction. One write every few minutes per open tab, only
     while the tab is actually in front of somebody: a phone left on a desk
     with the app open is not "using the app", and counting it would make the
     numbers say something untrue. */
  var EBActivity = {
    EVERY_MS: 3 * 60 * 1000,
    _last: 0,
    _timer: null,

    beat: function (force) {
      if (!window._sbClient || !window._sbUser) return;
      if (document.hidden) return;
      var now = Date.now();
      // Coming back to the tab fires this as well as the timer, so a floor
      // stops a burst of focus changes turning into a burst of writes.
      if (!force && now - this._last < this.EVERY_MS - 5000) return;
      this._last = now;
      window._sbClient.rpc('touch_activity').then(function () {}, function () {
        // Losing a heartbeat is not worth a console error on a study page.
      });
    },

    start: function () {
      var self = this;
      self.beat(true);
      if (self._timer) clearInterval(self._timer);
      self._timer = setInterval(function () { self.beat(false); }, self.EVERY_MS);
      document.addEventListener('visibilitychange', function () {
        if (!document.hidden) self.beat(false);
      });
    },
  };

  window.EBActivity = EBActivity;
})();

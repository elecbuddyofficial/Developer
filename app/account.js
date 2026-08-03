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
  };

  var IG_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>';
  var MAIL_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>';

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
    return '<div style="margin:14px 0;padding-top:14px;border-top:1px solid #1A3050;">'
      + '<div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6E8AA6;text-align:center;margin-bottom:9px;">Get in touch</div>'
      + '<div style="display:flex;gap:8px;flex-wrap:wrap;">'
      +   '<a href="https://instagram.com/' + CONTACT.instagram + '" target="_blank" rel="noopener noreferrer" style="' + row + 'flex:1 1 130px;">'
      +     IG_ICON + '<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">@' + CONTACT.instagram + '</span></a>'
      +   '<a href="mailto:' + CONTACT.email + '" style="' + row + 'flex:1 1 200px;">'
      +     MAIL_ICON + '<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + CONTACT.email + '</span></a>'
      + '</div>'
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

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

  window.EBAccount = {
    esc: esc,
    rupees: rupees,

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

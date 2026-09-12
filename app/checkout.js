/* Checkout: pricing, coupons and Razorpay, for BOTH apps.

   Lives in its own file because app/index.html and app/sponsorship/index.html
   both sell things, and a Sponsorship buyer should not be thrown into the COC
   app to pay for it. Copying the flow into the second page instead would have
   set up the drift that bit this codebase three times in one week:

     - _scopesCovered here drifted from scopesCovered in the server's
       _shared/entitlements.ts, so a Sponsorship buyer was told "Unlocks
       Written and Oral" while being charged the Sponsorship price
     - the Sponsorship gate drifted from deriveAccess, so 12 accounts that
       already had access were shown a paywall
     - four money functions each kept their own list of scope columns, so a
       purchase granted nothing

   Every one of those was the same rule written down twice. The rules live here
   once now, and each page supplies only what is genuinely its own: when to
   open the modal, and what to do once the money is in.

   Load it BEFORE app.js on the COC page and before either page's inline gate
   script, both of which call into it.

   DELIBERATELY NOT AN IIFE. The COC page calls openUpgradeModal,
   closeUpgradeModal, applyCoupon, toggleCouponBox, trackFunnel,
   renderGateCards, loadPricingPlans and escUp as bare globals from a dozen
   places - and escUp in particular is used by the signup-hold screen and the
   feedback file list, neither of which is checkout. Keeping the original
   top-level scope is what makes moving this file change behaviour nowhere. */

// Injected on first open by _ensureUpgradeModal below, so both apps show the
// same modal without either page carrying a copy of the markup.
var UPGRADE_MODAL_HTML = `
<div id="upgrade-modal" style="display:none;position:fixed;inset:0;z-index:10002;background:rgba(4,9,20,0.92);backdrop-filter:blur(8px);overflow-y:auto;">
  <div style="min-height:100%;display:flex;align-items:flex-start;justify-content:center;padding:24px 16px 48px;">
    <div class="up-modal-inner">

      <!-- Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;">
        <div>
          <div style="font-family:Georgia,serif;font-size:22px;font-weight:normal;color:var(--amber);letter-spacing:0.02em;">Elec-Buddy</div>
          <div style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--text3);margin-top:3px;">Choose your plan</div>
        </div>
        <button onclick="closeUpgradeModal()" class="up-close-btn" style="background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:50%;width:36px;height:36px;color:var(--text3);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s;flex-shrink:0;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.06)'">&times;</button>
      </div>

      <!-- Trial notice -->
      <div id="up-trial-notice" style="display:none;background:rgba(200,164,74,0.08);border:1px solid rgba(200,164,74,0.25);border-radius:10px;padding:11px 14px;margin-bottom:20px;font-size:12.5px;color:#A88B3A;line-height:1.6;"></div>

      <!-- Track tabs. Lead with what you get, brand name underneath. -->
      <div id="up-track-tabs" style="display:flex;gap:8px;margin-bottom:16px;"></div>
      <!-- The coupon toggle rides on the subhead's own line rather than taking
           a row of its own. It still sits above the cards, where a buyer
           holding a code will actually see it before reading prices that are
           not the prices available to them, but it costs no extra height and
           leaves the tabs-to-cards rhythm exactly as it was. -->
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;margin-top:-6px;">
        <div id="up-track-subhead" style="font-size:12px;color:var(--text3);"></div>
        <button id="up-coupon-toggle" onclick="toggleCouponBox()"
                style="flex-shrink:0;background:none;border:none;color:var(--amber);font-size:12px;font-weight:600;cursor:pointer;text-decoration:underline;text-underline-offset:3px;padding:2px 0;font-family:inherit;">Have a code?</button>
      </div>

      <div id="up-coupon-box" style="display:none;margin-bottom:16px;">
        <div style="display:flex;gap:8px;">
          <input id="up-coupon-input" placeholder="Enter code" autocomplete="off" spellcheck="false"
                 style="flex:1;background:var(--surface2);border:1px solid var(--border2);border-radius:8px;color:var(--text);font-size:14px;padding:10px 12px;outline:none;font-family:inherit;text-transform:uppercase;">
          <button id="up-coupon-btn" onclick="applyCoupon()"
                  style="background:rgba(200,164,74,0.12);border:1px solid rgba(200,164,74,0.35);border-radius:8px;padding:10px 18px;font-size:13px;font-weight:700;color:var(--amber);cursor:pointer;font-family:inherit;">Apply</button>
        </div>
      </div>

      <!-- Duration cards (3 / 6 / 12 months), rendered from pricing_plans -->
      <div id="up-offer-banner"></div>
        <div id="up-tier-cards"></div>

      <!-- Features -->
      <div style="background:rgba(13,30,51,0.5);border:1px solid #0F2035;border-radius:10px;padding:16px 18px;margin-bottom:20px;">
        <div id="up-features-title" style="font-size:10.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--text3);margin-bottom:12px;">This track includes</div>
        <div id="up-track-features" style="display:flex;flex-direction:column;gap:8px;"></div>
      </div>

      <!-- Payment status -->
      <div id="up-status" style="display:none;text-align:center;padding:20px;border-radius:10px;font-size:14px;font-weight:600;"></div>

      <div style="text-align:center;font-size:11.5px;color:var(--text3);line-height:1.6;">
        Payments are processed securely by Razorpay.<br>
        Questions? <a href="mailto:support@elec-buddy.com" style="color:var(--text3);text-decoration:none;">support@elec-buddy.com</a>
      </div>

    </div>
  </div>
</div>
`;

// ── Upgrade modal & Razorpay payment ────────────────────────────────────────

// Loads Razorpay's checkout.js the first time it is actually needed, and only
// once per page. It used to be a static <script> in <head>: 57 KB, on every
// page load, for every user. Razorpay's CDN sends Cache-Control: max-age=120,
// so the browser could not hold it for more than two minutes either - meaning
// it genuinely re-downloaded again and again during a normal study session,
// to support a screen most users never open. Deferring it removes that from
// the common path entirely.
//
// Resolves to true once window.Razorpay exists. A failed load resolves false
// rather than throwing, so the caller can show a real message instead of the
// modal hanging on "Creating order...".
var _rzpPromise = null;
function ensureRazorpay() {
  if (window.Razorpay) return Promise.resolve(true);
  if (_rzpPromise) return _rzpPromise;
  _rzpPromise = new Promise(function(resolve) {
    var s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    s.onload = function() { resolve(!!window.Razorpay); };
    s.onerror = function() { _rzpPromise = null; resolve(false); }; // allow a retry
    document.head.appendChild(s);
  });
  return _rzpPromise;
}

// Warm it up when the upgrade modal opens, so the script is usually already
// in place by the time a plan is chosen and the Pay tap still feels instant.
function preloadRazorpay() { ensureRazorpay(); }
var SUPABASE_FN_URL = 'https://vcofgjuwprylojgyfbtr.supabase.co/functions/v1';
var RZP_KEY_ID = 'rzp_live_TJ1Il25pLKcrEU';

// ── Pricing data (admin-editable via the Plans tab, fetched live) ───────────
var TRACK_ORDER = ['written', 'oral', 'both'];   // Written Paper, Oral & Viva, Full COC Preparation
var TIER_ORDER  = ['3mo', '6mo', '12mo'];        // 3 / 6 / 12 Months
var TRACK_FALLBACK_NAME = { written: 'Written Paper', oral: 'Oral & Viva', both: 'Full COC Preparation', sponsorship: 'Sponsorship Programme' };

// Sponsorship is a separate course, not a fourth COC track, so it is NOT in
// TRACK_ORDER above: on a normal upgrade the buyer came for COC and a fourth
// tab is only a way to buy the wrong thing. It earns a tab in exactly two
// cases, both of which mean the buyer is already looking at Sponsorship:
// they arrived from its paywall gate (?upgrade=sponsorship), or they already
// hold it and are extending. Either way an active sponsorship plan has to
// exist, since _pricingPlansCache only ever holds active rows.
function upgradeTracks() {
  /* A page may pin the checkout to its own course.

     The Sponsorship app sets EB_CHECKOUT_SCOPES = ['sponsorship'], because
     offering Written Paper, Oral & Viva and Full COC inside the Sponsorship
     app is the very thing readers complained about: they came to buy one
     course and were shown three others. The COC page leaves it unset and
     keeps the full set of tabs.

     Filtered against the known scopes rather than trusted outright, so a typo
     in a page cannot invent a scope that create-razorpay-order would then
     refuse at the till. */
  if (window.EB_CHECKOUT_SCOPES && window.EB_CHECKOUT_SCOPES.length) {
    var known = TRACK_ORDER.concat(['sponsorship']);
    var pinned = window.EB_CHECKOUT_SCOPES.filter(function (sc) { return known.indexOf(sc) !== -1; });
    if (pinned.length) return pinned;
  }
  var tracks = TRACK_ORDER.slice();
  var onSale = (window._pricingPlansCache || []).some(function(r) { return r.scope === 'sponsorship'; });
  // _upPreferredScope, not _upActiveTrack: the active track changes every time
  // a tab is clicked, so keying off it made the Sponsorship tab disappear the
  // moment the buyer looked at a COC tab, with no way back to it.
  var relevant = window._upPreferredScope === 'sponsorship'
    || !!(window._profileData || {}).sponsorship_expires_at;
  if (onSale && relevant) tracks.push('sponsorship');
  return tracks;
}

// What the tab LEADS with: the exam it prepares you for.
//
// The tabs used to read PASSAGE / VOYAGE / EXPEDITION, with a subhead under
// the selected one as the only explanation. Three problems, in order of cost:
//
//   1. They read as a good/better/best ladder, because that is what
//      passage -> voyage -> expedition sounds like. They are not a ladder,
//      they are three different products. Someone who needs Oral reads the
//      middle one as an upgrade rather than "the Oral one", and someone
//      economising picks the cheapest and gets Written when they came for
//      Oral. That is not confusion, it is buying the wrong thing, and it
//      comes back as a refund.
//   2. Every place the name appeared it was bolted to a translation
//      ("Passage - Written Only"). A name that needs a subtitle to be
//      understood is not doing its job.
//   3. The duration names had the same fault, worse: Launch / Mariner /
//      Master read as capability levels, and Master Mariner is a real rank.
//      They were only access lengths over identical content, so the naming
//      invented a hierarchy the product does not have.
//
// Both axes now say what they are. The track names the exam, the tier names
// the months, and nothing needs a legend.
var SCOPE_TAB_LABEL = { written: 'Written Paper', oral: 'Oral & Viva', both: 'Full COC', sponsorship: 'Sponsorship' };
var SCOPE_SUBHEAD = {
  written: 'Written exam preparation',
  oral:    'Oral exam preparation, quizzes and Surveyor Q&A',
  both:    'Written and Oral together, everything in one plan',
  sponsorship: 'Company sponsorship: aptitude, technical and interview preparation',
};
var SCOPE_FEATURES = {
  written: ['7 written exam topics with solved papers', 'Offline access via service worker cache'],
  oral:    ['All 23 oral exam topics with full study notes', '5,600+ quiz questions', 'Full Surveyor Q&A bank', 'Offline access via service worker cache'],
  both:    ['All 23 oral exam topics with full study notes', '7 written exam topics with solved papers', '5,600+ quiz questions', 'Full Surveyor Q&A bank', 'Offline access via service worker cache'],
  sponsorship: ['All fundamentals, aptitude and data interpretation modules', 'Company-wise entrance test and interview preparation', 'Offline access via service worker cache'],
};

window._pricingPlansCache = [];
window._pricingPlansPromise = null;
window.loadPricingPlans = function() {
  if (!window._pricingPlansPromise) {
    window._pricingPlansPromise = (window._sbClient
      ? window._sbClient.from('pricing_plans')
          .select('duration,scope,track_name,tier_name,base_amount,discount_percent,label,description,discount_starts_at,discount_ends_at')
          .eq('active', true)
      : Promise.resolve({ data: [] })
    ).then(function(res) {
      window._pricingPlansCache = res.data || [];
      return window._pricingPlansCache;
    }).catch(function() { return window._pricingPlansCache; });
  }
  return window._pricingPlansPromise;
};

function findPlanRow(duration, scope) {
  return (window._pricingPlansCache || []).filter(function(p) {
    return p.duration === duration && p.scope === scope;
  })[0];
}

/* When a sale ends, said in the banner without the admin having to remember to
   type it into the description.

   A dated offer that does not show its deadline is throwing away the reason
   for dating it: the whole point of "ends 20 August" is that it gives somebody
   who is still deciding a reason to decide now. Counted in days rather than
   printed as a date once it is close, because "2 days left" reads as urgency
   and "20 August" reads as an administrative detail.

   No end date is a legitimate state and says nothing at all, rather than
   inventing a deadline. */
function offerDeadlineHtml(row) {
  if (!row || !row.discount_ends_at) return '';
  var end = new Date(row.discount_ends_at);
  if (isNaN(end.getTime())) return '';

  // Whole days between today and the end date, counted from midnight so an
  // offer ending tonight reads "today" rather than "0 days".
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var endDay = new Date(end); endDay.setHours(0, 0, 0, 0);
  var days = Math.round((endDay - today) / 86400000);
  if (days < 0) return '';

  var text, urgent = days <= 3;
  if (days === 0)      text = 'Ends today';
  else if (days === 1) text = 'Ends tomorrow';
  else if (days <= 7)  text = days + ' days left';
  else                 text = 'Ends ' + end.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });

  return '<span class="up-offer-ends' + (urgent ? ' is-urgent' : '') + '">' + escUp(text) + '</span>';
}

function effectivePrice(row) {
  var now = new Date();
  var active = row.discount_percent > 0
    && (!row.discount_starts_at || new Date(row.discount_starts_at) <= now)
    && (!row.discount_ends_at   || new Date(row.discount_ends_at)   >= now);
  return { active: active, amount: active ? Math.round(row.base_amount * (1 - row.discount_percent / 100)) : row.base_amount };
}

// Mirrors _shared/coupons.ts: best of the sale and the code, never both, then
// clamped to Razorpay's ₹1 floor. This is DISPLAY ONLY. Every card is priced
// again server-side by create-razorpay-order before a rupee is taken, so a
// stale or tampered value here can misinform the buyer but can never
// undercharge them.
/* Which course a scope belongs to.

   The third copy of this rule, and the last: public.coupon_course_of in SQL is
   the authority, courseOfPurchase in _shared/coupons.ts quotes with it, and
   this one decides what the OTHER cards in the modal show without re-quoting.
   All three are held together by coupon_course.e2e.mjs.

   Unrecognised answers 'coc' for the same reason the other two do: every scope
   that predates Sponsorship was a COC scope, and guessing null here would make
   the comparison pass for everything and silently switch the lock off. */
function _courseOfScope(scope) {
  return scope === 'sponsorship' ? 'sponsorship' : 'coc';
}

var RZP_FLOOR_PAISE = 100;
function couponPrice(row, duration, scope) {
  var base = effectivePrice(row);
  var out = { amount: base.amount, saleActive: base.active, couponApplied: false, notEligible: false };
  var c = window._upCoupon;
  if (!c || c.value == null) return out;

  var t = c.terms || {};
  // The code may be aimed at one tier. Say so on the cards it does not cover
  // rather than quietly showing them at full price next to a discounted one.
  if ((t.applies_duration && t.applies_duration !== duration)
   || (t.applies_scope && t.applies_scope !== scope)
   || (t.applies_course && t.applies_course !== _courseOfScope(scope))
   || (t.min_amount && base.amount < t.min_amount)) {
    out.notEligible = true;
    return out;
  }

  var couponAmount = c.kind === 'percent'
    ? Math.round(row.base_amount * (1 - c.value / 100))
    : row.base_amount - c.value;

  var best = Math.min(base.amount, couponAmount);
  out.amount = Math.max(RZP_FLOOR_PAISE, best);
  out.couponApplied = best < base.amount;
  return out;
}

function fmtRupees(paise) { return '₹' + Math.round(paise / 100).toLocaleString('en-IN'); }
function escUp(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function bestValueDuration(scope) {
  // Whichever tier has the lowest effective ₹/month for this scope - computed
  // from live data so an admin price edit can't leave a stale ribbon behind.
  var months = { '3mo': 3, '6mo': 6, '12mo': 12 };
  var best = null, bestRate = Infinity;
  TIER_ORDER.forEach(function(dur) {
    var row = findPlanRow(dur, scope);
    if (!row) return;
    var rate = effectivePrice(row).amount / months[dur];
    if (rate < bestRate) { bestRate = rate; best = dur; }
  });
  return best;
}

// ── Purchase preview ───────────────────────────────────────────────────────
// Mirrors applyPurchase() in supabase/functions/_shared/entitlements.ts. The
// server recomputes this independently and is the source of truth; this exists
// so the buyer is told, in dates, exactly what their money does BEFORE they
// spend it. Stacking is invisible otherwise: someone holding Written who buys
// Full COC cannot otherwise tell whether they are gaining 3 months or losing
// the 10 they already paid for.
/* The client mirror of scopesCovered() in _shared/entitlements.ts. It must
   stay identical to it: this decides what the buyer is TOLD they are buying,
   while the server decides what they actually get, and the two disagreeing is
   a lie at the point of payment rather than a cosmetic bug.

   It drifted exactly that way. 'sponsorship' fell through to the final else
   and returned ['written','oral'], so a Sponsorship card read "Unlocks
   Written and unlocks Oral" while charging the Sponsorship price and
   correctly granting Sponsorship. Found 9 Sep 2026 by rendering the modal a
   buyer arriving from the Sponsorship gate would actually see. */
function _scopesCovered(scope) {
  if (scope === 'written')     return ['written'];
  if (scope === 'oral')        return ['oral'];
  if (scope === 'sponsorship') return ['sponsorship'];
  return ['written', 'oral'];        // 'both' = the two COC scopes
}

var SCOPE_DISPLAY_NAME = { written: 'Written', oral: 'Oral', sponsorship: 'Sponsorship' };

function _addMonths(date, months) {
  var d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function _durationMonths(dur) {
  return { '3mo': 3, '6mo': 6, '12mo': 12, starter: 2, standard: 5, pro: 12 }[dur] || 0;
}

/** Returns [{ scope, from, to, extended }] for a hypothetical purchase. */
function previewPurchase(duration, scope) {
  var p = window._profileData || {};
  var now = new Date();
  var months = _durationMonths(duration);
  var trialEnd = p.trial_started_at
    ? new Date(new Date(p.trial_started_at).getTime() + 3 * 24 * 60 * 60 * 1000)
    : null;

  return _scopesCovered(scope).map(function(s) {
    var currentIso = s === 'written' ? p.written_expires_at
                   : s === 'oral'    ? p.oral_expires_at
                   :                   p.sponsorship_expires_at;
    var current = currentIso ? new Date(currentIso) : null;

    // Latest of: now, trial end, this scope's own existing expiry.
    var base = now;
    if (trialEnd && trialEnd > base) base = trialEnd;
    if (current && current > base) base = current;

    return {
      scope: s,
      from: current,
      to: _addMonths(base, months),
      extended: !!current && current > now,
    };
  });
}

function _fmtShort(d) {
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** One plain sentence describing what this purchase does for this buyer. */
function purchaseEffectText(duration, scope) {
  var parts = previewPurchase(duration, scope).map(function(c) {
    var name = SCOPE_DISPLAY_NAME[c.scope] || c.scope;
    return c.extended
      ? 'extends ' + name + ' to ' + _fmtShort(c.to)
      : 'unlocks ' + name + ' until ' + _fmtShort(c.to);
  });
  if (!parts.length) return '';
  var sentence = parts.length === 1 ? parts[0] : parts.join(' and ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

/** True when this purchase touches a section the buyer already holds. */
function purchaseTouchesExisting(duration, scope) {
  return previewPurchase(duration, scope).some(function(c) { return c.extended; });
}

// Short "what you get" line, per card. SCOPE_FEATURES is the long list shown
// once above the cards; this is the condensed version so each card stands on
// its own.
var SCOPE_CARD_SUMMARY = {
  written: 'All 7 written topics, solved papers and 39 worked numericals',
  oral:    'All 23 oral topics, 5,600+ quiz questions and the Surveyor Q&A bank',
  both:    'Everything: all 23 oral topics, 7 written topics, quizzes, numericals and Surveyor Q&A',
  sponsorship: 'The full sponsorship course: fundamentals, aptitude, data interpretation and company preparation',
};

var _upActiveTrack = 'both';

function renderUpgradeTrackTabs() {
  var wrap = document.getElementById('up-track-tabs');
  if (!wrap) return;
  wrap.innerHTML = upgradeTracks().map(function(scope) {
    var row = findPlanRow('3mo', scope);
    var brand = row ? row.track_name : TRACK_FALLBACK_NAME[scope];
    var what  = SCOPE_TAB_LABEL[scope] || scope;
    return '<button type="button" class="up-track-tab' + (scope === _upActiveTrack ? ' active' : '') + '" data-scope="' + scope + '">'
      + escUp(what).toUpperCase()
      + (brand && brand.toUpperCase() !== String(what).toUpperCase()
          ? '<span class="utt-brand">' + escUp(brand) + '</span>' : '')
      + '</button>';
  }).join('');
}

function renderUpgradeCards() {
  var wrap = document.getElementById('up-tier-cards');
  if (!wrap) return;
  var scope = _upActiveTrack;
  var bestDur = bestValueDuration(scope);

  var subhead = document.getElementById('up-track-subhead');
  if (subhead) subhead.textContent = SCOPE_SUBHEAD[scope] || '';
  var featEl = document.getElementById('up-track-features');
  if (featEl) {
    featEl.innerHTML = (SCOPE_FEATURES[scope] || []).map(function(f) {
      return '<div class="up-feature">' + escUp(f) + '</div>';
    }).join('');
  }

  /* An offer usually covers every plan on a track, in which case repeating
     its name on all three cards is noise, and it used to REPLACE the "Best
     Value" badge, so running a sale quietly deleted the one signal steering
     people to the 12-month plan.

     So: when every discounted card on this track carries the same offer name,
     say it once in a banner above the cards and let the cards keep Best
     Value. Only when the names differ between plans does it fall back to a
     per-card badge, because then it genuinely is per-card information. */
  /* Only plans whose sale is ACTUALLY RUNNING count. The offer name is stored
     on the row the moment it is set up, so keying the banner off the name
     alone announced a sale that had not started yet, and kept announcing it
     after the end date had passed, both times over full-price cards. The
     discount dates decide, the same way effectivePrice() decides the price. */
  var offerRows = TIER_ORDER.map(function (d) { return findPlanRow(d, scope); })
                            .filter(function (r) { return r && r.label && effectivePrice(r).active; });
  var offerNames = offerRows.map(function (r) { return r.label; })
                            .filter(function (v, i, a) { return a.indexOf(v) === i; });
  var sharedOffer = offerNames.length === 1 ? offerRows[0] : null;

  var bannerEl = document.getElementById('up-offer-banner');
  if (bannerEl) {
    bannerEl.innerHTML = sharedOffer
      ? '<div class="up-offer">'
        + '<span class="up-offer-tag">' + escUp(sharedOffer.label) + '</span>'
        + (sharedOffer.description ? '<span class="up-offer-desc">' + escUp(sharedOffer.description) + '</span>' : '')
        + offerDeadlineHtml(sharedOffer)
        + '</div>'
      : '';
  }

  wrap.innerHTML = TIER_ORDER.map(function(dur) {
    var row = findPlanRow(dur, scope);
    if (!row) return '';
    var price = effectivePrice(row);
    var cp = couponPrice(row, dur, scope);
    var isBest = dur === bestDur;
    // With a shared offer the name lives in the banner, so the card is free to
    // keep its own badge.
    var ribbon = (row.label && !sharedOffer)
      ? '<div class="up-ribbon up-ribbon-promo">' + escUp(row.label) + '</div>'
      : (isBest ? '<div class="up-ribbon">Best Value</div>' : '');
    // Three states: a code is cutting this price, the plan's own sale is, or
    // neither. When a code applies, strike the price they would otherwise pay
    // rather than the sticker, so the saving shown is the saving they get.
    var priceHtml;
    if (cp.couponApplied) {
      priceHtml = '<span class="up-price-strike">' + fmtRupees(cp.saleActive ? price.amount : row.base_amount) + '</span> '
                + '<span class="up-price">' + fmtRupees(cp.amount) + '</span>';
    } else if (price.active) {
      priceHtml = '<span class="up-price-strike">' + fmtRupees(row.base_amount) + '</span> <span class="up-price">' + fmtRupees(price.amount) + '</span>';
    } else {
      priceHtml = '<span class="up-price">' + fmtRupees(price.amount) + '</span>';
    }
    var codeNote = '';
    if (window._upCoupon && cp.notEligible) {
      codeNote = '<div class="up-card-effect" style="color:#C08A3E">' + escUp(window._upCoupon.code + ' does not apply to this plan.') + '</div>';
    } else if (cp.couponApplied) {
      codeNote = '<div class="up-card-effect" style="color:#7FD18B">' + escUp(window._upCoupon.code + ' applied.') + '</div>';
    }
    var descHtml = (row.description && !sharedOffer) ? '<div class="up-card-desc">' + escUp(row.description) + '</div>' : '';
    // Every card says what you get and what it does to your dates, so a card
    // is self-explanatory without reading the track blurb above it.
    var getsHtml = '<div class="up-card-gets">' + escUp(SCOPE_CARD_SUMMARY[scope] || '') + '</div>';
    var effectHtml = '<div class="up-card-effect">' + escUp(purchaseEffectText(dur, scope)) + '</div>';
    return '<div class="up-plan-card' + (isBest ? ' up-plan-card-best' : '') + '" id="up-card-' + dur + '-' + scope + '" data-duration="' + dur + '">'
      + ribbon
      + '<div style="display:flex;align-items:center;justify-content:space-between;">'
      +   '<div><div class="up-tier-name">' + escUp(row.tier_name || dur.replace('mo', ' Months')) + '</div></div>'
      +   '<div style="text-align:right;">' + priceHtml + '</div>'
      + '</div>'
      + descHtml
      + getsHtml
      + '<button class="up-buy-btn" data-plan="' + dur + '" data-scope="' + scope + '">Pay ' + fmtRupees(cp.amount) + ' with Razorpay</button>'
      + codeNote
      + effectHtml
      + '</div>';
  }).join('');

  if (window._upPreferredScope === scope) {
    var wantDur = window._upPreferredPlan || bestDur;
    var card = document.getElementById('up-card-' + wantDur + '-' + scope);
    if (card) card.style.outline = '2px solid #C8A44A';
  }
}

function renderGateCards() {
  var wrap = document.getElementById('gate-plan-cards');
  if (!wrap) return;
  var scope = window._gateTriggerScope || 'both';
  var bestDur = bestValueDuration(scope);
  var trackRow = findPlanRow('3mo', scope);
  var trackNameEl = document.getElementById('gate-track-name');
  if (trackNameEl) trackNameEl.textContent = (trackRow ? trackRow.track_name : TRACK_FALLBACK_NAME[scope]).toUpperCase();

  wrap.innerHTML = TIER_ORDER.map(function(dur) {
    var row = findPlanRow(dur, scope);
    if (!row) return '';
    var price = effectivePrice(row);
    var isBest = dur === bestDur;
    return '<div class="gate-plan"' + (isBest ? ' style="border-color:var(--amber)"' : '') + '>'
      + '<div><div style="font-size:13px;font-weight:700;color:var(--text);">' + escUp(row.tier_name) + (isBest ? ' <span style="color:var(--amber);font-size:9.5px;letter-spacing:.04em;">BEST VALUE</span>' : '') + '</div>'
      +   '<div style="font-size:11.5px;color:var(--text3);margin-top:2px;">' + escUp(dur.replace('mo', ' months')) + ' access</div></div>'
      + '<div style="text-align:right;"><div style="font-size:16px;font-weight:700;color:var(--amber);">' + fmtRupees(price.amount) + '</div>'
      +   '<button class="gate-buy-btn" data-plan="' + dur + '" data-scope="' + scope + '" style="margin-top:4px;background:#C8A44A;color:#070D1A;border:none;border-radius:4px;padding:5px 14px;font-size:12px;font-weight:700;cursor:pointer;">Buy</button></div>'
      + '<div style="flex-basis:100%;font-size:10.5px;color:var(--text3);margin-top:6px;line-height:1.45;">' + escUp(purchaseEffectText(dur, scope)) + '</div>'
      + '</div>';
  }).join('');

  renderGateMore(scope);
}

/* The other two tracks, priced. A reader who hit the Oral paywall may only
   want Written, or may be better served by the combined track, and the gate
   above cannot tell them because it renders a single scope by design. Prices
   come from the same pricing_plans rows the cards use, so a sale or a price
   change is reflected here without touching this code. */
function renderGateMore(scope) {
  var box = document.getElementById('gate-more');
  if (!box) return;

  var others = ['written', 'oral', 'both'].filter(function (sc) { return sc !== scope; });

  var items = others.map(function (sc) {
    var cheapest = null;
    TIER_ORDER.forEach(function (dur) {
      var row = findPlanRow(dur, sc);
      if (!row) return;
      var amt = effectivePrice(row).amount;
      if (cheapest === null || amt < cheapest.amount) cheapest = { amount: amt, row: row };
    });
    if (!cheapest) return null;
    return {
      name: cheapest.row.track_name || TRACK_FALLBACK_NAME[sc],
      what: sc === 'both' ? 'Oral + Written' : (sc === 'oral' ? 'Oral only' : 'Written only'),
      from: cheapest.amount,
    };
  }).filter(Boolean);

  // If pricing has not loaded yet, fall back to the plain link rather than
  // showing an empty box or a price that is not real.
  if (!items.length) {
    box.innerHTML = '<button onclick="openUpgradeModal()" style="background:none;border:none;color:var(--text3);font-size:12px;cursor:pointer;text-decoration:underline;display:block;width:100%;">See all tracks &amp; durations</button>';
    return;
  }

  box.innerHTML =
    '<button onclick="openUpgradeModal()" class="gate-more-btn">'
    + '<div style="flex:1;min-width:0;text-align:left;">'
    +   '<div style="font-size:12.5px;font-weight:700;color:var(--text);">This is one of three tracks</div>'
    +   items.map(function (i) {
          return '<div style="font-size:11.5px;color:var(--text3);margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'
            + '<span style="color:var(--amber);font-weight:700;">' + escUp(i.name) + '</span> &middot; '
            + escUp(i.what) + ' from <span style="color:var(--text);font-weight:700;">' + fmtRupees(i.from) + '</span></div>';
        }).join('')
    + '</div>'
    + '<span style="font-size:18px;color:var(--amber);flex-shrink:0;line-height:1;">&rsaquo;</span>'
    + '</button>';
}
window.renderGateCards = renderGateCards;

/* Delegated on the document rather than bound to #up-track-tabs.

   All three listeners in this file used to call
   getElementById(...).addEventListener at parse time, which throws on a page
   that does not already carry the modal markup - and this file is now loaded
   by a page that does not. Delegation also survives the modal being injected
   after load, which is how it gets there now. */
document.addEventListener('click', function (e) {
  var tab = e.target.closest && e.target.closest('.up-track-tab');
  if (!tab) return;
  _upActiveTrack = tab.dataset.scope;
  renderUpgradeTrackTabs();
  renderUpgradeCards();
});

// Records a step on the way to paying, so a low conversion rate can be
// explained rather than just observed. `payments` only exists once an order is
// created, which makes everyone who looked at the price and closed the window
// invisible.
//
// Fire and forget, and deliberately never awaited: this is measurement, and it
// must not be able to slow down, block, or break a purchase. Every failure is
// swallowed.
function trackFunnel(event, plan, scope, detail) {
  try {
    if (!window._sbClient || !window._sbUser) return;
    window._sbClient.from('funnel_events').insert({
      user_id: window._sbUser.id,
      event:   event,
      plan:    plan || null,
      scope:   scope || null,
      detail:  detail ? String(detail).slice(0, 200) : null,
    }).then(function(){}, function(){});
  } catch (e) {}
}
// Exported because showGate() lives in an earlier <script> block and is the
// one caller that fires before this file's own upgrade flow ever runs.
window.trackFunnel = trackFunnel;

/* Builds #upgrade-modal and appends it to <body> the first time it is needed.

   Injected rather than written into each page's markup, the same way
   EBDevices._overlay() does in account.js so that all pages get the same
   thing. Two copies of this markup would drift exactly the way two copies of
   the pricing rules already did. */
function _ensureUpgradeModal() {
  if (document.getElementById('upgrade-modal')) return;
  var host = document.createElement('div');
  host.innerHTML = UPGRADE_MODAL_HTML;
  while (host.firstChild) document.body.appendChild(host.firstChild);
}

/* Makes sure window._profileData exists before the modal is rendered.

   The COC page populates it during checkSession(); the Sponsorship page never
   has. Without it previewPurchase() falls back to "now" for every existing
   expiry, so a reader who already holds Sponsorship would be told a renewal
   "unlocks" it from today rather than extending it from the date they own -
   understating what they are buying, on the screen where they decide to buy.

   One query, only when it is missing, and a failure is not fatal: the modal
   still prices correctly, it just cannot say what the buyer already holds. */
async function _ensureProfileData() {
  if (window._profileData) return;
  if (!window._sbClient || !window._sbUser) return;
  try {
    var res = await window._sbClient.from('profiles')
      .select('subscription_plan, trial_started_at, written_expires_at, oral_expires_at, sponsorship_expires_at')
      .eq('id', window._sbUser.id).single();
    if (!res.error && res.data) window._profileData = res.data;
  } catch (e) { /* price still renders; only the dates are poorer */ }
}

function openUpgradeModal(preferredPlan, preferredScope) {
  _ensureUpgradeModal();
  trackFunnel('upgrade_opened', preferredPlan, preferredScope);
  // Remembered for the exit survey: how long they looked, and at what.
  window._upOpenedAt  = Date.now();
  window._upLastPlan  = preferredPlan  || null;
  window._upLastScope = preferredScope || null;
  var modal = document.getElementById('upgrade-modal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.documentElement.classList.add('_modal-open');

  window._upPreferredPlan  = preferredPlan || (preferredScope ? '12mo' : null);
  window._upPreferredScope = preferredScope || null;
  if (preferredScope) _upActiveTrack = preferredScope;

  preloadRazorpay();   // fetch the checkout script while they read the plans

  Promise.all([window.loadPricingPlans(), _ensureProfileData()]).then(function () {
    renderUpgradeTrackTabs();
    renderUpgradeCards();
  });

  // Show trial notice if user is on trial
  var noticeEl = document.getElementById('up-trial-notice');
  var profile = window._profileData;
  if (profile && profile.subscription_plan === 'trial' && profile.trial_started_at) {
    var trialEnd = new Date(new Date(profile.trial_started_at).getTime() + 3 * 24 * 60 * 60 * 1000);
    var now = new Date();
    if (trialEnd > now) {
      var daysLeft = Math.ceil((trialEnd - now) / (24 * 60 * 60 * 1000));
      noticeEl.textContent = 'You have ' + daysLeft + ' day' + (daysLeft !== 1 ? 's' : '') + ' left in your free trial. Your paid subscription will start after the trial ends on ' + trialEnd.toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric'}) + '.';
      noticeEl.style.display = 'block';
    } else {
      noticeEl.style.display = 'none';
    }
  } else {
    noticeEl.style.display = 'none';
  }

  clearUpStatus();
}

function closeUpgradeModal() {
  var wasOpen = document.getElementById('upgrade-modal').style.display !== 'none';
  document.getElementById('upgrade-modal').style.display = 'none';
  document.documentElement.classList.remove('_modal-open');
  document.body.style.overflow = '';
  clearUpStatus();
  setUpBtnsDisabled(false);
  document.getElementById('up-coupon-box').style.display = 'none';
  document.getElementById('up-coupon-toggle').style.display = '';
  document.getElementById('up-coupon-input').value = '';

  // Ask why, once ever. Guarded on wasOpen because this function is also
  // called blind from the Escape handler, which fires whether or not the
  // modal was showing, and from the success path after a purchase.
  //
  // A short delay lets the modal finish closing first, and filters out the
  // instant close: opening the price list and shutting it inside a second is
  // a misclick, not a decision worth surveying.
  if (wasOpen) {
    var opened = window._upOpenedAt || 0;
    if (Date.now() - opened > 1500) {
      setTimeout(function () {
        maybeAskExitFeedback(window._upLastPlan, window._upLastScope);
      }, 400);
    }
  }
}

/* ── Exit feedback ────────────────────────────────────────────────────────
   Asks, exactly once per user ever, why they closed the price list without
   buying. The funnel already says WHERE people stop; this is the only thing
   that can say why, and the two likeliest answers ("too expensive" and "not
   yet") need opposite responses.

   ONCE, EVER. The guarantee lives in the database, not here. A localStorage
   flag alone would re-ask the same person on their phone, after clearing site
   data, or in a private window. eb_claim_paywall_feedback() does an
   INSERT ... ON CONFLICT DO NOTHING against a table keyed on user_id and
   returns true only to the caller that actually created the row, so the check
   and the claim are one atomic step and two tabs cannot both win it.

   localStorage is kept as a cheap short-circuit so the same browser does not
   make the call twice, but it is an optimisation and never the authority.

   Deliberately fired AFTER the modal has closed. It must never stand between
   somebody and the exit, because trapping a hesitant buyer is how you turn a
   maybe into a never. */
var PWF_KEY = 'eb_pwf_asked';

function maybeAskExitFeedback(plan, scope) {
  try {
    if (!window._sbClient || !window._sbUser) return;
    // Somebody who just paid has nothing to explain, and asking would be
    // absurd. paidThisSession is set by the successful-verification path.
    if (window._pwfPaidThisSession) return;
    if (localStorage.getItem(PWF_KEY)) return;

    window._sbClient
      .rpc('eb_claim_paywall_feedback', { p_plan: plan || null, p_scope: scope || null })
      .then(function (res) {
        // Mark the browser regardless of the answer: either we are about to
        // ask (and must not ask again), or somebody already has.
        try { localStorage.setItem(PWF_KEY, '1'); } catch (e) {}
        if (res && !res.error && res.data === true) pwfOpen();
      }, function () {});
  } catch (e) { /* measurement must never break the close */ }
}

function pwfOpen() {
  var back = document.getElementById('pwf-back');
  if (!back) return;
  // Reparent to body, so no ancestor transform or backdrop-filter traps it in
  // a stacking context and renders it under the sidebar. Same fix the
  // notification modal needed.
  if (back.parentNode !== document.body) document.body.appendChild(back);
  document.getElementById('pwf-step1').hidden = false;
  document.getElementById('pwf-step2').hidden = true;
  document.getElementById('pwf-step3').hidden = true;
  document.getElementById('pwf-note').value = '';
  back.hidden = false;
}

function pwfClose() {
  var back = document.getElementById('pwf-back');
  if (back) back.hidden = true;
}

// Dismissing without answering is a legitimate outcome and is already
// recorded: the row exists with reason NULL, which is what stops us asking
// again. Storing only answers would pester exactly the people least willing
// to reply.
function pwfDismiss() { pwfClose(); }

function pwfSendNote() {
  var note = (document.getElementById('pwf-note').value || '').trim();
  if (!note) { pwfClose(); return; }
  try {
    window._sbClient.rpc('eb_answer_paywall_feedback', {
      p_reason: window._pwfReason || 'other', p_note: note.slice(0, 500),
    }).then(function () {}, function () {});
  } catch (e) {}
  document.getElementById('pwf-step2').hidden = true;
  document.getElementById('pwf-step3').hidden = false;
}

document.addEventListener('click', function (e) {
  var opt = e.target.closest && e.target.closest('.pwf-opt');
  if (!opt) return;
  var reason = opt.dataset.reason;
  window._pwfReason = reason;
  // Save on the tap, not on the follow-up. The tap is the answer; the note is
  // a bonus, and closing the window at that point must not lose the reason.
  try {
    window._sbClient.rpc('eb_answer_paywall_feedback', { p_reason: reason, p_note: null })
      .then(function () {}, function () {});
  } catch (err) {}
  document.getElementById('pwf-step1').hidden = true;
  document.getElementById('pwf-step2').hidden = false;
  var thanks = document.getElementById('pwf-thanks');
  if (thanks) {
    thanks.textContent = reason === 'payment_problem'
      ? 'That is recorded. What went wrong? We will look into it.'
      : 'That is recorded. Anything you would like to add?';
  }
  var n = document.getElementById('pwf-note'); if (n) n.focus();
});

function toggleCouponBox() {
  document.getElementById('up-coupon-box').style.display = 'block';
  document.getElementById('up-coupon-toggle').style.display = 'none';
  document.getElementById('up-coupon-input').focus();
}

// A code can mean two completely different things now, and only the server
// can tell them apart: a grant hands over access with no payment, a discount
// just lowers the price of a purchase that still happens. Ask first, then
// route. window._upCoupon holds an applied discount for the rest of the
// session; it is only ever a hint for display, since create-razorpay-order
// re-validates and re-prices from the database before charging anything.
window._upCoupon = null;

/* codeArg lets a campaign link pre-apply its coupon. It follows
   redeemCoupon(code, token) below, which already takes its arguments rather
   than reading the DOM, instead of inventing a second convention. Called with
   nothing, it behaves exactly as before and reads the input.

   When a code IS passed, the box is opened and filled first, so the reader
   sees the code that was applied on their behalf and can remove it. A
   discount applied invisibly is one the buyer cannot reason about. */
async function applyCoupon(codeArg) {
  var input = document.getElementById('up-coupon-input');
  var btn   = document.getElementById('up-coupon-btn');
  if (codeArg) {
    if (typeof toggleCouponBox === 'function'
        && document.getElementById('up-coupon-box')
        && document.getElementById('up-coupon-box').style.display === 'none') {
      toggleCouponBox();
    }
    input.value = String(codeArg).trim().toUpperCase();
  }
  var code = (input.value || '').trim().toUpperCase();
  if (!code) { input.focus(); return; }

  if (!window._sbClient || !window._sbUser) {
    setUpStatus('You must be signed in to use a code.', false);
    return;
  }

  btn.disabled = true;
  setUpStatus('Checking code...', true);

  try {
    var sessionRes = await window._sbClient.auth.getSession();
    var token = sessionRes.data.session && sessionRes.data.session.access_token;
    if (!token) throw new Error('Not signed in');

    // Quote against whichever track is on screen. The quote is per plan, so
    // switching track re-quotes rather than assuming the answer carries over.
    var quoteRes = await fetch(SUPABASE_FN_URL + '/validate-coupon', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code, plan: _upQuoteDuration(), scope: _upActiveTrack }),
    });
    var quote = await quoteRes.json();
    if (!quoteRes.ok) throw new Error(quote.error || 'That code is not valid');

    if (quote.kind === 'grant') {
      // Free access: no payment, so hand straight to the existing path.
      await redeemCoupon(code, token);
      return;
    }

    if (quote.no_effect) {
      window._upCoupon = null;
      setUpStatus('That code does not beat the discount already applied to this plan.', false);
      btn.disabled = false;
      return;
    }

    window._upCoupon = {
      code: quote.code, kind: quote.kind,
      value: quote.terms && quote.terms.value,
      terms: quote.terms || {},
    };
    clearUpStatus();
    document.getElementById('up-coupon-box').style.display = 'none';
    var toggle = document.getElementById('up-coupon-toggle');
    toggle.style.display = '';
    toggle.textContent = quote.code + ' applied. Remove';
    toggle.onclick = clearCoupon;
    renderUpgradeCards();

    // The code may be live but aimed at plans other than the one we happened
    // to quote. Applying it and letting the cards show which ones it covers is
    // far more useful than refusing it, which reads as "your code is broken".
    if (quote.applies_here === false) {
      var t = quote.terms || {};
      var only = t.applies_duration ? t.applies_duration.replace('mo', '-month') : null;
      setUpStatus(quote.code + ' applied. ' + (quote.min_amount_message
        ? 'It ' + quote.min_amount_message + '.'
        : only ? 'It covers the ' + only + ' plans, marked below.'
               : 'See which plans it covers below.'), true);
    } else {
      setUpStatus(quote.code + ' applied. New prices are shown below.', true);
    }
  } catch (e) {
    window._upCoupon = null;
    setUpStatus(e.message || 'That code is not valid', false);
  } finally {
    btn.disabled = false;
  }
}

function clearCoupon() {
  window._upCoupon = null;
  var toggle = document.getElementById('up-coupon-toggle');
  toggle.textContent = 'Have a code?';
  toggle.onclick = toggleCouponBox;
  document.getElementById('up-coupon-input').value = '';
  clearUpStatus();
  renderUpgradeCards();
}

// Which plan to quote against. The upgrade modal shows three durations at
// once, so quote the one the buyer is most likely to take and let the card
// render tell the truth for the rest.
function _upQuoteDuration() {
  return window._upPreferredPlan || bestValueDuration(_upActiveTrack) || '12mo';
}

async function redeemCoupon(codeArg, tokenArg) {
  var input = document.getElementById('up-coupon-input');
  var btn   = document.getElementById('up-coupon-btn');
  var code  = codeArg || (input.value || '').trim().toUpperCase();
  if (!code) { input.focus(); return; }

  if (!window._sbClient || !window._sbUser) {
    setUpStatus('You must be signed in to use a code.', false);
    return;
  }

  btn.disabled = true;
  setUpStatus('Checking code...', true);

  try {
    var token = tokenArg;
    if (!token) {
      var sessionRes = await window._sbClient.auth.getSession();
      token = sessionRes.data.session && sessionRes.data.session.access_token;
    }
    if (!token) throw new Error('Not signed in');

    var res = await fetch(SUPABASE_FN_URL + '/redeem-coupon', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code }),
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || 'That code is not valid');

    var scope = data.scope || 'both';
    // Merge, never replace. A coupon adds access; assigning a fresh object
    // would strip whatever the user already held, briefly locking a paid
    // section they still own until the reload below repaired it.
    var prev = window._access || { oral: false, written: false };
    window._access = {
      oral:    prev.oral    || scope === 'oral'    || scope === 'both',
      written: prev.written || scope === 'written' || scope === 'both',
    };
    var planRow = findPlanRow(data.plan, scope);
    var planLabel = planRow ? (planRow.track_name + ' ' + planRow.tier_name) : (data.plan.charAt(0).toUpperCase() + data.plan.slice(1));
    var msg = data.expires_at
      ? planLabel + ' access unlocked until ' + new Date(data.expires_at).toLocaleDateString('en-IN', {day:'numeric',month:'short',year:'numeric'}) + '.'
      : planLabel + ' access unlocked.';
    setUpStatus(msg, true);

    setTimeout(function() {
      closeUpgradeModal();
      window.location.reload();
    }, 2200);
  } catch (e) {
    setUpStatus(e.message || 'That code is not valid', false);
    btn.disabled = false;
  }
}

function setUpStatus(msg, ok) {
  var el = document.getElementById('up-status');
  el.style.display = 'block';
  el.style.background = ok ? 'rgba(46,195,113,0.12)' : 'rgba(220,53,69,0.12)';
  el.style.border = '1px solid ' + (ok ? 'rgba(46,195,113,0.3)' : 'rgba(220,53,69,0.3)');
  el.style.color = ok ? '#3DBA72' : '#E05A6A';
  el.textContent = msg;
}

function clearUpStatus() {
  var el = document.getElementById('up-status');
  el.style.display = 'none';
  el.textContent = '';
}

function setUpBtnsDisabled(disabled) {
  document.querySelectorAll('.up-buy-btn').forEach(function(b) { b.disabled = disabled; });
}

async function startPayment(plan, scope) {
  trackFunnel('plan_selected', plan, scope);
  window._upLastPlan = plan; window._upLastScope = scope;
  if (!window._sbClient || !window._sbUser) {
    setUpStatus('You must be signed in to purchase.', false);
    return;
  }
  setUpBtnsDisabled(true);
  clearUpStatus();
  setUpStatus('Creating order...', true);

  var planRow = findPlanRow(plan, scope);
  var planLabelForDesc = planRow ? (planRow.track_name + ' ' + planRow.tier_name) : (plan + ' ' + scope);

  try {
    // Razorpay's script is fetched on demand now (see ensureRazorpay). Start
    // it and the order creation together - the order round-trip covers most of
    // the script's load time, so this costs no perceptible delay.
    var rzpReady = ensureRazorpay();

    // Get fresh JWT
    var sessionRes = await window._sbClient.auth.getSession();
    var token = sessionRes.data.session && sessionRes.data.session.access_token;
    if (!token) throw new Error('Not authenticated');

    // Create Razorpay order via Edge Function - the amount charged is looked
    // up server-side from pricing_plans, never trusted from the client.
    // The code is a hint, not a price. The server looks the coupon up again,
    // re-checks it against THIS plan, claims the redemption slot under a lock
    // and recomputes the amount, so anything that changed since the quote is
    // caught before the buyer is charged.
    var orderBody = { plan: plan, scope: scope };
    if (window._upCoupon && window._upCoupon.code) orderBody.code = window._upCoupon.code;
    // Attribution only. The server checks the campaign exists and is live,
    // then stores the slug on the payment row; it never reaches the price.
    if (window._upCampaign) orderBody.campaign = window._upCampaign;

    var orderRes = await fetch(SUPABASE_FN_URL + '/create-razorpay-order', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify(orderBody),
    });
    var orderData = await orderRes.json();
    // A code that turns out to be a full giveaway never reaches Razorpay, so
    // hand it to the redemption path instead of failing in front of the buyer.
    if (orderRes.status === 409 && orderData.error === 'use_redeem_coupon') {
      setUpBtnsDisabled(false);
      await redeemCoupon(orderData.code, token);
      return;
    }
    if (!orderRes.ok) throw new Error(orderData.error || 'Could not create order');

    // The amount charged is whatever the server decided, never the figure the
    // card was showing.
    if (orderData.discount_amount > 0) {
      setUpStatus('Code applied, ' + fmtRupees(orderData.discount_amount) + ' off.', true);
    }

    clearUpStatus();

    var user = window._sbUser;
    var options = {
      key: RZP_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'Elec-Buddy',
      description: planLabelForDesc,
      order_id: orderData.order_id,
      prefill: {
        email: user.email || '',
        name: user.user_metadata && user.user_metadata.full_name || '',
      },
      theme: { color: '#C8A44A' },
      modal: { backdropclose: false },
      handler: async function(response) {
        setUpStatus('Verifying payment...', true);
        setUpBtnsDisabled(true);
        try {
          var verifyRes = await fetch(SUPABASE_FN_URL + '/verify-razorpay-payment', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              order_id:   response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature:  response.razorpay_signature,
            }),
          });
          var verifyData = await verifyRes.json();
          if (!verifyRes.ok) throw new Error(verifyData.error || 'Verification failed');

          // Update local access state. Merge, never replace: a purchase ADDS
          // a section, and overwriting would strip whatever the buyer already
          // held - the same mistake in the UI that the server used to make in
          // the database.
          var vScope = verifyData.scope || 'both';
          var vPrev = window._access || { oral: false, written: false };
          window._access = {
            oral:    vPrev.oral    || vScope === 'oral'    || vScope === 'both',
            written: vPrev.written || vScope === 'written' || vScope === 'both',
          };
          var vRow = findPlanRow(verifyData.plan, vScope);
          var planLabel = vRow ? (vRow.track_name + ' ' + vRow.tier_name) : (verifyData.plan.charAt(0).toUpperCase() + verifyData.plan.slice(1));
          // Report the effect per section, computed the same way the card
          // preview did, so the success message matches what they were shown
          // before paying rather than a single blended date.
          var effectMsg = purchaseEffectText(verifyData.plan, vScope);
          window._pwfPaidThisSession = true;
          setUpStatus('Payment successful! ' + planLabel + ' is active. ' + effectMsg, true);

          // Close modal after 2.5s and reload to reflect new plan
          setTimeout(function() {
            closeUpgradeModal();
            window.location.reload();
          }, 2500);
        } catch(e) {
          setUpStatus('Payment received but verification failed. Contact support@elec-buddy.com with your payment ID: ' + response.razorpay_payment_id, false);
          setUpBtnsDisabled(false);
        }
      },
    };

    // Must be in place before the checkout can open. Awaited here rather than
    // earlier so the network fetch overlaps the order call above.
    if (!(await rzpReady)) {
      throw new Error('Could not reach the payment provider. Check your connection and try again.');
    }

    var rzp = new Razorpay(options);
    rzp.on('payment.failed', function(resp) {
      // The single most useful line in here. A cluster of these with the same
      // description is a broken checkout, not people changing their minds.
      trackFunnel('payment_failed', plan, scope, resp && resp.error && resp.error.description);
      setUpStatus('Payment failed: ' + (resp.error && resp.error.description || 'Unknown error'), false);
      setUpBtnsDisabled(false);
    });
    trackFunnel('checkout_opened', plan, scope);
    rzp.open();

  } catch(e) {
    // Failed before checkout could even open: a rejected coupon, a sold-out
    // code, no network, the payment provider unreachable. Distinct from
    // payment_failed, and a very different problem to fix.
    trackFunnel('checkout_blocked', plan, scope, e && e.message);
    setUpStatus(e.message || 'Something went wrong. Please try again.', false);
    setUpBtnsDisabled(false);
  }
}

// Confirmation shown ONLY when the purchase touches a section the buyer
// already holds. A first-time buyer has nothing at stake and goes straight to
// Razorpay; someone extending existing access gets the before/after in dates,
// because that is the case where "what did my money just do" is genuinely
// unclear. Built with the existing showCustomConfirm() styling vocabulary but
// as its own element, since it needs a table rather than a message string.
function confirmPurchase(duration, scope, onConfirm) {
  if (!purchaseTouchesExisting(duration, scope)) { onConfirm(); return; }

  var rows = previewPurchase(duration, scope).map(function(c) {
    var name = SCOPE_DISPLAY_NAME[c.scope] || c.scope;
    var before = c.from ? _fmtShort(c.from) : 'none';
    var arrow = c.extended ? ' &rarr; ' : '';
    var after = c.extended ? _fmtShort(c.to) : _fmtShort(c.to);
    return '<tr>'
      + '<td style="padding:7px 0;font-size:13px;color:var(--text3);">' + name + '</td>'
      + '<td style="padding:7px 0;font-size:13px;color:var(--text);text-align:right;font-weight:600;">'
      +   (c.extended ? escUp(before) + arrow + escUp(after) : escUp(after))
      +   '<div style="font-size:10.5px;font-weight:400;color:var(--text3);margin-top:2px;">'
      +     (c.extended ? '+' + _durationMonths(duration) + ' months' : 'new access')
      +   '</div>'
      + '</td></tr>';
  }).join('');

  var ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;z-index:10050;background:rgba(0,0,0,0.65);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;';
  ov.innerHTML =
    '<div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:22px;max-width:360px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6);">'
    + '<div style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:4px;">Confirm your purchase</div>'
    + '<div style="font-size:12.5px;color:var(--text3);margin-bottom:14px;line-height:1.5;">Here is exactly what changes:</div>'
    + '<table style="width:100%;border-collapse:collapse;margin-bottom:14px;">' + rows + '</table>'
    + '<div style="font-size:12px;color:#5DC87A;background:rgba(93,200,122,.09);border:1px solid rgba(93,200,122,.25);border-radius:8px;padding:9px 11px;line-height:1.5;margin-bottom:16px;">Nothing you already paid for is lost. New time is added on top of what you have.</div>'
    + '<button id="_cp-go" style="width:100%;background:#C8A44A;color:#070D1A;border:none;border-radius:9px;padding:12px;font-size:14px;font-weight:700;cursor:pointer;">Continue to payment</button>'
    + '<button id="_cp-no" style="width:100%;background:none;color:var(--text3);border:none;padding:11px;font-size:13px;cursor:pointer;margin-top:4px;">Cancel</button>'
    + '</div>';
  document.body.appendChild(ov);

  function close() { if (ov.parentNode) ov.parentNode.removeChild(ov); }
  ov.querySelector('#_cp-go').onclick = function() { close(); onConfirm(); };
  ov.querySelector('#_cp-no').onclick = close;
  ov.addEventListener('click', function(e) { if (e.target === ov) close(); });
}

// Wire plan card buy buttons (upgrade modal tier cards + gate overlay cards)
document.addEventListener('click', function (e) {
  var btn = e.target.closest && e.target.closest('.up-buy-btn');
  if (!btn || btn.disabled) return;
  var plan = btn.dataset.plan, scope = btn.dataset.scope;
  confirmPurchase(plan, scope, function() { startPayment(plan, scope); });
});

// Close on backdrop click
document.addEventListener('click', function (e) {
  var m = document.getElementById('upgrade-modal');
  if (m && e.target === m) closeUpgradeModal();
});

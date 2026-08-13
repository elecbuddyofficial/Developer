/* Reading progress and topic-open tracking, shared by the main app and the
   Sponsorship section.

   WHY IT IS A SHARED FILE. app.js already had this working, carefully: an
   IntersectionObserver rather than a scroll handler, a 2-second debounce, a
   write only when progress increases, and a 5-minute window on topic opens.
   Sponsorship needed the same thing, and copying it would have produced two
   implementations that drift, which is the fault the table-hint code already
   had once. app.js keeps its own copies for now; new callers use these.

   WHAT IT COSTS, measured rather than assumed. Reading one 25 KB module with
   ten headings: about ten observer callbacks, ten localStorage writes, and
   ONE to THREE network writes. Every network write is fire and forget and is
   never awaited, so the reader waits on none of it. The progress bar moves off
   localStorage, before the network is even asked.

   The three properties that make it free, none of which are optional:
     - no scroll listener; the observer fires per heading, not per pixel
     - writes only when the ratio INCREASES, so scrolling back up costs nothing
     - debounced, so a fast scroll through ten sections is still one write */

(function () {
  var TOUCH_WINDOW_MS = 5 * 60 * 1000;   // one open per topic per five minutes
  var SAVE_DEBOUNCE_MS = 2000;

  window._ebProgress = window._ebProgress || {};
  window._ebTouched  = window._ebTouched  || {};
  window._ebSaveTimers = window._ebSaveTimers || {};

  /* Progress is cached locally under a key of the caller's choosing, so the
     Sponsorship section and the main app do not overwrite each other's cache
     even though both hold a map keyed by topic id. */
  function loadCache(cacheKey) {
    try {
      var raw = localStorage.getItem(cacheKey);
      if (raw) window._ebProgress = JSON.parse(raw) || {};
    } catch (e) { window._ebProgress = {}; }
    return window._ebProgress;
  }

  /* Records that a topic was opened. Deduped per topic AND per kind, so
     reading F08 does not suppress the record of taking the F08 quiz a moment
     later. Fire and forget: measurement must never delay or break studying. */
  function touch(topicId, kind) {
    try {
      if (!window._sbClient || !window._sbUser || !topicId) return;
      kind = kind || 'notes';
      var key = kind + ':' + topicId;
      var now = Date.now();
      if (window._ebTouched[key] && now - window._ebTouched[key] < TOUCH_WINDOW_MS) return;
      window._ebTouched[key] = now;
      window._sbClient.rpc('touch_topic', { p_topic: topicId, p_kind: kind })
        .then(function () {}, function () {});
    } catch (e) { /* never let measurement break studying */ }
  }

  /* Saves a 0..1 ratio for one topic. Returns early when the ratio has not
     improved, which is what makes scrolling back up free. */
  function save(topicId, ratio, opts) {
    opts = opts || {};
    var cacheKey = opts.cacheKey || 'eb_tp_cache';
    var cur = window._ebProgress[topicId] || 0;
    if (ratio <= cur) return;
    window._ebProgress[topicId] = ratio;

    try { localStorage.setItem(cacheKey, JSON.stringify(window._ebProgress)); } catch (e) {}
    if (typeof opts.onLocal === 'function') {
      try { opts.onLocal(topicId, ratio); } catch (e) {}
    }

    clearTimeout(window._ebSaveTimers[topicId]);
    window._ebSaveTimers[topicId] = setTimeout(function () {
      try {
        if (!window._sbUser || !window._sbClient || !opts.column) return;
        var patch = {};
        patch[opts.column] = window._ebProgress;
        window._sbClient.from('profiles').update(patch).eq('id', window._sbUser.id)
          .then(function () {}, function () {});
      } catch (e) {}
    }, SAVE_DEBOUNCE_MS);
  }

  /* Watches the section headings of whatever is currently rendered and reports
     the fraction seen. One observer at a time: a new topic replaces the old
     one rather than stacking, or every previously read topic keeps firing. */
  function observe(topicId, opts) {
    opts = opts || {};
    if (window._ebObserver) { window._ebObserver.disconnect(); window._ebObserver = null; }

    var root = document.querySelector(opts.rootSelector || '#content');
    var container = document.querySelector(opts.containerSelector || '#notes-container');
    if (!root || !container) return;

    var headings = container.querySelectorAll(opts.headingSelector || '.n-h1');
    if (!headings.length) return;

    var total = headings.length, seen = new Set();
    window._ebObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) seen.add(e.target); });
      save(topicId, Math.min(seen.size / total, 1), opts);
    }, { root: root, threshold: 0.2 });
    headings.forEach(function (h) { window._ebObserver.observe(h); });
  }

  window.ebProgress = {
    load: loadCache,
    touch: touch,
    save: save,
    observe: observe,
    get: function (topicId) { return window._ebProgress[topicId] || 0; },
    all: function () { return window._ebProgress; },
  };
})();

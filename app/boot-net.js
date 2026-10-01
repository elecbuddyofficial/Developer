/* Startup sign-in check that never leaves a blank page.

   Both apps hide the whole page (html { visibility:hidden }) until
   supabase.auth.getSession() resolves, and they used to await it with no
   limit. That is fine while the saved token is fresh, because getSession then
   answers from storage in a millisecond. It is not fine for a cadet coming
   back after more than an hour: the token has expired, so getSession has to
   refresh it over the network first, and supabase-js retries a failing
   refresh quietly for about 25 seconds (measured, 2.117.2) and waits on a
   stalled one indefinitely. The cadet sees nothing at all. Then, on failure,
   the page treated "could not refresh" as "not signed in" and sent them to the
   sign-in screen as though they had been logged out.

   Reported on 1 Oct 2026 by a trial cadet: "after 10-20 mins this site is not
   loading". Their account was healthy; they had been away about 80 minutes.

   So this does three things:
     - after SLOW_MS still waiting, shows a visible "still connecting" card with
       a Retry button, and keeps waiting underneath it
     - a NETWORK failure with a saved sign-in still present is shown as a
       connection problem, not a sign-out: the saved sign-in is kept, and Retry
       usually just works once the connection recovers
     - everything is inline-styled with theme tokens and dark fallbacks, so it
       renders correctly even when the service worker hands back a stale
       style.css on the first load after a deploy (see CLAUDE.md, 27 Sep 2026)

   Loaded synchronously in <head>, before each page's auth block. No DOM work
   until it is actually needed. */
(function () {
  'use strict';
  var SLOW_MS = 6000;
  var STORAGE_KEY = 'sb-vcofgjuwprylojgyfbtr-auth-token';

  function hasSavedSignIn() {
    try { return !!localStorage.getItem(STORAGE_KEY); } catch (e) { return false; }
  }

  function isNetworkError(err) {
    if (!err) return false;
    var name = String(err.name || ''), msg = String(err.message || err);
    return name === 'AuthRetryableFetchError' || err.status === 0 ||
      /failed to fetch|networkerror|load failed|network request failed|timeout|cdn unavailable/i.test(msg);
  }

  // mode: 'slow' = spinner and Retry (still trying); 'offline' = Retry only.
  function card(title, body, mode) {
    var el = document.getElementById('eb-net-card');
    if (!el) {
      el = document.createElement('div');
      el.id = 'eb-net-card';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      // visibility:visible is what lets this show while <html> is still hidden.
      el.style.cssText = 'visibility:visible;position:fixed;inset:0;z-index:100000;display:flex;' +
        'align-items:center;justify-content:center;padding:16px;box-sizing:border-box;' +
        'background:var(--bg,#0B1220);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;';
      el.innerHTML =
        '<div style="width:100%;max-width:400px;background:var(--surface,#141C2F);border:1px solid var(--border,#26324A);' +
        'border-radius:14px;padding:24px 22px;text-align:center;box-sizing:border-box;">' +
        '<div id="eb-net-spin" style="width:28px;height:28px;margin:0 auto 14px;border-radius:50%;' +
        'border:3px solid var(--border,#26324A);border-top-color:var(--blue,#5D98F8);animation:ebnetspin 1s linear infinite;"></div>' +
        '<div id="eb-net-title" style="font-size:17px;font-weight:700;color:var(--text,#F8FAFC);"></div>' +
        '<div id="eb-net-body" style="font-size:14px;line-height:1.6;color:var(--text2,#CBD5E1);margin-top:8px;"></div>' +
        '<button id="eb-net-retry" type="button" style="margin-top:18px;min-height:44px;width:100%;border:0;border-radius:9px;' +
        'background:var(--blue,#5D98F8);color:var(--on-accent,#0B1220);font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;">' +
        'Retry</button></div>' +
        '<style>@keyframes ebnetspin{to{transform:rotate(360deg)}}' +
        '@media (prefers-reduced-motion:reduce){#eb-net-spin{animation:none}}</style>';
      (document.body || document.documentElement).appendChild(el);
      el.querySelector('#eb-net-retry').addEventListener('click', function () { location.reload(); });
    }
    el.querySelector('#eb-net-title').textContent = title;
    el.querySelector('#eb-net-body').textContent = body;
    el.querySelector('#eb-net-spin').style.display = mode === 'slow' ? '' : 'none';
    return el;
  }

  function clearCard() {
    var el = document.getElementById('eb-net-card');
    if (el) el.remove();
  }

  function offline() {
    card("Can't reach Elec-Buddy right now",
      'Your sign-in is saved. Check your internet connection, then press Retry.', 'offline');
  }

  /* Resolves to { session, offline }. When offline is true the card is already
     on screen and the caller should stop; it must not redirect to sign-in. */
  async function session(client) {
    var slow = setTimeout(function () {
      card('Still connecting',
        'Your connection or our server is slow at the moment. This page will open by itself as soon as it gets through.', 'slow');
    }, SLOW_MS);
    var res;
    try {
      res = await client.auth.getSession();
    } catch (e) {
      clearTimeout(slow);
      if (isNetworkError(e) && hasSavedSignIn()) { offline(); return { session: null, offline: true }; }
      throw e;
    }
    clearTimeout(slow);
    var s = res && res.data ? res.data.session : null;
    if (!s && res && res.error && isNetworkError(res.error) && hasSavedSignIn()) {
      offline();
      return { session: null, offline: true };
    }
    clearCard();
    return { session: s, offline: false };
  }

  // For the case where supabase-js itself never loaded (CDN blocked or down).
  // Sending them to sign-in would not help: that page needs the same library.
  function cdnDown() {
    card("Can't reach Elec-Buddy right now",
      'Part of the app could not load. Check your internet connection, then press Retry.', 'offline');
  }

  window.EBBoot = { session: session, cdnDown: cdnDown, _isNetworkError: isNetworkError };
})();

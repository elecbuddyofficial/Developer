/* Sparky: the Socratic tutor, as a chat button on every Oral topic (TEST).

   Shown only to admins and lifetime users, and only while an Oral topic's
   notes are on screen. The server (supabase/functions/tutor-chat) checks the
   same rule again and refuses anyone else, so this check is for tidiness, not
   security.

   Self-contained on purpose: the styles are injected from here, every SVG has
   its size in its markup, and the panel is created hidden inline. On the first
   load after a deploy the service worker can hand back the previous
   style.css, which has none of this; that is how the notification toolbar
   shipped unstyled on 2 Oct 2026 (see CLAUDE.md).

   The conversation lives in the browser per topic (sessionStorage), so
   closing the panel and reopening it, or moving between topics, keeps each
   topic's chat. Only text is sent to the server. */
(function () {
  'use strict';

  var FN = 'https://vcofgjuwprylojgyfbtr.supabase.co/functions/v1/tutor-chat';
  var APIKEY = 'sb_publishable_DrsdBaf18Ypt1dGdvM14LA_lW_d4aHW';
  var START = 'Start the session. Ask me your first question on this topic.';
  var allowed = null;          // null until known, then true/false
  var topic = null;            // the topic the panel is showing
  var busy = false;

  var BOLT = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
    + '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>';
  var BUBBLE = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
    + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-.9L3 21l1.9-5A8.4 8.4 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z"/>'
    + '<path d="M12.6 7.5 10 12h3.2l-.8 4.5" stroke-width="1.8"/></svg>';
  var CLOSE = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
    + 'stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  var SEND = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
    + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>';

  var EXPAND = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
    + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
  var SHRINK = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
    + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/></svg>';
  var FULL_KEY = 'eb_sparky_full';

  var CSS = ''
    + '#sparky-fab{position:fixed;right:24px;bottom:96px;z-index:1200;width:58px;height:58px;border-radius:50%;'
    + 'border:0;cursor:pointer;display:none;align-items:center;justify-content:center;'
    + 'background:var(--blue,#5D98F8);color:var(--on-accent,#0B1220);box-shadow:0 6px 20px rgba(0,0,0,.35);'
    + 'transition:transform .15s ease}'
    + '#sparky-fab:hover{transform:scale(1.06)}'
    + '#sparky-fab:focus-visible{outline:3px solid var(--text,#F8FAFC);outline-offset:3px}'
    + '#sparky-fab .sp-tag{position:absolute;right:66px;white-space:nowrap;font:700 12px/1 -apple-system,Segoe UI,Roboto,sans-serif;'
    + 'padding:7px 10px;border-radius:14px;background:var(--surface,#141C2F);color:var(--text,#F8FAFC);'
    + 'border:1px solid var(--border,#26324A);box-shadow:0 4px 14px rgba(0,0,0,.25);pointer-events:none}'
    + '#sparky-panel{position:fixed;right:24px;bottom:24px;z-index:1201;width:390px;max-width:calc(100vw - 32px);'
    + 'height:600px;max-height:calc(100vh - 48px);flex-direction:column;overflow:hidden;border-radius:16px;'
    + 'background:var(--surface,#141C2F);color:var(--text,#F8FAFC);border:1px solid var(--border,#26324A);'
    + 'box-shadow:0 18px 50px rgba(0,0,0,.45);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}'
    + '#sparky-panel .sp-head{display:flex;align-items:center;gap:10px;padding:12px 14px;'
    + 'border-bottom:1px solid var(--border,#26324A);background:var(--surface2,#1C2740)}'
    + '#sparky-panel .sp-av{width:34px;height:34px;border-radius:50%;flex:0 0 34px;display:flex;align-items:center;justify-content:center;'
    + 'background:var(--blue,#5D98F8);color:var(--on-accent,#0B1220)}'
    + '#sparky-panel .sp-name{font-weight:800;font-size:15px;color:var(--text,#F8FAFC)}'
    + '#sparky-panel .sp-sub{font-size:11.5px;color:var(--text3,#94A3B8);margin-top:1px}'
    + '#sparky-panel .sp-x,#sparky-panel .sp-new{background:none;border:1px solid transparent;color:var(--text2,#CBD5E1);'
    + 'cursor:pointer;border-radius:8px;padding:6px;display:inline-flex;align-items:center;font:600 12px inherit}'
    + '#sparky-panel .sp-x:hover,#sparky-panel .sp-new:hover{border-color:var(--border,#26324A);color:var(--text,#F8FAFC)}'
    + '#sparky-panel .sp-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}'
    + '#sparky-panel .sp-msg{max-width:86%;padding:9px 12px;border-radius:14px;font-size:14px;line-height:1.55;'
    + 'overflow-wrap:anywhere}'
    + '#sparky-panel .sp-bot{align-self:flex-start;background:var(--surface2,#1C2740);color:var(--text,#F8FAFC);'
    + 'border:1px solid var(--border,#26324A);border-bottom-left-radius:4px}'
    + '#sparky-panel .sp-me{align-self:flex-end;background:var(--blue-dim,rgba(59,130,246,.14));color:var(--text,#F8FAFC);'
    + 'border:1px solid var(--blue-border,rgba(59,130,246,.4));border-bottom-right-radius:4px}'
    + '#sparky-panel .sp-msg ul,#sparky-panel .sp-msg ol{margin:4px 0 4px 18px;padding:0}'
    + '#sparky-panel .sp-msg a{color:var(--blue,#5D98F8)}'
    + '#sparky-panel .sp-note{align-self:center;font-size:12px;color:var(--text3,#94A3B8);text-align:center;max-width:90%}'
    + '#sparky-panel .sp-typing{align-self:flex-start;color:var(--text3,#94A3B8);font-size:13px;font-style:italic}'
    + '#sparky-panel .sp-form{display:flex;gap:8px;padding:10px;border-top:1px solid var(--border,#26324A)}'
    + '#sparky-panel textarea{flex:1;resize:none;min-height:42px;max-height:120px;padding:10px 12px;border-radius:10px;'
    + 'border:1px solid var(--border2,var(--border,#26324A));background:var(--surface2,#1C2740);color:var(--text,#F8FAFC);'
    + 'font:14px/1.4 inherit}'
    + '#sparky-panel textarea:focus{outline:2px solid var(--blue,#5D98F8);outline-offset:0}'
    + '#sparky-panel .sp-send{width:44px;flex:0 0 44px;border:0;border-radius:10px;cursor:pointer;display:flex;align-items:center;'
    + 'justify-content:center;background:var(--blue,#5D98F8);color:var(--on-accent,#0B1220)}'
    + '#sparky-panel .sp-send:disabled{opacity:.5;cursor:default}'
    + '#sparky-panel.sp-full{right:50%;bottom:50%;transform:translate(50%,50%);width:min(920px,calc(100vw - 48px));'
    + 'max-width:none;height:calc(100vh - 48px);max-height:none}'
    + '#sparky-panel.sp-full .sp-log{padding:20px max(20px,calc((100% - 760px) / 2))}'
    + '#sparky-panel.sp-full .sp-form{padding:12px max(12px,calc((100% - 760px) / 2))}'
    + '#sparky-panel.sp-full .sp-msg{font-size:15px}'
    + '#sparky-back{position:fixed;inset:0;z-index:1200;background:rgba(4,9,20,.6)}'
    + '@media (max-width:600px){#sparky-fab{right:16px;bottom:84px}#sparky-panel .sp-full-btn{display:none}'
    + '#sparky-panel{right:0;bottom:0;width:100vw;max-width:100vw;height:100%;max-height:100%;border-radius:0}}';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmt(t) { return window.EBFormat ? window.EBFormat.render(t) : esc(t).replace(/\n/g, '<br>'); }
  function key(t) { return 'eb_sparky_' + t; }
  function load(t) { try { return JSON.parse(sessionStorage.getItem(key(t)) || '[]'); } catch (e) { return []; } }
  function save(t, m) { try { sessionStorage.setItem(key(t), JSON.stringify(m)); } catch (e) {} }

  function build() {
    if (document.getElementById('sparky-fab')) return;
    var st = document.createElement('style'); st.id = 'sparky-css'; st.textContent = CSS;
    document.head.appendChild(st);

    var fab = document.createElement('button');
    fab.id = 'sparky-fab'; fab.type = 'button';
    fab.setAttribute('aria-label', 'Ask Sparky, your tutor for this topic');
    fab.style.display = 'none';
    fab.innerHTML = BUBBLE + '<span class="sp-tag">Ask Sparky</span>';
    fab.addEventListener('click', open);
    document.body.appendChild(fab);

    var p = document.createElement('div');
    p.id = 'sparky-panel'; p.setAttribute('role', 'dialog'); p.setAttribute('aria-label', 'Sparky tutor');
    p.style.display = 'none';
    p.innerHTML = '<div class="sp-head"><div class="sp-av">' + BOLT + '</div>'
      + '<div style="flex:1;min-width:0"><div class="sp-name">Sparky</div><div class="sp-sub" id="sp-sub"></div></div>'
      + '<button type="button" class="sp-new" id="sp-new" title="Start this topic again">New</button>'
      + '<button type="button" class="sp-x sp-full-btn" id="sp-full" aria-label="Full screen" title="Full screen">' + EXPAND + '</button>'
      + '<button type="button" class="sp-x" id="sp-x" aria-label="Close">' + CLOSE + '</button></div>'
      + '<div class="sp-log" id="sp-log" aria-live="polite"></div>'
      + '<form class="sp-form" id="sp-form"><textarea id="sp-in" rows="1" placeholder="Type your answer..." aria-label="Your answer"></textarea>'
      + '<button type="submit" class="sp-send" id="sp-send" aria-label="Send">' + SEND + '</button></form>';
    document.body.appendChild(p);

    p.querySelector('#sp-x').addEventListener('click', close);
    p.querySelector('#sp-full').addEventListener('click', function () {
      var on = !p.classList.contains('sp-full');
      try { localStorage.setItem(FULL_KEY, on ? '1' : '0'); } catch (e) {}
      applyFull(on);
    });
    p.querySelector('#sp-new').addEventListener('click', function () {
      if (!topic || busy) return;
      save(topic, []); render(); begin();
    });
    p.querySelector('#sp-form').addEventListener('submit', function (e) { e.preventDefault(); sendTyped(); });
    var ta = p.querySelector('#sp-in');
    ta.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendTyped(); }
    });
    ta.addEventListener('input', function () { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'; });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && p.style.display !== 'none') close();
    });
  }

  // Full screen: a large centred panel over a dim backdrop. Remembered per
  // browser. Phones are already full screen, so the button hides there.
  function applyFull(on) {
    var p = document.getElementById('sparky-panel'); if (!p) return;
    p.classList.toggle('sp-full', on);
    var b = document.getElementById('sp-full');
    if (b) { b.innerHTML = on ? SHRINK : EXPAND; b.setAttribute('aria-label', on ? 'Exit full screen' : 'Full screen'); b.title = b.getAttribute('aria-label'); }
    var back = document.getElementById('sparky-back');
    var shown = p.style.display !== 'none';
    if (on && shown && !back) {
      back = document.createElement('div'); back.id = 'sparky-back';
      back.addEventListener('click', close);
      document.body.insertBefore(back, p);
    } else if ((!on || !shown) && back) back.remove();
  }
  function wantFull() { try { return localStorage.getItem(FULL_KEY) === '1'; } catch (e) { return false; } }

  function topicName(t) {
    var x = (window.TOPICS || []).find && (window.TOPICS || []).find(function (o) { return o.id === t; });
    return x ? t + ' ' + x.name : t;
  }

  function render() {
    var log = document.getElementById('sp-log'); if (!log || !topic) return;
    var msgs = load(topic);
    var html = '<div class="sp-note">Sparky asks the questions a surveyor would on ' + esc(topicName(topic))
      + ', then helps you work out the answer. It is in testing, so check anything important in the notes.</div>';
    msgs.forEach(function (m, i) {
      if (i === 0 && m.role === 'user' && m.content === START) return;   // the hidden opener
      html += '<div class="sp-msg ' + (m.role === 'user' ? 'sp-me' : 'sp-bot') + '">'
        + (m.role === 'user' ? esc(m.content).replace(/\n/g, '<br>') : fmt(m.content)) + '</div>';
    });
    if (busy) html += '<div class="sp-typing">Sparky is thinking...</div>';
    log.innerHTML = html;
    log.scrollTop = log.scrollHeight;
  }

  function note(text) {
    var log = document.getElementById('sp-log');
    if (log) { log.insertAdjacentHTML('beforeend', '<div class="sp-note">' + esc(text) + '</div>'); log.scrollTop = log.scrollHeight; }
  }

  async function ask(msgs) {
    var t = topic;
    busy = true; render();
    document.getElementById('sp-send').disabled = true;
    try {
      var s = await window._sbClient.auth.getSession();
      var tok = s && s.data && s.data.session && s.data.session.access_token;
      if (!tok) throw new Error('Your sign-in has expired. Refresh the page.');
      var res = await fetch(FN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tok, 'apikey': APIKEY },
        body: JSON.stringify({ topic: t, messages: msgs }),
      });
      var data = await res.json().catch(function () { return {}; });
      if (!res.ok || !data.reply) throw new Error(data.error || 'Sparky could not answer just now. Try again.');
      msgs.push({ role: 'assistant', content: data.reply });
      save(t, msgs);
    } catch (e) {
      // Drop the unanswered message so the conversation stays valid to resend.
      msgs.pop(); save(t, msgs);
      busy = false; if (t === topic) { render(); note(e.message); }
      document.getElementById('sp-send').disabled = false;
      return;
    }
    busy = false;
    document.getElementById('sp-send').disabled = false;
    if (t === topic) render();
  }

  function begin() {
    var m = load(topic);
    if (!m.length) { m.push({ role: 'user', content: START }); save(topic, m); ask(m); }
  }

  function sendTyped() {
    if (busy || !topic) return;
    var ta = document.getElementById('sp-in');
    var text = (ta.value || '').trim();
    if (!text) return;
    var m = load(topic);
    if (m.length && m[m.length - 1].role === 'user') m.pop();   // a failed send left one behind
    m.push({ role: 'user', content: text.slice(0, 2000) });
    save(topic, m);
    ta.value = ''; ta.style.height = 'auto';
    ask(m);
  }

  function open() {
    var t = currentTopic(); if (!t) return;
    topic = t;
    document.getElementById('sp-sub').textContent = topicName(t);
    document.getElementById('sparky-panel').style.display = 'flex';
    document.getElementById('sparky-fab').style.display = 'none';
    applyFull(wantFull());
    render(); begin();
    setTimeout(function () { var ta = document.getElementById('sp-in'); if (ta) ta.focus(); }, 50);
  }
  function close() {
    document.getElementById('sparky-panel').style.display = 'none';
    applyFull(false);   // drops the backdrop; the saved choice is reapplied on next open
    tick();
  }

  // The topic whose notes are on screen right now, or null.
  function currentTopic() {
    var t = window._activeTopicId;
    if (!/^T(0[1-9]|1[0-9]|2[0-3])$/.test(t || '')) return null;
    var v = document.querySelector('#notes-container .view.active');
    return v ? t : null;
  }

  function tick() {
    if (allowed !== true) return;
    var fab = document.getElementById('sparky-fab'), panel = document.getElementById('sparky-panel');
    if (!fab || !panel) return;
    var t = currentTopic();
    if (panel.style.display !== 'none' && t !== topic) close();   // left the topic
    fab.style.display = (t && panel.style.display === 'none') ? 'flex' : 'none';
  }

  async function init() {
    for (var i = 0; i < 40 && !(window._sbClient && window._sbUser); i++) {
      await new Promise(function (r) { setTimeout(r, 250); });
    }
    if (!window._sbClient || !window._sbUser) return;
    try {
      var r = await window._sbClient.from('profiles').select('is_admin,subscription_plan')
        .eq('id', window._sbUser.id).single();
      allowed = !!(r.data && (r.data.is_admin === true || r.data.subscription_plan === 'lifetime'));
    } catch (e) { allowed = false; }
    if (!allowed) return;
    build();
    setInterval(tick, 700);
    tick();
  }

  window.EBSparky = { _currentTopic: currentTopic };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

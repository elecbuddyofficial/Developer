// Dynamic Loader System
window.QD = {}; // Quiz Data Store

// ── Topic Progress ──────────────────────────────────────────
window._topicProgress = window._topicProgress || {};
window._progDebounce  = {};
window._progObserver  = null;

function _saveProgress(topicId, ratio) {
    var cur = window._topicProgress[topicId] || 0;
    if (ratio <= cur) return;
    window._topicProgress[topicId] = ratio;
    localStorage.setItem('eb_tp_cache', JSON.stringify(window._topicProgress));
    var pill = document.querySelector('.tl-item[data-id="' + topicId + '"] .tl-prog');
    if (pill) pill.style.width = Math.round(ratio * 100) + '%';
    clearTimeout(window._progDebounce[topicId]);
    window._progDebounce[topicId] = setTimeout(function() {
        if (!window._sbUser || !window._sbClient) return;
        window._sbClient.from('profiles')
            .update({ topic_progress: window._topicProgress })
            .eq('id', window._sbUser.id)
            .then();
    }, 2000);
}

function _setupProgressObserver(topicId) {
    if (window._progObserver) { window._progObserver.disconnect(); window._progObserver = null; }
    var contentEl = document.getElementById('content');
    var container = document.getElementById('notes-container');
    if (!contentEl || !container) return;
    var headings = container.querySelectorAll('.n-h1');
    if (!headings.length) return;
    var total = headings.length;
    var seen = new Set();
    window._progObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) { if (e.isIntersecting) seen.add(e.target); });
        _saveProgress(topicId, Math.min(seen.size / total, 1));
    }, { root: contentEl, threshold: 0.2 });
    headings.forEach(function(h) { window._progObserver.observe(h); });
}

// Tables that overflow horizontally on mobile (see .n-table's max-width:768px
// rule in style.css) read as clean and complete, not cut off - nothing about
// them signals there is more to the right. Wraps every table that actually
// overflows (measured after render, not guessed from viewport width, so it
// stays correct across orientation changes and tablet-sized screens) with a
// small pulsing hint that fades out the first time that specific table is
// scrolled or touched.
function _addTableScrollHints(container) {
    if (!container) return;
    var tables = container.querySelectorAll('.n-table');
    if (!tables.length) return;

    function checkOne(table, wrap) {
        var overflowing = table.scrollWidth > table.clientWidth + 2;
        wrap.classList.toggle('has-scroll-hint', overflowing && !wrap.classList.contains('hint-dismissed'));
    }

    tables.forEach(function(table) {
        if (table.dataset.scrollHinted) return;
        table.dataset.scrollHinted = '1';

        var wrap = document.createElement('div');
        wrap.className = 'n-table-wrap';
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);

        var hint = document.createElement('span');
        hint.className = 'n-table-hint';
        hint.setAttribute('aria-hidden', 'true');
        hint.textContent = '⇄'; // ⇄
        wrap.appendChild(hint);

        checkOne(table, wrap);

        var dismiss = function() { wrap.classList.add('hint-dismissed'); wrap.classList.remove('has-scroll-hint'); };
        table.addEventListener('scroll', dismiss, { passive: true, once: true });
        table.addEventListener('touchstart', dismiss, { passive: true, once: true });

        window.addEventListener('resize', function() { checkOne(table, wrap); });
    });
}

function _dismissContinueDlg() {
    var dlg = document.getElementById('_continue-dlg');
    if (!dlg) return;
    clearTimeout(dlg._timer);
    dlg.style.opacity = '0';
    dlg.style.transform = 'translateX(-50%) translateY(16px)';
    setTimeout(function() { if (dlg.parentNode) dlg.parentNode.removeChild(dlg); }, 280);
}

window._doContinue = function(scroll) {
    _dismissContinueDlg();
    var el = document.getElementById('content');
    if (el) el.scrollTop = scroll;
};

function _restoreScroll(topicId) {
    if (window._pendingScroll) return;
    var saved = parseInt(localStorage.getItem('eb_scroll_' + topicId), 10);
    if (!saved || saved < 100) return;

    _dismissContinueDlg();
    var dlg = document.createElement('div');
    dlg.id = '_continue-dlg';
    dlg.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(0);background:var(--surface2);border:1px solid var(--border2);border-radius:14px;padding:12px 16px;display:flex;align-items:center;gap:10px;z-index:99990;box-shadow:0 8px 28px rgba(0,0,0,.28);font-size:13px;color:var(--text);white-space:nowrap;opacity:0;transition:opacity .25s,transform .25s;pointer-events:auto;';
    dlg.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;color:var(--blue)"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"/></svg>'
        + '<span>Continue where you left off?</span>'
        + '<button onclick="window._doContinue(' + saved + ')" style="background:var(--blue);color:#fff;border:none;border-radius:8px;padding:5px 13px;font-size:12px;font-weight:700;cursor:pointer;flex-shrink:0;">Continue</button>'
        + '<button onclick="_dismissContinueDlg()" style="background:transparent;color:var(--text2);border:none;font-size:12px;cursor:pointer;flex-shrink:0;padding:4px 6px;">Dismiss</button>';
    document.body.appendChild(dlg);
    requestAnimationFrame(function() {
        dlg.style.opacity = '1';
    });
    dlg._timer = setTimeout(_dismissContinueDlg, 7000);
}

document.addEventListener('DOMContentLoaded', function() {
    var _scrollTimer;
    var contentEl = document.getElementById('content');
    if (!contentEl) return;
    contentEl.addEventListener('scroll', function() {
        if (!window._activeTopicId) return;
        // Capture the topic AND position at scroll time, not when the debounce
        // fires 600ms later. Switching topics inside that window used to mean
        // the timer read the NEW topic id and the already-reset scrollTop, so
        // the topic you just left never got its position saved at all and
        // "Continue where you left off" silently did nothing.
        var tid = window._activeTopicId;
        var pos = contentEl.scrollTop;
        clearTimeout(_scrollTimer);
        _scrollTimer = setTimeout(function() {
            try { localStorage.setItem('eb_scroll_' + tid, pos); } catch (e) {}
        }, 600);
    }, { passive: true });
});

function appToast(msg) {
    var el = document.getElementById('_app-toast');
    if (!el) {
        el = document.createElement('div');
        el.id = '_app-toast';
        el.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1e293b;color:#e2e8f0;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;z-index:99999;pointer-events:none;transition:opacity .3s;white-space:nowrap;max-width:90vw;text-align:center;';
        document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(el._t);
    el._t = setTimeout(function() { el.style.opacity = '0'; }, 3000);
}
window.NOTE_HTML = {}; // HTML Store
window.VIDEO_DATA = {}; // Video Data Store

// ── Data Saver ───────────────────────────────────────────────
// window.NOTE_HTML always holds the pristine note HTML with real <img>
// tags. This transform is applied only at the point of injecting it into
// the DOM, so toggling the setting never requires re-fetching content -
// it just changes how the same cached HTML gets rendered.
window._dataSaver = localStorage.getItem('eb_data_saver') === '1';

// data-blur is a ~200-byte inline base64 WebP (28px wide) baked into every
// note file at build time - a real, heavily-blurred preview of the actual
// diagram, shown under the overlay exactly like WhatsApp/Telegram media
// placeholders. It costs one extra HTML attribute, never a network request.
var _DGM_IMG_RE = /<img src="([^"]+)" alt="([^"]*)" loading="lazy" decoding="async" data-blur="([^"]*)">/g;
var _DGM_ICON = '<span class="dgm-dl-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg></span>';

function _dgmPlaceholderHtml(src, alt, blur) {
    return '<div class="dgm-placeholder" data-src="' + src + '" data-alt="' + alt + '" role="button" tabindex="0" aria-label="Tap to download diagram">'
        + '<img class="dgm-blur-bg" src="' + blur + '" alt="" aria-hidden="true">'
        + '<div class="dgm-overlay">' + _DGM_ICON + '<span class="dgm-dl-label">Tap to download</span></div>'
        + '</div>';
}

function _applyDataSaver(html) {
    if (!window._dataSaver) return html;
    return html.replace(_DGM_IMG_RE, function(_m, src, alt, blur) {
        return _dgmPlaceholderHtml(src, alt, blur);
    });
}

function _dgmLoad(ph) {
    var img = document.createElement('img');
    img.src = ph.getAttribute('data-src');
    img.alt = ph.getAttribute('data-alt') || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    // Carry the blur thumbnail back onto the real <img>. Without this, turning
    // Data Saver off and on again (or tapping to load, then re-enabling it)
    // rebuilt the placeholder with an empty blur src - a blank box instead of
    // the blurred preview, since toggleDataSaver reads data-blur off the img.
    var blur = ph.querySelector('.dgm-blur-bg');
    if (blur && blur.getAttribute('src')) img.setAttribute('data-blur', blur.getAttribute('src'));
    ph.replaceWith(img);
}

document.addEventListener('click', function(e) {
    var ph = e.target.closest('.dgm-placeholder');
    if (ph) _dgmLoad(ph);
});
document.addEventListener('keydown', function(e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('dgm-placeholder')) {
        e.preventDefault();
        _dgmLoad(e.target);
    }
});

// Live-patches whatever topic is currently on screen, so flipping the
// setting takes effect immediately instead of on next topic switch.
window.toggleDataSaver = function(on) {
    window._dataSaver = on;
    localStorage.setItem('eb_data_saver', on ? '1' : '0');
    var container = document.getElementById('notes-container');
    if (!container) return;
    if (on) {
        container.querySelectorAll('.note-diagram-wrap img[loading="lazy"]').forEach(function(img) {
            var wrap = document.createElement('div');
            wrap.innerHTML = _dgmPlaceholderHtml(
                img.getAttribute('src'),
                img.getAttribute('alt') || '',
                img.getAttribute('data-blur') || ''
            );
            img.replaceWith(wrap.firstElementChild);
        });
    } else {
        container.querySelectorAll('.dgm-placeholder').forEach(_dgmLoad);
    }
};

window.loadVideos = function(topicId, data) {
    window.VIDEO_DATA[topicId] = data;
};

// ── Search Index ──────────────────────────────────────────
var SEARCH_INDEX = [];
var SEARCH_INDEX_BUILT = {};
var SEARCH_INDEX_DONE = 0;
var SEARCH_INDEX_TOTAL = 0;

window.loadQuizzes = function(topicKey, data) {
    window.QD[topicKey] = data;
};

window.loadNotes = function(topicId, htmlContent) {
    window.NOTE_HTML[topicId] = htmlContent;
    buildSearchIndexForTopic(topicId, htmlContent);
    // Only ever paint the topic the user is actually on. This catches two
    // cases: a background index load (never the active topic), and a slow
    // user-initiated load that finishes AFTER the user gave up and opened a
    // different topic - that one used to hijack the screen, leaving the
    // sidebar and URL pointing at a topic that is no longer displayed.
    // The cache write and search index above still happen either way, so the
    // late arrival is not wasted - it just doesn't steal the view.
    if (topicId !== window._activeTopicId) return;
    document.getElementById('notes-container').innerHTML = _applyDataSaver(htmlContent);
    injectVideoTab(topicId);
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
    let so = document.getElementById('si-oral'); if(so) so.classList.add('active');
    let injectedView = document.getElementById('notes-container').querySelector('.view');
    if(injectedView) injectedView.classList.add('active');
    buildTopicSideList(topicId);
    injectTopicFooterNav(topicId);
    document.getElementById('content').scrollTo({top:0, behavior:'instant'});
    if(window._pendingScroll){
        var _s=window._pendingScroll; window._pendingScroll=null;
        setTimeout(function(){
            var el=document.getElementById(_s);
            if(el){var c=document.getElementById('content');c.scrollTo({top:Math.max(0,el.offsetTop-70),behavior:'smooth'});}
        },200);
    } else {
        _restoreScroll(topicId);
    }
    _setupProgressObserver(topicId);
    _addTableScrollHints(document.getElementById('notes-container'));
};

window.loadWrittenNotes = function(topicCode, html) {
    window.NOTE_HTML[topicCode] = html;
    buildSearchIndexForTopic(topicCode, html);
    // Same stale-load guard as loadNotes above - see the comment there.
    if (topicCode !== window._activeTopicId) return;
    document.getElementById('notes-container').innerHTML = _applyDataSaver(html);
    injectVideoTab(topicCode);
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
    let sw = document.getElementById('si-written'); if(sw) sw.classList.add('active');
    let injectedView = document.getElementById('notes-container').querySelector('.view');
    if(injectedView) injectedView.classList.add('active');
    buildTopicSideList(topicCode);
    injectTopicFooterNav(topicCode);
    document.getElementById('content').scrollTo({top:0, behavior:'instant'});
    if(window._pendingScroll){
        var _s=window._pendingScroll; window._pendingScroll=null;
        setTimeout(function(){
            var el=document.getElementById(_s);
            if(el){var c=document.getElementById('content');c.scrollTo({top:Math.max(0,el.offsetTop-70),behavior:'smooth'});}
        },200);
    } else {
        _restoreScroll(topicCode);
    }
    _setupProgressObserver(topicCode);
    _addTableScrollHints(document.getElementById('notes-container'));
};

window.fetchTopicData = function(topicId, topicKey) {
    window._activeTopicId = topicId;

    if (!window.NOTE_HTML[topicId]) {
        let pathStr = topicId.startsWith('W') ? '../data/Written/notes/' : '../data/Orals/notes/';
        let spinnerC = document.getElementById('notes-container');
        if (spinnerC) spinnerC.innerHTML = '<div class="content-spinner"><div class="ring"></div><div>Loading topic…</div></div>';
        window._loadEncryptedScript(pathStr + topicId.toLowerCase() + '_notes.js').catch(function() {
            var c = document.getElementById('notes-container');
            if (c) c.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text2)">Could not load notes. Please check your connection.</div>';
        });
    } else {
        document.getElementById('notes-container').innerHTML = _applyDataSaver(window.NOTE_HTML[topicId]);
        injectVideoTab(topicId);
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
        let sNav = document.getElementById(topicId.startsWith('W') ? 'si-written' : 'si-oral'); if(sNav) sNav.classList.add('active');
        let injectedView = document.getElementById('notes-container').querySelector('.view');
        if(injectedView) injectedView.classList.add('active');
        buildTopicSideList(topicId);
        injectTopicFooterNav(topicId);
        document.getElementById('content').scrollTo({top:0, behavior:'instant'});
        if(window._pendingScroll){
            var _s=window._pendingScroll; window._pendingScroll=null;
            setTimeout(function(){
                var el=document.getElementById(_s);
                if(el){var c=document.getElementById('content');c.scrollTo({top:Math.max(0,el.offsetTop-70),behavior:'smooth'});}
            },200);
        } else {
            _restoreScroll(topicId);
        }
        _setupProgressObserver(topicId);
    _addTableScrollHints(document.getElementById('notes-container'));
    }

    if (!window.QD[topicKey] && !topicId.startsWith('W')) {
        window._loadEncryptedScript('../data/Orals/quizzes/' + topicId.toLowerCase() + '_quiz.js').catch(function(){});
    }

    if (!topicId.startsWith('W') && !window.VIDEO_DATA[topicId]) {
        window._loadEncryptedScript('../data/Orals/videos/' + topicId.toLowerCase() + '_videos.js').catch(function(){});
    }
    
    // URL Routing
    if (!window._isRouting) {
        try { if (window.location.protocol !== 'file:') window.history.pushState(null, '', '#notes=' + topicId); } catch(e) {}
    }
};

// Build scrollable dimmed topic list in sidebar
function buildTopicSideList(activeId) {
    var panel = document.getElementById('topic-side-list');
    if (!panel) return;
    panel.style.display = 'block';
    panel.innerHTML = '';
    var activeBtn = null;
    var isW = activeId.startsWith('W');
    var arr = isW ? WRITTEN_TOPICS : TOPICS;
    arr.forEach(function(t, idx) {
        if (isW && !t.notesReady) return;
        var prefix = isW ? 'W' : 'T';
        var btn = document.createElement('button');
        btn.className = 'tl-item' + (t.id === activeId ? ' tl-active' : '');
        btn.setAttribute('data-id', t.id);
        var _prog = Math.round((window._topicProgress[t.id] || 0) * 100);
        btn.innerHTML = '<span class="tl-ic">' + t.icon + '</span>'
            + '<span class="tl-label">' + t.name + '</span>'
            + '<span class="tl-num">' + prefix + String(idx+1).padStart(2,'0') + '</span>'
            + '<div class="tl-prog-wrap"><div class="tl-prog" style="width:' + _prog + '%"></div></div>';
        btn.onclick = function() {
            document.getElementById('content').scrollTo({top:0, behavior:'instant'});
            window.fetchTopicData(t.id, t.key);
        };
        panel.appendChild(btn);
        if (t.id === activeId) activeBtn = btn;
    });
    if (activeBtn) {
        setTimeout(function() { activeBtn.scrollIntoView({block:'nearest', behavior:'smooth'}); }, 150);
    }
}

var NUM_TABS = [
    { id: 'num-freq', icon: '📊', name: 'By Frequency' },
    { id: 'num-cat',  icon: '🏷️', name: 'By Category' },
    { id: 'num-year', icon: '📅', name: 'By Year' },
];

function buildNumericalsSideList(activeView) {
    var panel = document.getElementById('topic-side-list');
    if (!panel) return;
    panel.style.display = 'block';
    panel.innerHTML = '';
    NUM_TABS.forEach(function(t) {
        var btn = document.createElement('button');
        btn.className = 'tl-item' + (t.id === activeView ? ' tl-active' : '');
        btn.innerHTML = '<span class="tl-ic">' + t.icon + '</span>'
            + '<span class="tl-label">' + t.name + '</span>';
        btn.onclick = function() {
            document.getElementById('content').scrollTo({top:0, behavior:'instant'});
            showView(t.id);
        };
        panel.appendChild(btn);
    });
}


// Inject previous/next footer nav + mobile topic strip
function injectTopicFooterNav(topicId) {
    var isW = topicId.startsWith('W');
    var arr = isW ? WRITTEN_TOPICS : TOPICS;
    var idx = arr.findIndex(function(t) { return t.id === topicId; });
    if (idx < 0) return;
    
    var prev = null, next = null, dispIdx = 0, total = 0;
    
    if (isW) {
        var readyTopics = arr.filter(function(t) { return t.notesReady; });
        total = readyTopics.length;
        var rIdx = readyTopics.findIndex(function(t) { return t.id === topicId; });
        if (rIdx >= 0) {
            dispIdx = rIdx;
            prev = rIdx > 0 ? readyTopics[rIdx-1] : null;
            next = rIdx < readyTopics.length-1 ? readyTopics[rIdx+1] : null;
        }
    } else {
        dispIdx = idx;
        total = arr.length;
        prev = idx > 0 ? arr[idx-1] : null;
        next = idx < arr.length-1 ? arr[idx+1] : null;
    }

    // ── Footer prev/next ──
    var prevHtml = prev
        ? '<button class="tfn-btn tfn-prev" onclick="fetchTopicData(\''+prev.id+'\',\''+prev.key+'\')">'
          + '<span class="tfn-dir">← Previous</span>'
          + '<span class="tfn-name">'+prev.icon+' '+prev.id+' - '+prev.name+'</span>'
          + '</button>'
        : '<button class="tfn-btn tfn-prev disabled"><span class="tfn-dir">← Previous</span><span class="tfn-name">Start of Topics</span></button>';

    var nextHtml = next
        ? '<button class="tfn-btn tfn-next" onclick="fetchTopicData(\''+next.id+'\',\''+next.key+'\')">'
          + '<span class="tfn-dir">Next →</span>'
          + '<span class="tfn-name">'+next.icon+' '+next.id+' - '+next.name+'</span>'
          + '</button>'
        : '<button class="tfn-btn tfn-next disabled"><span class="tfn-dir">Next →</span><span class="tfn-name">End of Topics</span></button>';

    var footerHtml = '<div class="topic-footer-nav">'
        + prevHtml
        + '<span class="tfn-center">'+(dispIdx+1)+' / '+total+'</span>'
        + nextHtml
        + '</div>';

    var noteDoc = document.querySelector('#notes-container .note-doc');
    if (noteDoc) noteDoc.insertAdjacentHTML('beforeend', footerHtml);

    // ── Mobile horizontal topic strip (injected at top of note-doc) ──
    var stripHtml = '<div class="mobile-topic-strip" id="mobile-topic-strip">';
    var prefix = isW ? 'W' : 'T';
    var stripNum = 0;
    arr.forEach(function(t, i) {
        if (isW && !t.notesReady) return;
        stripNum++;
        var label = isW ? stripNum : i + 1;
        stripHtml += '<button class="mts-btn'+(t.id===topicId?' mts-active':'')+'"'
            + ' onclick="document.getElementById(\'content\').scrollTo({top:0,behavior:\'instant\'});fetchTopicData(\''+t.id+'\',\''+t.key+'\')">'
            + t.icon+' '+prefix+String(label).padStart(2,'0')
            + '</button>';
    });
    stripHtml += '</div>';

    if (noteDoc) {
        noteDoc.insertAdjacentHTML('afterbegin', stripHtml);
        // Scroll active strip button into view
        setTimeout(function() {
            var activeBtn = document.querySelector('.mts-btn.mts-active');
            if (activeBtn) activeBtn.scrollIntoView({inline:'center', behavior:'smooth'});
        }, 100);
    }
}

var ACTIVE_TOPIC='T01';
var CAT_NAMES={
  /* T01 - Alternator */
  WP:"Working Principle",EX:"Excitation Systems",BL:"Brushless Alternator",AVR:"AVR & Voltage Regulation",RM:"Residual Magnetism & Flashing",SY:"Synchroscope & Synchronisation",LS:"Parallel & Load Sharing",PR:"Protection & Safeties",MT:"Maintenance & IR Testing",AG:"Air Gap",OS:"Overspeed Trip",BT:"Blackout Test",SOL:"SOLAS & Regulations",FT:"Faults & Troubleshooting",SR:"Slip Rings & Brushes",EM:"Emergency Generator",
  /* T02 - High Voltage */
  HV:"HV System Basics",VCB:"VCB & Circuit Breakers",NER:"Neutral Earthing Resistor",SAF:"HV Safety & Permits",GLV:"HV Gloves & PPE",IR:"IR Testing (HV)",IRM:"Insulation Monitoring",BON:"Bonding & Earthing",SHF:"Shaft Earthing",
  /* T04 - Switchboard */
  ACB:"ACB Construction & Arc Quench",POS:"ACB Positions",OCR:"Overcurrent Relay (IDMT)",RPR:"Reverse Power Relay",UFP:"Under-Frequency Protection",BTB:"Bus Tie Breaker",GSP:"Group Starter Panel",EDG:"Emergency Generator",BAT:"Battery Testing & Types",GMD:"GMDSS Battery (SOLAS)",UPS:"UPS Systems",SHC:"Shore Connection",PRT:"Preferential Trip",MSB:"MSB Safeties",MNT:"ACB Maintenance",

  /* T01 new */
  ADV:"Advanced Topics",BLACK:"Blackout Procedure",BRUSH:"Brushless Alternator",CYBER:"Cybersecurity",DASH:"Panel & Dashboard",EXCIT:"Excitation Systems",IDMT:"IDMT Relay",KVA:"kVA Rating",LOAD:"Load Sharing",MAINT:"Maintenance",PLACE:"Alternator Placement",PRIN:"Working Principle",PROT:"Protection",RESID:"Residual Magnetism",REV:"Review",SAFE:"Safety",SOLAS:"SOLAS Regulations",SURV:"Survey Q&A",SYNC:"Synchronisation",UVMT:"Undervoltage Monitoring",VOLT:"Voltage Regulation",WIND:"Windings",
  /* T02 new */
  ARC:"Arc Flash & Quenching",BAS:"HV Basics",CORONA:"Corona Effect",CT:"Current Transformer",DE:"Diesel Electric",DEAD:"Dead Tank Breaker",GLOV:"HV Gloves & PPE",HVSC:"HV Shore Connection",IRM:"Insulation Monitoring",MEG:"Megger Testing",MULT:"Multiple Topics",NER:"Neutral Earthing Resistor",PT:"Potential Transformer",PTW:"Permit to Work",QA:"Q & A",QUICK:"Quick Reference",RULE:"Rules & Standards",SF6:"SF6 Gas Breaker",SHAFT:"Shaft Earthing",SKIN:"Skin Effect",STREAM:"Topic Stream",TANK:"Tank-Type Breaker",
  /* T03 - Motors */
  AUTO:"Auto-Transformer Start",CII:"CII & Regulations",OLR:"Overload Relay",RMF:"Rotating Magnetic Field",SDCON:"Star-Delta Control",SDMTH:"Star-Delta Method",SLIP:"Slip & Torque",STCUR:"Starting Current",STMET:"Starting Methods",SVFD:"Soft Start & VFD",TRANS:"Transient Analysis",
  /* T04 new */
  BATT:"Battery Systems",DIEL:"Dielectric Testing",DIFF:"Differential Protection",EF:"Earth Fault",EG:"Emergency Generator",ESBLOC:"ESB Location",FIRE:"Fire on MSB",FUSE:"Fuses",INTLK:"Interlocks",ISO:"Isolation",MCC:"Motor Control Centre",PI:"Polarisation Index",PMS:"Power Management System",RATING:"Circuit Ratings",RP:"Reverse Power",SQNA:"Surveyor Q&A",UPS:"UPS Systems",
  /* T06 */
  DP_CELL:"DP Cell",LVL:"Level Measurement",PRESS:"Pressure Measurement",RTD:"RTD Sensor",SPEED:"Speed Measurement",TEMP:"Temperature",THERMISTOR:"Thermistor",THERMOCOUPLE:"Thermocouple",
  /* T07 */
  BOILER:"Boiler Control",CASCADE:"Cascade Control",CONTROL:"Control Systems",DIGITAL:"Digital Systems",LADDER:"Ladder Diagram",LOOP:"Control Loop",PID:"PID Controller",PLC:"PLC Systems",SCADA:"SCADA",TIMERS:"Timers & Counters",VALVES:"Control Valves",
  /* T08 */
  ADC:"ADC / DAC",BJT:"BJT Transistor",DIODE:"Diode",IGBT:"IGBT",IS:"Intrinsic Safety",POWER:"Power Electronics",SMPS:"SMPS",THYRISTOR:"Thyristor",VFD:"Variable Frequency Drive",
  /* T09 */
  BLR:"Boiler",BOW_THRUSTER:"Bow Thruster",BWT:"Ballast Water Treatment",COMP:"Compressor",CRA:"Crane",CRANE:"Crane",DPT:"DP System",DeadShip:"Dead Ship Recovery",GAP:"Air Gap",Governor:"Governor",MAINENGINE:"Main Engine",Motors:"Motors",OMD:"Oil Mist Detector",OWS:"Oily Water Separator",PUR:"Purifier",REF:"Refrigeration",REFRIGERATION:"Refrigeration",SAFETY:"Safety Systems",SAL:"Salinometer",STEERING:"Steering Gear",STG:"Steering Gear",Sensors:"Sensors",UMS:"UMS",VIS:"Viscosity",VISCOTHERM:"Viscotherm",Alarms:"Alarms",
  /* T10 */
  BONDING:"Bonding & Earthing",ICCP:"ICCP System",MGPS:"Marine Growth Prevention",SacAnodes:"Sacrificial Anodes",
  /* T11 */
  CORRECTION:"PF Correction",Droop_Control:"Droop Control",FAULTS:"Faults",HARMONICS:"Harmonics",KVA_RATING:"kVA Rating",LOAD_SHARING:"Load Sharing",LOW_PF:"Low Power Factor",PF_Calculation:"PF Calculation",PF_Correction:"PF Correction",PF_Effects:"PF Effects",PF_Fundamentals:"PF Fundamentals",PF_Theory:"PF Theory",PF_Improvement:"PF Improvement",POWER_TRIANGLE:"Power Triangle",Parallel_Faults:"Parallel Faults",Power_Systems:"Power Systems",REACTIVE_POWER:"Reactive Power",SYNCHRONOUS_CONDENSER:"Synchronous Condenser",SYNCHRONOUS_MOTOR:"Synchronous Motor",
  /* T12 */
  CABLES:"Cables",INSULATION:"Insulation",SYSTEMS:"Cable Systems",TESTING:"Testing",
  /* T13 */
  DOPPLER:"Doppler Log",ECHO_SOUNDER:"Echo Sounder",EPIRB:"EPIRB",GMDSS:"GMDSS",GYROCOMPASS:"Gyrocompass",NAVTEX:"NAVTEX",RADAR:"RADAR",SART:"SART",VDR:"VDR",
  /* T14 */
  CALIB:"Calibration",ECDIS:"ECDIS",GAS:"Gas Detection",GAUGE:"Gauging",OXY:"Oxygen Analysis",TOXIC:"Toxic Gas",
  /* T15 */
  CLASSES:"Fire Classes",CO2_SYS:"CO₂ System",CO2_SYSTEM:"CO₂ System",DETECTORS:"Detectors",EMERGENCIES:"Emergencies",EXTINGUISHERS:"Extinguishers",FIRE_ALARM:"Fire Alarm",FOAM:"Foam Systems",MSB_FIRE:"MSB Fire",PORTABLE:"Portable Equipment",PUMPS:"Fire Pumps",REGULATIONS:"Regulations",SAFETY_REG:"Safety Regulations",SPRINKLER:"Sprinkler",
  /* T16 */
  ELECTRICAL:"Electrical Requirements",EMERGENCY:"Emergency Systems",LIFTING:"Lifting Appliances",
  /* T17 */
  ANNEX_I:"Annex I – Oil",ANNEX_VI:"Annex VI – Air",ODME:"ODME",ORB:"Oil Record Book",SEEMP_CII:"SEEMP & CII",
  /* T18 */
  ISM:"ISM Code",MainEng:"Main Engine Survey",SafEqp:"Safe Equipment",ShorePower:"Shore Power",Survey:"Survey",Trips:"Trips & Protection",
  /* T19 */
  BowThruster:"Bow Thruster",EX_EQUIPMENT:"EX Equipment",ExEquip:"EX Equipment",HazZone:"Hazardous Zones",IGF:"IGF Code",InertGas:"Inert Gas System",PumpRoom:"Pump Room",Static:"Static Electricity",VECS:"VECS",ZONES:"Zone Classification",
  /* T20 */
  BOW:"Bow Construction",COFF:"Cofferdam",CONT:"Continuity",DOCK:"Dry Dock",ESB:"Emergency Switchboard",FATIG:"Fatigue",FRAME:"Frame Structure",FSE:"Free Surface Effect",HULL:"Hull",SEQ:"Sequence",STAB:"Stability",STRUC:"Structure",
  /* T21 */
  DAVI:"Davit",ELEC:"Electrical",ENGI:"Engine",MOB:"Man Overboard",PYRO:"Pyrotechnics",RAFT:"Life Raft",RESC:"Rescue Boat",ROOM:"Muster Station",SCBA:"SCBA",SUIT:"Immersion Suit",TYPE:"Types",UPDA:"Updates",
  /* T22 */
  BLCK:"Blackout",BOIL:"Boiler",CABL:"Cables",COLD:"Cold Work",DIAG:"Diagnostics",DRYD:"Dry Dock",DUTY:"Duties",EMER:"Emergency",ENCL:"Enclosures",FUND:"Fundamentals",IMO:"IMO",SHCK:"Electric Shock",TRBL:"Troubleshooting",WELD:"Welding",WWAY:"Walkways",
  /* T23 */
  BMS:"Battery Management System",CHRG:"Charging",DCSY:"DC Systems",EQUL:"Equalisation",LITH:"Lithium Battery",PRIM:"Primary Cells",RATE:"Battery Rating",SEGR:"Segregation",SGM:"SG Measurement",SOLS:"SOLAS Requirements",SPEC:"Specifications",SRVY:"Survey",VRLA:"VRLA Battery"
,
  PREF:"Preferential Trip",BRUSH:"Brushless Alternator","Cables & Insulation":"Cables & Insulation","Shaft Earthing":"Shaft Earthing"
,
  "4-20mA & HART":"4-20mA & HART",
  "4-20mA Loops":"4-20mA Current Loops",
  "Alarm Systems":"Alarm Systems",
  Amplifier:"Amplifier",
  Analyzers:"Analyzers",
  "Auto vs Double-Wound":"Auto vs Double-Wound",
  "Buchholz Relay":"Buchholz Relay",
  "CT & PT":"CT & PT",
  "CT Knee Point":"CT Knee Point",
  "Cooling & Parallel":"Cooling & Parallel Operation",
  Cycloconverter:"Cycloconverter",
  "DC Supply":"DC Supply",
  "DP Transmitter (Flow & Level)":"DP Transmitter",
  Digital:"Digital Electronics",
  Diode:"Diode",
  "Displacement Sensors":"Displacement Sensors",
  "Flame & Gas Detection":"Flame & Gas Detection",
  "Flyback & Surveyor":"Flyback & Key Questions",
  Formula:"Formulae",
  "Frequency Compatibility":"Frequency Compatibility",
  "Iron & Copper Losses":"Iron & Copper Losses",
  LVDT:"LVDT",
  "Level Sensors":"Level Sensors",
  "MSB Interlock":"MSB Interlock",
  Machines:"Electrical Machines",
  "Megger, IR Test & PI Test":"Megger & IR Testing",
  "Modbus Communication":"Modbus Communication",
  "No-Load vs On-Load":"No-Load vs On-Load Tap",
  "O2, Galvo, Salinometer, Viscotherm":"Special Analyzers",
  OpAmp:"Op-Amp",
  Optocoupler:"Optocoupler",
  "PLC Maintenance":"PLC Maintenance",
  "PLC Noise Protection":"PLC Noise Protection",
  "Pressure Measurement":"Pressure Measurement",
  "Principle & EMF":"Principle & EMF Equation",
  "Proximity Sensors & Encoders":"Proximity Sensors & Encoders",
  Rectifier:"Rectifier",
  "SIPART PS2":"SIPART PS2 Positioner",
  Semiconductors:"Semiconductors",
  "Speed & Position Sensors":"Speed & Position Sensors",
  "Temperature Sensors":"Temperature Sensors",
  Testing:"Component Testing",
  Thyristor:"Thyristor",
  "Transformer Oil":"Transformer Oil",
  Transistor:"Transistor",
  "kVA Rating":"kVA Rating"
};
var CAT_ICONS={WP:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,HV:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,VCB:"🔘",NER:"🔌",MSB:"📦",SAF:"🔐",GLV:"🧤",IR:"🔍",IRM:"📡",BON:"🔗",SHF:"🔩",EX:"🔋",BL:"🔄",AVR:"🎛️",RM:"🔦",SY:"🔁",LS:"⚖️",PR:"🛡️",MT:"🔧",AG:"📐",OS:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></g></svg>`,BT:"⬛",SOL:"📋",FT:"🔍",SR:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/></svg>`,EM:"🔌",ACB:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,POS:"📍",OCR:"⏱️",RPR:"🔄",UFP:"📉",BTB:"🔀",GSP:"🎛️",EDG:"🔋",BAT:"🔋",GMD:"📡",UPS:"🔌",SHC:"🏗️",PRT:"⚖️",MNT:"🔧",
  /* New entries */
  ADV:"🎓",REV:"📝",MAINT:"🔧",SURV:"🔍",SAFE:"⚠️",SAF:"⚠️",SOLAS:"📋",PROT:"🛡️",PREF:"⚖️",PRIN:"⚙️",CYBER:"🔒",DASH:"📊",PTW:"📝",QA:"❓",QUICK:"⚡",RULE:"📏",MULT:"📊",STREAM:"📡",LOAD:"⚖️",KVA:"⚡",VOLT:"⚡",WIND:"🌀",UVMT:"📉",EXCIT:"🔋",IDMT:"⏱️",BLACK:"⬛",PLACE:"📍",RESID:"🔦",
  /* T02 */
  ARC:"⚡",BAS:"📚",CORONA:"💫",CT:"🔌",DE:"🚢",DEAD:"📦",GLOV:"🧤",HVSC:"🏗️",IRM:"📡",MEG:"🔬",NER:"🔌",PT:"🔌",SF6:"💨",SHAFT:"🔩",SKIN:"〰️",TANK:"🗄️",
  /* T03 */
  AUTO:"🔄",CII:"📊",OLR:"🛡️",RMF:"🌀",SDCON:"🎛️",SDMTH:"⚙️",SLIP:"📉",STCUR:"⚡",STMET:"🔄",SVFD:"🎚️",TRANS:"📈",SYNC:"🔁",
  /* T04 */
  BATT:"🔋",DIEL:"🧪",DIFF:"🛡️",EF:"🌍",EG:"🔋",ESBLOC:"📍",FIRE:"🔥",FUSE:"🔌",INTLK:"🔀",ISO:"🔐",MCC:"🎛️",PI:"🔍",PMS:"⚡",RATING:"📊",RP:"🔄",SQNA:"❓",UPS:"🔋",
  /* T05 */
  "Auto vs Double-Wound":"🔄","Buchholz Relay":"🛡️","CT & PT":"🔌","CT Knee Point":"📍","Cooling & Parallel":"❄️","DC Supply":"⚡","Flyback & Surveyor":"🔍","Frequency Compatibility":"📡","Iron & Copper Losses":"⚙️","LVDT":"📏","MSB Interlock":"🔀","No-Load vs On-Load":"⚖️","Principle & EMF":"⚡","Transformer Oil":"🛢️","kVA Rating":"📊",
  /* T06 */
  "4-20mA & HART":"📡","4-20mA Loops":"🔄","Analyzers":"🔬","DP Transmitter (Flow & Level)":"🌊",DP_CELL:"📊","Displacement Sensors":"📏","Flame & Gas Detection":"🔥",LVL:"📊","Level Sensors":"🌊","Modbus Communication":"📡","O2, Galvo, Salinometer, Viscotherm":"🧪",PRESS:"📊","Pressure Measurement":"📊","Proximity Sensors & Encoders":"📡",RTD:"🌡️",SPEED:"🏃","Speed & Position Sensors":"🏃",TEMP:"🌡️",THERMISTOR:"🌡️",THERMOCOUPLE:"🌡️","Temperature Sensors":"🌡️",
  /* T07 */
  "Alarm Systems":"🔔",BOILER:"🔥",CASCADE:"🔄",CONTROL:"🎛️",DIGITAL:"💻",LADDER:"📊",LOOP:"🔄",PID:"⚙️",PLC:"💻","PLC Maintenance":"🔧","PLC Noise Protection":"🛡️",SCADA:"💻","SIPART PS2":"🎛️",TIMERS:"⏱️",VALVES:"🔧",
  /* T08 */
  ADC:"📊","Amplifier":"📢",BJT:"🔌","Cycloconverter":"🔄",DIODE:"🔌","Digital":"💻","Diode":"🔌","Formula":"📐",IGBT:"⚡",IS:"🛡️","Machines":"⚙️","OpAmp":"📢","Optocoupler":"💡",POWER:"⚡","Rectifier":"🔌",SMPS:"⚡","Semiconductors":"💡",THYRISTOR:"⚡","Testing":"🔍","Thyristor":"⚡","Transistor":"🔌",VFD:"🎚️",
  /* T09 */
  Alarms:"🔔",BLR:"🔥",BOW_THRUSTER:"⚓",BWT:"🌊",COMP:"❄️",CRA:"🏗️",CRANE:"🏗️",DPT:"🎛️",DeadShip:"⬛",GAP:"📏",Governor:"⚙️",MAINENGINE:"⚙️",Motors:"⚙️",OMD:"🔍",OWS:"🌊",PUR:"🔧",REF:"❄️",REFRIGERATION:"❄️",SAFETY:"⚠️",SAL:"🌊",STEERING:"🎯",STG:"⚡",Sensors:"📡",UMS:"🖥️",VIS:"👁️",VISCOTHERM:"🌡️",
  /* T10 */
  BONDING:"🔗",ICCP:"⚡",MGPS:"🛡️",SacAnodes:"🔩","Shaft Earthing":"🔩",
  /* T11 */
  CORRECTION:"🔧",Droop_Control:"⚖️",FAULTS:"⚠️",HARMONICS:"〰️",KVA_RATING:"📊",LOAD_SHARING:"⚖️",LOW_PF:"📉",PF_Calculation:"📐",PF_Correction:"🔧",PF_Effects:"📊",PF_Fundamentals:"⚡",PF_Theory:"📚",PF_Improvement:"📈",POWER_TRIANGLE:"📐",Parallel_Faults:"⚠️",Power_Systems:"⚡",REACTIVE_POWER:"🔄",SYNCHRONOUS_CONDENSER:"⚙️",SYNCHRONOUS_MOTOR:"⚙️",
  /* T12 */
  CABLES:"🔗",INSULATION:"🛡️","Megger, IR Test & PI Test":"🔍",SYSTEMS:"⚡",TESTING:"🔍",
  /* T13 */
  DOPPLER:"〰️",ECHO_SOUNDER:"📡",EPIRB:"📡",GMDSS:"📡",GYROCOMPASS:"🧭",NAVTEX:"📡",RADAR:"📡",SART:"📡",VDR:"📹",
  /* T14 */
  CALIB:"📏",ECDIS:"🗺️",GAS:"💨",GAUGE:"📊",OXY:"🧪",TOXIC:"⚠️",
  /* T15 */
  CLASSES:"🔥",CO2_SYS:"💨",CO2_SYSTEM:"💨",DETECTORS:"🔍",EMERGENCIES:"🆘",EXTINGUISHERS:"🧯",FIRE_ALARM:"🔔",FOAM:"🌊",MSB_FIRE:"🔥",PORTABLE:"🧯",PUMPS:"💧",REGULATIONS:"📋",SAFETY_REG:"⚠️",SPRINKLER:"💧",
  /* T16 */
  ELECTRICAL:"⚡",EMERGENCY:"🆘",LIFTING:"🏗️",
  /* T17 */
  ANNEX_I:"🛢️",ANNEX_VI:"💨",ODME:"📡",ORB:"📝",SEEMP_CII:"📊",
  /* T18 */
  ISM:"📋",MainEng:"⚙️",SafEqp:"⚠️",ShorePower:"🏗️",Survey:"🔍",Trips:"🛡️",
  /* T19 */
  BowThruster:"⚓",EX_EQUIPMENT:"🛡️",ExEquip:"🛡️",HazZone:"⚠️",IGF:"💨",InertGas:"💨",PumpRoom:"🛢️",Static:"⚡",VECS:"💨",ZONES:"🗺️",
  /* T20 */
  BOW:"⚓",COFF:"📦",CONT:"🔌",DOCK:"🏗️",ESB:"⚡",FATIG:"⚠️",FRAME:"🏗️",FSE:"⚖️",HULL:"🚢",SEQ:"🔄",STAB:"⚖️",STRUC:"🏗️",
  /* T21 */
  DAVI:"🚤",ELEC:"⚡",ENGI:"⚙️",MOB:"🌊",PYRO:"🔥",RAFT:"🚤",RESC:"🆘",ROOM:"🏠",SCBA:"😷",SUIT:"🦺",TYPE:"📊",UPDA:"📋",
  /* T22 */
  BLCK:"⬛",BOIL:"🔥",CABL:"🔗",COLD:"❄️",DIAG:"🔍",DRYD:"🏗️",DUTY:"📋",EMER:"🆘",ENCL:"📦",FUND:"📚",IMO:"📋",SHCK:"⚡",TRBL:"🔧",WELD:"🔥",WWAY:"🚢",
  /* T23 */
  BMS:"🖥️",CHRG:"🔋",DCSY:"⚡",EQUL:"⚖️",LITH:"🔋",PRIM:"🔋",RATE:"📊",SEGR:"🔒",SGM:"📊",SOLS:"📋",SPEC:"📊",SRVY:"🔍",VRLA:"🔋"
,
  BRUSH:"🔄",
  "Cables & Insulation":"🔗"
};

// ═══ TOPICS MASTER LIST ═══════════════════════════════════════════════════════
var TOPICS = [
  {id:'T01',key:'T01_Alternator',name:'Alternator & Generator',icon:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,notesView:'notes-t01',notesReady:true},
  {id:'T02',key:'T02_HV',name:'High Voltage Systems',icon:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,notesView:'notes-t02',notesReady:true},
  {id:'T03',key:'T03_Motors',name:'Electric Motors',icon:'⚙️',notesView:'notes-t03',notesReady:true},
  {id:'T04',key:'T04_Switchboard',name:'Switchboard & Circuit Breakers',icon:'🎛️',notesView:'notes-t04',notesReady:true},
  {id:'T05',key:'T05_Transformers',name:'Transformers',icon:'🔄',notesView:'notes-t05',notesReady:true},
  {id:'T06',key:'T06_Sensors',name:'Sensors & Instrumentation',icon:'📡',notesView:'notes-t06',notesReady:true},
  {id:'T07',key:'T07_Control_PLC',name:'Control Systems & PLC',icon:'🖥️',notesView:'notes-t07',notesReady:true},
  {id:'T08',key:'T08_Electronics',name:'Electronics',icon:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/></svg>`,notesView:'notes-t08',notesReady:true},
  {id:'T09',key:'T09_ShipMachinery',name:'Ship Machinery',icon:'⚓',notesView:'notes-t09',notesReady:true},
  {id:'T10',key:'T10_ICCP',name:'ICCP & Corrosion',icon:'🛡️',notesView:'notes-t10',notesReady:true},
  {id:'T11',key:'T11_PowerFactor',name:'Power Factor',icon:'📊',notesView:'notes-t11',notesReady:true},
  {id:'T12',key:'T12_Cables',name:'Cables & Wiring',icon:'🔗',notesView:'notes-t12',notesReady:true},
  {id:'T13',key:'T13_BridgeEquip1',name:'Bridge Equipment I',icon:'🧭',notesView:'notes-t13',notesReady:true},
  {id:'T14',key:'T14_BridgeEquip2',name:'Bridge Equipment II',icon:'🧭',notesView:'notes-t14',notesReady:true},
  {id:'T15',key:'T15_FireFighting',name:'Fire Fighting',icon:'🔥',notesView:'notes-t15',notesReady:true},
  {id:'T16',key:'T16_SOLAS',name:'SOLAS',icon:'📋',notesView:'notes-t16',notesReady:true},
  {id:'T17',key:'T17_MARPOL',name:'MARPOL',icon:'🌊',notesView:'notes-t17',notesReady:true},
  {id:'T18',key:'T18_ElecSurvey',name:'Electrical Survey',icon:'🔍',notesView:'notes-t18',notesReady:true},
  {id:'T19',key:'T19_Tanker',name:'Tanker Electrics',icon:'🛢️',notesView:'notes-t19',notesReady:true},
  {id:'T20',key:'T20_Construction',name:'Construction',icon:'🏗️',notesView:'notes-t20',notesReady:true},
  {id:'T21',key:'T21_LSA',name:'LSA / Safety',icon:'🆘',notesView:'notes-t21',notesReady:true},
  {id:'T22',key:'T22_Practical',name:'Practical Skills',icon:'🔧',notesView:'notes-t22',notesReady:true},
  {id:'T23',key:'T23_BatteriesDC',name:'Batteries & DC Systems',icon:'🔋',notesView:'notes-t23',notesReady:true},
];

var WRITTEN_TOPICS = [
  {id:'W01',key:'W01_Written',name:'Electrical Topics',icon:'⚡',notesView:'notes-w01',notesReady:true},
  {id:'W02',key:'W02_Written',name:'Section II Theory',icon:'⚙️',notesView:'notes-w02',notesReady:true},
  {id:'W03',key:'W03_Written',name:'ISM Code Full Notes',icon:'📋',notesView:'notes-w03',notesReady:true},
  {id:'W04',key:'W04_Written',name:'SOLAS Full Notes',icon:'🚢',notesView:'notes-w04',notesReady:true},
  {id:'W05',key:'W05_Written',name:'MLC 2006 Full Notes',icon:'⚓',notesView:'notes-w05',notesReady:true},
  {id:'W06',key:'W06_Written',name:'MARPOL Full Notes',icon:'📝',notesView:'notes-w06',notesReady:true},
  {id:'W07',key:'W07_Written',name:'Fire Safety & Fighting',icon:'🔥',notesView:'notes-w07',notesReady:true},
  {id:'W08',key:'W08_Written',name:'Numerical Theory',icon:'🧮',notesView:'notes-w08',notesReady:true},
];

function buildNotesTopicGrid(){
  var g=document.getElementById('notes-topic-grid');
  if(!g)return; g.innerHTML='';
  TOPICS.forEach(function(t){
    var btn=document.createElement('button');
    btn.className='qcat-btn'+(t.notesReady?'':' disabled-topic');
    if(!t.notesReady) btn.style.opacity='0.4';
    var qs=QD&&QD[t.key]?QD[t.key].length:0;
    var rp=Math.round((window._topicProgress[t.id]||0)*100);
    var rpCol=rp>=100?'var(--green)':'var(--blue)';
    var rpLabel=!t.notesReady?'Coming soon':rp===0?'Not started yet':rp===100?'Completed':rp+'% read';
    btn.innerHTML='<div class="cat-name">'+t.icon+' '+t.id+' - '+t.name+'</div>'
      +'<div class="cat-count">'+rpLabel+(qs?' · '+qs+' quiz questions':'')+'</div>'
      +'<div class="cat-bar"><div class="cat-fill" style="width:'+rp+'%;background:'+rpCol+'"></div></div>';
    if(t.notesReady && t.notesView){
      btn.onclick=function(){window.fetchTopicData(t.id, t.key);};
      btn.style.cursor='pointer';
    } else {
      btn.disabled=true;
    }
    g.appendChild(btn);
  });
}

function buildWrittenTopicGrid(){
  var g=document.getElementById('written-topic-grid');
  if(!g)return; g.innerHTML='';
  WRITTEN_TOPICS.forEach(function(t){
    var btn=document.createElement('button');
    btn.className='qcat-btn'+(t.notesReady?'':' disabled-topic');
    if(!t.notesReady) btn.style.opacity='0.4';
    var rp=Math.round((window._topicProgress[t.id]||0)*100);
    var rpCol=rp>=100?'var(--green)':'var(--blue)';
    var rpLabel=!t.notesReady?'Coming soon':rp===0?'Not started yet':rp===100?'Completed':rp+'% read';
    btn.innerHTML='<div class="cat-name">'+t.icon+' '+t.id+' - '+t.name+'</div>'
      +'<div class="cat-count">'+rpLabel+'</div>'
      +'<div class="cat-bar"><div class="cat-fill" style="width:'+rp+'%;background:'+rpCol+'"></div></div>';
    if(t.notesReady && t.notesView){
      btn.onclick=function(){window.fetchTopicData(t.id, t.key);};
      btn.style.cursor='pointer';
    } else {
      btn.disabled=true;
    }
    g.appendChild(btn);
  });
}

function buildQuizTopicGrid(){
  var g=document.getElementById('quiz-topic-grid');
  if(!g)return; g.innerHTML='';
  TOPICS.forEach(function(t){
    if(!t.notesReady) return;
    var qCount=QD&&QD[t.key]?QD[t.key].length:null;
    var prog=getProgress(t.id);
    var progCol=prog>=80?'var(--green)':prog>=50?'var(--orange)':'var(--blue)';
    var btn=document.createElement('button');
    btn.className='qcat-btn';
    btn.id='qtg-'+t.id;
    btn.innerHTML='<div class="cat-name">'+t.icon+' '+t.id+' - '+t.name+'</div>'
      +'<div class="cat-count" id="qtgc-'+t.id+'">'+(qCount?qCount+' questions':'Loading...')+'</div>'
      +'<div class="cat-bar"><div class="cat-fill" id="qtgp-'+t.id+'" style="width:'+prog+'%;background:'+progCol+'"></div></div>';
    btn.onclick=function(){ goToQuizFromNotes(t.id); };
    g.appendChild(btn);
    // Lazy-load quiz data to show real count
    if(!qCount){
      window._loadEncryptedScript('../data/Orals/quizzes/'+t.id.toLowerCase()+'_quiz.js').then(function(){
        var el=document.getElementById('qtgc-'+t.id);
        if(el&&QD&&QD[t.key])el.textContent=QD[t.key].length+' questions';
      }).catch(function(){});
    }
  });
}

function goToQuizFromNotes(topicId){
  var t = TOPICS.find(function(x){return x.id === topicId});
  if(!t) return;
  ACTIVE_TOPIC=t.id;
  document.getElementById('quiz-topic-label').textContent=t.id+' - '+t.name;
  
  var tNum = parseInt(t.id.substring(1), 10);
  var qh2 = document.getElementById('quiz-topic-h2');
  if (qh2) qh2.textContent = 'Topic ' + tNum + ' - ' + t.name + ' Quiz';
  if (!window.QD || !window.QD[t.key]) {
      window._loadEncryptedScript('../data/Orals/quizzes/' + t.id.toLowerCase() + '_quiz.js').then(function() {
          buildCatGrid();
          showView('quiz');
      }).catch(function(){});
  } else {
      buildCatGrid();
      showView('quiz');
  }
  
  // URL Routing
  if (!window._isRouting) {
      try { if (window.location.protocol !== 'file:') window.history.pushState(null, '', '#quiz=' + topicId); } catch(e) {}
  }
}

function toggleMobileMenu() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}

function closeMobileMenu() {
  var sb = document.getElementById('sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  if (sb) sb.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function showView(n){
  // Always hide back-to-top on navigation
  var btt=document.getElementById('back-to-top');
  if(btt){btt.style.opacity='0';btt.style.visibility='hidden';}
  if(window.innerWidth <= 768) closeMobileMenu();
  if(n==='welcome' || n==='oral' || n==='written' || n==='notes-picker' || n==='quiz-picker' || n==='quiz' || n==='quiz-bank' || n==='written-notes-picker' || n==='num-landing') {
     // Hide topic sidebar list when leaving notes (num-landing is a picker
     // page like written-notes-picker, not a content page - no sidebar there)
     var tsl = document.getElementById('topic-side-list');
     if (tsl) tsl.style.display = 'none';
  }
  document.querySelectorAll('.view').forEach(function(v){v.classList.remove('active')});
  document.querySelectorAll('.sb-item').forEach(function(b){b.classList.remove('active')});
  var v=document.getElementById('view-'+n);if(v)v.classList.add('active');
  var s=document.getElementById('si-'+n);if(s)s.classList.add('active');
  if(n==='oral'){var so=document.getElementById('si-oral');if(so)so.classList.add('active');}
  if(n==='written-notes-picker' || n.startsWith('num-')){var sw=document.getElementById('si-written');if(sw)sw.classList.add('active');}
  // Inside one of the three Numericals sub-views, show a sidebar that
  // switches between Frequency/Category/Year - not the Written topics list.
  if(n==='num-freq' || n==='num-cat' || n==='num-year') buildNumericalsSideList(n);
  if(n==='notes-picker')buildNotesTopicGrid();
  if(n==='written-notes-picker')buildWrittenTopicGrid();
  if(n==='quiz-picker')buildQuizTopicGrid();
  if(n==='num-freq')loadNumericalsIfNeeded();
  if(n==='num-cat')loadNumericalsByCatIfNeeded();
  if(n==='num-year')loadNumericalsByYearIfNeeded();
  if(n==='quiz') buildCatGrid();
  if(n==='oral' && window.innerWidth <= 768) setTimeout(maybeShowOralHint, 600);
  else dismissOralHint(false);
  
  // URL Routing
  if (!window._isRouting) {
      try {
        if (window.location.protocol !== 'file:') {
            if (n === 'welcome') window.history.pushState(null, '', window.location.pathname);
            else window.history.pushState(null, '', '#' + n);
        }
      } catch(e) {}
  }
}
function jumpTo(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'})}
function buildCatGrid(){
  var tObj = TOPICS.find(function(t) { return t.id === ACTIVE_TOPIC; });
  if(!tObj) return;
  var key = tObj.key;
  var label = tObj.id + ' - ' + tObj.name;
  var qs=(window.QD&&window.QD[key])?window.QD[key]:[];
  var tcount=document.getElementById('total-q-count'); if(tcount)tcount.textContent=qs.length;
  var sbcnt=document.getElementById('sb-qcnt'); if(sbcnt)sbcnt.textContent=qs.length;
  var qh=document.getElementById('quiz-topic-label');if(qh)qh.textContent=label+' Quiz';
  var cats={};qs.forEach(function(q){cats[q.cat]=(cats[q.cat]||0)+1});
  var grid=document.getElementById('qcat-grid');
  if(!grid)return;
  grid.innerHTML='';
  var topicProg=getProgress(ACTIVE_TOPIC);
  var topicProgCol=topicProg>=80?'var(--green)':topicProg>=50?'var(--orange)':'var(--blue)';
  var ab=document.createElement('button');ab.className='qcat-btn all-btn';
  ab.innerHTML='<div class="cat-name">🎲 All Categories - Mixed</div><div class="cat-count">'+qs.length+' questions</div><div class="cat-bar"><div class="cat-fill" style="width:'+topicProg+'%;background:'+topicProgCol+'"></div></div>';
  ab.onclick=function(){
      var catId = 'All Topics';
      var dName = 'All Categories - Mixed';
      var _qk0 = getQuizStateKey(catId);
      var saved = _qk0 ? localStorage.getItem(_qk0) : null;
      if (saved) {
          showCustomConfirm("Resume Quiz", "You have an unfinished quiz in 'All Categories'.", "Resume Quiz", "Start Fresh",
              function(){ startQuiz(catId, dName, qs, _readJSON(saved, null) || undefined); },
              function(){ startQuiz(catId, dName, qs); });
      } else {
          startQuiz(catId, dName, qs);
      }
  };
  grid.appendChild(ab);
  
  var savedP=_readProgress();
  var catScores=(savedP[ACTIVE_TOPIC]&&savedP[ACTIVE_TOPIC].cats)||{};
  Object.keys(cats).forEach(function(cat){
    var n=cats[cat]||0;if(!n)return;
    var btn=document.createElement('button');btn.className='qcat-btn';
    var catProg=catScores[cat]||0;
    
    var activeProg = getActiveQuizCompletion(ACTIVE_TOPIC, cat);
    if (activeProg > catProg) catProg = activeProg;
    
    var catCol=catProg>=80?'var(--green)':catProg>=50?'var(--orange)':'var(--blue)';
    var dName = typeof CAT_NAMES !== 'undefined' && CAT_NAMES[cat] ? CAT_NAMES[cat] : cat;
    var dIcon = typeof CAT_ICONS !== 'undefined' && CAT_ICONS[cat] ? CAT_ICONS[cat] : '📘';
    btn.innerHTML='<div class="cat-name">'+dIcon+'&nbsp;'+dName+'</div><div class="cat-count">'+n+' questions</div><div class="cat-bar"><div class="cat-fill" style="width:'+catProg+'%;background:'+catCol+'"></div></div>';
    btn.onclick=function(){
        var f=qs.filter(function(q){return q.cat===cat});
        var _qk1 = getQuizStateKey(cat);
        var saved = _qk1 ? localStorage.getItem(_qk1) : null;
        if (saved) {
            showCustomConfirm("Resume Quiz", "You have an unfinished quiz in '"+dName+"'.", "Resume Quiz", "Start Fresh",
                function(){ startQuiz(cat, dName, f, _readJSON(saved, null) || undefined); },
                function(){ startQuiz(cat, dName, f); });
        } else {
            startQuiz(cat, dName, f);
        }
    };
    grid.appendChild(btn);
  });
  
  var rst=document.createElement('div');
  rst.style.textAlign='center';
  rst.style.marginTop='20px';
  rst.innerHTML='<button style="background:none;border:none;color:var(--text3);text-decoration:underline;cursor:pointer;font-family:inherit;padding:10px;">Reset Topic Progress</button>';
  rst.onclick=function(){
      showCustomConfirm("Reset Progress", "Are you sure you want to reset all progress and saved quizzes for this topic back to 0%?", "Yes, Reset", "Cancel",
          function(){
              var p = _readProgress();
              delete p[ACTIVE_TOPIC];
              _writeProgress(p);
              for (var i = localStorage.length - 1; i >= 0; i--) {
                  var k = localStorage.key(i);
                  if (k && k.startsWith('eto_qz_state_' + ACTIVE_TOPIC + '_')) {
                      localStorage.removeItem(k);
                  }
              }
              buildCatGrid();
          }, null);
  };
  grid.appendChild(rst);
}

function showCustomConfirm(title, msg, confirmText, cancelText, onConfirm, onCancel) {
  var overlay = document.createElement('div');
  overlay.className = 'custom-modal-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0'; overlay.style.left = '0'; overlay.style.width = '100%'; overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
  overlay.style.backdropFilter = 'blur(4px)';
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.2s';
  
  var modal = document.createElement('div');
  modal.className = 'custom-modal';
  modal.style.backgroundColor = 'var(--surface)';
  modal.style.border = '1px solid var(--border)';
  modal.style.borderRadius = '12px';
  modal.style.padding = '24px';
  modal.style.width = '90%';
  modal.style.maxWidth = '400px';
  modal.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
  modal.style.transform = 'translateY(20px)';
  modal.style.transition = 'transform 0.2s';
  
  var h = document.createElement('h3');
  h.style.marginTop = '0';
  h.style.color = 'var(--text)';
  h.style.fontSize = '18px';
  h.textContent = title;
  
  var p = document.createElement('p');
  p.style.color = 'var(--text2)';
  p.style.fontSize = '14px';
  p.style.marginBottom = '24px';
  p.style.lineHeight = '1.5';
  p.textContent = msg;
  
  var btnBox = document.createElement('div');
  btnBox.style.display = 'flex';
  btnBox.style.flexDirection = 'column';
  btnBox.style.gap = '10px';
  
  var confirmBtn = document.createElement('button');
  confirmBtn.className = 'btn btn-green';
  confirmBtn.textContent = confirmText;
  confirmBtn.onclick = function() { close(); if(onConfirm) onConfirm(); };
  
  var cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn btn-ghost';
  if (cancelText === 'Start Fresh') {
      cancelBtn.style.color = 'var(--orange)';
      cancelBtn.style.borderColor = 'var(--orange)';
  }
  cancelBtn.textContent = cancelText;
  cancelBtn.onclick = function() { close(); if(onCancel) onCancel(); };
  
  var xBtn = document.createElement('button');
  xBtn.innerHTML = '×';
  xBtn.style.position = 'absolute';
  xBtn.style.top = '12px'; xBtn.style.right = '16px';
  xBtn.style.background = 'none'; xBtn.style.border = 'none';
  xBtn.style.color = 'var(--text3)'; xBtn.style.fontSize = '24px';
  xBtn.style.cursor = 'pointer';
  xBtn.onclick = close;
  
  btnBox.appendChild(confirmBtn);
  btnBox.appendChild(cancelBtn);
  
  modal.appendChild(xBtn);
  modal.appendChild(h);
  modal.appendChild(p);
  modal.appendChild(btnBox);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  setTimeout(function() {
      overlay.style.opacity = '1';
      modal.style.transform = 'translateY(0)';
  }, 10);
  
  function close() {
      overlay.style.opacity = '0';
      modal.style.transform = 'translateY(20px)';
      setTimeout(function() {
          if(overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 200);
  }
}

function getQuizStateKey(catId) {
  if (ACTIVE_TOPIC === 'QUIZ_BANK') return null;
  return 'eto_qz_state_' + ACTIVE_TOPIC + '_' + catId;
}
function saveActiveQuiz() {
  var key = getQuizStateKey(QZ.catId);
  if (key) localStorage.setItem(key, JSON.stringify(QZ));
}
function clearActiveQuiz(catId) {
  var key = getQuizStateKey(catId);
  if (key) localStorage.removeItem(key);
}

var QZ={qs:[],i:0,correct:0,catId:'',catName:'',answered:false,history:[]};
function startQuiz(catId,catName,qs,savedState){
  if (savedState) {
      QZ = savedState;
      if(!QZ.catId) QZ.catId = catId;
      if(!QZ.catName) QZ.catName = catName;
  } else {
      QZ.qs=shuffle(qs.slice());QZ.i=0;QZ.correct=0;QZ.catId=catId;QZ.catName=catName;QZ.answered=false;QZ.history=[];
      clearActiveQuiz(catId);
  }
  document.getElementById('quiz-home').style.display='none';
  document.getElementById('quiz-active').style.display='block';
  renderQ();
}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
var LETTERS=['A','B','C','D'];
function renderQ(){
  var tot=QZ.qs.length;
  if(QZ.i>=tot){showScore();return}
  var q=QZ.qs[QZ.i];QZ.answered=false;
  document.getElementById('qnum').textContent='Q '+(QZ.i+1)+' / '+tot;
  document.getElementById('qfill').style.width=Math.round(QZ.i/tot*100)+'%';
  document.getElementById('qcat-tag').textContent=CAT_NAMES[q.cat]||q.cat||'';
  document.getElementById('qscore').textContent='Score: '+QZ.correct+'/'+QZ.i;
  document.getElementById('qtext').textContent=q.q;
  var opts=shuffle(q.opts.slice());
  QZ.currentShuffledOpts=opts;
  var optsEl=document.getElementById('qopts');optsEl.innerHTML='';
  opts.forEach(function(opt,idx){
    var btn=document.createElement('button');btn.className='qopt';btn.dataset.answer=opt;
    btn.innerHTML='<span class="opt-letter">'+LETTERS[idx]+'</span><span class="opt-text">'+esc(opt)+'</span>';
    btn.addEventListener('click',function(){chooseAnswer(opt,q.a,btn)});
    optsEl.appendChild(btn);
  });
  var expEl=document.getElementById('qexp');expEl.innerHTML=q.exp?'<strong>Explanation:</strong> '+esc(q.exp):'';expEl.classList.remove('show');
  document.getElementById('qhint').textContent='Choose an answer above';
  document.getElementById('nextBtn').style.display='none';
  document.getElementById('prevBtn').style.display=QZ.history.length?'inline-block':'none';
}
function chooseAnswer(chosen,correct,btn){
  if(QZ.answered)return;QZ.answered=true;
  var wasCorrect=(chosen===correct);
  if(wasCorrect)QZ.correct++;
  QZ.history.push({q:QZ.qs[QZ.i],chosen:chosen,correct:wasCorrect,skipped:false,shuffledOpts:QZ.currentShuffledOpts});
  QZ.i++;
  document.querySelectorAll('.qopt').forEach(function(b){
    b.disabled=true;
    if(b.dataset.answer===correct)b.classList.add('correct');
    else if(b===btn&&chosen!==correct)b.classList.add('wrong');
  });
  document.getElementById('qhint').textContent=wasCorrect?'✓ Correct!':'✗ Incorrect - see explanation';
  document.getElementById('qscore').textContent='Score: '+QZ.correct+'/'+QZ.i;
  document.getElementById('qexp').classList.add('show');
  document.getElementById('nextBtn').style.display='inline-block';
  document.getElementById('prevBtn').style.display='inline-block';
  saveActiveQuiz();
}
function skipQ(){
  QZ.history.push({q:QZ.qs[QZ.i],chosen:null,correct:false,skipped:true,shuffledOpts:QZ.currentShuffledOpts});
  QZ.i++;renderQ();
  saveActiveQuiz();
}
function prevQ(){
  if(!QZ.history.length)return;
  var prev=QZ.history.pop();
  // Always decrement QZ.i - both answered and skipped questions incremented it
  if(QZ.i>0)QZ.i--;
  // Undo score only if the popped answer was a correct answered question
  if(prev.chosen&&prev.correct){QZ.correct--;}
  var q=prev.q;
  QZ.answered=true;
  document.getElementById('qnum').textContent='Q '+(QZ.i+1)+' / '+QZ.qs.length;
  document.getElementById('qfill').style.width=Math.round(QZ.i/QZ.qs.length*100)+'%';
  document.getElementById('qcat-tag').textContent=typeof CAT_NAMES!=='undefined'&&CAT_NAMES[q.cat]?CAT_NAMES[q.cat]:q.cat||'';
  document.getElementById('qscore').textContent='Score: '+QZ.correct+'/'+(QZ.i);
  document.getElementById('qtext').textContent=q.q;
  var opts=prev.shuffledOpts||q.opts;
  var optsEl=document.getElementById('qopts');optsEl.innerHTML='';
  var LETTERS=['A','B','C','D'];
  opts.forEach(function(opt,idx){
    var btn=document.createElement('button');btn.className='qopt';btn.disabled=true;btn.dataset.answer=opt;
    btn.innerHTML='<span class="opt-letter">'+LETTERS[idx]+'</span><span class="opt-text">'+esc(opt)+'</span>';
    if(opt===q.a)btn.classList.add('correct');
    else if(prev.chosen&&opt===prev.chosen&&prev.chosen!==q.a)btn.classList.add('wrong');
    optsEl.appendChild(btn);
  });
  var expEl=document.getElementById('qexp');
  expEl.innerHTML=q.exp?'<strong>Explanation:</strong> '+esc(q.exp):'';
  expEl.classList.add('show');
  document.getElementById('qhint').textContent=prev.skipped?'Skipped':(prev.correct?'✓ Correct':'✗ Incorrect');
  document.getElementById('nextBtn').style.display='inline-block';
  document.getElementById('prevBtn').style.display=QZ.history.length?'inline-block':'none';
  saveActiveQuiz();
}
function nextQ(){renderQ()}
function exitQuiz(){
  if(ACTIVE_TOPIC === 'QUIZ_BANK'){
    showView('quiz-bank');
  } else {
    document.getElementById('quiz-home').style.display='block';
    document.getElementById('quiz-active').style.display='none';
  }
}
// Progress logic

// One corrupt localStorage value used to throw straight out of buildCatGrid /
// getProgress and leave the quiz picker permanently broken for that user, with
// no way back short of clearing site data. Parse defensively instead: a
// unreadable value is treated as "no progress yet" and overwritten on the next
// save, which is recoverable. Anything non-object (a stray string/number) is
// rejected too, since callers immediately index into it.
function _readJSON(raw, fallback) {
  if (!raw) return fallback;
  try {
    var v = JSON.parse(raw);
    if (!v || typeof v !== 'object') return fallback;
    return v;
  } catch (e) { return fallback; }
}

function _readProgress() {
  try { return _readJSON(localStorage.getItem('eto_progress'), {}); }
  catch (e) { return {}; }   // localStorage itself can throw (Safari private mode)
}

function _writeProgress(p) {
  try { localStorage.setItem('eto_progress', JSON.stringify(p)); } catch (e) {}
}

function saveProgress(topic, cat, score, total) {
  var p = _readProgress();
  if(!p[topic]) p[topic] = {cats:{}, best:0};
  
  // Do not record "All Topics" standalone quizzes in the individual category progress
  if (cat !== 'All Topics' && cat !== 'All Categories - Mixed') {
      var pct = Math.round(score/total*100);
      if(!p[topic].cats[cat] || p[topic].cats[cat] < pct) {
        p[topic].cats[cat] = pct;
      }
  }
  
  // Robust cleanup of historical bug data
  var rev = {};
  if (typeof CAT_NAMES !== 'undefined') {
      Object.keys(CAT_NAMES).forEach(function(k) { rev[CAT_NAMES[k]] = k; });
  }
  
  var t = TOPICS.find(function(x) { return x.id === topic; });
  var validCatCount = 1; 
  if (t && window.QD && window.QD[t.key]) {
      var cMap = {};
      window.QD[t.key].forEach(function(q) { cMap[q.cat || 'Uncategorized'] = true; });
      validCatCount = Object.keys(cMap).length;
      
      // Migrate bad display-name keys to true IDs, and remove mixed keys
      Object.keys(p[topic].cats).forEach(function(k) {
          if (k === 'All Topics' || k === 'All Categories - Mixed') {
              delete p[topic].cats[k];
          } else if (!cMap[k]) {
              if (rev[k] && cMap[rev[k]]) {
                  var oldScore = p[topic].cats[k];
                  var newId = rev[k];
                  if (!p[topic].cats[newId] || p[topic].cats[newId] < oldScore) p[topic].cats[newId] = oldScore;
              }
              delete p[topic].cats[k];
          }
      });
  }
  
  var sum = 0;
  for(var k in p[topic].cats) {
      if (k !== 'All Topics' && k !== 'All Categories - Mixed') sum += p[topic].cats[k];
  }
  
  p[topic].best = Math.round(sum / validCatCount);
  _writeProgress(p);
}

function getActiveQuizCompletion(topic, cat) {
    var key = 'eto_qz_state_' + topic + '_' + cat;
    var saved = localStorage.getItem(key);
    if (saved) {
        try {
            var st = JSON.parse(saved);
            if (st && st.qs && st.qs.length) {
                return Math.round((st.i / st.qs.length) * 100);
            }
        } catch(e){}
    }
    return 0;
}

function getProgress(topic) {
  var p = _readProgress();
  var pData = p[topic] || {cats:{}, best:0};
  
  var changed = false;
  var rev = {};
  if (typeof CAT_NAMES !== 'undefined') {
      Object.keys(CAT_NAMES).forEach(function(k) { rev[CAT_NAMES[k]] = k; });
  }
  
  if (pData.cats) {
      Object.keys(pData.cats).forEach(function(k) {
          if (k === 'All Topics' || k === 'All Categories - Mixed') {
              delete pData.cats[k];
              changed = true;
          } else if (rev[k]) {
              var oldScore = pData.cats[k];
              var newId = rev[k];
              if (!pData.cats[newId] || pData.cats[newId] < oldScore) pData.cats[newId] = oldScore;
              delete pData.cats[k];
              changed = true;
          }
      });
  }
  
  var t = TOPICS.find(function(x) { return x.id === topic; });
  var trueTopicPct = pData.best || 0;
  
  if (t && window.QD && window.QD[t.key]) {
      var cMap = {};
      window.QD[t.key].forEach(function(q) { 
          var c = q.cat || 'Uncategorized';
          cMap[c] = (cMap[c] || 0) + 1;
      });
      
      var totalTopicQs = 0;
      var totalCompletedQs = 0;
      
      Object.keys(cMap).forEach(function(cat) {
          var catTotal = cMap[cat];
          totalTopicQs += catTotal;
          
          if (pData.cats[cat] === undefined && !cMap[cat]) {
              delete pData.cats[cat]; changed = true;
          }
          
          var catPct = pData.cats[cat] || 0;
          var activePct = getActiveQuizCompletion(topic, cat);
          if (activePct > catPct) catPct = activePct;
          
          totalCompletedQs += Math.round((catPct / 100) * catTotal);
      });
      
      trueTopicPct = totalTopicQs > 0 ? Math.round((totalCompletedQs / totalTopicQs) * 100) : 0;
      
      var mixedActive = getActiveQuizCompletion(topic, 'All Topics');
      if (mixedActive > trueTopicPct) trueTopicPct = mixedActive;
      
      if (pData.best !== trueTopicPct) {
          pData.best = trueTopicPct;
          changed = true;
      }
  }
  
  if (changed) {
      p[topic] = pData;
      _writeProgress(p);
  }
  
  return trueTopicPct;
}
function showScore(){
  var tot=QZ.qs.length,pct=tot?Math.round(QZ.correct/tot*100):0;
  saveProgress(ACTIVE_TOPIC, QZ.catId, QZ.correct, tot);
  clearActiveQuiz(QZ.catId);
  
  var updBar=document.getElementById('qtgp-'+ACTIVE_TOPIC);
  if(updBar){
      var np=getProgress(ACTIVE_TOPIC);
      var nc=np>=80?'var(--green)':np>=50?'var(--orange)':'var(--blue)';
      updBar.style.width=np+'%';
      updBar.style.background=nc;
  }
  
  var tier = pct >= 90 ? 'perfect' : pct >= 60 ? 'good' : 'bad';
  var hColor = tier === 'perfect' ? '#FFD700' : tier === 'good' ? 'var(--green)' : 'var(--orange)';
  var ill = tier === 'perfect' ? '🏆' : tier === 'good' ? '🚀' : '💪';
  var hText = tier === 'perfect' ? 'Flawless!' : tier === 'good' ? 'Great Job!' : "Don't Give Up!";
  var sText = tier === 'perfect' ? 'You crushed every single question!' : tier === 'good' ? 'You are making steady progress.' : 'Mistakes are proof that you are trying.';
  
  // Buttons carry an action name only - the quiz identity is read straight off
  // QZ when the click happens, never round-tripped through an HTML attribute.
  // It used to be interpolated via esc(), which escapes <, >, & and ' but NOT
  // double quotes. Quiz Bank sets catName to an HTML label containing
  // `class="svg-ic"`, so that quote terminated the onclick attribute early and
  // left Try Again dead on every Quiz Bank result screen.
  var btnHtml = '';
  if (tier === 'bad') {
    btnHtml = '<button class="duo-btn duo-btn-primary needs-practice" data-act="retry">Try Again</button>' +
              '<button class="duo-btn duo-btn-secondary" data-act="exit">Categories</button>';
  } else {
    btnHtml = '<button class="duo-btn duo-btn-primary" data-act="exit">Continue</button>' +
              '<button class="duo-btn duo-btn-secondary" data-act="retry">Try Again</button>';
  }
  
  var html = '<div class="duo-score-container">' +
    '<div class="duo-score-ill">' + ill + '</div>' +
    '<div class="duo-score-header">' +
      '<h2 style="color:' + hColor + '">' + hText + '</h2>' +
      '<p>' + sText + '</p>' +
    '</div>' +
    '<div class="duo-score-stats">' +
      '<div class="duo-score-stat-box" style="border-color:var(--green)">' +
        '<div class="n" style="color:var(--green)">' + QZ.correct + '</div><div class="l">Correct</div>' +
      '</div>' +
      '<div class="duo-score-stat-box" style="border-color:' + (tier === 'perfect' ? 'var(--border)' : 'var(--orange)') + '">' +
        '<div class="n" style="color:var(--orange)">' + (tot - QZ.correct) + '</div><div class="l">Missed</div>' +
      '</div>' +
      '<div class="duo-score-stat-box" style="border-color:var(--blue)">' +
        '<div class="n" style="color:var(--blue)">' + pct + '%</div><div class="l">Score</div>' +
      '</div>' +
    '</div>' +
    '<div class="duo-score-actions">' + btnHtml + '</div>' +
  '</div>';
  
  var host = document.getElementById('quiz-active');
  host.innerHTML = html;
  host.querySelectorAll('[data-act]').forEach(function(b) {
    b.addEventListener('click', function() {
      if (b.getAttribute('data-act') === 'retry') startQuiz(QZ.catId, QZ.catName, QZ.qs);
      else exitQuiz();
    });
  });
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;')}


buildCatGrid();

// ═══════════════════════════════════════════════════════
// QUIZ BANK
// ═══════════════════════════════════════════════════════

// Full category name lookup - covers all short codes used across 23 topics
var QB_CAT_NAMES = {
  // T01 Alternator
  WP:'Working Principle',BL:'Brushless Alternator',PR:'Protection & Safeties',AVR:'AVR (Voltage Regulator)',
  SY:'Synchronisation',MT:'Maintenance & IR Testing',RM:'Residual Magnetism',SOL:'SOLAS Regulations',
  LS:'Load Sharing',AG:'Air Gap',BT:'Blackout Test',EX:'Excitation Systems',FT:'Faults & Troubleshooting',
  SR:'Slip Rings & Brushes',OS:'Overspeed Trip',EM:'Emergency Generator',CY:'Cybersecurity (IACS)',
  // T02 HV
  HV:'High Voltage Basics',VCB:'Vacuum Circuit Breaker',NER:'Neutral Earthing Resistor',
  SAF:'Safety & Permits',GLV:'HV Gloves & PPE',IR:'Insulation Resistance',IRM:'IR Monitor',
  BON:'Bonding & Earthing',SHF:'Shaft Earthing',
  // T03 Motors
  Principle:'Induction Motor Principle',Slip:'Slip & Synchronous Speed',Start:'Starting Methods',
  VFD:'Variable Frequency Drive',Speed:'Speed Control',Maint:'Motor Maintenance',
  Protect:'Motor Protection',Gap:'Advanced Motor Physics',Sync:'Synchronous Motor',
  Troubleshoot:'Motor Troubleshooting',
  // T04 Switchboard
  ACB:'Air Circuit Breaker',POS:'ACB Positions',OCR:'Overcurrent Relay (IDMT)',RPR:'Reverse Power Relay',
  UFP:'Under-Frequency Protection',BTB:'Bus Tie Breaker',GSP:'Group Starter Panel',
  EDG:'Emergency Generator',BAT:'Battery Testing',GMD:'GMDSS Battery',UPS:'UPS Systems',
  SHC:'Shore Connection',PRT:'Preferential Trip',MNT:'ACB Maintenance',
  // T07 Control/PLC
  PLC:'PLC Basics',LADDER:'Ladder Diagram',PID:'PID Controller',CASCADE:'Cascade Control',
  LOOP:'Control Loops',TIMERS:'Timers & Counters',SCADA:'SCADA & IAS',CONTROL:'Control Theory',
  DIGITAL:'Digital Systems',VALVES:'Valve Positioners',PMS:'Power Management',CYBER:'Cybersecurity',
  // T08 Electronics
  Diode:'Diode Circuits',DIODE:'Diode Circuits',Transistor:'Transistors (BJT)',BJT:'BJT Transistors',
  IGBT:'IGBT & Power Electronics',Thyristor:'Thyristors & SCR',THYRISTOR:'Thyristors & SCR',
  Rectifier:'Rectifiers',POWER:'Power Electronics',ADC:'ADC/DAC Conversion',
  Amplifier:'Op-Amp Circuits',OpAmp:'Op-Amp Circuits',IS:'Intrinsic Safety',Formula:'Key Formulae',
  SMPS:'Switch Mode Power Supply',Optocoupler:'Optocouplers',Digital:'Digital Logic',
  Cycloconverter:'Cycloconverter',
  // T09 Ship Machinery
  OMD:'Oil Mist Detector',VIS:'Viscotherm (Viscosity Control)',DPT:'Dashpot & Governor',
  STG:'Steering Gear',BLR:'Boiler BMS',CRA:'Crane & Winch',BWT:'Ballast Water Treatment',
  PUR:'Purifier',REF:'Refrigeration',SAL:'Salinometer & FWG',GAP:'Advanced Machinery Topics',
  Governor:'Governor & Speed Control',DeadShip:'Dead Ship Recovery',UMS:'UMS Operations',
  MAINENGINE:'Main Engine Safeties',BOILER:'Boiler Alarms',
  // T10 ICCP
  ICCP:'ICCP System',SacAnodes:'Sacrificial Anodes',MGPS:'Marine Growth Prevention',
  BONDING:'Bonding & Earthing (Tanker)',REF:'Reference Electrodes',
  // T11 Power Factor
  PF_Theory:'Power Factor Theory',PF_Calculation:'PF Calculations',PF_Effects:'Effects of Low PF',
  PF_Correction:'PF Correction Methods',Sync_KCL_KVL:'Synchronous Motor & Kirchhoff Laws',
  POWER_TRIANGLE:'Power Triangle',KVA_RATING:'kVA vs kW Rating',LOW_PF:'Low Power Factor Effects',
  CORRECTION:'PF Correction',HARMONICS:'Harmonics',LOAD_SHARING:'Load Sharing (Reactive)',FAULTS:'PF Faults',
  // T12 Cables
  CABLES:'Cable Construction & Selection',INSULATION:'Cable Insulation',TESTING:'Cable Testing',
  SYSTEMS:'Cable Systems & Installation',Cable_Construction:'Cable Construction',
  Cable_Selection:'Cable Selection',Cable_IR_Testing:'Cable IR Testing',
  Cable_Penetrations:'Cable Penetrations',Cable_Faults:'Cable Faults',
  // T13 Bridge Equipment I
  RADAR:'RADAR Systems',GMDSS:'GMDSS',EPIRB:'EPIRB',SART:'SART & AIS-SART',NAVTEX:'NAVTEX',
  // T14 Bridge Equipment II
  TEMP:'Temperature Sensors',PRESS:'Pressure Sensors',SPEED:'Speed Sensors',
  GAS:'Gas Detection & UTI',LVL:'Level Measurement',NAV:'Navigation Systems',
  RTD:'RTD (PT100)',THERMOCOUPLE:'Thermocouple',THERMISTOR:'Thermistor',
  CALIBRATION:'Sensor Calibration',DP_CELL:'DP Cell',DOPPLER:'Doppler Speed Log',
  ECHO_SOUNDER:'Echo Sounder',GYROCOMPASS:'Gyrocompass',VDR:'VDR',
  // T15 Fire Fighting
  CLASSES:'Fire Classes & Tetrahedron',CO2_SYS:'CO2 Systems',DETECTORS:'Fire Detection',
  FIRE_ALARM:'Fire Alarm Panels',FOAM:'Foam Systems',MSB_FIRE:'MSB Fire Safety',
  PORTABLE:'Portable Extinguishers',PUMPS:'Fire Pumps',SAFETY_REG:'Fire Safety Regulations',
  SPRINKLER:'Sprinkler Systems',CO2_SYSTEM:'CO2 System',EXTINGUISHERS:'Extinguishers',
  // T16 SOLAS
  CABLES:'SOLAS Cable Requirements',ELECTRICAL:'SOLAS Electrical',EMERGENCY:'Emergency Power (SOLAS)',
  LIFTING:'Lifting Appliances',SAFETY:'SOLAS Safety',
  // T17 MARPOL
  ANNEX_I:'MARPOL Annex I (Oil)',ANNEX_VI:'MARPOL Annex VI (Air)',ODME:'ODME',ORB:'Oil Record Book',
  SEEMP_CII:'SEEMP & CII',
  // T18 Electrical Survey
  Survey:'Class Survey Procedures',MSB:'MSB Survey',ACB:'ACB Testing & Trips',
  IR:'IR Testing',HV:'HV Survey',ShorePower:'Shore Power Connection',ISM:'ISM Code',PTW:'Permit to Work',
  Trips:'Generator Trips',MainEng:'Main Engine Safeties',SafEqp:'Safety Equipment',
  // T19 Tanker
  ZONES:'Hazardous Zones (IEC)',EX_EQUIPMENT:'Ex Equipment Types',BONDING:'Tanker Bonding',
  MGPS:'MGPS (Tanker)',HazZone:'Hazardous Area Classification',InertGas:'Inert Gas System',
  BowThruster:'Bow Thruster Interlocks',Static:'Static Electricity',PumpRoom:'Pump Room Safety',
  VECS:'VECS Vapour Control',IGF:'IGF Code',ExEquip:'Ex Equipment',BWT:'Ballast Water',
  // T20 Construction
  CONSTRUCTION:'Ship Construction',STABILITY:'Stability & GM/GZ',FRAME:'Frame & Structure',
  Structure:'Structural Elements',ESB:'Emergency Switchboard',Drydock:'Drydock Procedures',
  Container:'Container Ship Safety',
  // T21 LSA
  Lifeboat:'Lifeboat Equipment',Battery:'Lifeboat Battery',BattRoom:'Battery Room Safety',
  Pyro:'Pyrotechnics',LSA2026:'LSA 2026 Amendments',Liferaft:'Life Rafts',LSA:'LSA Regulations',
  Pyrotechnics:'Pyrotechnics & Flares',EEBD_SCBA:'EEBD & SCBA','EEBD/SCBA':'EEBD & SCBA',
  Safety:'LSA Safety',Rescue_Boat:'Rescue Boat',
  // T22 Practical Skills
  ColdIroning:'Cold Ironing (Shore Power)',PTW_SYSTEM:'Permit to Work System',
  WrongWayAlarm:'Wrong Way Alarm',Drydock:'Drydock Procedures',MotorCheck:'Motor Checks',
  Diagnostic:'Electrical Diagnostics',ETODuties:'ETO Duties',COLD_IRONING:'Cold Ironing',
  PTW:'Permits to Work',DRYDOCK:'Drydock',
  // T23 Batteries
  AH:'Ampere-Hour (Ah) Rating',LA:'Lead-Acid Battery',CCA:'Cold Cranking Amps',
  ORD:'Battery Ordering',NI_CD:'NiCd Battery',LEAD_ACID:'Lead-Acid Types',
  CAPACITY:'Battery Capacity Testing',UPS:'UPS Systems',LI_ION:'Lithium-Ion Battery',
  // Surveyor Q&A
  'Surveyor Questions':'Surveyor Q&A (Mixed)',SQ:'Surveyor Q&A'
};

function qbCatName(code) {
  if (QB_CAT_NAMES[code]) return QB_CAT_NAMES[code];
  // Clean up the code for display: replace underscores, title case
  return code.replace(/_/g,' ').replace(/([A-Z])/g,' $1').replace(/^\s/,'').replace(/\s+/g,' ');
}

var QB = {
  section: 'oral',
  topics: {},
  allTopics: true,
  cats: {},
  allCats: true,
  count: 100,
  dropOpen: false
};

var _qbClickHandler = null;
function initQuizBank() {
  QB.topics = {}; QB.allTopics = true; QB.cats = {}; QB.allCats = true;
  QB.count = 100; QB.dropOpen = false;
  document.querySelectorAll('#qb-sections .qb-seg-btn').forEach(function(b){
    b.classList.toggle('active', b.dataset.sec === 'oral');
  });
  document.querySelectorAll('#qb-counts .qb-cnt-btn').forEach(function(b){
    b.classList.toggle('active', parseInt(b.dataset.n) === 100);
  });
  qbBuildDropdown();
  qbEnsureLoaded();
  // Close dropdowns on outside click
  if (!_qbClickHandler) {
    _qbClickHandler = function(e){ 
      if(!e.target.closest('#qb-topic-dropdown')) qbCloseDropdown(); 
      if(!e.target.closest('#qb-cat-dropdown')) qbCloseCatDropdown(); 
    };
    document.addEventListener('click', _qbClickHandler);
  }
}

// ── Category Dropdown ──
var QB_catDropOpen = false;
function qbToggleCatDropdown() {
  QB_catDropOpen ? qbCloseCatDropdown() : qbOpenCatDropdown();
}
function qbOpenCatDropdown() {
  QB_catDropOpen = true;
  document.getElementById('qb-cat-dropdown').querySelector('.qb-dropdown-trigger').classList.add('open');
  document.getElementById('qb-cat-panel').classList.add('open');
  var searchInput = document.getElementById('qb-cat-search');
  if (searchInput) { searchInput.value = ''; qbFilterCats(); searchInput.focus(); }
}
function qbCloseCatDropdown() {
  QB_catDropOpen = false;
  var dropdown = document.getElementById('qb-cat-dropdown');
  if (dropdown) dropdown.querySelector('.qb-dropdown-trigger').classList.remove('open');
  var panel = document.getElementById('qb-cat-panel');
  if (panel) panel.classList.remove('open');
}
function qbFilterCats() {
  var term = document.getElementById('qb-cat-search').value.toLowerCase();
  var items = document.querySelectorAll('.qb-cat-item-row');
  items.forEach(function(item) {
    var txt = item.textContent.toLowerCase();
    item.style.display = txt.indexOf(term) > -1 ? 'flex' : 'none';
  });
}

function qbSetSection(sec) {
  if (sec !== 'oral') return;
  QB.section = sec;
  document.querySelectorAll('#qb-sections .qb-seg-btn').forEach(function(b){
    b.classList.toggle('active', b.dataset.sec === sec);
  });
  qbUpdateCatPills(); qbUpdatePreview();
}

// ── Dropdown ──
function qbToggleDropdown() {
  QB.dropOpen ? qbCloseDropdown() : qbOpenDropdown();
}
function qbOpenDropdown() {
  QB.dropOpen = true;
  document.getElementById('qb-topic-dropdown').querySelector('.qb-dropdown-trigger').classList.add('open');
  document.getElementById('qb-topic-panel').classList.add('open');
}
function qbCloseDropdown() {
  QB.dropOpen = false;
  document.getElementById('qb-topic-dropdown').querySelector('.qb-dropdown-trigger').classList.remove('open');
  document.getElementById('qb-topic-panel').classList.remove('open');
}
function qbBuildDropdown() {
  var panel = document.getElementById('qb-topic-panel');
  panel.innerHTML = '';
  // All Topics row
  var allRow = document.createElement('div');
  allRow.className = 'qb-drop-item qb-drop-all' + (QB.allTopics ? ' checked' : '');
  allRow.innerHTML = '<span class="chk">' + (QB.allTopics ? '✓' : '') + '</span>All 23 Topics';
  allRow.onclick = function(e) {
    e.stopPropagation();
    QB.allTopics = true; QB.topics = {};
    qbBuildDropdown(); qbUpdateSummary(); qbEnsureLoaded(); qbUpdateCatPills(); qbUpdatePreview();
  };
  panel.appendChild(allRow);
  var div = document.createElement('div'); div.className = 'qb-drop-divider'; panel.appendChild(div);
  TOPICS.forEach(function(t) {
    var sel = !QB.allTopics && QB.topics[t.id];
    var row = document.createElement('div');
    row.className = 'qb-drop-item' + (sel ? ' checked' : '');
    row.innerHTML = '<span class="chk">' + (sel ? '✓' : '') + '</span>' + t.icon + ' ' + t.id + ' - ' + t.name;
    row.onclick = function(e) {
      e.stopPropagation();
      QB.allTopics = false;
      QB.topics[t.id] = !QB.topics[t.id];
      if (!Object.values(QB.topics).some(Boolean)) QB.allTopics = true;
      qbBuildDropdown(); qbUpdateSummary(); qbEnsureLoaded(); qbUpdateCatPills(); qbUpdatePreview();
    };
    panel.appendChild(row);
  });
}
function qbUpdateSummary() {
  var el = document.getElementById('qb-topic-summary');
  if (QB.allTopics) { el.textContent = 'All 23 Topics'; return; }
  var sel = TOPICS.filter(function(t){ return QB.topics[t.id]; });
  if (sel.length === 0) { el.textContent = 'All 23 Topics'; QB.allTopics = true; return; }
  if (sel.length <= 3) el.innerHTML = sel.map(function(t){ return t.icon + ' ' + t.id; }).join(', ');
  else el.textContent = sel.length + ' topics selected';
}

function qbEnsureLoaded() {
  var toLoad = QB.allTopics ? TOPICS : TOPICS.filter(function(t){ return QB.topics[t.id]; });
  toLoad.forEach(function(t) {
    if (!window.QD || !window.QD[t.key]) {
      window._loadEncryptedScript('../data/Orals/quizzes/' + t.id.toLowerCase() + '_quiz.js').then(function() { qbUpdateCatPills(); qbUpdatePreview(); }).catch(function(){});
    }
  });
  // If all already loaded, update immediately
  setTimeout(function(){ qbUpdateCatPills(); qbUpdatePreview(); }, 100);
}

function qbGetPool() {
  var pool = [];
  var topics = QB.allTopics ? TOPICS : TOPICS.filter(function(t){ return QB.topics[t.id]; });
  topics.forEach(function(t) {
    var qs = (window.QD && window.QD[t.key]) ? window.QD[t.key] : [];
    pool = pool.concat(qs);
  });
  if (!QB.allCats && Object.keys(QB.cats).length > 0) {
    pool = pool.filter(function(q) { return QB.cats[q.cat]; });
  }
  return pool;
}

function qbUpdateCatPills() {
  var list = document.getElementById('qb-cat-list');
  var summary = document.getElementById('qb-cat-summary');
  var pool = [];
  var topics = QB.allTopics ? TOPICS : TOPICS.filter(function(t){ return QB.topics[t.id]; });
  topics.forEach(function(t) {
    var qs = (window.QD && window.QD[t.key]) ? window.QD[t.key] : [];
    pool = pool.concat(qs);
  });
  if (pool.length === 0) {
    list.innerHTML = '<p style="padding:14px;color:var(--text3)">Loading...</p>';
    summary.textContent = 'Loading...';
    return;
  }
  var catCounts = {};
  pool.forEach(function(q) { catCounts[q.cat] = (catCounts[q.cat] || 0) + 1; });
  var sortedCats = Object.keys(catCounts).sort(function(a,b){ 
    var nameA = qbCatName(a).toLowerCase();
    var nameB = qbCatName(b).toLowerCase();
    return nameA.localeCompare(nameB);
  });
  
  list.innerHTML = '';
  // "All" row
  var allBtn = document.createElement('div');
  allBtn.className = 'qb-drop-item qb-drop-all qb-cat-item-row' + (QB.allCats ? ' checked' : '');
  allBtn.innerHTML = '<span class="chk">' + (QB.allCats ? '✓' : '') + '</span>All Categories';
  allBtn.onclick = function(e) {
    e.stopPropagation();
    QB.allCats = true; QB.cats = {};
    qbUpdateCatPills(); qbUpdatePreview();
  };
  list.appendChild(allBtn);
  var div = document.createElement('div'); div.className = 'qb-drop-divider qb-cat-item-row'; list.appendChild(div);
  
  sortedCats.forEach(function(cat) {
    var btn = document.createElement('div');
    var sel = !QB.allCats && QB.cats[cat];
    btn.className = 'qb-drop-item qb-cat-item-row' + (sel ? ' checked' : '');
    btn.title = cat;
    btn.innerHTML = '<span class="chk">' + (sel ? '✓' : '') + '</span>' + qbCatName(cat) + ' <span style="opacity:0.5;margin-left:auto;font-size:11px">' + catCounts[cat] + '</span>';
    btn.onclick = function(e) {
      e.stopPropagation();
      QB.allCats = false;
      QB.cats[cat] = !QB.cats[cat];
      if (!Object.values(QB.cats).some(Boolean)) { QB.allCats = true; }
      qbUpdateCatPills(); qbUpdatePreview();
    };
    list.appendChild(btn);
  });
  
  // Update Summary Text
  if (QB.allCats) { 
    summary.textContent = 'All Categories'; 
  } else {
    var selNames = Object.keys(QB.cats).filter(function(k){ return QB.cats[k]; }).map(qbCatName);
    if (selNames.length === 0) {
      summary.textContent = 'All Categories'; 
      QB.allCats = true;
    } else if (selNames.length <= 2) {
      summary.textContent = selNames.join(', ');
    } else {
      summary.textContent = selNames.length + ' categories selected';
    }
  }
}

function qbSetCount(n) {
  QB.count = n;
  document.querySelectorAll('#qb-counts .qb-cnt-btn').forEach(function(b){
    b.classList.toggle('active', parseInt(b.dataset.n) === n);
  });
  qbUpdatePreview();
}

function qbUpdatePreview() {
  var pool = qbGetPool();
  var total = pool.length;
  var using = QB.count === 0 ? total : Math.min(QB.count, total);
  var prev = document.getElementById('qb-preview');
  var btn = document.getElementById('qb-start-btn');
  if (total === 0) {
    prev.innerHTML = 'Loading questions from selected topics...';
    btn.disabled = true;
  } else {
    var topicCount = QB.allTopics ? TOPICS.length : Object.values(QB.topics).filter(Boolean).length;
    var catCount = QB.allCats ? 'all categories' : Object.values(QB.cats).filter(Boolean).length + ' categories';
    prev.innerHTML = '<strong>' + using + '</strong> questions &nbsp;·&nbsp; ' + topicCount + ' topic' + (topicCount !== 1 ? 's' : '') + ' &nbsp;·&nbsp; ' + catCount + ' &nbsp;·&nbsp; <span style="color:var(--text3)">' + total + ' in pool</span>';
    btn.disabled = false;
  }
}

function qbStart() {
  var pool = qbGetPool();
  if (!pool.length) { appToast('No questions match your filters. Try selecting more topics or categories.'); return; }
  qbCloseDropdown();
  // Shuffle the full pool first, then take N
  var shuffled = pool.slice();
  for(var i=shuffled.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=shuffled[i];shuffled[i]=shuffled[j];shuffled[j]=tmp;}
  var final = QB.count === 0 ? shuffled : shuffled.slice(0, QB.count);
  var topicCount = QB.allTopics ? TOPICS.length : Object.values(QB.topics).filter(Boolean).length;
  var label = '<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"/></g></svg> Quiz Bank (' + topicCount + ' topic' + (topicCount !== 1 ? 's' : '') + ')';
  ACTIVE_TOPIC = 'QUIZ_BANK';
  document.querySelectorAll('.view').forEach(function(v){ v.classList.remove('active'); });
  document.querySelectorAll('.sb-item').forEach(function(b){ b.classList.remove('active'); });
  document.getElementById('si-quiz-bank').classList.add('active');
  document.getElementById('quiz-topic-label').innerHTML = label;
  document.getElementById('quiz-topic-h2').innerHTML = label;
  startQuiz('All Topics', label, final);
  document.getElementById('view-quiz').classList.add('active');
  document.getElementById('quiz-home').style.display = 'none';
  document.getElementById('quiz-active').style.display = 'block';
}

document.getElementById('content').addEventListener('scroll', function() {
    var self=this;
    if(self._rafScroll) return;
    self._rafScroll=requestAnimationFrame(function(){
        self._rafScroll=null;
        var btn=document.getElementById('back-to-top');
        if(!btn) return;
        // Hysteresis: show at >300, hide at <220 - prevents flicker near threshold
        var st=self.scrollTop;
        if(st>300){btn.style.opacity='1';btn.style.visibility='visible';}
        else if(st<220){btn.style.opacity='0';btn.style.visibility='hidden';}
    });
});

// ═══════════════════════════════════════════════════════
// NOTES SEARCH
// ═══════════════════════════════════════════════════════

function buildSearchIndexForTopic(topicId, html) {
    if (SEARCH_INDEX_BUILT[topicId]) return;
    SEARCH_INDEX_BUILT[topicId] = true;
    var isW = topicId.startsWith('W');
    var topicArr = isW ? WRITTEN_TOPICS : TOPICS;
    var topicObj = topicArr.find(function(t){ return t.id === topicId; });
    var topicName = topicObj ? topicObj.name : topicId;
    try {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var sections = doc.querySelectorAll('[id^="s-"]');
        sections.forEach(function(sec) {
            var heading = sec.textContent.trim().replace(/\s+/g,' ');
            var next = sec.nextElementSibling;
            var snippet = next ? next.textContent.trim().replace(/\s+/g,' ').substring(0,120) : '';
            SEARCH_INDEX.push({
                topicId: topicId,
                topicName: topicName,
                scope: isW ? 'written' : 'oral',
                sectionId: sec.id,
                heading: heading,
                snippet: snippet
            });
        });
    } catch(e){}
    SEARCH_INDEX_DONE++;
}

function _srEscape(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _srHighlight(text, query) {
    var safe = _srEscape(text);
    if (!query) return safe;
    var re = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'gi');
    return safe.replace(re, function(m){ return '<mark class="sr-mark">'+m+'</mark>'; });
}

function searchNotes(query, scope) {
    if (!query || query.trim().length < 2) return [];
    var q = query.trim().toLowerCase();
    var oral = [], written = [];
    for (var i = 0; i < SEARCH_INDEX.length; i++) {
        var item = SEARCH_INDEX[i];
        if (scope && item.scope !== scope) continue;
        var hl = item.heading.toLowerCase().indexOf(q);
        var sl = item.snippet.toLowerCase().indexOf(q);
        if (hl !== -1 || sl !== -1) {
            var r = { item: item, score: hl !== -1 ? 0 : 1 };
            if (item.scope === 'oral') oral.push(r);
            else written.push(r);
        }
    }
    oral.sort(function(a,b){ return a.score - b.score; });
    written.sort(function(a,b){ return a.score - b.score; });
    if (scope) return (oral.length ? oral : written).slice(0, 9);
    // "All" mode - balance oral and written so neither crowds the other out
    var cap = 5;
    var oTop = oral.slice(0, cap);
    var wTop = written.slice(0, cap);
    var spare = 10 - oTop.length - wTop.length;
    if (spare > 0) {
        if (oral.length > cap) oTop = oTop.concat(oral.slice(cap, cap + spare));
        else if (written.length > cap) wTop = wTop.concat(written.slice(cap, cap + spare));
    }
    return oTop.concat(wTop);
}

function searchAndRender(query, scope) {
    var cId = scope === 'oral' ? 'oral-search-results' : 'written-search-results';
    var clrId = scope === 'oral' ? 'oral-search-clear' : 'written-search-clear';
    var container = document.getElementById(cId);
    var clrBtn = document.getElementById(clrId);
    if (!container) return;
    if (clrBtn) clrBtn.style.display = query ? 'flex' : 'none';
    if (!query || query.trim().length < 2) {
        container.style.display = 'none';
        container.innerHTML = '';
        return;
    }
    var results = searchNotes(query, scope);
    var notDone = SEARCH_INDEX_DONE < SEARCH_INDEX_TOTAL;
    if (results.length === 0) {
        container.innerHTML = '<div class="sr-empty">'+(notDone?'Still indexing... try again in a moment':'No results found')+'</div>';
        container.style.display = 'block';
        return;
    }
    var q = query.trim();
    var html = '';
    results.forEach(function(r) {
        var item = r.item;
        html += '<div class="sr-item" onclick="goToSearchResult(\''+item.topicId+'\',\''+item.sectionId+'\')">'
            +'<div class="sr-badge">'+item.topicId+'</div>'
            +'<div class="sr-content">'
            +'<div class="sr-heading">'+_srHighlight(item.heading, q)+'</div>'
            +(item.snippet?'<div class="sr-snippet">'+_srEscape(item.snippet.substring(0,90))+'</div>':'')
            +'</div></div>';
    });
    if (notDone) html += '<div class="sr-indexing">Indexing '+SEARCH_INDEX_DONE+'/'+SEARCH_INDEX_TOTAL+' topics...</div>';
    container.innerHTML = html;
    container.style.display = 'block';
}

function clearSearch(scope) {
    var inpId = scope === 'oral' ? 'oral-search' : 'written-search';
    var inp = document.getElementById(inpId);
    if (inp) { inp.value = ''; inp.focus(); }
    searchAndRender('', scope);
}

function goToSearchResult(topicId, sectionId) {
    // Close all search UIs
    var scope = topicId.startsWith('W') ? 'written' : 'oral';
    clearSearch(scope);
    gSearchClose();
    // Close mobile sidebar
    var sb = document.getElementById('sidebar');
    if (sb) sb.classList.remove('open');
    var sbOv = document.getElementById('sidebar-overlay');
    if (sbOv) sbOv.classList.remove('open');
    window._pendingScroll = sectionId;
    var allTopics = TOPICS.concat(WRITTEN_TOPICS);
    var t = allTopics.find(function(x){ return x.id === topicId; });
    if (t) window.fetchTopicData(t.id, t.key);
}

// ── Global (Sidebar) Search ───────────────────────────────
var _gFilter = 'all';

function setGFilter(f) {
    _gFilter = f;
    var labels = {all:'All ▾', oral:'Oral ▾', written:'Writ ▾'};
    var btn = document.getElementById('gsf-btn');
    if (btn) btn.textContent = labels[f] || 'All ▾';
    var dd = document.getElementById('gsf-dropdown');
    if (dd) dd.style.display = 'none';
    var inp = document.getElementById('gsearch-input');
    if (inp && inp.value.trim().length >= 2) gSearch(inp.value);
}

function gFilterToggle(e) {
    e.stopPropagation();
    var dd = document.getElementById('gsf-dropdown');
    if (dd) dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
}

function gSearch(query) {
    var panel = document.getElementById('gsearch-panel');
    var resultsEl = document.getElementById('gsearch-results');
    if (!panel || !resultsEl) return;
    var dd = document.getElementById('gsf-dropdown');
    if (dd) dd.style.display = 'none';
    if (!query || query.trim().length < 2) {
        panel.style.display = 'none';
        resultsEl.innerHTML = '';
        return;
    }
    var scope = _gFilter === 'all' ? null : _gFilter;
    var results = searchNotes(query, scope);
    var notDone = SEARCH_INDEX_DONE < SEARCH_INDEX_TOTAL;
    var html = '';
    if (results.length === 0) {
        html = '<div class="sr-empty">' + (notDone ? 'Still indexing… try again in a moment' : 'No results found') + '</div>';
    } else {
        var q = query.trim();
        results.forEach(function(r) {
            var item = r.item;
            var scopeLabel = item.scope === 'oral' ? 'Oral' : 'Written';
            html += '<div class="sr-item" onclick="goToSearchResult(\'' + item.topicId + '\',\'' + item.sectionId + '\')">'
                + '<div class="sr-badge">' + item.topicId + '</div>'
                + '<div class="sr-content">'
                + '<div class="sr-heading">' + _srHighlight(item.heading, q) + '</div>'
                + '<div class="sr-meta">' + scopeLabel + ' · ' + _srEscape(item.topicName) + '</div>'
                + '</div></div>';
        });
        if (notDone) html += '<div class="sr-indexing">Indexing ' + SEARCH_INDEX_DONE + '/' + SEARCH_INDEX_TOTAL + ' topics…</div>';
    }
    resultsEl.style.maxHeight = '320px';
    resultsEl.innerHTML = html;
    panel.style.display = 'block';
}

function gSearchClose() {
    var panel = document.getElementById('gsearch-panel');
    if (panel) panel.style.display = 'none';
}

function startBackgroundIndexing() {
    var allIds = [];
    TOPICS.forEach(function(t){ if(t.notesReady) allIds.push(t.id); });
    WRITTEN_TOPICS.forEach(function(t){ if(t.notesReady) allIds.push(t.id); });
    SEARCH_INDEX_TOTAL = allIds.length;
    window._appReady = true;

    window._bgIndexing = true;
    var i = 0;
    function indexNext() {
        if (i >= allIds.length) {
            window._bgIndexing = false;
            return;
        }
        var topicId = allIds[i++];
        if (window.NOTE_HTML && window.NOTE_HTML[topicId]) {
            buildSearchIndexForTopic(topicId, window.NOTE_HTML[topicId]);
            setTimeout(indexNext, 30);
            return;
        }
        var path = topicId.startsWith('W') ? '../data/Written/notes/' : '../data/Orals/notes/';
        window._loadEncryptedScript(path + topicId.toLowerCase() + '_notes.js')
            .then(function() { setTimeout(indexNext, 100); })
            .catch(function() { SEARCH_INDEX_DONE++; SEARCH_INDEX_BUILT[topicId] = true; setTimeout(indexNext, 100); });
    }
    setTimeout(indexNext, 2500);
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('#oral-search-wrap')) {
        var r = document.getElementById('oral-search-results');
        if (r) r.style.display = 'none';
    }
    if (!e.target.closest('#written-search-wrap')) {
        var r2 = document.getElementById('written-search-results');
        if (r2) r2.style.display = 'none';
    }
    if (!e.target.closest('#gsearch-area') && !e.target.closest('#gsearch-panel')) {
        var dd = document.getElementById('gsf-dropdown');
        if (dd) dd.style.display = 'none';
        gSearchClose();
    }
});

// ═══════════════════════════════════════════════════════
// APP GUIDE
// ═══════════════════════════════════════════════════════

var _guideStep = 0;
var _guideActive = false;
var _guideTimer = null;
var _guideResizeTimer = null;

var GUIDE_STEPS = [
    { type: 'slide', id: 'welcome' },
    {
        type: 'spotlight',
        view: 'welcome',
        openSidebar: true,
        target: '#sb-nav-main',
        pad: 6,
        title: 'Your navigation',
        body: 'These three buttons are how you move around the app. Tap Oral Exam Section to start your oral prep, Written Section for regulatory topics, or Quiz Bank for standalone practice.',
        prefer: 'right'
    },
    {
        type: 'spotlight',
        view: 'oral',
        target: '#view-oral .welcome-grid',
        pad: 10,
        title: 'Inside the Oral Section',
        body: 'Three areas inside Oral. Each one is a different way to prepare. Here is what they do:',
        prefer: 'bottom'
    },
    {
        type: 'spotlight',
        view: 'oral',
        target: '#view-oral .welcome-card:first-child',
        pad: 8,
        title: 'Study Notes',
        body: 'Tap any of the 23 topics to open fully formatted notes with tables, diagrams, and step-by-step procedures. Colour-coded and structured for fast revision.',
        prefer: 'bottom'
    },
    {
        type: 'spotlight',
        view: 'oral',
        target: '#view-oral .welcome-card:nth-child(2)',
        pad: 8,
        title: 'Quiz Practice',
        body: 'Drill topic-by-topic with 5,643 questions. Pick a category, answer questions, and get instant feedback with full explanations after every answer.',
        prefer: 'bottom'
    },
    {
        type: 'spotlight',
        view: 'oral',
        target: '.sq-oral-card',
        pad: 8,
        title: 'Surveyor Q&A',
        body: 'Real questions asked by MMD surveyors in actual exams, with model answers. Filter by surveyor name or topic to prepare for exactly who you might be facing.',
        prefer: 'top'
    },
    {
        type: 'spotlight',
        view: 'written',
        target: '#view-written .welcome-card:first-child',
        pad: 8,
        title: 'Written Section',
        body: 'Structured notes and worked examples for ISM, SOLAS, MARPOL, MLC and more. Built to give you clear answers for the written paper without digging through textbooks.',
        prefer: 'bottom'
    },
    {
        type: 'spotlight',
        view: 'welcome',
        openSidebar: true,
        target: '#gsearch-area',
        pad: 6,
        title: 'Search everything',
        body: 'Type any keyword and jump straight to the right topic across all notes. Try "alternator", "earth fault", or "MARPOL". Works across oral and written sections.',
        prefer: 'bottom'
    },
    { type: 'slide', id: 'videos' },
    { type: 'slide', id: 'support' }
];

function startGuide() {
    _guideStep = 0;
    _guideActive = true;
    // Disable will-change on sidebar so guide overlay z-index is respected on iOS Safari
    var sb = document.getElementById('sidebar');
    if (sb) sb.style.willChange = 'auto';
    var ov = document.getElementById('guide-overlay');
    ov.style.display = 'block';
    ov.style.opacity = '0';
    requestAnimationFrame(function() {
        ov.style.transition = 'opacity 0.35s ease';
        ov.style.opacity = '1';
    });
    _guideShowStep(0);
}

function guideNext() {
    _guideStep++;
    if (_guideStep >= GUIDE_STEPS.length) { guideDismiss(true); return; }
    _guideShowStep(_guideStep);
}

function guideDismiss(save) {
    if (save) localStorage.setItem('guide_seen', '1');
    _guideActive = false;
    clearTimeout(_guideTimer);
    var ov = document.getElementById('guide-overlay');
    ov.style.transition = 'opacity 0.3s ease';
    ov.style.opacity = '0';
    setTimeout(function() {
        ov.style.display = 'none';
        ov.style.opacity = '';
        ov.style.transition = '';
        document.getElementById('guide-spotlight').style.display = 'none';
        document.getElementById('guide-tooltip').style.display = 'none';
        document.getElementById('guide-slide-wrap').style.display = 'none';
        var sb = document.getElementById('sidebar');
        if (sb) { sb.style.willChange = ''; sb.style.transform = ''; sb.style.transition = ''; }
        if (window.innerWidth <= 768) closeMobileMenu();
    }, 310);
}

function _guideShowStep(idx) {
    var step = GUIDE_STEPS[idx];
    _guideDots(idx);
    if (step.type === 'slide') _guideSlide(step);
    else _guideSpotlight(step, idx);
}

function _guideSlide(step) {
    document.getElementById('guide-spotlight').style.display = 'none';
    document.getElementById('guide-tooltip').style.display = 'none';
    var wrap = document.getElementById('guide-slide-wrap');
    var card = document.getElementById('guide-slide-card');
    wrap.style.display = 'flex';
    card.innerHTML = step.id === 'welcome' ? _guideWelcomeHTML() : step.id === 'videos' ? _guideVideosHTML() : _guideSupportHTML();
    card.style.opacity = '0';
    card.style.transform = 'scale(0.96) translateY(18px)';
    requestAnimationFrame(function() {
        card.style.transition = 'opacity 0.38s ease, transform 0.42s cubic-bezier(0.34,1.56,0.64,1)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)';
    });
}

function _guideWelcomeHTML() {
    return '<div style="text-align:center">'
        + '<div style="font-size:50px;margin-bottom:18px;filter:drop-shadow(0 4px 18px rgba(168,85,247,0.45))">🎓</div>'
        + '<h2 style="font-size:21px;font-weight:800;color:var(--text);margin-bottom:10px;line-height:1.3">Welcome to Elec-Buddy</h2>'
        + '<p style="font-size:14px;color:var(--text2);line-height:1.65;margin-bottom:28px">Your complete ETO CoC and STCW exam companion. Let\'s take a quick tour so you know exactly how to use this.</p>'
        + '<button class="guide-btn-primary" onclick="guideNext()">Take the tour</button>'
        + '<div style="margin-top:13px"><button class="guide-btn-text" onclick="guideDismiss(true)">Skip for now</button></div>'
        + '</div>';
}

function _guideVideosHTML() {
    return '<div style="text-align:center">'
        + '<div style="font-size:46px;margin-bottom:16px">▶️</div>'
        + '<h2 style="font-size:19px;font-weight:800;color:var(--text);margin-bottom:14px;line-height:1.3">My Videos</h2>'
        + '<div style="text-align:left;display:flex;flex-direction:column;gap:12px;margin-bottom:24px">'
        + '<div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:18px">📄▶️</span><div style="font-size:13px;color:var(--text2);line-height:1.55"><strong style="color:var(--text)">Tab switcher on every topic</strong>: switch between Study Notes and My Videos inside any topic.</div></div>'
        + '<div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:18px">🌐</span><div style="font-size:13px;color:var(--text2);line-height:1.55"><strong style="color:var(--text)">Language filter</strong>: videos are tagged by language. Filter by Malayalam, English, or any language to see only what you need.</div></div>'
        + '<div style="display:flex;gap:12px;align-items:flex-start"><span style="font-size:18px">🎬</span><div style="font-size:13px;color:var(--text2);line-height:1.55"><strong style="color:var(--text)">Inline player with playlist</strong>: tap any video to open it with a playlist sidebar. Switch tracks without closing the player.</div></div>'
        + '</div>'
        + '<button class="guide-btn-primary" onclick="guideNext()">Next</button>'
        + '</div>';
}

function _guideSupportHTML() {
    return '<div style="text-align:center">'
        + '<div style="display:flex;justify-content:center;gap:12px;margin-bottom:26px;flex-wrap:wrap">'
        + _gStat('23','Topics') + _gStat('5,643','Questions') + _gStat('1,196','Surveyor Answers')
        + '</div>'
        + '<h2 style="font-size:20px;font-weight:800;color:var(--text);margin-bottom:10px">Keep it free for everyone.</h2>'
        + '<p style="font-size:14px;color:var(--text2);line-height:1.6;margin-bottom:8px">Most cadets studying for MMD can\'t afford paid subscriptions. This app exists to change that.</p>'
        + '<p style="font-size:13px;color:var(--text3);line-height:1.55;margin-bottom:8px">Every note and question here was tracked down from MMD forums, study materials, and real exam reports. Months of work - and it\'s still growing.</p>'
        + '<p style="font-size:13px;color:var(--text3);line-height:1.55;margin-bottom:28px">If you\'re in a position to help, your support means everything and keeps it free for the ones who aren\'t.</p>'
        + '<a href="https://pages.razorpay.com/elecbuddy" target="_blank" rel="noopener noreferrer" class="guide-btn-support" onclick="setTimeout(function(){guideDismiss(true)},400)">Support this project</a>'
        + '<div style="margin-top:14px"><button class="guide-btn-text" onclick="guideDismiss(true)">Start studying</button></div>'
        + '</div>';
}

function _gStat(num, label) {
    return '<div class="guide-stat-box"><div class="guide-stat-num">' + num + '</div><div class="guide-stat-lbl">' + label + '</div></div>';
}

function _guideSpotlight(step, idx) {
    document.getElementById('guide-slide-wrap').style.display = 'none';

    if (step.view) _guideNav(step.view);

    if (step.openSidebar && window.innerWidth <= 768) {
        var sb = document.getElementById('sidebar');
        sb.classList.add('open');
        document.getElementById('sidebar-overlay').classList.add('open');
        // After transition completes, remove transform so sidebar has no compositing layer
        // (fixes guide overlay rendered below sidebar on iOS/Chrome mobile)
        setTimeout(function() {
            sb.style.transition = 'none';
            sb.style.transform = 'none';
        }, 320);
    } else if (!step.openSidebar) {
        var sb2 = document.getElementById('sidebar');
        if (sb2) { sb2.style.transform = ''; sb2.style.transition = ''; }
        closeMobileMenu();
    }

    clearTimeout(_guideTimer);
    _guideTimer = setTimeout(function() {
        var el = document.querySelector(step.target);
        if (!el) { guideNext(); return; }

        el.scrollIntoView({ block: 'nearest', behavior: 'instant' });

        var rect = el.getBoundingClientRect();
        var pad = step.pad || 8;
        var sp = document.getElementById('guide-spotlight');
        var firstTime = sp.style.display === 'none';

        sp.style.display = 'block';
        if (firstTime) {
            sp.style.transition = 'none';
            sp.style.opacity = '0';
            requestAnimationFrame(function() {
                sp.style.transition = 'opacity 0.3s ease';
                sp.style.opacity = '1';
            });
        } else {
            sp.style.transition = 'top 0.38s cubic-bezier(0.25,1,0.5,1), left 0.38s cubic-bezier(0.25,1,0.5,1), width 0.38s cubic-bezier(0.25,1,0.5,1), height 0.38s cubic-bezier(0.25,1,0.5,1), border-radius 0.38s ease';
        }
        sp.style.top    = (rect.top  - pad) + 'px';
        sp.style.left   = (rect.left - pad) + 'px';
        sp.style.width  = (rect.width  + pad * 2) + 'px';
        sp.style.height = (rect.height + pad * 2) + 'px';
        var br = parseInt(window.getComputedStyle(el).borderRadius) || 12;
        sp.style.borderRadius = Math.min(br + pad, 24) + 'px';

        _guideTooltip(rect, pad, step, idx);
    }, step.openSidebar ? 450 : step.view ? 260 : 60);
}

function _guideTooltip(targetRect, pad, step, idx) {
    var tt = document.getElementById('guide-tooltip');
    var spotlights = GUIDE_STEPS.filter(function(s) { return s.type === 'spotlight'; });
    var spIdx = 0;
    for (var i = 0; i <= idx; i++) { if (GUIDE_STEPS[i].type === 'spotlight') spIdx++; }

    document.getElementById('guide-tt-step').textContent = 'Step ' + spIdx + ' of ' + spotlights.length;
    document.getElementById('guide-tt-title').textContent = step.title;
    document.getElementById('guide-tt-body').textContent = step.body;

    tt.style.visibility = 'hidden';
    tt.style.display = 'block';
    tt.style.opacity = '0';
    var tw = tt.offsetWidth, th = tt.offsetHeight;
    tt.style.visibility = '';

    var vw = window.innerWidth, vh = window.innerHeight, mg = 12;
    var sT = targetRect.top - pad, sL = targetRect.left - pad;
    var sR = targetRect.right + pad, sB = targetRect.bottom + pad;
    var sW = targetRect.width + pad * 2, sH = targetRect.height + pad * 2;

    var placements = [step.prefer, 'bottom', 'top', 'right', 'left'].filter(Boolean);
    var seen = {};
    placements = placements.filter(function(p) { return seen[p] ? false : (seen[p] = true); });

    var top, left, placed = false;
    for (var pi = 0; pi < placements.length; pi++) {
        var pos = placements[pi];
        if (pos === 'bottom')      { top = sB + mg;             left = sL + sW/2 - tw/2; }
        else if (pos === 'top')    { top = sT - th - mg;        left = sL + sW/2 - tw/2; }
        else if (pos === 'right')  { top = sT + sH/2 - th/2;   left = sR + mg; }
        else                       { top = sT + sH/2 - th/2;   left = sL - tw - mg; }
        left = Math.max(mg, Math.min(left, vw - tw - mg));
        top  = Math.max(mg, Math.min(top,  vh - th - mg));
        if (top >= mg && top+th <= vh-mg && left >= mg && left+tw <= vw-mg) { placed = true; break; }
    }
    if (!placed) {
        left = Math.max(mg, Math.min((vw-tw)/2, vw-tw-mg));
        top = sB + mg;
        if (top + th > vh - mg) top = Math.max(mg, sT - th - mg);
    }

    tt.style.top  = top  + 'px';
    tt.style.left = left + 'px';
    requestAnimationFrame(function() {
        tt.style.transition = 'opacity 0.25s ease';
        tt.style.opacity = '1';
    });
}

function _guideDots(idx) {
    var el = document.getElementById('guide-dots');
    if (!el) return;
    var html = '';
    GUIDE_STEPS.forEach(function(_, i) { html += '<span class="guide-dot' + (i === idx ? ' active' : '') + '"></span>'; });
    el.innerHTML = html;
}

function _guideNav(name) {
    var prev = window._isRouting;
    window._isRouting = true;
    showView(name);
    window._isRouting = prev;
}

window.addEventListener('resize', function() {
    if (!_guideActive) return;
    clearTimeout(_guideResizeTimer);
    _guideResizeTimer = setTimeout(function() {
        var step = GUIDE_STEPS[_guideStep];
        if (step && step.type === 'spotlight') _guideSpotlight(step, _guideStep);
    }, 150);
});

setTimeout(function() {
    if (!localStorage.getItem('guide_seen')) startGuide();
}, 900);

// ═══════════════════════════════════════════════════════
// ORAL SCROLL HINT
// ═══════════════════════════════════════════════════════
var _oshTimer = null;
var _oshListeners = [];

function maybeShowOralHint() {
    if (localStorage.getItem('osh_seen')) return;
    var hint = document.getElementById('oral-scroll-hint');
    if (!hint) return;
    hint.classList.remove('osh-hide');
    hint.classList.add('osh-show');

    // Auto-dismiss after 5 seconds
    _oshTimer = setTimeout(function() { dismissOralHint(true); }, 5000);

    // Tap pill -> scroll to Surveyor card then dismiss
    var pill = document.getElementById('osh-pill');
    function onPillTap() {
        var card = document.querySelector('.sq-oral-card');
        if (card) card.scrollIntoView({behavior: 'smooth', block: 'center'});
        dismissOralHint(true);
    }
    pill.addEventListener('click', onPillTap, {once: true});

    // Scroll anywhere -> dismiss
    var content = document.getElementById('content');
    function onScroll() { dismissOralHint(true); }
    if (content) content.addEventListener('scroll', onScroll, {once: true, passive: true});
    _oshListeners = [{el: content, fn: onScroll}];
}

function dismissOralHint(remember) {
    if (remember) localStorage.setItem('osh_seen', '1');
    clearTimeout(_oshTimer);
    _oshListeners.forEach(function(l) { if (l.el) l.el.removeEventListener('scroll', l.fn); });
    _oshListeners = [];
    var hint = document.getElementById('oral-scroll-hint');
    if (!hint || !hint.classList.contains('osh-show')) return;
    hint.classList.remove('osh-show');
    hint.classList.add('osh-hide');
    setTimeout(function() { hint.style.display = 'none'; hint.classList.remove('osh-hide'); }, 320);
}

// ═══════════════════════════════════════════════════════
// ROUTING (Refresh & Back Button Support)
// ═══════════════════════════════════════════════════════
window._isRouting = false;

function handleHashRouting() {
  var hash = window.location.hash.substring(1);
  window._isRouting = true;
  
  if (!hash) {
      showView('welcome');
  } else if (hash.startsWith('notes=')) {
      var topicId = hash.split('=')[1];
      var t = TOPICS.find(function(x) { return x.id === topicId; }) || WRITTEN_TOPICS.find(function(x) { return x.id === topicId; });
      if (t) fetchTopicData(t.id, t.key);
  } else if (hash.startsWith('quiz=')) {
      var topicId = hash.split('=')[1];
      goToQuizFromNotes(topicId);
  } else if (hash === 'sq-landing') {
      openSurveyorQA();
  } else if (hash === 'sq-all') {
      openSurveyorQA(function() { renderSqAll(); });
  } else if (hash === 'sq-grid') {
      openSurveyorQA(function() { renderSqGrid(); });
  } else if (hash === 'sq-monthly') {
      openSurveyorQA(function() { renderSqMonthly(); });
  } else if (hash.startsWith('sq-detail=')) {
      var surveyorName = decodeURIComponent(hash.split('=')[1]);
      openSurveyorQA(function() { openSqDetail(surveyorName); });
  } else {
      showView(hash);
      if (hash === 'quiz-bank') initQuizBank();
  }
  
  setTimeout(function() { window._isRouting = false; }, 50);
}

window.addEventListener('DOMContentLoaded', handleHashRouting);
window.addEventListener('popstate', handleHashRouting);

// ── Service Worker registration ───────────────────────────
if ('serviceWorker' in navigator) {
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    // Dev: unregister any existing SW so it doesn't intercept local requests
    navigator.serviceWorker.getRegistrations().then(function(regs) {
      regs.forEach(function(r) { r.unregister(); });
    });
  } else {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js')
        .catch(function() {}); // fail silently
    });
  }
}

startBackgroundIndexing();

// ═══════════════ SURVEYOR Q&A LOGIC ═══════════════

let sqCurrentPage = 0;
const sqPageSize = 20;
window._sqAllFilter = window._sqAllFilter || '';
window._sqAllSurveyorFilter = window._sqAllSurveyorFilter || '';
window._sqDetailFilter = window._sqDetailFilter || '';

function _waitForAccessGate() {
    // installGate() (index.html) only creates window._accessPromise on the
    // page's 'load' event, which fires AFTER 'DOMContentLoaded' - so on a
    // fresh page load straight into a #sq-* URL, _accessPromise may not
    // exist yet at the exact moment handleHashRouting runs. Poll for it
    // instead of a one-shot check, same defensive pattern installGate()
    // itself uses while waiting for window.fetchTopicData to exist.
    return new Promise(function(resolve) {
        (function poll() {
            if (window._accessPromise) { window._accessPromise.then(resolve); }
            else { setTimeout(poll, 50); }
        })();
    });
}

async function openSurveyorQA(onReady) {
    // Sidebar clicks already await this via installGate()'s wrapper (index.html),
    // but hash-based navigation (#sq-all, #sq-grid, deep links, refresh/back on
    // a #sq-* URL) calls this directly - without this guard, it can race ahead
    // of initContentKeys() and fail with "No content key available for scope: oral"
    // even for a fully-entitled user, simply because the key fetch hadn't finished yet.
    await _waitForAccessGate();
    if (window._access && !window._access.oral) {
        if (window.showGate) window.showGate('oral');
        return;
    }

    var cb = onReady || function() { showView('sq-landing'); };
    if (!window.SQ_DATA) {
        showView('sq-landing');
        var landing = document.getElementById('view-sq-landing');
        var spinner = document.createElement('div');
        spinner.id = '_sq-spinner';
        spinner.style.cssText = 'text-align:center;padding:40px 0;color:var(--text2);font-size:14px;';
        spinner.textContent = 'Loading Surveyor Q&A…';
        if (landing) landing.prepend(spinner);
        window._loadEncryptedScript('../data/Orals/SurveyorQA/sq_data.js').then(function() {
            if (spinner.parentNode) spinner.parentNode.removeChild(spinner);
            cb();
        }).catch(function(e) {
            console.error('[SurveyorQA] load failed:', e);
            if (spinner.parentNode) spinner.parentNode.removeChild(spinner);
            appToast('Failed to load Surveyor Q&A. Check your connection.');
        });
    } else {
        cb();
    }
}

function formatSqAnswer(text) {
    var lines = text.split('\n');
    var html = '';
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line) continue;
        var numMatch = line.match(/^(\d+)\.\s+(.+)/);
        if (numMatch) {
            html += '<div class="sq-bullet sq-numbered"><span class="sq-num">' + esc(numMatch[1]) + '.</span><span class="sq-bullet-text">' + esc(numMatch[2]) + '</span></div>';
            continue;
        }
        var labelMatch = line.match(/^([A-Z][^:]{1,49}):\s*(.+)/);
        if (labelMatch) {
            html += '<div class="sq-bullet"><span class="sq-label">' + esc(labelMatch[1]) + ':</span> <span class="sq-bullet-text">' + esc(labelMatch[2]) + '</span></div>';
            continue;
        }
        html += '<div class="sq-para">' + esc(line) + '</div>';
    }
    return html;
}

function renderSqCard(q) {
    var ans = formatSqAnswer(q.answer);
    return '<div class="sq-card">'
        + '<div class="sq-header"><div class="sq-badges">'
        + '<span class="sq-badge-surveyor">' + esc(q.surveyor) + '</span>'
        + '<span class="sq-badge-topic">' + esc(q.topic) + '</span>'
        + '</div></div>'
        + '<div class="sq-q">Q: ' + esc(q.question) + '</div>'
        + '<div class="sq-a">' + ans + '</div>'
        + '</div>';
}

function sqJumpToTopic(code) {
    let t = TOPICS.find(function(x) { return x.id === code; });
    if (t && window.fetchTopicData) window.fetchTopicData(t.id, t.key);
}

function _sqLinkifyTopics(text) {
    // Turns bare topic codes like "T23" inside a style-notes sentence into
    // clickable links that take the cadet straight into that topic's notes -
    // e.g. "Frequently asks about T23, T01." becomes three real jump points.
    let parts = String(text).split(/(T\d{2})/g);
    return parts.map(function(part) {
        if (!/^T\d{2}$/.test(part)) return esc(part);
        let t = TOPICS.find(function(x) { return x.id === part; });
        let label = t ? (part + ' - ' + t.name) : part;
        return '<a href="#" class="sq-topic-link" onclick="sqJumpToTopic(\'' + part + '\'); return false;">' + esc(label) + '</a>';
    }).join('');
}

function _sqTopicOptionsHTML(questions, selected) {
    let counts = {};
    questions.forEach(function(q) { counts[q.topic] = (counts[q.topic] || 0) + 1; });
    let codes = Object.keys(counts).sort();
    let html = '<option value="">All Topics (' + questions.length + ')</option>';
    codes.forEach(function(code) {
        let t = TOPICS.find(function(x) { return x.id === code; });
        let label = t ? (code + ' - ' + t.name) : code;
        html += '<option value="' + code + '"' + (code === selected ? ' selected' : '') + '>' + esc(label) + ' (' + counts[code] + ')</option>';
    });
    return html;
}

function _sqSurveyorOptionsHTML(questions, selected) {
    let counts = {};
    questions.forEach(function(q) { counts[q.surveyor] = (counts[q.surveyor] || 0) + 1; });
    let names = Object.keys(counts).sort();
    let html = '<option value="">All Surveyors (' + questions.length + ')</option>';
    names.forEach(function(name) {
        html += '<option value="' + esc(name) + '"' + (name === selected ? ' selected' : '') + '>' + esc(name) + ' (' + counts[name] + ')</option>';
    });
    return html;
}

function _sqAllKey() {
    var parts = [];
    if (window._sqAllFilter) parts.push('t:' + window._sqAllFilter);
    if (window._sqAllSurveyorFilter) parts.push('s:' + window._sqAllSurveyorFilter);
    return 'sq-all' + (parts.length ? ':' + parts.join(',') : '');
}

function _sqAllFiltered() {
    let all = window.SQ_DATA.questions;
    if (window._sqAllFilter) all = all.filter(function(q) { return q.topic === window._sqAllFilter; });
    if (window._sqAllSurveyorFilter) all = all.filter(function(q) { return q.surveyor === window._sqAllSurveyorFilter; });
    return all;
}

function renderSqAll() {
    showView('sq-all');
    if (!window.SQ_DATA) return;

    document.getElementById('sq-all-topic-filter').innerHTML = _sqTopicOptionsHTML(window.SQ_DATA.questions, window._sqAllFilter);
    document.getElementById('sq-all-surveyor-filter').innerHTML = _sqSurveyorOptionsHTML(window.SQ_DATA.questions, window._sqAllSurveyorFilter);
    _sqAllRenderFromScratch();
}

function sqAllFilterChanged() {
    window._sqAllFilter = document.getElementById('sq-all-topic-filter').value;
    window._sqAllSurveyorFilter = document.getElementById('sq-all-surveyor-filter').value;
    _sqAllRenderFromScratch();
}

function _sqAllRenderFromScratch() {
    let items = _sqAllFiltered();
    let key = _sqAllKey();
    document.getElementById('sq-all-count').textContent = items.length + ' question' + (items.length === 1 ? '' : 's');

    // Re-load as many pages as were loaded last time we were on this exact
    // view+filter, so a saved scroll position further down actually has
    // content to land on, rather than clamping to the bottom of a short list.
    let savedPages = Math.max(1, parseInt(localStorage.getItem('eb_sq_pages_' + key), 10) || 1);
    let end = Math.min(savedPages * sqPageSize, items.length);
    let html = '';
    for (let i = 0; i < end; i++) html += renderSqCard(items[i]);
    document.getElementById('sq-all-container').innerHTML = html;
    sqCurrentPage = Math.ceil(end / sqPageSize);
    document.getElementById('sq-load-more').style.display = (end >= items.length) ? 'none' : 'inline-block';

    window._activeTopicId = key;
    _restoreScroll(key);
}

function loadMoreSqAll() {
    if (!window.SQ_DATA) return;
    let items = _sqAllFiltered();
    if (sqCurrentPage * sqPageSize >= items.length) return;

    let container = document.getElementById('sq-all-container');
    let start = sqCurrentPage * sqPageSize;
    let end = Math.min(start + sqPageSize, items.length);
    let html = '';
    for (let i = start; i < end; i++) html += renderSqCard(items[i]);
    container.insertAdjacentHTML('beforeend', html);
    sqCurrentPage++;
    localStorage.setItem('eb_sq_pages_' + _sqAllKey(), sqCurrentPage);

    document.getElementById('sq-load-more').style.display = (end >= items.length) ? 'none' : 'inline-block';
}

function _sqSurveyorCard(name, meta, icon) {
    let qCount = window.SQ_DATA.questions.filter(q => q.surveyor === name).length;
    let tops = meta.top_topics ? meta.top_topics.slice(0, 3).join(', ') : 'Mixed';
    return '<div class="sq-surveyor-card" data-surveyor="' + esc(name) + '">'
        + '<div class="sq-surveyor-name">' + icon + ' ' + esc(name) + '</div>'
        + '<div class="sq-surveyor-stat"><strong>' + qCount + '</strong> questions</div>'
        + '<div class="sq-surveyor-stat"><strong>Top Topics:</strong> ' + esc(tops) + '</div>'
        + '</div>';
}

function renderSqGrid() {
    showView('sq-grid');
    if (!window.SQ_DATA) return;

    let surveyors = window.SQ_DATA.surveyors;
    let activeSurveyors = new Set(window.SQ_DATA.questions.map(q => q.surveyor));
    let realNames = Array.from(activeSurveyors).filter(n => (surveyors[n] || {}).role !== 'monthly-mock').sort();

    let grid = document.getElementById('sq-surveyor-grid');
    grid.innerHTML = realNames.map(function(name) {
        return _sqSurveyorCard(name, surveyors[name] || {}, '🧑‍✈️');
    }).join('');
    grid.onclick = function(e) {
        var card = e.target.closest('[data-surveyor]');
        if (card) openSqDetail(card.getAttribute('data-surveyor'));
    };
}

function renderSqMonthly() {
    showView('sq-monthly');
    if (!window.SQ_DATA) return;

    let surveyors = window.SQ_DATA.surveyors;
    let activeSurveyors = new Set(window.SQ_DATA.questions.map(q => q.surveyor));
    let monthlyNames = Array.from(activeSurveyors).filter(n => (surveyors[n] || {}).role === 'monthly-mock');
    monthlyNames.sort(function(a, b) {
        return new Date('1 ' + a) - new Date('1 ' + b);
    });

    let grid = document.getElementById('sq-monthly-grid');
    grid.innerHTML = monthlyNames.map(function(name) {
        return _sqSurveyorCard(name, surveyors[name] || {}, '📅');
    }).join('');
    grid.onclick = function(e) {
        var card = e.target.closest('[data-surveyor]');
        if (card) openSqDetail(card.getAttribute('data-surveyor'));
    };
}

function sqDetailBack() {
    if (window._sqDetailReturn === 'sq-monthly') renderSqMonthly();
    else renderSqGrid();
}

function _sqDetailAllQuestions() {
    return window.SQ_DATA.questions.filter(function(q) { return q.surveyor === window._sqDetailName; });
}

function _sqDetailFiltered() {
    let all = _sqDetailAllQuestions();
    return window._sqDetailFilter ? all.filter(function(q) { return q.topic === window._sqDetailFilter; }) : all;
}

function _sqDetailRenderQuestions() {
    let questions = _sqDetailFiltered();
    document.getElementById('sq-detail-container').innerHTML = questions.map(renderSqCard).join('');
    document.getElementById('sq-detail-count').textContent = questions.length + ' question' + (questions.length === 1 ? '' : 's');

    let key = 'sq-detail-' + window._sqDetailName + (window._sqDetailFilter ? ':' + window._sqDetailFilter : '');
    window._activeTopicId = key;
    _restoreScroll(key);
}

function sqDetailFilterChanged() {
    window._sqDetailFilter = document.getElementById('sq-detail-topic-filter').value;
    _sqDetailRenderQuestions();
}

function openSqDetail(surveyorName) {
    showView('sq-detail');
    if (!window.SQ_DATA) return;

    document.getElementById('sq-detail-title').textContent = surveyorName;

    let meta = window.SQ_DATA.surveyors[surveyorName] || {};
    let isMonthly = meta.role === 'monthly-mock';
    window._sqDetailReturn = isMonthly ? 'sq-monthly' : 'sq-grid';
    let backBtn = document.getElementById('sq-detail-back-btn');
    if (backBtn) backBtn.textContent = isMonthly ? '← Monthly Sittings' : '← Surveyors';
    let infoDiv = document.getElementById('sq-detail-info');
    infoDiv.innerHTML = '<strong>Style Notes: </strong><span>' + _sqLinkifyTopics(meta.style_notes || 'No specific style noted.') + '</span>';
    infoDiv.className = 'n-info';

    window._sqDetailName = surveyorName;
    window._sqDetailFilter = '';
    document.getElementById('sq-detail-topic-filter').innerHTML = _sqTopicOptionsHTML(_sqDetailAllQuestions(), '');
    _sqDetailRenderQuestions();
}

// ── DIAGRAM ZOOM TOGGLE ───────────────────────────────────────
document.addEventListener('click', function(e) {
    if (e.target.matches('.note-diagram-wrap img')) {
        e.target.classList.toggle('zoomed');
    } else {
        var z = document.querySelector('.note-diagram-wrap img.zoomed');
        if (z) z.classList.remove('zoomed');
    }
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var z = document.querySelector('.note-diagram-wrap img.zoomed');
        if (z) z.classList.remove('zoomed');
    }
});

// ── HANDWRITTEN SHEET ZOOM VIEWER ─────────────────────────────
// The diagram zoom above is a fit-to-screen toggle, which is fine for a
// single circuit diagram but useless for these sheets: they are dense A4
// landscape worked solutions, so "fit to 95vw" on a phone renders the
// working too small to read. This is a real zoom/pan viewer instead -
// pinch on touch, wheel on desktop, drag to pan, double-tap to toggle.
var _hwV = null;

function _hwViewerEl() {
    if (_hwV) return _hwV;
    var o = document.createElement('div');
    o.className = 'hw-viewer';
    o.setAttribute('hidden', '');
    o.innerHTML =
        '<div class="hw-stage"><img class="hw-stage-img" alt=""></div>'
      + '<div class="hw-bar">'
      +   '<button type="button" class="hw-btn" data-act="out" aria-label="Zoom out">&minus;</button>'
      +   '<span class="hw-zoom" aria-live="polite">100%</span>'
      +   '<button type="button" class="hw-btn" data-act="in" aria-label="Zoom in">+</button>'
      +   '<button type="button" class="hw-btn hw-btn-wide" data-act="reset">Reset</button>'
      + '</div>'
      + '<button type="button" class="hw-close" aria-label="Close">&times;</button>';
    document.body.appendChild(o);
    _hwV = o;

    var stage = o.querySelector('.hw-stage');
    var img = o.querySelector('.hw-stage-img');
    var zlabel = o.querySelector('.hw-zoom');
    var s = 1, tx = 0, ty = 0;
    var MIN = 1, MAX = 6;
    var pointers = new Map();
    var pinchDist = 0, pinchMid = null;
    var panning = false, panX = 0, panY = 0;
    var lastTap = 0;
    var moved = false;

    function limits() {
        // Bounds are computed from the rendered (fitted) size at s=1, so the
        // sheet can never be dragged fully off screen.
        var vw = stage.clientWidth, vh = stage.clientHeight;
        var w = img.clientWidth * s, h = img.clientHeight * s;
        return { x: Math.max(0, (w - vw) / 2), y: Math.max(0, (h - vh) / 2) };
    }
    function apply() {
        var L = limits();
        tx = Math.max(-L.x, Math.min(L.x, tx));
        ty = Math.max(-L.y, Math.min(L.y, ty));
        img.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + s + ')';
        zlabel.textContent = Math.round(s * 100) + '%';
        stage.classList.toggle('is-zoomed', s > 1.01);
    }
    // Zoom about a focal point measured from the stage centre, so the thing
    // under the fingers/cursor stays put instead of the image sliding away.
    function zoomTo(ns, fx, fy) {
        ns = Math.max(MIN, Math.min(MAX, ns));
        if (ns === s) return;
        if (fx === undefined) { fx = 0; fy = 0; }
        tx = fx - (fx - tx) * (ns / s);
        ty = fy - (fy - ty) * (ns / s);
        s = ns;
        if (s <= 1.001) { tx = 0; ty = 0; }
        apply();
    }
    function focal(cx, cy) {
        var r = stage.getBoundingClientRect();
        return { x: cx - (r.left + r.width / 2), y: cy - (r.top + r.height / 2) };
    }
    function reset() { s = 1; tx = 0; ty = 0; apply(); }

    o.addEventListener('click', function(e) {
        var b = e.target.closest('[data-act]');
        if (b) {
            var a = b.getAttribute('data-act');
            if (a === 'in') zoomTo(s * 1.5);
            else if (a === 'out') zoomTo(s / 1.5);
            else reset();
            return;
        }
        if (e.target.closest('.hw-close')) { closeHandwritten(); return; }
        // A drag is not a click. Swallow the click that trails every pan.
        if (moved) { moved = false; return; }
        // Close only on a genuine tap on the backdrop. This has to be decided
        // from coordinates, not e.target: setPointerCapture retargets the
        // synthesized click to the stage, so target-based checks treat a tap
        // on the sheet itself as a backdrop tap and close the viewer.
        var r = img.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeHandwritten();
    });

    stage.addEventListener('wheel', function(e) {
        e.preventDefault();
        var f = focal(e.clientX, e.clientY);
        zoomTo(s * Math.exp(-e.deltaY * 0.0016), f.x, f.y);
    }, { passive: false });

    stage.addEventListener('pointerdown', function(e) {
        stage.setPointerCapture(e.pointerId);
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 2) {
            var p = [...pointers.values()];
            pinchDist = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
            pinchMid = focal((p[0].x + p[1].x) / 2, (p[0].y + p[1].y) / 2);
            panning = false;
            moved = true;
        } else if (pointers.size === 1) {
            moved = false;
            panning = s > 1.01;
            panX = e.clientX; panY = e.clientY;
            var now = Date.now();
            if (now - lastTap < 300) { zoomTo(s > 1.01 ? 1 : 2.5, 0, 0); lastTap = 0; }
            else lastTap = now;
        }
    });
    stage.addEventListener('pointermove', function(e) {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 2 && pinchDist) {
            var p = [...pointers.values()];
            var d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
            if (d > 0) { zoomTo(s * (d / pinchDist), pinchMid.x, pinchMid.y); pinchDist = d; }
        } else if (panning) {
            var dx = e.clientX - panX, dy = e.clientY - panY;
            if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true;
            tx += dx; ty += dy;
            panX = e.clientX; panY = e.clientY;
            apply();
        }
    });
    function endPointer(e) {
        pointers.delete(e.pointerId);
        if (pointers.size < 2) pinchDist = 0;
        if (pointers.size === 0) panning = false;
    }
    stage.addEventListener('pointerup', endPointer);
    stage.addEventListener('pointercancel', endPointer);

    o._reset = reset;
    o._img = img;
    return o;
}

window.openHandwritten = function(src, alt) {
    var o = _hwViewerEl();
    o._img.src = src;
    o._img.alt = alt || '';
    o.removeAttribute('hidden');
    document.body.classList.add('hw-open');
    o._reset();
};

window.closeHandwritten = function() {
    if (!_hwV) return;
    _hwV.setAttribute('hidden', '');
    document.body.classList.remove('hw-open');
    // Drop the decoded bitmap so a full-size sheet is not held in memory
    // for the rest of the session after a single look.
    _hwV._img.removeAttribute('src');
};

function _hwOpenFrom(img) {
    if (img && img.getAttribute('src')) openHandwritten(img.getAttribute('src'), img.getAttribute('alt'));
}
document.addEventListener('click', function(e) {
    _hwOpenFrom(e.target.closest('.hw-img'));
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && _hwV && !_hwV.hasAttribute('hidden')) { closeHandwritten(); return; }
    // The thumbnail is an <img>, so it gets no activation behaviour for free.
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('hw-img')) {
        e.preventDefault();
        _hwOpenFrom(e.target);
    }
});

// ── VIDEOS TAB LOGIC ──────────────────────────────────────────

function injectVideoTab(topicId) {
    let noteDoc = document.querySelector('#notes-container .note-doc');
    let noteContent = document.querySelector('#notes-container .note-content');
    if (!noteDoc || !noteContent) return;

    if (document.querySelector('#video-tabs-wrap')) return;

    let tabsWrap = document.createElement('div');
    tabsWrap.id = 'video-tabs-wrap';
    tabsWrap.className = 'qb-seg';
    tabsWrap.style.marginBottom = '24px';
    tabsWrap.style.justifyContent = 'flex-start';

    let btnNotes = document.createElement('button');
    btnNotes.className = 'qb-seg-btn active';
    btnNotes.innerHTML = '<span style="font-size:16px;margin-right:6px">📄</span> Study Notes';

    let btnVideos = document.createElement('button');
    btnVideos.className = 'qb-seg-btn';
    btnVideos.innerHTML = '<span style="font-size:16px;margin-right:6px">▶️</span> My Videos';

    tabsWrap.appendChild(btnNotes);
    tabsWrap.appendChild(btnVideos);

    let videosContent = document.createElement('div');
    videosContent.id = 'videos-content';
    videosContent.style.display = 'none';
    videosContent.innerHTML = '<div id="vid-playlist-root"></div>';

    noteDoc.insertBefore(tabsWrap, noteContent);
    noteContent.parentNode.insertBefore(videosContent, noteContent.nextSibling);

    btnNotes.onclick = function() {
        btnNotes.classList.add('active');
        btnVideos.classList.remove('active');
        noteContent.style.display = 'block';
        videosContent.style.display = 'none';
    };

    btnVideos.onclick = function() {
        btnVideos.classList.add('active');
        btnNotes.classList.remove('active');
        noteContent.style.display = 'none';
        videosContent.style.display = 'block';
        renderVideos(topicId);
    };
}

function getYouTubeID(url) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    let match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

var KNOWN_LANGS = ['Malayalam', 'English', 'Hindi', 'Tamil', 'Telugu'];
var _vidTopicId = null;
var _vidVids = [];
var _vidLangs = ['All'];
var _vidActiveLang = 'All';

function getVideoLang(header) {
    let m = header.match(/\s*[-–]\s*([A-Za-z]+)\s*$/);
    if (m && KNOWN_LANGS.indexOf(m[1]) !== -1) return m[1];
    return 'English';
}

function stripLangSuffix(header) {
    return header.replace(/\s*[-–]\s*([A-Za-z]+)\s*$/, function(_, lang) {
        return KNOWN_LANGS.indexOf(lang) !== -1 ? '' : (_ );
    }).trim();
}

function renderVideos(topicId) {
    let root = document.getElementById('vid-playlist-root');
    if (!root) return;

    let data = window.VIDEO_DATA[topicId];
    let vids = data ? data.filter(function(v) { return v.url && v.url.trim(); }) : [];

    if (vids.length === 0) {
        root.innerHTML = '<div style="color:var(--text3);font-size:14px;padding:40px 0;text-align:center;">No videos curated yet for this topic.</div>';
        return;
    }

    _vidTopicId = topicId;
    _vidVids = vids;
    _vidLangs = ['All'];
    vids.forEach(function(v) {
        var l = getVideoLang(v.header);
        if (_vidLangs.indexOf(l) === -1) _vidLangs.push(l);
    });

    vidRenderList('All');
}

function vidRenderList(activeLang) {
    var root = document.getElementById('vid-playlist-root');
    if (!root) return;

    var filtered = activeLang === 'All'
        ? _vidVids
        : _vidVids.filter(function(v) { return getVideoLang(v.header) === activeLang; });

    var chipsHtml = _vidLangs.length > 1
        ? '<div class="vid-lang-chips">' + _vidLangs.map(function(l) {
            return '<button class="vid-lang-chip' + (l === activeLang ? ' active' : '') + '" onclick="vidRenderList(\'' + l + '\')">' + l + '</button>';
          }).join('') + '</div>'
        : '';

    _vidActiveLang = activeLang;

    var listHtml = filtered.length === 0
        ? '<div style="color:var(--text3);font-size:13px;padding:20px 0;text-align:center;">No ' + activeLang + ' videos for this topic.</div>'
        : '<div class="vid-list">' + filtered.map(function(v) {
            var realIdx = _vidVids.indexOf(v);
            var lang = getVideoLang(v.header);
            var title = stripLangSuffix(v.header);
            var badge = lang !== 'English' ? '<span class="vid-lang-badge">' + lang.slice(0, 2).toUpperCase() + '</span>' : '';
            return '<button class="vid-list-item" onclick="vidOpenFloat(\'' + _vidTopicId + '\',' + realIdx + ')">' +
                '<span class="vid-list-icon">▶</span>' +
                '<span class="vid-list-label">' + title.replace(/</g, '&lt;') + '</span>' +
                badge + '</button>';
          }).join('') + '</div>';

    root.innerHTML = chipsHtml + listHtml;
}

function vidOpenFloat(topicId, startIdx) {
    let allVids = (window.VIDEO_DATA[topicId] || []).filter(function(v) { return v.url && v.url.trim(); });
    let vids = (_vidActiveLang === 'All') ? allVids : allVids.filter(function(v) { return getVideoLang(v.header) === _vidActiveLang; });
    if (!vids.length) return;
    let floatIdx = vids.indexOf(allVids[startIdx]);
    if (floatIdx === -1) floatIdx = 0;

    vidFloatClose();

    let backdrop = document.createElement('div');
    backdrop.id = 'vid-float-backdrop';
    backdrop.className = 'vid-float-backdrop';
    backdrop.addEventListener('click', function(e) { if (e.target === backdrop) vidFloatClose(); });

    function buildEmbed(v) {
        let ytid = getYouTubeID(v.url);
        if (ytid) {
            return '<div class="vid-float-iframe-wrap"><iframe src="https://www.youtube.com/embed/' + ytid + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
        return '<div style="padding:40px;text-align:center;"><a href="' + v.url.replace(/"/g, '&quot;') + '" target="_blank" style="color:var(--blue);font-weight:700;font-size:15px;">🔗 Open Link</a></div>';
    }

    function render(idx) {
        let v = vids[idx];
        let sidebar = vids.map(function(sv, si) {
            return '<button class="vid-float-pl-item' + (si === idx ? ' active' : '') + '" onclick="vidFloatSwitch(' + si + ')">' +
                '<span class="vid-float-pl-icon">' + (si === idx ? '▶' : '▷') + '</span>' +
                '<span class="vid-float-pl-label">' + sv.header.replace(/</g, '&lt;') + '</span>' +
                '</button>';
        }).join('');

        backdrop.innerHTML =
            '<div class="vid-float-box">' +
            '<div class="vid-float-topbar"><button class="vid-float-close" onclick="vidFloatClose()">✕</button></div>' +
            '<div class="vid-float-inner">' +
            '<div class="vid-float-player">' + buildEmbed(v) +
            '<div class="vid-float-now-playing">' + v.header.replace(/</g, '&lt;') + '</div></div>' +
            '<div class="vid-float-sidebar">' + sidebar + '</div>' +
            '</div></div>';

        backdrop._render = render;
    }

    render(floatIdx);
    document.body.appendChild(backdrop);

    document.addEventListener('keydown', vidFloatEsc);
}

function vidFloatSwitch(idx) {
    let backdrop = document.getElementById('vid-float-backdrop');
    if (backdrop && backdrop._render) backdrop._render(idx);
}

function vidFloatClose() {
    let el = document.getElementById('vid-float-backdrop');
    if (el) el.remove();
    document.removeEventListener('keydown', vidFloatEsc);
}

function vidFloatEsc(e) {
    if (e.key === 'Escape') vidFloatClose();
}

// ================= NUMERICALS LOGIC =================
var NUM_CATEGORIES = [
  { id: 'transformers', label: 'Transformers', icon: '🔄' },
  { id: 'alternators',  label: 'Alternators & Power Factor', icon: '⚡' },
  { id: 'motors',       label: 'Motors (AC/Induction)', icon: '⚙️' },
  { id: 'dc-machines',  label: 'DC Machines', icon: '🔋' },
  { id: 'rectifiers',   label: 'Rectifiers & Semiconductors', icon: '💠' },
  { id: 'ac-theory',    label: 'AC Theory & Capacitors', icon: '🧮' },
  { id: 'protection',   label: 'Protection & Switchgear', icon: '🛡️' },
];

var NUM_TAB_CONTAINERS = {
  freq: { list: 'numerical-list-container', detailView: 'numerical-detail-view', detailContent: 'numerical-content-container' },
  cat:  { list: 'numerical-cat-container', detailView: 'numerical-cat-detail-view', detailContent: 'numerical-cat-content-container' },
  year: { list: 'numerical-year-container', detailView: 'numerical-year-detail-view', detailContent: 'numerical-year-content-container' },
};

// Rendered top-to-bottom order per tab, so the detail view's Prev/Next
// buttons can jump directly between questions without returning to the list.
var NUM_TAB_ORDER = { freq: [], cat: [], year: [] };

function numCard(n, tab, badgeText, extraAttrs) {
  return `
    <div onclick="loadNumerical('${n.id}', '${tab}')" ${extraAttrs || ''} style="background: var(--surface); border: 1px solid var(--border2); border-radius: 8px; padding: 16px; cursor: pointer; transition: transform 0.2s, border-color 0.2s;" onmouseover="this.style.borderColor='var(--blue)'" onmouseout="this.style.borderColor='var(--border2)'">
      <div class="nc-header" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
        <div style="font-size: 15px; font-weight: 600; color: var(--text); flex: 1; min-width: 0;">${n.title}</div>
        <div class="nc-badge" style="background: var(--surface3); color: var(--text); font-size: 12px; padding: 4px 10px; border-radius: 12px; white-space: nowrap; font-weight: 700; flex-shrink: 0;">${badgeText}</div>
      </div>
      <div style="font-size: 13px; color: var(--text2); margin-top: 8px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
        ${n.givenData.replace(/<[^>]*>?/gm, ' ')}
      </div>
    </div>
  `;
}

// Short summary + expandable full pill list once a question has appeared
// often enough that the raw badge row starts reading as noise rather than
// information (two-plus wrapped lines on a page that's otherwise clean).
function numYearsBadges(years, tab) {
  if (!years) return '';
  var list = years.split(',').map(y => y.trim()).filter(Boolean);
  if (!list.length) return '';
  var pills = list.map(y => `<span style="background: var(--surface2); padding: 3px 8px; border-radius: 4px; border: 1px solid var(--border2);">${y}</span>`).join('');

  if (list.length <= 6) {
    return `<div style="margin-top: 12px; font-size: 12px; color: var(--text2); display: flex; flex-wrap: wrap; gap: 6px; align-items: center;">
      <span style="color: var(--text); font-weight: 500;">Appeared in:</span>
      ${pills}
    </div>`;
  }

  var yearNums = list.map(y => parseInt(y.split('/')[0], 10)).filter(n => !isNaN(n));
  var minY = yearNums.length ? Math.min.apply(null, yearNums) : '';
  var maxY = yearNums.length ? Math.max.apply(null, yearNums) : '';
  var uid = 'years-' + tab;
  return `<div style="margin-top: 12px; font-size: 12px; color: var(--text2);">
    <span id="${uid}-summary" style="display:inline-flex; align-items:center; gap:8px;">
      <span><span style="color: var(--text); font-weight: 500;">Appeared in:</span> ${list.length} times${minY ? ` (${minY}–${maxY})` : ''}</span>
      <button class="anc-btn" style="padding:2px 8px; font-size:11px;" onclick="document.getElementById('${uid}-summary').style.display='none'; document.getElementById('${uid}-full').style.display='flex';">Show all</button>
    </span>
    <div id="${uid}-full" style="display:none; flex-wrap: wrap; gap: 6px; align-items: center;">
      <span style="color: var(--text); font-weight: 500;">Appeared in:</span>
      ${pills}
    </div>
  </div>`;
}

function renderNumericalList() {
  if (!window.NUMERICALS) return;
  var container = document.getElementById('numerical-list-container');
  if (!container) return;

  var tiers = {
    1: { title: '🔥 Tier 1 - Very High Frequency (10+ appearances)', items: [] },
    2: { title: '⭐ Tier 2 - High Frequency (6–9 appearances)', items: [] },
    3: { title: '👍 Tier 3 - Medium Frequency (3–5 appearances)', items: [] },
    4: { title: '📄 Tier 4 - Low Frequency (1–2 appearances)', items: [] }
  };

  window.NUMERICALS.forEach(n => {
    if (tiers[n.tier]) tiers[n.tier].items.push(n);
  });

  var order = [];
  var html = '';
  Object.keys(tiers).forEach(k => {
    var t = tiers[k];
    if (t.items.length === 0) return;

    html += `<div style="margin-bottom: 30px;" id="tier-${k}">
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 15px; color: var(--text); padding-bottom: 8px; border-bottom: 1px solid var(--border2);">${t.title}</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">`;

    t.items.forEach(n => { html += numCard(n, 'freq', n.frequency + '×'); order.push(n.id); });

    html += `</div></div>`;
  });

  NUM_TAB_ORDER.freq = order;
  container.innerHTML = html;
}

function numericalsByCategory() {
  var byCat = {};
  window.NUMERICALS.forEach(n => {
    var cid = n.categoryId || 'uncategorized';
    if (!byCat[cid]) byCat[cid] = [];
    byCat[cid].push(n);
  });
  return byCat;
}

// Step 1: a card grid of topics (like the Numericals landing page), one per
// category with a live question count - the front door into By Category.
function renderNumericalCategoryTopics() {
  if (!window.NUMERICALS) return;
  var grid = document.getElementById('numerical-cat-topics-container');
  if (!grid) return;
  var byCat = numericalsByCategory();

  var html = '';
  NUM_CATEGORIES.forEach(cat => {
    var items = byCat[cat.id];
    if (!items || !items.length) return;
    html += `
      <div class="welcome-card" onclick="showNumericalCategoryDetail('${cat.id}')">
        <div class="wc-icon">${cat.icon}</div>
        <h3>${cat.label}</h3>
        <p>${items.length} numerical question${items.length === 1 ? '' : 's'} in this topic.</p>
        <div class="wc-badge">${items.length} Question${items.length === 1 ? '' : 's'}</div>
      </div>`;
  });

  grid.innerHTML = html;
  document.getElementById('numerical-cat-topics-container').style.display = 'grid';
  document.getElementById('numerical-cat-container').style.display = 'none';
}

// Step 2: the chosen topic's own question list, reusing the same card
// template as every other tab.
function showNumericalCategoryDetail(catId) {
  if (!window.NUMERICALS) return;
  var cat = NUM_CATEGORIES.find(c => c.id === catId);
  var byCat = numericalsByCategory();
  var items = (byCat[catId] || []);
  var container = document.getElementById('numerical-cat-container');
  if (!container || !cat) return;

  var order = [];
  var html = `<button class="anc-btn" onclick="backToCategoryTopics()" style="margin-bottom: 20px;">← Back to Topics</button>
    <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 15px; color: var(--text); padding-bottom: 8px; border-bottom: 1px solid var(--border2);">${cat.icon} ${cat.label} (${items.length})</h3>
    <div style="display: flex; flex-direction: column; gap: 12px;">`;
  items.forEach(n => { html += numCard(n, 'cat', n.frequency + '×'); order.push(n.id); });
  html += `</div>`;

  NUM_TAB_ORDER.cat = order;
  container.innerHTML = html;
  document.getElementById('numerical-cat-topics-container').style.display = 'none';
  container.style.display = 'block';
  document.getElementById('content').scrollTo({top: 0, behavior: 'instant'});
}

function backToCategoryTopics() {
  document.getElementById('numerical-cat-container').style.display = 'none';
  document.getElementById('numerical-cat-topics-container').style.display = 'grid';
}

function renderNumericalByYear() {
  if (!window.NUMERICALS) return;
  var container = document.getElementById('numerical-year-container');
  var anchors = document.getElementById('numerical-year-anchors');
  if (!container) return;

  // A question can appear in many years - build year -> [{n, months[]}] so
  // it shows up under every year it was actually asked, each time badged
  // with just that year's month(s), not the full appearance history.
  var byYear = {};
  window.NUMERICALS.forEach(n => {
    if (!n.years) return;
    n.years.split(',').forEach(entry => {
      entry = entry.trim();
      var parts = entry.split('/');
      var year = parts[0];
      var month = parts[1] || '';
      if (!year) return;
      if (!byYear[year]) byYear[year] = {};
      if (!byYear[year][n.id]) byYear[year][n.id] = { n: n, months: [] };
      if (month && byYear[year][n.id].months.indexOf(month) === -1) byYear[year][n.id].months.push(month);
    });
  });

  var years = Object.keys(byYear).sort().reverse();
  var MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  var order = [];
  var anchorHtml = '<span>Jump to year</span>';
  var html = '';
  years.forEach(year => {
    var entries = Object.keys(byYear[year]).map(id => byYear[year][id]).sort((a, b) => a.n.id.localeCompare(b.n.id));
    anchorHtml += `<button class="anc-btn" onclick="jumpTo('year-${year}')">${year}</button>`;
    html += `<div style="margin-bottom: 30px;" id="year-${year}" data-year-section="${year}">
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 15px; color: var(--text); padding-bottom: 8px; border-bottom: 1px solid var(--border2);">📅 ${year} (${entries.length} question${entries.length === 1 ? '' : 's'})</h3>
      <div style="display: flex; flex-direction: column; gap: 12px;">`;
    entries.forEach(e => {
      var attrs = `data-year="${year}" data-months="${e.months.join(',')}"`;
      html += numCard(e.n, 'year', e.months.join(', ') || year, attrs);
      order.push(e.n.id);
    });
    html += `</div></div>`;
  });
  html += `<div id="numerical-year-empty" style="display:none; text-align:center; padding:40px 20px; color:var(--text2);">No numericals match that filter.</div>`;

  // Filter controls, pushed to the right of the jump row via margin-left:auto
  anchorHtml += `<div style="margin-left:auto; display:flex; gap:8px; align-items:center;">
    <select id="numerical-year-filter-year" onchange="filterNumericalYear()" style="background:var(--surface); border:1px solid var(--border2); border-radius:6px; padding:6px 10px; color:var(--text); font-size:13px;">
      <option value="">All Years</option>
      ${years.map(y => `<option value="${y}">${y}</option>`).join('')}
    </select>
    <select id="numerical-year-filter-month" onchange="filterNumericalYear()" style="background:var(--surface); border:1px solid var(--border2); border-radius:6px; padding:6px 10px; color:var(--text); font-size:13px;">
      <option value="">All Months</option>
      ${MONTHS.map(m => `<option value="${m}">${m}</option>`).join('')}
    </select>
  </div>`;

  NUM_TAB_ORDER.year = order;
  if (anchors) anchors.innerHTML = anchorHtml;
  container.innerHTML = html;
}

function filterNumericalYear() {
  var yearSel = document.getElementById('numerical-year-filter-year');
  var monthSel = document.getElementById('numerical-year-filter-month');
  var yearFilter = yearSel ? yearSel.value : '';
  var monthFilter = monthSel ? monthSel.value : '';
  var container = document.getElementById('numerical-year-container');
  if (!container) return;

  var anyVisible = false;
  container.querySelectorAll('[data-year-section]').forEach(function(section) {
    var sectionYear = section.getAttribute('data-year-section');
    var sectionMatches = !yearFilter || sectionYear === yearFilter;
    var visibleInSection = 0;
    section.querySelectorAll('[data-months]').forEach(function(card) {
      var months = card.getAttribute('data-months').split(',');
      // OCT1/OCT2 etc are two sittings in the same month - match by prefix.
      var monthMatches = !monthFilter || months.some(function(m) { return m.indexOf(monthFilter) === 0; });
      var show = sectionMatches && monthMatches;
      card.style.display = show ? '' : 'none';
      if (show) visibleInSection++;
    });
    section.style.display = visibleInSection > 0 ? '' : 'none';
    if (visibleInSection > 0) anyVisible = true;
  });

  var empty = document.getElementById('numerical-year-empty');
  if (empty) empty.style.display = anyVisible ? 'none' : 'block';
}

function loadNumerical(id, tab) {
  tab = tab || 'freq';
  var ids = NUM_TAB_CONTAINERS[tab];
  if (!window.NUMERICALS || !ids) return;
  var data = window.NUMERICALS.find(n => n.id === id);
  if (!data) return;

  var listContainer = document.getElementById(ids.list);
  var detailView = document.getElementById(ids.detailView);
  var detailContent = document.getElementById(ids.detailContent);

  if (!listContainer || !detailView || !detailContent) return;

  var order = NUM_TAB_ORDER[tab] || [];
  var idx = order.indexOf(id);
  var prevId = idx > 0 ? order[idx - 1] : null;
  var nextId = (idx !== -1 && idx < order.length - 1) ? order[idx + 1] : null;
  var hasHand = NUM_HANDWRITTEN.indexOf(id) !== -1;

  var html = `
    <div class="note-doc" style="margin-top: 0; padding: 20px; border-radius: 12px; border: 1px solid var(--border2); background: var(--surface);">
      <div class="num-detail-head">
        <div class="n-h1" style="margin-bottom:0;">${data.title}</div>
        <div class="num-detail-nav">
          <button class="anc-btn" ${prevId ? `onclick="loadNumerical('${prevId}', '${tab}')"` : 'disabled style="opacity:.35;cursor:not-allowed"'}>← Prev</button>
          <button class="anc-btn" ${nextId ? `onclick="loadNumerical('${nextId}', '${tab}')"` : 'disabled style="opacity:.35;cursor:not-allowed"'}>Next →</button>
        </div>
      </div>
      <div class="n-crit" style="margin-top: 20px;">
        <div class="icon">🔴</div>
        <div class="body">
          <strong>EXAM QUESTION:</strong> ${data.givenData}
        </div>
      </div>
      ${numYearsBadges(data.years, tab)}

      <!-- TOGGLE - the third segment only exists when a sheet is actually
           available for this numerical, so there is no dead tab to tap. -->
      <div style="display:inline-flex; background:var(--surface2); border-radius:8px; border:1px solid var(--border2); overflow:hidden; margin: 20px 0;">
        <button class="qb-seg-btn active" onclick="numToggle(this, 'num', '${tab}')" style="border-right:1px solid var(--border2);">Numerical Solution</button>
        <button class="qb-seg-btn" onclick="numToggle(this, 'concept', '${tab}')"${hasHand ? ' style="border-right:1px solid var(--border2);"' : ''}>Concept Explanation</button>
        ${hasHand ? `<button class="qb-seg-btn" onclick="numToggle(this, 'hand', '${tab}')">Handwritten Solution</button>` : ''}
      </div>

      <!-- CONTENT AREAS -->
      <div id="dyn-num-${tab}" style="display:block;">
        <div class="n-steps">
          ${data.solutionStepsHtml}
        </div>
        <div style="margin-top:24px; padding:0 20px;">
          <div style="font-weight:700; color:var(--text); margin-bottom:10px;">Final Answers:</div>
          ${data.finalAnswersHtml}
        </div>
      </div>

      <div id="dyn-concept-${tab}" style="display:none; padding-top: 10px;">
        ${data.conceptHtml}
      </div>

      ${hasHand ? `<div id="dyn-hand-${tab}" style="display:none; padding: 12px; background:var(--surface2); border-radius:8px; border:1px solid var(--border2);">
        ${_hwHtml(id)}
      </div>` : ''}
    </div>
  `;
  detailContent.innerHTML = html;

  // View transition - instant, not smooth (the list/detail swap already
  // changes content height, so animating on top of that is jarring), and
  // scrolled to the detail block itself rather than #content's top:0 - the
  // nav row/title/tags/anchors above it are unchanged between list and
  // detail, so scrolling to top:0 just re-shows that same header instead of
  // the question the user actually clicked.
  listContainer.style.display = 'none';
  detailView.style.display = 'block';

  // Numericals can carry wide data tables too (n17's magnetisation table is
  // 8 columns), and those scroll on mobile exactly like the ones in notes,
  // so they need the same "there is more to the right" affordance. This has
  // to run *after* the detail view is displayed: the hint decides whether to
  // show by measuring scrollWidth against clientWidth, and both read 0 while
  // the container is still display:none, so measuring early never shows it.
  _addTableScrollHints(detailContent);

  detailView.scrollIntoView({block: 'start', behavior: 'instant'});
}

function closeNumericalDetail(tab) {
  tab = tab || 'freq';
  var ids = NUM_TAB_CONTAINERS[tab];
  if (!ids) return;
  var listContainer = document.getElementById(ids.list);
  var detailView = document.getElementById(ids.detailView);

  if (!listContainer || !detailView) return;

  detailView.style.display = 'none';
  listContainer.style.display = 'block';
}

function numToggle(btn, target, tab) {
  tab = tab || 'freq';
  var parent = btn.parentElement;
  var buttons = parent.querySelectorAll('.qb-seg-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  ['num', 'concept', 'hand'].forEach(k => {
    var el = document.getElementById('dyn-' + k + '-' + tab);
    if (el) el.style.display = 'none';
  });
  var targetEl = document.getElementById('dyn-' + target + '-' + tab);
  if (targetEl) targetEl.style.display = 'block';

  // The sheet is a ~190KB image, so its src is held back in data-src until
  // this tab is actually opened. display:none alone is not a reliable
  // guarantee against the fetch, and these are large enough to be worth
  // being explicit about.
  if (target === 'hand' && targetEl) _hwReveal(targetEl);
}

// ── HANDWRITTEN SOLUTION SHEETS ──────────────────────────────
// Numericals that have a scanned worked solution under data/handwritten/.
// Kept here rather than as a field inside numericals.js so that adding a
// new sheet is just "drop the .webp in and add its id" - no decrypt and
// re-encrypt round trip on the content file.
var NUM_HANDWRITTEN = ['n01','n02','n03','n04','n05','n06','n08','n10','n12','n14','n15','n16','n17','n38'];

// Where a sheet legitimately lands on a different number from the typed
// solution, say so on the sheet rather than quietly letting the two
// contradict each other. A cadet seeing two answers with no explanation
// assumes one of them is a mistake.
var NUM_HW_NOTE = {
  n17: 'This sheet reads the second field current straight off the table as 0.75&nbsp;A and so arrives at 346.66&nbsp;&Omega;. The typed solution interpolates between the 0.50&nbsp;A and 0.75&nbsp;A rows to get 0.739&nbsp;A, giving 355&nbsp;&Omega;. Both methods are accepted in the exam; the interpolated figure is the more consistent one, since the same interpolation is already used to obtain &Phi;<sub>1</sub>. Note also that the table printed on this sheet is cropped at 1.25&nbsp;A, which is why &Phi;<sub>1</sub>&nbsp;=&nbsp;11.3&nbsp;mWb appears unexplained on it. The full table runs to 2.0&nbsp;A.'
};

function _hwHtml(id) {
  if (NUM_HANDWRITTEN.indexOf(id) === -1) return '';
  var src = '../data/handwritten/' + id + '.webp';
  var note = NUM_HW_NOTE[id]
    ? '<div class="n-info hw-note"><div class="icon">💡</div><div class="body">' + NUM_HW_NOTE[id] + '</div></div>'
    : '';
  // hw-pending hides the <img> and its caption until a src exists. Without
  // it an src-less <img> paints as a broken-image box with its alt text
  // spelled out across the page, which is what the reader sees for the whole
  // time the sheet is held back under Data Saver.
  return '<figure class="hw-figure hw-pending">'
    + '<img class="hw-img" data-src="' + src + '" alt="Handwritten worked solution for numerical ' + id.slice(1) + '"'
    + ' decoding="async" role="button" tabindex="0" aria-label="Open the handwritten solution full screen to zoom">'
    + '<figcaption class="hw-cap">Tap the sheet to open it full screen, where you can pinch or scroll to zoom.</figcaption>'
    + note
    + '</figure>';
}

// Swap data-src to src the first time the tab is opened. With Data Saver on,
// hold it behind an explicit tap instead, matching how diagrams behave.
function _hwShow(img) {
  img.src = img.getAttribute('data-src');
  img.removeAttribute('data-src');
  var fig = img.closest('.hw-figure');
  if (fig) fig.classList.remove('hw-pending');
}

function _hwReveal(container) {
  var img = container.querySelector('.hw-img[data-src]');
  if (!img) return;
  if (window._dataSaver && !container.querySelector('.hw-ds-btn')) {
    var btn = document.createElement('button');
    btn.className = 'hw-ds-btn';
    btn.type = 'button';
    btn.textContent = 'Tap to load handwritten sheet (~190 KB)';
    btn.addEventListener('click', function() {
      btn.remove();
      _hwShow(img);
    });
    img.parentNode.insertBefore(btn, img);
    return;
  }
  if (!window._dataSaver) _hwShow(img);
}

function waitForAccessPromise() {
  return new Promise(function(resolve) {
    (function check() {
      // installGate() itself only creates window._accessPromise once app.js
      // has finished loading - there's a real window right after page load
      // where it doesn't exist yet. Poll for it rather than skipping the
      // wait, or a fast navigation hits isLocked() against the still-default
      // (denied) window._access and wrongly gates a legitimate subscriber.
      if (window._accessPromise) { window._accessPromise.then(resolve); }
      else { setTimeout(check, 50); }
    })();
  });
}

async function ensureNumericalsLoaded(renderFn, errorContainerId) {
  if (window.NUMERICALS) { renderFn(); return; }
  // Content keys arrive asynchronously after login (session check + a real
  // get-content-key round trip) - on a fresh reload this can still be in
  // flight when the user lands on a Numericals tab. Wait for the same
  // access-check promise every other content loader (fetchTopicData) already
  // awaits, instead of racing it and failing permanently.
  await waitForAccessPromise();
  // Numericals is Written-scope content but, unlike every other Written
  // topic, wasn't wired through fetchTopicData's isLocked()/showGate() check
  // - a non-subscriber would just see a generic "connection" error instead
  // of the upgrade prompt. Match the existing gate behavior here too.
  if (window.isLocked && window.isLocked('W08')) {
    showView('num-landing');
    if (window.showGate) window.showGate('written');
    return;
  }
  window._loadEncryptedScript('../data/Written/numericals.js')
    .then(renderFn)
    .catch(function() {
      var c = document.getElementById(errorContainerId);
      if (c) c.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text2)">Could not load numericals. Please check your connection.</div>';
    });
}

function loadNumericalsIfNeeded() { ensureNumericalsLoaded(renderNumericalList, 'numerical-list-container'); }
function loadNumericalsByCatIfNeeded() { ensureNumericalsLoaded(renderNumericalCategoryTopics, 'numerical-cat-topics-container'); }
function loadNumericalsByYearIfNeeded() { ensureNumericalsLoaded(renderNumericalByYear, 'numerical-year-container'); }

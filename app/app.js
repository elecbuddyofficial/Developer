// Dynamic Loader System
window.QD = {}; // Quiz Data Store
window.NOTE_HTML = {}; // HTML Store

window.loadQuizzes = function(topicKey, data) {
    window.QD[topicKey] = data;
};

window.loadNotes = function(topicId, htmlContent) {
    window.NOTE_HTML[topicId] = htmlContent;
    document.getElementById('notes-container').innerHTML = htmlContent;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
    let so = document.getElementById('si-oral'); if(so) so.classList.add('active');
    let injectedView = document.getElementById('notes-container').querySelector('.view');
    if(injectedView) injectedView.classList.add('active');
    buildTopicSideList(topicId);
    injectTopicFooterNav(topicId);
    document.getElementById('content').scrollTo({top:0, behavior:'instant'});
};

window.loadWrittenNotes = function(topicCode, html) {
    window.NOTE_HTML[topicCode] = html;
    document.getElementById('notes-container').innerHTML = html;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
    let sw = document.getElementById('si-written'); if(sw) sw.classList.add('active');
    let injectedView = document.getElementById('notes-container').querySelector('.view');
    if(injectedView) injectedView.classList.add('active');
    buildTopicSideList(topicCode);
    injectTopicFooterNav(topicCode);
    document.getElementById('content').scrollTo({top:0, behavior:'instant'});
};

window.fetchTopicData = function(topicId, topicKey) {
    var tNum = parseInt(topicId.substring(1), 10);
    var tbBadge = document.getElementById('topbar-badge');
    var isW = topicId.startsWith('W');
    var total = isW ? WRITTEN_TOPICS.filter(function(t){return t.notesReady;}).length : TOPICS.length;
    if (tbBadge) tbBadge.innerHTML = '<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg> Topic ' + tNum + ' of ' + total;

    // Inject Script tags dynamically
    if (!window.NOTE_HTML[topicId]) {
        let noteScript = document.createElement('script');
        let pathStr = topicId.startsWith('W') ? '../data/Written/notes/' : '../data/Orals/notes/';
        noteScript.src = pathStr + topicId.toLowerCase() + '_notes.js';
        document.head.appendChild(noteScript);
    } else {
        document.getElementById('notes-container').innerHTML = window.NOTE_HTML[topicId];
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('active'));
        let so = document.getElementById('si-oral'); if(so) so.classList.add('active');
        let injectedView = document.getElementById('notes-container').querySelector('.view');
        if(injectedView) injectedView.classList.add('active');
        buildTopicSideList(topicId);
        injectTopicFooterNav(topicId);
        document.getElementById('content').scrollTo({top:0, behavior:'instant'});
    }

    if (!window.QD[topicKey] && !topicId.startsWith('W')) {
        let quizScript = document.createElement('script');
        quizScript.src = '../data/Orals/quizzes/' + topicId.toLowerCase() + '_quiz.js';
        document.head.appendChild(quizScript);
    }
    
    // URL Routing
    if (!window._isRouting) {
        try { window.history.pushState(null, '', '#notes=' + topicId); } catch(e) {}
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
        btn.innerHTML = '<span class="tl-ic">' + t.icon + '</span>'
            + '<span class="tl-label">' + t.name + '</span>'
            + '<span class="tl-num">' + prefix + String(idx+1).padStart(2,'0') + '</span>';
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
    arr.forEach(function(t, i) {
        if (isW && !t.notesReady) return;
        stripHtml += '<button class="mts-btn'+(t.id===topicId?' mts-active':'')+'"'
            + ' onclick="document.getElementById(\'content\').scrollTo({top:0,behavior:\'instant\'});fetchTopicData(\''+t.id+'\',\''+t.key+'\')">'
            + t.icon+' '+prefix+String(i+1).padStart(2,'0')
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
function setQuizTopic(t){
  ACTIVE_TOPIC=t;
  document.getElementById('qt-t01').style.background=t==='T01'?'var(--blue)':'';
  document.getElementById('qt-t01').style.color=t==='T01'?'#fff':'';
  document.getElementById('qt-t01').className=t==='T01'?'btn':'btn btn-ghost';
  document.getElementById('qt-t02').style.background=t==='T02'?'var(--blue)':'';
  document.getElementById('qt-t02').style.color=t==='T02'?'#fff':'';
  document.getElementById('qt-t02').className=t==='T02'?'btn':'btn btn-ghost';
  

buildCatGrid();
}
var CAT_NAMES={
  /* T01 - Alternator */
  WP:"Working Principle",EX:"Excitation Systems",BL:"Brushless Alternator",AVR:"AVR & Voltage Regulation",RM:"Residual Magnetism & Flashing",SY:"Synchroscope & Synchronisation",LS:"Parallel & Load Sharing",PR:"Protection & Safeties",MT:"Maintenance & IR Testing",AG:"Air Gap",OS:"Overspeed Trip",BT:"Blackout Test",SOL:"SOLAS & Regulations",FT:"Faults & Troubleshooting",SR:"Slip Rings & Brushes",EM:"Emergency Generator",
  /* T02 - High Voltage */
  HV:"HV System Basics",VCB:"VCB & Circuit Breakers",NER:"Neutral Earthing Resistor",SAF:"HV Safety & Permits",GLV:"HV Gloves & PPE",IR:"IR Testing (HV)",IRM:"Insulation Monitoring",BON:"Bonding & Earthing",SHF:"Shaft Earthing",
  /* T04 - Switchboard */
  ACB:"ACB Construction & Arc Quench",POS:"ACB Positions",OCR:"Overcurrent Relay (IDMT)",RPR:"Reverse Power Relay",UFP:"Under-Frequency Protection",BTB:"Bus Tie Breaker",GSP:"Group Starter Panel",EDG:"Emergency Generator",BAT:"Battery Testing & Types",GMD:"GMDSS Battery (SOLAS)",UPS:"UPS Systems",SHC:"Shore Connection",PRT:"Preferential Trip",MSB:"MSB Safeties",MNT:"ACB Maintenance"
};
var CAT_ICONS={WP:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,HV:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,VCB:"🔘",NER:"🔌",MSB:"📦",SAF:"🔐",GLV:"🧤",IR:"🔍",IRM:"📡",BON:"🔗",SHF:"🔩",EX:"🔋",BL:"🔄",AVR:"🎛️",RM:"🔦",SY:"🔁",LS:"⚖️",PR:"🛡️",MT:"🔧",AG:"📐",OS:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></g></svg>`,BT:"⬛",SOL:"📋",FT:"🔍",SR:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/></svg>`,EM:"🔌",ACB:`<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,POS:"📍",OCR:"⏱️",RPR:"🔄",UFP:"📉",BTB:"🔀",GSP:"🎛️",EDG:"🔋",BAT:"🔋",GMD:"📡",UPS:"🔌",SHC:"🏗️",PRT:"⚖️",MNT:"🔧"};

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
];

function buildNotesTopicGrid(){
  var g=document.getElementById('notes-topic-grid');
  if(!g)return; g.innerHTML='';
  TOPICS.forEach(function(t){
    var btn=document.createElement('button');
    btn.className='qcat-btn'+(t.notesReady?'':' disabled-topic');
    if(!t.notesReady) btn.style.opacity='0.4';
    var qs=QD&&QD[t.key]?QD[t.key].length:0;
    btn.innerHTML='<div class="cat-name">'+t.icon+' '+t.id+' - '+t.name+'</div>'
      +'<div class="cat-count">'+(t.notesReady?'Notes ready':'Coming soon')+(qs?' · '+qs+' quiz questions':'')+'</div>'
      +'<div class="cat-bar"><div class="cat-fill" style="width:'+(t.notesReady?'100':'0')+'%"></div></div>';
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
    var qs=QD&&QD[t.key]?QD[t.key].length:0;
    btn.innerHTML='<div class="cat-name">'+t.icon+' '+t.id+' - '+t.name+'</div>'
      +'<div class="cat-count">'+(t.notesReady?'Notes ready':'Coming soon')+'</div>'
      +'<div class="cat-bar"><div class="cat-fill" style="width:'+(t.notesReady?'100':'0')+'%"></div></div>';
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
      var s=document.createElement('script');
      s.src='../data/Orals/quizzes/'+t.id.toLowerCase()+'_quiz.js';
      s.onload=function(){
        var el=document.getElementById('qtgc-'+t.id);
        if(el&&QD&&QD[t.key])el.textContent=QD[t.key].length+' questions';
      };
      document.head.appendChild(s);
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
  var tbBadge = document.getElementById('topbar-badge');
  if (tbBadge) tbBadge.innerHTML = '<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg> Topic ' + tNum + ' of 23';
  
  if (!window.QD || !window.QD[t.key]) {
      let quizScript = document.createElement('script');
      quizScript.src = '../data/Orals/quizzes/' + t.id.toLowerCase() + '_quiz.js';
      quizScript.onload = function() {
          buildCatGrid();
          showView('quiz');
      };
      document.head.appendChild(quizScript);
  } else {
      buildCatGrid();
      showView('quiz');
  }
  
  // URL Routing
  if (!window._isRouting) {
      try { window.history.pushState(null, '', '#quiz=' + topicId); } catch(e) {}
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
  if(n==='welcome' || n==='oral' || n==='written' || n==='notes-picker' || n==='quiz-picker' || n==='quiz' || n==='quiz-bank' || n==='written-notes-picker') {
     var tbBadge = document.getElementById('topbar-badge');
     if (tbBadge) tbBadge.innerHTML = '<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg> MMD Prep';
     // Hide topic sidebar list when leaving notes
     var tsl = document.getElementById('topic-side-list');
     if (tsl) tsl.style.display = 'none';
  }
  document.querySelectorAll('.view').forEach(function(v){v.classList.remove('active')});
  document.querySelectorAll('.sb-item').forEach(function(b){b.classList.remove('active')});
  var v=document.getElementById('view-'+n);if(v)v.classList.add('active');
  var s=document.getElementById('si-'+n);if(s)s.classList.add('active');
  if(n==='oral'){var so=document.getElementById('si-oral');if(so)so.classList.add('active');}
  if(n==='written-notes-picker'){var sw=document.getElementById('si-written');if(sw)sw.classList.add('active');}
  if(n==='notes-picker')buildNotesTopicGrid();
  if(n==='written-notes-picker')buildWrittenTopicGrid();
  if(n==='quiz-picker')buildQuizTopicGrid();
  if(n==='quiz') buildCatGrid();
  
  // URL Routing
  if (!window._isRouting) {
      try {
        if (n === 'welcome') window.history.pushState(null, '', window.location.pathname);
        else window.history.pushState(null, '', '#' + n);
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
      var saved = localStorage.getItem(getQuizStateKey(catId));
      if (saved) {
          showCustomConfirm("Resume Quiz", "You have an unfinished quiz in 'All Categories'.", "Resume Quiz", "Start Fresh", 
              function(){ startQuiz(catId, dName, qs, JSON.parse(saved)); },
              function(){ startQuiz(catId, dName, qs); });
      } else {
          startQuiz(catId, dName, qs);
      }
  };
  grid.appendChild(ab);
  
  var savedP=JSON.parse(localStorage.getItem('eto_progress')||'{}');
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
        var saved = localStorage.getItem(getQuizStateKey(cat));
        if (saved) {
            showCustomConfirm("Resume Quiz", "You have an unfinished quiz in '"+dName+"'.", "Resume Quiz", "Start Fresh",
                function(){ startQuiz(cat, dName, f, JSON.parse(saved)); },
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
              var p = JSON.parse(localStorage.getItem('eto_progress')||'{}');
              delete p[ACTIVE_TOPIC];
              localStorage.setItem('eto_progress', JSON.stringify(p));
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
  QZ.history.push({q:QZ.qs[QZ.i],chosen:chosen,correct:wasCorrect,skipped:false});
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
  QZ.history.push({q:QZ.qs[QZ.i],chosen:null,correct:false,skipped:true});
  QZ.i++;renderQ();
  saveActiveQuiz();
}
function prevQ(){
  if(!QZ.history.length)return;
  var prev=QZ.history.pop();
  // Always decrement QZ.i — both answered and skipped questions incremented it
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
  var opts=q.opts;
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
function saveProgress(topic, cat, score, total) {
  var p = JSON.parse(localStorage.getItem('eto_progress') || '{}');
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
  localStorage.setItem('eto_progress', JSON.stringify(p));
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
  var p = JSON.parse(localStorage.getItem('eto_progress') || '{}');
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
      localStorage.setItem('eto_progress', JSON.stringify(p));
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
  
  var btnHtml = '';
  if (tier === 'bad') {
    btnHtml = '<button class="duo-btn duo-btn-primary needs-practice" onclick="startQuiz(\''+esc(QZ.catId)+'\', \''+esc(QZ.catName)+'\', QZ.qs)">Try Again</button>' +
              '<button class="duo-btn duo-btn-secondary" onclick="exitQuiz()">Categories</button>';
  } else {
    btnHtml = '<button class="duo-btn duo-btn-primary" onclick="exitQuiz()">Continue</button>' +
              '<button class="duo-btn duo-btn-secondary" onclick="startQuiz(\''+esc(QZ.catId)+'\', \''+esc(QZ.catName)+'\', QZ.qs)">Try Again</button>';
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
  
  document.getElementById('quiz-active').innerHTML = html;
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}


buildCatGrid();

// ═══════════════════════════════════════════════════════
// QUIZ BANK
// ═══════════════════════════════════════════════════════

// Full category name lookup — covers all short codes used across 23 topics
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
    row.innerHTML = '<span class="chk">' + (sel ? '✓' : '') + '</span>' + t.icon + ' ' + t.id + ' — ' + t.name;
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
      var s = document.createElement('script');
      s.src = '../data/quizzes/' + t.id.toLowerCase() + '_quiz.js';
      s.onload = function() { qbUpdateCatPills(); qbUpdatePreview(); };
      document.head.appendChild(s);
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
  if (!pool.length) { alert('No questions match your filters. Try selecting more topics or categories.'); return; }
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
  document.getElementById('quiz-topic-label').textContent = label;
  document.getElementById('quiz-topic-h2').textContent = label;
  document.getElementById('topbar-badge').innerHTML = '<svg class="svg-ic" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"/></g></svg> Quiz Bank';
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
      var t = TOPICS.find(function(x) { return x.id === topicId; });
      if (t) fetchTopicData(t.id, t.key);
  } else if (hash.startsWith('quiz=')) {
      var topicId = hash.split('=')[1];
      goToQuizFromNotes(topicId);
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
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js')
      .catch(function() {}); // fail silently
  });
}

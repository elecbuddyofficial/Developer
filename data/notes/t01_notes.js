window.loadNotes("T01", `<div class="view" id="view-notes-t01">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 1 — Alternator &amp; Generator</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai &amp; Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">SOLAS II-1/Reg 40</span>
      <span class="tag tag-purple">Brushless Focus</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-excitation')">Excitation</button>
    <button class="anc-btn" onclick="jumpTo('s-brushless')">Brushless</button>
    <button class="anc-btn" onclick="jumpTo('s-avr')">AVR</button>
    <button class="anc-btn" onclick="jumpTo('s-solas')">SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-residual')">Flashing</button>
    <button class="anc-btn" onclick="jumpTo('s-sync')">Synchronisation</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Parallel Ops</button>
    <button class="anc-btn" onclick="jumpTo('s-protection')">Protections</button>
    <button class="anc-btn" onclick="jumpTo('s-maint')">Maintenance</button>
    <button class="anc-btn" onclick="jumpTo('s-procedures')">Procedures</button>
    <button class="anc-btn" onclick="jumpTo('s-written')">Written Section</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-principle">⚡ Working Principle &amp; Construction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Faraday's Law:</strong> EMF is induced in a conductor when there is relative change in magnetic flux linkage. In a marine alternator, the rotating DC-excited rotor field cuts the stationary stator conductors → AC EMF induced.</div></div>
  <div class="n-grid">
    <div class="n-card"><div class="card-title">Rotor (Rotating)</div><div class="card-val" style="font-size:13px;margin-bottom:6px">DC Field Winding</div><div class="card-desc">Carries excitation current. Creates rotating magnetic field. Driven by diesel prime mover. Low DC current — small slip rings if brush type.</div></div>
    <div class="n-card"><div class="card-title">Stator (Stationary)</div><div class="card-val" style="font-size:13px;margin-bottom:6px">3-Phase AC Output</div><div class="card-desc">Cut by rotor field → AC induced. Output taken directly — no slip rings on output side. High current — safer on stationary side.</div></div>
  </div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why rotor is field, stator is armature?</strong> High-voltage output (<span class="n-val">440V</span>, <span class="n-val">6.6kV</span>) taken from stationary stator — no slip rings for heavy current. Low DC excitation goes to rotor via slip rings (small current). Brushless: no slip rings at all.</div></div>
  <div class="n-h2">Frequency Formula</div>
  <div class="n-formula">f = (P × N) / 120<div class="label">f = frequency (Hz) &nbsp;·&nbsp; N = shaft speed (RPM) &nbsp;·&nbsp; P = number of poles</div></div>
  <table class="n-table">
    <tr><th>Poles</th><th>Speed for <span class="n-val">50 Hz</span></th><th>Speed for <span class="n-val">60 Hz</span></th><th>Application</th></tr>
    <tr><td>2</td><td class="hl">3000 RPM</td><td class="hl">3600 RPM</td><td>Turbo-alternators (steam/gas turbine ships)</td></tr>
    <tr><td>4</td><td class="hl">1500 RPM</td><td class="hl">1800 RPM</td><td>Standard marine diesel-alternator</td></tr>
    <tr><td>6</td><td class="hl">1000 RPM</td><td class="hl">1200 RPM</td><td>Slow-speed diesel drives</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why rated in kVA, not kW?</strong> Winding copper losses (I²R heating) depend only on current — not power factor. kVA = V × I → current determines heating → rating is in kVA. kW = kVA × PF. If ship has 500 kVA at PF 0.8 → useful power = <span class="n-val">400 kW</span>. Motor rated in kW because useful mechanical output is active power.</div></div>

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-excitation">🔋 Excitation Systems</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card"><div class="card-title">1. Separately Excited</div><div class="card-desc">External DC source (batteries/rectifier) → rotor field via slip rings. Oldest method — simple but needs brush maintenance.</div></div>
    <div class="n-card"><div class="card-title">2. Self-Excited Shunt</div><div class="card-desc">Generator output stepped down → rectified → supplies own field via slip rings. Bootstraps from <strong>residual magnetism</strong>.</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">3. ✓ Brushless — Marine Standard</div><div class="card-desc">PMG → AVR → Exciter → Rotating diodes → Main field. <strong>No brushes or slip rings at all.</strong> UMS-suitable.</div></div>
    <div class="n-card" style="border-color:rgba(57,208,216,.3)"><div class="card-title" style="color:var(--cyan)">4. Static Excitation</div><div class="card-desc">Thyristor-controlled rectifier from stator output → field via slip rings. Very fast response. Used on some HV generators.</div></div>
  </div>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-brushless">🔄 Brushless Alternator — Full Construction</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most asked topic in oral exam.</strong> Know the complete excitation chain by heart — every surveyor asks it. PMG → AVR → Exciter field → Exciter armature → Rotating diodes → Main field → Stator output.</div></div>
  <div class="n-h2">3 Machines on One Shaft</div>
  <div class="n-grid-3">
    <div class="n-card" style="border-color:rgba(57,208,216,.3)"><div class="card-title" style="color:var(--cyan)">① PMG — Permanent Magnet Generator</div><div class="card-desc">Permanent magnets on rotor. Output unaffected by main alternator faults. Sole supply to AVR. Eliminates need for residual magnetism to start.</div></div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title" style="color:var(--purple)">② Main Exciter — Reversed Design</div><div class="card-desc"><strong>STATOR</strong> = DC field (from AVR). <strong>ROTOR</strong> = 3-phase AC armature. Reversed vs. normal — output taken on rotating shaft.</div></div>
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">③ Main Alternator — AC Output</div><div class="card-desc">Rotor carries DC (from rotating diodes on shaft). Stator gives 3-phase AC output to main switchboard.</div></div>
  </div>
  <div class="n-h2">Complete Excitation Chain — Memorise This</div>
  <ol class="n-steps">
    <li>PMG generates AC → feeds to AVR</li>
    <li>AVR rectifies and controls DC → feeds to Exciter <strong>stator</strong> field winding</li>
    <li>Exciter rotor (rotating with shaft) cuts exciter stator field → generates 3-phase AC in exciter rotor</li>
    <li>Rotating rectifier diodes (mounted on shaft) convert exciter rotor AC → DC</li>
    <li>DC flows directly to main rotor field winding (on same shaft — no brushes needed)</li>
    <li>Main rotor field cuts main stator conductors → <strong>3-phase AC output to switchboard ✓</strong></li>
  </ol>
  <div class="n-h2">Rotating Diode Failures</div>
  <table class="n-table">
    <tr><th>Fault</th><th>Electrical Effect</th><th>How to Detect</th></tr>
    <tr><td>One diode <strong>OPEN CIRCUIT</strong></td><td><span class="hl">15–20% voltage drop + pulsating output. One exciter phase not rectified → DC ripple in field.</span></td><td>Stroboscope: discolouration/pitting. Voltage ripple on output. Multimeter diode test (machine stopped).</td></tr>
    <tr><td>One diode <strong>SHORT CIRCUIT</strong></td><td><span class="bad">AC superimposed on field DC → severe voltage fluctuation + field winding overheating. More dangerous than open circuit.</span></td><td>Large voltage oscillation. Field winding temperature rises. AVR hunting.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">✅</div><div class="body"><strong>Advantages of brushless for UMS ships:</strong> No brush sparking (safe in gas-risk areas), no brush replacement, no carbon dust, no slip ring maintenance. Runs unattended reliably. Better suited to humid marine environment.</div></div>
  <p class="n-p"><strong style="color:var(--orange)">Zener diode suppressor</strong> fitted across diode bank — clamps transient overvoltages that could destroy the rectifier diodes.</p>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-avr">🎛️ AVR — Automatic Voltage Regulator (Full Detail)</div>
  <p class="n-p">AVR continuously senses output voltage → compares to setpoint → adjusts field current via thyristors to maintain constant terminal voltage.</p>
  <div class="n-h2">AVR Working Sequence</div>
  <ol class="n-steps">
    <li>PT (potential transformer) senses output voltage → stepped down to safe level</li>
    <li>Rectified and compared with internal <strong>reference voltage</strong> (set by voltage trimmer)</li>
    <li>Error signal = difference between reference and actual voltage</li>
    <li>Error signal amplified → fed to thyristor gate control circuit</li>
    <li>Thyristors control DC output to exciter field winding</li>
    <li>More DC → stronger field → higher output voltage. Feedback loop continuously corrects.</li>
  </ol>
  <div class="n-h2">AVR Components</div>
  <ul class="n-list">
    <li>Voltage sensing circuit (PT — potential transformer)</li>
    <li>Reference voltage unit (zener diode based)</li>
    <li>Error amplifier</li>
    <li>Thyristor power stage</li>
    <li>Droop circuit (for reactive load sharing)</li>
    <li>Soft-start circuit (controls voltage build-up rate on start)</li>
    <li>AVR protection (overvoltage limiting)</li>
  </ul>
  <div class="n-h2">AVR Types</div>
  <table class="n-table">
    <tr><th>Type</th><th>Description</th><th>Response</th></tr>
    <tr><td><strong>Static AVR</strong></td><td>Thyristor/SCR controlled — most common on modern ships</td><td class="ok">Fast</td></tr>
    <tr><td>Rotating AVR</td><td>Older type — uses rotating amplifier</td><td class="hl">Slow</td></tr>
    <tr><td>Digital AVR</td><td>Microprocessor based — most precise, programmable, self-diagnostic</td><td class="ok">Very fast</td></tr>
  </table>
  <div class="n-h2">AVR Trimmers (Potentiometers)</div>
  <table class="n-table">
    <tr><th>Trimmer</th><th>Function</th><th>Effect</th></tr>
    <tr><td><strong>Voltage Adjust</strong></td><td>Sets output voltage setpoint (e.g. <span class="n-val">440V</span>)</td><td>↑ = higher voltage &nbsp; ↓ = lower voltage</td></tr>
    <tr><td><strong>Droop</strong></td><td>Reactive (kVAR) load sharing between parallel machines</td><td>↑ = more voltage droop as kVAR load increases</td></tr>
    <tr><td><strong>Stability</strong></td><td>Damping — prevents hunting/oscillation. Too high = sluggish.</td><td>↑ = more damping</td></tr>
    <tr><td><strong>Soft Start</strong></td><td>Controls voltage build-up rate during starting — prevents overvoltage spike</td><td>↑ = slower build-up</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ALWAYS disconnect AVR before megger test.</strong> Megger voltage (500–<span class="n-val">1000V</span> DC) permanently destroys AVR thyristors, transistors and capacitors. Also: AVR back-feeds into winding → false high IR reading.</div></div>

  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-solas">📋 SOLAS Regulations — Full Requirements</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 40.3 — Mandatory Electrical Requirements. Asked by Sanjib, Upendra Kumar, Deswal.</strong></div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>SOLAS Limit</th><th>Notes</th></tr>
    <tr><td>Steady-state voltage</td><td class="hl">± 2.5% of rated</td><td>From no-load to full-load</td></tr>
    <tr><td>Transient voltage</td><td class="hl">± 20% of rated</td><td>During sudden load change</td></tr>
    <tr><td>Voltage recovery time</td><td class="hl">Within 1.5 seconds</td><td>Recover to ±3% of rated</td></tr>
    <tr><td>Steady-state frequency</td><td class="hl">± 5% of rated</td><td></td></tr>
    <tr><td>Transient frequency</td><td class="hl">± 10% of rated</td><td>During sudden load change</td></tr>
    <tr><td>Frequency recovery time</td><td class="hl">Within 5 seconds</td><td></td></tr>
  </table>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">SOLAS II-1/Reg 42 — Emergency DG</div><div class="card-val" style="color:var(--orange)">45 seconds max</div><div class="card-desc">Must auto-start and supply all essential loads within 45 seconds of main power failure.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Emergency DG Endurance</div><div class="card-val" style="color:var(--orange)">18 hrs / 36 hrs</div><div class="card-desc">Passenger ships: 18 hours. Cargo ships: 36 hours minimum continuous operation.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Emergency DG Location</div><div class="card-val" style="color:var(--orange)">Above bulkhead deck</div><div class="card-desc">Outside main machinery space. In separate compartment. Above bulkhead deck for flood protection.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Overspeed Trip Setting</div><div class="card-val" style="color:var(--orange)">110–115% rated RPM</div><div class="card-desc">For 1500 RPM machine → trips at 1650–1725 RPM. Test annually or at drydock.</div></div>
  </div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why main generator NOT at tank top level?</strong><br>① Tank top floods first — SOLAS flood protection. ② Maximum vibration from main engine. ③ No overhead crane access for maintenance. ④ Poor forced ventilation. ⑤ SOLAS II-1/40 requires protection from flooding. Kamath, Wad — ask this specifically.</div></div>

  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-residual">🔦 Residual Magnetism &amp; Flashing</div>
  <p class="n-p"><strong>Residual magnetism</strong> = small magnetic flux retained in rotor core when field current = 0. Causes of loss: long storage, field winding short circuit, magnetic shock (lightning), incorrect polarity during previous work.</p>
  <div class="n-h2">No Voltage at Rated Speed — Systematic Check</div>
  <ol class="n-steps">
    <li>Verify voltmeter with handheld meter (is voltmeter itself faulty?)</li>
    <li>Confirm speed/frequency at rated RPM (check tachometer — governor sensor fault?)</li>
    <li>Check PMG output (brushless) — is PMG supplying AVR?</li>
    <li>Check AVR output (milliamp meter on AVR)</li>
    <li>Check rotating diodes with stroboscope</li>
    <li>Try voltage adjust trimmer on AVR</li>
    <li>Try flashing if residual magnetism lost</li>
    <li>Check field winding resistance — open circuit?</li>
  </ol>
  <div class="n-h2">Flashing Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>For brushless alternator:</strong> Flash the EXCITER STATOR field winding (accessible while running) — NOT the main alternator field (that is rotating — not accessible during running).</div></div>
  <ol class="n-steps">
    <li>Bring alternator to rated speed (ACB must be open)</li>
    <li>Identify exciter field terminals on exciter stator side</li>
    <li>Connect <strong>12–<span class="n-val">24V</span> DC battery</strong> — <em>check polarity first — POSITIVE to POSITIVE</em></li>
    <li>Hold 2–3 seconds only — then disconnect</li>
    <li>Watch voltmeter — voltage should build progressively to rated value</li>
    <li>No buildup? → Wait 30 seconds, try again once. Still no: investigate AVR and field circuit</li>
    <li>Log: date, time, reason, who performed, result</li>
  </ol>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Flashing Risks:</strong><br>• Wrong polarity → DESTROYS residual magnetism — makes problem worse. Re-flash with correct polarity.<br>• Battery sparking → fire risk → keep CO2 extinguisher ready<br>• Duration &gt; 3 seconds → winding damage risk<br>• Insulated leads and rubber gloves mandatory — personnel clear of rotating parts</div></div>
  <div class="n-h2">Confirm Machine Electrically Dead (Residual Magnetism Present)</div>
  <ul class="n-list">
    <li>Even with ACB open and field disconnected — residual magnetism produces small voltage at terminals</li>
    <li>Open ACB and lockout. Disconnect AVR (remove field supply).</li>
    <li>Use approved voltage detector — test between all phases and earth at machine terminals</li>
    <li>Even if voltmeter reads zero: apply earth clamps to stator terminals to discharge any residual charge</li>
    <li>Record in PTW that machine confirmed dead by voltage test</li>
  </ul>

  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-sync">🔁 Synchronisation</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>4 Conditions for Paralleling:</strong><br>① Same voltage &nbsp; ② Same frequency &nbsp; ③ Same phase sequence &nbsp; ④ Phase angle difference = 0°</div></div>
  <div class="n-h2">Synchroscope — Construction &amp; Use</div>
  <p class="n-p"><strong>Construction:</strong> Small induction motor — stator connected to running busbar (creates rotating field at busbar frequency), rotor connected to incoming generator (two coils 90° apart — creates pulsating field). Pointer on rotor shaft.</p>
  <table class="n-table">
    <tr><th>Pointer Behaviour</th><th>Meaning</th><th>Action</th><th>Severity</th></tr>
    <tr><td>Rotating CW fast</td><td><span class="hl">Incoming too fast</span></td><td>Reduce governor on incoming machine</td><td>—</td></tr>
    <tr><td>Rotating CW slowly</td><td class="ok">Just slightly fast — ideal</td><td>Close ACB just before 12 o'clock</td><td>—</td></tr>
    <tr><td>Stopped at 12 o'clock</td><td class="ok">In phase — synchronised</td><td>Close ACB now</td><td>—</td></tr>
    <tr><td>Rotating CCW</td><td><span class="bad">Incoming too slow — WILL MOTOR if ACB closed</span></td><td>Increase governor on incoming machine</td><td>Moderate</td></tr>
    <tr><td>Pointer at 6 o'clock</td><td><span class="bad">180° out of phase → CATASTROPHIC</span></td><td>NEVER close ACB</td><td class="bad">Severe — possible winding burnout</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Close ACB just BEFORE 12 o'clock</strong> — anticipate breaker closing time (~80–100ms). Incoming running SLIGHTLY above busbar frequency (slow CW rotation) — incoming immediately takes slight active load — does NOT motor. If too fast at closure → heavy current surge → may trip on overcurrent.</div></div>
  <div class="n-h2">Wrong Synchronization — Consequences Table</div>
  <table class="n-table">
    <tr><th>Fault Condition</th><th>Consequence</th><th>Severity</th></tr>
    <tr><td>180° out of phase (6 o'clock)</td><td>Massive circulating current — 10–15× rated. Severe mechanical shock to coupling. Possible winding insulation damage.</td><td class="bad">Extremely Severe</td></tr>
    <tr><td>Phase sequence wrong</td><td>Large circulating current even at same voltage — immediate overcurrent trip. Cannot be corrected by synchronisation alone.</td><td class="bad">Severe</td></tr>
    <tr><td>Closed while CCW (motoring)</td><td>Incoming machine runs as induction motor — draws current from busbar — reverse power relay trips</td><td class="hl">Moderate</td></tr>
    <tr><td>Closed too fast (CW fast)</td><td>Incoming takes heavy sudden load — high current surge — may trip on overcurrent</td><td class="hl">Moderate</td></tr>
  </table>
  <div class="n-h2">Synchroscope Fault — Dark Lamp Method</div>
  <ul class="n-list">
    <li>Connect 3 lamps between <em>corresponding phases</em> of incoming and busbar</li>
    <li>Lamps glow when out of phase (voltage difference exists)</li>
    <li>Lamps go dark when in phase (zero voltage difference)</li>
    <li><strong>Close ACB when ALL THREE lamps simultaneously dark</strong></li>
    <li>Limitation: cannot detect wrong phase sequence — verify separately before using this method</li>
    <li>Alternative: separate voltmeters and frequency meters — match, then close when equal</li>
  </ul>

  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-parallel">⚖️ Parallel Operation &amp; Load Sharing</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">Active Power (kW) Sharing</div><div class="card-desc" style="font-size:13px">Controlled by <strong style="color:var(--blue)">GOVERNOR DROOP</strong><br><br>More fuel → more torque → more kW. Adjust governor of under-loaded machine (increase fuel/speed) while reducing other.</div></div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title">Reactive Power (kVAR) Sharing</div><div class="card-desc" style="font-size:13px">Controlled by <strong style="color:var(--purple)">AVR DROOP</strong><br><br>More excitation → more reactive current. Adjust AVR voltage trimmer of under-loaded machine. Do NOT touch governors.</div></div>
  </div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Droop — Why Essential:</strong> Governor droop = speed drops 3–5% from no-load to full load. Without droop: generators fight for load → hunting → instability. Isochronous mode (no droop) = constant frequency regardless of load — CANNOT be used in parallel — causes instability. Only for single generator operation.</div></div>
  <div class="n-h2">Troubleshooting Parallel Problems</div>
  <table class="n-table">
    <tr><th>Symptom</th><th>Cause</th><th>Fix</th></tr>
    <tr><td>Unequal kW output</td><td>Governor droop settings differ</td><td>Adjust governor (speed trimmer) on under-loaded machine</td></tr>
    <tr><td>Equal kW, unequal currents</td><td>AVR droop differs → unequal kVAR sharing</td><td>Adjust AVR droop trimmer — match on both machines</td></tr>
    <tr><td>Load hunting/oscillating</td><td>Governor isochronous mode or wrong droop</td><td>Enable droop, re-tune governor stability</td></tr>
    <tr><td>Machine trips reverse power</td><td>Prime mover stalled → machine motoring</td><td>Open ACB, investigate prime mover</td></tr>
    <tr><td>One machine takes all kVAR</td><td>AVR on other machine at lower setpoint</td><td>Equalise AVR voltage setpoints + droop</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Excitation Lost While Running in Parallel:</strong><br>Generator with lost excitation: output voltage drops. AVR tries to compensate — if fully lost, machine begins absorbing reactive power from bus (acts as induction generator). Reverse power relay may NOT trip (real power still flows forward). Under-excitation relay should activate. If not fitted: machine continues absorbing reactive power → other generator overloads on kVAR → eventually overcurrent trip.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>TRICK QUESTION — Closing ACB on non-running generator:</strong><br>Running generator back-feeds → idle machine runs as <em>induction motor</em> (motoring effect) → draws current from busbar → <strong>Reverse Power Relay trips ACB within seconds.</strong> Surveyor wants to hear "motoring + reverse power trip".</div></div>

  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-protection">🛡️ Protection &amp; Safeties — Complete List</div>
  <table class="n-table">
    <tr><th>Protection</th><th>Setpoint</th><th>Purpose</th><th>Test Method</th></tr>
    <tr><td>Overcurrent Relay (OCR)</td><td>~105–110% rated current (IDMT)</td><td>Protects windings from overload current</td><td>Secondary current injection via CT secondary</td></tr>
    <tr><td>Over-voltage Relay</td><td class="hl">~110% rated voltage</td><td>Protects winding insulation</td><td>Test set injection</td></tr>
    <tr><td>Under-voltage Relay (UVT/NVC)</td><td class="hl">~85% rated voltage</td><td>Prevents connected motors stalling, fail-safe trip on power loss</td><td>Reduce voltage supply to relay</td></tr>
    <tr><td>Differential Relay</td><td>Instantaneous — 10–20% rated current differential</td><td>Internal stator faults (fastest, most sensitive)</td><td>Secondary injection — current imbalance</td></tr>
    <tr><td>Reverse Power Relay</td><td class="hl">5–10% rated kW reverse, 3–5 sec delay</td><td>Prevents motoring if prime mover fails</td><td>Injection test set or shore power transfer</td></tr>
    <tr><td>Earth Fault Relay</td><td>95% stator coverage</td><td>Earth faults in stator winding</td><td>Earth fault simulation</td></tr>
    <tr><td>Bearing Temperature (PT100)</td><td><span class="ok">Alarm 80°C</span></td><td><span class="bad">Trip 95°C</span></td><td>Resistance check of PT100</td></tr>
    <tr><td>Winding Thermistor (stator)</td><td>Class F limit</td><td><span class="bad">Trip at 155°C</span></td><td>Thermistor resistance check</td></tr>
    <tr><td>Preferential Trip (Load Shedding)</td><td>Sustained overload — dashpot timed</td><td>Sheds non-essential loads before tripping generator</td><td>Simulate overload, verify stage shedding</td></tr>
    <tr><td>Overspeed Trip</td><td class="hl">110–115% rated RPM</td><td>Prime mover overspeed protection</td><td>See procedures section</td></tr>
    <tr><td>Over/Under Frequency</td><td>±5% rated</td><td>Trips on abnormal speed</td><td>Frequency injection</td></tr>
  </table>
  <div class="n-h2">Preferential Trip — Stage Details</div>
  <ul class="n-list">
    <li><strong>Stage 1:</strong> Non-essential loads shed — galley, HVAC, deck equipment (~5 sec delay via dashpot)</li>
    <li><strong>Stage 2:</strong> More loads if still overloaded — additional non-essential circuits</li>
    <li><strong>NEVER shed:</strong> Navigation lights, steering gear, fire pump, bilge pump, GMDSS, communications</li>
  </ul>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Dashpot</strong> = pneumatic/hydraulic time delay device on preferential trip relay. Cylinder with piston — flow through needle valve orifice controls delay time. Adjust needle valve: more open = less delay. Allows transient overloads (motor starting) to pass before shedding. Modern alternative: electronic timer relay.</div></div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Why only 95% earth fault protection?</strong> The 5% nearest the star-point (neutral) has too low a voltage to earth to drive the earth fault relay. 100% protection requires special low-frequency injection method.</div></div>

  <!-- ═══ SECTION 10 ═══ -->
  <div class="n-h1" id="s-maint">🔧 Maintenance &amp; IR Testing</div>
  <div class="n-h2">Daily Running Checks (Machine Running — Visual Only)</div>
  <ul class="n-list">
    <li>Check output voltage, current, frequency, power factor, kW on MSB panel</li>
    <li>Listen for unusual noise (rattling, vibration, humming change)</li>
    <li>Check bearing temperature indicators if fitted</li>
    <li>Check cooling air temperature — not excessive</li>
  </ul>
  <div class="n-h2">Megger (IR) Test</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Value</th><th>Meaning</th></tr>
    <tr><td>Megger voltage for <span class="n-val">440V</span> machine</td><td class="hl"><span class="n-val">500V</span> DC</td><td>Standard for LV (&lt;<span class="n-val">1000V</span>) equipment</td></tr>
    <tr><td>Minimum acceptable IR</td><td class="bad">1 MΩ</td><td>Below this → DO NOT ENERGISE</td></tr>
    <tr><td>PI = (10 min reading / 1 min reading)</td><td></td><td>Detects moisture better than single IR reading</td></tr>
    <tr><td>PI &gt; 2</td><td class="ok">Good</td><td>Dry insulation, good condition</td></tr>
    <tr><td>PI 1–2</td><td class="hl">Fair</td><td>Monitor, investigate moisture/contamination</td></tr>
    <tr><td>PI &lt; 1</td><td class="bad">Dangerous</td><td>DO NOT ENERGISE — dry out first</td></tr>
    <tr><td>New winding IR</td><td class="ok">&gt; 100 MΩ expected</td><td>Much higher than minimum</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>After megger test — discharge winding!</strong> Connect high-resistance to earth first, then short to earth. Charged winding capacitance = electric shock risk. Never short directly = arc. Disconnect AVR before testing.</div></div>
  <div class="n-h2">Planned Maintenance Checklist (Machine Stopped — With PTW)</div>
  <ul class="n-list">
    <li>Check IR using megger — record all readings in PMS log</li>
    <li>PI test: IR(10 min) / IR(1 min) — PI &gt; 2 = good</li>
    <li>Clean air filters and ventilation ducts (blocked = overheating)</li>
    <li>Blow out with low-pressure dry compressed air (removes carbon/dirt)</li>
    <li>Oil contamination in windings: clean using approved electrical contact cleaner (NOT water)</li>
    <li>Tighten all terminal connections (vibration causes loosening)</li>
    <li>Check rotating diodes: multimeter diode test — forward ~<span class="n-val">0.6V</span>, reverse OL. Replace if failed.</li>
    <li>Check anti-condensation heaters: verify heater ON when machine stopped (interlock)</li>
    <li>Inspect and lubricate bearings per manufacturer schedule</li>
    <li>Test AVR stability under load — is terminal voltage steady?</li>
    <li>Check brush pressure if fitted: <em>150–200 g/cm²</em></li>
    <li>Dress slip ring surface if pitting found (fine emery cloth, insulated holder). Monitor sparking 30 min after.</li>
    <li>Visual inspection of stator winding — check for discolouration, cracks, loose slots</li>
    <li>Air gap measurement using feeler gauge (see procedures)</li>
  </ul>
  <div class="n-h2">Winding Maintenance in Cold Region / Drydock</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">Moisture condenses on windings in cold drydock — IR drops significantly. Actions: (1) Keep anti-condensation heaters energised — maintain winding temperature above dew point. (2) Circulate warm dry air through machine. (3) Take regular IR readings — if below 1 MΩ → dry out with increased heater current or temporary external heaters. (4) Keep machine sealed from external atmosphere as much as possible. (5) Cover ventilation openings with clean cloth — prevent dust/moisture ingress.</div></div>
  <div class="n-h2">Machine After Rewinding — Checks Before Commissioning</div>
  <ol class="n-steps">
    <li>Visual: check winding neatness, varnish application, no damage</li>
    <li>IR test: <span class="n-val">500V</span> megger — all phases to earth, between phases — minimum 100 MΩ new winding</li>
    <li>Winding resistance balance: all 3 phases equal within 1% — unequal = rewinding fault</li>
    <li>Hi-Pot test: apply 2× rated voltage + <span class="n-val">1000V</span> for 1 minute — checks insulation integrity</li>
    <li>No-load run: check current, temperature, noise, vibration</li>
    <li>Check rotation direction before coupling to prime mover</li>
    <li>Air gap measurement</li>
    <li>Obtain test certificate from rewind shop. Report to chief engineer.</li>
  </ol>

  <!-- ═══ SECTION 11 ═══ -->
  <div class="n-h1" id="s-procedures">📝 Key Procedures</div>
  <div class="n-h2">Air Gap Measurement</div>
  <ul class="n-list">
    <li>Use <em>feeler gauges</em> inserted through ventilation/inspection slots</li>
    <li>Measure at <em>4 positions per pole</em> (top 12, bottom 6, left 9, right 3 o'clock)</li>
    <li>Typical value: 1.5–<span class="n-val">3 mm</span> (refer maker manual)</li>
    <li>Acceptable variation: <em>±10% of mean value</em></li>
    <li>Too small: rotor may touch stator — catastrophic mechanical failure</li>
    <li>Too large: higher reluctance → more excitation needed → AVR overworks → less efficient</li>
    <li>Uneven gap: Unbalanced Magnetic Pull (UMP) → vibration → bearing wear → hot spots in stator</li>
    <li>Likely cause of uneven gap: worn bearing, bent shaft, incorrect installation after rewind</li>
  </ul>
  <div class="n-h2">Overspeed Trip Test — 3 Methods</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Trip setting: 110–115% of rated speed.</strong> For 1500 RPM machine → trips at 1650–1725 RPM. Test annually or at drydock per class/SOLAS. Follow company SMS and maker manual.</div></div>
  <div class="n-h2" style="color:var(--text2)">Method 1 — Actual Overspeed (with manufacturer approval)</div>
  <ol class="n-steps">
    <li><strong>Open ACB</strong> — machine must be running off-load. Inform bridge and chief engineer.</li>
    <li>Gradually increase governor/fuel until mechanical overspeed governor trips</li>
    <li>Note actual trip RPM with tachometer — compare to specification (110–115%)</li>
    <li>Reset trip mechanism, reconnect governor, return to service</li>
    <li>Record in engine log: date, trip speed, result. Risk: engine damage — must be in good condition.</li>
  </ol>
  <div class="n-h2" style="color:var(--text2)">Method 2 — Simulated Test (Preferred for Electronic Overspeed)</div>
  <ol class="n-steps">
    <li>Disconnect speed sensor signal from overspeed module</li>
    <li>Connect signal generator/calibrator to overspeed module input</li>
    <li>Gradually increase simulated speed signal until overspeed relay activates</li>
    <li>Record activation value — compare with set value from documentation</li>
    <li>Reconnect actual sensor — verify normal operation. Advantage: no actual engine overspeed risk.</li>
  </ol>
  <div class="n-h2" style="color:var(--text2)">Method 3 — Inject Fault Signal (Governor-Integrated Electronic Overspeed)</div>
  <ul class="n-list">
    <li>Per maker manual — inject test signal directly into overspeed module test port</li>
    <li>Module activates trip relay — verify trip coil fires ACB trip</li>
  </ul>
  <div class="n-h2">Blackout Test Procedure (Full — Including PSC)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Emergency DG must start and supply essential loads within <strong>45 seconds</strong> (cargo ship) — SOLAS requirement. Any failure = non-compliance = PSC deficiency. Passenger ships: 30 seconds.</div></div>
  <ol class="n-steps">
    <li>Obtain Master/bridge permission — safe navigational situation (open sea, good visibility)</li>
    <li>Brief all engine room and bridge watchkeepers</li>
    <li>Verify emergency DG: fuel ok, oil ok, pre-heaters on, starting battery charged, in AUTO mode</li>
    <li>Note all equipment currently running</li>
    <li>Trip all main switchboard ACBs → start stopwatch immediately</li>
    <li>Verify emergency DG auto-starts — note exact time. Check ESB closes automatically.</li>
    <li>Verify ALL essential loads fed: navigation lights, steering gear, GMDSS, fire alarm, bilge</li>
  </ol>
  <div class="n-h2">Sequential Load Restoration After Blackout</div>
  <ul class="n-list">
    <li><strong>Step 1:</strong> Start main generator 1 — build to rated voltage — synchronise and close ACB</li>
    <li><strong>Step 2:</strong> Transfer essential loads from ESB to MSB</li>
    <li><strong>Restoration sequence (with 30 sec–2 min delays between each):</strong></li>
    <li>Separator/purifier → Cooling water pumps → Auxiliary blower (M/E) → FW generator → Starting air compressor → L.O. pump → M/E start</li>
    <li>Last: Deck equipment, galley, HVAC — accommodation loads last</li>
    <li>Do NOT start all simultaneously — simultaneous starting current surge would overload generator</li>
    <li>Record: time to auto-start, full restoration time, any anomalies. Report to master and chief engineer.</li>
  </ul>

  <!-- ═══ SECTION 12: SURVEYOR Q&A ═══ -->
  
  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <div class="n-h1" id="s-surveyor-qa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are the exact Q&A formats used by surveyors. Study these answers — they are scored based on specific points. Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad all ask these.</div></div>

  <div class="n-h2">Synchroscope, Paralleling &amp; Wrong Synchronization</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr><td>Describe synchroscope construction and working</td><td>Small induction-motor type instrument. Stator → busbar (rotating field at busbar frequency). Rotor → incoming generator (two coils 90° apart). CW pointer = incoming faster. CCW = incoming slower. Stationary at 12 o'clock = in phase — close ACB. Close just before 12 to account for breaker closing time.</td></tr>
    <tr><td>Synchroscope not working — how will you parallel?</td><td>Dark lamp method: connect 3 lamps between corresponding phases of incoming and busbar. ALL THREE dark simultaneously = in phase → close ACB. Verify phase sequence separately first. Use separate voltmeters and frequency meters. Log: synchroscope unserviceable, alternate method used.</td></tr>
    <tr><td>Junior engineer closed breaker without synchronising — what happens?</td><td>Massive circulating current — depends on phase angle at closure. Worst case (180°): current 10–15× rated — severe mechanical shock to coupling, possible winding insulation damage, overcurrent relay trips. Both generators may trip. Can cause permanent winding damage or coupling failure.</td></tr>
  </table>

  <div class="n-h2">Load Sharing &amp; Droop</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr><td>Two generators — one showing <span class="n-val">600 kW</span>, other <span class="n-val">200 kW</span>. What is the problem?</td><td>Unequal active (kW) load — governor droop settings differ. Fix: adjust governor of under-loaded machine (more fuel/speed) while reducing overloaded machine. Watch kW meters balance. Do NOT touch AVR (that affects kVAR not kW).</td></tr>
    <tr><td>Two generators — kW equal but current different. What is the problem?</td><td>Equal kW but different current = unequal reactive (kVAR) sharing. AVR issue — droop settings differ. Fix: increase AVR voltage trimmer of under-loaded machine (more excitation → more kVAR). Decrease AVR of over-loaded machine. Do NOT touch governors — kW balance is already correct.</td></tr>
    <tr><td>What is droop and why is it important?</td><td>Intentional slight reduction in output (speed or voltage) as load increases. Governor droop 3–5%: speed drops as active load rises → stable kW sharing in parallel. AVR droop 3–5%: voltage drops as reactive load rises → stable kVAR sharing. Without droop: generators hunt and are unstable — one takes all load.</td></tr>
  </table>

  <div class="n-h2">Protection &amp; Maintenance</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr><td>How do you test the overcurrent relay at survey?</td><td>Secondary injection: rack ACB to TEST position. Disconnect CT secondary from relay. Connect injection test set to relay current coils. Inject calibrated AC current at 2×, 5×, 10× rated. Record trip time at each multiple. Compare with IDMT curve. Reconnect, return to service. Record results.</td></tr>
    <tr><td>How do you test reverse power relay when VCB is racked out?</td><td>Method 1 (injection): use power relay test set — inject simulated reverse power (voltage + current at required phase angle) → verify trips at 5–10% rated kW. Method 2 (shore power): when ship on shore power and generator ACB closed for transfer — reverse power flows → verify relay trips. Method 3: integral test button — verifies wiring and trip coil only.</td></tr>
    <tr><td>Generator running at rated load but voltage is not <span class="n-val">440V</span> — what will you check?</td><td>1. Voltmeter calibration. 2. AVR voltage trimmer setting. 3. AVR input (PT supply). 4. AVR output DC to exciter field (voltmeter). 5. Exciter field resistance — partial open circuit? 6. Adjust voltage trimmer. 7. Check loose connections on AVR terminals. Report to chief engineer if uncorrectable.</td></tr>
    <tr><td>Machine received from rewind shop — checks before commissioning?</td><td>Visual check of winding quality. IR test (<span class="n-val">500V</span> megger, min 100 MΩ). Winding resistance balance (all 3 phases within 1%). Hi-Pot test (2× rated V + <span class="n-val">1000V</span>, 1 minute). No-load run: check current, temperature, vibration. Verify rotation direction. Air gap measurement. Obtain test certificate.</td></tr>
    <tr><td>PSC inspector wants blackout test — describe procedure</td><td>Inform bridge — get clearance — ship in safe condition. Brief all staff. Verify emergency DG in AUTO. Trip all main ACBs — start timer. Verify auto-start and ESB closes within 45 seconds. Check all essential loads supplied. Start main generator, synchronise, transfer loads from ESB to MSB. Restore auxiliaries in sequence with time delays. Record all times. Present records to PSC inspector.</td></tr>
  </table>

  <!-- ═══ SECTION 13: QUICK REVISION ═══ -->

<div class="n-h1" id="s-synchroscope">🕐 Synchroscope — Construction, Working & Paralleling</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by EVERY surveyor</strong> (Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad). Know synchroscope construction, working direction, and why you close just before 12 o'clock.</div></div>
<p class="n-p">A synchroscope indicates two things: <strong>(1)</strong> speed (frequency) difference between the incoming generator and the busbar, and <strong>(2)</strong> phase angle difference between incoming and busbar.</p>

<div class="n-h2">Construction</div>
<ul class="n-list">
  <li>A small <strong>single-phase induction-motor-type instrument</strong>.</li>
  <li><strong>Stator:</strong> fed from busbar voltage — creates a rotating magnetic field at busbar frequency.</li>
  <li><strong>Rotor:</strong> fed from incoming generator voltage — has two coils wound 90° apart — creates a pulsating field.</li>
  <li>The rotor carries no mechanical power — only the phase difference drives the needle rotation.</li>
</ul>

<div class="n-h2">Working — Needle Direction</div>
<table class="n-table">
  <tr><th>Condition</th><th>Needle Behaviour</th></tr>
  <tr><td>Incoming frequency = busbar</td><td class="ok">Frequency difference = 0 → needle <strong>stands still</strong></td></tr>
  <tr><td>Incoming <strong>faster</strong> than busbar</td><td class="hl">Needle rotates <strong>CLOCKWISE</strong></td></tr>
  <tr><td>Incoming <strong>slower</strong> than busbar</td><td class="hl">Needle rotates <strong>ANTICLOCKWISE</strong></td></tr>
  <tr><td>In phase (12 o'clock)</td><td class="ok"><strong>SAFE TO CLOSE BREAKER</strong></td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Note:</strong> Faster clockwise rotation = larger frequency difference. Aim for slow clockwise rotation before closing.</div></div>

<div class="n-h2">Paralleling Procedure</div>
<ol class="n-steps">
  <li>Match voltage — incoming voltage = busbar voltage (using voltmeter).</li>
  <li>Match phase sequence — use phase sequence meter before first connection.</li>
  <li>Adjust governor — bring incoming frequency <strong>slightly ABOVE</strong> busbar (needle rotating slowly clockwise).</li>
  <li>Close ACB <strong>just BEFORE 12 o'clock</strong> — so incoming takes load immediately (not motored).</li>
  <li>After closing — adjust governor to balance kW. Adjust AVR to balance kVAR.</li>
</ol>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why close just BEFORE 12 o'clock (not exactly at 12)?</strong> Mechanical closing time of the ACB ≈ 50–100 ms. Closing slightly early compensates for this delay. With the frequency slightly high (slow clockwise rotation), the incoming generator arrives at sync exactly as the breaker closes — it immediately takes a small active load and does not motor.</div></div>

<div class="n-h2">Wrong Synchronisation Consequences</div>
<table class="n-table">
  <tr><th>Synchroscope Position</th><th>Consequence</th><th>Severity</th></tr>
  <tr><td>6 o'clock (180° out of phase)</td><td class="bad">CATASTROPHIC — huge circulating current, severe mechanical shock to coupling, possible damage to alternator windings and prime mover</td><td class="bad">Extremely severe — winding burnout</td></tr>
  <tr><td>Clockwise (too fast)</td><td class="hl">Incoming takes heavy sudden load — high current surge — may trip on overcurrent</td><td class="hl">Moderate — likely trip</td></tr>
  <tr><td>Anticlockwise (too slow)</td><td class="hl">Incoming is MOTORED by the bus — reverse power relay should trip it</td><td class="hl">Moderate — reverse power trip</td></tr>
  <tr><td>Phase sequence wrong</td><td class="bad">Large circulating current even at same voltage — immediate overcurrent trip</td><td class="bad">Severe — correct before reconnect</td></tr>
</table>

<div class="n-h2">Paralleling Without Synchroscope</div>
<div class="n-grid" style="grid-template-columns:1fr 1fr">
  <div class="n-card"><div class="card-title">Dark Lamp Method</div><div class="card-desc">Three lamps connected between corresponding phases of incoming and busbar. When all three lamps are <strong>DARK</strong> (off) → in phase → close breaker. <strong>Limitation:</strong> cannot detect wrong phase sequence (all dark even at 180° out with wrong sequence).</div></div>
  <div class="n-card"><div class="card-title">Bright Lamp Method</div><div class="card-desc">Lamps connected differently — brightest when in phase → close at maximum brightness.</div></div>
  <div class="n-card"><div class="card-title">Check Synchronise Relay</div><div class="card-desc">If fitted — automatically prevents closing unless all conditions are met.</div></div>
  <div class="n-card"><div class="card-title">Voltmeter Method</div><div class="card-desc">Two voltmeters (busbar + incoming) — match voltages, watch frequency meters, close when frequencies equal and in phase.</div></div>
</div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — Slow & Clockwise:</strong> "Catch the needle going slowly UP to 12, close it just before noon." Slow clockwise = incoming slightly fast = takes load on closing, never motors.</div></div>

<div class="n-h1" id="s-residual">✨ Residual Magnetism & Field Flashing</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>4th most-asked topic.</strong> "Generator started at rated RPM but no voltage" — give all reasons and actions as 2E. Residual magnetism is the first suspect; restore by flashing.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Residual Magnetism:</strong> the small amount of magnetic flux retained in the rotor core material even when field current is zero. Essential for self-excited generators — this residual flux generates a small initial voltage → AVR uses it to supply field current → field builds up → full voltage builds up.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>If residual magnetism is lost:</strong> when the alternator is started and brought to rated speed, <strong>no voltage develops</strong> (zero output). The generator runs but voltmeter reads zero volts. Restore by <strong>flashing the field</strong>.</div></div>

<div class="n-h2">Generator at Rated RPM but No Voltage — Reasons & Actions (2E answer)</div>
<table class="n-table">
  <tr><th>Possible Cause</th><th>Action</th></tr>
  <tr><td>Residual magnetism lost</td><td class="ok">Restore by flashing the field</td></tr>
  <tr><td>AVR fault</td><td class="ok">Check AVR output (milliamp meter), replace if faulty</td></tr>
  <tr><td>Rotating rectifier diode failure</td><td class="ok">Stop machine, test diodes with multimeter</td></tr>
  <tr><td>PMG fault</td><td class="ok">Check PMG output</td></tr>
  <tr><td>Field winding open circuit</td><td class="ok">Check winding resistance</td></tr>
  <tr><td>Speed too low despite RPM showing correct (governor sensor fault)</td><td class="ok">Verify actual frequency on frequency meter</td></tr>
  <tr><td>Voltmeter / meter fault</td><td class="ok">Cross-check with another meter (esp. if recently calibrated)</td></tr>
</table>

<div class="n-h2">Field Flashing Procedure</div>
<ol class="n-steps">
  <li>Use a DC source — typically a <span class="n-val">12V</span> or <span class="n-val">24V</span> battery.</li>
  <li>Connect positive to the field (+) and negative to field (−) terminals momentarily through a resistor/lamp.</li>
  <li>Apply for a few seconds — this re-establishes residual magnetism in the rotor core.</li>
  <li>Observe voltage build-up; remove the flashing supply once the AVR takes over and voltage builds.</li>
  <li>Always observe correct polarity — wrong polarity reduces/cancels residual magnetism.</li>
</ol>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "No volts at full revs → flash the field." Always check frequency first to confirm speed, then AVR, then diodes, then flash.</div></div>

<div class="n-h1" id="s-surveyor-qa-extra">🎓 Additional Surveyor Q&A</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the function of the rotating rectifier diodes?<br><strong>Ideal Answer:</strong> They are mounted on the rotor shaft between the exciter armature and the main field. They convert the 3-phase AC produced by the exciter armature into DC, which feeds directly to the main alternator field winding (also on the rotor) — all on the same rotating shaft. This eliminates the need for slip rings and brushes to transfer DC to the rotating field.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Deswal):</strong> Generator running at rated load but voltage is not <span class="n-val">440V</span> — what will you check?<br><strong>Ideal Answer:</strong> (1) Voltmeter calibration. (2) AVR voltage trimmer setting. (3) AVR input — is PT supplying correct voltage? (4) AVR output — correct DC to exciter field (measure). (5) Exciter field resistance for partial open circuit. (6) If consistently low, increase voltage trimmer. (7) Check for loose AVR terminal connections. Report to chief engineer if not correctable.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why must the AVR be disconnected before meggering the alternator?<br><strong>Ideal Answer:</strong> The AVR contains sensitive semiconductors — thyristors, diodes, zener diodes, transistors. The megger applies high DC voltage (<span class="n-val">500V</span>, or <span class="n-val">2500V</span> for HV) which would permanently destroy these components. Disconnect the AVR from all connections — including the PMG output — before meggering stator, field, or any connected circuit. Replace the AVR if accidentally damaged.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> One diode is short circuit in the rotating rectifier — what happens?<br><strong>Ideal Answer:</strong> A shorted diode allows reverse current flow → an AC component appears in the DC field current → excessive heat in the field winding. Result: severe voltage fluctuation, waveform distortion, rotor field overheating, possible winding burnout if not detected quickly — more dangerous than an open circuit. Detect via AVR hunting, voltage instability, electrical vibration, and field over-temperature if a thermistor is fitted.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Frequency Examples to quote:</strong> 4-pole @ 1500 RPM → f = (4×1500)/120 = <span class="n-val">50 Hz</span>. 6-pole @ 1000 RPM → f = (6×1000)/120 = <span class="n-val">50 Hz</span>.</div></div>


<div class="n-h1" id="s-synchroscope">🕐 Synchroscope — Construction, Working & Paralleling</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by EVERY surveyor</strong> (Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad). The synchroscope construction and working is the single most asked sub-topic in this entire chapter. Know it cold.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>What it indicates:</strong> (1) Speed/frequency difference between incoming generator and busbar. (2) Phase angle difference between incoming and busbar.</div></div>
<div class="n-h2">Construction</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">Type</div><div class="card-val" style="font-size:13px;margin-bottom:6px">Single-Phase Induction Motor Instrument</div><div class="card-desc">Small motor-type instrument. Rotor carries no mechanical load — only phase difference drives the needle.</div></div>
  <div class="n-card"><div class="card-title">Stator</div><div class="card-val" style="font-size:13px;margin-bottom:6px">Fed from BUSBAR</div><div class="card-desc">Creates a rotating magnetic field at busbar frequency.</div></div>
  <div class="n-card"><div class="card-title">Rotor</div><div class="card-val" style="font-size:13px;margin-bottom:6px">Fed from INCOMING Generator</div><div class="card-desc">Two coils wound 90° apart → creates a pulsating field. The phase difference between bus and incoming drives needle rotation.</div></div>
</div>
<div class="n-h2">Working</div>
<table class="n-table">
  <tr><th>Condition</th><th>Needle Behaviour</th></tr>
  <tr><td>Incoming f = busbar f</td><td class="ok">Frequency difference = 0 → needle stands STILL</td></tr>
  <tr><td>Incoming FASTER than busbar</td><td class="hl">Needle rotates CLOCKWISE</td></tr>
  <tr><td>Incoming SLOWER than busbar</td><td class="hl">Needle rotates ANTICLOCKWISE</td></tr>
  <tr><td>Larger frequency difference</td><td>Faster needle rotation</td></tr>
  <tr><td>Needle at 12 o'clock</td><td class="ok">Both machines exactly IN PHASE = SAFE TO CLOSE BREAKER</td></tr>
</table>
<div class="n-h2">Paralleling Procedure</div>
<ol class="n-steps">
  <li>Match voltage — incoming voltage = busbar voltage (using voltmeter)</li>
  <li>Match phase sequence — use phase sequence meter before first connection</li>
  <li>Adjust governor — bring incoming frequency slightly <strong>ABOVE</strong> busbar (needle rotating SLOWLY CLOCKWISE)</li>
  <li>Close ACB just <strong>BEFORE 12 o'clock</strong> — so incoming takes load immediately (not motored)</li>
  <li>After closing — adjust governor to balance <strong>kW</strong>. Adjust AVR to balance <strong>kVAR</strong></li>
</ol>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why close JUST BEFORE 12 o'clock (not exactly at 12)?</strong> Mechanical closing time of ACB = ≈50–100 ms. Close slightly early to compensate for this delay. With frequency slightly high (slow clockwise) and breaker closed just before 12, the incoming generator comes into sync exactly as the contacts make → immediately takes slight active load → does not motor.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "<strong>FAST = CLOCKWISE = Close before 12.</strong>" Slow needle, rotating clockwise, breaker shut just before top dead centre. kW with governor, kVAR with AVR.</div></div>

<div class="n-h2">What Happens at Wrong Synchronisation</div>
<table class="n-table">
  <tr><th>Synchroscope Position</th><th>Consequence</th><th>Severity</th></tr>
  <tr><td>6 o'clock (180° out of phase)</td><td class="bad">CATASTROPHIC — huge circulating current, severe mechanical shock to coupling, possible winding & prime-mover damage</td><td class="bad">Extremely severe — possible winding burnout</td></tr>
  <tr><td>Clockwise (too fast)</td><td class="hl">Incoming takes heavy sudden load — high current surge — may trip on overcurrent</td><td>Moderate — likely trip</td></tr>
  <tr><td>Anticlockwise (too slow)</td><td class="hl">Incoming is MOTORED by bus — reverse power relay should trip it</td><td>Moderate — reverse power trip activates</td></tr>
  <tr><td>Phase sequence wrong</td><td class="bad">Large circulating current even at same voltage — immediate overcurrent trip</td><td class="bad">Severe — correct before reconnecting</td></tr>
</table>

<div class="n-h2">Paralleling Without Synchroscope</div>
<div class="n-grid" style="grid-template-columns:1fr 1fr">
  <div class="n-card"><div class="card-title">Dark Lamp Method</div><div class="card-desc">Three lamps connected between corresponding phases of incoming and busbar. When all three lamps are <strong>DARK</strong> (off) → generators in phase → close breaker. <strong>Limitation:</strong> cannot detect wrong phase sequence (all dark even at 180° out with wrong sequence).</div></div>
  <div class="n-card"><div class="card-title">Bright Lamp Method</div><div class="card-desc">Lamps connected differently — brightest when in phase — close at maximum brightness.</div></div>
  <div class="n-card"><div class="card-title">Voltmeter Method</div><div class="card-desc">Two voltmeters (busbar + incoming). Match voltages, watch frequency meters, close when both frequencies equal and in phase.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Check-Synchronise Relay</div><div class="card-desc">If fitted, automatically inhibits ACB closing unless voltage, frequency and phase conditions are all met. Essential interlock.</div></div>
</div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Sanjib, Vishwanathan, Deswal, Kamath, Gupta, Wad):</strong> Explain synchroscope construction and working.<br><strong>Ideal Answer:</strong> It is a single-phase induction-motor-type instrument. The stator is fed from the busbar and produces a rotating field at busbar frequency. The rotor is fed from the incoming generator and has two coils 90° apart producing a pulsating field. The interaction makes the needle rotate at the difference frequency. Incoming faster → clockwise; slower → anticlockwise; equal → needle stationary. At 12 o'clock both are in phase → safe to close. I close just before 12 o'clock to compensate for the ACB mechanical closing delay of about 50–100 ms.</div></div>

<div class="n-h1" id="s-residual-flash">🧲 Residual Magnetism & Flashing the Field</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>"Generator not developing voltage" is the 2nd most asked question in this topic.</strong> Always link it back to residual magnetism, AVR, diodes, PMG and field.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is residual magnetism?</strong> The small amount of magnetic flux retained in the rotor core material even when the field current is zero. In self-excited machines this residual flux generates a small initial voltage → AVR uses this to supply field current → field builds up → output voltage builds up (bootstrapping).</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>If residual magnetism is lost:</strong> when the alternator is started and brought to rated speed, no voltage develops (zero output). The generator runs normally but the voltmeter reads zero. Restored by <strong>flashing the field</strong>.</div></div>
<div class="n-h2">Generator Started at Rated RPM but No Voltage — Reasons & Actions</div>
<table class="n-table">
  <tr><th>Possible Cause</th><th>Action</th></tr>
  <tr><td class="hl">Residual magnetism lost</td><td>Restore by flashing the field</td></tr>
  <tr><td class="hl">AVR fault</td><td>Check AVR output, replace if faulty</td></tr>
  <tr><td class="hl">Rotating rectifier diode failure</td><td>Stop machine, check diodes with multimeter</td></tr>
  <tr><td>PMG fault</td><td>Check PMG output</td></tr>
  <tr><td>Field winding open circuit</td><td>Check winding resistance</td></tr>
  <tr><td>Actual speed low (governor/sensor fault)</td><td>Verify actual frequency — RPM meter may read wrong</td></tr>
  <tr><td>Voltmeter / meter fault</td><td>Confirm with second meter if recently calibrated</td></tr>
</table>
<div class="n-h2">Flashing Procedure</div>
<ol class="n-steps">
  <li>Stop the generator (or have it running at no load as per maker's manual)</li>
  <li>Identify the exciter field terminals (after disconnecting AVR if required)</li>
  <li>Apply a DC source (<span class="n-val">12V</span> or <span class="n-val">24V</span> battery) momentarily across the exciter field, observing correct polarity</li>
  <li>Apply for a few seconds only — re-establishes residual magnetism in the core</li>
  <li>Remove the DC source, reconnect AVR, restart and confirm voltage builds up to rated value</li>
  <li>If correct polarity gives no build-up, reverse the battery polarity and retry</li>
</ol>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "<strong>No volts? Flash, AVR, Diodes, PMG, Field, Speed, Meter.</strong>" Always check frequency first to confirm the prime mover is actually at speed before chasing electrical faults.</div></div>

<div class="n-h1" id="s-survey-qa-extra">🎓 Additional Surveyor Q&A — Excitation, Diodes & Voltage</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What are the types of excitation systems?<br><strong>Ideal Answer:</strong> (1) Separately excited — external DC source via slip rings. (2) Self-excited shunt — generator supplies its own field via rectifier and slip rings, needs residual magnetism to start. (3) Brushless (most common) — PMG + exciter + rotating rectifiers on the same shaft, no slip rings or brushes. (4) Static excitation — thyristor rectifier from stator output to field via slip rings, very fast response. Modern ships predominantly use brushless for reliability and low maintenance.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the function of the rotating rectifier diodes?<br><strong>Ideal Answer:</strong> They are a diode wheel mounted on the rotor shaft between the exciter armature and the main field. They convert the 3-phase AC produced by the exciter armature into DC and feed it directly to the main alternator field winding, also on the rotor. Because everything rotates together, no slip rings or brushes are needed to transfer DC to the field.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> One diode is OPEN circuit in the rotating rectifier — what happens?<br><strong>Ideal Answer:</strong> One phase of the exciter AC is not rectified → unbalanced DC to the main field → uneven field current → voltage fluctuation and increased ripple → output voltage drop of about 15–20%. At no load it may appear normal but under load it shows fluctuation. Detect by checking output voltage under load, measuring exciter output, and visual inspection with the machine stopped.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> One diode is SHORT circuit — what happens?<br><strong>Ideal Answer:</strong> A shorted diode lets current flow in reverse → an AC component appears in the DC field current → excessive heat in the field winding → severe voltage fluctuation and waveform distortion → possible winding burnout if not caught quickly. More dangerous than an open circuit. Detect by AVR hunting, voltage instability, electrical vibration, and field over-temperature if a thermistor is fitted.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Generator running at rated load but voltage is not <span class="n-val">440V</span> — what will you check?<br><strong>Ideal Answer:</strong> (1) Voltmeter calibration. (2) AVR voltage trimmer setting. (3) AVR input — is the PT feeding correct voltage? (4) AVR output DC to exciter field. (5) Exciter field resistance for partial open circuit. (6) If consistently low, increase the voltage trimmer. (7) Check for loose AVR terminal connections. Report to the chief engineer if it cannot be corrected.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why must AVR be disconnected before meggering the alternator?<br><strong>Ideal Answer:</strong> The AVR contains sensitive semiconductors — thyristors, diodes, zener diodes, transistors. The megger applies high DC voltage (<span class="n-val">500V</span> or <span class="n-val">2500V</span> for HV) which would permanently destroy these components. Disconnect the AVR from all connections including the PMG output before meggering the stator or field windings. Replace the AVR if it is accidentally damaged.</div></div>

<div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS recovery values to note:</strong> Steady-state voltage ±2.5%; transient voltage ±20%; voltage recovery to within ±3% in ≤1.5 s. Steady frequency ±5%; transient frequency ±10%; frequency recovery in ≤5 s (SOLAS Ch. II-1, Part D).</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Synchroscope construction + working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Stator=busbar. Rotor=incoming. CW=fast. CCW=slow. Close just before 12.</td></tr>
    <tr><td>Generator no voltage — reasons + actions</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Residual magnetism, AVR fault, diodes, PMG, field OC, speed, voltmeter fault.</td></tr>
    <tr><td>Brushless alternator — full working</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>PMG → AVR → Exciter field(S) → Exciter armature(R) AC → Rotating diodes → Main field(R) → Stator AC output.</td></tr>
    <tr><td>Flashing procedure</td><td class="hl">⭐⭐⭐⭐⭐</td><td>12/<span class="n-val">24V</span> battery to exciter field. Correct polarity. 2–3 sec only. Machine at rated speed.</td></tr>
    <tr><td>Alternator safeties — all with values</td><td class="hl">⭐⭐⭐⭐⭐ Multiple surveyors</td><td>OCR, Reverse power (5–10%), Differential, OV (110%), UV (85%), Preferential trip, Overspeed (110–115% RPM), Earth fault, Bearing temp (80°/95°C), Winding temp (155°C).</td></tr>
    <tr><td>Droop — governor and AVR</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Governor droop = kW sharing. AVR droop = kVAR sharing. Both 3–5%. Equal on both machines.</td></tr>
    <tr><td>Two DGs not sharing equal load — reason</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Unequal kW: governor issue. Unequal kVAR/current: AVR issue.</td></tr>
    <tr><td>Diode open/short in running alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Open: voltage fluctuation, 15–20% drop. Short: severe fluctuation, field overheating.</td></tr>
    <tr><td>IR test of alternator</td><td class="hl">⭐⭐⭐⭐</td><td>Disconnect AVR first. <span class="n-val">500V</span> megger. Min 1 MΩ. PI &gt; 2 = good. Discharge after.</td></tr>
    <tr><td>Air gap — measurement and effects</td><td class="hl">⭐⭐⭐⭐</td><td>Feeler gauge, 4 positions per pole. Too small: rub. Too large: AVR overworks. Uneven: vibration.</td></tr>
    <tr><td>Overspeed trip test</td><td class="hl">⭐⭐⭐⭐</td><td>Actual or simulated. Trip at 110–115% RPM. Record in log.</td></tr>
    <tr><td>Blackout test — full procedure</td><td class="hl">⭐⭐⭐⭐</td><td>Brief staff, trip ACBs, verify DG starts in 45 sec, restore in sequence with time delays.</td></tr>
    <tr><td>SOLAS voltage limits</td><td class="hl">⭐⭐⭐⭐ Sanjib, Upendra, Deswal</td><td>Steady ±2.5%. Transient ±20%. Recovery 1.5 sec. Frequency: ±5% steady, ±10% transient, 5 sec recovery.</td></tr>
    <tr><td>Why generator not at tank top</td><td class="hl">⭐⭐⭐⭐ Kamath, Wad</td><td>Flooding risk, vibration, no crane access, poor ventilation, SOLAS flood protection.</td></tr>
    <tr><td>Slip ring pitting — action</td><td class="hl">⭐⭐⭐</td><td>Reduce load, check brush pressure (150–200 g/cm²), fine emery cloth, check brush grade. Machine slip rings in lathe at drydock if severe.</td></tr>
    <tr><td>Close ACB on non-running generator</td><td class="hl">⭐⭐⭐⭐ Trick question</td><td>Back-feeds as induction motor → motoring → reverse power relay trips ACB. Answer: "motoring + reverse power trip".</td></tr>
  </table>

</div>
</div>



<!-- QUIZ -->`);

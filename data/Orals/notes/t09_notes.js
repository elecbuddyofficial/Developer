window.loadNotes("T09", `<div class="view" id="view-notes-t09">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T09')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 9 - Ship Machinery (Electrical Side)</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">OMD · Viscotherm · Steering</span>
      <span class="tag tag-purple">Boiler · EM Brake · Purifier</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-omd')">OMD</button>
    <button class="anc-btn" onclick="jumpTo('s-crankcase-relief')">Crankcase Relief</button>
    <button class="anc-btn" onclick="jumpTo('s-visco')">Viscotherm</button>
    <button class="anc-btn" onclick="jumpTo('s-steering')">Steering Gear</button>
    <button class="anc-btn" onclick="jumpTo('s-steering-alarms')">Steering Alarms</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler')">Boiler BMS</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler-alarms')">Boiler Alarms</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler-level')">Boiler Level</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler-types')">Boiler Types &amp; Combustion</button>
    <button class="anc-btn" onclick="jumpTo('s-jcw')">JCW System</button>
    <button class="anc-btn" onclick="jumpTo('s-embrake')">EM Brake</button>
    <button class="anc-btn" onclick="jumpTo('s-thruster')">Bow Thruster</button>
    <button class="anc-btn" onclick="jumpTo('s-cpp')">CPP Electrical</button>
    <button class="anc-btn" onclick="jumpTo('s-purifier')">Purifier</button>
    <button class="anc-btn" onclick="jumpTo('s-purifier-start')">Purifier Start</button>
    <button class="anc-btn" onclick="jumpTo('s-reefer')">Refrigeration</button>
    <button class="anc-btn" onclick="jumpTo('s-reefer-types')">Reefer Types</button>
    <button class="anc-btn" onclick="jumpTo('s-reefer-lo')">Reefer LO</button>
    <button class="anc-btn" onclick="jumpTo('s-tev')">TEV</button>
    <button class="anc-btn" onclick="jumpTo('s-engine')">Main Engine</button>
    <button class="anc-btn" onclick="jumpTo('s-dashpot-gov')">Dashpot/Gov</button>
    <button class="anc-btn" onclick="jumpTo('s-gov-types')">Governor Types</button>
    <button class="anc-btn" onclick="jumpTo('s-overspeed-test')">Overspeed Test</button>
    <button class="anc-btn" onclick="jumpTo('s-lo-alarm')">LO Alarm</button>
    <button class="anc-btn" onclick="jumpTo('s-tc-rpm')">TC RPM Sensor</button>
    <button class="anc-btn" onclick="jumpTo('s-aircomp')">Air Compressor</button>
    <button class="anc-btn" onclick="jumpTo('s-windlass')">Windlass/Winch</button>
    <button class="anc-btn" onclick="jumpTo('s-autotension')">Auto-Tension</button>
    <button class="anc-btn" onclick="jumpTo('s-crane-safeties')">Crane Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-crane-speed')">Crane Speed</button>
    <button class="anc-btn" onclick="jumpTo('s-cargo-pump')">Cargo Pump</button>
    <button class="anc-btn" onclick="jumpTo('s-stern-tube')">Stern Tube Seal</button>
    <button class="anc-btn" onclick="jumpTo('s-pumproom')">Pump Room</button>
    <button class="anc-btn" onclick="jumpTo('s-ows')">OWS / 15ppm</button>
    <button class="anc-btn" onclick="jumpTo('s-smoke-density')">Smoke Meter</button>
    <button class="anc-btn" onclick="jumpTo('s-salinometer')">Salinometer</button>
    <button class="anc-btn" onclick="jumpTo('s-antiheeling')">Anti-Heeling</button>
    <button class="anc-btn" onclick="jumpTo('s-bilge-inj')">Bilge Valve</button>
    <button class="anc-btn" onclick="jumpTo('s-deadship')">Dead Ship</button>
    <button class="anc-btn" onclick="jumpTo('s-ums-prearrival')">UMS/Pre-Arrival</button>
    <button class="anc-btn" onclick="jumpTo('s-drydock')">Drydock Duties</button>
    <button class="anc-btn" onclick="jumpTo('s-lifeboat-air')">Lifeboat Air</button>
    <button class="anc-btn" onclick="jumpTo('s-lifting2026')">Lifting 2026</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 1: OIL MIST DETECTOR                          -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-omd">🔍 Oil Mist Detector (OMD)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath, Sanjib - all surveyors ask this.</strong> Know principle, reference tube purpose, calibration (zero + span), alarm actions, and why you cannot open crankcase immediately.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle - Photoelectric Light Extinction:</strong> Rotary sampling valve draws crankcase gas from each cylinder unit in sequence. Calibrated light source shines through measuring tube onto photocell. Oil mist droplets scatter and absorb light - photocell output decreases proportional to concentration. <strong>Reference tube:</strong> Sealed clean-air tube with identical optical path length - differential comparison compensates for lamp aging and contamination drift. Make: <span class="n-val">Graviner</span> (most common), Dräger MK8, Kidde.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-omd.webp" alt="Oil Mist Detector — rotary sampling valve, measuring tube, reference tube, photocell, lamp" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAwAwCdASocABEAPu1ur1IppiQiqAgBMB2JaWScABu/yG8AAP7wlY7yR1p2AxmNfdr3P4r59EB8HQWNTsxndMI9e/By+g+uul7FqPpRDk1WyHtUcVBhtmAAAAA=">
    <div class="note-diagram-cap">Fig. OMD (Graviner) — rotary valve samples each cylinder in sequence; photocell compares measuring tube (crankcase gas) vs reference tube (clean air); differential output triggers alarm at 2.5 mg/L</div>
  </div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Alarm Threshold</div><div class="card-val"><span class="n-val">2.5 mg/L</span></div><div class="card-desc">Newer units: <span class="n-val">2.0 mg/L</span>. LEL of oil mist ≈ <span class="n-val">50 mg/L</span> - gives <span class="n-val">20×</span> safety margin before explosion risk.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Response Time</div><div class="card-val"><span class="n-val">&lt; 20 seconds</span></div><div class="card-desc">From mist entering sampling point to alarm activation - fast enough for protective action before catastrophic failure.</div></div>
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">SOLAS Mandate</div><div class="card-val"><span class="n-val">&gt; 2250 kW</span></div><div class="card-desc">SOLAS Ch II-1 Reg 16: mandatory for engines with power &gt; 2250 kW OR cylinder bore &gt; 300 mm.</div></div>
  </div>

  <div class="n-h2">Calibration Procedure (Graviner)</div>
  <ol class="n-steps">
    <li><strong>Isolate:</strong> Inform bridge and ECR. Inhibit/bypass OMD alarm output to prevent false trips during calibration.</li>
    <li><strong>Purge:</strong> Flush all sample tubes and reference tube with clean, dry instrument-quality air for minimum <span class="n-val">2 minutes</span>.</li>
    <li><strong>Zero calibration:</strong> With only clean air in tubes, adjust zero potentiometer until display reads exactly <span class="n-val">0.00 mg/L</span>.</li>
    <li><strong>Span calibration:</strong> Introduce certified calibration gas of known concentration (e.g. <span class="n-val">2.5 mg/L</span>) through calibration port. Adjust span potentiometer until display matches certified value.</li>
    <li><strong>Alarm check:</strong> Verify alarm relay activates at correct setpoint. Check slow-down/shutdown relay at higher threshold (typically <span class="n-val">3.5–4 mg/L</span>).</li>
    <li><strong>Restore:</strong> Purge calibration gas. Return system to normal. Remove inhibit/bypass.</li>
    <li><strong>Log:</strong> Record date, calibration gas batch/certificate number, zero and span readings, technician name, next due date. Frequency: every <span class="n-val">3 months</span>, or after lamp/photocell replacement.</li>
  </ol>

  <div class="n-h2">Alarm Actions</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Never open crankcase immediately after OMD alarm.</strong> Residual oil mist above LEL + oxygen introduction = crankcase explosion. Wait minimum <span class="n-val">20 minutes</span> after engine stops before entering crankcase. Verify hot surfaces have cooled sufficiently.</div></div>
  <ol class="n-steps">
    <li>Verify alarm is genuine - check OMD reading, identify elevated unit</li>
    <li>Reduce engine to dead slow / initiate slow-down. Notify bridge, Chief Engineer, OOW.</li>
    <li>If reading persists or increases - stop engine completely</li>
    <li>Post engine room watch. Monitor continuously.</li>
    <li>Wait minimum <span class="n-val">20 minutes</span> after stopping before crankcase entry</li>
    <li>Inspect bearings, piston crowns, cylinder liners for scoring or hot spots</li>
    <li>Identify root cause before any restart attempt</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why slow-down not immediate shutdown?</strong> Sudden shutdown causes thermal shock - rapid temperature differential risks cracking cylinder liners and pistons. Slow-down allows lubrication system to keep circulating oil to cool the overheating bearing. Immediate blackout stop at sea endangers navigational safety. Full shutdown mandatory if mist concentration continues rising.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> OMD = crankcase smoke detector. Photoelectric | Reference tube = lamp compensation | <span class="n-val">2.5 mg/L</span> alarm | <span class="n-val">20 min</span> wait before opening | SOLAS &gt; <span class="n-val">2250 kW</span>. Zero = clean baseline. Span = accuracy with certified gas.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 2: CRANKCASE RELIEF VALVES                    -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-crankcase-relief">💥 Crankcase Explosion - Relief Valves &amp; Shutdown Logic</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam gap - links directly to OMD. Surveyors ask: "what happens if OMD alarm is ignored?" Know relief valve working, Heartland-type, and the difference between OMD alarm vs crankcase explosion trip.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why crankcase explosions occur:</strong> Hot bearing surface heats trapped lubricating oil above flash point → oil vapourises → white mist cloud forms inside crankcase → OMD detects this early stage. If engine is NOT slowed/stopped → continued heat input → mist concentration reaches LEL (<span class="n-val">50 mg/L</span>) → ignition by same hot surface → PRIMARY explosion inside crankcase. Pressure relief valves open → hot gases/flame jet exits crankcase → contacts oxygen in ER → SECONDARY explosion outside = far more destructive and potentially fatal.</div></div>

  <div class="n-h2">Crankcase Relief Valve (Heartland / Burgess Type)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction &amp; Working:</strong> Spring-loaded disc valve fitted to the crankcase at each cylinder unit. Normally held closed by spring force. During explosion: pressure pulse opens valve against spring → pressure vents to atmosphere rapidly. <strong>Oil deflector/flame trap (mesh gauze):</strong> Fitted in front of valve. Allows pressure to vent but prevents flame jet from exiting - traps burning droplets and quenches flame. As pressure falls after venting, spring closes valve immediately - prevents air ingress (re-oxygenation prevents secondary explosion).<br><br><strong>SOLAS requirement:</strong> One relief valve per cylinder for bore &gt; 200 mm. Also mandatory crankcase ventilation to funnel/safe location to prevent accumulation of crankcase oil vapour in ER.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-crankcase-relief.webp" alt="Crankcase explosion relief valve cross-section — spring, disc, flame trap gauze" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAAAwBACdASocABEAPu1oqk8ppiOiMBgIATAdiWcADCsNwAK55teWsaqxTXwA/u3QdCySLoXL7GlsGhPMu2+MpUx081HzbKxZDVBIok8TycMP6Ba1RrRb+n/A6V9s2jACvuIkMU0ZEkcvZw+CGBU5d5IgVsaLPgAAAAA=">
    <div class="note-diagram-cap">Fig. Crankcase Relief Valve (Heartland/Burgess) — spring holds disc closed; explosion pressure lifts disc; mesh flame trap quenches exiting gas; spring re-closes immediately to prevent air ingress</div>
  </div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">OMD ALARM Level</div>
      <div class="card-val"><span class="n-val">2.5 mg/L</span></div>
      <div class="card-desc"><strong>Stage 1 - Early Warning.</strong> Mist concentration rising but far below LEL. Action: Slow-down, notify bridge/CE, monitor. Bridge CAN override slow-down in navigational emergency.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">CRANKCASE EXPLOSION TRIP</div>
      <div class="card-val"><span class="n-val">Hardware Trip</span></div>
      <div class="card-desc"><strong>Stage 2 - Actuated by pressure sensor inside crankcase detecting explosion pulse.</strong> Full engine shutdown. Cannot be overridden from bridge. Separate from OMD circuit.</div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Common exam trap:</strong> OMD alarm triggers slow-down (bridge can override). A physical crankcase explosion triggers a hardware TRIP via crankcase pressure switch (bridge cannot override - same as overspeed or LO low-low). These are two separate protection layers. Do NOT confuse them.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory - CRANKCASE sequence:</strong> Hot bearing → oil vapour → OMD alarm → slow-down (bridge overridable) → if ignored → mist reaches LEL → explosion → pressure trips engine (no override) → relief valve opens → flame trap quenches jet → spring closes valve. Secondary explosion prevented by no air ingress after valve closes.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 3: VISCOTHERM                                 -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-visco">🌡️ Viscosity Controller (Viscotherm)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Gupta, Deswal ask this.</strong> Know WHY viscosity control is better than temperature control - the critical exam question about different fuel grades.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Motor drives a spindle at constant speed through flowing HFO. Torque required to maintain constant speed is proportional to viscosity. Higher viscosity = more torque = higher motor current. Current converted to <span class="n-val">4–20 mA</span> signal → PI controller → compares to setpoint → adjusts steam control valve (<span class="n-val">3–15 psi</span> pneumatic) on HFO heater. Steam valve is <strong>fail-close</strong> type - loss of air or signal closes steam safely.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Main Engine Target</div><div class="card-val"><span class="n-val">10–14 cSt</span></div><div class="card-desc">At injector. Too high = poor atomisation. Too low = increased wear, pump seizure risk.</div></div>
    <div class="n-card" style="border-color:var(--cyan)"><div class="card-title" style="color:var(--cyan)">Auxiliary Engine Target</div><div class="card-val"><span class="n-val">14–20 cSt</span></div><div class="card-desc">AE injectors have less robust fuel systems - operate at slightly higher viscosity.</div></div>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why viscosity NOT temperature control?</strong> Different HFO grades have different viscosity-temperature relationships. RMG 380 requires <span class="n-val">~130–140°C</span> to reach <span class="n-val">14 cSt</span>. RME 180 only needs <span class="n-val">~100–110°C</span> to reach <span class="n-val">14 cSt</span>. If temperature-controlled to 130°C when running RME 180 - fuel reaches only <span class="n-val">65–70 cSt</span> - far too viscous for good atomisation. Viscosity controller measures the actual injection property and compensates automatically for any fuel grade change.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PI controller - why not PID?</strong> Proportional action gives immediate response. Integral action eliminates steady-state offset. Derivative (D) is not used because viscosity changes are slow and the rotating spindle signal contains mechanical vibration noise from fuel pumps - derivative action would amplify this noise causing erratic valve hunting.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Spindle current ∝ viscosity | <span class="n-val">10–14 cSt</span> ME | <span class="n-val">14–20 cSt</span> AE | PI controller | Fail-close steam valve | Different fuel grades = same temperature ≠ same viscosity → viscosity control wins.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 4: STEERING GEAR                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-steering">⚙️ Steering Gear (Electrical Systems)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Nair - frequently asked.</strong> Know SOLAS overload rule, rudder hunting diagnosis, solenoid valve operation, phase failure relay.</div></div>

  <div class="n-h2">Follow-Up (FU) vs Non-Follow-Up (NFU) Mode</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>FU Mode (normal):</strong> Closed-loop servo. Helm transmitter sends commanded position → solenoid directional control valve directs hydraulic oil to RAM → rudder moves → hunting gear (mechanical/electrical feedback linkage) cancels solenoid signal exactly when demanded angle reached → stops. <strong>NFU Mode:</strong> Solenoid energised directly by lever - no feedback. Rudder moves continuously while lever held.</div></div>

  <div class="n-h2">SOLAS Requirements</div>
  <table class="n-table">
    <tr><th>Requirement</th><th>SOLAS Reference</th><th>Value</th></tr>
    <tr><td>Two independent power units</td><td><span class="n-val">Ch II-1 Reg 29</span></td><td>Vessels <span class="n-val">&gt; 10,000 GT</span></td></tr>
    <tr><td>Main gear hard over to hard over</td><td><span class="n-val">Ch II-1 Reg 29</span></td><td class="hl"><span class="n-val">35° to 30°</span> in <span class="n-val">28 seconds</span> at max speed</td></tr>
    <tr><td>Auxiliary gear response</td><td><span class="n-val">Ch II-1 Reg 29</span></td><td class="hl">Hard over in <span class="n-val">60 seconds</span> at <span class="n-val">½ speed or 7 kts</span></td></tr>
    <tr><td>Motor overload protection</td><td><span class="n-val">Ch II-1 Reg 29</span></td><td class="bad">ALARM ONLY - never trip</td></tr>
    <tr><td>Steering gear test before departure</td><td><span class="n-val">Ch II-1 Reg 30</span></td><td>Within <span class="n-val">12 hours</span> before departure</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-steering-gear.webp" alt="Steering gear electrical system — FU/NFU control, solenoid valve, hunting gear feedback, phase failure relay" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRqgAAABXRUJQVlA4IJwAAACwBACdASocABoAPu1urlKppiQiqAgBMB2JaRwAAANMficE52yP+NNmpbH0usfAAP7x0T6/ppyEbEw/v/AdWYuBXQiLqh5uhmnb9GHZtqRcxF3e1RiiEnAUiqm9466yrEKhupN019UJAfBDeGsPdUyciJMiOXk8sXIIj0ZQ2/pGGR/C9Tz2fFs/X1JhJlIEp5/A86tbHM86/EAAAAA=">
    <div class="note-diagram-cap">Fig. Steering Gear Electrical System — FU closed-loop servo with hunting gear feedback, solenoid directional control valve, phase failure relay</div>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS - Motor Overload = ALARM ONLY, never trip.</strong> Loss of steering at sea is more dangerous than a burning motor. Alarm alerts EOOW and bridge - crew investigate while steering is maintained.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Phase Failure Relay - mandatory on steering gear:</strong> Monitors all 3 phases. Trips circuit if any phase is lost, reversed, or has voltage imbalance. Single-phasing = motor draws <span class="n-val">1.73×</span> normal current → rapid overheating. Phase reversal = motor runs backwards → rudder turns wrong way → severe navigation hazard.</div></div>

  <div class="n-h2">Rudder Hunting - Diagnosis and Cure</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Rudder hunting:</strong> Continuous oscillation about demanded position. Cause: hunting gear (feedback linkage) worn, disconnected, or maladjusted - cancellation signal absent/incorrect → solenoid remains energised → overshoot → reverse → continuous oscillation. Diagnosis: switch to NFU mode - if hunting stops, fault is in FU feedback path. Fix: check hunting gear pin, linkage wear, feedback potentiometer.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> FU = hunting gear cancels solenoid when angle reached | NFU = no feedback, hold lever | Phase fail relay MANDATORY | Overload = ALARM ONLY (SOLAS) | 2 units &gt; <span class="n-val">10k GT</span> | Test within <span class="n-val">12 hours</span> before departure.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 5: STEERING ALARMS                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-steering-alarms">🚨 Steering Gear Alarms &amp; Trips</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Sanjib, Gopikrishna, Sudhir - very commonly asked.</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">ALARMS (Warning Only - No Trip)</div>
      <div class="card-desc">
        1. Hydraulic oil low level<br>
        2. Hydraulic oil high temperature<br>
        3. Phase failure (loss of one phase to motor)<br>
        4. Pump motor overload (before trip)<br>
        5. Control power failure
      </div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">TRIPS (Automatic Shutdown)</div>
      <div class="card-desc">
        1. Motor overload trip (sustained overcurrent)<br>
        2. Hydraulic oil high pressure trip (electrical)<br>
        3. Rudder hunting trip (continuous oscillation)<br>
        4. Power unit isolation (emergency shutdown)
      </div>
    </div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS Requirement:</strong> Steering gear must have independent power from emergency source. Two separate power circuits. Audible alarm on bridge for any fault.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Resetting hydraulic lock (Hunting):</strong> Switch to NFU (Non-Follow-Up) control. Move tiller manually. Identify cause. Reset trip. Return to FU mode.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 5b: STEERING AUTO-ISOLATION                   -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-steering-isolation">⚙️ Steering Gear - Automatic Isolation &amp; Alarm System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 29 requirement - surveyors ask: "How does hydraulic low-oil-level auto-isolation work? What happens to steering capacity?" Know the two-stage alarm/action sequence and the 50% torque rule.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Background - Amoco Cadiz (1978):</strong> The <em>Amoco Cadiz</em> grounded off Brittany after a steering gear hydraulic pipe fracture caused total loss of hydraulic fluid. With no automatic isolation, the entire system drained. The disaster prompted SOLAS to mandate automatic isolation of leaking steering units so the remaining unit retains steering capability.</div></div>

  <div class="n-h2">Two-Stage Auto-Isolation Sequence</div>
  <table class="n-table">
    <tr><th>Stage</th><th>Level Sensor</th><th>Automatic Action</th><th>Manual Action Required</th></tr>
    <tr><td class="hl"><strong>Stage 1 - Low oil level</strong></td><td>Upper float switch in hydraulic reservoir</td><td class="hl">Audible and visual alarm on bridge AND in steering gear room</td><td>Engineer investigates; prepares to switch to standby unit</td></tr>
    <tr><td class="bad"><strong>Stage 2 - Low-low oil level</strong></td><td>Lower float switch in hydraulic reservoir</td><td class="bad"><strong>Automatic:</strong> Running pump stops. Solenoid isolation valve closes, sealing off the leaking unit. Standby power unit starts automatically.</td><td>Engineer confirms isolated unit, locates leak, traces and repairs</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>After auto-isolation:</strong> The vessel retains the standby steering unit, which alone provides <span class="n-val">at least 50% of design rudder torque</span>. SOLAS II-1/Reg 29 requires each independent power unit to be capable of moving the rudder from <span class="n-val">35° each side to 30° opposite</span> in <span class="n-val">≤ 28 seconds</span> at maximum ahead service speed for cargo ships.<br><br>
  <strong>Alarm requirement:</strong> The bridge must receive both the low-level alarm and the low-low isolation alarm - audible and visual. The alarm must activate even when the steering gear is on standby mode.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO maintenance checks:</strong> (1) Test low-level and low-low float switches at every scheduled interval. (2) Confirm solenoid isolation valve operates on test signal. (3) Verify standby auto-start logic in steering gear control panel. (4) Ensure spare hydraulic oil is carried - a Stage 2 trigger means significant fluid loss that must be replenished before next voyage. Record all steering gear tests in the official log - required by SOLAS and class surveys.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 6: BOILER BMS                                 -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-boiler">🔥 Boiler BMS - Burner Management System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Wad, Nair, Deswal ask all boiler trips.</strong> Know every trip, flame failure lockout procedure, pre-purge requirement, and UV scanner vs photocell difference.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BMS Working Principle:</strong> Dedicated safety PLC or hardwired interlock system supervising all safety conditions before, during, and after burner operation. Enforces mandatory pre-purge using FD fan before ignition. Flame scanner continuously monitors for flame - fuel solenoid closes immediately on flame loss → lockout state.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-boiler-bms.webp" alt="Boiler management system block diagram — sensors, BMS controller, solenoids, FD fan, UV scanner" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACQAwCdASocABEAPu1wsFKppiSiqAgBMB2JaQAALkKm/n2bw8FAAP7xzMM3+7VKoXWPazASdkQbfP86QxzvGifEvL+9xBoxvig5LDsSMtpdSY0HNP5ScoAAAAA=">
    <div class="note-diagram-cap">Fig. Boiler BMS — sensors (steam pressure, drum level, fuel pressure) feed BMS controller; controller sequences pre-purge → ignition → flame detection (UV scanner) → modulating control; any trip closes fuel solenoid and locks out</div>
  </div>

  <div class="n-h2">All Boiler Trips - Know Every One</div>
  <table class="n-table">
    <tr><th>#</th><th>Trip</th><th>Reset</th><th>Notes</th></tr>
    <tr><td>1</td><td><strong>Low-low water level</strong></td><td class="bad">Lockout - manual</td><td>Immediate trip, no delay. Prevents dry firing and tube explosion.</td></tr>
    <tr><td>2</td><td><strong>Flame failure</strong></td><td class="bad">Lockout - manual</td><td>Fuel solenoid closes. Must identify and fix cause before reset.</td></tr>
    <tr><td>3</td><td><strong>High steam pressure</strong></td><td class="bad">Manual reset</td><td>Set <span class="n-val">~3–5%</span> above working pressure. Before mechanical safety valve lifts.</td></tr>
    <tr><td>4</td><td>Low fuel oil pressure</td><td class="hl">Auto</td><td>Insufficient fuel supply for atomisation.</td></tr>
    <tr><td>5</td><td>Low atomising steam pressure</td><td class="hl">Auto</td><td>Steam-atomised burners only. Poor atomisation = unburnt fuel hazard.</td></tr>
    <tr><td>6</td><td>High flue gas temperature</td><td class="hl">Auto</td><td>Soot fire or excess combustion indication.</td></tr>
    <tr><td>7</td><td>FD fan failure</td><td class="hl">Auto</td><td>Loss of combustion air - immediate burner shutdown.</td></tr>
    <tr><td>8</td><td>HFO high temperature</td><td class="bad">Manual</td><td>Trip at <span class="n-val">160°C</span> - fire risk.</td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Pre-purge is MANDATORY before every ignition attempt.</strong> FD fan must run minimum <span class="n-val">3–5 air changes</span> of furnace volume (typically <span class="n-val">2-minute</span> timer) to purge residual unburnt fuel/gas. Without purge: residual fuel + ignition spark = furnace explosion. Applies to initial start AND after any lockout reset.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Flame failure lockout:</strong> After flame failure, boiler LOCKS OUT - cannot re-ignite automatically. Requires manual reset by engineer. Purpose: prevents repeated ignition attempts into fuel-rich furnace. <strong>Ignition transformer:</strong> Steps up ship's <span class="n-val">220V/440V AC</span> to <span class="n-val">10,000–15,000V</span> (10–15 kV) for spark ignition. De-energised once flame established. Flame must be detected within <span class="n-val">10 seconds</span> or lockout occurs.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>UV Scanner vs photocell:</strong> UV scanner detects flame by sensing UV radiation from combustion - faster response, unaffected by hot refractory glow which could mask flame failure on visible-light photocell sensors. Refractory continues glowing red-hot after flame extinguishes - photocell would not detect failure.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Low-low water = IMMEDIATE no delay | Flame fail = lockout, manual reset | UV scanner = UV-specific to actual flame | Pre-purge = <span class="n-val">3–5 air changes</span> MANDATORY | HP steam = manual reset | Ignition transformer = <span class="n-val">10–15 kV</span>.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 7: BOILER ALARMS (ETO SCOPE)                  -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-boiler-alarms">🔥 Boiler Electrical Alarms &amp; ETO Troubleshooting</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Sanjib, Sudhir - "what is your role in a boiler fault?"</strong></div></div>
  <ul class="n-list">
    <li><strong>ETO owns:</strong> All sensors (PT100, pressure/DP transmitters, level gauges), solenoid valves, ignition transformer, FD fan motor, BMS PLC.</li>
    <li><strong>C/E owns:</strong> Mechanical issues - tube leaks, pump failures, combustion tuning.</li>
    <li><strong>Flame failure alarm:</strong> Check UV/IR flame detector (clean lens), check ignition transformer voltage, check solenoid valve (test with 24V), check BMS controller output.</li>
    <li><strong>High/low water level alarm:</strong> Check DP transmitter calibration, reference leg isolation valve open, drain valve closed, compare with sight glass.</li>
    <li><strong>FD fan motor fault:</strong> Check overload relay reset, thermistor resistance (normal: 100–200 Ω, tripped: &gt;3 kΩ), starter contactors, duct pressure switch.</li>
    <li><strong>BMS power fault:</strong> Check 24V DC supply rail, MCB/fuse, supply cable earth fault.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>FD fan motor vs normal motor:</strong> FD fan has high inertia → uses star-delta or soft starter. Normal motor may use DOL.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 8: BOILER WATER LEVEL CONTROL                 -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-boiler-level">🔥 Boiler Water Level Control - 1, 2 &amp; 3-Element</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Commonly asked:</strong> Know all three systems and why 3-element is used on main boilers. Explain swell/shrink effect.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Swell and Shrink phenomenon:</strong> When steam demand suddenly increases, drum pressure drops momentarily → steam bubbles form throughout the water column → drum level <em>rises</em> (swell) even though actual water content is falling. A 1-element controller sees high level → closes feedwater valve → worsens the actual shortage. This makes single-element control unsuitable for large high-pressure boilers.</div></div>

  <table class="n-table">
    <tr><th>System</th><th>Inputs</th><th>How It Works</th><th>Limitation</th></tr>
    <tr><td><strong>1-Element</strong></td><td>Drum level only</td><td>DP transmitter on drum → controller → feedwater regulating valve. Simple proportional control.</td><td class="bad">Fooled by swell/shrink. Suitable only for small auxiliary boilers with steady load.</td></tr>
    <tr><td><strong>2-Element</strong></td><td>Drum level + Steam flow</td><td>Steam flow feedforward added. Rising steam demand opens feedwater valve before level drops. Level signal provides trim correction.</td><td class="hl">Cannot detect feedwater pump failure directly - no feedwater flow measurement.</td></tr>
    <tr><td><strong>3-Element ✅</strong></td><td>Drum level + Steam flow + Feedwater flow</td><td>Steam flow and feedwater flow compared (mass balance). Valve adjusted to match steam draw. Drum level provides final trim. Fastest and most accurate response.</td><td class="ok">Best system. Used on all large high-pressure main boilers. Compensates for pump degradation automatically.</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Sensors:</strong> Drum level → DP transmitter with external condensate-pot reference leg. Steam flow → DP transmitter across fixed orifice plate in steam line. Feedwater flow → DP transmitter across orifice in feedwater line. All three outputs: 4–20 mA to boiler control system.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> 1 = level only = fooled by swell. 2 = level + steam = better. 3 = level + steam + feedwater = best = main boiler standard.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 8b: BOILER TYPES, EGB & COMBUSTION CONTROL     -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-boiler-types">🔥 Boiler Types, EGB &amp; Combustion Control</div>

  <div class="n-h2">Types of Boiler</div>
  <table class="n-table">
    <tr><th>Type</th><th>Construction</th><th>Use</th></tr>
    <tr><td><strong>Water-tube</strong></td><td>Water inside the tubes, hot gas outside. High pressure/temperature, fast steaming, compact for the output.</td><td>Main boilers, high-pressure aux</td></tr>
    <tr><td><strong>Fire / Smoke-tube</strong></td><td>Hot gas inside the tubes, water in the shell (e.g. Cochran vertical). Large water volume, slower response, lower pressure.</td><td>Auxiliary / donkey boiler</td></tr>
    <tr><td><strong>Composite</strong></td><td>Oil-fired section plus an exhaust-gas section in one unit - fired in port, exhaust-heated at sea.</td><td>Small / medium vessels</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-boiler-types.webp" alt="Types of boiler — water-tube vs fire-tube vs composite construction" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpgAAABXRUJQVlA4IIwAAABQBACdASocABAAPu1kqU2ppaQiMAgBMB2JZAC32IjDCQoDClXfFFSYhlgAAP7x3vWw7wA3WNh6qXjOK1ereDlqTWKeca4kzOWilaTLcBE21r8aTdGqo5dmDIVNEUHGy+hAwaqd0EZblvqnIXtnF1lDfogxl/XryAU6qM4uKyJTUGh744hXRqEOeolAAA==">
    <div class="note-diagram-cap">Fig. Boiler Types — water-tube (water in tubes, high pressure/fast response), fire-tube/smoke-tube (hot gas inside tubes, large water volume/low pressure), composite (combined oil-fired + EGB sections)</div>
  </div>

  <div class="n-h2">What Happens Inside an Oil-Fired Boiler / EGB</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Oil-fired boiler:</strong> atomised fuel burns in the furnace and heat reaches the water by <strong>radiation</strong> (radiant heat from the flame to the water-wall tubes) and by <strong>convection</strong> (hot gases passing over the convection tube bank). Water heats, boils and generates steam collected in the steam drum.<br>
  <strong>EGB (Exhaust-Gas Boiler / economiser):</strong> at sea the main-engine exhaust gas passes over finned tubes to raise steam <strong>without burning any fuel</strong> - it recovers waste heat, so overall plant efficiency rises. Watch points: soot fires and low-load fouling, so soot-blowing and correct water circulation are essential.</div></div>

  <div class="n-h2">Manual / Emergency (Hand) Firing</div>
  <ol class="n-steps">
    <li>Confirm the water level in the gauge glass is normal; open feed as required.</li>
    <li>Purge the furnace manually - run the FD fan for the full pre-purge time to clear unburnt gas.</li>
    <li>Open fuel to the pilot / igniter and light the pilot.</li>
    <li>Admit main fuel and watch the flame establish - shut off immediately if it fails.</li>
    <li>Control firing rate and feedwater by hand, holding steam pressure and water level within limits until automatic control is restored.</li>
  </ol>

  <div class="n-h2">Steam Pressure Controller - Circuit / Loop (to Draw)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Signal chain to draw:</strong> steam drum → <strong>pressure transmitter</strong> (plus a pressure switch for cut-in / cut-out) → <strong>pressure controller</strong> (compares against set pressure) → output → burner fuel control (solenoid / modulating valve / burner on-off). Rising pressure → controller reduces firing or cuts out the burner; falling pressure → increases firing or cuts in. The pressure switch also gives the high-pressure trip and the low-pressure cut-in.</div></div>

  <div class="n-h2">Air-Fuel Ratio Controller - Circuit / Loop (to Draw)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Signal chain to draw:</strong> firing-rate demand (from the steam pressure controller) → <strong>ratio controller</strong> → drives the <strong>fuel valve</strong> and the <strong>air damper</strong> together, mechanically through a jackshaft / cam linkage or electronically through twin actuators, so air and fuel change in the correct proportion. An <strong>O₂ trim</strong> loop (flue-gas O₂ analyser → trim controller → air damper) fine-tunes the air to hold the target excess air.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Adjusting the air-fuel ratio:</strong> set the fuel/air cam profile (or actuator characterisation) so combustion runs with a small <strong>excess air</strong> (typically a few % O₂ in the flue). Too little air = black smoke, unburnt fuel and soot-fire risk; too much air = white haze and heat lost up the funnel. Trim to the flue-gas O₂ reading.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 9: JCW                                        -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-jcw">🌡️ Jacket Cooling Water (JCW) Automation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>JCW loop:</strong> Closed fresh-water system, system pressure <span class="n-val">2–4 bar</span>. Circulates through cylinder liners, heads, exhaust valve casings. Heat rejected via Fresh Water Cooler (FWC) to seawater loop. Modulating 3-way thermostatic valve maintains engine outlet temperature <span class="n-val">75–85°C</span>.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Temperature extremes:</strong><br>
  Too cold (&lt;<span class="n-val">55°C</span>): Combustion exhaust condenses + sulphur → sulphuric acid on liner walls → severe COLD CORROSION → destroys cylinder liners. Electric immersion pre-heater must maintain <span class="n-val">50–60°C</span> when engine stopped.<br>
  Too hot (&gt;<span class="n-val">90°C</span>): Localised flashing/boiling → steam pockets → hot spots → thermal stress cracking. Corrosion suppressed by nitrite/molybdate inhibitor dosing.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 10: EM BRAKE                                  -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-embrake">🏗️ Electromagnetic (EM) Brake - Crane &amp; Windlass</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask this.</strong> Know fail-safe principle, spring-applied design reason, air gap specification, and coil failure consequences.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Spring-Applied, Electrically-Released (SAER) - Fail-Safe Design:</strong><br>
  Motor <strong>DE-ENERGISED</strong> → spring force applies brake pads to drum → <strong>BRAKE ON</strong> (safe state, load held)<br>
  Motor <strong>ENERGISED</strong> → brake coil energised simultaneously → electromagnetic force overcomes spring → <strong>BRAKE OFF</strong><br>
  <strong>Fail-safe:</strong> Power failure, supply loss, or coil fault = spring automatically applies brake = crane/load cannot drop. SAER is mandatory for all ship crane and windlass brakes.</div></div>

  <div class="n-h2">Air Gap - Critical Maintenance</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Air gap:</strong> Between brake coil pole face and armature plate. Correct: <span class="n-val">0.2–0.5 mm</span> (manufacturer specific). Too large = coil cannot pull armature = brake does not release properly = motor starts under mechanical overload = overcurrent trip. Too small = brake drags during operation = overheating. Check and adjust at every survey.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Coil failure:</strong> Open circuit brake coil → brake stays ON permanently → motor starts but mechanically locked → immediate overcurrent trip. Short circuit coil → brake may release partially or remain on erratically → check coil resistance (should match manufacturer spec, typically <span class="n-val">20–200 Ω</span>).</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> No power = brake ON (this is the safe state). Power = brake OFF. Air gap <span class="n-val">0.2–0.5 mm</span> - too large = won't release. Spring applied = fail-safe by design. Always check air gap at survey.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 11: BOW THRUSTER                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-thruster">🚢 Bow Thruster - Interlocks &amp; Protection</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Deswal ask this.</strong> Know ALL interlocks that must be satisfied - surveyors want all 7.</div></div>

  <div class="n-h2">All Interlocks - Must Be Satisfied Before Start</div>
  <ol class="n-steps">
    <li><strong>Vessel speed &lt; <span class="n-val">2 knots</span></strong> (GPS/log interlock) - propeller damage at speed</li>
    <li><strong>Pitch at zero</strong> (CPP thrusters) - overload protection</li>
    <li><strong>Tunnel doors open</strong> (some designs) - ventilation requirement</li>
    <li><strong>Local/remote selector</strong> in correct position</li>
    <li><strong>No earth fault</strong> on thruster motor circuit</li>
    <li><strong>Cooling water flow confirmed</strong> (larger thrusters)</li>
    <li><strong>Gearbox oil level confirmed</strong></li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Motor type - Bow Thruster:</strong> Large squirrel cage induction motor, typically <span class="n-val">440V or 6.6 kV</span> (larger vessels), DOL or soft-start. Power rating <span class="n-val">250 kW – 3 MW</span> depending on vessel. Starting method: star-delta for medium size, soft-starter or VFD for variable pitch types. Dedicated MSB section or sub-panel forward. Motor typically in watertight compartment - IP44 or IP54 minimum.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Protection on thruster motor:</strong> Overcurrent relay, earth fault relay, winding thermistors (temperature), bearing temperature sensors (PT100/NTC), vibration sensor (larger units). Any protection tripping requires investigation before restart.</div></div>

  <div class="n-h2">Fixed Pitch vs Variable Pitch Thruster</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Fixed Pitch (FP)</th><th>Variable Pitch (VP/CPP)</th></tr>
    <tr><td>Speed control</td><td class="hl">Motor speed reversal for direction change</td><td class="ok">Motor runs one direction; pitch changed for direction</td></tr>
    <tr><td>Motor type</td><td>Standard induction, reversible contactor</td><td>Induction + VFD or constant speed with servo pitch</td></tr>
    <tr><td>Starting</td><td>DOL / star-delta</td><td>VFD or soft-start; pitch at zero for starting</td></tr>
    <tr><td>Efficiency</td><td class="hl">Lower - motor reversal wastes time</td><td class="ok">Higher - thrust change is immediate via pitch</td></tr>
    <tr><td>Complexity</td><td class="ok">Simple electrical, simple mechanical</td><td class="hl">Hydraulic servo for pitch + electrical VFD</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Thruster won't start = check interlocks: Speed → Pitch → Doors → Selector → Earth fault → Cooling → Oil level. All 7 must be satisfied.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 12: CPP ELECTRICAL                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cpp">⚙️ CPP (Controllable Pitch Propeller) - Electrical Systems</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Common on modern vessels - ETO must know the electrical side: feedback potentiometer, oil distribution box, and why pitch can hunt.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How CPP works electrically:</strong> Bridge telegraph or joystick sends pitch demand signal (e.g. <span class="n-val">4–20 mA</span> or <span class="n-val">±10V</span> analogue) to CPP controller. Controller compares demand vs actual pitch position (from feedback potentiometer on pitch servo) → drives hydraulic servo valve to move pitch. Pitch movement stops exactly when feedback signal matches demand - closed-loop position servo.</div></div>

  <div class="n-h2">Key Components - ETO Scope</div>
  <table class="n-table">
    <tr><th>Component</th><th>Function</th><th>ETO Task</th></tr>
    <tr><td><strong>Feedback Potentiometer</strong></td><td>Measures actual pitch position on hub servo rod. Output: analogue position signal to CPP controller.</td><td class="hl">Check for wear, open circuit, dirty track. If faulty → pitch hunting or wrong position indication.</td></tr>
    <tr><td><strong>Oil Distribution Box (OD Box)</strong></td><td>Transfers hydraulic oil from stationary supply to rotating propeller shaft. Contains rotating seals and slip-ring style fluid path.</td><td class="hl">Check for oil leaks, seal condition. Pressure sensor in OD box signals low oil pressure alarm to ECR.</td></tr>
    <tr><td><strong>Hydraulic Power Unit (HPU)</strong></td><td>Electric motor + hydraulic pump provides servo oil pressure (<span class="n-val">25–40 bar</span>) for pitch control. Standby HPU cuts in on main failure.</td><td class="hl">Motor overload, HPU pressure switch, low oil level alarm. Check HPU motor insulation resistance.</td></tr>
    <tr><td><strong>Shaft RPM Sensor</strong></td><td>Magnetic pick-up or encoder on shaft - feeds RPM to governor/telegraph readback.</td><td class="hl">Air gap, cable continuity, signal strength.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CPP Pitch Hunting - causes and cure:</strong> Dirty/worn feedback potentiometer → incorrect position signal → controller continuously hunts for demanded position → propeller blade flutter → vibration and fuel waste. Check potentiometer resistance linearity with multimeter. Worn brushes in OD box → intermittent hydraulic pressure → erratic pitch movement. Check HPU pressure stability.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why CPP vs FP on modern ships:</strong> CPP allows constant engine speed (optimum efficiency point) while varying thrust. Manoeuvring without stopping/reversing engine. Emergency: pitch to zero → engine still running → provides power for steering, deck machinery and pumps. Pitch to astern from ahead without engine direction reversal.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> CPP = demand signal in → feedback pot out → controller compares → hydraulic servo moves blades. Feedback pot failure = hunting. OD box = oil transfer rotating→stationary. HPU = electric motor drives hydraulic pump for servo pressure.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 13: PURIFIER                                  -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-purifier">⚡ Purifier (Separator) - Electrical Aspects</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath, Vishwanathan ask this.</strong> Know vibration trip causes, why no brake on stop, and critical speed behaviour.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Vibration Trip:</strong> Purifier bowl becomes unbalanced → excessive vibration → vibration sensor (accelerometer or proximity switch on frame) → trips motor. Causes of imbalance: incorrect assembly after cleaning (bowl parts not properly seated), foreign object in bowl, worn spindle bearing, bowl not properly closed before start.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-purifier-screw.webp" alt="Purifier and screw conveyor — bowl, screw conveyor, sludge discharge, clean oil/water outlets" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAADQBACdASocABcAPu1grFAppSQisBgIATAdiWcAACn9T63Lj/6sDnjAFN4Io7SSoAD+8eFnb7s53J0sz20NXMjAcUnCAHsCydUWLzYGrCQXwL4qW9NioeO/6cQ4zFtTJ0QdXjn8BwJmtEqRa8+Mkyg3Cz3KOncfnOIAAAAA">
    <div class="note-diagram-cap">Fig. Purifier (Separator) — centrifugal bowl spins at 7,000–9,000 RPM; screw conveyor (in decanter type) moves sludge to discharge port; clean oil exits top, separated water exits separately; high vibration trips motor</div>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why NO brake on purifier motor?</strong> Bowl runs at <span class="n-val">6,000–12,000 RPM (typically 7,000–9,000 RPM)</span> with high rotational inertia. Sudden braking = enormous deceleration torque on spindle gears = gear/bearing damage. Worse: bowl may crack or shatter from sudden stress - catastrophic hazard. Correct stop: de-energise motor → free rundown by inertia → takes <span class="n-val">20–40 minutes</span> to stop. NEVER apply brake.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Critical Speed:</strong> During run-up, purifier passes through resonant frequency of rotating assembly. Vibration amplitude peaks briefly at this speed - can trigger vibration trip if sensor too sensitive. Solution: pass through critical speed quickly - do not dwell at that RPM. Vibration trip is time-delayed or inhibited during start-up run-through period.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Purifier = no brake, ever - <span class="n-val">9000 RPM</span> mass shatters if braked. Free rundown takes <span class="n-val">20–40 min</span>. Critical speed = pass through fast, don't dwell.</div></div>

  <div class="n-h2">ALCAP - Automatic Purifier Control</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ALCAP</strong> (Alfa Laval's automatic control concept) is a modern <strong>gravity-disc-less</strong> clarifier system for fuel and lube oil. Instead of a fixed gravity disc setting the oil/water interface, a <strong>water transducer in the clean-oil outlet</strong> continuously monitors water content. When water breaks through, the controller triggers a <strong>timed discharge (sludge shoot)</strong> to expel the accumulated water and sludge, then resumes separation. This lets one purifier handle oils of different densities without changing gravity discs. ETO maintains the water transducer, the discharge solenoids/valves and the control unit with its sensors.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 14: PURIFIER MOTOR STARTING                   -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-purifier-start">⚡ Purifier Motor Starting - Centrifugal Clutch &amp; OC Relay Bypass</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Frequently asked:</strong> Why is the overcurrent relay bypassed during purifier start? Explain the centrifugal friction clutch.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Centrifugal Friction Clutch - how it works:</strong> The motor shaft connects to the purifier bowl through a centrifugal friction clutch. At low speeds during motor start-up, centrifugal weights (friction pads) are held inward by return springs - no torque is transmitted to the bowl. As the motor accelerates toward full speed, centrifugal force overcomes the springs → pads fly outward → engage the friction drum → gradually transmit drive to the bowl. The bowl accelerates smoothly from rest to rated speed (6,000–12,000 RPM, typically 7,000–9,000 RPM) without mechanical shock. This gradual loading is essential to avoid violent vibration and mechanical damage.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why the overcurrent relay is bypassed for ~10 minutes:</strong> As the centrifugal clutch progressively loads the motor (bowl accelerating from zero), the motor draws elevated current throughout the entire acceleration period - far longer than a normal DOL starting transient. Without the bypass: the overcurrent relay would interpret this sustained high current as a fault and trip the motor before the bowl reaches speed. A timer-controlled bypass inhibits the OC relay for approximately 10 minutes, allowing the gradual bowl run-up to complete. Once the timer expires and the bowl is at rated speed, the bypass opens and full overcurrent protection is restored.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>If OC relay trips during start (even with bypass):</strong> Do NOT immediately restart. Investigate - possible seized bearing, excessive clutch friction, or bowl imbalance. Forced restart against a mechanical fault risks motor winding damage and violent bowl vibration.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> Clutch pads fly out gradually → bowl loads slowly → high current for long time. OC bypass = timer ~10 min = allows long start without nuisance trip. Timer expires → full protection restored. No bypass = motor trips every start.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 15: REFRIGERATION                             -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-reefer">❄️ Refrigeration - LP/HP Cutouts &amp; Oil Differential</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Gupta, Nair ask this.</strong> Know the key difference: LP = automatic reset, HP = manual reset - and WHY.</div></div>

  <table class="n-table">
    <tr><th>Cutout</th><th>Reset</th><th>Condition</th><th>Reason for Reset Type</th></tr>
    <tr><td><strong>LP Cutout (Low Pressure)</strong></td><td class="ok">Automatic</td><td>Suction pressure below setpoint</td><td>Normal operational variation - load changes, defrost cycles. Safe to auto-reset.</td></tr>
    <tr><td><strong>HP Cutout (High Pressure)</strong></td><td class="bad">Manual</td><td>Discharge pressure above setpoint</td><td>Indicates serious fault - condenser fouling, refrigerant overcharge, fan failure. Auto-reset risks dangerous over-pressure cycling.</td></tr>
    <tr><td><strong>Oil Differential Cutout</strong></td><td class="bad">Manual</td><td>(Lube oil pressure − crankcase pressure) below minimum</td><td>Bearing protection - insufficient lubrication. Engineer must investigate before restart.</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Crankcase heater:</strong> Electric immersion heater inside compressor crankcase. Purpose: keeps crankcase oil warm when compressor stopped. Cold oil dissolves refrigerant → when compressor starts, sudden pressure drop → refrigerant flashes out of oil → oil foams → loss of lubrication → bearing damage. Crankcase heater must be energised whenever compressor is stopped. Check with ammeter - typically <span class="n-val">100–400W</span>. Confirm heater element resistance with megger/ohmmeter.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> LP = automatic (normal operation variation). HP = manual reset (serious fault - investigate first). Oil differential = manual (bearing protection - don't restart blind). Crankcase heater = always ON when stopped.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 16: REEFER EVAPORATOR TYPES                   -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-reefer-types">❄️ Refrigeration - Evaporator Types: Dry Expansion vs Flooded</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Commonly asked:</strong> Difference between dry expansion and flooded evaporator. Which is used where and why.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Vapour Compression Cycle (basic):</strong> Low-pressure liquid refrigerant in evaporator absorbs heat from cargo space → boils to vapour → suction by compressor → compressed to high-pressure hot vapour → condenser rejects heat to seawater/air → high-pressure liquid → expansion device → low-pressure liquid back to evaporator. Cycle repeats continuously.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-refrigeration-cycle.webp" alt="Vapour compression refrigeration cycle — evaporator, compressor, condenser, expansion valve" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpAAAABXRUJQVlA4IIQAAACQBACdASocABMAPu1kqk2ppaQiMAgBMB2JZwDFyCFsHM/5vZ+XolEbPwldmAAA/vN1MLp7rTHiMS6pmp9AMsAHSJ+v6cRCzohbLQi5riuYdIqg3ywOpI/Y6/q81puuohD17IsEWfqNjv4vH5+TbCxstdO3JGL3nJkJtzqDqJrSeB3BsAA=">
    <div class="note-diagram-cap">Fig. Vapour Compression Refrigeration Cycle — refrigerant evaporates (absorbs heat) → compressor raises pressure/temp → condenser rejects heat to seawater → expansion valve drops pressure → cycle repeats</div>
  </div>

  <table class="n-table">
    <tr><th>Feature</th><th>Dry Expansion (DX)</th><th>Flooded Evaporator</th></tr>
    <tr><td><strong>Refrigerant state</strong></td><td>Partially fills tubes; fully evaporates before outlet</td><td>Refrigerant fills shell side; liquid level maintained continuously</td></tr>
    <tr><td><strong>Flow control device</strong></td><td>TEV - controls superheat at outlet</td><td>Float valve - maintains constant liquid level in shell</td></tr>
    <tr><td><strong>Outlet condition</strong></td><td>Superheated vapour (<span class="n-val">4–6°C superheat</span>)</td><td>Saturated vapour - must pass through oil separator before compressor</td></tr>
    <tr><td><strong>Heat transfer efficiency</strong></td><td>Lower - dry section of tube near outlet less effective</td><td>Higher - entire tube surface in contact with boiling liquid</td></tr>
    <tr><td><strong>Oil handling</strong></td><td>Oil carried back to compressor in vapour stream - self-returning</td><td>Oil accumulates in shell - periodic oil drain and separator required</td></tr>
    <tr><td><strong>Refrigerant charge</strong></td><td>Small charge</td><td>Large charge (holds significant liquid inventory)</td></tr>
    <tr><td><strong>Typical use</strong></td><td>Reefer hold units, air conditioning - most ship systems</td><td>Large centralised cargo refrigeration plants, pull-down systems</td></tr>
    <tr><td><strong>Main risk</strong></td><td>Liquid slugging if TEV fails open</td><td>Liquid carry-over to compressor if oil separator fails</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> DX = TEV controls superheat = small charge = simple = most ships. Flooded = float valve = full tubes = high efficiency = oil separator needed = large industrial plant.</div></div>

  <div class="n-h2">Electronic Expansion Valve (EEV)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">A <strong>stepper-motor-driven expansion valve</strong> that replaces the mechanical TEV. A controller reads suction pressure and temperature, calculates superheat and drives the stepper to set the exact orifice opening. Faster and more precise than a bulb-charged TEV, it holds tighter superheat across a wide load range and can shut off fully. Standard on modern reefer containers and variable-load plants. ETO checks the stepper coil, position feedback and the controller/sensors.</div></div>

  <div class="n-h2">Chill vs Frozen Reefer - Which Draws More Power?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Frozen containers draw more power.</strong> A frozen setpoint (about −18 to −25°C) needs a much lower evaporating temperature than a chilled setpoint (about 0 to +12°C). A lower evaporating temperature means a lower <strong>COP</strong> - the compressor works across a bigger pressure lift for the same cooling, so it draws more kW. Frozen boxes also add periodic <strong>defrost</strong> load. Chilled cargo needs good air circulation and tight temperature control but less compressor power. This matters when sizing the reefer generator / socket capacity.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 17: REEFER LO SENSOR CALIBRATION              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-reefer-lo">❄️ Reefer Compressor LO Pressure Sensor Calibration</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: How ETO measures and calibrates the reefer compressor LO pressure sensor.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why it's critical:</strong> Protects bearings. If LO pressure drops below min (typically <span class="n-val">1.5–2 bar</span>), compressor must trip immediately to prevent seizure.</div></div>
  <ol class="n-steps">
    <li>Permit to work - notify C/E, stop compressor, allow LO pressure to equalise to zero.</li>
    <li>Isolate sensor at 3-valve manifold: close PROCESS ISOLATION valve, open EQUALISING BYPASS valve to vent residual pressure.</li>
    <li>Connect calibrated reference gauge (digital calibrator) to test tapping.</li>
    <li>Apply increasing test pressures in steps (0%, 25%, 50%, 75%, 100%). Compare panel reading with reference (Acceptable error: ±2%).</li>
    <li>If deviation exists: use HART communicator or trim screws to adjust zero and span.</li>
    <li><strong>Test TRIP SETPOINT:</strong> Slowly reduce test pressure - note exact pressure when trip alarm activates (typically alarm <span class="n-val">2 bar</span>, trip <span class="n-val">1.5 bar</span>).</li>
    <li>Restore manifold (close equalise, open isolation) and document test.</li>
  </ol>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 18: TEV                                       -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-tev">🌡️ TEV - Thermostatic Expansion Valve</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Function:</strong> Regulates refrigerant flow into evaporator to maintain constant superheat at evaporator outlet.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Sensor bulb on suction line detects superheat temperature. Bellows transmit pressure to valve needle. High superheat → valve opens more → more flow → superheat reduced. Low superheat → valve closes → less flow.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Typical Superheat Setpoint</div><div class="card-val"><span class="n-val">4–6°C</span></div><div class="card-desc">Above saturation temperature at evaporator pressure. ETO: measure suction line temp and pressure → calculate actual superheat → compare to set value.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">TEV Fails OPEN</div><div class="card-val">Liquid slugging</div><div class="card-desc">Excess liquid refrigerant enters compressor → compressor cannot compress liquid → connecting rod/valve damage (liquid slugging). Symptoms: compressor banging noise, frosting on suction line back to compressor.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">TEV Fails CLOSED</div><div class="card-val">Starvation</div><div class="card-desc">No refrigerant flow → evaporator starves → compressor draws in superheated vapour at very low pressure → LP cutout trips. Symptom: LP alarm, warm cargo hold, very low suction pressure.</div></div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-tev-schema.webp" alt="Thermostatic Expansion Valve — sensor bulb, bellows, needle valve, superheat adjustment" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAwCdASocABIAPu1oqVAppiOiqA1RMB2JaWqgABsLNgAA/vBPqu9uUbKjMQFJjL/YeTPF1dbDYyiC3hlv8t/ePjp+FNYQjvcR8N6JfsZEoAET3wqPw9gMM15sCDAAAAA=">
    <div class="note-diagram-cap">Fig. TEV (Thermostatic Expansion Valve) — bulb on suction line senses superheat; bellows push needle open with rising superheat; spring closes needle; set for 4–6°C superheat to prevent liquid slugging while ensuring evaporator is fully used</div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> TEV = refrigerant metering valve. Controls superheat by modulating flow. <span class="n-val">4–6°C</span> superheat = ideal. Fails open = liquid slug = compressor damage. Fails closed = starvation = LP trip.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 18B: A/C CAPACITY RATING & HUMIDIFIER         -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ac-rating">❄️ Air-Conditioning - Capacity in Tons &amp; Humidifier Working</div>

  <div class="n-h2">Why A/C Capacity is Rated in "Tons"</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Historical origin:</strong> Before mechanical refrigeration, ice was used to cool buildings. One <em>Ton of Refrigeration</em> = the heat absorbed by melting <span class="n-val">1 short ton (2000 lb) of ice in 24 hours</span> = <span class="n-val">3.517 kW</span> (≈ 12,000 BTU/hr). It is a unit of cooling <strong>power</strong>, not weight. Ships typically express accommodation A/C plant capacity in tons-of-refrigeration (TR) for historical continuity with refrigeration practice.</div></div>

  <table class="n-table">
    <tr><th>Unit</th><th>Equivalent</th><th>Ship context</th></tr>
    <tr><td>1 TR (Ton of Refrigeration)</td><td class="hl"><span class="n-val">3.517 kW</span> cooling power</td><td>Typical ship cabin A/C unit: 1–2 TR. Main accommodation plant: 20–60 TR depending on crew size and climate zone.</td></tr>
    <tr><td>COP (Coefficient of Performance)</td><td class="hl">Cooling output ÷ electrical input</td><td>Ship A/C COP ≈ 2–3 (for every 1 kW electrical input, 2–3 kW of heat is removed from accommodation).</td></tr>
  </table>

  <div class="n-h2">Humidifier - Working Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> In cold climates, A/C supply air becomes very dry (relative humidity falls below <span class="n-val">30–40%</span>) - causes discomfort, static electricity, and desiccation of throat/skin. The humidifier adds moisture to the supply air duct to maintain comfortable relative humidity (<span class="n-val">50–60% RH</span>).</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Electric steam humidifier (most common on ships):</strong> A stainless-steel cylinder contains a small volume of fresh water. Immersed electrodes are energised - current flows through the water, resistance-heating boils it, producing steam. Steam injected into supply air duct raises RH. A humidistat (capacitive RH sensor) in the return air duct monitors RH and switches humidifier on/off to maintain setpoint. <strong>Maintenance:</strong> Scale (calcium carbonate) builds up on electrodes - weekly or monthly descaling with citric acid solution. Drained and flushed before prolonged shutdown.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> 1 TR = <span class="n-val">3.517 kW</span> cooling. Ton refers to melting-ice rate - it is a power unit. Humidifier = electrode boiler in duct. Humidistat controls it. Descale electrodes regularly.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 19: MAIN ENGINE SLOW-DOWN VS TRIP             -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-engine">🔧 Main Engine - Slow-Down vs Trip</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Nair, Kamath ask this.</strong> Know which faults trigger slow-down vs trip, and whether bridge can override either.</div></div>

  <table class="n-table">
    <tr><th>Action</th><th>Triggered by</th><th>Bridge Override?</th></tr>
    <tr><td><strong>SLOW-DOWN</strong> (reduce to min safe RPM)</td><td>OMD alarm | HT water high temperature | Bearing temp high | Scavenge fire | Lube oil low pressure (1st stage)</td><td class="hl">YES - Master can override in navigational emergency (imminent collision/grounding)</td></tr>
    <tr><td><strong>TRIP</strong> (full stop)</td><td>Lube oil low-LOW pressure | Overspeed | Crankcase explosion | HT water high-HIGH temperature</td><td class="bad">NO - Hardware interlock, cannot override</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Overspeed trip:</strong> Trips engine when RPM exceeds <span class="n-val">~110–115%</span> of rated speed. INDEPENDENT of governor - separate mechanical or electronic speed sensing. If governor fails and engine overspeeds, overspeed trip acts as final safety. Test: monthly or per PMS schedule.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Bridge slow-down override:</strong> Temporarily cancels the slow-down alarm - engineer must still investigate immediately. Override is only for emergency navigation situations where losing propulsion is more dangerous than the engine fault.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Slow-down = advisory, bridge can override in emergency. Trip = absolute, no override. Overspeed trip is INDEPENDENT of governor - last line of defence.</div></div>

  <div class="n-h2">Turning Gear Interlock - Engine Start Blocked</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Safety critical:</strong> The turning gear interlock is a hardware safety that prevents the main engine from receiving starting air while the turning gear is engaged. If starting air is admitted with turning gear engaged: engine instantaneously goes from slow turning-gear speed to starting-air kick → catastrophic mechanical damage (bent crankshaft, broken connecting rods, gear train destruction).</div></div>
  <ul class="n-list">
    <li><strong>Interlock type:</strong> Electrical - a limit switch on the turning gear engagement lever (or gear pawl). When gear engages, switch opens → starter-air solenoid circuit is broken → starting air valve cannot open regardless of telegraph command.</li>
    <li><strong>Verification:</strong> Before engaging turning gear - confirm engine air start valve is closed and locked. After maintenance - disengage turning gear, verify limit switch resets (indicator lamp extinguishes), then check engine can be started normally at local station.</li>
    <li><strong>Also blocks:</strong> Fuel injection energisation (on electronically-controlled engines) and bridge telegraph acceptance - ECR panel shows "Turning Gear In" alarm until cleared.</li>
  </ul>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 20: DASHPOT / GOVERNOR HUNTING                -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-dashpot-gov">⏱️ Dashpot - Governor Hunting &amp; ACB Inverse-Time</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal and Wad ask dashpot fluid dynamics and governor hunting.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dashpot construction:</strong> A cylinder with a piston connected to the mechanical linkage. The piston moves through oil or air - flow rate through a needle valve orifice controls piston speed = controls time delay. Adjust needle valve: more open = less restriction = faster piston = shorter delay.</div></div>
  <div class="n-h2">Governor Hunting - Without vs With Dashpot</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Without dashpot:</strong> Sudden load increase → speed drops → governor snaps fuel rack fully open → engine over-responds → RPM spikes past setpoint → governor snaps rack closed → speed drops again → continuous oscillation (hunting). Symptoms: speed fluctuation, voltage fluctuation, instability on load.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>With dashpot:</strong> Fuel rack moves gradually at a rate matching engine thermal time constant. Adjustment:<br>
  • Over-damped (too much restriction): slow recovery after load changes - sluggish governor<br>
  • Under-damped (too little restriction): fuel rack too fast → hunting continues<br>
  • Critical damping (optimal): fastest possible recovery without overshoot</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ACB inverse-time protection:</strong> Dashpot also used in oil-filled time-delay overcurrent relays. Under heavy short-circuit: large electromagnetic force → piston moves instantly → immediate trip. Under mild overload: small force → piston creeps through oil → long delay before trip. This provides electrical selectivity - downstream fuses clear minor faults before MSB trips.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 21: GOVERNOR TYPES                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gov-types">⚙️ Governor Types</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Kamath, Wad - "types of governors? which type on main engine?"</strong></div></div>
  <ol class="n-steps">
    <li><strong>MECHANICAL (Centrifugal/Flyball):</strong> Rotating flyweights driven by engine. Speed increases → flyweights fly out → fuel rack reduces. Used on older ME/AE.</li>
    <li><strong>HYDRAULIC-MECHANICAL (Woodward):</strong> Flyball + hydraulic servo amplifier. More precise. Used on most diesel generators.</li>
    <li><strong>ELECTRONIC (PID-based):</strong> Speed sensor (magnetic pickup) → electronic controller → actuator on fuel rack. Most precise. Used on modern DGs and electronically controlled MEs.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Summary Answer:</strong> "DG typically uses hydraulic-mechanical Woodward governor. ME uses electronic governor on modern ships."</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-flyball-governor.webp" alt="Flyball (centrifugal) governor — rotating flyweights, sleeve, fuel rack linkage" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRoQAAABXRUJQVlA4IHgAAADQBACdASocABYAPu1qrVEppaQiqAqpMB2JaQAOeqHafxPyPrZxX+R2JLMQ/olVYAD+83vJEc6vm53+3d09CNNWno6nH9e1xTbTXUCHIV4riA2u5QYENE1JYOn2BNvh7JUAyAw/dPipQptYfafm5GKTp+hiRUgAAAA=">
    <div class="note-diagram-cap">Fig. Flyball Governor — flyweights rotate with engine; speed rises → centrifugal force lifts sleeve → fuel rack reduces; speed falls → weights drop → more fuel; purely mechanical, used on older diesel engines</div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-hydraulic-governor.webp" alt="Hydraulic governor (Woodward) — flyball, pilot valve, hydraulic servo, fuel rack" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAACQAwCdASocABkAPuFYpU2opSOiN/qoARAcCWlocAAy9m+G14AAAP7w09ikydV3QQRrcvO4fVw7kugh2tFvamrIk+N62CjNZQqcD9ZCeeai3wjfITeYwNufXia5z5AG3B7/7D7ZXt5qVKrXzBPCCA6VTve9KnebpzUgAAAA">
    <div class="note-diagram-cap">Fig. Hydraulic-Mechanical Governor (Woodward) — flyball pilot valve positions hydraulic servo piston; servo amplifies force to move fuel rack precisely; more stable than pure mechanical; standard on diesel generators</div>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 22: OVERSPEED TEST                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-overspeed-test">⚡ Overspeed Relay Test Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Kamath, Wad - "how do you test overspeed relay?"</strong></div></div>
  <ul class="n-list">
    <li><strong>Method 1 (Setpoint reduction):</strong> Reduces governor speed setpoint → engine speed falls. <strong>(Tests governor, NOT overspeed relay.)</strong></li>
    <li><strong>Method 2 (Mechanical lift test - CORRECT):</strong> While engine runs at governed speed → manually lift the overspeed trip lever → confirm trip activates → engine shuts down. Reset manually after test.</li>
    <li><strong>Method 3 (Electronic test):</strong> Press 'Overspeed test' button on governor panel → simulates overspeed signal → confirm relay trips.</li>
  </ul>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why two systems?</strong> Governor adjusts fuel to maintain speed. Overspeed trip is a BACKUP - activates if governor fails and speed runs away. Testing one does not test the other.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Overspeed setpoint:</strong> Typically <span class="n-val">10–15% above rated speed</span>. Example: AE rated 1500 RPM → overspeed trip set at <span class="n-val">~1650–1725 RPM</span>. Must be verified and documented per Class requirement - typically at each annual survey or after any governor repair.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 23: LO LOW PRESSURE ALARM                     -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-lo-alarm">🔧 Lube Oil Low Pressure Alarm - ETO Action</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "Generators running, suddenly LO low pressure alarm - ETO action?"</strong></div></div>
  <ol class="n-steps">
    <li>Do NOT immediately stop engine. Inform C/E and bridge.</li>
    <li>Check local LO pressure gauge - confirm alarm is genuine (not sensor fault).</li>
    <li>Check LO pump running (listen, check ammeter, check local pressure).</li>
    <li>Check LO sump level - if low, immediate risk of bearing damage.</li>
    <li>Check LO pump inlet strainer - blocked strainer = low pressure.</li>
    <li>If pressure keeps dropping → prepare to switch to manual emergency stop to prevent bearing damage. Log all actions.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ETO Scope:</strong> Check LO pressure sensor calibration, level sensor, pump motor running (electrical). C/E handles mechanical cause.</div></div>

  <div class="n-h2">LO Pressure Typical Values</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Value</th><th>Action</th></tr>
    <tr><td>Normal running LO pressure</td><td class="ok"><span class="n-val">3–5 bar</span></td><td>Normal operation</td></tr>
    <tr><td>Low pressure ALARM setpoint</td><td class="hl"><span class="n-val">~2 bar</span></td><td>Alarm to ECR and bridge. Investigate immediately.</td></tr>
    <tr><td>Low-LOW pressure TRIP setpoint</td><td class="bad"><span class="n-val">~1.5 bar</span></td><td>Hardware trip - engine stops. No bridge override.</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 24: TC RPM SENSOR                             -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-tc-rpm">⚡ Turbocharger RPM Sensor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Type:</strong> Magnetic pickup (variable reluctance) sensor - most common. Some high-speed TCs use eddy current or optical.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Ferromagnetic toothed wheel (phonic wheel) on TC shaft rotates past sensor tip. Each tooth passing changes magnetic flux through sensor coil - induces voltage pulse. Frequency of pulses = RPM of TC.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Calibration:</strong> Count teeth × pulses per tooth × conversion factor = RPM. Usually preconfigured in tachometer.<br>
  <strong>Faults:</strong> Oil on sensor tip → weak signal. Air gap too large (&gt;<span class="n-val">2 mm</span>) → no signal. Broken tooth → erratic RPM. Cable fault → zero reading. Clean tip, check gap during maintenance.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> TC RPM sensor = magnetic pick-up. Toothed wheel passes coil → flux change → voltage pulse → frequency = RPM. Gap &gt;2 mm = no signal. Oil on tip = weak/zero signal.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 25: AIR COMPRESSOR                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-aircomp">🔧 Air Compressor - Auto Start/Stop &amp; Charging Regulations</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Commonly asked:</strong> Why does the compressor start unloaded? State the charging time regulations.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Unloaded start - reason:</strong> A large reciprocating air compressor starting against full system pressure would draw extremely high inrush current and could stall the motor. The unloader valve (bypass solenoid) opens just before the motor starts - it bypasses the compressed air outlet to atmosphere, removing the pressure load. Motor runs up to full speed with no compression work. After a short delay (speed confirmed), the unloader valve closes and compression begins. This protects motor windings and limits inrush current to acceptable levels.</div></div>

  <div class="n-h2">Automatic Pressure-Switch Control</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Auto operation:</strong> Pressure switch continuously monitors main air receiver pressure. When pressure falls to lower setpoint (cut-in, e.g. <span class="n-val">25 bar</span>) → compressor starts automatically (unloaded then loads). When pressure reaches upper setpoint (cut-out, e.g. <span class="n-val">30 bar</span>) → compressor stops. The differential between cut-in and cut-out prevents rapid short-cycling. Manual start/stop also available from local panel.</div></div>

  <div class="n-h2">Charging Time Regulations</div>
  <table class="n-table">
    <tr><th>Regulation</th><th>Limit</th><th>Reason</th></tr>
    <tr><td>Maximum time to charge one air bottle to working pressure from atmosphere</td><td class="hl"><span class="n-val">1 hour total</span></td><td>Limits sustained operation - prolonged full-load running overheats cylinders and degrades compressor oil</td></tr>
    <tr><td>Maximum continuous run per compressor (15 bar → 25 bar)</td><td class="hl"><span class="n-val">30 minutes per compressor</span></td><td>Prevents motor and bearing overheating. If not fully charged, switch to second compressor or allow cooling break before resuming.</td></tr>
    <tr><td>Moisture separator drains</td><td class="hl">Before and after every charging operation</td><td>Water in air receivers causes corrosion and hydraulic lock in starting air line</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Safety devices:</strong> Safety relief valve (set 10% above working pressure). Inter-stage and after-cooler (remove heat, condense moisture). Oil mist separator on crankcase (prevents crankcase explosion). LP and HP stage pressure gauges. Low lube oil pressure auto-stop (protects bearings).</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> Unloaded start = unloader bypass open → motor runs up free → valve closes → loads. Pressure switch = starts at lower setpoint, stops at upper. Regulations: <span class="n-val">1 hr max</span> total per bottle fill, <span class="n-val">30 min max</span> per compressor run.</div></div>

  <div class="n-h2">Belt Drive vs Direct Coupling - Why Each Compressor Uses What</div>

  <table class="n-table">
    <tr><th>Feature</th><th>Belt Drive (V-belt)</th><th>Direct Coupling (Flange/Flexible coupling)</th></tr>
    <tr><td><strong>Typical application</strong></td><td class="hl">Reefer compressor, A/C compressor</td><td class="hl">Main starting-air compressor, large pumps</td></tr>
    <tr><td><strong>Speed ratio</strong></td><td class="ok">Allows speed step-up/down - motor at 1450 RPM can drive compressor at 900 RPM or 1800 RPM by pulley sizing</td><td class="bad">1:1 - compressor must match motor speed directly</td></tr>
    <tr><td><strong>Vibration isolation</strong></td><td class="ok">Belt absorbs shock and vibration - protects motor bearings from compressor knocking</td><td class="bad">Any compressor vibration transmits directly to motor shaft</td></tr>
    <tr><td><strong>Overload protection</strong></td><td class="ok">Belt slips under extreme overload - acts as mechanical fuse protecting motor from seized compressor</td><td class="bad">No slip - overload trips motor or damages coupling</td></tr>
    <tr><td><strong>Maintenance</strong></td><td class="bad">Belt wear, stretching, misalignment, tension checks required. Belt replacement in service.</td><td class="ok">Minimal - flexible rubber insert replaced occasionally</td></tr>
    <tr><td><strong>Efficiency</strong></td><td class="bad">2–5% power loss in belt slip and flexing</td><td class="ok">Near 100% mechanical efficiency</td></tr>
    <tr><td><strong>Why main air compressor is direct:</strong></td><td colspan="2" class="hl">Main air compressor is large (high torque), used intermittently, efficiency-critical, and aligned once at installation - direct coupling is more reliable and efficient for this duty. Belt would overheat under sustained high-pressure loading.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> Belt = small compressors needing speed flexibility and vibration isolation (reefer, A/C). Direct = large, efficient, intermittent compressors (main air). Belt slips under seizure = protects motor. Direct coupling = rigid = efficient = no maintenance = no flexibility.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 26: WINDLASS / MOORING WINCH                  -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-windlass">⚓ Windlass &amp; Mooring Winch - Electrical Systems</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>NEW SECTION - frequently asked in practical ETO orals. Know motor type, brake principle, overload protection, and speed control method for the type on your vessel.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Motor Type:</strong> Typically squirrel cage induction motor (most modern vessels) or slip-ring induction motor (older vessels). Modern mooring winches: <span class="n-val">440V, 3-phase, 50 Hz</span> induction motor with VFD (Variable Frequency Drive) for stepless speed control and smooth acceleration. Older designs: slip-ring motor with rotor resistance control, or pole-changing (Dahlander) motor for fixed 2-speed operation.</div></div>

  <div class="n-h2">Brake Types</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Band Brake (Drum Brake)</div>
      <div class="card-desc"><strong>Mechanical friction brake.</strong> Steel band lined with friction material wraps around drum. Tightened by handwheel or hydraulic actuator. Holds load mechanically when motor is stopped. Fully independent of motor. Set to slip at a defined overload (e.g. 150% MBL) to protect mooring lines from parting.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">EM Brake (SAER)</div>
      <div class="card-desc"><strong>Electromagnetic spring-applied brake.</strong> Engaged (ON) when power fails - fail-safe. On windlass: supplements band brake. Prevents drum creep when motor is de-energised but band brake holding load. Air gap <span class="n-val">0.2–0.5 mm</span>. Check at every survey.</div>
    </div>
  </div>

  <div class="n-h2">Overload Protection</div>
  <table class="n-table">
    <tr><th>Protection Device</th><th>Function</th><th>Setting</th></tr>
    <tr><td>Thermal overload relay</td><td>Protects motor windings from sustained overcurrent</td><td class="hl">Set to 105–115% of FLA (up to 125% for 1.15 service-factor motors)</td></tr>
    <tr><td>Motor thermistors (PTC)</td><td>Winding temperature protection - trips on overheat</td><td class="hl">Trips at ~155°C (Class F insulation)</td></tr>
    <tr><td>Torque limit (VFD)</td><td>Software torque cap - prevents line breakage on overload</td><td class="hl">Set to max line tension limit</td></tr>
    <tr><td>Earth fault relay</td><td>Protects against cable/motor insulation failure to hull</td><td class="bad">Zero tolerance - trips immediately</td></tr>
    <tr><td>Emergency stop buttons</td><td>Local (deck level) and remote (bridge wing panel, CCR)</td><td class="bad">Immediate motor de-energisation + EM brake applies</td></tr>
  </table>

  <div class="n-h2">Speed Control Methods</div>
  <ul class="n-list">
    <li><strong>VFD (Variable Frequency Drive) - modern standard:</strong> Stepless 0–100% speed. Soft start/stop with programmable acceleration ramp. Torque control mode for auto-tension. Constant torque at low speed (full torque for heaving even at 1 RPM). Most energy-efficient.</li>
    <li><strong>Rotor Resistance (Slip-Ring Motor):</strong> Fixed steps - varies speed by changing external resistance in rotor circuit. Low speed = high slip = resistors in circuit = power wasted as heat. Simple, robust.</li>
    <li><strong>Pole Changing (Dahlander):</strong> Two fixed speeds (e.g. 4-pole high speed, 8-pole low speed). No intermediate speeds. Contactors select winding configuration.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Windlass interlock - anchor party must NOT be on deck:</strong> Electrical interlock prevents windlass from operating unless anchor party is clear confirmation is received (some vessels use deck-level footswitch or remote pendant). ETO must verify this safety interlock functional during pre-arrival checks.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory - WINDLASS:</strong> Motor = squirrel cage + VFD (modern) or slip-ring (old). Band brake = mechanical friction hold. EM brake = SAER fail-safe. Speed control = VFD preferred. Overload: thermal relay + thermistors + VFD torque limit. Emergency stop = local deck + remote bridge.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 27: AUTO-TENSION                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-autotension">⚓ Auto-Tension Mooring Winch</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib and Vishwanathan ask the electrical torque-control principle.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle - Torque Control Mode:</strong> Unlike speed-controlled winches, auto-tension operates in torque control. The Variable Speed Drive (VSD) regulates motor torque current (Iq) to match the desired tension setpoint. The physical shaft speed is free to vary.<br>
  • <strong>Pays out:</strong> If tide falls or vessel loads down → line tension increases above setpoint → line torque overcomes motor → drive allows motor to reverse, paying out line to relieve stress → tension restored at setpoint<br>
  • <strong>Heaves in:</strong> If tide rises or vessel lightens → line goes slack → motor torque overcomes line → hauls in → tension restored</div></div>
  <div class="n-h2">Multi-Layer Safety Systems</div>
  <table class="n-table">
    <tr><th>Safety</th><th>Type</th><th>Function</th></tr>
    <tr><td>Maximum torque limit</td><td>VSD software</td><td>Caps max torque - pays out rope rather than breaking line if unexpected surge occurs</td></tr>
    <tr><td>Friction slip clutch</td><td>Mechanical</td><td>Final mechanical overload defence - slips if VSD system fails</td></tr>
    <tr><td>Drum limit switches</td><td>Proximity/lever</td><td>Lower limit: stops before drum emptied. Upper limit: prevents over-hauling damage</td></tr>
    <tr><td>EM brake (SAER)</td><td>Spring-applied</td><td>Holds load when system un-powered. In auto-tension mode: motor stays energised, brake stays open.</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CRITICAL - Cancel auto-tension before departure.</strong> If left active, the winch will interpret the ship moving away from berth as increasing tension and will continuously pay out the entire wire rope - severe navigational hazard.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 28: CRANE SAFETIES                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-crane-safeties">🏗️ Crane Safeties - ALL Types</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Deswal, Gopikrishna - "all crane safeties" asked frequently.</strong></div></div>
  <div class="n-h2">Mechanical Safeties</div>
  <ul class="n-list">
    <li><strong>Overload/Overhoist limit:</strong> Trips hoist motor when SWL exceeded or hook reaches top.</li>
    <li><strong>Slack rope safety:</strong> Trips if wire becomes slack (rope jumps off drum).</li>
    <li><strong>Collision safety (anti-collision):</strong> Prevents crane jibs colliding on multi-crane ships.</li>
    <li><strong>Anemometer cut-out:</strong> Trips crane if wind speed exceeds safe limit.</li>
    <li><strong>Level luffing:</strong> Keeps hook at constant height while jib moves in/out.</li>
  </ul>
  <div class="n-h2">Electrical Safeties</div>
  <ul class="n-list">
    <li><strong>Electromagnetic brake:</strong> Fail-safe (spring-applied, electrically released). If power fails → brake applies automatically.</li>
    <li><strong>Motor overload relay:</strong> Protects hoist/slew/travel motors.</li>
    <li><strong>Limit switches:</strong> Travel limits for slewing, luffing, hoisting in all directions.</li>
    <li><strong>Interlocks:</strong> Cannot operate hoist and slew simultaneously in some cranes.</li>
    <li><strong>Emergency stop:</strong> Accessible from crane cab and ground level.</li>
  </ul>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>"Load hoisted mid-air, crane stopped, power cut - what holds the load?"</strong><br>Electromagnetic brake - spring-applied, fail-safe.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 29: CRANE SPEED                               -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-crane-speed">🏗️ ER Crane - Speed Adjustment</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "how do you adjust the speed of the ER crane?"</strong></div></div>
  <ul class="n-list">
    <li><strong>Type 1 - Pole Changing (Dahlander):</strong> Fixed at two steps (e.g. 8-pole low / 4-pole high). No fine adjustment possible. Check contactors/IR.</li>
    <li><strong>Type 2 - Rotor Resistance (Slip Ring):</strong> Speed varies by switching resistance in rotor circuit (more resistance = higher slip = lower speed). ETO adjusts by changing tap connections at the resistance bank.</li>
    <li><strong>Type 3 - VFD (Variable Frequency Drive):</strong> Variable speed 0–100%. ETO adjusts via VFD keypad parameters (Max Frequency, Min Frequency, Accel/Decel ramp times).</li>
    <li><strong>Type 4 - Hydraulic:</strong> Motor speed is fixed. Speed controlled by hydraulic proportional valve (mechanical job).</li>
  </ul>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 30: CARGO PUMP MOTOR                          -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cargo-pump">🛢️ Cargo Pump Motor - Deep-Well &amp; Hydraulic Types</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ETO scope on tankers and chemical tankers. Know the difference between deep-well electric pump and hydraulic drive, and what FLS (flux vector) control is.</strong></div></div>

  <div class="n-h2">Deep-Well Electric Cargo Pump</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Construction:</strong> Submerged squirrel cage induction motor at bottom of cargo tank, directly coupled to centrifugal pump impeller. Long vertical shaft from motor to drive coupling at deck. Motor is <strong>explosion-proof (EEx-d or EEx-e)</strong> rated - cannot be a source of ignition in flammable cargo atmosphere. Cable entry: sealed EEx-d gland. Motor cooling: by cargo being pumped (cargo acts as coolant - motor heats if cargo level drops below motor housing). <strong>Shaft seal:</strong> Critical - prevents cargo from migrating up shaft into bearing housing.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Deep-Well Electric Drive</div>
      <div class="card-desc"><strong>Motor:</strong> Explosion-proof induction motor submerged in cargo.<br><strong>Control:</strong> VFD (flux vector/FLS) for flow control.<br><strong>Pros:</strong> Precise flow control, variable speed, energy efficient.<br><strong>Cons:</strong> Motor inaccessible during cargo operations. Cable integrity critical.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Hydraulic Drive</div>
      <div class="card-desc"><strong>Motor:</strong> Hydraulic motor at bottom of tank (no electrical equipment in cargo space).<br><strong>Drive:</strong> Hydraulic power pack (electric motor + pump) outside cargo zone.<br><strong>Pros:</strong> Inherently safe - no electrical ignition source in cargo space.<br><strong>Cons:</strong> Less precise flow control; hydraulic leaks contaminate cargo.</div>
    </div>
  </div>

  <div class="n-h2">FLS / Flux Vector Control</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>FLS (Flux Vector or Field-Oriented Control):</strong> Advanced VFD control method for deep-well cargo pump motors. Independently controls the flux-producing current (Id) and the torque-producing current (Iq). Achieves full torque at zero speed - vital for starting pump against static head of cargo. Provides smooth ramp-up without excessive starting current. Enables closed-loop flow control: flow meter signal feeds back to VFD → VFD adjusts motor speed to maintain constant flow rate regardless of head changes as tank empties. Prevents cavitation at end of stripping.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Critical protection for deep-well motors:</strong> Motor temperature sensors (PT100 in stator windings) - cabling runs up through shaft. If cargo level drops below motor during operation → motor no longer cooled → overheats → winding damage. Motor protection relay: trips on high winding temperature AND on low motor current (indicating pump has lost prime/cavitating). Never run deep-well motor dry.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory - CARGO PUMP:</strong> Deep-well = EEx motor submerged in cargo, cooled by cargo, VFD/FLS speed control. Hydraulic = electric motor outside tank, hydraulic motor inside - safest for flammables. FLS = flux vector VFD = full torque at zero speed = smooth start against cargo head. Low current trip = pump cavitating = stop motor.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 31: STERN TUBE SEAL HEATING                   -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-stern-tube">🚢 Stern Tube Seal Heating - Purpose, Thermostat &amp; Alarm</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>MISSING from previous notes - ETO scope item on modern vessels. Surveyors ask about stern tube electrical systems during drydock questions.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Stern Tube Construction (Modern Lip Seal Type):</strong> The propeller shaft passes through the stern tube, supported by white-metal or polymer bearings. A seal system at the aft end (water side) prevents seawater ingress into the ship and lubricating oil from leaking outboard. Modern designs: rubber lip seals running on a hardened liner on the shaft. Seal lubricant: mineral-based oil (for non-EAL vessels) or Environmentally Acceptable Lubricant (EAL) required for all new vessels since <span class="n-val">VGP 2013</span> and MARPOL.</div></div>

  <div class="n-h2">Stern Tube Heating - Why It's Needed</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose of electric heating:</strong> When the vessel is in cold water or laid up, stern tube lubricating oil viscosity increases dramatically. At temperatures below <span class="n-val">~10°C</span>, oil can become so thick that it fails to circulate adequately around the bearings on initial startup. Worse: water condensation can form in the oil system if temperature cycling occurs - this creates an oil-water emulsion that destroys bearing surfaces. The electric immersion heater maintains oil temperature at <span class="n-val">30–40°C</span> at all times, ensuring proper lubrication from first shaft rotation.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Thermostat Control</div>
      <div class="card-desc">Bimetallic or electronic thermostat in stern tube LO tank. Set point: <span class="n-val">35–40°C</span>. Below setpoint: heater energises. Above setpoint: heater off. Prevents overheating and degradation of EAL lubricant.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Alarms</div>
      <div class="card-desc"><strong>Low oil level alarm:</strong> Float switch in header/gravity tank - trips alarm and stops heater if oil level falls below safe minimum (oil loss = seal failure = seawater ingress risk).<br><strong>High oil temperature alarm:</strong> Heater thermostat fault - backup high-temp alarm protects oil from degradation.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">ETO Maintenance</div>
      <div class="card-desc">Verify heater element resistance (megger). Check thermostat calibration. Test low-level float switch. Verify alarm outputs reach UMS system. Log oil level and temperature weekly in UMS log.</div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>If stern tube low oil level alarm activates:</strong> Do NOT ignore - oil loss indicates lip seal failure. Seawater ingress through failed seal will damage stern tube bearing. Inspect immediately. In severe cases: reduce speed, notify C/E and Master, plan drydock.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory - STERN TUBE HEATING:</strong> Cold oil = viscous = poor bearing lubrication = bearing damage. Heater keeps oil at 35–40°C. Thermostat on/off control. Low oil level alarm = seal failure risk. High temp alarm = thermostat fault. EAL oil mandatory on modern vessels (VGP 2013).</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 32: PUMP ROOM ENTRY                           -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pumproom">⚠️ Pump Room Entry Safety &amp; Fan Interlock</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Tanker oral essential:</strong> Pump room entry procedure and why the ventilation fan interlock is critical.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Classification:</strong> The pump room is an enclosed space with potential flammable cargo vapour accumulation. Mandatory enclosed space entry procedure required per SOLAS XI-1/7 and company SMS.</div></div>

  <div class="n-h2">Entry Procedure - Step by Step</div>
  <ol class="n-steps">
    <li><strong>Permit to Work (PTW):</strong> Obtain signed enclosed space entry permit (Master or C/E authority). No entry without valid permit.</li>
    <li><strong>Ventilation first:</strong> Start mechanical exhaust fan. Minimum <span class="n-val">10 minutes</span> continuous ventilation before entry. Confirm fan running and exhaust duct clear.</li>
    <li><strong>Atmosphere testing - test at all levels</strong> (cargo vapour is heavier than air - settles at bottom):
      <br>Oxygen: normal <span class="n-val">20.9%</span>; safe entry range <span class="n-val">20.5% – 23.5%</span>
      <br>Flammable vapour (HC): <span class="n-val">&lt;1% LEL</span>
      <br>H₂S (crude oil): <span class="n-val">&lt;10 ppm</span> | CO: <span class="n-val">&lt;35 ppm</span></li>
    <li><strong>Standby person:</strong> One person stationed at entrance at all times. Never enters. Maintains continuous communication. Has means to raise alarm immediately.</li>
    <li><strong>Communications:</strong> Radio or voice contact at regular intervals. Agree emergency signal before entry.</li>
    <li><strong>Rescue equipment at entrance:</strong> SCBA set, lifeline, rescue harness - all ready before entrant goes in.</li>
    <li><strong>Continuous monitoring:</strong> Fan runs throughout. Entrant wears personal gas detector. Standby monitors readings from outside.</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fan Interlock (ETO scope):</strong> The pump room exhaust fan is electrically interlocked with cargo and bilge pump motor starters. Fan running signal must be confirmed before any pump can start. This ensures that if cargo vapour accumulates during pump operation (from shaft seal leaks), it is continuously exhausted rather than building to explosive concentration near the pump motors (ignition sources). ETO must verify this interlock is functional during pre-port checks and PSC inspection preparation.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Never bypass the fan interlock.</strong> H₂S from crude oil is colourless and odourless at high concentrations (olfactory paralysis at ~100 ppm) and lethal within seconds above 300 ppm. Cargo pump shaft seal leaks are the most common source of undetected vapour build-up.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory - PUMP ROOM:</strong> Permit → Ventilate 10 min → Atmosphere test (O₂, HC, H₂S, CO) → Standby person → Communications → Rescue equipment ready → Continuous monitoring. Fan interlock = fan confirmed RUNNING before any pump starts.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 33: OWS / 15ppm                               -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ows">🌊 OWS - Oil/Water Separator &amp; 15 ppm Monitoring</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>MARPOL Annex I requirement.</strong> Know photocell operating principle and 3-way valve action - frequently asked.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>OWS Working Principle:</strong> Bilge water passes through multi-stage separation. Stage 1: gravity separation - oil (lower density) rises, water settles. Stage 2: coalescing filter cartridges - fine oil droplets adhere to filter fibres, merge into larger droplets, rise to collection chamber. Separated oil drains to sludge tank. Treated water (≤ 15 ppm) passes forward to the monitoring unit before any overboard discharge.</div></div>

  <div class="n-h2">15 ppm Bilge Alarm - Optical Photocell Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Nephelometric method:</strong> A light source (LED or laser) shines through a sample cell. Clean water scatters minimal light. Oil droplets scatter light at <span class="n-val">90°</span> to the beam - a detector at 90° measures scattered intensity proportional to oil concentration. Higher oil content = more scatter = higher ppm reading. The instrument continuously samples the treated effluent and compares output to a calibrated threshold.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">&lt; 15 ppm - OVERBOARD</div><div class="card-desc">Oil content monitor reads below threshold → 3-way solenoid valve positions to overboard → discharge permitted per MARPOL Annex I Regulation 15.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">&gt; 15 ppm - RECIRCULATE</div><div class="card-desc">Alarm activates → 3-way valve automatically diverts effluent back to bilge holding tank → overboard discharge stops immediately. Operator alerted. ORB entry required.</div></div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Oil Record Book (ORB):</strong> Every bilge water discharge must be entered in the ORB: date, ship position, quantity discharged, equipment used. Bypassing or tampering with the 15 ppm monitoring system is a criminal offence under MARPOL - prosecuted by Flag and Port State Control.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ETO responsibilities:</strong> Monthly functional test of 15 ppm alarm. Clean optical windows of sample cell (oil fouling gives false high readings). Check 3-way solenoid valve operation. Zero-calibrate with clean fresh water. Verify automatic stopping system wiring intact and tested.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> OWS = gravity + coalescer. Monitor = photocell scatter method. &lt;15 ppm → overboard. &gt;15 ppm → alarm + divert to holding tank. ORB entry always required.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 34: SMOKE DENSITY METER                       -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-smoke-density">🌫️ Smoke Density Meter</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "how does a smoke density meter work?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle (Optical Transmission):</strong> LED/halogen lamp on one side of exhaust duct projects a beam to a photocell on the opposite side. Measures opacity %. 0% = clear, 100% = black smoke (alarm at 30–40%). Ensures MARPOL Annex VI compliance.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-smoke-density-meter.webp" alt="Smoke density meter — lamp, exhaust duct, photocell, air purge nozzles, opacity display" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAADQAwCdASocABMAPu1qrVEppaQiqAqpMB2JaQAALl5SfCAg0ZddlEAA/vHQbdhRawjN82AesgDCF1JHYl15wYRRgbMAiOkJj35ywT9eTDeaFv2XO+1TQcNHoq/TIg94jbzGnXxkR8XYXDoAAAA=">
    <div class="note-diagram-cap">Fig. Smoke Density Meter — light source and photocell face each other across exhaust duct; smoke particles reduce transmitted light; air purge keeps optical windows clean; 0% = clear, alarm at 30–40% opacity</div>
  </div>

  <ul class="n-list">
    <li><strong>Air Purge System:</strong> Compressed air continuously purges across optical windows to prevent soot deposits. <em>Critical: without purge, readings are false high.</em></li>
    <li><strong>Clean Air Reference:</strong> Autozeros against clean air to compensate for lamp aging.</li>
    <li><strong>ETO Maintenance:</strong> Verify purge pressure (0.3–0.5 bar) - most common failure mode. Clean lenses monthly when purge is off. Calibration check quarterly.</li>
  </ul>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 35: SALINOMETER                               -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-salinometer">💧 Salinometer &amp; Fresh Water Generator</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan asks AC electrode physics and boiler scale thresholds.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Salinometer principle:</strong> Measures dissolved salt (NaCl) concentration by proportional electrical conductivity. Dissolved Na⁺ and Cl⁻ ions carry electrical current. AC voltage applied between submerged electrodes (AC mandatory - DC would cause electrolytic electrode polarisation, false readings). Current proportional to conductivity → calibrated to ppm display. Temperature compensation: ~2% per °C.</div></div>
  <div class="n-h2">Salinity Thresholds</div>
  <table class="n-table">
    <tr><th>Application</th><th>Limit</th><th>Why</th></tr>
    <tr><td>High-pressure boiler feedwater</td><td class="bad">&lt;<span class="n-val">2 ppm</span></td><td class="bad">Scale formation → thermal barrier → tube overheating → rupture</td></tr>
    <tr><td>Saturated steam boilers</td><td class="hl">&lt;<span class="n-val">5–10 ppm</span></td><td class="hl">CaCO₃/MgCO₃ scale causes hot spots</td></tr>
    <tr><td>FWG distillate</td><td class="hl">&lt;<span class="n-val">5 ppm</span></td><td class="hl">Dump solenoid valve diverts to bilge if exceeded</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>FWG working:</strong> Distils seawater at low temperature (<span class="n-val">35–40°C</span>) under deep vacuum (<span class="n-val">45–60 mbar</span>). Heat source: main engine jacket cooling water (<span class="n-val">70–90°C</span>). Main engine load interlock: blocks FWG operation below <span class="n-val">40% MCR</span> - insufficient jacket water temperature at low load.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-fresh-water-generator.webp" alt="Fresh water generator — evaporator, condenser, vacuum pump, salinometer, dump valve" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAAAwBACdASocACcAPu1iqk6ppSOiKqwBMB2JaQAAT1/TJTEPIRAmQjZNuAAA/vBoRBr29Z6lV/z0ZltLjXQh/0kFkBJuteJ1NuSXPJQPJNWwNeuU77MwPmMZFUSc9B4JqBpLJjvPf554/JYXFIN+Ehw7AeqftjwIEZ7HN3kFh5tgfP2wyft0OilS5JIl7vlCKYNw1EdAAAA=">
    <div class="note-diagram-cap">Fig. Fresh Water Generator — JCW heat in evaporator boils seawater at 35–40°C under vacuum (45–60 mbar); vapour rises to condenser (cooled by SW); distillate falls to salinometer; dump valve diverts to bilge if salinity &gt;5 ppm</div>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 36: ANTI-HEELING                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-antiheeling">⚖️ Anti-Heeling System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Transfers ballast between port and starboard tanks to maintain ship upright during one-sided cargo loading/discharging.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-anti-heeling.webp" alt="Anti-heeling system — port and starboard ballast tanks, transfer pump, remote valves, inclinometer, control panel" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAwCdASocABIAPu1sq08ppqQiMBgIATAdiWkAADqwqgAA/vB6NU/+2KbYvmI7FCaJzvxRkCKmhrLUB8yZ2YVlyAAAAA==">
    <div class="note-diagram-cap">Fig. Anti-Heeling System — inclinometer detects heel angle; control panel drives transfer pump between port/starboard ballast tanks; remote valve actuators on cross-flooding valves; ETO maintains pump motor, sensors, and valve position feedback</div>
  </div>

  <ul class="n-list">
    <li><strong>ETO controls:</strong> Motor-driven centrifugal pump (transfers ballast). Remote valve actuators on cross-flooding valves. Heel angle sensor (inclinometer) input to control panel.</li>
    <li><strong>Safeties ETO must know:</strong> Pump motor overload protection, tank overfill alarm, remote stop from bridge and CCR, limit switches on valves.</li>
    <li><strong>Monitoring:</strong> Check heel angle display matches inclinometer. Check transfer pump current. Verify tank level sensors.</li>
  </ul>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 37: BILGE INJECTION VALVE                     -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-bilge-inj">🚨 Bilge Injection Valve</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "what is it and when do you use it?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> A large-bore valve (100–150 mm) fitted to the SUCTION SIDE of the main sea water cooling pump. Used for ONE purpose: emergency dewatering of the engine room when normal bilge pumps cannot cope.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Capacities:</strong> Dedicated bilge pump = <span class="n-val">10–50 m³/hr</span>. Main SW cooling pump = <span class="n-val">200–600 m³/hr</span>.<br>
  <strong>Procedure:</strong> Inform C/E and Master. Close SW cooling pump discharge to coolers (to avoid pumping bilge water through engine cooling systems). Open injection valve.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>NEVER use for normal bilge pumping</strong> - it uses the main cooling pump, which cannot simultaneously cool the engine while pumping the bilge. Valve is sealed shut normally.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-seawater-injection-valve.webp" alt="Seawater injection / bilge injection valve — large-bore valve on main SW pump suction" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBACdASocABUAPu1uq1EppiOiqAqpMB2JaQAALo3AKjFFRUGmJQZpIwQAAP7v2s710GoNuTJO/mRCNW1xIuSKWvBFWb7szz3Wme9zMrYSNS3JbNHwMA/UynKT9YnHhSaI4PdofyoLkbg+vIAAAA==">
    <div class="note-diagram-cap">Fig. Seawater/Bilge Injection Valve — large-bore valve (100–150 mm) on main SW cooling pump suction; opened in emergency to pump bilge water overboard at 200–600 m³/hr; cooling water to machinery must be shut first</div>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 38: DEAD SHIP RECOVERY                        -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-deadship">🚨 Dead Ship Recovery - Manual Sequence</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Dead ship = completely without electrical power, automation, and stored starting air.</strong> Must be executed precisely in correct order.</div></div>
  <ol class="n-steps">
    <li>Verify all manual fuel, lube oil, and cooling lines to auxiliary machinery are open</li>
    <li>Start emergency generator from emergency switchboard room using dedicated <span class="n-val">24V DC</span> battery starter bank</li>
    <li>With emergency busbar power, immediately start emergency air compressor to pump up main starting air bottles</li>
    <li>When starting air pressure sufficient, direct air to first auxiliary engine (AE1) - compressed air start</li>
    <li>Monitor AE1 output: verify voltage, frequency, correct phase rotation</li>
    <li>Manually close AE1 ACB to live-charge main switchboard busbar - notify bridge that main power restored</li>
    <li>Start second auxiliary generator - manual synchronisation - parallel onto main busbar</li>
    <li>Shed emergency generator link - restore essential loads sequentially with time delays: steering gear → bilge → main engine SW cooling → LO systems → non-essential last</li>
  </ol>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-blackout.webp" alt="Blackout scenario — all generators tripped, dead bus, emergency switchboard isolated" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASocACgAPu1srlIppaQipWsxMB2JaWfkABMfjrdu7R1MNI33BkgAAP7wSQoT1cCTffQAdhUtKkCiJOPLYNz4my0p/V8btI9vPlnpPXp/ie+IgB9XN5X7owKt7wru0KGlMBrc+SME5iqrVJXd++f+6EIhIgrTJnFOE3c/cEUgBQAAAA==">
    <div class="note-diagram-cap">Fig. Blackout — all ACBs open, main bus dead; emergency switchboard feeds emergency loads from emergency generator; sequential restoration required before re-energising main bus</div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-dead-ship-recovery.webp" alt="Dead ship recovery procedure — battery start emergency gen, air compressor, AE1, manual synchronising" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRpIAAABXRUJQVlA4IIYAAABQBACdASocACgAPu1srlIppaQipWsxMB2JaWfkABMfjrdu7R1MNI33BkgAAP7wSQoT1cCTffQAdhUtKkCiJOPLYNz4my0p/V8btI9vPlnpPXp/ie+IgB9XN5X7owKt7wru0KGlMBrc+SME5iqrVJXd++f+6EIhIgrTJnFOE3c/cEUgBQAAAA==">
    <div class="note-diagram-cap">Fig. Dead Ship Recovery — 24V battery starts emergency generator → emergency air compressor fills starting air → compressed air starts AE1 → manual ACB close restores main bus → second AE parallel → non-essential loads restored last</div>
  </div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 39: UMS PRE-ARRIVAL                           -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ums-prearrival">🚢 UMS Pre-Arrival Verification - 8-Step Protocol</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>4 hours before arrival in port or restricted waters: ER transferred from UMS to fully manned watch.</strong></div></div>
  <ol class="n-steps">
    <li>Log official transfer in electrical log, inform bridge navigation officers</li>
    <li>Test UMS alarm extension - verify alarms mirror to bridge, CE cabin, duty mess</li>
    <li>Verify master Fire Detection Panel - all zones normal, no latched faults</li>
    <li>Test bilge high-level float switches - verify automated bilge pump starters are armed</li>
    <li>Start and load-test standby generator for port electrical loads (cranes, mooring winches)</li>
    <li>Test all mooring winch motors - local pendant and remote controllers, verify EM brakes</li>
    <li>Test bow thruster auxiliary machinery - seal cooling water, gear oil levels, drive parameters</li>
    <li>Full stroke steering gear test port-to-starboard, power unit auto-changeover test, verify nav lights and CCTV</li>
  </ol>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 40: DRYDOCK DUTIES                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-drydock">🔧 Drydock Duties &amp; Working Aloft</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "what are your duties during drydock?"</strong></div></div>
  <ul class="n-list">
    <li><strong>Baseline IR:</strong> Megger test all motors/cables before entering dock. Repeat post-drydock to detect damage.</li>
    <li><strong>ICCP System:</strong> Set MANUAL/OFF before docking. Clean reference electrodes, inspect cables/anodes.</li>
    <li><strong>Shaft Earthing:</strong> Inspect carbon brush (&gt;50% length), spring pressure, clean slip ring.</li>
    <li><strong>Hull Transducers:</strong> Inspect echo sounder/Doppler log fittings, antifouling, zinc anodes.</li>
    <li><strong>Sacrificial Anodes:</strong> Record remaining mass. Renew below 50%.</li>
    <li><strong>Fire Detection &amp; Nav Lights:</strong> Full system tests witnessed by class surveyor.</li>
  </ul>
  <div class="n-h2">Working Aloft Safety Requirements</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>WAP (Working Aloft Permit):</strong> Required for mast/radar work. Minimum two persons. Weather check (&lt;10 knots wind). Full-body harness with two lanyards (100% tied off). Tool control (lanyards, exclusion zone below). <strong>Electrical Isolation:</strong> Radar scanner isolated, nav lights locked off, antennas discharged.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 41: LIFEBOAT AIR BOTTLE                       -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-lifeboat-air">🚁 Air Bottle in Lifeboat / Sprinkler System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "what is the compressed air bottle in the lifeboat for?"</strong></div></div>
  <ol class="n-steps">
    <li><strong>ENGINE STARTING AIR:</strong> Backup starting method if electric starter fails. Compressed air (200–300 bar) piped directly to engine starting air valve.</li>
    <li><strong>BREATHING AIR SUPPLY:</strong> For fire-protected lifeboats on tankers. When launched through burning oil with hatches closed, occupants need breathable air. Provides supply for minimum <span class="n-val">10 minutes</span> (40 L/min per person).</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Maintenance:</strong> Check pressure gauge monthly. Recharge ONLY using Class E (breathing quality) air compressor. 5-year hydrostatic test.</div></div>
  <div class="n-h2">Lifeboat Sprinkler (Water Spray)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Protects enclosed lifeboat from radiant heat/burning oil on sea surface. Engine-driven pump draws sea water through hull cock and sprays entire outer hull surface with continuous water film. Required by SOLAS LSC 4.4.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION 42: LIFTING 2026                              -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-lifting2026">🏗️ New 2026 - Lifting Appliances Regulation (SOLAS II-1/3-13)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand new SOLAS regulation effective <span class="n-val">1 January 2026</span> - surveyors are already asking about this.</strong> First mandatory global standard for all shipboard lifting appliances and anchor handling winches.</div></div>
  <table class="n-table">
    <tr><th>Requirement</th><th>Value</th></tr>
    <tr><td>Proof load test - cranes</td><td class="hl"><span class="n-val">125%</span> of Safe Working Load (SWL)</td></tr>
    <tr><td>Overload test - anchor winches</td><td class="hl"><span class="n-val">110%</span> of Maximum Line Pull (MLP)</td></tr>
    <tr><td>Brake holding test - anchor winches</td><td class="hl"><span class="n-val">110%</span> of Brake Holding Capacity (BHC)</td></tr>
    <tr><td>SWL marking</td><td class="hl">Permanently marked on every appliance - legible and maintained</td></tr>
    <tr><td>Annual examination</td><td class="hl">By a Competent Person annually + after every load test</td></tr>
    <tr><td>Existing vessels</td><td class="hl">Test at first SAFCON renewal survey on or after <span class="n-val">1 January 2026</span></td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ETO Electrical Responsibilities for Cranes:</strong> Maintain motors, VFDs, limit switches, and electromagnetic brakes. Hoist overload limit switch (cut-out at SWL) must be tested annually. VFD parameter backup required. SWL markings missing or faded = statutory deficiency under SOLAS. Crane failure can now cause PSC detention - affects Safety Construction Certificate.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the new 2026 SOLAS testing requirements for anchor handling winches?</strong><br><strong>Ideal Answer:</strong> SOLAS II-1/3-13 effective <span class="n-val">1 January 2026</span>. Anchor winches require: (1) Overload test to <span class="n-val">110% MLP</span>. (2) Brake holding capacity test at <span class="n-val">110% BHC</span>. (3) Annual examination by Competent Person. Existing winches must complete testing by first SAFCON renewal after January 2026. Missing SWL markings = direct PSC deficiency.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SURVEYOR Q&A - SECOND TO LAST                         -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 9</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These questions are confirmed from 2024–2026 MMD oral examinations. Deswal, Kamath, Sanjib, Vishwanathan, Nair, Wad, Gupta all ask from this topic.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the principle of the OMD? (Deswal, Kamath, Sanjib)</strong><br><strong>Ideal Answer:</strong> Photoelectric light extinction (opacity). Rotary valve draws crankcase gas from each unit sequentially through a measuring tube. Light source shines on photocell - oil mist scatters and absorbs light, reducing output proportional to concentration. Reference tube (sealed clean air, identical path length) gives differential reading compensating for lamp aging. Alarm at <span class="n-val">2.5 mg/L</span> - <span class="n-val">20×</span> below LEL of <span class="n-val">50 mg/L</span>. SOLAS Ch II-1 Reg 16 mandatory for engines &gt; <span class="n-val">2250 kW</span>.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is the reference tube needed in the OMD? (Kamath)</strong><br><strong>Ideal Answer:</strong> The reference tube is sealed with clean air at the same optical path length as the measuring tube. As the light source ages, its intensity decreases - measuring absolute light would cause drift and false alarms. Because both tubes experience identical lamp degradation, the differential output between them remains stable and accurate regardless of lamp aging or contamination.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>OMD alarm at sea - what do you do? (Sanjib, Nair)</strong><br><strong>Ideal Answer:</strong> 1. Verify alarm genuine - check reading and identify elevated unit. 2. Reduce to dead slow, notify bridge/CE/OOW. 3. If persists or increases - stop engine. 4. Post watch. 5. Wait minimum <span class="n-val">20 minutes</span> after stopping - atmosphere may still contain mist above LEL. 6. Inspect bearings, piston crowns, liners. 7. Identify root cause before restart. Never open crankcase immediately.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is a crankcase relief valve and why does it have a flame trap? (Deswal)</strong><br><strong>Ideal Answer:</strong> Spring-loaded disc valve fitted at each cylinder unit of the crankcase. On crankcase explosion, pressure pulse opens valve against spring - pressure vents rapidly. A wire mesh flame trap in front of the valve allows pressure to escape but quenches the flame jet, preventing burning gases from exiting and causing secondary explosion in the engine room. Spring closes valve immediately after pressure drops - prevents air re-entry (re-oxygenation would allow secondary explosion). SOLAS mandated for bore &gt;200 mm.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why viscosity control not temperature control for HFO? (Kamath, Gupta, Deswal)</strong><br><strong>Ideal Answer:</strong> Different HFO grades have different viscosity-temperature relationships. RMG 380 needs <span class="n-val">~130–140°C</span> for <span class="n-val">14 cSt</span>; RME 180 only needs <span class="n-val">~100–110°C</span> for <span class="n-val">14 cSt</span>. Temperature control set to 130°C with RME 180 gives <span class="n-val">65–70 cSt</span> - far too viscous for good atomisation. Viscosity controller measures the actual injection property and compensates automatically for any fuel grade change without manual adjustment.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why alarm not trip for steering motor overload? (Vishwanathan, Nair)</strong><br><strong>Ideal Answer:</strong> SOLAS Ch II-1 Reg 29 requires alarm on overload, NOT automatic trip. Loss of steering at sea is more dangerous than a burning motor. Alarm alerts EOOW and bridge - crew can investigate and switch to emergency steering while maintaining control. Automatic trip = immediate loss of steering = far greater danger to vessel and crew.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is pre-purge mandatory before boiler ignition? (Wad, Nair, Deswal)</strong><br><strong>Ideal Answer:</strong> Pre-purge uses FD fan to clear any residual unburnt fuel or combustible gas from the furnace with fresh air - minimum <span class="n-val">3–5 air changes</span>, typically <span class="n-val">2-minute</span> timer. Without purge, residual fuel + ignition spark = furnace explosion. Applies to initial start and every restart after lockout. No ignition attempt permitted until purge complete - hardwired BMS interlock.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is the EM brake spring-applied not spring-released? (Sanjib, Kamath)</strong><br><strong>Ideal Answer:</strong> Spring-applied (SAER) design: brake is ON in de-energised state. Power failure, coil fault, or supply loss automatically applies brake - crane load cannot fall. A spring-released design would drop the load on power failure - unacceptable for lifting equipment. Mandatory for all ship crane and windlass brakes. Air gap must be checked at every survey - too large = brake won't release properly = motor overcurrent trip.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Bow thruster won't start - what do you check? (Vishwanathan, Deswal)</strong><br><strong>Ideal Answer:</strong> Check all 7 interlocks: (1) Vessel speed &lt; <span class="n-val">2 knots</span>. (2) Pitch at zero. (3) Tunnel doors open. (4) Local/remote selector correct. (5) No earth fault on circuit. (6) Cooling water flow confirmed. (7) Gearbox oil level confirmed. If all satisfied: check control fuses, supply breaker, motor thermistor not tripped, undervoltage relay, supply phases.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why no brake on purifier motor? (Deswal, Kamath)</strong><br><strong>Ideal Answer:</strong> Purifier bowl runs at <span class="n-val">6,000–12,000 RPM (typically 7,000–9,000 RPM)</span> with very high rotational inertia. Sudden braking applies enormous deceleration torque to spindle gears - causes gear and bearing damage. More critically, the bowl itself may crack or shatter from sudden stress - catastrophic hazard. Correct: de-energise motor and allow free rundown by inertia for <span class="n-val">20–40 minutes</span>. Never apply brake.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why does HP cutout need manual reset but LP is automatic? (Gupta, Nair)</strong><br><strong>Ideal Answer:</strong> LP cutout trips on normal operational conditions (load variation, defrost cycles) - safe to auto-reset when conditions normalise. HP cutout indicates a serious fault: condenser fouling, refrigerant overcharge, FD fan failure. Auto-reset would allow compressor to restart into same fault condition, cycling dangerously high pressure repeatedly. Engineer must identify and fix the cause before restart.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Can the bridge override a main engine trip? (Nair, Kamath)</strong><br><strong>Ideal Answer:</strong> NO - trips (lube oil low-LOW, overspeed, crankcase explosion) are hardware interlocks, cannot be overridden from bridge. SLOW-DOWNS can be overridden by Master in emergency navigational situation (imminent collision/grounding) where losing propulsion is more dangerous than the engine fault. Override temporarily cancels slow-down alarm - engineer must still investigate immediately.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is auto-tension mode on a mooring winch and what is the danger of leaving it on? (Sanjib, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Auto-tension operates the mooring winch in torque control mode. The VSD maintains constant line tension by paying out if tension exceeds setpoint (ship moves away) and heaving in if line goes slack (tide rises). The critical danger: if auto-tension is left active when the ship departs berth, the winch interprets the ship moving away as increasing tension and continuously pays out the entire wire rope - creating a severe navigational hazard and risk of wire rope foul in propeller.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the CPP feedback potentiometer and what happens if it fails? (Kamath, Wad)</strong><br><strong>Ideal Answer:</strong> The feedback potentiometer is a position sensor on the CPP pitch servo - it provides an analogue signal (typically 4–20 mA or 0–10V) proportional to actual blade pitch to the CPP controller. It closes the servo loop: controller compares demanded pitch vs actual pitch and drives the hydraulic servo until they match. If the potentiometer fails (open circuit, dirty track): the controller receives a constant or erratic position signal → continuously drives the hydraulic servo trying to match a position that is never correctly sensed → pitch hunting/oscillation → vessel manoeuvring hazard. Symptoms: propeller pitch oscillates, cavitation noise, unsteady speed. Action: switch to emergency manual pitch control, notify bridge and C/E.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why does the deep-well cargo pump need an explosion-proof motor? What protection does it have? (Surveyor, tanker context)</strong><br><strong>Ideal Answer:</strong> The motor is submerged inside a cargo tank containing flammable liquid or vapour. Any ignition source - sparks from brushes, arcing from contactors, hot surfaces - could ignite the cargo atmosphere. EEx-d (flameproof) rated motor: the enclosure is strong enough to contain an internal explosion without allowing propagation outside. Motor cooling is by the cargo itself - if cargo level drops below the motor, cooling fails, winding temperature rises rapidly. Protection: winding PT100 temperature sensors (tripped on high temp), VFD current monitoring (low current = pump cavitating = stop motor). Also: EEx-d cable gland sealing integrity is critical - checked at every survey.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the purpose of the stern tube seal heater? (Drydock/maintenance question)</strong><br><strong>Ideal Answer:</strong> The electric immersion heater in the stern tube lubricating oil system maintains oil temperature at 35–40°C when the vessel is in cold water or laid up. Cold oil becomes highly viscous and fails to circulate properly on initial shaft rotation - risking bearing damage on startup. Additionally, temperature cycling without a heater causes condensation inside the oil system - water contaminating the LO creates emulsification, which destroys bearing surfaces. The heater is thermostat-controlled (ON below 35°C, OFF above 40°C) and protected by a low-level alarm. EAL lubricant (mandatory per VGP 2013) is particularly susceptible to low-temperature viscosity increase.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION: GALLEY OVEN CIRCUIT                          -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-galley-oven">🍳 Galley Electric Oven - Circuit &amp; ETO Responsibilities</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What protection does a galley electric oven have? What is an ELCB and how do you test it?" ETO is responsible for all galley electrical equipment.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Galley electric oven construction:</strong> Resistance heating elements (Nichrome wire in ceramic/mineral insulation) rated at 220 V or 440 V single-phase. Controlled by a thermostat (bimetallic strip or capillary tube type) to maintain set temperature. Heating elements are in contact with the metallic oven body - therefore thorough earthing is critical.<br><br>
  <strong>Circuit protection:</strong><br>
  1. <strong>ELCB (Earth Leakage Circuit Breaker) / RCCB:</strong> Detects earth leakage current (imbalance between line and neutral) and trips within milliseconds. Current-operated types trip at <span class="n-val">30 mA</span> residual current - below the threshold of ventricular fibrillation. Provides protection against insulation breakdown to oven body.<br>
  2. <strong>MCB or fuse:</strong> Overcurrent protection for the circuit cable.<br>
  3. <strong>Thermostat:</strong> High-temperature cutout in addition to normal temperature control - prevents fire from uncontrolled heating.<br>
  4. <strong>Earthing conductor:</strong> Continuous earth bond from oven metalwork back to the distribution board earth bar - verified by millivolt drop test on the earth continuity conductor.</div></div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t09-electric-oven.webp" alt="Galley electric oven circuit — heating elements, thermostat, ELCB, MCB, earth bond" loading="lazy" decoding="async" data-blur="data:image/webp;base64,UklGRlgBAABXRUJQVlA4IEwBAABQCACdASocACoAPuVcok2pJSMiNVgMASAciUAXoBsjBh3uY92qqgwwmip0JxoptjxR9vykQs77Z8Ae+F8ecRqqhRTHL5GXwrtaUgAA/vHj2m8deIwp4qybtgieje7jLQWNIm5Z836qQMLHikjv29XQSkH/e6x6JOk4acqKYTAIbgh6edJ053eRtA3JThjIiMz3vj3x1TfML+BCagE09LkrALvkjW/bZmEZYn5qXkBs2fjdu3kX2ggMIdCGSOAFNgTtGlDbMpdFI66fhTREfTtJsBHMgc4xPFeHcxYeio4NAuyYgXAEF0mV2BQUoz8AsG9xcdMwsVvnmE2VYU2pCioyAV4/5bHqJmIr7jezHaq3M4LwX3X/MhHmZjcYJJ1f4g5pJd0rQQHv5Li2vmqM9FT91dpBuUxobSCjFghY3zSVKhRTz4jEIXxWW8hAAA==">
    <div class="note-diagram-cap">Fig. Galley Electric Oven Circuit — resistance heating elements (Nichrome) controlled by thermostat; ELCB trips at 30 mA earth leakage; MCB for overcurrent; earth bond from oven metalwork to distribution board; test ELCB monthly</div>
  </div>

  <div class="n-h2">ETO Test and Maintenance Duties</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>ELCB/RCCB trip test:</strong> Press the TEST button on the ELCB - this injects a simulated imbalance current through an internal resistor. The device must trip within <span class="n-val">40 ms</span>. Test frequency: monthly or as per SMS. Log the result. If the device does not trip on TEST: replace immediately - the protection is non-functional.<br><br>
  <strong>Insulation resistance test:</strong> Megger the oven heating elements to earth with supply isolated - minimum acceptable IR as per ship's SMS (typically <span class="n-val">≥ 1 MΩ</span> for LV equipment). Low IR indicates moisture ingress or element insulation breakdown.<br><br>
  <strong>Earth continuity:</strong> Measure resistance of earth conductor from oven metalwork to distribution board earth. Typical acceptable value: <span class="n-val">≤ 0.5 Ω</span>. High earth resistance defeats the purpose of the ELCB - a fault to the oven body would not return sufficient current to trip if the earth path is broken.<br><br>
  <strong>Fire detection:</strong> Galley hood/extract ductwork must have heat detectors (rate-of-rise or fixed-temperature). Electric galleys do NOT use sprinkler systems - water on electrical equipment creates shock hazard. Fixed gaseous suppression (CO2 or wet chemical for cooking oil fires) may be fitted in the galley exhaust canopy.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- SECTION: FO LEAK-OFF ALARM                            -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-fo-leakoff">🛢️ Fuel Oil Leak-Off System &amp; Alarm</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>A fuel oil leak onto a hot surface (exhaust manifold, turbocharger casing) is a primary cause of engine room fires. The leak-off and drain system is designed to contain and detect such leaks before ignition. ETO maintains the alarm system.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Leak-off piping:</strong> High-pressure fuel injection pipes (injection pump to injector) are double-skinned on modern engines - the outer pipe contains any leak from the inner high-pressure pipe. Drain connections from the outer skin, from injector return connections, and from fuel pump housing drains all lead to a <strong>leak-off manifold</strong> that directs fuel to a <strong>leak-off (drain) tank</strong>.<br><br>
  <strong>Drip trays:</strong> All fuel system components above the double-bottom tanks - fuel valves, filter housings, heaters - sit in enclosed drip trays with a drain to the leak-off tank or bilge.<br><br>
  <strong>Alarm:</strong> A <strong>high-level float switch</strong> in the leak-off tank triggers a bridge and engine room alarm when the tank exceeds its safe fill level. Rapid filling of the leak-off tank indicates a high-pressure fuel leak - immediate investigation required. The alarm is part of the machinery alarm monitoring system (IAS).<br><br>
  <strong>ETO role:</strong> (1) Maintain and calibrate the float switch - verify alarm trigger level at each scheduled service. (2) Ensure drain valves from drip trays are not blocked - a blocked drain causes overflow onto hot surfaces even with a functioning alarm. (3) Confirm alarm cable continuity and that the IAS point is active. (4) Test alarm annually and after any maintenance on the leak-off system.</div></div>

  <!-- ═══════════════════════════════════════════════════════ -->
  <!-- QUICK REVISION - LAST SECTION                         -->
  <!-- ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 9 Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr><td>OMD - principle &amp; calibration</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Photoelectric | Reference tube compensates lamp aging | <span class="n-val">2.5 mg/L</span> | SOLAS &gt;<span class="n-val">2250 kW</span> | Zero + Span | <span class="n-val">20 min</span> wait</td></tr>
    <tr><td>Crankcase relief valve</td><td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td><td>Spring-loaded disc | Flame trap = mesh gauze quenches jet | Spring closes after venting | Bore &gt;200 mm SOLAS</td></tr>
    <tr><td>Steering gear SOLAS overload rule</td><td class="hl">⭐⭐⭐⭐⭐ Vishwanathan, Nair</td><td>ALARM not trip | <span class="n-val">Reg 29</span> | 2 units &gt;<span class="n-val">10k GT</span> | <span class="n-val">35° to 30°</span> in <span class="n-val">28s</span></td></tr>
    <tr><td>Viscotherm - why not temperature</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Gupta, Deswal</td><td>Different grades ≠ same temp for same cSt | PI controller | <span class="n-val">10–14 cSt</span> ME | Fail-close valve</td></tr>
    <tr><td>Boiler pre-purge + flame failure</td><td class="hl">⭐⭐⭐⭐⭐ Wad, Nair, Deswal</td><td><span class="n-val">3–5 air changes</span> mandatory | Flame fail = lockout | UV scanner | Ignition <span class="n-val">10–15 kV</span></td></tr>
    <tr><td>Purifier - no brake on stop</td><td class="hl">⭐⭐⭐⭐ Deswal, Kamath, Vishwanathan</td><td><span class="n-val">9000 RPM</span> → shatters if braked | Free rundown <span class="n-val">20–40 min</span> | Critical speed = pass through fast</td></tr>
    <tr><td>EM brake - SAER fail-safe</td><td class="hl">⭐⭐⭐⭐ Sanjib, Kamath</td><td>Spring ON = safe state | Power off = brake on | Air gap <span class="n-val">0.2–0.5 mm</span></td></tr>
    <tr><td>Bow thruster interlocks</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Deswal</td><td>7 interlocks: speed &lt;<span class="n-val">2 kts</span>, pitch 0, doors, selector, earth fault, cooling, oil</td></tr>
    <tr><td>LP/HP cutout reset types</td><td class="hl">⭐⭐⭐⭐ Gupta, Nair</td><td>LP = auto | HP = manual (serious fault) | Oil diff = manual (bearing protection)</td></tr>
    <tr><td>ME slow-down vs trip + bridge override</td><td class="hl">⭐⭐⭐⭐ Nair, Kamath</td><td>Slow-down = bridge can override | Trip = cannot override | Overspeed independent of governor</td></tr>
    <tr><td>Boiler 3-element level control</td><td class="hl">⭐⭐⭐ Sanjib, Sudhir</td><td>1-element = swell/shrink fooled | 3-element = level + steam + feedwater | Main boiler standard</td></tr>
    <tr><td>Windlass/mooring winch motor + speed control</td><td class="hl">⭐⭐⭐ Sanjib, Vishwanathan</td><td>Squirrel cage + VFD | Band brake mechanical | EM brake SAER | Auto-tension = torque mode</td></tr>
    <tr><td>CPP feedback potentiometer</td><td class="hl">⭐⭐⭐ Kamath, Wad</td><td>Closed-loop pitch servo | Fails = pitch hunting | OD box = rotating oil transfer | HPU = servo pressure</td></tr>
    <tr><td>Cargo pump deep-well motor</td><td class="hl">⭐⭐⭐ Tanker orals</td><td>EEx-d submerged | Cooled by cargo | FLS/flux vector VFD | Low current trip = cavitation</td></tr>
    <tr><td>Stern tube seal heater</td><td class="hl">⭐⭐ Drydock questions</td><td>35–40°C setpoint | Cold oil = bearing damage | Low level alarm = seal failure | EAL oil mandatory</td></tr>
    <tr><td>SOLAS Lifting 2026</td><td class="hl">⭐⭐⭐⭐ All surveyors from Jan 2026</td><td>Cranes <span class="n-val">125% SWL</span> | Winches <span class="n-val">110% MLP + 110% BHC</span> | Annual competent person | First SAFCON renewal</td></tr>
    <tr><td>Auto-tension - danger on departure</td><td class="hl">⭐⭐⭐ Sanjib, Vishwanathan</td><td>Torque control mode | Pays out if tension rises | Must cancel before departure | Wire foul in propeller risk</td></tr>
    <tr><td>Air compressor - unloaded start + regs</td><td class="hl">⭐⭐⭐ General</td><td>Unloader bypass → motor runs free → loads after speed reached | <span class="n-val">1 hr max</span> per bottle | <span class="n-val">30 min max</span> per compressor</td></tr>
  </table>

    </div>
</div>
</div>
`);
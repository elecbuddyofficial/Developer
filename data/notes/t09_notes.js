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
    <button class="anc-btn" onclick="jumpTo('s-visco')">Viscotherm</button>
    <button class="anc-btn" onclick="jumpTo('s-steering')">Steering Gear</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler')">Boiler BMS</button>
    <button class="anc-btn" onclick="jumpTo('s-embrake')">EM Brake</button>
    <button class="anc-btn" onclick="jumpTo('s-thruster')">Bow Thruster</button>
    <button class="anc-btn" onclick="jumpTo('s-purifier')">Purifier</button>
    <button class="anc-btn" onclick="jumpTo('s-reefer')">Refrigeration</button>
    <button class="anc-btn" onclick="jumpTo('s-engine')">Main Engine</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-omd">🔍 Oil Mist Detector (OMD)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath, Sanjib - all surveyors ask this.</strong> Know principle, reference tube purpose, calibration (zero + span), alarm actions, and why you cannot open crankcase immediately.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle - Photoelectric Light Extinction:</strong> Rotary sampling valve draws crankcase gas from each cylinder unit in sequence. Calibrated light source shines through measuring tube onto photocell. Oil mist droplets scatter and absorb light - photocell output decreases proportional to concentration. <strong>Reference tube:</strong> Sealed clean-air tube with identical optical path length - differential comparison compensates for lamp aging and contamination drift. Make: <span class="n-val">Graviner</span> (most common), Dräger MK8, Kidde.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Alarm Threshold</div><div class="card-val"><span class="n-val">2.5 mg/L</span></div><div class="card-desc">Newer units: <span class="n-val">2.0 mg/L</span>. LEL of oil mist ≈ <span class="n-val">50 mg/L</span> - gives <span class="n-val">20×</span> safety margin before explosion risk.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Response Time</div><div class="card-val"><span class="n-val">&lt; 20 seconds</span></div><div class="card-desc">From mist entering sampling point to alarm activation - fast enough for protective action before catastrophic failure.</div></div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS Ch II-1 Reg 16:</strong> Crankcase explosion protection mandatory for engines with power <span class="n-val">&gt; 2250 kW</span> OR cylinder bore <span class="n-val">&gt; 300 mm</span>. Crankcase must be maintained at slight negative pressure; relief valves fitted to prevent explosion pressure waves.</div></div>

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

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-visco">🌡️ Viscosity Controller (Viscotherm)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Gupta, Deswal ask this.</strong> Know WHY viscosity control is better than temperature control - the critical exam question about different fuel grades.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Motor drives a spindle at constant speed through flowing HFO. Torque required to maintain constant speed is proportional to viscosity. Higher viscosity = more torque = higher motor current. Current converted to <span class="n-val">4–20 mA</span> signal → PI controller → compares to setpoint → adjusts steam control valve (<span class="n-val">3–15 psi</span> pneumatic) on HFO heater. Steam valve is <strong>fail-close</strong> type - loss of air or signal closes steam safely.</div></div>

  <div class="n-grid">
    <div class="n-card"><div class="card-title">Main Engine Target</div><div class="card-val"><span class="n-val">10–14 cSt</span></div><div class="card-desc">At injector. Too high = poor atomisation. Too low = increased wear, pump seizure risk.</div></div>
    <div class="n-card"><div class="card-title">Auxiliary Engine Target</div><div class="card-val"><span class="n-val">14–20 cSt</span></div><div class="card-desc">AE injectors have less robust fuel systems - operate at slightly higher viscosity.</div></div>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why viscosity NOT temperature control?</strong> Different HFO grades have different viscosity-temperature relationships. RMG 380 requires ~<span class="n-val">130–140°C</span> to reach <span class="n-val">14 cSt</span>. RME 180 only needs ~<span class="n-val">100–110°C</span> to reach <span class="n-val">14 cSt</span>. If temperature-controlled to 130°C when running RME 180 - fuel reaches only <span class="n-val">65–70 cSt</span> - far too viscous for good atomisation. Viscosity controller measures the actual injection property and compensates automatically for any fuel grade change.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PI controller - why not PID?</strong> Proportional action gives immediate response. Integral action eliminates steady-state offset. Derivative (D) is not used because viscosity changes are slow and the rotating spindle signal contains mechanical vibration noise from fuel pumps - derivative action would amplify this noise causing erratic valve hunting.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Spindle current ∝ viscosity | <span class="n-val">10–14 cSt</span> ME | <span class="n-val">14–20 cSt</span> AE | PI controller | Fail-close steam valve | Different fuel grades = same temperature ≠ same viscosity → viscosity control wins.</div></div>

  <!-- ═══ SECTION 3 ═══ -->
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

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS - Motor Overload = ALARM ONLY, never trip.</strong> Loss of steering at sea is more dangerous than a burning motor. Alarm alerts EOOW and bridge - crew investigate while steering is maintained.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Phase Failure Relay - mandatory on steering gear:</strong> Monitors all 3 phases. Trips circuit if any phase is lost, reversed, or has voltage imbalance. Single-phasing = motor draws <span class="n-val">1.73×</span> normal current → rapid overheating. Phase reversal = motor runs backwards → rudder turns wrong way → severe navigation hazard.</div></div>

  <div class="n-h2">Rudder Hunting - Diagnosis and Cure</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Rudder hunting:</strong> Continuous oscillation about demanded position. Cause: hunting gear (feedback linkage) worn, disconnected, or maladjusted - cancellation signal absent/incorrect → solenoid remains energised → overshoot → reverse → continuous oscillation. Diagnosis: switch to NFU mode - if hunting stops, fault is in FU feedback path. Fix: check hunting gear pin, linkage wear, feedback potentiometer.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> FU = hunting gear cancels solenoid when angle reached | NFU = no feedback, hold lever | Phase fail relay MANDATORY | Overload = ALARM ONLY (SOLAS) | 2 units &gt; <span class="n-val">10k GT</span> | Test within <span class="n-val">12 hours</span> before departure.</div></div>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-boiler">🔥 Boiler BMS - Burner Management System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Wad, Nair, Deswal ask all boiler trips.</strong> Know every trip, flame failure lockout procedure, pre-purge requirement, and UV scanner vs photocell difference.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BMS Working Principle:</strong> Dedicated safety PLC or hardwired interlock system supervising all safety conditions before, during, and after burner operation. Enforces mandatory pre-purge using FD fan before ignition. Flame scanner continuously monitors for flame - fuel solenoid closes immediately on flame loss → lockout state.</div></div>

  <div class="n-h2">All Boiler Trips - Know Every One</div>
  <table class="n-table">
    <tr><th>#</th><th>Trip</th><th>Reset</th><th>Notes</th></tr>
    <tr><td>1</td><td><strong>Low-low water level</strong></td><td class="bad">Lockout - manual</td><td>Immediate trip, no delay. Prevents dry firing and tube explosion.</td></tr>
    <tr><td>2</td><td><strong>Flame failure</strong></td><td class="bad">Lockout - manual</td><td>Fuel solenoid closes. Must identify and fix cause before reset.</td></tr>
    <tr><td>3</td><td><strong>High steam pressure</strong></td><td class="bad">Manual reset</td><td>Set ~<span class="n-val">3–5%</span> above working pressure. Before mechanical safety valve lifts.</td></tr>
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

  <!-- ═══ SECTION 5 ═══ -->
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

  <!-- ═══ SECTION 6 ═══ -->
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

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Protection on thruster motor:</strong> Overcurrent relay, earth fault relay, winding thermistors (temperature), bearing temperature sensors (PT100/NTC), vibration sensor (larger units). Any protection tripping requires investigation before restart.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Thruster won't start = check interlocks: Speed → Pitch → Doors → Selector → Earth fault → Cooling → Oil level. All 7 must be satisfied.</div></div>

  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-purifier">⚡ Purifier (Separator) - Electrical Aspects</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath, Vishwanathan ask this.</strong> Know vibration trip causes, why no brake on stop, and critical speed behaviour.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Vibration Trip:</strong> Purifier bowl becomes unbalanced → excessive vibration → vibration sensor (accelerometer or proximity switch on frame) → trips motor. Causes of imbalance: incorrect assembly after cleaning (bowl parts not properly seated), foreign object in bowl, worn spindle bearing, bowl not properly closed before start.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why NO brake on purifier motor?</strong> Bowl runs at <span class="n-val">6,000–9,000 RPM</span> with high rotational inertia. Sudden braking = enormous deceleration torque on spindle gears = gear/bearing damage. Worse: bowl may crack or shatter from sudden stress - catastrophic hazard. Correct stop: de-energise motor → free rundown by inertia → takes <span class="n-val">20–40 minutes</span> to stop. NEVER apply brake.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Critical Speed:</strong> During run-up, purifier passes through resonant frequency of rotating assembly. Vibration amplitude peaks briefly at this speed - can trigger vibration trip if sensor too sensitive. Solution: pass through critical speed quickly - do not dwell at that RPM. Vibration trip is time-delayed or inhibited during start-up run-through period.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Purifier = no brake, ever - <span class="n-val">9000 RPM</span> mass shatters if braked. Free rundown takes <span class="n-val">20–40 min</span>. Critical speed = pass through fast, don't dwell.</div></div>

  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-reefer">❄️ Refrigeration - LP/HP Cutouts &amp; Oil Differential</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Gupta, Nair ask this.</strong> Know the key difference: LP = automatic reset, HP = manual reset - and WHY.</div></div>

  <table class="n-table">
    <tr><th>Cutout</th><th>Reset</th><th>Condition</th><th>Reason for Reset Type</th></tr>
    <tr><td><strong>LP Cutout (Low Pressure)</strong></td><td class="ok">Automatic</td><td>Suction pressure below setpoint</td><td>Normal operational variation - load changes, defrost cycles. Safe to auto-reset.</td></tr>
    <tr><td><strong>HP Cutout (High Pressure)</strong></td><td class="bad">Manual</td><td>Discharge pressure above setpoint</td><td>Indicates serious fault - condenser fouling, refrigerant overcharge, fan failure. Auto-reset risks dangerous over-pressure cycling.</td></tr>
    <tr><td><strong>Oil Differential Cutout</strong></td><td class="bad">Manual</td><td>(Lube oil pressure − crankcase pressure) below minimum</td><td>Bearing protection - insufficient lubrication. Engineer must investigate before restart.</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> LP = automatic (normal operation variation). HP = manual reset (serious fault - investigate first). Oil differential = manual (bearing protection - don't restart blind).</div></div>

  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-engine">🔧 Main Engine - Slow-Down vs Trip</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Nair, Kamath ask this.</strong> Know which faults trigger slow-down vs trip, and whether bridge can override either.</div></div>

  <table class="n-table">
    <tr><th>Action</th><th>Triggered by</th><th>Bridge Override?</th></tr>
    <tr><td><strong>SLOW-DOWN</strong> (reduce to min safe RPM)</td><td>OMD alarm | HT water high temperature | Bearing temp high | Scavenge fire | Lube oil low pressure (1st stage)</td><td class="hl">YES - Master can override in navigational emergency (imminent collision/grounding)</td></tr>
    <tr><td><strong>TRIP</strong> (full stop)</td><td>Lube oil low-LOW pressure | Overspeed | Crankcase explosion | HT water high-HIGH temperature</td><td class="bad">NO - Hardware interlock, cannot override</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Overspeed trip:</strong> Trips engine when RPM exceeds ~<span class="n-val">110–115%</span> of rated speed. INDEPENDENT of governor - separate mechanical or electronic speed sensing. If governor fails and engine overspeeds, overspeed trip acts as final safety. Test: monthly or per PMS schedule.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Bridge slow-down override:</strong> Temporarily cancels the slow-down alarm - engineer must still investigate immediately. Override is only for emergency navigation situations where losing propulsion is more dangerous than the engine fault.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Slow-down = advisory, bridge can override in emergency. Trip = absolute, no override. Overspeed trip is INDEPENDENT of governor - last line of defence.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <!-- ═══ T09 GAPS ADDED ═══ -->

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

  <div class="n-h1" id="s-salinometer">💧 Salinometer &amp; Fresh Water Generator</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan asks AC electrode physics and boiler scale thresholds.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Salinometer principle:</strong> Measures dissolved salt (NaCl) concentration by proportional electrical conductivity. Dissolved Na⁺ and Cl⁻ ions carry electrical current. AC voltage applied between submerged electrodes (AC mandatory - DC would cause electrolytic electrode polarisation, false readings). Current proportional to conductivity → calibrated to ppm display. Temperature compensation: ~2% per °C.</div></div>
  <div class="n-h2">Salinity Thresholds</div>
  <table class="n-table">
    <tr><th>Application</th><th>Limit</th><th>Why</th></tr>
    <tr><td>High-pressure boiler feedwater</td><td class="bad">&lt;<span class="n-val">2 ppm</span></td><td class="bad">Scale formation → thermal barrier → tube overheating → rupture</td></tr>
    <tr><td>Saturated steam boilers</td><td class="hl">&lt;<span class="n-val">5–10 ppm</span></td><td class="hl">CaCO3/MgCO3 scale causes hot spots</td></tr>
    <tr><td>FWG distillate</td><td class="hl">&lt;<span class="n-val">5 ppm</span></td><td class="hl">Dump solenoid valve diverts to bilge if exceeded</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>FWG working:</strong> Distils seawater at low temperature (<span class="n-val">35–40°C</span>) under deep vacuum (<span class="n-val">45–60 mbar</span>). Heat source: main engine jacket cooling water (<span class="n-val">70–90°C</span>). Main engine load interlock: blocks FWG operation below <span class="n-val">40% MCR</span> - insufficient jacket water temperature at low load.</div></div>

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

  <div class="n-h1" id="s-jcw">🌡️ Jacket Cooling Water (JCW) Automation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>JCW loop:</strong> Closed fresh-water system, system pressure <span class="n-val">2–4 bar</span>. Circulates through cylinder liners, heads, exhaust valve casings. Heat rejected via Fresh Water Cooler (FWC) to seawater loop. Modulating 3-way thermostatic valve maintains engine outlet temperature <span class="n-val">75–85°C</span>.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Temperature extremes:</strong><br>
  Too cold (&lt;<span class="n-val">55°C</span>): Combustion exhaust condenses + sulphur → sulphuric acid on liner walls → severe COLD CORROSION → destroys cylinder liners. Electric immersion pre-heater must maintain <span class="n-val">50–60°C</span> when engine stopped.<br>
  Too hot (&gt;<span class="n-val">90°C</span>): Localised flashing/boiling → steam pockets → hot spots → thermal stress cracking. Corrosion suppressed by nitrite/molybdate inhibitor dosing.</div></div>

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

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 9</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These questions are confirmed from 2024–2026 MMD oral examinations. Deswal, Kamath, Sanjib, Vishwanathan, Nair, Wad, Gupta all ask from this topic.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the principle of the OMD? (Deswal, Kamath, Sanjib)</strong><br><strong>Ideal Answer:</strong> Photoelectric light extinction (opacity). Rotary valve draws crankcase gas from each unit sequentially through a measuring tube. Light source shines on photocell - oil mist scatters and absorbs light, reducing output proportional to concentration. Reference tube (sealed clean air, identical path length) gives differential reading compensating for lamp aging. Alarm at <span class="n-val">2.5 mg/L</span> - <span class="n-val">20×</span> below LEL of <span class="n-val">50 mg/L</span>. SOLAS Ch II-1 Reg 16 mandatory for engines &gt; <span class="n-val">2250 kW</span>.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is the reference tube needed in the OMD? (Kamath)</strong><br><strong>Ideal Answer:</strong> The reference tube is sealed with clean air at the same optical path length as the measuring tube. As the light source ages, its intensity decreases - measuring absolute light would cause drift and false alarms. Because both tubes experience identical lamp degradation, the differential output between them remains stable and accurate regardless of lamp aging or contamination.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>OMD alarm at sea - what do you do? (Sanjib, Nair)</strong><br><strong>Ideal Answer:</strong> 1. Verify alarm genuine - check reading and identify elevated unit. 2. Reduce to dead slow, notify bridge/CE/OOW. 3. If persists or increases - stop engine. 4. Post watch. 5. Wait minimum <span class="n-val">20 minutes</span> after stopping - atmosphere may still contain mist above LEL. 6. Inspect bearings, piston crowns, liners. 7. Identify root cause before restart. Never open crankcase immediately.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why viscosity control not temperature control for HFO? (Kamath, Gupta, Deswal)</strong><br><strong>Ideal Answer:</strong> Different HFO grades have different viscosity-temperature relationships. RMG 380 needs ~<span class="n-val">130–140°C</span> for <span class="n-val">14 cSt</span>; RME 180 only needs ~<span class="n-val">100–110°C</span> for <span class="n-val">14 cSt</span>. Temperature control set to 130°C with RME 180 gives <span class="n-val">65–70 cSt</span> - far too viscous for good atomisation. Viscosity controller measures the actual injection property and compensates automatically for any fuel grade change without manual adjustment.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why alarm not trip for steering motor overload? (Vishwanathan, Nair)</strong><br><strong>Ideal Answer:</strong> SOLAS Ch II-1 Reg 29 requires alarm on overload, NOT automatic trip. Loss of steering at sea is more dangerous than a burning motor. Alarm alerts EOOW and bridge - crew can investigate and switch to emergency steering while maintaining control. Automatic trip = immediate loss of steering = far greater danger to vessel and crew.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is pre-purge mandatory before boiler ignition? (Wad, Nair, Deswal)</strong><br><strong>Ideal Answer:</strong> Pre-purge uses FD fan to clear any residual unburnt fuel or combustible gas from the furnace with fresh air - minimum <span class="n-val">3–5 air changes</span>, typically <span class="n-val">2-minute</span> timer. Without purge, residual fuel + ignition spark = furnace explosion. Applies to initial start and every restart after lockout. No ignition attempt permitted until purge complete - hardwired BMS interlock.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is the EM brake spring-applied not spring-released? (Sanjib, Kamath)</strong><br><strong>Ideal Answer:</strong> Spring-applied (SAER) design: brake is ON in de-energised state. Power failure, coil fault, or supply loss automatically applies brake - crane load cannot fall. A spring-released design would drop the load on power failure - unacceptable for lifting equipment. Mandatory for all ship crane and windlass brakes. Air gap must be checked at every survey - too large = brake won't release properly = motor overcurrent trip.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Bow thruster won't start - what do you check? (Vishwanathan, Deswal)</strong><br><strong>Ideal Answer:</strong> Check all 7 interlocks: (1) Vessel speed &lt; <span class="n-val">2 knots</span>. (2) Pitch at zero. (3) Tunnel doors open. (4) Local/remote selector correct. (5) No earth fault on circuit. (6) Cooling water flow confirmed. (7) Gearbox oil level confirmed. If all satisfied: check control fuses, supply breaker, motor thermistor not tripped, undervoltage relay, supply phases.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why no brake on purifier motor? (Deswal, Kamath)</strong><br><strong>Ideal Answer:</strong> Purifier bowl runs at <span class="n-val">6,000–9,000 RPM</span> with very high rotational inertia. Sudden braking applies enormous deceleration torque to spindle gears - causes gear and bearing damage. More critically, the bowl itself may crack or shatter from sudden stress - catastrophic hazard. Correct: de-energise motor and allow free rundown by inertia for <span class="n-val">20–40 minutes</span>. Never apply brake.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why does HP cutout need manual reset but LP is automatic? (Gupta, Nair)</strong><br><strong>Ideal Answer:</strong> LP cutout trips on normal operational conditions (load variation, defrost cycles) - safe to auto-reset when conditions normalise. HP cutout indicates a serious fault: condenser fouling, refrigerant overcharge, FD fan failure. Auto-reset would allow compressor to restart into same fault condition, cycling dangerously high pressure repeatedly. Engineer must identify and fix the cause before restart.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Can the bridge override a main engine trip? (Nair, Kamath)</strong><br><strong>Ideal Answer:</strong> NO - trips (lube oil low-LOW, overspeed, crankcase explosion) are hardware interlocks, cannot be overridden from bridge. SLOW-DOWNS can be overridden by Master in emergency navigational situation (imminent collision/grounding) where losing propulsion is more dangerous than the engine fault. Override temporarily cancels slow-down alarm - engineer must still investigate immediately.</div></div>

  <!-- ═══ QUICK REVISION ═══ -->
  
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

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 9 Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr><td>OMD - principle &amp; calibration</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Photoelectric | Reference tube compensates lamp aging | <span class="n-val">2.5 mg/L</span> | SOLAS &gt;<span class="n-val">2250 kW</span> | Zero + Span | <span class="n-val">20 min</span> wait</td></tr>
    <tr><td>Steering gear SOLAS overload rule</td><td class="hl">⭐⭐⭐⭐⭐ Vishwanathan, Nair</td><td>ALARM not trip | <span class="n-val">Reg 29</span> | 2 units &gt;<span class="n-val">10k GT</span> | <span class="n-val">35° to 30°</span> in <span class="n-val">28s</span></td></tr>
    <tr><td>Viscotherm - why not temperature</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Gupta, Deswal</td><td>Different grades ≠ same temp for same cSt | PI controller | <span class="n-val">10–14 cSt</span> ME | Fail-close valve</td></tr>
    <tr><td>Boiler pre-purge + flame failure</td><td class="hl">⭐⭐⭐⭐⭐ Wad, Nair, Deswal</td><td><span class="n-val">3–5 air changes</span> mandatory | Flame fail = lockout | UV scanner | Ignition <span class="n-val">10–15 kV</span></td></tr>
    <tr><td>Purifier - no brake on stop</td><td class="hl">⭐⭐⭐⭐ Deswal, Kamath, Vishwanathan</td><td><span class="n-val">9000 RPM</span> → shatters if braked | Free rundown <span class="n-val">20–40 min</span> | Critical speed = pass through fast</td></tr>
    <tr><td>EM brake - SAER fail-safe</td><td class="hl">⭐⭐⭐⭐ Sanjib, Kamath</td><td>Spring ON = safe state | Power off = brake on | Air gap <span class="n-val">0.2–0.5 mm</span></td></tr>
    <tr><td>Bow thruster interlocks</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Deswal</td><td>7 interlocks: speed &lt;<span class="n-val">2 kts</span>, pitch 0, doors, selector, earth fault, cooling, oil</td></tr>
    <tr><td>LP/HP cutout reset types</td><td class="hl">⭐⭐⭐⭐ Gupta, Nair</td><td>LP = auto | HP = manual (serious fault) | Oil diff = manual (bearing protection)</td></tr>
    <tr><td>ME slow-down vs trip + bridge override</td><td class="hl">⭐⭐⭐⭐ Nair, Kamath</td><td>Slow-down = bridge can override | Trip = cannot override | Overspeed independent of governor</td></tr>
  </table>

</div>
</div>`);

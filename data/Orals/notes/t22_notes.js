window.loadNotes("T22", `<div class="view" id="view-notes-t22">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T22')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 22 - ETO Practical &amp; Miscellaneous</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
      <span class="tag tag-purple">Exam Verified</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-etofundamentals')">ETO Fundamentals Drill</button>
    <button class="anc-btn" onclick="jumpTo('s-duties')">ETO Duties &amp; Routines</button>
    <button class="anc-btn" onclick="jumpTo('s-drydock')">Drydock ETO Duties</button>
    <button class="anc-btn" onclick="jumpTo('s-coldiron')">Cold Ironing &amp; Shore Power</button>
    <button class="anc-btn" onclick="jumpTo('s-wrongway')">Wrong Way Alarm</button>
    <button class="anc-btn" onclick="jumpTo('s-blackout')">Blackout Recovery</button>
    <button class="anc-btn" onclick="jumpTo('s-permits')">Permits &amp; Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-shocktreatment')">Electric Shock Treatment</button>
    <button class="anc-btn" onclick="jumpTo('s-enclosedspace')">Enclosed Space Entry</button>
    <button class="anc-btn" onclick="jumpTo('s-welding')">Welding &amp; Crane Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler')">Boiler Burner &amp; VRCS</button>
    <button class="anc-btn" onclick="jumpTo('s-cableorder')">Cable Ordering</button>
    <button class="anc-btn" onclick="jumpTo('s-troubleshoot')">Troubleshooting &amp; 6-Step</button>
    <button class="anc-btn" onclick="jumpTo('s-imosymbols')">IMO Safety Symbols</button>
    <button class="anc-btn" onclick="jumpTo('s-emergencydrills')">Emergency Drills - ETO Role</button>
    <button class="anc-btn" onclick="jumpTo('s-diagnostics')">Diagnostics &amp; Measurements</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked - All Surveyors (Praveen Nair, Deswal, Kamath, Vishwanathan):</strong> Cold ironing procedure &amp; interlocks · Low IR troubleshooting step-by-step · Cable ordering specs · MCA 6-Step Framework · Electric shock response · Blackout recovery with load sequencing · Saturday routine · Pre-sailing checks.</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-etofundamentals">1. ETO Fundamentals Quick-Fire Drill</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Note:</strong> A dedicated "basics drill block" is specifically flagged as exam-relevant. Surveyors from Kamath and Vishwanathan randomly fire these at the start of the oral to check alertness.</div></div>

  <div class="n-h2">Electrical Quantities - Quick Reference</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:14px;">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title">RMS &amp; Peak</div>
      <div class="card-desc">V_peak = V_rms × √2<br>V_rms = V_peak / √2<br>For 440 V rms → peak = 622 V</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title">3-Phase Relations</div>
      <div class="card-desc">Star: V_L = √3 × V_ph (440 = √3 × 254)<br>I_L = I_ph<br>Delta: V_L = V_ph; I_L = √3 × I_ph</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title">Phase Angle</div>
      <div class="card-desc">3-phase phases separated by 120°.<br>Phase = complete cycle of AC waveform.<br>Frequency = cycles per second (Hz).</div>
    </div>
  </div>

  <table class="n-table">
    <tr><th>Concept</th><th>Quick-Fire Answer</th></tr>
    <tr><td><strong>Safe voltage (ship)</strong></td><td>≤50 V between conductors for portable tools in confined/wet spaces. 110 V CTE for general portable tools ashore.</td></tr>
    <tr><td><strong>AC vs DC lethality</strong></td><td>AC is more dangerous at same voltage - causes muscular tetany (cannot let go); DC causes single jerk. However, high-voltage DC is equally lethal. AC 50 Hz most dangerous as it resonates with heart frequency.</td></tr>
    <tr><td><strong>Lenz's Law</strong></td><td>Induced EMF always opposes the change producing it (reason for back-EMF in motors, inrush on energisation).</td></tr>
    <tr><td><strong>Farad (F)</strong></td><td>Unit of capacitance. C = Q/V. Practical units: μF, nF, pF.</td></tr>
    <tr><td><strong>F/m (permittivity)</strong></td><td>Permittivity (ε) in F/m - property of insulating material determining capacitance per unit length of cable.</td></tr>
    <tr><td><strong>V/m (electric field)</strong></td><td>Electric field strength E = V/d. Used in cable insulation stress calculations.</td></tr>
    <tr><td><strong>Alnico magnets</strong></td><td>Aluminium-Nickel-Cobalt alloy. Used in moving-coil instruments, tachometers. High coercivity (resist demagnetisation).</td></tr>
    <tr><td><strong>Inductor current rise</strong></td><td>Current rises exponentially with time constant τ = L/R. Cannot change instantaneously - causes voltage spike when circuit opened (use flyback diode / varistor).</td></tr>
    <tr><td><strong>Parallel resistive heaters</strong></td><td>Each heater gets full voltage - total heat output INCREASES when more heaters added in parallel (lower total resistance, more current).</td></tr>
    <tr><td><strong>Earth potential</strong></td><td>Earth / hull / ground is always defined as zero (0 V) reference potential.</td></tr>
    <tr><td><strong>Parallel conductors - force</strong></td><td>Parallel conductors carrying current in SAME direction attract each other (Ampere's law). Opposite direction → repel.</td></tr>
    <tr><td><strong>Fluorescent lamp</strong></td><td>Requires choke (ballast) in series to limit current after arc strikes. Starter heats cathodes before ignition. PF ~0.5 lagging - need PF correction capacitor in parallel.</td></tr>
    <tr><td><strong>Solenoid</strong></td><td>Coil of wire producing magnetic field when current flows. Electromagnetic force acts on iron core → linear motion. Used in valve actuators, contactors, door locks.</td></tr>
    <tr><td><strong>Photocell (LDR)</strong></td><td>Light-Dependent Resistor. Resistance decreases in light (falls from MΩ to kΩ). Used in day/night lighting control.</td></tr>
    <tr><td><strong>Overload relay setting</strong></td><td>Set at 90–105% of full-load current (FLC). Typically 100% FLC with thermal characteristic. Allows short-term overload (starting) but trips on sustained overload.</td></tr>
    <tr><td><strong>Star-delta rewiring</strong></td><td>To change star to delta: remove shorting link (A2-B2-C2 star point). Connect A2-B1, B2-C1, C2-A1. Motor now delta-connected - runs at full voltage with higher torque but also higher FLC.</td></tr>
    <tr><td><strong>Resistor colour code</strong></td><td><strong>B</strong>lack <strong>B</strong>rown <strong>R</strong>ed <strong>O</strong>range <strong>Y</strong>ellow <strong>G</strong>reen <strong>B</strong>lue <strong>V</strong>iolet <strong>G</strong>rey <strong>W</strong>hite = 0–9. Mnemonic: <em>"BB ROY of Great Britain Very Good Wife"</em></td></tr>
  </table>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Star vs Delta V&amp;I:</strong><br>
  <strong>S</strong>tar → V_<strong>L</strong>ine = √3 × V_Phase (Line voltage is <strong>L</strong>arger)<br>
  <strong>D</strong>elta → I_<strong>L</strong>ine = √3 × I_Phase (Line current is <strong>L</strong>arger)<br>
  In star: same I, bigger V. In delta: same V, bigger I.</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-duties">2. ETO Duties, Routines &amp; PMS</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-h2">Daily ETO Rounds (Morning)</div>
  <ul class="n-list">
    <li><strong>Alarm Printer:</strong> Review overnight alarm printout - note any recurring alarms.</li>
    <li><strong>MSB Walk-Around:</strong> Check kW load, PF, bus voltage, Earth Fault lamps (all 3 equally bright = healthy insulated system). Note any asymmetry.</li>
    <li><strong>Generators:</strong> Check running generator for unusual sounds, temperature, coolant level, exhaust colour.</li>
    <li><strong>Panels:</strong> Fire detection panel - all healthy. GMDSS panel - no alarms. Navigation light panel - all healthy. Engine alarm panel - clear.</li>
    <li><strong>Reefer Monitoring:</strong> Verify all reefer temperatures within set-point ±1°C. Log anomalies.</li>
    <li><strong>Battery Chargers:</strong> Verify float voltage (lead-acid: 2.25 V/cell; NiCd: 1.4 V/cell). Check electrolyte levels weekly.</li>
    <li><strong>PMS Tasks:</strong> Complete scheduled maintenance tasks, record work and findings, manage open defects, requisition spares, complete risk assessments.</li>
    <li><strong>Electrical Log:</strong> Record all jobs, tests, materials, and parameters at end of watch.</li>
  </ul>

  <div class="n-h2">Saturday (Weekly) Routine</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>High Exam Frequency:</strong> Surveyors (especially Deswal, Kamath) regularly ask "What is your Saturday routine as ETO?"</div></div>
  <ol class="n-steps">
    <li><strong>Emergency Generator Test:</strong> Start and run EG under load. Verify auto-start function. Check run-up time (&lt;45 sec to full load per SOLAS).</li>
    <li><strong>Emergency Lighting Test:</strong> Switch off main supply to emergency lighting panels - verify automatic changeover and battery backup operation.</li>
    <li><strong>Battery Inspection:</strong> Check emergency battery banks - electrolyte level, SG, terminal condition, float charge voltage. Record in log.</li>
    <li><strong>Fire Alarm System:</strong> Test one detector/call point per zone in rotation. Verify panel response and sounders.</li>
    <li><strong>Navigation Lights:</strong> Test all navigation lights - running, anchor, masthead, sidelights. Check alarm relay/buzzer function by simulating open circuit (pull fuse).</li>
    <li><strong>Steering Gear Test:</strong> Hard over to hard over both sides. Test hand pump changeover. Test NFU (Non-Follow-Up) tiller mode. Test alarm for power loss.</li>
    <li><strong>General Alarm:</strong> Test general alarm (brief test - inform master first). Check all sounders and visual alarms.</li>
    <li><strong>Engine Control Room:</strong> Test all alarm points in rotation per PMS. Verify alarm set-points on running equipment.</li>
  </ol>

  <div class="n-h2">Pre-Sailing (Departure) Checks - ETO</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by Vishwanathan &amp; Praveen Nair:</strong> "What do you check before sailing as ETO?" Expect this in oral.</div></div>
  <ol class="n-steps">
    <li><strong>Steering Gear:</strong> Full function test - both pumps running, hard-over test, NFU test, autopilot changeover, loss of hydraulic alarm.</li>
    <li><strong>Navigation Lights:</strong> All lights operational, alarm system functional, spare bulbs available.</li>
    <li><strong>GMDSS Equipment:</strong> All radios powered and tested (VHF, MF/HF, INMARSAT). DSC controller functional. EPIRB hydrostatic release intact.</li>
    <li><strong>Emergency Generator:</strong> Ready in AUTO mode, fuel sufficient for 18 hours (SOLAS), start battery charged.</li>
    <li><strong>Shore Connection Disconnected:</strong> Shore cable removed and stowed, shore connection box closed. Shore supply isolation confirmed. Ship earthing cable removed last.</li>
    <li><strong>Engine Telegraph:</strong> Test both telegraph systems - bridge and ECR. Verify matching response.</li>
    <li><strong>Engine Room Alarms:</strong> Verify all alarms healthy, no active faults on departing. Reset any resolved alarms.</li>
    <li><strong>Bridge Equipment:</strong> Radar (both units), ECDIS, AIS, VDR - all operational. Report to bridge team.</li>
    <li><strong>UMS Readiness:</strong> Confirm UMS alarm system active if bridge watch-keeping (UMS notation). Engineer call-out system tested.</li>
    <li><strong>Whistle Test:</strong> Ship's whistle operational (test briefly).</li>
  </ol>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-drydock">3. Drydock ETO Duties</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-h2">Shore Power (Cold Ironing in Drydock)</div>
  <ul class="n-list">
    <li>Arrange shore supply from yard - confirm voltage, frequency, capacity.</li>
    <li>Attend connection - earth first, verify phase sequence before energising.</li>
    <li>Monitor yard power quality - voltage fluctuations common in shipyard environments.</li>
    <li>Maintain an engineer on duty whenever shore power is the sole supply.</li>
  </ul>

  <div class="n-h2">Drydock Alternator Protection</div>
  <div class="n-p">When generators are shut down for weeks, <strong>Stator Anti-Condensation Heater</strong> must be energised from shore supply to keep windings 5–10°C above ambient. Prevents moisture absorption into Class F/H insulation. Check: megger weekly (target &gt;100 MΩ at 40°C). Before restart: full PI test (PI ≥ 2.0). If below 1.5 - dry out with low-voltage load running on another source, or using portable heaters in air duct.</div>

  <div class="n-h2">Overspeed Trip Testing (Drydock / Annual Survey)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Vishwanathan, Gokhale regularly ask this in detail.</strong></div></div>
  <div class="n-p">The overspeed trip shuts the engine if RPM exceeds a set limit - typically <strong>10–15% above MCR speed</strong>.</div>
  <div class="n-h2">Overspeed Trip Types</div>
  <ul class="n-list">
    <li><strong>Mechanical Governor Trip:</strong> Flyweight mechanism - centrifugal force drives a collar to activate fuel shutoff and air flap.</li>
    <li><strong>Electronic Overspeed Trip:</strong> Speed sensor (toothed wheel + proximity probe) → ECS/governor. If RPM exceeds set point → emergency stop: fuel injection cut, air start blocking valve closed.</li>
  </ul>
  <table class="n-table">
    <tr><th>Engine Type</th><th>Normal MCR RPM</th><th>Overspeed Trip Setting</th></tr>
    <tr><td>Slow-speed 2-stroke (MAN B&amp;W)</td><td class="hl">~80–100 RPM</td><td class="ok">~110–115 RPM (+10–15%)</td></tr>
    <tr><td>4-stroke auxiliary/generator</td><td class="hl">720 / 750 RPM</td><td class="ok">~810–840 RPM</td></tr>
  </table>
  <ol class="n-steps">
    <li>Inform bridge - engine not available for manoeuvring during test.</li>
    <li>Warm up engine to normal operating temperature.</li>
    <li>Disconnect or bypass normal governor load-limiting signal (or use ECS test mode).</li>
    <li>Slowly increase RPM by adjusting fuel rack / speed set-point.</li>
    <li>Record exact RPM at which trip activates - fuel cut, engine shuts down.</li>
    <li>Verify trip RPM within maker's specification (+10–15% of rated).</li>
    <li>Reset trip, restore governor connections, log in maintenance record.</li>
  </ol>
  <div class="n-p"><strong>ETO Role:</strong> Check speed sensor (proximity probe), signal cable, overspeed relay/module in ECS panel. IR check sensor cable. Verify relay output contacts operate fuel solenoid and air start blocking valve. Log all electrical checks in PMS.</div>

  <div class="n-h2">Survey Attendance</div>
  <ul class="n-list">
    <li><strong>Class Surveyor:</strong> Attend for all electrical equipment surveys. Present maintenance records, megger logs, PMS records.</li>
    <li><strong>Electrical Installations:</strong> Surveyor checks MSB insulation, cable penetrations, earthing continuity, emergency circuits.</li>
    <li><strong>Generator Survey:</strong> Air gap measurement, insulation resistance, hi-pot test (if due), bearing clearances.</li>
    <li><strong>Safety Systems:</strong> All fire, gas, and bilge alarms tested in surveyor presence.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-coldiron">4. Cold Ironing - Shore Power Connection</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-p"><strong>Cold ironing (Alternative Maritime Power - AMP)</strong> connects a ship to shore power while berthed to eliminate diesel exhaust emissions. The term originates from steam ships letting their boiler fires ("irons") go cold in port.</div>

  <table class="n-table">
    <tr><th>Shore Connection Box Component</th><th>Function &amp; Critical Details</th></tr>
    <tr><td><strong>Socket / Connector</strong></td><td>IEC 60309 standard (low-voltage) or specialised HV connector for 6.6 kV / 11 kV systems.</td></tr>
    <tr><td><strong>Phase Sequence Indicator</strong></td><td class="hl">Critical: Shows if shore phase rotation matches ship (R-Y-B). Wrong rotation = all motors run backwards. Swap any two supply phases to correct.</td></tr>
    <tr><td><strong>Voltmeter &amp; Ammeter</strong></td><td>Shore voltage must match ship ±5% before connecting. Ammeter monitors load during operation.</td></tr>
    <tr><td><strong>Main Breaker &amp; Interlock</strong></td><td class="ok">INTERLOCK: NC contact from generator ACB in series with shore breaker closing coil. If ANY gen ACB is closed → shore breaker physically cannot close. Prevents paralleling shore with ship's generator.</td></tr>
    <tr><td><strong>Earth Cable</strong></td><td class="bad">Earth MUST be connected FIRST and disconnected LAST - always, without exception.</td></tr>
    <tr><td><strong>Frequency Check</strong></td><td>Shore frequency must match ship (50 Hz for most vessels). If shore is 60 Hz (US ports), transformers/frequency converters required.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Phase sequence check without indicator:</strong> Connect portable phase sequence meter across shore terminals. Alternatively: connect one small fan motor to shore supply - if shaft rotates wrong way, swap any two phases at the shore connection.</div></div>

  <div class="n-h2">Shore Power Connection Procedure</div>
  <ol class="n-steps">
    <li><strong>Pre-Arrival:</strong> Confirm shore voltage, frequency, connector type, and current capacity with port agent. Check ship's shore connection box ratings (kA, A).</li>
    <li><strong>Reduce Ship Load:</strong> Transfer non-essential loads off or to minimum to reduce inrush at transfer.</li>
    <li><strong>Connect Cable (De-Energised):</strong> Earth cable FIRST. Never connect a live shore cable to the ship's connector.</li>
    <li><strong>Measure Voltage &amp; Phase Sequence:</strong> Verify shore voltage matches ship (±5%). Verify phase sequence matches R-Y-B.</li>
    <li><strong>Trip Generator:</strong> Trip running generator ACB, allowing the interlock to clear so the shore breaker can close.</li>
    <li><strong>Close Shore Breaker:</strong> Close shore connection breaker at MSB. Verify bus voltage from shore.</li>
    <li><strong>Isolate Generator:</strong> Isolate generator engine (or leave in warm standby). Log time and parameters.</li>
  </ol>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Shore Power Sequence:</strong><br>
  <strong>E</strong>arth first · <strong>V</strong>oltage check · <strong>P</strong>hase sequence · <strong>T</strong>ransfer · <strong>I</strong>solate generator<br>
  "<strong>Every Vessel Provides True Isolation</strong>"</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-wrongway">5. Wrong Way Alarm</div>
  <!-- ════════════════════════════════════════════ -->

  <ul class="n-list">
    <li><strong>Function:</strong> Detects if shaft rotates opposite to commanded direction. Triggers alarm and/or automatic trip.</li>
    <li><strong>Location:</strong> Main Engine, Steering Gear pump shafts, Cargo pumps.</li>
    <li><strong>Working Principle:</strong> Two proximity/Hall effect sensors positioned at 90° phase offset on the shaft gear/flywheel. The sequence of pulses (A before B = forward; B before A = reverse) determines rotation direction. If actual direction ≠ commanded direction → alarm/trip activates.</li>
    <li><strong>Consequence of Wrong-Way Rotation:</strong> Cavitation and mechanical damage to pumps, propeller running ahead when astern ordered, cargo pump drawing wrong direction - can cause flooding or fire.</li>
    <li><strong>ETO Maintenance:</strong> Check sensor gap (typically 1–3 mm for proximity sensors), calibrate trip logic, test relay output quarterly.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-blackout">6. Blackout Recovery &amp; Testing</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Praveen Nair and Deswal screen for specific restoration timings and load sequence. Always start with Emergency Switchboard confirmation.</strong></div></div>

  <div class="n-h2">Blackout Test Procedure (SOLAS / Class Requirement)</div>
  <ul class="n-list">
    <li><strong>Preparation:</strong> Inform bridge. Verify Emergency Generator (EG) in AUTO. Ensure UPS systems charged. Post engineer at ECR and another at MSB.</li>
    <li><strong>Test:</strong> Trip running generators from MSB. Start timing immediately. EG must auto-start and reach rated speed/voltage.</li>
    <li><strong>Timing (SOLAS Limit):</strong> Within <strong>45 seconds</strong>, ESB must be connected and emergency loads energised: emergency lighting, fire pump, steering gear, GMDSS, navigation lights.</li>
    <li><strong>Run &amp; Restore:</strong> Run on emergency power for minimum 30 minutes. Then start main generator, synchronise onto ESB, transfer load, trip EG.</li>
    <li><strong>Cause Investigation (Real Blackout):</strong> Before restoring - always identify the trip cause (overload, earth fault, relay malfunction) to prevent secondary blackout.</li>
  </ul>

  <div class="n-h2">Real Blackout Recovery Sequence</div>
  <ol class="n-steps">
    <li><strong>Immediate:</strong> Confirm emergency services on ESB - nav lights, bridge comms, EG auto-started, steering gear emergency power ON.</li>
    <li><strong>Assessment:</strong> Identify trip cause - check MSB relay flags (overcurrent, earth fault, reverse power, preferential trip). Note last kW reading. Do NOT restore power blindly before identifying cause.</li>
    <li><strong>Communication:</strong> Report to bridge OOW, Master, and Chief Engineer. State cause (if known) and estimated restoration time.</li>
    <li><strong>Technical Fix:</strong> Start standby generator manually if auto-start has failed. Synchronise and close ACB to live-charge main busbar from EG or standby.</li>
    <li><strong>Sequential Load Restoration (prevents secondary trip):</strong><br>
      → Cooling pumps first (2 min delay - temperature stabilisation)<br>
      → LO / fuel oil service pumps (3 min delay)<br>
      → Boiler / air compressors (5 min delay)<br>
      → HVAC / non-essential loads last</li>
    <li><strong>Documentation:</strong> Log time, cause, restoration steps, and any damage/findings in electrical log. Raise incident report if cause was equipment failure.</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why sequential loading matters:</strong> Motor starting inrush = 6–8× FLC. If all loads restored simultaneously, combined inrush can exceed generator rating → secondary blackout within seconds. Sequential delays allow generator to stabilise at each loading step. This is the most common follow-up question after a blackout scenario.</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-permits">7. Permit to Work - Electrical &amp; General Safety</div>
  <!-- ════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Permit Type</th><th>Authority</th><th>Key Requirements</th></tr>
    <tr><td><strong>Electrical Isolation (EIP)</strong></td><td>CE / ETO</td><td>LOTO applied at all isolation points. Test de-energised with approved tester. Scope clearly defined. Competent person only.</td></tr>
    <tr><td><strong>Hot Work Permit</strong></td><td>CE / Master</td><td>Gas-free certificate (below 1% LEL). Fire watch during work AND 30 min after. CO₂/dry powder extinguisher standby. ICCP off for hull welding.</td></tr>
    <tr><td><strong>Enclosed Space Entry</strong></td><td>Master / CE</td><td>Atmosphere test (O₂ 19.5–23.5%, LEL &lt;10%, CO &lt;35 ppm, H₂S &lt;10 ppm). Standby person at entrance. Continuous ventilation. Recovery equipment at entrance.</td></tr>
    <tr><td><strong>Working at Height</strong></td><td>CE / Mate</td><td>Above 2 m requires permit. Full body harness + fall arrest. Buddy system minimum. Risk assessment. Never in bad weather.</td></tr>
    <tr><td><strong>Safety System Isolation</strong></td><td>Master / CE</td><td>When isolating fire detectors / CO₂ sections for maintenance. Fire watch required. Time-limited. Log start and end time.</td></tr>
    <tr><td><strong>Cold Work in Hazardous Area</strong></td><td>CE</td><td>Non-sparking tools. Intrinsically safe equipment only. Continuous gas monitoring.</td></tr>
  </table>

  <div class="n-h2">LOTO (Lockout-Tagout) Procedure</div>
  <ol class="n-steps">
    <li>Identify all energy sources (electrical, mechanical, hydraulic, stored energy).</li>
    <li>Notify all affected personnel.</li>
    <li>Isolate each energy source at its control point.</li>
    <li>Apply lock and tag at each isolation point. Tag states: worker name, date, reason, expected completion.</li>
    <li><strong>Prove dead:</strong> Test with approved tester - test-for-voltage, discharge, test-for-voltage again.</li>
    <li>Apply earthing lead (for HV - also on LV if risk of back-feed).</li>
    <li>Only the person who applied the lock can remove it (personal lock principle).</li>
  </ol>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Safe Voltage for Confined/Wet Spaces:</strong> Portable electrical equipment in confined spaces, bilges, or wet locations must be supplied at ≤50 V AC or ≤50 V DC between conductors. This is a hard rule - standard 220 V/440 V tools are NOT permitted. Use isolation transformers or 110 V CTE transformers with centre-tap earth (gives ≤55 V to earth).</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-shocktreatment">8. Electric Shock - Current Effects &amp; Treatment</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask this. Kamath asks it as the opening question to test ETO's emergency response instinct. Know the exact sequence without hesitation.</strong></div></div>

  <div class="n-h2">Effect of Current Through the Body</div>
  <table class="n-table">
    <tr><th>Current (mA)</th><th>Effect</th><th>Class</th></tr>
    <tr><td class="ok"><strong>1 mA</strong></td><td>Perception threshold - tingling sensation</td><td class="ok">Safe</td></tr>
    <tr><td class="hl"><strong>5 mA</strong></td><td>Slight shock, painful but not dangerous</td><td class="hl">Caution</td></tr>
    <tr><td class="hl"><strong>10–20 mA</strong></td><td>Muscular tetany - <strong>cannot let go</strong> (let-go threshold ~16 mA for women, ~20 mA for men)</td><td class="bad">DANGER</td></tr>
    <tr><td class="bad"><strong>50–100 mA</strong></td><td>Ventricular fibrillation - heart loses rhythm → likely fatal</td><td class="bad">LETHAL</td></tr>
    <tr><td class="bad"><strong>100–200 mA</strong></td><td>Ventricular fibrillation very likely; severe burns at contact points</td><td class="bad">LETHAL</td></tr>
    <tr><td class="bad"><strong>&gt;1 A (1000 mA)</strong></td><td>Cardiac arrest, severe internal burns, severe tissue destruction</td><td class="bad">LETHAL</td></tr>
    <tr><td class="bad"><strong>&gt;4 A</strong></td><td>Heart clamps - may spontaneously restart after removal (paradoxically survivable vs 100–200 mA fibrillation range)</td><td class="bad">CRITICAL</td></tr>
  </table>

  <div class="n-h2">Factors Affecting Severity</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title">Body Resistance</div>
      <div class="card-desc">
        Dry skin: 100,000 Ω (high protection)<br>
        Wet/sweaty skin: 1,000 Ω (100× more current)<br>
        Internal body tissue: 300–500 Ω<br>
        → Wet spaces dramatically increase shock risk
      </div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title">Other Factors</div>
      <div class="card-desc">
        AC frequency (50 Hz worst - resonates with heart)<br>
        Current path through body (hand-to-hand through heart = most dangerous)<br>
        Duration of contact<br>
        Voltage level and circuit impedance
      </div>
    </div>
  </div>

  <div class="n-h2">Electric Shock Treatment - Step-by-Step</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>NEVER touch the victim while in contact with the live source. You will become a second casualty.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Do NOT Touch the Victim:</strong> Assess immediately - is victim still in contact with source?</li>
    <li><strong>Isolate the Supply:</strong> Trip the nearest breaker, pull the plug, or use the local isolator. If impossible: use a DRY, non-conducting object (wooden plank, rope, rubber mat) to push or pull the victim away from the source. Never use bare hands or metal objects.</li>
    <li><strong>Call for Help:</strong> Send someone to call bridge/medical officer immediately. Do not leave victim alone.</li>
    <li><strong>Assess:</strong> Once victim is safe and supply is isolated - check response (tap shoulders, shout), check breathing, check pulse (carotid artery, 10 seconds).</li>
    <li><strong>If No Pulse / Not Breathing - Start CPR:</strong> 30 chest compressions (rate 100–120/min, depth 5–6 cm) + 2 rescue breaths. Continue 30:2 ratio until AED available or victim recovers.</li>
    <li><strong>Use AED:</strong> Attach defibrillator pads as soon as available. Follow audio/visual instructions. Shock if advised. Continue CPR between shocks.</li>
    <li><strong>If Breathing - Recovery Position:</strong> Place in lateral recovery position. Monitor breathing continuously. Do not leave alone.</li>
    <li><strong>Always Seek Medical Attention:</strong> Even if victim appears recovered - internal burns and cardiac arrhythmia can develop hours later. Medical assessment is mandatory.</li>
  </ol>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Shock Response Mnemonic - "DISCO":</strong><br>
  <strong>D</strong>on't touch - <strong>I</strong>solate supply - <strong>S</strong>end for help - <strong>C</strong>PR if needed - <strong>O</strong>btain medical assessment<br>
  Even if the victim walks away: always get a medical check (internal burns, delayed cardiac effects).</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-enclosedspace">9. Enclosed Space Entry</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-h2">Definition of Enclosed Space (SOLAS)</div>
  <div class="n-p">A space with limited openings for entry and exit, inadequate ventilation, and not designed for continuous occupancy. Examples: cargo holds, tanks (ballast, fuel, fresh water, void), pump rooms, cofferdams, chain lockers, sewage holding tanks, CO₂ room.</div>

  <div class="n-h2">Atmosphere Limits Before Entry</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Safe Range</th><th>Alarm / Action</th></tr>
    <tr><td><strong>Oxygen (O₂)</strong></td><td class="ok">19.5% – 23.5%</td><td class="bad">Below 19.5% = oxygen deficiency. Above 23.5% = enriched O₂, fire/explosion risk.</td></tr>
    <tr><td><strong>Flammable Gas (LEL)</strong></td><td class="ok">&lt;10% LEL</td><td class="bad">Above 10% LEL - do NOT enter under any circumstances.</td></tr>
    <tr><td><strong>Carbon Monoxide (CO)</strong></td><td class="ok">&lt;35 ppm TWA</td><td class="bad">STEL: 100 ppm (15 min max). Colourless, odourless - deadly without detector.</td></tr>
    <tr><td><strong>Hydrogen Sulphide (H₂S)</strong></td><td class="ok">&lt;10 ppm TWA</td><td class="bad">STEL: 15 ppm. Smells of rotten eggs at low conc. but NUMBS the sense of smell at dangerous levels.</td></tr>
    <tr><td><strong>Sulphur Dioxide (SO₂)</strong></td><td class="ok">&lt;2 ppm TWA</td><td class="bad">Strong irritant. Risk in spaces near exhaust systems, cargo of sulphur compounds.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>H₂S Warning:</strong> H₂S numbs the olfactory nerve at concentrations above ~100 ppm - you can no longer smell the gas but it is at lethal levels. NEVER rely on smell - always use a calibrated gas detector.</div></div>

  <div class="n-h2">Enclosed Space Entry Procedure (PTW System)</div>
  <ol class="n-steps">
    <li><strong>Identify the space:</strong> Confirm it is an enclosed space requiring special procedure (check SMS list).</li>
    <li><strong>Risk Assessment:</strong> Identify hazards specific to that space (inert gas, organic matter, previous cargo).</li>
    <li><strong>Ventilate:</strong> Force-ventilate with fresh air for at least 15 minutes before gas testing.</li>
    <li><strong>Gas Test:</strong> Test with calibrated, bump-tested instruments. Test at multiple levels (top, middle, bottom) - different gases have different densities.</li>
    <li><strong>Obtain Permit:</strong> Enclosed Space Entry Permit signed by Master/CE and Responsible Officer.</li>
    <li><strong>Attendant at Entry Point:</strong> A competent standby person MUST remain at the entry point throughout. They must not enter to rescue - call trained team with SCBA.</li>
    <li><strong>Continuous Monitoring:</strong> Worker wears personal gas alarm. Continuous ventilation maintained. Re-test if conditions change.</li>
    <li><strong>Rescue Equipment Ready:</strong> SCBA sets, lifelines, safety harness, resuscitator - all at entrance before anyone enters.</li>
    <li><strong>Regular Communication:</strong> Voice or equipment contact maintained every 5 minutes minimum.</li>
  </ol>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Rescuer Rule:</strong> A standby person who loses contact with the entrant must NOT enter the space alone to rescue. They must call for help (ship's alarm, bridge). More crew die trying to rescue than in the original incident. Trained SCBA rescue teams only.</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-welding">10. Welding Safety &amp; Crane Safeties</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-h2">Welding - AC vs DC</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>AC Welding (Transformer)</th><th>DC Welding (Generator/Rectifier)</th></tr>
    <tr><td>Open Circuit Voltage</td><td class="hl">~70–80 V</td><td class="ok">~45–65 V (safer)</td></tr>
    <tr><td>Shock Risk</td><td class="bad">Higher - AC is more likely to cause tetany</td><td class="ok">Lower - DC causes single jerk</td></tr>
    <tr><td>Arc Blow</td><td class="ok">No arc blow (AC reverses polarity)</td><td class="bad">Arc blow can occur (magnetic deflection of arc)</td></tr>
    <tr><td>Arc Stability</td><td class="hl">Less stable - zero crossing 100 times/sec</td><td class="ok">More stable arc</td></tr>
    <tr><td>Typical Use</td><td>General structural welding</td><td>Thin metals, vertical/overhead positions</td></tr>
    <tr><td>Marine Standard</td><td>Welding transformer: step-down, drooping characteristic</td><td>Motor-generator or inverter rectifier</td></tr>
  </table>

  <div class="n-h2">Welding Safety Requirements (Marine)</div>
  <ul class="n-list">
    <li><strong>Hot Work Permit:</strong> Required before any welding - gas-free certificate, fire watch, extinguisher on standby.</li>
    <li><strong>Return Cable:</strong> Must be short, well-insulated, and connected DIRECTLY to the workpiece (never via hull). Long return path = risk of current through hull/shaft/bearings.</li>
    <li><strong>Hull Earthing:</strong> For welding on hull structure, return cable clamp must be as close as possible to weld point to avoid current flowing through sensitive equipment.</li>
    <li><strong>ICCP System:</strong> Switch OFF Impressed Current Cathodic Protection during hull welding - high currents can damage ICCP anodes and reference electrodes.</li>
    <li><strong>Cable Insulation:</strong> Inspect welding cable insulation before each use. No bare copper visible. Connectors tight and dry.</li>
    <li><strong>No Open-Circuit Standby:</strong> Never leave welding set energised on open circuit unattended - OCV across terminals remains live (&gt;70 V AC).</li>
    <li><strong>Welding Transformer Specification:</strong> When ordering: current range (A), duty cycle (%), open circuit voltage (V), kVA rating, cooling type (air/oil), insulation class.</li>
  </ul>

  <div class="n-h2">Arc Blow (DC Welding)</div>
  <div class="n-p">Arc blow is the deflection of the welding arc by magnetic fields in the workpiece (especially at corners/ends of steel members). Caused by asymmetrical magnetic flux around DC electrodes. <strong>Remedies:</strong> Change to AC welding; use back-step technique; change electrode angle; connect earth clamp to different position; reduce current.</div>

  <div class="n-h2">Engine Room Crane - Electrical Safeties</div>
  <ul class="n-list">
    <li><strong>Overload Relay:</strong> Set at SWL (Safe Working Load). Trips if load exceeds SWL. Can be electronic (strain gauge on hook) or mechanical (spring balance).</li>
    <li><strong>Upper Limit Switch:</strong> Cuts hoist power if hook block reaches top of travel - prevents overwinding (crane jib collapse).</li>
    <li><strong>Lower Limit Switch:</strong> Cuts lowering power at minimum rope on drum (prevents rope being completely paid off).</li>
    <li><strong>Emergency Stop:</strong> Red mushroom button at pendant and at fixed control panel. Cuts all motion immediately.</li>
    <li><strong>Dead-Man Control:</strong> Pendant requires continuous pressure - release pendant = all motion stops automatically (fail-safe).</li>
    <li><strong>Electromagnetic Brake:</strong> Spring-applied, electrically-released brake on hoist motor. Failsafe: power loss → brake applies automatically (load held).</li>
    <li><strong>Pendant Insulation:</strong> Check pendant cable insulation annually. Ensure no bare conductors. Earth pendant metalwork.</li>
    <li><strong>SWL Markings:</strong> SWL must be clearly marked on all lifting equipment. Never exceed SWL. Two-block test required after maintenance.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-boiler">11. Boiler Burner Management &amp; VRCS</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-h2">Boiler Burner Safeties</div>
  <ul class="n-list">
    <li><strong>Flame Failure Relay:</strong> UV scanner or ionisation probe detects flame. If flame fails during operation → fuel valve closes immediately (shuts off fuel within 2–3 seconds).</li>
    <li><strong>High Water Level Trip:</strong> Prevents water carry-over into steam lines (water hammer).</li>
    <li><strong>Low Water Level Trip:</strong> Prevents fire-side overheating and tube damage when drum runs dry.</li>
    <li><strong>High Steam Pressure Trip:</strong> Overpressure protection - closes burner fuel valve, opens safety valve if trip fails.</li>
    <li><strong>Pre-Purge Interlock:</strong> Forced draft fan must run for a set purge time (typically 3–5 air changes) before ignition is permitted. Clears unburnt fuel from combustion chamber (prevents explosion).</li>
    <li><strong>Ignition Interlock:</strong> Ignition transformer only fires after pre-purge complete and fuel valve in closed position - verified by limit switch.</li>
    <li><strong>Draft Fan Failure Trip:</strong> No airflow = combustion stops immediately.</li>
  </ul>

  <div class="n-h2">VRCS (Valve Remote Control System)</div>
  <div class="n-p"><strong>Function:</strong> Controls cargo/ballast valves from the Cargo Control Room (CCR). ETO maintains the electrical and electronic components:</div>
  <ul class="n-list">
    <li><strong>Hydraulic Power Unit (HPU):</strong> Electric motor drives hydraulic pump. Motor: check bearings (greasing schedule), winding IR, thermal protection. Pump: check pressure relief valve setting, oil level, leaks.</li>
    <li><strong>Solenoid Pilot Valves:</strong> 24 V DC solenoid coils control hydraulic flow direction to each actuator. Check coil resistance (typically 20–40 Ω). Replace failed coils as a unit.</li>
    <li><strong>Position Feedback Transmitters:</strong> Potentiometer (turns into 0–10 V signal) or reed switch (open/closed position). Check calibration - valve actual position must match CCR display. Potentiometer: check for wiper wear, clean with IPA if intermittent.</li>
    <li><strong>Control Panel (CCR):</strong> 24 V DC PLC-based system. ETO checks power supply, earth fault indication, and communication link to field devices.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cableorder">12. Cable Ordering Specifications</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam Critical (Mumbai surveyors):</strong> You must be able to specify every parameter when ordering a marine cable. Surveyors sometimes ask: "An electrician comes to you and says 'I need a cable.' What information do you request?"</div></div>

  <table class="n-table">
    <tr><th>#</th><th>Parameter</th><th>Typical Marine Value</th><th>Why It Matters</th></tr>
    <tr><td>1</td><td><strong>Conductor Material</strong></td><td>Copper (stranded)</td><td>Stranded for flexibility in marine environment; aluminium NOT used on ships (corrosion, termination issues)</td></tr>
    <tr><td>2</td><td><strong>Core Count</strong></td><td>1C, 2C, 3C, 4C, 7C, etc.</td><td>Matches circuit topology (single-phase 2-core, 3-phase 3 or 4-core)</td></tr>
    <tr><td>3</td><td><strong>Cross-Section</strong></td><td>1.5, 2.5, 4, 6, 10, 16, 25… mm²</td><td class="bad">NEVER AWG on marine. Current-carrying capacity and voltage drop sizing</td></tr>
    <tr><td>4</td><td><strong>Insulation Type</strong></td><td>XLPE (preferred) / EPR / PVC</td><td>XLPE: best thermal (90°C), good for engine room. EPR: flexible, good for flexible leads. PVC: general use but lower temp rating</td></tr>
    <tr><td>5</td><td><strong>Outer Sheath</strong></td><td class="ok">LSZH (Low Smoke Zero Halogen)</td><td>SOLAS requirement: sheath must not produce toxic halogen gases if burned</td></tr>
    <tr><td>6</td><td><strong>Armour</strong></td><td>SWA (Steel Wire Armoured) or unarmoured</td><td>Mechanical protection for below-deck or areas with physical damage risk</td></tr>
    <tr><td>7</td><td><strong>Voltage Rating</strong></td><td>0.6/1 kV for 440 V systems</td><td>Must be rated for system voltage ×1.1 minimum; HV systems: 3.6/6 kV or 6/10 kV</td></tr>
    <tr><td>8</td><td><strong>Marine Standard</strong></td><td class="ok">IEC 60092-350 (Marine Cables)</td><td>Mandatory for class approval; ensures fire test, smoke, and halogen compliance</td></tr>
    <tr><td>9</td><td><strong>Screen</strong></td><td>Copper braid / aluminium foil (if instrumentation)</td><td>EMI shielding for signal cables, RS-485, 4–20 mA circuits. Earth screen at one end only (avoid ground loops)</td></tr>
    <tr><td>10</td><td><strong>Length &amp; Delivery</strong></td><td>Continuous metres on a drum</td><td>Joints in cables are failure points - always order more than route length to allow for routing bends</td></tr>
  </table>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Cable Order Mnemonic - "MC CLIVE SLD":</strong><br>
  <strong>M</strong>aterial (copper) · <strong>C</strong>ores · <strong>C</strong>ross-section (mm²) · <strong>L</strong>SZH sheath · <strong>I</strong>nsulation (XLPE) · <strong>V</strong>oltage rating · <strong>E</strong>–60092 standard · <strong>S</strong>creen · <strong>L</strong>ength · <strong>D</strong>elivery (drum)</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-troubleshoot">13. Troubleshooting, Diagnostics &amp; 6-Step Framework</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>MCA / DG Shipping 6-Step Framework - Use for ALL scenario questions.</strong> Surveyors expect this structure for any "What do you do if…" question. Deviating from this sequence = marks deducted.</div></div>

  <div class="n-h2">6-Step Emergency Response Framework</div>
  <ol class="n-steps">
    <li><strong>IMMEDIATE ACTIONS (Safety First):</strong> Isolate live faults, LOTO, activate fire alarm, deploy CO₂ only after evacuating space, stop rotating machinery before working on it.</li>
    <li><strong>ASSESSMENT:</strong> Read gauges, alarm panel, check MCBs/fuses, check relay trip flags, talk to watchkeeper, identify what changed before the fault.</li>
    <li><strong>COMMUNICATION:</strong> Report to C/E, Master, or OOW. Sound general alarm if required. State nature and severity of fault, estimated repair time.</li>
    <li><strong>FURTHER ACTIONS (Investigate &amp; Fix):</strong> Systematic fault-finding, megger tests, component isolation, instrument checks, bypass if temporary operation needed.</li>
    <li><strong>DOCUMENTATION:</strong> Electrical log entry, PMS defect record, incident report, permit cancellation, near-miss report if applicable.</li>
    <li><strong>FOLLOW-UP:</strong> Root cause analysis, adjust PMS intervals, order spare parts, safety committee discussion, revise risk assessment.</li>
  </ol>

  <div class="n-h2">Low IR Troubleshooting - 440 V Circuit (Step by Step)</div>
  <ol class="n-steps">
    <li>Obtain Electrical Isolation Permit. Isolate at MSB. LOTO applied. Prove dead with approved tester.</li>
    <li>Disconnect cable at BOTH ends - at MSB outgoing terminals AND at motor terminal box.</li>
    <li><strong>Megger Cable Alone:</strong> Test between cores and core-to-earth. Apply 1000 V DC for 60 seconds. If low IR (&lt;1 MΩ): cable is faulty - inspect for pinch, water ingress, mechanical damage. Replace cable if confirmed faulty.</li>
    <li><strong>If Cable is Healthy, Megger Motor:</strong> Isolate star point. Test each phase to earth: U1-E, V1-E, W1-E. Minimum acceptable: 1 MΩ (new: &gt;100 MΩ). Record at what temperature.</li>
    <li><strong>Identify Motor Fault:</strong> If IR is low but not zero: likely moisture - energise anti-condensation heater 24–48 hours, re-test. If IR is zero: winding fault - requires rewind or replacement.</li>
    <li>Test starter components (contactors, overload relay) separately. Re-energise only after all IR values &gt;1 MΩ. Log all readings.</li>
  </ol>

  <div class="n-h2">IR Testing at Elevated Temperature</div>
  <div class="n-p">IR halves every 10°C rise in winding temperature (rule of thumb).</div>
  <div class="n-formula">IR_40°C = IR_measured × 2^((T_measured − 40) / 10)</div>
  <div class="n-p"><strong>Example:</strong> Motor reads 10 MΩ at 80°C → Corrected at 40°C = 10 × 2^((80−40)/10) = 10 × 2⁴ = 10 × 16 = <span class="n-val">160 MΩ</span> - excellent.</div>
  <div class="n-p"><strong>Polarisation Index (PI) = IR at 10 min / IR at 1 min.</strong> Healthy PI ≥ 2.0. PI is temperature-independent - compare over time. PI &lt;1.0 = contaminated or wet windings.</div>

  <div class="n-h2">Millivolt-Drop Test (Drop Test)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"> The drop test is used for contact-resistance measurement on busbars, ACB contacts, and cable joints. Pass rated current through the joint and measure voltage (mV) drop across it. High mV drop = loose or oxidised joint. Use a DLRO (Digital Low-Resistance Ohmmeter) or micro-ohmmeter. Standard ACB contacts should read &lt;100 μΩ. A mV-drop test with a multimeter works for busbars: apply known current, measure across joint - V = I × R → R = V/I.</div></div>

  <div class="n-h2">Contact Cleaning</div>
  <ul class="n-list">
    <li><strong>Copper Contacts:</strong> Isopropyl Alcohol (IPA) and lint-free cloth. For pitting: smooth flat file only (no emery cloth - leaves abrasive particles).</li>
    <li><strong>Silver / Gold-Plated Contacts:</strong> DO NOT FILE. IPA and lint-free cloth only. Filing removes the protective plating layer.</li>
    <li><strong>Measurement:</strong> Use a micro-ohmmeter (DLRO), not a standard multimeter. Standard multimeters have too high a test current and burn thin contacts.</li>
  </ul>

  <div class="n-h2">CT Secondary Safety</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CT secondary MUST NEVER be left open-circuited.</strong> Without load, no counter-MMF causes core saturation → induces thousands of volts in secondary → destroys insulation → lethal shock hazard to personnel and equipment. <strong>Procedure:</strong> Always short-circuit CT secondary terminals before disconnecting any instrument. Use the CT shorting link on the terminal block. Verify short is in place before working.</div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-imosymbols">14. IMO Safety Symbols &amp; Signs</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner Note:</strong> Some surveyors show a symbol card and ask the ETO to identify it or explain the colour coding. SOLAS Reg. II-2/9.2.2 and IMO Resolution A.1116(30) govern safety sign requirements.</div></div>

  <div class="n-h2">IMO Sign Colour Coding System</div>
  <table class="n-table">
    <tr><th>Colour</th><th>Meaning</th><th>Examples</th></tr>
    <tr><td style="background:#e53935;color:#fff"><strong>Red</strong></td><td>Prohibition / Fire Equipment / Danger</td><td>No smoking, fire extinguisher location, fire alarm call point, emergency stop</td></tr>
    <tr><td style="background:#1565c0;color:#fff"><strong>Blue</strong></td><td>Mandatory Action</td><td>Wear PPE (hard hat, goggles, gloves), use safety harness, authorised personnel only</td></tr>
    <tr><td style="background:#2e7d32;color:#fff"><strong>Green</strong></td><td>Safe Condition / Emergency Escape</td><td>Emergency exit, muster station, lifeboat direction arrow, first aid, safe passage route</td></tr>
    <tr><td style="background:#f9a825;color:#000"><strong>Yellow/Amber</strong></td><td>Warning / Caution</td><td>Electrical hazard ⚡, slippery floor, falling objects, low headroom, toxic substance</td></tr>
    <tr><td style="background:#263238;color:#fff"><strong>White</strong></td><td>Background / Supplementary text</td><td>Used with red, blue, green, yellow backgrounds</td></tr>
  </table>

  <div class="n-h2">Key IMO Electrical &amp; Safety Symbols to Recognise</div>
  <table class="n-table">
    <tr><th>Symbol Description</th><th>Colour</th><th>Meaning</th></tr>
    <tr><td>Lightning bolt triangle</td><td class="hl">Yellow triangle</td><td>Electrical hazard - high voltage present. Do not touch.</td></tr>
    <tr><td>Running figure + green arrow</td><td class="ok">Green</td><td>Emergency exit direction - muster / lifeboat stations.</td></tr>
    <tr><td>Flame symbol</td><td class="bad">Red</td><td>Fire hazard / fire extinguisher location.</td></tr>
    <tr><td>Cigarette with red cross</td><td class="bad">Red circle, red diagonal bar</td><td>No smoking - prohibition sign.</td></tr>
    <tr><td>Hand with flame</td><td class="hl">Yellow</td><td>Flammable / combustible material - warning.</td></tr>
    <tr><td>Skull and crossbones</td><td class="hl">Yellow</td><td>Toxic substance - warning.</td></tr>
    <tr><td>Hard hat / gloves / goggles figures</td><td>Blue circle</td><td>PPE mandatory - must wear specified protection.</td></tr>
    <tr><td>AED / defibrillator symbol</td><td class="ok">Green</td><td>AED location - automated external defibrillator.</td></tr>
    <tr><td>First aid cross (white on green)</td><td class="ok">Green</td><td>First aid equipment / first aid station location.</td></tr>
    <tr><td>Green person + lifering</td><td class="ok">Green</td><td>Muster station / assembly station location.</td></tr>
    <tr><td>Anchor with prohibition bar</td><td class="bad">Red</td><td>Anchor prohibited (underwater cables/pipelines).</td></tr>
    <tr><td>Hand raised with bar</td><td class="bad">Red circle/bar</td><td>Do not touch / unauthorised access prohibited.</td></tr>
  </table>

  <div class="n-h2">SOLAS Requirements for Signs</div>
  <ul class="n-list">
    <li><strong>SOLAS II-2/9.2.2:</strong> Fire safety signs and emergency escape route markings must conform to IMO symbols. Photoluminescent (glow-in-dark) material required on escape routes.</li>
    <tr><td>Resolution A.1116(30):</td></tr>
    <li>Updated IMO symbols and signs standard. All passenger and cargo ships must display standardised safety signs at relevant locations.</li>
    <li><strong>ETO Role:</strong> Ensure all electrical hazard signs are in place (electrical switchroom, MSB, battery room, high-voltage compartments). Replace damaged/faded signs. Check photoluminescent strips on escape routes work - verify glow after light removal.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-emergencydrills">15. Emergency Drills - ETO Muster Duties</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner Note:</strong> Surveyors (especially Praveen Nair) ask "What is your role in fire drill / abandon ship drill?" ETO has specific technical duties at muster.</div></div>

  <div class="n-h2">Fire Drill - ETO Role</div>
  <ul class="n-list">
    <li><strong>Muster Station:</strong> Report to designated muster station (per Muster List). Typically Fire Party or Emergency Squad.</li>
    <li><strong>Fire Party Duties (if assigned):</strong> Boundary cooling with hose, locating seat of fire using BA set if required, operating quick-closing valves for fuel systems, emergency stops on ventilation fans.</li>
    <li><strong>Electrical Duties:</strong> Isolate power to the affected space (if ordered by C/E) - trip switchboard feeder for the section on fire. This prevents electrical arcing feeding the fire. Do NOT isolate emergency circuits (fire pump, bilge pump, emergency lighting).</li>
    <li><strong>CO₂ Release (if ordered):</strong> Verify the correct space (pilot bottle + main bottles), confirm space is evacuated, close ventilation, close doors, release CO₂ - then leave and seal.</li>
    <li><strong>After Fire:</strong> Check electrical panel for fire damage, test insulation of cables running through affected area before re-energising.</li>
  </ul>

  <div class="n-h2">Abandon Ship Drill - ETO Role</div>
  <ul class="n-list">
    <li><strong>Muster Station:</strong> Report to lifeboat muster station. ETO typically assigned to Engine Room lifeboat team or emergency team.</li>
    <li><strong>Pre-Abandon Checks (if time permits):</strong> Ensure emergency generator running and supplying ESB. Check lifeboat batteries charged (ETO responsibility per PMS). GMDSS portable equipment charged and ready.</li>
    <li><strong>At Lifeboat:</strong> Check lifeboat battery and electrical systems operable - engine start circuit, navigation lights, two-way radio, SART. Verify EPIRB armed and ready.</li>
    <li><strong>Electrical Equipment Checks:</strong> SART - activation test. EPIRB - hydrostatic release intact, battery date valid. Lifeboat radio - battery full charge. Immersion suit battery light - functional.</li>
  </ul>

  <div class="n-h2">ETO Role in Damage Control</div>
  <ul class="n-list">
    <li>After flooding: check for electric shock risk before entering flooded spaces - isolate power to affected zone.</li>
    <li>Run bilge pumps from emergency switchboard if MSB lost. Verify bilge alarm system is functional.</li>
    <li>Monitor ship's lighting - flooding can cause short circuits. Have emergency lighting ready.</li>
    <li>Report to C/E on electrical equipment status - what is still powered, what is isolated, what is damaged.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-diagnostics">16. Advanced Diagnostics &amp; Measurements</div>
  <!-- ════════════════════════════════════════════ -->

  <div class="n-h2">Continuity Check - Correct Method</div>
  <ul class="n-list">
    <li><strong>Tool:</strong> Multimeter in continuity/resistance mode (or low-ohm buzzer mode).</li>
    <li><strong>Precaution:</strong> Circuit must be de-energised and LOTO applied before any continuity test.</li>
    <li><strong>Method:</strong> Probe both ends of the conductor - low resistance (buzz) = continuous. High resistance or OL = break in conductor.</li>
    <li><strong>Cable Identification:</strong> Use figure-8 method - short one end of suspect cable, measure resistance from other end. Each core will have different total resistance identifying it uniquely.</li>
  </ul>

  <div class="n-h2">Circuit / Cable Tracing</div>
  <ul class="n-list">
    <li><strong>Tone generator &amp; probe:</strong> inject an audio tone at one end of the de-energised cable, then sweep the inductive receiver (wand) along the run and at panels to find where the tone is loudest - identifies the route and the far end without disconnecting anything.</li>
    <li><strong>Ring-out / continuity method:</strong> short one end (or one core to earth), then megger / ohm from the other end to find the matching core - the figure-8 method above extended along the run.</li>
    <li><strong>From the drawings:</strong> trace the circuit on the wiring / single-line diagram first, then confirm on site by ferrule and cable numbers and gland tags.</li>
    <li><strong>Always confirm the correct breaker</strong> feeds the circuit (isolate, prove dead) before any work.</li>
  </ul>

  <div class="n-h2">Electrical Work Safety Precautions (Comprehensive)</div>
  <ul class="n-list">
    <li>Always use approved voltage tester - test for voltage, discharge, test again before touching.</li>
    <li>Use one hand when working near live parts - keep other hand in pocket or behind back (avoids hand-to-hand current path through heart).</li>
    <li>Stand on approved insulating mat when working at switchboard.</li>
    <li>Wear correct PPE: insulating gloves rated for voltage, face shield for HV work, fire-resistant clothing.</li>
    <li>Never work alone on live equipment - another qualified person must be present.</li>
    <li>Ensure adequate lighting - use intrinsically safe portable lamp if needed.</li>
    <li>Remove metallic jewellery (rings, watches) before electrical work - can cause burns, short circuits.</li>
  </ul>

  <div class="n-h2">IR Testing - Quick Reference</div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Test Voltage</th><th>Minimum Acceptable IR</th><th>Excellent IR</th></tr>
    <tr><td>440 V motor / feeder cable</td><td>1000 V DC</td><td>1 MΩ</td><td class="ok">&gt;100 MΩ (new)</td></tr>
    <tr><td>220 V lighting circuit</td><td>500 V DC</td><td>1 MΩ</td><td class="ok">&gt;10 MΩ</td></tr>
    <tr><td>11 kV HV equipment</td><td>5000 V DC</td><td>100 MΩ</td><td class="ok">&gt;1000 MΩ</td></tr>
    <tr><td>Battery (cell to case)</td><td>500 V DC</td><td>10 MΩ</td><td class="ok">&gt;100 MΩ</td></tr>
  </table>

  <div class="n-h2">COSHH - Chemical Hazards in Marine Electrical Work</div>
  <ul class="n-list">
    <li><strong>Battery Acid (Sulphuric Acid H₂SO₄):</strong> Corrosive - burns skin and eyes. PPE: acid-resistant gloves, goggles, apron. Neutralise spills with bicarbonate of soda. Never add water to acid - add acid to water slowly.</li>
    <li><strong>Battery Hydrogen Gas:</strong> Batteries produce H₂ gas during charging. Explosive at 4–74% concentration in air. Ventilate battery room continuously. No ignition sources - use Exd or Exe rated equipment only. No sparking tools.</li>
    <li><strong>SF₆ Decomposition Products:</strong> SF₆ gas in HV switchgear produces highly toxic decomposition products (SO₂, SOF₂, HF) when arc occurs. If SF₆ equipment has operated a fault: do not open without gas testing. Use PPE - BA set if decomposition suspected. Inform class and follow manufacturer's procedure for SF₆ handling.</li>
    <li><strong>Insulating Oil (Transformer / Cable Joint Compounds):</strong> PCB-free mineral oil - irritant. Wear gloves when handling. Dispose of in accordance with MARPOL Annex I (oily waste).</li>
    <li><strong>IPA (Isopropyl Alcohol):</strong> Flammable. No naked flames near electrical contact cleaning. Good ventilation.</li>
    <li><strong>Electro-Cleaner Sprays:</strong> Read MSDS. Most are volatile and flammable - ensure ventilation and no sparking nearby.</li>
  </ul>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <!-- ════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is cold ironing and how does the interlock work?</td>
      <td>Connecting ship to shore power to eliminate diesel emissions. The interlock uses an NC contact from the generator ACB in series with the shore breaker closing coil - if ANY gen ACB is closed, the shore breaker physically cannot close. Prevents paralleling shore with ship. Earth cable connected first and disconnected last.</td>
    </tr>
    <tr>
      <td>440 V motor reads 0.3 MΩ. What is your systematic approach?</td>
      <td>Apply 6-step framework: 1. Isolate at MSB, LOTO. 2. Disconnect cable at both motor and MSB. 3. Megger cable alone. 4. If cable is good, megger motor phases separately - isolate star point, test U1/V1/W1 to earth. 5. If motor is wet, energise anti-condensation heater 24–48 hr, re-test. 6. Log all readings in electrical log.</td>
    </tr>
    <tr>
      <td>How do you order a marine cable?</td>
      <td>Specify: Stranded Copper, core count (e.g. 3C), cross-section (10 mm²), Insulation (XLPE), Outer Sheath (LSZH), Armour (SWA), Voltage rating (0.6/1 kV), Marine Standard (IEC 60092-350), Screen (copper braid if instrumentation), Length on a continuous drum.</td>
    </tr>
    <tr>
      <td>A crew member gets an electric shock and is stuck to the panel. Immediate action?</td>
      <td>DO NOT touch the victim - you will also be electrocuted. 1. Isolate power immediately - trip the nearest breaker. If impossible, use a dry wooden plank or rubber hook to separate them from source. 2. Call bridge - medical emergency. 3. Assess ABC - breathing, pulse. Start CPR (30:2) + AED if arrested. 4. Always seek medical assessment even if recovered.</td>
    </tr>
    <tr>
      <td>What is your Saturday routine as ETO?</td>
      <td>Emergency generator test (auto-start + run under load, &lt;45 sec). Emergency lighting changeover test. Battery inspection - SG, voltage, electrolyte. Fire alarm zone test (one detector per zone in rotation). Navigation light tests + alarm check. Steering gear full test - hard over both sides, NFU, hand pump. General alarm test. All results logged.</td>
    </tr>
    <tr>
      <td>What do you check before sailing as ETO?</td>
      <td>Steering gear: both pumps, hard-over test, NFU, autopilot changeover. Navigation lights all operational. GMDSS equipment powered and tested. Emergency generator in AUTO with sufficient fuel. Shore supply disconnected and cable removed (earth last). Engine telegraph tested. All alarm systems healthy. Bridge equipment reported serviceable.</td>
    </tr>
    <tr>
      <td>What are the effects of electric current on the body?</td>
      <td>1 mA - tingling (perception). 10–20 mA - muscular tetany (cannot let go). 50–100 mA - ventricular fibrillation (likely fatal). &gt;1 A - cardiac arrest, severe internal burns. AC is more dangerous than DC at same voltage (tetany). Wet skin resistance ~1000 Ω vs dry skin ~100,000 Ω - wet conditions dramatically increase shock severity.</td>
    </tr>
    <tr>
      <td>What is safe voltage for portable tools in confined spaces?</td>
      <td>Maximum 50 V AC/DC between conductors. Standard ship supply (220 V or 440 V) is NOT permitted in confined, wet, or restricted spaces. Use an isolation transformer or 110 V CTE (centre-tap earth) transformer which gives maximum 55 V to earth.</td>
    </tr>
    <tr>
      <td>What are the conditions to be checked before entering an enclosed space?</td>
      <td>O₂: 19.5–23.5%. LEL: &lt;10%. CO: &lt;35 ppm. H₂S: &lt;10 ppm. SO₂: &lt;2 ppm. Instruments must be calibrated and bump-tested. Test at multiple levels (gases stratify). Standby person at entrance - must NOT enter to rescue alone. Enclosed Space Entry Permit signed. SCBA and rescue equipment at entrance. Continuous ventilation maintained.</td>
    </tr>
    <tr>
      <td>What colour is the mandatory action safety sign?</td>
      <td>Blue circle - mandatory action (must do this). Red = prohibition/fire equipment. Green = safe condition/emergency escape. Yellow = warning/caution. Example: wear hard hat = blue. Emergency exit = green. Electrical hazard warning = yellow triangle.</td>
    </tr>
    <tr>
      <td>Why do we do a short circuit test on a transformer?</td>
      <td>To find copper losses and Percentage Impedance (%Z). Secondary is shorted, reduced voltage applied to primary until full rated current flows. %Z determines maximum fault current on the secondary - critical for switchboard protection relay settings.</td>
    </tr>
    <tr>
      <td>Why must a CT secondary never be left open-circuit?</td>
      <td>With no burden connected, there is no counter-MMF from secondary. The core magnetically saturates - induces thousands of volts in the secondary winding. This destroys insulation and creates a lethal shock hazard. Always short-circuit the CT secondary using the shorting link before disconnecting any instruments.</td>
    </tr>
  </table>

  <div class="n-warn"><div class="icon">Q</div><div class="body">
    <strong>How do you test the main engine overspeed trip? What is the trip speed, and how do you verify it works? (Kamath, Vishwanathan, Gokhale)</strong><br><br>
    The overspeed trip is a critical safety device that shuts down the engine if RPM exceeds typically <strong>10–15% above MCR speed</strong>.<br><br>
    <strong>Types:</strong><br>
    <ul class="n-list">
      <li><strong>Mechanical governor trip:</strong> Flyweight mechanism - centrifugal force activates fuel shutoff and air flap.</li>
      <li><strong>Electronic overspeed trip:</strong> Speed sensor (toothed wheel + proximity probe) → ECS. Emergency stop: fuel injection cut, air start blocking valve closed.</li>
    </ul>
    <table class="n-table">
      <tr><th>Engine Type</th><th>MCR RPM</th><th>Overspeed Trip</th></tr>
      <tr><td>Slow-speed 2-stroke (MAN B&W)</td><td>~80–100 RPM</td><td>~110–115 RPM (+10–15%)</td></tr>
      <tr><td>4-stroke aux/generator</td><td>720 / 750 RPM</td><td>~810–840 RPM</td></tr>
    </table>
    <strong>ETO Role:</strong> Check speed sensor gap, IR of sensor cable, verify relay output contacts operate fuel solenoid and air start blocking valve. Log all electrical checks in PMS.
  </div></div>

  <!-- ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <!-- ════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Cold Ironing &amp; Interlock</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Earth first &amp; last. Interlock = NC contact from gen ACB prevents shore breaker closing. Phase sequence check mandatory. Swap any 2 phases if wrong.</td>
    </tr>
    <tr>
      <td>Low IR Systematic Checks</td>
      <td class="hl">⭐⭐⭐⭐⭐ ORAL2026</td>
      <td>Isolate → LOTO → Disconnect both ends → Megger Cable → Megger Motor (isolate star point). Dry out with heater. PI ≥ 2.0.</td>
    </tr>
    <tr>
      <td>6-Step Response Framework</td>
      <td class="hl">⭐⭐⭐⭐⭐ MUST USE</td>
      <td>Immediate (Safety) → Assess → Communicate → Action → Document → Follow-up.</td>
    </tr>
    <tr>
      <td>Electric Shock Treatment</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath/Praveen Nair</td>
      <td>NEVER touch. Isolate supply. Dry wood/rubber to separate. CPR 30:2 + AED. Always medical check after. 50–100 mA = ventricular fibrillation. Wet skin = 100× more dangerous.</td>
    </tr>
    <tr>
      <td>Saturday Routine</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal/Kamath</td>
      <td>EG test (&lt;45 sec). Emergency lighting. Battery inspection. Fire alarm zone test. Nav lights + alarm. Steering hard-over. General alarm test.</td>
    </tr>
    <tr>
      <td>Pre-Sailing Checks</td>
      <td class="hl">⭐⭐⭐⭐ Vishwanathan/Praveen</td>
      <td>Steering (both pumps, NFU, auto). Nav lights. GMDSS. EG in AUTO. Shore supply disconnected (earth last). Telegraph test. All alarms healthy.</td>
    </tr>
    <tr>
      <td>Cable Ordering</td>
      <td class="hl">⭐⭐⭐⭐ Mumbai</td>
      <td>Stranded copper, mm² (not AWG), XLPE, LSZH, SWA, 0.6/1 kV, IEC 60092-350, screen if instrumentation, length on drum.</td>
    </tr>
    <tr>
      <td>CT Secondary Safety</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026</td>
      <td>NEVER leave open. Always short before disconnecting. No counter-MMF → core saturation → kV in secondary → lethal.</td>
    </tr>
    <tr>
      <td>Enclosed Space Gas Limits</td>
      <td class="hl">⭐⭐⭐⭐ All Surveyors</td>
      <td>O₂ 19.5–23.5%. LEL &lt;10%. CO &lt;35 ppm. H₂S &lt;10 ppm. SO₂ &lt;2 ppm. H₂S numbs smell above 100 ppm - always use detector.</td>
    </tr>
    <tr>
      <td>IMO Sign Colours</td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>Red=prohibition/fire. Blue=mandatory. Green=safe/escape. Yellow=warning. Electrical hazard=yellow triangle. Emergency exit=green.</td>
    </tr>
    <tr>
      <td>Blackout Recovery Sequence</td>
      <td class="hl">⭐⭐⭐⭐ Praveen/Deswal</td>
      <td>ESB confirmed → identify cause → comms to bridge/CE → start gen → sequential load: cooling → LO/FO → boiler/compressors → HVAC last.</td>
    </tr>
    <tr>
      <td>Safe Voltage (Confined Spaces)</td>
      <td class="hl">⭐⭐⭐ ORAL2026</td>
      <td>≤50 V between conductors. Use isolation transformer or 110 V CTE. Standard 220/440 V tools NOT permitted in wet/confined spaces.</td>
    </tr>
    <tr>
      <td>Current Effects (mA levels)</td>
      <td class="hl">⭐⭐⭐⭐ Kamath</td>
      <td>1 mA = tingle. 10–20 mA = tetany (cannot let go). 50–100 mA = fibrillation. &gt;1 A = cardiac arrest. Wet skin: 1000 Ω (100× more current than dry).</td>
    </tr>
    <tr>
      <td>Overspeed Trip Values</td>
      <td class="hl">⭐⭐⭐ Kamath/Vishwanathan</td>
      <td>+10–15% above MCR. 2-stroke ~110–115 RPM. 4-stroke generator ~810–840 RPM. ETO: check sensor, cable IR, relay contacts, log PMS.</td>
    </tr>
    <tr>
      <td>AC vs DC Welding</td>
      <td class="hl">⭐⭐⭐ Mumbai</td>
      <td>AC: no arc blow, OCV ~70–80 V (higher shock risk). DC: more stable arc, lower OCV, susceptible to arc blow. Return cable to workpiece, not hull. ICCP off. Hot work permit.</td>
    </tr>
  </table>

  </div><!-- end note-content -->
</div><!-- end note-doc -->
</div><!-- end view -->
`);
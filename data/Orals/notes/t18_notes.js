window.loadNotes("T18", `<div class="view" id="view-notes-t18">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T18')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 18 - ELECTRICAL SURVEY</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-surveytypes')">Survey Types</button>
    <button class="anc-btn" onclick="jumpTo('s-preparation')">Preparation &amp; Docs</button>
    <button class="anc-btn" onclick="jumpTo('s-msb')">MSB Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-acb')">ACB Trips &amp; UVT</button>
    <button class="anc-btn" onclick="jumpTo('s-overspeed')">Overspeed Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-rpr')">Reverse Power Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-mechecks')">Main Engine Checks</button>
    <button class="anc-btn" onclick="jumpTo('s-shoresupply')">Drydock Shore Supply</button>
    <button class="anc-btn" onclick="jumpTo('s-battery')">Battery Capacity Test</button>
    <button class="anc-btn" onclick="jumpTo('s-navlights')">Navigation Light Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-crane')">Crane &amp; Elevator Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-emgfirepump')">Emergency Fire Pump</button>
    <button class="anc-btn" onclick="jumpTo('s-ism')">ISM &amp; SMS</button>
    <button class="anc-btn" onclick="jumpTo('s-ptw')">Permit to Work</button>
    <button class="anc-btn" onclick="jumpTo('s-survey')">Survey Checks</button>
    <button class="anc-btn" onclick="jumpTo('s-shore-sync')">Shore Sync</button>
    <button class="anc-btn" onclick="jumpTo('s-droptest')">Drop Test</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Dead front panel exact definition. ACB isolation procedure and secondary injection test. UVT coil function. Reverse power trip test at sea vs shore. Documents for survey. Battery charge-holding demo. Navigation light alarm circuit. Overspeed trip DG vs ME difference.</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-surveytypes">1. Survey Types - Annual, Intermediate, Special &amp; Continuous</div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr;">
    <div class="n-card" style="border-color:var(--blue);">
      <div class="card-title">📅 Annual Survey</div>
      <div class="card-desc">Every <span class="n-val">12 months</span> (±3 months window). Visual inspection, check certificates, test emergency generator, nav lights, fire detection. Surveyor expects documents and a short demonstration test.</div>
    </div>
    <div class="n-card" style="border-color:var(--cyan);">
      <div class="card-title">📋 Intermediate Survey</div>
      <div class="card-desc">Every <span class="n-val">2.5 years</span>. More detailed scope: spot checks of MSB insulation, relay tests, battery condition, steering gear timing records. Replaces a portion of the Special Survey scope.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange);">
      <div class="card-title">🔧 Special Survey (Class Renewal)</div>
      <div class="card-desc">Every <span class="n-val">5 years</span> - conducted in drydock. Full scope: all ACB tests (secondary injection), generator tests, IR of all motors/cables, MSB busbar torque checks, steering gear hard-over timing.</div>
    </div>
    <div class="n-card" style="border-color:var(--green);">
      <div class="card-title">♻️ Continuous Survey (CMS)</div>
      <div class="card-desc">Rolling programme - <span class="n-val">20% of scope per year</span>. Replaces Special Survey by spreading the work across 5 years. Every item is surveyed once in 5 years at sea without drydocking every cycle.</div>
    </div>
    <div class="n-card" style="border-color:var(--purple);">
      <div class="card-title">🛡️ Safety Equipment Survey (SEC)</div>
      <div class="card-desc">Part of statutory SOLAS survey. Covers GMDSS, EPIRB, SART, fire detection, emergency lighting, lifeboat electrics, nav lights, LSA equipment certificates.</div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Survey Intervals:</strong> Annual (1 yr) → Intermediate (2.5 yr) → Special/Renewal (5 yr). CMS = 20% per year rolling. SEC = statutory SOLAS safety items every year.</div></div>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-preparation">2. Complete Electrical Survey - Preparation &amp; Documents</div>

  <div class="n-p">The surveyor requires specific documents to verify compliance before physical testing. Presenting these promptly at the start of survey demonstrates ship-shape SMS compliance.</div>

  <table class="n-table">
    <tr><th>DOCUMENT CATEGORY</th><th>SPECIFIC ITEMS</th></tr>
    <tr><td><strong>Statutory Certificates</strong></td><td>Safety Equipment Certificate (SEC), Safety Construction Certificate (SCC), IAPP (with ODS Record Book), Class Electrical Certificate, GMDSS Radio Station Licence, VDR Annual Performance Test Certificate.</td></tr>
    <tr><td><strong>PMS Records</strong></td><td>IR test records (with temperature correction logged), battery logs, Emergency Generator Log (monthly starts + annual blackout test), fire detection test log, nav lights test log, ACB maintenance records.</td></tr>
    <tr><td><strong>Drawings &amp; Data</strong></td><td>Single-line diagram, MSB arrangement drawing, load analysis, NOx Technical File (main engine).</td></tr>
  </table>

  <div class="n-h2">Insulation Resistance - Minimum Acceptable Values</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;">
    <div class="n-card" style="border-color:var(--blue);">
      <div class="card-title">Low Voltage (LV) - 440 V System</div>
      <div class="card-desc">Fixed floor: <span class="n-val">1 MΩ minimum</span> (IEC 60092). Measured with a <span class="n-val">500 V DC megger</span>. New or recently rewound equipment must exceed <span class="n-val">100 MΩ</span>.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange);">
      <div class="card-title">High Voltage Systems</div>
      <div class="card-desc">Dynamic formula: <strong>Min IR (MΩ) = kV rating + 1</strong>. 3.3 kV → <span class="n-val">4.3 MΩ</span> min. 6.6 kV → <span class="n-val">7.6 MΩ</span> min. Anything below fails survey → LOTO mandatory.</div>
    </div>
  </div>

  <div class="n-formula">Minimum IR (MΩ) = Rated System Voltage (kV) + 1<div class="label">Class-mandated lower limit for HV machinery insulation resistance</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Hi-Pot (Dielectric Strength) Test Formula:</strong><br>
  V_test = (2 × V_rated) + 1000 V AC - maintained for <span class="n-val">1 minute</span>.<br>
  For 440 V: (2 × 440) + 1000 = <span class="n-val">1880 V AC</span> → rounded to <span class="n-val">2000 V AC</span> in practice.<br>
  For 6.6 kV: (2 × 6600) + 1000 = <span class="n-val">14,200 V AC</span>.<br>
  <strong>⚠️ Before Hi-Pot test:</strong> Isolate all sensitive electronics, control transformers, and PLC links to prevent semiconductor damage.</div></div>

  <div class="n-p"><strong>Physical Checks by Surveyor:</strong> MSB Busbar IR (500 V DC megger), busbar torque check, ACB secondary injection (OCR), reverse power trip, UVT, Emergency Gen blackout auto-start (≤45 s), voltage regulation (load throw-on, recover in ≤1.5 s), preferential trip sequence, navigational lights, fire detection zones, steering gear hard-over timing.</div>


  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-msb">3. MSB Survey - Dead Front Panel &amp; MSB Safeties</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Dead Front Panel Definition (Sanjib, Kamath - asked at almost every survey oral):</strong> A switchboard where <u>no live conductors or busbars are accessible from the front during normal operation</u>. Operating handles and buttons are exposed, but all live parts are behind insulated barriers. You CANNOT open the panel to access live parts without isolating the circuit (mechanical interlock). <br><strong>Voltage limits:</strong> For <span class="n-val">440 V</span> AC, front face tested to withstand <span class="n-val">2000 V</span>. For DC, anything &gt; <span class="n-val">50 V</span> requires dead front construction.</div></div>

  <div class="n-h2">MSB Safeties - Complete List (Surveyor Will Ask You to List These)</div>
  <ul class="n-list">
    <li><strong>Dead Front Construction:</strong> Insulated front panels, no live metal accessible.</li>
    <li><strong>Rubber Insulating Mat:</strong> Runs full length in front of MSB. Rated for system voltage (e.g. Class 2, 17 kV rating for a 440 V board).</li>
    <li><strong>0.6 m Minimum Clearance:</strong> Clear working space in front (SOLAS Reg. II-1/41 requirement).</li>
    <li><strong>Earth Fault Indicator (IRM):</strong> Insulation monitor triggers alarm on first earth fault on insulated neutral system - no auto-trip; allows time to find fault.</li>
    <li><strong>Hull Earthing Cable:</strong> MSB structural frame bonded to ship's hull.</li>
    <li><strong>Bus Tie Interlock:</strong> Prevents unsynchronised closing of bus sections.</li>
    <li><strong>Barriers &amp; Ventilation:</strong> End gates/barriers, adequate MSB room ventilation (prevents explosive hydrogen accumulation), fixed fire detector in switchboard room.</li>
    <li><strong>Mechanical Interlock on Transformer Feeders:</strong> Prevents two sources feeding the same load section simultaneously.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Mnemonic - MSB SAFETIES: "DR EARTH BV"</strong><br>
  <strong>D</strong>ead front · <strong>R</strong>ubber mat · <strong>E</strong>arth fault indicator · <strong>A</strong>isle clearance 0.6 m · <strong>R</strong>igid hull earth · <strong>T</strong>ie bus interlock · <strong>H</strong>ull bonding · <strong>B</strong>arriers + <strong>V</strong>entilation</div></div>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-acb">4. ACB Survey - Trip Tests, UVT Coil &amp; Isolation</div>

  <table class="n-table">
    <tr><th>ACB PROTECTION</th><th>WORKING PRINCIPLE</th><th>TEST METHOD</th><th>SETTINGS</th></tr>
    <tr><td><strong>Overcurrent (OCR / IDMT)</strong></td><td>IDMT relay - trips faster at higher multiples of rated current.</td><td class="hl">Secondary injection: rack ACB to TEST. Inject 150%, 200%, 600% rated current via CT secondary. Compare trip time to IDMT curve.</td><td><span class="n-val">150% (long delay) · 200% · 600% (instantaneous)</span></td></tr>
    <tr><td><strong>Reverse Power (RPR)</strong></td><td>Wattmetric relay - prevents generator motoring (engine loses fuel but ACB stays closed).</td><td class="hl">At sea: reduce governor until kW goes negative. Shore: inject 180° phase-shifted current into relay test terminals.</td><td><span class="n-val">5–15% rated kW</span> (diesel) · 2–3% (turbine)</td></tr>
    <tr><td><strong>Under-Voltage (UVT)</strong></td><td>Continuous-duty holding coil. Coil de-energises → spring trips ACB.</td><td class="hl">Reduce coil supply via Variac until ACB trips.</td><td>Trips at <span class="n-val">70–80%</span> rated voltage</td></tr>
    <tr><td><strong>Over-Voltage (OVT)</strong></td><td>Relay senses voltage above limit.</td><td class="hl">Use AVR trimmer to raise terminal voltage until trip.</td><td><span class="n-val">110–115%</span> rated</td></tr>
    <tr><td><strong>Under-Frequency</strong></td><td>Relay monitors bus frequency.</td><td class="hl">Reduce governor speed slowly.</td><td><span class="n-val">57 Hz</span> (95% of 60 Hz)</td></tr>
    <tr><td><strong>Shunt Trip</strong></td><td>Momentary coil - requires active power to energise and trip the ACB.</td><td class="hl">Apply rated DC voltage to shunt coil terminal → ACB trips.</td><td>Rated DC supply momentarily</td></tr>
  </table>

  <div class="n-h2">UVT (Under-Voltage Trip) Coil - Physics &amp; Exam Explanation</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor will ask: "What is the UVT coil and how does it work? How is it different from a shunt trip?"</strong></div></div>
  <ul class="n-list">
    <li><strong>Continuous Holding Coil:</strong> The UVT coil is energised constantly from the generator bus voltage. Its magnetic force counteracts internal latch springs, keeping the ACB contacts held closed during normal operation.</li>
    <li><strong>Drop-Out Boundary:</strong> If bus voltage falls below <span class="n-val">70–80% of rated voltage</span>, the magnetic flux drops - the spring force overcomes the coil and instantly snaps the ACB open. This prevents high inrush current from downstream motors on a weak supply.</li>
    <li><strong>Interlock / Emergency Stop:</strong> Any emergency stop button or generator protection lockout simply opens the UVT coil circuit → ACB trips instantly. This is why ACB manual safety switches isolate the UVT supply.</li>
    <li><strong>UVT vs Shunt Trip:</strong> UVT is fail-safe (trips on LOSS of power - safer during blackout). Shunt trip requires APPLIED power to trip - it would fail during a total dead-bus blackout.</li>
  </ul>

  <div class="n-h2">ACB Isolation Procedure (Step by Step)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Surveyors Sanjib and Kamath ask this as a practical test question. Memorise the sequence exactly.</div></div>
  <ol class="n-steps">
    <li>Inform Bridge Watch Officer and Chief Engineer of intended isolation and purpose.</li>
    <li>Transfer all loads to the other running generator(s). Verify load sharing is stable.</li>
    <li>Open the ACB (press trip button) and stop the diesel generator.</li>
    <li><strong>Rack out</strong> the ACB to TEST position (secondary circuits still connected) or fully WITHDRAWN (completely isolated). The racking mechanism physically separates the main contacts from the busbars via an insulating shutters system.</li>
    <li>Apply <strong>Lock-Out / Tag-Out (LOTO)</strong> - fit padlock to ACB in withdrawn position, attach danger tag with name, date, work description.</li>
    <li>Verify zero voltage on the ACB terminals with an approved voltage tester.</li>
    <li><strong>Discharge the closing spring</strong> energy by operating the manual spring-discharge mechanism - a charged spring can cause unexpected contact closure.</li>
    <li>Proceed with maintenance. On completion, reverse steps - remove LOTO, rack in, test.</li>
  </ol>

  <div class="n-h2">Drydock Reverse Power Relay (RPR) - Secondary Injection Test Procedure</div>
  <ol class="n-steps">
    <li>Isolate and rack out the generator ACB to TEST position. Isolate the secondary VT control circuits.</li>
    <li>Connect a three-phase secondary injection relay test kit to the VT and CT secondary input terminals at the RPR panel rear.</li>
    <li>Inject nominal 3-phase reference voltage (e.g. <span class="n-val">110 V AC</span>).</li>
    <li><strong>The Phase-Shift Trick:</strong> Adjust the test set to inject current shifted exactly <span class="n-val">180° out of phase (cos φ = −1)</span> relative to the voltage. This forces the directional wattmetric element to read negative power.</li>
    <li>Gradually increase injected current amplitude until it crosses the trip setpoint (typically <span class="n-val">5–15%</span> of rated current for diesel units).</li>
    <li>Start a stopwatch at threshold crossing. Verify relay output contacts close (ACB trip loop energises) within <span class="n-val">3–5 seconds</span>. Document measured currents, delay times, and relay settings for class registration.</li>
  </ol>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-overspeed">5. Overspeed Trip Test - DG and Main Engine</div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr;">
    <div class="n-card" style="border-color:var(--green);">
      <div class="card-title">✅ Diesel Generator - Mechanical Centrifugal Test</div>
      <div class="card-desc">With DG on <strong>no-load</strong>, slowly increase governor speed setpoint above rated RPM. The mechanical centrifugal fly-weight trip activates at <span class="n-val">10–15% above rated speed</span>, cutting off fuel supply. Actual trip RPM must be recorded and compared against nameplate data. Reset manually before returning to service.</div>
    </div>
    <div class="n-card" style="border-color:var(--red);">
      <div class="card-title">🚫 Main Engine - NEVER Physically Overspeed</div>
      <div class="card-desc">Tested using the <strong>Electronic Engine Management System (EMS)</strong> built-in overspeed simulation function. Activate via EMS menu → fuel cut-off activates and alarms sound at ECR and Bridge. Physical mechanical test only done during sea trials or when uncoupled in drydock under class supervision.</div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor will ask: "Why don't you physically overspeed the main engine?"</strong><br>Answer: The main engine is a large slow-speed diesel - physical overspeed could cause catastrophic bearing failure, connecting rod damage, crankcase explosion risk. The EMS test verifies the electronic trip logic without mechanical risk. Class accepts EMS simulation as equivalent to physical test in service.</div></div>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-rpr">6. Reverse Power Trip - Construction &amp; Working</div>

  <div class="n-p"><strong>Purpose:</strong> Protects the prime mover from being "motored" by the busbars. If a generator's fuel supply fails but its ACB remains closed, the busbar would drive the generator as a motor - spinning the dead engine, causing thermal and mechanical damage to engine bearings and pistons.</div>

  <div class="n-p"><strong>Construction:</strong> Directional power (wattmetric) relay uses CT (current) and VT (voltage) inputs. Compares phase angle between voltage and current vectors. If current phase reverses (indicating power flowing INTO the generator), the relay registers negative power flow and trips after a time delay.</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a time delay (1–5 seconds)?</strong> During synchronisation, the incoming generator is momentarily connected before load sharing equalises. A brief negative kW swing is normal and should NOT cause a trip. The 1–5 second delay prevents nuisance trips during this transient period. Diesel units: 5–15% kW trip setting. Turbine units: 2–3% (turbines motor more easily).</div></div>

  <div class="n-p"><strong>Time delay setting:</strong> <span class="n-val">3–5 seconds</span> for diesel generator (to allow sync transient to settle). Trip setpoint: <span class="n-val">5–15% of rated kW in reverse direction</span>.</div>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-mechecks">7. Main Engine Checks During Electrical Survey</div>

  <ul class="n-list">
    <li><strong>NOx Technical File:</strong> Presented to surveyor to verify MARPOL Annex VI NOx Tier compliance for the engine.</li>
    <li><strong>Automation Tests:</strong> Records of ME safety shutdown trips - overspeed, bearing temperature high, LO low pressure, jacket water high temperature, thrust bearing wear.</li>
    <li><strong>Speed / Tachometer Calibration:</strong> RPM indicator accuracy checks - tacho pickup and display chain calibration records.</li>
    <li><strong>Governor Tests:</strong> Droop settings and load step response records - governor stability under load changes.</li>
    <li><strong>Telegraph System:</strong> Bridge and ECR telegraph agreement test - both units must show identical order simultaneously.</li>
    <li><strong>Shaft Earthing:</strong> Inspect shaft earthing brush, measure resistance from shaft to hull &lt; <span class="n-val">1 Ω</span>. Prevents static charge buildup causing bearing pitting.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Shaft Earthing Brush - Why Important?</strong> The propeller shaft rotating through the magnetic flux of the hull creates a small EMF. Without earthing, current flows through the stern tube bearings (electrolytic corrosion/pitting). The earthing brush provides a low-resistance path from shaft to hull, bypassing bearings. Brush pressure and contact resistance must be checked at every survey.</div></div>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-shoresupply">8. Emergency Shore Supply During Drydock</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Deswal ask shore connection safety in detail - phase sequence, Castell key, ICCP isolation.</strong></div></div>

  <div class="n-p"><strong>Connecting Shore Power - Step-by-Step Procedure:</strong></div>
  <ol class="n-steps">
    <li><strong>Match Parameters:</strong> Verify shore supply voltage and frequency match the ship (<span class="n-val">440 V, 60 Hz</span>). If not, arrange transformer or frequency converter from the yard.</li>
    <li><strong>Phase Sequence Check:</strong> Use a phase sequence indicator to confirm shore R-Y-B matches ship R-Y-B. Incorrect phase sequence runs all 3-phase motors in reverse - causes immediate mechanical damage to pumps, fans, steering.</li>
    <li><strong>Isolate Ship Power:</strong> Open all main generator ACBs. Apply LOTO to generator MCCBs. Switch OFF the ICCP (Impressed Current Cathodic Protection) system - it will interact with shore earthing. Place Emergency Generator on manual standby mode.</li>
    <li><strong>Connect Shore Cable:</strong> Connect heavy-duty shore cable to the ship's shore connection box (usually on main deck or engine casing side port/starboard).</li>
    <li><strong>Close Shore Breaker:</strong> Close shore breaker progressively with minimal load on board.</li>
    <li><strong>Earth Connection:</strong> Connect shore earth via a galvanic isolator to prevent stray current corrosion. Log the connection time and source parameters.</li>
  </ol>

  <div class="n-h2">Trapped-Key (Castell Key) Interlock - Why and How</div>
  <div class="n-p">Because ship generators use an IT (insulated neutral) system while shore supply uses TN-S (solidly earthed neutral), <strong>the generator and shore supply must NEVER run in parallel</strong>. Paralleling passes high earth-loop currents that cause false insulation alarms and accelerate galvanic corrosion on the hull.</div>
  <ul class="n-list">
    <li>To close the Shore Connection Breaker, you must first physically open all main generator ACBs and turn their mechanical interlocking keys - locking them open and freeing the key.</li>
    <li>Take the freed key to the Shore Supply cubicle and insert it into the receiver lock. Only this specific key releases the shore breaker's mechanical closing latch.</li>
    <li>This hardware loop makes it physically impossible to accidentally parallel a ship generator with shore supply - no software or procedural override can bypass it.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Shore Supply Procedure: "Match → Check Phase → Isolate Gen → Connect → Earth"</strong><br>
  M = Match V &amp; Hz · C = Check phase sequence · I = Isolate generators (LOTO + ICCP OFF) · C = Connect shore cable · E = Earth via galvanic isolator</div></div>


  <!-- ═══ SECTION 9 - NEW ═══ -->
  <div class="n-h1" id="s-battery">9. Battery Capacity Test - Discharge Procedure &amp; Acceptance Criteria</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask this: "How do you test a battery to prove it can hold charge and deliver capacity?" - Emergency battery banks, GMDSS battery, and UPS batteries are all in scope.</strong></div></div>

  <div class="n-h2">Battery Charge-Holding Demonstration (Quick Survey Test)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Exam scenario:</strong> Surveyor asks: "Demonstrate to me that this battery is fully charged and holding charge."<br>
  <strong>Method:</strong> Switch OFF the charger. Observe the terminal voltage - it will dip momentarily (surface charge loss), then <strong>hold steady</strong> at the open-circuit voltage for that cell chemistry.<br>
  Lead-acid fully charged OCV: ~<span class="n-val">2.1 V per cell</span> (12.6 V for 6-cell). Alkaline/NiCd fully charged OCV: ~<span class="n-val">1.25–1.30 V per cell</span>.<br>
  If voltage drops steadily after charger is removed → battery not holding charge → needs capacity test or renewal.</div></div>

  <div class="n-h2">Full Capacity (Discharge) Test Procedure</div>
  <ol class="n-steps">
    <li>Ensure battery is fully charged to the manufacturer's rated specification (SG 1.270–1.285 for lead-acid at 15°C).</li>
    <li>Prepare a discharge load bank equivalent to the <strong>rated discharge current (C10 rate = rated Ah ÷ 10 hours)</strong>. Example: a 100 Ah battery → 10 A discharge load.</li>
    <li>Record start time, start voltage, and start SG (electrolyte specific gravity for lead-acid).</li>
    <li>Apply load continuously. Record voltage and SG at regular intervals (every 30 minutes).</li>
    <li>Stop discharge when terminal voltage drops to <strong>cut-off voltage</strong>: Lead-acid → <span class="n-val">1.75 V/cell</span> (10.5 V for 6-cell 12 V). NiCd alkaline → <span class="n-val">1.0 V/cell</span>.</li>
    <li>Calculate actual capacity: <strong>Actual Capacity (Ah) = Discharge Current (A) × Time to Cut-Off (hours)</strong>.</li>
    <li><strong>Acceptance Criterion:</strong> Actual capacity ≥ <span class="n-val">80% of rated capacity</span> = PASS. Below 80% → battery must be renewed before survey can be cleared.</li>
  </ol>

  <div class="n-formula">Actual Capacity (Ah) = I_discharge (A) × T_discharge (hours)<div class="label">Battery capacity test - compare against rated Ah; acceptance ≥ 80%</div></div>

  <div class="n-h2">Battery Condition Checks by Surveyor</div>
  <table class="n-table">
    <tr><th>Check</th><th>Method</th><th>Pass Criterion</th></tr>
    <tr><td>Open Circuit Voltage</td><td>Digital voltmeter, charger OFF, 1 min rest</td><td class="ok">Lead-acid: ≥12.6 V (6-cell) · Alkaline: ≥1.25 V/cell</td></tr>
    <tr><td>Specific Gravity (SG)</td><td>Hydrometer on each cell (lead-acid only)</td><td class="ok">1.240–1.285 @ 15°C; all cells within 0.025 of each other</td></tr>
    <tr><td>Load Test / Capacity Test</td><td>Discharge at C10 rate to cut-off voltage</td><td class="ok">≥80% rated Ah capacity</td></tr>
    <tr><td>Internal Resistance</td><td>Conductance tester (Midtronics or similar)</td><td class="ok">Within manufacturer limits (varies by model)</td></tr>
    <tr><td>Visual / Physical</td><td>Inspect terminals, plates, electrolyte level, vents</td><td class="ok">No sulphation, no warped plates, electrolyte above minimum mark, vents clear</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Temperature Correction for SG:</strong> SG decreases ~0.0007 per °C above 15°C. Add correction to measured SG if electrolyte is hot. Example: measured SG 1.240 at 35°C → corrected SG = 1.240 + (35-15)×0.0007 = 1.240 + 0.014 = <span class="n-val">1.254</span>.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Battery Types on Board Requiring Survey:</strong><br>
  • Emergency battery banks (ESB backup, navigation lights backup)<br>
  • GMDSS batteries (EPIRB internal, portable VHFs, DSC watch receiver)<br>
  • UPS batteries (IAS/alarm system, bridge equipment backup)<br>
  • Emergency generator starting battery<br>
  • Lifeboat starting battery (if electric start)</div></div>


  <!-- ═══ SECTION 10 - NEW ═══ -->
  <div class="n-h1" id="s-navlights">10. Navigation Light Survey - Test Procedure &amp; Certificate</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Nav light circuit and alarm are asked by Kamath and Sanjib. Know the fuse-pull test and circuit components exactly.</strong></div></div>

  <div class="n-h2">Navigation Light Circuit - Components</div>
  <ul class="n-list">
    <li><strong>Changeover Switch:</strong> Each nav light position (masthead, port, starboard, stern, anchor) has a main lamp and a spare lamp. A changeover relay/switch allows switching to spare lamp from the bridge without going aloft.</li>
    <li><strong>Open-Circuit Alarm:</strong> A relay monitors the lamp circuit. If the lamp filament fails (open circuit), the relay detects absence of current and activates a buzzer/alarm on the bridge nav light panel.</li>
    <li><strong>Series Indicator Resistor:</strong> A low-value resistor in series with the alarm circuit allows a small indicator current to flow for monitoring without overloading the alarm circuit.</li>
    <li><strong>ESB Supply:</strong> Nav lights are supplied from the Emergency Switchboard (ESB) - they must remain operational on emergency power per SOLAS.</li>
    <li><strong>Duplicate Supply:</strong> Main and emergency supply with changeover, ensuring availability even during main power loss.</li>
  </ul>

  <div class="n-h2">Navigation Light Survey Test Procedure</div>
  <ol class="n-steps">
    <li>Confirm all nav light positions are clean and lenses are undamaged. Check correct colour filters (port = red, starboard = green, masthead/stern = white).</li>
    <li><strong>Fuse-Pull Test:</strong> Simulate broken wire / lamp failure by pulling the supply fuse to one nav light circuit. Verify that the indicator alarm and buzzer activate correctly on the bridge panel.</li>
    <li>Restore fuse. Verify alarm clears. Operate changeover switch - spare lamp should illuminate automatically or on manual command.</li>
    <li>Test ESB supply changeover - switch nav lights to emergency supply; confirm lamps remain on without interruption.</li>
    <li>Record all positions tested, lamp wattages, and any deficiencies in the <strong>Navigational Light Record</strong>.</li>
    <li>Surveyor signs the <strong>Navigation Light Record Book</strong> as part of the Safety Equipment Survey (SEC) clearance.</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Changing Nav Light Bulb Aloft - Safety Requirements:</strong><br>
  • Working at Height PTW (above 2 m) - issued and signed.<br>
  • Safety harness and fall-arrest lanyard.<br>
  • Radar transmitters switched off (microwave radiation hazard in mast vicinity).<br>
  • Lamp supply circuit isolated and LOTO applied before climbing.<br>
  • Safety observer stationed at base of mast.<br>
  • Radio communications maintained with bridge throughout.</div></div>

  <div class="n-h2">SOLAS Navigation Light Requirements</div>
  <table class="n-table">
    <tr><th>Nav Light</th><th>Colour</th><th>Arc</th><th>Range</th></tr>
    <tr><td>Forward Masthead</td><td class="hl">White</td><td>225°</td><td>6 nm (>50 m vessel)</td></tr>
    <tr><td>Aft Masthead</td><td class="hl">White</td><td>225°</td><td>6 nm</td></tr>
    <tr><td>Port Sidelight</td><td class="ok">Red</td><td>112.5°</td><td>3 nm (>50 m)</td></tr>
    <tr><td>Starboard Sidelight</td><td class="ok">Green</td><td>112.5°</td><td>3 nm (>50 m)</td></tr>
    <tr><td>Stern Light</td><td class="hl">White</td><td>135°</td><td>3 nm</td></tr>
    <tr><td>Anchor Light</td><td class="hl">White (all-round)</td><td>360°</td><td>3 nm (&gt;100 m) · 2 nm (&lt;100 m)</td></tr>
  </table>


  <!-- ═══ SECTION 11 - NEW ═══ -->
  <div class="n-h1" id="s-crane">11. Crane &amp; Elevator Electrical Survey - Class Requirements</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ETO owns the electrical systems of deck cranes, cargo winches, and passenger/service elevators. Class surveys these separately under lifting appliance regulations. Surveyors ask ETO about LOTO, limit switches, and overload test procedures.</strong></div></div>

  <div class="n-h2">11A. Deck Crane / Cargo Gear - Electrical Survey</div>

  <div class="n-h2">Pre-Survey Preparation</div>
  <ul class="n-list">
    <li><strong>SWL (Safe Working Load) Markings:</strong> SWL must be visibly marked on the crane in tonnage. Class requires the marking to be legible. ETO verifies the electrical load rating matches the certified SWL.</li>
    <li><strong>Crane Register:</strong> Class Register of Lifting Appliances - lists SWL, last test date, and test load used. Must be available for surveyor.</li>
    <li><strong>Test Certificates:</strong> Proof load test certificate (10% overload test = 1.1 × SWL) issued after each 5-year special survey or major repair.</li>
  </ul>

  <div class="n-h2">Electrical Checks - Cranes</div>
  <table class="n-table">
    <tr><th>Check Item</th><th>Method</th><th>Acceptance</th></tr>
    <tr><td>Hoist Motor IR Test</td><td>500 V DC megger, winding to frame</td><td class="ok">≥1 MΩ at ambient temp</td></tr>
    <tr><td>Over-Travel Limit Switches</td><td>Run hook to upper limit - hoist motor must stop automatically</td><td class="ok">Motor stops before mechanical contact with drum</td></tr>
    <tr><td>Lower Limit Switch</td><td>Lower hook to bottom limit - hoist motor must stop</td><td class="ok">Motor stops, preventing chain/wire slack and override</td></tr>
    <tr><td>Slewing Limit Switch (if fitted)</td><td>Slew jib to end stop - drive must stop before mechanical contact</td><td class="ok">Motor stops at set angle; no mechanical impact</td></tr>
    <tr><td>Overload Test (Proof Load)</td><td>Lift 1.1 × SWL (10% overload) for class certification</td><td class="ok">No deformation, no alarm trip, all limits functional after load</td></tr>
    <tr><td>Thermal Overload Relay</td><td>Check setting vs motor FLC; manual reset function</td><td class="ok">Set at 110–125% motor FLC, bi-metal reset works</td></tr>
    <tr><td>LOTO Points</td><td>Confirm crane main isolator is lockable (padlockable)</td><td class="ok">Distinct lockable isolator accessible without climbing</td></tr>
    <tr><td>Anti-collision (if fitted)</td><td>Test sensor operation in overlap zone</td><td class="ok">Crane slows/stops before collision zone</td></tr>
  </table>

  <div class="n-h2">11B. Elevator (Passenger / Service) - Electrical Survey</div>
  <div class="n-p">Elevators on vessels over a certain passenger/crew complement are surveyed under class rules for lifting appliances and additionally under SOLAS for passenger safety. The ETO is responsible for the electrical drive, interlocks, and safety devices.</div>

  <div class="n-h2">Elevator Electrical Checks</div>
  <table class="n-table">
    <tr><th>Check Item</th><th>What Surveyor Verifies</th><th>Standard</th></tr>
    <tr><td>Door Interlock Circuits</td><td>Car must NOT move unless ALL landing doors AND car door are fully closed and locked. Simulate door ajar - drive must not start.</td><td class="ok">No movement with any door open</td></tr>
    <tr><td>Over-speed Governor</td><td>Test mechanical governor activation at 1.15 × rated speed - activates safety gear (parachute clamps on guide rails)</td><td class="ok">Activates ≤115% rated speed</td></tr>
    <tr><td>Buffer Test</td><td>Car descends onto buffer at low speed - car must decelerate safely; buffer must return car to normal position</td><td class="ok">No structural deformation; buffer recovers fully</td></tr>
    <tr><td>Emergency Lighting</td><td>Simulate power failure - car interior emergency light must activate automatically</td><td class="ok">Minimum 1 hour emergency lighting duration</td></tr>
    <tr><td>Alarm Bell</td><td>Test car alarm button - bell/buzzer must be audible from outside</td><td class="ok">Audible at all landings when activated</td></tr>
    <tr><td>LOTO Provision</td><td>Main drive isolator at machine room level is lockable</td><td class="ok">Lockable isolator, clearly labelled</td></tr>
    <tr><td>Motor IR Test</td><td>500 V megger on drive motor</td><td class="ok">≥1 MΩ</td></tr>
    <tr><td>Car Terminal Switches</td><td>Upper and lower car terminal switches stop car before buffer engagement at normal speed</td><td class="ok">Car decelerates and stops at terminal</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Elevator LOTO Procedure:</strong><br>
  1. Move car to a landing (not between floors).<br>
  2. Open machine room. Apply LOTO to main drive isolator.<br>
  3. Verify car does not move when call button pressed.<br>
  4. Confirm car interior lighting is on (UPS / emergency circuit).<br>
  5. All maintenance to be done with car at landing level only - never work on drive with car suspended mid-shaft.</div></div>


  <!-- ═══ SECTION 12 - NEW ═══ -->
  <div class="n-h1" id="s-emgfirepump">12. Emergency Fire Pump - Annual SOLAS Test</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS Requirement (Ch II-2, Reg 10):</strong> The emergency fire pump must be independently driven (not from main machinery space), capable of supplying two jets of water simultaneously at the required pressure. It must be tested annually as part of the fire safety survey.</div></div>

  <div class="n-h2">Emergency Fire Pump - Electrical Survey Checks</div>
  <ol class="n-steps">
    <li><strong>Location Verification:</strong> Confirm the pump and its driving motor are located outside the main machinery space (or protected by A-60 division) so they remain operable during an ER fire or flooding scenario.</li>
    <li><strong>Motor IR Test:</strong> Measure insulation resistance of the pump motor - minimum <span class="n-val">1 MΩ</span> at ambient temperature using 500 V DC megger.</li>
    <li><strong>Supply Circuit:</strong> Verify the pump is supplied from the Emergency Switchboard (ESB), not the main MSB - it must operate during a total main power blackout.</li>
    <li><strong>Local and Remote Start Test:</strong> Test pump start from local panel AND from the bridge/fire control station. Both must start the pump within the expected delay time.</li>
    <li><strong>Capacity Check:</strong> Run the pump and verify delivery pressure at the fire main - confirm two nozzles can be simultaneously supplied at the required pressure (typically <span class="n-val">0.25–0.34 MPa</span> at the nozzle depending on class rules).</li>
    <li><strong>Auto-Start Test (if fitted):</strong> Simulate drop in main fire main pressure - pump should auto-start within the specified delay.</li>
    <li>Record test results, running time, delivery pressure, and motor start current in the PMS/safety log.</li>
  </ol>

  <table class="n-table">
    <tr><th>SOLAS Requirement</th><th>Value</th></tr>
    <tr><td>Test frequency</td><td class="hl">Annual (Safety Equipment Survey)</td></tr>
    <tr><td>Minimum delivery</td><td class="ok">Two fire hose jets simultaneously</td></tr>
    <tr><td>Supply</td><td class="ok">Emergency Switchboard (independent of main MSB)</td></tr>
    <tr><td>Motor IR</td><td class="ok">≥1 MΩ (LV motor)</td></tr>
    <tr><td>Location</td><td class="ok">Outside main machinery space OR behind A-60 division</td></tr>
  </table>


  <!-- ═══ SECTION 13 ═══ -->
  <div class="n-h1" id="s-ism">13. ISM Code &amp; SMS - ETO Duties</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask ISM Code certificates and ETO duties under SMS. Know DOC vs SMC difference exactly.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ISM Code (SOLAS Chapter IX):</strong> International Safety Management Code. Establishes a Safety Management System (SMS) for safety and pollution prevention.<br>
  <strong>DOC</strong> (Document of Compliance) → issued to the <strong>COMPANY</strong> - valid <span class="n-val">5 years</span> with annual verification.<br>
  <strong>SMC</strong> (Safety Management Certificate) → issued to the <strong>SHIP</strong> - valid <span class="n-val">5 years</span> with intermediate verification at <span class="n-val">2.5 years</span>.<br>
  <strong>DPA</strong> (Designated Person Ashore) = direct link between ship and highest management for safety and pollution prevention.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Major Non-Conformity (MNC):</strong> Immediate threat to safety or environment - SUSPENDS the ship's certification. Ship cannot trade until MNC is closed. Examples: non-functional fire detection, expired GMDSS certificates, no emergency generator auto-start, no PTW system in operation.</div></div>

  <div class="n-h2">ETO SMS Duties</div>
  <ul class="n-list">
    <li>Execute and record all PMS (Planned Maintenance System) tasks on time.</li>
    <li>Defect reporting to Chief Engineer - log all deficiencies in SMS defect register.</li>
    <li>Near-miss and incident reporting - even if no injury or damage results.</li>
    <li>Issue and receive Permits to Work (PTW) - Electrical Isolation Permit (EIP) for all electrical maintenance.</li>
    <li>Maintain GMDSS logbook and battery/equipment test records.</li>
    <li>Ensure all surveys and certificates are current and documents presented correctly to surveyor.</li>
  </ul>


  <!-- ═══ SECTION 14 ═══ -->
  <div class="n-h1" id="s-ptw">14. Permit to Work (PTW) System</div>

  <table class="n-table">
    <tr><th>Permit Type</th><th>Required For</th><th>Key Requirement</th></tr>
    <tr><td><strong>Electrical Isolation Permit (EIP)</strong></td><td>Any electrical maintenance on live or isolated equipment</td><td class="hl">LOTO (Lock-Out Tag-Out) + test de-energised before work begins</td></tr>
    <tr><td><strong>Hot Work Permit</strong></td><td>Welding, cutting, grinding near flammable materials</td><td class="hl">Gas-free certificate + fire watch + CO₂ standby</td></tr>
    <tr><td><strong>Enclosed Space Entry</strong></td><td>Entry to any enclosed space (pump rooms, tanks, voids)</td><td class="hl">Gas tests (O₂ &gt;20.9%, toxic gases &lt; TLV) + standby person</td></tr>
    <tr><td><strong>Working at Height</strong></td><td>Work above <span class="n-val">2 metres</span></td><td class="hl">Harness + fall arrest + safety observer</td></tr>
    <tr><td><strong>Isolation of Safety Systems</strong></td><td>Disabling smoke detectors, sprinklers during maintenance</td><td class="hl">Chief Engineer approval + fire watch in affected area throughout</td></tr>
  </table>

  <div class="n-h2">Electrical Isolation Permit (EIP) - Procedure Steps</div>
  <ol class="n-steps">
    <li>Identify the equipment and its isolation points. Complete the EIP form with description, location, equipment tag, and scope of work.</li>
    <li>Obtain signature from Chief Engineer (authorising officer) before isolation begins.</li>
    <li>Isolate the equipment using the designated isolator or MCCB. Lock with personal padlock and attach danger tag with name, date, work description.</li>
    <li>Verify isolation: test for zero voltage at all terminals with an approved non-contact voltage tester.</li>
    <li>Permit issued - work may proceed within the scope stated on the permit only.</li>
    <li>On completion: tools removed, covers secured, team clear. EIP returned and signed off. Isolation removed only by the permit-issuing ETO or CE.</li>
  </ol>


  <!-- ═══ SECTION 15 ═══ -->
  <div class="n-h1" id="s-survey">15. Electrical Survey - Full Physical Test Checklist</div>

  <div class="n-h2">Documents to Present</div>
  <ul class="n-list">
    <li>Safety Equipment Certificate (SEC) and Safety Construction Certificate (SCC)</li>
    <li>IAPP Certificate (MARPOL Annex VI air pollution compliance)</li>
    <li>GMDSS Radio Station Licence + test records</li>
    <li>VDR Annual Performance Test Certificate</li>
    <li>PMS maintenance records (IR tests, battery logs, ACB maintenance)</li>
    <li>MSB single-line diagram and class-approved drawings</li>
  </ul>

  <div class="n-h2">Physical Tests Conducted at Survey</div>
  <table class="n-table">
    <tr><th>Test</th><th>Method</th><th>Acceptance Criterion</th></tr>
    <tr><td>MSB Busbar IR</td><td><span class="n-val">500 V DC</span> megger, all ACBs open</td><td class="ok">Min <span class="n-val">1 MΩ</span></td></tr>
    <tr><td>ACB Overcurrent Trip</td><td>Secondary injection at <span class="n-val">150%, 200%, 600%</span> rated</td><td class="ok">Trip times match IDMT curve</td></tr>
    <tr><td>Reverse Power Relay</td><td>Secondary injection (drydock) or governor reduction at sea</td><td class="ok">Trips at <span class="n-val">5–15%</span> rated kW reverse</td></tr>
    <tr><td>Under-Voltage Trip (UVT)</td><td>Reduce Variac supply to UVT coil</td><td class="ok">Trips at <span class="n-val">70–80%</span> rated voltage</td></tr>
    <tr><td>Emergency DG Blackout Test</td><td>Simulate main power failure (open ESB bus ACB)</td><td class="ok">Auto-starts and supplies ESB within <span class="n-val">45 seconds</span></td></tr>
    <tr><td>Steering Gear Timing</td><td>Hard over to hard over</td><td class="ok">Within <span class="n-val">28 seconds</span> at maximum speed</td></tr>
    <tr><td>Navigation Lights</td><td>Fuse-pull alarm test + spare lamp changeover</td><td class="ok">Alarm activates, changeover works, ESB supply confirmed</td></tr>
    <tr><td>Battery Capacity</td><td>Discharge test at C10 rate</td><td class="ok">≥80% rated Ah capacity</td></tr>
    <tr><td>Fire Detection Zones</td><td>Activate each zone - panel response, sounders</td><td class="ok">Correct zone identified, alarm sounds, printer logs</td></tr>
    <tr><td>MSB Busbar Torque Check</td><td>Torque wrench on busbar bolts</td><td class="ok">Per manufacturer torque tables; no loose connections</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Survey Documents: "SEC SCC GMDSS VDR PMS SLD"</strong><br>
  Safety Equipment Cert · Safety Construction Cert · GMDSS licence · VDR cert · PMS records · Single-Line Diagram</div></div>


  <!-- ═══ SECTION 16 ═══ -->
  <div class="n-h1" id="s-shore-sync">16. Shore Power - Phase-Sequence &amp; Trapped-Key Safeties</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Anil Deswal drill candidates on shore connection safety sequences and phase rotation hazards.</strong></div></div>

  <div class="n-h2">Phase-Sequence Indicator Verification Loop</div>
  <div class="n-p">Before closing the shore connection breaker, the ETO must verify that incoming shore lines match the vessel's internal <strong>clockwise phase rotation sequence (L1-L2-L3 / R-Y-B)</strong>. Connecting reversed phase rotation instantly forces all 3-phase auxiliary machinery motors (ER ventilation fans, sea water cooling pumps, steering motors) to spin backwards on startup - immediate mechanical damage.</div>
  <div class="n-p">The ETO validates rotation using a bridge-rectified <strong>Phase Sequence Indicator</strong> or a digital synchroscope at the shore box tapping. If the indicator flags a reversed rotation, the breaker must remain locked out and two incoming phase cables swapped to restore clockwise orientation.</div>

  <div class="n-h2">Trapped-Key (Castell Key) Interlock Circuits</div>
  <div class="n-p">Because ship generators use an IT (floating neutral) network while shore-side terminal grids are solidly earthed (TN-S), <strong>a ship generator and shore supply must NEVER run in parallel</strong>. Paralleling passes high earth-loop currents causing false insulation alarms and hull corrosion.</div>
  <ul class="n-list">
    <li>To close the Shore Connection Breaker: first open all generator ACBs and turn their mechanical interlocking keys - locking the ACBs open and freeing the keys.</li>
    <li>Take the freed key to the Shore Supply cubicle and insert into the receiver lock. Only this key releases the shore breaker's mechanical closing latch.</li>
    <li>This hardware loop completely prevents accidental paralleling - it cannot be bypassed by software or procedure.</li>
  </ul>


  <!-- ═══ SECTION 17 - NEW ═══ -->
  <div class="n-h1" id="s-droptest">17. Drop Test (Millivolt-Drop) - Busbar &amp; Breaker Contact Resistance</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Drop test is also called contact resistance test or millivolt-drop test. Surveyors ask ETOs to explain how to verify busbar joint tightness during drydock survey.</strong></div></div>

  <div class="n-p">A drop test (millivolt-drop test) measures the voltage drop across a busbar joint, connection, or ACB main contact under rated current. A high voltage drop indicates excessive contact resistance caused by a loose, corroded, or oxidised joint.</div>

  <div class="n-h2">Drop Test Procedure</div>
  <ol class="n-steps">
    <li>Pass the rated (or a known test) current through the joint or contact under test.</li>
    <li>Place a millivoltmeter (digital with mV range) across the joint - one probe each side of the connection point.</li>
    <li>Read the millivolt drop (V = I × R, so mV drop directly indicates contact resistance).</li>
    <li>Compare against the manufacturer's new-condition baseline or class acceptance table.</li>
    <li><strong>Pass Criterion:</strong> Typical acceptance for a busbar joint: &lt;<span class="n-val">50 µΩ</span> contact resistance (or millivolt drop &lt; threshold per rated current). A new ACB main contact: typically &lt;<span class="n-val">100 µΩ</span>. Any joint exceeding the baseline by 2–3× must be re-torqued or replaced.</li>
  </ol>

  <div class="n-formula">R_contact (Ω) = V_drop (V) ÷ I_test (A)<div class="label">Millivolt-drop test - contact resistance calculation</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>When is a drop test done?</strong><br>
  • During drydock Special Survey on MSB busbar joints after torque checks<br>
  • After ACB overhaul (verify main contact condition)<br>
  • After any suspected overheating or thermal discolouration at a joint<br>
  • As part of predictive maintenance before abnormally high IR values appear</div></div>


  <!-- ═══ SECTION 18 - DAILY & SATURDAY ROUTINES (from original) ═══ -->
  <div class="n-h1" id="s-daily-routines" style="display:none;">ETO Daily Routines (surveyor context - see Q&A below)</div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is a dead front panel?</td>
      <td>A panel where no live conductors are accessible from the front during normal operation. You interact only with insulated controls. It has interlocks preventing opening while live. For <span class="n-val">440 V</span> AC, the front face withstands a <span class="n-val">2000 V</span> dielectric test.</td>
    </tr>
    <tr>
      <td>How do you isolate an ACB for maintenance?</td>
      <td>Inform Bridge / CE. Transfer load, open ACB, stop engine. Rack out ACB to TEST or WITHDRAWN position. Apply Lock-Out/Tag-Out (LOTO). Verify zero voltage with tester. Discharge closing spring energy safely before working on mechanism.</td>
    </tr>
    <tr>
      <td>Explain how to test the Reverse Power Trip.</td>
      <td>At sea: Run 2 generators in parallel. Reduce governor of test generator until kW drops to 0 and goes negative (5–15%). ACB should trip within 3–5 s.<br>In Drydock: Rack ACB to test. Inject 180° phase-shifted current via secondary injection test set - simulate reverse power and verify relay trips at calibrated setpoint.</td>
    </tr>
    <tr>
      <td>What is the UVT coil and how does it work?</td>
      <td>The Under-Voltage Trip is a continuous-duty holding coil powered by generator voltage. It holds the ACB latch closed. If voltage falls below 70–80%, magnetic force drops, spring releases, ACB trips. Safety switches open the UVT circuit to trip the ACB. Unlike a shunt trip, UVT is fail-safe - it trips on loss of voltage, so it works even during a dead-bus blackout.</td>
    </tr>
    <tr>
      <td>How do you test the overspeed trip on the Main Engine vs DG?</td>
      <td>For DG: Manually increase governor speed on no-load until centrifugal trip activates at 10–15% above rated RPM. Record actual trip RPM.<br>For ME: Do NOT physically overspeed. Use EMS built-in electronic simulation test to verify fuel shut-off and alarms at ECR/Bridge.</td>
    </tr>
    <tr>
      <td>How do you demonstrate to the surveyor that a battery is fully charged and holding charge?</td>
      <td>Switch off the charger. Observe terminal voltage - it will dip momentarily (surface charge dissipates), then hold steady at the open-circuit voltage. For lead-acid: ~12.6 V (6-cell) fully charged. If voltage drops steadily after charger is removed, the battery is not holding charge and needs capacity testing or renewal.</td>
    </tr>
    <tr>
      <td>How do you test the navigation lights for survey?</td>
      <td>Pull the supply fuse to one nav light position - the indicator alarm and buzzer on the bridge panel must activate. Restore fuse, verify alarm clears. Test changeover switch - spare lamp must illuminate. Test ESB supply changeover. Record all positions in the Navigational Light Record Book which is signed by the surveyor.</td>
    </tr>
    <tr>
      <td>What is a drop test (millivolt-drop test)?</td>
      <td>A contact resistance test on busbar joints or ACB main contacts. Pass rated current through the joint and measure millivolt drop with a digital millivoltmeter. Calculate R = V/I. High resistance indicates loose or oxidised joint needing re-torque or replacement. Acceptance: typically &lt;50–100 µΩ per connection.</td>
    </tr>
    <tr>
      <td>What documents do you present at an electrical survey?</td>
      <td>SEC and SCC, IAPP certificate, GMDSS Radio Station Licence, VDR Annual Performance Test Certificate, PMS records (IR test logs, battery logs, ACB maintenance records), single-line diagram, MSB arrangement drawing.</td>
    </tr>
    <tr>
      <td>What are the electrical checks on a deck crane during class survey?</td>
      <td>Motor IR test (≥1 MΩ), over-travel and lower limit switch function test, overload test at 1.1 × SWL, thermal OL relay setting check, LOTO point verification, anti-collision system (if fitted). Crane Register and proof load certificate must be available for surveyor.</td>
    </tr>
  </table>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is your daily routine as an ETO? Walk me through a typical day. (All surveyors)</strong><br><strong>Ideal Answer:</strong> A typical ETO daily routine (while at sea):<br>
<strong>Morning rounds (after breakfast, ~0800–0900):</strong><br>
1. <span class="n-val">Engine room electrical check:</span> Inspect switchboard (MSB) - check all ammeters, voltmeters, frequency meters for abnormal readings. Verify synchroscope is OFF, bus tie breaker status, governor loading. Log generator running hours.<br>
2. <span class="n-val">Battery and UPS check:</span> Check emergency battery charger current/voltage, UPS output voltage, battery room ventilation and temperature.<br>
3. <span class="n-val">Machinery checks:</span> Check motor starters for any tripped overloads. Reset any that have tripped (after investigation). Check cooling water flow on HV motors (if applicable).<br>
4. <span class="n-val">Bridge/navigation equipment check:</span> Confirm all navigation lights operational, radar on standby, GMDSS equipment battery test log, AIS transmitting, NAVTEX printing.<br>
5. <span class="n-val">Fire detection system:</span> Check fire detection panel - all zones normal, no inhibited zones, printer log current.<br>
6. <span class="n-val">Engine control room:</span> Check IAS/alarm system - all alarms acknowledged and cleared, no outstanding inhibits.<br>
<strong>Throughout the day:</strong> Attend planned maintenance (PPM), respond to electrical faults/breakdowns, update equipment logbooks and maintenance records in PMS (Planned Maintenance System).<br>
<strong>Evening:</strong> Final MSB walkround before handover to duty officer, confirm emergency generator tested (weekly), update night orders if any electrical maintenance ongoing.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What do you do on a Saturday as ETO - what is the Saturday routine? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Saturday is the conventional day for regulatory and emergency equipment checks at sea. ETO Saturday routine includes:<br>
<strong>1. Emergency Generator Test:</strong> Run the emergency generator under load for at least <span class="n-val">30 minutes</span>. Verify automatic start (simulate blackout or manually trip the main switchboard). Check voltage, frequency, oil pressure, cooling temp. Log in Engine Room Log Book.<br>
<strong>2. Emergency Lighting Test:</strong> Simulate shore power/main power failure - verify all emergency lights illuminate, muster station lighting, escape route lighting, and accommodation emergency lighting activate automatically. Check battery backup duration is adequate.<br>
<strong>3. GMDSS Battery Test:</strong> Test EPIRB (manual test only - do NOT activate), SART, portable VHF radios. Confirm charge status, replace batteries if service interval due. Log in GMDSS log.<br>
<strong>4. Fire Alarm Weekly Test:</strong> Test at least one smoke/heat detector zone manually. Verify control panel response, sounders activate, and zone is correctly identified. Rotate which zone is tested each week.<br>
<strong>5. General Alarm Test:</strong> Sound general alarm (brief test, not full muster unless scheduled) - verify all bells and PA sounders functioning throughout the ship.<br>
<strong>6. Navigation Lights Test:</strong> Test all navigation lights including spares. Confirm all positions (masthead, stern, port, starboard, anchor) are operational and recorded in the Navigational Light Record.<br>
<strong>7. Watertight door testing (if ETO responsibility):</strong> Test remote close of watertight doors from bridge and locally - confirm alarm sounds, doors close in &lt;60 seconds, and open/close indicator lights function.<br>
All tests must be recorded in the <span class="n-val">Deck/Engine Log Book</span> with surveyor signature if required. These form part of the SMS (Safety Management System) documented evidence.</div></div>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>ACB Overcurrent Test</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Secondary injection, 150/200/600% rated current, IDMT curve, rack to TEST position first.</td>
    </tr>
    <tr>
      <td>Dead Front Panel</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td>
      <td>No live parts accessible from front, <span class="n-val">2000 V</span> test for 440 V AC, interlocks prevent opening while live.</td>
    </tr>
    <tr>
      <td>UVT Coil</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Mumbai</td>
      <td>Continuous holding coil, trips at 70–80% voltage, fail-safe (trips on loss of power, unlike shunt trip).</td>
    </tr>
    <tr>
      <td>Reverse Power Trip</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>Prevents motoring, 5–15% reverse kW (diesel), test by governor reduction at sea or 180° injection drydock.</td>
    </tr>
    <tr>
      <td>Shore Power Drydock</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Mumbai</td>
      <td>Phase sequence check, generators isolated + LOTO, ICCP OFF, Castell key interlock.</td>
    </tr>
    <tr>
      <td>Battery Charge-Holding Demo</td>
      <td class="hl">⭐⭐⭐⭐ All Surveyors</td>
      <td>Switch off charger → voltage dips momentarily then holds steady = battery good. Drops steadily = failed battery.</td>
    </tr>
    <tr>
      <td>Battery Capacity Test</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Discharge at C10 rate to cut-off voltage. Actual Ah ≥80% rated = PASS. Lead-acid cut-off: 1.75 V/cell.</td>
    </tr>
    <tr>
      <td>Navigation Light Survey</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Sanjib</td>
      <td>Fuse-pull test → alarm activates. Changeover to spare. ESB supply confirmed. Nav Light Record signed by surveyor.</td>
    </tr>
    <tr>
      <td>Crane / Elevator Survey</td>
      <td class="hl">⭐⭐⭐ Sanjib, Deswal</td>
      <td>Crane: limit switches, SWL marking, 1.1× proof load, motor IR. Elevator: door interlocks, buffer test, emergency lighting, overspeed governor.</td>
    </tr>
    <tr>
      <td>Emergency Fire Pump Test</td>
      <td class="hl">⭐⭐⭐ Mumbai, Kamath</td>
      <td>Annual SOLAS test, ESB supply, local+remote start test, two-jet delivery at required pressure.</td>
    </tr>
    <tr>
      <td>Drop Test (Millivolt-Drop)</td>
      <td class="hl">⭐⭐⭐ Deswal, Sanjib</td>
      <td>Pass rated current through joint → measure mV drop → R = V/I. High R = loose/oxidised joint. Action: re-torque or replace.</td>
    </tr>
    <tr>
      <td>ACB Isolation Procedure</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Inform → Transfer load → Open ACB → Rack out → LOTO → Verify zero V → Discharge spring.</td>
    </tr>
    <tr>
      <td>Survey Documents</td>
      <td class="hl">⭐⭐⭐⭐ All Surveyors</td>
      <td>SEC · SCC · IAPP · GMDSS licence · VDR cert · PMS records · Single-line diagram.</td>
    </tr>
    <tr>
      <td>Overspeed Trip - DG vs ME</td>
      <td class="hl">⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>DG: mechanical centrifugal test at 10–15% above rated RPM (no-load). ME: EMS simulation only - NEVER physically overspeed.</td>
    </tr>
  </table>

      </div>
</div>
</div>
`);
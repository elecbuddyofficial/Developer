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
    <button class="anc-btn" onclick="jumpTo('s-preparation')">Preparation & Docs</button>
    <button class="anc-btn" onclick="jumpTo('s-msb')">MSB Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-acb')">ACB Trips & UVT</button>
    <button class="anc-btn" onclick="jumpTo('s-overspeed')">Overspeed Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-rpr')">Reverse Power Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-mechecks')">Main Engine Checks</button>
    <button class="anc-btn" onclick="jumpTo('s-shoresupply')">Drydock Shore Supply</button>
    <button class="anc-btn" onclick="jumpTo('s-ism')">ISM &amp; SMS</button>
    <button class="anc-btn" onclick="jumpTo('s-ptw')">Permit to Work</button>
    <button class="anc-btn" onclick="jumpTo('s-survey')">Survey Checks</button>
    <button class="anc-btn" onclick="jumpTo('s-shore-sync')">Shore Sync</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Dead front panel exact definition. ACB isolation procedure and secondary injection test. UVT coil function. Reverse power trip test at sea vs shore. Documents for survey.</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-surveytypes">1. Survey Types - Annual, Intermediate, Special & Continuous</div>
  
  <ul class="n-list">
    <li><strong>Annual Survey:</strong> Every 12 months (±3 mo). Visual inspection, check certificates, test emg gen, nav lights, fire detection.</li>
    <li><strong>Intermediate Survey:</strong> Every 2.5 years. More detailed, spot checks of MSB insulation, relay tests, battery condition.</li>
    <li><strong>Special Survey (Class Renewal):</strong> Every 5 years (drydock). Full scope: all ACB tests (secondary injection), generator tests, IR of all motors/cables, MSB torque checks.</li>
    <li><strong>Continuous Survey (CMS):</strong> Rolling programme (20% per year). Replaces Special Survey by spreading work over 5 years.</li>
    <li><strong>Safety Equipment Survey:</strong> Part of statutory SOLAS survey (SEC). Covers GMDSS, EPIRB, SART, fire detection, emergency lighting, lifeboat electrics.</li>
  </ul>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-preparation">2. Complete Electrical Survey - Preparation & Documents</div>
  
  <div class="n-p">The surveyor requires specific documents to verify compliance before physical testing.</div>
  
  <table class="n-table">
    <tr><th>DOCUMENT CATEGORY</th><th>SPECIFIC ITEMS</th></tr>
    <tr><td><strong>Certificates</strong></td><td>SEC, SCC, IAPP (with ODS Record Book), Class Electrical Cert, GMDSS Licence, VDR Annual Cert.</td></tr>
    <tr><td><strong>Records (PMS)</strong></td><td>IR test records (with temp correction), battery logs, emergency gen log (monthly starts + annual blackout), fire detection test log, nav lights test log, ACB maintenance records.</td></tr>
    <tr><td><strong>Drawings & Data</strong></td><td>Single-line diagram, MSB arrangement drawing, load analysis, NOx Technical File (main engine).</td></tr>
  </table>

  <div class="n-h2">High-Voltage Minimum Acceptable IR Evaluation</div>
  <p class="n-p">While a standard 440V distribution line utilizes a fixed floor limit of 1 MΩ, high-voltage marine installations require dynamic insulation baselines solved using the class engineering formula:</p>
  <div class="n-formula">Minimum IR (MΩ) = Rated System Voltage (kV) + 1<div class="label">Class-mandated lower limit insulation resistance formula for High Voltage machinery</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Practical Field Examples:</strong><br>
  For a <strong>3.3 kV system</strong>: Minimum IR = 3.3 + 1 = <span class="n-val">4.3 MΩ</span><br>
  For a <strong>6.6 kV system</strong>: Minimum IR = 6.6 + 1 = <span class="n-val">7.6 MΩ</span><br>
  Any asset logging below these mathematical margins fails survey and must remain locked out. New or recently rewound machinery must easily exceed <span class="n-val">100 MΩ</span>.</div></div>

  
  <div class="n-p"><strong>Physical Checks by Surveyor:</strong> MSB Busbar IR (<span class="n-val">500V</span> DC megger), Busbar Torque check, ACB secondary injection (OCR), Reverse Power Trip, UVT, Emergency Gen Blackout (auto-start in ≤45s), Voltage Regulation (load throw-on, recover in ≤1.5s), Preferential Trip Sequence, Navigational Lights, Fire Detection Zones, Steering gear times.</div>


  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-msb">3. MSB Survey - Dead Front Panel & MSB Safeties</div>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Dead Front Panel Definition:</strong> A switchboard where no live conductors or busbars are accessible from the front during normal operation. Operating handles and buttons are exposed, but all live parts are behind insulated barriers. You CANNOT open the panel to access live parts without isolating the circuit (interlock). <br><strong>Voltage limits:</strong> For <span class="n-val">440V</span> AC, front face tested to withstand <span class="n-val">2000V</span>. For DC, anything > <span class="n-val">50V</span> requires dead front construction.</div></div>

  <div class="n-h2">High-Potential (Hi-Pot) Switchboard Testing Metrics</div>
  <p class="n-p">During manufacturing type-testing or major drydock switchboard overhauls, surveyors mandate a high-potential (Hi-Pot) dielectric strength validation to ensure the structural busbar insulation can withstand transient spikes without flashover. The applied AC test voltage follows a strict regulatory equation:</p>
  <div class="n-formula">V_test = (2 × V_rated) + 1000 V AC<div class="label">Dielectric strength withstand test voltage formula - maintained for 1 minute</div></div>
  <p class="n-p"><strong>Standard 440V Shipboard Allocation:</strong> Applying the equation yields V_test = (2 × 440) + 1000 = <span class="n-val">1880 V AC</span>, normalized in field practice to a round <span class="n-val">2000 V AC for exactly 1 minute</span> between all distinct phase bars and the hull earth frame. For HV 6.6 kV installations, the test field scales up to <span class="n-val">14,200 V AC</span>. Prior to firing a Hi-Pot test, all sensitive electronics, control transformers, and PLC monitor links must be fully isolated to prevent instantaneous semiconductor rupture.</p>

  
  <div class="n-h2">MSB Safeties (Complete List)</div>
  <ul class="n-list">
    <li><strong>Dead Front Construction:</strong> Insulated front, no live metal exposed.</li>
    <li><strong>Rubber Insulating Mat:</strong> Runs full length. Rated for system voltage (e.g. Class 2, 17kV for <span class="n-val">440V</span>).</li>
    <li><strong>0.6m Minimum Clearance:</strong> Clear working space in front (SOLAS requirement).</li>
    <li><strong>Earth Fault Indicator:</strong> Insulation monitor triggers alarm on first earth fault (insulated neutral system).</li>
    <li><strong>Hull Earthing Cable:</strong> MSB frame bonded to ship's hull.</li>
    <li><strong>Bus Tie Interlock:</strong> Prevents unsynchronized closing of bus sections.</li>
    <li><strong>Barriers & Ventilation:</strong> End gates/barriers, adequate MSB room ventilation, fixed fire detector.</li>
  </ul>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-acb">4. ACB Survey - Trip Tests, UVT Coil & Isolation</div>
  
  <table class="n-table">
    <tr><th>ACB TRIP</th><th>WORKING & TEST METHOD</th></tr>
    <tr><td><strong>Overcurrent (OCR)</strong></td><td>IDMT relay. <strong>Test:</strong> Secondary injection. Rack ACB to TEST. Inject 150%, 200%, 600% rated current via CT secondary. Compare trip time to curve.</td></tr>
    <tr><td><strong>Reverse Power (RPR)</strong></td><td>Wattmetric relay prevents motoring (5-15% rated KW). <strong>Test (Sea):</strong> Reduce governor until KW goes negative. <strong>Test (Shore):</strong> Inject phase-shifted signals to simulate reverse power.</td></tr>
    <tr><td><strong>Under-Voltage (UVT)</strong></td><td>Continuous-duty holding coil. <strong>Test:</strong> Reduce coil supply voltage (Variac) until ACB trips (70-80% rated).</td></tr>
    <tr><td><strong>Over-Voltage (OVT)</strong></td><td>110-115% rated. <strong>Test:</strong> Use AVR trimmer to raise voltage until trip.</td></tr>
    <tr><td><strong>Under-Frequency</strong></td><td>95% rated (<span class="n-val">57Hz</span>). <strong>Test:</strong> Reduce governor speed.</td></tr>
  </table>

  <div class="n-h2">Undervoltage Release (UVR) Mechanical Coil Physics</div>
  <p class="n-p">The under-voltage protection inside a main Air Circuit Breaker (ACB) functions via a dedicated <strong>continuous-duty holding coil</strong> linked directly across the supply control bus. This mechanism serves as a critical mechanical fail-safe:</p>
  <ul class="n-list">
    <li><strong>The Holding Latency:</strong> As long as network voltage stays healthy, the continuous coil remains energized, generating an electromagnetic pulling force that counteracts internal mechanical springs to allow the main ACB contacts to latch closed.</li>
    <li><strong>The Drop-Out Boundary:</strong> If system distribution levels collapse below <span class="n-val">70–80% of rated voltage</span>, the magnetic flux drops until the internal springs instantly overcome the coil's pull. This physically slams the ACB open, preventing high current induction damage across downstream motor loads.</li>
    <li><strong>Interlock Safety Functions:</strong> Opening the continuous power supply line to the UVR coil via emergency stop buttons or generator protection locks executes an <strong>instantaneous emergency breaker trip</strong>. This makes the UVR superior to a standard shunt trip coil, which requires active power to execute a trip and would fail completely during a total dead-bus blackout.</li>
  </ul>

  <div class="n-h2">Drydock Reverse Power Relay (RPR) Calibration Protocol</div>
  <p class="n-p">While an RPR is easily tested at sea by throttling down a generator's governor speed reference until it absorbs active power from the busbar, verifying the relay inside a shipyard drydock requires a specialized secondary injection test set:</p>
  <ol class="n-steps">
    <li>Isolate and rack out the generator's ACB to the test position, and isolate the secondary control line voltage transformers.</li>
    <li>Connect a three-phase secondary injection relay test kit directly to the voltage and current sensing input terminals at the rear of the RPR panel.</li>
    <li>Inject a nominal reference 3-phase voltage wave (e.g., 110V AC) matching normal operational baselines.</li>
    <li><strong>The Phase-Shift Injection Trick:</strong> Adjust the test set to inject a current wave shifted exactly <span class="n-val">180° out of phase (cosφ = −1)</span> relative to the voltage wave. This phase reversal forces the internal directional wattmetric element to read the power vector as negative.</li>
    <li>Gradually scale up the injected current amplitude until it crosses the programmed trip setpoint threshold (typically <span class="n-val">5–15% of rated current</span> for diesel units).</li>
    <li>Start a stopwatch the instant the current threshold is crossed. Verify the relay output contacts snap closed to close the ACB trip loop within <span class="n-val">3 to 5 seconds</span>. Document the precise settings, measured currents, and delay times for class registration.</li>
  </ol>

  
  <div class="n-h2">UVT Coil Details</div>
  <div class="n-p">The Under-Voltage Trip (UVT) coil is a <strong>continuous-duty electromagnetic holding coil</strong> powered by generator voltage. It maintains a latch holding the ACB closed. If voltage falls below 70-80%, the coil's magnetic force weakens, the latch releases, and the ACB trips. <br><strong>Safety Function:</strong> The ACB manual safety trip switch simply opens the supply to this coil, instantly tripping the ACB.</div>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-overspeed">5. Overspeed Trip Test - DG and Main Engine</div>
  
  <ul class="n-list">
    <li><strong>Diesel Generator (DG):</strong> Tested manually. With DG on no-load, slowly increase governor speed setpoint above rated RPM. The mechanical centrifugal fly-weight activates at <strong>10–15% above rated speed</strong>, cutting fuel. Record actual trip RPM.</li>
    <li><strong>Main Engine (ME):</strong> NEVER physically overspeed the ME in normal operation. Tested using the <strong>Electronic Engine Management System (EMS)</strong> overspeed simulation test function. Verify fuel shut-off activates and alarms sound at ECR/Bridge. (Mechanical test only done during sea trials or uncoupled in drydock).</li>
  </ul>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-rpr">6. Reverse Power Trip - Construction & Working</div>
  
  <div class="n-p"><strong>Purpose:</strong> Protects the prime mover from being "motored" by the busbars if fuel supply fails while ACB is closed. If motored, the engine spins without combustion, causing thermal/mechanical damage.</div>
  <div class="n-p"><strong>Construction:</strong> Directional power (watt-metric) relay uses CT (current) and VT (voltage) inputs. Compares phase angles. If current phase reverses (indicating power flowing INTO generator), relay trips after a small time delay (1-5s to prevent nuisance trips during synchronisation).</div>
  <div class="n-p"><strong>Setting:</strong> 5–15% of rated KW in reverse direction.</div>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-mechecks">7. Main Engine Checks During Electrical Survey</div>
  
  <ul class="n-list">
    <li><strong>NOx Technical File:</strong> Presented to verify MARPOL Annex VI Tier compliance.</li>
    <li><strong>Automation Tests:</strong> Records of ME safety trips (overspeed, bearing temp, LO pressure, jacket water temp).</li>
    <li><strong>Speed/Tachometer Calibration:</strong> RPM indicator accuracy checks.</li>
    <li><strong>Governor Tests:</strong> Droop settings and load step response records.</li>
    <li><strong>Telegraph System:</strong> Bridge and ECR telegraph agreement tests.</li>
    <li><strong>Shaft Earthing:</strong> Inspect shaft earthing brush and measure resistance (< <span class="n-val">1 Ω</span>).</li>
  </ul>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-shoresupply">8. Emergency Shore Supply During Drydock</div>
  
  <div class="n-p"><strong>Connecting Shore Power Procedure:</strong></div>
  <ul class="n-list">
    <li><strong>Match Parameters:</strong> Verify shore voltage and frequency match the ship (<span class="n-val">440V</span>, <span class="n-val">60Hz</span>). If not, use transformer/frequency converter.</li>
    <li><strong>Phase Sequence:</strong> Use a phase sequence meter to ensure R-Y-B matches. Incorrect sequence runs 3-phase motors backwards.</li>
    <li><strong>Isolate Ship Power:</strong> Ensure main generator ACBs are OPEN. Lockout generator MCCBs. Turn OFF the ICCP system. Ensure Emg Gen is on manual standby.</li>
    <li><strong>Connect:</strong> Connect heavy duty shore cable to shore connection box. Close shore breaker progressively on low load.</li>
    <li><strong>Earth:</strong> Connect shore earth using a galvanic isolator to prevent stray current corrosion. Log the connection.</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s-ism">📋 ISM Code &amp; SMS</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask ISM Code certificates and ETO duties under SMS.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ISM Code (SOLAS Ch IX):</strong> International Safety Management Code. Establishes a Safety Management System (SMS) for safety and pollution prevention. <strong>DOC</strong> (Document of Compliance) issued to the COMPANY - valid <span class="n-val">5 years</span> with annual verification. <strong>SMC</strong> (Safety Management Certificate) issued to the SHIP - valid <span class="n-val">5 years</span> with intermediate verification at <span class="n-val">2.5 years</span>. <strong>DPA</strong> (Designated Person Ashore) = direct link between ship and highest management.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Major Non-Conformity (MNC):</strong> Immediate threat to safety or environment - SUSPENDS ship's certification. Ship cannot trade until MNC is closed. Examples: non-functional fire detection, expired GMDSS certificates, no emergency generator auto-start.</div></div>
  <div class="n-h2">ETO SMS Duties</div>
  <ul class="n-list">
    <li>Execute and record all PMS (Planned Maintenance System) tasks on time</li>
    <li>Defect reporting to Chief Engineer - log all deficiencies in SMS</li>
    <li>Near-miss and incident reporting - even if no injury/damage</li>
    <li>Issue and receive Permits to Work (PTW) - Electrical Isolation Permit (EIP)</li>
    <li>Maintain GMDSS logbook and test records</li>
    <li>Ensure all surveys and certificates are current and presented correctly</li>
  </ul>

  <div class="n-h1" id="s-ptw">🔐 Permit to Work (PTW) System</div>
  <table class="n-table">
    <tr><th>Permit Type</th><th>Required For</th><th>Key Requirement</th></tr>
    <tr><td><strong>Electrical Isolation Permit (EIP)</strong></td><td>Any electrical maintenance on live or isolated equipment</td><td class="hl">LOTO (Lock Out Tag Out) + test de-energised before work begins</td></tr>
    <tr><td><strong>Hot Work Permit</strong></td><td>Welding, cutting, grinding near flammable materials</td><td class="hl">Gas-free certificate + fire watch + CO2 ready</td></tr>
    <tr><td><strong>Enclosed Space Entry</strong></td><td>Entry to any enclosed space (pump rooms, tanks, voids)</td><td class="hl">Gas tests (O2 &gt;20.9%, toxic gases &lt; TLV) + standby person</td></tr>
    <tr><td><strong>Working at Height</strong></td><td>Work above <span class="n-val">2 metres</span></td><td class="hl">Harness + fall arrest + safety observer</td></tr>
    <tr><td><strong>Isolation of Safety Systems</strong></td><td>Disabling smoke detectors, sprinklers during maintenance</td><td class="hl">Chief Engineer approval + fire watch in affected area</td></tr>
  </table>

  <div class="n-h1" id="s-survey">🔍 Electrical Survey - What Surveyors Check</div>
  <div class="n-h2">Documents to Present</div>
  <ul class="n-list">
    <li>Safety Equipment Certificate (SEC) and Safety Construction Certificate (SCC)</li>
    <li>IAPP Certificate (MARPOL air pollution compliance)</li>
    <li>GMDSS Radio Station Licence + test records</li>
    <li>VDR Annual Performance Test Certificate</li>
    <li>PMS maintenance records (IR tests, battery logs, ACB maintenance)</li>
    <li>MSB single-line diagram and approved drawings</li>
  </ul>
  <div class="n-h2">Physical Tests Conducted at Survey</div>
  <table class="n-table">
    <tr><th>Test</th><th>Method</th><th>Acceptance</th></tr>
    <tr><td>MSB Busbar IR</td><td><span class="n-val">500V DC</span> megger, all ACBs open</td><td class="hl">Min <span class="n-val">1 MΩ</span></td></tr>
    <tr><td>ACB Overcurrent Trip</td><td>Secondary injection at <span class="n-val">150%, 200%, 600%</span> rated</td><td class="hl">Trip times match IDMT curve</td></tr>
    <tr><td>Reverse Power Relay</td><td>Injection test or governor reduction at sea</td><td class="hl">Trips at <span class="n-val">5–15%</span> rated kW</td></tr>
    <tr><td>Under-Voltage Trip (UVT)</td><td>Reduce supply to shunt coil</td><td class="hl">Trips at <span class="n-val">70–80%</span> rated voltage</td></tr>
    <tr><td>Emergency DG Blackout Test</td><td>Simulate main power failure</td><td class="hl">Auto-starts and supplies ESB within <span class="n-val">45 seconds</span></td></tr>
    <tr><td>Steering gear timing</td><td>Hard over to hard over</td><td class="hl">Within <span class="n-val">28 seconds</span> at max speed</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> ISM = DOC (company 5yr) + SMC (ship 5yr). PTW types: EIP, Hot Work, Enclosed Space, Height, Safety System Isolation. Survey documents: SEC + SCC + GMDSS licence + VDR certificate + PMS records.</div></div>


  <div class="n-h1" id="s-shore-sync">🔌 Shore Power - Phase-Sequence &amp; Trapped-Key Safeties</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Anil Deswal drill candidates on shore connection safety sequences and phase rotation hazards.</strong></div></div>

  <div class="n-h2">Phase-Sequence Indicator Verification Loop</div>
  <p class="n-p">Before closing the shore connection breaker to power the ship's switchboard from a shipyard terminal, the ETO must verify that the incoming shore lines match the vessel's internal <strong>clockwise phase rotation sequence (L1-L2-L3 / R-Y-B)</strong>. Connecting lines with a reversed phase rotation will instantly force all 3-phase auxiliary machinery motors (engine room ventilation fans, sea water cooling pumps, steering motors) to spin backwards on startup, causing immediate mechanical damage and loss of cooling.</p>
  <p class="n-p">The ETO validates rotation using a bridge-rectified rotative <strong>Phase Sequence Indicator</strong> or a digital synchroscope linked to the shore box tapping. If the indicator flags a reversed rotation state, the main breaker must remain locked out; the ETO must isolate the terminal box and manually swap any two incoming shore-side phase cable connections to restore standard clockwise orientation.</p>

  <div class="n-h2">Trapped-Key (Castell Key) Interlock Circuits</div>
  <p class="n-p">Because the ship's on-board generators utilize a floating neutral network (IT system) while shore-side terminal grids are solidly tied to earth (TN-S layout), <strong>under no circumstances are a ship generator and a shore line permitted to run in parallel</strong>. Paralleling them passes high earth loop currents that throw false insulation alarms and strip hull plates via accelerated galvanic corrosion.</p>
  <p class="n-p">To enforce this safety rule, a physical <strong>Trapped-Key (Castell Key) interlocking mechanism</strong> is installed between the ship's generator breakers and the shore reception breaker:</p>
  <ul class="n-list">
    <li>To close the Shore Connection Breaker, you must first physically open all main generator ACBs and turn their mechanical interlocking keys.</li>
    <li>Turning the key locks the generator ACB open and frees the key from the lock cylinder.</li>
    <li>Take the isolated key to the Shore Supply cubicle and insert it into the receiver lock. Only when this specific key is inserted and turned will the shore breaker's mechanical closing latch release. This hardware loop completely prevents accidental out-of-phase paralleling.</li>
  </ul>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is a dead front panel?</td>
      <td>A panel where no live conductors are accessible from the front during normal operation. You interact only with insulated controls. It has interlocks preventing opening while live. For <span class="n-val">440V</span> AC, the front face withstands a <span class="n-val">2000V</span> test.</td>
    </tr>
    <tr>
      <td>How do you isolate an ACB for maintenance?</td>
      <td>Inform Bridge/CE. Transfer load, open ACB, stop engine. Rack out ACB to TEST or WITHDRAWN position. Apply Lock-Out/Tag-Out (LOTO). Verify zero voltage with tester. Discharge closing spring energy safely.</td>
    </tr>
    <tr>
      <td>Explain how to test the Reverse Power Trip.</td>
      <td>At sea: Run 2 generators in parallel. Reduce governor of test generator until KW drops to 0 and goes negative (5-15%). ACB should trip. <br>In Drydock: Rack ACB to test. Inject phase-shifted current/voltage via secondary injection test set to simulate reverse power.</td>
    </tr>
    <tr>
      <td>What is the UVT coil and how does it work?</td>
      <td>The Under-Voltage Trip is a continuous-duty holding coil powered by generator voltage. It holds the ACB latch closed. If voltage falls below 70-80%, magnetic force drops, spring releases, and ACB trips. Safety switches open the UVT circuit to trip the ACB.</td>
    </tr>
    <tr>
      <td>How do you test the overspeed trip on the Main Engine vs DG?</td>
      <td>For DG: Manually increase governor speed until centrifugal trip activates at 10-15% above rated RPM. <br>For ME: Do not physically overspeed. Use EMS built-in electronic simulation test to verify fuel shut-off and alarms.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>ACB Overcurrent Test</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Secondary injection, 150/200/600%, IDMT curve.</td>
    </tr>
    <tr>
      <td>Dead Front Panel</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td>
      <td>No live parts in front, <span class="n-val">2000V</span> test for AC, SELV for DC.</td>
    </tr>
    <tr>
      <td>UVT Coil</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Mumbai</td>
      <td>Continuous holding coil, trips at 70-80% voltage.</td>
    </tr>
    <tr>
      <td>Reverse Power Trip</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Deswal</td>
      <td>Prevents motoring, 5-15% reverse KW, test by governor reduction.</td>
    </tr>
    <tr>
      <td>Shore Power Drydock</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Mumbai</td>
      <td>Phase sequence check, generators isolated, ICCP OFF.</td>
    </tr>
  </table>

      </div>
</div>
</div>
`);

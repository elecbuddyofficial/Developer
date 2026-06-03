window.loadNotes("T04", `<div class="view" id="view-notes-t04">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 04 - Switchboard & Circuit Breakers</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">ACB & Protection</span>
      <span class="tag tag-purple">Emergency Generator</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-acb-ratings')">ACB Working</button>
    <button class="anc-btn" onclick="jumpTo('s-ocr-detail')">Protection Relays</button>
    <button class="anc-btn" onclick="jumpTo('s-btb-detail')">Bus Tie & MCC</button>
    <button class="anc-btn" onclick="jumpTo('s-emerg-autostart')">Emergency Gen</button>
    <button class="anc-btn" onclick="jumpTo('s-emerg-autostart')">Sequential Load</button>
    <button class="anc-btn" onclick="jumpTo('s-battery-sg')">Batteries</button>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-survey')">Shore Connection</button>
    <button class="anc-btn" onclick="jumpTo('s-pref-detail')">Preferential Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-survey')">MSB Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s-ups">🔌 UPS - Uninterruptible Power Supply</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Nair ask UPS working and bypass switch.</strong></div></div>
  <table class="n-table">
    <tr><th>Type</th><th>How It Works</th><th>Switchover</th></tr>
    <tr><td><strong>Online (Double Conversion)</strong></td><td class="ok">AC → Rectifier → DC bus (batteries) → Inverter → AC output. Load ALWAYS through inverter.</td><td class="ok"><span class="n-val">ZERO</span></td></tr>
    <tr><td><strong>Offline (Standby)</strong></td><td>Load from mains normally. On failure: switches to inverter/battery.</td><td class="hl"><span class="n-val">4–12 ms</span></td></tr>
    <tr><td><strong>Line Interactive</strong></td><td>Auto-transformer handles voltage variations. Battery for failure.</td><td class="hl"><span class="n-val">2–4 ms</span></td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ship UPS supplies:</strong> ECDIS, GMDSS, IAS/SCADA, fire alarm panel, bridge navigation (AIS, BNWAS, SSAS), alarm monitoring (must not lose memory on power loss).</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Bypass switch:</strong> Static bypass (thyristor, automatic) - transfers to direct mains on UPS fault, no interruption. Maintenance bypass (manual) - isolates UPS for servicing while load continues from mains.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Online = always through inverter = zero switchover. Offline = switches on failure = small gap. GMDSS needs UPS for continuous comms. Static bypass = automatic. Maintenance bypass = manual, for servicing.</div></div>


  <!-- ═══ T04 GAPS ADDED FROM DOCX VERIFICATION ═══ -->

  <div class="n-h1" id="s-battery-sg">🔋 Battery SG Thresholds &amp; Testing Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask SG values and battery testing procedure.</strong> Know all thresholds and the 5-step maintenance routine.</div></div>
  <div class="n-h2">Specific Gravity (SG) Hydrometer Thresholds - Lead-Acid</div>
  <table class="n-table">
    <tr><th>State of Charge</th><th>SG Reading</th><th>Action</th></tr>
    <tr><td>Fully charged</td><td class="ok"><span class="n-val">1.280–1.300</span></td><td class="ok">Normal - no action</td></tr>
    <tr><td>Half charged</td><td class="hl"><span class="n-val">~1.200</span></td><td class="hl">Recharge soon</td></tr>
    <tr><td>Fully discharged</td><td class="bad"><span class="n-val">1.100–1.120</span></td><td class="bad">Recharge immediately - risk of sulphation if left discharged</td></tr>
    <tr><td>Inter-cell variation</td><td class="bad">&gt;<span class="n-val">0.050</span> difference between cells</td><td class="bad">Cell fault - that cell has sulphation or internal short - investigate</td></tr>
  </table>
  <div class="n-h2">5-Step Battery Maintenance Procedure</div>
  <ol class="n-steps">
    <li>Check electrolyte level - must cover plates by <span class="n-val">10–15 mm</span>. Top up with distilled water ONLY (not acid).</li>
    <li>Check SG of each cell with a hydrometer. Record all readings. Flag any cell with SG &gt;0.050 below average.</li>
    <li>Clean terminal posts - remove white sulphate deposits with wire brush, apply petroleum jelly to prevent corrosion.</li>
    <li>Check terminal torque - loose connections cause resistance heating and voltage drops.</li>
    <li>Equalising charge (if required): charge at higher voltage for extended period to bring all cells to full capacity and dissolve mild sulphation.</li>
  </ol>

  <div class="n-h1" id="s-pref-detail">⚖️ Preferential Trip - Stage Details &amp; Dashpot</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Wad ask preferential trip stages and dashpot working.</strong> Know both stages and the NEVER shed list.</div></div>
  <table class="n-table">
    <tr><th>Stage</th><th>Trigger</th><th>What Gets Shed</th><th>Delay</th></tr>
    <tr><td><strong>Stage 1</strong></td><td>Generator load reaches ~<span class="n-val">90%</span> rated</td><td>Galley ovens, water heaters, laundry (non-essential domestic loads)</td><td class="hl"><span class="n-val">5–10 seconds</span> dashpot delay</td></tr>
    <tr><td><strong>Stage 2</strong></td><td>Generator load reaches ~<span class="n-val">95%</span> rated</td><td>Accommodation ventilation, remaining non-essential HVAC, deck machinery not in use</td><td class="hl"><span class="n-val">Additional delay</span></td></tr>
    <tr><td class="bad"><strong>NEVER shed</strong></td><td> - </td><td class="bad">Navigation lights, steering gear, fire pump, bilge pump, GMDSS, emergency lighting, fire detection</td><td> - </td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dashpot mechanism (surveyor's favourite cross-question):</strong> The dashpot is a pneumatic or hydraulic time-delay device. Construction: a cylinder containing a piston connected to the relay contact. The piston moves through oil or air - the flow rate is controlled by a needle valve orifice. A narrow orifice = slow piston movement = longer delay. A wider orifice = faster piston = shorter delay. This delay allows motor starting surges (which are transient overloads) to pass without triggering load shedding. Only sustained overloads above the set level trigger the trip sequence. Modern alternative: electronic digital timer relay - digitally set, no mechanical wear, no oil leakage risk.</div></div>

  <div class="n-h1" id="s-pi-physics">📈 PI Test - Why 10 Minutes (3-Component Current)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask why we wait 10 minutes for a PI test.</strong> Know the three current components.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Three components of current during a DC insulation test:</strong><br>
  <strong>1. Capacitive current:</strong> Decays in seconds - the initial surge as the insulation capacitance charges. Falls to near-zero within 10–30 seconds. This component has nothing to do with insulation quality.<br>
  <strong>2. Absorption current (dielectric polarisation):</strong> Decays slowly over minutes - caused by molecular dipoles in the insulation material aligning to the applied electric field (dielectric polarisation). In good dry insulation, this is significant and takes ~10 minutes to decay. In wet/degraded insulation, this component is small (molecules already disordered by contamination).<br>
  <strong>3. True (conductive) leakage current:</strong> Constant - represents actual current flowing through the insulation resistance. This is what we want to measure - it reflects true insulation quality.<br>
  <strong>Why 10 minutes:</strong> At 1 minute, absorption current is still significant - IR reading is artificially low. By 10 minutes, absorption current has mostly decayed - reading approaches true leakage resistance. PI = IR(10min)/IR(1min) - a high ratio means the absorption component was large (good dry insulation), confirming healthy insulation.</div></div>

  <div class="n-h1" id="s-dielectric">⚡ Dielectric Strength - ACB vs VCB vs SF6</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why VCB and SF6 are used for HV, not ACB:</strong> Dielectric strength determines how well a medium resists electrical breakdown (arc formation) per unit distance.</div></div>
  <table class="n-table">
    <tr><th>Medium</th><th>Dielectric Strength</th><th>Implication</th></tr>
    <tr><td>Air (ACB)</td><td class="bad"><span class="n-val">2–3 kV/mm</span></td><td class="bad">Poor - needs large physical separation distances for HV. Air ionises easily under arc energy.</td></tr>
    <tr><td>Vacuum (VCB)</td><td class="ok"><span class="n-val">8–10 kV/mm</span></td><td class="ok">Excellent - vacuum is a perfect insulator. No gas molecules to ionise. Arc extinguishes at first current zero.</td></tr>
    <tr><td>SF6 gas (at 4 bar pressure)</td><td class="ok"><span class="n-val">~89 kV/mm</span></td><td class="ok">Exceptional - SF6 is electronegative (absorbs free electrons). At 4 bar pressure: 2.5× per atmosphere = ~30× air strength at pressure.</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why ACB is limited to LV systems:</strong> At 6.6 kV, the arc energy is roughly (6600/440)² = 225 times higher than at 440V. Air cannot quench this arc - it ionises and sustains, potentially exploding the breaker. VCB and SF6 are the only viable solutions at HV.</div></div>

  <div class="n-h1" id="s-msb-survey">🔍 MSB Survey Preparation - 14-Point Checklist</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Before a class society electrical survey, prepare the MSB thoroughly:</strong></div></div>
  <ol class="n-steps">
    <li>Strip dust and oxidation from all copper busbars - use fine emery cloth on contact surfaces</li>
    <li>Tighten all busbar connections to specified torque - loose connections = thermal hotspots = IR drop = class finding</li>
    <li>IR test all feeder circuits with ACBs open - minimum <span class="n-val">1 MΩ</span> to earth required for each circuit</li>
    <li>Check all cable gland sealing compounds - no cracking, proper seal against moisture and vermin</li>
    <li>Test synchroscope lamp synchronisation - all dark lamp method functioning correctly</li>
    <li>Verify rubber mats correct thickness in front and rear of MSB - <span class="n-val">6 mm minimum</span> for LV, <span class="n-val">12 mm</span> for HV</li>
    <li>Check earth bus connections - all equipment frames bonded to earth bar</li>
    <li>Verify ACB maintenance records are current - last test dates, trip times recorded</li>
    <li>Check OCR settings against approved load analysis document</li>
    <li>Test preferential trip sequence - verify stage timing and correct loads shed</li>
    <li>Verify emergency generator test records - last monthly auto-start test, last annual load test</li>
    <li>Check phase barriers between busbars intact - no cracks, secure mounting</li>
    <li>Verify all instruments (voltmeters, ammeters, power factor meters) calibrated and in tolerance</li>
    <li>Prepare all certificates and maintenance records for surveyor review</li>
  </ol>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points - answers are scored on specific content.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>How does fire panel differentiate short circuit (SC) from open circuit (OC) from actual fire? (All surveyors)</td>
      <td>Fire loop uses an EOL (End Of Line) resistor. Normal: fixed current flows (panel reads HEALTHY). Fire: detector activates, changing current (reads FIRE ALARM). Wire break (OC): zero current flows (reads FAULT). Wire short (SC): current bypasses EOL, resistance drops (reads SC FAULT). Three distinct current levels = three distinct states.</td>
    </tr>
    <tr>
      <td>Detail the ACB isolation procedure for maintenance. (Kamath)</td>
      <td>1. Obtain PTW. 2. Open ACB, visually confirm. 3. Rack out to ISOLATED position. 4. Apply LOTO on handle. 5. Test dead on BOTH sides with proved tester. 6. Apply earth clamps to bus side. 7. Post 'Men at Work' signs.</td>
    </tr>
    <tr>
      <td>What is a differential relay? How is it different from a fuse? (Sanjib)</td>
      <td>Differential compares current IN vs current OUT of a protected zone (generator/transformer). If IN ≠ OUT, there is an internal fault, and it trips instantly. A fuse only trips on overcurrent; a differential relay detects internal earth/winding faults even if the current is low, providing far greater sensitivity.</td>
    </tr>
  </table>

  <!-- ═══ QUICK REVISION ═══ -->

<div class="n-h1" id="s-acb-extra">1A. ACB RATINGS & ADDITIONAL DETAILS</div>
<div class="n-h2">ACB Ratings - Terminology</div>
<table class="n-table">
  <tr><th>Symbol</th><th>Name</th><th>Meaning</th></tr>
  <tr><td class="hl">In</td><td>Normal current rating</td><td>Continuous current the ACB can carry without overheating.</td></tr>
  <tr><td class="hl">Ics / Icu</td><td>Short circuit breaking capacity</td><td>Maximum fault current the ACB can interrupt safely.</td></tr>
  <tr><td class="hl">Ue</td><td>Rated operational voltage</td><td>Maximum voltage for normal operation (e.g. <span class="n-val">440V</span>).</td></tr>
  <tr><td class="hl">Ui</td><td>Rated insulation voltage</td><td>Maximum voltage for insulation - always <strong>higher than Ue</strong>.</td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Operating Mechanism detail:</strong> Spring-charged with BOTH a closing spring and an opening spring. <strong>Shunt Trip</strong> = external trip signal from protection relays energises the trip coil. <strong>Trip Coil (TC)</strong> releases the latch to open contacts instantly; <strong>Close Coil (CC)</strong> closes contacts against spring tension.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Vishwanathan):</strong> How does an ACB extinguish the arc when opening?<br><strong>Ideal Answer:</strong> When contacts open, an arc forms. Magnetic force from the arc current drives the arc into the arc chutes. The arc chutes have insulating splitter plates that divide the arc into multiple shorter series arcs. Each shorter arc has a higher voltage drop - total arc voltage exceeds supply voltage - the arc cannot sustain and extinguishes. Arc contacts open LAST after the main contacts - they take the arc damage, protecting the main contacts. Arc chute material absorbs and dissipates heat, and ionised gases cool and de-ionise. The entire process takes <span class="n-val">milliseconds</span>.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath):</strong> What is the NVC (No Volt Coil) / UVT on an ACB?<br><strong>Ideal Answer:</strong> NVC / UVT is a continuous-duty coil in the ACB operating mechanism. It holds the ACB closed while control voltage is present. If control voltage is lost: coil de-energises → latch releases → ACB trips open automatically. Purpose: fail-safe - if control power fails during operation, the ACB opens safely. It also prevents the ACB re-closing automatically after blackout restoration - the operator must manually reclose, preventing uncontrolled automatic restart.</div></div>

<div class="n-h1" id="s-ocr-detail">2A. OCR - IDMT DETAIL & SETTINGS</div>
<div class="n-h2">IDMT Trip Time Examples</div>
<table class="n-table">
  <tr><th>Fault Current</th><th>Trip Time</th></tr>
  <tr><td class="hl">105% rated</td><td>~10 seconds</td></tr>
  <tr><td class="hl">200% rated</td><td class="ok">~2 seconds</td></tr>
  <tr><td class="hl">500% rated</td><td class="ok">~0.5 seconds</td></tr>
  <tr><td>Below 1.1× rated</td><td class="bad">No trip (definite minimum - allows brief overloads)</td></tr>
</table>
<div class="n-h2">OCR Settings</div>
<ul class="n-list">
  <li><strong>Pick-Up Current (Is):</strong> Level at which relay starts timing. Typically <span class="n-val">105-110%</span> of rated.</li>
  <li><strong>Time Multiplier Setting (TMS):</strong> Adjusts the overall curve - determines trip time at a given current multiple.</li>
  <li><strong>Curve Type:</strong> Standard inverse, very inverse, extremely inverse - different slope characteristics.</li>
</ul>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> How do you test an overcurrent relay by secondary injection?<br><strong>Ideal Answer:</strong> (1) Rack ACB to TEST position - power contacts isolated. (2) Disconnect CT secondary leads from relay. (3) Connect secondary injection test set to relay current input. (4) Inject test current at multiples of set value (1.05×, 2×, 5×, 10×). (5) Record trip time at each multiple. (6) Compare with IDMT curve from relay manual - verify within tolerance. (7) Check relay trip output operates the ACB trip coil. (8) Reconnect CT secondary - rack ACB to service. (9) Record all results in maintenance log with test set calibration details.</div></div>

<div class="n-h2">Reverse Power - Causes & Test Methods</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Causes of reverse power:</strong> Prime mover (diesel) fuel supply fails or trips · Governor malfunctions and closes fuel - engine slows · Coupling failure between engine and generator · Generator coasts down and the busbar drives it as a motor.</div></div>
<ol class="n-steps">
  <li><strong>Method 1 - VCB/ACB racked to test:</strong> inject simulated reverse power signal (voltage + current at the required phase angle for reverse power) into relay input. Verify relay operates at set percentage.</li>
  <li><strong>Method 2 - During shore power transfer:</strong> brief reverse power flows when switching from generators to shore - relay should operate - note the reading.</li>
  <li><strong>Method 3 - Power relay test set:</strong> specialised equipment applies the correct voltage and current phasors at the required angle to simulate reverse power.</li>
</ol>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Kamath):</strong> Why is under-frequency protection important?<br><strong>Ideal Answer:</strong> Frequency drops when a generator is overloaded - the prime mover slows. Low frequency makes all motors slow (synchronous speed ∝ frequency) - pumps and fans lose flow causing overheating. Transformers overheat as the V/f ratio rises causing iron core saturation. Navigation and control systems may malfunction. The relay acts in stages: <span class="n-val">48 Hz</span> alarm → <span class="n-val">47 Hz</span> preferential trip sheds non-essential loads → <span class="n-val">45 Hz</span> generator ACB trips. SOLAS requires frequency recovery within <span class="n-val">±5%</span> in <span class="n-val">5 seconds</span>.</div></div>

<div class="n-h1" id="s-btb-detail">3A. BUS TIE BREAKER - INTERLOCKS & SECTIONALISED OPERATION</div>
<div class="n-h2">Sectionalised Operation (Large Ships)</div>
<ul class="n-list">
  <li><strong>Port section:</strong> Generator 1 + Generator 2 (or 3) feeding port-side loads.</li>
  <li><strong>Starboard section:</strong> Generator 3 + Generator 4 feeding starboard loads.</li>
  <li><strong>BTB open:</strong> maximum fault isolation - any busbar fault affects only one section.</li>
</ul>
<div class="n-h2">BTB Interlocks</div>
<ul class="n-list">
  <li><strong>Some ships:</strong> closing BTB automatically opens one generator ACB - prevents parallel overloading.</li>
  <li><strong>Others:</strong> BTB is interlocked - cannot close unless generators on both sections are paralleled first.</li>
  <li><strong>Emergency use:</strong> if a generator on one section fails, close BTB to restore power from the other section's generator. ETOs must know where the BTB panel is and how to close it.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a bus tie breaker and when is it used?<br><strong>Ideal Answer:</strong> The BTB connects two separate MSB sections. Normally OPEN for maximum fault isolation (a fault on one section doesn't affect the other). Closed when: one generator cannot handle its section load, when transferring a generator between sections, or in an emergency when a section loses its generator (close BTB to supply that section from the other generator). Large ships run sections split for maximum supply security.</div></div>

<div class="n-h2">Group Starter Panel - Contents & Extra Colours</div>
<p class="n-p"><strong>Per starter unit:</strong> incoming fuse/MCB (short circuit protection), main contactor (switching), overload relay (thermal or electronic), control circuit (start/stop or remote), indication lamps (run/stop/fault).</p>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Additional IEC 60073 lamp colours:</strong> <span class="n-val">WHITE</span> = power available / supply healthy. <span class="n-val">BLUE</span> = mandatory action required (sometimes remote/auto mode indication).</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Advantages:</strong> centralised control (all starters in one location), easier maintenance, compact, common busbars for efficient distribution, and remote start/stop from ECR supporting UMS operation.</div></div>

<div class="n-h1" id="s-egen-detail">4A. EMERGENCY GENERATOR - AUTO-START SEQUENCE</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1, Part D, Reg 42 & 43.</strong> Location: ABOVE the bulkhead/freeboard deck, OUTSIDE the main engine room (not sharing a common boundary) so it survives ER flood or fire.</div></div>
<div class="n-h2">Auto-Start Sequence (Step by Step)</div>
<ol class="n-steps">
  <li><strong>Trigger:</strong> Voltage monitoring relay on the ESB detects loss of main supply voltage.</li>
  <li>Signal sent to emergency generator starting system - automatic start initiated.</li>
  <li>Starting motor (battery-powered) cranks the emergency engine.</li>
  <li>Engine fires and builds up to rated speed (<span class="n-val">5-15 seconds</span> typically).</li>
  <li>Voltage builds to rated, frequency stabilises - checks complete.</li>
  <li>Emergency generator ACB closes onto the ESB - essential loads restored within <span class="n-val">45 seconds</span> (cargo) / <span class="n-val">30 seconds</span> (passenger).</li>
</ol>
<div class="n-h2">Essential Services Fed (Full SOLAS List)</div>
<ul class="n-list">
  <li>Navigation lights and shapes</li>
  <li>GMDSS radio equipment</li>
  <li>Fire detection and alarm system</li>
  <li>Emergency bilge pumping system</li>
  <li>Watertight door operation and indicators</li>
  <li>Emergency lighting (accommodation, escape routes, muster stations)</li>
  <li>Steering gear (transitional from batteries for the 30-second gap)</li>
  <li>One dedicated fire pump motor</li>
  <li>Sprinkler system</li>
  <li>Daylight signalling lamp</li>
</ul>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two independent means of starting (mandatory):</strong> (1) dedicated battery start - NOT used for any other purpose; (2) hydraulic start, pneumatic start, or a second battery bank. Starting batteries kept charged by a trickle charger from main power, and also charged by the emergency generator when running.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional source:</strong> Batteries supply essential loads for a minimum <span class="n-val">30 minutes</span> while the emergency generator starts - automatic switchover, no manual action - feeding steering gear, nav lights, GMDSS, internal comms and emergency lighting.</div></div>

<div class="n-h1" id="s-legend">📋 EXAM COLOUR CODE & SURVEYOR MAP</div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Surveyor-to-topic map (2025-26 bank):</strong> ACB arc quenching → Deswal, Kamath, Vishwanathan · Preferential trip sequence & timings → Sanjib, Deswal, Nair · Under-frequency → Vishwanathan, Kamath · Reverse power relay → ALL surveyors · Emergency generator SOLAS (45s) → ALL · Sequential load restoration → Anil Deswal · Battery types lead-acid vs Ni-Cd → Sanjib, Kamath · GMDSS battery reg → frequently missed · UPS working → Vishwanathan, Nair · Shore connection isolation transformer → Kamath, Deswal · Group starter panel → Anil Deswal.</div></div>


<div class="n-h1" id="s-acb-ratings">⚙️ ACB Ratings - Technical Terminology</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Surveyors expect you to use the correct IEC nameplate symbols.</strong> ACB nameplates carry these ratings - know what each means.</div></div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">In - Normal Current Rating</div><div class="card-desc">Continuous current the ACB can carry indefinitely without overheating.</div></div>
  <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Icu / Ics - Breaking Capacity</div><div class="card-desc"><strong>Icu</strong> = ultimate short-circuit breaking capacity. <strong>Ics</strong> = service breaking capacity (% of Icu the breaker can repeat). Max current the ACB can interrupt safely.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Ue - Rated Operational Voltage</div><div class="card-desc">Maximum voltage for normal operation (e.g. <span class="n-val">440 V</span>).</div></div>
  <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title" style="color:var(--purple)">Ui - Rated Insulation Voltage</div><div class="card-desc">Maximum voltage the insulation can withstand - always <strong>higher than Ue</strong>.</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Shunt Trip vs Trip Coil:</strong> The <strong>Shunt Trip</strong> is an external trip input - protection relays energise it to fire the trip coil (TC) and open contacts instantly. The <strong>Close Coil (CC)</strong> is an electromagnet that closes the contacts against the spring on a close command.</div></div>

<div class="n-h1" id="s-ocr-detail">📈 Overcurrent Relay (OCR) - IDMT Settings In Depth</div>
<div class="n-h2">IDMT Trip Time vs Current Multiple</div>
<table class="n-table">
  <tr><th>Current (× rated)</th><th>Trip Time</th><th>Behaviour</th></tr>
  <tr><td class="ok">&lt;1.1× rated</td><td class="ok">No trip</td><td>Definite minimum time - allows brief overloads/motor starts.</td></tr>
  <tr><td class="hl">105% rated</td><td class="hl">~10 seconds</td><td>Pick-up region - relay starts timing.</td></tr>
  <tr><td class="hl">200% rated</td><td class="hl">~2 seconds</td><td>Inverse - faster trip.</td></tr>
  <tr><td class="bad">500% rated</td><td class="bad">~0.5 seconds</td><td>Heavy fault - near-instant.</td></tr>
</table>
<div class="n-h2">OCR Setting Parameters</div>
<ul class="n-list">
  <li><strong>Pick-up Current (Is):</strong> Current at which the relay starts timing. Typically <span class="n-val">105–110%</span> of rated current.</li>
  <li><strong>Time Multiplier Setting (TMS):</strong> Shifts the entire curve up/down - determines actual trip time at a given current multiple.</li>
  <li><strong>Curve Type:</strong> Standard inverse, very inverse, or extremely inverse - different slopes selected to coordinate with downstream protection.</li>
</ul>

<div class="n-h2">Secondary Injection Test - Full Procedure</div>
<ol class="n-steps">
  <li>Rack ACB to <strong>TEST</strong> position - power contacts isolated from busbars.</li>
  <li>Disconnect the CT secondary leads from the relay (prevents back-feed into live CTs).</li>
  <li>Connect the secondary injection test set to the relay current input terminals.</li>
  <li>Inject test current at multiples of set value: <span class="n-val">1.05×</span>, <span class="n-val">2×</span>, <span class="n-val">5×</span>, <span class="n-val">10×</span> set current.</li>
  <li>Record trip time at each multiple.</li>
  <li>Compare results against the IDMT curve from the relay manual - verify within tolerance.</li>
  <li>Verify the relay trip output operates the ACB trip coil.</li>
  <li>Reconnect the CT secondary leads - rack ACB back to service.</li>
  <li>Record all values in the maintenance log with test-set calibration details.</li>
</ol>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Never leave CT secondary open under load.</strong> An open-circuited CT develops dangerously high voltage. That is exactly why we disconnect the relay end and short the CT before secondary injection, and why this is done only in TEST position.</div></div>

<div class="n-h1" id="s-revpower-detail">🔁 Reverse Power Relay - Causes, Effects & Testing</div>
<div class="n-h2">What Causes Reverse Power</div>
<ul class="n-list">
  <li>Prime mover (diesel engine) fuel supply fails or trips.</li>
  <li>Engine governor malfunctions and closes the fuel rack - engine slows.</li>
  <li>Coupling failure between engine and generator.</li>
  <li>Generator coasts down - the busbar then drives it as a motor.</li>
</ul>
<div class="n-h2">Three Testing Methods</div>
<table class="n-table">
  <tr><th>Method</th><th>How</th></tr>
  <tr><td class="hl">1. VCB in test position</td><td>Inject simulated reverse power signal (voltage + current at the required phase angle for reverse power) into the relay input. Verify relay operates at set percentage.</td></tr>
  <tr><td class="hl">2. During shore power transfer</td><td>When ship switches from generators to shore, a brief reverse power may flow - relay should operate - note the reading.</td></tr>
  <tr><td class="hl">3. Power relay test set</td><td>Specialised equipment applies correct voltage and current phasors at the required angle to simulate reverse power accurately.</td></tr>
</table>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Reverse power = "generator turns into a motor." The phasor angle, not just magnitude, defines reverse power - that's why a true power relay test set is needed, not just a current source.</div></div>

<div class="n-h1" id="s-btb-detail">🔗 Bus Tie Breaker - Sectionalised Operation & Interlocks</div>
<div class="n-h2">Sectionalised Operation (Normal for Large Ships)</div>
<ul class="n-list">
  <li><strong>Port section:</strong> Generator 1 + Generator 2 (or 3) feeding port-side loads.</li>
  <li><strong>Starboard section:</strong> Generator 3 + Generator 4 feeding starboard loads.</li>
  <li><strong>BTB open:</strong> maximum fault isolation - any busbar fault only affects one section.</li>
</ul>
<div class="n-h2">BTB Interlocking Schemes</div>
<ul class="n-list">
  <li>Some ships: closing the BTB automatically opens one generator ACB - prevents parallel overloading.</li>
  <li>Others: BTB is interlocked - cannot close unless generators on both sections are already paralleled (synchronised) first.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO must know location of the BTB panel</strong> and how to close it in an emergency to restore power to a section that has lost its generator.</div></div>

<div class="n-h1" id="s-mcc-detail">🎛️ Group Starter Panel - Unit Contents & Lamp Codes</div>
<div class="n-h2">Contents Per Starter Unit</div>
<ul class="n-list">
  <li>Incoming fuse or MCB (short-circuit protection).</li>
  <li>Main contactor (switching).</li>
  <li>Overload relay (thermal or electronic).</li>
  <li>Control circuit (start/stop push buttons or remote control).</li>
  <li>Indication lamps (run / stop / fault).</li>
</ul>
<div class="n-h2">Full IEC 60073 Indicator & Push-button Codes</div>
<table class="n-table">
  <tr><th>Colour</th><th>Lamp Meaning</th><th>Push Button</th></tr>
  <tr><td class="ok">GREEN</td><td>Motor STOPPED (safe state)</td><td>START</td></tr>
  <tr><td class="bad">RED</td><td>Motor RUNNING (danger)</td><td>STOP / EMERGENCY STOP</td></tr>
  <tr><td class="hl">AMBER / YELLOW</td><td>FAULT or ALARM condition</td><td> - </td></tr>
  <tr><td>WHITE</td><td>Power available / supply healthy</td><td> - </td></tr>
  <tr><td>BLUE</td><td>Mandatory action required / remote-auto mode</td><td> - </td></tr>
</table>
<div class="n-h2">Advantages of Group Starter Panel</div>
<ul class="n-list">
  <li>Centralised control - all starters in one location (ECR or panel room).</li>
  <li>Easier maintenance - all starters accessible in one place.</li>
  <li>Compact - less space than scattered individual starters.</li>
  <li>Common busbars - efficient power distribution.</li>
  <li>Remote start/stop from ECR - supports UMS (unmanned machinery space) operation.</li>
</ul>

<div class="n-h1" id="s-emerg-autostart">⏱️ Emergency Generator - Auto-Start Sequence (Step by Step)</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1 Reg 42 & 43.</strong> Cargo ship auto-start within <span class="n-val">45 s</span>; passenger ship within <span class="n-val">30 s</span>. Fuel for <span class="n-val">18 h</span> (cargo) / <span class="n-val">36 h</span> (passenger). EG located <strong>above the bulkhead deck, outside the main ER</strong>, not sharing a common boundary.</div></div>
<ol class="n-steps">
  <li><strong>Trigger:</strong> Voltage monitoring relay on the ESB detects loss of main supply voltage.</li>
  <li>Signal sent to the emergency generator starting system - automatic start initiated.</li>
  <li>Starting motor (battery-powered) cranks the emergency engine.</li>
  <li>Engine fires and builds up to rated speed (<span class="n-val">5–15 seconds</span> typically).</li>
  <li>Voltage builds to rated, frequency stabilises - checks complete.</li>
  <li>Emergency ACB closes - EG supplies the emergency switchboard and essential loads.</li>
</ol>
<div class="n-h2">Starting System - Two Independent Means</div>
<ul class="n-list">
  <li><strong>Means 1:</strong> Dedicated battery start - batteries NOT used for any other purpose.</li>
  <li><strong>Means 2:</strong> Hydraulic start, pneumatic start, or a second independent battery bank.</li>
  <li>Starting batteries kept charged by a trickle charger from main power, and also charged by the emergency generator when running.</li>
</ul>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional Source of Power:</strong> Batteries supply essential loads (steering gear, nav lights, GMDSS, internal comms, emergency lighting) for a minimum of <span class="n-val">30 minutes</span> while the EG starts. Switchover is <strong>automatic - no manual action required</strong>.</div></div>
<div class="n-h2">Full List of Essential Services Supplied by EG</div>
<ul class="n-list">
  <li>Navigation lights and shapes</li>
  <li>GMDSS radio equipment</li>
  <li>Fire detection and alarm system</li>
  <li>Emergency bilge pumping system</li>
  <li>Watertight door operation and indicators</li>
  <li>Emergency lighting (accommodation, escape routes, muster stations)</li>
  <li>Steering gear (transitional source if EG not yet running)</li>
  <li>One dedicated fire pump motor</li>
  <li>Sprinkler system</li>
  <li>Daylight signalling lamp</li>
</ul>

<div class="n-h1" id="s-surveyorqa-extra">🎤 Additional Surveyor Q&amp;A - Switchboard & CB</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Vishwanathan):</strong> How does an ACB extinguish the arc when opening?<br><strong>Ideal Answer:</strong> When contacts open, an arc forms. Magnetic force from the arc current drives the arc upward into the arc chutes. The chutes have insulating splitter plates that divide the arc into multiple shorter series arcs. Each shorter arc has its own voltage drop, so the total arc voltage exceeds the supply voltage - the arc cannot sustain and extinguishes. The arc (arcing) contacts open last after the main contacts, so they take the arc damage and protect the main contacts. The arc-chute material absorbs and dissipates heat, the ionised gases cool and de-ionise. The whole process takes milliseconds.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the difference between ACB service, test and isolated position?<br><strong>Ideal Answer:</strong> SERVICE - fully plugged in, power contacts connected to busbars, control circuits connected, carries load. TEST - racked back halfway, power contacts disconnected from busbars (no supply to breaker) but control circuits remain connected, allowing protection relay injection testing without energising the power circuit. ISOLATED - fully withdrawn, both power and control circuits disconnected, for full maintenance.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the NVC / UVT on an ACB?<br><strong>Ideal Answer:</strong> The No Voltage Coil (NVC) / Under-Voltage Trip (UVT) is a continuous-duty coil in the operating mechanism. It holds the ACB closed while control voltage is present. If control voltage is lost, the coil de-energises, the latch releases and the ACB trips open automatically. Purpose: it is a fail-safe - if control power fails the breaker opens safely, and it prevents the ACB re-closing automatically after a blackout, so the operator must manually reclose (no uncontrolled automatic restart).</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (ALL surveyors):</strong> What is the reverse power relay and how is it tested?<br><strong>Ideal Answer:</strong> It trips the generator ACB when the generator absorbs power from the busbar (prime mover failed - generator being motored). Without it the engine is mechanically damaged running without combustion/lubrication. Setting: <span class="n-val">5–10%</span> rated kW reverse, <span class="n-val">3–5 second</span> delay. Testing: inject a simulated reverse power signal (voltage + current at correct phase angle) into the relay with ACB in test position using a power relay test set; or observe relay operation during shore-power transfer. Verify it operates at the set value and trips the ACB.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Kamath):</strong> Why is under-frequency protection important?<br><strong>Ideal Answer:</strong> Frequency drops when the generator is overloaded and the prime mover slows. At low frequency all motors slow (synchronous speed ∝ frequency), pumps and fans lose flow causing overheating; transformers overheat because V/f increases and the iron core saturates; navigation and control systems may malfunction. The relay acts in stages: <span class="n-val">48 Hz</span> alarm, <span class="n-val">47 Hz</span> preferential trip sheds non-essential loads, <span class="n-val">45 Hz</span> generator ACB trips. This prevents cascading failure. SOLAS requires frequency recovery within <span class="n-val">±5%</span> in <span class="n-val">5 seconds</span>.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> How do you test an overcurrent relay by secondary injection?<br><strong>Ideal Answer:</strong> Rack ACB to TEST position; disconnect CT secondary leads from the relay; connect the secondary injection test set to the relay current input; inject at multiples of set value (1.05×, 2×, 5×, 10×); record trip time at each multiple and compare against the IDMT curve in the manual; verify the relay output operates the trip coil; reconnect the CT secondary; rack to service; record all results with test-set calibration details.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a bus tie breaker and when is it used?<br><strong>Ideal Answer:</strong> The BTB connects two separate MSB sections. Normally OPEN for maximum fault isolation. Closed when one generator cannot handle its section load, during generator transfer between sections, or in emergency when a section loses its generator (close BTB to feed it from the other section). Large ships run split for security.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Anil Deswal):</strong> What is a group starter panel and what do the colours mean?<br><strong>Ideal Answer:</strong> A Motor Control Centre housing multiple motor starters in one enclosure with common busbars. Each unit has a fuse, contactor, overload relay and control circuit. IEC 60073 colours: GREEN lamp = motor stopped (safe), RED = motor running, AMBER = fault/alarm, WHITE = power available, BLUE = mandatory action/auto mode. Push buttons: GREEN = start, RED = stop/emergency stop. Advantages: centralised control, easier maintenance, compact, supports remote/UMS operation.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Ratings:</strong> "<strong>In</strong> for <strong>N</strong>ormal, <strong>Icu</strong> for <strong>Cu</strong>t-off (breaking), <strong>Ue</strong> for <strong>U</strong>se voltage, <strong>Ui</strong> always higher for <strong>I</strong>nsulation."</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>ACB arc quenching</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Arc driven into chutes → split by plates → shorter arcs → total arc voltage > <span class="n-val">440V</span> supply → extinguishes. Arc contacts open last.</td>
    </tr>
    <tr>
      <td>Reverse power relay</td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Trips ACB when generator absorbs power. Prevents motoring/engine damage. <span class="n-val">5-10%</span> rated kW, <span class="n-val">3-5 sec</span> delay.</td>
    </tr>
    <tr>
      <td>Emergency Gen SOLAS</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Nair</td>
      <td><span class="n-val">45 sec</span> cargo, <span class="n-val">30 sec</span> passenger. <span class="n-val">18 hr</span> fuel. Above bulkhead deck. Monthly test.</td>
    </tr>
    <tr>
      <td>Sequential Load Restore</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Cooling → LO → fuel → boiler → air → HVAC. <span class="n-val">30s - 2m</span> delays. Prevents starting current overload.</td>
    </tr>
    <tr>
      <td>Shore connection</td>
      <td class="hl">⭐⭐⭐⭐ Kamath</td>
      <td>Isolation transformer MANDATORY to break galvanic earth path between solidly earthed shore and floating ship. Stops hull corrosion.</td>
    </tr>
    <tr>
      <td>GMDSS Battery</td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td><span class="n-val">1 hour</span> (with UPS) or <span class="n-val">6 hours</span> (no UPS). Dedicated battery. Annual load test. Replace at <span class="n-val">80%</span>.</td>
    </tr>
  </table>

</div>
</div>
`);

window.loadNotes("T04", `<div class="view" id="view-notes-t04">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 04 — Switchboard & Circuit Breakers</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">ACB & Protection</span>
      <span class="tag tag-purple">Emergency Generator</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-acb')">ACB Working</button>
    <button class="anc-btn" onclick="jumpTo('s-relays')">Protection Relays</button>
    <button class="anc-btn" onclick="jumpTo('s-bus-tie')">Bus Tie & MCC</button>
    <button class="anc-btn" onclick="jumpTo('s-emerg-gen')">Emergency Gen</button>
    <button class="anc-btn" onclick="jumpTo('s-seq-load')">Sequential Load</button>
    <button class="anc-btn" onclick="jumpTo('s-batteries')">Batteries</button>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS</button>
    <button class="anc-btn" onclick="jumpTo('s-shore')">Shore Connection</button>
    <button class="anc-btn" onclick="jumpTo('s-pref-trip')">Preferential Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-survey')">MSB Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-written')">Written Section</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-acb">1. MAIN SWITCHBOARD (MSB) & AIR CIRCUIT BREAKER (ACB)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath, Vishwanathan — always ask this.</strong> You must explain exactly how the arc is extinguished and the difference between main and arcing contacts.</div></div>
  
  <div class="n-h2">ACB Construction & Working Principle</div>
  <ul class="n-list">
    <li><strong>Main Contacts:</strong> Silver-tungsten alloy. Carry full load current normally.</li>
    <li><strong>Arc Contacts (Arcing Contacts):</strong> Carbon or copper-graphite. They make FIRST and break LAST. They take the arc damage, protecting the main contacts.</li>
    <li><strong>Arc Chutes:</strong> Insulating ceramic/fibre splitter plates above the contacts.</li>
    <li><strong>Operating Mechanism:</strong> Spring-charged. Trip coil (TC) opens it, Close coil (CC) closes it.</li>
  </ul>
  
  <div class="n-h2">How the Arc is Extinguished</div>
  <ol class="n-steps">
    <li>Trip signal received — operating mechanism releases — main contacts START to open.</li>
    <li>Main contacts open first. Arc forms between the arcing contacts which open last.</li>
    <li>Arc is DRIVEN upwards into the arc chutes by the magnetic force of its own current.</li>
    <li>In the arc chutes, the arc is split into multiple shorter series arcs by the splitter plates.</li>
    <li>Each shorter arc has a voltage drop. The total arc voltage exceeds the <span class="n-val">440V</span> supply voltage.</li>
    <li>The arc cannot sustain itself and extinguishes. The ceramic plates absorb the heat.</li>
  </ol>

  <div class="n-h2">ACB Positions (Service, Test, Isolated)</div>
  <table class="n-table">
    <tr><th>Position</th><th>Power Contacts</th><th>Control Circuits</th><th>Purpose</th></tr>
    <tr>
      <td><strong>SERVICE</strong> (Plugged in)</td>
      <td class="hl">Connected to busbars</td>
      <td class="hl">Connected</td>
      <td>Normal operation — carries load.</td>
    </tr>
    <tr>
      <td><strong>TEST</strong> (Racked halfway)</td>
      <td class="bad">Disconnected</td>
      <td class="hl">Connected</td>
      <td>Relay testing (secondary injection) without energising power circuit.</td>
    </tr>
    <tr>
      <td><strong>ISOLATED</strong> (Withdrawn)</td>
      <td class="bad">Disconnected</td>
      <td class="bad">Disconnected</td>
      <td>Full maintenance — safe to work on breaker.</td>
    </tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>NVC / UVT (Under-Voltage Trip):</strong> A continuous-duty coil in the ACB. It holds the ACB closed while control voltage is present. If control voltage is lost, it de-energises and trips the ACB open. This is a <strong>fail-safe</strong> mechanism and prevents the ACB from re-closing automatically after a blackout.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>A</strong>rc contacts act as <strong>A</strong>rmour for the main contacts.</div></div>

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-relays">2. PROTECTION RELAYS — OCR, REVERSE POWER, UNDER-FREQUENCY</div>
  
  <div class="n-h2">Overcurrent Relay (OCR) — IDMT Characteristic</div>
  <p class="n-p">OCR trips the ACB when current exceeds the set threshold (e.g., <span class="n-val">105-110%</span> of rated). Uses an IDMT (Inverse Definite Minimum Time) characteristic: Higher fault current = faster trip time.</p>
  <ul class="n-list">
    <li><strong>Secondary Injection Test:</strong> Rack ACB to TEST position. Inject known AC current into relay using a test set. Increase until relay trips. Compare trip time with IDMT curve. Tests relay safely WITHOUT passing real fault current.</li>
  </ul>

  <div class="n-h2">Reverse Power Relay</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by ALL surveyors.</strong> Know the exact settings and why it happens.</div></div>
  <p class="n-p">Trips the generator ACB when the generator absorbs power from the busbar (prime mover fails, but generator remains connected and acts as a motor).</p>
  <ul class="n-list">
    <li><strong>Why dangerous:</strong> The diesel engine is driven by the generator without combustion. Mechanical damage occurs (valves, pistons run without lubrication from combustion). Overloads running generators.</li>
    <li><strong>Setting:</strong> Trips at <span class="n-val">5-10%</span> of rated kW in reverse direction, with a <span class="n-val">3-5 second</span> time delay to prevent nuisance tripping during paralleling transients.</li>
    <li><strong>Testing:</strong> Secondary injection (using power relay test set with ACB in TEST position) OR observe during live shore-power transfer (momentary reverse power trips ACB).</li>
  </ul>

  <div class="n-h2">Under-Frequency Protection</div>
  <p class="n-p">Frequency drops when a generator is overloaded and the prime mover slows down. If frequency drops, all motors slow down (synchronous speed ∝ frequency), cooling pumps lose flow causing overheating, and transformers suffer iron core saturation.</p>
  <table class="n-table">
    <tr><th>Stage</th><th>Frequency Setting</th><th>Action</th></tr>
    <tr><td>Stage 1</td><td class="hl">48 Hz</td><td>Alarm — operator alerted.</td></tr>
    <tr><td>Stage 2</td><td class="hl">47 Hz</td><td>Preferential trip — sheds non-essential loads.</td></tr>
    <tr><td>Stage 3</td><td class="bad">45 Hz</td><td>Generator ACB trips — prevents cascading failure.</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS II-1/Reg 40:</strong> Frequency must recover to within <span class="n-val">±5%</span> of rated in <span class="n-val">5 seconds</span> after a disturbance.</div></div>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-bus-tie">3. BUS TIE BREAKER & GROUP STARTER PANEL</div>
  <p class="n-p"><strong>Bus Tie Breaker (BTB):</strong> Connects two separate MSB sections. Normally kept <strong>OPEN</strong> for maximum fault isolation (a fault on one bus section won't take down the other). Closed in emergencies (generator failure on one section) or when transferring loads.</p>
  
  <div class="n-h2">Group Starter Panel (Motor Control Centre - MCC)</div>
  <p class="n-p">A compact assembly housing multiple motor starters in a single enclosure. Centralises control and maintenance.</p>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Anil Deswal</strong> often asks about the IEC 60073 indicator lamp colours on the MCC panel.</div></div>
  <div class="n-grid-3">
    <div class="n-card"><div class="card-title" style="color:var(--green)">GREEN</div><div class="card-desc">Motor STOPPED (Safe state)</div></div>
    <div class="n-card"><div class="card-title" style="color:var(--red)">RED</div><div class="card-desc">Motor RUNNING (Danger)</div></div>
    <div class="n-card"><div class="card-title" style="color:var(--orange)">AMBER</div><div class="card-desc">FAULT or ALARM</div></div>
  </div>
  <p class="n-p">WHITE lamp = Power available. GREEN push button = START. RED push button = STOP.</p>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-emerg-gen">4. EMERGENCY GENERATOR — SOLAS REQUIREMENTS</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 42 & 43:</strong> Mandatory requirements. These exact numbers are asked in every single oral exam.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Auto-Start Time Limit</div>
      <div class="card-val">45 / 30 seconds</div>
      <div class="card-desc">Must auto-start and supply essential loads within <span class="n-val">45 seconds</span> for cargo ships, and <span class="n-val">30 seconds</span> for passenger ships.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Fuel Endurance</div>
      <div class="card-val">18 / 36 hours</div>
      <div class="card-desc">Sufficient fuel for <span class="n-val">18 hours</span> continuous operation (cargo), or <span class="n-val">36 hours</span> (passenger). Tank must NOT be in main ER.</div>
    </div>
  </div>
  <ul class="n-list">
    <li><strong>Location:</strong> Above the bulkhead deck, outside machinery spaces. Ensures it remains operational if ER floods or burns.</li>
    <li><strong>Starting:</strong> Two independent means (e.g., dedicated battery + hydraulic/pneumatic).</li>
    <li><strong>Testing:</strong> Monthly auto-start test (simulate main loss). Annual load test.</li>
    <li><strong>Essential Loads Fed:</strong> Nav lights, GMDSS, fire detection, emergency bilge, watertight doors, emergency lighting, steering gear, fire pump.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional Source of Power:</strong> Battery bank on ESB that supplies essential loads for <span class="n-val">30 minutes</span> to cover the <span class="n-val">45-second</span> startup gap while the emergency generator starts.</div></div>

  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-seq-load">5. SEQUENTIAL LOAD RESTORATION AFTER BLACKOUT</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Anil Deswal</strong> specifically asks for this exact sequence. Never start all loads at once.</div></div>
  <p class="n-p"><strong>Why sequence?</strong> Motors draw <span class="n-val">5-8x</span> rated current on start. Simultaneous starting overwhelms the generator, causing an immediate second blackout.</p>
  <ol class="n-steps">
    <li><strong>0-45 sec:</strong> Emergency generator runs essential loads. Start Main Generator, build voltage, close ACB.</li>
    <li><strong>Sea Water Cooling Pump:</strong> Highest priority to prevent immediate overheating of running systems.</li>
    <li><strong>Lubricating Oil Pump:</strong> Prepares the main engine.</li>
    <li><strong>Fuel Oil Pump & Separator:</strong> Prepares fuel system.</li>
    <li><strong>Auxiliary Boiler:</strong> For steam services.</li>
    <li><strong>Fresh Water Generator & Compressed Air:</strong> Lower priority.</li>
    <li><strong>HVAC & Galley:</strong> Massive loads — wait for stable generation (<span class="n-val">10-15 mins</span>).</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Time Delays:</strong> The PMS (Power Management System) enforces delays of <span class="n-val">30 seconds to 2 minutes</span> between each step to allow starting transients to settle.</div></div>

  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-batteries">6. BATTERIES — TYPES, TESTING & GMDSS REQUIREMENTS</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Lead-Acid</th><th>Nickel-Cadmium (Ni-Cd)</th></tr>
    <tr>
      <td>Cell Voltage</td>
      <td><span class="n-val">2.0V</span> per cell</td>
      <td><span class="n-val">1.2V</span> per cell</td>
    </tr>
    <tr>
      <td>Cold Performance</td>
      <td class="bad">Poor below -20°C</td>
      <td class="hl">Excellent — used in arctic</td>
    </tr>
    <tr>
      <td>Maintenance</td>
      <td>Regular SG checks, water top-up</td>
      <td class="hl">Minimal, rarely needs electrolyte</td>
    </tr>
    <tr>
      <td>Life & Cost</td>
      <td>3-7 years, cheap</td>
      <td>10-20 years, expensive</td>
    </tr>
  </table>

  <div class="n-h2">Battery Condition Testing</div>
  <ul class="n-list">
    <li><strong>Visual & Electrolyte:</strong> Check for leaks/bulging. Clean terminals with sodium bicarbonate. Top up with distilled water ONLY.</li>
    <li><strong>Specific Gravity (Lead-Acid):</strong> Use hydrometer. Fully charged = <span class="n-val">1.280</span>. Discharged = <span class="n-val">1.100</span>. Cells must agree within <span class="n-val">0.050</span>.</li>
    <li><strong>Load Test:</strong> Discharge at C10 rate. Voltage must not drop below <span class="n-val">1.75V/cell</span> (Lead-Acid) or <span class="n-val">1.0V/cell</span> (Ni-Cd) prematurely.</li>
    <li><strong>Capacity Test:</strong> Replace battery if actual Ah is <span class="n-val">< 80%</span> of rated Ah.</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS Ch IV Reg 13 (GMDSS Battery):</strong> Dedicated battery must supply all GMDSS equipment for <span class="n-val">1 hour</span> (if ship has UPS/auto-start generator) or <span class="n-val">6 hours</span> (if no UPS). Tested annually via load test. Replace at 80% capacity.</div></div>

  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-ups">7. UPS — UNINTERRUPTIBLE POWER SUPPLY</div>
  <p class="n-p">Provides continuous AC power to critical loads (ECDIS, GMDSS, IAS) with <strong>ZERO</strong> switchover time during a blackout.</p>
  
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">ONLINE (Double Conversion) UPS</div>
      <div class="card-desc">AC Mains → Rectifier → DC Bus (with batteries) → Inverter → AC Load.<br>Load is ALWAYS fed via inverter. On blackout, batteries immediately supply DC bus. <strong>Zero switchover gap.</strong> Perfect output regulation.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">OFFLINE (Standby) UPS</div>
      <div class="card-desc">Load normally fed directly from mains. On failure, switch transfers load to inverter. Has a <span class="n-val">4-12ms</span> switchover delay. Unsuitable for critical computers.</div>
    </div>
  </div>
  <ul class="n-list">
    <li><strong>Static Bypass (Automatic):</strong> Fast thyristor switch. Transfers load instantly to mains if UPS faults or overloads.</li>
    <li><strong>Maintenance Bypass (Manual):</strong> Physical switch isolating the entire UPS unit for repairs while load is fed directly from mains.</li>
  </ul>

  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-shore">8. SHORE CONNECTION & COLD IRONING</div>
  <p class="n-p">Connecting to shore power in port reduces generator emissions (Alternative Maritime Power / Cold Ironing).</p>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why is an Isolation Transformer MANDATORY?</strong> Shore supply is solidly earthed (TN-S). Ships use an unearthed floating (IT) system. Connecting directly creates a galvanic earth path through the seawater, causing massive electrolytic corrosion of the ship's hull. The isolation transformer magnetically transfers power while breaking the physical earth connection.</div></div>
  <p class="n-p"><strong>Procedure:</strong> 1. Check shore V, Hz, phase sequence. 2. Connect shore cable. 3. Verify transformer output. 4. Synchronise. 5. Close shore ACB. 6. Open generator ACB.</p>

  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-pref-trip">9. PREFERENTIAL TRIP (LOAD SHEDDING)</div>
  <p class="n-p">Automatically disconnects non-essential loads in stages when generator overloads, preventing a complete blackout. It's better to lose the galley than the steering gear.</p>
  <ul class="n-list">
    <li><strong>Stage 1 (<span class="n-val">90%</span> load):</strong> Sheds galley, water heaters, non-essential HVAC after <span class="n-val">5-10 second</span> delay.</li>
    <li><strong>Stage 2 (<span class="n-val">95%</span> load):</strong> Sheds remaining accommodation HVAC and deck equipment.</li>
    <li><strong>NEVER SHED:</strong> Navigation (GMDSS/ECDIS), Steering Gear, Fire Pump, Emergency Bilge.</li>
    <li><strong>Dashpot:</strong> The mechanical pneumatic time-delay device used in older relays (needle valve controls piston speed). Modern ships use electronic timers.</li>
  </ul>

  <!-- ═══ SECTION 10 ═══ -->
  <div class="n-h1" id="s-msb-survey">10. MSB SURVEY & ADDITIONAL EXAM TOPICS</div>
  
  <div class="n-h2">Preparation for MSB Survey (Deswal, Nair)</div>
  <ol class="n-steps">
    <li>Clean busbars (remove dust/oil) and tighten all joints (loose joints = hot spots).</li>
    <li>Test all protection relays (OCR, UV, Reverse Power) via secondary injection.</li>
    <li>Megger all feeder circuits (ensure IR > <span class="n-val">1 MΩ</span>).</li>
    <li>Verify ACB racking mechanisms and interlocks.</li>
    <li>Check Earth Fault lamps and IRM calibration.</li>
    <li>Ensure <span class="n-val">12mm</span> rubber mats (for HV) are in place. Have all test certificates ready.</li>
  </ol>

  <div class="n-h2">HRC Fuses vs Kit-Kat vs ACB</div>
  <p class="n-p"><strong>HRC (High Rupturing Capacity) Fuse:</strong> Ceramic body, silver element, silica sand filler. Clears high fault currents safely without arc flash. Current limiting. Better than rewirable (Kit-Kat) or cartridge fuses which can explode on high faults. Fuses protect cables; Overload relays protect motors.</p>

  <div class="n-h2">PI Test — Why Wait 10 Minutes?</div>
  <p class="n-p">Polarisation Index = IR at 10 mins ÷ IR at 1 min. Capacitive and absorption currents artificially lower the reading at 1 minute. Waiting 10 minutes allows absorption current to decay, giving the TRUE leakage current (insulation resistance). PI <span class="n-val">> 2.0</span> = Good.</p>

  
  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points — answers are scored on specific content.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
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
<div class="n-h2">ACB Ratings — Terminology</div>
<table class="n-table">
  <tr><th>Symbol</th><th>Name</th><th>Meaning</th></tr>
  <tr><td class="hl">In</td><td>Normal current rating</td><td>Continuous current the ACB can carry without overheating.</td></tr>
  <tr><td class="hl">Ics / Icu</td><td>Short circuit breaking capacity</td><td>Maximum fault current the ACB can interrupt safely.</td></tr>
  <tr><td class="hl">Ue</td><td>Rated operational voltage</td><td>Maximum voltage for normal operation (e.g. <span class="n-val">440V</span>).</td></tr>
  <tr><td class="hl">Ui</td><td>Rated insulation voltage</td><td>Maximum voltage for insulation — always <strong>higher than Ue</strong>.</td></tr>
</table>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Operating Mechanism detail:</strong> Spring-charged with BOTH a closing spring and an opening spring. <strong>Shunt Trip</strong> = external trip signal from protection relays energises the trip coil. <strong>Trip Coil (TC)</strong> releases the latch to open contacts instantly; <strong>Close Coil (CC)</strong> closes contacts against spring tension.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Vishwanathan):</strong> How does an ACB extinguish the arc when opening?<br><strong>Ideal Answer:</strong> When contacts open, an arc forms. Magnetic force from the arc current drives the arc into the arc chutes. The arc chutes have insulating splitter plates that divide the arc into multiple shorter series arcs. Each shorter arc has a higher voltage drop — total arc voltage exceeds supply voltage — the arc cannot sustain and extinguishes. Arc contacts open LAST after the main contacts — they take the arc damage, protecting the main contacts. Arc chute material absorbs and dissipates heat, and ionised gases cool and de-ionise. The entire process takes <span class="n-val">milliseconds</span>.</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath):</strong> What is the NVC (No Volt Coil) / UVT on an ACB?<br><strong>Ideal Answer:</strong> NVC / UVT is a continuous-duty coil in the ACB operating mechanism. It holds the ACB closed while control voltage is present. If control voltage is lost: coil de-energises → latch releases → ACB trips open automatically. Purpose: fail-safe — if control power fails during operation, the ACB opens safely. It also prevents the ACB re-closing automatically after blackout restoration — the operator must manually reclose, preventing uncontrolled automatic restart.</div></div>

<div class="n-h1" id="s-ocr-detail">2A. OCR — IDMT DETAIL & SETTINGS</div>
<div class="n-h2">IDMT Trip Time Examples</div>
<table class="n-table">
  <tr><th>Fault Current</th><th>Trip Time</th></tr>
  <tr><td class="hl">105% rated</td><td>~10 seconds</td></tr>
  <tr><td class="hl">200% rated</td><td class="ok">~2 seconds</td></tr>
  <tr><td class="hl">500% rated</td><td class="ok">~0.5 seconds</td></tr>
  <tr><td>Below 1.1× rated</td><td class="bad">No trip (definite minimum — allows brief overloads)</td></tr>
</table>
<div class="n-h2">OCR Settings</div>
<ul class="n-list">
  <li><strong>Pick-Up Current (Is):</strong> Level at which relay starts timing. Typically <span class="n-val">105-110%</span> of rated.</li>
  <li><strong>Time Multiplier Setting (TMS):</strong> Adjusts the overall curve — determines trip time at a given current multiple.</li>
  <li><strong>Curve Type:</strong> Standard inverse, very inverse, extremely inverse — different slope characteristics.</li>
</ul>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> How do you test an overcurrent relay by secondary injection?<br><strong>Ideal Answer:</strong> (1) Rack ACB to TEST position — power contacts isolated. (2) Disconnect CT secondary leads from relay. (3) Connect secondary injection test set to relay current input. (4) Inject test current at multiples of set value (1.05×, 2×, 5×, 10×). (5) Record trip time at each multiple. (6) Compare with IDMT curve from relay manual — verify within tolerance. (7) Check relay trip output operates the ACB trip coil. (8) Reconnect CT secondary — rack ACB to service. (9) Record all results in maintenance log with test set calibration details.</div></div>

<div class="n-h2">Reverse Power — Causes & Test Methods</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Causes of reverse power:</strong> Prime mover (diesel) fuel supply fails or trips · Governor malfunctions and closes fuel — engine slows · Coupling failure between engine and generator · Generator coasts down and the busbar drives it as a motor.</div></div>
<ol class="n-steps">
  <li><strong>Method 1 — VCB/ACB racked to test:</strong> inject simulated reverse power signal (voltage + current at the required phase angle for reverse power) into relay input. Verify relay operates at set percentage.</li>
  <li><strong>Method 2 — During shore power transfer:</strong> brief reverse power flows when switching from generators to shore — relay should operate — note the reading.</li>
  <li><strong>Method 3 — Power relay test set:</strong> specialised equipment applies the correct voltage and current phasors at the required angle to simulate reverse power.</li>
</ol>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Kamath):</strong> Why is under-frequency protection important?<br><strong>Ideal Answer:</strong> Frequency drops when a generator is overloaded — the prime mover slows. Low frequency makes all motors slow (synchronous speed ∝ frequency) — pumps and fans lose flow causing overheating. Transformers overheat as the V/f ratio rises causing iron core saturation. Navigation and control systems may malfunction. The relay acts in stages: <span class="n-val">48 Hz</span> alarm → <span class="n-val">47 Hz</span> preferential trip sheds non-essential loads → <span class="n-val">45 Hz</span> generator ACB trips. SOLAS requires frequency recovery within <span class="n-val">±5%</span> in <span class="n-val">5 seconds</span>.</div></div>

<div class="n-h1" id="s-btb-detail">3A. BUS TIE BREAKER — INTERLOCKS & SECTIONALISED OPERATION</div>
<div class="n-h2">Sectionalised Operation (Large Ships)</div>
<ul class="n-list">
  <li><strong>Port section:</strong> Generator 1 + Generator 2 (or 3) feeding port-side loads.</li>
  <li><strong>Starboard section:</strong> Generator 3 + Generator 4 feeding starboard loads.</li>
  <li><strong>BTB open:</strong> maximum fault isolation — any busbar fault affects only one section.</li>
</ul>
<div class="n-h2">BTB Interlocks</div>
<ul class="n-list">
  <li><strong>Some ships:</strong> closing BTB automatically opens one generator ACB — prevents parallel overloading.</li>
  <li><strong>Others:</strong> BTB is interlocked — cannot close unless generators on both sections are paralleled first.</li>
  <li><strong>Emergency use:</strong> if a generator on one section fails, close BTB to restore power from the other section's generator. ETOs must know where the BTB panel is and how to close it.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a bus tie breaker and when is it used?<br><strong>Ideal Answer:</strong> The BTB connects two separate MSB sections. Normally OPEN for maximum fault isolation (a fault on one section doesn't affect the other). Closed when: one generator cannot handle its section load, when transferring a generator between sections, or in an emergency when a section loses its generator (close BTB to supply that section from the other generator). Large ships run sections split for maximum supply security.</div></div>

<div class="n-h2">Group Starter Panel — Contents & Extra Colours</div>
<p class="n-p"><strong>Per starter unit:</strong> incoming fuse/MCB (short circuit protection), main contactor (switching), overload relay (thermal or electronic), control circuit (start/stop or remote), indication lamps (run/stop/fault).</p>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Additional IEC 60073 lamp colours:</strong> <span class="n-val">WHITE</span> = power available / supply healthy. <span class="n-val">BLUE</span> = mandatory action required (sometimes remote/auto mode indication).</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Advantages:</strong> centralised control (all starters in one location), easier maintenance, compact, common busbars for efficient distribution, and remote start/stop from ECR supporting UMS operation.</div></div>

<div class="n-h1" id="s-egen-detail">4A. EMERGENCY GENERATOR — AUTO-START SEQUENCE</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1, Part D, Reg 42 & 43.</strong> Location: ABOVE the bulkhead/freeboard deck, OUTSIDE the main engine room (not sharing a common boundary) so it survives ER flood or fire.</div></div>
<div class="n-h2">Auto-Start Sequence (Step by Step)</div>
<ol class="n-steps">
  <li><strong>Trigger:</strong> Voltage monitoring relay on the ESB detects loss of main supply voltage.</li>
  <li>Signal sent to emergency generator starting system — automatic start initiated.</li>
  <li>Starting motor (battery-powered) cranks the emergency engine.</li>
  <li>Engine fires and builds up to rated speed (<span class="n-val">5-15 seconds</span> typically).</li>
  <li>Voltage builds to rated, frequency stabilises — checks complete.</li>
  <li>Emergency generator ACB closes onto the ESB — essential loads restored within <span class="n-val">45 seconds</span> (cargo) / <span class="n-val">30 seconds</span> (passenger).</li>
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
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two independent means of starting (mandatory):</strong> (1) dedicated battery start — NOT used for any other purpose; (2) hydraulic start, pneumatic start, or a second battery bank. Starting batteries kept charged by a trickle charger from main power, and also charged by the emergency generator when running.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional source:</strong> Batteries supply essential loads for a minimum <span class="n-val">30 minutes</span> while the emergency generator starts — automatic switchover, no manual action — feeding steering gear, nav lights, GMDSS, internal comms and emergency lighting.</div></div>

<div class="n-h1" id="s-legend">📋 EXAM COLOUR CODE & SURVEYOR MAP</div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Surveyor-to-topic map (2025-26 bank):</strong> ACB arc quenching → Deswal, Kamath, Vishwanathan · Preferential trip sequence & timings → Sanjib, Deswal, Nair · Under-frequency → Vishwanathan, Kamath · Reverse power relay → ALL surveyors · Emergency generator SOLAS (45s) → ALL · Sequential load restoration → Anil Deswal · Battery types lead-acid vs Ni-Cd → Sanjib, Kamath · GMDSS battery reg → frequently missed · UPS working → Vishwanathan, Nair · Shore connection isolation transformer → Kamath, Deswal · Group starter panel → Anil Deswal.</div></div>


<div class="n-h1" id="s-acb-ratings">⚙️ ACB Ratings — Technical Terminology</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Surveyors expect you to use the correct IEC nameplate symbols.</strong> ACB nameplates carry these ratings — know what each means.</div></div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">In — Normal Current Rating</div><div class="card-desc">Continuous current the ACB can carry indefinitely without overheating.</div></div>
  <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Icu / Ics — Breaking Capacity</div><div class="card-desc"><strong>Icu</strong> = ultimate short-circuit breaking capacity. <strong>Ics</strong> = service breaking capacity (% of Icu the breaker can repeat). Max current the ACB can interrupt safely.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Ue — Rated Operational Voltage</div><div class="card-desc">Maximum voltage for normal operation (e.g. <span class="n-val">440 V</span>).</div></div>
  <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title" style="color:var(--purple)">Ui — Rated Insulation Voltage</div><div class="card-desc">Maximum voltage the insulation can withstand — always <strong>higher than Ue</strong>.</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Shunt Trip vs Trip Coil:</strong> The <strong>Shunt Trip</strong> is an external trip input — protection relays energise it to fire the trip coil (TC) and open contacts instantly. The <strong>Close Coil (CC)</strong> is an electromagnet that closes the contacts against the spring on a close command.</div></div>

<div class="n-h1" id="s-ocr-detail">📈 Overcurrent Relay (OCR) — IDMT Settings In Depth</div>
<div class="n-h2">IDMT Trip Time vs Current Multiple</div>
<table class="n-table">
  <tr><th>Current (× rated)</th><th>Trip Time</th><th>Behaviour</th></tr>
  <tr><td class="ok">&lt;1.1× rated</td><td class="ok">No trip</td><td>Definite minimum time — allows brief overloads/motor starts.</td></tr>
  <tr><td class="hl">105% rated</td><td class="hl">~10 seconds</td><td>Pick-up region — relay starts timing.</td></tr>
  <tr><td class="hl">200% rated</td><td class="hl">~2 seconds</td><td>Inverse — faster trip.</td></tr>
  <tr><td class="bad">500% rated</td><td class="bad">~0.5 seconds</td><td>Heavy fault — near-instant.</td></tr>
</table>
<div class="n-h2">OCR Setting Parameters</div>
<ul class="n-list">
  <li><strong>Pick-up Current (Is):</strong> Current at which the relay starts timing. Typically <span class="n-val">105–110%</span> of rated current.</li>
  <li><strong>Time Multiplier Setting (TMS):</strong> Shifts the entire curve up/down — determines actual trip time at a given current multiple.</li>
  <li><strong>Curve Type:</strong> Standard inverse, very inverse, or extremely inverse — different slopes selected to coordinate with downstream protection.</li>
</ul>

<div class="n-h2">Secondary Injection Test — Full Procedure</div>
<ol class="n-steps">
  <li>Rack ACB to <strong>TEST</strong> position — power contacts isolated from busbars.</li>
  <li>Disconnect the CT secondary leads from the relay (prevents back-feed into live CTs).</li>
  <li>Connect the secondary injection test set to the relay current input terminals.</li>
  <li>Inject test current at multiples of set value: <span class="n-val">1.05×</span>, <span class="n-val">2×</span>, <span class="n-val">5×</span>, <span class="n-val">10×</span> set current.</li>
  <li>Record trip time at each multiple.</li>
  <li>Compare results against the IDMT curve from the relay manual — verify within tolerance.</li>
  <li>Verify the relay trip output operates the ACB trip coil.</li>
  <li>Reconnect the CT secondary leads — rack ACB back to service.</li>
  <li>Record all values in the maintenance log with test-set calibration details.</li>
</ol>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Never leave CT secondary open under load.</strong> An open-circuited CT develops dangerously high voltage. That is exactly why we disconnect the relay end and short the CT before secondary injection, and why this is done only in TEST position.</div></div>

<div class="n-h1" id="s-revpower-detail">🔁 Reverse Power Relay — Causes, Effects & Testing</div>
<div class="n-h2">What Causes Reverse Power</div>
<ul class="n-list">
  <li>Prime mover (diesel engine) fuel supply fails or trips.</li>
  <li>Engine governor malfunctions and closes the fuel rack — engine slows.</li>
  <li>Coupling failure between engine and generator.</li>
  <li>Generator coasts down — the busbar then drives it as a motor.</li>
</ul>
<div class="n-h2">Three Testing Methods</div>
<table class="n-table">
  <tr><th>Method</th><th>How</th></tr>
  <tr><td class="hl">1. VCB in test position</td><td>Inject simulated reverse power signal (voltage + current at the required phase angle for reverse power) into the relay input. Verify relay operates at set percentage.</td></tr>
  <tr><td class="hl">2. During shore power transfer</td><td>When ship switches from generators to shore, a brief reverse power may flow — relay should operate — note the reading.</td></tr>
  <tr><td class="hl">3. Power relay test set</td><td>Specialised equipment applies correct voltage and current phasors at the required angle to simulate reverse power accurately.</td></tr>
</table>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Reverse power = "generator turns into a motor." The phasor angle, not just magnitude, defines reverse power — that's why a true power relay test set is needed, not just a current source.</div></div>

<div class="n-h1" id="s-btb-detail">🔗 Bus Tie Breaker — Sectionalised Operation & Interlocks</div>
<div class="n-h2">Sectionalised Operation (Normal for Large Ships)</div>
<ul class="n-list">
  <li><strong>Port section:</strong> Generator 1 + Generator 2 (or 3) feeding port-side loads.</li>
  <li><strong>Starboard section:</strong> Generator 3 + Generator 4 feeding starboard loads.</li>
  <li><strong>BTB open:</strong> maximum fault isolation — any busbar fault only affects one section.</li>
</ul>
<div class="n-h2">BTB Interlocking Schemes</div>
<ul class="n-list">
  <li>Some ships: closing the BTB automatically opens one generator ACB — prevents parallel overloading.</li>
  <li>Others: BTB is interlocked — cannot close unless generators on both sections are already paralleled (synchronised) first.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO must know location of the BTB panel</strong> and how to close it in an emergency to restore power to a section that has lost its generator.</div></div>

<div class="n-h1" id="s-mcc-detail">🎛️ Group Starter Panel — Unit Contents & Lamp Codes</div>
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
  <tr><td class="hl">AMBER / YELLOW</td><td>FAULT or ALARM condition</td><td>—</td></tr>
  <tr><td>WHITE</td><td>Power available / supply healthy</td><td>—</td></tr>
  <tr><td>BLUE</td><td>Mandatory action required / remote-auto mode</td><td>—</td></tr>
</table>
<div class="n-h2">Advantages of Group Starter Panel</div>
<ul class="n-list">
  <li>Centralised control — all starters in one location (ECR or panel room).</li>
  <li>Easier maintenance — all starters accessible in one place.</li>
  <li>Compact — less space than scattered individual starters.</li>
  <li>Common busbars — efficient power distribution.</li>
  <li>Remote start/stop from ECR — supports UMS (unmanned machinery space) operation.</li>
</ul>

<div class="n-h1" id="s-emerg-autostart">⏱️ Emergency Generator — Auto-Start Sequence (Step by Step)</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1 Reg 42 & 43.</strong> Cargo ship auto-start within <span class="n-val">45 s</span>; passenger ship within <span class="n-val">30 s</span>. Fuel for <span class="n-val">18 h</span> (cargo) / <span class="n-val">36 h</span> (passenger). EG located <strong>above the bulkhead deck, outside the main ER</strong>, not sharing a common boundary.</div></div>
<ol class="n-steps">
  <li><strong>Trigger:</strong> Voltage monitoring relay on the ESB detects loss of main supply voltage.</li>
  <li>Signal sent to the emergency generator starting system — automatic start initiated.</li>
  <li>Starting motor (battery-powered) cranks the emergency engine.</li>
  <li>Engine fires and builds up to rated speed (<span class="n-val">5–15 seconds</span> typically).</li>
  <li>Voltage builds to rated, frequency stabilises — checks complete.</li>
  <li>Emergency ACB closes — EG supplies the emergency switchboard and essential loads.</li>
</ol>
<div class="n-h2">Starting System — Two Independent Means</div>
<ul class="n-list">
  <li><strong>Means 1:</strong> Dedicated battery start — batteries NOT used for any other purpose.</li>
  <li><strong>Means 2:</strong> Hydraulic start, pneumatic start, or a second independent battery bank.</li>
  <li>Starting batteries kept charged by a trickle charger from main power, and also charged by the emergency generator when running.</li>
</ul>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional Source of Power:</strong> Batteries supply essential loads (steering gear, nav lights, GMDSS, internal comms, emergency lighting) for a minimum of <span class="n-val">30 minutes</span> while the EG starts. Switchover is <strong>automatic — no manual action required</strong>.</div></div>
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

<div class="n-h1" id="s-surveyorqa-extra">🎤 Additional Surveyor Q&amp;A — Switchboard & CB</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal, Kamath, Vishwanathan):</strong> How does an ACB extinguish the arc when opening?<br><strong>Ideal Answer:</strong> When contacts open, an arc forms. Magnetic force from the arc current drives the arc upward into the arc chutes. The chutes have insulating splitter plates that divide the arc into multiple shorter series arcs. Each shorter arc has its own voltage drop, so the total arc voltage exceeds the supply voltage — the arc cannot sustain and extinguishes. The arc (arcing) contacts open last after the main contacts, so they take the arc damage and protect the main contacts. The arc-chute material absorbs and dissipates heat, the ionised gases cool and de-ionise. The whole process takes milliseconds.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the difference between ACB service, test and isolated position?<br><strong>Ideal Answer:</strong> SERVICE — fully plugged in, power contacts connected to busbars, control circuits connected, carries load. TEST — racked back halfway, power contacts disconnected from busbars (no supply to breaker) but control circuits remain connected, allowing protection relay injection testing without energising the power circuit. ISOLATED — fully withdrawn, both power and control circuits disconnected, for full maintenance.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is the NVC / UVT on an ACB?<br><strong>Ideal Answer:</strong> The No Voltage Coil (NVC) / Under-Voltage Trip (UVT) is a continuous-duty coil in the operating mechanism. It holds the ACB closed while control voltage is present. If control voltage is lost, the coil de-energises, the latch releases and the ACB trips open automatically. Purpose: it is a fail-safe — if control power fails the breaker opens safely, and it prevents the ACB re-closing automatically after a blackout, so the operator must manually reclose (no uncontrolled automatic restart).</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (ALL surveyors):</strong> What is the reverse power relay and how is it tested?<br><strong>Ideal Answer:</strong> It trips the generator ACB when the generator absorbs power from the busbar (prime mover failed — generator being motored). Without it the engine is mechanically damaged running without combustion/lubrication. Setting: <span class="n-val">5–10%</span> rated kW reverse, <span class="n-val">3–5 second</span> delay. Testing: inject a simulated reverse power signal (voltage + current at correct phase angle) into the relay with ACB in test position using a power relay test set; or observe relay operation during shore-power transfer. Verify it operates at the set value and trips the ACB.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Kamath):</strong> Why is under-frequency protection important?<br><strong>Ideal Answer:</strong> Frequency drops when the generator is overloaded and the prime mover slows. At low frequency all motors slow (synchronous speed ∝ frequency), pumps and fans lose flow causing overheating; transformers overheat because V/f increases and the iron core saturates; navigation and control systems may malfunction. The relay acts in stages: <span class="n-val">48 Hz</span> alarm, <span class="n-val">47 Hz</span> preferential trip sheds non-essential loads, <span class="n-val">45 Hz</span> generator ACB trips. This prevents cascading failure. SOLAS requires frequency recovery within <span class="n-val">±5%</span> in <span class="n-val">5 seconds</span>.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> How do you test an overcurrent relay by secondary injection?<br><strong>Ideal Answer:</strong> Rack ACB to TEST position; disconnect CT secondary leads from the relay; connect the secondary injection test set to the relay current input; inject at multiples of set value (1.05×, 2×, 5×, 10×); record trip time at each multiple and compare against the IDMT curve in the manual; verify the relay output operates the trip coil; reconnect the CT secondary; rack to service; record all results with test-set calibration details.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a bus tie breaker and when is it used?<br><strong>Ideal Answer:</strong> The BTB connects two separate MSB sections. Normally OPEN for maximum fault isolation. Closed when one generator cannot handle its section load, during generator transfer between sections, or in emergency when a section loses its generator (close BTB to feed it from the other section). Large ships run split for security.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Anil Deswal):</strong> What is a group starter panel and what do the colours mean?<br><strong>Ideal Answer:</strong> A Motor Control Centre housing multiple motor starters in one enclosure with common busbars. Each unit has a fuse, contactor, overload relay and control circuit. IEC 60073 colours: GREEN lamp = motor stopped (safe), RED = motor running, AMBER = fault/alarm, WHITE = power available, BLUE = mandatory action/auto mode. Push buttons: GREEN = start, RED = stop/emergency stop. Advantages: centralised control, easier maintenance, compact, supports remote/UMS operation.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid — Ratings:</strong> "<strong>In</strong> for <strong>N</strong>ormal, <strong>Icu</strong> for <strong>Cu</strong>t-off (breaking), <strong>Ue</strong> for <strong>U</strong>se voltage, <strong>Ui</strong> always higher for <strong>I</strong>nsulation."</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
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

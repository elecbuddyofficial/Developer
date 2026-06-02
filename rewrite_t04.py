import os

t04_html = r'''window.loadNotes("T04", `<div class="view" id="view-notes-t04">
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
'''

with open('data/notes/t04_notes.js', 'w', encoding='utf-8') as f:
    f.write(t04_html)
print("t04 written successfully")

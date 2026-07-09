window.loadNotes("T04", `<div class="view" id="view-notes-t04">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T04')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 04 - Switchboard &amp; Circuit Breakers</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">ACB &amp; Protection</span>
      <span class="tag tag-purple">Emergency Generator</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-msb-safeties')">MSB Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-acb-ratings')">ACB Ratings</button>
    <button class="anc-btn" onclick="jumpTo('s-acb-maint')">ACB Maint.</button>
    <button class="anc-btn" onclick="jumpTo('s-hrc-fuses')">HRC Fuses</button>
    <button class="anc-btn" onclick="jumpTo('s-diff-relay')">Diff Relay</button>
    <button class="anc-btn" onclick="jumpTo('s-overload-test')">Overload Test</button>
    <button class="anc-btn" onclick="jumpTo('s-revpower-detail')">Reverse Power</button>
    <button class="anc-btn" onclick="jumpTo('s-pref-detail')">Pref Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-dielectric')">Dielectric</button>
    <button class="anc-btn" onclick="jumpTo('s-pi-physics')">PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-battery-sg')">Battery SG</button>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS</button>
    <button class="anc-btn" onclick="jumpTo('s-mcc-detail')">Group Starter</button>
    <button class="anc-btn" onclick="jumpTo('s-esb-location')">ESB Location</button>
    <button class="anc-btn" onclick="jumpTo('s4-msb-esb-interlock')">MSB–ESB Interlock</button>
    <button class="anc-btn" onclick="jumpTo('s-emerg-autostart')">Emerg. Gen</button>
    <button class="anc-btn" onclick="jumpTo('s4-pms')">PMS</button>
    <button class="anc-btn" onclick="jumpTo('s4-earth-fault-proc')">Earth Fault</button>
    <button class="anc-btn" onclick="jumpTo('s4-isolated-neutral-v')">Isolated Neutral</button>
    <button class="anc-btn" onclick="jumpTo('s-fire-detector')">Fire Detector</button>
    <button class="anc-btn" onclick="jumpTo('s-msb-survey')">MSB Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══════════════════════════════════════════════════════
       SECTION 1 - MSB SAFETIES (most asked, foundation first)
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-msb-safeties">🛡️ MSB Safeties - Complete List (10)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Asked by ALL surveyors - the single most common switchboard question. Know all 10 by name, purpose, and set value.</strong> Surveyor cross-question: "What happens if reverse power relay is NOT fitted?"</div></div>
  <ol class="n-steps">
    <li><strong>Dead-front panel construction:</strong> Cannot open live panel door - physical or electrical interlock prevents access to live busbars. Contact with live parts impossible during normal operation.</li>
    <li><strong>IDMT Over-current relay (OCR):</strong> Inverse Definite Minimum Time - trips faster for higher fault current. Set at <span class="n-val">~110%</span> rated generator current. Protects busbars, cables, and ACBs from sustained overcurrent and short circuit.</li>
    <li><strong>Under-voltage (UV) trip relay:</strong> Trips generator ACB when bus voltage falls below <span class="n-val">~85%</span> rated. Prevents the alternator being driven as a motor on voltage collapse. Time delay: <span class="n-val">1–3 s</span> to ride through transient dips.</li>
    <li><strong>Reverse power relay:</strong> Detects power flow FROM busbar INTO generator (wattmetric principle - CT + PT give power direction). Trips ACB. Prevents motoring of alternator when prime mover fails. Setting: <span class="n-val">5–10%</span> rated kW; delay <span class="n-val">3–5 s</span>.</li>
    <li><strong>Earth fault indicator (IRM / lamp system):</strong> Three lamps wired in star between phases and hull. Normal = all glow equally. Fault = earthed-phase lamp dims, other two brighten. IRM (Insulation Resistance Monitor) gives continuous digital readout - alarm below <span class="n-val">50 kΩ</span>.</li>
    <li><strong>Bus-tie (BTB) interlock:</strong> Prevents incorrect sections being paralleled without synchronisation. Ensures only synchronised buses connect. Prevents circulating currents and fault propagation across sections.</li>
    <li><strong>Preferential trip relay:</strong> Sheds non-essential loads sequentially in stages when generator nears overload - prevents total blackout by shedding lowest-priority circuits first.</li>
    <li><strong>Standby auto-start interlock:</strong> Automatically starts standby generator on overload or main generator failure - prevents single-point blackout. Energises after a <span class="n-val">3–5 s</span> confirmed bus-low delay.</li>
    <li><strong>Emergency stop push button:</strong> Red guarded button, trips ALL generator ACBs simultaneously for complete emergency MSB shutdown. One per panel section.</li>
    <li><strong>Overvoltage relay:</strong> Trips generator ACB if output voltage exceeds <span class="n-val">~110%</span> rated - protects all connected equipment from voltage surge (AVR failure, sudden load throw-off).</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - 10 Safeties:</strong> <span style="color:var(--cyan)">D</span>ead · <span style="color:var(--cyan)">O</span>CR · <span style="color:var(--cyan)">U</span>V · <span style="color:var(--cyan)">R</span>everse · <span style="color:var(--cyan)">E</span>arth · <span style="color:var(--cyan)">B</span>TB · <span style="color:var(--cyan)">P</span>ref · <span style="color:var(--cyan)">S</span>tandby · <span style="color:var(--cyan)">E</span>-stop · <span style="color:var(--cyan)">O</span>vervoltage - <strong>"DO UREBT PSEo"</strong> or just rattle them in order.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor trap:</strong> "What happens if the reverse power relay is not fitted?" Answer: When the prime mover loses fuel and stalls, the live busbar drives the generator as a synchronous motor. The engine rotates without combustion - no lubrication pressure build-up from the engine itself - resulting in crankshaft, bearing, and turbocharger damage. Additionally, the spinning engine can cause a fire hazard from unburned fuel/lube oil. The relay trips the ACB instantly to break this motoring condition.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 2 - ACB RATINGS
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-acb-ratings">⚙️ ACB Ratings - IEC Nameplate Symbols</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Surveyors expect you to read and explain every symbol on an ACB nameplate. These are IEC 60947-2 standard designations.</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">In - Normal Current Rating</div>
      <div class="card-desc">Continuous current the ACB can carry indefinitely without overheating at rated ambient temperature. This is the value stamped on the frame, e.g. <span class="n-val">1600 A</span>.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Icu / Ics - Breaking Capacity</div>
      <div class="card-desc"><strong>Icu</strong> = ultimate short-circuit breaking capacity (kA) - maximum fault current ACB can interrupt once without guaranteed repeat performance. <strong>Ics</strong> = service breaking capacity = % of Icu the breaker can repeat in service. Must exceed prospective short-circuit current at the busbar.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Ue - Rated Operational Voltage</div>
      <div class="card-desc">Maximum voltage for continuous normal switching operation, e.g. <span class="n-val">440 V AC</span>, 50 Hz. ACB must not be operated on a higher voltage system.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Ui - Rated Insulation Voltage</div>
      <div class="card-desc">Maximum voltage the insulation can withstand - always <strong>higher than Ue</strong>. Defines the dielectric test voltage. On 440 V ACBs, Ui is typically <span class="n-val">600–1000 V</span>.</div>
    </div>
    <div class="n-card" style="border-color:rgba(167,139,250,.4)">
      <div class="card-title" style="color:var(--purple)">Uimp - Rated Impulse Withstand Voltage</div>
      <div class="card-desc">Peak impulse voltage the ACB can withstand without flashover - relevant for lightning surges and switching transients. Expressed in kV, e.g. <span class="n-val">8 kV</span>.</div>
    </div>
    <div class="n-card" style="border-color:var(--cyan)">
      <div class="card-title" style="color:var(--cyan)">NVC / UVT - No-Volt / Under-Volt Coil</div>
      <div class="card-desc">Holding coil energised when the control supply is healthy. If control supply is lost (blackout, fuse blown), the coil de-energises and the ACB spring-opens automatically. Prevents accidental re-closure onto a dead bus.</div>
    </div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Shunt Trip vs Trip Coil:</strong> The <strong>Shunt Trip (TC)</strong> is an energise-to-trip coil - protection relay output energises it momentarily to fire the latch and spring-open the contacts. The <strong>Close Coil (CC)</strong> is an electromagnet energised to close the main contacts against the closing spring on a close command from the synchroscope panel or PMS. Both are low-voltage (typically 24 V DC or 110 V DC) control circuits, not the 440 V main circuit.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ACB Contact Sequence on Opening (arc quenching - most asked):</strong> Main contacts open first → arcing contacts (silver–tungsten tips) remain closed momentarily so the arc forms on them, not on the main contacts → arcing contacts then open → arc drawn into the arc chute (ceramic splitter plates divide the single arc into many shorter series arcs) → total arc voltage &gt; <span class="n-val">440 V</span> supply → arc extinguishes. The main contacts are protected from erosion by this sequence. Current-zero extinction happens naturally on AC each half-cycle.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-acb-arc-chute.png" alt="ACB arc chute — arc contacts, main contacts, arc runners, ceramic splitter plates">
    <div class="note-diagram-cap">Fig. ACB Arc Chute — arc contact, main contact, arc runner, ceramic splitter plates dividing arc into series arcs</div>
  </div>

  <div class="n-h2">ACB vs MCCB vs NFB - Types of Low-Voltage Circuit Breakers</div>
  <table class="n-table">
    <tr><th>Type</th><th>Full Name</th><th>Current Range</th><th>Ship Application</th></tr>
    <tr><td><strong>ACB</strong></td><td>Air Circuit Breaker</td><td class="hl"><span class="n-val">400 A – 6300 A</span></td><td>Main generators, MSB bus-section, large feeder circuits. Drawout/withdrawable type. Full protection relays (OCR, UV, RP).</td></tr>
    <tr><td><strong>MCCB</strong></td><td>Moulded Case Circuit Breaker</td><td class="hl"><span class="n-val">100 A – 1600 A</span></td><td>Sub-distribution panels, motor feeders, group feeder circuits, and deck machinery (windlass, winch, mooring, bow thruster). Fixed-mounted. Thermal-magnetic trip. Compact design.</td></tr>
    <tr><td><strong>NFB</strong></td><td>No-Fuse Breaker</td><td class="hl">Up to <span class="n-val">~75 A</span></td><td>Small branch circuits, lighting panels, socket outlet circuits, instrumentation supplies. Replaces rewirable fuses in accommodation and utility panels. Thermal-magnetic trip, manual reset.</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Making Capacity (Icm):</strong> The peak current a circuit breaker can close onto without sustaining contact damage - relevant when energising a faulty circuit. This is distinct from <strong>breaking capacity (Icu)</strong> which is the fault current it can interrupt on opening. For AC circuits, the asymmetric making current can be up to <span class="n-val">2.2 × Icu</span> due to the DC offset component in the first half-cycle of a fault. IEC 60947-2 requires Icm ≥ 2.2 × Icu for ACBs.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 3 - ACB MAINTENANCE & ISOLATION
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-acb-maint">🔧 ACB - Routine Maintenance &amp; Isolation Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL - Kamath, ALL surveyors.</strong> Know both the maintenance checklist AND the full 7-step isolation procedure with LOTO.</div></div>

  <div class="n-h2">Routine Maintenance Checklist</div>
  <ul class="n-list">
    <li><strong>Arc chutes:</strong> Remove and inspect ceramic splitter plates - clean carbon deposits with dry cloth and dry compressed air (never use damp cloth - moisture in ceramic = tracking). Replace if plates are cracked or heavily eroded.</li>
    <li><strong>Contact erosion:</strong> Measure arcing contact wear using manufacturer's wear indicator or feeler gauge. Replace contacts before minimum thickness reached - typically at <span class="n-val">50%</span> erosion limit.</li>
    <li><strong>Main contact resistance:</strong> Use micro-ohmmeter (DLRO) across closed contacts - should be &lt;<span class="n-val">100 µΩ</span>. High resistance = pitting, oxidation, poor pressure - leads to thermal hotspot.</li>
    <li><strong>Lubricate operating mechanism:</strong> Apply manufacturer-specified grease (usually silicone or lithium-based) to pivot pins, latch mechanism, and racking rail. Never use petroleum-based grease near arc chutes.</li>
    <li><strong>Test trip coils (secondary injection):</strong> Inject known current into OCR secondary terminals - verify relay operates at correct set current and the trip coil fires to open the ACB.</li>
    <li><strong>Check arc extinction plates alignment:</strong> Plates must be parallel and evenly spaced. Misaligned plates allow arc to bypass chute - reduced arc voltage - may fail to extinguish at rated fault current.</li>
    <li><strong>Check racking mechanism:</strong> Test smooth withdrawal from SERVICE → TEST → ISOLATED positions. Verify shutters close when ACB racked out (safety feature - prevents contact with live bus stabs).</li>
    <li><strong>Inspect control wiring and plug connector:</strong> Check for insulation damage, loose pins, corrosion. The multipin control plug connects when ACB is racked in - damage here causes spurious trips or failure to close.</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Secondary injection test (detailed):</strong> Rack ACB to TEST position - power contacts disconnected from bus but control circuit remains connected. Connect relay test set (Omicron CMC, FREJA, or similar) to OCR current input terminals. Inject at 1.05× pickup - relay must NOT trip (verifies lower threshold). Inject at 2×, 5×, 10× pickup - record trip times and compare against the IDMT characteristic curve in the relay manual. Verify the trip output contact operates the ACB shunt trip coil. Reconnect CT secondary leads, rack to SERVICE. Record all values: current injected, trip times at each multiple, relay setting (pickup current and time multiplier), date, test set serial number and calibration date.</div></div>

  <div class="n-h2">ACB Isolation Procedure (7 Steps - LOTO)</div>
  <ol class="n-steps">
    <li><strong>Obtain PTW (Permit to Work):</strong> Inform bridge and C/E. Confirm which ACB and bus section to be isolated. Ensure load is transferred or disconnected.</li>
    <li><strong>Open ACB:</strong> Initiate trip via control panel. Visually confirm contacts are open (position indicator shows OPEN). Confirm bus load has transferred.</li>
    <li><strong>Rack out to ISOLATED position:</strong> Use racking handle to withdraw ACB. Pass through TEST position (control circuit connected, power contacts disconnected) then to ISOLATED (fully withdrawn, power and control both disconnected). Confirm shutters have closed over bus stabs.</li>
    <li><strong>Apply LOTO:</strong> Lock the racking handle in the ISOLATED position with a personal padlock and warning tag. Post "MAN WORKING - DO NOT CLOSE" notice on panel door.</li>
    <li><strong>Test for dead:</strong> Use approved voltage indicator (two-pole tester) to test BOTH sides of the ACB terminals - bus side AND load side. Confirm zero voltage.</li>
    <li><strong>Apply earth clamps:</strong> Connect earthing leads to the bus stabs (bus side) to drain any capacitive charge. Confirm visible earths in place.</li>
    <li><strong>Proceed with work:</strong> Begin maintenance. On completion, reverse steps: remove earth clamps → remove LOTO → rack to TEST → rack to SERVICE → close ACB → verify load restored → sign off PTW.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ACB positions - surveyor will ask:</strong> SERVICE = fully racked in, power and control circuits connected, ACB ready for operation. TEST = racked to intermediate position, power contacts disconnected from busbars, control circuit connected - used for relay testing without busbar exposure. ISOLATED = fully racked out, both power and control disconnected, shutters closed - used for maintenance. A padlock must be applied in the ISOLATED position.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 4 - HRC FUSES
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-hrc-fuses">⚡ HRC Fuse Types - Rewirable vs Cartridge vs HRC</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Sanjib - difference between fuse types. Never use rewirable on 440 V MSB feeder. Know HRC internals.</strong></div></div>
  <table class="n-table">
    <tr><th>Type</th><th>Current Rating</th><th>Breaking Capacity</th><th>Ship Use</th></tr>
    <tr>
      <td><strong>Rewirable (Kit-Kat)</strong></td>
      <td class="bad">Unknown - depends on wire gauge inserted; inaccurate, variable</td>
      <td class="bad">Low - unsafe for high fault current. No arc quench.</td>
      <td class="bad">Domestic / low-voltage ONLY. <strong>NEVER on MSB feeders.</strong></td>
    </tr>
    <tr>
      <td><strong>Cartridge</strong></td>
      <td class="hl">Known - printed on body. Fixed but not calibrated silver element.</td>
      <td class="bad">Low to medium - may not safely interrupt high ship fault current.</td>
      <td>Small panel distribution circuits, control panel protection.</td>
    </tr>
    <tr>
      <td><strong>HRC (High Rupturing Capacity)</strong></td>
      <td class="ok">Stamped on end cap - accurate, factory-calibrated, repeatable.</td>
      <td class="ok"><span class="n-val">80–100 kA</span> - safely interrupts highest ship fault currents without explosive failure.</td>
      <td class="ok">MSB feeders, motor feeders, transformer primaries, HV protection.</td>
    </tr>
  </table>

  <div class="n-h2">HRC Fuse - Internal Construction</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Body</div>
      <div class="card-desc">High-purity ceramic or glass tube - withstands the explosive arc pressure at fault clearance. Does not shatter.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Fuse Element</div>
      <div class="card-desc">Silver element with calibrated notches - notches are precision-machined to control the blow point. Silver chosen for: low resistance (no heating at normal current), vaporises cleanly at fault current without explosive fragmentation.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Arc Quench Filler</div>
      <div class="card-desc">Silica (quartz) sand tightly packed around the element. When element vaporises, silica sand absorbs the arc energy and the silicon vaporises into silica dioxide - completely extinguishing the arc. No gas pressure build-up.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Operation Speed</div>
      <div class="card-desc">Current-limiting: operates in <span class="n-val">0.25–3 cycles</span> - interrupts fault BEFORE current reaches its first peak (prospective peak). Limits the let-through current and I²t energy, minimising damage to switchgear and cables downstream.</div>
    </div>
  </div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal, Sanjib): What type of fuse is used on 440 V ship circuits and why?</strong><br><strong>Ideal Answer:</strong> HRC - High Rupturing Capacity fuse. Rated current stamped on end cap: accurate and repeatable. Breaking capacity 80–100 kA: safely interrupts the highest fault currents on ship without explosive failure. Current-limiting: interrupts fault before current peaks, minimising I²t damage to equipment. Internal silver element with notched cross-section for controlled blow point; silica sand filler to quench the arc. Non-replaceable after operation - entire fuse unit replaced. Rewirable fuses must NEVER be used on MSB feeders: inaccurate current rating, low breaking capacity, unsafe for high fault levels.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-hrc-fuse.png" alt="HRC fuse cross-section — brass end cap, silver fuse element with notches, silica sand filler, ceramic body">
    <div class="note-diagram-cap">Fig. HRC Fuse — ceramic body, silver element (notched), silica sand arc quench filler, brass end caps</div>
  </div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 5 - DIFFERENTIAL, OVERLOAD & OCR RELAYS
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-diff-relay">🔁 Protection Relays - Overload vs OCR vs Differential</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Common surveyor confusion trap - know all three types: principle, what it protects, speed, where fitted.</strong></div></div>
  <table class="n-table">
    <tr><th>Relay Type</th><th>Principle</th><th>Protects Against</th><th>Speed</th><th>Fitted On</th></tr>
    <tr>
      <td><strong>Overload relay (thermal bimetallic)</strong></td>
      <td>Bimetallic strip heated by load current - bends at set temperature and trips the contactor.</td>
      <td class="hl">Sustained overload - overcurrent &lt;10× FLA. Motor winding over-temperature.</td>
      <td class="bad">Slow - thermal time constant matches motor heating curve. Minutes for small overloads.</td>
      <td>Motor starters (group starter / MCC). Protects motor windings.</td>
    </tr>
    <tr>
      <td><strong>OCR - IDMT</strong></td>
      <td>CT samples line current → relay coil → IDMT characteristic: inverse time vs current. Faster at higher multiples of setting.</td>
      <td class="hl">Fault current and heavy overcurrent. Graded selectivity across multiple zones.</td>
      <td class="ok">Fast at high multiples - &lt;<span class="n-val">100 ms</span> at 10× set; seconds at 1.5× set.</td>
      <td>MSB busbars, cable feeders, generator ACB protection.</td>
    </tr>
    <tr>
      <td><strong>Differential relay</strong></td>
      <td>CTs at both ends of the protected zone compare IN current vs OUT current. Internally: operate coil (IN − OUT) vs restraint coil (IN + OUT). Internal fault: IN ≠ OUT → imbalance current → operates.</td>
      <td class="ok">Internal faults: earth fault, winding-to-winding short, stator phase fault, low-level insulation breakdown not detectable by OCR.</td>
      <td class="ok">Very fast - no intentional time delay. Detects even small internal faults (&lt;10% rated current).</td>
      <td>Large generators (&gt;500 kVA), large transformers, main busbars (busbar protection).</td>
    </tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fuse vs OCR - key difference:</strong> A fuse is sacrificial (single-use) - operates once and must be replaced. An OCR is a relay that resets after fault clearance - reusable and adjustable. Both may be present in the same circuit: HRC fuse provides backup short-circuit protection; OCR provides time-graded overload and fault protection with selectivity. The fuse rating must be higher than the OCR setting for correct coordination - fuse catches extreme faults, OCR handles sustained overloads.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: What is a differential relay and how does it differ from a fuse?</strong><br><strong>Ideal Answer:</strong> A differential relay monitors current flowing INTO a protected zone (generator, transformer, busbar section) via CTs at the entry points, and current flowing OUT via CTs at the exit. Under normal conditions IN = OUT. If there is an internal fault - earth fault, winding short, insulation breakdown inside the zone - current leaks internally: IN ≠ OUT. The relay operates immediately with no delay. It detects very small internal faults (as low as 5–10% rated current) that would not cause enough current to blow a fuse or operate an OCR. A fuse only responds to overcurrent from any cause - it cannot distinguish internal from external faults, and cannot detect low-level internal faults. Differential relay is used for large generators, large transformers, and main busbars where early internal fault detection is critical to prevent winding damage.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-differential-protection.png" alt="Merz-Price differential protection — star CTs at generator terminals, pilot wires, relay coil, operate/restraint windings">
    <div class="note-diagram-cap">Fig. Merz-Price Differential Protection — CTs at both ends, pilot wires, operate coil (IN−OUT), restraint coil (IN+OUT)</div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-ct-pt-connection.png" alt="CT and PT connection to protection relay — CT in series with load, PT in parallel with busbar, relay inputs">
    <div class="note-diagram-cap">Fig. CT &amp; PT Connections to Relay — CT (series, 5 A secondary to relay current coil); PT (parallel, stepped-down voltage to relay voltage coil); basis of OCR, differential and reverse-power relays</div>
  </div>

  <!-- ═══════════════════════════════════════════════════════
       SECTION 6 - OVERLOAD TEST PROCEDURE
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-overload-test">🔧 Overload Test Procedure - Generator OCR</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal: "How do you do an overload test on the generator OCR?" Secondary injection method is the standard answer. Know all 10 steps.</strong></div></div>

  <div class="n-h2">Secondary Injection Method (Preferred - No Actual Overload on System)</div>
  <ol class="n-steps">
    <li><strong>Obtain PTW:</strong> Permit to Work. Inform bridge and Chief Engineer before any relay testing. Confirm a standby generator is available in case of accidental trip.</li>
    <li><strong>Rack ACB to TEST position:</strong> Power contacts disconnected from busbars; control circuits remain connected. Generator not loaded - no risk of interrupting supply.</li>
    <li><strong>Isolate OCR trip circuit or use test block:</strong> Either open the trip circuit link (to prevent an accidental ACB trip during current injection) or use a dedicated test block that automatically isolates the trip coil when inserted.</li>
    <li><strong>Connect relay test set</strong> (e.g. Omicron CMC 256, FREJA 300) to the OCR current input terminals. Verify polarity and phase angle connections are correct before injection.</li>
    <li><strong>Inject 1.05× pickup current</strong> - relay must NOT trip. Verifies the lower threshold is correct and relay does not operate spuriously on minor overloads.</li>
    <li><strong>Inject 2× pickup current</strong> - measure time to trip with stopwatch or test set timer. Compare with IDMT characteristic curve (TMS × standard IDMT formula) in relay datasheet.</li>
    <li><strong>Inject 5× and 10× pickup</strong> - record trip times at each multiple. At 10× the trip should be very fast (&lt;100 ms). Verify IDMT curve shape is correct, not just the pickup point.</li>
    <li><strong>Re-engage trip circuit</strong> and verify trip output: close the trip link, inject current again at 2× - confirm relay output contact operates the ACB trip coil (ACB springs open to OPEN position).</li>
    <li><strong>Reconnect CT secondary leads</strong>, confirm correct polarity. Rack ACB to SERVICE. Remove test set and all test leads. Confirm ACB closes and generator resumes normal operation.</li>
    <li><strong>Record and sign:</strong> Log current injected, trip time at each multiple, relay settings (pickup current in A, time multiplier setting), date, test set serial number and calibration due date, surveyor witness signature if applicable. File in PMS/electrical maintenance log.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Alternative - Load bank test:</strong> Connect calibrated load bank to generator. Increase load beyond rated kW. Verify OCR trips ACB at set value within expected time. Less precise than secondary injection - actual system loads vary, ambient temperature affects thermal relays. Only used where relay test equipment is unavailable or for functional system-level verification.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>IDMT reminder:</strong> Inverse Definite Minimum Time - trips faster for higher multiples of set current. Formula: t = (TMS × K) / (M^α − 1) where M = I/Iset. Standard IEC: K = 0.14, α = 0.02. At 2× set: slow trip (seconds). At 10× set: very fast (&lt;100 ms). The entire curve shape must be verified, not just the pickup point.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Deswal): How do you do an overload test on the generator OCR?</strong><br><strong>Ideal Answer:</strong> Secondary injection method. Rack ACB to test position. Connect relay test set (Omicron/FREJA) to OCR current terminals. Inject at 1.05× pickup - relay must not trip. Inject at 2×, 5×, 10× - record trip times and compare against IDMT characteristic curve. Re-engage trip circuit, verify output operates ACB. Reconnect CT secondary, rack to service. Record all values with date and witness signature. The IDMT curve shape, not just the pickup, must be verified.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 7 - REVERSE POWER RELAY
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-revpower-detail">🔁 Reverse Power Relay - Causes, Principle &amp; Testing</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath - 5-star frequency. Understand wattmetric principle, setting values, time delay reason, and all three test methods.</strong></div></div>

  <div class="n-h2">What Causes Reverse Power Flow</div>
  <ul class="n-list">
    <li>Prime mover (diesel engine) fuel supply fails or the trip solenoid fires - engine slows and stalls.</li>
    <li>Engine governor malfunction closes the fuel rack to zero - engine decelerates while still connected to the live bus.</li>
    <li>Coupling failure between engine crankshaft and generator rotor - generator coasts freely on the busbar.</li>
    <li>In all cases: the generator field is still excited, bus voltage keeps the machine synchronised - busbar drives it as a synchronous motor. Power direction reverses: FROM bus INTO generator stator.</li>
  </ul>

  <div class="n-h2">Wattmetric Principle (how relay detects direction)</div>
  <div class="n-p">The reverse power relay uses a <strong>directional wattmeter</strong> circuit. A CT measures the stator current; a PT measures the bus voltage. The relay multiplies V × I × cos φ. During normal generation, this product is positive (power flows OUT). When the machine motors, the phase angle between V and I shifts by ~180° - the product becomes negative. The relay trips the ACB when the negative power exceeds the set threshold, which is expressed as a percentage of rated generator kW.</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Typical Setting</div>
      <div class="card-desc"><span class="n-val">5–10%</span> of rated generator kW. Set low enough to detect motoring before serious engine damage, but high enough to ignore normal power swings during load transfer.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Time Delay</div>
      <div class="card-desc"><span class="n-val">3–5 seconds</span> intentional delay. Reason: during synchronising, brief reverse power can flow as the incoming generator comes onto the bus. Without delay, relay would trip at every synchronisation. The delay rides through this transient.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Why Not an OCR?</div>
      <div class="card-desc">An OCR only detects magnitude of current - cannot determine power direction. When motoring, current magnitude is normal (engine draws only no-load power from bus). OCR would not trip. Only a directional power relay (wattmetric) detects the phase angle reversal.</div>
    </div>
  </div>

  <div class="n-h2">Three Testing Methods</div>
  <table class="n-table">
    <tr><th>Method</th><th>How It Works</th><th>Notes</th></tr>
    <tr>
      <td class="hl"><strong>1. Secondary injection (preferred)</strong></td>
      <td>ACB in TEST position. Apply rated voltage from PT and inject current at the correct phase angle (lagging ~170–175°, i.e. nearly anti-phase) from a relay test set. Verify relay operates at set power %.</td>
      <td>Safe - no real load. Most accurate. Verifies exact phase angle threshold.</td>
    </tr>
    <tr>
      <td class="hl"><strong>2. During shore power transfer</strong></td>
      <td>When ship switches from generators to shore supply, a brief reverse power may flow as the generator backs down. Note the relay reading and confirm it operates within set delay.</td>
      <td>Opportunistic - good for functional verification during planned transfer, not for setting calibration.</td>
    </tr>
    <tr>
      <td class="hl"><strong>3. Specialised power relay test set</strong></td>
      <td>Applies correct voltage and current phasors at the required angle independently of any system state. Most accurate for setting calibration.</td>
      <td>Same as secondary injection but with dedicated equipment that ensures precise phasor relationship.</td>
    </tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Generator turns into a motor." Power direction defines reverse power - not current magnitude. CT + PT + phase-angle multiplication = wattmetric principle. The phasor angle, not just magnitude, is what the relay measures - that is why a standard current-only test set is insufficient; a true power relay test set must apply both V and I at the correct relative angle.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-reverse-power-schematic.png" alt="Reverse power protection schematic — CT, PT, directional wattmetric relay, ACB trip coil">
    <div class="note-diagram-cap">Fig. Reverse Power Protection Schematic — CT + PT inputs, wattmetric relay, trip output to generator ACB</div>
  </div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-reverse-power-relay.png" alt="Reverse power relay internal — operating coil, voltage coil, disc, contacts">
    <div class="note-diagram-cap">Fig. Reverse Power Relay — voltage coil, current coil, directional disc, trip contact, time-delay setting</div>
  </div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 8 - PREFERENTIAL TRIP
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pref-detail">⚖️ Preferential Trip - Stage Details &amp; Dashpot</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Wad - know both stages, the dashpot mechanism, the NEVER shed list, and what happens if the relay malfunctions.</strong></div></div>
  <table class="n-table">
    <tr><th>Stage</th><th>Trigger</th><th>Loads Shed</th><th>Delay</th></tr>
    <tr>
      <td><strong>Stage 1</strong></td>
      <td>Generator load reaches <span class="n-val">~90%</span> rated kW</td>
      <td>Galley ovens, water heaters, laundry machines (non-essential domestic loads). Highest connected load that can be dropped without affecting safety.</td>
      <td class="hl"><span class="n-val">5–10 seconds</span> dashpot delay - allows transient motor starting surges to pass.</td>
    </tr>
    <tr>
      <td><strong>Stage 2</strong></td>
      <td>Load remains above <span class="n-val">~95%</span> rated kW after Stage 1 shedding</td>
      <td>Accommodation ventilation fans, remaining non-essential HVAC, deck machinery not in active use.</td>
      <td class="hl"><span class="n-val">Additional 5–10 seconds</span> after Stage 1. Staged to avoid shedding too much too fast.</td>
    </tr>
    <tr>
      <td class="bad"><strong>NEVER shed (any stage)</strong></td>
      <td>—</td>
      <td class="bad">Navigation lights, steering gear motor, fire pump, bilge pump, GMDSS, emergency lighting, fire detection system, sprinkler pump, internal communications.</td>
      <td>—</td>
    </tr>
  </table>

  <div class="n-h2">Dashpot Mechanism - Construction &amp; Operation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Surveyor's favourite cross-question on preferential trip: "How does the dashpot work?"</strong><br>
  <strong>Construction:</strong> A vertical cylinder containing a piston attached to the relay contact arm. The space above and below the piston contains oil (hydraulic dashpot) or air (pneumatic dashpot). A needle valve with an adjustable orifice controls the fluid flow rate between chambers.<br>
  <strong>Operation:</strong> When the overload condition is detected, the relay armature tries to close the trip contact. The piston is attached to the armature - as the armature moves, the piston must displace fluid through the needle valve orifice. A narrow orifice restricts flow → slow piston movement → longer delay. A wider orifice allows faster flow → shorter delay. <br>
  <strong>Why the delay is needed:</strong> Motor starting current can reach 6–8× FLC for 5–10 seconds. Without the dashpot delay, the preferential trip relay would shed loads every time a large motor starts, even though the starting current is transient and harmless. The dashpot allows these transient surges to pass through - only a sustained overload (lasting longer than the dashpot delay time) triggers load shedding.<br>
  <strong>Modern alternative:</strong> Electronic digital timer relay - digitally set time delay, no mechanical wear, no oil leakage risk, easier calibration verification.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q (Kamath): Each generator is tripping as soon as it comes on load and the preferential trip keeps operating - what do you do?</strong><br><strong>Answer:</strong> (1) Check for a sustained busbar fault (short circuit) - if confirmed, isolate the faulted section first. (2) Inspect preferential trip relay settings - a misset dashpot (too narrow orifice) or wrong current threshold may cause premature shedding. Reset to correct values. (3) Manually take all large motors to local manual control; start them one by one (not simultaneously) to avoid combined starting current surge. (4) Verify that all non-essential loads have actually dropped off - check that contactor coils have released. (5) Start generators in sequence - allow first generator to stabilise on load before connecting second. (6) If problem persists, check generator ACB trip settings, OCR pickup level, and whether any motor downstream has a fault (seized bearing, locked rotor) causing a sustained heavy current.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 9 - DIELECTRIC STRENGTH
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-dielectric">⚡ Dielectric Strength - ACB vs VCB vs SF₆</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why VCB and SF₆ are used for HV, not ACB:</strong> Dielectric strength determines how well a medium resists electrical breakdown (arc formation) per unit distance across the open contacts.</div></div>
  <table class="n-table">
    <tr><th>Medium</th><th>Dielectric Strength</th><th>Arc Quench Mechanism</th><th>Application</th></tr>
    <tr>
      <td><strong>Air (ACB)</strong></td>
      <td class="bad"><span class="n-val">2–3 kV/mm</span></td>
      <td class="bad">Arc chute + ceramic splitter plates. Air ionises easily under arc energy. Needs large physical separation distances.</td>
      <td>LV systems up to <span class="n-val">1000 V AC</span>. Impractical at HV due to physical size.</td>
    </tr>
    <tr>
      <td><strong>Vacuum (VCB)</strong></td>
      <td class="ok"><span class="n-val">8–10 kV/mm</span></td>
      <td class="ok">No gas molecules to ionise - arc extinguishes at the first natural current zero. Contacts only need small separation (~8–10 mm). Very fast, clean interruption.</td>
      <td>HV systems <span class="n-val">3.3–33 kV</span> on ships and shore. Standard for 6.6 kV ship HV switchboard.</td>
    </tr>
    <tr>
      <td><strong>SF₆ gas (at ~4 bar pressure)</strong></td>
      <td class="ok"><span class="n-val">~89 kV/mm</span> at 4 bar</td>
      <td class="ok">SF₆ is electronegative - captures free electrons, suppressing arc formation. Approximately 2.5× improvement per additional atmosphere of pressure. At 4 bar: ~30× better than air.</td>
      <td>Very high voltage &gt;<span class="n-val">33 kV</span>, GIS (Gas-Insulated Switchgear) substations. Not common on ships below 11 kV.</td>
    </tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why ACB is limited to LV systems:</strong> At 6.6 kV, the arc energy is roughly (6600/440)² ≈ 225 times higher than at 440 V. Air cannot quench this arc - it ionises and sustains, potentially rupturing the breaker housing explosively. VCB is the standard solution for 6.6 kV ship HV switchboards - the vacuum bottle seals at the factory and has no gas handling requirement. SF₆ requires gas handling procedures (SF₆ is a potent greenhouse gas - GWP = 23,900) and is reserved for extreme voltages or compact GIS installations.</div></div>
  <div class="n-formula">Arc energy ratio (6.6 kV vs 440 V) = (6600 ÷ 440)² = 15² = <span class="n-val">225×</span> higher - impossible to quench with air</div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 10 - PI TEST
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pi-physics">📈 PI Test - Why 10 Minutes (3-Component Current)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask why we wait 10 minutes for a PI test.</strong> Must explain all three current components and why absorption current matters.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Three components of current during a DC insulation test (megger test):</strong><br><br>
  <strong>1. Capacitive current (Ic):</strong> Decays in seconds - the initial charge surge as the insulation capacitance charges to the applied DC voltage. Falls to near-zero within 10–30 seconds. This component has nothing to do with insulation quality - it is purely a geometric effect of the conductor-insulation-earth capacitor.<br><br>
  <strong>2. Absorption current (Ia) - dielectric polarisation:</strong> Decays slowly over minutes - caused by molecular dipoles in the insulation material (e.g. PVC, XLPE, impregnated paper) aligning to the applied electric field (dielectric polarisation). In good, dry insulation, this polarisation is strong and the dipoles take ~10 minutes to fully align - so this current is large and takes time to decay. In wet or degraded insulation, contamination disrupts the molecular structure - the polarisation effect is reduced and the absorption current is small, decaying quickly.<br><br>
  <strong>3. True (conductive) leakage current (Il):</strong> Constant throughout - represents actual current flowing through the bulk insulation resistance. This is the only component that reflects true insulation quality. It remains constant once capacitive and absorption currents have decayed.<br><br>
  <strong>Why 10 minutes specifically:</strong> At t = 1 minute, absorption current is still significant - the measured resistance is artificially low (IR reading depressed). By t = 10 minutes, absorption current has mostly decayed - the reading approaches the true leakage resistance. Therefore:<br>
  PI = IR(10 min) / IR(1 min)<br>
  A high PI ratio means absorption current was large (strong dipole alignment = good dry insulation). A low PI ratio means absorption current was small = wet or degraded insulation.</div></div>

  <div class="n-h2">PI Acceptance Values</div>
  <table class="n-table">
    <tr><th>PI Value</th><th>Assessment</th><th>Action</th></tr>
    <tr><td class="bad">&lt; 1.0</td><td class="bad">Dangerous - insulation completely degraded or wet</td><td class="bad">DO NOT energise - isolate, dry out, investigate</td></tr>
    <tr><td class="hl">1.0 – 2.0</td><td class="hl">Questionable - moderate contamination or moisture</td><td class="hl">Dry out, retest before energising</td></tr>
    <tr><td class="ok">2.0 – 4.0</td><td class="ok">Good - dry, healthy insulation</td><td class="ok">Acceptable for service</td></tr>
    <tr><td class="ok">&gt; 4.0</td><td class="ok">Excellent - very dry, new or like-new insulation</td><td class="ok">Ideal - no action needed</td></tr>
  </table>
  <div class="n-formula">PI = IR(10 min) / IR(1 min) &nbsp;→&nbsp; Good insulation: <span class="n-val">PI ≥ 2.0</span></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Think of insulation molecules as tiny compass needles. Good insulation = disciplined needles that line up slowly in the electric field (large absorption current). Wet insulation = disordered needles that barely respond (small absorption current, low PI). If the needles respond well, the insulation is healthy.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-pi-test-curve.png" alt="PI test curve — IR vs time graph showing clean insulation rising steeply vs contaminated staying low">
    <div class="note-diagram-cap">Fig. PI Test Curve — IR(MΩ) vs time(min); clean/dry insulation rises steeply; wet/contaminated insulation stays flat</div>
  </div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 11 - BATTERY SG
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-battery-sg">🔋 Battery SG Thresholds &amp; Testing Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask SG values and battery testing procedure.</strong> Know all thresholds and the 5-step maintenance routine.</div></div>

  <div class="n-h2">Specific Gravity (SG) Hydrometer Thresholds - Lead-Acid</div>
  <table class="n-table">
    <tr><th>State of Charge</th><th>SG Reading</th><th>Action</th></tr>
    <tr>
      <td>Fully charged</td>
      <td class="ok"><span class="n-val">1.260 – 1.280</span></td>
      <td class="ok">Normal - no action required</td>
    </tr>
    <tr>
      <td>Half charged</td>
      <td class="hl"><span class="n-val">~1.200</span></td>
      <td class="hl">Recharge soon - plan maintenance window</td>
    </tr>
    <tr>
      <td>Fully discharged</td>
      <td class="bad"><span class="n-val">1.100 – 1.120</span></td>
      <td class="bad">Recharge immediately - risk of permanent sulphation if left discharged (&gt;24–48 hr)</td>
    </tr>
    <tr>
      <td>Inter-cell variation</td>
      <td class="bad">&gt;<span class="n-val">0.050</span> difference between cells in same bank</td>
      <td class="bad">Cell fault - sulphation, internal short, or plate shedding. Investigate that cell. Replace if not recoverable by equalising charge.</td>
    </tr>
    <tr>
      <td>Electrolyte temperature correction</td>
      <td class="hl">±0.007 SG per 10 °C deviation from <span class="n-val">25 °C</span></td>
      <td class="hl">Add 0.007 for each 10 °C above 25 °C; subtract for each 10 °C below. Correct all readings before interpreting.</td>
    </tr>
  </table>

  <div class="n-h2">5-Step Battery Maintenance Procedure</div>
  <ol class="n-steps">
    <li><strong>Check electrolyte level:</strong> Must cover plates by <span class="n-val">10–15 mm</span>. Top up with <strong>distilled water ONLY</strong> - never acid, never tap water (mineral ions cause accelerated sulphation). Top up AFTER charging, not before (charging raises level by gas evolution).</li>
    <li><strong>Check SG of each cell:</strong> Use calibrated hydrometer. Draw and replace electrolyte 2–3 times to flush the hydrometer tube before reading. Record all cell SG values. Flag any cell with SG &gt;0.050 below bank average - indicates that cell has degraded capacity.</li>
    <li><strong>Clean terminal posts:</strong> Remove white/grey sulphate deposits with a wire brush. Wash with dilute bicarbonate of soda solution (neutralises acid). Rinse with clean water, dry thoroughly. Apply thin film of petroleum jelly (Vaseline) to prevent future corrosion and reduce terminal resistance.</li>
    <li><strong>Check terminal torque:</strong> Loose connections cause resistance heating (I²R), voltage drop, and intermittent connections. Retorque to manufacturer's specification. Check for discolouration around terminals (sign of prior heating).</li>
    <li><strong>Equalising charge (if required):</strong> Charge at slightly higher voltage (typically <span class="n-val">2.4 V/cell</span> instead of normal 2.25 V/cell float) for an extended period (4–8 hours). Brings all cells to full capacity and helps dissolve mild sulphation. Only perform if inter-cell variation is detected or after deep discharge - not as routine (overcharging accelerates plate corrosion).</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Sulphation explained:</strong> When a lead-acid battery is left in a discharged state, lead sulphate (PbSO₄) crystals form on the plates. Mild sulphation is reversible with equalising charge. Severe sulphation (crystals large and hard) is permanent - capacity is lost irreversibly. This is why emergency generator starting batteries must be kept on float charge continuously.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 12 - UPS
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ups">🔌 UPS - Uninterruptible Power Supply</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan, Nair ask UPS working principle and bypass switch function.</strong> Know all three types and the purpose of static vs maintenance bypass.</div></div>
  <table class="n-table">
    <tr><th>Type</th><th>How It Works</th><th>Switchover Time</th><th>Ship Use</th></tr>
    <tr>
      <td><strong>Online (Double Conversion)</strong></td>
      <td class="ok">AC → Rectifier → DC bus (batteries) → Inverter → AC output. Load ALWAYS supplied through the inverter - completely isolated from mains transients and interruptions.</td>
      <td class="ok"><span class="n-val">ZERO</span> - no switchover, load is always on inverter.</td>
      <td class="ok">ECDIS, GMDSS, IAS/SCADA, fire alarm panel - any system requiring zero interruption.</td>
    </tr>
    <tr>
      <td><strong>Offline (Standby)</strong></td>
      <td>Load connected directly to mains normally. UPS monitors mains. On mains failure, static switch transfers load to inverter (battery-backed).</td>
      <td class="hl"><span class="n-val">4–12 ms</span></td>
      <td>Less critical circuits that can tolerate brief interruption.</td>
    </tr>
    <tr>
      <td><strong>Line Interactive</strong></td>
      <td>Auto-transformer (or AVR) conditions mains voltage continuously. On mains failure, transfers to battery-backed inverter.</td>
      <td class="hl"><span class="n-val">2–4 ms</span></td>
      <td>Intermediate criticality - bridge communications, alarm systems.</td>
    </tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ship systems supplied by UPS (must not lose memory or power on mains interruption):</strong> ECDIS (voyage data, chart updates), GMDSS (continuous watch requirement, SOLAS Reg. IV), IAS/SCADA (integrated automation system - if IAS loses power, all alarms and monitoring fail), fire alarm panel (must remain active at all times), bridge navigation equipment (AIS, BNWAS, SSAS), alarm monitoring systems, data loggers. SOLAS requires GMDSS to operate for a minimum of <span class="n-val">1 hour</span> on battery (with UPS) or <span class="n-val">6 hours</span> on dedicated batteries without UPS.</div></div>

  <div class="n-h2">Bypass Switches - Static vs Maintenance</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Static Bypass (Automatic)</div>
      <div class="card-desc">Thyristor (SCR) switch - transfers load directly to raw mains within microseconds if the UPS inverter fails (overload, fault, overtemperature). Completely automatic - no human action needed. Transfer is so fast that sensitive loads do not interrupt. Provides redundancy against UPS inverter failure.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Maintenance Bypass (Manual)</div>
      <div class="card-desc">Manual switch that connects load directly to mains, bypassing the entire UPS (rectifier, batteries, inverter, and static bypass). Used only when the UPS must be completely de-energised for servicing (battery replacement, inverter repair). Load continues from mains - with full exposure to mains transients - while UPS is isolated.</div>
    </div>
  </div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Online = always through inverter = zero switchover. Offline = switches on failure = small gap. Static bypass = thyristor = automatic = for UPS fault. Maintenance bypass = manual = for UPS servicing. GMDSS needs UPS because mains can fail in a blackout but radio watch must continue.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-ups-types.png" alt="UPS types diagram — offline, line interactive, online double-conversion with bypass paths">
    <div class="note-diagram-cap">Fig. UPS Types — Offline (standby), Line Interactive, Online (double-conversion); static and maintenance bypass paths shown</div>
  </div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 13 - GROUP STARTER / MCC
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-mcc-detail">🎛️ Group Starter Panel (MCC) - Unit Contents &amp; IEC Lamp Codes</div>

  <div class="n-h2">Contents Per Starter Unit</div>
  <ul class="n-list">
    <li><strong>Incoming fuse or MCB:</strong> Provides short-circuit protection for the starter unit and downstream motor. HRC fuse preferred for high breaking capacity. MCB used for smaller motors (&lt;5.5 kW).</li>
    <li><strong>Main contactor:</strong> Electromagnetic switch - energised by control circuit to switch motor on and off. Heavy-duty silver-alloy contacts rated for repeated switching cycles under load.</li>
    <li><strong>Overload relay (thermal or electronic):</strong> Thermal bimetallic - heats with current and trips if overloaded. Electronic - measures actual RMS current and trips with adjustable curve. Protects motor windings from sustained overcurrent.</li>
    <li><strong>Control circuit (start/stop push buttons or remote control):</strong> 24 V DC or 110 V AC control circuit for safe operator interface. Remote control from ECR for UMS (unmanned machinery space) operation.</li>
    <li><strong>Indication lamps (run / stop / fault):</strong> Colour-coded per IEC 60073 - see table below.</li>
    <li><strong>Remote start/stop from ECR:</strong> Supports UMS (unmanned machinery space) operation with status feedback.</li>
  </ul>

  <div class="n-h2">IEC 60073 Indicator Lamp &amp; Push-button Colour Codes</div>
  <table class="n-table">
    <tr><th>Colour</th><th>Lamp Meaning</th><th>Push Button Function</th></tr>
    <tr><td class="ok"><strong>GREEN</strong></td><td class="ok">Motor STOPPED - safe state, no hazard</td><td>START command</td></tr>
    <tr><td class="bad"><strong>RED</strong></td><td class="bad">Motor RUNNING - hazard / danger present</td><td>STOP or EMERGENCY STOP</td></tr>
    <tr><td class="hl"><strong>AMBER / YELLOW</strong></td><td class="hl">FAULT or ALARM condition - attention needed</td><td>—</td></tr>
    <tr><td><strong>WHITE</strong></td><td>Power available / supply healthy / general information</td><td>—</td></tr>
    <tr><td style="color:var(--blue)"><strong>BLUE</strong></td><td>Mandatory action required / remote-auto mode active</td><td>—</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Common confusion:</strong> Green lamp = STOPPED (safe, no hazard). Red lamp = RUNNING (danger - rotating machinery). This is the OPPOSITE of traffic lights. The logic is: green = safe to approach, red = danger present. Always confirm with the physical machine, not just the panel lamp.</div></div>

  <div class="n-h2">Advantages of Group Starter Panel (MCC)</div>
  <ul class="n-list">
    <li><strong>Centralised control:</strong> All starters in one location (ECR or panel room) - operator does not need to travel to individual motors.</li>
    <li><strong>Easier maintenance:</strong> All starters accessible in one place - contactor replacement, overload relay adjustment without entering confined spaces.</li>
    <li><strong>Compact:</strong> Less deck space than scattered individual motor starters.</li>
    <li><strong>Common busbars:</strong> Efficient power distribution - one busbar feeds multiple starters.</li>
    <li><strong>Interlocking:</strong> Sequencing and interlocking logic easily implemented in the common control panel (e.g. prevent pump start if sea chest valve closed).</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 14 - ESB LOCATION (SOLAS)
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-esb-location">📋 Emergency Switchboard - SOLAS II-1/Reg 42 Location</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/Reg 42 - ESB location requirements. Know all three location criteria and the reason for each.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ESB must be located:</strong>
  <ul class="n-list">
    <li><strong>Above the bulkhead deck (freeboard deck):</strong> Not in the engine room or spaces below the main watertight subdivision deck. Ensures ESB survives flooding scenarios that submerge the main ER.</li>
    <li><strong>Outside all machinery spaces:</strong> Accessible even if fire in the engine room renders the MSB inaccessible, requires the ER to be closed off, or CO₂ flooding is activated.</li>
    <li><strong>In a position readily accessible from the navigation bridge:</strong> For manual operation during emergency when the engine room cannot be entered.</li>
  </ul>
  <strong>Purpose:</strong> If fire in the engine room destroys or makes the MSB inaccessible, the ESB remains operable for all essential services required for safe navigation and survival.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Primary Source</div>
      <div class="card-desc">Emergency generator - must connect within <span class="n-val">45 seconds</span> for cargo ships, <span class="n-val">30 seconds</span> for passenger ships (SOLAS II-1/Reg 42).</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Transitional Source</div>
      <div class="card-desc">Battery or UPS - bridges the gap during the 45-second EG start-up. Must supply essential loads for a minimum of <span class="n-val">30 minutes</span> without any generating source.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Shore Supply</div>
      <div class="card-desc">Shore connection point provided on ESB for in-port use - allows essential services to be powered without running the emergency generator continuously.</div>
    </div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Essential services on ESB (SOLAS II-1/Reg 42):</strong> Emergency lighting throughout ship and in lifeboats; fire pump (dedicated motor); emergency bilge pump; GMDSS radio equipment; navigation lights; general alarm; steering gear (one motor - or transitional source until EG running); sprinkler pump; watertight door operation and position indicators; daylight signalling lamp; internal communications (sound-powered telephone); fire detection and alarm panel.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Where must the Emergency Switchboard be located and why?</strong><br><strong>Ideal Answer:</strong> SOLAS II-1/Reg 42 requires it above the bulkhead deck, outside all machinery spaces, readily accessible from the navigation bridge. The reason: if the main engine room is on fire, the MSB becomes inaccessible - CO₂ may be released, or the ER is sealed. The ESB must remain reachable to supply emergency lighting, fire pump, steering gear, GMDSS, and navigation lights. It is fed by the emergency generator (starts within 45 seconds for cargo ships) with a 30-minute transitional battery source to bridge the startup gap.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Main Switchboard Room (MSR) - what SOLAS / class require:</strong> the MSB is installed with clear working access front and back and <strong>insulating rubber matting</strong> laid front and rear; <strong>dead-front construction</strong> with no exposed live parts; earthed metal framework and handrails behind large boards; <strong>two means of escape</strong> from the space where practicable; <strong>no water, oil or steam pipes running over or close to the board</strong>; adequate lighting (with emergency lighting) and ventilation; and access restricted to authorised persons. These follow SOLAS II-1 (electrical installations) and classification-society rules.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 15 - MSB–ESB INTERLOCK
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s4-msb-esb-interlock">🔗 MSB–ESB Electrical Interlock</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Common surveyor question: "What interlock exists between the main switchboard and emergency switchboard?"</strong></div></div>
  <div class="n-p">The MSB and ESB are connected by a bus-tie cable (MSB–ESB link). Two interlocks prevent dangerous unsynchronised paralleling:</div>
  <ol class="n-steps">
    <li><strong>Anti-parallel interlock (mechanical/electrical):</strong> Prevents simultaneous closing of both the main generator ACB / MSB–ESB link AND the emergency generator ACB together. The main plant generators and the emergency generator must never be paralleled without synchronisation. If both close simultaneously without synchronising, the phase and frequency difference creates a large circulating fault current that can destroy both machines.</li>
    <li><strong>Cross-interlocking logic:</strong> When the ESB bus-tie breaker (linking MSB to ESB) is closed (MSB supplying ESB), the emergency generator ACB is held open by an interlock relay. Conversely, when the emergency generator ACB is closed (EG supplying ESB), the bus-tie breaker is held open. Only ONE source can feed the ESB bus bar at any time.</li>
    <li><strong>Normal (sea) operation:</strong> MSB–ESB link is CLOSED. MSB feeds ESB continuously. Emergency generator is on standby in auto-start mode - ACB open but field maintained at nominal voltage.</li>
    <li><strong>Blackout sequence:</strong> MSB power lost → MSB–ESB link voltage monitoring relay detects bus dead → bus-tie breaker opens → emergency generator auto-starts → after voltage and frequency stabilise (typically 5–15 seconds) → EG ACB closes onto ESB → ESB feeds all essential/emergency loads.</li>
  </ol>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Key rule:</strong> The interlock ensures the MSB–ESB link breaker and the emergency generator ACB can NEVER both be closed simultaneously without synchronisation. This prevents the emergency generator from being connected in phase opposition with the main plant - which would cause a massive circulating current, winding damage, and potentially an explosion in both generators.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 16 - EMERGENCY GENERATOR (SOLAS)
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-emerg-autostart">⏱️ Emergency Generator - Auto-Start Sequence &amp; SOLAS Requirements</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1 Reg 42 &amp; 43.</strong> Cargo ship auto-start within <span class="n-val">45 s</span>; passenger ship within <span class="n-val">30 s</span>. Fuel for <span class="n-val">18 h</span> (cargo) / <span class="n-val">36 h</span> (passenger). EG located <strong>above the bulkhead deck, outside the main ER</strong>, not sharing a common boundary with the ER.</div></div>

  <div class="n-h2">Auto-Start Sequence (Step by Step)</div>
  <ol class="n-steps">
    <li><strong>Trigger:</strong> Voltage monitoring relay on the ESB detects loss of main supply voltage (bus drops below threshold, typically 70% rated, for more than ~0.5 s to avoid spurious starts on transient dips).</li>
    <li>Signal sent to the emergency generator starting system - automatic start initiated without any manual intervention.</li>
    <li>Starting motor (battery-powered, dedicated starting batteries) cranks the emergency diesel engine.</li>
    <li>Engine fires and accelerates to rated speed (<span class="n-val">~1500 RPM or 1800 RPM</span> depending on frequency). This takes approximately <span class="n-val">5–15 seconds</span>.</li>
    <li>Voltage builds to rated (<span class="n-val">440 V / 60 Hz</span> or <span class="n-val">440 V / 50 Hz</span>), frequency stabilises within ±5%. Voltage and frequency relay checks confirm acceptable levels.</li>
    <li>Emergency ACB closes automatically - EG connects to and supplies the emergency switchboard and all essential loads.</li>
    <li>Total elapsed time from blackout to EG on-load: ≤ <span class="n-val">45 seconds</span> (cargo ship). Transitional source (batteries) covers this 45-second window automatically.</li>
  </ol>

  <div class="n-h2">Starting System - Two Independent Means (SOLAS Requirement)</div>
  <ul class="n-list">
    <li><strong>Means 1:</strong> Dedicated battery start - batteries used for NO other purpose. Kept on trickle (float) charge from main power continuously. Also recharged from the EG itself when running.</li>
    <li><strong>Means 2:</strong> Hydraulic start, pneumatic start, or a second independent battery bank - completely separate from Means 1.</li>
    <li><strong>Primary</strong> stored energy source (battery) must be capable of <span class="n-val">3 consecutive starts</span> without recharging.</li>
    <li><strong>Secondary</strong> independent source (pneumatic/hydraulic, or a second battery bank) must provide a further <span class="n-val">3 consecutive starts within 30 minutes</span> - required unless effective hand-starting can be demonstrated. Total provision = 6 starts (3 + 3), not 6 from one source.</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional Source of Power:</strong> While the EG is starting, a transitional source (batteries / UPS) must automatically supply essential services for a minimum of <span class="n-val">30 minutes</span>. This covers: navigation lights, internal communications, emergency lighting at muster stations, and GMDSS. Switchover is <strong>fully automatic - no manual action required</strong>. The officer on watch does not need to operate any switch.</div></div>

  <div class="n-h2">Full List of Essential Services Supplied by Emergency Generator</div>
  <ul class="n-list">
    <li>Navigation lights and shapes (COLREGS requirement - loss is a collision risk)</li>
    <li>GMDSS radio equipment (distress communications - continuous watch requirement)</li>
    <li>Fire detection and alarm system (must never lose power)</li>
    <li>Emergency bilge pumping system (flooding mitigation)</li>
    <li>Watertight door operation and position indicators (damage control)</li>
    <li>Emergency lighting - accommodation passageways, escape routes, muster stations, lifeboat embarkation</li>
    <li>Steering gear - one dedicated motor (minimum); steering must be restored within 30 s</li>
    <li>Dedicated fire pump (at least one - required by SOLAS II-2)</li>
    <li>Sprinkler system pump (passenger ships and RoRo)</li>
    <li>Daylight signalling lamp, general alarm system</li>
    <li>Internal communications (sound-powered telephone, public address system)</li>
  </ul>

  <div class="n-h2">Testing Requirements</div>
  <table class="n-table">
    <tr><th>Test</th><th>Frequency</th><th>Method</th></tr>
    <tr><td>Auto-start test</td><td class="hl">Monthly</td><td>Simulate blackout by switching off MSB supply to ESB - EG must auto-start and take load within 45 s. Run under load for minimum 30 minutes.</td></tr>
    <tr><td>Full load test</td><td class="hl">Annual (class survey)</td><td>Connect calibrated load bank at rated kW. Run for 4 hours minimum. Verify all SOLAS loads can be supplied simultaneously.</td></tr>
    <tr><td>Starting battery test</td><td class="hl">Monthly / annually</td><td>SG check (hydrometer) and load test. Replace if capacity below 80% rated.</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 17 - POWER MANAGEMENT SYSTEM
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s4-pms">🖥️ Power Management System (PMS)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PMS is the automatic brain of the electrical plant. Surveyor may ask: "What does PMS do?" or "How does PMS prevent blackout?"</strong></div></div>
  <div class="n-p">The Power Management System (PMS) is a supervisory control and monitoring system that continuously monitors the ship's electrical load and automatically manages generator starting, stopping, load sharing, and load shedding to maintain a stable electrical supply at all times - with minimal manual intervention by the engineer on watch.</div>

  <table class="n-table">
    <tr><th>PMS Function</th><th>How It Works</th><th>Threshold (Typical)</th></tr>
    <tr>
      <td><strong>Load monitoring</strong></td>
      <td>Continuously measures total bus load in kW and kVA. Compares against total available generator capacity. Calculates load margin in real time.</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Auto-start - additional generator</strong></td>
      <td>When load rises above threshold, PMS automatically starts and synchronises a standby generator, then parallels and load-shares it.</td>
      <td class="hl"><span class="n-val">~80%</span> of running gen capacity</td>
    </tr>
    <tr>
      <td><strong>Auto-stop - excess generator</strong></td>
      <td>When total load falls below minimum, PMS transfers load to remaining generator and stops the excess unit - saving fuel and reducing running hours.</td>
      <td class="hl"><span class="n-val">~30%</span> of two generators' combined capacity</td>
    </tr>
    <tr>
      <td><strong>Load sharing</strong></td>
      <td>Ensures running generators share both active (kW) and reactive (kVAr) loads in proportion to their ratings - via governor speed signals (active) and AVR voltage signals (reactive).</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Preferential trip</strong></td>
      <td>If load exceeds capacity, PMS initiates the preferential trip sequence - sheds non-essential loads in stages before a generator trips on overload.</td>
      <td class="hl">Stage 1 at <span class="n-val">~90%</span>, Stage 2 at <span class="n-val">~95%</span></td>
    </tr>
    <tr>
      <td><strong>Blackout prevention - start inhibit</strong></td>
      <td>PMS may block large motor starts (e.g. bow thruster, ballast pump) if the running generators cannot handle the starting current surge without voltage depression.</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Harbour / sea mode</strong></td>
      <td>Operator selects mode. In harbour: lower load thresholds, shore power integration. At sea: higher thresholds, all generators available, tighter monitoring during manoeuvring.</td>
      <td>—</td>
    </tr>
  </table>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Surveyor Q: Each generator is tripping as soon as it comes on load and the preferential trip keeps operating - what would you do?</strong><br><strong>Answer:</strong> (1) Check for a sustained bus fault (short circuit) - isolate faulted section if confirmed. (2) Inspect preferential trip relay settings - a misset relay may shed loads prematurely; reset to correct values. (3) Take all large motors to local manual control and start them one by one to avoid combined starting surge. (4) Verify all non-essential loads actually shed (check contactor coils have dropped out). (5) Start generators in sequence, not simultaneously - let first generator stabilise before connecting second. (6) If problem persists, check generator ACB trip settings, OCR settings, and whether a motor downstream has a fault (locked rotor, seized bearing) causing a repeated sustained overload current.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 18 - EARTH FAULT DETECTION & PROCEDURE
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s4-earth-fault-proc">🔍 Earth Fault - Detection &amp; Investigation Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>A surveyor's favourite practical question: "Earth fault alarm came on watch - what do you do?"</strong> Must give the complete step-by-step isolation hunt, including why isolated neutral is used on ships.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How earth fault indication works on ships (isolated neutral / IT system):</strong> Ships use an IT (Isolated Terra / Insulated neutral) system - neither conductor is solidly connected to the hull (earth). Three monitoring lamps are connected in star between the three phases and earth (hull). Under normal conditions all three glow at equal (reduced) brightness. When one phase develops a fault to earth (hull), that phase is pulled toward earth potential - its lamp dims to near-off. The other two phases now sit at a higher voltage relative to earth (line voltage instead of phase voltage) and their lamps brighten significantly. The IRM (Insulation Resistance Monitor) gives a continuous digital readout in kΩ - alarm activates typically below <span class="n-val">50 kΩ</span>.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-earth-lamps.png" alt="Earth fault indication lamps — three lamps in star to hull, normal brightness vs one phase fault">
    <div class="note-diagram-cap">Fig. Earth Fault Lamps — three lamps star-connected to hull; normal (all dim); fault on R-phase (R lamp out, Y/B bright)</div>
  </div>

  <ol class="n-steps">
    <li><strong>Acknowledge the earth fault alarm.</strong> Note which phase lamp has dimmed on the IRM panel. Do NOT ignore - a second earth fault on a different phase will create a short circuit THROUGH the hull, causing a phase-to-phase fault. Immediately notify the duty engineer and OOW.</li>
    <li><strong>Log the time, IRM reading (kΩ), and the dimmed phase.</strong> This is evidence for the investigation and for Class records.</li>
    <li><strong>Identify high-probability areas first:</strong> Deck equipment (seawater exposure, cable gland leakage), galley equipment (steam, grease, heat), accommodation (damp areas, portable appliances, electric irons), bilge pump circuits (regular immersion), cargo hold circuits (flooding or condensation).</li>
    <li><strong>Switch off non-essential circuits one at a time</strong> via their breakers on the MSB or distribution boards. After each switch-off, observe the IRM reading. When the IRM reading RISES (insulation resistance improves) or the alarm clears - the fault is on that circuit. Note: essential services (steering, fire pump, GMDSS) must NOT be switched off during the hunt.</li>
    <li><strong>Once the faulty circuit is identified, isolate at the breaker and apply LOTO</strong> (tag out). Inspect all equipment on that circuit - look for: water ingress into motor terminal box, chafed cable at a cable tray edge, damaged cable gland, corroded or flooded termination, melted insulation from localised overheating.</li>
    <li><strong>Megger the isolated circuit (500 V DC):</strong> Confirm fault - reading below <span class="n-val">1 MΩ</span> confirms insulation breakdown. Record reading in MΩ. For equipment rated &gt;1 kV, use a 1000 V megger.</li>
    <li><strong>Repair or replace the faulty equipment or cable.</strong> Re-megger after repair - reading must be ≥ 1 MΩ (preferably ≥ 10 MΩ for new/repaired equipment) before re-energisation.</li>
    <li><strong>Re-energise the circuit. Reset the IRM alarm. Log all actions</strong> in the electrical maintenance log, including: circuit identified, equipment found faulty, repair carried out, final megger reading, time restored.</li>
  </ol>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why isolated neutral (IT system) is used on ships - NOT solidly earthed (TN system):</strong> With an IT system, a SINGLE earth fault does NOT cause fault current to flow - the circuit remains operational with just an alarm. This gives the watch engineer time to find and fix the fault without losing the circuit. In a TN (solidly earthed) system, a single earth fault would cause immediate automatic tripping of that circuit - potentially losing steering gear, fire pump, or bilge pump on a single insulation failure. At sea, losing essential services on a single fault is unacceptable from a safety standpoint. The IT system provides warning without immediate disconnection.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 19 - ISOLATED NEUTRAL VOLTAGE
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s4-isolated-neutral-v">⚡ Isolated Neutral System - Phase-to-Earth Voltage</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard question: "What voltage appears between one phase and earth/hull on a 440 V ship system?" and "Why do earth fault lamps glow at reduced brightness normally?"</strong></div></div>
  <div class="n-formula">V<sub>phase-to-earth</sub> = V<sub>line</sub> ÷ √3 = 440 ÷ 1.732 ≈ <span class="n-val">254 V</span></div>
  <div class="n-p">In a balanced three-phase system, the line-to-line voltage is 440 V. The phase voltage (line-to-neutral) is Vline ÷ √3. In the ship's IT system, the neutral point is not physically connected to earth - it FLOATS at the geometric centre of the three-phase phasor diagram. Under normal (no-fault) conditions, the three phases are symmetrical, so the floating neutral sits at zero earth potential by symmetry. Each phase therefore sits at 254 V above earth. The earth fault indicator lamps are connected in series pairs across the 440 V line voltage through the earth path - under normal conditions each lamp sees approximately 127 V (half of 254 V across two lamps in series) - they glow at REDUCED brightness.</div>

  <div class="n-card" style="border-color:var(--blue-border)">
    <strong>Key voltage values to remember:</strong>
    <div class="n-grid">
      <div>Line-to-line: <span class="n-val">440 V</span></div>
      <div>Line-to-neutral (phase): <span class="n-val">254 V</span> &nbsp;(440 ÷ √3)</div>
      <div>EF lamp voltage (normal): <span class="n-val">~127 V each</span> (two lamps in series across 254 V path - all glow dim equally)</div>
      <div>EF lamp (faulty phase): <span class="n-val">~0 V</span> (phase pulled to hull potential - lamp extinguishes)</div>
      <div>EF lamp (healthy phases on fault): <span class="n-val">~440 V / 2 = 220 V each</span> (healthy phases now see line voltage to earth - lamps over-bright)</div>
    </div>
  </div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Normal = all three lamps dim (254 V shared across star). Fault = one phase lamp OFF (zero - pulled to earth), other two BRIGHT (they now see line voltage to earth). The lamp behaviour tells you which phase is faulted - the one that goes dark.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 20 - FIRE DETECTOR EOL CIRCUIT
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-fire-detector">🔥 Fire Detector - SC vs OC vs Fire Alarm (EOL Circuit)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: "How does the fire panel differentiate a short circuit from an open circuit from an actual fire alarm?" EOL resistor is the key concept.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fire detection loop uses EOL (End Of Line) resistor - creates a known normal circuit resistance and therefore a known normal loop current.</strong> The fire panel constantly measures the loop current. Any deviation from the normal current identifies one of three states:</div></div>

  <table class="n-table">
    <tr><th>Condition</th><th>Loop Current</th><th>Panel Indication</th><th>Action</th></tr>
    <tr>
      <td class="ok"><strong>NORMAL</strong></td>
      <td class="ok">Fixed "normal" current set by EOL resistor value - e.g. <span class="n-val">5 mA</span></td>
      <td class="ok">HEALTHY - no alarm or fault</td>
      <td class="ok">None</td>
    </tr>
    <tr>
      <td class="bad"><strong>FIRE / ALARM</strong></td>
      <td class="bad">Detector activates → internal resistor changes (either increased or decreased current depending on detector design - typically current INCREASES as the detector resistor decreases)</td>
      <td class="bad">FIRE ALARM - zone, location, and time displayed</td>
      <td class="bad">Follow fire action card - confirm, investigate, general alarm if confirmed</td>
    </tr>
    <tr>
      <td class="bad"><strong>OPEN CIRCUIT fault</strong></td>
      <td class="bad">Wire break anywhere in loop → <strong>zero current</strong> flows (EOL resistor disconnected)</td>
      <td class="bad">FAULT - "Open circuit Zone X" - distinct from fire alarm</td>
      <td class="bad">Log and repair - locate break, repair cable. SOLAS: fault must trigger distinct alarm from fire.</td>
    </tr>
    <tr>
      <td class="hl"><strong>SHORT CIRCUIT fault</strong></td>
      <td class="hl">Wire-to-wire short → current bypasses EOL resistor → current <strong>increases sharply</strong> (limited only by wire resistance)</td>
      <td class="hl">FAULT - "Short circuit Zone X" - distinct from fire alarm</td>
      <td class="hl">Log and repair - locate short, check for cable damage, water ingress. Modern loops: short circuit isolator modules limit the fault to one zone only.</td>
    </tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Result - three distinct current levels → three distinct panel states:</strong> NORMAL current (e.g. 5 mA) / FIRE current (e.g. 15–20 mA, detector activated) / SHORT CIRCUIT current (very high, EOL bypassed) / OPEN CIRCUIT current (zero, EOL disconnected). The panel's microprocessor compares measured current against these thresholds and announces the correct state.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Addressable fire detection systems:</strong> Each detector has a unique address code (programmed at installation). When a detector activates, it transmits its address digitally on the loop. The panel displays exact location (deck, frame, space name) immediately - no zone ambiguity. Also allows individual detector testing from the panel without physically accessing each detector location.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SOLAS requirement (FSS Code Ch.9):</strong> The fire detection system must give a "fault" alarm that is clearly distinct from a "fire" alarm when any circuit breaks. This is the entire purpose of the EOL resistor - it converts the ambiguous "no signal" into a defined detectable fault state.</div></div>
  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t04-fire-detection-eol.png" alt="EOL resistor fire detection circuit — panel, loop wiring, detectors, EOL resistor, three current states">
    <div class="note-diagram-cap">Fig. EOL Fire Detection Circuit — fire panel, detection loop, detector heads, EOL resistor; normal/fire/open/short current levels</div>
  </div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 21 - MSB SURVEY PREPARATION
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-msb-survey">🔍 MSB Survey Preparation - 14-Point Checklist</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Before a class society electrical survey (DNV, LR, BV, ClassNK, ABS), prepare the MSB thoroughly. Survey findings on the MSB are typically non-conformances that delay class renewal.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Strip dust and oxidation from all copper busbars:</strong> Use fine emery cloth on contact surfaces. Clean with dry lint-free cloth. Thin coating of contact grease (Vaseline or copper grease) where specified by manufacturer.</li>
    <li><strong>Tighten all busbar connections to specified torque:</strong> Loose connections = thermal hotspots = IR drop = class finding. Use calibrated torque wrench and record torque values in maintenance log.</li>
    <li><strong>IR test all feeder circuits with ACBs open:</strong> Minimum <span class="n-val">1 MΩ</span> to earth required for each circuit using 500 V DC megger. Record all readings. Investigate and repair any below threshold before survey.</li>
    <li><strong>Check all cable gland sealing compounds:</strong> No cracking, hardening, or gaps. Proper seal against moisture and vermin ingress. Re-seal with appropriate compound where degraded.</li>
    <li><strong>Test synchroscope and synchronising lamps:</strong> Dark-lamp method must function correctly. Synchroscope must deflect smoothly. Test incoming voltage selector switch across all generator positions.</li>
    <li><strong>Verify rubber mats - correct thickness:</strong> <span class="n-val">6 mm minimum</span> for LV (440 V) in front and rear of MSB. <span class="n-val">12 mm</span> for HV (6.6 kV) switchboard. Mats must be unbroken, marked with voltage rating, and within service life.</li>
    <li><strong>Check earth bus connections:</strong> All equipment frames, panel doors, and cable armour bonded to the MSB earth bar. No missing earth leads or loose connections.</li>
    <li><strong>Verify ACB maintenance records are current:</strong> Last secondary injection test dates, trip times recorded at 2×, 5×, 10× pickup. Contact wear measurements. All signed and dated.</li>
    <li><strong>Check OCR settings against approved load analysis document:</strong> Settings must match the approved protection coordination study - do not change settings without C/E or class approval.</li>
    <li><strong>Test preferential trip sequence:</strong> Simulate overload condition (or inject test current). Verify Stage 1 loads shed at correct threshold within 5–10 seconds. Verify Stage 2 sequence thereafter. Confirm NEVER-shed loads are NOT affected.</li>
    <li><strong>Verify emergency generator test records:</strong> Last monthly auto-start test - time to start and take load ≤ 45 s. Last annual full-load test - 4 hours at rated load. Starting battery SG and load test results.</li>
    <li><strong>Check phase barriers between busbars intact:</strong> No cracks or chips in insulating barriers. Secure mounting - barriers must not vibrate loose under ship motion.</li>
    <li><strong>Verify all instruments calibrated and within tolerance:</strong> Voltmeters, ammeters, power factor meters, frequency meters - all reading correctly against known reference. Replace any defective instruments before survey.</li>
    <li><strong>Prepare all certificates and maintenance records for surveyor review:</strong> MSB test records, relay calibration certificates, transformer test records, IRM calibration certificate, rubber mat test certificates, emergency generator class certificates. Have them organised and ready.</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Surveyor tip:</strong> Class surveyors always check (1) rubber mat condition, (2) busbar connection torque, (3) OCR settings vs load analysis document, and (4) emergency generator start time records. These four are most commonly found deficient on cargo ships. Prepare these first.</div></div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 22 - SURVEYOR Q&A
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyor-qa">🎓 Surveyor Q&amp;A - Oral Exam Drills</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Practice these answers aloud. The surveyor expects confident, term-accurate narration without hesitation. These are the highest-frequency questions for Function 5 Topic 4 at Mumbai/Noida MMD.</strong></div></div>

  <div class="n-h2">ACB &amp; Switchboard</div>
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Q: Explain ACB arc quenching step by step.</div>
    <div class="card-desc"><strong>A:</strong> When the ACB trips, the main contacts open first - the arc forms NOT on the main contacts but on the arcing contacts (silver-tungsten), which open a fraction of a second later. This protects the main contacts from erosion. The arc is then driven by the magnetic field from an arc blow-out coil and/or the electromagnetic field of the fault current itself into the arc chute. Inside the arc chute, ceramic splitter plates divide the single arc into many shorter series arcs. Because the total arc voltage (sum of all short arcs) exceeds the 440 V supply voltage, the arc cannot sustain itself and extinguishes at the next natural current zero. The ceramic plates also cool and de-ionise the arc gases. The complete sequence takes milliseconds.</div>
  </div>

  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Q: What is the difference between NVC and UVT on an ACB?</div>
    <div class="card-desc"><strong>A:</strong> They are the same protection but with different time characteristics. The NVC (No-Volt Coil) is a holding coil that keeps the ACB closed only when the control supply is healthy. If the control supply fails instantaneously (blackout, fuse blown), NVC de-energises and the ACB springs open immediately - zero delay. UVT (Under-Voltage Trip) trips when the bus voltage falls below a set threshold (typically 85% rated) for a set time delay (1–3 s) - the delay prevents nuisance tripping on momentary voltage dips during motor starting. In practice, on modern ACBs, both functions are combined in an under-voltage release unit.</div>
  </div>

  <div class="n-card" style="border-color:var(--green-border)">
    <div class="card-title" style="color:var(--green)">Q: How do you safely isolate an ACB for maintenance?</div>
    <div class="card-desc"><strong>A:</strong> Obtain PTW. Open the ACB - visually confirm open position. Rack out to ISOLATED position using the racking handle - power contacts and control circuit both disconnected. Apply LOTO: personal padlock and warning tag on racking handle. Test for dead at both sides of the ACB terminals with a voltage indicator. Apply earth clamps to the bus stabs. Post a "Man Working - Do Not Close" notice. Work safely. On completion: remove earth clamps, remove LOTO, rack to SERVICE, close ACB, verify load restored, sign off PTW.</div>
  </div>

  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">Q: What does IDMT mean and what is its advantage?</div>
    <div class="card-desc"><strong>A:</strong> Inverse Definite Minimum Time - the relay trip time is inversely proportional to the fault current magnitude. For a small overload (1.5× setting), the relay trips slowly (many seconds) - allowing the circuit time to recover from a transient. For a large fault (10× setting), the relay trips very fast (&lt;100 ms) - protecting equipment quickly. This inverse characteristic allows protection coordination: the relay furthest from the source trips first, isolating only the faulted section, while upstream relays wait - maintaining supply to healthy sections (selectivity or discrimination).</div>
  </div>

  <div class="n-h2">Reverse Power &amp; Protection Relays</div>
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Q: Explain reverse power relay - working principle, setting, and why the time delay?</div>
    <div class="card-desc"><strong>A:</strong> A reverse power relay uses the wattmetric principle: a CT measures stator current and a PT measures bus voltage. The relay computes V × I × cos φ. During normal generation, power flows OUT of the generator - positive. When the prime mover stalls, the bus drives the generator as a synchronous motor - power flows INTO the generator, the phasor angle shifts ~180°, the product becomes negative. The relay trips the ACB when this negative power exceeds the set value of 5–10% rated kW. The 3–5 second time delay is essential: during normal synchronising, a brief reverse power flows as the incoming generator comes onto the bus - without the delay, the relay would trip at every synchronisation manoeuvre.</div>
  </div>

  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Q: What is a differential relay and where is it fitted on a ship?</div>
    <div class="card-desc"><strong>A:</strong> A differential relay has CTs at both ends of the protected zone - entry and exit. It compares current IN vs current OUT. Under normal conditions they are equal: IN − OUT = zero, relay stable. If there is an internal fault within the protected zone (winding short, earth fault inside the generator), current leaks out of the zone: IN ≠ OUT, the imbalance current operates the relay immediately with no delay. Fitted on ships for: large main generators (&gt;500 kVA), main transformers, and busbar protection on HV switchboards. It detects faults that would not produce enough current to blow a fuse or operate an OCR - catching small internal faults early, preventing escalation to a total winding burnout.</div>
  </div>

  <div class="n-h2">Emergency Generator &amp; ESB</div>
  <div class="n-card" style="border-color:var(--green-border)">
    <div class="card-title" style="color:var(--green)">Q: SOLAS requirements for emergency generator - start time, fuel endurance, location.</div>
    <div class="card-desc"><strong>A:</strong> SOLAS II-1 Reg 42/43. Cargo ship: auto-start within 45 seconds. Passenger ship: within 30 seconds. Fuel endurance: 18 hours for cargo ship, 36 hours for passenger ship. Location: above the bulkhead deck, outside all machinery spaces, not sharing a common boundary with the main engine room. Starting means: two independent means - primary (battery) capable of 3 consecutive starts, secondary (pneumatic/hydraulic) a further 3 within 30 minutes (the "3 + 3" rule), unless effective hand-starting is provided. Monthly test: simulate blackout, verify auto-start within 45 seconds, run on load for 30 minutes minimum. Annual test: full rated load for 4 hours.</div>
  </div>

  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">Q: What is the transitional source of power and why is it needed?</div>
    <div class="card-desc"><strong>A:</strong> The transitional source is a battery bank (or UPS) that automatically supplies essential services during the gap between blackout and the emergency generator coming on load - a window of up to 45 seconds. It must supply: navigation lights, internal communications, emergency lighting at muster stations, steering gear (transitional), and GMDSS. SOLAS requires it to operate for a minimum of 30 minutes without any generating source. The switchover is fully automatic - no manual action by the officer on watch. It bridges the critical period when the ship is dark and the OOW must still have communications and navigation lights to prevent collision.</div>
  </div>

  <div class="n-h2">Insulation &amp; Testing</div>
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Q: Why do we wait 10 minutes for a PI test? What are the three current components?</div>
    <div class="card-desc"><strong>A:</strong> When DC voltage is applied to insulation, three current components flow. (1) Capacitive current - decays in seconds as the insulation capacitance charges. (2) Absorption current - caused by molecular dipole polarisation in the insulation. In good dry insulation this is large and decays slowly over ~10 minutes. In wet or degraded insulation it is small and decays quickly. (3) True leakage current - constant, reflects actual insulation quality. At 1 minute, absorption current is still significant so the reading is artificially low. By 10 minutes, absorption current has mostly decayed and the reading approaches the true leakage resistance. PI = IR(10 min) / IR(1 min). Good insulation: PI ≥ 2.0. Below 1.0: dangerous, do not energise.</div>
  </div>

  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Q: Earth fault alarm came on watch - what do you do?</div>
    <div class="card-desc"><strong>A:</strong> Acknowledge alarm, note the IRM reading in kΩ and which phase lamp has dimmed. Notify duty engineer and OOW. Log time and reading. Do NOT ignore - a second earth fault creates a phase-to-phase short through the hull. Start isolation hunt: switch off non-essential circuits one at a time, monitoring IRM after each switch-off. When IRM reading rises or alarm clears on switching off a particular circuit, the fault is on that circuit. Isolate and LOTO that circuit. Megger at 500 V DC - reading below 1 MΩ confirms fault. Inspect physically: water ingress, chafed cable, damaged gland. Repair, re-megger, re-energise. Reset IRM alarm. Log all actions. Essential services (steering, fire pump, GMDSS) must NOT be switched off during the hunt.</div>
  </div>

  <div class="n-h2">UPS &amp; Shore Connection</div>
  <div class="n-card" style="border-color:var(--green-border)">
    <div class="card-title" style="color:var(--green)">Q: What is the difference between static bypass and maintenance bypass on a UPS?</div>
    <div class="card-desc"><strong>A:</strong> A static bypass is a thyristor (SCR) switch that automatically transfers the load directly to raw mains if the UPS inverter fails or is overloaded - transfer is microseconds, fully automatic, load does not interrupt. A maintenance bypass is a manually operated switch that connects the load directly to mains while isolating the entire UPS unit - used only when the UPS must be completely de-energised for repair or battery replacement. During maintenance bypass, the load is unprotected from mains transients and there is no battery backup. The difference: static bypass is automatic, for UPS fault; maintenance bypass is manual, for UPS servicing.</div>
  </div>

  <div class="n-card" style="border-color:var(--red-border)">
    <div class="card-title" style="color:var(--red)">Q: Why is an isolation transformer required in the shore power connection?</div>
    <div class="card-desc"><strong>A:</strong> Shore power supply systems (most ports) have a solidly earthed neutral (TN system) - the neutral conductor is bonded to earth at the substation. Ship electrical systems use an isolated neutral (IT system) - neither pole is solidly earthed. If shore power is connected directly without an isolation transformer, the solid earth bond of the shore system would impose a direct earth connection on the ship's neutral - destroying the IT system. This breaks the galvanic isolation between shore earth and ship hull, creating a path for galvanic corrosion current between the ship's hull and the berth through the earth conductor. The isolation transformer breaks this galvanic path completely - shore supply on the primary winding, ship's IT system on the secondary - no direct electrical connection between the two earth systems.</div>
  </div>

  <div class="n-h2">MSB Safeties &amp; Quick Cross-Questions</div>
  <div class="n-card" style="border-color:var(--blue-border)">
    <div class="card-title" style="color:var(--blue)">Q: What happens if the MSB–ESB link breaker and the emergency generator breaker both close at the same time without synchronisation?</div>
    <div class="card-desc"><strong>A:</strong> A large circulating fault current flows between the main generators and the emergency generator through the bus tie, driven by the phase and frequency difference between the two unsynchronised systems. This current can reach tens of kiloamperes - far exceeding the rating of the generator windings, busbars, and ACBs. The result is immediate and severe: winding damage to both generators, busbar melting, ACB destruction, and potential fire. The MSB–ESB interlock exists specifically to prevent this - it ensures only ONE source can feed the ESB bus at any time, making simultaneous unsynchronised closure physically impossible.</div>
  </div>

  <div class="n-card" style="border-color:var(--orange-border)">
    <div class="card-title" style="color:var(--orange)">Q: GMDSS battery requirements - capacity and testing.</div>
    <div class="card-desc"><strong>A:</strong> SOLAS Reg IV: GMDSS equipment must be capable of operating for 1 hour on a dedicated battery (if connected to UPS) or 6 hours on a dedicated battery (if no UPS). The battery is a dedicated unit - not shared with any other purpose. Annual load test required - battery discharged under rated load for the full 1- or 6-hour period while recording voltage. Replace when capacity falls below 80% of rated. Battery SG checked as part of routine monthly inspection (if lead-acid type). Charger to be inspected for correct float voltage - overcharging degrades battery faster than undercharging.</div>
  </div>


  <!-- ═══════════════════════════════════════════════════════
       SECTION 23 - QUICK REVISION TABLE (always last)
       ═══════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td><strong>ACB arc quenching</strong></td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Arcing contacts open last → arc into chute → ceramic splitter plates → many short series arcs → total arc voltage &gt; <span class="n-val">440 V</span> → extinguishes at current zero.</td>
    </tr>
    <tr>
      <td><strong>Reverse power relay</strong></td>
      <td class="hl">⭐⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Wattmetric principle (CT + PT + phase angle). Trips ACB when generator absorbs power. Setting: <span class="n-val">5–10%</span> rated kW. Delay: <span class="n-val">3–5 s</span> (for synchronising transient).</td>
    </tr>
    <tr>
      <td><strong>MSB safeties (10)</strong></td>
      <td class="hl">⭐⭐⭐⭐⭐ ALL surveyors</td>
      <td>Dead-front · OCR (IDMT) · UV trip · Reverse power · Earth fault (IRM) · BTB interlock · Preferential trip · Standby auto-start · E-stop · Overvoltage.</td>
    </tr>
    <tr>
      <td><strong>Emergency Gen SOLAS</strong></td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Nair</td>
      <td>Cargo: <span class="n-val">45 s</span>, <span class="n-val">18 hr</span> fuel. Passenger: <span class="n-val">30 s</span>, <span class="n-val">36 hr</span>. Above bulkhead deck. 2 independent starts. Monthly + annual test.</td>
    </tr>
    <tr>
      <td><strong>Earth fault procedure</strong></td>
      <td class="hl">⭐⭐⭐⭐⭐ All surveyors</td>
      <td>Acknowledge → log phase dimmed → notify → switch off non-essential circuits one by one → IRM clears → LOTO faulted circuit → megger → repair → log.</td>
    </tr>
    <tr>
      <td><strong>PI test / 10-minute reason</strong></td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Vishwanathan</td>
      <td>Three currents: capacitive (sec) + absorption (min) + leakage (constant). By 10 min absorption decayed → true leakage readable. PI = IR(10)/IR(1). Good ≥ <span class="n-val">2.0</span>.</td>
    </tr>
    <tr>
      <td><strong>Preferential trip</strong></td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Wad</td>
      <td>Stage 1 at <span class="n-val">~90%</span> load → galley/laundry shed. Stage 2 at <span class="n-val">~95%</span> → HVAC shed. NEVER shed: nav lights, steering, fire pump, GMDSS. Dashpot: oil/air piston, needle valve sets delay.</td>
    </tr>
    <tr>
      <td><strong>Differential relay</strong></td>
      <td class="hl">⭐⭐⭐⭐ Kamath</td>
      <td>CTs both ends → compares IN vs OUT. IN ≠ OUT = internal fault → instant trip. Detects small faults OCR/fuse cannot. Fitted on large generators, transformers, busbars.</td>
    </tr>
    <tr>
      <td><strong>ACB isolation (LOTO)</strong></td>
      <td class="hl">⭐⭐⭐⭐ All surveyors</td>
      <td>PTW → open → rack out ISOLATED → padlock → test dead both sides → earth clamps → work. Positions: SERVICE / TEST / ISOLATED. Shutters close on rack-out.</td>
    </tr>
    <tr>
      <td><strong>HRC fuse</strong></td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Sanjib</td>
      <td>Silver element + silica sand + ceramic body. Breaking capacity: <span class="n-val">80–100 kA</span>. Current-limiting: <span class="n-val">0.25–3 cycles</span>. NEVER rewirable on MSB. Non-replaceable element.</td>
    </tr>
    <tr>
      <td><strong>UPS types</strong></td>
      <td class="hl">⭐⭐⭐ Vishwanathan, Nair</td>
      <td>Online = zero switchover (always on inverter). Offline = 4–12 ms. Line interactive = 2–4 ms. Static bypass: automatic (thyristor). Maintenance bypass: manual (for servicing).</td>
    </tr>
    <tr>
      <td><strong>Battery SG</strong></td>
      <td class="hl">⭐⭐⭐ Sanjib, Kamath</td>
      <td>Full: <span class="n-val">1.260–1.280</span>. Half: ~<span class="n-val">1.200</span>. Discharged: <span class="n-val">1.100–1.120</span>. Inter-cell variation &gt;<span class="n-val">0.050</span> = cell fault. Top up with distilled water ONLY.</td>
    </tr>
    <tr>
      <td><strong>Dielectric strength</strong></td>
      <td class="hl">⭐⭐⭐ Deswal</td>
      <td>Air: <span class="n-val">2–3 kV/mm</span>. Vacuum: <span class="n-val">8–10 kV/mm</span>. SF₆ at 4 bar: <span class="n-val">~89 kV/mm</span>. VCB for 6.6 kV ships. Arc energy ratio 440V→6.6kV = 225×.</td>
    </tr>
    <tr>
      <td><strong>Sequential load restore</strong></td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>After blackout restore: cooling water → LO → fuel → boiler → air compressor → HVAC. <span class="n-val">30 s – 2 min</span> delays between each to prevent starting surge overload.</td>
    </tr>
    <tr>
      <td><strong>Shore connection</strong></td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>Isolation transformer MANDATORY - breaks galvanic earth path between solidly earthed shore and floating ship neutral. Prevents hull corrosion and maintains IT system.</td>
    </tr>
    <tr>
      <td><strong>GMDSS battery</strong></td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td><span class="n-val">1 hr</span> (with UPS) or <span class="n-val">6 hr</span> (no UPS). Dedicated battery. Annual load test. Replace at &lt;<span class="n-val">80%</span> capacity.</td>
    </tr>
    <tr>
      <td><strong>Phase-to-earth voltage (IT system)</strong></td>
      <td class="hl">⭐⭐⭐ All surveyors</td>
      <td>440 V system: phase-to-earth = <span class="n-val">254 V</span> (440 ÷ √3). Faulty phase lamp: OFF (0 V). Healthy phase lamps: BRIGHT (~220 V each). IRM alarm below <span class="n-val">50 kΩ</span>.</td>
    </tr>
    <tr>
      <td><strong>Fire detector EOL circuit</strong></td>
      <td class="hl">⭐⭐⭐⭐ All surveyors</td>
      <td>EOL resistor sets normal current. Fire = current changes. Open circuit = zero current = FAULT. Short circuit = excess current = FAULT. Three distinct states. SOLAS: fault must be distinct from fire alarm.</td>
    </tr>
    <tr>
      <td><strong>PMS functions</strong></td>
      <td class="hl">⭐⭐⭐ Deswal, Kamath</td>
      <td>Load monitor → auto-start at 80% → auto-stop at 30% → load share → preferential trip → start inhibit for large motors. Blackout prevention = core function.</td>
    </tr>
    <tr>
      <td><strong>MSB–ESB interlock</strong></td>
      <td class="hl">⭐⭐⭐ Nair, Sanjib</td>
      <td>Bus-tie breaker and EG ACB cannot both be closed simultaneously (no synchronisation). Anti-parallel interlock prevents circulating fault current. Only ONE source feeds ESB at a time.</td>
    </tr>
    <tr>
      <td><strong>OCR secondary injection test</strong></td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Rack ACB to TEST. Test set to OCR terminals. Inject 1.05× (no trip), 2×, 5×, 10× (record times). Compare vs IDMT curve. Verify trip output fires ACB. Reconnect CT secondary. Record all values.</td>
    </tr>
  </table>

  </div><!-- /note-content -->
</div><!-- /note-doc -->
</div><!-- /view -->
`);
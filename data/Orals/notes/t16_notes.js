window.loadNotes("T16", `<div class="view" id="view-notes-t16">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T16')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 16 - SOLAS &amp; Regulations</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Ch II-1 · Emergency Power · ISM · ISPS · MLC · STCW</span>
      <span class="tag tag-purple">New 2026 - Lifting Appliances · Inclinometer</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-solas-overview')">SOLAS Overview</button>
    <button class="anc-btn" onclick="jumpTo('s-ch2')">Chapter II-1 Electrical</button>
    <button class="anc-btn" onclick="jumpTo('s-empower')">Emergency Power</button>
    <button class="anc-btn" onclick="jumpTo('s-cables')">Cables</button>
    <button class="anc-btn" onclick="jumpTo('s-survey-checks')">Special Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-ch22')">Chapter II-2 Fire</button>
    <button class="anc-btn" onclick="jumpTo('s-ch3')">Chapter III LSA</button>
    <button class="anc-btn" onclick="jumpTo('s-ch4')">Chapter IV GMDSS</button>
    <button class="anc-btn" onclick="jumpTo('s-ch5')">Chapter V Navigation</button>
    <button class="anc-btn" onclick="jumpTo('s-ch6-7')">Ch VI-VII Cargo</button>
    <button class="anc-btn" onclick="jumpTo('s-loadline')">Load Line</button>
    <button class="anc-btn" onclick="jumpTo('s-colregs')">COLREGS</button>
    <button class="anc-btn" onclick="jumpTo('s-ism')">ISM Code</button>
    <button class="anc-btn" onclick="jumpTo('s-classflag')">Class &amp; Flag State</button>
    <button class="anc-btn" onclick="jumpTo('s-isps')">ISPS Security</button>
    <button class="anc-btn" onclick="jumpTo('s-conventions')">MLC &amp; STCW</button>
    <button class="anc-btn" onclick="jumpTo('s-enclosedspace')">Enclosed Space Gases</button>
    <button class="anc-btn" onclick="jumpTo('s-new2026')">New 2026 Regs</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-solas-overview">🌊 SOLAS - Overview &amp; All Chapters</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask: How many chapters does SOLAS have? Which covers bulk carriers? What is Chapter XIII?</strong><br>SOLAS = <span class="n-val">Safety of Life at Sea</span>. Primary international treaty for ship safety. First adopted <span class="n-val">1914</span> after Titanic; current version in force from <span class="n-val">1980</span>. SOLAS has <span class="n-val">14 chapters</span>.</div></div>

  <div class="n-h2">All 14 SOLAS Chapters</div>
  <table class="n-table">
    <tr><th>Chapter</th><th>Subject</th><th>ETO Relevance</th></tr>
    <tr><td class="hl"><strong>I</strong></td><td>General Provisions &amp; Surveys</td><td>Survey types, certificates</td></tr>
    <tr><td class="hl"><strong>II-1</strong></td><td>Construction, Subdivision, Stability, Electrical (Part D)</td><td class="ok"><strong>Core ETO - voltage limits, emergency DG, cables</strong></td></tr>
    <tr><td class="hl"><strong>II-2</strong></td><td>Fire Protection, Detection &amp; Extinction</td><td class="ok">Fire-resistant cables, emergency fire pump</td></tr>
    <tr><td class="hl"><strong>III</strong></td><td>Life-Saving Appliances (LSA)</td><td class="hl">EEBD, lifeboat battery, embarkation lighting</td></tr>
    <tr><td class="hl"><strong>IV</strong></td><td>Radio Communications (GMDSS)</td><td class="hl">GMDSS battery, reserve power 6 h / 1 h</td></tr>
    <tr><td class="hl"><strong>V</strong></td><td>Safety of Navigation</td><td class="hl">VDR, BNWAS, AIS, ECDIS</td></tr>
    <tr><td><strong>VI</strong></td><td>Carriage of Cargoes (general)</td><td>Cargo monitoring, ETO awareness</td></tr>
    <tr><td><strong>VII</strong></td><td>Carriage of Dangerous Goods</td><td>IMDG, EmS, cargo electrical safety</td></tr>
    <tr><td><strong>VIII</strong></td><td>Nuclear Ships</td><td>Niche</td></tr>
    <tr><td class="hl"><strong>IX</strong></td><td>ISM Code - Safe Management</td><td class="ok">DOC, SMC, DPA, SMS</td></tr>
    <tr><td><strong>X</strong></td><td>High Speed Craft</td><td>—</td></tr>
    <tr><td><strong>XI-1</strong></td><td>Special Safety Measures (CSR, ship ID)</td><td>Continuous Synopsis Record</td></tr>
    <tr><td class="hl"><strong>XI-2</strong></td><td>Maritime Security (ISPS Code)</td><td class="ok">SSAS, CCTV, access control</td></tr>
    <tr><td class="hl"><strong>XII</strong></td><td>Additional Safety Measures for Bulk Carriers</td><td>Structural strength, flooding detection</td></tr>
    <tr><td class="hl"><strong>XIII</strong></td><td>Verification of Compliance (MSC Resolution 2014)</td><td>IMO Member State Audit Scheme</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Chapter XII - Bulk Carriers:</strong> Requires structural strength checks, flooding detection sensors, enhanced inspections, and onboard hatch cover testing. Applies to bulk carriers ≥150 m in length.<br><strong>Chapter XIII - Verification:</strong> Formalises the IMO Member State Audit Scheme - flag and port states must be audited for convention compliance.</div></div>

  <div class="n-h2">Legal Instrument Hierarchy - Convention, Protocol, Code, Amendment, Annex</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:10px;margin:10px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Convention</div>
      <div class="card-desc">International treaty agreed and ratified by member nations - legally binding on signatory states. E.g. SOLAS, MARPOL.</div>
    </div>
    <div class="n-card" style="border-color:var(--purple)">
      <div class="card-title">Protocol</div>
      <div class="card-desc">A major amendment to a convention requiring separate ratification. E.g. MARPOL 73/78 - 1973 was the original, 1978 significantly strengthened it.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Code</div>
      <div class="card-desc">Detailed technical specifications describing <em>how</em> to comply with a convention. May be mandatory (ISM, ISPS, IGC) or recommendatory.</div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">Amendment</div>
      <div class="card-desc">Routine change adopted under IMO <strong>tacit acceptance procedure</strong> - enters into force automatically after a fixed period unless a majority of states object.</div>
    </div>
    <div class="n-card" style="border-color:var(--cyan)">
      <div class="card-title">Annex</div>
      <div class="card-desc">Technical appendix attached to a convention, containing specific regulations. E.g. MARPOL Annex I = oil pollution prevention.</div>
    </div>
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title">The Four IMO Pillars</div>
      <div class="card-desc"><span class="n-val">SOLAS</span> (Safety) · <span class="n-val">MARPOL</span> (Pollution) · <span class="n-val">STCW</span> (Competency) · <span class="n-val">MLC</span> (Labour). Together cover ship safety, pollution, seafarer standards, and welfare.</div>
    </div>
  </div>

  <div class="n-h2">IMO Technical Committee Structure</div>
  <table class="n-table">
    <tr><th>Committee</th><th>Abbreviation</th><th>Scope</th></tr>
    <tr><td>Maritime Safety Committee</td><td class="hl"><span class="n-val">MSC</span></td><td>All safety conventions - SOLAS, LSA, fire, stability, radio, navigation</td></tr>
    <tr><td>Marine Environment Protection Committee</td><td class="hl"><span class="n-val">MEPC</span></td><td>MARPOL annexes, ballast water, GHG/CII targets</td></tr>
    <tr><td>Legal Committee</td><td class="hl">LEG</td><td>Maritime liability</td></tr>
    <tr><td>Technical Co-operation Committee</td><td class="hl">TC</td><td>Developing-nation capacity building</td></tr>
    <tr><td>Facilitation Committee</td><td class="hl">FAL</td><td>Formalities for ships in port</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>IMO Structure:</strong> IMO Assembly (highest - all member states, meets biennially) → IMO Council (executive body, 40 members) → 5 Committees (MSC, MEPC, LEG, TC, FAL) → Sub-Committees under MSC &amp; MEPC that draft the actual technical regulations.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ch2">📋 SOLAS Chapter II-1 - Electrical Installations (Part D)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask Chapter II-1 electrical regulations.</strong> Electrical installations = Chapter II-1, Part D. Covers Regulations 40–45 including voltage/frequency limits, emergency source of power, steering gear, and cable standards.</div></div>

  <div class="n-h2">Voltage &amp; Frequency Limits (Regulation 40)</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Steady State</th><th>Transient (impact load)</th><th>Recovery Time</th></tr>
    <tr><td>Voltage</td><td class="hl">±<span class="n-val">2.5%</span></td><td class="hl">±<span class="n-val">20%</span></td><td class="ok">Within ±3% in <span class="n-val">1.5 seconds</span></td></tr>
    <tr><td>Frequency</td><td class="hl">±<span class="n-val">5%</span></td><td class="hl">±<span class="n-val">10%</span></td><td class="ok">Within <span class="n-val">5 seconds</span></td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transient performance context (all surveyors):</strong> When a large load (e.g. bow thruster, large motor) is suddenly connected, voltage dips transiently up to ±20% - this is permitted provided the AVR and governor recover the voltage back within ±3% in 1.5 seconds. This is why the AVR response speed and governor droop settings are critical. A sluggish AVR that cannot recover within 1.5 s is a SOLAS non-compliance.</div></div>

  <div class="n-h2">Steering Gear (Regulation 29)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Changeover test:</strong> Changeover links between primary and auxiliary power units tested. Verify main power units put rudder from <span class="n-val">35° one side to 30° opposing side</span> within maximum <span class="n-val">28 seconds</span> at full ahead service speed. Two independent power units - loss of one must not disable the other. Tested every departure from port.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-empower">⚡ Emergency Source of Electrical Power (Regulation 42/43)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask emergency generator requirements.</strong> Know location, start time, endurance - different for cargo vs passenger ships. A wrong number here will fail the oral.</div></div>

  <table class="n-table">
    <tr><th>Requirement</th><th>Cargo Ship</th><th>Passenger Ship</th></tr>
    <tr><td>Location</td><td class="hl" colspan="2">Above uppermost continuous deck, OUTSIDE main machinery space, forward of collision bulkhead NOT required but must be accessible via weatherdeck</td></tr>
    <tr><td>Auto-start time</td><td class="hl"><span class="n-val">45 seconds</span></td><td class="hl"><span class="n-val">30 seconds</span></td></tr>
    <tr><td>Fuel endurance</td><td class="hl"><span class="n-val">18 hours</span></td><td class="hl"><span class="n-val">36 hours</span></td></tr>
    <tr><td>Transitional source</td><td class="hl" colspan="2">Battery - supplies essential services for minimum <span class="n-val">30 minutes</span> during the startup gap. No manual action required - automatic switchover.</td></tr>
    <tr><td>Auto-start trigger</td><td class="hl" colspan="2">Under-voltage relay on main switchboard detects blackout → signals emergency DG AVR and governor to start</td></tr>
    <tr><td>Link breaker</td><td class="hl" colspan="2">Tie/link breaker between main and emergency switchboards - prevents emergency DG from paralleling with main generators (emergency DG is not designed for parallel load sharing)</td></tr>
  </table>

  <div class="n-h2">Services Supplied by Emergency Source</div>
  <ul class="n-list">
    <li><strong>Navigation lights</strong> - running lights, signal lights</li>
    <li><strong>Emergency lighting</strong> - escape routes, stairways, lifeboat stations, machinery spaces</li>
    <li><strong>Fire detection and alarm system</strong></li>
    <li><strong>GMDSS communications</strong> - MF/HF radio, VHF, EPIRB, SART</li>
    <li><strong>Internal communications</strong> - PA system, engine room telegraph, fire telephone</li>
    <li><strong>Emergency fire pump</strong></li>
    <li><strong>Steering gear</strong> (if electrically powered)</li>
    <li><strong>Sprinkler system pump</strong> (if fitted)</li>
    <li><strong>Emergency bilge pump</strong></li>
    <li><strong>Watertight door controls</strong> and indicators</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional source detail (not GMDSS battery):</strong> A dedicated battery, separate from the GMDSS battery, automatically supplies emergency lighting, navigation lights, and internal communications for minimum 30 minutes. This covers the critical window between the blackout occurring and the emergency generator coming online (45 seconds). This battery is subject to annual load test and must be replaced if capacity falls below 80%.</div></div>

  <div class="n-h2">Blackout Test - Surveyor Procedure</div>
  <ol class="n-steps">
    <li>Brief all staff - inform all departments, post fire and safety watches.</li>
    <li>Inform bridge - confirm safe navigational situation (daylight, open sea, no traffic).</li>
    <li>Verify emergency DG in <strong>AUTO mode</strong> - fuel tank full, coolant level checked.</li>
    <li>Trip running main generator ACB - <strong>start timer</strong>.</li>
    <li>Emergency DG must auto-start and close onto emergency switchboard within <span class="n-val">45 seconds</span>.</li>
    <li>Verify essential services restored: emergency lighting, navigation lights, fire detection, GMDSS.</li>
    <li>Test transitional battery - it must have carried load between blackout and DG online (check battery voltage dip and recovery in log).</li>
    <li>Run emergency DG on load for minimum 30 minutes - check voltage, frequency, fuel pressure, temperature.</li>
    <li>Start main generator, synchronise to emergency switchboard bus, transfer loads sequentially.</li>
    <li>Log all times, results, DG parameters, and any defects. Present records to PSC inspector.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cables">🔌 Cable Requirements (Regulation 45)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Cable Standard</th><th>Requirement</th><th>Where Mandatory</th><th>Memory Cue</th></tr>
    <tr><td><span class="n-val">IEC 60331</span> - Fire Resistant</td><td class="hl">Maintains circuit integrity min <span class="n-val">3 hours</span> at <span class="n-val">750°C</span></td><td class="hl">Fire pumps, steering gear, emergency lighting, GMDSS, emergency DG circuits</td><td class="ok">331 = <strong>3h/750°C</strong></td></tr>
    <tr><td><span class="n-val">IEC 60332</span> - Flame Retardant</td><td>Self-extinguishes, does not propagate flame along cable run</td><td>All cables in enclosed spaces (general shipboard wiring)</td><td class="ok">332 = <strong>Retardant</strong></td></tr>
    <tr><td><span class="n-val">IEC 60079</span> - Explosion Protected</td><td>EEx-rated wiring - intrinsically safe or flameproof as applicable</td><td>Hazardous areas: paint lockers, gas spaces, battery rooms (ATEX zones)</td><td class="ok">079 = <strong>0–Zone</strong></td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Regulation 45 critical prohibition:</strong> Fuses must NOT be fitted in any earthed conductor. The hull earth must be a continuous, unbroken connection. A fuse in the earth conductor could create a dangerous open-earth condition, allowing fault current to pass through human body to earth - immediately lethal.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why IEC 60331 (fire resistant) for essential services:</strong> In a fire scenario, the most critical electrical circuits must continue to function so that fire pumps can operate, the ship can be steered to safety, and crew can communicate. Standard cables would fail within minutes at fire temperatures. IEC 60331 cables maintain circuit integrity for 3 hours at 750°C - long enough to manage and survive most fire scenarios.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-survey-checks">📋 Class Special Electrical Survey - Mandated Protocols</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>The single most heavily targeted topic in MMD orals. You must state exactly what documents you present and what is physically inspected.</strong></div></div>

  <div class="n-h2">Mandatory Surveyor Documentation Portfolio</div>
  <ul class="n-list">
    <li><strong>Statutory Certificates:</strong> Valid Safety Equipment Certificate (SEC) or Safety Construction Certificate (SCC), GMDSS Radio Maintenance Certificate (if using shore-based Option B), and Certificate of Compliance for Dangerous Goods.</li>
    <li><strong>Operational Records &amp; Logs:</strong> Comprehensive IR logs for all motors, generators, and distribution cables (with temperatures); battery service books (SG, electrolyte levels, capacity load data for GMDSS, emergency DG, and UPS banks); emergency generator monthly auto-start and annual full load trial records; fire detection panel logs; month-end reports countersigned by Chief Engineer.</li>
    <li><strong>Approved Blueprints:</strong> Single-line electrical distribution diagrams, MSB structural busbar drawings, emergency switchboard schematics, and shipboard electrical load analysis calculations.</li>
  </ul>

  <div class="n-h2">Physical Survey Inspection Checkpoints</div>
  <ul class="n-list">
    <li><strong>Main Switchboard (MSB):</strong> Insulators checked for carbon tracking or fractures, busbar joint tightness torque values verified, phase spacing clearances inspected, and all protection relays (under-voltage, earth fault, reverse power, preferential trip) functionally tested.</li>
    <li><strong>Generators &amp; Alternators:</strong> No-load verification, voltage build-up tracking, steady-state/transient frequency checks, automated parallel load sharing, and reverse power breaker trips.</li>
    <li><strong>Steering Gear (SOLAS II-1/29):</strong> Changeover links between primary and auxiliary power units tested. Verify main power units put rudder from 35° one side to 30° opposing side within maximum <span class="n-val">28 seconds</span> at full ahead service speed.</li>
    <li><strong>Battery Charge-Holding Demo (all surveyors):</strong> Switch off charger → battery terminal voltage dips momentarily then holds steady. This proves the battery is fully charged and holding capacity. If voltage continues to drop, battery needs replacement. Present recent SG readings and load test certificate.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ch22">🔥 SOLAS Chapter II-2 - Fire Protection, Detection &amp; Extinction</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <ul class="n-list">
    <li><strong>Regulation 9.4:</strong> Cables to essential services (fire pumps, steering gear) must be fire resistant (<span class="n-val">IEC 60331</span>) - must maintain circuit integrity for 3 hours at 750°C.</li>
    <li><strong>Regulation 10.2 - Emergency Fire Pump:</strong> Independently powered, outside main machinery space, minimum <span class="n-val">0.3 MPa (3 bar)</span>, capable of supplying two simultaneous jets. Driven by diesel prime mover or independent electric motor on emergency switchboard.</li>
    <li><strong>Paint Locker Fixed Smothering System:</strong> Minimum <span class="n-val">40% CO₂</span> concentration, release station outside the space, no person shall enter until confirmed safe.</li>
    <li><strong>2026 PFOS Ban:</strong> All AFFF foam containing PFOS (Per- and polyfluoroalkyl substances) must be replaced with PFOS-free alternatives before first survey after January 2026. ETO role: maintain foam proportioning pump, tank level sensors, and discharge monitoring systems.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ch3">🆘 SOLAS Chapter III - Life-Saving Appliances (LSA)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <ul class="n-list">
    <li><strong>Embarkation Lighting (Reg 11.7):</strong> Each station illuminated by emergency switchboard or dedicated battery - illuminates ladder, lifeboat, sea surface. Must activate automatically on blackout.</li>
    <li><strong>EEBD (Reg 35):</strong> Emergency Escape Breathing Device - <span class="n-val">10 minutes</span> air supply, for escape only (not firefighting). Minimum <span class="n-val">2 on bridge</span>, minimum <span class="n-val">2 in machinery space</span>. Hood type with compressed air cylinder. Annual inspection - check cylinder pressure indicator in green zone.</li>
    <li><strong>Lifeboat Battery:</strong> <span class="n-val">24V DC</span>, capable of <span class="n-val">6 consecutive cold starting attempts</span>, powers consumers (engine starter, interior lights, radio) for minimum <span class="n-val">30 minutes</span> at 0°C. Annual load test required.</li>
    <li><strong>SART Carriage (Reg 7.1):</strong> Minimum <span class="n-val">2 per ship &gt;500 GT</span>, carried in lifeboats or survival craft grab-bags. Activated by immersion or manually - responds to X-band radar by transmitting a pattern of concentric circles.</li>
    <li><strong>LSA Drills:</strong> Abandon-ship drill - at least every month (passenger ships: within 24 h of departure). Fire drill - every month. All crew must muster at their assembly stations.</li>
    <li><strong>Lifeboat Falls (Wire Ropes):</strong> End-for-end at each of first two annual surveys after installation, then renewed at interval not exceeding 5 years or when showing signs of wear/corrosion.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ch4">📻 SOLAS Chapter IV - GMDSS (Radio Communications)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Regulation 13 - Reserve Power:</strong> Dedicated GMDSS battery must supply ALL GMDSS equipment for <span class="n-val">6 hours</span> (international voyage without UPS) or <span class="n-val">1 hour</span> (with auto-switching UPS). Annual load test. Replace when capacity &lt;<span class="n-val">80%</span>. Dedicated - no other use permitted.</div></div>

  <div class="n-h2">GMDSS Sea Areas &amp; Required Equipment</div>
  <table class="n-table">
    <tr><th>Sea Area</th><th>Coverage</th><th>Required Equipment (ETO must know)</th></tr>
    <tr><td class="hl">A1</td><td>Within VHF DSC range (~20–30 nm)</td><td>VHF DSC, EPIRB, SART</td></tr>
    <tr><td class="hl">A2</td><td>Outside A1, MF DSC range (~150 nm)</td><td>A1 + MF DSC/RT radio</td></tr>
    <tr><td class="hl">A3</td><td>Outside A2, Inmarsat coverage (70°N–70°S)</td><td>A1+A2 + INMARSAT or HF DSC</td></tr>
    <tr><td class="hl">A4</td><td>Polar areas, outside all above</td><td>HF DSC + full A3 outfit</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ETO GMDSS Responsibility:</strong> Maintenance of all GMDSS equipment - testing, battery load tests, EPIRB registration verification, SART battery check (operational life date), antenna connections, NAVTEX printer paper and ribbon. Maintain GMDSS maintenance log. If shore-based maintenance (Option B), coordinate with approved service station.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ch5">🧭 SOLAS Chapter V - Safety of Navigation</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <ul class="n-list">
    <li><strong>Regulation 19 - Carriage Requirements:</strong> RADAR (two for vessels &gt;300 GT SOLAS), gyrocompass, echo sounder, AIS class A, ECDIS (mandatory phased in by ship type/size) - all based on ship size and trading area.</li>
    <li><strong>BNWAS (Reg 19.2.2):</strong> Bridge Navigational Watch Alarm System - dormant timer <span class="n-val">3–12 minutes</span>. Progressive alarms escalating to master cabin (stage 1), then officer of the watch station (stage 2), then engine room/crew alarms (stage 3). ETO maintains and tests monthly.</li>
    <li><strong>VDR (Regulation 20):</strong> Voyage Data Recorder - cargo ships &gt;<span class="n-val">3,000 GT</span>, passenger ships &gt;<span class="n-val">150 GT</span>. Records bridge audio, radar images, navigation data, alarms. ETO connects inclinometer output to VDR (2026 requirement).</li>
    <li><strong>AIS (Reg 19.2.4):</strong> Automatic Identification System - class A mandatory on all SOLAS vessels &gt;300 GT on international voyages. Transmits ship ID, position, course, speed. ETO maintains antenna, ensure correct MMSI and voyage data entered.</li>
    <li><strong>ECDIS:</strong> Electronic Chart Display and Information System - mandatory for new ships and phased-in for existing. ETO ensures chart licenses updated, system backup ECDIS or paper charts available.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ch6-7">📦 SOLAS Chapters VI &amp; VII - Cargo &amp; Dangerous Goods</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-h2">Chapter VI - Carriage of Cargoes</div>
  <ul class="n-list">
    <li><strong>Scope:</strong> Covers bulk cargoes (grain, ore, coal), liquids, and general cargo. Requirements for cargo securing, stowage, loading/discharging procedures, and cargo monitoring.</li>
    <li><strong>ETO Role - Cargo Temperature Monitoring:</strong> Refrigerated cargo vessels - maintain refrigeration electrical systems, temperature sensors, alarm systems. Log all temperature deviations.</li>
    <li><strong>ETO Role - Grain Cargoes:</strong> Grain in bulk is susceptible to liquefaction (similar to Group A solid bulk cargoes - can shift). ETO maintains moisture content monitoring sensors where fitted.</li>
    <li><strong>CSS Code:</strong> Cargo Securing Manual - approved by flag state. Lashings, locking devices, and securing equipment all electrically maintained if powered.</li>
  </ul>

  <div class="n-h2">Chapter VII - Carriage of Dangerous Goods</div>
  <ul class="n-list">
    <li><strong>IMDG Code:</strong> International Maritime Dangerous Goods Code - mandatory under SOLAS VII. Classifies dangerous goods into 9 classes (explosives, gases, flammables, oxidisers, toxics, etc.).</li>
    <li><strong>ETO Role:</strong> Ensure proper electrical equipment installed in cargo spaces carrying Class 2 (flammable gases) or Class 3 (flammable liquids) - explosion-proof (IEC 60079) fittings required. Maintain cargo space ventilation fans (electrically powered) to prevent build-up of flammable vapours.</li>
    <li><strong>EmS:</strong> Emergency Schedules - fire and spillage emergency response procedures for each dangerous good class. ETO must know location of EmS guide (muster station, bridge).</li>
    <li><strong>IMDG vs IMSBC:</strong> IMDG = packaged dangerous goods (drums, containers). IMSBC = International Maritime Solid Bulk Cargoes Code - for unpackaged solid bulk cargoes that may liquefy or be flammable.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor question (Kamath, Deswal):</strong> "What is an IMDG Class 1 cargo and what electrical precautions apply?" - Class 1 = Explosives. All electrical equipment in the vicinity must be de-energised or explosion-proof. No spark-producing tools. ETO must verify switchboard isolation before any hot work near such cargo.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-loadline">⚓ Load Line Convention - Freeboard &amp; Plimsoll Line</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why ETO needs to know Load Line:</strong> Stability sensors, draft gauges, and load line zone monitoring systems are electrical. Surveyors ask ETO about the Plimsoll mark in the context of ship stability and applicable regulations.</div></div>

  <div class="n-h2">Plimsoll Marks - The Load Line Disc</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:10px;margin:10px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Load Line Zones</div>
      <div class="card-desc">
        <strong>F</strong> = Fresh Water<br>
        <strong>T</strong> = Tropical<br>
        <strong>S</strong> = Summer (central disc line)<br>
        <strong>W</strong> = Winter<br>
        <strong>WNA</strong> = Winter North Atlantic<br>
        <strong>TF</strong> = Tropical Fresh Water
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">ETO Relevance</div>
      <div class="card-desc">
        • Electronic draft gauges - calibrated draft monitoring system<br>
        • Stability computer - receives trim/draft sensor data<br>
        • Load cell sensors in cargo holds<br>
        • Inclinometer (new 2026 mandatory VDR input)<br>
        • Draught mark lighting (SOLAS requirement)
      </div>
    </div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fresh Water Allowance (FWA):</strong> In fresh water, a ship floats higher than in salt water (lower density). The FWA is marked to allow this. Load line convention under ILLC 1966 (International Load Line Convention) - administered by flag state, surveyed by class society.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-colregs">🚢 COLREGS - Collision Regulations (Basic ETO Awareness)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why ETO needs COLREGS awareness:</strong> ETO maintains navigation lights, sound signalling equipment, and shapes - all COLREGS items. PSC inspectors check navigation light performance and ETO must certify they are operational.</div></div>

  <div class="n-h2">COLREGS Navigation Light Requirements - ETO Maintenance Scope</div>
  <table class="n-table">
    <tr><th>Light</th><th>Colour</th><th>Arc</th><th>Minimum Visibility</th></tr>
    <tr><td>Masthead (Forward)</td><td class="hl">White</td><td>225°</td><td class="ok">6 nm (&gt;50 m vessel)</td></tr>
    <tr><td>Masthead (Aft / second mast)</td><td class="hl">White</td><td>225°</td><td class="ok">6 nm (&gt;50 m vessel)</td></tr>
    <tr><td>Port Sidelight</td><td class="bad">Red</td><td>112.5°</td><td class="ok">3 nm</td></tr>
    <tr><td>Starboard Sidelight</td><td class="ok">Green</td><td>112.5°</td><td class="ok">3 nm</td></tr>
    <tr><td>Sternlight</td><td class="hl">White</td><td>135°</td><td class="ok">3 nm</td></tr>
    <tr><td>All-round light (anchor, etc.)</td><td class="hl">White/various</td><td>360°</td><td class="ok">3 nm</td></tr>
  </table>

  <div class="n-h2">ETO Navigation Light Responsibilities</div>
  <ul class="n-list">
    <li><strong>Navigation Light Control Panel:</strong> Maintained on bridge - indicator lamps for each navigation light circuit. Alarm activates when a bulb fails. ETO maintains and tests panel quarterly.</li>
    <li><strong>Bulb Replacement:</strong> Approved spare bulbs must match the specifications in the approved navigation light certificate. LED navigation lights require approved type-tested units - not general LED bulbs.</li>
    <li><strong>Sound Signalling (Rule 33):</strong> Whistle (electric or compressed air), bell, and gong (vessel &gt;100 m). ETO maintains electric whistle compressor, bell striker, and associated circuits.</li>
    <li><strong>Navigation Light Failure (COLREGS Rule 20):</strong> If a required navigation light fails at sea, ETO must repair or replace as quickly as possible. Any failure at night in restricted visibility must be reported to master immediately.</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - COLREGS Lights for ETO:</strong> Red-Port-Left (RPL) = Red, Port side, 112.5°, 3 nm. Green-Starboard-Right (GSR). White masthead 225° forward. White stern 135° aft. All-round white 360° for anchor/not-under-command/restricted manoeuvring. "You <strong>PORT</strong> wine, and wine is <strong>RED</strong>."</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ism">⚓ ISM Code - Safety Management &amp; Audit Architecture (SOLAS Chapter IX)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Mandatory under SOLAS Chapter IX. Surveyors Kamath and Deswal screen your understanding of audit failures.</strong> Know DOC vs SMC, DPA role, and exact definitions of non-conformity vs major non-conformity.</div></div>

  <div class="n-h2">The Role of the Designated Person Ashore (DPA)</div>
  <p class="n-p">Enforced by <strong>ISM Code Clause 4</strong>, the DPA serves as the critical operational conduit linking individual ships to highest levels of shore-side corporate management. The DPA monitors safe operation of all fleet vessels, ensures adequate resources and technical support are delivered, and evaluates all reported accidents or near-misses. The DPA must remain reachable <span class="n-val">24/7</span> for shipboard emergencies.</p>

  <div class="n-h2">DOC vs SMC (Document of Compliance &amp; Safety Management Certificate)</div>
  <table class="n-table">
    <tr><th>Document</th><th>Issued To</th><th>Validity</th><th>Issued By</th><th>Certifies</th></tr>
    <tr><td><strong>DOC</strong></td><td class="hl">The COMPANY</td><td>5 years (annual audit)</td><td class="ok">Flag State (via class society)</td><td>Company SMS complies with ISM Code. Copy kept onboard.</td></tr>
    <tr><td><strong>SMC</strong></td><td class="hl">The SHIP</td><td>5 years (intermediate audit)</td><td class="ok">Flag State (via class society)</td><td>Ship and crew operate per approved SMS. Original kept onboard.</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>12 Elements of the Safety Management System (SMS):</strong><br>
  1. Safety and environmental protection policy · 2. Company responsibilities and authority · 3. Designated persons · 4. Master's responsibility and authority · 5. Resources and personnel · 6. Shipboard operations (plans and instructions) · 7. Emergency preparedness · 8. Reporting &amp; analysis of non-conformities, accidents, hazardous occurrences · 9. Maintenance of ship and equipment · 10. Documentation · 11. Company verification, review, evaluation · 12. Certification, verification, control.</div></div>

  <div class="n-h2">Non-Conformity vs. Major Non-Conformity vs. PSC Deficiency</div>
  <ul class="n-list">
    <li><strong>Minor Non-Conformity:</strong> An occasional or isolated objective failure to fulfill a requirement of the Safety Management System (SMS) that does not immediately threaten ship safety. Corrective action must be closed out within an agreed timeframe (typically before the next audit cycle). <em>Example: An ETO forgets to sign a routine battery log.</em></li>
    <li><strong>Major Non-Conformity (MNC):</strong> A severe, systematic deviation that poses an immediate, serious threat to the safety of crew, the ship, or the marine environment. <span class="bad"><strong>An MNC instantly suspends or withdraws the ship's SMC and the company's DOC</strong></span>, grounding the vessel until resolved. <em>Example: Failing to execute mandatory emergency blackout or fire drills for months.</em></li>
    <li><strong>PSC Deficiency:</strong> A physical equipment, documentation, or operational defect logged directly by a Port State Control officer during a port inspection. Key distinction: A Non-Conformity = systemic/procedural SMS failure found during an ISM audit. A Deficiency = localised physical component failure found during a port entry inspection.</li>
  </ul>

  <div class="n-h2">Safety Override Authority &amp; Registration Protocol</div>
  <p class="n-p">An override means manually bypassing an automated alarm or safety trip circuit to allow equipment to run despite a critical parameter fault. The ETO must never unilaterally execute a safety bypass. The <strong>Master</strong> holds ultimate authority over the ship; the <strong>Chief Engineer</strong> retains authority over engine room machinery overrides.</p>
  <ol class="n-steps">
    <li>Obtain direct verbal and written authorization from the Chief Engineer or Master.</li>
    <li>Formally enter the bypass inside the engine room log and the <strong>Switchboard Override Register</strong> (logging date, system tag, authorizer, and reason).</li>
    <li>Institute mandatory increased monitoring - watchkeeper physically assesses the overridden asset every 15–30 minutes.</li>
    <li>Deploy compensatory measures, such as placing an engineer with a portable thermometer directly at a bearing if its PT100 sensor trip is bypassed.</li>
    <li>Cancel the override and clear the circuit immediately once the emergency or sensor repair is completed.</li>
    <li>Critical switch locks must be key-operated or physically sealed to eliminate accidental tampering. <span class="bad"><strong>Never bypass fixed CO₂ lines or steering gear safeties.</strong></span></li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-classflag">🏛️ Class Society vs Flag State vs Port State - Who Does What?</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "Who issued your Safety Management Certificate?" and "What is the difference between a class surveyor and a flag state surveyor?"</strong> This distinction is frequently tested.</div></div>

  <table class="n-table">
    <tr><th>Authority</th><th>Examples</th><th>Role</th><th>What They Issue/Audit</th></tr>
    <tr><td class="hl"><strong>Flag State</strong></td><td>India (DG Shipping), Panama, Liberia, Marshall Islands</td><td>Statutory authority - grants right to fly flag, enforces IMO conventions on behalf of IMO</td><td class="ok">Safety Management Certificate (SMC), Document of Compliance (DOC), Load Line Certificate, Tonnage Certificate, MARPOL certificates. Final responsibility under international law.</td></tr>
    <tr><td class="hl"><strong>Class Society</strong> (Recognised Organisation)</td><td>Lloyd's Register, DNV, Bureau Veritas, ClassNK, IRS (Indian Register of Shipping)</td><td>Technical expert acting on behalf of flag state under a Recognised Organisation (RO) agreement. Also issues own class certificates for hull/machinery.</td><td class="ok">Safety Equipment Certificate (SEC), Safety Construction Certificate (SCC), GMDSS Radio Certificate - issued as flag state delegate. PLUS own Class Certificate for hull and machinery.</td></tr>
    <tr><td class="hl"><strong>Port State Control (PSC)</strong></td><td>Paris MOU, Tokyo MOU, Indian Ocean MOU</td><td>Foreign country's inspection authority - inspects ships in port to verify compliance with international conventions</td><td class="ok">PSC Inspection - issues deficiency notices, can detain vessel if safety-critical deficiencies found. PSC has no authority over the flag state but can prevent departure.</td></tr>
  </table>

  <div class="n-h2">ISM Audit vs Class Survey - Key Difference</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:10px;margin:10px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">ISM Audit (SMS Audit)</div>
      <div class="card-desc">
        <strong>Checks:</strong> Safety Management System - procedures, records, drills, near-miss reports, DPA contact, master's authority.<br>
        <strong>Who:</strong> Flag state auditor (or RO on behalf).<br>
        <strong>Result:</strong> Issues/renews DOC &amp; SMC. Non-conformities noted.<br>
        <strong>Frequency:</strong> Annual audit (DOC) + Intermediate (SMC).
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Class Survey (Technical Survey)</div>
      <div class="card-desc">
        <strong>Checks:</strong> Physical condition of hull, machinery, electrical systems, safety equipment.<br>
        <strong>Who:</strong> Class surveyor (Lloyd's, DNV, IRS, etc.).<br>
        <strong>Result:</strong> Issues/renews Class Certificate + statutory safety certificates.<br>
        <strong>Frequency:</strong> Annual survey + Special (5-year dry dock).
      </div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Flag State = <strong>LAW</strong> (legal authority, grants flag, issues SMC/DOC). Class Society = <strong>TECHNICAL</strong> (checks the ship is structurally and mechanically sound, acts as flag state's delegate for statutory certificates). PSC = <strong>ENFORCEMENT</strong> at the port level.</div></div>

  <div class="n-h2">Special Periodical Survey - 5-Year Cycle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Class renewal survey cycle:</strong> Annual surveys (Class I–IV) + Special Survey every 5 years. Special Survey = full dry-dock inspection. Hull plating thickness gauged, all sea chests opened, propeller shaft drawn, rudder pintle clearances measured. For electrical: all cables inspected for chafing and deterioration, busbar joint torques verified, all protection relay calibrations checked and documented. ETO must prepare the electrical documentation portfolio for the class surveyor attending the Special Survey.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-isps">🛡️ ISPS Code - Maritime Security Controls (SOLAS XI-2)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ISPS = International Ship and Port Facility Security Code.</strong> Mandatory amendment to SOLAS XI-2. Introduced after <span class="n-val">11 September 2001</span> terrorist attacks. Entered into force <span class="n-val">1 July 2004</span>.</div></div>

  <div class="n-h2">MARSEC Security Levels Defined</div>
  <ul class="n-list">
    <li><strong>MARSEC Level 1 (Normal):</strong> Baseline appropriate safety tier maintained at all times. Enforces routine 24-hour gangway watches, basic access controls, continuous SSAS arming, and random security rounds.</li>
    <li><strong>MARSEC Level 2 (Heightened):</strong> Activated during a documented elevated risk of a security incident. Triggers additional security patrols, tighter access restrictions, logging of all boarding personnel baggage, and enhanced CCTV monitoring focus.</li>
    <li><strong>MARSEC Level 3 (Exceptional):</strong> Triggered when a security incident is probable or imminent. Enforces total structural ship lockdown, stops non-essential operations, restricts boarding to military/security personnel, and may involve immediate SSAS activation or refusing port entry.</li>
  </ul>

  <div class="n-h2">Key Personnel and Documents</div>
  <table class="n-table">
    <tr><th>Title</th><th>Full Name</th><th>Responsibility</th></tr>
    <tr><td class="hl"><span class="n-val">CSO</span></td><td>Company Security Officer</td><td>Shore-based. Approves Ship Security Plan (SSP). Responsible for company-wide ISPS compliance.</td></tr>
    <tr><td class="hl"><span class="n-val">SSO</span></td><td>Ship Security Officer</td><td>Onboard officer (usually Chief Officer). Implements SSP. Conducts drills. Reports to CSO.</td></tr>
    <tr><td class="hl"><span class="n-val">SSP</span></td><td>Ship Security Plan</td><td>Confidential document approved by flag state. Contains security procedures for all 3 MARSEC levels.</td></tr>
    <tr><td class="hl"><span class="n-val">ISSC</span></td><td>International Ship Security Certificate</td><td>Valid for 5 years. Issued by flag state after verification of SSP implementation. Must be onboard.</td></tr>
    <tr><td class="hl"><span class="n-val">SSAS</span></td><td>Ship Security Alert System</td><td>Hidden activation buttons send silent distress to CSO and flag state - no onboard alarm. Test every 3 months.</td></tr>
    <tr><td class="hl"><span class="n-val">DoS</span></td><td>Declaration of Security</td><td>Formal agreement between ship and port facility defining each party's security responsibilities for the specific port call.</td></tr>
  </table>

  <div class="n-h2">ETO Security Infrastructure Maintenance Scope</div>
  <ul class="n-list">
    <li><strong>CCTV Arrays:</strong> Verify cameras operate continuously, fields of view completely cover the gangway and all restricted access headers, and historical recording data is backed up. Ensure night-vision capability in low-light areas.</li>
    <li><strong>Access Controls:</strong> Maintain electronic card readers, PIN pads, and electromagnetic locks securing <strong>Designated Restricted Areas</strong> (Navigation Bridge, Engine Room, Steering Flat, Radio Room, Emergency Generator Room, and the ECR). Ensure mechanical emergency fail-safe overrides function instantly on fire panel trips.</li>
    <li><strong>SSAS Testing:</strong> Test the hidden activation pushbuttons (one on bridge, one hidden in crew spaces) every <span class="n-val">3 months</span> to confirm they dispatch silent distress messages to the company and flag state without firing any onboard alarms. Coordinate with CSO before testing - notify flag state via proper procedure to avoid false alert response. Never live-test SSAS unannounced.</li>
  </ul>

  <div class="n-h2">CSR - Continuous Synopsis Record</div>
  <p class="n-p">Required by SOLAS XI-1/Reg 5. Provides an onboard record of the ship's history: flag, owner, ISM company, ship name, IMO number, class society changes. Must be available for inspection at all times. Cannot be altered - amendments are added as new pages.</p>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-conventions">🏛️ International Conventions - MLC 2006 &amp; STCW</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Core legal instruments regulating technical engineering competencies, crew welfare, and rest hours.</strong> Rest hour numbers are mandatory exam knowledge - wrong numbers will fail the oral.</div></div>

  <div class="n-h2">MLC 2006 - Seafarers' Bill of Rights &amp; Work-Rest Limits</div>
  <p class="n-p">The Maritime Labour Convention (MLC) establishes baseline working and living requirements for seafarers via 5 main Titles:</p>
  <ul class="n-list">
    <li><strong>Title 1:</strong> Minimum Requirements (Minimum age 16, medical certificates, training benchmarks)</li>
    <li><strong>Title 2:</strong> Conditions of Employment (SEAs, wages, mandatory rest curves)</li>
    <li><strong>Title 3:</strong> Accommodation &amp; Recreation (Cabin layouts, mess room criteria, AC/ventilation - ETO owned)</li>
    <li><strong>Title 4:</strong> Health Protection &amp; Medical Care (Onboard medical access, welfare networks, social security)</li>
    <li><strong>Title 5:</strong> Compliance and Enforcement (Flag state oversight, port state control deficiency processing)</li>
  </ul>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>MANDATORY REST HOUR LIMITS - memorise exactly (asked by all surveyors):</strong><br>
  ✅ Minimum <span class="n-val">10 hours of rest</span> in any <span class="n-val">24-hour</span> period<br>
  ✅ Minimum <span class="n-val">77 hours of rest</span> in any <span class="n-val">7-day</span> period<br>
  ✅ Rest cannot be split into more than <span class="n-val">two segments</span>; one segment must deliver minimum <span class="n-val">6 hours</span> continuous rest<br>
  ✅ Maximum work = 14 hours in any 24 hours / 72 hours in any 7 days<br>
  ❌ Falsifying rest hour logs = PSC detention violation</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Memory Aid - Rest Hours:</strong> <strong>10-77-6</strong> = 10 hours rest per day, 77 hours rest per week, 6 hours minimum single block. Maximum work = <strong>14-72</strong> = 14 hrs/day, 72 hrs/week. Think: "10 rest, 14 work = 24" ✓ and "77 rest, 72 work = 149 ≈ 7×24 = 168" - not exact but helps anchor the numbers.</div></div>

  <div class="n-h2">STCW - Manila Amendment 2010 &amp; ETO Certification</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Key change for ETOs:</strong> The Manila Amendment formally created the Electro-Technical Officer (ETO) as a recognised officer under STCW Chapter III, Regulation III/6. It established the minimum standard of competency (Table A-III/6) and introduced mandatory security training, leadership/teamwork modules, and 5-year refresher training (revalidation).</div></div>

  <table class="n-table">
    <tr><th>STCW Regulation</th><th>Title</th><th>What it Covers for ETO</th></tr>
    <tr><td class="hl"><span class="n-val">Reg III/6</span></td><td>Officer in charge of an electrical engineering watch (ETO)</td><td class="ok">Minimum standards of competence - electrical, electronic and control engineering at management level</td></tr>
    <tr><td class="hl">Reg VI/1</td><td>Basic Safety Training</td><td>PSSR, FPFF, EFA, PST - all ETOs must hold valid certificates</td></tr>
    <tr><td class="hl">Reg VI/2</td><td>Proficiency in Survival Craft &amp; Rescue Boats</td><td>PSCRB certificate required before CoC</td></tr>
    <tr><td class="hl">Reg VI/3</td><td>Advanced Firefighting</td><td>AFF certificate - mandatory for officers</td></tr>
    <tr><td class="hl">Reg VI/6</td><td>Security Awareness / Ship Security Officer</td><td>Basic security training or SSO training certificate</td></tr>
  </table>

  <div class="n-h2">STCW Hours of Rest - Watchkeeping Officers</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">STCW sets the same rest hour requirements as MLC: minimum 10 hours in 24, minimum 77 hours in 7 days. These are the same thresholds - MLC makes them universal for all seafarers, STCW enforces them specifically for watchkeeping personnel. Rest hour records must be maintained in an approved format (MLC-compliant form) and made available to port state control inspectors.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-enclosedspace">⚠️ Enclosed Space Gas Limits &amp; Entry Permits</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>CO/H₂S/SO₂ ppm values are tested in orals and PSC inspections.</strong></div></div>

  <p class="n-p">Before entering cargo holds, ballast tanks, chain lockers, cofferdams, or any enclosed/confined space, a formal Permit to Work (PTW) must be cleared after atmospheric gas testing with a calibrated multi-gas meter. Standby person must be stationed at entry point with means of communication and rescue equipment.</p>

  <table class="n-table">
    <tr><th>Gas</th><th>Safe Threshold</th><th>Hazard</th><th>TWA (8-hr Work Limit)</th></tr>
    <tr><td>Oxygen (O₂)</td><td class="hl">Between <span class="n-val">19.5%</span> and <span class="n-val">23.5%</span></td><td>Below 19.5% = asphyxiation. Above 23.5% = fire/explosion hazard.</td><td>Normal atmosphere = 20.9%</td></tr>
    <tr><td>Carbon Monoxide (CO)</td><td class="hl">&lt;<span class="n-val">35 ppm</span></td><td>Binds to haemoglobin 200× more readily than O₂ - rapid death at high levels</td><td class="ok">TWA: <span class="n-val">35 ppm</span> · STEL: 100 ppm</td></tr>
    <tr><td>Hydrogen Sulphide (H₂S)</td><td class="hl">&lt;<span class="n-val">10 ppm</span></td><td>Lethal byproduct from biological decomposition - paralyses sense of smell at high concentrations</td><td class="ok">TWA: <span class="n-val">10 ppm</span> · STEL: 15 ppm</td></tr>
    <tr><td>Sulphur Dioxide (SO₂)</td><td class="hl">&lt;<span class="n-val">2 ppm</span></td><td>Respiratory irritant - common in cargo holds after fumigation</td><td class="ok">TWA: <span class="n-val">2 ppm</span> · STEL: 5 ppm</td></tr>
    <tr><td>Flammable gases (general)</td><td class="hl">&lt;<span class="n-val">10% LEL</span> for entry · &lt;<span class="n-val">1% LEL</span> for hot work</td><td>Below LEL = too lean to ignite. 10% LEL = approach with caution. At or above 100% LEL = explosive.</td><td>No hot work until &lt;1% LEL</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Gas Limits:</strong> <strong>O₂ 19.5–23.5 · CO 35 · H₂S 10 · SO₂ 2 ppm</strong>. Think of the numbers descending: 35 → 10 → 2 for CO → H₂S → SO₂. H₂S smells like rotten eggs but don't trust your nose - high concentrations paralyse the olfactory sense instantly.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-new2026">🆕 New 2026 SOLAS Regulations</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand new 2026 regulations - surveyors are already asking about these.</strong> Know both: Lifting Appliances (Ch II-1/3-13) and Electronic Inclinometer requirement.</div></div>

  <div class="n-h2">SOLAS II-1 Regulation 3-13 - Lifting Appliances &amp; Anchor Winches (1 January 2026)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Scope:</strong> First mandatory global safety standard for all onboard lifting appliances (cargo cranes, engine room cranes, stores cranes) and anchor handling winches. Effective <span class="n-val">1 January 2026</span>.</div></div>

  <ul class="n-list">
    <li><strong>Load testing:</strong> Proof load test at <span class="n-val">125% SWL</span> (Safe Working Load) - witnessed by class surveyor</li>
    <li><strong>New appliances:</strong> Tested before first use</li>
    <li><strong>Existing appliances:</strong> Must be tested at first SAFCON renewal survey on or after <span class="n-val">1 January 2026</span></li>
    <li><strong>SWL marking:</strong> Every appliance must be permanently marked with SWL - faded/missing markings = statutory deficiency</li>
    <li><strong>Impact:</strong> Mechanical/electrical crane failure can now result in PSC detention - directly affects Safety Construction Certificate</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO responsibility for cranes:</strong> Maintain electrical systems (motors, VFDs, limit switches, electromagnetic brakes). Overload limit switches (hoist cut-out at SWL) must be functional, calibrated, and tested annually. VFD parameter backup required. Log all maintenance in PMS.</div></div>

  <div class="n-h2">Electronic Inclinometer Requirement (1 January 2026)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Containerships and bulk carriers <span class="n-val">≥ 3,000 GT</span> must carry a mandatory electronic inclinometer connected to the VDR. Records real-time roll angles - provides hard data on ship motion to prevent parametric rolling casualties. New requirement following a series of major container ship casualties. ETO installs, maintains, and ensures VDR interface is functional.</div></div>

  <div class="n-h2">The Hong Kong Convention &amp; Inventory of Hazardous Materials (IHM)</div>
  <p class="n-p">Entering into force in <strong>June 2025</strong>, the Hong Kong International Convention forces all ships &gt;500 GT to carry an active IHM log to protect shipyard recycling workers from lethal exposure to legacy compounds. The ETO must maintain <strong>Part I of the IHM</strong> to map out and trace electrical components containing hazardous materials:</p>
  <ul class="n-list">
    <li><strong>PCB-Filled Capacitors:</strong> Found inside older fluorescent light ballasts, motor starters, and MSB filter networks. Forbidden on new builds since the 1990s but must be logged if present.</li>
    <li><strong>Heavy Metal Loops:</strong> Mercury switches inside automated level instruments, fluorescent/discharge tubes, and lead deposits inside starting/UPS battery banks.</li>
    <li><strong>Submerged Transducers:</strong> Organotin Tributyltin (TBT) compounds historically bonded into acoustic faces of echo sounders or Doppler speed log transducers.</li>
  </ul>

  <div class="n-h2">SEEMP Part 3, EEXI &amp; Operational CII Ratings</div>
  <p class="n-p">Introduced under <strong>MARPOL Annex VI</strong>, SEEMP Part 3 creates a mandatory operational carbon intensity score (grams CO₂ per cargo-carrying capacity per nautical mile). Ships receive an annual rating scaling from <strong>A (Best) to E (Worst)</strong>. Sustained D or E grades freeze commercial trading profiles and mandate a flag-state corrective action plan. The ETO directly drives fuel savings through a 7-point efficiency checklist:</p>
  <ol class="n-steps">
    <li><strong>LED Lighting Upgrades:</strong> Converting fluorescent and halogen lamps to high-efficiency LED chips, slashing hotel load by 30–60%.</li>
    <li><strong>VFD Fan Adaptation:</strong> Retrofitting variable frequency drives onto sea water cooling pumps and ventilation fans. Dropping fan speed to 80% reduces power consumption by nearly <span class="n-val">50%</span> (affinity laws: P ∝ N³).</li>
    <li><strong>Cold Ironing (Shore Power):</strong> Connecting to shore power networks at berth to shut down auxiliary diesel generators completely.</li>
    <li><strong>Waste Heat Recovery:</strong> Maintaining exhaust gas economizer sensor feedback loops to reduce auxiliary boiler burner fuel consumption.</li>
    <li><strong>Power Factor Correction:</strong> Calibrating automatic capacitor banks to prevent generators from delivering high apparent power (kVA) for the same useful (kW) load, which wastes fuel through thermal losses.</li>
    <li><strong>PMS Optimization:</strong> Configuring the Power Management System to run a single generator at 75% load rather than running two parallel units at 35% each, where fuel burn is less efficient.</li>
    <li><strong>Mechanical Load Reductions:</strong> Tracking and replacing worn motor bearings to eliminate high shaft friction current draw.</li>
  </ol>

  <div class="n-h2">MARPOL Annex VI Low-Flashpoint Fuel Certification Rules</div>
  <ul class="n-list">
    <li><strong>Pre-Bunkering Flashpoint Declaration:</strong> Bunker supplier must issue a formal written declaration before bunkering operations begin, certifying the fuel flashpoint satisfies the SOLAS safety minimum of <span class="n-val">≥60°C</span>.</li>
    <li><strong>Bunker Delivery Note (BDN) Content:</strong> The BDN must explicitly state the exact measured flashpoint if below 70°C, or carry a formal text statement confirming flashpoint was measured at or above 70°C. If the BDN shows a value below 60°C, the ship must refuse the bunker batch and report a statutory violation to the flag state.</li>
  </ul>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - SOLAS Chapters for ETO:</strong> II-1 = electrical (voltage ±2.5%, emergency DG cargo 45s/18h, passenger 30s/36h) | II-2 = fire (IEC 60331 fire-resistant cables, PFOS ban 2026) | III = LSA (EEBD 10 min, lifeboat 6 starts, SART 2 per ship) | IV = GMDSS (battery 6h/1h) | V = navigation (VDR &gt;3000 GT, BNWAS 3–12 min) | IX = ISM (DOC=company, SMC=ship) | XI-2 = ISPS (SSAS test 3 monthly, MARSEC 1/2/3) | New 2026 = Lifting Appliances (125% SWL) + Inclinometer + IHM.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 16</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How many chapters in SOLAS and which covers electrical? (All surveyors)</strong><br><strong>Ideal Answer:</strong> SOLAS has <span class="n-val">14 chapters</span>. Electrical installations are in Chapter II-1, Part D. It covers: main and emergency power sources (Reg 40–45), voltage and frequency limits (Reg 40), emergency source of power (Reg 43), and cable requirements (Reg 45).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>PSC inspector wants a blackout test - describe procedure. (All surveyors)</strong><br><strong>Ideal Answer:</strong> 1. Brief all staff. 2. Inform bridge - safe navigational situation. 3. Verify emergency DG in AUTO mode. 4. Trip running main generator ACB - start timer. 5. Emergency DG must auto-start and supply emergency switchboard within <span class="n-val">45 seconds</span>. 6. Verify essential services: emergency lighting, navigation lights, fire detection, GMDSS. 7. Start main generator, synchronise, restore loads sequentially. 8. Log all times, results, and any defects. Present records to PSC inspector.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the transitional source of emergency power? (All surveyors)</strong><br><strong>Ideal Answer:</strong> A dedicated battery (SOLAS II-1/43) that automatically supplies emergency lighting, navigation lights, and internal communications for minimum <span class="n-val">30 minutes</span>. Covers the critical gap between blackout occurring and emergency generator coming online (<span class="n-val">45 seconds</span>). Automatic switchover - no manual action needed. This is separate from the GMDSS battery which has its own 6-hour reserve.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What does SOLAS say about cables in machinery spaces? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> SOLAS II-2/9.4: cables to essential services (fire pumps, steering gear, emergency lighting) must be fire resistant - <span class="n-val">IEC 60331</span>, maintains circuit integrity for minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span>. SOLAS II-1/45: all cables in enclosed spaces must be flame retardant (<span class="n-val">IEC 60332</span>). Hazardous areas: explosion protected (<span class="n-val">IEC 60079</span>). Fuses must NOT be fitted in earthed conductors.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the new SOLAS 2026 lifting appliances regulation? (New question - all surveyors post-2026)</strong><br><strong>Ideal Answer:</strong> SOLAS II-1 Regulation 3-13, effective <span class="n-val">1 January 2026</span>. First mandatory global standard for lifting appliances and anchor winches. Requires proof load testing at <span class="n-val">125% SWL</span> witnessed by class surveyor. All appliances must be permanently marked with SWL. Existing ships tested at first SAFCON renewal after January 2026. Crane defects can now result in PSC detention. ETO must maintain all electrical components (motors, brakes, limit switches) and test overload cut-outs annually.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the four pillars of IMO? (Kamath, Vishwanathan, Deswal)</strong><br><strong>Ideal Answer:</strong> The four pillars underpinning international maritime safety and environmental standards are: <span class="n-val">SOLAS</span> (Safety of Life at Sea), <span class="n-val">MARPOL</span> (Marine Pollution prevention), <span class="n-val">STCW</span> (Standards of Training, Certification and Watchkeeping), and <span class="n-val">MLC</span> (Maritime Labour Convention). Together these conventions cover ship safety, pollution prevention, competency of seafarers, and living and working conditions.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What does SOLAS stand for and what is its purpose? (All surveyors)</strong><br><strong>Ideal Answer:</strong> SOLAS = <span class="n-val">Safety of Life at Sea</span>. Primary international treaty for ship safety, setting minimum safety standards for construction, equipment, and operations. Key purposes: ensuring personal and ship safety, setting life-saving and emergency equipment standards, safe management systems (ISM), maritime security (ISPS), preventing collisions at sea. First adopted <span class="n-val">1914</span> after the Titanic disaster; current version in force from <span class="n-val">1980</span>.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Name all SOLAS chapters. Which covers bulk carriers? What is Chapter XIII? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> SOLAS has <span class="n-val">14 chapters</span>: I – General | II-1 – Construction/Electrical | II-2 – Fire | III – LSA | IV – Radio/GMDSS | V – Navigation | VI – Cargoes | VII – Dangerous Goods | VIII – Nuclear | IX – ISM | X – High Speed Craft | XI-1 – Special Safety | XI-2 – Maritime Security (ISPS) | <strong>XII – Bulk Carriers</strong> | <strong>XIII – Verification of Compliance (IMO Audit Scheme)</strong>. Chapter XII requires structural strength checks, flooding detection, hatch cover testing. Chapter XIII formalises the IMO Member State Audit Scheme.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between a Convention, Code, Protocol, and Amendment? (All surveyors)</strong><br><strong>Ideal Answer:</strong> Convention = international treaty - legally binding (SOLAS, MARPOL). Protocol = major amendment requiring separate ratification (MARPOL 73/78). Code = detailed technical specifications on how to comply - may be mandatory (ISM, ISPS) or recommendatory. Amendment = routine change under IMO tacit acceptance - enters force automatically unless majority object. Annex = technical appendix to convention (MARPOL Annex I = oil).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the ISPS Code and when did it come into force? (All surveyors)</strong><br><strong>Ideal Answer:</strong> ISPS = <span class="n-val">International Ship and Port Facility Security</span> Code. Mandatory amendment to SOLAS Chapter XI-2, introduced after <span class="n-val">11 September 2001</span> attacks. Entered into force <span class="n-val">1 July 2004</span>. Each vessel must have a Ship Security Plan (SSP) approved by flag state, International Ship Security Certificate (ISSC), and a Ship Security Officer (SSO). Three security levels: 1 (normal), 2 (heightened), 3 (exceptional). ETO role: maintain CCTV, access control, alarm systems, and SSAS (tested every 3 months).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the MLC rest hour requirements? (All surveyors - very commonly asked)</strong><br><strong>Ideal Answer:</strong> Under both MLC 2006 and STCW, minimum rest hours are: <span class="n-val">10 hours</span> in any 24-hour period, and <span class="n-val">77 hours</span> in any 7-day period. Rest must not be split into more than two periods; one continuous rest period must be at least <span class="n-val">6 hours</span>. Maximum work = 14 hours in 24 hours and 72 hours in 7 days. Falsifying rest hour logs is a PSC detention offence. Records must be maintained in approved format and available for PSC inspection.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Who issued your Safety Management Certificate - the class society or the flag state? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> The Safety Management Certificate (SMC) is issued by the <strong>Flag State</strong> (or by the class society acting as a Recognised Organisation on behalf of the flag state). The flag state issues both the DOC (to the company) and the SMC (to the ship) under SOLAS Chapter IX / ISM Code. The class society conducts the technical survey and issues the Safety Construction Certificate, Safety Equipment Certificate, and GMDSS Radio Certificate - either as flag state delegate or as part of their class certification. It is important to distinguish: flag state = legal/statutory authority; class society = technical inspection body.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the enclosed space gas limits you must check before entry? (All surveyors)</strong><br><strong>Ideal Answer:</strong> Before enclosed space entry, test with a calibrated multi-gas meter: Oxygen must be between <span class="n-val">19.5% and 23.5%</span>; Carbon Monoxide (CO) below <span class="n-val">35 ppm</span> TWA; Hydrogen Sulphide (H₂S) below <span class="n-val">10 ppm</span> TWA; Sulphur Dioxide (SO₂) below <span class="n-val">2 ppm</span> TWA; flammable gases below <span class="n-val">1% LEL</span> for hot work or below 10% LEL for entry. A standby person must be stationed at the entry point. Formal Permit to Work must be issued and signed by Chief Officer.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the difference between PSC deficiency and ISM non-conformity? (Deswal, Kamath)</strong><br><strong>Ideal Answer:</strong> A PSC deficiency is a physical equipment or documentation failure identified by a Port State Control officer during a port inspection - for example, a fire extinguisher not serviced, a lifeboat battery flat, or a navigation light not working. It results in a written deficiency notice; if safety-critical, it can result in detention. An ISM Non-Conformity is a procedural or SMS failure found during a formal ISM audit - for example, drills not being conducted or records not maintained per the SMS. A Major Non-Conformity can result in suspension of the SMC, effectively making the ship unable to operate commercially until resolved.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What ETO maintenance is required for navigation lights? (Vishwanathan, Praveen Nair)</strong><br><strong>Ideal Answer:</strong> Navigation lights must comply with COLREGS Rule 22 (visibility ranges) and Rule 21 (arcs). ETO responsibilities: maintain the navigation light control panel on the bridge - all indicator circuits must function; replace failed bulbs with approved type-tested equivalents (LED units must be type-approved for navigation lights); test all circuits quarterly and log results; maintain approved spare bulbs as per inventory list; test the failure alarm function. At sea, any navigation light failure must be repaired immediately - at night in restricted visibility, inform the master at once.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 16</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Regulation / Item</th><th>Exam Frequency</th><th>Key Values to Memorise</th></tr>
    <tr><td>SOLAS Chapters total</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">14 chapters</span> | Ch II-1 = electrical | Ch XII = bulk carriers | Ch XIII = verification</td></tr>
    <tr><td>SOLAS II-1/40 Voltage/Frequency</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Steady ±<span class="n-val">2.5%</span>V / ±<span class="n-val">5%</span>f | Transient ±<span class="n-val">20%</span>V / ±<span class="n-val">10%</span>f | Recovery <span class="n-val">1.5s</span> / <span class="n-val">5s</span></td></tr>
    <tr><td>SOLAS II-1/43 Emergency DG - Cargo</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Auto-start <span class="n-val">45 s</span> | Endurance <span class="n-val">18 h</span> | Above bulkhead deck, outside ER</td></tr>
    <tr><td>SOLAS II-1/43 Emergency DG - Passenger</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Auto-start <span class="n-val">30 s</span> | Endurance <span class="n-val">36 h</span></td></tr>
    <tr><td>Transitional source</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Battery | <span class="n-val">30 min</span> | Nav lights + emergency lighting + comms | Auto - no manual action</td></tr>
    <tr><td>Cable standards</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>IEC 60331 = fire resistant (<span class="n-val">3 h / 750°C</span>) | IEC 60332 = flame retardant | IEC 60079 = explosion protected</td></tr>
    <tr><td>No fuse in earthed conductor</td><td class="hl">⭐⭐⭐⭐ Reg 45</td><td>Fuses NEVER in earthed conductor - open earth = lethal hazard</td></tr>
    <tr><td>New 2026 Lifting Appliances</td><td class="hl">⭐⭐⭐⭐⭐ New reg - will be asked</td><td>SOLAS II-1/3-13 | Proof load <span class="n-val">125% SWL</span> | Class surveyor witness | Jan 2026</td></tr>
    <tr><td>Inclinometer 2026</td><td class="hl">⭐⭐⭐⭐ New reg</td><td>Containerships &amp; bulk carriers ≥<span class="n-val">3,000 GT</span> | Connected to VDR | Roll angle recording</td></tr>
    <tr><td>GMDSS battery (Ch IV/13)</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">6 h</span> without UPS | <span class="n-val">1 h</span> with UPS | Annual test | Replace &lt;<span class="n-val">80%</span></td></tr>
    <tr><td>EEBD (Ch III)</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">10 min</span> air | Min <span class="n-val">2 bridge</span> + <span class="n-val">2 machinery space</span></td></tr>
    <tr><td>Lifeboat battery (Ch III)</td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">24V DC</span> | <span class="n-val">6</span> cold starts | <span class="n-val">30 min</span> consumers</td></tr>
    <tr><td>BNWAS (Ch V)</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>Dormant timer <span class="n-val">3–12 min</span> | Progressive alarms to master then ER</td></tr>
    <tr><td>VDR (Ch V)</td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td>Cargo &gt;<span class="n-val">3,000 GT</span> | Passenger &gt;<span class="n-val">150 GT</span></td></tr>
    <tr><td>MLC Rest Hours</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Min <span class="n-val">10 h</span>/24h | Min <span class="n-val">77 h</span>/7d | Max 2 splits, one ≥<span class="n-val">6 h</span> continuous</td></tr>
    <tr><td>ISM - DOC vs SMC</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Deswal</td><td>DOC = Company (5 yr, annual audit) | SMC = Ship (5 yr, intermediate audit) | Both issued by flag state via class RO</td></tr>
    <tr><td>ISPS - Security Levels</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>Level 1 = Normal | Level 2 = Heightened | Level 3 = Imminent threat</td></tr>
    <tr><td>SSAS test frequency</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>Every <span class="n-val">3 months</span> | Silent alert | No onboard alarm | Coordinate with CSO before testing</td></tr>
    <tr><td>Class society vs flag state</td><td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td><td>Flag state = LAW (issues SMC/DOC) | Class = Technical (surveys hull/machinery, issues safety certs as RO delegate)</td></tr>
    <tr><td>Enclosed space gas limits</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>O₂ <span class="n-val">19.5–23.5%</span> | CO &lt;<span class="n-val">35 ppm</span> | H₂S &lt;<span class="n-val">10 ppm</span> | SO₂ &lt;<span class="n-val">2 ppm</span> | Flammable &lt;<span class="n-val">1% LEL</span> for hot work</td></tr>
    <tr><td>STCW ETO Regulation</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>STCW Reg <span class="n-val">III/6</span> | Manila Amendment 2010 | 5-year revalidation</td></tr>
    <tr><td>Steering gear time (II-1/29)</td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td>35° to 30° opposing side in max <span class="n-val">28 seconds</span> at full ahead service speed</td></tr>
    <tr><td>PFOS ban 2026</td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td>AFFF foam containing PFOS replaced before first survey after Jan 2026</td></tr>
    <tr><td>Paint locker CO₂</td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td>Min <span class="n-val">40%</span> CO₂ concentration | Release station outside space</td></tr>
  </table>

    </div>
</div>
</div>
`);
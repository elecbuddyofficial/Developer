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
      <span class="tag tag-orange">Ch II-1 · Emergency Power · Cables</span>
      <span class="tag tag-purple">New 2026 - Lifting Appliances · Inclinometer</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-ch2')">Chapter II-1</button>
    <button class="anc-btn" onclick="jumpTo('s-empower')">Emergency Power</button>
    <button class="anc-btn" onclick="jumpTo('s-cables')">Cables</button>
    <button class="anc-btn" onclick="jumpTo('s-survey-checks')">Special Survey</button>
    <button class="anc-btn" onclick="jumpTo('s-ch22')">Chapter II-2</button>
    <button class="anc-btn" onclick="jumpTo('s-ch3')">Chapter III</button>
    <button class="anc-btn" onclick="jumpTo('s-ch4')">Chapter IV</button>
    <button class="anc-btn" onclick="jumpTo('s-ch5')">Chapter V</button>
    <button class="anc-btn" onclick="jumpTo('s-ism')">ISM Code</button>
    <button class="anc-btn" onclick="jumpTo('s-isps')">ISPS Security</button>
    <button class="anc-btn" onclick="jumpTo('s-conventions')">MLC &amp; STCW</button>
    <button class="anc-btn" onclick="jumpTo('s-new2026')">New 2026 Regs</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-ch2">📋 SOLAS Chapter II-1 - Electrical Installations (Part D)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask Chapter II-1 electrical regulations.</strong> SOLAS has <span class="n-val">14 chapters</span>. Electrical installations = Chapter II-1, Part D.</div></div>

  <div class="n-h2">Voltage &amp; Frequency Limits (Regulation 40)</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Steady State</th><th>Transient</th><th>Recovery</th></tr>
    <tr><td>Voltage</td><td class="hl">±<span class="n-val">2.5%</span></td><td class="hl">±<span class="n-val">20%</span></td><td class="ok">Within <span class="n-val">±3%</span> in <span class="n-val">1.5 seconds</span></td></tr>
    <tr><td>Frequency</td><td class="hl">±<span class="n-val">5%</span></td><td class="hl">±<span class="n-val">10%</span></td><td class="ok">Within <span class="n-val">5 seconds</span></td></tr>
  </table>

  <div class="n-h1" id="s-empower">⚡ Emergency Source of Electrical Power (Regulation 42/43)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask emergency generator requirements.</strong> Know location, start time, endurance - different for cargo vs passenger ships.</div></div>

  <table class="n-table">
    <tr><th>Requirement</th><th>Cargo Ship</th><th>Passenger Ship</th></tr>
    <tr><td>Location</td><td class="hl" colspan="2">Above uppermost continuous deck, OUTSIDE main machinery space</td></tr>
    <tr><td>Auto-start time</td><td class="hl"><span class="n-val">45 seconds</span></td><td class="hl"><span class="n-val">30 seconds</span></td></tr>
    <tr><td>Fuel endurance</td><td class="hl"><span class="n-val">18 hours</span></td><td class="hl"><span class="n-val">36 hours</span></td></tr>
    <tr><td>Transitional source</td><td class="hl" colspan="2">Battery - supplies essential services for minimum <span class="n-val">30 minutes</span> during startup gap</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Transitional source:</strong> Dedicated battery (not GMDSS battery) automatically supplies emergency lighting, navigation lights, and internal communications for minimum <span class="n-val">30 minutes</span> - covers the 45-second window before the emergency generator comes online. No manual action required.</div></div>

  <div class="n-h1" id="s-cables">🔌 Cable Requirements (Regulation 45)</div>
  <table class="n-table">
    <tr><th>Cable Standard</th><th>Requirement</th><th>Where Mandatory</th></tr>
    <tr><td><span class="n-val">IEC 60331</span> - Fire Resistant</td><td class="hl">Maintains circuit integrity min <span class="n-val">3 hours</span> at <span class="n-val">750°C</span></td><td class="hl">Fire pumps, steering gear, emergency lighting, GMDSS</td></tr>
    <tr><td><span class="n-val">IEC 60332</span> - Flame Retardant</td><td>Self-extinguishes, does not propagate flame</td><td>All cables in enclosed spaces</td></tr>
    <tr><td><span class="n-val">IEC 60079</span> - Explosion Protected</td><td>EEx-rated wiring</td><td>Hazardous areas - paint lockers, gas spaces</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Regulation 45 prohibition:</strong> Fuses must NOT be fitted in any earthed conductor. Ensures hull earth connection is continuously maintained. A fuse in the earth conductor could create a dangerous open-earth condition.</div></div>

  
  <div class="n-h1" id="s-survey-checks">📋 Class Special Electrical Survey - Mandated Protocols</div>
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
  </ul>

  <div class="n-h1" id="s-ch22">🔥 SOLAS Chapter II-2 - Fire Protection</div>
  <ul class="n-list">
    <li><strong>Regulation 9.4:</strong> Cables to essential services (fire pumps, steering gear) must be fire resistant (<span class="n-val">IEC 60331</span>)</li>
    <li><strong>Regulation 10.2:</strong> Emergency fire pump - independently powered, outside main machinery space, minimum <span class="n-val">0.3 MPa (3 bar)</span>, two simultaneous jets</li>
    <li><strong>Paint locker:</strong> Fixed smothering system - minimum <span class="n-val">40% CO2</span> concentration, release station outside the space</li>
    <li><strong>2026 PFOS ban:</strong> All AFFF foam containing PFOS must be replaced with PFOS-free alternatives before first survey after January 2026</li>
  </ul>

  <div class="n-h1" id="s-ch3">🆘 SOLAS Chapter III - LSA</div>
  <ul class="n-list">
    <li><strong>Embarkation lighting (Reg 11.7):</strong> Each station illuminated by emergency switchboard or dedicated battery - illuminates ladder, lifeboat, sea surface</li>
    <li><strong>EEBD (Reg 35):</strong> Emergency Escape Breathing Device <span class="n-val">-10 minutes</span> air for escape only. Minimum <span class="n-val">2 on bridge</span>, minimum <span class="n-val">2 in machinery space</span></li>
    <li><strong>Lifeboat battery:</strong> <span class="n-val">24V DC</span>, capable of <span class="n-val">6</span> consecutive cold starting attempts, powers consumers for minimum <span class="n-val">30 minutes</span></li>
    <li><strong>SART carriage:</strong> Minimum <span class="n-val">2 per ship</span> &gt;500 GT (SOLAS III Reg 7.1), in lifeboats or grab-bags</li>
  </ul>

  <div class="n-h1" id="s-ch4">📻 SOLAS Chapter IV - GMDSS</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Regulation 13 - Reserve Power:</strong> Dedicated GMDSS battery must supply ALL GMDSS equipment for <span class="n-val">6 hours</span> (international voyage without UPS) or <span class="n-val">1 hour</span> (with auto-switching UPS). Annual load test. Replace when capacity &lt;<span class="n-val">80%</span>. Dedicated - no other use.</div></div>

  <div class="n-h1" id="s-ch5">🧭 SOLAS Chapter V - Navigation</div>
  <ul class="n-list">
    <li><strong>Regulation 19:</strong> RADAR, gyrocompass, echo sounder, AIS, ECDIS carriage requirements based on ship size</li>
    <li><strong>BNWAS (Reg 19.2.2):</strong> Bridge Navigational Watch Alarm System - dormant timer <span class="n-val">3–12 minutes</span>. Progressive alarms escalating to master then engine room.</li>
    <li><strong>VDR (Regulation 20):</strong> Cargo ships &gt;<span class="n-val">3,000 GT</span>, passenger ships &gt;<span class="n-val">150 GT</span></li>
  </ul>

  
  <div class="n-h1" id="s-ism">⚓ ISM Code - Safety Management &amp; Audit Architecture</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Mandatory under SOLAS Chapter IX. Surveyors Kamath and Deswal screen your understanding of audit failures.</strong></div></div>

  <div class="n-h2">The Role of the Designated Person Ashore (DPA)</div>
  <p class="n-p">Enforced by <strong>ISM Code Clause 4</strong>, the DPA serves as the critical operational conduit linking individual ships to highest levels of shore-side corporate management. The DPA monitors safe operation of all fleet vessels, ensures adequate resources and technical support are delivered, and evaluates all reported accidents or near-misses. The DPA must remain reachable <span class="n-val">24/7</span> for shipboard emergencies.</p>

  <div class="n-h2">DOC vs SMC (Document of Compliance &amp; Safety Management Certificate)</div>
  <table class="n-table">
    <tr><th>Document</th><th>Issued To</th><th>Validity</th><th>Certifies</th></tr>
    <tr><td><strong>DOC</strong></td><td class="hl">The COMPANY</td><td>5 years (annual audit)</td><td>Company SMS complies with ISM Code. Copy kept onboard.</td></tr>
    <tr><td><strong>SMC</strong></td><td class="hl">The SHIP</td><td>5 years (intermediate audit)</td><td>Ship and crew operate per approved SMS. Original kept onboard.</td></tr>
  </table>

  <div class="n-h2">Non-Conformity vs. Major Non-Conformity vs. PSC Deficiency</div>
  <ul class="n-list">
    <li><strong>Minor Non-Conformity:</strong> An occasional or isolated objective failure to fulfill a requirement of the Safety Management System (SMS) that does not immediately threaten ship safety. Corrective action must be closed out within an agreed timeframe (typically before the next audit cycle). <em>Example: An ETO forgets to sign a routine battery log.</em></li>
    <li><strong>Major Non-Conformity (MNC):</strong> A severe, systematic deviation that poses an immediate, serious threat to the safety of crew, the ship, or the marine environment. <span class="bad"><strong>An MNC instantly suspends or withdraws the ship's SMC and the company's DOC</strong></span>, grounding the vessel until resolved. <em>Example: Failing to execute mandatory emergency blackout or fire drills for months.</em></li>
    <li><strong>PSC Deficiency:</strong> A physical equipment, documentation, or operational defect logged directly by a Port State Control officer during a port inspection. Key distinction: A Non-Conformity = systemic/procedural SMS failure found during an ISM audit. A Deficiency = localized physical component failure found during a port entry inspection.</li>
  </ul>

  <div class="n-h1" id="s-isps">🛡️ ISPS Code - Maritime Security Controls (SOLAS XI-2)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Covers international anti-terrorism, security levels, and automated tracking loops.</strong></div></div>

  <div class="n-h2">MARSEC Security Levels Defined</div>
  <ul class="n-list">
    <li><strong>MARSEC Level 1 (Normal):</strong> Baseline appropriate safety tier maintained at all times. Enforces routine 24-hour gangway watches, basic access controls, continuous SSAS arming, and random security rounds.</li>
    <li><strong>MARSEC Level 2 (Heightened):</strong> Activated during a documented elevated risk of a security incident. Triggers additional security patrols, tighter access restrictions, logging of all boarding personnel baggage, and enhanced CCTV monitoring focus.</li>
    <li><strong>MARSEC Level 3 (Exceptional):</strong> Triggered when a security incident is probable or imminent. Enforces total structural ship lockdown, stops non-essential operations, restricts boarding to military/security personnel, and may involve immediate SSAS activation or refusing port entry.</li>
  </ul>

  <div class="n-h2">ETO Security Infrastructure Maintenance Scope</div>
  <ul class="n-list">
    <li><strong>CCTV Arrays:</strong> Verify cameras operate continuously, fields of view completely cover the gangway and all restricted access headers, and historical recording data is backed up.</li>
    <li><strong>Access Controls:</strong> Maintain electronic card readers, PIN pads, and electromagnetic locks securing <strong>Designated Restricted Areas</strong> (Navigation Bridge, Engine Room, Steering Flat, Radio Room, Emergency Generator Room, and the ECR). Ensure mechanical emergency fail-safe overrides function instantly on fire panel trips.</li>
    <li><strong>SSAS:</strong> Test the hidden activation pushbuttons (one on bridge, one hidden in crew spaces) every <span class="n-val">3 months</span> to confirm they dispatch silent distress messages to the company and flag state without firing any onboard alarms.</li>
  </ul>

  <div class="n-h2">CSR - Continuous Synopsis Record</div>
  <p class="n-p">Required by SOLAS XI-1/Reg 5. Provides an onboard record of the ship's history: flag, owner, ISM company, ship name, IMO number, class society changes. Must be available for inspection at all times. Cannot be altered - amendments are added as new pages.</p>

  <div class="n-h1" id="s-conventions">🏛️ International Conventions - IMO Committees, MLC &amp; STCW</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Core legal instruments regulating technical engineering competencies, crew welfare, and toxic workspace entry.</strong></div></div>

  <div class="n-h2">IMO Technical Committee Framework</div>
  <ul class="n-list">
    <li><strong>MSC (Maritime Safety Committee):</strong> Primary technical body handling all safety-related conventions including stability, LSA gear, fire protection, bridge navigation, and radio communications.</li>
    <li><strong>MEPC (Marine Environment Protection Committee):</strong> Directs all environmental and pollution prevention regulations, overseeing MARPOL Annexes I–VI, ballast water treatment systems, and GHG/CII targets.</li>
  </ul>

  <div class="n-h2">MLC 2006 Seafarers' Bill of Rights &amp; Work-Rest Limits</div>
  <p class="n-p">The Maritime Labour Convention (MLC) establishes baseline working and living requirements for seafarers via 5 main Titles:</p>
  <ul class="n-list">
    <li><strong>Title 1:</strong> Minimum Requirements (Minimum age 16, medical certificates, training benchmarks)</li>
    <li><strong>Title 2:</strong> Conditions of Employment (SEAs, wages, mandatory rest curves)</li>
    <li><strong>Title 3:</strong> Accommodation &amp; Recreation (Cabin layouts, mess room criteria, AC/ventilation - ETO owned)</li>
    <li><strong>Title 4:</strong> Health Protection &amp; Medical Care (Onboard medical access, welfare networks, social security)</li>
    <li><strong>Title 5:</strong> Compliance and Enforcement (Flag state oversight, port state control deficiency processing)</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Mandatory STCW &amp; MLC Rest Hour Thresholds:</strong><br>
  Minimum <span class="n-val">10 hours of rest</span> in any 24-hour period<br>
  Minimum <span class="n-val">77 hours of rest</span> in any 7-day period<br>
  Rest cannot be split into more than two segments; one segment must deliver minimum <span class="n-val">6 hours</span> continuous rest.<br>
  Falsifying logs = off-hire detention violation.</div></div>

  <div class="n-h2">Enclosed Space Toxic Gases &amp; Entry Permits</div>
  <p class="n-p">Before entering cargo holds, ballast tanks, chain lockers, or cofferdams, a formal Permit to Work (PTW) must be cleared after atmospheric gas testing with a calibrated multi-gas meter:</p>
  <ul class="n-list">
    <li><strong>Oxygen (O₂):</strong> Safe threshold strictly between <span class="n-val">19.5% and 23.5%</span>. Below 19.5% = asphyxiation hazard.</li>
    <li><strong>Hydrogen Sulphide (H₂S):</strong> Highly lethal toxic byproduct from biological decomposition; threshold limit value capped at <span class="n-val">1 ppm</span>.</li>
    <li><strong>Carbon Monoxide (CO):</strong> Product of incomplete combustion; attaches to blood hemoglobin to induce rapid suffocation. Flammable gases must register strictly <span class="n-val">&lt;1% LEL</span>.</li>
  </ul>

  <div class="n-h2">Manila Amendment 2010 (STCW)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Key change for ETOs:</strong> The Manila Amendment formally created the Electro-Technical Officer (ETO) as a recognised officer under STCW Chapter III, Regulation III/6. It established the minimum standard of competency (Table A-III/6) and introduced mandatory security training, leadership/teamwork modules, and 5-year refresher training.</div></div>

  <div class="n-h1" id="s-new2026">🆕 New 2026 SOLAS Regulations</div>
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

  <div class="n-h2">The Hong Kong Convention &amp; Inventory of Hazardous Materials (IHM)</div>
  <p class="n-p">Entering into force in <strong>June 2025</strong>, the Hong Kong International Convention forces all ships &gt;500 GT to carry an active IHM log to protect shipyard recycling workers from lethal exposure to legacy compounds. The ETO must maintain <strong>Part I of the IHM</strong> to map out and trace electrical components containing hazardous materials:</p>
  <ul class="n-list">
    <li><strong>PCB-Filled Capacitors:</strong> Found inside older fluorescent light ballasts, motor starters, and MSB filter networks. Forbidden on new builds since the 1990s but must be logged if present.</li>
    <li><strong>Heavy Metal Loops:</strong> Mercury switches inside automated level instruments, fluorescent/discharge tubes, and lead deposits inside starting/UPS battery banks.</li>
    <li><strong>Submerged Transducers:</strong> Organotin Tributyltin (TBT) compounds historically bonded into acoustic faces of echo sounders or Doppler speed log transducers.</li>
  </ul>

  <div class="n-h2">SEEMP Part 3, EEXI &amp; Operational CII Ratings</div>
  <p class="n-p">Introduced under <strong>MARPOL Annex VI</strong>, SEEMP Part 3 creates a mandatory operational carbon intensity score (grams CO₂ per cargo-carrying capacity per nautical mile). Ships receive an annual rating scaling from <strong>A (Best) to E (Worst)</strong>. Sustained D or E grades freeze commercial trading profiles and mandate a flag-state corrective action plan. Additionally, a vessel's attained <strong>EEXI</strong> (Energy Efficiency Existing Ship Index - a one-time technical rating) and annual <strong>CII</strong> must now be formally submitted to the IMO Ship Fuel Oil Consumption Database. The ETO directly drives fuel savings through a 7-point efficiency checklist:</p>
  <ol class="n-steps">
    <li><strong>LED Lighting Upgrades:</strong> Converting fluorescent and halogen lamps to high-efficiency LED chips, slashing hotel load by 30–60%.</li>
    <li><strong>VFD Fan Adaptation:</strong> Retrofitting variable frequency drives onto sea water cooling pumps and ventilation fans. Dropping fan speed to 80% reduces power consumption by nearly <span class="n-val">50%</span> (affinity laws).</li>
    <li><strong>Cold Ironing (Shore Power):</strong> Connecting to shore power networks at berth to shut down auxiliary diesel generators completely.</li>
    <li><strong>Waste Heat Recovery:</strong> Maintaining exhaust gas economizer sensor feedback loops to reduce auxiliary boiler burner fuel consumption.</li>
    <li><strong>Power Factor Correction:</strong> Calibrating automatic capacitor banks to prevent generators from delivering high apparent power (kVA) for the same useful (kW) load, which wastes fuel through thermal losses.</li>
    <li><strong>PMS Optimization:</strong> Configuring the Power Management System to run a single generator at 75% load rather than running two parallel units at 35% each, where fuel burn is less efficient.</li>
    <li><strong>Mechanical Load Reductions:</strong> Tracking and replacing worn motor bearings to eliminate high shaft friction current draw.</li>
  </ol>

  <div class="n-h2">Safety Override Authority &amp; Registration Protocol</div>
  <p class="n-p">An override means manually bypassing an automated alarm or safety trip circuit to allow equipment to run despite a critical parameter fault. The ETO must never unilaterally execute a safety bypass. The <strong>Master</strong> holds ultimate authority over the ship; the <strong>Chief Engineer</strong> retains authority over engine room machinery overrides. Every active override must enforce a strict 6-point protocol:</p>
  <ul class="n-list">
    <li>1. Obtain direct verbal and written authorization from the Chief Engineer or Master.</li>
    <li>2. Formally enter the bypass inside the engine room log and the <strong>Switchboard Override Register</strong> (logging date, system tag, authorizer, and reason).</li>
    <li>3. Institute mandatory increased monitoring - watchkeeper physically assesses the overridden asset every 15–30 minutes.</li>
    <li>4. Deploy compensatory measures, such as placing an engineer with a portable thermometer directly at a bearing if its PT100 sensor trip is bypassed.</li>
    <li>5. Cancel the override and clear the circuit immediately once the emergency or sensor repair is completed.</li>
    <li>6. Critical switch locks must be key-operated or physically sealed to eliminate accidental tampering. <span class="bad"><strong>Never bypass fixed CO2 lines or steering gear safeties.</strong></span></li>
  </ul>

  <div class="n-h2">MARPOL Annex VI Low-Flashpoint Fuel Certification Rules</div>
  <ul class="n-list">
    <li><strong>Pre-Bunkering Flashpoint Declaration:</strong> Bunker supplier must issue a formal written declaration before bunkering operations begin, certifying the fuel flashpoint satisfies the SOLAS safety minimum of <span class="n-val">≥60°C</span>.</li>
    <li><strong>Bunker Delivery Note (BDN) Content:</strong> The BDN must explicitly state the exact measured flashpoint if below 70°C, or carry a formal text statement confirming flashpoint was measured at or above 70°C. If the BDN shows a value below 60°C, the ship must refuse the bunker batch and report a statutory violation to the flag state.</li>
  </ul>


  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO responsibility for cranes:</strong> Maintain electrical systems (motors, VFDs, limit switches, electromagnetic brakes). Overload limit switches (hoist cut-out at SWL) must be functional, calibrated, and tested annually. VFD parameter backup required. Log all maintenance in PMS.</div></div>

  <div class="n-h2">Electronic Inclinometer Requirement (1 January 2026)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Containerships and bulk carriers <span class="n-val">≥ 3,000 GT</span> must carry a mandatory electronic inclinometer connected to the VDR. Records real-time roll angles - provides hard data on ship motion to prevent parametric rolling casualties. New requirement following a series of major container ship casualties.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - SOLAS Chapters for ETO:</strong> II-1 = electrical (voltage ±2.5%, emergency DG 45s/18h) | II-2 = fire (fire resistant cables IEC 60331, PFOS ban 2026) | III = LSA (EEBD 10min, lifeboat 6 starts) | IV = GMDSS (battery 6h/1h) | V = navigation (VDR, BNWAS) | New 2026 = Lifting Appliances + Inclinometer.</div></div>

  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 16</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How many chapters in SOLAS and which covers electrical? (All surveyors)</strong><br><strong>Ideal Answer:</strong> SOLAS has <span class="n-val">14 chapters</span>. Electrical installations are in Chapter II-1, Part D. It covers: main and emergency power sources (Reg 40–45), voltage and frequency limits (Reg 40), emergency source of power (Reg 43), and cable requirements (Reg 45).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>PSC inspector wants a blackout test - describe procedure. (All surveyors)</strong><br><strong>Ideal Answer:</strong> 1. Brief all staff. 2. Inform bridge - safe navigational situation. 3. Verify emergency DG in AUTO mode. 4. Trip running main generator ACB - start timer. 5. Emergency DG must auto-start and supply emergency switchboard within <span class="n-val">45 seconds</span>. 6. Verify essential services: emergency lighting, navigation lights, fire detection, GMDSS. 7. Start main generator, synchronise, restore loads sequentially. 8. Log all times, results, and any defects. Present records to PSC inspector.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the transitional source of emergency power? (All surveyors)</strong><br><strong>Ideal Answer:</strong> A dedicated battery (SOLAS II-1/43) that automatically supplies emergency lighting, navigation lights, and internal communications for minimum <span class="n-val">30 minutes</span>. Covers the critical gap between blackout occurring and emergency generator coming online (<span class="n-val">45 seconds</span>). Automatic switchover - no manual action needed.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What does SOLAS say about cables in machinery spaces? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> SOLAS II-2/9.4: cables to essential services (fire pumps, steering gear, emergency lighting) must be fire resistant <span class="n-val">-IEC 60331</span>, maintain circuit integrity for minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span>. SOLAS II-1/45: all cables in enclosed spaces must be flame retardant (<span class="n-val">IEC 60332</span>). Hazardous areas: explosion protected (<span class="n-val">IEC 60079</span>). Fuses must NOT be fitted in earthed conductors.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the new SOLAS 2026 lifting appliances regulation? (New question)</strong><br><strong>Ideal Answer:</strong> SOLAS II-1 Regulation 3-13, effective <span class="n-val">1 January 2026</span>. First mandatory global standard for lifting appliances and anchor winches. Requires proof load testing at <span class="n-val">125% SWL</span> witnessed by class surveyor. All appliances must be permanently marked with SWL. Existing ships tested at first SAFCON renewal after January 2026. Crane defects can now result in PSC detention. ETO must maintain all electrical components (motors, brakes, limit switches) and test overload cut-outs annually.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 16</div>
  <table class="n-table">
    <tr><th>Regulation</th><th>Frequency</th><th>Key Values</th></tr>
    <tr><td>SOLAS II-1/40 Voltage/Frequency</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Steady ±<span class="n-val">2.5%</span>V / ±<span class="n-val">5%</span>f | Transient ±<span class="n-val">20%</span>V / ±<span class="n-val">10%</span>f | Recovery <span class="n-val">1.5s</span> / <span class="n-val">5s</span></td></tr>
    <tr><td>SOLAS II-1/43 Emergency DG</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Cargo <span class="n-val">45s / 18h</span> | Passenger <span class="n-val">30s / 36h</span> | Above bulkhead deck, outside ER</td></tr>
    <tr><td>Transitional source</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Battery | <span class="n-val">30 min</span> | Nav lights + emergency lighting + comms</td></tr>
    <tr><td>Cable standards</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>IEC 60331 = fire resistant (<span class="n-val">3h/750°C</span>) | IEC 60332 = flame retardant</td></tr>
    <tr><td>New 2026 Lifting Appliances</td><td class="hl">⭐⭐⭐⭐⭐ New reg - will be asked</td><td>SOLAS II-1/3-13 | Proof load <span class="n-val">125% SWL</span> | Class surveyor witness | Jan 2026</td></tr>
    <tr><td>GMDSS battery (Ch IV/13)</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">6h</span> without UPS | <span class="n-val">1h</span> with UPS | Annual test | Replace &lt;<span class="n-val">80%</span></td></tr>
    <tr><td>EEBD (Ch III)</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">10 minutes</span> air | Min <span class="n-val">2 bridge</span> <span class="n-val">+2 machinery space</span></td></tr>
  </table>

    </div>
</div>
</div>
`);

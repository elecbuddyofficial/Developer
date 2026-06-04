window.loadNotes("T17", `<div class="view" id="view-notes-t17">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T17')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 17 - MARPOL &amp; Environmental Regulations</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">OWS · ODME · Oil Record Book</span>
      <span class="tag tag-purple">SOx · CII · 2024-2026 Updates</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-annexI')">Annex I - OWS/ODME</button>
    <button class="anc-btn" onclick="jumpTo('s-bwmc')">Ballast Water</button>
    <button class="anc-btn" onclick="jumpTo('s-orb')">Oil Record Book</button>
    <button class="anc-btn" onclick="jumpTo('s-annexVI')">Annex VI - Air Pollution</button>
    <button class="anc-btn" onclick="jumpTo('s-cii')">CII &amp; SEEMP</button>
    <button class="anc-btn" onclick="jumpTo('s-new2024')">2024-2026 Updates</button>
    <button class="anc-btn" onclick="jumpTo('s-altfuels')">Alternative Fuels</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-annexI">🛢️ MARPOL Annex I - Oil Pollution Prevention</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask OWS working, 15 ppm limit, discharge criteria, and ORB entries.</strong></div></div>

  <div class="n-h2">Oily Water Separator (OWS)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Treats machinery space bilge water through gravity separation and a coalescing filter. Maximum oil content for overboard discharge: <span class="n-val">15 ppm</span>. Oil Content Monitor (OCM) uses <strong>infrared absorption (optical)</strong> sensor - continuously measures effluent. If oil exceeds <span class="n-val">15 ppm</span>: alarm activates + fail-safe 3-way solenoid valve automatically diverts effluent back to bilge holding tank.</div></div>

  <div class="n-h2">OWS Discharge Criteria - ALL must be met</div>
  <ul class="n-list">
    <li>Oil content <span class="n-val">&lt; 15 ppm</span> (confirmed by OCM)</li>
    <li>Vessel <strong>en route</strong> (proceeding, not at anchor)</li>
    <li>Outside <strong>special areas</strong></li>
    <li>More than <span class="n-val">12 nautical miles</span> from nearest land</li>
  </ul>

  <div class="n-h2">Oil Discharge Monitoring Equipment (ODME) - Tankers</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Regulates cargo-related discharges (cargo tank ballast washings) on crude oil and product tankers. Uses optical oil content sensor, flow meter, and GPS to calculate discharge rate and cumulative quantity.</div></div>

  <div class="n-h2">ODME Discharge Criteria - ALL must be met</div>
  <ul class="n-list">
    <li>Discharge rate ≤ <span class="n-val">30 litres per nautical mile</span></li>
    <li>Total quantity ≤ <span class="n-val">1/30,000</span> of total cargo carried</li>
    <li>Position more than <span class="n-val">50 nautical miles</span> from nearest land</li>
    <li>Vessel proceeding en route</li>
    <li>If criteria exceeded: discharge valve closes automatically</li>
  </ul>

  <div class="n-h3">OCM Optical Window Fouling &amp; System Maintenance</div>
  <p class="n-p">The Oil Content Monitor (OCM) relies on an infrared absorption or light-scattering optical sensor to sample effluent transparency. <strong>Critical Safety Risk:</strong> Over time, a microscopic film of oil or iron rust scale deposits onto the internal quartz sensor window. This coating shunts and dampens the infrared light absorption path, tricking the OCM into recording a <strong>false low reading (well below 15 ppm)</strong> even when highly contaminated bilge water is being pumped overboard. This creates a severe MARPOL non-compliance risk that can trigger criminal prosecution.</p>
  <p class="n-p">To mitigate this, the ETO must physically clean the sensor cell window monthly using an approved chemical solvent and cloth. System maintenance parameters: replace coalescing filter cartridges every <span class="n-val">6–12 months</span> depending on bilge sludge contamination, periodically flush the separation chamber, and verify that the 3-way solenoid valve drops immediately to its fail-safe recirculating port during a local power failure.</p>

  <div class="n-h2">SOPEP vs SMPEP - Emergency Plans</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Surveyors frequently ask the difference between SOPEP and SMPEP.</strong></div></div>
  <ul class="n-list">
    <li><strong>SOPEP (Shipboard Oil Pollution Emergency Plan):</strong> Required under MARPOL Annex I for all ships <span class="n-val">&gt; 400 GT</span> and oil tankers <span class="n-val">&gt; 150 GT</span>. Covers oil pollution ONLY. Procedures for reporting oil spills, notification contacts, containment measures.</li>
    <li><strong>SMPEP (Shipboard Marine Pollution Emergency Plan):</strong> Required for chemical/NLS tankers under MARPOL Annex II. Covers Noxious Liquid Substances (NLS) IN ADDITION to oil. SMPEP is a SUPERSET of SOPEP. Tankers carry SMPEP which essentially replaces SOPEP.</li>
  </ul>
  
  <div class="n-h1" id="s-bwmc">🧬 Ballast Water Management Convention (BWMC)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Praveen Nair frequently drill the ETO on the differences between D-1 and D-2 criteria and treatment system logs.</strong></div></div>
  <p class="n-p">Adopted to prevent catastrophic global transfer of invasive aquatic organisms and harmful pathogens across marine ecosystems, the BWMC 2004 entered into full global force on <span class="n-val">8 September 2017</span>. Ships must manage ballast water via two distinct operational standards:</p>
  <ul class="n-list">
    <li><strong>D-1 Standard (Ballast Water Exchange):</strong> Interim operational method requiring physical water exchange in the open ocean, executed at least <span class="n-val">200 nautical miles</span> from the nearest land in water depths of at least <span class="n-val">200 metres</span>. Using the pump-through method, the ship must pump through exactly <span class="n-val">3 times the volume</span> of each ballast tank to achieve a certified 95% volumetric exchange efficiency.</li>
    <li><strong>D-2 Standard (Ballast Water Performance):</strong> Mandates installation of an approved onboard Ballast Water Treatment System (BWTS). Effluent discharged to sea must satisfy strict biological filtration and sterilization counts: less than <span class="n-val">10 viable organisms per m³</span> for large organisms (&gt;50 μm), and less than <span class="n-val">10 viable organisms per mL</span> for microscopic cells (10–50 μm).</li>
  </ul>
  <p class="n-p"><strong>BWTS Treatment Technologies:</strong> Systems destroy biological targets using auto-backwashing mesh filters followed by either <strong>UV Irradiation</strong> (shattering organism DNA loops), <strong>Electrochlorination/Electrolysis</strong> (passing seawater through electrolytic cells to generate reactive sodium hypochlorite), or direct chemical injection.</p>
  <p class="n-p"><strong>Documentation &amp; Audits:</strong> Every ballast pump operation, tank transfer, open-ocean exchange, or port reception discharge must be logged with precise coordinates and volumes inside the mandatory <strong>Ballast Water Record Book (BWRB)</strong>. To issue or preserve the ship's International Certificate for Ballast Water Management (ICDR), the class surveyor will audit the BWTS automated alarm logs, filter differential pressure states, and continuous UV intensity tracking charts.</p>

  <div class="n-h1" id="s-orb">📖 Oil Record Book (ORB)</div>
  <table class="n-table">
    <tr><th>Part</th><th>Covers</th><th>Required For</th></tr>
    <tr><td><strong>Part I</strong></td><td>Machinery space operations - every OWS use, bilge transfers, slops to reception</td><td class="hl">All ships <span class="n-val">&gt; 400 GT</span></td></tr>
    <tr><td><strong>Part II</strong></td><td>Cargo and ballast operations - ODME discharges, tank washings</td><td class="hl">Oil tankers <span class="n-val">&gt; 150 GT</span></td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ORB must accurately reflect ACTUAL operations.</strong> If OWS not used: all bilge water must be retained in holding tank and transferred ashore. ORB Part I must record the transfer to reception. False entries in ORB = criminal offence in most port states. ORB retained onboard for <span class="n-val">3 years</span> after last entry.</div></div>

  <div class="n-h2">Garbage Management Plan (GMP) &amp; Mandatory WEEE Segregation Matrix</div>
  <p class="n-p"><strong>Tonnage Threshold Update:</strong> Under updated MARPOL Annex V regulations, the mandatory threshold requiring vessels to carry and maintain an official signed <strong>Garbage Record Book (GRB) has been lowered from 400 GT down to 100 GT</strong> to force smaller coasters, tugs, and fishing vessels into strict compliance tracking. All vessels exceeding 100 GT must implement a Garbage Management Plan designating a responsible officer.</p>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Anil Deswal tests E-Waste classification in every session. Electronic Waste (E-Waste/WEEE) represents a hazardous Category 3.3 harmful substance - absolutely prohibited from sea discharge or onboard incineration. Must be segregated into specific colored bins for certified landing ashore:</strong></div></div>
  <table class="n-table">
    <tr><th>Bin Colour</th><th>Category</th><th>Content Examples</th></tr>
    <tr><td style="color:red;font-weight:bold;">RED</td><td>Hazardous / Toxic E-Waste</td><td>Lithium, lead-acid, and NiCd batteries, fluorescent tubes, mercury switches, circuit board PCBs, printer toner cartridges</td></tr>
    <tr><td style="color:#e6b800;font-weight:bold;">YELLOW</td><td>General E-Waste</td><td>Discarded mobile phones, portable instruments, isolated copper wiring, consumer electronics</td></tr>
    <tr><td style="color:green;font-weight:bold;">GREEN</td><td>Paper and Cardboard</td><td>Clean packing slips, structural boxes, un-laminated charting notes</td></tr>
    <tr><td style="color:blue;font-weight:bold;">BLUE</td><td>Glass Materials</td><td>Bottles, broken window panes, non-hazardous glass shards</td></tr>
    <tr><td style="color:#333;font-weight:bold;">BLACK</td><td>General Non-Recyclable Waste</td><td>Operational trash, contaminated rags, non-hazardous non-combustible materials</td></tr>
  </table>


  <div class="n-h1" id="s-annexVI">💨 MARPOL Annex VI - Air Pollution Prevention</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Gupta ask SOx limits.</strong> Know global vs ECA limits. Know what an EGCS/scrubber is.</div></div>

  <div class="n-h2">SOx Limits (Regulation 14)</div>
  <table class="n-table">
    <tr><th>Area</th><th>Sulphur Limit</th><th>Effective Date</th></tr>
    <tr><td>Global (outside ECAs)</td><td class="hl"><span class="n-val">0.50% m/m</span></td><td class="hl"><span class="n-val">January 2020</span></td></tr>
    <tr><td>Emission Control Areas (ECA)</td><td class="hl"><span class="n-val">0.10% m/m</span></td><td class="hl"><span class="n-val">January 2015</span></td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ECAs (Emission Control Areas):</strong> Baltic Sea, North Sea, North American coast, US Caribbean. Compliance via low-sulphur fuel or Exhaust Gas Cleaning System (EGCS/scrubber). Open-loop scrubber uses seawater; closed-loop uses chemical solution. Allows burning cheaper high-sulphur fuel while meeting SOx limits.</div></div>

  <div class="n-h2">NOx Tier Limits (Regulation 13)</div>
  <table class="n-table">
    <tr><th>Tier</th><th>Engine Build Year</th><th>NOx Reduction</th><th>Technology</th></tr>
    <tr><td>Tier I</td><td>Before 2011</td><td>Baseline</td><td>Engine tuning</td></tr>
    <tr><td>Tier II</td><td>2011+</td><td class="hl"><span class="n-val">~15.4%</span> below Tier I</td><td>Optimised combustion</td></tr>
    <tr><td>Tier III</td><td class="hl">2016+ in NOx ECAs</td><td class="hl"><span class="n-val">~80%</span> below Tier I</td><td class="hl">SCR (Selective Catalytic Reduction) or dual-fuel</td></tr>
  </table>

  <div class="n-h2">Onboard Incinerator Thermal Restrictions (Regulation 16)</div>
  <p class="n-p">Shipboard waste incinerators reduce operational garbage and oil sludge volumes but must operate strictly within an IMO-approved combustion chamber temperature profile of <span class="n-val">850°C to 1200°C</span> to minimize toxic atmospheric releases. ETOs must ensure the thermal control loops cut out fuel feed lines if temperatures deviate.</p>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Permitted for Incineration</div><div class="card-desc"><ul class="n-list"><li>Engine room oil sludge and oily purifier bottoms</li><li>Sewage treatment plant separated sludge</li><li>Organic food waste, clean paper, un-laminated cardboard, and cotton rags</li></ul></div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">STRICTLY FORBIDDEN</div><div class="card-desc"><ul class="n-list"><li>Electronic waste (E-Waste/WEEE) and circuit boards</li><li>Halogenated plastics and PVC packings (creates lethal dioxins/HCl)</li><li>Polychlorinated Biphenyls (PCBs) and heavy metals</li><li>Annex II Noxious Liquid cargo residues and scrubber effluents</li></ul></div></div>
  </div>

  <div class="n-h2">VECS Vapour Emission Control System Architecture</div>
  <p class="n-p">Regulated by <strong>Annex VI Regulation 15</strong>, the VECS captures volatile organic compound (VOC) hydrocarbon vapours (benzene, toluene, pentane) displaced from cargo tanks during high-rate loading operations and routes them back to a shore-side recovery network instead of venting them to sea.</p>
  <p class="n-p">The ETO holds full maintenance ownership over the system's active safety components: validating the electronic interlocks that synchronize terminal loading rates with manifold line pressures; checking the independent high-level and overfill float alarms on cargo tanks to eliminate liquid carry-over into the gas piping; and calibrating the continuous VOC infrared gas detection sensors inside the pump room spaces. <strong>Explosion Protection Mandate:</strong> All electrical solenoids, junction boxes, pressure transmitters, and instrumentation circuits inside the cargo zone must utilize certified explosion-proof construction rated at <span class="n-val">Ex d (Flameproof) or Ex e (Increased Safety)</span>.</p>


  <div class="n-h1" id="s-cii">📊 CII &amp; SEEMP - Energy Efficiency</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Mandatory for ships ≥5,000 GT.</strong> Surveyors now ask about CII ratings and SEEMP Part III.</div></div>

  <div class="n-grid">
    <div class="n-card"><div class="card-title">EEDI</div><div class="card-desc"><strong>Energy Efficiency Design Index</strong> - technical measure setting minimum efficiency for NEW ships at design stage. Measured in g CO₂ per tonne-mile.</div></div>
    <div class="n-card"><div class="card-title">SEEMP</div><div class="card-desc"><strong>Ship Energy Efficiency Management Plan</strong> - mandatory operational plan ≥400 GT for voyage optimisation, speed management, maintenance tracking.</div></div>
    <div class="n-card"><div class="card-title">CII</div><div class="card-desc"><strong>Carbon Intensity Indicator</strong> - operational rating A–E based on actual CO₂ per tonne-mile. Annual assessment. Mandatory for ≥5,000 GT.</div></div>
  </div>

  <div class="n-formula">CII = Annual CO₂ emissions / (DWT × Distance sailed)<div class="label">Units: g CO₂ / DWT·nm · Rating: A (best) → E (worst)</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SEEMP Part III - mandatory corrective action:</strong> If a ship receives a <strong>D rating for 3 consecutive years</strong> OR an <strong>E rating for 1 year</strong> → a Corrective Action Plan (CAP) must be developed, verified, and submitted before a Statement of Compliance is issued. Ships without compliance cannot trade.</div></div>

  <div class="n-h2">SEEMP Part 3 - ETO Role in CII Compliance</div>
  <p class="n-p">The ETO directly contributes to improving a ship's CII rating through 7 key practical efficiency actions:</p>
  <ol class="n-steps">
    <li><strong>LED Lighting Conversion:</strong> Replacing 40W fluorescent tubes with 10W LEDs saves significant hotel load (~36 tonnes HFO/year on a large vessel).</li>
    <li><strong>VFD on Pumps/Fans:</strong> Reducing centrifugal pump/fan speed by 20% reduces power by nearly 50% (cube law).</li>
    <li><strong>Power Factor Correction:</strong> Improving PF (e.g. from 0.75 to 0.95) reduces generator reactive current and I²R thermal losses.</li>
    <li><strong>Shore Power (Cold Ironing):</strong> Stopping auxiliary engines in port drops fuel consumption to 0% at berth.</li>
    <li><strong>Waste Heat Recovery:</strong> Cleaning exhaust economiser tubes increases steam generation, reducing oil-fired boiler use.</li>
    <li><strong>Accurate Energy Monitoring:</strong> Maintaining accurate flow meters and energy sensors required for IMO Data Collection System (DCS).</li>
    <li><strong>PMS Optimisation:</strong> Configuring the Power Management System to avoid unnecessary parallel running at low combined loads.</li>
  </ol>

  <div class="n-h2">Ozone Depletion Potential (ODP) &amp; Refrigerant Environmental Metrics</div>
  <p class="n-p">Under <strong>MARPOL Annex VI Regulation 12</strong>, the intentional venting or atmospheric release of ozone-depleting substances during refrigeration or AC plant maintenance is strictly prohibited. ETOs must track refrigerant specifications using two environmental baselines:</p>
  <ul class="n-list">
    <li><strong>ODP (Ozone Depletion Potential):</strong> Relative dimensionless value indexing structural damage a compound inflicts on the stratospheric ozone layer compared to <strong>CFC-11 (R-11)</strong>, which acts as the reference baseline fixed at <span class="n-val">1.0</span>.</li>
    <li><strong>GWP (Global Warming Potential):</strong> Indexes the thermal heat-trapping capacity of a gas molecule relative to CO₂, which acts as the reference baseline fixed at <span class="n-val">1.0</span>.</li>
  </ul>
  <table class="n-table">
    <tr><th>Refrigerant</th><th>Classification</th><th>ODP</th><th>GWP</th><th>Statutory Status</th></tr>
    <tr><td><strong>R-11 / R-12</strong></td><td>CFC</td><td class="bad">1.0 (Extreme)</td><td class="bad">High</td><td class="bad">Global Ban on new installations since 1996</td></tr>
    <tr><td><strong>R-22</strong></td><td>HCFC</td><td class="bad">0.055</td><td class="hl">Medium</td><td>Banned on new installations since 2020; existing lines cannot accept virgin gas recharges</td></tr>
    <tr><td><strong>R-134a</strong></td><td>HFC</td><td class="ok">0.000</td><td class="bad">1430 (High)</td><td>Standard utility across current AC ventilation plants</td></tr>
    <tr><td><strong>R-404A</strong></td><td>HFC Blend</td><td class="ok">0.000</td><td class="bad">3922 (Severe)</td><td>Standard baseline inside low-temperature reefer containers</td></tr>
    <tr><td><strong>R-1234yf</strong></td><td>HFO</td><td class="ok">0.000</td><td class="ok">&lt;1 (Eco-Ideal)</td><td>New generation smart refrigerant with low environmental impact</td></tr>
  </table>

  <div class="n-h2">Mandatory ODS Record Book Entries</div>
  <p class="n-p">Vessels equipped with rechargeable gas cooling loops totaling more than <span class="n-val">3 kg</span> of charge must maintain a verified ODS Record Book. The ETO must record the following events:</p>
  <ul class="n-list">
    <li>The exact mass quantity in kilograms of refrigerant added during any top-up or system recharge event, alongside the reason for repair.</li>
    <li>Any mass quantity of gas physically recovered out of a system during plant decommissioning or component overhauls.</li>
    <li>The certified mass of refrigerant drained into portable cylinders and physically landed ashore to an approved port receiving reception facility.</li>
    <li>Any documented accidental or non-intentional gas escape event, tracked back to its structural source.</li>
  </ul>


  <div class="n-h1" id="s-new2024">🆕 2024–2026 Updates - Know These</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand new regulations being asked from 2024–2026.</strong> Surveyors are specifically asking about flashpoint rules and alternative fuels.</div></div>

  <div class="n-h2">BDN Flashpoint Statement (Effective May 2024)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Bunker Delivery Notes (BDN) must explicitly state the actual measured flashpoint if it is below <span class="n-val">70°C</span>. If above 70°C, must confirm it was measured at or above that threshold. Test method: <span class="n-val">ISO 2719:2016</span> closed-cup method only. Ensures crew knows if they are handling low-flashpoint fuel.</div></div>

  <div class="n-h2">Pre-Bunkering Flashpoint Declaration (Effective January 2026)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SOLAS II-2/4.2.1 amendment:</strong> Fuel supplier must provide a signed declaration BEFORE bunkering, confirming fuel conforms to minimum <span class="n-val">60°C</span> flashpoint limit. If declaration absent or flashpoint &lt;60°C → Master/Chief Engineer must REFUSE the bunkers.</div></div>

  <div class="n-h2">MARPOL Sample Size Increase</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Required volume of retained MARPOL delivered sample increased from <span class="n-val">400 mL</span> to <span class="n-val">600 mL</span> - ensures sufficient volume for flashpoint verification testing if a dispute arises. Cleaning primary samplers with low-flashpoint solvents is explicitly prohibited (prevents sample contamination).</div></div>

  <div class="n-h2">Ammonia as Propulsion Fuel (IGF Code 2026)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Ammonia (NH₃) now legally permitted as propulsion fuel on Type 2G/2PG gas carriers. Due to high toxicity (TLV <span class="n-val">25 ppm</span>, IDLH <span class="n-val">300 ppm</span>): continuous NH₃ gas detection, remote isolation valves, and SCBA access are mandatory. ETO must maintain gas detection system calibration and alarms.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> OWS = <span class="n-val">15 ppm</span>, 12 nm, en route, outside special areas | ODME = <span class="n-val">30 L/nm</span>, 1/30,000 cargo, 50 nm | SOx = <span class="n-val">0.5%</span> global / <span class="n-val">0.1%</span> ECA | CII = A→E annually, D×3 or E×1 = corrective action | BDN flashpoint statement from May 2024 | Pre-bunker declaration Jan 2026.</div></div>

  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 17</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>OWS - working principle, 15 ppm sensor type, how to test, what if not used? (All surveyors)</strong><br><strong>Ideal Answer:</strong> OWS removes oil from bilge water via gravity separation + coalescing filter. OCM uses infrared absorption sensor - continuously measures oil in effluent. At <span class="n-val">15 ppm</span>: alarm + 3-way fail-safe solenoid valve diverts back to holding tank. Test: manufacturer self-test function or oil-in-water test emulsion. If not used: retain all bilge water in holding tank, transfer to port reception, log accurately in ORB Part I.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ODME - purpose, working, discharge criteria? What if not used? (All surveyors)</strong><br><strong>Ideal Answer:</strong> ODME monitors and controls cargo-related oily water discharge (ballast, tank washings) from tankers at sea. Uses optical sensor + flow meter + GPS. MARPOL criteria: rate ≤<span class="n-val">30 L/nm</span>, total ≤<span class="n-val">1/30,000</span> of cargo, position &gt;<span class="n-val">50 nm</span> from land, en route. Discharge valve closes automatically if exceeded. If not used: retain all cargo-related ballast/washings for port reception - log accurately in ORB Part II.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>SOx limits - ECA vs non-ECA? What is a scrubber? (Kamath, Gupta)</strong><br><strong>Ideal Answer:</strong> Global outside ECAs: <span class="n-val">0.50% m/m</span> (since Jan 2020). Inside ECAs (Baltic, North Sea, North America, US Caribbean): <span class="n-val">0.10% m/m</span> (since Jan 2015). EGCS/scrubber: alternative compliance method. Contacts exhaust with seawater (open-loop) or chemical solution (closed-loop) to remove SO₂ before release. Allows burning cheaper high-sulphur fuel while meeting SOx limits.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is SEEMP, EEDI, and CII? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> EEDI = Energy Efficiency Design Index - technical standard for new ship design, measures minimum efficiency in g CO₂/tonne-mile. SEEMP = Ship Energy Efficiency Management Plan - mandatory operational plan for all ships ≥400 GT for voyage optimisation and fuel management. CII = Carbon Intensity Indicator - operational annual rating A–E based on actual CO₂ per DWT per nautical mile. Ships ≥5,000 GT. D rating 3 consecutive years or E rating 1 year → mandatory Corrective Action Plan.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the new 2024-2026 MARPOL flashpoint rules? (New question - being asked now)</strong><br><strong>Ideal Answer:</strong> From May 2024: Bunker Delivery Notes must state actual flashpoint if &lt;<span class="n-val">70°C</span> (ISO 2719 closed-cup method). From January 2026: fuel supplier must provide pre-bunkering signed declaration confirming ≥<span class="n-val">60°C</span> flashpoint before transfer begins (SOLAS II-2/4.2.1). If absent or below 60°C, Master/CE must refuse bunkers. MARPOL retained sample volume increased from <span class="n-val">400 mL</span> to <span class="n-val">600 mL</span>.</div></div>

  
  <div class="n-h1" id="s-altfuels">⛽ Alternative Fuels &amp; IGF Code - 2026 Updates</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Alternative fuels are now being asked at every advanced oral.</strong> Know methanol and ammonia hazards, IGF Code bunkering rules, and CII/SEEMP event-based reporting.</div></div>
  <div class="n-h2">IGF Code 2026 Bunkering Amendments</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>IGF Code:</strong> Mandatory SOLAS framework for ships using fuels with flashpoint below <span class="n-val">60°C</span> (LNG, methanol, ammonia, hydrogen). 2026 amendment requires bunkering checklist to explicitly document: agreed minimum/maximum transfer pressures, minimum/maximum transfer temperatures, and relief valve settings on both ship and supply sides - must be signed before transfer begins.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>New 2026 IGF requirement:</strong> A portable <span class="n-val">5 kg DCP</span> (Dry Chemical Powder) fire extinguisher must be physically located INSIDE each fuel preparation room and gas valve unit room. DCP rapidly interrupts gas jet flames.</div></div>
  <div class="n-h2">Ammonia as Fuel (Type 2G/2PG - 2026)</div>
  <table class="n-table">
    <tr><th>Hazard</th><th>Value</th><th>Implication</th></tr>
    <tr><td>TLV (Time-Weighted Average)</td><td class="bad"><span class="n-val">25 ppm</span></td><td>Warning alarm setpoint</td></tr>
    <tr><td>IDLH (Immediately Dangerous)</td><td class="bad"><span class="n-val">300 ppm</span></td><td class="bad">Immediately life-threatening</td></tr>
    <tr><td>Evacuation alarm</td><td class="bad"><span class="n-val">~50 ppm</span></td><td class="bad">Evacuate space immediately</td></tr>
    <tr><td>Detection type</td><td class="hl">Continuous electrochemical NH₃ sensors</td><td>ETO maintains calibration</td></tr>
    <tr><td>Safeties</td><td class="hl">Remote solenoid isolation valves + SCBA at entry points</td><td>Mandatory</td></tr>
  </table>
  <div class="n-h2">SEEMP Part III - Event-Based Reporting (MEPC.395(82))</div>
  <ul class="n-list">
    <li><strong>Event reporting:</strong> BOSP (Beginning of Sea Passage), EOSP (End of Sea Passage), FAOP (Full Away on Passage) must be logged</li>
    <li><strong>Fuel consumption breakdown:</strong> Separate reporting by Main Engine, Auxiliary Engines, Boilers</li>
    <li><strong>Power at Berth:</strong> Shore power (HVSC) usage must be tracked and reported</li>
    <li><strong>IMO DCS submission:</strong> EEXI and annual CII ratings submitted to IMO Fuel Oil Consumption Database</li>
  </ul>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What must be documented before bunkering LNG or methanol in 2026? (New IGF Code question)</strong><br><strong>Ideal Answer:</strong> IGF Code 2026 amendment requires pre-bunkering checklist signed by both ship and supplier documenting: (1) Agreed minimum and maximum transfer pressures. (2) Minimum and maximum transfer temperatures. (3) Relief valve settings on both ship side and supply side. Without this documentation, bunkering must not proceed.</div></div>

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 17</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Values</th></tr>
    <tr><td>OWS - 15 ppm limit</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">15 ppm</span> | Infrared OCM | 3-way fail-safe valve | <span class="n-val">12 nm</span> from land, en route</td></tr>
    <tr><td>ODME discharge criteria</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">30 L/nm</span> | <span class="n-val">1/30,000</span> cargo | <span class="n-val">50 nm</span> from land | auto-close valve</td></tr>
    <tr><td>Oil Record Book</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Part I = machinery space (&gt;<span class="n-val">400 GT</span>) | Part II = tanker cargo | Retain <span class="n-val">3 years</span></td></tr>
    <tr><td>SOx limits</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Gupta</td><td>Global <span class="n-val">0.50%</span> (Jan 2020) | ECA <span class="n-val">0.10%</span> (Jan 2015) | Scrubber = alternative compliance</td></tr>
    <tr><td>CII / SEEMP Part III</td><td class="hl">⭐⭐⭐⭐⭐ New - will be asked</td><td>A→E rating | D×3 or E×1 = Corrective Action Plan | ≥<span class="n-val">5,000 GT</span></td></tr>
    <tr><td>2024 BDN flashpoint rule</td><td class="hl">⭐⭐⭐⭐⭐ New - being asked now</td><td>BDN must state flashpoint if &lt;<span class="n-val">70°C</span> | Pre-bunker declaration Jan 2026 | Min <span class="n-val">60°C</span></td></tr>
    <tr><td>Sample size increase</td><td class="hl">⭐⭐⭐⭐ New regulation</td><td><span class="n-val">400 mL</span> → <span class="n-val">600 mL</span> MARPOL retained sample</td></tr>
  </table>

    </div>
</div>
</div>
`);

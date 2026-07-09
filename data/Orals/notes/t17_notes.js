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
      <span class="tag tag-orange">OWS · ODME · Oil Record Book · Annex I–VI</span>
      <span class="tag tag-purple">SOx · CII · SEEMP · 2024–2026 Updates</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-annexI')">Annex I - OWS/ODME</button>
    <button class="anc-btn" onclick="jumpTo('s-iopp')">IOPP &amp; PSC</button>
    <button class="anc-btn" onclick="jumpTo('s-orb')">Oil Record Book</button>
    <button class="anc-btn" onclick="jumpTo('s-annexII')">Annex II - NLS</button>
    <button class="anc-btn" onclick="jumpTo('s-annexIII')">Annex III - Packaged</button>
    <button class="anc-btn" onclick="jumpTo('s-annexIV')">Annex IV - Sewage</button>
    <button class="anc-btn" onclick="jumpTo('s-annexV')">Annex V - Garbage</button>
    <button class="anc-btn" onclick="jumpTo('s-bwmc')">Ballast Water</button>
    <button class="anc-btn" onclick="jumpTo('s-annexVI')">Annex VI - Air Pollution</button>
    <button class="anc-btn" onclick="jumpTo('s-cii')">CII &amp; SEEMP</button>
    <button class="anc-btn" onclick="jumpTo('s-carbonstrategy')">IMO Carbon Strategy</button>
    <button class="anc-btn" onclick="jumpTo('s-altfuels')">Alternative Fuels</button>
    <button class="anc-btn" onclick="jumpTo('s-new2024')">2024–2026 Updates</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-annexI">🛢️ MARPOL Annex I - Oil Pollution Prevention</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask OWS working, 15 ppm limit, discharge criteria, and ORB entries. Know the SOPEP vs SMPEP difference.</strong></div></div>

  <div class="n-h2">Oily Water Separator (OWS) - Working Principle</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Treats machinery space bilge water through gravity separation and a coalescing filter. Maximum oil content for overboard discharge: <span class="n-val">15 ppm</span>. The Oil Content Monitor (OCM) uses an <strong>infrared absorption (optical)</strong> sensor to continuously measure effluent. If oil exceeds <span class="n-val">15 ppm</span>: alarm activates + fail-safe 3-way solenoid valve automatically diverts effluent back to the bilge holding tank. Required on all ships <span class="n-val">&gt; 400 GT</span>.</div></div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t17-ows-system.png" alt="OWS oily water separator system — coalescing filter, oil content monitor, 3-way fail-safe solenoid valve">
    <div class="note-diagram-cap">Fig. OWS System — gravity separation chamber, coalescing filter, OCM infrared sensor (15 ppm limit), fail-safe 3-way solenoid valve diverts to bilge holding tank on alarm</div>
  </div>

  <div class="n-h2">OWS Discharge Criteria - ALL four must be satisfied simultaneously</div>
  <ul class="n-list">
    <li>Oil content <span class="n-val">&lt; 15 ppm</span> (continuously confirmed by OCM)</li>
    <li>Vessel <strong>en route</strong> (actually proceeding - not anchored, not at berth)</li>
    <li>Outside all <strong>MARPOL special areas</strong></li>
    <li>More than <span class="n-val">12 nautical miles</span> from the nearest land</li>
  </ul>

  <div class="n-h2">OCM Optical Window Fouling - Critical Safety Risk</div>
  <p class="n-p">The OCM relies on an infrared absorption or light-scattering optical sensor to sample effluent transparency. Over time, a microscopic film of oil or iron rust scale deposits onto the internal quartz sensor window. This coating dampens the infrared light absorption path, tricking the OCM into recording a <strong>false low reading (well below 15 ppm)</strong> even when highly contaminated bilge water is being pumped overboard - a severe MARPOL non-compliance risk that can trigger criminal prosecution.</p>
  <p class="n-p">ETO maintenance obligations: physically clean the sensor cell window monthly using an approved chemical solvent; replace coalescing filter cartridges every <span class="n-val">6–12 months</span>; periodically flush the separation chamber; verify the 3-way solenoid valve drops immediately to its fail-safe recirculating port during a local power failure test.</p>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Regulates cargo-related discharges (cargo tank ballast washings) on crude oil and product tankers. Uses optical oil content sensor, flow meter, and GPS to calculate instantaneous discharge rate and cumulative quantity. Discharge valve closes automatically if any criterion is exceeded.</div></div>

  <div class="n-h2">ODME Discharge Criteria - ALL must be met</div>
  <ul class="n-list">
    <li>Instantaneous discharge rate ≤ <span class="n-val">30 litres per nautical mile</span></li>
    <li>Total cumulative quantity ≤ <span class="n-val">1/30,000</span> of the total cargo previously carried</li>
    <li>Position more than <span class="n-val">50 nautical miles</span> from nearest land</li>
    <li>Vessel proceeding en route</li>
    <li>If any criterion exceeded: discharge valve closes automatically, alarm sounds</li>
  </ul>

  <div class="n-h2">SOPEP vs SMPEP - Emergency Plans</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL - Surveyors frequently ask the difference between SOPEP and SMPEP.</strong></div></div>
  <ul class="n-list">
    <li><strong>SOPEP (Shipboard Oil Pollution Emergency Plan):</strong> Required under MARPOL Annex I for all ships <span class="n-val">&gt; 400 GT</span> and oil tankers <span class="n-val">&gt; 150 GT</span>. Covers oil pollution ONLY. Contains procedures for reporting oil spills, notification contacts (flag state, coastal state, OSRL), and containment measures. Must be approved by the Flag State Administration.</li>
    <li><strong>SMPEP (Shipboard Marine Pollution Emergency Plan):</strong> Required for chemical/NLS tankers under MARPOL Annex II. Covers Noxious Liquid Substances (NLS) IN ADDITION to oil. SMPEP is a superset of SOPEP - a vessel carrying an SMPEP does not additionally need a separate SOPEP.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-iopp">📋 IOPP Certificate &amp; Port State Control (PSC)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What is the IOPP certificate and when is it renewed? What happens during a PSC inspection for the ETO?" - Answer both with confidence.</strong></div></div>

  <div class="n-h2">International Oil Pollution Prevention (IOPP) Certificate</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The IOPP Certificate is the statutory document issued under MARPOL Annex I confirming that a ship's oil pollution prevention equipment and operational procedures comply with the Convention. Issued or endorsed by the Flag State Administration (or a Recognised Organisation acting on its behalf). Required for all ships <span class="n-val">&gt; 400 GT</span> and oil tankers <span class="n-val">&gt; 150 GT</span> engaged on international voyages.</div></div>

  <div class="n-h2">Surveys that Trigger IOPP Issue / Renewal</div>
  <ol class="n-steps">
    <li><strong>Initial Survey:</strong> Before the ship enters service or the certificate is issued for the first time. Surveyor inspects OWS, OCM, ODME (tankers), bilge holding tank, ORB, SOPEP, oil pollution prevention fittings, pumping arrangements, and standard discharge connections.</li>
    <li><strong>Renewal Survey:</strong> Every <span class="n-val">5 years</span>. Full re-inspection of all Annex I equipment. Certificate validity extended for 5 years from completion.</li>
    <li><strong>Annual Survey:</strong> Within 3 months before or after each anniversary date of the certificate. Confirms no changes to equipment or structure. Endorsed on the certificate.</li>
    <li><strong>Intermediate Survey:</strong> Within 3 months before or after the 2nd or 3rd anniversary date. Replaces two annual surveys for more thorough mid-period verification.</li>
    <li><strong>Additional / Unscheduled Survey:</strong> Triggered if major repairs or alterations are made to Annex I equipment, or after any significant oil spill incident.</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - IOPP Survey Types:</strong> <strong>I</strong>nitial, <strong>R</strong>enewal (5-yr), <strong>A</strong>nnual, <strong>I</strong>ntermediate → <strong>IRAI</strong> (India Runs Annual Inspections)</div></div>

  <div class="n-h2">Port State Control (PSC) - What the ETO Must Know</div>
  <p class="n-p">PSC is the right of foreign port states (under MARPOL, SOLAS, MLC, etc.) to board and inspect ships in their ports. PSC officers from the port administration can detain a vessel if serious deficiencies are found. In Indian ports: Mercantile Marine Department (MMD) and Directorate General of Shipping (DGS) officers conduct PSC inspections. Key regional MoUs: Paris MoU (Europe), Tokyo MoU (Asia-Pacific), Indian Ocean MoU.</p>

  <div class="n-h2">PSC Inspection Process - ETO Involvement</div>
  <ol class="n-steps">
    <li><strong>Initial Inspection:</strong> PSC officer checks certificates (IOPP, IAPP, ISPP, IBWMC) for validity, endorsements, and upcoming surveys. Checks ORB entries for completeness and consistency with voyage records.</li>
    <li><strong>Equipment Checks - ETO Responsible:</strong> OWS 15 ppm function test (officer may request a live demonstration); OCM sensor cleanliness; 3-way valve operation; ODME (tankers) calibration records; BWTS alarm logs and UV intensity records; Bilge holding tank actual level vs ORB entries; incinerator temperature records; refrigerant log (ODS record book); VECS gas detector calibration (tankers).</li>
    <li><strong>Document Inspection:</strong> ORB Part I must show every bilge operation, OWS use, and transfer to reception. ORB must be available for inspection at any time. Garbage Record Book; Ballast Water Record Book; ODS Record Book.</li>
    <li><strong>Expanded Inspection:</strong> If initial check reveals deficiencies or the ship is high-risk, PSC may expand to all systems. ETO must be ready to demonstrate alarms, sensors, and fail-safe valve operation.</li>
  </ol>

  <div class="n-h2">PSC Deficiency Categories &amp; Detention Criteria</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Deficiency (No Detention)</div><div class="card-desc">Minor non-compliance - rectified at next port or within agreed time. Examples: minor ORB recording errors, minor equipment calibration gaps, expired but quickly renewable certificates.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Grounds for Detention</div><div class="card-desc">Deficiencies that pose a clear hazard to safety, health, or environment. <strong>MARPOL-specific detention triggers:</strong> OWS non-functional; ORB falsified or missing entries; ODME inoperative; oil traces in bilge overboard line; bypass valve in non-compliant position; SOPEP/SMPEP absent or unapproved.</div></div>
  </div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ORB falsification is treated as a criminal offence in virtually all port states, not just a deficiency. Ships have been detained and crews prosecuted for "magic pipe" (bypass hose routing bilge directly overboard). The ETO is legally responsible for ORB Part I accuracy.</strong></div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-orb">📖 Oil Record Book (ORB)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask ORB entries. Know Part I vs Part II, operation codes, retention period, and what false entries mean legally.</strong></div></div>

  <table class="n-table">
    <tr><th>Part</th><th>Covers</th><th>Required For</th><th>Retention</th></tr>
    <tr><td><strong>Part I</strong></td><td>Machinery space operations - every OWS use, bilge transfers, slops to reception, fuel tank transfers</td><td class="hl">All ships <span class="n-val">&gt; 400 GT</span></td><td class="hl"><span class="n-val">3 years</span> after last entry</td></tr>
    <tr><td><strong>Part II</strong></td><td>Cargo and ballast operations - ODME discharges, tank washings, loading/unloading, crude oil washing (COW)</td><td class="hl">Oil tankers <span class="n-val">&gt; 150 GT</span></td><td class="hl"><span class="n-val">3 years</span> after last entry</td></tr>
  </table>

  <div class="n-h2">Key ORB Part I Operation Codes (MEPC.187(59))</div>
  <table class="n-table">
    <tr><th>Code</th><th>Operation</th><th>ETO Note</th></tr>
    <tr><td class="hl"><strong>A</strong></td><td>Ballasting or cleaning of fuel oil tanks</td><td>Record tank number, quantity, position, method</td></tr>
    <tr><td class="hl"><strong>B</strong></td><td>Discharge of dirty ballast or cleaning water from fuel oil tanks</td><td>Record position, OCM reading, quantity discharged</td></tr>
    <tr><td class="hl"><strong>C</strong></td><td>Collection and disposal of oil residues (sludge)</td><td>Record quantity, method of disposal (to reception, burned in incinerator, ship's incinerator)</td></tr>
    <tr><td class="hl"><strong>D</strong></td><td>Non-automatic discharge overboard, pumping bilges from machinery spaces</td><td>ETO signs this entry; record position (&gt;12 nm), OWS confirmation, quantity</td></tr>
    <tr><td class="hl"><strong>E</strong></td><td>Automatic discharge overboard of bilge water - OWS in use</td><td>Record period of operation, total quantity processed, OCM alarm status</td></tr>
    <tr><td class="hl"><strong>F</strong></td><td>Condition of the oil filtering equipment (OWS)</td><td>Record maintenance performed, filter replacement, sensor cleaning</td></tr>
    <tr><td class="hl"><strong>G</strong></td><td>Accidental or exceptional discharges</td><td>Record time, location, circumstances, volume - Master and ETO both sign</td></tr>
    <tr><td class="hl"><strong>H</strong></td><td>Bunkering of fuel or bulk lubricating oil</td><td>Record grade, quantity, BDN reference, flashpoint if &lt;70°C (from May 2024)</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ORB must accurately reflect ACTUAL operations.</strong> If OWS not used: all bilge water must be retained in holding tank and transferred ashore at reception facilities. ORB must record the transfer. False entries or deliberate omissions = criminal offence (prosecution, detention, flag state reporting). ORB retained onboard for <span class="n-val">3 years</span> after last entry and available for PSC inspection at any time.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-annexII">⚗️ MARPOL Annex II - Noxious Liquid Substances (NLS)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Vishwanathan ask Annex II category definitions. Know X, Y, Z, OS - and the Cargo Record Book.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body">MARPOL Annex II covers <span class="n-val">Noxious Liquid Substances (NLS)</span> carried in bulk on chemical tankers. Substances are categorised by their hazard potential to the marine environment, human health, and amenities. The International Bulk Chemical Code (IBC Code) governs carriage and safety requirements alongside Annex II.</div></div>

  <div class="n-h2">NLS Categories - Discharge Rules</div>
  <table class="n-table">
    <tr><th>Category</th><th>Hazard Level</th><th>Discharge Restriction</th><th>Pre-Wash?</th></tr>
    <tr><td class="bad"><strong>Category X</strong></td><td class="bad">Major hazard - poses major hazard to marine resources, human health, or amenities</td><td class="bad">Discharge PROHIBITED at sea - must be transferred ashore to port reception facility</td><td class="bad">Mandatory pre-wash; washings to reception</td></tr>
    <tr><td class="hl"><strong>Category Y</strong></td><td class="hl">Hazard - poses a lesser but significant hazard</td><td class="hl">Discharge allowed &gt;<span class="n-val">12 nm</span> from nearest land, water depth &gt;25 m, ship speed &lt;7 knots, discharge rate &lt;1 m³/nm. Only after pre-wash if residue exceeds standard</td><td class="hl">Required if residue exceeds allowed limit</td></tr>
    <tr><td class="ok"><strong>Category Z</strong></td><td class="ok">Minor hazard - poses minor hazard</td><td class="ok">Discharge allowed &gt;<span class="n-val">12 nm</span> from land. Less stringent pre-wash requirements</td><td class="ok">May be required depending on substance</td></tr>
    <tr><td><strong>Other Substances (OS)</strong></td><td>Assessed as presenting no harm in any quantity</td><td>Effectively unregulated under Annex II but substance must be listed in the MEPC list</td><td>Not required</td></tr>
  </table>

  <div class="n-h2">Cargo Record Book (CRB) - Annex II Equivalent of ORB</div>
  <p class="n-p">The Cargo Record Book must be maintained on all NLS tankers and must log: every loading and unloading of NLS cargo by tank and quantity; every tank cleaning operation (method used, time, position, washings disposal); every ballast operation for tanks that previously contained NLS; every transfer of slops or washings to reception. The CRB must be retained for <span class="n-val">3 years</span> after the last entry and is subject to PSC inspection.</p>

  <div class="n-h2">Stripping &amp; Pre-Wash Requirements (Annex II)</div>
  <p class="n-p">Before Category X or Y residues can be discharged or washings transferred to sea, the cargo tank must be <strong>stripped</strong> to the maximum practicable extent using the dedicated stripping pump and stripping line, which recovers residues to below the MARPOL residue limit (typically &lt;0.1 m³ or &lt;0.3 m³ depending on category and temperature). After stripping, a mandatory <strong>pre-wash</strong> is carried out using water at the required temperature. The washings must be transferred to shore reception or remain onboard in a slop tank. The Surveyor or Nominated Surveyor attends and certifies the pre-wash completion on a Prewash Certificate before the vessel leaves port (Category X especially).</p>

  <div class="n-h2">Crude Oil Washing (COW) - Special Annex I/II Note</div>
  <p class="n-p">Crude Oil Washing is an Annex I provision allowing crude oil tankers to wash their cargo tanks with crude oil (the cargo itself) rather than water. COW is more effective than water washing in removing high-viscosity wax deposits. COW must be covered in the SOPEP/Ship's COW Manual and monitored via the ODME. The Inert Gas System (IGS) must be in operation during COW to prevent flammable atmosphere buildup. The ETO maintains the IGS electrical controls, fixed gas detection, and COW fixed pipeline instrumentation.</p>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-annexIII">📦 MARPOL Annex III - Harmful Substances in Packaged Form</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-info"><div class="icon">📖</div><div class="body">MARPOL Annex III covers <span class="n-val">Harmful Substances Carried in Packaged Form</span> - not bulk liquids, but containerised, drummed, or packaged dangerous goods that could pollute the sea if lost overboard or spilled. Entered into force <span class="n-val">1 July 1992</span>. Applies to all ships transporting such substances internationally.</div></div>

  <ul class="n-list">
    <li><strong>Packaging, marking and labelling:</strong> Must comply with IMDG Code standards. Substances identified as marine pollutants in the IMDG Code are marked with the pollution fish symbol. Packages must withstand sea transport stresses.</li>
    <li><strong>Documentation:</strong> Each consignment must have a <strong>Dangerous Goods Declaration (DGD)</strong> and be listed on the vessel's stowage plan. Cargo manifest must identify marine pollutants.</li>
    <li><strong>Stowage and segregation:</strong> Incompatible substances must be separated per IMDG requirements to prevent chemical reactions and cross-contamination. Adequate ventilation of cargo holds.</li>
    <li><strong>Jettisoning prohibited:</strong> Jettisoning of harmful substances in packaged form is <span class="n-val">prohibited at sea</span> except to save the ship or life - and even then, only as an absolute last resort after all other means are exhausted.</li>
    <li><strong>ETO responsibility:</strong> Ensure cargo spaces have adequate ventilation, fire detection, and suppression coverage. Verify electrical systems in cargo holds are appropriate for the hazard classification of goods stowed.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-annexIV">🚽 MARPOL Annex IV - Prevention of Pollution by Sewage</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Deswal ask Annex IV discharge rules in detail. Know the 3/12 nm limits, treatment methods, and ETO's role maintaining the STP.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body">MARPOL Annex IV covers <span class="n-val">Prevention of Pollution by Sewage from Ships</span>. Entered into force <span class="n-val">27 September 2003</span>. Applies to new ships <span class="n-val">&gt; 400 GT</span> and all ships certified to carry <span class="n-val">&gt; 15 persons</span>, engaged on international voyages.</div></div>

  <div class="n-h2">Sewage Discharge Rules - Three Conditions</div>
  <table class="n-table">
    <tr><th>Distance from Land</th><th>Condition for Discharge</th><th>Treatment Required</th></tr>
    <tr><td class="bad"><strong>&lt; 3 nautical miles</strong></td><td class="bad">Discharge PROHIBITED</td><td class="bad">Must use holding tank - retain for shore reception</td></tr>
    <tr><td class="hl"><strong>3 to 12 nautical miles</strong></td><td class="hl">Discharge permitted ONLY if ship has approved Sewage Treatment Plant (STP) meeting performance standards</td><td class="hl">Approved STP output: must meet coliform/bacterial standards (≤250 fecal coliforms per 100 mL, ≤50 mg/L TSS)</td></tr>
    <tr><td class="ok"><strong>&gt; 12 nautical miles</strong></td><td class="ok">Discharge of comminuted and disinfected sewage permitted</td><td class="ok">Comminuted to &lt;9.5 mm particle size AND disinfected (chlorination or UV). Ship must be proceeding en route at &gt;4 knots</td></tr>
  </table>

  <div class="n-h2">Treatment Methods &amp; Equipment</div>
  <ul class="n-list">
    <li><strong>Holding Tank:</strong> Collects and retains all sewage when in port and within restricted zones. Must have level alarms (high-level alarm) and a discharge valve with visual indicator. ETO maintains the level sensor and pump controls.</li>
    <li><strong>Comminution:</strong> Mechanical grinder that reduces sewage particle size to <span class="n-val">&lt; 9.5 mm</span>. Motor-driven rotating cutter blades. ETO maintains the comminution unit motor, shear bolts (overload protection), and cutter blade condition.</li>
    <li><strong>Disinfection:</strong> After comminution, sewage is disinfected by <strong>chlorination</strong> (sodium hypochlorite dosing - ETO checks chemical tank level and dosing pump operation) or <strong>UV irradiation</strong> (ETO monitors UV lamp hours - typically replace after <span class="n-val">8,000–12,000 hours</span>, checks UV intensity sensor calibration).</li>
    <li><strong>Sewage Treatment Plant (STP) - Biological:</strong> Aerobic digestion in two-chamber aeration tank. Air compressor (ETO maintained) provides continuous oxygen for bacterial culture. Sludge separated in settling tank; clarified effluent disinfected. ETO checks air supply pressure, pump contactors, level alarms, and sludge drain valve.</li>
    <li><strong>Sewage Treatment Plant - Electrolytic:</strong> Electrolysis of seawater produces sodium hypochlorite in situ. ETO checks electrode condition, cell current, and dosing rate.</li>
  </ul>

  <div class="n-h2">Certificate &amp; ETO Responsibilities</div>
  <p class="n-p">Ships subject to Annex IV must carry an <strong>International Sewage Pollution Prevention (ISPP) Certificate</strong>, issued after inspection of sewage treatment/holding arrangements. The ETO's maintenance responsibilities for Annex IV include: UV lamp hour tracking and replacement; pump contactor and starter condition; holding tank level and overflow alarms; air supply to biological STP; sampling port cleanliness; and recording any STP malfunction that forces sewage to holding tank - this must be noted in the logbook.</p>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Annex IV limits:</strong> <strong>3-12-STP:</strong> "Less than 3 miles = Stop (holding tank). 3–12 miles = STP only. Over 12 miles = comminute + disinfect + 4 knots."</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BOD &amp; COD - treated-sewage quality:</strong> <strong>BOD</strong> (Biochemical Oxygen Demand) is the oxygen used by bacteria to break down the organic matter in the effluent - a measure of organic pollution load (mg/L). <strong>COD</strong> (Chemical Oxygen Demand) is the oxygen needed to chemically oxidise all matter, organic and inorganic - always higher than BOD. Low BOD/COD = well-treated effluent. STP performance is judged against the Annex IV / IMO MEPC.227(64) discharge limits for BOD, suspended solids and faecal coliforms.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-annexV">♻️ MARPOL Annex V - Prevention of Pollution by Garbage</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: plastic ban, garbage categories, what can/cannot be discharged, distance limits, and Garbage Management Plan. E-Waste classification is asked by Deswal every session.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body">MARPOL Annex V covers Prevention of Pollution by Garbage from Ships. Substantially revised in 2013 by MARPOL Resolution MEPC.201(62) - default position is now <strong>all garbage is prohibited from discharge</strong> unless specifically exempted. Applies to all ships. Garbage Record Book (GRB) mandatory for ships <span class="n-val">&gt; 100 GT</span> and ships certified to carry <span class="n-val">&gt; 15 persons</span>.</div></div>

  <div class="n-h2">Garbage Discharge Rules - What Is Permitted vs Prohibited</div>
  <table class="n-table">
    <tr><th>Garbage Category</th><th>Outside Special Areas</th><th>Inside Special Areas</th></tr>
    <tr><td><strong>Plastics (ALL types, ALL items)</strong></td><td class="bad">PROHIBITED - never discharged anywhere at sea</td><td class="bad">PROHIBITED</td></tr>
    <tr><td><strong>Food waste</strong></td><td class="ok">Allowed &gt;<span class="n-val">12 nm</span> from land (comminuted &lt;25 mm: &gt;<span class="n-val">3 nm</span>)</td><td class="hl">Allowed &gt;12 nm (comminuted &gt;3 nm - area dependent)</td></tr>
    <tr><td><strong>Cargo residues (not harmful to marine environment)</strong></td><td class="ok">Allowed &gt;<span class="n-val">12 nm</span> from land, en route, not in special areas</td><td class="bad">PROHIBITED in most special areas</td></tr>
    <tr><td><strong>Cleaning agents/additives in cargo hold wash water</strong></td><td class="ok">Allowed &gt;<span class="n-val">12 nm</span> if non-toxic and biodegradable</td><td class="bad">PROHIBITED</td></tr>
    <tr><td><strong>Animal carcasses</strong></td><td class="ok">Allowed &gt;<span class="n-val">100 nm</span> from land, en route</td><td class="bad">PROHIBITED</td></tr>
    <tr><td><strong>All other garbage (paper, glass, metal, rags, E-waste, etc.)</strong></td><td class="bad">PROHIBITED</td><td class="bad">PROHIBITED</td></tr>
  </table>

  <div class="n-h2">MARPOL Special Areas under Annex V (No Discharge except food waste)</div>
  <p class="n-p">Mediterranean Sea, Baltic Sea, Black Sea, Red Sea, Gulfs Area (Persian Gulf), North Sea, Antarctic Area (south of 60°S - even food waste prohibited within 12 nm of Antarctic coast), Wider Caribbean Region (including Gulf of Mexico).</p>

  <div class="n-h2">Garbage Management Plan (GMP) - Mandatory Content</div>
  <p class="n-p">All ships <span class="n-val">&gt; 100 GT</span> and ships certified to carry <span class="n-val">&gt; 15 persons</span> must carry a written <strong>Garbage Management Plan (GMP)</strong> in the working language of the crew. The GMP must designate a responsible officer for garbage management, and must include procedures for collecting, storing, processing, and discharging garbage in compliance with MARPOL Annex V.</p>
  <ul class="n-list">
    <li>Collection procedures: separate bins by category, labelled, in all working areas</li>
    <li>Segregation requirements: food waste, plastics, glass, metal, paper, E-waste, hazardous waste - separated at source</li>
    <li>Processing options: incinerator use (permitted categories only), compactor, pulper for food</li>
    <li>Discharge procedures: when, how, and where discharges are permitted; required entries in GRB</li>
    <li>Reception facility contacts: port-by-port list of available reception facilities</li>
  </ul>

  <div class="n-h2">Garbage Record Book (GRB) - Entries Required</div>
  <p class="n-p">Every discharge or incineration must be recorded in the GRB: date, position, category of garbage, volume or estimated weight, method of disposal (overboard or to reception). Signed by the responsible officer. Retained onboard for <span class="n-val">2 years</span> after last entry. Subject to PSC inspection. Note: ships <span class="n-val">&lt; 400 GT</span> on domestic voyages only need written compliance, not necessarily a formal GRB - but all international voyages above 100 GT require GRB.</p>

  <div class="n-h2">Plastic Ban - Absolute Rule</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Plastics - in ALL forms (synthetic ropes, fishing gear, garbage bags, plastic wrapping, polystyrene cups, synthetic mooring lines, etc.) - are ABSOLUTELY PROHIBITED from discharge into the sea anywhere, in any special area or outside, in any quantity. This is the most important rule in Annex V. Surveyors may ask: "Can you discharge a plastic cup at 200 nm from land?" - Answer: NO. NEVER.</strong></div></div>

  <div class="n-h2">Mandatory E-Waste Segregation Matrix (Annex V - ETO Specific)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Anil Deswal tests E-Waste classification in every session. Electronic Waste (E-Waste/WEEE) is a Category 3.3 harmful substance - absolutely prohibited from sea discharge or onboard incineration. Must be segregated into specific coloured bins for certified landing ashore.</strong></div></div>
  <table class="n-table">
    <tr><th>Bin Colour</th><th>Category</th><th>Content Examples</th></tr>
    <tr><td style="color:red;font-weight:bold;">RED</td><td>Hazardous / Toxic E-Waste</td><td>Lithium, lead-acid, and NiCd batteries; fluorescent tubes; mercury switches; circuit board PCBs; printer toner cartridges</td></tr>
    <tr><td style="color:#e6b800;font-weight:bold;">YELLOW</td><td>General E-Waste</td><td>Discarded mobile phones, portable instruments, isolated copper wiring, consumer electronics</td></tr>
    <tr><td style="color:green;font-weight:bold;">GREEN</td><td>Paper and Cardboard</td><td>Clean packing slips, structural boxes, un-laminated charting notes</td></tr>
    <tr><td style="color:blue;font-weight:bold;">BLUE</td><td>Glass Materials</td><td>Bottles, broken window panes, non-hazardous glass shards</td></tr>
    <tr><td style="color:#333;font-weight:bold;">BLACK</td><td>General Non-Recyclable Waste</td><td>Operational trash, contaminated rags, non-hazardous non-combustible materials</td></tr>
  </table>

  <div class="n-h2">Onboard Incinerator - Thermal Restrictions &amp; Permitted Materials</div>
  <p class="n-p">Shipboard waste incinerators (Annex VI Regulation 16) must operate within an IMO-approved combustion chamber temperature profile of <span class="n-val">850°C to 1200°C</span>. ETOs ensure thermal control loops cut fuel feed if temperatures deviate.</p>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Permitted for Incineration</div><div class="card-desc"><ul class="n-list"><li>Engine room oil sludge and oily purifier bottoms</li><li>Sewage treatment plant separated sludge</li><li>Organic food waste, clean paper, un-laminated cardboard, and cotton rags</li></ul></div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">STRICTLY FORBIDDEN from Incineration</div><div class="card-desc"><ul class="n-list"><li>Electronic waste (E-Waste/WEEE) and circuit boards</li><li>Halogenated plastics and PVC (creates lethal dioxins/HCl)</li><li>Polychlorinated Biphenyls (PCBs) and heavy metals</li><li>Annex II Noxious Liquid cargo residues and scrubber effluents</li></ul></div></div>
  </div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-bwmc">🧬 Ballast Water Management Convention (BWMC)</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors Kamath and Praveen Nair drill the D-1 vs D-2 criteria difference and BWTS log requirements.</strong></div></div>

  <p class="n-p">Adopted to prevent transfer of invasive aquatic organisms and harmful pathogens across marine ecosystems, the BWMC 2004 entered into full global force on <span class="n-val">8 September 2017</span>. Ships must manage ballast water via two operational standards:</p>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">D-1 Standard (Ballast Water Exchange)</div><div class="card-desc">Interim operational method: physical water exchange in the open ocean at least <span class="n-val">200 nautical miles</span> from nearest land, water depth ≥ <span class="n-val">200 metres</span>. Using pump-through method: pump exactly <span class="n-val">3 × the tank volume</span> to achieve 95% volumetric exchange. <em>D-1 is being phased out - all ships must transition to D-2.</em></div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">D-2 Standard (Ballast Water Performance)</div><div class="card-desc">Mandates onboard Ballast Water Treatment System (BWTS). Effluent discharged must have: &lt;<span class="n-val">10 viable organisms per m³</span> (large organisms &gt;50 μm) and &lt;<span class="n-val">10 viable organisms per mL</span> (microscopic cells 10–50 μm). Also limits indicator microbes (E.coli, intestinal enterococci, Vibrio cholerae).</div></div>
  </div>

  <div class="n-h2">BWTS Treatment Technologies</div>
  <p class="n-p">Systems destroy biological targets using auto-backwashing mesh filters followed by one of:</p>
  <ul class="n-list">
    <li><strong>UV Irradiation:</strong> High-intensity UV lamps (254 nm wavelength) shatter organism DNA loops, preventing reproduction. ETO maintains UV lamp hours, intensity sensors, and sleeve cleanliness. Lamp replacement typically at <span class="n-val">8,000–12,000 hours</span>.</li>
    <li><strong>Electrochlorination/Electrolysis:</strong> Seawater passed through electrolytic cells generates reactive sodium hypochlorite (NaOCl), which kills organisms. ETO maintains electrode condition, cell current, and residual chlorine monitoring.</li>
    <li><strong>Chemical Injection:</strong> Biocide (chlorine dioxide, peracetic acid, etc.) injected into ballast water. ETO maintains dosing pump, chemical storage, and neutralisation on discharge.</li>
  </ul>

  <div class="n-h2">Ballast Water Record Book (BWRB)</div>
  <p class="n-p">Every ballast pump operation, tank transfer, open-ocean exchange, or port reception discharge must be logged with precise coordinates and volumes in the mandatory <strong>Ballast Water Record Book (BWRB)</strong>. The class surveyor audits the BWTS automated alarm logs, filter differential pressure states, and continuous UV intensity tracking charts when issuing or renewing the <strong>International Certificate for Ballast Water Management (ICBWM)</strong>. Retained onboard for <span class="n-val">2 years</span> after last entry.</p>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-annexVI">💨 MARPOL Annex VI - Air Pollution Prevention</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath and Gupta always ask SOx limits, ECA vs global, and what a scrubber is. NOx tiers are also tested. Know the IAPP Certificate and EIAPP Certificate differences.</strong></div></div>

  <div class="n-h2">SOx Limits (Regulation 14)</div>
  <table class="n-table">
    <tr><th>Area</th><th>Sulphur Limit</th><th>Effective Date</th><th>Compliance Method</th></tr>
    <tr><td>Global (outside ECAs)</td><td class="hl"><span class="n-val">0.50% m/m</span></td><td class="hl"><span class="n-val">1 January 2020</span></td><td>Low-sulphur fuel (LSFO/MGO) or EGCS (scrubber)</td></tr>
    <tr><td>Emission Control Areas (ECA)</td><td class="hl"><span class="n-val">0.10% m/m</span></td><td class="hl"><span class="n-val">1 January 2015</span></td><td>Very low-sulphur fuel (MGO/ULSFO) or EGCS</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ECAs (Emission Control Areas) - SOx &amp; NOx:</strong> Baltic Sea · North Sea · North American coast (within 200 nm of US/Canadian coast) · US Caribbean Sea. Inside ECAs, both SOx AND NOx Tier III limits apply to applicable engines. Compliance via low-sulphur fuel or Exhaust Gas Cleaning System (EGCS/scrubber). <strong>Open-loop scrubber:</strong> uses seawater to absorb SO₂ - washwater discharged to sea. <strong>Closed-loop scrubber:</strong> uses circulated freshwater + caustic soda (NaOH) - washwater neutralised and treated, sludge retained. Allows burning cheaper high-sulphur fuel while meeting limits.</div></div>

  <div class="n-h2">NOx Tier Limits (Regulation 13)</div>
  <table class="n-table">
    <tr><th>Tier</th><th>Engine Build Year</th><th>NOx Limit (g/kWh)</th><th>Technology</th></tr>
    <tr><td>Tier I</td><td>Before 2011</td><td>Baseline (~17 g/kWh at 130 rpm)</td><td>Engine tuning only</td></tr>
    <tr><td>Tier II</td><td>2011 and later</td><td class="hl">~15.4% below Tier I (~14.4 g/kWh at 130 rpm)</td><td>Optimised combustion, injection timing, Miller cycle</td></tr>
    <tr><td class="ok">Tier III</td><td class="ok">2016 and later - inside NOx ECAs only</td><td class="ok">~80% below Tier I (~3.4 g/kWh at 130 rpm)</td><td class="ok">SCR (Selective Catalytic Reduction) or EGR (Exhaust Gas Recirculation) or dual-fuel LNG</td></tr>
  </table>

  <div class="n-h2">NOx Technical File &amp; EIAPP Certificate</div>
  <ul class="n-list">
    <li><strong>NOx Technical File:</strong> Every marine diesel engine &gt; 130 kW installed or substantially modified after 1 January 2000 must have a NOx Technical File approved by the Flag State. Contains the engine's parameters that determine NOx emissions (injection timing, fuel valve settings, turbocharger specs, etc.).</li>
    <li><strong>Engine Parameter Check Book:</strong> Used during surveys to verify that engine parameters have not deviated from the approved NOx Technical File values. The ETO must ensure engine settings remain within approved limits.</li>
    <li><strong>EIAPP Certificate (Engine International Air Pollution Prevention):</strong> Issued per individual engine unit. Confirms the engine was manufactured and approved to meet Annex VI NOx Tier requirements. Required for every diesel engine &gt; 130 kW installed after 1 January 2000. EIAPP stays with the engine for its lifetime.</li>
    <li><strong>IAPP Certificate (International Air Pollution Prevention):</strong> Issued for the SHIP (not individual engines). Covers all Annex VI requirements: SOx, NOx, ODS, VOC, incinerator, fuel oil quality, EEDI/EEXI (for applicable ships). Renewed every 5 years with annual endorsements.</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>EIAPP vs IAPP Memory Aid:</strong> <strong>E</strong>IAPP = <strong>E</strong>ngine certificate (per engine, permanent). <strong>I</strong>APP = sh<strong>I</strong>p certificate (per ship, 5-year renewal). "Engine is forever; ship renews."</div></div>

  <div class="n-h2">VECS - Vapour Emission Control System (Regulation 15)</div>
  <p class="n-p">VECS captures volatile organic compound (VOC) hydrocarbon vapours (benzene, toluene, pentane) displaced from cargo tanks during high-rate loading and routes them to shore-side recovery instead of venting. ETO maintains: electronic interlocks synchronising loading rates with manifold pressures; high-level and overfill float alarms on cargo tanks; continuous VOC infrared gas detection sensors in pump room spaces. <strong>All electrical equipment inside the cargo zone must be certified explosion-proof: Ex d (Flameproof) or Ex e (Increased Safety).</strong></p>

  <div class="n-h2">Ozone Depletion Substances (ODS) - Refrigerant Environmental Metrics (Regulation 12)</div>
  <p class="n-p">Intentional venting or atmospheric release of ozone-depleting substances during refrigeration or AC maintenance is strictly prohibited. ETOs track refrigerant specifications using two baselines:</p>
  <ul class="n-list">
    <li><strong>ODP (Ozone Depletion Potential):</strong> Relative value indexing ozone layer damage compared to CFC-11 (R-11), fixed at <span class="n-val">1.0</span>.</li>
    <li><strong>GWP (Global Warming Potential):</strong> Indexes heat-trapping capacity relative to CO₂, fixed at <span class="n-val">1.0</span>.</li>
  </ul>
  <table class="n-table">
    <tr><th>Refrigerant</th><th>Classification</th><th>ODP</th><th>GWP</th><th>Status</th></tr>
    <tr><td><strong>R-11 / R-12</strong></td><td>CFC</td><td class="bad">1.0 (Extreme)</td><td class="bad">High</td><td class="bad">Global ban - new installations prohibited since 1996</td></tr>
    <tr><td><strong>R-22</strong></td><td>HCFC</td><td class="bad">0.055</td><td class="hl">Medium</td><td>Banned on new installations since 2020; existing lines cannot accept virgin gas recharges</td></tr>
    <tr><td><strong>R-134a</strong></td><td>HFC</td><td class="ok">0.000</td><td class="bad">1430 (High)</td><td>Standard in current AC ventilation plants</td></tr>
    <tr><td><strong>R-404A</strong></td><td>HFC Blend</td><td class="ok">0.000</td><td class="bad">3922 (Severe)</td><td>Standard in low-temperature reefer containers</td></tr>
    <tr><td><strong>R-1234yf</strong></td><td>HFO</td><td class="ok">0.000</td><td class="ok">&lt;1 (Eco-Ideal)</td><td>New generation low-environmental-impact refrigerant</td></tr>
  </table>

  <div class="n-h2">Mandatory ODS Record Book Entries</div>
  <p class="n-p">Vessels with rechargeable cooling loops totalling more than <span class="n-val">3 kg</span> of charge must maintain a verified ODS Record Book. ETO must record: exact kg added during any top-up or recharge; kg recovered during decommissioning or overhaul; kg landed ashore to port reception; any accidental gas escape event and its source.</p>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cii">📊 CII, SEEMP &amp; Energy Efficiency</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Mandatory for ships ≥5,000 GT. Surveyors now ask CII ratings, SEEMP Part III, ETO's role in improving CII, and EEXI differences.</strong></div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">EEDI</div><div class="card-desc"><strong>Energy Efficiency Design Index</strong> - technical measure for NEW ships at design stage. Measured in g CO₂ per tonne-mile. Set by flag state at time of construction; ship must meet minimum (Phase 0/1/2/3 reducing limits). Cannot be changed operationally.</div></div>
    <div class="n-card" style="border-color:var(--purple)"><div class="card-title" style="color:var(--purple)">EEXI</div><div class="card-desc"><strong>Energy Efficiency Existing Ship Index</strong> - technical measure for EXISTING ships (in service before 2013). Mandatory from <span class="n-val">1 January 2023</span>. Ships ≥400 GT must demonstrate compliance - calculated at design speed/power. Non-compliant ships must implement Engine Power Limitation (EPL) or shaft power limitation (ShaPoLi).</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">SEEMP</div><div class="card-desc"><strong>Ship Energy Efficiency Management Plan</strong> - mandatory operational plan ≥400 GT. Three parts: Part I (efficiency measures plan), Part II (IMO DCS monitoring for ≥5,000 GT), Part III (CII rating and improvement plan for ≥5,000 GT, effective Jan 2023).</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">CII</div><div class="card-desc"><strong>Carbon Intensity Indicator</strong> - operational annual rating A–E based on actual CO₂ per DWT·nautical mile. Annual assessment for ships ≥5,000 GT. Rating compared to reference line that tightens each year toward 2050 targets.</div></div>
  </div>

  <div class="n-formula">CII = Annual CO₂ Emissions (grams) / (DWT × Distance Sailed in nautical miles)<div class="label">Units: g CO₂ / DWT·nm · Rating: A (best) → E (worst) compared to reference line</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SEEMP Part III - mandatory corrective action thresholds:</strong> D rating for <strong>3 consecutive years</strong> OR E rating for <strong>1 year</strong> → a Corrective Action Plan (CAP) must be developed, verified by the Flag State or RO, and submitted before a Statement of Compliance is issued. Ships without a valid Statement of Compliance cannot trade internationally.</div></div>

  <div class="n-h2">SEEMP Part III - ETO's 7 Key Actions to Improve CII Rating</div>
  <ol class="n-steps">
    <li><strong>LED Lighting Conversion:</strong> Replacing 40W fluorescent tubes with 10W LEDs reduces hotel load significantly (~36 tonnes HFO/year on a large vessel).</li>
    <li><strong>VFD (Variable Frequency Drive) on Pumps/Fans:</strong> Reducing centrifugal pump/fan speed by 20% reduces power consumption by nearly 50% (cube law: P ∝ N³).</li>
    <li><strong>Power Factor Correction:</strong> Improving PF (e.g. from 0.75 to 0.95) reduces generator reactive current and I²R thermal losses, lowering fuel consumption per kWh generated.</li>
    <li><strong>Shore Power (Cold Ironing):</strong> Connecting to shore power (HVSC/OPS) at berth stops auxiliary engines - fuel consumption at berth drops to near zero.</li>
    <li><strong>Waste Heat Recovery:</strong> Cleaning exhaust economiser tubes increases steam generation efficiency, reducing oil-fired boiler use and thus total fuel consumption.</li>
    <li><strong>Accurate Energy Monitoring:</strong> Maintaining calibrated flow meters, power meters, and energy sensors required for IMO Data Collection System (DCS) - inaccurate meters lead to incorrect CII calculations.</li>
    <li><strong>PMS Optimisation:</strong> Configuring the Power Management System to avoid unnecessary parallel running at low combined loads - running one generator at 75% load is more efficient than two at 37.5% each.</li>
  </ol>

  <div class="n-h2">SEEMP Part III - Event-Based Reporting (MEPC.395(82))</div>
  <ul class="n-list">
    <li><strong>Event reporting:</strong> BOSP (Beginning of Sea Passage), EOSP (End of Sea Passage), FAOP (Full Away on Passage) must be logged with timestamps and positions</li>
    <li><strong>Fuel consumption breakdown:</strong> Separate reporting by Main Engine, Auxiliary Engines, and Boilers for each fuel type</li>
    <li><strong>Power at Berth:</strong> Shore power (HVSC) usage must be tracked and reported as zero-emission periods</li>
    <li><strong>IMO DCS submission:</strong> Annual fuel oil consumption data, CII rating, and EEXI submitted to IMO Fuel Oil Consumption Database by 31 March each year</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-carbonstrategy">🌍 IMO 2023 GHG Strategy - Carbon Levy &amp; 2030/2050 Targets</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors are beginning to ask about carbon credits and maritime emissions trading. Know the 2030/2050 targets and how the pricing mechanism works.</strong></div></div>

  <div class="n-h2">IMO 2023 Revised GHG Strategy - Key Targets</div>
  <table class="n-table">
    <tr><th>Target Year</th><th>Goal</th><th>Baseline</th></tr>
    <tr><td class="hl"><strong>2030</strong></td><td class="hl">CO₂ intensity (per transport work) reduced by at least <span class="n-val">40%</span></td><td>Compared to 2008</td></tr>
    <tr><td class="hl"><strong>2040</strong></td><td class="hl">Indicative checkpoint - approximately <span class="n-val">70% reduction</span> in total GHG emissions</td><td>Compared to 2008</td></tr>
    <tr><td class="ok"><strong>2050</strong></td><td class="ok">Net-zero GHG emissions from international shipping - <span class="n-val">100% decarbonisation</span></td><td>Compared to 2008</td></tr>
  </table>

  <div class="n-h2">Key GHG Policy Instruments Being Developed</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Carbon Levy (Market-Based Measure)</div><div class="card-desc">A price on CO₂ emissions (per tonne CO₂). Ships emitting above a benchmark pay a levy. Funds collected channelled to a Green Fund for alternative fuel R&amp;D and developing-nation transition support. IMO targeting implementation post-2027. Exact rate still under negotiation (estimates: US$18–150 per tonne CO₂).</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Carbon Credits / Emissions Trading Scheme</div><div class="card-desc">Ships using zero-carbon or low-carbon fuels (LNG, methanol, ammonia, hydrogen) earn carbon credits for below-benchmark performance. These credits can be sold to high-emitting ships to offset their levy obligations. Creates a market incentive: efficient ships profit, inefficient ships pay. Concepts from EU ETS being adapted for international shipping.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Fuel Intensity Standard (FuelEU Maritime - Regional)</div><div class="card-desc">EU's own regulation targeting ships calling at EU ports: mandates decreasing GHG intensity of energy used - 2% reduction by 2025, increasing to 80% by 2050. Ships below standard earn "compliance surplus" credits; over-standard ships pay penalties. Effective 1 January 2025.</div></div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a carbon pricing mechanism is needed:</strong> Shipping currently uses high-GWP bunker fuels (HFO, VLSFO) because they are cheap. Alternative fuels (LNG, methanol, ammonia, hydrogen) are more expensive. Without a carbon price, there is no financial incentive for shipping companies to switch. A carbon levy makes high-carbon fuel artificially expensive and reduces the cost gap to zero-carbon alternatives, accelerating the transition while generating funds for green technology development.</div></div>

  <div class="n-h2">Greenhouse Gases in Shipping - Composition</div>
  <table class="n-table">
    <tr><th>Gas</th><th>Source in Shipping</th><th>GWP (100-yr)</th><th>Share of Shipping GHG</th></tr>
    <tr><td class="bad"><strong>CO₂</strong></td><td>Combustion of fuel in ME, AE, boilers</td><td class="bad">1 (reference)</td><td class="bad">~91%</td></tr>
    <tr><td class="hl"><strong>CH₄ (Methane)</strong></td><td>Methane slip from LNG dual-fuel engines (unburned gas)</td><td class="bad">~84 (20-yr), ~30 (100-yr)</td><td class="hl">~7%</td></tr>
    <tr><td><strong>N₂O (Nitrous Oxide)</strong></td><td>Incomplete combustion, SCR post-processing</td><td class="bad">~265</td><td>~2%</td></tr>
    <tr><td><strong>Black Carbon (BC)</strong></td><td>Particulate soot from HFO combustion - especially in Arctic</td><td class="bad">Very high (near-term)</td><td>Under review</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-altfuels">⛽ Alternative Fuels &amp; IGF Code - 2026 Updates</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Alternative fuels are now asked at every advanced oral. Know methanol and ammonia hazards, IGF Code bunkering rules, and CII/SEEMP event-based reporting.</strong></div></div>

  <div class="n-h2">LNG as Fuel - Key Properties &amp; ETO Concerns</div>
  <ul class="n-list">
    <li>Boiling point: <span class="n-val">−162°C</span> - cryogenic temperatures require special insulated bunker tanks</li>
    <li>Methane slip (unburned CH₄ vented): critical to monitor - GWP 84× CO₂ over 20 years</li>
    <li>Flashpoint: <span class="n-val">−188°C</span> (extremely low) - IGF Code mandatory; all electrical equipment in LNG zones: certified Ex zones</li>
    <li>Gas detection: continuous methane (CH₄) sensors in all enclosed spaces near LNG system; ETO calibrates and maintains</li>
    <li>Shut-off valves: remote-actuated solenoid valves - ETO tests emergency stop function</li>
  </ul>

  <div class="n-h2">Methanol as Fuel - Key Properties &amp; ETO Concerns</div>
  <ul class="n-list">
    <li>Flashpoint: <span class="n-val">~12°C</span> - well below conventional HFO minimum 60°C limit - IGF Code mandatory</li>
    <li>Toxic: TLV-TWA <span class="n-val">200 ppm</span> - vapour causes eye damage and CNS effects</li>
    <li>Burns with near-invisible flame - special fire detection required (UV/IR combined detectors)</li>
    <li>Soluble in water - easier to disperse if spilled but still marine pollutant</li>
    <li>ETO: continuous methanol vapour detection, gas-tight fuel preparation room, remote isolation valves</li>
  </ul>

  <div class="n-h2">Ammonia as Propulsion Fuel (IGF Code 2026) - Type 2G/2PG</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Ammonia (NH₃) now legally permitted as propulsion fuel on Type 2G/2PG gas carriers per IGF Code 2026 amendment. Zero carbon when combusted but high toxicity requires extensive safety systems.</div></div>
  <table class="n-table">
    <tr><th>Hazard Parameter</th><th>Value</th><th>ETO Implication</th></tr>
    <tr><td>TLV-TWA (Time-Weighted Average)</td><td class="bad"><span class="n-val">25 ppm</span></td><td>Warning alarm setpoint for continuous detection system</td></tr>
    <tr><td>Evacuation alarm level</td><td class="bad"><span class="n-val">~50 ppm</span></td><td class="bad">Evacuate space immediately on activation</td></tr>
    <tr><td>IDLH (Immediately Dangerous to Life &amp; Health)</td><td class="bad"><span class="n-val">300 ppm</span></td><td class="bad">Instantly life-threatening - SCBA mandatory for entry</td></tr>
    <tr><td>Detection type</td><td class="hl">Continuous electrochemical NH₃ sensors</td><td>ETO maintains calibration records and response-time tests</td></tr>
    <tr><td>Safety systems</td><td class="hl">Remote solenoid isolation valves + SCBA at entry points</td><td>Mandatory per IGF Code 2026</td></tr>
  </table>

  <div class="n-h2">Hydrogen as Fuel</div>
  <ul class="n-list">
    <li>Zero GHG emissions at point of use (water vapour only) - if produced by green electrolysis</li>
    <li>Flammability range: <span class="n-val">4%–75% in air</span> - extremely wide, very hazardous</li>
    <li>Flashpoint: <span class="n-val">−253°C</span> (cryogenic) - requires cryogenic storage or high-pressure compressed tanks</li>
    <li>Detonation hazard - lower ignition energy than any other fuel</li>
    <li>Currently limited to pilot vessels and small craft; large ship application under development</li>
  </ul>

  <div class="n-h2">IGF Code 2026 - Bunkering Checklist Requirements</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>IGF Code:</strong> Mandatory SOLAS framework for ships using fuels with flashpoint below <span class="n-val">60°C</span> (LNG, methanol, ammonia, hydrogen). 2026 amendment requires bunkering checklist to explicitly document: agreed minimum/maximum transfer pressures; minimum/maximum transfer temperatures; and relief valve settings on both ship and supply sides - must be signed before transfer begins.</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>New 2026 IGF requirement:</strong> A portable <span class="n-val">5 kg DCP</span> (Dry Chemical Powder) fire extinguisher must be physically located INSIDE each fuel preparation room and gas valve unit room. DCP rapidly interrupts gas jet flames common to alternative fuel bunkering incidents.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-new2024">🆕 2024–2026 Regulatory Updates - Know These</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand-new regulations being specifically asked from 2024–2026 onward. Surveyors are directly asking about flashpoint rules, sample size change, and pre-bunker declarations.</strong></div></div>

  <div class="n-h2">BDN Flashpoint Statement (Effective May 2024)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Bunker Delivery Notes (BDN) must explicitly state the actual measured flashpoint if it is below <span class="n-val">70°C</span>. If above 70°C, must confirm it was measured at or above that threshold. Test method: <span class="n-val">ISO 2719:2016</span> closed-cup method only. Ensures crew knows if they are handling low-flashpoint fuel.</div></div>

  <div class="n-h2">Pre-Bunkering Flashpoint Declaration (Effective January 2026)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SOLAS II-2/4.2.1 amendment:</strong> Fuel supplier must provide a signed declaration BEFORE bunkering, confirming fuel conforms to minimum <span class="n-val">60°C</span> flashpoint limit. If declaration absent or flashpoint &lt;60°C → Master / Chief Engineer must REFUSE the bunkers. ETO role: confirm compliance with the flashpoint documentation before fuel connection.</div></div>

  <div class="n-h2">MARPOL Retained Sample Size Increase</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">Required volume of retained MARPOL delivered sample increased from <span class="n-val">400 mL</span> to <span class="n-val">600 mL</span>. Ensures sufficient volume for flashpoint verification testing if a fuel quality dispute arises. Cleaning primary samplers with low-flashpoint solvents is explicitly prohibited (prevents sample contamination).</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Master Memory Aid - T17 Critical Numbers:</strong><br>
  OWS = <span class="n-val">15 ppm</span> · 12 nm · en route · outside special areas<br>
  ODME = <span class="n-val">30 L/nm</span> · 1/30,000 cargo · 50 nm · auto-close<br>
  Sewage = &lt;3 nm prohibited · 3–12 nm STP only · &gt;12 nm comminute+disinfect+4 kts<br>
  Plastics = <span class="n-val">NEVER</span> overboard, anywhere<br>
  SOx = <span class="n-val">0.5%</span> global / <span class="n-val">0.1%</span> ECA<br>
  CII = A→E annually · D×3 or E×1 = CAP · ≥5,000 GT<br>
  BDN flashpoint: May 2024 statement / Jan 2026 pre-declaration / min <span class="n-val">60°C</span><br>
  Sample size: <span class="n-val">400 mL → 600 mL</span></div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 17</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>OWS - working principle, 15 ppm sensor type, how to test, what if not used? (All surveyors)</strong><br><strong>Ideal Answer:</strong> OWS removes oil from bilge water via gravity separation + coalescing filter. OCM uses infrared absorption (optical) sensor - continuously measures oil in effluent. At <span class="n-val">15 ppm</span>: alarm activates + 3-way fail-safe solenoid valve diverts back to holding tank automatically. Test: manufacturer self-test function or oil-in-water test emulsion. OCM sensor window must be cleaned monthly - fouling gives false low readings. If not used: retain all bilge water in holding tank, transfer to port reception, log accurately in ORB Part I with Code D/E entries.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ODME - purpose, working, discharge criteria, what if not used? (All surveyors)</strong><br><strong>Ideal Answer:</strong> ODME monitors and controls cargo-related oily water discharge (ballast, tank washings) from tankers at sea. Uses optical sensor + flow meter + GPS. MARPOL criteria: rate ≤<span class="n-val">30 L/nm</span>, total ≤<span class="n-val">1/30,000</span> of cargo, position &gt;<span class="n-val">50 nm</span> from land, en route. Discharge valve closes automatically if any criterion is exceeded. If not used: retain all cargo-related ballast/washings for port reception - log accurately in ORB Part II.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the IOPP Certificate? When is it renewed? What surveys maintain it? (All surveyors)</strong><br><strong>Ideal Answer:</strong> IOPP - International Oil Pollution Prevention Certificate - issued under MARPOL Annex I. Certifies that the ship's oil pollution prevention equipment, fittings, and procedures comply with Annex I. Required for ships &gt;400 GT and oil tankers &gt;150 GT. Survey schedule: Initial (first issue) → Annual (within 3 months of anniversary) → Intermediate (2nd or 3rd year) → Renewal every 5 years. PSC officers check IOPP validity before any pollution-related inspection. If equipment fails between surveys, Flag State must be notified.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What happens during a PSC inspection related to MARPOL? What is the ETO expected to show? (Surveyors Kamath, Praveen Nair)</strong><br><strong>Ideal Answer:</strong> PSC officer boards and checks: (1) Certificates - IOPP, IAPP, IBWMC, ISPP validity. (2) ORB Part I - every entry, cross-checked against bilge holding tank soundings and voyage records; inconsistencies suggest falsification. (3) OWS operational demonstration if requested - OCM function test, 3-way valve operation, sensor cleanliness. (4) Bilge holding tank actual level vs ORB recordings. (5) BWTS alarm logs and UV intensity records. (6) ODS Record Book for refrigerant management. Grounds for detention: OWS non-functional; ORB missing/falsified; oil traces in overboard line; bypass valve in open position. ETO is responsible for ORB Part I accuracy - falsification is a criminal offence.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>SOx limits - ECA vs non-ECA? What is a scrubber? (Kamath, Gupta)</strong><br><strong>Ideal Answer:</strong> Global outside ECAs: <span class="n-val">0.50% m/m</span> (since 1 January 2020). Inside ECAs (Baltic, North Sea, North America, US Caribbean): <span class="n-val">0.10% m/m</span> (since 1 January 2015). EGCS/scrubber: alternative compliance method - contacts exhaust with seawater (open-loop) or chemical solution (closed-loop) to remove SO₂ before release. Allows burning cheaper high-sulphur fuel while meeting SOx limits. Open-loop discharges washwater to sea; closed-loop retains it. ETO maintains scrubber differential pressure, washwater pH monitoring (open-loop), and recirculation pump.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the MARPOL Annex II categories X, Y, Z and OS? What is the Cargo Record Book? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Annex II covers Noxious Liquid Substances (NLS) in bulk on chemical tankers. Category X: Major hazard - discharge PROHIBITED at sea, transfer ashore only, mandatory pre-wash. Category Y: Hazard - discharge allowed &gt;12 nm, depth &gt;25 m, speed &lt;7 knots, &lt;1 m³/nm; pre-wash if residue exceeds limit. Category Z: Minor hazard - discharge allowed &gt;12 nm. OS (Other Substances): assessed as no harm, unregulated but must be listed. Cargo Record Book logs all cargo operations, tank cleaning, and discharge - retained 3 years, subject to PSC inspection.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is MARPOL Annex IV - sewage discharge rules? What is the ETO's role? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> Annex IV prevents pollution by sewage. Rules: &lt;3 nm = discharge PROHIBITED (holding tank only). 3–12 nm = discharge only if approved STP meeting bacterial standards. &gt;12 nm = comminuted (&lt;9.5 mm) AND disinfected (chlorinated or UV-treated) sewage, ship en route at &gt;4 knots. Equipment: holding tank (with level alarm), comminuter (ETO maintains motor and cutter blades), STP (biological or electrolytic - ETO maintains aeration compressor, UV lamps, dosing pumps). Certificate: ISPP (International Sewage Pollution Prevention). ETO specifically: tracks UV lamp hours, maintains pump contactors, logs any STP malfunction.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is MARPOL Annex V? Can plastics be discharged at 200 nm from land? What is in the GMP? (All surveyors)</strong><br><strong>Ideal Answer:</strong> Annex V prevents pollution by garbage. Default position: ALL garbage prohibited unless specifically exempted. Plastics in ALL forms - NEVER discharged at sea, anywhere, in any quantity (even 200 nm). Food waste allowed &gt;12 nm (comminuted &gt;3 nm). All other garbage goes to port reception. Garbage Management Plan (GMP) mandatory for ships &gt;100 GT - designates responsible officer, contains segregation procedures, discharge rules, reception contacts. Garbage Record Book (GRB) retained 2 years. E-waste (WEEE) is a hazardous harmful substance - prohibited from sea discharge AND incineration - must be landed ashore in segregated bins.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is SEEMP, EEDI, EEXI, and CII? What is the ETO's role? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> EEDI = Energy Efficiency Design Index - technical standard for new ships at design stage; g CO₂/tonne-mile. EEXI = Energy Efficiency Existing Ship Index - same concept for ships built before 2013, mandatory from January 2023; non-compliant ships must limit engine power (EPL/ShaPoLi). SEEMP = Ship Energy Efficiency Management Plan - mandatory operational plan ≥400 GT; Part III covers CII. CII = Carbon Intensity Indicator - annual A–E rating based on actual CO₂/DWT·nm; mandatory ≥5,000 GT; D×3 consecutive or E×1 year → mandatory Corrective Action Plan. ETO improves CII by: LED conversion, VFD on pumps, PF correction, shore power use, economiser maintenance, accurate metering, PMS optimisation.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the new 2024–2026 MARPOL flashpoint rules? (New question being asked now)</strong><br><strong>Ideal Answer:</strong> From May 2024: Bunker Delivery Notes must state actual flashpoint if &lt;<span class="n-val">70°C</span> (ISO 2719 closed-cup method). From January 2026: fuel supplier must provide pre-bunkering signed declaration confirming ≥<span class="n-val">60°C</span> flashpoint before transfer begins (SOLAS II-2/4.2.1). If absent or below 60°C: Master/CE must refuse bunkers. MARPOL retained sample volume increased from <span class="n-val">400 mL</span> to <span class="n-val">600 mL</span>. IGF Code 2026: LNG/methanol/ammonia bunkering checklist must state agreed pressure/temperature limits and relief valve settings, signed before transfer.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the difference between OWS, ODME, and ODM on non-tankers? (All surveyors)</strong><br><strong>Ideal Answer:</strong> OWS (Oily Water Separator): fitted in engine room bilge system of all vessels &gt;400 GT. Processes bilge water by gravity + coalescer to &lt;15 ppm before discharge to sea. Has OCM (infrared optical sensor) and automatic 3-way fail-safe valve - &gt;15 ppm diverts to holding tank. Can only discharge &gt;12 nm, outside special areas, en route. ODME (Oil Discharge Monitoring Equipment): tankers only - monitors rate and cumulative quantity of oil during cargo tank washing, ensuring &lt;30 L/nm, &lt;1/30,000 cargo, &gt;50 nm. On non-tankers, no ODME is fitted - all machinery space discharges monitored by OWS/OCM only.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the IMO 2023 GHG Strategy and carbon pricing? (New - being asked at advanced level)</strong><br><strong>Ideal Answer:</strong> IMO 2023 Revised GHG Strategy targets: 40% CO₂ intensity reduction by 2030, net-zero GHG emissions by 2050 (both vs 2008). Key instruments: (1) CII annual rating A–E - ships performing poorly must improve or submit corrective action plans. (2) EEXI - technical efficiency standard for existing ships, mandatory from January 2023. (3) Carbon levy (proposed post-2027) - ships pay per tonne of CO₂ above a benchmark; funds support green technology. (4) Carbon credits/emissions trading - efficient/low-carbon fuel ships earn credits to sell; inefficient ships buy them. Purpose: make high-carbon fuel economically expensive so alternative fuels become competitive. EU ETS extended to shipping from January 2024 for ships calling at EU ports.</div></div>


  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 17</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <table class="n-table">
    <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Values / Rules</th></tr>
    <tr><td>OWS - 15 ppm limit</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">15 ppm</span> | Infrared OCM | 3-way fail-safe valve | &gt;<span class="n-val">12 nm</span> from land | en route | outside special areas</td></tr>
    <tr><td>ODME discharge criteria</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td><span class="n-val">30 L/nm</span> | <span class="n-val">1/30,000</span> cargo | &gt;<span class="n-val">50 nm</span> from land | auto-close valve</td></tr>
    <tr><td>Oil Record Book</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Part I = machinery (&gt;<span class="n-val">400 GT</span>) | Part II = tanker cargo (&gt;<span class="n-val">150 GT</span>) | Retain <span class="n-val">3 years</span> | Codes A–H</td></tr>
    <tr><td>IOPP Certificate surveys</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Initial → Annual → Intermediate → Renewal 5-yr | Ships &gt;400 GT | Issued by Flag State</td></tr>
    <tr><td>PSC inspection - ETO role</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Praveen Nair</td><td>Certificates + ORB + OWS demo + BWTS logs + bilge tank soundings vs ORB. Falsification = criminal.</td></tr>
    <tr><td>Annex II - NLS categories</td><td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>X = ashore only | Y = &gt;12 nm &lt;7 kts | Z = &gt;12 nm | OS = no restriction. Pre-wash mandatory for X, Y.</td></tr>
    <tr><td>Annex IV - Sewage limits</td><td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td><td>&lt;<span class="n-val">3 nm</span> = prohibited | <span class="n-val">3–12 nm</span> = STP only | &gt;<span class="n-val">12 nm</span> = comminute + disinfect + 4 kts | ISPP Certificate</td></tr>
    <tr><td>Annex V - Plastic ban</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Plastics = <strong>NEVER</strong> overboard anywhere | Food waste &gt;12 nm (comminuted &gt;3 nm) | GMP mandatory &gt;100 GT | GRB 2 yr</td></tr>
    <tr><td>Annex V - E-Waste</td><td class="hl">⭐⭐⭐⭐⭐ Deswal every session</td><td>WEEE = prohibited sea discharge AND incineration | RED bin = hazardous (batteries, PCBs) | YELLOW = general e-waste</td></tr>
    <tr><td>Ballast Water D-1 vs D-2</td><td class="hl">⭐⭐⭐⭐ Kamath, Praveen Nair</td><td>D-1: exchange &gt;<span class="n-val">200 nm</span> depth &gt;<span class="n-val">200 m</span>, 3× volume | D-2: BWTS &lt;10 org/m³ | BWRB retain 2 yr</td></tr>
    <tr><td>SOx limits</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Gupta</td><td>Global <span class="n-val">0.50%</span> (Jan 2020) | ECA <span class="n-val">0.10%</span> (Jan 2015) | Scrubber = alternative compliance</td></tr>
    <tr><td>NOx Tiers</td><td class="hl">⭐⭐⭐⭐ Kamath</td><td>Tier I: pre-2011 baseline | Tier II: 2011+ ~15% better | Tier III: 2016+ ECA ~80% better (SCR/EGR) | EIAPP per engine</td></tr>
    <tr><td>EIAPP vs IAPP</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>EIAPP = per-engine certificate (permanent) | IAPP = per-ship certificate (5-yr renewal) covering all Annex VI</td></tr>
    <tr><td>CII / SEEMP Part III</td><td class="hl">⭐⭐⭐⭐⭐ New - asked now</td><td>A→E rating | D×3 or E×1 = Corrective Action Plan | ≥<span class="n-val">5,000 GT</span> | EEXI from Jan 2023</td></tr>
    <tr><td>IMO 2050 target</td><td class="hl">⭐⭐⭐⭐ Advanced level</td><td>40% CO₂ intensity by <span class="n-val">2030</span> | Net-zero GHG by <span class="n-val">2050</span> | Carbon levy post-2027 | EU ETS from Jan 2024</td></tr>
    <tr><td>Alternative fuels - Ammonia</td><td class="hl">⭐⭐⭐⭐ IGF Code 2026</td><td>TLV <span class="n-val">25 ppm</span> | Evacuate <span class="n-val">50 ppm</span> | IDLH <span class="n-val">300 ppm</span> | Electrochemical continuous detection | Remote isolation valves</td></tr>
    <tr><td>2024 BDN flashpoint rule</td><td class="hl">⭐⭐⭐⭐⭐ Being asked now</td><td>BDN must state flashpoint if &lt;<span class="n-val">70°C</span> | Pre-bunker declaration Jan 2026 | Min <span class="n-val">60°C</span> | Refuse if absent</td></tr>
    <tr><td>MARPOL sample size</td><td class="hl">⭐⭐⭐⭐ New regulation</td><td><span class="n-val">400 mL</span> → <span class="n-val">600 mL</span> retained MARPOL sample | ISO 2719 closed-cup flashpoint test</td></tr>
  </table>

  </div>
</div>
</div>
`);
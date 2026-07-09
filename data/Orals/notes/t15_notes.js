window.loadNotes("T15", `<div class="view" id="view-notes-t15">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T15')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 15 - Fire Fighting Systems</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">CO2 · Foam · Sprinkler · Water Mist</span>
      <span class="tag tag-purple">Detection · Fire Classes · Clean Agents · 2026 Updates</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-classes')">Fire Classes</button>
    <button class="anc-btn" onclick="jumpTo('s-co2')">CO2 System</button>
    <button class="anc-btn" onclick="jumpTo('s-co2-maint')">CO2 Maintenance</button>
    <button class="anc-btn" onclick="jumpTo('s-foam')">Foam Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-clean-agents')">Clean Agents</button>
    <button class="anc-btn" onclick="jumpTo('s-halon')">Halon History</button>
    <button class="anc-btn" onclick="jumpTo('s-sprinkler')">Sprinkler</button>
    <button class="anc-btn" onclick="jumpTo('s-watermist')">Water Mist</button>
    <button class="anc-btn" onclick="jumpTo('s-detection')">Detection</button>
    <button class="anc-btn" onclick="jumpTo('s-fire-panel')">Fire Alarm Panel</button>
    <button class="anc-btn" onclick="jumpTo('s-testing')">Detector Testing</button>
    <button class="anc-btn" onclick="jumpTo('s-pumps')">Fire Pumps</button>
    <button class="anc-btn" onclick="jumpTo('s-hold-roro')">Hold &amp; RoRo 2026</button>
    <button class="anc-btn" onclick="jumpTo('s-ba-search')">BA Search Procedure</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-classes">🔥 Fire Classes, Tetrahedron &amp; Extinguishers</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask fire classes.</strong> Know galley fire class (F) and why water is NEVER used on it. Know electrical fire rule (CO2, not water). Know why Class D needs special dry powder.</div></div>

  <div class="n-h2">The Fire Triangle vs Fire Tetrahedron</div>
  <p class="n-p">The classical <strong>Fire Triangle</strong> states three simultaneous conditions are needed: Fuel + Heat + Oxygen (minimum ~16%). Modern fire science adds a fourth side - the <strong>free radical chemical chain reaction of combustion</strong> - forming the <strong>Fire Tetrahedron</strong>. Removing any single side extinguishes the fire.</p>

  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title" style="color:var(--red)">🔺 Fire Triangle (Classic)</div>
      <ul class="n-list">
        <li><strong>Fuel</strong> - combustible material</li>
        <li><strong>Heat</strong> - ignition energy</li>
        <li><strong>Oxygen</strong> - minimum ~16% by volume</li>
      </ul>
      <div style="font-size:0.85em;color:var(--red)">Remove one → fire goes out</div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title" style="color:var(--orange)">🔷 Fire Tetrahedron (Modern)</div>
      <ul class="n-list">
        <li><strong>Fuel</strong></li>
        <li><strong>Heat</strong></li>
        <li><strong>Oxygen</strong></li>
        <li><strong>Chain Reaction</strong> - free radical combustion cascade</li>
      </ul>
      <div style="font-size:0.85em;color:var(--orange)">Clean agents break the chain reaction (4th side)</div>
    </div>
  </div>

  <p class="n-p">Gaseous clean agents (Halon, FM-200, Novec 1230) and Dry Chemical Powder (DCP) do <strong>not</strong> rely on cooling or oxygen deprivation. They extinguish by <strong>chain reaction inhibition</strong> - injecting chemical radicals into the flame zone that bind with combustion intermediates and interrupt the cascade at the molecular level. ETOs must understand this to match the correct agent to the specific fire threat.</p>

  <div class="n-h2">Fire Classes &amp; Extinguishing Agents</div>
  <table class="n-table">
    <tr><th>Class</th><th>Fuel Type</th><th>Correct Agent</th><th>NEVER use</th><th>Why not</th></tr>
    <tr><td class="hl"><strong>A</strong></td><td>Solid combustibles (wood, paper, rope, textile)</td><td class="ok">Water, foam</td><td>—</td><td>—</td></tr>
    <tr><td class="hl"><strong>B</strong></td><td>Flammable liquids &amp; oils (fuel oil, petrol)</td><td class="ok">Foam, CO2, DCP</td><td class="bad">Water</td><td>Splashes &amp; spreads burning fuel</td></tr>
    <tr><td class="hl"><strong>C</strong></td><td>Flammable gases (LPG, natural gas, acetylene)</td><td class="ok">DCP - after isolating gas supply</td><td class="bad">Water, foam</td><td>Does not extinguish gas; isolation is primary action</td></tr>
    <tr><td class="hl"><strong>D</strong></td><td>Combustible metals (Mg, Ti, Na, Al powder)</td><td class="ok">Special dry powder ONLY (e.g. Lith-X, Met-L-X)</td><td class="bad">Water</td><td>Violent exothermic reaction → explosion</td></tr>
    <tr><td class="hl"><strong>E</strong></td><td>Energised electrical equipment</td><td class="ok">CO2 (preferred - no residue, non-conductive); DCP acceptable</td><td class="bad">Water, foam</td><td>Electrical conductivity → electrocution</td></tr>
    <tr><td class="hl"><strong>F / K</strong></td><td>Cooking oils &amp; fats at high temperature (deep fryers, galley ranges)</td><td class="ok">Wet chemical only (e.g. Ansul R-102, Amerex B260)</td><td class="bad">Water</td><td>Flash-boils in 300°C oil → violent steam explosion + fireball</td></tr>
  </table>

  <div class="n-h2">Class F (Galley) - Why Wet Chemical Works</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title" style="color:var(--red)">❌ Why Water Fails</div>
      <p class="n-p" style="margin:0">Cooking oil reaches 300–360°C. Water flash-boils instantly (100°C) creating a steam explosion that aerosolises the oil into a flammable mist. The fireball can be catastrophic. This is distinct from Class B where water spreads fuel - here it also causes explosive ejection.</p>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">✅ How Wet Chemical Works</div>
      <p class="n-p" style="margin:0">Potassium-salt solution is sprayed as a fine mist. It reacts with the hot oil via <strong>saponification</strong> (soap-forming reaction) - creating a soapy foam blanket that seals the oil surface from oxygen and simultaneously cools the oil below its ignition temperature (~<span class="n-val">250°C</span>).</p>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>CO2 extinguisher - never hold the metal horn.</strong> CO2 discharges at <span class="n-val">-78°C</span>. Touching the metal horn causes immediate frostbite/cryogenic burn. Always hold by the plastic insulated handle only.</div></div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Fire Classes (ABCDEF):</strong><br>
  <strong>A</strong> = Ash (solids) → Water ✅ | <strong>B</strong> = Barrel (liquids) → Foam/CO2 ✅ | <strong>C</strong> = Carbon gas → DCP + STOP gas ✅<br>
  <strong>D</strong> = Dangerous metal → Special powder ONLY ✅ | <strong>E</strong> = Electrical → CO2 + isolate power ✅ | <strong>F</strong> = Fat (galley) → Wet Chemical ONLY ✅</div></div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-fire-divisions">🏗️ Structural Fire Divisions - A-Class, B-Class, C-Class</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What is an A-60 division?" Know all classes, temperature limits, and where each is used. ETO is responsible for maintaining cable penetration integrity through fire divisions.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Fire divisions are structural bulkheads and decks designed to contain a fire to its compartment of origin</strong> - giving crew time to fight the fire and evacuate. SOLAS classifies them by construction and heat resistance duration.</div></div>

  <table class="n-table">
    <tr><th>Class</th><th>Construction</th><th>Flame/Smoke</th><th>Unexposed Side Temp Rise Limit</th><th>Resistance Time</th><th>Typical Use</th></tr>
    <tr><td class="hl"><strong>A-60</strong></td><td rowspan="4">Steel or equivalent, suitably stiffened. Insulated with approved non-combustible materials.</td><td rowspan="4" class="ok">Prevents flame AND smoke passage for full 1-hour test</td><td rowspan="4">Average: <span class="n-val">≤140°C</span> rise<br>Any single point (incl. joints): <span class="n-val">≤180°C</span> rise</td><td class="ok"><span class="n-val">60 min</span></td><td>Machinery space boundaries, cargo hold separations, key passenger/crew zone boundaries</td></tr>
    <tr><td class="hl"><strong>A-30</strong></td><td class="hl"><span class="n-val">30 min</span></td><td>Stairway enclosures, accommodation/ER boundary</td></tr>
    <tr><td class="hl"><strong>A-15</strong></td><td><span class="n-val">15 min</span></td><td>Less critical boundaries within accommodation areas</td></tr>
    <tr><td class="hl"><strong>A-0</strong></td><td><span class="n-val">0 min</span></td><td>Steel division - structural separation, no insulation specified</td></tr>
    <tr><td class="hl"><strong>B-15</strong></td><td rowspan="2">Non-combustible panels, ceilings, or linings (not necessarily steel).</td><td rowspan="2" class="hl">Prevents flame passage for first <span class="n-val">30 min</span> of test</td><td rowspan="2">Average: <span class="n-val">≤140°C</span> rise<br>Any single point: <span class="n-val">≤225°C</span> rise</td><td class="hl"><span class="n-val">15 min</span></td><td>Corridor walls, cabin partitions, non-critical internal divisions</td></tr>
    <tr><td class="hl"><strong>B-0</strong></td><td><span class="n-val">0 min</span></td><td>Internal non-combustible partitions - no insulation required</td></tr>
    <tr><td class="hl"><strong>C-Class</strong></td><td>Non-combustible materials only</td><td class="bad">No flame or smoke prevention requirement</td><td class="bad">No temperature limit</td><td>N/A</td><td>Non-critical internal furniture-type divisions</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>A = Armour</strong> (steel, toughest). Number = minutes it holds. A-60 is the highest rating - used where fire risk is greatest (machinery spaces). <strong>B = Board/panel</strong> construction, stops flame for 30 min. <strong>C = Compartment</strong> divider only, non-combustible but no fire-resistance claim.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO cable penetration duty:</strong> Every cable or pipe passing through an A-class or B-class division must be fitted with an approved fire-stop seal of equivalent rating. An unsealed or melted cable gland destroys the division rating - this is a class deficiency. Use intumescent cable transits or approved fire-stop putty. ETO inspects and records all penetrations during drydock survey.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-co2">💨 Fixed CO2 Total Flooding System</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask CO2 system procedure.</strong> Know: headcount, two-valve sequence, pre-alarm duration, minimum ER concentration, re-entry conditions, and the CO2-released-but-fans-still-running fault diagnosis.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Displaces O2 below <span class="n-val">15%</span> by volume to starve the fire. Minimum concentration for engine room total flooding: <span class="n-val">34%</span> by volume. Cargo hold minimum: <span class="n-val">30%</span>. CO2 stored as liquid under pressure at approximately <span class="n-val">~57 bar</span> at ambient temperature. Expansion ratio: <span class="n-val">1:450</span> (1 litre liquid → 450 litres gas at atmospheric pressure). Cylinders weighed annually - recharge if weight falls below <span class="n-val">90%</span> of full charge.</div></div>

  <div class="n-h2">CO2 Cylinder Pressure Test Values</div>
  <table class="n-table">
    <tr><th>Section of CO2 System</th><th>Test Pressure</th><th>Method</th></tr>
    <tr><td>Nozzle branch pipes (last section before nozzle)</td><td class="hl"><span class="n-val">7 bar</span></td><td>Air-blow / compressed air test - clear blockage, verify nozzle orifices free</td></tr>
    <tr><td>Master valve → distribution branch manifold</td><td class="hl"><span class="n-val">80 bar</span></td><td>Hydraulic pressure test - checks distribution pipework integrity</td></tr>
    <tr><td>Cylinder bank → master (main) valve</td><td class="hl"><span class="n-val">190 bar</span></td><td>Hydraulic pressure test - high-pressure header section, full cylinder service pressure test</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>CO2 State in Cylinder:</strong> CO2 is stored as a <strong>liquid</strong> in high-pressure cylinders (at ~57 bar, room temperature). Once the main valve opens, it flows as liquid through the master valve and distribution piping, then <strong>flash-evaporates to gas</strong> as it expands through the nozzles into the protected space. The expansion produces intense cold (~−78°C) which is why personnel must vacate - CO2 flooding is also thermally dangerous.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Filling Ratio (Charge Density):</strong> The <strong>filling ratio</strong> = mass of CO2 in kg per litre of cylinder volume. Typical value: <span class="n-val">0.667 kg/L</span> (two-thirds full by mass). This is a regulatory maximum to prevent hydraulic lock - liquid CO2 expands ~450× on vaporisation. Annual cylinder weight check verifies that stored mass has not fallen below <span class="n-val">90%</span> of original certified charge.</div></div>

  <div class="n-h2">CO2 Release Procedure - Two-Valve System (Step-by-Step)</div>
  <ol class="n-steps">
    <li><strong>Headcount</strong> - confirm ALL personnel are out of the protected space. MANDATORY - no exceptions, no shortcuts. Use muster list to verify.</li>
    <li>Close ALL ventilation dampers, skylights, fire dampers, and watertight doors to the space. Stop all mechanical ventilation fans serving the space.</li>
    <li>Shut fuel oil supply valves and any other fuel sources to the protected space.</li>
    <li>Operate the <strong>PILOT VALVE</strong> (small pilot/lock-off valve) - this breaks the mechanical interlock and triggers the <strong>pre-discharge alarm</strong> (<span class="n-val">20–30 seconds</span> audible and visual warning) giving any remaining personnel final time to evacuate.</li>
    <li>Operate the <strong>MAIN VALVE</strong> (master valve) - releases the full CO2 bank into the protected space via the distribution piping and nozzles.</li>
    <li>Keep space sealed for minimum <span class="n-val">24 hours</span> to extinguish all deep-seated hot spots and allow cooling.</li>
    <li>Re-entry only after: full ventilation of space, oxygen measurement confirms <span class="n-val">O2 &gt;20.9%</span> and CO2 <span class="n-val">&lt;0.5%</span>, and wearing SCBA.</li>
  </ol>

  <div class="n-h2">CO2 Released but Fans Did NOT Trip - Fault Diagnosis</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam Q: CO2 was released into the engine room but the ventilation fans did not stop. Why? What is your action?</strong> This is a real exam fault-diagnosis question - know all three root causes.</div></div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;margin:12px 0">
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title" style="color:var(--red)">Cause 1: Door Limit Switch</div>
      <p class="n-p" style="margin:0">The CO2 cabinet door limit switch is stuck closed or has been mechanically bypassed. This switch is wired to trip the fans when the cabinet door is opened for release. If the switch is stuck, the fan-trip signal never energises.</p>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title" style="color:var(--orange)">Cause 2: Shunt-Trip Coil Fault</div>
      <p class="n-p" style="margin:0">The fan motor starters are fitted with shunt-trip (undervoltage trip) coils wired to the CO2 release interlock. If the shunt-trip coil is open-circuit, defective, or its fuse is blown, the starter will not receive the trip signal and the fan continues running.</p>
    </div>
    <div class="n-card" style="border-color:var(--purple)">
      <div class="card-title" style="color:var(--purple)">Cause 3: Wrong Cabinet Opened</div>
      <p class="n-p" style="margin:0">The vessel may have multiple CO2 cabinets (e.g. ER cabinet + cargo hold cabinet). If the operator opened the wrong cabinet, the CO2 went to the wrong zone - the fans for the unintended space did not trip, and the ER is not yet protected.</p>
    </div>
  </div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Immediate Action:</strong> (1) Do not re-enter the space. (2) Manually stop all ER fans using local fan isolators or the MSB fan starters - use remote stop if available. (3) Verify CO2 supply actually discharged into the ER (check pressure gauges, cylinder weights). (4) Identify and correct the root cause fault. (5) Log the incident and report to Master.</div></div>

  <div class="n-h2">CO2 Flooding Concentrations - SOLAS Requirements</div>
  <table class="n-table">
    <tr><th>Protected Space</th><th>Minimum CO2 Concentration</th><th>Design Volume</th></tr>
    <tr><td>Engine room / machinery space</td><td class="hl"><span class="n-val">34%</span> by volume</td><td>Gross volume of protected space</td></tr>
    <tr><td>Cargo holds (general)</td><td class="hl"><span class="n-val">30%</span> by volume</td><td>Gross volume of largest single hold</td></tr>
    <tr><td>Compressor rooms, pump rooms</td><td class="hl"><span class="n-val">40%</span> by volume</td><td>Per space volume</td></tr>
    <tr><td>Paint lockers, gas bottle stores</td><td class="hl"><span class="n-val">40%</span> by volume</td><td>Per compartment volume</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-co2-maint">🔧 CO2 System Maintenance - Bulk LP System</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h2">Bulk Low-Pressure (LP) CO2 System</div>
  <p class="n-p">Certain modern large-scale vessels replace hundreds of individual high-pressure cylinders with a single bulk <strong>Low-Pressure CO2 system</strong>. CO2 is stored as a liquid inside heavily insulated steel pressure vessels maintained at a constant <span class="n-val">−18°C</span> under a working pressure of approximately <span class="n-val">20 bar</span>. The ETO carries specific maintenance ownership:</p>
  <ul class="n-list">
    <li><strong>Refrigeration Plant Logs:</strong> Continuously monitor the redundant refrigeration compressors maintaining the −18°C profile. Verify zero refrigerant leaks or motor contactor faults. If refrigeration fails, internal vessel pressure rises rapidly toward the relief valve setpoint.</li>
    <li><strong>Safety Monitoring Loop:</strong> Validate digital tank liquid level gauge, tank pressure transmitter, and local safety relief valves. Test the low-liquid-level and high-tank-pressure alarms back to the main IAS loop.</li>
    <li><strong>Annual Class Verification:</strong> Test operational line solenoid valves, verify section valves, run full diagnostic on automated pre-discharge evacuation alarms, and log total remaining CO2 quantity in the maintenance record.</li>
  </ul>

  <div class="n-h2">International Shore Coupling (ISC) - SOLAS Specifications</div>
  <p class="n-p">Mandated by <strong>SOLAS Regulation II-2/Reg 10</strong>. All vessels must carry an International Shore Coupling (ISC) on both sides of the deck to allow any shore-side fire brigade or port authority to supply water directly into the ship's fire main anywhere in the world.</p>
  <table class="n-table">
    <tr><th>ISC Parameter</th><th>SOLAS Metric</th></tr>
    <tr><td>Outside Flange Diameter</td><td class="hl"><span class="n-val">178 mm</span></td></tr>
    <tr><td>Inner Diameter (Bore)</td><td class="hl"><span class="n-val">64 mm</span></td></tr>
    <tr><td>Pitch Circle Diameter (PCD)</td><td class="hl"><span class="n-val">132 mm</span></td></tr>
    <tr><td>Flange Bolt Configuration</td><td class="hl"><span class="n-val">4 holes</span></td></tr>
    <tr><td>M16 Bolt Thread Diameter</td><td class="hl"><span class="n-val">16 mm</span></td></tr>
    <tr><td>Minimum Flange Thickness</td><td class="hl"><span class="n-val">14.5 mm</span></td></tr>
    <tr><td>Rated Safe Working Pressure</td><td class="hl"><span class="n-val">10.5 kg/cm² (~10.3 bar)</span></td></tr>
  </table>
  <p class="n-p">The coupling assembly must be stored alongside 4 matching washers, 4 nuts, a gasket sheet, and an approved blank flange to seal the lines when out of service. Flange must be steel or equivalent spark-resistant metal.</p>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-foam">🧯 Fixed Foam Systems</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <table class="n-table">
    <tr><th>Type</th><th>Expansion Ratio</th><th>Characteristics</th><th>Use</th></tr>
    <tr><td><strong>Low expansion foam</strong></td><td class="hl">Up to <span class="n-val">20:1</span></td><td>Dense, wet, heavy - flows across liquid surface, smothers and cools simultaneously</td><td class="ok">Tanker deck monitors, pump rooms - Class B fires</td></tr>
    <tr><td><strong>Medium expansion foam</strong></td><td class="hl"><span class="n-val">20:1 to 200:1</span></td><td>Intermediate - used in some machinery space systems</td><td>Machinery spaces, enclosed areas where some flow is needed</td></tr>
    <tr><td><strong>High expansion foam</strong></td><td class="hl"><span class="n-val">200:1 to 1000:1</span></td><td>Light, voluminous, dry - rapidly floods enclosed spaces by displacing oxygen</td><td class="ok">RoRo vehicle decks, large cargo holds, engine rooms</td></tr>
  </table>

  <div class="n-h2">How Foam Extinguishes Fire - Triple Action</div>
  <ol class="n-steps">
    <li><strong>Smothering (Sealing):</strong> Foam blanket covers the liquid fuel surface and seals it from atmospheric oxygen, cutting the fuel-oxygen contact.</li>
    <li><strong>Cooling:</strong> Water content of the foam cools the fuel surface below its fire point temperature, reducing vapour generation.</li>
    <li><strong>Vapour Suppression:</strong> Foam blanket prevents flammable vapour from reaching the flame zone above the liquid surface.</li>
  </ol>

  <div class="n-h2">AFFF Proportioner - How It Works</div>
  <p class="n-p">The <strong>Aqueous Film-Forming Foam (AFFF)</strong> system uses a <strong>proportioner</strong> to inject the correct ratio of foam concentrate into the water stream. The standard mixing ratio is <span class="n-val">3%</span> (3 parts concentrate to 97 parts water) or <span class="n-val">6%</span> depending on the system design. The proportioner operates on the <strong>venturi induction principle</strong> - water flow through a restriction creates a pressure differential that draws foam concentrate into the stream at the correct ratio without an external pump. Some modern systems use a pressure-balancing type proportioner with a direct-ratio injection pump.</p>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>2026 PFOS Ban:</strong> Firefighting foam containing PFOS (Perfluorooctane Sulfonate) is prohibited on ships. All existing AFFF stocks must be replaced with PFOS-free alternatives - C6 AFFF or fluorine-free foam (FFF) - before the first survey after <span class="n-val">January 2026</span>. ETOs must verify current foam inventory is compliant and procure certified PFOS-free replacement before the survey deadline. Failure = PSC deficiency.</div></div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-clean-agents">🧪 Clean Agent &amp; Inert Gas Suppression Systems</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What replaces CO2 in occupied spaces like ECR or server rooms?" Know FM-200, Novec 1230, and IG-541 by name and mechanism.</strong></div></div>

  <div class="n-h2">Why CO2 Cannot Be Used in Occupied Spaces</div>
  <p class="n-p">CO2 is immediately life-threatening in the concentrations required for fire suppression (34% ER, 40% paint locker). At these levels, a person loses consciousness within seconds and dies within minutes. CO2 is therefore a <strong>total flooding agent for evacuated spaces only</strong>. For normally occupied or frequently entered spaces such as the ECR, navigation bridge, server rooms, and paint lockers with frequent access, alternative clean agents or inert gas systems must be used.</p>

  <div class="n-h2">Halocarbon Clean Agents (Chemical Suppression)</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">FM-200 (HFC-227ea)</div>
      <ul class="n-list">
        <li><strong>Chemical name:</strong> Heptafluoropropane (C3HF7)</li>
        <li><strong>Design concentration:</strong> <span class="n-val">7–8%</span> by volume</li>
        <li><strong>Mechanism:</strong> Primarily chemical chain reaction inhibition + minor heat absorption. Disrupts free radicals in flame zone.</li>
        <li><strong>Safe for personnel:</strong> Yes, at design concentrations (NOAEL 9%, LOAEL 10.5%)</li>
        <li><strong>Stored as:</strong> Liquefied gas under nitrogen pressure</li>
        <li><strong>ODP / GWP:</strong> Zero ODP (no ozone damage), GWP = 3500 (high - phase-down under Kigali)</li>
        <li><strong>Where used:</strong> ECR, server rooms, switchboard rooms, UPS rooms on modern vessels</li>
        <li><strong>Residue:</strong> Zero - leaves no residue on electrical/electronic equipment</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--cyan)">
      <div class="card-title" style="color:var(--cyan)">Novec 1230 (FK-5-1-12)</div>
      <ul class="n-list">
        <li><strong>Chemical name:</strong> Dodecafluoro-2-methylpentan-3-one (C6F12O)</li>
        <li><strong>Design concentration:</strong> <span class="n-val">4–6%</span> by volume</li>
        <li><strong>Mechanism:</strong> Primarily physical heat absorption (very high specific heat) + secondary chain reaction inhibition</li>
        <li><strong>Safe for personnel:</strong> Yes - NOAEL &gt;10%, lowest toxicity of all clean agents</li>
        <li><strong>Stored as:</strong> Liquid at atmospheric pressure (boiling point 49°C)</li>
        <li><strong>ODP / GWP:</strong> Zero ODP, GWP = 1 (extremely low - environmentally preferred)</li>
        <li><strong>Where used:</strong> Paint lockers, gas cylinder stores, ECR on new builds - preferred replacement for Halon and FM-200 on modern tonnage</li>
        <li><strong>Residue:</strong> Zero - completely vaporises</li>
      </ul>
    </div>
  </div>

  <div class="n-h2">Inert Gas (IG) Clean Agent Systems</div>
  <p class="n-p">Inert gas systems suppress fire by reducing the oxygen concentration in the protected space below the minimum needed for sustained combustion (typically below <span class="n-val">12–15%</span> O2). They do NOT chemically inhibit the chain reaction - they work purely by oxygen dilution, similar in principle to CO2 but using gases safe for brief human exposure at design concentrations.</p>

  <table class="n-table">
    <tr><th>System Name</th><th>Composition</th><th>Design O2 Level</th><th>Safe for People?</th><th>Use Case</th></tr>
    <tr><td><strong>IG-541 (Inergen)</strong></td><td class="hl"><span class="n-val">52% N2 + 40% Ar + 8% CO2</span></td><td class="hl">Reduce to <span class="n-val">12.5%</span> O2</td><td class="ok">Yes - brief exposure. CO2 component stimulates breathing to compensate for reduced O2. NOAEL defined.</td><td>Archives, server rooms, control rooms, occupied spaces</td></tr>
    <tr><td><strong>IG-100 (Nitrogen)</strong></td><td class="hl"><span class="n-val">100% N2</span></td><td class="hl">Reduce to <span class="n-val">12–15%</span> O2</td><td>Yes briefly, but lacks CO2 breathing stimulant - quicker impairment than IG-541</td><td>Unoccupied enclosed spaces, food storage, archival rooms</td></tr>
    <tr><td><strong>IG-55 (Argonite)</strong></td><td class="hl"><span class="n-val">50% N2 + 50% Ar</span></td><td class="hl">Reduce to <span class="n-val">12.5%</span> O2</td><td class="ok">Yes briefly - similar to IG-541 without CO2 component</td><td>Occupied spaces where Inergen not available; European preference</td></tr>
    <tr><td><strong>CO2 (Reference)</strong></td><td class="hl"><span class="n-val">100% CO2</span></td><td class="hl">Flood to <span class="n-val">34%+</span> CO2</td><td class="bad">NO - immediately life-threatening at suppression concentration</td><td>Engine rooms, cargo holds - EVACUATED spaces only</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why IG-541 (Inergen) works for occupied spaces:</strong> At its design concentration, the space O2 drops to ~12.5% - below the 15% combustion threshold. The added 8% CO2 component acts as a breathing stimulant, increasing the body's drive to breathe deeper and faster to compensate for the reduced oxygen, extending the time a person remains conscious and capable of self-evacuation. At 12.5% O2 with CO2 stimulation, a person has approximately 2–3 minutes of useful consciousness - enough to exit via a pre-planned evacuation route.</div></div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">✅ Clean Agent Advantages over CO2</div>
      <ul class="n-list">
        <li>Safe in occupied spaces (personnel can escape during discharge)</li>
        <li>Zero residue - no cleaning of electronic equipment after discharge</li>
        <li>Zero ozone depletion (unlike old Halon)</li>
        <li>Suppresses fire at much lower concentrations</li>
        <li>No risk of thermal shock (no −78°C discharge)</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title" style="color:var(--red)">❌ Clean Agent Disadvantages vs CO2</div>
      <ul class="n-list">
        <li>Significantly higher cost per kg of agent</li>
        <li>Heavier/larger cylinder banks for same protection volume</li>
        <li>Some HFC agents have high GWP - subject to future phase-down</li>
        <li>System must be tightly sealed space - leaky spaces lose concentration before fire is out</li>
        <li>Not suitable for Class D (metal fires) or deep-seated Class A</li>
      </ul>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-halon">🚫 Halon - History &amp; Phase-Out</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What Was Halon?</strong> Halon (bromochlorodifluoromethane - Halon 1211 portable; bromotrifluoromethane - Halon 1301 fixed total flooding) was the most effective fire suppression agent ever developed. At only <span class="n-val">5% concentration</span>, Halon 1301 extinguished fires via extremely powerful chain reaction inhibition - the bromine and chlorine radicals catalytically broke the combustion chain. It was safe for personnel and left zero residue.</div></div>

  <div class="n-h2">Why Halon Was Banned - Montreal Protocol</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title" style="color:var(--red)">🌍 Ozone Depletion Problem</div>
      <p class="n-p" style="margin:0">Halons contain bromine and chlorine atoms that, once released into the atmosphere, migrate to the stratosphere and catalytically destroy ozone molecules (O3). <strong>Halon 1301 has an Ozone Depletion Potential (ODP) of 10</strong> - meaning per kilogram, it destroys 10× more ozone than CFC-11 (the reference substance). Each bromine atom can destroy tens of thousands of ozone molecules before being deactivated.</p>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title" style="color:var(--orange)">📜 Montreal Protocol (1987)</div>
      <p class="n-p" style="margin:0">The <strong>Montreal Protocol on Substances that Deplete the Ozone Layer</strong>, adopted 16 September 1987, mandated the global phase-out of halons. New production banned from <strong>1994</strong> in developed countries. IMO followed by prohibiting installation of Halon systems on new ships. Existing Halon systems were grandfathered until decommissioning. Vessels must not vent halon to atmosphere - bank and reclaim only.</p>
    </div>
  </div>

  <p class="n-p">Today, Halon has been replaced by: FM-200 and Novec 1230 (chemical inhibition, occupied spaces), IG-541/Inergen (inert gas dilution, occupied spaces), and High-Pressure Water Mist (physical cooling + O2 displacement, engine rooms). CO2 remains the dominant fixed flooding agent for unoccupied cargo and machinery spaces.</p>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-sprinkler">🚿 Automatic Sprinkler System</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Automatic local discharge using heat-sensitive glass bulbs filled with coloured glycerine liquid. When ambient temperature reaches the bulb's rated value, the glycerine thermally expands, shatters the glass bulb, and releases the deflector plug - water from the pressurised pipe main discharges in a specific spray pattern. Each sprinkler head activates <em>individually</em> at its own rated temperature - only heads directly above the fire zone activate, minimising water damage elsewhere.</div></div>

  <table class="n-table">
    <tr><th>Bulb Colour</th><th>Temperature Rating</th><th>Standard Use</th></tr>
    <tr><td style="background:#ff000040">Red</td><td class="hl"><span class="n-val">68°C</span></td><td class="ok">Standard - accommodation, cabins, corridors, offices</td></tr>
    <tr><td style="background:#ffff0040">Yellow</td><td class="hl"><span class="n-val">79°C</span></td><td>Slightly warmer areas, laundry vicinity</td></tr>
    <tr><td style="background:#00800040">Green</td><td class="hl"><span class="n-val">93°C</span></td><td>Warm service spaces, galley vicinity (not directly over cooking)</td></tr>
    <tr><td style="background:#0000ff40">Blue</td><td class="hl"><span class="n-val">141°C</span></td><td>High-temperature spaces - near boilers, engine casing tops</td></tr>
    <tr><td style="background:#80000040">Mauve/Purple</td><td class="hl"><span class="n-val">182°C</span></td><td>Extreme environments - sauna, steam rooms (rare on cargo vessels)</td></tr>
  </table>

  <div class="n-h2">Drencher vs Sprinkler - Key Difference</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">💧 Sprinkler (Closed Head)</div>
      <ul class="n-list">
        <li>Each head sealed by a quartzoid heat-sensitive bulb</li>
        <li>Activates <strong>individually</strong> only at its own rated temperature</li>
        <li>Automatic - no manual intervention needed</li>
        <li>Used in: accommodation, passenger areas, enclosed spaces</li>
        <li>Water is applied only in the fire zone - minimal collateral water damage</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--cyan)">
      <div class="card-title" style="color:var(--cyan)">🌊 Drencher (Open Head)</div>
      <ul class="n-list">
        <li>Heads have <strong>no heat-sensitive element</strong> - always open</li>
        <li>Entire zone operates simultaneously when zone valve is opened</li>
        <li>Manually or automatically triggered via zone valve</li>
        <li>Used for: boundaries between fire zones, curtain walls, Ro-Ro ramps, bulkhead cooling on tankers</li>
        <li>Creates a water curtain to prevent fire spread, not to extinguish</li>
      </ul>
    </div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BLIS (Stop Valve Tamper Alarm / Sprinkler Valve Supervision):</strong> The main sprinkler zone stop valve is fitted with a flow/tamper switch (BLIS). If the stop valve is accidentally closed - which would leave the zone without protection - the tamper switch detects the valve closed position and triggers a <strong>supervisory fault alarm</strong> at the main fire panel. Testing: open the end-of-line test cock at the far end of the zone → paddle flow detector triggers → zone flow alarm activates on panel.</div></div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-watermist">💦 High-Pressure Water Mist System (Hi-Fog / Hyper Mist)</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle:</strong> Water discharged at very high pressure (<span class="n-val">70–200 bar</span>) through specially designed fine-orifice nozzles. This atomises the water into extremely fine droplets (<span class="n-val">50–200 µm</span> diameter - typically &lt;200 µm for "mist" classification). The system extinguishes by two simultaneous mechanisms working together.</div></div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">🌡️ Mechanism 1: Heat Absorption</div>
      <p class="n-p" style="margin:0">The extremely fine droplets have a very large total surface area per unit volume. They vaporise (flash-evaporate) almost instantaneously in the heat zone, absorbing massive amounts of heat energy via the <strong>latent heat of vaporisation</strong> (2257 kJ/kg for water). This rapid heat absorption cools the fire and surrounding surfaces below ignition temperature.</p>
    </div>
    <div class="n-card" style="border-color:var(--cyan)">
      <div class="card-title" style="color:var(--cyan)">💨 Mechanism 2: Oxygen Displacement</div>
      <p class="n-p" style="margin:0">When water vapourises, it expands in volume by a factor of approximately <span class="n-val">1700×</span>. This steam volume expansion locally displaces oxygen in the immediate fire zone. In an enclosed space, the steam blanket reduces the available O2 concentration below the ~15% threshold needed for sustained combustion.</p>
    </div>
  </div>

  <div class="n-h2">Water Mist vs CO2 - Why Water Mist for Manned Spaces</div>
  <table class="n-table">
    <tr><th>Feature</th><th>CO2 Total Flooding</th><th>Water Mist (Hi-Fog)</th></tr>
    <tr><td>Safety in manned space</td><td class="bad">Immediately life-threatening (asphyxiation)</td><td class="ok">Safe - water vapour, no oxygen depletion to dangerous level</td></tr>
    <tr><td>Equipment damage</td><td class="ok">Zero residue - safe for electronics if dry</td><td class="bad">Possible moisture damage on electronics if not properly positioned</td></tr>
    <tr><td>Effective on Class A fires</td><td>Limited (deep-seated)</td><td class="ok">Yes - high cooling penetrates deep into solid fuel</td></tr>
    <tr><td>Effective on Class B fires</td><td class="ok">Yes</td><td class="ok">Yes - suppresses flammable liquid vapour</td></tr>
    <tr><td>Effective on Class F fires</td><td>Not recommended</td><td class="ok">Yes - rapid oil cooling without steam explosion (droplet size prevents it)</td></tr>
    <tr><td>Water consumption</td><td>Zero water</td><td class="ok">Very low - ~90% less water than a conventional sprinkler for same suppression</td></tr>
  </table>
  <p class="n-p">Water mist is increasingly used in <strong>engine rooms, machinery spaces, and galleys</strong> as a SOLAS-accepted alternative to CO2 total flooding. The key advantage is that operations crew do not need to evacuate the space before activation.</p>

  <div class="n-h2">Testing the Water-Mist System</div>
  <ol class="n-steps">
    <li>Inform bridge / ECR; flag it as a test so a release is not treated as a real fire.</li>
    <li><strong>Pump auto-start test:</strong> bleed the system pressure down - the jockey / main high-pressure pump must auto-start on the pressure-drop switch and restore pressure.</li>
    <li><strong>Section valve test:</strong> operate each zone / section valve and confirm the correct zone indication and flow.</li>
    <li>Verify the low-pressure and running alarms at the fire panel, and the pump-running indication.</li>
    <li>Check the nozzle heads are clean and unobstructed; restore standby pressure and reset.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-detection">🔍 Fire Detection - Types &amp; Working Principles</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <table class="n-table">
    <tr><th>Detector Type</th><th>Working Principle</th><th>Best Application</th><th>Not Suitable For</th></tr>
    <tr><td><strong>Ionisation Smoke</strong></td><td>Americium-241 alpha source ionises air in dual chamber. Smoke particles reduce ion current → alarm. Half-life: <span class="n-val">432 years</span>.</td><td class="ok">Fast flaming fires with small combustion particles (hydrocarbon, electrical)</td><td>Dusty environments (false alarms)</td></tr>
    <tr><td><strong>Photoelectric / Optical Smoke</strong></td><td>LED + photodetector. Smoke scatters light onto sensor (Tyndall effect) → alarm. No radioactive source.</td><td class="ok">Slow smouldering fires, accommodation areas. Fewer steam/dust false alarms.</td><td>Very clean-burning hydrocarbon fires (near-invisible combustion products)</td></tr>
    <tr><td><strong>Fixed Temperature Heat</strong></td><td>Bimetallic strip (differential expansion) or fusible link triggers at preset threshold. Common setpoints: <span class="n-val">58°C, 72°C, 93°C</span></td><td>High ambient temperature areas (laundries, galleys, machinery spaces)</td><td>Slow-developing fires where temperature rise is gradual</td></tr>
    <tr><td><strong>Rate-of-Rise (ROR)</strong></td><td>Triggers when temperature rises faster than <span class="n-val">8–10°C per minute</span> regardless of absolute value. Ignores slow ambient changes.</td><td class="ok">Earliest warning for fast-developing fires (fuel oil fire in bilge, electrical fire)</td><td>Spaces with normal rapid temperature swings (boiler fronts)</td></tr>
    <tr><td><strong>UV/IR Flame Detector</strong></td><td>UV version detects UV photons directly from flame (290–310 nm). IR version detects modulated infrared from flickering flame. Response time: <strong>milliseconds</strong>.</td><td class="ok">Engine room bilges, boiler fronts, gas turbine spaces - detects open flame directly</td><td>Areas with other UV/IR sources (sunlight, welding arcs)</td></tr>
    <tr><td><strong>Combined (Multi-Sensor)</strong></td><td>Smoke + heat in one head. SOLAS 2026 mandates for Ro-Ro vehicle spaces.</td><td class="ok">Ro-Ro vehicle decks - catches smouldering wiring (smoke first) and rapid fuel fire (heat first)</td><td>—</td></tr>
    <tr><td><strong>Linear Heat Cable</strong></td><td>Bi-metallic cable whose resistance changes with temperature at any point along its length. Heat at any point triggers alarm at specific distance (location readout).</td><td class="ok">Cable runs, conveyor belts, Ro-Ro vehicle deck deckheads - continuous coverage over large areas</td><td>—</td></tr>
  </table>

  <div class="n-h2">Aspirating Smoke Detectors (VESDA Arrays)</div>
  <p class="n-p">For high-risk critical spaces requiring ultra-early warning (computer server spaces, cargo control rooms, navigation bridge electronics), vessels implement an active <strong>Very Early Smoke Detection Apparatus (VESDA)</strong>. An internal fan aspirator continuously draws air samples through a network of deckhead sampling pipes back into a central sensing chamber. The sample passes across an intense laser light source and photodetector array capable of measuring microscopic obscuration levels - detecting smoke before it is visible to the human eye.</p>
  <p class="n-p"><strong>Testing &amp; Maintenance:</strong> ETOs must inject certified test aerosol directly into a sampling hole along the pipe run and verify the correct zone triggers at the bridge within seconds. This confirms lines are free from soot blockages and drawing suction cleanly. Air filters and suction fans must be cleaned per the PMS schedule to prevent false fault alarms.</p>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>NEVER test a UV flame detector with a naked flame or lighter.</strong> Use only the calibrated UV test lamp supplied by the manufacturer. Naked flame in the engine room = real fire risk, permanent detector damage, and a serious safety violation.</div></div>

  <div class="n-h2">Zener Diode Loop Supervision Circuit</div>
  <p class="n-p">Fire alarm detector loops are supervised by Zener diode potential divider networks. In standby, the Zener diode is <strong>reverse-biased</strong>, passing a tiny constant monitoring current confirming structural loop health. When a detector activates, it shunts the loop, shifting the voltage across a <strong>PNP transistor</strong> base into saturation - completing the relay energisation circuit. This provides three-state monitoring: Standby (healthy), Alarm, and Fault (open circuit or short).</p>

  <div class="n-h2">Condensation Drain Box (Moisture Trap)</div>
  <p class="n-p">On tube-type sampling lines and accommodation zones with large thermal differentials, moisture condensation forms inside pipe runs. A <strong>Universal Drain Box</strong> is fitted at the lowest physical point. If unmaintained, accumulated water bridges detector pins causing intermittent false fire alarms, wire corrosion, or PCB failures. ETOs must drain these traps during weekly safety rounds and replace built-in felt absorbent filters periodically.</p>

  <div class="n-h2">Fire Panel Electrical Fault Isolation Logic</div>
  <ul class="n-list">
    <li><strong>Open Circuit (OC Fault):</strong> Severed wire or disconnected sensor drops loop current to zero → <strong>Yellow/Amber LED Fault alarm</strong> on panel. Zone has lost coverage, requires repair.</li>
    <li><strong>Partial Shunt (Moisture Ingress):</strong> Saltwater or condensation in a junction box can mimic an active alarm current → false fire alarm or amber line fault code on that address zone.</li>
    <li><strong>Short Circuit:</strong> Detected as a high-current state by the panel's monitoring circuit → Fault alarm. Distinct from fire alarm state.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-fire-panel">🖥️ Fire Alarm Panel - Zone Wiring, EOL &amp; Self-Test</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "How does the fire panel distinguish a genuine alarm from a broken wire?" Know the EOL resistor concept and the three panel states.</strong></div></div>

  <div class="n-h2">Zone Loop Wiring &amp; End-of-Line (EOL) Resistor</div>
  <p class="n-p">The fire alarm panel monitors each detector zone loop using a supervised wiring arrangement with an <strong>End-of-Line (EOL) resistor</strong> at the farthest detector from the panel. The EOL resistor creates a defined reference current level that the panel monitors continuously. This enables three distinct electrical states:</p>

  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;margin:12px 0">
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">State 1 - NORMAL / STANDBY</div>
      <p class="n-p" style="margin:0">Panel reads the reference current defined by the EOL resistor. All detectors are intact. Green LED on panel. No alarms.</p>
      <p class="n-p" style="margin:0;font-size:0.9em">Loop current: <strong>reference level</strong> (e.g. 10–15 mA)</p>
    </div>
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title" style="color:var(--red)">State 2 - ALARM</div>
      <p class="n-p" style="margin:0">A detector activates - short-circuits the loop line (for conventional detectors) or sends a digital address signal (for addressable systems). Current rises significantly above reference. Red LED + audible alarm.</p>
      <p class="n-p" style="margin:0;font-size:0.9em">Loop current: <strong>high (alarm) level</strong></p>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title" style="color:var(--orange)">State 3 - FAULT</div>
      <p class="n-p" style="margin:0">A wire breaks or a detector head is removed → open circuit. Current drops to zero (below EOL reference). Yellow/Amber LED + fault buzzer. Zone shows as FAULT - not a fire, but coverage is lost.</p>
      <p class="n-p" style="margin:0;font-size:0.9em">Loop current: <strong>zero (open circuit)</strong></p>
    </div>
  </div>

  <div class="n-h2">Addressable vs Conventional Panel</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:12px;margin:12px 0">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">Conventional Panel (Zone-Based)</div>
      <ul class="n-list">
        <li>Each zone = group of detectors on one wire pair</li>
        <li>Fire alarm shows zone number only - cannot identify exact detector</li>
        <li>All detectors in a zone are in parallel on the loop</li>
        <li>EOL resistor at end of each zone loop</li>
        <li>Cheaper, simpler, standard on older cargo vessels</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--purple)">
      <div class="card-title" style="color:var(--purple)">Addressable Panel (Point-Identified)</div>
      <ul class="n-list">
        <li>Each detector has a unique digital address on the loop</li>
        <li>Exact detector location identified on mimic panel</li>
        <li>Two-wire loop (Class A loop = fault-tolerant ring)</li>
        <li>Polling: panel interrogates each detector every few seconds</li>
        <li>Can read analogue values (smoke density %) not just on/off state</li>
        <li>Mandatory on passenger vessels; increasingly standard on cargo</li>
      </ul>
    </div>
  </div>

  <div class="n-h2">Fire Panel Self-Test Procedure (ETO Weekly Check)</div>
  <ol class="n-steps">
    <li>Inform bridge and officer of the watch that fire panel test is about to commence. Confirm no real fire conditions exist.</li>
    <li>Put panel into <strong>TEST mode</strong> (prevents external CO2 or suppression system triggers during test).</li>
    <li>Test each zone loop by activating a test point or using the panel's built-in loop test function. Verify ALARM state registers correctly on the panel mimic.</li>
    <li>Simulate an <strong>open circuit fault</strong> by disconnecting a zone terminal - verify panel registers FAULT (amber) on that zone.</li>
    <li>Test fire alarm sounders in all zones - verify correct zones activate per the fire detection plan.</li>
    <li>Test interconnected functions - confirm fan trips, damper closures, and any CO2 pre-alarm outputs activate correctly.</li>
    <li>Restore all connections. Return panel to NORMAL mode. Verify all LEDs return to green standby.</li>
    <li>Log test in fire-fighting equipment maintenance record. Sign off with Master or Chief Engineer.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-testing">🧪 Fire Detector Testing Procedures</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL: Surveyors ask specifically how to test UV and Heat detectors. The correct tool for each type is mandatory knowledge. NEVER use a naked flame or cigarette lighter to test any detector.</strong></div></div>

  <div class="n-h2">UV Flame Detector Testing</div>
  <ol class="n-steps">
    <li>Inform bridge / CCR - put fire panel in <strong>TEST mode</strong> to prevent false alarms triggering CO2 or other suppression systems.</li>
    <li>Use a <strong>CALIBRATED UV TEST LAMP</strong> (supplied by manufacturer - specific UV wavelength 290–310 nm). DO NOT use a naked flame, cigarette lighter, or any open flame source (creates real fire risk in engine room, especially in bilge areas with oil vapour).</li>
    <li>Clean the detector window with dry cloth - oil film or salt deposit blocks UV transmission and gives a false "fail" result.</li>
    <li>Hold the test lamp at the prescribed distance (typically <span class="n-val">150–300 mm</span>) directed at the detector window.</li>
    <li>Verify alarm activates on panel within the specified response time (typically &lt;3 seconds).</li>
    <li>Reset detector and panel. Log test with date, result, and signature.</li>
  </ol>

  <div class="n-h2">Heat Detector Testing</div>
  <ol class="n-steps">
    <li>Inform bridge / CCR - put fire panel in TEST mode.</li>
    <li>Use an <strong>APPROVED HEAT GUN</strong> (calibrated hot air blower - typically 100–200°C range). DO NOT use a hair dryer (may melt or contaminate the detector element) or a naked flame.</li>
    <li>For <strong>Fixed Temperature detector</strong>: Apply heat slowly and steadily. Alarm should activate when detector body reaches within ±10% of rated setpoint temperature. For a 72°C detector, alarm should trigger between 65–79°C.</li>
    <li>For <strong>Rate-of-Rise (ROR) detector</strong>: Apply heat rapidly (goal: raise ambient 8–10°C/min). Alarm should trigger within <span class="n-val">10–15 seconds</span> of rapid heating, well before absolute temperature threshold is reached.</li>
    <li>Verify alarm at panel. Reset. Log test.</li>
  </ol>

  <div class="n-h2">Smoke Detector Testing</div>
  <ol class="n-steps">
    <li>Inform bridge / CCR - put panel in TEST mode.</li>
    <li>Use an approved <strong>smoke pencil (aerosol test spray)</strong> or the manufacturer's test gas. Do NOT use actual smoke, cigarette smoke, or spray lubricants.</li>
    <li>Ionisation type: direct spray into detector chamber. Optical type: spray from the side (particles must enter the chamber and scatter light).</li>
    <li>Verify alarm within response time. Reset. Visually inspect chamber for contamination - ionisation detectors must be kept clean of dust, oil vapour, and salt deposits.</li>
  </ol>

  <div class="n-h2">Magnetic Test for Manual Call Point (Break-Glass)</div>
  <p class="n-p">Manual call points (break-glass stations) can be tested using a <strong>test magnet</strong> - a strong permanent magnet held against the unit actuates a magnetically-operated reed switch inside, simulating a break-glass activation without actually breaking the glass element. The panel registers an alarm from that addressable point. After test: insert a reset key and restore normal state. This allows regular testing without consuming glass inserts.</p>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pumps">💧 Fire Pumps - SOLAS Requirements</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <table class="n-table">
    <tr><th>Pump Type</th><th>Location</th><th>Power Source</th><th>SOLAS Delivery Requirement</th></tr>
    <tr><td><strong>Main fire pump</strong></td><td>Engine room</td><td>Main switchboard</td><td>Sufficient pressure at all fire main hydrants simultaneously with two jets</td></tr>
    <tr><td><strong>Emergency fire pump</strong></td><td class="hl">OUTSIDE main machinery space (forepeak, forward compartment, or dedicated space above waterline)</td><td class="hl">Independent - self-contained diesel engine OR emergency switchboard (emergency generator)</td><td class="hl">Minimum <span class="n-val">0.3 MPa (3 bar)</span> at nozzle while supplying <strong>two simultaneous jets</strong></td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why Emergency Pump is Outside the ER:</strong> If the engine room fire requires CO2 flooding or renders the ER inaccessible, the main fire pump inside the ER cannot be used. The emergency pump - outside the ER with its own independent power - ensures fire-fighting water supply remains available during the very scenario where it is most needed.</div></div>

  <div class="n-h2">Bilge Pump Interchangeability</div>
  <p class="n-p">SOLAS requires that certain pumps serving other machinery space functions (such as general service pumps, bilge pumps, or ballast pumps) must also be capable of delivering water to the fire main in an emergency. This is achieved through a <strong>cross-connection valve</strong> on the fire main. Conditions: the pump must be capable of delivering at least the required fire-main pressure and flow, and a connection with a non-return valve must exist between the pump and the fire main. This provides system redundancy without requiring a dedicated fourth pump.</p>

  <div class="n-h2">SOLAS International Shore Coupling (ISC) Specifications</div>
  <p class="n-p">Mandated by <strong>SOLAS Regulation II-2/Reg 10</strong> - see detailed table in CO2 Maintenance section above.</p>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-hold-roro">📦 Cargo Hold Fires &amp; 2026 Ro-Ro Overhaul</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Effective 2026, surveyors screen container loss containment strategies and new statutory vehicle deck rules. Know all three 2026 Ro-Ro requirements.</strong></div></div>

  <div class="n-h2">Container Fire in a Cargo Hold - ETO Emergency Scope</div>
  <ol class="n-steps">
    <li><strong>Oxygen Deprivation (Starvation):</strong> Instantly close all cargo hold ventilation dampers, flaps, trunking paths, and stop all extraction fans. Dog down weathertight hatch covers to seal the space and choke off oxygen entry.</li>
    <li><strong>Prevent Backdraft:</strong> <strong class="bad">NEVER open a hatch cover to inspect fire progress.</strong> Introducing oxygen into a semi-suffocated container fire causes immediate explosive re-ignition (backdraft). Fire progress tracked exclusively via remote temperature sensors and bulkhead thermal imaging.</li>
    <li><strong>Fixed Suppression Activation:</strong> Once hold is certified sealed and clear of crew, activate the CO2 total flooding system bank. Keep hold sealed for minimum <span class="n-val">24 hours</span> to extinguish deep-seated hot spots.</li>
    <li><strong>ETO Core Safeguards:</strong> Verify emergency generator takes load cleanly on ESB. Monitor main fire panel for spread to adjacent bulkheads. Maintain GMDSS communications and ensure PA system remains operational throughout.</li>
  </ol>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why Water is Forbidden in Sealed Cargo Holds:</strong> (1) Water dilutes the existing CO2 gas blanket, reducing its effectiveness. (2) Unknown container cargo may be IMDG Class 4.3 water-reactive substances - violent exothermic reactions or explosive gas releases. (3) Massive water accumulation creates a <strong>free surface effect</strong> that destroys vessel stability and can capsize the ship. CO2 starvation protocol is the only approved method.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Piercing (penetrating) applicator:</strong> a hardened spike-tipped lance / nozzle used to fight a fire <em>inside</em> a shipping container without opening it. The tip is driven through the container wall or door, then water fog (or CO2 / foam) is injected through the applicator straight into the seat of the fire. This attacks the fire while keeping oxygen ingress minimal - no need to open the door. Part of the container-ship / cargo-hold firefighting outfit.</div></div>

  <div class="n-h2">Mandatory 2026 Ro-Ro Passenger Ship Safety Overhaul (SOLAS II-2/20)</div>
  <p class="n-p">SOLAS Chapter II-2 Regulation 20 and FSS Code updates enter full global enforcement on <span class="n-val">1 January 2026</span>. New builds and retrofit ships must deploy three electronic safety architectures:</p>
  <ul class="n-list">
    <li><strong>Multi-Sensor Combined Detection:</strong> Vehicle spaces can no longer rely on smoke detectors alone. Must be fitted with <strong>combined smoke AND heat point detectors</strong>, or continuous <strong>linear heat-sensing cables</strong> across the deckhead. Smouldering vehicle wiring emits smoke first; rapid fuel fires emit heat first - combined sensors catch both.</li>
    <li><strong>Continuous Video Monitoring with 24-Hour Playback:</strong> All vehicle spaces must carry continuous CCTV coverage linked directly to bridge and ECR. System must possess night-vision or thermal capability and maintain a mandatory <span class="n-val">24-hour unalterable playback loop</span> to assist post-casualty investigations and regulatory review.</li>
    <li><strong>Weather Deck Water Monitors:</strong> Open weather vehicle decks on Ro-Ro passenger vessels must carry fixed high-capacity water-based fire-extinguishing monitors (water cannons). Remotely operated from safety centres to suppress deck fires without exposing crew to active heat paths. ETO tests monitor rotation, elevation mechanisms, and system pressures quarterly.</li>
  </ul>

  <div class="n-h2">Galley CO2 Fixed Fire Fighting System</div>
  <p class="n-p">The galley range/exhaust duct CO2 system is a dedicated small fixed installation separate from the main engine room CO2 bank. It protects the galley cooking range, grease filters, and exhaust duct - all areas at high Class F fire risk from cooking oil vapour accumulation.</p>
  <ol class="n-steps">
    <li><strong>Control Cabinet:</strong> Small wall-mounted cabinet near the galley contains the pilot cylinder and controls. Manual release handle is accessible to cook/galley crew.</li>
    <li><strong>Pilot Cylinder:</strong> Small CO2 cylinder that, when operated, triggers the main bank via a pneumatic/mechanical interlock AND starts the time-delay unit.</li>
    <li><strong>Time-Delay Unit (<span class="n-val">60–90 seconds</span>):</strong> A critical evacuation delay built into the system. On manual release, an audible alarm sounds and the delay timer starts. This gives galley crew time to evacuate the space before CO2 floods. After the delay, the main CO2 nozzles discharge into the duct and range hood.</li>
    <li><strong>Fan &amp; Damper Interlock:</strong> Galley extraction fans trip and dampers close automatically on pilot cylinder actuation (before CO2 discharge) to prevent the CO2 gas from being extracted out of the protected zone.</li>
    <li><strong>Post-Discharge:</strong> Keep galley sealed and ventilated per same CO2 protocol. Do not re-enter until O2 levels confirmed safe. Inspect duct and grease filters after fire is confirmed extinguished.</li>
  </ol>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>The 60–90 second time delay is the critical difference from the engine room CO2 system.</strong> The ER system has only 20–30 seconds pre-alarm before discharge. The galley system has 60–90 seconds because the galley may be occupied during cooking operations - more evacuation time is mandatory.</div></div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ba-search">🦺 BA Team Search in Smoke-Filled Accommodation</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>"Search for missing personnel in smoke-filled accommodation" is an exam topic. ETOs may lead BA team operations - know the full procedure.</strong></div></div>

  <div class="n-h2">Pre-Entry Preparation</div>
  <ol class="n-steps">
    <li>Never enter alone - BA teams always operate in <strong>pairs minimum</strong>. A BA Controller stays at the entry point at all times.</li>
    <li>Don SCBA fully - check cylinder pressure (minimum <span class="n-val">200 bar</span> for entry), face mask seal, whistle/PASS alarm device active.</li>
    <li>Each team member carries a: personal lifeline, torch, radio (tested), and a BA tally board tag is left with the BA Controller.</li>
    <li>Agree on a communication signal (radio check every 2 minutes, 3 tugs on lifeline = return immediately).</li>
    <li>Check cylinder remaining air: <strong>one-third rule</strong> - one-third to reach objective, one-third to return, one-third reserve. At <span class="n-val">1/3 consumption</span> → return regardless of task completion.</li>
  </ol>

  <div class="n-h2">Low-Search Pattern - Smoke-Filled Space</div>
  <ol class="n-steps">
    <li>Enter with one hand on the wall - maintain wall contact throughout for orientation in zero visibility.</li>
    <li>Move in a <strong>low crouch or crawl</strong> - in smoke, oxygen is lowest and carbon monoxide is highest at floor level in a sealed fire. However, visibility is best low down, below the smoke layer. Balance these factors.</li>
    <li>Check each cabin door before opening: place back of hand on door surface. Hot door = fire behind, do NOT open. Cool door = safe to open.</li>
    <li>If door cool: open from side, not front (in case of flash/backdraft). Call out "Fire!" and search room systematically from entry point outward.</li>
    <li>Search pattern: sweep each room in a systematic pattern - check under bunks, behind doors, in bathrooms. Casualties may be on the floor.</li>
    <li>If a casualty is found: drag to safety by lifeline direction. Call BA Controller with location information. Do not remove SCBA to assist - both die.</li>
    <li>Maintain lifeline discipline - never let the lifeline go slack. BA Controller tracks line length to know team position.</li>
    <li>On PASS alarm activation of any team member: immediate rescue team deployment from the BA control point.</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>BA Controller Duties:</strong> Monitor entry times and cylinder pressures of all BA wearers. Calculate and announce withdrawal times based on entry pressure. Maintain BA tally board. Keep entry point clear and marked. Communicate with Officer of the Watch. Never leave the control point - a dedicated reliever must be assigned if the controller needs to change.</div></div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 15</div>
  <!-- ═══════════════════════════════════════════════════════════ -->

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Fire in the MSB - what action as ETO? (All surveyors)</strong><br><strong>Ideal Answer:</strong> NEVER use water or foam on a live switchboard - electrocution risk. Small incipient fire: isolate the affected feeder breaker, use a portable CO2 or DCP extinguisher held at safe distance. Large fire: order a full blackout - trip all generator ACBs remotely to de-energise the busbars. Once all voltmeters read zero, apply CO2 freely. Emergency generator auto-starts within 45 seconds and supplies ESB. After fire: ventilate to clear toxic PVC combustion fumes. Investigate root cause (insulation failure, arcing contacts, overload), log incident, notify owners and flag.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Classes of fire and correct extinguisher for each? Galley fire? (All surveyors)</strong><br><strong>Ideal Answer:</strong> A = solid combustibles / water or foam. B = flammable liquids / foam, CO2, or DCP. C = flammable gases / DCP after isolating supply first. D = combustible metals / special dry powder only - never water. E = electrical / CO2 preferred (no residue, non-conductive) - isolate power first. F = cooking oils and fats / wet chemical only. Galley deep-fat fryer fire is Class F. Water is prohibited - it flash-boils in 300°C oil causing a violent steam explosion and fireball. Mandatory fixed wet chemical system (e.g. Ansul R-102).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>CO2 system procedure for engine room fire - step by step. (All surveyors)</strong><br><strong>Ideal Answer:</strong> 1. Headcount - all personnel confirmed out. 2. Seal the space: close all ventilation dampers, skylights, fire dampers, and stop all fans. 3. Shut fuel supply to the space. 4. Operate the <strong>pilot valve</strong> - pre-discharge alarm sounds for <span class="n-val">20–30 seconds</span>. 5. Operate the <strong>main valve</strong> - full CO2 bank discharges. 6. Minimum <span class="n-val">24 hours</span> sealed. 7. Re-entry with SCBA only after full ventilation and gas measurement confirms O2 &gt;20.9%, CO2 &lt;0.5%. Concentrations: ER needs minimum 34% CO2 by volume.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>CO2 was released but ventilation fans did not stop - why?</strong><br><strong>Ideal Answer:</strong> Three possible causes: (1) Door limit switch on the CO2 cabinet is stuck closed or bypassed - switch is wired to trip fans on cabinet opening, so stuck switch means fans never receive the trip signal. (2) Shunt-trip coil on the fan motor starter is open-circuit, blown fuse, or defective - trip signal sent but starter does not respond. (3) Wrong cabinet was opened - CO2 went to a different protected space, not the engine room. Immediate action: manually stop all ER fans via MSB or local isolators without entering the space. Verify CO2 actually reached the ER. Identify and repair root cause fault.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between low expansion and high expansion foam? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Low expansion foam: expansion ratio up to <span class="n-val">20:1</span>. Dense, wet, heavy foam flows across the liquid fuel surface forming a smothering blanket with a cooling film layer. Triple action - smothers, cools, suppresses vapour. Used on tanker deck monitors and pump rooms - Class B liquid fires. High expansion foam: expansion ratio <span class="n-val">200:1 to 1000:1</span>. Extremely light, voluminous dry foam rapidly floods the entire enclosed space volume to physically displace oxygen. Used in Ro-Ro vehicle decks, large cargo holds, and engine rooms.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the PFOS ban? When does it apply? (2026 question)</strong><br><strong>Ideal Answer:</strong> PFOS (Perfluorooctane Sulfonate) is a toxic, persistent bio-accumulative chemical found in traditional AFFF firefighting foam. It is now prohibited on ships. All existing foam stocks must be replaced with certified PFOS-free alternatives - C6 AFFF or fluorine-free foam (FFF) - before the first survey after <span class="n-val">January 2026</span>. ETO must verify current foam inventory is compliant, check certificates, and procure replacement foam before the survey window opens. Non-compliance is a PSC deficiency and can lead to port detention.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What replaces Halon? What replaced Halon in ECR/server rooms? (Multiple surveyors)</strong><br><strong>Ideal Answer:</strong> Halon was banned under the Montreal Protocol (1987) due to its extremely high ozone depletion potential (ODP = 10). For occupied spaces such as ECR, server rooms, and navigation bridge electronics rooms, the replacements are: FM-200 (HFC-227ea) - 7–8% design concentration, chemical chain reaction inhibition, safe for brief personnel exposure; and Novec 1230 (FK-5-1-12) - 4–6% design concentration, primarily physical heat absorption, lowest GWP of all clean agents (GWP = 1). For larger enclosed spaces, IG-541 (Inergen - 52% N2 + 40% Ar + 8% CO2) reduces O2 to 12.5% - safe for brief occupancy as the CO2 component stimulates breathing. CO2 remains the main agent for non-occupied spaces (ER, cargo holds).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How does the fire panel distinguish a broken wire from an alarm? (Vishwanathan, Rajeev Wad)</strong><br><strong>Ideal Answer:</strong> The fire alarm panel uses a supervised loop with an End-of-Line (EOL) resistor. This creates three measurable states: (1) NORMAL - panel reads reference current through EOL resistor, all zones green. (2) ALARM - detector activates and short-circuits the loop, current rises above reference - RED alarm activates. (3) FAULT - a wire breaks, loop goes open-circuit, current drops to zero (no EOL current path) - panel reads FAULT and shows amber/yellow indicator for that zone. This way a broken wire never looks like a normal or alarm state - it is always flagged as a fault requiring repair.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you test a UV flame detector and heat detector? (All surveyors)</strong><br><strong>Ideal Answer:</strong> UV flame detector: inform bridge, put panel in test mode. Use calibrated UV test lamp - the specific UV wavelength (290–310 nm) that the detector is tuned to. NEVER use a naked flame or lighter - real fire risk in the engine room plus permanent detector damage. Clean the detector window first. Hold test lamp at prescribed distance (150–300 mm). Verify alarm on panel. Heat detector: approved calibrated heat gun only. For fixed temperature, apply steady heat until alarm activates at within ±10% of setpoint. For rate-of-rise, heat rapidly until ROR detector triggers within 10–15 seconds. Never use a hair dryer or naked flame.</div></div>


  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 15</div>
  <!-- ═══════════════════════════════════════════════════════════ -->
  <table class="n-table">
    <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Points</th></tr>
    <tr><td>Fire classes and extinguishers</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>A=water | B=foam/CO2 | C=DCP+stop gas | D=special powder | E=CO2+isolate | F=wet chemical only | Galley = Class F, NEVER water</td></tr>
    <tr><td>CO2 system procedure</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Headcount → seal space → pilot valve → <span class="n-val">20–30s</span> pre-alarm → main valve → <span class="n-val">24 hr</span> minimum → SCBA re-entry | ER = 34% concentration</td></tr>
    <tr><td>MSB fire action</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Never water on live board → blackout → CO2 after voltmeter = 0 → ventilate PVC fumes → EM gen 45s</td></tr>
    <tr><td>CO2 pipe pressure tests</td><td class="hl">⭐⭐⭐⭐ Sanjib</td><td>Nozzle branch = <span class="n-val">7 bar</span> air | Master→branch = <span class="n-val">80 bar</span> hydraulic | Cylinder→master = <span class="n-val">190 bar</span> hydraulic | Filling ratio = <span class="n-val">0.667 kg/L</span> | Stored as liquid, discharges as gas</td></tr>
    <tr><td>CO2 fans not tripping fault</td><td class="hl">⭐⭐⭐⭐ Deswal</td><td>Door limit switch stuck | Shunt-trip coil fault | Wrong cabinet opened → manually stop fans → verify CO2 reached ER</td></tr>
    <tr><td>Foam types</td><td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>Low exp up to <span class="n-val">20:1</span> = tanker deck/pump room | High exp <span class="n-val">200–1000:1</span> = RoRo/cargo holds | PFOS-free before Jan 2026</td></tr>
    <tr><td>Clean agents for occupied spaces</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>FM-200 = 7–8% chemical inhibition | Novec 1230 = 4–6% heat absorption, GWP=1 | IG-541 = 52%N2+40%Ar+8%CO2, O2→12.5%, safe for brief occupancy | Halon banned Montreal Protocol ODP=10</td></tr>
    <tr><td>Sprinkler bulb colours</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Red = <span class="n-val">68°C</span> (standard accommodation) | Yellow = 79°C | Green = 93°C | Blue = 141°C | BLIS = stop valve tamper alarm | Drencher = open head, zone activation</td></tr>
    <tr><td>Water mist mechanism</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>Pressure <span class="n-val">70–200 bar</span> | Droplet <span class="n-val">50–200 µm</span> | Heat absorption (latent heat vaporisation) + O2 displacement (steam 1700× expansion) | Safe in manned spaces</td></tr>
    <tr><td>PFOS ban 2026</td><td class="hl">⭐⭐⭐⭐ New 2026 question</td><td>Replace all AFFF with PFOS-free (C6 AFFF or FFF) before first survey after <span class="n-val">Jan 2026</span> | PSC deficiency if non-compliant</td></tr>
    <tr><td>Emergency fire pump</td><td class="hl">⭐⭐⭐⭐ Nair, Deswal</td><td>Outside ER | Independent power (own diesel or EM gen) | Min <span class="n-val">0.3 MPa (3 bar)</span> | Two simultaneous jets | ISC: 178 mm OD, 64 mm bore, 4 bolts</td></tr>
    <tr><td>Detector types</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Sanjib</td><td>ROR = earliest warning (<span class="n-val">8°C/min</span>) | Fixed temp = 58/72/93°C | UV = millisecond, test with UV lamp only | Ionisation = Am-241, fast flames | Photoelectric = smouldering fires | VESDA = ultra-early laser</td></tr>
    <tr><td>Fire panel EOL resistor</td><td class="hl">⭐⭐⭐ Vishwanathan, Rajeev Wad</td><td>3 states: NORMAL (reference current) | ALARM (high current, detector activates) | FAULT (zero current, open circuit wire) | Addressable = exact detector location | Conventional = zone only</td></tr>
    <tr><td>RoRo 2026 requirements</td><td class="hl">⭐⭐⭐⭐ All surveyors (post-2026)</td><td>Combined smoke+heat detection | 24-hr CCTV playback | Weather deck water monitors | All in force <span class="n-val">1 Jan 2026</span></td></tr>
    <tr><td>Galley CO2 system</td><td class="hl">⭐⭐⭐ Sanjib</td><td>Pilot cylinder → <span class="n-val">60–90 sec time delay</span> → main discharge | Fan trip + damper close on activation | Protect exhaust duct and range hood</td></tr>
    <tr><td>BA team search procedure</td><td class="hl">⭐⭐⭐ Deswal</td><td>Pairs only | BA Controller at entry | 1/3 cylinder rule | Wall contact + low search | Cool door before opening | Never remove SCBA to help casualty</td></tr>
    <tr><td>ROR vs fixed temp</td><td class="hl">⭐⭐⭐ Vishwanathan</td><td>ROR = earliest warning for developing fires | Fixed = high-ambient spaces where background temp is elevated | UV = open flame in milliseconds</td></tr>
  </table>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Comprehensive Memory Aid - Topic 15:</strong><br>
  <strong>Classes:</strong> A=Ash/water, B=Barrel/foam, C=Carbon-gas/DCP+stop, D=Dangerous-metal/special, E=Electric/CO2, F=Fat-galley/wet-chem<br>
  <strong>CO2 Key Numbers:</strong> ER = 34%, Hold = 30%, Pre-alarm = 20–30s, Wait = 24hrs, Cylinder test = 7/80/190 bar, Filling ratio = 0.667 kg/L<br>
  <strong>Clean Agents (for occupied spaces):</strong> FM-200 = 7–8%, Novec 1230 = 4–6%, IG-541 = 52%N2+40%Ar+8%CO2 → O2 down to 12.5%<br>
  <strong>Sprinkler:</strong> Red = 68°C standard; Drencher = open head<br>
  <strong>Water Mist:</strong> 70–200 bar, 50–200 µm droplets, Heat abs + O2 displacement (1700×)<br>
  <strong>ROR detector:</strong> 8°C/min trigger - earliest warning<br>
  <strong>2026 Ro-Ro:</strong> Combined detection + 24hr CCTV + water monitors<br>
  <strong>PFOS ban:</strong> Replace before first survey after Jan 2026</div></div>

    </div>
</div>
</div>
`);
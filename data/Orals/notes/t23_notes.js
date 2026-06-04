window.loadNotes("T23", `<div class="view" id="view-notes-t23">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T23')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 23 - Batteries &amp; DC Systems</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-rating')">Ah & CCA Ratings</button>
    <button class="anc-btn" onclick="jumpTo('s-leadacid')">Lead-Acid vs NiCd</button>
    <button class="anc-btn" onclick="jumpTo('s-alkaline')">Alkaline Batteries</button>
    <button class="anc-btn" onclick="jumpTo('s-ordering')">Battery Ordering</button>
    <button class="anc-btn" onclick="jumpTo('s-solas')">SOLAS Acceptance (50% rule)</button>
    <button class="anc-btn" onclick="jumpTo('s-room')">Battery Room Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-lithium')">Li-Ion &amp; ESS</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Why SG changes in Lead-Acid but not in NiCd/Alkaline. CCA vs Ah rating differences. Battery room safeties (ex-lighting, ventilation). The "50% capacity" SOLAS question.</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-rating">1. Battery Ratings - Ah &amp; CCA Explained</div>
  
  <ul class="n-list">
    <li><strong>Ampere-Hour (Ah):</strong> Tells you how much total charge the battery delivers before being fully discharged. E.g., 100 Ah = 100A for 1 hour, or 5A for 20 hours. <em>(Used for sizing emergency power durations)</em></li>
    <li><strong>C-Rate:</strong> A 100Ah battery rated at C20 means it delivers 100Ah if discharged over 20 hours (5A draw). Higher draw reduces effective capacity due to internal resistance.</li>
    <li><strong>CCA (Cold Cranking Amperes):</strong> The current a fully charged battery can deliver for <strong>30 seconds at -18°C</strong> while maintaining at least 7.2V (for a 12V battery). <em>(Used for sizing engine starter batteries where cold weather performance is critical)</em></li>
  </ul>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-leadacid">2. Lead-Acid vs NiCd Batteries</div>
  
  <table class="n-table">
    <tr><th>Feature</th><th>Lead-Acid Battery</th><th>NiCd Battery</th></tr>
    <tr><td><strong>Anode (Negative)</strong></td><td>Sponge Lead (Pb)</td><td>Cadmium (Cd)</td></tr>
    <tr><td><strong>Cathode (Positive)</strong></td><td>Lead Dioxide (PbO2)</td><td>Nickel Oxyhydroxide (NiOOH)</td></tr>
    <tr><td><strong>Electrolyte</strong></td><td>Dilute Sulphuric Acid (H2SO4)</td><td>Potassium Hydroxide (KOH) - Alkaline</td></tr>
    <tr><td><strong>Specific Gravity (SG)</strong></td><td><strong>CHANGES</strong> during charge/discharge. Use Hydrometer.</td><td><strong>DOES NOT CHANGE.</strong> KOH is not consumed. Cannot use Hydrometer.</td></tr>
    <tr><td><strong>Cell Voltage</strong></td><td>2.0V nominal (2.12V open circuit)</td><td>1.2V nominal</td></tr>
    <tr><td><strong>Advantages</strong></td><td>Cheaper, high energy density, no memory effect.</td><td>Better cold performance (-20°C), longer cycle life, can store discharged.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> The specific gravity (SG) of a Lead-Acid battery drops during discharge because acid is consumed and water is produced. In NiCd and Alkaline batteries, the KOH electrolyte is not consumed in the overall reaction, so SG remains constant.</div></div>


  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-alkaline">3. Alkaline Battery (Primary)</div>
  
  <ul class="n-list">
    <li><strong>Construction:</strong> Zinc (anode), Manganese dioxide (cathode), KOH (electrolyte).</li>
    <li><strong>Primary Cell:</strong> NON-rechargeable. Attempting to charge causes leakage/fire.</li>
    <li><strong>State of Charge:</strong> SG does not change. Must measure open circuit voltage (~1.5V full, <1.1V dead).</li>
    <li><strong>Applications:</strong> Torches, SART, Handheld VHF backup, portable instruments. Excellent shelf life (5-10 years).</li>
  </ul>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-ordering">4. Battery Ordering Specification</div>
  
  <div class="n-p">When ordering a marine battery, you must specify:</div>
  <ol class="n-list">
    <li><strong>Type/Chemistry:</strong> VRLA, Flooded Lead-Acid, NiCd.</li>
    <li><strong>Voltage:</strong> E.g., 12V or 24V.</li>
    <li><strong>Capacity:</strong> Ah rating at specific C-rate.</li>
    <li><strong>Starting Performance:</strong> CCA rating at -18°C (if for starting).</li>
    <li><strong>Dimensions:</strong> L × W × H (must fit the tray).</li>
    <li><strong>Terminal Type &amp; Layout:</strong> Top-post, stud, left-positive/right-negative. (Crucial so cables reach).</li>
    <li><strong>Maintenance Type:</strong> Flooded vs Sealed (VRLA).</li>
    <li><strong>Temperature Range:</strong> Min expected ambient temp.</li>
    <li><strong>Marine Approval:</strong> IMO SOLAS compliant, Class-approved.</li>
    <li><strong>Shelf Life:</strong> For SART/EPIRB batteries.</li>
    <li><strong>Hazmat Shipping:</strong> NiCd/Li-ion have shipping restrictions (IATA/IMDG).</li>
  </ol>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-solas">5. SOLAS Acceptance Rule (50% Capacity)</div>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Question:</strong> The emergency battery is at 50% capacity - can you accept it?</div></div>
  <div class="n-p"><strong>NO.</strong> SOLAS II-1/Reg 43 requires the emergency battery to supply ALL emergency loads for the FULL required duration (e.g., 30 minutes for cargo ships). A battery at 50% capacity can only supply half the required duration. If a blackout occurs, it will fail prematurely, leaving the ship without critical services. <strong>It MUST be replaced before sailing.</strong></div>
  
  <div class="n-h2">Capacity Thresholds &amp; Actions</div>
  <ul class="n-list">
    <li><strong>80–100%:</strong> Acceptable. Monitor normally.</li>
    <li><strong>50–80%:</strong> Flag for early replacement. Ship may sail, but order urgently. Notify class.</li>
    <li><strong>Below 50%:</strong> MUST REPLACE before sailing. Unfit for SOLAS purpose.</li>
  </ul>
  <div class="n-p"><strong>How it's tested:</strong> Annual discharge test. Fully charge, discharge at rated current, measure time until 10.5V cut-off. Ah delivered = current × time.</div>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-room">6. Battery Room Safety Requirements</div>
  
  <div class="n-p">Battery rooms are hazardous areas because charging Lead-Acid and NiCd batteries produces <strong>Hydrogen gas</strong> (explosive above 4% in air).</div>
  <ul class="n-list">
    <li><strong>Ventilation:</strong> Dedicated extraction (natural or forced) with inlet low and exhaust high (hydrogen rises). Must prevent accumulation &gt;25% LEL.</li>
    <li><strong>Lighting:</strong> MUST be Ex-certified (Ex d or Ex e). Switch located OUTSIDE the room. No other non-Ex equipment inside.</li>
    <li><strong>Floor:</strong> Acid/Alkali resistant floor, tiles, or drip tray.</li>
    <li><strong>Safety Gear:</strong> Eyewash station at entrance, PPE (apron, goggles, acid gloves).</li>
    <li><strong>Extinguisher:</strong> CO2 or Dry Powder. NEVER use water (reacts violently with acid).</li>
    <li><strong>Fire Door &amp; Signage:</strong> A-class self-closing door. Marked: "BATTERY ROOM - NO NAKED FLAMES".</li>
    <li><strong>Tools:</strong> Use insulated tools only. Remove metallic jewelry.</li>
  </ul>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-ups">7. UPS Battery Systems</div>
  
  <ul class="n-list">
    <li><strong>Online UPS (Double Conversion):</strong> AC → DC → AC. Load always runs from inverter. Zero switchover delay. Best for critical nav/GMDSS equipment.</li>
    <li><strong>Offline UPS (Standby):</strong> Runs on mains, switches to inverter on failure (10-20ms gap).</li>
    <li><strong>Line-Interactive:</strong> Continuously conditions raw AC power via a transformer tap-switching mechanism (Automatic Voltage Regulation - AVR). Provides better voltage stabilisation than offline units and protects against voltage sags/surges without switching to battery. Switches to battery only on total mains failure. Common for bridge instrument panels.</li>
    <li><strong>Battery Type:</strong> Mostly VRLA (Valve-Regulated Lead-Acid) / AGM. Maintenance-free.</li>
    <li><strong>Maintenance Routine:</strong> 
      1. Visual check for swelling/leaks. 
      2. Check float voltage (13.5-13.8V for 12V VRLA). 
      3. Quarterly discharge test (simulate failure and verify backup time). 
      4. Annual bypass test (transfer load to AC mains to service UPS internally).
    </li>
    <li><strong>Replacement:</strong> Replace VRLA batteries every 3-5 years BEFORE they fail.</li>
    <li><strong>Thermal Degradation Rule (10°C Law):</strong> Battery life is strictly tied to ambient temperature. <strong>For every 10°C rise above 25°C, battery life is halved.</strong> A VRLA battery rated 5 years at 25°C will last only 2.5 years in a battery room running at 35°C. Ensure battery room AC is operational - ETO must verify this on PMS.</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s-lithium">🔋 Lithium-Ion Batteries &amp; ESS - Safety (2024+ Critical)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand new exam topic - surveyors now ask about Li-ion ESS on hybrid ships.</strong> Thermal runaway, off-gas detection, and BMS are the key areas.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standards:</strong> <span class="n-val">IEC 62619</span> - safety requirements for lithium-ion marine batteries. <span class="n-val">IEC 60092</span> - marine electrical installations. DNV/LR class rules for marine ESS.</div></div>
  <div class="n-h2">Thermal Runaway - The Critical Hazard</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Thermal runaway:</strong> Self-sustaining exothermic reaction in Li-ion cell. Once started - CANNOT be stopped with normal firefighting. Cell temperature rises → separator failure → short circuit → more heat → adjacent cells ignite → chain reaction. CO2 does NOT extinguish Li-ion fires (the cell contains its own oxygen). Requires large volumes of water to cool and contain.</div></div>
  <div class="n-h2">Off-Gas Detection - Early Warning System</div>
  <ol class="n-steps">
    <li>Before temperature rises, failing Li-ion cells vent flammable off-gases (VOCs, hydrogen, CO)</li>
    <li>Off-gas sensors detect these gases <strong>before</strong> thermal alarm triggers - earliest possible warning</li>
    <li>BMS detects off-gas → automatically isolates affected battery rack contactors</li>
    <li>High-rate exhaust ventilation starts at least <span class="n-val">10 minutes</span> before thermal alarms activate</li>
    <li>ETO alerted - assess situation - prepare fire response</li>
  </ol>
  <div class="n-h2">Battery Management System (BMS)</div>
  <ul class="n-list">
    <li><strong>Cell balancing:</strong> Keeps all cells at equal state of charge to prevent overcharge/over-discharge of individual cells</li>
    <li><strong>Temperature monitoring:</strong> Each cell monitored - shuts down rack if over-temperature</li>
    <li><strong>Current limiting:</strong> Prevents charge/discharge current exceeding safe limits</li>
    <li><strong>State of Charge (SoC) monitoring:</strong> Prevents deep discharge below minimum voltage</li>
    <li><strong>Isolation:</strong> Disconnects battery from bus on fault detection</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Li-ion = off-gas first, then temperature. Off-gas sensors are the EARLIEST warning. Thermal runaway = unstoppable chain reaction - water to cool/contain, NOT CO2. BMS = balance + temperature + current + SoC + isolation. IEC 62619 = Li-ion marine standard.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>How do you check the state of charge for Lead-Acid vs NiCd?</td>
      <td>For Lead-Acid, use a hydrometer to check the Specific Gravity (SG) of the electrolyte, because H2SO4 is consumed during discharge (SG drops). For NiCd, SG does NOT change because KOH is not consumed, so a hydrometer is useless. You must measure voltage or do a load test.</td>
    </tr>
    <tr>
      <td>What is CCA?</td>
      <td>Cold Cranking Amperes. The current a battery can supply for 30 seconds at -18°C while maintaining useful voltage. Important for lifeboat batteries in cold climates.</td>
    </tr>
    <tr>
      <td>Can you accept an emergency battery at 50% capacity?</td>
      <td>No. Under SOLAS, it must provide emergency power for the full mandated duration (e.g., 30 mins). At 50%, it will fail halfway. It must be replaced before departure.</td>
    </tr>
    <tr>
      <td>What are the hazards in a battery room and how are they controlled?</td>
      <td>Hydrogen gas emission during charging is an explosion hazard. Controlled by dedicated high-level exhaust ventilation, Ex-rated lighting only, and switches outside the room. Acid spill hazard is controlled with PPE, eyewash station, and acid-resistant trays.</td>
    </tr>
    <tr>
      <td>Why do we use NiCd batteries in lifeboats instead of Lead-Acid?</td>
      <td>NiCd has far better cold-temperature performance, retains capacity down to -20°C, and can be stored in a fully discharged state without being destroyed by sulphation.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  
  <div class="n-h1" id="s-liion-detail">🔬 Li-Ion ESS - Off-Gas Chemistry &amp; Standards</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors now ask about Li-ion off-gas types, BMS requirements, and IEC 62619.</strong></div></div>
  <div class="n-h2">Off-Gas Types by Battery Chemistry</div>
  <table class="n-table">
    <tr><th>Battery Type</th><th>Primary Off-Gas</th><th>Secondary Risk</th></tr>
    <tr><td><strong>LFP (Lithium Iron Phosphate)</strong></td><td class="bad">High volumes of <span class="n-val">Hydrogen (H₂)</span></td><td>Explosive - LEL 4%</td></tr>
    <tr><td><strong>NMC (Nickel Manganese Cobalt)</strong></td><td class="bad">High volumes of <span class="n-val">Carbon Monoxide (CO)</span></td><td>Toxic + explosive</td></tr>
    <tr><td>Both types</td><td class="hl">VOCs (Volatile Organic Compounds)</td><td>Detected by VOC sensors earliest</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standards:</strong> <span class="n-val">IEC 62619</span> - safety requirements for Li-ion in industrial/maritime. Covers overcharge protection, thermal abuse, mechanical shock, BMS integration testing. <span class="n-val">DNV GL</span> certification requires HIL (Hardware-in-the-Loop) testing of BMS under marine conditions and fire safety hazard analysis.</div></div>
  <div class="n-h2">BMS Protection Functions</div>
  <ul class="n-list">
    <li><strong>Cell balancing:</strong> Keeps all cells at equal state of charge - prevents individual cell overcharge/over-discharge</li>
    <li><strong>Temperature monitoring:</strong> Per-cell monitoring - shuts down rack above temperature limit</li>
    <li><strong>Current limiting:</strong> Prevents charge/discharge exceeding safe limits</li>
    <li><strong>State of Charge (SoC):</strong> Prevents deep discharge below minimum voltage</li>
    <li><strong>Off-gas detection integration:</strong> On detection → automatically isolate rack contactors → trigger high-rate exhaust ventilation (min <span class="n-val">10 minutes</span> before thermal alarms)</li>
    <li><strong>Isolation:</strong> Disconnects battery from bus on fault detection</li>
  </ul>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is battery off-gassing and how is it detected/managed?</strong><br><strong>Ideal Answer:</strong> Before Li-ion thermal runaway, stressed cells vent flammable/toxic off-gases: LFP batteries vent hydrogen, NMC batteries vent CO. This occurs BEFORE heat or smoke - earliest possible warning. VOC/aerosol sensors detect these gases and give up to <span class="n-val">10 extra minutes</span> warning. BMS integration: on gas detection → isolate rack contactors automatically → trigger high-rate exhaust ventilation → alert crew. Water (large volumes) to cool and contain thermal runaway - CO2 does NOT extinguish Li-ion fires (cells contain own oxygen source).</div></div>

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Lead-Acid vs NiCd SG difference</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Lead-Acid SG changes. NiCd SG does NOT change.</td>
    </tr>
    <tr>
      <td>SOLAS 50% Capacity Rule</td>
      <td class="hl">⭐⭐⭐⭐⭐ Mumbai, ORAL2026</td>
      <td>Cannot accept. Must supply full SOLAS duration. Replace.</td>
    </tr>
    <tr>
      <td>CCA Rating Definition</td>
      <td class="hl">⭐⭐⭐⭐ Sudhir, Prakash</td>
      <td>-18°C, 30 seconds. Crucial for cold weather starting.</td>
    </tr>
    <tr>
      <td>Battery Room Safety</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026</td>
      <td>Ventilation high, Ex-lights, No water extinguisher, Eyewash.</td>
    </tr>
  </table>

      </div>
</div>
</div>
`);

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
      <span class="tag tag-purple">Exam-Verified</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-fundamentals')">Cell Fundamentals</button>
    <button class="anc-btn" onclick="jumpTo('s-rating')">Ah, C-Rate &amp; CCA</button>
    <button class="anc-btn" onclick="jumpTo('s-leadacid')">Lead-Acid vs NiCd</button>
    <button class="anc-btn" onclick="jumpTo('s-vrla')">VRLA / AGM / Gel</button>
    <button class="anc-btn" onclick="jumpTo('s-charger')">Battery Charger Stages</button>
    <button class="anc-btn" onclick="jumpTo('s-equalise')">Equalising Charge</button>
    <button class="anc-btn" onclick="jumpTo('s-sg')">SG &amp; Temperature Correction</button>
    <button class="anc-btn" onclick="jumpTo('s-alkaline')">Alkaline &amp; Primary Cells</button>
    <button class="anc-btn" onclick="jumpTo('s-ordering')">Battery Ordering Spec</button>
    <button class="anc-btn" onclick="jumpTo('s-solas')">SOLAS 50% Rule</button>
    <button class="anc-btn" onclick="jumpTo('s-room')">Battery Room Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-segregation')">Lead-Acid &amp; NiCd Segregation</button>
    <button class="anc-btn" onclick="jumpTo('s-dc-systems')">DC Systems Onboard</button>
    <button class="anc-btn" onclick="jumpTo('s-dc-fault')">DC Short Circuit Severity</button>
    <button class="anc-btn" onclick="jumpTo('s-ups')">UPS Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-lithium')">Li-Ion &amp; ESS</button>
    <button class="anc-btn" onclick="jumpTo('s-liion-detail')">Li-Ion Off-Gas &amp; BMS</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics (Mumbai / ORAL2026 / Kamath / Deswal):</strong> Why SG changes in Lead-Acid but NOT in NiCd. CCA vs Ah differences. Battery room safeties (Ex-lighting, ventilation, segregation). The "50% capacity" SOLAS test. Li-ion thermal runaway &amp; BMS - hot post-2023. Why lead-acid and NiCd cannot share a room. Battery polarisation one-liner.</div></div>


  <!-- ═══ SECTION 1 - CELL FUNDAMENTALS ═══ -->
  <div class="n-h1" id="s-fundamentals">1. Cell Fundamentals - Primary vs Secondary</div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr; gap:12px;">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Primary Cell (Non-rechargeable)</div>
      <div class="card-desc">Chemical energy converted to electrical energy irreversibly. Electrode material consumed and cannot be restored. <strong>Examples:</strong> Alkaline (Zn/MnO₂), Lithium primary (Li/MnO₂), Leclanché. Used in EPIRBs, SARTs, handheld VHF - shelf life priority.</div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">Secondary Cell (Rechargeable)</div>
      <div class="card-desc">Electrochemical reactions are reversible - can be recharged by passing current in the opposite direction. Electrode material is regenerated. <strong>Examples:</strong> Lead-Acid, NiCd, Li-Ion, NiMH. Used for starting, emergency, ESS, UPS - cycle life priority.</div>
    </div>
  </div>

  <div class="n-h2">Key Cell Voltages - Memorise These</div>
  <table class="n-table">
    <tr><th>Cell Type</th><th>Nominal Voltage / cell</th><th>Open Circuit (Full)</th><th>Electrolyte</th></tr>
    <tr><td><strong>Lead-Acid</strong></td><td class="ok">2.0 V</td><td>2.10–2.12 V</td><td>H₂SO₄ (dilute)</td></tr>
    <tr><td><strong>NiCd</strong></td><td class="hl">1.2 V</td><td>1.25–1.30 V</td><td>KOH (alkaline)</td></tr>
    <tr><td><strong>Li-Ion (LFP)</strong></td><td class="hl">3.2 V</td><td>3.30–3.35 V</td><td>Lithium salt in organic solvent</td></tr>
    <tr><td><strong>Li-Ion (NMC)</strong></td><td class="hl">3.6 V</td><td>4.0–4.2 V</td><td>Lithium salt in organic solvent</td></tr>
    <tr><td><strong>Alkaline (primary)</strong></td><td>1.5 V</td><td>~1.55 V (new)</td><td>KOH</td></tr>
  </table>
  <div class="n-info"><div class="icon">💡</div><div class="body"><strong>Mnemonic - Cell voltages:</strong> "Lead Two, NiCd One Point Two, Lithium Three-plus."<br>A 24 V lead-acid bank = <strong>12 cells × 2 V</strong>. A 24 V NiCd bank = <strong>20 cells × 1.2 V</strong>. Surveyor frequently asks: "How many cells in your 24 V lead-acid battery?" → Answer: 12.</div></div>


  <!-- ═══ SECTION 2 - Ah, C-Rate, CCA ═══ -->
  <div class="n-h1" id="s-rating">2. Battery Ratings - Ah, C-Rate &amp; CCA</div>

  <ul class="n-list">
    <li><strong>Ampere-Hour (Ah):</strong> Total charge the battery can deliver before fully discharged. A 100 Ah battery delivers 100 A for 1 hour, or 5 A for 20 hours. <em>Used for sizing emergency power duration.</em></li>
    <li><strong>C-Rate:</strong> Discharge rate relative to capacity. C20 = discharge over 20 h (100 Ah ÷ 20 h = 5 A draw). C10 = over 10 h. Higher rate reduces effective capacity due to internal resistance losses - a 100 Ah battery at C1 (very fast, 100 A) may only deliver 60–70 Ah effectively.</li>
    <li><strong>CCA (Cold Cranking Amperes):</strong> Current a fully charged 12 V battery can deliver for <strong>30 seconds at −18°C</strong> while maintaining ≥ 7.2 V. <em>Used for lifeboat/rescue boat engine starter batteries where cold weather performance is critical.</em></li>
    <li><strong>MCA (Marine Cranking Amperes):</strong> Same test but at 0°C. Higher number than CCA for same battery. Used in warmer climates. Less demanding than CCA.</li>
  </ul>

  <div class="n-grid" style="grid-template-columns:1fr 1fr; gap:12px;">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Ah Rating - Use It For:</div>
      <div class="card-desc">• Emergency generator starting battery capacity<br>• UPS backup duration calculation<br>• SOLAS compliance test (30-min discharge)<br>• ESB battery sizing (emergency switchboard)</div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">CCA Rating - Use It For:</div>
      <div class="card-desc">• Lifeboat engine starter batteries<br>• GMDSS DSC emergency start<br>• Any cranking application in cold climate<br>• NOT a capacity measure - a burst-power measure</div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Common Surveyor Trap:</strong> "A battery with higher CCA is better for emergency power duration - True or False?" → FALSE. CCA measures burst starting power, NOT capacity. A high-CCA battery may have lower Ah than a deep-cycle battery. Always specify both Ah and CCA for a starter battery.</div></div>


  <!-- ═══ SECTION 3 - LEAD-ACID vs NiCd ═══ -->
  <div class="n-h1" id="s-leadacid">3. Lead-Acid vs NiCd - Full Comparison</div>

  <table class="n-table">
    <tr><th>Feature</th><th>Lead-Acid Battery</th><th>NiCd Battery</th></tr>
    <tr><td><strong>Anode (Negative)</strong></td><td>Sponge Lead (Pb)</td><td>Cadmium (Cd)</td></tr>
    <tr><td><strong>Cathode (Positive)</strong></td><td>Lead Dioxide (PbO₂)</td><td>Nickel Oxyhydroxide (NiOOH)</td></tr>
    <tr><td><strong>Electrolyte</strong></td><td>Dilute Sulphuric Acid (H₂SO₄)</td><td>Potassium Hydroxide (KOH) - Alkaline</td></tr>
    <tr><td><strong>Specific Gravity (SG)</strong></td><td class="bad"><strong>CHANGES</strong> during charge/discharge. Use hydrometer.</td><td class="ok"><strong>DOES NOT CHANGE.</strong> KOH is not consumed overall. Cannot use hydrometer.</td></tr>
    <tr><td><strong>SG Full / Discharged</strong></td><td>1.260–1.280 full / 1.100–1.120 discharged</td><td>~1.18–1.29 (constant - do not rely on it)</td></tr>
    <tr><td><strong>Cell Voltage</strong></td><td>2.0 V nominal (2.1 V open circuit)</td><td>1.2 V nominal (1.3 V open circuit)</td></tr>
    <tr><td><strong>Cold Performance</strong></td><td class="bad">Capacity drops significantly below 0°C. Electrolyte can freeze if discharged.</td><td class="ok">Excellent to −40°C. Preferred for lifeboat batteries.</td></tr>
    <tr><td><strong>Memory Effect</strong></td><td class="ok">None</td><td class="bad">Yes - if repeatedly partially discharged, loses capacity. Counter with full conditioning cycles.</td></tr>
    <tr><td><strong>Storage (Discharged)</strong></td><td class="bad">NEVER store discharged - sulphation destroys plates permanently.</td><td class="ok">Can be stored fully discharged safely.</td></tr>
    <tr><td><strong>Cycle Life</strong></td><td>~200–500 cycles</td><td>~1000–2000 cycles</td></tr>
    <tr><td><strong>Self-Discharge</strong></td><td>~3–5% per month</td><td>~10–15% per month (higher)</td></tr>
    <tr><td><strong>Cost</strong></td><td class="ok">Low cost, widely available</td><td class="bad">High cost. Contains cadmium (toxic, special disposal).</td></tr>
    <tr><td><strong>Disposal</strong></td><td>Recycled - lead reclaim. Acid neutralised.</td><td class="bad">TOXIC - cadmium hazardous waste. Must land as per MARPOL / port regulations. Cannot dump at sea.</td></tr>
    <tr><td><strong>Marine Applications</strong></td><td>General service batteries, UPS, starting</td><td>Emergency batteries, lifeboat batteries, safety-critical systems</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical - Why SG changes in Lead-Acid but NOT in NiCd:</strong><br>
  <strong>Lead-Acid discharge reaction:</strong> Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O<br>
  H₂SO₄ is CONSUMED and water is produced → electrolyte dilutes → SG drops from ~1.270 to ~1.120.<br>
  <strong>NiCd discharge reaction:</strong> Cd + 2NiOOH + 2H₂O → Cd(OH)₂ + 2Ni(OH)₂<br>
  Water is consumed AND produced in approximately equal measure - KOH concentration stays essentially constant → SG does NOT change.<br>
  <strong>Therefore:</strong> Hydrometer is VALID for lead-acid. Hydrometer is USELESS for NiCd.</div></div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - SG behaviour:</strong> "Lead ACID - acid gets used up, SG drops. NiCd is ALKALINE - the alkali (KOH) is the spectator ion, SG stays."</div></div>


  <!-- ═══ SECTION 4 - VRLA / AGM / GEL ═══ -->
  <div class="n-h1" id="s-vrla">4. VRLA Batteries - Sealed, AGM &amp; Gel Types</div>

  <div class="n-p">VRLA = <strong>Valve-Regulated Lead-Acid</strong>. A sealed version of the lead-acid battery that is maintenance-free and does not require topping up with distilled water. The valve opens only to release gas pressure during overcharge (self-regulating).</div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr; gap:10px;">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Flooded / Vented Lead-Acid</div>
      <div class="card-desc"><strong>Electrolyte:</strong> Free liquid H₂SO₄<br><strong>Maintenance:</strong> Regular topping-up with distilled water required<br><strong>Gassing:</strong> Significant H₂ + O₂ vented to atmosphere<br><strong>Orientation:</strong> Upright only<br><strong>Applications:</strong> Traction, heavy-duty starting, main banks<br><strong>Equalisable:</strong> Yes</div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">AGM (Absorbent Glass Mat)</div>
      <div class="card-desc"><strong>Electrolyte:</strong> Absorbed into fibreglass mat - no free liquid<br><strong>Maintenance:</strong> None (sealed)<br><strong>Gassing:</strong> Gas recombined internally; valve opens only on overcharge<br><strong>Orientation:</strong> Any angle - spill-proof<br><strong>Applications:</strong> UPS batteries, lifeboat starting, GMDSS<br><strong>Equalisable:</strong> NO - overcharge destroys AGM</div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Gel (Silica Gel)</div>
      <div class="card-desc"><strong>Electrolyte:</strong> Immobilised in silica gel<br><strong>Maintenance:</strong> None (sealed)<br><strong>Gassing:</strong> Minimal; very sensitive to overcharge (gel cracks)<br><strong>Orientation:</strong> Any angle<br><strong>Applications:</strong> Deep-cycle, solar/wind storage<br><strong>Equalisable:</strong> NO - gel destroyed by overcharge</div>
    </div>
  </div>

  <table class="n-table" style="margin-top:12px;">
    <tr><th>Feature</th><th>Flooded Lead-Acid</th><th>AGM (VRLA)</th><th>Gel (VRLA)</th></tr>
    <tr><td>Top-up required</td><td class="bad">Yes - distilled water</td><td class="ok">No</td><td class="ok">No</td></tr>
    <tr><td>Equalising charge</td><td class="ok">Yes - safe &amp; recommended</td><td class="bad">NO - will destroy</td><td class="bad">NO - will destroy</td></tr>
    <tr><td>Spill/leak risk</td><td class="bad">Yes if tipped</td><td class="ok">No</td><td class="ok">No</td></tr>
    <tr><td>Charge voltage (12V float)</td><td>13.5–13.8 V</td><td>13.5–13.8 V</td><td>13.5–13.8 V</td></tr>
    <tr><td>Max charge voltage (12V)</td><td class="ok">Up to 15.5 V (equalise)</td><td class="bad">≤ 14.7 V (bulk max)</td><td class="bad">≤ 14.1 V (strict)</td></tr>
    <tr><td>Cycle life</td><td>~300–500</td><td>~400–600</td><td>~500–1000</td></tr>
    <tr><td>Internal resistance</td><td>Medium</td><td>Low (good high-rate)</td><td>Medium</td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Critical Surveyor Point:</strong> "Can you do an equalising charge on a VRLA/AGM battery?" → <strong>NEVER.</strong> Sealed VRLA batteries cannot vent excess gas - forced overcharge causes internal pressure build-up, cell swelling, electrolyte dryout, and premature failure. Equalising charge is for FLOODED lead-acid cells only.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>UPS Battery Type Onboard:</strong> Most modern marine UPS systems use AGM (VRLA) batteries because they are maintenance-free, spill-proof, can be mounted in any orientation inside the UPS cabinet, and have low internal resistance for good high-rate discharge performance. Replace every <strong>3–5 years</strong> or when float voltage indicates low capacity.</div></div>


  <!-- ═══ SECTION 5 - CHARGER STAGES ═══ -->
  <div class="n-h1" id="s-charger">5. Battery Charger - Three Charging Stages</div>

  <div class="n-p">A modern intelligent battery charger operates in three distinct phases to safely restore and maintain a battery. Understanding these phases is essential for diagnosing charger faults.</div>

  <ol class="n-steps">
    <li><strong>Bulk / Constant-Current (CC) Phase:</strong> Charger delivers maximum rated current. Battery voltage rises from ~11.8 V (flat) up to the absorption voltage (~14.4 V for a 12 V lead-acid). Returns approximately 70–80% of capacity. High rate, fast charging. Battery heats slightly - normal.</li>
    <li><strong>Absorption / Constant-Voltage (CV) Phase:</strong> Charger holds voltage constant at ~14.4–14.7 V. Current gradually tapers as battery fills (internal resistance rises). Battery charges from ~80% to ~98% capacity. Duration: 2–4 hours typical. Most of the Ah is put back here.</li>
    <li><strong>Float / Trickle (Maintenance) Phase:</strong> Voltage reduced to ~13.5–13.8 V. Very low current (milliamps). Compensates for self-discharge. Battery can remain on float indefinitely without damage. This is the normal "standby" state for UPS and emergency batteries.</li>
  </ol>

  <table class="n-table">
    <tr><th>Charging Mode</th><th>Voltage (12 V Lead-Acid)</th><th>Purpose</th><th>Duration</th></tr>
    <tr><td>Float (trickle) charge</td><td class="ok">13.5–13.8 V</td><td>Maintain full charge - continuous, safe long-term</td><td>Continuous</td></tr>
    <tr><td>Absorption charge</td><td class="hl">14.4–14.7 V</td><td>Bulk re-charge after discharge - returns 80–98% capacity</td><td>2–4 hours</td></tr>
    <tr><td>Equalisation / Boost charge</td><td class="bad">15.0–15.5 V</td><td>Periodic desulphation of FLOODED cells only - 2–4 hours max</td><td>2–4 h, periodic</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Scenario - 15 V on 12 V battery while on charge (Kamath, Vishwanathan):</strong><br>
  <strong>NOT normal under float charging - but could be during boost/equalisation.</strong><br>
  If 15 V is seen on a VRLA battery: <strong>faulty charge controller / regulator failed HIGH</strong> - sending boost voltage continuously. VRLA cannot tolerate this - will cause electrolyte dryout, cell swelling, and failure. <strong>Corrective action:</strong> Switch charger to manual or replace the charge controller. Check battery temperature (overcharge causes excessive heat). Inspect for swollen or venting cells.<br>
  <strong>Memory hook:</strong> Float = 13.5 V ✔ | Absorption = 14.4 V ✔ | 15 V continuous on VRLA = charger fault ✘</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Battery charge-holding demo (for surveyor - T18/T23 cross-question):</strong><br>
  Switch off the charger → observe voltmeter. A healthy, fully charged battery shows: voltage dips very slightly (surface charge dissipates), then <strong>holds steady at ~12.6–12.8 V</strong> (12 V lead-acid). If voltage drops rapidly to 12.2 V or below within 5–10 minutes → battery has poor capacity or internal short → not fit for service.</div></div>


  <!-- ═══ SECTION 6 - EQUALISING CHARGE ═══ -->
  <div class="n-h1" id="s-equalise">6. Equalising Charge - Purpose &amp; Procedure</div>

  <div class="n-p">An equalising charge is a <strong>controlled overcharge</strong> applied periodically to flooded lead-acid batteries to overcome cell imbalance and sulphation. It is NOT the same as the absorption phase.</div>

  <div class="n-h2">Why Equalising Charge is Needed</div>
  <ul class="n-list">
    <li><strong>Cell imbalance:</strong> In a battery bank of many series cells, individual cells age at different rates. Weaker cells become undercharged during normal charging. Over time, they develop sulphation - lead sulphate crystallises on the plates, permanently reducing capacity.</li>
    <li><strong>Stratification:</strong> In tall flooded batteries, acid stratifies - stronger acid sinks to the bottom, weakening the top of the cell. Equalising charge causes gassing which mixes the electrolyte.</li>
    <li><strong>Desulphation:</strong> The controlled overcharge dissolves soft lead sulphate crystals back into the electrolyte, restoring plate area.</li>
  </ul>

  <div class="n-h2">Equalising Charge Procedure (Flooded Lead-Acid Only)</div>
  <ol class="n-steps">
    <li>Ensure battery room ventilation is running - H₂ production is significant during equalise.</li>
    <li>Fully charge the battery first using the normal absorption/float cycle.</li>
    <li>Set charger to equalising voltage: <span class="n-val">15.0–15.5 V</span> for a 12 V bank (2.50–2.58 V/cell).</li>
    <li>Monitor cell voltages and SG readings at hourly intervals.</li>
    <li>Continue until all cells show the same SG reading (within ±0.010) for two consecutive readings - typically 2–4 hours.</li>
    <li>Reduce voltage back to float (13.5–13.8 V). Record in battery log.</li>
  </ol>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>NEVER equalise VRLA (AGM or Gel) batteries.</strong> They cannot vent the excess gas, leading to pressure build-up, cell damage, and potential rupture. Equalising charge is exclusively for FLOODED (vented) lead-acid batteries. Frequency: typically every 3–6 months, or whenever individual cell SG readings diverge by more than 0.025.</div></div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Equalising:</strong> "Equalise to make cells EQUAL. Only for FLOODED cells that can vent the gas. VRLA = sealed = NO equalise."</div></div>


  <!-- ═══ SECTION 7 - SG & TEMPERATURE CORRECTION ═══ -->
  <div class="n-h1" id="s-sg">7. SG Measurement, Values &amp; Temperature Correction</div>

  <div class="n-h2">Hydrometer Use - Flooded Lead-Acid Only</div>
  <ul class="n-list">
    <li>Draw electrolyte into the hydrometer. The float inside indicates SG on a graduated scale.</li>
    <li>Standard temperature reference: <strong>25°C (77°F)</strong>. All SG tables are calibrated at 25°C.</li>
    <li>If electrolyte temperature differs, apply temperature correction before interpreting results.</li>
    <li>All cells in the battery should read within <strong>±0.025 SG</strong> of each other. A cell more than 0.025 below the others is failing.</li>
  </ul>

  <table class="n-table">
    <tr><th>State of Charge</th><th>SG (at 25°C)</th><th>OCV (12 V Battery)</th></tr>
    <tr><td>Fully charged (100%)</td><td class="ok">1.260–1.280</td><td>12.6–12.8 V</td></tr>
    <tr><td>75% charged</td><td>1.220–1.230</td><td>12.4 V</td></tr>
    <tr><td>50% charged</td><td>1.180–1.200</td><td>12.2 V</td></tr>
    <tr><td>25% charged</td><td>1.140–1.160</td><td>12.0 V</td></tr>
    <tr><td>Fully discharged (0%)</td><td class="bad">&lt;1.120</td><td>&lt;11.8 V</td></tr>
  </table>

  <div class="n-h2">Temperature Correction Formula</div>
  <div class="n-formula">SG<sub>corrected</sub> = SG<sub>measured</sub> + 0.0007 × (T<sub>electrolyte</sub> − 25°C)</div>
  <div class="n-p"><strong>Rule of thumb:</strong> For every <strong>10°C ABOVE 25°C</strong>, add <strong>0.007</strong> to the measured SG. For every 10°C BELOW 25°C, subtract 0.007.</div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Examiner Note - Battery condition vs ambient temperature (Addendum 3):</strong><br>
  In a hot engine room or battery room at 40°C, the electrolyte is warm. Measured SG will read artificially LOW (acid less dense when hot). Without correction you will wrongly conclude the battery is undercharged. Always apply the temperature correction factor before recording or acting on SG readings.<br>
  <strong>Example:</strong> Measured SG = 1.240 at 40°C. Correction = +0.007 × (40−25)/10 = +0.0105 ≈ +0.010. Corrected SG = <strong>1.250</strong> → battery is actually at approximately 75% charge, not 50%.</div></div>

  <div class="n-h2">Step-by-Step Battery Health Demonstration (Surveyor - Kamath, Vishwanathan, Deswal)</div>
  <ol class="n-steps">
    <li><strong>Switch off the charger.</strong> Disconnect from the charging circuit. This prevents charger voltage masking true battery terminal voltage.</li>
    <li><strong>Wait for surface charge to dissipate</strong> - at least 5–10 minutes. A freshly charged battery shows a surface charge giving falsely high readings. Waiting allows voltage to stabilise to true open-circuit voltage (OCV).</li>
    <li><strong>Measure OCV</strong> using a calibrated digital multimeter across the terminals. Compare against the table above.</li>
    <li><strong>Check SG</strong> of each cell using a hydrometer - valid for flooded lead-acid only. All cells should read within ±0.025 of each other. Apply temperature correction if electrolyte is not at 25°C. A cell significantly lower is failing.</li>
    <li><strong>Apply a load test</strong> (if load tester available) - discharge at rated CCA or known load for 15 seconds. Voltage should NOT drop below 9.6 V for a 12 V battery under load. Confirms capacity, not just surface charge.</li>
    <li><strong>Record and report</strong> - note OCV, SG per cell, load test result, battery age, any abnormalities. Log in PMS.</li>
  </ol>
  <div class="n-p"><strong>For NiCd batteries:</strong> SG does NOT change - use OCV (~1.25–1.30 V per cell = full; &lt;1.10 V = failed) or a timed load test. Hydrometer is useless for NiCd.</div>


  <!-- ═══ SECTION 8 - ALKALINE & PRIMARY CELLS ═══ -->
  <div class="n-h1" id="s-alkaline">8. Alkaline &amp; Primary Cells</div>

  <div class="n-h2">Alkaline Primary Cell (Standard Torch Battery)</div>
  <ul class="n-list">
    <li><strong>Construction:</strong> Zinc anode (Zn), Manganese dioxide cathode (MnO₂), KOH electrolyte.</li>
    <li><strong>Primary Cell - NON-rechargeable.</strong> Attempting to charge causes electrolyte leakage, gas generation, and fire risk.</li>
    <li><strong>State of Charge:</strong> SG does NOT change. Must measure open-circuit voltage (~1.5 V full; &lt;1.1 V dead).</li>
    <li><strong>Applications:</strong> Torches, SART, handheld VHF backup, portable instruments. Excellent shelf life: 5–10 years.</li>
  </ul>

  <div class="n-h2">Lithium Primary Cell (Li/MnO₂ or Li/SOCl₂)</div>
  <ul class="n-list">
    <li><strong>Voltage:</strong> ~3.0–3.6 V per cell. Very stable discharge curve.</li>
    <li><strong>Shelf life:</strong> 10–12 years. Preferred for EPIRBs, ELTs, lifebuoy lights - devices that must work after years in storage.</li>
    <li><strong>Temperature range:</strong> Excellent performance from −40°C to +60°C - better than alkaline in cold.</li>
    <li><strong>Hazmat:</strong> Primary lithium cells are classified as dangerous goods (IATA Class 9 / IMDG). Strict limits on Wh per cell for air transport.</li>
    <li><strong>Identification:</strong> Batteries in EPIRBs, SARTs, and lifebuoy lights have an expiry date stamped on them. The ETO must check this date during drills and replace before expiry.</li>
  </ul>

  <div class="n-h2">Alkaline Battery After Long Storage - Test &amp; Remedy</div>
  <ul class="n-list">
    <li><strong>Test procedure:</strong> Check OCV (should be ~1.5 V for alkaline primary; ~1.25 V per cell for NiCd). For NiCd after storage, check electrolyte level (top up with distilled KOH solution if low) and perform a load test.</li>
    <li><strong>For NiCd stored discharged for &gt;6 months:</strong> Perform 3–5 full charge–discharge conditioning cycles. First few cycles recover capacity progressively. Electrolyte may need renewal if KOH has carbonated (absorbed CO₂ from air, forming K₂CO₃) - indicated by white crystalline deposits on cells and poor capacity recovery. Remedy: drain, flush with distilled water, refill with fresh KOH solution of correct concentration (SG ≈ 1.20).</li>
    <li><strong>Record:</strong> Log condition, actions taken, and result in battery record book.</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Leclanché Cell (dry cell):</strong> Oldest type of primary cell. Zinc can, NH₄Cl paste electrolyte, carbon rod + MnO₂ cathode mix. 1.5 V. Poor shelf life, poor cold performance. Found in old equipment. Essentially obsolete in marine use - replaced by alkaline types.</div></div>


  <!-- ═══ SECTION 9 - ORDERING SPEC ═══ -->
  <div class="n-h1" id="s-ordering">9. Battery Ordering Specification</div>

  <div class="n-p">When ordering a marine replacement battery, specify ALL of the following to avoid receiving the wrong item:</div>
  <ol class="n-steps">
    <li><strong>Type/Chemistry:</strong> VRLA-AGM, VRLA-Gel, Flooded Lead-Acid, NiCd, Li-Ion.</li>
    <li><strong>Voltage:</strong> E.g., 12 V or 24 V (or number of cells and cell voltage).</li>
    <li><strong>Capacity:</strong> Ah rating at specified C-rate (e.g., 100 Ah at C20).</li>
    <li><strong>Starting Performance:</strong> CCA rating at −18°C (if for engine starting).</li>
    <li><strong>Dimensions:</strong> L × W × H in mm (must fit the tray/holder exactly).</li>
    <li><strong>Terminal Type &amp; Layout:</strong> Top-post / stud / bolt; left-positive or right-positive. (Critical - cables must reach.)</li>
    <li><strong>Maintenance Type:</strong> Flooded (requires topping up) vs Sealed VRLA (maintenance-free).</li>
    <li><strong>Temperature Range:</strong> Minimum expected ambient temperature (engine room / lifeboat deck).</li>
    <li><strong>Marine Approval:</strong> IMO/SOLAS compliant, Class-approved (DNV, LR, BV, etc.).</li>
    <li><strong>Shelf Life / Expiry Date:</strong> Essential for EPIRB, SART, lifebuoy light batteries.</li>
    <li><strong>Hazmat Shipping:</strong> NiCd contains cadmium (toxic). Li-Ion classified dangerous goods. Declare correctly under IMDG.</li>
  </ol>


  <!-- ═══ SECTION 10 - SOLAS 50% ═══ -->
  <div class="n-h1" id="s-solas">10. SOLAS Acceptance Rule - 50% Capacity Test</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Classic Surveyor Question (ALL surveyors):</strong> "The emergency battery is at 50% capacity - can you accept it? Can the ship sail?"</div></div>

  <div class="n-p"><strong>NO - the ship CANNOT sail with this battery.</strong> SOLAS II-1/Reg 43 requires the emergency battery to supply ALL emergency loads for the FULL required duration:</div>
  <ul class="n-list">
    <li>Cargo ships: <strong>30 minutes</strong> of emergency power supply.</li>
    <li>Passenger ships: <strong>36 hours</strong> (emergency lighting and other loads).</li>
  </ul>
  <div class="n-p">A battery at 50% capacity can only supply half the required duration. If a blackout occurs, critical services (emergency lighting, navigation lights, GMDSS, steering gear alarm, fire detection, PA system) will fail prematurely. <strong>It MUST be replaced before sailing.</strong></div>

  <div class="n-h2">Capacity Thresholds &amp; Actions</div>
  <ul class="n-list">
    <li><strong>80–100%:</strong> Acceptable. Monitor normally as per PMS schedule.</li>
    <li><strong>50–80%:</strong> Flag for early replacement. Ship may sail, but order urgently. Notify class surveyor.</li>
    <li><strong>Below 50%:</strong> <strong>MUST REPLACE before sailing.</strong> Unfit for SOLAS purpose. Record in log. Notify Chief Engineer, Master, and Class.</li>
  </ul>

  <div class="n-h2">How the SOLAS Capacity Test is Performed</div>
  <ol class="n-steps">
    <li>Fully charge the emergency battery to 100% (confirmed by SG/OCV).</li>
    <li>Disconnect from the charger. Connect a calibrated discharge load equivalent to the emergency switchboard rated load.</li>
    <li>Discharge at rated current and measure time until terminal voltage reaches the cut-off voltage (10.5 V for a 12 V lead-acid bank, or equivalent per manufacturer).</li>
    <li>Calculate capacity delivered: <span class="n-val">Ah = Current (A) × Time (h)</span>.</li>
    <li>Compare against rated capacity. If delivered Ah is less than rated Ah × 0.80 → capacity below 80% → flag for replacement.</li>
    <li>Recharge immediately after test. Record results in battery log and PMS.</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Annual Test Requirement:</strong> Emergency battery capacity test must be performed annually and witnessed by a Class surveyor during the Annual Electrical Survey (AES). Results are recorded in the ship's Continuous Survey Record. A battery that fails this test will result in a condition of class or detention.</div></div>


  <!-- ═══ SECTION 11 - BATTERY ROOM SAFETY ═══ -->
  <div class="n-h1" id="s-room">11. Battery Room Safety Requirements</div>

  <div class="n-p">Battery rooms are <strong>Zone 1 hazardous areas</strong> because charging Lead-Acid and NiCd batteries produces <strong>Hydrogen gas</strong> (H₂) - flammable, colourless, odourless, lighter than air. <strong>LEL = 4% in air.</strong></div>

  <ul class="n-list">
    <li><strong>Ventilation:</strong> Dedicated extraction - inlet LOW (floor level, as fresh air is heavier than H₂), exhaust HIGH (H₂ rises to ceiling). Must prevent H₂ accumulation above 25% of LEL (i.e., 1% in air). Ventilation must run BEFORE entry and during charging. Fan motor must be non-sparking (Ex-rated).</li>
    <li><strong>Lighting:</strong> MUST be Ex-certified (Ex d - flameproof, or Ex e - increased safety). <strong>Light switch must be OUTSIDE the room.</strong> No non-Ex equipment, no extension cords, no mobile phones inside.</li>
    <li><strong>Electrical isolation:</strong> Battery charger ON/OFF switch located OUTSIDE the room. Batteries may still evolve gas after charger is switched off - always ventilate before entry.</li>
    <li><strong>Floor:</strong> Acid/alkali-resistant material (tiles, coated concrete, or GRP drip tray under batteries).</li>
    <li><strong>Safety Gear:</strong> Eyewash station at entrance (reachable within 10 seconds). PPE: full-face shield or goggles, rubber apron, acid-resistant gloves - for acid batteries. Alkali gloves for NiCd.</li>
    <li><strong>Fire extinguisher:</strong> CO₂ or Dry Powder. <strong>NEVER water</strong> - reacts violently with sulphuric acid from lead-acid batteries, causing spattering of acid and generating heat. Water also short-circuits battery terminals.</li>
    <li><strong>Fire Door &amp; Signage:</strong> A-class self-closing fire door. Marked: "BATTERY ROOM - NO NAKED FLAMES - NO SMOKING."</li>
    <li><strong>Tools:</strong> Insulated tools only. Remove metallic jewellery before entry. No steel tools (spark risk). Wrap metallic objects.</li>
    <li><strong>Disconnect procedure:</strong> Always <strong>disconnect NEGATIVE terminal first</strong> (removing positive first with a spanner can arc against the chassis/earth if the spanner touches a grounded surface). Connect positive first when reconnecting.</li>
    <li><strong>Earthing:</strong> Battery frames/trays must be bonded to ship's hull. No live parts exposed. Battery charger case earthed.</li>
    <li><strong>Gas detectors:</strong> Fixed H₂ detector at ceiling level with alarm set at 25% LEL. Calibrate regularly.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why is oxygen also produced?</strong><br>
  During charging, electrolysis of water occurs: 2H₂O → 2H₂ (at negative plate) + O₂ (at positive plate). Both hydrogen (at cathode) and oxygen (at anode) are evolved. H₂ is the primary explosion hazard (4% LEL), but the oxygen also enriches the atmosphere, making sparks more likely to ignite any fuel. Hence ventilation must clear BOTH gases.</div></div>


  <!-- ═══ SECTION 12 - SEGREGATION ═══ -->
  <div class="n-h1" id="s-segregation">12. Lead-Acid &amp; NiCd Segregation - Why They CANNOT Share a Room</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Classic Mumbai question:</strong> "Can you keep lead-acid and NiCd batteries in the same room? Why not?"</div></div>

  <div class="n-p"><strong>NO. Lead-acid and NiCd batteries must be stored and charged in SEPARATE rooms (or at minimum, in physically separated, independently ventilated compartments).</strong></div>

  <div class="n-h2">Reasons for Mandatory Segregation</div>
  <ol class="n-steps">
    <li><strong>Acid fume contamination of NiCd electrolyte:</strong> Lead-acid batteries evolve sulphuric acid vapour (H₂SO₄ mist) during charging and especially during equalising. If this acid vapour reaches NiCd cells, it reacts with the KOH electrolyte:
    <span class="n-val">H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O</span>. The KOH is neutralised. NiCd cell capacity is permanently destroyed. The cells must be replaced.</li>
    <li><strong>Alkali fume contamination of lead-acid:</strong> NiCd cells can evolve KOH vapour/mist. If this contacts lead-acid electrolyte (H₂SO₄), it also causes cross-contamination and reduces acidity, degrading lead-acid performance.</li>
    <li><strong>Different ventilation requirements:</strong> Lead-acid rooms must have high-rate ventilation to clear H₂. NiCd ventilation is also required, but the gas hazard profiles differ. Mixed ventilation systems may not adequately clear both.</li>
    <li><strong>Different PPE and maintenance tools:</strong> Tools used for acid batteries contaminated with H₂SO₄ must not be used on NiCd KOH cells. Cross-contamination from tools is sufficient to cause damage over time.</li>
    <li><strong>Emergency response:</strong> In a spillage emergency, acid and alkali neutralise each other violently - generating heat, spattering, and potential personnel injury.</li>
  </ol>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - Segregation:</strong> "Acid and Alkali are chemical enemies. Put them in the same room and they will attack each other - and destroy the NiCd electrolyte. Separate rooms, separate tools, separate ventilation."</div></div>

  <div class="n-h2">Battery Polarisation - One-Liner</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Battery Polarisation:</strong> During discharge, a thin layer of hydrogen gas bubbles forms on the positive plate (cathode) of lead-acid and primary cells. This hydrogen film increases internal resistance and reduces terminal voltage - a temporary effect called polarisation. In lead-acid batteries, the depolariser (MnO₂ in alkaline; the oxidation of Pb to PbO₂ in lead-acid) reacts with hydrogen to remove this film. Polarisation is distinct from sulphation - sulphation is a permanent crystalline deposit; polarisation is a reversible gas-film effect. <strong>Manifestation:</strong> Temporary voltage drop under load that recovers after rest.</div></div>


  <!-- ═══ SECTION 13 - DC SYSTEMS ONBOARD ═══ -->
  <div class="n-h1" id="s-dc-systems">13. DC Systems Onboard - Applications &amp; Voltage Levels</div>

  <div class="n-p">Ships use both AC and DC systems. DC is used where battery backup, precise control, or low-voltage safety is required.</div>

  <table class="n-table">
    <tr><th>DC Voltage Level</th><th>Application / System</th><th>Battery Type</th></tr>
    <tr><td class="ok"><strong>24 VDC</strong></td><td>Control circuits, navigation instruments, PLC I/O, alarm panels, bridge equipment (GMDSS, AIS, ECDIS power backup), EPIRB, emergency lighting in some vessels, UPS battery bus</td><td>Lead-Acid or Li-Ion</td></tr>
    <tr><td class="hl"><strong>12 VDC</strong></td><td>Lifeboat engine starter, rescue boat, portable GMDSS equipment, SART, handheld VHF chargers</td><td>Lead-Acid (flooded or AGM)</td></tr>
    <tr><td class="hl"><strong>110 VDC</strong></td><td>Emergency switchboard (ESB) battery on some older vessels. ACB control circuits (tripping coils). Some US-spec vessels.</td><td>Lead-Acid (large bank)</td></tr>
    <tr><td><strong>48 VDC</strong></td><td>Telecom systems, some navigation equipment, modern Li-Ion ESS intermediate bus</td><td>Li-Ion or Lead-Acid</td></tr>
    <tr><td><strong>400–800 VDC</strong></td><td>Hybrid/electric propulsion DC bus, ESS (energy storage system)</td><td>Li-Ion battery bank</td></tr>
  </table>

  <div class="n-h2">GMDSS Battery Requirements</div>
  <ul class="n-list">
    <li>All GMDSS equipment must have a dedicated battery backup capable of powering the equipment for a minimum of <strong>6 hours</strong> (SOLAS IV/Reg 13).</li>
    <li>Battery must be separate from ship's service battery and emergency switchboard battery.</li>
    <li>Battery must be able to operate the GMDSS equipment from the dedicated battery alone - not dependent on the main supply.</li>
    <li>GMDSS battery test: Switch off mains supply, verify equipment runs on battery for required duration. Check battery charge indicator.</li>
    <li>Battery type: Usually VRLA-AGM for maintenance-free operation in the radio room. Some installations use NiCd for longer cycle life.</li>
  </ul>

  <div class="n-h2">DC Uses Summary - Surveyor Frequency</div>
  <ul class="n-list">
    <li><strong>Navigation lights:</strong> DC circuit (24 V typically), with battery backup in case of MSB failure.</li>
    <li><strong>Emergency lighting:</strong> Battery-backed, 24 V or 110 V DC depending on ship.</li>
    <li><strong>GMDSS (VHF, MF/HF DSC, EPIRB, SART):</strong> Battery backup mandatory.</li>
    <li><strong>Fire detection and alarm system:</strong> Battery-backed 24 V DC control panel.</li>
    <li><strong>Engine room control systems:</strong> 24 V DC for sensors, valves, alarms.</li>
    <li><strong>Steering gear alarm system:</strong> Must have battery backup.</li>
  </ul>


  <!-- ═══ SECTION 14 - DC SHORT CIRCUIT SEVERITY ═══ -->
  <div class="n-h1" id="s-dc-fault">14. DC Short Circuit Severity - Why DC Arcs Are Harder to Extinguish</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>"Why is a DC arc harder to extinguish than an AC arc?"</strong> A conceptual question increasingly asked at Mumbai and ORAL2026 examinations, particularly for high-voltage ESS and traction systems.</div></div>

  <div class="n-h2">AC vs DC Arc Extinguishing - The Core Difference</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr; gap:12px;">
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">AC Arc - Self-Extinguishing</div>
      <div class="card-desc">AC current passes through <strong>zero twice per cycle</strong> (50 Hz → 100 zero crossings per second). At each zero crossing, the arc extinguishes naturally. The circuit breaker or fuse just needs to prevent reignition at the next half cycle. Arc duration is typically very short - microseconds to a few milliseconds before the next zero crossing arrives.</div>
    </div>
    <div class="n-card" style="border-color:var(--red)">
      <div class="card-title">DC Arc - NO Natural Zero Crossing</div>
      <div class="card-desc">DC current has <strong>no zero crossing</strong>. The arc, once struck, sustains itself continuously as long as the voltage source drives current through the ionised plasma channel. The circuit breaker must actively stretch, cool, and extinguish the arc using arc chutes, magnetic blow-out coils, or physical arc elongation. This is a fundamentally harder engineering problem.</div>
    </div>
  </div>

  <div class="n-h2">Consequences for DC Systems</div>
  <ul class="n-list">
    <li><strong>Higher arc energy:</strong> Since the arc does not self-extinguish at zero crossings, a DC fault arc can sustain for much longer, depositing far more energy at the fault point. Result: more severe equipment damage, fire risk, and injury.</li>
    <li><strong>More demanding circuit breakers:</strong> DC circuit breakers must have arc chutes, longer contact travel, and magnetic blow-out systems. A standard AC MCB is NOT suitable for DC use at the same voltage rating. DC-rated breakers are specifically designed for this.</li>
    <li><strong>Voltage derating:</strong> A breaker or fuse rated for 240 V AC may only be rated for 120 V DC. Always check DC voltage rating explicitly.</li>
    <li><strong>ESS safety:</strong> On large shipboard Li-Ion ESS (up to 800 VDC bus), DC arc faults are catastrophic. BMS must detect and interrupt faults within milliseconds. High-speed DC fuses are used as ultimate backup protection.</li>
    <li><strong>Insulation requirement:</strong> DC systems have different insulation requirements - no reactive (capacitive) current to aid self-extinguishing. IR (insulation resistance) testing on DC systems is critical.</li>
  </ul>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid:</strong> "AC has a zero crossing every 10 ms - the arc takes a natural break. DC never crosses zero - the arc burns continuously until the breaker forces it out. This is why DC breakers are bigger, more complex, and why DC fault energy is so much higher for the same fault duration."</div></div>


  <!-- ═══ SECTION 15 - UPS ═══ -->
  <div class="n-h1" id="s-ups">15. UPS Battery Systems</div>

  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr; gap:10px;">
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title">Online UPS (Double Conversion)</div>
      <div class="card-desc"><strong>Power path:</strong> AC → Rectifier (DC) → Inverter (AC). Load ALWAYS runs from inverter. Battery is always on the DC bus.<br><strong>Switchover:</strong> ZERO - mains failure is invisible to the load.<br><strong>Best for:</strong> GMDSS, navigation computers, ECDIS, critical nav equipment.<br><strong>Efficiency:</strong> Lower (~85–92%) - constant conversion loss.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Line-Interactive UPS</div>
      <div class="card-desc"><strong>Power path:</strong> Mains → Autotransformer (AVR tap switching) → Load. Battery only engaged on total mains failure.<br><strong>Switchover:</strong> 2–8 ms (brief transfer time).<br><strong>Best for:</strong> Bridge instrument panels, fire control panel, PLC power supplies - moderate criticality.<br><strong>Advantage:</strong> Protects against sags, surges, brownouts without using battery.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Offline UPS (Standby)</div>
      <div class="card-desc"><strong>Power path:</strong> Mains direct to load. Inverter idle. On failure: switch to battery/inverter.<br><strong>Switchover:</strong> 10–20 ms - some sensitive equipment may reset.<br><strong>Best for:</strong> Low-criticality equipment: desktops, printers, non-critical panels.<br><strong>Cheapest</strong> - least protection.</div>
    </div>
  </div>

  <div class="n-h2">UPS Battery Maintenance Routine</div>
  <ol class="n-steps">
    <li><strong>Visual check:</strong> Inspect for swollen cases, electrolyte leakage, terminal corrosion, cabinet temperature (check ventilation).</li>
    <li><strong>Float voltage check:</strong> Measure across battery terminals. Expected 13.5–13.8 V (12 V VRLA) on float. Outside this range → charger fault or battery degraded.</li>
    <li><strong>Quarterly discharge test:</strong> Simulate mains failure (switch off input). Verify UPS supplies load for specified backup duration. Note time to low-battery alarm. Record result.</li>
    <li><strong>Annual bypass test:</strong> Transfer load to AC mains bypass to service UPS internally without disrupting the connected equipment. Check capacitors, cooling fans, firmware.</li>
    <li><strong>Battery replacement:</strong> Replace VRLA batteries every <strong>3–5 years BEFORE they fail</strong>. Do not wait for failure - proactive replacement. Age is tracked in PMS.</li>
  </ol>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Thermal Degradation Rule (10°C Law) - Critical for Battery Room AC:</strong><br>
  Battery life is strictly tied to ambient temperature. <strong>For every 10°C rise above 25°C, battery life is HALVED.</strong><br>
  A VRLA battery rated 5 years at 25°C → 2.5 years at 35°C → 1.25 years at 45°C.<br>
  The ETO MUST verify battery room air conditioning is operational and set to ≤ 25°C. Record on PMS. A common inspection finding is battery room AC failed for months, with batteries prematurely degraded as a result.</div></div>


  <!-- ═══ SECTION 16 - Li-Ion & ESS ═══ -->
  <div class="n-h1" id="s-lithium">16. Lithium-Ion Batteries &amp; ESS - Safety (Post-2023 Critical)</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand-new exam topic - surveyors now ask specifically about Li-ion ESS on hybrid ships.</strong> Thermal runaway cause/propagation/suppression, off-gas detection, BMS functions, and IEC 62619 are the key areas. Get this section right.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standards:</strong> <span class="n-val">IEC 62619</span> - safety requirements for Li-ion batteries in industrial/maritime applications. Covers overcharge protection, thermal abuse, mechanical shock, BMS integration testing. <span class="n-val">IEC 60092-507</span> - marine electrical installations, shipboard Li-ion storage systems. <span class="n-val">DNV/LR class rules</span> for marine ESS require HIL (Hardware-in-the-Loop) testing of BMS under marine conditions and fire safety hazard analysis (FSHA).</div></div>

  <div class="n-h2">Li-Ion Chemistry - Two Main Types on Ships</div>
  <table class="n-table">
    <tr><th>Chemistry</th><th>Abbreviation</th><th>Cell Voltage</th><th>Advantage</th><th>Application</th></tr>
    <tr><td>Lithium Iron Phosphate</td><td class="ok">LFP</td><td>3.2 V</td><td>Thermally stable, long cycle life, no cobalt</td><td>ESS, hybrid propulsion</td></tr>
    <tr><td>Nickel Manganese Cobalt</td><td class="hl">NMC</td><td>3.6 V</td><td>Higher energy density, more compact</td><td>ESS, UPS, some hybrid systems</td></tr>
    <tr><td>Nickel Cobalt Aluminium</td><td>NCA</td><td>3.6 V</td><td>High energy density</td><td>Rarely marine</td></tr>
  </table>

  <div class="n-h2">Thermal Runaway - The Critical Hazard</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Thermal runaway:</strong> A self-sustaining, self-accelerating exothermic reaction within a Li-ion cell. Once initiated, it CANNOT be stopped by removing the electrical load - the reaction provides its own heat and oxygen.<br><br>
  <strong>Trigger causes:</strong> (a) <strong>Overcharge</strong> - lithium plating on anode; (b) <strong>Over-discharge</strong> - copper dissolution, internal shorts; (c) <strong>External heat</strong> - fire, hot environment; (d) <strong>Mechanical damage</strong> - penetration, crush, vibration-induced micro-fractures; (e) <strong>Manufacturing defect</strong> - internal particle contamination causing microscopic shorts; (f) <strong>Rapid charge/discharge</strong> beyond BMS limits.<br><br>
  <strong>Propagation mechanism:</strong> Cell temperature rises → separator (polyethylene film between anode and cathode) melts at ~130–150°C → anode and cathode make direct contact → internal short circuit → violent exothermic reaction → cell vents/ruptures → hot gases/sparks ignite adjacent cells → chain reaction through the entire battery rack.<br><br>
  <strong>Why CO₂ is ineffective:</strong> Li-ion cells contain internal oxygen (from lithium metal oxide cathode). Smothering with CO₂ cannot remove this oxygen source. The reaction continues even in an inert atmosphere.<br><br>
  <strong>Correct suppression:</strong> Large volumes of water (minimum 50 L per cell rack, often hundreds of litres) applied continuously to cool the cells below reaction temperature and contain propagation to adjacent racks. Water also absorbs toxic off-gases. Some class-approved ESS rooms have <strong>fixed water-based suppression systems</strong> (water mist or deluge) integrated with the BMS alarm.</div></div>


  <!-- ═══ SECTION 17 - Li-Ion OFF-GAS & BMS ═══ -->
  <div class="n-h1" id="s-liion-detail">17. Li-Ion ESS - Off-Gas Chemistry, Detection &amp; BMS</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors now ask about Li-ion off-gas types, BMS requirements, and IEC 62619.</strong></div></div>

  <div class="n-h2">Off-Gas Types by Battery Chemistry</div>
  <table class="n-table">
    <tr><th>Battery Type</th><th>Primary Off-Gas</th><th>Secondary Risk</th><th>LEL / TLV</th></tr>
    <tr><td><strong>LFP (Lithium Iron Phosphate)</strong></td><td class="bad">High volumes of <span class="n-val">Hydrogen (H₂)</span></td><td>Explosive - LEL 4%</td><td>4% (explosive)</td></tr>
    <tr><td><strong>NMC (Nickel Manganese Cobalt)</strong></td><td class="bad">High volumes of <span class="n-val">Carbon Monoxide (CO)</span></td><td>Toxic + explosive</td><td>25 ppm TLV (toxic)</td></tr>
    <tr><td>Both types</td><td class="hl">VOCs (Volatile Organic Compounds) - earliest vented</td><td>Detected by VOC sensors 10+ min before thermal alarm</td><td>Various</td></tr>
    <tr><td>Both types</td><td>CO₂, HF (hydrogen fluoride) during full runaway</td><td class="bad">HF is extremely toxic - corrosive acid vapour</td><td>0.5 ppm TLV (HF)</td></tr>
  </table>

  <div class="n-h2">Off-Gas Detection - Early Warning Sequence</div>
  <ol class="n-steps">
    <li>Stressed Li-ion cell begins venting - VOCs detected first by VOC/aerosol sensors inside the battery enclosure. This gives up to <span class="n-val">10 minutes</span> advance warning BEFORE temperature rises significantly.</li>
    <li>BMS detects off-gas sensor signal → automatically isolates affected battery rack contactors (disconnects from bus).</li>
    <li>High-rate exhaust ventilation triggered - purge ESS room of flammable/toxic gases.</li>
    <li>Alarm to ETO and bridge - crew alerted to prepare fire response without entering ESS room.</li>
    <li>If off-gas escalates to thermal event → temperature sensors confirm → fixed suppression system activates (if fitted) → ETO to assess; use external water firefighting.</li>
  </ol>

  <div class="n-h2">BMS (Battery Management System) - Protection Functions</div>
  <ul class="n-list">
    <li><strong>Cell balancing:</strong> Keeps all cells at equal state of charge - prevents individual cell overcharge or over-discharge. Both active balancing (energy transfer between cells) and passive balancing (resistive dissipation of excess charge) methods used.</li>
    <li><strong>Temperature monitoring:</strong> Per-cell or per-module temperature sensors. Shuts down rack above temperature limit (~45–55°C depending on chemistry).</li>
    <li><strong>Current limiting:</strong> Prevents charge or discharge current exceeding safe C-rate limits. Protects against load surges.</li>
    <li><strong>State of Charge (SoC) management:</strong> Prevents deep discharge below minimum cell voltage (LFP: 2.5 V min; NMC: 3.0 V min). Deep discharge causes copper dissolution and permanent damage.</li>
    <li><strong>State of Health (SoH) monitoring:</strong> Tracks capacity degradation over cycle life. Alerts when SoH drops below 80% (end of useful life threshold).</li>
    <li><strong>Off-gas detection integration:</strong> On detection → automatically isolate rack contactors → trigger high-rate exhaust ventilation.</li>
    <li><strong>Isolation / Contactor control:</strong> Disconnects battery bank from the DC bus on any fault detection - overcurrent, overvoltage, over-temperature, insulation fault, communication loss.</li>
    <li><strong>Communication:</strong> Reports SoC, SoH, alarms, temperatures to ship's alarm management system (IAS) and propulsion control system via CAN bus, Modbus, or Ethernet.</li>
  </ul>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is battery off-gassing and how is it detected and managed? (Kamath, ORAL2026)</strong><br>
  <strong>Ideal Answer:</strong> Before Li-ion thermal runaway, stressed cells vent flammable/toxic off-gases. LFP batteries primarily vent hydrogen (LEL 4%); NMC batteries primarily vent carbon monoxide (toxic at 25 ppm TLV). This venting occurs BEFORE significant heat or smoke rise - it is the earliest possible warning signal. VOC/aerosol sensors inside the battery enclosure detect these gases and give up to 10 extra minutes of warning before a thermal alarm would trigger. On detection, the BMS automatically isolates the affected rack's contactors and triggers high-rate exhaust ventilation. The ETO is alerted to assess the situation and prepare fire response. Firefighting agent: large volumes of water to cool and contain thermal runaway. CO₂ does NOT extinguish Li-ion fires because the cell contains its own oxygen source in the metal oxide cathode.</div></div>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>How do you check the state of charge for Lead-Acid vs NiCd?</td>
      <td>Lead-Acid: use hydrometer to check SG of electrolyte. H₂SO₄ is consumed during discharge → SG drops from ~1.270 to ~1.120. For NiCd: SG does NOT change because KOH is not consumed in the overall reaction → hydrometer is useless. Must measure OCV (~1.25 V per cell = full) or perform a timed load test.</td>
    </tr>
    <tr>
      <td>What is CCA?</td>
      <td>Cold Cranking Amperes. The current a fully charged 12 V battery can supply for 30 seconds at −18°C while maintaining ≥ 7.2 V. Used for lifeboat and rescue boat starter batteries in cold climates. Different from Ah rating - CCA measures burst starting power, not total stored energy.</td>
    </tr>
    <tr>
      <td>Can you accept an emergency battery at 50% capacity?</td>
      <td>No. SOLAS II-1/Reg 43 requires it to supply all emergency loads for the full mandated duration (30 min for cargo ships). At 50% it will fail halfway - leaving the ship without emergency lighting, GMDSS, navigation lights during a blackout. It must be replaced before departure. Notify Chief Engineer and Class.</td>
    </tr>
    <tr>
      <td>What are the hazards in a battery room and how are they controlled?</td>
      <td>H₂ gas evolved during charging - explosive above 4% LEL. Controlled by high-level exhaust ventilation, Ex-rated lighting (switch outside), no naked flames. H₂SO₄ acid spill hazard - controlled with PPE, eyewash station at entrance, acid-resistant trays. Electrical shock - insulated tools, remove jewellery, disconnect negative terminal first.</td>
    </tr>
    <tr>
      <td>Why do we use NiCd batteries in lifeboats instead of Lead-Acid?</td>
      <td>NiCd has far better cold-temperature performance, retaining capacity down to −40°C. Lifeboats may be deployed in extreme cold. NiCd can also be stored in a fully discharged state without sulphation damage, which is important for infrequent-use survival equipment. Lead-acid requires regular charging to prevent irreversible sulphation.</td>
    </tr>
    <tr>
      <td>Why can't you store Lead-Acid and NiCd batteries in the same room?</td>
      <td>Lead-acid batteries emit H₂SO₄ vapour during charging. This acid vapour reacts with the KOH electrolyte in NiCd cells, neutralising it permanently and destroying NiCd capacity. Separate rooms with independent ventilation are mandatory. Separate tools must be used to prevent cross-contamination.</td>
    </tr>
    <tr>
      <td>What is an equalising charge? When is it done?</td>
      <td>A controlled overcharge at ~15.0–15.5 V (for 12 V bank) applied periodically to flooded lead-acid batteries to equalise cell voltages, dissolve sulphation, and mix stratified electrolyte by gassing. Done every 3–6 months, or when individual cell SG readings differ by more than 0.025. NEVER on VRLA/AGM/Gel batteries - they cannot vent gas and will be destroyed by overcharge.</td>
    </tr>
    <tr>
      <td>What is battery polarisation?</td>
      <td>During discharge, hydrogen gas bubbles form on the positive plate, increasing internal resistance and causing a temporary drop in terminal voltage. This is polarisation. In lead-acid batteries, the oxidising cathode reaction removes hydrogen continuously. Distinguished from sulphation (permanent crystalline PbSO₄ deposit) - polarisation is reversible and clears after rest.</td>
    </tr>
    <tr>
      <td>Why is a DC arc harder to extinguish than an AC arc?</td>
      <td>AC current crosses zero 100 times per second (50 Hz) - the arc extinguishes naturally at each zero crossing. DC has no zero crossing - once struck, the arc sustains itself continuously as long as voltage drives current through the ionised plasma. DC circuit breakers must actively stretch and cool the arc using arc chutes and magnetic blow-out coils. Same fault condition in DC causes far more arc energy and equipment damage than in AC.</td>
    </tr>
    <tr>
      <td>The voltmeter on a 12V VRLA battery bank is showing 15V while on charge. Is this normal?</td>
      <td>Not normal for float charging. Voltages: Float = 13.5–13.8 V ✔; Absorption = 14.4–14.7 V ✔; 15 V continuous = charger fault ✘. At 15 V on VRLA: faulty charge controller sending equalise/boost voltage continuously. VRLA cannot vent excess gas - this will cause internal pressure build-up, cell swelling, electrolyte dryout, and early failure. Corrective action: switch charger to manual, replace charge controller. Check battery temperature and inspect for swelling.</td>
    </tr>
    <tr>
      <td>What is VRLA? How does it differ from a flooded lead-acid battery?</td>
      <td>Valve-Regulated Lead-Acid - sealed, maintenance-free. No free liquid electrolyte (absorbed into AGM mat or immobilised as gel). Does not require distilled water top-up. Gas produced during charging is recombined internally. Cannot be equalise-charged. Types: AGM (Absorbent Glass Mat) and Gel. Used in UPS systems, lifeboat start batteries, GMDSS equipment. Flooded lead-acid has free liquid, requires regular top-up, can be equalised, vents gas freely - used in main service banks where maintenance access is available.</td>
    </tr>
    <tr>
      <td>What are the BMS functions for Li-ion batteries?</td>
      <td>Cell balancing (keeps all cells at equal SoC), temperature monitoring per cell (shuts down on over-temperature), current limiting (prevents exceeding safe charge/discharge rates), SoC monitoring (prevents deep discharge), SoH tracking (monitors capacity degradation), off-gas detection integration (isolates rack on gas alarm), and contactor control (disconnects from bus on any fault). BMS communicates with ship's IAS/alarm system and propulsion control via fieldbus.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Lead-Acid vs NiCd SG difference</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Lead-Acid SG CHANGES (H₂SO₄ consumed). NiCd SG DOES NOT CHANGE (KOH not consumed). SG full/discharged: 1.270 / 1.120.</td>
    </tr>
    <tr>
      <td>SOLAS 50% Capacity Rule</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors, ORAL2026</td>
      <td>CANNOT accept. Must supply FULL SOLAS duration (30 min cargo / 36 h passenger). Replace before sailing. Log + notify Class.</td>
    </tr>
    <tr>
      <td>Battery Room Safety</td>
      <td class="hl">⭐⭐⭐⭐⭐ ORAL2026, Kamath</td>
      <td>H₂ &gt; 4% LEL = explosion. Ventilation high/low. Ex-lights. Switch outside. No water extinguisher. Eyewash. Disconnect negative first.</td>
    </tr>
    <tr>
      <td>Lead-Acid &amp; NiCd segregation</td>
      <td class="hl">⭐⭐⭐⭐ Mumbai</td>
      <td>Separate rooms. Acid fumes destroy KOH electrolyte in NiCd cells. Separate tools. Independent ventilation.</td>
    </tr>
    <tr>
      <td>Equalising charge</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>15.0–15.5 V, flooded lead-acid ONLY. Purpose: desulphation + electrolyte mixing. NEVER on VRLA/AGM/Gel.</td>
    </tr>
    <tr>
      <td>VRLA / AGM difference from flooded</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026</td>
      <td>Sealed, maintenance-free, no top-up, no equalise charge allowed. AGM = fibreglass mat; Gel = silica gel. Used in UPS batteries.</td>
    </tr>
    <tr>
      <td>Li-ion thermal runaway</td>
      <td class="hl">⭐⭐⭐⭐⭐ Post-2023 All Surveyors</td>
      <td>Self-sustaining exothermic reaction - cell contains own O₂. CO₂ ineffective. Water only. VOC sensors = earliest warning (+10 min). BMS isolates rack.</td>
    </tr>
    <tr>
      <td>Off-gas types: LFP vs NMC</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026, Kamath</td>
      <td>LFP = H₂ (explosive, LEL 4%). NMC = CO (toxic, 25 ppm TLV). Both: VOCs earliest signal. HF in full runaway - highly toxic.</td>
    </tr>
    <tr>
      <td>CCA Rating Definition</td>
      <td class="hl">⭐⭐⭐⭐ Sudhir, Prakash</td>
      <td>Cold Cranking Amperes. −18°C, 30 seconds, ≥7.2 V maintained (12 V battery). For starting, NOT capacity.</td>
    </tr>
    <tr>
      <td>DC arc severity / no zero crossing</td>
      <td class="hl">⭐⭐⭐ ORAL2026, ESS context</td>
      <td>AC self-extinguishes at zero crossing (100/s at 50 Hz). DC has no zero crossing - arc sustains continuously. DC breakers need arc chutes + magnetic blow-out. Same fault = far more DC arc energy.</td>
    </tr>
    <tr>
      <td>Battery polarisation</td>
      <td class="hl">⭐⭐⭐ Mumbai</td>
      <td>H₂ film on positive plate → increased internal resistance → temporary voltage drop. Reversible (clears on rest). Different from sulphation (permanent PbSO₄ crystals).</td>
    </tr>
    <tr>
      <td>GMDSS battery requirement</td>
      <td class="hl">⭐⭐⭐ ORAL2026, T13 cross</td>
      <td>Minimum 6 hours backup (SOLAS IV/Reg 13). Separate from ship's service battery and ESB battery. Annual test required.</td>
    </tr>
    <tr>
      <td>10°C battery life rule</td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>Battery life HALVES for every 10°C above 25°C. 5-year VRLA at 25°C → 2.5 years at 35°C. Verify battery room AC operational.</td>
    </tr>
    <tr>
      <td>Charging stages (Bulk/Absorption/Float)</td>
      <td class="hl">⭐⭐⭐ Vishwanathan, Deswal</td>
      <td>Bulk = CC (max current, V rises to ~14.4 V). Absorption = CV (V held, current tapers, 80→98%). Float = 13.5–13.8 V (trickle, indefinite standby).</td>
    </tr>
    <tr>
      <td>24 V bank cell count</td>
      <td class="hl">⭐⭐⭐ Classic question</td>
      <td>Lead-acid: 12 cells × 2 V = 24 V. NiCd: 20 cells × 1.2 V = 24 V. SG full = 1.280; discharged = 1.120 (lead-acid).</td>
    </tr>
  </table>

</div>
</div>
</div>
`);
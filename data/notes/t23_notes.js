window.loadNotes("T23", `<div class="view" id="view-notes-t23">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 23 — BatteriesDC</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-1')">ETO MMD ORAL EXAMINA...</button>
    <button class="anc-btn" onclick="jumpTo('s-2')">TOPIC 23: BATTERIES ...</button>
    <button class="anc-btn" onclick="jumpTo('s-3')">1. TEMPERATURE PERFO...</button>
    <button class="anc-btn" onclick="jumpTo('s-4')">2. CYCLE LIFE: 1,000...</button>
    <button class="anc-btn" onclick="jumpTo('s-5')">3. STORAGE IN DISCHA...</button>
    <button class="anc-btn" onclick="jumpTo('s-6')">4. OVERCHARGE TOLERA...</button>
    <button class="anc-btn" onclick="jumpTo('s-7')">5. ROBUST: Less susc...</button>
    <button class="anc-btn" onclick="jumpTo('s-8')">1. MEMORY EFFECT: If...</button>
    <button class="anc-btn" onclick="jumpTo('s-written')">📝 Written Section</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-1">ETO MMD ORAL EXAMINATION</div>
  <div class="body">COMPREHENSIVE STUDY NOTES — v1.0</div>

  <div class="n-h1" id="s-2">TOPIC 23: BATTERIES & DC SYSTEMS</div>
  <div class="body">Function 5  |  Class 2 ETO  |  Mumbai & Noida MMD</div>
  <div class="body">Compiled from 2025–2026 Oral Question Banks — All Surveyors Combined</div>
  <div class="body">────────────────────────────────────────────────────────────</div>
  <div class="body">How Batteries Are Rated — Ampere-Hour (Ah) Explained</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Multiple surveyors — "how is a battery rated?" and "what is Ah?"</div></div>
  <div class="body">Battery capacity rating — Ampere-Hours:</div>
  <div class="body">A battery's capacity is stated in Ampere-Hours (Ah). This tells you how much total charge the battery can deliver before it is fully discharged. 1 Ah = ability to supply 1 Ampere for 1 Hour continuously.</div>
  <div class="body">Practical examples:</div>
  <div class="body">A 100 Ah battery can supply: <span class="n-val">100A</span> for 1 hour, OR <span class="n-val">50A</span> for 2 hours, OR <span class="n-val">10A</span> for 10 hours, OR <span class="n-val">1A</span> for 100 hours (approximately — see C-rate note below).</div>
  <div class="body">The relationship is NOT perfectly linear — batteries lose effective capacity at higher discharge rates due to internal resistance losses.</div>
  <div class="body">C-rate — discharge rate specification:</div>
  <div class="body">C-rate specifies the discharge rate relative to capacity. C10 = complete discharge in 10 hours. C20 = discharge in 20 hours.</div>
  <div class="body">A 100 Ah C20 battery: Rated capacity of 100 Ah when discharged at 100Ah/20h = <span class="n-val">5A</span> over 20 hours.</div>
  <div class="body">Same battery at C1 rate (<span class="n-val">100A</span> discharge): Will only deliver ~60–70 Ah before voltage drops — the high rate causes more voltage drop due to internal resistance.</div>
  <div class="body">This is why high-capacity batteries for engine starting (CCA rating) specify performance differently from UPS batteries (Ah at C10 or C20).</div>
  <div class="body">Why Ah rating matters on ships:</div>
  <div class="body">SOLAS II-1/Reg 43: Emergency batteries must supply all emergency loads for the FULL required duration (typically 30 minutes for cargo ships, 18 hours for passenger ships during flooding).</div>
  <div class="body">Battery capacity test: Class surveyor requires proof that batteries can deliver rated Ah — tested by discharging at rated current and measuring total Ah delivered.</div>
  <div class="body">Design calculation: Identify all emergency loads (kW) → calculate total current → select battery: Ah = current (A) × duration (hours), then add 20% safety margin.</div>
  <div class="body">Lead-Acid Battery — Design, Working, and Specific Gravity</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "explain lead-acid battery construction and how you check its state of charge"</div></div>
  <div class="body">Lead-acid battery is the most common battery type on ships — used for engine starting, emergency lighting, and GMDSS. Understanding its construction is essential for maintenance.</div>
  <div class="body">Construction:</div>
  <div class="body">POSITIVE PLATE: Lead dioxide (PbO₂) — dark brown/chocolate colour. High energy density material.</div>
  <div class="body">NEGATIVE PLATE: Sponge lead (Pb) — grey, porous structure — maximises surface area for reaction.</div>
  <div class="body">ELECTROLYTE: Dilute sulphuric acid (H₂SO₄) and water — typically 30–40% H₂SO₄ by mass.</div>
  <div class="body">SEPARATORS: Porous polyethylene or glass mat separators between plates — prevent short circuit while allowing ion flow.</div>
  <div class="body">CELL CONTAINER: Polypropylene or hard rubber — acid resistant, transparent (allows level checking).</div>
  <div class="body">TERMINAL POST: Lead alloy posts through container lid — positive (red/+) larger diameter, negative (black/−).</div>
  <div class="body">VENT PLUG: Allows hydrogen gas to escape during charging. Some types are fully sealed (VRLA/AGM — no vent).</div>
  <div class="body">Electrochemistry — discharge and charge reactions:</div>
  <div class="body">DISCHARGE (battery supplying current): PbO₂ + Pb + 2H₂SO₄ → 2PbSO₄ + 2H₂O</div>
  <div class="body">Both plates become lead sulphate (PbSO₄). Acid becomes diluted (water forms). Specific gravity DECREASES.</div>
  <div class="body">CHARGE (charger applying current — reverse reaction): 2PbSO₄ + 2H₂O → PbO₂ + Pb + 2H₂SO₄</div>
  <div class="body">Plates restored to PbO₂ and Pb. Acid concentration increases. Specific gravity INCREASES.</div>
  <div class="body">Key consequence: Specific gravity of electrolyte directly indicates state of charge — this is how we measure charge level.</div>
  <div class="body">Specific gravity and state of charge (using hydrometer):</div>
  <div class="body">Fully charged: SG = 1.260–1.285 (varies slightly by temperature and battery design).</div>
  <div class="body">Half charged: SG = 1.200–1.220.</div>
  <div class="body">Fully discharged: SG = 1.150–1.180.</div>
  <div class="body">Temperature correction: SG decreases 0.0007 per <span class="n-val">1°C</span> rise. Standard reference temperature is <span class="n-val">25°C</span>.</div>
  <div class="body">Hydrometer use: Draw electrolyte into float hydrometer — float rises to level indicating SG. Read at eye level. Temperature-correct if ambient is very different from <span class="n-val">25°C</span>.</div>
  <div class="body">IMPORTANT: Never use hydrometer on alkaline batteries (NiCd) — SG does NOT change. This distinction is a favourite exam question.</div>
  <div class="body">Cell voltage and open circuit voltage:</div>
  <div class="body">Fully charged cell: ~<span class="n-val">2.12V</span> open circuit. Fully discharged: ~<span class="n-val">1.90V</span>.</div>
  <div class="body"><span class="n-val">12V</span> monobloc battery: 6 cells × <span class="n-val">2.0V</span> = <span class="n-val">12.0V</span> nominal.</div>
  <div class="body"><span class="n-val">24V</span> battery bank: 12 cells (or two <span class="n-val">12V</span> batteries in series).</div>
  <div class="body">NiCd Battery — Design, Working, and Comparison with Lead-Acid</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "explain a NiCd battery" and "how is it different from lead-acid?"</div></div>
  <div class="body">Nickel-Cadmium (NiCd) Battery:</div>
  <div class="body">POSITIVE PLATE: Nickel oxyhydroxide (NiOOH) — sometimes called nickel hydroxide electrode.</div>
  <div class="body">NEGATIVE PLATE: Cadmium (Cd) — metallic cadmium in porous matrix.</div>
  <div class="body">ELECTROLYTE: Potassium hydroxide (KOH) solution — ALKALINE, approximately 30% KOH in distilled water.</div>
  <div class="body">CELL VOLTAGE: <span class="n-val">1.2V</span> nominal per cell (lower than lead-acid's <span class="n-val">2.0V</span> per cell).</div>
  <div class="body">SPECIFIC GRAVITY: Does NOT change significantly during charge/discharge — KOH electrolyte is not consumed in the reaction. SG remains approximately 1.20–1.25 throughout charge/discharge cycle.</div>
  <div class="body">Electrochemistry:</div>
  <div class="body">DISCHARGE: Cd + 2NiOOH + 2H₂O → Cd(OH)₂ + 2Ni(OH)₂</div>
  <div class="body">CHARGE (reverse): Cd(OH)₂ + 2Ni(OH)₂ → Cd + 2NiOOH + 2H₂O</div>
  <div class="body">The KOH electrolyte participates only indirectly — it provides OH⁻ ions but its overall concentration remains constant. This explains why SG does not change.</div>
  <div class="body">Advantages of NiCd over lead-acid:</div>

  <div class="n-h1" id="s-3">1. TEMPERATURE PERFORMANCE: NiCd retains capacity at low temperatures (-20°C) far better than lead-acid. Essential for lifeboats in cold climates — lifeboat batteries on all ships are often NiCd.</div>

  <div class="n-h1" id="s-4">2. CYCLE LIFE: 1,000–2,000 charge/discharge cycles (lead-acid: 300–500 cycles). Much longer service life.</div>

  <div class="n-h1" id="s-5">3. STORAGE IN DISCHARGED STATE: NiCd can be stored fully discharged without damage — just recharge when needed. Lead-acid stored discharged → sulphation → permanent capacity loss.</div>

  <div class="n-h1" id="s-6">4. OVERCHARGE TOLERANCE: NiCd handles overcharging better than lead-acid — internal chemistry accommodates slight overcharge.</div>

  <div class="n-h1" id="s-7">5. ROBUST: Less susceptible to vibration damage (sealed, solid plates).</div>
  <div class="body">Disadvantages of NiCd:</div>

  <div class="n-h1" id="s-8">1. MEMORY EFFECT: If NiCd battery is repeatedly discharged to 50% and recharged, it "forgets" the remaining 50% and treats it as unavailable. Capacity appears to reduce.</div>
  <div class="body">Solution: Full discharge/charge cycle (conditioning) periodically restores full capacity.</div>

  <div class="n-h1" id="s-9">2. COST: More expensive per Ah than lead-acid.</div>

  <div class="n-h1" id="s-10">3. CADMIUM TOXICITY: Cadmium is highly toxic — disposal requires certified hazardous waste handler. More expensive end-of-life disposal.</div>

  <div class="n-h1" id="s-11">4. LOWER ENERGY DENSITY: NiCd requires more volume and weight for same Ah as modern lithium batteries (though comparable to lead-acid).</div>
  <div class="body">Ship applications of NiCd:</div>
  <div class="body">Emergency lighting battery packs in accommodation — rated for cold temperatures.</div>
  <div class="body">GMDSS portable equipment (EPIRB, SART, handheld VHF) — NiCd rechargeable batteries.</div>
  <div class="body">Lifeboat starting battery — cold weather performance critical.</div>
  <div class="body">UPS for bridge navigation equipment.</div>
  <div class="body">CRITICAL EXAM DISTINCTION — remember this:</div>
  <div class="body">Lead-acid: SG CHANGES with charge state → use hydrometer to check state of charge.</div>
  <div class="body">NiCd and Alkaline: SG does NOT change → CANNOT use hydrometer. Use voltmeter (open circuit voltage) or capacity test to check state of charge.</div>
  <div class="body">Alkaline Battery (Primary) — Components and Characteristics</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked about alkaline batteries — "can you check specific gravity of an alkaline battery?"</div></div>
  <div class="body">Primary alkaline batteries (non-rechargeable disposable type):</div>
  <div class="body">ANODE (negative): Zinc (Zn) — powdered zinc in gel for maximum surface area.</div>
  <div class="body">CATHODE (positive): Manganese dioxide (MnO₂).</div>
  <div class="body">ELECTROLYTE: Potassium hydroxide (KOH) — alkaline (hence the name).</div>
  <div class="body">SEPARATOR: Non-woven fabric soaked in electrolyte.</div>
  <div class="body">CELL VOLTAGE: <span class="n-val">1.5V</span> nominal (drops during discharge).</div>
  <div class="body">CAPACITY: Commonly available from AA (2-3 Ah) to D-cell (15–20 Ah).</div>
  <div class="body">Key characteristics:</div>
  <div class="body">NON-RECHARGEABLE: Primary cell — chemical reaction is not easily reversible. Attempting to recharge can cause leakage, rupture, or fire.</div>
  <div class="body">SPECIFIC GRAVITY: DOES NOT CHANGE during discharge. KOH concentration remains approximately constant. Hydrometer is USELESS for checking state of charge.</div>
  <div class="body">State of charge check: Only method — measure open circuit voltage. Full: ~<span class="n-val">1.5V</span>. Half: ~<span class="n-val">1.35V</span>. Discharged: <<span class="n-val">1.1V</span>. (Or conduct load test.)</div>
  <div class="body">Self-discharge: Very low — shelf life 5–10 years (stored below <span class="n-val">25°C</span>). Unlike lead-acid which self-discharges ~3–5% per month.</div>
  <div class="body">Low temperature: Good performance down to -<span class="n-val">20°C</span> (better than lead-acid, similar to NiCd).</div>
  <div class="body">Ship applications of alkaline primary batteries:</div>
  <div class="body">Emergency torches and hand-lamps — replaceable cells.</div>
  <div class="body">SART (Search and Rescue Transponder): Uses lithium primary or alkaline cells with 5–8 year shelf life.</div>
  <div class="body">Handheld VHF radios: Primary alkaline as backup if rechargeable battery fails.</div>
  <div class="body">Smoke and CO detectors in accommodation.</div>
  <div class="body">Various portable instruments (flow meters, gas detectors).</div>
  <div class="body">CCA — Cold Cranking Amperes (Battery Starting Rating)</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "what is CCA rating on a starter battery?"</div></div>
  <div class="body">What is CCA?</div>
  <div class="body">CCA = Cold Cranking Amperes. The internationally standardised performance rating for starter batteries, measuring their ability to start an engine in cold conditions. It defines the maximum current a fully charged battery can deliver for 30 seconds at −<span class="n-val">18°C</span> (0°F) while maintaining terminal voltage above <span class="n-val">7.2V</span> for a <span class="n-val">12V</span> battery (or <span class="n-val">14.4V</span> for <span class="n-val">24V</span>).</div>
  <div class="body">Why cold temperature is critical:</div>
  <div class="body">Cold temperature INCREASES battery internal resistance → reduces available current for same voltage.</div>
  <div class="body">Cold temperature INCREASES engine oil viscosity → engine needs MORE torque (more current) to crank.</div>
  <div class="body">Both effects combine at low temperature — double penalty. A battery adequate at <span class="n-val">25°C</span> may completely fail at -<span class="n-val">18°C</span>.</div>
  <div class="body">This is why a lifeboat battery rated 400 CCA in a tropical climate might fail to start the engine at -<span class="n-val">18°C</span> — the rating tells you exactly what to expect in the worst case.</div>
  <div class="body">CCA values and applications:</div>
  <div class="body">Small lifeboat diesel (e.g. <span class="n-val">30 kW</span>): 400–600 CCA minimum.</div>
  <div class="body">Medium auxiliary engine (e.g. <span class="n-val">250 kW</span>): 800–1000 CCA.</div>
  <div class="body">Large diesel generator starting battery: 1000–1500 CCA (often <span class="n-val">24V</span>, 2× <span class="n-val">12V</span> batteries in series).</div>
  <div class="body">Emergency generator battery: Must be rated for worst expected ambient temperature AND generator starting requirements.</div>
  <div class="body">Related ratings — understand the differences:</div>
  <div class="body">MCA (Marine Cranking Amperes): Measured at <span class="n-val">0°C</span> instead of -<span class="n-val">18°C</span>. MCA > CCA for same battery. Used in some marine specifications.</div>
  <div class="body">RC (Reserve Capacity): Minutes a fully charged <span class="n-val">12V</span> battery can supply <span class="n-val">25A</span> before dropping below <span class="n-val">10.5V</span>. Indicates how long battery supports electronics if alternator fails.</div>
  <div class="body">Ah (Ampere-Hours): Deep cycle capacity — not the same as starting ability. A high-Ah deep cycle battery may have lower CCA than a smaller starting battery.</div>
  <div class="body">ETO exam answer on CCA: "CCA is the cold cranking ampere rating — the current a battery can supply for 30 seconds at minus <span class="n-val">18°C</span> while maintaining useful voltage. Higher CCA means better cold-start performance. For lifeboat and emergency generator batteries, CCA must be adequate for the coldest service temperature in the ship's trading area."</div>
  <div class="body">Battery Ordering — Complete Specification</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "how do you order a replacement battery for the lifeboat/emergency generator?"</div></div>
  <div class="body">When ordering a marine battery, provide ALL of the following to the supplier to ensure you receive the correct replacement:</div>

  <div class="n-h1" id="s-12">1. BATTERY TYPE: Lead-acid (flooded/wet cell), VRLA/AGM (sealed lead-acid), Gel, NiCd, Li-ion. Important — same chemistry as original.</div>

  <div class="n-h1" id="s-13">2. VOLTAGE: 6V, 12V, or 24V. (Or specify cell voltage and number of cells for large banks.)</div>

  <div class="n-h1" id="s-14">3. CAPACITY: Ah rating at specified C-rate (e.g. 100 Ah at C20). For UPS/emergency lighting: specify Ah at required discharge time.</div>

  <div class="n-h1" id="s-15">4. STARTING PERFORMANCE (for starter batteries): CCA rating at −18°C (e.g. 800 CCA). Or MCA at 0°C if specified.</div>

  <div class="n-h1" id="s-16">5. PHYSICAL DIMENSIONS: Length × Width × Height in mm. Critical — must fit existing battery box/tray.</div>

  <div class="n-h1" id="s-17">6. TERMINAL TYPE: Top-post (bolt terminals), side terminal (bolt threads in case), L-shaped (threaded stud). Incorrect terminal means cables won't connect.</div>

  <div class="n-h1" id="s-18">7. TERMINAL POLARITY LAYOUT: Left-positive / Right-negative or Right-positive / Left-negative when viewed from front. Incorrect polarity layout means cables cross and may cause short circuit.</div>

  <div class="n-h1" id="s-19">8. MAINTENANCE TYPE: Flooded (requires topping up with distilled water, has removable vent caps) or Sealed/VRLA (maintenance-free, cannot top up, recombinant gas design).</div>

  <div class="n-h1" id="s-20">9. TEMPERATURE RANGE: Specify minimum expected ambient temperature — especially for lifeboat batteries that may be stored in cold climates.</div>

  <div class="n-h1" id="s-21">10. MARINE/SOLAS APPROVAL: For life-saving appliance batteries (GMDSS, lifeboat, emergency generator) — must be type-approved. State certificate requirement: "IMO SOLAS-compliant, class-approved (Lloyd's/DNV/ABS etc)"</div>

  <div class="n-h1" id="s-22">11. SHELF LIFE REQUIREMENT: Some batteries (SART, EPIRB) have mandatory minimum shelf life — specify this for replacements.</div>

  <div class="n-h1" id="s-23">12. HAZMAT SHIPPING REQUIREMENTS: NiCd and lithium batteries have shipping restrictions (IATA/IMDG classifications). Note if ordering for air freight.</div>
  <div class="body">Battery at Half Capacity — SOLAS Acceptance Criteria</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "the emergency battery is at 50% capacity — can you accept it?"</div></div>
  <div class="body">Short answer: NO — a battery at 50% capacity cannot be accepted for emergency service under SOLAS.</div>
  <div class="body">Why not:</div>
  <div class="body">SOLAS II-1/Reg 43 requires the emergency source of electrical power to supply ALL emergency services for the FULL required duration — typically 30 minutes for general cargo ships, 18 hours for passenger ships.</div>
  <div class="body">A battery at 50% capacity can only supply HALF the required duration.</div>
  <div class="body">If a blackout occurs and the emergency battery provides only 15 minutes (instead of required 30 minutes) before failing — the ship is left without navigation lights, fire detection, bilge pumps, and GMDSS — a potentially fatal situation.</div>
  <div class="body">Required action when battery capacity is found degraded:</div>

  <div class="n-h1" id="s-24">1. If capacity is 80–100% of rated: ACCEPTABLE. Monitor more frequently.</div>

  <div class="n-h1" id="s-25">2. If capacity is 50–80%: FLAG for early replacement. Ship may still sail but replacement must be ordered urgently. Class surveyor notification may be required.</div>

  <div class="n-h1" id="s-26">3. If capacity is below 50%: MUST REPLACE before vessel sails. Battery is not fit for SOLAS purpose.</div>

  <div class="n-h1" id="s-27">4. Emergency: If shore is available — arrange emergency battery replacement before departure. If at sea with degraded battery discovered — notify Master, notify C/E, notify company/DPA, increase monitoring, identify alternative emergency power sources, log all actions taken.</div>
  <div class="body">How battery capacity is measured:</div>
  <div class="body">Capacity test (discharge test): Fully charge battery. Rest 1 hour. Discharge at rated current (Ah/10 or as specified) while measuring voltage. Stop when terminal voltage reaches cut-off voltage (<span class="n-val">10.5V</span> for <span class="n-val">12V</span> battery). Calculate: Ah delivered = current × time.</div>
  <div class="body">Compare delivered Ah against rated capacity. Example: 100 Ah battery delivers 45 Ah → 45% capacity → NOT acceptable.</div>
  <div class="body">Frequency: Class requires capacity test annually (or as specified in class rules). Test result must be recorded with date and signature.</div>
  <div class="body">Exam answer: "A battery at 50% capacity cannot be accepted for emergency service under SOLAS. The SOLAS requirement is that emergency batteries supply all emergency loads for the full required period. At 50% capacity, only half the required duration can be met. The battery must be replaced before the ship sails."</div>
  <div class="body">Battery Room Safety Requirements</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "what are the safety requirements for the battery room?"</div></div>
  <div class="body">Battery rooms are HAZARDOUS AREAS. Lead-acid and NiCd batteries both produce HYDROGEN GAS during charging (from electrolysis of water in the electrolyte). Hydrogen is highly flammable (LEL 4%, UEL 75% in air) and accumulates at the ceiling (lighter than air).</div>
  <div class="body">Key safety requirements (based on IEC 60092, class rules, and SOLAS):</div>

  <div class="n-h1" id="s-28">1. VENTILATION: Forced or natural ventilation designed to prevent accumulation of hydrogen above 25% of LEL (Lower Explosive Limit). Minimum ventilation rate calculated per number of cells and charging current. Inlet at low level, exhaust at high level (hydrogen rises). Ventilation must be independent — not shared with other spaces.</div>

  <div class="n-h1" id="s-29">2. NO IGNITION SOURCES: No non-Ex light switches, sockets, fuses, or electrical equipment INSIDE battery room. All electrical equipment must be Ex-certified (Ex e or Ex d for Zone 1/2).</div>

  <div class="n-h1" id="s-30">3. EX-RATED LIGHTING: All light fixtures Ex e or Ex d certified. Controlled by switch OUTSIDE the room.</div>

  <div class="n-h1" id="s-31">4. ACID/ALKALI-RESISTANT FLOOR: Lead-acid acid spillage: floor must resist sulphuric acid. NiCd KOH spillage: floor must resist alkaline. Typically: acid-resistant tiles, painted concrete, or drip tray.</div>

  <div class="n-h1" id="s-32">5. EYEWASH STATION: Immediately outside or just inside battery room — in case of electrolyte splashing in eyes. Running water or eyewash bottle.</div>

  <div class="n-h1" id="s-33">6. EMERGENCY SHOWER (large rooms): Where large battery banks are maintained, shower capability required.</div>

  <div class="n-h1" id="s-34">7. FIRE EXTINGUISHER: CO₂ or dry powder type at entrance. NOT water — water reacts with acid, spreads corrosive liquid and can cause arc flash in live terminals.</div>

  <div class="n-h1" id="s-35">8. PPE REQUIREMENT POSTED: Sign on door: "Safety glasses, acid-resistant gloves, and apron mandatory." PPE must be available at or near the room.</div>

  <div class="n-h1" id="s-36">9. NO SPARKS NEAR TERMINALS: Use insulated tools only. Remove metallic wrist watches, bangles, rings before entering. Short-circuit between battery terminals causes explosive current — melts tools, can ignite hydrogen.</div>

  <div class="n-h1" id="s-37">10. SELF-CLOSING FIRE DOOR: Battery room door must be fire-rated (A-class on SOLAS ships) and self-closing.</div>

  <div class="n-h1" id="s-38">11. IDENTIFICATION: Door must be marked "BATTERY ROOM — NO NAKED FLAMES — NO SMOKING".</div>
  <div class="body">UPS Battery Systems — Ship Applications and Maintenance</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> Surveyor asked "explain a UPS on a ship — what batteries does it use and how do you maintain it?"</div></div>
  <div class="body">What is UPS?</div>
  <div class="body">UPS = Uninterruptible Power Supply. Provides continuous power to critical equipment during interruption of the main AC supply — bridge switchboard failure, port power interruption, or short blackout. The UPS prevents data loss, system restart delays, and gaps in safety-critical functions.</div>
  <div class="body">Ship UPS applications:</div>
  <div class="body">GMDSS equipment: DSC controller, satellite terminal (Inmarsat), MF/HF radio — SOLAS IV requires independent power supply for 6 hours (reduced load) or 1 hour (full load).</div>
  <div class="body">ECDIS and chart systems: Continuous power prevents chart data loss and navigation interruption.</div>
  <div class="body">VDR (Voyage Data Recorder): Must continuously record — any power gap = data loss.</div>
  <div class="body">Bridge alarm and monitoring system: Loss of alarm system during blackout is unacceptable — UPS covers transition.</div>
  <div class="body">Autopilot and heading control: Short power interruption causes course deviation.</div>
  <div class="body">Engine room automation system (DCS/PLC): Power interruption may cause automatic trips and false alarms.</div>
  <div class="body">UPS types:</div>
  <div class="body">ONLINE (double conversion): AC input → rectified to DC → charges battery AND powers inverter → inverts back to AC for load. Load ALWAYS runs from inverter — no switchover delay. Battery is always in circuit. Best for sensitive equipment.</div>
  <div class="body">OFFLINE (standby): Normally load runs direct from AC mains. On failure → automatic switch to battery/inverter. Switchover gap ~10–<span class="n-val">20ms</span>. Acceptable for most equipment but not ideal for very sensitive loads.</div>
  <div class="body">LINE-INTERACTIVE: Continuously regulates voltage from mains. On failure → battery + inverter. Compromise between online and offline.</div>
  <div class="body">Battery type in ship UPS:</div>
  <div class="body">VRLA (Valve-Regulated Lead-Acid) / AGM: Most common in ship UPS. Sealed — no electrolyte topping up. Absorbed glass mat retains electrolyte — no spill risk even if inverted. Maintenance-free under normal operation.</div>
  <div class="body">NiCd: Used in older UPS, more expensive but longer life and better temperature performance.</div>
  <div class="body">UPS maintenance procedure:</div>

  <div class="n-h1" id="s-39">1. VISUAL CHECK (monthly): Inspect battery pack for swelling, leakage, heat damage. Check charger indicator status.</div>

  <div class="n-h1" id="s-40">2. BATTERY VOLTAGE (monthly): Measure float voltage — VRLA 12V battery float: 13.5–13.8V. If low → charger fault or battery failing.</div>

  <div class="n-h1" id="s-41">3. DISCHARGE TEST (quarterly or annually): Simulate mains failure — switch UPS to battery mode. Time how long it supplies load before low battery cutoff. Compare with rated backup time. Record result.</div>

  <div class="n-h1" id="s-42">4. BATTERY REPLACEMENT: VRLA batteries in UPS: expected life 3–5 years (temperature dependent — for every 10°C above 25°C, life halves). Replace before failure, not after.</div>

  <div class="n-h1" id="s-43">5. BYPASS TEST: Operate manual bypass — transfer load to direct AC supply. Verify load continues without interruption. Then restore UPS. This allows UPS internal servicing without switching off the load.</div>

  <div class="n-h1" id="s-44">6. FIRMWARE/SOFTWARE: Check UPS management software for logged events, battery health indicators, fault history.</div>


  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development.</div></div>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>No Surveyor Q&A available</strong> for this topic yet.</div></div>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📋 Quick Revision</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body">Revision tables coming soon.</div></div>

  </div>
</div>
</div>`);

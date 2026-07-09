window.loadNotes("T20", `<div class="view" id="view-notes-t20">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T20')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 20 - Ship Construction & Stability</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
      <span class="tag tag-purple">Exam Verified</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-hull')">Hogging &amp; Sagging</button>
    <button class="anc-btn" onclick="jumpTo('s-structure')">Ship Structure</button>
    <button class="anc-btn" onclick="jumpTo('s-framing')">Framing &amp; Double Bottom</button>
    <button class="anc-btn" onclick="jumpTo('s-panting')">Panting &amp; Pounding</button>
    <button class="anc-btn" onclick="jumpTo('s-stress')">Stress &amp; Fatigue</button>
    <button class="anc-btn" onclick="jumpTo('s-stability')">Stability &amp; GM</button>
    <button class="anc-btn" onclick="jumpTo('s-fse')">Free Surface Effect</button>
    <button class="anc-btn" onclick="jumpTo('s-cofferdam')">Cofferdam</button>
    <button class="anc-btn" onclick="jumpTo('s-esb')">ESB &amp; 2 ACBs</button>
    <button class="anc-btn" onclick="jumpTo('s-seqstart')">Sequential Start</button>
    <button class="anc-btn" onclick="jumpTo('s-container')">CSC &amp; Container Fire</button>
    <button class="anc-btn" onclick="jumpTo('s-drydock')">Drydock Preps</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked (Kamath, Deswal, Sanjib, Mumbai Bank):</strong> IEC motor frame number decoding. Sequential starting timings. ESB connected equipment &amp; 2 ACBs interlock. Hogging vs sagging - keel stress states. GM minimum &amp; loll condition. CSC convention. Drydock ETO checklist. Free surface effect. Cofferdam purpose.</div></div>


  <!-- ═══ SECTION 1 - HOGGING & SAGGING ═══ -->
  <div class="n-h1" id="s-hull">⚓ 1. Hogging, Sagging, Shear Force &amp; Bending Moment</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">SAGGING</div>
      <div class="card-val">🛶 Hammock Shape</div>
      <div class="card-desc">Centre buoyancy &lt; centre weight. Ends up, middle down. Caused by wave trough amidships or heavy midship cargo.<br><br><strong>Keel → TENSION (stretched)</strong><br><strong>Deck → COMPRESSION (squeezed)</strong></div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">HOGGING</div>
      <div class="card-val">🌉 Bridge Arch Shape</div>
      <div class="card-desc">Centre buoyancy &gt; centre weight. Ends down, middle up. Caused by wave crest amidships or heavy cargo at bow/stern.<br><br><strong>Keel → COMPRESSION (squeezed)</strong><br><strong>Deck → TENSION (stretched)</strong></div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory trick - KEEL stress:</strong> <em>Sag = Stretch keel</em> (both S). <em>Hog = keel under Compression</em> (H→C). Deck is always opposite to keel.</div></div>

  <div class="n-h2">Shear Force &amp; Bending Moment</div>
  <ul class="n-list">
    <li><strong>Shear Force (SF):</strong> The internal vertical sliding force at any cross-section of the hull, caused by imbalance between local weight and local buoyancy. Maximum value occurs <em>at the bulkheads</em> (load transfer points).</li>
    <li><strong>Bending Moment (BM):</strong> The rotational bending tendency at a cross-section. Maximum BM occurs where SF = zero - typically <em>amidships</em>. This is the most critical stress point in the hull girder.</li>
    <li><strong>Loading Computer:</strong> Calculates SF and BM continuously during cargo operations. If SF or BM exceeds class limits, loading must be adjusted to prevent permanent hull deformation or fracture.</li>
  </ul>

  <div class="n-formula">SF<sub>max</sub> occurs at bulkheads &nbsp;|&nbsp; BM<sub>max</sub> occurs where SF = 0 (amidships)<div class="label">Hull Girder Stress Locations</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why the ETO needs to know this:</strong> During cargo loading, if heavy cargo is placed amidships with empty ends, sagging increases. If heavy cargo at ends with empty middle, hogging results. Loading computers alert the Officer (and ETO during cargo ops) if class-approved SF/BM limits are exceeded. Hull-mounted strain gauges (part of the hull monitoring system) relay data to a display on the bridge - the ETO maintains these sensors and displays.</div></div>


  <!-- ═══ SECTION 2 - SHIP STRUCTURE ═══ -->
  <div class="n-h1" id="s-structure">🔩 2. Ship Structure - Bulkheads, Keel &amp; Load Line</div>

  <div class="n-h2">Bulkheads</div>
  <table class="n-table">
    <tr><th>TYPE</th><th>PURPOSE</th><th>STANDARD / KEY FACT</th></tr>
    <tr><td><strong>Watertight</strong></td><td>Prevents spread of flooding between compartments</td><td class="hl">Collision bulkhead: <span class="n-val">5–8% LBP</span> from bow</td></tr>
    <tr><td><strong>A-Class Fire</strong></td><td>Resists fire spread; structural integrity maintained</td><td class="hl">A-60: <span class="n-val">60 min</span> · A-30: <span class="n-val">30 min</span> · A-0: structural only</td></tr>
    <tr><td><strong>B-Class Fire</strong></td><td>Secondary fire barrier; non-structural partitions</td><td>B-15: <span class="n-val">15 min</span> · B-0: no fire rating</td></tr>
    <tr><td><strong>Structural</strong></td><td>Adds transverse hull strength, resists racking</td><td>8–16 mm plate thickness</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>A-60 / A-30 / B-class divisions</strong> - SOLAS II-2 classification: An <strong>A-class</strong> division is constructed of steel or equivalent material, capable of preventing smoke and flame passage for <span class="n-val">60 min (A-60)</span> or <span class="n-val">30 min (A-30)</span>, insulated so that the unexposed side temperature does not rise more than <span class="n-val">139°C</span> above ambient within the stated period. A <strong>B-class</strong> division (bulkhead, deck, ceiling) prevents flame passage for <span class="n-val">15 min (B-15)</span> - typically lightweight cabin dividers. <strong>C-class</strong> has no fire resistance requirement. Engine room to accommodation boundaries are A-60.</div></div>

  <div class="n-h2">Keel Types</div>
  <ul class="n-list">
    <li><strong>Flat Plate Keel:</strong> Modern standard - wide flat plate providing structural base. Easy drydocking.</li>
    <li><strong>Bar Keel:</strong> Older type - solid bar projecting below the hull. Better on grounding but heavy and restricts shallow-water operations.</li>
    <li><strong>Bilge Keel:</strong> Fin-like strakes welded at the bilge turn - reduces rolling (anti-roll) by hydrodynamic resistance. Not a structural keel but essential for comfort and cargo safety.</li>
  </ul>

  <div class="n-h2">Load Line (Plimsoll Mark) - SOLAS/Load Line Convention</div>
  <table class="n-table">
    <tr><th>MARK</th><th>ZONE / CONDITION</th><th>SIGNIFICANCE</th></tr>
    <tr><td class="ok"><strong>TF</strong></td><td>Tropical Fresh Water</td><td>Deepest allowed loading - warm, low-density water</td></tr>
    <tr><td class="ok"><strong>F</strong></td><td>Fresh Water</td><td>Rivers/harbours - low density, higher buoyancy needed</td></tr>
    <tr><td><strong>T</strong></td><td>Tropical Salt Water</td><td>Tropical ocean trade routes</td></tr>
    <tr><td class="hl"><strong>S</strong></td><td>Summer (Standard Reference)</td><td>Baseline mark - all others measured from S</td></tr>
    <tr><td><strong>W</strong></td><td>Winter</td><td>Colder, denser seas - slightly less loading allowed</td></tr>
    <tr><td class="bad"><strong>WNA</strong></td><td>Winter North Atlantic</td><td>Harshest zone - most conservative loading limit</td></tr>
  </table>

  <div class="n-p"><strong>FWA (Fresh Water Allowance):</strong> Amount by which the load line is raised in fresh water compared to salt water. FWA (mm) = Displacement ÷ (4 × TPC). Ships load deeper in fresh water because fresh water density (1000 kg/m³) is less than salt water (1025 kg/m³).</div>

  <div class="n-h2">Ship Frame Number</div>
  <ul class="n-list">
    <li>Transverse ribs (frames) are numbered from <strong>aft to forward (0 at stern)</strong>. Every frame is typically spaced <span class="n-val">600–900 mm</span> apart.</li>
    <li>Used to identify exact locations for cable runs, pipe routes, compartment boundaries. E.g., "Frame 80 Port Side, 2 m above keel" is a precise address on the ship.</li>
    <li>The ETO uses frame numbers when recording cable routes in the electrical plan and when reporting damage locations to Classification Society surveyors.</li>
  </ul>


  <!-- ═══ SECTION 3 - FRAMING & DOUBLE BOTTOM ═══ -->
  <div class="n-h1" id="s-framing">🔩 3. Framing Systems &amp; Double Bottom</div>

  <div class="n-h2">Transverse vs Longitudinal Framing</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">TRANSVERSE FRAMING</div>
      <div class="card-val">Ribs across the beam</div>
      <div class="card-desc">Frames run across the ship (athwartships). Good resistance to <strong>hydrostatic pressure</strong> (water pushing inward on sides). Used in: bow, stern, engine room - areas of concentrated loads and complex shape. Standard on general cargo and older vessels.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">LONGITUDINAL FRAMING</div>
      <div class="card-val">Stiffeners along the length</div>
      <div class="card-desc">Frames run fore-and-aft. Superior resistance to <strong>hogging/sagging bending moment</strong> (the dominant stress in long ships). Used in: parallel midbody of tankers, bulk carriers, container ships. Standard on vessels &gt;200 m.</div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Rule of thumb:</strong> Long ships (tankers, bulkers) → longitudinal framing amidships for bending resistance. Short/complex-shaped sections (bow, stern, ER) → transverse framing for hydrostatic and shear resistance. Modern ships combine both - <strong>combined framing system</strong>.</div></div>

  <div class="n-h2">Double Bottom - Purpose &amp; Construction</div>
  <ul class="n-list">
    <li><strong>Definition:</strong> A watertight space between the outer hull plating and the inner bottom plating. Typically <span class="n-val">1–2 m</span> deep on large vessels.</li>
    <li><strong>Structural purpose:</strong> Provides enormous longitudinal bending stiffness - both inner and outer plates act as flanges of the hull girder beam, significantly increasing the second moment of area.</li>
    <li><strong>Safety (SOLAS/MARPOL):</strong> If the outer bottom is holed by grounding or collision, flooding is limited to the double-bottom space only - inner bottom intact, cargo and machinery protected. MARPOL Annex I requires double hull/double bottom on oil tankers to prevent pollution from minor groundings.</li>
    <li><strong>Stowage:</strong> Used as tanks for fuel oil (bunkers), ballast water, fresh water, and diesel oil. The ETO must be aware of fuel tank boundaries in the double bottom when planning cable runs through tank tops.</li>
    <li><strong>Girders &amp; Floors:</strong> The double-bottom structure consists of <em>centre girder</em> (vertical plate along centreline), <em>side girders</em> (parallel longitudinals), and <em>floors</em> (transverse plates). Together they form a cellular, box-like structure of great rigidity.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Enclosed space hazard - Double Bottom Tanks:</strong> Double-bottom tanks are enclosed spaces. Before entry: gas-free certificate required, O₂ ≥19.5%, toxic gases ≤10% LEL, continuous monitoring, standby person outside, lifeline, communication. Refer to T22 Permit to Work procedure.</div></div>


  <!-- ═══ SECTION 4 - PANTING & POUNDING ═══ -->
  <div class="n-h1" id="s-panting">⚓ 4. Panting &amp; Pounding - Bow Structure</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">PANTING</div>
      <div class="card-val">In-out flexing of shell plating</div>
      <div class="card-desc">As ship moves forward, wave pressure alternately increases and decreases on bow and stern shell plating, causing it to flex in and out like a drum skin. Occurs at bow (most severe) and sometimes stern. Remedy: <strong>panting beams</strong> (horizontal stiffeners) and <strong>panting stringers</strong> fitted at the bow to resist the flexing.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">POUNDING (Slamming)</div>
      <div class="card-val">Bow emerging then crashing</div>
      <div class="card-desc">In heavy head seas, the bow lifts clear of the water and then crashes back down with enormous impact force - the flat underwater bow area hits the water surface. Creates shock loads through the entire bow structure. Remedy: fitted with <strong>panting plates</strong> (heavier plating amidships fore-body) and <strong>breast hooks</strong> at the bow. Ship speed is reduced in heavy weather to prevent structural damage.</div>
    </div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ETO relevance:</strong> Pounding and panting create vibration and impact loads that can fatigue-crack cable trays, loosen terminal connections, and stress hull cable penetrations in the bow area (e.g. echo sounder transducer cables, sonar cables, bow thruster power cables). After heavy weather, inspect cable supports and penetrations in the forward sections.</div></div>


  <!-- ═══ SECTION 5 - STRESS & FATIGUE ═══ -->
  <div class="n-h1" id="s-stress">⚙️ 5. Stress, Strain &amp; Fatigue in the Hull</div>

  <div class="n-h2">Basic Stress &amp; Strain</div>
  <div class="n-formula">Stress (σ) = Force / Area &nbsp;&nbsp;&nbsp; [N/m² or Pa]<div class="label">Definition of Stress</div></div>
  <div class="n-formula">Strain (ε) = Change in Length / Original Length &nbsp;&nbsp;&nbsp; [dimensionless]<div class="label">Definition of Strain</div></div>
  <div class="n-formula">Young's Modulus (E) = Stress / Strain &nbsp;&nbsp;&nbsp; For steel E ≈ 200 GPa<div class="label">Elastic relationship - steel returns to original shape if stress is below yield point</div></div>

  <ul class="n-list">
    <li><strong>Yield Point:</strong> The stress beyond which steel deforms permanently. For ship steel typically <span class="n-val">235–355 MPa</span>. Below yield: elastic deformation (recovers). Above yield: plastic deformation (permanent).</li>
    <li><strong>Tensile stress:</strong> Material being pulled apart (keel in sagging). <strong>Compressive stress:</strong> Material being squeezed (keel in hogging). <strong>Shear stress:</strong> Material sliding - at neutral axis of hull girder.</li>
  </ul>

  <div class="n-h2">Fatigue &amp; Crack Propagation</div>
  <ul class="n-list">
    <li><strong>Fatigue:</strong> Failure under repeated cyclic loading at stress levels well below the static yield point. Ships experience millions of load cycles from wave action over their service life. Cracks initiate at stress concentrations - <strong>hatch corners, notches, weld toes, cut-outs for pipes/cables</strong>.</li>
    <li><strong>Crack Propagation:</strong> Once initiated, a fatigue crack grows with each load cycle. Growth rate follows a power law (Paris Law). Crack growth accelerates as the remaining section becomes smaller, eventually leading to fast fracture.</li>
    <li><strong>Detection:</strong> Magnetic particle inspection (MPI) or dye-penetrant testing (DPT) during surveys. Ultrasonic testing (UT) for sub-surface cracks. Hull monitoring systems with strain gauges can detect abnormal stress events.</li>
    <li><strong>Prevention:</strong> Smooth weld profiles at hull-to-frame joints. Rounded hatch corners (no sharp square corners). Regular survey inspection. ETO role: ensure hull monitoring displays and strain gauges are operational and calibrated.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Cable penetrations create stress concentrations.</strong> When cables pass through frames or hull plates, the cut-out creates a notch - a potential fatigue crack initiation site. All hull penetrations must use approved fittings (stuffing glands, watertight glands) and the hole must be properly reinforced per the ship's drawing.</div></div>


  <!-- ═══ SECTION 6 - STABILITY ═══ -->
  <div class="n-h1" id="s-stability">⚖️ 6. Stability - GM, KG, KB, BM &amp; GZ Curve</div>

  <div class="n-h2">Key Stability Terms</div>
  <table class="n-table">
    <tr><th>TERM</th><th>DEFINITION</th><th>LOCATION</th></tr>
    <tr><td><strong>K (Keel)</strong></td><td>Baseline reference point at the bottom of the ship</td><td>Bottom of ship</td></tr>
    <tr><td><strong>B (Centre of Buoyancy)</strong></td><td>Geometric centre of the underwater volume. Upward buoyancy force acts through B.</td><td>Moves outward when ship heels</td></tr>
    <tr><td><strong>G (Centre of Gravity)</strong></td><td>Point through which total ship weight acts downwards. Fixed by loading condition.</td><td>Fixed for a given load</td></tr>
    <tr><td><strong>M (Metacentre)</strong></td><td>The point where the line of buoyancy force (vertical through heeled B) intersects the ship's centreline. Valid for small angles (&lt;10–15°).</td><td>Above B, on centreline</td></tr>
    <tr><td class="hl"><strong>GM (Metacentric Height)</strong></td><td>Distance from G to M. GM = KM − KG = KB + BM − KG. <strong>Min cargo ship: 0.15 m</strong></td><td>Positive = G below M = stable</td></tr>
  </table>

  <div class="n-formula">GM = KM − KG &nbsp;&nbsp;&nbsp; where &nbsp;&nbsp;&nbsp; KM = KB + BM<div class="label">Metacentric Height Formula</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">POSITIVE GM (Stable)</div>
      <div class="card-val">G below M</div>
      <div class="card-desc">When heeled, B moves outward; vertical buoyancy line passes above G creating a <strong>righting moment</strong>. Ship returns to upright. Stiff ship: large positive GM - quick rolling, uncomfortable. Tender ship: small positive GM - slow gentle rolling.</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">NEGATIVE GM (Unstable)</div>
      <div class="card-val">G above M</div>
      <div class="card-desc">When heeled, buoyancy line passes below G - creates a <strong>capsizing moment</strong>. Ship develops a permanent list (loll) to one side. If weight is then added to the high side, a sudden catastrophic lurch to the other side can occur. FATAL risk.</div>
    </div>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Loll Condition (Surveyor favourite - Kamath, Deswal):</strong> A ship with negative GM will find a stable angle on one side (angle of loll) where B has moved far enough outboard to re-create a righting moment. This is NOT a safe condition - it is a transient stability state. Moving weight inboard or adding ballast to double-bottom tanks will restore positive GM. Never shift weight to the high side as this makes the loll worse and risks capsize.</div></div>

  <div class="n-h2">GZ Curve - Righting Lever</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The GZ lever</strong> is the horizontal distance between the vertical line of action of buoyancy (through heeled B) and the line of action of gravity (through G), at a given angle of heel. It is the <em>actual</em> righting arm - positive GZ means the ship will return to upright; negative GZ means it will capsize.<br><br>
  <strong>Reading the GZ curve:</strong><br>
  • <strong>Positive GZ (curve above zero):</strong> Ship has a righting moment - will return to upright if heeling force is removed.<br>
  • <strong>Peak GZ value and angle:</strong> Maximum righting lever - should occur at <span class="n-val">≥25°</span> heel.<br>
  • <strong>Angle of Vanishing Stability (AVS):</strong> Where GZ curve crosses zero again (on the way down). Beyond this the ship cannot recover - it will capsize.<br>
  • <strong>Area under GZ curve (dynamic stability):</strong> Energy needed to capsize the ship. Larger area = greater reserve of stability in heavy weather.<br>
  • <strong>GZ at 30°:</strong> Must be <span class="n-val">≥ 0.20 m</span> per SOLAS Resolution A.749(18).<br><br>
  <strong>SOLAS A.749 minimum requirements:</strong> GZ ≥ <span class="n-val">0.20 m</span> at 30° heel · Angle of max GZ ≥ <span class="n-val">25°</span> · Area 0°–30° ≥ <span class="n-val">0.055 m·rad</span> · Area 30°–40° ≥ <span class="n-val">0.030 m·rad</span><br><br>
  <strong>Key difference from GM:</strong> GM tells you initial stability (small angles only). GZ curve tells you stability across the full range of heel - this is what matters in heavy weather and when assessing risk of capsize.</div></div>

  <div class="n-h2">Intact vs Damage Stability</div>
  <ul class="n-list">
    <li><strong>Intact Stability:</strong> The stability of an undamaged ship in its normal loading condition. Governed by SOLAS Chapter II-1 and Reg. A.749 (cargo ships).</li>
    <li><strong>Damage Stability:</strong> The residual stability after flooding one or more compartments following collision or grounding. SOLAS requires the ship to survive a defined damage extent and still maintain positive GM and minimum freeboard. Subdivision calculations define compartment flooding scenarios.</li>
    <li><strong>Permeability:</strong> The fraction of a compartment's volume that can flood. Cargo hold ≈ 60–95%; engine room ≈ 85%; accommodation ≈ 95%. Used in damage stability calculations.</li>
  </ul>

  <div class="n-h2">Gross, Net &amp; Deadweight Tonnage</div>
  <table class="n-table">
    <tr><th>Term</th><th>What It Is</th></tr>
    <tr><td><strong>Gross Tonnage (GT)</strong></td><td>A dimensionless index of the <strong>total enclosed volume</strong> of the ship (GT = K × V). Used for manning, safety rules, registration and port dues.</td></tr>
    <tr><td><strong>Net Tonnage (NT)</strong></td><td>Index of the <strong>useful earning (cargo) volume</strong> - GT less spaces such as machinery, crew and tanks. Used for canal and port charging.</td></tr>
    <tr><td><strong>Deadweight (DWT)</strong></td><td>The <strong>mass the ship can carry</strong> = cargo + fuel + stores + fresh water + crew = loaded displacement − lightship. Quoted in tonnes.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory:</strong> GT/NT = <em>volume</em> indices (no units). DWT and displacement = <em>weight</em> in tonnes. DWT = laden displacement − lightship.</div></div>


  <!-- ═══ SECTION 7 - FREE SURFACE EFFECT ═══ -->
  <div class="n-h1" id="s-fse">💧 7. Free Surface Effect (FSE) &amp; Anti-Roll Tanks</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Free Surface Effect:</strong> When a tank is partially filled with liquid, the liquid surface is free to move. When the ship heels, the liquid shifts toward the low side - its centre of gravity moves outward. This has the same <em>effective</em> result as raising the ship's G, reducing GM. The reduction in GM is called the <strong>free surface correction</strong> or <strong>free surface moment</strong>.<br><br>
  <strong>Formula:</strong> GM<sub>corrected</sub> = GM<sub>solid</sub> − (i × ρ<sub>liquid</sub>) / (V × ρ<sub>ship</sub>)<br>
  Where i = second moment of area of the free surface (length × breadth³ / 12), V = displaced volume.<br><br>
  <strong>Key conclusions:</strong><br>
  • FSE is <strong>proportional to breadth³</strong> - a wide slack tank is far more dangerous than a narrow one.<br>
  • FSE is <strong>independent of how much liquid is in the tank</strong> (whether 5% or 95% full - the free surface still has the same breadth).<br>
  • Only at 0% or 100% full is there no free surface effect.<br>
  • To minimise FSE: use <strong>longitudinal centreline divisions</strong> (divides wide tank into two narrow tanks, reducing breadth and hence i by factor of 8).</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Practical danger:</strong> Multiple partially-filled slack tanks simultaneously can reduce effective GM below the 0.15 m minimum. This is a leading cause of vessel instability. The loading computer accounts for FSE when calculating departure and arrival GM.</div></div>

  <div class="n-h2">Anti-Roll Tanks</div>
  <ul class="n-list">
    <li><strong>Passive Anti-Roll Tanks:</strong> U-shaped tank fitted athwartships. Water sloshes from side to side. Tuned so the natural frequency of water oscillation is slightly out of phase with the ship's roll period - the water mass reaches the high side just as the ship rolls back, creating a damping moment. No power required.</li>
    <li><strong>Active Anti-Roll Tanks:</strong> Water pumped from side to side using a pump controlled by a roll angle sensor. More effective over a range of sea conditions. Requires power and control system (ETO maintains the pump and control electronics).</li>
    <li><strong>Fins:</strong> Retractable stabiliser fins on the bilge area - hydraulically controlled. Most effective at speed. ETO maintains the fin control electronics and hydraulic unit.</li>
  </ul>


  <!-- ═══ SECTION 8 - COFFERDAM ═══ -->
  <div class="n-h1" id="s-cofferdam">🛢️ 8. Cofferdam - Purpose &amp; Electrical Safety</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Cofferdam:</strong> A narrow void space (typically <span class="n-val">600–900 mm</span> wide) separating two adjacent tanks that contain incompatible liquids - e.g., a fuel oil tank and a fresh water or lubricating oil tank. The cofferdam acts as a <strong>buffer space</strong>: if either tank develops a small leak, the leaked liquid collects in the cofferdam and is detected by a sounding/level alarm, preventing contamination of the adjacent tank.<br><br>
  <strong>Other uses of cofferdams:</strong><br>
  • Between cargo tanks and machinery spaces (prevents vapour migration and fire risk)<br>
  • Between ballast and fuel tanks (prevents pollution)<br>
  • On tankers: forward and aft cofferdams isolate cargo spaces from accommodation and pump rooms<br><br>
  <strong>Identification:</strong> Cofferdams appear on the ship's general arrangement plan labelled "CF" or "void space." They are listed as enclosed/confined spaces.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Entering a Cofferdam - ETO Electrical Safety Duties:</strong><br>
  1. Issue / verify <strong>Permit to Work (Enclosed Space Entry)</strong> - T22 procedure.<br>
  2. Isolate and LOTO any electrical equipment in the cofferdam (bilge level sensors, tank heating elements, cathodic protection anodes).<br>
  3. Confirm gas-free certificate: O₂ ≥ <span class="n-val">19.5%</span>, hydrocarbon ≤ <span class="n-val">1% LEL</span>, H₂S ≤ <span class="n-val">1 ppm</span>.<br>
  4. Use only <strong>≤50 V portable lighting</strong> in wet/confined spaces (SOLAS requirement).<br>
  5. Provide continuous gas monitoring and standby rescue party outside.<br>
  The cofferdam is an enclosed space - treat it exactly as a tank or void space with enclosed-space entry procedures.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Mnemonic - Why cofferdams exist:</strong> "<em>Cofferdams are the Ship's Safety Gap - they catch leaks before contamination happens.</em>" Think of them as the drain tray under a leaking bottle - not structural, just a safety interceptor. The ETO needs to know their location because bilge level sensors inside cofferdams are part of the electrical alarm system.</div></div>


  <!-- ═══ SECTION 9 - ESB & 2 ACBs ═══ -->
  <div class="n-h1" id="s-esb">🛡️ 9. Emergency Switchboard (ESB) &amp; Two ACBs</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS II-1/42 &amp; II-1/43 - ESB Location requirement:</strong> The emergency switchboard must be located <strong>above the damage waterplane</strong> (not in the engine room if possible) and <strong>aft of the collision bulkhead</strong>. This ensures it survives bow collision flooding and remains operational when main power fails.</div></div>

  <div class="n-h2">Equipment Connected to ESB (SOLAS II-1/42)</div>
  <ul class="n-list">
    <li>Navigation Lights &amp; Emergency Lighting (muster stations, escape routes, engine room, bridge)</li>
    <li>GMDSS Radio Equipment (MF/HF, VHF, EPIRB, SART)</li>
    <li>Fire Detection System &amp; General Alarm / Public Address System</li>
    <li>Steering Gear - one power unit (SOLAS requires two independent power supplies to steering gear)</li>
    <li>Emergency Fire Pump &amp; one Bilge Pump</li>
    <li>Watertight Door Control System</li>
    <li>Emergency lighting in machinery spaces and accommodation</li>
    <li>Sprinkler system (if fitted)</li>
  </ul>

  <div class="n-h2">Purpose of Two ACBs Supplying ESB</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The ESB is supplied by two separate sources:<br>
  <strong>ACB-1:</strong> From the Main Switchboard (MSB) - normal operating supply.<br>
  <strong>ACB-2:</strong> From the Emergency Generator - emergency supply.<br><br>
  These two ACBs are <strong>mechanically and electrically interlocked</strong> so that <em>only one can be closed at a time</em>. This is critical because:<br>
  (a) <strong>Prevents paralleling the Emergency Generator with the MSB:</strong> If both ACBs close simultaneously, the Emg Gen (which has not been synchronised) would be connected in parallel with the MSB out of phase - this would cause massive fault current, circuit breaker tripping, and potential generator damage.<br>
  (b) <strong>Prevents backfeeding the MSB during blackout:</strong> If the Emg Gen is supplying ESB and a fault is present on the dead MSB, the interlock prevents the small Emg Gen from being burdened with attempting to restore the entire MSB bus.<br><br>
  When normal power fails: MSB ACB opens automatically → ESB is de-energised momentarily → Emg Gen starts and builds voltage → ACB-2 closes (ESB now fed from Emg Gen) → MSB ACB cannot close until Emg Gen ACB opens.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">ACB-1 (Normal Supply)</div>
      <div class="card-val">From Main Switchboard</div>
      <div class="card-desc">Closed during normal operations. ESB loads powered from main generators via MSB feeder.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">ACB-2 (Emergency Supply)</div>
      <div class="card-val">From Emergency Generator</div>
      <div class="card-desc">Closes when MSB ACB opens (blackout / emergency). Emg Gen auto-starts within <span class="n-val">45 seconds</span> and takes ESB load.</div>
    </div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - ESB 2 ACBs:</strong> "<em>One in - One out. Both never in together.</em>" The interlock is physical (mechanical key or pin linkage) AND electrical (auxiliary contacts). If the mechanical interlock is bypassed, both ACBs can close → short circuit. Never bypass.</div></div>


  <!-- ═══ SECTION 10 - SEQUENTIAL STARTING ═══ -->
  <div class="n-h1" id="s-seqstart">⏱️ 10. Sequential Starting After Blackout - Timings &amp; Logic</div>

  <div class="n-p">Sequential starting (also called <strong>programmed restart</strong>) prevents a <em>second blackout</em> caused by all large motors attempting to start simultaneously after power is restored. Each motor draws 5–7× full-load current at start - if many start together, the total inrush exceeds the generator's available current, causing voltage collapse and another blackout. The PMS manages this automatically.</div>

  <table class="n-table">
    <tr><th>TIME AFTER BLACKOUT</th><th>ACTION / EQUIPMENT STARTED</th><th>REASON</th></tr>
    <tr><td class="hl"><strong>0 – 45 sec</strong></td><td>Emergency Generator auto-starts, ACB-2 closes, ESB loads restored</td><td class="ok">UV relay on ESB triggers auto-start. Essential navigation/safety circuits live within 45 s (SOLAS)</td></tr>
    <tr><td class="hl"><strong>45 sec – 2 min</strong></td><td>Main Generator starts, voltage builds, MSB ACB closes; ESB switches back to MSB supply</td><td>Main power restored to switchboard</td></tr>
    <tr><td><strong>2 min</strong></td><td><strong>Group 1 - Essential Cooling &amp; Safety:</strong> Sea Water Cooling Pump, Lube Oil Pump, Fresh Water Cooling Pump, Bilge Pump</td><td class="ok">Engine protection - prevents bearing damage and overheating</td></tr>
    <tr><td><strong>3 – 5 min</strong></td><td><strong>Group 2 - Fuel &amp; Services:</strong> Fuel Oil Service Pump, Boiler Feed Pump, Main Air Compressor</td><td>Restore fuel supply and starting air for main engine</td></tr>
    <tr><td><strong>5 – 10 min</strong></td><td><strong>Group 3 - Auxiliary:</strong> Engine Room Ventilation Fans, Provision Reefer, HVAC</td><td>Non-critical; wait for generator to stabilise</td></tr>
    <tr><td class="bad"><strong>&gt; 10 min</strong></td><td>Large loads started <em>manually</em>: Cargo Pumps, Bow Thruster, Crane Motors</td><td>High-inrush loads - manually verified by ETO before starting</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Mnemonic - Sequential Start Groups:</strong> "<em>Emg → Main → Cool → Fuel → Vent → Manual</em>"<br>
  45s: Emergency Gen · 2min: Main power · 2min+: Cooling (SW+LO+FW) · 3-5min: Fuel+Air · 5-10min: Vents+Reefer · 10min+: Manual large loads</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why Group 1 is Lube Oil + Cooling, not cargo gear:</strong> After a blackout the main engine may be running (or coasting) - without lube oil pressure, bearings run dry and seize within seconds. Sea water cooling prevents cylinder liner overheating. These must be the very first loads after main power is restored - hence the 2-minute priority group.</div></div>


  <!-- ═══ SECTION 11 - CSC & CONTAINER FIRE ═══ -->
  <div class="n-h1" id="s-container">📦 11. Container Ship - CSC Convention &amp; Cargo Fires</div>

  <div class="n-h2">CSC - Convention for Safe Containers (1972)</div>
  <ul class="n-list">
    <li><strong>Purpose:</strong> International convention requiring all international shipping containers to carry a <strong>Safety Approval Plate</strong> certifying structural compliance.</li>
    <li><strong>Plate shows:</strong> Country of approval, date manufactured, identification number, Maximum Gross Weight (MGW), Allowable Stacking Weight (at 1.8g), Racking Test Load, Next Examination Date.</li>
    <li><strong>Examination intervals:</strong> Initial approval → <span class="n-val">5 years</span>. Subsequent: every <span class="n-val">30 months</span>. Unfit containers must be withdrawn from service.</li>
    <li><strong>TEU/FEU:</strong> Twenty-foot Equivalent Unit (standard 20-ft container). Forty-foot Equivalent Unit = 2 TEU. Used as a capacity measure for container ships.</li>
  </ul>

  <div class="n-h2">Container Fires - Causes &amp; Response</div>
  <ul class="n-list">
    <li><strong>Common causes:</strong> Misdeclared dangerous goods (lithium batteries, self-heating chemicals, spontaneously combustible cargoes), reefer unit electrical faults, fumigation gas escape, structural damage allowing air ingress to smouldering cargo.</li>
    <li><strong>Cargo Hold Fire:</strong> Close all ventilators and hatch access. Deploy fixed <strong>CO₂ system</strong> into the hold. Do not re-enter until hold is confirmed gas-free and temperature has fallen. CO₂ must achieve and maintain inert atmosphere - maintain gas detection monitoring.</li>
    <li><strong>On-Deck Reefer Fire:</strong> Isolate the reefer power socket at the plug panel immediately. Attack with CO₂ or dry powder portable extinguisher. Do not use water on electrical components until isolated.</li>
    <li><strong>Lithium Battery fires:</strong> Extremely hazardous - thermal runaway produces its own oxygen. Water cooling (large quantities) is the only effective method - CO₂ and dry powder will not extinguish. Alert port authority and declare emergency cargo.</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>CO₂ in Hold - ETO role:</strong> The ETO maintains the fixed CO₂ fire-fighting system including pressure/weight monitoring of CO₂ cylinders, the detection panel, the manual release cabinet, and the gas detection loops in the hold. On receiving a hold fire alarm, the ETO must verify the detection circuit integrity, confirm which hold is affected, and support the Master's decision to release CO₂. CO₂ pipe sections are tested at <span class="n-val">7 bar (air - nozzle branch)</span>, <span class="n-val">80 bar (master valve to branch)</span>, and <span class="n-val">190 bar (cylinder to master valve)</span>. Cylinder filling ratio: CO₂ stored as liquid, <span class="n-val">0.75 kg/L</span> filling ratio.</div></div>

  <div class="n-h2">Container Dimensions &amp; the Torsion Box</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ISO container sizes (ISO 668):</strong> standard <strong>20 ft</strong> (1 TEU) and <strong>40 ft</strong> (1 FEU) long, <strong>8 ft</strong> wide, and <strong>8 ft 6 in</strong> high standard or <strong>9 ft 6 in</strong> high-cube. Corner castings carry all the stacking and lashing loads.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Torsion box:</strong> because a container ship has wide open hatches, the deck cannot resist twisting on its own. A <strong>closed box-girder</strong> is built along each side under the hatch coamings, running the length of the cargo block. This "torsion box" gives the hull the torsional (twisting) strength to resist the asymmetric loading and quartering-sea forces that would otherwise distort the open hull.</div></div>


  <!-- ═══ SECTION 12 - DRYDOCK ═══ -->
  <div class="n-h1" id="s-drydock">🏗️ 12. Drydock - ETO Electrical Preparations</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask the ETO drydock preparations checklist. Know these three phases.</strong></div></div>

  <div class="n-h2">Phase 1 - Before Docking (Pre-Drydock)</div>
  <ol class="n-steps">
    <li><strong>Baseline IR readings:</strong> Megger test all motors, generators, and critical cables. Record results with temperature. These are the comparison baseline - if IR drops after flooding, you know exactly which equipment got wet.</li>
    <li><strong>Switch ICCP to MANUAL/OFF:</strong> Impressed Current Cathodic Protection anodes must not operate in air - anodes arc and create fire/explosion risk. Switch to manual mode and reduce current to zero before the ship is lifted clear of the water.</li>
    <li><strong>Energise anti-condensation heaters:</strong> Switch all motor, generator, and switchboard heaters ON from shore power. Maintain windings <span class="n-val">5–10°C above ambient</span> throughout the docked period to prevent moisture absorption, insulation deterioration, and condensation.</li>
    <li><strong>Shore power connection:</strong> Connect shore supply via the shore connection box. Verify voltage (<span class="n-val">440 V ±5%</span>), frequency (<span class="n-val">50/60 Hz</span>), and <strong>phase sequence</strong> (use phase sequence indicator - wrong phase sequence reverses all motors). Only then close the shore ACB.</li>
    <li><strong>Shaft earthing brush inspection:</strong> Check brush contact pressure and length. Replace if worn below minimum. The brush bonds the rotating shaft to hull to prevent static arcing across the propeller shaft oil film.</li>
    <li><strong>Hull transducers:</strong> Check echo sounder transducer, Doppler log transducer, and sonar domes for physical damage. Report condition to surveyor. These hull-penetrating units are inspected and if necessary replaced during drydock.</li>
  </ol>

  <div class="n-h2">Phase 2 - During Drydock</div>
  <ul class="n-list">
    <li>Assist Class Surveyor: present all PMS records, IR test certificates, maintenance logs, calibration certificates for navigational instruments.</li>
    <li>Witness statutory tests: <strong>blackout test</strong> (Emg Gen auto-start within 45 s), <strong>steering gear timing test</strong> (full port to full starboard within 28 s at max speed per SOLAS), <strong>fire detection system tests</strong>, watertight door operation tests.</li>
    <li>Replace <strong>Ag/AgCl ICCP reference electrodes</strong> - service life <span class="n-val">2.5 years</span>. New electrodes must be calibrated before commissioning.</li>
    <li>Inspect, clean, and test all bilge level sensors, float switches, and high-level alarms in double-bottom and bilge spaces.</li>
    <li>Megger test all deck cables, motor leads, and hull cable penetrations. Renew watertight glands if IR is low.</li>
    <li>Inspect and clean all explosion-proof (Ex-d) light fittings - check flame-path integrity, gaskets, and fastener torque.</li>
  </ul>

  <div class="n-h2">Phase 3 - After Flooding, Before Undocking</div>
  <ol class="n-steps">
    <li><strong>Re-take IR readings:</strong> Compare all motor and cable IR values against pre-drydock baseline. Any significant drop indicates water ingress - investigate and rectify before undocking.</li>
    <li><strong>Commission ICCP in manual mode:</strong> Once afloat, switch ICCP on in manual, verify reference electrode readings show correct hull potential (typically <span class="n-val">−800 to −1000 mV vs Ag/AgCl</span>) before switching to automatic control.</li>
    <li><strong>Test Emergency Generator:</strong> Perform auto-start test - verify starts and takes load within <span class="n-val">45 seconds</span> of simulated blackout (shore power disconnection).</li>
    <li><strong>Test all Navigation Lights:</strong> Verify both main (MSB) and emergency (ESB) supply paths, check lamp wattage, test changeover relay and open-circuit alarm.</li>
    <li><strong>Restore all systems to normal operation:</strong> Remove all PTWs and isolation locks (LOTO). Check all test connections removed. Restore ICCP, shore earthing disconnected, all breakers to normal positions.</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Drydock Memory Sequence:</strong><br>
  <em>Before: "BIG-SIS"</em> → <strong>B</strong>aseline IR → <strong>I</strong>CCP OFF → <strong>G</strong>lazes (heaters ON) → <strong>S</strong>hore power → <strong>I</strong>nspect shaft brush → <strong>S</strong>onar/transducers.<br>
  <em>After flood: "RICE"</em> → <strong>R</strong>e-IR test → <strong>I</strong>CCP manual → <strong>C</strong>ommission tests (Emg Gen + nav lights) → <strong>E</strong>xit permits / PTW clearance.</div></div>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🗣️ 13. Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is Hogging and Sagging? Which part is in tension in each case?</td>
      <td><strong>Sagging:</strong> Wave trough amidships or heavy midship cargo - ship bends like a hammock, ends up, middle down. Keel in TENSION, deck in COMPRESSION. <strong>Hogging:</strong> Wave crest amidships or heavy bow/stern cargo - ship bends like an arch, middle up, ends down. Keel in COMPRESSION, deck in TENSION. Both generate bending moments in the hull girder - loading computer monitors SF and BM to stay within class limits.</td>
    </tr>
    <tr>
      <td>What is GM? What is the minimum required value? What happens if GM is negative?</td>
      <td>GM = Metacentric Height = distance from Centre of Gravity (G) to Metacentre (M). GM = KM − KG. Minimum for cargo ships: <span class="n-val">0.15 m</span>. If negative (G above M): ship is unstable, develops a capsizing moment instead of righting moment, heels to an angle of loll on one side - risk of capsize. Correct by adding ballast to double bottom tanks or reducing topside weights.</td>
    </tr>
    <tr>
      <td>What is Free Surface Effect? How does it affect stability?</td>
      <td>Partially filled tank has a free liquid surface that shifts when ship heels, moving the effective G upward - reducing effective GM. FSE is proportional to breadth³ of the tank, independent of fill level. To minimise: use longitudinal divisions in wide tanks, fill tanks fully or pump them out completely. Multiple slack tanks simultaneously can reduce GM below 0.15 m minimum - danger condition.</td>
    </tr>
    <tr>
      <td>Why does the Emergency Switchboard have two ACBs? What are they interlocked for?</td>
      <td>One ACB from MSB (normal supply), one from Emergency Generator. Mechanically AND electrically interlocked - only one can close at a time. Interlock prevents: (a) paralleling Emg Gen with MSB without synchronisation (→ fault current and damage), and (b) backfeeding a faulted MSB from the small Emg Gen during blackout. SOLAS II-1/42 requirement.</td>
    </tr>
    <tr>
      <td>What is the ESB location requirement per SOLAS?</td>
      <td>Above the damage waterplane (so it is not flooded if lower hull is breached) and aft of the collision bulkhead (so it survives bow collision). This ensures safety equipment remains powered even after major damage to the bow or lower hull.</td>
    </tr>
    <tr>
      <td>Explain sequential starting after a blackout - give the timings.</td>
      <td>Emg Gen starts and takes ESB within 45 s. Main Gen restores MSB within 2 min. At 2 min: Group 1 - SW pump, LO pump, FW pump, bilge (engine safety). At 3–5 min: Group 2 - FO service pump, boiler feed, air compressor. At 5–10 min: Group 3 - ER vents, reefer. Over 10 min: large loads (cargo pumps, bow thruster) manually. Reason: staggering prevents simultaneous high starting currents causing a second blackout.</td>
    </tr>
    <tr>
      <td>What does an IEC Motor Frame Number indicate? Give an example.</td>
      <td>Shaft centre height in millimetres from the mounting base (feet). E.g., IEC Frame 132 = shaft is 132 mm high. Ensures replacement motor fits the same bolt pattern, shaft coupling height, and foundation without modification - critical for interchangeability on board.</td>
    </tr>
    <tr>
      <td>What is a cofferdam? Why is it fitted? What are the ETO's responsibilities when entering one?</td>
      <td>A narrow void space (600–900 mm) between tanks containing incompatible liquids - intercepts any small leak, preventing contamination. ETO: issue Enclosed Space Entry permit, isolate and LOTO all electrical equipment in the space, verify gas-free certificate (O₂ ≥19.5%, HC ≤1% LEL), use only ≤50 V portable lighting, continuous gas monitoring, standby rescue party outside.</td>
    </tr>
    <tr>
      <td>What is a Plimsoll Mark? Explain the different load line zones.</td>
      <td>A mark on the ship's side indicating maximum safe loading depth under Load Line Convention. Zones: TF (Tropical Fresh - deepest, low-density warm water), F (Fresh), T (Tropical Salt), S (Summer - standard reference), W (Winter), WNA (Winter North Atlantic - shallowest, harshest seas). In fresh water: ship may load deeper than in salt water because fresh water is less dense - allowance is FWA (Fresh Water Allowance).</td>
    </tr>
    <tr>
      <td>What are panting and pounding? What structures resist them?</td>
      <td><strong>Panting:</strong> In-out flexing of bow/stern plating as wave pressure cycles - resisted by panting beams and stringers. <strong>Pounding (slamming):</strong> Bow emerges from wave, crashes back with impact shock - resisted by heavier bow plating, breast hooks. Both cause fatigue cracking - inspect cable supports and hull penetrations in bow area after heavy weather.</td>
    </tr>
    <tr>
      <td>What is the difference between transverse and longitudinal framing? Where is each used?</td>
      <td><strong>Transverse framing:</strong> Frames run athwartships - good against hydrostatic pressure. Used at bow, stern, and engine room. <strong>Longitudinal framing:</strong> Frames run fore-and-aft - better against hogging/sagging bending moment. Used in the parallel midbody of tankers and bulk carriers. Modern ships use a combined system.</td>
    </tr>
    <tr>
      <td>What are the ETO's electrical preparations for drydock?</td>
      <td><strong>Before docking:</strong> Baseline IR readings of all motors/cables, ICCP to manual/OFF (anodes arc in air), anti-condensation heaters ON from shore power (5–10°C above ambient), shore power connection with phase sequence check, shaft earthing brush inspection, hull transducer check. <strong>During:</strong> Assist surveyor, witness blackout/steering tests, replace ICCP reference electrodes (every 2.5 yr). <strong>After flooding:</strong> Re-IR test (compare baseline), ICCP manual commissioning, Emg Gen auto-start test (≤45 s), nav lights test, restore all systems, clear all PTWs.</td>
    </tr>
    <tr>
      <td>What is the CSC convention? What does the safety plate show?</td>
      <td>Convention for Safe Containers (1972). All international shipping containers must carry a Safety Approval Plate showing: approval country and date, container ID, Maximum Gross Weight, allowable stacking weight, racking test load, and next examination date (5-year first interval, then every 30 months). Containers failing inspection must be withdrawn from service.</td>
    </tr>
    <tr>
      <td>What is a double bottom and what are its purposes?</td>
      <td>Watertight space between outer hull plating and inner bottom plating (typically 1–2 m deep). Structural: gives enormous bending stiffness (inner and outer plates act as flanges of hull girder beam). Safety (SOLAS/MARPOL): flooding limited to double-bottom space if outer hull is holed. Storage: fuel oil, ballast water, fresh water tanks. Internal structure: centre girder + side girders + floors forming a rigid cellular box.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 14. Quick Revision - Surveyor Frequency Guide</div>

  <table class="n-table">
    <tr><th>Topic</th><th>Frequency &amp; Surveyor</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Motor Frame Number (IEC)</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Shaft centre height in mm. IEC 132 = 132 mm shaft height. Ensures physical interchangeability.</td>
    </tr>
    <tr>
      <td>Sequential Starting Timings</td>
      <td class="hl">⭐⭐⭐⭐⭐ Mumbai Bank, Sanjib</td>
      <td>45s Emg Gen → 2 min Main power → 2 min+ Cooling (SW/LO/FW) → 3-5 min Fuel/Air → 5-10 min Vents → 10+ min Manual large loads.</td>
    </tr>
    <tr>
      <td>ESB Two ACBs - Interlock Purpose</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, ORAL2026</td>
      <td>Mechanically + electrically interlocked. Prevents simultaneous closure. No paralleling of unsynced sources. No MSB backfeed. SOLAS II-1/42.</td>
    </tr>
    <tr>
      <td>Hogging vs Sagging - Keel Stress</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td>
      <td>Sagging = keel in TENSION (S-S). Hogging = keel in COMPRESSION. Deck always opposite. BM max at amidships (SF=0).</td>
    </tr>
    <tr>
      <td>GM Minimum &amp; Loll</td>
      <td class="hl">⭐⭐⭐⭐ Mumbai Bank, Kamath</td>
      <td>Min GM = 0.15 m. GM = KM − KG. Negative GM → loll to one side → capsize risk. Correct by bottom ballast, not topside shifting.</td>
    </tr>
    <tr>
      <td>Free Surface Effect</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Mumbai Bank</td>
      <td>Slack tanks reduce effective GM. Proportional to breadth³. Independent of fill level. Counter: longitudinal divisions, fill fully or empty completely.</td>
    </tr>
    <tr>
      <td>ESB Location (SOLAS)</td>
      <td class="hl">⭐⭐⭐⭐ Vishwanathan, Praveen Nair</td>
      <td>Above damage waterplane. Aft of collision bulkhead. Ensures survival after bow flooding.</td>
    </tr>
    <tr>
      <td>Drydock ETO Checklist</td>
      <td class="hl">⭐⭐⭐⭐ All Surveyors</td>
      <td>Before: BIG-SIS (Baseline IR, ICCP OFF, heaters ON, Shore power + phase check, Inspect shaft brush, Sonar check). After flood: RICE (Re-IR, ICCP manual, Commission tests, Exit permits).</td>
    </tr>
    <tr>
      <td>CSC Convention</td>
      <td class="hl">⭐⭐⭐ Mumbai Bank</td>
      <td>Safety Approval Plate on all containers. First exam 5 yr, then every 30 months. Shows MGW, stacking weight, inspection date.</td>
    </tr>
    <tr>
      <td>Cofferdam Purpose &amp; Entry</td>
      <td class="hl">⭐⭐⭐ Kamath, Rajeev Wad</td>
      <td>Void space between incompatible tanks - catches leaks, prevents contamination. Entry = Enclosed Space Entry permit. LOTO electrical in space. ≤50 V portable lighting. Gas-free cert.</td>
    </tr>
    <tr>
      <td>Panting vs Pounding</td>
      <td class="hl">⭐⭐⭐ Deswal, Vishwanathan</td>
      <td>Panting = bow shell flexing in/out. Pounding = bow slamming after emergence. Check cable supports forward after heavy weather.</td>
    </tr>
    <tr>
      <td>A-60 / A-30 / B-Class Divisions</td>
      <td class="hl">⭐⭐⭐ Mumbai Bank, ORAL2026</td>
      <td>A-60 = steel, 60 min integrity, ≤139°C rise. A-30 = 30 min. B-15 = 15 min (lighter). C = no rating. ER/accommodation boundary = A-60.</td>
    </tr>
    <tr>
      <td>Double Bottom - Purpose</td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>Structural (bending stiffness), safety (limits flooding on grounding), storage (fuel/ballast/FW). Inner/outer plates = flanges of hull girder beam.</td>
    </tr>
    <tr>
      <td>GZ Curve Minimums</td>
      <td class="hl">⭐⭐⭐ Praveen Nair, Mumbai Bank</td>
      <td>SOLAS A.749: GZ ≥ 0.20 m at 30°. Max GZ angle ≥ 25°. Area 0–30° ≥ 0.055 m·rad. AVS = angle where GZ returns to zero.</td>
    </tr>
  </table>

      </div>
</div>
</div>
`);
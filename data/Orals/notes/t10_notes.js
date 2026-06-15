window.loadNotes("T10", `<div class="view" id="view-notes-t10">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T10')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 10 - ICCP &amp; Cathodic Protection</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">ICCP · Reference Electrode</span>
      <span class="tag tag-purple">Bonding · MGPS · Dry Dock</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle</button>
    <button class="anc-btn" onclick="jumpTo('s-types')">Types of CP</button>
    <button class="anc-btn" onclick="jumpTo('s-potentials')">Protection Potentials</button>
    <button class="anc-btn" onclick="jumpTo('s-electrodes')">Ref Electrodes</button>
    <button class="anc-btn" onclick="jumpTo('s-comparison')">ICCP vs Anodes</button>
    <button class="anc-btn" onclick="jumpTo('s-operation')">ICCP Operation</button>
    <button class="anc-btn" onclick="jumpTo('s-coatings')">Coatings &amp; Disbondment</button>
    <button class="anc-btn" onclick="jumpTo('s-stray')">Stray Current</button>
    <button class="anc-btn" onclick="jumpTo('s-faults')">ICCP Faults</button>
    <button class="anc-btn" onclick="jumpTo('s-bonding')">Bonding</button>
    <button class="anc-btn" onclick="jumpTo('s-shaft-detail')">Shaft Earthing</button>
    <button class="anc-btn" onclick="jumpTo('s-mgps')">MGPS Basic</button>
    <button class="anc-btn" onclick="jumpTo('s-mgps-detail')">MGPS Detailed</button>
    <button class="anc-btn" onclick="jumpTo('s-drydock')">Dry Dock</button>
    <button class="anc-btn" onclick="jumpTo('s-commissioning')">Drydock Re-comm</button>
    <button class="anc-btn" onclick="jumpTo('s-advanced')">Advanced Notes</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 1 - PRINCIPLE                                       -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-principle">⚡ Cathodic Protection - Principle</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask ICCP working, reference electrode function, and why it is switched off at berth.</strong> Know the electrochemistry, protection potential range, consequences of under- and over-protection, and dry dock maintenance procedure.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why hull steel corrodes in seawater:</strong> Seawater is an electrolyte (conductivity <span class="n-val">~50 mS/cm</span>). Hull steel develops anodic areas (where iron dissolves: Fe → Fe²⁺ + 2e⁻) and cathodic areas (protected) due to grain boundary variations, welds, mill scale differences, and surface contamination. <strong>Cathodic protection</strong> forces the entire hull to act as a cathode by supplying electrons externally - this suppresses anodic dissolution completely.</div></div>

  <div class="n-info"><div class="icon">🧪</div><div class="body"><strong>Full Electrochemical Corrosion Chain:</strong><br>
  At <strong>anodic</strong> hull areas: Fe → Fe²⁺ + 2e⁻ &nbsp;(iron dissolves, electrons leave metal)<br>
  At <strong>cathodic</strong> hull areas in seawater (aerobic): O₂ + 2H₂O + 4e⁻ → 4OH⁻ (oxygen reduction)<br>
  In anaerobic or acidic zones: 2H⁺ + 2e⁻ → H₂ (hydrogen evolution)<br>
  OH⁻ migrates to anode: Fe²⁺ + 2OH⁻ → <strong>Fe(OH)₂</strong> (ferrous hydroxide)<br>
  Further oxidation: 4Fe(OH)₂ + O₂ + 2H₂O → <strong>4Fe(OH)₃</strong> (ferric hydroxide = <em>rust</em>)<br><br>
  <strong>ICCP solution:</strong> Make entire hull cathodic → only OH⁻ produced at hull surface, no Fe²⁺ leaves → no Fe(OH)₂ → no rust. The OH⁻ ions travel toward the impressed anodes; at lead anodes the surface converts: Pb → PbO₂ (lead peroxide - hard, conductive coating). Modern MMO/Ti anodes are inert and do not convert.</div></div>

  <div class="n-formula">
    <div style="text-align:center; font-size:1.05em; padding:8px 0;">
      Anodic half-reaction (corrosion): &nbsp; <strong>Fe → Fe²⁺ + 2e⁻</strong><br>
      Cathodic half-reaction (protection): &nbsp; <strong>O₂ + 2H₂O + 4e⁻ → 4OH⁻</strong><br>
      ICCP suppresses the anodic reaction by making the entire hull cathodic
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 2 - TYPES OF CP                                     -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-types">🔋 Types of Cathodic Protection</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Sacrificial Anode</th><th>ICCP (Impressed Current)</th></tr>
    <tr><td>Principle</td><td>Passive galvanic - Zinc/Aluminium dissolves to protect hull</td><td class="ok">Active - external DC forces hull to cathodic potential</td></tr>
    <tr><td>Anode material</td><td>Zinc alloy (Al-Zn-In) or Aluminium alloy - consumed over time</td><td class="ok">Mixed Metal Oxide (MMO) on Titanium - virtually non-consumable</td></tr>
    <tr><td colspan="3" style="font-size:0.85em;color:var(--muted-text);padding:4px 8px"><em>⚠️ Older ICCP systems used <strong>Lead (Pb)</strong> or <strong>Platinised Titanium</strong> anodes. Lead: does not dissolve in seawater; surface converts to lead peroxide (PbO₂) - hard, durable, conductive. Platinised Ti is more efficient but more expensive. Modern systems use MMO/Ti.</em></td></tr>
    <tr><td>Control</td><td class="bad">Passive - no control, fixed output</td><td class="ok">Automatic - adjusts via reference electrode feedback</td></tr>
    <tr><td>Running cost</td><td class="bad">Anodes consumed - replace every <span class="n-val">~2.5 years</span></td><td class="ok">MMO/Ti anodes last <span class="n-val">20–25 years</span></td></tr>
    <tr><td>Typical use</td><td>Small vessels (&lt;100 m LOA), critical backup, rudder/thruster zones</td><td class="ok">Large vessels <span class="n-val">&gt;100 m LOA</span></td></tr>
    <tr><td>Anode replacement</td><td class="bad"><span class="n-val">50–70%</span> consumed - replace every drydock</td><td class="ok">Anodes last <span class="n-val">20–25 years</span>; replace reference electrodes at drydock</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Mnemonic - "PASS vs ACTIVE":</strong> Sacrificial anodes are <strong>PA</strong>ssive, Self-<strong>S</strong>acrificing, no-<strong>S</strong>witch needed. ICCP is <strong>AC</strong>tive, <strong>T</strong>una-circuit controlled, <strong>I</strong>nert anodes, <strong>V</strong>oltage-regulated, <strong>E</strong>conomical long-term.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 3 - PROTECTION POTENTIALS (merged s-values)        -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-potentials"><span id="s-values"></span>📊 Protection Potentials &amp; Key Values</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Every surveyor asks these exact values.</strong> Know what happens at each level - consequences of under- and over-protection are exam critical. Target, minimum, and over-protection limits must be instant recall.</div></div>

  <div class="n-h2">Protection Potential Range (vs Ag/AgCl reference in seawater)</div>
  <table class="n-table">
    <tr><th>Potential (vs Ag/AgCl)</th><th>Condition</th><th>What Happens</th><th>Remedy</th></tr>
    <tr><td class="bad">Above <span class="n-val">−800 mV</span><br>(e.g. −700 mV)</td><td class="bad">UNDER-PROTECTION</td><td class="bad">Corrosion continues - hull pitting, anodic dissolution of steel (Fe → Fe²⁺)</td><td>Increase controller output. Check anode circuit and reference electrodes for faults.</td></tr>
    <tr><td class="hl"><span class="n-val">−800 mV</span></td><td class="hl">Minimum protection limit (NACE SP0176 / DNV RP B401)</td><td class="ok">Protection just begins - corrosion rate drops sharply</td><td>Target setpoint is −850 mV to maintain safety margin</td></tr>
    <tr><td class="ok"><span class="n-val">−850 mV</span></td><td class="ok"><strong>TARGET SETPOINT (optimal)</strong></td><td class="ok">Full protection - corrosion completely suppressed. Controller default.</td><td>Normal automatic control - no action needed</td></tr>
    <tr><td class="ok"><span class="n-val">−800 to −1050 mV</span></td><td class="ok">Normal protection zone</td><td class="ok">Hull fully protected - acceptable range for automatic operation</td><td>Normal operation</td></tr>
    <tr><td class="bad">Below <span class="n-val">−1100 mV</span><br>(e.g. −1200 mV)</td><td class="bad">OVER-PROTECTION - DANGEROUS</td><td class="bad">Hydrogen evolution: 2H⁺ + 2e⁻ → H₂. Cathodic paint disbondment. Hydrogen embrittlement of high-strength steel fasteners and propeller shafts. See coating section.</td><td>IMMEDIATELY reduce output. Check setpoint. Recalibrate or replace reference electrode.</td></tr>
  </table>

  <div class="n-h2">Controller Output Values</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">DC Output Voltage</div><div class="card-val"><span class="n-val">6–25 V DC</span></div><div class="card-desc">Increases as hull paint ages and more bare steel is exposed. New ship (fresh paint): low end. Midlife: high end.</div></div>
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title">DC Output Current</div><div class="card-val"><span class="n-val">5–100 A DC</span></div><div class="card-desc">Current density: <span class="n-val">10–50 mA/m²</span> bare steel | <span class="n-val">5–10 mA/m²</span> painted hull.</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title">Target Setpoint</div><div class="card-val"><span class="n-val">−850 mV</span></div><div class="card-desc">vs Ag/AgCl reference electrode. NACE / DNV criterion. 50 mV margin above minimum −800 mV.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title">Ag/AgCl Potential vs SHE</div><div class="card-val"><span class="n-val">+0.222 V</span></div><div class="card-desc">Standard reference. To convert: E(Ag/AgCl) = E(SHE) − 0.222 V. So −850 mV vs Ag/AgCl = −628 mV vs SHE.</div></div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - "Eight-Fifty in the Middle":</strong> <span class="n-val">−850 mV</span> TARGET &nbsp;|&nbsp; <span class="n-val">−800 mV</span> MINIMUM &nbsp;|&nbsp; <span class="n-val">−1100 mV</span> OVER-PROTECTION LIMIT. Numbers increase in absolute value as danger increases at both ends. If the dial goes too positive → corroding. If the dial goes too negative → hydrogen, disbondment, embrittlement.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 4 - REFERENCE ELECTRODES                           -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-electrodes">🔬 Reference Electrode Types</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Reference electrodes must be non-polarisable</strong> - they maintain a stable, reproducible potential regardless of temperature changes, salinity variations, or small current flow. They are the <em>eyes</em> of the ICCP system: if they drift, the controller will incorrectly over- or under-protect the hull without any fault alarm.</div></div>

  <table class="n-table">
    <tr><th>Type</th><th>Potential vs SHE</th><th>Construction</th><th>Marine Use</th></tr>
    <tr><td><strong>Ag/AgCl<br>(Silver/Silver Chloride)</strong></td><td class="hl"><span class="n-val">+0.222 V</span></td><td>Silver wire coated in AgCl, KCl gel electrolyte, porous ceramic junction housing. Flush-mounted below waterline.</td><td class="ok">Most common shipboard ICCP reference. Most stable and accurate in seawater. Replace every drydock (~2.5 yr) as internal gel depletes → reading drift.</td></tr>
    <tr><td>Zinc (Zn)</td><td class="hl"><span class="n-val">−0.76 V</span></td><td>Pure zinc rod in zinc sulphate gel or direct seawater contact</td><td class="hl">Simpler, cheaper backup. Less stable than Ag/AgCl. Can also act as sacrificial anode.</td></tr>
    <tr><td>Copper/Copper Sulphate<br>(Cu/CuSO₄)</td><td class="hl"><span class="n-val">+0.316 V</span></td><td>Copper rod in saturated CuSO₄ solution, porous membrane plug</td><td>Drydock and temporary measurements only. Pipeline and dock structure testing in soil or fresh water. Not suitable in seawater - Cl⁻ contaminates the CuSO₄ and destabilises the electrode.</td></tr>
    <tr><td>Standard Hydrogen<br>(SHE)</td><td class="hl"><span class="n-val">0.000 V</span> (definition)</td><td>Pt electrode in H₂ atmosphere, H⁺ activity = 1. Laboratory only.</td><td>Universal reference datum. Never used in the field. All other electrode potentials are quoted relative to SHE.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why reference electrodes drift and fail:</strong> (1) Gel electrolyte slowly leaches out through the porous ceramic junction → ionic concentration changes → Nernst equation shifts → wrong reading. (2) Marine bio-fouling partially blocks the porous junction → response time increases. (3) Physical cracking of the ceramic housing → seawater ingress contaminates gel. All three mechanisms cause progressive reading drift, not sudden failure - so the ICCP appears to run normally while silently over- or under-protecting the hull. Mandatory replacement at each drydock (every ~2.5 years).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 5 - ICCP vs SACRIFICIAL COMPARISON                 -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-comparison">⚖️ ICCP vs Sacrificial Anodes - Full Comparison</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>Sacrificial Anode</th><th>ICCP (Impressed Current)</th></tr>
    <tr><td>Working principle</td><td>Passive galvanic cell - Zn/Al anode naturally dissolves (more negative potential than steel) to protect hull</td><td class="ok">Active - external DC power source forces hull to cathodic potential using inert anodes</td></tr>
    <tr><td>Anode material</td><td>Zinc alloy (Al-Zn-In) or Al alloy - consumed over time. Must be replaced.</td><td class="ok">Mixed Metal Oxide on Titanium (MMO/Ti) - virtually non-consumable. 20–25 year life.</td></tr>
    <tr><td>Current control</td><td class="bad">Passive - fixed output determined by anode area and seawater conductivity. Cannot adapt.</td><td class="ok">Active closed-loop - auto-adjusts based on Ag/AgCl reference electrode feedback every few seconds.</td></tr>
    <tr><td>Protection potential</td><td>Naturally reaches <span class="n-val">−800 to −1000 mV</span> vs Ag/AgCl - can over-protect in warm/shallow water</td><td class="ok">Precisely regulated to <span class="n-val">−850 mV</span> ± tolerance regardless of seawater conditions</td></tr>
    <tr><td>Anode replacement</td><td class="bad"><span class="n-val">50–70%</span> consumed - replace every drydock (~2.5 yr)</td><td class="ok">MMO/Ti anodes last <span class="n-val">20–25 years</span>. Only reference electrodes replaced at drydock.</td></tr>
    <tr><td>Capital cost</td><td class="ok">Low capital cost - simple bolted fitting</td><td class="bad">Higher capital investment. Skilled ETO maintenance needed. Requires junction boxes, cabling, controller.</td></tr>
    <tr><td>Running cost</td><td class="bad">High recurring material replacement cost every dock cycle</td><td class="ok">Minimal running cost after installation - only electricity and Ag/AgCl electrodes</td></tr>
    <tr><td>Berth / canal</td><td class="ok">No stray current risk - passive system</td><td class="bad">Must switch OFF at berth and during canal transits - stray current hazard</td></tr>
    <tr><td>Best application</td><td>Small vessels, rudder/fin/thruster tunnel areas, backup anodes alongside ICCP</td><td class="ok">Large vessels (&gt;100 m LOA), trading in varying temperatures and salinities</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 6 - ICCP OPERATION                                 -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-operation">⚙️ ICCP System Operation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How ICCP works - circuit path:</strong> Controller converts AC (440 V / 220 V ship supply) → adjustable DC. (+) positive terminal → MMO/Ti anodes (flush-mounted below waterline, HDPE insulated housings, wired in parallel to equalise current). (−) negative terminal → hull structure directly. DC flows from anodes → through seawater (ionic current) → onto hull → drives hull potential negative. Ag/AgCl reference electrodes (2–4 per vessel, port/starboard fore and aft) continuously measure hull-to-seawater potential → controller PID loop adjusts output to maintain <span class="n-val">−850 mV</span> setpoint automatically.</div></div>

  <div class="n-h2">Why HDPE Insulation on Anode Housings?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The anode must be electrically isolated from the hull steel except through the seawater electrolyte. If the anode touched the hull directly (metallic contact), current would short-circuit through the metal instead of passing through seawater → no protection would reach the hull plating. The HDPE (High-Density Polyethylene) housing acts as both mechanical protection and electrical insulator for the anode assembly.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Switch OFF at berth - mandatory.</strong><br><strong>Canal transits (Suez/Panama) - also switch OFF:</strong> Close proximity of lock walls and shallow banks alters the electrochemical environment. Class society and manufacturer guidelines mandate ICCP switched OFF during canal transits to prevent localised over-protection or stray current faults to lock infrastructure. At berth: stray current flows through mooring wires and seawater into jetty pilings and nearby vessels. <span class="n-val">10 A</span> DC dissolves <span class="n-val">~10 kg</span> steel per year by Faraday's law. Also causes false reference readings → over-protection and paint disbondment on own hull.</div></div>

  <div class="n-h2">Voltage Trends Over Time</div>
  <ul class="n-list">
    <li><strong>After dry dock (new paint):</strong> Low voltage required - fresh anticorrosive coating provides near-complete hull coverage; minimal bare steel exposed; low current demand from controller.</li>
    <li><strong>After 6+ months:</strong> Voltage rises progressively - paint abrades from anchor work, tidal scrubbing, mechanical wear → more bare steel exposed → more current required to maintain −850 mV setpoint → controller output voltage increases.</li>
    <li><strong>Warm/tropical water (high conductivity):</strong> Lower driving voltage needed - electrolyte resistance is lower, ionic current flows more easily.</li>
    <li><strong>Cold/Arctic water (low conductivity):</strong> Higher driving voltage needed - electrolyte resistance increases, more EMF required to push same current.</li>
  </ul>

  <div class="n-h2">Regional Salinity &amp; Bio-Fouling Variations</div>
  <ul class="n-list">
    <li><strong>Baltic Sea (brackish water ~8 ppt salinity):</strong> Low salinity = high electrolyte resistance = significantly higher ICCP driving voltage required. Controller output will be much higher than open-ocean operation.</li>
    <li><strong>North Sea (~35 ppt, standard ocean salinity):</strong> Normal conductivity = standard driving voltage. Controller operates mid-range.</li>
    <li><strong>Micro-organism bio-fouling on anodes:</strong> Barnacles, algae, and weed accumulation on the anode surface create a resistive layer → current output drops for same voltage → hull under-protected. Clean anodes at drydock. Confirm protection potential with portable reference electrode if bio-fouling suspected.</li>
  </ul>

  <div class="n-h2">Manual vs Automatic Operation</div>
  <table class="n-table">
    <tr><th>Mode</th><th>When Used</th><th>How it Works</th><th>Risk</th></tr>
    <tr><td class="ok"><strong>AUTO</strong></td><td>Normal sea passage</td><td>Controller compares Ag/AgCl reading against −850 mV setpoint; PID loop adjusts DC output automatically</td><td class="ok">None - closed loop self-corrects</td></tr>
    <tr><td class="hl"><strong>MANUAL</strong></td><td>After drydock recommissioning; reference electrode suspected faulty</td><td>ETO manually sets output voltage/current; monitors hull potential with portable reference electrode</td><td class="bad">Human error - over/under protect if not monitored carefully</td></tr>
    <tr><td class="bad"><strong>OFF</strong></td><td>At berth, canal transit, drydock</td><td>System de-energised - no corrosion protection from ICCP (sacrificial anodes provide backup)</td><td class="bad">Hull relies solely on sacrificial anodes and paint coating</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 7 - COATINGS & CATHODIC DISBONDMENT                -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-coatings">🎨 Coating Systems &amp; Cathodic Disbondment</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "What happens if ICCP is over-protected? Why is it dangerous for the paint?"</strong> Cathodic disbondment is the direct consequence of over-protection and is a common oral question.</div></div>

  <div class="n-h2">How Paint and ICCP Work Together</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Paint is the primary defence; ICCP is backup for holidays (coating defects).</strong> A well-coated new hull may have &lt;1% bare steel area. ICCP current concentrates at paint holidays (defects) where bare steel is exposed. As paint degrades, bare steel area increases → ICCP current demand increases. The two systems are complementary: good coating reduces ICCP current demand; ICCP protects where coating fails. Without paint, ICCP current demand would be 5–10× higher.</div></div>

  <div class="n-h2">Cathodic Disbondment - Mechanism</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is cathodic disbondment?</strong> When hull potential is driven too negative (below −1100 mV), the cathodic reaction at the steel surface produces large quantities of OH⁻ (hydroxyl ions). This creates a strongly alkaline microenvironment (pH &gt;12) beneath the paint film at any pinhole or edge. The high alkalinity attacks the adhesive bond between paint primer and steel → paint blisters and lifts from the surface - spreading outward from each holiday. The paint appears intact from outside but has lost adhesion underneath.<br><br>
  <strong>Mechanism steps:</strong><br>
  1. Over-protection drives potential below −1100 mV<br>
  2. Cathodic reaction: O₂ + 2H₂O + 4e⁻ → 4OH⁻ &nbsp;(or 2H₂O + 2e⁻ → H₂ + 2OH⁻)<br>
  3. OH⁻ accumulates under paint at holidays → local pH &gt;12<br>
  4. Saponification (chemical breakdown) of epoxy binder → adhesion loss<br>
  5. Paint lifts in blisters around each holiday - disbondment area is 10–100× the holiday area<br>
  6. Now much more bare steel is exposed → even more current demanded → vicious cycle</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Over-Protection Effects</div>
      <div class="card-desc">
        Potential below <span class="n-val">−1100 mV</span><br><br>
        • Cathodic disbondment of paint<br>
        • H₂ evolution: 2H⁺ + 2e⁻ → H₂<br>
        • Hydrogen embrittlement of high-strength steel (propeller shaft, fasteners)<br>
        • Accelerated paint failure → hull exposed<br>
        • Blistering visible at drydock
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Under-Protection Effects</div>
      <div class="card-desc">
        Potential above <span class="n-val">−800 mV</span><br><br>
        • Active corrosion continues<br>
        • Hull pitting at anodic areas<br>
        • Rust staining<br>
        • Metal thickness loss<br>
        • Weld heat-affected zones particularly vulnerable
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Correct Protection Range</div>
      <div class="card-desc">
        <span class="n-val">−800 mV to −1050 mV</span> vs Ag/AgCl<br><br>
        • Target: <span class="n-val">−850 mV</span><br>
        • Paint adhesion maintained<br>
        • No hydrogen evolution<br>
        • Corrosion completely suppressed<br>
        • Coating and ICCP mutually supportive
      </div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Hydrogen embrittlement detail:</strong> High-strength steels (yield strength &gt;690 MPa) used for propeller shafts, high-tensile fasteners, and spring steels are susceptible to hydrogen embrittlement. Atomic hydrogen (H) produced by cathodic over-protection diffuses into the steel lattice → accumulates at grain boundaries → reduces ductility and fracture toughness → sudden brittle fracture under load. This is why the over-protection limit of −1100 mV is an absolute ceiling, not a guideline.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 8 - STRAY CURRENT                                  -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-stray">⚡ Stray Current Corrosion at Berth</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask: why switch ICCP off at berth?</strong> Know the exact mechanism - not just "stray current" but HOW and WHERE the corrosion occurs, and the quantitative consequence (Faraday's law figure).</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Mechanism - step by step:</strong><br>
  1. ICCP drives current from anodes → through seawater → to hull (normal operation at sea).<br>
  2. At berth: mooring wires, gangways, shore power earth cable, and the seawater itself all provide alternative metallic or ionic paths connecting the ship to the jetty's steel piling.<br>
  3. ICCP current strays into these alternative paths instead of returning normally through the controlled circuit.<br>
  4. When stray current <strong>exits</strong> from the jetty metalwork back into seawater to complete the circuit → that exit point becomes an ANODE → rapid anodic dissolution = corrosion of jetty steel at the exit point.<br>
  5. <span class="n-val">10 amperes</span> of stray DC dissolves <span class="n-val">~91 kg</span> of iron per year (Faraday's law: 1 A flowing for 1 year dissolves ~9.1 kg Fe). A typical ICCP outputs 5–100 A. Port authority liability consequence.<br>
  6. Shore power connection additionally links ship hull directly to terminal earthing system → creates unpredictable current paths → false reference electrode readings → controller may over-protect the hull.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Double problem at berth:</strong> (1) Stray current corrodes jetty infrastructure and nearby vessels (liability). (2) Nearby metallic structures at different potentials cause ship's Ag/AgCl reference electrode to read a falsely negative potential → controller sees "under-protection" → increases output → actual over-protection → hydrogen evolution and cathodic paint disbondment on own hull. ICCP OFF + fit galvanic isolator on shore earth conductor (prevents metallic bonding to terminal earthing system).</div></div>

  <div class="n-h2">Stray Current Sources and Monitoring</div>
  <table class="n-table">
    <tr><th>Source</th><th>Mechanism</th><th>Prevention</th></tr>
    <tr><td>Ship's own ICCP at berth</td><td class="bad">Current escapes via mooring wires and shore connections → corrodes jetty</td><td class="ok">Switch ICCP OFF at berth</td></tr>
    <tr><td>Shore power earth conductor</td><td class="bad">Connects hull to terminal earth grid → bidirectional stray current paths</td><td class="ok">Galvanic isolator on shore earth cable</td></tr>
    <tr><td>VFD / shaft inverter harmonics</td><td class="bad">High-frequency AC stray currents on shaft → arc through bearing oil film</td><td class="ok">Shaft earthing brush, shaft insulation couplings</td></tr>
    <tr><td>Nearby vessel ICCP</td><td class="bad">Neighbouring vessel's ICCP current strays into your hull via mooring wires</td><td class="ok">Both vessels switch ICCP OFF at berth; rubber-insert fairleads on mooring lines</td></tr>
    <tr><td>Port cathodic protection infrastructure</td><td class="bad">Jetty pile protection system current can flow back into ship hull</td><td class="ok">ICCP OFF. Discuss with port authority.</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 9 - ICCP FAULTS                                    -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-faults">🔌 ICCP Fault-Finding</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal and Sanjib ask ICCP faults in depth.</strong> Isolate faults to Power Circuit or Sensing Circuit - these are systematically different failure modes with different symptoms and remedies.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Systematic Diagnosis:</strong> The ICCP system is a closed loop. Faults must be isolated to either the <strong>Power Circuit</strong> (current path: Controller → Anodes → Seawater → Hull → Controller) or the <strong>Sensing Circuit</strong> (Reference Electrode → Controller input). One faulty reference electrode can mimic almost any protection failure.</div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">POWER CIRCUIT FAULTS</div>
      <div class="card-desc">
        <em>Path: Controller → Anodes → Seawater → Hull → Controller</em><br><br>
        <strong>Symptom - Open Circuit:</strong> High voltage, zero or near-zero current. Controller saturates at max output.<br>
        <strong>Cause:</strong> Disconnected cable at deck junction box, corroded terminal, sheared anode, or cracked anode cable insulation (water ingress → short to hull).<br>
        <strong>Action:</strong> Switch to MANUAL minimum output. Continuity test cable from controller through each junction box to anode terminal with multimeter. Check insulation resistance (Megger) cable to hull - should be &gt;1 MΩ. If anode sheared: run on remaining anodes; schedule repair at drydock.
      </div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">SENSING CIRCUIT FAULTS</div>
      <div class="card-desc">
        <em>Path: Reference Electrode → Signal Cable → Controller Input</em><br><br>
        <strong>Symptom - Reference Drift:</strong> Controller swings between minimum and maximum output continuously. Apparent hull potential fluctuates wildly. System hunts without settling.<br>
        <strong>Cause:</strong> Reference electrode gel depletion (drift) or broken/short-circuit sense cable. Bio-fouling of porous junction.<br>
        <strong>Action:</strong> Switch to MANUAL mode immediately. Measure hull potential with calibrated portable Ag/AgCl reference electrode independently. If manual reading shows correct −850 mV with manual current setting → reference electrode is faulty. Log, replace at first opportunity. Do NOT leave in AUTO with faulty reference.
      </div>
    </div>
  </div>

  <div class="n-h2">Common ICCP Fault Table</div>
  <table class="n-table">
    <tr><th>Symptom</th><th>Most Likely Cause</th><th>Immediate Action</th></tr>
    <tr><td class="bad">High voltage, zero current</td><td>Open circuit in anode feed cable or junction box</td><td>Switch MANUAL minimum. Continuity test cable/junction boxes. Megger insulation.</td></tr>
    <tr><td class="bad">Low voltage, high current</td><td>Short circuit - anode HDPE housing cracked → metallic contact to hull</td><td>Isolate individual anodes to find faulted anode. Mark for drydock replacement.</td></tr>
    <tr><td class="bad">Controller hunting / oscillating</td><td>Reference electrode failed (gel depleted, junction blocked)</td><td>Switch to MANUAL. Verify with portable reference. Replace faulty electrode.</td></tr>
    <tr><td class="bad">Steadily rising voltage for same current over months</td><td>Normal - paint coating degrading, more bare steel exposed</td><td>Normal. Log voltage trend. Note for drydock planning (new paint needed).</td></tr>
    <tr><td class="bad">Sudden low voltage requirement</td><td>Ship entered warm / high-salinity water (e.g. Red Sea)</td><td>Normal - electrolyte conductivity increased. Verify with chart of voyage.</td></tr>
    <tr><td class="bad">Over-protection (below −1100 mV)</td><td>Reference electrode reading falsely positive (reads less negative than actual hull potential) → controller increases output to compensate</td><td>Reduce output immediately. Verify with portable reference. Replace electrode.</td></tr>
    <tr><td class="bad">Under-protection (above −800 mV)</td><td>Anode circuit fault, or reference electrode reading falsely negative → controller reduces output</td><td>Switch to MANUAL. Increase output. Check anode circuit. Replace suspect reference.</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 10 - BONDING                                       -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-bonding">🔗 Electrical Bonding</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Bonding vs Earthing - critical distinction:</strong><br>
  <strong>Bonding</strong> connects all metallic components (hull, propeller shaft, rudder, piping, fin stabilisers) with low-resistance conductors → places all components at identical electrical potential → prevents bimetallic galvanic corrosion between dissimilar metals (e.g. bronze propeller and steel hull). No current flows normally through bonding conductors - they only carry current if a potential difference attempts to develop.<br>
  <strong>Earthing</strong> provides a fault current path to the hull (ship's earth) to trip a breaker on insulation failure. Current flows only during faults.<br><br>
  <strong>Difference in one sentence:</strong> Bonding = corrosion prevention (equalise potential). Earthing = electrical safety (fault current path).<br>
  Bonding resistance target: <span class="n-val">&lt;1 Ω</span> between any bonded component and hull.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Shaft earthing brush:</strong> Carbon brush maintains electrical continuity between the rotating propeller shaft and the hull. Without it: stray currents from propulsion VFDs and natural galvanic potential difference (bronze propeller at ~+0.3V vs steel hull at ~−0.5V) arc through the thin oil film in bearings → electrolytic corrosion and spark pitting of bearing surfaces → progressive bearing failure. Check brush wear and slip ring condition at every survey. Target resistance: <span class="n-val">&lt;1 Ω</span> shaft to hull.</div></div>

  <div class="n-h2">Hull Continuity Testing</div>
  <ol class="n-steps">
    <li>Use a calibrated low-resistance ohmmeter or Ducter instrument (not a standard multimeter - micro-ohm resolution needed)</li>
    <li>Test between rudder stock and hull - resistance must be <span class="n-val">&lt;1 Ω</span>. Rubber bearing seals can introduce high resistance if bonding strap corroded.</li>
    <li>Test shaft to hull via earthing brush - must be <span class="n-val">&lt;1 Ω</span>. Log reading. If high: clean brush and slip ring; if still high: replace brush.</li>
    <li>Test all deck piping flanges - rubber gaskets at insulating flanges must show high resistance (&gt;1 MΩ) to verify electrical isolation from jetty infrastructure where fitted.</li>
    <li>Log all results with date and weather conditions in the Ship's Electrical Maintenance Record.</li>
  </ol>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 11 - SHAFT EARTHING                                -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-shaft-detail">⚙️ Shaft Earthing Brush - Specifications &amp; Testing</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why shaft earthing is needed:</strong> Bronze propeller (potential ~+0.3 V vs SHE) and steel hull (potential ~−0.5 V vs SHE) naturally form a bimetallic galvanic cell with ~0.8 V EMF. Without bonding, this potential difference combined with stray VFD/alternator harmonic currents causes current to arc through the bearing oil film → electrolytic corrosion and spark pitting of main engine bearing surfaces, intermediate shaft bearings, and shaft seal areas.</div></div>

  <div class="n-h2">Construction</div>
  <ul class="n-list">
    <li>Smooth slip ring fitted to propeller shaft (or intermediate shaft, as accessible)</li>
    <li>High-conductivity graphite/carbon brush rides against the slip ring surface with spring pressure</li>
    <li>Brush holder assembly with compression spring to maintain constant contact force as brush wears</li>
    <li>Low-resistance flexible cables bonding brush holder → hull earth bar</li>
    <li>Some vessels fit two brushes (main and standby) in parallel for redundancy</li>
  </ul>

  <div class="n-h2">ETO Checks and Testing Procedure</div>
  <ol class="n-steps">
    <li>Measure shaft-to-hull resistance with Ducter or low-resistance ohmmeter: must be <span class="n-val">&lt;1 Ω</span>. If higher: brush worn, slip ring contaminated, or cable connection corroded.</li>
    <li>Inspect carbon brush length - replace if worn below minimum length (typically &lt;50% of original length or manufacturer's limit mark). A short brush loses spring-loaded contact pressure before reaching minimum length.</li>
    <li>Check brush holder spring tension - spring must maintain adequate contact force on slip ring. Weak spring = intermittent contact = arcing = pitting = accelerated wear cycle.</li>
    <li>Clean slip ring surface - remove carbon deposits with dry cloth; remove oil contamination with approved solvent. Polish lightly with 400-grit if surface is pitted. Pitting evidence = past arcing from insufficient brush contact.</li>
    <li>Check flexible cable connections at both ends for corrosion and tightness.</li>
    <li>Log resistance reading with date in maintenance record. Trend analysis: gradual resistance increase = normal brush wear. Sudden step increase = cable break or connection corrosion.</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - why shaft brush matters:</strong> Propeller is bronze, hull is steel = bimetallic couple → 0.8 V EMF. Bearing oil film = electrical insulator. Without shaft brush: shaft floats at bronze potential → stray currents arc through oil film insulator → bearing pitting → bearing failure. Shaft brush = continuous metallic bypass around the oil film insulator, keeping shaft at hull potential (zero differential).</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 12 - MGPS BASIC                                    -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-mgps">🌊 MGPS - Marine Growth Prevention System (Basic)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>MGPS ≠ ICCP.</strong> MGPS = internal seawater pipes and sea chests. ICCP = external hull. Surveyors always ask the difference. Both may run simultaneously on the same ship.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>MGPS Purpose:</strong> Prevents biological fouling (barnacles, mussels, algae, tube worms) inside sea chests, internal seawater cooling pipework, and heat exchangers. Bio-fouling inside pipes reduces flow area, degrades heat transfer, and can mechanically damage pump impellers and valve seats.<br><br>
  <strong>MGPS Working Principle:</strong> Low DC (<span class="n-val">0.5–4 V</span>, <span class="n-val">0.5–4 A</span> per anode pair) passed through copper anodes mounted in the sea chest. Copper anode dissolves slowly → Cu²⁺ ions released at <span class="n-val">~2 ppb</span> concentration - highly toxic to marine larvae at the settlement stage (prevents attachment). The ion-laden water flows through all seawater pipework providing system-wide protection. Aluminium anodes are paired with copper: Al³⁺ ions form a thin protective anti-corrosive coating on copper alloy heat exchanger tube surfaces.</div></div>

  <table class="n-table">
    <tr><th>Feature</th><th>MGPS</th><th>ICCP</th></tr>
    <tr><td>Purpose</td><td>Biological fouling prevention - kills marine larvae inside pipes</td><td>Electrochemical corrosion prevention - protects hull steel externally</td></tr>
    <tr><td>Location</td><td class="hl">Internal - sea chests, seawater pipes, heat exchangers</td><td class="hl">External - hull below waterline</td></tr>
    <tr><td>Anode material</td><td>Copper (Cu²⁺ ions) + Aluminium (Al³⁺ coating)</td><td>MMO/Ti (inert) or sacrificial Zn/Al</td></tr>
    <tr><td>Anode life</td><td class="bad"><span class="n-val">1–3 years</span> - consumed, replaced at drydock</td><td class="ok"><span class="n-val">20–25 years</span> (MMO/Ti)</td></tr>
    <tr><td>Operating voltage</td><td class="ok"><span class="n-val">0.5–4 V DC</span></td><td><span class="n-val">6–25 V DC</span></td></tr>
    <tr><td>Control</td><td>Simple fixed-current controller - no feedback loop</td><td>Closed-loop feedback via Ag/AgCl reference electrode</td></tr>
    <tr><td>Environmental limit</td><td class="hl">Cu²⁺ concentration: <span class="n-val">~2 ppb</span> - below IMO discharge threshold</td><td>N/A - no chemical discharge</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 13 - MGPS DETAILED                                 -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-mgps-detail">🌊 MGPS - Full Technical Details</div>

  <div class="n-h2">Anode Types and Roles</div>
  <ul class="n-list">
    <li><strong>Copper anode:</strong> Primary bio-fouling prevention. Cu²⁺ ions at 2 ppb lethal to barnacle cyprids, mussel veligers, and algal spores at their settlement stage. Does not affect adult marine life at these concentrations. Dissolved from top surface at controlled rate by DC current.</li>
    <li><strong>Aluminium anode:</strong> Supplementary role. Al³⁺ ions form a thin, adherent aluminium hydroxide (Al(OH)₃) layer on internal copper alloy surfaces of heat exchangers - provides both corrosion protection and secondary anti-fouling barrier.</li>
    <li><strong>Anode mounting:</strong> Anodes mounted inside sea chest (strainer box) in the incoming seawater flow path - ensures ion distribution through all downstream pipework. Typically two or three anode pairs per sea chest.</li>
    <li><strong>Interlock with sea suction:</strong> MGPS controller interlocked with sea suction valve position - system only energised when seawater is flowing. Running without water flow creates localised high ion concentration → may exceed discharge limits and accelerates anode consumption.</li>
  </ul>

  <div class="n-h2">Dosing Rate Calculation</div>
  <div class="n-formula">
    <div style="text-align:center; font-size:1.0em; padding:6px 0;">
      Target: <span class="n-val">2 ppb</span> Cu²⁺ in seawater flow<br>
      Current × Time → Anode mass dissolved (Faraday's law)<br>
      I = (Concentration × Flow rate × Molar mass of Cu) ÷ (Faraday constant × ionic charge)<br>
      Typical MGPS current: <span class="n-val">0.5–4 A per anode pair</span>
    </div>
  </div>

  <div class="n-h2">Drydock Maintenance</div>
  <ol class="n-steps">
    <li>Replace all copper and aluminium anodes - MGPS anodes are consumable, life 1–3 years</li>
    <li>Inspect sea chest interior for any residual fouling - clean if found (fouling beyond anodes means Cu²⁺ concentration was insufficient)</li>
    <li>Check anode mounting brackets for corrosion - anode must maintain firm electrical contact with its bracket</li>
    <li>Test anode-to-controller cable continuity and insulation</li>
    <li>Verify interlock operation - confirm system de-energises when sea suction valve is shut</li>
    <li>Commission after flooding - confirm current reading matches specification for new anode surface area</li>
  </ol>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 14 - DRY DOCK                                      -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-drydock">🏗️ Dry Dock Maintenance</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ICCP OFF before dry docking - mandatory and absolute.</strong> Running impressed current anodes in air creates no electrolyte return path → open circuit → voltage spikes. Arcing near fresh paint solvents = fire hazard. Also, ICCP running in dry dock can cause current to discharge through dock water or dock infrastructure on flooding.</div></div>

  <div class="n-h2">Pre-Docking Shutdown</div>
  <ol class="n-steps">
    <li>Switch OFF ICCP controller and isolate at switchboard. Record log entry with date and time.</li>
    <li>Switch OFF MGPS controller. Record log entry.</li>
    <li>Notify Chief Officer and Chief Engineer - hull protection now relies on sacrificial anodes and paint only.</li>
    <li>Verify ICCP panel shows zero voltage and zero current before docking commences.</li>
  </ol>

  <div class="n-h2">In Drydock - ICCP Inspection Sequence</div>
  <ol class="n-steps">
    <li><strong>MMO/Ti anode visual inspection:</strong> Check for physical damage (cracking, impact damage from debris). Verify HDPE insulating housing is intact - cracked housing allows anodes to short-circuit to hull plating. Inspect titanium substrate for corrosion.</li>
    <li><strong>Anode continuity test:</strong> Multimeter resistance check from deck junction boxes to each anode terminal. Any open circuit = cable fault. Megger test cable insulation to hull - must be &gt;1 MΩ.</li>
    <li><strong>Replace ALL Ag/AgCl reference electrodes:</strong> Mandatory every drydock (~2.5 years). Gel electrolyte depletes over this period → reading drift → unreliable control. Apply thread sealant/PTFE tape for watertight hull penetration seal. Record new electrode serial numbers in log.</li>
    <li><strong>Junction box inspection:</strong> Check cable glands for water ingress. Clean and re-grease all terminals. Replace any cable with cracked or brittle insulation. Re-megger after cleaning.</li>
    <li><strong>Sacrificial anode inspection and replacement:</strong> Any zinc/aluminium sacrificial anode consumed &gt;50–60% requires replacement. Rudder anodes, stern frame anodes, fin stabiliser anodes, bow thruster tunnel anodes - all to be checked and replaced as required.</li>
    <li><strong>Shaft earthing brush inspection:</strong> Check carbon brush length, spring tension, and slip ring condition. Test shaft-to-hull resistance &lt;1 Ω.</li>
    <li><strong>Rudder bonding strap:</strong> Inspect and test - resistance &lt;1 Ω rudder stock to hull. Replace corroded strap.</li>
    <li><strong>MGPS anode replacement:</strong> Replace all copper and aluminium anodes in sea chest(s).</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - A-R-A-C:</strong> <strong>A</strong>nodes (MMO/Ti - inspect and Megger) | <strong>R</strong>eference electrodes (Ag/AgCl - replace every dock) | <strong>A</strong>uto controller (reset setpoint after commissioning) | <strong>C</strong>ables and connections (continuity + insulation test). This covers every major ICCP drydock item.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 15 - DRYDOCK RE-COMMISSIONING                      -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-commissioning">🔄 Drydock Re-commissioning Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Always commission in MANUAL mode after flooding - never switch directly to AUTO.</strong> New reference electrodes need time to stabilise. Manual verification confirms everything is connected and working before trusting automatic control.</div></div>

  <ol class="n-steps">
    <li><strong>After dock flooding and during approach/undocking:</strong> All ICCP circuits remain OFF. Do not energise until vessel is completely waterborne and clear of dock walls and infrastructure.</li>
    <li><strong>Visual confirmation:</strong> Verify all junction box covers are closed and sealed. Confirm new Ag/AgCl reference electrode installations are watertight.</li>
    <li><strong>Switch on in MANUAL mode at minimum output (typically 1–2 V, &lt;5 A).</strong> Observe panel ammeter - current should rise as seawater contacts anodes. Zero current = open circuit fault. Immediate short-circuit current = HDPE insulation fault on anode housing.</li>
    <li><strong>Allow 15–30 minutes for new reference electrodes to equilibrate</strong> - new Ag/AgCl electrodes require contact time with seawater for the KCl gel to fully saturate and stabilise. Early readings may be misleading.</li>
    <li><strong>Gradually increase output in MANUAL while monitoring hull potential reading.</strong> Target <span class="n-val">−850 mV</span>. If hull potential swings, check reference electrode signal cables.</li>
    <li><strong>Compare readings between multiple reference electrodes</strong> (port vs starboard, fore vs aft). Readings should agree within ±50 mV. Large disagreement = one electrode still equilibrating or faulty cable.</li>
    <li><strong>Switch to AUTO mode</strong> when all reference readings are stable and within ±50 mV of each other and controller setpoint is confirmed at <span class="n-val">−850 mV</span>.</li>
    <li><strong>Log all commissioning parameters:</strong> voltage, current, all reference electrode readings, mode (AUTO), date, time, signature. File in Electrical Maintenance Record.</li>
  </ol>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 16 - ADVANCED NOTES (new)                          -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-advanced">📐 Advanced Notes - Surveyor Technical Questions</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body">This section covers material asked by technically inclined surveyors (Deswal, Kamath). These topics are not asked in every oral but understanding them elevates your answers above rote recall.</div></div>

  <div class="n-h2">Pourbaix Diagram - Thermodynamic Basis for Protection Potential</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>What is a Pourbaix (E-pH) diagram?</strong> A thermodynamic diagram that maps the equilibrium states of iron (Fe) across all combinations of electrode potential (E, vertical axis) and pH (horizontal axis). Three regions exist for iron:<br><br>
  <strong>1. Corrosion region</strong> (high E, low/neutral pH): Fe dissolves as Fe²⁺ or Fe³⁺ ions - active corrosion.<br>
  <strong>2. Passivation region</strong> (intermediate E, high pH): Fe surface forms a solid oxide/hydroxide film (Fe₂O₃, Fe₃O₄) - corrosion suppressed but not by CP.<br>
  <strong>3. Immunity region</strong> (low E - negative potential - any pH): Fe thermodynamically stable as solid metal. No dissolution possible. <strong>This is the region ICCP operates in.</strong><br><br>
  <strong>Why this matters for ICCP:</strong> The protection potential of <span class="n-val">−800 mV</span> vs Ag/AgCl (approximately −578 mV vs SHE) places iron inside the immunity region at seawater pH (~8.0). Cathodic protection is thermodynamically sound - we are driving the potential below the Fe/Fe²⁺ equilibrium line. The −1100 mV over-protection limit is where hydrogen evolution (immunity to hydrogen embrittlement of steel) begins to dominate.</div></div>

  <div class="n-h2">Tafel Slopes - Kinetic Basis for Protection Current</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why does current flow to achieve protection?</strong> The Pourbaix diagram shows thermodynamics (equilibrium), but in practice the hull potential must be moved from its free corrosion potential (~−500 mV vs Ag/AgCl in aerated seawater) to −850 mV. This requires driving current through the electrochemical double layer - the kinetics are described by the Butler-Volmer equation, and the Tafel equation is its simplified form:<br><br>
  <strong>Tafel equation:</strong> η = b · log(i / i₀)<br>
  where η = overpotential (mV), b = Tafel slope (~120 mV/decade for oxygen reduction on steel), i = applied current density, i₀ = exchange current density<br><br>
  <strong>Practical meaning:</strong> Every 120 mV of additional negative potential requires 10× more current density. This is why current demand rises sharply as paint ages (more bare steel area) and why over-protection requires disproportionately large currents - the current-potential relationship is logarithmic, not linear. For an oral exam: simply state that the Tafel slope explains why ICCP current demand is non-linear and why maintaining the system at −850 mV (not more negative) minimises current waste while achieving full protection.</div></div>

  <div class="n-h2">Tunnel Thruster ICCP - Separate Zone Protection</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why thrusters need separate consideration:</strong> Bow/stern thruster tunnels are cylindrical sections open at both ends - the seawater inside a tunnel has a different flow regime from the main hull. The tunnel interior is partially shielded from ICCP current from main hull anodes by the tunnel geometry (current cannot bend sharply around the tunnel entrance). Protection at the far end of a long tunnel may be insufficient from external anodes alone.<br><br>
  <strong>Solution - dedicated tunnel anodes:</strong><br>
  (1) Sacrificial zinc or aluminium anodes bolted inside the thruster tunnel, spaced along its length. These are inspected and replaced at each drydock.<br>
  (2) Some installations fit dedicated small ICCP anodes in longer tunnels with their own reference electrode and controller zone.<br>
  (3) MMO/Ti anodes at tunnel entrance improve current penetration but do not fully protect the full tunnel length on large vessels.<br><br>
  <strong>Material note:</strong> Thruster impellers are typically stainless steel or bronze. The propeller-shaft galvanic couple concern (bronze–steel) also applies inside the tunnel. Bronze impeller + carbon steel tunnel = bimetallic corrosion at water-immersed contact points - bonding and sacrificial anode protection both required.</div></div>

  <div class="n-h2">Faraday's Law Applied - Corrosion Quantification</div>
  <div class="n-formula">
    <div style="text-align:center; font-size:1.0em; padding:8px 0;">
      <strong>m = (M × I × t) ÷ (n × F)</strong><br><br>
      m = mass dissolved (grams) &nbsp;|&nbsp; M = molar mass (Fe = 55.85 g/mol)<br>
      I = current (amperes) &nbsp;|&nbsp; t = time (seconds)<br>
      n = electrons transferred (Fe²⁺: n = 2) &nbsp;|&nbsp; F = Faraday constant = 96,485 C/mol<br><br>
      Example: 10 A stray current for 1 year (3.156 × 10⁷ s):<br>
      m = (55.85 × 10 × 3.156×10⁷) ÷ (2 × 96,485) ≈ <span class="n-val">91 kg Fe</span> dissolved per year
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 17 - SURVEYOR Q&A                                  -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 10</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Named surveyor patterns: Sanjib and Deswal ask ICCP working, faults, and reference electrode in depth. Kamath asks dry dock procedure. Vishwanathan asks bonding vs earthing and shaft brush. Praveen Nair asks MGPS difference from ICCP.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Explain ICCP working in detail.</strong><br><strong>Ideal Answer:</strong> Controller converts AC mains (440 V) → adjustable DC. Positive terminal connects to inert MMO/Ti anodes flush-mounted below waterline in HDPE housings, wired in parallel. Negative terminal connects to hull. DC flows from anodes → through seawater (ionic current) → onto hull surface → drives hull potential negative. Ag/AgCl reference electrodes (typically 2–4 per vessel, port and starboard) measure hull-to-seawater electrochemical potential → controller PID loop continuously adjusts output to maintain <span class="n-val">−850 mV</span> setpoint vs Ag/AgCl automatically. At this potential the hull is in the immunity region of the Fe-pH (Pourbaix) diagram - thermodynamically, iron cannot dissolve.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the reference electrode? Material? Why replaced at dry dock?</strong><br><strong>Ideal Answer:</strong> The reference electrode is the sensing element of the ICCP control loop. It measures hull-to-seawater electrochemical potential and feeds this to the controller for automatic regulation - preventing both under-protection (corrosion continues) and over-protection (cathodic disbondment, hydrogen evolution). Material: silver wire electrochemically coated with silver chloride (Ag/AgCl) in a potassium chloride (KCl) gel electrolyte, enclosed in a porous ceramic housing for ionic contact with seawater. Potential vs SHE: <span class="n-val">+0.222 V</span>. Replaced every <span class="n-val">~2.5 years</span> (each drydock) because the internal KCl gel electrolyte slowly leaches out through the porous junction → electrolyte concentration changes → electrode potential drifts → incorrect protection readings without any alarm.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why switch off ICCP at berth? What happens if not switched off?</strong><br><strong>Ideal Answer:</strong> Two problems occur simultaneously. First: stray current corrosion - ICCP current strays through mooring wires, gangways, and seawater into jetty steel pilings. Where this current exits the metalwork back into seawater, that point becomes an anode and corrodes. By Faraday's law: <span class="n-val">10 A</span> of stray DC dissolves <span class="n-val">~91 kg</span> of iron per year - potential port authority liability. Second: false reference electrode reading - nearby metallic jetty structure at a different potential distorts the seawater potential field around the reference electrode → controller reads falsely → may over-protect the hull → hydrogen evolution and cathodic disbondment of paint on own hull. Switch-off is mandatory per SMS, class rules, and port regulations. Galvanic isolator on shore earth cable also required.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ICCP panel voltage - will it increase or decrease after 6 months?</strong><br><strong>Ideal Answer:</strong> Increase. After dry dock, fresh anticorrosive paint gives &gt;95% hull coverage - very small area of bare steel, so very low current demand to hold −850 mV. Over 6 months at sea, paint gradually abrades from anchor work, tidal scrubbing, and mechanical wear → progressively more bare steel exposed → higher current required → controller increases output voltage to maintain the setpoint. Also: if the vessel trades in colder water, electrolyte resistance is higher → further voltage increase needed for same current. Trend is therefore: steady increase in output voltage for same hull protection level as the vessel ages between dockings.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ICCP panel shows high voltage but zero current. What is the fault?</strong><br><strong>Ideal Answer:</strong> Open circuit in the anode feed circuit. Controller pushes maximum voltage but the circuit is broken - no ionic return path exists so no current can flow. Possible causes: disconnected cable terminal at deck junction box, corroded or broken cable, or anode sheared from hull mounting (rare but occurs from underwater impact or anchor cable chafing). If this occurs in drydock (system accidentally left energised while ship is out of water): air cannot sustain ionic current → same symptom. Immediate risk: voltage spike and potential arcing near solvent-based paint vapours - fire hazard. Correct action: switch to MANUAL minimum output, systematically check continuity from controller through each junction box to each anode terminal using multimeter. Megger test cable insulation to hull.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What causes over-protection? What are the consequences?</strong><br><strong>Ideal Answer:</strong> Most common cause: reference electrode drift - gel depletes → electrode reads falsely positive (less negative than actual hull potential) → controller thinks hull is under-protected → increases output → actual hull potential goes below −1100 mV. Consequences: (1) Cathodic disbondment of paint - OH⁻ ions produced by over-protection accumulate under paint at holidays → pH &gt;12 → saponification of epoxy primer binder → paint blisters and lifts, exposing more bare steel. (2) Hydrogen evolution - 2H⁺ + 2e⁻ → H₂ at hull surface. (3) Hydrogen embrittlement - atomic H diffuses into high-strength steel of propeller shafts and fasteners → brittle fracture risk. Immediate action: reduce output, verify with portable reference electrode, replace faulty reference electrode.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is MGPS? How does it differ from ICCP?</strong><br><strong>Ideal Answer:</strong> MGPS (Marine Growth Prevention System) prevents biological fouling inside sea chests and internal seawater cooling pipework. Low DC (<span class="n-val">0.5–4 V, 0.5–4 A</span> per anode pair) through copper anodes in the sea chest releases Cu²⁺ ions at ~2 ppb - toxic to marine larvae at settlement stage, preventing bio-fouling from taking hold inside pipes and heat exchangers. Aluminium anodes are paired with copper to form a protective Al(OH)₃ coating on internal copper-alloy heat exchanger surfaces. Key differences from ICCP: MGPS = internal pipes (biological protection), open-loop fixed current control, consumable copper/aluminium anodes (1–3 year life). ICCP = external hull (electrochemical corrosion protection), closed-loop feedback control via Ag/AgCl reference electrode, inert MMO/Ti anodes (20–25 year life).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Bonding vs earthing - what is the difference?</strong><br><strong>Ideal Answer:</strong> Bonding connects all metallic components (hull, propeller shaft, rudder, piping, fin stabilisers) with low-resistance conductors at identical electrical potential. Purpose: prevents bimetallic galvanic corrosion between dissimilar metals (bronze propeller + steel hull). No current flows through bonding conductors under normal conditions. Earthing provides a fault current path back to the hull (ship's earth) to trip a breaker during an insulation failure. Current only flows during faults. Summary: Bonding = corrosion prevention (zero potential difference between components). Earthing = electrical safety (overcurrent fault path). Resistance target for both: &lt;<span class="n-val">1 Ω</span>. Shaft earthing brush specifically: maintains bonding continuity to the rotating shaft - without it, stray VFD currents arc through bearing oil film → bearing pitting and failure.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Walk me through ICCP drydock maintenance procedure.</strong><br><strong>Ideal Answer:</strong> Before docking: switch OFF ICCP and MGPS, record log entries. In drydock: (1) Visually inspect MMO/Ti anodes for physical damage and check HDPE housings are intact. (2) Continuity test all anode cables from junction boxes; Megger insulation - must be &gt;1 MΩ. (3) Mandatorily replace all Ag/AgCl reference electrodes - gel depletes after ~2.5 years. (4) Inspect and clean junction boxes; replace cracked cables. (5) Replace sacrificial anodes (rudder, stern, thruster tunnel) if &gt;50–60% consumed. (6) Inspect shaft earthing brush, test &lt;1 Ω shaft-to-hull. (7) Test rudder bonding &lt;1 Ω. After flooding: commission in MANUAL mode at minimum output; allow reference electrodes 15–30 min to equilibrate; verify −850 mV with stable readings from all electrodes; then switch to AUTO. Log all parameters.</div></div>

  <!-- ═══════════════════════════════════════════════════════════ -->
  <!-- SECTION 18 - QUICK REVISION (LAST)                         -->
  <!-- ═══════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 10</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Surveyor Frequency</th><th>Key Points - Instant Recall</th></tr>
    <tr><td><strong>ICCP working principle</strong></td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Hull = cathode | MMO/Ti anodes in parallel | Ag/AgCl reference | −850 mV setpoint | AC→DC controller | HDPE insulated housings</td></tr>
    <tr><td><strong>Protection potential values</strong></td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Min <span class="n-val">−800 mV</span> | Target <span class="n-val">−850 mV</span> | Over-protect below <span class="n-val">−1100 mV</span> | Output <span class="n-val">6–25 V, 5–100 A</span></td></tr>
    <tr><td><strong>Switch off at berth / canal</strong></td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Stray current → jetty corrosion | 10 A = ~91 kg steel/year | False ref readings → over-protection + disbondment | Canal transits also OFF</td></tr>
    <tr><td><strong>Reference electrode</strong></td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Ag/AgCl | +0.222 V vs SHE | Replace every <span class="n-val">2.5 years</span> | Gel depletes → drift → wrong control | Cu/CuSO₄ for drydock/soil only</td></tr>
    <tr><td><strong>Cathodic disbondment</strong></td><td class="hl">⭐⭐⭐⭐ Deswal, Kamath, Sanjib</td><td>Below −1100 mV | OH⁻ builds under paint → pH &gt;12 → epoxy bond fails → blistering | H₂ evolution | H embrittlement of shaft/fasteners</td></tr>
    <tr><td><strong>Over-protection causes</strong></td><td class="hl">⭐⭐⭐⭐ Deswal, Sanjib</td><td>Reference electrode drift (gel depleted) → reads falsely positive → controller over-corrects | Remedy: MANUAL mode, portable reference, replace electrode</td></tr>
    <tr><td><strong>ICCP fault diagnosis</strong></td><td class="hl">⭐⭐⭐⭐ Deswal, Sanjib</td><td>High V, zero A = open circuit (anode cable/junction box) | Hunting controller = sensing circuit fault (ref electrode) | Low V, high A = HDPE housing shorted to hull</td></tr>
    <tr><td><strong>Voltage trend over time</strong></td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td>Paint ageing → voltage UP | Warm/tropical water → voltage DOWN | Cold/Arctic water → UP | Baltic (low salinity) → UP significantly</td></tr>
    <tr><td><strong>Bonding vs earthing</strong></td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Praveen Nair</td><td>Bonding = equi-potential, corrosion prevention, no normal current | Earthing = safety, fault current path | Both &lt;1 Ω</td></tr>
    <tr><td><strong>Shaft earthing brush</strong></td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>Carbon brush on slip ring | Bronze propeller vs steel hull = 0.8 V EMF | Without brush: bearing pitting from stray VFD currents arcing through oil film | &lt;1 Ω target</td></tr>
    <tr><td><strong>MGPS vs ICCP</strong></td><td class="hl">⭐⭐⭐⭐ Praveen Nair, all surveyors</td><td>MGPS = internal pipes, Cu²⁺ at 2 ppb, bio-fouling prevention | ICCP = external hull, MMO/Ti anodes, corrosion prevention | MGPS anodes 1–3 yr life | Both may run simultaneously</td></tr>
    <tr><td><strong>Dry dock maintenance</strong></td><td class="hl">⭐⭐⭐ Deswal, Kamath</td><td>OFF before dock | Inspect MMO/Ti anodes + HDPE | Megger cables | Replace ALL Ag/AgCl | Replace sacrificial &gt;50% consumed | Shaft brush check</td></tr>
    <tr><td><strong>Re-commissioning</strong></td><td class="hl">⭐⭐⭐ Kamath, Rajeev Wad</td><td>MANUAL first after flooding | 15–30 min ref electrode equilibration | Compare port/stbd/fore/aft readings | Then AUTO | Log all parameters</td></tr>
    <tr><td><strong>ICCP vs sacrificial anodes</strong></td><td class="hl">⭐⭐⭐ Multiple surveyors</td><td>Sacrificial = passive, consumed every 2.5 yr, no stray current risk | ICCP = active, MMO/Ti 20–25 yr, must switch OFF at berth | Large vessels: ICCP. Small vessels/backup: sacrificial.</td></tr>
    <tr><td><strong>Tunnel thruster protection</strong></td><td class="hl">⭐⭐ Deswal, technical surveyors</td><td>Tunnel interior shielded from main hull ICCP current | Dedicated sacrificial Zn/Al anodes inside tunnel | Some: small dedicated ICCP zone | Replace at drydock</td></tr>
    <tr><td><strong>Faraday's law (stray current)</strong></td><td class="hl">⭐⭐ Technical surveyors</td><td>m = MIt/nF | 10 A × 1 year → ~91 kg Fe dissolved | Shows why even small stray currents are destructive | n=2 for Fe²⁺, F=96,485 C/mol</td></tr>
  </table>

  </div>
</div>
</div>
`);
window.loadNotes("T02", `<div class="view" id="view-notes-t02">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T02')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 2 - High Voltage Systems</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">6.6 kV / 11 kV</span>
      <span class="tag tag-purple">VCB · NER · IRM</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('t2-basics')">HV Basics</button>
    <button class="anc-btn" onclick="jumpTo('t2-multiples')">Why 1.1 kV?</button>
    <button class="anc-btn" onclick="jumpTo('t2-disadv')">Adv &amp; Disadv</button>
    <button class="anc-btn" onclick="jumpTo('t2-ner')">NER</button>
    <button class="anc-btn" onclick="jumpTo('t2-vcb')">VCB &amp; SF6</button>
    <button class="anc-btn" onclick="jumpTo('t2-sf6-full')">SF6 Hazards</button>
    <button class="anc-btn" onclick="jumpTo('t2-deadfront')">Dead Front</button>
    <button class="anc-btn" onclick="jumpTo('t2-msb-safeties')">MSB Safeties</button>
    <button class="anc-btn" onclick="jumpTo('t2-msb-clearances')">MSB Clearances</button>
    <button class="anc-btn" onclick="jumpTo('t2-busbars')">Busbars</button>
    <button class="anc-btn" onclick="jumpTo('t2-arc')">Arc Flash</button>
    <button class="anc-btn" onclick="jumpTo('t2-safety')">HV PTW</button>
    <button class="anc-btn" onclick="jumpTo('t2-gloves')">HV Gloves</button>
    <button class="anc-btn" onclick="jumpTo('t2-glove-rules')">Glove Rules</button>
    <button class="anc-btn" onclick="jumpTo('t2-vcb-maint')">VCB Maint.</button>
    <button class="anc-btn" onclick="jumpTo('t2-vcb-timing')">VCB Timing</button>
    <button class="anc-btn" onclick="jumpTo('t2-ir')">HV IR Test</button>
    <button class="anc-btn" onclick="jumpTo('t2-ir-formula')">Min IR Formula</button>
    <button class="anc-btn" onclick="jumpTo('t2-megger-special')">Megger Rules</button>
    <button class="anc-btn" onclick="jumpTo('t2-irm')">IRM</button>
    <button class="anc-btn" onclick="jumpTo('t2-bonding')">Tanker Bonding</button>
    <button class="anc-btn" onclick="jumpTo('t2-shaft')">Shaft Earthing</button>
    <button class="anc-btn" onclick="jumpTo('t2-streaming')">Cargo Hose IR</button>
    <button class="anc-btn" onclick="jumpTo('t2-hvsc-advanced')">HVSC Standards</button>
    <button class="anc-btn" onclick="jumpTo('s-skin-effect')">Skin Effect</button>
    <button class="anc-btn" onclick="jumpTo('s-corona-effect')">Corona Effect</button>
    <button class="anc-btn" onclick="jumpTo('s-ct-shorting')">CT Shorting</button>
    <button class="anc-btn" onclick="jumpTo('s-pt-fuse-vs-ct')">PT vs CT Fuse</button>
    <button class="anc-btn" onclick="jumpTo('s-preferential-trip')">Preferential Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-megger-vs-multimeter')">Megger vs DMM</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyor-qa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('t2-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 1 - HV BASICS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-basics">⚡ High Voltage Systems - Basics &amp; Definition</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t02-hv-protection-scheme.png" alt="HV Protection Scheme">
    <div class="note-diagram-cap">Fig. HV Protection Scheme — G1–G4 generators, 3×6.6kV HV MSB, 3×440V LV MSB, protection relays per feeder type</div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition (IEC 60092):</strong> High Voltage is above <span class="n-val">1000V AC</span> or <span class="n-val">1500V DC</span>. Typical HV on ships: <strong><span class="n-val">3.3 kV</span></strong>, <strong><span class="n-val">6.6 kV</span></strong> (most common), <strong><span class="n-val">11 kV</span></strong> (very large ships - LNG carriers, cruise ships, VLCCs). HV is justified when total electrical power demand exceeds approximately <span class="n-val">3–5 MW</span>.</div></div>
  <div class="n-formula">P = √3 × V × I × PF<div class="label">Doubling V halves I for the same power output - the entire HV justification in one equation</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked example:</strong> <span class="n-val">6.6 kV</span> at <span class="n-val">1000 A</span> delivers the SAME power as <span class="n-val">440 V</span> at <span class="n-val">15,000 A</span>. The cable sized for 1000 A vs 15,000 A represents a massive saving in copper weight, cost, and cable routing space. This is the single most important exam justification for HV.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Higher Volts = Lower Amps = Thinner Cables = Lighter Ship." HV chosen when load exceeds <span class="n-val">3–5 MW</span>.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 2 - WHY 1.1 kV MULTIPLES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-multiples">🔢 Why HV Voltages are Multiples of <span class="n-val">1.1 kV</span></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Praveen Nair asks this almost every session.</strong> Must know form factor derivation and IEC series by heart.</div></div>
  <div class="n-formula">Form Factor = V<sub>rms</sub> / V<sub>avg</sub> = (0.707 × V<sub>peak</sub>) / (0.637 × V<sub>peak</sub>) = <strong>1.11 ≈ 1.1</strong><div class="label">This 1.1 is the base of the entire IEC standard voltage series</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Full explanation (three points):</strong><br>
  1. <strong>Form Factor = 1.11:</strong> For a pure sinusoidal AC waveform, V<sub>rms</sub>/V<sub>avg</sub> = 1.11 (≈1.1). The <span class="n-val">1.1 kV</span> forms the IEC base unit.<br>
  2. <strong>IEC Standard Series:</strong> 1.1 → 3.3 → 6.6 → 11 → 33 → 66 → 110 → 132 → 220 → 400 kV. On ships: 3.3 = 3×1.1 · 6.6 = 6×1.1 · 11 = 10×1.1. Standardisation simplifies transformer design, insulation co-ordination and ensures global equipment interoperability.<br>
  3. <strong>Insulation Design:</strong> HV insulation must withstand the PEAK voltage - V<sub>peak</sub> = V<sub>rms</sub> × √2 = V<sub>rms</sub> × 1.414. Form factor ties RMS to peak, ensuring consistent insulation levels across the series.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Deswal):</strong> Why is the HV system not fully floating like LV ships?<br><strong>Ideal Answer:</strong> On a fully floating HV system, a single earth fault causes healthy phase voltage to rise from phase voltage to line voltage (e.g. <span class="n-val">3.81 kV → 6.6 kV</span> on a 6.6 kV system), severely stressing insulation of healthy phases. There is also a ferroresonance risk - dangerous oscillatory overvoltages. An NER provides a defined earth reference that limits this overvoltage rise while also limiting fault current to a safe level (5–30 A).</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 3 - ADVANTAGES & DISADVANTAGES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-disadv">⚖️ HV Advantages &amp; Disadvantages - Complete List</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">✓ Advantages</div>
      <ul class="n-list" style="margin:0">
        <li><strong>① Reduced Current</strong> - same power, lower I → smaller cable cross-sections → less weight &amp; cost.</li>
        <li><strong>② Lower I²R Losses</strong> - less current = less heat lost in cables → improved efficiency.</li>
        <li><strong>③ Smaller Cables</strong> - reduces weight and space in cable trays/bulkheads.</li>
        <li><strong>④ Smaller Generator Windings</strong> - less copper for same kVA rating.</li>
        <li><strong>⑤ Economical Long-Distance Transmission</strong> - essential on large ships with widely separated loads (thrusters fore and aft).</li>
        <li><strong>⑥ Better Voltage Regulation</strong> - lower current means less resistive voltage drop along cables.</li>
        <li><strong>⑦ Enables Very Large Loads</strong> - VFD-driven cargo pumps, azipods, bow thrusters up to 20+ MW.</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">✗ Disadvantages</div>
      <ul class="n-list" style="margin:0">
        <li><strong>① Greater Safety Hazard</strong> - higher voltage = more lethal on contact. Stricter PTW required.</li>
        <li><strong>② Special Switchgear</strong> - VCB, SF6 breakers, HV cables, HV motors all more expensive.</li>
        <li><strong>③ Trained Personnel</strong> - crew must hold HV authorisation certificate.</li>
        <li><strong>④ Higher Equipment Cost</strong> - switchgear, transformers, motors, PPE all more expensive.</li>
        <li><strong>⑤ Step-Down Transformers</strong> - needed to provide 440 V for normal use.</li>
        <li><strong>⑥ Complex Protection</strong> - NER, IRM, differential relays, earth fault monitors.</li>
        <li><strong>⑦ Longer Discharge Time</strong> - HV cables and windings hold capacitive charge longer. Minimum 5 min wait after isolation before testing.</li>
      </ul>
    </div>
  </div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 4 - NER
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-ner">🔌 Neutral Earthing Resistor (NER)</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t02-earth-neutral-system.png" alt="Earth Neutral System">
    <div class="note-diagram-cap">Fig. Earth Neutral System — earthing switch, NER, generator circuit breaker, HV switchboard, earth fault path via NER</div>
  </div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam Must Know:</strong> "The compromise between solid earth (too much current) and floating (too much voltage)." Every surveyor asks this - know the formula, typical values, and why it is needed.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Without NER - Solid Earth</div>
      <div class="card-desc">Earth fault current = V<sub>phase</sub> / Z<sub>system</sub> → <strong>thousands of amps</strong> → severe arc flash, stator winding destruction, fire. Unacceptable.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Without NER - Fully Floating</div>
      <div class="card-desc">First fault not detected - dangerous for personnel. On HV, healthy phase voltage rises from phase to line voltage (<span class="n-val">3.81 kV → 6.6 kV</span>) stressing all insulation. Ferroresonance risk.</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">With NER - The Solution ✓</div>
      <div class="card-desc">Connects HV generator star point to earth via a resistor. Limits fault current to <span class="n-val">5–30 A</span>. Provides defined earth reference to limit overvoltage. Earth fault relay detects and trips generator instantly.</div>
    </div>
  </div>
  <div class="n-formula">R<sub>NER</sub> = V<sub>phase</sub> / I<sub>fault max</sub> &nbsp;|&nbsp; V<sub>phase</sub> = V<sub>line</sub> / √3<div class="label">6.6 kV system: V_phase = 6600/1.732 = 3810 V</div></div>
  <table class="n-table">
    <tr><th>Fault Current Limit</th><th>R<sub>NER</sub> for 6.6 kV</th><th>Notes</th></tr>
    <tr><td><span class="n-val">10 A</span></td><td class="hl"><span class="n-val">381 Ω</span></td><td>3810 / 10 = 381 ohms</td></tr>
    <tr><td><span class="n-val">5 A</span></td><td class="hl"><span class="n-val">762 Ω</span></td><td>3810 / 5 = 762 ohms</td></tr>
    <tr><td>Typical range</td><td class="hl"><span class="n-val">300–800 Ω</span></td><td>For 6.6 kV ships</td></tr>
    <tr><td>IEC 80005-1 min rating</td><td class="hl"><span class="n-val">Min 25 A for 5 s</span></td><td>HVSC shore connection requirement</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath):</strong> What is the neutral point and how is NER connected?<br><strong>Ideal Answer:</strong> The neutral (star point) is where the three phase windings of the generator/transformer secondary meet. In a star-connected HV generator, the neutral terminal is directly available - NER connects between this neutral and the ship's hull (earth). In a delta-connected HV generator, there is NO neutral point, so a <strong>zig-zag (earthing) transformer</strong> is used to create an artificial neutral, and the NER is connected to that. The NER is mounted in a protected restricted-access enclosure in the HV switchboard room.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>NER Thermal Rating:</strong> The NER must withstand the fault current for the duration before the protection trips. Typically rated for <span class="n-val">5–10 seconds</span> continuous at rated fault current. On HVSC systems (IEC 80005-1): minimum 25 A for 5 seconds. NER is made of stainless steel or nichrome resistance elements, mounted in a ventilated enclosure. Earth fault relay at neutral monitors current through NER - alarm at low current, trip at sustained fault.</div></div>


  <div class="n-h2">High-Resistance Grounding (HRG) - Alternative to NER</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>HRG is a modern alternative to the conventional NER</strong> that offers significant operational advantages for HV and MV systems on ships and offshore units.<br><br>
  <strong>What is HRG?</strong> Instead of a fixed resistor between the neutral and earth, a <strong>High-Resistance Grounding</strong> system inserts a high-value resistance (typically 1–5 kΩ) between the system neutral and earth. This limits the ground fault current to a very low level - typically <span class="n-val">1–5 A</span> - compared to 5–30 A for a conventional NER.<br><br>
  <strong>Key Advantage - Continuous Operation under First Fault:</strong> Because the fault current is so small (below the level that causes equipment damage or fire), the system can <strong>continue operating safely after a single phase-to-earth fault</strong>. The fault does not need to be cleared immediately - this is critical on ships where an unexpected blackout could be more dangerous than the fault itself. A conventional NER or solidly earthed system would trip immediately on first fault.<br><br>
  <strong>Fault Detection:</strong> The HRG includes a continuous <strong>Ground Fault Monitor (GFM)</strong> that measures insulation resistance of each phase to earth. On first fault, it raises an alarm with location indication - giving the crew time to investigate and correct the fault in a controlled manner without losing power.<br><br>
  <strong>Transient Overvoltage Control:</strong> HRG also suppresses destructive transient overvoltages caused by intermittent arcing faults - a known weakness of fully isolated (floating) neutral systems. The resistive path damps the oscillatory overvoltages that can otherwise exceed 4–6 per unit and destroy motor insulation.<br><br>
  <strong>Limitations:</strong> HRG is only suitable where single phase-to-earth faults are tolerable; a second fault on a different phase creates a phase-to-phase fault, which must then be cleared. Requires more sophisticated monitoring than a simple NER.</div></div>
  <table class="n-table">
    <tr><th>Feature</th><th>NER (Standard)</th><th>HRG</th></tr>
    <tr><td>First fault current</td><td class="hl">5–30 A - trips protection</td><td class="ok">1–5 A - alarm only, keeps running</td></tr>
    <tr><td>Operation after first fault</td><td class="bad">Trip - power lost</td><td class="ok">Continuous - fault alarm raised</td></tr>
    <tr><td>Transient overvoltage control</td><td class="hl">Moderate</td><td class="ok">Good - resistive damping</td></tr>
    <tr><td>Fault location</td><td class="hl">Earth fault relay (zone)</td><td class="ok">GFM gives per-phase indication</td></tr>
    <tr><td>Application</td><td>Most ships, conventional HV</td><td>Offshore platforms, hospital ships, critical continuity systems</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════
       SECTION 5 - VCB & SF6
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-vcb">🔘 HV Switchgear - VCB &amp; SF6</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t02-vcb-construction.png" alt="VCB Construction">
    <div class="note-diagram-cap">Fig. Vacuum Circuit Breaker — terminal, insulator support rod, fixed &amp; moving contacts, metallic bellows, glass fibre rod, opening spring, mechanism linkage</div>
  </div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why VCB and not ACB on HV?</strong> Arc energy ∝ V². At <span class="n-val">6.6 kV</span>, arc energy is (6600/440)² = <strong>225× more energetic</strong> than at 440 V. Air (in an ACB) ionises under the intense HV arc and becomes conducting - it cannot quench the arc. Continued arcing in air = fire and explosion. ACB is limited to ≤ 1000 V (LV only).</div></div>

  <div class="n-h2">VCB - How Arc Quenching Works</div>
  <ul class="n-list">
    <li>Contacts open inside a ceramic vacuum bottle evacuated to &lt; <span class="n-val">10⁻⁶ mbar</span>.</li>
    <li>On separation, a small arc forms from metallic vapour off the contact surfaces.</li>
    <li>In vacuum there are no air molecules to sustain ionisation - metal vapour condenses back onto the contacts almost instantly.</li>
    <li>Arc is extinguished at the first current zero crossing - typically within <strong>½ cycle (10 ms at 50 Hz)</strong>.</li>
    <li><strong>Key advantage:</strong> No arc products, no quench medium maintenance, very compact design.</li>
    <li><strong>Limitation:</strong> Vacuum integrity cannot be verified visually - requires special HV test equipment (30–40 kV applied across open contacts). Bottle has finite operational life.</li>
  </ul>

  <div class="n-h2">ACB vs VCB vs SF6 - Full Comparison</div>
  <table class="n-table">
    <tr><th>Feature</th><th>ACB (Air)</th><th>VCB (Vacuum)</th><th>SF6</th></tr>
    <tr><td>Arc quench medium</td><td>Air - arc chutes elongate arc</td><td class="ok">Vacuum - metal vapour dissipates</td><td>SF6 electronegative gas - absorbs free electrons</td></tr>
    <tr><td>Voltage range</td><td class="bad">Up to <span class="n-val">1000 V</span> (LV only)</td><td class="hl">Up to <span class="n-val">36 kV</span></td><td class="ok">Up to <span class="n-val">800 kV</span></td></tr>
    <tr><td>Quench speed</td><td>Moderate</td><td class="ok">Very fast - 1st zero crossing (~10 ms)</td><td class="ok">Very fast</td></tr>
    <tr><td>Maintenance</td><td>Moderate - clean arc chutes, replace contacts</td><td class="ok">Low - sealed bottle, minimal moving parts</td><td>Low-moderate - gas pressure monitoring</td></tr>
    <tr><td>Dielectric strength</td><td class="bad">Low (air)</td><td class="ok">High (vacuum)</td><td class="ok">Very high (2.5× air at 1 bar)</td></tr>
    <tr><td>Environmental concern</td><td class="ok">None</td><td class="ok">None</td><td class="bad">GWP = 23,500 × CO₂</td></tr>
    <tr><td>Ship application</td><td>MSB / ESB - LV</td><td class="hl">HV switchboard 3.3–11 kV</td><td>Some large HV ships, shore-based HV</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - VCB:</strong> "No air, no arc." The vacuum is the quench medium AND the insulating medium between open contacts. That is why the same vacuum bottle gives excellent isolation when racked out.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 6 - SF6 HAZARDS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-sf6-full">☁️ SF6 Gas - Properties, Hazards &amp; Arc Decomposition</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t02-sf6-breaker.png" alt="SF6 Circuit Breaker">
    <div class="note-diagram-cap">Fig. SF6 Breaker — SF₆ gas inlet, moving member, contacts, arc chamber, arcing horn, fixed member, gas outlet, insulated operating rods</div>
  </div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is SF6 gas and what are its properties?<br><strong>Ideal Answer:</strong> Sulphur Hexafluoride (1 S + 6 F atoms). Colourless, odourless, non-toxic when <em>pure</em>, non-flammable. Dielectric strength <strong>2.5× air</strong> at atmospheric pressure - rises to <strong>5–8× air at ~4 bar</strong>. <strong>Electronegative</strong> - strongly attracts and captures free electrons, breaking the arc ionisation chain. Environmental concern: GWP = <span class="n-val">23,500 × CO₂</span>, atmospheric lifetime <span class="n-val">3200 years</span>. Strict leak controls mandatory. Arc decomposition products are highly toxic - ventilate area and wear full PPE before opening any SF6 equipment after an arcing event.</div></div>

  <div class="n-h2">SF6 Arc Decomposition Products - Complete List</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ALL decomposition products are toxic or corrosive. When SF6 arcs:</strong><br>
  • <strong>HF</strong> (Hydrogen fluoride) - extremely corrosive, attacks metal, glass, and biological tissue on contact<br>
  • <strong>SF₄</strong> (Sulphur tetrafluoride) - toxic gas, reacts with moisture to form HF<br>
  • <strong>SOF₂</strong> (Thionyl fluoride) - toxic, reacts violently with water<br>
  • <strong>SO₂F₂</strong> (Sulphuryl fluoride) - toxic, persistent in confined spaces<br>
  • <strong>SO₂</strong> (Sulphur dioxide) - toxic at low concentrations, detectable by smell<br><br>
  <strong>Post-arc entry procedure:</strong> Ventilate thoroughly (minimum 30 min forced ventilation). Wear SCBA + chemical protective gloves. Use neutralising powder (calcium hydroxide / Ca(OH)₂) to clean enclosure before inspection. Minimise any gas releases - GWP = 23,500.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Voltage ranges:</strong> ACB up to <span class="n-val">1000 V</span> (LV only) · VCB up to <span class="n-val">36 kV</span> · SF6 up to <span class="n-val">800 kV</span>. SF6 also provides excellent insulation between open contacts - the same gas that quenches also insulates.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 7 - DEAD FRONT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-deadfront">🛡️ Dead Front Panel - IEC Requirement &amp; Touch Voltage</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>IEC 60092 Requirement:</strong> ALL switchboards must be dead-front construction - no live parts accessible from the front operating side during normal operation. On older open-type MSBs, live busbars were exposed - accidental contact meant immediate electrocution. Dead-front construction eliminated this.</div></div>
  <ul class="n-list">
    <li>Live busbars, terminals and connections are fully enclosed behind barriers, doors, and shutters.</li>
    <li>Operating handles, push-buttons and indicators on the front are all at safe touch voltage or insulated.</li>
    <li><strong>Touch voltage on operating face:</strong> Limited to <span class="n-val">50 V AC</span> or <span class="n-val">120 V DC</span> maximum.</li>
    <li>To access live parts: open interlocked doors or remove covers - which requires prior isolation or trips the circuit automatically.</li>
    <li>Any voltage level (440 V, 6.6 kV) may exist inside - it is all safely enclosed.</li>
  </ul>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a dead front panel?<br><strong>Ideal Answer:</strong> A switchboard where no live parts are accessible from the front (operating side) during normal operation. All live busbars, terminals and connections are fully enclosed behind barriers, doors and shutters. Operating handles and indicators on the front are at safe touch voltage (max 50 V AC / 120 V DC) or fully insulated. To reach live parts you must open interlocked doors or remove covers - which either trips the circuit or requires prior isolation. Required by IEC 60092.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 8 - MSB SAFETIES (14 POINTS)
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-msb-safeties">🛡️ MSB Safeties - Complete 14-Point List</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor favourite:</strong> "List all safeties on the main switchboard." Know all 14 - most candidates only manage 5–6. This question appears in almost every oral exam.</div></div>
  <ol class="n-steps">
    <li><strong>Dead front construction</strong> - no live parts accessible from front during normal operation.</li>
    <li><strong>Insulating rubber mats</strong> - front &amp; rear. LV (440 V) → <span class="n-val">1000 V</span> rated minimum, <span class="n-val">6 mm</span> thick. HV ships → higher rated, minimum <span class="n-val">12 mm</span> thick. Must cover full working area.</li>
    <li><strong>Insulating handrails</strong> - fibre or rubber on MSB walkway, non-conductive. Prevents simultaneous contact with two points at different potential.</li>
    <li><strong>Adequate clearance</strong> - minimum <span class="n-val">1000 mm</span> working space in front; minimum <span class="n-val">600 mm</span> rear clearance for cable entries.</li>
    <li><strong>Earth bus</strong> - common earth bus bar running through entire MSB; all equipment cases bonded to it.</li>
    <li><strong>Bus tie breaker</strong> - between MSB sections; allows isolation of one section while the other stays live. Essential for safe maintenance.</li>
    <li><strong>Earth fault indicator / IMS</strong> - insulation monitoring system; continuously monitors insulation resistance, alarms on earth fault.</li>
    <li><strong>Phase barriers</strong> - insulating barriers between busbar phases to prevent phase-to-phase flashover during a single-phase fault.</li>
    <li><strong>MSB lighting</strong> - adequate illumination in front and rear; supplied from emergency lighting circuit so MSB is always lit during blackout.</li>
    <li><strong>CO₂ fire extinguisher</strong> - at MSB, suitable for Class C (electrical) fires. CO₂ is non-conducting and leaves no residue.</li>
    <li><strong>Labels &amp; colour coding</strong> - phase identification (IEC: Brown/Black/Grey for L1/L2/L3; Blue for N; Green-Yellow for Earth). All circuit breakers clearly labelled.</li>
    <li><strong>Lockout/tagout (LOTO) facilities</strong> - padlock hasps on all isolators and breakers; 'Men at Work' tag holders.</li>
    <li><strong>Forward &amp; aft doors</strong> - access from both ends of the MSB for emergency escape if fire blocks one end.</li>
    <li><strong>Ventilation</strong> - adequate to prevent heat build-up from conductor and iron losses; forced ventilation on large MSBs.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 9 - MSB CLEARANCES & BUSBARS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-msb-clearances">📐 MSB Clearances &amp; Rubber Mat Requirements</div>
  <table class="n-table">
    <tr><th>Parameter</th><th>LV (440 V)</th><th>HV (&gt;1000 V)</th></tr>
    <tr><td>Front working clearance</td><td class="hl"><span class="n-val">1000 mm minimum</span></td><td class="hl"><span class="n-val">1000 mm minimum</span></td></tr>
    <tr><td>Rear clearance (cable entries)</td><td class="hl"><span class="n-val">600 mm minimum</span></td><td class="hl"><span class="n-val">600 mm minimum</span></td></tr>
    <tr><td>Rubber mat voltage rating</td><td class="hl"><span class="n-val">1000 V rated</span></td><td class="hl"><span class="n-val">&gt;1000 V rated</span></td></tr>
    <tr><td>Rubber mat minimum thickness</td><td class="hl"><span class="n-val">6 mm</span></td><td class="hl"><span class="n-val">12 mm</span></td></tr>
    <tr><td>Touch voltage (face)</td><td class="hl"><span class="n-val">≤ 50 V AC</span></td><td class="hl"><span class="n-val">≤ 50 V AC</span></td></tr>
  </table>

  <div class="n-h1" id="t2-busbars">🔩 Busbars - Configuration &amp; Colour Coding</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Standard MSB busbar configuration:</strong><br>
  • <strong>Standard (unsplit) MSB:</strong> 4 bars - L1, L2, L3 (phase), N (neutral). Ship neutral is NOT directly earthed (IT insulated system).<br>
  • <strong>Split MSB:</strong> Two sections of 3 phase bars + bus-tie breaker between sections. Allows one section to be de-energised while the other stays live. Earth busbar runs throughout - separate from neutral.<br>
  • <strong>HV switchboard:</strong> 3 phase bars only (HV is always 3-wire; no neutral distributed). NER is at the generator neutral only.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Colour Coding (IEC 60446):</strong> L1 = Brown · L2 = Black · L3 = Grey · N = Blue · Earth = Green/Yellow.<br>
  <em>Old UK/Indian ships (BS 158):</em> L1 = Red · L2 = Yellow · L3 = Blue · N = Black · Earth = Green/Yellow.<br>
  Know both - surveyor may ask which system your ship uses.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 10 - ARC FLASH
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-arc">💥 Arc Flash &amp; Arc Blast</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Arc Flash:</strong> Explosive release of energy from an electrical arc fault through air. Temperatures exceed <strong>20,000°C</strong> - approximately 4× the surface temperature of the sun.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Arc Flash Hazards</div>
      <ul class="n-list" style="margin:0">
        <li>Intense radiant heat - third-degree burns from several metres</li>
        <li>Blinding UV/IR light - retinal damage</li>
        <li>Vaporised molten copper droplets projected at high velocity</li>
        <li>Toxic fumes from vaporised materials</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Arc Blast Hazards</div>
      <ul class="n-list" style="margin:0">
        <li>Overpressure shock wave from rapid air expansion - can exceed <strong>1000 lbf/ft²</strong></li>
        <li>Can throw personnel across the room</li>
        <li>Can collapse walls and cabinets</li>
        <li>Flying debris - shrapnel from switchgear</li>
      </ul>
    </div>
  </div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Arc Flash PPE (mandatory for HV work near live equipment):</strong><br>
  • Arc-flash rated coverall suit rated in cal/cm² (incident energy rating - must exceed calculated arc flash energy).<br>
  • Arc-rated face shield (not just standard safety glasses).<br>
  • Class 2 rubber insulating gloves with leather outer protectors.<br>
  • Arc-rated hood or balaclava (for work close to exposed conductors).<br>
  • Safety boots with electrical hazard rating.<br>
  • Never work alone on HV - second person mandatory (rescue capability).</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 11 - HV WORKING PROCEDURE / PTW
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-safety">🔐 HV Working Procedure - Permit to Work (PTW)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Golden Rule: ASSUME LIVE UNTIL PROVED DEAD.</strong> Never rely on indicators alone. HV work requires a formal Permit to Work (PTW) signed by the Chief Engineer. This is a SOLAS/STCW and company SMS requirement.</div></div>
  <ol class="n-steps">
    <li><strong>Risk Assessment &amp; PTW:</strong> Identify the task, all hazards and all sources of supply. Obtain signed PTW from Chief Engineer. Brief all involved personnel.</li>
    <li><strong>Identify &amp; Isolate:</strong> Open ALL relevant VCBs, isolators, and disconnectors on all possible sources of supply (including shore connection, emergency connection, and any inter-tie connections).</li>
    <li><strong>Lock Out / Tag Out (LOTO):</strong> Padlock ALL opened breakers and isolators in the OPEN position. Attach 'Men At Work' tags. ETO keeps the key - no one else has authority to remove it.</li>
    <li><strong>Wait for Discharge:</strong> Wait a minimum of <strong>5 minutes</strong> for capacitive charge stored in HV cables and windings to dissipate to a safe level.</li>
    <li><strong>Test for Dead:</strong> Use an <strong>approved HV voltage detector</strong>. First prove the tester is working on a <em>known live</em> circuit. Then test all 3 phases to earth and phase-to-phase at the work point. Retest on live circuit after to confirm detector still works (test–dead–test sequence).</li>
    <li><strong>Apply Earthing:</strong> Apply approved earthing clamps/shorting bars to all three phases at the work point. <strong>Connect earth side of clamp to hull FIRST</strong>, then to the conductor. This ensures that if the circuit is inadvertently energised, the fault current flows to earth and trips protection rather than through the worker.</li>
    <li><strong>Barriers &amp; Signs:</strong> Erect physical barriers around the work area. Post 'High Voltage - Danger' warning signs on all sides. Inform the bridge and Engine Control Room.</li>
    <li><strong>Brief &amp; Work:</strong> Brief the complete working team. Carry out work. Restore in the exact reverse order - earths removed LAST before re-energisation.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why earth the work point even though the circuit is isolated?</strong> Three reasons:<br>
  1. <strong>Capacitive stored charge</strong> - HV cables store significant charge; earthing safely discharges this before contact.<br>
  2. <strong>Induced voltage</strong> - adjacent live cables can inductively or capacitively induce voltage onto an isolated but unearthed conductor (particularly in long parallel cable runs).<br>
  3. <strong>Inadvertent re-energisation</strong> - if someone elsewhere closes the wrong breaker, the earthing clamp creates a solid short circuit, blowing the protection and preventing electrocution.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 12 - HV GLOVES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-gloves">🧤 HV Insulating Gloves - Class, Colour &amp; Voltage Rating</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Exam Must Know: Class, Colour, and Voltage Rating for each class. Especially Class 2 (6.6 kV ships) and Class 3 (11 kV ships). Tested every 6 months without exception.</div></div>
  <table class="n-table">
    <tr><th>Class</th><th>Colour</th><th>Max Use Voltage (AC RMS)</th><th>Ship Application</th></tr>
    <tr><td>Class 00</td><td>Beige</td><td><span class="n-val">500 V</span></td><td>LV work ≤ 500 V</td></tr>
    <tr><td>Class 0</td><td>Red</td><td><span class="n-val">1,000 V</span></td><td>LV work ≤ 1000 V</td></tr>
    <tr><td>Class 1</td><td>White</td><td><span class="n-val">7,500 V</span></td><td>3.3 kV systems</td></tr>
    <tr><td class="hl"><strong>Class 2</strong></td><td class="hl"><strong>Yellow</strong></td><td class="hl"><strong>17,000 V (17 kV)</strong></td><td class="hl"><strong>6.6 kV systems ✓ Most common</strong></td></tr>
    <tr><td class="hl"><strong>Class 3</strong></td><td class="hl"><strong>Green</strong></td><td class="hl"><strong>26,500 V (26.5 kV)</strong></td><td class="hl"><strong>11 kV systems</strong></td></tr>
    <tr><td>Class 4</td><td>Orange</td><td><span class="n-val">36,000 V</span></td><td>Very HV shore-based use</td></tr>
  </table>
  <p class="n-p"><strong>Pre-use Inflation Test:</strong> Roll cuff toward fingers to trap air inside, squeeze lightly, check for deflation or audible leak. Any leak = REJECT immediately. Do NOT repair - replace.</p>
  <p class="n-p"><strong>Wear leather outer protectors OVER rubber gloves</strong> at all times during HV work - protects against puncture by sharp metal edges and mechanical wear. Both rubber gloves AND leather protectors must be inspected.</p>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 13 - GLOVE STORAGE & COMPLIANCE RULES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-glove-rules">🧤 HV Glove - Compliance &amp; Storage Rules</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Beyond class and colour - surveyors now ask storage requirements and compliance checks in detail.</strong></div></div>
  <ul class="n-list">
    <li><strong>Date stamp tag mandatory:</strong> Gloves must carry a physical tag showing the date of last electrical dielectric test. Gloves without a current test tag = DO NOT USE - remove from service immediately.</li>
    <li><strong>Test frequency:</strong> Electrical dielectric test every <span class="n-val">6 months</span>. Visual inspection before EVERY use.</li>
    <li><strong>Expired or visually damaged = automatic rejection:</strong> Cuts, punctures, holes, ozone cracking, swelling, discolouration = tag out of service, replace immediately. No repair is permitted under any circumstances.</li>
    <li><strong>Storage - keep away from:</strong><br>
      (1) Oil and petroleum products - swells and degrades rubber irreversibly.<br>
      (2) Ozone - causes invisible micro-fractures (keep away from electric motors, UV lamps).<br>
      (3) UV light / direct sunlight - UV degrades rubber over time.<br>
      Store in original protective bag or sealed container in a cool, dark, dry location.</li>
    <li><strong>Inflation test before every use:</strong> Roll cuff, trap air, check for deflation. Any leak = reject.</li>
    <li><strong>Outer leather protectors:</strong> Always worn over rubber gloves - protects from puncture. Leather protectors must also be inspected for cuts, holes and delamination.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 14 - VCB MAINTENANCE & RACK OUT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-vcb-maint">🔧 VCB Maintenance &amp; Rack Out Procedure</div>
  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t02-vcb-racking.png" alt="VCB Racking Mechanism">
    <div class="note-diagram-cap">Fig. VCB Drawout Racking — racking handle, VCB truck, primary disconnect contacts, automatic shutter, stationary bus contacts, vacuum interrupter, secondary control plug (test position)</div>
  </div>
  <div class="n-h2">VCB Rack Out - Three Positions</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">SERVICE Position</div><div class="card-desc">Fully inserted. Main contacts connected to HV busbars. Control circuits connected. Normal operating position.</div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">TEST Position</div><div class="card-desc">Disconnected from HV busbars. Control circuits still connected. VCB can be operated (open/close) safely - relays and protections can be injection tested without HV connected.</div></div>
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">ISOLATED Position</div><div class="card-desc">Fully withdrawn. Both HV and control circuits disconnected. Automatic shutters close over busbar spouts (preventing accidental contact). Padlock applied. Machine dead.</div></div>
  </div>

  <div class="n-h2">Rack Out Sequence (Deswal expects step-by-step precision)</div>
  <ol class="n-steps">
    <li><strong>OPEN VCB first</strong> - mechanical interlock prevents racking while VCB is closed (would draw a massive arc inside the cubicle).</li>
    <li><strong>Discharge closing spring</strong> - discharge stored spring energy to prevent accidental closing.</li>
    <li><strong>Isolate control power</strong> - switch off control supply to prevent remote operation.</li>
    <li><strong>Insert racking handle</strong> and turn counter-clockwise - observe position indicator moving SERVICE → TEST.</li>
    <li><strong>Continue to ISOLATED position</strong> - confirm shutters have automatically closed over busbar spouts.</li>
    <li><strong>Apply padlock on cubicle door</strong> - padlock isolator in withdrawn position. Attach LOTO tag.</li>
    <li><strong>Test for dead</strong> - prove detector on known live first, then test all phases at work point with approved HV detector, re-prove detector after.</li>
    <li><strong>Apply circuit main earths</strong> - earth all three phases at work point before any physical contact.</li>
  </ol>

  <div class="n-h2">Routine Maintenance Checks</div>
  <ul class="n-list">
    <li><strong>Visual:</strong> Check vacuum bottle for cracks or cloudiness (indicates vacuum loss). Inspect mechanism for wear, loose fasteners, contamination.</li>
    <li><strong>Vacuum Integrity Test:</strong> Apply <span class="n-val">30–40 kV</span> DC across open contacts - if vacuum is intact, no breakdown occurs. If vacuum is lost, breakdown occurs at relatively low voltage. Requires specialist HV test equipment.</li>
    <li><strong>Ductor Test (Contact Resistance):</strong> Measure closed contact resistance using a micro-ohmmeter (ductor). Typical specification: &lt; <span class="n-val">100 μΩ</span>. High resistance = worn or oxidised contacts → arc heating on fault current → replace contacts.</li>
    <li><strong>Timing Test:</strong> Measure open and close speed. Typical marine VCB: <span class="n-val">40–80 ms</span> operating time. Contact bounce duration checked.</li>
    <li><strong>Lubrication:</strong> Mechanism pivot points lubricated per maker's manual. Wrong lubricant can attract carbon dust or harden in cold conditions.</li>
    <li><strong>Spring pre-load check:</strong> Measure closing spring compression - compare against specification. Springs fatigue over hundreds of operations.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 15 - VCB TIMING TEST DIAGNOSTICS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-vcb-timing">⏱️ VCB Timing Test - Diagnostic Interpretation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>VCB timing test:</strong> Measures time from trip signal to full contact separation (opening time) and from close signal to contact make (closing time). Typical specification for marine VCBs: <span class="n-val">40–80 ms</span> operating time. Tests both speed and contact bounce duration.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Out-of-specification timing - diagnostic conclusions:</strong><br>
  <strong>Slow operation (&gt; specified time):</strong> Indicates physical mechanism wear (friction in operating linkage, dried or wrong lubrication, corroded pivot pins) OR <strong>operating spring fatigue</strong> - spring has lost pre-load and cannot release stored energy quickly enough. Springs are under high cyclic stress and fatigue over hundreds of open/close operations.<br><br>
  <strong>Contact bounce (extended settling time):</strong> Indicates worn contacts or weakened contact pressure spring - contacts do not seat firmly on closure and bounce. Replace contacts or adjust spring tension.<br><br>
  <strong>Remedy:</strong> Lubricate mechanism per maker manual, measure spring compression against specification, replace springs if below specified pre-load. Log all timing results for trend analysis - deterioration is gradual and detectable early through trending.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 16 - HV IR TESTING
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-ir">🔍 HV IR Testing</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why higher voltage megger for HV equipment?</strong> Testing 6.6 kV insulation with a 500 V megger only applies 7.5% of operating voltage stress - utterly insufficient to reveal weak spots or moisture in thick HV insulation. Must use 2500 V or 5000 V megger to meaningfully stress the insulation to near-operating voltage and detect failures.</div></div>
  <ul class="n-list">
    <li><strong>HV equipment (3.3 kV):</strong> Use <span class="n-val">2500 V DC</span> megger.</li>
    <li><strong>HV equipment (6.6 kV):</strong> Use <span class="n-val">2500 V or 5000 V DC</span> megger. 5000 V preferred for cables.</li>
    <li><strong>Minimum IR:</strong> IEC rule - Rated Voltage (kV) + 1 MΩ. So 6.6 kV → minimum <strong>7.6 MΩ</strong>.</li>
    <li><strong>200% Return-to-Service Rule:</strong> After repair, IR must be at least TWICE the minimum acceptable value before return to service.</li>
    <li><strong>PI Test:</strong> Polarisation Index used on HV cables and large motors because high cable capacitance makes a single IR reading unreliable. PI = IR at 10 min ÷ IR at 1 min. PI &gt; 2.0 = good.</li>
    <li><strong>Discharge after testing:</strong> Hold earth lead on HV terminal for at least <span class="n-val">1 minute per kV</span> of test voltage applied.</li>
  </ul>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 17 - MIN IR FORMULA
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-ir-formula">📊 IEC Minimum IR Formula - Full Rule &amp; 200% Table</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask the IEC formula for minimum acceptable IR and the 200% return-to-service rule.</strong></div></div>
  <div class="n-formula">Minimum IR (MΩ) = (Working Voltage in kV) + 1<div class="label">IEC standard rule · Example: 6.6 kV system → minimum IR = 6.6 + 1 = 7.6 MΩ</div></div>
  <table class="n-table">
    <tr><th>System</th><th>Working Voltage</th><th>IEC Min IR</th><th>200% Return-to-Service</th></tr>
    <tr><td>LV system</td><td><span class="n-val">440 V (0.44 kV)</span></td><td class="hl"><span class="n-val">~1 MΩ</span></td><td class="hl"><span class="n-val">2 MΩ</span></td></tr>
    <tr><td>MV system</td><td><span class="n-val">3.3 kV</span></td><td class="hl"><span class="n-val">4.3 MΩ</span></td><td class="hl"><span class="n-val">8.6 MΩ</span></td></tr>
    <tr><td>HV system</td><td><span class="n-val">6.6 kV</span></td><td class="hl"><span class="n-val">7.6 MΩ</span></td><td class="hl"><span class="n-val">15.2 MΩ</span></td></tr>
    <tr><td>HV system</td><td><span class="n-val">11 kV</span></td><td class="hl"><span class="n-val">12 MΩ</span></td><td class="hl"><span class="n-val">24 MΩ</span></td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>200% rule explained:</strong> Before returning HV equipment to service after any repair or overhaul, the measured IR must be at least TWICE the minimum acceptable value. This extra safety margin accounts for: (1) insulation condition changing after warming up under load, (2) measurement uncertainty, (3) gradual deterioration over the upcoming maintenance period before the next IR test.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 18 - SPECIAL MEGGER VOLTAGE RULES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-megger-special">🔍 Special Megger Voltage Rules</div>
  <table class="n-table">
    <tr><th>Equipment Type</th><th>Megger Voltage</th><th>Reason</th></tr>
    <tr><td>Standard LV motors/cables (440 V)</td><td class="hl"><span class="n-val">500 V DC</span></td><td>Standard for LV insulation testing - adequate stress for LV insulation</td></tr>
    <tr><td>LV alternators, large transformers</td><td class="hl"><span class="n-val">1000 V DC</span></td><td>More thorough stress test for large windings with multiple layers</td></tr>
    <tr><td>HV equipment (3.3 kV)</td><td class="hl"><span class="n-val">2500 V DC</span></td><td>Adequately stresses HV insulation toward operating level</td></tr>
    <tr><td class="hl"><strong>6.6 kV cables specifically</strong></td><td class="hl"><span class="n-val">5000 V DC</span></td><td class="hl">6.6 kV cable insulation is very thick - 2500 V is only 38% of operating stress, insufficient to reveal weak spots. Must use 5000 V.</td></tr>
    <tr><td class="bad"><strong>Sensitive electronics / PCBs / AVR cards</strong></td><td class="bad"><span class="n-val">50–100 V DC ONLY</span></td><td class="bad">Standard 500 V megger instantly destroys semiconductor junctions on control boards. Use dedicated low-voltage insulation tester only.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Always disconnect and isolate:</strong> AVR, control boards, electronic protection relays, VFD inverter boards - before meggering ANY winding they are connected to. A single megger test on a connected PCB destroys it irreversibly.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 19 - IRM
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-irm">📡 Insulation Resistance Monitor (IRM)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Ships use an IT (Insulated Neutral / floating neutral) system. The IRM (also called Insulation Monitoring Device / IMD) continuously monitors the insulation impedance between the live conductors and the ship's hull (earth). On an IT system, the first earth fault gives NO trip - only an alarm - so the IRM is the critical warning device that tells the ETO to find and fix the fault before a second fault causes a short circuit.</div></div>
  <ul class="n-list">
    <li><strong>Working principle:</strong> Injects a low-level DC voltage (typically <span class="n-val">1–5 V</span>) between the neutral (or phase, depending on design) and the hull. Measures the resulting leakage current.</li>
    <li><strong>Alarm condition:</strong> If insulation deteriorates, leakage current increases → insulation impedance drops below the alarm threshold (typically <span class="n-val">50–100 kΩ</span> for LV; higher for HV) → visual + audible <strong>ALARM</strong>.</li>
    <li><strong>Limitation - no location:</strong> IRM detects that an earth fault exists somewhere on the system, but does NOT identify the specific faulty circuit or piece of equipment.</li>
    <li><strong>Fault finding procedure:</strong> ETO switches off non-essential circuits one at a time sequentially. When the IRM alarm clears after switching off a circuit, that circuit contains the fault. Investigate further with a 500 V megger on that circuit.</li>
    <li><strong>On HV systems:</strong> HV IRM uses a higher injected voltage and monitors the NER earth connection current as a proxy for insulation leakage.</li>
  </ul>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why not trip on first earth fault (IT system)?</strong> On a ship, a sudden unexpected trip of the MSB due to a single earth fault would cause immediate blackout - loss of propulsion, steering, and safety systems. The IT system with IRM allows the ship to continue operating while the crew investigates the fault under controlled conditions. The SECOND earth fault on a different phase would cause a phase-to-phase short circuit and will trip the OCR - which is why finding the first fault before any second fault occurs is critical.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 20 - TANKER BONDING & HAZARDOUS ZONES
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-bonding">🛢️ Tanker Hazardous Zones &amp; Bonding</div>
  <table class="n-table">
    <tr><th>Zone</th><th>Atmosphere</th><th>Examples</th><th>Permitted Equipment Category</th></tr>
    <tr><td><strong>Zone 0</strong></td><td class="bad">Continuous explosive atmosphere</td><td>Inside cargo tanks</td><td class="hl">Only Ex-ia (Intrinsically safe Cat. ia)</td></tr>
    <tr><td><strong>Zone 1</strong></td><td class="hl">Likely during normal operation</td><td>Pump rooms, manifold area, vent masts</td><td>Ex-d, Ex-e, Ex-i, Ex-p, Ex-q</td></tr>
    <tr><td><strong>Zone 2</strong></td><td>Unlikely in normal operation</td><td>Enclosed spaces near deck, cofferdam</td><td>Ex-n, Ex-d, Ex-e, Ex-i in addition</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>ATEX Categories (IEC 60079):</strong><br>
  • <strong>Ex-d (Flameproof):</strong> Enclosure contains any internal explosion and cools escaping gases below ignition temperature through long flame paths. Suitable Zone 1.<br>
  • <strong>Ex-e (Increased Safety):</strong> Extra precautions to prevent sparks under normal or fault conditions. No internal arcing. Suitable Zone 1.<br>
  • <strong>Ex-i (Intrinsically Safe):</strong> Circuit energy (V × I) limited by zener barriers below the minimum ignition energy of the gas. Only category allowed in Zone 0.<br>
  • <strong>Ex-p (Pressurised):</strong> Enclosure pressurised with inert gas, preventing explosive atmosphere from entering. Used for large motors/panels.</div></div>

  <div class="n-h2">Tanker Bonding Sequence</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Equalise electrical potential between ship and jetty/terminal to prevent static spark discharge at the manifold during cargo transfer.</div></div>
  <ol class="n-steps">
    <li><strong>Connect ship-to-jetty bonding cable FIRST</strong> - before any hose or arm connection. Confirms potential equalisation before hydrocarbon contact.</li>
    <li>Connect cargo hose (bond flanges together before coupling up). Confirm electrical continuity of hose.</li>
    <li>Conduct cargo hose IR test - verify whether conductive or non-conductive hose is fitted (see next section).</li>
    <li>Transfer cargo under continuous bonding.</li>
    <li>Disconnect hose after transfer complete.</li>
    <li><strong>Remove bonding cable LAST</strong> - after all hose/arm connections are broken.</li>
  </ol>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 21 - SHAFT EARTHING
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-shaft">🔩 Shaft Earthing System</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Problem - Propeller Shaft Electrolytic Corrosion:</strong> The propeller shaft is insulated from the ship's hull by the oil film in the stern tube and main bearings. Stray currents from alternators, VFDs (PWM switching), and shaft-mounted generators discharge through this oil film → the oil film acts as a galvanic cell → <strong>electrolytic pitting and corrosion of bearing surfaces, shaft journals, and propeller hub</strong>. Can cause catastrophic bearing failure if unchecked.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Solution - Carbon Brush Shaft Earthing Assembly:</strong><br>
  • A spring-loaded carbon brush assembly is fitted on the propeller shaft between the aft gland and the stern tube bearing.<br>
  • The brush makes continuous sliding contact with the rotating shaft and connects via a conductor to the ship's hull earth.<br>
  • Shaft is maintained at hull (earth) potential - stray currents flow to hull via the brush rather than through the oil film.<br><br>
  <strong>ETO maintenance checks:</strong><br>
  • Check carbon brush wear against manufacturer's minimum length mark - replace when worn to limit.<br>
  • Check spring pressure - brush must maintain firm contact at all shaft speeds.<br>
  • Measure shaft-to-hull resistance - should be &lt; <span class="n-val">1 Ω</span>. High resistance indicates worn brush or brush lift-off.<br>
  • Clean slip ring contact surface on shaft - remove carbon deposits, no oil contamination.<br>
  • Record readings in PMS with date and shaft-to-hull resistance value for trend monitoring.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 22 - STREAMING CURRENT & CARGO HOSE IR
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-streaming">🔌 Streaming Current &amp; Cargo Hose IR Test</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Tanker-specific static hazard - surveyors ask this for tanker candidates.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Streaming current:</strong> When cargo fluid flows rapidly through pipes and hoses, friction between the fluid and pipe wall generates static electrical charge (triboelectric effect). This charge accumulates on the hose surface. If the potential difference becomes large enough, a static discharge spark can ignite cargo vapours at the manifold.<br><br>
  <strong>Prevention:</strong> Bonding cable equalises the ship and terminal potential before connecting cargo hoses, providing a low-resistance path for any static charge to drain safely.</div></div>

  <div class="n-h2">Cargo Hose IR Test - Pre-Loading Mandatory</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Two types of cargo hose - know which your vessel uses:</strong><br>
  • <strong>Conductive hose:</strong> Low electrical resistance between metal end-fittings (continuity across full length). Allows static charge to drain safely to the bonded earth. Standard for most tanker operations.<br>
  • <strong>Non-conductive (insulating) hose:</strong> High electrical resistance between end-fittings. Used at jetties where cathodic protection systems differ between ship and shore - prevents cathodic protection current from flowing between the two systems and causing galvanic corrosion problems.<br><br>
  <strong>Test procedure:</strong> Use megger between end-fittings before cargo operations commence. Verify resistance is within the range expected for the hose type (manufacturer specification). Record in cargo pre-transfer checklist.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 23 - HVSC STANDARDS
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-hvsc-advanced">🔌 High Voltage Shore Connection (HVSC) - IEC/IEEE 80005-1:2019</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors now ask specific IEC 80005-1 values for HVSC compatibility checks. Becoming more frequent from 2024–2026.</strong></div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>IEC/IEEE 80005-1 Requirement</th></tr>
    <tr><td>Standard voltages</td><td class="hl"><span class="n-val">6.6 kV</span> or <span class="n-val">11 kV</span> AC, 50 or 60 Hz</td></tr>
    <tr><td>Max prospective short-circuit current</td><td class="hl">≤ <span class="n-val">25 kA RMS</span> (combined ship + shore)</td></tr>
    <tr><td>THD (Total Harmonic Distortion)</td><td class="hl">≤ <span class="n-val">5%</span> at all loads</td></tr>
    <tr><td>Single harmonic limit</td><td class="hl">≤ <span class="n-val">3%</span> for any individual harmonic</td></tr>
    <tr><td>Equipotential bonding resistance</td><td class="hl">≤ <span class="n-val">0.1 Ω</span> (ship to shore, continuously monitored)</td></tr>
    <tr><td>Safety circuit pilot loop current</td><td class="hl">Minimum <span class="n-val">50 mA</span></td></tr>
    <tr><td>Safety circuit breaker trip time</td><td class="hl">Maximum <span class="n-val">200 ms</span> after loop broken</td></tr>
    <tr><td>NER rating (minimum)</td><td class="hl">Minimum <span class="n-val">25 A for 5 seconds</span></td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>What is the safety circuit pilot loop in HVSC? (New question - being asked 2025–2026)</strong><br><strong>Ideal Answer:</strong> A continuous low-current electrical monitoring circuit that runs through the entire HV plug and cable assembly. It confirms the physical integrity of the connection at all times. Must maintain minimum <span class="n-val">50 mA</span>. If the loop is broken - plug pulled while live, cable damaged, or any fault - both the ship AND shore HV breakers must open automatically within <span class="n-val">200 ms</span> maximum. This prevents catastrophic arc flash at the plug/socket. Monitored continuously per IEC/IEEE 80005-1.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 24 - SKIN EFFECT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-skin-effect">📐 Skin Effect in HV Conductors</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Skin Effect:</strong> At DC, current distributes uniformly across the full cross-section of a conductor. With AC, the alternating magnetic field induces eddy currents that oppose current flow in the conductor interior, forcing most current to flow near the outer surface - the <strong>skin</strong>.<br><br>
  • <strong>Skin depth (δ)</strong> decreases as frequency increases - at 50 Hz the skin depth in copper is ≈ <span class="n-val">9.5 mm</span>. At higher frequencies it shrinks further.<br>
  • Effectively reduces the usable cross-section of the conductor, increasing AC resistance (R<sub>AC</sub>) compared to DC resistance (R<sub>DC</sub>).<br>
  • More significant in large-diameter conductors - exactly those used for HV busbars and power cables.<br>
  • Results in higher I²R losses for the same nominal conductor size vs DC.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Mitigation:</strong> HV cables use <strong>stranded conductors</strong> (many thin strands twisted together - each strand small enough to carry current throughout its full section) or <strong>hollow conductors</strong>. This reduces effective AC resistance significantly. HV busbars are often hollow rectangular section for the same reason.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 25 - CORONA EFFECT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-corona-effect">⚡ Corona Effect in HV Systems</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Corona Effect:</strong> When the electric field intensity around a high-voltage conductor exceeds the dielectric strength of surrounding air (approximately <span class="n-val">30 kV/cm</span> at atmospheric pressure), the air molecules near the conductor ionise. This partial discharge (not a full flashover) is called corona.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Effects of Corona</div>
      <ul class="n-list" style="margin:0">
        <li>Audible <strong>hissing or crackling noise</strong> around HV conductors</li>
        <li><strong>Power loss</strong> - energy wasted ionising air</li>
        <li>Production of <strong>ozone (O₃)</strong> - corrosive to insulation and metal</li>
        <li>Production of <strong>oxides of nitrogen</strong> - attacks nearby materials</li>
        <li><strong>Radio frequency interference (RFI)</strong> - electromagnetic noise</li>
        <li>Visible as <strong>faint bluish-purple glow</strong> in darkness</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Mitigation Methods</div>
      <ul class="n-list" style="margin:0">
        <li><strong>Larger diameter conductors</strong> - reduces surface electric field gradient</li>
        <li><strong>Bundled conductors</strong> - equivalent larger diameter effect</li>
        <li><strong>Smooth surfaces</strong> - no burrs, sharp points or rough edges on conductors</li>
        <li><strong>Corona rings</strong> - graded metallic rings at terminal fittings to distribute field</li>
        <li><strong>Solid dielectric insulation</strong> - eliminates air/gas interface where corona initiates</li>
      </ul>
    </div>
  </div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Critical voltage:</strong> Corona onset voltage depends on conductor diameter, spacing, air pressure, humidity and surface condition. Moisture, dust and sharp points on the conductor surface significantly lower the critical onset voltage.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 26 - CT SHORTING
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ct-shorting">⚡ CT Shorting Terminals - Why CTs Must Never Be Open-Circuited</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">A Current Transformer (CT) steps down primary current to a secondary burden (typically <span class="n-val">5 A</span> or <span class="n-val">1 A</span>) for metering and protection. The secondary winding must <strong>always</strong> be connected to a burden (ammeter, relay, or short circuit bar).</div></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>DANGER - Open CT Secondary:</strong> If the secondary circuit is open while the primary carries load current, there is no opposing MMF from the secondary. All primary current drives the core into deep saturation, inducing an extremely high voltage on the secondary terminals - potentially <strong>thousands of volts</strong>. This is instantly lethal and will destroy the CT insulation, iron core, and all connected wiring.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Shorting-Type CT Terminal Block:</strong> CT ammeter circuits use <strong>shorting-type (make-before-break) terminal blocks</strong>. When an ammeter is removed from the circuit, the terminal block automatically short-circuits the CT secondary <em>before</em> the meter is disconnected. This ensures the CT secondary is never open-circuited even momentarily during meter removal or replacement.<br><br>
  <strong>Correct procedure:</strong> Before removing an ammeter from a CT circuit - apply the shorting link on the terminal block FIRST to short the CT secondary, THEN disconnect the meter. Reinstate in reverse order: connect meter first, remove shorting link second.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 27 - PT FUSE VS CT
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pt-fuse-vs-ct">🔌 Why PT Has a Fuse but CT Does Not</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Potential Transformer (PT / VT)</div>
      <ul class="n-list" style="margin:0">
        <li>Measures <strong>voltage</strong> - secondary carries very <strong>low current</strong> (burden is high-impedance voltmeter or relay coil).</li>
        <li>A <strong>short circuit on PT secondary</strong> is dangerous - causes high current and overheating of the winding.</li>
        <li>A <strong>fuse on the PT secondary</strong> protects against this short circuit - blowing the fuse simply disconnects the voltmeter, which is acceptable (causes alarm, not a safety hazard).</li>
        <li>HV fuse on PT primary also protects against primary winding faults.</li>
        <li><strong>✓ Fuse is correct and safe for PTs.</strong></li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Current Transformer (CT)</div>
      <ul class="n-list" style="margin:0">
        <li>Measures <strong>current</strong> - secondary carries proportional current and must always have a <strong>low-impedance burden connected</strong>.</li>
        <li>An <strong>open circuit on CT secondary</strong> is dangerous - extremely high induced voltage, lethal, destroys insulation.</li>
        <li>A <strong>fuse on the CT secondary WOULD create an open-circuit condition when it blows</strong> - this is the dangerous condition. Therefore fuses are <strong>NEVER fitted on CT secondary circuits.</strong></li>
        <li>Protection is via shorting-type make-before-break terminals only.</li>
        <li><strong>✗ Fuse is dangerous and forbidden for CTs.</strong></li>
      </ul>
    </div>
  </div>

  <div class="note-diagram-wrap">
    <img src="../data/diagrams/t02-ct-pt-connection.png" alt="PT connection to switchboard — PT in parallel with busbar, secondary fused, feeds voltmeter and protection relay">
    <div class="note-diagram-cap">Fig. PT Connection to Switchboard — PT in parallel with busbar; secondary fused; feeds voltmeter and relay voltage coil</div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════
       SECTION 28 - PREFERENTIAL TRIP
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-preferential-trip">⚡ Preferential Trip - Automatic Load Shedding</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> A preferential trip system automatically disconnects non-essential loads in stages when the generator is overloaded - preventing a complete blackout by keeping the generator within its rated capacity while maintaining all essential services.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How it works - 3-stage typical sequence:</strong><br>
  1. Overload relay detects generator current exceeding threshold (typically <span class="n-val">110%</span> of rated current).<br>
  2. After a short dashpot or timer delay (e.g. <span class="n-val">5–10 s</span>) - <strong>Stage 1</strong> trips: non-essential loads (electric heaters, air conditioning, laundry, galley equipment).<br>
  3. If overload persists - <strong>Stage 2</strong> trips after another delay: accommodation ventilation fans, domestic lighting circuits, secondary services.<br>
  4. If overload still persists - <strong>Stage 3</strong> may trip heavy non-essential motors (deck cranes, cargo handling in non-emergency).<br>
  5. Essential services are <strong>never</strong> on the preferential trip circuit: steering gear, navigation lights, fire pumps, bilge pumps, emergency lighting, GMDSS.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Purpose summary:</strong> Prevents the generator tripping on overcurrent protection (which causes total blackout). By shedding load automatically, generator returns to within rated capacity and continues supplying essential services - ship remains safe and operable.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor question:</strong> "What is a preferential trip?"<br><strong>Answer:</strong> A timed automatic load-shedding system that disconnects non-essential consumers in sequence when the generator is overloaded, to prevent a complete blackout while maintaining essential services continuously.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 29 - MEGGER VS MULTIMETER
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-megger-vs-multimeter">🔍 Why Megger and Not Multimeter for Insulation Testing</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Multimeter - Insufficient</div>
      <div class="card-desc">Uses internal battery test voltage of only <span class="n-val">1.5 V–9 V DC</span>. This is far too low to stress or reveal weak insulation. A winding with moisture contamination or a hairline crack may show ∞ MΩ on a multimeter because the fault only becomes conductive at higher voltages. Multimeter resistance function measures low resistance (kΩ), not insulation quality (MΩ–GΩ).</div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">Megger - Correct Tool</div>
      <div class="card-desc">Applies high DC test voltage - typically <span class="n-val">500 V, 1000 V, 2500 V or 5000 V</span>. This stresses weak insulation spots, forces leakage current through moisture tracks, reveals carbonised breakdown paths, and measures true insulation resistance in the MΩ–GΩ range.</div>
    </div>
  </div>
  <div class="n-formula">Minimum acceptable IR = (kV rating + 1) MΩ &nbsp;|&nbsp; e.g. 6.6 kV motor → min 7.6 MΩ</div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Rule:</strong> For HV equipment (6.6 kV), use a <span class="n-val">5000 V</span> megger. For LV equipment (440 V), use a <span class="n-val">500 V</span> megger. For sensitive electronics / PCBs: maximum <span class="n-val">50–100 V DC</span> dedicated insulation tester only. Always discharge winding after testing: hold earth lead on terminal for ≥ <span class="n-val">1 minute per kV</span> of test voltage.</div></div>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 29b - DIESEL-ELECTRIC PROPULSION
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-diesel-electric">🚢 Diesel-Electric Propulsion System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask about diesel-electric systems on cruise ships, LNG carriers, and DP vessels. Know the power flow, advantages over direct-drive, and why it suits DP operations.</strong></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Power flow:</strong> Multiple diesel generators → AC distribution network (typically 6.6 kV or 11 kV) → frequency converters (VFDs / cycloconverters) → electric propulsion motors driving the propeller shaft(s). There is no mechanical connection between the diesel engines and the propeller shaft - propulsion is 100% electrical.</div></div>

  <div class="n-h2">System Architecture</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">
  <strong>Prime movers:</strong> 4–8 medium-speed diesel generators (or gas turbines on LNG carriers). No single large slow-speed main engine.<br><br>
  <strong>Distribution:</strong> All generators connect to a main HV busbar (6.6 kV typical). Hotel loads, bow thrusters, and auxiliaries are also supplied from this same network.<br><br>
  <strong>Frequency converters:</strong> Variable-frequency drives (VFDs) or cycloconverters convert the fixed-frequency AC from the busbar to variable frequency/variable voltage for the propulsion motor - allowing shaft speed to be varied continuously from 0 to full RPM without mechanical gearboxes.<br><br>
  <strong>Propulsion motors:</strong> Large synchronous or induction motors (typically 10–30 MW each on large vessels). Can be arranged as shaft motors or in azimuth thrusters (Azipods on cruise ships).</div></div>

  <table class="n-table">
    <tr><th>Advantage</th><th>Explanation</th></tr>
    <tr><td class="ok">Full torque at zero speed</td><td>Electric motor characteristic - maximum torque available from standstill. Direct-drive diesels cannot do this without a clutch and complex gearbox.</td></tr>
    <tr><td class="ok">Fuel economy at partial load</td><td>Only the number of generators needed for the current load demand are running. Idle generators are shut down. On a cruise ship in port, 2 of 6 generators may run. A direct-drive diesel must run at low-efficiency part-load.</td></tr>
    <tr><td class="ok">Flexible machinery arrangement</td><td>No shaft line running the length of the ship. Generators can be placed anywhere. Frees up volume for cargo, passenger space, or ballast tanks.</td></tr>
    <tr><td class="ok">Redundancy and DP capability</td><td>Multiple independent generator sets with separate switchboard sections. Any single generator or converter failure leaves propulsion partially intact - essential for DP Class 2/3 vessels. Azipod thrusters can rotate 360°, eliminating need for a rudder.</td></tr>
    <tr><td class="ok">Silent operation</td><td>Vibration and noise isolation between engines and hull is much easier - important for research vessels, cruise ships, and naval vessels.</td></tr>
    <tr><td class="bad">Lower overall efficiency</td><td>Two conversion stages (mechanical → electrical → mechanical) add losses. Overall efficiency ~92% vs ~98% for a direct shaft. Significant only at sustained full power.</td></tr>
    <tr><td class="bad">Higher capital cost</td><td>Multiple generators, HV switchgear, frequency converters, and large propulsion motors are expensive vs one large slow-speed main engine.</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Typical ships using diesel-electric propulsion:</strong> Cruise ships (Azipod thrusters), DP drillships and semi-submersibles, LNG carriers (with reliquefaction, now also diesel-electric MEGI), cable-laying vessels, research ships, icebreakers, ferries. The common thread: loads vary widely and station-keeping / manoeuvrability matters more than sustained full-speed fuel economy.</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>ETO relevance:</strong> The entire propulsion system is within the ETO's maintenance scope - HV switchgear, frequency converters, propulsion motors, shaft earthing brushes (to prevent bearing current corrosion), insulation monitoring units (IMUs) on the HV network, and the integrated automation (IAS) interfaces for propulsion control. Shaft earthing brush condition is a common surveyor question for diesel-electric vessels.</div></div>

  <!-- ═══════════════════════════════════════════════════════════
       SECTION 30 - SURVEYOR Q&A
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyor-qa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Kamath, Deswal, Vishwanathan, Praveen Nair, and Sanjib test these regularly. Deliver these with exact technical key points, values, and mechanisms.</div></div>

  <div class="n-h2">HV Basics &amp; Justification</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>Advantages and disadvantages of HV system on ships</td><td>Adv: lower current for same power → smaller cables → less I²R loss → saves weight → economical for loads &gt;3–5 MW. Disadv: greater danger to personnel, special equipment (VCB/SF6), trained crew needed, step-down transformers required, complex protection, longer discharge time.</td></tr>
    <tr><td>What is high voltage per IEC 60092?</td><td>Above <span class="n-val">1000 V AC</span> or <span class="n-val">1500 V DC</span>. Typical ship HV: 3.3 kV, 6.6 kV (most common), 11 kV. HV justified when total demand exceeds <span class="n-val">3–5 MW</span>.</td></tr>
    <tr><td>Why are HV voltages multiples of 1.1? (Praveen Nair)</td><td>Form factor of sinusoidal AC = V<sub>rms</sub>/V<sub>avg</sub> = 1.11 ≈ 1.1. This forms the base of the IEC standard voltage series. 3.3 = 3×1.1, 6.6 = 6×1.1, 11 = 10×1.1. Standardises transformer design, insulation co-ordination, global equipment interoperability.</td></tr>
  </table>

  <div class="n-h2">NER &amp; Earthing</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>What is NER and why is it used? (Kamath)</td><td>Neutral Earthing Resistor - connects HV generator star point to hull via a resistor. Compromise between solid earth (thousands of amps fault current → stator destruction) and floating (healthy phase voltage rises to line voltage, ferroresonance risk). Limits fault current to 5–30 A - enough for relay detection, safe for insulation. R = V<sub>phase</sub> / I<sub>fault</sub>. For 6.6 kV at 10 A: R = 3810/10 = 381 Ω.</td></tr>
    <tr><td>What if the generator is delta-connected - no neutral? (Kamath)</td><td>Delta has no neutral terminal. A zig-zag (earthing) transformer is used to create an artificial neutral point. NER is connected between this artificial neutral and the hull earth. Zig-zag transformer has equal and opposite windings in each limb that cancel under balanced conditions but provide a neutral under fault conditions.</td></tr>
    <tr><td>Why HV not fully floating like LV? (Vishwanathan, Deswal)</td><td>On HV, a fully floating (IT) system allows healthy phase voltage to rise from phase voltage to line voltage during an earth fault (e.g. 3.81 kV → 6.6 kV on a 6.6 kV system), severely stressing insulation of all healthy phases. Ferroresonance risk - oscillatory overvoltages several times line voltage. NER provides defined earth reference limiting this overvoltage rise while limiting fault current to safe detection level.</td></tr>
  </table>

  <div class="n-h2">VCB, SF6 &amp; Switching</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>Why VCB and not ACB for HV? (Vishwanathan)</td><td>Arc energy ∝ V². At 6.6 kV arc energy is (6600/440)² = 225× more energetic than at 440 V. Air in an ACB ionises under HV arc and becomes conducting - cannot quench it (ACB limited to 1000 V). In VCB, contacts open in vacuum &lt;10⁻⁶ mbar. Small metal vapour arc extinguishes at first current zero (~10 ms) - no air molecules to sustain ionisation. SF6 uses electronegative gas that absorbs free electrons.</td></tr>
    <tr><td>Detail the rack out procedure for a VCB (Deswal)</td><td>1. Obtain PTW. 2. Open VCB (interlock prevents racking closed). 3. Discharge closing spring. 4. Isolate control power. 5. Insert racking handle, turn CCW - SERVICE → TEST → ISOLATED. 6. Confirm shutters closed over busbar spouts. 7. Padlock cubicle door, attach LOTO tag. 8. Test for dead (prove tester first). 9. Apply circuit main earths.</td></tr>
    <tr><td>SF6 properties and hazards after arcing</td><td>Colourless, odourless, non-toxic when pure. Dielectric strength 2.5× air (1 bar), 5–8× air (4 bar). Electronegative - absorbs free electrons. GWP = 23,500, atmospheric life 3200 years. Arc products: HF, SF₄, SOF₂, SO₂F₂, SO₂ - all toxic/corrosive. Post-arc procedure: ventilate 30 min forced, wear SCBA + chemical gloves, neutralise with Ca(OH)₂ powder.</td></tr>
  </table>

  <div class="n-h2">Safety, Gloves &amp; Isolation</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr><td>HV working procedure - 8 steps</td><td>Risk assessment + PTW → Identify &amp; isolate all sources → LOTO padlock + tags → Wait 5 min (capacitive discharge) → Test for dead (prove tester, test all phases to earth, re-prove tester) → Apply earth clamps (earth side first) → Barriers + warning signs → Brief team and work. Restore in exact reverse order.</td></tr>
    <tr><td>What gloves for 6.6 kV ship?</td><td>Class 2 rubber insulating gloves - Yellow colour - rated 17,000 V (17 kV) AC. Always worn with leather outer protectors. Inflation test before every use. Electrical dielectric test every 6 months. Reject any gloves with cuts, holes, ozone cracking, or expired test date.</td></tr>
    <tr><td>List 14 safeties on the MSB</td><td>Dead front · Insulating rubber mats (6 mm LV, 12 mm HV) · Insulating handrails · 1000 mm front clearance + 600 mm rear · Earth bus · Bus tie breaker · Earth fault indicator/IMS · Phase barriers · Emergency lighting · CO₂ extinguisher · Labels + colour coding · LOTO facilities · Forward + aft doors · Ventilation.</td></tr>
    <tr><td>Why apply earthing clamps even after LOTO?</td><td>Three reasons: (1) HV cables hold capacitive charge - earthing discharges safely before contact. (2) Adjacent live cables can inductively/capacitively induce voltage onto isolated conductor. (3) Inadvertent re-energisation - earth clamp creates solid short circuit, trips protection, prevents electrocution.</td></tr>
    <tr><td>Why megger not multimeter for IR testing?</td><td>Multimeter uses only 1.5–9 V - far too low to stress thick insulation or reveal moisture tracks. Megger uses 500 V to 5000 V DC, stresses insulation to near-operating voltage, reveals weak spots, moisture, carbonised tracks. Min IR = (kV + 1) MΩ.</td></tr>
    <tr><td>What is the IRM and how does it work?</td><td>Insulation Resistance Monitor - continuously monitors insulation impedance between live conductors and hull. Injects 1–5 V DC, measures leakage current. Alarms when impedance drops below threshold (50–100 kΩ). Does NOT locate the faulty circuit - ETO switches off non-essential circuits one at a time until alarm clears.</td></tr>
  </table>


  <!-- ═══════════════════════════════════════════════════════════
       SECTION 31 - QUICK REVISION (ALWAYS LAST)
  ════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="t2-quickrev">📊 Quick Revision - High Voltage Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic / Question</th><th>Exam Frequency</th><th>Key Points to State</th></tr>
    <tr><td>HV Advantages (P = √3 × V × I × PF)</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Lower current, smaller cables, less I²R loss, saves weight. Justified at &gt;3–5 MW.</td></tr>
    <tr><td>Why VCB not ACB</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Arc energy 225× at 6.6 kV. Air ionises. Vacuum extinguishes at first zero (10 ms). No air molecules to sustain ionisation.</td></tr>
    <tr><td>NER purpose, formula, values</td><td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td><td>Compromise: solid earth → too much current; floating → too much voltage. R = V<sub>phase</sub>/I<sub>fault</sub>. 6.6 kV at 10 A → 381 Ω. Limits to 5–30 A.</td></tr>
    <tr><td>Dead Front Panel</td><td class="hl">⭐⭐⭐⭐⭐</td><td>No live parts accessible from front. Enclosed barriers. Touch voltage ≤ 50 V AC. IEC 60092 requirement.</td></tr>
    <tr><td>HV Working Procedure (PTW 8 steps)</td><td class="hl">⭐⭐⭐⭐⭐</td><td>PTW → Isolate → LOTO → Wait 5 min → Test dead (prove-test-prove) → Earth → Barriers → Brief + work.</td></tr>
    <tr><td>14 MSB Safeties</td><td class="hl">⭐⭐⭐⭐⭐ Favourite surveyor question</td><td>Dead front · Mats (6/12 mm) · Handrails · Clearance (1000/600 mm) · Earth bus · Bus tie · IMS · Phase barriers · Lighting · CO₂ · Labels · LOTO · Two doors · Ventilation.</td></tr>
    <tr><td>Arc Flash</td><td class="hl">⭐⭐⭐⭐</td><td>Explosive energy release &gt;20,000°C. Arc blast = overpressure wave. Arc-flash rated PPE (cal/cm² suit, face shield, Class 2 gloves).</td></tr>
    <tr><td>HV Gloves - Class 2</td><td class="hl">⭐⭐⭐⭐</td><td>Class 2 = Yellow = 17 kV for 6.6 kV ships. Class 3 = Green = 26.5 kV for 11 kV. Test every 6 months. Inflation test before every use.</td></tr>
    <tr><td>SF6 Gas properties + hazards</td><td class="hl">⭐⭐⭐⭐</td><td>Electronegative, 2.5× air dielectric strength. GWP = 23,500. Arc products: HF, SOF₂, SO₂ - all toxic. SCBA + Ca(OH)₂ after arcing.</td></tr>
    <tr><td>Why 1.1 kV multiples</td><td class="hl">⭐⭐⭐⭐ Praveen Nair</td><td>Form factor = V<sub>rms</sub>/V<sub>avg</sub> = 1.11. IEC standard series. 3.3 = 3×1.1, 6.6 = 6×1.1, 11 = 10×1.1. Insulation design based on peak voltage.</td></tr>
    <tr><td>VCB three positions + rack out</td><td class="hl">⭐⭐⭐⭐ Deswal</td><td>SERVICE (HV connected) → TEST (control only) → ISOLATED (shutters closed). Open first, discharge spring, LOTO, test dead, earth.</td></tr>
    <tr><td>HV IR test - formula + megger voltage</td><td class="hl">⭐⭐⭐⭐</td><td>Min IR (MΩ) = kV + 1. 6.6 kV → 7.6 MΩ min / 15.2 MΩ return-to-service (200% rule). 6.6 kV cables → 5000 V megger. PCBs → 50–100 V only.</td></tr>
    <tr><td>IRM working principle</td><td class="hl">⭐⭐⭐⭐</td><td>Injects 1–5 V DC between neutral and hull. Measures leakage current. Alarms when impedance drops below 50–100 kΩ. Does not locate fault - switch off circuits sequentially.</td></tr>
    <tr><td>CT must never be open-circuited</td><td class="hl">⭐⭐⭐</td><td>Open CT secondary → no opposing MMF → core saturates → thousands of volts induced → lethal. Shorting-type make-before-break terminals always used.</td></tr>
    <tr><td>PT has fuse, CT does not - why?</td><td class="hl">⭐⭐⭐</td><td>PT secondary short circuit is the danger → fuse safe. CT secondary open circuit is the danger → fuse would create the dangerous condition when it blows. Fuses forbidden on CT secondary.</td></tr>
    <tr><td>HVSC safety pilot loop (IEC 80005-1)</td><td class="hl">⭐⭐⭐ 2024–2026 new question</td><td>Continuous monitoring circuit through HV plug. Min 50 mA. If broken → both ship + shore breakers open within 200 ms. Prevents arc flash at plug socket.</td></tr>
    <tr><td>Shaft earthing - why and how</td><td class="hl">⭐⭐⭐</td><td>Shaft insulated from hull by oil film → stray currents → electrolytic bearing corrosion. Carbon brush on shaft provides direct path to hull. Check brush wear, spring pressure, shaft-to-hull resistance (&lt;1 Ω).</td></tr>
    <tr><td>Skin effect in HV conductors</td><td class="hl">⭐⭐⭐</td><td>AC current flows near conductor surface only. Reduces effective cross-section → increases AC resistance. Mitigated by stranded or hollow conductors.</td></tr>
    <tr><td>Preferential trip</td><td class="hl">⭐⭐⭐</td><td>Auto load shedding in stages when generator overloaded. Stage 1: galley, HVAC. Stage 2: accommodation. Never sheds: steering, nav lights, fire pumps, GMDSS. Prevents blackout.</td></tr>
  </table>

  </div>
</div>
</div>
`);
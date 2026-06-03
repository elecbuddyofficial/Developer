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
      <span class="tag tag-orange"><span class="n-val">6.6kV</span> / <span class="n-val">11kV</span></span>
      <span class="tag tag-purple">VCB · NER · IRM</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('t2-basics')">HV Basics</button>
    <button class="anc-btn" onclick="jumpTo('t2-multiples')">Why <span class="n-val">1.1kV</span>?</button>
    <button class="anc-btn" onclick="jumpTo('t2-ner')">NER</button>
    <button class="anc-btn" onclick="jumpTo('t2-vcb')">VCB &amp; SF6</button>
    <button class="anc-btn" onclick="jumpTo('t2-deadfront')">Dead Front &amp; MSB</button>
    <button class="anc-btn" onclick="jumpTo('t2-arc')">Arc Flash</button>
    <button class="anc-btn" onclick="jumpTo('t2-safety')">HV Working</button>
    <button class="anc-btn" onclick="jumpTo('t2-gloves')">HV Gloves</button>
    <button class="anc-btn" onclick="jumpTo('t2-vcb-maint')">VCB Maint.</button>
    <button class="anc-btn" onclick="jumpTo('t2-ir')">HV IR Test</button>
    <button class="anc-btn" onclick="jumpTo('t2-irm')">IRM</button>
    <button class="anc-btn" onclick="jumpTo('t2-bonding')">Tanker Bonding</button>
    <button class="anc-btn" onclick="jumpTo('t2-shaft')">Shaft Earthing</button>
    </div>

<div class="n-h1" id="t2-qa-basics">❓ Surveyor Q&A - HV Basics</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What are the advantages and disadvantages of a high voltage system on ships?<br><strong>Ideal Answer:</strong> <em>Advantages:</em> For the same power, higher voltage means lower current - smaller cables (less weight, less cost), lower I²R losses (less heat in cables), smaller generator windings, economical for large power transmission. <em>Disadvantages:</em> More dangerous (higher lethal risk), needs special equipment (VCB, SF6, HV cables, HV motors), needs trained personnel, higher equipment cost, needs step-down transformers for normal use, more complex protection.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is considered high voltage on a ship?<br><strong>Ideal Answer:</strong> Per IEC 60092: high voltage is above <span class="n-val">1000V</span> AC or <span class="n-val">1500V</span> DC. Typical HV on ships: <span class="n-val">3.3 kV</span>, <span class="n-val">6.6 kV</span> (most common), <span class="n-val">11 kV</span> (very large ships). LV is <span class="n-val">1000V</span> AC and below - includes the standard ship supply of <span class="n-val">440V</span>. Ships needing more than 3-<span class="n-val">5 MW</span> total electrical power typically use HV systems - VLCCs, large bulk carriers, LNG carriers, cruise ships.</div></div>

<div class="n-h2">Power Equation - The Heart of HV Justification</div>
<div class="n-formula">P = √3 × V × I × PF<div class="label">Doubling V halves I for the same power output</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked example:</strong> <span class="n-val">6.6kV</span> at <span class="n-val">1000A</span> delivers the SAME power as <span class="n-val">440V</span> at 15,<span class="n-val">000A</span>. The cable sized for <span class="n-val">1000A</span> vs 15,<span class="n-val">000A</span> represents a massive copper, weight and cost saving. This is the single biggest exam justification for HV.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "Higher Volts = Lower Amps = Thinner Cables = Lighter Ship." HV is chosen when load exceeds 3-<span class="n-val">5 MW</span>.</div></div>

<div class="n-h1" id="t2-qa-formfactor">❓ Form Factor & Q&A - <span class="n-val">1.1 kV</span> Series</div>
<div class="n-formula">Form Factor = V<sub>rms</sub> / V<sub>avg</sub> = (0.707 × V<sub>peak</sub>) / (0.637 × V<sub>peak</sub>) = 1.11<div class="label">≈ 1.1 - the base of the IEC standard HV voltage series</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>IEC Standard Voltage Series:</strong> 1.1, 3.3, 6.6, 11, 33, 66, 110, 132, 220, <span class="n-val">400 kV</span>. Successive levels relate by ratios of approximately √3 (1.732) and 2. On ships: <strong>3.3 = 3×1.1</strong>, <strong>6.6 = 6×1.1</strong>, <strong>11 = 10×1.1</strong>.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Praveen Nair):</strong> Why are HV voltages on ships multiples of <span class="n-val">1.1 kV</span> (3.3, 6.6, 11)?<br><strong>Ideal Answer:</strong> Form factor of a sinusoidal AC waveform = V<sub>rms</sub>/V<sub>avg</sub> = 1.11 (≈1.1). This <span class="n-val">1.1 kV</span> forms the base of the IEC standard voltage series. 3.3 = 3×1.1, 6.6 = 6×1.1, 11 = 10×1.1. Standardisation simplifies transformer design and insulation coordination across the voltage series, and ensures global interoperability of HV equipment.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is form factor and how does it relate to HV?<br><strong>Ideal Answer:</strong> Form factor = V<sub>rms</sub>/V<sub>avg</sub> = 1.11 for sinusoidal AC. This value is the origin of the <span class="n-val">1.1 kV</span> base of the IEC series, so all standard HV levels are multiples. Form factor also matters because HV insulation design is based on PEAK voltage (V<sub>peak</sub> = V<sub>rms</sub> × √2 = V<sub>rms</sub> × 1.414) - insulation must withstand the peak, not just the RMS value.</div></div>

<div class="n-h1" id="t2-qa-ner">❓ NER - Q&A, Memory Aid & Neutral Point</div>
<div class="n-formula">R<sub>NER</sub> = V<sub>phase</sub> / I<sub>fault max</sub> &nbsp;|&nbsp; V<sub>phase</sub> = V<sub>line</sub> / √3<div class="label"><span class="n-val">6.6kV</span> → V_phase = 6600/1.732 = <span class="n-val">3810V</span></div></div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">I<sub>max</sub> = <span class="n-val">10A</span></div><div class="card-val">381 Ω</div><div class="card-desc">3810 / 10 = 381 ohms</div></div>
  <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">I<sub>max</sub> = <span class="n-val">5A</span></div><div class="card-val">762 Ω</div><div class="card-desc">3810 / 5 = 762 ohms</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Typical Range</div><div class="card-val">300-800 Ω</div><div class="card-desc">For <span class="n-val">6.6kV</span> systems</div></div>
</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Deswal):</strong> Why is the HV system not fully floating like LV ships?<br><strong>Ideal Answer:</strong> On HV, a fully floating system would let healthy phase voltage rise to √3 × normal phase voltage during an earth fault (<span class="n-val">6.6kV</span> → <span class="n-val">11.4kV</span>), severely stressing insulation. There is also a ferroresonance risk - dangerous overvoltages. NER limits earth fault current to a safe value (5-<span class="n-val">30A</span>) AND provides a defined earth reference to limit these overvoltages.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath):</strong> What is the common/neutral point in an HV system and how is NER connected?<br><strong>Ideal Answer:</strong> The neutral (star point) is where the three phase windings of the generator/transformer secondary meet. In a star-connected generator the neutral terminal is directly available - NER connects between neutral and ship's hull (earth). In a delta-connected HV generator there is no neutral point, so a zig-zag (earthing) transformer is used to create an artificial neutral for the NER connection. The NER is mounted in the HV switchboard room or near the generator neutral terminal in a protected, restricted-access enclosure.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - NER:</strong> "The compromise between solid earth (too much current) and floating (too much voltage)." R = V<sub>phase</sub>/I<sub>max</sub>, where V<sub>phase</sub> = V<sub>line</sub>/√3. Limits current to 5-<span class="n-val">30A</span> - enough to detect the fault, not enough to cause major damage.</div></div>

<div class="n-h1" id="t2-qa-vcb">❓ VCB / SF6 - Q&A & Arc Detail</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Arc energy ∝ V².</strong> At <span class="n-val">6.6kV</span> the arc is (6600/440)² = 225× more energetic than at <span class="n-val">440V</span>. This is the core reason ACB (air) fails at HV.</div></div>
<div class="n-h2">VCB - How It Quenches</div>
<ul class="n-list">
  <li>Contacts open inside a ceramic vacuum bottle evacuated to &lt; 10⁻⁶ mbar.</li>
  <li>On separation, a small arc forms from metal vapour off the contacts.</li>
  <li>In vacuum there are no air molecules to sustain ionisation - metal vapour dissipates almost instantly.</li>
  <li>Arc extinguished at first current zero crossing - typically within ½ cycle (10 ms at <span class="n-val">50 Hz</span>).</li>
  <li><strong>Limitation:</strong> Vacuum integrity cannot be verified without special equipment; bottle has finite life.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> Why is VCB used on HV and not ACB?<br><strong>Ideal Answer:</strong> Arc energy ∝ V² - at <span class="n-val">6.6kV</span> the arc is ~225× more energetic than at <span class="n-val">440V</span>. Air in an ACB ionises under the intense HV arc and becomes conducting, so it cannot quench it - continued arcing causes fire and explosion (ACB limited to ~<span class="n-val">1000V</span>). A VCB opens contacts in vacuum; the small metal-vapour arc dissipates instantly at the first current zero (~10 ms) since there are no air molecules to sustain ionisation. SF6 uses an electronegative gas that absorbs free electrons to stop the arc.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is SF6 gas and what are its properties?<br><strong>Ideal Answer:</strong> SF6 (Sulphur Hexafluoride, 1 S + 6 F) - colourless, odourless, non-toxic when pure, non-flammable. Dielectric strength 2.5× air at atmospheric pressure (5-8× at ~<span class="n-val">4 bar</span>). Electronegative - absorbs free electrons to stop the arc. Environmental concern: GWP = 23,500, atmospheric life 3200 years. Arc decomposition products (HF, SOF2, SO2F2) are toxic - ventilate before entry after any arcing. Still widely used as no satisfactory alternative exists at very high voltage.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Voltage ranges:</strong> ACB up to <span class="n-val">1000V</span> (LV only) · VCB up to <span class="n-val">36 kV</span> · SF6 up to <span class="n-val">800 kV</span>. SF6 also provides excellent insulation between open contacts.</div></div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - SF6 dielectric:</strong> "2.5× air at <span class="n-val">1 bar</span>, 5-8× air at <span class="n-val">4 bar</span>." Electronegative = "electron-eater" - it gobbles free electrons so the arc cannot survive.</div></div>

<div class="n-h1" id="t2-deadfront-detail">🛡️ Dead Front - IEC Requirement & Touch Voltage</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>IEC 60092 Requirement:</strong> ALL switchboards must be dead-front construction - no live parts accessible from the front. Where personnel work in front of the MSB, dead-front is mandatory.</div></div>
<ul class="n-list">
  <li>Live busbars, terminals and connections are fully enclosed behind barriers, doors and shutters.</li>
  <li>To access live parts: open interlocked doors / remove covers - which trip the circuit or require prior isolation.</li>
  <li><strong>Touch voltage on operating face limited to safe levels:</strong> typically <span class="n-val">50V</span> AC or <span class="n-val">120V</span> DC.</li>
  <li>Any AC/DC voltage may be inside a dead-front board - it is all enclosed.</li>
</ul>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a dead front panel?<br><strong>Ideal Answer:</strong> A switchboard where no live parts are accessible from the front (operating side) during normal operation. All live busbars/terminals are fully enclosed behind barriers, doors and shutters; operating handles, push-buttons and indicators on the front are at safe touch voltage or insulated. Accidental contact with live parts is impossible in normal operation - required by IEC 60092.</div></div>
<div class="n-h2">Additional MSB Safeties (not yet listed)</div>
<ul class="n-list">
  <li><strong>Bus tie breaker:</strong> between MSB sections - allows isolation of one section while the other stays live.</li>
  <li><strong>Forward and aft access doors:</strong> entry/escape from both ends of the switchboard.</li>
  <li><strong>Ventilation:</strong> adequate cooling to prevent heat build-up from copper/iron losses.</li>
  <li><strong>MSB & emergency lighting:</strong> board area supplied by emergency lighting circuit.</li>
  <li><strong>Earth bus:</strong> common earth bar running throughout the MSB - all equipment bonded to it.</li>
</ul>


<div class="n-h1" id="t2-disadv-detail">⚖️ HV Advantages & Disadvantages - Full List</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Complete advantage list (P = V × I × √3 × PF):</strong> Doubling voltage halves current for the same power.</div></div>
<div class="n-grid">
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">① Reduced Current</div><div class="card-desc">Same power → smaller cable cross-sections → less weight/cost.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">② Lower I²R Losses</div><div class="card-desc">Less current = less heat lost in cables.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">③ Smaller Cables</div><div class="card-desc">Reduces weight and space in cable trays.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">④ Smaller Generator</div><div class="card-desc">Less copper in windings for same rating.</div></div>
  <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">⑤ Economical Transmission</div><div class="card-desc">Essential for very large ships &gt; 3-<span class="n-val">5 MW</span>.</div></div>
</div>
<div class="n-h2">Disadvantages - 7 Points</div>
<ul class="n-list">
  <li><strong>Safety hazard</strong> - higher voltage = more lethal on contact.</li>
  <li><strong>Special equipment</strong> - VCB, SF6 breakers, HV cables, HV motors.</li>
  <li><strong>Special training</strong> - crew must be specifically certificated for HV work.</li>
  <li><strong>Higher equipment cost</strong> - switchgear, transformers, motors all dearer.</li>
  <li><strong>Step-down transformers needed</strong> - to provide LV for lighting & small equipment.</li>
  <li><strong>More complex protection</strong> schemes required.</li>
  <li><strong>Longer safe isolation time</strong> - capacitive charge takes longer to dissipate.</li>
</ul>

<div class="n-h1" id="t2-msb-safeties">🛡️ MSB Safeties - Complete 14-Point List</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor favourite:</strong> "List all safeties on the main switchboard." Know all 14 - most candidates only manage 5-6.</div></div>
<ol class="n-steps">
  <li><strong>Dead front construction</strong> - no live parts accessible from front.</li>
  <li><strong>Insulating mats</strong> - rubber mats front & rear. LV (<span class="n-val">440V</span>) → <span class="n-val">1000V</span> rated; HV ships → higher rated.</li>
  <li><strong>Insulating handrails</strong> - fibre/rubber on MSB walkway, non-conductive.</li>
  <li><strong>Adequate clearance</strong> - minimum <span class="n-val">600 mm</span> working clearance front and rear.</li>
  <li><strong>Earth bus</strong> - common earth bus bar throughout MSB; all equipment earthed.</li>
  <li><strong>Bus tie breaker</strong> - isolates one section while other stays live.</li>
  <li><strong>Earth fault indicator / IMS</strong> - monitors insulation resistance, alarms on earth fault.</li>
  <li><strong>Phase barriers</strong> - insulating barriers between busbar phases, prevent phase-to-phase fault.</li>
  <li><strong>MSB lighting</strong> - adequate illumination + emergency lighting supply.</li>
  <li><strong>Fire extinguisher</strong> - CO₂ at MSB, suitable for electrical fires.</li>
  <li><strong>Labels & colour coding</strong> - phase ID (R/Y/B or brown/black/grey per IEC), circuit labels.</li>
  <li><strong>Locking facilities</strong> - lockout/tagout on all isolators and breakers.</li>
  <li><strong>Forward & aft doors</strong> - access from both ends for emergency escape.</li>
  <li><strong>Ventilation</strong> - adequate to prevent heat build-up from losses.</li>
</ol>

<div class="n-h1" id="t2-acb-vcb-table">📊 ACB vs VCB vs SF6 - Full Comparison</div>
<table class="n-table">
  <tr><th>Feature</th><th>ACB (Air)</th><th>VCB (Vacuum)</th><th>SF6</th></tr>
  <tr><td>Arc quench medium</td><td>Air - arc chutes</td><td class="ok">Vacuum - metal vapour</td><td>SF6 - electronegative gas</td></tr>
  <tr><td>Voltage range</td><td class="bad">Up to <span class="n-val">1000V</span> (LV)</td><td class="hl">Up to <span class="n-val">36 kV</span></td><td class="ok">Up to <span class="n-val">800 kV</span></td></tr>
  <tr><td>Quench speed</td><td>Moderate (chutes)</td><td class="ok">Very fast - first zero</td><td class="ok">Very fast</td></tr>
  <tr><td>Maintenance</td><td>Moderate - chute clean</td><td class="ok">Low - sealed bottle</td><td>Low-moderate - gas monitor</td></tr>
  <tr><td>Dielectric strength</td><td class="bad">Low (air)</td><td class="ok">High (vacuum)</td><td class="ok">Very high (2.5× air)</td></tr>
  <tr><td>Environmental</td><td class="ok">None</td><td class="ok">None</td><td class="bad">GWP 23,500</td></tr>
  <tr><td>Ship application</td><td>MSB/ESB - LV</td><td class="hl">HV SB 3.3-<span class="n-val">11kV</span></td><td>HV, some large ships</td></tr>
</table>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - VCB:</strong> "No air, no arc." Advantages: no arc products, no quench medium maintenance, compact, fast. Disadvantages: vacuum can't be verified without special gear, bottle has finite life.</div></div>

<div class="n-h1" id="t2-deadfront-qa">❓ Dead Front Panel - Q&A</div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q:</strong> What is a dead front panel?<br><strong>Ideal Answer:</strong> A switchboard where NO live parts are accessible from the front (operating side) during normal operation. All live busbars, terminals and connections are fully enclosed behind barriers, doors and shutters. Operating handles, push buttons and indicators on the front are all at safe touch voltage or insulated. To reach live parts you must open interlocked doors or remove covers - which trip the circuit or require isolation first. Required by IEC 60092. Touch voltage on operating face limited to <span class="n-val">50V</span> AC / <span class="n-val">120V</span> DC.</div></div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why dead front:</strong> On older open-type MSBs the live busbars were exposed on the front - accidental contact meant electrocution. Dead front construction makes accidental contact with live parts impossible during normal operation.</div></div>

    <button class="anc-btn" onclick="jumpTo('t2-quickrev')">Quick Revision</button>
  </div>

  <div class="n-h1" id="t2-basics">⚡ High Voltage Systems - Basics</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Definition (IEC 60092):</strong> High Voltage is above <span class="n-val">1000V</span> AC or <span class="n-val">1500V</span> DC. Typical HV on ships: <strong><span class="n-val">3.3 kV</span></strong>, <strong><span class="n-val">6.6 kV</span></strong> (most common), <strong><span class="n-val">11 kV</span></strong>. HV is justified when total electrical power demand exceeds approximately 3-<span class="n-val">5 MW</span>.</div></div>
  <div class="n-h2">Advantages vs Disadvantages</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">✓ Advantages</div>
      <ul class="n-list" style="margin:0">
        <li><strong>Lower current for same power</strong> → thinner cables → significant weight saving</li>
        <li>Lower I²R losses in cables → improved efficiency</li>
        <li>Smaller cable cross-sections → easier routing</li>
        <li>Better voltage regulation over long cable runs</li>
        <li>Suitable for massive loads (thrusters, cargo pumps)</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">✗ Disadvantages</div>
      <ul class="n-list" style="margin:0">
        <li><strong>Greater danger to personnel</strong> - stricter safety procedures</li>
        <li>Expensive switchgear (VCB, SF6 breakers)</li>
        <li>Specially trained personnel required - HV authorisation</li>
        <li>Complex insulation monitoring and protection systems</li>
        <li>Step-down transformers needed for LV general use</li>
      </ul>
    </div>
  </div>

  <div class="n-h1" id="t2-multiples">🔢 Why HV Voltages are Multiples of <span class="n-val">1.1 kV</span></div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyor Praveen Nair:</strong> "Why are HV voltages in multiples of 1.1?"</div></div>
  <ul class="n-list">
    <li><strong>Form Factor:</strong> For a sinusoidal AC waveform, Form Factor = V_rms / V_avg = 1.11 (approx 1.1). The <span class="n-val">1.1kV</span> forms the base.</li>
    <li><strong>Transformer Ratios:</strong> Standard distribution transformers are designed with turns ratios based on <span class="n-val">1.1kV</span> increments (3.3 = 3×1.1, 6.6 = 6×1.1). Simplifies design.</li>
    <li><strong>IEC Standard Series:</strong> IEC established this standard voltage series to ensure interoperability globally.</li>
  </ul>

  <div class="n-h1" id="t2-ner">🔌 Neutral Earthing Resistor (NER)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Exam Must Know:</strong> The compromise between solid earth (too much current) and floating (too much voltage).</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">Without NER - Solid Earth</div>
      <div class="card-desc">Earth fault current = V_phase / Z_system → <strong>thousands of amps</strong> → severe arc flash, fire, equipment destruction.</div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Without NER - Fully Floating</div>
      <div class="card-desc">First fault gives no trip. But on HV, healthy phase voltage rises to <strong>√3 × phase voltage</strong> during fault (e.g., to <span class="n-val">11.4kV</span> on <span class="n-val">6.6kV</span> system) → severely stresses insulation.</div>
    </div>
  </div>
  <div class="n-ok"><div class="icon">✅</div><div class="body"><strong>With NER Solution:</strong> Connects HV generator neutral to earth through a resistor. Limits earth fault current to safe value (e.g., 5-<span class="n-val">30A</span>) while providing defined earth reference to limit overvoltages.</div></div>
  <div class="n-h2">NER Calculation Example</div>
  <div class="n-formula">R_NER = V_phase / I_fault_max<div class="label">V_phase = Line Voltage / √3</div></div>
  <p class="n-p">For a <span class="n-val">6.6kV</span> system with max allowed fault current of <span class="n-val">10A</span>:<br>
  V_phase = 6600 / 1.732 = <strong><span class="n-val">3810V</span></strong><br>
  R_NER = 3810 / 10 = <strong>381 ohms</strong>.</p>

  <div class="n-h1" id="t2-vcb">🔘 HV Switchgear - VCB &amp; SF6</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Why VCB used on HV and not ACB?</strong> At <span class="n-val">6.6kV</span>, arc energy is ~225x more energetic than at <span class="n-val">440V</span>. Air (in ACB) ionises under intense HV arc and becomes conductive - cannot quench the arc. Continued arcing = explosion.</div></div>
  <table class="n-table">
    <tr><th>Feature</th><th>ACB (Air)</th><th>VCB (Vacuum)</th><th>SF6 Circuit Breaker</th></tr>
    <tr><td><strong>Arc Quench</strong></td><td>Air - elongated by arc chutes</td><td>Vacuum - metal vapour dissipates</td><td>SF6 gas - absorbs electrons</td></tr>
    <tr><td><strong>Voltage Range</strong></td><td>Up to <span class="n-val">1000V</span> (LV)</td><td>Up to <span class="n-val">36kV</span></td><td>Up to <span class="n-val">800kV</span></td></tr>
    <tr><td><strong>Quench Speed</strong></td><td>Moderate</td><td class="hl">Very fast (1st zero crossing)</td><td class="hl">Very fast</td></tr>
  </table>
  <div class="n-h2">SF6 Gas Properties &amp; Hazards</div>
  <ul class="n-list">
    <li><strong>Properties:</strong> Sulphur Hexafluoride. Colourless, odourless, non-toxic (when pure). Dielectric strength <strong>2.5× air</strong>. Electronegative (strongly attracts free electrons, stopping arc).</li>
    <li><strong>Environmental:</strong> Potent greenhouse gas (GWP = 23,500). Atmospheric life 3200 years. Strict leak controls.</li>
    <li><strong>Arc Decomposition:</strong> When arced, produces <strong>highly toxic</strong> gases (HF, SOF2). If equipment arcs, ventilate area, wear full PPE before opening.</li>
  </ul>

  <div class="n-h1" id="t2-deadfront">🛡️ Dead Front Panel &amp; MSB Safeties</div>
  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Dead Front Panel:</strong> An electrical switchboard where NO live parts are accessible from the front (operating side) during normal operation. All busbars and terminals are fully enclosed behind barriers.</div></div>
  <div class="n-h2">MSB Safeties &amp; Clearances</div>
  <ul class="n-list">
    <li><strong>Front Clearance:</strong> Minimum <span class="n-val">1000 mm</span> (1 m) working space.</li>
    <li><strong>Rear Clearance:</strong> Minimum <span class="n-val">600 mm</span> safe access for cable entries and busbars.</li>
    <li><strong>Rubber Mats:</strong> Minimum <span class="n-val">6 mm</span> thick for <span class="n-val">440V</span>, minimum <strong><span class="n-val">12 mm</span> thick</strong> for HV (><span class="n-val">1000V</span>). Must cover full working area.</li>
    <li><strong>Busbars:</strong> Standard MSB has 4 (L1, L2, L3, N). Split MSB has 6 phase bars + bus-tie breaker.</li>
    <li><strong>Neutral:</strong> Neutral is NOT directly earthed on ships (IT insulated system). Earth busbar is separate.</li>
    <li><strong>Other safeties:</strong> Insulating handrails, earth fault indicator, phase barriers, CO2 extinguisher, LOTO facilities.</li>
  </ul>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Colour Coding (IEC):</strong> L1 = Brown, L2 = Black, L3 = Grey, N = Blue, Earth = Green/Yellow. (Old ships: Red/Yellow/Blue).</div></div>

  <div class="n-h1" id="t2-arc">💥 Arc Flash &amp; Arc Blast</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Arc Flash:</strong> Explosive release of energy from electrical arc fault through air. Temperatures exceed <strong>20,000°C</strong> (4x surface of the sun).</div></div>
  <ul class="n-list">
    <li><strong>Effects:</strong> Intense heat (burns), blinding UV light, vaporised molten copper droplets.</li>
    <li><strong>Arc Blast:</strong> The pressure/shock wave from rapid air expansion. Can throw personnel across room, >1000 lbf/ft².</li>
    <li><strong>PPE:</strong> Arc-flash rated coverall suit (cal/cm² rated), face shield, insulating gloves.</li>
  </ul>

  <div class="n-h1" id="t2-safety">🔐 HV Working Procedure (PTW)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Golden Rule: ASSUME LIVE UNTIL PROVED DEAD.</strong> HV work requires formal Permit to Work from Chief Engineer.</div></div>
  <ol class="n-steps">
    <li><strong>Risk Assessment &amp; PTW:</strong> Identify task and hazards. Obtain permit.</li>
    <li><strong>Identify &amp; Isolate:</strong> Open ALL relevant breakers/isolators on all sources of supply.</li>
    <li><strong>Lock Out / Tag Out:</strong> Padlock breakers OPEN, attach 'Men At Work' tags, keep the key.</li>
    <li><strong>Wait for Discharge:</strong> Wait minimum <strong>5 minutes</strong> for capacitive charge to dissipate.</li>
    <li><strong>Test for Dead:</strong> Use approved HV voltage detector. Test on known live circuit first, then all 3 phases to earth, then retest on live circuit.</li>
    <li><strong>Apply Earth:</strong> Apply approved earthing clamps to all phases at work point (connect earth side first).</li>
    <li><strong>Barriers &amp; Signs:</strong> Erect physical barriers and 'High Voltage' warning signs.</li>
    <li><strong>Brief &amp; Work:</strong> Brief team, carry out work. Restore in exact reverse order (earths off last).</li>
  </ol>

  <div class="n-h1" id="t2-gloves">🧤 HV Insulating Gloves</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Exam Must Know: Know the Class, Colour, and Voltage Rating. Tested every 6 months.</div></div>
  <table class="n-table">
    <tr><th>Class</th><th>Colour</th><th>Max Use Voltage (AC)</th><th>Ship Application</th></tr>
    <tr><td>Class 00</td><td>Beige</td><td><span class="n-val">500V</span></td><td>LV work</td></tr>
    <tr><td>Class 0</td><td>Red</td><td>1,<span class="n-val">000V</span></td><td>LV work</td></tr>
    <tr><td>Class 1</td><td>White</td><td>7,<span class="n-val">500V</span></td><td><span class="n-val">3.3kV</span> systems</td></tr>
    <tr><td class="hl"><strong>Class 2</strong></td><td class="hl"><strong>Yellow</strong></td><td class="hl"><strong>17,<span class="n-val">000V</span> (<span class="n-val">17kV</span>)</strong></td><td class="hl"><strong><span class="n-val">6.6kV</span> systems</strong></td></tr>
    <tr><td class="hl"><strong>Class 3</strong></td><td class="hl"><strong>Green</strong></td><td class="hl"><strong>26,<span class="n-val">500V</span> (<span class="n-val">26.5kV</span>)</strong></td><td class="hl"><strong><span class="n-val">11kV</span> systems</strong></td></tr>
    <tr><td>Class 4</td><td>Orange</td><td>36,<span class="n-val">000V</span></td><td>Very high voltage</td></tr>
  </table>
  <p class="n-p"><strong>Pre-use Check:</strong> Roll cuff to inflate, check for holes. Wear leather protectors OVER rubber gloves to prevent mechanical damage.</p>

  <div class="n-h1" id="t2-vcb-maint">🔧 VCB Maintenance &amp; Rack Out</div>
  <div class="n-h2">VCB Rack Out Sequence</div>
  <ol class="n-steps">
    <li><strong>OPEN VCB:</strong> Interlock prevents racking while closed (preventing arc).</li>
    <li><strong>SERVICE to TEST:</strong> Wind back. Disconnects from busbars, control circuits remain connected (relays can be tested).</li>
    <li><strong>TEST to ISOLATED:</strong> Fully withdrawn. Control disconnected, shutters automatically close over busbar spouts. Padlock in place.</li>
  </ol>
  <div class="n-h2">Routine Maintenance</div>
  <ul class="n-list">
    <li><strong>Visual:</strong> Check vacuum bottle for cracks, mechanism for wear.</li>
    <li><strong>Vacuum Integrity Test:</strong> Apply 30-<span class="n-val">40kV</span> across open contacts to confirm vacuum still exists.</li>
    <li><strong>Ductor Test (Contact Resistance):</strong> Measure closed contact resistance using micro-ohmmeter (typically &lt; 100 μΩ). High resistance = worn/oxidised contacts.</li>
    <li><strong>Timing Test:</strong> Measure open/close speed and contact bounce.</li>
  </ul>

  <div class="n-h1" id="t2-ir">🔍 HV IR Testing &amp; 200% Rule</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">Why higher voltage megger for HV? Testing <span class="n-val">6.6kV</span> with <span class="n-val">500V</span> only applies 7.5% stress. Must use <span class="n-val">2500V</span> or <span class="n-val">5000V</span> megger to meaningfully stress thick HV insulation and detect weak spots/moisture.</div></div>
  <ul class="n-list">
    <li><strong>Megger values:</strong> <span class="n-val">3.3kV</span> equip = <span class="n-val">2500V</span> DC. <span class="n-val">6.6kV</span> equip = <span class="n-val">2500V</span>/<span class="n-val">5000V</span> DC.</li>
    <li><strong>Minimum IR:</strong> Rated Voltage (kV) + 1 MΩ. So <span class="n-val">6.6kV</span> needs minimum <strong>7.6 MΩ</strong>.</li>
    <li><strong>200% Insulation Rule:</strong> After repair, IR must be at least TWICE the minimum acceptable value before return to service.</li>
    <li><strong>PI Test:</strong> Polarisation Index used on HV cables due to high capacitance making simple IR tests unreliable.</li>
  </ul>

  <div class="n-h1" id="t2-irm">📡 Insulation Resistance Monitor (IRM)</div>
  <p class="n-p">Ship uses IT (Insulated Neutral) system. IRM continuously monitors insulation impedance to earth.</p>
  <ul class="n-list">
    <li>Injects low-level voltage (1-<span class="n-val">5V</span>) between neutral and hull.</li>
    <li>If insulation deteriorates, leakage current increases → impedance drops below threshold (~50-100 kΩ) → <strong>ALARM</strong>.</li>
    <li>IRM doesn't identify the specific faulty circuit. ETO must switch off non-essential circuits sequentially until alarm clears.</li>
  </ul>

  <div class="n-h1" id="t2-bonding">🛢️ Tanker Hazardous Zones &amp; Bonding</div>
  <table class="n-table">
    <tr><th>Zone</th><th>Atmosphere</th><th>Examples</th><th>Permitted Equipment</th></tr>
    <tr><td><strong>Zone 0</strong></td><td><span class="bad">Continuous</span></td><td>Inside cargo tanks</td><td class="hl">Only Ex-ia (Intrinsically safe)</td></tr>
    <tr><td><strong>Zone 1</strong></td><td>Likely</td><td>Pump rooms, manifold</td><td>Ex-d, Ex-e, Ex-i, Ex-p</td></tr>
    <tr><td><strong>Zone 2</strong></td><td>Unlikely</td><td>Enclosed spaces near deck</td><td>Ex-n, Ex-d, Ex-e, Ex-i</td></tr>
  </table>
  <ul class="n-list">
    <li><strong>Ex-d (Flameproof):</strong> Enclosure contains internal explosion, cooling flame paths prevent external ignition.</li>
    <li><strong>Ex-i (Intrinsically Safe):</strong> Circuit energy (V, I) limited below ignition level via zener barriers.</li>
  </ul>
  <div class="n-h2">Tanker Bonding Sequence</div>
  <p class="n-p">Purpose: Equalise electrical potential between ship and jetty to prevent static spark.</p>
  <ol class="n-steps">
    <li><strong>Connect ship-to-jetty bonding cable FIRST.</strong></li>
    <li>Connect cargo hose (bond flanges before coupling).</li>
    <li>Transfer cargo.</li>
    <li>Disconnect hose → <strong>Remove bonding cable LAST.</strong></li>
  </ol>

  <div class="n-h1" id="t2-shaft">🔩 Shaft Earthing System</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Problem:</strong> Propeller shaft insulated from hull by bearing oil film. Stray currents (alternator, VFD) discharge through oil film → electrolytic corrosion/pitting of bearings.</div></div>
  <p class="n-p"><strong>Solution:</strong> Carbon brush assembly on propeller shaft provides direct path to hull. Shaft maintained at hull potential. ETO checks brush wear, spring pressure, and shaft-to-hull resistance (should be &lt;1Ω).</p>

  
  <!-- ═══ GAPS ADDED FROM DOCX VERIFICATION ═══ -->

  <div class="n-h1" id="t2-streaming">🔌 Streaming Current &amp; Cargo Hose IR Test</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Tanker-specific static hazard - surveyors ask this for tanker candidates.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Streaming current:</strong> When cargo fluid flows rapidly through pipes and hoses, friction between fluid and pipe wall generates static electrical charge. This charge accumulates on the hose surface. If potential difference becomes large enough, a static discharge spark can ignite vapours at the manifold. Prevention: bonding cable equalises ship and terminal potential before connecting cargo hoses.</div></div>
  <div class="n-h2">Cargo Hose IR Test (Pre-Loading Mandatory)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Mandatory test before any liquid cargo transfer:</strong> The cargo hose must have sufficient electrical continuity along its length to allow static charge to drain safely to the bonded earth - preventing charge buildup.<br>
  <strong>Conductive hose:</strong> Low resistance between metal end-fittings - allows static to drain. Standard for most tanker operations.<br>
  <strong>Non-conductive hose:</strong> High resistance - used at jetties where cathodic protection systems differ between ship and shore. Prevents current from flowing between the two systems.<br>
  Know which type your vessel uses before connecting. Test using megger between end-fittings before cargo operations commence.</div></div>

  <div class="n-h1" id="t2-ir-formula">📊 IEC Minimum IR Formula - Full Rule</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask the IEC formula for minimum acceptable IR and the 200% return-to-service rule.</strong></div></div>
  <div class="n-formula">Minimum IR (MΩ) = (Working Voltage in kV) + 1<div class="label">IEC standard rule · Example: 6.6 kV system → minimum IR = 6.6 + 1 = 7.6 MΩ</div></div>
  <table class="n-table">
    <tr><th>System</th><th>Working Voltage</th><th>IEC Min IR</th><th>200% Return-to-Service</th></tr>
    <tr><td>LV system</td><td><span class="n-val">440V (0.44 kV)</span></td><td class="hl"><span class="n-val">~1 MΩ</span></td><td class="hl"><span class="n-val">2 MΩ</span></td></tr>
    <tr><td>MV system</td><td><span class="n-val">3.3 kV</span></td><td class="hl"><span class="n-val">4.3 MΩ</span></td><td class="hl"><span class="n-val">8.6 MΩ</span></td></tr>
    <tr><td>HV system</td><td><span class="n-val">6.6 kV</span></td><td class="hl"><span class="n-val">7.6 MΩ</span></td><td class="hl"><span class="n-val">15.2 MΩ</span></td></tr>
    <tr><td>HV system</td><td><span class="n-val">11 kV</span></td><td class="hl"><span class="n-val">12 MΩ</span></td><td class="hl"><span class="n-val">24 MΩ</span></td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>200% rule:</strong> Before returning HV equipment to service after repair, measured IR must be at least TWICE the minimum acceptable value. For 440V system: min = 1 MΩ → return-to-service threshold = <span class="n-val">2 MΩ</span>. For 6.6 kV: min = 7.6 MΩ → return threshold = <span class="n-val">15.2 MΩ</span>.</div></div>

  <div class="n-h1" id="t2-sf6-full">☁️ SF6 Decomposition - Complete Products List</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>SF6 arc decomposition products - ALL toxic/corrosive. Complete list:</strong><br>
  • <strong>HF</strong> (Hydrogen fluoride) - extremely corrosive, attacks metal, glass, and biological tissue<br>
  • <strong>SF₄</strong> (Sulphur tetrafluoride) - toxic gas, reacts with moisture to form HF<br>
  • <strong>SOF₂</strong> (Thionyl fluoride) - toxic gas, reacts with water<br>
  • <strong>SO₂F₂</strong> (Sulphuryl fluoride) - toxic, persistent in confined spaces<br>
  • <strong>SO₂</strong> (Sulphur dioxide) - toxic at low concentrations, detectable by smell<br>
  After any SF6 arcing event: ventilate thoroughly, wear SCBA + chemical protective gloves, use neutralising powder (calcium hydroxide) to clean enclosure before inspection. SF6 GWP = <span class="n-val">23,500×</span> CO₂ - minimise any gas releases.</div></div>

  <div class="n-h1" id="t2-glove-rules">🧤 HV Glove - Compliance &amp; Storage Rules</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Beyond class and colour - surveyors now ask storage requirements and compliance checks.</strong></div></div>
  <ul class="n-list">
    <li><strong>Date stamp tag mandatory:</strong> Gloves must carry a physical tag showing date of last electrical dielectric test. Gloves without a current test tag = do NOT use.</li>
    <li><strong>Test frequency:</strong> Electrical dielectric test every <span class="n-val">6 months</span>. Visual inspection before EVERY use.</li>
    <li><strong>Expired or visually damaged = automatic rejection:</strong> Cuts, punctures, holes, ozone cracking, swelling = tag out of service, replace immediately. No repair allowed.</li>
    <li><strong>Storage - keep away from:</strong> (1) Oil and petroleum products - swells and degrades rubber. (2) Ozone - causes micro-fractures. (3) UV light/sunlight - UV degrades rubber. Store in original protective bag in cool dry location.</li>
    <li><strong>Inflation test before every use:</strong> Roll cuff toward fingers, trap air inside, check for deflation. Any leak = reject.</li>
    <li><strong>Outer leather protectors:</strong> Always worn over rubber gloves - protects from puncture by sharp metal edges. Leather protectors must also be inspected for cuts.</li>
  </ul>

  <div class="n-h1" id="t2-megger-special">🔍 Special Megger Voltage Rules</div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Megger Voltage</th><th>Reason</th></tr>
    <tr><td>Standard LV motors/cables (440V)</td><td class="hl"><span class="n-val">500V DC</span></td><td>Standard for LV insulation testing</td></tr>
    <tr><td>LV alternators, transformers</td><td class="hl"><span class="n-val">1000V DC</span></td><td>More thorough stress test for large windings</td></tr>
    <tr><td>HV equipment (3.3 kV)</td><td class="hl"><span class="n-val">2500V DC</span></td><td>Adequately stresses HV insulation to operating level</td></tr>
    <tr><td class="hl"><strong>6.6 kV cables specifically</strong></td><td class="hl"><span class="n-val">5000V DC</span></td><td class="hl">6.6 kV cable insulation is very thick - 2500V is only 38% of operating stress. Insufficient to reveal weak spots. Must use 5000V.</td></tr>
    <tr><td class="bad"><strong>Sensitive electronics / control cards / PCBs</strong></td><td class="bad"><span class="n-val">50–100V DC ONLY</span></td><td class="bad">Standard 500V megger instantly destroys semiconductor junctions on control boards. Use dedicated low-voltage insulation tester only.</td></tr>
  </table>

  <div class="n-h1" id="t2-vcb-timing">⏱️ VCB Timing Test - Diagnostic Interpretation</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>VCB timing test:</strong> Measures time from trip signal to full contact separation. Typical specification: <span class="n-val">40–80 ms</span> operating time for marine VCBs. Tests both opening speed and contact bounce duration.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Out-of-specification timing - diagnostic conclusions:</strong><br>
  <strong>Slow operation (&gt;specified time):</strong> Directly indicates physical mechanism wear (friction in operating linkage, dried lubrication, corroded pivot pins) OR <strong>operating spring fatigue</strong> (spring has lost pre-load - cannot release stored energy quickly enough). Springs are under high stress at every operation and fatigue over hundreds of open/close cycles.<br>
  <strong>Contact bounce (extended duration):</strong> Indicates worn contacts or weakened contact pressure spring - contacts do not seat firmly and bounce. Replace contacts or adjust spring tension.<br>
  <strong>Remedy:</strong> Lubricate mechanism per maker manual, measure spring compression against specification, replace springs if below specified pre-load. Log all timing results for trend analysis.</div></div>

<div class="n-h1" id="t2-quickrev">📊 Quick Revision - High Voltage</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Exam Phrases</th></tr>
    <tr><td>HV Advantages</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Lower current, smaller cables, less I²R loss, saves weight.</td></tr>
    <tr><td>Why VCB not ACB</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Air ionises at HV (arc too energetic). Vacuum extinguishes arc at first zero crossing.</td></tr>
    <tr><td>NER</td><td class="hl">⭐⭐⭐⭐⭐</td><td>Limits earth fault current. R = V_phase / I_fault.</td></tr>
    <tr><td>Dead Front Panel</td><td class="hl">⭐⭐⭐⭐⭐</td><td>No live parts accessible from front. Enclosed barriers.</td></tr>
    <tr><td>HV Work Procedure</td><td class="hl">⭐⭐⭐⭐⭐</td><td>PTW → Isolate → LOTO → Wait 5min → Test Dead → Earth.</td></tr>
    <tr><td>Arc Flash</td><td class="hl">⭐⭐⭐⭐</td><td>Explosive energy release &gt;20,000°C. Blast = pressure wave.</td></tr>
    <tr><td>HV Gloves</td><td class="hl">⭐⭐⭐⭐</td><td>Class 2 = Yellow (<span class="n-val">17kV</span>) for <span class="n-val">6.6kV</span> ships. Tested every 6 months.</td></tr>
    <tr><td>SF6 Gas</td><td class="hl">⭐⭐⭐⭐</td><td>Electronegative, dielectric 2.5x air. High GWP. Toxic arc byproducts.</td></tr>
    <tr><td><span class="n-val">1.1kV</span> Multiples</td><td class="hl">⭐⭐⭐⭐</td><td>Form factor = 1.11. IEC standard series. Transformer ratios.</td></tr>
    <tr><td>VCB Rack Out</td><td class="hl">⭐⭐⭐⭐</td><td>Trip first (interlock). Service → Test → Isolated.</td></tr>
    <tr><td>HV IR Test</td><td class="hl">⭐⭐⭐</td><td><span class="n-val">2500V</span>/<span class="n-val">5000V</span> megger to meaningfully stress insulation. Min IR = kV + 1 MΩ.</td></tr>
  </table>
  
  <div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="t2-hvsc-advanced">🔌 HVSC Advanced - IEC/IEEE 80005-1:2019 Specific Values</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors now ask specific IEC 80005-1 values for HVSC compatibility checks.</strong></div></div>
  <table class="n-table">
    <tr><th>Parameter</th><th>IEC/IEEE 80005-1 Requirement</th></tr>
    <tr><td>Standard voltages</td><td class="hl"><span class="n-val">6.6 kV</span> or <span class="n-val">11 kV</span> AC</td></tr>
    <tr><td>Max prospective short-circuit current</td><td class="hl">≤ <span class="n-val">25 kA RMS</span> (combined ship + shore)</td></tr>
    <tr><td>THD (Total Harmonic Distortion)</td><td class="hl">≤ <span class="n-val">5%</span> at all loads</td></tr>
    <tr><td>Single harmonic limit</td><td class="hl">≤ <span class="n-val">3%</span> for any individual harmonic</td></tr>
    <tr><td>Equipotential bonding resistance</td><td class="hl">≤ <span class="n-val">0.1 Ω</span> (ship to shore, continuously monitored)</td></tr>
    <tr><td>Safety circuit pilot loop current</td><td class="hl">Min <span class="n-val">50 mA</span></td></tr>
    <tr><td>Safety circuit breaker trip time</td><td class="hl">Max <span class="n-val">200 ms</span> after loop broken</td></tr>
    <tr><td>NER rating (updated minimum)</td><td class="hl">Min <span class="n-val">25 A for 5 seconds</span></td></tr>
  </table>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the safety circuit pilot loop in HVSC? (New question - being asked 2025-2026)</strong><br><strong>Ideal Answer:</strong> A continuous electrical monitoring circuit through the HV plug and socket. Confirms physical integrity of connection. Must maintain min <span class="n-val">50 mA</span>. If broken (plug pulled while live or fault occurs), both ship AND shore HV breakers must open automatically within max <span class="n-val">200 ms</span> - prevents catastrophic arc flash. Monitored by IEC/IEEE 80005-1 standard.</div></div>

<div class="n-h1" id="s-surveyor-qa">🗣️ Surveyor Q&amp;A (Topic 2: High Voltage)</div>
  <div class="n-crit"><div class="icon">❓</div><div class="body">
    <p><strong>Q (Surveyor Kamath): What is the difference between standard earthing and neutral earthing resistor (NER) in HV systems?</strong></p>
    <p>Kamath often asks this to check if you understand why HV systems aren't solidly earthed. Answer: LV systems (<span class="n-val">440V</span>) are typically insulated neutral (IT system) to maintain operation on first earth fault. HV systems (<span class="n-val">3.3kV</span>/<span class="n-val">6.6kV</span>) use an NER connecting the star point to earth. This limits earth fault current to a safe level (e.g., <span class="n-val">400A</span>) to prevent catastrophic arcing damage to the generator stator, while still providing enough current for the earth fault relay to detect and trip instantly.</p>
    
    <p><strong>Q (Surveyor Deswal): Detail the exact step-by-step procedure to rack out a VCB.</strong></p>
    <p>Deswal expects absolute precision on safety here. 1. Obtain Permit to Work (PTW). 2. Ensure breaker is OPEN (check indicator). 3. Discharge closing springs. 4. Isolate control power. 5. Insert racking handle and turn counter-clockwise. 6. Observe position indicator moving from 'SERVICE' to 'TEST' to 'ISOLATED'. 7. Apply physical padlock on shutters/cubicle. 8. Use approved HV tester (after proving tester is working) to confirm contacts are dead. 9. Apply circuit main earths.</p>

    <p><strong>Q (Surveyor Vishwanathan): Why do we use Vacuum Circuit Breakers (VCB) for HV instead of Air Circuit Breakers (ACB)?</strong></p>
    <p>Air has lower dielectric strength. At <span class="n-val">6.6kV</span>, an arc drawn in air during contact separation would be massive and difficult to extinguish, requiring enormous arc chutes. A vacuum provides excellent dielectric strength (no ionizable gas), extinguishing the arc quickly at the first zero-crossing of the AC current, allowing the breaker to be compact and maintenance-free.</p>
  </div></div>

</div>
</div>

</div></div>


<!-- BACK TO TOP BUTTON -->
`);

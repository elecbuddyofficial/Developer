window.loadNotes("T14", `<div class="view" id="view-notes-t14">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T14')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 14 - Bridge Equipment II</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Gas Detection · O₂ Analyser · Cargo Gauging</span>
      <span class="tag tag-purple">ECDIS · WIDAS · 2026 SOLAS</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-gas-detection')">Gas Detection Principles</button>
    <button class="anc-btn" onclick="jumpTo('s-o2-analyser')">O₂ Analyser</button>
    <button class="anc-btn" onclick="jumpTo('s-toxic-gas')">Toxic Gas Detectors</button>
    <button class="anc-btn" onclick="jumpTo('s-gas-calibration')">Gas Detector Calibration</button>
    <button class="anc-btn" onclick="jumpTo('s-cargo-gauging')">UTI &amp; Cargo Gauging</button>
    <button class="anc-btn" onclick="jumpTo('s-cargo-computer')">Cargo Computer</button>
    <button class="anc-btn" onclick="jumpTo('s-ecdis-widas')">ECDIS &amp; WIDAS</button>
    <button class="anc-btn" onclick="jumpTo('s-solas-2026')">2026 SOLAS</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gas-detection">🛢️ Gas Detection - Explosimeter vs Tankscope</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner's favourite cross-question: "Which instrument do you use to check a cargo tank before entering? Which one do you use when the tank is inerted? Why can the explosimeter fail dangerously in an inert space?"</strong> - Sanjib, Kamath, Deswal all ask this in some form.</div></div>

  <div class="n-h2">Explosimeter - Catalytic Pellistor Principle (%LEL)</div>
  <p class="n-p">The explosimeter is engineered exclusively to verify that a <em>fresh-air</em> enclosed space is below explosive boundaries before human entry. It reads <strong>0–100 % LEL</strong> (Lower Explosive Limit).</p>

  <div class="n-card" style="border-color:var(--orange)">
    <div class="card-title">How the Pellistor Works</div>
    <ol class="n-steps">
      <li>A tiny sample of atmosphere is drawn into the sensor head by an aspirator pump.</li>
      <li>Inside the sensor, two identical platinum coils are embedded in ceramic beads and wired as two arms of a <strong>Wheatstone bridge</strong>.</li>
      <li>The <strong>active bead</strong> (pellistor) is coated in a palladium/platinum catalyst. Any flammable gas burns on its surface, raising the coil temperature and therefore its <strong>electrical resistance</strong> (PTC behaviour).</li>
      <li>The <strong>reference bead</strong> is uncoated - no combustion occurs. It compensates for ambient temperature drift.</li>
      <li>The bridge imbalance is amplified and displayed as <span class="n-val">% LEL</span>. At 100 % LEL the gas concentration has reached the lower explosive boundary.</li>
    </ol>
  </div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>CRITICAL SAFETY LIMITATION - The Oxygen Deficiency Trap:</strong> The pellistor requires <em>catalytic combustion</em> to function. If O₂ falls below approximately <span class="n-val">10 %</span> (as in an inerted cargo tank), the combustion on the bead cannot sustain itself. The meter reads a <span class="n-val">FALSE ZERO (0 % LEL)</span> even in a catastrophically gas-rich atmosphere. Using an explosimeter in an inerted tank will kill people. <strong>Rule: explosimeter = fresh-air spaces only.</strong></div></div>

  <div class="n-h2">Tankscope - Non-Dispersive Infrared (NDIR) Principle (% HC)</div>
  <p class="n-p">The Tankscope is designed to check the atmosphere <em>inside</em> cargo tanks and inert-gas lines that are oxygen-depleted. It reads <strong>0–100 % hydrocarbon by volume</strong> - well above LEL. A safe tank-entry reading is below <span class="n-val">1–2 % HC</span> (i.e., well below 100 % LEL territory).</p>

  <div class="n-card" style="border-color:var(--blue)">
    <div class="card-title">How NDIR Works</div>
    <ol class="n-steps">
      <li>An infrared light source emits a broad-spectrum IR beam through a sample cell containing the gas sample.</li>
      <li>Hydrocarbon molecules (propane, butane, pentane) absorb IR energy at the <span class="n-val">3.4 μm</span> C–H bond-stretching band (characteristic of all hydrocarbons). CO₂ and N₂ in the inert gas do <em>not</em> absorb at this wavelength.</li>
      <li>A narrow bandpass optical filter in front of the detector passes only the 3.4 μm band.</li>
      <li>The <strong>more hydrocarbon</strong> in the sample, the <strong>less IR energy</strong> reaches the detector - Beer–Lambert absorption law.</li>
      <li>The reduced detector signal is converted to a <span class="n-val">% HC by volume</span> reading.</li>
    </ol>
  </div>

  <div class="n-ok"><div class="icon">✅</div><div class="body"><strong>Why NDIR is Safe in Inert Atmospheres:</strong> NDIR requires no combustion whatsoever. It works purely on infrared light absorption - oxygen level is irrelevant. A Tankscope gives accurate readings in a tank containing <span class="n-val">0 % O₂</span> and <span class="n-val">95 % HC</span>. This makes it the only correct instrument for inerted tank atmosphere checks.</div></div>

  <div class="n-h2">Explosimeter vs Tankscope - Side-by-Side Comparison</div>
  <table class="n-table">
    <tr><th>Feature</th><th>Explosimeter</th><th>Tankscope</th></tr>
    <tr><td>Sensor Technology</td><td>Pellistor catalytic bead - Wheatstone bridge</td><td>NDIR infrared absorption - 3.4 μm band</td></tr>
    <tr><td>Reading Scale</td><td class="hl">0–100 % LEL</td><td class="hl">0–100 % HC by volume</td></tr>
    <tr><td>Requires Oxygen?</td><td class="bad">YES - min ≈10 % O₂ for catalytic combustion</td><td class="ok">NO - works at 0 % O₂</td></tr>
    <tr><td>Inerted Tank Use?</td><td class="bad">FORBIDDEN - gives false zero</td><td class="ok">CORRECT instrument to use</td></tr>
    <tr><td>Pre-Entry Check (fresh air)?</td><td class="ok">YES - confirms &lt;10 % LEL safe for entry</td><td>Over-ranged / less appropriate</td></tr>
    <tr><td>Alarm Level for Entry</td><td>&lt;<span class="n-val">10 % LEL</span> (ISGOTT/SOLAS)</td><td>&lt;<span class="n-val">1 % HC vol</span> (below explosive range)</td></tr>
    <tr><td>Sensor Poison Risk</td><td class="bad">Lead, silicon, sulfur compounds poison the catalyst → reads low</td><td class="ok">Not susceptible to catalyst poisoning</td></tr>
  </table>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - "PELE plays in fresh air; NDIR dives into inert tanks":</strong> Pellistor (PELE) = fresh air only. NDIR (No Direct Ignition Required) = safe in inert / no-oxygen atmospheres.</div></div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-o2-analyser">🫧 Oxygen Analyser - Paramagnetic &amp; Electrochemical Types</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>"How does the paramagnetic oxygen analyser work? What is the magnetic-wind principle?" (Kamath, Vishwanathan, Sanjib). Know both types.</strong></div></div>

  <div class="n-h2">Why Oxygen is Special - Paramagnetic Property</div>
  <p class="n-p">Oxygen (O₂) is one of the very few gases that is strongly <strong>paramagnetic</strong> - it is attracted into a magnetic field because its two outer electrons are unpaired (paramagnetic). Nearly all other atmospheric gases (N₂, CO₂, Ar) are <strong>diamagnetic</strong> - they are weakly repelled by or unaffected by a magnetic field. This unique property of O₂ is exploited in two types of oxygen analysers.</p>

  <div class="n-h2">Type 1 - Thermomagnetic ("Magnetic Wind") Paramagnetic Analyser</div>
  <p class="n-p">This is the type commonly asked by surveyors.</p>

  <div class="n-card" style="border-color:var(--purple)">
    <div class="card-title">Magnetic-Wind (Thermomagnetic) Principle - Step by Step</div>
    <ol class="n-steps">
      <li>The sensor has <strong>two chambers</strong> connected by a horizontal tube. A <strong>strong permanent magnet</strong> creates a high-intensity magnetic field across the junction region only.</li>
      <li>Two <strong>platinum resistance wire (Pt-wire)</strong> elements are wound inside the tube - one in the magnetic field zone, one outside it. These form two arms of a <strong>Wheatstone bridge</strong>.</li>
      <li>Sample gas containing O₂ is drawn past the magnet. O₂ molecules are attracted into the high-field region and accumulate there.</li>
      <li>The Pt wire in the magnetic field heats the concentrated O₂. When O₂ is heated, it <strong>loses its paramagnetism</strong> (susceptibility decreases with temperature - Curie's Law).</li>
      <li>The heated, now-weakly-paramagnetic O₂ is expelled from the field zone by the cooler, strongly-paramagnetic O₂ still being pulled in. This creates a <strong>convective gas flow - the "magnetic wind"</strong> - even in a closed tube with no external pump pressure difference.</li>
      <li>The magnetic wind <strong>cools</strong> the Pt wire in the field region, changing its resistance and <strong>unbalancing the Wheatstone bridge</strong>. The bridge imbalance is proportional to the O₂ concentration.</li>
    </ol>
  </div>

  <div class="n-info" style="margin-top:8px"><div class="icon">ℹ️</div><div class="body"><strong>One-line exam answer:</strong> "O₂ is drawn into the magnetic field zone, heated by the Pt wire, loses paramagnetism, is expelled by cooler incoming O₂, creating a magnetic-wind convective flow that cools the wire and unbalances the Wheatstone bridge - the imbalance is proportional to O₂ concentration."</div></div>

  <div class="n-h2">Type 2 - Dumbbell (Pressure) Paramagnetic Analyser</div>
  <p class="n-p">A nitrogen-filled glass dumbbell is suspended on a taut wire in a strong non-uniform magnetic field. O₂ molecules are drawn into the strongest part of the field and physically displace the diamagnetic dumbbell. The rotation of the dumbbell is measured by an optical system - rotation angle is proportional to O₂ percentage. Highly accurate but fragile; used in laboratory and precision process applications. <strong>Range: 0–25 % O₂.</strong></p>

  <div class="n-h2">Type 3 - Electrochemical (Galvanic Cell) O₂ Sensor</div>
  <p class="n-p">A thin diffusion membrane allows O₂ to permeate into a <strong>lead-acid or gold/KOH electrochemical cell</strong>. O₂ is reduced at the cathode producing a small current proportional to O₂ partial pressure. This is the sensor type used in most portable multi-gas detectors for enclosed-space entry. <span class="n-val">Range: 0–25 % O₂</span>. Limited life - typically 1–2 years before electrolyte exhaustion. Alarm levels: <strong>low alarm at 19.5 %, high alarm at 23 %</strong>.</p>

  <div class="n-h2">Type 4 - Zirconia (High-Temperature) O₂ Sensor</div>
  <p class="n-p">A zirconia (ZrO₂) ceramic tube doped with yttria is heated to <span class="n-val">600–800 °C</span>. At this temperature, oxygen ions become mobile through the crystal lattice. If O₂ partial pressures differ between the sample gas side and a reference air side, a <strong>Nernst potential (EMF)</strong> develops across the cell walls - proportional to the log of the O₂ ratio. Used for <strong>boiler flue gas and engine exhaust O₂ measurement</strong> where temperatures are extreme. Not suitable for ambient air measurement.</p>

  <div class="n-card" style="border-color:var(--green)">
    <div class="card-title">O₂ Analyser Type Comparison</div>
    <table class="n-table">
      <tr><th>Type</th><th>Principle</th><th>Range</th><th>Application</th></tr>
      <tr><td>Thermomagnetic (Magnetic Wind)</td><td>O₂ paramagnetism → convective flow → Pt wire cooling → Wheatstone imbalance</td><td class="ok">0–25 % O₂</td><td>Fixed panel O₂ analysers, inert gas systems, enclosed space monitoring</td></tr>
      <tr><td>Dumbbell (Pressure)</td><td>O₂ displaces diamagnetic dumbbell in non-uniform field; rotation measured optically</td><td class="ok">0–25 % O₂</td><td>Laboratory, precision process</td></tr>
      <tr><td>Electrochemical (Galvanic)</td><td>O₂ reduced at cathode → small current ∝ O₂ partial pressure</td><td class="ok">0–25 % O₂</td><td>Portable multi-gas detectors, enclosed space entry</td></tr>
      <tr><td>Zirconia Cell</td><td>Nernst potential across heated ZrO₂ ceramic ∝ log(O₂ ratio)</td><td class="hl">0–21 % (or ppm range)</td><td>Boiler flue gas, diesel exhaust, high-temperature</td></tr>
    </table>
  </div>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - TYDEZ:</strong> <strong>T</strong>hermomagnetic (magnetic wind), d<strong>Y</strong>namic dumbbell, electroc<strong>h</strong>emical, <strong>Z</strong>irconia (hot exhaust). Or: "Two Pt wires + magnet = magnetic wind = thermomagnetic O₂ analyser."</div></div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-toxic-gas">☠️ Toxic Gas Detectors - H₂S and CO</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Toxic gas detectors are separate from flammability detectors. A space can be below 10 % LEL (safe for explosives) yet fatally toxic from H₂S or CO at parts-per-million levels. Both are SOLAS-required for relevant spaces.</strong></div></div>

  <div class="n-h2">H₂S (Hydrogen Sulphide) Toxic Gas Detector</div>
  <p class="n-p">H₂S is produced in crude oil cargo tanks, sewage tanks, and pump rooms. It is heavier than air (MW 34 vs air MW 29), colourless, and has a characteristic "rotten egg" odour - but smell is an unreliable indicator as it rapidly paralyses the olfactory nerve at concentrations above ~100 ppm.</p>

  <div class="n-card" style="border-color:var(--red)">
    <div class="card-title">H₂S Electrochemical Cell Sensor - Working Principle</div>
    <ol class="n-steps">
      <li>The sensor contains a thin <strong>electrochemical (amperometric) cell</strong> with three electrodes: working electrode, counter electrode, and reference electrode, all immersed in an electrolyte (typically acidic, e.g. H₂SO₄ or buffered acid).</li>
      <li>H₂S gas diffuses through a <strong>PTFE gas-permeable membrane</strong> to reach the working (sensing) electrode.</li>
      <li>At the working electrode, H₂S is <strong>oxidised</strong>: H₂S → S + 2H⁺ + 2e⁻. This electrochemical oxidation produces a small current proportional to H₂S concentration.</li>
      <li>The reference electrode maintains a stable potential baseline. The counter electrode provides the return path for the current.</li>
      <li>A measuring circuit converts the <strong>current (nA–μA range) to a ppm H₂S reading</strong>.</li>
    </ol>
  </div>

  <table class="n-table">
    <tr><th>H₂S Alarm Level</th><th>Value</th><th>Significance</th></tr>
    <tr><td>TWA (Time-Weighted Average, 8 hr)</td><td class="hl"><span class="n-val">1 ppm</span></td><td>Occupational exposure limit (OEL)</td></tr>
    <tr><td>STEL (Short-Term Exposure Limit, 15 min)</td><td class="hl"><span class="n-val">5 ppm</span></td><td>Maximum 15-minute exposure</td></tr>
    <tr><td>SOLAS Enclosed Space Alarm</td><td class="bad"><span class="n-val">10 ppm</span></td><td>Alarm level for enclosed space entry checks - as per SOLAS / enclosed space procedure</td></tr>
    <tr><td>IDLH (Immediately Dangerous to Life)</td><td class="bad"><span class="n-val">100 ppm</span></td><td>Evacuate immediately</td></tr>
    <tr><td>Fatal (short exposure)</td><td class="bad"><span class="n-val">&gt;300 ppm</span></td><td>Rapid incapacitation; &gt;1000 ppm = instant collapse</td></tr>
    <tr><td>LEL (explosive)</td><td><span class="n-val">4.3 % vol (43,000 ppm)</span></td><td>Flammability limit</td></tr>
  </table>

  <div class="n-h2">CO (Carbon Monoxide) Toxic Gas Detector</div>
  <p class="n-p">CO is produced in machinery spaces (diesel engines, boilers, incinerators), and in cargo holds when certain cargoes (coal, charcoal, wood pulp) self-oxidise. It is colourless, odourless, and slightly lighter than air. The electrochemical cell principle is identical to H₂S.</p>

  <div class="n-card" style="border-color:var(--orange)">
    <div class="card-title">CO Electrochemical Cell - Working Principle</div>
    <ol class="n-steps">
      <li>CO diffuses through the gas-permeable membrane to the working electrode.</li>
      <li>CO is oxidised at the working electrode: <strong>CO + H₂O → CO₂ + 2H⁺ + 2e⁻</strong>.</li>
      <li>The resulting current is proportional to CO concentration. The same 3-electrode amperometric cell design as H₂S - only the electrode material and electrolyte formulation are optimised for CO vs H₂S selectivity.</li>
    </ol>
  </div>

  <table class="n-table">
    <tr><th>CO Alarm Level</th><th>Value</th><th>Significance</th></tr>
    <tr><td>TWA (8 hr)</td><td class="hl"><span class="n-val">20 ppm</span></td><td>UK/IMO occupational limit</td></tr>
    <tr><td>SOLAS Enclosed Space</td><td class="bad"><span class="n-val">35 ppm</span></td><td>Alarm trigger for enclosed space entry checks</td></tr>
    <tr><td>STEL (15 min)</td><td class="hl"><span class="n-val">100 ppm</span></td><td>Max short-term</td></tr>
    <tr><td>IDLH</td><td class="bad"><span class="n-val">1200 ppm</span></td><td>Immediately dangerous to life and health</td></tr>
    <tr><td>LEL</td><td><span class="n-val">12.5 % vol</span></td><td>Flammability limit</td></tr>
  </table>

  <div class="n-h2">SO₂ (Sulphur Dioxide) - Enclosed Space Reference Values</div>
  <p class="n-p">SO₂ is produced in spaces carrying sulphur ore, sulphur cargo, or from combustion of high-sulphur fuel. Also encountered near battery charging areas (lead-acid batteries). Detectable by sharp pungent odour.</p>
  <table class="n-table">
    <tr><th>SO₂ Limit</th><th>Value</th><th>Source</th></tr>
    <tr><td>TWA (8 hr)</td><td class="bad"><span class="n-val">2 ppm</span></td><td>SOLAS enclosed space entry requirement</td></tr>
    <tr><td>STEL (15 min)</td><td class="bad"><span class="n-val">5 ppm</span></td><td>Occupational standard</td></tr>
  </table>

  <div class="n-card" style="border-color:var(--green)">
    <div class="card-title">Complete Enclosed Space Atmosphere Requirements (SOLAS)</div>
    <table class="n-table">
      <tr><th>Parameter</th><th>Safe Range / Alarm Level</th><th>Instrument Used</th></tr>
      <tr><td>O₂ (Oxygen)</td><td class="ok"><span class="n-val">19.5 – 23.5 %</span></td><td>O₂ analyser (electrochemical cell / paramagnetic)</td></tr>
      <tr><td>Flammable Gas</td><td class="ok"><span class="n-val">&lt;10 % LEL</span></td><td>Explosimeter (pellistor) - fresh air spaces only</td></tr>
      <tr><td>CO (Carbon Monoxide)</td><td class="bad"><span class="n-val">&lt;35 ppm</span></td><td>CO electrochemical detector</td></tr>
      <tr><td>H₂S (Hydrogen Sulphide)</td><td class="bad"><span class="n-val">&lt;10 ppm</span></td><td>H₂S electrochemical detector</td></tr>
      <tr><td>SO₂ (Sulphur Dioxide)</td><td class="bad"><span class="n-val">&lt;2 ppm TWA</span></td><td>SO₂ electrochemical detector</td></tr>
    </table>
  </div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gas-calibration">🔧 Portable Gas Detector Calibration - Bump Test vs Full Calibration</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-h2">Bump Test (Functional Check)</div>
  <p class="n-p">A <strong>bump test</strong> is a quick functional check - NOT a calibration. It verifies that the sensor responds to target gas, that alarms activate, and that the pump (if fitted) draws sample gas correctly. It does not verify reading accuracy.</p>
  <ul class="n-list">
    <li><strong>Procedure:</strong> Apply a known concentration of test gas (from a small disposable cylinder) briefly to the sensor inlet. Confirm: (a) sensor reading rises, (b) audible and visual alarm activates, (c) reading subsides when gas removed. Typically takes &lt;30 seconds.</li>
    <li><strong>Frequency:</strong> Before <em>each use</em> or <em>daily</em>, per most manufacturer recommendations and ISGOTT guidance for tankers.</li>
    <li><strong>Result:</strong> Pass/Fail only - not a calibration adjustment.</li>
  </ul>

  <div class="n-h2">Full Calibration (Zero + Span)</div>
  <p class="n-p">Full calibration adjusts the instrument's electronic output to match known reference gas concentrations. Required when bump test fails, after sensor replacement, after exposure to extreme conditions, or on scheduled intervals.</p>
  <ol class="n-steps">
    <li><strong>Zero (Fresh Air Zero):</strong> In a clean area known to be free of target gases (verified by reference instrument), expose the instrument to clean air. Adjust the zero pot/electronic trim until the instrument reads <span class="n-val">0 % LEL</span> (or <span class="n-val">20.9 % O₂</span> for oxygen sensor).</li>
    <li><strong>Span Calibration:</strong> Apply certified span gas from a traceable cylinder at a <strong>known concentration</strong> (e.g. 50 % LEL methane / propane mixture for explosimeter; or 2.5 % methane = 50 % LEL of 5 % LEL methane). Adjust the span pot/electronic trim until the instrument reads exactly the certified gas concentration.</li>
    <li><strong>Linearity Check:</strong> Apply a mid-range gas (25 % LEL) and verify reading without adjustment. If outside ±5 %, the sensor may be failing.</li>
    <li><strong>Document:</strong> Record date, instrument serial number, calibration gas batch/expiry, readings before/after, technician signature, next due date.</li>
  </ol>

  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Calibration Frequency (Typical):</strong> Bump test - before every confined space entry. Full calibration - every <span class="n-val">3–6 months</span> or per manufacturer's instructions, whichever is sooner. After any incident (sensor exposure to high gas concentrations). After sensor replacement (immediately).</div></div>

  <table class="n-table">
    <tr><th>Feature</th><th>Bump Test</th><th>Full Calibration</th></tr>
    <tr><td>Purpose</td><td>Verify sensor responds &amp; alarms work</td><td>Verify AND adjust reading accuracy</td></tr>
    <tr><td>Adjustments Made?</td><td class="bad">NO - Pass/Fail only</td><td class="ok">YES - Zero and Span adjusted</td></tr>
    <tr><td>Time Required</td><td class="ok">&lt;1 minute</td><td class="hl">5–15 minutes</td></tr>
    <tr><td>Frequency</td><td class="hl">Before every use / daily</td><td class="hl">Every 3–6 months or after sensor replacement</td></tr>
    <tr><td>Gas Used</td><td>Any concentration above alarm threshold</td><td>Certified traceable span gas (known ppm/% LEL)</td></tr>
    <tr><td>Documentation</td><td>Simple log entry</td><td>Full calibration certificate</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cargo-gauging">📏 UTI Devices, Intrinsic Safety &amp; Remote Cargo Gauging</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-h2">Portable UTI Dipping Tape - Three Measurements in One</div>
  <p class="n-p">A portable Ullage Temperature Interface (UTI) tape executes closed, vapour-tight tank level measurements from a single deployment through the ullage plug. It captures three parameters simultaneously:</p>
  <ul class="n-list">
    <li><strong>Ullage:</strong> Empty space volume between the tank top reference plug and the liquid surface. Ullage = Total Tank Height − Liquid Level. Read via graduated stainless steel tape calibrated in metres and millimetres.</li>
    <li><strong>Temperature:</strong> Captured via an internal thermistor probe to adjust volume calculations to the normalised baseline of <span class="n-val">15 °C</span> for custody transfer billing. Used with tank calibration tables (Trim/List correction).</li>
    <li><strong>Interface:</strong> Pinpoints the exact boundary layer between oil cargo and free water at the tank bottom. The probe houses a high-sensitivity <strong>conductivity sensor</strong> - output changes instantly when transitioning from non-conductive hydrocarbons to conductive water layer.</li>
  </ul>
  <p class="n-p"><strong>Ex ia Zone 0 Intrinsic Safety Parameters:</strong> Because the probe drops into a Category Zone 0 explosive atmosphere, it must be certified intrinsically safe. Circuit power is restricted to a <span class="n-val">6–9 V DC</span> battery supply with inline zener barriers. Open-circuit voltage must remain <strong>below 25 V</strong> and short-circuit current restricted <strong>below 25 mA</strong>. This guarantees no fault condition can produce sufficient thermal energy to ignite the atmosphere.</p>

  <div class="n-h2">Remote Cargo Level Gauging Systems</div>
  <table class="n-table">
    <tr><th>Gauging Type</th><th>Operating Physics</th><th>Accuracy</th><th>Application</th></tr>
    <tr><td><strong>Servo Float</strong></td><td>Motorized servo drives a small displacer float to track the fluid interface. Encoder counts tape payout for position.</td><td class="ok">±1 mm</td><td>Main cargo tanks, custody transfer grade accuracy</td></tr>
    <tr><td><strong>FMCW Radar</strong></td><td>Frequency Modulated Continuous Wave microwave beam directed downward. Frequency difference between transmitted and reflected signal gives time-of-flight → distance.</td><td class="ok">±1–3 mm (non-contact)</td><td>Crude oil, chemical, LPG pressure tanks (no moving parts)</td></tr>
    <tr><td><strong>Hydrostatic DP</strong></td><td>Measures differential pressure between tank bottom and upper vapour seal. DP = ρ·g·h → height.</td><td>±10–20 mm</td><td>Fuel oil settling, ballast, brine tanks</td></tr>
    <tr><td><strong>Capacitance Probe</strong></td><td>Vertical rod arrays evaluate shifts in dielectric capacitance as fluid rises around the rod.</td><td>±5–10 mm</td><td>Engine bilges, overflow alarms, sludge tanks</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cargo-computer">💻 Cargo Computer / Loading Instrument</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner Note: The ETO is expected to know basic loading instrument operation, class approval requirements, and what it calculates - particularly shear force and bending moment. ETOs on container vessels are responsible for maintaining and verifying the approved loading computer.</strong></div></div>

  <div class="n-h2">Purpose and Class Approval</div>
  <p class="n-p">A cargo computer (also called a loading instrument, loading calculator, or stability computer) is an approved software system that calculates the vessel's stability and structural loading condition for any proposed loading plan. <strong>Class approval:</strong> The loading instrument is type-approved by the Classification Society (DNV, Lloyd's, Bureau Veritas, Class NK, IRS). The vessel must carry a valid <strong>Type Approval Certificate</strong> and an approved method of operation. An independent manual calculation method (trim and stability booklet) must also be available as backup.</p>

  <div class="n-h2">What the Cargo Computer Calculates</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title">Stability Outputs</div>
      <ul class="n-list">
        <li><strong>Displacement (Δ)</strong> - total vessel weight in tonnes</li>
        <li><strong>KG (centre of gravity height)</strong> - from keel</li>
        <li><strong>GM (metacentric height)</strong> - initial stability indicator. GM must be positive and meet class minimum.</li>
        <li><strong>GZ curve</strong> - static stability arm at various heel angles. Must meet IMO A.749 criteria: area under GZ, maximum GZ, angle of max GZ.</li>
        <li><strong>Draft (F/A/Mean)</strong>, <strong>Trim</strong>, <strong>List</strong></li>
        <li><strong>Freeboard</strong> - must not exceed Load Line marks</li>
        <li><strong>Free Surface Effect</strong> - reduces effective GM when slack tanks are present</li>
      </ul>
    </div>
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title">Structural Outputs</div>
      <ul class="n-list">
        <li><strong>Shear Force (SF)</strong> - vertical force (kN or tonnes) acting at each cross-section of the hull. Caused by uneven distribution of weight and buoyancy along the ship's length.</li>
        <li><strong>Bending Moment (BM)</strong> - the bending stress (kN·m or tonne·m) applied to the hull girder at each cross-section. Sagging (belly down, arch up) or Hogging (belly up, arch down).</li>
        <li>Both SF and BM are compared to <strong>class-approved maximum permissible limits</strong>. Exceeding limits can cause permanent hull deformation or fracture.</li>
        <li><strong>Torsional Moment</strong> (container ships) - twist force from asymmetric loading of large deck openings</li>
      </ul>
    </div>
  </div>

  <div class="n-h2">Shear Force and Bending Moment - ETO Must Know</div>
  <div class="n-card" style="border-color:var(--purple)">
    <div class="card-title">Shear Force &amp; Bending Moment - Concept</div>
    <ul class="n-list">
      <li><strong>Shear Force:</strong> Imagine the ship cut at any cross-section. The net vertical upward or downward force on one side of the cut is the shear force at that section. If the hold cargo is concentrated amidships with empty ends, the ends try to "droop" - this loads the mid-section in shear.</li>
      <li><strong>Bending Moment:</strong> The integral of shear force along the ship's length. A ship with weight concentrated amidships and buoyancy distributed along the length will <strong>hog</strong> (ends droop). A ship with weight at ends and buoyancy amidships will <strong>sag</strong> (middle droops).</li>
      <li><strong>Permissible limits:</strong> Class provides maximum SF and BM curves for the loaded departure, loaded arrival, and ballast conditions. The loading computer plots actual SF/BM against these limits and warns if exceeded (red zone).</li>
      <li><strong>ETO role:</strong> Verify the loading computer is operational before departure. Run the planned loading sequence through the system. Check all stability and structural parameters are within limits. Print and sign the stability calculation for the Master.</li>
    </ul>
  </div>

  <div class="n-h2">Loading Computer - Typical Operating Procedure</div>
  <ol class="n-steps">
    <li>Enter vessel lightship data (usually pre-loaded and locked by class).</li>
    <li>Input tank soundings / ullages for all cargo, ballast, fuel, fresh water, and consumable tanks. The computer calculates each tank's weight, centre, and free surface moment.</li>
    <li>Input cargo weights and positions (bay/row/tier for containers, hold numbers for bulk).</li>
    <li>The system calculates stability (KG, GM, GZ curve) and structural loading (SF, BM at each frame station). Results displayed with GREEN (within limits) / AMBER (near limit) / RED (exceeded) indicators.</li>
    <li>If any parameter is outside limits, redistribute cargo/ballast until all parameters are within approved range.</li>
    <li>Print final stability certificate. Master signs. Retained on board for port state inspection.</li>
  </ol>

  <div class="n-ok"><div class="icon">🟢</div><div class="body"><strong>Memory Aid - "SDGBFT":</strong> <strong>S</strong>hear force, <strong>D</strong>raft, <strong>G</strong>M, <strong>B</strong>ending moment, <strong>F</strong>reeboard, <strong>T</strong>rim - the six key loading computer outputs the ETO must verify before departure.</div></div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ecdis-widas">🗺️ ECDIS, WIDAS &amp; Emergency Steering</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS mandated electronic chart system and bulk carrier water-ingress sensor diagnostics. ECDIS chart types and WIDAS test procedures are standard oral questions.</strong></div></div>

  <div class="n-h2">ECDIS - ENC Vector Charts vs RNC Raster Charts</div>
  <ul class="n-list">
    <li><strong>ENC (Electronic Navigational Chart):</strong> The official approved vector chart standard conforming to <strong>IHO S-57 (data standard) and IHO S-52 (presentation standard)</strong> guidelines. Chart data is stored as intelligent discrete objects with specific attributes (exact depth contours, light characteristics, hazard codes, buoy IDs). The ECDIS processor can execute intelligent background queries - it automatically fires anti-grounding alarms when the ship's projected track crosses the <strong>safety contour depth</strong>. ENCs require <strong>weekly security-encrypted updates</strong> via VSAT, USB, or AVCS (Admiralty Vector Chart Service). <strong>SOLAS V/19</strong> mandates ECDIS with ENCs on ships ≥500 GT from 2012 (retrofit schedule by ship type).</li>
    <li><strong>RNC (Raster Navigational Chart):</strong> A simple digital scan of a traditional paper nautical chart at fixed resolution. Contains zero underlying object intelligence - cannot generate automated anti-grounding alarms independently. Using RNCs with ECDIS requires maintaining a <strong>full portfolio of up-to-date paper charts</strong> as backup. RNCs are progressively being phased out by hydrographic offices.</li>
  </ul>

  <table class="n-table">
    <tr><th>Feature</th><th>ENC (Vector)</th><th>RNC (Raster)</th></tr>
    <tr><td>Data Format</td><td class="ok">Intelligent object-based (IHO S-57)</td><td class="bad">Bitmap image scan</td></tr>
    <tr><td>Anti-Grounding Alarms</td><td class="ok">Automatic (safety contour check)</td><td class="bad">NOT automatic - manual only</td></tr>
    <tr><td>Scale Change</td><td class="ok">Seamless (database scales)</td><td class="bad">Pixelation and loss of detail</td></tr>
    <tr><td>Object Query</td><td class="ok">Can query depths, lights, hazards</td><td class="bad">Cannot query - image only</td></tr>
    <tr><td>Updates</td><td class="hl">Weekly via AVCS/VSAT/USB</td><td class="hl">Periodic edition replacement</td></tr>
    <tr><td>Paper Chart Backup Required?</td><td class="ok">No - ENC is official primary</td><td class="bad">Yes - full paper portfolio mandatory</td></tr>
    <tr><td>SOLAS Acceptability</td><td class="ok">Primary SOLAS-compliant system</td><td class="hl">Accepted only with paper backup</td></tr>
  </table>

  <div class="n-h2">ECDIS Mandatory Alarms (ETO Awareness)</div>
  <ul class="n-list">
    <li><strong>Anti-Grounding / Safety Contour Alarm:</strong> Fires when the vessel's position or projected track enters water shallower than the user-set safety contour (minimum depth). Most critical alarm.</li>
    <li><strong>System Test Alarm:</strong> Alerts if ECDIS loses GPS input, sensor input (gyro, log), or chart database integrity.</li>
    <li><strong>Chart Update Overdue Alarm:</strong> If ENC cells have not been updated within the permitted interval, ECDIS will flag chart cells as out-of-date.</li>
    <li><strong>Cross-Track Distance Alarm:</strong> XTD alarm fires if the vessel deviates beyond a set corridor from the planned route.</li>
    <li><strong>ETA / Waypoint Alarm:</strong> Fires on approach to each waypoint in the planned route.</li>
  </ul>

  <div class="n-h2">Water Ingress Detection and Alarm System (WIDAS - SOLAS XII/12)</div>
  <p class="n-p">All bulk carriers ≥150 m in length must be fitted with a WIDAS to prevent catastrophic structural failures from hidden cargo space flooding. Sensors are installed inside each cargo hold, ballast tank (fore and aft peaks), cofferdams, and bilge well.</p>
  <ul class="n-list">
    <li><strong>Mechanical Float Switches:</strong> Float inside a slotted steel shroud rises with rising fluid levels to actuate a magnetic microswitch. No sensor-side excitation power required, but floats can jam if clogged with grain dust or cargo scale residue. Require quarterly manual test by lifting the float.</li>
    <li><strong>Conductivity Probes:</strong> Two exposed stainless steel electrodes separated by an air gap. When rising water bridges the gap, current flows to activate the alarm circuit. Resists fouling - ideal for sludgy bilge wells. Tested by shorting the probe terminals with a wet cloth or test shunt.</li>
  </ul>
  <p class="n-p">The master bridge panel monitors loop integrity in three states: <strong class="ok">Normal (Green)</strong> = no water; <strong class="bad">Alarm (Red)</strong> = water ingress detected; <strong class="hl">Fault (Yellow)</strong> = broken wire or open circuit. Data interfaces with VDR for permanent record. ETOs must perform <strong>quarterly field tests</strong> by manually activating each sensor and verifying bridge panel relay response. Test record must be kept in the SMS logbook.</p>

  <div class="n-h2">Emergency Steering - Telemotor Failure Protocol</div>
  <ol class="n-steps">
    <li>Alert bridge immediately - OOW reduces main engine load and broadcasts navigational warning per COLREG Rule 18.</li>
    <li>Dispatch engineer to aft steering gear flat to initiate emergency local manual control.</li>
    <li><strong>Isolate the Telemotor Link:</strong> Turn local changeover switch from Remote/Bridge to <strong>Local Manual Control</strong>. This completely disconnects the defective bridge telemotor signal loop from the steering pumps.</li>
    <li>Establish communication between bridge and steering gear room via sound-powered telephone or handheld VHF (mandatory under SOLAS IV - dedicated circuit).</li>
    <li>Bridge watch officer calls out rudder degrees verbally; steering room operator manually actuates pump solenoids or local hydraulic levers. If failure is due to low telemotor oil, top up the closed-loop circuit reservoir using specified hydraulic fluid grade.</li>
  </ol>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-solas-2026">🚢 2026 SOLAS Amendments - Electronic Inclinometers &amp; Container Loss</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>STATUTORY FORCE EFFECTIVE 1 JANUARY 2026. Non-compliance compromises the vessel's Safety Construction Certificate and triggers PSC detention. All DG Shipping oral exams from 2026 will include at least one question on these amendments.</strong></div></div>

  <div class="n-h2">Mandatory Electronic Inclinometers (SOLAS V Amendment)</div>
  <p class="n-p">To mitigate severe container loss accidents caused by parametric rolling, <strong>all containerships and bulk carriers ≥3,000 GT must carry an approved electronic inclinometer system</strong>. Parametric rolling occurs when the wave encounter frequency aligns with the hull's natural roll period, triggering sudden extreme rolling angles (20–30°+) that rip apart deck lashing gear and cause container loss overboard.</p>
  <ul class="n-list">
    <li><strong>Conning Tower Display:</strong> Real-time illuminated roll angle display must be visible to the OOW at all times. Must be wired to UPS for data survival during switchboard disturbances.</li>
    <li><strong>Precision Resolution:</strong> Must measure roll metrics with <span class="n-val">±0.5° or better</span>.</li>
    <li><strong>VDR Integration:</strong> The inclinometer's digital data stream interfaces directly with the VDR for unalterable post-incident history. Programmable alarms trigger on bridge if hull exceeds safe stability roll thresholds. ETO calibrates the sensor at even-keel in calm harbour before departure.</li>
  </ul>

  <div class="n-h2">Mandatory Lost Container Reporting and ETO VDR Freeze Mandate</div>
  <p class="n-p">Also entering into force <strong>1 January 2026</strong> is a SOLAS V and MARPOL Protocol I amendment regarding containers lost overboard. The vessel must immediately transmit a detailed hazard report to the nearest coastal state MRCC containing: exact number of lost containers, last known GPS coordinates, timestamp, and whether IMDG dangerous goods are involved.</p>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Critical ETO Emergency Action - VDR Freeze:</strong> In a container loss or heavy rolling incident, the ETO must immediately <strong>activate the VDR data preservation save function</strong>. Standard VDR capsules run a continuous loop that can overwrite after <span class="n-val">48 hours</span>. Activating the preservation lock freezes the last 48 hours of radar sweeps, bridge audio, and inclinometer rolling data in a secure non-overwritable partition. Failure to lock the data represents a serious statutory violation - data may be unrecoverable for the incident investigation.</div></div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 14</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why can't you use an explosimeter in an inerted cargo tank? What should you use instead? (Sanjib, Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> An explosimeter uses a pellistor - a catalytic bead that relies on actual combustion of the gas sample. Combustion requires oxygen. In an inerted tank (O₂ below ~10 %), the combustion fails. The bridge circuit remains balanced - the meter reads <span class="n-val">0 % LEL even in a gas-rich atmosphere</span>. This is a life-threatening false zero. For inerted tank atmosphere verification, the <strong>Tankscope (NDIR)</strong> must be used. It uses infrared absorption at 3.4 μm to measure hydrocarbon concentration without any combustion - oxygen level is irrelevant. It functions accurately at 0 % O₂.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How does the paramagnetic oxygen analyser work? (Kamath, Vishwanathan, Sanjib)</strong><br><strong>Ideal Answer (Thermomagnetic / Magnetic-Wind type):</strong> Oxygen is one of the few strongly paramagnetic gases. The sensor has two chambers with a horizontal connecting tube and a strong permanent magnet across the junction. Two platinum resistance wires are wound in the tube - one in the field zone, one outside. O₂ is drawn into the high-field region. The Pt wire heats the O₂. When heated, O₂ loses its paramagnetism (Curie's Law). This heated, weakly-paramagnetic O₂ is expelled by cooler, strongly-paramagnetic O₂ being drawn in. This creates a <strong>convective "magnetic wind"</strong> inside the tube. The magnetic wind cools the Pt wire, changing its resistance and <strong>unbalancing the Wheatstone bridge</strong>. The imbalance is proportional to O₂ concentration. This principle works without any pump or moving parts in the detection zone.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the atmosphere requirements before entering an enclosed space? (All surveyors)</strong><br><strong>Ideal Answer:</strong> Four parameters must be checked and recorded: (1) <strong>O₂: 19.5–23.5 %</strong> - below 19.5 % = oxygen deficient; above 23.5 % = enriched (flammability risk); (2) <strong>Flammable gas: &lt;10 % LEL</strong> - below LEL for safe entry; (3) <strong>CO: &lt;35 ppm TWA</strong>; (4) <strong>H₂S: &lt;10 ppm</strong>. Also SO₂ where applicable (&lt;2 ppm TWA). All four must be confirmed before anyone enters. The atmosphere must be re-checked if work is interrupted or a worker exits and re-enters. A responsible person remains at the entrance.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the difference between a bump test and a calibration? When do you do each? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> A <strong>bump test</strong> is a functional check - you briefly expose the instrument to target gas above the alarm threshold and confirm the alarm fires. No adjustment is made. Done <strong>before every use</strong>. A <strong>full calibration</strong> involves zeroing the instrument in clean air and then applying certified span gas at a known concentration, adjusting the span to match. It verifies AND corrects accuracy. Done every <span class="n-val">3–6 months</span>, after sensor replacement, or whenever a bump test fails. All calibrations must be documented with traceable certificates.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Thermocouple vs RTD - difference, working, applications. What does PT100 mean? (All surveyors)</strong><br><strong>Ideal Answer:</strong> Thermocouple - Seebeck Effect: two dissimilar metals (Type K: Chromel-Alumel) at the measuring junction generate EMF proportional to temperature difference. Self-powered, range up to <span class="n-val">1350 °C</span>. Used for exhaust gas and boiler combustion. RTD - pure metal resistance increases linearly with temperature (PTC behaviour). PT100 = Platinum sensing element with <span class="n-val">100 Ω at 0 °C</span>, increases <span class="n-val">0.385 Ω/°C</span>. Needs excitation current, 3-wire connection to compensate lead resistance. Range <span class="n-val">−200 to +850 °C</span>. Used for bearing and cooling water temperatures - more accurate than thermocouples at low-medium temperatures.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you calibrate a pressure transmitter / DP cell? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Isolate and bleed the process pressure connection. Apply zero pressure (vent to atmosphere) → adjust ZERO pot until output reads exactly <span class="n-val">4.000 mA</span>. Apply full-scale calibrated reference pressure (dead-weight tester or pressure calibrator) → adjust SPAN pot until output reads exactly <span class="n-val">20.000 mA</span>. Verify linearity at <span class="n-val">25 %, 50 %, 75 %</span> of range without further adjustment. Record date, engineer name, calibration standard used, readings before and after, next calibration due date.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the cargo computer / loading instrument? What does it calculate? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> The loading instrument is a class-approved software system that calculates the vessel's stability and structural loading for any proposed loading condition. It calculates: <strong>Stability</strong> - KG, GM, GZ curve (must meet IMO A.749 criteria), draft, trim, list, freeboard, free-surface correction. <strong>Structural</strong> - Shear Force and Bending Moment at each hull cross-section, compared against class-approved maximum permissible limits. Shear Force is the net vertical force at a cut section; Bending Moment is the integral along the length - sagging or hogging. Red alert if SF or BM limits are exceeded. ETO verifies the instrument is operational before departure and prints the signed stability calculation for the Master.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Echo sounder - working principle and piezoelectric effect? (Vishwanathan, Sanjib)</strong><br><strong>Ideal Answer:</strong> Measures water depth by transmitting a vertical ultrasonic pulse downward and timing the echo return. Depth = <span class="n-val">1500 × t / 2 = 750 × t</span> metres (t in seconds, using seawater speed of sound ≈ 1500 m/s). The transducer exploits the piezoelectric effect: <strong>Converse (transmit)</strong> - voltage applied across PZT crystal causes mechanical deformation → sound pulse. <strong>Direct (receive)</strong> - returning echo pressure deforms the same crystal → generates voltage detected by receiver. The same PZT crystal performs both functions. Frequencies: <span class="n-val">30–50 kHz</span> for shallow water (better resolution), <span class="n-val">3–12 kHz</span> for deep water (better penetration).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is VDR, its 12 inputs, and SOLAS requirement? (All surveyors)</strong><br><strong>Ideal Answer:</strong> The Voyage Data Recorder records bridge data for accident investigation. SOLAS V/20 mandates VDR on cargo ships <span class="n-val">&gt;3000 GT</span>. 12 minimum data inputs: date/time UTC, GPS position, speed through water (STW), speed over ground (SOG), gyro heading, bridge audio (microphones), VHF radio communications, RADAR image overlay, AIS targets, ECDIS chart state, rudder order and response, engine telegraph order and response. Data stored in an orange float-free capsule - withstands <span class="n-val">260 °C for 10 hours</span> (fire test) and <span class="n-val">6000 m</span> depth (pressure test). Annual performance test required by class or accredited organisation. In any incident, ETO must immediately activate the <strong>VDR preservation save function</strong> to prevent loop overwrite.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Gyrocompass - working principle and ETO maintenance? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> Indicates True North using <strong>gyroscopic rigidity in space</strong> and controlled <strong>precession</strong>. A high-speed spinning rotor maintains its axis orientation in space. Earth's gravity (via a pendulous vane) and Earth's rotation cause the spin axis to precess continuously toward the True North meridian - this is the fundamental settling mechanism. ETO maintenance: ensure <strong>uninterrupted UPS power</strong> at all times (power loss requires <span class="n-val">2–6 hours</span> for the gyro to resettle on True North - never cut gyro power without notifying the bridge); check oil levels in the gimballed bowl; clean and inspect slip rings; verify motor bearing temperature; confirm alignment of all ship's repeaters and autopilot heading input against the master compass. The gyro has three freedoms of movement: <strong>spin (about its own axis)</strong>, <strong>tilt (about the horizontal axis)</strong>, and <strong>drift (about the vertical axis)</strong>.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Autopilot - working principle? How does it control the ship? (Kamath, Vishwanathan, Deswal)</strong><br><strong>Ideal Answer:</strong> Autopilot automatically maintains a preset course by using the gyrocompass heading as the feedback reference signal. The preset course is compared to the actual gyro heading - any deviation generates an <strong>error signal</strong>. This error is fed to a <strong>PID controller</strong> that calculates the required rudder angle. A command signal is sent to the steering gear electro-hydraulic unit, which drives the rudder to correct the deviation. When the heading is restored, the error reduces to zero and the rudder returns toward amidships.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is PID action in autopilot? What does integral action eliminate? (All surveyors)</strong><br><strong>Ideal Answer:</strong> PID = Proportional–Integral–Derivative. Each term has a distinct steering function:<br>
  <strong>P – Proportional:</strong> Rudder angle applied in direct proportion to the course error. Large error → large rudder; small error → small rudder. Provides the primary corrective response but cannot eliminate persistent offset alone.<br>
  <strong>I – Integral:</strong> Accumulates the error over time and applies additional rudder to eliminate any <span class="n-val">steady-state offset (weather helm)</span>. If a beam wind persistently pushes the ship 1° off course, the integral term builds up until it holds the course against the wind without manual correction.<br>
  <strong>D – Derivative:</strong> Acts on the <em>rate of change</em> of the error. Applies <strong>counter-rudder</strong> (opposite helm) as the ship swings back toward course, preventing overshoot and reducing yaw oscillation. Sometimes labelled the <span class="n-val">Weather</span> or <span class="n-val">Rudder Limit</span> control on older autopilots.</div></div>

  <div class="n-card n-info">
    <div class="n-h2">Autopilot PID Control Loop Summary</div>
    <table class="n-table">
      <tr><th>Stage</th><th>Signal / Action</th><th>Purpose</th></tr>
      <tr><td>Gyrocompass</td><td>Actual heading → feedback input</td><td>Heading feedback source (True North reference)</td></tr>
      <tr><td>Error Signal</td><td>Preset course − Actual heading</td><td>Course deviation magnitude</td></tr>
      <tr><td>P (Proportional)</td><td>Rudder ∝ error</td><td>Primary corrective rudder angle</td></tr>
      <tr><td>I (Integral)</td><td>Accumulated error over time</td><td>Eliminates weather helm / steady-state offset</td></tr>
      <tr><td>D (Derivative)</td><td>Rate of change of error</td><td>Counter-rudder - prevents overshoot / yaw oscillation</td></tr>
      <tr><td>Steering Gear</td><td>Electrohydraulic ram moves rudder</td><td>Physical course correction execution</td></tr>
    </table>
  </div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What are the 2026 SOLAS amendments relevant to the ETO? (Kamath, Sanjib - 2026 exam season critical)</strong><br><strong>Ideal Answer:</strong> Two major amendments effective <strong>1 January 2026</strong>:<br>
  (1) <strong>Electronic Inclinometers - SOLAS V:</strong> All containerships and bulk carriers ≥3,000 GT must carry an approved electronic inclinometer (roll sensor). Must display real-time roll angle at the conning position, be accurate to <span class="n-val">±0.5°</span>, connected to UPS, and feed data to the VDR. Purpose: detect and record parametric rolling that causes container loss.<br>
  (2) <strong>Lost Container Reporting - SOLAS V / MARPOL Protocol I:</strong> Any container(s) lost overboard must be immediately reported to the nearest MRCC with exact GPS position, number of containers, timestamp, and IMDG dangerous goods information. ETO action: immediately activate the <strong>VDR preservation lock</strong> to freeze the last 48 hours of data (radar, bridge audio, inclinometer) in a non-overwritable partition.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>ECDIS - what is the difference between ENC and RNC? What alarms does ECDIS have? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> ENC (Electronic Navigational Chart) is a vector chart conforming to IHO S-57 - an intelligent object database that enables automatic anti-grounding alarms when the safety contour is breached. Updated weekly. No paper backup required. RNC (Raster Navigational Chart) is a scanned bitmap of a paper chart - no object intelligence, no automatic alarms. Full paper backup portfolio mandatory if using RNCs. ECDIS alarms: anti-grounding (safety contour breach), cross-track distance, waypoint approach, chart update overdue, system sensor loss (GPS/gyro). SOLAS V/19 mandates ECDIS on ships ≥500 GT.</div></div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 14</div>
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Explosimeter vs Tankscope</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>Pellistor = combustion = needs O₂ → false zero in inert tank | NDIR = 3.4 μm IR absorption = no O₂ needed | Explosimeter: fresh air only; Tankscope: inert/rich atmosphere</td></tr>
    <tr><td>O₂ Analyser - Paramagnetic (Magnetic Wind)</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan, Sanjib</td><td>O₂ drawn into magnetic field → heated → loses paramagnetism → expelled by cooler O₂ → magnetic wind cools Pt wire → Wheatstone imbalance ∝ O₂ %</td></tr>
    <tr><td>Enclosed Space Atmosphere Limits</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>O₂: <span class="n-val">19.5–23.5 %</span> | LEL: <span class="n-val">&lt;10 %</span> | CO: <span class="n-val">&lt;35 ppm</span> | H₂S: <span class="n-val">&lt;10 ppm</span> | SO₂: <span class="n-val">&lt;2 ppm TWA</span></td></tr>
    <tr><td>Bump Test vs Calibration</td><td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td><td>Bump = before every use, alarm check only, no adjustment | Calibration = zero + span with certified gas, every 3–6 months, documented certificate</td></tr>
    <tr><td>H₂S Sensor</td><td class="hl">⭐⭐⭐⭐ Sanjib, Deswal</td><td>Electrochemical cell | H₂S oxidised at working electrode → current ∝ ppm | Alarm: <span class="n-val">10 ppm</span> SOLAS | IDLH: <span class="n-val">100 ppm</span></td></tr>
    <tr><td>CO Sensor</td><td class="hl">⭐⭐⭐⭐ All surveyors</td><td>Electrochemical cell | CO + H₂O → CO₂ + 2e⁻ at electrode | Alarm: <span class="n-val">35 ppm</span> TWA</td></tr>
    <tr><td>Cargo Computer</td><td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td><td>Class-approved | Calculates: KG, GM, GZ curve (stability) + Shear Force + Bending Moment (structural) | Red alert if SF/BM limits exceeded | ETO verifies before departure</td></tr>
    <tr><td>RTD vs Thermocouple</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>PT100 = <span class="n-val">100 Ω at 0 °C</span>, <span class="n-val">0.385 Ω/°C</span>, bearings | TC = Seebeck, up to <span class="n-val">1350 °C</span>, exhaust</td></tr>
    <tr><td>DP cell calibration</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>Zero → <span class="n-val">4 mA</span> | Full scale → <span class="n-val">20 mA</span> | Verify <span class="n-val">25/50/75 %</span> linearity | Document</td></tr>
    <tr><td>VDR - 12 inputs + SOLAS</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>SOLAS V/20 | &gt;<span class="n-val">3000 GT</span> | 12 inputs | Orange capsule: <span class="n-val">260 °C / 6000 m</span> | Freeze VDR after incident</td></tr>
    <tr><td>Echo sounder</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Sanjib</td><td>Depth = <span class="n-val">750 × t</span> | Piezoelectric (converse = transmit, direct = receive) | <span class="n-val">30–50 kHz</span> shallow</td></tr>
    <tr><td>Gyrocompass + 3 Freedoms</td><td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td><td>Rigidity + precession → True North | 3 freedoms: spin / tilt / drift | <span class="n-val">2–6 hrs</span> settle | Never cut power</td></tr>
    <tr><td>ECDIS ENC vs RNC</td><td class="hl">⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>ENC = IHO S-57 vector = auto anti-grounding alarm | RNC = raster scan = no auto alarm = paper backup required | Weekly ENC updates</td></tr>
    <tr><td>WIDAS</td><td class="hl">⭐⭐⭐ All surveyors</td><td>SOLAS XII/12 | Bulk carriers ≥150 m | Float switches + conductivity probes | 3 states: Green/Red/Yellow | Quarterly test + log</td></tr>
    <tr><td>2026 SOLAS Amendments</td><td class="hl">⭐⭐⭐⭐⭐ 2026 season all surveyors</td><td>1 Jan 2026 | Electronic inclinometer ≥3000 GT: <span class="n-val">±0.5°</span>, UPS, VDR link | Lost container: report to MRCC + freeze VDR immediately</td></tr>
    <tr><td>PID Autopilot</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>P = rudder ∝ error | I = eliminates steady-state weather helm | D = counter-rudder, prevents overshoot | Gyro = heading reference</td></tr>
    <tr><td>UTI Tape / IS parameters</td><td class="hl">⭐⭐⭐ Tanker context</td><td>Ullage + Temperature + Interface | Ex ia Zone 0: <span class="n-val">&lt;25 V, &lt;25 mA</span> | 6–9 V DC battery | Zener barriers</td></tr>
    <tr><td>Thermistor</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>NTC semiconductor | <span class="n-val">3–5 %/°C</span> decrease | Motor winding protection</td></tr>
  </table>

    </div>
</div>
</div>
`);
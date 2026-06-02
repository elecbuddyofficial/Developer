import os

t05_html = r'''window.loadNotes("T05", `<div class="view" id="view-notes-t05">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 05 — Transformers</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-principle')">Principle & EMF</button>
    <button class="anc-btn" onclick="jumpTo('s-losses')">Iron & Copper Losses</button>
    <button class="anc-btn" onclick="jumpTo('s-noload')">No-Load vs Load</button>
    <button class="anc-btn" onclick="jumpTo('s-auto')">Auto vs Double</button>
    <button class="anc-btn" onclick="jumpTo('s-ctpt')">CT & PT</button>
    <button class="anc-btn" onclick="jumpTo('s-buchholz')">Buchholz Relay</button>
    <button class="anc-btn" onclick="jumpTo('s-oil')">Oil Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-parallel')">Cooling & Parallel</button>
    <button class="anc-btn" onclick="jumpTo('s-flyback')">Flyback & Tests</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-principle">1. TRANSFORMER — WORKING PRINCIPLE & EMF EQUATION</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask this.</strong> Know the exact EMF equation and understand why a transformer cannot work on DC.</div></div>
  
  <div class="n-h2">Working Principle</div>
  <p class="n-p"><strong>Mutual Electromagnetic Induction:</strong> When alternating current in one coil (primary) creates a changing magnetic flux, this flux induces an EMF in a second coil (secondary) sharing the same core.</p>
  <ul class="n-list">
    <li><strong>Two windings:</strong> Primary and secondary, electrically isolated.</li>
    <li><strong>Common magnetic core:</strong> Laminated silicon steel providing a low-reluctance flux path.</li>
    <li><strong>AC ONLY:</strong> DC provides a constant flux (no change). By Faraday's Law, without changing flux, there is NO induction.</li>
  </ul>
  
  <div class="n-h2">Transformation Ratio</div>
  <p class="n-p"><strong>V1 / V2 = N1 / N2 = a</strong> (Turns ratio = Voltage ratio).</p>
  <p class="n-p"><strong>I1 / I2 = N2 / N1 = 1 / a</strong> (Current ratio is INVERSE of voltage ratio).</p>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Step-up transformer:</strong> N2 > N1 → V2 > V1. Because energy is conserved (V1 × I1 ≈ V2 × I2), stepping UP the voltage steps DOWN the current.</div></div>

  <div class="n-h2">EMF Equation</div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">E = 4.44 × f × N × Φ_max</div>
      <div class="card-desc"><strong>E</strong> = RMS induced EMF<br><strong>f</strong> = frequency (Hz)<br><strong>N</strong> = turns<br><strong>Φ_max</strong> = max magnetic flux</div>
    </div>
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">V / f Ratio Limit</div>
      <div class="card-desc">If frequency (f) drops, flux (Φ_max) must INCREASE to maintain the same voltage. The core will saturate, iron losses will spike, and the transformer will violently overheat.</div>
    </div>
  </div>

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-losses">2. TRANSFORMER LOSSES — IRON & COPPER LOSSES</div>
  
  <div class="n-h2">Iron Losses (Core / Constant Losses)</div>
  <p class="n-p">These occur in the magnetic core regardless of load. Measured via <strong>No-Load Test</strong>.</p>
  <table class="n-table">
    <tr><th>Type of Loss</th><th>Cause</th><th>How to Reduce</th></tr>
    <tr>
      <td class="bad">Hysteresis Loss</td>
      <td>Magnetic domains repeatedly reversing 50 times per second.</td>
      <td>Use <strong>Grain-Oriented Silicon Steel</strong> (low hysteresis coefficient).</td>
    </tr>
    <tr>
      <td class="bad">Eddy Current Loss</td>
      <td>Alternating flux inducing circulating (eddy) currents in the core body.</td>
      <td>Use <strong>Laminations</strong> (<span class="n-val">0.3-0.5mm</span> sheets insulated with varnish). Loss is proportional to thickness squared.</td>
    </tr>
  </table>

  <div class="n-h2">Copper Losses (Winding / Variable Losses)</div>
  <p class="n-p">Occur in the primary and secondary windings due to resistance (I²R). Proportional to the <strong>square of the load current</strong>. Measured via <strong>Short-Circuit Test</strong>.</p>
  <ul class="n-list">
    <li>Half load = (1/2)² = <span class="n-val">1/4</span> of full load copper loss.</li>
    <li>Double load = 2² = <span class="n-val">4x</span> full load copper loss (rapid overheating).</li>
  </ul>

  <div class="n-h2">Transformer Hum</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Vishwanathan & Nair</strong> ask why a transformer hums and what increased hum means.</div></div>
  <p class="n-p">Transformers normally hum at <strong>TWICE</strong> the supply frequency (<span class="n-val">100Hz</span> on a 50Hz system) due to <strong>Magnetostriction</strong> — the core laminations physically expanding and contracting with each magnetic flux cycle.</p>
  <p class="n-p"><strong>Causes of INCREASED hum:</strong></p>
  <ol class="n-steps">
    <li><strong>Overvoltage:</strong> Higher flux density = more violent magnetostriction.</li>
    <li><strong>Loose laminations or core bolts:</strong> Allows laminations to rattle freely.</li>
    <li><strong>Overload:</strong> Extreme electromagnetic forces pushing on windings.</li>
    <li><strong>Harmonics:</strong> Non-sinusoidal flux creates strange vibration frequencies.</li>
  </ol>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-noload">3. TRANSFORMER ON NO-LOAD vs ON-LOAD</div>
  
  <p class="n-p"><strong>No-Load Operation:</strong> Primary draws a very small <strong>magnetising current (I0)</strong>, typically <span class="n-val">2-10%</span> of full load current. It has an extremely low lagging power factor (<span class="n-val">0.1 to 0.3</span>) because the current is almost entirely reactive, creating the core flux.</p>
  
  <p class="n-p"><strong>On-Load Operation:</strong> When secondary current (I2) flows, it creates a demagnetising MMF (N2 × I2) that opposes the core flux. To prevent the flux from dropping, the primary instantly draws additional load current to counteract it. <strong>The core flux remains nearly constant from no-load to full load.</strong></p>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-auto">4. AUTO-TRANSFORMER vs DOUBLE-WOUND TRANSFORMER</div>
  
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Auto-Transformer</div>
      <div class="card-desc">Has only <strong>ONE</strong> tapped winding shared by primary and secondary.<br><br><strong>Pros:</strong> Smaller, lighter, cheaper, more efficient (less copper).<br><strong>Cons:</strong> NO electrical isolation. A fault can pass primary voltage to secondary.<br><strong>Uses:</strong> Motor starters, voltage adapters.</div>
    </div>
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Double-Wound Transformer</div>
      <div class="card-desc">Two separate windings.<br><br><strong>Pros:</strong> Provides full galvanic isolation.<br><strong>Cons:</strong> Heavier, more expensive.<br><strong>Uses:</strong> Shore connection (mandatory to break earth loops), safety circuits, HV step-down.</div>
    </div>
  </div>

  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-ctpt">5. CURRENT TRANSFORMER (CT) & POTENTIAL TRANSFORMER (PT)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>LETHAL HAZARD EXAM QUESTION:</strong> All surveyors will ask why you must never open-circuit a CT secondary.</div></div>
  
  <table class="n-table">
    <tr><th>Feature</th><th>Current Transformer (CT)</th><th>Potential Transformer (PT)</th></tr>
    <tr>
      <td>Purpose</td>
      <td>Steps down massive current to <span class="n-val">5A or 1A</span>.</td>
      <td>Steps down high voltage to <span class="n-val">110V</span>.</td>
    </tr>
    <tr>
      <td>Connection</td>
      <td>In <strong>SERIES</strong> with the line (bar through core).</td>
      <td>In <strong>PARALLEL</strong> with the line.</td>
    </tr>
    <tr>
      <td class="bad">Lethal Hazard</td>
      <td class="bad">Never OPEN-CIRCUIT secondary!</td>
      <td class="bad">Never SHORT-CIRCUIT secondary!</td>
    </tr>
  </table>

  <div class="n-h2">Why never open-circuit a CT?</div>
  <p class="n-p">If the secondary of a CT is opened while the primary is energised, no secondary current flows. With no opposing secondary MMF, the primary MMF fully magnetises the core to extreme saturation. By Faraday's Law, this massive rate of flux change induces <strong>thousands of lethal volts</strong> on the open secondary terminals. The core will also overheat and destroy the CT.</p>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Safe Procedure:</strong> Always SHORT the CT secondary terminals using a jumper link BEFORE disconnecting the ammeter or relay.</div></div>

  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-buchholz">6. BUCHHOLZ RELAY — OIL-IMMERSED PROTECTION</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Kamath & Sanjib:</strong> Know the float operations and gas types.</div></div>
  <p class="n-p">A gas-operated relay fitted in the pipe between the main tank and the conservator (expansion tank) of oil-immersed transformers.</p>
  
  <ul class="n-list">
    <li><strong>Minor Fault (Slow Gas):</strong> Local overheating decomposes oil. Gas slowly rises into relay body, displacing oil. The <strong>UPPER FLOAT</strong> descends and triggers an <strong>ALARM</strong>.</li>
    <li><strong>Major Fault (Arcing):</strong> Violent internal arc causes rapid gas/oil surge through the pipe. The surge deflects the <strong>LOWER FLOAT</strong> and triggers a <strong>TRIP</strong>.</li>
  </ul>
  
  <div class="n-h2">Dissolved Gas Analysis (DGA)</div>
  <table class="n-table">
    <tr><th>Gas Found</th><th>Indication</th></tr>
    <tr><td>Hydrogen (H2)</td><td>Partial discharge, low energy arcing.</td></tr>
    <tr><td class="bad">Acetylene (C2H2)</td><td class="bad">HIGH ENERGY ARC. Very serious. Investigate immediately.</td></tr>
    <tr><td>Ethylene (C2H4)</td><td>Thermal fault (oil overheating).</td></tr>
    <tr><td>CO + CO2</td><td>Cellulose (paper) insulation overheating.</td></tr>
  </table>

  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-oil">7. TRANSFORMER OIL — PROPERTIES & TESTS</div>
  <p class="n-p">Transformer mineral oil provides both <strong>Insulation</strong> (prevents arcing) and <strong>Cooling</strong> (convects heat from core to radiators).</p>
  <p class="n-p">Required properties: High dielectric strength, low viscosity, high flash point (<span class="n-val">>140°C</span>), chemical stability.</p>

  <div class="n-h2">Breakdown Voltage (BDV) Test</div>
  <p class="n-p">Measures dielectric strength. Oil is placed in a test cell with electrodes <span class="n-val">2.5mm</span> apart. Voltage is increased until an arc jumps the gap.</p>
  <ul class="n-list">
    <li><strong>New Oil:</strong> <span class="n-val">>70 kV</span>.</li>
    <li><strong>Acceptable in service:</strong> Minimum <span class="n-val">30 kV</span>.</li>
    <li><strong>Low BDV indicates:</strong> Moisture or particulate contamination. The oil must be centrifuged, filtered, or replaced.</li>
  </ul>

  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-parallel">8. TRANSFORMER COOLING & PARALLEL OPERATION</div>
  
  <div class="n-h2">Cooling Methods</div>
  <ul class="n-list">
    <li><strong>ONAN</strong> (Oil Natural Air Natural): Natural convection for both. Simple, quiet.</li>
    <li><strong>ONAF</strong> (Oil Natural Air Forced): Fans blow air over radiators.</li>
    <li><strong>OFAF</strong> (Oil Forced Air Forced): Pump circulates oil + fans blow air. For large transformers.</li>
    <li><strong>Dry Type (AN/AF):</strong> No oil, air cooled. Used in accommodation/electronics rooms for fire safety.</li>
  </ul>

  <div class="n-h2">Conditions for Parallel Operation</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal</strong> expects you to list all of these.</div></div>
  <ol class="n-steps">
    <li><strong>Same Voltage Ratio (Turns Ratio):</strong> If unequal, a circulating current flows on no-load, causing overheating.</li>
    <li><strong>Same Polarity (Vector Group):</strong> E.g., both Dyn11. Wrong polarity causes a catastrophic dead short circuit.</li>
    <li><strong>Same Frequency:</strong> Automatic if on the same bus.</li>
    <li><strong>Same Percentage Impedance (Z%):</strong> Transformers share load inversely proportional to Z%. If unequal, the lower Z% transformer will take a disproportionate share and overload.</li>
    <li><strong>Same Phase Sequence:</strong> (For 3-phase).</li>
  </ol>

  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-flyback">9. FLYBACK TRANSFORMER & TESTING</div>
  
  <div class="n-h2">Flyback Transformer</div>
  <p class="n-p">Used in SMPS (Switch Mode Power Supplies) and radar high-voltage generation.</p>
  <ul class="n-list">
    <li><strong>Phase 1 (Switch ON):</strong> Primary current flows. Secondary diode is reverse-biased. Energy is <strong>STORED</strong> in the magnetic core as flux (like an inductor).</li>
    <li><strong>Phase 2 (Switch OFF):</strong> Magnetic field collapses, polarity reverses, secondary diode conducts. Stored energy is <strong>RELEASED</strong> to the secondary.</li>
  </ul>

  <div class="n-h2">Open & Short Circuit Tests</div>
  <table class="n-table">
    <tr><th>Test</th><th>Procedure</th><th>Measures</th></tr>
    <tr>
      <td><strong>Open Circuit (No-Load)</strong></td>
      <td>Apply rated voltage to primary. Secondary open.</td>
      <td class="hl">Iron (Core) Losses & Magnetising Current.</td>
    </tr>
    <tr>
      <td><strong>Short Circuit (On-Load)</strong></td>
      <td>Short secondary. Apply REDUCED voltage to primary until rated current flows.</td>
      <td class="hl">Copper Losses & Percentage Impedance (Z%).</td>
    </tr>
  </table>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr>
      <td>Why must a CT secondary never be open-circuited? (All)</td>
      <td>With no secondary current, there is no opposing MMF. The primary current fully magnetises the core into deep saturation. The massive rate of flux change induces thousands of lethal volts on the secondary terminals, risking electrocution and destroying the CT core via extreme heat. Always short-circuit the CT before disconnecting instruments.</td>
    </tr>
    <tr>
      <td>Why do we laminate the transformer core? (Deswal)</td>
      <td>To reduce eddy current losses. Alternating flux induces circulating currents in the steel core, causing I²R heating. By slicing the core into <span class="n-val">0.3mm</span> laminations insulated with varnish, we break the electrical path. Eddy loss is proportional to the square of thickness, so laminating drastically reduces the loss.</td>
    </tr>
    <tr>
      <td>Why use a double-wound transformer for shore connection instead of an auto-transformer? (Kamath)</td>
      <td>A shore connection requires complete galvanic isolation to break the earth loop between the solidly-earthed shore supply and the floating ship IT system. An auto-transformer shares a winding and provides NO electrical isolation. Without isolation, stray currents would cause massive electrolytic corrosion to the hull.</td>
    </tr>
  </table>

  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>CT Safety</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>NEVER open circuit. High voltage electrocution hazard. Short circuit it first.</td>
    </tr>
    <tr>
      <td>EMF Equation</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>E = 4.44 × f × N × Φ_max. If freq drops, flux increases → core saturation → overheat.</td>
    </tr>
    <tr>
      <td>Buchholz Relay</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, Kamath</td>
      <td>Upper float = alarm (slow gas). Lower float = trip (surge). Acetylene = serious arc fault.</td>
    </tr>
    <tr>
      <td>Iron vs Copper Loss</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Iron = constant (hysteresis/eddy). Copper = variable (I²R). Laminate core to stop eddy currents.</td>
    </tr>
    <tr>
      <td>Parallel Conditions</td>
      <td class="hl">⭐⭐⭐⭐ Deswal</td>
      <td>Same voltage ratio, polarity, Z%, phase sequence. Wrong Z% causes unequal load sharing.</td>
    </tr>
    <tr>
      <td>Transformer Hum</td>
      <td class="hl">⭐⭐⭐ Vishwanathan</td>
      <td>Caused by magnetostriction at <span class="n-val">100Hz</span>. Increases if overvoltage, overload, or loose bolts.</td>
    </tr>
  </table>

  </div>
</div>
</div>`);
'''

with open('data/notes/t05_notes.js', 'w', encoding='utf-8') as f:
    f.write(t05_html)
print("t05 written successfully")

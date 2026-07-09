window.loadNotes("T12", `<div class="view" id="view-notes-t12">
<div class="note-doc">
  <div style="margin-bottom:16px;display:flex;justify-content:space-between">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T12')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 12 - Cables, Insulation &amp; IR Testing</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Cable Layers · Megger · PI Test</span>
      <span class="tag tag-purple">Insulation Classes · IEC Standards · VFD · Trace Heat</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-layers')">Cable Layers</button>
    <button class="anc-btn" onclick="jumpTo('s-cable-types')">XLPE / EPR / LSZH</button>
    <button class="anc-btn" onclick="jumpTo('s-screening')">Screening &amp; Shielding</button>
    <button class="anc-btn" onclick="jumpTo('s-standards')">IEC Standards</button>
    <button class="anc-btn" onclick="jumpTo('s-insclass')">Insulation Classes</button>
    <button class="anc-btn" onclick="jumpTo('s-selection')">Cable Selection</button>
    <button class="anc-btn" onclick="jumpTo('s-neutral')">Insulated Neutral</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">Megger IR Test</button>
    <button class="anc-btn" onclick="jumpTo('s-pi')">PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-fault-location')">Fault Location</button>
    <button class="anc-btn" onclick="jumpTo('s-vfd-cable')">VFD Cables</button>
    <button class="anc-btn" onclick="jumpTo('s-trace-heat')">Trace Heating</button>
    <button class="anc-btn" onclick="jumpTo('s-penetrations')">Penetrations</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══ SECTION 1: CABLE CONSTRUCTION ═══ -->
  <div class="n-h1" id="s-layers">🔌 Cable Construction - Layers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask cable layers, megger procedure, and AVR disconnection before test. Cable layers from inside to outside - conductor → insulation → bedding → armour → outer sheath.</strong></div></div>

  <div class="n-h2">LV Cable - Layer by Layer (Innermost to Outer)</div>
  <ol class="n-steps">
    <li><strong>Conductor</strong> - Stranded copper Class 2 (IEC 60228) for flexibility, reduces skin effect at power frequencies. Stranded construction allows the cable to flex without fatigue cracking.</li>
    <li><strong>Insulation</strong> - PVC (<span class="n-val">70°C</span> rated) or XLPE (<span class="n-val">90°C</span> rated). Provides primary electrical isolation between conductor and earth. Thickness depends on voltage rating.</li>
    <li><strong>Bedding / Inner Sheath</strong> - Extruded PVC or rubber. Cushions armour wires from cutting into insulation during bending. Also provides secondary environmental protection to the insulated cores.</li>
    <li><strong>Armour</strong> - SWA (Steel Wire Armour): flexible, high tensile strength, suitable for cables subject to bending. STA (Steel Tape Armour): better crush resistance, used for fixed buried/clipped installations. Functions: mechanical protection AND earth fault current return path (bonded at both ends).</li>
    <li><strong>Outer Sheath</strong> - PVC, LSF (Low Smoke Fume), or LSZH (Low Smoke Zero Halogen). Final environmental protection against UV, oil, moisture, and chemicals. Fire performance is determined by sheath compound choice. SOLAS mandates LSZH in accommodation and essential spaces.</li>
  </ol>

  <div class="n-h2">HV Cable - Additional Layers (6.6 kV and above)</div>
  <ol class="n-steps">
    <li><strong>Conductor</strong> - Stranded copper (same as LV)</li>
    <li><strong>Conductor Screen</strong> - Semi-conductive layer directly over conductor. Eliminates electrical stress concentrations at the conductor surface (stranded wires create non-uniform field), equalises the electric field uniformly across insulation. Without it: partial discharge at stress peaks → insulation damage.</li>
    <li><strong>Insulation</strong> - XLPE or EPR (both higher temperature and voltage rating than PVC; EPR preferred for shipboard flexibility)</li>
    <li><strong>Insulation Screen</strong> - Semi-conductive layer over insulation. Ensures uniform electric field in insulation, prevents partial discharge at the insulation/metallic screen interface.</li>
    <li><strong>Metallic Screen</strong> - Copper tape or concentric wire. Fault current return path + screens the cable from external electrical interference. Grounded at both ends for fault return; single-ended grounding for screen circulating current reduction on long cables.</li>
    <li><strong>Bedding</strong> - Inner sheath protecting armour from metallic screen</li>
    <li><strong>Armour</strong> - SWA (mechanical protection)</li>
    <li><strong>Outer Sheath</strong> - LSZH mandatory for HV marine cables</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - LV layers (5):</strong> <span class="n-val">C-I-B-A-O</span> → <strong>C</strong>onductor · <strong>I</strong>nsulation · <strong>B</strong>edding · <strong>A</strong>rmour · <strong>O</strong>uter sheath<br><strong>HV adds (between Conductor and Insulation):</strong> Conductor Screen + Insulation Screen + Metallic Screen - "three screens sandwiching the insulation"</div></div>


  <!-- ═══ SECTION 2: CABLE TYPES - XLPE / EPR / LSZH ═══ -->
  <div class="n-h1" id="s-cable-types">🧪 Cable Insulation Materials - XLPE, EPR, PVC &amp; LSZH Sheathing</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiners ask: "What cable is used from alternator to MSB?" and "Why LSZH in accommodation?" Know the differences between PVC, XLPE, and EPR, and why LSZH is SOLAS-mandated.</strong></div></div>

  <div class="n-h2">Insulation Material Comparison</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title" style="color:var(--orange)">PVC</div>
      <div class="card-desc">
        <strong>Max temp:</strong> <span class="n-val">70°C</span> (conductor)<br>
        <strong>Voltage:</strong> Up to <span class="n-val">1 kV</span> LV<br>
        <strong>Flexibility:</strong> Good at ambient; stiff in cold<br>
        <strong>Fire:</strong> Burns with <strong>toxic HCl gas</strong> - chlorine-based fumes<br>
        <strong>Cost:</strong> Cheapest<br>
        <strong>Use:</strong> Shore power, non-critical LV - being phased out of marine use<br>
        <strong>Problem:</strong> Halogenated - prohibited in accommodation/escape routes per SOLAS 2002
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">XLPE (Cross-Linked Polyethylene)</div>
      <div class="card-desc">
        <strong>Max temp:</strong> <span class="n-val">90°C</span> continuous; <span class="n-val">250°C</span> short circuit<br>
        <strong>Voltage:</strong> LV to HV (<span class="n-val">0.6/1 kV</span> to <span class="n-val">33 kV+</span>)<br>
        <strong>Flexibility:</strong> Good, better than PVC in cold<br>
        <strong>Fire:</strong> Self-extinguishing if XLPE-FR; no HCl if halogen-free compound used<br>
        <strong>Cost:</strong> Moderate<br>
        <strong>Use:</strong> Standard marine power cable - alternator to MSB, main distribution. <span class="n-val">IEC 60092-353</span><br>
        <strong>Advantage:</strong> Higher current rating than PVC due to higher temp; better chemical resistance
      </div>
    </div>
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">EPR (Ethylene Propylene Rubber)</div>
      <div class="card-desc">
        <strong>Max temp:</strong> <span class="n-val">90°C</span> continuous; <span class="n-val">250°C</span> short circuit<br>
        <strong>Voltage:</strong> LV to HV; common in HV marine cables<br>
        <strong>Flexibility:</strong> <strong>Superior</strong> - remains flexible in cold and vibration; ideal for shipboard<br>
        <strong>Fire:</strong> Self-extinguishing; halogen-free grades available<br>
        <strong>Cost:</strong> Higher than XLPE<br>
        <strong>Use:</strong> Preferred for HV shipboard cables, mobile/trailing cables, deck cables subject to movement. IEC 60092-354 (HV).<br>
        <strong>Advantage:</strong> Better partial discharge resistance and moisture resistance than XLPE at HV
      </div>
    </div>
  </div>

  <div class="n-h2">Outer Sheath - LSF vs LSZH vs PVC</div>
  <table class="n-table">
    <tr><th>Sheath Type</th><th>Smoke</th><th>Halogen Content</th><th>Use</th></tr>
    <tr><td><strong>PVC sheath</strong></td><td class="bad">Dense, toxic black smoke + HCl</td><td class="bad">Halogenated - chlorine</td><td>Not permitted in accommodation/escape routes</td></tr>
    <tr><td><strong>LSF (Low Smoke Fume)</strong></td><td class="hl">Reduced smoke, low acidity</td><td class="hl">Low halogen (not zero)</td><td>Engine room, cargo spaces - reduced exposure areas</td></tr>
    <tr><td class="ok"><strong>LSZH (Low Smoke Zero Halogen)</strong></td><td class="ok">Very low smoke, zero HCl</td><td class="ok">Halogen-free compound</td><td class="ok">Mandatory in accommodation, escape routes, control stations (SOLAS II-2 Reg.3)</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why LSZH is mandated by SOLAS:</strong> In a ship fire, the primary cause of incapacitation and death is toxic smoke inhalation, not heat. PVC cables burning in a confined accommodation passageway produce HCl (hydrogen chloride) gas and dense black smoke that cause immediate respiratory failure and zero visibility. LSZH cables produce minimal smoke and no acid gas - passengers and crew retain vision and lung function long enough to escape. SOLAS 2002 amendments (Reg. II-2/3) and IEC 60092-353 mandate halogen-free cables in all accommodation, service spaces, and escape routes. An ETO must enforce this requirement when purchasing replacement cables.</div></div>

  <div class="n-h2">Dielectric, Dielectric Loss &amp; Stray Loss</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dielectric</strong> = the insulating material between conductor and earth/screen (XLPE, EPR, PVC). Under AC it stores and releases energy each cycle like a capacitor.<br>
  • <strong>Dielectric loss:</strong> the small power dissipated as heat inside the insulation as the alternating field repeatedly polarises it. Measured by the loss angle / <strong>tan δ</strong> (dissipation factor) - a rising tan δ on test means the insulation is ageing or wet. Significant on HV cables, negligible on LV.<br>
  • <strong>Stray loss:</strong> extra I<sup>2</sup>R heating from eddy currents and circulating currents induced by the cable's own magnetic field in the metallic screen, armour and nearby steelwork. Minimised by bonding the screen/armour at one end only (single-point bonding) on HV runs.</div></div>


  <!-- ═══ SECTION 3: SCREENING / SHIELDING ═══ -->
  <div class="n-h1" id="s-screening">🛡️ Cable Screening &amp; Shielding</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Screening is essential for signal and instrumentation cables, and increasingly for power cables near VFDs. An unscreened instrumentation cable near power cables will pick up interference that corrupts sensor readings - a real problem on modern automated vessels.</strong></div></div>

  <div class="n-h2">Why Screen Signal Cables?</div>
  <ul class="n-list">
    <li><strong>Electrostatic (capacitive) coupling:</strong> An unscreened signal cable near a power cable acts as one plate of a capacitor - the power cable's AC electric field couples noise voltage into the signal conductor. Particularly severe with high dV/dt sources like VFDs.</li>
    <li><strong>Electromagnetic (inductive) coupling:</strong> The magnetic field from a power cable induces a voltage in a nearby signal loop. Proportional to rate of current change (dI/dt) and loop area.</li>
    <li><strong>The screen:</strong> A conductive layer (foil or braid) surrounding the signal conductors provides a Faraday cage - external electric fields terminate on the screen (grounded at one end) and cannot penetrate to the signal conductors.</li>
  </ul>

  <div class="n-h2">Foil Screen vs Braid Screen</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">Foil Screen (Al/Mylar)</div>
      <div class="card-desc">
        <strong>Construction:</strong> Aluminium foil laminated to polyester film, wrapped helically around conductors<br>
        <strong>Coverage:</strong> 100% - complete coverage, no gaps<br>
        <strong>Drain wire:</strong> A bare copper wire run inside the foil to provide a continuous electrical contact and termination point for the screen<br>
        <strong>Best for:</strong> High-frequency noise (VFD, radio interference) - continuous coverage important at HF<br>
        <strong>Limitation:</strong> Fragile; flexing cracks the foil; not for trailing cables
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">Braid Screen (Tinned Copper)</div>
      <div class="card-desc">
        <strong>Construction:</strong> Woven tinned copper wire around conductors, typically 85–95% coverage<br>
        <strong>Coverage:</strong> 85–95% (gaps at braid intersections)<br>
        <strong>Termination:</strong> Direct connection of braid ends to cable gland/backshell<br>
        <strong>Best for:</strong> Low-frequency noise (50/60 Hz interference), mechanical flexibility, drag cables<br>
        <strong>Advantage:</strong> Robust, handles bending and flexing without degradation
      </div>
    </div>
  </div>

  <div class="n-h2">Screen Grounding Rules</div>
  <table class="n-table">
    <tr><th>Connection</th><th>Effect</th><th>Application</th></tr>
    <tr><td class="ok"><strong>Single-ended grounding (one end only)</strong></td><td class="ok">Prevents 50 Hz circulating current in the screen loop. Eliminates ground loop noise.</td><td class="ok">Instrumentation cables, thermocouple and RTD signals, 4–20 mA loops - standard for signal cables &lt;100 kHz</td></tr>
    <tr><td class="hl"><strong>Both-ended grounding</strong></td><td class="hl">Creates a ground loop (potential difference between ground points induces noise) but provides low-impedance path for RF/high-frequency noise.</td><td class="hl">VFD power cables (both ends required for EMC). HF applications above 100 kHz.</td></tr>
  </table>

  <div class="n-h2">Segregation - Power vs Signal Cables</div>
  <table class="n-table">
    <tr><th>Cable Type Combination</th><th>Minimum Separation</th><th>Reason</th></tr>
    <tr><td>Power cable vs instrumentation/signal cable</td><td class="hl"><span class="n-val">300 mm</span> minimum</td><td>Prevent capacitive and inductive coupling of power-frequency noise into signal circuits</td></tr>
    <tr><td>VFD power cable vs signal cable</td><td class="hl"><span class="n-val">300–500 mm</span></td><td>VFD produces high dV/dt and high-frequency harmonics - more aggressive coupling than 50 Hz</td></tr>
    <tr><td>Fire detection / alarm cables vs power</td><td class="bad"><span class="n-val">500 mm</span> (or segregated conduit)</td><td>SOLAS requires fire detection system integrity; must not be compromised by EMI from power cables</td></tr>
    <tr><td>Cable trays: segregation method</td><td colspan="2">Separate cable trays with physical barriers, or use screened instrumentation cable with screen grounded at one end</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Classification society requirement:</strong> Power and instrumentation cables must run on separate trays wherever practicable. Where crossing is unavoidable, cross at 90° to minimise inductive coupling length. Never bundle signal and power cables together with the same cable tie - even briefly during installation.</div></div>


  <!-- ═══ SECTION 4: IEC STANDARDS ═══ -->
  <div class="n-h1" id="s-standards">📋 IEC Cable Standards - Complete Reference</div>
  <table class="n-table">
    <tr><th>Standard</th><th>Type</th><th>Key Requirement</th><th>Mandatory For</th></tr>
    <tr><td><span class="n-val">IEC 60092-353</span></td><td>Shipboard LV power cables</td><td>Halogen-free, flame-retardant - for marine environments. XLPE or EPR insulation, LSZH sheath.</td><td>Alternator to MSB, general power distribution onboard. Rated <span class="n-val">0.6/1 kV</span>.</td></tr>
    <tr><td><span class="n-val">IEC 60092-354</span></td><td>Shipboard HV cables</td><td>Fixed HV cable installation onboard. Screened construction mandatory.</td><td>6.6 kV, 11 kV distribution systems</td></tr>
    <tr><td><span class="n-val">IEC 60228</span></td><td>Conductor standard</td><td>Class 2 stranded copper construction. Class 1 = solid, Class 2 = stranded (standard for shipboard).</td><td>All marine power cables</td></tr>
    <tr><td><span class="n-val">IEC 60332-1</span></td><td>Flame retardant - single</td><td>Single cable self-extinguishes when flame source removed. Does NOT maintain circuit integrity in fire.</td><td>General cables in enclosed spaces</td></tr>
    <tr><td><span class="n-val">IEC 60332-3</span></td><td>Flame retardant - bunched</td><td>Bunched cables do not propagate flame along a run. More stringent than -1. Critical for cable trays with many cables.</td><td>All grouped cable installations in trunking/trays</td></tr>
    <tr><td class="hl"><span class="n-val">IEC 60331</span></td><td class="hl">FIRE RESISTANT</td><td class="hl">Maintains circuit integrity minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span>. Uses mica tape layer over conductors - mica remains intact and insulating even when polymer burns away.</td><td class="bad">MANDATORY: fire pumps, steering gear, emergency lighting, GMDSS, fixed fire detection, emergency generator circuits</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Flame retardant ≠ Fire resistant.</strong> IEC 60332 = cable stops burning when ignition source removed. Does NOT keep circuit alive during a fire. IEC 60331 = circuit stays alive for 3 hours at 750°C - essential for safety systems that must operate DURING a fire. Surveyors (Nair, Sanjib) ask this distinction explicitly.</div></div>

  <div class="n-h2">Cable from Alternator to MSB - Complete Specification</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>This is the most asked cable specification question (Kamath, Deswal):</strong><br>
  3-core (or single-core per phase for large alternators) · Stranded copper Class 2 (IEC 60228) conductor · XLPE insulation · Bedding · Steel Wire Armour (SWA) · LSZH outer sheath · Voltage rating <span class="n-val">0.6/1 kV</span> · Flame retardant IEC 60332-3 · Halogen-free IEC 60092-353 · Glands: watertight armoured A2 type (BS 6121) · Sizing: rated current × 1.25 derating minimum</div></div>


  <!-- ═══ SECTION 5: INSULATION CLASSES ═══ -->
  <div class="n-h1" id="s-insclass">🌡️ Insulation Classes - Temperature Limits</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Vishwanathan ask: "What insulation class is the steering gear motor?" → Class H. "What class is the alternator?" → Class F. Know ALL classes and their temperatures. The 10°C rule is always asked.</strong></div></div>

  <table class="n-table">
    <tr><th>Class</th><th>Max Temperature</th><th>Typical Ship Use</th></tr>
    <tr><td>A</td><td><span class="n-val">105°C</span></td><td>Older small motors, fan motors - largely obsolete in new construction</td></tr>
    <tr><td>E</td><td><span class="n-val">120°C</span></td><td>General purpose older equipment</td></tr>
    <tr><td>B</td><td><span class="n-val">130°C</span></td><td>SW cooling pumps (older vessels); superseded by F for new builds</td></tr>
    <tr><td class="hl">F</td><td class="hl"><span class="n-val">155°C</span></td><td class="hl">Generators/alternators, deck motors, modern pump motors - <strong>current standard for most shipboard motors</strong></td></tr>
    <tr><td class="hl">H</td><td class="hl"><span class="n-val">180°C</span></td><td class="hl">Steering gear motors (severe duty, frequent heavy overloads) - highest class in common shipboard use</td></tr>
    <tr><td>C</td><td><span class="n-val">&gt;180°C</span></td><td>Special high-temperature applications - not common on merchant ships</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Arrhenius Rule (10°C Law): Every 10°C above the rated class temperature HALVES the insulation service life.</strong> A Class F motor (155°C rated) run at 165°C has half the expected life. A Class F motor run at 175°C has one-quarter the life. This is why motor winding temperature alarms must be responded to immediately - it is not just comfort, it is asset life preservation.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Classes in order:</strong> <span class="n-val">A-E-B-F-H-C</span> → temperatures 105-120-130-155-180-&gt;180<br>Mnemonic: <strong>"Always Eat Before Full Hunger Consumes"</strong> - A·E·B·F·H·C<br><strong>Ship critical:</strong> Steering → H (180) · Alternator → F (155) · Modern pump → F (155) · Old pump → B (130)</div></div>


  <!-- ═══ SECTION 6: CABLE SELECTION ═══ -->
  <div class="n-h1" id="s-selection">📦 Cable Selection - How to Specify &amp; Order</div>
  <div class="n-h2">Parameters to Specify When Ordering</div>
  <ul class="n-list">
    <li><strong>Voltage rating:</strong> e.g. <span class="n-val">0.6/1 kV</span> for LV, <span class="n-val">3.8/6.6 kV</span> for MV - first number = phase-to-earth, second = phase-to-phase</li>
    <li><strong>Number of cores:</strong> 3-core or 4-core (or single-core per phase for high current)</li>
    <li><strong>Conductor cross-section:</strong> e.g. <span class="n-val">25 mm²</span>, <span class="n-val">95 mm²</span> - based on rated current and derating factors</li>
    <li><strong>Conductor material:</strong> Class 2 stranded copper (<span class="n-val">IEC 60228</span>)</li>
    <li><strong>Insulation type:</strong> PVC, XLPE, or EPR (XLPE standard; EPR for HV/flexible)</li>
    <li><strong>Armour type:</strong> SWA (flexible routes) or STA (fixed/buried)</li>
    <li><strong>Outer sheath:</strong> LSZH (accommodation), LSF (engine room), or PVC (non-critical industrial)</li>
    <li><strong>Fire performance:</strong> Flame retardant (<span class="n-val">IEC 60332</span>) or Fire Resistant (<span class="n-val">IEC 60331</span>) - mandatory for essential safety services</li>
    <li><strong>Applicable standard:</strong> e.g. <span class="n-val">IEC 60092-353</span></li>
    <li><strong>Length:</strong> Measured length <span class="n-val">+10–15%</span> allowance (for routing, termination, and future re-termination)</li>
    <li><strong>Glands:</strong> Watertight armoured A2 type per <span class="n-val">BS 6121</span></li>
  </ul>

  <div class="n-h2">Current Rating Derating Factors</div>
  <table class="n-table">
    <tr><th>Factor</th><th>Effect</th><th>Typical Derating</th></tr>
    <tr><td>Ambient temperature above base (30°C base for marine)</td><td>Higher ambient → less heat dissipation → lower rating</td><td class="hl">Consult IEC 60092 rating tables for ambient correction</td></tr>
    <tr><td>Grouping (cables in bunches/trays)</td><td>Mutual heating between grouped cables - cannot dissipate heat as freely</td><td class="hl">0.70 factor for 4–6 cables in a bunch; 0.60 for larger groups</td></tr>
    <tr><td>Thermal insulation around cable</td><td>Heat cannot escape - severe derating</td><td class="bad">May require next size up</td></tr>
    <tr><td>Cable routed through lagging, in conduit, or buried in bulkhead</td><td>Restricted thermal environment</td><td class="hl">Additional correction per IEC 60092</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Voltage drop check:</strong> After selecting cable size by current rating, always verify voltage drop over the cable length. For LV motor circuits, maximum voltage drop from distribution board to motor terminal should not exceed <span class="n-val">5%</span> (IEC guidance). Excessive voltage drop → reduced motor torque, overheating, starting failure.</div></div>


  <!-- ═══ SECTION 7: INSULATED NEUTRAL ═══ -->
  <div class="n-h1" id="s-neutral">⚡ Insulated Neutral (IT) System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Advantage of insulated (IT) neutral:</strong> First earth fault does NOT create a complete short-circuit path - no blackout, no trip. System continues running while the Insulation Monitoring Device (IMS/IRM) gives an alarm. The ETO has time to safely locate and repair the fault. Provides first-fault tolerance - critical for a vessel that must maintain power for navigation and machinery.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>What if you IGNORE a low insulation alarm?</strong> The insulated neutral system is degraded - it now behaves as a solidly earthed system. If a second earth fault develops on a DIFFERENT phase: a direct phase-to-phase short-circuit fault path is created through the hull. Massive fault current flows → trips the relevant breakers → partial blackout, arcing/fire at fault points, and fatal electric shock hazard to any personnel touching metalwork connected to either faulted circuit. This is a Class 1 danger.</div></div>

  <div class="n-h2">Earth Fault - What Happens Step by Step</div>
  <ol class="n-steps">
    <li>First earth fault: Phase L1 insulation fails - L1 contacts hull (earth). No complete circuit yet (neutral is isolated). IMS measures reduced impedance to earth → alarm sounds. Ship continues operating normally.</li>
    <li>ETO notified - must trace and repair fault urgently. Check MSB earth fault indicator to identify section. Isolate feeder circuits one by one until indicator returns to normal.</li>
    <li>Second earth fault (if L1 fault unrepaired): Phase L2 insulation fails on a different circuit - L2 contacts hull. Now a complete circuit exists: L1 → fault point 1 → hull → fault point 2 → L2 = line-to-line voltage (440V or 6.6 kV) driving fault current through hull and personnel.</li>
    <li>Result: Massive fault current, breaker trips, arc burning, fire risk, and lethal touch voltage on any connected equipment.</li>
  </ol>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - IT System:</strong> <strong>I</strong>solated <strong>T</strong>ransformer = first fault = alarm only (IT: I = Isolated neutral, T = Terre/Earth). IT system gives <strong>ONE free fault</strong> - use that time wisely to find and fix it. Second fault = disaster.</div></div>


  <!-- ═══ SECTION 8: MEGGER IR TEST ═══ -->
  <div class="n-h1" id="s-megger">🔍 Megger IR Test - Full Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask: why disconnect AVR before meggering. Also know test voltages for LV vs HV and why DC not AC.</strong></div></div>

  <div class="n-h2">Test Voltage Selection</div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Test Voltage</th><th>Minimum IR</th><th>Notes</th></tr>
    <tr><td>LV motors, cables (<span class="n-val">440V</span>)</td><td class="hl"><span class="n-val">500V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span></td><td>kV + 1 MΩ rule: (0.44 kV + 1 ≈ 1 MΩ). Below this = do NOT energise.</td></tr>
    <tr><td>LV alternators, transformers</td><td class="hl"><span class="n-val">1000V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span></td><td>Higher test voltage adequately stresses the thicker insulation</td></tr>
    <tr><td>HV equipment (<span class="n-val">6.6 kV</span>)</td><td class="hl"><span class="n-val">2500–5000V DC</span></td><td class="hl"><span class="n-val">7.6 MΩ</span></td><td>kV + 1 = 6.6 + 1 = 7.6 MΩ. Must meaningfully stress HV insulation.</td></tr>
    <tr><td>New equipment (typical)</td><td>—</td><td class="ok">&gt;<span class="n-val">100 MΩ</span></td><td>Much higher than minimum when new; trending downward indicates degradation</td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Disconnect AVR before meggering the alternator.</strong> The AVR contains low-voltage electronic components (diodes, thyristors, integrated circuits) rated for <span class="n-val">12–100V DC</span>. Applying <span class="n-val">500–1000V DC</span> from a megger immediately and permanently destroys these semiconductor junctions - irreversible damage. Also disconnect rotating diodes and discharge capacitors before connecting megger.</div></div>

  <div class="n-h2">Why DC (not AC) for IR Testing?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Cables and windings act as capacitors (dielectric between conductor and earth).</strong><br>
  • <strong>AC test:</strong> Continuous capacitive charge/discharge current flows throughout the test → adds to true leakage current → artificially low (pessimistic) IR reading. Cannot distinguish capacitive current from resistive leakage.<br>
  • <strong>DC test:</strong> After initial capacitive charging settles (a few seconds), only true resistive leakage current remains. DC also enables the Polarisation Index test - impossible with AC. No reactive component pollutes the measurement.</div></div>

  <div class="n-h2">Analogue Megger - Internal Construction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Traditional hand-cranked analogue megger uses a permanent magnet cross-coil ratiometer:</strong><br>
  • <strong>Pressure Coil (Voltage Coil):</strong> Connected in series with current-limiting resistor across generator terminals - sets up restoring torque proportional to output voltage<br>
  • <strong>Deflecting Coil (Current Coil):</strong> Connected in series with insulation under test - generates deflecting torque proportional to leakage current<br>
  • <strong>Crossing Coil:</strong> Positioned at an angle to deflecting coil - stabilises pointer and controls scale distribution across MΩ/GΩ ranges<br>
  Pointer deflection = ratio of currents through the two coils (R = V/I). Self-compensating - independent of exact hand-cranking speed. Modern digital variants use electronic DC/DC converter to generate stabilised high DC test voltage from batteries.</div></div>

  <div class="n-h2">Digital Megger - Generating 500V from a 9V Battery</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>How a battery megger makes the high test voltage:</strong> the low DC from the internal battery (e.g. <span class="n-val">9V</span>) feeds an electronic <strong>oscillator</strong> that chops it into AC → a <strong>step-up transformer</strong> raises the voltage → a <strong>rectifier and voltage-multiplier</strong> (diode/capacitor ladder) converts it back to a stabilised high DC test voltage (<span class="n-val">500 / 1000 / 2500 / 5000V DC</span>, selectable). This is the DC/DC converter principle. Older instruments instead used a <strong>hand-cranked permanent-magnet generator</strong> to produce the 500V directly.</div></div>

  <div class="n-h2">Alternator IR Test - Full Procedure</div>
  <ol class="n-steps">
    <li>Inform bridge/CE. Transfer load to another alternator. Open ACB.</li>
    <li>Apply LOTO (Lock Out Tag Out). Issue Electrical Isolation Permit.</li>
    <li><strong>Disconnect AVR - MANDATORY.</strong> AVR semiconductors (thyristors, ICs rated <span class="n-val">12–100V DC</span>) destroyed instantly by <span class="n-val">500–1000V</span> megger voltage.</li>
    <li>Disconnect rotating diodes and discharge capacitors</li>
    <li>Disconnect stator cables from MSB terminals</li>
    <li>Connect megger: positive terminal (LINE) to phase terminal, negative (EARTH) to machine frame/earth stud. Test each phase to earth AND phase-to-phase for <span class="n-val">60 seconds</span>.</li>
    <li>Record ALL readings. Compare with previous records (trending is more important than a single reading) and minimum acceptable values.</li>
    <li><strong>Discharge winding</strong> - short all stator terminals together and to earth for minimum <span class="n-val">30 seconds</span>. Winding capacitance retains charge after megger disconnected = serious electric shock hazard.</li>
    <li>Reconnect all components in reverse order. Reconnect AVR and rotating diodes last. Test AVR operation on reduced load before restoring to full service.</li>
  </ol>

  <div class="n-h2">Temperature Correction of IR Readings</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Temperature correction:</strong> Insulation resistance approximately halves for every <span class="n-val">10°C</span> rise in temperature. All readings must be corrected to a <span class="n-val">40°C</span> baseline for comparison with previous records (a cold machine reads higher IR than a hot one - must compare at same temperature).</div></div>
  <div class="n-formula">IR(40°C) = IR(measured) × 2^((T−40)/10)<div class="label">T = measured winding temperature in °C · IR halves per 10°C rise, so hot readings × correction factor restores 40°C baseline · Example: measured 10 MΩ at 80°C → 10 × 2^((80−40)/10) = 10 × 2^4 = 10 × 16 = 160 MΩ at 40°C · Always record both measured IR and winding temperature</div></div>


  <!-- ═══ SECTION 9: PI TEST ═══ -->
  <div class="n-h1" id="s-pi">📈 Polarisation Index (PI) Test</div>
  <div class="n-formula">PI = IR(10 minutes) / IR(1 minute)<div class="label">Both readings taken at the same DC test voltage. PI distinguishes dry clean insulation from moisture-contaminated insulation - a single IR reading cannot do this.</div></div>

  <table class="n-table">
    <tr><th>PI Value</th><th>Condition</th><th>Action</th></tr>
    <tr><td><span class="n-val">&gt; 4.0</span></td><td class="ok">Excellent - very clean and dry</td><td class="ok">Ideal condition; safe to energise</td></tr>
    <tr><td><span class="n-val">&gt; 2.0</span></td><td class="ok">Good - clean and dry</td><td class="ok">Safe to energise</td></tr>
    <tr><td><span class="n-val">1.5–2.0</span></td><td class="hl">Questionable / Marginal</td><td class="hl">Investigate - consider drying out before energising</td></tr>
    <tr><td><span class="n-val">&lt; 1.5</span></td><td class="bad">Poor - moisture or contamination present</td><td class="bad">Do NOT energise - dry out thoroughly and retest</td></tr>
    <tr><td><span class="n-val">≈ 1.0</span></td><td class="bad">Very poor / Dangerous</td><td class="bad">Conductive moisture path - absolutely do NOT energise. Risk of flashover on energisation.</td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (All Surveyors): "What is the significance of waiting 10 minutes?" - Three currents flow when megger voltage is applied. Know all three.</strong></div></div>

  <div class="n-h2">The Three Currents That Flow During a Megger Test</div>
  <ul class="n-list">
    <li><strong>1. Capacitive charging current:</strong> Decays within the first few seconds. Caused by the cable's inherent capacitance charging up to the megger test voltage. Dies away quickly.</li>
    <li><strong>2. Absorption (dielectric polarisation) current:</strong> Decays over 1–10 minutes. Caused by insulation molecules (dipoles) aligning with the applied electric field - polarisation. Good clean insulation has significant absorption, so its IR reading RISES significantly from 1 minute to 10 minutes. This is the basis of the PI test.</li>
    <li><strong>3. True leakage current:</strong> Remains constant throughout. This is the steady-state current flowing through actual conduction paths (moisture, dirt, carbonised tracking, surface contamination) in the insulation. This is the current that matters for safety.</li>
  </ul>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why PI works:</strong><br>
  • <strong>Good dry insulation:</strong> Significant absorption current at 1 min (IR appears lower). By 10 min, absorption has decayed - only small true leakage remains. IR reading has risen substantially. PI = IR10/IR1 &gt; 2 (often 4–10).<br>
  • <strong>Wet/contaminated insulation:</strong> Conductive moisture path dominates from the start. True leakage is large and constant. Absorption is swamped. IR reading stays flat from 1 min to 10 min. PI ≈ 1.0.<br>
  • <strong>Why only for large machines/HV cables:</strong> Large insulation volume = significant dielectric absorption. Thin LV motor insulation has negligible absorption current - PI test gives no useful information. PI is relevant for alternators, large motors, HV cables, transformers.</div></div>


  <!-- ═══ SECTION 10: CABLE FAULT LOCATION ═══ -->
  <div class="n-h1" id="s-fault-location">🔎 Cable Fault Location Methods</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask: "How would you find where the insulation fault is in a cable?" - Know Murray Loop test (low tech, no special equipment needed) and TDR (modern method). Murray Loop is the most likely exam question.</strong></div></div>

  <div class="n-h2">Murray Loop Test - Find Fault Location by Resistance</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The Murray Loop test locates an insulation fault (earth fault) in a cable by treating the cable loop as a Wheatstone bridge. Requires: two conductors of the same cable (form a loop by linking them at the far end), a DC bridge/galvanometer. Faulty cable's resistance to fault point is measured against the known total loop resistance.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Prepare the loop:</strong> At the far end of the cable, short-circuit the faulty conductor to a sound conductor (link the two cores together). This creates a continuous loop of known length.</li>
    <li><strong>Connect the bridge:</strong> At the near end (test end), connect the Murray bridge/DC Wheatstone bridge across the two conductors. The bridge measures the resistance of the fault loop.</li>
    <li><strong>Balance the bridge:</strong> Adjust the ratio arms until the galvanometer reads zero (bridge balanced). Record the ratio arm values (P and Q).</li>
    <li><strong>Calculate fault distance:</strong> The balanced ratio gives the distance to the fault as a proportion of the total loop length.</li>
  </ol>
  <div class="n-formula">Distance to fault = [2 × L × P] / (P + Q)<div class="label">L = total one-way cable length (m) · P = ratio arm on fault side · Q = ratio arm on sound side · Result = distance from test end to fault (m) · Works because conductor resistance is proportional to length for uniform cross-section</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Murray Loop test limitations:</strong> Requires a sound conductor of equal cross-section to form the return loop. If all conductors are faulted, the test cannot be performed. Accuracy depends on uniform conductor resistance along the length (temperature affects this). Not suitable for very short cables or for locating open-circuit faults (only earth/insulation faults). Practically accurate to within 2–5% of cable length.</div></div>

  <div class="n-h2">TDR - Time Domain Reflectometry</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>TDR works like radar for cables:</strong> A very fast electrical pulse (nanosecond rise time) is injected into the cable. At any impedance discontinuity (fault, open circuit, short circuit, poor joint, damaged section), part of the pulse is reflected back to the instrument. The TDR measures the time between transmitted and reflected pulses. Knowing the propagation velocity of the cable, it calculates the distance.</div></div>
  <div class="n-formula">Distance = (v × t) / 2<div class="label">v = propagation velocity of the cable (typically 0.6 × speed of light for XLPE, listed in cable datasheet) · t = time for reflected pulse to return · Divide by 2 because the pulse travels to the fault AND back</div></div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">Murray Loop Test</div>
      <div class="card-desc">
        ✅ No specialist equipment - DC bridge and galvanometer<br>
        ✅ Works with analogue or simple digital equipment<br>
        ✅ Familiar method - exam standard<br>
        ✅ Good accuracy for long cables<br>
        ❌ Requires a sound return conductor<br>
        ❌ Cannot find open circuits<br>
        ❌ Requires cable to be dead (isolated)
      </div>
    </div>
    <div class="n-card" style="border-color:var(--blue)">
      <div class="card-title" style="color:var(--blue)">TDR</div>
      <div class="card-desc">
        ✅ Finds open circuits AND shorts AND earth faults<br>
        ✅ No return loop needed<br>
        ✅ Displays waveform - can see multiple faults<br>
        ✅ Fast and accurate, even on long cables<br>
        ❌ Requires TDR instrument (expensive, specialist)<br>
        ❌ Operator must interpret waveform<br>
        ❌ Still requires cable to be isolated for safety
      </div>
    </div>
  </div>

  <div class="n-h2">DLRO - Ducter / Low-Resistance Ohmmeter</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DLRO (Ducter Low Resistance Ohmmeter)</strong> uses a 4-wire (Kelvin) measurement to eliminate lead resistance. Used for checking armour continuity, cable conductor resistance, busbar joint resistance, motor winding continuity. Typical readings: good cable joint &lt;10 µΩ; degraded joint &gt;100 µΩ. NOT for insulation testing - that is the megger's role.</div></div>


  <!-- ═══ SECTION 11: VFD CABLES ═══ -->
  <div class="n-h1" id="s-vfd-cable">⚡ VFD Cables - Special Requirements</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>VFDs (Variable Frequency Drives) are now standard on modern vessels - bow thrusters, cargo pumps, HVAC fans, heeling pumps. ETO must know why standard cables are unsuitable for VFD output and what special cables are required. This is an emerging examiner question.</strong></div></div>

  <div class="n-h2">Why VFD Output is Different from Normal Power</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>A VFD does not output a true sine wave.</strong> It switches a DC bus voltage using IGBT transistors at a high carrier frequency (typically 2–16 kHz) using PWM (Pulse Width Modulation). This produces a series of fast-switching voltage pulses - very high dV/dt (rate of voltage rise, e.g. 500–10,000 V/µs).<br><br>
  This creates problems that do not exist with normal 50 Hz sinusoidal power:
  <ul style="margin:6px 0 0 16px">
    <li><strong>High-frequency (HF) harmonics:</strong> Current harmonics at multiples of the carrier frequency circulate in the cable and system</li>
    <li><strong>Common-mode voltage:</strong> A voltage common to all three phases relative to earth - causes bearing currents in motors and EMI into nearby cables</li>
    <li><strong>Capacitive coupling:</strong> High dV/dt + cable capacitance → large capacitive discharge currents into the cable screen and motor frame</li>
    <li><strong>Shaft currents in motor:</strong> HF common-mode currents can take the path through motor bearings → pitting and premature bearing failure</li>
  </ul></div></div>

  <div class="n-h2">VFD Cable Requirements vs Standard Cable</div>
  <table class="n-table">
    <tr><th>Property</th><th>Standard XLPE/SWA Cable</th><th>VFD-Rated Cable</th></tr>
    <tr><td>Screening</td><td class="bad">SWA (armour - not optimised for HF screening)</td><td class="ok">Symmetrical braid or foil screen - 360° coverage, both ends grounded. Low-impedance at HF.</td></tr>
    <tr><td>Capacitance</td><td class="bad">Standard - high capacitance amplifies charging currents</td><td class="ok">Low capacitance construction - reduced insulation to screen distance</td></tr>
    <tr><td>Insulation</td><td class="hl">Standard PVC/XLPE</td><td class="ok">Heavy-duty XLPE or EPR - withstands repetitive fast voltage pulses and partial discharge from voltage spikes</td></tr>
    <tr><td>Grounding</td><td class="bad">Single-end armour earth</td><td class="ok">Both ends of screen grounded - essential for HF common-mode current path back to drive</td></tr>
    <tr><td>EMC</td><td class="bad">No EMC rating</td><td class="ok">Compliant with EN 61800-3 / IEC 61800-3 EMC requirements</td></tr>
  </table>

  <div class="n-h2">VFD Installation Best Practices</div>
  <ul class="n-list">
    <li><strong>Screen both ends to earth:</strong> VFD cable screens must be grounded at the VFD panel AND at the motor terminal box - 360° metallic bond at both ends. This provides the low-impedance return path for HF common-mode currents, preventing them from flowing through signal cables or the ship's hull.</li>
    <li><strong>Common-mode choke (output choke):</strong> A three-phase inductor installed in the VFD output. Attenuates common-mode currents that would otherwise circulate in the cable screen and cause EMI. Particularly important for long cable runs (&gt;50 m) where cable capacitance is significant.</li>
    <li><strong>dU/dt filter:</strong> Installed at VFD output for cable runs &gt;100 m. Slows the rate of voltage rise of the PWM pulses, reducing partial discharge in cable insulation and reducing voltage reflection at motor terminals (a long cable acts as a transmission line - fast pulses reflect and add, causing voltage peaks up to 2× DC bus voltage at motor terminals).</li>
    <li><strong>Segregation:</strong> Keep VFD output cables away from signal and instrumentation cables - minimum <span class="n-val">500 mm</span> separation. VFD cables radiate significant HF EMI that corrupts sensor signals and navigation equipment.</li>
    <li><strong>Cable length limits:</strong> Standard VFD has a maximum recommended cable length (typically 25–100 m without filter). Longer runs require output filters. Check VFD manufacturer specification - exceeding length limit causes overvoltage at motor, premature insulation failure.</li>
  </ul>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Practical memory - VFD cable vs standard:</strong> VFD = Screened both ends + Low capacitance + Heavy insulation + Common-mode choke. Standard SWA cable on a VFD = EMI contamination of ship systems + premature motor bearing failure + cable insulation failure from voltage spikes.</div></div>


  <!-- ═══ SECTION 12: TRACE HEATING ═══ -->
  <div class="n-h1" id="s-trace-heat">🔥 Trace Heating Cables</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Trace heating is present on modern vessels for freeze protection of water pipes in exposed/unheated spaces, and for viscosity maintenance of HFO and lubricating oil lines. The ETO is responsible for commissioning, testing, and maintaining these systems.</strong></div></div>

  <div class="n-h2">Types of Trace Heating Cable</div>
  <div class="n-grid" style="grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
    <div class="n-card" style="border-color:var(--orange)">
      <div class="card-title" style="color:var(--orange)">Constant Wattage (CW)</div>
      <div class="card-desc">
        <strong>Principle:</strong> Fixed resistance element - outputs same power per metre regardless of ambient temperature<br>
        <strong>Construction:</strong> Nichrome (NiCr) resistance wire spiralled around an insulated core; oversheathed<br>
        <strong>Output:</strong> e.g. <span class="n-val">10 W/m, 20 W/m, 30 W/m</span> - fixed by resistance/metre<br>
        <strong>Control:</strong> External thermostat required (on/off) to prevent overheating in warm weather<br>
        <strong>Advantages:</strong> Can be cut to exact length during installation; simpler construction; suitable for very low temperatures<br>
        <strong>Disadvantages:</strong> Risk of overheating if thermostat fails or if cable is overlapped/covered; higher energy use in mild conditions<br>
        <strong>Marine use:</strong> HFO tank heating, lube oil lines, fixed installations where length is predetermined
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green)">
      <div class="card-title" style="color:var(--green)">Self-Regulating (SR)</div>
      <div class="card-desc">
        <strong>Principle:</strong> Conductive polymer core between two parallel conductors - resistance increases as temperature rises (PTC: Positive Temperature Coefficient)<br>
        <strong>Construction:</strong> Two copper bus wires running length of cable; conductive polymer matrix between them; polymer expands at high temp → increases resistance → reduces current → reduces heat output<br>
        <strong>Output:</strong> High W/m in cold conditions, automatically reduces output as pipe/ambient warms<br>
        <strong>Control:</strong> Self-regulating - no thermostat needed; cannot overheat (but external thermostat recommended for energy saving)<br>
        <strong>Advantages:</strong> Cannot burn out if overlapped; energy efficient; can be cut to any length on site<br>
        <strong>Disadvantages:</strong> Higher cost; limited maximum temperature; cannot be used in hazardous areas without Ex-rated version<br>
        <strong>Marine use:</strong> Freshwater pipes in unheated exterior spaces, exposed deck piping - most common for freeze protection
      </div>
    </div>
  </div>

  <div class="n-h2">Trace Heating System Components</div>
  <ul class="n-list">
    <li><strong>Heating cable:</strong> Self-regulating or constant wattage, rated for the pipe temperature and ambient. For HFO lines: may need <span class="n-val">60–80°C</span> pipe temperature - mineral insulated (MI) or high-temperature SR cable.</li>
    <li><strong>Thermal insulation:</strong> Applied over the trace heating cable and pipe together. The cable heats the pipe; the insulation retains the heat. Without insulation, heat loss to ambient negates the heating effect.</li>
    <li><strong>Thermostat / controller:</strong> Pipe-contact thermostat (pipe-clip or strap-on type) senses actual pipe temperature. For constant wattage: turns cable on/off to maintain setpoint. For SR: optional but saves energy. Electronic controllers with RCD (ELCB) protection.</li>
    <li><strong>Junction box and end seal:</strong> Weatherproof IP66 junction boxes where cable terminates or joins. End seal prevents moisture ingress into cable end - critical (moisture wicks into cable causing insulation failure).</li>
    <li><strong>ELCB / GFCI protection:</strong> Each trace heating circuit MUST have Earth Leakage Circuit Breaker (ELCB) or Ground Fault Circuit Interrupter protection - <span class="n-val">30 mA trip threshold</span>. Heating cables have significant capacitance to earth and are installed in wet/damp environments.</li>
  </ul>

  <div class="n-h2">Trace Heating - ETO Testing and Maintenance</div>
  <table class="n-table">
    <tr><th>Test</th><th>Method</th><th>Acceptance</th></tr>
    <tr><td>Insulation resistance check (annual)</td><td class="hl">Megger at <span class="n-val">500V DC</span> between both bus wires shorted together and earth/braid. Disconnect from controller first.</td><td class="ok">Minimum <span class="n-val">20 MΩ</span> for new / <span class="n-val">1 MΩ</span> minimum in service</td></tr>
    <tr><td>Continuity check (annual)</td><td class="hl">Verify resistance between bus wires at end of circuit. Compare to installation record (SR cable resistance changes with age - trending more useful than absolute value).</td><td class="ok">Within 10% of installation value</td></tr>
    <tr><td>Current draw check (functional)</td><td class="hl">Clamp meter on supply conductor at panel. Measure operating current at known ambient temperature.</td><td class="ok">Consistent with design current. Large increase = insulation degradation; large decrease = open-circuit section.</td></tr>
    <tr><td>ELCB test (monthly)</td><td class="hl">Press test button on ELCB. Breaker must trip. Reset and verify heating circuit resumes.</td><td class="ok">ELCB trips on test button press</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Do not megger an SR trace heating cable without first confirming it is disconnected from its control panel.</strong> The SR polymer can give apparently high resistance readings when cold that do not reflect its operational state - always compare to installation records. Never apply more than <span class="n-val">500V DC</span> to SR cable - higher voltage damages the polymer matrix permanently.</div></div>


  <!-- ═══ SECTION 13: PENETRATIONS ═══ -->
  <div class="n-h1" id="s-penetrations">🚢 Bulkhead Penetrations &amp; Busbar Thermography</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS watertight integrity + infrared hotspot detection - surveyors ask both. Cables through watertight and fire-rated bulkheads must maintain subdivision integrity.</strong></div></div>

  <div class="n-h2">Class-Approved Bulkhead Penetration Methods</div>
  <ul class="n-list">
    <li><strong>Multi-Cable Transits (MCT) - most common:</strong> Steel frame seal-welded into bulkhead. Elastomeric chloroprene rubber modules packed around each cable. Clamping bolts compress blocks, forcing rubber to seal against cable sheaths. For A-class fire boundaries: intumescent modules (expand above ~200°C to seal off fire/smoke path). Fire rating maintained even if cable burns away - intumescent seals the gap.</li>
    <li><strong>Individual Glands (Stuffing Box):</strong> Watertight armoured cable gland (A2 type, BS 6121) threaded through bulkhead plate. Mechanically clamps armour wires and seals outer sheath using compressed neoprene rings. Suitable for single cable penetrations through watertight boundaries.</li>
    <li><strong>Pipe Sleeve with Epoxy Pour:</strong> Steel sleeve welded through bulkhead. Cables passed through. Remaining space backfilled with class-approved fire-retardant epoxy or intumescent sealing compound. Used where multiple cables pass through a sleeve. Inspection: verify compound integrity; no cracking, shrinkage, or bypass paths.</li>
  </ul>

  <div class="n-h2">Busbar Maintenance &amp; Thermographic Hotspot Detection</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Busbar construction:</strong> High-conductivity solid copper bars, tin or silver plated to prevent contact oxidation. Mounted on cast-resin standoff insulators. Joints bolted with calculated torque values.</div></div>
  <table class="n-table">
    <tr><th>Test</th><th>Method</th><th>Acceptance Criterion</th></tr>
    <tr><td><strong>Infrared thermography (live)</strong></td><td>IR camera on active loaded busbars during normal operation</td><td class="bad">Any joint &gt;<span class="n-val">10°C above ambient</span> busbar temperature = immediate isolation + retorque. High contact resistance → I²R hotspot → flashover risk. Temperature rise proportional to contact resistance (Joule heating).</td></tr>
    <tr><td><strong>Survey meggering (dead)</strong></td><td><span class="n-val">500V DC</span> megger, all ACBs open (LOTO)</td><td class="hl">Absolute minimum <span class="n-val">1 MΩ</span> phase-to-earth. Clean switchboard should read &gt;<span class="n-val">100 MΩ</span>. Insulators with carbon tracking or cracks must be replaced.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> MCT = intumescent rubber modules for fire-rated bulkheads. Busbar hotspot &gt;10°C above ambient = retorque immediately. DLRO Kelvin 4-wire bypasses lead resistance - essential for low-resistance cable and joint verification.</div></div>


  <div class="n-h2">CT Accuracy Classes - 0.2 vs 0.2S</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Current Transformer (CT) accuracy class</strong> defines the maximum ratio and phase-angle error over a specified range of primary current. Two similar-looking classes cause frequent confusion:<br><br>
  <strong>Class 0.2:</strong> Meets the <span class="n-val">±0.2%</span> ratio error specification across <strong>20%–120% of rated primary current (In)</strong>. Suitable for revenue metering where loads are typically well above 20% of full load.<br><br>
  <strong>Class 0.2S (S = Special/Extended):</strong> Meets the <span class="n-val">±0.2%</span> ratio error across a wider range - <strong>1%–120% of rated primary current</strong>. The "S" class performs accurately even at very low load currents (down to 1% of In). Required for installations where loads frequently operate at very low fractions of rated current, such as vessel shore connection metering, partial-load billing, or energy management systems on ships.<br><br>
  <strong>Practical implication:</strong> If a Class 0.2 CT is used where current rarely exceeds 5% of In (e.g. small loads on a large main CT), the meter reads with large error. A Class 0.2S CT eliminates this by being accurate all the way down to 1% In.<br>
  <strong>Also: Protection CTs vs Metering CTs</strong> - Protection CTs (Class 5P, 10P) are designed to remain linear up to 20× rated current and drive relay coils; metering CTs (Class 0.2/0.2S) are designed for accuracy at normal load currents and will saturate at fault currents, protecting the connected meter.</div></div>

  <!-- ═══ SECTION 14: SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 12</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What cable is used from alternator to MSB? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> 3-core (or single-core per phase for large alternators) stranded copper conductor, XLPE-insulated, Steel Wire Armoured (SWA), LSF or LSZH outer-sheathed power cable. Voltage rated <span class="n-val">600/1000V</span>. Standard: <span class="n-val">IEC 60092-353</span>. Halogen-free and flame-retardant per SOLAS requirements. Watertight A2 glands at both ends.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why disconnect the AVR before meggering the alternator? (All surveyors)</strong><br><strong>Ideal Answer:</strong> The AVR contains low-voltage electronic components (diodes, thyristors, integrated circuits) rated for <span class="n-val">12–100V DC</span> or <span class="n-val">440V AC</span>. Applying <span class="n-val">500–1000V DC</span> from a megger immediately and permanently destroys these semiconductor junctions - irreversible damage. Also disconnect rotating diodes. Discharge the winding by shorting all stator terminals to earth for <span class="n-val">30 seconds</span> after the test - winding capacitance retains charge and is a shock hazard.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is the PI test and what values indicate good insulation? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> PI = IR at 10 minutes ÷ IR at 1 minute (same test voltage). Good dry insulation polarises over 10 minutes - IR rises significantly - PI &gt; <span class="n-val">2.0</span>. Wet insulation has steady conductive leakage - IR flat - PI ≈ 1. PI &gt;<span class="n-val">4</span> = excellent | &gt;<span class="n-val">2</span> = good | <span class="n-val">1.5–2</span> = marginal | &lt;<span class="n-val">1.5</span> = do not energise | ≈<span class="n-val">1</span> = dangerous moisture path. PI only meaningful for large machines and HV cables - thin LV insulation has negligible absorption.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Low insulation alarm from deck machinery - what action? (Sanjib, Deswal)</strong><br><strong>Ideal Answer:</strong> Check MSB earth fault indicator to identify which feeder section is affected. Isolate deck machines one by one at their MCCBs/starters until MSB indicator returns to normal - this identifies the faulty circuit. Isolate that machine. Megger test motor winding and cable separately to locate whether the fault is in the cable or the motor. If moisture: dry out terminal box/winding with heater lamps and retest before returning to service. Log all findings in the electrical maintenance record.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What happens if you ignore a low insulation alarm on a 440V system? (Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Ship uses IT (insulated neutral) system - first fault gives alarm but no trip. If ignored and a second earth fault develops on a different phase: direct phase-to-phase fault current flows through hull. Massive fault current trips relevant breakers - partial blackout, arc burning/fire risk, and fatal electric shock hazard to personnel touching connected equipment. First fault is free; second fault is a disaster.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What insulation class is the steering gear motor? The alternator? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Steering gear motor: Class H (<span class="n-val">180°C</span>) - severe duty cycle with frequent heavy overloads requires the highest temperature rating on the ship. Alternator/generator: Class F (<span class="n-val">155°C</span>) - standard for shipboard generators. Every <span class="n-val">10°C</span> above rated temperature halves insulation life (Arrhenius Rule).</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between flame retardant and fire resistant cable? (Nair, Sanjib)</strong><br><strong>Ideal Answer:</strong> Flame retardant (<span class="n-val">IEC 60332</span>): self-extinguishes when ignition source removed, does not propagate flame. Does NOT maintain circuit integrity in fire - the conductors become dead when the insulation burns. Fire resistant (<span class="n-val">IEC 60331</span>): maintains electrical circuit operation for minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span> using a mica tape layer inside the construction. Mica remains intact and insulating even after polymers burn away. Required for essential safety services: fire pumps, steering gear, emergency lighting, GMDSS, fixed fire detection.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why is LSZH cable mandated in accommodation spaces? (Nair, emerging question)</strong><br><strong>Ideal Answer:</strong> In a ship accommodation fire, the primary cause of incapacitation and death is toxic smoke inhalation, not heat. PVC cables burning in enclosed corridors produce hydrogen chloride (HCl) gas and dense black smoke causing immediate respiratory failure and zero visibility. LSZH (Low Smoke Zero Halogen) cables produce minimal smoke and no acid gas - occupants retain visibility and can breathe long enough to escape. SOLAS Reg. II-2/3 and IEC 60092-353 mandate halogen-free cables in accommodation, service spaces, and escape routes.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you find the location of an insulation fault in a cable? (Murray Loop - Sanjib, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> I would use the Murray Loop Test. At the far end of the cable, I link the faulty core to a sound core of equal cross-section, creating a loop. At the near (test) end, I connect a DC Wheatstone bridge (Murray bridge) across the two cores. I balance the bridge and read the ratio. The distance to fault = (2 × L × P) / (P + Q), where L is cable one-way length, P and Q are the bridge ratio arms. For a modern vessel, I would use a TDR - inject a pulse, measure time for reflected pulse to return, calculate distance as velocity × time / 2. Murray Loop requires only basic equipment; TDR gives a waveform display showing all faults.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is special about cable used on VFD-driven equipment? (emerging question - newer vessels)</strong><br><strong>Ideal Answer:</strong> VFD output is not a sine wave - it is a PWM (Pulse Width Modulation) signal with fast switching transitions (high dV/dt). This creates high-frequency harmonics and common-mode voltages not present in standard 50 Hz circuits. Standard SWA cable is unsuitable because: the armour is not effective for HF screening, and standard insulation suffers partial discharge from voltage spikes. VFD cable must have: 360° braid or foil screen grounded at both ends (for HF common-mode current return path), low-capacitance construction, heavy XLPE or EPR insulation rated for repetitive fast pulses, and compliance with IEC 61800-3 EMC requirements. A common-mode output choke is also installed for cable runs over 50 m.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>How do you identify and connect 6 unmarked terminals of a three-phase induction motor? (Practical procedure)</strong><br>
  <strong>Step 1 - Identify the three winding pairs:</strong> Separate all six leads. Use a continuity tester or multimeter on resistance range. Test across all combinations until you find three pairs that show continuity. Label the pairs tentatively as <span class="n-val">U1/U2</span>, <span class="n-val">V1/V2</span>, <span class="n-val">W1/W2</span>.<br><br>
  <strong>Method A - Low-Voltage Supply Method:</strong><br>
  <ol style="margin:4px 0 4px 16px">
    <li>Connect <span class="n-val">U1</span> and <span class="n-val">U2</span> as reference winding; energise with <em>reduced voltage</em> (e.g. 110–220 V AC - well below rated voltage - to avoid burning unloaded windings).</li>
    <li>Connect one end of the next unidentified pair to <span class="n-val">U2</span>. Measure AC voltage between <span class="n-val">U1</span> and the free end of that pair.</li>
    <li>If measured voltage is <em>greater than</em> the supply voltage → windings are in series-aiding (correct polarity) → label those ends <span class="n-val">V1</span> (free end) and <span class="n-val">V2</span> (end connected to U2).</li>
    <li>If measured voltage is <em>less than</em> the supply voltage → reverse the connection. Re-test and label accordingly.</li>
    <li>Repeat for the remaining unidentified pair to identify <span class="n-val">W1/W2</span>.</li>
    <li>Test run on reduced voltage and verify all three phase currents are equal before full-voltage operation.</li>
  </ol>
  <strong>Method B - Flick Test (Battery + Centre-Zero Galvanometer):</strong><br>
  <ol style="margin:4px 0 4px 16px">
    <li>Label the three pairs as A/AA, B/BB, C/CC after continuity sorting.</li>
    <li>Connect a <span class="n-val">centre-zero galvanometer</span> across one pair (e.g. A/AA). Note which end connects to the positive terminal of the meter.</li>
    <li>Briefly <em>touch</em> (do not hold) a <span class="n-val">6 V battery</span> positive to one end of the next pair (B) and negative to the other (BB). Observe needle deflection direction. If the needle deflects in the same direction as the reference winding → polarity is correct. If opposite → reverse that pair's labelling.</li>
    <li>Repeat for the third pair (C/CC).</li>
    <li>Result: three starts (A, B, C) and three finishes (AA, BB, CC) identified. For <strong>star</strong> connection: join AA+BB+CC as neutral; connect A, B, C to supply. For <strong>delta</strong>: connect A→BB, B→CC, C→AA.</li>
  </ol>
  <span class="n-val">Important:</span> Only <em>touch</em> the battery briefly - a sustained connection saturates the core and the galvanometer will not deflect on subsequent tests.</div></div>


  <!-- ═══ SECTION 15: QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 12</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Disconnect AVR before megger</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>AVR semiconductors rated <span class="n-val">12–100V</span> - megger <span class="n-val">500–1000V</span> destroys them permanently. Discharge winding 30 s after test.</td></tr>
    <tr><td>Cable from alternator to MSB</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Deswal</td><td>XLPE insulated, SWA armoured, LSZH/LSF sheathed, <span class="n-val">0.6/1 kV</span>, <span class="n-val">IEC 60092-353</span>, halogen-free</td></tr>
    <tr><td>PI test values</td><td class="hl">⭐⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>PI &gt;<span class="n-val">4</span> excellent | &gt;<span class="n-val">2</span> good | <span class="n-val">1.5–2</span> marginal | &lt;<span class="n-val">1.5</span> do not energise | ≈<span class="n-val">1</span> dangerous</td></tr>
    <tr><td>Insulation classes</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>Steering = H (<span class="n-val">180°C</span>) · Generator = F (<span class="n-val">155°C</span>) · Old pump = B (<span class="n-val">130°C</span>) · 10°C over → half life (Arrhenius)</td></tr>
    <tr><td>Test voltages (megger)</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">440V</span> equip = <span class="n-val">500V DC</span> | Alternator = <span class="n-val">1000V DC</span> | HV <span class="n-val">6.6 kV</span> = <span class="n-val">2500–5000V DC</span> | Min IR = kV+1 MΩ</td></tr>
    <tr><td>Fire resistant vs retardant</td><td class="hl">⭐⭐⭐⭐ Nair, Sanjib</td><td>Resistant = <span class="n-val">IEC 60331</span>, mica tape, <span class="n-val">3 hrs at 750°C</span> | Retardant = <span class="n-val">IEC 60332</span>, self-extinguishes only</td></tr>
    <tr><td>LSZH vs PVC</td><td class="hl">⭐⭐⭐⭐ Nair, emerging</td><td>LSZH = zero HCl, minimal smoke - mandatory accommodation. PVC = toxic HCl + dense smoke - prohibited near escape routes.</td></tr>
    <tr><td>Low insulation alarm action</td><td class="hl">⭐⭐⭐⭐ Sanjib, Deswal</td><td>MSB indicator → isolate feeders one by one → megger separately (cable vs motor) → dry out → retest before returning</td></tr>
    <tr><td>IT system - second fault</td><td class="hl">⭐⭐⭐⭐ Vishwanathan</td><td>First fault = alarm only (IT advantage). Second fault on different phase = phase-to-phase through hull = blackout + fire + fatal shock.</td></tr>
    <tr><td>Murray Loop test</td><td class="hl">⭐⭐⭐ Sanjib, Vishwanathan</td><td>Loop far end, balance bridge, distance = 2LP/(P+Q). TDR alternative: pulse travel time × velocity / 2.</td></tr>
    <tr><td>VFD cable requirements</td><td class="hl">⭐⭐⭐ Emerging - modern vessels</td><td>360° braid screen both ends earthed + low capacitance + heavy XLPE/EPR + common-mode choke for runs &gt;50 m</td></tr>
    <tr><td>Trace heating - self-regulating</td><td class="hl">⭐⭐ ETO practical knowledge</td><td>SR = PTC polymer, auto-reduces output when warm, cannot overheat. CW = fixed resistance, needs external thermostat. ELCB 30 mA mandatory on all trace heating circuits.</td></tr>
    <tr><td>Cable screening - single vs both ends</td><td class="hl">⭐⭐⭐ Instrumentation questions</td><td>Signal cable = single-ended earth (prevents ground loop). VFD power cable = both ends earthed (HF common-mode path). Min 300 mm segregation power vs signal.</td></tr>
    <tr><td>HV cable extra layers</td><td class="hl">⭐⭐⭐ Kamath</td><td>Conductor screen + insulation screen + metallic screen - equalize electric field, prevent partial discharge</td></tr>
    <tr><td>Temperature correction of IR</td><td class="hl">⭐⭐⭐ Technical depth</td><td>IR halves per 10°C rise. Correct to 40°C baseline: IR(40°C) = IR(measured) × 2^((T−40)/10)</td></tr>
  </table>

  </div>
</div>
</div>
`);
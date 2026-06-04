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
      <span class="tag tag-purple">Insulation Classes · IEC Standards</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-layers')">Cable Layers</button>
    <button class="anc-btn" onclick="jumpTo('s-standards')">IEC Standards</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">Megger IR Test</button>
    <button class="anc-btn" onclick="jumpTo('s-pi')">PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-insclass')">Insulation Classes</button>
    <button class="anc-btn" onclick="jumpTo('s-selection')">Cable Selection</button>
    <button class="anc-btn" onclick="jumpTo('s-neutral')">Insulated Neutral</button>
    <button class="anc-btn" onclick="jumpTo('s-cable-detail')">Cable Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-iec-standards')">IEC Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-megger-full')">Megger Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-pi-full')">PI Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-insclass-full')">Insclass Detail</button>
    <button class="anc-btn" onclick="jumpTo('s-penetrations')">Penetrations</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


  <div class="n-h1" id="s-layers">🔌 Cable Construction - Layers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask cable layers, megger procedure, and AVR disconnection before test.</strong></div></div>

  <div class="n-h2">LV Cable (Innermost to Outer)</div>
  <ol class="n-steps">
    <li><strong>Conductor</strong> - Stranded copper Class 2 (IEC 60228) for flexibility, reduces skin effect</li>
    <li><strong>Insulation</strong> - PVC (<span class="n-val">70°C</span> rated) or XLPE (<span class="n-val">90°C</span> rated)</li>
    <li><strong>Bedding/Inner Sheath</strong> - Extruded PVC or rubber. Cushions armour from insulation.</li>
    <li><strong>Armour</strong> - SWA (Steel Wire Armour - flexible, high tensile) or STA (Steel Tape Armour - crush resistant). Mechanical protection + earth fault current return path.</li>
    <li><strong>Outer Sheath</strong> - PVC, LSF (Low Smoke Fume), or LSZH (Low Smoke Zero Halogen). Environmental protection.</li>
  </ol>

  <div class="n-h2">HV Cable (Additional Layers)</div>
  <ol class="n-steps">
    <li><strong>Conductor</strong> - Stranded copper</li>
    <li><strong>Conductor Screen</strong> - Semi-conductive layer. Eliminates stress concentrations at conductor surface, equalises electric field.</li>
    <li><strong>Insulation</strong> - XLPE or EPR (higher temperature and voltage rating than PVC)</li>
    <li><strong>Insulation Screen</strong> - Semi-conductive. Ensures uniform electric field in insulation, prevents partial discharge.</li>
    <li><strong>Metallic Screen</strong> - Copper tape/wire. Fault current return path + screens from external electrical interference.</li>
    <li><strong>Bedding</strong> - Inner sheath</li>
    <li><strong>Armour</strong> - SWA</li>
    <li><strong>Outer Sheath</strong> - LSZH</li>
  </ol>

  <div class="n-h1" id="s-standards">📋 IEC Cable Standards</div>
  <table class="n-table">
    <tr><th>Standard</th><th>Covers</th></tr>
    <tr><td><span class="n-val">IEC 60092-353</span></td><td>Shipboard LV power cables - halogen-free, fire-retardant. Used for alternator to MSB cables.</td></tr>
    <tr><td><span class="n-val">IEC 60092-354</span></td><td>Fixed HV cables installed onboard ships</td></tr>
    <tr><td><span class="n-val">IEC 60228</span></td><td>Class 2 stranded copper conductors</td></tr>
    <tr><td><span class="n-val">IEC 60332-1/-3</span></td><td>Flame retardant cables - self-extinguish, do not propagate flame (single / bunched)</td></tr>
    <tr><td><span class="n-val">IEC 60331</span></td><td class="hl">Fire resistant - maintain circuit integrity during fire for minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span>. Required for fire pumps, steering gear.</td></tr>
  </table>

  <div class="n-h1" id="s-megger">🔍 Megger IR Test - Full Procedure</div>
  <div class="n-h2">Analogue Megger - Internal Construction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Traditional hand-cranked analogue megger uses a permanent magnet cross-coil ratiometer:</strong><br>
  • <strong>Pressure Coil (Voltage Coil):</strong> Connected in series with current-limiting resistor across generator terminals - sets up restoring torque proportional to output voltage<br>
  • <strong>Deflecting Coil (Current Coil):</strong> Connected in series with insulation under test - generates deflecting torque proportional to leakage current<br>
  • <strong>Crossing Coil:</strong> Positioned at angle to deflecting coil - stabilises pointer and controls scale distribution across MΩ/GΩ ranges<br>
  Pointer deflection = ratio of currents through coils (R = V/I). Independent of exact cranking speed - ratio is self-compensating. Modern digital variants use electronic DC/DC converter to generate stabilised high DC test voltage from batteries.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why DC not AC for IR testing?</strong> AC voltage adds capacitive current to leakage current → falsely low reading. DC voltage measures only true resistive leakage current and enables Polarisation Index testing.</div></div>

  <table class="n-table">
    <tr><th>Equipment</th><th>Test Voltage</th><th>Minimum IR</th></tr>
    <tr><td>LV (<span class="n-val">440V</span>) motors, cables</td><td class="hl"><span class="n-val">500V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span> minimum (kV + 1)</td></tr>
    <tr><td>LV alternators, transformers</td><td class="hl"><span class="n-val">1000V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span> minimum</td></tr>
    <tr><td>HV (<span class="n-val">6.6 kV</span>) cables/windings</td><td class="hl"><span class="n-val">2500–5000V DC</span></td><td class="hl"><span class="n-val">7.6 MΩ</span> (kV + 1 = 6.6 + 1)</td></tr>
    <tr><td>New equipment (typical)</td><td> - </td><td class="ok"><span class="n-val">&gt; 100 MΩ</span></td></tr>
  </table>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Disconnect AVR before meggering alternator.</strong> Megger voltages (<span class="n-val">500–1000V DC</span>) permanently and irreversibly destroy AVR semiconductor components (diodes, thyristors, ICs) rated for <span class="n-val">12–100V</span>. Also disconnect rotating diodes. Discharge winding after test by shorting to earth for minimum <span class="n-val">30 seconds</span>.</div></div>

  <div class="n-h2">Alternator IR Test Procedure</div>
  <ol class="n-steps">
    <li>Inform bridge/CE. Transfer load, open ACB.</li>
    <li>Apply LOTO (Lock Out Tag Out). Issue Electrical Isolation Permit.</li>
    <li>Disconnect AVR - mandatory before any megger test</li>
    <li>Disconnect rotating diodes and discharge capacitors</li>
    <li>Disconnect stator cables from terminals</li>
    <li>Connect megger: positive to phase terminal, negative to earth/frame. Test each phase to earth and phase-to-phase for <span class="n-val">60 seconds</span>.</li>
    <li>Record all readings. Compare with previous records and minimum values.</li>
    <li>Discharge winding - short all terminals to earth for at least <span class="n-val">30 seconds</span></li>
    <li>Reconnect all components in reverse order. Test operation before restoring to service.</li>
  </ol>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Temperature correction:</strong> Insulation resistance approximately halves for every <span class="n-val">10°C</span> rise in temperature. All readings must be corrected to <span class="n-val">40°C</span> baseline for comparison with previous records.</div></div>
  <div class="n-formula">IR(40°C) = IR(measured) × 0.5^((T−40)/10)<div class="label">T = measured winding temperature in °C · Corrects readings to standard 40°C baseline for log comparison</div></div>

  <div class="n-h1" id="s-pi">📈 Polarisation Index (PI) Test</div>
  <div class="n-formula">PI = IR(10 minutes) / IR(1 minute)<div class="label">Both readings taken at the same test voltage. PI distinguishes dry from moisture-contaminated insulation.</div></div>

  <table class="n-table">
    <tr><th>PI Value</th><th>Condition</th><th>Action</th></tr>
    <tr><td><span class="n-val">&gt; 2.0</span></td><td class="ok">Good - clean and dry</td><td class="ok">Safe to energise</td></tr>
    <tr><td><span class="n-val">1.5–2.0</span></td><td class="hl">Questionable/Marginal</td><td class="hl">Investigate, consider drying</td></tr>
    <tr><td><span class="n-val">&lt; 1.5</span></td><td class="bad">Poor</td><td class="bad">Do NOT energise - dry thoroughly</td></tr>
    <tr><td><span class="n-val">≈ 1.0</span></td><td class="bad">Very poor/Dangerous</td><td class="bad">Conductive moisture path - do NOT energise</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why PI test works:</strong> Good dry insulation has significant dielectric absorption - IR reading rises over 10 minutes as the dielectric polarises (PI &gt; 2). Wet/contaminated insulation has steady conductive leakage that dominates - IR stays flat (PI ≈ 1). A single 1-minute IR reading can miss moisture that PI detects.<br><strong>Why only for HV and large machines:</strong> Large insulation volume has significant dielectric absorption. Small LV motors have thin insulation where absorption current is negligible - PI test gives no useful information.</div></div>

  <div class="n-h1" id="s-insclass">🌡️ Insulation Classes</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Vishwanathan ask:</strong> "What insulation class is the steering gear motor?" - Class H. "What class is the alternator?" - Class F. Know all classes and their temperatures.</div></div>

  <table class="n-table">
    <tr><th>Class</th><th>Max Temperature</th><th>Typical Ship Use</th></tr>
    <tr><td>A</td><td><span class="n-val">105°C</span></td><td>Older small motors</td></tr>
    <tr><td>E</td><td><span class="n-val">120°C</span></td><td>General purpose</td></tr>
    <tr><td>B</td><td><span class="n-val">130°C</span></td><td>SW cooling pumps (older vessels)</td></tr>
    <tr><td class="hl">F</td><td class="hl"><span class="n-val">155°C</span></td><td class="hl">Generators, alternators, deck motors, modern pumps - standard</td></tr>
    <tr><td class="hl">H</td><td class="hl"><span class="n-val">180°C</span></td><td class="hl">Steering gear motors (severe duty, frequent overloads)</td></tr>
    <tr><td>C</td><td><span class="n-val">&gt;180°C</span></td><td>Not common on merchant ships</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exceeding insulation class temperature by <span class="n-val">10°C</span> halves the insulation life.</strong> A Class F motor run at <span class="n-val">165°C</span> instead of <span class="n-val">155°C</span> will have half the expected service life.</div></div>

  <div class="n-h1" id="s-selection">📦 Cable Selection - How to Order</div>
  <ul class="n-list">
    <li><strong>Voltage rating:</strong> e.g. <span class="n-val">0.6/1 kV</span> for LV, <span class="n-val">3.8/6.6 kV</span> for MV</li>
    <li><strong>Number of cores:</strong> 3-core or 4-core</li>
    <li><strong>Conductor cross-section:</strong> e.g. <span class="n-val">25 mm²</span>, <span class="n-val">95 mm²</span></li>
    <li><strong>Conductor material:</strong> Class 2 stranded copper (<span class="n-val">IEC 60228</span>)</li>
    <li><strong>Insulation type:</strong> PVC, XLPE, or EPR</li>
    <li><strong>Armour type:</strong> SWA or STA</li>
    <li><strong>Outer sheath:</strong> LSZH, LSF, or PVC</li>
    <li><strong>Fire performance:</strong> Flame retardant (<span class="n-val">IEC 60332</span>) or Fire Resistant (<span class="n-val">IEC 60331</span>)</li>
    <li><strong>Applicable standard:</strong> e.g. <span class="n-val">IEC 60092-353</span></li>
    <li><strong>Length:</strong> Measured length <span class="n-val">+10–15%</span> allowance</li>
    <li><strong>Glands:</strong> Watertight A2 type per <span class="n-val">BS 6121</span></li>
  </ul>

  <div class="n-h1" id="s-neutral">⚡ Insulated Neutral System</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Advantage of insulated (IT) neutral:</strong> First earth fault does NOT create a complete short-circuit path - no blackout, no trip. System continues running while insulation monitoring device (IMS/IRM) gives alarm. ETO has time to safely locate and repair the fault. Lower shock risk on first fault.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>What if you ignore a low insulation alarm?</strong> Insulated neutral system is degraded to effectively earthed. If a second earth fault develops on a different phase - direct phase-to-phase fault through the hull. Massive fault current → trips breakers → partial blackout, arc burning/fire, fatal shock hazard to personnel touching connected metalwork.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Disconnect AVR before megger - always. PI &gt; 2 = good, &lt; 1.5 = don't energise. Class F = 155°C generator standard. Class H = 180°C steering. IEC 60331 = fire resistant (3 hrs at 750°C) for steering and fire pump cables.</div></div>

  
  <!-- ═══ T12 EXPANDED FROM DOCX ═══ -->

  <div class="n-h1" id="s-cable-detail">🔌 Cable Construction - Full Detail</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask cable layers and IEC standards.</strong> Know LV vs HV difference, and why fire-resistant vs flame-retardant matters for essential services.</div></div>
  <div class="n-h2">LV Cable - Layer by Layer (Innermost to Outer)</div>
  <ol class="n-steps">
    <li><strong>Conductor</strong> - stranded copper Class 2 (IEC 60228). Stranded for flexibility, reduces skin effect at power frequencies.</li>
    <li><strong>Insulation</strong> - XLPE (90°C rated, superior) or PVC (70°C). Provides electrical isolation between conductor and earth.</li>
    <li><strong>Bedding (Inner Sheath)</strong> - extruded PVC or rubber. Cushions armour wires from cutting into insulation. Also provides secondary environmental protection.</li>
    <li><strong>Armour</strong> - SWA (Steel Wire Armour): flexible, high tensile strength, good for cables that bend. STA (Steel Tape Armour): better crush resistance, for fixed installations. Functions: mechanical protection AND earth fault current return path.</li>
    <li><strong>Outer Sheath</strong> - LSF (Low Smoke Fume) or LSZH (Low Smoke Zero Halogen). Final environmental protection: UV, oil, moisture, chemicals. Fire performance determined by sheath material.</li>
  </ol>
  <div class="n-h2">HV Cable - Additional Layers (6.6 kV+)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Extra layers needed in HV cables:</strong><br>
  <strong>Conductor Screen</strong> - semi-conductive layer over conductor. Eliminates electrical stress concentration at conductor surface, equalises the electric field across insulation. Without it: field peaks at conductor surface → partial discharge → insulation damage.<br>
  <strong>Insulation Screen</strong> - semi-conductive layer over insulation. Ensures uniform electric field in insulation, prevents partial discharge at insulation/metallic screen interface.<br>
  <strong>Metallic Screen</strong> - copper tape or wire over insulation screen. Fault current return path + screens from external electrical interference.</div></div>

  <div class="n-h1" id="s-iec-standards">📋 IEC Cable Standards - Know All</div>
  <table class="n-table">
    <tr><th>Standard</th><th>Type</th><th>Key Requirement</th><th>Mandatory For</th></tr>
    <tr><td><span class="n-val">IEC 60092-353</span></td><td>Shipboard LV power cables</td><td>Halogen-free, flame-retardant - for marine environments</td><td>Alternator to MSB, general power distribution</td></tr>
    <tr><td><span class="n-val">IEC 60092-354</span></td><td>Shipboard HV cables</td><td>Fixed HV cable installation onboard</td><td>6.6 kV, 11 kV distribution</td></tr>
    <tr><td><span class="n-val">IEC 60228</span></td><td>Conductor standard</td><td>Class 2 stranded copper construction</td><td>All marine power cables</td></tr>
    <tr><td><span class="n-val">IEC 60332-1/-3</span></td><td>FLAME RETARDANT</td><td>Self-extinguishes when ignition source removed. Does NOT maintain circuit integrity in fire.</td><td>General cables in enclosed spaces</td></tr>
    <tr><td class="hl"><span class="n-val">IEC 60331</span></td><td class="hl">FIRE RESISTANT</td><td class="hl">Maintains circuit integrity minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span> using mica tape layer</td><td class="bad">MANDATORY for essential services: fire pumps, steering gear, emergency lighting, GMDSS</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Flame retardant ≠ Fire resistant.</strong> IEC 60332 = cable stops burning when ignition removed. Does NOT keep circuit alive in fire. IEC 60331 = circuit stays alive for 3 hours at 750°C - essential for safety systems that must operate DURING a fire.</div></div>

  <div class="n-h1" id="s-megger-full">🔍 Megger IR Test - Complete Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask: why disconnect AVR before meggering.</strong> Also know test voltages for LV vs HV and why DC not AC.</div></div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Megger Voltage</th><th>Minimum IR</th><th>Notes</th></tr>
    <tr><td>LV motors, cables (<span class="n-val">440V</span>)</td><td class="hl"><span class="n-val">500V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span></td><td>Below this = do NOT energise</td></tr>
    <tr><td>LV alternators, transformers</td><td class="hl"><span class="n-val">1000V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span></td><td>Stresses insulation adequately</td></tr>
    <tr><td>HV equipment (<span class="n-val">6.6 kV</span>)</td><td class="hl"><span class="n-val">2500–5000V DC</span></td><td class="hl"><span class="n-val">7.6 MΩ</span> (kV+1)</td><td>Must meaningfully stress HV insulation</td></tr>
    <tr><td>New equipment</td><td> - </td><td class="ok">&gt;<span class="n-val">100 MΩ</span> typical</td><td>Much higher than minimum when new</td></tr>
  </table>
  <div class="n-h2">Analogue Megger - Internal Construction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Traditional hand-cranked analogue megger uses a permanent magnet cross-coil ratiometer:</strong><br>
  • <strong>Pressure Coil (Voltage Coil):</strong> Connected in series with current-limiting resistor across generator terminals - sets up restoring torque proportional to output voltage<br>
  • <strong>Deflecting Coil (Current Coil):</strong> Connected in series with insulation under test - generates deflecting torque proportional to leakage current<br>
  • <strong>Crossing Coil:</strong> Positioned at angle to deflecting coil - stabilises pointer and controls scale distribution across MΩ/GΩ ranges<br>
  Pointer deflection = ratio of currents through coils (R = V/I). Independent of exact cranking speed - ratio is self-compensating. Modern digital variants use electronic DC/DC converter to generate stabilised high DC test voltage from batteries.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why DC not AC for IR testing?</strong> Cables and windings act as capacitors. AC voltage causes continuous capacitive charge/discharge current which adds to leakage current → artificially low IR reading. DC: after initial capacitive charge settles (absorption current), only true resistive leakage remains → accurate insulation resistance measurement.</div></div>
  <div class="n-h2">Alternator IR Test Procedure</div>
  <ol class="n-steps">
    <li>Inform bridge/CE - transfer load, open ACB</li>
    <li>Apply LOTO (Lock Out Tag Out). Issue Electrical Isolation Permit.</li>
    <li><strong>Disconnect AVR - MANDATORY.</strong> AVR semiconductors (thyristors 12–100V DC rated) destroyed instantly by 500–1000V megger voltage.</li>
    <li>Disconnect rotating diodes and discharge capacitors</li>
    <li>Disconnect stator cables from terminals</li>
    <li>Connect megger: positive to phase terminal, negative to earth/frame. Test each phase to earth and phase-to-phase for <span class="n-val">60 seconds</span>.</li>
    <li>Record all readings. Compare with previous.</li>
    <li><strong>Discharge winding</strong> - short all terminals to earth for minimum <span class="n-val">30 seconds</span>. Winding capacitance retains charge = shock hazard.</li>
    <li>Reconnect all in reverse order. Test operation before restoring service.</li>
  </ol>

  <div class="n-h1" id="s-pi-full">📈 Polarisation Index (PI) - Full Detail</div>
  <div class="n-formula">PI = IR(10 minutes) / IR(1 minute)<div class="label">Both readings at same DC test voltage · Distinguishes dry from moisture-contaminated insulation</div></div>
  <table class="n-table">
    <tr><th>PI Value</th><th>Condition</th><th>Action</th></tr>
    <tr><td><span class="n-val">&gt; 2.0</span></td><td class="ok">Good - clean and dry</td><td class="ok">Safe to energise</td></tr>
    <tr><td><span class="n-val">1.5–2.0</span></td><td class="hl">Questionable/Marginal</td><td class="hl">Investigate, consider drying out</td></tr>
    <tr><td><span class="n-val">&lt; 1.5</span></td><td class="bad">Poor - moisture/contamination</td><td class="bad">Do NOT energise - dry out first</td></tr>
    <tr><td><span class="n-val">≈ 1.0</span></td><td class="bad">Very poor/Dangerous</td><td class="bad">Conductive moisture path - do NOT energise</td></tr>
  </table>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>EXAM CRITICAL (All Surveyors): "What is the significance of waiting 10 minutes?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>When megger voltage is applied, three currents flow:</strong></div></div>
  <ul class="n-list">
    <li><strong>1. Capacitive charging current:</strong> Decays within the first few seconds. Due to the cable's inherent capacitance charging up.</li>
    <li><strong>2. Absorption current:</strong> Decays over minutes. Due to dielectric polarisation of insulation molecules aligning with the electric field.</li>
    <li><strong>3. True leakage current:</strong> Remains constant throughout. This is the current that actually flows through impurities/defects in the insulation.</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why wait 10 minutes?</strong> At 1 minute, the absorption current is still significant, so the IR reading appears lower than the true insulation resistance. By 10 minutes, the absorption current has largely decayed, leaving only the true leakage current. This gives a highly accurate IR value. If the insulation is wet/dirty, the conductive leakage current dominates from the start, and the IR stays flat (PI ≈ 1). A high PI means insulation polarises well (clean/dry). PI is only useful for HV and large machine windings (thin LV insulation has negligible absorption).</div></div>

  <div class="n-h1" id="s-insclass-full">🌡️ Insulation Classes - All Values</div>
  <table class="n-table">
    <tr><th>Class</th><th>Max Temp</th><th>Typical Ship Use</th></tr>
    <tr><td>A</td><td><span class="n-val">105°C</span></td><td>Older small motors</td></tr>
    <tr><td>E</td><td><span class="n-val">120°C</span></td><td>General purpose older equipment</td></tr>
    <tr><td>B</td><td><span class="n-val">130°C</span></td><td>SW cooling pumps (older vessels)</td></tr>
    <tr><td class="hl">F</td><td class="hl"><span class="n-val">155°C</span></td><td class="hl">Generators/alternators, deck motors, modern pump motors - standard</td></tr>
    <tr><td class="hl">H</td><td class="hl"><span class="n-val">180°C</span></td><td class="hl">Steering gear motors (severe duty, frequent overloads) - highest on ships</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Arrhenius rule: every 10°C above rated class temperature HALVES insulation service life.</strong> A Class F motor at 165°C instead of 155°C = half the expected life. This is why motor winding temperature monitoring is critical.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Disconnect AVR before megger - always. PI &gt; 2 = good, &lt; 1.5 = don't energise. Class F = 155°C standard. Class H = 180°C steering. IEC 60331 = fire resistant (3 hrs at 750°C) for steering and fire pump cables. IEC 60332 = flame retardant only.</div></div>



  <!-- ═══ T12 ADDITIONAL SECTIONS ═══ -->

  <div class="n-h1" id="s-penetrations">🚢 Bulkhead Penetrations &amp; Busbar Thermography</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>SOLAS watertight integrity + infrared hotspot detection - surveyors ask both.</strong></div></div>
  <div class="n-h2">Class-Approved Bulkhead Penetration Methods</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Cables through watertight bulkheads must maintain subdivision integrity - three approved methods:</strong></div></div>
  <ul class="n-list">
    <li><strong>Multi-Cable Transits (MCT) - most common:</strong> Steel frame seal-welded into bulkhead. Elastomeric chloroprene rubber modules packed around each cable. Clamping bolts compress blocks, forcing rubber to seal against cable sheaths. For A-class fire boundaries: intumescent modules (expand above ~200°C to seal off fire/smoke path).</li>
    <li><strong>Individual Glands (Stuffing Box):</strong> Watertight armoured cable gland (A2 type, BS 6121) threaded through bulkhead plate. Mechanically clamps armour wires and seals outer sheath using compressed neoprene rings.</li>
    <li><strong>Pipe Sleeve with Epoxy Pour:</strong> Steel sleeve welded through bulkhead. Cables passed through. Remaining space backfilled with class-approved fire-retardant epoxy or intumescent sealing compound.</li>
  </ul>
  <div class="n-h2">Busbar Maintenance &amp; Thermographic Hotspot Detection</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Busbar construction:</strong> High-conductivity solid copper bars, tin or silver plated to prevent contact oxidation. Mounted on cast-resin standoff insulators.</div></div>
  <table class="n-table">
    <tr><th>Test</th><th>Method</th><th>Acceptance Criterion</th></tr>
    <tr><td><strong>Infrared thermography (live)</strong></td><td>IR camera on active loaded busbars</td><td class="bad">Any joint &gt;<span class="n-val">10°C above ambient</span> busbar temperature = immediate isolation + retorque. High contact resistance → I²R hotspot → flashover risk.</td></tr>
    <tr><td><strong>Survey meggering (dead)</strong></td><td><span class="n-val">500V DC</span> megger, all ACBs open (LOTO)</td><td class="hl">Absolute minimum <span class="n-val">1 MΩ</span> phase-to-earth. Clean switchboard should read &gt;<span class="n-val">100 MΩ</span>. Insulators with carbon tracking or cracks must be replaced.</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> MCT = intumescent rubber modules for fire-rated bulkheads. Busbar hotspot &gt;10°C above ambient = retorque immediately. NER 6.6 kV with 5A fault limit = 762 Ω. DLRO Kelvin 4-wire bypasses lead resistance - essential for low-resistance cable verification.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Q&amp;A - Topic 12</div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What cable is used from alternator to MSB? (Kamath, Deswal)</strong><br><strong>Ideal Answer:</strong> 3-core (or single-core per phase) stranded copper conductor, XLPE-insulated, Steel Wire Armoured (SWA), LSF or LSZH sheathed power cable. Voltage rated <span class="n-val">600/1000V</span>. Standard: <span class="n-val">IEC 60092-353</span>.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Why disconnect the AVR before meggering the alternator? (All surveyors)</strong><br><strong>Ideal Answer:</strong> The AVR contains low-voltage electronic components (diodes, thyristors, integrated circuits) rated for <span class="n-val">12–100V DC</span> or <span class="n-val">440V AC</span>. Applying <span class="n-val">500–1000V DC</span> from a megger immediately and permanently destroys these semiconductor junctions - irreversible damage. Also discharge the winding by shorting to earth for <span class="n-val">30 seconds</span> after the test.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is PI test and what values indicate good insulation? (Vishwanathan, Kamath)</strong><br><strong>Ideal Answer:</strong> PI = IR at 10 minutes ÷ IR at 1 minute (same test voltage). Good dry insulation polarises over 10 minutes - IR rises - PI &gt; <span class="n-val">2.0</span>. Wet insulation has steady conductive leakage - IR flat - PI ≈ 1. PI &gt;<span class="n-val">2</span> = good | <span class="n-val">1.5–2</span> = marginal | &lt;<span class="n-val">1.5</span> = do not energise | ≈<span class="n-val">1</span> = dangerous moisture path.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Low insulation alarm from deck machinery - what action? (Sanjib, Deswal)</strong><br><strong>Ideal Answer:</strong> Check MSB earth fault indicator to identify affected circuit. Isolate deck machines one by one at their MCCBs until MSB indicator returns to normal - identify faulty circuit. Isolate that machine. Megger test motor winding and cable separately to locate fault. If moisture: dry out terminal box/winding with heater lamps and retest before returning to service. Log all findings.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What happens if you ignore a low insulation alarm on a 440V system? (Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Ship uses IT (insulated neutral) system - first fault gives alarm but no trip. If ignored and a second earth fault develops on a different phase: direct phase-to-phase fault current flows through hull. Massive fault current trips relevant breakers - partial blackout, arc burning/fire risk, and fatal electric shock hazard to personnel touching connected equipment.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What insulation class is the steering gear motor? The alternator? (Kamath, Vishwanathan)</strong><br><strong>Ideal Answer:</strong> Steering gear motor: Class H (<span class="n-val">180°C</span>) - severe duty cycle with frequent heavy overloads requires highest temperature rating. Alternator: Class F (<span class="n-val">155°C</span>) - standard for generators. Every <span class="n-val">10°C</span> above rated temperature halves insulation life.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>Difference between flame retardant and fire resistant cable? (Nair, Sanjib)</strong><br><strong>Ideal Answer:</strong> Flame retardant (<span class="n-val">IEC 60332</span>): self-extinguishes when ignition source removed, does not propagate flame. Does NOT maintain circuit integrity in fire. Fire resistant (<span class="n-val">IEC 60331</span>): maintains electrical circuit operation for minimum <span class="n-val">3 hours</span> at <span class="n-val">750°C</span> using a mica tape layer. Required for essential safety services: fire pumps, steering gear, emergency lighting.</div></div>

  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Topic 12</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points</th></tr>
    <tr><td>Disconnect AVR before megger</td><td class="hl">⭐⭐⭐⭐⭐ All surveyors</td><td>AVR semiconductors rated <span class="n-val">12–100V</span> - megger <span class="n-val">500–1000V</span> destroys them permanently</td></tr>
    <tr><td>Cable from alternator to MSB</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Deswal</td><td>XLPE, SWA, LSF, <span class="n-val">0.6/1 kV</span>, <span class="n-val">IEC 60092-353</span></td></tr>
    <tr><td>PI test values</td><td class="hl">⭐⭐⭐⭐⭐ Vishwanathan, Kamath</td><td>PI &gt;<span class="n-val">2</span> good | <span class="n-val">1.5–2</span> marginal | &lt;<span class="n-val">1.5</span> do not energise</td></tr>
    <tr><td>Insulation classes</td><td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td><td>Steering = H (<span class="n-val">180°C</span>) | Generator = F (<span class="n-val">155°C</span>) | SW pump = B/F | 10°C over = half life</td></tr>
    <tr><td>Test voltages</td><td class="hl">⭐⭐⭐⭐ Multiple surveyors</td><td><span class="n-val">440V</span> equipment = <span class="n-val">500V DC</span> | HV <span class="n-val">6.6 kV</span> = <span class="n-val">2500–5000V DC</span> | Min IR = kV+1 MΩ</td></tr>
    <tr><td>Fire resistant vs retardant</td><td class="hl">⭐⭐⭐⭐ Nair, Sanjib</td><td>Resistant = <span class="n-val">IEC 60331</span>, <span class="n-val">3 hrs</span> at <span class="n-val">750°C</span> | Retardant = <span class="n-val">IEC 60332</span>, self-extinguishes</td></tr>
    <tr><td>Low insulation alarm action</td><td class="hl">⭐⭐⭐⭐ Sanjib, Deswal</td><td>MSB indicator → isolate one by one → megger separately → dry out → retest</td></tr>
  </table>

    </div>
</div>
</div>
`);

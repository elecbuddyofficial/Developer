window.loadNotes("T20", `<div class="view" id="view-notes-t20">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T20')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 20 - Ship Construction</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-hull')">Hogging & Sagging</button>
    <button class="anc-btn" onclick="jumpTo('s-stability')">Stability & GM</button>
    <button class="anc-btn" onclick="jumpTo('s-structure')">Ship Structure</button>
    <button class="anc-btn" onclick="jumpTo('s-motorframe')">Motor Frame No.</button>
    <button class="anc-btn" onclick="jumpTo('s-esb')">ESB & 2 ACBs</button>
    <button class="anc-btn" onclick="jumpTo('s-seqstart')">Sequential Start</button>
    <button class="anc-btn" onclick="jumpTo('s-container')">CSC & Container Fire</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> IEC motor frame number decoding. Sequential starting timings. ESB connected equipment. Hogging vs sagging. Stability GM limits. Container CSC convention.</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-hull">1. Hogging, Sagging, Shear Force & Bending Moment</div>
  
  <ul class="n-list">
    <li><strong>Sagging:</strong> Centre buoyancy < centre weight. Ship bends like a hammock (ends up, middle down). Can happen with wave trough amidships. <strong>Keel is in TENSION, deck in COMPRESSION.</strong></li>
    <li><strong>Hogging:</strong> Centre buoyancy > centre weight. Ship bends like a bridge arch (ends down, middle up). Can happen with wave crest amidships. <strong>Keel is in COMPRESSION, deck in TENSION.</strong></li>
    <li><strong>Shear Force (SF):</strong> Internal vertical sliding force at a cross-section due to weight/buoyancy imbalance. Max at bulkheads.</li>
    <li><strong>Bending Moment (BM):</strong> Rotational bending force. Maximum where Shear Force is zero (typically amidships). Loading computers calculate SF and BM to prevent hull failure.</li>
  </ul>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-stability">2. Stability - GM, KG, KB, BM, GZ Curve</div>
  
  <table class="n-table">
    <tr><th>TERM</th><th>DEFINITION</th></tr>
    <tr><td><strong>K (Keel)</strong></td><td>Baseline reference point at the bottom of the ship.</td></tr>
    <tr><td><strong>B (Centre of Buoyancy)</strong></td><td>Geometric centre of underwater volume. Upward buoyancy force acts here.</td></tr>
    <tr><td><strong>G (Centre of Gravity)</strong></td><td>Point through which total ship weight acts downwards.</td></tr>
    <tr><td><strong>M (Metacentre)</strong></td><td>Point about which ship rotates at small heel angles.</td></tr>
    <tr><td><strong>GM (Metacentric Height)</strong></td><td>Distance between G and M. (GM = KM - KG). <strong>Minimum GM = 0.15m</strong> for cargo ships. Positive GM = Stable (righting moment). Negative GM = Unstable (capsizing moment).</td></tr>
  </table>
  <div class="n-h2">GZ Curve (Righting Lever)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>The GZ lever</strong> is the horizontal distance between the vertical lines of action of buoyancy (B) and gravity (G) at a given angle of heel. It represents the ship's actual ability to resist capsizing at that specific angle - not just at small angles like GM does.<br><br>
  <strong>Reading the GZ curve:</strong><br>
  • <strong>Positive GZ (curve above zero):</strong> The ship has a righting moment - it will return to upright.<br>
  • <strong>Angle of Vanishing Stability:</strong> The angle where the GZ curve crosses zero again - beyond this point the ship cannot recover and will capsize.<br>
  • <strong>Area under the curve:</strong> Represents the total energy needed to capsize the ship. A larger area = greater reserve of stability.<br>
  • <strong>Minimum requirements (SOLAS A.749):</strong> GZ ≥ <span class="n-val">0.20 m</span> at 30° heel · Angle of max GZ ≥ <span class="n-val">25°</span> · Righting lever area 0°–30° ≥ <span class="n-val">0.055 m·rad</span><br><br>
  <strong>Key difference from GM:</strong> GM tells you stability at small angles only. GZ curve tells you stability across the full range of heel angles - this is what matters in heavy weather.</div></div>



  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-structure">3. Ship Structure - Bulkhead & Load Line</div>
  
  <ul class="n-list">
    <li><strong>Bulkhead:</strong> Vertical partition. <strong>Watertight</strong> prevents flooding spread (Collision bulkhead is 5-8% from bow). <strong>Fire</strong> (A-Class <span class="n-val">60 min</span>, B-Class <span class="n-val">30 min</span>). <strong>Structural</strong> adds strength. Thickness is 8-16mm.</li>
    <li><strong>Keel:</strong> Backbone of ship. Types: Flat plate (modern), Bar keel (old), Bilge keel (anti-rolling fins on side).</li>
    <li><strong>Load Line (Plimsoll Mark):</strong> Indicates max loading depth. TF (Tropical Fresh), F (Fresh), T (Tropical), S (Summer - Standard Reference), W (Winter), WNA (Winter North Atlantic - harshest).</li>
    <li><strong>Ship Frame Number:</strong> Transverse ribs numbered from aft to bow. Identifies exact locations for cables/pipes (e.g. "Frame 80 Port").</li>
  </ul>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-motorframe">4. Motor Frame Number (IEC Standard)</div>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> The IEC motor frame number directly indicates the <strong>shaft centre height in millimetres</strong> from the mounting base.</div></div>
  
  <ul class="n-list">
    <li><strong>Example:</strong> IEC 132M B3 means the shaft center is <strong>132 mm</strong> above the base. M = Medium length body. B3 = Foot mounted.</li>
    <li><strong>Why is it important?</strong> When ordering a replacement motor, matching the frame number guarantees the motor will fit the existing foundation footprint, bolt holes, and coupling height perfectly without modifications.</li>
    <li><strong>Suffixes:</strong> S (Short shaft), L (Long body), B5 (Flange mount).</li>
  </ul>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-esb">5. Emergency Switchboard (ESB) & 2 ACBs</div>
  
  <div class="n-p"><strong>Equipment Connected to ESB (SOLAS II-1/42):</strong></div>
  <ul class="n-list">
    <li>Navigation Lights & Emergency Lighting (muster, escape, engine room)</li>
    <li>GMDSS Radio Equipment</li>
    <li>Fire Detection & General Alarm / PA System</li>
    <li>Steering Gear (One power unit)</li>
    <li>Emergency Fire Pump & 1 Bilge Pump</li>
    <li>Watertight Door Controls</li>
  </ul>
  
  <div class="n-h2">Purpose of Two ACBs Supplying ESB</div>
  <div class="n-p">The ESB has one ACB from the Main Switchboard (normal supply) and one ACB from the Emergency Generator (emergency supply). <strong>They are mechanically and electrically interlocked</strong> so only one can close at a time. This prevents paralleling the Emg Gen with the MSB (which could cause damage due to out-of-sync phases) and prevents backfeeding the MSB during a blackout.</div>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-seqstart">6. Sequential Starting After Blackout (Timings)</div>
  
  <div class="n-p">Sequential starting prevents a second blackout by staggering the starting currents of large motors. The PMS usually handles this automatically.</div>
  
  <table class="n-table">
    <tr><th>TIME AFTER BLACKOUT</th><th>ACTION / EQUIPMENT STARTED</th></tr>
    <tr><td><strong>0 – 45 seconds</strong></td><td>Emg Gen auto-starts and connects to ESB. ESB loads restored.</td></tr>
    <tr><td><strong>45 sec – 2 minutes</strong></td><td>Main Gen starts, voltage builds, MSB ACB closes. Main power restored.</td></tr>
    <tr><td><strong>2 minutes</strong></td><td><strong>Group 1 (Essential):</strong> Sea Water pump, Lube Oil pump, Fresh Water pump, Bilge pump. (Critical for engine safety).</td></tr>
    <tr><td><strong>3 – 5 minutes</strong></td><td><strong>Group 2 (Essential):</strong> Fuel Oil service pump, Boiler feed, Air compressor.</td></tr>
    <tr><td><strong>5 – 10 minutes</strong></td><td><strong>Group 3 (Auxiliary):</strong> Engine room vent fans, Provision reefer.</td></tr>
    <tr><td><strong>> 10 minutes</strong></td><td>Large loads (Cargo pumps, Bow thruster) started manually once stable.</td></tr>
  </table>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-container">7. Container Ship - CSC Convention & Fires</div>
  
  <ul class="n-list">
    <li><strong>CSC (Convention for Safe Containers):</strong> Requires structural approval plates on all shipping containers. Shows max gross weight, stacking weight, and next inspection date (30mo or 5yr).</li>
    <li><strong>TEU/FEU:</strong> Twenty-foot Equivalent Unit. Forty-foot Equivalent Unit (2 TEU).</li>
    <li><strong>Container Fires:</strong> Often caused by misdeclared dangerous goods (lithium batteries, self-heating chemicals) or reefer electrical faults.</li>
    <li><strong>Action for Reefer Fire:</strong> Isolate power socket immediately. If inside hold, close vents and deploy fixed CO2. If on deck, use portable extinguisher.</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s-drydock">🏗️ Drydock - Electrical Preparations</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask ETO drydock preparations checklist.</strong></div></div>
  <div class="n-h2">Before Docking</div>
  <ol class="n-steps">
    <li>Take <strong>baseline IR readings</strong> of all motors and cables - record for comparison after flooding</li>
    <li>Switch <strong>ICCP to MANUAL/OFF</strong> - running in air creates fire hazard (anodes arc in air)</li>
    <li>Energise all <strong>anti-condensation heaters</strong> from shore power - keep windings <span class="n-val">5–10°C</span> above ambient, prevent moisture absorption during the docked period</li>
    <li>Arrange shore power connection - verify voltage, frequency, phase sequence before closing shore ACB</li>
    <li>Inspect <strong>shaft earthing brush</strong> for wear - replace if below minimum length</li>
    <li>Check hull transducers (echo sounder, Doppler log) - report to surveyor if damaged</li>
  </ol>
  <div class="n-h2">During Drydock</div>
  <ul class="n-list">
    <li>Assist surveyor: present all maintenance records, PMS logs, IR test records</li>
    <li>Witness tests: blackout test, steering gear timing, fire detection tests</li>
    <li>Replace Ag/AgCl ICCP reference electrodes (every <span class="n-val">2.5 years</span>)</li>
    <li>Inspect and clean all bilge level sensors and alarms</li>
    <li>Megger test all deck cables, motors, and hull cable penetrations</li>
  </ul>
  <div class="n-h2">After Flooding - Before Undocking</div>
  <ol class="n-steps">
    <li>Re-take IR readings of all motors - compare with pre-drydock baseline</li>
    <li>Commission ICCP in manual mode - verify reference electrode readings before switching to auto</li>
    <li>Test emergency generator - auto-start within <span class="n-val">45 seconds</span></li>
    <li>Test all navigation lights - both main and emergency supply</li>
    <li>Restore all systems to normal - remove all PTWs and permits</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Drydock sequence: Baseline IR → ICCP OFF → heaters ON → shore power → shaft brush. After flood: re-IR → ICCP manual → commission tests → remove PTWs.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What does an IEC Motor Frame Number indicate? Give an example.</td>
      <td>It indicates the shaft center height in millimeters from the mounting base. E.g., IEC 132 means the shaft is 132mm high. It ensures replacement motors fit the same bolt pattern and coupling height without structural modification.</td>
    </tr>
    <tr>
      <td>Explain the procedure and timings for sequential starting after a blackout.</td>
      <td>Emg Gen connects within 45s. Main Gen restores MSB within 2 min. At 2 min, Group 1 starts (SW, LO, FW pumps). At 3-5 min, Group 2 starts (Fuel, Boiler, Air Compressors). At 5-10 min, Aux loads start. Staggering prevents high starting currents from causing a 2nd blackout.</td>
    </tr>
    <tr>
      <td>What is Hogging and Sagging?</td>
      <td>Sagging: Ship ends are supported, middle sags down. Keel is in tension, deck in compression. Hogging: Middle is supported, ends drop. Keel is in compression, deck in tension. They cause bending moments in the hull girder.</td>
    </tr>
    <tr>
      <td>Why does the Emergency Switchboard have two ACBs?</td>
      <td>One from the MSB, one from the Emg Gen. They are mechanically and electrically interlocked to prevent simultaneous closure. This ensures no paralleling of unsynchronized sources and prevents backfeeding the MSB during a blackout.</td>
    </tr>
    <tr>
      <td>What is GM and what happens if it is negative?</td>
      <td>GM is Metacentric Height (distance from center of gravity to metacentre). Minimum required is 0.15m. If negative, the ship is unstable and will develop a capsizing moment instead of a righting moment, causing it to loll or capsize.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Motor Frame Number (IEC)</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Shaft height in mm. Ensures perfect physical replacement match.</td>
    </tr>
    <tr>
      <td>Sequential Starting</td>
      <td class="hl">⭐⭐⭐⭐⭐ Mumbai Bank</td>
      <td>45s (Emg), 2m (MSB/Cooling), 3-5m (Fuel/Air). Prevents overload.</td>
    </tr>
    <tr>
      <td>ESB Two ACBs</td>
      <td class="hl">⭐⭐⭐⭐⭐ Sanjib, ORAL2026</td>
      <td>Interlocked. Prevents paralleling and MSB backfeed.</td>
    </tr>
    <tr>
      <td>Hogging / Sagging</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Deswal</td>
      <td>Sagging: Keel tension. Hogging: Keel compression.</td>
    </tr>
    <tr>
      <td>GM Minimum Value</td>
      <td class="hl">⭐⭐⭐⭐ Mumbai Bank</td>
      <td>0.15 meters. GM = KM - KG.</td>
    </tr>
  </table>

  </div>
</div>`);

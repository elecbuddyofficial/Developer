window.loadNotes("T21", `<div class="view" id="view-notes-t21">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T21')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 21 - LSA (Life Saving Appliances)</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-lb-equip')">Lifeboat Equipment</button>
    <button class="anc-btn" onclick="jumpTo('s-battery')">Lifeboat Battery</button>
    <button class="anc-btn" onclick="jumpTo('s-batt-room')">Battery Room Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-liferaft')">Liferaft & HRU</button>
    <button class="anc-btn" onclick="jumpTo('s-pyro')">Pyrotechnics</button>
    <button class="anc-btn" onclick="jumpTo('s-release')">Release Mech & Rescue Boat</button>
    <button class="anc-btn" onclick="jumpTo('s-eebd')">EEBD & SCBA</button>
    <button class="anc-btn" onclick="jumpTo('s-updates')">New LSA Amendments (2026+)</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Lifeboat battery CCA rating & commissioning. Battery room safeties. Pyrotechnics list & expiry. EEBD operation. New 1.3 m/s lowering speed limit. On-load vs Off-load release.</div></div>


  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-lb-equip">1. Lifeboat Electrical Equipment & Checks</div>
  
  <ul class="n-list">
    <li><strong>Voltage:</strong> <span class="n-val">24V</span> DC standard.</li>
    <li><strong>Electrical Equipment:</strong> Engine starting motor (6 consecutive cold starts), searchlight (55-100W, 3h operation, 180m visibility), interior lighting, SART, 2-way VHF radios, illuminated compass, bilge pump, trickle charger.</li>
    <li><strong>Sensors:</strong> Hydrostatic switch for automatic release. Inductive proximity sensors in the davit to detect stowed position.</li>
    <li><strong>ETO Checks (Weekly):</strong> Trickle charger connected/charging, physical inspection, davit limit switch operation.</li>
    <li><strong>ETO Checks (Monthly):</strong> Run engine for <span class="n-val">3 min</span>, test searchlight/lights/VHF, check battery voltage/SG.</li>
  </ul>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-battery">2. Lifeboat Battery - Specs, Ordering & Commissioning</div>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> The <strong>CCA (Cold Cranking Amps)</strong> rating is heavily asked. It defines how many amps the battery can deliver for 30 seconds at -<span class="n-val">18°C</span> without voltage dropping below <span class="n-val">14.4V</span>. Crucial for cold weather (Arctic) operation.</div></div>
  
  <ul class="n-list">
    <li><strong>Ordering Specs:</strong> Voltage (<span class="n-val">24V</span>), Capacity (Ah), CCA rating, Type (VRLA/NiCd), Dimensions, Class Approval certificate.</li>
    <li><strong>Commissioning Procedure:</strong>
      1. Check docs & certificates. <br>
      2. Physical inspection for transit damage. <br>
      3. Check manufacturing date (shelf life). <br>
      4. Measure OCV or Specific Gravity (SG = 1.265–1.280 fully charged). <br>
      5. Initial charge if required. <br>
      6. Install & connect terminals (Positive first). <br>
      7. Connect trickle charger & test all loads (functional test). <br>
      8. Record in PMS.
    </li>
  </ul>


  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-batt-room">3. Battery Room - Safeties & SOLAS</div>
  
  <div class="n-p">Lead-acid batteries produce <strong>Hydrogen (H₂)</strong> gas during charging. Hydrogen is explosive (LFL 4%).</div>
  <table class="n-table">
    <tr><th>REQUIREMENT</th><th>DETAILS</th></tr>
    <tr><td><strong>Ventilation</strong></td><td>Continuous mechanical extraction. Min 6 air changes/hour. Exhausts directly to atmosphere from highest point.</td></tr>
    <tr><td><strong>Lighting</strong></td><td>MUST be Ex-rated (Ex d or Ex e) for Gas Group IIC (Hydrogen). No standard fluorescent fittings.</td></tr>
    <tr><td><strong>Spill Control</strong></td><td>Acid-resistant tray under all batteries to catch electrolyte leaks.</td></tr>
    <tr><td><strong>PPE & Safety</strong></td><td>Acid gloves, apron, goggles, eye-wash station. No smoking/naked flame.</td></tr>
  </table>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-liferaft">4. Liferaft - HRU & Packs</div>
  
  <ul class="n-list">
    <li><strong>HRU (Hydrostatic Release Unit):</strong> Water pressure activates a knife at 1.5–4m depth, cutting the securing strap. The raft floats up, pulling the painter line to inflate via CO2. Expiry is 2 years.</li>
    <li><strong>SOLAS Pack A:</strong> Offshore/Ocean pack. Comprehensive survival gear (more water, rations, pyrotechnics, fishing kit). Required for international voyages.</li>
    <li><strong>SOLAS Pack B:</strong> Coastal/Inshore pack. Reduced survival gear.</li>
  </ul>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-pyro">5. Pyrotechnics in Lifeboat</div>
  
  <div class="n-p">All pyrotechnics have a <strong>3-year expiry</strong> from the date of manufacture.</div>
  <table class="n-table">
    <tr><th>TYPE</th><th>QTY</th><th>SPECIFICATIONS</th></tr>
    <tr><td><strong>Parachute Flare</strong></td><td>4</td><td>Rocket propelled up to 300m. Burns bright red for min 40 seconds. For long-range alerting (40km).</td></tr>
    <tr><td><strong>Hand Flare</strong></td><td>6</td><td>Burns bright red for min 1 minute. For close-range location marking.</td></tr>
    <tr><td><strong>Buoyant Smoke</strong></td><td>2</td><td>Emits dense orange smoke for min 3 minutes. For daytime helicopter wind direction and location.</td></tr>
  </table>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-release">6. Release Mechanisms & Rescue Boat</div>
  
  <ul class="n-list">
    <li><strong>On-Load Release:</strong> Normal launch mechanism. Releases hooks while the boat is in the water with full load on the hooks. Protected by a hydrostatic interlock to prevent accidental in-air release. Operated by a red handle.</li>
    <li><strong>Off-Load Release:</strong> Used to reset hooks or in emergencies. Requires a deliberate secondary action (e.g., removing a pin).</li>
    <li><strong>Rescue Boat:</strong> Min 5 knots speed. Rigid or inflatable.</li>
    <li><strong>Fast Rescue Boat (FRB):</strong> Min 8 knots speed. Required on passenger ships. Launched within 5 mins.</li>
  </ul>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-eebd">7. EEBD, SCBA & Embarkation Lighting</div>
  
  <table class="n-table">
    <tr><th>EQUIPMENT</th><th>DETAILS</th></tr>
    <tr><td><strong>EEBD</strong></td><td>Emergency Escape Breathing Device. For ESCAPE ONLY, not firefighting. Min 10 minutes air. Hood over head. Single use/person. Min 2 on bridge, 2 in ER.</td></tr>
    <tr><td><strong>SCBA</strong></td><td>Self-Contained Breathing Apparatus. For firefighting. Min 30 minutes air. Positive pressure. Check pressure (>90%) and low-pressure alarm (55 bar) before use.</td></tr>
    <tr><td><strong>Embarkation Light</strong></td><td>Supplied by Emergency Switchboard. Must illuminate the embarkation station, the ladder, and the sea surface to ensure safe boarding during a blackout.</td></tr>
  </table>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-updates">8. LSA Code Amendments & System Updates (2026+)</div>
  
  <ul class="n-list">
    <li><strong>Lowering Speed Limit (1.3 m/s):</strong> Maximum permitted lowering speed for survival craft is capped at 1.3 m/s (78 m/min) to prevent hard water impacts and hook release issues.</li>
    <li><strong>Hook Safety Design:</strong> Single fall hooks CANNOT support a load unless completely and correctly reset. A partially engaged hook will not hold weight, preventing accidental drops.</li>
    <li><strong>Lifeboat Sprinkler System:</strong> Sea cock intake → engine-driven pump → spray nozzles covering the entire GRP hull. Protects lifeboat while escaping through burning oil. Only operates when waterborne.</li>
    <li><strong>Lifeboat Ventilation (Jan 2029):</strong> Totally enclosed lifeboats must have a dedicated ventilation system (min 5 m³/hr/person) independent of the main engine to prevent heatstroke and CO2 buildup.</li>
    <li><strong>Lifejacket Testing (Jan 2026):</strong> New lifejackets must pass in-water tests (24hr buoyancy retention and 5-second self-righting for unconscious persons).</li>
  </ul>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <div class="n-h1" id="s-epirb-sart">🆘 EPIRB &amp; SART - Electrical Details</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib, Kamath ask EPIRB vs SART difference - frequencies, battery life, carriage requirements.</strong></div></div>
  <table class="n-table">
    <tr><th>Item</th><th>EPIRB</th><th>SART</th></tr>
    <tr><td>Function</td><td>Global distress alerting via satellite</td><td class="ok">Local homing - rescuing ship's X-band radar</td></tr>
    <tr><td>Frequency</td><td class="hl"><span class="n-val">406 MHz</span> (satellite) + <span class="n-val">121.5 MHz</span> (aircraft)</td><td class="hl"><span class="n-val">9 GHz</span> (X-band radar)</td></tr>
    <tr><td>Range</td><td>Global via COSPAS-SARSAT satellites</td><td class="hl">~<span class="n-val">5 nm</span> (ship) / <span class="n-val">10 nm</span> (aircraft)</td></tr>
    <tr><td>Activation</td><td>Manual OR HRU (floats free at <span class="n-val">1–4 m</span>)</td><td>Manual or automatic on immersion</td></tr>
    <tr><td>Battery life</td><td class="hl">Min <span class="n-val">48 hours</span> continuous</td><td class="hl"><span class="n-val">96 hours</span> standby + <span class="n-val">8 hours</span> transmitting</td></tr>
    <tr><td>Carriage (SOLAS)</td><td class="hl">Min <span class="n-val">1 per ship</span> - Category I float-free</td><td class="hl">Min <span class="n-val">2 per ship</span> &gt;<span class="n-val">500 GT</span></td></tr>
    <tr><td>HRU replacement</td><td class="hl">Every <span class="n-val">2 years</span></td><td> - </td></tr>
    <tr><td>Battery replacement</td><td class="hl">Every <span class="n-val">5 years</span></td><td class="hl">Per manufacturer schedule</td></tr>
    <tr><td>Radar display</td><td> - </td><td class="ok"><span class="n-val">12 dots</span> line pattern on radar PPI</td></tr>
  </table>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> EPIRB = <span class="n-val">406 MHz</span> satellite global alert. SART = <span class="n-val">9 GHz</span> radar <span class="n-val">12 dots</span> local homing. EPIRB 1 per ship. SART 2 per ship &gt;<span class="n-val">500 GT</span>. Both in lifeboats/grab-bags.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>How do you commission a new lifeboat battery? What is CCA?</td>
      <td>Check documents, class cert, and mfg date. Inspect for damage. Check OCV/Specific Gravity. Apply initial charge if needed. Install (positive first), connect trickle charger. Test loads (engine start, lights). Perform capacity test. CCA is Cold Cranking Amps - current delivered at -18°C for 30s. Crucial for cold weather starting.</td>
    </tr>
    <tr>
      <td>What are the safety requirements for a battery room?</td>
      <td>Dedicated extraction ventilation (min 6 changes/hr, exhausting directly to atmosphere) to remove hydrogen gas. Ex-rated lighting only. Acid-resistant spill tray. PPE available (gloves/goggles/apron) and an eye-wash station. No smoking or open flames.</td>
    </tr>
    <tr>
      <td>What is the difference between On-load and Off-load release?</td>
      <td>On-load is used when the boat is in the water (hooks under load); it has a hydrostatic interlock to prevent release in mid-air. Off-load is used for resetting or emergencies when there is no load on the hooks; it requires a deliberate secondary action to operate.</td>
    </tr>
    <tr>
      <td>What pyrotechnics are carried in a lifeboat?</td>
      <td>4 parachute flares (300m height, 40s burn). 6 hand flares (1 min burn). 2 buoyant orange smoke signals (3 min duration). All have a 3-year expiry date.</td>
    </tr>
    <tr>
      <td>What is an EEBD and how long does it operate?</td>
      <td>Emergency Escape Breathing Device. It is strictly for escaping toxic/smoke-filled atmospheres, not firefighting. Provides a minimum of 10 minutes of breathable air via a hood. It is for single-person use only.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Lifeboat Battery & CCA</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>24V, Ah capacity, CCA = -18°C cold start rating. VRLA/NiCd.</td>
    </tr>
    <tr>
      <td>Battery Room Safeties</td>
      <td class="hl">⭐⭐⭐⭐⭐ Mumbai, ORAL2026</td>
      <td>Ex-lighting, Exhaust ventilation, Hydrogen gas, Acid tray.</td>
    </tr>
    <tr>
      <td>EEBD Time & Purpose</td>
      <td class="hl">⭐⭐⭐⭐ Sudhir, Prakash</td>
      <td>10 min minimum. Escape only. 1 person per unit.</td>
    </tr>
    <tr>
      <td>Pyrotechnics Expiry</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026</td>
      <td>4 parachute, 6 hand, 2 smoke. 3-year expiry from mfg.</td>
    </tr>
    <tr>
      <td>Lowering Speed Limit</td>
      <td class="hl">⭐⭐⭐⭐ New LSA Amend</td>
      <td>Max 1.3 m/s.</td>
    </tr>
  </table>

  </div>
</div>`);

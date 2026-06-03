window.loadNotes("T22", `<div class="view" id="view-notes-t22">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T22')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 22 - ETO Practical & Miscellaneous</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-coldiron')">Cold Ironing & Shore Power</button>
    <button class="anc-btn" onclick="jumpTo('s-wrongway')">Wrong Way Alarm</button>
    <button class="anc-btn" onclick="jumpTo('s-blackout')">Blackout Recovery</button>
    <button class="anc-btn" onclick="jumpTo('s-permits')">Permits & Safety</button>
    <button class="anc-btn" onclick="jumpTo('s-duties')">ETO Duties & Drydock</button>
    <button class="anc-btn" onclick="jumpTo('s-motorchecks')">Received & Rewound Motors</button>
    <button class="anc-btn" onclick="jumpTo('s-welding')">Welding & Crane Safeties</button>
    <button class="anc-btn" onclick="jumpTo('s-boiler')">Boiler Burner & VRCS</button>
    <button class="anc-btn" onclick="jumpTo('s-cableorder')">Cable Ordering</button>
    <button class="anc-btn" onclick="jumpTo('s-troubleshoot')">Troubleshooting & 6-Step Framework</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> Cold ironing procedure & interlocks. Low IR troubleshooting step-by-step. Cable ordering specs. MCA 6-Step Framework for answering emergency scenarios. Electrical shock response.</div></div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-coldiron">1. Cold Ironing - Shore Power Connection</div>
  
  <div class="n-p"><strong>Cold ironing (Alternative Maritime Power - AMP)</strong> is connecting a ship to shore power while berthed to eliminate diesel exhaust emissions. Term comes from historical steam ships letting their fires ('irons') go cold in port.</div>
  
  <table class="n-table">
    <tr><th>Shore Connection Box</th><th>Details & Function</th></tr>
    <tr><td><strong>Socket/Connector</strong></td><td>IEC 60309 standard or HV specialised connector.</td></tr>
    <tr><td><strong>Phase Sequence Indicator</strong></td><td>Critical: Shows if shore phase rotation matches ship (R-Y-B). If wrong, motors will run backwards. Swap any 2 phases to fix.</td></tr>
    <tr><td><strong>Meters</strong></td><td>Voltmeter (must match ship ±5%), Ammeter.</td></tr>
    <tr><td><strong>Main Breaker & Interlock</strong></td><td>ACB/MCCB. <strong>INTERLOCK:</strong> Cannot be closed if any generator ACB is closed (uses gen ACB NC contact). Prevents paralleling shore with ship.</td></tr>
    <tr><td><strong>Earth Cable</strong></td><td>Earth MUST be connected FIRST and disconnected LAST.</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Phase sequence check without indicator:</strong> Use a portable phase sequence meter, OR connect minimal load (1 fan motor) and observe rotation. If reversed, swap two phases.</div></div>

  <ul class="n-list">
    <li><strong>Full Connection Procedure:</strong>
      1. Confirm shore specs (voltage, freq). <br>
      2. Switch off ICCP. <br>
      3. Connect cable (earth first). <br>
      4. Measure voltage and verify phase sequence. <br>
      5. Start shore breaker (generator interlock must be clear). <br>
      6. Synchronise if required, transfer load, trip ship generators.
    </li>
  </ul>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-wrongway">2. Wrong Way Alarm</div>
  
  <ul class="n-list">
    <li><strong>Function:</strong> Detects if shaft rotates opposite to commanded direction. Triggers alarm/trip.</li>
    <li><strong>Location:</strong> Main Engine, Steering Gear pumps.</li>
    <li><strong>Working Principle:</strong> Two proximity/Hall effect sensors at 90° phase offset on the shaft. The phase order of pulses (A then B vs B then A) determines the direction.</li>
  </ul>


  <!-- ═══ SECTION 3 ═══ -->
  
  <div class="n-h1" id="s-blackout">🌑 Blackout Recovery Sequence</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Praveen Nair and Deswal screen for specific restoration timings and load sequence. Always start with Emergency Switchboard confirmation.</strong></div></div>
  <ol class="n-steps">
    <li><strong>Immediate:</strong> Confirm essential emergency services (Nav lights, bridge comms, emergency gen) are on Emergency Switchboard (ESB). Verify ESB has auto-started.</li>
    <li><strong>Assessment:</strong> Identify trip cause - overload, earth fault, or relay malfunction. Note last kW reading and active relay flag on MSB.</li>
    <li><strong>Communication:</strong> Call bridge OOW to report power loss and expected restoration time. Report to Chief Engineer.</li>
    <li><strong>Technical Fix:</strong> Start standby generator manually if auto-start has failed, synchronise, and close ACB to live-charge main busbar.</li>
    <li><strong>Load Sequencing (prevent secondary trip):</strong><br>
      → Cooling pumps first (2 min delay)<br>
      → LO / Fuel pumps (3 min delay)<br>
      → Boiler / Air compressors (5 min delay)<br>
      → HVAC and non-essential loads last</li>
    <li><strong>Documentation:</strong> Log time, cause, and restoration steps in electrical log. Review load shedding parameters and preferential trip settings with Chief Engineer to prevent recurrence.</li>
  </ol>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why sequential loading:</strong> If all loads are restored simultaneously, the combined inrush current (especially motor starting surges 6–8× FLC) can exceed generator rating and trigger an immediate secondary blackout. Delays allow the generator to stabilise at each loading step.</div></div>

  <div class="n-h1" id="s-permits">3. Electrical Isolation Permits & Safety</div>
  
  <table class="n-table">
    <tr><th>Permit Type</th><th>Key Requirements</th></tr>
    <tr><td><strong>Electrical Isolation (EIP)</strong></td><td>LOTO applied. Test de-energised. Scope defined. Issued by CE/ETO.</td></tr>
    <tr><td><strong>Hot Work Permit</strong></td><td>For welding/grinding. Gas-free certificate, fire watch, extinguisher standby.</td></tr>
    <tr><td><strong>Enclosed Space Entry</strong></td><td>Atmosphere test (O2, LEL, toxic), standby person, continuous ventilation.</td></tr>
    <tr><td><strong>Working at Height</strong></td><td>Above 2m. Harness, fall arrest, buddy system.</td></tr>
    <tr><td><strong>Safety System Isolation</strong></td><td>When isolating fire detectors for maintenance. Fire watch required.</td></tr>
  </table>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-duties">4. ETO Duties, PMS, & Drydock</div>
  
  <ul class="n-list">
    <li><strong>Daily Duties:</strong> Review alarm panel, MSB rounds (kW, PF, earth faults), running machinery check, Fire/GMDSS/Nav panels, Reefer temps, PMS tasks, Log entries.</li>
    <li><strong>PMS (Planned Maintenance System):</strong> Complete tasks on schedule, record work/findings, manage defects, requisition spares, risk assessments.</li>
    <li><strong>Drydock Alternator Protection:</strong> When isolated for weeks, <strong>Stator Heater (anti-condensation heater)</strong> must be energised from shore supply to keep windings 5-10°C above ambient. Prevents moisture absorption. Megger periodically. PI test before re-energising.</li>
  </ul>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-motorchecks">5. Received Motor & Rewound Motor Checks</div>
  
  <div class="n-p"><strong>Checks for a received motor before departure:</strong> Docs match order → Physical inspect → <strong>Megger test (>1 MΩ)</strong> → Turn shaft by hand → Terminal box inspect → Compare nameplate with starter overload setting → No-load run test.</div>

  <div class="n-info"><div class="icon">ℹ️</div><div class="body"><strong>Identifying Rewound Motor Terminals (Paint obscured):</strong><br>
  1. Continuity Test: Find the 3 pairs (same windings) = 1a-1b, 2a-2b, 3a-3b.<br>
  2. Battery Polarity Test: Connect 12V battery to Winding 1. Check induced voltage in Winding 2 and 3 with millivoltmeter. Positive deflection means same polarity (starts).<br>
  3. Star = Join 3 finish ends. Delta = 1b→2a, 2b→3a, 3b→1a.</div></div>


  <!-- ═══ SECTION 6 ═══ -->
  
  <div class="n-h2">Post-Rewinding Acceptance Protocol - 4 Steps</div>
  <p class="n-p"><strong>Never energize a rewound motor directly.</strong> Execute these four verification steps before coupling:</p>
  <ul class="n-list">
    <li><strong>1. Insulation Resistance (IR) Test:</strong> Megger between each phase and phase-to-earth with 500V DC (or 1000V DC for large motors). Must register &gt;100 MΩ. Polarisation Index (PI) test recommended for HV motors (PI = IR₁₀/IR₁ - must be &gt;2.0).</li>
    <li><strong>2. Winding Resistance Balance Test:</strong> Use a DLRO or low-resistance ohmmeter to measure phase-to-phase resistance for all three phases. Readings must be balanced within 2% of each other. Significant imbalance indicates turn-to-turn shorts in one winding - motor must be returned for rework.</li>
    <li><strong>3. Mechanical Inspection - Air Gap Check:</strong> Rotate shaft by hand and listen for bearing roughness or internal rubbing. Measure air gap at <span class="n-val">4 cardinal points</span> (top, bottom, left, right) using feeler gauges between rotor and stator bore. Maximum variation between measurements must be within ±10% to confirm concentric alignment. Unequal air gap causes unbalanced magnetic pull → vibration → bearing failure.</li>
    <li><strong>4. Rotation Bump Test:</strong> Before coupling the mechanical load, momentarily 'bump' start the motor (apply power for 1–2 seconds only). Verify shaft rotation direction matches the driven equipment requirement. Reverse any two supply phases if rotation is wrong.</li>
  </ul>

  <div class="n-h1" id="s-welding">6. Welding Transformer & Crane Safeties</div>
  
  <ul class="n-list">
    <li><strong>Welding Transformer:</strong> Return cable must be short and earthed to workpiece. Gas-free cert + Hot Work Permit. Fire watch (during & 30m after). Inspect cable insulation. Switch off ICCP. Never leave on open-circuit standby.</li>
    <li><strong>Engine Room Crane:</strong> Overload relay (SWL), Upper & Lower limit switches, Emergency stop, Dead-man control (release to stop), Electromagnetic brake (failsafe), Pendant insulation check.</li>
  </ul>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-boiler">7. Boiler Burner Safeties & VRCS</div>
  
  <ul class="n-list">
    <li><strong>Boiler Burner Safeties:</strong> Flame failure relay (UV/ionisation), High/low water level trip, High steam pressure trip, Purge interlock (pre-purge before ignition), Ignition interlock, Draft fan failure trip.</li>
    <li><strong>VRCS (Valve Remote Control System):</strong> Controls cargo/ballast valves from CCR. ETO maintains the Hydraulic Power Unit (HPU) motor, solenoid pilot valves, and position feedback transmitters (potentiometers/reed switches).</li>
  </ul>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-cableorder">8. Cable Ordering Specifications</div>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Exam Critical:</strong> You must specify these when ordering marine cables.</div></div>
  <ul class="n-list">
    <li><strong>1. Material:</strong> Copper (stranded for flexibility).</li>
    <li><strong>2. Cores:</strong> 1C, 2C, 3C, 4C, etc.</li>
    <li><strong>3. Cross-Section:</strong> mm² (e.g., 2.5mm², 10mm²). Never AWG.</li>
    <li><strong>4. Insulation:</strong> XLPE (best thermal), EPR, PVC.</li>
    <li><strong>5. Outer Sheath:</strong> LSZH (Low Smoke Zero Halogen).</li>
    <li><strong>6. Armour:</strong> SWA (Steel Wire Armoured) or none.</li>
    <li><strong>7. Voltage Rating:</strong> 0.6/1 kV for 440V systems.</li>
    <li><strong>8. Standard:</strong> IEC 60092-350 (Marine).</li>
    <li><strong>9. Screen:</strong> Copper braid/foil for instrumentation (EMI shield).</li>
    <li><strong>10. Length & Drum:</strong> Continuous metres on a drum.</li>
  </ul>


  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-troubleshoot">9. Troubleshooting, Diagnostics, & 6-Step Framework</div>

  <div class="n-p"><strong>MCA 6-Step Framework for answering ALL emergency/scenario questions:</strong></div>
  <ol class="n-list">
    <li><strong>IMMEDIATE ACTIONS (Safety):</strong> Isolate live faults, LOTO, fire alarm.</li>
    <li><strong>ASSESSMENT:</strong> Read gauges, alarm panel, check MCBs, talk to watchkeeper.</li>
    <li><strong>COMMUNICATION:</strong> Report to C/E, Master, or OOW. Sound general alarm.</li>
    <li><strong>FURTHER ACTIONS (Investigate/Fix):</strong> Fault-finding steps, megger tests, component swaps, bypasses.</li>
    <li><strong>DOCUMENTATION:</strong> Electrical log entry, PMS update, incident report.</li>
    <li><strong>FOLLOW-UP:</strong> Root cause analysis, adjust PMS, order spares, safety meeting.</li>
  </ol>

  <div class="n-h2">Low IR Troubleshooting (<span class="n-val">440V</span> Circuit)</div>
  <ol class="n-list">
    <li>Obtain permit, isolate at MSB, prove dead.</li>
    <li>Disconnect cable at BOTH ends (MSB and motor).</li>
    <li><strong>Megger Cable alone:</strong> If low, cable is faulty (check for water ingress or pinch).</li>
    <li><strong>If Cable healthy, Megger Motor:</strong> Isolate star point. U1-E, V1-E, W1-E. Minimum 1 MΩ.</li>
    <li>If motor low: check temperature (moisture). Run heater to dry out. If drying fails, rewind.</li>
    <li>Test starter components separately. Re-energise after all values > 1 MΩ.</li>
  </ol>

  <div class="n-h2">IR Testing at High Temperature</div>
  <div class="n-p">IR halves every 10°C rise. <strong>IEC 60034 Correction Formula:</strong> <code>IR_40C = IR_measured × 2^((T - 40) / 10)</code>. Example: 10 MΩ at 80°C = 160 MΩ at 40°C. <strong>Polarisation Index (PI) = IR_10min / IR_1min</strong>. Healthy PI ≥ 2.0. PI is temperature independent.</div>

  <div class="n-h2">Electrical Shock First Aid</div>
  <div class="n-p"><strong>NEVER touch the victim while in contact with source.</strong> 1. Isolate supply (pull plug, trip breaker) OR use DRY non-conducting object (wood/rope) to push victim away. 2. Call for help. 3. Assess ABCs. 4. If no pulse/breathing: Start CPR (30:2) and use AED. 5. If breathing: Recovery position. 6. Always seek medical advice (internal damage).</div>

  <div class="n-h2">Contact Cleaning</div>
  <ul class="n-list">
    <li><strong>Copper:</strong> Isopropyl Alcohol (IPA) and lint-free cloth. Smooth flat file for pitting (no emery cloth).</li>
    <li><strong>Silver/Gold-plated:</strong> DO NOT FILE. IPA only.</li>
    <li><strong>Measurement:</strong> Use a micro-ohmmeter (DLRO), not a standard multimeter.</li>
  </ul>

  <div class="n-h2">Current Transformer (CT) Safety</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body">CT secondary MUST NEVER be left open-circuited. No counter-MMF causes core saturation → induces thousands of volts → explodes insulation / lethal shock hazard. Always short-circuit CT secondary before disconnecting instruments.</div></div>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>

  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is cold ironing and how does the interlock work?</td>
      <td>Connecting ship to shore power to eliminate emissions. The interlock uses an NC contact from the generator ACB in series with the shore breaker closing coil. If ANY gen ACB is closed, the shore breaker cannot physically close. Prevents paralleling.</td>
    </tr>
    <tr>
      <td>440V motor reads 0.3 MΩ. What is your systematic approach?</td>
      <td>(Apply 6-step framework). 1. Isolate at MSB and LOTO. 2. Disconnect cable at both motor and MSB. 3. Megger cable alone. 4. If cable is good, megger motor phases separately. 5. If motor is wet, dry with heater. 6. Log and follow up.</td>
    </tr>
    <tr>
      <td>How do you order a marine cable?</td>
      <td>Specify: Stranded Copper, core count (e.g., 3C), cross-section (10mm²), Insulation (XLPE), Sheath (LSZH), Armour (SWA), Voltage (0.6/1kV), Marine Standard (IEC 60092-350), Screen (if instrumentation), and length on a drum.</td>
    </tr>
    <tr>
      <td>Why do we do a short circuit test on a transformer?</td>
      <td>To find copper losses and Percentage Impedance (%Z). Secondary is shorted, reduced voltage applied to primary. %Z determines maximum fault current on the secondary, which is crucial for switchboard protection relay settings.</td>
    </tr>
    <tr>
      <td>A crew member gets an electric shock and is stuck to the panel. Immediate action?</td>
      <td>DO NOT touch the victim. 1. Isolate power immediately (trip breaker). If impossible, use a dry wooden plank or rubber hook to separate them. 2. Call bridge for medical emergency. 3. Assess breathing/pulse; start CPR and use AED if arrested.</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>Cold Ironing & Interlock</td>
      <td class="hl">⭐⭐⭐⭐⭐ All Surveyors</td>
      <td>Earth first. Interlock prevents gen & shore paralleling. Swap phases if sequence wrong.</td>
    </tr>
    <tr>
      <td>Low IR Systematic Checks</td>
      <td class="hl">⭐⭐⭐⭐⭐ ORAL2026</td>
      <td>Isolate → Disconnect both ends → Megger Cable → Megger Motor separately.</td>
    </tr>
    <tr>
      <td>6-Step Response Framework</td>
      <td class="hl">⭐⭐⭐⭐⭐ MUST USE</td>
      <td>Immediate (Safety) → Assess → Communicate → Action → Document → Follow-up.</td>
    </tr>
    <tr>
      <td>CT Secondary Safety</td>
      <td class="hl">⭐⭐⭐⭐ ORAL2026</td>
      <td>NEVER leave open. Always short before disconnecting. Prevents lethal HV.</td>
    </tr>
    <tr>
      <td>Cable Ordering</td>
      <td class="hl">⭐⭐⭐⭐ Mumbai</td>
      <td>Stranded copper, mm², XLPE, LSZH, SWA, IEC 60092-350.</td>
    </tr>
  </table>

  </div>
</div>`);

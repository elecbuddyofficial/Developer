import os

t06_html = r'''window.loadNotes("T06", `<div class="view" id="view-notes-t06">
<div class="note-doc">
  <div style="margin-bottom:16px"><button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button></div>
  <div class="note-title">
    <h1>Topic 06 — Sensors & Instrumentation</h1>
    <div class="sub">ETO MMD Oral Examination · Function 5 · Class 2 · Mumbai & Noida</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-temp')">RTD vs Thermocouple</button>
    <button class="anc-btn" onclick="jumpTo('s-loop')">4-20mA & HART</button>
    <button class="anc-btn" onclick="jumpTo('s-sipart')">SIPART PS2</button>
    <button class="anc-btn" onclick="jumpTo('s-dp')">DP Transmitter</button>
    <button class="anc-btn" onclick="jumpTo('s-analyzers')">O2, Salinometer</button>
    <button class="anc-btn" onclick="jumpTo('s-proximity')">Proximity Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-modbus')">Modbus Protocol</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">Megger & PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-ums')">UMS & Calibration</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-temp">1. TEMPERATURE SENSORS — RTD & THERMOCOUPLE</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask this:</strong> Know the working principle and difference between RTD and Thermocouple.</div></div>
  
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">RTD (PT100)</div>
      <div class="card-desc">
        <strong>Principle:</strong> Resistance increases with temperature (PTC).<br>
        <strong>PT100:</strong> Platinum, <span class="n-val">100 ohms</span> at 0°C. Increases by <span class="n-val">0.385 ohms</span> per °C.<br>
        <strong>Connection:</strong> 3-wire system used to cancel lead resistance.<br>
        <strong>Applications:</strong> Bearing, winding, cooling water (high accuracy, up to 850°C).
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Thermocouple (Type K)</div>
      <div class="card-desc">
        <strong>Principle:</strong> Seebeck Effect — two dissimilar metals joined generate mV proportional to temp difference.<br>
        <strong>Requirement:</strong> Needs Cold Junction Compensation (CJC) and matching extension cable.<br>
        <strong>Applications:</strong> Exhaust gas, boiler (high temps up to 1600°C).
      </div>
    </div>
  </div>

  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-loop">2. 4-20mA CURRENT LOOP & HART PROTOCOL</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Kamath & Vishwanathan:</strong> Why use current instead of voltage? Why 250 ohm resistor for HART?</div></div>
  
  <div class="n-h2">Why 4-20mA?</div>
  <ul class="n-list">
    <li><strong>Noise Immunity:</strong> Electromagnetic interference doesn't affect current.</li>
    <li><strong>Cable Resistance Immunity:</strong> Same current flows regardless of cable length/resistance.</li>
    <li><strong>Wire Break Detection:</strong> <span class="n-val">0mA</span> clearly indicates a wire break/fault (not a 0% reading).</li>
    <li><strong>2-Wire Loop Powered:</strong> Same two wires carry 24V DC power AND signal.</li>
  </ul>

  <div class="n-h2">HART Protocol (Highway Addressable Remote Transducer)</div>
  <p class="n-p">Superimposes a digital FSK (Frequency Shift Keying) signal (<span class="n-val">1200/2200 Hz</span>) over the 4-20mA analogue loop without affecting the average analogue value.</p>
  <p class="n-p"><strong>Why the <span class="n-val">250 ohm</span> resistor?</strong> A HART communicator requires a minimum voltage to detect the digital signal. Using Ohm's law (V = I × R), at 4mA, V = 0.004 × 250 = <span class="n-val">1V</span>. This meets the 250mV minimum threshold. Without it, the signal voltage is too small.</p>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-sipart">3. SIPART PS2 POSITIONER CALIBRATION</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Anil Deswal Specific:</strong> Know the 5 runs of SIPART calibration perfectly.</div></div>
  
  <p class="n-p">A smart pneumatic valve positioner. Automatic calibration (initialisation) sequence:</p>
  <ol class="n-steps">
    <li><strong>RUN 1:</strong> Initialisation Start.</li>
    <li><strong>RUN 2:</strong> Close Stop Detection — Drives valve to mechanical CLOSED stop and records 0% (<span class="n-val">4mA</span>).</li>
    <li><strong>RUN 3:</strong> Open Stop Detection — Drives valve to OPEN stop and records 100% (<span class="n-val">20mA</span>).</li>
    <li><strong>RUN 4:</strong> Travel Time Measurement — Optimises response speed.</li>
    <li><strong>RUN 5:</strong> Friction & Hysteresis Determination — Applies step changes to compensate for mechanical friction.</li>
  </ol>

  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-dp">4. DP TRANSMITTER (DIFFERENTIAL PRESSURE)</div>
  
  <table class="n-table">
    <tr><th>Application</th><th>Working Principle</th></tr>
    <tr>
      <td>Flow Measurement</td>
      <td>Orifice plate creates pressure drop. DP is proportional to flow rate SQUARED. Square root extraction applied to get linear flow.</td>
    </tr>
    <tr>
      <td>Level Measurement</td>
      <td>HP at bottom of tank, LP at top (vapour space). DP = density × gravity × height.</td>
    </tr>
  </table>

  <div class="n-h2">Pressure Mismatch (Local Gauge vs Remote Transmitter)</div>
  <p class="n-p"><strong>Causes:</strong></p>
  <ul class="n-list">
    <li><strong>Hydrostatic Head:</strong> Transmitter mounted lower/higher than gauge (liquid in impulse line).</li>
    <li><strong>Calibration Error:</strong> Zero/Span drifted on either instrument.</li>
    <li><strong>Blockage/Leak:</strong> Impulse line partially blocked or leaking.</li>
  </ul>

  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-analyzers">5. O2 ANALYSER, SALINOMETER & VISCOTHERM</div>
  
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">O2 Analyser</div>
      <div class="card-desc"><strong>Paramagnetic:</strong> O2 is attracted to magnetic fields. Dumbbell test body deflects. (Boilers).<br><strong>Galvanic:</strong> Fuel cell creates current. (Portable).<br><strong>Calibrate:</strong> Zero = Nitrogen (<span class="n-val">0%</span>). Span = Fresh Air (<span class="n-val">20.9%</span>).</div>
    </div>
    <div class="n-card">
      <div class="card-title">Salinometer</div>
      <div class="card-desc">Measures boiler feed/FW generator salinity. Pure water has high resistance. Salt ions increase conductivity. Uses AC to prevent polarisation.<br><strong>Limit:</strong> Usually <span class="n-val">< 10 ppm</span> for boilers.</div>
    </div>
    <div class="n-card">
      <div class="card-title">Viscotherm</div>
      <div class="card-desc">Measures torque needed to rotate spindle in fuel (viscosity). Adjusts steam valve. Viscosity control is better than temp control because different fuels have different viscosity-temperature curves.</div>
    </div>
  </div>

  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-proximity">6. PROXIMITY SENSORS & SPEED MEASUREMENT</div>
  
  <p class="n-p"><strong>Inductive Proximity Sensor:</strong> Oscillator creates high-frequency EM field. When a <strong>METALLIC</strong> target enters, eddy currents absorb energy, damping the oscillation, which switches the output. Does NOT detect plastic or water.</p>
  <p class="n-p"><strong>Capacitive Proximity Sensor:</strong> Detects BOTH metallic and non-metallic objects (water, oil, plastic) by measuring capacitance change.</p>

  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-modbus">7. MODBUS COMMUNICATION PROTOCOL</div>
  <p class="n-p">Master/Slave architecture over RS-485 serial (<span class="n-val">2-wire</span>, 120 ohm termination). Only the Master (PLC) can initiate requests. Up to 247 slaves.</p>
  <ul class="n-list">
    <li><strong>RTU:</strong> Binary data over serial (most common).</li>
    <li><strong>TCP/IP:</strong> Modbus over Ethernet.</li>
    <li><strong>Function Codes:</strong> 03 (Read Holding Registers), 04 (Read Input Registers), 16 (Write Multiple).</li>
  </ul>

  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-megger">8. MEGGER & PI TEST</div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Crucial:</strong> Always disconnect AVRs and VFDs before meggering to avoid destroying electronics!</div></div>
  
  <p class="n-p"><strong>Why DC for testing?</strong> AC causes capacitive leakage current which makes insulation look worse. DC measures true resistive leakage and allows the PI test.</p>
  
  <div class="n-h2">Polarisation Index (PI) Test</div>
  <p class="n-p"><strong>PI = IR(10 min) / IR(1 min)</strong></p>
  <p class="n-p">Good, dry insulation acts like a capacitor and absorbs DC charge. Over 10 minutes, the charging current drops, so the resistance reading INCREASES. If wet, leakage current stays constant.</p>
  <table class="n-table">
    <tr><th>PI Value</th><th>Condition</th></tr>
    <tr><td class="hl">> 2.0</td><td>Good to Excellent (Dry)</td></tr>
    <tr><td>1.5 - 2.0</td><td>Fair (Investigate)</td></tr>
    <tr><td class="bad">< 1.5</td><td class="bad">Poor / Dangerous (Wet, Do not energise)</td></tr>
  </table>

  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-ums">9. UMS ALARM SYSTEM & INSTRUMENT CALIBRATION</div>
  <p class="n-p">Unattended Machinery Space (UMS) requires alarms in the ECR, Bridge, and Duty Engineer cabins.</p>
  <p class="n-p"><strong>Instrument Calibration 5-Point Check:</strong> Calibrate instruments by injecting standard signals (e.g. using a pressure calibrator or mA loop calibrator) at <span class="n-val">0%, 25%, 50%, 75%, and 100%</span> of the range. Adjust Zero (at 0%) and Span (at 100%) to remove errors.</p>

  <!-- ═══ SURVEYOR Q&A ═══ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer — Key Points</th></tr>
    <tr>
      <td>Why use 4-20mA instead of 0-20mA? (Deswal)</td>
      <td><span class="n-val">0mA</span> is reserved to indicate a wire break or complete transmitter failure. If we used 0-20mA, 0mA could mean either a valid zero reading OR a wire break. 4-20mA makes fault detection unambiguous.</td>
    </tr>
    <tr>
      <td>Explain the PI test and why it is better than a simple IR test. (All)</td>
      <td>PI is the ratio of 10-min IR to 1-min IR. Good dry insulation polarises (absorbs charge), causing current to drop and IR to increase over 10 minutes (PI > 2). Wet insulation conducts steadily, keeping IR constant (PI ~ 1). PI detects moisture that a simple 1-min reading might miss.</td>
    </tr>
    <tr>
      <td>How does a smart transmitter differ from a conventional one? (Vishwanathan)</td>
      <td>Smart transmitters have microprocessors and use HART protocol for remote configuration, self-diagnostics, sensor linearisation (e.g., square root for DP), and multi-range capability without manual screwdriver adjustments.</td>
    </tr>
  </table>

  <!-- ═══ QUICK REVISION ═══ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision — Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>RTD vs Thermocouple</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>RTD = Resistance increases (PT100). TC = Seebeck effect, needs CJC.</td>
    </tr>
    <tr>
      <td>4-20mA Loop</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>Noise immune, detects wire break (0mA), 2-wire powers transmitter.</td>
    </tr>
    <tr>
      <td>Megger & PI</td>
      <td class="hl">⭐⭐⭐⭐⭐ All</td>
      <td>Disconnect AVRs! PI > 2 = Good/Dry. PI < 1.5 = Wet/Danger.</td>
    </tr>
    <tr>
      <td>HART & 250 Ohm</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Sanjib</td>
      <td>Digital over analogue. 250 ohm gives min 1V for communicator to read.</td>
    </tr>
    <tr>
      <td>SIPART Calibration</td>
      <td class="hl">⭐⭐⭐ Deswal</td>
      <td>Run 2 = Close stop. Run 3 = Open stop. Run 4 = Travel time. Run 5 = Friction.</td>
    </tr>
    <tr>
      <td>Proximity Sensors</td>
      <td class="hl">⭐⭐⭐ Nair</td>
      <td>Inductive detects METALS only (eddy currents). Capacitive detects all.</td>
    </tr>
  </table>

  </div>
</div>
</div>`);
'''

with open('data/notes/t06_notes.js', 'w', encoding='utf-8') as f:
    f.write(t06_html)
print("t06 written successfully")

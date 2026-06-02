window.loadNotes("T06", `<div class="view" id="view-notes-t06">
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
    <button class="anc-btn" onclick="jumpTo('s-written')">Written Section</button>
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

  
  <!-- ═══ WRITTEN SECTION ═══ -->
  <div class="n-h1" id="s-written">📝 Written Section</div>
  <div class="n-info"><div class="icon">📝</div><div class="body"><strong>Coming Soon:</strong> The written preparation module is currently under development. It will feature past papers, detailed numerical solutions, and structured answers for this topic.</div></div>

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

<div class="n-h1" id="s-thermistor">10. THERMISTOR & DEEPER TEMPERATURE DETAIL</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>PT100 resistance worked values:</strong> At 0°C = <span class="n-val">100 Ω</span>. At 100°C = 100 + (100 × 0.385) = <span class="n-val">138.5 Ω</span>. At 200°C = 100 + (200 × 0.385) = <span class="n-val">177 Ω</span>. Slope = <span class="n-val">0.385 Ω/°C</span>.</div></div>

<div class="n-h2">Why Platinum for the RTD?</div>
<ul class="n-list">
  <li>Very stable and reproducible over time.</li>
  <li>Nearly linear resistance-temperature curve.</li>
  <li>Wide range <span class="n-val">−200 to +850 °C</span>.</li>
  <li>Corrosion resistant.</li>
</ul>

<div class="n-h2">RTD Connection Methods Compared</div>
<table class="n-table">
  <tr><th>Method</th><th>Lead Resistance</th><th>Use</th></tr>
  <tr><td>2-wire</td><td class="bad">Adds error (uncompensated)</td><td>Short leads, low accuracy</td></tr>
  <tr><td class="hl">3-wire</td><td class="ok">Compensated — one lead per bridge arm</td><td>Most common on ships</td></tr>
  <tr><td>4-wire</td><td class="ok">Completely eliminated</td><td>Laboratory / highest accuracy</td></tr>
</table>

<div class="n-h2">Thermocouple Types — Full Reference</div>
<table class="n-table">
  <tr><th>Type</th><th>Metals</th><th>Range</th><th>Sensitivity</th><th>Application</th></tr>
  <tr><td class="hl">K</td><td>Chromel-Alumel</td><td>−200 to +1260 °C</td><td><span class="n-val">41 µV/°C</span></td><td>Exhaust gas (most common)</td></tr>
  <tr><td>J</td><td>Iron-Constantan</td><td>−40 to +750 °C</td><td><span class="n-val">52 µV/°C</span></td><td>General industrial</td></tr>
  <tr><td>T</td><td>Copper-Constantan</td><td>−200 to +370 °C</td><td>—</td><td>Refrigeration / low temp</td></tr>
  <tr><td>E</td><td>Chromel-Constantan</td><td>—</td><td><span class="n-val">68 µV/°C</span></td><td>Cryogenic (highest sensitivity)</td></tr>
</table>

<div class="n-h2">RTD vs Thermocouple — Full Comparison</div>
<table class="n-table">
  <tr><th>Feature</th><th>RTD (PT100)</th><th>Thermocouple</th></tr>
  <tr><td>Principle</td><td>Resistance ↑ with temp (PTC)</td><td>Seebeck EMF from dissimilar metals</td></tr>
  <tr><td>Output</td><td>Resistance (Ω), 100 Ω base</td><td>mV (41 µV/°C Type K)</td></tr>
  <tr><td>Accuracy</td><td class="ok">High (0.1 °C or better)</td><td>Medium (1–2 °C)</td></tr>
  <tr><td>Range</td><td>−200 to +850 °C</td><td>−200 to +1600 °C</td></tr>
  <tr><td>Linearity</td><td class="ok">Nearly linear</td><td class="bad">Non-linear (needs tables)</td></tr>
  <tr><td>Self-heating</td><td class="bad">Yes (measuring current)</td><td class="ok">None (passive EMF)</td></tr>
  <tr><td>Response time</td><td>Slower (larger sensor)</td><td class="ok">Faster (fine junction)</td></tr>
  <tr><td>Cost</td><td>Higher</td><td class="ok">Lower</td></tr>
</table>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All):</strong> What is cold junction compensation in a thermocouple?<br><strong>Ideal Answer:</strong> Thermocouple output represents the temperature DIFFERENCE between the hot junction (measuring) and cold junction (at instrument terminals). If the terminal temperature changes (e.g. hot engine room), readings shift. CJC uses a temperature sensor (RTD/thermistor) at the terminals to measure actual terminal temperature and electronically adds the equivalent mV — giving true hot junction temperature regardless of cold junction variation. Without CJC it is only accurate if the cold junction is held at a fixed known temperature (traditionally a 0°C ice bath).</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All):</strong> Why must thermocouple extension cable be the same material?<br><strong>Ideal Answer:</strong> If ordinary copper cable is used at the junction box, the point where copper meets the thermocouple alloy creates a NEW thermocouple junction generating its own Seebeck EMF — this adds to or subtracts from the real reading, causing error. Matching (or compensating) extension cable has the same Seebeck coefficient, so no additional EMF is created and the reading is preserved.</div></div>

<div class="n-h1" id="s-loop-detail">11. 4-20mA SIGNAL MEANING & SMART TRANSMITTERS</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">4 mA</div><div class="card-val">0% / Zero</div><div class="card-desc">Minimum range value (LRV)</div></div>
  <div class="n-card"><div class="card-title">12 mA</div><div class="card-val">50%</div><div class="card-desc">Mid-scale</div></div>
  <div class="n-card"><div class="card-title">20 mA</div><div class="card-val">100% / Full</div><div class="card-desc">Maximum range value (URV)</div></div>
  <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">0 mA</div><div class="card-val">FAULT</div><div class="card-desc">Wire break / transmitter failure</div></div>
</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Worked example — Pressure transmitter 0–10 bar:</strong> 4mA = 0 bar; 12mA = 5 bar; 20mA = 10 bar; 0mA = FAULT.</div></div>

<div class="n-h2">HART Voltage Across the Resistor</div>
<div class="n-formula">V = I × R<div class="label">At 4mA: 0.004 × 250 = 1V · At 20mA: 0.020 × 250 = 5V</div></div>
<p class="n-p">HART requires a minimum of <span class="n-val">250 mV</span> peak signal voltage. The 250 Ω resistor (often the DCS/PLC input card impedance itself) guarantees at least <span class="n-val">1 V</span> across the loop, which is sufficient for the communicator to detect the FSK signal.</p>

<div class="n-h2">What HART Allows</div>
<ul class="n-list">
  <li>Read configuration: tag number, range (LRV/URV), engineering units, damping time.</li>
  <li>Remote calibration: adjust zero and span from the control room.</li>
  <li>Diagnostics: sensor temperature, electronics temperature, device status, error codes.</li>
  <li>Multivariable transmitters: read additional variables (e.g. temperature + pressure).</li>
</ul>

<div class="n-h2">Smart Transmitter — What Makes It Smart</div>
<ul class="n-list">
  <li><strong>Digital communication</strong> (HART, Foundation Fieldbus, Profibus) for remote configuration.</li>
  <li><strong>Self-diagnostics</strong> — continuously checks own electronics, reports faults remotely.</li>
  <li><strong>Characterisation</strong> — linearises non-linear outputs (e.g. square-root extraction for DP flow).</li>
  <li><strong>Temperature compensation</strong> — internal sensor corrects ambient effects.</li>
  <li><strong>Multi-range capability</strong> — configurable LRV/URV via HART, no physical adjustment.</li>
  <li><strong>Unit conversion</strong> — reads in bar, kPa, m H₂O etc.</li>
  <li><strong>Tag identification & datalogging</strong> — stores tag, location, history.</li>
</ul>
<table class="n-table">
  <tr><th>Conventional (dumb)</th><th>Smart</th></tr>
  <tr><td>Zero/span by screwdriver trimmers</td><td>Configure via HART communicator</td></tr>
  <tr><td class="bad">Fixed range</td><td class="ok">Flexible range</td></tr>
  <tr><td class="bad">No diagnostics</td><td class="ok">Self-diagnostic + remote calibration</td></tr>
</table>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Vishwanathan, Kamath):</strong> What makes a transmitter smart?<br><strong>Ideal Answer:</strong> An on-board microprocessor adds digital communication (HART) for remote config and diagnostics, self-diagnostics, sensor linearisation (square-root for DP flow), ambient temperature compensation, flexible configurable range (LRV/URV via HART), multivariable measurement, tag storage and engineering-unit conversion — all without manual screwdriver trimmers.</div></div>

<div class="n-h1" id="s-sipart-extra">12. SIPART PS2 — FUNCTION & RECALIBRATION</div>
<p class="n-p">The SIPART PS2 (Siemens) receives a <span class="n-val">4-20mA</span> setpoint, converts it to a target valve position, measures actual stem position via feedback, and corrects any error by adjusting air pressure to the actuator. This eliminates valve hysteresis and friction effects for accurate position control.</p>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Prerequisite for auto-cal:</strong> Instrument air connected, 4-20mA supply connected, valve free to move (no mechanical obstruction). After Run 5 the display shows <span class="n-val">END / FINISH</span> and the positioner returns to automatic mode.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> When would you recalibrate a SIPART PS2?<br><strong>Ideal Answer:</strong> After valve packing replacement (changes friction); after actuator diaphragm/spring replacement (changes travel force); after a complete valve overhaul; on new valve installation; if position indication is erratic; after instrument air pressure change; or if the valve hunts (oscillates around setpoint, indicating friction mis-characterisation). The Run 1–5 auto-cal corrects all mechanical changes with no manual adjustment.</div></div>

<div class="n-h1" id="s-dp-extra">13. DP TRANSMITTER — FORMULAE & ZERO SUPPRESSION</div>
<div class="n-formula">Q = K × √(DP)<div class="label">Flow rate via orifice plate — flow ∝ √(differential pressure)</div></div>
<div class="n-formula">h = DP / (ρ × g)<div class="label">Tank level — DP = ρ × g × h</div></div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">Empty Tank</div><div class="card-val">DP = 0 → 4mA</div></div>
  <div class="n-card"><div class="card-title">Full Tank</div><div class="card-val">DP max → 20mA</div></div>
</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Zero Suppression (Wet Leg):</strong> If the HP connecting leg is filled with liquid, a constant head is added to HP, so the transmitter reads high when the tank is empty. A <strong>zero trim</strong> is applied to suppress this offset.</div></div>
<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> Local gauge shows 3 bar, remote transmitter shows 2.5 bar — what causes the mismatch and what do you check?<br><strong>Ideal Answer:</strong> Causes — (1) height difference / hydrostatic head between gauge and transmitter; (2) transmitter zero/span calibration error; (3) local gauge calibration error; (4) partial blockage of HP/LP impulse line; (5) impulse line leak; (6) different measurement tap positions. Action: verify both instrument calibrations, check connecting lines for blockage or leak, and confirm the tap point positions.</div></div>

<div class="n-h1" id="s-galvanometer">14. GALVANOMETER</div>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Kamath, Sanjib:</strong> Galvanometer working is regularly asked.</div></div>
<p class="n-p">A galvanometer is a moving-coil instrument that detects and measures small electric currents. A coil suspended in a permanent magnetic field carries the current; the resulting torque (T ∝ current) deflects the coil against a restoring spring. A pointer/mirror shows deflection proportional to current. It is the basis of analogue ammeters and voltmeters (with shunt/series resistors).</p>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Galvanometer = "small current detector" — current makes the coil turn in the magnet field; spring brings it back; deflection ∝ current.</div></div>

<div class="n-h1" id="s-quickrev-add">15. QUICK REVISION — KEY NUMBERS</div>
<div class="n-grid">
  <div class="n-card"><div class="card-title">PT100</div><div class="card-val">100 Ω @0°C</div><div class="card-desc">0.385 Ω/°C</div></div>
  <div class="n-card"><div class="card-title">Type K</div><div class="card-val">41 µV/°C</div><div class="card-desc">Exhaust gas, to 1260°C</div></div>
  <div class="n-card"><div class="card-title">HART FSK</div><div class="card-val">1200/2200 Hz</div><div class="card-desc">250 Ω → 1V min</div></div>
  <div class="n-card"><div class="card-title">O2 Span</div><div class="card-val">20.9%</div><div class="card-desc">Fresh air; Zero = N₂</div></div>
  <div class="n-card"><div class="card-title">Boiler Salinity</div><div class="card-val">&lt; 10 ppm</div><div class="card-desc">AC used to avoid polarisation</div></div>
  <div class="n-card"><div class="card-title">PI Good</div><div class="card-val">&gt; 2.0</div><div class="card-desc">10min/1min IR ratio</div></div>
</div>
<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid (4-20mA):</strong> "Four is the floor, twenty is plenty, zero is a fault." 4mA = 0%, 20mA = 100%, 0mA = wire break.</div></div>


<div class="n-h1" id="s-tc-extended">10. THERMOCOUPLE — TYPES, CJC & EXTENSION CABLE (FULL DEPTH)</div>
<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ALL surveyors:</strong> RTD vs Thermocouple. Below adds the full comparison table, all TC types with sensitivities, and the extension-cable error explanation that examiners drill.</div></div>

<div class="n-h2">RTD (PT100) — Resistance Values</div>
<div class="n-formula">R = 100 + (T × 0.385) ohms<div class="label">PT100 resistance at temperature T (°C)</div></div>
<table class="n-table">
  <tr><th>Temperature</th><th>Resistance</th></tr>
  <tr><td>0 °C</td><td class="hl">100 ohms</td></tr>
  <tr><td>100 °C</td><td>100 + (100 × 0.385) = <span class="n-val">138.5 ohms</span></td></tr>
  <tr><td>200 °C</td><td>100 + (200 × 0.385) = <span class="n-val">177 ohms</span></td></tr>
</table>
<p class="n-p"><strong>Why platinum?</strong> Very stable, linear, wide range (<span class="n-val">-200 to +850 °C</span>), corrosion resistant, reproducible.</p>

<div class="n-h2">RTD Connection Methods</div>
<table class="n-table">
  <tr><th>Method</th><th>Lead Resistance</th><th>Use</th></tr>
  <tr><td>2-wire</td><td class="bad">Adds error</td><td>Short leads / low accuracy only</td></tr>
  <tr><td class="hl">3-wire</td><td class="ok">Compensated</td><td>Most common on ships — one lead to each bridge arm</td></tr>
  <tr><td>4-wire</td><td class="ok">Fully eliminated</td><td>Laboratory / highest accuracy</td></tr>
</table>

<div class="n-h2">Thermocouple Types & Sensitivities</div>
<table class="n-table">
  <tr><th>Type</th><th>Metals</th><th>Range</th><th>Sensitivity</th><th>Use</th></tr>
  <tr><td class="hl">K</td><td>Chromel-Alumel</td><td>-200 to +1260 °C</td><td><span class="n-val">41 µV/°C</span></td><td>Exhaust gas (most common)</td></tr>
  <tr><td>J</td><td>Iron-Constantan</td><td>-40 to +750 °C</td><td><span class="n-val">52 µV/°C</span></td><td>General industrial</td></tr>
  <tr><td>T</td><td>Copper-Constantan</td><td>-200 to +370 °C</td><td>—</td><td>Low temp / refrigeration</td></tr>
  <tr><td>E</td><td>Chromel-Constantan</td><td>—</td><td><span class="n-val">68 µV/°C</span></td><td>Cryogenic (highest sensitivity)</td></tr>
</table>

<div class="n-h2">Full RTD vs Thermocouple Comparison</div>
<table class="n-table">
  <tr><th>Feature</th><th>RTD (PT100)</th><th>Thermocouple</th></tr>
  <tr><td>Principle</td><td>Resistance ↑ with temp (PTC)</td><td>Seebeck EMF from dissimilar metals</td></tr>
  <tr><td>Output</td><td>Resistance (ohms), 100 Ω base</td><td>Voltage (mV), 41 µV/°C (Type K)</td></tr>
  <tr><td>Accuracy</td><td class="ok">High (0.1 °C or better)</td><td>Medium (1-2 °C)</td></tr>
  <tr><td>Range</td><td>-200 to +850 °C</td><td class="ok">-200 to +1600 °C</td></tr>
  <tr><td>Linearity</td><td class="ok">Very good, nearly linear</td><td class="bad">Non-linear — needs tables</td></tr>
  <tr><td>Self-heating error</td><td class="bad">YES (measuring current)</td><td class="ok">None (passive EMF)</td></tr>
  <tr><td>Response time</td><td>Slower (larger sensor)</td><td class="ok">Faster (fine wire junction)</td></tr>
  <tr><td>Cost</td><td>Higher</td><td class="ok">Lower</td></tr>
</table>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All):</strong> What is cold junction compensation?<br><strong>Ideal Answer:</strong> Thermocouple output (mV) represents the temperature DIFFERENCE between hot junction (measuring) and cold junction (instrument terminals). If terminal temperature changes (hot engine room), readings shift. CJC: instrument has its own temperature sensor (RTD/thermistor) measuring actual terminal temperature, then electronically ADDS the equivalent mV to give true hot-junction temperature. Without CJC, accuracy holds only if cold junction is at a fixed known temp (traditionally ice bath at 0 °C).</div></div>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Sanjib):</strong> Why must thermocouple extension cable be the same material?<br><strong>Ideal Answer:</strong> The TC works by Seebeck effect — EMF generated where two dissimilar metals meet. If ordinary copper extension cable is used, where copper meets the thermocouple wire at the junction box a NEW thermocouple junction is created, generating its own EMF that adds to/subtracts from the reading = error. Matching extension cable (same alloy or compensating cable) has the same Seebeck coefficient, so no additional EMF — accuracy preserved.</div></div>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>RTD = R</strong>esistance (high accuracy, low temp). <strong>TC = T</strong>hermal EMF (wide range, high temp). "Couple = Cooks hot" — thermocouples go up to 1600 °C.</div></div>

<div class="n-h1" id="s-loop-extended">11. 4-20mA SIGNAL VALUES & SMART TRANSMITTER (FULL DEPTH)</div>

<div class="n-h2">4-20mA Signal Meaning</div>
<table class="n-table">
  <tr><th>Current</th><th>Meaning</th><th>Example (0-10 bar Tx)</th></tr>
  <tr><td class="bad">0 mA</td><td class="bad">FAULT — wire break / Tx failure</td><td class="bad">Not a real reading</td></tr>
  <tr><td class="hl">4 mA</td><td>0% (minimum / zero)</td><td>0 bar</td></tr>
  <tr><td>12 mA</td><td>50% (mid-scale)</td><td>5 bar</td></tr>
  <tr><td class="hl">20 mA</td><td>100% (full scale)</td><td>10 bar</td></tr>
</table>
<p class="n-p"><strong>Two-wire (loop-powered) Tx:</strong> only 2 wires carry BOTH <span class="n-val">24V DC</span> power AND the 4-20mA signal. Transmitter modulates current proportional to measured variable — no separate power supply needed. Most common on modern ships.</p>

<div class="n-h2">HART — What It Allows</div>
<ul class="n-list">
  <li>Read configuration: tag number, range (LRV/URV), engineering units, damping time.</li>
  <li>Remote calibration: adjust zero/span from control room via HART communicator.</li>
  <li>Diagnostics: sensor temp, electronics temp, device status, error codes.</li>
  <li>Multivariable: read additional variables (e.g. temp + pressure from one Tx).</li>
</ul>
<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Voltage check:</strong> Across 250 Ω resistor, V = I × R ranges from 4mA × 250 = <span class="n-val">1V</span> up to 20mA × 250 = <span class="n-val">5V</span>. HART needs a minimum <span class="n-val">250 mV</span> peak signal — so 250 Ω always provides enough. The 250 Ω may simply be the input impedance of the DCS/PLC card.</div></div>

<div class="n-h2">Smart Transmitter — 8 Smart Features</div>
<ol class="n-steps">
  <li><strong>Digital communication</strong> — HART, Foundation Fieldbus, Profibus for remote config.</li>
  <li><strong>Self-diagnostics</strong> — continuously checks electronics, reports faults remotely.</li>
  <li><strong>Characterisation</strong> — linearises non-linear sensors (square root extraction for DP flow).</li>
  <li><strong>Temperature compensation</strong> — internal sensor compensates ambient effects.</li>
  <li><strong>Multi-range capability</strong> — configurable LRV/URV via HART, no physical adjustment.</li>
  <li><strong>Unit conversion</strong> — reads in engineering units (bar, kPa, mH₂O).</li>
  <li><strong>Tag identification</strong> — stores tag number, location, install date in memory.</li>
  <li><strong>Datalogging</strong> — some store historical process data.</li>
</ol>
<table class="n-table">
  <tr><th>Conventional (Dumb)</th><th>Smart</th></tr>
  <tr><td class="bad">Screwdriver trimmer adjustment</td><td class="ok">Configure via HART communicator</td></tr>
  <tr><td class="bad">Fixed range</td><td class="ok">Flexible range (LRV/URV)</td></tr>
  <tr><td class="bad">No diagnostics</td><td class="ok">Self-diagnostic + remote calibration</td></tr>
</table>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "<strong>Live Zero</strong>" — 4mA proves the loop is alive. Dead loop = 0mA = broken wire. That single fact is why 4-20mA beats 0-20mA every time.</div></div>

<div class="n-h1" id="s-sipart-extended">12. SIPART PS2 — FUNCTION & RECALIBRATION TRIGGERS</div>

<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Function:</strong> Receives 4-20mA from controller → converts to valve position → measures actual stem position via feedback → corrects error by adjusting air pressure to actuator. Eliminates valve hysteresis and friction effects for accurate position control.</div></div>

<div class="n-h2">Completion</div>
<p class="n-p">After Run 5, SIPART displays <span class="n-val">'END'</span> or <span class="n-val">'FINISH'</span>. The positioner now knows: closed position, open position, travel time, and friction level. It returns to automatic mode and responds accurately to the 4-20mA setpoint.</p>

<div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> When would you recalibrate a SIPART PS2?<br><strong>Ideal Answer:</strong> After valve packing replacement (changes friction), after actuator diaphragm/spring replacement (changes travel force), after complete valve overhaul, on new valve installation, if position indication is erratic, after instrument air pressure change, or if the valve hunts (oscillates around setpoint — friction mis-characterisation). The Run 1-5 auto-cal corrects all mechanical changes with no manual adjustment.</div></div>

<div class="n-info"><div class="icon">📖</div><div class="body"><strong>Prerequisite for calibration:</strong> Instrument air connected, 4-20mA supply connected, and valve free to move (no mechanical obstruction).</div></div>

<div class="n-h1" id="s-dp-extended">13. DP TRANSMITTER — ZERO SUPPRESSION & FLOW FORMULA</div>

<div class="n-formula">Q = K × √(DP)<div class="label">Flow rate from orifice DP; K = flow coefficient</div></div>
<div class="n-formula">h = DP / (ρ × g)<div class="label">Liquid level from hydrostatic DP</div></div>

<div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Zero Suppression (Wet Leg):</strong> If the HP connecting leg is filled with liquid (wet leg), a constant hydrostatic head is added to HP. The transmitter reads HIGH when the tank is empty. A <strong>zero trim</strong> is needed to suppress this offset so empty tank = 4mA.</div></div>

<div class="n-h2">Pressure Mismatch — Full Cause List</div>
<p class="n-p"><em>Example: local gauge shows 3 bar, transmitter shows 2.5 bar — what causes it?</em></p>
<ol class="n-steps">
  <li><strong>Height difference</strong> — Tx mounted higher/lower than gauge → hydrostatic head difference in connecting pipe.</li>
  <li><strong>Transmitter calibration error</strong> — zero or span not set correctly.</li>
  <li><strong>Gauge calibration error</strong> — local gauge not calibrated.</li>
  <li><strong>Impulse line blockage</strong> — partial block in HP/LP line restricts pressure transmission.</li>
  <li><strong>Impulse line leak</strong> — pressure loss in connecting line.</li>
  <li><strong>Different measurement points</strong> — gauge and Tx tap at different positions.</li>
</ol>
<p class="n-p"><strong>Action:</strong> Check both instrument calibrations, check connecting lines for blockage/leak, verify tap positions.</p>

<div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid for DP:</strong> Flow = <strong>square root</strong> (DP ∝ flow²). Level = <strong>linear</strong> (DP = ρgh). "Flow squares, level scales."</div></div>

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

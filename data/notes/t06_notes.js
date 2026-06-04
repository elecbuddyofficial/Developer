window.loadNotes("T06", `<div class="view" id="view-notes-t06">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T06')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 06 - Sensors & Instrumentation</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">Updated 2026</span>
    </div>
  </div>
    <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-control')">Control Loops</button>
    <button class="anc-btn" onclick="jumpTo('s-pid')">PID Controller</button>
    <button class="anc-btn" onclick="jumpTo('s-temp')">RTD vs TC</button>
    <button class="anc-btn" onclick="jumpTo('s-loop')">4-20mA & HART</button>
    <button class="anc-btn" onclick="jumpTo('s-sipart')">SIPART PS2</button>
    <button class="anc-btn" onclick="jumpTo('s-dp')">DP Transmitter</button>
    <button class="anc-btn" onclick="jumpTo('s-analyzers')">Analyzers</button>
    <button class="anc-btn" onclick="jumpTo('s-proximity')">Proximity Sensors</button>
    <button class="anc-btn" onclick="jumpTo('s-modbus')">Modbus Protocol</button>
    <button class="anc-btn" onclick="jumpTo('s-megger')">Megger & PI Test</button>
    <button class="anc-btn" onclick="jumpTo('s-ums')">UMS & Calibration</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">


    

  

<div class="n-h1" id="s-control">🔄 Open Loop vs Closed Loop Control</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask open vs closed loop with ship examples.</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)"><div class="card-title" style="color:var(--red)">Open Loop</div><div class="card-desc">No feedback. Output does NOT affect control. Cannot correct disturbances. Ship examples: timer pumps, fixed speed fans.</div></div>
    <div class="n-card" style="border-color:var(--green-border)"><div class="card-title" style="color:var(--green)">Closed Loop (Feedback)</div><div class="card-desc">Output measured and fed back. Error = SP − PV → corrects. Ship examples: AVR, autopilot, boiler pressure, fuel oil temp, HVAC.</div></div>
  </div>
  <div class="n-formula">Error (e) = SP − PV<div class="label">SP = Setpoint · PV = Process Variable (actual measured) · e = error → fed to controller</div></div>

<div class="n-h1" id="s-pid">🎛️ PID Controller</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Deswal, Kamath, Vishwanathan, Sanjib - ask PID actions and integral windup.</strong></div></div>
  <div class="n-formula">MV = Kp·e + Ki·∫e dt + Kd·(de/dt) + Bias<div class="label">MV = Manipulated Variable · Kp/Ki/Kd = gains · e = error (SP − PV)</div></div>
  <table class="n-table">
    <tr><th>Action</th><th>Responds To</th><th>Eliminates</th><th>Problem</th></tr>
    <tr><td><strong>P (Proportional)</strong></td><td>Current error magnitude</td><td>Reduces error (not to zero)</td><td class="bad">Leaves steady-state offset</td></tr>
    <tr><td><strong>I (Integral)</strong></td><td>Accumulated error over time</td><td class="ok">Steady-state offset</td><td class="hl">Integral windup, oscillation</td></tr>
    <tr><td><strong>D (Derivative)</strong></td><td>Rate of change of error</td><td class="ok">Overshoot/oscillation</td><td class="hl">Amplifies noise</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Integral Windup:</strong> If process hits physical limit (valve fully open), integral keeps accumulating. When limit removed → massive overshoot. Prevention: anti-windup circuits clamp integral when output saturates.</div></div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> P = PRESENT error. I = PAST errors (accumulated). D = FUTURE (predicted from rate). PI eliminates offset. PID eliminates offset AND reduces overshoot.</div></div>

<div class="n-h1" id="s-temp">10. THERMOCOUPLE - TYPES, CJC & EXTENSION CABLE (FULL DEPTH)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>ALL surveyors:</strong> RTD vs Thermocouple. Below adds the full comparison table, all TC types with sensitivities, and the extension-cable error explanation that examiners drill.</div></div>

  <div class="n-h2">RTD (PT100) - Resistance Values</div>
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
  <tr><td class="hl">3-wire</td><td class="ok">Compensated</td><td>Most common on ships - one lead to each bridge arm</td></tr>
  <tr><td>4-wire</td><td class="ok">Fully eliminated</td><td>Laboratory / highest accuracy</td></tr>
  </table>

  <div class="n-h2">Thermocouple Types & Sensitivities</div>
  <table class="n-table">
  <tr><th>Type</th><th>Metals</th><th>Range</th><th>Sensitivity</th><th>Use</th></tr>
  <tr><td class="hl">K</td><td>Chromel-Alumel</td><td>-200 to +1260 °C</td><td><span class="n-val">41 µV/°C</span></td><td>Exhaust gas (most common)</td></tr>
  <tr><td>J</td><td>Iron-Constantan</td><td>-40 to +750 °C</td><td><span class="n-val">52 µV/°C</span></td><td>General industrial</td></tr>
  <tr><td>T</td><td>Copper-Constantan</td><td>-200 to +370 °C</td><td> - </td><td>Low temp / refrigeration</td></tr>
  <tr><td>E</td><td>Chromel-Constantan</td><td> - </td><td><span class="n-val">68 µV/°C</span></td><td>Cryogenic (highest sensitivity)</td></tr>
  </table>

  <div class="n-h2">Full RTD vs Thermocouple Comparison</div>
  <table class="n-table">
  <tr><th>Feature</th><th>RTD (PT100)</th><th>Thermocouple</th></tr>
  <tr><td>Principle</td><td>Resistance ↑ with temp (PTC)</td><td>Seebeck EMF from dissimilar metals</td></tr>
  <tr><td>Output</td><td>Resistance (ohms), 100 Ω base</td><td>Voltage (mV), 41 µV/°C (Type K)</td></tr>
  <tr><td>Accuracy</td><td class="ok">High (0.1 °C or better)</td><td>Medium (1-2 °C)</td></tr>
  <tr><td>Range</td><td>-200 to +850 °C</td><td class="ok">-200 to +1600 °C</td></tr>
  <tr><td>Linearity</td><td class="ok">Very good, nearly linear</td><td class="bad">Non-linear - needs tables</td></tr>
  <tr><td>Self-heating error</td><td class="bad">YES (measuring current)</td><td class="ok">None (passive EMF)</td></tr>
  <tr><td>Response time</td><td>Slower (larger sensor)</td><td class="ok">Faster (fine wire junction)</td></tr>
  <tr><td>Cost</td><td>Higher</td><td class="ok">Lower</td></tr>
  </table>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (All):</strong> What is cold junction compensation?<br><strong>Ideal Answer:</strong> Thermocouple output (mV) represents the temperature DIFFERENCE between hot junction (measuring) and cold junction (instrument terminals). If terminal temperature changes (hot engine room), readings shift. CJC: instrument has its own temperature sensor (RTD/thermistor) measuring actual terminal temperature, then electronically ADDS the equivalent mV to give true hot-junction temperature. Without CJC, accuracy holds only if cold junction is at a fixed known temp (traditionally ice bath at 0 °C).</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Kamath, Sanjib):</strong> Why must thermocouple extension cable be the same material?<br><strong>Ideal Answer:</strong> The TC works by Seebeck effect - EMF generated where two dissimilar metals meet. If ordinary copper extension cable is used, where copper meets the thermocouple wire at the junction box a NEW thermocouple junction is created, generating its own EMF that adds to/subtracts from the reading = error. Matching extension cable (same alloy or compensating cable) has the same Seebeck coefficient, so no additional EMF - accuracy preserved.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>RTD = R</strong>esistance (high accuracy, low temp). <strong>TC = T</strong>hermal EMF (wide range, high temp). "Couple = Cooks hot" - thermocouples go up to 1600 °C.</div></div>

<div class="n-h1" id="s-loop">11. 4-20mA SIGNAL VALUES & SMART TRANSMITTER (FULL DEPTH)</div>

  <div class="n-h2">4-20mA Signal Meaning</div>
  <table class="n-table">
  <tr><th>Current</th><th>Meaning</th><th>Example (0-10 bar Tx)</th></tr>
  <tr><td class="bad">0 mA</td><td class="bad">FAULT - wire break / Tx failure</td><td class="bad">Not a real reading</td></tr>
  <tr><td class="hl">4 mA</td><td>0% (minimum / zero)</td><td>0 bar</td></tr>
  <tr><td>12 mA</td><td>50% (mid-scale)</td><td>5 bar</td></tr>
  <tr><td class="hl">20 mA</td><td>100% (full scale)</td><td>10 bar</td></tr>
  </table>
  <p class="n-p"><strong>Two-wire (loop-powered) Tx:</strong> only 2 wires carry BOTH <span class="n-val">24V DC</span> power AND the 4-20mA signal. Transmitter modulates current proportional to measured variable - no separate power supply needed. Most common on modern ships.</p>

  <div class="n-h2">HART - What It Allows</div>
  <ul class="n-list">
  <li>Read configuration: tag number, range (LRV/URV), engineering units, damping time.</li>
  <li>Remote calibration: adjust zero/span from control room via HART communicator.</li>
  <li>Diagnostics: sensor temp, electronics temp, device status, error codes.</li>
  <li>Multivariable: read additional variables (e.g. temp + pressure from one Tx).</li>
  </ul>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Voltage check:</strong> Across 250 Ω resistor, V = I × R ranges from 4mA × 250 = <span class="n-val">1V</span> up to 20mA × 250 = <span class="n-val">5V</span>. HART needs a minimum <span class="n-val">250 mV</span> peak signal - so 250 Ω always provides enough. The 250 Ω may simply be the input impedance of the DCS/PLC card.</div></div>

  <div class="n-h2">Smart Transmitter - 8 Smart Features</div>
  <ol class="n-steps">
  <li><strong>Digital communication</strong> - HART, Foundation Fieldbus, Profibus for remote config.</li>
  <li><strong>Self-diagnostics</strong> - continuously checks electronics, reports faults remotely.</li>
  <li><strong>Characterisation</strong> - linearises non-linear sensors (square root extraction for DP flow).</li>
  <li><strong>Temperature compensation</strong> - internal sensor compensates ambient effects.</li>
  <li><strong>Multi-range capability</strong> - configurable LRV/URV via HART, no physical adjustment.</li>
  <li><strong>Unit conversion</strong> - reads in engineering units (bar, kPa, mH₂O).</li>
  <li><strong>Tag identification</strong> - stores tag number, location, install date in memory.</li>
  <li><strong>Datalogging</strong> - some store historical process data.</li>
  </ol>
  <table class="n-table">
  <tr><th>Conventional (Dumb)</th><th>Smart</th></tr>
  <tr><td class="bad">Screwdriver trimmer adjustment</td><td class="ok">Configure via HART communicator</td></tr>
  <tr><td class="bad">Fixed range</td><td class="ok">Flexible range (LRV/URV)</td></tr>
  <tr><td class="bad">No diagnostics</td><td class="ok">Self-diagnostic + remote calibration</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> "<strong>Live Zero</strong>" - 4mA proves the loop is alive. Dead loop = 0mA = broken wire. That single fact is why 4-20mA beats 0-20mA every time.</div></div>

<div class="n-h1" id="s-sipart">12. SIPART PS2 - FUNCTION & RECALIBRATION TRIGGERS</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Function:</strong> Receives 4-20mA from controller → converts to valve position → measures actual stem position via feedback → corrects error by adjusting air pressure to actuator. Eliminates valve hysteresis and friction effects for accurate position control.</div></div>

  <div class="n-h2">Completion</div>
  <p class="n-p">After Run 5, SIPART displays <span class="n-val">'END'</span> or <span class="n-val">'FINISH'</span>. The positioner now knows: closed position, open position, travel time, and friction level. It returns to automatic mode and responds accurately to the 4-20mA setpoint.</p>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Surveyor Q (Deswal):</strong> When would you recalibrate a SIPART PS2?<br><strong>Ideal Answer:</strong> After valve packing replacement (changes friction), after actuator diaphragm/spring replacement (changes travel force), after complete valve overhaul, on new valve installation, if position indication is erratic, after instrument air pressure change, or if the valve hunts (oscillates around setpoint - friction mis-characterisation). The Run 1-5 auto-cal corrects all mechanical changes with no manual adjustment.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Prerequisite for calibration:</strong> Instrument air connected, 4-20mA supply connected, and valve free to move (no mechanical obstruction).</div></div>

<div class="n-h1" id="s-dp">13. DP TRANSMITTER - ZERO SUPPRESSION & FLOW FORMULA</div>

  <div class="n-formula">Q = K × √(DP)<div class="label">Flow rate from orifice DP; K = flow coefficient</div></div>
  <div class="n-formula">h = DP / (ρ × g)<div class="label">Liquid level from hydrostatic DP</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Zero Suppression (Wet Leg):</strong> If the HP connecting leg is filled with liquid (wet leg), a constant hydrostatic head is added to HP. The transmitter reads HIGH when the tank is empty. A <strong>zero trim</strong> is needed to suppress this offset so empty tank = 4mA.</div></div>

  <div class="n-h2">Pressure Mismatch - Full Cause List</div>
  <p class="n-p"><em>Example: local gauge shows 3 bar, transmitter shows 2.5 bar - what causes it?</em></p>
  <ol class="n-steps">
  <li><strong>Height difference</strong> - Tx mounted higher/lower than gauge → hydrostatic head difference in connecting pipe.</li>
  <li><strong>Transmitter calibration error</strong> - zero or span not set correctly.</li>
  <li><strong>Gauge calibration error</strong> - local gauge not calibrated.</li>

<div class="n-h1" id="s-analyzers">🎚️ O2 Analyser, Salinometer &amp; Viscotherm</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Kamath, Sanjib, Vishwanathan, Deswal ask these across every oral.</strong></div></div>
  <div class="n-h2">Oxygen Analyser - 3 Types</div>
  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Ship Use</th></tr>
    <tr><td><strong>Paramagnetic</strong></td><td>O2 is paramagnetic (attracted to magnetic fields) - displaces a suspended dumbbell test body proportional to O2 concentration</td><td>Boiler combustion control - most accurate</td></tr>
    <tr><td><strong>Electrochemical (Galvanic)</strong></td><td>O2 diffuses through membrane, reacts at cathode generating current proportional to O2 concentration. Cell consumed over 1–3 years.</td><td>Portable enclosed space entry checks</td></tr>
    <tr><td><strong>Zirconia</strong></td><td>ZrO2 cell heated to high temp acts as O2 ion conductor. EMF proportional to ratio of O2 in flue gas vs reference air.</td><td>Direct high-temperature exhaust O2 measurement</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Calibration:</strong> Zero = pass pure nitrogen (0% O2), adjust zero trim to 0.0%. Span = pass certified span gas or clean atmospheric air (20.9% O2), adjust span trim to match.</div></div>
  <div class="n-h2">Salinometer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Principle:</strong> Salt content measured by proportional electrical conductivity. AC voltage applied between submerged electrodes (AC mandatory to prevent electrode polarisation errors). Dissolved Na⁺ and Cl⁻ ions conduct current - higher salt = higher conductivity = higher output. Maintains boiler feed water below <span class="n-val">5–15 ppm</span>. If salinity exceeds setpoint, dump solenoid valve diverts product to bilge rather than contaminating freshwater tanks.</div></div>
  <div class="n-h2">Viscotherm HFO Controller</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Purpose:</strong> Maintains HFO at ideal injection viscosity <span class="n-val">10–15 cSt</span> at engine injectors. Principle: rotational viscometer spindle runs at constant speed through flowing fuel. Higher viscosity = more torque = higher motor current = process variable (PV). Controller adjusts steam valve on heater. Why viscosity not temperature control: different fuel batches have different viscosity-temperature curves - direct viscosity measurement gives consistent injection regardless of fuel grade.</div></div>


  <div class="n-h2">Galvanometer</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working Principle (Moving Coil):</strong> Rectangular coil of fine wire suspended in permanent magnet field. Current flows → F=BIL force → coil rotates. Opposed by restoring spring. Deflection proportional to current. Very sensitive (microamps/nanoamps).<br><strong>Ship Applications:</strong> Insulation monitoring (detects earth leakage), battery internal resistance, Wheatstone bridge null detector, thermocouple amplifier output measurement.</div></div>

<div class="n-h1" id="s-proximity">🎯 Proximity Sensors &amp; Speed Measurement</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Praveen Nair and Vishwanathan test eddy current physics and sensor application variances.</strong></div></div>
  <div class="n-h2">Inductive Proximity Sensor</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Working:</strong> Internal oscillator coil projects high-frequency alternating EM field (<span class="n-val">10 kHz–1 MHz</span>). When metallic target enters, induced eddy currents draw energy from oscillator (eddy current damping) - amplitude drops - detector switches output. <strong>Metallic targets only.</strong> Sensing range: ferrous steel 100%, aluminium ~60%, copper ~40%. Unaffected by oil, dirt, moisture. Used for: shaft RPM, valve position, crankshaft TDC detection.</div></div>
  <div class="n-h2">Sensor Comparison</div>
  <table class="n-table">
    <tr><th>Type</th><th>Principle</th><th>Target</th><th>Ship Use</th></tr>
    <tr><td>Inductive</td><td>Eddy current damping of EM field</td><td>Metals only</td><td>Shaft RPM, valve, crank angle</td></tr>
    <tr><td>Capacitive</td><td>Target modifies capacitance of dielectric field</td><td>Metals + non-metals (liquids)</td><td>Level switches in non-metallic tanks</td></tr>
    <tr><td>Magnetic/Reed</td><td>Moving magnet actuates sealed reed leaves</td><td>Magnetic fields</td><td>Bilge float switches, door limits</td></tr>
    <tr><td>Ultrasonic</td><td>Acoustic pulse travel time</td><td>Any reflective surface</td><td>Tank level monitoring</td></tr>
    <tr><td>LVDT</td><td>Moving iron core shifts mutual inductance</td><td>Mechanical linkages</td><td>Governor/control valve stem feedback</td></tr>
  </table>
  <div class="n-formula">RPM = (Pulses per second × 60) / Number of teeth<div class="label">Toothed gear wheel + magnetic pickup - counts teeth passing per second</div></div>

<div class="n-h1" id="s-modbus">🖥️ Modbus Communication Protocol</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Sanjib focuses on protocol architecture and function codes.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Architecture:</strong> Strictly Master/Slave. Only ONE Master (PLC/DCS) initiates requests. Up to <span class="n-val">247</span> slave addresses. Slaves only respond when their specific address is called. Variants: RTU (binary, RS-485), ASCII (text, RS-485), TCP/IP (Ethernet, <span class="n-val">10–100 Mbps</span>).</div></div>
  <div class="n-h2">Modbus Function Codes</div>
  <table class="n-table">
    <tr><th>FC</th><th>Name</th><th>Data Type</th><th>Use</th></tr>
    <tr><td><span class="n-val">FC 01</span></td><td>Read Coil Status</td><td>Digital Output</td><td>Reads solenoid/relay ON/OFF states</td></tr>
    <tr><td><span class="n-val">FC 02</span></td><td>Read Discrete Input</td><td>Digital Input</td><td>Reads contact/limit switch states</td></tr>
    <tr><td><span class="n-val">FC 03</span></td><td>Read Holding Registers</td><td>Analogue Output</td><td>Reads configuration/setpoint parameters</td></tr>
    <tr><td><span class="n-val">FC 04</span></td><td>Read Input Registers</td><td>Analogue Input</td><td>Reads live sensor measurements</td></tr>
    <tr><td><span class="n-val">FC 06</span></td><td>Write Single Register</td><td>Analogue</td><td>Updates a single setpoint value</td></tr>
    <tr><td><span class="n-val">FC 16</span></td><td>Write Multiple Registers</td><td>Analogue Array</td><td>Configures multiple parameters at once</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>RS-485 Termination Rule:</strong> RS-485 bus runs up to <span class="n-val">1200 m</span>. A <span class="n-val">120 Ω</span> termination resistor must be connected across the two differential wires at BOTH extreme ends of the bus to prevent signal reflections.</div></div>

<div class="n-h1" id="s-megger">⚡ Megger, IR Testing &amp; Insulation Physics</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>All surveyors ask testing physics and component protections.</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why DC not AC for IR testing:</strong> AC causes continuous capacitive charging current (through cable/winding capacitance) to flow - this adds to leakage current giving artificially low IR. DC: after initial capacitive charge settles, only pure resistive leakage current flows → accurate insulation resistance measurement.</div></div>
  <table class="n-table">
    <tr><th>Equipment</th><th>Test Voltage</th><th>Minimum IR</th></tr>
    <tr><td>LV equipment (440V)</td><td class="hl"><span class="n-val">500V DC</span></td><td class="hl"><span class="n-val">1 MΩ</span></td></tr>
    <tr><td>HV (3.3–6.6 kV)</td><td class="hl"><span class="n-val">2500–5000V DC</span></td><td class="hl"><span class="n-val">kV + 1 MΩ</span></td></tr>
    <tr><td class="bad">Sensitive electronics/PCBs</td><td class="bad"><span class="n-val">50–100V DC ONLY</span></td><td class="bad">Standard megger destroys semiconductors</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>DAR (Dielectric Absorption Ratio) test:</strong> Quick variant of PI test. DAR = IR(60 sec) / IR(30 sec). DAR &gt; 1.6 = good. DAR &lt; 1.4 = poor insulation. Use when full 10-minute PI test is impractical.</div></div>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Post-test discharge mandatory:</strong> After DC megger test, connect shorting probe to earth and discharge for minimum <span class="n-val">30 seconds</span> - winding capacitance stores charge = shock hazard.</div></div>

<div class="n-h1" id="s-ums">🚨 UMS Alarm System &amp; Pressure Calibration</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>SOLAS UMS requirements:</strong> When machinery space unattended, alarms must be routed to bridge AND duty engineer cabin. Engineer alarm: if not acknowledged within <span class="n-val">3 minutes</span> → Stage 1 (bridge alarm) → Stage 2 (master alarm). Ensures assistance if engineer collapses alone in machinery space.</div></div>
  <div class="n-h2">Mandatory UMS Monitoring Points</div>
  <ul class="n-list">
    <li><strong>Main/auxiliary engines:</strong> High cooling water temp, high LO temp, low LO pressure</li>
    <li><strong>Bilge network:</strong> Float level alarms in all machinery wells</li>
    <li><strong>Generators:</strong> Overcurrent, under-voltage, reverse power</li>
    <li><strong>Steering gear:</strong> Motor overload, complete power failure</li>
  </ul>
  <div class="n-h2">Standard Pressure Transmitter Calibration (6 Steps)</div>
  <ol class="n-steps">
    <li>Isolate transmitter from process - close root valve, bleed trapped pressure via bleed plug</li>
    <li>Connect precision calibration pressure source to HP port. Connect multimeter in series with loop to read 4-20 mA.</li>
    <li>Apply 0% pressure → adjust ZERO trim → output must read exactly <span class="n-val">4.000 mA</span></li>
    <li>Apply 100% pressure → adjust SPAN trim → output must read exactly <span class="n-val">20.000 mA</span></li>
    <li>Apply 50% pressure → verify output = <span class="n-val">12.000 mA</span> (linearity check)</li>
    <li>Log all readings, update calibration due tag, reconnect to process</li>
  </ol>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
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

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
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
</div>
`);

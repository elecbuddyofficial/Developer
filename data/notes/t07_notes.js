window.loadNotes("T07", `<div class="view" id="view-notes-t07">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T07')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 07 - Control Systems & PLC</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">PID & Cascade</span>
      <span class="tag tag-purple">PLC Programming</span>
    </div>
  </div>
  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-openclosed')">Open vs Closed</button>
    <button class="anc-btn" onclick="jumpTo('s-pid')">PID Controller</button>
    <button class="anc-btn" onclick="jumpTo('s-cascade')">Cascade Control</button>
    <button class="anc-btn" onclick="jumpTo('s-plc')">PLC & Ladder</button>
    <button class="anc-btn" onclick="jumpTo('s-timers')">Timers & Counters</button>
    <button class="anc-btn" onclick="jumpTo('s-systems')">Specific Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-pms')">PMS & SCADA</button>
    <button class="anc-btn" onclick="jumpTo('s-valves')">Control Valves</button>
    <button class="anc-btn" onclick="jumpTo('s-gap')">Gap Additions</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">
  
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> PID controller (P, I, D actions, offset, integral windup), Open vs Closed loop, PLC scan cycle and memory types, Ladder logic, Cascade control (Boiler/HFO), 3-element feedwater control, PMS sequential load restoration, and PLC timer types.</div></div>

  <!-- ═══ SECTION 1 ═══ -->
  <div class="n-h1" id="s-openclosed">1. Open Loop vs Closed Loop Control</div>
  <div class="n-grid">
    <div class="n-card">
      <div class="card-title">OPEN LOOP CONTROL</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Principle:</strong> Output has NO effect on the control action. No feedback from output to input.</li>
          <li><strong>Flow:</strong> Input → Controller → Actuator → Process → Output (output not measured).</li>
          <li><strong>Disadvantage:</strong> Cannot correct for disturbances - output may drift.</li>
          <li><strong>Advantage:</strong> Simple, cheap, stable.</li>
          <li><strong>Ship Examples:</strong> Timers, manual fixed settings, electric kettle timer, fixed pump speed.</li>
        </ul>
      </div>
    </div>
    <div class="n-card">
      <div class="card-title">CLOSED LOOP CONTROL</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Principle:</strong> Output continuously MEASURED and FED BACK to controller.</li>
          <li><strong>Action:</strong> Controller compares output with setpoint → calculates ERROR → adjusts output.</li>
          <li><strong>Advantage:</strong> Self-correcting against disturbances.</li>
          <li><strong>Ship Examples:</strong> AVR (voltage control), autopilot, boiler pressure, fuel oil temp, HVAC.</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Key Terms:</strong><br>
  <strong>Setpoint (SP):</strong> Desired value we want.<br>
  <strong>Process Variable (PV):</strong> Actual measured value.<br>
  <strong>Manipulated Variable (MV):</strong> Controller output - what is adjusted.<br>
  <strong>Error (e):</strong> <span class="n-val">e = SP - PV</span></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Feedback Types:</strong><br>
  <strong>Negative Feedback:</strong> Output fed back in opposition to input - reduces error - stabilises system. Most common in control systems.<br>
  <strong>Positive Feedback:</strong> Output fed back in same direction as input - amplifies deviation - destabilising. NOT used in control - used in oscillators.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Open loop: 'Fire and forget' - like posting a letter. Closed loop: 'Fire and verify' - like a phone call. Zero error = process at setpoint = controller satisfied.</div></div>


  <!-- ═══ SECTION 2 ═══ -->
  <div class="n-h1" id="s-pid">2. PID Controller - P, I, D Actions</div>
  
  <div class="n-formula">MV(t) = Kp × e(t) + Ki × ∫e dt + Kd × (de/dt) + Bias<div class="label">e = error (SP - PV) · Kp = Proportional gain · Ki = Integral gain · Kd = Derivative gain · MV = Manipulated Variable · Bias = steady state value</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>P - PROPORTIONAL ACTION:</strong> Output proportional to current error. Large error = large correction.<br>
  <strong>Proportional Band (PB):</strong> Range of error over which controller output changes from <span class="n-val">0%</span> to <span class="n-val">100%</span>. PB = (1/Kp) × <span class="n-val">100%</span>. Narrow PB (high Kp) = aggressive. Wide PB (low Kp) = sluggish.<br>
  <strong>Offset Problem:</strong> P-only controller CANNOT eliminate steady-state error (offset). Some error must exist to maintain controller output that balances load. <strong>Solution:</strong> Add Integral action.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>I - INTEGRAL ACTION (RESET):</strong> Integrates (accumulates) error over time. Even small constant error eventually produces large output - keeps increasing until error = ZERO.<br>
  <strong>Primary Purpose:</strong> ELIMINATES STEADY-STATE OFFSET.<br>
  <strong>Integral Windup:</strong> If process is limited (valve fully open), integral keeps accumulating - when limitation removed → large overshoot. <strong>Prevention:</strong> anti-windup circuits clamp integral when output saturated.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>D - DERIVATIVE ACTION (RATE):</strong> Responds to HOW FAST error is changing. Anticipates approach to setpoint.<br>
  <strong>Purpose:</strong> DAMPING / ANTICIPATION - reduces overshoot, improves stability.<br>
  <strong>Problem:</strong> Sensitive to NOISE - high frequency noise → large de/dt → large output spikes. <strong>Solution:</strong> Apply derivative to PV only (not to error) or use derivative filter.</div></div>

  <table class="n-table">
    <tr><th>ACTION</th><th>RESPONDS TO</th><th>ELIMINATES</th><th>PROBLEMS</th></tr>
    <tr><td><strong>P (Proportional)</strong></td><td>Current error magnitude</td><td>Reduces error (not to zero)</td><td>Leaves steady-state offset</td></tr>
    <tr><td><strong>I (Integral)</strong></td><td>Accumulated error over time</td><td class="ok">Steady-state offset</td><td>Integral windup, oscillation</td></tr>
    <tr><td><strong>D (Derivative)</strong></td><td>Rate of change of error</td><td class="ok">Overshoot</td><td class="bad">Noise amplification</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>P</strong> = PRESENT error. <strong>I</strong> = PAST errors (accumulated). <strong>D</strong> = FUTURE error (predicted from trend). P alone: fast but leaves offset. PI: eliminates offset. PID: eliminates offset AND reduces overshoot.</div></div>

  <!-- ═══ SECTION 3 ═══ -->
  <div class="n-h1" id="s-cascade">3. Cascade Control System</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Anil Deswal specific:</strong> Know the difference between Cascade and simple feedback.</div></div>

  <p class="n-p"><strong>Cascade Control</strong> uses TWO controllers - one inside the other - where the output of the OUTER (primary/master) controller becomes the SETPOINT of the INNER (secondary/slave) controller.</p>

  <ol class="n-steps">
    <li><strong>Primary Controller (Outer Loop):</strong> Measures the main controlled variable (e.g., TEMPERATURE). Compares with setpoint. Output = setpoint command to secondary controller.</li>
    <li><strong>Secondary Controller (Inner Loop):</strong> Measures intermediate variable (e.g., FLOW). Receives setpoint from primary controller. Directly manipulates the final control element (e.g., steam valve).</li>
    <li><strong>Advantage:</strong> Inner controller corrects inner loop disturbances quickly - before they affect outer variable, resulting in faster response and better disturbance rejection.</li>
  </ol>

  <table class="n-table">
    <tr><th>SHIP EXAMPLES OF CASCADE CONTROL</th></tr>
    <tr><td><strong>1. Boiler Steam Temperature:</strong> Outer loop: steam temperature controller (slow). Inner loop: steam flow controller (fast). If supply pressure varies, inner loop corrects flow immediately before temperature changes.</td></tr>
    <tr><td><strong>2. Fuel Oil Temperature:</strong> Outer loop: HFO temperature controller. Inner loop: steam flow controller. Controls steam valve.</td></tr>
    <tr><td><strong>3. Cargo Pump Discharge Pressure:</strong> Outer loop: vessel tank level controller. Inner loop: pump flow controller. Controls pump VFD speed.</td></tr>
  </table>


  <!-- ═══ SECTION 4 ═══ -->
  <div class="n-h1" id="s-plc">4. PLC & Ladder Diagram</div>

  <div class="n-h2">PLC Scan Cycle</div>
  <ol class="n-steps">
    <li><strong>Input Scan:</strong> Read all physical inputs → store in INPUT IMAGE REGISTER (memory snapshot).</li>
    <li><strong>Program Execution:</strong> Execute user program top-to-bottom using input image register values. Write results to OUTPUT IMAGE REGISTER.</li>
    <li><strong>Output Scan:</strong> Write output image register values to physical output modules - update actual outputs.</li>
    <li><strong>Housekeeping:</strong> Update communications, check watchdog timer, internal diagnostics. Repeat from Step 1.</li>
  </ol>
  
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Scan time</strong> is typically <span class="n-val">1-50ms</span>. <strong>Watchdog Timer:</strong> If scan does not complete within set maximum time, PLC detects hang and goes to SAFE STATE (outputs de-energised). Critical safety feature.</div></div>

  <table class="n-table">
    <tr><th>PLC MEMORY TYPES</th><th>FUNCTION</th></tr>
    <tr><td><strong>ROM</strong> (Non-volatile)</td><td>Stores PLC operating system (firmware). Not lost on power failure.</td></tr>
    <tr><td><strong>RAM</strong> (Volatile)</td><td>Stores user program & process data. <strong>LOST</strong> on power failure - needs battery backup.</td></tr>
    <tr><td><strong>EEPROM / Flash</strong></td><td>Stores user program permanently. Survives power loss. Electrically erasable.</td></tr>
    <tr><td><strong>Battery-Backed RAM</strong></td><td>RAM with lithium battery (replace every 2-5 years). If battery fails, data lost on next power failure.</td></tr>
  </table>

  <div class="n-h2">Ladder Diagram & IEC Languages</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ladder Diagram (LD):</strong> Resembles relay logic. Rungs connect power rails. <strong>Normally Open (NO):</strong> [ ] passes power when bit is TRUE (1). <strong>Normally Closed (NC):</strong> [ / ] passes power when bit is FALSE (0). Output coil activates when rung is TRUE.</div></div>

  <table class="n-table">
    <tr><th>IEC 61131-3 LANGUAGE</th><th>TYPE</th><th>DESCRIPTION & USE</th></tr>
    <tr><td><strong>Ladder Diagram (LD)</strong></td><td>Graphical</td><td>Relay-style diagrams. Used for sequential logic, motor interlocking.</td></tr>
    <tr><td><strong>Function Block Diagram (FBD)</strong></td><td>Graphical</td><td>Blocks connected by signal lines. Used for PID, analogue processing.</td></tr>
    <tr><td><strong>Structured Text (ST)</strong></td><td>Text</td><td>High-level Pascal-like language. Used for complex algorithms.</td></tr>
    <tr><td><strong>Sequential Function Chart (SFC)</strong></td><td>Graphical</td><td>State machine (steps/transitions). Used for startup sequences.</td></tr>
  </table>


  <!-- ═══ SECTION 5 ═══ -->
  <div class="n-h1" id="s-timers">5. PLC Timers & Counters</div>

  <table class="n-table">
    <tr><th>TIMER</th><th>OPERATION</th><th>SHIP EXAMPLE</th></tr>
    <tr><td><strong>TON (On-Delay)</strong></td><td>Input ON → starts counting → output turns ON after preset. (Resets if input goes OFF)</td><td>Engine room fan runs <span class="n-val">5 min</span> BEFORE LO pump allowed to start.</td></tr>
    <tr><td><strong>TOF (Off-Delay)</strong></td><td>Input ON → output ON immediately. Input OFF → starts counting → output turns OFF after preset.</td><td>Cooling fan keeps running <span class="n-val">10 min</span> AFTER engine stops.</td></tr>
    <tr><td class="hl"><strong>RTO (Retentive)</strong></td><td>Accumulates time even when input turns OFF/ON. Must be MANUALLY RESET.</td><td>Total running hours for maintenance scheduling.</td></tr>
    <tr><td><strong>TP (Pulse)</strong></td><td>Input ON → output ON for EXACTLY preset time then OFF.</td><td>Single-shot pulse to open solenoid valve for exactly <span class="n-val">2 seconds</span>.</td></tr>
  </table>


  <!-- ═══ SECTION 6 ═══ -->
  <div class="n-h1" id="s-systems">6. Specific Ship Control Systems</div>

  <div class="n-h2">Fuel Oil Temperature Control Loop</div>
  <ul class="n-list">
    <li><strong>Sensor:</strong> PT100 measures HFO temperature after heater (target <span class="n-val">120-150 °C</span>).</li>
    <li><strong>Transmitter:</strong> <span class="n-val">4-20mA</span> output to PI controller. (Derivative not needed, would amplify noise).</li>
    <li><strong>I/P Converter:</strong> Converts <span class="n-val">4-20mA</span> to <span class="n-val">3-15 psi</span> pneumatic signal.</li>
    <li><strong>Control Valve:</strong> Pneumatic steam control valve on heater.</li>
    <li><strong>Fail-Safe:</strong> Steam valve is <strong>FAIL CLOSE</strong> (Air to Open) - if air/signal lost, steam shuts off to prevent fire risk.</li>
  </ul>

  <div class="n-h2">3-Element Boiler Feedwater Control</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Problem with Single-Element (Level Only):</strong> When steam demand increases suddenly, bubbles form causing "swell". Controller sees high level and wrongly CLOSES feedwater valve.</div></div>
  <ol class="n-steps">
    <li><strong>Element 1 (Steam Flow):</strong> Feedforward - primary demand signal. Instantly opens feedwater valve proportionally when load increases.</li>
    <li><strong>Element 2 (Feedwater Flow):</strong> Feedforward - confirms feedwater valve is responding correctly.</li>
    <li><strong>Element 3 (Drum Water Level):</strong> Feedback - slow trim correction for any long-term drift.</li>
  </ol>
  <div class="n-ok"><div class="icon">💡</div><div class="body">Result: Eliminates swell/shrink effect, giving fast response and accurate control.</div></div>


  <!-- ═══ SECTION 7 ═══ -->
  <div class="n-h1" id="s-pms">7. PMS & SCADA / IAS</div>

  <div class="n-h2">Power Management System (PMS) Functions</div>
  <ul class="n-list">
    <li><strong>Load Monitoring:</strong> Continuously monitors kW and kVA on running generators.</li>
    <li><strong>Auto-Start/Stop:</strong> Starts standby generator when approaching limits; stops one generator when load reduces (fuel saving).</li>
    <li><strong>Load Shedding:</strong> If generator trips, immediately sheds non-essential loads (e.g. galley, HVAC) to protect remaining generators. Never sheds Priority 1 (steering, fire pump).</li>
    <li><strong>Blackout Prevention:</strong> Staged load shedding before Overcurrent Relay trips generator.</li>
    <li><strong>Load Optimisation:</strong> Runs generators at <span class="n-val">70-80%</span> rating for best efficiency.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Sequential Load Restoration (After Blackout):</strong><br>
  T=0: Blackout. Emergency generator starts (within <span class="n-val">45 sec</span>).<br>
  T=<span class="n-val">1-2 min</span>: First main generator online.<br>
  T=<span class="n-val">2-3 min</span>: Seawater cooling pump (highest priority).<br>
  T=<span class="n-val">3-4 min</span>: LO pump and separator.<br>
  T=<span class="n-val">4-5 min</span>: Fuel oil pump and purifier.<br>
  T=<span class="n-val">5-7 min</span>: Auxiliary boiler.<br>
  T=<span class="n-val">9-12 min</span>: HVAC, accommodation, galley last.<br>
  <strong>Why Delays (<span class="n-val">30s</span> to <span class="n-val">2m</span>)?</strong> Motor starting currents are 5-8x rated. Simultaneous starts would overload generator.</div></div>


  <!-- ═══ SECTION 8 ═══ -->
  <div class="n-h1" id="s-valves">8. Control Valves & I/P Converters</div>

  <p class="n-p"><strong>I/P Converter (Current to Pressure):</strong> Converts <span class="n-val">4-20mA</span> to <span class="n-val">3-15 psi</span> pneumatic signal. <span class="n-val">4mA</span> = <span class="n-val">3 psi</span> (valve minimum), <span class="n-val">20mA</span> = <span class="n-val">15 psi</span> (valve maximum). Coil generates electromagnetic force proportional to current to control air bleed.</p>

  <table class="n-table">
    <tr><th>FAIL-SAFE VALVE POSITIONS</th><th>OPERATION</th><th>USED FOR</th></tr>
    <tr><td><strong>FAIL CLOSE</strong> (Air to Open)</td><td>Air pressure opens. Spring closes on failure.</td><td class="ok">Fuel supply valves, steam heaters (prevents fire)</td></tr>
    <tr><td><strong>FAIL OPEN</strong> (Air to Close)</td><td>Air pressure closes. Spring opens on failure.</td><td class="ok">Cooling water valves (keeps cooling on)</td></tr>
  </table>


  <!-- ═══ SECTION 9 ═══ -->
  <div class="n-h1" id="s-gap">9. Gap Additions (v2.1 & v2.3)</div>

  <div class="n-grid-3">
    <div class="n-card">
      <div class="card-title">Foundation Fieldbus (FF)</div>
      <div class="card-desc">Fully digital, multi-drop. Devices powered over bus. Bi-directional. Supports peer-to-peer sharing. Speed: <span class="n-val">31.25 kbps</span>.</div>
    </div>
    <div class="n-card">
      <div class="card-title">HART</div>
      <div class="card-desc">Digital signal superimposed on <span class="n-val">4-20mA</span> loop. Uses existing wiring. Needs <span class="n-val">250Ω</span> resistor to convert current to <span class="n-val">1-5V</span> for communicator detection.</div>
    </div>
    <div class="n-card">
      <div class="card-title">Modbus</div>
      <div class="card-desc">Master-slave serial protocol (RS485). No peer-to-peer. Speed: 9600-<span class="n-val">115200 bps</span>.</div>
    </div>
  </div>

  <div class="n-h2">SIPART PS2 Calibration (Run 1 to 5)</div>
  <ul class="n-list">
    <li><strong>Run 1:</strong> Initialisation - determines total valve travel.</li>
    <li><strong>Run 2:</strong> Leakage (seat tightness).</li>
    <li><strong>Run 3:</strong> Response time measurement (speed).</li>
    <li><strong>Run 4:</strong> Friction analysis (static/sliding).</li>
    <li><strong>Run 5:</strong> Fine-tuning of control parameters.</li>
  </ul>

  <div class="n-h2">Relay Logic vs Ladder Logic</div>
  <ul class="n-list">
    <li><strong>Relay Logic (Hardwired):</strong> Physical components wired together. Bulky, hard to troubleshoot/modify.</li>
    <li><strong>Ladder Logic (Software):</strong> Software representation. Easy to modify, built-in diagnostics. Requires programming knowledge.</li>
  </ul>

  <div class="n-h2">Latching Circuit (Seal-In)</div>
  <p class="n-p">Maintains energised state after momentary START signal is removed via a parallel NO auxiliary contact. Requires NC STOP button to unlatch. In PLC, uses SET and RESET coils.</p>

  <div class="n-h2">ADC (Analog to Digital Converter)</div>
  <p class="n-p">Converts continuous analog (<span class="n-val">4-20mA</span>) to digital number. 12-bit = 4096 steps. E.g., <span class="n-val">4mA</span>=0, <span class="n-val">20mA</span>=4095, <span class="n-val">12mA</span>=2048. DAC does the reverse.</p>


  <!-- ═══ SURVEYOR Q&A ═══ -->
  
  <!-- ═══ T07 GAPS ADDED ═══ -->

  <div class="n-h1" id="s-plc-hardware">🖥️ PLC Hardware Modules</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask the I/O module types and their functions.</strong></div></div>
  <table class="n-table">
    <tr><th>Module</th><th>Function</th><th>Shipboard Examples</th></tr>
    <tr><td><strong>CPU</strong></td><td>Executes user program logic, manages memory and clocks</td><td>Microprocessor unit with ROM, RAM, EEPROM firmware</td></tr>
    <tr><td><strong>Digital Input (DI)</strong></td><td>Reads ON/OFF field signals</td><td>Optocoupler isolation for limit switches, proximity sensors, push buttons</td></tr>
    <tr><td><strong>Digital Output (DO)</strong></td><td>Drives ON/OFF equipment</td><td>Relay or transistor outputs powering contactors and solenoids</td></tr>
    <tr><td><strong>Analogue Input (AI)</strong></td><td>Converts continuous signals via internal ADC</td><td>4-20 mA from pressure/temperature transmitters, 0-10V position</td></tr>
    <tr><td><strong>Analogue Output (AO)</strong></td><td>Converts digital logic via internal DAC</td><td>4-20 mA reference lines feeding VFDs and control valve positioners</td></tr>
    <tr><td><strong>Communication</strong></td><td>Serial or Ethernet network links</td><td>Modbus RTU/TCP, Profibus, Foundation Fieldbus interfaces</td></tr>
    <tr><td><strong>Power Supply</strong></td><td>Delivers stable internal voltages</td><td>Regulated 24V/5V DC - often redundant on safety-critical networks</td></tr>
  </table>

  <div class="n-h1" id="s-ias-scada">🌐 IAS/SCADA Architecture</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan asks IAS hardware layers and the Historian server role.</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">Hardware Layers</div><div class="card-desc"><ul class="n-list"><li><strong>Distributed PLCs:</strong> Controller nodes across ER, cargo decks, purifier spaces</li><li><strong>Data Network:</strong> Redundant fiber or industrial Ethernet backbone</li><li><strong>Workstations:</strong> Graphic terminals in ECR and bridge</li><li><strong>Historian Server:</strong> Logs historical parameter trends vs time - used for trend analysis and SEEMP Part III CII data collection</li></ul></div></div>
    <div class="n-card" style="border-color:var(--orange-border)"><div class="card-title" style="color:var(--orange)">Operational Functions</div><div class="card-desc"><ul class="n-list"><li><strong>Graphical mimics:</strong> Live pipeline flows, temperatures, tank levels</li><li><strong>Alarm management:</strong> Processes, categorises, timestamps alarms</li><li><strong>Remote setpoint adjustment:</strong> ECR adjustment of PID parameters and actuator positions</li><li><strong>UMS routing:</strong> Channels health alarms to cabin panels in UMS mode</li></ul></div></div>
  </div>
  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> IAS = Historian + Mimics + Alarms + Remote trim + UMS extension. Modbus RTU = RS-485, 247 slaves, master/slave. Foundation Fieldbus = peer-to-peer, devices can control loops without central PLC. SIPART PS2 calibration: Run 1 to Run 5 = find stops, measure friction, optimise control.</div></div>

  <div class="n-h1" id="s-valve-positioner">🔧 Valve Positioner - Physics &amp; Correction</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a valve positioner is needed beyond an I/P converter:</strong> An I/P converter translates a 4–20 mA signal into 3–15 psi air. But the valve stem may not reach the exact commanded position due to: (1) <strong>Stiction:</strong> Static friction in valve packing - the stem doesn't move until sufficient pressure differential overcomes it. (2) <strong>Hysteresis:</strong> The stem position lags behind the control signal, following different paths on increasing vs decreasing signals due to friction and mechanical clearances.<br>
  A valve positioner forms a local mechanical feedback loop directly with the valve stem. It continuously compares the commanded position (from the I/P signal) with the actual stem position (from a feedback linkage or potentiometer). Any difference → positioner adjusts the pneumatic output to the actuator until error = zero. Overcomes stiction and hysteresis completely. Essential for precision flow control loops.</div></div>

<div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points.</div></div>

  <div class="n-h2">General Control Systems</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is the difference between open loop and closed loop control?</td>
      <td>Open loop has no feedback; cannot correct disturbances. Closed loop measures output and feeds back to calculate error (<span class="n-formula">SP-PV</span>) to self-correct.</td>
    </tr>
    <tr>
      <td>What is offset in a proportional controller and how is it eliminated?</td>
      <td>Offset is permanent residual error. It is eliminated by adding Integral (I) action which accumulates error over time until error is zero.</td>
    </tr>
    <tr>
      <td>What does P, I, and D do?</td>
      <td>P: fast response to current error. I: eliminates offset. D: anticipates trend to reduce overshoot.</td>
    </tr>
    <tr>
      <td>What is integral windup?</td>
      <td>When output is saturated (e.g. valve fully open), integral continues to accumulate, causing large overshoot when condition resolves. Prevented by anti-windup circuits.</td>
    </tr>
    <tr>
      <td>What is cascade control and where is it used?</td>
      <td>Two controllers: outer (primary) output becomes inner (secondary) setpoint. Inner corrects disturbances quickly. Used for boiler steam temperature (inner=steam flow) or HFO temperature.</td>
    </tr>
    <tr>
      <td>What is 3-element boiler feedwater control?</td>
      <td>Uses Steam Flow (feedforward), Feedwater Flow (feedforward), and Drum Level (feedback trim). Prevents "swell/shrink" effect during rapid load changes.</td>
    </tr>
  </table>

  <div class="n-h2">PLC & Hardware</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is a PLC scan cycle?</td>
      <td>1. Input scan, 2. Program execution, 3. Output scan, 4. Housekeeping. Takes <span class="n-val">1-50ms</span>.</td>
    </tr>
    <tr>
      <td>What are the types of memory in a PLC?</td>
      <td>ROM (OS firmware), RAM (user program/data, volatile, needs battery), EEPROM (permanent user program).</td>
    </tr>
    <tr>
      <td>What is a watchdog timer in a PLC?</td>
      <td>Hardware timer reset every scan. If CPU hangs, watchdog times out and forces outputs to safe state.</td>
    </tr>
    <tr>
      <td>What is ladder diagram programming?</td>
      <td>Graphical language resembling relay logic. Rungs have NO/NC contacts and output coils.</td>
    </tr>
    <tr>
      <td>What is a retentive timer (RTO)?</td>
      <td>Accumulates elapsed time across multiple ON periods. Needs manual reset. Used for total running hours.</td>
    </tr>
    <tr>
      <td>What is an I/P converter?</td>
      <td>Converts <span class="n-val">4-20mA</span> to <span class="n-val">3-15 psi</span> pneumatic signal for control valves.</td>
    </tr>
    <tr>
      <td>What is fail-open and fail-close?</td>
      <td>Fail close: spring closes on air loss (e.g., fuel valves for safety). Fail open: spring opens on air loss (e.g., cooling water).</td>
    </tr>
  </table>


  <!-- ═══ QUICK REVISION ═══ -->
  
  <div class="n-h1" id="s-cyber">🔐 IACS UR E26/E27 - Maritime Cybersecurity (Mandatory 2024)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand new mandatory regulation - surveyors asking this from 2024.</strong> All ships contracted on or after <span class="n-val">1 July 2024</span>. PLC, SCADA, and IAS systems are directly in scope.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)"><div class="card-title" style="color:var(--blue)">UR E26 - Ship Level</div><div class="card-desc">Treats ship as complete entity. 17 requirements across 5 NIST functions: Identify, Protect, Detect, Respond, Recover. Requires Cyber Security Design Description (CSDD) from shipyard.</div></div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)"><div class="card-title" style="color:var(--purple)">UR E27 - Equipment Level</div><div class="card-desc">Targets individual OT/CBS equipment. 30 core capabilities + 11 additional for systems on untrusted networks. Suppliers must prove compliance before equipment installed.</div></div>
  </div>
  <div class="n-h2">OT System Categories</div>
  <table class="n-table">
    <tr><th>Category</th><th>Consequence of Failure</th><th>Examples</th><th>Security Level</th></tr>
    <tr><td class="ok"><strong>I</strong></td><td>Localised inconvenience only</td><td>Crew entertainment, admin IT</td><td>Physical/logical isolation, basic access control</td></tr>
    <tr><td class="hl"><strong>II</strong></td><td>Performance degradation, no immediate safety risk</td><td>Cargo control, ballast water</td><td>Mandatory firewalls, security zones, log audits</td></tr>
    <tr><td class="bad"><strong>III - Essential</strong></td><td>Immediate risk to life, safety, or environment</td><td>Propulsion, steering, ECDIS, RADAR, DP</td><td>Cryptographic isolation, secure boot, real-time anomaly detection</td></tr>
  </table>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PA/GA in scope:</strong> Public Address/General Alarm systems are SOLAS statutory requirements. Must now have user authentication and integrity protection - unauthorized access could trigger false abandon-ship alarms. Even seemingly non-critical systems are in scope if connected to safety-critical networks.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is IACS UR E26 vs E27? (New 2024 - will be asked at every oral from 2025 onwards)</strong><br><strong>Ideal Answer:</strong> UR E26 = ship-level cyber resilience - secure integration of IT and OT throughout ship's lifecycle. 17 requirements across 5 NIST functions. Mandatory for ships contracted on or after <span class="n-val">1 July 2024</span>. UR E27 = individual equipment level - OEM must build 30 specific security capabilities into each Computer-Based System before installation. 11 additional if system connects to untrusted networks. Both mandatory. Class surveys verify compliance.</div></div>
  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>A technician wants to connect to the PLC for diagnostics - what cybersecurity protocol do you follow?</strong><br><strong>Ideal Answer:</strong> Under IACS UR E27, check system category - most PLCs are Category III. Protocol: (1) Scan technician laptop/USB for malware. (2) Verify identity and authorization. (3) Physical approval - turn key-switch or unlock port. (4) For remote access: enforce MFA. (5) Monitor all actions in immutable audit log. (6) Rotate any credentials after session. (7) Verify no unauthorized changes to PLC program after session.</div></div>

<div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>PID Actions</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>P=present(offset), I=past(eliminates offset), D=future(damps overshoot).</td>
    </tr>
    <tr>
      <td>Open vs Closed Loop</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Open=no feedback. Closed=feedback, Error=SP-PV, self-correcting.</td>
    </tr>
    <tr>
      <td>Cascade Control</td>
      <td class="hl">⭐⭐⭐⭐⭐ Anil Deswal</td>
      <td>Outer output = inner setpoint. Fast disturbance rejection. Boiler steam temp.</td>
    </tr>
    <tr>
      <td>PLC Scan & Memory</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Input→Program→Output. Watchdog=safe state. Battery RAM=data loss if dead.</td>
    </tr>
    <tr>
      <td>3-Element Boiler Control</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Sanjib</td>
      <td>Steam Flow + FW Flow (feedforward) + Level (trim). Prevents swell/shrink.</td>
    </tr>
    <tr>
      <td>PMS Functions</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Auto-start/stop, load shed, blackout prevention, sequential restoration.</td>
    </tr>
    <tr>
      <td>Timers (TON, TOF, RTO)</td>
      <td class="hl">⭐⭐⭐⭐ Kamath</td>
      <td>TON=delay ON. TOF=delay OFF. RTO=retentive (running hours).</td>
    </tr>
    <tr>
      <td>Sequential Restoration</td>
      <td class="hl">⭐⭐⭐⭐ Anil Deswal</td>
      <td>SW cooling (<span class="n-val">2-3m</span>) → LO → Fuel → Boiler → HVAC. <span class="n-val">30s-2m</span> delays.</td>
    </tr>
    <tr>
      <td>Fail-Safe Valves</td>
      <td class="hl">⭐⭐⭐⭐ All</td>
      <td>Fail close = fuel/steam. Fail open = cooling water.</td>
    </tr>
  </table>

  </div>
</div>`);

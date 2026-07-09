window.loadNotes("T07", `<div class="view" id="view-notes-t07">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="showView('notes-picker')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('T07')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>
  <div class="note-title">
    <h1>Topic 07 - Control Systems &amp; PLC</h1>
    <div class="sub">ETO CoC Oral Assessment · STCW Reg. III/6 · DG Shipping India</div>
    <div class="tags">
      <span class="tag tag-blue">🔴 Exam Critical</span>
      <span class="tag tag-orange">PID &amp; Cascade</span>
      <span class="tag tag-purple">PLC Programming</span>
    </div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-openclosed')">Open vs Closed Loop</button>
    <button class="anc-btn" onclick="jumpTo('s-pid')">PID Controller</button>
    <button class="anc-btn" onclick="jumpTo('s-feedforward')">Feedforward Control</button>
    <button class="anc-btn" onclick="jumpTo('s-cascade')">Cascade Control</button>
    <button class="anc-btn" onclick="jumpTo('s-plc')">PLC &amp; Ladder</button>
    <button class="anc-btn" onclick="jumpTo('s-plc-hardware')">PLC Hardware</button>
    <button class="anc-btn" onclick="jumpTo('s-timers')">Timers &amp; Counters</button>
    <button class="anc-btn" onclick="jumpTo('s-systems')">Specific Systems</button>
    <button class="anc-btn" onclick="jumpTo('s-pms')">PMS &amp; Load Management</button>
    <button class="anc-btn" onclick="jumpTo('s-preferential-trip')">Preferential Trip</button>
    <button class="anc-btn" onclick="jumpTo('s-valves')">Control Valves</button>
    <button class="anc-btn" onclick="jumpTo('s-valve-positioner')">Valve Positioner</button>
    <button class="anc-btn" onclick="jumpTo('s-ias-scada')">IAS / SCADA</button>
    <button class="anc-btn" onclick="jumpTo('s-fieldbus')">Fieldbus Protocols</button>
    <button class="anc-btn" onclick="jumpTo('s-gap')">Additional Topics</button>
    <button class="anc-btn" onclick="jumpTo('s-plc-noise')">PLC Noise &amp; Battery</button>
    <button class="anc-btn" onclick="jumpTo('s-cyber')">Cybersecurity</button>
    <button class="anc-btn" onclick="jumpTo('s-surveyorqa')">Surveyor Q&amp;A</button>
    <button class="anc-btn" onclick="jumpTo('s-quickrev')">Quick Revision</button>
  </div>

  <div class="note-content">

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Most Asked Topics:</strong> PID controller (P, I, D actions, offset, integral windup, anti-windup, derivative kick), Open vs Closed loop, PLC scan cycle and memory types, Ladder logic, Cascade control (Boiler/HFO), 3-element feedwater control, feedforward vs feedback, PMS sequential load restoration, PLC timer types, IACS UR E26/E27 cybersecurity (new from 2024).</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 1 - OPEN VS CLOSED LOOP
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-openclosed">1. Open Loop vs Closed Loop Control</div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">OPEN LOOP CONTROL</div>
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
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">CLOSED LOOP CONTROL</div>
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

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t07-open-closed-loop.png" alt="Open loop vs closed loop control block diagrams — open loop without feedback, closed loop with feedback path and error signal">
    <div class="note-diagram-cap">Fig. Open Loop vs Closed Loop — open loop: input → controller → process (no feedback); closed loop: output measured → error (SP−PV) → controller → process (self-correcting)</div>
  </div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Key Terms:</strong><br>
  <strong>Setpoint (SP):</strong> Desired value we want.<br>
  <strong>Process Variable (PV):</strong> Actual measured value.<br>
  <strong>Manipulated Variable (MV):</strong> Controller output - what is adjusted.<br>
  <strong>Error (e):</strong> <span class="n-val">e = SP − PV</span></div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Feedback Types:</strong><br>
  <strong>Negative Feedback:</strong> Output fed back in opposition to input - reduces error - stabilises system. Most common in control systems.<br>
  <strong>Positive Feedback:</strong> Output fed back in same direction as input - amplifies deviation - destabilising. NOT used in control - used in oscillators.</div></div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Open loop: "Fire and forget" - like posting a letter. Closed loop: "Fire and verify" - like a phone call. Zero error = process at setpoint = controller satisfied.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 2 - PID CONTROLLER
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pid">2. PID Controller - P, I, D Actions</div>

  <div class="n-formula">MV(t) = Kp × e(t) + Ki × ∫e dt + Kd × (de/dt) + Bias<div class="label">e = error (SP − PV) · Kp = Proportional gain · Ki = Integral gain · Kd = Derivative gain · MV = Manipulated Variable · Bias = steady-state value</div></div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>P - PROPORTIONAL ACTION:</strong> Output proportional to current error. Large error = large correction.<br>
  <strong>Proportional Band (PB):</strong> Range of error over which controller output changes from <span class="n-val">0%</span> to <span class="n-val">100%</span>. PB = (1/Kp) × <span class="n-val">100%</span>. Narrow PB (high Kp) = aggressive. Wide PB (low Kp) = sluggish.<br>
  <strong>Offset Problem:</strong> P-only controller CANNOT eliminate steady-state error (offset). Some error must exist to maintain controller output that balances load. <strong>Solution:</strong> Add Integral action.</div></div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>I - INTEGRAL ACTION (RESET):</strong> Integrates (accumulates) error over time. Even a small constant error eventually produces a large output - keeps increasing until error = ZERO.<br>
  <strong>Primary Purpose:</strong> ELIMINATES STEADY-STATE OFFSET.<br>
  <strong>Integral Windup:</strong> If the process is limited (valve fully open/closed), integral keeps accumulating. When limitation is removed → large overshoot. <strong>Prevention:</strong> Anti-windup circuits clamp the integral when output is saturated.</div></div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>D - DERIVATIVE ACTION (RATE):</strong> Responds to HOW FAST error is changing. Anticipates approach to setpoint.<br>
  <strong>Purpose:</strong> DAMPING / ANTICIPATION - reduces overshoot, improves stability.<br>
  <strong>Problem:</strong> Sensitive to NOISE - high-frequency noise → large de/dt → large output spikes. <strong>Solution:</strong> Apply derivative to PV only (not to error) or use a derivative filter.</div></div>

  <table class="n-table">
    <tr><th>ACTION</th><th>RESPONDS TO</th><th>ELIMINATES</th><th>PROBLEMS</th></tr>
    <tr><td><strong>P (Proportional)</strong></td><td>Current error magnitude</td><td>Reduces error (not to zero)</td><td>Leaves steady-state offset</td></tr>
    <tr><td><strong>I (Integral)</strong></td><td>Accumulated error over time</td><td class="ok">Steady-state offset</td><td>Integral windup, oscillation</td></tr>
    <tr><td><strong>D (Derivative)</strong></td><td>Rate of change of error</td><td class="ok">Overshoot</td><td class="bad">Noise amplification</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> <strong>P</strong> = PRESENT error. <strong>I</strong> = PAST errors (accumulated). <strong>D</strong> = FUTURE error (predicted from trend). P alone: fast but leaves offset. PI: eliminates offset. PID: eliminates offset AND reduces overshoot.</div></div>

  <!-- Anti-windup (GAP FILLED) -->
  <div class="n-h2">Integral Windup &amp; Anti-Windup (Examiner Favourite)</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner asks: "What happens when the control valve is saturated?"</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--red-border)">
      <div class="card-title" style="color:var(--red)">PROBLEM - Integral Windup</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Occurs when the controller output hits a <strong>physical limit</strong> (valve 100% open or 100% closed).</li>
          <li>Even though the actuator can go no further, the error continues to exist → the integral term keeps adding up (winding up) in the controller.</li>
          <li>When the setpoint is reached and error changes sign, the integral has wound up so large that the output stays saturated for a long time before the integral "unwinds" - causing massive <strong>overshoot</strong> and sluggish recovery.</li>
          <li><strong>Ship example:</strong> HFO heater starting cold - steam valve fully open for 20 minutes. Integral has accumulated enormously. When temperature finally reaches setpoint, controller overshoots badly and steam valve hammers shut - causing temperature oscillation.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">SOLUTION - Anti-Windup Techniques</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Clamping:</strong> When output reaches limits (0% or 100%), the integrator is frozen - no more accumulation. Simple, widely used.</li>
          <li><strong>Back-calculation:</strong> When output saturates, a feedback path feeds the difference back to reduce the integral state at a controlled rate. Smoother recovery than clamping.</li>
          <li><strong>Conditional integration:</strong> Integral only active when output is NOT saturated - stops accumulation at the moment saturation occurs.</li>
          <li><strong>Result:</strong> Fast, smooth recovery when setpoint is reached with no overshoot even after prolonged saturation.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Derivative Kick (GAP FILLED) -->
  <div class="n-h2">Derivative Kick &amp; D-on-Measurement</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Examiner asks: "What is derivative kick and how is it prevented?"</strong></div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Derivative Kick (Setpoint Step Problem):</strong><br>
  When the setpoint is suddenly changed (a step change), the error <code style="background:var(--surface3);padding:2px 6px;border-radius:4px">e = SP − PV</code> jumps instantaneously. The derivative term reacts to the rate of change of error - a step change creates an <strong>infinite rate of change</strong> (theoretically), producing a massive sudden output spike to the actuator. This spike is called the <strong>derivative kick</strong>. It can cause mechanical damage to valves, slam open actuators violently, or destabilise the process.<br><br>
  <strong>Solution - D-on-Measurement (or D-on-PV):</strong> Instead of differentiating the error (which includes setpoint jumps), differentiate only the <strong>process variable (PV)</strong>. Since PV changes smoothly (the process has inertia), the derivative term produces a smooth output with no sudden spike when setpoint changes. Most modern DCS and PLC PID algorithms use D-on-measurement by default for this reason.<br><br>
  <strong>Bumpless Transfer:</strong> Related concept - when switching between manual and auto mode, the controller output must be initialised to match the current manual output before engaging auto. Without bumpless transfer, the integral term starts from zero and the output jumps (bumps) to a wrong value, causing a process upset.</div></div>

  <div class="n-h2">Dead Time - The Hidden Delay in Control Loops</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dead time (transport delay, symbol: θ):</strong> The interval between a change in the controller output (MV) and the first detectable response in the process variable (PV). During dead time the process appears completely unresponsive regardless of how large the MV change is.<br><br>
  <strong>Causes on a ship:</strong><br>
  • <strong>Transport lag:</strong> HFO heater - steam valve opens but heated oil takes time to travel to the viscotherm sensor; sensor sees nothing until heated oil physically arrives.<br>
  • <strong>Sensor lag:</strong> RTD inside a thermowell must heat through the well wall before registering the change.<br>
  • <strong>Actuator lag:</strong> A pneumatic valve takes time to stroke fully after the I/P converter receives the signal.<br><br>
  <strong>Effect on PID tuning:</strong> Dead time is the most destabilising element in a control loop. While PV has not yet responded, the integral term keeps accumulating error, causing over-correction and oscillation. Rule of thumb: dead time should be <strong>less than 10–20% of the process time constant</strong> for stable control.<br>
  <strong>Remedy:</strong> Smith Predictor (model-based compensator) - uses an internal process model to estimate what PV <em>would</em> be without dead time, letting the controller act on the prediction rather than waiting for the delayed measurement.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 3 - FEEDFORWARD CONTROL
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-feedforward">3. Feedforward Control vs Feedback Control</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Anil Deswal / Kamath ask: "What is the difference between feedforward and feedback? Where is feedforward used on a ship?"</strong></div></div>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">FEEDBACK CONTROL</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Measures the controlled variable AFTER the disturbance has affected it.</li>
          <li>Reacts to error <strong>after</strong> it has already occurred - inherently <strong>reactive</strong>.</li>
          <li>Works for any disturbance because it measures the net result.</li>
          <li>Always has some lag - error must exist before correction begins.</li>
          <li><strong>Example:</strong> Drum level controller - only adjusts feedwater when level has already changed.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--green-border)">
      <div class="card-title" style="color:var(--green)">FEEDFORWARD CONTROL</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>Measures an <strong>incoming disturbance BEFORE</strong> it affects the controlled variable.</li>
          <li>Corrects for the disturbance <strong>before</strong> it causes an error - inherently <strong>predictive / proactive</strong>.</li>
          <li>Requires an accurate model of the process to calculate the correct correction.</li>
          <li>Cannot correct for unmeasured disturbances - must be combined with feedback.</li>
          <li><strong>Example:</strong> Steam flow meter - if steam demand increases, feedwater valve opens immediately without waiting for level to drop.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Combined Feedforward + Feedback - the Practical Solution:</strong><br>
  Feedforward handles the fast, measurable disturbance (e.g., steam demand change). Feedback handles slow drift, unmeasured disturbances, and any modelling error in the feedforward path. Together they give fast response with guaranteed accuracy. The 3-element boiler feedwater control is the classic shipboard example of this combined approach.</div></div>

  <table class="n-table">
    <tr><th>Feature</th><th>Feedback</th><th>Feedforward</th></tr>
    <tr><td><strong>Timing</strong></td><td>Reactive - after error occurs</td><td class="ok">Proactive - before error occurs</td></tr>
    <tr><td><strong>Accuracy</strong></td><td class="ok">Handles all disturbances</td><td>Only handles measured disturbances</td></tr>
    <tr><td><strong>Response speed</strong></td><td>Limited by process lag</td><td class="ok">Instantaneous correction</td></tr>
    <tr><td><strong>Process model</strong></td><td>Not required</td><td class="bad">Requires accurate model</td></tr>
    <tr><td><strong>Typical use</strong></td><td>Drum level trim (slow)</td><td>Steam/FW flow matching (fast)</td></tr>
  </table>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> Feedback = "Doctor reacts to your fever." Feedforward = "Doctor gives vaccine before the virus arrives." 3-element boiler control uses BOTH - feedforward for speed, feedback for accuracy.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 4 - CASCADE CONTROL
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cascade">4. Cascade Control System</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Anil Deswal specific:</strong> Know the difference between Cascade and simple feedback. Know the primary/secondary loop roles by name.</div></div>

  <p class="n-p"><strong>Cascade Control</strong> uses TWO controllers - one inside the other - where the output of the OUTER (primary/master) controller becomes the SETPOINT of the INNER (secondary/slave) controller.</p>

  <ol class="n-steps">
    <li><strong>Primary Controller (Outer Loop):</strong> Measures the main controlled variable (e.g., TEMPERATURE). Compares with setpoint. Output = setpoint command to secondary controller.</li>
    <li><strong>Secondary Controller (Inner Loop):</strong> Measures intermediate variable (e.g., FLOW). Receives setpoint from primary controller. Directly manipulates the final control element (e.g., steam valve).</li>
    <li><strong>Advantage:</strong> Inner controller corrects inner loop disturbances quickly - before they affect the outer variable - resulting in faster response and better disturbance rejection.</li>
  </ol>

  <table class="n-table">
    <tr><th>SHIP EXAMPLES OF CASCADE CONTROL</th></tr>
    <tr><td><strong>1. Boiler Steam Temperature:</strong> Outer loop: steam temperature controller (slow). Inner loop: steam flow controller (fast). If supply pressure varies, inner loop corrects flow immediately before temperature changes.</td></tr>
    <tr><td><strong>2. Fuel Oil Temperature:</strong> Outer loop: HFO temperature controller. Inner loop: steam flow controller. Controls steam valve position. Inner loop rejects steam pressure fluctuations before HFO temperature is affected.</td></tr>
    <tr><td><strong>3. Cargo Pump Discharge Pressure:</strong> Outer loop: vessel tank level controller. Inner loop: pump flow controller. Controls pump VFD speed.</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t07-cascade-control.png" alt="Cascade control block diagram — primary (outer) controller sets SP for secondary (inner) controller, inner loop manipulates final element">
    <div class="note-diagram-cap">Fig. Cascade Control — outer (primary) controller measures main variable (e.g. HFO temp); its output is SP for inner (secondary) controller which measures fast-changing variable (e.g. steam flow); inner loop corrects disturbances before they reach outer loop</div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid - Why Cascade is Better:</strong> With simple feedback on HFO temperature, a steam pressure drop hits the heater first, temperature drops, error builds, controller responds - all delayed. With cascade, the inner steam FLOW loop sees the pressure drop immediately and corrects the valve - temperature barely moves. The outer temperature loop just trims slowly. Inner loop = fast guard. Outer loop = accurate master.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 5 - PLC & LADDER
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-plc">5. PLC &amp; Ladder Diagram</div>

  <div class="n-h2">PLC Scan Cycle</div>
  <ol class="n-steps">
    <li><strong>Input Scan:</strong> Read all physical inputs → store in INPUT IMAGE REGISTER (memory snapshot).</li>
    <li><strong>Program Execution:</strong> Execute user program top-to-bottom using input image register values. Write results to OUTPUT IMAGE REGISTER.</li>
    <li><strong>Output Scan:</strong> Write output image register values to physical output modules - update actual outputs.</li>
    <li><strong>Housekeeping:</strong> Update communications, check watchdog timer, internal diagnostics. Repeat from Step 1.</li>
  </ol>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Scan time</strong> is typically <span class="n-val">1–50 ms</span>. <strong>Watchdog Timer:</strong> If scan does not complete within set maximum time, PLC detects hang and goes to SAFE STATE (outputs de-energised). Critical safety feature. The watchdog is a hardware timer reset at the start of each scan - if CPU freezes mid-scan, the watchdog expires and drives outputs to their fail-safe state.</div></div>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t07-plc-scan-cycle.png" alt="PLC scan cycle — input scan, program execution, output scan, housekeeping, watchdog timer">
    <div class="note-diagram-cap">Fig. PLC Scan Cycle — 4 phases: (1) Input Scan → input image register; (2) Program Execution using stored inputs; (3) Output Scan → physical outputs; (4) Housekeeping/comms; watchdog reset each cycle</div>
  </div>

  <table class="n-table">
    <tr><th>PLC MEMORY TYPES</th><th>FUNCTION</th></tr>
    <tr><td><strong>ROM</strong> (Non-volatile)</td><td>Stores PLC operating system (firmware). Not lost on power failure.</td></tr>
    <tr><td><strong>RAM</strong> (Volatile)</td><td>Stores user program &amp; process data. <strong>LOST</strong> on power failure - needs battery backup.</td></tr>
    <tr><td><strong>EEPROM / Flash</strong></td><td>Stores user program permanently. Survives power loss. Electrically erasable.</td></tr>
    <tr><td><strong>Battery-Backed RAM</strong></td><td>RAM with lithium battery (replace every <span class="n-val">2–5 years</span>). If battery fails, data lost on next power failure.</td></tr>
  </table>

  <div class="n-h2">Ladder Diagram &amp; IEC 61131-3 Languages</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Ladder Diagram (LD):</strong> Resembles relay logic. Rungs connect power rails. <strong>Normally Open (NO):</strong> [ ] passes power when bit is TRUE (1). <strong>Normally Closed (NC):</strong> [/] passes power when bit is FALSE (0). Output coil activates when rung is TRUE.</div></div>

  <table class="n-table">
    <tr><th>IEC 61131-3 LANGUAGE</th><th>TYPE</th><th>DESCRIPTION &amp; USE</th></tr>
    <tr><td><strong>Ladder Diagram (LD)</strong></td><td>Graphical</td><td>Relay-style diagrams. Used for sequential logic, motor interlocking.</td></tr>
    <tr><td><strong>Function Block Diagram (FBD)</strong></td><td>Graphical</td><td>Blocks connected by signal lines. Used for PID, analogue processing.</td></tr>
    <tr><td><strong>Structured Text (ST)</strong></td><td>Text</td><td>High-level Pascal-like language. Used for complex algorithms.</td></tr>
    <tr><td><strong>Sequential Function Chart (SFC)</strong></td><td>Graphical</td><td>State machine (steps/transitions). Used for startup sequences.</td></tr>
  </table>

  <div class="n-h2">Relay Logic vs Ladder Logic</div>
  <ul class="n-list">
    <li><strong>Relay Logic (Hardwired):</strong> Physical components wired together. Bulky, hard to troubleshoot/modify. Failure of one physical relay can shut down entire panel.</li>
    <li><strong>Ladder Logic (Software):</strong> Software representation in PLC. Easy to modify - change program, not wiring. Built-in diagnostics, online monitoring, forced I/O for fault-finding. Requires programming knowledge. Single hardware PLC replaces entire relay panel.</li>
  </ul>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t07-plc-ladder-logic.png" alt="PLC ladder logic diagram — rungs with NO/NC contacts, output coils, motor start-stop interlock example">
    <div class="note-diagram-cap">Fig. Ladder Logic Diagram — left/right power rails; rungs with normally-open [ ] and normally-closed [/] contacts; output coil activates when rung is true; example: motor start-stop with seal-in auxiliary contact</div>
  </div>

  <div class="n-h2">Latching Circuit (Seal-In)</div>
  <p class="n-p">Maintains energised state after momentary START signal is removed via a parallel NO auxiliary contact. Requires NC STOP button to unlatch. In PLC, uses SET and RESET coils. The SET coil latches the bit TRUE; RESET coil forces it FALSE regardless of other logic. Typical use: motor start/stop circuits, alarm latching.</p>

  <div class="n-h2">ADC (Analogue to Digital Converter)</div>
  <p class="n-p">Converts continuous analogue (<span class="n-val">4–20 mA</span>) to digital number. 12-bit ADC = 4096 steps. E.g., <span class="n-val">4 mA</span> = 0, <span class="n-val">20 mA</span> = 4095, <span class="n-val">12 mA</span> = 2048. DAC does the reverse (digital → analogue for AO signals). 12-bit gives resolution of <span class="n-val">16 mA ÷ 4096 = 3.9 μA</span> per step.</p>

  <div class="n-h2">PLC Fail-Safe &amp; Safe State on Failure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>What happens to PLC outputs on PLC failure? What is a fail-safe output?</strong></div></div>
  <ul class="n-list">
    <li><strong>Safe State:</strong> The known, defined state that all outputs adopt when the PLC CPU faults, loses power, or the watchdog expires. For most marine PLC systems, safe state = all digital outputs <strong>de-energised</strong> (OFF) so contactors drop out, solenoids close, and valves return to spring position.</li>
    <li><strong>Watchdog timer role:</strong> Hardware timer reset once per scan. If scan time exceeds maximum (CPU hangs, infinite loop, fatal software fault), watchdog expires → forces all outputs to safe state within microseconds - independently of the CPU that has failed.</li>
    <li><strong>Fail-safe output modules:</strong> Certified IEC 61508 / SIL-rated output modules have redundant output drivers and a dedicated safety circuit. On detecting any output driver fault, they independently force the channel to de-energised state and raise a diagnostic alarm.</li>
    <li><strong>Program backup:</strong> If CPU RAM is lost (battery failure + power cycle), PLC will not enter RUN mode - it enters HALT/FAULT with all outputs in safe state, until a valid program is loaded from EEPROM or engineering terminal.</li>
  </ul>

  <!-- ═══════════════════════════════════════════
       SECTION 6 - PLC HARDWARE MODULES
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-plc-hardware">6. PLC Hardware Modules</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Surveyors ask the I/O module types and their functions.</strong></div></div>
  <table class="n-table">
    <tr><th>Module</th><th>Function</th><th>Shipboard Examples</th></tr>
    <tr><td><strong>CPU</strong></td><td>Executes user program logic, manages memory and clocks</td><td>Microprocessor unit with ROM, RAM, EEPROM firmware</td></tr>
    <tr><td><strong>Digital Input (DI)</strong></td><td>Reads ON/OFF field signals</td><td>Optocoupler isolation for limit switches, proximity sensors, push buttons</td></tr>
    <tr><td><strong>Digital Output (DO)</strong></td><td>Drives ON/OFF equipment</td><td>Relay or transistor outputs powering contactors and solenoids</td></tr>
    <tr><td><strong>Analogue Input (AI)</strong></td><td>Converts continuous signals via internal ADC</td><td>4–20 mA from pressure/temperature transmitters, 0–10 V position</td></tr>
    <tr><td><strong>Analogue Output (AO)</strong></td><td>Converts digital logic via internal DAC</td><td>4–20 mA reference lines feeding VFDs and control valve positioners</td></tr>
    <tr><td><strong>Communication</strong></td><td>Serial or Ethernet network links</td><td>Modbus RTU/TCP, Profibus, Foundation Fieldbus interfaces</td></tr>
    <tr><td><strong>Power Supply</strong></td><td>Delivers stable internal voltages</td><td>Regulated 24 V / 5 V DC - often redundant on safety-critical networks</td></tr>
  </table>

  <div class="n-h2">Backplane Technology</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">The <strong>backplane</strong> is the printed circuit board at the rear of the PLC rack into which the CPU, I/O and power modules plug. It carries the internal <strong>data/address bus</strong> (module ↔ CPU communication) and the <strong>power bus</strong> (24 V / 5 V rails) between slots, so modules can be added or swapped without rewiring. A cracked backplane or a badly seated module shows up as intermittent I/O faults.</div></div>

  <div class="n-h2">Sourcing vs Sinking I/O</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Sourcing vs sinking</strong> describes the direction of current flow at a digital I/O point, set by the field device's transistor type.<br>
  • <strong>Sourcing:</strong> the I/O point <em>supplies</em> (sources) current to the load - PNP field devices; current flows out of the point, through the load, to 0 V.<br>
  • <strong>Sinking:</strong> the I/O point <em>receives</em> (sinks) current - NPN field devices; current flows from +24 V, through the load, into the point.<br>
  A sourcing output pairs with a sinking input (and vice-versa); the PLC card polarity must match the sensor/actuator or the circuit will not work.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 7 - TIMERS & COUNTERS
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-timers">7. PLC Timers &amp; Counters</div>

  <table class="n-table">
    <tr><th>TIMER</th><th>OPERATION</th><th>SHIP EXAMPLE</th></tr>
    <tr><td><strong>TON (On-Delay)</strong></td><td>Input ON → starts counting → output turns ON after preset. (Resets if input goes OFF before preset reached)</td><td>Engine room fan runs <span class="n-val">5 min</span> BEFORE LO pump is allowed to start.</td></tr>
    <tr><td><strong>TOF (Off-Delay)</strong></td><td>Input ON → output ON immediately. Input OFF → starts counting → output turns OFF after preset.</td><td>Cooling fan keeps running <span class="n-val">10 min</span> AFTER engine stops.</td></tr>
    <tr><td class="hl"><strong>RTO (Retentive On-Delay)</strong></td><td>Accumulates time even when input turns OFF/ON. Must be MANUALLY RESET.</td><td>Total running hours for maintenance scheduling (e.g., 250 h service).</td></tr>
    <tr><td><strong>TP (Pulse)</strong></td><td>Input ON → output ON for EXACTLY preset time then OFF regardless of input state.</td><td>Single-shot pulse to open solenoid valve for exactly <span class="n-val">2 seconds</span>.</td></tr>
  </table>

  <div class="n-h2">Counters</div>
  <table class="n-table">
    <tr><th>COUNTER</th><th>OPERATION</th><th>SHIP EXAMPLE</th></tr>
    <tr><td><strong>CTU (Count Up)</strong></td><td>Increments count on each rising edge of input. Output (DN) turns ON when count reaches preset value.</td><td>Count pump starts - trigger maintenance after <span class="n-val">500</span> starts.</td></tr>
    <tr><td><strong>CTD (Count Down)</strong></td><td>Decrements from a preset value on each rising edge. Output turns ON when count reaches zero.</td><td>Bottling line - count down <span class="n-val">100</span> units then stop conveyor.</td></tr>
    <tr><td><strong>CTUD (Up/Down)</strong></td><td>Combines CTU and CTD - separate inputs for up and down counting.</td><td>Track items entering/leaving a tank room for inventory.</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════
       SECTION 8 - SPECIFIC SHIP SYSTEMS
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-systems">8. Specific Ship Control Systems</div>

  <div class="n-h2">Fuel Oil Temperature Control Loop</div>
  <ul class="n-list">
    <li><strong>Sensor:</strong> PT100 measures HFO temperature after heater (target <span class="n-val">120–150 °C</span>).</li>
    <li><strong>Transmitter:</strong> <span class="n-val">4–20 mA</span> output to PI controller. (Derivative not used - would amplify temperature sensor noise.)</li>
    <li><strong>I/P Converter:</strong> Converts <span class="n-val">4–20 mA</span> to <span class="n-val">3–15 psi</span> pneumatic signal.</li>
    <li><strong>Control Valve:</strong> Pneumatic steam control valve on heater.</li>
    <li><strong>Fail-Safe:</strong> Steam valve is <strong>FAIL CLOSE</strong> (Air to Open) - if air/signal lost, steam shuts off to prevent fire risk.</li>
  </ul>

  <div class="n-h2">3-Element Boiler Feedwater Control</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Problem with Single-Element (Level Only):</strong> When steam demand increases suddenly, bubbles form causing "swell". Controller sees high level and wrongly CLOSES feedwater valve. This is the swell/shrink phenomenon - the exact opposite of the required action.</div></div>
  <ol class="n-steps">
    <li><strong>Element 1 - Steam Flow (Feedforward):</strong> Primary demand signal. Instantly opens feedwater valve proportionally when load increases.</li>
    <li><strong>Element 2 - Feedwater Flow (Feedforward):</strong> Confirms feedwater valve is responding correctly - verifies flow is actually following the steam demand command.</li>
    <li><strong>Element 3 - Drum Water Level (Feedback):</strong> Slow trim correction for any long-term level drift - corrects modelling errors in the feedforward path.</li>
  </ol>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t07-three-element-boiler.png" alt="3-element boiler feedwater control — steam flow (FF), feedwater flow (FF), drum level (FB), feedwater control valve">
    <div class="note-diagram-cap">Fig. 3-Element Boiler Feedwater Control — Element 1: steam flow (feedforward, fast); Element 2: feedwater flow (feedforward, confirming); Element 3: drum level (feedback, slow trim); eliminates swell/shrink error</div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Result:</strong> Eliminates swell/shrink effect, giving fast response and accurate control. This is the classic combined feedforward + feedback system on a ship. Elements 1 &amp; 2 = feedforward (speed). Element 3 = feedback (accuracy).</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 9 - PMS & LOAD MANAGEMENT
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-pms">9. PMS &amp; Power Management</div>

  <div class="n-h2">Power Management System (PMS) Functions</div>
  <ul class="n-list">
    <li><strong>Load Monitoring:</strong> Continuously monitors kW and kVA on running generators.</li>
    <li><strong>Auto-Start / Stop:</strong> Starts standby generator when approaching limits; stops one generator when load reduces (fuel saving).</li>
    <li><strong>Load Shedding:</strong> If generator trips, immediately sheds non-essential loads (e.g., galley, HVAC) to protect remaining generators. Never sheds Priority 1 (steering, fire pump).</li>
    <li><strong>Blackout Prevention:</strong> Staged load shedding before overcurrent relay trips generator.</li>
    <li><strong>Load Optimisation:</strong> Runs generators at <span class="n-val">70–80%</span> rating for best efficiency.</li>
    <li><strong>Load Sharing:</strong> When two or more generators are running in parallel, PMS governs the load sharing between them - adjusts governor settings so active power (kW) is shared proportionally to each machine's rating.</li>
  </ul>

  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Sequential Load Restoration (After Blackout):</strong><br>
  T = 0: Blackout. Emergency generator starts automatically (within <span class="n-val">45 sec</span> per SOLAS).<br>
  T = <span class="n-val">1–2 min</span>: First main generator online and paralleled.<br>
  T = <span class="n-val">2–3 min</span>: Seawater cooling pump (highest priority - engines need cooling to restart).<br>
  T = <span class="n-val">3–4 min</span>: LO pump and LO separator.<br>
  T = <span class="n-val">4–5 min</span>: Fuel oil pump and purifier.<br>
  T = <span class="n-val">5–7 min</span>: Auxiliary boiler.<br>
  T = <span class="n-val">9–12 min</span>: HVAC, accommodation, galley last.<br>
  <strong>Why Delays (<span class="n-val">30 s</span> to <span class="n-val">2 min</span>)?</strong> Motor starting currents are <span class="n-val">5–8×</span> rated current. Simultaneous starts would overload the generator and cause a second blackout.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 10 - PREFERENTIAL TRIP & SELF-MONITORING
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-preferential-trip">10. Preferential Trip &amp; Self-Monitoring Alarms</div>

  <div class="n-h2">Preferential Trip (Non-Essential Load Shedding)</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Preferential trip</strong> is an automatic protection function built into the PMS that disconnects non-essential consumers from the busbar when a generator is overloaded. Its purpose is to preserve power to essential services while shedding loads that can tolerate temporary interruption.</div></div>
  <table class="n-table">
    <tr><th>Feature</th><th>Detail</th></tr>
    <tr><td><strong>Trigger condition</strong></td><td>Busbar active power exceeds ~<span class="n-val">85%</span> of generator rating, OR overload relay picks up a sustained overload current</td></tr>
    <tr><td><strong>Action</strong></td><td>PMS automatically trips non-essential MCCBs in priority order within milliseconds - BEFORE the generator overcurrent relay operates to trip the machine</td></tr>
    <tr><td><strong>Non-essential loads shed</strong></td><td>Galley ranges, HVAC, laundry, hotel heaters - loads that can tolerate a brief interruption without safety consequence</td></tr>
    <tr><td><strong>Essential loads protected</strong></td><td>Steering gear, bilge pumps, fire pumps, navigation lights, emergency lighting, communication equipment - never shed under any condition</td></tr>
    <tr><td><strong>Restoration</strong></td><td>Once standby generator is online and load is shared, shed loads are manually or automatically re-connected in sequence</td></tr>
  </table>
  <div class="n-warn"><div class="icon">⚠️</div><div class="body"><strong>Why can a generator still trip even with preferential trip fitted?</strong><br>
  (1) Overload is extreme - dead short or multiple large motors starting simultaneously causes current to exceed overcurrent relay threshold faster than preferential trip can respond.<br>
  (2) Non-essential breaker failure - if a shed breaker is stuck closed, overload persists.<br>
  (3) Priority 1 loads themselves draw fault current (e.g., steering gear motor jammed).</div></div>

  <div class="n-h2">Self-Monitoring (Health-Monitoring) Alarm Circuit</div>
  <div class="n-info"><div class="icon">📖</div><div class="body">A <strong>self-monitoring alarm circuit</strong> continuously verifies its own integrity. Unlike a basic alarm that only triggers when a fault occurs, this circuit also raises an alarm if the monitoring loop itself is broken or degraded - ensuring the alarm cannot silently fail.</div></div>
  <ul class="n-list">
    <li><strong>Principle:</strong> A small continuous test current flows through the entire detection loop - wiring, sensors, and detector heads. An open-circuit fault (broken wire, disconnected detector) removes this current → "FAULT" alarm triggers at the control panel, distinct from a genuine "ALARM" condition.</li>
    <li><strong>Key benefit:</strong> You are alerted to a wiring break or failed detector BEFORE an actual hazard occurs. The system is verified healthy at all times rather than only when tested manually.</li>
    <li><strong>Applications on ships:</strong> Fire detection loops, fixed gas detection systems, UMS alarm circuits, high-temperature shutdown trips.</li>
    <li><strong>Example - Fire Loop:</strong> Detectors wired in a supervised series loop. Cutting any wire or removing a detector (without fitting a bridging plug) drops loop current → "fault" alarm, not "fire." Prevents dead zones in fire detection.</li>
    <li><strong>Regulatory basis:</strong> IEC 61508 / SIL-rated systems mandate self-diagnostics - the system must detect its own failure modes to maintain the required probability of failure on demand (PFD).</li>
  </ul>

  <!-- ═══════════════════════════════════════════
       SECTION 11 - CONTROL VALVES
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-valves">11. Control Valves &amp; I/P Converters</div>

  <p class="n-p"><strong>I/P Converter (Current to Pressure):</strong> Converts <span class="n-val">4–20 mA</span> to <span class="n-val">3–15 psi</span> pneumatic signal. <span class="n-val">4 mA</span> = <span class="n-val">3 psi</span> (valve minimum), <span class="n-val">20 mA</span> = <span class="n-val">15 psi</span> (valve maximum). A coil generates electromagnetic force proportional to current to control an air bleed nozzle.</p>

  <table class="n-table">
    <tr><th>FAIL-SAFE VALVE POSITIONS</th><th>OPERATION</th><th>USED FOR</th></tr>
    <tr><td><strong>FAIL CLOSE (FC)</strong> - Air to Open</td><td>Air pressure opens valve. Spring closes on air/signal loss.</td><td class="ok">Fuel supply valves, steam heaters (prevents fire on failure)</td></tr>
    <tr><td><strong>FAIL OPEN (FO)</strong> - Air to Close</td><td>Air pressure closes valve. Spring opens on air/signal loss.</td><td class="ok">Cooling water valves (keeps cooling flowing on failure)</td></tr>
    <tr><td><strong>FAIL LOCKED (FL)</strong> - Lock in last position</td><td>Special actuator holds last position on air loss.</td><td class="hl">Where neither FC nor FO is safe (some cargo valves)</td></tr>
  </table>

  <div class="n-h2">Control Valve Types</div>
  <table class="n-table">
    <tr><th>Type</th><th>Characteristic</th><th>Typical Ship Use</th></tr>
    <tr><td><strong>Globe Valve</strong></td><td>Linear flow characteristic, precise throttling, high pressure drop</td><td>Steam control, HFO temperature control, feedwater</td></tr>
    <tr><td><strong>Butterfly Valve</strong></td><td>Low pressure drop, fast operation, equal-percentage or linear</td><td>Large seawater cooling lines, HVAC, ballast</td></tr>
    <tr><td><strong>Ball Valve</strong></td><td>Full bore, low friction, on/off or quarter-turn throttling</td><td>On/off service, cargo lines, fuel quick-closing valves</td></tr>
  </table>

  <div class="n-h2">Dead Band and Hysteresis</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Dead Band:</strong> A range of input change around the setpoint within which no output change occurs. Controller deliberately ignores small errors to prevent constant hunting (valve chattering). Too wide = poor control. Too narrow = continuous valve hunting.<br><br>
  <strong>Hysteresis:</strong> The control valve (or sensor) follows different paths on increasing vs decreasing signals due to mechanical friction, spring backlash, and packing friction. The valve stem lags behind the commanded position - magnitude of hysteresis is expressed as a percentage of valve travel. A positioner eliminates hysteresis by forming a local closed feedback loop on stem position.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 12 - VALVE POSITIONER
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-valve-positioner">12. Valve Positioner - Physics &amp; Correction</div>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why a valve positioner is needed beyond an I/P converter:</strong><br>
  An I/P converter translates a <span class="n-val">4–20 mA</span> signal into <span class="n-val">3–15 psi</span> air - but this is open-loop for valve position. The valve stem may not reach the exact commanded position due to:<br>
  (1) <strong>Stiction:</strong> Static friction in valve packing - the stem doesn't move until sufficient pressure differential overcomes it.<br>
  (2) <strong>Hysteresis:</strong> The stem position lags behind the control signal, following different paths on increasing vs decreasing signals due to friction and mechanical clearances.<br><br>
  A valve positioner forms a <strong>local mechanical feedback loop</strong> directly with the valve stem. It continuously compares the commanded position (from the I/P signal) with the actual stem position (from a feedback linkage or potentiometer). Any difference → positioner adjusts the pneumatic output to the actuator until error = zero. Overcomes stiction and hysteresis completely. Essential for precision flow control loops.</div></div>

  <div class="n-h2">SIPART PS2 Calibration (Run 1 to 5)</div>
  <ul class="n-list">
    <li><strong>Run 1:</strong> Initialisation - determines total valve travel (finds mechanical end-stops).</li>
    <li><strong>Run 2:</strong> Leakage test - measures seat tightness at closed position.</li>
    <li><strong>Run 3:</strong> Response time measurement - determines valve speed (fast vs slow).</li>
    <li><strong>Run 4:</strong> Friction analysis - measures static and sliding friction magnitudes.</li>
    <li><strong>Run 5:</strong> Fine-tuning of control parameters (deadband, gain) based on Runs 1–4 data.</li>
  </ul>

  <div class="n-h2">Split-Range Control</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Split-Range:</strong> A single controller output signal (<span class="n-val">4–20 mA</span>) is split between two valves, each responding to a different portion of the signal range.<br>
  Example - Temperature control using heating AND cooling:<br>
  Valve A (steam heating): responds to <span class="n-val">4–12 mA</span> (0–100% open)<br>
  Valve B (cooling water): responds to <span class="n-val">12–20 mA</span> (0–100% open)<br>
  At <span class="n-val">12 mA</span> (midpoint) - both valves closed. Below = heating opens. Above = cooling opens. One controller manages the full heating/cooling range.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 13 - IAS / SCADA
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-ias-scada">13. IAS / SCADA Architecture</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Vishwanathan asks IAS hardware layers and the Historian server role.</strong></div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">Hardware Layers</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Distributed PLCs:</strong> Controller nodes across ER, cargo decks, purifier spaces</li>
          <li><strong>Data Network:</strong> Redundant fibre or industrial Ethernet backbone</li>
          <li><strong>Workstations:</strong> Graphic terminals in ECR and bridge</li>
          <li><strong>Historian Server:</strong> Logs historical parameter trends vs time - used for trend analysis and SEEMP Part III CII data collection</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Operational Functions</div>
      <div class="card-desc">
        <ul class="n-list">
          <li><strong>Graphical mimics:</strong> Live pipeline flows, temperatures, tank levels</li>
          <li><strong>Alarm management:</strong> Processes, categorises, timestamps alarms</li>
          <li><strong>Remote setpoint adjustment:</strong> ECR adjustment of PID parameters and actuator positions</li>
          <li><strong>UMS routing:</strong> Channels health alarms to cabin panels in UMS mode</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="n-h2">SCADA vs IAS - Distinction</div>
  <table class="n-table">
    <tr><th>Feature</th><th>SCADA</th><th>IAS (Integrated Automation System)</th></tr>
    <tr><td><strong>Scope</strong></td><td>Supervisory monitoring &amp; data acquisition - reads and displays, limited control</td><td class="ok">Full supervisory + closed-loop control integration</td></tr>
    <tr><td><strong>Control action</strong></td><td>Sends setpoints to PLCs; does not directly drive field devices</td><td class="ok">Can directly adjust PID setpoints, initiate sequences, manage alarms</td></tr>
    <tr><td><strong>On ships</strong></td><td>Often used loosely to mean the monitoring display system</td><td class="ok">Correct term - combines PLCs + HMI + historian + alarm management</td></tr>
  </table>

  <div class="note-diagram-wrap">
    <img src="../../data/diagrams/t07-master-slave-arch.png" alt="Master-slave IAS architecture — master PLC/DCS server communicates with distributed slave PLC nodes over redundant network">
    <div class="note-diagram-cap">Fig. Master-Slave IAS Architecture — master server handles supervisory control and HMI; slave PLC nodes execute local loop control and I/O; redundant Ethernet backbone; Historian logs all parameter trends</div>
  </div>

  <div class="n-ok"><div class="icon">💡</div><div class="body"><strong>Memory Aid:</strong> IAS = Historian + Mimics + Alarms + Remote trim + UMS extension. SCADA is the supervisory layer that sits above the PLC/DCS layer - it supervises but the PLCs do the actual loop control.</div></div>

  <!-- ═══════════════════════════════════════════
       SECTION 14 - FIELDBUS PROTOCOLS
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-fieldbus">14. Fieldbus Protocols - Modbus vs PROFIBUS vs PROFINET vs HART</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Common in modern IAS questions: "What communication protocol does your IAS use?" / "What is PROFIBUS / PROFINET?" / "Difference between Modbus and PROFIBUS?"</strong></div></div>

  <table class="n-table">
    <tr><th>Protocol</th><th>Type</th><th>Speed</th><th>Topology</th><th>Key Feature</th><th>Ship Use</th></tr>
    <tr><td><strong>Modbus RTU</strong></td><td>Serial (RS-485)</td><td><span class="n-val">9.6–115.2 kbps</span></td><td>Master-slave, up to 247 nodes</td><td>Simple, robust, widely supported. No peer-to-peer. Master must poll every device.</td><td>Older PLCs, energy meters, simple field instruments</td></tr>
    <tr><td><strong>Modbus TCP</strong></td><td>Ethernet</td><td><span class="n-val">10/100 Mbps</span></td><td>Star (Ethernet switch)</td><td>Modbus wrapped in TCP/IP. Easy integration with PC networks.</td><td>IAS workstation to PLC comms, modern systems</td></tr>
    <tr><td class="hl"><strong>PROFIBUS DP</strong></td><td>Serial (RS-485)</td><td><span class="n-val">9.6 kbps–12 Mbps</span></td><td>Master-slave, bus</td><td>Fast cyclic data exchange. Multi-master possible. Deterministic timing. IEC 61158.</td><td>PLC to distributed I/O, VFDs, valve islands - Maersk/modern vessels common</td></tr>
    <tr><td class="hl"><strong>PROFIBUS PA</strong></td><td>Serial (IEC 61158-2)</td><td><span class="n-val">31.25 kbps</span></td><td>Bus, devices powered over bus</td><td>Intrinsically safe - used in hazardous areas (tankers, pump rooms). Two-wire, loop-powered.</td><td>Hazardous area instruments in tanker cargo spaces</td></tr>
    <tr><td class="ok"><strong>PROFINET</strong></td><td>Industrial Ethernet</td><td><span class="n-val">100 Mbps / 1 Gbps</span></td><td>Star / ring</td><td>Real-time Ethernet. IRT (isochronous) variant for sub-millisecond cycle times. Replaces PROFIBUS in new installations. Supports SNMP, OPC-UA.</td><td>Modern IAS backbone, newer Siemens S7-1500 based systems</td></tr>
    <tr><td><strong>Foundation Fieldbus (FF)</strong></td><td>Serial (H1)</td><td><span class="n-val">31.25 kbps</span></td><td>Multi-drop, devices powered over bus</td><td>Fully digital, peer-to-peer. Devices can execute control functions without central PLC.</td><td>Older DCS-based process control, some offshore vessels</td></tr>
    <tr><td><strong>HART</strong></td><td>Hybrid (<span class="n-val">4–20 mA</span> + digital)</td><td><span class="n-val">1.2 kbps</span></td><td>Point-to-point or multi-drop</td><td>Digital signal superimposed on <span class="n-val">4–20 mA</span> loop using FSK. Uses existing wiring. Needs <span class="n-val">250 Ω</span> resistor. Read device diagnostics, calibrate remotely.</td><td>Smart transmitters (pressure, temperature, flow) throughout ER</td></tr>
  </table>

  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">PROFIBUS vs PROFINET - Key Difference</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>PROFIBUS = serial RS-485. PROFINET = industrial Ethernet (standard CAT cable + RJ45 / M12).</li>
          <li>PROFINET runs real-time Ethernet - uses standard switches but with QoS prioritisation for time-critical process data.</li>
          <li>PROFIBUS max <span class="n-val">12 Mbps</span>; PROFINET supports <span class="n-val">100 Mbps to 1 Gbps</span> - much higher bandwidth for more devices and faster cycle times.</li>
          <li>New Siemens S7-1500 PLCs (common on modern Maersk tonnage) default to PROFINET for I/O communication.</li>
        </ul>
      </div>
    </div>
    <div class="n-card" style="border-color:var(--orange-border)">
      <div class="card-title" style="color:var(--orange)">Why HART is Still Widely Used</div>
      <div class="card-desc">
        <ul class="n-list">
          <li>No rewiring needed - works over existing <span class="n-val">4–20 mA</span> cable infrastructure.</li>
          <li>Allows remote diagnostics: read device tag, engineering unit, self-test results, calibration data from the control room without visiting the field instrument.</li>
          <li>HART communicator / modem needed (<span class="n-val">250 Ω</span> load resistor in loop).</li>
          <li>Widely used for smart transmitters from Endress+Hauser, Rosemount, Yokogawa.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════
       SECTION 15 - ADDITIONAL TOPICS (Gap v2.1)
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-gap">15. Additional Topics</div>

  <div class="n-h2">Signal Conditioning &amp; 4–20 mA Live Zero</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Why 4–20 mA instead of 0–20 mA?</strong> The "live zero" of <span class="n-val">4 mA</span> allows the system to distinguish between: (a) a valid zero-process reading (4 mA flowing), and (b) a broken wire / open circuit (0 mA - no current at all). A <span class="n-val">0 mA</span> signal → wire break alarm. A <span class="n-val">4 mA</span> signal → process is at minimum value, circuit is healthy. Also, the loop power supply powers the field transmitter from the <span class="n-val">4 mA</span> quiescent current - 2-wire transmitters need no separate power supply cable.</div></div>

  <div class="n-h2">NEMA vs IEC - Which for Shipping?</div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Shipping follows IEC</strong> (IEC 60092 marine series and class rules), not NEMA. <strong>IEC</strong> (International Electrotechnical Commission, European origin) rates enclosure protection by the <strong>IP code</strong> (e.g. IP55 = dust-protected and jet-proof). <strong>NEMA</strong> (US National Electrical Manufacturers Association) uses NEMA type numbers. Rough map: NEMA 4/4X ≈ <span class="n-val">IP66</span>, NEMA 12 ≈ <span class="n-val">IP54</span>, NEMA 7 ≈ Ex d. On a ship you quote the <strong>IP rating and IEC standard</strong>; NEMA appears only on US-sourced equipment.</div></div>

  <div class="n-h2">Relay Logic vs Ladder Logic</div>
  <ul class="n-list">
    <li><strong>Relay Logic (Hardwired):</strong> Physical components wired together. Bulky, hard to troubleshoot/modify. Requires component replacement for any logic change.</li>
    <li><strong>Ladder Logic (Software):</strong> Software representation. Easy to modify - change program, not wiring. Built-in diagnostics. Requires programming knowledge but vastly more flexible.</li>
  </ul>

  <div class="n-h2">Latching Circuit (Seal-In)</div>
  <p class="n-p">Maintains energised state after momentary START signal is removed via a parallel NO auxiliary contact. Requires NC STOP button to unlatch. In PLC, uses SET and RESET coils. Used in motor start/stop circuits and alarm latching.</p>

  <div class="n-h2">ADC Resolution</div>
  <p class="n-p">Converts continuous analogue (<span class="n-val">4–20 mA</span>) to digital number. 12-bit ADC = 4096 steps. E.g., <span class="n-val">4 mA</span> = 0, <span class="n-val">20 mA</span> = 4095, <span class="n-val">12 mA</span> = 2048. Resolution = <span class="n-val">16 mA ÷ 4096 ≈ 3.9 μA</span> per step. DAC does the reverse for AO signals.</p>

  <!-- ═══════════════════════════════════════════
       SECTION 16 - PLC NOISE & BATTERY
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-plc-noise">16. PLC Noise Protection &amp; Battery Replacement</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Frequently asked: "How do you protect a PLC from electrical noise on board?"</strong></div></div>

  <div class="n-h2">Protection Against Electrical Noise</div>
  <ul class="n-list">
    <li><strong>Shielded Cables:</strong> All analogue signal cables (<span class="n-val">4–20 mA</span>) must use individually-screened twisted-pair cable. Shield is earthed at ONE end only (control cabinet end) to prevent circulating currents that would add noise.</li>
    <li><strong>Twisted Pair Wiring:</strong> Twisting cancels induced voltages from external magnetic fields - each twist reverses the polarity of the induced interference so it cancels over the cable length.</li>
    <li><strong>Separate Cable Routing:</strong> Route power cables and signal cables in separate trays with minimum <span class="n-val">300 mm</span> separation. Never run a signal cable parallel to high-current motor leads along the same tray.</li>
    <li><strong>Signal Isolation (Optocouplers):</strong> Optical isolators on all digital inputs and analogue isolators on AI modules. Breaks ground loops between field devices and the PLC cabinet.</li>
    <li><strong>Earthing / Star Grounding:</strong> Single-point star ground for the control panel. Separate earth conductors for instrument earth (clean) and power earth (dirty). Cubicle frame bonded to ship's hull.</li>
    <li><strong>Surge Protection Devices (SPDs):</strong> Installed on I/O terminals to clamp voltage transients from solenoid switching, contactor bounce, and motor starting.</li>
    <li><strong>Anti-Aliasing Filters:</strong> Low-pass RC filters on analogue inputs to remove high-frequency noise before ADC sampling. Typical cut-off: <span class="n-val">5–10 Hz</span> for slow temperature/pressure loops.</li>
    <li><strong>Ferrite Cores:</strong> Fitted around power supply leads entering the PLC cabinet to suppress high-frequency common-mode noise.</li>
  </ul>

  <div class="n-h2">PLC Battery Replacement Procedure</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Critical rule: Always replace the PLC backup battery with controller power switched ON.</strong></div></div>
  <ul class="n-list">
    <li><strong>Why power must be ON:</strong> Battery-backed RAM holds the user program and retentive data. With power ON, the internal DC bus supplies the RAM - the battery is not the sole power source. Replacing with power OFF removes all power from RAM the instant the battery is lifted → user program is erased immediately.</li>
    <li><strong>Replacement interval:</strong> Typically every <span class="n-val">2–5 years</span> or when the PLC logs a "battery low" or "battery fault" alarm. Do not wait for battery failure.</li>
    <li><strong>Procedure:</strong><br>
      (1) Log entry / inform duty engineer.<br>
      (2) Confirm PLC in RUN mode with power ON.<br>
      (3) Back up program to EEPROM or laptop BEFORE starting.<br>
      (4) Remove old battery and insert new battery within the manufacturer's hot-swap window (typically <span class="n-val">30 seconds</span>).<br>
      (5) Verify battery LED shows green.<br>
      (6) Confirm program checksum unchanged on PLC display.<br>
      (7) Log battery replacement date and battery type.</li>
    <li><strong>If replaced with power OFF (program lost):</strong> Reload program from EEPROM backup or engineering laptop. Always maintain an up-to-date backup - never rely on battery RAM alone as the sole copy.</li>
  </ul>

  <!-- ═══════════════════════════════════════════
       SECTION 17 - CYBERSECURITY
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-cyber">17. IACS UR E26/E27 - Maritime Cybersecurity (Mandatory 2024)</div>

  <div class="n-crit"><div class="icon">🔴</div><div class="body"><strong>Brand new mandatory regulation - surveyors asking this from 2024.</strong> All ships contracted on or after <span class="n-val">1 July 2024</span>. PLC, SCADA, and IAS systems are directly in scope.</div></div>
  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>Cybercrime &amp; the ETO's role:</strong> cybercrime is any malicious attack on the ship's IT/OT systems - malware / ransomware, infected USB, phishing, or unauthorised access to navigation, PMS or engine controls. The ETO helps prevent it by scanning every laptop / USB before it is connected, keeping OT networks segregated from crew and business IT, controlling access and passwords, applying only approved updates, and reporting suspicious activity. This is the operational side of the IACS E26 / E27 requirements below.</div></div>
  <div class="n-grid">
    <div class="n-card" style="border-color:var(--blue-border)">
      <div class="card-title" style="color:var(--blue)">UR E26 - Ship Level</div>
      <div class="card-desc">Treats ship as complete entity. 17 requirements across 5 NIST functions: <strong>Identify, Protect, Detect, Respond, Recover</strong>. Requires Cyber Security Design Description (CSDD) from shipyard. Covers IT/OT integration throughout ship lifecycle.</div>
    </div>
    <div class="n-card" style="border-color:rgba(167,139,250,.3)">
      <div class="card-title" style="color:var(--purple)">UR E27 - Equipment Level</div>
      <div class="card-desc">Targets individual OT/CBS equipment. 30 core capabilities + 11 additional for systems on untrusted networks. Suppliers must prove compliance before equipment is installed. Covers access control, software updates, audit logs, secure boot.</div>
    </div>
  </div>

  <div class="n-h2">OT System Categories</div>
  <table class="n-table">
    <tr><th>Category</th><th>Consequence of Failure</th><th>Examples</th><th>Security Level</th></tr>
    <tr><td class="ok"><strong>I</strong></td><td>Localised inconvenience only</td><td>Crew entertainment, admin IT</td><td>Physical/logical isolation, basic access control</td></tr>
    <tr><td class="hl"><strong>II</strong></td><td>Performance degradation, no immediate safety risk</td><td>Cargo control, ballast water</td><td>Mandatory firewalls, security zones, log audits</td></tr>
    <tr><td class="bad"><strong>III - Essential</strong></td><td>Immediate risk to life, safety, or environment</td><td>Propulsion, steering, ECDIS, RADAR, DP</td><td>Cryptographic isolation, secure boot, real-time anomaly detection</td></tr>
  </table>

  <div class="n-info"><div class="icon">📖</div><div class="body"><strong>PA/GA in scope:</strong> Public Address/General Alarm systems are SOLAS statutory requirements. Must now have user authentication and integrity protection - unauthorized access could trigger false abandon-ship alarms. Even seemingly non-critical systems are in scope if connected to safety-critical networks.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>What is IACS UR E26 vs E27? (New 2024 - will be asked at every oral from 2025 onwards)</strong><br>
  <strong>Ideal Answer:</strong> UR E26 = ship-level cyber resilience - secure integration of IT and OT throughout ship's lifecycle. 17 requirements across 5 NIST functions. Mandatory for ships contracted on or after <span class="n-val">1 July 2024</span>. UR E27 = individual equipment level - OEM must build 30 specific security capabilities into each Computer-Based System before installation. 11 additional if system connects to untrusted networks. Both mandatory. Class surveys verify compliance.</div></div>

  <div class="n-warn"><div class="icon">Q</div><div class="body"><strong>A technician wants to connect to the PLC for diagnostics - what cybersecurity protocol do you follow?</strong><br>
  <strong>Ideal Answer:</strong> Under IACS UR E27, check system category - most PLCs are Category III. Protocol: (1) Scan technician laptop/USB for malware. (2) Verify identity and authorisation. (3) Physical approval - turn key-switch or unlock port. (4) For remote access: enforce MFA. (5) Monitor all actions in immutable audit log. (6) Rotate any credentials after session. (7) Verify no unauthorised changes to PLC program after session.</div></div>

  <!-- ═══════════════════════════════════════════
       SURVEYOR Q&A (second to last)
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-surveyorqa">🎤 Surveyor Questions &amp; Ideal Answers</div>
  <div class="n-crit"><div class="icon">🔴</div><div class="body">These are exact question formats from MMD orals. Study the key points before your examination.</div></div>

  <div class="n-h2">General Control Systems</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is the difference between open loop and closed loop control?</td>
      <td>Open loop has no feedback; cannot correct disturbances. Closed loop measures output and feeds back to calculate error (<code style="background:var(--surface3);padding:2px 6px;border-radius:4px;font-family:var(--mono);font-size:13px">SP−PV</code>) to self-correct.</td>
    </tr>
    <tr>
      <td>What is offset in a proportional controller and how is it eliminated?</td>
      <td>Offset is permanent residual error. It is eliminated by adding Integral (I) action which accumulates error over time until error is zero.</td>
    </tr>
    <tr>
      <td>What does P, I, and D do?</td>
      <td>P: fast response to current error. I: eliminates offset (integrates past errors). D: anticipates trend to reduce overshoot (differentiates future rate of change).</td>
    </tr>
    <tr>
      <td>What is integral windup?</td>
      <td>When output is saturated (e.g., valve fully open), integral continues to accumulate, causing large overshoot when condition resolves. Prevented by anti-windup circuits that clamp or back-calculate the integral when output saturates.</td>
    </tr>
    <tr>
      <td>What is derivative kick and how is it prevented?</td>
      <td>Derivative kick is a large sudden output spike when setpoint is stepped - the step change creates an instantaneous large de/dt. Prevented by applying derivative to the PV only (D-on-measurement), not to the error signal. PV changes smoothly; setpoint can step instantaneously.</td>
    </tr>
    <tr>
      <td>What is feedforward control and where is it used on a ship?</td>
      <td>Feedforward measures a disturbance before it affects the controlled variable and corrects proactively. On a ship: 3-element boiler feedwater - steam flow (Element 1) is the feedforward signal that opens the feedwater valve immediately when steam demand increases, without waiting for drum level to change.</td>
    </tr>
    <tr>
      <td>What is cascade control and where is it used?</td>
      <td>Two controllers: outer (primary) output becomes inner (secondary) setpoint. Inner corrects disturbances quickly before they affect outer variable. Used for boiler steam temperature (inner = steam flow) or HFO temperature (inner = steam flow, outer = HFO temperature).</td>
    </tr>
    <tr>
      <td>What is 3-element boiler feedwater control?</td>
      <td>Uses Steam Flow (feedforward - fast), Feedwater Flow (feedforward - confirms valve response), and Drum Level (feedback - slow trim). Prevents "swell/shrink" effect during rapid load changes. Elements 1 &amp; 2 = feedforward for speed; Element 3 = feedback for accuracy.</td>
    </tr>
  </table>

  <div class="n-h2">PLC &amp; Hardware</div>
  <table class="n-table">
    <tr><th>Examiner Question</th><th>Ideal Answer - Key Points</th></tr>
    <tr>
      <td>What is a PLC scan cycle?</td>
      <td>1. Input scan (read all inputs to image register), 2. Program execution (logic using image register), 3. Output scan (write outputs to physical modules), 4. Housekeeping (comms, watchdog, diagnostics). Takes <span class="n-val">1–50 ms</span>.</td>
    </tr>
    <tr>
      <td>What are the types of memory in a PLC?</td>
      <td>ROM (OS firmware, non-volatile), RAM (user program/data, volatile, needs battery), EEPROM (permanent user program, survives power loss), Battery-backed RAM (retentive data with lithium cell).</td>
    </tr>
    <tr>
      <td>What is a watchdog timer in a PLC?</td>
      <td>Hardware timer reset every scan. If CPU hangs (scan overruns maximum time), watchdog times out and forces outputs to safe state (de-energised) - independently of the failed CPU. Critical safety feature.</td>
    </tr>
    <tr>
      <td>What is ladder diagram programming?</td>
      <td>Graphical language resembling relay logic. Rungs have NO/NC contacts and output coils. NO contact passes power when bit is TRUE; NC passes power when bit is FALSE. One of five IEC 61131-3 languages.</td>
    </tr>
    <tr>
      <td>What is a retentive timer (RTO)?</td>
      <td>Accumulates elapsed time across multiple ON periods. Needs manual reset. Used for total running hours maintenance scheduling (e.g., trigger service after 250 running hours).</td>
    </tr>
    <tr>
      <td>What is an I/P converter?</td>
      <td>Converts <span class="n-val">4–20 mA</span> to <span class="n-val">3–15 psi</span> pneumatic signal. <span class="n-val">4 mA = 3 psi</span>, <span class="n-val">20 mA = 15 psi</span>. Uses electromagnetic coil to control air bleed proportionally.</td>
    </tr>
    <tr>
      <td>What is fail-open and fail-close?</td>
      <td>Fail close (FC): spring closes valve on air/signal loss - used for fuel valves and steam heaters (safety: prevents fire). Fail open (FO): spring opens valve on air/signal loss - used for cooling water valves (safety: keeps engine cool).</td>
    </tr>
    <tr>
      <td>What is a valve positioner and why is it used?</td>
      <td>A positioner forms a local closed-loop feedback on the actual valve stem position, comparing commanded position (from I/P signal) with actual position (feedback linkage). It drives the actuator until position error = zero. Overcomes stiction and hysteresis that an I/P converter alone cannot correct.</td>
    </tr>
    <tr>
      <td>What is the difference between PROFIBUS and PROFINET?</td>
      <td>PROFIBUS = serial RS-485, up to <span class="n-val">12 Mbps</span>, master-slave. PROFINET = industrial Ethernet, <span class="n-val">100 Mbps</span>–<span class="n-val">1 Gbps</span>, real-time, supports IT protocols. PROFINET is the newer standard replacing PROFIBUS in new installations.</td>
    </tr>
    <tr>
      <td>Why is 4–20 mA used instead of 0–20 mA?</td>
      <td>The "live zero" of 4 mA allows distinction between a zero-process reading (4 mA flowing) and a broken wire (0 mA - no current). A <span class="n-val">0 mA</span> signal triggers a wire-break alarm. Also, the 4 mA quiescent current powers 2-wire transmitters without a separate supply cable.</td>
    </tr>
    <tr>
      <td>What is IACS UR E26 and UR E27?</td>
      <td>UR E26 = ship-level cybersecurity - 17 requirements across 5 NIST functions (Identify/Protect/Detect/Respond/Recover), mandatory for ships contracted from 1 July 2024. UR E27 = equipment-level - OEM must build 30 security capabilities into each computer-based system. PLCs and IAS systems are directly in scope.</td>
    </tr>
  </table>

  <!-- ═══════════════════════════════════════════
       QUICK REVISION (always last)
  ════════════════════════════════════════════ -->
  <div class="n-h1" id="s-quickrev">📊 Quick Revision - Surveyor Frequency Guide</div>
  <table class="n-table">
    <tr><th>Topic</th><th>Frequency</th><th>Key Points to Memorise</th></tr>
    <tr>
      <td>PID Actions</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>P = present (offset), I = past (eliminates offset), D = future (damps overshoot). Memory: P=Present, I=Past, D=Future.</td>
    </tr>
    <tr>
      <td>Integral Windup &amp; Anti-Windup</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Windup: valve saturated → integral accumulates → overshoot on recovery. Anti-windup: clamp integral when output saturated. Back-calculation method for smoother recovery.</td>
    </tr>
    <tr>
      <td>Derivative Kick</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Setpoint step → infinite de/dt → huge output spike. Fix: D-on-measurement (differentiate PV not error). PV changes smoothly, SP can step.</td>
    </tr>
    <tr>
      <td>Open vs Closed Loop</td>
      <td class="hl">⭐⭐⭐⭐⭐ Every surveyor</td>
      <td>Open = no feedback. Closed = feedback, Error = SP−PV, self-correcting. Fire &amp; forget vs fire &amp; verify.</td>
    </tr>
    <tr>
      <td>Feedforward vs Feedback</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Kamath</td>
      <td>Feedback = reactive (after error). Feedforward = proactive (before error, from disturbance). Combined = 3-element boiler control.</td>
    </tr>
    <tr>
      <td>Cascade Control</td>
      <td class="hl">⭐⭐⭐⭐⭐ Anil Deswal</td>
      <td>Outer output = inner setpoint. Fast disturbance rejection. Boiler steam temp (inner = steam flow). Inner loop corrects before outer loop is affected.</td>
    </tr>
    <tr>
      <td>PLC Scan &amp; Memory</td>
      <td class="hl">⭐⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Input→Program→Output. Watchdog = safe state on hang. Battery RAM = data loss if battery dead. EEPROM = permanent backup.</td>
    </tr>
    <tr>
      <td>3-Element Boiler Control</td>
      <td class="hl">⭐⭐⭐⭐ Deswal, Sanjib</td>
      <td>Steam Flow (FF) + FW Flow (FF confirm) + Level (FB trim). Prevents swell/shrink. Elements 1&amp;2 = speed; Element 3 = accuracy.</td>
    </tr>
    <tr>
      <td>PMS Functions</td>
      <td class="hl">⭐⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Auto-start/stop, load shed, blackout prevention, load sharing, sequential restoration. Run at 70–80% for efficiency.</td>
    </tr>
    <tr>
      <td>Timers (TON, TOF, RTO)</td>
      <td class="hl">⭐⭐⭐⭐ Kamath</td>
      <td>TON = delay ON (fan before LO pump). TOF = delay OFF (fan after engine stop). RTO = retentive (running hours). TP = pulse (fixed duration).</td>
    </tr>
    <tr>
      <td>Sequential Restoration</td>
      <td class="hl">⭐⭐⭐⭐ Anil Deswal</td>
      <td>SW cooling (<span class="n-val">2–3 min</span>) → LO → Fuel → Boiler → HVAC. <span class="n-val">30 s–2 min</span> delays. Why: motor starting current <span class="n-val">5–8×</span> rated - simultaneous starts = 2nd blackout.</td>
    </tr>
    <tr>
      <td>Fail-Safe Valves</td>
      <td class="hl">⭐⭐⭐⭐ All surveyors</td>
      <td>FC (Air to Open) = fuel/steam (prevents fire). FO (Air to Close) = cooling water (prevents overheating). FL = locked in last position.</td>
    </tr>
    <tr>
      <td>Valve Positioner</td>
      <td class="hl">⭐⭐⭐ Vishwanathan, Kamath</td>
      <td>Local closed-loop on stem position. Overcomes stiction and hysteresis. I/P only = open loop for position. SIPART PS2: Run 1–5 calibration.</td>
    </tr>
    <tr>
      <td>PROFIBUS vs PROFINET</td>
      <td class="hl">⭐⭐⭐ Modern vessel questions</td>
      <td>PROFIBUS = RS-485 serial, 12 Mbps max. PROFINET = industrial Ethernet, 100 Mbps–1 Gbps, real-time. HART = digital on 4–20 mA, 250 Ω needed.</td>
    </tr>
    <tr>
      <td>IACS UR E26/E27 Cybersecurity</td>
      <td class="hl">⭐⭐⭐⭐⭐ All surveyors 2025+</td>
      <td>E26 = ship level (17 reqs, 5 NIST functions). E27 = equipment level (30 capabilities per OEM). Mandatory ships contracted ≥ 1 July 2024. PLCs are Category III.</td>
    </tr>
    <tr>
      <td>PLC Noise Protection</td>
      <td class="hl">⭐⭐⭐ Kamath</td>
      <td>Shielded cable (earth at one end), twisted pair, 300 mm separation, optocouplers, star grounding, SPDs, anti-aliasing filters.</td>
    </tr>
    <tr>
      <td>PLC Battery Replacement</td>
      <td class="hl">⭐⭐⭐ Kamath, Vishwanathan</td>
      <td>Always replace with power ON (DC bus powers RAM, not battery). Hot-swap within 30 s. Back up to EEPROM first. Replace every 2–5 years.</td>
    </tr>
  </table>

  </div>
</div>
</div>
`);
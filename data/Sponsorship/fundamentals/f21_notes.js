window.loadNotes("F21", `<div class="view" id="view-notes-f21">
<div class="note-doc">
  <div style="margin-bottom:16px; display:flex; justify-content:space-between;">
    <button class="anc-btn" onclick="openSection('fundamentals')" style="border-color:var(--blue);color:var(--blue)">← All Topics</button>
    <button class="anc-btn" onclick="goToQuizFromNotes('F21')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green)">Take Quiz →</button>
  </div>

  <div class="note-title">
    <h1>F21 - Marine Automation, PLC &amp; SCADA</h1>
    <div class="sub">ETO Sponsorship Interview Preparation · Module 21 of 25 · Difficulty ★★★★★ · Study Time 90-120 min</div>
  </div>

  <div class="note-anchors">
    <span>Jump to section</span>
    <button class="anc-btn" onclick="jumpTo('s-objectives')">Objectives</button>
    <button class="anc-btn" onclick="jumpTo('s-why')">Why Automation</button>
    <button class="anc-btn" onclick="jumpTo('s-ums')">UMS</button>
    <button class="anc-btn" onclick="jumpTo('s-loop')">Control Loops</button>
    <button class="anc-btn" onclick="jumpTo('s-modes')">On/Off, P, PI, PID</button>
    <button class="anc-btn" onclick="jumpTo('s-plc-what')">What is a PLC</button>
    <button class="anc-btn" onclick="jumpTo('s-plc-arch')">PLC Architecture</button>
    <button class="anc-btn" onclick="jumpTo('s-scan')">Scan Cycle</button>
    <button class="anc-btn" onclick="jumpTo('s-din')">Digital Input</button>
    <button class="anc-btn" onclick="jumpTo('s-ain')">Analog Input</button>
    <button class="anc-btn" onclick="jumpTo('s-out')">Digital &amp; Analog Outputs</button>
    <button class="anc-btn" onclick="jumpTo('s-sinksource')">Sinking vs Sourcing</button>
    <button class="anc-btn" onclick="jumpTo('s-ladder')">Ladder Logic</button>
    <button class="anc-btn" onclick="jumpTo('s-scada')">SCADA</button>
    <button class="anc-btn" onclick="jumpTo('s-alarm')">Alarms &amp; Dead Man</button>
    <button class="anc-btn" onclick="jumpTo('s-condition')">Condition Monitoring</button>
    <button class="anc-btn" onclick="jumpTo('s-ai')">AI in Predictive Maintenance</button>
    <button class="anc-btn" onclick="jumpTo('s-interview')">Interview Answers</button>
  </div>

  <div class="note-content">

  <div class="n-h1" id="s-objectives">Learning Objectives</div>
  <p class="n-p">By the end of this module you should be able to explain why automation exists on a ship and what it made possible in terms of manning, define open loop and closed loop control and identify feedback, setpoint and error in a real system, explain what problem each term in on/off, P, PI and PID control solves, describe what a PLC is and why it replaced relay logic, draw and explain PLC architecture block by block, explain the scan cycle and why scan time matters, distinguish digital from analog inputs and outputs with real shipboard examples and correct signal types, explain sinking versus sourcing wiring in outline, read and build a basic ladder logic start/stop circuit with a seal-in and tie it to the DOL starter you already know from F11, explain what SCADA is and how it differs from a PLC, describe the alarm and monitoring philosophy behind an Unmanned Machinery Space including the dead man alarm, and explain the three maintenance strategies and where AI genuinely fits into predictive maintenance. This is the largest module in the set because it is also, by a wide margin, the weakest area for most candidates walking into a sponsorship interview.</p>

  <div class="n-h1" id="s-why">Why Automation Exists on a Ship</div>
  <p class="n-p">A ship is a factory that never gets to stop, cannot call in extra staff for a busy shift, and has to run itself through the night with a skeleton crew asleep two decks above the machinery it depends on. Automation exists to make that possible safely.</p>
  <p class="n-p">Before automation, an engine room ran on continuous human watchkeeping: an engineer physically present at all times, walking rounds, reading gauges by eye, adjusting valves by hand, and reacting to problems as fast as a human can notice them. That model does two things badly. It is expensive, because round-the-clock watchkeeping needs enough engineers to fill a rolling shift pattern. And it is inconsistent, because a tired human at three in the morning notices a slowly rising bearing temperature far later than an instrument wired to an alarm relay would.</p>
  <p class="n-p">Automation replaces continuous human observation with continuous instrument observation, backed by logic that reacts faster and more consistently than a person can, and that only calls a human when a human decision is actually needed. That is the whole idea in one sentence, and it is worth having ready in an interview.</p>

  <div class="n-h1" id="s-ums">UMS: Unmanned Machinery Space</div>
  <p class="n-p"><strong>UMS</strong> is a classification notation, assigned by the ship's classification society, that certifies the machinery space can be left periodically unattended, normally overnight, with the engineer on call rather than on watch. It is not a single piece of equipment, it is a certified state of the whole engine room's automation, alarm and safety systems taken together.</p>
  <p class="n-p">To earn a UMS notation the machinery space must demonstrate, among other things, that any parameter drifting outside its safe range raises an alarm automatically, that critical machinery has automatic standby start and changeover, that fire and flood are detected and can be fought without an engineer already present, and that there is a reliable means of confirming a human is available to respond, which is the dead man alarm covered later in this module.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> UMS did not remove the engineer from the loop, it changed the engineer's job from continuous observation to supervision by exception. The automation watches continuously; the engineer is only pulled in when the automation cannot handle the situation itself or a genuine decision is needed. That shift, from watching everything all the time to being alerted only when something needs a human, is what let manning levels fall without lowering safety.</div></div>

  <div class="n-h1" id="s-loop">Open Loop and Closed Loop Control</div>
  <p class="n-p">Every automatic system on the ship, however complex it looks, is built from one of two basic arrangements.</p>

  <div class="n-h2">Open loop control</div>
  <p class="n-p">An open loop system acts on an input and produces an output, with no check afterwards to see whether the output actually achieved what was wanted. A simple immersion heater switched on for a fixed time is open loop: it delivers a fixed amount of heat regardless of whether the tank was already warm or ice cold when it started. It is simple and cheap, but it cannot correct for a disturbance it was not told about.</p>

  <div class="n-h2">Closed loop control</div>
  <p class="n-p">A closed loop system measures its own output, compares that measurement against the desired value, and continuously adjusts itself to close the gap. Three terms describe every closed loop system, and an interviewer who asks about PID is really asking whether you understand these three first:</p>
  <table class="n-table">
    <tr><th>Term</th><th>Meaning</th><th>Example: engine room cooling water temperature control</th></tr>
    <tr><td><strong>Setpoint</strong></td><td>The desired value the system is trying to hold</td><td>Cooling water temperature should be 36°C</td></tr>
    <tr><td><strong>Feedback</strong></td><td>A measurement of the actual output, fed back to the controller</td><td>A temperature sensor reports the actual water temperature</td></tr>
    <tr><td><strong>Error</strong></td><td>Setpoint minus feedback, the gap the controller acts on</td><td>Actual is 39°C, error is 3°C, the controller opens the cooling valve further</td></tr>
  </table>
  <div class="n-formula">Error = Setpoint − Measured value</div>
  <p class="n-p">Feedback is what makes the loop "closed": the output is fed back and compared, closing a loop from output back to input. Without feedback there is nothing to close, which is exactly why it is called open loop.</p>

  <div class="n-h1" id="s-modes">On/Off, P, PI and PID Control</div>
  <p class="n-p">Once you have a closed loop, the question becomes: given an error, how much correction should the controller apply, and when? That is what these control modes answer, each one solving a specific weakness in the mode before it.</p>

  <div class="n-h2">On/off (two-position) control</div>
  <p class="n-p">The simplest possible response to error: full correction if the measured value is on the wrong side of the setpoint, no correction if it is on the right side. A domestic thermostat and a simple bilge level pump both work this way. It is cheap and robust, but it cannot hold a value steady, it can only cycle around it. In practice a small dead band is built in either side of the setpoint so the output does not chatter on and off continuously as noise crosses the exact setpoint value.</p>

  <div class="n-h2">Proportional (P) control</div>
  <p class="n-p">Instead of an all-or-nothing response, proportional control makes the corrective output proportional to the size of the error: a large error gets a large correction, a small error gets a small correction.</p>
  <div class="n-formula">Output = K<sub>p</sub> × Error<div class="label">K<sub>p</sub> = proportional gain, a tuning constant set for the system</div></div>
  <p class="n-p">This is smoother than on/off, but it has one structural weakness that every interviewer expects you to know: <strong>proportional control cannot fully eliminate error</strong>. Because the corrective action depends on there being an error to act on, the system settles with some small permanent error remaining, called <strong>offset</strong> or droop. If the error ever reached exactly zero, the proportional output would also fall to zero, and with no output the disturbance that caused the error in the first place is no longer being resisted, so the error reappears. The system settles at whatever small error is needed to keep just enough output to balance the load. Raising the gain reduces the offset but pushed too far it causes the output to overshoot and oscillate.</p>

  <div class="n-h2">Proportional-Integral (PI) control</div>
  <p class="n-p">Integral action is added specifically to remove that offset. The integral term continuously accumulates the error over time, and as long as any error exists at all, however small, the integral term keeps growing and keeps adding to the output.</p>
  <div class="n-formula">Output = K<sub>p</sub> × Error + K<sub>i</sub> × ∫Error dt</div>
  <p class="n-p">This means the controller keeps increasing its output until the error is driven to exactly zero, because only at zero error does the accumulated integral term stop growing. <strong>Integral action removes steady state offset</strong>, which is the specific problem it exists to solve. The trade-off is that because it acts on an accumulated history rather than the instantaneous error, it responds more slowly and, if tuned too aggressively, can overshoot the setpoint and take time to settle, an effect called integral windup.</p>

  <div class="n-h2">Proportional-Integral-Derivative (PID) control</div>
  <p class="n-p">Derivative action looks at how fast the error is changing, not how large it currently is, and adds a correction proportional to that rate of change.</p>
  <div class="n-formula">Output = K<sub>p</sub> × Error + K<sub>i</sub> × ∫Error dt + K<sub>d</sub> × d(Error)/dt</div>
  <p class="n-p">Its job is to anticipate. If the error is changing quickly, derivative action applies extra correction now, ahead of the error becoming large, and it also acts as a brake, damping down the correction as the value approaches setpoint quickly, before it can overshoot. <strong>Derivative action reduces overshoot and improves response to fast changes</strong>, which is the specific problem it exists to solve. It is not used alone because it does nothing about a steady, unchanging error, it only responds to change.</p>

  <table class="n-table">
    <tr><th>Term</th><th>Responds to</th><th>Problem it solves</th><th>Weakness on its own</th></tr>
    <tr><td><strong>P</strong></td><td>Present error, its size</td><td>Smooth, graded correction instead of on/off</td><td>Leaves permanent offset</td></tr>
    <tr><td><strong>I</strong></td><td>Past error, accumulated over time</td><td>Removes steady state offset</td><td>Slower, can overshoot / wind up</td></tr>
    <tr><td><strong>D</strong></td><td>Future trend, rate of change</td><td>Anticipates and damps overshoot</td><td>Does nothing for a steady error, amplifies noise</td></tr>
  </table>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> P gives a graded response but always leaves a small permanent offset. I removes that offset by accumulating error over time until it is driven to zero. D looks at how fast the error is changing and adds a damping correction to reduce overshoot. Combined as PID, you get a fast, accurate, stable response, which is why PID is the standard controller behind most continuous shipboard control loops such as boiler level, cooling water temperature, and cargo tank pressure.</div></div>

  <div class="n-h1" id="s-plc-what">What a PLC Is, and Why It Replaced Relay Logic</div>
  <p class="n-p"><strong>Definition:</strong> a Programmable Logic Controller, PLC, is an industrial computer designed to read a set of inputs, execute a stored program of logic, and drive a set of outputs, built specifically to survive and operate reliably in an industrial environment: vibration, heat, electrical noise, and continuous duty for years without a reboot.</p>
  <p class="n-p">Before PLCs, the same job was done with <strong>relay logic</strong>, hardwired panels where dozens or hundreds of electromechanical relays and timers were physically wired together to implement control logic. It worked, and older ships still have panels like this, but it had real problems that the PLC was built specifically to solve:</p>
  <table class="n-table">
    <tr><th>Relay logic</th><th>PLC</th></tr>
    <tr><td>Changing the logic means rewiring physical relays</td><td class="ok">Changing the logic means editing software, no rewiring</td></tr>
    <tr><td>Large panels, heavy, lots of physical wear parts</td><td class="ok">Compact, fewer moving parts to wear out or fail</td></tr>
    <tr><td>Contacts wear, arc, and eventually fail mechanically</td><td class="ok">Solid state switching internally, far less mechanical wear</td></tr>
    <tr><td>Troubleshooting means tracing physical wiring with a meter</td><td class="ok">Online program monitoring shows exactly which logic is true or false in real time</td></tr>
    <tr><td>No easy way to log data, trend values, or communicate to other systems</td><td class="ok">Native communication to HMIs, SCADA, printers, and other controllers</td></tr>
  </table>
  <p class="n-p">The core idea that makes this possible is that the PLC keeps the logic in software and only uses hardware for what genuinely must be hardware: reading physical signals in and driving physical signals out. Everything in between, all the decision-making, lives in a program that can be changed in minutes rather than an afternoon with a wiring diagram and a screwdriver.</p>

  <div class="n-h1" id="s-plc-arch">PLC Architecture</div>
  <p class="n-p">Be able to draw this and name every block, it is a very standard interview question.</p>
  <table class="n-table">
    <tr><th>Block</th><th>Function</th></tr>
    <tr><td><strong>Power supply</strong></td><td>Converts the incoming supply, typically <span class="n-val">24V DC</span> or mains AC, to the regulated low voltage DC the CPU and internal electronics need. Often has its own back-up or is fed from an uninterruptible source, since losing the PLC supply loses control of everything downstream of it.</td></tr>
    <tr><td><strong>CPU (processor)</strong></td><td>The brain. Executes the stored program instruction by instruction, reads the input image, evaluates the logic, and writes the output image. Its speed and the program size it can hold are usually the headline specification of a PLC.</td></tr>
    <tr><td><strong>Memory</strong></td><td>Holds the user program, which is normally retained even with power off, and holds working data, timer and counter values, and the input/output image tables while running.</td></tr>
    <tr><td><strong>Input module</strong></td><td>Interfaces field devices, sensors, switches, transmitters, to the CPU. Converts real-world electrical signals into a form the CPU can read, and provides electrical isolation between the noisy field wiring and the CPU's internal electronics.</td></tr>
    <tr><td><strong>Output module</strong></td><td>Interfaces the CPU's decisions back out to the real world: contactor coils, solenoid valves, indicator lamps, valve positioners. Also isolates the CPU from the field side.</td></tr>
    <tr><td><strong>Communication module / port</strong></td><td>Lets the PLC talk to other equipment: an HMI, a SCADA system, other PLCs on a network, or a programming laptop. Common industrial protocols include Modbus, Profibus/Profinet and Ethernet/IP.</td></tr>
  </table>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The one line answer to "what is a PLC?"</strong> An industrial computer that reads inputs, runs a stored logic program on them, and drives outputs accordingly, built to survive the vibration, heat, and electrical noise of an industrial or marine environment, and designed to replace hardwired relay logic with logic held in software.</div></div>

  <div class="n-h1" id="s-scan">The Scan Cycle</div>
  <p class="n-p">A PLC does not run its program continuously like reading a page top to bottom once. It runs it in a repeating loop, called the <strong>scan cycle</strong>, over and over for as long as it is powered and in run mode. Understanding the scan cycle is what separates a candidate who has actually programmed a PLC from one who has only read about it.</p>
  <div class="n-steps">
    <p class="n-p">1. <strong>Read inputs.</strong> The CPU reads the state of every physical input, on or off for digital points, a numeric value for analog points, and copies that snapshot into an area of memory called the <strong>input image table</strong>. The program never reads the physical terminals directly while it runs, it reads this frozen snapshot.</p>
    <p class="n-p">2. <strong>Execute program.</strong> The CPU runs the user's logic, rung by rung for ladder logic, from top to bottom, using only the input image captured in step 1. As it evaluates each instruction it writes results into an <strong>output image table</strong> in memory, not to the physical outputs yet.</p>
    <p class="n-p">3. <strong>Update outputs.</strong> Once the entire program has finished executing, the CPU copies the completed output image table out to the physical output terminals in one batch, energising or de-energising real coils and contacts.</p>
    <p class="n-p">4. <strong>Housekeeping.</strong> Communication with the HMI or SCADA, internal diagnostics, and updating timers, then the cycle repeats from step 1.</p>
  </div>
  <p class="n-p">The time to complete one full pass through all four steps is the <strong>scan time</strong>. It is not a fixed industry number, it depends heavily on how much logic the program contains and how many input and output points there are, but as a rough working figure, simple programs with a modest number of I/O points typically scan in under a millisecond to a few milliseconds, and larger programs with extensive logic, many I/O points and heavy communication traffic can run to tens of milliseconds, broadly in the region of <span class="n-val">1 to 100 ms</span> depending on the controller and program.</p>
  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Why scan time matters.</strong> Because inputs are only read at the start of the scan, any change to a physical input that happens and disappears entirely between two input reads can be missed altogether. A pulse shorter than the scan time may never be seen by the program. This is exactly why very fast events, a high speed counter input for example, need either a fast enough scan time to reliably catch them, or dedicated high speed counter hardware that captures the event outside the normal scan. It is also why outputs never change mid-scan: everything the outside world sees is updated together, once, at the end of the cycle, which keeps the machine's behaviour predictable and consistent from one scan to the next.</div></div>

  <div class="n-h1" id="s-din">Digital Input</div>
  <p class="n-p"><strong>Definition:</strong> a digital, or discrete, input reads a signal that can only ever be in one of two states, on or off, present or absent. There is no in-between value; the PLC sees a 1 or a 0, nothing else.</p>
  <p class="n-p"><strong>Typical signal type:</strong> on marine and industrial control panels this is almost always <span class="n-val">24V DC</span>. The field device either applies 24V to the input terminal, read as logic 1, or does not, read as logic 0.</p>
  <p class="n-p"><strong>Shipboard examples:</strong> a level switch that simply flips at a fixed level (tank high level switch), a pushbutton (start/stop station), a limit switch on a valve confirming fully open or fully closed, a pressure switch that trips at one fixed setpoint (low lube oil pressure switch), a door or hatch position switch, and an emergency stop contact.</p>
  <p class="n-p"><strong>Wiring:</strong> the field contact is wired in series between the 24V DC supply and the digital input terminal. When the contact closes, 24V reaches the input and the PLC reads it as on. The common (0V) side of the field devices returns to a common terminal shared across the input module.</p>

  <div class="n-h1" id="s-ain">Analog Input</div>
  <p class="n-p"><strong>Definition:</strong> an analog input reads a continuously variable signal that can take any value across a defined range, not just two states. The PLC converts that signal, through an analog-to-digital converter on the input module, into a numeric value it can use in calculations, comparisons, and control loops.</p>
  <p class="n-p"><strong>Typical signal types:</strong> the two industry-standard conventions are <span class="n-val">4-20mA current loop</span> and <span class="n-val">0-10V</span> voltage signal. On ships, 4-20mA current loop dominates for field transmitters over any real cable run, because a current signal is unaffected by voltage drop or resistance along the cable, so the reading at the PLC end is accurate however long or resistive the run is; a voltage signal, by contrast, is directly reduced by cable resistance over distance.</p>
  <p class="n-p"><strong>Why 4mA and not 0mA at the bottom of range:</strong> this is called a <strong>live zero</strong> and it is a deliberate design choice, not an arbitrary number. With a <span class="n-val">4-20mA</span> scale, <span class="n-val">0mA</span> is a state the loop should never produce while healthy, so a reading of 0mA unambiguously means a broken wire, a disconnected transmitter, or a power failure, not "the process variable happens to be zero." A 0-20mA scheme cannot make that distinction: 0mA could mean either a genuine zero reading or a dead loop, and there is no way to tell them apart. The 4mA floor also conveniently doubles as the standing current that powers a loop-powered two-wire transmitter's own electronics, so the same two wires carry both power to the transmitter and the signal back.</p>
  <div class="n-formula">Process value = (Signal − 4mA) / 16mA × Span<div class="label">e.g. a 0-10 bar transmitter reading 12mA is at (12-4)/16 × 10 = 5 bar</div></div>
  <p class="n-p"><strong>Shipboard examples:</strong> a <span class="n-val">Pt100</span> resistance temperature detector</strong> or a thermocouple reporting a continuously varying temperature (cooling water temperature, bearing temperature), and a <strong>pressure transmitter</strong> reporting a continuously varying pressure (lube oil pressure, boiler steam pressure), rather than just tripping at one fixed point. Anywhere the actual value matters, not just whether a limit has been crossed, the signal has to be analog.</p>
  <p class="n-p"><strong>Wiring:</strong> a two-wire loop-powered transmitter is wired in series in a single current loop with the PLC's analog input, its own power supply, and typically a load or sense resistor across which the input module measures the loop current. Screened, twisted-pair cable is standard practice to reduce noise pickup, particularly important because the signal is a small current riding on a long cable run through an electrically noisy engine room.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>These are asked as two separate questions in a real oral exam.</strong> "What is a digital input of a PLC?" and "What is an analog input of a PLC?" are not the same question asked two ways, they are asked back to back as two distinct questions, and each needs its own concrete example ready. Digital: a level switch or a pushbutton, strictly on or off. Analog: a Pt100 or a pressure transmitter, a continuous value across a range. Do not answer one and assume it covers the other.</div></div>

  <div class="n-h1" id="s-out">Digital and Analog Outputs</div>
  <p class="n-p">Outputs mirror the same on/off versus continuous-value distinction, but now the PLC is driving the field device rather than reading it.</p>
  <p class="n-p"><strong>Digital output:</strong> switches a field device fully on or fully off, nothing in between. The output module typically switches this through a relay, a transistor, or a triac, depending on whether the load is DC or AC and how much current it draws. Shipboard examples: energising a contactor coil to start a motor, opening a solenoid valve, driving an indicator lamp or a horn.</p>
  <p class="n-p"><strong>Analog output:</strong> drives a continuously variable signal out, again usually 4-20mA or 0-10V, to a field device that needs a graded position or speed rather than a simple on/off command. Shipboard examples: a signal to a control valve positioner commanding a specific percentage open, a speed reference sent to a VFD, or a damper actuator position command.</p>
  <table class="n-table">
    <tr><th></th><th>Digital I/O</th><th>Analog I/O</th></tr>
    <tr><td>States</td><td class="hl">Two only, on/off</td><td class="ok">Continuous, across a range</td></tr>
    <tr><td>Typical signal</td><td>24V DC discrete</td><td>4-20mA or 0-10V</td></tr>
    <tr><td>Example input</td><td>Level switch, pushbutton</td><td>Pt100, pressure transmitter</td></tr>
    <tr><td>Example output</td><td>Contactor coil, solenoid valve</td><td>Valve positioner, VFD speed reference</td></tr>
  </table>

  <div class="n-h1" id="s-sinksource">Sinking and Sourcing, in Outline</div>
  <p class="n-p">This describes the direction current flows through a DC input or output circuit, and it matters because a field device built for one convention will not work correctly wired to a module expecting the other.</p>
  <p class="n-p">A <strong>sourcing</strong> device or module supplies the positive voltage out to the load or sensor, current flows from the device into the external circuit. A <strong>sinking</strong> device or module provides the path to the negative or 0V side, current flows from the external circuit into the device. Put simply: a sourcing output pushes current out, a sinking input pulls current in. Many PLC input and output modules are switchable or specified as one or the other, and many field sensors, particularly proximity switches, are sold in PNP (sourcing) or NPN (sinking) versions specifically so they can be matched to whichever convention the rest of the panel is wired to. Matching sourcing to sinking correctly is a basic and very real wiring check, not a theoretical detail; getting it backwards is a common reason a device appears to be "not working" when it is actually just wired to the wrong polarity convention.</p>

  <div class="n-h1" id="s-ladder">Ladder Logic Basics</div>
  <p class="n-p">Ladder logic is the standard PLC programming language for this kind of control, and it is drawn deliberately to look like an electrical relay schematic, because it was designed to be readable by the same engineers who already understood relay wiring diagrams. Two vertical rails represent the supply, and horizontal "rungs" between them represent individual pieces of logic.</p>

  <div class="n-h2">Contacts and coils</div>
  <p class="n-p">A <strong>contact</strong> represents a condition being tested: is this input on, is this internal bit set. It is drawn as two vertical bars, normally open ( | | ) meaning the rung continues only if the condition is true, or normally closed ( |/| ) meaning the rung continues only if the condition is false. A <strong>coil</strong> represents an output being commanded: it is drawn as a circle at the right end of the rung, and it energises whenever there is a complete path of true contacts from the left rail to it, exactly as a physical relay coil energises whenever a complete circuit exists to it.</p>

  <div class="n-h2">Worked example: start/stop with a seal-in</div>
  <p class="n-p">This is the ladder logic equivalent of the DOL starter circuit from F11, and it is worth building slowly because it is one of the most commonly asked practical questions in this area.</p>
  <div class="n-steps">
    <p class="n-p">1. Rung has a normally open contact for the <strong>Start</strong> pushbutton, in series with a normally closed contact for the <strong>Stop</strong> pushbutton, in series with a coil, call it <strong>Motor</strong>, at the end of the rung.</p>
    <p class="n-p">2. Press Start: the Start contact closes, the Stop contact is already closed (normally closed, meaning true when the button is not pressed), the rung is complete, and the Motor coil energises.</p>
    <p class="n-p">3. Release Start: the Start contact opens again. Without anything else on the rung, the Motor coil would immediately de-energise, which is not what a motor start/stop circuit needs.</p>
    <p class="n-p">4. Add a second, normally open contact of the <strong>Motor</strong> coil itself, wired in parallel with the Start contact. As soon as the Motor coil first energises in step 2, this contact closes too, and now provides its own alternative path to keep the rung complete even after the Start button is released. This is the <strong>seal-in</strong>, or <strong>latch</strong>.</p>
    <p class="n-p">5. Press Stop: the normally closed Stop contact opens, breaking the rung regardless of what the Start or Motor contacts are doing, and the Motor coil de-energises. The seal-in contact then opens too, since it follows the coil's own state, and the circuit returns to its original condition, ready to be started again.</p>
  </div>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Tie this back to F11.</strong> This is exactly the same behaviour as the hold-in, or latching, auxiliary contact on a DOL starter's main contactor, which you should already know from F11: an auxiliary contact wired in parallel with the start button that closes when the contactor pulls in and keeps its coil energised after the start button is released. The ladder logic seal-in contact is the software equivalent of that same physical hold-in contact, doing the identical job by the identical logic, just implemented in a program instead of a wire. If you can explain one, you can explain the other by direct analogy.</div></div>

  <div class="n-h1" id="s-scada">SCADA</div>
  <p class="n-p"><strong>SCADA</strong> stands for <strong>Supervisory Control And Data Acquisition</strong>. It is a software system that sits above one or more PLCs, gathering data from them, presenting it to a human in a usable form, logging it, and issuing supervisory commands back down.</p>
  <div class="n-crit"><span class="icon">🔴</span><div class="body"><strong>The distinction interviewers are checking for.</strong> A PLC executes the real-time control logic: it is the thing actually reading a sensor and switching a contactor, scan after scan, whether or not anyone is watching. SCADA does not do that real-time control itself; it supervises, visualises and records what the PLCs underneath it are doing, and lets a human intervene. If every PLC in an engine room kept running exactly as programmed, the plant would keep operating correctly even with the SCADA system switched off, because the control logic lives in the PLCs, not in SCADA. Losing SCADA loses visibility and central control, it does not stop the process.</div></div>
  <p class="n-p">SCADA brings together several distinct functions under one system:</p>
  <table class="n-table">
    <tr><th>Function</th><th>What it does</th></tr>
    <tr><td><strong>HMI (Human-Machine Interface)</strong></td><td>The graphical screens an operator actually looks at and touches: mimic diagrams of the plant, live values, buttons to issue commands. HMI is really the visible part of a SCADA system.</td></tr>
    <tr><td><strong>Data acquisition</strong></td><td>Continuously polling or receiving data from every connected PLC, so the system holds a current picture of the whole plant, not just one panel.</td></tr>
    <tr><td><strong>Alarm handling</strong></td><td>Recognising when a value has crossed a limit, presenting that clearly to the operator (colour change, audible alarm, alarm list), and requiring acknowledgement so there is a record of who saw what and when.</td></tr>
    <tr><td><strong>Trending</strong></td><td>Logging values over time and presenting them as graphs, so an operator or engineer can see whether a parameter is stable, slowly drifting, or already recovering, rather than just its instantaneous value.</td></tr>
  </table>
  <p class="n-p"><strong>Where it sits in the hierarchy:</strong> field devices (sensors, transmitters, actuators) at the bottom, feeding PLCs which run the real-time control logic, which in turn feed a SCADA/HMI layer above them for supervision, visualisation, alarm management and logging, which itself may feed further up into a fleet-level or shore-based monitoring system on modern vessels. Each layer does progressively less real-time control and progressively more supervision, decision support and record keeping as you go up.</p>

  <div class="n-h1" id="s-alarm">Alarm and Monitoring Systems, and the Dead Man Alarm</div>
  <p class="n-p">On a UMS vessel, the alarm and monitoring system is the safety net that replaces the engineer's own eyes and ears while the machinery space is unattended. Its philosophy is simple to state and important to get right in an interview: every parameter that matters is continuously monitored, any parameter drifting outside its safe band raises an alarm automatically without waiting for a human to notice, alarms are graded so a serious condition is unmistakably distinguished from a minor one, and unacknowledged or unresolved alarms escalate, typically from the engine control room, to the engineer's cabin, and on to the bridge and other officers' cabins if nobody responds.</p>

  <div class="n-h2">The dead man alarm</div>
  <p class="n-p">The dead man alarm exists to answer a different question from the process alarms above: not "is the machinery healthy," but "is the duty engineer, who is alone in or responsible for the space, actually still capable of responding." A duty engineer entering the machinery space out of hours starts a countdown timer, and must periodically reset it, in person, at a reset point in the space, to confirm they are conscious and mobile. If the timer is not reset within its set interval, the system first raises a warning locally, and if that too goes unacknowledged within a further short period, it escalates the alarm progressively to other spaces, ultimately including the bridge, so that someone is sent to check on the engineer.</p>
  <div class="n-crit"><span class="icon">⚠️</span><div class="body"><strong>Flagging this rather than guessing.</strong> Different sources describe somewhat different exact reset intervals and escalation timings for the dead man alarm, commonly cited figures range roughly from about 15 to 30 minutes depending on the specific vessel, its classification society, and flag state requirements, rather than one single number fixed by SOLAS itself. Rather than quote one specific number as universal, the safe and correct interview answer is to describe the principle precisely, a periodically reset timer that escalates through defined stages if not acknowledged, and to say that the exact interval is class/flag specific and should be checked against that particular ship's approved procedures rather than assumed.</div></div>
  <p class="n-p">The underlying purpose is unambiguous regardless of the exact numbers involved: it protects a lone engineer who may become incapacitated, by illness, injury, or an accident with machinery, from going unnoticed simply because no one else was scheduled to be in the space.</p>

  <div class="n-h1" id="s-condition">Condition Monitoring and Predictive Maintenance</div>
  <p class="n-p">Maintenance strategy on a ship falls into three broad approaches, and knowing all three, in order, with their trade-offs, is a standard interview question in its own right.</p>
  <table class="n-table">
    <tr><th>Strategy</th><th>Approach</th><th>Trade-off</th></tr>
    <tr><td><strong>Breakdown / reactive</strong></td><td>Run the equipment until it fails, then repair or replace it</td><td>No wasted maintenance on healthy equipment, but failures happen without warning and can be far more expensive and dangerous, especially for critical machinery</td></tr>
    <tr><td><strong>Planned / preventive</strong></td><td>Maintain on a fixed schedule, running hours or calendar time, regardless of actual condition</td><td>Predictable and simple to plan, but wastes life on parts still in good condition, and does not guarantee a part will not fail early between scheduled services</td></tr>
    <tr><td><strong>Predictive / condition-based</strong></td><td>Continuously or periodically monitor the actual condition of the machine and intervene only when the data shows a developing problem</td><td>Gets the most useful life out of every component and catches developing faults before they cause a breakdown, but needs monitoring equipment, sensors, and the expertise to interpret the data correctly</td></tr>
  </table>

  <div class="n-h2">What data predictive maintenance actually uses</div>
  <p class="n-p"><strong>Vibration analysis:</strong> every rotating machine, a motor, a pump, a compressor, has a normal vibration signature. As bearings wear, shafts misalign, or rotors become unbalanced, that vibration signature changes in specific, recognisable ways, at specific frequencies tied to shaft speed, bearing geometry, and the number of blades or vanes, well before the fault is severe enough to be heard or felt by hand. Accelerometers permanently or periodically fitted to bearing housings capture this, and the trend of the signature over time, not just one reading, is what actually reveals a developing fault.</p>
  <p class="n-p"><strong>Temperature:</strong> a rising bearing or winding temperature trend, tracked over weeks and months, is one of the simplest and most reliable early indicators of increasing friction or a developing electrical fault, long before the equipment feels obviously hot.</p>
  <p class="n-p"><strong>Motor current signature analysis (MCSA):</strong> the current a motor draws is not perfectly smooth even under steady load; developing mechanical faults, a cracked rotor bar, bearing wear, misalignment, imprint themselves as small, specific patterns in the motor's current waveform. Analysing that current signature allows some mechanical and electrical faults to be detected without opening the motor up or fitting a separate vibration sensor at all, which makes it attractive where physical access is difficult.</p>
  <p class="n-p"><strong>Oil analysis:</strong> lubricating oil sampled and tested periodically reveals the presence and concentration of metal particles being worn off bearings, gears, and cylinder liners, the breakdown of the oil's own additive package, and contamination by water or fuel. Rising wear metal content in oil analysis is a direct, physical signature of a component wearing down internally, and it is one of the oldest and most trusted condition monitoring tools on a ship precisely because it is simple, cheap to sample, and hard to argue with.</p>

  <div class="n-h1" id="s-ai">Where AI Actually Fits In</div>
  <p class="n-p">This is a genuinely useful, non-mystical answer, and it is worth having it exactly this grounded for an interview: AI in predictive maintenance is fundamentally <strong>pattern recognition applied to trend data at a scale and consistency a human cannot match by eye.</strong></p>
  <p class="n-p">A vibration spectrum, a current signature, or a set of oil analysis results over months of readings is a large, noisy dataset. A human engineer can certainly learn to recognise a classic bearing fault signature from experience, but an AI model trained on large numbers of past examples of "this specific pattern preceded that specific failure" can watch far more data streams simultaneously, catch subtler and more gradual changes that a person would dismiss as noise, and flag a developing anomaly at the point it first starts to diverge from the machine's own historical normal, rather than waiting until the fault is large enough to be visually obvious on a trend chart.</p>
  <p class="n-p">In practical terms this usually means: the system learns what "normal" looks like for a specific machine from its own historical data, continuously compares new readings against that learned normal, and raises a maintenance recommendation when the deviation is statistically significant and matches a pattern previously associated with a developing fault. That is the entire mechanism. It is not the machine "understanding" the equipment or reasoning about it the way an engineer would; it is a statistical pattern-matching tool operating on the same vibration, temperature, current signature and oil analysis data described above, just processing far more of it, far more consistently, than a human watching the same trend charts by eye ever could.</p>
  <div class="n-crit"><span class="icon">💡</span><div class="body"><strong>Say this in the interview.</strong> AI in this context does not replace the sensor or the underlying physics, vibration is still vibration and oil is still oil. What it adds is faster, more consistent pattern recognition across large volumes of trend data, catching a developing fault earlier and with fewer false alarms than manual trend review, so maintenance can be planned and scheduled before a breakdown happens rather than reacted to after it does. It is a practical statistical tool layered on top of the same condition monitoring data engineers already collect, not a separate or mysterious technology.</div></div>

  <div class="n-h1" id="s-interview">Interview Answers, Rapid Fire</div>

  <p class="n-p"><strong>What is a PLC?</strong><br>
  An industrial computer that reads a set of inputs, runs a stored program of logic against them, and drives a set of outputs accordingly. It is built to survive vibration, heat and electrical noise, and it replaced hardwired relay logic because its logic lives in editable software instead of physical wiring.</p>

  <p class="n-p"><strong>What is an analog input of a PLC?</strong><br>
  An input that reads a continuously variable signal across a range, not just on or off, converted to a numeric value by an analog-to-digital converter on the input module. Typical signal types are 4-20mA current loop or 0-10V. A Pt100 giving a continuous temperature reading, or a pressure transmitter, are the standard shipboard examples.</p>

  <p class="n-p"><strong>What is a digital input of a PLC?</strong><br>
  An input that reads a signal which can only be one of two states, on or off, typically <span class="n-val">24V DC</span> present or absent. A level switch or a pushbutton are the standard shipboard examples. This is asked as a separate question from analog input in the real exam, so both examples need to be ready independently.</p>

  <p class="n-p"><strong>What is SCADA?</strong><br>
  Supervisory Control And Data Acquisition. Software that sits above the PLCs, gathering their data, displaying it to an operator through an HMI, logging and trending it, and managing alarms, while issuing supervisory commands back down. The PLC does the real-time control itself; SCADA supervises, visualises and records it, and losing SCADA loses visibility and central control, not the underlying control logic.</p>

  <p class="n-p"><strong>What is the meaning of predictive maintenance in AI?</strong><br>
  Predictive maintenance uses condition data, vibration, temperature, motor current signature, oil analysis, to schedule maintenance based on actual developing faults rather than a fixed calendar or a breakdown. AI's role in it is pattern recognition: learning what normal looks like for a specific machine from historical data, then flagging a statistically significant deviation that matches a pattern known to precede failure, earlier and more consistently than a human reviewing the same trend charts by eye. It is a statistical tool applied to real sensor data, not a mysterious or independent form of diagnosis.</p>

  <p class="n-p"><strong>What is the difference between open loop and closed loop control?</strong><br>
  Open loop acts on an input and produces an output with no check on whether the result was achieved. Closed loop measures its own output as feedback, compares it against a setpoint, calculates the error, and continuously corrects for it. Feedback is what closes the loop.</p>

  <p class="n-p"><strong>What problem does integral action solve in PID control?</strong><br>
  Proportional control alone always leaves a small permanent offset, because its output falls to zero exactly when the error does, removing the correction that was resisting the disturbance. Integral action accumulates error over time and keeps adding to the output as long as any error remains, driving the offset to zero.</p>

  <p class="n-p"><strong>What is the scan cycle of a PLC?</strong><br>
  The repeating loop a PLC runs continuously: read all inputs into an input image, execute the program using that snapshot and build an output image, copy the output image out to the physical outputs, then repeat. Typical scan times run from under a millisecond for a small program up to tens of milliseconds for a large one; a signal shorter than the scan time can be missed entirely.</p>

  <p class="n-p"><strong>What is a UMS notation and what is the dead man alarm?</strong><br>
  UMS certifies a machinery space can be periodically left unattended, backed by automatic alarm coverage, standby equipment changeover, and fire/flood detection that does not depend on someone already being present. The dead man alarm confirms the duty engineer alone in the space is still capable of responding, through a periodically reset timer that escalates through the space and eventually to the bridge if not acknowledged; the exact reset interval is set by the specific vessel's class and flag requirements rather than one universal figure.</p>

  <p class="n-p"><strong>What is the difference between a ladder logic seal-in contact and the hold-in contact on a DOL starter?</strong><br>
  They do the identical job by identical logic, one in software and one in a physical wire. A normally open auxiliary contact from the output, motor coil or contactor, wired in parallel with the start command, closes as soon as that output first energises and keeps the circuit complete after the start command is released, until a stop condition breaks the circuit.</p>

  <p class="n-p"><strong>What are the three maintenance strategies?</strong><br>
  Breakdown or reactive, running to failure then repairing. Planned or preventive, servicing on a fixed schedule regardless of actual condition. Predictive or condition-based, monitoring actual condition through vibration, temperature, current signature and oil analysis, and intervening only when the data shows a developing fault.</p>

  <div style="text-align:center; margin: 30px 0;">
    <button class="anc-btn" onclick="goToQuizFromNotes('F21')" style="background-color:var(--green-dim);border-color:var(--green);color:var(--green);padding:12px 24px;font-size:14px;">Take the F21 Quiz →</button>
  </div>

  </div>
</div>
</div>`);

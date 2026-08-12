window.loadQuizzes("F21_Automation", [

  /* ═══════════ WHY AUTOMATION ═══════════ */
  {
    "q": "What is the fundamental purpose of automation on board a ship?",
    "a": "To let the ship run safely with a reduced crew by replacing continuous human observation with continuous instrument observation",
    "opts": [
      "To let the ship run safely with a reduced crew by replacing continuous human observation with continuous instrument observation",
      "To eliminate the need for any engineer on board",
      "To reduce the top speed of machinery so faults happen more slowly",
      "To make the classification society survey process shorter"
    ],
    "exp": "Automation exists to make round-the-clock reliable operation possible without round-the-clock human watchkeeping, backed by logic that reacts faster and more consistently than a tired person can. It does not remove engineers, it changes their role.",
    "cat": "WHY",
    "id": "F21_001"
  },
  {
    "q": "Before automation, how did an engine room detect a developing problem such as a slowly rising bearing temperature?",
    "a": "An engineer walking rounds and reading gauges by eye, reacting as fast as a human could notice",
    "opts": [
      "An engineer walking rounds and reading gauges by eye, reacting as fast as a human could notice",
      "A satellite link reporting continuously to the classification society",
      "A dead man alarm system",
      "A SCADA historian trending the value automatically"
    ],
    "exp": "The pre-automation model relied entirely on continuous human watchkeeping. A tired engineer at three in the morning notices a slow drift far later than an instrument wired to an alarm relay would, which is exactly the weakness automation was built to fix.",
    "cat": "WHY",
    "id": "F21_002"
  },
  {
    "q": "In one sentence, what does automation actually do compared to the old watchkeeping model?",
    "a": "It replaces continuous human observation with continuous instrument observation, only calling a human when a genuine decision is needed",
    "opts": [
      "It replaces continuous human observation with continuous instrument observation, only calling a human when a genuine decision is needed",
      "It replaces the engine with a fully robotic system requiring no human input at all",
      "It reduces the total amount of machinery fitted on board",
      "It replaces classification society surveys with software audits"
    ],
    "exp": "This is the one-line summary worth having ready in an interview: continuous instrument observation backed by logic, escalating to a human only when needed, rather than a human watching everything all the time.",
    "cat": "WHY",
    "id": "F21_003"
  },

  /* ═══════════ UMS ═══════════ */
  {
    "q": "What does UMS stand for and certify?",
    "a": "Unmanned Machinery Space, a classification notation certifying the machinery space can be periodically left unattended",
    "opts": [
      "Unmanned Machinery Space, a classification notation certifying the machinery space can be periodically left unattended",
      "Universal Monitoring System, a single alarm panel fitted in the engine control room",
      "Unified Maintenance Standard, a fixed maintenance schedule set by class",
      "Under-Manned Ship, a flag state crewing exemption"
    ],
    "exp": "UMS is a classification society notation, not a single piece of equipment. It certifies the whole engine room's automation, alarm and safety systems together as able to run periodically unattended, normally overnight.",
    "cat": "UMS",
    "id": "F21_004"
  },
  {
    "q": "A UMS notation is best described as:",
    "a": "A certified state of the whole engine room's automation, alarm and safety systems taken together",
    "opts": [
      "A certified state of the whole engine room's automation, alarm and safety systems taken together",
      "A single dead man alarm unit fitted near the workshop",
      "A rating given to an individual engineer's competence",
      "A type of PLC used only on unmanned vessels"
    ],
    "exp": "UMS is not one piece of hardware, it is the certified combined state of alarms, automatic standby start, fire and flood detection, and the dead man alarm, all working together to a class-approved standard.",
    "cat": "UMS",
    "id": "F21_005"
  },
  {
    "q": "How did UMS change the duty engineer's job, compared to a manned watchkeeping system?",
    "a": "From continuous observation to supervision by exception, only being pulled in when automation cannot handle the situation or a decision is needed",
    "opts": [
      "From continuous observation to supervision by exception, only being pulled in when automation cannot handle the situation or a decision is needed",
      "The engineer's job was removed entirely and replaced by the classification society",
      "The engineer now only works during port calls",
      "The engineer's job became purely administrative paperwork"
    ],
    "exp": "This shift, from watching everything continuously to being alerted only when a human is genuinely needed, is what let manning levels fall on UMS vessels without lowering safety.",
    "cat": "UMS",
    "id": "F21_006"
  },
  {
    "q": "Which of the following is NOT something a machinery space must demonstrate to earn a UMS notation?",
    "a": "That every engineer on board holds a PLC programming certificate",
    "opts": [
      "That every engineer on board holds a PLC programming certificate",
      "That any parameter drifting outside its safe range raises an alarm automatically",
      "That critical machinery has automatic standby start and changeover",
      "That fire and flood can be detected and fought without an engineer already present"
    ],
    "exp": "UMS requirements concern the automation, alarm and safety systems of the space itself, plus a reliable means of confirming a responder is available (the dead man alarm). Individual crew certification in PLC programming is not a UMS survey requirement.",
    "cat": "UMS",
    "id": "F21_007"
  },

  /* ═══════════ OPEN/CLOSED LOOP ═══════════ */
  {
    "q": "What is the defining weakness of an open loop control system?",
    "a": "It has no check afterwards to see whether the output actually achieved what was wanted",
    "opts": [
      "It has no check afterwards to see whether the output actually achieved what was wanted",
      "It cannot be used with AC supplies",
      "It requires a PLC to implement",
      "It always oscillates around the setpoint"
    ],
    "exp": "An open loop system acts on an input and produces an output with no feedback to confirm the result, so it cannot correct for a disturbance it was not told about, such as an immersion heater running for a fixed time regardless of starting temperature.",
    "cat": "LOOP",
    "id": "F21_008"
  },
  {
    "q": "What makes a control system 'closed loop' rather than open loop?",
    "a": "The output is measured and fed back to be compared against the setpoint",
    "opts": [
      "The output is measured and fed back to be compared against the setpoint",
      "It uses a PLC instead of relay logic",
      "It only operates on 24V DC signals",
      "It has no moving parts"
    ],
    "exp": "Feedback is what 'closes' the loop: a measurement of the actual output is fed back and compared to the setpoint, and the difference (error) drives continuous correction. Without feedback there is nothing to close.",
    "cat": "LOOP",
    "id": "F21_009"
  },
  {
    "q": "In closed loop control, the setpoint is:",
    "a": "The desired value the system is trying to hold",
    "opts": [
      "The desired value the system is trying to hold",
      "A measurement of the actual output",
      "The difference between desired and actual value",
      "The physical device that applies the correction"
    ],
    "exp": "Setpoint is the target, e.g. cooling water should be 36 degrees C. Feedback is the measurement of what it actually is, and error is the gap between the two.",
    "cat": "LOOP",
    "id": "F21_010"
  },
  {
    "q": "Cooling water temperature is measured as 39 degrees C against a setpoint of 36 degrees C. What is the error the controller acts on?",
    "a": "3 degrees C",
    "opts": ["3 degrees C", "36 degrees C", "39 degrees C", "75 degrees C"],
    "exp": "Error = Setpoint minus measured value = 36 - 39 = -3, i.e. a 3 degree C error, which drives the controller to open the cooling valve further.",
    "cat": "LOOP",
    "id": "F21_011"
  },
  {
    "q": "A simple immersion heater switched on for a fixed time regardless of the tank's starting temperature is an example of:",
    "a": "Open loop control",
    "opts": ["Open loop control", "Closed loop control", "PID control", "Sourcing control"],
    "exp": "It delivers a fixed amount of heat with no feedback on the actual resulting temperature, which is exactly why it is open loop: it cannot correct for whether the tank started warm or ice cold.",
    "cat": "LOOP",
    "id": "F21_012"
  },

  /* ═══════════ ON/OFF, P, PI, PID CONTROL ═══════════ */
  {
    "q": "On/off (two-position) control gives what kind of response to error?",
    "a": "Full correction if on the wrong side of setpoint, no correction if on the right side, with no in-between",
    "opts": [
      "Full correction if on the wrong side of setpoint, no correction if on the right side, with no in-between",
      "A correction proportional to the size of the error",
      "A correction based on the accumulated history of the error",
      "A correction based on the rate of change of the error"
    ],
    "exp": "On/off control is the simplest possible response: full or nothing. It is cheap and robust but can only cycle around the setpoint, not hold it steady, which is why a small dead band is added to stop chattering.",
    "cat": "PID",
    "id": "F21_013"
  },
  {
    "q": "Why is a small dead band built into an on/off control system?",
    "a": "So the output does not chatter on and off continuously as noise crosses the exact setpoint value",
    "opts": [
      "So the output does not chatter on and off continuously as noise crosses the exact setpoint value",
      "So the system can hold the value perfectly steady",
      "So the correction becomes proportional to the error size",
      "So the integral term does not wind up"
    ],
    "exp": "Without a dead band, small noise fluctuations right at the setpoint would switch the output on and off rapidly. A dead band either side of setpoint prevents that chatter, at the cost of allowing the value to drift slightly within the band.",
    "cat": "PID",
    "id": "F21_014"
  },
  {
    "q": "In proportional (P) control, the corrective output is:",
    "a": "Proportional to the size of the present error",
    "opts": [
      "Proportional to the size of the present error",
      "Fixed regardless of the error size",
      "Proportional to the accumulated error over time",
      "Proportional to the rate of change of the error"
    ],
    "exp": "Output = Kp x Error. A large error produces a large correction and a small error a small correction, which is smoother than the all-or-nothing response of on/off control.",
    "cat": "PID",
    "id": "F21_015"
  },
  {
    "q": "Why can proportional (P) control alone never fully eliminate error?",
    "a": "Because the corrective output depends on there being an error, so if error reached zero the output would also fall to zero and the disturbance would go unresisted again",
    "opts": [
      "Because the corrective output depends on there being an error, so if error reached zero the output would also fall to zero and the disturbance would go unresisted again",
      "Because proportional gain is always set too low to matter",
      "Because P control only works on digital signals",
      "Because P control has no formula relating output to error"
    ],
    "exp": "This is the structural weakness examiners expect you to know. Since Output = Kp x Error, zero error means zero corrective output, which removes the very correction resisting the disturbance, so the system settles at a small permanent offset instead.",
    "cat": "PID",
    "id": "F21_016"
  },
  {
    "q": "What is the small permanent error that a proportional-only controller settles at called?",
    "a": "Offset (or droop)",
    "opts": ["Offset (or droop)", "Windup", "Dead band", "Overshoot"],
    "exp": "This remaining steady state error is called offset or droop. It is a structural limitation of proportional-only control, not a tuning mistake, though raising the gain does reduce it (at the risk of overshoot and oscillation).",
    "cat": "PID",
    "id": "F21_017"
  },
  {
    "q": "What happens if the proportional gain Kp is raised too far in an attempt to reduce offset?",
    "a": "The output can overshoot and oscillate",
    "opts": [
      "The output can overshoot and oscillate",
      "The offset increases further",
      "The system becomes an open loop system",
      "The integral term automatically activates to compensate"
    ],
    "exp": "Raising gain reduces offset but pushed too far it makes the corrective response too aggressive, causing overshoot and oscillation around the setpoint rather than settling.",
    "cat": "PID",
    "id": "F21_018"
  },
  {
    "q": "What specific problem does the integral (I) term in PI control solve?",
    "a": "It removes the steady state offset left behind by proportional control",
    "opts": [
      "It removes the steady state offset left behind by proportional control",
      "It reduces overshoot on fast-changing errors",
      "It replaces the need for a setpoint",
      "It converts a closed loop system into an open loop system"
    ],
    "exp": "Integral action continuously accumulates the error over time, and as long as any error exists, however small, the integral term keeps growing and adding to the output until the error is driven to exactly zero.",
    "cat": "PID",
    "id": "F21_019"
  },
  {
    "q": "Why does the integral term keep increasing the controller output even when the error is very small?",
    "a": "Because it accumulates (integrates) the error over time, and only stops growing once error reaches exactly zero",
    "opts": [
      "Because it accumulates (integrates) the error over time, and only stops growing once error reaches exactly zero",
      "Because the integral gain is always higher than the proportional gain",
      "Because small errors are given extra weight compared to large ones",
      "Because the derivative term forces it to keep increasing"
    ],
    "exp": "The integral term is the running sum of error over time. Any nonzero error, however small, keeps adding to that running sum and therefore keeps adding to the output, which is exactly how it eliminates offset that proportional action alone cannot.",
    "cat": "PID",
    "id": "F21_020"
  },
  {
    "q": "What is the main trade-off of adding integral action to a controller?",
    "a": "It responds more slowly and, if tuned too aggressively, can overshoot and take time to settle (integral windup)",
    "opts": [
      "It responds more slowly and, if tuned too aggressively, can overshoot and take time to settle (integral windup)",
      "It permanently increases the steady state offset",
      "It makes the controller unable to reach the setpoint at all",
      "It removes the need for a proportional term entirely"
    ],
    "exp": "Because integral action acts on an accumulated history rather than instantaneous error, it is slower to respond and, if the integral gain is too aggressive, can overshoot the setpoint, an effect known as integral windup.",
    "cat": "PID",
    "id": "F21_021"
  },
  {
    "q": "What does the derivative (D) term in PID control respond to?",
    "a": "How fast the error is changing, not how large it currently is",
    "opts": [
      "How fast the error is changing, not how large it currently is",
      "The accumulated total of past error",
      "The absolute size of the present error only",
      "The setpoint value itself"
    ],
    "exp": "Derivative action looks at the rate of change of error and adds a correction proportional to that rate, which lets it anticipate a fast-developing error and act before it becomes large.",
    "cat": "PID",
    "id": "F21_022"
  },
  {
    "q": "What specific problem does derivative (D) action solve in PID control?",
    "a": "It reduces overshoot and improves response to fast changes by anticipating and damping the correction as the value approaches setpoint",
    "opts": [
      "It reduces overshoot and improves response to fast changes by anticipating and damping the correction as the value approaches setpoint",
      "It removes steady state offset",
      "It converts an on/off controller into a proportional controller",
      "It stores the error for later use by the integral term"
    ],
    "exp": "Derivative action applies extra correction ahead of a fast-developing error becoming large, and also damps the response as the value nears setpoint quickly, reducing overshoot. It is not used alone because it does nothing for a steady, unchanging error.",
    "cat": "PID",
    "id": "F21_023"
  },
  {
    "q": "Why is derivative (D) action never used alone as a standalone controller?",
    "a": "It does nothing about a steady, unchanging error, it only responds to a change in error",
    "opts": [
      "It does nothing about a steady, unchanging error, it only responds to a change in error",
      "It is illegal to use on marine control systems",
      "It always causes the output to saturate immediately",
      "It cannot be implemented on a PLC"
    ],
    "exp": "Derivative action reacts only to the rate of change of error. If the error is constant and unchanging, its rate of change is zero, so a derivative-only controller would produce no corrective output at all.",
    "cat": "PID",
    "id": "F21_024"
  },
  {
    "q": "Why is PID the standard controller behind most continuous shipboard control loops such as boiler level and cooling water temperature?",
    "a": "Combined, P gives a graded response, I removes the permanent offset, and D damps overshoot, giving a fast, accurate and stable response",
    "opts": [
      "Combined, P gives a graded response, I removes the permanent offset, and D damps overshoot, giving a fast, accurate and stable response",
      "Because PID is the only mode that can be programmed into a PLC",
      "Because PID controllers use less electrical power than on/off controllers",
      "Because PID eliminates the need for any feedback sensor"
    ],
    "exp": "Each term compensates for the weakness of the one before it: P alone leaves offset, I removes the offset but is slow and can overshoot, D anticipates and damps that overshoot. Together they give fast, accurate, stable control.",
    "cat": "PID",
    "id": "F21_025"
  },

  /* ═══════════ WHAT IS A PLC ═══════════ */
  {
    "q": "What is a Programmable Logic Controller (PLC)?",
    "a": "An industrial computer that reads inputs, executes a stored program of logic, and drives outputs, built to survive vibration, heat and electrical noise",
    "opts": [
      "An industrial computer that reads inputs, executes a stored program of logic, and drives outputs, built to survive vibration, heat and electrical noise",
      "A relay panel with no programmable memory",
      "A type of sensor used only for analog temperature measurement",
      "A software package that runs only on a SCADA server"
    ],
    "exp": "A PLC is purpose-built industrial hardware: it reads a set of inputs, runs stored logic against them, and drives outputs, designed for continuous duty in a harsh industrial or marine environment.",
    "cat": "PLCBASIC",
    "id": "F21_026"
  },
  {
    "q": "What did the PLC replace, and why was that a problem?",
    "a": "Relay logic, hardwired panels where changing the logic meant physically rewiring dozens or hundreds of relays",
    "opts": [
      "Relay logic, hardwired panels where changing the logic meant physically rewiring dozens or hundreds of relays",
      "SCADA systems, which were too slow to react to alarms",
      "Analog input modules, which could not read digital signals",
      "Circuit breakers, which could not be reset remotely"
    ],
    "exp": "Before PLCs, control logic was implemented with hardwired electromechanical relays and timers. Changing that logic meant physically rewiring the panel, contacts wore and arced, and there was no easy way to log or trend data.",
    "cat": "PLCBASIC",
    "id": "F21_027"
  },
  {
    "q": "What is the core idea that makes a PLC easier to modify than a relay logic panel?",
    "a": "The logic lives in editable software, and hardware is only used for what genuinely must be hardware: reading and driving physical signals",
    "opts": [
      "The logic lives in editable software, and hardware is only used for what genuinely must be hardware: reading and driving physical signals",
      "PLCs use larger relays that are easier to access",
      "PLCs do not require any input or output wiring at all",
      "PLCs automatically rewire themselves when a fault occurs"
    ],
    "exp": "In a PLC, all decision-making lives in a program that can be changed in minutes. Only the reading of physical inputs and driving of physical outputs remains genuinely hardware, unlike relay logic where the decision-making itself was hardwired.",
    "cat": "PLCBASIC",
    "id": "F21_028"
  },
  {
    "q": "How does troubleshooting a PLC-based system differ from troubleshooting a relay logic panel?",
    "a": "Online program monitoring shows exactly which logic is true or false in real time, rather than tracing physical wiring with a meter",
    "opts": [
      "Online program monitoring shows exactly which logic is true or false in real time, rather than tracing physical wiring with a meter",
      "PLC systems cannot be troubleshot without shutting down the whole plant",
      "Relay panels are easier to troubleshoot because there is no software involved",
      "PLC systems require a classification society surveyor to be present"
    ],
    "exp": "With a PLC, the engineer can watch the program execute live and see exactly which rung or condition is true or false. Relay logic requires physically tracing wiring with a meter, which is slower and more error-prone.",
    "cat": "PLCBASIC",
    "id": "F21_029"
  },
  {
    "q": "Compared to a relay panel, what native capability does a PLC add for data and communication?",
    "a": "Native communication to HMIs, SCADA, printers and other controllers, allowing data logging and trending",
    "opts": [
      "Native communication to HMIs, SCADA, printers and other controllers, allowing data logging and trending",
      "The ability to run without any power supply",
      "Automatic replacement of worn mechanical contacts",
      "Elimination of the need for input and output modules"
    ],
    "exp": "Relay logic has no easy way to log data, trend values, or communicate with other systems. A PLC natively communicates over protocols such as Modbus or Profibus to HMIs, SCADA and other controllers.",
    "cat": "PLCBASIC",
    "id": "F21_030"
  },

  /* ═══════════ PLC ARCHITECTURE ═══════════ */
  {
    "q": "What is the function of the power supply block in a PLC?",
    "a": "Converts the incoming supply to the regulated low voltage DC the CPU and internal electronics need",
    "opts": [
      "Converts the incoming supply to the regulated low voltage DC the CPU and internal electronics need",
      "Executes the stored program instruction by instruction",
      "Interfaces field sensors to the CPU",
      "Lets the PLC talk to an HMI or SCADA system"
    ],
    "exp": "The power supply regulates the incoming 24V DC or mains AC down to what the CPU and internal electronics need, often with its own backup, since losing the PLC's own supply loses control of everything downstream.",
    "cat": "ARCH",
    "id": "F21_031"
  },
  {
    "q": "What is the role of the CPU (processor) in a PLC?",
    "a": "It executes the stored program, reads the input image, evaluates the logic, and writes the output image",
    "opts": [
      "It executes the stored program, reads the input image, evaluates the logic, and writes the output image",
      "It converts incoming mains AC to regulated DC",
      "It provides electrical isolation between field wiring and internal electronics",
      "It stores the user program in a form retained with power off"
    ],
    "exp": "The CPU is the brain of the PLC: it runs the stored logic against the input image and builds the output image. Its speed and program capacity are usually the headline specification of a PLC.",
    "cat": "ARCH",
    "id": "F21_032"
  },
  {
    "q": "What does the memory block of a PLC hold?",
    "a": "The user program, normally retained with power off, plus working data such as timer/counter values and the I/O image tables while running",
    "opts": [
      "The user program, normally retained with power off, plus working data such as timer/counter values and the I/O image tables while running",
      "Only the physical wiring diagram of the panel",
      "The regulated DC voltage for the field devices",
      "The communication protocol settings only"
    ],
    "exp": "Memory holds the program (retained even without power) and working data including timers, counters and the input/output image tables used during execution.",
    "cat": "ARCH",
    "id": "F21_033"
  },
  {
    "q": "What does the input module of a PLC do?",
    "a": "Interfaces field devices to the CPU, converting real-world electrical signals into a form the CPU can read, and provides electrical isolation",
    "opts": [
      "Interfaces field devices to the CPU, converting real-world electrical signals into a form the CPU can read, and provides electrical isolation",
      "Executes the ladder logic program",
      "Drives contactor coils and solenoid valves directly from the CPU",
      "Stores the program in non-volatile memory"
    ],
    "exp": "The input module converts sensor and switch signals into a form the CPU can read, and isolates the noisy field wiring electrically from the CPU's internal electronics.",
    "cat": "ARCH",
    "id": "F21_034"
  },
  {
    "q": "What does the output module of a PLC do?",
    "a": "Interfaces the CPU's decisions back out to the real world, such as contactor coils and solenoid valves, and isolates the CPU from the field side",
    "opts": [
      "Interfaces the CPU's decisions back out to the real world, such as contactor coils and solenoid valves, and isolates the CPU from the field side",
      "Reads sensor signals into the input image table",
      "Regulates the incoming AC supply to the CPU",
      "Stores communication protocol data such as Modbus addresses"
    ],
    "exp": "The output module converts the CPU's internal decisions into real electrical signals that drive contactors, solenoid valves, lamps or positioners, while also isolating the CPU electronics from the field side.",
    "cat": "ARCH",
    "id": "F21_035"
  },
  {
    "q": "What does the communication module/port of a PLC allow?",
    "a": "It lets the PLC talk to other equipment: an HMI, SCADA, other PLCs, or a programming laptop",
    "opts": [
      "It lets the PLC talk to other equipment: an HMI, SCADA, other PLCs, or a programming laptop",
      "It regulates the power supply to the input module",
      "It physically drives the output relays",
      "It stores the retained program in the event of a power loss"
    ],
    "exp": "Common protocols such as Modbus, Profibus/Profinet and Ethernet/IP run over the communication module, letting the PLC exchange data with HMIs, SCADA, other controllers, and programming tools.",
    "cat": "ARCH",
    "id": "F21_036"
  },

  /* ═══════════ SCAN CYCLE ═══════════ */
  {
    "q": "What is the PLC scan cycle?",
    "a": "The repeating loop the CPU runs continuously: read inputs, execute the program, update outputs, then housekeeping, over and over",
    "opts": [
      "The repeating loop the CPU runs continuously: read inputs, execute the program, update outputs, then housekeeping, over and over",
      "A one-time startup sequence that runs only when the PLC is first powered on",
      "The process of downloading a new program to the PLC",
      "The interval between classification society surveys"
    ],
    "exp": "A PLC does not run its program once; it repeats a four-step loop (read inputs, execute program, update outputs, housekeeping) continuously for as long as it is powered and in run mode.",
    "cat": "SCAN",
    "id": "F21_037"
  },
  {
    "q": "During the 'execute program' step of the scan cycle, what does the CPU use as its source of input data?",
    "a": "The frozen snapshot in the input image table captured at the start of the scan, not the live physical terminals",
    "opts": [
      "The frozen snapshot in the input image table captured at the start of the scan, not the live physical terminals",
      "The live physical input terminals, read continuously as the program runs",
      "The output image table from the previous scan",
      "A value entered manually by the operator on the HMI"
    ],
    "exp": "The program never reads the physical terminals directly while it runs. It works entirely from the frozen input image snapshot taken in step 1, and writes results to the output image table, not directly to physical outputs.",
    "cat": "SCAN",
    "id": "F21_038"
  },
  {
    "q": "Why are physical outputs only updated once, at the end of the scan, rather than continuously as the program executes?",
    "a": "So everything the outside world sees is updated together in one batch, keeping the machine's behaviour predictable and consistent",
    "opts": [
      "So everything the outside world sees is updated together in one batch, keeping the machine's behaviour predictable and consistent",
      "Because output modules can only be written to once per hour",
      "Because updating outputs mid-scan would erase the program from memory",
      "Because analog outputs are physically incapable of changing quickly"
    ],
    "exp": "The CPU builds a complete output image table as it executes the program, then copies it out to the physical terminals in one batch at the end of the scan, which avoids outputs flickering or changing state mid-logic.",
    "cat": "SCAN",
    "id": "F21_039"
  },
  {
    "q": "What can happen to a very brief input pulse that occurs and disappears entirely between two input reads?",
    "a": "It may be missed entirely by the program, because inputs are only read at the start of each scan",
    "opts": [
      "It may be missed entirely by the program, because inputs are only read at the start of each scan",
      "It is automatically stretched by the CPU to last a full scan",
      "It always triggers an immediate alarm regardless of scan time",
      "It is stored permanently in the output image table"
    ],
    "exp": "Because inputs are only sampled at the start of the scan, a pulse shorter than the scan time can occur and vanish entirely between two reads and never be captured, which is why fast events often need dedicated high speed counter hardware.",
    "cat": "SCAN",
    "id": "F21_040"
  },
  {
    "q": "Roughly what is a typical scan time range for PLC programs, from small to large?",
    "a": "Under a millisecond up to tens of milliseconds, depending on program size, I/O count and communication load",
    "opts": [
      "Under a millisecond up to tens of milliseconds, depending on program size, I/O count and communication load",
      "Always exactly 50 milliseconds regardless of program size",
      "Several seconds to several minutes",
      "Scan time is not measurable on modern PLCs"
    ],
    "exp": "There is no single fixed industry number, but as a rough working figure, small simple programs scan in under a millisecond to a few milliseconds, while larger programs with heavy I/O and communication can run to tens of milliseconds.",
    "cat": "SCAN",
    "id": "F21_041"
  },

  /* ═══════════ DIGITAL INPUT ═══════════ */
  {
    "q": "What is a digital (discrete) input of a PLC?",
    "a": "An input that reads a signal which can only ever be in one of two states, on or off, with no in-between value",
    "opts": [
      "An input that reads a signal which can only ever be in one of two states, on or off, with no in-between value",
      "An input that reads a continuously variable value across a defined range",
      "An input reserved exclusively for temperature transmitters",
      "An input that can only be wired using 4-20mA current loops"
    ],
    "exp": "A digital input reads a strictly two-state signal: 1 or 0, on or off, present or absent. There is no in-between value, unlike an analog input which reads a continuous range.",
    "cat": "DIN",
    "id": "F21_042"
  },
  {
    "q": "What is the typical signal type for a digital input on a marine control panel?",
    "a": "24V DC, present or absent",
    "opts": ["24V DC, present or absent", "4-20mA current loop", "0-10V continuously variable", "440V three-phase AC"],
    "exp": "On marine and industrial panels, digital inputs are almost always 24V DC: the field device either applies 24V to the terminal (read as logic 1) or does not (read as logic 0).",
    "cat": "DIN",
    "id": "F21_043"
  },
  {
    "q": "Which of the following is the best example of a digital input?",
    "a": "A tank high level switch that simply flips at a fixed level",
    "opts": [
      "A tank high level switch that simply flips at a fixed level",
      "A Pt100 resistance temperature detector",
      "A lube oil pressure transmitter reporting a continuously varying value",
      "A valve positioner command signal"
    ],
    "exp": "A level switch, pushbutton, limit switch, or fixed-setpoint pressure switch are all classic digital input examples, strictly on or off. A Pt100 or pressure transmitter reporting a continuous value would be an analog input instead.",
    "cat": "DIN",
    "id": "F21_044"
  },

  /* ═══════════ ANALOG INPUT ═══════════ */
  {
    "q": "What is an analog input of a PLC?",
    "a": "An input that reads a continuously variable signal across a range, converted to a numeric value by an analog-to-digital converter",
    "opts": [
      "An input that reads a continuously variable signal across a range, converted to a numeric value by an analog-to-digital converter",
      "An input that can only ever be on or off",
      "An input reserved exclusively for pushbuttons and limit switches",
      "An input that measures only digital communication traffic"
    ],
    "exp": "Unlike a digital input's strict two states, an analog input reads a continuous value across a defined range, converted by an A/D converter on the input module into a numeric value the CPU can use.",
    "cat": "AIN",
    "id": "F21_045"
  },
  {
    "q": "What are the two industry-standard signal conventions used for analog signals?",
    "a": "4-20mA current loop and 0-10V voltage signal",
    "opts": [
      "4-20mA current loop and 0-10V voltage signal",
      "24V DC and 110V AC",
      "Modbus and Profibus",
      "PNP and NPN"
    ],
    "exp": "4-20mA current loops and 0-10V voltage signals are the two standard analog conventions. 4-20mA dominates for field transmitters on ships because of its immunity to cable voltage drop over long runs.",
    "cat": "AIN",
    "id": "F21_046"
  },
  {
    "q": "Why does 4-20mA current loop signalling dominate over 0-10V for field transmitters on ships with long cable runs?",
    "a": "A current signal is unaffected by voltage drop or resistance along the cable, so the reading is accurate regardless of run length",
    "opts": [
      "A current signal is unaffected by voltage drop or resistance along the cable, so the reading is accurate regardless of run length",
      "Current signals travel faster through the cable than voltage signals",
      "4-20mA cables are cheaper to install than 0-10V cables",
      "0-10V signals cannot be used with a PLC at all"
    ],
    "exp": "A voltage signal like 0-10V is directly reduced by cable resistance over distance, while a current loop delivers the same current at the receiving end regardless of cable resistance, making it far more reliable over long engine room cable runs.",
    "cat": "AIN",
    "id": "F21_047"
  },
  {
    "q": "Why does a healthy 4-20mA loop start at 4mA rather than 0mA at the bottom of its range?",
    "a": "It creates a 'live zero': a reading of 0mA then unambiguously indicates a broken wire or dead loop rather than a genuine zero process value",
    "opts": [
      "It creates a 'live zero': a reading of 0mA then unambiguously indicates a broken wire or dead loop rather than a genuine zero process value",
      "4mA is simply an arbitrary historical choice with no functional purpose",
      "Transmitters cannot physically produce currents below 4mA",
      "0mA would exceed the maximum rating of the input module"
    ],
    "exp": "With a 0-20mA scheme, 0mA could mean either a genuine zero reading or a dead loop, with no way to tell them apart. The 4mA live zero also conveniently powers a loop-powered two-wire transmitter's own electronics.",
    "cat": "AIN",
    "id": "F21_048"
  },
  {
    "q": "A pressure transmitter with a range of 0-10 bar reads 12mA. What is the actual pressure?",
    "a": "5 bar",
    "opts": ["5 bar", "6 bar", "7.5 bar", "12 bar"],
    "exp": "Process value = (Signal - 4mA) / 16mA x Span = (12-4)/16 x 10 = 8/16 x 10 = 5 bar.",
    "cat": "AIN",
    "id": "F21_049"
  },
  {
    "q": "Which of the following is the best example of an analog input?",
    "a": "A Pt100 resistance temperature detector reporting a continuously varying temperature",
    "opts": [
      "A Pt100 resistance temperature detector reporting a continuously varying temperature",
      "A pushbutton start/stop station",
      "A tank high level switch",
      "An emergency stop contact"
    ],
    "exp": "A Pt100 or a pressure transmitter report a continuously varying value across a range, the defining characteristic of an analog input. Pushbuttons, level switches and E-stops are all strictly on/off digital inputs.",
    "cat": "AIN",
    "id": "F21_050"
  },
  {
    "q": "Why is the digital input question and the analog input question treated as two separate questions in a real oral exam?",
    "a": "They test genuinely different concepts, on/off versus continuous value, and each needs its own concrete example ready independently",
    "opts": [
      "They test genuinely different concepts, on/off versus continuous value, and each needs its own concrete example ready independently",
      "Because analog inputs are no longer used on modern ships",
      "Because digital inputs are only found on cargo ships, not tankers",
      "Because the two questions are actually asking about SCADA, not PLCs"
    ],
    "exp": "A level switch or pushbutton (strictly on/off) and a Pt100 or pressure transmitter (continuous value) are different enough that surveyors ask them back to back as two distinct questions. Answering one does not cover the other.",
    "cat": "AIN",
    "id": "F21_051"
  },

  /* ═══════════ DIGITAL & ANALOG OUTPUTS ═══════════ */
  {
    "q": "What does a digital output of a PLC do?",
    "a": "Switches a field device fully on or fully off, nothing in between",
    "opts": [
      "Switches a field device fully on or fully off, nothing in between",
      "Drives a continuously variable signal to a field device",
      "Reads a sensor signal into the CPU",
      "Only communicates with SCADA, not field devices"
    ],
    "exp": "A digital output energises a contactor coil, opens a solenoid valve, or drives an indicator lamp, fully on or fully off, typically switched through a relay, transistor, or triac depending on the load.",
    "cat": "OUT",
    "id": "F21_052"
  },
  {
    "q": "What does an analog output of a PLC do?",
    "a": "Drives a continuously variable signal, usually 4-20mA or 0-10V, to a field device needing a graded position or speed",
    "opts": [
      "Drives a continuously variable signal, usually 4-20mA or 0-10V, to a field device needing a graded position or speed",
      "Switches a contactor coil fully on or off",
      "Reads a Pt100 temperature into the CPU",
      "Only outputs a fixed 24V DC signal"
    ],
    "exp": "Analog outputs command graded values, such as a control valve positioner commanding a specific percentage open, or a speed reference sent to a VFD, rather than a simple on/off command.",
    "cat": "OUT",
    "id": "F21_053"
  },
  {
    "q": "Give an example of a digital output and an example of an analog output on a ship.",
    "a": "Digital: energising a contactor coil to start a motor. Analog: a speed reference signal sent to a VFD",
    "opts": [
      "Digital: energising a contactor coil to start a motor. Analog: a speed reference signal sent to a VFD",
      "Digital: a Pt100 temperature reading. Analog: a level switch",
      "Digital: a pressure transmitter. Analog: an emergency stop contact",
      "Digital and analog outputs are the same thing with different names"
    ],
    "exp": "Contactor coils, solenoid valves, lamps and horns are digital (on/off) outputs. Control valve positioners, VFD speed references and damper actuator positions are analog (graded value) outputs.",
    "cat": "OUT",
    "id": "F21_054"
  },
  {
    "q": "What typically switches the load in a PLC digital output module?",
    "a": "A relay, transistor, or triac, depending on whether the load is DC or AC and how much current it draws",
    "opts": [
      "A relay, transistor, or triac, depending on whether the load is DC or AC and how much current it draws",
      "An analog-to-digital converter",
      "A dead man alarm timer",
      "A ladder logic seal-in contact only"
    ],
    "exp": "Digital output modules switch loads through a relay, transistor, or triac, selected based on whether the connected load is DC or AC and its current draw.",
    "cat": "OUT",
    "id": "F21_055"
  },

  /* ═══════════ SINKING AND SOURCING ═══════════ */
  {
    "q": "What does a 'sourcing' DC input or output module do?",
    "a": "Supplies the positive voltage out to the load or sensor, so current flows from the device into the external circuit",
    "opts": [
      "Supplies the positive voltage out to the load or sensor, so current flows from the device into the external circuit",
      "Provides the path to the negative or 0V side, so current flows into the device",
      "Only works with 4-20mA analog signals",
      "Only applies to communication modules, not I/O"
    ],
    "exp": "A sourcing device or module pushes current out to the external circuit, supplying the positive side. A sinking device pulls current in, providing the return path to 0V.",
    "cat": "SINKSRC",
    "id": "F21_056"
  },
  {
    "q": "Why does the sinking versus sourcing distinction matter in practice?",
    "a": "A field device built for one convention will not work correctly wired to a module expecting the other, and mismatches are a common wiring fault",
    "opts": [
      "A field device built for one convention will not work correctly wired to a module expecting the other, and mismatches are a common wiring fault",
      "It only matters for analog signals, never digital",
      "It determines whether the PLC uses relay logic or ladder logic",
      "It has no practical effect, it is purely a theoretical distinction"
    ],
    "exp": "Getting sinking and sourcing backwards is a genuine, common wiring check, not a theoretical detail. Sensors are sold in PNP (sourcing) or NPN (sinking) versions specifically to be matched to the panel's convention, and mismatching them makes a device appear to be 'not working.'",
    "cat": "SINKSRC",
    "id": "F21_057"
  },
  {
    "q": "PNP and NPN proximity sensor designations correspond to which wiring conventions respectively?",
    "a": "PNP is sourcing, NPN is sinking",
    "opts": ["PNP is sourcing, NPN is sinking", "PNP is sinking, NPN is sourcing", "Both PNP and NPN are sourcing", "Both PNP and NPN are sinking"],
    "exp": "Field sensors are sold in PNP (sourcing) or NPN (sinking) versions specifically so they can be matched to whichever convention the rest of the panel is wired to.",
    "cat": "SINKSRC",
    "id": "F21_058"
  },

  /* ═══════════ LADDER LOGIC ═══════════ */
  {
    "q": "Why is ladder logic drawn to look like an electrical relay schematic?",
    "a": "Because it was designed to be readable by the same engineers who already understood relay wiring diagrams",
    "opts": [
      "Because it was designed to be readable by the same engineers who already understood relay wiring diagrams",
      "Because it is the only format a PLC's memory can physically store",
      "Because classification societies require it by regulation",
      "Because it uses less memory than any other programming language"
    ],
    "exp": "Ladder logic uses two vertical rails and horizontal rungs deliberately resembling a relay schematic, so that engineers already fluent in relay wiring could transition to PLC programming intuitively.",
    "cat": "LADDER",
    "id": "F21_059"
  },
  {
    "q": "In ladder logic, a normally open contact ( | | ) means:",
    "a": "The rung continues only if the condition it represents is true",
    "opts": [
      "The rung continues only if the condition it represents is true",
      "The rung continues only if the condition it represents is false",
      "It represents an output being commanded, not a condition being tested",
      "It always allows the rung to continue regardless of the condition"
    ],
    "exp": "A normally open contact allows the rung to continue only when the tested condition (an input or internal bit) is true, exactly like a physical relay contact closing when its coil is energised.",
    "cat": "LADDER",
    "id": "F21_060"
  },
  {
    "q": "In the start/stop ladder rung, why is the Stop pushbutton represented by a normally closed contact rather than a normally open one?",
    "a": "So the rung stays complete (true) while Stop is not pressed, and breaks the rung the instant Stop is pressed",
    "opts": [
      "So the rung stays complete (true) while Stop is not pressed, and breaks the rung the instant Stop is pressed",
      "Because all pushbuttons in ladder logic must be normally closed",
      "Because a normally open Stop contact would prevent the Motor coil from ever energising",
      "Because the CPU cannot read normally open contacts"
    ],
    "exp": "The Stop contact is normally closed (true when not pressed), keeping the rung intact during normal running. Pressing Stop opens it, breaking the rung regardless of what the Start or seal-in contacts are doing, and de-energising the Motor coil.",
    "cat": "LADDER",
    "id": "F21_061"
  },
  {
    "q": "What is the purpose of the seal-in (latch) contact in a start/stop ladder rung?",
    "a": "It provides an alternative path to keep the rung complete after the Start pushbutton is released",
    "opts": [
      "It provides an alternative path to keep the rung complete after the Start pushbutton is released",
      "It disconnects the Motor coil the instant Start is released",
      "It replaces the need for a Stop contact entirely",
      "It converts the digital output into an analog output"
    ],
    "exp": "The seal-in contact, a normally open contact of the Motor coil itself wired in parallel with Start, closes as soon as the Motor coil first energises, providing its own path to keep the rung complete even after Start is released.",
    "cat": "LADDER",
    "id": "F21_062"
  },
  {
    "q": "How does a ladder logic seal-in contact relate to the hold-in (latching) auxiliary contact on a DOL starter from F11?",
    "a": "They do the identical job by identical logic, one implemented in software and the other in a physical wire",
    "opts": [
      "They do the identical job by identical logic, one implemented in software and the other in a physical wire",
      "They are unrelated concepts from completely different fields",
      "The seal-in contact replaces the need for a contactor entirely",
      "The DOL hold-in contact only works with three-phase motors, unlike the seal-in"
    ],
    "exp": "The physical hold-in auxiliary contact on a DOL starter's main contactor closes when the contactor pulls in and keeps its own coil energised after the start button is released. The ladder logic seal-in contact is the software equivalent of that same behaviour.",
    "cat": "LADDER",
    "id": "F21_063"
  },
  {
    "q": "In ladder logic, what does a coil represent, and when does it energise?",
    "a": "An output being commanded, and it energises whenever there is a complete path of true contacts from the left rail to it",
    "opts": [
      "An output being commanded, and it energises whenever there is a complete path of true contacts from the left rail to it",
      "A condition being tested, energising whenever the input is on",
      "The PLC's power supply block",
      "A communication port used to talk to SCADA"
    ],
    "exp": "A coil is drawn as a circle at the right end of a rung and represents an output being commanded. It energises exactly when a complete path of true contacts exists from the left rail to it, just as a physical relay coil energises with a complete circuit.",
    "cat": "LADDER",
    "id": "F21_064"
  },

  /* ═══════════ SCADA ═══════════ */
  {
    "q": "What does SCADA stand for?",
    "a": "Supervisory Control And Data Acquisition",
    "opts": ["Supervisory Control And Data Acquisition", "System Control And Digital Automation", "Sensor Control And Data Analysis", "Standard Control And Diagnostic Architecture"],
    "exp": "SCADA is Supervisory Control And Data Acquisition: a software system that sits above one or more PLCs, gathering their data, presenting it to a human, logging it, and issuing supervisory commands back down.",
    "cat": "SCADA",
    "id": "F21_065"
  },
  {
    "q": "What is the key distinction between what a PLC does and what SCADA does?",
    "a": "The PLC executes real-time control logic itself, while SCADA supervises, visualises and records what the PLCs are doing without doing the real-time control itself",
    "opts": [
      "The PLC executes real-time control logic itself, while SCADA supervises, visualises and records what the PLCs are doing without doing the real-time control itself",
      "SCADA executes the real-time control while the PLC only displays data",
      "There is no functional difference, they are two names for the same system",
      "A PLC can only run on ships, while SCADA can only run ashore"
    ],
    "exp": "The PLC is the thing actually reading a sensor and switching a contactor scan after scan. SCADA does not do that real-time control itself; it supervises, visualises and records what the PLCs underneath it are doing.",
    "cat": "SCADA",
    "id": "F21_066"
  },
  {
    "q": "If the SCADA system on a ship is switched off but all PLCs continue running exactly as programmed, what happens to the process?",
    "a": "It keeps operating correctly, because the control logic lives in the PLCs, not in SCADA; only visibility and central control are lost",
    "opts": [
      "It keeps operating correctly, because the control logic lives in the PLCs, not in SCADA; only visibility and central control are lost",
      "The process stops immediately because SCADA performs the real-time control",
      "All PLCs automatically shut down for safety",
      "The dead man alarm activates automatically"
    ],
    "exp": "Since real-time control logic lives in the PLCs, they keep functioning correctly without SCADA. Losing SCADA loses visibility, alarm presentation and central supervision, not the underlying control of the plant.",
    "cat": "SCADA",
    "id": "F21_067"
  },
  {
    "q": "What is an HMI (Human-Machine Interface) in the context of SCADA?",
    "a": "The graphical screens an operator looks at and touches, mimic diagrams, live values, and command buttons; the visible part of a SCADA system",
    "opts": [
      "The graphical screens an operator looks at and touches, mimic diagrams, live values, and command buttons; the visible part of a SCADA system",
      "The hardware module that reads analog sensor signals into a PLC",
      "A separate maintenance strategy unrelated to SCADA",
      "The physical relay panel replaced by the PLC"
    ],
    "exp": "HMI is really the visible part of a SCADA system, the graphical screens with mimic diagrams, live values and command buttons that an operator actually interacts with.",
    "cat": "SCADA",
    "id": "F21_068"
  },
  {
    "q": "Which of these is NOT one of the core functions SCADA brings together under one system?",
    "a": "Physically switching contactor coils in real time",
    "opts": [
      "Physically switching contactor coils in real time",
      "Data acquisition, continuously polling connected PLCs",
      "Alarm handling, presenting and requiring acknowledgement of alarms",
      "Trending, logging values over time as graphs"
    ],
    "exp": "Physically switching a contactor coil in real time is the PLC's job, executed scan after scan. SCADA's functions are HMI, data acquisition, alarm handling and trending, layered above the PLCs, not the real-time switching itself.",
    "cat": "SCADA",
    "id": "F21_069"
  },
  {
    "q": "In the automation hierarchy, what is the correct order from the field level upward?",
    "a": "Field devices, then PLCs running real-time control, then SCADA/HMI for supervision, then potentially fleet-level or shore-based monitoring",
    "opts": [
      "Field devices, then PLCs running real-time control, then SCADA/HMI for supervision, then potentially fleet-level or shore-based monitoring",
      "SCADA, then PLCs, then field devices, then fleet-level monitoring",
      "Field devices, then SCADA, then PLCs, then fleet-level monitoring",
      "Fleet-level monitoring, then SCADA, then field devices, then PLCs"
    ],
    "exp": "Field devices sit at the bottom feeding PLCs, which run real-time control logic and feed a SCADA/HMI layer above for supervision, visualisation, alarms and logging, which may itself feed a fleet-level or shore-based system on modern vessels.",
    "cat": "SCADA",
    "id": "F21_070"
  },

  /* ═══════════ ALARMS & DEAD MAN ALARM ═══════════ */
  {
    "q": "What is the alarm philosophy on a UMS vessel's machinery space?",
    "a": "Every important parameter is continuously monitored, any drift outside its safe band raises an automatic alarm, alarms are graded by severity, and unacknowledged alarms escalate",
    "opts": [
      "Every important parameter is continuously monitored, any drift outside its safe band raises an automatic alarm, alarms are graded by severity, and unacknowledged alarms escalate",
      "Alarms are only checked manually once per watch by the duty engineer",
      "Only fire and flood are monitored automatically, all other parameters are checked by eye",
      "Alarms are graded by cost of repair rather than severity of consequence"
    ],
    "exp": "The alarm and monitoring system is the safety net that replaces the engineer's own eyes and ears while the space is unattended: continuous monitoring, automatic alarming, graded severity, and escalation if unacknowledged.",
    "cat": "ALARM",
    "id": "F21_071"
  },
  {
    "q": "If an alarm on a UMS vessel goes unacknowledged, where does it typically escalate to?",
    "a": "From the engine control room to the engineer's cabin, and on to the bridge and other officers' cabins if nobody responds",
    "opts": [
      "From the engine control room to the engineer's cabin, and on to the bridge and other officers' cabins if nobody responds",
      "It is automatically silenced after a fixed time with no further escalation",
      "Directly to the classification society by satellite link",
      "It only escalates to the shore-based fleet office"
    ],
    "exp": "Unacknowledged or unresolved alarms escalate progressively, typically from the engine control room to the engineer's cabin, and on to the bridge and other officers' cabins, ensuring someone eventually responds.",
    "cat": "ALARM",
    "id": "F21_072"
  },
  {
    "q": "What question does the dead man alarm answer, as distinct from the process alarm system?",
    "a": "Whether the duty engineer, alone in the space, is actually still capable of responding",
    "opts": [
      "Whether the duty engineer, alone in the space, is actually still capable of responding",
      "Whether the machinery itself is running within safe parameters",
      "Whether the SCADA system is currently online",
      "Whether the classification society survey is due"
    ],
    "exp": "Process alarms ask 'is the machinery healthy'. The dead man alarm asks a different question entirely: 'is the person alone in the space still conscious and mobile enough to respond.'",
    "cat": "ALARM",
    "id": "F21_073"
  },
  {
    "q": "How does the dead man alarm mechanism work?",
    "a": "A countdown timer must be periodically reset in person at a reset point in the space; if not reset in time, it raises a local warning and then escalates progressively",
    "opts": [
      "A countdown timer must be periodically reset in person at a reset point in the space; if not reset in time, it raises a local warning and then escalates progressively",
      "It is a fixed alarm that only sounds if the engine trips",
      "It is a wearable device that measures the engineer's heart rate directly",
      "It only activates during fire drills"
    ],
    "exp": "A duty engineer entering the space out of hours starts a countdown timer and must periodically reset it in person to confirm they are conscious and mobile. Missing the reset triggers a local warning, then escalation, ultimately to the bridge if still unacknowledged.",
    "cat": "ALARM",
    "id": "F21_074"
  },
  {
    "q": "What is the correct interview answer regarding the exact reset interval of the dead man alarm?",
    "a": "The exact interval is class/flag specific and should be checked against that particular ship's approved procedures, rather than quoting one universal figure",
    "opts": [
      "The exact interval is class/flag specific and should be checked against that particular ship's approved procedures, rather than quoting one universal figure",
      "It is always fixed by SOLAS at exactly 20 minutes on every vessel",
      "It is exactly 60 minutes on all UMS vessels worldwide",
      "There is no standard interval and it is left entirely to the individual engineer's discretion"
    ],
    "exp": "Commonly cited figures range roughly from 15 to 30 minutes depending on the vessel, its classification society, and flag state, but there is no single number fixed universally by SOLAS itself. The safe answer describes the principle and notes the interval is ship-specific.",
    "cat": "ALARM",
    "id": "F21_075"
  },

  /* ═══════════ MAINTENANCE STRATEGIES & CONDITION MONITORING ═══════════ */
  {
    "q": "What are the three broad maintenance strategies used on a ship?",
    "a": "Breakdown/reactive, planned/preventive, and predictive/condition-based",
    "opts": [
      "Breakdown/reactive, planned/preventive, and predictive/condition-based",
      "Daily, weekly, and monthly maintenance",
      "Class-mandated, owner-mandated, and flag-mandated maintenance",
      "Mechanical, electrical, and electronic maintenance"
    ],
    "exp": "The three strategies, in order of sophistication, are breakdown (run to failure), planned/preventive (fixed schedule regardless of condition), and predictive/condition-based (intervene only when data shows a developing fault).",
    "cat": "MAINT",
    "id": "F21_076"
  },
  {
    "q": "What is the main trade-off of planned/preventive maintenance, which services equipment on a fixed schedule regardless of actual condition?",
    "a": "It is predictable and simple to plan, but wastes life on parts still in good condition and does not guarantee a part will not fail early between services",
    "opts": [
      "It is predictable and simple to plan, but wastes life on parts still in good condition and does not guarantee a part will not fail early between services",
      "It requires no monitoring equipment or expertise at all",
      "It always catches a developing fault before it causes a breakdown",
      "It guarantees zero unplanned failures"
    ],
    "exp": "Fixed-schedule maintenance is simple to plan but does not track actual condition: it can replace parts that were still fine, and cannot guarantee against an early failure occurring between scheduled services.",
    "cat": "MAINT",
    "id": "F21_077"
  },
  {
    "q": "What is vibration analysis used to detect, and why is trend data more useful than a single reading?",
    "a": "Bearing wear, shaft misalignment or unbalance change the vibration signature at specific frequencies; the trend over time, not one reading, reveals a developing fault",
    "opts": [
      "Bearing wear, shaft misalignment or unbalance change the vibration signature at specific frequencies; the trend over time, not one reading, reveals a developing fault",
      "It only detects electrical faults, never mechanical ones",
      "A single reading is always sufficient because vibration signatures never change gradually",
      "It measures oil contamination rather than mechanical condition"
    ],
    "exp": "Every rotating machine has a normal vibration signature. Developing faults change it at specific frequencies tied to shaft speed and bearing geometry, well before the fault is severe enough to notice by hand. The trend over time is what actually reveals the developing fault, not any one snapshot.",
    "cat": "MAINT",
    "id": "F21_078"
  },
  {
    "q": "What does motor current signature analysis (MCSA) allow that other condition monitoring methods may not, in terms of access?",
    "a": "Detecting some mechanical and electrical faults from the motor's current waveform without opening the motor up or fitting a separate vibration sensor",
    "opts": [
      "Detecting some mechanical and electrical faults from the motor's current waveform without opening the motor up or fitting a separate vibration sensor",
      "It requires the motor to be completely disassembled before every reading",
      "It only works on DC motors, never AC motors",
      "It replaces the need for oil analysis on all rotating machinery"
    ],
    "exp": "Faults such as a cracked rotor bar, bearing wear, or misalignment imprint themselves as small patterns in the motor's current waveform, making MCSA attractive where physical access for a separate vibration sensor is difficult.",
    "cat": "MAINT",
    "id": "F21_079"
  },
  {
    "q": "What does rising wear metal content in an oil analysis result indicate?",
    "a": "A direct physical signature of a component wearing down internally, such as bearings, gears or cylinder liners",
    "opts": [
      "A direct physical signature of a component wearing down internally, such as bearings, gears or cylinder liners",
      "That the oil needs to be run at a higher temperature",
      "That the vibration sensors need recalibrating",
      "That the dead man alarm timer requires resetting"
    ],
    "exp": "Oil analysis reveals metal particles worn off internal components, additive package breakdown, and contamination. Rising wear metal content is a direct, physical signature of internal wear, one of the oldest and most trusted condition monitoring tools precisely because it is simple and hard to argue with.",
    "cat": "MAINT",
    "id": "F21_080"
  },
  {
    "q": "What is the main trade-off of predictive/condition-based maintenance compared to the other two strategies?",
    "a": "It gets the most useful life from components and catches developing faults early, but needs monitoring equipment and expertise to interpret the data correctly",
    "opts": [
      "It gets the most useful life from components and catches developing faults early, but needs monitoring equipment and expertise to interpret the data correctly",
      "It always costs less than breakdown maintenance with no downside",
      "It requires no sensors at all, only visual inspection",
      "It guarantees equipment will never need replacing"
    ],
    "exp": "Predictive maintenance gets the most life out of components and catches faults early, but it depends on having the sensors and monitoring equipment in place, and the expertise to correctly interpret the resulting data.",
    "cat": "MAINT",
    "id": "F21_081"
  },

  /* ═══════════ AI IN PREDICTIVE MAINTENANCE ═══════════ */
  {
    "q": "What is AI in predictive maintenance fundamentally?",
    "a": "Pattern recognition applied to trend data at a scale and consistency a human cannot match by eye",
    "opts": [
      "Pattern recognition applied to trend data at a scale and consistency a human cannot match by eye",
      "An independent form of diagnosis that replaces sensors entirely",
      "A system that physically repairs machinery without human intervention",
      "A replacement for vibration and oil analysis data"
    ],
    "exp": "AI in this context is a grounded, non-mystical concept: it is pattern recognition applied to the same trend data engineers already collect, at a scale and consistency beyond manual review.",
    "cat": "AI",
    "id": "F21_082"
  },
  {
    "q": "How does an AI-based condition monitoring system typically learn what counts as an anomaly for a specific machine?",
    "a": "It learns what 'normal' looks like for that machine from its own historical data, then continuously compares new readings against that learned normal",
    "opts": [
      "It learns what 'normal' looks like for that machine from its own historical data, then continuously compares new readings against that learned normal",
      "It uses a single fixed threshold that is identical for every machine on every ship",
      "It requires no historical data and works purely from the machine's design specification",
      "It replaces the need for vibration, temperature, MCSA or oil analysis sensors"
    ],
    "exp": "The system learns the specific machine's own historical normal, continuously compares new readings against it, and raises a recommendation when the deviation is statistically significant and matches a pattern previously associated with a developing fault.",
    "cat": "AI",
    "id": "F21_083"
  },
  {
    "q": "What is a correct and important clarification about what AI does NOT do in predictive maintenance?",
    "a": "It does not replace the sensor or the underlying physics; vibration is still vibration and oil is still oil",
    "opts": [
      "It does not replace the sensor or the underlying physics; vibration is still vibration and oil is still oil",
      "It eliminates the need for any human engineer to ever review the data",
      "It is a form of independent reasoning that understands the equipment the way an engineer does",
      "It can only be used on brand new machinery with no operating history"
    ],
    "exp": "AI is a statistical pattern-matching tool layered on the same underlying physical data, not the machine 'understanding' the equipment or reasoning about it the way an engineer would. The physics and the sensors remain exactly the same.",
    "cat": "AI",
    "id": "F21_084"
  },
  {
    "q": "What advantage does AI-based pattern recognition offer over manual trend review by an engineer?",
    "a": "It can catch subtler, more gradual changes across far more data streams simultaneously, flagging a developing anomaly earlier and with fewer false alarms",
    "opts": [
      "It can catch subtler, more gradual changes across far more data streams simultaneously, flagging a developing anomaly earlier and with fewer false alarms",
      "It eliminates the need to collect any sensor data at all",
      "It guarantees a machine will never fail once installed",
      "It only works on shore-based systems, never on board"
    ],
    "exp": "A human engineer can learn to recognise classic fault signatures, but AI can watch far more streams simultaneously, catch subtler changes a person might dismiss as noise, and flag deviations earlier and more consistently than manual review, so maintenance can be planned before a breakdown rather than reacted to after.",
    "cat": "AI",
    "id": "F21_085"
  }

]);

window.loadQuizzes("T07_Control_PLC", [
  {
    "q": "Which is an example of an open-loop control system on a ship?",
    "a": "A timer-controlled fixed-speed pump",
    "opts": [
      "Automatic Voltage Regulator (AVR)",
      "Autopilot heading control",
      "A timer-controlled fixed-speed pump",
      "Boiler steam pressure controller"
    ],
    "exp": "Open-loop: output has no effect on control action. A fixed timer runs regardless of actual process state. AVR, autopilot, and boiler pressure controllers all measure output and feed it back - closed loop.",
    "cat": "LOOP",
    "id": "T07_001"
  },
  {
    "q": "What defines a closed-loop control system?",
    "a": "The output is continuously measured and fed back to minimize error (SP − PV)",
    "opts": [
      "The output has no effect on the control action",
      "The output is continuously measured and fed back to minimize error (SP − PV)",
      "It operates on a fixed timed sequence without sensors",
      "It uses positive feedback to amplify deviation"
    ],
    "exp": "Closed-loop: PV measured → compared to SP → error calculated → controller adjusts output → repeats. Ship examples: AVR (voltage), autopilot, boiler pressure, HFO temperature, HVAC.",
    "cat": "LOOP",
    "id": "T07_002"
  },
  {
    "q": "What are SP, PV, and MV in a control loop?",
    "a": "SP = Setpoint (desired value), PV = Process Variable (actual measured), MV = Manipulated Variable (controller output)",
    "opts": [
      "SP = Signal Pressure, PV = Proportional Value, MV = Measured Variable",
      "SP = Setpoint (desired value), PV = Process Variable (actual measured), MV = Manipulated Variable (controller output)",
      "SP = System Parameter, PV = Plant Value, MV = Maximum Voltage",
      "SP = Speed, PV = Pressure Variable, MV = Motor Voltage"
    ],
    "exp": "Error e = SP − PV. MV is what the controller adjusts (e.g., steam valve position) to bring PV to SP. These three terms are fundamental to every control loop question.",
    "cat": "LOOP",
    "id": "T07_003"
  },
  {
    "q": "In a P-only controller, what is steady-state offset?",
    "a": "The permanent residual error that remains when the process stabilises",
    "opts": [
      "The rate at which error changes over time",
      "The accumulated error causing overshoot",
      "The permanent residual error that remains when the process stabilises",
      "The initial deviation of PV from SP at startup"
    ],
    "exp": "P-only controllers need some error to maintain the control output that balances load. This remaining error after stabilisation is called offset. Integral action is required to drive this to zero.",
    "cat": "PID",
    "id": "T07_004"
  },
  {
    "q": "Which control action eliminates steady-state offset?",
    "a": "Integral (I) action",
    "opts": [
      "Proportional (P) action",
      "Integral (I) action",
      "Derivative (D) action",
      "Feedforward action"
    ],
    "exp": "Integral action accumulates error over time. Even a tiny persistent error keeps growing the integral term until the controller output drives PV exactly to SP - offset = zero. P alone leaves offset; PI eliminates it.",
    "cat": "PID",
    "id": "T07_005"
  },
  {
    "q": "Why is Derivative action NOT used in fuel oil temperature control?",
    "a": "Temperature changes slowly and D action amplifies noise causing erratic valve hunting",
    "opts": [
      "D action cannot eliminate steady-state offset",
      "Temperature changes slowly and D action amplifies noise causing erratic valve hunting",
      "D action causes integral windup when valve is saturated",
      "D action reacts too slowly to temperature changes"
    ],
    "exp": "Derivative responds to rate-of-change of error. In slow thermal processes this is near-zero, but D amplifies high-frequency noise from vibration/pump pulsations → valve hunts erratically. Fuel oil loops use PI only.",
    "cat": "PID",
    "id": "T07_006"
  },
  {
    "q": "What is integral windup in a PID controller?",
    "a": "The integral term accumulates while output is saturated, causing massive overshoot when the limit is removed",
    "opts": [
      "Proportional band too narrow causing rapid oscillations",
      "The integral term accumulates while output is saturated, causing massive overshoot when the limit is removed",
      "Derivative term freezes controller response due to noise",
      "Controller loses setpoint memory on power failure"
    ],
    "exp": "If the valve is 100% open but error persists, the integral keeps accumulating. When the process finally responds, the huge integral value drives PV far past setpoint. Anti-windup circuits clamp the integral when output saturates.",
    "cat": "PID",
    "id": "T07_007"
  },
  {
    "q": "What is the Proportional Band (PB) in a P controller?",
    "a": "The range of error over which controller output changes from 0% to 100%",
    "opts": [
      "The time required for the integral to cancel offset",
      "The output change per unit time when error is constant",
      "The range of error over which controller output changes from 0% to 100%",
      "The gain multiplied by the error to give output"
    ],
    "exp": "PB = (1/Kp) × 100%. Narrow PB (high Kp) = aggressive, may oscillate. Wide PB (low Kp) = sluggish, large offset. PB and gain are inversely related.",
    "cat": "PID",
    "id": "T07_008"
  },
  {
    "q": "A PID controller on a cargo pump discharge pressure loop is hunting continuously. What is the most likely cause?",
    "a": "Proportional gain too high (PB too narrow) or insufficient derivative damping",
    "opts": [
      "Integral action is eliminating offset too slowly",
      "The setpoint has been set higher than system capacity",
      "Proportional gain too high (PB too narrow) or insufficient derivative damping",
      "The I/P converter is stuck at one pressure"
    ],
    "exp": "Continuous hunting/oscillation = too much gain (too narrow PB) or insufficient derivative damping. Fix: increase PB (reduce gain) or increase derivative time. Check for mechanical issues (sticky valve) first.",
    "cat": "PID",
    "id": "T07_009"
  },
  {
    "q": "In cascade control, which controller directly operates the control valve?",
    "a": "The inner (secondary) controller",
    "opts": [
      "The outer (primary) controller",
      "The inner (secondary) controller",
      "Both controllers share valve control simultaneously",
      "A feedforward controller overrides both"
    ],
    "exp": "In cascade: primary (outer) measures main variable (e.g., temperature) and outputs a setpoint to secondary (inner). Secondary measures inner variable (e.g., steam flow) and directly positions the valve. Inner loop is faster.",
    "cat": "CASCADE",
    "id": "T07_010"
  },
  {
    "q": "In a fuel oil temperature cascade system, what are the inner and outer loops?",
    "a": "Outer: HFO temperature controller. Inner: steam flow controller",
    "opts": [
      "Outer: steam flow controller. Inner: HFO temperature controller",
      "Outer: steam pressure controller. Inner: fuel viscosity controller",
      "Outer: HFO temperature controller. Inner: steam flow controller",
      "Outer: fuel pump speed. Inner: HFO temperature controller"
    ],
    "exp": "HFO temperature is the main variable (outer/primary loop). Steam flow is the inner variable (secondary loop). If steam pressure drops, the inner flow loop corrects immediately before temperature even changes - fast disturbance rejection.",
    "cat": "CASCADE",
    "id": "T07_011"
  },
  {
    "q": "What specific problem does 3-element boiler feedwater control solve?",
    "a": "The swell and shrink effect where sudden steam demand makes drum level appear wrong",
    "opts": [
      "Excessive offset from P-only drum level control",
      "Integral windup during low load conditions",
      "The swell and shrink effect where sudden steam demand makes drum level appear wrong",
      "Thermal shock on boiler tubes during cold start"
    ],
    "exp": "Sudden steam demand drops pressure → bubbles form → drum level appears to rise (swell). Single-element controller wrongly closes feed valve. 3-element uses steam flow as feedforward to correctly open the valve instead.",
    "cat": "BOILER",
    "id": "T07_012"
  },
  {
    "q": "What are the three elements in a 3-element boiler feedwater control system?",
    "a": "Steam flow (feedforward), feedwater flow (feedforward confirmation), drum water level (feedback trim)",
    "opts": [
      "Steam pressure, fuel flow, and feedwater temperature",
      "Drum pressure, steam flow, and feedwater pump speed",
      "Steam flow (feedforward), feedwater flow (feedforward confirmation), drum water level (feedback trim)",
      "Drum level, steam temperature, and exhaust gas temperature"
    ],
    "exp": "Steam flow = primary feedforward demand. Feedwater flow = confirmation that correct flow is being supplied. Drum level = final feedback trim. Together they prevent swell/shrink and maintain stable drum level.",
    "cat": "BOILER",
    "id": "T07_013"
  },
  {
    "q": "What is the correct sequence of a PLC scan cycle?",
    "a": "Input scan → Program execution → Output scan → Housekeeping",
    "opts": [
      "Program execution → Input scan → Output scan",
      "Input scan → Output scan → Program execution",
      "Input scan → Program execution → Output scan → Housekeeping",
      "Housekeeping → Program execution → Input scan"
    ],
    "exp": "The PLC reads all physical inputs into memory (Input Scan), executes the user program using those values (Execution), writes results to physical outputs (Output Scan), then performs background comms and diagnostics (Housekeeping). Repeats every scan.",
    "cat": "PLC",
    "id": "T07_014"
  },
  {
    "q": "What is the function of the watchdog timer in a PLC?",
    "a": "Forces the PLC to a safe/fault state if the scan cycle hangs or exceeds maximum time",
    "opts": [
      "Tracks cumulative motor running hours for maintenance",
      "Forces the PLC to a safe/fault state if the scan cycle hangs or exceeds maximum time",
      "Delays output startup to prevent current surges",
      "Synchronizes PLC clock with the ship GPS time server"
    ],
    "exp": "The watchdog timer must be reset by the CPU every scan. If the program crashes, gets stuck in an infinite loop, or the scan takes too long, the timer expires and forces the PLC into a safe fail state - preventing uncontrolled outputs.",
    "cat": "PLC",
    "id": "T07_015"
  },
  {
    "q": "Which PLC memory type is volatile and lost on power failure without a backup battery?",
    "a": "RAM (Random Access Memory)",
    "opts": [
      "EEPROM",
      "Flash memory",
      "RAM (Random Access Memory)",
      "ROM (Read-Only Memory)"
    ],
    "exp": "RAM stores active process data, timer/counter values, and program variables during runtime. It is volatile - loses all data on power loss without battery backup. EEPROM and Flash are non-volatile and retain data without power.",
    "cat": "PLC",
    "id": "T07_016"
  },
  {
    "q": "In PLC Ladder Logic, how does a Normally Closed (NC) contact operate?",
    "a": "Passes power (logical continuity) when its memory bit is 0 (FALSE)",
    "opts": [
      "Passes power when its memory bit is 1 (TRUE)",
      "Passes power (logical continuity) when its memory bit is 0 (FALSE)",
      "Physically closes a hardware relay when rung goes TRUE",
      "Latches the output coil so it stays ON permanently"
    ],
    "exp": "NC contact inverts the bit logic. It passes power when the bit is FALSE (0) and blocks power when TRUE (1). Think of a physical NC contact on a relay: the contact is closed when the coil is de-energised (FALSE).",
    "cat": "LADDER",
    "id": "T07_017"
  },
  {
    "q": "A cooling fan must run 10 minutes AFTER the engine stops. Which PLC timer is needed?",
    "a": "TOF (Off-Delay Timer)",
    "opts": [
      "TON (On-Delay Timer)",
      "TOF (Off-Delay Timer)",
      "RTO (Retentive On-Delay Timer)",
      "TP (Pulse Timer)"
    ],
    "exp": "TOF (Off-Delay): output turns ON immediately when input is TRUE. When input goes FALSE (engine stops), the timer starts. After the preset (10 min), output turns OFF. Perfect for post-stop cool-down applications.",
    "cat": "TIMERS",
    "id": "T07_018"
  },
  {
    "q": "Which PLC timer accumulates time across multiple start/stop cycles and needs a manual RESET?",
    "a": "RTO (Retentive On-Delay Timer)",
    "opts": [
      "TON (On-Delay Timer)",
      "TOF (Off-Delay Timer)",
      "RTO (Retentive On-Delay Timer)",
      "TP (Pulse Timer)"
    ],
    "exp": "RTO is retentive - it remembers accumulated elapsed time even when input goes FALSE. Used for motor running hours (maintenance scheduling). Must be explicitly reset with a RESET instruction. TON resets automatically when input goes FALSE.",
    "cat": "TIMERS",
    "id": "T07_019"
  },
  {
    "q": "What does a SET (Latch) coil do in PLC ladder logic?",
    "a": "Activates and stays ON even if the input rung goes FALSE - requires a separate RESET coil to deactivate",
    "opts": [
      "Activates only while input rung is TRUE, turns off when FALSE",
      "Activates and stays ON even if the input rung goes FALSE - requires a separate RESET coil to deactivate",
      "Sets the timer preset value for the next scan cycle",
      "Forces all other coils in the same network to turn OFF"
    ],
    "exp": "SET coil = memory latch. Once set TRUE by a TRUE rung, it remains ON indefinitely regardless of further input changes - until a corresponding RESET coil targets the same memory address. Used for alarm latching and safety interlocks.",
    "cat": "LADDER",
    "id": "T07_020"
  },
  {
    "q": "How does Modbus communication operate?",
    "a": "Master/Slave architecture - slaves only respond when addressed by the Master",
    "opts": [
      "Any device initiates communication at any time (Peer-to-Peer)",
      "Master/Slave architecture - slaves only respond when addressed by the Master",
      "Uses 4-20mA signals superimposed with digital frequencies (HART)",
      "Every device broadcasts its status continuously to all others"
    ],
    "exp": "Modbus is strictly Master/Slave. The PLC/SCADA Master initiates all requests using device address codes. Slaves (sensors, drives, meters, VFDs) only respond when their specific address is queried. Simple, robust, widely used in marine automation.",
    "cat": "SCADA",
    "id": "T07_021"
  },
  {
    "q": "What does an I/P converter do in a pneumatic control valve loop?",
    "a": "Converts a 4-20 mA electronic signal into a 3-15 psi pneumatic signal",
    "opts": [
      "Converts 3-15 psi pneumatic to 4-20 mA feedback (P/I converter)",
      "Isolates the PLC digital input from the analog transmitter",
      "Converts a 4-20 mA electronic signal into a 3-15 psi pneumatic signal",
      "Converts integral action into proportional action during transients"
    ],
    "exp": "I/P (Current-to-Pressure) converter bridges the electronic controller and the pneumatic valve actuator. Input: 4 mA = 3 psi (valve closed), 20 mA = 15 psi (valve fully open). Essential interface in older pneumatic systems.",
    "cat": "CONTROL",
    "id": "T07_022"
  },
  {
    "q": "Why are fail-close (air-to-open) control valves selected for fuel oil supply lines?",
    "a": "On loss of instrument air or signal, the spring closes the valve - stops fuel flow and prevents fire risk",
    "opts": [
      "They require less instrument air pressure than fail-open valves",
      "On loss of instrument air or signal, the spring closes the valve - stops fuel flow and prevents fire risk",
      "They open fully on signal loss to prevent engine fuel starvation",
      "They provide better linear flow for viscous HFO"
    ],
    "exp": "Fail-safe state is chosen based on process hazard. Fuel lines: fail CLOSED prevents flooding and fire risk. Cooling water lines: fail OPEN to maintain cooling. Steam heating lines: depends on application (usually fail-close to prevent overheating).",
    "cat": "CONTROL",
    "id": "T07_023"
  },
  {
    "q": "Under IACS UR E27, what distinguishes Category III (Essential Services) OT systems?",
    "a": "Their failure poses an immediate risk to human life, ship safety, or the environment",
    "opts": [
      "They cause only localised crew inconvenience",
      "Their failure causes performance degradation but no immediate safety hazard",
      "Their failure poses an immediate risk to human life, ship safety, or the environment",
      "They are exempt from cybersecurity compliance"
    ],
    "exp": "Category III = Essential Services (Propulsion, Steering, ECDIS, RADAR, DP). Failure = immediate danger. Requires: cryptographic isolation, dedicated security zones, secure boot, real-time anomaly detection. Highest security level.",
    "cat": "CYBER",
    "id": "T07_024"
  },
  {
    "q": "What cybersecurity protocol must an ETO follow when an OEM connects a laptop to the generator PMS?",
    "a": "Malware scan the laptop/USB, then provide explicit physical authorization (key-switch) before allowing connection",
    "opts": [
      "Connect directly using the OEM default password for fastest troubleshooting",
      "Temporarily disable the firewall to allow full administrative access",
      "Malware scan the laptop/USB, then provide explicit physical authorization (key-switch) before allowing connection",
      "Allow remote access over ship Wi-Fi to avoid physical port security issues"
    ],
    "exp": "Under IACS UR E26/E27: (1) Malware scan. (2) Physical key-switch authorization. (3) MFA for remote access. (4) Log all actions in immutable audit log. (5) Change any accessed credentials after session. Never bypass these steps for an OEM.",
    "cat": "CYBER",
    "id": "T07_025"
  },
  {
    "q": "IACS UR E26 defines 17 requirements across which 5 NIST Cybersecurity Framework functions?",
    "a": "Identify, Protect, Detect, Respond, Recover",
    "opts": [
      "Assess, Isolate, Defend, Mitigate, Restore",
      "Plan, Do, Check, Act, Improve",
      "Identify, Protect, Detect, Respond, Recover",
      "Prevent, Monitor, Alert, Isolate, Patch"
    ],
    "exp": "UR E26 uses the NIST CSF structure: Identify (assets/risks), Protect (safeguards), Detect (anomalies), Respond (incidents), Recover (restore normal operations). Mandatory for ships contracted on or after 1 July 2024.",
    "cat": "CYBER",
    "id": "T07_026"
  },
  {
    "q": "What is the primary function of an IAS (Integrated Automation System) onboard?",
    "a": "Combines alarm monitoring, process control, performance monitoring, and remote control in one networked system",
    "opts": [
      "Handles only engine room alarms without control capabilities",
      "Combines alarm monitoring, process control, performance monitoring, and remote control in one networked system",
      "Strictly isolates cargo from propulsion control systems",
      "Serves as backup power supply for navigation equipment"
    ],
    "exp": "IAS integrates multiple functions including real-time monitoring, alarm processing, and remote setpoint adjustment across distributed PLCs into one unified network - essential for UMS (Unattended Machinery Space) operations.",
    "cat": "SCADA",
    "id": "T07_027"
  },
  {
    "q": "How does SCADA/IAS support UMS (Unattended Machinery Space) operations?",
    "a": "Transmits prioritised alarms to bridge, ECR, and duty engineer's cabin automatically",
    "opts": [
      "Automatically deploys firefighting foam if a sensor fails",
      "Overrides the VDR during blackouts",
      "Transmits prioritised alarms to bridge, ECR, and duty engineer's cabin automatically",
      "Physically bypasses manual valves on cooling systems"
    ],
    "exp": "IAS supports UMS by routing alarms correctly so the engine room can be safely left unattended. Critical alarms escalate to the bridge and duty cabin. Without IAS, UMS would not be safe or legal.",
    "cat": "SCADA",
    "id": "T07_028"
  },
  {
    "q": "What distinguishes Foundation Fieldbus (FF) from Modbus and HART?",
    "a": "FF is a fully digital multi-drop network supporting peer-to-peer communication directly between devices",
    "opts": [
      "FF uses strict master-slave architecture where slaves cannot initiate communication",
      "FF superimposes digital signal over a 4-20mA analog loop",
      "FF is a fully digital multi-drop network supporting peer-to-peer communication directly between devices",
      "FF operates exclusively on fiber optic cables"
    ],
    "exp": "Foundation Fieldbus allows peer-to-peer communication - field devices share data and execute control loops independently without a central PLC. Modbus is master-slave only. HART superimposes digital over 4-20mA.",
    "cat": "CONTROL",
    "id": "T07_029"
  },
  {
    "q": "Why is a 250-ohm resistor required in a HART communication loop?",
    "a": "To convert the FSK current signal into minimum 1V voltage drop so the HART communicator can decode it",
    "opts": [
      "To limit maximum loop current to 20mA preventing transmitter damage",
      "To filter electromagnetic interference from VFDs",
      "To convert the FSK current signal into minimum 1V voltage drop so the HART communicator can decode it",
      "To act as galvanic isolator between safe area and hazardous area"
    ],
    "exp": "HART superimposes a 1200/2200Hz FSK signal on the 4-20mA loop. The 250Ω resistor converts this AC signal to at least 1V amplitude (4mA × 250Ω) so the HART handheld communicator can detect and decode it.",
    "cat": "CONTROL",
    "id": "T07_030"
  },
  {
    "q": "What is the primary difference between relay logic and PLC ladder logic?",
    "a": "Relay logic requires physical rewiring to change behaviour; ladder logic is modified through software only",
    "opts": [
      "Relay logic uses software contact representations",
      "Relay logic requires physical rewiring to change behaviour; ladder logic is modified through software only",
      "Relay logic is immune to mechanical wear unlike ladder logic",
      "Ladder logic requires physical relays for every contact"
    ],
    "exp": "Physical relay logic is hardwired - changing the logic means cutting and reconnecting wires. PLC ladder logic is a software representation - changes made on a laptop and downloaded in minutes. Major advantage for maintenance and troubleshooting.",
    "cat": "LADDER",
    "id": "T07_031"
  },
  {
    "q": "In the SIPART PS2 positioner automatic calibration, what occurs during Run 2?",
    "a": "The positioner slowly drives the valve to the mechanical CLOSED stop and records this as 0% (4mA) position",
    "opts": [
      "Drives valve to OPEN stop and records 100% position",
      "Drives valve to CLOSED stop and records this as 0% (4mA) position",
      "Determines friction and hysteresis of the actuator",
      "Measures full travel time from closed to open"
    ],
    "exp": "Run 2 specifically locates the mechanical closed stop - the absolute 0% reference point (4mA). Run 3 finds the open stop. These two endpoints define the full travel range for all subsequent positioning commands.",
    "cat": "CONTROL",
    "id": "T07_032"
  },
  {
    "q": "What does Run 5 of the SIPART PS2 calibration determine?",
    "a": "Friction and hysteresis characteristics of the valve and actuator",
    "opts": [
      "Clears debris from valve seat",
      "Verifies 4-20mA signal matches DCS output",
      "Friction and hysteresis characteristics of the valve and actuator",
      "Tests the fail-safe spring return mechanism"
    ],
    "exp": "Run 5 applies small incremental step changes to determine the friction and hysteresis characteristics. The positioner uses this data to compensate for mechanical resistance in its control algorithm, improving positioning accuracy.",
    "cat": "CONTROL",
    "id": "T07_033"
  },
  {
    "q": "In Modbus RTU, what physical layer is most commonly used?",
    "a": "Two-wire differential RS-485 bus with 120-ohm termination resistors",
    "opts": [
      "Single-wire RS-232 with common ground",
      "Two-wire differential RS-485 bus with 120-ohm termination resistors",
      "Cat6 Ethernet with PoE",
      "Coaxial BNC cables"
    ],
    "exp": "Modbus RTU uses RS-485 differential signalling: multi-drop connections up to 1200m, up to 247 devices, 120Ω termination resistors at both ends to prevent signal reflection. RS-232 is point-to-point only (one device).",
    "cat": "SCADA",
    "id": "T07_034"
  },
  {
    "q": "What is the role of the Historian server in a ship's IAS/SCADA system?",
    "a": "Stores historical process data for trending, performance analysis, and incident investigation",
    "opts": [
      "Executes real-time PLC logic for main engine",
      "Manages firewall between IT and OT networks",
      "Stores historical process data for trending, performance analysis, and incident investigation",
      "Translates Modbus RTU signals into Foundation Fieldbus protocol"
    ],
    "exp": "The historian server logs all process values over time. Operators can trend parameters, compare performance, and investigate incidents. Critical for SEEMP Part III CII data collection and class survey evidence.",
    "cat": "SCADA",
    "id": "T07_035"
  },
  {
    "q": "When must a SIPART PS2 positioner be recalibrated using the full Run 1-5 sequence?",
    "a": "After replacing valve packing or servicing the actuator",
    "opts": [
      "Every week as part of routine planned maintenance",
      "After replacing valve packing or servicing the actuator",
      "Whenever the ship changes from HFO to MGO",
      "Only when the 4-20mA control signal is lost"
    ],
    "exp": "Recalibration is needed after any mechanical change (packing replacement, actuator service) because these changes alter friction and travel force characteristics. The positioner's stored calibration data no longer matches reality.",
    "cat": "CONTROL",
    "id": "T07_036"
  },
  {
    "q": "What is the defining characteristic of an Open Loop control system?",
    "a": "The output has no effect on the control action and there is no feedback",
    "opts": [
      "The output has no effect on the control action and there is no feedback",
      "The output continuously corrects the input error",
      "It relies on negative feedback to remain stable",
      "It calculates the exact error between SP and PV"
    ],
    "exp": "In an open loop system, there is no feedback from the output to the input. It operates on a 'fire and forget' principle and cannot correct for disturbances.",
    "cat": "LOOP",
    "id": "T07_037"
  },
  {
    "q": "Which of the following is a classic example of an Open Loop control system on a ship?",
    "a": "A fixed-speed timer-controlled pump",
    "opts": [
      "An Automatic Voltage Regulator (AVR)",
      "A fixed-speed timer-controlled pump",
      "An autopilot heading controller",
      "A boiler pressure controller"
    ],
    "exp": "A timer-controlled pump runs for a set time regardless of the actual fluid level. Because it doesn't measure the level to adjust its action, it is open loop.",
    "cat": "LOOP",
    "id": "T07_038"
  },
  {
    "q": "What is the defining characteristic of a Closed Loop control system?",
    "a": "The output is continuously measured and fed back to the controller to minimise error",
    "opts": [
      "It ignores the setpoint and only monitors the manipulated variable",
      "It requires human intervention to close the loop",
      "The output is continuously measured and fed back to the controller to minimise error",
      "It operates strictly on time-based schedules"
    ],
    "exp": "Closed loop control (feedback control) measures the actual output, compares it with the desired setpoint, and auto-corrects the error.",
    "cat": "LOOP",
    "id": "T07_039"
  },
  {
    "q": "In a closed loop system, how is the 'Error' calculated?",
    "a": "Error = SP (Setpoint) - PV (Process Variable)",
    "opts": [
      "Error = SP (Setpoint) - PV (Process Variable)",
      "Error = MV (Manipulated Variable) + SP (Setpoint)",
      "Error = SP (Setpoint) / PV (Process Variable)",
      "Error = PV (Process Variable) - MV (Manipulated Variable)"
    ],
    "exp": "The error is the mathematical difference between where the process should be (SP) and where it currently is (PV).",
    "cat": "LOOP",
    "id": "T07_040"
  },
  {
    "q": "What does 'SP' stand for in control theory?",
    "a": "Setpoint (the desired target value)",
    "opts": [
      "Standard Pressure",
      "Setpoint (the desired target value)",
      "Static Position",
      "System Parameter"
    ],
    "exp": "The Setpoint (SP) is the exact value the operator or system wants the process to achieve, such as 120°C for fuel oil.",
    "cat": "LOOP",
    "id": "T07_041"
  },
  {
    "q": "What does 'PV' stand for in control theory?",
    "a": "Process Variable (the actual measured value)",
    "opts": [
      "Process Variable (the actual measured value)",
      "Pneumatic Volume",
      "Pressure Valve",
      "Proportional Value"
    ],
    "exp": "The Process Variable (PV) is the real-time sensor reading of the process, like the actual measured temperature of the oil.",
    "cat": "LOOP",
    "id": "T07_042"
  },
  {
    "q": "What does 'MV' stand for in a control loop?",
    "a": "Manipulated Variable (the controller's output adjustment)",
    "opts": [
      "Manual Valve",
      "Measured Voltage",
      "Maximum Velocity",
      "Manipulated Variable (the controller's output adjustment)"
    ],
    "exp": "The Manipulated Variable (MV) is what the controller alters to affect the process, such as the % opening of a steam valve.",
    "cat": "LOOP",
    "id": "T07_043"
  },
  {
    "q": "Which type of feedback is used almost exclusively in stable control systems?",
    "a": "Negative feedback",
    "opts": [
      "Infinite feedback",
      "Positive feedback",
      "Neutral feedback",
      "Negative feedback"
    ],
    "exp": "Negative feedback applies a corrective action in the OPPOSITE direction of the error, stabilising the system and driving the error to zero.",
    "cat": "LOOP",
    "id": "T07_044"
  },
  {
    "q": "Why is Positive Feedback NOT used for process control?",
    "a": "It amplifies the deviation, making the system unstable",
    "opts": [
      "It forces the error to zero too quickly",
      "It is only used for pneumatic valves",
      "It amplifies the deviation, making the system unstable",
      "It requires too much electrical power"
    ],
    "exp": "Positive feedback feeds the output back in the same direction as the input, compounding the error and causing the system to spiral out of control (like microphone screech).",
    "cat": "LOOP",
    "id": "T07_045"
  },
  {
    "q": "Which of the following is a classic example of a Closed Loop system on a ship?",
    "a": "An Automatic Voltage Regulator (AVR)",
    "opts": [
      "A timed deck light switch",
      "A manual sounding tape",
      "An Automatic Voltage Regulator (AVR)",
      "A fixed-pitch ventilation fan"
    ],
    "exp": "An AVR constantly measures generator voltage (PV), compares it to the desired voltage (SP), and adjusts excitation (MV) to eliminate the error.",
    "cat": "LOOP",
    "id": "T07_046"
  },
  {
    "q": "What describes a system operating on a 'fire and verify' principle?",
    "a": "Closed loop control",
    "opts": [
      "Closed loop control",
      "Manual override",
      "Open loop control",
      "Sequential logic"
    ],
    "exp": "Closed loop control verifies the result of its actions via sensor feedback and adjusts accordingly.",
    "cat": "LOOP",
    "id": "T07_047"
  },
  {
    "q": "What describes a system operating on a 'fire and forget' principle?",
    "a": "Open loop control",
    "opts": [
      "PID control",
      "Open loop control",
      "Cascade control",
      "Closed loop control"
    ],
    "exp": "An open loop system applies an output without ever checking if the desired result was achieved.",
    "cat": "LOOP",
    "id": "T07_048"
  },
  {
    "q": "If the Fuel Oil Setpoint (SP) is 120°C and the measured Process Variable (PV) is 115°C, what is the error?",
    "a": "+5°C",
    "opts": [
      "+5°C",
      "120°C",
      "115°C",
      "-5°C"
    ],
    "exp": "Error = SP - PV. 120 - 115 = +5°C. A positive error indicates the process is currently below the target.",
    "cat": "LOOP",
    "id": "T07_049"
  },
  {
    "q": "In a closed loop heating system, what happens to the Manipulated Variable (MV) if the error is positive (PV < SP)?",
    "a": "The MV increases to add more heat and reduce the error",
    "opts": [
      "The MV increases to add more heat and reduce the error",
      "The MV decreases to cool the system",
      "The MV drops to zero instantly",
      "The MV remains constant"
    ],
    "exp": "A positive error means the temperature is too low. The controller will increase the MV (e.g., open the steam valve more) to raise the heat.",
    "cat": "LOOP",
    "id": "T07_050"
  },
  {
    "q": "When a closed loop controller is perfectly satisfied and the process is exactly on target, what is the value of the Error?",
    "a": "Zero",
    "opts": [
      "Zero",
      "Equal to the Manipulated Variable",
      "Equal to the Setpoint",
      "100%"
    ],
    "exp": "If the Process Variable (PV) exactly matches the Setpoint (SP), the equation SP - PV equals zero.",
    "cat": "LOOP",
    "id": "T07_051"
  },
  {
    "q": "What is the primary advantage of a closed loop system over an open loop system?",
    "a": "It can automatically correct for unexpected process disturbances",
    "opts": [
      "It can automatically correct for unexpected process disturbances",
      "It operates much slower",
      "It is much cheaper to build",
      "It does not require any sensors"
    ],
    "exp": "Because it relies on continuous feedback, a closed loop system will sense any disturbance (like a sudden pressure drop) and auto-correct.",
    "cat": "LOOP",
    "id": "T07_052"
  },
  {
    "q": "What is the primary disadvantage of a closed loop system compared to an open loop system?",
    "a": "It is more complex, expensive, and can potentially become unstable (oscillate)",
    "opts": [
      "It is more complex, expensive, and can potentially become unstable (oscillate)",
      "It uses less electrical power",
      "It requires a human operator at all times",
      "It cannot handle temperature control"
    ],
    "exp": "Feedback loops require sensors, transmitters, and controllers. If tuned poorly, the feedback can cause the system to oscillate wildly.",
    "cat": "LOOP",
    "id": "T07_053"
  },
  {
    "q": "Which component in a closed loop system physically measures the PV?",
    "a": "The Sensor / Transmitter",
    "opts": [
      "The Control Valve",
      "The Actuator",
      "The Setpoint Dial",
      "The Sensor / Transmitter"
    ],
    "exp": "The sensor (like a PT100) measures the physical property and the transmitter converts it to a standard signal (e.g., 4-20mA) representing the PV.",
    "cat": "LOOP",
    "id": "T07_054"
  },
  {
    "q": "Which component in a closed loop system acts on the MV?",
    "a": "The Actuator / Control Valve",
    "opts": [
      "The Display Screen",
      "The Feedback wire",
      "The Actuator / Control Valve",
      "The Sensor"
    ],
    "exp": "The actuator (like a pneumatic valve diaphragm) receives the MV signal and physically alters the process flow.",
    "cat": "LOOP",
    "id": "T07_055"
  },
  {
    "q": "Does an open loop system require a process sensor?",
    "a": "No, because it does not measure the output or use feedback",
    "opts": [
      "No, because it does not measure the output or use feedback",
      "Yes, to provide negative feedback",
      "Yes, but only for temperature",
      "Yes, to measure the exact error"
    ],
    "exp": "Open loop systems operate without sensors monitoring the output. For example, a toaster timer just runs for 2 minutes without sensing if the bread is actually burnt.",
    "cat": "LOOP",
    "id": "T07_056"
  },
  {
    "q": "How does an Autopilot represent a closed loop system?",
    "a": "It compares the set heading (SP) against the gyrocompass reading (PV) and adjusts the rudder (MV)",
    "opts": [
      "It compares the set heading (SP) against the gyrocompass reading (PV) and adjusts the rudder (MV)",
      "It locks the rudder at a fixed angle regardless of wind",
      "It steers the ship based on a timer",
      "It ignores the gyrocompass to save power"
    ],
    "exp": "The autopilot continuously measures the actual ship heading and applies rudder to correct any deviation caused by wind or waves.",
    "cat": "LOOP",
    "id": "T07_057"
  },
  {
    "q": "If a cooling water system uses a manual hand-valve set to 50% open, what type of control is this?",
    "a": "Open loop control",
    "opts": [
      "PID control",
      "Closed loop control",
      "Cascade control",
      "Open loop control"
    ],
    "exp": "Because the valve does not automatically adjust itself if the engine gets hotter, it is an open loop (fixed) system.",
    "cat": "LOOP",
    "id": "T07_058"
  },
  {
    "q": "In a boiler steam pressure control system, what serves as the PV?",
    "a": "The actual steam pressure inside the boiler drum",
    "opts": [
      "The actual steam pressure inside the boiler drum",
      "The desired 10 bar setpoint",
      "The fuel valve position",
      "The boiler water level"
    ],
    "exp": "The Process Variable is the current, real-time pressure reading from the boiler pressure transmitter.",
    "cat": "LOOP",
    "id": "T07_059"
  },
  {
    "q": "In an HVAC temperature control loop, what serves as the MV?",
    "a": "The chilled water or steam valve position",
    "opts": [
      "The outside air temperature",
      "The cabin thermometer reading",
      "The passenger's thermostat dial setting",
      "The chilled water or steam valve position"
    ],
    "exp": "The controller manipulates the valve (MV) to change the flow of heating or cooling medium into the air handler.",
    "cat": "LOOP",
    "id": "T07_060"
  },
  {
    "q": "Can an open loop system self-correct for a sudden drop in supply pressure?",
    "a": "No, it will continue to output its fixed command",
    "opts": [
      "Yes, it uses negative feedback",
      "No, it will continue to output its fixed command",
      "Yes, if it has a PT100 sensor",
      "Yes, by opening the valve fully"
    ],
    "exp": "Without feedback, an open loop system is completely blind to disturbances and will not alter its action.",
    "cat": "LOOP",
    "id": "T07_061"
  },
  {
    "q": "What is the result of using positive feedback in an audio amplifier?",
    "a": "It creates a loud, unstable screeching sound (oscillation)",
    "opts": [
      "It creates a perfectly clear sound",
      "It mutes all background noise",
      "It acts as a low-pass filter",
      "It creates a loud, unstable screeching sound (oscillation)"
    ],
    "exp": "Positive feedback feeds the output directly back into the input in the same phase, creating an infinite, unstable loop.",
    "cat": "LOOP",
    "id": "T07_062"
  },
  {
    "q": "Why is an electric kettle an example of open loop control (if it doesn't have a thermostat)?",
    "a": "It applies heat constantly regardless of the exact water temperature",
    "opts": [
      "It uses a PID controller",
      "It has negative feedback",
      "It applies heat constantly regardless of the exact water temperature",
      "It measures the water level"
    ],
    "exp": "A basic kettle just turns a heater on. (Note: Modern kettles with bimetallic trips are simple ON/OFF closed loops, but a pure timer kettle is open loop).",
    "cat": "LOOP",
    "id": "T07_063"
  },
  {
    "q": "What happens in a closed loop system if the feedback wire breaks?",
    "a": "The controller loses the PV, assumes massive error, and usually drives the output to a dangerous extreme",
    "opts": [
      "The controller loses the PV, assumes massive error, and usually drives the output to a dangerous extreme",
      "The setpoint drops to zero",
      "The valve locks in its exact current position",
      "The system automatically switches to open loop safely"
    ],
    "exp": "Loss of feedback is catastrophic. If the controller reads 0°C due to a broken wire, it will open the steam valve 100% to compensate, overheating the system.",
    "cat": "LOOP",
    "id": "T07_064"
  },
  {
    "q": "What defines the 'Controller' in a closed loop system?",
    "a": "The logic unit that calculates the error and dictates the necessary corrective action",
    "opts": [
      "The pipe carrying the fluid",
      "The physical valve that opens and closes",
      "The logic unit that calculates the error and dictates the necessary corrective action",
      "The sensor that measures the fluid"
    ],
    "exp": "The controller is the 'brain' (like a PLC or PID module) that does the math to compare SP and PV.",
    "cat": "LOOP",
    "id": "T07_065"
  },
  {
    "q": "Why is manual control considered open loop?",
    "a": "Because the human operator provides the feedback, not the control system itself",
    "opts": [
      "Because humans are machines",
      "Because manual valves have sensors built in",
      "Because the human operator provides the feedback, not the control system itself",
      "Because manual control is strictly negative feedback"
    ],
    "exp": "From the machine's perspective, a manual valve has no automatic feedback mechanism. The human acts as the external closed loop.",
    "cat": "LOOP",
    "id": "T07_066"
  },
  {
    "q": "In a PID controller, what does the Proportional (P) action respond to?",
    "a": "The current magnitude of the error",
    "opts": [
      "The future predicted error",
      "The accumulated past error",
      "The current magnitude of the error",
      "The rate of change of the error"
    ],
    "exp": "Proportional action multiplies the immediate, current error (e) by the gain constant (Kp). Large error = large immediate output.",
    "cat": "PID",
    "id": "T07_067"
  },
  {
    "q": "What is the primary drawback of using ONLY Proportional (P) control?",
    "a": "It always leaves a steady-state offset (residual error)",
    "opts": [
      "It is too slow to react",
      "It causes massive oscillations constantly",
      "It is overly sensitive to high-frequency noise",
      "It always leaves a steady-state offset (residual error)"
    ],
    "exp": "P-only control requires an error to exist in order to generate a balancing output. Therefore, it can never drive the PV exactly to the SP.",
    "cat": "PID",
    "id": "T07_068"
  },
  {
    "q": "What is 'Steady-State Offset'?",
    "a": "The permanent residual error that remains when a P-only controller stabilizes",
    "opts": [
      "The time it takes for a valve to open",
      "The maximum overshoot of the system",
      "The noise generated by the derivative filter",
      "The permanent residual error that remains when a P-only controller stabilizes"
    ],
    "exp": "Offset occurs because as the PV nears the SP, the error shrinks, reducing the P-action until it exactly balances the process load at a value slightly off the target.",
    "cat": "PID",
    "id": "T07_069"
  },
  {
    "q": "Which PID action is specifically designed to eliminate steady-state offset?",
    "a": "Integral (I) action",
    "opts": [
      "Proportional (P) action",
      "Integral (I) action",
      "Derivative (D) action",
      "Feedforward action"
    ],
    "exp": "Integral action accumulates the error over time. Even a tiny 0.1°C offset will add up, forcing the controller to keep pushing the valve until the error hits absolute zero.",
    "cat": "PID",
    "id": "T07_070"
  },
  {
    "q": "How does Integral (I) action work mathematically?",
    "a": "It produces an output proportional to the accumulated sum of the error over time",
    "opts": [
      "It divides the setpoint by the process variable",
      "It multiplies the error by a fixed constant",
      "It produces an output proportional to the accumulated sum of the error over time",
      "It measures the slope of the error curve"
    ],
    "exp": "Integration is the mathematical area under the error curve over time.",
    "cat": "PID",
    "id": "T07_071"
  },
  {
    "q": "What problem can occur if Integral action is too aggressive (short Reset Time)?",
    "a": "It causes the system to overshoot the setpoint and oscillate",
    "opts": [
      "It slows the system down to a halt",
      "It amplifies sensor noise",
      "It leaves a large offset",
      "It causes the system to overshoot the setpoint and oscillate"
    ],
    "exp": "If the integral winds up too fast, it will drive the output too hard, blasting past the setpoint before it has time to reverse.",
    "cat": "PID",
    "id": "T07_072"
  },
  {
    "q": "What is 'Integral Windup'?",
    "a": "When a process is limited (e.g., valve 100% open), the integral term keeps accumulating error, causing massive overshoot when the limit is removed",
    "opts": [
      "When the controller runs out of memory",
      "When a process is limited (e.g., valve 100% open), the integral term keeps accumulating error, causing massive overshoot when the limit is removed",
      "When the derivative term amplifies noise",
      "When the proportional band is too wide"
    ],
    "exp": "If a valve is wide open but the temperature still isn't rising, the integral math keeps adding up an impossible demand. When heat finally arrives, the massive 'wound up' integral value causes massive overshoot.",
    "cat": "PID",
    "id": "T07_073"
  },
  {
    "q": "How is Integral Windup prevented in modern PLC controllers?",
    "a": "By using anti-windup logic that clamps or pauses the integral accumulation when the output reaches 100% or 0%",
    "opts": [
      "By using anti-windup logic that clamps or pauses the integral accumulation when the output reaches 100% or 0%",
      "By lowering the setpoint to zero",
      "By removing the integral term completely",
      "By increasing the proportional gain"
    ],
    "exp": "Anti-windup circuits stop the math from accumulating impossible values once the physical actuator has hit its mechanical limit.",
    "cat": "PID",
    "id": "T07_074"
  },
  {
    "q": "What does the Derivative (D) action in a PID controller respond to?",
    "a": "The rate of change of the error",
    "opts": [
      "The absolute value of the setpoint",
      "The rate of change of the error",
      "The accumulated sum of the error",
      "The magnitude of the error"
    ],
    "exp": "Derivative looks at the slope (de/dt). If the error is closing rapidly, D-action applies a negative 'braking' force to prevent overshoot.",
    "cat": "PID",
    "id": "T07_075"
  },
  {
    "q": "What is the primary purpose of adding Derivative (D) action to a loop?",
    "a": "To provide damping and anticipate trends, reducing overshoot",
    "opts": [
      "To speed up the integral windup",
      "To eliminate steady-state offset",
      "To provide damping and anticipate trends, reducing overshoot",
      "To increase the proportional band"
    ],
    "exp": "D-action acts like shock absorbers on a car. It 'predicts' where the PV is going based on its current speed and slows it down to land smoothly on the SP.",
    "cat": "PID",
    "id": "T07_076"
  },
  {
    "q": "What is a major disadvantage of Derivative (D) action?",
    "a": "It is highly sensitive to high-frequency sensor noise, causing erratic output spikes",
    "opts": [
      "It slows down the initial response",
      "It is highly sensitive to high-frequency sensor noise, causing erratic output spikes",
      "It requires a massive amount of PLC memory",
      "It causes steady-state offset"
    ],
    "exp": "A tiny, instant jitter in a sensor reading looks like an infinitely fast 'rate of change' to the derivative math, causing a massive, useless spike in the valve output.",
    "cat": "PID",
    "id": "T07_077"
  },
  {
    "q": "Why is Derivative (D) action rarely used in temperature control loops (like Fuel Oil heating)?",
    "a": "Temperature changes slowly naturally, so D action is unnecessary and would only amplify sensor noise",
    "opts": [
      "Derivative action cools the oil",
      "Temperature changes slowly naturally, so D action is unnecessary and would only amplify sensor noise",
      "Temperature changes too fast for D action",
      "Temperature has no rate of change"
    ],
    "exp": "Thermal processes have huge inertia. PI control is perfectly sufficient. Adding D just creates erratic valve chatter from PT100 sensor noise.",
    "cat": "PID",
    "id": "T07_078"
  },
  {
    "q": "How is Proportional Band (PB) related to Proportional Gain (Kp)?",
    "a": "They are inversely related: PB = (1 / Kp) x 100%",
    "opts": [
      "PB is the square root of Kp",
      "There is no relationship between them",
      "They are inversely related: PB = (1 / Kp) x 100%",
      "They are directly proportional: PB = Kp"
    ],
    "exp": "A high gain (Kp) equals a narrow proportional band (PB). A narrow PB means a small error causes a 100% valve shift (aggressive).",
    "cat": "PID",
    "id": "T07_079"
  },
  {
    "q": "What happens if a Proportional controller has a very NARROW Proportional Band (high Kp)?",
    "a": "The controller reacts aggressively; a small error causes a massive output change, risking oscillation",
    "opts": [
      "The integral windup stops",
      "The controller reacts sluggishly to large errors",
      "The steady-state offset increases",
      "The controller reacts aggressively; a small error causes a massive output change, risking oscillation"
    ],
    "exp": "Narrow PB = High Gain. The valve slams open and shut even for tiny temperature drops, destabilizing the system.",
    "cat": "PID",
    "id": "T07_080"
  },
  {
    "q": "If the error in a PID loop is constant (not changing) and non-zero, what is the output of the Derivative term?",
    "a": "Zero",
    "opts": [
      "Equal to the Proportional term",
      "Increasing continuously",
      "Zero",
      "100%"
    ],
    "exp": "The derivative of a constant is zero. If the error isn't changing, the rate-of-change is zero, so D-action does nothing.",
    "cat": "PID",
    "id": "T07_081"
  },
  {
    "q": "Which control configuration is most standard for an Autopilot steering system?",
    "a": "PD (Proportional + Derivative)",
    "opts": [
      "PD (Proportional + Derivative)",
      "I-only",
      "PI (Proportional + Integral)",
      "P-only"
    ],
    "exp": "Autopilots need rapid response to waves (P) and heavy damping to stop the massive ship from overshooting the heading (D). Integral is sometimes added for steady crosswinds, but PD is the core.",
    "cat": "PID",
    "id": "T07_082"
  },
  {
    "q": "What is the primary action that drives the error exactly to zero?",
    "a": "Integral action",
    "opts": [
      "Integral action",
      "Feedforward action",
      "Proportional action",
      "Derivative action"
    ],
    "exp": "Because integral action sums error over time, it will not stop adjusting the output until the error is absolutely 0.00.",
    "cat": "PID",
    "id": "T07_083"
  },
  {
    "q": "In the PID formula: MV = Kp*e + Ki*Integral(e) + Kd*(de/dt) + Bias. What is the 'Bias'?",
    "a": "The manual reset or steady-state base output of the controller when error is zero",
    "opts": [
      "The maximum limit of the valve",
      "The random noise from the sensor",
      "The integral windup limit",
      "The manual reset or steady-state base output of the controller when error is zero"
    ],
    "exp": "Bias is the starting point. If the valve needs to be 50% open to maintain the target, the bias provides that baseline so P doesn't have to carry the whole load.",
    "cat": "PID",
    "id": "T07_084"
  },
  {
    "q": "What does a LONG Integral Time (Ti) or Reset Rate mean?",
    "a": "Slow integral action; it takes a long time to eliminate the offset",
    "opts": [
      "Slow integral action; it takes a long time to eliminate the offset",
      "High derivative action",
      "Fast integral action; risks overshoot",
      "High proportional gain"
    ],
    "exp": "A longer integration time spreads the correction out, making the controller sluggish to eliminate the final bit of error.",
    "cat": "PID",
    "id": "T07_085"
  },
  {
    "q": "What does a SHORT Integral Time (Ti) mean?",
    "a": "Fast, aggressive integral action; quickly eliminates offset but risks severe overshoot",
    "opts": [
      "Low proportional gain",
      "Zero derivative action",
      "Fast, aggressive integral action; quickly eliminates offset but risks severe overshoot",
      "Slow integral action"
    ],
    "exp": "A short Ti means the controller rapidly ramps up the output for even small errors, easily pushing the process past the setpoint.",
    "cat": "PID",
    "id": "T07_086"
  },
  {
    "q": "Why is 'Derivative on Measurement' often used instead of 'Derivative on Error'?",
    "a": "To prevent massive output spikes when the operator suddenly changes the Setpoint (SP)",
    "opts": [
      "To increase the offset",
      "To prevent massive output spikes when the operator suddenly changes the Setpoint (SP)",
      "To stop the integral windup",
      "To make the valve open faster"
    ],
    "exp": "If D-action watches the Error (SP-PV), changing the SP instantly creates an 'infinite' rate of change, causing a huge valve kick. Watching only the PV prevents this 'derivative kick'.",
    "cat": "PID",
    "id": "T07_087"
  },
  {
    "q": "Which part of the PID controller acts on PAST errors?",
    "a": "Integral (I)",
    "opts": [
      "Bias",
      "Derivative (D)",
      "Proportional (P)",
      "Integral (I)"
    ],
    "exp": "Integral accumulates all the errors that have happened in the past to decide how hard to push now.",
    "cat": "PID",
    "id": "T07_088"
  },
  {
    "q": "Which part of the PID controller acts on the PRESENT error?",
    "a": "Proportional (P)",
    "opts": [
      "Proportional (P)",
      "Bias",
      "Derivative (D)",
      "Integral (I)"
    ],
    "exp": "Proportional looks only at the exact magnitude of the error at this exact millisecond.",
    "cat": "PID",
    "id": "T07_089"
  },
  {
    "q": "Which part of the PID controller predicts FUTURE errors?",
    "a": "Derivative (D)",
    "opts": [
      "Bias",
      "Integral (I)",
      "Derivative (D)",
      "Proportional (P)"
    ],
    "exp": "Derivative looks at the trajectory (slope) to anticipate where the process will be in the near future.",
    "cat": "PID",
    "id": "T07_090"
  },
  {
    "q": "If a system requires absolute precision with zero offset, but changes very slowly (like a massive heater), which control is best?",
    "a": "PI control",
    "opts": [
      "Derivative control only",
      "P control only",
      "PD control",
      "PI control"
    ],
    "exp": "PI control uses Proportional for speed and Integral to erase the offset. Since it's slow, Derivative is useless.",
    "cat": "PID",
    "id": "T07_091"
  },
  {
    "q": "What happens to the Integral output if the PV reaches the SP and stays there perfectly?",
    "a": "The Integral output stops increasing and holds its current value to keep the valve in the correct position",
    "opts": [
      "It reverses direction",
      "The Integral output stops increasing and holds its current value to keep the valve in the correct position",
      "It continues to climb infinitely",
      "It drops immediately to zero"
    ],
    "exp": "When error is zero, you are adding zero to the sum. The integral locks in its value, maintaining exactly enough valve opening to balance the process.",
    "cat": "PID",
    "id": "T07_092"
  },
  {
    "q": "What happens to the Proportional output if the PV reaches the SP and stays there perfectly (assuming bias is zero)?",
    "a": "The Proportional output drops to zero",
    "opts": [
      "The Proportional output drops to zero",
      "It holds its maximum value",
      "It locks at 50%",
      "It turns into derivative action"
    ],
    "exp": "Kp * 0 = 0. Without an error, the proportional term vanishes entirely.",
    "cat": "PID",
    "id": "T07_093"
  },
  {
    "q": "Why is an 'I-only' (Integral only) controller rarely used alone?",
    "a": "It responds too slowly to sudden changes and causes continuous oscillation",
    "opts": [
      "It ignores the setpoint completely",
      "It reacts too aggressively to noise",
      "It leaves too much offset",
      "It responds too slowly to sudden changes and causes continuous oscillation"
    ],
    "exp": "Without Proportional action for immediate response, an I-only controller ramps up too slowly, overshoots, and swings back and forth eternally.",
    "cat": "PID",
    "id": "T07_094"
  },
  {
    "q": "What is the primary method to tune a PID loop?",
    "a": "Adjusting the Kp, Ki, and Kd gain values until the desired response is achieved",
    "opts": [
      "Changing the physical size of the control valve",
      "Adjusting the Kp, Ki, and Kd gain values until the desired response is achieved",
      "Adding more sensors to the pipe",
      "Increasing the 24V supply voltage"
    ],
    "exp": "Tuning involves tweaking the math multipliers (gains) so the controller's aggression matches the physical inertia of the process.",
    "cat": "PID",
    "id": "T07_095"
  },
  {
    "q": "What does a Derivative Filter do?",
    "a": "It removes high-frequency noise from the sensor signal before it hits the derivative math, preventing massive output spikes",
    "opts": [
      "It removes oil from the fuel",
      "It removes high-frequency noise from the sensor signal before it hits the derivative math, preventing massive output spikes",
      "It stops the integral from winding up",
      "It increases the steady-state offset"
    ],
    "exp": "A low-pass filter smooths the jagged sensor noise so the derivative action only responds to genuine process trends.",
    "cat": "PID",
    "id": "T07_096"
  },
  {
    "q": "What is the defining architecture of a Cascade Control system?",
    "a": "Two controllers where the output of the primary (outer) controller acts as the setpoint for the secondary (inner) controller",
    "opts": [
      "One controller operating two valves simultaneously",
      "Using two sensors averaged together for one controller",
      "Two controllers where the output of the primary (outer) controller acts as the setpoint for the secondary (inner) controller",
      "A backup controller taking over if the first one fails"
    ],
    "exp": "In cascade, the master controller decides what it needs (e.g., more flow) and sends that request as a setpoint to a slave controller.",
    "cat": "CASCADE",
    "id": "T07_097"
  },
  {
    "q": "What is the primary advantage of Cascade control over simple single-loop feedback?",
    "a": "It corrects inner loop disturbances much faster, before they can affect the primary outer variable",
    "opts": [
      "It is much cheaper and requires fewer sensors",
      "It works purely on open-loop principles",
      "It eliminates the need for PID tuning",
      "It corrects inner loop disturbances much faster, before they can affect the primary outer variable"
    ],
    "exp": "By putting a fast inner loop inside a slow outer loop, fluctuations in the supply line are snuffed out instantly.",
    "cat": "CASCADE",
    "id": "T07_098"
  },
  {
    "q": "In a cascade system, which loop is designed to be the fastest?",
    "a": "The secondary (inner) loop",
    "opts": [
      "The manual override loop",
      "Both loops must operate at the exact same speed",
      "The primary (outer) loop",
      "The secondary (inner) loop"
    ],
    "exp": "The inner loop (usually flow or pressure) must react instantly to fix supply disturbances before the slow outer loop (temperature or level) even notices.",
    "cat": "CASCADE",
    "id": "T07_099"
  },
  {
    "q": "What does the Primary (Master / Outer) controller measure in a cascade system?",
    "a": "The main process variable that ultimately needs to be controlled (e.g., Temperature)",
    "opts": [
      "The intermediate variable (e.g., Steam flow)",
      "The exact position of the valve stem",
      "The main process variable that ultimately needs to be controlled (e.g., Temperature)",
      "The ambient room pressure"
    ],
    "exp": "The outer loop watches the main goal. It determines how much heating or cooling is ultimately required.",
    "cat": "CASCADE",
    "id": "T07_100"
  },
  {
    "q": "What does the Secondary (Slave / Inner) controller directly manipulate?",
    "a": "The final control element (e.g., the control valve)",
    "opts": [
      "The main process sensor",
      "The setpoint of the outer controller",
      "The final control element (e.g., the control valve)",
      "The master PID gains"
    ],
    "exp": "The inner controller has direct physical control over the actuator based on the command it receives from the outer controller.",
    "cat": "CASCADE",
    "id": "T07_101"
  },
  {
    "q": "In a Boiler Steam Temperature cascade control system, what is the outer loop variable?",
    "a": "Steam Temperature",
    "opts": [
      "Steam Flow",
      "Steam Temperature",
      "Feedwater Flow",
      "Fuel Pressure"
    ],
    "exp": "The ultimate goal is controlling the temperature of the superheated steam, so temperature is the primary outer loop.",
    "cat": "CASCADE",
    "id": "T07_102"
  },
  {
    "q": "In a Boiler Steam Temperature cascade system, what is the inner loop variable?",
    "a": "Steam Flow or Cooling Water Flow (Attemperator)",
    "opts": [
      "Steam Flow or Cooling Water Flow (Attemperator)",
      "Drum Level",
      "Exhaust Gas Oxygen",
      "Furnace Temperature"
    ],
    "exp": "The inner loop monitors the flow of attemperation cooling water. If supply pressure wavers, the inner loop fixes the flow instantly.",
    "cat": "CASCADE",
    "id": "T07_103"
  },
  {
    "q": "In a Fuel Oil Temperature cascade control system, what happens if the ship's steam supply pressure suddenly drops?",
    "a": "The inner steam flow controller immediately opens the valve further to maintain flow, so the HFO temperature barely changes",
    "opts": [
      "The inner steam flow controller immediately opens the valve further to maintain flow, so the HFO temperature barely changes",
      "The system shuts down on low pressure",
      "The fuel flow is reversed",
      "The outer temperature controller closes the valve"
    ],
    "exp": "This is the beauty of cascade. The inner flow controller fixes the steam drop instantly, preventing a massive fuel temp crash.",
    "cat": "CASCADE",
    "id": "T07_104"
  },
  {
    "q": "How many sensors and how many valves are typically in a basic cascade control system?",
    "a": "Two sensors, two controllers, one valve",
    "opts": [
      "Two sensors, one controller, two valves",
      "One sensor, one controller, two valves",
      "Two sensors, two controllers, one valve",
      "One sensor, two controllers, one valve"
    ],
    "exp": "The outer sensor watches the goal, the inner sensor watches the supply line, both feed their own controllers, but they only manipulate one physical valve.",
    "cat": "CASCADE",
    "id": "T07_105"
  },
  {
    "q": "In a Cargo Pump Discharge cascade system, the outer loop controls Tank Level. What does the inner loop control?",
    "a": "Pump Flow (or Pump Speed)",
    "opts": [
      "Pump Flow (or Pump Speed)",
      "Valve Position only",
      "Pump Temperature",
      "Ullage soundings"
    ],
    "exp": "The level controller tells the flow controller what flow rate is needed to drain the tank properly.",
    "cat": "CASCADE",
    "id": "T07_106"
  },
  {
    "q": "Why does a single-loop temperature controller struggle with supply pressure drops?",
    "a": "It must wait for the actual temperature to drop before it even knows there is a problem, causing a sluggish response",
    "opts": [
      "It reacts too quickly and causes oscillations",
      "It must wait for the actual temperature to drop before it even knows there is a problem, causing a sluggish response",
      "It cannot control pneumatic valves",
      "It ignores the setpoint"
    ],
    "exp": "Thermal inertia means it takes minutes for a steam pressure drop to cool the oil. By the time the single loop acts, the error is huge.",
    "cat": "CASCADE",
    "id": "T07_107"
  },
  {
    "q": "What happens in a cascade system if the secondary (inner) controller is switched to MANUAL mode?",
    "a": "The primary (outer) controller's output is ignored, and the operator directly controls the valve",
    "opts": [
      "The system crashes immediately",
      "The primary controller takes direct control of the valve",
      "The secondary controller automatically resets",
      "The primary (outer) controller's output is ignored, and the operator directly controls the valve"
    ],
    "exp": "Breaking the cascade chain at the inner loop means the master's setpoint demands hit a dead end.",
    "cat": "CASCADE",
    "id": "T07_108"
  },
  {
    "q": "What is the manipulated variable (MV) of the Primary (Outer) controller in a cascade system?",
    "a": "The Setpoint (SP) of the Secondary (Inner) controller",
    "opts": [
      "The process temperature",
      "The Setpoint (SP) of the Secondary (Inner) controller",
      "The physical control valve",
      "The instrument air supply"
    ],
    "exp": "The outer controller does not touch the valve. Its only 'output' is writing a new target number to the inner controller.",
    "cat": "CASCADE",
    "id": "T07_109"
  },
  {
    "q": "What is the manipulated variable (MV) of the Secondary (Inner) controller?",
    "a": "The physical control valve or actuator",
    "opts": [
      "The outer controller's setpoint",
      "The boiler feed pump",
      "The main process sensor",
      "The physical control valve or actuator"
    ],
    "exp": "The inner controller is the one that actually sends the 4-20mA signal to open or close the pneumatic valve.",
    "cat": "CASCADE",
    "id": "T07_110"
  },
  {
    "q": "Which term describes the Primary controller in a cascade loop?",
    "a": "Master",
    "opts": [
      "Actuator",
      "Slave",
      "Master",
      "Feedforward"
    ],
    "exp": "The Master controller commands the Slave controller on what to do.",
    "cat": "CASCADE",
    "id": "T07_111"
  },
  {
    "q": "Which term describes the Secondary controller in a cascade loop?",
    "a": "Slave",
    "opts": [
      "Primary",
      "Master",
      "Slave",
      "Integrator"
    ],
    "exp": "The Slave controller obeys the setpoint given to it by the Master.",
    "cat": "CASCADE",
    "id": "T07_112"
  },
  {
    "q": "Is cascade control an open loop or closed loop architecture?",
    "a": "Closed loop (it consists of two nested closed loops)",
    "opts": [
      "Neither, it is sequential logic",
      "Open loop for the master, closed loop for the slave",
      "Open loop",
      "Closed loop (it consists of two nested closed loops)"
    ],
    "exp": "Both the inner and outer circuits use feedback from sensors to calculate errors, making it a nested closed-loop system.",
    "cat": "CASCADE",
    "id": "T07_113"
  },
  {
    "q": "When tuning a cascade control system, which loop must be tuned FIRST?",
    "a": "The secondary (inner) loop",
    "opts": [
      "The secondary (inner) loop",
      "The primary (outer) loop",
      "It does not matter",
      "Both simultaneously"
    ],
    "exp": "The inner loop must be fast and stable before the outer loop can rely on it to execute its commands accurately.",
    "cat": "CASCADE",
    "id": "T07_114"
  },
  {
    "q": "What type of process variable is typically handled by the INNER loop in a cascade?",
    "a": "Fast-changing variables like Flow or Pressure",
    "opts": [
      "Slow-changing variables like Temperature",
      "Chemical composition",
      "Massive variables like Ship Speed",
      "Fast-changing variables like Flow or Pressure"
    ],
    "exp": "Flow and pressure change almost instantly when a valve moves, making them perfect for the fast-acting inner slave loop.",
    "cat": "CASCADE",
    "id": "T07_115"
  },
  {
    "q": "What type of process variable is typically handled by the OUTER loop in a cascade?",
    "a": "Slow-changing variables with high inertia, like Temperature or Level",
    "opts": [
      "Electrical current",
      "Slow-changing variables with high inertia, like Temperature or Level",
      "Valve position",
      "Fast-changing variables like Flow"
    ],
    "exp": "Heating up a massive tank of oil takes time. The master outer loop oversees this slow, overarching process.",
    "cat": "CASCADE",
    "id": "T07_116"
  },
  {
    "q": "If the inner loop sensor fails in a cascade system, what usually happens?",
    "a": "The entire cascade loop fails and must be dropped to manual or single-loop mode",
    "opts": [
      "The valve locks fully open",
      "The outer loop takes over direct control automatically",
      "The inner controller ignores it",
      "The entire cascade loop fails and must be dropped to manual or single-loop mode"
    ],
    "exp": "Without the inner feedback, the slave controller is blind. The chain is broken, requiring operator intervention.",
    "cat": "CASCADE",
    "id": "T07_117"
  },
  {
    "q": "How does cascade control improve the linearity of a control valve?",
    "a": "The inner flow controller adjusts the valve as needed to achieve the exact flow requested, ignoring valve friction or non-linear flow curves",
    "opts": [
      "The inner flow controller adjusts the valve as needed to achieve the exact flow requested, ignoring valve friction or non-linear flow curves",
      "It adds a physical spring to the valve",
      "It replaces pneumatic valves with electric ones",
      "It forces the valve to move strictly in 10% steps"
    ],
    "exp": "If a sticky valve needs 55% command to get 50% flow, the inner slave controller figures that out automatically, making the valve 'appear' perfectly linear to the master controller.",
    "cat": "CASCADE",
    "id": "T07_118"
  },
  {
    "q": "What is the typical relationship in speeds between the inner and outer loops in cascade control?",
    "a": "The inner loop should be at least 3 to 5 times faster than the outer loop",
    "opts": [
      "The outer loop must be 10 times faster",
      "The inner loop should be at least 3 to 5 times faster than the outer loop",
      "The inner loop is usually slower",
      "They must be exactly identical in speed"
    ],
    "exp": "If the inner loop is too slow, it will fight with the outer loop, causing chaotic oscillations.",
    "cat": "CASCADE",
    "id": "T07_119"
  },
  {
    "q": "In a Cascade system, where does the Setpoint for the primary (outer) controller come from?",
    "a": "The human operator or supervisory computer",
    "opts": [
      "The inner controller",
      "The final control valve",
      "The human operator or supervisory computer",
      "A random number generator"
    ],
    "exp": "The human sets the ultimate goal (e.g., 'Keep the fuel at 130°C'). The primary controller takes that operator SP and generates the inner SP.",
    "cat": "CASCADE",
    "id": "T07_120"
  },
  {
    "q": "Why is it important for the inner loop to reject disturbances before they hit the outer loop?",
    "a": "To minimise the deviation of the main product quality (like temperature) from its target",
    "opts": [
      "To minimise the deviation of the main product quality (like temperature) from its target",
      "To increase the pressure drop",
      "To make the valve open faster",
      "To save electricity in the PLC"
    ],
    "exp": "If steam pressure fluctuates, catching it early means the fuel oil temperature never dips, ensuring perfect combustion in the main engine.",
    "cat": "CASCADE",
    "id": "T07_121"
  },
  {
    "q": "If a ship uses single-loop control for HFO temperature, what causes the temperature to drop when steam supply pressure falls?",
    "a": "Less steam flows through the same valve opening, providing less heat transfer until the controller eventually notices the temp drop",
    "opts": [
      "The sensor gets confused by the pressure",
      "Less steam flows through the same valve opening, providing less heat transfer until the controller eventually notices the temp drop",
      "The HFO flow triples",
      "The valve automatically closes"
    ],
    "exp": "Single loops are blind to supply-side issues. They only act AFTER the damage (temperature drop) is already done.",
    "cat": "CASCADE",
    "id": "T07_122"
  },
  {
    "q": "Can a cascade control system have more than two nested loops?",
    "a": "Yes, complex processes can have three or more nested loops, though two is most common",
    "opts": [
      "Yes, but only in open-loop mode",
      "No, PLCs only have enough memory for two",
      "Yes, complex processes can have three or more nested loops, though two is most common",
      "No, physics prohibits more than two"
    ],
    "exp": "For extremely complex processes (like advanced boiler networks), a 3-tier cascade might be used, but tuning becomes very difficult.",
    "cat": "CASCADE",
    "id": "T07_123"
  },
  {
    "q": "What does the inner loop in a cascade setup effectively 'hide' from the outer loop?",
    "a": "Non-linearities, friction, and supply disturbances associated with the actuator and control medium",
    "opts": [
      "The actual process temperature",
      "The PLC scan time",
      "The setpoint given by the operator",
      "Non-linearities, friction, and supply disturbances associated with the actuator and control medium"
    ],
    "exp": "The master controller just asks for 'X amount of heat flow'. It doesn't have to worry about sticky valves or fluctuating steam pressure-the slave handles all that dirty work.",
    "cat": "CASCADE",
    "id": "T07_124"
  },
  {
    "q": "In a cascade system, is it possible to run the outer loop in Auto while the inner loop is in Manual?",
    "a": "No, if the inner loop is in Manual, it ignores the outer loop's commands, breaking the cascade",
    "opts": [
      "Yes, but only for 10 minutes",
      "Yes, the outer loop will just control the valve directly",
      "No, PLCs force both to be manual simultaneously",
      "No, if the inner loop is in Manual, it ignores the outer loop's commands, breaking the cascade"
    ],
    "exp": "Putting the slave in manual means it stops listening to the master. The master's output goes nowhere, often causing it to 'wind up'.",
    "cat": "CASCADE",
    "id": "T07_125"
  },
  {
    "q": "What is the function of 'bumpless transfer' in a cascade control system?",
    "a": "To ensure that switching between Manual and Cascade modes does not cause a sudden, violent jump in valve position",
    "opts": [
      "To ensure that switching between Manual and Cascade modes does not cause a sudden, violent jump in valve position",
      "To transfer fuel without spills",
      "To switch between 50Hz and 60Hz smoothly",
      "To prevent physical bumps against the valve"
    ],
    "exp": "Modern PLCs track the manual valve position and align the PID math so when you click 'Auto', the valve stays exactly where it was and takes over smoothly.",
    "cat": "CASCADE",
    "id": "T07_126"
  },
  {
    "q": "What is the first step in the continuous PLC Scan Cycle?",
    "a": "Input Scan: Read all physical inputs and store them in the Input Image Register",
    "opts": [
      "Program Execution",
      "Input Scan: Read all physical inputs and store them in the Input Image Register",
      "Output Scan",
      "Housekeeping"
    ],
    "exp": "Before doing any math, the PLC takes a 'snapshot' of all the switches and sensors in the field to ensure stable data during the program run.",
    "cat": "PLC",
    "id": "T07_127"
  },
  {
    "q": "During the 'Program Execution' step of a PLC scan cycle, where does the PLC write the results of its logic?",
    "a": "To the Output Image Register in memory",
    "opts": [
      "To the ROM",
      "To the Output Image Register in memory",
      "Directly to the physical relays in the field",
      "To the Watchdog Timer"
    ],
    "exp": "The PLC doesn't turn on physical outputs instantly. It writes '1s' and '0s' into a memory table, waiting to update all physical outputs at once.",
    "cat": "PLC",
    "id": "T07_128"
  },
  {
    "q": "What happens during the 'Output Scan' step of the PLC cycle?",
    "a": "The PLC writes the values from the Output Image Register to the physical output modules",
    "opts": [
      "The PLC writes the values from the Output Image Register to the physical output modules",
      "It saves the program to a USB drive",
      "It resets the input register",
      "It reads the sensors again"
    ],
    "exp": "Once the math is done, the PLC simultaneously commands all the physical relays and transistors to open or close based on the memory table.",
    "cat": "PLC",
    "id": "T07_129"
  },
  {
    "q": "What is a typical scan time for a marine PLC?",
    "a": "1 to 50 milliseconds",
    "opts": [
      "1 microsecond strictly",
      "1 to 5 seconds",
      "1 to 50 milliseconds",
      "10 to 20 minutes"
    ],
    "exp": "A PLC loops through its entire program hundreds of times per second. 1-50ms is typical depending on program size.",
    "cat": "PLC",
    "id": "T07_130"
  },
  {
    "q": "What is the critical safety function of the Watchdog Timer in a PLC?",
    "a": "It forces the PLC into a safe state if the scan cycle hangs or crashes, preventing unknown output behavior",
    "opts": [
      "It counts the running hours of the main engine",
      "It delays the start of the program",
      "It monitors the battery voltage",
      "It forces the PLC into a safe state if the scan cycle hangs or crashes, preventing unknown output behavior"
    ],
    "exp": "The CPU must 'kick' the watchdog every cycle. If software freezes, the dog 'bites', physically cutting power to the outputs to fail-safe the machine.",
    "cat": "PLC",
    "id": "T07_131"
  },
  {
    "q": "What type of PLC memory stores the immutable operating system (firmware)?",
    "a": "ROM (Read Only Memory)",
    "opts": [
      "RAM",
      "ROM (Read Only Memory)",
      "EEPROM",
      "SD Card"
    ],
    "exp": "ROM is non-volatile and cannot be changed by the user. It holds the core instructions that make the PLC function as a controller.",
    "cat": "PLC",
    "id": "T07_132"
  },
  {
    "q": "What type of PLC memory stores volatile process data like current timer values and I/O states?",
    "a": "RAM (Random Access Memory)",
    "opts": [
      "ROM",
      "EEPROM",
      "RAM (Random Access Memory)",
      "Flash memory"
    ],
    "exp": "RAM is fast, working memory. It is volatile, meaning all data is lost instantly if power fails without a battery.",
    "cat": "PLC",
    "id": "T07_133"
  },
  {
    "q": "Why do many marine PLCs have a small lithium battery on the CPU card?",
    "a": "To maintain power to the RAM during ship blackouts, preventing the loss of user programs and retentive data",
    "opts": [
      "To maintain power to the RAM during ship blackouts, preventing the loss of user programs and retentive data",
      "To power the screen display",
      "To keep the cooling fan running",
      "To power the output relays"
    ],
    "exp": "Battery-backed RAM ensures that counter values, running hours, and sometimes the ladder logic itself survive a total power loss.",
    "cat": "PLC",
    "id": "T07_134"
  },
  {
    "q": "What catastrophic event happens if a PLC's RAM backup battery dies and the ship loses power?",
    "a": "The PLC loses its user program and process data, causing a total system failure upon reboot",
    "opts": [
      "The PLC automatically rewrites the program from ROM",
      "Only the clock stops working",
      "The PLC runs on solar power",
      "The PLC loses its user program and process data, causing a total system failure upon reboot"
    ],
    "exp": "A dead battery is a ticking time bomb. The next blackout wipes the RAM completely, turning the expensive PLC into a useless brick until reprogrammed.",
    "cat": "PLC",
    "id": "T07_135"
  },
  {
    "q": "Which memory type stores the user's ladder logic permanently without needing a battery?",
    "a": "EEPROM or Flash Memory",
    "opts": [
      "Cache memory",
      "Standard ROM",
      "EEPROM or Flash Memory",
      "Volatile RAM"
    ],
    "exp": "Electrically Erasable Programmable Read-Only Memory (EEPROM) holds the code safely forever, even if the battery dies.",
    "cat": "PLC",
    "id": "T07_136"
  },
  {
    "q": "What is the function of a Digital Input (DI) module?",
    "a": "It reads ON/OFF field signals (like switches) and provides electrical isolation (via optocouplers) to the CPU",
    "opts": [
      "It drives heavy contactors directly",
      "It reads ON/OFF field signals (like switches) and provides electrical isolation (via optocouplers) to the CPU",
      "It converts 4-20mA to numbers",
      "It controls VFD speeds"
    ],
    "exp": "DI cards look for 24V or 0V from field switches and pass that binary 1/0 status safely across a light gap to the processor.",
    "cat": "PLC",
    "id": "T07_137"
  },
  {
    "q": "What is the function of an Analogue Input (AI) module?",
    "a": "It converts continuous field signals (like 4-20mA from pressure sensors) into digital numbers via an ADC",
    "opts": [
      "It reads ON/OFF limits",
      "It sends 0-10V to control valves",
      "It converts continuous field signals (like 4-20mA from pressure sensors) into digital numbers via an ADC",
      "It acts as a watchdog timer"
    ],
    "exp": "AI cards use Analog-to-Digital Converters (ADC) to translate fluctuating voltages/currents into a 12-bit or 16-bit number the CPU can understand.",
    "cat": "PLC",
    "id": "T07_138"
  },
  {
    "q": "What type of module would be used to control the exact percentage opening of a steam valve?",
    "a": "Analogue Output (AO) module",
    "opts": [
      "Digital Output (DO) module",
      "Communication module",
      "Analogue Output (AO) module",
      "Digital Input (DI) module"
    ],
    "exp": "AO modules convert internal math numbers into a physical 4-20mA signal to drive variable actuators like control valves or VFD references.",
    "cat": "PLC",
    "id": "T07_139"
  },
  {
    "q": "What is the primary role of the CPU module in a PLC?",
    "a": "It executes the user program, handles memory, and manages the system clock and communications",
    "opts": [
      "It converts 220V to 24V",
      "It cools the other modules",
      "It executes the user program, handles memory, and manages the system clock and communications",
      "It connects directly to the ship's MSB"
    ],
    "exp": "The Central Processing Unit is the brain, doing all the Boolean logic, PID math, and orchestrating the I/O rack.",
    "cat": "PLC",
    "id": "T07_140"
  },
  {
    "q": "What common voltage is supplied to PLC digital I/O field devices in marine applications?",
    "a": "24V DC",
    "opts": [
      "220V AC",
      "24V DC",
      "5V DC",
      "12V AC"
    ],
    "exp": "24V DC is standard because it is safe (SELV) but has enough voltage to overcome contact resistance and minor electrical noise in long ship cables.",
    "cat": "PLC",
    "id": "T07_141"
  },
  {
    "q": "What component physically isolates a high-voltage field surge from destroying the delicate 5V CPU logic inside the PLC?",
    "a": "An Optocoupler on the I/O card",
    "opts": [
      "A Zener diode",
      "A heavy transformer",
      "A fast-acting fuse",
      "An Optocoupler on the I/O card"
    ],
    "exp": "The signal crosses from the field to the CPU entirely as a beam of infrared light, stopping any lethal voltage spikes from jumping across.",
    "cat": "PLC",
    "id": "T07_142"
  },
  {
    "q": "What is the fourth step in a typical PLC scan cycle, after the Output Scan?",
    "a": "Housekeeping (updating communications, kicking the watchdog, internal diagnostics)",
    "opts": [
      "Rebooting the CPU",
      "Writing to EEPROM",
      "Housekeeping (updating communications, kicking the watchdog, internal diagnostics)",
      "Closing the main breaker"
    ],
    "exp": "The CPU uses this tiny sliver of time to talk to SCADA screens, check for internal errors, and reset the safety watchdog timer.",
    "cat": "PLC",
    "id": "T07_143"
  },
  {
    "q": "If an engineer forces a PLC input 'ON' using software during troubleshooting, what happens?",
    "a": "The PLC uses a '1' in the input image table for that address, regardless of the physical switch's actual state",
    "opts": [
      "The physical switch physically moves to ON",
      "The PLC ignores the force and reads the real wire",
      "The entire rack reboots",
      "The PLC uses a '1' in the input image table for that address, regardless of the physical switch's actual state"
    ],
    "exp": "Forcing overrides the physical input scan, letting the engineer trick the logic into thinking a broken sensor is actually working.",
    "cat": "PLC",
    "id": "T07_144"
  },
  {
    "q": "Why are redundant Power Supply Units (PSU) used in critical marine PLCs (like PMS or Main Engine control)?",
    "a": "To ensure the PLC continues running seamlessly even if one power supply module fails",
    "opts": [
      "To double the voltage to 48V",
      "To ensure the PLC continues running seamlessly even if one power supply module fails",
      "To provide AC and DC power simultaneously",
      "To run the cooling fans faster"
    ],
    "exp": "High-availability racks use two PSUs fed from different sources (e.g., Main 220V and Emergency 24V) to prevent a single point of failure.",
    "cat": "PLC",
    "id": "T07_145"
  },
  {
    "q": "In which order does the PLC CPU execute the rungs in a standard Ladder Logic program?",
    "a": "Top to bottom, left to right",
    "opts": [
      "Randomly based on interrupt priority",
      "Bottom to top, right to left",
      "Top to bottom, left to right",
      "All rungs simultaneously"
    ],
    "exp": "The CPU reads the logic sequentially, scanning down the rungs and evaluating contacts left-to-right on each rung.",
    "cat": "PLC",
    "id": "T07_146"
  },
  {
    "q": "What happens if the PLC scan time becomes unusually long (e.g., due to an infinite loop in the code)?",
    "a": "The watchdog timer times out, throwing a hardware fault and failing the PLC to a safe state",
    "opts": [
      "The PLC speeds up the processor clock",
      "The I/O cards catch on fire",
      "It skips the output scan entirely",
      "The watchdog timer times out, throwing a hardware fault and failing the PLC to a safe state"
    ],
    "exp": "If code gets stuck, the watchdog isn't reset in time. It bites, shutting down operations to prevent a runaway machine.",
    "cat": "PLC",
    "id": "T07_147"
  },
  {
    "q": "What does a Digital Output (DO) module with 'Relay' outputs offer compared to 'Transistor' outputs?",
    "a": "Relay outputs can handle higher currents and AC/DC voltages, but switch slower and wear out mechanically",
    "opts": [
      "Relay outputs are purely for high frequency PWM",
      "Transistor outputs wear out faster",
      "Relay outputs can handle higher currents and AC/DC voltages, but switch slower and wear out mechanically",
      "Relay outputs switch much faster"
    ],
    "exp": "Physical relays provide massive isolation and can switch 220V AC, but transistors are immortal solid-state devices ideal for fast 24V DC switching.",
    "cat": "PLC",
    "id": "T07_148"
  },
  {
    "q": "What is the primary function of a Communication module in a PLC rack?",
    "a": "To exchange data with other PLCs, VFDs, or SCADA servers via fieldbus networks like Modbus or Profibus",
    "opts": [
      "To power the input cards",
      "To store the user program",
      "To exchange data with other PLCs, VFDs, or SCADA servers via fieldbus networks like Modbus or Profibus",
      "To connect directly to analog sensors"
    ],
    "exp": "These modules act as translators, linking the PLC CPU to the ship's wider ethernet or serial data networks.",
    "cat": "PLC",
    "id": "T07_149"
  },
  {
    "q": "What does the 'I/O Image Table' consist of?",
    "a": "A block of RAM where the instantaneous 1 or 0 state of every physical input and output is stored for the scan cycle",
    "opts": [
      "A printed wiring diagram of the cabinet",
      "A block of RAM where the instantaneous 1 or 0 state of every physical input and output is stored for the scan cycle",
      "A graphical display on the HMI screen",
      "The ROM memory holding the firmware"
    ],
    "exp": "The image table is the PLC's internal 'scratchpad' where it freezes the state of the real world to do its math consistently.",
    "cat": "PLC",
    "id": "T07_150"
  },
  {
    "q": "If a physical limit switch chatters (bounces) during the 'Program Execution' step, does it affect the logic running at that exact millisecond?",
    "a": "No, because the logic is using the frozen state from the Input Image Table captured during the Input Scan",
    "opts": [
      "No, because the logic is using the frozen state from the Input Image Table captured during the Input Scan",
      "Yes, the output will chatter instantly",
      "No, because PLCs ignore limit switches",
      "Yes, the logic will immediately crash"
    ],
    "exp": "The snapshot nature of the scan cycle makes the PLC immune to microsecond bounces that happen while the math is running.",
    "cat": "PLC",
    "id": "T07_151"
  },
  {
    "q": "What happens when a PLC is switched from RUN mode to STOP mode?",
    "a": "Program execution halts and all outputs are forced to their default safe state (usually OFF)",
    "opts": [
      "The program is erased from EEPROM",
      "Program execution halts and all outputs are forced to their default safe state (usually OFF)",
      "All outputs are forced ON",
      "The PLC continues running but ignores inputs"
    ],
    "exp": "STOP mode is for downloading new code or maintenance. It physically disables the output scan to keep the machinery dead.",
    "cat": "PLC",
    "id": "T07_152"
  },
  {
    "q": "What is the typical visual indication that a PLC CPU has suffered a hard failure or watchdog timeout?",
    "a": "A red 'SF' (System Fault) or 'ERR' LED lights up, and the 'RUN' LED goes out",
    "opts": [
      "A red 'SF' (System Fault) or 'ERR' LED lights up, and the 'RUN' LED goes out",
      "The 24V power supply sparks",
      "All green LEDs blink simultaneously",
      "The PLC emits a loud siren"
    ],
    "exp": "Diagnostic LEDs on the CPU instantly alert the ETO to processor-level crashes.",
    "cat": "PLC",
    "id": "T07_153"
  },
  {
    "q": "Which of the following data types would an Analog Input card process?",
    "a": "A 12-bit integer representing a 4-20mA pressure signal",
    "opts": [
      "An IP address",
      "A single Boolean 1 or 0",
      "A string of text characters",
      "A 12-bit integer representing a 4-20mA pressure signal"
    ],
    "exp": "Analog cards deal with WORDS (16-bit integers), whereas digital cards deal with BITS (1s and 0s).",
    "cat": "PLC",
    "id": "T07_154"
  },
  {
    "q": "Why is it important to replace a PLC battery while the PLC is still powered ON?",
    "a": "If you remove the battery while power is OFF, the RAM immediately wipes and the program is lost",
    "opts": [
      "It is illegal to turn off the PLC",
      "The new battery won't charge otherwise",
      "If you remove the battery while power is OFF, the RAM immediately wipes and the program is lost",
      "The battery will explode if not under load"
    ],
    "exp": "Swapping the battery 'hot' ensures the main 24V supply keeps the RAM alive during the few seconds the battery is disconnected.",
    "cat": "PLC",
    "id": "T07_155"
  },
  {
    "q": "In a PLC, what is the function of a DAC (Digital to Analog Converter)?",
    "a": "It converts the CPU's internal digital numbers into continuous 4-20mA or 0-10V signals for an Analog Output module",
    "opts": [
      "It changes AC power to DC power",
      "It converts the CPU's internal digital numbers into continuous 4-20mA or 0-10V signals for an Analog Output module",
      "It converts 4-20mA signals into numbers",
      "It translates ladder logic into C++"
    ],
    "exp": "The DAC translates the PLC's math back into physical voltages/currents to move actuators.",
    "cat": "PLC",
    "id": "T07_156"
  },
  {
    "q": "What is Ladder Diagram (LD) programming?",
    "a": "A graphical PLC programming language that visually resembles hardwired electrical relay logic diagrams",
    "opts": [
      "A graphical PLC programming language that visually resembles hardwired electrical relay logic diagrams",
      "A mechanical drawing of the ship's ladders",
      "A list of assembly-level instructions",
      "A text-based language using IF/THEN statements"
    ],
    "exp": "Ladder logic was designed so industrial electricians could transition from wiring physical relays to programming PLCs without learning computer code.",
    "cat": "LADDER",
    "id": "T07_157"
  },
  {
    "q": "In a Ladder Diagram, what do the vertical lines on the left and right represent?",
    "a": "The power supply rails (Live and Neutral / 24V and 0V)",
    "opts": [
      "The physical walls of the panel",
      "The start and end of the scan cycle",
      "The input and output modules",
      "The power supply rails (Live and Neutral / 24V and 0V)"
    ],
    "exp": "Logic flows horizontally from the left power rail to the right power rail, simulating electrical current flow.",
    "cat": "LADDER",
    "id": "T07_158"
  },
  {
    "q": "What does a horizontal line containing contacts and a coil represent in Ladder Logic?",
    "a": "A Rung",
    "opts": [
      "A Branch",
      "A Rail",
      "A Rung",
      "A Node"
    ],
    "exp": "Like the steps on a physical ladder, each horizontal 'rung' executes a single logical operation.",
    "cat": "LADDER",
    "id": "T07_159"
  },
  {
    "q": "How does a Normally Open (NO) contact behave in a PLC program?",
    "a": "It passes power (is TRUE) only when its corresponding memory bit is 1",
    "opts": [
      "It blocks power when its bit is 1",
      "It physically moves a switch in the field",
      "It is always closed",
      "It passes power (is TRUE) only when its corresponding memory bit is 1"
    ],
    "exp": "If the field switch is pressed (giving 24V), the memory bit goes to 1, and the NO contact closes on screen, allowing logic to flow.",
    "cat": "LADDER",
    "id": "T07_160"
  },
  {
    "q": "How does a Normally Closed (NC) contact behave in a PLC program?",
    "a": "It passes power (is TRUE) only when its corresponding memory bit is 0",
    "opts": [
      "It passes power (is TRUE) only when its corresponding memory bit is 0",
      "It acts as a final output",
      "It randomly inverts signals",
      "It passes power when its bit is 1"
    ],
    "exp": "An NC contact INVERTS logic. If the field switch is NOT pressed (0V = bit 0), the NC contact is closed, allowing logic to flow.",
    "cat": "LADDER",
    "id": "T07_161"
  },
  {
    "q": "What is the standard symbol for a Normally Open contact in Ladder Logic?",
    "a": "[  ]",
    "opts": [
      "( S )",
      "(  )",
      "[  ]",
      "[ / ]"
    ],
    "exp": "Two parallel vertical lines with a gap represent an open switch.",
    "cat": "LADDER",
    "id": "T07_162"
  },
  {
    "q": "What is the standard symbol for a Normally Closed contact in Ladder Logic?",
    "a": "[ / ]",
    "opts": [
      "( R )",
      "[ / ]",
      "[  ]",
      "(  )"
    ],
    "exp": "The diagonal slash through the contact indicates it is normally closed (passing power when 0).",
    "cat": "LADDER",
    "id": "T07_163"
  },
  {
    "q": "What does an Output Coil (  ) do in Ladder Logic?",
    "a": "It turns ON (bit=1) when the rung conditions preceding it are all TRUE, and turns OFF when they become FALSE",
    "opts": [
      "It stores integer values",
      "It counts the number of times it is activated",
      "It turns ON (bit=1) when the rung conditions preceding it are all TRUE, and turns OFF when they become FALSE",
      "It permanently latches ON until a reset command is given"
    ],
    "exp": "A standard coil only stays energized as long as power flows to it across the rung.",
    "cat": "LADDER",
    "id": "T07_164"
  },
  {
    "q": "What does a SET (Latch) Coil do?",
    "a": "It turns ON when the rung is TRUE, and STAYS ON permanently even if the rung goes FALSE",
    "opts": [
      "It turns ON when the rung is TRUE, and STAYS ON permanently even if the rung goes FALSE",
      "It turns off immediately",
      "It reverses the logic of the entire program",
      "It flashes on and off"
    ],
    "exp": "A SET instruction sets the memory bit to 1 and leaves it there. It remembers the event happened.",
    "cat": "LADDER",
    "id": "T07_165"
  },
  {
    "q": "How do you turn off a memory bit that was activated by a SET coil?",
    "a": "By activating a corresponding RESET (Unlatch) coil linked to the same address",
    "opts": [
      "By pressing the emergency stop",
      "By turning the SET coil on again",
      "By rebooting the PLC",
      "By activating a corresponding RESET (Unlatch) coil linked to the same address"
    ],
    "exp": "Latch/Unlatch (Set/Reset) coils always work in pairs to manage sticky logic states.",
    "cat": "LADDER",
    "id": "T07_166"
  },
  {
    "q": "If you place three NO contacts in SERIES on a rung, what logic gate does this represent?",
    "a": "AND Gate",
    "opts": [
      "XOR Gate",
      "NOT Gate",
      "OR Gate",
      "AND Gate"
    ],
    "exp": "In series, Contact A AND Contact B AND Contact C must all be closed for power to reach the coil.",
    "cat": "LADDER",
    "id": "T07_167"
  },
  {
    "q": "If you place two NO contacts in PARALLEL (on branches) on a rung, what logic gate does this represent?",
    "a": "OR Gate",
    "opts": [
      "OR Gate",
      "NAND Gate",
      "NOR Gate",
      "AND Gate"
    ],
    "exp": "Power can flow through the top branch OR the bottom branch to reach the coil.",
    "cat": "LADDER",
    "id": "T07_168"
  },
  {
    "q": "In a motor start interlock rung: [Inlet Valve Open] --- [No Overload] --- [Start Button] --- (Motor Coil). What must occur for the motor to run?",
    "a": "All three conditions must be TRUE simultaneously",
    "opts": [
      "Any one of the three conditions being TRUE will start the motor",
      "Only the Start Button needs to be pressed",
      "All three conditions must be TRUE simultaneously",
      "The inlet valve must be closed"
    ],
    "exp": "Series contacts form permissive interlocks. If the overload is tripped (FALSE), the rung is broken and pressing Start does nothing.",
    "cat": "LADDER",
    "id": "T07_169"
  },
  {
    "q": "Why is Ladder Diagram the most widely used programming language on ships?",
    "a": "It looks exactly like physical relay wiring diagrams, making it easy for marine electricians to read and troubleshoot",
    "opts": [
      "It runs faster than C++",
      "It takes up less memory",
      "It looks exactly like physical relay wiring diagrams, making it easy for marine electricians to read and troubleshoot",
      "It is the only language allowed by SOLAS"
    ],
    "exp": "Familiarity is key. An ETO who understands hardwired contactors can instantly understand a ladder logic screen.",
    "cat": "LADDER",
    "id": "T07_170"
  },
  {
    "q": "Which IEC 61131-3 language uses graphical boxes connected by lines to show data flow (commonly used for PID loops)?",
    "a": "Function Block Diagram (FBD)",
    "opts": [
      "Ladder Diagram (LD)",
      "Instruction List (IL)",
      "Function Block Diagram (FBD)",
      "Structured Text (ST)"
    ],
    "exp": "FBD connects pre-programmed 'blocks' (like timers, math functions, PIDs) together with wires, popular in process control and DCS systems.",
    "cat": "LADDER",
    "id": "T07_171"
  },
  {
    "q": "Which IEC 61131-3 language is a high-level, text-based language resembling Pascal or C (uses IF/THEN loops)?",
    "a": "Structured Text (ST)",
    "opts": [
      "Sequential Function Chart (SFC)",
      "Structured Text (ST)",
      "Function Block Diagram (FBD)",
      "Ladder Diagram (LD)"
    ],
    "exp": "ST is used for complex math, data arrays, and algorithms that are too messy to draw in Ladder.",
    "cat": "LADDER",
    "id": "T07_172"
  },
  {
    "q": "Which IEC 61131-3 language is designed specifically to map out multi-step state machines (like cargo loading sequences)?",
    "a": "Sequential Function Chart (SFC)",
    "opts": [
      "Ladder Diagram (LD)",
      "Sequential Function Chart (SFC)",
      "Structured Text (ST)",
      "Instruction List (IL)"
    ],
    "exp": "SFC uses 'Steps' and 'Transitions'. It perfectly visualises step-by-step sequential operations.",
    "cat": "LADDER",
    "id": "T07_173"
  },
  {
    "q": "What is the primary disadvantage of hardwired Relay Logic compared to PLC Ladder Logic?",
    "a": "To change the logic behaviour, you must physically rewire the panel and add new components",
    "opts": [
      "It requires constant software updates",
      "It is susceptible to viruses",
      "It cannot handle 24V DC",
      "To change the logic behaviour, you must physically rewire the panel and add new components"
    ],
    "exp": "Hardwired panels are rigid. PLC logic is changed instantly via software without touching a screwdriver.",
    "cat": "LADDER",
    "id": "T07_174"
  },
  {
    "q": "When viewing Ladder Logic 'online' via a laptop connected to the PLC, what happens visually?",
    "a": "Contacts and coils highlight/change color in real-time when power passes through them, allowing instant fault finding",
    "opts": [
      "The screen prints out error codes",
      "The program stops running to allow viewing",
      "Contacts and coils highlight/change color in real-time when power passes through them, allowing instant fault finding",
      "The screen shows a 3D model of the ship"
    ],
    "exp": "Online monitoring is a massive troubleshooting advantage. If a motor won't start, the ETO just looks at the rung to see which specific interlock contact is not glowing.",
    "cat": "LADDER",
    "id": "T07_175"
  },
  {
    "q": "If a physical Stop Button is wired Normally Closed (NC) in the field, what type of PLC contact is typically used in the Ladder rung to keep the machine running?",
    "a": "Normally Open [ ] contact (because the physical NC switch provides continuous 24V = bit 1 = contact closes)",
    "opts": [
      "A SET coil",
      "A RESET coil",
      "Normally Open [ ] contact (because the physical NC switch provides continuous 24V = bit 1 = contact closes)",
      "Normally Closed [ / ] contact"
    ],
    "exp": "Because the physical button is NC, it sends 24V to the input card normally. A 1 in memory closes an NO contact on screen. If pressed, voltage drops to 0, contact opens, machine stops.",
    "cat": "LADDER",
    "id": "T07_176"
  },
  {
    "q": "How can an ETO bypass a faulty pressure switch using PLC software in an emergency?",
    "a": "By using the 'Force' function to override the input bit to a '1' in the logic",
    "opts": [
      "By using the 'Force' function to override the input bit to a '1' in the logic",
      "By hitting the reset button on the CPU",
      "By physically shorting the 220V bus",
      "By rewriting the whole program in C++"
    ],
    "exp": "Forcing is a temporary, highly regulated software jumper that ignores the broken physical wire and tells the logic the switch is 'ON'.",
    "cat": "LADDER",
    "id": "T07_177"
  },
  {
    "q": "What happens if you use the same Output Coil address (e.g., Q0.0) on two different rungs in a ladder program?",
    "a": "Double-coil syndrome: The PLC will only execute the state of the LAST rung scanned, causing erratic behaviour",
    "opts": [
      "It acts as an OR gate automatically",
      "Double-coil syndrome: The PLC will only execute the state of the LAST rung scanned, causing erratic behaviour",
      "The PLC compiles faster",
      "The voltage doubles at the physical output"
    ],
    "exp": "The CPU scans top-to-bottom. Rung 1 turns the coil ON. Rung 10 turns it OFF. The physical output scan only sees the OFF state. A single coil should only appear once.",
    "cat": "LADDER",
    "id": "T07_178"
  },
  {
    "q": "What does IEC 61131-3 define?",
    "a": "The international standard for programmable logic controller programming languages",
    "opts": [
      "The rules for emergency generator starting",
      "The international standard for programmable logic controller programming languages",
      "The standard for marine ethernet cables",
      "The required voltage for marine switchboards"
    ],
    "exp": "It standardizes LD, FBD, ST, IL, and SFC so programmers have a consistent experience across different brands (Siemens, Allen-Bradley, Mitsubishi).",
    "cat": "LADDER",
    "id": "T07_179"
  },
  {
    "q": "How is a 'One-Shot' (Rising Edge) instruction used in ladder logic?",
    "a": "It passes power for exactly one scan cycle when the input transitions from FALSE to TRUE",
    "opts": [
      "It passes power for exactly one scan cycle when the input transitions from FALSE to TRUE",
      "It measures the temperature of the CPU",
      "It permanently latches the output",
      "It delays the output by 1 second"
    ],
    "exp": "Rising edge contacts trigger a brief momentary pulse, useful for incrementing counters exactly once per button press.",
    "cat": "LADDER",
    "id": "T07_180"
  },
  {
    "q": "What is the primary function of a TON (On-Delay) timer?",
    "a": "It delays turning ON an output until the input has been continuously TRUE for the preset time",
    "opts": [
      "It delays turning ON an output until the input has been continuously TRUE for the preset time",
      "It accumulates running hours across multiple starts",
      "It keeps an output ON for exactly 5 seconds",
      "It delays turning OFF an output"
    ],
    "exp": "TON requires the enable signal to stay high. If the preset is 10s, you must hold the button for 10s before the output fires.",
    "cat": "TIMERS",
    "id": "T07_181"
  },
  {
    "q": "What happens in a TON (On-Delay) timer if the input goes OFF before the preset time is reached?",
    "a": "The timer resets its accumulated time to zero immediately, and the output stays OFF",
    "opts": [
      "The timer pauses and holds its value",
      "The timer resets its accumulated time to zero immediately, and the output stays OFF",
      "The output turns ON instantly",
      "The timer continues counting in the background"
    ],
    "exp": "A standard TON loses all its progress if the enable signal blinks off for even a millisecond.",
    "cat": "TIMERS",
    "id": "T07_182"
  },
  {
    "q": "Which shipboard scenario perfectly describes a TON timer application?",
    "a": "Ensuring an engine room ventilation fan runs for 5 minutes BEFORE allowing the lube oil pump to start",
    "opts": [
      "Keeping a cooling fan running after the engine stops",
      "Ensuring an engine room ventilation fan runs for 5 minutes BEFORE allowing the lube oil pump to start",
      "Triggering a quick 2-second purge blast",
      "Counting the total running hours of a pump"
    ],
    "exp": "The start command energizes the TON. After a 5-minute ON-delay, the TON output gives permission for the pump to start.",
    "cat": "TIMERS",
    "id": "T07_183"
  },
  {
    "q": "What is the primary function of a TOF (Off-Delay) timer?",
    "a": "It turns the output ON immediately with the input, but delays turning it OFF until after the input is removed",
    "opts": [
      "It delays turning the output ON",
      "It turns the output ON immediately with the input, but delays turning it OFF until after the input is removed",
      "It latches the output permanently OFF",
      "It counts downwards from 100 to 0"
    ],
    "exp": "TOF extends the life of a signal. When the command disappears, the TOF starts counting to keep the output alive for a bit longer.",
    "cat": "TIMERS",
    "id": "T07_184"
  },
  {
    "q": "When does a TOF (Off-Delay) timer actually start counting its time?",
    "a": "At the exact moment the input signal transitions from ON to OFF",
    "opts": [
      "At the exact moment the input signal transitions from ON to OFF",
      "When the input signal transitions from OFF to ON",
      "When the PLC is powered on",
      "When the output reaches its limit"
    ],
    "exp": "The timing action is triggered by the falling edge of the command signal.",
    "cat": "TIMERS",
    "id": "T07_185"
  },
  {
    "q": "What happens if the input to a TOF timer goes back ON while it is in the middle of counting down its delay?",
    "a": "The timer resets its accumulated time to zero, and the output remains ON continuously",
    "opts": [
      "The timer ignores the input and finishes counting",
      "The timer resets its accumulated time to zero, and the output remains ON continuously",
      "The PLC throws a fault code",
      "The output immediately turns OFF"
    ],
    "exp": "Refreshing the input signal aborts the shut-down sequence, keeping the output alive and waiting for the next OFF command.",
    "cat": "TIMERS",
    "id": "T07_186"
  },
  {
    "q": "Which shipboard scenario perfectly describes a TOF timer application?",
    "a": "Keeping an auxiliary cooling fan running for 10 minutes AFTER the main engine is stopped to dissipate residual heat",
    "opts": [
      "Flashing a warning beacon",
      "Keeping an auxiliary cooling fan running for 10 minutes AFTER the main engine is stopped to dissipate residual heat",
      "Delaying the start of a heavy motor",
      "Tracking the maintenance schedule"
    ],
    "exp": "The engine stop command triggers the TOF, which keeps the fan contactor pulled in for an additional 10-minute cooldown.",
    "cat": "TIMERS",
    "id": "T07_187"
  },
  {
    "q": "What is an RTO (Retentive On-Delay Timer)?",
    "a": "A timer that accumulates time when the input is ON, and holds (retains) its value when the input goes OFF",
    "opts": [
      "A timer that always resets to zero",
      "A timer that pulses continuously",
      "A timer that runs backwards",
      "A timer that accumulates time when the input is ON, and holds (retains) its value when the input goes OFF"
    ],
    "exp": "Unlike a TON, an RTO remembers its progress. If you run it for 2 mins and stop, it stays at 2 mins. Running it again starts from 2 mins.",
    "cat": "TIMERS",
    "id": "T07_188"
  },
  {
    "q": "How is an RTO (Retentive Timer) reset back to zero?",
    "a": "It must be cleared using a separate, specific RESET instruction triggered by another logic condition",
    "opts": [
      "It resets automatically when the input drops",
      "It resets when the count reaches 100",
      "It must be cleared using a separate, specific RESET instruction triggered by another logic condition",
      "By removing the PLC battery"
    ],
    "exp": "Because it refuses to forget its value on input loss, a deliberate software Reset command is the only way to clear it.",
    "cat": "TIMERS",
    "id": "T07_189"
  },
  {
    "q": "What is the most common use for an RTO timer on a ship?",
    "a": "Tracking the cumulative running hours of machinery for the Planned Maintenance System (PMS)",
    "opts": [
      "Tracking the cumulative running hours of machinery for the Planned Maintenance System (PMS)",
      "Sounding a short alarm horn",
      "Delaying a motor start",
      "Pulsing a solenoid valve"
    ],
    "exp": "The RTO adds up all the short runs and long runs over weeks/months to trigger an alarm exactly when 500 hours of actual running time is reached.",
    "cat": "TIMERS",
    "id": "T07_190"
  },
  {
    "q": "What does a TP (Pulse Timer) do?",
    "a": "When triggered, it turns its output ON for an exact, fixed preset time, regardless of how long the input stays ON",
    "opts": [
      "It counts the number of times a button is pressed",
      "It delays the output indefinitely",
      "It pulses the output ON and OFF continuously",
      "When triggered, it turns its output ON for an exact, fixed preset time, regardless of how long the input stays ON"
    ],
    "exp": "A Pulse Timer acts like a one-shot. A tiny flick of the button produces a perfect 5-second output pulse.",
    "cat": "TIMERS",
    "id": "T07_191"
  },
  {
    "q": "What happens if a TP (Pulse Timer) is triggered with a 5-second preset, but the input drops after 1 second?",
    "a": "The output remains ON for the full 5 seconds and then turns OFF",
    "opts": [
      "The timer freezes at 1 second",
      "The output remains ON for the full 5 seconds and then turns OFF",
      "The output turns OFF after 1 second",
      "The output latches permanently ON"
    ],
    "exp": "Once a TP is fired, it ignores all further input changes until it has completed delivering its fixed-duration pulse.",
    "cat": "TIMERS",
    "id": "T07_192"
  },
  {
    "q": "What is a CTU instruction in a PLC?",
    "a": "Count-Up: It increments its accumulated value by 1 every time its input transitions from OFF to ON",
    "opts": [
      "Count-Down: It decreases its value",
      "Current-Transformer-Unit: It measures amps",
      "Count-Time-Unit: It measures seconds",
      "Count-Up: It increments its accumulated value by 1 every time its input transitions from OFF to ON"
    ],
    "exp": "A CTU counts rising edges (events). When the count hits the preset, the counter's output bit activates.",
    "cat": "TIMERS",
    "id": "T07_193"
  },
  {
    "q": "What is a CTD instruction?",
    "a": "Count-Down: It decreases its value by 1 on each input pulse, usually activating an output when it hits zero",
    "opts": [
      "Constant-Time-Delay: It pauses logic",
      "Continuous-Track-Data: It records values",
      "Count-Up-Double: It counts by twos",
      "Count-Down: It decreases its value by 1 on each input pulse, usually activating an output when it hits zero"
    ],
    "exp": "CTD starts at a preset batch size (e.g., 100) and counts backwards as events happen.",
    "cat": "TIMERS",
    "id": "T07_194"
  },
  {
    "q": "If a ship's PLC needs to track exactly how many times a high-level bilge alarm has triggered this month, what instruction is used?",
    "a": "CTU (Count Up)",
    "opts": [
      "TON (On-Delay Timer)",
      "CTU (Count Up)",
      "RTO (Retentive Timer)",
      "PID block"
    ],
    "exp": "The CTU increments exactly once every time the float switch trips, keeping a permanent tally.",
    "cat": "TIMERS",
    "id": "T07_195"
  },
  {
    "q": "How does a CTUD (Count Up/Down) instruction work?",
    "a": "It has two separate inputs: one increments the count and the other decrements the count",
    "opts": [
      "It automatically counts up to 10 and then back to 0",
      "It counts time instead of events",
      "It multiplies the count by two",
      "It has two separate inputs: one increments the count and the other decrements the count"
    ],
    "exp": "Used for tracking inventory (like cars on a ferry). An entry sensor counts UP, an exit sensor counts DOWN. The total is the current occupancy.",
    "cat": "TIMERS",
    "id": "T07_196"
  },
  {
    "q": "What happens if the main power to the PLC fails while a standard TON timer is counting?",
    "a": "The timer's accumulated value is lost, and it starts from zero on reboot",
    "opts": [
      "The timer saves its value permanently to ROM",
      "The timer's accumulated value is lost, and it starts from zero on reboot",
      "The timer finishes its count on battery power",
      "The PLC explodes"
    ],
    "exp": "TONs use volatile RAM and are non-retentive. Loss of enable (or power) clears them.",
    "cat": "TIMERS",
    "id": "T07_197"
  },
  {
    "q": "What defines the 'Time Base' or 'Resolution' of a PLC timer?",
    "a": "The duration of each 'tick' it counts (e.g., 0.1 seconds, 0.01 seconds)",
    "opts": [
      "The duration of each 'tick' it counts (e.g., 0.1 seconds, 0.01 seconds)",
      "The maximum limit of the timer",
      "The physical battery powering the clock",
      "The time it takes to scan the ladder rung"
    ],
    "exp": "If the time base is 0.1s, entering a preset of 50 means the timer runs for 5.0 seconds.",
    "cat": "TIMERS",
    "id": "T07_198"
  },
  {
    "q": "What is the primary problem with Single-Element (Level only) boiler feedwater control?",
    "a": "It is severely affected by the Swell/Shrink effect during rapid load changes, causing incorrect valve responses",
    "opts": [
      "It is severely affected by the Swell/Shrink effect during rapid load changes, causing incorrect valve responses",
      "It cannot handle high pressures",
      "It requires too many sensors",
      "It uses too much electrical power"
    ],
    "exp": "A single float switch is fooled when steam bubbles expand the water volume, reacting to the illusion rather than the actual mass of water.",
    "cat": "BOILER",
    "id": "T07_199"
  },
  {
    "q": "What is the 'Swell' effect in a steam boiler?",
    "a": "When steam demand suddenly increases, pressure drops, causing steam bubbles to expand rapidly and making the drum level APPEAR to rise",
    "opts": [
      "When the feed pump injects too much water",
      "When steam demand suddenly increases, pressure drops, causing steam bubbles to expand rapidly and making the drum level APPEAR to rise",
      "When cold water causes the drum to physically expand",
      "When fuel combustion creates a shockwave"
    ],
    "exp": "The mass of water is shrinking (being boiled off), but the volume of the froth expands. A simple sensor reads a high level and disastrously closes the feed valve.",
    "cat": "BOILER",
    "id": "T07_200"
  },
  {
    "q": "What is the 'Shrink' effect in a steam boiler?",
    "a": "When steam demand drops, pressure rises, crushing steam bubbles and causing the drum level to instantly collapse, despite no water being lost",
    "opts": [
      "When the feed valve closes entirely",
      "When the boiler cools down overnight",
      "When the hull contracts in cold water",
      "When steam demand drops, pressure rises, crushing steam bubbles and causing the drum level to instantly collapse, despite no water being lost"
    ],
    "exp": "The false low-level reading causes a single-element controller to flood the boiler with excess cold water just when demand has dropped.",
    "cat": "BOILER",
    "id": "T07_201"
  },
  {
    "q": "What are the three variables measured in a 3-Element Boiler Feedwater Control system?",
    "a": "Steam Flow, Feedwater Flow, and Drum Level",
    "opts": [
      "Fuel Flow, Steam Pressure, and Exhaust Temp",
      "Steam Flow, Fuel Flow, and Air Flow",
      "Drum Level, Feed Pump RPM, and Feed Pressure",
      "Steam Flow, Feedwater Flow, and Drum Level"
    ],
    "exp": "By measuring what leaves (Steam Flow) and what enters (Feedwater Flow), the system balances mass perfectly, while Level acts as a long-term trim.",
    "cat": "BOILER",
    "id": "T07_202"
  },
  {
    "q": "In 3-Element control, which measurement acts as the primary Feedforward (anticipatory) signal?",
    "a": "Steam Flow",
    "opts": [
      "Feedwater Flow",
      "Steam Temperature",
      "Steam Flow",
      "Drum Level"
    ],
    "exp": "When steam flow suddenly spikes, the controller instantly knows water is leaving. It immediately opens the feed valve BEFORE the drum level has a chance to react.",
    "cat": "BOILER",
    "id": "T07_203"
  },
  {
    "q": "In 3-Element control, what is the role of Feedwater Flow?",
    "a": "It is a feedforward confirmation signal, ensuring the amount of water entering exactly matches the steam leaving",
    "opts": [
      "It acts as the primary feedback loop",
      "It is a feedforward confirmation signal, ensuring the amount of water entering exactly matches the steam leaving",
      "It prevents fuel overheating",
      "It trims the boiler pressure"
    ],
    "exp": "If the feed pump pressure dips, the feedwater flow meter notices immediately and commands the valve to open wider to maintain the required mass flow.",
    "cat": "BOILER",
    "id": "T07_204"
  },
  {
    "q": "In 3-Element control, what is the role of the Drum Level measurement?",
    "a": "It acts as a slow feedback trim to correct any minor drift or inaccuracies over time",
    "opts": [
      "It is completely ignored",
      "It is the fastest acting element",
      "It acts as a slow feedback trim to correct any minor drift or inaccuracies over time",
      "It directly controls the feed pump speed"
    ],
    "exp": "Because sensors aren't perfect, matching flow-in to flow-out might slowly drift. The drum level sensor nudges the balance back to dead center.",
    "cat": "BOILER",
    "id": "T07_205"
  },
  {
    "q": "How does 3-Element control defeat the Swell/Shrink effect?",
    "a": "The controller prioritizes the Steam Flow demand signal over the misleading Level signal during rapid load changes",
    "opts": [
      "It uses stronger metal in the drum",
      "It disables the feed pump completely",
      "The controller prioritizes the Steam Flow demand signal over the misleading Level signal during rapid load changes",
      "It injects chemicals to destroy the bubbles"
    ],
    "exp": "Even if Swell makes the float read 'High Level', the massive Steam Flow signal screams 'We need water NOW!', forcing the valve to open appropriately.",
    "cat": "BOILER",
    "id": "T07_206"
  },
  {
    "q": "What is the typical target temperature range for Fuel Oil (HFO) before injection into a main engine?",
    "a": "120°C to 150°C (depending on fuel viscosity)",
    "opts": [
      "Ambient temperature",
      "200°C to 250°C",
      "120°C to 150°C (depending on fuel viscosity)",
      "50°C to 70°C"
    ],
    "exp": "HFO must be heated to achieve the correct kinematic viscosity (usually 10-15 cSt) for proper atomization at the injectors.",
    "cat": "BOILER",
    "id": "T07_207"
  },
  {
    "q": "What type of controller is standard for Fuel Oil Temperature control?",
    "a": "PI (Proportional + Integral)",
    "opts": [
      "PD (Proportional + Derivative)",
      "P-only",
      "Open Loop",
      "PI (Proportional + Integral)"
    ],
    "exp": "Temperature processes are sluggish. PI provides accurate, zero-offset control. Adding Derivative would only amplify sensor noise without benefit.",
    "cat": "BOILER",
    "id": "T07_208"
  },
  {
    "q": "What is the Fail-Safe position of the steam heating control valve for an HFO system?",
    "a": "Fail Close (Air to Open - ATO)",
    "opts": [
      "Fail Close (Air to Open - ATO)",
      "Fail Last Position",
      "Fail Open (Air to Close - ATC)",
      "Fail at 50%"
    ],
    "exp": "If the control signal or instrument air fails, the valve springs shut. Boiling the fuel oil uncontrollably poses a massive fire and gas-locking risk.",
    "cat": "BOILER",
    "id": "T07_209"
  },
  {
    "q": "In a cascade setup for HFO temperature, the outer controller regulates Temperature. What does the inner controller regulate?",
    "a": "Steam Flow (or steam pressure to the heater)",
    "opts": [
      "Fuel Flow",
      "Viscosity directly",
      "Cooling Water Flow",
      "Steam Flow (or steam pressure to the heater)"
    ],
    "exp": "The fast inner loop maintains exact steam flow. If boiler pressure wavers, it opens/closes the valve to compensate before the HFO cools down.",
    "cat": "BOILER",
    "id": "T07_210"
  },
  {
    "q": "What sensor typically measures HFO temperature?",
    "a": "PT100 RTD or Type K Thermocouple",
    "opts": [
      "Float switch",
      "PT100 RTD or Type K Thermocouple",
      "Capacitive probe",
      "Optical encoder"
    ],
    "exp": "PT100 (Platinum Resistance Temperature Detector) provides highly linear and accurate readings up to 200°C+.",
    "cat": "BOILER",
    "id": "T07_211"
  },
  {
    "q": "What converts the 4-20mA signal from the HFO temperature controller into a physical force to move the steam valve?",
    "a": "An I/P (Current to Pressure) converter controlling instrument air",
    "opts": [
      "A hydraulic ram",
      "An electric servo motor",
      "A variable frequency drive",
      "An I/P (Current to Pressure) converter controlling instrument air"
    ],
    "exp": "Most marine steam valves are pneumatically actuated. The I/P translates the PLC's electrical math into 3-15 psi air pressure.",
    "cat": "BOILER",
    "id": "T07_212"
  },
  {
    "q": "What does a Power Management System (PMS) do when total generator load exceeds 85-90% of running capacity?",
    "a": "Auto-Start: It automatically starts a standby generator, synchronizes it, and connects it to share the load",
    "opts": [
      "Auto-Start: It automatically starts a standby generator, synchronizes it, and connects it to share the load",
      "It slows down the main engine",
      "It trips the main breaker instantly",
      "It injects more fuel into the running generator"
    ],
    "exp": "PMS ensures there is always enough spinning reserve to handle load spikes without blacking out.",
    "cat": "PMS",
    "id": "T07_213"
  },
  {
    "q": "What does a PMS do when total generator load falls below a low threshold (e.g., 30-40%)?",
    "a": "Auto-Stop: It unloads and disconnects one generator, stopping it to save fuel and reduce engine wear",
    "opts": [
      "Auto-Stop: It unloads and disconnects one generator, stopping it to save fuel and reduce engine wear",
      "It trips all non-essential loads",
      "It forces thrusters to run to consume power",
      "It lowers the bus voltage"
    ],
    "exp": "Running diesel engines lightly loaded causes carbon fouling and wastes massive amounts of fuel. PMS auto-stops unneeded sets.",
    "cat": "PMS",
    "id": "T07_214"
  },
  {
    "q": "If a running generator suddenly trips on a fault, causing a severe overload on the remaining generator, what does the PMS do?",
    "a": "Load Shedding: It instantly trips non-essential loads (like A/C and Galley) to protect the remaining generator from blacking out",
    "opts": [
      "It starts the emergency generator",
      "Load Shedding: It instantly trips non-essential loads (like A/C and Galley) to protect the remaining generator from blacking out",
      "It increases the AVR voltage",
      "It trips all safety loads (Steering, Nav lights)"
    ],
    "exp": "Dumping the heavy hotel loads allows the surviving generator to handle the essential propulsion and safety loads without collapsing.",
    "cat": "PMS",
    "id": "T07_215"
  },
  {
    "q": "Which loads are Priority 1 and NEVER shed by the PMS?",
    "a": "Essential safety and navigation loads (Steering gear, Nav lights, GMDSS, Fire pump)",
    "opts": [
      "Cargo pumps and winches",
      "Essential safety and navigation loads (Steering gear, Nav lights, GMDSS, Fire pump)",
      "Air conditioning and refrigeration",
      "Galley ovens and water heaters"
    ],
    "exp": "SOLAS dictates that critical safety and maneuverability systems cannot be auto-tripped unless a total catastrophic blackout occurs.",
    "cat": "PMS",
    "id": "T07_216"
  },
  {
    "q": "How does the PMS handle 'Heavy Consumers' like a 1000kW Bow Thruster?",
    "a": "Heavy Consumer Interlock: It blocks the thruster start command, auto-starts another generator, and allows the start only when enough power is available",
    "opts": [
      "It shuts down the main engine to provide power",
      "It starts the thruster using battery power",
      "It limits the thruster to 10% speed permanently",
      "Heavy Consumer Interlock: It blocks the thruster start command, auto-starts another generator, and allows the start only when enough power is available"
    ],
    "exp": "Hitting start on a massive thruster would blackout a lightly-loaded ship. The PMS intercepts the button press, prepares the grid, then gives the green light.",
    "cat": "PMS",
    "id": "T07_217"
  },
  {
    "q": "What is the optimal load percentage for marine diesel generators, which the PMS attempts to maintain?",
    "a": "70% to 80% of rated capacity",
    "opts": [
      "10% to 20%",
      "95% to 100%",
      "70% to 80% of rated capacity",
      "40% to 50%"
    ],
    "exp": "Diesels run at peak specific fuel efficiency (lowest SFOC) and burn cleanest when heavily, but safely, loaded (around 75%).",
    "cat": "PMS",
    "id": "T07_218"
  },
  {
    "q": "After a total blackout and the main generators recover the busbar, what is 'Sequential Load Restoration'?",
    "a": "Automatically restarting essential motors one-by-one with time delays to prevent overlapping starting currents from causing another blackout",
    "opts": [
      "Automatically restarting essential motors one-by-one with time delays to prevent overlapping starting currents from causing another blackout",
      "Sequentially restoring lights before pumps",
      "Running the emergency generator until shore power arrives",
      "Manually turning on every breaker simultaneously"
    ],
    "exp": "A motor draws 6x its normal current during startup. Staggering the starts lets the grid absorb these massive spikes one at a time.",
    "cat": "PMS",
    "id": "T07_219"
  },
  {
    "q": "In a Sequential Restart sequence, what is typically the highest priority pump started first (around T=2-3 min)?",
    "a": "Seawater cooling pumps (to prevent the recovering main engine/auxiliaries from overheating)",
    "opts": [
      "Air conditioning compressors",
      "Galley ventilation fans",
      "Seawater cooling pumps (to prevent the recovering main engine/auxiliaries from overheating)",
      "Fuel oil purifiers"
    ],
    "exp": "Without cooling water, running engines will overheat and trip instantly. SW pumps are always Priority 1.",
    "cat": "PMS",
    "id": "T07_220"
  },
  {
    "q": "What is a typical time delay interval between motor starts during Sequential Restoration?",
    "a": "30 seconds to 2 minutes",
    "opts": [
      "10 to 15 minutes",
      "1 hour",
      "30 seconds to 2 minutes",
      "0.1 to 1 second"
    ],
    "exp": "This gives the heavy motors enough time to ramp up to full RPM (dropping their current draw back to normal) before hitting the grid with the next start.",
    "cat": "PMS",
    "id": "T07_221"
  },
  {
    "q": "What happens at T=0 in a total blackout scenario?",
    "a": "Main bus dies, Emergency Generator auto-starts and connects to the emergency bus within 45 seconds",
    "opts": [
      "Main engines automatically reverse",
      "Main bus dies, Emergency Generator auto-starts and connects to the emergency bus within 45 seconds",
      "Ship transmits a continuous Mayday automatically",
      "PMS immediately restarts all cargo pumps"
    ],
    "exp": "Before the main PMS even attempts to restore the main grid, SOLAS rules ensure the emergency generator fires up to supply steering and lighting.",
    "cat": "PMS",
    "id": "T07_222"
  },
  {
    "q": "What does IAS stand for in ship automation?",
    "a": "Integrated Automation System",
    "opts": [
      "Interlocked Actuator System",
      "Independent Action Sequence",
      "Internal Alarm Switch",
      "Integrated Automation System"
    ],
    "exp": "IAS networks all the previously separate ship systems (PMS, Main Engine control, Cargo, Alarms) into one cohesive digital network.",
    "cat": "PMS",
    "id": "T07_223"
  },
  {
    "q": "What is a key requirement for Unattended Machinery Space (UMS) certification, supported by the IAS?",
    "a": "The ability to route critical engineering alarms directly to the bridge and duty engineer's cabin when the ECR is unmanned",
    "opts": [
      "Installing cameras inside the cylinders",
      "Removing all engineers from the ship's crew",
      "Replacing diesel engines with electric batteries",
      "The ability to route critical engineering alarms directly to the bridge and duty engineer's cabin when the ECR is unmanned"
    ],
    "exp": "UMS allows the crew to sleep. The IAS handles monitoring and will wake the duty engineer via cabin alarms if a parameter drifts out of bounds.",
    "cat": "PMS",
    "id": "T07_224"
  },
  {
    "q": "What does an I/P (Current to Pressure) converter do?",
    "a": "Translates a 4-20mA electrical signal from a PLC into a proportional 3-15 psi pneumatic air signal to drive a valve",
    "opts": [
      "Translates instrument air into mechanical rotation",
      "Converts hydraulic pressure into electrical current",
      "Translates a 4-20mA electrical signal from a PLC into a proportional 3-15 psi pneumatic air signal to drive a valve",
      "Converts 220V AC into 24V DC"
    ],
    "exp": "PLCs speak electricity (4-20mA). Massive ship valves are moved by air. The I/P bridges this gap.",
    "cat": "VALVES",
    "id": "T07_225"
  },
  {
    "q": "In a standard I/P converter, a 4mA signal corresponds to what output pressure?",
    "a": "3 psi (or 0.2 bar) - Minimum output",
    "opts": [
      "0 psi",
      "100 psi",
      "3 psi (or 0.2 bar) - Minimum output",
      "15 psi (or 1.0 bar)"
    ],
    "exp": "4mA is the 'live zero' baseline. It tells the valve to sit at exactly 0% stroke with 3 psi holding tension.",
    "cat": "VALVES",
    "id": "T07_226"
  },
  {
    "q": "In a standard I/P converter, a 20mA signal corresponds to what output pressure?",
    "a": "15 psi (or 1.0 bar) - Maximum output",
    "opts": [
      "100 psi",
      "15 psi (or 1.0 bar) - Maximum output",
      "3 psi",
      "0 psi"
    ],
    "exp": "20mA is the 100% command, outputting the maximum 15 psi to fully stroke the valve diaphragm.",
    "cat": "VALVES",
    "id": "T07_227"
  },
  {
    "q": "What is the primary function of a Valve Positioner?",
    "a": "It compares the demanded 4-20mA position with the actual mechanical stem position, applying extra air as needed to overcome friction/hysteresis",
    "opts": [
      "It manually locks the valve in place during maintenance",
      "It compares the demanded 4-20mA position with the actual mechanical stem position, applying extra air as needed to overcome friction/hysteresis",
      "It filters oil out of the instrument air",
      "It acts as a silencer for exhaust air"
    ],
    "exp": "A raw 10 psi signal might only move a sticky valve 40% instead of 50%. The positioner physically reads the stem and blasts 30 psi in until it hits exactly 50%.",
    "cat": "VALVES",
    "id": "T07_228"
  },
  {
    "q": "What does Fail Close (ATO - Air to Open) mean for a control valve?",
    "a": "Air pressure is required to open the valve; if the air supply or electrical signal fails, a mechanical spring snaps the valve fully closed",
    "opts": [
      "Air pressure is required to close the valve",
      "The valve locks in its last position on failure",
      "Air pressure is required to open the valve; if the air supply or electrical signal fails, a mechanical spring snaps the valve fully closed",
      "The valve opens 100% on failure"
    ],
    "exp": "Fail Close is the safest default for systems where uncontrolled flow is disastrous (e.g., pouring unlimited fuel into a boiler).",
    "cat": "VALVES",
    "id": "T07_229"
  },
  {
    "q": "What does Fail Open (ATC - Air to Close) mean for a control valve?",
    "a": "Air pressure holds the valve closed; upon air/signal failure, a spring pushes the valve 100% open",
    "opts": [
      "Air pressure holds the valve closed; upon air/signal failure, a spring pushes the valve 100% open",
      "The valve must be manually turned to open",
      "The valve closes tightly to stop leaks",
      "Air pressure pushes the valve open"
    ],
    "exp": "Fail Open is essential for safety-critical cooling systems. If the wire breaks, you want unlimited cooling water flooding the engine, rather than none.",
    "cat": "VALVES",
    "id": "T07_230"
  },
  {
    "q": "How does an engineer decide whether a new valve should be Fail Open or Fail Close?",
    "a": "By conducting a risk assessment to determine which physical position is safer for the overall ship process during a total power/air failure",
    "opts": [
      "By matching the color of the pipes",
      "Fail Close is mandated by law for every valve on a ship",
      "By checking which is cheaper to purchase",
      "By conducting a risk assessment to determine which physical position is safer for the overall ship process during a total power/air failure"
    ],
    "exp": "Safety first: If uncontrolled flow causes a fire (Fuel), Fail Close. If blocked flow causes a meltdown (Cooling), Fail Open.",
    "cat": "VALVES",
    "id": "T07_231"
  },
  {
    "q": "What is a SIPART PS2?",
    "a": "A highly advanced, intelligent electro-pneumatic valve positioner made by Siemens, incorporating digital calibration and HART/Profibus communication",
    "opts": [
      "A type of 3-phase bridge rectifier",
      "A software program for drafting ladder logic",
      "A brand of main engine governor",
      "A highly advanced, intelligent electro-pneumatic valve positioner made by Siemens, incorporating digital calibration and HART/Profibus communication"
    ],
    "exp": "The SIPART PS2 uses a microprocessor to perfectly auto-tune valve dynamics instead of relying on manual mechanical springs and flappers.",
    "cat": "VALVES",
    "id": "T07_232"
  },
  {
    "q": "When auto-calibrating a SIPART PS2, what occurs during 'Run 1'?",
    "a": "Initialization: The positioner fully opens and closes the valve to measure total mechanical travel/stroke",
    "opts": [
      "It tests the HART communication",
      "It measures the friction coefficient",
      "It checks for air leaks",
      "Initialization: The positioner fully opens and closes the valve to measure total mechanical travel/stroke"
    ],
    "exp": "Run 1 figures out where 0% and 100% physically exist on the valve stem.",
    "cat": "VALVES",
    "id": "T07_233"
  },
  {
    "q": "During SIPART PS2 auto-calibration, what is measured during 'Run 3'?",
    "a": "Response Time: It measures how fast the valve physically moves up and down",
    "opts": [
      "Static friction",
      "Leakage rate",
      "Total stroke length",
      "Response Time: It measures how fast the valve physically moves up and down"
    ],
    "exp": "Knowing the speed dynamics allows the microchip to perfectly time its air pulses without overshooting the target.",
    "cat": "VALVES",
    "id": "T07_234"
  },
  {
    "q": "On a SIPART PS2, what physical setting is required before calibrating a quarter-turn rotary valve (like a butterfly or ball valve)?",
    "a": "Ensure the internal transmission ratio switch is set to 90° (or 33° for short stroke)",
    "opts": [
      "Disconnect the HART cable",
      "Ensure the internal transmission ratio switch is set to 90° (or 33° for short stroke)",
      "Fill the positioner with oil",
      "Change the voltage to 220V"
    ],
    "exp": "The internal potentiometer must be scaled mechanically. Linear globe valves use 33°, rotary quarter-turn valves use 90°.",
    "cat": "VALVES",
    "id": "T07_235"
  },
  {
    "q": "What happens if you reverse the 4-20mA polarity on an I/P converter?",
    "a": "The built-in reverse polarity protection diode blocks current, the unit outputs 0 psi, and the valve drives to its fail-safe position",
    "opts": [
      "The built-in reverse polarity protection diode blocks current, the unit outputs 0 psi, and the valve drives to its fail-safe position",
      "It outputs 15 psi constantly",
      "The valve operates exactly in reverse",
      "The I/P coil burns out instantly"
    ],
    "exp": "Like any solid-state instrument, wiring it backward just results in an open circuit. It drops to the 0mA state, triggering the fail-safe spring.",
    "cat": "VALVES",
    "id": "T07_236"
  },
  {
    "q": "What is an ADC (Analog to Digital Converter)?",
    "a": "A chip that translates a continuous analog signal (e.g., 4-20mA voltage drop) into a discrete digital number (e.g., 0 to 4095) for the PLC CPU",
    "opts": [
      "A device that converts AC power to DC power",
      "A mechanical switch for turning on pumps",
      "A chip that translates a continuous analog signal (e.g., 4-20mA voltage drop) into a discrete digital number (e.g., 0 to 4095) for the PLC CPU",
      "A tool for converting pressure to current"
    ],
    "exp": "Processors cannot understand voltages. The ADC acts as an interpreter, turning '12mA' into '2048' so the CPU can calculate PID math.",
    "cat": "DIGITAL",
    "id": "T07_237"
  },
  {
    "q": "If a 12-bit ADC reads a 4-20mA signal, how many discrete numerical steps can it represent?",
    "a": "4096 steps (2^12)",
    "opts": [
      "256 steps",
      "4096 steps (2^12)",
      "65536 steps",
      "1024 steps"
    ],
    "exp": "12-bit resolution provides excellent accuracy for marine control loops. 4mA = 0, and 20mA = 4095.",
    "cat": "DIGITAL",
    "id": "T07_238"
  },
  {
    "q": "What does the Nyquist Theorem dictate regarding ADC sampling rates?",
    "a": "The sampling rate must be at least twice the highest frequency of the signal being measured to accurately recreate it",
    "opts": [
      "Analog signals cannot be sampled digitally",
      "The sampling rate must be at least twice the highest frequency of the signal being measured to accurately recreate it",
      "The voltage must be halved before sampling",
      "The scan time must be exactly 10ms"
    ],
    "exp": "Sampling too slowly causes 'aliasing', making high-frequency noise look like a slow, massive disturbance to the PLC.",
    "cat": "DIGITAL",
    "id": "T07_239"
  },
  {
    "q": "What is Foundation Fieldbus (FF)?",
    "a": "A fully digital, two-wire, multi-drop network where devices receive power and communicate peer-to-peer at 31.25 kbps",
    "opts": [
      "A fiber optic network for radar",
      "A single analog 4-20mA wire",
      "A wireless Bluetooth protocol",
      "A fully digital, two-wire, multi-drop network where devices receive power and communicate peer-to-peer at 31.25 kbps"
    ],
    "exp": "FF is highly advanced. Multiple smart sensors sit on one cable, passing data directly to each other without needing a central PLC brain.",
    "cat": "DIGITAL",
    "id": "T07_240"
  },
  {
    "q": "How does HART (Highway Addressable Remote Transducer) protocol communicate?",
    "a": "It superimposes a high-frequency (1.2/2.2 kHz) digital AC wave on top of standard analog 4-20mA DC wiring",
    "opts": [
      "It uses wireless infrared beams",
      "It communicates via the ship's 440V power lines",
      "It superimposes a high-frequency (1.2/2.2 kHz) digital AC wave on top of standard analog 4-20mA DC wiring",
      "It requires a dedicated 6-core ethernet cable"
    ],
    "exp": "HART's massive advantage is that it allows advanced digital diagnostics and calibration over old, legacy 2-wire analog cables.",
    "cat": "DIGITAL",
    "id": "T07_241"
  },
  {
    "q": "Why is a 250Ω resistor strictly required when connecting a HART communicator tool to a transmitter loop?",
    "a": "It converts the tiny current fluctuations of the HART AC signal into a measurable 1-5V voltage drop that the handheld tool can read",
    "opts": [
      "To act as an antenna for the signal",
      "To convert 4-20mA into 0-10mA",
      "It converts the tiny current fluctuations of the HART AC signal into a measurable 1-5V voltage drop that the handheld tool can read",
      "To limit the 24V supply and prevent fires"
    ],
    "exp": "The communicator clips across the resistor. Without this resistance, the power supply's low impedance 'swallows' the AC ripple and communication fails.",
    "cat": "DIGITAL",
    "id": "T07_242"
  },
  {
    "q": "What is Modbus (RTU)?",
    "a": "A simple, robust Master-Slave serial communication protocol widely used over RS485 wiring (9600-115200 bps)",
    "opts": [
      "A protocol for transmitting live video",
      "A peer-to-peer digital network for fast control",
      "An analog 4-20mA standard",
      "A simple, robust Master-Slave serial communication protocol widely used over RS485 wiring (9600-115200 bps)"
    ],
    "exp": "Modbus is the undisputed workhorse of ship automation. One Master (PLC) polls dozens of Slaves (VFDs, gensets) sequentially.",
    "cat": "DIGITAL",
    "id": "T07_243"
  },
  {
    "q": "What is the key difference between Modbus and Foundation Fieldbus (FF)?",
    "a": "Modbus is strictly Master-Slave (no direct sensor-to-sensor talk); FF allows Peer-to-Peer communication without a master",
    "opts": [
      "Modbus is wireless; FF requires cables",
      "Modbus is faster than FF",
      "FF only works on 440V AC",
      "Modbus is strictly Master-Slave (no direct sensor-to-sensor talk); FF allows Peer-to-Peer communication without a master"
    ],
    "exp": "In FF, a flow transmitter can talk directly to a valve positioner to execute PID math locally, saving PLC overhead.",
    "cat": "DIGITAL",
    "id": "T07_244"
  },
  {
    "q": "What is a 'Latching' (Seal-In) circuit in relay logic?",
    "a": "A circuit where a momentary start signal pulls in a contactor, and an auxiliary NO contact on that contactor parallels the start button to keep it energized",
    "opts": [
      "A circuit where a momentary start signal pulls in a contactor, and an auxiliary NO contact on that contactor parallels the start button to keep it energized",
      "A physical padlock on a switchboard",
      "A timer that delays shutoff",
      "A circuit that reverses motor direction"
    ],
    "exp": "When you release the momentary Start button, power routes around it through the newly-closed Aux contact, 'sealing' the motor ON.",
    "cat": "DIGITAL",
    "id": "T07_245"
  },
  {
    "q": "How is a latched circuit typically unlatched (turned OFF)?",
    "a": "By pressing a Normally Closed (NC) STOP button wired in series, which breaks the power flow to the coil and drops the auxiliary contact",
    "opts": [
      "By pressing the START button a second time",
      "It automatically turns off after 10 minutes",
      "By pressing a Normally Closed (NC) STOP button wired in series, which breaks the power flow to the coil and drops the auxiliary contact",
      "By cutting power at the MSB"
    ],
    "exp": "The NC Stop button opens the circuit momentarily. The coil dies, the Aux contact springs open, and the seal is broken.",
    "cat": "DIGITAL",
    "id": "T07_246"
  },
  {
    "q": "Why are fire and gas detection alarms designed as 'latching' circuits in the PLC/Panel?",
    "a": "To ensure a momentary puff of smoke or gas triggers an inescapable alarm that must be formally acknowledged and manually reset by an operator",
    "opts": [
      "To save battery power during a blackout",
      "To make the alarm bell ring louder",
      "To ensure a momentary puff of smoke or gas triggers an inescapable alarm that must be formally acknowledged and manually reset by an operator",
      "To automatically extinguish the fire"
    ],
    "exp": "If wind blows the smoke away, a non-latching alarm would silence itself, leaving the crew unaware a fire had started.",
    "cat": "DIGITAL",
    "id": "T07_247"
  },
  {
    "q": "What is an I/V (Current-to-Voltage) converter used for in PLC panels?",
    "a": "It converts a 4-20mA analog sensor current into a 1-5V DC voltage drop for input cards that only read voltage",
    "opts": [
      "It changes ship's 440V AC to 24V DC",
      "It translates Modbus into Ethernet",
      "It powers the I/P converter",
      "It converts a 4-20mA analog sensor current into a 1-5V DC voltage drop for input cards that only read voltage"
    ],
    "exp": "Placing a highly precise 250-ohm resistor across the input terminals uses Ohm's Law (V=IR) to safely translate current into voltage.",
    "cat": "DIGITAL",
    "id": "T07_248"
  },
  {
    "q": "What is a SIPART PS2?",
    "a": "A smart electropneumatic valve positioner manufactured by Siemens",
    "opts": [
      "A smart electropneumatic valve positioner manufactured by Siemens",
      "A type of 4-20mA pressure transmitter",
      "A marine diesel engine governor",
      "A main switchboard circuit breaker"
    ],
    "exp": "SIPART PS2 is a Siemens smart electropneumatic valve positioner. It receives a 4-20 mA setpoint signal, measures actual valve position via a stem-mounted feedback sensor, and adjusts pneumatic air pressure to drive the valve to the exact commanded position. It performs automatic self-calibration and is HART-enabled for remote configuration.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the primary function of a valve positioner like the SIPART PS2?",
    "a": "To precisely control the position of a pneumatic valve to match the 4-20mA setpoint from a controller",
    "opts": [
      "To precisely control the position of a pneumatic valve to match the 4-20mA setpoint from a controller",
      "To open and close the valve manually",
      "To measure the flow rate of the fluid",
      "To generate instrument air"
    ],
    "exp": "The positioner overcomes valve friction, hysteresis, and actuator non-linearity that prevent a simple 4-20 mA signal from accurately controlling valve position. Without a positioner, a valve instructed to go to 50% may sit at 45% due to stiction. The positioner continuously compares setpoint vs actual position and corrects until they match.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "How does the SIPART PS2 overcome valve friction and hysteresis?",
    "a": "By continuously comparing actual stem position (feedback) with the setpoint, and adjusting air pressure until they match exactly",
    "opts": [
      "By continuously comparing actual stem position (feedback) with the setpoint, and adjusting air pressure until they match exactly",
      "By spraying lubricant on the valve stem",
      "By heating the pneumatic air",
      "By sending a fault alarm to the ECR"
    ],
    "exp": "Closed-loop position control: actual valve stem position is measured by an internal potentiometer/position sensor. This is compared to the 4-20 mA setpoint. Any deviation (error) causes the positioner to increase or decrease pneumatic pressure to the actuator until the error is zero. From Run 5 calibration, it knows the exact friction and applies precise pneumatic pulses.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What triggers the automatic calibration sequence in a SIPART PS2?",
    "a": "Entering the configuration menu and selecting 'RUN 1' to start the initialisation",
    "opts": [
      "Entering the configuration menu and selecting 'RUN 1' to start the initialisation",
      "Rebooting the main IAS computer",
      "Turning the air supply off and on",
      "Disconnecting the 4-20mA cable"
    ],
    "exp": "Entering the SIPART configuration menu and selecting RUN 1 starts the automatic initialisation sequence. The 4-20 mA supply must be connected, instrument air must be at correct pressure (4-7 bar), and the valve must be free to travel through its full mechanical stroke without obstruction. RUN 1 through RUN 5 then execute automatically in sequence.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Before starting SIPART calibration, what prerequisites must be met?",
    "a": "Instrument air connected, 4-20mA supply present, and valve free to move without mechanical obstruction",
    "opts": [
      "Instrument air connected, 4-20mA supply present, and valve free to move without mechanical obstruction",
      "Valve must be fully open",
      "Main engine must be running",
      "Valve must be removed from the pipe"
    ],
    "exp": "SIPART calibration prerequisites: (1) Instrument air connected at 4-7 bar, clean and dry. (2) 24V DC / 4-20 mA loop supply present. (3) Valve mechanically free to travel full stroke - no manual locking pins, no jammed actuator. (4) Physical linkage between positioner and valve stem correctly installed and secured. (5) No downstream process pressure that would prevent valve movement.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 1 of the SIPART calibration?",
    "a": "The positioner prepares for initialisation and begins the automatic sequence",
    "opts": [
      "The positioner prepares for initialisation and begins the automatic sequence",
      "It measures the travel time",
      "It finds the closed position",
      "It measures friction"
    ],
    "exp": "RUN 1: Initialisation check phase. The SIPART confirms: 4-20 mA signal present, instrument air pressure adequate, internal electronics functional. It prepares the control algorithm and clears previous calibration data. Displays 'RUN 1' and then automatically advances to RUN 2. Duration: a few seconds.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 2 of the SIPART calibration?",
    "a": "The positioner slowly drives the valve to the mechanical CLOSED stop and records this as the 0% (4mA) position",
    "opts": [
      "The positioner slowly drives the valve to the mechanical CLOSED stop and records this as the 0% (4mA) position",
      "It opens the valve fully",
      "It tests the air pressure",
      "It records the friction"
    ],
    "exp": "RUN 2: Finding the CLOSED stop. The positioner slowly exhausts air from the actuator (or applies air, depending on fail action), driving the valve to its mechanical closed limit stop. When no further movement is detected, the current stem position is recorded as 0% (4 mA reference). This establishes the physical zero of the stroke.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 3 of the SIPART calibration?",
    "a": "The positioner drives the valve to the mechanical OPEN stop and records this as the 100% (20mA) position",
    "opts": [
      "The positioner drives the valve to the mechanical OPEN stop and records this as the 100% (20mA) position",
      "It closes the valve tightly",
      "It checks for air leaks",
      "It tests the 4-20mA loop"
    ],
    "exp": "RUN 3: Finding the OPEN stop. The positioner applies full instrument air to drive the valve to its mechanical fully-open limit stop. When no further movement is detected, this position is recorded as 100% (20 mA reference). RUN 2 and RUN 3 together establish the mechanical stroke range of the specific valve-actuator assembly.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 4 of the SIPART calibration?",
    "a": "It measures the exact travel time required to move from fully closed to fully open and vice versa",
    "opts": [
      "It measures the exact travel time required to move from fully closed to fully open and vice versa",
      "It determines the friction",
      "It finds the open stop",
      "It calibrates the HART protocol"
    ],
    "exp": "RUN 4: Measuring travel time. The positioner drives the valve from fully closed to fully open and times the stroke, then from fully open to fully closed. These travel times are stored and used by the internal PID controller to set appropriate control gain and response speed. A slow actuator gets different control parameters than a fast one.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why does the SIPART measure travel time in RUN 4?",
    "a": "To optimise the internal control algorithm (PID) for the specific speed capability of that actuator",
    "opts": [
      "To optimise the internal control algorithm (PID) for the specific speed capability of that actuator",
      "To calculate how much air is being wasted",
      "To check if the operator is watching",
      "To set the alarm delay"
    ],
    "exp": "Travel time determines how aggressively to control the valve. A fast actuator (0.5 second stroke) needs gentler PID gains to avoid oscillation; a slow actuator (10 second stroke) needs higher gains for responsive control. Without this data, the positioner would either be sluggish (slow actuator) or hunting (fast actuator).",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens during RUN 5 of the SIPART calibration?",
    "a": "It applies small incremental step changes to determine the friction and hysteresis characteristics of the valve",
    "opts": [
      "It applies small incremental step changes to determine the friction and hysteresis characteristics of the valve",
      "It finds the closed stop",
      "It measures the travel time",
      "It purges the air lines"
    ],
    "exp": "RUN 5: Friction and hysteresis characterisation. The positioner applies a series of small incremental setpoint step changes and measures the exact response. It determines: (1) Deadband - how large a step is needed to initiate movement. (2) Stiction force - how much air pressure to apply to break static friction. (3) Hysteresis - difference between upward and downward response.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why does the SIPART need to know the friction characteristics (RUN 5)?",
    "a": "To apply predictive control and small 'kicks' of air to overcome static friction (stiction) without overshooting",
    "opts": [
      "To apply predictive control and small 'kicks' of air to overcome static friction (stiction) without overshooting",
      "To warn the user to add grease",
      "To calculate the remaining lifespan of the valve",
      "To reduce the air pressure to zero"
    ],
    "exp": "Valve stiction (static friction) causes a valve to stick at its current position until sufficient force builds up, then jump past the setpoint ('stick-slip'). RUN 5 quantifies this. The positioner then applies the minimum pneumatic impulse to nudge the valve without overshooting - essential for tight process control and preventing valve wear.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What message indicates the SIPART calibration sequence is successfully completed?",
    "a": "FINISH or END",
    "opts": [
      "FINISH or END",
      "RUN 6",
      "ERROR",
      "OK"
    ],
    "exp": "After RUN 5 completes successfully, the SIPART display shows 'FINISH' or 'END'. It then switches to normal operational mode. The calibration data is stored in non-volatile memory and remains valid until physical changes to the valve or actuator require recalibration. A FINISH confirmation means all 5 runs completed without errors.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "After a successful calibration, what does the SIPART PS2 know about the valve?",
    "a": "Exact physical limits (open/close), response speed, and mechanical friction profile",
    "opts": [
      "Exact physical limits (open/close), response speed, and mechanical friction profile",
      "The temperature of the fluid",
      "The pressure in the pipe",
      "The flow rate of the fluid"
    ],
    "exp": "Post-calibration, the SIPART stores: (1) Physical closed and open limit positions (stroke limits). (2) Total stroke travel time in both directions. (3) Stiction force and deadband specific to this valve assembly. (4) Hysteresis between opening and closing response. This complete mechanical profile enables precise position control without overshoot.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "When is it absolutely necessary to perform the RUN 1-5 recalibration?",
    "a": "After replacing the valve packing, actuator diaphragm, or any mechanical linkage component",
    "opts": [
      "After replacing the valve packing, actuator diaphragm, or any mechanical linkage component",
      "Every single day",
      "When the 4-20mA setpoint changes",
      "When the ship changes timezones"
    ],
    "exp": "Mandatory recalibration required after: (1) Replacing or tightening valve packing (changes friction). (2) Replacing actuator diaphragm or springs (changes force profile). (3) Adjusting the mechanical feedback linkage. (4) Replacing the valve plug or trim (changes travel). (5) Moving the positioner to a different valve. Minor adjustments (zero/span only) do not require full recalibration.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why must you recalibrate after tightening a leaking valve packing?",
    "a": "Tightening the packing significantly changes the stem friction, which invalidates the data from the previous RUN 5",
    "opts": [
      "Tightening the packing significantly changes the stem friction, which invalidates the data from the previous RUN 5",
      "It changes the 4-20mA signal",
      "It reverses the valve direction",
      "It drops the air pressure"
    ],
    "exp": "Valve packing tightening directly increases stem friction - often doubling or tripling the original friction value. The SIPART's RUN 5 stiction data becomes invalid. If not recalibrated, the positioner will apply insufficient impulse to overcome the new friction, causing the valve to sit offset from setpoint. Recalibration records the new friction profile.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "If a SIPART PS2 is hunting (oscillating continuously around the setpoint), what is a likely cause?",
    "a": "Valve friction has changed significantly since last calibration, or linkage is loose (stiction/hysteresis mismatch)",
    "opts": [
      "Valve friction has changed significantly since last calibration, or linkage is loose (stiction/hysteresis mismatch)",
      "The 4-20mA signal is too high",
      "The valve is fully open",
      "The fluid is too hot"
    ],
    "exp": "Continuous hunting causes: (1) Valve friction has changed significantly since last calibration (worn packing, seized actuator). (2) Feedback linkage is loose - giving false position signal. (3) Instrument air pressure fluctuating. (4) Control parameters (from RUN 4) no longer match the actuator response. Solution: Re-run full RUN 1-5 calibration sequence.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the input signal to the SIPART PS2?",
    "a": "4-20mA DC (representing desired valve position, 0-100%)",
    "opts": [
      "4-20mA DC (representing desired valve position, 0-100%)",
      "0-10 Bar air pressure",
      "110V AC",
      "0-5V DC"
    ],
    "exp": "4-20 mA DC setpoint signal from the process controller (PID output). 4 mA = 0% (valve closed), 20 mA = 100% (valve fully open). The positioner also supports HART superimposed on this signal for digital communication. Some models accept PROFIBUS PA or Foundation Fieldbus as an alternative to 4-20 mA.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the output from the SIPART PS2 to the valve?",
    "a": "Variable pneumatic air pressure directed to the actuator diaphragm/cylinder",
    "opts": [
      "Variable pneumatic air pressure directed to the actuator diaphragm/cylinder",
      "4-20mA DC",
      "Hydraulic fluid",
      "24V DC"
    ],
    "exp": "Variable pneumatic air pressure (from the instrument air supply at 4-7 bar) directed to the valve actuator. The positioner uses electropneumatic transducers (I/P converters) to convert the electrical position error into proportional air pressure. Acting-type determines whether more air opens or closes the valve (air-to-open or air-to-close).",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is 'Position Feedback' on the SIPART PS2?",
    "a": "A mechanical linkage connecting the valve stem to a potentiometer/sensor inside the positioner",
    "opts": [
      "A mechanical linkage connecting the valve stem to a potentiometer/sensor inside the positioner",
      "A wireless signal to the ECR",
      "A pressure gauge on the air line",
      "A flow meter in the pipe"
    ],
    "exp": "A mechanical linkage (lever arm or rotary coupling) connects the valve stem to an internal potentiometer or Hall Effect position sensor in the SIPART. As the valve moves, the sensor resistance/voltage changes proportionally. This feedback signal is compared to the 4-20 mA setpoint in a continuous closed-loop to achieve precise positioning.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Can the SIPART PS2 communicate via HART?",
    "a": "Yes, most models are HART-enabled for remote configuration and diagnostics",
    "opts": [
      "Yes, most models are HART-enabled for remote configuration and diagnostics",
      "No, it is purely analogue",
      "Yes, but only via Modbus",
      "Yes, but only via WiFi"
    ],
    "exp": "Yes. SIPART PS2 supports HART (FSK, 1200/2200 Hz) superimposed on the 4-20 mA signal, requiring 250 ohm minimum loop resistance. Via HART: configure LRV/URV, read actual valve position, run diagnostics, read fault codes, view calibration data, perform partial stroke testing. More advanced models also support PROFIBUS PA or Foundation Fieldbus.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What happens if you run the SIPART calibration while the valve is mechanically jammed?",
    "a": "The positioner will misinterpret the jammed position as the end stop, resulting in a severely restricted stroke and likely an initialization error",
    "opts": [
      "The positioner will misinterpret the jammed position as the end stop, resulting in a severely restricted stroke and likely an initialization error",
      "The valve will break the pipe",
      "The positioner will increase pressure until it unjams",
      "Nothing, it skips the jammed part"
    ],
    "exp": "If valve is jammed during RUN 2 or RUN 3, the positioner misidentifies the jammed position as the mechanical limit stop. Result: severely restricted stroke (e.g., it thinks 15% is fully closed). Valve control will be wrong across its entire range. Additionally, the SIPART may display an error code (e.g., 'E2' position error) indicating stroke travel was too small.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What exactly is the SIPART learning in Run 2 and 3?",
    "a": "It is mapping the 4mA electrical command to the physical lower mechanical stop, and 20mA to the upper mechanical stop",
    "opts": [
      "It is mapping the 4mA electrical command to the physical lower mechanical stop, and 20mA to the upper mechanical stop",
      "It is learning the fluid pressure",
      "It is checking the air supply pressure",
      "It is learning the HART address"
    ],
    "exp": "RUN 2 learns the physical CLOSED limit - maps 4 mA command to the actual stem position at the closed mechanical stop. RUN 3 learns the physical OPEN limit - maps 20 mA command to the actual stem position at the open mechanical stop. Together they define the 0-100% stroke and ensure the valve uses its full mechanical travel, regardless of how the actuator or linkage is set.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is 'Valve Stiction'?",
    "a": "Static friction; the tendency of a valve to stick in place until enough force builds up, causing it to suddenly jump past the setpoint",
    "opts": [
      "Static friction; the tendency of a valve to stick in place until enough force builds up, causing it to suddenly jump past the setpoint",
      "The glue used to hold the valve together",
      "A type of pneumatic air leak",
      "The magnetic pull of the positioner"
    ],
    "exp": "Stiction = Static Friction. A valve stem at rest has higher friction (static) than a moving stem (dynamic). When the controller commands a small position change, the valve stays fixed until enough force builds up to overcome stiction, then suddenly jerks past the setpoint. This causes poor control, especially around the setpoint where small corrections are needed.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "How does a smart positioner like SIPART handle severe valve stiction?",
    "a": "It uses the friction profile from Run 5 to apply precise pneumatic pulses to 'nudge' the valve to the exact position without overshooting",
    "opts": [
      "It uses the friction profile from Run 5 to apply precise pneumatic pulses to 'nudge' the valve to the exact position without overshooting",
      "It shuts down and triggers an alarm",
      "It applies full 10 bar pressure immediately",
      "It tells the PLC to change the setpoint"
    ],
    "exp": "The SIPART uses RUN 5 stiction characterisation to know the exact force needed to overcome static friction. When a setpoint change is commanded, instead of gradually increasing pressure (which causes stiction and overshoot), it applies a precisely calculated initial impulse to immediately break the static friction, then reduces to dynamic control pressure. This gives smooth, accurate positioning.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Is a SIPART PS2 considered a 'Smart' instrument?",
    "a": "Yes, because it contains a microprocessor, performs automatic self-calibration, and supports digital communication",
    "opts": [
      "Yes, because it contains a microprocessor, performs automatic self-calibration, and supports digital communication",
      "No, it is a purely mechanical device",
      "No, because it uses pneumatic air",
      "Only if it is painted blue"
    ],
    "exp": "Yes. Smart criteria met: (1) Contains microprocessor for digital signal processing. (2) Performs automatic self-calibration (RUN 1-5). (3) Stores calibration data in non-volatile memory. (4) HART digital communication capability. (5) Self-diagnostics with error codes. (6) Remote configuration possible. (7) Can perform partial stroke test (PST) for safety valve verification.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the typical instrument air supply pressure required for a pneumatic control valve?",
    "a": "4 to 7 bar (filtered and dried)",
    "opts": [
      "4 to 7 bar (filtered and dried)",
      "100 bar",
      "0.5 bar",
      "30 bar"
    ],
    "exp": "Instrument air supply = 4-7 bar (typically 6 bar nominal). Must be: clean (filtered to 25 micron), dry (dewpoint below -20 deg C), oil-free. SIPART PS2 input port marked 'Z' or 'Supply'. If pressure falls below 3.5 bar, valve typically fails to its spring-return safe position. Air quality is critical - moisture blocks pneumatic pilots within the positioner.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "Why must the instrument air be clean, dry, and oil-free?",
    "a": "Moisture, oil, or dirt will quickly block the tiny internal pilot valves and nozzles inside the positioner",
    "opts": [
      "Moisture, oil, or dirt will quickly block the tiny internal pilot valves and nozzles inside the positioner",
      "To prevent the valve stem from rusting",
      "To keep the 4-20mA signal clean",
      "To prevent explosions"
    ],
    "exp": "SIPART internal pilot valves have orifices as small as 0.5mm. Oil or moisture causes: (1) Freezing in cold conditions blocking air paths. (2) Oil coagulation blocking orifices. (3) Rust in the positioner body. (4) Valve seat damage. Any contamination causes sluggish response, hunting, or complete failure. Instrument air dryers and filter-regulators are mandatory upstream.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What does the 'split range' function in a positioner allow?",
    "a": "One 4-20mA signal from a controller to sequence two separate valves (e.g., Valve A works 4-12mA, Valve B works 12-20mA)",
    "opts": [
      "One 4-20mA signal from a controller to sequence two separate valves (e.g., Valve A works 4-12mA, Valve B works 12-20mA)",
      "It splits the air pressure in half",
      "It splits the pipe into two flows",
      "It allows the valve to break in half safely"
    ],
    "exp": "Split range: one 4-20 mA controller output controls two valves in sequence. Example: Valve A (cooling water in) operates on 4-12 mA (0-100%), Valve B (heating steam) operates on 12-20 mA (0-100%). This allows a single PID controller to provide both heating and cooling using the same output signal. Configured in the SIPART by setting LRV and URV accordingly.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "During calibration, if the SIPART displays an error code, what should the engineer do?",
    "a": "Consult the manual for the specific code (e.g., air leak, travel too small, linkage disconnected) and rectify the physical issue before retrying",
    "opts": [
      "Consult the manual for the specific code (e.g., air leak, travel too small, linkage disconnected) and rectify the physical issue before retrying",
      "Ignore it and force the valve open",
      "Hit the positioner with a hammer",
      "Increase the 4-20mA signal to maximum"
    ],
    "exp": "Check the SIPART manual for the specific error code. Common codes: E1 (air leak - check connections), E2 (travel too small - check for mechanical obstruction or incorrect linkage), E3 (no travel detected - confirm instrument air connected, actuator not jammed). Rectify the physical issue first, then restart the calibration sequence from RUN 1.",
    "cat": "SIPART PS2",
    "id": ""
  },
  {
    "q": "What is the critical rule when replacing a PLC backup battery?",
    "a": "Replace it with the controller power switched ON",
    "opts": [
      "Replace it with the controller power switched ON",
      "Switch power OFF first to prevent sparks near the battery",
      "Stop the PLC program (HALT mode) before replacing",
      "Isolate all I/O modules before battery replacement"
    ],
    "exp": "Battery-backed RAM holds the user program. With power ON, the internal DC bus supplies the RAM - the battery is not the sole source. Replacing with power OFF removes all power from RAM the instant the battery is lifted, erasing the user program immediately.",
    "cat": "PLC Maintenance",
    "id": "T07_601"
  },
  {
    "q": "Why must the PLC backup battery be replaced with controller power ON rather than OFF?",
    "a": "Because RAM loses power instantly when the battery is removed without the DC bus to supply it",
    "opts": [
      "Because RAM loses power instantly when the battery is removed without the DC bus to supply it",
      "Because the PLC self-tests only run when power is ON",
      "To allow the watchdog timer to reset automatically after replacement",
      "Hot insertion is safer for the battery terminals at rated voltage"
    ],
    "exp": "When power is ON, the DC bus maintains RAM supply during the brief battery swap. Without that supply (power OFF), RAM contents vanish the moment the old battery is disconnected. Always back up to EEPROM first and replace within the manufacturer's hot-swap window (typically 30 seconds).",
    "cat": "PLC Maintenance",
    "id": "T07_602"
  },
  {
    "q": "Which cable type is mandatory for analogue 4–20 mA signals connected to a PLC to minimise electrical noise?",
    "a": "Individually-screened twisted-pair cable, shield earthed at one end only",
    "opts": [
      "Individually-screened twisted-pair cable, shield earthed at one end only",
      "Standard two-core stranded cable with armour",
      "Co-axial cable with drain wire earthed at both ends",
      "Multi-core unscreened cable run in a steel conduit"
    ],
    "exp": "Twisted pair cancels magnetically induced noise (each twist reverses polarity so interference cancels). Screening blocks electrostatic coupling. Earthing the shield at ONE end only prevents circulating currents that would add 50 Hz noise to the signal.",
    "cat": "PLC Noise Protection",
    "id": "T07_603"
  },
  {
    "q": "What is the purpose of an anti-aliasing filter on a PLC analogue input module?",
    "a": "A low-pass filter that removes high-frequency noise before the ADC samples the signal",
    "opts": [
      "A low-pass filter that removes high-frequency noise before the ADC samples the signal",
      "A band-pass filter that selects the 4–20 mA carrier frequency",
      "A high-pass filter that removes DC offset from the sensor signal",
      "A surge arrestor that clamps transient voltages at the input terminal"
    ],
    "exp": "The ADC samples the analogue input at a fixed rate. Any noise frequency above half the sample rate would alias (appear as a false low-frequency signal). A low-pass RC filter with cut-off around 5–10 Hz for slow process loops removes this noise before sampling.",
    "cat": "PLC Noise Protection",
    "id": "T07_604"
  },
  {
    "q": "When routing PLC signal cables alongside power cables on a ship, what is the minimum recommended separation distance?",
    "a": "300 mm",
    "opts": [
      "300 mm",
      "50 mm",
      "100 mm",
      "600 mm"
    ],
    "exp": "IEC and shipboard best practice require at least 300 mm separation between power cable trays and instrumentation/signal cable trays. Running signal cables parallel to high-current motor leads induces voltages by electromagnetic coupling, causing noise on 4–20 mA loops.",
    "cat": "PLC Noise Protection",
    "id": "T07_605"
  },
  {
    "q": "What is the function of the Preferential Trip in a ship's Power Management System?",
    "a": "Automatically shed non-essential loads before the generator overcurrent relay trips to prevent a blackout",
    "opts": [
      "Automatically shed non-essential loads before the generator overcurrent relay trips to prevent a blackout",
      "Trip the generator manually when the duty officer detects overload",
      "Sequentially restore loads after a blackout in priority order",
      "Transfer load from an overloaded generator to shore supply"
    ],
    "exp": "Preferential trip detects busbar overload (typically >85% generator rating) and automatically disconnects non-essential consumers (galley, HVAC, laundry) in milliseconds - faster than the overcurrent relay acts. This keeps the generator online and preserves power to essential services.",
    "cat": "PMS",
    "id": "T07_606"
  },
  {
    "q": "Which of the following loads would NEVER be shed by the Preferential Trip function?",
    "a": "Steering gear motor",
    "opts": [
      "Steering gear motor",
      "Galley cooking ranges",
      "Air conditioning plant",
      "Accommodation hot water heater"
    ],
    "exp": "Steering gear is a Safety Priority 1 (essential) load - shedding it would create an immediate navigation hazard. Preferential trip only disconnects non-essential loads (galley, HVAC, laundry, hotel services) that can tolerate temporary interruption without risk to life or safety.",
    "cat": "PMS",
    "id": "T07_607"
  },
  {
    "q": "A generator trips despite the Preferential Trip being fitted and functional. What is the most likely cause?",
    "a": "The overload was so severe (e.g., short circuit) that overcurrent relay operated before preferential trip completed",
    "opts": [
      "The overload was so severe (e.g., short circuit) that overcurrent relay operated before preferential trip completed",
      "The PMS was in manual mode",
      "The non-essential loads had already been manually shed",
      "Preferential trip only works when two generators are in parallel"
    ],
    "exp": "Preferential trip sheds loads quickly but a dead short or multiple large motor starts can cause current to exceed overcurrent relay threshold faster than the PMS can respond. Also, a non-essential breaker that sticks closed prevents shedding, allowing overload to persist until the generator trips.",
    "cat": "PMS",
    "id": "T07_608"
  },
  {
    "q": "What is the principle of a self-monitoring (supervised) alarm circuit used in fire detection systems?",
    "a": "A continuous test current flows through the detector loop so that a broken wire or disconnected detector also triggers an alarm",
    "opts": [
      "A continuous test current flows through the detector loop so that a broken wire or disconnected detector also triggers an alarm",
      "Each detector sends a daily test signal to the control panel",
      "The control panel polls each detector in sequence every 60 seconds",
      "A separate earth-fault monitor checks insulation resistance once per hour"
    ],
    "exp": "A supervised loop carries a small continuous current through all detectors and wiring. A fire raises an ALARM; an open-circuit fault (broken wire, removed detector) drops the loop current and raises a FAULT alarm. This ensures the monitoring system cannot silently fail - you always know if the circuit is healthy.",
    "cat": "Alarm Systems",
    "id": "T07_609"
  },
  {
    "q": "What is the key advantage of a self-monitoring alarm circuit over a basic (unsupervised) alarm circuit?",
    "a": "A broken wire or failed detector is detected and alarmed immediately, not just during an actual hazard",
    "opts": [
      "A broken wire or failed detector is detected and alarmed immediately, not just during an actual hazard",
      "It eliminates false alarms caused by electromagnetic interference",
      "It allows detectors to be removed for maintenance without interrupting the circuit",
      "It automatically resets after an alarm without operator intervention"
    ],
    "exp": "In an unsupervised circuit, a broken wire produces no alarm - the fault goes undetected until a real hazard occurs and the detector fails to respond. A supervised (self-monitoring) circuit detects this open-circuit condition immediately, giving a FAULT alarm at the panel so the fault can be repaired before a real emergency.",
    "cat": "Alarm Systems",
    "id": "T07_610"
  },
  {
    "q": "What grounding strategy should be used for PLC instrument earth to minimise noise?",
    "a": "Single-point star grounding with instrument earth kept separate from power earth",
    "opts": [
      "Single-point star grounding with instrument earth kept separate from power earth",
      "Multi-point grounding with all earths bonded to the nearest steel structure",
      "Float the instrument earth completely - no connection to hull",
      "Connect instrument earth and power earth at every junction box"
    ],
    "exp": "Multi-point grounding creates ground loops - different earth potentials between panels drive circulating currents through signal cables, adding noise. Single-point star grounding ensures all instrument earths meet at one clean earth bar. Power (dirty) and instrument (clean) earths are kept separate to prevent motor-switching transients reaching the analogue signals.",
    "cat": "PLC Noise Protection",
    "id": "T07_611"
  }

]);
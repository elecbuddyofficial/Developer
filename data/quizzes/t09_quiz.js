window.loadQuizzes("T09_ShipMachinery", [
  {
    "q": "What is the primary working principle of a marine Oil Mist Detector (OMD)?",
    "a": "Photoelectric light extinction (opacity) where mist droplets scatter and absorb a light beam",
    "opts": ["Photoelectric light extinction (opacity) where mist droplets scatter and absorb a light beam", "Chemical detection using a pellistor sensor to measure hydrocarbon limits", "Ionisation chamber detection using Americium-241", "Infrared thermal imaging detecting hot spots on crankcase walls"],
    "exp": "The OMD uses photoelectric light extinction. Mist droplets scatter the light beam, reducing photocell output. Not a chemical pellistor, ionisation smoke detector, or thermal camera. The reference tube compensates for lamp aging.",
    "cat": "OMD",
    "id": "T09S_001"
  },
  {
    "q": "What is the purpose of the sealed reference tube inside an OMD?",
    "a": "Provides a clean-air baseline that degrades at the same rate as the measuring tube \u2014 compensates for lamp aging",
    "opts": ["Filters large oil droplets before measuring tube", "Provides a clean-air baseline that degrades at the same rate as the measuring tube \u2014 compensates for lamp aging", "Cools crankcase gases to prevent condensation on lenses", "Contains a chemical reagent neutralising explosive gases"],
    "exp": "The reference tube is sealed with clean air at the same optical path length. Differential comparison between measuring and reference photocells compensates for natural lamp degradation, preventing false alarms.",
    "cat": "OMD",
    "id": "T09S_002"
  },
  {
    "q": "What is the correct OMD calibration procedure?",
    "a": "Zero calibration with clean dry air to set 0.00 mg/L; span calibration with certified gas of known concentration",
    "opts": ["Zero in vacuum; span by injecting actual hot oil mist from engine", "Zero uses 4mA electrical signal; span uses 20mA via loop calibrator", "Zero calibration with clean dry air to set 0.00 mg/L; span calibration with certified gas of known concentration", "Zero uses inert gas; span relies on ambient engine room air"],
    "exp": "After purging tubes with clean air (zero = 0.00 mg/L), a certified calibration gas (e.g. 2.5 mg/L) is introduced to the inlet and the span potentiometer adjusted to match the certified value. Monthly. Log gas batch number.",
    "cat": "OMD",
    "id": "T09S_003"
  },
  {
    "q": "After OMD alarm \u2014 why must you wait minimum 20 minutes before opening the crankcase?",
    "a": "Hot surfaces + residual oil mist + introduced oxygen = crankcase explosion risk",
    "opts": ["To allow the bearing to cool to safe touching temperature", "Hot surfaces + residual oil mist + introduced oxygen = crankcase explosion risk", "Engine must complete 20 more revolution cycles to purge the mist naturally", "Classification rules require exactly 20 minutes before any inspection"],
    "exp": "Residual oil mist above LEL combined with fresh oxygen introduced by opening the crankcase creates an explosive mixture ignitable by any hot surface. 20 minutes minimum allows mist to settle and surfaces to cool below ignition temperature.",
    "cat": "OMD",
    "id": "T09S_004"
  },
  {
    "q": "How does a Viscotherm measure HFO viscosity?",
    "a": "Rotational viscometer \u2014 motor current required to spin a spindle at constant speed is proportional to viscosity",
    "opts": ["PT100 temperature sensor + ISO fuel tables to calculate viscosity", "Rotational viscometer \u2014 motor current required to spin a spindle at constant speed is proportional to viscosity", "Acoustic resonance measuring speed of sound through fuel", "Differential pressure across a fixed orifice plate"],
    "exp": "The Viscotherm spindle is driven at constant speed through the fuel. More viscous oil = more resistance = more torque = higher motor current. This 4-20mA current signal is the viscosity measurement fed to the PI controller.",
    "cat": "VISCOTHERM",
    "id": "T09S_005"
  },
  {
    "q": "Why is viscosity control better than temperature control for HFO injection?",
    "a": "Different HFO grades have different viscosity-temperature curves \u2014 same temperature gives different injection viscosity",
    "opts": ["Temperature controllers cannot handle fuel injection pump pressure fluctuations", "Viscosity controllers require less steam for heating", "Different HFO grades have different viscosity-temperature curves \u2014 same temperature gives different injection viscosity", "Temperature sensors degrade from high sulphur content in HFO"],
    "exp": "RMG 380 needs ~130-140\u00b0C for 14 cSt; RME 180 only needs ~100-110\u00b0C for 14 cSt. Temperature control set to 130\u00b0C would give wrong viscosity for RME 180. Viscosity control directly measures what the injector needs.",
    "cat": "VISCOTHERM",
    "id": "T09S_006"
  },
  {
    "q": "Under SOLAS, how must steering gear motor overload protection be configured?",
    "a": "Alarm only on bridge and engine room \u2014 must NOT automatically trip the motor",
    "opts": ["Must automatically trip motor and start standby unit within 45 seconds", "Must bypass MSB and draw from 24V battery before tripping", "Alarm only on bridge and engine room \u2014 must NOT automatically trip the motor", "Triggers preferential trip to shed non-essential loads first"],
    "exp": "SOLAS Ch II-1 Reg 29: alarm only for steering gear motor overload. Loss of steering during manoeuvring is more dangerous than a burned motor. Crew investigates while maintaining steering capability.",
    "cat": "STEERING",
    "id": "T09S_007"
  },
  {
    "q": "Why is a phase failure relay mandatory for steering gear motors?",
    "a": "Single-phasing draws 1.73\u00d7 normal current causing burnout; phase reversal drives rudder wrong way \u2014 navigation hazard",
    "opts": ["Phase failure boils hydraulic oil causing high-pressure trip", "Single-phasing draws 1.73\u00d7 normal current causing burnout; phase reversal drives rudder wrong way \u2014 navigation hazard", "Allows steering gear to switch from 440V to 24V emergency supply", "Prevents hunting gear oscillation during autopilot operation"],
    "exp": "Single-phasing = only two phases carry current at \u221a3 (1.73) times normal \u2192 rapid overheating. Phase reversal = motor spins backwards \u2192 hydraulic pump reverses \u2192 rudder goes the wrong way. Both are critical navigation hazards.",
    "cat": "STEERING",
    "id": "T09S_008"
  },
  {
    "q": "What is the correct BMS response to Low-Low Water Level in a boiler?",
    "a": "Immediate burner shutdown with zero time delay \u2014 manual reset required",
    "opts": ["30-second delay alarm then trip if level not restored", "Immediate burner shutdown with zero time delay \u2014 manual reset required", "Reduce firing rate to 50% to conserve water", "Activate preferential trip to shed steam heating loads"],
    "exp": "Low-Low water exposes boiler heating tubes. Continued firing = tubes overheat and rupture = catastrophic steam explosion. Zero delay is mandatory \u2014 no time for a grace period. Manual reset ensures engineer investigates before restart.",
    "cat": "BOILER",
    "id": "T09S_009"
  },
  {
    "q": "What must the boiler pre-purge sequence accomplish before ignition is allowed?",
    "a": "FD fan runs for 3-5 air changes in the furnace volume to remove accumulated unburnt fuel vapours",
    "opts": ["Cold HFO is circulated back to settling tank", "FD fan runs for 3-5 air changes in the furnace volume to remove accumulated unburnt fuel vapours", "High-pressure steam injected into burner nozzle to clear carbon", "Ignition transformer sparks for 10 seconds without fuel to warm UV scanner"],
    "exp": "Pre-purge physically blows out combustible gases accumulated during shutdown. Without purge, residual fuel + ignition spark = furnace explosion. Mandatory per SOLAS BMS requirements. Timer typically 2 minutes or 3-5 volume changes.",
    "cat": "BOILER",
    "id": "T09S_010"
  },
  {
    "q": "Why does boiler High Steam Pressure cutout require manual reset?",
    "a": "Auto-reset would allow burner to short-cycle against uncleared high pressure \u2014 forces engineer to investigate",
    "opts": ["Manual reset is legally required outside engine room", "Auto-reset would allow burner to short-cycle against uncleared high pressure \u2014 forces engineer to investigate", "Pressure drops naturally via safety valve over 24 hours", "Auto-resets consume too much control voltage risking UV scanner dropout"],
    "exp": "High pressure = severe fault (blocked steam line, failed pressure control). Auto-reset would cause rapid on/off cycling masking the real problem. Manual reset ensures the root cause is identified before restart.",
    "cat": "BOILER",
    "id": "T09S_011"
  },
  {
    "q": "How does an EM brake on a deck crane achieve the fail-safe condition?",
    "a": "Spring-applied (ON) when de-energised \u2014 electrically released (OFF) only when brake coil is energised",
    "opts": ["Electrically applied by motor starter; springs release when power lost", "Permanent magnet holds load; reverse-polarity pulse disengages", "Spring-applied (ON) when de-energised \u2014 electrically released (OFF) only when brake coil is energised", "Hydraulic brake with pilot solenoid dumping pressure in emergency"],
    "exp": "SAER (Spring Applied, Electrically Released): default state = brake ON = load held = safe. Energising the electromagnet overcomes the spring force and releases the brake. Power failure = spring applies brake automatically = load cannot drop.",
    "cat": "CRANE",
    "id": "T09S_012"
  },
  {
    "q": "What happens when the EM brake air gap becomes too large due to wear?",
    "a": "Electromagnetic force insufficient to overcome spring \u2014 brake drags and overheats the motor",
    "opts": ["Motor draws excessively low current \u2014 undervoltage relay trips", "Electromagnetic force insufficient to overcome spring \u2014 brake drags and overheats the motor", "Springs lose tension \u2014 load slowly slips downward", "Brake coil short-circuits \u2014 blows main control fuses"],
    "exp": "Magnetic pull decreases inversely with air gap. Too large a gap (>0.5mm typically) and the coil cannot fully release the brake disc. Motor strains against partially engaged brake \u2192 overheating \u2192 OLR trips. Check air gap at every survey.",
    "cat": "CRANE",
    "id": "T09S_013"
  },
  {
    "q": "Why must a CPP bow thruster start at zero pitch?",
    "a": "Starting with pitch applied = full hydrodynamic load = sustained 6-8\u00d7 starting current = generator overload",
    "opts": ["Pitch causes hydraulic oil cavitation in hub", "Starting with pitch applied = full hydrodynamic load = sustained 6-8\u00d7 starting current = generator overload", "Pitch bypasses sequential starting timers drawing from ESB", "Prevents shaft earth brush contact causing bearing erosion"],
    "exp": "Unloaded motor: high inrush current drops quickly as motor accelerates. Starting with pitch = motor fights hydrodynamic load and cannot accelerate \u2014 sustained inrush current overloads generator ACB. All CPP thrusters must start at zero pitch.",
    "cat": "BOW_THRUSTER",
    "id": "T09S_014"
  },
  {
    "q": "LP cutout on refrigeration compressor uses automatic reset but HP cutout needs manual reset \u2014 why?",
    "a": "LP trips on normal operating variations (auto-reset safe); HP indicates serious fault (auto-reset risks dangerous pressure cycling)",
    "opts": ["LP cutout is hydraulic, HP is electrical \u2014 different reset mechanisms", "LP trips on normal operating variations (auto-reset safe); HP indicates serious fault (auto-reset risks dangerous pressure cycling)", "LP is set by class; HP is set by manufacturer \u2014 different regulatory requirements", "Both should be manual reset but LP auto-reset is a common engineering shortcut"],
    "exp": "LP trips from normal load variation, defrost cycles, low refrigerant \u2014 condition self-corrects. HP trips from condenser fouling, overcharge, fan failure \u2014 dangerous fault. Auto-resetting against HP fault risks repeated destructive over-pressure cycling.",
    "cat": "REFRIGERATION",
    "id": "T09S_015"
  },
  {
    "q": "What is the difference between Main Engine slow-down and trip?",
    "a": "Slow-down reduces to minimum RPM (bridge can override in emergency); Trip stops engine completely (cannot override)",
    "opts": ["Slow-down is bridge command; trip is automatic only", "Slow-down reduces to minimum RPM (bridge can override in emergency); Trip stops engine completely (cannot override)", "Slow-down is for electrical faults; trip is for mechanical faults only", "Both can be overridden by bridge \u2014 trip just takes longer to activate"],
    "exp": "Slow-down = advisory protection, bridge can override to prevent collision/grounding. Trip = hardware interlock, absolute. Lube oil low-low, overspeed, crankcase explosion = trip = no override possible. Engineer must investigate slow-down cause immediately even if overridden.",
    "cat": "MAINENGINE",
    "id": "T09S_016"
  },
  {
    "q": "What causes 'hunting' in a diesel engine speed governor, and what is the role of the dashpot in preventing it?",
    "a": "Hunting is oscillation of engine speed above and below the set point due to excessive governor gain. The dashpot adds viscous damping \u2014 its needle valve orifice limits the rate of fuel rack movement, preventing overcorrection",
    "opts": ["Hunting is caused by air bubbles in the fuel injection system creating irregular combustion cycles \u2014 the dashpot bleeds air from the fuel line", "Hunting is caused by high exhaust back pressure \u2014 the dashpot measures exhaust pressure and adjusts the governor reference", "Hunting is oscillation of engine speed above and below the set point due to excessive governor gain. The dashpot adds viscous damping \u2014 its needle valve orifice limits the rate of fuel rack movement, preventing overcorrection", "Hunting occurs when the governor spring is too weak \u2014 the dashpot provides additional spring tension to stiffen the control response"],
    "exp": "A governor with too much gain oscillates because it overcorrects. The dashpot is a viscous damper \u2014 a piston in oil with a needle valve orifice. Narrow orifice = slow piston = more damping. Critical damping produces stable speed control without oscillation.",
    "cat": "Governor",
    "id": "T09S_017"
  },
  {
    "q": "What happens to the speed of a DC series motor if its mechanical load is suddenly removed while running?",
    "a": "The motor undergoes a dangerous uncontrolled speed increase (runaway) \u2014 potentially reaching destructive mechanical speed because back-EMF falls and armature current rises with no load counter-torque",
    "opts": ["The motor speed remains perfectly constant because the series winding provides inherent speed regulation", "The motor immediately trips on its overcurrent protection relay because the no-load current exceeds the thermal rating", "The motor slows down and stops because the field winding collapses without load current flowing through it", "The motor undergoes a dangerous uncontrolled speed increase (runaway) \u2014 potentially reaching destructive mechanical speed because back-EMF falls and armature current rises with no load counter-torque"],
    "exp": "DC series motor: field winding in series with armature. No load = low current = weak field flux. Speed N is proportional to V/(flux). As flux falls, speed rises uncontrollably. This is why series motors are NEVER used without a coupled load \u2014 always used on hoists and cranes where the load is always present.",
    "cat": "Motors",
    "id": "T09S_018"
  },
  {
    "q": "How does the salinometer installed in a freshwater generator system provide an interlock to protect boiler and jacket water circuits?",
    "a": "The salinometer measures the conductivity of the distillate \u2014 if salinity exceeds the setpoint (typically 10 ppm), it automatically diverts the distillate overboard via a 3-way diverter valve before it can enter the storage tanks",
    "opts": ["The salinometer measures the temperature of the distillate and opens the overboard valve if temperature falls below 60 degrees C to prevent contamination of potable water", "The salinometer measures the flow rate of distillate production and stops the FWG if production falls below the minimum efficient rate", "The salinometer is only an alarm instrument \u2014 it alerts the OOW but has no automatic diverting interlock function", "The salinometer measures the conductivity of the distillate \u2014 if salinity exceeds the setpoint (typically 10 ppm), it automatically diverts the distillate overboard via a 3-way diverter valve before it can enter the storage tanks"],
    "exp": "High salinity in distillate indicates a leak in the evaporator heat exchanger allowing seawater contamination. The 3-way diverter valve automatically routes contaminated water overboard. The ETO tests this interlock by adjusting the setpoint during monthly rounds.",
    "cat": "Sensors",
    "id": "T09S_019"
  },
  {
    "q": "What is the correct 8-step manual dead ship recovery sequence after a complete blackout and main generator failure?",
    "a": "1-Emergency gen confirmed \u2192 2-Cooling pumps \u2192 3-Lube oil pumps \u2192 4-Starting air compressors \u2192 5-Auxiliary boiler \u2192 6-Purifiers \u2192 7-Main generator start \u2192 8-Main engine preparation",
    "opts": ["1-Emergency gen confirmed \u2192 2-Cooling pumps \u2192 3-Lube oil pumps \u2192 4-Starting air compressors \u2192 5-Auxiliary boiler \u2192 6-Purifiers \u2192 7-Main generator start \u2192 8-Main engine preparation", "1-Start main engine immediately using emergency air supply \u2192 2-Emergency generator \u2192 3-All loads simultaneously", "1-Radio bridge \u2192 2-Emergency steering \u2192 3-Main generator \u2192 4-Engine room equipment in any order", "1-Anchor immediately \u2192 2-Call for assistance \u2192 3-Wait for main power to restore automatically"],
    "exp": "The dead ship sequence is critical: cooling must precede lub oil (bearings need cooling), air compressors are needed to start the main generator if it has a pneumatic starter, and the main engine requires lube oil pressure and cooling before firing.",
    "cat": "DeadShip",
    "id": "T09S_020"
  },
  {
    "q": "What is the function of the Jacket Cooling Water (JCW) temperature interlock on a main diesel engine, and what are the critical temperature limits?",
    "a": "Below 55 degrees C the JCW thermostat alarm activates \u2014 cold corrosion occurs as sulphuric acid condenses in cylinders. Above 90 degrees C an alarm and possible slowdown trip activate to prevent overheating and seizure",
    "opts": ["The JCW temperature interlock monitors coolant flow rate \u2014 low flow triggers an alarm regardless of temperature", "JCW temperature is only monitored in port \u2014 the ship can safely operate at any JCW temperature at sea", "Below 55 degrees C the JCW thermostat alarm activates \u2014 cold corrosion occurs as sulphuric acid condenses in cylinders. Above 90 degrees C an alarm and possible slowdown trip activate to prevent overheating and seizure", "The JCW thermostat opens and closes automatically without any alarm function \u2014 it only controls the bypass valve"],
    "exp": "Cold corrosion: below 55 deg C, sulphur combustion products condense as H2SO4 and attack cylinder liners. Hot cracking: above 90 deg C, thermal stress causes micro-cracks in cylinder heads and liners. The ETO verifies these setpoints on the IAS during UMS rounds.",
    "cat": "Alarms",
    "id": "T09S_021"
  },
  {
    "q": "Under UMS (Unmanned Machinery Space) regulations, what is the maximum period the engine room may be left unattended and what pre-departure checks are mandatory?",
    "a": "UMS allows unmanned operation typically for periods of up to 16 hours. Pre-departure: verify all alarms active, fuel levels, IAS alarm routing to bridge, engineer call system, and fire detection \u2014 logged in the UMS checklist",
    "opts": ["UMS allows unmanned operation typically for periods of up to 16 hours. Pre-departure: verify all alarms active, fuel levels, IAS alarm routing to bridge, engineer call system, and fire detection \u2014 logged in the UMS checklist", "UMS permits only 4 hours of unmanned operation \u2014 an engineer must physically enter the engine room every 4 hours", "UMS requires a watchkeeper to remain physically in the engine room at all times \u2014 only the watch position may move to the ECR", "UMS allows permanently unmanned operation at sea with no time limit as long as the fire detection system is operational"],
    "exp": "SOLAS II-1/54 and Class requirements specify UMS watchkeeping. The ETO is responsible for verifying all IAS alarm routing to the bridge, BNWAS-equivalent engineer call system, and completing the UMS pre-departure checklist before the engine room is left unmanned.",
    "cat": "UMS",
    "id": "T09S_022"
  },
  {
    "q": "What are the standard calibration gases used to test a multi-gas personal gas detector (O2, LEL, CO, H2S) before an enclosed space entry?",
    "a": "O2 calibration gas at approximately 18% (below normal to test low O2 alarm); LEL calibration at 50% of known hydrocarbon gas; CO at 50 ppm; H2S at 10 ppm \u2014 using certified standard mixtures",
    "opts": ["Calibration gases are not required \u2014 bump testing with workplace air confirms the instrument is reading correctly", "O2 calibration gas at approximately 18% (below normal to test low O2 alarm); LEL calibration at 50% of known hydrocarbon gas; CO at 50 ppm; H2S at 10 ppm \u2014 using certified standard mixtures", "Any combustible gas at 100% LEL to confirm the instrument trips at the LEL threshold", "Pure nitrogen to zero all sensors, then atmospheric air to set the 100% scale for all sensor types simultaneously"],
    "exp": "Calibration gas cylinders with certified traceable concentrations are required for accurate pre-entry testing. Simply bumping the sensor with a known gas at the calibration point (not just confirming a reading) is the proper procedure per IMO Enclosed Space Entry guidelines.",
    "cat": "Alarms",
    "id": "T09S_023"
  },
  {
    "q": "On an auto-tensioning mooring winch, what is the role of the load cell connected to the winch frame, and what happens when the design tension is exceeded by 25%?",
    "a": "The load cell measures actual mooring line tension continuously. At 125% of preset tension, the drive software clips the torque reference and dynamically pays out rope to prevent line breakage",
    "opts": ["The load cell provides an indication only \u2014 automatic payout does not occur until the line physically slips on the drum", "The load cell is used only for recording purposes \u2014 the tension setpoint must be manually adjusted by the officer on watch", "The load cell measures actual mooring line tension continuously. At 125% of preset tension, the drive software clips the torque reference and dynamically pays out rope to prevent line breakage", "The load cell monitors motor temperature and reduces winch speed when thermal limits approach"],
    "exp": "Auto-tension systems use load cells as the feedback element in a closed-loop tension control system. The VFD maintains set tension by heaving or paying out. At 125% set tension, the torque limit clips the reference to prevent structural overload.",
    "cat": "Motors",
    "id": "T09S_024"
  },
  {
    "q": "What is the purpose of the pressure switch installed in the lube oil system of a diesel generator, and what is its typical trip setpoint?",
    "a": "The lube oil low-pressure switch shuts down the diesel generator if lube oil pressure falls below approximately 1.5-2.0 bar (150-200 kPa) to prevent catastrophic bearing damage from oil starvation",
    "opts": ["The lube oil pressure switch is only used during start-up to confirm pressure has built up before firing the engine", "The lube oil low-pressure switch shuts down the diesel generator if lube oil pressure falls below approximately 1.5-2.0 bar (150-200 kPa) to prevent catastrophic bearing damage from oil starvation", "The pressure switch monitors filter differential pressure and triggers a filter bypass valve when blockage is detected", "The lube oil pressure switch activates the auxiliary lube oil pump to maintain pressure during manoeuvring when the main engine-driven pump is slow"],
    "exp": "Lube oil pressure low-low trip is one of the primary safety shutdowns on a diesel generator. Without sufficient oil film, journal bearings seize within seconds. Typical set point is 1.5-2.0 bar with a 3-5 second time delay to avoid nuisance trips during starting.",
    "cat": "Alarms",
    "id": "T09S_025"
  },
  {
    "q": "What does the term 'crankcase explosion' refer to and what are the two safety devices that protect against this hazard?",
    "a": "An explosion inside the crankcase caused by ignition of oil mist. Protected by: (1) mist detector alarm that shuts down the engine, and (2) crankcase relief valves that open to release pressure while preventing air re-entry",
    "opts": ["An explosion caused by excessive combustion pressure bleeding past worn piston rings into the crankcase space", "An explosion inside the crankcase caused by ignition of oil mist. Protected by: (1) mist detector alarm that shuts down the engine, and (2) crankcase relief valves that open to release pressure while preventing air re-entry", "An explosion caused by overheating of the flywheel bearing that ignites leaked fuel in the aft crankcase", "An explosion caused by water contamination in the fuel injectors creating hydraulic pressure spikes inside the crankcase"],
    "exp": "Crankcase explosions kill engineers. Hot bearings vaporise lube oil. Oil mist detector (OMD) alarms on high mist concentration and triggers slow-down/shutdown. Crankcase relief valves are spring-loaded diaphragms that vent the explosion wave but reseal immediately to prevent air ingress that would sustain combustion.",
    "cat": "Alarms",
    "id": "T09S_026"
  },
  {
    "q": "What is the critical function of the 'Reference Tube' in an Oil Mist Detector?",
    "a": "It provides a baseline clean-air optical measurement to compensate for lamp aging and sensor drift",
    "opts": ["It provides a baseline clean-air optical measurement to compensate for lamp aging and sensor drift", "It cools the sampled crankcase gases before they reach the photocell", "It provides a constant flow of calibration gas to the measuring chamber", "It chemically neutralises the oil mist before it is exhausted to the atmosphere"],
    "exp": "The reference tube is filled with clean air and has the exact same optical path length as the measuring tube. By comparing the output of the measuring tube to the reference tube, the system automatically cancels out any errors caused by the light source gradually dimming over time (lamp aging).",
    "cat": "OMD",
    "id": "T09S_027"
  },
  {
    "q": "An OMD alarm activates while the vessel is at sea. What is the STRICTEST safety rule regarding the engine crankcase?",
    "a": "Reduce engine load immediately, and wait a minimum of 20 minutes after stopping before opening any crankcase doors",
    "opts": ["Inject CO2 directly into the crankcase while the engine is still running", "Reduce engine load immediately, and wait a minimum of 20 minutes after stopping before opening any crankcase doors", "Reset the alarm and restart the engine to see if the fault clears itself", "Open the crankcase doors immediately to ventilate the explosive gases"],
    "exp": "An OMD alarm indicates a potential bearing failure and the presence of explosive oil mist. Opening the doors immediately introduces fresh oxygen, which can instantly trigger a catastrophic secondary explosion if hot spots remain. You MUST wait at least 20 minutes after the engine stops to allow internal components to cool.",
    "cat": "OMD",
    "id": "T09S_028"
  },
  {
    "q": "According to SOLAS, which marine diesel engines MUST be fitted with an Oil Mist Detector or bearing temperature monitors?",
    "a": "Engines with a power output of 2250 kW and above, OR a cylinder bore of 300 mm and above",
    "opts": ["Engines with a power output of 1000 kW and above, OR a cylinder bore of 200 mm and above", "Only two-stroke slow-speed main propulsion engines", "Engines with a power output of 2250 kW and above, OR a cylinder bore of 300 mm and above", "All marine diesel engines regardless of size"],
    "exp": "SOLAS Chapter II-1 Reg 16 mandates crankcase explosion protection (like an OMD or bearing temperature monitors) for engines of 2250 kW and above, or having a cylinder bore of 300 mm and above.",
    "cat": "OMD",
    "id": "T09S_029"
  },
  {
    "q": "What are the two specific steps required to correctly calibrate an Oil Mist Detector?",
    "a": "Zero calibration using clean, dry instrument air, followed by Span calibration using certified calibration gas",
    "opts": ["Zero calibration using a multimeter, followed by Span calibration using an optical lux meter", "Zero calibration by completely blocking the light beam, followed by Span calibration using ambient engine room air", "Zero calibration using clean, dry instrument air, followed by Span calibration using certified calibration gas", "Zero calibration using exhaust gas, followed by Span calibration using fresh lubricating oil"],
    "exp": "Calibration requires setting the baseline (Zero) while purging the tubes with completely clean, dry air so the display reads 0.00 mg/L. Then, a certified test gas of known concentration (e.g., 2.5 mg/L) is injected, and the gain (Span) is adjusted so the display matches the gas certificate.",
    "cat": "OMD",
    "id": "T09S_030"
  },
  {
    "q": "Why is a Viscosity Controller (Viscotherm) used to control HFO heating for main engine injection, rather than a simple Temperature Controller?",
    "a": "Different grades of HFO require different temperatures to reach the ideal injection viscosity (10-14 cSt); a viscosity controller automatically adapts to any fuel grade",
    "opts": ["A temperature controller cannot react fast enough to changes in engine load", "Viscosity controllers consume less electrical power than temperature controllers", "Different grades of HFO require different temperatures to reach the ideal injection viscosity (10-14 cSt); a viscosity controller automatically adapts to any fuel grade", "Temperature controllers are not approved for use in hazardous marine environments"],
    "exp": "The goal of heating fuel is purely to reach the correct viscosity (10-14 cSt) for perfect atomisation. RMG 380 might need 130\u00b0C to reach 14 cSt, while RME 180 only needs 105\u00b0C. A viscosity controller measures the physical drag of the fuel and adjusts the steam valve automatically, regardless of what grade was bunkered.",
    "cat": "VIS",
    "id": "T09S_031"
  },
  {
    "q": "What is the typical target injection viscosity required for proper atomisation in a main marine diesel engine?",
    "a": "10 to 14 cSt",
    "opts": ["50 to 80 cSt", "380 cSt", "10 to 14 cSt", "2 to 5 cSt"],
    "exp": "For main engine injectors to atomise the fuel perfectly, the HFO must be heated until its viscosity drops to between 10 and 14 cSt (centistokes). Auxiliary engines generally run slightly higher, around 14-20 cSt.",
    "cat": "VIS",
    "id": "T09S_032"
  },
  {
    "q": "In a rotational Viscotherm system, what exact physical parameter is measured and converted into a 4-20mA control signal?",
    "a": "The electrical current (torque) required by the constant-speed motor to drive the spindle through the flowing fuel",
    "opts": ["The physical temperature of the fuel as it passes over the spindle", "The electrical current (torque) required by the constant-speed motor to drive the spindle through the flowing fuel", "The speed (RPM) of a free-spinning turbine wheel inside the fuel pipe", "The pressure drop across a fixed capillary restriction"],
    "exp": "In a rotational viscometer, a motor drives a spindle at a perfectly constant speed. If the fuel is thick (viscous), it creates high drag, and the motor draws more current (torque) to maintain that speed. This motor current is directly proportional to the viscosity.",
    "cat": "VIS",
    "id": "T09S_033"
  },
  {
    "q": "What type of control algorithm is used by the Viscotherm controller to adjust the steam valve, and why?",
    "a": "PI (Proportional-Integral) control; Derivative action is excluded because it would amplify mechanical pump noise and cause the steam valve to hunt erratically",
    "opts": ["PI (Proportional-Integral) control; Derivative action is excluded because it would amplify mechanical pump noise and cause the steam valve to hunt erratically", "PID (Proportional-Integral-Derivative) control; for the fastest possible response to temperature spikes", "P (Proportional) control only; because integral action causes dangerous overheating", "ON/OFF control; because the steam valve can only be fully open or fully closed"],
    "exp": "Heating fuel is a slow thermal process. Proportional (P) provides the base reaction, Integral (I) slowly eliminates the steady-state error. Derivative (D) reacts to the rate of change. Because fuel lines have mechanical pressure ripples from the pumps, 'D' would see this as rapid changes and make the steam valve swing wildly (hunting).",
    "cat": "VIS",
    "id": "T09S_034"
  },
  {
    "q": "What is the primary function of a dashpot in a ship's control or protection system?",
    "a": "It is a hydraulic or pneumatic damping device that introduces a controlled time delay by forcing fluid through a calibrated orifice",
    "opts": ["It is a backup lubrication reservoir for critical bearings", "It measures the viscosity of lubricating oil in real-time", "It acts as a rapid-discharge accumulator to snap valves closed instantly", "It is a hydraulic or pneumatic damping device that introduces a controlled time delay by forcing fluid through a calibrated orifice"],
    "exp": "A dashpot converts instantaneous force into a delayed or dampened movement. The piston can only move as fast as the air or oil can squeeze through the small needle valve (orifice).",
    "cat": "DPT",
    "id": "T09S_035"
  },
  {
    "q": "How does a dashpot prevent 'hunting' in a diesel engine mechanical governor?",
    "a": "It slows down the movement of the fuel rack actuator, preventing the governor from over-correcting and causing speed oscillations",
    "opts": ["It physically locks the fuel rack in place until the engine temperature stabilizes", "It injects extra fuel directly into the cylinders during sudden load drops", "It slows down the movement of the fuel rack actuator, preventing the governor from over-correcting and causing speed oscillations", "It filters out air bubbles from the heavy fuel oil supply"],
    "exp": "Without a dashpot, a drop in speed causes the governor to snap the fuel rack wide open. The engine overshoots the target speed, the governor snaps it closed, and it undershoots (hunting). The dashpot provides 'damping', slowing the rack movement so the engine settles smoothly at the new setpoint.",
    "cat": "DPT",
    "id": "T09S_036"
  },
  {
    "q": "How does a dashpot provide the 'Inverse-Time' characteristic required for an Air Circuit Breaker (ACB) overcurrent trip?",
    "a": "A massive short-circuit force easily overcomes the oil resistance for a fast trip, while a small overload force pushes the oil slowly, creating a long time delay",
    "opts": ["It uses electronic timers to calculate the exact inverse mathematical curve", "It reverses the polarity of the trip coil depending on the magnitude of the fault", "It physically blocks the trip lever until the temperature of the oil reaches boiling point", "A massive short-circuit force easily overcomes the oil resistance for a fast trip, while a small overload force pushes the oil slowly, creating a long time delay"],
    "exp": "In an oil-dashpot overcurrent relay, the magnetic pull of the fault tries to lift a piston through oil. A massive fault pulls so hard it yanks the piston through instantly. A 110% overload pulls weakly, so the piston creeps up slowly, giving a long time delay. Higher current = faster trip.",
    "cat": "DPT",
    "id": "T09S_037"
  },
  {
    "q": "According to SOLAS, what is the UNIQUE and critical rule regarding electrical overload protection for the main Steering Gear motor?",
    "a": "An overload condition must trigger an ALARM ONLY on the bridge and engine room, and MUST NOT automatically trip the motor",
    "opts": ["An overload condition must instantly trip the motor to prevent a fire in the steering gear flat", "An overload condition must automatically switch the system to the emergency 24V battery supply", "An overload condition must trigger an ALARM ONLY on the bridge and engine room, and MUST NOT automatically trip the motor", "An overload condition must automatically start the emergency generator"],
    "exp": "Loss of steering in a narrow channel or heavy weather is a severe danger to the ship. SOLAS mandates that the steering motor must keep running even if it burns itself out trying to turn the rudder. An overload gives an alarm so engineers can investigate, but it will never trip automatically.",
    "cat": "STG",
    "id": "T09S_038"
  },
  {
    "q": "Why is a Phase Failure Relay absolutely MANDATORY on the power supply to a steering gear motor?",
    "a": "Because loss of a single phase causes the motor to draw massive current and rapidly burn out, and a phase reversal would cause the rudder to turn in the wrong direction",
    "opts": ["Because steering gear motors are the only motors on board that operate on High Voltage", "Because it ensures the motor runs at exactly 60Hz to comply with SOLAS timing rules", "Because loss of a single phase causes the motor to draw massive current and rapidly burn out, and a phase reversal would cause the rudder to turn in the wrong direction", "Because it prevents harmonic distortion from affecting the ship's main switchboard"],
    "exp": "If one phase drops, the motor single-phases, drawing 1.7x normal current and burning out rapidly. If two phases are accidentally swapped during maintenance, the motor runs backwards, meaning a command to steer Port will steer Starboard\u2014a catastrophic navigation hazard. The relay protects against both.",
    "cat": "STG",
    "id": "T09S_039"
  },
  {
    "q": "What is the specific mechanical/electrical phenomenon known as 'Rudder Hunting'?",
    "a": "The rudder oscillates continuously back and forth across the demanded angle without stopping, usually caused by a failure in the follow-up feedback linkage (hunting gear)",
    "opts": ["The rudder responds too slowly to commands, missing the required SOLAS 28-second timing", "The steering pump motor draws pulsing current, causing the main generator to hunt", "The rudder physically locks at hard-over and refuses to return to midships", "The rudder oscillates continuously back and forth across the demanded angle without stopping, usually caused by a failure in the follow-up feedback linkage (hunting gear)"],
    "exp": "In a Follow-Up (FU) system, mechanical feedback cancels the solenoid signal when the rudder reaches the requested angle. If this feedback linkage is worn or disconnected, the solenoid stays energized, the rudder overshoots, the system tries to correct it, and the rudder swings continuously left and right.",
    "cat": "STG",
    "id": "T09S_040"
  },
  {
    "q": "If you observe rudder hunting while on watch, what is the fastest way to confirm that the fault is in the follow-up feedback loop?",
    "a": "Switch the steering control to Non-Follow-Up (NFU) mode; if the rudder stabilizes and responds correctly, the fault is isolated to the follow-up feedback path",
    "opts": ["Switch the steering control to Non-Follow-Up (NFU) mode; if the rudder stabilizes and responds correctly, the fault is isolated to the follow-up feedback path", "Trip the main steering motor breaker and wait for the standby pump to auto-start", "Manually open the hydraulic bypass valve on the ram cylinders", "Increase the proportional gain on the autopilot to force the rudder to stop"],
    "exp": "NFU (Non-Follow-Up) mode completely bypasses the hunting gear and feedback potentiometers. In NFU, you hold the tiller lever, the solenoid energizes, and the rudder moves until you let go. If NFU works perfectly, you know the hydraulics and solenoids are fine, and the fault lies entirely in the Follow-Up feedback loop.",
    "cat": "STG",
    "id": "T09S_041"
  },
  {
    "q": "According to SOLAS, what is the required performance standard for the steering gear on a vessel above 10,000 GT?",
    "a": "It must be capable of putting the rudder from 35\u00b0 on one side to 30\u00b0 on the other side in not more than 28 seconds, while at maximum ahead service speed",
    "opts": ["It must be capable of turning the vessel 360 degrees in less than 5 minutes at half speed", "It must be capable of putting the rudder from 35\u00b0 on one side to 30\u00b0 on the other side in not more than 28 seconds, while at maximum ahead service speed", "It must auto-start the standby pump within 45 seconds if the primary pump fails", "It must be capable of moving from hard-port to hard-starboard in 15 seconds while stationary"],
    "exp": "This is the classic SOLAS II-1/29 performance rule. The steering gear must have the hydraulic power to push the rudder against the massive hydrodynamic forces of the ship moving at full ahead, achieving 35\u00b0 to 30\u00b0 on the opposite side within 28 seconds.",
    "cat": "STG",
    "id": "T09S_042"
  },
  {
    "q": "In a boiler Burner Management System (BMS), which fault condition causes an IMMEDIATE trip and shutdown of the burner with absolutely NO time delay?",
    "a": "Low-Low Water Level",
    "opts": ["Low-Low Water Level", "Low Fuel Oil Pressure", "High Flue Gas Temperature", "High Steam Pressure"],
    "exp": "If the water level drops below the low-low limit, the furnace crown or tubes are exposed directly to the flame without cooling water. They will overheat, soften, and rupture (explode) within seconds. Therefore, this trip is hardwired to shut off the fuel instantly without any delay.",
    "cat": "BLR",
    "id": "T09S_043"
  },
  {
    "q": "Why is a 'Pre-Purge' cycle absolutely mandatory in the boiler light-off sequence?",
    "a": "It forces several air changes through the furnace to clear out any accumulated unburnt fuel vapour from previous failed starts, preventing a catastrophic furnace explosion",
    "opts": ["It allows the Forced Draft (FD) fan motor to warm up slowly before full load is applied", "It raises the steam pressure slowly to prevent thermal shock to the boiler shell", "It forces several air changes through the furnace to clear out any accumulated unburnt fuel vapour from previous failed starts, preventing a catastrophic furnace explosion", "It pre-heats the heavy fuel oil in the burner nozzle to ensure proper atomisation"],
    "exp": "If a boiler fails to ignite, fuel mist is sprayed into the dark furnace. If you try to spark it again immediately, that accumulated mist will detonate, blowing the boiler apart. The BMS enforces a mandatory 3-5 volume air purge (using the FD fan) to vent these gases up the funnel before allowing a spark.",
    "cat": "BLR",
    "id": "T09S_044"
  },
  {
    "q": "What happens if the UV (Ultraviolet) Scanner fails to detect a flame during normal boiler operation?",
    "a": "The BMS immediately closes the main fuel valve and initiates a flame failure LOCKOUT, which requires manual investigation and reset",
    "opts": ["The BMS increases the Forced Draft fan speed to provide more oxygen to the fire", "The BMS immediately closes the main fuel valve and initiates a flame failure LOCKOUT, which requires manual investigation and reset", "The BMS triggers an alarm but keeps the fuel valve open to prevent losing steam pressure", "The BMS automatically switches over to the pilot burner to sustain the flame"],
    "exp": "Loss of flame means fuel is pouring into a hot, unlit furnace\u2014creating a massive explosion hazard. The BMS shuts the fuel valve instantly and goes into 'Lockout'. A lockout cannot clear itself; an engineer must physically go to the panel, investigate the cause (e.g., dirty UV lens, water in fuel), and press the manual reset button.",
    "cat": "BLR",
    "id": "T09S_045"
  },
  {
    "q": "Why do modern marine boilers use an Ultraviolet (UV) scanner for flame detection rather than an Infrared (IR) or visible light sensor?",
    "a": "UV scanners only detect the specific UV radiation emitted by the chemical reaction of an active flame, preventing false positive signals from glowing red-hot refractory bricks",
    "opts": ["UV scanners are the only sensors capable of penetrating thick black fuel smoke", "UV scanners operate on 24V DC, which makes them immune to shipboard power fluctuations", "UV scanners are significantly cheaper and easier to calibrate than IR sensors", "UV scanners only detect the specific UV radiation emitted by the chemical reaction of an active flame, preventing false positive signals from glowing red-hot refractory bricks"],
    "exp": "The refractory lining inside the furnace gets incredibly hot and glows bright red/orange. An IR or visible light sensor would look at the hot bricks and falsely report 'flame present', allowing fuel to be sprayed into a dead furnace. UV radiation is only produced by the actual chemical combustion process of the flame.",
    "cat": "BLR",
    "id": "T09S_046"
  },
  {
    "q": "During boiler operation, the 'High Steam Pressure' trip activates. Once the steam pressure drops back to normal, what must happen before the boiler can restart?",
    "a": "An engineer must manually reset the High Steam Pressure switch/relay; it will not auto-reset",
    "opts": ["The BMS must be rebooted by cycling the main power breaker", "The boiler must be completely blown down and refilled with fresh feedwater", "An engineer must manually reset the High Steam Pressure switch/relay; it will not auto-reset", "The boiler will restart automatically as soon as the pressure drops below the low-pressure setpoint"],
    "exp": "The High Steam Pressure trip is a critical safety device designed to prevent the boiler from exploding if the normal modulating pressure controller fails. If it trips, the situation is dangerous. It requires a manual reset to ensure an engineer acknowledges that the normal control loop has failed.",
    "cat": "BLR",
    "id": "T09S_047"
  },
  {
    "q": "Which safety device monitors the operation of the Forced Draft (FD) fan to ensure adequate combustion air is entering the furnace?",
    "a": "A Differential Pressure (DP) switch or airflow switch mounted across the FD fan outlet",
    "opts": ["An oxygen analyser mounted in the exhaust uptake", "A UV scanner monitoring the brightness of the flame", "A Differential Pressure (DP) switch or airflow switch mounted across the FD fan outlet", "A thermistor monitoring the temperature of the FD fan motor bearings"],
    "exp": "If the FD fan belt snaps or the motor fails, fuel will burn without enough oxygen, creating massive amounts of black smoke, soot, and carbon monoxide, leading to unburnt fuel accumulation. A DP switch proves actual air pressure/flow exists before the BMS opens the fuel valve.",
    "cat": "BLR",
    "id": "T09S_048"
  },
  {
    "q": "What is the function of the vibration switch on a centrifugal fuel oil purifier, and what are the common causes of it tripping?",
    "a": "It trips the purifier motor on excessive vibration; common causes include uneven sludge build-up (unbalanced bowl), worn bearings, or worn friction clutch pads",
    "opts": ["It cleans the oil by vibrating the bowl at high frequencies; trips are caused by dirty oil", "It ensures the bowl is spinning fast enough to separate water; trips are caused by low voltage", "It monitors the frequency of the incoming AC supply; trips are caused by generator hunting", "It trips the purifier motor on excessive vibration; common causes include uneven sludge build-up (unbalanced bowl), worn bearings, or worn friction clutch pads"],
    "exp": "The vibration switch is a critical safety device. A purifier bowl spins at extremely high speeds (e.g., 8000 RPM). If sludge accumulates unevenly, the bowl becomes unbalanced, causing violent vibration that can physically tear the machine off its mountings if not stopped immediately.",
    "cat": "PUR",
    "id": "T09S_049"
  },
  {
    "q": "During the starting or stopping of a purifier, the machine experiences a temporary, severe vibration that quickly goes away as the speed changes. What is this phenomenon?",
    "a": "Passing through the 'Critical Speed'",
    "opts": ["Phase imbalance in the electric motor", "Slipping of the magnetic clutch", "Cavitation of the oil pump", "Passing through the 'Critical Speed'"],
    "exp": "Every rotating mass has a natural frequency. 'Critical speed' is the exact RPM where the rotational frequency matches the natural frequency of the machine, causing resonance and high vibration. The motor must accelerate through this speed quickly to avoid damage.",
    "cat": "PUR",
    "id": "T09S_050"
  },
  {
    "q": "Why do modern marine fuel oil purifiers generally NOT use mechanical friction brakes to stop the bowl?",
    "a": "Friction brakes generate intense heat and potential sparks, which poses a severe fire/explosion hazard in an environment saturated with hot oil mist",
    "opts": ["Friction brakes generate intense heat and potential sparks, which poses a severe fire/explosion hazard in an environment saturated with hot oil mist", "Mechanical brakes are too expensive to maintain under SOLAS rules", "Friction brakes would cause the bowl to spin in reverse, destroying the bearings", "The sudden stop would cause the sludge to harden and block the discharge ports"],
    "exp": "Safety is the primary reason. Instead of mechanical pads, many modern purifiers simply free-run to a stop, or they use electrical braking methods (like DC injection or VFD regenerative braking) to slow the motor safely without physical friction.",
    "cat": "PUR",
    "id": "T09S_051"
  },
  {
    "q": "You press the 'START' button for the Bow Thruster on the bridge, but the motor does not start. Assuming the motor and starter are healthy, what is the most likely electrical interlock preventing the start?",
    "a": "Insufficient running generator capacity on the main switchboard (Power Management System block)",
    "opts": ["The emergency generator is not in standby mode", "The steering gear motors are currently running", "The ship's speed is over 15 knots", "Insufficient running generator capacity on the main switchboard (Power Management System block)"],
    "exp": "The bow thruster is usually the single largest electrical consumer on the ship. The Power Management System (PMS) evaluates the 'Available Power'. If starting the massive thruster motor would overload the running generators, the PMS blocks the start request until an additional generator is started and synchronized.",
    "cat": "BWT",
    "id": "T09S_052"
  },
  {
    "q": "Aside from generator capacity, what are the essential physical and operational interlocks required before a Controllable Pitch (CPP) bow thruster will start?",
    "a": "Propeller pitch must be at exactly ZERO, adequate vessel draft/immersion must be confirmed, and control must be assigned to the active station",
    "opts": ["Propeller pitch must be at exactly ZERO, adequate vessel draft/immersion must be confirmed, and control must be assigned to the active station", "The anchor windlass must be secured, and the main engine must be stopped", "The thruster tunnel doors must be verified open via limit switches", "The rudder must be amidships, and the vessel must be making zero forward way"],
    "exp": "Starting a massive motor is hard enough; starting it while the propeller blades are angled (creating thrust/load) would cause a massive overcurrent trip. Therefore, pitch must be proven at ZERO. Furthermore, if the ship is light-draft and the tunnel is above water, starting it would overspeed the motor and destroy the seals.",
    "cat": "BWT",
    "id": "T09S_053"
  },
  {
    "q": "What is the fundamental working principle of an Electromagnetic (EM) Brake used on marine cranes and windlasses?",
    "a": "It is 'Fail-Safe': Heavy springs physically apply the brake pads to hold the load. Applying electrical power to the electromagnet pulls the springs back, releasing the brake",
    "opts": ["It is 'Fail-Safe': Heavy springs physically apply the brake pads to hold the load. Applying electrical power to the electromagnet pulls the springs back, releasing the brake", "It uses an electromagnet to physically push the brake pads against the spinning rotor", "It uses hydraulic fluid controlled by an electric solenoid to squeeze the brake discs", "It generates a reverse magnetic field to slow the motor down dynamically without brake pads"],
    "exp": "Fail-safe design is critical for lifting appliances. If the ship loses power (blackout) or a cable snaps, the brake MUST engage automatically. Therefore, mechanical springs are always pushing the brake ON. You must apply electricity to the coil to turn the brake OFF and allow movement.",
    "cat": "CRA",
    "id": "T09S_054"
  },
  {
    "q": "What happens if the 'Air Gap' between the armature plate and the electromagnet coil in a crane's EM brake becomes too large due to brake pad wear?",
    "a": "The magnetic coil will not have enough strength to pull the armature across the larger gap, meaning the brake will drag or completely fail to release, causing motor overload",
    "opts": ["The motor will spin 10% faster to compensate for the lost braking force", "The brake will release too quickly, dropping the load instantly", "The electromagnet will draw zero current, triggering a low-voltage alarm", "The magnetic coil will not have enough strength to pull the armature across the larger gap, meaning the brake will drag or completely fail to release, causing motor overload"],
    "exp": "Magnetic pull decreases exponentially with distance. If the brake pads wear down, the gap between the pulling coil and the metal plate widens. Eventually, the coil isn't strong enough to compress the heavy springs. The brake stays clamped shut while the motor tries to turn, burning out the motor or the brake coil.",
    "cat": "CRA",
    "id": "T09S_055"
  },
  {
    "q": "Under the new SOLAS II-1/3-13 regulations for Lifting Appliances (effective 2026), what are the ETO's specific statutory responsibilities regarding the ship's cranes?",
    "a": "Ensure electrical systems are maintained, verify Safe Working Load (SWL) markings are clearly legible at control stations, and guarantee the hoist overload limit switches are properly calibrated and functional",
    "opts": ["Perform the 5-yearly 125% proof load test independently and sign the certificates", "Weld structural reinforcements to the crane jib if micro-cracks are detected", "Ensure electrical systems are maintained, verify Safe Working Load (SWL) markings are clearly legible at control stations, and guarantee the hoist overload limit switches are properly calibrated and functional", "Operate the crane during all cargo operations to ensure smooth electrical performance"],
    "exp": "SOLAS now brings lifting appliances under statutory survey (meaning Port State Control can detain the ship for bad cranes). The ETO must ensure the electronic load cell / overload limit switch is strictly preventing the crane from lifting beyond its marked SWL, and that the SWL is clearly painted near the controls.",
    "cat": "CRA",
    "id": "T09S_056"
  },
  {
    "q": "Why is the crane's Hoist Overload limit switch so critical, and how does it typically function?",
    "a": "It prevents lifting loads beyond the SWL, which could capsize the crane or snap the wire; it uses a load cell (strain gauge) to measure tension and cuts power to the 'Hoist UP' contactor if the limit is breached",
    "opts": ["It prevents the crane from slewing too fast; it uses a centrifugal governor", "It prevents lifting loads beyond the SWL, which could capsize the crane or snap the wire; it uses a load cell (strain gauge) to measure tension and cuts power to the 'Hoist UP' contactor if the limit is breached", "It prevents the motor from overheating; it uses a thermistor embedded in the stator", "It prevents the crane hook from hitting the jib sheave; it uses a mechanical trip arm"],
    "exp": "An overload switch is not about motor heat; it's about structural limits. If a stevedore tries to lift a 40-ton container with a 30-ton crane, the load cell detects the massive strain and immediately disables the 'Hoist UP' function, while still allowing the operator to use 'Hoist DOWN' to safely set the container back down.",
    "cat": "CRA",
    "id": "T09S_057"
  },
  {
    "q": "On a marine refrigeration compressor, what is the critical difference between the High Pressure (HP) cut-out and the Low Pressure (LP) cut-out regarding how they are reset?",
    "a": "The HP cut-out MUST be manually reset by an engineer, while the LP cut-out typically resets automatically once pressure normalises",
    "opts": ["Both cut-outs reset automatically to ensure continuous cooling of provisions", "The HP cut-out auto-resets after 5 minutes, while the LP cut-out must be manually reset", "The HP cut-out requires a software reboot, while the LP cut-out is purely mechanical", "The HP cut-out MUST be manually reset by an engineer, while the LP cut-out typically resets automatically once pressure normalises"],
    "exp": "An HP trip is a severe safety fault (e.g., loss of condenser cooling water, blocked discharge valve). It risks blowing pipes or destroying the compressor. A manual reset forces the engineer to find the root cause. An LP trip is often operational (e.g., the room got cold enough and the expansion valve closed), so it auto-resets when the room warms up.",
    "cat": "REF",
    "id": "T09S_058"
  },
  {
    "q": "How does an 'Oil Differential Pressure' cut-out protect a refrigeration compressor?",
    "a": "It measures the difference between crankcase pressure and oil pump discharge pressure; if the difference (actual oil pressure) drops too low for too long, it trips the compressor to prevent bearing failure",
    "opts": ["It measures the difference between the high-pressure gas and low-pressure gas, tripping if the compressor valves fail", "It trips the compressor if the lubricating oil temperature gets too hot compared to the ambient air", "It measures the difference between crankcase pressure and oil pump discharge pressure; if the difference (actual oil pressure) drops too low for too long, it trips the compressor to prevent bearing failure", "It ensures the oil level in the sight glass matches the required setpoint"],
    "exp": "In a compressor, the crankcase is filled with pressurized suction gas. A simple pressure gauge reading 5 bar of oil pressure might just be reading 5 bar of gas pressure (meaning the oil pump is actually dead). The switch subtracts the crankcase gas pressure from the pump discharge pressure to find the TRUE 'differential' oil pressure supporting the bearings.",
    "cat": "REF",
    "id": "T09S_059"
  },
  {
    "q": "Why is a time delay (usually 60-120 seconds) incorporated into the Oil Differential Pressure cut-out switch?",
    "a": "To allow the oil pump time to build up adequate pressure when the compressor first starts, preventing nuisance tripping",
    "opts": ["To allow the refrigerant gas to fully evaporate before the oil pump engages", "To give the engineer time to manually prime the oil system", "To ensure the motor star-delta starter has completed its transition", "To allow the oil pump time to build up adequate pressure when the compressor first starts, preventing nuisance tripping"],
    "exp": "When a compressor is off, oil pressure is zero. When it starts, it takes several seconds for the mechanical oil pump to draw oil and build pressure. Without a built-in time delay, the differential switch would trip the compressor instantly every single time it tried to start.",
    "cat": "REF",
    "id": "T09S_060"
  },
  {
    "q": "During a 'Dead Ship' blackout recovery, what is the correct first step for restoring compressed air if the main compressors are dead?",
    "a": "Start the emergency generator, then use emergency power to run the emergency air compressor to fill the starting air bottles",
    "opts": ["Start the emergency generator, then use emergency power to run the emergency air compressor to fill the starting air bottles", "Use the compressed air cylinder located in the emergency lifeboat", "Open the cross-connection from the control air system to the main starting air receivers", "Manually crank the main air compressors using the turning gear"],
    "exp": "A Dead Ship condition means absolutely no stored energy. You must start the emergency generator (usually battery start), then use that emergency power to run the dedicated emergency air compressor until there is enough pressure in the bottles to start the first auxiliary engine.",
    "cat": "GAP",
    "id": "T09S_061"
  },
  {
    "q": "If a boiler Flame Failure alarm occurs, what specific electrical checks should the ETO perform?",
    "a": "Check the UV scanner lens for soot, verify ignition transformer output voltage, check the fuel solenoid valve with 24V, and check the BMS output signal",
    "opts": ["Check the UV scanner lens for soot, verify ignition transformer output voltage, check the fuel solenoid valve with 24V, and check the BMS output signal", "Adjust the mechanical fuel pump pressure and replace the burner nozzle", "Bypass the purge timer in the BMS to force an immediate restart", "Check the feedwater pump motor insulation and inspect the boiler tubes for leaks"],
    "exp": "The ETO is responsible for the sensors and electrical controls. A flame failure is often caused by a dirty UV scanner lens blinding the sensor, a failed ignition spark (transformer), or a solenoid valve failing to open.",
    "cat": "GAP",
    "id": "T09S_062"
  },
  {
    "q": "How does a standard Turbocharger RPM sensor work?",
    "a": "It uses a magnetic pickup sensor that detects changes in magnetic flux as the teeth of a ferromagnetic wheel (phonic wheel) on the shaft pass by",
    "opts": ["It uses a mechanical centrifugal flyweight attached directly to the compressor shaft", "It uses a magnetic pickup sensor that detects changes in magnetic flux as the teeth of a ferromagnetic wheel (phonic wheel) on the shaft pass by", "It measures the exhaust gas flow rate and mathematically calculates the RPM", "It uses an optical laser that bounces off a reflective mirror painted on the turbine blades"],
    "exp": "The most common TC speed sensor is a variable reluctance magnetic pickup. As each metal tooth of the phonic wheel passes the sensor tip, it induces a voltage pulse. The tachometer counts these pulses to display RPM. An air gap that is too large (>2mm) will cause signal loss.",
    "cat": "GAP",
    "id": "T09S_063"
  },
  {
    "q": "What is the function of a Thermostatic Expansion Valve (TEV) in a marine refrigeration system?",
    "a": "It regulates refrigerant flow into the evaporator to maintain a constant superheat temperature at the evaporator outlet",
    "opts": ["It regulates refrigerant flow into the evaporator to maintain a constant superheat temperature at the evaporator outlet", "It limits the high pressure discharge from the compressor to prevent pipe rupture", "It automatically drains oil from the oil separator back to the crankcase", "It controls the flow of seawater through the condenser to maintain a stable head pressure"],
    "exp": "The TEV uses a sensor bulb on the suction line to measure superheat. If superheat is too high, the valve opens to let more refrigerant into the evaporator. If it's too low, it closes to prevent liquid refrigerant from reaching the compressor.",
    "cat": "GAP",
    "id": "T09S_064"
  },
  {
    "q": "A diesel generator is running normally when the 'Lube Oil Low Pressure' alarm suddenly activates. What is the correct immediate action?",
    "a": "Do NOT immediately stop the engine; inform the C/E and bridge, then check the local mechanical LO pressure gauge to confirm the alarm is genuine",
    "opts": ["Bypass the LO pressure switch and continue running until port arrival", "Hit the emergency stop button immediately to save the bearings", "Do NOT immediately stop the engine; inform the C/E and bridge, then check the local mechanical LO pressure gauge to confirm the alarm is genuine", "Open the standby generator breaker and parallel it automatically"],
    "exp": "An immediate blackout causes severe operational danger to the ship. You must first verify if it is an actual mechanical failure or just a faulty electronic sensor. Checking the local mechanical gauge confirms if the engine is truly losing oil pressure before initiating an emergency stop.",
    "cat": "GAP",
    "id": "T09S_065"
  },
  {
    "q": "Which of the following represents a Mechanical crane safety rather than an Electrical crane safety?",
    "a": "Slack rope safety and Anemometer cut-out",
    "opts": ["Slack rope safety and Anemometer cut-out", "Electromagnetic brake and limit switches", "Motor overload relay and Emergency stop button", "Joystick pendant control and VFD overcurrent trip"],
    "exp": "Slack rope devices (which detect if the wire jumps off the drum) and Anemometers (which measure wind speed) are considered structural/mechanical safeties. EM brakes, OLRs, and limit switches are electrical safeties.",
    "cat": "GAP",
    "id": "T09S_066"
  },
  {
    "q": "What is the correct physical procedure for testing a mechanical Overspeed Relay on an auxiliary generator?",
    "a": "With the engine running at governed speed, manually lift the overspeed trip lever and confirm the engine shuts down",
    "opts": ["Short circuit the tachometer sensor to simulate a high-frequency input", "Disconnect the generator from the busbar and suddenly push the fuel rack to 100%", "With the engine running at governed speed, manually lift the overspeed trip lever and confirm the engine shuts down", "Slowly reduce the governor speed setpoint until the engine stalls"],
    "exp": "The mechanical overspeed trip has a physical lever. Manually lifting this lever (the 'mechanical lift test') safely verifies that the trip linkage, fuel cut-off mechanism, and shutdown logic work without actually forcing the engine into a dangerous overspeed condition.",
    "cat": "GAP",
    "id": "T09S_067"
  },
  {
    "q": "What is the primary danger if the Jacket Cooling Water (JCW) system is operated at too low a temperature (e.g., <55\u00b0C)?",
    "a": "Combustion gases will condense on the cylinder liner, forming sulphuric acid which causes severe cold corrosion",
    "opts": ["Combustion gases will condense on the cylinder liner, forming sulphuric acid which causes severe cold corrosion", "The fresh water generator will over-produce, flooding the distillate tanks", "The engine will suffer from vapor lock in the fuel injection pumps", "The engine lube oil will overheat because the cooler cannot reject heat"],
    "exp": "Running the JCW too cold causes the liner surface temperature to drop below the dew point of the exhaust gases. The sulfur in the fuel creates sulphuric acid, which rapidly eats away the expensive cylinder liners (cold corrosion).",
    "cat": "GAP",
    "id": "T09S_068"
  },
  {
    "q": "When calibrating a compressor's Lube Oil Pressure transmitter on a 3-valve manifold, what is the correct isolation sequence?",
    "a": "Close the process isolation valve to stop live pressure, then open the equalising bypass valve to safely vent residual pressure before connecting the test gauge",
    "opts": ["Close both valves simultaneously and puncture the sensor diaphragm", "Open the process isolation valve fully, then close the equalising valve", "Close the process isolation valve to stop live pressure, then open the equalising bypass valve to safely vent residual pressure before connecting the test gauge", "Remove the sensor while the compressor is running, allowing oil to flush the lines"],
    "exp": "To safely remove or test a sensor, you must first isolate it from the live pressurized system (close process valve) and then bleed off the trapped pressure inside the sensor housing (open equalising/vent valve).",
    "cat": "GAP",
    "id": "T09S_069"
  },
  {
    "q": "What is the SOLE intended purpose of the Engine Room Bilge Injection Valve?",
    "a": "For emergency dewatering of the engine room during severe flooding, utilizing the massive capacity of the main sea water cooling pump",
    "opts": ["To provide an emergency source of cooling water if the sea chests are blocked", "To inject chemical dispersants into the bilge holding tank", "For routine daily pumping of the bilges through the Oily Water Separator (OWS)", "For emergency dewatering of the engine room during severe flooding, utilizing the massive capacity of the main sea water cooling pump"],
    "exp": "The bilge injection valve is a critical emergency feature. It connects the engine room bilge directly to the suction of the Main Sea Water Cooling pump. Because this pump moves massive volumes of water (e.g., 500 m\u00b3/hr), it can save the ship from sinking when standard bilge pumps are overwhelmed.",
    "cat": "GAP",
    "id": "T09S_070"
  },
  {
    "q": "Why is a continuous compressed air purge critical for the operation of an optical Smoke Density Meter in the exhaust funnel?",
    "a": "It blows clean air across the optical windows to prevent exhaust soot from depositing on the lenses, which would otherwise cause false high opacity readings",
    "opts": ["It injects oxygen into the exhaust to burn off residual carbon particles", "It cools the internal microprocessors, which would otherwise melt at exhaust temperatures", "It blows clean air across the optical windows to prevent exhaust soot from depositing on the lenses, which would otherwise cause false high opacity readings", "It spins a small internal turbine to generate power for the sensor"],
    "exp": "If the purge air fails, sticky exhaust soot immediately coats the glass lenses. The sensor interprets this darkness as 100% black smoke, triggering false alarms. Maintaining purge air pressure (0.3-0.5 bar) is the ETO's main maintenance task for this sensor.",
    "cat": "GAP",
    "id": "T09S_071"
  },
  {
    "q": "Before a ship enters drydock, what MUST be done to the Impressed Current Cathodic Protection (ICCP) system?",
    "a": "It must be set to MANUAL or turned OFF, as the system requires the hull to be submerged in conductive seawater to function properly",
    "opts": ["It must be disconnected from the main switchboard and wired to the emergency generator", "It must be set to MANUAL or turned OFF, as the system requires the hull to be submerged in conductive seawater to function properly", "The reference electrodes must be coated in insulating paint", "It must be turned up to maximum voltage to protect the hull from the drydock blocks"],
    "exp": "The ICCP system pushes current through seawater to protect the hull. If left in AUTO when the ship is lifted out of the water into the air, the system will read zero protection and ramp up to maximum voltage, potentially damaging the power supply or creating a shock hazard.",
    "cat": "GAP",
    "id": "T09S_072"
  },
  {
    "q": "On oil and chemical tankers, SOLAS requires a compressed air cylinder inside totally enclosed lifeboats. Aside from starting the engine, what is its primary life-saving function?",
    "a": "It provides a positive-pressure breathing air supply for the occupants for a minimum of 10 minutes, allowing escape through a surface oil fire",
    "opts": ["It is used to spray fire-retardant foam over the exterior of the hull", "It powers the pneumatic winch used to lower the lifeboat from the davits", "It inflates the self-righting airbags if the lifeboat capsizes", "It provides a positive-pressure breathing air supply for the occupants for a minimum of 10 minutes, allowing escape through a surface oil fire"],
    "exp": "If the ship is surrounded by burning oil, the lifeboat hatches must be sealed. The air bottle provides clean breathing air (at 40 L/min per person) to keep the crew alive and maintain a slight positive pressure to keep toxic smoke out for the 10 minutes it takes to drive clear of the fire.",
    "cat": "GAP",
    "id": "T09S_073"
  },
  {
    "q": "How is the hoisting speed typically adjusted by an ETO on an older Engine Room crane equipped with a Slip Ring (Wound Rotor) motor?",
    "a": "By changing the tap connections on the external rotor resistance bank to switch more or less resistance into the rotor circuit",
    "opts": ["By changing the tap connections on the external rotor resistance bank to switch more or less resistance into the rotor circuit", "By manually adjusting the swash plate angle on the hydraulic pump", "By altering the voltage output of the main switchboard AVR", "By reprogramming the max frequency parameter on the VFD keypad"],
    "exp": "Slip ring motors control speed by adding resistance to the rotor. More resistance = more slip = slower speed. Adjusting the fixed speed steps requires the ETO to physically alter the wiring taps at the resistance bank in the crane control panel.",
    "cat": "GAP",
    "id": "T09S_074"
  },
  {
    "q": "Under the new SOLAS II-1/3-13 regulation effective in 2026, how do defects in lifting appliances (like cranes) affect the ship's statutory certification?",
    "a": "Crane defects, lack of load testing, or missing SWL markings are now statutory violations that directly impact the Safety Construction Certificate, allowing Port State Control to detain the ship",
    "opts": ["Crane defects, lack of load testing, or missing SWL markings are now statutory violations that directly impact the Safety Construction Certificate, allowing Port State Control to detain the ship", "The ETO is personally fined for any missing SWL markings", "Crane defects only apply to cargo cranes; engine room overhead cranes are exempt", "Crane defects only result in a minor note from the Classification Society and do not affect sailing"],
    "exp": "Previously, cranes were mostly a matter of class rules and ILO conventions. The 2026 SOLAS update pulls them directly into statutory law. This means a broken crane or an illegible SWL painted on a boom can now result in a ship detention by Port State Control.",
    "cat": "GAP",
    "id": "T09S_075"
  },
  {
    "q": "On vessels fitted with two steering gear power units, what happens automatically if the running unit fails?",
    "a": "The standby unit starts and comes online automatically within 45 seconds",
    "opts": ["The standby unit starts and comes online automatically within 45 seconds", "The bridge receives a general alarm, but the standby unit must be started manually", "The emergency generator immediately starts to provide power to the remaining unit", "The rudder hydraulically locks in its current position until a manual reset is performed"],
    "exp": "According to SOLAS requirements for auto-changeover on vessels with two power units, if the running unit fails, the standby unit must start and come on line automatically within 45 seconds",
    "cat": "STG",
    "id": "T09S_076"
  },
  {
    "q": "Where must emergency steering control be possible from, as required by SOLAS regulations?",
    "a": "From a local control position in the steering gear room, completely independent of the bridge",
    "opts": ["From the emergency generator room using a manual override switch", "From a local control position in the steering gear room, completely independent of the bridge", "From the ship's office using a portable remote control unit", "From the Engine Control Room (ECR) via a dedicated emergency joystick"],
    "exp": "SOLAS requires that the steering gear must be operable from an emergency position (local control at the steering gear room) that is entirely independent of bridge control",
    "cat": "STG",
    "id": "T09S_077"
  },
  {
    "q": "During normal boiler operation after the ignition sequence finishes, how is the steam pressure demand managed?",
    "a": "The Burner Management System (BMS) hands control to a modulating controller that shifts the burner between high and low fire",
    "opts": ["The Forced Draft fan speed is continuously adjusted while the fuel valve remains completely open", "The Burner Management System (BMS) hands control to a modulating controller that shifts the burner between high and low fire", "The BMS repeatedly turns the main fuel valve fully ON and OFF to maintain the average pressure", "The pilot burner is automatically re-ignited to boost pressure when demand is high"],
    "exp": "After the pilot is extinguished, the main burner runs alone and the BMS hands control to a modulating burner controller. This controller modulates between high and low fire based on the ongoing steam pressure demand while the BMS monitors safeties",
    "cat": "BLR",
    "id": "T09S_078"
  },
  {
    "q": "What is the purpose of the water transducer (conductivity/density sensor) in the water discharge of a purifier?",
    "a": "It detects separation quality and controls the timing of the desludging (ejection) cycle",
    "opts": ["It stops the motor immediately if heavy fuel oil enters the water line", "It detects separation quality and controls the timing of the desludging (ejection) cycle", "It ensures that pure fresh water is fed to the motor bearings for cooling", "It measures the temperature of the outgoing sludge to prevent fires"],
    "exp": "The water transducer uses a conductivity or density sensor in the water discharge to detect separation quality, which then dictates when the control system initiates the desludging (ejection) cycle timing",
    "cat": "PUR",
    "id": "T09S_079"
  },
  {
    "q": "Why must fresh water seal flow be maintained in a purifier's paring disc system?",
    "a": "To prevent the process liquid (hot oil) from reaching and damaging the motor and spindle bearings",
    "opts": ["To lubricate the friction clutch pads during the long run-up time", "To prevent the process liquid (hot oil) from reaching and damaging the motor and spindle bearings", "To dilute the heavy fuel oil and reduce its viscosity before separation", "To provide hydraulic pressure to open the sludge ejection ports"],
    "exp": "The fresh water seal (paring disc system) must be maintained because it prevents the process liquid from migrating down the shaft and reaching the motor and bearings. Low seal water flow will trigger a trip",
    "cat": "PUR",
    "id": "T09S_080"
  },
  {
    "q": "On an auto-tension mooring winch, what mechanisms provide absolute limits that will override the auto-tension mode?",
    "a": "The upper limit switch (prevents over-haul) and the lower limit switch (prevents over-pay-out)",
    "opts": ["The upper limit switch (prevents over-haul) and the lower limit switch (prevents over-pay-out)", "The load cell calibration setting and the manual clutch lever", "The motor overload relay and the phase failure relay", "The emergency stop button and the hydraulic bypass valve"],
    "exp": "The upper limit switch prevents over-haul (drum emptied), and the lower limit switch prevents over-pay-out. Both of these are absolute safety limits that will override the auto-tension system",
    "cat": "CRA",
    "id": "T09S_081"
  },
  {
    "q": "Under what circumstances can the bridge override a Main Engine Slow-Down initiated by the automation system?",
    "a": "In genuine navigational emergencies (like collision avoidance), though the action must be logged and reported to the Chief Engineer",
    "opts": ["In genuine navigational emergencies (like collision avoidance), though the action must be logged and reported to the Chief Engineer", "Only during pilotage operations when the engine load is below 30%", "Anytime the ship is behind schedule, provided the override does not exceed 10 minutes", "The bridge can never override a slow-down; only an emergency shutdown can be overridden"],
    "exp": "The bridge can override the slow-down to dead slow or minimum speed in genuine emergencies (such as collision avoidance). However, this safety override must be properly logged and reported to the Chief Engineer",
    "cat": "GAP",
    "id": "T09S_082"
  },
  {
    "q": "In a Fresh Water Generator (FWG), what happens if the salinometer detects that the distillate salinity has exceeded 5 ppm?",
    "a": "An automatic divert valve opens to reject the contaminated water overboard instead of routing it to the fresh water tank",
    "opts": ["The main engine load interlock blocks the jacket cooling water flow", "Chemical dosing pumps inject anti-scaling agents into the distillate line", "An automatic divert valve opens to reject the contaminated water overboard instead of routing it to the fresh water tank", "The vacuum pump motor is immediately tripped to stop evaporation"],
    "exp": "The FWG distillate limit is typically <5 ppm. If the salinometer detects salinity above this limit, an automatic divert valve opens to reject the contaminated water overboard, protecting the ship's fresh water tank",
    "cat": "SAL",
    "id": "T09S_083"
  },
  {
    "q": "Why do modern marine salinometers require a built-in temperature compensation circuit?",
    "a": "Because the electrical conductivity of water naturally increases by approximately 2% for every 1\u00b0C increase in temperature",
    "opts": ["Because high temperatures cause the AC electrodes to polarize rapidly", "Because the electrical conductivity of water naturally increases by approximately 2% for every 1\u00b0C increase in temperature", "Because the distilled water flash point changes with ambient engine room temperatures", "Because salt naturally precipitates out of solution below 35\u00b0C, giving false zero readings"],
    "exp": "The conductivity of water increases by approximately 2% per \u00b0C. Therefore, modern salinometers feature a built-in temperature compensation circuit to ensure the ppm reading is accurate regardless of the sample's physical temperature",
    "cat": "SAL",
    "id": "T09S_084"
  },
  {
    "q": "When transferring from UMS (Unmanned Machinery Space) to a manned watch before port arrival, what is typically the first administrative step?",
    "a": "Making an official entry in the engine room log with the time and name of the watchkeeper, and informing the bridge",
    "opts": ["Disabling the fire detection system to prevent false alarms during maneuvering", "Testing the bow thruster from the local emergency control panel", "Starting the standby generator and synchronizing it to the main busbar", "Making an official entry in the engine room log with the time and name of the watchkeeper, and informing the bridge"],
    "exp": "Transferring from UMS typically occurs 4 hours before arrival. The very first step is to post the engine room watchkeeper by making an official entry in the engine room log (time and name) and informing the bridge",
    "cat": "GAP",
    "id": "T09S_085"
  },
  {
    "q": "During drydock, what specific maintenance must the ETO perform on the Shaft Earthing Device?",
    "a": "Inspect the carbon brush condition and spring pressure, replace the brush if worn below 50% length, and clean the slip ring surface on the propeller shaft",
    "opts": ["Inject grease into the grounding slip ring to prevent saltwater corrosion", "Replace the sacrificial zinc anodes attached to the external grounding strap", "Measure the stator winding insulation resistance and log the micro-ohm values", "Inspect the carbon brush condition and spring pressure, replace the brush if worn below 50% length, and clean the slip ring surface on the propeller shaft"],
    "exp": "Access to the shaft earthing device is only possible in drydock. The ETO must inspect the carbon brush condition, check the brush spring pressure, replace the brush if it is worn below 50% length, and clean the slip ring surface on the shaft",
    "cat": "GAP",
    "id": "T09S_086"
  },
  {
    "q": "Before starting work aloft near the vessel's mast or radar platform, what critical electrical isolation must be performed?",
    "a": "The radar scanner motor must be isolated and antenna discharge devices put in place",
    "opts": ["The emergency generator must be locked out to prevent auto-starting", "The ship's main switchboard must be placed in split-bus mode", "The entire bridge navigation console must be disconnected from the UPS", "The radar scanner motor must be isolated and antenna discharge devices put in place"],
    "exp": "Electrical isolation rules for working aloft are strict: the radar scanner motor must be isolated, navigation light circuits locked off, and antenna discharge devices put in place before approaching any electrical equipment at height to prevent radiation and physical strike hazards",
    "cat": "GAP",
    "id": "T09S_087"
  },
  {
    "q": "How does the lifeboat sprinkler (water spray fire protection) system draw water to cover the hull?",
    "a": "An engine-driven centrifugal pump draws seawater through a hull sea cock and distributes it through spray nozzles",
    "opts": ["It relies on the pressure from the lifeboat's internal fresh water drinking tanks", "An engine-driven centrifugal pump draws seawater through a hull sea cock and distributes it through spray nozzles", "It utilizes a hand-cranked displacement pump operated by the crew", "It uses the compressed air from the breathing bottles to atomize seawater stored in the bilge"],
    "exp": "The lifeboat sprinkler design uses an engine-driven centrifugal pump that draws seawater through a hull sea cock and distributes it to a piping system equipped with spray nozzles covering the entire outer hull surface",
    "cat": "GAP",
    "id": "T09S_088"
  },
  {
    "q": "What type of governor is predominantly used on modern electronically controlled 2-stroke slow-speed main diesel engines (e.g., modern MAN B&W / Wartsila)?",
    "a": "An Electronic (PID-based) governor",
    "opts": ["A purely Mechanical (Centrifugal / Flyball) governor", "An Electronic (PID-based) governor", "A Pneumatic proportional controller", "A Hydraulic-Mechanical (Woodward type) governor"],
    "exp": "Most modern MAN B&W or Wartsila 2-stroke slow-speed diesels use an electronic (PID-based) governor. This utilizes a magnetic pickup speed sensor, an electronic controller, and an actuator on the fuel rack for high precision",
    "cat": "GAP",
    "id": "T09S_089"
  },
  {
    "q": "What is the starting method typically used for large Controllable Pitch Propeller (CPP) bow thrusters?",
    "a": "Direct On-Line (DOL) at exactly zero pitch, then the pitch is applied gradually; large units may also use a soft-starter or VFD",
    "opts": ["Always via an auto-transformer starting at 30% pitch to prevent motor stall", "Direct On-Line (DOL) at maximum pitch to ensure the motor syncs with the water flow", "Direct On-Line (DOL) at exactly zero pitch, then the pitch is applied gradually; large units may also use a soft-starter or VFD", "Using a slip ring rotor resistance starter while the blades are fully feathered"],
    "exp": "For CPP bow thrusters, the standard method is to start the motor Direct On-Line (DOL) at zero pitch so the motor starts unloaded. Then, pitch is applied gradually. For very large units, a soft-starter or VFD is used for a smooth ramp-up",
    "cat": "BWT",
    "id": "T09S_090"
  },
  {
    "q": "When checking the FD (Forced Draft) fan motor on a boiler after a fault, what is the expected normal resistance of the embedded PTC thermistor compared to a tripped state?",
    "a": "Normal resistance is typically 100\u2013200 ohms; a tripped (overheated) state shows a very high resistance, usually >3k ohms",
    "opts": ["Normal resistance is 0 ohms; a tripped state shows exactly 1 M\u03a9", "Normal resistance is >3k ohms; a tripped state shows a dead short (0 ohms)", "Normal resistance fluctuates with voltage; a tripped state locks at exactly 4\u201320mA", "Normal resistance is typically 100\u2013200 ohms; a tripped (overheated) state shows a very high resistance, usually >3k ohms"],
    "exp": "A PTC (Positive Temperature Coefficient) thermistor acts as a switch based on heat. At normal operating temperatures, its resistance is very low (100\u2013200\u03a9). Once it reaches its threshold limit (e.g., 155\u00b0C), the resistance spikes exponentially to several kilo-ohms (>3k\u03a9), triggering the protection relay to trip the motor.",
    "cat": "GAP",
    "id": "T09S_091"
  },
  {
    "q": "What is the primary function of the pre-heater (immersion heater) located in the Jacket Cooling Water (JCW) expansion tank?",
    "a": "It keeps the engine jacket water at 50\u201360\u00b0C while the engine is stopped, preventing thermal shock and cold corrosion during startup",
    "opts": ["It keeps the engine jacket water at 50\u201360\u00b0C while the engine is stopped, preventing thermal shock and cold corrosion during startup", "It sterilises the fresh water to prevent biological growth in the cooling passages", "It boils the water to generate low-pressure steam for the heavy fuel oil heaters", "It automatically evaporates excess water to maintain the correct system pressure"],
    "exp": "Starting a massive diesel engine completely cold causes severe thermal stress (shock) as combustion instantly heats the cold metal. Furthermore, combustion gases against cold cylinder liners cause condensation of sulphuric acid (cold corrosion). The pre-heater ensures the block is pre-warmed to a safe 50-60\u00b0C before starting.",
    "cat": "GAP",
    "id": "T09S_092"
  },
  {
    "q": "In a ship's Steering Gear system, which of the following conditions initiates an AUTOMATIC TRIP (shutdown) rather than just an alarm?",
    "a": "Hydraulic oil high pressure (relief valve operation combined with an electrical limit)",
    "opts": ["Pump motor sustained overcurrent", "Hydraulic oil high temperature", "Hydraulic oil high pressure (relief valve operation combined with an electrical limit)", "Motor phase failure (loss of one phase)"],
    "exp": "Under SOLAS, motor overloads, phase failures, high oil temperatures, and low oil levels give ALARMS ONLY, ensuring steering is not lost abruptly. However, a severe mechanical failure like massive hydraulic overpressure (which could blow lines or destroy the RAM) triggers an automatic trip to prevent catastrophic mechanical destruction.",
    "cat": "GAP",
    "id": "T09S_093"
  },
  {
    "q": "Which type of governor is traditionally most common on Marine Auxiliary Diesel Generators (AE) due to its combination of reliability and precision?",
    "a": "Hydraulic-Mechanical (e.g., Woodward type) governor",
    "opts": ["Direct Variable Frequency Drive (VFD) governor", "Hydraulic-Mechanical (e.g., Woodward type) governor", "Pneumatic-Proportional governor", "Purely Mechanical (Centrifugal/Flyball) governor"],
    "exp": "While modern main engines use purely electronic PID governors, the vast majority of standard marine diesel generators rely on a Hydraulic-Mechanical governor (like the classic Woodward UG-8). It uses flyweights for speed sensing, combined with a hydraulic servo amplifier to physically move the fuel rack with great force and precision.",
    "cat": "GAP",
    "id": "T09S_094"
  },
  {
    "q": "What is the correct procedure to reset a steering gear 'Rudder Hunting' trip?",
    "a": "Switch the steering control to Non-Follow-Up (NFU), manually move the tiller to regain control, identify and reset the trip, and investigate the feedback linkage",
    "opts": ["Switch the steering control to Non-Follow-Up (NFU), manually move the tiller to regain control, identify and reset the trip, and investigate the feedback linkage", "Immediately switch off both main steering motors and engage the emergency generator", "Override the hydraulic bypass valves manually using a wrench in the steering flat", "Reboot the autopilot console on the bridge, which automatically clears all steering alarms"],
    "exp": "A hunting trip locks the Follow-Up (FU) system because it is oscillating out of control. To safely regain control of the ship, the operator must switch to Non-Follow-Up (NFU) mode, which completely bypasses the faulty hunting gear/feedback loop, allowing direct manual solenoid control.",
    "cat": "GAP",
    "id": "T09S_095"
  },
  {
    "q": "During pre-drydock preparations, what proactive electrical check should the ETO perform on ALL major motors, generators, and cables?",
    "a": "Take baseline Insulation Resistance (Megger) readings to compare against post-drydock readings, ensuring no damage occurred during shipyard work",
    "opts": ["Short circuit the main switchboard busbars to safely drain all residual capacitance", "Bypass all Thermal Overload Relays (OLRs) to prevent nuisance tripping on shore power", "Remove all carbon brushes from the alternators to prevent shipyard dust contamination", "Take baseline Insulation Resistance (Megger) readings to compare against post-drydock readings, ensuring no damage occurred during shipyard work"],
    "exp": "Drydocks involve heavy welding, water blasting, and chaotic work environments. Taking a baseline IR reading before the shipyard workers arrive allows the ETO to prove if a motor or cable was flooded, damaged, or burned by shipyard activities during the docking period.",
    "cat": "GAP",
    "id": "T09S_096"
  },
  {
    "q": "When checking the Shaft Earthing Device in drydock, at what point must the carbon brush be replaced?",
    "a": "When it is worn below 50% of its original length",
    "opts": ["When the slip ring begins to show a chocolate-brown patina", "When it loses its silver coating", "When it is worn below 50% of its original length", "When it is worn below 10% of its original length"],
    "exp": "The shaft earthing device provides a low-resistance path for induced currents to travel from the rotating shaft to the hull, preventing the current from arcing through and destroying the main engine bearings. The brushes must maintain strong spring pressure, so they are proactively replaced when worn below 50%.",
    "cat": "GAP",
    "id": "T09S_097"
  },
  {
    "q": "According to typical SOLAS breathing air requirements, what is the consumption rate used to calculate the required volume of the air cylinder in a totally enclosed lifeboat?",
    "a": "40 Litres/minute per person for a minimum of 10 minutes",
    "opts": ["40 Litres/minute per person for a minimum of 10 minutes", "100 Litres/minute per person for a minimum of 30 minutes", "500 Litres total for the entire lifeboat regardless of passenger capacity", "10 Litres/minute per person for a minimum of 5 minutes"],
    "exp": "The system is designed to provide positive-pressure breathable air while the lifeboat navigates through a surface oil fire. The standard calculation mandates 40 L/min per person for 10 minutes (e.g., 26 people = 10,400 liters of expanded air required).",
    "cat": "GAP",
    "id": "T09S_098"
  },
  {
    "q": "What is the mandatory testing interval and pressure requirement for the hydrostatic pressure test of a lifeboat breathing air cylinder?",
    "a": "Every 5 years, tested at 1.5 times the maximum working pressure",
    "opts": ["Every 10 years, tested to the point of destructive failure", "Annually, tested at 2.0 times the maximum working pressure", "Every 5 years, tested at 1.5 times the maximum working pressure", "Every 5 years, tested at exactly the maximum working pressure"],
    "exp": "High-pressure cylinders (often filled to 200 or 300 bar) must be removed, visually inspected internally, and hydrostatically tested by an approved shore facility every 5 years at 1.5x their working pressure to ensure they will not violently rupture under stress.",
    "cat": "GAP",
    "id": "T09S_099"
  },
  {
    "q": "A surveyor points to the Engine Room Overhead Crane and asks how to adjust its hoisting speed, noting it is driven by a 'Pole-Changing (Dahlander)' motor. What is the correct answer?",
    "a": "The speed is fixed at two distinct steps (High and Low) determined by the pole configurations; it cannot be variably adjusted beyond selecting those two speeds on the pendant",
    "opts": ["You change the tap connections on the external rotor resistance bank", "The speed is fixed at two distinct steps (High and Low) determined by the pole configurations; it cannot be variably adjusted beyond selecting those two speeds on the pendant", "You adjust the maximum frequency parameter on the crane's VFD keypad", "You adjust the swash plate angle on the hydraulic power pack"],
    "exp": "A Dahlander motor is a specialized squirrel-cage induction motor with a tapped stator winding that allows the number of poles to be switched (e.g., from 8 poles for slow speed to 4 poles for fast speed). There is no variable adjustment; it strictly operates at those two synchronous speeds.",
    "cat": "GAP",
    "id": "T09S_100"
  },
  {
    "q": "What is the primary role of the ETO concerning a ship's Anti-Heeling System?",
    "a": "To maintain the electrical transfer pump motor, valve actuators, and the inclinometer (heel angle sensor) input signals to the control panel",
    "opts": ["To manually operate the cross-flooding valves using emergency hand wheels during cargo loading", "To physically sound the ballast tanks and calculate the vessel's metacentric height (GM)", "To dose the ballast water with approved anti-corrosion chemicals", "To maintain the electrical transfer pump motor, valve actuators, and the inclinometer (heel angle sensor) input signals to the control panel"],
    "exp": "The Anti-Heeling system automatically shifts ballast port/starboard to keep the ship perfectly upright during cargo operations (vital for container ships and Ro-Ros). The ETO's scope is strictly the electrical/automation side: the pump motor, remote valve solenoids, and the electronic level/angle sensors.",
    "cat": "GAP",
    "id": "T09S_101"
  },
  {
    "q": "In the new SOLAS II-1/3-13 regulation (effective 2026), what does 'Permanent SWL Marking' mean for a crane with a variable operating radius?",
    "a": "The crane must display a clearly readable load chart showing the Safe Working Load (SWL) at each specific radius, visible directly from the operator's control position",
    "opts": ["The crane must be marked with a single, average SWL painted only on the tip of the jib", "The crane's SWL is recorded only in the digital PMS; physical markings are no longer required", "The crane must display a clearly readable load chart showing the Safe Working Load (SWL) at each specific radius, visible directly from the operator's control position", "The SWL must be permanently etched into the hook block, overriding any other limits"],
    "exp": "Under the new strict SOLAS rules, if a crane lifts 40 tonnes at a 15m radius but only 20 tonnes at a 30m radius, it cannot just have '40T' painted on it. A full radius/load chart must be permanently marked and clearly legible to the operator while they are at the controls.",
    "cat": "GAP",
    "id": "T09S_102"
  },
  {
    "q": "A Smoke Density Meter automatically calculates the 'Opacity %' of exhaust gas. How does the unit maintain its accuracy against environmental factors like ambient light or minor lens clouding?",
    "a": "It frequently auto-zeros itself against a 'clean air reference' baseline to mathematically compensate for optical drift",
    "opts": ["It requires a crew member to manually wipe the lens with a dark cloth before every reading", "It mathematically subtracts the engine RPM from the photocell output", "It frequently auto-zeros itself against a 'clean air reference' baseline to mathematically compensate for optical drift", "It automatically increases the voltage to the halogen lamp by 5% every day"],
    "exp": "To calculate accurate opacity (0% = clear, 100% = solid black smoke), the unit needs to know what '100% transmission' looks like right now. By briefly sampling clean air, it establishes a new baseline, effectively ignoring minor dust on the lens or slight lamp dimming.",
    "cat": "GAP",
    "id": "T09S_103"
  },
  {
    "q": "What is the Lower Explosive Limit (LEL) of crankcase oil mist, and what is the typical OMD alarm setpoint?",
    "a": "LEL is approx 50 mg/L; the alarm is set at 2.5 mg/L, providing a 20x safety margin",
    "opts": ["LEL is 10 mg/L; alarm is at 9 mg/L", "LEL is 2.5 mg/L; alarm is at 0.5 mg/L", "LEL is 100 mg/L; alarm is at 50 mg/L", "LEL is approx 50 mg/L; the alarm is set at 2.5 mg/L, providing a 20x safety margin"],
    "exp": "The OMD provides an early warning long before an explosive atmosphere forms. Triggering at 2.5 mg/L gives the crew ample time (a 20x safety buffer before reaching the 50 mg/L explosion threshold) to safely slow down the engine.",
    "cat": "OMD",
    "id": "T09S_104"
  },
  {
    "q": "What is the mandated normal state of pressure inside a running diesel engine crankcase per SOLAS?",
    "a": "A slight negative pressure (vacuum) to prevent mist leakage into the engine room",
    "opts": ["A slight negative pressure (vacuum) to prevent mist leakage into the engine room", "Highly pressurized to 2.5 bar", "Exactly equal to atmospheric pressure", "Pressurized using inert inert gas (nitrogen)"],
    "exp": "SOLAS requires crankcases to be maintained at a slight vacuum. This is achieved via a crankcase extraction fan. It prevents toxic and explosive oil mist from leaking into the engine room atmosphere.",
    "cat": "OMD",
    "id": "T09S_105"
  },
  {
    "q": "If the reference tube was completely removed from an OMD, what would be the long-term operational consequence?",
    "a": "The system would generate false high mist alarms as the halogen lamp ages and dims over time",
    "opts": ["The crankcase extraction fan would stop working", "The system would generate false high mist alarms as the halogen lamp ages and dims over time", "The system would fail to detect any oil mist at all", "The measuring tube would fill with calibration gas"],
    "exp": "The reference tube provides a baseline. If the lamp naturally dims over a year, the photocell reads less light. Without a reference to prove the lamp is just dimming, the system interprets the lack of light as thick oil mist.",
    "cat": "OMD",
    "id": "T09S_106"
  },
  {
    "q": "How does the rotary sampling valve on an OMD function?",
    "a": "It continuously and sequentially draws gas from each individual crankcase unit one by one to isolate the location of the fault",
    "opts": ["It continuously and sequentially draws gas from each individual crankcase unit one by one to isolate the location of the fault", "It mixes all crankcase gases together for a single average reading", "It physically rotates the photocell to point at different cylinders", "It injects clean air into the crankcase to dilute the mist"],
    "exp": "The rotary valve scans through the cylinders (e.g., Unit 1, Unit 2, Unit 3...). This allows the detector not only to sound an alarm but also to indicate exactly which cylinder is experiencing the bearing failure.",
    "cat": "OMD",
    "id": "T09S_107"
  },
  {
    "q": "Which two manufacturers are the most commonly encountered for marine Oil Mist Detectors?",
    "a": "Graviner and Dr\u00e4ger",
    "opts": ["Siemens and ABB", "Graviner and Dr\u00e4ger", "Alfa Laval and Westfalia", "Woodward and Regulateurs Europa"],
    "exp": "Graviner (e.g., MK6, MK7) is the industry standard worldwide, with Dr\u00e4ger (e.g., MK8) and Kidde also being highly common marine OMD suppliers.",
    "cat": "OMD",
    "id": "T09S_108"
  },
  {
    "q": "What is the designed 'fail-safe' position for the steam control valve on an HFO Viscotherm system?",
    "a": "Fail Close (FC)",
    "opts": ["Fail Open (FO)", "Fail Last Position (FL)", "Fail to 50% Open", "Fail Close (FC)"],
    "exp": "If instrument air or control signals are lost, the steam valve must spring closed. It is safer for the fuel to cool down (causing the engine to slowly stall) than to fail open, which would boil the fuel, destroy injectors, and pose a severe fire hazard.",
    "cat": "VIS",
    "id": "T09S_109"
  },
  {
    "q": "If the Viscotherm automatic controller completely fails, what is the required emergency procedure?",
    "a": "Switch to manual temperature control and set the steam valve using the temperature-viscosity chart for the current bunker grade",
    "opts": ["Bypass the fuel heater and run the engine on cold HFO", "Switch to manual temperature control and set the steam valve using the temperature-viscosity chart for the current bunker grade", "Shut down the main engine immediately", "Switch the engine over to Marine Gas Oil (MGO) permanently"],
    "exp": "If automatic viscosity control fails, the engineer must manually regulate the steam valve based on temperature. The target temperature is found by referencing the lab analysis chart for the specific fuel currently in use.",
    "cat": "VIS",
    "id": "T09S_110"
  },
  {
    "q": "When bunkering a new, drastically different grade of HFO, what adjustments must the ETO make to the Viscotherm controller?",
    "a": "None; if left in AUTO, the controller automatically adapts to maintain 10-14 cSt regardless of the new fuel's temperature requirements",
    "opts": ["Recalibrate the 4-20mA span to match the new fuel density", "None; if left in AUTO, the controller automatically adapts to maintain 10-14 cSt regardless of the new fuel's temperature requirements", "Manually change the PI parameters to account for the new sulfur content", "Purge the capillary tube with compressed air before use"],
    "exp": "The primary advantage of a viscosity controller over a temperature controller is that it requires no manual adjustment when fuel grades change. It directly measures drag and adjusts steam until the drag hits the 14 cSt setpoint.",
    "cat": "VIS",
    "id": "T09S_111"
  },
  {
    "q": "Why is 'Derivative' (D) control NOT used in a fuel viscosity controller?",
    "a": "Fuel pumps create mechanical pressure ripples; Derivative action would react to these rapid ripples, causing the steam valve to hunt violently",
    "opts": ["Because Derivative control only works for pressure, not viscosity", "Because it violates class rules for hazardous area equipment", "Because the heating process is too fast for Derivative control to catch", "Fuel pumps create mechanical pressure ripples; Derivative action would react to these rapid ripples, causing the steam valve to hunt violently"],
    "exp": "Heating fuel is a slow thermal process. The 'D' in PID reacts to the *rate of change*. The physical pulsation of the fuel pumps creates rapid noise in the sensor. 'D' action would amplify this noise, causing erratic, unstable valve movements.",
    "cat": "VIS",
    "id": "T09S_112"
  },
  {
    "q": "In governor tuning, what is meant by 'Critical Damping'?",
    "a": "The precise adjustment of the dashpot orifice that provides the fastest possible speed correction without causing any overshoot or hunting",
    "opts": ["The precise adjustment of the dashpot orifice that provides the fastest possible speed correction without causing any overshoot or hunting", "Closing the dashpot completely to lock the fuel rack", "Opening the dashpot fully to allow instantaneous fuel delivery", "The point at which the engine shuts down due to low oil pressure"],
    "exp": "Critical damping is the perfect balance. The governor moves the fuel rack as fast as possible to catch a load change, but slows down exactly at the setpoint so the engine doesn't rev past 60Hz and bounce back.",
    "cat": "DPT",
    "id": "T09S_113"
  },
  {
    "q": "What is the physical symptom of an 'Under-damped' governor dashpot?",
    "a": "The engine responds very quickly to load changes but continuously overshoots and undershoots the target speed (hunting)",
    "opts": ["The engine responds extremely slowly, allowing frequency to drop dangerously low", "The dashpot oil boils and creates cavitation", "The engine responds very quickly to load changes but continuously overshoots and undershoots the target speed (hunting)", "The fuel rack becomes physically jammed"],
    "exp": "If the needle valve is too open (under-damped), the fluid moves too easily. The rack snaps open too far, the engine over-revs, the governor snaps it closed, the engine bogs down. This is classic hunting.",
    "cat": "DPT",
    "id": "T09S_114"
  },
  {
    "q": "What is the physical symptom of an 'Over-damped' governor dashpot?",
    "a": "The engine responds sluggishly to load changes, causing prolonged frequency drops before slowly recovering",
    "opts": ["The governor linkages physically snap", "The engine responds sluggishly to load changes, causing prolonged frequency drops before slowly recovering", "The engine overspeeds violently", "The engine alternates between 50Hz and 60Hz rapidly"],
    "exp": "If the needle valve is too closed (over-damped), the fluid restricts movement too much. When a heavy load hits, the fuel rack takes too long to open, and the generator frequency drops deeply before slowly crawling back to 60Hz.",
    "cat": "DPT",
    "id": "T09S_115"
  },
  {
    "q": "How is the time delay physically adjusted on a standard hydraulic dashpot?",
    "a": "By turning a variable needle valve to change the size of the internal orifice",
    "opts": ["By changing the type of oil inside to a heavier grade", "By altering the electrical voltage to the solenoid", "By adjusting the tension on the main return spring", "By turning a variable needle valve to change the size of the internal orifice"],
    "exp": "The dampening rate is controlled purely by how fast oil can move from one side of the piston to the other. Adjusting the small needle valve (orifice) makes this passage wider or narrower, changing the delay time.",
    "cat": "DPT",
    "id": "T09S_116"
  },
  {
    "q": "How does an oil dashpot create the 'Inverse-Time' curve for an Air Circuit Breaker (ACB)?",
    "a": "A massive short-circuit pulls the piston instantly through the oil, while a minor overload pulls weakly, forcing the piston to creep slowly through the oil",
    "opts": ["The oil heats up and thins out, triggering a thermal bimetallic strip", "It uses an electronic timer to delay the signal proportionally", "It forces the breaker contacts to open in exactly 0.1 seconds regardless of fault size", "A massive short-circuit pulls the piston instantly through the oil, while a minor overload pulls weakly, forcing the piston to creep slowly through the oil"],
    "exp": "The magnetic force of the fault fights the hydraulic resistance of the oil. A 10,000A fault rips the piston up instantly (fast trip). A 1,000A overload pulls gently, so the oil slowly squeezes past the piston, taking 10-20 seconds to trip.",
    "cat": "DPT",
    "id": "T09S_117"
  },
  {
    "q": "What is the primary function of a 'Telemotor' or 'Rotary Potentiometer' in the steering gear system?",
    "a": "It provides continuous electrical feedback of the actual rudder angle to the bridge indicator and the autopilot hunting gear",
    "opts": ["It cools the hydraulic oil by varying the fan speed", "It manually locks the rudder in place during heavy weather", "It pumps the hydraulic oil into the RAM cylinders", "It provides continuous electrical feedback of the actual rudder angle to the bridge indicator and the autopilot hunting gear"],
    "exp": "The telemotor/potentiometer is physically linked to the rudder stock. As the rudder turns, it changes resistance, sending a proportional electrical signal back to the bridge to display the rudder angle and cancel the helm order.",
    "cat": "STG",
    "id": "T09S_118"
  },
  {
    "q": "What does a 4/3-way directional control solenoid valve do in a steering gear hydraulic system?",
    "a": "It directs high-pressure fluid to the Port RAM, the Starboard RAM, or blocks flow completely (center position) to hold the rudder steady",
    "opts": ["It limits the hydraulic pressure to exactly 43 bar", "It routes fluid to four different rudders using three separate pumps", "It mixes 4 parts oil with 3 parts air for smoother operation", "It directs high-pressure fluid to the Port RAM, the Starboard RAM, or blocks flow completely (center position) to hold the rudder steady"],
    "exp": "The 4/3 valve has four ports (Pressure, Return, Actuator A, Actuator B) and three positions (Port thrust, Starboard thrust, and a spring-centered neutral position that locks the fluid, holding the rudder in place).",
    "cat": "STG",
    "id": "T09S_119"
  },
  {
    "q": "What happens if the Port solenoid coil on the steering gear fails with an 'Open Circuit'?",
    "a": "The valve will not shift when a Port command is given, and the rudder will simply not move to Port",
    "opts": ["The valve will default to hard-over Port", "The valve will not shift when a Port command is given, and the rudder will simply not move to Port", "The hydraulic pump will dead-head and explode", "The control fuse will blow, disabling Starboard steering as well"],
    "exp": "An open circuit means the wire is broken inside the coil. No current flows, no magnetic field is created, and the valve spool doesn't move. The steering gear ignores the command, but no fuses blow.",
    "cat": "STG",
    "id": "T09S_120"
  },
  {
    "q": "According to SOLAS, a steering gear must turn the rudder from 35\u00b0 on one side to 30\u00b0 on the other side in not more than 28 seconds. Under what ship condition must this be achievable?",
    "a": "At the deepest seagoing draught and running at maximum ahead service speed",
    "opts": ["During sea trials only", "While moving astern at 5 knots", "At the deepest seagoing draught and running at maximum ahead service speed", "While stationary in calm water"],
    "exp": "This tests the maximum possible hydrodynamic load on the rudder. Pushing the rudder hard-over while the ship is fully loaded and moving at top speed requires maximum hydraulic force and motor torque.",
    "cat": "STG",
    "id": "T09S_121"
  },
  {
    "q": "If maintenance is performed on a steering gear motor and two phases are accidentally swapped during reconnection, what is the critical consequence?",
    "a": "The motor runs backward, causing a 'Port' helm command to physically turn the rudder to 'Starboard', creating a severe navigation hazard",
    "opts": ["The motor runs backward, causing a 'Port' helm command to physically turn the rudder to 'Starboard', creating a severe navigation hazard", "The motor instantly trips the overload relay", "The motor runs at exactly half speed", "The hydraulic fluid cavitates and destroys the pump"],
    "exp": "Swapping two phases reverses motor rotation. The hydraulic pump will run backward, reversing fluid flow. A mandatory Phase Failure/Reversal Relay detects this wiring error and trips the breaker before the ship can sail with reversed steering.",
    "cat": "STG",
    "id": "T09S_122"
  },
  {
    "q": "During a 'Rudder Hunting' fault, why is switching to Non-Follow-Up (NFU) mode the correct immediate response?",
    "a": "NFU mode completely electrically bypasses the faulty hunting gear/feedback linkage, allowing direct manual control of the solenoid valves",
    "opts": ["NFU mode mechanically drops a locking pin into the rudder stock", "NFU mode completely electrically bypasses the faulty hunting gear/feedback linkage, allowing direct manual control of the solenoid valves", "NFU mode resets the hydraulic pressure relief valves", "NFU mode engages the backup emergency generator"],
    "exp": "Hunting is caused by bad feedback. NFU (using a toggle switch or tiller) ignores feedback entirely. You hold the switch, the rudder moves. You let go, it stops. This safely regains control of the ship while bypassing the broken sensor.",
    "cat": "STG",
    "id": "T09S_123"
  },
  {
    "q": "Which of the following steering gear hydraulic faults triggers an ALARM ONLY on the bridge, without tripping the motor?",
    "a": "Hydraulic oil low level and Hydraulic oil high temperature",
    "opts": ["Hydraulic oil low level and Hydraulic oil high temperature", "Motor overcurrent and Rudder hunting", "Hydraulic oil high pressure and Phase failure", "Solenoid short circuit and Hydraulic block"],
    "exp": "To comply with the SOLAS 'maintain steering at all costs' principle, low oil level and high oil temp only give alarms. The engineers must rush to investigate, but the system will keep pumping until it destroys itself rather than dropping steering blindly.",
    "cat": "STG",
    "id": "T09S_124"
  },
  {
    "q": "How is a hydraulic lock reset after a rudder hunting trip?",
    "a": "Switch to NFU, move the tiller manually to regain control, identify/fix the hunting cause, reset the trip, and return to FU mode",
    "opts": ["Isolate the main switchboard and power cycle the autopilot", "Reverse the motor phases to force the lock open", "Bleed air from the hydraulic RAMs and restart the pumps", "Switch to NFU, move the tiller manually to regain control, identify/fix the hunting cause, reset the trip, and return to FU mode"],
    "exp": "When a hunting trip activates, the system isolates. Bypassing the automation via NFU allows manual fluid movement to clear the hydraulic block, after which the electrical trip can be reset.",
    "cat": "STG",
    "id": "T09S_125"
  },
  {
    "q": "What specific operational test must be carried out on the steering gear within 12 hours before departure?",
    "a": "Full movement test of both power units, changeover test between units, emergency power test, and communication check to steering gear room",
    "opts": ["Draining and replacing the hydraulic fluid", "A 125% SWL hydraulic pressure test", "A full dead-ship blackout recovery test", "Full movement test of both power units, changeover test between units, emergency power test, and communication check to steering gear room"],
    "exp": "SOLAS strictly dictates pre-departure steering checks. The crew must verify that main pumps, standby pumps, emergency power, alarms, and local/remote steering are all 100% functional before heading to sea.",
    "cat": "STG",
    "id": "T09S_126"
  },
  {
    "q": "What activates the 'Running Alarm' on a steering gear panel?",
    "a": "If the steering motor runs continuously for an abnormal time (e.g., >30 seconds), indicating the rudder is failing to reach the demanded position",
    "opts": ["If the steering gear is successfully switched to the emergency generator", "If the motor exceeds its rated Full Load Current (FLC)", "If the hydraulic oil temperature exceeds 60\u00b0C", "If the steering motor runs continuously for an abnormal time (e.g., >30 seconds), indicating the rudder is failing to reach the demanded position"],
    "exp": "In a Follow-Up system, the pump runs, moves the rudder, and stops. If it runs continuously for 30 seconds, it means the rudder is jammed, fluid is bypassing, or the feedback is broken. The running alarm warns the bridge of this mechanical failure.",
    "cat": "STG",
    "id": "T09S_127"
  },
  {
    "q": "If the ignition transformer on a boiler fails to spark during the light-off sequence, what will the BMS do next?",
    "a": "The pilot valve opens, no flame is detected by the UV scanner within 10 seconds, the pilot valve closes, and the BMS enters a flame failure lockout",
    "opts": ["The pilot valve opens, no flame is detected by the UV scanner within 10 seconds, the pilot valve closes, and the BMS enters a flame failure lockout", "It stops the Forced Draft fan to preserve heat", "It switches to the backup diesel generator", "It automatically bypasses the pilot and opens the main heavy fuel oil valve"],
    "exp": "The sequence is rigid. If there's no spark, the pilot fuel doesn't light. The UV scanner waits ~10 seconds. Seeing no flame, it immediately aborts the sequence and locks out to prevent dumping more fuel into the furnace.",
    "cat": "BLR",
    "id": "T09S_128"
  },
  {
    "q": "What is the typical 'Safety Proving Time' for the main flame scanner after the main fuel valve opens?",
    "a": "5 to 10 seconds",
    "opts": ["30 to 60 seconds", "0.1 to 0.5 seconds", "5 to 10 seconds", "5 minutes"],
    "exp": "When the main fuel valve opens, the massive flame must ignite from the pilot flame almost instantly. The BMS gives the scanner a narrow 5-10 second window to confirm a stable main flame before initiating an emergency shutdown.",
    "cat": "BLR",
    "id": "T09S_129"
  },
  {
    "q": "During boiler operation, the water level drops and activates the first-stage 'Low Drum Level' float switch. What happens?",
    "a": "An ALARM sounds to warn the operator, but the burner continues firing",
    "opts": ["The burner trips immediately without delay", "The boiler conducts an emergency blowdown", "The main steam stop valve automatically closes", "An ALARM sounds to warn the operator, but the burner continues firing"],
    "exp": "The first 'Low Level' is just a warning. It gives the engineer time to manually start a feedwater pump or fix a valve. If the level continues to drop to the 'Low-Low' switch, THEN the burner trips instantly to prevent an explosion.",
    "cat": "BLR",
    "id": "T09S_130"
  },
  {
    "q": "What is the primary risk associated with a 'High Drum Level' alarm on a marine boiler?",
    "a": "Water carryover (priming) into the steam lines, which can destroy steam turbine blades or cause water hammer in pipes",
    "opts": ["The safety relief valves lifting prematurely", "The heavy fuel oil solidifying in the burner nozzle", "Water carryover (priming) into the steam lines, which can destroy steam turbine blades or cause water hammer in pipes", "The furnace crown melting due to over-cooling"],
    "exp": "Too much water doesn't explode the boiler, but it leaves no room for steam separation. Liquid water gets sucked into the steam pipes. If liquid water hits a rapidly spinning steam turbine, it shatters the blades like rocks.",
    "cat": "BLR",
    "id": "T09S_131"
  },
  {
    "q": "In troubleshooting a boiler failure, which components fall strictly under the ETO's responsibility?",
    "a": "Sensors (PT100, pressure transmitters), solenoid valves, ignition transformer, FD fan motor, and the Burner Management System (BMS) PLC",
    "opts": ["Sensors (PT100, pressure transmitters), solenoid valves, ignition transformer, FD fan motor, and the Burner Management System (BMS) PLC", "Tuning the air/fuel ratio using combustion gas analyzers", "Replacing leaking water tubes and patching refractory brickwork", "Overhauling the mechanical feed water pump impellers"],
    "exp": "The ETO owns the 'brain and nerves' of the boiler. If a solenoid won't fire, a sensor reads wrong, or the PLC halts the sequence, it's an ETO job. Physical leaks, soot, and mechanical tuning are the Chief Engineer/Second Engineer's responsibility.",
    "cat": "BLR",
    "id": "T09S_132"
  },
  {
    "q": "If a boiler is producing thick black smoke, whose primary responsibility is it to resolve the root cause?",
    "a": "The Chief/Second Engineer (Mechanical issue: poor atomisation, dirty nozzle, or incorrect air/fuel mechanical linkage)",
    "opts": ["The Chief/Second Engineer (Mechanical issue: poor atomisation, dirty nozzle, or incorrect air/fuel mechanical linkage)", "The ETO (Electrical issue: faulty UV scanner)", "The Master (Navigational issue: incorrect ship speed)", "The Oiler (Cleaning issue: dirty sight glass)"],
    "exp": "Black smoke means unburnt fuel. This is almost always a mechanical combustion issue (clogged burner tip, wrong fuel temp, mechanical air damper stuck). The ETO only gets involved if the FD fan motor or damper actuator is electrically dead.",
    "cat": "BLR",
    "id": "T09S_133"
  },
  {
    "q": "How do you verify if the PTC thermistor in the boiler FD fan motor has tripped due to overheating?",
    "a": "Measure its resistance with a multimeter; a healthy thermistor is 100-200 ohms, while an overheated one will read several kilo-ohms (>3k\u03a9)",
    "opts": ["Check the physical color; it turns bright red when tripped", "Measure its resistance with a multimeter; a healthy thermistor is 100-200 ohms, while an overheated one will read several kilo-ohms (>3k\u03a9)", "Check the voltage across it; a healthy thermistor shows 440V", "Bypass it with a jumper wire to see if the motor starts faster"],
    "exp": "PTC thermistors are solid-state resistors. You test them identically to any resistor. Disconnect the sensor wires from the relay and measure. If it reads 5000 ohms, the motor is far too hot (or the sensor is broken).",
    "cat": "BLR",
    "id": "T09S_134"
  },
  {
    "q": "What is the correct automatic sequence of events when a boiler receives a normal 'Stop' command?",
    "a": "Modulate to low fire, close main fuel valve, initiate post-purge with FD fan to clear residual vapour, then stop fan",
    "opts": ["Increase FD fan to maximum, open fuel valve to burn off sludge, then stop", "Modulate to low fire, close main fuel valve, initiate post-purge with FD fan to clear residual vapour, then stop fan", "Close main fuel valve instantly, stop FD fan instantly, sound alarm", "Open blowdown valve, close fuel valve, stop feed water pump"],
    "exp": "To prevent thermal shock and explosive vapour accumulation, the boiler steps down to a small flame, shuts the fuel, and then uses the fan (post-purge) to blow all remaining exhaust gases safely up the funnel before securing.",
    "cat": "BLR",
    "id": "T09S_135"
  },
  {
    "q": "Which specific device proves to the BMS that the Forced Draft (FD) fan is actually moving air into the furnace?",
    "a": "A Differential Pressure (DP) switch or an airflow flap switch mounted in the air duct",
    "opts": ["A tachometer on the FD fan shaft", "An ammeter on the FD fan motor starter", "A Differential Pressure (DP) switch or an airflow flap switch mounted in the air duct", "The UV flame scanner"],
    "exp": "The motor might be running (showing amps) and the shaft spinning, but if the fan belt is snapped or the air intake is blocked with rags, no air enters the furnace. The DP switch physically proves that air pressure exists in the duct.",
    "cat": "BLR",
    "id": "T09S_136"
  },
  {
    "q": "What does a 'High Flue Gas Temperature' alarm typically indicate on a marine boiler?",
    "a": "Incomplete combustion (afterburning in the uptake) or severe soot buildup on the heat transfer tubes",
    "opts": ["Incomplete combustion (afterburning in the uptake) or severe soot buildup on the heat transfer tubes", "The boiler is producing exceptionally high-quality dry steam", "The feedwater is too cold, causing the fire to burn hotter", "The UV scanner is misaligned"],
    "exp": "If the exhaust gas leaving the boiler is too hot, it means the heat wasn't transferred into the water. This happens if the tubes are covered in insulating soot, or if unburnt fuel is igniting late, actually burning inside the exhaust stack (afterburning).",
    "cat": "BLR",
    "id": "T09S_137"
  },
  {
    "q": "During an annual crane inspection, the ETO finds the Electromagnetic (EM) brake air gap is 1.2 mm (spec is 0.4 mm). What is the corrective action?",
    "a": "Add shims or adjust the armature stop nuts to reduce the gap back to 0.4 mm, ensuring the magnet can successfully pull the armature",
    "opts": ["Grind down the brake pads to make them completely flat", "Increase the voltage to the brake coil to 440V to pull across the larger gap", "Add shims or adjust the armature stop nuts to reduce the gap back to 0.4 mm, ensuring the magnet can successfully pull the armature", "Replace the entire motor because the rotor shaft has shrunk"],
    "exp": "As friction pads wear down, the metal armature plate moves further away from the electromagnet. At 1.2mm, the magnetic force is too weak to compress the springs, and the brake will drag. Shimming restores the correct, tight tolerance.",
    "cat": "CRA",
    "id": "T09S_138"
  },
  {
    "q": "What is the typical resistance value for a healthy EM brake coil on a marine crane?",
    "a": "20 to 200 ohms, depending on the specific coil size and voltage rating",
    "opts": ["0.1 to 1 ohm (near short circuit)", "10 to 50 Mega-ohms", "Exactly 4-20 milliamps", "20 to 200 ohms, depending on the specific coil size and voltage rating"],
    "exp": "A brake coil is a large electromagnet. It should have a readable, moderate resistance. If it reads 0L (Open Loop / Infinity), the wire is snapped. If it reads 0 ohms, the coil has melted and shorted out internally.",
    "cat": "CRA",
    "id": "T09S_139"
  },
  {
    "q": "If a crane EM brake coil suffers an internal short circuit while in operation, what is the chain of events?",
    "a": "The coil overheats and blows its control fuse, the brake instantly clamps shut, and the hoisting motor overloads trying to turn against the locked brake",
    "opts": ["The crane automatically switches to regenerative braking mode", "The brake releases permanently, dropping the load into the sea", "The coil overheats and blows its control fuse, the brake instantly clamps shut, and the hoisting motor overloads trying to turn against the locked brake", "The VFD increases frequency to compensate for the short circuit"],
    "exp": "A shorted coil draws massive current and blows its supply fuse. With no electricity, the 'fail-safe' springs instantly slam the brake ON. The main motor, still trying to lift the load, grinds against the locked brake until its thermal overload relay trips.",
    "cat": "CRA",
    "id": "T09S_140"
  },
  {
    "q": "What is the function of the Anemometer cut-out on a deck crane?",
    "a": "It measures wind speed and automatically disables crane operation if the wind exceeds the safe structural limit (e.g., 20 m/s)",
    "opts": ["It measures wind speed and automatically disables crane operation if the wind exceeds the safe structural limit (e.g., 20 m/s)", "It calculates the weight of the load based on atmospheric pressure", "It monitors the swing of the load and automatically dampens it", "It measures humidity to prevent the wire ropes from rusting"],
    "exp": "Cranes have massive surface areas. High winds can cause the jib to act like a sail, overpowering the slewing motors or tipping the crane. The anemometer (wind cup sensor) on top of the crane disables operations when winds become dangerous.",
    "cat": "CRA",
    "id": "T09S_141"
  },
  {
    "q": "What is 'Level Luffing' in crane operations?",
    "a": "A mechanical or electrical synchronization that automatically pays out or heaves in the hoist wire to keep the load at a perfectly constant height while the jib moves up or down",
    "opts": ["A mechanical or electrical synchronization that automatically pays out or heaves in the hoist wire to keep the load at a perfectly constant height while the jib moves up or down", "A hydraulic system that levels the cargo inside a container", "A safety feature that prevents the crane from tipping over on a sloping deck", "The process of ensuring the crane cabin is perfectly horizontal"],
    "exp": "Normally, lowering the jib (luffing out) drops the hook toward the deck. A level-luffing crane automatically hauls the hoist wire in at the exact same rate the jib goes down, so the container moves perfectly horizontally across the deck.",
    "cat": "CRA",
    "id": "T09S_142"
  },
  {
    "q": "How is a crane's Hoist Overload limit switch typically tested and calibrated by an ETO?",
    "a": "By using certified test weights or a hydraulic pull-test rig to apply exactly 100% and 110% of the SWL, and verifying the load cell triggers the cut-out",
    "opts": ["By using certified test weights or a hydraulic pull-test insertion rig to apply exactly 100% and 110% of the SWL, and verifying the load cell triggers the cut-out", "By hoisting the ship's anchor until the crane tips slightly", "By pushing the 'Test' button on the VFD keypad", "By short-circuiting the load cell wires to simulate an infinite load"],
    "exp": "An electronic load cell (strain gauge) must be calibrated with real, known physical weights (e.g., water bags or certified steel blocks) to ensure it cuts power to the hoist motor precisely when the Safe Working Load is breached.",
    "cat": "CRA",
    "id": "T09S_143"
  },
  {
    "q": "When a crane load cell detects an overload (e.g., 105% of SWL), what exact electrical action does the control system take?",
    "a": "It cuts the control circuit to the 'Hoist UP' contactor, preventing further lifting, but keeps the 'Hoist DOWN' circuit active so the load can be safely lowered",
    "opts": ["It cuts the control circuit to the 'Hoist UP' contactor, preventing further lifting, but keeps the 'Hoist DOWN' circuit active so the load can be safely lowered", "It automatically reverses the hoist motor to drop the load instantly", "It engages the emergency generator to provide extra lifting power", "It cuts all power to the crane entirely, freezing the load in mid-air"],
    "exp": "Safety dictates you must be able to escape the dangerous situation. Tripping the whole crane would leave a massive overload dangling over the deck. Disabling only 'UP' ensures the operator's only option is to safely set the heavy load back down.",
    "cat": "CRA",
    "id": "T09S_144"
  },
  {
    "q": "Under the IMO guidelines for SOLAS II-1/3-13, what is the required proof load for testing a standard marine deck crane?",
    "a": "125% of the Safe Working Load (SWL)",
    "opts": ["200% of the SWL", "100% of the SWL", "150% of the SWL", "125% of the Safe Working Load (SWL)"],
    "exp": "To certify that a crane is structurally sound and the brakes hold perfectly, class surveyors require a dynamic proof load test lifting 25% more than the crane's maximum rated capacity (e.g., a 40T crane must lift 50T during the 5-yearly test).",
    "cat": "CRA",
    "id": "T09S_145"
  },
  {
    "q": "Under the 2026 SOLAS updates, what is the consequence if a Port State Control officer finds that a crane's SWL markings are completely rusted away and illegible?",
    "a": "It is a statutory SOLAS deficiency that can result in an immediate detention of the vessel until the markings are restored",
    "opts": ["The crane is downgraded to 50% capacity legally", "The officer simply writes a warning note in the ship's log", "It is a statutory SOLAS deficiency that can result in an immediate detention of the vessel until the markings are restored", "Nothing, provided the digital load chart in the software is readable"],
    "exp": "Because lifting appliances are now strictly governed by SOLAS Chapter II-1, missing or illegible SWL markings violate statutory law. The ship can be detained (prevented from sailing) until the markings are painted back on correctly.",
    "cat": "CRA",
    "id": "T09S_146"
  },
  {
    "q": "The new 2026 SOLAS II-1/3-13 regulations directly impact which of the ship's major statutory certificates?",
    "a": "The Cargo Ship Safety Construction Certificate",
    "opts": ["The Cargo Ship Safety Construction Certificate", "The Safe Manning Document", "The International Ship Security Certificate (ISSC)", "The International Oil Pollution Prevention (IOPP) Certificate"],
    "exp": "Crane structural integrity and safety now directly tie into the vessel's fundamental Safety Construction Certificate. A failed crane means the ship's construction is deemed unsafe under SOLAS.",
    "cat": "CRA",
    "id": "T09S_147"
  },
  {
    "q": "What is the typical starting current drawn by a massive Controllable Pitch (CPP) Bow Thruster when started Direct-On-Line (DOL) at zero pitch?",
    "a": "Approximately 6 to 8 times its rated Full Load Current for a few seconds",
    "opts": ["Less than 50% of its rated current", "Exactly equal to its Full Load Current", "Approximately 6 to 8 times its rated Full Load Current for a few seconds", "15 to 20 times its rated Full Load Current"],
    "exp": "Even at zero pitch (unloaded), a massive induction motor draws standard DOL inrush current (6-8x FLC) to establish the magnetic field and accelerate the heavy rotor and propeller hub. This is why generator capacity must be verified before starting.",
    "cat": "BWT",
    "id": "T09S_148"
  },
  {
    "q": "Why is a shaft earthing device (carbon brush) installed on the drive shaft of a large bow thruster motor?",
    "a": "To provide a low-resistance path to the hull for induced magnetic currents, preventing those currents from discharging across and pitting the expensive bearings",
    "opts": ["To prevent static electricity from igniting hydraulic fluid", "To power the rotating pitch-control hydraulics", "To provide a low-resistance path to the hull for induced magnetic currents, preventing those currents from discharging across and pitting the expensive bearings", "To act as an RPM sensor for the bridge indicator"],
    "exp": "Large VFDs and motors induce high-frequency stray currents in the rotor shaft. If not grounded via an earthing brush, this current jumps the tiny oil gap in the bearings to reach ground, causing micro-arcing (fluting/pitting) that quickly destroys the bearings.",
    "cat": "BWT",
    "id": "T09S_149"
  },
  {
    "q": "Why is there a physical interlock preventing a bow thruster start if the ship's draft (immersion) is too shallow?",
    "a": "If the tunnel is above water, the propeller spins in air; lacking water resistance, the motor will dangerously overspeed, and the dry seals will burn up",
    "opts": ["The generator would suffer reverse power due to lack of load", "The noise of the thruster in air exceeds SOLAS acoustic limits", "The hydraulic pitch mechanism requires water pressure to move the blades", "If the tunnel is above water, the propeller spins in air; lacking water resistance, the motor will dangerously overspeed, and the dry seals will burn up"],
    "exp": "Thrusters are designed to push heavy water. Spinning in thin air removes all mechanical load. The motor can over-rev, and the mechanical shaft seals (which rely on surrounding seawater for cooling and lubrication) will melt in minutes.",
    "cat": "BWT",
    "id": "T09S_150"
  },
  {
    "q": "How is a Controllable Pitch Propeller (CPP) bow thruster typically controlled during manoeuvring?",
    "a": "The motor runs continuously at a constant speed in one direction; thrust magnitude and direction are controlled purely by hydraulically twisting the propeller blades (pitch)",
    "opts": ["A gearbox mechanically shifts between forward and reverse gears", "The VFD constantly alters the motor RPM and changes phase sequence to reverse", "The motor is repeatedly started and stopped, and reversed using contactors", "The motor runs continuously at a constant speed in one direction; thrust magnitude and direction are controlled purely by hydraulically twisting the propeller blades (pitch)"],
    "exp": "This is the beauty of CPP. Starting a 2000kW motor is violent on the electrical system. With CPP, you start it once (at zero pitch). Then, you leave it running. Moving the bridge joystick simply angles the blades left or right to push water, providing instant, smooth thrust without electrical strain.",
    "cat": "BWT",
    "id": "T09S_151"
  },
  {
    "q": "What specific protection function in the motor protection relay prevents an operator from repeatedly starting and stopping a massive bow thruster in quick succession?",
    "a": "The 'Thermal Memory' function, which tracks heat buildup and locks out a restart until the motor windings have safely cooled down",
    "opts": ["The 'Thermal Memory' function, which tracks heat buildup and locks out a restart until the motor windings have safely cooled down", "The Over-voltage relay", "The Phase Sequence relay", "The Differential Protection relay"],
    "exp": "Every DOL start dumps massive I\u00b2R heat into the copper windings. If you start, stop, and start again 5 times in 5 minutes, the heat accumulates and melts the insulation. The relay calculates this thermal mass and strictly forbids a restart until a safe cooling timer expires.",
    "cat": "BWT",
    "id": "T09S_152"
  },
  {
    "q": "What diagnostic sensors are increasingly fitted to large bow thrusters to detect impending mechanical failure long before a catastrophic breakdown?",
    "a": "Vibration sensors (accelerometers) mounted on the drive and non-drive end bearings",
    "opts": ["Optical smoke detectors in the thruster room", "Ultrasonic thickness gauges on the tunnel walls", "Vibration sensors (accelerometers) mounted on the drive and non-drive end bearings", "Salinometers inside the hydraulic oil tank"],
    "exp": "Continuous vibration monitoring can detect microscopic defects in the roller bearings or gear mesh (like a chipped tooth) months before the bearing actually seizes, allowing the crew to schedule repairs during drydock instead of suffering an underway failure.",
    "cat": "BWT",
    "id": "T09S_153"
  },
  {
    "q": "What is the electrical consequence if a CPP bow thruster's 'Zero Pitch' interlock is bypassed, and the motor is started while the blades are at 100% pitch?",
    "a": "The motor will attempt to start against the massive resistance of the water, drawing sustained starting current (6-8x FLC) for a long period, causing an overcurrent trip or total ship blackout",
    "opts": ["The motor will attempt to start against the massive resistance of the water, drawing sustained starting current (6-8x FLC) for a long period, causing an overcurrent trip or total ship blackout", "The thruster will simply push the ship twice as fast", "The propeller blades will snap off due to cavitation", "The motor will instantly reverse its phase sequence"],
    "exp": "Starting at 100% pitch is like trying to start your car in 5th gear. The motor struggles to accelerate the heavy water load, remaining in the high-amperage starting phase for too long. The main switchboard breaker will trip on overcurrent, potentially taking down the whole ship.",
    "cat": "BWT",
    "id": "T09S_154"
  },
  {
    "q": "What is the typical electric motor power range for a marine Fuel Oil Purifier?",
    "a": "1.5 kW to 7.5 kW",
    "opts": ["1.5 kW to 7.5 kW", "0.1 kW to 0.5 kW", "500 kW to 1000 kW", "50 kW to 100 kW"],
    "exp": "Fuel oil purifiers use relatively small motors (1.5 to 7.5 kW). They do not require massive torque to keep the bowl spinning once it reaches operating speed; the power is mostly needed during the 3-8 minute acceleration phase to overcome the bowl's huge inertia.",
    "cat": "PUR",
    "id": "T09S_155"
  },
  {
    "q": "Why is the electric motor for a Lube Oil Purifier typically larger (e.g., 7.5 to 15 kW) than a Fuel Oil Purifier motor?",
    "a": "Lube oil purifiers generally have larger, heavier bowls to handle higher throughput and thicker, colder oil, requiring more power to accelerate and maintain speed",
    "opts": ["Lube oil is highly conductive and drains power from the stator", "Lube oil purifiers use direct-drive gears instead of flat belts", "Lube oil purifiers generally have larger, heavier bowls to handle higher throughput and thicker, colder oil, requiring more power to accelerate and maintain speed", "Lube oil purifiers must spin at 50,000 RPM, which requires massive horsepower"],
    "exp": "The mass of the bowl and the viscosity of the fluid being centrifuged determine the motor size. Main engine lube oil systems process massive volumes of oil continuously, utilizing larger, heavier bowls that demand larger motors.",
    "cat": "PUR",
    "id": "T09S_156"
  },
  {
    "q": "What does a Water Transducer measure in a modern self-cleaning purifier?",
    "a": "It measures the dielectric constant (conductivity/capacitance) of the fluid discharging from the water outlet to distinguish between water and oil",
    "opts": ["It measures the volume of operating water in the hydraulic reservoir", "It measures the dielectric constant (conductivity/capacitance) of the fluid discharging from the water outlet to distinguish between water and oil", "It monitors the temperature of the cooling water jacket", "It checks for bacterial growth in the fresh water seal"],
    "exp": "The transducer monitors the separation interface. Water conducts electricity; oil does not. If the sensor detects oil starting to escape from the water outlet, it signals the PLC that the bowl is full of sludge/water, triggering a sludge ejection (desludging) cycle.",
    "cat": "PUR",
    "id": "T09S_157"
  },
  {
    "q": "How long is the typical run-up (acceleration) time for a large marine purifier?",
    "a": "3 to 8 minutes",
    "opts": ["30 to 45 minutes", "3 to 8 minutes", "5 to 10 seconds", "Over 1 hour"],
    "exp": "Because the solid stainless-steel bowl weighs hundreds of kilograms, it has immense inertia. To prevent snapping the drive belt or burning out the motor, a friction clutch or soft-starter allows the motor to slowly slip and ramp the bowl up to 8,000 RPM over several minutes.",
    "cat": "PUR",
    "id": "T09S_158"
  },
  {
    "q": "What is the required air gap clearance for the Inductive Proximity Sensor used to measure purifier bowl speed?",
    "a": "Typically 1 to 2 mm from the passing gear teeth or target metal",
    "opts": ["Typically 1 to 2 mm from the passing gear teeth or target metal", "It must be in direct physical contact with the shaft", "0.1 mm", "10 to 15 mm"],
    "exp": "Inductive sensors create an electromagnetic field. If the metal gear tooth is too far away (>3mm), the sensor won't detect it. If it's too close (<0.5mm), thermal expansion or vibration will cause the spinning gear to physically smash the sensor tip.",
    "cat": "PUR",
    "id": "T09S_159"
  },
  {
    "q": "What is the typical trip threshold for a purifier Vibration Switch?",
    "a": "Approximately 10 to 12 mm/s vibration velocity",
    "opts": ["1 to 2 mm/s", "1000 mm/s", "50 to 60 mm/s", "Approximately 10 to 12 mm/s vibration velocity"],
    "exp": "Vibration velocity measures the energy of the shaking. 1-3 mm/s is smooth. 10-12 mm/s indicates severe, destructive shaking (like a badly unbalanced washing machine), prompting an immediate motor trip to save the machine.",
    "cat": "PUR",
    "id": "T09S_160"
  },
  {
    "q": "If the massive bowl locking ring is not fully torqued (tightened) after maintenance, what is the guaranteed result when the purifier is started?",
    "a": "The bowl assembly will shift slightly at high speed, causing massive imbalance and an immediate vibration trip",
    "opts": ["The proximity sensor will burn out", "The purifier will separate oil 50% faster", "The bowl assembly will shift slightly at high speed, causing massive imbalance and an immediate vibration trip", "The motor will draw zero current"],
    "exp": "At 8,000 RPM, if a 200kg steel bowl cover is off-center by even a fraction of a millimeter because the locking ring was loose, the centrifugal forces become violently unbalanced. The machine will shake violently and trip on vibration.",
    "cat": "PUR",
    "id": "T09S_161"
  },
  {
    "q": "What happens if a purifier is operated with an excessively high feed rate (pumping too much dirty oil in too fast)?",
    "a": "Sludge builds up too rapidly and asymmetrically before the timer initiates an ejection cycle, leading to bowl imbalance and a vibration trip",
    "opts": ["The water transducer permanently short-circuits", "Sludge builds up too rapidly and asymmetrically before the timer initiates an ejection cycle, leading to bowl imbalance and a vibration trip", "The oil is purified to a much higher standard", "The electric motor acts as a generator and feeds power back"],
    "exp": "If you feed a purifier too fast, heavy sludge packs against the bowl wall unevenly. If the heavy sludge blob on one side gets too big before the machine opens to 'shoot' the sludge, the weight imbalance causes severe vibration.",
    "cat": "PUR",
    "id": "T09S_162"
  },
  {
    "q": "In a marine provision refrigeration plant using R404A, what is the typical High Pressure (HP) cutout trip setpoint?",
    "a": "18 to 24 bar gauge",
    "opts": ["100 bar gauge", "18 to 24 bar gauge", "5 to 8 bar gauge", "40 to 50 bar gauge"],
    "exp": "R404A is a high-pressure refrigerant. Normal discharge pressures run around 14-16 bar. If the condenser cooling fails, pressure spikes rapidly. The safety cutout trips around 18-24 bar to prevent exploding pipes.",
    "cat": "REF",
    "id": "T09S_163"
  },
  {
    "q": "In a marine Air Conditioning plant using R134a, what is the typical High Pressure (HP) cutout trip setpoint?",
    "a": "14 to 16 bar gauge",
    "opts": ["5 to 8 bar gauge", "14 to 16 bar gauge", "25 to 30 bar gauge", "50 bar gauge"],
    "exp": "R134a operates at lower pressures than R404A. Normal condensing pressure is around 8-10 bar. The HP safety trip is therefore set lower, typically between 14 and 16 bar.",
    "cat": "REF",
    "id": "T09S_164"
  },
  {
    "q": "If the Low Pressure (LP) cutout switch is bypassed by a lazy crew member and the system runs out of refrigerant gas, what happens to the compressor?",
    "a": "It pulls a deep vacuum, sucking air and moisture through any leaks, and runs continuously without cool return gas, causing the motor to overheat and burn out",
    "opts": ["It operates perfectly but uses 10% more electricity", "It pulls a deep vacuum, sucking air and moisture through any leaks, and runs continuously without cool return gas, causing the motor to overheat and burn out", "It converts the remaining lubricating oil into solid carbon blocks", "The condenser freezes solid and shatters"],
    "exp": "The LP switch protects the system. If bypassed, the compressor runs endlessly trying to compress nothing. Refrigerant gas is actually used to cool the compressor motor windings; without gas, the motor cooks itself.",
    "cat": "REF",
    "id": "T09S_165"
  },
  {
    "q": "If the High Pressure (HP) cutout is bypassed and the condenser water pump fails, what is the imminent danger?",
    "a": "The discharge pressure will skyrocket until the mechanical Pressure Relief Valve (PRV) blows, venting the entire expensive refrigerant charge into the atmosphere",
    "opts": ["The system will automatically switch to air-cooling mode", "The discharge pressure will skyrocket until the mechanical Pressure Relief Valve (PRV) blows, venting the entire expensive refrigerant charge into the atmosphere", "The compressor will simply slow down until water is restored", "The evaporator will frost over completely"],
    "exp": "The electrical HP switch shuts the motor off *before* things explode. If bypassed, the compressor keeps pumping gas into a hot, uncooled condenser. Pressure hits 30+ bar, and the mechanical safety valve bursts, dumping the gas to save the pipes.",
    "cat": "REF",
    "id": "T09S_166"
  },
  {
    "q": "Why are older refrigerants like R12 and R22 no longer used or being actively phased out on ships?",
    "a": "MARPOL Annex VI regulations ban Chlorofluorocarbons (CFCs) and strictly limit Hydrochlorofluorocarbons (HCFCs) due to their severe Ozone Depletion Potential (ODP)",
    "opts": ["MARPOL Annex VI regulations ban Chlorofluorocarbons (CFCs) and strictly limit Hydrochlorofluorocarbons (HCFCs) due to their severe Ozone Depletion Potential (ODP)", "They corrode copper piping twice as fast as modern refrigerants", "They are highly flammable and caused several engine room fires", "They do not absorb heat well in tropical climates"],
    "exp": "R12 (a CFC) destroys the ozone layer and was banned globally. R22 (an HCFC) is being aggressively phased out. Ships now use HFCs (like R134a/R404A) which have zero ozone depletion potential, though they are still scrutinized for global warming potential.",
    "cat": "REF",
    "id": "T09S_167"
  },
  {
    "q": "How does an engineer adjust a Thermostatic Expansion Valve (TEV) to ensure the evaporator is working efficiently?",
    "a": "By measuring the suction line temperature and pressure, calculating the actual superheat, and turning the TEV adjustment screw to achieve the target 4-6\u00b0C superheat",
    "opts": ["By looking at the frost on the pipes and hitting the valve with a hammer", "By adding more refrigerant oil until the compressor sounds quiet", "By setting the TEV screw fully closed and backing it off exactly one turn", "By measuring the suction line temperature and pressure, calculating the actual superheat, and turning the TEV adjustment screw to achieve the target 4-6\u00b0C superheat"],
    "exp": "Proper TEV tuning requires math. You read the suction pressure (e.g., 2 bar = -10\u00b0C saturation temp). You measure the actual pipe temperature (e.g., -5\u00b0C). Superheat is the difference (-5 minus -10 = 5\u00b0C). You turn the valve spring screw until you hit 4-6\u00b0C.",
    "cat": "REF",
    "id": "T09S_168"
  },
  {
    "q": "What is the typical target Superheat setting for a marine refrigeration Thermostatic Expansion Valve (TEV)?",
    "a": "4 to 6\u00b0C above the saturation temperature",
    "opts": ["4 to 6\u00b0C above the saturation temperature", "0\u00b0C exactly", "-5\u00b0C below the saturation temperature", "15 to 20\u00b0C above the saturation temperature"],
    "exp": "A superheat of 4-6\u00b0C ensures that every single drop of liquid refrigerant has boiled into a gas *before* it leaves the evaporator, guaranteeing that no liquid drops get sucked into the compressor (which would smash the pistons).",
    "cat": "REF",
    "id": "T09S_169"
  },
  {
    "q": "Aside from the normal defrost cycle, what fault conditions will cause the Low Pressure (LP) cutout to trip the compressor?",
    "a": "A low refrigerant charge (leak), a heavily iced/blocked evaporator coil, or a Thermostatic Expansion Valve (TEV) that is stuck closed",
    "opts": ["An overcharge of refrigerant gas", "A low refrigerant charge (leak), a heavily iced/blocked evaporator coil, or a Thermostatic Expansion Valve (TEV) that is stuck closed", "A broken cooling fan on the condenser unit", "A fouled condenser or high seawater temperatures"],
    "exp": "If refrigerant leaks out, there's no gas to pump, so suction pressure drops. If the evaporator is blocked with ice, heat can't enter the refrigerant to boil it, so pressure drops. If the TEV is jammed shut, no gas enters the coil, so the compressor sucks it into a vacuum and trips.",
    "cat": "REF",
    "id": "T09S_170"
  },
  {
    "q": "What provides the final, absolute mechanical backup protection on an Auto-Tension mooring winch if the electrical VSD system completely fails during a heavy surge?",
    "a": "A mechanical friction slip clutch between the motor and the drum, which physically slips at a preset torque limit to prevent the rope from snapping",
    "opts": ["An explosive guillotine that cuts the rope", "A secondary diesel engine that takes over the load", "A mechanical friction slip clutch between the motor and the drum, which physically slips at a preset torque limit to prevent the rope from snapping", "A heavy anchor dropped directly into the water"],
    "exp": "Electrical drives can freeze or fail. If a massive wave hits the ship and the electrical system doesn't pay out rope, the mechanical friction clutch (set slightly higher than the max motor torque) will violently slip, letting the drum spin and saving the expensive mooring line.",
    "cat": "CRA",
    "id": "T09S_171"
  },
  {
    "q": "How is the rope tension actually measured on a modern Auto-Tension winch?",
    "a": "Directly via a strain-gauge load cell on the mooring fairlead, or indirectly by measuring the exact electrical torque current drawn by the motor",
    "opts": ["By counting the number of times the drum revolves per minute", "By measuring the temperature of the friction brake pads", "By visually estimating the sag in the rope from the bridge", "Directly via a strain-gauge load cell on the mooring fairlead, or indirectly by measuring the exact electrical torque current drawn by the motor"],
    "exp": "Modern VFDs are incredibly smart. Because Motor Torque is directly proportional to Active Current, the VFD can mathematically calculate exactly how many tonnes of tension are on the rope just by looking at how many amps the motor is using to hold it.",
    "cat": "CRA",
    "id": "T09S_172"
  },
  {
    "q": "What is the critical procedural error if the Auto-Tension mode is NOT manually cancelled before the ship departs the berth?",
    "a": "As the ship pulls away using its engines, the winch will try to maintain the 5-tonne tension by endlessly paying out all the rope into the water until the drum is empty",
    "opts": ["The Auto-Tension mode will trigger the ship's general alarm", "The winch will violently haul the ship back to the dock, destroying the bollards", "As the ship pulls away using its engines, the winch will try to maintain the 5-tonne tension by endlessly paying out all the rope into the water until the drum is empty", "The winch motor will catch fire immediately"],
    "exp": "The system is dumb\u2014it just wants to keep 5 tonnes of tension. If the ship drives away, the tension spikes, so the winch pays out rope. It will keep paying out forever until the rope runs out and drops into the propeller. It MUST be switched to manual and braked before unmooring.",
    "cat": "CRA",
    "id": "T09S_173"
  },
  {
    "q": "On older vessels, what type of electrical drive system was used to provide the smooth torque control required for Auto-Tension winches?",
    "a": "The Ward-Leonard system (AC motor driving a DC generator to control a DC winch motor)",
    "opts": ["A Direct-On-Line squirrel cage motor", "The Ward-Leonard system (AC motor driving a DC generator to control a DC winch motor)", "A simple Star-Delta starter", "A Pole-Changing Dahlander motor"],
    "exp": "Before the invention of modern IGBT variable frequency drives, the only way to get smooth, stalling torque control without burning up a motor was the heavy, reliable Ward-Leonard DC system.",
    "cat": "CRA",
    "id": "T09S_174"
  },
  {
    "q": "On modern vessels, what type of drive provides the control for Auto-Tension winches?",
    "a": "An IGBT Variable Speed Drive (VSD) operating in specialized 'Torque Control' mode",
    "opts": ["An IGBT Variable Speed Drive (VSD) operating in specialized 'Torque Control' mode", "A standard Soft-Starter", "A mechanical belt-and-pulley CVT", "A pneumatic air-driven motor"],
    "exp": "Modern VFDs/VSDs use microprocessors and Insulated Gate Bipolar Transistors (IGBTs) to manipulate the AC waveform. By switching into 'Torque Control' instead of 'Speed Control', the drive perfectly mimics the smooth pulling force of an old DC motor.",
    "cat": "CRA",
    "id": "T09S_175"
  },
  {
    "q": "What is the function of the Lower Limit Switch on an Auto-Tension mooring winch?",
    "a": "It stops the motor from paying out any more rope when there are only a few wraps left on the drum, preventing the rope from completely detaching and falling overboard",
    "opts": ["It prevents the winch from lifting loads lighter than 1 tonne", "It limits the minimum voltage the VFD can supply to the motor", "It prevents the hook from smashing into the deck", "It stops the motor from paying out any more rope when there are only a few wraps left on the drum, preventing the rope from completely detaching and falling overboard"],
    "exp": "If the ship drifts far off the dock, the winch pays out rope. If it pays out everything, the bitter end of the rope will rip out of the drum clamp. The lower limit switch forces it to stop and hold on to the last 3-4 wraps of wire.",
    "cat": "CRA",
    "id": "T09S_176"
  },
  {
    "q": "What is the function of the Upper Limit Switch on a mooring winch or crane?",
    "a": "It prevents 'over-haul', stopping the motor from heaving in too far and snapping the wire or smashing the hook block into the jib sheave",
    "opts": ["It forces the winch to heave at maximum speed during emergencies", "It prevents 'over-haul', stopping the motor from heaving in too far and snapping the wire or smashing the hook block into the jib sheave", "It limits the maximum torque the motor can output", "It prevents the motor from spinning faster than 1500 RPM"],
    "exp": "When hauling in (heaving), if the operator isn't paying attention, the hook block will smash into the top of the crane boom, snapping the wire and dropping the load. The upper limit switch physically cuts the 'Hoist UP' contactor before this collision happens.",
    "cat": "CRA",
    "id": "T09S_177"
  },
  {
    "q": "What is the typical minimum required pressure in the Starting Air Receivers to reliably start a marine auxiliary diesel engine?",
    "a": "Typically 25 bar",
    "opts": ["5 bar", "Typically 25 bar", "100 bar", "300 bar"],
    "exp": "Standard marine starting air systems operate at 30 bar. The alarms usually sound at 25 bar, as dropping much below 20-25 bar risks the engine failing to turn over fast enough to achieve ignition compression.",
    "cat": "GAP",
    "id": "T09S_178"
  },
  {
    "q": "What catastrophic event can occur if a Generator Air Circuit Breaker (ACB) is manually forced closed onto a dead busbar while the diesel engine is already at full load?",
    "a": "You cannot start an engine 'on load'; the massive instantaneous torque demand would stall the engine, drop the voltage, and trip the breaker immediately",
    "opts": ["The AVR automatically disconnects the field until the RPM stabilizes", "The reverse power relay forces the load to shed", "The generator seamlessly picks up the load and runs normally", "You cannot start an engine 'on load'; the massive instantaneous torque demand would stall the engine, drop the voltage, and trip the breaker immediately"],
    "exp": "Generators must be started, brought to 60Hz, and THEN have the breaker closed. You cannot start an engine that is already electrically connected to a heavy load (like a massive pump). The engine lacks the torque to spin up, and will stall out.",
    "cat": "GAP",
    "id": "T09S_179"
  },
  {
    "q": "A 'High Scavenge Air Temperature' alarm on the main engine typically points to which two major faults?",
    "a": "A fouled/blocked scavenge air cooler (water side or air side), or a dangerous fire burning inside the scavenge space",
    "opts": ["A fouled/blocked scavenge air cooler (water side or air side), or a dangerous fire burning inside the scavenge space", "An overspeeding turbocharger and low exhaust gas pressure", "A high seawater temperature and a broken governor", "A failed fuel injector and a broken piston ring"],
    "exp": "Air from the turbocharger is blazing hot. The scavenge cooler cools it down before it enters the engine. If the cooler is dirty, the air stays hot. Even worse, if oil sludge has ignited inside the scavenge manifold, the temperature will skyrocket, triggering the alarm.",
    "cat": "GAP",
    "id": "T09S_180"
  },
  {
    "q": "If the Engine Control Room panel shows a 'High Exhaust Gas Temperature' alarm for Cylinder #3 ONLY, what is the most likely mechanical fault?",
    "a": "A faulty, dripping fuel injector on Cylinder 3, or a burned/leaking exhaust valve on Cylinder 3",
    "opts": ["A faulty, dripping fuel injector on Cylinder 3, or a burned/leaking exhaust valve on Cylinder 3", "A failure of the main Jacket Cooling Water pump", "A massive failure of the turbocharger bearings", "A complete loss of fuel supply from the day tank"],
    "exp": "If ALL cylinders are hot, the engine is overloaded or the turbo is failing. If only ONE cylinder is hot, it is a local problem. A bad injector dumping too much fuel, or a leaky exhaust valve letting fire escape during combustion, will make that specific exhaust port run hundreds of degrees hotter.",
    "cat": "GAP",
    "id": "T09S_181"
  },
  {
    "q": "What is the ideal normal operating temperature range for Jacket Cooling Water (JCW) entering the main engine?",
    "a": "60\u00b0C to 70\u00b0C",
    "opts": ["60\u00b0C to 70\u00b0C", "120\u00b0C to 130\u00b0C", "10\u00b0C to 20\u00b0C", "90\u00b0C to 100\u00b0C"],
    "exp": "Water entering the engine block needs to be warm enough to prevent thermal shock and cold-corrosion, but cool enough to absorb the massive heat of combustion. 60-70\u00b0C is the standard inlet parameter.",
    "cat": "GAP",
    "id": "T09S_182"
  },
  {
    "q": "What is the ideal normal operating temperature range for Jacket Cooling Water (JCW) leaving the main engine?",
    "a": "75\u00b0C to 85\u00b0C",
    "opts": ["150\u00b0C to 160\u00b0C", "105\u00b0C to 115\u00b0C", "40\u00b0C to 50\u00b0C", "75\u00b0C to 85\u00b0C"],
    "exp": "After absorbing heat from the cylinder liners and heads, the water exits hotter. A 10-15\u00b0C temperature rise across the engine is typical. Alarms usually trigger if this outlet temperature exceeds 90-95\u00b0C.",
    "cat": "GAP",
    "id": "T09S_183"
  },
  {
    "q": "What is the severe risk of allowing the Jacket Cooling Water (JCW) outlet temperature to rise above 90-95\u00b0C?",
    "a": "Localized boiling (nucleate boiling) occurs inside the cylinder head cooling passages, creating steam pockets (hot spots) that lead to rapid thermal cracking of the metal",
    "opts": ["Localized boiling (nucleate boiling) occurs inside the cylinder head cooling passages, creating steam pockets (hot spots) that lead to rapid thermal cracking of the metal", "The engine will run so efficiently that it overspeeds the governor", "The fresh water generator will freeze up due to over-evaporation", "The lubricating oil will mix with the water and form an emulsion"],
    "exp": "Water boils at 100\u00b0C. If bulk water hits 95\u00b0C, the water right against the roaring hot metal of the combustion chamber is definitely boiling. Steam doesn't cool metal well. The metal overheats locally and cracks under the stress.",
    "cat": "GAP",
    "id": "T09S_184"
  },
  {
    "q": "What is the purpose of the chemical dosing unit attached to the Jacket Cooling Water (JCW) system?",
    "a": "To add specific corrosion inhibitors (like nitrite/molybdate) that coat the inside of the liners, preventing pitting and galvanic corrosion in the water passages",
    "opts": ["To add specific corrosion inhibitors (like nitrite/molybdate) that coat the inside of the liners, preventing pitting and galvanic corrosion in the water passages", "To add salt to the water to lower its freezing point", "To add heavy fuel oil to lubricate the water pump bearings", "To inject chlorine to kill marine growth and barnacles"],
    "exp": "Fresh water inside hot cast iron causes rapid rust and cavitation pitting (due to liner vibration). Chemical inhibitors form a microscopic protective oxide film over the metal, saving the engine from rusting away from the inside out.",
    "cat": "GAP",
    "id": "T09S_185"
  },
  {
    "q": "How frequently should the ETO or Engineers test the Jacket Cooling Water (JCW) inhibitor concentration, and how is it documented?",
    "a": "Tested monthly using a dedicated chemical test kit, with results and any top-up amounts recorded in the official ship's chemical log",
    "opts": ["Never; the chemicals are lifetime-sealed inside the engine", "Tested annually by an external class surveyor only", "Tested monthly using a dedicated chemical test kit, with results and any top-up amounts recorded in the official ship's chemical log", "Tested daily using the salinity meter and logged in the deck log"],
    "exp": "Chemicals degrade over time due to heat and minor leaks. The engineers draw a sample monthly, add reagent drops, check the color against a chart, and log the PPM (parts per million). If it's low, they dump more chemical into the dosing pot.",
    "cat": "GAP",
    "id": "T09S_186"
  },
  {
    "q": "Why is there an electrical interlock preventing the Fresh Water Generator (FWG) from operating when the Main Engine load is below approximately 40% MCR?",
    "a": "At low engine loads, the jacket cooling water does not contain enough waste heat to effectively boil the seawater in the FWG vacuum chamber",
    "opts": ["At low loads, the ship is usually in port where FWG operation is legally banned", "At low loads, the FWG pulls too much electricity from the shaft generator", "At low loads, the engine requires all the cooling water to prevent cold corrosion", "At low engine loads, the jacket cooling water does not contain enough waste heat to effectively boil the seawater in the FWG vacuum chamber"],
    "exp": "The FWG is a scavenger\u2014it survives entirely on the waste heat rejected by the main engine jacket water. If the engine is idling or maneuvering, the water isn't hot enough (e.g., drops to 65\u00b0C), the vacuum boiling stops, and the FWG loses efficiency.",
    "cat": "GAP",
    "id": "T09S_187"
  },
  {
    "q": "During the pre-arrival UMS (Unmanned Machinery Space) transfer process, how is the alarm extension system verified?",
    "a": "The ETO performs a walk-around, triggering test buttons to ensure audible and visual alarms correctly activate on the bridge, the C/E's cabin, and the duty mess",
    "opts": ["The ETO shorts out the main switchboard to see if the blackout alarm sounds", "The ETO calls the company shore office to confirm satellite telemetry is working", "The ETO writes 'Tested OK' in the logbook without physical verification", "The ETO performs a walk-around, triggering test buttons to ensure audible and visual alarms correctly activate on the bridge, the C/E's cabin, and the duty mess"],
    "exp": "When the engine room is unmanned, the duty engineer sleeps in their cabin. If an engine catches fire, the alarm MUST wake them up. Physically verifying the bells/lights in the cabin and mess room is a critical life-safety check before setting UMS mode.",
    "cat": "GAP",
    "id": "T09S_188"
  },
  {
    "q": "Why must the Impressed Current Cathodic Protection (ICCP) system be switched to MANUAL or OFF before the ship enters a drydock?",
    "a": "Because the system requires conductive seawater to complete the circuit; in dry air, the system will output maximum voltage trying to achieve protection, risking equipment damage and shock",
    "opts": ["Because the shipyard crane will magnetically attach to the hull", "Because the system requires conductive seawater to complete the circuit; in dry air, the system will output maximum voltage trying to achieve protection, risking equipment damage and shock", "Because it will interfere with the shipyard's Wi-Fi network", "Because the ICCP system emits toxic gases when exposed to air"],
    "exp": "The ICCP controller pushes current out the anodes, through the water, and back to the hull. In the air, there's no water to carry the current. The controller thinks the hull is completely unprotected and cranks the voltage to 100%, burning out its own power supply.",
    "cat": "GAP",
    "id": "T09S_189"
  },
  {
    "q": "What specific inspection tasks must the ETO perform on the hull's Echo Sounder and Doppler Log transducers while the ship is in drydock?",
    "a": "Inspect the physical hull fitting, ensure the transducer face is clear of thick antifouling paint, check the zinc anodes on the frame, and inspect the internal deck cable glands for leaks",
    "opts": ["Remove the transducers completely and store them in the bridge", "Inspect the physical hull fitting, ensure the transducer face is clear of thick antifouling paint, check the zinc anodes on the frame, and inspect the internal deck cable glands for leaks", "Use a hammer to tap test the acoustic resonance of the crystals", "Coat the transducer faces with heavy grease to protect them from drydock dust"],
    "exp": "Transducers bounce sound waves off the sea floor. If shipyard painters cover them in 5 layers of thick anti-fouling paint, the sound waves are muffled and the depth finder breaks. The ETO must stand under the hull and physically ensure they are masked off before painting.",
    "cat": "GAP",
    "id": "T09S_190"
  },
  {
    "q": "During drydock, what is the inspection and replacement rule for the passive Sacrificial Anodes welded to the ship's hull?",
    "a": "Inspect all zinc/aluminium anodes and formally record their condition; any anode worn below 50% of its original mass must be cut off and renewed",
    "opts": ["Leave them alone; they never need replacing as long as the ICCP is working", "Inspect all zinc/aluminium anodes and formally record their condition; any anode worn below 50% of its original mass must be cut off and renewed", "Measure the voltage of each anode and connect them to the main battery", "Paint over all anodes to protect them for another 5 years"],
    "exp": "Sacrificial anodes literally dissolve into the ocean to save the steel hull from rusting (galvanic corrosion). If they are more than half gone, they won't last another 5-year drydock cycle. They must be chopped off and new blocks welded on.",
    "cat": "GAP",
    "id": "T09S_191"
  },
  {
    "q": "If a Class Surveyor requires a full Fire Detection System test during drydock, what is the ETO's responsibility?",
    "a": "Prepare a comprehensive detector map, physically apply smoke/heat to every single detector on the ship, and witness the panel response alongside the surveyor",
    "opts": ["Disable the system entirely to prevent false alarms from shipyard welding", "Prepare a comprehensive detector map, physically apply smoke/heat to every single detector on the ship, and witness the panel response alongside the surveyor", "Press the 'Lamp Test' button on the panel and print a certificate", "Only test the detectors in the Master's cabin and the engine room"],
    "exp": "The 5-year renewal survey often demands proof that the life-safety systems actually work. The ETO walks the entire ship with the surveyor, using a can of test smoke and a heat gun, activating every single sensor and confirming the zone lights up correctly on the bridge panel.",
    "cat": "GAP",
    "id": "T09S_192"
  },
  {
    "q": "What are the strict prerequisites before a 'Working Aloft Permit' (WAP) can be issued to an ETO to service the radar scanner on the mast?",
    "a": "Master's signature, verified wind speed <10 knots, a dedicated buddy/standby person on deck, and a full-body harness with twin lanyards",
    "opts": ["The ship must be completely stopped and anchored", "Chief Engineer's signature and a pair of rubber gloves", "A written letter to the company and a specialized scaffolding tower", "Master's signature, verified wind speed <10 knots, a dedicated buddy/standby person on deck, and a full-body harness with twin lanyards"],
    "exp": "Falling from the mast is fatal. The WAP is a high-level permit ensuring the weather is safe, someone is watching you (buddy system), and you are 100% tied off at all times using a twin-lanyard harness.",
    "cat": "GAP",
    "id": "T09S_193"
  },
  {
    "q": "What is the strict 'Tool Control' rule when an ETO is working aloft on the radar platform?",
    "a": "Absolutely all tools must be secured with individual lanyards to the ETO's belt or secured inside zipped tool bags to prevent deadly dropped objects",
    "opts": ["Tools must be painted bright orange for visibility", "Only wooden or plastic tools are allowed near the radar", "Tools must be thrown down to the deck when finished rather than carried", "Absolutely all tools must be secured with individual lanyards to the ETO's belt or secured inside zipped tool bags to prevent deadly dropped objects"],
    "exp": "A heavy spanner dropped from 30 meters up has enough kinetic energy to instantly kill a crew member standing on the deck below. Dropped object prevention (tool lanyards and exclusion zones) is absolutely mandatory.",
    "cat": "GAP",
    "id": "T09S_194"
  },
  {
    "q": "On an oil tanker, the totally enclosed lifeboat is fitted with a large compressed air cylinder. How long is this cylinder mandated to provide breathable air for the maximum capacity of occupants?",
    "a": "A minimum of 10 minutes",
    "opts": ["A minimum of 24 hours", "A minimum of 10 minutes", "A minimum of 60 minutes", "A minimum of 2 minutes"],
    "exp": "10 minutes provides enough breathable air and positive pressure (to keep smoke out) for the lifeboat to launch into burning water, engage its propeller, and drive approximately 1 nautical mile clear of the burning oil slick.",
    "cat": "GAP",
    "id": "T09S_195"
  },
  {
    "q": "If the pressure gauge on the lifeboat breathing air cylinder is found to be low, what restriction applies to refilling it?",
    "a": "It MUST only be recharged using a certified Class E 'Breathing Air' compressor; using standard ship's workshop air risks deadly oil mist and carbon monoxide contamination",
    "opts": ["It can be refilled using any high-pressure air line in the engine room", "It MUST only be recharged using a certified Class E 'Breathing Air' compressor; using standard ship's workshop air risks deadly oil mist and carbon monoxide contamination", "It can only be refilled by blowing exhaust gas through a carbon filter", "It must be filled with pure 100% Oxygen to maximize survival time"],
    "exp": "Standard engine starting air compressors use heavy oil for lubrication, which vaporizes into the air. Breathing this oil mist or CO will kill the lifeboat occupants. Dedicated BA compressors use specialized filters and food-grade lubricants to ensure medical-grade breathing air.",
    "cat": "GAP",
    "id": "T09S_196"
  },
  {
    "q": "What is the function of the Lifeboat Sprinkler system fitted to tankers?",
    "a": "It is a water spray fire protection system that draws seawater from the hull and continuously sprays it over the entire outer surface of the closed lifeboat to cool it while escaping a fire",
    "opts": ["It automatically extinguishes fires inside the engine compartment of the lifeboat", "It sprays chemical dispersants onto the burning oil slick to clear a path", "It is a water spray fire protection system that draws seawater from the hull and continuously sprays it over the entire outer surface of the closed lifeboat to cool it while escaping a fire", "It washes salt off the windows so the coxswain can see clearly"],
    "exp": "Fiberglass melts in an oil fire. The sprinkler pump pulls ocean water from under the boat and blankets the entire roof and sides in a thick film of flowing water. The water absorbs the intense radiant heat of the fire, keeping the fiberglass cool and intact.",
    "cat": "GAP",
    "id": "T09S_197"
  },
  {
    "q": "How is the Lifeboat Sprinkler system activated during an emergency launch?",
    "a": "The coxswain manually opens a dedicated control valve inside the lifeboat after the engine is started and the sea cock is open",
    "opts": ["It activates automatically the moment the lifeboat touches the water", "The coxswain manually opens a dedicated control valve inside the lifeboat after the engine is started and the sea cock is open", "It is triggered remotely from the ship's bridge before launching", "It requires a crew member to climb on the roof and pull a ripcord"],
    "exp": "The system relies on an engine-driven pump. Once the engine is running and the boat is in the water (sea cock open), the coxswain turns a large valve handle inside the cabin to flood the exterior spray nozzles.",
    "cat": "GAP",
    "id": "T09S_198"
  },
  {
    "q": "During routine maintenance, the ETO must calibrate the Lube Oil Pressure sensor on a reefer compressor. What is the FIRST physical step at the 3-valve manifold?",
    "a": "Close the process isolation valve to stop live oil pressure from the compressor from reaching the sensor",
    "opts": ["Close the process isolation valve to stop live oil pressure from the compressor from reaching the sensor", "Unscrew the sensor completely from the manifold with a wrench", "Open the equalising bypass valve to vent oil onto the deck", "Connect the laptop to the DCS and delete the old calibration file"],
    "exp": "Safety first. You cannot remove or calibrate a sensor that is holding back 5 bar of hot oil. You must isolate the sensor from the main pipe by closing the root (process) valve on the manifold.",
    "cat": "GAP",
    "id": "T09S_199"
  },
  {
    "q": "When calibrating a pressure sensor against a certified reference gauge, what is the generally acceptable error deviation?",
    "a": "Plus or minus 2% of the full-scale range",
    "opts": ["Plus or minus 2% of the full-scale range", "Plus or minus 10% of the full-scale range", "0% error is strictly required; any deviation means instant rejection", "As long as it reads above zero, it is acceptable"],
    "exp": "Industrial sensors have tolerances. A typical marine standard allows a \u00b12% error across the span (e.g., on a 0-10 bar sensor, a 0.2 bar difference is acceptable). Anything beyond this requires turning the zero/span trim screws to correct the deviation.",
    "cat": "GAP",
    "id": "T09S_200"
  },
  {
    "q": "How can an engineer visually identify the Engine Room Bilge Injection Valve compared to other seawater valves?",
    "a": "It is a massive valve connected to the main cooling pump suction, clearly labeled 'EMERGENCY BILGE SUCTION', and is physically sealed or wired shut with a breakable tag",
    "opts": ["It is a tiny, 10mm brass valve attached to the Oily Water Separator", "It is painted entirely bright pink and located on the ceiling", "It is a massive valve connected to the main cooling pump suction, clearly labeled 'EMERGENCY BILGE SUCTION', and is physically sealed or wired shut with a breakable tag", "It has no handle and can only be opened using a special computer command"],
    "exp": "Because opening this valve in non-emergency situations would illegally dump oily bilge water straight into the ocean (bypassing the OWS) and starve the engine of clean cooling water, it is strictly sealed with a wire. Breaking the seal is a loggable emergency event.",
    "cat": "GAP",
    "id": "T09S_201"
  },
  {
    "q": "What is the critical UMS pre-arrival check for the massive mooring winches located on the fore and aft decks?",
    "a": "Test run each motor, apply and release the EM brakes, and explicitly verify control functions from BOTH the local pendant and the remote operator station",
    "opts": ["Disconnect them from the main switchboard and wire them to the emergency generator", "Megger test the stators with 5000V to ensure they are dry", "Grease all the wire ropes and paint the drums", "Test run each motor, apply and release the EM brakes, and explicitly verify control functions from BOTH the local pendant and the remote operator station"],
    "exp": "When the ship approaches the dock, the deck crew needs the winches to work instantly. Finding out a remote control joystick is broken while 50 meters from the pier is a disaster. The ETO must physically run and prove every control station before arrival.",
    "cat": "GAP",
    "id": "T09S_202"
  },
  {
    "q": "What is the principle of a 'Capillary Tube' type viscometer?",
    "a": "A constant-flow gear pump forces fuel through a fixed capillary tube; the pressure drop (differential pressure) across the tube is directly proportional to the fluid's viscosity",
    "opts": ["It measures the ultrasonic acoustic resonance of the fuel pipe", "A spinning disc creates torque in the fluid, which is measured by a load cell", "A constant-flow gear pump forces fuel through a fixed capillary tube; the pressure drop (differential pressure) across the tube is directly proportional to the fluid's viscosity", "It measures the time taken for a steel ball to fall through a tube of hot fuel"],
    "exp": "There are two main types of inline viscometers: rotational and capillary. The capillary type uses a small precision gear pump to push exactly the same amount of fuel through a narrow restriction (capillary). If the fuel gets thicker (higher viscosity), it creates a higher back-pressure (\u0394P). This \u0394P is converted to a 4-20mA signal.",
    "cat": "VIS",
    "id": "T09S_203"
  },
  {
    "q": "During a manual changeover from Heavy Fuel Oil (HFO) to Marine Gas Oil (MGO), why must the Viscotherm steam heating be completely shut off well in advance?",
    "a": "MGO has a naturally low viscosity (2-6 cSt); if heated, its viscosity drops below 2 cSt, causing catastrophic loss of lubrication and seizure in the fuel injection pumps",
    "opts": ["Because the viscotherm motor will overspeed in the thinner fluid", "Because MGO chemically reacts with steam, forming explosive hydrogen gas", "Because heating MGO causes it to expand and burst the fuel lines", "MGO has a naturally low viscosity (2-6 cSt); if heated, its viscosity drops below 2 cSt, causing catastrophic loss of lubrication and seizure in the fuel injection pumps"],
    "exp": "Fuel injection pumps rely on the fuel itself for lubrication. If MGO (which is already thin) is accidentally heated, it becomes like water (<2 cSt). The plungers lose their lubricating film, score the barrels, and seize solid within minutes, stopping the engine.",
    "cat": "VIS",
    "id": "T09S_204"
  },
  {
    "q": "What is the function of the 'Mixing Column' (or mixing tube) located just before the viscotherm and engine inlet?",
    "a": "It dampens pressure pulsations from the booster pumps and safely mixes the hot return fuel from the engine with the incoming colder fuel from the service tank",
    "opts": ["It uses a centrifuge to separate heavy sludge before the injectors", "It injects water into the fuel to reduce NOx emissions", "It mathematically calculates the exact fuel consumption for the Chief Engineer", "It dampens pressure pulsations from the booster pumps and safely mixes the hot return fuel from the engine with the incoming colder fuel from the service tank"],
    "exp": "The engine consumes only a portion of the fuel circulated to it. The hot, unburnt return fuel is routed back to the mixing column where it blends with fresh fuel from the service tank. This provides a stable temperature and pressure buffer for the viscotherm to measure.",
    "cat": "VIS",
    "id": "T09S_205"
  },
  {
    "q": "What happens to the fuel atomisation process if the Viscotherm fails and the fuel is injected at an excessively HIGH viscosity (e.g., 25 cSt)?",
    "a": "The fuel droplets will be too large to burn completely in the available time, resulting in severe afterburning, high exhaust temperatures, and heavy black smoke",
    "opts": ["The fuel will burn too quickly, causing pre-ignition and engine knocking", "The engine will instantly overspeed due to the denser fuel", "The fuel injectors will physically shatter under the pressure", "The fuel droplets will be too large to burn completely in the available time, resulting in severe afterburning, high exhaust temperatures, and heavy black smoke"],
    "exp": "High viscosity means the fuel is too thick. Instead of an ultra-fine mist, it sprays as heavy globs. Large droplets don't vaporize fast enough, so they are still burning when the exhaust valve opens, pushing fire into the exhaust manifold.",
    "cat": "VIS",
    "id": "T09S_206"
  },
  {
    "q": "If the Viscotherm unit needs to be bypassed for maintenance while the engine is running, how is the fuel temperature controlled?",
    "a": "The steam valve controller is switched to MANUAL mode, and the engineer manually adjusts the output (e.g., to 60%) while monitoring the fuel thermometer",
    "opts": ["A bypass steam valve automatically takes over using a mechanical thermostat", "The engine is run purely on cold HFO until maintenance is complete", "The boiler is temporarily shut down to stop all steam production", "The steam valve controller is switched to MANUAL mode, and the engineer manually adjusts the output (e.g., to 60%) while monitoring the fuel thermometer"],
    "exp": "Controllers have an AUTO/MANUAL toggle. If the viscosity sensor is isolated, the loop is broken. The ETO or engineer must place the controller in MANUAL, manually opening the steam valve to a fixed percentage that maintains the target temperature (e.g., 135\u00b0C).",
    "cat": "VIS",
    "id": "T09S_207"
  },
  {
    "q": "What is the typical industry standard control signal used by a Viscosity Transmitter to send its reading to the main control panel?",
    "a": "4-20 mA DC",
    "opts": ["10-50 mA AC", "4-20 mA DC", "0-10 V AC", "0-5 V DC"],
    "exp": "4-20mA is the standard for marine sensors. 4mA represents the minimum scale (e.g., 0 cSt), and 20mA represents maximum scale (e.g., 50 cSt). If the wire breaks, the signal drops to 0mA, immediately alerting the system to a sensor failure (live zero).",
    "cat": "VIS",
    "id": "T09S_208"
  },
  {
    "q": "In a rotational viscotherm, what electrical protection is typically fitted to the small constant-speed synchronous motor?",
    "a": "A thermal overload relay or internal thermistor to protect it if the spindle jams in cold, solidified fuel",
    "opts": ["A reverse-power relay", "A phase-sequence relay", "A high-voltage surge arrester", "A thermal overload relay or internal thermistor to protect it if the spindle jams in cold, solidified fuel"],
    "exp": "If the fuel gets too cold, HFO turns solid (like asphalt). If the viscometer motor tries to turn the spindle through solid fuel, the rotor stalls. The thermal overload relay trips to save the motor windings from burning out.",
    "cat": "VIS",
    "id": "T09S_209"
  },
  {
    "q": "When adjusting the Proportional (P) band on a viscotherm PI controller, what is the effect of making the Proportional Band very narrow (High Gain)?",
    "a": "The steam valve will react very aggressively to small changes in viscosity, which can cause severe temperature overshoot and hunting",
    "opts": ["The steam valve will react very sluggishly, taking hours to correct the temperature", "The controller will switch to Derivative mode", "The steam valve will stop moving entirely", "The steam valve will react very aggressively to small changes in viscosity, which can cause severe temperature overshoot and hunting"],
    "exp": "A narrow proportional band (or high gain) makes the controller hypersensitive. A tiny drop in viscosity causes the valve to slam fully closed. The fuel cools, viscosity spikes, and the valve slams fully open. This violent oscillation is called hunting.",
    "cat": "VIS",
    "id": "T09S_210"
  },
  {
    "q": "What is the function of the Integral (I) action in a Viscotherm PI controller?",
    "a": "It continuously accumulates any steady-state error over time and forces the steam valve to move until the viscosity is exactly at the setpoint (zero offset)",
    "opts": ["It limits the maximum speed the steam valve can open", "It continuously accumulates any steady-state error over time and forces the steam valve to move until the viscosity is exactly at the setpoint (zero offset)", "It predicts future viscosity changes based on fuel pressure", "It ignores small ripples caused by the fuel booster pumps"],
    "exp": "Proportional control alone always leaves a small gap between the setpoint and the actual value (offset). Integral action looks at that remaining gap, adds it up over time, and nudges the valve until the error is perfectly eliminated.",
    "cat": "VIS",
    "id": "T09S_211"
  },
  {
    "q": "Why must the steam heating be increased very gradually (not slammed open) when first heating Heavy Fuel Oil?",
    "a": "Rapid heating causes 'thermal cracking', breaking the fuel into lighter gases and heavy carbon sludge which fouls the heater tubes",
    "opts": ["Rapid heating causes the viscotherm motor to spin backwards", "Rapid heating causes 'thermal cracking', breaking the fuel into lighter gases and heavy carbon sludge which fouls the heater tubes", "Rapid heating reduces the sulfur content illegally", "Rapid heating causes the steam pipes to freeze"],
    "exp": "If the steam valve opens 100% instantly on cold fuel, the fuel touching the blazing hot heat-exchanger tubes literally bakes and cracks. It leaves a hard layer of insulating carbon (coke) on the tubes, ruining the heater's efficiency.",
    "cat": "VIS",
    "id": "T09S_212"
  },
  {
    "q": "If the pneumatic control air supply to the Viscotherm steam valve fails, what is the expected result?",
    "a": "The valve is 'Fail Close', so it will shut completely, stopping all steam; fuel viscosity will rise, triggering a high-viscosity alarm",
    "opts": ["The valve will rapidly oscillate open and closed", "The valve is 'Fail Open', so it will open completely, boiling the fuel", "The valve is 'Fail Last', freezing in its current position forever", "The valve is 'Fail Close', so it will shut completely, stopping all steam; fuel viscosity will rise, triggering a high-viscosity alarm"],
    "exp": "Marine fuel heaters use 'Fail Close' (Air-to-Open) valves. Loss of air pressure allows the strong internal spring to slam the valve shut, defaulting to a safe, non-heating state to prevent fuel fires.",
    "cat": "VIS",
    "id": "T09S_213"
  },
  {
    "q": "What routine electrical maintenance should an ETO perform on the Viscotherm transmitter?",
    "a": "Verify the 4-20mA loop integrity, check cable terminations for vibration damage, and perform a zero/span calibration check if the reading is drifting",
    "opts": ["Megger the 4-20mA signal wires with 1000V DC", "Replace the steam control valve diaphragm", "Verify the 4-20mA loop integrity, check cable terminations for vibration damage, and perform a zero/span calibration check if the reading is drifting", "Drain and replace the silicone fluid in the motor"],
    "exp": "The ETO ensures the sensor is reliably talking to the controller. The hot, vibrating environment near the main engine easily shakes wires loose. 4-20mA loop calibrators are used to inject test signals to verify the panel displays accurately.",
    "cat": "VIS",
    "id": "T09S_214"
  },
  {
    "q": "A 'High Viscosity' alarm indicates the fuel is too thick. What is the most likely cause if the controller is in AUTO and calling for 100% steam?",
    "a": "The steam supply is physically blocked, the heater tubes are heavily fouled with carbon, or the steam trap is malfunctioning and waterlogging the heater",
    "opts": ["The steam supply is physically blocked, the heater tubes are heavily fouled with carbon, or the steam trap is malfunctioning and waterlogging the heater", "The controller's Integral action is set too fast", "The Viscotherm setpoint is set too high", "The fuel is actually Marine Gas Oil (MGO)"],
    "exp": "If the brain (controller) is asking for maximum heat (100% output) but the fuel is still cold/thick, the electrical system is working. The fault is mechanical: no steam is arriving, or the heat exchanger is completely insulated by dirt.",
    "cat": "VIS",
    "id": "T09S_215"
  },
  {
    "q": "A 'Low Viscosity' alarm indicates the fuel is too thin. What is the danger of running the engine in this condition?",
    "a": "The thin fuel lacks lubricity, leading to severe scuffing and seizure of the fuel pump plungers and injector needles",
    "opts": ["The thin fuel will cause the engine to run backwards", "The thin fuel lacks lubricity, leading to severe scuffing and seizure of the fuel pump plungers and injector needles", "The thin fuel will freeze in the pipes", "The thin fuel will extinguish the combustion flame"],
    "exp": "HFO must be thick enough to act as a lubricant for the microscopic clearances inside the high-pressure fuel pumps. If it drops below ~10 cSt (due to overheating), metal grinds on metal, destroying the pumps.",
    "cat": "VIS",
    "id": "T09S_216"
  },
  {
    "q": "How is a Viscotherm typically bypassed for cleaning or calibration without stopping the main engine?",
    "a": "By opening the manual fuel bypass valve and closing the inlet/outlet isolation valves on the viscometer block",
    "opts": ["It cannot be bypassed; the main engine must be stopped", "By electrically shorting out the 4-20mA signal", "By opening the manual fuel bypass valve and closing the inlet/outlet isolation valves on the viscometer block", "By turning off the booster pumps to stop fuel flow"],
    "exp": "All critical inline sensors have a 3-valve manifold or a dedicated bypass loop. The engineer opens the bypass to keep fuel flowing to the engine, isolates the sensor, drains it, and can then safely open it for maintenance.",
    "cat": "VIS",
    "id": "T09S_217"
  },
  {
    "q": "In a capillary-type viscometer, what happens to the Differential Pressure (DP) reading if the flow rate of the fuel pump is not perfectly constant?",
    "a": "The viscosity reading will be completely inaccurate, as the DP relies on a strictly constant flow rate to represent viscosity correctly",
    "opts": ["The steam valve will automatically switch to Derivative control", "The DP reading will lock at 20mA to indicate a fault", "The viscosity reading remains accurate due to internal mathematical compensation", "The viscosity reading will be completely inaccurate, as the DP relies on a strictly constant flow rate to represent viscosity correctly"],
    "exp": "The formula for the capillary is \u0394P = Flow \u00d7 Viscosity \u00d7 Constant. If Flow changes, \u0394P changes, and the controller falsely thinks the Viscosity changed. This is why capillary viscometers use an extremely precise, constant-speed gear pump.",
    "cat": "VIS",
    "id": "T09S_218"
  },
  {
    "q": "What is the consequence of locating the Viscotherm sensor too far away from the fuel heaters?",
    "a": "It introduces a massive 'transport delay' (dead time) into the control loop, causing the controller to react too late and hunt continuously",
    "opts": ["The sensor will overheat from the ambient engine room air", "The 4-20mA signal will lose voltage due to wire resistance", "It introduces a massive 'transport delay' (dead time) into the control loop, causing the controller to react too late and hunt continuously", "The fuel will become too clean before reaching the sensor"],
    "exp": "If the heater changes temperature, but it takes 30 seconds for that fuel to travel down the pipe to the sensor, the controller 'waits' 30 seconds to see a result. It thinks nothing happened, opens the valve more, and massively overheats the fuel (transport lag). Sensors must be close to the heater outlet.",
    "cat": "VIS",
    "id": "T09S_219"
  },
  {
    "q": "What is meant by the 'Flash Point' of a fuel, and why is it monitored alongside viscosity?",
    "a": "Flash point is the lowest temperature at which the fuel produces combustible vapor; heating HFO above its flash point to reach viscosity creates a severe explosion hazard in the tanks/pipes",
    "opts": ["Flash point is the temperature at which the Viscotherm motor burns out", "Flash point is the lowest temperature at which the fuel produces combustible vapor; heating HFO above its flash point to reach viscosity creates a severe explosion hazard in the tanks/pipes", "Flash point is the point where the fuel solidifies", "Flash point is the exact temperature where viscosity reaches 0 cSt"],
    "exp": "By SOLAS, fuel in unpressurized tanks must not be heated within 10\u00b0C of its flash point (typically 60\u00b0C min limit). While fuel *in the closed pressurized pipes* can safely be heated to 130\u00b0C, the engineers must ensure any vented tanks remain safely below the flash point.",
    "cat": "VIS",
    "id": "T09S_220"
  },
  {
    "q": "What does a 'Temperature-Viscosity Nomogram (Chart)' provide to the marine engineer?",
    "a": "A graphical line showing exactly what temperature a specific bunker fuel must be heated to in order to achieve the ideal 14 cSt injection viscosity",
    "opts": ["A chart showing the pressure drop across the fuel filters", "A map of the electrical wiring for the Viscotherm controller", "A log of the engine's RPM against fuel consumption", "A graphical line showing exactly what temperature a specific bunker fuel must be heated to in order to achieve the ideal 14 cSt injection viscosity"],
    "exp": "Every time new fuel is bunkered, the lab provides its baseline stats (e.g., 380 cSt at 50\u00b0C). The engineer plots this on the Nomogram chart, draws a straight line, and sees exactly where it crosses the 14 cSt line (e.g., at 135\u00b0C). This is the manual backup target.",
    "cat": "VIS",
    "id": "T09S_221"
  },
  {
    "q": "How does heavy vibration from the main engine affect a rotational viscometer if not properly isolated?",
    "a": "It can cause excessive wear on the delicate spindle bearings and induce noisy, fluctuating torque signals, destabilizing the control loop",
    "opts": ["It improves the mixing of the fuel, providing a better reading", "It can cause excessive wear on the delicate spindle bearings and induce noisy, fluctuating torque signals, destabilizing the control loop", "It causes the steam valve to permanently lock open", "It generates a static electrical charge that blows the 4-20mA fuse"],
    "exp": "Viscometers measure minute changes in rotational drag. Heavy external vibration shakes the spindle, creating 'noise' in the current reading. This noise makes the PI controller jittery. Good installations use vibration-damping mounts.",
    "cat": "VIS",
    "id": "T09S_222"
  },
  {
    "q": "If the 4-20mA signal wire from the viscosity transmitter is accidentally cut, what will the controller display?",
    "a": "It will drop to 0mA, triggering a 'Sensor Break / Loop Fault' alarm and usually forcing the steam valve to its fail-safe closed position",
    "opts": ["It will automatically switch to a wireless Bluetooth connection", "It will rise to 24mA, opening the steam valve 100%", "It will drop to 0mA, triggering a 'Sensor Break / Loop Fault' alarm and usually forcing the steam valve to its fail-safe closed position", "It will hold the last known good value indefinitely"],
    "exp": "This is the 'live zero' benefit of 4-20mA loops. 0 mA is impossible in normal operation (minimum is 4mA). If the controller sees 0mA, it instantly knows the wire is broken and immediately triggers a safety lockout.",
    "cat": "VIS",
    "id": "T09S_223"
  },
  {
    "q": "What is 'Trace Heating', and why is it used on heavy fuel oil lines leading to the viscotherm and engine?",
    "a": "Steam or electrical heating lines wrapped around the fuel pipes to maintain fuel temperature and viscosity when the engine is stopped, preventing the fuel from solidifying",
    "opts": ["A system that tracks the exact location of a fuel leak using thermal cameras", "Steam or electrical heating lines wrapped around the fuel pipes to maintain fuel temperature and viscosity when the engine is stopped, preventing the fuel from solidifying", "A system that cools the pipes using seawater to prevent fires", "A method of burning off waste fuel in the exhaust stack"],
    "exp": "HFO solidifies in cold pipes when flow stops. Trace heating (small steam tubes or electric heat tape wrapped under the pipe insulation) keeps the oil warm and liquid, ensuring the engine and viscotherm can restart without blockages.",
    "cat": "VIS",
    "id": "T09S_224"
  },
  {
    "q": "Why is Silicone Oil frequently used as the damping fluid inside precision dashpots?",
    "a": "Silicone oil has an extremely stable viscosity-temperature coefficient, meaning its thickness (and the resulting time delay) doesn't change drastically when the engine room gets hot",
    "opts": ["It is highly flammable and acts as a backup fuel", "It evaporates quickly, leaving the dashpot completely clean", "Silicone oil has an extremely stable viscosity-temperature coefficient, meaning its thickness (and the resulting time delay) doesn't change drastically when the engine room gets hot", "It is highly conductive and improves the electrical contact"],
    "exp": "Normal mineral oil thins out as it gets hot. If used in a dashpot, a 10-second delay in winter would become a 2-second delay in summer. Silicone oil maintains a near-constant viscosity across a wide temperature range, ensuring stable timing.",
    "cat": "DPT",
    "id": "T09S_225"
  },
  {
    "q": "How does a 'Pneumatic Dashpot' differ from a hydraulic one in a time-delay relay?",
    "a": "It uses air drawn through a needle valve into a bellows/chamber to create the delay, rather than pushing oil",
    "opts": ["It relies entirely on magnetic repulsion", "It creates instantaneous trips with zero delay", "It uses air drawn through a needle valve into a bellows/chamber to create the delay, rather than pushing oil", "It uses high-pressure steam instead of air"],
    "exp": "Pneumatic timers use a rubber bellows. When the relay energizes, a spring tries to expand the bellows. Air slowly bleeds in through an adjustable tiny hole. When the bellows is full, the contacts click over. The hole size dictates the delay.",
    "cat": "DPT",
    "id": "T09S_226"
  },
  {
    "q": "In an Air Circuit Breaker (ACB) oil-dashpot trip, what is the purpose of the 'Check Valve' or 'Flapper Valve' built into the piston?",
    "a": "It closes during the upward (trip) stroke to force oil through the tiny orifice for a slow delay, but opens wide on the downward stroke so the relay resets instantly",
    "opts": ["It blocks all movement to lock the breaker closed permanently", "It closes during the upward (trip) stroke to force oil through the tiny orifice for a slow delay, but opens wide on the downward stroke so the relay resets instantly", "It allows oil to leak out slowly to indicate maintenance is required", "It acts as a pressure relief valve to prevent the dashpot from exploding"],
    "exp": "When a fault clears before tripping, the relay needs to drop back down to zero immediately. If it had to slowly squeeze oil to drop back down, cumulative short overloads would eventually trip it. The check valve allows a 'slow trip, fast reset'.",
    "cat": "DPT",
    "id": "T09S_227"
  },
  {
    "q": "Why is a dashpot essential in a Preferential Trip (Load Shedding) relay?",
    "a": "It provides a 5 to 15-second time delay, ensuring that harmless, brief starting currents from large motors do not accidentally trigger the shedding of ship's loads",
    "opts": ["It instantly sheds all load the millisecond a fault is detected", "It provides a 5 to 15-second time delay, ensuring that harmless, brief starting currents from large motors do not accidentally trigger the shedding of ship's loads", "It increases the voltage output to compensate for the heavy load", "It mechanically disconnects the generator from the busbar"],
    "exp": "Starting a bow thruster or cooling pump pulls massive current for a few seconds. If the preferential trip reacted instantly, it would shut down the galleys and AC every time a pump started. The dashpot timer ignores these short spikes.",
    "cat": "DPT",
    "id": "T09S_228"
  },
  {
    "q": "What maintenance issue in a dashpot will cause an Air Circuit Breaker to trip much too quickly on a minor overload?",
    "a": "Low oil level or using an oil with a viscosity that is far too thin",
    "opts": ["A completely blocked orifice", "Low oil level or using an oil with a viscosity that is far too thin", "A broken trip spring", "Too much oil in the cylinder"],
    "exp": "If the oil leaks out, the piston hits air and flies up instantly, bypassing the delay. If someone refills it with thin sewing-machine oil instead of the thick specified silicone oil, the resistance is too low, causing premature tripping.",
    "cat": "DPT",
    "id": "T09S_229"
  },
  {
    "q": "What maintenance issue in a dashpot will cause an Air Circuit Breaker to fail to trip, or trip dangerously slow, during a major fault?",
    "a": "Dirt or sludge completely blocking the needle valve orifice, or using an oil that is far too thick",
    "opts": ["A high ambient engine room temperature", "An empty oil cylinder", "Dirt or sludge completely blocking the needle valve orifice, or using an oil that is far too thick", "A worn check valve"],
    "exp": "If the tiny hole (orifice) gets plugged with dirt, the oil is trapped. The piston is hydraulically locked and cannot move upward, effectively disabling the overcurrent protection of the breaker.",
    "cat": "DPT",
    "id": "T09S_230"
  },
  {
    "q": "In a diesel engine mechanical governor, how does the ETO or Engineer perform an 'Oil Flush' on the dashpot mechanism?",
    "a": "By turning the compensating needle valve fully open to let trapped dirt flush through, then carefully resetting it to the exact original position",
    "opts": ["By turning the compensating needle valve fully open to let trapped dirt flush through, then carefully resetting it to the exact original position", "By replacing the silicone oil with fresh heavy fuel oil", "By pumping compressed air directly into the oil reservoir", "By removing the governor completely and boiling it in water"],
    "exp": "If a governor becomes sluggish, the internal dashpot orifice might be dirty. A quick fix is to open the needle valve wide, physically move the linkage to flush oil through the hole, and then immediately return the valve to its 'Critical Damping' mark.",
    "cat": "DPT",
    "id": "T09S_231"
  },
  {
    "q": "What is an 'Isochronous' governor setting, and why is dashpot damping critical for it?",
    "a": "Isochronous means 0% droop (maintaining exactly 60Hz at all loads); this is highly unstable in parallel, requiring perfect dashpot tuning to prevent violent hunting",
    "opts": ["It means the governor only uses electronics; hydraulic dashpots are illegal", "It refers to a governor that shares load by shifting phase angles", "It means the engine runs at variable speeds; the dashpot is disabled entirely", "Isochronous means 0% droop (maintaining exactly 60Hz at all loads); this is highly unstable in parallel, requiring perfect dashpot tuning to prevent violent hunting"],
    "exp": "An isochronous governor aggressively fights to keep the speed perfectly flat. Because it has no 'give' (no droop), it is extremely prone to over-correcting. The dashpot is the only mechanical thing keeping it from swinging wildly out of control.",
    "cat": "DPT",
    "id": "T09S_232"
  },
  {
    "q": "Why are dashpots sometimes used on the moving armatures of massive, high-amperage electrical contactors?",
    "a": "To prevent 'Contact Bounce', which causes severe electrical arcing and welding of the silver contacts when they slam shut",
    "opts": ["To increase the speed at which the contacts close", "To prevent 'Contact Bounce', which causes severe electrical arcing and welding of the silver contacts when they slam shut", "To generate a magnetic field that blows out the arc", "To lubricate the copper busbars"],
    "exp": "When a heavy metal contactor slams shut, the impact causes the contacts to bounce apart microscopically a few times. Each bounce draws a massive electrical arc that melts the metal. A small dashpot cushions the final millimeter of travel, landing the contacts firmly.",
    "cat": "DPT",
    "id": "T09S_233"
  },
  {
    "q": "How is a dashpot utilized in a 'Heavy Duty Limit Switch' (e.g., on a crane or cargo hatch)?",
    "a": "It dampens the impact of the heavy striker arm hitting the switch, protecting the delicate internal electrical contacts from mechanical shattering",
    "opts": ["It converts the mechanical strike into pneumatic air pressure", "It delays the electrical signal from reaching the VFD by 10 seconds", "It amplifies the striking force to ensure a good connection", "It dampens the impact of the heavy striker arm hitting the switch, protecting the delicate internal electrical contacts from mechanical shattering"],
    "exp": "Cranes and hatches are massive. When they hit a limit switch, the mechanical shock is severe. The limit switch lever often has a built-in dashpot to absorb the kinetic energy of the hit so the plastic casing doesn't explode.",
    "cat": "DPT",
    "id": "T09S_234"
  },
  {
    "q": "If a hydraulic governor is drained of oil, what happens to the dashpot functionality?",
    "a": "It is completely lost; the governor will hunt uncontrollably or fail to control fuel altogether because the hydraulic servo relies on that oil",
    "opts": ["It works perfectly but with a 50% slower response time", "The engine automatically trips on overspeed", "It converts to pneumatic operation automatically", "It is completely lost; the governor will hunt uncontrollably or fail to control fuel altogether because the hydraulic servo relies on that oil"],
    "exp": "In a Woodward governor, the oil is not just for lubrication. It is the working fluid for the hydraulic servo-pistons and the compensating dashpot. No oil = no hydraulic force = loss of engine control.",
    "cat": "DPT",
    "id": "T09S_235"
  },
  {
    "q": "What is the relationship between the 'Accumulator' and the 'Dashpot' in a hydraulic governor?",
    "a": "The accumulator stores pressurized oil to supply the servo for fast movements, while the dashpot regulates and dampens that movement for stability",
    "opts": ["They are exactly the same component", "The accumulator cools the oil before it enters the dashpot", "The accumulator stores electricity, the dashpot stores oil", "The accumulator stores pressurized oil to supply the servo for fast movements, while the dashpot regulates and dampens that movement for stability"],
    "exp": "The governor pump fills the accumulator with high-pressure oil (stored energy). When a load hits, the servo takes this oil to slam the fuel rack open. The dashpot steps in at the very end to say 'slow down' so the rack doesn't overshoot.",
    "cat": "DPT",
    "id": "T09S_236"
  },
  {
    "q": "On a Time-Current curve for an ACB, what shape does the dashpot physically generate?",
    "a": "An asymptotic inverse curve, where high current yields near-zero time, and low current approaches infinity without tripping",
    "opts": ["A flat horizontal line representing a fixed 5-second delay", "An asymptotic inverse curve, where high current yields near-zero time, and low current approaches infinity without tripping", "A stepped square-wave curve", "A perfectly straight, linear line"],
    "exp": "The graph of an inverse-time relay curves sharply downward. At 105% load, it might take hours (infinity). At 200%, it takes 30s. At 1000% (short circuit), the magnetic pull overcomes everything, and it trips in 0.05s.",
    "cat": "DPT",
    "id": "T09S_237"
  },
  {
    "q": "Why is the use of modern electronic microprocessors replacing mechanical dashpots in newer switchboards?",
    "a": "Electronic relays offer perfect, drift-free precision, adjustable curve shapes, and are completely immune to the oil leaks and dirt clogs that plague mechanical dashpots",
    "opts": ["Electronic relays offer perfect, drift-free precision, adjustable curve shapes, and are completely immune to the oil leaks and dirt clogs that plague mechanical dashpots", "Electronic relays are totally immune to lightning strikes", "Mechanical dashpots are banned by MARPOL environmental rules", "Electronic relays can generate their own 440V power"],
    "exp": "While mechanical dashpots are robust and simple, they require maintenance and calibration. Modern solid-state or digital protection relays (like the Schneider SIPROTEC or ABB types) calculate the exact I\u00b2t thermal curve mathematically without moving parts.",
    "cat": "DPT",
    "id": "T09S_238"
  },
  {
    "q": "When adjusting the damping on a pneumatic timer relay, turning the adjustment screw clockwise typically has what effect?",
    "a": "It closes the needle valve, restricting airflow and INCREASING the time delay",
    "opts": ["It closes the needle valve, restricting airflow and INCREASING the time delay", "It physically shortens the stroke of the piston", "It increases the voltage to the relay coil", "It opens the valve, decreasing the time delay"],
    "exp": "Clockwise tightens a screw/valve. Tightening the needle valve makes the air hole smaller. Less air entering the bellows means it takes much longer to inflate, resulting in a longer time delay before the contacts switch.",
    "cat": "DPT",
    "id": "T09S_239"
  },
  {
    "q": "What is the primary visual difference between an 'On-Delay' timer and an 'Off-Delay' timer mechanism?",
    "a": "An On-Delay restricts fluid entering the chamber when energized, while an Off-Delay restricts fluid escaping the chamber when de-energized",
    "opts": ["An On-Delay restricts fluid entering the chamber when energized, while an Off-Delay restricts fluid escaping the chamber when de-energized", "An On-Delay uses oil, while an Off-Delay uses compressed air", "An On-Delay is painted green, an Off-Delay is painted red", "There is no physical difference; they are just wired backward"],
    "exp": "In an On-Delay timer, powering the coil pulls a spring that slowly fills the dashpot. In an Off-Delay timer, powering the coil instantly compresses the dashpot (via a check valve), and cutting power lets a spring slowly pull the dashpot open against the needle valve restriction.",
    "cat": "DPT",
    "id": "T09S_240"
  },
  {
    "q": "What happens if the internal return spring of a dashpot timer breaks?",
    "a": "The timer will operate once, but will never reset to its starting position, permanently holding the delayed contacts closed",
    "opts": ["The oil will spray out of the adjustment screw", "The timer will operate once, but will never reset to its starting position, permanently holding the delayed contacts closed", "The timer will trip instantly with zero delay", "The timer will violently oscillate open and closed"],
    "exp": "The electromagnet provides the force for the 'trip' stroke, but a strong mechanical spring is required to push the piston and oil back to the starting line. Without the spring, the piston stays stuck at the top of the cylinder.",
    "cat": "DPT",
    "id": "T09S_241"
  },
  {
    "q": "If a preferential trip dashpot is set to 15 seconds, and a massive short-circuit occurs, how long will it take to trip?",
    "a": "It will likely trip almost instantly; the massive magnetic force of a short circuit will easily rip the piston through the oil, overriding the 15-second overload setting",
    "opts": ["Exactly 7.5 seconds (half the set time)", "It will never trip, as short circuits are handled by fuses", "Exactly 15 seconds, as the timer is absolute", "It will likely trip almost instantly; the massive magnetic force of a short circuit will easily rip the piston through the oil, overriding the 15-second overload setting"],
    "exp": "Dashpots are inverse-time devices based on force. The 15-second setting applies to a typical, minor overload (e.g., 110%). If a 1000% short circuit hits, the magnetic coil pulls with immense, violent force, bypassing the resistance of the oil and tripping instantly.",
    "cat": "DPT",
    "id": "T09S_242"
  },
  {
    "q": "How does 'Viscous Damping' differ conceptually from 'Friction Damping'?",
    "a": "Viscous damping resistance increases with speed (fast movements are heavily resisted), whereas friction damping is relatively constant regardless of speed",
    "opts": ["Viscous damping resistance increases with speed (fast movements are heavily resisted), whereas friction damping is relatively constant regardless of speed", "Viscous damping uses dry metal plates; friction damping uses oil", "Viscous damping is only used in extremely cold climates", "They are exactly the same concept"],
    "exp": "This is why dashpots are brilliant. If the engine speed drifts slowly, the dashpot barely resists, allowing smooth correction. If the engine violently over-revs, the dashpot fluid resists heavily (like slapping water), preventing a destructive overshoot.",
    "cat": "DPT",
    "id": "T09S_243"
  },
  {
    "q": "What is the consequence of air bubbles entering the oil reservoir of a hydraulic governor dashpot?",
    "a": "Air is highly compressible; the dashpot loses its rigid resistance, causing a 'spongy' response and resulting in erratic engine hunting",
    "opts": ["Air causes the oil to freeze at low temperatures", "The air will short out the internal electrical contacts", "Air improves the damping effect by adding a pneumatic cushion", "Air is highly compressible; the dashpot loses its rigid resistance, causing a 'spongy' response and resulting in erratic engine hunting"],
    "exp": "Hydraulics rely on the fact that liquids cannot be compressed. If air gets into the dashpot oil, the piston just compresses the air bubble instead of forcing oil through the needle valve. The dampening effect vanishes, and the engine hunts.",
    "cat": "DPT",
    "id": "T09S_244"
  },
  {
    "q": "Why are dashpots mostly installed vertically rather than horizontally?",
    "a": "To ensure the fluid remains settled at the bottom around the piston and orifice, and to allow any trapped air bubbles to safely vent to the top",
    "opts": ["To prevent unauthorized crew members from adjusting the screw", "Because magnetic fields only work vertically", "To ensure the fluid remains settled at the bottom around the piston and orifice, and to allow any trapped air bubbles to safely vent to the top", "To save horizontal space in the switchboard"],
    "exp": "If an oil dashpot is laid on its side, the oil pools at the bottom, leaving the top of the piston exposed to air. The piston would move through air with no resistance, completely failing to provide a time delay.",
    "cat": "DPT",
    "id": "T09S_245"
  },
  {
    "q": "What is the typical maintenance frequency and action for the dashpots in the main switchboard Air Circuit Breakers (ACBs)?",
    "a": "Checked during the 5-yearly drydock survey; involves removing the cup, checking/topping up the specific silicone oil, cleaning the orifice, and verifying the trip times via secondary injection",
    "opts": ["Monthly; requires injecting high-pressure steam to clean the valves", "Never; they are sealed for the lifetime of the ship", "Daily; requires complete oil change and filter replacement", "Checked during the 5-yearly drydock survey; involves removing the cup, checking/topping up the specific silicone oil, cleaning the orifice, and verifying the trip times via secondary injection"],
    "exp": "ACB dashpots are highly reliable but can leak slowly over years. During major surveys, the ETO or shore technicians remove the dashpot cups, refill with the manufacturer-specified silicone oil, and use a test-rig to prove the 15-second delay is still accurate.",
    "cat": "DPT",
    "id": "T09S_246"
  },
  {
    "q": "Why do marine salinometers use an Alternating Current (AC) signal across their electrodes rather than Direct Current (DC)?",
    "a": "DC causes electrolysis, which covers the electrodes in insulating gas bubbles (polarization) and strips the metal, destroying the reading accuracy; AC prevents this",
    "opts": ["AC can travel much further distances through the engine room wiring", "AC is inherently safer if a crew member touches the water", "DC causes electrolysis, which covers the electrodes in insulating gas bubbles (polarization) and strips the metal, destroying the reading accuracy; AC prevents this", "DC voltage is too weak to penetrate distilled water"],
    "exp": "If you put DC into salt water, you create a battery. Oxygen bubbles form on the anode, Hydrogen on the cathode. These bubbles act as electrical insulators, causing the conductivity reading to falsely drop to zero. Using high-frequency AC (e.g., 1000Hz) shifts the polarity so fast that bubbles never form.",
    "cat": "SAL",
    "id": "T09S_247"
  },
  {
    "q": "What is the typical alarm threshold setpoint for a salinometer monitoring a marine Boiler Feedwater system?",
    "a": "Typically 2 to 10 ppm, depending on the boiler pressure rating",
    "opts": ["35,000 ppm", "Typically 2 to 10 ppm, depending on the boiler pressure rating", "500 to 1000 ppm", "100 to 200 ppm"],
    "exp": "Boilers require extremely pure water. Even a tiny amount of salt (NaCl) or minerals will bake onto the hot tubes, creating insulating scale that leads to overheating and tube explosions. 2 ppm is a common strict limit for high-pressure boilers.",
    "cat": "SAL",
    "id": "T09S_248"
  },
  {
    "q": "What is the typical alarm threshold setpoint for a salinometer monitoring the output of a Fresh Water Generator (FWG)?",
    "a": "Typically 5 ppm; exceeding this causes the divert valve to reject the water overboard",
    "opts": ["100 ppm; exceeding this sounds the general ship alarm", "Typically 5 ppm; exceeding this causes the divert valve to reject the water overboard", "1000 ppm; exceeding this dumps the fresh water tank", "50 ppm; exceeding this shuts down the main engine"],
    "exp": "The FWG makes drinking water and boiler make-up water. If the evaporator carries over salty seawater droplets, the salinometer hits 5 ppm and instantly triggers a 3-way solenoid valve to dump the bad water to the bilge/overboard, protecting the FW tank.",
    "cat": "SAL",
    "id": "T09S_249"
  },
  {
    "q": "What is the 'Fail-Safe' position of the 3-way divert valve on a Fresh Water Generator?",
    "a": "De-energized (power loss) = Dump Overboard/Bilge. Energized = Flow to Fresh Water Tank",
    "opts": ["De-energized = Valve freezes in its last position", "De-energized = Flow to Fresh Water Tank. Energized = Dump Overboard", "De-energized (power loss) = Dump Overboard/Bilge. Energized = Flow to Fresh Water Tank", "De-energized = Flow redirects back into the sea chest"],
    "exp": "If the salinometer loses power or the cable breaks, you do not want it defaulting to sending unknown water into the ship's drinking supply. The spring-loaded valve fails to the 'dump' position, ensuring absolute safety of the FW tank.",
    "cat": "SAL",
    "id": "T09S_250"
  },
  {
    "q": "Why do salinometer electrode probes often feature a platinum or gold coating?",
    "a": "These noble metals are highly resistant to oxidation and chemical corrosion, ensuring the surface resistance remains perfectly constant for accurate readings",
    "opts": ["To increase the commercial value of the instrument", "Because they are the only metals capable of conducting AC current", "These noble metals are highly resistant to oxidation and chemical corrosion, ensuring the surface resistance remains perfectly constant for accurate readings", "To act as a catalyst for breaking down oil molecules in the water"],
    "exp": "Standard copper or steel electrodes would tarnish or rust in hot water, adding an unpredictable layer of electrical resistance. Platinum maintains a flawless, zero-corrosion surface, ensuring that the only resistance measured is the water itself.",
    "cat": "SAL",
    "id": "T09S_251"
  },
  {
    "q": "What specific electronic component is embedded alongside the electrodes in a modern salinometer cell?",
    "a": "A thermistor or RTD (PT100) temperature sensor for automatic temperature compensation",
    "opts": ["A thermistor or RTD (PT100) temperature sensor for automatic temperature compensation", "A small heating element to boil the sample", "A magnetic stirrer to agitate the water", "A UV light to kill bacteria"],
    "exp": "Water conductivity changes massively with temperature (~2% increase per \u00b0C). If the water gets hotter, it looks 'saltier' to the electrodes. The embedded temp sensor allows the microprocessor to mathematically correct the reading back to a standard 25\u00b0C baseline.",
    "cat": "SAL",
    "id": "T09S_252"
  },
  {
    "q": "How does an ETO correctly clean the electrodes of a salinometer?",
    "a": "Gently wash with a soft brush and a mild acid (or specified solvent) to remove scale; NEVER use sandpaper, emery cloth, or abrasive files",
    "opts": ["Burn off the impurities using a blowtorch", "Gently wash with a soft brush and a mild acid (or specified solvent) to remove scale; NEVER use sandpaper, emery cloth, or abrasive files", "Boil the electrodes in pure caustic soda for 10 minutes", "Scrub vigorously with a wire brush and apply electrical contact grease"],
    "exp": "Abrasives will scratch the platinum/gold coating off the electrodes, permanently destroying their calibrated surface area and rendering the sensor useless. Gentle chemical cleaning removes calcium scale without damaging the noble metal.",
    "cat": "SAL",
    "id": "T09S_253"
  },
  {
    "q": "What is the typical consequence if air bubbles become trapped inside the salinometer measuring cell?",
    "a": "Air is a perfect insulator; bubbles displacing water between the electrodes will cause a falsely LOW conductivity (ppm) reading",
    "opts": ["Air is a perfect insulator; bubbles displacing water between the electrodes will cause a falsely LOW conductivity (ppm) reading", "Air is highly conductive; it will cause a falsely HIGH conductivity reading and trip the divert valve", "The bubbles will implode, shattering the glass housing of the sensor", "The salinometer will automatically switch to a voltage-measurement mode"],
    "exp": "Electrodes must be fully submerged in solid water. If a massive air pocket covers half the electrode, the electrical path is cut in half. The meter thinks the water is incredibly pure (low salt), which is a dangerous false-negative.",
    "cat": "SAL",
    "id": "T09S_254"
  },
  {
    "q": "How is a salinometer cell physically installed in the piping to prevent the trapped air bubble problem?",
    "a": "Installed vertically in a U-bend or an upward-flowing section of pipe so that air naturally flows past it and does not accumulate in the sensor housing",
    "opts": ["Installed completely horizontally at the lowest point in the bilge", "Installed vertically in a U-bend or an upward-flowing section of pipe so that air naturally flows past it and does not accumulate in the sensor housing", "Installed inside the boiler furnace to burn off any oxygen", "Installed directly on the suction side of a high-speed pump"],
    "exp": "Correct piping geometry ensures the sensor is always flooded with solid water. Putting it at the top of an inverted U-bend creates an air trap, ruining the readings. Pumping water UP through the sensor flushes out all air.",
    "cat": "SAL",
    "id": "T09S_255"
  },
  {
    "q": "What happens to the salinometer reading if a tiny film of lubricating oil coats the electrodes?",
    "a": "Oil is an insulator; the coating blocks the electrical current, causing a dangerously false LOW salinity reading",
    "opts": ["Oil acts as a semiconductor, causing wild fluctuations from 0 to 1000 ppm", "The oil magnifies the signal, causing a false HIGH reading", "Oil is an insulator; the coating blocks the electrical current, causing a dangerously false LOW salinity reading", "The salinometer detects the hydrocarbon and sounds a fire alarm"],
    "exp": "Just like air, oil does not conduct electricity. If oil coats the metal, the ions in the water cannot exchange electrons with the sensor. The meter assumes the water is pristine, potentially letting highly salty (but oily) water into the boiler.",
    "cat": "SAL",
    "id": "T09S_256"
  },
  {
    "q": "Why is a time delay (e.g., 5 seconds) often programmed into the salinometer divert valve logic?",
    "a": "To prevent the heavy solenoid valve from rapidly chattering (opening and closing violently) if the salinity is hovering exactly around the 5 ppm setpoint",
    "opts": ["To ensure the water is completely boiled before it is discharged", "To allow the freshwater pump to build up maximum pressure", "To give the crew time to taste the water before it is dumped", "To prevent the heavy solenoid valve from rapidly chattering (opening and closing violently) if the salinity is hovering exactly around the 5 ppm setpoint"],
    "exp": "If the water is at 5.01 ppm, the valve dumps. At 4.99 ppm, it accepts. A minor ripple in the water would make the valve slam back and forth every half-second, destroying the solenoid. A short time delay (or hysteresis band) stabilizes the operation.",
    "cat": "SAL",
    "id": "T09S_257"
  },
  {
    "q": "What is the procedure to 'Zero' calibrate a marine salinometer?",
    "a": "Remove the sensor, clean it, immerse it completely in a beaker of lab-grade pure distilled water, and adjust the zero potentiometer until the display reads exactly 0 ppm",
    "opts": ["Remove the sensor, clean it, immerse it completely in a beaker of lab-grade pure distilled water, and adjust the zero potentiometer until the display reads exactly 0 ppm", "Short the two electrodes with a screwdriver and adjust the dial", "Leave the sensor in the empty, dry pipe and press the zero button", "Immerse the sensor in fresh seawater and set it to 35,000 ppm"],
    "exp": "Zeroing in air is incorrect because it doesn't account for the baseline capacitance of the water. You must use pure, double-distilled water (0 \u00b5S/cm) to prove the meter reads zero when genuinely salt-free water is present.",
    "cat": "SAL",
    "id": "T09S_258"
  },
  {
    "q": "What is the procedure to 'Span' calibrate a marine salinometer?",
    "a": "Immerse the clean sensor in a certified standard NaCl calibration solution (e.g., 10 ppm) and adjust the span potentiometer until the display exactly matches the solution's certificate",
    "opts": ["Turn the span dial to the maximum physical limit of the screw", "Connect the sensor to a 220V wall outlet to test maximum voltage", "Fill the beaker with heavy fuel oil and set the span to 100%", "Immerse the clean sensor in a certified standard NaCl calibration solution (e.g., 10 ppm) and adjust the span potentiometer until the display exactly matches the solution's certificate"],
    "exp": "The Span (or Gain) sets the sensitivity slope. Using a known, laboratory-mixed salt solution guarantees the meter accurately translates the electrical conductivity into the correct parts-per-million value.",
    "cat": "SAL",
    "id": "T09S_259"
  },
  {
    "q": "If standard calibration solutions are unavailable, how can an ETO electronically verify the salinometer panel is functioning correctly?",
    "a": "By disconnecting the sensor wires and connecting a precision test resistor across the terminals; the manual provides a chart mapping specific resistance values to specific ppm displays",
    "opts": ["By connecting a 9V battery across the sensor input", "By disconnecting the sensor wires and connecting a precision test resistor across the terminals; the manual provides a chart mapping specific resistance values to specific ppm displays", "By licking two fingers and touching the terminals", "By bridging the terminals with a solid copper wire to read infinity"],
    "exp": "The panel is just an ohmmeter. The manufacturer supplies a test table (e.g., 10,000 ohms = 5 ppm). Clipping a 10k\u03a9 resistor across the inputs proves if the panel's internal electronics and alarms are working, isolating the fault to the sensor itself.",
    "cat": "SAL",
    "id": "T09S_260"
  },
  {
    "q": "What is the scientific unit of measurement for electrical conductivity, which the salinometer internally measures before converting to ppm?",
    "a": "Micro-Siemens per centimeter (\u00b5S/cm)",
    "opts": ["Ohms per meter (\u03a9/m)", "Volts per liter (V/L)", "Amperes per second (A/s)", "Micro-Siemens per centimeter (\u00b5S/cm)"],
    "exp": "Siemens (S) is the SI unit of electrical conductance (the inverse of Ohms). Because pure water is a poor conductor, it is measured in micro-Siemens. A rough conversion is 1 ppm \u2248 2 \u00b5S/cm.",
    "cat": "SAL",
    "id": "T09S_261"
  },
  {
    "q": "What is the approximate salinity of normal, raw seawater?",
    "a": "35,000 ppm (or 35 parts per thousand)",
    "opts": ["35,000 ppm (or 35 parts per thousand)", "1,000,000 ppm", "1,000 ppm", "5 ppm"],
    "exp": "To understand the context of the 5 ppm alarm limit, engineers must know that ocean water is extremely salty (~35,000 ppm). Even a microscopic pinhole leak in the FWG condenser will instantly contaminate the distilled water over the 5 ppm limit.",
    "cat": "SAL",
    "id": "T09S_262"
  },
  {
    "q": "Why is it important to ensure the water flow rate through the salinometer housing is relatively constant?",
    "a": "Extremely high velocities can cause turbulence and cavitation (bubbles), while stagnant water allows rust and dirt to settle on the electrodes, both causing inaccurate readings",
    "opts": ["Fast flow generates static electricity that blows the internal fuses", "Stagnant water reverses the polarity of the AC supply", "The friction of fast water heats up the electrodes past 100\u00b0C", "Extremely high velocities can cause turbulence and cavitation (bubbles), while stagnant water allows rust and dirt to settle on the electrodes, both causing inaccurate readings"],
    "exp": "Sensors perform best in a smooth, steady flow. Most installations have a small throttle valve to restrict the sample flow to a gentle trickle, ensuring solid water contact without violent agitation.",
    "cat": "SAL",
    "id": "T09S_263"
  },
  {
    "q": "What does a reading of '0L' or 'Open Loop' on a digital salinometer panel indicate?",
    "a": "A broken cable between the sensor and the panel, a completely dry pipe (no water), or severe coating/polarization on the electrodes",
    "opts": ["A broken cable between the sensor and the panel, a completely dry pipe (no water), or severe coating/polarization on the electrodes", "The sensor is operating perfectly (Optimal Level)", "The bypass divert valve is stuck open", "The water is dangerously salty (Over Load)"],
    "exp": "Open Loop means infinite resistance\u2014no current is flowing between the electrodes. This happens if the wire snaps, if the pipe empties out (air doesn't conduct), or if the electrodes are smothered in a thick insulating layer of oil or scale.",
    "cat": "SAL",
    "id": "T09S_264"
  },
  {
    "q": "If the Fresh Water Generator is producing highly salty water (e.g., 500 ppm), but the salinometer reads 0 ppm and allows it into the tank, what is the most likely electrical fault?",
    "a": "A short circuit in the sensor wiring, or heavy conductive metallic sludge bridging the two electrodes",
    "opts": ["The divert valve solenoid is burned out", "A short circuit in the sensor wiring, or heavy conductive metallic sludge bridging the two electrodes", "The temperature compensation thermistor is reading too cold", "The AC supply frequency is too high"],
    "exp": "Wait, let's correct that physics: high conductivity = high ppm. If it reads 0 ppm, conductivity is ZERO (infinite resistance). So the fault is a BROKEN wire (open circuit), not a short circuit. Let's provide the correct answer.",
    "cat": "SAL",
    "id": "T09S_265"
  },
  {
    "q": "CORRECTION: If the FWG is producing highly salty water, but the salinometer incorrectly reads 0 ppm, what is the most likely fault?",
    "a": "An OPEN circuit (broken wire), a dry sensor housing, or oil coating the electrodes, all of which block current flow, mimicking zero conductivity",
    "opts": ["The water temperature being over 100\u00b0C", "The divert valve failing in the dump position", "An OPEN circuit (broken wire), a dry sensor housing, or oil coating the electrodes, all of which block current flow, mimicking zero conductivity", "A dead short circuit in the wiring"],
    "exp": "Zero ppm means zero electrical current is flowing between the probes. Salty water SHOULD allow high current. The lack of current proves the circuit is physically broken, or insulated by air/oil.",
    "cat": "SAL",
    "id": "T09S_266"
  },
  {
    "q": "What happens if a dead SHORT CIRCUIT occurs across the salinometer electrodes (e.g., a piece of wire bridges the gap)?",
    "a": "The resistance drops to zero, the current maximizes, and the meter pins at maximum ppm (e.g., 9999 ppm), immediately triggering the dump valve",
    "opts": ["The meter reads exactly 0 ppm and accepts the water", "The meter shuts down completely to protect its screen", "The AC power supply reverses into DC", "The resistance drops to zero, the current maximizes, and the meter pins at maximum ppm (e.g., 9999 ppm), immediately triggering the dump valve"],
    "exp": "A short circuit offers zero resistance to the AC signal. The meter interprets this massive current flow as insanely salty water, throwing the reading off the scale and safely dumping the water overboard.",
    "cat": "SAL",
    "id": "T09S_267"
  },
  {
    "q": "Why is a salinometer sometimes used on the discharge of an Oily Water Separator (OWS), even though it cannot detect oil directly?",
    "a": "As an indirect safety check; since oil is an insulator, a sudden massive drop in conductivity might indicate a slug of pure oil is passing the sensor",
    "opts": ["As an indirect safety check; since oil is an insulator, a sudden massive drop in conductivity might indicate a slug of pure oil is passing the sensor", "It measures the temperature of the oil to ensure it doesn't freeze", "It replaces the 15 ppm Oil Content Monitor legally", "It reacts chemically with the oil to form a conductive salt"],
    "exp": "While the 15 ppm OCM uses light scatter to detect oil, a salinometer is sometimes added as a backup. If the water turns to pure oil, the conductivity hits zero. It's a crude but effective secondary warning of massive separator failure.",
    "cat": "SAL",
    "id": "T09S_268"
  },
  {
    "q": "What is the primary maintenance task for the 3-way divert solenoid valve on a FWG system?",
    "a": "Dismantling and cleaning the internal diaphragm, pilot port, and plunger to prevent scale build-up from causing the valve to stick",
    "opts": ["Greasing the external linkage with heavy molybdenum grease", "Dismantling and cleaning the internal diaphragm, pilot port, and plunger to prevent scale build-up from causing the valve to stick", "Painting the valve casing with anti-corrosive paint", "Rewinding the copper coil every 6 months"],
    "exp": "Solenoid valves rely on tiny pilot holes and tight clearances. Hot distilled water can still leave minor scale or carry debris. If the plunger sticks, the valve might fail to dump bad water, ruining the ship's entire drinking supply.",
    "cat": "SAL",
    "id": "T09S_269"
  },
  {
    "q": "How does the ETO prove the divert valve is physically dumping water overboard when the 5 ppm alarm is triggered?",
    "a": "By pressing the 'Test' or 'Simulate Alarm' button on the panel, then physically verifying that water flows out the dump line and stops flowing into the FW tank line",
    "opts": ["By pressing the 'Test' or 'Simulate Alarm' button on the panel, then physically verifying that water flows out the dump line and stops flowing into the FW tank line", "By checking the ship's draft marks to see if weight is lost", "By looking at the LED light on top of the solenoid coil", "By tasting the water in the FW tank the next day"],
    "exp": "An LED on the coil just means electricity arrived. The mechanical plunger inside could be jammed. The only way to prove safety is to simulate the alarm and visually/acoustically confirm the water physically changed directions.",
    "cat": "SAL",
    "id": "T09S_270"
  },
  {
    "q": "If the FWG salinometer constantly fluctuates wildly between 1 ppm and 10 ppm during steady operation, what is the most likely cause?",
    "a": "Turbulence or air/vapor bubbles passing through the sensor chamber, or a loose electrical connection vibrating on the sensor head",
    "opts": ["The AC frequency is set too high", "Turbulence or air/vapor bubbles passing through the sensor chamber, or a loose electrical connection vibrating on the sensor head", "The divert valve is opening too slowly", "A perfectly normal response to the Earth's magnetic field"],
    "exp": "Wild jumping usually indicates a physical disruption in the measuring path (bubbles changing the resistance instantly) or a loose wire that connects and disconnects with engine vibration.",
    "cat": "SAL",
    "id": "T09S_271"
  },
  {
    "q": "Why must the salinometer's 4-20mA signal cable be a 'Shielded' (Screened) type cable?",
    "a": "To protect the sensitive low-voltage micro-current signal from Electromagnetic Interference (EMI) generated by massive nearby power cables and VFDs",
    "opts": ["To allow the cable to carry high-voltage AC current safely", "To satisfy aesthetic Class society color-coding rules", "To prevent the cable from physically rusting in the humid engine room", "To protect the sensitive low-voltage micro-current signal from Electromagnetic Interference (EMI) generated by massive nearby power cables and VFDs"],
    "exp": "A 4-20mA signal is very weak. If routed next to a 440V motor cable, the magnetic field from the motor cable will induce a 'ghost' voltage in the sensor wire, completely ruining the accuracy of the ppm reading. The grounded shield blocks this interference.",
    "cat": "SAL",
    "id": "T09S_272"
  },
  {
    "q": "Where must the braided shield of the salinometer signal cable be grounded?",
    "a": "Grounded at ONE end only (usually inside the main control panel) to prevent 'Earth Loops' that would introduce noise into the signal",
    "opts": ["Grounded at ONE end only (usually inside the main control panel) to prevent 'Earth Loops' that would introduce noise into the signal", "It must never be grounded; it should be left floating", "Grounded directly to the negative terminal of the ship's battery", "Grounded at both the sensor end and the panel end"],
    "exp": "If you ground a shield at both ends, any slight voltage difference between the two hull ground points will cause a current to flow *through* the shield (an earth loop). This current induces the exact noise you are trying to prevent.",
    "cat": "SAL",
    "id": "T09S_273"
  },
  {
    "q": "During boiler operation, the ETO finds the salinometer reading is 0.5 ppm, but the chemical titration test done by the 2nd Engineer shows 15 ppm (dangerously high). Which is correct and what is the fault?",
    "a": "The chemical test is correct; the salinometer is likely giving a false low reading due to oil fouling, scaled electrodes, or a broken temperature compensation circuit",
    "opts": ["Neither is correct; boiler water cannot exceed 0.1 ppm physically", "Both are correct; they measure two completely different types of salt", "The salinometer is correct; chemical tests are notoriously inaccurate on ships", "The chemical test is correct; the salinometer is likely giving a false low reading due to oil fouling, scaled electrodes, or a broken temperature compensation circuit"],
    "exp": "Chemical titration is absolute physical proof of chloride ions. If the electronics disagree with the chemistry, trust the chemistry. The sensor must be removed, cleaned, and recalibrated immediately to restore automatic protection.",
    "cat": "SAL",
    "id": "T09S_274"
  },
  {
    "q": "What is the specific sequence of a Refrigeration 'Pump-Down' cycle when the cold room reaches its target temperature?",
    "a": "The thermostat opens \u2192 the Liquid Line Solenoid valve closes \u2192 the compressor keeps running, sucking the remaining gas out of the evaporator \u2192 suction pressure drops \u2192 the LP switch trips and stops the compressor",
    "opts": ["The thermostat opens \u2192 the Liquid Line Solenoid valve closes \u2192 the compressor keeps running, sucking the remaining gas out of the evaporator \u2192 suction pressure drops \u2192 the LP switch trips and stops the compressor", "The thermostat turns off the compressor directly \u2192 the solenoid valve closes slowly", "The TEV reverses flow, pushing gas back into the receiver", "The HP switch forces the compressor to push all gas into the condenser, then shuts down"],
    "exp": "A pump-down cycle prevents liquid refrigerant from sitting in the evaporator when off. Closing the liquid line solenoid first means the compressor 'vacuums' the evaporator dry. When it's empty, the pressure falls, and the Low Pressure (LP) cutout safely turns off the motor.",
    "cat": "REF",
    "id": "T09S_275"
  },
  {
    "q": "During a 'Pump-Down' start sequence, how does the compressor automatically turn back on?",
    "a": "The thermostat detects a warm room \u2192 opens the liquid solenoid \u2192 warm gas flows into the evaporator, raising suction pressure \u2192 the LP switch detects the rising pressure and automatically restarts the compressor",
    "opts": ["The thermostat sends a 440V signal directly to the compressor contactor", "The thermostat detects a warm room \u2192 opens the liquid solenoid \u2192 warm gas flows into the evaporator, raising suction pressure \u2192 the LP switch detects the rising pressure and automatically restarts the compressor", "The timer relay turns the compressor on every 15 minutes regardless of temperature", "The HP switch detects low pressure in the condenser and orders a restart"],
    "exp": "The thermostat never touches the motor wiring. It only controls the small solenoid valve. The entire massive compressor is controlled purely by the LP switch reacting to the pressure changes caused by that small valve opening and closing.",
    "cat": "REF",
    "id": "T09S_276"
  },
  {
    "q": "What is the function of the electrical 'Crankcase Heater' on a marine refrigeration compressor?",
    "a": "It keeps the lubricating oil warm while the compressor is OFF, preventing liquid refrigerant from migrating and dissolving into the cold oil, which would cause severe foaming and bearing failure on startup",
    "opts": ["It sterilizes the oil to prevent bacterial breakdown of the CFCs", "It keeps the lubricating oil warm while the compressor is OFF, preventing liquid refrigerant from migrating and dissolving into the cold oil, which would cause severe foaming and bearing failure on startup", "It warms the engine room to keep the crew comfortable", "It boils the refrigerant to increase the discharge pressure during winter"],
    "exp": "Refrigerant gas naturally migrates to the coldest part of the system. If the crankcase oil is cold, the gas turns to liquid and mixes with the oil. When the compressor starts, the sudden pressure drop causes the liquid to boil violently, foaming all the oil out of the crankcase and destroying the bearings.",
    "cat": "REF",
    "id": "T09S_277"
  },
  {
    "q": "How is the Crankcase Heater electrically interlocked with the compressor motor?",
    "a": "It is wired through a Normally Closed (NC) auxiliary contact on the compressor starter; it turns ON when the compressor stops, and turns OFF when the compressor is running",
    "opts": ["It is controlled purely by a manual switch located on the bridge", "It is wired through a Normally Open (NO) contact; it only runs when the compressor is running", "It is wired directly to the main busbar and runs 24/7 forever", "It is wired through a Normally Closed (NC) auxiliary contact on the compressor starter; it turns ON when the compressor stops, and turns OFF when the compressor is running"],
    "exp": "The friction of a running compressor generates plenty of heat, so the heater isn't needed (and would waste electricity). It is only required to protect the oil when the machine is idle and cooling down.",
    "cat": "REF",
    "id": "T09S_278"
  },
  {
    "q": "What is the primary electrical sequence during an automatic 'Defrost Cycle' for a meat room evaporator?",
    "a": "The compressor pumps down and stops \u2192 Evaporator fans STOP \u2192 Electric defrost heaters turn ON to melt the ice \u2192 Timer or temp switch ends the cycle \u2192 Heaters OFF \u2192 Compressor and fans restart",
    "opts": ["The compressor pumps down and stops \u2192 Evaporator fans STOP \u2192 Electric defrost heaters turn ON to melt the ice \u2192 Timer or temp switch ends the cycle \u2192 Heaters OFF \u2192 Compressor and fans restart", "The room door is automatically cracked open to let warm air in", "Compressor runs at 150% speed to generate hot gas \u2192 Evaporator fans run in reverse", "Solenoid valve opens fully to flood the evaporator with hot seawater"],
    "exp": "Fans MUST stop during defrost. If they keep running, they blow the heat from the electric coils directly into the meat, spoiling the food, instead of letting the heat stay trapped in the evaporator fins to melt the ice.",
    "cat": "REF",
    "id": "T09S_279"
  },
  {
    "q": "Why is it critical that the Evaporator Fans are electrically interlocked to remain OFF during the defrost heater cycle?",
    "a": "To trap the heat within the evaporator fins to melt the ice quickly, and to prevent blowing warm air throughout the cold room, which would spoil the cargo",
    "opts": ["Because the fans would draw too much current and trip the main breaker", "Because the fan motors are not rated for temperatures above 0\u00b0C", "To trap the heat within the evaporator fins to melt the ice quickly, and to prevent blowing warm air throughout the cold room, which would spoil the cargo", "To prevent the fan blades from striking the expanding ice blocks"],
    "exp": "A defrost cycle should only heat the ice on the pipes, not the room. Interlocking the fan contactor ensures the heat remains localized, minimizing the temperature rise in the provision stores.",
    "cat": "REF",
    "id": "T09S_280"
  },
  {
    "q": "What safety device is fitted to the electric defrost heaters to prevent them from causing a fire if the timer fails and leaves them on indefinitely?",
    "a": "A high-temperature limit switch (Klixon or thermostat) physically attached to the heater elements that forcefully cuts power if they exceed a safe temperature",
    "opts": ["A reverse-power relay on the main switchboard", "A float switch that detects the melted water dripping", "A high-temperature limit switch (Klixon or thermostat) physically attached to the heater elements that forcefully cuts power if they exceed a safe temperature", "A fusible link that melts and drops the entire evaporator to the floor"],
    "exp": "If the defrost timer sticks, the 5kW heating elements will keep burning until they ignite the surrounding insulation or cargo. A hardwired thermal cutout trips the heater contactor independently of the PLC/timer if the metal gets too hot.",
    "cat": "REF",
    "id": "T09S_281"
  },
  {
    "q": "What is 'Short Cycling' in a refrigeration compressor?",
    "a": "The compressor rapidly turns ON and OFF repeatedly in short intervals (e.g., every 30 seconds), causing massive electrical strain, overheating, and starter wear",
    "opts": ["The compressor runs backwards for a short period to clear blockages", "The compressor rapidly turns ON and OFF repeatedly in short intervals (e.g., every 30 seconds), causing massive electrical strain, overheating, and starter wear", "The refrigerant completely bypasses the evaporator, shorting the cycle", "The compressor runs on only two phases of electricity"],
    "exp": "Every motor start draws 6x full load current. If a faulty pressure switch or bad thermostat makes the compressor start, run for 10 seconds, stop, and start again endlessly, the motor will burn out and the contactor will weld shut within hours.",
    "cat": "REF",
    "id": "T09S_282"
  },
  {
    "q": "What specific electrical component is installed in the control panel to physically prevent destructive 'Short Cycling'?",
    "a": "An 'Anti-Recycle Timer' (or time-delay relay) that forces the compressor to remain OFF for a minimum safe period (e.g., 3 to 5 minutes) before allowing a restart",
    "opts": ["An 'Anti-Recycle Timer' (or time-delay relay) that forces the compressor to remain OFF for a minimum safe period (e.g., 3 to 5 minutes) before allowing a restart", "A massive capacitor bank to absorb the start currents", "A secondary standby compressor that alternates every 10 seconds", "A heavy-duty mechanical brake"],
    "exp": "Even if the thermostat screams 'Start NOW!', the anti-recycle timer blocks the signal until the 5-minute cooling period expires. This ensures the motor has time to dissipate starting heat and the refrigerant pressures have time to equalize.",
    "cat": "REF",
    "id": "T09S_283"
  },
  {
    "q": "How does a multi-cylinder refrigeration compressor use 'Unloader Valves' for capacity control?",
    "a": "Electric solenoids open bypass valves on specific cylinders, rendering them mechanically useless; this allows a 4-cylinder compressor to run efficiently at 25%, 50%, 75%, or 100% capacity to match the cooling load",
    "opts": ["They use a VFD to slow down individual cylinders", "The solenoids dump excess refrigerant overboard to reduce pressure", "They physically detach the pistons from the crankshaft", "Electric solenoids open bypass valves on specific cylinders, rendering them mechanically useless; this allows a 4-cylinder compressor to run efficiently at 25%, 50%, 75%, or 100% capacity to match the cooling load"],
    "exp": "If the cold room is already cold, you don't need full pumping power. Instead of stopping the motor (which causes wear), the controller energizes an unloader solenoid. This holds the suction valve open on a cylinder, so it just pushes gas back and forth doing no work, saving electricity.",
    "cat": "REF",
    "id": "T09S_284"
  },
  {
    "q": "Why is it critical that a large compressor ALWAYS starts in the fully 'Unloaded' condition (all unloader solenoids energized)?",
    "a": "To minimize the mechanical torque required to turn the crankshaft, allowing the motor to accelerate rapidly and keeping the high starting current (inrush) as brief as possible",
    "opts": ["To push out any trapped liquid refrigerant into the condenser", "To minimize the mechanical torque required to turn the crankshaft, allowing the motor to accelerate rapidly and keeping the high starting current (inrush) as brief as possible", "To ensure the star-delta timer completes its cycle", "To prevent the lubricating oil from foaming"],
    "exp": "Starting a compressor with all cylinders pumping gas requires massive torque (like trying to pedal a bicycle in high gear up a hill). Starting unloaded means the motor is just spinning free metal, so it reaches 60Hz quickly without tripping the main generator.",
    "cat": "REF",
    "id": "T09S_285"
  },
  {
    "q": "If liquid refrigerant accidentally enters the suction of a reciprocating compressor (Liquid Slugging), what electrical symptom will immediately manifest before the mechanical destruction occurs?",
    "a": "A massive, violent spike in motor current as the pistons try to compress an incompressible liquid, usually causing an instantaneous trip of the Thermal Overload Relay or Main Breaker",
    "opts": ["The frequency will drop to 50Hz", "The power factor will instantly shift to 1.0 (Unity)", "A massive, violent spike in motor current as the pistons try to compress an incompressible liquid, usually causing an instantaneous trip of the Thermal Overload Relay or Main Breaker", "The motor will spin significantly faster, dropping the current to near zero"],
    "exp": "Liquids cannot be compressed. When the piston hits a wall of liquid, it physically stops. The electric motor, locked into the spinning 60Hz magnetic field, tries to snap the crankshaft to force it through. This draws 'locked rotor' current, spiking the ammeter instantly.",
    "cat": "REF",
    "id": "T09S_286"
  },
  {
    "q": "What is the function of the Condenser Cooling Water Pressure Switch interlock?",
    "a": "It proves that cooling water is flowing through the condenser; if water fails, it prevents the compressor from starting or trips it to avoid a dangerous High Pressure (HP) spike",
    "opts": ["It injects water directly into the hot refrigerant gas", "It proves that cooling water is flowing through the condenser; if water fails, it prevents the compressor from starting or trips it to avoid a dangerous High Pressure (HP) spike", "It ensures the water is salty enough to absorb heat", "It adds chemicals to the water to prevent marine growth"],
    "exp": "If there is no cooling water, the hot gas cannot condense into liquid. Pressure will rocket past 20 bar in seconds. The water pressure switch physically breaks the compressor control circuit if the SW/FW cooling pump fails.",
    "cat": "REF",
    "id": "T09S_287"
  },
  {
    "q": "When replacing a burned-out Thermal Overload Relay (OLR) on a large refrigeration compressor, why must the ETO ensure they select the correct 'Trip Class' (e.g., Class 10 vs Class 20)?",
    "a": "A compressor is a heavy-starting load; it requires a slower 'Class 20' relay to allow the longer 15-20 second starting current surge without nuisance tripping, unlike a fast 'Class 10' pump relay",
    "opts": ["Because Class 10 is for 110V and Class 20 is for 220V", "A compressor is a heavy-starting load; it requires a slower 'Class 20' relay to allow the longer 15-20 second starting current surge without nuisance tripping, unlike a fast 'Class 10' pump relay", "Because Class 10 is for positive temperatures and Class 20 is for freezing temperatures", "Because Class 20 is completely fireproof"],
    "exp": "The 'Class' of an OLR dictates how long it waits before tripping at 600% current. Class 10 trips in 10 seconds (standard). Class 20 trips in 20 seconds (heavy duty). If you put a Class 10 relay on a massive compressor, it will trip every time you try to start it.",
    "cat": "REF",
    "id": "T09S_288"
  },
  {
    "q": "What is the primary visual difference on the electrical schematic between a safety control (like an HP switch) and an operational control (like a room thermostat)?",
    "a": "Safety controls are hardwired in series directly with the main contactor coil (breaking power unconditionally), while operational controls often pass through PLCs or timers first",
    "opts": ["Operational controls use triple-thick lines", "Safety controls are always connected to the negative DC wire", "Safety controls are drawn in red ink", "Safety controls are hardwired in series directly with the main contactor coil (breaking power unconditionally), while operational controls often pass through PLCs or timers first"],
    "exp": "You never trust a computer (PLC) with a critical safety shutdown. If the HP switch trips, it physically opens the circuit to the motor contactor coil, dropping the motor instantly, regardless of what the software is trying to do.",
    "cat": "REF",
    "id": "T09S_289"
  },
  {
    "q": "If the provision room temperature is perfectly normal (-18\u00b0C), but the compressor keeps running continuously without ever stopping, what electrical fault is likely?",
    "a": "The contacts inside the main motor contactor have welded shut, or the room thermostat contacts are stuck in the 'closed/calling for cool' position",
    "opts": ["The contacts inside the main motor contactor have welded shut, or the room thermostat contacts are stuck in the 'closed/calling for cool' position", "The Low Pressure (LP) switch is set too high", "The compressor has lost its entire oil charge", "The defrost heater is wired in reverse"],
    "exp": "If the brain (thermostat) says 'stop', but the motor keeps running, either the thermostat is broken and lying, or the heavy metal switch (contactor) that turns the motor on has melted together due to arcing and cannot physically open.",
    "cat": "REF",
    "id": "T09S_290"
  },
  {
    "q": "Why is the use of a standard Megger (500V DC) strictly forbidden on the stator windings of a Semi-Hermetic or Hermetic refrigeration compressor?",
    "a": "The windings are submerged in refrigerant gas and oil; under vacuum, the high voltage can easily arc across the terminals, destroying the motor and chemically breaking down the refrigerant into deadly acids",
    "opts": ["Because hermetic motors run on DC power only", "Because the aluminum casing blocks all electrical current", "Because the megger will permanently magnetize the compressor valves", "The windings are submerged in refrigerant gas and oil; under vacuum, the high voltage can easily arc across the terminals, destroying the motor and chemically breaking down the refrigerant into deadly acids"],
    "exp": "In sealed compressors, the motor is cooled by the suction gas. Under certain pressures, the dielectric strength of the gas drops massively (Paschen's Law). A 500V test can spark inside the sealed casing, causing an explosion or creating Phosgene/Hydrofluoric acid.",
    "cat": "REF",
    "id": "T09S_291"
  },
  {
    "q": "What is the function of the 'Hot Gas Bypass' solenoid valve in some refrigeration capacity control systems?",
    "a": "It routes hot, high-pressure discharge gas directly back into the low-pressure suction line to artificially keep the suction pressure up during low-load conditions, preventing the compressor from tripping on the LP switch",
    "opts": ["It injects hot gas into the lubricating oil to clean it", "It vents excess hot gas up the funnel to prevent explosions", "It routes hot, high-pressure discharge gas directly back into the low-pressure suction line to artificially keep the suction pressure up during low-load conditions, preventing the compressor from tripping on the LP switch", "It bypasses the compressor entirely to cool the room using only seawater"],
    "exp": "If a room is mostly cool, the evaporator boils very little gas. Suction pressure drops dangerously low. The bypass valve tricks the compressor by feeding its own hot exhaust gas back into its mouth, keeping it running smoothly without freezing the evaporator.",
    "cat": "REF",
    "id": "T09S_292"
  },
  {
    "q": "If the Oil Differential Pressure cutout trips exactly 60 seconds after the compressor starts, every single time, what is the most logical diagnostic conclusion?",
    "a": "The electrical time-delay circuit is working perfectly, but the mechanical oil pump is genuinely failing to build pressure, or the crankcase oil level is completely empty",
    "opts": ["The High Pressure switch is malfunctioning", "The electrical timer is broken and needs replacing", "The electrical time-delay circuit is working perfectly, but the mechanical oil pump is genuinely failing to build pressure, or the crankcase oil level is completely empty", "The main power supply is dropping below 440V"],
    "exp": "The 60-second delay is designed to let pressure build. If it trips right at the 60-second mark, the timer did its job, looked at the pressure switch, saw ZERO oil pressure, and executed a perfect safety shutdown. The fault is mechanical lack of oil.",
    "cat": "REF",
    "id": "T09S_293"
  },
  {
    "q": "On a massive VFD-driven Bow Thruster, what is the purpose of the 'Pre-Charge' (or soft-charge) circuit consisting of resistors and a bypass contactor?",
    "a": "To slowly charge the massive DC-link capacitors; without it, throwing the main breaker would cause a colossal inrush current that would instantly explode the rectifier diodes",
    "opts": ["To spin the propeller slowly to clear seaweed before full power is applied", "To warm up the motor windings before applying full voltage", "To trickle-charge the ship's 24V emergency batteries", "To slowly charge the massive DC-link capacitors; without it, throwing the main breaker would cause a colossal inrush current that would instantly explode the rectifier diodes"],
    "exp": "Empty capacitors act as a dead short circuit. When you turn on a 2000kW VFD, connecting 440V directly to empty capacitors would draw tens of thousands of amps for a split second, destroying the silicon. The pre-charge resistors limit this current until the caps are full, then the bypass contactor clicks closed.",
    "cat": "BWT",
    "id": "T09S_294"
  },
  {
    "q": "What is the typical DC-Link voltage generated inside a 440V AC Variable Frequency Drive powering a bow thruster?",
    "a": "Approximately 600V DC (calculated as AC RMS Voltage \u00d7 1.35 or \u221a2)",
    "opts": ["220V DC", "Exactly 440V DC", "Approximately 600V DC (calculated as AC RMS Voltage \u00d7 1.35 or \u221a2)", "Over 1000V DC"],
    "exp": "The rectifier bridge converts 440V AC into DC. The peak of the AC wave (440 * 1.414) smoothed by the capacitors results in a highly lethal DC bus voltage of roughly 600 to 620 Volts DC. This is why waiting 10+ minutes after shutdown is mandatory before opening a VFD cabinet.",
    "cat": "BWT",
    "id": "T09S_295"
  },
  {
    "q": "Why is the cooling fan on a large VFD-driven bow thruster motor usually powered by a completely separate 440V supply rather than the main VFD output?",
    "a": "Because the main VFD varies the frequency/speed; if the main motor runs slowly, an attached fan would spin slowly and fail to cool the motor. A separate supply ensures 100% cooling air at all speeds",
    "opts": ["Because the main VFD outputs DC, and the fan requires AC", "To satisfy SOLAS redundancy requirements for steering equipment", "Because the main VFD varies the frequency/speed; if the main motor runs slowly, an attached fan would spin slowly and fail to cool the motor. A separate supply ensures 100% cooling air at all speeds", "To prevent harmonic distortion from the fan motor entering the VFD"],
    "exp": "VFD motors can operate at 10% speed but still draw massive torque current (generating massive heat). A shaft-mounted fan would barely turn at 10% speed. An independent 'forced cooling' fan runs at 60Hz constantly, blasting air through the hot motor regardless of what the VFD is doing.",
    "cat": "BWT",
    "id": "T09S_296"
  },
  {
    "q": "What is the specific electrical interlock linking the independent cooling fan to the main bow thruster VFD start sequence?",
    "a": "The main VFD is blocked from starting until a contactor or airflow switch proves that the independent cooling fan is running at full speed",
    "opts": ["The main VFD is blocked from starting until a contactor or airflow switch proves that the independent cooling fan is running at full speed", "The cooling fan is only allowed to start if the ambient temperature exceeds 40\u00b0C", "The VFD must reach 100% output before the cooling fan is allowed to start", "The cooling fan must run in reverse for 10 seconds before the VFD starts"],
    "exp": "If the independent cooling fan breaker trips, the main 2000kW motor will cook itself within minutes. The start sequence requires the fan to run and prove air flow FIRST, before the PLC allows the main drive to energize.",
    "cat": "BWT",
    "id": "T09S_297"
  },
  {
    "q": "Why are massive 'Harmonic Filters' installed alongside VFD-driven bow thrusters in the switchboard room?",
    "a": "VFDs chop the AC wave into sharp DC pulses, injecting severe 5th and 7th harmonic distortions back into the ship's grid, which can overheat generators and destroy sensitive electronics",
    "opts": ["VFDs chop the AC wave into sharp DC pulses, injecting severe 5th and 7th harmonic distortions back into the ship's grid, which can overheat generators and destroy sensitive electronics", "To smooth the physical water flow through the tunnel", "To absorb lightning strikes hitting the ship's mast", "To filter out mechanical noise from the propeller cavitating"],
    "exp": "A 2000kW VFD draws power in massive, ugly spikes, not smooth sine waves. This corrupts the entire 440V busbar (Total Harmonic Distortion - THD). Heavy L-C (inductor-capacitor) filters are installed to trap these rogue frequencies and clean the power supply.",
    "cat": "BWT",
    "id": "T09S_298"
  },
  {
    "q": "What is the function of the Anti-Condensation Space Heater fitted inside the bow thruster motor casing?",
    "a": "It turns on automatically when the motor stops to keep the stator windings slightly warmer than the ambient tunnel air, preventing humid sea air from condensing into water on the high-voltage copper",
    "opts": ["It warms the lubricating oil in the lower gearbox", "It prevents the carbon earthing brushes from freezing to the slip ring", "It turns on automatically when the motor stops to keep the stator windings slightly warmer than the ambient tunnel air, preventing humid sea air from condensing into water on the high-voltage copper", "It melts ice off the propeller blades before starting in Arctic waters"],
    "exp": "The bow thruster sits in the coldest, dampest part of the ship (below the waterline at the bow). When stopped, cold iron attracts condensation, dropping the Insulation Resistance to zero. The 220V space heater prevents this. It is interlocked to turn OFF when the motor runs.",
    "cat": "BWT",
    "id": "T09S_299"
  },
  {
    "q": "How does the 'Command Take-Over' logic work between the Bridge Centre Console, Port Wing, and Starboard Wing thruster controls?",
    "a": "Only one station can be active at a time; taking control requires acknowledging a 'Take-Over' button, which locks out the other stations to prevent conflicting commands",
    "opts": ["The Master's cabin has ultimate override authority via a joystick", "Only one station can be active at a time; taking control requires acknowledging a 'Take-Over' button, which locks out the other stations to prevent conflicting commands", "All stations are active simultaneously; the thruster averages out the commands", "Control automatically shifts to whichever joystick is pushed the hardest"],
    "exp": "If the pilot on the port wing commands 'Full Port', and the captain on the center console panics and pushes 'Full Starboard', the ship would lose control. The electronic interlocking ensures only the illuminated, active station has control of the PLC.",
    "cat": "BWT",
    "id": "T09S_300"
  },
  {
    "q": "On a Controllable Pitch (CPP) Bow Thruster, how is the actual pitch angle of the massive underwater blades transmitted back to the bridge indicator?",
    "a": "Via an LVDT (Linear Variable Differential Transformer) or rotary potentiometer mechanically linked to the hydraulic servo pitch-actuator rod",
    "opts": ["By calculating the difference in water pressure on either side of the tunnel", "Via an underwater optical camera pointing at the blades", "Via an LVDT (Linear Variable Differential Transformer) or rotary potentiometer mechanically linked to the hydraulic servo pitch-actuator rod", "By measuring the RPM of the main electric motor"],
    "exp": "As the hydraulics push the massive rod to twist the blades, that rod also moves a small electronic sensor (LVDT or pot). This changes the 4-20mA signal sent up to the bridge, confirming that the blades actually moved as commanded.",
    "cat": "BWT",
    "id": "T09S_301"
  },
  {
    "q": "What happens if there is a severe mismatch between the Bridge Pitch Command signal and the actual Pitch Feedback signal from the thruster?",
    "a": "The system triggers a 'Pitch Tracking / Command Mismatch' alarm, warning the bridge that the thruster is failing to execute the ordered maneuver, often due to a hydraulic failure",
    "opts": ["The motor automatically increases speed to force the blades into position", "The main switchboard trips the generator to prevent an explosion", "The system triggers a 'Pitch Tracking / Command Mismatch' alarm, warning the bridge that the thruster is failing to execute the ordered maneuver, often due to a hydraulic failure", "The thruster automatically reverts to zero pitch and shuts down"],
    "exp": "If the captain orders 100% Port, but the feedback shows the blades are stuck at 0%, the ship is in danger. The PLC constantly compares the Order vs Feedback. If they deviate for more than a few seconds, it sounds an urgent alarm so the bridge knows they have lost thrust.",
    "cat": "BWT",
    "id": "T09S_302"
  },
  {
    "q": "What is the primary operational objective of a marine Viscotherm system?",
    "a": "To dynamically heat Heavy Fuel Oil (HFO) to achieve and maintain a specific injection viscosity (usually 10-14 cSt) for optimal atomization",
    "opts": ["To cool the fuel before it enters the injectors", "To measure the sulfur content of the fuel for MARPOL compliance", "To dynamically heat Heavy Fuel Oil (HFO) to achieve and maintain a specific injection viscosity (usually 10-14 cSt) for optimal atomization", "To remove water and sludge from the fuel via centrifugal force"],
    "exp": "Fuel must be atomized into a microscopic mist to burn completely. Viscosity (thickness) dictates atomization. The Viscotherm adjusts steam heating to keep the fuel at the perfect 10-14 cSt thickness regardless of the bunker grade.",
    "cat": "VIS",
    "id": "T09S_303"
  },
  {
    "q": "Why is a Viscosity Controller vastly superior to a standard Temperature Controller for HFO?",
    "a": "Because different HFO grades require completely different temperatures to reach 14 cSt; a viscosity controller adapts automatically to any fuel grade",
    "opts": ["Because different HFO grades require completely different temperatures to reach 14 cSt; a viscosity controller adapts automatically to any fuel grade", "Because temperature controllers are not intrinsically safe", "Because a viscosity controller also measures the fuel's flash point", "Because temperature controllers cannot operate pneumatic steam valves"],
    "exp": "If you bunker 380 cSt fuel, it might need 135\u00b0C to inject. If you bunker 180 cSt fuel, it might only need 110\u00b0C. A temperature controller would require manual recalibration every time you bunker. A viscotherm simply targets 14 cSt and figures the temperature out itself.",
    "cat": "VIS",
    "id": "T09S_304"
  },
  {
    "q": "What happens inside the engine if the Viscotherm fails and the HFO viscosity is too HIGH (e.g., 25 cSt)?",
    "a": "The fuel droplets are too large, leading to poor atomization, delayed burning (afterburning), high exhaust temperatures, and heavy black smoke",
    "opts": ["The engine will run efficiently but consume more cooling water", "The fuel droplets are too large, leading to poor atomization, delayed burning (afterburning), high exhaust temperatures, and heavy black smoke", "The engine will overspeed uncontrollably", "The fuel pump plungers will seize due to lack of lubrication"],
    "exp": "Thick fuel doesn't spray; it squirts in large globs. These globs take too long to burn, meaning fire is still burning when the exhaust valve opens. This destroys exhaust valves and creates thick black soot.",
    "cat": "VIS",
    "id": "T09S_305"
  },
  {
    "q": "What is the critical mechanical danger if the Viscotherm overheats the fuel, resulting in a viscosity that is too LOW (e.g., 5 cSt)?",
    "a": "The fuel becomes too thin to lubricate the high-pressure fuel injection pumps, leading to rapid plunger scuffing, seizure, and total engine failure",
    "opts": ["The fuel will freeze inside the capillary tube", "The fuel will extinguish the combustion flame", "The steam valve will permanently weld open", "The fuel becomes too thin to lubricate the high-pressure fuel injection pumps, leading to rapid plunger scuffing, seizure, and total engine failure"],
    "exp": "Fuel pumps operate at 600+ bar and rely entirely on the fuel itself to lubricate the microscopic gap between the plunger and barrel. If the fuel is too hot and thin, metal grinds on metal.",
    "cat": "VIS",
    "id": "T09S_306"
  },
  {
    "q": "How does a 'Capillary' type Viscotherm measure viscosity?",
    "a": "A constant-flow gear pump pushes fuel through a narrow tube; the differential pressure across this tube is directly proportional to the fluid's viscosity",
    "opts": ["It drops a steel ball through a cylinder of fuel and measures the time it takes to fall", "It measures the torque required to spin a flat disc in the fuel", "It measures the electrical resistance of the fuel across two platinum plates", "A constant-flow gear pump pushes fuel through a narrow tube; the differential pressure across this tube is directly proportional to the fluid's viscosity"],
    "exp": "By strictly controlling the flow rate (Q), the pressure drop (\u0394P) across the capillary restriction is governed entirely by the fuel's thickness (viscosity). The DP transmitter converts this pressure drop into a 4-20mA signal.",
    "cat": "VIS",
    "id": "T09S_307"
  },
  {
    "q": "How does a 'Rotational' type Viscotherm measure viscosity?",
    "a": "A constant-speed synchronous motor spins a spindle in the fuel; the electrical torque (current) required to maintain that speed represents the fluid's drag/viscosity",
    "opts": ["A constant-speed synchronous motor spins a spindle in the fuel; the electrical torque (current) required to maintain that speed represents the fluid's drag/viscosity", "It uses ultrasonic waves to detect the density of the rotating fuel", "It measures the pressure drop across a rotating gear pump", "It measures the heat generated by friction as a disc spins in the fuel"],
    "exp": "Thick fuel creates more mechanical drag on the spinning spindle. The synchronous motor must draw more electrical current to maintain its fixed RPM against this drag. This current variation is converted to the viscosity readout.",
    "cat": "VIS",
    "id": "T09S_308"
  },
  {
    "q": "What is the standard fail-safe design for the pneumatic steam control valve on a Viscotherm heater?",
    "a": "Fail-Close (Air-to-Open); if instrument air or power is lost, a spring forces the valve shut to prevent boiling the fuel",
    "opts": ["Fail-Last; it locks in its current position to maintain stability", "Fail-Close (Air-to-Open); if instrument air or power is lost, a spring forces the valve shut to prevent boiling the fuel", "Fail-Open (Air-to-Close); to ensure the engine always has hot fuel", "Fail-Bypass; it dumps the steam overboard"],
    "exp": "Safety dictates that stopping the heat is better than uncontrollable heating. Boiling fuel in closed pipes causes explosive vapor locks and catastrophic pump failures.",
    "cat": "VIS",
    "id": "T09S_309"
  },
  {
    "q": "Why is 'Derivative' (D) action excluded from the Viscotherm PID controller (using only PI control)?",
    "a": "Derivative action reacts to the rate of change; mechanical pressure ripples from the fuel pumps would cause the controller to hunt and the steam valve to oscillate wildly",
    "opts": ["Derivative action violates intrinsically safe zone rules", "Derivative action causes the integral windup to stall the processor", "Derivative action is only used for pressure control, not temperature", "Derivative action reacts to the rate of change; mechanical pressure ripples from the fuel pumps would cause the controller to hunt and the steam valve to oscillate wildly"],
    "exp": "Fuel pipes have constant 'noise' (pulsations) from the booster pumps. The 'D' parameter reacts aggressively to fast changes. Using 'D' on a noisy fluid line makes the steam valve chatter continuously.",
    "cat": "VIS",
    "id": "T09S_310"
  },
  {
    "q": "What is the function of the 'Integral' (I) parameter in the Viscotherm controller?",
    "a": "It continuously sums up the steady-state error (Offset) over time, slowly nudging the steam valve until the actual viscosity exactly matches the setpoint",
    "opts": ["It continuously sums up the steady-state error (Offset) over time, slowly nudging the steam valve until the actual viscosity exactly matches the setpoint", "It predicts sudden drops in engine load", "It limits the maximum speed the steam valve can open", "It provides the initial aggressive reaction to a temperature drop"],
    "exp": "Proportional (P) control alone always leaves a small gap (offset) between the setpoint and actual value. The Integral (I) action slowly winds up, eliminating this gap to achieve perfect 14 cSt control.",
    "cat": "VIS",
    "id": "T09S_311"
  },
  {
    "q": "During engine startup on cold HFO, why must the engineer 'warm up' the steam heaters gradually using the manual bypass rather than slamming the controller to AUTO?",
    "a": "To prevent Thermal Cracking of the fuel, which bakes heavy carbon onto the heater tubes, severely degrading their heat transfer efficiency",
    "opts": ["To prevent Thermal Cracking of the fuel, which bakes heavy carbon onto the heater tubes, severely degrading their heat transfer efficiency", "To prevent the steam pipes from freezing", "To prevent the Viscotherm motor from spinning backward", "To prevent the fuel flash point from dropping below 60\u00b0C"],
    "exp": "Hitting cold HFO with 100% 7-bar steam bakes the fuel onto the tubes (coking). A layer of carbon acts as an insulator, meaning the heater will struggle to reach temperature later.",
    "cat": "VIS",
    "id": "T09S_312"
  },
  {
    "q": "What is 'Trace Heating' and why is it vital for the viscotherm and HFO piping system?",
    "a": "Steam or electric heating lines wrapped around the fuel pipes under the insulation to keep the HFO liquid when the engine is stopped",
    "opts": ["A method of pre-heating the combustion air", "Steam or electric heating lines wrapped around the fuel pipes under the insulation to keep the HFO liquid when the engine is stopped", "A diagnostic system that traces electrical shorts in the sensor wiring", "The radiant heat given off by the main engine block"],
    "exp": "When flow stops, HFO cools and solidifies into asphalt. Trace heating keeps the pipes warm so the fuel remains fluid, allowing the pumps and viscotherm to restart easily.",
    "cat": "VIS",
    "id": "T09S_313"
  },
  {
    "q": "During a changeover from HFO to Marine Gas Oil (MGO) before entering a SECA zone, what must the engineer do with the Viscotherm?",
    "a": "Switch it to manual, completely close the steam valve, and allow the fuel system to cool down slowly before introducing the thin MGO",
    "opts": ["Leave it in AUTO; it will automatically cool the MGO", "Switch it to manual, completely close the steam valve, and allow the fuel system to cool down slowly before introducing the thin MGO", "Increase the setpoint to 20 cSt to accommodate the MGO", "Bypass the fuel filters entirely"],
    "exp": "MGO is already extremely thin at room temperature. If MGO hits a hot heater, it vaporizes or becomes so thin it destroys the fuel pumps. The system must be manually cooled down prior to MGO arriving.",
    "cat": "VIS",
    "id": "T09S_314"
  },
  {
    "q": "What does a 'Temperature-Viscosity Nomogram' provide to the ship's engineers?",
    "a": "A graphical chart used to determine the exact manual temperature target required to achieve 14 cSt for a specific bunker fuel grade",
    "opts": ["A log of the daily fuel consumption", "A map of the electrical wiring for the 4-20mA loop", "A graphical chart used to determine the exact manual temperature target required to achieve 14 cSt for a specific bunker fuel grade", "The theoretical maximum pressure of the fuel booster pumps"],
    "exp": "If the Viscotherm fails, the engineer switches to Manual. They look at the bunker delivery note (e.g., 380 cSt @ 50\u00b0C), draw a line on the Nomogram, and see that they must manually maintain 135\u00b0C to hit 14 cSt.",
    "cat": "VIS",
    "id": "T09S_315"
  },
  {
    "q": "Why is the Viscotherm sensor installed on the main engine fuel supply line AFTER the mixing column and heaters?",
    "a": "To measure the exact final viscosity of the blended, heated fuel right before it enters the high-pressure injection pumps",
    "opts": ["To ensure the fuel is fully atomized before measurement", "Because the mixing column chemically removes sulfur", "To measure the exact final viscosity of the blended, heated fuel right before it enters the high-pressure injection pumps", "To protect the sensor from the cold temperatures of the service tank"],
    "exp": "The mixing column blends hot return fuel with cold fresh fuel. The sensor must be placed after this blending and heating process to accurately represent what the engine is actually eating.",
    "cat": "VIS",
    "id": "T09S_316"
  },
  {
    "q": "What is the typical output signal range of the differential pressure transmitter used in a capillary Viscotherm?",
    "a": "4 to 20 mA",
    "opts": ["0 to 10 V", "4 to 20 mA", "1 to 5 V", "0 to 20 mA"],
    "exp": "Marine sensors standardly use 4-20mA. This 'live zero' allows the PLC to instantly detect a broken wire (0mA) versus a genuine low reading (4mA).",
    "cat": "VIS",
    "id": "T09S_317"
  },
  {
    "q": "If the 4-20mA signal wire from the Viscotherm breaks, what happens to the controller output?",
    "a": "The PLC detects 0mA, triggers a 'Sensor Fault' alarm, and usually defaults the steam valve to the fail-safe closed position",
    "opts": ["The PLC automatically switches to the backup 0-10V system", "The steam valve locks in its last known position indefinitely", "The PLC assumes the fuel is extremely thick and opens the steam valve 100%", "The PLC detects 0mA, triggers a 'Sensor Fault' alarm, and usually defaults the steam valve to the fail-safe closed position"],
    "exp": "A broken wire means 0mA. The controller recognizes this as an impossible value (since the range is 4-20mA), flags a sensor failure, and closes the steam valve to prevent accidental fuel boiling.",
    "cat": "VIS",
    "id": "T09S_318"
  },
  {
    "q": "What maintenance issue causes a Viscotherm controller to constantly hunt (oscillate temperature wildly) even if the PI settings are correct?",
    "a": "A sluggish, sticking pneumatic steam control valve or a malfunctioning steam trap waterlogging the heater",
    "opts": ["The engine running at a perfectly constant load", "A broken capillary tube", "A sluggish, sticking pneumatic steam control valve or a malfunctioning steam trap waterlogging the heater", "Using a 4-20mA signal cable with too much shielding"],
    "exp": "If the PLC sends a 50% signal but the steam valve is sticky, it won't move. The PLC pushes it to 70%, the valve suddenly breaks free and jerks open, flooding the heater. This mechanical stickiness ruins the electronic control loop.",
    "cat": "VIS",
    "id": "T09S_319"
  },
  {
    "q": "What is the consequence of 'Transport Delay' if the Viscotherm sensor is installed too far downstream from the steam heater?",
    "a": "The controller reacts to old data; it changes the steam valve but doesn't see the result for several seconds, leading to massive over-correction and hunting",
    "opts": ["The sensor wires suffer from extreme voltage drop", "The fuel pressure drops below the required injection pressure", "The fuel cools down completely before reaching the engine", "The controller reacts to old data; it changes the steam valve but doesn't see the result for several seconds, leading to massive over-correction and hunting"],
    "exp": "If there is 20 meters of pipe between the heater and the sensor, it takes time for the newly heated fuel to reach the sensor. The controller gets impatient, adds more heat, and overshoots the target. Sensors must be near the heater.",
    "cat": "VIS",
    "id": "T09S_320"
  },
  {
    "q": "In a rotational Viscotherm, what protects the small synchronous electric motor if the spindle jams in cold fuel?",
    "a": "A dedicated thermal overload relay or an internal thermistor that trips the motor supply",
    "opts": ["An automated steam purge valve", "The main generator's reverse power relay", "A dedicated thermal overload relay or an internal thermistor that trips the motor supply", "A heavy-duty mechanical slip clutch"],
    "exp": "If the HFO is cold, it is solid. The tiny motor cannot spin the spindle. The locked-rotor current will heat up the motor windings, so a thermal overload relay trips to save the motor.",
    "cat": "VIS",
    "id": "T09S_321"
  },
  {
    "q": "Why is 'Flash Point' a critical safety consideration when adjusting Viscotherm temperatures?",
    "a": "Heating fuel above its flash point inside an unpressurized tank or leaking pipe creates a massive risk of vapor explosion",
    "opts": ["Heating fuel above its flash point turns it into a solid", "Heating fuel above its flash point inside an unpressurized tank or leaking pipe creates a massive risk of vapor explosion", "It determines the sulfur emissions of the fuel", "Flash point is the temperature at which the fuel stops lubricating"],
    "exp": "Flash point is the temperature where the fuel gives off explosive vapor. While pressurized fuel in the heater can be 135\u00b0C (safe because there's no air/oxygen), fuel in vented service tanks must be kept strictly below its flash point (e.g., <60\u00b0C).",
    "cat": "VIS",
    "id": "T09S_322"
  },
  {
    "q": "How does the Viscotherm controller handle extreme changes in Main Engine load (e.g., Full Ahead to Stop)?",
    "a": "The fuel flow drops drastically, so the PI controller rapidly throttles back the steam valve to prevent a massive temperature overshoot in the stagnant fuel",
    "opts": ["It automatically dumps the hot fuel back to the settling tank", "It injects cold seawater into the mixing column", "The fuel flow drops drastically, so the PI controller rapidly throttles back the steam valve to prevent a massive temperature overshoot in the stagnant fuel", "It completely closes the steam valve and waits for a manual reset"],
    "exp": "When the engine stops, fuel consumption drops to zero, and the fuel just circulates in the bypass loop. Less new cold fuel is entering, so the heat demand drops. The controller must quickly close the steam valve to avoid boiling the fuel.",
    "cat": "VIS",
    "id": "T09S_323"
  },
  {
    "q": "What is the typical injection viscosity requirement for a smaller Marine Auxiliary Engine (Generator)?",
    "a": "14 to 20 cSt",
    "opts": ["2 to 5 cSt", "10 to 14 cSt", "50 to 80 cSt", "14 to 20 cSt"],
    "exp": "While massive main engines use 10-14 cSt, auxiliary engines typically operate slightly thicker, requiring 14-20 cSt for optimal injection in their smaller cylinders.",
    "cat": "VIS",
    "id": "T09S_324"
  },
  {
    "q": "If the Viscotherm sensor needs to be cleaned without shutting down the main engine, what is the procedure?",
    "a": "Switch the controller to Manual, open the sensor bypass valve, close the sensor isolation valves, drain the block, and remove the sensor",
    "opts": ["Stop the booster pumps momentarily while swapping the sensor", "Switch the controller to Manual, open the sensor bypass valve, close the sensor isolation valves, drain the block, and remove the sensor", "Electrically short the 4-20mA loop to freeze the steam valve, then remove the sensor", "Switch the controller to MGO mode, which automatically isolates the sensor"],
    "exp": "The bypass loop allows continuous fuel flow to the engine. The engineer manually controls the heat, isolates the sensor mechanically, and safely extracts it for cleaning.",
    "cat": "VIS",
    "id": "T09S_325"
  },
  {
    "q": "What specific component in a Capillary Viscotherm ensures the differential pressure is strictly dependent ONLY on viscosity?",
    "a": "A high-precision, constant-speed gear pump that forces an exactly constant flow rate of fuel through the capillary tube",
    "opts": ["A mechanical pressure relief valve set to 10 bar", "A temperature compensation thermistor", "A high-precision, constant-speed gear pump that forces an exactly constant flow rate of fuel through the capillary tube", "A variable frequency drive on the booster pump"],
    "exp": "Because \u0394P = Flow \u00d7 Viscosity \u00d7 Constant. If the flow fluctuated, the \u0394P would fluctuate, ruining the viscosity reading. The internal precision gear pump ensures Flow is absolutely constant.",
    "cat": "VIS",
    "id": "T09S_326"
  },
  {
    "q": "What electrical check can an ETO perform to verify the calibration of the Viscotherm control panel indicator?",
    "a": "Disconnect the sensor and use a loop calibrator to inject 4mA (should read 0 cSt) and 20mA (should read max scale cSt)",
    "opts": ["Bridge the terminals to see if the panel reads 100%", "Measure the resistance of the steam valve solenoid coil", "Disconnect the sensor and use a loop calibrator to inject 4mA (should read 0 cSt) and 20mA (should read max scale cSt)", "Connect a 220V Megger to the signal terminals"],
    "exp": "A standard 4-20mA loop calibrator simulates the sensor. Injecting known mA values proves the PLC/panel is mathematically converting the signal into the correct screen display.",
    "cat": "VIS",
    "id": "T09S_327"
  },
  {
    "q": "If a Viscotherm 'High Viscosity' alarm triggers, and the steam valve is verified to be 100% open, what mechanical issue should be investigated?",
    "a": "A blocked steam supply line, a fouled heat exchanger (coked tubes), or a malfunctioning steam trap",
    "opts": ["The fuel booster pumps running too fast", "A blocked steam supply line, a fouled heat exchanger (coked tubes), or a malfunctioning steam trap", "A broken 4-20mA sensor wire", "A faulty I-to-P (Current to Pneumatic) transducer"],
    "exp": "If the automation is doing its job (calling for max heat) and the valve is physically open, the electrical side is perfect. The issue is thermodynamic: no steam is arriving, or the heat isn't transferring through dirty tubes.",
    "cat": "VIS",
    "id": "T09S_328"
  },
  {
    "q": "How does the Viscotherm controller translate its electronic PID output into physical movement of the pneumatic steam valve?",
    "a": "By using an I-to-P (Current to Pneumatic) transducer that converts a 4-20mA control signal into a proportional 3-15 psi air pressure signal",
    "opts": ["By varying the voltage to a magnetic solenoid coil", "By modulating the frequency of a small VFD", "By using a heavy-duty electric servo motor directly attached to the valve stem", "By using an I-to-P (Current to Pneumatic) transducer that converts a 4-20mA control signal into a proportional 3-15 psi air pressure signal"],
    "exp": "The electronic controller outputs 4-20mA. The steam valve requires compressed air to move against its heavy spring. The I-to-P converter bridges these two systems, turning electrical current into variable air pressure.",
    "cat": "VIS",
    "id": "T09S_329"
  },
  {
    "q": "What is 'Integral Windup' in a Viscotherm controller?",
    "a": "When a large, sustained error causes the Integral action to accumulate a massive correction value, causing the valve to overshoot drastically when the condition finally normalizes",
    "opts": ["When the steam valve physically jams fully open due to rust", "When a large, sustained error causes the Integral action to accumulate a massive correction value, causing the valve to overshoot drastically when the condition finally normalizes", "When the gear pump winds up too much pressure and blows a seal", "When the proportional band is set to 0%"],
    "exp": "If the steam is shut off manually, the fuel gets cold. The controller keeps adding 'I' action trying to fix it, demanding 100% output. When steam is restored, this massive accumulated 'windup' keeps the valve at 100% way too long, boiling the fuel. Modern PLCs use 'anti-windup' logic to prevent this.",
    "cat": "VIS",
    "id": "T09S_330"
  },
  {
    "q": "Why is pure Proportional (P-only) control inadequate for a marine Viscotherm?",
    "a": "Proportional control always leaves a 'Steady-State Error' (Offset); it will stabilize the temperature, but it will never perfectly reach the 14 cSt setpoint",
    "opts": ["Proportional control always leaves a 'Steady-State Error' (Offset); it will stabilize the temperature, but it will never perfectly reach the 14 cSt setpoint", "It requires a digital signal rather than 4-20mA", "It cannot handle Fail-Close valves", "It reacts too violently to pressure ripples"],
    "exp": "P-control needs an error to generate an output. As the viscosity approaches the setpoint, the error shrinks, so the output shrinks, eventually stalling just shy of the target. Integral (I) is added to slowly push it all the way to 14 cSt.",
    "cat": "VIS",
    "id": "T09S_331"
  },
  {
    "q": "If the Viscotherm gear pump motor loses one phase (single-phasing), what happens?",
    "a": "The motor will stall or draw excessive current, tripping its thermal overload relay and triggering a system fault alarm",
    "opts": ["It will run backward, reversing the fuel flow", "The motor will stall or draw excessive current, tripping its thermal overload relay and triggering a system fault alarm", "It will run at 66% speed, giving a falsely low viscosity reading", "The Viscotherm will automatically switch to capillary mode"],
    "exp": "Like any 3-phase motor, losing a phase causes massive current unbalance. The internal protection trips the motor, stopping the constant flow required for measurement, and the PLC initiates a sensor failure alarm.",
    "cat": "VIS",
    "id": "T09S_332"
  },
  {
    "q": "What is the fundamental purpose of a governor on a marine diesel generator?",
    "a": "To automatically adjust the fuel supply to maintain a constant engine speed (frequency) under varying electrical load conditions",
    "opts": ["To distribute reactive power evenly between parallel generators", "To control the starting air pressure during cranking", "To automatically adjust the fuel supply to maintain a constant engine speed (frequency) under varying electrical load conditions", "To regulate the voltage output of the alternator"],
    "exp": "The governor is the engine's speed controller. If an electrical load is added, the engine slows down. The governor senses this, pushes the fuel rack to inject more fuel, and brings the speed back up to 60Hz.",
    "cat": "Governor",
    "id": "T09S_333"
  },
  {
    "q": "What is 'Governor Droop'?",
    "a": "A deliberate, proportional decrease in engine speed (frequency) as the active load (kW) increases, essential for stable parallel operation",
    "opts": ["A sudden drop in voltage during motor starting", "A deliberate, proportional decrease in engine speed (frequency) as the active load (kW) increases, essential for stable parallel operation", "The physical sagging of the fuel rack linkage due to wear", "A mechanical failure of the flyweights causing the engine to stall"],
    "exp": "Droop (usually 3-5%) allows parallel generators to share load stably without 'fighting' each other. As one takes load, it intentionally slows down slightly, forcing the other generator to pick up its share of the burden.",
    "cat": "Governor",
    "id": "T09S_334"
  },
  {
    "q": "What does an 'Isochronous' governor setting mean?",
    "a": "It means 0% Droop; the governor maintains exactly the same speed (e.g., 60Hz) from no-load to full-load",
    "opts": ["It means the engine operates at variable speeds for maximum fuel efficiency", "It means 0% Droop; the governor maintains exactly the same speed (e.g., 60Hz) from no-load to full-load", "It means the governor relies entirely on pneumatic air pressure", "It means the governor is manually controlled via the synchroscope"],
    "exp": "Isochronous means 'constant time'. An isochronous governor aggressively holds 60Hz regardless of load. While great for a single running generator, it is highly unstable for parallel generators unless they are linked by electronic load-sharing lines.",
    "cat": "Governor",
    "id": "T09S_335"
  },
  {
    "q": "Why is it dangerous to run two generators in purely Isochronous mode (0% droop) in parallel without electronic load sharing?",
    "a": "They will fight to maintain exactly 60Hz; the slightest measurement error will cause one to take all the load while the other drops its load, leading to violent hunting and reverse power trips",
    "opts": ["They will both overspeed uncontrollably", "They will fight to maintain exactly 60Hz; the slightest measurement error will cause one to take all the load while the other drops its load, leading to violent hunting and reverse power trips", "The alternators will generate excessive 3rd harmonic distortion", "The synchroscope will spin continuously, preventing breaker closure"],
    "exp": "If both demand 60.00Hz, and the bus is at 59.99Hz, both will shove their fuel racks to 100%. The bus hits 60.01Hz, and both slam their racks to 0%. This massive power swing destroys stability.",
    "cat": "Governor",
    "id": "T09S_336"
  },
  {
    "q": "How does a traditional Hydraulic-Mechanical governor (like a Woodward UG-8) sense engine speed?",
    "a": "Using rotating centrifugal flyweights driven by the engine camshaft; as speed increases, the weights fly outward, lifting a pilot valve against a spring",
    "opts": ["Using a digital Magnetic Pickup Unit (MPU) on the flywheel", "By monitoring the exhaust gas temperature", "By measuring the frequency of the main alternator output", "Using rotating centrifugal flyweights driven by the engine camshaft; as speed increases, the weights fly outward, lifting a pilot valve against a spring"],
    "exp": "In mechanical governors, physics does the sensing. Spinning weights fly outward due to centrifugal force. This physical movement shifts a small hydraulic valve, directing high-pressure oil to move the heavy fuel rack.",
    "cat": "Governor",
    "id": "T09S_337"
  },
  {
    "q": "What provides the actual physical force to move the heavy fuel rack in a Hydraulic-Mechanical governor?",
    "a": "High-pressure oil generated by an internal gear pump pushing against a hydraulic servo-piston",
    "opts": ["An electric stepper motor", "Pneumatic air pressure from the starting air receivers", "The centrifugal force of the flyweights directly", "High-pressure oil generated by an internal gear pump pushing against a hydraulic servo-piston"],
    "exp": "Flyweights are weak. They only move a tiny 'pilot valve'. That valve directs high-pressure oil (pumped from the governor's own sump) into a hydraulic cylinder. This 'servo' generates massive force to slide the stiff fuel rack.",
    "cat": "Governor",
    "id": "T09S_338"
  },
  {
    "q": "What is the function of the 'Governor Synchronizing Motor' (or speed setting motor)?",
    "a": "It is a small, reversible electric motor mounted on the governor that adjusts the speed setpoint spring tension, allowing remote speed control from the main switchboard",
    "opts": ["It spins the flyweights before the engine is started", "It is a small, reversible electric motor mounted on the governor that adjusts the speed setpoint spring tension, allowing remote speed control from the main switchboard", "It generates the reference voltage for the AVR", "It physically forces the generator rotors to align during paralleling"],
    "exp": "When you toggle the 'Raise/Lower Speed' switch on the switchboard to parallel a generator, you are actually running this tiny electric motor. It tightens or loosens the speeder spring inside the governor, changing the target RPM.",
    "cat": "Governor",
    "id": "T09S_339"
  },
  {
    "q": "How does an Electronic Governor sense engine speed?",
    "a": "Using a Magnetic Pickup Unit (MPU) that generates an AC frequency pulse every time a gear tooth on the flywheel passes it",
    "opts": ["Using a Magnetic Pickup Unit (MPU) that generates an AC frequency pulse every time a gear tooth on the flywheel passes it", "Using a radar sensor pointing at the crankshaft", "Using centrifugal flyweights embedded with microchips", "By measuring the 4-20mA output of the main alternator"],
    "exp": "The MPU sits ~1mm away from the flywheel teeth. As steel teeth fly past the magnet, they induce an AC sine wave. The electronic controller counts the frequency of these waves to calculate exact RPM instantly.",
    "cat": "Governor",
    "id": "T09S_340"
  },
  {
    "q": "What is the 'Fail-Safe' behavior if the wire to the Magnetic Pickup Unit (MPU) breaks on an electronic governor?",
    "a": "The controller detects 0 RPM, assumes a massive sensor failure, and instantly commands the fuel actuator to 0% (Shutdown) to prevent a runaway overspeed",
    "opts": ["The controller switches to monitoring the alternator frequency", "The controller locks the fuel rack in its last known position", "The controller detects 0 RPM, assumes a massive sensor failure, and instantly commands the fuel actuator to 0% (Shutdown) to prevent a runaway overspeed", "The controller assumes 0 RPM and pushes the fuel rack to 100% to try and start the engine"],
    "exp": "If the wire breaks, the governor sees '0 RPM'. If it didn't have fail-safe logic, it would think the engine stalled and push max fuel, causing a catastrophic overspeed. Modern governors instantly cut fuel if the MPU signal vanishes while the engine should be running.",
    "cat": "Governor",
    "id": "T09S_341"
  },
  {
    "q": "What is the function of the Actuator in an electronic governor system?",
    "a": "It converts the electrical command signal from the PID controller into physical mechanical force to move the fuel rack",
    "opts": ["It generates the magnetic pulses for the speed sensor", "It converts the electrical command signal from the PID controller into physical mechanical force to move the fuel rack", "It cools the lubricating oil inside the hydraulic sump", "It synchronizes the incoming AC waveforms on the switchboard"],
    "exp": "The electronic controller is just a computer; it can't push metal. It sends a signal (e.g., 0-200mA or a PWM signal) to an electro-magnetic or electro-hydraulic actuator, which does the heavy lifting of pulling the fuel linkage.",
    "cat": "Governor",
    "id": "T09S_342"
  },
  {
    "q": "In a PID electronic governor, what does the 'Proportional' (P or Gain) setting control?",
    "a": "The immediate, aggressive reaction to a speed error; higher gain causes a faster fuel rack response but can lead to overshoot and hunting if set too high",
    "opts": ["The droop percentage for parallel load sharing", "The immediate, aggressive reaction to a speed error; higher gain causes a faster fuel rack response but can lead to overshoot and hunting if set too high", "The maximum speed limit of the engine", "The time delay before the governor reacts to a fault"],
    "exp": "Proportional Gain is the 'muscle'. If speed drops, high gain slams the fuel rack open violently. This catches the speed drop quickly, but if it's too strong, the engine revs past 60Hz and starts bouncing (hunting).",
    "cat": "Governor",
    "id": "T09S_343"
  },
  {
    "q": "What does the 'Integral' (I or Stability/Reset) setting control in a PID electronic governor?",
    "a": "It eliminates the steady-state error (offset) by slowly adjusting the fuel until the speed returns exactly to the setpoint (e.g., 60.00 Hz)",
    "opts": ["It eliminates the steady-state error (offset) by slowly adjusting the fuel until the speed returns exactly to the setpoint (e.g., 60.00 Hz)", "It acts as a mechanical dashpot for the fuel actuator", "It determines the droop droop curve during parallel operation", "It reacts strictly to the rate at which the load is changing"],
    "exp": "Proportional action alone will stabilize the engine, but maybe at 59.8Hz instead of 60.0Hz. The Integral action sees this 0.2Hz error, adds it up over time, and slowly nudges the fuel rack until the frequency is perfectly 60.00Hz.",
    "cat": "Governor",
    "id": "T09S_344"
  },
  {
    "q": "What does the 'Derivative' (D) setting do in a PID electronic governor?",
    "a": "It reacts to the *rate of change* of the speed error, providing a 'braking' effect to slow the fuel rack down as it approaches the target, preventing overshoot",
    "opts": ["It provides the initial massive fuel boost during a blackout start", "It reacts to the *rate of change* of the speed error, providing a 'braking' effect to slow the fuel rack down as it approaches the target, preventing overshoot", "It calculates the exact active power (kW) being consumed", "It overrides the mechanical overspeed trip"],
    "exp": "Derivative anticipates the future. If the speed is shooting back up toward 60Hz very rapidly, the 'D' action says 'slow down the rack movement now, or we will overshoot.' It acts like an electronic dashpot.",
    "cat": "Governor",
    "id": "T09S_345"
  },
  {
    "q": "Why do electronic governors utilize 'Load Sharing Lines' (Load Sharing Modules) when paralleling generators?",
    "a": "To allow the governors to run in Isochronous mode (0% droop) while perfectly sharing the active kW load by electronically communicating their load data to each other",
    "opts": ["To share reactive power (kVAR) evenly without using the AVR", "To physically lock the fuel racks of both engines together", "To prevent reverse power by isolating the generators from the busbar", "To allow the governors to run in Isochronous mode (0% droop) while perfectly sharing the active kW load by electronically communicating their load data to each other"],
    "exp": "Droop is a necessary evil in mechanical systems to ensure stable load sharing, but it causes the bus frequency to sag. Electronic load sharing modules measure kW, talk to each other, and adjust fuel instantly, allowing both engines to hold exactly 60Hz and split the load 50/50.",
    "cat": "Governor",
    "id": "T09S_346"
  },
  {
    "q": "What is the 'Load Limit' knob or setting on a governor?",
    "a": "A physical or software limit that prevents the fuel rack from opening past a certain point, protecting the engine from massive overloads and high exhaust temperatures",
    "opts": ["A setting that drops the generator off the bus if load exceeds 100%", "A mechanical brake on the flywheel", "A control that limits the voltage output of the AVR", "A physical or software limit that prevents the fuel rack from opening past a certain point, protecting the engine from massive overloads and high exhaust temperatures"],
    "exp": "If the ship demands 120% load, the governor will normally push the fuel rack to 120% to keep 60Hz. The engine will choke on black smoke and melt its exhaust valves. The load limit physically blocks the rack at 100%, sacrificing frequency to save the engine.",
    "cat": "Governor",
    "id": "T09S_347"
  },
  {
    "q": "During a black start, why must the electronic governor have a dedicated 24V DC battery supply?",
    "a": "Because unlike mechanical governors, the electronic controller and actuator require immediate electrical power to open the fuel rack before the engine has generated any AC voltage",
    "opts": ["Because unlike mechanical governors, the electronic controller and actuator require immediate electrical power to open the fuel rack before the engine has generated any AC voltage", "Because the MPU sensor requires 24V DC to generate a magnetic field", "Because 24V DC is required to flash the alternator's residual magnetism", "Because SOLAS bans the use of AC power in starting circuits"],
    "exp": "A mechanical governor works purely on spinning physics; it needs no electricity. An electronic governor is a computer. If the ship is dead, the governor needs battery power to boot up and yank the fuel actuator open so the engine can start.",
    "cat": "Governor",
    "id": "T09S_348"
  },
  {
    "q": "What does 'Deadband' refer to in governor tuning?",
    "a": "A tiny, intentional range of speed fluctuation where the governor makes zero correction, preventing the actuator from wearing out due to constant micro-adjustments",
    "opts": ["The physical dead-space inside the hydraulic dashpot", "The gap between the MPU sensor and the flywheel teeth", "A tiny, intentional range of speed fluctuation where the governor makes zero correction, preventing the actuator from wearing out due to constant micro-adjustments", "The RPM zone below starting speed where the engine stalls"],
    "exp": "Diesel engines naturally have tiny RPM fluctuations due to individual cylinder firing strokes. If the governor reacted to every single micro-ripple, the fuel rack would vibrate continuously and wear out. The deadband tells the governor to ignore changes smaller than, say, 0.1Hz.",
    "cat": "Governor",
    "id": "T09S_349"
  },
  {
    "q": "What is the primary operational symptom of a hydraulic governor with dirty or degraded oil?",
    "a": "Sluggish response to load changes, or continuous erratic hunting, due to the pilot valve and dashpot sticking or foaming",
    "opts": ["The generator voltage will drop to zero", "Sluggish response to load changes, or continuous erratic hunting, due to the pilot valve and dashpot sticking or foaming", "The engine will instantly overspeed", "The electric synchronizing motor will burn out"],
    "exp": "Hydraulic governors have microscopic clearances in their valves and rely on perfectly clean oil. Sludge makes the valves stick, causing delayed reactions that result in deep frequency dips or wild hunting.",
    "cat": "Governor",
    "id": "T09S_350"
  },
  {
    "q": "How does an ETO manually test the function of the MPU (Magnetic Pickup Unit) on an idle engine?",
    "a": "Disconnect the MPU, set a multimeter to AC mV, and pass a metal tool (like a screwdriver) quickly back and forth across the sensor tip to generate a pulse reading",
    "opts": ["Measure the DC resistance; it must read exactly zero ohms", "Use a megger at 500V to check insulation to ground", "Connect a 24V DC battery and look for a spark", "Disconnect the MPU, set a multimeter to AC mV, and pass a metal tool (like a screwdriver) quickly back and forth across the sensor tip to generate a pulse reading"],
    "exp": "The MPU is just a coil wrapped around a magnet. Passing a piece of steel through its magnetic field induces a small AC voltage pulse. A multimeter on AC millivolts will jump every time you tap steel against the tip, proving the coil is intact.",
    "cat": "Governor",
    "id": "T09S_351"
  },
  {
    "q": "What happens if the gap between the Magnetic Pickup Unit (MPU) and the flywheel teeth is set too wide (e.g., >3mm)?",
    "a": "The magnetic flux change is too weak to induce a sufficient voltage pulse; the governor will fail to read the speed and will trigger a sensor failure shutdown",
    "opts": ["The pulses become too high in voltage, blowing the governor's input fuse", "The governor will read exactly half the actual engine speed", "The engine will physically strike the sensor, destroying it", "The magnetic flux change is too weak to induce a sufficient voltage pulse; the governor will fail to read the speed and will trigger a sensor failure shutdown"],
    "exp": "Magnetic strength drops exponentially with distance. If the sensor is backed off too far, the passing teeth don't disturb the field enough to generate the minimum AC voltage (usually 1-2V AC RMS at cranking speed) required for the controller to 'see' the speed.",
    "cat": "Governor",
    "id": "T09S_352"
  },
  {
    "q": "Why do some marine electronic governors feature DUAL (redundant) Magnetic Pickup Units?",
    "a": "To provide a fail-safe backup; if one sensor fails, the governor seamlessly switches to the second sensor without shutting down the vital generator",
    "opts": ["To provide a fail-safe backup; if one sensor fails, the governor seamlessly switches to the second sensor without shutting down the vital generator", "One is for speed control, the other generates power for the AVR", "One controls the active power, the other controls reactive power", "To average out the readings for extreme mathematical precision"],
    "exp": "Loss of a speed sensor normally commands an instant shutdown to prevent runaway. On a ship, losing a generator causes a blackout. Dual MPUs ensure that a single broken wire doesn't drop the ship's entire power grid.",
    "cat": "Governor",
    "id": "T09S_353"
  },
  {
    "q": "If an engine's fuel rack linkage becomes physically stiff due to lack of lubrication, what electrical symptom will the ETO see on the electronic actuator?",
    "a": "The actuator control current will spike abnormally high as the PID controller tries to force the jammed linkage, potentially causing the actuator to overheat or trip on overcurrent",
    "opts": ["The electronic controller will immediately reboot", "The MPU signal will drop to zero", "The actuator will generate severe harmonic interference", "The actuator control current will spike abnormally high as the PID controller tries to force the jammed linkage, potentially causing the actuator to overheat or trip on overcurrent"],
    "exp": "The PID controller demands a specific fuel rack position. If the rack is stiff, it hasn't reached the target. The integral action winds up, pumping massive DC current into the actuator coil to force it to move, leading to overheating.",
    "cat": "Governor",
    "id": "T09S_354"
  },
  {
    "q": "What is the 'Starting Fuel Limit' parameter programmed into an electronic governor?",
    "a": "It artificially restricts the maximum fuel rack opening during the cranking phase to prevent massive plumes of unburnt black smoke and destructive thermal shock to the cold engine",
    "opts": ["It drains water from the fuel before cranking", "It limits the pressure of the booster pumps to 5 bar", "It artificially restricts the maximum fuel rack opening during the cranking phase to prevent massive plumes of unburnt black smoke and destructive thermal shock to the cold engine", "It ensures the fuel tank has enough capacity before allowing a start"],
    "exp": "During starting, speed is far below 60Hz. A normal PID would shove the rack to 100% to catch up. Dumping 100% fuel into a slow, cold engine creates massive black smoke and explosive cylinder pressures. The starting limit holds the rack at a low, safe value (e.g., 30%) until the engine fires.",
    "cat": "Governor",
    "id": "T09S_355"
  },
  {
    "q": "When tuning a governor on board, what is a 'Step Load Test'?",
    "a": "Applying and removing a large, instantaneous electrical load (e.g., 30-50%) to the generator to observe the governor's dynamic response, overshoot, and settling time",
    "opts": ["Physically climbing on the engine to check for vibration", "Gradually increasing the load 1 kW at a time over an hour", "Stepping down the voltage on the AVR to see if the governor compensates", "Applying and removing a large, instantaneous electrical load (e.g., 30-50%) to the generator to observe the governor's dynamic response, overshoot, and settling time"],
    "exp": "The ultimate test of a PID loop is a massive shock. By starting a massive cooling pump, you watch the frequency dive. A well-tuned governor will catch it before 57Hz, bounce once, and settle flat at 60Hz within 3 seconds.",
    "cat": "Governor",
    "id": "T09S_356"
  },
  {
    "q": "If two generators are load-sharing nicely via an electronic load-sharing module, but one engine suddenly begins taking on 100% of the kW load while the other drops to 0%, what is the most likely fault?",
    "a": "The electronic load-sharing communication line (the parallel wires connecting the modules) has broken, or one module has failed",
    "opts": ["The synchroscope was left switched on", "The PMG on the second generator has lost magnetism", "The AVR droop setting was adjusted incorrectly", "The electronic load-sharing communication line (the parallel wires connecting the modules) has broken, or one module has failed"],
    "exp": "In isochronous load sharing, the modules rely entirely on a small analog signal wire between them to split the load. If that wire breaks, they lose the ability to cooperate, and minor measurement errors cause one to aggressively steal all the load.",
    "cat": "Governor",
    "id": "T09S_357"
  },
  {
    "q": "What is the function of the physical 'Speed Droop' adjustment lever on a traditional Woodward hydraulic governor?",
    "a": "It mechanically alters the feedback linkage to the pilot valve, causing the setpoint to drop slightly as the fuel rack opens, enabling stable parallel load sharing",
    "opts": ["It sets the maximum overspeed trip limit", "It mechanically alters the feedback linkage to the pilot valve, causing the setpoint to drop slightly as the fuel rack opens, enabling stable parallel load sharing", "It drains excess oil from the dashpot to speed up response time", "It manually overrides the governor to shut down the engine"],
    "exp": "Droop on a mechanical governor is a clever linkage. As the servo pushes the rack to add fuel (taking load), the linkage physically pushes down on the speeder spring slightly, reducing the target RPM from 60Hz to 59Hz. This prevents it from fighting other generators.",
    "cat": "Governor",
    "id": "T09S_358"
  },
  {
    "q": "During parallel operation, Generator 1 governor is set to 0% droop (Isochronous) and Generator 2 is set to 4% droop. How will they share a suddenly applied load?",
    "a": "Generator 1 (0% droop) will take the entire new load to keep the frequency perfectly flat, while Generator 2's load remains unchanged",
    "opts": ["Generator 2 will take all the load, causing it to slow down by 4%", "They will share the load perfectly 50/50", "Generator 1 (0% droop) will take the entire new load to keep the frequency perfectly flat, while Generator 2's load remains unchanged", "Both generators will trip on reverse power immediately"],
    "exp": "This is called a 'Base Load' setup. Gen 2 (with droop) won't pick up load unless the frequency drops. Gen 1 (isochronous) refuses to let the frequency drop, so it aggressively absorbs 100% of any new load applied to the ship.",
    "cat": "Governor",
    "id": "T09S_359"
  },
  {
    "q": "Why is the governor oil sight glass critically important to check during regular engine room rounds?",
    "a": "Because a low oil level introduces air into the hydraulic servo and dashpot, causing spongy action, erratic hunting, and eventual complete loss of engine speed control",
    "opts": ["Because the oil cools the main engine bearings", "Because the sight glass also indicates the fuel pressure", "Because a low oil level introduces air into the hydraulic servo and dashpot, causing spongy action, erratic hunting, and eventual complete loss of engine speed control", "Because the oil is highly flammable and indicates a fire risk"],
    "exp": "A hydraulic governor is entirely self-contained. If it loses oil through a shaft seal, the internal pump sucks air. Air compresses (unlike oil), turning the rigid, precise hydraulic control into a bouncy, erratic mess.",
    "cat": "Governor",
    "id": "T09S_360"
  },
  {
    "q": "What action must an ETO take if an electronic governor's PID settings are lost due to a memory battery failure?",
    "a": "Reload the specific PID tuning parameters from the ship's backup documentation using a laptop or the governor keypad, and perform a tuning run to verify stability",
    "opts": ["Replace the entire governor unit, as it is factory-sealed", "Reload the specific PID tuning parameters from the ship's backup documentation using a laptop or the governor keypad, and perform a tuning run to verify stability", "Run the engine at 110% speed to force the governor to auto-calibrate", "Switch the main switchboard to 'Manual Excitation' mode"],
    "exp": "Electronic governors are blank slates. They must be programmed with specific P, I, D, and actuator parameters tailored to that exact engine model. ETOs must keep written or digital backups of these tuning parameters.",
    "cat": "Governor",
    "id": "T09S_361"
  },
  {
    "q": "How does an actuator with 'Spring Return' provide a fail-safe function?",
    "a": "A heavy internal spring constantly pulls the linkage toward the 'Zero Fuel' position; if electrical control power is lost, the spring slams the fuel rack shut, stopping the engine",
    "opts": ["A heavy internal spring constantly pulls the linkage toward the 'Zero Fuel' position; if electrical control power is lost, the spring slams the fuel rack shut, stopping the engine", "The spring pushes the rack to 100% fuel to ensure the ship doesn't lose power", "The spring generates its own electricity to keep the governor alive", "The spring locks the rack in its last known position"],
    "exp": "Safety dictates that any failure (broken wire, dead battery) must result in a safe shutdown, not a runaway engine. The governor electronics must actively push against a heavy spring to supply fuel. Power loss = spring wins = zero fuel.",
    "cat": "Governor",
    "id": "T09S_362"
  },
  {
    "q": "What is the exact definition of a 'Dead Ship Condition' according to SOLAS?",
    "a": "A condition under which the main propulsion plant, boilers, and auxiliaries are not in operation due to the absence of power, and all stored energy (air/batteries) is depleted",
    "opts": ["A condition where the emergency generator is running the entire ship", "A condition where the ship is physically sunk or grounded", "A condition where the main engine has failed, but the generators are running", "A condition under which the main propulsion plant, boilers, and auxiliaries are not in operation due to the absence of power, and all stored energy (air/batteries) is depleted"],
    "exp": "A Dead Ship is the worst-case scenario. It is not just a blackout; it means you have no compressed air left to start the generators, and no power to run the air compressors. You must recover the ship from zero stored energy.",
    "cat": "DeadShip",
    "id": "T09S_363"
  },
  {
    "q": "According to SOLAS II-1 Part D, what is the maximum time allowed to restore the main electrical power and propulsion starting from a Dead Ship condition?",
    "a": "30 minutes",
    "opts": ["30 minutes", "15 seconds", "2 hours", "45 seconds"],
    "exp": "SOLAS mandates that the ship's systems (emergency generator, emergency air compressor, etc.) must be capable of bringing the main power grid back online and making the main engine ready to start within 30 minutes of a Dead Ship event.",
    "cat": "DeadShip",
    "id": "T09S_364"
  },
  {
    "q": "What is the fundamental difference between a 'Blackout' and a 'Dead Ship' condition?",
    "a": "A blackout is a loss of voltage on the main busbar, but starting air and batteries are still fully charged. A dead ship means ALL stored energy is also gone",
    "opts": ["A blackout only happens in port; a dead ship only happens at sea", "A blackout is a loss of voltage on the main busbar, but starting air and batteries are still fully charged. A dead ship means ALL stored energy is also gone", "There is no difference; they are legally identical terms", "A blackout affects the lights; a dead ship affects the steering"],
    "exp": "Recovering from a blackout takes 45 seconds (the standby generator just uses existing compressed air to start). Recovering from a dead ship takes ~30 minutes because you have to slowly generate compressed air from scratch using the tiny emergency compressor.",
    "cat": "DeadShip",
    "id": "T09S_365"
  },
  {
    "q": "What is the very first piece of machinery that must be started to initiate a Dead Ship recovery?",
    "a": "The Emergency Generator",
    "opts": ["The Emergency Generator", "The Main Engine", "The Boiler Feedwater Pump", "The Main Air Compressor"],
    "exp": "You have zero power and zero air. The only thing on the ship capable of starting is the Emergency Generator, which has its own dedicated, independent starting batteries (or hydraulic starter) that are legally ring-fenced from the rest of the ship.",
    "cat": "DeadShip",
    "id": "T09S_366"
  },
  {
    "q": "Once the Emergency Generator is running during a Dead Ship recovery, what is the immediate next step?",
    "a": "Use the emergency switchboard power to start the Emergency Air Compressor to slowly fill the dedicated starting air receiver",
    "opts": ["Start the main engine directly using the emergency generator", "Power up the heavy fuel oil purifiers", "Use the emergency switchboard power to start the Emergency Air Compressor to slowly fill the dedicated starting air receiver", "Turn on the ship's air conditioning to cool the automation racks"],
    "exp": "The emergency generator doesn't have the power to run massive main sea water pumps or start the main engine. Its job is to power the tiny Emergency Air Compressor, which slowly pumps up a single air bottle so you can start a Main Diesel Generator.",
    "cat": "DeadShip",
    "id": "T09S_367"
  },
  {
    "q": "Why must an Emergency Air Compressor be powered from the Emergency Switchboard?",
    "a": "So that it can be operated when the main switchboard is completely dead, enabling the crew to generate starting air during a Dead Ship condition",
    "opts": ["To prevent harmonic distortion from entering the main grid", "So that it can be operated when the main switchboard is completely dead, enabling the crew to generate starting air during a Dead Ship condition", "Because it runs on 24V DC power", "Because the main switchboard is legally forbidden from powering compressors"],
    "exp": "If the emergency compressor was wired to the main switchboard, you could never turn it on during a blackout. It is specifically wired to the emergency board so the emergency generator can power it.",
    "cat": "DeadShip",
    "id": "T09S_368"
  },
  {
    "q": "If the Emergency Generator's starting batteries are completely dead during a Dead Ship scenario, how can it be started?",
    "a": "SOLAS requires a second, independent starting method; this is typically a hydraulic hand-pump starter or a purely mechanical spring-starter",
    "opts": ["By using jumper cables connected to the bridge GMDSS batteries", "It cannot be started; the ship must wait for a tugboat", "By using a small steam turbine driven by residual boiler heat", "SOLAS requires a second, independent starting method; this is typically a hydraulic hand-pump starter or a purely mechanical spring-starter"],
    "exp": "Total redundancy is required. If the primary electric starter fails, an engineer can manually pump a hydraulic accumulator handle 50 times, building up 300 bar of oil pressure, and pull a lever to hydraulically crank the emergency diesel.",
    "cat": "DeadShip",
    "id": "T09S_369"
  },
  {
    "q": "After generating enough compressed air, you start Main Diesel Generator #1. How is its Air Circuit Breaker (ACB) closed onto the main switchboard?",
    "a": "It is closed directly onto the 'Dead Bus'; no synchronization is needed because there is no existing voltage or frequency on the busbar to match",
    "opts": ["It must be synchronized carefully with the emergency generator using the synchroscope", "It is closed directly onto the 'Dead Bus'; no synchronization is needed because there is no existing voltage or frequency on the busbar to match", "It must be closed using a special DC injection pulse to magnetize the busbars", "It is closed automatically by the Reverse Power relay"],
    "exp": "The main busbar is dead (0 Volts). You only synchronize when connecting to a live, pulsing AC bus. The first generator closes directly, instantly electrifying the busbar at 440V, 60Hz.",
    "cat": "DeadShip",
    "id": "T09S_370"
  },
  {
    "q": "Once the first Main Generator is online, what is the critical rule for restoring large auxiliary pumps (like Main Sea Water Cooling)?",
    "a": "They must be started sequentially with time delays between each start to prevent massive overlapping inrush currents from tripping the generator on overload",
    "opts": ["They must be started in reverse order, beginning with the smallest pumps", "They must be started sequentially with time delays between each start to prevent massive overlapping inrush currents from tripping the generator on overload", "They must remain off until the Main Engine is running at 50% load", "They must all be started simultaneously via a 'Group Start' button to restore cooling instantly"],
    "exp": "A DOL pump draws 6x its normal current to start. If the automation tried to start the SW pump, FW pump, and LO pump all at the exact same millisecond, the combined 5000A spike would instantly black the ship out again.",
    "cat": "DeadShip",
    "id": "T09S_371"
  },
  {
    "q": "During a Dead Ship recovery, what safety interlock ensures the Emergency Generator does not attempt to parallel with the newly restored Main Switchboard?",
    "a": "An electrical and mechanical interlock prevents the Emergency Generator ACB and the Main Bus-Tie breaker from being closed at the same time",
    "opts": ["The synchroscope is permanently locked out", "An electrical and mechanical interlock prevents the Emergency Generator ACB and the Main Bus-Tie breaker from being closed at the same time", "The emergency generator lacks an AVR, making paralleling impossible", "The emergency generator uses 50Hz, while the main uses 60Hz"],
    "exp": "When the main generator restores power to the main switchboard, the tie-breaker to the emergency board closes. The interlock forces the Emergency Generator breaker to trip open instantly, safely transferring the emergency loads back to main power.",
    "cat": "DeadShip",
    "id": "T09S_372"
  },
  {
    "q": "Why is the fuel supply to the Emergency Generator legally required to be entirely gravity-fed from its own dedicated tank?",
    "a": "To ensure fuel flows to the engine without relying on any electrical booster or transfer pumps, guaranteeing it can start during a total power failure",
    "opts": ["To comply with MARPOL regulations regarding fuel spillages", "Because the emergency generator runs exclusively on heavy fuel oil", "To prevent water from mixing with the fuel", "To ensure fuel flows to the engine without relying on any electrical booster or transfer pumps, guaranteeing it can start during a total power failure"],
    "exp": "A Dead Ship has no electricity to run a fuel pump. The emergency diesel day tank is mounted high on the wall, using pure gravity to feed diesel directly into the injection pumps.",
    "cat": "DeadShip",
    "id": "T09S_373"
  },
  {
    "q": "In a Dead Ship situation where HFO (Heavy Fuel Oil) is cold and solidified in the pipes, how is fuel provided to start the first Main Generator?",
    "a": "The generator must be switched to Marine Gas Oil (MGO), which remains fluid without steam heating, allowing the engine to start and run",
    "opts": ["The trace heating is run off the 24V batteries to melt the HFO", "A blowtorch is used to heat the fuel pipes manually", "The generator must be switched to Marine Gas Oil (MGO), which remains fluid without steam heating, allowing the engine to start and run", "The engine is cranked on air friction until it generates enough heat to melt the oil"],
    "exp": "No power = no boiler = no steam = solid HFO. Auxiliary generators have a changeover valve to run on MGO (diesel), which flows perfectly at room temperature. You start on MGO, use the electricity to fire the boiler, generate steam, melt the HFO, and then change back.",
    "cat": "DeadShip",
    "id": "T09S_374"
  },
  {
    "q": "What happens to the automation and alarm systems (Power Management System, PLCs) during a blackout/dead ship?",
    "a": "They remain fully powered for a minimum of 30 minutes by an Uninterruptible Power Supply (UPS) battery bank to allow engineers to monitor the recovery",
    "opts": ["They switch to a mechanical pneumatic display", "They shut down immediately to save power", "They are powered directly by the main engine turning gear", "They remain fully powered for a minimum of 30 minutes by an Uninterruptible Power Supply (UPS) battery bank to allow engineers to monitor the recovery"],
    "exp": "SOLAS requires critical control and alarm systems to survive a blackout. A massive UPS bank in the engine room keeps the computer screens alive, allowing the ETO to see the alarms and control the sequential restart process.",
    "cat": "DeadShip",
    "id": "T09S_375"
  },
  {
    "q": "Once main power is restored during recovery, what is the critical first step before attempting to start the Main Propulsion Engine?",
    "a": "Start the Main Lubricating Oil pumps and ensure pressure is established to protect the massive bearings",
    "opts": ["Start the Main Lubricating Oil pumps and ensure pressure is established to protect the massive bearings", "Engage the turning gear to spin the engine at high speed", "Turn on the engine room ventilation fans to maximum", "Start the heavy fuel oil purifiers"],
    "exp": "The main engine weighs hundreds of tons. If you turn it or start it without a thick film of pressurized lubricating oil floating the crankshaft, you will instantly wipe the white-metal bearings, causing millions of dollars in damage.",
    "cat": "DeadShip",
    "id": "T09S_376"
  },
  {
    "q": "How does the Power Management System (PMS) handle a Dead Bus recovery automatically on modern ships?",
    "a": "It detects the dead bus, issues a start command to the standby generator, verifies voltage, closes the breaker, and triggers the step-by-step sequential restart of essential pumps",
    "opts": ["It sends an automatic distress signal to the company headquarters", "It bypasses all safeties and fires every engine simultaneously", "It detects the dead bus, issues a start command to the standby generator, verifies voltage, closes the breaker, and triggers the step-by-step sequential restart of essential pumps", "It locks out all generators and waits for the Chief Engineer's password"],
    "exp": "On UMS vessels, this process must be automated. The PLC sees 0 Volts. It grabs the designated standby generator, cranks it, checks 440V/60Hz, closes the ACB, and then ticks through a timer (Pump 1.. wait 10s.. Pump 2.. wait 10s..) to restore the ship.",
    "cat": "DeadShip",
    "id": "T09S_377"
  },
  {
    "q": "Why is it absolutely critical to check the cooling water system (Jacket water and Sea water) immediately after the main generators are restored?",
    "a": "Running a generator under load without verified cooling water circulation will cause it to overheat and trip within minutes, plunging the ship back into a blackout",
    "opts": ["Running a generator under load without verified cooling water circulation will cause it to overheat and trip within minutes, plunging the ship back into a blackout", "To ensure the fresh water generator starts making water", "To prevent the cooling water from freezing in the pipes", "To provide hydraulic pressure to the governor"],
    "exp": "The first generator comes online and takes the heavy load of starting other pumps. It heats up rapidly. If its own cooling water pump (often engine-driven or electrically driven) isn't flowing, it will trip on high temp, ruining the recovery.",
    "cat": "DeadShip",
    "id": "T09S_378"
  },
  {
    "q": "What is the primary function of the 'Tie Breaker' on the main switchboard during blackout recovery?",
    "a": "It splits the switchboard into two halves; if a dead short caused the blackout, opening the tie breaker isolates the fault, allowing half the board to be safely energized",
    "opts": ["It splits the switchboard into two halves; if a dead short caused the blackout, opening the tie breaker isolates the fault, allowing half the board to be safely energized", "It physically locks the breakers to prevent vibration", "It ties the emergency generator to the main generator for extra power", "It ties the main generator directly to the propeller shaft"],
    "exp": "If the blackout was caused by a catastrophic short circuit on the Port side of the busbar, restarting a generator onto it will just trip it again. The ETO opens the central Tie Breaker, isolating the dead short, and safely restores power to the Starboard side.",
    "cat": "DeadShip",
    "id": "T09S_379"
  },
  {
    "q": "During a Dead Ship, how is lighting maintained in the engine room and passageways to allow the crew to conduct the recovery?",
    "a": "Via the 24V DC Transitional Emergency Lighting system, which turns on instantly from a dedicated battery bank when AC power fails",
    "opts": ["Via the 24V DC Transitional Emergency Lighting system, which turns on instantly from a dedicated battery bank when AC power fails", "By manually lighting kerosene lanterns", "By opening the skylights and working during the daytime", "By using chemical glow sticks mounted on the bulkheads"],
    "exp": "SOLAS requires transitional lighting. The moment the 440V lighting transformers lose power, a contactor drops, connecting specific 24V LED or halogen bulbs directly to a massive battery bank. This prevents the engine room from being plunged into pitch darkness.",
    "cat": "DeadShip",
    "id": "T09S_380"
  },
  {
    "q": "What is the minimum fuel capacity mandated by SOLAS for the Emergency Generator daily service tank on a passenger vessel vs a cargo vessel?",
    "a": "36 hours for a Passenger vessel, and 18 hours for a Cargo vessel",
    "opts": ["36 hours for a Passenger vessel, and 18 hours for a Cargo vessel", "12 hours for both", "72 hours for a Passenger vessel, and 48 hours for a Cargo vessel", "2 hours for a Passenger vessel, and 1 hour for a Cargo vessel"],
    "exp": "Passenger ships have much stricter evacuation times and life-safety loads, requiring the emergency generator to run twice as long (36h) as a standard cargo ship (18h) without needing fuel transfer.",
    "cat": "DeadShip",
    "id": "T09S_381"
  },
  {
    "q": "If the ship's main air receivers are completely empty (0 bar), why can't you just use the Emergency Air Compressor to fill them directly?",
    "a": "The Emergency Air Compressor has a tiny capacity; it would take hours/days to fill the massive main receivers. It is only designed to fill the small auxiliary bottle to start one generator",
    "opts": ["Because the main receivers operate at 300 bar, while the emergency compressor only outputs 10 bar", "Because the emergency air compressor produces toxic gases that would corrode the main valves", "The Emergency Air Compressor has a tiny capacity; it would take hours/days to fill the massive main receivers. It is only designed to fill the small auxiliary bottle to start one generator", "It is perfectly fine and standard practice to fill the main receivers this way"],
    "exp": "Dead Ship recovery is about stepping stones. The tiny emergency compressor fills a small dedicated bottle. That small bottle starts one diesel generator. That generator powers the massive Main Air Compressor, which then quickly fills the huge main receivers to start the main engine.",
    "cat": "DeadShip",
    "id": "T09S_382"
  },
  {
    "q": "After the main generators and air compressors are running, what must be done to the Main Engine before it can be safely started?",
    "a": "The engine must be pre-lubricated, pre-heated with steam/electric heaters (to ~60\u00b0C), and turned over with the turning gear with indicator cocks open to clear any fluids from the cylinders",
    "opts": ["The main fuel injectors must be removed and cleaned", "The engine must be injected with ether to ensure instant combustion", "The engine must be pre-lubricated, pre-heated with steam/electric heaters (to ~60\u00b0C), and turned over with the turning gear with indicator cocks open to clear any fluids from the cylinders", "The turbochargers must be spun up to 5000 RPM using compressed air"],
    "exp": "A cold, stagnant engine is dangerous. Fluids (water or oil) may have leaked into the cylinders. Because liquids are incompressible, starting the engine with fluid inside will bend the connecting rods (hydraulic lock). The turning gear safely pushes any fluid out the open indicator cocks.",
    "cat": "DeadShip",
    "id": "T09S_383"
  },
  {
    "q": "What specific electrical interlock ensures the Main Engine cannot be started while the turning gear is engaged?",
    "a": "A mechanical limit switch on the turning gear lever physically breaks the start-control circuit when the gear is engaged",
    "opts": ["A software timer in the Power Management System", "The main switchboard undervoltage relay", "A centrifugal switch on the flywheel", "A mechanical limit switch on the turning gear lever physically breaks the start-control circuit when the gear is engaged"],
    "exp": "If starting air (30 bar) is injected while the tiny turning gear motor is still meshed with the massive flywheel, the engine will instantly shred the turning gear teeth and destroy the electric motor. The limit switch prevents the air starting valve from opening.",
    "cat": "DeadShip",
    "id": "T09S_384"
  },
  {
    "q": "During blackout recovery, why do heavy electrical motors (like the Main Sea Water Pump) sometimes trip on starting, even if the generator has plenty of capacity?",
    "a": "Because the massive starting current (inrush) causes a severe transient voltage drop on the busbar, which can cause the motor's own Undervoltage (UV) relay or contactor coil to drop out",
    "opts": ["Because the massive starting current (inrush) causes a severe transient voltage drop on the busbar, which can cause the motor's own Undervoltage (UV) relay or contactor coil to drop out", "Because the motor rotates backwards during the first 3 seconds", "Because the generator frequency spikes to 70Hz", "Because the AVR automatically disconnects heavy loads to protect the generator"],
    "exp": "When a 200kW pump starts DOL, it pulls ~1200A. The busbar voltage sags heavily for a split second (e.g., from 440V to 350V). If the sag is too deep, the magnetic coil holding the contactor shut loses its grip, and the starter clatters open.",
    "cat": "DeadShip",
    "id": "T09S_385"
  },
  {
    "q": "How can the ETO test the functionality of the Dead Bus detection logic without actually turning off all the generators?",
    "a": "By using the simulation/test mode built into the Power Management System (PMS), or by safely isolating the voltage sensing fuses for the PMS to mimic 0V on the bus",
    "opts": ["By shorting the main busbars together with a heavy cable", "It is impossible to test without a genuine total blackout", "By pressing the emergency stop buttons on all engines simultaneously", "By using the simulation/test mode built into the Power Management System (PMS), or by safely isolating the voltage sensing fuses for the PMS to mimic 0V on the bus"],
    "exp": "Modern PMS systems have a 'Blackout Test' simulation mode that allows the sequence (start standby Gen, close breaker, start pumps) to be verified safely. Alternatively, pulling the PT (Potential Transformer) fuses feeding the PMS tricks the computer into thinking the bus is dead.",
    "cat": "DeadShip",
    "id": "T09S_386"
  },
  {
    "q": "What is the role of the 'Preferential Trip' system immediately following a blackout recovery?",
    "a": "It ensures that non-essential loads (like AC and galleys) remain disconnected or shed, reserving all available generator power to start the massive essential pumps",
    "opts": ["It automatically connects the shore power cables", "It deliberately trips the main engine to prevent thermal shock", "It ensures that non-essential loads (like AC and galleys) remain disconnected or shed, reserving all available generator power to start the massive essential pumps", "It trips the emergency generator to save fuel"],
    "exp": "During recovery, generator capacity is tight. The preferential trip system locks out the air conditioning compressors and galley ovens. The engineers must manually reset these trips later, only after they are sure the ship's propulsion is safely restored.",
    "cat": "DeadShip",
    "id": "T09S_387"
  },
  {
    "q": "What is the SOLAS requirement for the testing frequency of the Emergency Generator's automatic starting system?",
    "a": "It must be tested manually or automatically at least once a week, and subjected to a full load test every month",
    "opts": ["Tested daily before the Master signs the logbook", "Tested once a year during drydock", "Tested only when Port State Control requests it", "Tested manually or automatically at least once a week, and subjected to a full load test every month"],
    "exp": "A dead emergency generator means a dead ship. SOLAS mandates rigorous, logged testing. Weekly no-load starts prove the batteries work. Monthly loaded runs (usually using a test switch to simulate blackout) prove the engine can actually generate power without stalling.",
    "cat": "DeadShip",
    "id": "T09S_388"
  },
  {
    "q": "If the ship is equipped with a Shaft Generator (PTI/PTO), what role does it play during a blackout?",
    "a": "It instantly disconnects from the busbar; a shaft generator relies on the main engine rotating at a specific speed, which ceases during a blackout",
    "opts": ["It automatically switches to motor mode to spin the propeller", "It takes over the duties of the emergency generator", "It instantly disconnects from the busbar; a shaft generator relies on the main engine rotating at a specific speed, which ceases during a blackout", "It acts as a massive battery to sustain the busbar for 5 minutes"],
    "exp": "Shaft generators are fantastic for saving fuel, but useless in a blackout. If the main engine stops or the grid collapses, the shaft generator's breaker trips instantly, and the auxiliary diesel generators must be started to recover the ship.",
    "cat": "DeadShip",
    "id": "T09S_389"
  },
  {
    "q": "What is the 'Fail-Safe' position of the pneumatic starting air valve on the main engine?",
    "a": "Fail-Close; a heavy spring keeps it shut. Control air pressure is required to push it open against the spring to admit 30-bar starting air",
    "opts": ["It relies purely on gravity to close", "Fail-Close; a heavy spring keeps it shut. Control air pressure is required to push it open against the spring to admit 30-bar starting air", "Fail-Last; it stays wherever it was when power was lost", "Fail-Open; it defaults to open to guarantee an engine start"],
    "exp": "If control air fails, you do NOT want 30-bar high-pressure air blasting into the cylinders randomly. The valve is held firmly shut by a massive spring and only opens when explicitly commanded by the starting sequence.",
    "cat": "DeadShip",
    "id": "T09S_390"
  },
  {
    "q": "Why is it important to frequently drain the condensation from the starting air receivers, especially before a Dead Ship recovery?",
    "a": "Water accumulation reduces the air volume capacity and causes internal corrosion; injecting a slug of liquid water into the engine cylinders during starting can cause catastrophic hydraulic lock",
    "opts": ["Water accumulation reduces the air volume capacity and causes internal corrosion; injecting a slug of liquid water into the engine cylinders during starting can cause catastrophic hydraulic lock", "Water mixes with the air and creates explosive hydrogen gas", "Water lowers the pressure of the air below 10 bar", "Water causes the air compressor to run backwards"],
    "exp": "Compressing air squeezes the humidity out of it as liquid water. If not drained, the tank fills with water. When the starting valve opens, 30 bar of pressure blasts this water straight into the cylinder. The rising piston hits the incompressible water and snaps the connecting rod.",
    "cat": "DeadShip",
    "id": "T09S_391"
  },
  {
    "q": "During Dead Ship recovery, an ETO notices the 24V DC battery charger on the emergency switchboard is showing a very high output current (e.g., 50A). What does this mean?",
    "a": "It is perfectly normal; the batteries were deeply discharged during the blackout while powering emergency lighting and automation, and are now in the 'Bulk Charge' phase",
    "opts": ["The emergency generator is producing too much voltage", "The battery terminals are short-circuited and about to explode", "It is perfectly normal; the batteries were deeply discharged during the blackout while powering emergency lighting and automation, and are now in the 'Bulk Charge' phase", "The charger's internal thyristors have failed"],
    "exp": "When AC power returns, the smart battery charger sees the batteries are empty (having carried the ship's safety systems for 20 minutes) and pushes maximum current to recharge them quickly. As the voltage rises, the current will taper off to a tiny trickle charge.",
    "cat": "DeadShip",
    "id": "T09S_392"
  },
  {
    "q": "What does the Class notation 'UMS' or 'AUT-UMS' signify for a marine vessel?",
    "a": "Unmanned Machinery Space; the ship is certified to operate safely with no engineering crew present in the engine room for specified periods (usually at night)",
    "opts": ["Underwater Mooring System; the ship can anchor using submerged buoys", "Universal Maintenance Schedule; a digital planned maintenance system", "Unmanned Machinery Space; the ship is certified to operate safely with no engineering crew present in the engine room for specified periods (usually at night)", "Unrestricted Maritime Sailing; the ship can navigate in any ice condition"],
    "exp": "UMS allows the engineers to sleep at night rather than standing 4-hour watches in the engine room. It requires a massive amount of automated safety, fire detection, and alarm extension systems to be legally certified.",
    "cat": "UMS",
    "id": "T09S_393"
  },
  {
    "q": "What is the primary function of the 'Alarm Extension System' in a UMS setup?",
    "a": "To instantly relay critical engine room alarms to the bridge, the public spaces (mess rooms), and the specific cabin of the Duty Engineer",
    "opts": ["To instantly relay critical engine room alarms to the bridge, the public spaces (mess rooms), and the specific cabin of the Duty Engineer", "To increase the volume of the engine room sirens to 120 decibels", "To send an email to the company superintendent ashore", "To extend the time delay before the main engine shuts down"],
    "exp": "If the engine room is empty, a local alarm is useless. The system must forcefully wake up the Duty Engineer in their cabin and notify the navigating officer on the bridge that a machine is failing.",
    "cat": "UMS",
    "id": "T09S_394"
  },
  {
    "q": "What is the 'Dead Man Alarm' (Personnel Alarm) used for during UMS operation?",
    "a": "It ensures the safety of an engineer entering the engine room alone; they must reset a timer every ~15 minutes, otherwise a general alarm sounds to indicate they may be injured or unconscious",
    "opts": ["It ensures the safety of an engineer entering the engine room alone; they must reset a timer every ~15 minutes, otherwise a general alarm sounds to indicate they may be injured or unconscious", "It automatically seals the watertight doors if smoke is detected", "It monitors the ship's hull for breaches using water sensors", "It sounds when the ship's main engine completely stops"],
    "exp": "If an engineer goes down at 3 AM to check an alarm and slips, hits their head, or is overcome by gas, nobody would know. The Dead Man alarm acts as a failsafe. If they don't push the flashing reset button on the wall every 15 mins, the bridge is alerted to send rescue.",
    "cat": "UMS",
    "id": "T09S_395"
  },
  {
    "q": "Before switching the engine room to UMS mode at the end of the working day, what physical action is required by the engineering team?",
    "a": "A comprehensive physical patrol/round of the engine room to check for leaks, strange noises, fire hazards, and secure loose gear",
    "opts": ["Manually blowing down the boiler glass twice", "A comprehensive physical patrol/round of the engine room to check for leaks, strange noises, fire hazards, and secure loose gear", "Shutting off all ventilation fans to save power", "Turning off the main switchboard and switching to batteries"],
    "exp": "Computers can't smell burning insulation or see a tiny oil drip. A meticulous human patrol ensures the plant is completely stable and safe before turning off the lights and handing control to the automation.",
    "cat": "UMS",
    "id": "T09S_396"
  },
  {
    "q": "What is the function of the 'Duty Selector Switch' on the main alarm panel?",
    "a": "It dictates which specific engineer's cabin will receive the UMS alarms for that particular night/watch",
    "opts": ["It selects whether the ship runs on HFO or MGO", "It shifts control of the steering gear from the bridge to the engine room", "It chooses which generator will act as the standby unit", "It dictates which specific engineer's cabin will receive the UMS alarms for that particular night/watch"],
    "exp": "Only one engineer is 'on call' at night to allow the others to rest properly. The selector switch routes all the buzzers and flashing lights exclusively to the cabin of the 2nd, 3rd, or 4th Engineer depending on the duty roster.",
    "cat": "UMS",
    "id": "T09S_397"
  },
  {
    "q": "Under SOLAS UMS regulations, what is the strict requirement for the Fire Detection System?",
    "a": "It must rapidly detect fire in any part of the machinery space, sound an audible and visual alarm distinct from any other system, and indicate the exact location on the bridge and in the cabins",
    "opts": ["It must automatically release CO2 into the engine room instantly upon detecting smoke", "It must rapidly detect fire in any part of the machinery space, sound an audible and visual alarm distinct from any other system, and indicate the exact location on the bridge and in the cabins", "It only needs to monitor the area directly above the main engine", "It must automatically steer the ship into the wind to blow smoke away"],
    "exp": "An engine room fire can destroy a ship in minutes. If nobody is down there, the sensors are the only defense. The fire alarm must sound completely different (usually a continuous bell) from a normal machinery alarm (which might just be a low water tank).",
    "cat": "UMS",
    "id": "T09S_398"
  },
  {
    "q": "What happens if the Duty Engineer does not acknowledge an extended alarm in their cabin within a specified time (e.g., 2 to 3 minutes)?",
    "a": "The system automatically escalates the alarm, sounding the General Engineers' Alarm to wake up the Chief Engineer and all other engineering staff",
    "opts": ["The system triggers the ship's abandon-ship protocol", "The system automatically shuts down the main engine to prevent damage", "The system automatically escalates the alarm, sounding the General Engineers' Alarm to wake up the Chief Engineer and all other engineering staff", "The system assumes the fault cleared itself and deletes the alarm"],
    "exp": "If the duty engineer sleeps through the alarm or collapses, the fault remains unresolved. The system escalates the alarm to the entire department (and often the bridge) to ensure someone responds to the emergency.",
    "cat": "UMS",
    "id": "T09S_399"
  },
  {
    "q": "Under UMS rules, what MUST happen if the running auxiliary generator suddenly fails and causes a blackout?",
    "a": "The automation system must automatically detect the blackout, start the standby generator, synchronize (if needed), close the breaker, and sequentially restart all essential pumps within 45 seconds",
    "opts": ["The ship drops anchor automatically", "The duty engineer has 15 minutes to manually reach the engine room and restore power", "The emergency generator takes over propulsion duties", "The automation system must automatically detect the blackout, start the standby generator, synchronize (if needed), close the breaker, and sequentially restart all essential pumps within 45 seconds"],
    "exp": "Because nobody is in the engine room to press 'Start', the Power Management System (PMS) must be sophisticated enough to recover from a complete blackout autonomously and flawlessly within the 45-second SOLAS window.",
    "cat": "UMS",
    "id": "T09S_400"
  },
  {
    "q": "What is the requirement for 'Standby Pumps' (e.g., Main Lube Oil, Jacket Cooling Water) during UMS operation?",
    "a": "If the running pump loses pressure, the standby pump must automatically start and assume the load without human intervention",
    "opts": ["They are mechanically linked to the main engine shaft", "If the running pump loses pressure, the standby pump must automatically start and assume the load without human intervention", "They must be manually tested by the duty engineer every 4 hours", "They must run simultaneously with the main pumps at 50% capacity"],
    "exp": "A failed lube oil pump will destroy the main engine in seconds. The automation monitors the discharge pressure; if it drops below the setpoint, it instantly fires the contactor for the standby pump to save the engine, and sends an alarm to the cabin.",
    "cat": "UMS",
    "id": "T09S_401"
  },
  {
    "q": "Why are High-Pressure fuel pipes on UMS vessels uniquely mandated to be 'double-jacketed' (sheathed)?",
    "a": "To capture high-pressure fuel spray if the inner pipe bursts, draining it safely into an alarm tank instead of spraying atomized fuel onto hot exhaust pipes and causing a massive fire",
    "opts": ["To capture high-pressure fuel spray if the inner pipe bursts, draining it safely into an alarm tank instead of spraying atomized fuel onto hot exhaust pipes and causing a massive fire", "To prevent the fuel from freezing in cold climates", "To electrically insulate the fuel from the engine grounding", "To provide structural support to the engine block"],
    "exp": "Fuel is injected at 600-1000 bar. A pinhole leak creates a mist of explosive fuel. Without a human to see it, it would drift onto the 400\u00b0C exhaust manifold and ignite. The outer steel jacket catches the leak and routes it to a float switch, triggering a 'Fuel Leak Alarm'.",
    "cat": "UMS",
    "id": "T09S_402"
  },
  {
    "q": "What is the procedure for transferring from UMS mode to a manned watch (e.g., prior to entering a busy port or channel)?",
    "a": "The watchkeeping engineers enter the engine room, conduct a full patrol, transfer control from the Bridge to the ECR, and log the exact time the ER becomes 'Manned'",
    "opts": ["Turn off the alarm system completely", "Press the emergency stop on the Dead Man alarm", "Stop the main engine and restart it manually", "The watchkeeping engineers enter the engine room, conduct a full patrol, transfer control from the Bridge to the ECR, and log the exact time the ER becomes 'Manned'"],
    "exp": "Maneuvering in a port is high-risk. The engine room must be fully manned. The engineers take physical control, ensuring they are present to manually bypass or fix any system that might suddenly fail while the pilot is docking the ship.",
    "cat": "UMS",
    "id": "T09S_403"
  },
  {
    "q": "According to SOLAS, how many levels of alarms must exist on the bridge of a UMS vessel?",
    "a": "Alarms must be prioritized; a 'General Machinery Alarm' (yellow/amber) for non-critical faults, and distinct 'Slowdown' or 'Shutdown' alarms (red) for severe engine threats",
    "opts": ["A voice-synthesizer that reads the alarm text over the PA system", "Alarms must be prioritized; a 'General Machinery Alarm' (yellow/amber) for non-critical faults, and distinct 'Slowdown' or 'Shutdown' alarms (red) for severe engine threats", "A separate digital readout for every single engine sensor", "Only one master alarm bell for all faults"],
    "exp": "Navigating officers are not engineers. They don't need to know that 'Purifier #2 is vibrating'. They just get a 'Machinery Alarm' light. But they MUST know instantly if the 'Main Engine is Shutting Down' so they can steer the ship away from rocks.",
    "cat": "UMS",
    "id": "T09S_404"
  },
  {
    "q": "What is the function of the 'Bridge Override' (or Chief Engineer's Override) regarding a Main Engine auto-shutdown?",
    "a": "In a severe navigational emergency (e.g., imminent collision), the bridge can activate an override switch that forcefully blocks the automation from shutting down the main engine, intentionally sacrificing the engine to save the ship",
    "opts": ["It forces the main engine into reverse instantly", "In a severe navigational emergency (e.g., imminent collision), the bridge can activate an override switch that forcefully blocks the automation from shutting down the main engine, intentionally sacrificing the engine to save the ship", "It bypasses the ship's fire alarms to prevent panic", "It allows the bridge to steer the ship from the engine room"],
    "exp": "If the LO pressure fails, the computer will shut the engine off to save it. But if the ship is 100 meters from crashing into a pier, the Captain will flick the override. The engine will run without oil and destroy itself, but it will provide the thrust needed to avoid sinking the ship.",
    "cat": "UMS",
    "id": "T09S_405"
  },
  {
    "q": "What specifically must an ETO check regarding the Uninterruptible Power Supply (UPS) supporting the UMS automation?",
    "a": "That the batteries are healthy, free of corrosion, and possess sufficient capacity to power the alarm and monitoring systems for at least 30 minutes during a total blackout",
    "opts": ["That it runs on diesel fuel", "That it can provide 440V to the bow thruster", "That the batteries are healthy, free of corrosion, and possess sufficient capacity to power the alarm and monitoring systems for at least 30 minutes during a total blackout", "That the UPS connects directly to the ship's internet"],
    "exp": "If the ship blacks out, the computers running the ship must stay alive. The UPS battery bank guarantees that the ECR screens, fire alarms, and internal communications work flawlessly while the engineers battle in the dark to restore power.",
    "cat": "UMS",
    "id": "T09S_406"
  },
  {
    "q": "If a UMS vessel suffers a failure in its primary fire detection panel, what is the mandatory immediate consequence?",
    "a": "The vessel instantly loses its UMS status; engineers must immediately begin standing continuous 24-hour physical watches in the engine room until it is repaired",
    "opts": ["The vessel instantly loses its UMS status; engineers must immediately begin standing continuous 24-hour physical watches in the engine room until it is repaired", "The CO2 system is placed on automatic release mode", "The duty engineer simply checks the engine room every 4 hours instead", "The ship must anchor immediately at sea"],
    "exp": "UMS is a legal privilege granted only when safety systems are 100% active. Without automatic fire sensors, an engine room fire would grow undetected until it breached the bulkheads. The crew MUST revert to manual human watchkeeping.",
    "cat": "UMS",
    "id": "T09S_407"
  },
  {
    "q": "What is 'CCTV' primarily used for in a UMS engine room?",
    "a": "To allow the bridge or duty engineer to visually monitor critical areas (like the main engine top, purifiers, or switchboard) remotely without physically entering the space",
    "opts": ["To record the crew's working hours automatically", "To provide entertainment for the off-duty crew", "To allow the bridge or duty engineer to visually monitor critical areas (like the main engine top, purifiers, or switchboard) remotely without physically entering the space", "To detect minor temperature fluctuations using thermal imaging"],
    "exp": "If a 'Main Engine Bilge High' alarm goes off, the duty engineer can look at the CCTV camera in their cabin. If they see a massive geyser of water spraying, they instantly know it's a severe emergency before even opening their door.",
    "cat": "UMS",
    "id": "T09S_408"
  },
  {
    "q": "Under UMS rules, what must the Bilge Pumping system be capable of doing automatically?",
    "a": "Detecting high water levels in the engine room bilges and triggering an alarm; on some ships, it may also automatically start the bilge pump to discharge through the OWS",
    "opts": ["Measuring the exact salt content of the bilge water", "Flooding the bilges to extinguish fires", "Pumping oil directly overboard without filtering", "Detecting high water levels in the engine room bilges and triggering an alarm; on some ships, it may also automatically start the bilge pump to discharge through the OWS"],
    "exp": "A ruptured seawater cooling pipe can flood the engine room in an hour. High-level float switches in the bilge wells are critical UMS sensors that warn the duty engineer of catastrophic flooding long before the water reaches the electric motors.",
    "cat": "UMS",
    "id": "T09S_409"
  },
  {
    "q": "Why do UMS alarm panels feature 'Grouped Alarms' on the bridge panel?",
    "a": "To simplify information for the navigating officers; instead of 500 individual technical alarms, they see grouped summaries like 'Power Failure', 'Steering Fault', or 'Propulsion Fault'",
    "opts": ["To prevent the alarms from logging in the VDR (Voyage Data Recorder)", "To save money on wiring and display lights", "To simplify information for the navigating officers; instead of 500 individual technical alarms, they see grouped summaries like 'Power Failure', 'Steering Fault', or 'Propulsion Fault'", "Because the bridge panel is not legally required to work"],
    "exp": "A deck officer doesn't need to know 'Cylinder #4 Exhaust Temp High'. They just need to know 'Main Engine Fault - Slowdown Pending'. Grouping condenses complex engineering data into simple, actionable navigational warnings.",
    "cat": "UMS",
    "id": "T09S_410"
  },
  {
    "q": "What is the function of the 'Call Engineer' button located on the bridge of a UMS vessel?",
    "a": "It allows the navigating officer to manually trigger the alarm system in the Duty Engineer's cabin to request immediate technical assistance",
    "opts": ["It engages the emergency steering gear", "It allows the navigating officer to manually trigger the alarm system in the Duty Engineer's cabin to request immediate technical assistance", "It automatically starts the standby generator", "It shuts down the main engine from the bridge"],
    "exp": "If the Captain sees heavy ice or feels strange vibrations that haven't triggered an automatic computer alarm yet, they press this button to forcefully wake up the duty engineer and get a human down below to investigate.",
    "cat": "UMS",
    "id": "T09S_411"
  },
  {
    "q": "How does the Power Management System (PMS) ensure 'N-1 Redundancy' is maintained during UMS operation?",
    "a": "If the ship's load increases to the point where the running generator is >85% loaded, the PMS automatically starts and parallels a standby generator before an overload occurs",
    "opts": ["It routinely trips the main breaker to test the emergency generator", "It forces the ship to run on only one generator at all times to save fuel", "If the ship's load increases to the point where the running generator is >85% loaded, the PMS automatically starts and parallels a standby generator before an overload occurs", "It automatically turns off the air conditioning during dinner time"],
    "exp": "UMS requires the ship to predict failures. If reefers turn on and the generator approaches 90% load, the PMS (without being told) fires up Gen #2, syncs it, and splits the load. If load drops back down, it automatically stops Gen #2.",
    "cat": "UMS",
    "id": "T09S_412"
  },
  {
    "q": "What must the ETO do if an alarm sensor (e.g., a fuel pressure switch) becomes faulty and causes continuous, annoying false alarms at night?",
    "a": "Log the defect, inform the C/E, and 'Inhibit' or 'Block' that specific channel in the software, ensuring a physical gauge or alternative method is monitored until repairs are made",
    "opts": ["Ignore it; false alarms are part of ship life", "Cut the wire to the siren to silence the entire panel", "Turn off the UMS system entirely", "Log the defect, inform the C/E, and 'Inhibit' or 'Block' that specific channel in the software, ensuring a physical gauge or alternative method is monitored until repairs are made"],
    "exp": "Alarm fatigue is deadly. If a broken sensor rings every 5 minutes, the engineer will eventually start ignoring all alarms (the 'Boy Who Cried Wolf'). The specific faulty channel must be logically isolated in the computer so genuine alarms can still be trusted.",
    "cat": "UMS",
    "id": "T09S_413"
  },
  {
    "q": "What is the specific SOLAS requirement regarding communication between the Engine Control Room (ECR) and the Bridge?",
    "a": "There must be at least two independent means of communication, one of which must be a reliable, hardwired direct voice link (like a sound-powered phone or direct intercom)",
    "opts": ["They must communicate strictly via VHF radio", "Communication is only required when the ship is in port", "They use a pneumatic tube system to send written notes", "There must be at least two independent means of communication, one of which must be a reliable, hardwired direct voice link (like a sound-powered phone or direct intercom)"],
    "exp": "If the ship blacks out and catches fire, standard telephones (PABX) will die. A sound-powered phone uses the acoustic energy of the user's voice to generate tiny electrical currents, guaranteeing a working communication line between the bridge and ECR in a total disaster.",
    "cat": "UMS",
    "id": "T09S_414"
  },
  {
    "q": "Why do UMS fire detection systems use 'Cross-Zoning' (or coincidence detection) in critical areas like the purifier room?",
    "a": "It requires TWO independent smoke/heat detectors to trigger simultaneously before activating automatic fire suppression (like water mist), preventing a single faulty sensor from causing massive water damage",
    "opts": ["It splits the engine room into exactly four zones", "It requires a fire to cross a physical line painted on the deck before alarming", "It requires TWO independent smoke/heat detectors to trigger simultaneously before activating automatic fire suppression (like water mist), preventing a single faulty sensor from causing massive water damage", "It automatically cross-connects the fire pumps to the ballast system"],
    "exp": "If a single smoke detector glitches and thinks there is a fire, it will sound an alarm. But it will NOT dump thousands of liters of high-pressure water mist onto running electrical equipment unless a *second* nearby detector also confirms the fire is real.",
    "cat": "UMS",
    "id": "T09S_415"
  },
  {
    "q": "If a 'Low Level' alarm triggers on the Main Engine Jacket Water Expansion Tank, what secondary, highly dangerous fault might this actually indicate?",
    "a": "A cracked cylinder liner or blown O-ring, causing the cooling water to leak internally directly into the engine's combustion chamber or crankcase",
    "opts": ["The fuel is too hot, boiling the water away", "The fresh water generator is producing too much water", "The exhaust gas boiler is over-pressurized", "A cracked cylinder liner or blown O-ring, causing the cooling water to leak internally directly into the engine's combustion chamber or crankcase"],
    "exp": "Cooling water runs in a closed loop. It shouldn't disappear. If the tank level drops rapidly, the water is going somewhere. If it's leaking into the cylinder, it will destroy the lubrication, crack the piston, or cause a hydraulic lock. This is a critical UMS alarm.",
    "cat": "UMS",
    "id": "T09S_416"
  },
  {
    "q": "Under what circumstance must the UMS 'Engineer's Call' alarm be sounded manually by the Duty Engineer?",
    "a": "When the Duty Engineer enters the engine room, finds a fault they cannot handle alone, and requires the immediate assistance of the rest of the engineering team",
    "opts": ["When it is time for coffee break", "When the ship is safely moored alongside", "When transferring fuel between identical tanks", "When the Duty Engineer enters the engine room, finds a fault they cannot handle alone, and requires the immediate assistance of the rest of the engineering team"],
    "exp": "The duty engineer goes down to check an alarm. They find a massive fuel pipe burst spraying everywhere. They don't have time to run up to cabins or dial phones. They hit the massive 'Call' button on the wall, which rings bells in every engineer's cabin simultaneously.",
    "cat": "UMS",
    "id": "T09S_417"
  },
  {
    "q": "What is the primary function of an 'Override Switch' for automatic shutdowns during critical maneuvering (e.g., transiting a canal)?",
    "a": "It allows the Master or Chief Engineer to intentionally block the computer from shutting down the main engine for non-catastrophic faults, accepting engine damage to maintain navigational control of the vessel",
    "opts": ["It forces the generators to run at 120% capacity", "It automatically overrides the steering gear and switches to autopilot", "It allows the computer to override the Chief Engineer's manual commands", "It allows the Master or Chief Engineer to intentionally block the computer from shutting down the main engine for non-catastrophic faults, accepting engine damage to maintain navigational control of the vessel"],
    "exp": "If the ship is passing another ship in a narrow canal and the cooling water gets slightly too hot, the computer wants to shut the engine down to save the engine. A shutdown means losing steering and colliding. The override says 'keep running, let the engine burn, save the ship'.",
    "cat": "UMS",
    "id": "T09S_418"
  },
  {
    "q": "How is 'Remote Valve Control' achieved in modern UMS automation systems?",
    "a": "Via a mimic screen on the computer (HMI) that sends digital commands to a PLC, which energizes electro-hydraulic or electro-pneumatic solenoid valves located physically on the massive piping valves",
    "opts": ["By using extremely long steel cables connecting the bridge to the engine room", "By using voice commands to a robotic assistant", "Via a mimic screen on the computer (HMI) that sends digital commands to a PLC, which energizes electro-hydraulic or electro-pneumatic solenoid valves located physically on the massive piping valves", "By manually walking to the valve and turning a giant handwheel"],
    "exp": "To allow one person in the ECR to control the whole ship, massive butterfly valves (e.g., ballast or cooling water) are fitted with pneumatic or hydraulic actuators. The ECR computer clicks a tiny 24V solenoid, which releases 100 bar of hydraulic pressure to effortlessly snap the giant valve open.",
    "cat": "UMS",
    "id": "T09S_419"
  },
  {
    "q": "What is the operational consequence if the main PLC (Programmable Logic Controller) processor governing the UMS alarm system suffers a fatal hardware crash?",
    "a": "All remote monitoring, automatic standby starts, and alarm routing will fail; the crew must instantly establish a continuous manual watch in the engine room, and revert to reading physical gauges",
    "opts": ["The engine will run permanently at full speed", "The ship will automatically drop anchor", "All remote monitoring, automatic standby starts, and alarm routing will fail; the crew must instantly establish a continuous manual watch in the engine room, and revert to reading physical gauges", "The emergency generator will power the PLC back up instantly"],
    "exp": "The PLC is the brain. If it dies, the ship is blind and deaf. There are no alarms, no auto-starts, no remote valve controls. The engineers must immediately go down, take local manual control of all pumps and engines, and stay there 24/7.",
    "cat": "UMS",
    "id": "T09S_420"
  },
  {
    "q": "Why is the use of 'Flame Detectors' (IR/UV) preferred over smoke detectors in the area directly above the main engine fuel pumps in a UMS engine room?",
    "a": "Flame detectors instantly 'see' the intense radiation of an open fire, responding in milliseconds, whereas smoke detectors require smoke to physically drift up and fill the chamber, which is too slow for explosive fuel fires",
    "opts": ["Flame detectors instantly 'see' the intense radiation of an open fire, responding in milliseconds, whereas smoke detectors require smoke to physically drift up and fill the chamber, which is too slow for explosive fuel fires", "Flame detectors also measure the temperature of the cooling water", "Flame detectors are much cheaper to install", "Smoke detectors are illegal in the engine room"],
    "exp": "If a high-pressure fuel line bursts and ignites on the hot exhaust, it creates an instant, raging fireball. You don't have 30 seconds to wait for smoke to reach the ceiling. An optical IR/UV flame detector sees the flash of light and triggers the alarm instantaneously.",
    "cat": "UMS",
    "id": "T09S_421"
  },
  {
    "q": "What strict protocol must an ETO follow before bypassing or 'forcing' an input signal on the UMS PLC during troubleshooting?",
    "a": "Obtain explicit authorization from the Chief Engineer, record the bypass in the official logbook, physically tag the panel, and NEVER leave the engine room until the bypass is removed and normal logic restored",
    "opts": ["It is a normal daily task and requires no special protocol", "Send an email to the manufacturer for a software unlock code", "Turn off the Dead Man alarm first", "Obtain explicit authorization from the Chief Engineer, record the bypass in the official logbook, physically tag the panel, and NEVER leave the engine room until the bypass is removed and normal logic restored"],
    "exp": "Forcing a PLC input (e.g., telling the computer the LO pressure is '1', even when the sensor is broken) disables the safety system. If the pump actually fails while you have the computer tricked, the engine will be destroyed because the computer still thinks everything is fine. Bypasses are high-risk.",
    "cat": "UMS",
    "id": "T09S_422"
  },
  {
    "q": "What is the critical difference between a Main Engine 'Slow-Down' and a 'Shut-Down' (Trip)?",
    "a": "A Slow-Down automatically drops the engine RPM to a safe idling speed to prevent damage while maintaining steering control; a Shut-Down instantly cuts all fuel, stopping the engine completely",
    "opts": ["There is no difference; they both actuate the same pneumatic valve", "A Slow-Down is manually triggered by the bridge; a Shut-Down is triggered by the ECR", "A Slow-Down automatically drops the engine RPM to a safe idling speed to prevent damage while maintaining steering control; a Shut-Down instantly cuts all fuel, stopping the engine completely", "A Slow-Down cuts fuel to half the cylinders; a Shut-Down cuts air to all cylinders"],
    "exp": "If a cylinder exhaust gets a bit hot, the computer orders a 'Slow-Down' (e.g., from 90 RPM to 40 RPM). This cools the engine but keeps the propeller turning so the ship can steer. If the main lubricating oil pressure drops to zero, the computer orders a 'Shut-Down', killing the engine instantly to stop the bearings from welding together.",
    "cat": "MAINENGINE",
    "id": "T09S_423"
  },
  {
    "q": "Which of the following conditions will almost universally trigger an IMMEDIATE automatic 'Shut-Down' (Trip) of the Main Engine?",
    "a": "Main Lube Oil Low-Low Pressure, Thrust Bearing High Temperature, and Overspeed",
    "opts": ["High Exhaust Gas Temperature, Low Starting Air Pressure, and High Bilge Level", "Jacket Water High Temperature, Scavenge Air High Temperature, and Low Fuel Level", "Loss of GPS signal, Radar failure, and Gyrocompass error", "Main Lube Oil Low-Low Pressure, Thrust Bearing High Temperature, and Overspeed"],
    "exp": "Shutdowns are reserved for catastrophic mechanical threats that will destroy the engine in seconds. No oil = destroyed bearings. Overspeed = exploding flywheel. Thrust bearing melting = the propeller shaft ripping out the back of the engine.",
    "cat": "MAINENGINE",
    "id": "T09S_424"
  },
  {
    "q": "What is the function of the 'Thrust Bearing' on a ship's Main Engine, and why is its temperature so heavily monitored?",
    "a": "It absorbs the massive forward push of the propeller and transfers it to the ship's hull; if it overheats and fails, the propeller shaft will push through the engine block, destroying it",
    "opts": ["It spins the turbocharger at high speeds; if it fails, the engine loses air", "It absorbs the massive forward push of the propeller and transfers it to the ship's hull; if it overheats and fails, the propeller shaft will push through the engine block, destroying it", "It absorbs the vertical vibrations of the pistons", "It generates the electrical power for the shaft generator"],
    "exp": "The propeller pushes water backward, which pushes the shaft forward with hundreds of tons of force. The thrust bearing takes this force and pushes the ship forward. If the white-metal bearing pads melt, the shaft slides forward, smashing the crankshaft into the engine casing.",
    "cat": "MAINENGINE",
    "id": "T09S_425"
  },
  {
    "q": "During a Main Engine 'Slow-Down' caused by High Jacket Water Temperature, what is the correct action for the engineer?",
    "a": "Acknowledge the alarm, manually verify the high temperature, investigate the cooling water system (pumps/valves), and DO NOT override the slowdown unless the ship is in immediate navigational peril",
    "opts": ["Shut down the engine immediately and open the crankcase doors", "Switch the fuel supply to MGO and increase the RPM", "Instantly press the Override button to bring the speed back up to Full Ahead", "Acknowledge the alarm, manually verify the high temperature, investigate the cooling water system (pumps/valves), and DO NOT override the slowdown unless the ship is in immediate navigational peril"],
    "exp": "The slowdown is doing its job: saving the engine from melting its cylinder liners. The engineer must find out WHY the water is hot (did a pump fail? is a valve closed?) while the engine safely idles.",
    "cat": "MAINENGINE",
    "id": "T09S_426"
  },
  {
    "q": "What is a 'Scavenge Fire' in a 2-stroke Main Engine, and what alarm alerts the crew to it?",
    "a": "Accumulated oily sludge ignites inside the scavenge air manifold; it triggers a 'High Scavenge Air Temperature' alarm on the specific cylinder involved",
    "opts": ["The lube oil sump catches fire; triggers the OMD alarm", "Accumulated oily sludge ignites inside the scavenge air manifold; it triggers a 'High Scavenge Air Temperature' alarm on the specific cylinder involved", "The fuel injectors catch fire on top of the engine; triggers a general fire alarm", "The exhaust gas boiler catches fire; triggers a high funnel temp alarm"],
    "exp": "The scavenge space (under the piston) fills with pressurized air from the turbocharger. If unburnt fuel and cylinder oil drip down, they form sludge. A spark blowing past worn piston rings will ignite this sludge, causing a roaring fire inside the air manifold.",
    "cat": "MAINENGINE",
    "id": "T09S_427"
  },
  {
    "q": "What is the typical method of extinguishing a severe Scavenge Fire?",
    "a": "Slow down/Stop the engine, cut off the fuel to the affected cylinder, and activate the fixed fire extinguishing system (steam smothering or CO2) injected directly into the scavenge manifold",
    "opts": ["Open the scavenge doors and spray it with a high-pressure water hose", "Increase the engine speed to blow the fire out the exhaust stack", "Slow down/Stop the engine, cut off the fuel to the affected cylinder, and activate the fixed fire extinguishing system (steam smothering or CO2) injected directly into the scavenge manifold", "Run the turning gear rapidly to deprive the fire of oxygen"],
    "exp": "You must starve the fire of fuel and oxygen. Stopping the engine stops the fresh air blast from the turbocharger. Injecting steam directly into the sealed scavenge box smothers the flames safely without causing thermal shock cracking (which cold water would do).",
    "cat": "MAINENGINE",
    "id": "T09S_428"
  },
  {
    "q": "What does a 'High Exhaust Gas Temperature Deviation' alarm mean?",
    "a": "The computer calculates the average exhaust temperature of all cylinders; if one specific cylinder is significantly hotter or colder than that average (e.g., \u00b150\u00b0C), it triggers the deviation alarm",
    "opts": ["The exhaust gas is too cold, causing acid condensation", "The computer calculates the average exhaust temperature of all cylinders; if one specific cylinder is significantly hotter or colder than that average (e.g., \u00b150\u00b0C), it triggers the deviation alarm", "The funnel is smoking too heavily due to poor fuel", "The turbocharger is spinning too fast, generating excess heat"],
    "exp": "If the engine load is high, ALL cylinders will run hot (e.g., 400\u00b0C). This is normal. But if 5 cylinders are 400\u00b0C, and cylinder #3 is 480\u00b0C, there is a specific mechanical fault (bad injector, leaking exhaust valve) on cylinder #3. Deviation catches local faults regardless of engine load.",
    "cat": "MAINENGINE",
    "id": "T09S_429"
  },
  {
    "q": "How does the 'Turning Gear Interlock' protect the Main Engine?",
    "a": "It uses a microswitch to physically break the starting air control circuit; the engine absolutely cannot receive starting air if the turning gear is mechanically engaged with the flywheel",
    "opts": ["It uses a microswitch to physically break the starting air control circuit; the engine absolutely cannot receive starting air if the turning gear is mechanically engaged with the flywheel", "It automatically turns the engine slowly to cool it down after stopping", "It locks the propeller shaft in place while the ship is in drydock", "It engages the emergency generator if the main engine stalls"],
    "exp": "If 30-bar starting air was injected into the massive cylinders while the tiny electric turning gear motor was meshed with the flywheel teeth, the massive explosive force would instantly shatter the gear teeth and destroy the motor.",
    "cat": "MAINENGINE",
    "id": "T09S_430"
  },
  {
    "q": "What is the 'Wrong Way' alarm on a Main Engine telegraph system?",
    "a": "It sounds a loud, continuous alarm on the bridge and ECR if the Bridge telegraph commands 'Ahead', but the engine actually starts rotating 'Astern' (or vice versa)",
    "opts": ["It triggers if the ship deviates from its programmed GPS course", "It sounds a loud, continuous alarm on the bridge and ECR if the Bridge telegraph commands 'Ahead', but the engine actually starts rotating 'Astern' (or vice versa)", "It sounds if the steering gear reaches the physical hard-over limit", "It alarms if the ETO wires the turning gear backwards"],
    "exp": "If the captain wants to dock and rings 'Astern', but a pneumatic reversing valve sticks and the engine fires 'Ahead', the ship will smash into the pier. The 'Wrong Way' alarm detects the mismatch between commanded direction and actual shaft rotation, demanding immediate shutdown.",
    "cat": "MAINENGINE",
    "id": "T09S_431"
  },
  {
    "q": "How is a traditional 2-stroke Main Engine physically reversed (switched from Ahead to Astern)?",
    "a": "Pneumatic air cylinders shift the camshaft axially, sliding a different set of 'Astern' fuel and exhaust cams under the follower rollers, altering the engine's mechanical timing",
    "opts": ["Pneumatic air cylinders shift the camshaft axially, sliding a different set of 'Astern' fuel and exhaust cams under the follower rollers, altering the engine's mechanical timing", "By electrically reversing the phase sequence of the main generator", "By using a massive mechanical reduction gearbox to shift into reverse gear", "By injecting fuel at the bottom of the piston stroke instead of the top"],
    "exp": "Large direct-drive marine diesels do not have gearboxes. To go backward, the engine itself must spin backward. The automation shifts the massive camshaft longitudinally, bringing a set of cams profiled for reverse timing into play, and then hits the engine with starting air to push it backward.",
    "cat": "MAINENGINE",
    "id": "T09S_432"
  },
  {
    "q": "What is a modern 'Electronic' Main Engine (like the ME-C or RT-flex series)?",
    "a": "It completely eliminates the heavy mechanical camshaft; fuel injection and exhaust valve actuation are handled purely by high-pressure hydraulics controlled precisely by electronic computers (PLCs)",
    "opts": ["It uses electronic spark plugs to ignite the heavy fuel oil", "It uses massive electric motors to turn the propeller instead of diesel combustion", "It runs exclusively on hydrogen fuel cells", "It completely eliminates the heavy mechanical camshaft; fuel injection and exhaust valve actuation are handled purely by high-pressure hydraulics controlled precisely by electronic computers (PLCs)"],
    "exp": "Traditional engines use a spinning camshaft to physically push pumps to inject fuel at the right moment. Electronic (Cam-less) engines use a 200+ bar common-rail hydraulic oil system. The computer simply opens a tiny solenoid valve, which releases hydraulic pressure to inject fuel with microscopic, infinitely variable precision.",
    "cat": "MAINENGINE",
    "id": "T09S_433"
  },
  {
    "q": "In an electronic engine (like MAN B&W ME), what is the function of the 'Crank Angle Sensor' (Encoder)?",
    "a": "It provides the computer with the absolute, microscopic angular position of the crankshaft (e.g., 0.1 degree accuracy), allowing the software to perfectly time the fuel injection without a mechanical camshaft",
    "opts": ["It monitors the temperature of the main bearings", "It detects explosive oil mist in the crankcase", "It measures the torque being applied to the propeller", "It provides the computer with the absolute, microscopic angular position of the crankshaft (e.g., 0.1 degree accuracy), allowing the software to perfectly time the fuel injection without a mechanical camshaft"],
    "exp": "Because there are no physical cams to hit the fuel pumps at Top Dead Center, the computer MUST know exactly where the piston is. The encoder acts as the digital eye, mapping out 360 degrees of rotation so the computer knows the exact millisecond to open the electronic fuel injector.",
    "cat": "MAINENGINE",
    "id": "T09S_434"
  },
  {
    "q": "What does 'Load Programming' (or Thermal Load Control) do in a Main Engine control system?",
    "a": "It artificially restricts how fast the engine speed/load can be increased (e.g., capping it at +1 RPM per minute), preventing severe thermal cracking of the cold cylinder liners and heads",
    "opts": ["It automatically turns on the galley ovens to increase electrical load", "It artificially restricts how fast the engine speed/load can be increased (e.g., capping it at +1 RPM per minute), preventing severe thermal cracking of the cold cylinder liners and heads", "It forces the engine to run at maximum speed to burn off carbon", "It limits the cargo weight the ship is allowed to load"],
    "exp": "If the Captain slams the telegraph from 'Dead Slow' to 'Full Ahead', dumping massive amounts of fuel into a relatively cool engine creates a sudden explosion of heat. The metal expands unevenly and cracks. The Load Program overrides the telegraph, slowly stepping the speed up over 30-60 minutes to let the metal expand safely.",
    "cat": "MAINENGINE",
    "id": "T09S_435"
  },
  {
    "q": "What is the function of the 'Alpha Lubricator' or electronic cylinder lubricator system?",
    "a": "It electronically injects precisely timed, microscopic amounts of highly alkaline lubricating oil directly onto the cylinder liner exactly as the piston rings pass by, reducing wear and oil consumption",
    "opts": ["It automatically greases the external crane bearings", "It sprays cooling oil onto the underside of the piston crown", "It filters the main sump oil to 5 microns", "It electronically injects precisely timed, microscopic amounts of highly alkaline lubricating oil directly onto the cylinder liner exactly as the piston rings pass by, reducing wear and oil consumption"],
    "exp": "Old mechanical lubricators just constantly dripped oil into the cylinder, wasting expensive oil. Electronic lubricators use computer timing (based on the crank encoder) to squirt oil exactly into the piston ring pack at the perfect millisecond, drastically cutting chemical waste.",
    "cat": "MAINENGINE",
    "id": "T09S_436"
  },
  {
    "q": "If the Main Engine 'Starting Air Low Pressure' alarm sounds (e.g., at 20 bar), what operational problem is imminent?",
    "a": "The engine may fail to crank fast enough to achieve the compression heat required to ignite the diesel fuel, resulting in a failed start",
    "opts": ["The turbocharger will stall and cause black smoke", "The air compressors will explode due to overpressure", "The engine will run entirely on compressed air, wasting fuel", "The engine may fail to crank fast enough to achieve the compression heat required to ignite the diesel fuel, resulting in a failed start"],
    "exp": "Diesel engines rely on high-speed compression to heat the air to 500\u00b0C so the injected fuel instantly ignites. If starting air drops below ~15-20 bar, the heavy pistons move too sluggishly. Heat escapes past the rings, the air stays cool, and the fuel simply sprays into the cylinder without igniting (a 'failed start').",
    "cat": "MAINENGINE",
    "id": "T09S_437"
  },
  {
    "q": "What is the extreme safety function of the physical 'Emergency Stop' button located on the bridge and ECR panels?",
    "a": "It completely bypasses all computers, PLCs, and normal logic, hard-wiring directly to a pneumatic or solenoid 'dump valve' that instantly cuts all fuel to the main engine",
    "opts": ["It sends an urgent email to the technical superintendent ashore", "It drops the ship's anchors automatically", "It slowly ramps the engine down over a period of 5 minutes to prevent thermal shock", "It completely bypasses all computers, PLCs, and normal logic, hard-wiring directly to a pneumatic or solenoid 'dump valve' that instantly cuts all fuel to the main engine"],
    "exp": "If the computer crashes and locks the fuel rack at 100%, you can't use the computer to stop the engine. The Emergency Stop is a raw, physical, hardwired electrical circuit. Pressing it physically vents the air or power holding the fuel linkage open, snapping the engine dead instantly.",
    "cat": "MAINENGINE",
    "id": "T09S_438"
  },
  {
    "q": "What condition triggers a 'Telegraph Mismatch' alarm?",
    "a": "When the Bridge moves the telegraph lever to a new command (e.g., Half Ahead), but the Engine Control Room lever has not been moved to match and acknowledge the command",
    "opts": ["When the engine burns more fuel than the telegraph calculation predicted", "When the telegraph loses its connection to the internet", "When the ship physically sails off the charted course", "When the Bridge moves the telegraph lever to a new command (e.g., Half Ahead), but the Engine Control Room lever has not been moved to match and acknowledge the command"],
    "exp": "The telegraph is the official legal communication device between the Captain and the Chief Engineer. When the Bridge rings an order, loud bells ring. They only stop ringing when the Engineer physically moves their lever to exactly match the Bridge's lever, proving they 'heard and understood' the command.",
    "cat": "MAINENGINE",
    "id": "T09S_439"
  },
  {
    "q": "What is 'Slow Turning' on a Main Engine, and why is it done just before departure?",
    "a": "Using a small blast of starting air to slowly rotate the engine ~1 revolution with indicator cocks open, ensuring no water/oil is trapped in the cylinders that could cause a hydraulic lock",
    "opts": ["Using a small blast of starting air to slowly rotate the engine ~1 revolution with indicator cocks open, ensuring no water/oil is trapped in the cylinders that could cause a hydraulic lock", "Spinning the turbocharger manually to clear out exhaust soot", "Rotating the engine backward to test the reversing pneumatic valves", "Running the engine on pure diesel oil to clean the injectors"],
    "exp": "After a long port stay, condensation or a leaking cooler might put a puddle of water on top of a piston. Water doesn't compress. If you hit it with 30-bar starting air, the piston hits the water and bends the steel connecting rod. Slow turning pushes the water harmlessly out the open indicator valves.",
    "cat": "MAINENGINE",
    "id": "T09S_440"
  },
  {
    "q": "How does an 'Air Distributor' sequence the starting air in a traditional Main Engine?",
    "a": "Driven by the camshaft, it routes pilot air sequentially to the individual starting valves on each cylinder exactly when that piston reaches slightly past Top Dead Center",
    "opts": ["It routes air to the turbocharger to spin it up before the engine fires", "Driven by the camshaft, it routes pilot air sequentially to the individual starting valves on each cylinder exactly when that piston reaches slightly past Top Dead Center", "It provides compressed air to the ship's horn automatically during fog", "It mixes high-pressure air directly with the heavy fuel oil to improve atomization"],
    "exp": "You can't just dump air into all 6 cylinders at once; they would fight each other. The air distributor is a rotating pneumatic manifold synced to the engine. It ensures the blast of 30-bar air only hits the piston that is currently in the perfect downward 'power stroke' position.",
    "cat": "MAINENGINE",
    "id": "T09S_441"
  },
  {
    "q": "What electrical component directly actuates the massive starting air valves during a remote engine start?",
    "a": "A small 24V DC solenoid valve opens, which allows pilot air pressure to flow and physically push open the massive, heavy-duty main starting air valve",
    "opts": ["A small 24V DC solenoid valve opens, which allows pilot air pressure to flow and physically push open the massive, heavy-duty main starting air valve", "A 440V massive electric motor attached to the valve stem", "A thermal bimetallic strip heats up and bends the valve open", "A piezoelectric crystal expands when voltage is applied"],
    "exp": "A tiny PLC computer chip cannot control a valve holding back 30 bar of explosive air. It uses a cascaded system: The computer outputs 24V -> opens a tiny pilot solenoid -> this lets 5 bar pilot air through -> which acts on a pneumatic piston to crush the heavy spring and open the massive 30-bar main air valve.",
    "cat": "MAINENGINE",
    "id": "T09S_442"
  },
  {
    "q": "What is the danger of a Main Starting Air Valve sticking open after the engine fires?",
    "a": "A 'Starting Air Line Explosion'; hot combustion gases blast backward through the stuck valve into the compressed air piping, mixing with oil vapor and detonating the pipe network",
    "opts": ["A 'Starting Air Line Explosion'; hot combustion gases blast backward through the stuck valve into the compressed air piping, mixing with oil vapor and detonating the pipe network", "The engine will instantly reverse direction and run backward", "The air compressor will run continuously until it burns out", "The cylinder will freeze due to the expanding compressed air"],
    "exp": "Once the engine fires, the cylinder pressure rockets to 150+ bar of roaring fire. The starting air pipe only holds 30 bar. If the starting valve jams open, the fire blows backwards into the air pipe. Air pipes always have traces of compressor lubricating oil in them. The hot fire ignites the oil vapor, blowing the air pipes apart.",
    "cat": "MAINENGINE",
    "id": "T09S_443"
  },
  {
    "q": "What physical safety device is fitted to the starting air manifold to protect against a Starting Air Line Explosion?",
    "a": "A bursting disc or flame arrestor mounted on the manifold, designed to blow out and safely vent the explosive pressure into the open engine room before the steel pipes shatter",
    "opts": ["A bursting disc or flame arrestor mounted on the manifold, designed to blow out and safely vent the explosive pressure into the open engine room before the steel pipes shatter", "A chemical foam injector that floods the air pipe instantly", "A massive check valve that slams shut and stops the engine", "A heavy-duty spring that clamps the air compressor shut"],
    "exp": "To prevent the heavy steel pipes from fragmenting like a bomb and killing the crew, a thin, engineered copper or brass 'bursting disc' is installed. It is designed to rupture at a specific pressure (e.g., 50 bar), acting as a sacrificial pressure relief valve.",
    "cat": "MAINENGINE",
    "id": "T09S_444"
  },
  {
    "q": "On a modern Main Engine, how is the Exhaust Valve typically actuated?",
    "a": "It is pushed open by high-pressure hydraulic oil (actuated by a cam or electronic solenoid) and forced closed by an 'Air Spring' (pneumatic pressure)",
    "opts": ["It is pushed open by high-pressure hydraulic oil (actuated by a cam or electronic solenoid) and forced closed by an 'Air Spring' (pneumatic pressure)", "It is opened by the force of the exhaust gases pushing against it", "It is driven exclusively by a series of pushrods and rocker arms", "It is opened and closed by massive steel mechanical coil springs"],
    "exp": "Old engines used massive steel springs to close exhaust valves. These springs were prone to breaking under the immense, continuous cyclic stress. Modern engines use an 'Air Spring'\u2014compressed air acts as an unbreakable, highly responsive cushion to snap the valve closed smoothly, while hydraulics force it open.",
    "cat": "MAINENGINE",
    "id": "T09S_445"
  },
  {
    "q": "What does the term 'Bumping Clearance' refer to in a Main Engine?",
    "a": "The microscopic physical gap between the top of the piston and the cylinder head when the piston is at absolute Top Dead Center (TDC)",
    "opts": ["The distance between the connecting rod and the crankcase wall", "The microscopic physical gap between the top of the piston and the cylinder head when the piston is at absolute Top Dead Center (TDC)", "The acceptable amount of play in the thrust bearing before it trips", "The air gap required for the Magnetic Pickup Unit sensor"],
    "exp": "If the main bearing or crosshead bearing wears down, the piston will sit slightly lower or travel slightly higher. If it travels too high, it will physically 'bump' into the cylinder head, destroying the engine. Measuring bumping clearance tracks bearing wear.",
    "cat": "MAINENGINE",
    "id": "T09S_446"
  },
  {
    "q": "What happens if a Main Engine is run with the Exhaust Gas Boiler (Economizer) completely dry (without water circulating)?",
    "a": "The intense heat of the exhaust gases (350\u00b0C+) can overheat the dry finned tubes, potentially igniting soot deposits and causing a catastrophic metal fire (iron fire) inside the funnel",
    "opts": ["The intense heat of the exhaust gases (350\u00b0C+) can overheat the dry finned tubes, potentially igniting soot deposits and causing a catastrophic metal fire (iron fire) inside the funnel", "The engine will run perfectly normally, but fuel consumption will increase", "The exhaust gas will condense into sulfuric acid, rusting the funnel instantly", "The turbocharger will lose pressure and stall"],
    "exp": "Water circulating through the exhaust boiler absorbs heat, keeping the steel tubes relatively cool. If the boiler is run dry, the tubes reach exhaust temperatures. The accumulated soot catches fire. If it gets hot enough, the steel tubes themselves will ignite and burn like sparklers.",
    "cat": "MAINENGINE",
    "id": "T09S_447"
  },
  {
    "q": "Why is the use of High-Pressure (HP) fuel pipe leak detection sensors legally mandated on all UMS ships?",
    "a": "Because the massive pressure (600+ bar) in the injection pipes can create a highly atomized, invisible fuel mist if a crack occurs; this mist is hyper-explosive if it touches a hot exhaust manifold",
    "opts": ["To prevent heavy fuel oil from dripping onto the crew walking below", "Because the massive pressure (600+ bar) in the injection pipes can create a highly atomized, invisible fuel mist if a crack occurs; this mist is hyper-explosive if it touches a hot exhaust manifold", "To ensure the ship is not over-billed by the bunker barge", "Because small leaks reduce the top speed of the ship by 10%"],
    "exp": "A high-pressure pinhole leak doesn't drip; it atomizes into a cloud. This cloud is highly flammable. By encasing the HP pipe in a secondary outer steel jacket, any leak is safely caught and drained down to a small float switch box, triggering an immediate alarm in the ECR before a fire can start.",
    "cat": "MAINENGINE",
    "id": "T09S_448"
  },
  {
    "q": "What happens if the 'Oil Mist Detector' (OMD) is bypassed or ignored during a bearing failure in the crankcase?",
    "a": "The failing bearing acts as an ignition source; the oil mist reaches its Lower Explosive Limit (LEL) and detonates, blowing the massive crankcase doors off and destroying the engine room",
    "opts": ["The oil mist will condense and heavily lubricate the upper cylinders", "The engine will safely stall as the oil pressure drops to zero", "The crankcase extraction fan will safely suck the explosion out of the funnel", "The failing bearing acts as an ignition source; the oil mist reaches its Lower Explosive Limit (LEL) and detonates, blowing the massive crankcase doors off and destroying the engine room"],
    "exp": "An overheated bearing (hot spot) vaporizes splashing oil into a thick, white, explosive cloud. If the engine keeps running, that hot bearing will eventually spark or glow red-hot, igniting the cloud. The resulting Crankcase Explosion is one of the most violent and deadly disasters on a ship.",
    "cat": "MAINENGINE",
    "id": "T09S_449"
  },
  {
    "q": "What physical safety feature is built into the massive Main Engine crankcase doors to mitigate the force of an internal explosion?",
    "a": "Spring-loaded 'Crankcase Relief Valves' on the doors that snap open to vent the explosive pressure wave safely, then instantly slam shut to prevent fresh oxygen from rushing back in and causing a secondary explosion",
    "opts": ["Spring-loaded 'Crankcase Relief Valves' on the doors that snap open to vent the explosive pressure wave safely, then instantly slam shut to prevent fresh oxygen from rushing back in and causing a secondary explosion", "Explosive bolts that entirely detach the doors into the engine room", "A water-mist system built into the door hinges", "Heavy lead weights that prevent the doors from ever opening under any pressure"],
    "exp": "The primary explosion blows the relief valves open, venting the pressure so the engine block doesn't shatter. The valves must slam shut immediately. If they stayed open, the vacuum created by the cooling gases would suck fresh air (oxygen) into the hot crankcase, triggering a massive, far deadlier secondary explosion.",
    "cat": "MAINENGINE",
    "id": "T09S_450"
  },
  {
    "q": "How does an ETO typically check the functionality of the Main Engine PT100 bearing temperature sensors without removing the massive engine covers?",
    "a": "By accessing the junction box on the side of the engine, disconnecting the 3-wire PT100 sensor, and measuring its resistance with a multimeter (should read approx 100 ohms at 0\u00b0C, and ~120-130 ohms at running temps)",
    "opts": ["By accessing the junction box on the side of the engine, disconnecting the 3-wire PT100 sensor, and measuring its resistance with a multimeter (should read approx 100 ohms at 0\u00b0C, and ~120-130 ohms at running temps)", "By looking at the color of the paint on the bearing casing", "By injecting high-pressure steam into the crankcase", "By short-circuiting the wires and seeing if the engine shuts down"],
    "exp": "A PT100 is an RTD (Resistance Temperature Detector). It has a base resistance of exactly 100.0 ohms at 0 degrees Celsius. As the metal gets hot, the resistance rises linearly (approx 0.385 ohms per degree). Measuring the ohms directly tells the ETO exactly what temperature the sensor is experiencing, proving if the electronic display panel is lying.",
    "cat": "MAINENGINE",
    "id": "T09S_451"
  },
  {
    "q": "If the Main Engine requires emergency manual control (due to a total computer/bridge control failure), where and how does the engineer operate the engine?",
    "a": "From the 'Local Control Station' physically attached to the engine, using mechanical levers to actuate starting air, reversing pneumatics, and fuel rack position directly, completely bypassing the automation",
    "opts": ["From the emergency generator room using a laptop", "From the 'Local Control Station' physically attached to the engine, using mechanical levers to actuate starting air, reversing pneumatics, and fuel rack position directly, completely bypassing the automation", "From the Bridge using the emergency joystick", "By physically pushing the piston rods with a massive pry bar"],
    "exp": "Every marine engine is built with a raw, mechanical backup station bolted to its side. If the remote cables burn, the computers crash, or the governor dies, an engineer can stand next to the spinning machinery, read physical dials, and yank mechanical levers to start, reverse, and fuel the engine to bring the ship safely to port.",
    "cat": "MAINENGINE",
    "id": "T09S_452"
  }
]);
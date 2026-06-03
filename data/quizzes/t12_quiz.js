window.loadQuizzes("T12_Cables", [
  {
    "q": "Correct sequence of layers in a shipboard LV armoured cable (innermost to outer)?",
    "a": "Conductor \u2192 Insulation \u2192 Bedding \u2192 Armour \u2192 Outer Sheath",
    "opts": ["Conductor \u2192 Armour \u2192 Bedding \u2192 Insulation \u2192 Outer Sheath", "Conductor \u2192 Insulation \u2192 Metallic Screen \u2192 Bedding \u2192 Outer Sheath", "Conductor \u2192 Insulation \u2192 Bedding \u2192 Armour \u2192 Outer Sheath", "Conductor \u2192 Bedding \u2192 Insulation \u2192 Armour \u2192 Outer Sheath"],
    "exp": "LV marine cable layers: Conductor (current path), Insulation (XLPE/PVC electrical isolation), Bedding (cushions armour from insulation), Armour (SWA/STA mechanical protection + earth fault return), Outer Sheath (LSZH/PVC environmental protection).",
    "cat": "CABLES",
    "id": "T12C_001"
  },
  {
    "q": "Which additional layers exist in an HV cable but not in a standard LV cable?",
    "a": "Semi-conductive conductor screen and insulation screen",
    "opts": ["Steel wire armour (SWA)", "Low Smoke Zero Halogen (LSZH) outer sheath", "Semi-conductive conductor screen and insulation screen", "Mica tape fire barrier"],
    "exp": "HV cables (6.6kV+) require: conductor screen (eliminates stress concentrations at conductor surface) and insulation screen (ensures uniform electric field, prevents partial discharge). LV cables operate at too low a voltage to need stress grading.",
    "cat": "CABLES",
    "id": "T12C_002"
  },
  {
    "q": "What is the purpose of the armour vs the outer sheath in a marine cable?",
    "a": "Armour = mechanical protection + earth fault return path; Outer sheath = environmental and chemical protection",
    "opts": ["Armour prevents EMI; sheath handles physical crushing", "Armour determines fire resistance; sheath provides voltage insulation", "Armour = mechanical protection + earth fault return path; Outer sheath = environmental and chemical protection", "Armour used in HV only; sheath used in LV only"],
    "exp": "SWA/STA armour protects against physical damage (crushing, impact, tension) and serves as earth fault return path for protection. Outer sheath (LSZH/PVC) protects against moisture, oil, UV, chemicals and determines fire performance. Different functions.",
    "cat": "CABLES",
    "id": "T12C_003"
  },
  {
    "q": "What distinguishes IEC 60331 fire-resistant cable from IEC 60332 flame-retardant cable?",
    "a": "IEC 60331 maintains circuit integrity during fire; IEC 60332 self-extinguishes to prevent flame spread but circuit may fail",
    "opts": ["60331 never melts; 60332 melts only above 1000\u00b0C", "60332 for essential services (steering, fire pump); 60331 for accommodation", "IEC 60331 maintains circuit integrity during fire; IEC 60332 self-extinguishes to prevent flame spread but circuit may fail", "60331 emits zero toxic smoke; 60332 emits HCl gas"],
    "exp": "IEC 60331 (fire resistant): circuit continues operating during fire - uses mica tape layer - for fire pumps, steering gear, emergency lighting. IEC 60332 (flame retardant): cable stops burning when ignition removed - prevents fire spread - but circuit fails in a fire.",
    "cat": "INSULATION",
    "id": "T12C_004"
  },
  {
    "q": "IEC 60331 fire-resistant cables must maintain circuit integrity for how long at what temperature?",
    "a": "Minimum 3 hours at 750\u00b0C",
    "opts": ["1 hour at 1000\u00b0C", "3 hours at 750\u00b0C", "30 minutes at 500\u00b0C", "12 hours at 200\u00b0C"],
    "exp": "IEC 60331: minimum 3 hours at 750\u00b0C. The mica tape layer maintains insulation integrity even when the outer insulation burns away. Essential for fire pumps, steering gear - must operate during a fire for sufficient time to fight/escape.",
    "cat": "CABLES",
    "id": "T12C_005"
  },
  {
    "q": "Which IEC standard applies to shipboard halogen-free flame-retardant power cables (e.g. alternator to MSB cable)?",
    "a": "IEC 60092-353",
    "opts": ["IEC 60092-353", "IEC 60331-1", "IEC 60079-14", "IEC 61363-1"],
    "exp": "IEC 60092-353 = shipboard power cables standard. Specifies halogen-free, flame-retardant requirements for marine environments. IEC 60331 = fire resistance. IEC 60079 = hazardous area. IEC 61363 = short circuit calculations.",
    "cat": "CABLES",
    "id": "T12C_006"
  },
  {
    "q": "Why must an insulation resistance tester (Megger) use DC not AC?",
    "a": "AC causes capacitive charging currents making insulation appear worse than it is; DC measures only true resistive leakage",
    "opts": ["AC generates heat in cable risking thermal breakdown during test", "AC creates magnetic interference disrupting the moving-coil galvanometer", "DC penetrates armour; AC is reflected back by steel wire armour", "AC causes capacitive charging currents making insulation appear worse than it is; DC measures only true resistive leakage"],
    "exp": "Cables and windings act as capacitors. AC would cause continuous capacitive charge/discharge currents combining with leakage \u2192 artificially low IR reading. DC: after initial capacitive charge settles, only resistive leakage current flows \u2192 true insulation resistance reading.",
    "cat": "TESTING",
    "id": "T12C_007"
  },
  {
    "q": "Megger voltage for testing a standard 440V shipboard motor?",
    "a": "500V DC",
    "opts": ["500V DC", "1000V AC", "250V DC", "2500V DC"],
    "exp": "For LV equipment up to 1000V (like 440V motors), 500V DC megger is standard. 1000V DC for LV alternators/transformers. 2500-5000V DC for HV cables and equipment. Higher megger voltage than necessary risks damaging LV insulation.",
    "cat": "TESTING",
    "id": "T12C_008"
  },
  {
    "q": "Minimum acceptable insulation resistance (IR) for a 440V machine?",
    "a": "1 M\u03a9 - below this do NOT energise",
    "opts": ["100 \u03a9", "1 M\u03a9 - below this do NOT energise", "5 M\u03a9", "0.1 M\u03a9"],
    "exp": "Minimum IR = rated voltage (kV) + 1 M\u03a9. For 440V (0.44kV) \u2248 1 M\u03a9 absolute minimum. New equipment typically >100 M\u03a9. Below 1 M\u03a9: dangerous insulation breakdown, do not energise. Below 0.5 M\u03a9: ground fault risk.",
    "cat": "INSULATION",
    "id": "T12C_009"
  },
  {
    "q": "How is Polarisation Index (PI) calculated?",
    "a": "PI = IR(10 minutes) / IR(1 minute) using same DC test voltage",
    "opts": ["PI = IR(1 minute) / IR(10 minutes)", "PI = Applied voltage / leakage current at 10 minutes", "PI = average IR over 10-minute period", "PI = IR(10 minutes) / IR(1 minute) using same DC test voltage"],
    "exp": "PI = 10-minute reading divided by 1-minute reading. Good dry insulation: IR continues to rise over 10 minutes (dielectric absorption) \u2192 PI > 2. Wet/contaminated: steady leakage dominates \u2192 IR stays flat \u2192 PI \u2248 1 or less.",
    "cat": "TESTING",
    "id": "T12C_010"
  },
  {
    "q": "PI value indicating insulation is dangerously wet/contaminated - must NOT be energised?",
    "a": "PI < 1.0",
    "opts": ["PI > 4.0", "PI between 1.5 and 2.0", "PI > 2.0", "PI < 1.0"],
    "exp": "PI < 1.0 = conductive moisture path exists - leakage current dominates over dielectric absorption - insulation too degraded to energise safely. PI 1.0-1.5 = poor, dry out first. PI 1.5-2.0 = marginal, monitor. PI > 2.0 = good, safe to energise.",
    "cat": "TESTING",
    "id": "T12C_011"
  },
  {
    "q": "Why is the PI test reading taken at 10 minutes instead of shorter duration?",
    "a": "Allows dielectric absorption current to fully decay - leaving only true resistive leakage current",
    "opts": ["Gives Megger time to fully charge its internal battery", "Allows capacitive charging current to build to maximum", "Gives insulation material time to cool before final reading", "Allows dielectric absorption current to fully decay - leaving only true resistive leakage current"],
    "exp": "When DC applied, dielectric absorption current (molecules aligning to electric field) decays slowly over several minutes. At 10 minutes it has largely decayed - the reading reflects steady-state true leakage resistance. 1-minute reading still has absorption component.",
    "cat": "TESTING",
    "id": "T12C_012"
  },
  {
    "q": "Maximum continuous operating temperature for Class F insulation?",
    "a": "155\u00b0C",
    "opts": ["105\u00b0C (Class A)", "130\u00b0C (Class B)", "155\u00b0C", "180\u00b0C (Class H)"],
    "exp": "Insulation thermal classes: A=105\u00b0C, B=130\u00b0C, F=155\u00b0C, H=180\u00b0C. Class F is standard for marine alternators and modern motors. Every 10\u00b0C above rated class temperature halves insulation service life (Arrhenius rule).",
    "cat": "INSULATION",
    "id": "T12C_013"
  },
  {
    "q": "Which motor is typically fitted with Class H insulation (180\u00b0C) and why?",
    "a": "Steering gear motor - frequent heavy loads and overloads from rudder sea pressure forces",
    "opts": ["Main seawater cooling pump - runs continuously in hot engine room", "Fresh water generator pump - operates at elevated ambient temperatures", "Steering gear motor - frequent heavy loads and overloads from rudder sea pressure forces", "Engine room ventilation fan - exposed to high exhaust temperatures"],
    "exp": "Steering gear experiences frequent start/stop cycles, severe mechanical overloads from sea forces on rudder, and continuous service. This severe duty causes greatest thermal stress - Class H (180\u00b0C) is required to handle peak winding temperatures during overloads.",
    "cat": "INSULATION",
    "id": "T12C_014"
  },
  {
    "q": "Arrhenius rule: what happens to insulation life operating 10\u00b0C above rated class temperature?",
    "a": "Insulation service life is halved",
    "opts": ["Life reduced by 10%", "Motor immediately short-circuits", "Life is halved", "Insulation melts requiring complete rewind"],
    "exp": "The 10\u00b0C rule (based on Arrhenius thermal aging equation): every 10\u00b0C above rated insulation class temperature \u2192 insulation chemical aging rate doubles \u2192 service life halved. 20\u00b0C over = 1/4 life. 30\u00b0C over = 1/8 life. Critical for long-term reliability.",
    "cat": "INSULATION",
    "id": "T12C_015"
  },
  {
    "q": "When ordering a replacement power cable, how is conductor size specified?",
    "a": "Cross-sectional area in mm\u00b2 (square millimetres)",
    "opts": ["AWG (American Wire Gauge)", "Volts per millimetre", "Number of strands", "Cross-sectional area in mm\u00b2 (square millimetres)"],
    "exp": "IEC standard for marine cables uses conductor cross-section in mm\u00b2. Common sizes: 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120 mm\u00b2. AWG is not used in IEC/marine standards. Must also specify stranding class (Class 2 = standard, Class 5 = flexible).",
    "cat": "CABLES",
    "id": "T12C_016"
  },
  {
    "q": "Primary operational advantage of insulated neutral (IT) 440V distribution on ships?",
    "a": "System continues operating without blackout when first earth fault occurs - no breaker trips",
    "opts": ["Automatically trips faulty circuit immediately preventing MSB damage", "Completely prevents all electric shock hazards under any conditions", "Uses hull as return path saving cable weight", "System continues operating without blackout when first earth fault occurs - no breaker trips"],
    "exp": "IT (insulated neutral) system: neutral not connected to hull. First earth fault does NOT complete a circuit - no fault current flows - no trip. System continues operating with alarm. ETO has time to safely locate and fix fault at sea without blackout.",
    "cat": "SYSTEMS",
    "id": "T12C_017"
  },
  {
    "q": "Major risk if low insulation alarm on insulated neutral system is ignored?",
    "a": "Second earth fault on different phase creates phase-to-phase short circuit through hull - partial blackout",
    "opts": ["ICCP system automatically shuts down", "Healthy phase voltage drops to zero", "Main generator trips on reverse power - total blackout", "Second earth fault on different phase creates phase-to-phase short circuit through hull - partial blackout"],
    "exp": "IT system: first fault = alarm only. If ignored and second fault develops on a different phase, current flows: phase A through hull to phase B = direct phase-to-phase fault. Massive fault current trips breakers causing partial blackout. Must investigate first fault immediately.",
    "cat": "SYSTEMS",
    "id": "T12C_018"
  },
  {
    "q": "How is a power cable safely routed through an A-class fire/watertight bulkhead?",
    "a": "Multi-Cable Transit (MCT) system with compressed intumescent rubber sealing modules",
    "opts": ["Tight drill hole sealed with marine-grade silicone", "PVC conduit filled with expanding polyurethane foam", "Stripped cable with bare insulation pressed through steel", "Multi-Cable Transit (MCT) system with compressed intumescent rubber sealing modules"],
    "exp": "SOLAS requires proper cable transits for fire and watertight integrity. MCT (e.g. Roxtec): steel frame welded to bulkhead, cables pass through, rubber modules compressed around each cable. For A-class fire boundaries: intumescent rubber expands in fire maintaining fire rating.",
    "cat": "CABLES",
    "id": "T12C_019"
  },
  {
    "q": "What IEC standard governs cables in hazardous areas (explosion-protected)?",
    "a": "IEC 60079-14 (installation of electrical equipment in explosive atmospheres)",
    "opts": ["IEC 60092-353", "IEC 60331", "IEC 60079-14 (installation of electrical equipment in explosive atmospheres)", "IEC 60228"],
    "exp": "IEC 60079-14 covers electrical installations in hazardous areas (Zone 0/1/2). Cables in these areas must have appropriate protection methods - typically glands and wiring suited to Ex-e or Ex-d requirements. Different from general marine cable standard (60092-353).",
    "cat": "CABLES",
    "id": "T12C_020"
  },
  {
    "q": "Why disconnect the AVR before performing an IR test on the alternator stator?",
    "a": "Megger voltage (500-1000V DC) permanently destroys AVR semiconductor components (thyristors, transistors, ICs)",
    "opts": ["AVR creates interference signals that give false IR readings", "Megger could back-energise the alternator through the AVR circuit", "Disconnecting AVR speeds up the test by reducing circuit complexity", "Megger voltage (500-1000V DC) permanently destroys AVR semiconductor components (thyristors, transistors, ICs)"],
    "exp": "AVR contains low-voltage semiconductors (thyristors at 12-48V, transistors, ICs). Applying 500-1000V DC megger voltage instantly and permanently destroys these junctions. Also disconnect rotating diodes. Always discharge winding to earth after test (>30 seconds).",
    "cat": "TESTING",
    "id": "T12C_021"
  },
  {
    "q": "Why is an 'Insulated Neutral' (IT) system the standard choice for 440V low-voltage power distribution on ships?",
    "a": "It ensures that a single earth fault does not create a complete circuit, meaning no breakers trip and essential machinery continues to run seamlessly",
    "opts": ["It completely eliminates the risk of electric shock for the crew", "It reduces the physical size and weight of the main switchboard", "It ensures that a single earth fault does not create a complete circuit, meaning no breakers trip and essential machinery continues to run seamlessly", "It allows the generators to produce 20% more power"],
    "exp": "At sea, losing a steering motor or cooling pump suddenly due to a single frayed wire could sink the ship. The insulated neutral (floating) system guarantees that the first earth fault only triggers an alarm, not a blackout.",
    "cat": "SYSTEMS",
    "id": "T12C_022"
  },
  {
    "q": "What happens in an insulated neutral system if a FIRST earth fault occurs (e.g., L1 touches the hull)?",
    "a": "An earth fault indicator/alarm activates on the main switchboard, but no fault current flows and no circuit breakers trip",
    "opts": ["The main generator breaker trips instantly", "The ship's emergency generator automatically starts", "The voltage on L1 doubles, destroying connected equipment", "An earth fault indicator/alarm activates on the main switchboard, but no fault current flows and no circuit breakers trip"],
    "exp": "Because the neutral point is floating, there is no return path for the current through the hull. Without a complete circuit, there is zero fault current, so the system survives with just a warning alarm.",
    "cat": "SYSTEMS",
    "id": "T12C_023"
  },
  {
    "q": "If a first earth fault (L1 to hull) is ignored, what happens if a SECOND earth fault subsequently develops on a different phase (e.g., L2 to hull)?",
    "a": "A massive phase-to-phase short circuit occurs through the hull, causing a huge fault current that instantly trips the affected circuit breakers",
    "opts": ["A massive phase-to-phase short circuit occurs through the hull, causing a huge fault current that instantly trips the affected circuit breakers", "The two faults cancel each other out, restoring the system to normal", "The earth fault alarm simply changes from yellow to red", "The system automatically switches to the emergency switchboard"],
    "exp": "This is the primary danger of the insulated system. Two simultaneous faults on different phases use the ship's steel hull as a giant wire, creating a dead short between 440V phases. This causes arc flashes, fires, and blackouts.",
    "cat": "SYSTEMS",
    "id": "T12C_024"
  },
  {
    "q": "What is the primary function of an NER (Neutral Earthing Resistor)?",
    "a": "Used on High Voltage (HV) systems to intentionally connect the neutral to earth through a resistor, limiting the first earth fault current to a safe, measurable level (e.g., 5-10 Amps)",
    "opts": ["Used on High Voltage (HV) systems to intentionally connect the neutral to earth through a resistor, limiting the first earth fault current to a safe, measurable level (e.g., 5-10 Amps)", "It reduces harmonic distortion on the main busbar", "It grounds the 440V system to prevent static buildup", "It acts as a dynamic braking resistor for large cranes"],
    "exp": "HV systems (3.3kV, 6.6kV) cannot use a floating neutral because the capacitive charging currents alone would be lethal. Instead, they use a solid earth return path, but choke the current using an NER so a fault doesn't vaporize the switchboard.",
    "cat": "SYSTEMS",
    "id": "T12C_025"
  },
  {
    "q": "How do you calculate the required Ohmic value of an NER on a 6.6 kV system designed to limit earth fault current to 5 Amps?",
    "a": "762 Ohms",
    "opts": ["6600 Ohms", "1320 Ohms", "762 Ohms", "3300 Ohms"],
    "exp": "NER = Phase Voltage / Fault Limit. Phase Voltage = Line Voltage / \u221a3. Phase Voltage = 6600 / 1.732 = 3810V. Therefore, NER = 3810V / 5A = 762 \u03a9.",
    "cat": "SYSTEMS",
    "id": "T12C_026"
  },
  {
    "q": "In an Earthed Neutral system (e.g., 6.6kV HV system), what happens on the FIRST earth fault?",
    "a": "The fault creates a complete circuit through the earth/NER, drawing a limited fault current that is instantly detected by protective relays, tripping the breaker and causing a loss of supply",
    "opts": ["The NER automatically increases its resistance to infinity", "The fault creates a complete circuit through the earth/NER, drawing a limited fault current that is instantly detected by protective relays, tripping the breaker and causing a loss of supply", "The system continues to run normally with only an alarm sounding", "The generator seamlessly transfers the load to another phase"],
    "exp": "Unlike the 440V floating system, an earth fault on a 6.6kV earthed system immediately trips the affected equipment offline to prevent catastrophic arcing and stator damage.",
    "cat": "SYSTEMS",
    "id": "T12C_027"
  },
  {
    "q": "If the ship's 440V Earth Fault Indicator suddenly drops to 0 M\u03a9, what is the safest and most systematic way to locate the fault?",
    "a": "Isolate (switch off) non-essential feeder breakers one by one; when the meter jumps back to normal (e.g., infinity), the last isolated circuit contains the fault",
    "opts": ["Increase the generator voltage to burn out the short circuit", "Isolate (switch off) non-essential feeder breakers one by one; when the meter jumps back to normal (e.g., infinity), the last isolated circuit contains the fault", "Use a thermal imaging camera to find the hottest cable on the ship", "Wait for a second fault to trip a breaker, identifying the location automatically"],
    "exp": "This is the classic ETO troubleshooting method. By selectively killing power to individual sub-panels or motors, you watch the main earth meter. The moment it recovers, you've isolated the specific branch causing the grounding.",
    "cat": "SYSTEMS",
    "id": "T12C_028"
  },
  {
    "q": "What is the absolute MINIMUM acceptable Insulation Resistance (IR) reading for a 440V system during operation?",
    "a": "1 Mega-Ohm (1 M\u03a9)",
    "opts": ["100 Kilo-Ohms", "1 Mega-Ohm (1 M\u03a9)", "10 Mega-Ohms", "100 Mega-Ohms"],
    "exp": "While a clean, dry ship will show >100 M\u03a9, the legal/practical limit where equipment must be dried out or taken offline before a catastrophic short occurs is 1 M\u03a9.",
    "cat": "SYSTEMS",
    "id": "T12C_029"
  },
  {
    "q": "What is the best modern method to detect a 'Hotspot' on a Main Switchboard busbar joint without shutting down the power?",
    "a": "Using an Infrared (IR) Thermography camera during normal live operation",
    "opts": ["Using an Infrared (IR) Thermography camera during normal live operation", "Touching the joints carefully with the back of the hand", "Using a 500V Megger across the joint", "Spraying a light mist of water and watching for steam"],
    "exp": "A thermal imaging camera safely 'sees' the heat caused by a loose, high-resistance joint from a safe distance while hundreds of amps are actively flowing through it.",
    "cat": "SYSTEMS",
    "id": "T12C_030"
  },
  {
    "q": "What is the physical cause of a busbar 'Hotspot'?",
    "a": "A loose bolted joint or oxidized connection creates high electrical resistance, resulting in severe I\u00b2R localized heating",
    "opts": ["A loose bolted joint or oxidized connection creates high electrical resistance, resulting in severe I\u00b2R localized heating", "Excessive voltage from the generator's AVR", "The copper absorbing too much humidity from the engine room", "Harmonic distortion melting the copper molecules"],
    "exp": "Vibration on ships loosens bolts over time. A loose joint is a bad connection. Pushing 2000 Amps through a bad connection acts like a toaster heating element, eventually glowing red hot and starting a fire.",
    "cat": "SYSTEMS",
    "id": "T12C_031"
  },
  {
    "q": "During a routine blackout, you decide to Megger the entire 440V Main Switchboard busbar. How must it be prepared?",
    "a": "Open ALL Air Circuit Breakers (ACBs) and feeder breakers to ensure the busbar is completely isolated from all generators and ship loads, then test Phase-to-Earth and Phase-to-Phase",
    "opts": ["Short the three phases together and test them against the neutral wire", "Leave the generators connected so their windings are tested simultaneously", "Open ALL Air Circuit Breakers (ACBs) and feeder breakers to ensure the busbar is completely isolated from all generators and ship loads, then test Phase-to-Earth and Phase-to-Phase", "Apply 5000V DC to burn off any surface contamination before testing"],
    "exp": "To test the health of the plastic/resin busbar standoff insulators, the copper bars must be totally disconnected from all other circuits. Otherwise, you are just measuring the resistance of a random connected motor.",
    "cat": "SYSTEMS",
    "id": "T12C_032"
  },
  {
    "q": "What happens if you accidentally leave a PT (Potential Transformer) connected while Meggering the main busbar?",
    "a": "The Megger will show a dead short (near 0 \u03a9) between phases because it is measuring the very low DC resistance of the transformer's primary winding",
    "opts": ["The PT will step the 500V up to 500,000V, destroying the switchboard", "The Megger will explode", "The Megger will show a dead short (near 0 \u03a9) between phases because it is measuring the very low DC resistance of the transformer's primary winding", "Nothing; the PT automatically blocks DC voltage"],
    "exp": "PTs (used for voltmeters) are essentially coils of wire connecting the phases. To DC, a coil is just a short wire. You must pull the PT fuses before taking phase-to-phase Megger readings on a switchboard.",
    "cat": "SYSTEMS",
    "id": "T12C_033"
  },
  {
    "q": "Why is the shock hazard slightly lower on the FIRST fault of an insulated neutral system compared to an earthed system?",
    "a": "Because there is no solid return path to the generator neutral, the only current that can flow through a person touching the fault is a very small 'capacitive charging current'",
    "opts": ["Because there is no solid return path to the generator neutral, the only current that can flow through a person touching the fault is a very small 'capacitive charging current'", "Because the ship's hull is painted with non-conductive paint", "Because the voltage drops to 110V instantly", "Because the earth fault relay absorbs the shock"],
    "exp": "In your house (earthed), touching a live wire sends 100 amps through you to the ground back to the transformer. On a ship (insulated), touching a live wire only sends a few milliamps of stray capacitive leakage through you. It's safer, but still dangerous.",
    "cat": "SYSTEMS",
    "id": "T12C_034"
  },
  {
    "q": "In a 440V ungrounded system, what indicates to the ETO that an earth fault has occurred?",
    "a": "An Earth Fault Monitor or Insulation Resistance monitoring relay continuously measures the impedance to the hull and triggers an alarm if it drops below a setpoint",
    "opts": ["The ship's lights automatically dim by 50%", "An Earth Fault Monitor or Insulation Resistance monitoring relay continuously measures the impedance to the hull and triggers an alarm if it drops below a setpoint", "A loud buzzing sound emits from the main switchboard", "The main generator breaker trips on overcurrent"],
    "exp": "Because the breakers won't trip on a first fault, the ship relies entirely on a dedicated active monitoring device that constantly 'sniffs' the resistance between the live busbars and the steel deck.",
    "cat": "SYSTEMS",
    "id": "T12C_035"
  },
  {
    "q": "What is the typical voltage level of the High Voltage (HV) systems used on large modern container ships or LNG carriers?",
    "a": "3.3 kV, 6.6 kV, or 11 kV",
    "opts": ["440V or 690V", "3.3 kV, 6.6 kV, or 11 kV", "1000V DC", "220 kV or 400 kV"],
    "exp": "As ship power demands grew (massive bow thrusters, reefer containers), 440V required impossibly thick cables. Stepping up to 6.6kV means current drops drastically, allowing thinner, lighter cables and smaller breakers.",
    "cat": "SYSTEMS",
    "id": "T12C_036"
  },
  {
    "q": "Why must you NEVER attempt to isolate an earth fault by opening breakers randomly while the ship is manoeuvring in restricted waters?",
    "a": "You risk accidentally shutting off the steering gear or main cooling pumps, which could result in a catastrophic collision or grounding",
    "opts": ["Because it will cause the main engine to overspeed", "Because the breakers are locked during maneuvering", "You risk accidentally shutting off the steering gear or main cooling pumps, which could result in a catastrophic collision or grounding", "Because it violates the ISPS security code"],
    "exp": "The whole point of the insulated neutral is that the ship can safely keep sailing with one fault. Wait until the ship is in open, safe water before playing 'breaker roulette' to find the grounded pump.",
    "cat": "SYSTEMS",
    "id": "T12C_037"
  },
  {
    "q": "What is the function of the 'Core Balance Current Transformer' (CBCT)?",
    "a": "It wraps around all three phase cables simultaneously; if there is an earth leak, the currents do not sum to zero, creating a magnetic imbalance that triggers an Earth Fault Relay",
    "opts": ["It measures the active power (kW) of the generator", "It wraps around all three phase cables simultaneously; if there is an earth leak, the currents do not sum to zero, creating a magnetic imbalance that triggers an Earth Fault Relay", "It absorbs harmonic distortion from Variable Frequency Drives", "It balances the physical weight of the cables on the tray"],
    "exp": "In a healthy 3-phase circuit, L1+L2+L3 = 0. The magnetic fields cancel out perfectly. If 5 amps leaks out to the hull, the return current is missing, the magnetic field isn't zero, and the CBCT detects this leakage instantly.",
    "cat": "SYSTEMS",
    "id": "T12C_038"
  },
  {
    "q": "Which type of shipboard equipment is notorious for causing intermittent, frustrating low-insulation alarms when it rains?",
    "a": "Deck machinery (windlasses, cranes, lighting) because their terminal boxes are exposed to saltwater, humidity, and weather",
    "opts": ["The ship's gyrocompass", "The engine room ventilation fans", "Deck machinery (windlasses, cranes, lighting) because their terminal boxes are exposed to saltwater, humidity, and weather", "The main engine lube oil pumps"],
    "exp": "Engine room gear stays dry. Deck gear gets pounded by waves. Water seeps into a degraded cable gland, shorts out slightly, rings the alarm, and then evaporates in the sun, making the alarm disappear mysteriously.",
    "cat": "SYSTEMS",
    "id": "T12C_039"
  },
  {
    "q": "If a low insulation alarm points to the Galley distribution board, what is the most likely culprit?",
    "a": "Electric hot plates, ovens, or deep fryers where spilled liquids, boiling water, and grease have compromised the heating element insulation",
    "opts": ["The watertight doors leading to the galley", "Electric hot plates, ovens, or deep fryers where spilled liquids, boiling water, and grease have compromised the heating element insulation", "The galley exhaust fan", "The chef's personal mobile phone charger"],
    "exp": "Tubular heating elements (calrods) are famous for cracking microscopically and absorbing moisture, especially when chefs boil water over them. This creates a solid path to earth.",
    "cat": "SYSTEMS",
    "id": "T12C_040"
  },
  {
    "q": "What is 'Capacitive Charging Current' in the context of an insulated 440V ship system?",
    "a": "Even without a solid earth connection, the miles of parallel cables act as a giant capacitor against the steel hull, allowing a small, continuous AC leakage current to flow",
    "opts": ["The current drawn by the generator's AVR during startup", "The current used to charge the emergency batteries", "Even without a solid earth connection, the miles of parallel cables act as a giant capacitor against the steel hull, allowing a small, continuous AC leakage current to flow", "A massive surge current caused by lightning strikes"],
    "exp": "Two conductors separated by an insulator (the copper wire, the PVC, and the steel hull) form a capacitor. AC current can 'pass through' capacitors. This means even a perfectly healthy insulated ship has a tiny baseline leakage current.",
    "cat": "SYSTEMS",
    "id": "T12C_041"
  },
  {
    "q": "Why must the ETO use extreme caution when using an Earth Fault finding tool that injects an AC tracing signal into the live busbar?",
    "a": "The injected signal might interfere with sensitive electronics, PLCs, or Variable Frequency Drives connected to the same busbar",
    "opts": ["It causes the main engine to overspeed", "It instantly trips all circuit breakers onboard", "The injected signal might interfere with sensitive electronics, PLCs, or Variable Frequency Drives connected to the same busbar", "It might reverse the polarity of the ship's generators"],
    "exp": "Some fault tracers superimpose a low-frequency AC or DC pulse onto the live 440V line to 'trace' the fault with a handheld wand. This dirty signal can confuse computers and VFDs if not carefully isolated.",
    "cat": "SYSTEMS",
    "id": "T12C_042"
  },
  {
    "q": "What is the primary danger of a 'Loose Connection' at a motor terminal box?",
    "a": "It creates high electrical resistance, causing localized I\u00b2R heating that can melt the insulation, cause a phase-to-phase short, or start a fire",
    "opts": ["It creates high electrical resistance, causing localized I\u00b2R heating that can melt the insulation, cause a phase-to-phase short, or start a fire", "It causes the motor to spin backward", "It generates high-frequency radio waves that blind the radar", "It increases the voltage to the motor, making it run too fast"],
    "exp": "Ship vibration loosens nuts. A loose nut means poor surface contact. High current squeezing through a tiny contact point generates immense heat. Terminals must be checked and torqued regularly.",
    "cat": "SYSTEMS",
    "id": "T12C_043"
  },
  {
    "q": "How does a 'Neutral Earthing Resistor' (NER) fail safely?",
    "a": "It is continuously monitored; if the resistor burns out or breaks (Open Circuit), an alarm sounds because the HV system has lost its safe earthing path",
    "opts": ["It automatically bypasses itself with a solid wire", "It shuts down the main engine", "It melts into a solid block of copper to ensure maximum conductivity", "It is continuously monitored; if the resistor burns out or breaks (Open Circuit), an alarm sounds because the HV system has lost its safe earthing path"],
    "exp": "If the NER snaps, the 6.6kV system suddenly becomes a floating/insulated system. This is highly dangerous for HV. The integrity of the NER is actively monitored by an electronic relay.",
    "cat": "SYSTEMS",
    "id": "T12C_044"
  },
  {
    "q": "In a 220V lighting system, why are double-pole circuit breakers used?",
    "a": "Because in an insulated neutral system, BOTH wires (L1 and L2) are live relative to earth; a single-pole breaker would leave the circuit dangerously live even when switched off",
    "opts": ["To comply with DC voltage regulations", "To double the current carrying capacity of the breaker", "To prevent the light bulbs from flickering", "Because in an insulated neutral system, BOTH wires (L1 and L2) are live relative to earth; a single-pole breaker would leave the circuit dangerously live even when switched off"],
    "exp": "In a house, the neutral is 0V, so you only switch the live wire. On a ship, the 220V comes from a transformer with no ground. Both wires carry 110V relative to the hull. You MUST disconnect both to safely change a light fitting.",
    "cat": "SYSTEMS",
    "id": "T12C_045"
  },
  {
    "q": "If a generator's stator insulation degrades completely, causing a phase-to-earth fault inside the winding while running on a 440V insulated system, what happens?",
    "a": "The earth fault alarm sounds, but the generator continues to carry the load; it must be manually taken offline and investigated immediately before a second fault destroys it",
    "opts": ["The earth fault alarm sounds, but the generator continues to carry the load; it must be manually taken offline and investigated immediately before a second fault destroys it", "The AVR automatically disconnects the excitation", "The generator instantly trips on Reverse Power", "The generator explodes instantly"],
    "exp": "Because it's an insulated system, even a raw short to the casing won't trip the generator. But the machine is now incredibly vulnerable. The ETO must transfer the load to a healthy generator and shut this one down fast.",
    "cat": "SYSTEMS",
    "id": "T12C_046"
  },
  {
    "q": "What is the purpose of the 'Earth Bar' that runs the entire length of the Main Switchboard?",
    "a": "It provides a massive, solid, common grounding point tightly bolted to the ship's hull, to which all cable armours, equipment casings, and non-current-carrying metal parts are safely bonded",
    "opts": ["It absorbs electromagnetic interference from the VFDs", "It serves as a physical barrier to stop people touching the live busbars", "It provides a massive, solid, common grounding point tightly bolted to the ship's hull, to which all cable armours, equipment casings, and non-current-carrying metal parts are safely bonded", "It carries the neutral return current for the 220V lighting"],
    "exp": "Safety grounding relies on this massive copper bar. If a live wire touches the metal casing of the switchboard, the electricity flows safely through this earth bar into the hull, rather than through a human body.",
    "cat": "SYSTEMS",
    "id": "T12C_047"
  },
  {
    "q": "Why is the use of 'Rewirable' (semi-enclosed) fuses banned on main 440V switchboards?",
    "a": "They cannot safely interrupt the massive short-circuit currents (e.g., 50kA+) of a modern switchboard; they would vaporize and cause a catastrophic arc flash explosion",
    "opts": ["They are too expensive to replace", "They are illegal under MARPOL environmental laws", "They cannot safely interrupt the massive short-circuit currents (e.g., 50kA+) of a modern switchboard; they would vaporize and cause a catastrophic arc flash explosion", "They cause harmonic distortion"],
    "exp": "Only HRC (High Rupturing Capacity) fuses filled with silica sand can safely swallow the explosive energy of a dead short circuit on a 440V busbar. Wrapping copper wire around an old fuse holder is a death wish.",
    "cat": "SYSTEMS",
    "id": "T12C_048"
  },
  {
    "q": "What indicates a healthy insulation status on a traditional 'Earth Lamp' system on the main switchboard?",
    "a": "All three lamps (representing L1, L2, L3) are glowing equally at half-brilliance",
    "opts": ["All three lamps (representing L1, L2, L3) are glowing equally at half-brilliance", "The lamps flash in a sequential pattern", "All three lamps are completely off", "One lamp is brightly lit, and two are off"],
    "exp": "Earth lamps are a visual check. Each lamp connects a phase to earth. Normally, they share the voltage equally (dim). If L1 touches the hull (earth fault), the L1 lamp shorts out (goes dark), and L2 and L3 get full voltage (glow super bright).",
    "cat": "SYSTEMS",
    "id": "T12C_049"
  },
  {
    "q": "If the L2 earth lamp goes completely DARK, and L1 and L3 glow at maximum brilliance, what is the exact fault?",
    "a": "A solid (dead) earth fault has occurred specifically on the L2 phase",
    "opts": ["The generator is single-phasing", "A solid (dead) earth fault has occurred specifically on the L2 phase", "The ship is completely healthy", "A short circuit between L1 and L3"],
    "exp": "The dark lamp indicates which phase is grounded. Because L2 is touching the hull, the voltage difference between L2 and the hull is 0V, so the L2 lamp turns off. The other two phases now see full 440V to ground.",
    "cat": "SYSTEMS",
    "id": "T12C_050"
  },
  {
    "q": "What is the function of the 'Test' button on the Earth Fault Monitoring relay?",
    "a": "It artificially creates a low-resistance path to earth through an internal resistor, proving that the relay will accurately detect a fault and sound the alarm",
    "opts": ["It artificially creates a low-resistance path to earth through an internal resistor, proving that the relay will accurately detect a fault and sound the alarm", "It disconnects the relay from the switchboard", "It tests the generator's AVR response", "It resets the system after a blackout"],
    "exp": "You must prove safety equipment works. Pressing the test button safely leaks a tiny, calculated current to the hull, ensuring the microprocessor hasn't frozen and the buzzer still rings.",
    "cat": "SYSTEMS",
    "id": "T12C_051"
  },
  {
    "q": "What does 'Insulation Class' (e.g., Class F) define for an electric motor or generator?",
    "a": "The absolute maximum continuous operating temperature the insulation materials can safely withstand without suffering unacceptable degradation of their lifespan",
    "opts": ["The absolute maximum continuous operating temperature the insulation materials can safely withstand without suffering unacceptable degradation of their lifespan", "The maximum voltage the motor can handle before short-circuiting", "The physical thickness of the copper wire coating", "The amount of moisture the motor can safely absorb"],
    "exp": "Heat destroys plastics and resins. The class rating guarantees that if you keep the motor below that specific temperature (e.g., 155\u00b0C for Class F), it will last its intended 20-year design life.",
    "cat": "INSULATION",
    "id": "T12C_052"
  },
  {
    "q": "What is the maximum allowable operating temperature for Class A insulation?",
    "a": "105\u00b0C",
    "opts": ["155\u00b0C", "90\u00b0C", "130\u00b0C", "105\u00b0C"],
    "exp": "Class A is obsolete for modern ships, relying on old materials like varnished cotton and paper. Its limit is a very low 105\u00b0C.",
    "cat": "INSULATION",
    "id": "T12C_053"
  },
  {
    "q": "What is the maximum allowable operating temperature for Class E insulation?",
    "a": "120\u00b0C",
    "opts": ["120\u00b0C", "105\u00b0C", "180\u00b0C", "130\u00b0C"],
    "exp": "Class E (120\u00b0C) bridges the gap between organic materials and modern synthetics, but is rarely used in modern marine construction.",
    "cat": "INSULATION",
    "id": "T12C_054"
  },
  {
    "q": "What is the maximum allowable operating temperature for Class B insulation?",
    "a": "130\u00b0C",
    "opts": ["180\u00b0C", "155\u00b0C", "130\u00b0C", "120\u00b0C"],
    "exp": "Class B (130\u00b0C) uses mica and glass fiber with epoxy. It was the standard for general-purpose marine motors for decades before Class F took over.",
    "cat": "INSULATION",
    "id": "T12C_055"
  },
  {
    "q": "What is the maximum allowable operating temperature for Class F insulation?",
    "a": "155\u00b0C",
    "opts": ["220\u00b0C", "130\u00b0C", "155\u00b0C", "180\u00b0C"],
    "exp": "Class F (155\u00b0C) is the modern gold standard. It uses high-temperature synthetic resins and provides excellent thermal margin for alternators and cargo pumps.",
    "cat": "INSULATION",
    "id": "T12C_056"
  },
  {
    "q": "What is the maximum allowable operating temperature for Class H insulation?",
    "a": "180\u00b0C",
    "opts": ["180\u00b0C", "155\u00b0C", "200\u00b0C", "250\u00b0C"],
    "exp": "Class H (180\u00b0C) uses pure silicone rubber and advanced mica. It is reserved for the most severely stressed motors onboard, surviving extreme heat and heavy overloads.",
    "cat": "INSULATION",
    "id": "T12C_057"
  },
  {
    "q": "Which motor in the engine room typically requires the highest insulation class (Class H - 180\u00b0C)?",
    "a": "The Steering Gear motor, because it operates under frequent heavy load changes, high duty cycles, and SOLAS requirements to never trip on overload",
    "opts": ["The Engine Room ventilation fans", "The Main Sea Water Cooling pump", "The Heavy Fuel Oil purifier motor", "The Steering Gear motor, because it operates under frequent heavy load changes, high duty cycles, and SOLAS requirements to never trip on overload"],
    "exp": "Because SOLAS bans overload tripping on steering motors, the motor must be built tough enough to literally cook itself without the insulation melting down instantly. Class H provides this extreme survival margin.",
    "cat": "INSULATION",
    "id": "T12C_058"
  },
  {
    "q": "What insulation class is typically specified for the ship's Main Alternators (Generators)?",
    "a": "Class F (155\u00b0C), but they are often operated and alarmed as if they were Class B (130\u00b0C) to provide a massive safety and longevity margin",
    "opts": ["Class F (155\u00b0C), but they are often operated and alarmed as if they were Class B (130\u00b0C) to provide a massive safety and longevity margin", "Class A (105\u00b0C)", "Class C (>180\u00b0C)", "Class E (120\u00b0C)"],
    "exp": "This is standard marine design. You buy a tough Class F machine, but you set the alarms to go off at 130\u00b0C. The insulation is never stressed, so the generator lasts 30 years without rewinding.",
    "cat": "INSULATION",
    "id": "T12C_059"
  },
  {
    "q": "What is the 'Arrhenius 10-Degree Rule' regarding electrical insulation life?",
    "a": "For every 10\u00b0C the motor operates ABOVE its rated insulation class temperature, its expected operational lifespan is cut exactly in half",
    "opts": ["For every 10\u00b0C increase in temperature, the motor's power output drops by 10%", "It dictates that alarms must sound 10\u00b0C before the melting point", "It states that insulation must be cooled by 10\u00b0C every hour", "For every 10\u00b0C the motor operates ABOVE its rated insulation class temperature, its expected operational lifespan is cut exactly in half"],
    "exp": "Heat causes chemical degradation. If a Class F motor (rated for 20 years at 155\u00b0C) is run continuously at 165\u00b0C, the insulation will bake and fail in 10 years. At 175\u00b0C, it fails in 5 years.",
    "cat": "INSULATION",
    "id": "T12C_060"
  },
  {
    "q": "What is the primary difference between NEMA insulation classes and IEC insulation classes?",
    "a": "There is no difference in the absolute maximum temperature limits; NEMA Class F is exactly 155\u00b0C, identical to IEC Class F",
    "opts": ["NEMA classes are measured in Fahrenheit, IEC in Celsius", "NEMA allows a 20\u00b0C higher temperature for every class", "There is no difference in the absolute maximum temperature limits; NEMA Class F is exactly 155\u00b0C, identical to IEC Class F", "IEC classes apply only to cables, NEMA only to motors"],
    "exp": "Surveyors check this to ensure you know international standards. Whether the motor is built in the USA (NEMA) or Europe (IEC), the letter designations (A, B, F, H) dictate the exact same thermal limits.",
    "cat": "INSULATION",
    "id": "T12C_061"
  },
  {
    "q": "What is 'Dielectric Strength'?",
    "a": "The maximum voltage an insulating material can withstand per unit of thickness before it chemically breaks down and allows a spark to punch through it (measured in kV/mm)",
    "opts": ["The ability of the insulation to resist water absorption", "The amount of heat required to melt the plastic", "The maximum voltage an insulating material can withstand per unit of thickness before it chemically breaks down and allows a spark to punch through it (measured in kV/mm)", "The physical pulling strength of the copper conductor"],
    "exp": "Resistance (Ohms) prevents slow leakage. Dielectric Strength prevents violent lightning bolts. XLPE has a dielectric strength of ~25 kV/mm, meaning it takes 25,000 volts to punch a hole through 1 millimeter of XLPE.",
    "cat": "INSULATION",
    "id": "T12C_062"
  },
  {
    "q": "How does Dielectric Strength dictate High Voltage (HV) cable design compared to 440V cables?",
    "a": "HV cables must have significantly thicker insulation layers; the dielectric stress (Voltage / Thickness) must remain well below the material's breakdown threshold",
    "opts": ["HV cables use thinner insulation because they are cooled by gas", "HV cables use the exact same thickness but wrap it in lead", "HV cables must have significantly thicker insulation layers; the dielectric stress (Voltage / Thickness) must remain well below the material's breakdown threshold", "HV cables don't use insulation; they rely on air gaps"],
    "exp": "A 440V cable only needs a thin layer of PVC to hold the voltage. A 6.6kV cable needs a thick, flawless layer of XLPE, otherwise the massive voltage will simply arc straight through the plastic to the steel armor.",
    "cat": "INSULATION",
    "id": "T12C_063"
  },
  {
    "q": "What is 'Tan Delta' (Dissipation Factor) testing?",
    "a": "A diagnostic test used on HV cables/motors that measures how much electrical energy is absorbed and wasted as heat within the insulation itself due to molecular friction (dielectric losses)",
    "opts": ["A test that measures the physical stretching of the cable", "A test to check the resistance of the copper core", "A diagnostic test used on HV cables/motors that measures how much electrical energy is absorbed and wasted as heat within the insulation itself due to molecular friction (dielectric losses)", "A method of measuring the speed of the motor"],
    "exp": "When AC voltage alternates, the molecules inside the plastic insulation twist back and forth. This creates microscopic friction (heat). High-quality XLPE has a very low Tan Delta. As it gets wet or ages, the friction goes up, generating excess heat.",
    "cat": "INSULATION",
    "id": "T12C_064"
  },
  {
    "q": "Why must an ETO be incredibly careful when using infrared lamps or space heaters to dry out a seawater-flooded deck motor?",
    "a": "Applying too much heat too quickly will boil the trapped water into steam, expanding and physically rupturing the varnish, destroying the insulation permanently",
    "opts": ["Applying too much heat too quickly will boil the trapped water into steam, expanding and physically rupturing the varnish, destroying the insulation permanently", "The infrared light degrades the copper wiring", "The heat will magnetize the stator core", "The heat will cause the bearings to freeze"],
    "exp": "Drying must be slow and gentle (e.g., 60-80\u00b0C). If you blast a wet winding with intense heat, the water inside the microscopic cracks flashes to steam, blowing the resin apart like popcorn.",
    "cat": "INSULATION",
    "id": "T12C_065"
  },
  {
    "q": "What is the proper procedure before putting a flooded, newly dried motor back into service?",
    "a": "The motor must be cooled to ambient temperature, and a final Megger and Polarization Index (PI) test must prove the IR is > 1 M\u03a9 and PI > 2.0",
    "opts": ["Paint the outside of the motor to seal it", "Replace the terminal box with a waterproof one", "The motor must be cooled to ambient temperature, and a final Megger and Polarization Index (PI) test must prove the IR is > 1 M\u03a9 and PI > 2.0", "Start it immediately while hot to burn off the rest of the water"],
    "exp": "You cannot test a hot motor accurately. Once it cools down, the final IR and PI tests scientifically guarantee the water is gone and the winding won't explode when 440V hits it.",
    "cat": "INSULATION",
    "id": "T12C_066"
  },
  {
    "q": "What material is uniquely used in Class C (>180\u00b0C) and fire-resistant (IEC 60331) cable insulation?",
    "a": "Mica tape (or pure ceramics/PTFE); Mica is a natural mineral that maintains its excellent insulating properties even when subjected to direct 750\u00b0C flames",
    "opts": ["Standard PVC", "Asbestos", "Mica tape (or pure ceramics/PTFE); Mica is a natural mineral that maintains its excellent insulating properties even when subjected to direct 750\u00b0C flames", "Standard XLPE"],
    "exp": "Plastic melts. When a fire hits a critical steering gear cable, the XLPE plastic burns away. The layer of glass-like Mica tape wrapped around the copper survives, keeping the wires separated so the motor keeps running in the fire.",
    "cat": "INSULATION",
    "id": "T12C_067"
  },
  {
    "q": "What does a sharp drop in Insulation Resistance (IR) accompanied by a strong smell of ozone near a high-voltage generator indicate?",
    "a": "Partial Discharge or Corona effect; high electrical stress is breaking down the air pockets in the aging insulation, creating ozone gas and physically eating away the winding resin",
    "opts": ["The bearings are completely destroyed", "The generator is operating at peak efficiency", "Partial Discharge or Corona effect; high electrical stress is breaking down the air pockets in the aging insulation, creating ozone gas and physically eating away the winding resin", "The PMG is generating too much DC voltage"],
    "exp": "High voltage can 'jump' across microscopic air bubbles trapped in cheap or old insulation. This sparking (partial discharge) creates ozone. It slowly drills tiny holes through the plastic until a catastrophic phase-to-earth failure occurs.",
    "cat": "INSULATION",
    "id": "T12C_068"
  },
  {
    "q": "Why is pure PVC insulation generally avoided for massive, high-power cables (like those feeding bow thrusters)?",
    "a": "PVC has a lower thermal limit (70\u00b0C) and higher dielectric losses; thick XLPE is used because it can handle 90\u00b0C continuously, allowing a thinner, lighter cable to carry the same massive current",
    "opts": ["PVC has a lower thermal limit (70\u00b0C) and higher dielectric losses; thick XLPE is used because it can handle 90\u00b0C continuously, allowing a thinner, lighter cable to carry the same massive current", "PVC is too expensive", "PVC cannot be bent around corners", "PVC reacts violently with seawater"],
    "exp": "Because XLPE survives 90\u00b0C, you can push more amps through it before it melts. This means a 95mm\u00b2 XLPE cable can do the job of a much fatter 120mm\u00b2 PVC cable, saving tons of copper weight on the ship.",
    "cat": "INSULATION",
    "id": "T12C_069"
  },
  {
    "q": "What is EPR (Ethylene Propylene Rubber) cable insulation uniquely suited for on ships?",
    "a": "Applications requiring extreme flexibility and resistance to repeated bending, such as crane trailing cables, lifeboat davit umbilicals, and festoon systems",
    "opts": ["High-voltage underground transmission", "Fiber optic data transfer", "Applications requiring extreme flexibility and resistance to repeated bending, such as crane trailing cables, lifeboat davit umbilicals, and festoon systems", "Permanent, fixed wiring inside the switchboard"],
    "exp": "XLPE is stiff and hard. If you put it on a moving crane trolley, it will snap. EPR is thick, tough, highly flexible rubber that survives being reeled in and out thousands of times.",
    "cat": "INSULATION",
    "id": "T12C_070"
  },
  {
    "q": "What happens to the Insulation Resistance (IR) value of a motor winding as its physical temperature increases?",
    "a": "The IR value decreases significantly; generally, the resistance cuts in half for every 10\u00b0C rise in temperature",
    "opts": ["The IR value increases, making the motor safer", "The IR value decreases significantly; generally, the resistance cuts in half for every 10\u00b0C rise in temperature", "The IR value drops to zero instantly above 50\u00b0C", "The IR value remains perfectly constant regardless of heat"],
    "exp": "Heat excites electrons, making it easier for leakage current to punch through the insulation. A motor measuring 100 M\u03a9 when cold (20\u00b0C) might legally and safely drop to 5 M\u03a9 when it is blazing hot (80\u00b0C).",
    "cat": "INSULATION",
    "id": "T12C_071"
  },
  {
    "q": "Because of the temperature-resistance relationship, how must an ETO record Megger readings to make them comparable over 5 years?",
    "a": "The ambient/winding temperature MUST be recorded alongside the Megger value, and ideally, the value should be mathematically corrected to a standard baseline (e.g., 40\u00b0C)",
    "opts": ["Always test the motor while it is running", "The ambient/winding temperature MUST be recorded alongside the Megger value, and ideally, the value should be mathematically corrected to a standard baseline (e.g., 40\u00b0C)", "Wait exactly 24 hours after stopping before testing", "Just write down the Megger value; temperature doesn't matter for records"],
    "exp": "If you Megger a cold motor in winter (reads 500 M\u03a9) and a hot motor in summer (reads 10 M\u03a9), you might think the motor is dying. Correcting the math back to a 40\u00b0C standard proves the insulation hasn't actually degraded.",
    "cat": "INSULATION",
    "id": "T12C_072"
  },
  {
    "q": "What is the primary factor that destroys the insulation varnish inside a marine alternator over time?",
    "a": "Thermal aging (sustained high temperatures baking the resin) combined with mechanical vibration and moisture/salt ingress",
    "opts": ["Thermal aging (sustained high temperatures baking the resin) combined with mechanical vibration and moisture/salt ingress", "Using the wrong brand of diesel fuel", "Painting the outside of the generator casing", "Running the generator at exactly 60 Hz"],
    "exp": "It's a combination attack. Heat makes the resin brittle. Engine vibration cracks the brittle resin. Salty sea air gets into the cracks and creates a conductive path to ground.",
    "cat": "INSULATION",
    "id": "T12C_073"
  },
  {
    "q": "Why is 'Vacuum Pressure Impregnation' (VPI) used when manufacturing or rewinding high-voltage stator coils?",
    "a": "It uses a vacuum to suck out every microscopic air bubble from deep inside the copper winding, then forces resin in under high pressure, preventing corona discharge and partial short circuits",
    "opts": ["It uses a vacuum to suck out every microscopic air bubble from deep inside the copper winding, then forces resin in under high pressure, preventing corona discharge and partial short circuits", "It shrinks the size of the motor by 50%", "It aligns the copper molecules to improve conductivity", "It coats the outside of the motor in a rust-proof shell"],
    "exp": "Air bubbles are the enemy of HV insulation. High voltage sparks across air gaps (corona). VPI ensures the coil is a 100% solid brick of void-free resin, extending the motor's life by decades.",
    "cat": "INSULATION",
    "id": "T12C_074"
  },
  {
    "q": "If a Class F (155\u00b0C) motor is installed in a boiler room where the ambient temperature reaches 55\u00b0C, what happens to its usable power rating?",
    "a": "The motor must be 'derated' (cannot be run at 100% load) because it has less thermal margin to dissipate its own internal heat before melting the 155\u00b0C insulation",
    "opts": ["Nothing, the ambient temperature has no effect on motor heat", "The motor must be 'derated' (cannot be run at 100% load) because it has less thermal margin to dissipate its own internal heat before melting the 155\u00b0C insulation", "It automatically upgrades itself to Class H", "It can produce more power because it's already warmed up"],
    "exp": "Motors are usually rated for a 40\u00b0C ambient room. If the room is 55\u00b0C, the motor starts off 15 degrees hotter than normal. If you run it at 100% load, it will overheat. You must run it at 80% load to stay safe.",
    "cat": "INSULATION",
    "id": "T12C_075"
  },
  {
    "q": "What is 'Tracking' on the surface of a high-voltage insulator?",
    "a": "The formation of a permanent, conductive carbon path across the surface of the insulator, caused by electrical sparking through dirt, salt, or moisture contamination",
    "opts": ["The physical wear marks left by cables rubbing together", "A GPS system used to locate buried cables", "The path the electrons take through the copper wire", "The formation of a permanent, conductive carbon path across the surface of the insulator, caused by electrical sparking through dirt, salt, or moisture contamination"],
    "exp": "If an insulator is covered in salty dust, current leaks across the surface. This tiny sparking burns the plastic into black carbon. Carbon conducts electricity well. Eventually, the carbon path bridges the whole gap, causing a massive short circuit.",
    "cat": "INSULATION",
    "id": "T12C_076"
  },
  {
    "q": "How can an ETO prevent 'Tracking' on main switchboard busbar supports?",
    "a": "During drydock or major shutdowns, thoroughly clean the resin/ceramic insulators with a clean, dry, lint-free cloth or an approved non-residue electro-cleaner to remove all dust and salt",
    "opts": ["Wrap them in aluminum foil", "Spray them with saltwater to wash the dust off", "Coat them heavily in lubricating grease", "During drydock or major shutdowns, thoroughly clean the resin/ceramic insulators with a clean, dry, lint-free cloth or an approved non-residue electro-cleaner to remove all dust and salt"],
    "exp": "Cleanliness is paramount for high voltage. Removing the dirt removes the path for the electricity to leak.",
    "cat": "INSULATION",
    "id": "T12C_077"
  },
  {
    "q": "What is the primary function of the 'Anti-Condensation Space Heater' inside a marine motor?",
    "a": "It switches ON when the motor is OFF, keeping the windings 3-5\u00b0C warmer than the ambient room air, physically preventing humid sea air from condensing into water on the cold copper coils",
    "opts": ["It switches ON when the motor is OFF, keeping the windings 3-5\u00b0C warmer than the ambient room air, physically preventing humid sea air from condensing into water on the cold copper coils", "It melts ice off the cooling fan", "It prevents the lubricating grease from freezing", "It helps the motor reach operating temperature faster"],
    "exp": "Condensation only forms on cold surfaces. By keeping the iron and copper slightly warm while the motor is asleep, water vapor cannot condense. This preserves the insulation resistance.",
    "cat": "INSULATION",
    "id": "T12C_078"
  },
  {
    "q": "If a space heater fails on a deck winch motor, what is the fastest sign of trouble?",
    "a": "The Megger (Insulation Resistance) reading will plummet from >100 M\u03a9 down to <1 M\u03a9 within a few weeks due to severe moisture absorption into the varnish",
    "opts": ["The motor will catch fire immediately when started", "The power cable will turn white", "The Megger (Insulation Resistance) reading will plummet from >100 M\u03a9 down to <1 M\u03a9 within a few weeks due to severe moisture absorption into the varnish", "The motor will spin at twice its normal speed"],
    "exp": "Space heaters are critical. If they die, the motor gets soaked in humidity. A regular PMS Megger check will catch this sudden drop, warning the ETO to fix the heater before the motor shorts out.",
    "cat": "INSULATION",
    "id": "T12C_079"
  },
  {
    "q": "What happens if a space heater is wired incorrectly and stays ON while the motor is running at 100% load?",
    "a": "The extra 220V heat from the heater adds to the massive I\u00b2R heat generated by the running motor, potentially pushing the total internal temperature past the Class F insulation limit and destroying the motor",
    "opts": ["The motor runs slightly more efficiently", "The extra 220V heat from the heater adds to the massive I\u00b2R heat generated by the running motor, potentially pushing the total internal temperature past the Class F insulation limit and destroying the motor", "The motor's cooling fan blows the heat away harmlessly", "The space heater burns out instantly"],
    "exp": "Space heaters must have an interlock (a Normally Closed auxiliary contact on the main contactor). Running = Heater Off. Stopped = Heater On. Doubling up the heat cooks the stator.",
    "cat": "INSULATION",
    "id": "T12C_080"
  },
  {
    "q": "What is 'Hygroscopic' insulation, and why is it a problem?",
    "a": "Insulation that naturally attracts and absorbs water molecules from the air; old paper or cotton insulation was highly hygroscopic, which is why modern ships use non-hygroscopic synthetic resins",
    "opts": ["Insulation that melts when exposed to UV light", "Insulation that naturally attracts and absorbs water molecules from the air; old paper or cotton insulation was highly hygroscopic, which is why modern ships use non-hygroscopic synthetic resins", "Insulation that repels oil but absorbs salt", "Insulation that changes color based on temperature"],
    "exp": "Water conducts electricity. If your plastic insulation absorbs water like a sponge, it stops being an insulator. Modern epoxy resins are designed to completely reject water absorption.",
    "cat": "INSULATION",
    "id": "T12C_081"
  },
  {
    "q": "What fundamental electrical formula does a Megger use to calculate Insulation Resistance?",
    "a": "Ohm's Law: R = V / I. It applies a known high DC Voltage (V), measures the tiny resulting leakage Current (I), and displays the Resistance (R)",
    "opts": ["Maxwell's Equations", "Kirchhoff's Voltage Law", "Faraday's Law of Induction", "Ohm's Law: R = V / I. It applies a known high DC Voltage (V), measures the tiny resulting leakage Current (I), and displays the Resistance (R)"],
    "exp": "The Megger is just a highly specialized, extreme-voltage ohmmeter. It pushes 500V through the plastic insulation. If 5 micro-amps leak through, the chip calculates 500V / 0.000005A = 100,000,000 Ohms (100 M\u03a9).",
    "cat": "TESTING",
    "id": "T12C_082"
  },
  {
    "q": "Why can't you use a standard digital multimeter (set to Ohms) to test motor insulation?",
    "a": "A multimeter only outputs ~9V DC. This is too weak to drive a measurable current through 100 M\u03a9 of resistance, and too weak to stress the insulation to reveal hidden pinhole defects",
    "opts": ["A multimeter uses AC voltage, which destroys insulation", "A multimeter only measures up to 100 Ohms", "A multimeter is too heavy to carry around the ship", "A multimeter only outputs ~9V DC. This is too weak to drive a measurable current through 100 M\u03a9 of resistance, and too weak to stress the insulation to reveal hidden pinhole defects"],
    "exp": "At 9V, a 100 M\u03a9 insulator leaks 0.00000009 Amps. A standard multimeter can't detect a current that small, so it just displays 'OL' (Overload/Infinity). Furthermore, 9V won't spark across a tiny crack in the wire, but 500V will, revealing the danger.",
    "cat": "TESTING",
    "id": "T12C_083"
  },
  {
    "q": "What DC voltage should be selected on the Megger when testing a standard 440V marine motor or cable?",
    "a": "500V DC (The general rule is to use a test voltage roughly equal to or slightly higher than the system's rated operating voltage)",
    "opts": ["50V DC", "2500V DC", "5000V DC", "500V DC (The general rule is to use a test voltage roughly equal to or slightly higher than the system's rated operating voltage)"],
    "exp": "Applying 5000V to a 440V motor will literally blast holes through its thin insulation. Applying 50V won't test it adequately. 500V stresses it just enough to prove it can handle 440V safely.",
    "cat": "TESTING",
    "id": "T12C_084"
  },
  {
    "q": "What DC voltage should be selected when Meggering a 6.6 kV High Voltage alternator?",
    "a": "Typically 2500V DC or 5000V DC, depending strictly on the manufacturer's specific testing manual",
    "opts": ["500V DC", "Typically 2500V DC or 5000V DC, depending strictly on the manufacturer's specific testing manual", "10,000V DC", "100V DC"],
    "exp": "HV equipment requires HV testing. A 500V Megger won't stress a 6.6kV cable enough to find a fault. However, you must follow the manual so you don't void the warranty by over-stressing it.",
    "cat": "TESTING",
    "id": "T12C_085"
  },
  {
    "q": "Before conducting an IR test on an alternator, why is it absolutely mandatory to physically disconnect the AVR (Automatic Voltage Regulator)?",
    "a": "The AVR is packed with delicate, low-voltage electronic microchips and diodes; slamming 500V or 1000V DC into these circuits via the excitation wiring will instantly and permanently destroy them",
    "opts": ["The AVR will sound the ship's fire alarm", "The AVR is packed with delicate, low-voltage electronic microchips and diodes; slamming 500V or 1000V DC into these circuits via the excitation wiring will instantly and permanently destroy them", "The AVR will drain the battery of the Megger", "The AVR will artificially increase the Megger reading to 1000 M\u03a9"],
    "exp": "This is a guaranteed failure point in orals and real life. Microchips run on 5V to 24V. Hitting them with a 500V Megger turns them into burnt toast. Always isolate the brain before testing the muscle.",
    "cat": "TESTING",
    "id": "T12C_086"
  },
  {
    "q": "Besides the AVR, what else must be disconnected or shorted out on a brushless alternator rotor before applying a Megger?",
    "a": "The Rotating Diode Rectifier assembly on the rotor must be disconnected or short-circuited to protect the diodes from destructive high-voltage transients induced from the stator",
    "opts": ["The mechanical governor linkage", "The main cooling fan blades", "The Rotating Diode Rectifier assembly on the rotor must be disconnected or short-circuited to protect the diodes from destructive high-voltage transients induced from the stator", "The heavy steel flywheel"],
    "exp": "A generator is essentially a transformer. Pushing 1000V DC into the stationary coils can magnetically induce a nasty voltage spike in the spinning coils. That spike can blow out the rectifier diodes sitting on the shaft.",
    "cat": "TESTING",
    "id": "T12C_087"
  },
  {
    "q": "What is the crucial SAFETY STEP immediately after finishing a 10-minute Megger test on a massive High Voltage cable?",
    "a": "You must physically discharge the cable by connecting it to earth (hull) for several minutes; large cables act like giant capacitors and trap lethal amounts of the 5000V DC test voltage",
    "opts": ["You must paint the cable to seal any microscopic holes", "You must blow compressed air through the cable to cool it down", "You must reconnect the AVR immediately", "You must physically discharge the cable by connecting it to earth (hull) for several minutes; large cables act like giant capacitors and trap lethal amounts of the 5000V DC test voltage"],
    "exp": "A 100-meter HV cable is a massive capacitor. When you turn the Megger off, the cable is still holding 5000 Volts. If you grab the copper core to put the nut back on, it will shock you violently. Always bleed the voltage to ground with an earthing stick first.",
    "cat": "TESTING",
    "id": "T12C_088"
  },
  {
    "q": "When a high DC voltage is applied to an insulator during a Megger test, three distinct currents flow. What is the 'Capacitive Charging Current'?",
    "a": "A massive, initial surge of current that fills the 'capacitor' formed by the copper wire and the steel hull; it decays to zero very rapidly within a few seconds",
    "opts": ["A steady current that slowly rises over 10 minutes", "A current that flows backwards from the earth into the Megger", "The current that physically burns holes through the plastic", "A massive, initial surge of current that fills the 'capacitor' formed by the copper wire and the steel hull; it decays to zero very rapidly within a few seconds"],
    "exp": "When you hit the Megger button, the needle slams to 0 Ohms for a split second. This isn't a short circuit; it's the cable acting like an empty battery, sucking up current until it's 'full' of voltage.",
    "cat": "TESTING",
    "id": "T12C_089"
  },
  {
    "q": "What is the 'Dielectric Absorption Current' during an IR test?",
    "a": "A slowly decaying current caused by the molecular dipoles inside the plastic insulation physically rotating and aligning themselves with the high-voltage electrical field",
    "opts": ["The current that charges the ship's main batteries", "A slowly decaying current caused by the molecular dipoles inside the plastic insulation physically rotating and aligning themselves with the high-voltage electrical field", "The current that leaks directly through cracks in the wire", "A dangerous current that must be avoided at all costs"],
    "exp": "Plastics aren't completely dead; they have molecules with tiny positive and negative ends. 500V grabs those molecules and forces them to twist like compass needles. Twisting them takes energy (current). It takes about 10 minutes for them all to align and stop drawing current.",
    "cat": "TESTING",
    "id": "T12C_090"
  },
  {
    "q": "What is the 'Conductive Leakage Current' during an IR test?",
    "a": "The steady, constant current that physically leaks through cracks, moisture, and dirt in the insulation to the ground; this is the true indicator of the insulation's health",
    "opts": ["A harmless current that flows through the air", "A current used to power the Megger's digital display", "The steady, constant current that physically leaks through cracks, moisture, and dirt in the insulation to the ground; this is the true indicator of the insulation's health", "A current that vanishes after 5 seconds"],
    "exp": "Once the capacitor is full (seconds) and the molecules are aligned (minutes), the only current left flowing is the bad current\u2014the electrons actually squeezing through the wet, dirty plastic to escape to the hull. A high leakage current means a low Megger reading.",
    "cat": "TESTING",
    "id": "T12C_091"
  },
  {
    "q": "Why is the Polarization Index (PI) test highly recommended over a simple 1-minute Megger test?",
    "a": "Because PI tests the RATIO of the 10-minute reading to the 1-minute reading, revealing hidden moisture and contamination independent of the motor's temperature",
    "opts": ["Because the PI test uses AC voltage instead of DC", "Because the PI test automatically repairs the insulation", "Because PI tests the RATIO of the 10-minute reading to the 1-minute reading, revealing hidden moisture and contamination independent of the motor's temperature", "Because the PI test takes less time to complete"],
    "exp": "A 1-minute reading fluctuates wildly based on how hot the engine room is today. Because PI is a ratio (Math: A / B), the temperature factor cancels itself out. It provides an absolute, scientific grade of the plastic's chemical health.",
    "cat": "TESTING",
    "id": "T12C_092"
  },
  {
    "q": "What is the formula for the Polarization Index (PI)?",
    "a": "PI = Insulation Resistance at 10 minutes / Insulation Resistance at 1 minute",
    "opts": ["PI = Leakage Current / Charging Current", "PI = Voltage * Current * 10 minutes", "PI = Insulation Resistance at 10 minutes / Insulation Resistance at 1 minute", "PI = Insulation Resistance at 1 minute / Insulation Resistance at 10 minutes"],
    "exp": "You hook up the Megger, lock the button ON, write down the reading at exactly 60 seconds, write down the reading at exactly 10 minutes, and divide the big number by the small number.",
    "cat": "TESTING",
    "id": "T12C_093"
  },
  {
    "q": "If a PI test results in a score of 2.5, what is the condition of the insulation?",
    "a": "Good to Excellent. The absorption current decayed properly over 10 minutes, proving the insulation is clean, dry, and polarizing correctly",
    "opts": ["Good to Excellent. The absorption current decayed properly over 10 minutes, proving the insulation is clean, dry, and polarizing correctly", "Dangerously poor. It must be rewound immediately", "Marginal. Needs immediate space heater drying", "The motor has a dead short circuit"],
    "exp": "Anything over 2.0 is great. It means the resistance kept climbing for 10 straight minutes because the molecules were aligning, and very little bad leakage current was sneaking through.",
    "cat": "TESTING",
    "id": "T12C_094"
  },
  {
    "q": "If a PI test results in a score of 1.05 (a perfectly flat line), what is the condition of the insulation?",
    "a": "Very Poor / Dangerous. A flat ratio means steady leakage current (due to moisture or severe dirt) completely overpowered the absorption current from minute 1 to minute 10",
    "opts": ["The Megger batteries are dead", "Excellent. A flat line means absolute stability", "Acceptable for low-voltage applications only", "Very Poor / Dangerous. A flat ratio means steady leakage current (due to moisture or severe dirt) completely overpowered the absorption current from minute 1 to minute 10"],
    "exp": "If reading at 1 min is 50 M\u03a9, and reading at 10 min is 52 M\u03a9, the PI is ~1.0. This is terrible. It means the plastic is so soaked with saltwater that a massive river of leakage current is flowing, masking the tiny alignment currents.",
    "cat": "TESTING",
    "id": "T12C_095"
  },
  {
    "q": "Why is a PI test generally meaningless for a small 440V fractional-horsepower motor (e.g., a tiny ventilation fan)?",
    "a": "Small motors have extremely thin insulation with almost no volume; the dielectric absorption finishes in seconds, making the 10-minute reading practically identical to the 1-minute reading even if it is perfectly healthy",
    "opts": ["Small motors have extremely thin insulation with almost no volume; the dielectric absorption finishes in seconds, making the 10-minute reading practically identical to the 1-minute reading even if it is perfectly healthy", "A 500V Megger will instantly melt a small motor", "Small motors run on DC voltage, which defeats the test", "Small motors are immune to moisture"],
    "exp": "PI relies on millions of molecules taking 10 minutes to twist into place. A tiny fan motor doesn't have enough plastic to take 10 minutes. It aligns instantly. A 1-minute basic Megger test is perfectly sufficient for small equipment.",
    "cat": "TESTING",
    "id": "T12C_096"
  },
  {
    "q": "What is the DAR (Dielectric Absorption Ratio) test?",
    "a": "A faster alternative to the PI test; it measures the ratio of the 60-second resistance reading divided by the 30-second reading",
    "opts": ["A test that measures the thickness of the cable", "A chemical analysis of the insulating oil", "A test used strictly for checking fiber optic cables", "A faster alternative to the PI test; it measures the ratio of the 60-second resistance reading divided by the 30-second reading"],
    "exp": "Sometimes you don't have 10 minutes to stand around holding a button. DAR checks the curve early. DAR = IR(60s) / IR(30s). A healthy DAR is > 1.4. A wet DAR is < 1.1.",
    "cat": "TESTING",
    "id": "T12C_097"
  },
  {
    "q": "You prepare to Megger a 3-phase motor. The motor is disconnected from the starter. How exactly do you connect the Megger leads to test Phase-to-Earth?",
    "a": "Connect the Positive (+) lead to one of the motor's phase terminals (e.g., U1), and firmly clamp the Negative (-) lead to the bare metal motor casing or earthing stud",
    "opts": ["Hold the positive lead in your hand and touch the negative lead to the hull", "Connect both leads to the three phase terminals simultaneously", "Connect the Positive (+) lead to one of the motor's phase terminals (e.g., U1), and firmly clamp the Negative (-) lead to the bare metal motor casing or earthing stud", "Connect the leads between U1 and V1"],
    "exp": "You are testing the plastic coating separating the copper from the iron casing. Push voltage into the copper, and see how much leaks through the plastic to the iron earth clamp.",
    "cat": "TESTING",
    "id": "T12C_098"
  },
  {
    "q": "If you measure Phase-to-Earth on U1, V1, and W1 separately while the motor terminal links are still installed in a Delta or Star pattern, what are you actually measuring?",
    "a": "Because the phases are physically tied together by the links, you are measuring the entire motor winding (all three phases) against earth simultaneously",
    "opts": ["Because the phases are physically tied together by the links, you are measuring the entire motor winding (all three phases) against earth simultaneously", "You are creating a short circuit that will blow the Megger fuse", "You are testing the resistance of the terminal links themselves", "You are measuring only the U1 phase individually"],
    "exp": "If the copper links are bolted across the top, touching U1 is the same as touching V1 and W1 because they are all connected. To test a single phase independently (e.g., to find which specific coil is bad), you must unbolt and remove the brass links first.",
    "cat": "TESTING",
    "id": "T12C_099"
  },
  {
    "q": "How do you perform a Phase-to-Phase Megger test on a motor?",
    "a": "Remove the terminal links to separate the coils. Connect the Megger leads between U1 and V1, then V1 and W1, then U1 and W1 to check if the insulation BETWEEN the different coils has broken down",
    "opts": ["Leave the links installed and test U1 to the motor casing", "Touch both Megger leads to the U1 terminal", "Remove the terminal links to separate the coils. Connect the Megger leads between U1 and V1, then V1 and W1, then U1 and W1 to check if the insulation BETWEEN the different coils has broken down", "Connect U1, V1, and W1 to the 440V supply and measure the current"],
    "exp": "A motor can have a perfect 100 M\u03a9 reading to the iron casing (Phase-to-Earth), but have melted varnish internally where two copper coils rub together. Testing Phase-to-Phase finds these hidden internal shorts.",
    "cat": "TESTING",
    "id": "T12C_100"
  },
  {
    "q": "Why must you disconnect the motor supply cables from the motor terminal box if you suspect the motor is grounded?",
    "a": "To isolate the fault; if you test with the long supply cable still attached, a cut in the cable 50 meters away in the engine room will make the motor look like it has failed",
    "opts": ["To save battery power on the Megger", "To isolate the fault; if you test with the long supply cable still attached, a cut in the cable 50 meters away in the engine room will make the motor look like it has failed", "Because the cable contains anti-static fluid", "To prevent the motor from starting accidentally"],
    "exp": "Half the time, the 'dead motor' is actually just a sliced cable in a cable tray. Disconnecting the 6 nuts in the terminal box separates the motor from the cable. You Megger the bare motor. If it reads 100 M\u03a9, the motor is fine, and the problem is in the cable.",
    "cat": "TESTING",
    "id": "T12C_101"
  },
  {
    "q": "Before starting a 6.6 kV Bow Thruster motor that has been idle for 6 months, what test is absolutely critical?",
    "a": "A 5000V Megger test followed by a 10-minute Polarization Index (PI) test to guarantee the massive windings haven't absorbed humidity that would cause a catastrophic explosion when 6600 Volts hits them",
    "opts": ["A quick 500V 10-second Megger test", "A mechanical vibration test", "A phase-rotation test using a standard multimeter", "A 5000V Megger test followed by a 10-minute Polarization Index (PI) test to guarantee the massive windings haven't absorbed humidity that would cause a catastrophic explosion when 6600 Volts hits them"],
    "exp": "High voltage takes no prisoners. If that motor is damp, 6.6kV will instantly arc through the moisture, turning the copper into vapor and destroying a million-dollar thruster. The PI test scientifically proves it is dry.",
    "cat": "TESTING",
    "id": "T12C_102"
  },
  {
    "q": "What does a Megger reading of '0 \u03a9' (Zero Ohms) to earth mean?",
    "a": "A 'Dead Short'. The copper conductor is physically touching the steel hull or the iron stator casing directly. Applying power will cause an instant massive arc and trip the breaker",
    "opts": ["The Megger needs to be recalibrated", "A 'Dead Short'. The copper conductor is physically touching the steel hull or the iron stator casing directly. Applying power will cause an instant massive arc and trip the breaker", "The motor is fully charged and ready to run", "The insulation is in perfect factory condition"],
    "exp": "Zero resistance means there is no plastic left between the wire and the ship. It is a direct metal-to-metal connection.",
    "cat": "TESTING",
    "id": "T12C_103"
  },
  {
    "q": "What does a Megger reading of '> 999 M\u03a9' or 'OL' (Overload) mean?",
    "a": "The insulation resistance is so incredibly high and healthy that virtually zero leakage current is escaping; it exceeds the maximum measuring capability of the instrument",
    "opts": ["The motor has absorbed too much water", "The wire is broken in half", "The Megger's internal fuse has blown", "The insulation resistance is so incredibly high and healthy that virtually zero leakage current is escaping; it exceeds the maximum measuring capability of the instrument"],
    "exp": "On a brand new piece of dry XLPE cable, almost zero electrons can squeeze through the plastic. The Megger hits its ceiling and proudly displays 'Infinity'. This is a perfect test result.",
    "cat": "TESTING",
    "id": "T12C_104"
  },
  {
    "q": "When Meggering a generator, you forget to remove the neutral grounding link (if fitted). What will happen?",
    "a": "Every phase will show a dead short (0 \u03a9) to earth, because the test voltage will travel straight down the copper coils, through the star point, and down the grounding link to the hull",
    "opts": ["The generator will start spinning slowly", "The Megger will display infinity", "Every phase will show a dead short (0 \u03a9) to earth, because the test voltage will travel straight down the copper coils, through the star point, and down the grounding link to the hull", "The AVR will fry instantly"],
    "exp": "If the center of the 'Star' winding is intentionally bolted to the hull (earthed system), you are just pushing electricity down a wire attached to the hull. You must unbolt the neutral earthing link to test the insulation holding the wire away from the hull.",
    "cat": "TESTING",
    "id": "T12C_105"
  },
  {
    "q": "What is the 'Guard' terminal found on high-end 5kV Meggers?",
    "a": "A third test lead used to bypass and eliminate 'Surface Leakage' current (e.g., current crawling across dirty porcelain) from the measurement, ensuring the Megger only measures the true internal health of the thick cable insulation",
    "opts": ["A safety wire that prevents the operator from getting shocked", "A wire that sends test data to a laptop", "A third test lead used to bypass and eliminate 'Surface Leakage' current (e.g., current crawling across dirty porcelain) from the measurement, ensuring the Megger only measures the true internal health of the thick cable insulation", "A terminal used to charge the Megger battery"],
    "exp": "When testing a 6.6kV cable, dirt on the outside of the rubber jacket can conduct electricity, making the cable look bad inside. Wrapping a bare wire around the jacket and hooking it to the 'Guard' terminal sucks up that dirty surface current and deletes it from the math calculation.",
    "cat": "TESTING",
    "id": "T12C_106"
  },
  {
    "q": "If you Megger a 440V motor immediately after it trips on thermal overload (it is physically blazing hot), the reading is 0.5 M\u03a9. What should you do?",
    "a": "Do not condemn the motor yet. Let it cool down to room temperature and re-test. IR drops drastically with heat; a cold test might reveal it is actually a healthy 50 M\u03a9",
    "opts": ["Apply 1000V DC to burn off the excess heat", "Condemn the motor immediately and start rewinding it", "Submerge the motor in fresh water to cool it rapidly", "Do not condemn the motor yet. Let it cool down to room temperature and re-test. IR drops drastically with heat; a cold test might reveal it is actually a healthy 50 M\u03a9"],
    "exp": "Heat masks the true health of the plastic. Because resistance halves every 10 degrees, an 80\u00b0C motor will read terrible, but a 20\u00b0C motor will read perfect. Always cool it down or use math to correct it back to 40\u00b0C.",
    "cat": "TESTING",
    "id": "T12C_107"
  },
  {
    "q": "How does an ETO correctly use an 'Electrical Isolation Permit' (EIP) before IR testing?",
    "a": "It is a formal, signed document proving that the breaker is locked out (LOTO), tags are applied, and zero voltage has been verified with a meter BEFORE hands touch the copper to attach the Megger clips",
    "opts": ["It is a document signed by the port authority", "It is a certificate allowing the use of 5000V equipment", "It is a permit allowing the ETO to work overtime", "It is a formal, signed document proving that the breaker is locked out (LOTO), tags are applied, and zero voltage has been verified with a meter BEFORE hands touch the copper to attach the Megger clips"],
    "exp": "Surveyors demand strict adherence to safety culture. You never trust a switch. You lock it, tag it, test it with a voltmeter to prove it's dead, and sign your life on the EIP before touching the wires.",
    "cat": "TESTING",
    "id": "T12C_108"
  },
  {
    "q": "Why is it important to turn the Megger OFF and leave the leads connected for a few seconds after a test?",
    "a": "Modern Meggers have an internal automatic discharge circuit; leaving the leads attached allows the Megger to safely bleed the lethal capacitive voltage trapped in the cable back to zero",
    "opts": ["It sends a confirmation signal to the ship's alarm panel", "It recalibrates the Megger for the next test", "It allows the Megger to print a receipt of the test", "Modern Meggers have an internal automatic discharge circuit; leaving the leads attached allows the Megger to safely bleed the lethal capacitive voltage trapped in the cable back to zero"],
    "exp": "If you hit STOP and instantly yank the red alligator clip off, the cable is still holding 500V. It will bite you. Waiting 5 seconds lets the internal resistor in the Megger suck the voltage out safely.",
    "cat": "TESTING",
    "id": "T12C_109"
  },
  {
    "q": "When IR testing an entire switchboard, why must you push all the 'Emergency Stop' buttons and ensure all contactors are open?",
    "a": "To prevent the 500V test voltage from sneaking through control circuits, indicator lights, and PLCs, which could damage sensitive 24V components or give falsely low readings",
    "opts": ["To test the physical springs in the buttons", "To reset the preferential trip relays", "To ensure the ship's horn doesn't blast accidentally", "To prevent the 500V test voltage from sneaking through control circuits, indicator lights, and PLCs, which could damage sensitive 24V components or give falsely low readings"],
    "exp": "Switchboards are spiderwebs of wiring. A 220V indicator light bulb left in the circuit provides a path to ground, ruining your Megger reading. Pull control fuses and open all switches to isolate the heavy copper busbars completely.",
    "cat": "TESTING",
    "id": "T12C_110"
  },
  {
    "q": "What is the standard acceptable formula to determine the absolute minimum safe Megger reading (in M\u03a9) for a large electric machine?",
    "a": "Minimum M\u03a9 = Rated kV + 1. (e.g., A 0.44 kV motor needs a minimum of 1.44 M\u03a9. A 6.6 kV motor needs 7.6 M\u03a9)",
    "opts": ["Minimum M\u03a9 = Rated kV + 1. (e.g., A 0.44 kV motor needs a minimum of 1.44 M\u03a9. A 6.6 kV motor needs 7.6 M\u03a9)", "Minimum M\u03a9 = Motor Weight in kg / 100", "Minimum M\u03a9 is always exactly 5.0 M\u03a9 regardless of size", "Minimum M\u03a9 = Rated Amps / 10"],
    "exp": "This is a classic IEEE rule of thumb. Higher voltage machines need more robust insulation. A 1 M\u03a9 reading might barely scrape by for a 440V pump, but it is an absolute disaster for a 6.6kV thruster.",
    "cat": "TESTING",
    "id": "T12C_111"
  },
  {
    "q": "What is the correct sequence of layers for a standard Low Voltage (440V) Marine Armored Cable, from the innermost core to the outside?",
    "a": "Conductor \u2192 Insulation \u2192 Bedding (Inner Sheath) \u2192 Armour \u2192 Outer Sheath",
    "opts": ["Insulation \u2192 Conductor \u2192 Bedding \u2192 Outer Sheath \u2192 Armour", "Conductor \u2192 Armour \u2192 Insulation \u2192 Bedding \u2192 Outer Sheath", "Conductor \u2192 Insulation \u2192 Bedding (Inner Sheath) \u2192 Armour \u2192 Outer Sheath", "Conductor \u2192 Metallic Screen \u2192 Insulation \u2192 Armour \u2192 Outer Sheath"],
    "exp": "The copper conducts. The insulation holds the voltage. The bedding protects the soft plastic from the sharp steel. The steel armour provides physical crush protection. The outer sheath protects against seawater and oil.",
    "cat": "CABLES",
    "id": "T12C_112"
  },
  {
    "q": "For a High Voltage (6.6kV) cable, what critical extra layers are added between the copper conductor and the main XLPE insulation?",
    "a": "A 'Conductor Screen' (semi-conductive layer) to smooth out the intense electrical field and prevent localized stress points that would drill holes into the XLPE",
    "opts": ["A layer of Kevlar to prevent bullets from piercing the cable", "A layer of pure silver to increase conductivity", "A layer of lead to block radioactive emissions", "A 'Conductor Screen' (semi-conductive layer) to smooth out the intense electrical field and prevent localized stress points that would drill holes into the XLPE"],
    "exp": "Stranded copper is bumpy. At 6.6kV, voltage stress concentrates on the sharp bumps, tearing apart the plastic over time. Wrapping the bumpy copper in smooth, semi-conductive black tape creates a perfectly smooth electrical cylinder.",
    "cat": "CABLES",
    "id": "T12C_113"
  },
  {
    "q": "What is the function of the 'Metallic Screen' (copper tape or wire network) wrapped around the outside of the insulation in an HV cable?",
    "a": "It ensures the electric field remains perfectly contained inside the cable, and provides a massive, solid path to carry lethal fault currents safely to the earth relay if the cable is spiked",
    "opts": ["It prevents the cable from stretching", "It acts as the primary neutral return wire for the 440V system", "It ensures the electric field remains perfectly contained inside the cable, and provides a massive, solid path to carry lethal fault currents safely to the earth relay if the cable is spiked", "It generates heat to melt ice off the cable"],
    "exp": "HV fields are dangerous. The grounded copper screen acts like a Faraday cage, trapping the electrical stress inside the insulation. If a forklift forks the cable, the screen captures the 6.6kV instantly and dumps it to the hull, tripping the breaker.",
    "cat": "CABLES",
    "id": "T12C_114"
  },
  {
    "q": "What does 'SWA' stand for in marine cable specifications?",
    "a": "Steel Wire Armour",
    "opts": ["Solid Wire Assembly", "Synthetic Water-resistant Alloy", "Steel Wire Armour", "Standard Weight Aluminium"],
    "exp": "SWA consists of dozens of thick, galvanized steel wires wrapped in a spiral around the inner cable. It provides immense tensile strength (pulling power) and massive protection against impacts and rats.",
    "cat": "CABLES",
    "id": "T12C_115"
  },
  {
    "q": "What is the critical difference between IEC 60332 (Flame Retardant) and IEC 60331 (Fire Resistant) cables?",
    "a": "Flame Retardant (60332) simply stops burning when the fire is removed; Fire Resistant (60331) uses Mica tape to ensure the cable continues to conduct electricity and operate critical pumps while completely engulfed in 750\u00b0C flames",
    "opts": ["Fire Resistant is only used for underwater applications", "Flame Retardant (60332) simply stops burning when the fire is removed; Fire Resistant (60331) uses Mica tape to ensure the cable continues to conduct electricity and operate critical pumps while completely engulfed in 750\u00b0C flames", "Flame Retardant survives 1000\u00b0C; Fire Resistant melts at 500\u00b0C", "They are exactly the same thing, just different European vs US codes"],
    "exp": "This is a mandatory oral question. If a fire hits a normal cable, it melts and shorts out (but won't spread the fire). If a fire hits a steering gear cable, it MUST keep working so the ship can steer away from danger. Fire Resistant (60331) is for survival.",
    "cat": "CABLES",
    "id": "T12C_116"
  },
  {
    "q": "Where MUST Fire Resistant (IEC 60331) cables be used onboard a ship?",
    "a": "For 'Essential Services' traversing high-risk areas, such as steering gear motors, emergency fire pumps, emergency lighting, and fire detection systems",
    "opts": ["For the heavy fuel oil transfer pumps", "For the crew's personal cabin outlets", "For 'Essential Services' traversing high-risk areas, such as steering gear motors, emergency fire pumps, emergency lighting, and fire detection systems", "For the main galley ovens and deep fryers"],
    "exp": "SOLAS dictates that life-saving equipment must survive an engine room fire. Running a standard plastic cable to the emergency fire pump defeats the purpose, as the fire would disable the pump before you could use it.",
    "cat": "CABLES",
    "id": "T12C_117"
  },
  {
    "q": "What does LSZH or LSF stand for, and why is it legally mandated for cables in passenger and accommodation areas?",
    "a": "Low Smoke Zero Halogen; it is chemically formulated so that if it burns, it does not release thick black smoke or highly toxic, acidic Hydrogen Chloride gas that blinds and suffocates evacuating crew",
    "opts": ["Low Smoke Zero Halogen; it is chemically formulated so that if it burns, it does not release thick black smoke or highly toxic, acidic Hydrogen Chloride gas that blinds and suffocates evacuating crew", "Lightweight Synthetic Zinc Housing; it saves weight on the ship", "Lead Shielded Zero Heat; it prevents infrared detection by pirates", "Low Spark Zone Hazard; it prevents static sparks in fuel tanks"],
    "exp": "Old PVC cables emit dense black smoke and hydrochloric acid when they burn. In a ship fire, you die from choking on the smoke long before the flames reach you. LSZH cables burn with a faint, non-toxic white smoke.",
    "cat": "CABLES",
    "id": "T12C_118"
  },
  {
    "q": "What is the 'Oxygen Index' (OI) regarding cable fire performance?",
    "a": "It measures the minimum percentage of oxygen required in the air to sustain a flame on the plastic; an OI greater than 21% means the cable is 'Flame Retardant' because it will self-extinguish in normal atmospheric air",
    "opts": ["It measures how much oxygen the cable produces when burning", "It dictates how fast the cable will rust in the open air", "It measures the percentage of pure copper inside the wire", "It measures the minimum percentage of oxygen required in the air to sustain a flame on the plastic; an OI greater than 21% means the cable is 'Flame Retardant' because it will self-extinguish in normal atmospheric air"],
    "exp": "Normal air is 21% Oxygen. If a cable requires an atmosphere of 45% Oxygen to keep burning, it simply cannot burn on its own in the engine room. If you take a blowtorch away from it, it immediately snuffs itself out.",
    "cat": "CABLES",
    "id": "T12C_119"
  },
  {
    "q": "How must three massive Single-Core AC cables (e.g., L1, L2, L3 feeding a giant bow thruster) be laid out on a cable tray to comply with electrical safety rules?",
    "a": "They must be clamped tightly together in a 'Trefoil' (cloverleaf triangle) formation to ensure their massive individual magnetic fields cancel each other out",
    "opts": ["They must be run in completely different rooms", "They must be clamped tightly together in a 'Trefoil' (cloverleaf triangle) formation to ensure their massive individual magnetic fields cancel each other out", "They must be wrapped in heavy lead shielding", "They must be spread as far apart as physically possible to prevent overheating"],
    "exp": "Running a single 1500 Amp AC cable acts like a giant electromagnet. It will induce severe eddy currents in the steel ship hull, heating the metal until the paint blisters and burns. Bundling the three phases together makes L1+L2+L3 = 0, deleting the magnetic field.",
    "cat": "CABLES",
    "id": "T12C_120"
  },
  {
    "q": "Why are single-core AC cables rarely armoured with Steel Wire (SWA)?",
    "a": "Because the alternating magnetic field of a single phase would induce massive eddy currents and hysteresis losses directly in the magnetic steel wire, cooking the cable; non-magnetic aluminium or copper armour must be used instead",
    "opts": ["Because single-core cables don't require any physical protection", "Because the alternating magnetic field of a single phase would induce massive eddy currents and hysteresis losses directly in the magnetic steel wire, cooking the cable; non-magnetic aluminium or copper armour must be used instead", "Because steel wire rusts too quickly on open decks", "Because steel is too heavy for large cables"],
    "exp": "Steel is magnetic. Wrapping a single AC phase in steel turns it into a transformer with a short-circuited secondary. The steel armor will glow red hot. 3-core cables use steel because the three phases cancel each other out before the field hits the armor.",
    "cat": "CABLES",
    "id": "T12C_121"
  },
  {
    "q": "When ordering a new cable for an engine room cooling pump, what is the proper specific designation you must provide to the superintendent?",
    "a": "3-core, 35 mm\u00b2, stranded copper, XLPE insulated, SWA, LSF sheathed, 600/1000V, IEC 60092-353, 50 meters length",
    "opts": ["Standard marine PVC cord, 35 amps capacity, 50 meters", "3-core, 35 mm\u00b2, stranded copper, XLPE insulated, SWA, LSF sheathed, 600/1000V, IEC 60092-353, 50 meters length", "Heavy duty wire, big size, 440V, waterproof, 50 meters", "1 inch thick cable, 3 wires inside, fireproof, 50 meters"],
    "exp": "Vagueness gets the wrong cable delivered in Singapore. You must specify the core count, cross-sectional area (thickness), material, insulation type, armor type, sheath material, voltage rating, and international standard.",
    "cat": "CABLES",
    "id": "T12C_122"
  },
  {
    "q": "What is an 'MCT' (Multi-Cable Transit) or Roxtec block, and where is it mandatory?",
    "a": "A steel frame packed with modular rubber sealing blocks and clamped tight, used wherever cables pass through a watertight bulkhead or fire-rated deck to maintain the ship's absolute watertight and A-60 fire integrity",
    "opts": ["A device that splits high voltage into low voltage", "A steel frame packed with modular rubber sealing blocks and clamped tight, used wherever cables pass through a watertight bulkhead or fire-rated deck to maintain the ship's absolute watertight and A-60 fire integrity", "A junction box used to splice multiple cables together", "A heavy-duty winch used to pull cables through pipes"],
    "exp": "You can't just drill a hole in a wall, push a wire through, and fill it with silicone. If the ship floods, the pressure will blow the silicone out. MCT blocks use mechanically crushed rubber to grip the wires tight enough to hold back 30 feet of ocean water.",
    "cat": "CABLES",
    "id": "T12C_123"
  },
  {
    "q": "What is the function of the 'Intumescent' material used in some MCT bulkhead penetration blocks?",
    "a": "When exposed to the extreme heat of a fire (>200\u00b0C), the material violently expands and swells up to 5 times its size, crushing the melting plastic cables and sealing the hole against flames and toxic smoke",
    "opts": ["It absorbs water to prevent the cable from rusting", "It melts and acts as a fire-suppression foam", "When exposed to the extreme heat of a fire (>200\u00b0C), the material violently expands and swells up to 5 times its size, crushing the melting plastic cables and sealing the hole against flames and toxic smoke", "It changes color to warn the crew of high temperatures"],
    "exp": "During a raging fire, the PVC/XLPE jacket on a cable will melt and burn away, leaving an open hole through the bulkhead for the fire to escape to the next room. Intumescent rubber detects the heat and rapidly inflates like a dry sponge, aggressively plugging the gap.",
    "cat": "CABLES",
    "id": "T12C_124"
  },
  {
    "q": "What is an 'A2' type cable gland (BS 6121 standard), commonly used on marine motors?",
    "a": "A heavy-duty brass gland designed specifically for armored cables; it features an inner cone to clamp the steel wire armor firmly for earthing, and an outer rubber seal to grip the sheath and provide IP66 watertightness",
    "opts": ["A specialized gland for fiber optic networks", "A plastic gland used exclusively for thin data cables", "A gland that chemically welds the cable to the motor box", "A heavy-duty brass gland designed specifically for armored cables; it features an inner cone to clamp the steel wire armor firmly for earthing, and an outer rubber seal to grip the sheath and provide IP66 watertightness"],
    "exp": "Marine glands do two vital things: keep seawater out of the motor, and grab the steel armor wires tightly so that if a short circuit hits the armor, the fault current flows safely through the brass gland into the grounded motor casing.",
    "cat": "CABLES",
    "id": "T12C_125"
  },
  {
    "q": "What does 'Derating' mean when installing 20 power cables tightly bundled together on a single cable tray?",
    "a": "Because tightly bunched cables cannot dissipate their I\u00b2R heat into the air, their maximum safe Amp capacity is mathematically reduced (derated); a cable that can handle 100A alone might only be safely rated for 70A in a thick bundle",
    "opts": ["The magnetic fields cancel out, allowing them to carry double the current", "The cables are given a lower fire-resistance classification", "Because tightly bunched cables cannot dissipate their I\u00b2R heat into the air, their maximum safe Amp capacity is mathematically reduced (derated); a cable that can handle 100A alone might only be safely rated for 70A in a thick bundle", "The voltage of the cables is reduced by the transformer"],
    "exp": "Heat is the enemy of plastic. If the cable in the dead center of a giant bundle is pumping 100 Amps, its heat has nowhere to go. It will melt. Designers use complex tables to 'derate' the cables, forcing them to use a thicker, cooler wire for the same job.",
    "cat": "CABLES",
    "id": "T12C_126"
  },
  {
    "q": "According to SOLAS, how should the power cables for the Port and Starboard steering gear motors be routed?",
    "a": "They must be separated as widely as is physically practicable throughout their entire length from the switchboard to the steering flat, preventing a single localized fire or pipe burst from destroying both redundant feeds",
    "opts": ["They must be run along the outside weather deck to keep them cool", "They must be bundled together in an extra-thick steel pipe for ultimate crush protection", "They must be separated as widely as is physically practicable throughout their entire length from the switchboard to the steering flat, preventing a single localized fire or pipe burst from destroying both redundant feeds", "They must share the exact same cable tray to ensure equal voltage drop"],
    "exp": "Redundancy is useless if a single event kills both backups. If a fire starts in the port alleyway, it might burn the Port steering cable, but the Starboard cable safely routed down the starboard alleyway survives, saving the ship.",
    "cat": "CABLES",
    "id": "T12C_127"
  },
  {
    "q": "What is the SOLAS rule regarding making joints or splices in a power cable run (e.g., repairing a cut cable)?",
    "a": "Joints should be avoided wherever possible; if absolutely necessary, they must be made using class-approved, flameproof resin/epoxy splice kits that restore the cable to its original IP rating and mechanical strength",
    "opts": ["Joints should be avoided wherever possible; if absolutely necessary, they must be made using class-approved, flameproof resin/epoxy splice kits that restore the cable to its original IP rating and mechanical strength", "Cables can simply be tied together inside a plastic junction box", "Standard wire nuts wrapped tightly in electrical tape are perfectly legal", "Joints are completely illegal under all circumstances and the entire 200m cable must be replaced"],
    "exp": "A splice is a weak point that can spark, heat up, or let water in. While running a brand new continuous cable is always preferred, a proper 2-part liquid epoxy resin kit that cures into a solid waterproof brick is the only acceptable permanent repair.",
    "cat": "CABLES",
    "id": "T12C_128"
  },
  {
    "q": "What is the restriction on cable joints located in a Hazardous Area (e.g., inside a Paint Locker or Pump Room)?",
    "a": "Cable joints are strictly PROHIBITED in hazardous explosive areas. Cables must run continuously without any breaks from the safe area directly to the Ex-certified equipment",
    "opts": ["They are allowed if inspected daily", "Cable joints are strictly PROHIBITED in hazardous explosive areas. Cables must run continuously without any breaks from the safe area directly to the Ex-certified equipment", "They must be soldered rather than crimped", "They must be wrapped in red tape"],
    "exp": "In a room full of explosive gas, a failing splice is a bomb detonator. Class societies enforce a zero-tolerance policy for joints in Ex-zones. The cable must be a single, unbroken piece of copper.",
    "cat": "CABLES",
    "id": "T12C_129"
  },
  {
    "q": "What is 'MICC' (Mineral Insulated Copper Clad) cable, and where is it traditionally used?",
    "a": "A highly specialized fire-survival cable made of solid copper rods packed tightly inside a copper tube filled with compressed Magnesium Oxide powder; historically used for fire alarms and emergency lighting",
    "opts": ["A cable used exclusively for underwater ROVs", "A cheap, flexible cable used for temporary lighting", "A highly specialized fire-survival cable made of solid copper rods packed tightly inside a copper tube filled with compressed Magnesium Oxide powder; historically used for fire alarms and emergency lighting", "A fiber optic cable wrapped in copper mesh"],
    "exp": "MICC (often called Pyrotenax) contains zero plastic. It is pure metal and rock dust. It can operate while literally glowing red hot in a 1000\u00b0C fire. It is extremely difficult to install and terminate, so modern fire-resistant XLPE/Mica tape cables have largely replaced it.",
    "cat": "CABLES",
    "id": "T12C_130"
  },
  {
    "q": "If a cable needs to cross a structural expansion joint in the ship's hull, how must it be installed?",
    "a": "An 'Expansion Loop' (a physical slack coil or U-bend of cable) must be provided to absorb the stretching and compression of the ship's steel without snapping the rigid copper wires",
    "opts": ["It must be pulled as tight as a guitar string to brace the ship", "An 'Expansion Loop' (a physical slack coil or U-bend of cable) must be provided to absorb the stretching and compression of the ship's steel without snapping the rigid copper wires", "It must be encased in a solid block of concrete", "It must be cut in half and connected via a sliding slip-ring"],
    "exp": "Ships are flexible; they bend and hog/sag in heavy seas by several inches. If a thick SWA cable is clamped tight across a moving joint, the immense mechanical leverage will rip the copper conductors in half.",
    "cat": "CABLES",
    "id": "T12C_131"
  },
  {
    "q": "Why is it critical to use a proper calibrated crimping tool rather than pliers when terminating a cable lug onto a stranded copper wire?",
    "a": "A proper hex/indent crimper uses immense, calculated tons of pressure to cold-weld the copper strands and the lug into a solid, gas-tight block of metal with near-zero electrical resistance",
    "opts": ["A proper hex/indent crimper uses immense, calculated tons of pressure to cold-weld the copper strands and the lug into a solid, gas-tight block of metal with near-zero electrical resistance", "Because pliers leave tool marks that rust", "Because pliers are illegal under MARPOL", "Because the crimping tool automatically solders the wire"],
    "exp": "A bad crimp leaves air gaps. Electricity arcing through air gaps creates immense heat. Most motor terminal box fires start because a lazy electrician squeezed a 100-Amp lug with a pair of channel-locks instead of using the heavy hydraulic crimper.",
    "cat": "CABLES",
    "id": "T12C_132"
  },
  {
    "q": "What is the minimum bending radius for a standard heavy marine power cable?",
    "a": "Typically 6 to 8 times the overall diameter of the cable (e.g., an 80mm thick cable cannot be bent tighter than a 480mm curve)",
    "opts": ["It can be bent as tight as a 90-degree corner", "Exactly 2 times the diameter", "Typically 6 to 8 times the overall diameter of the cable (e.g., an 80mm thick cable cannot be bent tighter than a 480mm curve)", "Marine cables cannot be bent at all; they must be run straight"],
    "exp": "Forcing a thick cable around a sharp steel corner stretches the outer plastic until it tears, and crushes the inner insulation against the copper core, causing a high-voltage short circuit.",
    "cat": "CABLES",
    "id": "T12C_133"
  },
  {
    "q": "Why are standard AC power cables and 24V DC communication cables generally forbidden from sharing the exact same cable tray without a physical divider?",
    "a": "The high voltage and heavy alternating currents of the power cables create immense electromagnetic fields that induce destructive noise/voltage spikes into the delicate 24V data lines",
    "opts": ["Because the AC cables are too heavy and will crush the DC cables", "Because the 24V cables will drain power from the 440V cables", "The high voltage and heavy alternating currents of the power cables create immense electromagnetic fields that induce destructive noise/voltage spikes into the delicate 24V data lines", "Because it violates the ship's color-coding aesthetic"],
    "exp": "EMI (Electromagnetic Interference) is a massive issue on modern ships. Putting a fragile Cat6 ethernet cable right next to a 2000kW Bow Thruster cable will completely scramble the ship's computer network every time the thruster fires.",
    "cat": "CABLES",
    "id": "T12C_134"
  },
  {
    "q": "What is 'Skin Effect' in large AC power cables?",
    "a": "Alternating Current (AC) naturally forces electrons to flow mostly along the outer 'skin' of the copper wire rather than through the center, increasing the effective resistance of the cable",
    "opts": ["The tendency of the outer plastic sheath to peel off in the sun", "A condition where the steel armor becomes magnetized", "The reaction of saltwater with the copper wire turning it green", "Alternating Current (AC) naturally forces electrons to flow mostly along the outer 'skin' of the copper wire rather than through the center, increasing the effective resistance of the cable"],
    "exp": "In DC, the whole wire is used. In AC, changing magnetic fields inside the wire push the electrons to the edge. This is why marine cables are made of hundreds of tiny stranded wires rather than one giant solid copper rod\u2014it provides much more 'skin' surface area.",
    "cat": "CABLES",
    "id": "T12C_135"
  },
  {
    "q": "When sizing a cable, what two independent electrical calculations must the engineer verify to ensure it is safe?",
    "a": "The 'Current Carrying Capacity' (is the wire thick enough not to melt from the amps) and the 'Voltage Drop' (is the wire too long, causing the voltage to sag below 5% at the motor end)",
    "opts": ["The 'Current Carrying Capacity' (is the wire thick enough not to melt from the amps) and the 'Voltage Drop' (is the wire too long, causing the voltage to sag below 5% at the motor end)", "The 'Capacitance' and the 'Inductance' only", "The 'Weight Limit' and the 'Color Code'", "The 'Magnetic Resonance' and the 'Frequency Shift'"],
    "exp": "A thin wire might survive 50 amps without melting, but if it runs 200 meters to the bow thruster, the natural resistance of the copper will eat 30 Volts. The motor receives only 410V, stalls, and burns out. Both thickness and length matter.",
    "cat": "CABLES",
    "id": "T12C_136"
  },
  {
    "q": "What is the primary difference between a 'Flexible' cable (Class 5/6) and a standard stranded cable (Class 2)?",
    "a": "Flexible cables use hundreds of extremely fine, hair-like copper strands, allowing them to bend and move constantly without snapping; standard cables use thicker, rigid strands meant for permanent, fixed installation",
    "opts": ["Flexible cables are made of aluminum", "Flexible cables have no outer insulation jacket", "Standard cables can carry ten times the voltage", "Flexible cables use hundreds of extremely fine, hair-like copper strands, allowing them to bend and move constantly without snapping; standard cables use thicker, rigid strands meant for permanent, fixed installation"],
    "exp": "A crane pendant or a portable welding machine requires Class 5 flexible wire. If you use standard rigid ship wiring, the thick copper strands will snap from metal fatigue within a week of bending.",
    "cat": "CABLES",
    "id": "T12C_137"
  },
  {
    "q": "What indicates a cable is IEC 60092 approved for marine use?",
    "a": "It typically possesses a Type Approval certificate from a major classification society (like DNV, LR, or ABS) confirming it survives vibration, oil, and flame-retardant marine tests",
    "opts": ["It is filled with pressurized helium gas", "It has a waterproof USB port on the end", "It is painted bright orange", "It typically possesses a Type Approval certificate from a major classification society (like DNV, LR, or ABS) confirming it survives vibration, oil, and flame-retardant marine tests"],
    "exp": "You cannot buy standard house wire from a hardware store and put it on a ship. Ship cables endure vicious vibration, salt, and oil. Surveyors look for the 'DNV Approved' or 'LR' stamp printed right on the cable jacket.",
    "cat": "CABLES",
    "id": "T12C_138"
  },
  {
    "q": "If an ETO is inspecting a massive cable bundle and sees a white powdery substance leaking out of the ends, what is it?",
    "a": "Talcum or chalk powder, deliberately placed inside the cable by the manufacturer during extrusion to prevent the internal rubber layers from vulcanizing and sticking together, making it easier to strip",
    "opts": ["The breakdown of the copper core due to high frequency", "Talcum or chalk powder, deliberately placed inside the cable by the manufacturer during extrusion to prevent the internal rubber layers from vulcanizing and sticking together, making it easier to strip", "Severe corrosion of the aluminum shielding", "Dried sea salt from a hull leak"],
    "exp": "When stripping the tough outer jacket off a multi-core cable, the powder acts as a lubricant. Without it, the hot plastic would melt directly onto the inner wires during manufacturing, making it impossible for the ETO to peel the layers apart.",
    "cat": "CABLES",
    "id": "T12C_139"
  },
  {
    "q": "Why must you physically tag and clearly identify both ends of every single cable during an installation or motor overhaul?",
    "a": "To ensure absolute safety and prevent catastrophic cross-wiring; crossing phases will blow up motors, and connecting a 440V line to a 24V sensor input will destroy the entire automation rack",
    "opts": ["To ensure absolute safety and prevent catastrophic cross-wiring; crossing phases will blow up motors, and connecting a 440V line to a 24V sensor input will destroy the entire automation rack", "To measure the exact length of the cable", "To satisfy aesthetic color-coding rules", "Because the tags act as a secondary grounding point"],
    "exp": "When you disconnect 15 identical black wires to pull a giant crane motor out for overhaul, you will never remember which one is L1, L2, L3, Thermistor +, Thermistor -, Space Heater L, and Space Heater N without rigorous metal tagging.",
    "cat": "CABLES",
    "id": "T12C_140"
  },
  {
    "q": "What does SOLAS dictate regarding the earthing of an armored cable?",
    "a": "The metallic armor must be electrically continuous and firmly clamped to the earthed metal structure (hull) at BOTH ends of the cable run (with rare exceptions for specific instrumentation shields)",
    "opts": ["The armor must be connected to the live phase to act as a heater", "The metallic armor must be electrically continuous and firmly clamped to the earthed metal structure (hull) at BOTH ends of the cable run (with rare exceptions for specific instrumentation shields)", "The armor should only be grounded at one end", "The armor must be cut off and covered in electrical tape"],
    "exp": "Safety ground must be robust. Bolting the brass A2 gland tightly into the switchboard wall at one end, and into the motor casing at the other end, ensures any fault current slamming into the armor has a massive, zero-resistance path to the ship's hull to trip the breaker.",
    "cat": "CABLES",
    "id": "T12C_141"
  }
]);
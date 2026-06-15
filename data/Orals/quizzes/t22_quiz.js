window.loadQuizzes("T22_Practical", [
  {
    "q": "What is the relationship between V_peak and V_rms?",
    "a": "V_peak = V_rms × √2",
    "opts": [
      "V_peak = V_rms / √2",
      "V_peak = V_rms × √3",
      "V_peak = V_rms × √2",
      "V_peak = V_rms × 2"
    ],
    "exp": "For AC waveforms, the peak voltage is the RMS value multiplied by √2.",
    "cat": "FUND",
    "id": "T22_001"
  },
  {
    "q": "What is the line voltage (V_L) in a 3-phase Star connection?",
    "a": "V_L = √3 × V_ph",
    "opts": [
      "V_L = V_ph",
      "V_L = V_ph / √3",
      "V_L = √3 × V_ph",
      "V_L = 3 × V_ph"
    ],
    "exp": "In a star connection, line voltage is larger than phase voltage by a factor of √3.",
    "cat": "FUND",
    "id": "T22_002"
  },
  {
    "q": "In a 3-phase Delta connection, what is the relationship between line and phase current?",
    "a": "I_L = √3 × I_ph",
    "opts": [
      "I_L = I_ph",
      "I_L = √3 × I_ph",
      "I_L = I_ph / √3",
      "I_L = 3 × I_ph"
    ],
    "exp": "In a delta connection, the voltage remains the same but the line current is √3 times the phase current.",
    "cat": "FUND",
    "id": "T22_003"
  },
  {
    "q": "What is considered a safe voltage for portable tools in confined or wet spaces on a ship?",
    "a": "≤50 V between conductors",
    "opts": [
      "110 V between conductors",
      "220 V between conductors",
      "≤50 V between conductors",
      "≤24 V to earth only"
    ],
    "exp": "Portable equipment in wet or confined spaces must be supplied at ≤50 V AC or DC.",
    "cat": "FUND",
    "id": "T22_004"
  },
  {
    "q": "Why is AC generally considered more dangerous than DC at the same voltage level?",
    "a": "AC causes muscular tetany making the victim unable to let go",
    "opts": [
      "AC causes a single violent jerk that throws the victim",
      "AC causes muscular tetany making the victim unable to let go",
      "AC has lower peak voltages than DC",
      "AC does not affect the heart rhythm"
    ],
    "exp": "AC (especially at 50 Hz) resonates with the heart and causes muscle contractions that trap the victim.",
    "cat": "FUND",
    "id": "T22_005"
  },
  {
    "q": "Which law explains why induced EMF always opposes the change producing it?",
    "a": "Lenz's Law",
    "opts": [
      "Faraday's Law",
      "Ampere's Law",
      "Lenz's Law",
      "Ohm's Law"
    ],
    "exp": "Lenz's Law states that induced EMF opposes its cause, which explains back-EMF in motors.",
    "cat": "FUND",
    "id": "T22_006"
  },
  {
    "q": "What is the practical unit of permittivity used to determine cable capacitance per unit length?",
    "a": "F/m (Farads per meter)",
    "opts": [
      "F/m (Farads per meter)",
      "V/m (Volts per meter)",
      "C/V (Coulombs per volt)",
      "A/m (Amperes per meter)"
    ],
    "exp": "Permittivity (ε) is measured in Farads per meter and determines insulation capacitance.",
    "cat": "FUND",
    "id": "T22_007"
  },
  {
    "q": "Which unit represents electric field strength when calculating cable insulation stress?",
    "a": "V/m (Volts per meter)",
    "opts": [
      "F/m (Farads per meter)",
      "V/m (Volts per meter)",
      "W/m (Watts per meter)",
      "C/m (Coulombs per meter)"
    ],
    "exp": "Electric field strength (E) is calculated as Voltage divided by distance (V/d).",
    "cat": "FUND",
    "id": "T22_008"
  },
  {
    "q": "Why are Alnico magnets commonly used in moving-coil instruments?",
    "a": "They have high coercivity and resist demagnetisation",
    "opts": [
      "They have low coercivity and easily magnetise",
      "They have high coercivity and resist demagnetisation",
      "They are excellent electrical insulators",
      "They change flux density based on temperature"
    ],
    "exp": "Aluminium-Nickel-Cobalt alloys resist demagnetisation, making them ideal for precise instruments.",
    "cat": "FUND",
    "id": "T22_009"
  },
  {
    "q": "What component is used to suppress the voltage spike when an inductor's circuit is opened?",
    "a": "Flyback diode or varistor",
    "opts": [
      "Smoothing capacitor",
      "Step-up transformer",
      "Flyback diode or varistor",
      "Choke ballast"
    ],
    "exp": "Current in an inductor cannot change instantly; a diode or varistor absorbs the resulting spike.",
    "cat": "FUND",
    "id": "T22_010"
  },
  {
    "q": "What happens to the total heat output when more resistive heaters are added in parallel?",
    "a": "Total heat output INCREASES",
    "opts": [
      "Total heat output DECREASES",
      "Total heat output remains the same",
      "Total heat output INCREASES",
      "Voltage across each heater drops proportionally"
    ],
    "exp": "Adding parallel heaters lowers total resistance, drawing more current and increasing total heat.",
    "cat": "FUND",
    "id": "T22_011"
  },
  {
    "q": "What is defined as the zero (0 V) reference potential on a ship?",
    "a": "Earth / hull / ground",
    "opts": [
      "The neutral busbar",
      "The generator star point",
      "Earth / hull / ground",
      "The battery negative terminal"
    ],
    "exp": "The ship's hull represents Earth potential and is universally used as the 0 V reference.",
    "cat": "FUND",
    "id": "T22_012"
  },
  {
    "q": "According to Ampere's law, what force occurs between parallel conductors carrying current in the SAME direction?",
    "a": "They attract each other",
    "opts": [
      "They repel each other",
      "They attract each other",
      "They cancel each other's magnetic field",
      "There is no force between them"
    ],
    "exp": "Parallel currents in the same direction attract, while opposite directions repel.",
    "cat": "FUND",
    "id": "T22_013"
  },
  {
    "q": "Why does a fluorescent lamp require a choke (ballast) in series?",
    "a": "To limit current after the arc strikes",
    "opts": [
      "To correct the power factor",
      "To limit current after the arc strikes",
      "To heat the cathodes continuously",
      "To convert AC into DC for the arc"
    ],
    "exp": "Without a ballast limiting the current, the low-resistance arc would draw destructive current levels.",
    "cat": "FUND",
    "id": "T22_014"
  },
  {
    "q": "At what typical range is an overload relay set relative to the full-load current (FLC)?",
    "a": "90–105% of FLC",
    "opts": [
      "50–60% of FLC",
      "75–85% of FLC",
      "90–105% of FLC",
      "120–130% of FLC"
    ],
    "exp": "Thermal overload relays are typically set around 100% (90-105%) to allow short starting overloads but trip on sustained faults.",
    "cat": "FUND",
    "id": "T22_015"
  },
  {
    "q": "During morning rounds, what indicates a healthy insulated system on the MSB Earth Fault lamps?",
    "a": "All 3 lamps are equally bright",
    "opts": [
      "All 3 lamps are completely dark",
      "One lamp is dark and two are bright",
      "All 3 lamps are equally bright",
      "The lamps sequence on and off rapidly"
    ],
    "exp": "In a healthy ungrounded system, all three Earth Fault lamps will glow with equal, half-brilliance.",
    "cat": "DUTY",
    "id": "T22_016"
  },
  {
    "q": "What is the correct float voltage for a lead-acid battery cell?",
    "a": "2.25 V/cell",
    "opts": [
      "1.4 V/cell",
      "2.0 V/cell",
      "2.25 V/cell",
      "2.4 V/cell"
    ],
    "exp": "Lead-acid cells are kept at a float voltage of 2.25 V/cell (NiCd is 1.4 V/cell).",
    "cat": "DUTY",
    "id": "T22_017"
  },
  {
    "q": "What is the correct float voltage for a NiCd battery cell?",
    "a": "1.4 V/cell",
    "opts": [
      "1.2 V/cell",
      "1.4 V/cell",
      "2.0 V/cell",
      "2.25 V/cell"
    ],
    "exp": "NiCd batteries have a standard float voltage of 1.4 V per cell.",
    "cat": "DUTY",
    "id": "T22_018"
  },
  {
    "q": "Under SOLAS, what is the maximum allowed run-up time for the Emergency Generator to assume full load?",
    "a": "<45 seconds",
    "opts": [
      "<15 seconds",
      "<30 seconds",
      "<45 seconds",
      "<60 seconds"
    ],
    "exp": "SOLAS requires the emergency generator to start automatically and assume load within 45 seconds.",
    "cat": "DUTY",
    "id": "T22_019"
  },
  {
    "q": "How should navigation light alarm relays be tested during the weekly routine?",
    "a": "By simulating an open circuit (e.g., pulling a fuse)",
    "opts": [
      "By short-circuiting the lamp holder",
      "By simulating an open circuit (e.g., pulling a fuse)",
      "By measuring the voltage drop across the bulb",
      "By resetting the alarm panel main breaker"
    ],
    "exp": "Simulating a blown bulb by removing its fuse will prove that the failure alarm circuit operates correctly.",
    "cat": "DUTY",
    "id": "T22_020"
  },
  {
    "q": "Which steering gear mode is tested during the Saturday routine to ensure manual backup functionality?",
    "a": "NFU (Non-Follow-Up) tiller mode",
    "opts": [
      "Autopilot tracking mode",
      "NFU (Non-Follow-Up) tiller mode",
      "Dynamic Positioning interface",
      "Course-to-steer mode"
    ],
    "exp": "The Non-Follow-Up (NFU) tiller bypasses the main control system and must be tested weekly.",
    "cat": "DUTY",
    "id": "T22_021"
  },
  {
    "q": "How is the emergency lighting auto-changeover tested?",
    "a": "By switching off the main supply to the emergency lighting panels",
    "opts": [
      "By discharging the batteries fully",
      "By switching off the main supply to the emergency lighting panels",
      "By pressing the lamp-test button on the ESB",
      "By isolating the 24V DC charging system"
    ],
    "exp": "Cutting the main AC feed to the panel forces the system to automatically switch to the 24V battery backup.",
    "cat": "DUTY",
    "id": "T22_022"
  },
  {
    "q": "When testing the fire alarm system during a Saturday routine, what is the correct approach?",
    "a": "Test one detector/call point per zone in rotation",
    "opts": [
      "Test every detector on the ship simultaneously",
      "Test only the manual call points, not smoke detectors",
      "Test one detector/call point per zone in rotation",
      "Activate the main CO2 release panel"
    ],
    "exp": "Rotating the test points ensures every detector is eventually checked without overwhelming the crew or system.",
    "cat": "DUTY",
    "id": "T22_023"
  },
  {
    "q": "Which step must be taken before conducting a brief test of the ship's General Alarm?",
    "a": "Inform the master first",
    "opts": [
      "Log it in the PMS",
      "Inform the master first",
      "Ensure the ship is at anchor",
      "Trip the VDR"
    ],
    "exp": "The Master must be informed before sounding any general emergency alarms to prevent panic.",
    "cat": "DUTY",
    "id": "T22_024"
  },
  {
    "q": "During pre-sailing checks, what defines the fuel requirement for the Emergency Generator?",
    "a": "Fuel sufficient for 18 hours",
    "opts": [
      "Fuel sufficient for 12 hours",
      "Fuel sufficient for 18 hours",
      "Fuel sufficient for 24 hours",
      "Fuel sufficient for 36 hours"
    ],
    "exp": "SOLAS mandates that the emergency generator fuel tank holds enough for 18 hours of continuous operation.",
    "cat": "DUTY",
    "id": "T22_025"
  },
  {
    "q": "In what order should the shore connection be disconnected before sailing?",
    "a": "Shore cable removed and stowed, ship earthing cable removed last",
    "opts": [
      "Earthing cable removed first, then phase cables",
      "Shore cable removed and stowed, ship earthing cable removed last",
      "Breaker opened, earthing removed, phase cables removed",
      "All cables removed simultaneously via quick-release"
    ],
    "exp": "The earth cable must strictly be the first to connect and the last to disconnect for safety.",
    "cat": "DUTY",
    "id": "T22_026"
  },
  {
    "q": "What bridge equipment readiness must the ETO specifically report to the bridge team before departure?",
    "a": "Radar, ECDIS, AIS, and VDR are all operational",
    "opts": [
      "GMDSS batteries are on float charge only",
      "Radar, ECDIS, AIS, and VDR are all operational",
      "The steering pumps are in NFU mode",
      "The ship's whistle air pressure is zero"
    ],
    "exp": "Critical navigational instruments like Radars, ECDIS, AIS, and the VDR must be tested and reported as operational.",
    "cat": "DUTY",
    "id": "T22_027"
  },
  {
    "q": "What action is required for engine room alarms before departing?",
    "a": "Verify all alarms healthy, reset any resolved alarms, no active faults",
    "opts": [
      "Bypass all critical alarms to prevent nuisance trips",
      "Acknowledge and leave active faults on the panel",
      "Verify all alarms healthy, reset any resolved alarms, no active faults",
      "Switch the alarm panel to 'port mode'"
    ],
    "exp": "The vessel should depart with a clean alarm panel; all resolved alarms must be reset and no active faults should remain.",
    "cat": "DUTY",
    "id": "T22_028"
  },
  {
    "q": "What is the purpose of testing both bridge and ECR engine telegraphs before sailing?",
    "a": "To verify matching response between locations",
    "opts": [
      "To calibrate the main engine governor",
      "To test the wrong-way alarm",
      "To verify matching response between locations",
      "To start the main engine lubricating oil pumps"
    ],
    "exp": "The telegraphs must be matched to ensure that an order given on the bridge is accurately reflected in the ECR.",
    "cat": "DUTY",
    "id": "T22_029"
  },
  {
    "q": "For ships with a UMS notation, what must be confirmed before sailing?",
    "a": "UMS alarm system is active and engineer call-out system tested",
    "opts": [
      "The engine room is permanently manned",
      "UMS alarm system is active and engineer call-out system tested",
      "The fire detection system is isolated",
      "The emergency generator is running in parallel"
    ],
    "exp": "Unattended Machinery Space operations require a fully tested call-out system to alert duty engineers in their cabins.",
    "cat": "DUTY",
    "id": "T22_030"
  },
  {
    "q": "During extended drydock periods, why must the alternator stator anti-condensation heater be energised?",
    "a": "To keep windings 5–10°C above ambient and prevent moisture absorption",
    "opts": [
      "To keep windings 5–10°C above ambient and prevent moisture absorption",
      "To dry out the bearing lubricating oil",
      "To maintain the rotor excitation residual magnetism",
      "To keep the AVR circuit board from freezing"
    ],
    "exp": "Heaters keep the internal temperature slightly above ambient, preventing dew formation on the Class F/H insulation.",
    "cat": "DRYD",
    "id": "T22_031"
  },
  {
    "q": "What is the target insulation resistance (IR) for an alternator stator when measured at 40°C during drydock?",
    "a": ">100 MΩ",
    "opts": [
      ">1 MΩ",
      ">10 MΩ",
      ">100 MΩ",
      ">1000 MΩ"
    ],
    "exp": "While 1 MΩ is a minimum limit, a healthy alternator at 40°C should comfortably exceed 100 MΩ.",
    "cat": "DRYD",
    "id": "T22_032"
  },
  {
    "q": "Before restarting a drydocked generator, what Polarisation Index (PI) value is required?",
    "a": "PI ≥ 2.0",
    "opts": [
      "PI ≥ 1.0",
      "PI ≥ 1.5",
      "PI ≥ 2.0",
      "PI ≥ 5.0"
    ],
    "exp": "A Polarisation Index of 2.0 or higher indicates that the winding insulation is dry and free of severe contamination.",
    "cat": "DRYD",
    "id": "T22_033"
  },
  {
    "q": "If a generator's PI is below 1.5 in drydock, how should it be corrected?",
    "a": "Dry out with low-voltage load or portable heaters in air duct",
    "opts": [
      "Wash the stator with fresh water",
      "Run the generator at full voltage immediately",
      "Dry out with low-voltage load or portable heaters in air duct",
      "Apply a high-potential (hi-pot) test"
    ],
    "exp": "Low PI means moisture is present; external heaters or running a low-voltage short-circuit current must be used to dry it.",
    "cat": "DRYD",
    "id": "T22_034"
  },
  {
    "q": "At what percentage above normal Maximum Continuous Rating (MCR) is the overspeed trip typically set?",
    "a": "10–15% above MCR speed",
    "opts": [
      "5–10% above MCR speed",
      "10–15% above MCR speed",
      "20–25% above MCR speed",
      "50% above MCR speed"
    ],
    "exp": "Overspeed devices trip the engine fuel and air supply when RPM reaches 10-15% above the rated MCR.",
    "cat": "DRYD",
    "id": "T22_035"
  },
  {
    "q": "What is the typical normal MCR RPM for a slow-speed 2-stroke engine (e.g., MAN B&W)?",
    "a": "~80–100 RPM",
    "opts": [
      "~20–40 RPM",
      "~80–100 RPM",
      "~300–400 RPM",
      "~720–750 RPM"
    ],
    "exp": "Large 2-stroke propulsion engines typically operate at a low MCR speed of 80 to 100 RPM.",
    "cat": "DRYD",
    "id": "T22_036"
  },
  {
    "q": "For a slow-speed 2-stroke engine operating at ~100 RPM MCR, what is the typical overspeed trip setting?",
    "a": "~110–115 RPM (+10–15%)",
    "opts": [
      "~102–105 RPM (+2–5%)",
      "~110–115 RPM (+10–15%)",
      "~130–140 RPM (+30–40%)",
      "~150 RPM (+50%)"
    ],
    "exp": "Adding 10-15% to an MCR of ~100 RPM gives a trip setting of 110-115 RPM.",
    "cat": "DRYD",
    "id": "T22_037"
  },
  {
    "q": "For a 4-stroke auxiliary generator running at 720/750 RPM, what is the overspeed trip setting?",
    "a": "~810–840 RPM",
    "opts": [
      "~760–780 RPM",
      "~810–840 RPM",
      "~900–950 RPM",
      "~1000 RPM"
    ],
    "exp": "Adding 10-15% to 750 RPM yields an overspeed trip setting in the range of 810 to 840 RPM.",
    "cat": "DRYD",
    "id": "T22_038"
  },
  {
    "q": "How does an electronic overspeed trip measure the engine RPM?",
    "a": "Speed sensor (toothed wheel + proximity probe)",
    "opts": [
      "Flyweight mechanism and collar",
      "Speed sensor (toothed wheel + proximity probe)",
      "Exhaust gas pressure transducer",
      "Main bearing vibration monitor"
    ],
    "exp": "Electronic governors use magnetic proximity probes facing a toothed wheel to count pulses and calculate RPM.",
    "cat": "DRYD",
    "id": "T22_039"
  },
  {
    "q": "What two direct actions are triggered by an engine emergency overspeed stop?",
    "a": "Fuel injection cut, air start blocking valve closed",
    "opts": [
      "Lubricating oil pump stopped, jacket cooling drained",
      "Fuel injection cut, air start blocking valve closed",
      "Exhaust valves locked open, turning gear engaged",
      "Main switchboard breaker opened, field flashed"
    ],
    "exp": "To instantly halt combustion, the fuel supply is cut and the air start system is blocked from motoring the engine.",
    "cat": "DRYD",
    "id": "T22_040"
  },
  {
    "q": "During a class survey, what specific electrical document must be presented to the surveyor?",
    "a": "Maintenance records, megger logs, PMS records",
    "opts": [
      "Only the main engine logbook",
      "Maintenance records, megger logs, PMS records",
      "The ship's commercial cargo manifests",
      "The daily crew rest hour records"
    ],
    "exp": "Class surveyors require proof of continuous electrical maintenance, specifically IR (megger) logs and PMS history.",
    "cat": "DRYD",
    "id": "T22_041"
  },
  {
    "q": "What physical measurement is checked on a generator during a drydock survey besides insulation?",
    "a": "Air gap measurement and bearing clearances",
    "opts": [
      "Copper winding weight",
      "Air gap measurement and bearing clearances",
      "Rotor shaft length",
      "Exhaust gas temperature"
    ],
    "exp": "Surveyors check the stator-to-rotor air gap and bearing clearances to ensure there is no mechanical dropping of the rotor.",
    "cat": "DRYD",
    "id": "T22_042"
  },
  {
    "q": "When a ship relies solely on shore power in drydock, what personnel requirement applies?",
    "a": "Maintain an engineer on duty whenever shore power is the sole supply",
    "opts": [
      "All engineers can leave the vessel",
      "Maintain an engineer on duty whenever shore power is the sole supply",
      "The bridge must be manned by a navigating officer",
      "A shipyard technician assumes full responsibility"
    ],
    "exp": "Because shore power can fluctuate or trip, an engineer must be present to monitor and restore services if it fails.",
    "cat": "DRYD",
    "id": "T22_043"
  },
  {
    "q": "What is the ETO's role when testing the overspeed trip?",
    "a": "Check speed sensor gap, signal cable, and overspeed relay output contacts",
    "opts": [
      "Adjust the fuel rack mechanical linkage",
      "Manually shut the air blocking valve",
      "Check speed sensor gap, signal cable, and overspeed relay output contacts",
      "Recalibrate the engine tachometer faceplate"
    ],
    "exp": "The ETO ensures the electronic sensing loop (probes, cables, and relay contacts) functions to trigger the mechanical cut-offs.",
    "cat": "DRYD",
    "id": "T22_044"
  },
  {
    "q": "During drydock, where does the power for the alternator anti-condensation heaters usually come from?",
    "a": "Shore supply",
    "opts": [
      "The ship's main generators",
      "The emergency generator",
      "Shore supply",
      "A portable 12V battery"
    ],
    "exp": "Because the ship's generators are dead in drydock, the heater must be powered externally via the shore connection.",
    "cat": "DRYD",
    "id": "T22_045"
  },
  {
    "q": "What does the abbreviation AMP stand for in the context of cold ironing?",
    "a": "Alternative Maritime Power",
    "opts": [
      "Amperage Maximum Power",
      "Alternative Maritime Power",
      "Auxiliary Marine Plant",
      "Alternating Main Phase"
    ],
    "exp": "Cold ironing is formally known in industry standards as Alternative Maritime Power (AMP).",
    "cat": "COLD",
    "id": "T22_046"
  },
  {
    "q": "What is the critical function of the Phase Sequence Indicator at the shore connection box?",
    "a": "Shows if shore phase rotation matches ship (R-Y-B)",
    "opts": [
      "Shows the exact voltage level of the shore supply",
      "Shows if shore phase rotation matches ship (R-Y-B)",
      "Indicates if the shore frequency is 50 Hz or 60 Hz",
      "Measures the earth fault resistance"
    ],
    "exp": "Matching the phase sequence is critical; if rotation is reversed, all 3-phase motors on the ship will run backwards.",
    "cat": "COLD",
    "id": "T22_047"
  },
  {
    "q": "If the shore phase rotation does not match the ship's sequence, how is it corrected?",
    "a": "Swap any two supply phases at the shore connection",
    "opts": [
      "Swap all three supply phases",
      "Reverse the earth cable polarity",
      "Swap any two supply phases at the shore connection",
      "Adjust the AVR on the ship's generator"
    ],
    "exp": "Swapping any two phase conductors will reverse the magnetic field rotation, correcting the sequence.",
    "cat": "COLD",
    "id": "T22_048"
  },
  {
    "q": "How does the main shore breaker interlock prevent paralleling shore power with ship generators?",
    "a": "An NC contact from the generator ACB is in series with the shore breaker closing coil",
    "opts": [
      "A mechanical key is shared between the shore breaker and main engine",
      "An NC contact from the generator ACB is in series with the shore breaker closing coil",
      "The synchroscope blocks the shore frequency",
      "An NO contact from the earth relay trips the generator"
    ],
    "exp": "If ANY generator ACB is closed, its Normally Closed (NC) contact opens, physically breaking the control circuit so the shore breaker cannot close.",
    "cat": "COLD",
    "id": "T22_049"
  },
  {
    "q": "What is the strict rule regarding the shore power Earth Cable?",
    "a": "Earth MUST be connected FIRST and disconnected LAST",
    "opts": [
      "Earth MUST be connected LAST and disconnected FIRST",
      "Earth MUST be connected FIRST and disconnected LAST",
      "Earth is only required if voltage exceeds 1000 V",
      "Earth is connected simultaneously with the phase cables"
    ],
    "exp": "Connecting earth first ensures the hull is protected from faults before any live phase conductors are introduced.",
    "cat": "COLD",
    "id": "T22_050"
  },
  {
    "q": "If a ship operating on 50 Hz arrives at a US port supplying 60 Hz shore power, what is required?",
    "a": "Transformers or frequency converters are required",
    "opts": [
      "Nothing, motors will just run 20% slower",
      "Transformers or frequency converters are required",
      "The phase sequence must be reversed",
      "The earth cable must be double-sized"
    ],
    "exp": "Shipboard equipment designed strictly for 50 Hz will overheat or run too fast on 60 Hz without a frequency converter.",
    "cat": "COLD",
    "id": "T22_051"
  },
  {
    "q": "How can you check phase sequence if the panel indicator is broken?",
    "a": "Connect one small fan motor to shore supply and check rotation direction",
    "opts": [
      "Measure voltage between phase and earth",
      "Connect one small fan motor to shore supply and check rotation direction",
      "Use a standard continuity buzzer between phases",
      "Short two phases together and read the ammeter"
    ],
    "exp": "A small test motor will run backwards if the sequence is wrong, indicating that two phases must be swapped before closing the main breaker.",
    "cat": "COLD",
    "id": "T22_052"
  },
  {
    "q": "What is the first step in the shore power connection procedure BEFORE arrival?",
    "a": "Confirm shore voltage, frequency, connector type, and current capacity with port agent",
    "opts": [
      "Trip all ship's generators",
      "Confirm shore voltage, frequency, connector type, and current capacity with port agent",
      "Uncoil the ship's shore cable onto the pier",
      "Remove the ship's earthing strap"
    ],
    "exp": "Compatibility must be verified with the port agent beforehand to ensure the shore connection box matches the yard's supply.",
    "cat": "COLD",
    "id": "T22_053"
  },
  {
    "q": "Why must ship load be reduced prior to transferring to shore power?",
    "a": "To reduce inrush at transfer",
    "opts": [
      "To prevent reversing the phase sequence",
      "To increase the generator's frequency",
      "To reduce inrush at transfer",
      "To allow the main engine to cool down"
    ],
    "exp": "Stripping non-essential loads prevents a massive current inrush when the shore breaker closes onto a dead bus.",
    "cat": "COLD",
    "id": "T22_054"
  },
  {
    "q": "What must occur immediately before the shore breaker can physically be closed?",
    "a": "Trip running generator ACB to allow the interlock to clear",
    "opts": [
      "Start a second generator for parallel load sharing",
      "Trip running generator ACB to allow the interlock to clear",
      "Close the shore connection earthing switch",
      "Synchronise the shore frequency with the generator"
    ],
    "exp": "Because of the electrical interlock, the generator ACB must be opened (tripped) to close the circuit to the shore breaker coil.",
    "cat": "COLD",
    "id": "T22_055"
  },
  {
    "q": "What is the acceptable tolerance for verifying shore voltage matches ship voltage?",
    "a": "±5%",
    "opts": [
      "±1%",
      "±5%",
      "±10%",
      "±15%"
    ],
    "exp": "Shore voltage must be within ±5% of the ship's nominal voltage before connecting.",
    "cat": "COLD",
    "id": "T22_056"
  },
  {
    "q": "What mnemonic aids in remembering the shore power connection sequence?",
    "a": "\"Every Vessel Provides True Isolation\"",
    "opts": [
      "\"Every Vessel Provides True Isolation\"",
      "\"Earth Voltage Phase Test Inside\"",
      "\"Electrical Verification Prevents Transformer Ignition\"",
      "\"Always Verify Phase Transfer Instantly\""
    ],
    "exp": "Earth first, Voltage check, Phase sequence, Transfer, Isolate generator.",
    "cat": "COLD",
    "id": "T22_057"
  },
  {
    "q": "Under normal procedures, is the shore cable connected while energised from the shore side?",
    "a": "No, connect cable de-energised",
    "opts": [
      "Yes, to verify phase sequence immediately",
      "Yes, if wearing insulated gloves",
      "No, connect cable de-energised",
      "No, but the ship's MSB must be live"
    ],
    "exp": "Cables must never be connected live due to the massive arc flash and shock risk.",
    "cat": "COLD",
    "id": "T22_058"
  },
  {
    "q": "Which connector standard is typically used for low-voltage cold ironing?",
    "a": "IEC 60309 standard",
    "opts": [
      "IEC 60092 standard",
      "IEC 60309 standard",
      "NEMA L5-30",
      "IEEE 802.3"
    ],
    "exp": "IEC 60309 covers industrial plugs, socket-outlets, and couplers used for marine shore connections.",
    "cat": "COLD",
    "id": "T22_059"
  },
  {
    "q": "What is the final step in the shore connection sequence after the shore breaker is closed?",
    "a": "Isolate generator engine and log parameters",
    "opts": [
      "Isolate generator engine and log parameters",
      "Start the steering gear pumps",
      "Remove the phase sequence meter",
      "Disconnect the earth cable"
    ],
    "exp": "Once shore power is stable on the bus, the ship's generators are completely isolated or put in warm standby.",
    "cat": "COLD",
    "id": "T22_060"
  },
  {
    "q": "What is the primary function of the Wrong Way Alarm?",
    "a": "Detects if shaft rotates opposite to commanded direction and triggers alarm/trip",
    "opts": [
      "Detects if the ship is drifting off course",
      "Detects if shaft rotates opposite to commanded direction and triggers alarm/trip",
      "Detects if the steering gear is at the wrong angle",
      "Detects if the engine RPM exceeds the overspeed limit"
    ],
    "exp": "It ensures the actual mechanical rotation matches the telegraph/command direction, alerting operators to a mismatch.",
    "cat": "WWAY",
    "id": "T22_061"
  },
  {
    "q": "Where are Wrong Way Alarm sensors typically located?",
    "a": "Main Engine, Steering Gear pump shafts, Cargo pumps",
    "opts": [
      "Main Engine, Steering Gear pump shafts, Cargo pumps",
      "Emergency Generator, Main Switchboard, Galley fans",
      "Purifiers, Air Compressors, Fresh Water generators",
      "Anchor Windlass, Mooring Winches, Crane hoists"
    ],
    "exp": "They are critical on reversible equipment like main propulsion, steering pumps, and large cargo pumps.",
    "cat": "WWAY",
    "id": "T22_062"
  },
  {
    "q": "What type of sensors are generally used for detecting shaft rotation direction?",
    "a": "Two proximity/Hall effect sensors",
    "opts": [
      "A single optical encoder",
      "Two proximity/Hall effect sensors",
      "A mechanical flyweight governor",
      "A thermal expansion probe"
    ],
    "exp": "Two magnetic sensors reading a toothed wheel or flywheel generate pulse sequences to determine direction.",
    "cat": "WWAY",
    "id": "T22_063"
  },
  {
    "q": "How are the two sensors positioned relative to each other to detect rotation?",
    "a": "Positioned at 90° phase offset on the shaft gear/flywheel",
    "opts": [
      "Positioned exactly 180° opposite each other",
      "Positioned at 90° phase offset on the shaft gear/flywheel",
      "Mounted side-by-side with 0° offset",
      "Positioned randomly on different shafts"
    ],
    "exp": "The 90° offset (quadrature) ensures that one sensor always pulses before the other, depending on direction.",
    "cat": "WWAY",
    "id": "T22_064"
  },
  {
    "q": "If Sensor A pulses before Sensor B for 'ahead', what indicates 'astern'?",
    "a": "B before A = reverse",
    "opts": [
      "A and B pulse simultaneously",
      "A before B at twice the frequency",
      "B before A = reverse",
      "Neither sensor pulses"
    ],
    "exp": "The phase relationship reverses when the shaft turns the other way, changing the pulse order to B then A.",
    "cat": "WWAY",
    "id": "T22_065"
  },
  {
    "q": "What is a major mechanical consequence of wrong-way rotation on pumps?",
    "a": "Cavitation and mechanical damage",
    "opts": [
      "Increased discharge pressure",
      "Improved cooling efficiency",
      "Cavitation and mechanical damage",
      "Loss of lubricating oil viscosity"
    ],
    "exp": "Pumps driven backwards cannot maintain fluid flow, leading to severe cavitation and seal/impeller destruction.",
    "cat": "WWAY",
    "id": "T22_066"
  },
  {
    "q": "What severe operational risk occurs if a cargo pump draws in the wrong direction?",
    "a": "Can cause flooding or fire",
    "opts": [
      "It generates excess electrical power",
      "Can cause flooding or fire",
      "It automatically trips the main engine",
      "It purifies the cargo rapidly"
    ],
    "exp": "Reversing flow in a cargo system can rupture lines, mix incompatible substances, or overflow tanks causing fires.",
    "cat": "WWAY",
    "id": "T22_067"
  },
  {
    "q": "What is the typical sensor gap for proximity sensors used in wrong way alarms?",
    "a": "1–3 mm",
    "opts": [
      "0.1–0.5 mm",
      "1–3 mm",
      "5–10 mm",
      "10–20 mm"
    ],
    "exp": "Magnetic proximity sensors typically require a close air gap of 1-3 mm to reliably detect the gear teeth.",
    "cat": "WWAY",
    "id": "T22_068"
  },
  {
    "q": "What ETO maintenance is routinely performed on the Wrong Way Alarm system?",
    "a": "Check sensor gap, calibrate trip logic, test relay output quarterly",
    "opts": [
      "Replace the flywheel gear teeth annually",
      "Rewire the sensor phases every month",
      "Check sensor gap, calibrate trip logic, test relay output quarterly",
      "Grease the proximity sensors daily"
    ],
    "exp": "Maintenance focuses on ensuring the physical gap is correct and the electronic logic outputs a trip when tested.",
    "cat": "WWAY",
    "id": "T22_069"
  },
  {
    "q": "What happens if actual direction does not equal the commanded direction?",
    "a": "Alarm/trip activates",
    "opts": [
      "The telegraph automatically resets",
      "Alarm/trip activates",
      "The engine reverses automatically",
      "The fuel rack is locked in the current position"
    ],
    "exp": "The logic controller spots the mismatch and instantly triggers an alarm and, on critical machinery, an automatic shutdown trip.",
    "cat": "WWAY",
    "id": "T22_070"
  },
  {
    "q": "Why is wrong-way rotation particularly dangerous for a ship's propeller?",
    "a": "Propeller running ahead when astern ordered can cause collisions",
    "opts": [
      "It causes the hull to magnetise",
      "Propeller running ahead when astern ordered can cause collisions",
      "It drains the starting air receivers too quickly",
      "It causes the overspeed trip to fail"
    ],
    "exp": "If the bridge commands astern to stop the ship but the engine fires ahead, the ship will accelerate into danger.",
    "cat": "WWAY",
    "id": "T22_071"
  },
  {
    "q": "What principle do Hall effect sensors use?",
    "a": "Magnetic field disruption by gear teeth",
    "opts": [
      "Optical reflection",
      "Magnetic field disruption by gear teeth",
      "Thermal radiation",
      "Acoustic resonance"
    ],
    "exp": "Hall effect sensors detect changes in the magnetic field as metal teeth pass by the sensor tip.",
    "cat": "WWAY",
    "id": "T22_072"
  },
  {
    "q": "How does the logic system determine if an alarm is required?",
    "a": "By comparing the sensor pulse sequence against the telegraph lever position",
    "opts": [
      "By measuring the RPM speed only",
      "By checking the exhaust gas temperature",
      "By comparing the sensor pulse sequence against the telegraph lever position",
      "By monitoring the generator load"
    ],
    "exp": "The system compares the physical rotation (sensor pulse order) with the electrical command (telegraph contacts).",
    "cat": "WWAY",
    "id": "T22_073"
  },
  {
    "q": "If a sensor gap increases to 5mm due to vibration, what is the likely symptom?",
    "a": "Loss of pulse signal causing a false alarm or failure to read rotation",
    "opts": [
      "The engine will run 10% faster",
      "Loss of pulse signal causing a false alarm or failure to read rotation",
      "The sensor will overheat",
      "The telegraph will lose power"
    ],
    "exp": "A gap larger than 3mm means the magnetic field cannot reach the teeth, resulting in zero pulses and a system fault.",
    "cat": "WWAY",
    "id": "T22_074"
  },
  {
    "q": "Is the wrong way alarm purely an indicator, or does it take action?",
    "a": "It triggers an alarm and/or automatic trip",
    "opts": [
      "It is purely an audible indicator",
      "It only prints a log in the ECR",
      "It triggers an alarm and/or automatic trip",
      "It automatically reverses the phase sequence"
    ],
    "exp": "Depending on the machinery, it not only alerts the crew but often initiates an automatic trip to prevent catastrophic damage.",
    "cat": "WWAY",
    "id": "T22_075"
  },
  {
    "q": "Under SOLAS regulations, what is the maximum time limit for the ESB to be connected and energized during a blackout test?",
    "a": "Within 45 seconds",
    "opts": [
      "Within 10 seconds",
      "Within 30 seconds",
      "Within 45 seconds",
      "Within 60 seconds"
    ],
    "exp": "SOLAS dictates that emergency power must be restored to critical systems within exactly 45 seconds.",
    "cat": "BLCK",
    "id": "T22_076"
  },
  {
    "q": "Which of these loads MUST be energized by the Emergency Generator within the 45-second limit?",
    "a": "Emergency lighting, fire pump, steering gear, GMDSS, navigation lights",
    "opts": [
      "Main engine lube oil pumps, air compressors",
      "Emergency lighting, fire pump, steering gear, GMDSS, navigation lights",
      "Galley stoves, HVAC system, purifiers",
      "Cargo pumps, bow thruster, deck cranes"
    ],
    "exp": "Only life-safety and critical navigation systems are mandated to be on the immediate emergency switchboard load.",
    "cat": "BLCK",
    "id": "T22_077"
  },
  {
    "q": "During a planned blackout test, when should you start timing?",
    "a": "Immediately upon tripping the running generators from the MSB",
    "opts": [
      "When the Emergency Generator engine starts turning",
      "Immediately upon tripping the running generators from the MSB",
      "When the emergency breaker attempts to close",
      "When the first emergency light turns on"
    ],
    "exp": "The 45-second clock starts the exact moment main power is lost at the MSB.",
    "cat": "BLCK",
    "id": "T22_078"
  },
  {
    "q": "How long should the Emergency Generator be run on load during a blackout test?",
    "a": "Minimum 30 minutes",
    "opts": [
      "Minimum 5 minutes",
      "Minimum 10 minutes",
      "Minimum 30 minutes",
      "Minimum 2 hours"
    ],
    "exp": "To properly heat up the engine and prove stability, the EG should run loaded for at least 30 minutes.",
    "cat": "BLCK",
    "id": "T22_079"
  },
  {
    "q": "In a real blackout, what must ALWAYS be done before restoring main power?",
    "a": "Identify the trip cause to prevent a secondary blackout",
    "opts": [
      "Start the bow thruster",
      "Bypass the MSB earth fault relay",
      "Identify the trip cause to prevent a secondary blackout",
      "Drain the main air receivers"
    ],
    "exp": "Restoring power onto an existing fault (like a short circuit) will immediately trip the new generator and cause a secondary blackout.",
    "cat": "BLCK",
    "id": "T22_080"
  },
  {
    "q": "What is the IMMEDIATE first step upon experiencing an unexpected blackout?",
    "a": "Confirm emergency services on ESB - nav lights, bridge comms, EG auto-started",
    "opts": [
      "Start a standby generator manually",
      "Confirm emergency services on ESB - nav lights, bridge comms, EG auto-started",
      "Reset all tripped breakers on the MSB",
      "Evacuate the engine room"
    ],
    "exp": "Before fixing the main plant, you must verify the ship is safe, visible, and has emergency control.",
    "cat": "BLCK",
    "id": "T22_081"
  },
  {
    "q": "Where do you look on the MSB to identify the cause of the generator trip?",
    "a": "Check MSB relay flags (overcurrent, earth fault, reverse power)",
    "opts": [
      "The synchronisation panel lamps",
      "Check MSB relay flags (overcurrent, earth fault, reverse power)",
      "The power factor meter",
      "The generator space heater switch"
    ],
    "exp": "Protective relays have mechanical or digital \"flags\" that drop to indicate exactly which fault tripped the breaker.",
    "cat": "BLCK",
    "id": "T22_082"
  },
  {
    "q": "Why is sequential load restoration critical after recovering the MSB?",
    "a": "Motor starting inrush is 6–8× FLC; simultaneous loading causes secondary blackout",
    "opts": [
      "It saves fuel consumption on the generator",
      "Motor starting inrush is 6–8× FLC; simultaneous loading causes secondary blackout",
      "It prevents the emergency generator from reverse powering",
      "It gives the bridge time to update the ECDIS"
    ],
    "exp": "Staggering the start of heavy motors prevents their combined inrush currents (6-8x normal) from overloading the generator.",
    "cat": "BLCK",
    "id": "T22_083"
  },
  {
    "q": "Which systems should be restored first in the sequential loading plan?",
    "a": "Cooling pumps",
    "opts": [
      "HVAC and accommodation fans",
      "Air compressors",
      "Cooling pumps",
      "Boiler feed pumps"
    ],
    "exp": "Main cooling water must be restored first to stabilise temperatures and allow other machinery to run safely.",
    "cat": "BLCK",
    "id": "T22_084"
  },
  {
    "q": "What delay is typically used before starting LO/fuel oil service pumps after cooling pumps?",
    "a": "3 min delay",
    "opts": [
      "No delay",
      "1 min delay",
      "3 min delay",
      "10 min delay"
    ],
    "exp": "A standard sequence allows cooling to establish for 2 mins, then LO/FO pumps at the 3-minute mark to let the generator recover.",
    "cat": "BLCK",
    "id": "T22_085"
  },
  {
    "q": "When do non-essential loads like HVAC get restored?",
    "a": "Last",
    "opts": [
      "First",
      "Together with cooling pumps",
      "Last",
      "Only after 24 hours"
    ],
    "exp": "Accommodation comfort (HVAC) is the lowest priority and is restored last after the propulsion plant is secured.",
    "cat": "BLCK",
    "id": "T22_086"
  },
  {
    "q": "What should the ETO check regarding UPS systems during a blackout?",
    "a": "Ensure UPS systems are charged and supplying bridge/automation",
    "opts": [
      "Bypass all UPS units to the dead bus",
      "Ensure UPS systems are charged and supplying bridge/automation",
      "Disconnect UPS batteries to save power",
      "Short the UPS output to trigger the emergency alarm"
    ],
    "exp": "UPS systems bridge the 45-second gap for critical automation and bridge computers; they must be verified healthy.",
    "cat": "BLCK",
    "id": "T22_087"
  },
  {
    "q": "How is power transferred back to the main bus after the blackout is resolved?",
    "a": "Start main generator, synchronise onto ESB, transfer load, trip EG",
    "opts": [
      "Trip the EG, wait 10 seconds, close main ACB",
      "Start main generator, synchronise onto ESB, transfer load, trip EG",
      "Close main ACB directly over the running EG",
      "Pull the emergency bus-tie fuse"
    ],
    "exp": "To avoid a second brief blackout, the main generator is synchronised with the running emergency generator before load transfer.",
    "cat": "BLCK",
    "id": "T22_088"
  },
  {
    "q": "What communication step is essential during the blackout assessment phase?",
    "a": "Report to bridge OOW, Master, and Chief Engineer with cause and estimated time",
    "opts": [
      "Call the port state control",
      "Report to bridge OOW, Master, and Chief Engineer with cause and estimated time",
      "Broadcast on VHF Channel 16 immediately",
      "Send an email to the company superintendent"
    ],
    "exp": "The command team must know why the ship went dark and how long they will be without propulsion to make navigational decisions.",
    "cat": "BLCK",
    "id": "T22_089"
  },
  {
    "q": "What documentation must the ETO complete after a blackout?",
    "a": "Log time, cause, restoration steps, and raise incident report if equipment failed",
    "opts": [
      "Only sign the hot work permit",
      "Log time, cause, restoration steps, and raise incident report if equipment failed",
      "Erase the alarm printer history",
      "Issue a new safety management manual"
    ],
    "exp": "A formal record of the blackout timings, identified faults, and actions taken is required by Class and the company.",
    "cat": "BLCK",
    "id": "T22_090"
  },
  {
    "q": "What is the key requirement for an Electrical Isolation Permit (EIP)?",
    "a": "LOTO applied at all isolation points, test de-energised with approved tester",
    "opts": [
      "Verbal confirmation from the Chief Engineer",
      "LOTO applied at all isolation points, test de-energised with approved tester",
      "Switching off the control circuit only",
      "Removing the panel door"
    ],
    "exp": "Physical lockout-tagout (LOTO) and proving the circuit dead are mandatory to prevent accidental re-energisation.",
    "cat": "PTW",
    "id": "T22_091"
  },
  {
    "q": "Under a Hot Work Permit, what is the required condition for the Gas-free certificate?",
    "a": "Below 1% LEL",
    "opts": [
      "Below 10% LEL",
      "Below 1% LEL",
      "Below 5% LEL",
      "Zero Oxygen"
    ],
    "exp": "Hot work requires a strictly gas-free atmosphere, defined as below 1% Lower Explosive Limit.",
    "cat": "PTW",
    "id": "T22_092"
  },
  {
    "q": "How long must a fire watch be maintained after hot work is completed?",
    "a": "30 minutes after",
    "opts": [
      "10 minutes after",
      "30 minutes after",
      "1 hour after",
      "24 hours after"
    ],
    "exp": "Smoldering material or conducted heat can start fires long after welding stops; a 30-minute minimum watch is required.",
    "cat": "PTW",
    "id": "T22_093"
  },
  {
    "q": "What must be done to the ICCP system during hull welding under a Hot Work Permit?",
    "a": "ICCP off for hull welding",
    "opts": [
      "ICCP turned to maximum output",
      "ICCP off for hull welding",
      "ICCP bypassed to the MSB",
      "ICCP set to manual mode"
    ],
    "exp": "Welding currents traveling through the hull can destroy the sensitive ICCP anodes and reference cells if not switched off.",
    "cat": "PTW",
    "id": "T22_094"
  },
  {
    "q": "Above what height is a Working at Height permit mandatory?",
    "a": "Above 2 m",
    "opts": [
      "Above 1 m",
      "Above 2 m",
      "Above 5 m",
      "Above 10 m"
    ],
    "exp": "Marine safety standards generally dictate that work over 2 meters requires a permit, harness, and fall arrest.",
    "cat": "PTW",
    "id": "T22_095"
  },
  {
    "q": "When isolating fire detectors for maintenance, what specific permit is required?",
    "a": "Safety System Isolation",
    "opts": [
      "Hot Work Permit",
      "Safety System Isolation",
      "Enclosed Space Entry",
      "Cold Work Permit"
    ],
    "exp": "Disabling critical safety loops (like fire detection or CO2) requires a Master/CE approved isolation permit and a physical fire watch.",
    "cat": "PTW",
    "id": "T22_096"
  },
  {
    "q": "What is the requirement for tools used under a Cold Work Permit in a Hazardous Area?",
    "a": "Non-sparking tools and intrinsically safe equipment only",
    "opts": [
      "Standard steel tools with rubber handles",
      "Non-sparking tools and intrinsically safe equipment only",
      "Pneumatic tools operating at 10 bar",
      "High-speed grinders"
    ],
    "exp": "In hazardous (flammable gas) zones, tools must be non-sparking (e.g., beryllium copper) to prevent ignition.",
    "cat": "PTW",
    "id": "T22_097"
  },
  {
    "q": "What is the FIRST step in the LOTO procedure?",
    "a": "Identify all energy sources (electrical, mechanical, hydraulic, stored energy)",
    "opts": [
      "Apply the padlock to the main breaker",
      "Identify all energy sources (electrical, mechanical, hydraulic, stored energy)",
      "Test for voltage at the motor",
      "Notify the port state control"
    ],
    "exp": "Before locking anything, you must know every source of energy feeding the equipment, including stored pressure or springs.",
    "cat": "PTW",
    "id": "T22_098"
  },
  {
    "q": "What is the correct 'Prove dead' sequence before touching conductors?",
    "a": "Test-for-voltage, discharge, test-for-voltage again",
    "opts": [
      "Touch with back of hand, then palm",
      "Test-for-voltage, discharge, test-for-voltage again",
      "Read the panel voltmeter only",
      "Short circuit to earth directly"
    ],
    "exp": "You must prove the tester works, test the circuit, discharge any capacitors, and test again to be absolutely sure.",
    "cat": "PTW",
    "id": "T22_099"
  },
  {
    "q": "Who is authorised to remove a lockout tag and padlock?",
    "a": "Only the person who applied the lock (personal lock principle)",
    "opts": [
      "Any engineer on duty",
      "Only the Master",
      "Only the person who applied the lock (personal lock principle)",
      "The safety officer"
    ],
    "exp": "The personal lock principle guarantees that equipment cannot be re-energised while the worker is still in danger.",
    "cat": "PTW",
    "id": "T22_100"
  },
  {
    "q": "What is the maximum safe supply voltage for portable electrical equipment in wet/confined locations?",
    "a": "≤50 V AC or ≤50 V DC",
    "opts": [
      "110 V AC",
      "220 V AC",
      "≤50 V AC or ≤50 V DC",
      "24 V DC only"
    ],
    "exp": "Due to drastically lowered skin resistance when wet, portable tools must operate at 50V or less.",
    "cat": "PTW",
    "id": "T22_101"
  },
  {
    "q": "Why is a 110 V CTE (centre-tap earth) transformer considered safe for general portable tools?",
    "a": "It gives ≤55 V to earth",
    "opts": [
      "It limits the current to 1 Ampere",
      "It completely isolates from earth",
      "It gives ≤55 V to earth",
      "It converts AC to DC"
    ],
    "exp": "A 110V output centre-tapped to earth limits the maximum shock voltage from either line to earth to just 55V.",
    "cat": "PTW",
    "id": "T22_102"
  },
  {
    "q": "When is an earthing lead applied during an electrical isolation?",
    "a": "For HV, and also on LV if there is a risk of back-feed",
    "opts": [
      "Only when requested by the Captain",
      "For HV, and also on LV if there is a risk of back-feed",
      "Always on every lighting circuit",
      "Only on DC circuits"
    ],
    "exp": "Local earthing ensures that if the circuit is accidentally energized or back-fed, it will instantly short to ground and trip the breaker.",
    "cat": "PTW",
    "id": "T22_103"
  },
  {
    "q": "What must the LOTO tag explicitly state?",
    "a": "Worker name, date, reason, expected completion",
    "opts": [
      "The ship's IMO number",
      "Worker name, date, reason, expected completion",
      "The breaker's fault current rating",
      "The Chief Engineer's signature"
    ],
    "exp": "Tags provide crucial information to others about who is working, why the circuit is off, and when it might return.",
    "cat": "PTW",
    "id": "T22_104"
  },
  {
    "q": "Are standard 220 V/440 V tools permitted in bilges or confined spaces?",
    "a": "NOT permitted - use isolation transformers or 110 V CTE",
    "opts": [
      "Yes, if connected to an RCD",
      "NOT permitted - use isolation transformers or 110 V CTE",
      "Yes, if the worker wears rubber boots",
      "Yes, for a maximum of 15 minutes"
    ],
    "exp": "The rules strictly forbid standard mains voltage tools in wet spaces due to the extreme fatality risk.",
    "cat": "PTW",
    "id": "T22_105"
  },
  {
    "q": "What is the physiological effect of a 10–20 mA current passing through the body?",
    "a": "Muscular tetany - cannot let go",
    "opts": [
      "Perception threshold - tingling sensation",
      "Muscular tetany - cannot let go",
      "Ventricular fibrillation",
      "Cardiac arrest and severe burns"
    ],
    "exp": "At 10-20 mA, muscles clamp down violently, trapping the person on the live conductor.",
    "cat": "SHCK",
    "id": "T22_106"
  },
  {
    "q": "At what current range does ventricular fibrillation (heart losing rhythm) become very likely?",
    "a": "50–100 mA",
    "opts": [
      "1–5 mA",
      "10–20 mA",
      "50–100 mA",
      "1000 mA"
    ],
    "exp": "Currents between 50 and 100 mA disrupt the heart's electrical signals, causing fatal fibrillation.",
    "cat": "SHCK",
    "id": "T22_107"
  },
  {
    "q": "What happens at currents >4 A through the body?",
    "a": "Heart clamps - may spontaneously restart after removal",
    "opts": [
      "Tingling sensation only",
      "Ventricular fibrillation without burns",
      "Heart clamps - may spontaneously restart after removal",
      "The person becomes highly magnetic"
    ],
    "exp": "Paradoxically, massive current clamps the heart entirely rather than fibrillating it, sometimes allowing it to restart when power is removed.",
    "cat": "SHCK",
    "id": "T22_108"
  },
  {
    "q": "What is the approximate electrical resistance of dry human skin?",
    "a": "100,000 Ω",
    "opts": [
      "1,000 Ω",
      "100,000 Ω",
      "300 Ω",
      "10 MΩ"
    ],
    "exp": "Dry skin offers high resistance, significantly limiting the current flow from accidental contact.",
    "cat": "SHCK",
    "id": "T22_109"
  },
  {
    "q": "What is the approximate electrical resistance of wet or sweaty skin?",
    "a": "1,000 Ω",
    "opts": [
      "100,000 Ω",
      "1,000 Ω",
      "300 Ω",
      "0 Ω"
    ],
    "exp": "Moisture drops skin resistance by a factor of 100, allowing lethal current to flow even at low voltages.",
    "cat": "SHCK",
    "id": "T22_110"
  },
  {
    "q": "Why is 50 Hz AC considered the most dangerous frequency for electric shock?",
    "a": "It resonates with the heart frequency",
    "opts": [
      "It produces the highest skin burns",
      "It resonantly charges body capacitance",
      "It resonates with the heart frequency",
      "It causes arc flashes more easily"
    ],
    "exp": "50/60 Hz frequencies happen to align fatally with the electrical timing of the human heart, easily causing fibrillation.",
    "cat": "SHCK",
    "id": "T22_111"
  },
  {
    "q": "What is the absolute FIRST rule of treating an electric shock victim still in contact with the source?",
    "a": "Do NOT Touch the Victim",
    "opts": [
      "Pull them away by their clothing",
      "Do NOT Touch the Victim",
      "Administer CPR immediately",
      "Throw water on the electrical panel"
    ],
    "exp": "Touching a live victim turns the rescuer into a second casualty.",
    "cat": "SHCK",
    "id": "T22_112"
  },
  {
    "q": "If you cannot trip the breaker to isolate supply from a shock victim, what should you do?",
    "a": "Use a DRY, non-conducting object to push or pull the victim away",
    "opts": [
      "Use a metal crowbar to break the connection",
      "Grab their shoes to pull them",
      "Use a DRY, non-conducting object to push or pull the victim away",
      "Wait until the circuit naturally trips"
    ],
    "exp": "A dry wooden plank, rubber mat, or synthetic rope can safely break the physical contact without conducting.",
    "cat": "SHCK",
    "id": "T22_113"
  },
  {
    "q": "What is the correct CPR ratio for an adult shock victim without a pulse?",
    "a": "30 chest compressions + 2 rescue breaths",
    "opts": [
      "15 chest compressions + 2 rescue breaths",
      "30 chest compressions + 2 rescue breaths",
      "10 chest compressions + 1 rescue breath",
      "Continuous compressions only with no breaths"
    ],
    "exp": "Standard basic life support requires a 30:2 ratio of compressions to rescue breaths.",
    "cat": "SHCK",
    "id": "T22_114"
  },
  {
    "q": "What is the correct compression rate for CPR?",
    "a": "100–120/min",
    "opts": [
      "60–80/min",
      "100–120/min",
      "150–160/min",
      "40–50/min"
    ],
    "exp": "To maintain blood pressure, compressions must be delivered fast, at 100 to 120 beats per minute.",
    "cat": "SHCK",
    "id": "T22_115"
  },
  {
    "q": "What is the \"DISCO\" mnemonic for shock response?",
    "a": "Don't touch, Isolate supply, Send for help, CPR if needed, Obtain medical assessment",
    "opts": [
      "Disconnect, Inspect, Save, Call, Observe",
      "Don't touch, Isolate supply, Send for help, CPR if needed, Obtain medical assessment",
      "Drop, Isolate, Shout, Compress, Oxygen",
      "Discharge, Inspect, Secure, Care, Organise"
    ],
    "exp": "DISCO covers the exact sequential steps for safely handling a shock emergency.",
    "cat": "SHCK",
    "id": "T22_116"
  },
  {
    "q": "Why must a shock victim always seek medical attention even if they walk away feeling fine?",
    "a": "Internal burns and cardiac arrhythmia can develop hours later",
    "opts": [
      "To fill out the permit to work paperwork",
      "To measure their skin resistance",
      "Internal burns and cardiac arrhythmia can develop hours later",
      "Because the shock temporarily cures minor illnesses"
    ],
    "exp": "Current passes through organs; the heart can fail unpredictably hours after the initial shock due to cellular damage.",
    "cat": "SHCK",
    "id": "T22_117"
  },
  {
    "q": "If the victim is breathing but unconscious after being separated from the supply, what is the action?",
    "a": "Place in lateral recovery position and monitor continuously",
    "opts": [
      "Start CPR immediately",
      "Prop them up in a chair",
      "Place in lateral recovery position and monitor continuously",
      "Give them water to drink"
    ],
    "exp": "The recovery position keeps the airway clear of vomit or the tongue while waiting for medical help.",
    "cat": "SHCK",
    "id": "T22_118"
  },
  {
    "q": "What is the worst possible current path through the body during a shock?",
    "a": "Hand-to-hand through heart",
    "opts": [
      "Foot-to-foot",
      "Hand-to-hand through heart",
      "Hand-to-elbow on the same arm",
      "Shoulder-to-back"
    ],
    "exp": "Current traveling from one hand to the other goes directly across the chest, traversing the heart and causing fibrillation.",
    "cat": "SHCK",
    "id": "T22_119"
  },
  {
    "q": "What happens when an AED advises a shock?",
    "a": "Follow audio/visual instructions and shock if advised, then continue CPR",
    "opts": [
      "Stop CPR entirely and wait for the ambulance",
      "Follow audio/visual instructions and shock if advised, then continue CPR",
      "Remove the pads and check the victim's pulse",
      "Turn off the AED to save battery"
    ],
    "exp": "The AED will analyse the rhythm and deliver a shock to reset the heart; CPR must continue immediately after to support circulation.",
    "cat": "SHCK",
    "id": "T22_120"
  },
  {
    "q": "Which of these is the SOLAS definition of an enclosed space?",
    "a": "Limited openings, inadequate ventilation, not designed for continuous occupancy",
    "opts": [
      "Any space below the main deck",
      "Limited openings, inadequate ventilation, not designed for continuous occupancy",
      "A space containing electrical switchboards",
      "Any space with watertight doors"
    ],
    "exp": "These three criteria (entry/exit, ventilation, occupancy) define the hazardous nature of enclosed spaces.",
    "cat": "ENCL",
    "id": "T22_121"
  },
  {
    "q": "What is the safe range for Oxygen (O2) before entering an enclosed space?",
    "a": "19.5% – 23.5%",
    "opts": [
      "15.0% – 18.5%",
      "19.5% – 23.5%",
      "21.0% exactly",
      "10% – 20%"
    ],
    "exp": "Below 19.5% impairs brain function; above 23.5% poses a severe fire and explosion risk.",
    "cat": "ENCL",
    "id": "T22_122"
  },
  {
    "q": "What is the strict limit for Flammable Gas (LEL) before entry is permitted?",
    "a": "<10% LEL",
    "opts": [
      "<1% LEL",
      "<5% LEL",
      "<10% LEL",
      "<25% LEL"
    ],
    "exp": "Standard marine procedures prohibit entry into any atmosphere where flammable gas exceeds 10% of the Lower Explosive Limit.",
    "cat": "ENCL",
    "id": "T22_123"
  },
  {
    "q": "What is the safe Time-Weighted Average (TWA) limit for Carbon Monoxide (CO)?",
    "a": "<35 ppm TWA",
    "opts": [
      "<10 ppm TWA",
      "<35 ppm TWA",
      "<100 ppm TWA",
      "<500 ppm TWA"
    ],
    "exp": "CO is a deadly, odourless gas; exposure over an 8-hour shift must average less than 35 ppm.",
    "cat": "ENCL",
    "id": "T22_124"
  },
  {
    "q": "What is the safe Time-Weighted Average (TWA) limit for Hydrogen Sulphide (H2S)?",
    "a": "<10 ppm TWA",
    "opts": [
      "<2 ppm TWA",
      "<10 ppm TWA",
      "<35 ppm TWA",
      "<50 ppm TWA"
    ],
    "exp": "H2S is extremely toxic; the TWA safe limit is tightly restricted to less than 10 ppm.",
    "cat": "ENCL",
    "id": "T22_125"
  },
  {
    "q": "Why is Hydrogen Sulphide (H2S) especially dangerous regarding the sense of smell?",
    "a": "It numbs the olfactory nerve at concentrations above ~100 ppm so you cannot smell it",
    "opts": [
      "It always smells like fresh air at high concentrations",
      "It numbs the olfactory nerve at concentrations above ~100 ppm so you cannot smell it",
      "It causes immediate blindness before smell is lost",
      "It changes smell from rotten eggs to sweet apples"
    ],
    "exp": "You cannot rely on smell for H2S; it paralyzes your nose at lethal levels, creating a false sense of safety.",
    "cat": "ENCL",
    "id": "T22_126"
  },
  {
    "q": "What is the safe Time-Weighted Average (TWA) limit for Sulphur Dioxide (SO2)?",
    "a": "<2 ppm TWA",
    "opts": [
      "<2 ppm TWA",
      "<10 ppm TWA",
      "<35 ppm TWA",
      "<100 ppm TWA"
    ],
    "exp": "SO2 is a severe respiratory irritant with a very low tolerance limit of 2 ppm.",
    "cat": "ENCL",
    "id": "T22_127"
  },
  {
    "q": "How must gas testing be conducted inside a tank or hold?",
    "a": "Test at multiple levels (top, middle, bottom)",
    "opts": [
      "Test only at the top hatch",
      "Test at multiple levels (top, middle, bottom)",
      "Test only at the very bottom",
      "Test by lowering a lit flame"
    ],
    "exp": "Gases have different densities; H2S settles at the bottom, while methane rises. Testing all levels is mandatory.",
    "cat": "ENCL",
    "id": "T22_128"
  },
  {
    "q": "How long must an enclosed space be force-ventilated before initial gas testing?",
    "a": "At least 15 minutes",
    "opts": [
      "At least 5 minutes",
      "At least 15 minutes",
      "At least 1 hour",
      "At least 24 hours"
    ],
    "exp": "Ventilation must run long enough (minimum 15 mins) to clear stagnant air before testing for safe entry.",
    "cat": "ENCL",
    "id": "T22_129"
  },
  {
    "q": "What is the strict rule for the standby person stationed at the entrance during enclosed space entry?",
    "a": "They must NOT enter to rescue alone - call trained team with SCBA",
    "opts": [
      "They must hold their breath and run in to pull the victim out",
      "They must NOT enter to rescue alone - call trained team with SCBA",
      "They must secure the hatch if a gas alarm sounds",
      "They must leave the entrance to find the Chief Engineer"
    ],
    "exp": "Untrained solo rescues are the leading cause of multiple fatalities in enclosed spaces; the attendant must raise the alarm.",
    "cat": "ENCL",
    "id": "T22_130"
  },
  {
    "q": "What equipment must be ready at the entrance BEFORE anyone enters an enclosed space?",
    "a": "SCBA sets, lifelines, safety harness, resuscitator",
    "opts": [
      "Welding machine and extraction fan",
      "SCBA sets, lifelines, safety harness, resuscitator",
      "Fire hoses and foam applicators",
      "Spare lighting bulbs and multi-meter"
    ],
    "exp": "Rescue gear must be instantly available at the hatch so the SCBA team does not lose time gathering it.",
    "cat": "ENCL",
    "id": "T22_131"
  },
  {
    "q": "What is the minimum frequency for maintaining communication with the entrant?",
    "a": "Every 5 minutes minimum",
    "opts": [
      "Every 1 minute",
      "Every 5 minutes minimum",
      "Every 15 minutes",
      "Every 30 minutes"
    ],
    "exp": "Frequent voice or lifeline contact ensures the entrant hasn't collapsed silently.",
    "cat": "ENCL",
    "id": "T22_132"
  },
  {
    "q": "What personal equipment is the entrant required to wear regarding gases?",
    "a": "Personal gas alarm",
    "opts": [
      "Personal gas alarm",
      "Full SCBA set at all times",
      "Chemical hazard suit",
      "Gas mask filter"
    ],
    "exp": "Continuous monitoring via a personal alarm protects the worker if a gas pocket is disturbed during work.",
    "cat": "ENCL",
    "id": "T22_133"
  },
  {
    "q": "Who signs the Enclosed Space Entry Permit?",
    "a": "Master/CE and Responsible Officer",
    "opts": [
      "Only the entering worker",
      "The Bosun and the OOW",
      "Master/CE and Responsible Officer",
      "The Port State Control inspector"
    ],
    "exp": "Top-level command (Master or Chief Engineer) must authorize the high-risk operation.",
    "cat": "ENCL",
    "id": "T22_134"
  },
  {
    "q": "If gas conditions change while a person is inside, what is the procedure?",
    "a": "Evacuate immediately, re-ventilate, and re-test",
    "opts": [
      "Turn up the personal alarm threshold",
      "Evacuate immediately, re-ventilate, and re-test",
      "Put on a dust mask",
      "Continue working but work faster"
    ],
    "exp": "Any change or alarm means the space is immediately unsafe and must be evacuated.",
    "cat": "ENCL",
    "id": "T22_135"
  },
  {
    "q": "What is the typical Open Circuit Voltage (OCV) for an AC Welding Transformer?",
    "a": "~70–80 V",
    "opts": [
      "~10–20 V",
      "~45–65 V",
      "~70–80 V",
      "~110–120 V"
    ],
    "exp": "AC welders require a higher OCV (70-80V) to re-strike the arc 100 times a second as the current crosses zero.",
    "cat": "WELD",
    "id": "T22_136"
  },
  {
    "q": "Which welding type is generally considered safer regarding electric shock risk?",
    "a": "DC Welding (Generator/Rectifier)",
    "opts": [
      "AC Welding (Transformer)",
      "DC Welding (Generator/Rectifier)",
      "Both are equally dangerous",
      "High-frequency AC TIG"
    ],
    "exp": "DC has a lower OCV (45-65V) and causes a single jerk rather than the muscular tetany associated with AC.",
    "cat": "WELD",
    "id": "T22_137"
  },
  {
    "q": "What phenomenon occurs in DC welding where the arc is deflected by magnetic fields?",
    "a": "Arc blow",
    "opts": [
      "Arc strike",
      "Arc blow",
      "Magnetic saturation",
      "Plasma drift"
    ],
    "exp": "Arc blow is caused by asymmetrical magnetic flux pushing the DC arc away from the weld joint.",
    "cat": "WELD",
    "id": "T22_138"
  },
  {
    "q": "What is a remedy for overcoming Arc Blow?",
    "a": "Change to AC welding",
    "opts": [
      "Increase the DC current",
      "Change to AC welding",
      "Use a longer arc length",
      "Disconnect the earth clamp"
    ],
    "exp": "Because AC reverses polarity constantly, it does not build up the asymmetrical magnetic field that causes arc blow.",
    "cat": "WELD",
    "id": "T22_139"
  },
  {
    "q": "Where must the welding return cable be connected for marine safety?",
    "a": "DIRECTLY to the workpiece, never via the hull",
    "opts": [
      "To the nearest hull frame",
      "DIRECTLY to the workpiece, never via the hull",
      "To the main switchboard earth bar",
      "It is not required for DC welding"
    ],
    "exp": "Using the hull as a return path sends massive currents through sensitive bearings and electronics.",
    "cat": "WELD",
    "id": "T22_140"
  },
  {
    "q": "Why must the ICCP system be switched OFF during hull welding?",
    "a": "High currents can damage ICCP anodes and reference electrodes",
    "opts": [
      "It prevents the arc from striking",
      "High currents can damage ICCP anodes and reference electrodes",
      "It causes rapid corrosion of the welding rod",
      "It drains the ship's batteries"
    ],
    "exp": "The impressed current system's delicate reference electrodes will be destroyed by the stray high currents of welding.",
    "cat": "WELD",
    "id": "T22_141"
  },
  {
    "q": "Why is it dangerous to leave a welding set energised on open circuit unattended?",
    "a": "OCV across terminals remains live (>70 V AC) posing a shock risk",
    "opts": [
      "It consumes excessive generator fuel",
      "OCV across terminals remains live (>70 V AC) posing a shock risk",
      "It causes arc blow in adjacent steel",
      "It magnetises the deck plates permanently"
    ],
    "exp": "The stinger remains fully live at OCV (70-80V) waiting for an earth path, posing a lethal hazard in sweaty conditions.",
    "cat": "WELD",
    "id": "T22_142"
  },
  {
    "q": "What sets the trip limit for the Engine Room Crane Overload Relay?",
    "a": "SWL (Safe Working Load)",
    "opts": [
      "MCR (Maximum Continuous Rating)",
      "SWL (Safe Working Load)",
      "FLC (Full Load Current)",
      "LRC (Locked Rotor Current)"
    ],
    "exp": "The overload relay, often linked to a strain gauge, prevents the crane from lifting more than its rated Safe Working Load.",
    "cat": "WELD",
    "id": "T22_143"
  },
  {
    "q": "What crane safety prevents the hook block from crushing into the jib (overwinding)?",
    "a": "Upper Limit Switch",
    "opts": [
      "Lower Limit Switch",
      "Electromagnetic Brake",
      "Upper Limit Switch",
      "Slack Wire Switch"
    ],
    "exp": "The upper limit switch cuts hoist power if the hook travels too high, preventing structural collapse.",
    "cat": "WELD",
    "id": "T22_144"
  },
  {
    "q": "What is the fail-safe operation of the crane's electromagnetic brake?",
    "a": "Power loss → brake applies automatically (load held)",
    "opts": [
      "Power loss → brake releases to lower load safely",
      "Power loss → brake applies automatically (load held)",
      "Power loss → brake must be applied manually with a handle",
      "Power loss → hook detaches the load"
    ],
    "exp": "The brake is spring-applied and electrically released. Total power failure means the springs clamp the brake, holding the load safely mid-air.",
    "cat": "WELD",
    "id": "T22_145"
  },
  {
    "q": "What is a 'Dead-Man Control' on a crane pendant?",
    "a": "Pendant requires continuous pressure - release stops all motion",
    "opts": [
      "A switch that locks the hoist in the UP position",
      "An alarm that sounds if the operator collapses",
      "Pendant requires continuous pressure - release stops all motion",
      "A biometric scanner on the handle"
    ],
    "exp": "If the operator faints or drops the pendant, the buttons spring back to neutral, stopping the crane.",
    "cat": "WELD",
    "id": "T22_146"
  },
  {
    "q": "What test is required on lifting equipment after maintenance to verify limit switches?",
    "a": "Two-block test",
    "opts": [
      "Drop test",
      "Millivolt-drop test",
      "Two-block test",
      "Megger test"
    ],
    "exp": "A two-block test proves that the upper limit switch successfully cuts power before the hook block hits the boom.",
    "cat": "WELD",
    "id": "T22_147"
  },
  {
    "q": "What is the function of the Lower Limit Switch on a crane?",
    "a": "Cuts lowering power at minimum rope on drum to prevent unwinding completely",
    "opts": [
      "Stops the load from hitting the deck",
      "Cuts lowering power at minimum rope on drum to prevent unwinding completely",
      "Slows down the hoist when approaching the bottom",
      "Weighs the load when it rests on the floor"
    ],
    "exp": "It ensures at least 2-3 wraps of wire rope remain on the drum, maintaining friction and secure attachment.",
    "cat": "WELD",
    "id": "T22_148"
  },
  {
    "q": "Why must the crane pendant metalwork be earthed?",
    "a": "To protect the operator from shock if the pendant cable insulation fails",
    "opts": [
      "To provide a return path for the control signals",
      "To protect the operator from shock if the pendant cable insulation fails",
      "To shield the electronics from EMI",
      "To prevent arc blow during welding near the crane"
    ],
    "exp": "Operators hold the pendant tightly; if an internal wire shorts to the metal casing, the earth connection safely trips the breaker.",
    "cat": "WELD",
    "id": "T22_149"
  },
  {
    "q": "What marine standard applies to the characteristic of a welding transformer?",
    "a": "Step-down, drooping characteristic",
    "opts": [
      "Step-up, flat characteristic",
      "Step-down, drooping characteristic",
      "Isolation, constant voltage",
      "Auto-transformer, variable output"
    ],
    "exp": "A drooping (constant current) characteristic ensures the welding current remains stable even if arc length varies slightly.",
    "cat": "WELD",
    "id": "T22_150"
  },
  {
    "q": "What happens if the flame fails during boiler operation?",
    "a": "Flame failure relay closes fuel valve immediately (within 2–3 seconds)",
    "opts": [
      "The ignition transformer runs continuously",
      "Flame failure relay closes fuel valve immediately (within 2–3 seconds)",
      "The forced draft fan stops immediately",
      "The burner increases fuel pressure"
    ],
    "exp": "To prevent pumping unburnt fuel into the hot furnace (explosion risk), the valve shuts instantly.",
    "cat": "BOIL",
    "id": "T22_151"
  },
  {
    "q": "Which types of sensors are used by the Flame Failure Relay to detect the fire?",
    "a": "UV scanner or ionisation probe",
    "opts": [
      "Thermocouple or RTD",
      "UV scanner or ionisation probe",
      "Infrared camera or pressure switch",
      "Hall effect sensor or proximity probe"
    ],
    "exp": "UV scanners \"see\" the specific light of the flame, while ionisation probes detect the conductive plasma of the fire.",
    "cat": "BOIL",
    "id": "T22_152"
  },
  {
    "q": "What is the purpose of the High Water Level Trip in a boiler?",
    "a": "Prevents water carry-over into steam lines (water hammer)",
    "opts": [
      "Prevents the fire-side tubes from overheating",
      "Prevents water carry-over into steam lines (water hammer)",
      "Increases steam production efficiency",
      "Stops the feed pump from cavitating"
    ],
    "exp": "If water reaches the steam outlet, slugs of water travel down the pipes, causing destructive water hammer.",
    "cat": "BOIL",
    "id": "T22_153"
  },
  {
    "q": "What is the purpose of the Low Water Level Trip in a boiler?",
    "a": "Prevents fire-side overheating and tube damage when drum runs dry",
    "opts": [
      "Prevents water hammer in steam lines",
      "Prevents fire-side overheating and tube damage when drum runs dry",
      "Reduces fuel consumption during standby",
      "Clears unburnt fuel from the chamber"
    ],
    "exp": "Without water to absorb the heat, the steel tubes will melt and fail catastrophically.",
    "cat": "BOIL",
    "id": "T22_154"
  },
  {
    "q": "What action does the High Steam Pressure Trip take before the safety valves pop?",
    "a": "Closes burner fuel valve",
    "opts": [
      "Opens the blowdown valve",
      "Closes burner fuel valve",
      "Increases forced draft fan speed",
      "Injects cold feed water"
    ],
    "exp": "The first line of defense against overpressure is to kill the fire by shutting the fuel valve.",
    "cat": "BOIL",
    "id": "T22_155"
  },
  {
    "q": "How long is a typical Pre-Purge cycle before burner ignition?",
    "a": "3–5 air changes",
    "opts": [
      "10–15 seconds",
      "3–5 air changes",
      "30 minutes",
      "1 air change"
    ],
    "exp": "The fan must push 3 to 5 times the volume of the furnace to guarantee all combustible gases are cleared.",
    "cat": "BOIL",
    "id": "T22_156"
  },
  {
    "q": "What does the Pre-Purge interlock prevent?",
    "a": "Furnace explosion from unburnt fuel",
    "opts": [
      "Furnace explosion from unburnt fuel",
      "Water carry-over",
      "Low steam pressure",
      "Flame failure"
    ],
    "exp": "Purging blows away any leaked gas or oil vapor so it doesn't explosively ignite when the spark fires.",
    "cat": "BOIL",
    "id": "T22_157"
  },
  {
    "q": "What verifies that the fuel valve is closed before the ignition sequence can start?",
    "a": "A limit switch on the fuel valve",
    "opts": [
      "The UV scanner",
      "A limit switch on the fuel valve",
      "The steam pressure transmitter",
      "The feed water level controller"
    ],
    "exp": "The ignition interlock requires physical proof (via a limit switch) that no fuel is flowing during purge.",
    "cat": "BOIL",
    "id": "T22_158"
  },
  {
    "q": "What happens if the Forced Draft Fan fails during boiler operation?",
    "a": "No airflow = combustion stops immediately via a trip",
    "opts": [
      "The boiler switches to natural draft",
      "No airflow = combustion stops immediately via a trip",
      "The fuel pressure increases to compensate",
      "The ignition transformer reignites the flame"
    ],
    "exp": "Without air, the fuel will just pump in and flood the hot furnace, so the draft failure interlock trips the burner.",
    "cat": "BOIL",
    "id": "T22_159"
  },
  {
    "q": "What does VRCS stand for?",
    "a": "Valve Remote Control System",
    "opts": [
      "Variable RPM Control System",
      "Valve Remote Control System",
      "Vessel Refrigeration Cooling Setup",
      "Voltage Regulation Circuit Switch"
    ],
    "exp": "VRCS allows operators in the Cargo Control Room to remotely actuate valves throughout the ship.",
    "cat": "BOIL",
    "id": "T22_160"
  },
  {
    "q": "What operates the valves in a typical VRCS?",
    "a": "Hydraulic Power Unit (HPU)",
    "opts": [
      "Pneumatic Air Compressors",
      "Hydraulic Power Unit (HPU)",
      "Direct Drive Electric Motors",
      "Manual Handwheels only"
    ],
    "exp": "The HPU uses an electric motor to pressurize oil, which travels to hydraulic actuators on the valves.",
    "cat": "BOIL",
    "id": "T22_161"
  },
  {
    "q": "What is the typical operating voltage for VRCS Solenoid Pilot Valves?",
    "a": "24 V DC",
    "opts": [
      "220 V AC",
      "440 V AC",
      "24 V DC",
      "110 V AC"
    ],
    "exp": "Control panels and PLCs typically use safe, low-voltage 24V DC to fire the hydraulic solenoids.",
    "cat": "BOIL",
    "id": "T22_162"
  },
  {
    "q": "What is the typical coil resistance for a VRCS solenoid valve?",
    "a": "20–40 Ω",
    "opts": [
      "1–5 Ω",
      "20–40 Ω",
      "500–1000 Ω",
      ">1 MΩ"
    ],
    "exp": "A healthy 24V DC solenoid coil generally measures between 20 and 40 ohms. Open circuit or zero indicates a fault.",
    "cat": "BOIL",
    "id": "T22_163"
  },
  {
    "q": "How does a potentiometer provide position feedback in a VRCS?",
    "a": "It turns mechanical position into a 0–10 V signal",
    "opts": [
      "It turns mechanical position into a 4-20 mA signal only",
      "It turns mechanical position into a 0–10 V signal",
      "It closes a digital relay at 50% open",
      "It varies frequency from 50 to 60 Hz"
    ],
    "exp": "Potentiometers output an analog voltage (often 0-10V) proportional to how far the valve is turned.",
    "cat": "BOIL",
    "id": "T22_164"
  },
  {
    "q": "What type of switch is commonly used for simple open/closed position feedback?",
    "a": "Reed switch",
    "opts": [
      "Thermocouple",
      "Reed switch",
      "Strain gauge",
      "Float switch"
    ],
    "exp": "Magnetic reed switches at the ends of travel provide digital (on/off) indication that the valve is fully open or fully closed.",
    "cat": "BOIL",
    "id": "T22_165"
  },
  {
    "q": "What is the correct conductor material specified for marine cables?",
    "a": "Copper (stranded)",
    "opts": [
      "Aluminium (solid)",
      "Copper (solid)",
      "Copper (stranded)",
      "Aluminium (stranded)"
    ],
    "exp": "Marine cables must be flexible to withstand ship vibration; solid cores would snap, and aluminium corrodes.",
    "cat": "CABL",
    "id": "T22_166"
  },
  {
    "q": "Why is aluminium NOT used for marine electrical cables?",
    "a": "Corrosion and termination issues",
    "opts": [
      "It is too heavy",
      "Corrosion and termination issues",
      "It conducts electricity too well",
      "It melts at low temperatures"
    ],
    "exp": "Aluminium oxidizes quickly in salty air, causing high resistance and fires at termination points.",
    "cat": "CABL",
    "id": "T22_167"
  },
  {
    "q": "In what unit must marine cable cross-section be ordered?",
    "a": "mm²",
    "opts": [
      "AWG",
      "Circular Mils",
      "mm²",
      "Diameter in inches"
    ],
    "exp": "Marine cables (IEC standard) are strictly sized by metric cross-sectional area (mm²). AWG is never used.",
    "cat": "CABL",
    "id": "T22_168"
  },
  {
    "q": "What is the preferred insulation type for engine room marine cables due to its 90°C thermal rating?",
    "a": "XLPE",
    "opts": [
      "PVC",
      "EPR",
      "XLPE",
      "PTFE"
    ],
    "exp": "Cross-Linked Polyethylene (XLPE) withstands the high ambient heat of the engine room better than PVC.",
    "cat": "CABL",
    "id": "T22_169"
  },
  {
    "q": "What does LSZH stand for in marine outer sheaths?",
    "a": "Low Smoke Zero Halogen",
    "opts": [
      "Long Span Zero Heat",
      "Low Smoke Zero Halogen",
      "Low Sulphur Zinc Heavy",
      "Light Shielded Zone Harness"
    ],
    "exp": "SOLAS requires LSZH sheaths so burning cables do not suffocate crew with toxic halogen gas or thick black smoke.",
    "cat": "CABL",
    "id": "T22_170"
  },
  {
    "q": "What type of armour is typically specified for mechanical protection on marine cables?",
    "a": "SWA (Steel Wire Armoured)",
    "opts": [
      "Lead Sheath",
      "SWA (Steel Wire Armoured)",
      "Kevlar Braid",
      "Aluminium Foil"
    ],
    "exp": "SWA protects the inner cores from physical crushing or abrasion below decks.",
    "cat": "CABL",
    "id": "T22_171"
  },
  {
    "q": "What voltage rating should be specified when ordering a cable for a 440 V system?",
    "a": "0.6/1 kV",
    "opts": [
      "250/440 V",
      "0.6/1 kV",
      "3.6/6 kV",
      "6/10 kV"
    ],
    "exp": "Low voltage ship systems (up to 690V) use standard 0.6/1 kV rated insulation.",
    "cat": "CABL",
    "id": "T22_172"
  },
  {
    "q": "What specific marine standard MUST be quoted to ensure the cable is Class approved?",
    "a": "IEC 60092-350",
    "opts": [
      "IEC 60309",
      "ISO 9001",
      "IEC 60092-350",
      "IEEE 802.3"
    ],
    "exp": "IEC 60092 series governs electrical installations in ships, ensuring fire, smoke, and halogen compliance.",
    "cat": "CABL",
    "id": "T22_173"
  },
  {
    "q": "When ordering instrumentation cable (e.g. 4-20 mA), what must be added to block EMI?",
    "a": "Copper braid or aluminium foil screen",
    "opts": [
      "Steel wire armour",
      "Thicker XLPE insulation",
      "Copper braid or aluminium foil screen",
      "A parallel earth wire"
    ],
    "exp": "Screens act as Faraday cages to block electromagnetic interference from corrupting sensitive analog signals.",
    "cat": "CABL",
    "id": "T22_174"
  },
  {
    "q": "How should a signal cable screen be earthed?",
    "a": "At one end only (avoid ground loops)",
    "opts": [
      "At both ends",
      "At one end only (avoid ground loops)",
      "In the middle",
      "It must be floating (unearthed)"
    ],
    "exp": "Earthing both ends creates a loop where stray currents can flow through the screen, inducing noise into the signal.",
    "cat": "CABL",
    "id": "T22_175"
  },
  {
    "q": "How should the delivery format of the cable be specified to avoid joints?",
    "a": "Continuous metres on a drum",
    "opts": [
      "Pre-cut 10-metre lengths",
      "Continuous metres on a drum",
      "Coiled in a cardboard box",
      "Joined every 50 metres"
    ],
    "exp": "Joints are weak points for water ingress and failure; runs should be continuous off a single drum.",
    "cat": "CABL",
    "id": "T22_176"
  },
  {
    "q": "What is the mnemonic for remembering cable ordering specifications?",
    "a": "\"MC CLIVE SLD\"",
    "opts": [
      "\"DISCO\"",
      "\"MC CLIVE SLD\"",
      "\"BB ROY\"",
      "\"LOTO\""
    ],
    "exp": "Material, Cores, Cross-section, LSZH, Insulation, Voltage, E-standard, Screen, Length, Delivery.",
    "cat": "CABL",
    "id": "T22_177"
  },
  {
    "q": "For a standard 3-phase motor without a neutral, what core count is ordered?",
    "a": "3C (3-core)",
    "opts": [
      "1C (1-core)",
      "2C (2-core)",
      "3C (3-core)",
      "4C (4-core)"
    ],
    "exp": "A standard delta or ungrounded star motor requires 3 cores (R, Y, B); earthing is often handled via armour or separate strap.",
    "cat": "CABL",
    "id": "T22_178"
  },
  {
    "q": "What is the minimum recommended allowance when ordering cable length?",
    "a": "Always order more than route length to allow for routing bends",
    "opts": [
      "Order exactly the straight-line distance",
      "Order 50% less and stretch it",
      "Always order more than route length to allow for routing bends",
      "Order based on weight, not length"
    ],
    "exp": "Cable trays wind around bulkheads and pipes; ordering exact straight-line distance guarantees it will fall short.",
    "cat": "CABL",
    "id": "T22_179"
  },
  {
    "q": "Which insulation type is very flexible and good for portable leads?",
    "a": "EPR",
    "opts": [
      "XLPE",
      "PVC",
      "EPR",
      "Mica glass"
    ],
    "exp": "Ethylene Propylene Rubber (EPR) offers excellent flexibility and is preferred for trailing cables and pendants.",
    "cat": "CABL",
    "id": "T22_180"
  },
  {
    "q": "What is Step 1 of the MCA 6-Step Emergency Response Framework?",
    "a": "IMMEDIATE ACTIONS (Safety First)",
    "opts": [
      "DOCUMENTATION",
      "ASSESSMENT",
      "IMMEDIATE ACTIONS (Safety First)",
      "COMMUNICATION"
    ],
    "exp": "The priority is always securing life and isolating live faults (LOTO, alarms, stopping machinery).",
    "cat": "TRBL",
    "id": "T22_181"
  },
  {
    "q": "During Step 2 (Assessment) of troubleshooting, what actions are taken?",
    "a": "Read gauges, check relays, identify what changed before the fault",
    "opts": [
      "Order spare parts",
      "Read gauges, check relays, identify what changed before the fault",
      "Deploy CO2",
      "Fill out the incident report"
    ],
    "exp": "Assessment involves gathering facts from panels and crew before taking invasive action.",
    "cat": "TRBL",
    "id": "T22_182"
  },
  {
    "q": "What is Step 3 of the 6-Step framework?",
    "a": "COMMUNICATION",
    "opts": [
      "FOLLOW-UP",
      "COMMUNICATION",
      "FURTHER ACTIONS",
      "IMMEDIATE ACTIONS"
    ],
    "exp": "You must inform the command chain (C/E, Master) about the fault and repair estimate so they can manage ship safety.",
    "cat": "TRBL",
    "id": "T22_183"
  },
  {
    "q": "When troubleshooting a Low IR on a motor circuit, what is the first physical step after LOTO?",
    "a": "Disconnect cable at BOTH ends - at MSB and motor terminal box",
    "opts": [
      "Megger the entire circuit while connected",
      "Wash the motor with fresh water",
      "Disconnect cable at BOTH ends - at MSB and motor terminal box",
      "Change the overload relay"
    ],
    "exp": "To find where the fault lies, you must physically separate the cable from the switchboard and the motor.",
    "cat": "TRBL",
    "id": "T22_184"
  },
  {
    "q": "After disconnecting the ends, what is meggered first?",
    "a": "Megger Cable Alone (core to core, core to earth)",
    "opts": [
      "Megger the motor rotor",
      "Megger Cable Alone (core to core, core to earth)",
      "Megger the MSB busbars",
      "Megger the starter contactor"
    ],
    "exp": "Testing the isolated cable rules out deck penetrations, pinches, or water ingress in the run before stripping the motor.",
    "cat": "TRBL",
    "id": "T22_185"
  },
  {
    "q": "What test voltage is used to megger a 440 V circuit?",
    "a": "1000 V DC",
    "opts": [
      "250 V DC",
      "500 V DC",
      "1000 V DC",
      "5000 V DC"
    ],
    "exp": "For 440V equipment, the standard test voltage is 1000V DC applied for 60 seconds.",
    "cat": "TRBL",
    "id": "T22_186"
  },
  {
    "q": "What is the absolute minimum acceptable IR for a 440 V motor before it can be run?",
    "a": "1 MΩ",
    "opts": [
      "0.1 MΩ",
      "1 MΩ",
      "10 MΩ",
      "100 MΩ"
    ],
    "exp": "1 MΩ is the universal \"do not run below\" limit for 440V systems, though healthy motors will read much higher.",
    "cat": "TRBL",
    "id": "T22_187"
  },
  {
    "q": "If the cable is healthy, how must the motor be prepared before meggering?",
    "a": "Isolate star point to test each phase to earth separately",
    "opts": [
      "Short all three phases together and test once",
      "Isolate star point to test each phase to earth separately",
      "Remove the rotor completely",
      "Connect it to a 24V supply"
    ],
    "exp": "Opening the star point allows you to identify exactly which of the three windings (U, V, W) is failing to ground.",
    "cat": "TRBL",
    "id": "T22_188"
  },
  {
    "q": "If the motor IR is low (e.g., 0.5 MΩ) but not zero, what is the likely cause and cure?",
    "a": "Likely moisture - energise anti-condensation heater 24–48 hours",
    "opts": [
      "Dead short - requires complete rewind",
      "Likely moisture - energise anti-condensation heater 24–48 hours",
      "Bearing failure - replace bearings",
      "Voltage spike - replace the terminal block"
    ],
    "exp": "A low but non-zero reading almost always indicates surface condensation which can be baked out slowly.",
    "cat": "TRBL",
    "id": "T22_189"
  },
  {
    "q": "What is the rule of thumb for IR change with temperature?",
    "a": "IR halves every 10°C rise in winding temperature",
    "opts": [
      "IR doubles every 10°C rise in winding temperature",
      "IR halves every 10°C rise in winding temperature",
      "IR remains constant regardless of temperature",
      "IR drops to zero if temperature exceeds 40°C"
    ],
    "exp": "Insulation resistance drops exponentially as it heats up; a hot motor reading low might be perfectly fine when cool.",
    "cat": "TRBL",
    "id": "T22_190"
  },
  {
    "q": "If a motor reads 10 MΩ at 80°C, what is its corrected IR at the standard 40°C?",
    "a": "160 MΩ",
    "opts": [
      "10 MΩ",
      "40 MΩ",
      "80 MΩ",
      "160 MΩ"
    ],
    "exp": "The temp difference is 40 degrees (4 jumps of 10). 10 MΩ * 2^4 = 10 * 16 = 160 MΩ.",
    "cat": "TRBL",
    "id": "T22_191"
  },
  {
    "q": "How is the Polarisation Index (PI) calculated?",
    "a": "IR at 10 min / IR at 1 min",
    "opts": [
      "IR at 1 min / IR at 10 min",
      "IR at 10 min / IR at 1 min",
      "IR at 40°C / IR at ambient",
      "Test Voltage / Leakage Current"
    ],
    "exp": "PI measures how the insulation absorbs charge over time; a rising reading over 10 minutes indicates dry, clean insulation.",
    "cat": "TRBL",
    "id": "T22_192"
  },
  {
    "q": "What PI value indicates a healthy winding?",
    "a": "PI ≥ 2.0",
    "opts": [
      "PI < 1.0",
      "PI = 1.0",
      "PI ≥ 2.0",
      "PI > 10.0"
    ],
    "exp": "A PI of 2.0 or greater signifies the winding is clean and dry. Below 1.0 means it is wet or heavily contaminated.",
    "cat": "TRBL",
    "id": "T22_193"
  },
  {
    "q": "What is the purpose of the Millivolt-Drop Test?",
    "a": "To measure contact resistance on busbars, ACB contacts, and cable joints",
    "opts": [
      "To check for Earth faults",
      "To measure contact resistance on busbars, ACB contacts, and cable joints",
      "To test motor winding inductance",
      "To calibrate analogue voltmeters"
    ],
    "exp": "Passing rated current and measuring the tiny voltage drop reveals hidden loose or oxidized joints (should be <100 μΩ).",
    "cat": "TRBL",
    "id": "T22_194"
  },
  {
    "q": "Why must a Current Transformer (CT) secondary NEVER be left open-circuited while primary current flows?",
    "a": "No counter-MMF causes core saturation, inducing lethal thousands of volts",
    "opts": [
      "It will short out the main switchboard busbars",
      "No counter-MMF causes core saturation, inducing lethal thousands of volts",
      "It will trip the generator reverse power relay",
      "It causes the primary cable to melt instantly"
    ],
    "exp": "Without a burden, the core magnetic flux skyrockets, acting like a massive step-up transformer causing explosions and lethal shock.",
    "cat": "TRBL",
    "id": "T22_195"
  },
  {
    "q": "According to IMO Safety Symbols, what does a RED background signify?",
    "a": "Prohibition / Fire Equipment / Danger",
    "opts": [
      "Mandatory Action",
      "Prohibition / Fire Equipment / Danger",
      "Safe Condition / Emergency Escape",
      "Warning / Caution"
    ],
    "exp": "Red universally indicates 'Stop', 'Do not do this', or denotes fire fighting equipment locations.",
    "cat": "IMO",
    "id": "T22_196"
  },
  {
    "q": "What does a BLUE circle background signify in IMO safety signs?",
    "a": "Mandatory Action",
    "opts": [
      "Prohibition",
      "Warning",
      "Mandatory Action",
      "Safe Condition"
    ],
    "exp": "Blue signs (like a hard hat or goggles symbol) mean you MUST take this specific action or wear this PPE.",
    "cat": "IMO",
    "id": "T22_197"
  },
  {
    "q": "What does a GREEN background signify?",
    "a": "Safe Condition / Emergency Escape",
    "opts": [
      "Mandatory Action",
      "Prohibition",
      "Warning",
      "Safe Condition / Emergency Escape"
    ],
    "exp": "Green indicates safety: emergency exits, muster stations, and first aid equipment.",
    "cat": "IMO",
    "id": "T22_198"
  },
  {
    "q": "What does a YELLOW or AMBER background signify?",
    "a": "Warning / Caution",
    "opts": [
      "Prohibition",
      "Warning / Caution",
      "Mandatory Action",
      "Safe Condition"
    ],
    "exp": "Yellow warns of hazards present in the area, such as high voltage, toxic substances, or slippery floors.",
    "cat": "IMO",
    "id": "T22_199"
  },
  {
    "q": "What does a Yellow Triangle with a Lightning Bolt symbol mean?",
    "a": "Electrical hazard - high voltage present",
    "opts": [
      "Thunderstorm warning area",
      "Electrical hazard - high voltage present",
      "Radio transmission zone",
      "Safe to touch electrical panel"
    ],
    "exp": "This is the universal warning for dangerous electrical voltage.",
    "cat": "IMO",
    "id": "T22_200"
  },
  {
    "q": "What does a Green sign with a running figure and an arrow signify?",
    "a": "Emergency exit direction - muster / lifeboat stations",
    "opts": [
      "Gymnasium location",
      "Emergency exit direction - muster / lifeboat stations",
      "Mandatory running track",
      "Pedestrian crossing"
    ],
    "exp": "These signs point the way along the escape route to the safest exit or muster point.",
    "cat": "IMO",
    "id": "T22_201"
  },
  {
    "q": "What does a cigarette with a red circle and red diagonal bar mean?",
    "a": "No smoking - prohibition sign",
    "opts": [
      "Smoking area",
      "No smoking - prohibition sign",
      "Discard cigarette butts here",
      "Warning: toxic smoke"
    ],
    "exp": "The red bar across the symbol means the action is strictly prohibited.",
    "cat": "IMO",
    "id": "T22_202"
  },
  {
    "q": "What does a Yellow Triangle containing a skull and crossbones indicate?",
    "a": "Toxic substance - warning",
    "opts": [
      "Pirate zone",
      "Biological hazard",
      "Toxic substance - warning",
      "Radiation area"
    ],
    "exp": "The skull and crossbones on yellow warns of lethal poisons or toxic gases.",
    "cat": "IMO",
    "id": "T22_203"
  },
  {
    "q": "What does a Blue Circle containing figures of a hard hat, gloves, or goggles mean?",
    "a": "PPE mandatory - must wear specified protection",
    "opts": [
      "PPE storage area",
      "PPE mandatory - must wear specified protection",
      "Warning: falling objects",
      "First aid supplies"
    ],
    "exp": "Blue circles dictate a mandatory action, meaning you cannot enter without the drawn PPE.",
    "cat": "IMO",
    "id": "T22_204"
  },
  {
    "q": "What does a green sign with a heart and lightning bolt (AED) signify?",
    "a": "AED location - automated external defibrillator",
    "opts": [
      "Electrical hazard",
      "AED location - automated external defibrillator",
      "Doctor's cabin",
      "High voltage battery"
    ],
    "exp": "This green safe-condition sign marks where the life-saving AED is mounted.",
    "cat": "IMO",
    "id": "T22_205"
  },
  {
    "q": "What does a Red circle with a diagonal bar over an Anchor mean?",
    "a": "Anchor prohibited (underwater cables/pipelines)",
    "opts": [
      "Anchor location",
      "Anchor prohibited (underwater cables/pipelines)",
      "Drop anchor immediately",
      "Anchor windlass emergency stop"
    ],
    "exp": "It forbids dropping anchor in that zone to protect subsea infrastructure.",
    "cat": "IMO",
    "id": "T22_206"
  },
  {
    "q": "What is the SOLAS requirement for materials used on emergency escape route signs?",
    "a": "Photoluminescent (glow-in-dark) material required",
    "opts": [
      "Must be painted in bright red",
      "Must have a flashing strobe light",
      "Photoluminescent (glow-in-dark) material required",
      "Must be made of brass"
    ],
    "exp": "If lighting fails during a blackout and smoke obscures visibility, the signs must glow in the dark.",
    "cat": "IMO",
    "id": "T22_207"
  },
  {
    "q": "Which IMO Resolution updated the standardized symbols and signs?",
    "a": "Resolution A.1116(30)",
    "opts": [
      "MARPOL Annex VI",
      "Resolution A.1116(30)",
      "STCW Code Section A",
      "SOLAS Chapter IX"
    ],
    "exp": "IMO Res. A.1116(30) harmonized escape route and equipment signs across all modern vessels.",
    "cat": "IMO",
    "id": "T22_208"
  },
  {
    "q": "What does a Yellow Triangle with a hand and a flame mean?",
    "a": "Flammable / combustible material - warning",
    "opts": [
      "Fire extinguisher location",
      "Do not touch hot surface",
      "Flammable / combustible material - warning",
      "Cold work permit required"
    ],
    "exp": "It cautions that materials in the area ignite easily, unlike the red flame sign which denotes fire equipment.",
    "cat": "IMO",
    "id": "T22_209"
  },
  {
    "q": "Under SOLAS II-2/9.2.2, whose role is it to verify electrical hazard signs are in place?",
    "a": "ETO Role: Ensure all electrical hazard signs are in place",
    "opts": [
      "The Master's sole responsibility",
      "The Third Mate's duty only",
      "ETO Role: Ensure all electrical hazard signs are in place",
      "The Port State Control inspector"
    ],
    "exp": "The ETO must maintain warning signage on switchboards, battery rooms, and HV compartments.",
    "cat": "IMO",
    "id": "T22_210"
  },
  {
    "q": "When the general alarm sounds for a Fire Drill, where should the ETO go?",
    "a": "Report to designated muster station (per Muster List)",
    "opts": [
      "Run directly to the fire location",
      "Go to the cabin to collect tools",
      "Report to designated muster station (per Muster List)",
      "Report to the bridge immediately"
    ],
    "exp": "Crew must follow the specific muster list; the ETO is typically assigned to the Fire Party or Emergency Squad.",
    "cat": "EMER",
    "id": "T22_211"
  },
  {
    "q": "What is the ETO's critical electrical duty during a major fire (if ordered by C/E)?",
    "a": "Isolate power to the affected space by tripping the switchboard feeder",
    "opts": [
      "Isolate the emergency switchboard",
      "Isolate power to the affected space by tripping the switchboard feeder",
      "Bypass the overload relays on the fire pump",
      "Switch all lighting to 24V DC"
    ],
    "exp": "Killing power stops electrical arcing from fueling the fire and protects the hose team from electrocution.",
    "cat": "EMER",
    "id": "T22_212"
  },
  {
    "q": "Which circuits must NEVER be isolated during a fire unless specifically damaged?",
    "a": "Emergency circuits (fire pump, bilge pump, emergency lighting)",
    "opts": [
      "Galley stoves and ovens",
      "Air conditioning compressors",
      "Emergency circuits (fire pump, bilge pump, emergency lighting)",
      "Main engine turning gear"
    ],
    "exp": "These are life-saving systems required to fight the fire and safely evacuate.",
    "cat": "EMER",
    "id": "T22_213"
  },
  {
    "q": "If the ETO is assigned to release CO2, what must be confirmed first?",
    "a": "Confirm space is evacuated, close ventilation and doors",
    "opts": [
      "Ensure the fire pump is running at maximum pressure",
      "Confirm space is evacuated, close ventilation and doors",
      "Turn on all engine room lighting",
      "Open the engine room skylights to let smoke out"
    ],
    "exp": "CO2 works by displacing oxygen; the space must be sealed tight and empty of crew to avoid suffocation.",
    "cat": "EMER",
    "id": "T22_214"
  },
  {
    "q": "After a fire is extinguished, what electrical task is required?",
    "a": "Test insulation of cables running through affected area before re-energising",
    "opts": [
      "Wash the main switchboard with salt water",
      "Immediately turn all breakers back on",
      "Test insulation of cables running through affected area before re-energising",
      "Increase the generator voltage to burn off soot"
    ],
    "exp": "Fire melts cable insulation; re-energizing a charred cable will cause a massive short circuit and restart the fire.",
    "cat": "EMER",
    "id": "T22_215"
  },
  {
    "q": "Where does the ETO typically report during an Abandon Ship Drill?",
    "a": "Engine Room lifeboat team or emergency team",
    "opts": [
      "The bridge wing",
      "The forward anchor station",
      "Engine Room lifeboat team or emergency team",
      "The rescue boat"
    ],
    "exp": "The ETO usually musters with the engineering team at the main engine room lifeboat.",
    "cat": "EMER",
    "id": "T22_216"
  },
  {
    "q": "What check should the ETO perform on the Emergency Generator before abandoning ship (time permitting)?",
    "a": "Ensure emergency generator running and supplying ESB",
    "opts": [
      "Drain its fuel tank",
      "Ensure emergency generator running and supplying ESB",
      "Remove its starting batteries",
      "Switch it to manual control"
    ],
    "exp": "Leaving the EG running powers the ship's lights and radios as long as possible while lifeboats lower.",
    "cat": "EMER",
    "id": "T22_217"
  },
  {
    "q": "Whose responsibility is it via PMS to ensure lifeboat batteries are kept charged?",
    "a": "ETO responsibility",
    "opts": [
      "Chief Officer's responsibility",
      "Bosun's responsibility",
      "ETO responsibility",
      "Third Engineer's responsibility"
    ],
    "exp": "The ETO maintains the lifeboat battery chargers and logs their voltage/condition.",
    "cat": "EMER",
    "id": "T22_218"
  },
  {
    "q": "Once at the lifeboat, what electrical equipment check must the ETO perform?",
    "a": "Check engine start circuit, nav lights, radio, SART, and EPIRB",
    "opts": [
      "Check the main engine telegraph",
      "Check the ship's AIS system",
      "Check engine start circuit, nav lights, radio, SART, and EPIRB",
      "Check the lifeboat air conditioning"
    ],
    "exp": "The ETO confirms the boat's independent electrical survival gear is fully functional before launch.",
    "cat": "EMER",
    "id": "T22_219"
  },
  {
    "q": "What specific visual check is done on the EPIRB at the muster station?",
    "a": "Hydrostatic release intact, battery date valid",
    "opts": [
      "Antenna is completely removed",
      "Connected to the ship's 220V supply",
      "Hydrostatic release intact, battery date valid",
      "Submerged in a bucket of water"
    ],
    "exp": "The EPIRB must be armed with a valid battery and its auto-release mechanism must be correctly rigged.",
    "cat": "EMER",
    "id": "T22_220"
  },
  {
    "q": "In a flooding (Damage Control) scenario, what is a primary ETO safety action before entering a flooded space?",
    "a": "Check for electric shock risk - isolate power to affected zone",
    "opts": [
      "Turn on all lights in the water",
      "Check for electric shock risk - isolate power to affected zone",
      "Bypass the bilge alarm",
      "Start the main engine"
    ],
    "exp": "Rising seawater shorts out panels and cables, turning the water into a lethal electrocution hazard.",
    "cat": "EMER",
    "id": "T22_221"
  },
  {
    "q": "If the Main Switchboard is lost due to flooding, how are bilge pumps operated?",
    "a": "Run bilge pumps from emergency switchboard",
    "opts": [
      "They cannot be operated",
      "Run bilge pumps from emergency switchboard",
      "Run them from the 24V battery bank",
      "Use compressed air only"
    ],
    "exp": "Emergency bilge pumps have feeders directly from the ESB to pump out water even if the main plant is dead.",
    "cat": "EMER",
    "id": "T22_222"
  },
  {
    "q": "What happens to the ship's lighting if water submerges deck circuits?",
    "a": "Flooding can cause short circuits leading to lighting loss",
    "opts": [
      "The lights get brighter",
      "Flooding can cause short circuits leading to lighting loss",
      "The bulbs change to red",
      "Nothing, they are waterproof"
    ],
    "exp": "Water ingress shorts the lines, blowing breakers and plunging the ship into darkness; emergency lights are essential.",
    "cat": "EMER",
    "id": "T22_223"
  },
  {
    "q": "During damage control, what critical information must the ETO report to the Chief Engineer?",
    "a": "What is still powered, what is isolated, what is damaged",
    "opts": [
      "Only the engine fuel level",
      "The weather outside",
      "What is still powered, what is isolated, what is damaged",
      "The status of the cargo documentation"
    ],
    "exp": "The C/E needs a real-time electrical \"map\" of the ship to make tactical decisions on pumping and propulsion.",
    "cat": "EMER",
    "id": "T22_224"
  },
  {
    "q": "What checks are done on the Lifeboat two-way VHF radios?",
    "a": "Battery full charge",
    "opts": [
      "Connected to the ship's main antenna",
      "Transmitting continuously on Channel 16",
      "Battery full charge",
      "Immersed in water to test seal"
    ],
    "exp": "GMDSS portables must be fully charged and sealed, ready for use away from the ship's power.",
    "cat": "EMER",
    "id": "T22_225"
  },
  {
    "q": "What absolute precaution must be taken before performing a continuity check on a circuit?",
    "a": "Circuit must be de-energised and LOTO applied",
    "opts": [
      "Circuit must be live to pass the test current",
      "Circuit must be de-energised and LOTO applied",
      "Multimeter must be set to Volts AC",
      "The circuit breaker must be forced closed"
    ],
    "exp": "A continuity meter (ohmmeter) will be destroyed-and the user shocked-if applied to a live circuit.",
    "cat": "DIAG",
    "id": "T22_226"
  },
  {
    "q": "What method is used to uniquely identify individual cores in a long, unlabelled cable?",
    "a": "Figure-8 method - short one end, measure resistance from the other",
    "opts": [
      "Apply 440V and see which sparks",
      "Figure-8 method - short one end, measure resistance from the other",
      "Cut the cable in half",
      "Use an infrared camera"
    ],
    "exp": "Shorting specific pairs creates unique loop resistances, allowing you to trace which core is which without seeing the other end.",
    "cat": "DIAG",
    "id": "T22_227"
  },
  {
    "q": "When working near live parts, why should you keep one hand in a pocket or behind your back?",
    "a": "Avoids hand-to-hand current path through the heart",
    "opts": [
      "Keeps the hand warm",
      "Avoids hand-to-hand current path through the heart",
      "Provides better balance",
      "Looks professional to the surveyor"
    ],
    "exp": "The 'one hand rule' prevents a shock from crossing the chest and inducing lethal cardiac fibrillation.",
    "cat": "DIAG",
    "id": "T22_228"
  },
  {
    "q": "What PPE is mandatory when standing in front of the switchboard doing testing?",
    "a": "Stand on approved insulating mat",
    "opts": [
      "Stand on approved insulating mat",
      "Wear steel-toe boots only",
      "Stand on a wet towel",
      "Hold onto the metal frame"
    ],
    "exp": "The rubber mat provides high resistance to ground, blocking the return path for current if you touch a live part.",
    "cat": "DIAG",
    "id": "T22_229"
  },
  {
    "q": "What DC test voltage is used to megger a 220 V lighting circuit?",
    "a": "500 V DC",
    "opts": [
      "100 V DC",
      "250 V DC",
      "500 V DC",
      "1000 V DC"
    ],
    "exp": "Lighting and low voltage 220V circuits use a 500V test; 1000V could puncture the thinner insulation.",
    "cat": "DIAG",
    "id": "T22_230"
  },
  {
    "q": "What is considered an 'Excellent' (new) IR reading for a 440 V motor?",
    "a": ">100 MΩ",
    "opts": [
      "1 MΩ",
      "10 MΩ",
      ">100 MΩ",
      "0.5 MΩ"
    ],
    "exp": "While 1 MΩ is the minimum to run, a clean, dry, new motor will comfortably exceed 100 MΩ.",
    "cat": "DIAG",
    "id": "T22_231"
  },
  {
    "q": "What test voltage is used to megger 11 kV High Voltage equipment?",
    "a": "5000 V DC",
    "opts": [
      "500 V DC",
      "1000 V DC",
      "5000 V DC",
      "11000 V AC"
    ],
    "exp": "HV equipment requires heavy-duty 5 kV megger testing to stress the thick insulation adequately.",
    "cat": "DIAG",
    "id": "T22_232"
  },
  {
    "q": "When checking battery insulation to ground (cell to case), what test voltage is used?",
    "a": "500 V DC",
    "opts": [
      "1000 V DC",
      "50 V DC",
      "500 V DC",
      "250 V AC"
    ],
    "exp": "Battery banks are tested at 500V DC to ensure electrolyte leaks haven't created a path to the steel rack.",
    "cat": "DIAG",
    "id": "T22_233"
  },
  {
    "q": "What PPE is required under COSHH when handling Battery Acid (Sulphuric Acid)?",
    "a": "Acid-resistant gloves, goggles, apron",
    "opts": [
      "Cotton gloves and sunglasses",
      "Acid-resistant gloves, goggles, apron",
      "Standard boiler suit only",
      "Dust mask and hard hat"
    ],
    "exp": "Sulphuric acid is highly corrosive and instantly blinds or burns; full chemical PPE is required.",
    "cat": "DIAG",
    "id": "T22_234"
  },
  {
    "q": "If you spill battery acid, what chemical is used to neutralise it?",
    "a": "Bicarbonate of soda",
    "opts": [
      "Caustic soda",
      "Bicarbonate of soda",
      "Isopropyl alcohol",
      "Fresh water only"
    ],
    "exp": "Baking soda (bicarbonate) safely neutralizes the acid without creating a violent exothermic reaction.",
    "cat": "DIAG",
    "id": "T22_235"
  },
  {
    "q": "At what concentration in air is Battery Hydrogen Gas explosive?",
    "a": "4–74%",
    "opts": [
      "1–2%",
      "4–74%",
      "80–100%",
      "Only at 50%"
    ],
    "exp": "Hydrogen has a massive explosive range; anything between 4% and 74% will detonate if sparked.",
    "cat": "DIAG",
    "id": "T22_236"
  },
  {
    "q": "What severe hazard is created when SF6 gas decomposes due to an electrical arc in HV switchgear?",
    "a": "Produces highly toxic decomposition products (SO2, SOF2, HF)",
    "opts": [
      "Produces pure oxygen causing fire risk",
      "Produces highly toxic decomposition products (SO2, SOF2, HF)",
      "Turns into a highly flammable liquid",
      "Expands violently freezing the compartment"
    ],
    "exp": "Clean SF6 is safe, but an arc burns it into deadly toxic powders and gases like hydrofluoric acid.",
    "cat": "DIAG",
    "id": "T22_237"
  },
  {
    "q": "If an SF6 breaker has tripped on a major fault and decomposition is suspected, what PPE must be worn before opening?",
    "a": "BA set (Breathing Apparatus)",
    "opts": [
      "Paper dust mask",
      "BA set (Breathing Apparatus)",
      "Standard safety glasses",
      "Leather gloves"
    ],
    "exp": "The toxic byproducts of arced SF6 are lethal to inhale; full breathing apparatus is mandatory.",
    "cat": "DIAG",
    "id": "T22_238"
  },
  {
    "q": "How must used insulating oil from transformers or cable joints be disposed of?",
    "a": "In accordance with MARPOL Annex I (oily waste)",
    "opts": [
      "Poured down the engine room bilge",
      "Burned in the incinerator directly",
      "In accordance with MARPOL Annex I (oily waste)",
      "Thrown overboard in deep water"
    ],
    "exp": "Even clean mineral oil is a marine pollutant and must be processed via the OWS or sent ashore.",
    "cat": "DIAG",
    "id": "T22_239"
  },
  {
    "q": "What is the primary hazard of using Isopropyl Alcohol (IPA) for contact cleaning?",
    "a": "Flammable - no naked flames or sparking nearby",
    "opts": [
      "It dissolves copper",
      "Flammable - no naked flames or sparking nearby",
      "It conducts electricity perfectly",
      "It leaves a heavy oil residue"
    ],
    "exp": "IPA cleans excellently and evaporates fast, but its fumes are highly flammable.",
    "cat": "DIAG",
    "id": "T22_240"
  },
  {
    "q": "How does the interlock mechanism for cold ironing physically work?",
    "a": "NC contact from gen ACB in series with shore breaker closing coil",
    "opts": [
      "NO contact from shore breaker trips main engine",
      "NC contact from gen ACB in series with shore breaker closing coil",
      "A software block in the main PLC",
      "A padlock shared between both breakers"
    ],
    "exp": "If the generator breaker is closed, the circuit to close the shore breaker is physically broken.",
    "cat": "SURV",
    "id": "T22_241"
  },
  {
    "q": "What is the unbreakable sequence rule regarding the earth cable during cold ironing?",
    "a": "Earth connected first and disconnected last",
    "opts": [
      "Phase connected first, earth connected last",
      "Earth connected first and disconnected last",
      "Earth and neutral connected simultaneously",
      "Earth connected last and disconnected first"
    ],
    "exp": "The earth protects the crew; it must be the first thing established and the last thing removed.",
    "cat": "SURV",
    "id": "T22_242"
  },
  {
    "q": "If a 440 V motor reads 0.3 MΩ, what is Step 1 of the systematic approach?",
    "a": "Isolate at MSB, LOTO",
    "opts": [
      "Isolate at MSB, LOTO",
      "Megger the cable",
      "Change the motor bearings",
      "Disconnect the star point"
    ],
    "exp": "Safety is always step 1. Lock out and tag out the supply before doing any investigative work.",
    "cat": "SURV",
    "id": "T22_243"
  },
  {
    "q": "If the cable is good but the motor reads 0.3 MΩ, what is the next diagnostic step?",
    "a": "Isolate star point, test U1/V1/W1 to earth separately",
    "opts": [
      "Isolate star point, test U1/V1/W1 to earth separately",
      "Replace the entire motor immediately",
      "Megger the contacts on the MSB",
      "Apply 5000 V to burn off the moisture"
    ],
    "exp": "Opening the star point lets you pinpoint exactly which of the three phase windings has the low insulation.",
    "cat": "SURV",
    "id": "T22_244"
  },
  {
    "q": "When a surveyor asks how to order marine cable, what conductor material must you specify?",
    "a": "Stranded Copper",
    "opts": [
      "Solid Aluminium",
      "Stranded Copper",
      "Solid Copper",
      "Steel wire"
    ],
    "exp": "Marine cables must be copper for conductivity/corrosion resistance and stranded for flexibility against vibration.",
    "cat": "SURV",
    "id": "T22_245"
  },
  {
    "q": "What standard ensures a cable is marine approved?",
    "a": "IEC 60092-350",
    "opts": [
      "ISO 14001",
      "IEC 60092-350",
      "AWG Standard",
      "NEMA Standard"
    ],
    "exp": "Surveyors listen for the 'IEC 60092' series, which dictates fire testing and halogen-free sheathing.",
    "cat": "SURV",
    "id": "T22_246"
  },
  {
    "q": "A crew member is stuck to a live panel. What is your immediate action?",
    "a": "DO NOT touch the victim - isolate power immediately",
    "opts": [
      "Pull them off by the shoulder",
      "DO NOT touch the victim - isolate power immediately",
      "Throw water to break the arc",
      "Begin chest compressions immediately"
    ],
    "exp": "Touching them makes you the second victim. You must trip the breaker or use a non-conductor to push them off.",
    "cat": "SURV",
    "id": "T22_247"
  },
  {
    "q": "After isolating power and assessing the shock victim, if they have no pulse, what do you do?",
    "a": "Start CPR (30:2) + AED",
    "opts": [
      "Put them in the recovery position",
      "Start CPR (30:2) + AED",
      "Wait for the ship's doctor",
      "Give them oxygen only"
    ],
    "exp": "Immediate compressions and defibrillation are the only way to restart a fibrillating heart.",
    "cat": "SURV",
    "id": "T22_248"
  },
  {
    "q": "What time limit must be mentioned when describing the Emergency Generator test in the Saturday routine?",
    "a": "<45 sec",
    "opts": [
      "<10 sec",
      "<30 sec",
      "<45 sec",
      "<60 sec"
    ],
    "exp": "Surveyors specifically listen for '45 seconds', which is the strict SOLAS legal requirement for auto-start and loading.",
    "cat": "SURV",
    "id": "T22_249"
  },
  {
    "q": "During pre-sailing checks, what defines the correct removal of the shore connection?",
    "a": "Shore supply disconnected and cable removed (earth last)",
    "opts": [
      "Shore supply disconnected and cable removed (earth first)",
      "Shore supply disconnected and cable removed (earth last)",
      "Leave the cable attached for the tugs",
      "Disconnect the phases while live"
    ],
    "exp": "The earth stays attached until the very last second to ensure complete safety while handling the heavy phase conductors.",
    "cat": "SURV",
    "id": "T22_250"
  },
  {
    "q": "When explaining current effects, what happens at 10–20 mA?",
    "a": "Muscular tetany (cannot let go)",
    "opts": [
      "Ventricular fibrillation",
      "Muscular tetany (cannot let go)",
      "Tingling only",
      "Cardiac arrest"
    ],
    "exp": "This is the 'let-go' threshold; the current overrides your brain's signal, locking your muscles onto the wire.",
    "cat": "SURV",
    "id": "T22_251"
  },
  {
    "q": "What is the answer when a surveyor asks: 'What is the safe voltage for portable tools in confined spaces?'",
    "a": "Maximum 50 V AC/DC between conductors",
    "opts": [
      "110 V AC",
      "220 V AC",
      "Maximum 50 V AC/DC between conductors",
      "24 V DC only"
    ],
    "exp": "Due to sweat and close quarters, standard voltages are lethal. 50V is the maximum allowed limit.",
    "cat": "SURV",
    "id": "T22_252"
  },
  {
    "q": "What are the exact safe Oxygen limits for enclosed space entry?",
    "a": "19.5–23.5%",
    "opts": [
      "15.0–18.0%",
      "19.5–23.5%",
      "20.9% exactly",
      "10.0–25.0%"
    ],
    "exp": "Surveyors expect these exact numbers. Anything lower is hypoxia; anything higher is a fire hazard.",
    "cat": "SURV",
    "id": "T22_253"
  },
  {
    "q": "What is the LEL limit for enclosed space entry?",
    "a": "<10%",
    "opts": [
      "<1%",
      "<5%",
      "<10%",
      "<50%"
    ],
    "exp": "Entry is prohibited if combustible gas exceeds 10% of its lower explosive limit.",
    "cat": "SURV",
    "id": "T22_254"
  },
  {
    "q": "Why do you tell the surveyor a CT secondary must never be open-circuited?",
    "a": "No counter-MMF → core saturation → induces thousands of volts → lethal shock",
    "opts": [
      "It causes the primary circuit breaker to trip",
      "No counter-MMF → core saturation → induces thousands of volts → lethal shock",
      "It reverses the polarity of the ammeter",
      "It demagnetizes the generator rotor"
    ],
    "exp": "This is a classic fail point. Open CTs become lethal step-up transformers instantly.",
    "cat": "SURV",
    "id": "T22_255"
  },
  {
    "q": "If the phase sequence indicator shows incorrect rotation during cold ironing, what is the fix?",
    "a": "Swap any 2 phases",
    "opts": [
      "Reverse the earth cable",
      "Swap any 2 phases",
      "Run the generator backwards",
      "Swap all 3 phases"
    ],
    "exp": "Interchanging any two of the three line conductors reverses the phase rotation back to R-Y-B.",
    "cat": "REV",
    "id": "T22_256"
  },
  {
    "q": "What is the target Polarisation Index (PI) indicating a dry, healthy motor?",
    "a": "PI ≥ 2.0",
    "opts": [
      "PI < 1.0",
      "PI ≥ 2.0",
      "PI = 0.5",
      "PI > 100"
    ],
    "exp": "A ratio of 2.0 or higher means the insulation properly polarizes under voltage without excessive leakage.",
    "cat": "REV",
    "id": "T22_257"
  },
  {
    "q": "What is always the FIRST step in the 6-Step response framework?",
    "a": "Immediate (Safety)",
    "opts": [
      "Communicate",
      "Assess",
      "Immediate (Safety)",
      "Document"
    ],
    "exp": "You cannot troubleshoot if the ship is burning or someone is dying. Safety is step one.",
    "cat": "REV",
    "id": "T22_258"
  },
  {
    "q": "Why must an electric shock victim get a medical check even if they feel fine?",
    "a": "Internal burns, delayed cardiac effects",
    "opts": [
      "To update their medical certificate",
      "Internal burns, delayed cardiac effects",
      "To measure residual voltage in their body",
      "To prescribe painkillers"
    ],
    "exp": "Fibrillation or severe tissue swelling can happen hours after the shock event.",
    "cat": "REV",
    "id": "T22_259"
  },
  {
    "q": "How much more dangerous is wet skin compared to dry skin in an electrical shock?",
    "a": "100× more dangerous (1000 Ω vs 100,000 Ω)",
    "opts": [
      "2× more dangerous",
      "100× more dangerous (1000 Ω vs 100,000 Ω)",
      "1000× more dangerous",
      "It is the same danger level"
    ],
    "exp": "Resistance drops from ~100k ohms down to 1k ohms when wet, allowing 100 times more current to flow.",
    "cat": "REV",
    "id": "T22_260"
  },
  {
    "q": "Which specific steering gear functions are tested during the Saturday routine?",
    "a": "Hard over both sides, NFU, hand pump",
    "opts": [
      "Autopilot waypoint tracking",
      "Hard over both sides, NFU, hand pump",
      "Rudder angle indicator calibration",
      "Hydraulic oil chemical analysis"
    ],
    "exp": "The test proves that the mechanical limits, manual overrides, and hydraulic redundancy are functional.",
    "cat": "REV",
    "id": "T22_261"
  },
  {
    "q": "What steering test is vital during pre-sailing checks?",
    "a": "Both pumps, NFU, auto changeover",
    "opts": [
      "Both pumps, NFU, auto changeover",
      "Only the port pump",
      "Only the starboard pump",
      "Replacing the hydraulic filters"
    ],
    "exp": "Before maneuvering in restricted waters, the bridge must prove they have full, redundant steering control.",
    "cat": "REV",
    "id": "T22_262"
  },
  {
    "q": "Why do we specify mm² instead of AWG when ordering marine cable?",
    "a": "mm² is the IEC metric marine standard",
    "opts": [
      "AWG is too large",
      "mm² is the IEC metric marine standard",
      "AWG only applies to aluminium",
      "mm² indicates stranded copper automatically"
    ],
    "exp": "American Wire Gauge (AWG) is not used in the international IEC 60092 standards that govern global shipping.",
    "cat": "REV",
    "id": "T22_263"
  },
  {
    "q": "What causes the lethal risk if a CT secondary is left open?",
    "a": "No counter-MMF → core saturation → kV in secondary",
    "opts": [
      "High frequency harmonics",
      "No counter-MMF → core saturation → kV in secondary",
      "Massive current flow melts the wire",
      "The primary voltage doubles"
    ],
    "exp": "The missing opposing magnetic field allows the core flux to spike, acting as a massive voltage multiplier.",
    "cat": "REV",
    "id": "T22_264"
  },
  {
    "q": "At what concentration does H2S paralyze your sense of smell?",
    "a": "Above 100 ppm",
    "opts": [
      "Above 10 ppm",
      "Above 100 ppm",
      "Above 500 ppm",
      "Above 1000 ppm"
    ],
    "exp": "At lethal levels (>100 ppm), the gas numbs the olfactory nerves, removing the \"rotten egg\" smell warning.",
    "cat": "REV",
    "id": "T22_265"
  },
  {
    "q": "What do yellow signs indicate in the IMO safety scheme?",
    "a": "Warning / Caution",
    "opts": [
      "Prohibition",
      "Mandatory Action",
      "Warning / Caution",
      "Emergency Escape"
    ],
    "exp": "Yellow triangles draw attention to hazards like high voltage or toxic areas.",
    "cat": "REV",
    "id": "T22_266"
  },
  {
    "q": "Why is sequential loading critical after a blackout?",
    "a": "Motor starting inrush (6-8x FLC) would trip the generator if all started together",
    "opts": [
      "To save fuel",
      "Motor starting inrush (6-8x FLC) would trip the generator if all started together",
      "To prevent reverse power",
      "To give the bridge time to navigate"
    ],
    "exp": "Staggering motor starts gives the generator time to absorb the massive transient inrush currents without tripping.",
    "cat": "REV",
    "id": "T22_267"
  },
  {
    "q": "What effect does 50–100 mA of current have on the human body?",
    "a": "Ventricular fibrillation",
    "opts": [
      "Tingling sensation",
      "Muscular tetany",
      "Ventricular fibrillation",
      "Cardiac arrest"
    ],
    "exp": "This specific current range disrupts the electrical pacemaker of the heart, causing it to quiver fatally.",
    "cat": "REV",
    "id": "T22_268"
  },
  {
    "q": "What is the typical overspeed trip setting for a slow-speed 2-stroke engine (MCR ~80-100 RPM)?",
    "a": "~110–115 RPM (+10–15%)",
    "opts": [
      "~80–100 RPM",
      "~110–115 RPM (+10–15%)",
      "~720–750 RPM",
      "~810–840 RPM"
    ],
    "exp": "The safety trips at 10-15% above its normal max speed to prevent catastrophic mechanical failure.",
    "cat": "REV",
    "id": "T22_269"
  },
  {
    "q": "Which welding type is susceptible to Arc Blow?",
    "a": "DC Welding",
    "opts": [
      "AC Welding",
      "DC Welding",
      "Both AC and DC",
      "Neither AC nor DC"
    ],
    "exp": "DC welding builds up a steady, asymmetrical magnetic field that physically blows the arc off course.",
    "cat": "REV",
    "id": "T22_270"
  }

]);
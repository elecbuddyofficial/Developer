window.loadQuizzes("T02_HV", [
  {
    "q": "Per IEC 60092, what voltage is considered 'High Voltage' on ships?",
    "a": "Above 1000V AC or 1500V DC",
    "opts": [
      "Above 440V AC",
      "Above 1000V AC or 1500V DC",
      "Above 3300V AC",
      "Above 11000V AC"
    ],
    "exp": "IEC 60092 defines Low Voltage as up to and including 1000V AC. High Voltage is anything above 1000V AC or 1500V DC.",
    "id": "T02_HV_001",
    "topic": "T02_HV",
    "cat": "HV"
  },
  {
    "q": "What is the primary advantage of using High Voltage on ships with large electrical demand?",
    "a": "Lower current for the same power, resulting in smaller cables and reduced weight",
    "opts": [
      "Lower cost of switchgear",
      "Lower current for the same power, resulting in smaller cables and reduced weight",
      "Safer for personnel than 440V",
      "Eliminates the need for transformers"
    ],
    "exp": "Power = V x I x \u221a3. Doubling the voltage halves the current for the same power, significantly reducing cable size, weight, and I\u00b2R losses.",
    "id": "T02_HV_002",
    "topic": "T02_HV",
    "cat": "HV"
  },
  {
    "q": "Why are standard ship HV voltages (3.3kV, 6.6kV, 11kV) multiples of 1.1?",
    "a": "Derived from the form factor (1.11) of a sinusoidal AC waveform and IEC standard series",
    "opts": [
      "It matches the frequency of 60Hz exactly",
      "Derived from the form factor (1.11) of a sinusoidal AC waveform and IEC standard series",
      "To compensate for 10% voltage drop",
      "It is an arbitrary maritime convention"
    ],
    "exp": "The base 1.1kV comes from the form factor (Vrms/Vavg = 1.11). Standard IEC voltage series and transformer turns ratios are based on these multiples to ensure interoperability.",
    "id": "T02_HV_003",
    "topic": "T02_HV",
    "cat": "HV"
  },
  {
    "q": "Why is an Air Circuit Breaker (ACB) generally not used for High Voltage systems?",
    "a": "Air ionises under intense HV arc energy and fails to quench the arc",
    "opts": [
      "It is too heavy",
      "Air ionises under intense HV arc energy and fails to quench the arc",
      "Air reacts with copper at high voltage",
      "It operates too quickly"
    ],
    "exp": "At 6.6kV, arc energy is roughly 225 times higher than at 440V. Air ionises and becomes conductive, failing to quench the arc, leading to explosion or severe fire.",
    "id": "T02_HV_004",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "How does a Vacuum Circuit Breaker (VCB) quench an electrical arc?",
    "a": "Contacts open in a vacuum; metal vapour arc dissipates instantly at the first current zero crossing",
    "opts": [
      "It stretches the arc using magnetic chutes",
      "It blasts air to cool the contacts",
      "Contacts open in a vacuum; metal vapour arc dissipates instantly at the first current zero crossing",
      "It uses SF6 gas to absorb electrons"
    ],
    "exp": "In a vacuum (no air molecules to ionise), the small metal vapour arc formed during opening dissipates instantly when the AC current crosses zero.",
    "id": "T02_HV_005",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "What is a major property of SF6 (Sulphur Hexafluoride) gas used in switchgear?",
    "a": "It is electronegative and absorbs free electrons, preventing arc sustaining",
    "opts": [
      "It is highly flammable",
      "It is lighter than air",
      "It is electronegative and absorbs free electrons, preventing arc sustaining",
      "It is a highly conductive plasma"
    ],
    "exp": "SF6 is strongly electronegative. It captures free electrons to form heavy, immobile negative ions, rapidly increasing dielectric strength and quenching the arc.",
    "id": "T02_HV_006",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "What is a critical environmental and safety concern regarding SF6 gas?",
    "a": "Extremely high Global Warming Potential (GWP 23,500) and toxic byproducts after arcing",
    "opts": [
      "It destroys the ozone layer",
      "Extremely high Global Warming Potential (GWP 23,500) and toxic byproducts after arcing",
      "It is highly corrosive to copper",
      "It is explosive when mixed with air"
    ],
    "exp": "SF6 has a GWP of 23,500x CO\u2082. Furthermore, when exposed to an electric arc, it decomposes into highly toxic gases like HF and SOF2.",
    "id": "T02_HV_007",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "Why is an interlock fitted to prevent racking a VCB in or out while the breaker is CLOSED?",
    "a": "To prevent drawing or inserting the VCB under load, which would create a catastrophic arc at the busbar spouts",
    "opts": [
      "To save physical effort",
      "To prevent drawing or inserting the VCB under load, which would create a catastrophic arc at the busbar spouts",
      "To prevent damage to the racking handle",
      "To keep the control circuit connected"
    ],
    "exp": "Racking a closed breaker would interrupt massive load or fault currents in open air rather than inside the vacuum bottle, causing an explosive arc flash.",
    "id": "T02_HV_020",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "What does racking a VCB to the 'TEST' position accomplish?",
    "a": "Disconnects main power busbars but leaves control circuits connected for testing relay logic",
    "opts": [
      "Connects it fully to the busbars",
      "Disconnects main power busbars but leaves control circuits connected for testing relay logic",
      "Fully isolates both power and control",
      "Connects it to an external test generator"
    ],
    "exp": "In the TEST position, the breaker can be tripped and closed via the protection relays to verify control logic without actually energising the HV load.",
    "id": "T02_HV_021",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "What is the 'Ductor test' during VCB maintenance?",
    "a": "Measuring the main contact resistance using a micro-ohmmeter in the closed position",
    "opts": [
      "Testing the vacuum integrity with high voltage",
      "Measuring the main contact resistance using a micro-ohmmeter in the closed position",
      "Testing the insulation to earth",
      "Measuring the speed of the closing spring"
    ],
    "exp": "Ductor test passes high current through the closed contacts to measure resistance (usually <100 micro-ohms). High resistance indicates worn or oxidised contacts.",
    "id": "T02_HV_022",
    "topic": "T02_HV",
    "cat": "VCB"
  },
  {
    "q": "What is the primary purpose of a Neutral Earthing Resistor (NER) in a ship's HV system?",
    "a": "To limit earth fault current to a safe low value (typically 5-30A) and prevent overvoltages",
    "opts": [
      "To increase the short circuit current for faster tripping",
      "To limit earth fault current to a safe low value (typically 5-30A) and prevent overvoltages",
      "To provide a path for harmonic currents",
      "To step down the voltage for metering"
    ],
    "exp": "Solid earthing causes massive destructive fault currents. Fully floating systems cause dangerous overvoltages (\u221a3 \u00d7 line voltage). NER is the safe compromise.",
    "id": "T02_HV_008",
    "topic": "T02_HV",
    "cat": "NER"
  },
  {
    "q": "Calculate the NER value for a 6.6kV system to limit earth fault current to 10A.",
    "a": "381 ohms",
    "opts": [
      "660 ohms",
      "1100 ohms",
      "381 ohms",
      "38 ohms"
    ],
    "exp": "V_phase = 6600 / \u221a3 = 3810V. Resistance = V_phase / I = 3810 / 10 = 381 ohms.",
    "id": "T02_HV_009",
    "topic": "T02_HV",
    "cat": "NER"
  },
  {
    "q": "According to IEC 60092, what defines a 'Dead Front Panel'?",
    "a": "An electrical panel where NO live parts are accessible from the front operating side",
    "opts": [
      "A panel disconnected from all power sources",
      "An electrical panel where NO live parts are accessible from the front operating side",
      "A panel with no indicator lights",
      "A panel painted black to indicate high voltage"
    ],
    "exp": "Dead front means all live busbars and terminals are enclosed behind barriers. Accidental contact during normal operation from the front is impossible.",
    "id": "T02_HV_010",
    "topic": "T02_HV",
    "cat": "MSB"
  },
  {
    "q": "What is the minimum rubber mat thickness required in front of HV switchgear (>1000V)?",
    "a": "12 mm thick, rated for the voltage class",
    "opts": [
      "6 mm",
      "12 mm thick, rated for the voltage class",
      "3 mm",
      "25 mm"
    ],
    "exp": "For 440V LV systems, minimum 6mm mats are used. For HV systems (>1000V), minimum 12mm thickness mats rated for the specific HV class are required.",
    "id": "T02_HV_011",
    "topic": "T02_HV",
    "cat": "MSB"
  },
  {
    "q": "What is the IEC standard colour coding for three-phase AC busbars in an MSB?",
    "a": "L1: Brown, L2: Black, L3: Grey, Neutral: Blue",
    "opts": [
      "L1: Red, L2: Yellow, L3: Blue, Neutral: Black",
      "L1: Brown, L2: Black, L3: Grey, Neutral: Blue",
      "L1: White, L2: Red, L3: Black, Neutral: Green",
      "L1: Yellow, L2: Green, L3: Red, Neutral: White"
    ],
    "exp": "The new IEC standard (IEC 60446) is Brown/Black/Grey for phases, Blue for neutral, and Green/Yellow for Earth. Older ships may still use Red/Yellow/Blue.",
    "id": "T02_HV_012",
    "topic": "T02_HV",
    "cat": "MSB"
  },
  {
    "q": "What is an 'Arc Flash'?",
    "a": "An explosive release of energy and intense heat (>20,000\u00b0C) from an electrical arc fault through air",
    "opts": [
      "A controlled spark used to test insulation",
      "An explosive release of energy and intense heat (>20,000\u00b0C) from an electrical arc fault through air",
      "The bright light emitted by a VCB operating normally",
      "A static discharge between two ungrounded objects"
    ],
    "exp": "Arc flash is a catastrophic fault producing intense radiant heat, blinding UV light, and vaporised metal.",
    "id": "T02_HV_013",
    "topic": "T02_HV",
    "cat": "SAF"
  },
  {
    "q": "What phenomenon typically accompanies an Arc Flash and can throw personnel across a room?",
    "a": "Arc Blast (pressure/shock wave from rapid air expansion)",
    "opts": [
      "Electromagnetic pulse",
      "Arc Blast (pressure/shock wave from rapid air expansion)",
      "Toxic gas cloud",
      "Magnetic resonance"
    ],
    "exp": "Arc Blast is the physical pressure wave caused by the rapid expansion of air and vaporised metal (copper expands 67,000 times its volume).",
    "id": "T02_HV_014",
    "topic": "T02_HV",
    "cat": "SAF"
  },
  {
    "q": "What is the most critical first step before performing any maintenance on a High Voltage system?",
    "a": "Perform a Risk Assessment and obtain a Permit to Work (PTW)",
    "opts": [
      "Put on rubber gloves",
      "Perform a Risk Assessment and obtain a Permit to Work (PTW)",
      "Rack out the VCB",
      "Apply earthing clamps"
    ],
    "exp": "HV work ALWAYS begins with a formal risk assessment and obtaining an authorised Permit to Work. No exceptions.",
    "id": "T02_HV_015",
    "topic": "T02_HV",
    "cat": "SAF"
  },
  {
    "q": "Why must you wait at least 5 minutes after isolating an HV circuit before working on it?",
    "a": "To allow the lethal capacitive charge stored in HV cables and equipment to fully dissipate",
    "opts": [
      "To let the equipment cool down",
      "To allow the lethal capacitive charge stored in HV cables and equipment to fully dissipate",
      "To allow SF6 gas to settle",
      "To ensure the VCB mechanism resets"
    ],
    "exp": "HV cables have high capacitance and act like giant capacitors. Even after disconnection from supply, they retain a lethal charge that takes time to drain.",
    "id": "T02_HV_016",
    "topic": "T02_HV",
    "cat": "SAF"
  },
  {
    "q": "When testing for dead on an isolated HV circuit, what is the correct testing sequence?",
    "a": "Test on known live source \u2192 Test isolated circuit (all phases to earth) \u2192 Retest on known live source",
    "opts": [
      "Test phase to phase only",
      "Test on known live source \u2192 Test isolated circuit (all phases to earth) \u2192 Retest on known live source",
      "Test using a standard 1000V multimeter",
      "Apply earths first, then test for dead"
    ],
    "exp": "This is the proving-dead protocol. You must prove the tester works before using it, and prove it still works after using it, to ensure it didn't fail during the test.",
    "id": "T02_HV_017",
    "topic": "T02_HV",
    "cat": "SAF"
  },
  {
    "q": "For a 6.6kV shipboard system, what Class and colour of HV insulating gloves must be used?",
    "a": "Class 2 (Yellow), rated for 17,000V AC",
    "opts": [
      "Class 0 (Red)",
      "Class 1 (White)",
      "Class 2 (Yellow), rated for 17,000V AC",
      "Class 3 (Green), rated for 26,500V AC"
    ],
    "exp": "Class 2 (Yellow) is standard for 6.6kV systems. Class 3 (Green) is used for 11kV systems. Gloves must be tested every 6 months.",
    "id": "T02_HV_018",
    "topic": "T02_HV",
    "cat": "GLV"
  },
  {
    "q": "What must always be worn over HV rubber insulating gloves?",
    "a": "Leather outer protectors",
    "opts": [
      "Cotton inner liners",
      "Arc-flash rated gauntlets",
      "Leather outer protectors",
      "Nothing, they must be used alone"
    ],
    "exp": "Rubber insulating gloves are very susceptible to cuts and punctures. Leather outer protectors shield the rubber from mechanical damage.",
    "id": "T02_HV_019",
    "topic": "T02_HV",
    "cat": "GLV"
  },
  {
    "q": "Why is a 2500V or 5000V megger used for testing 6.6kV HV equipment instead of a 500V megger?",
    "a": "To meaningfully stress the thick HV insulation to a level comparable to its operating voltage and detect weak spots",
    "opts": [
      "Because 500V meggers are not accurate",
      "To meaningfully stress the thick HV insulation to a level comparable to its operating voltage and detect weak spots",
      "To overcome the high resistance of HV copper",
      "To charge the cable capacitance faster"
    ],
    "exp": "A 500V test on 6.6kV insulation applies less than 8% of operating stress. It will pass severely degraded insulation that would instantly fail under actual 6.6kV stress.",
    "id": "T02_HV_023",
    "topic": "T02_HV",
    "cat": "IR"
  },
  {
    "q": "What is the general rule of thumb for the MINIMUM acceptable insulation resistance (IR) for HV equipment?",
    "a": "Rated Voltage (in kV) + 1 Megohm",
    "opts": [
      "Rated Voltage (in kV) x 10 Megohms",
      "1 Megohm regardless of voltage",
      "Rated Voltage (in kV) + 1 Megohm",
      "50 Megohms for all HV"
    ],
    "exp": "Minimum IR = kV + 1 M\u03a9. For 6.6kV equipment, the absolute minimum is 7.6 M\u03a9. For 11kV, it is 12 M\u03a9.",
    "id": "T02_HV_024",
    "topic": "T02_HV",
    "cat": "IR"
  },
  {
    "q": "What does the '200% insulation' standard require before returning HV equipment to service after repair?",
    "a": "Measured IR must be at least twice the minimum acceptable value",
    "opts": [
      "Insulation must be physically twice as thick",
      "Measured IR must be at least twice the minimum acceptable value",
      "Two layers of rubber tape must be used",
      "The equipment must withstand 200% overvoltage"
    ],
    "exp": "200% insulation means a safety margin. If the minimum allowed is 1 M\u03a9, the repaired equipment must measure at least 2 M\u03a9 before it is deemed safe.",
    "id": "T02_HV_025",
    "topic": "T02_HV",
    "cat": "IR"
  },
  {
    "q": "How does an Insulation Resistance Monitor (IRM) detect an earth fault on an IT (insulated neutral) ship system?",
    "a": "Injects a low-voltage signal between neutral and earth and monitors the circuit impedance",
    "opts": [
      "Measures the current difference between phases",
      "Injects a low-voltage signal between neutral and earth and monitors the circuit impedance",
      "Senses the magnetic field around the earth bar",
      "Measures the neutral voltage to earth"
    ],
    "exp": "The IRM applies 1-5V DC/AC between the system and hull. If insulation degrades, impedance drops, leakage current flows, and the IRM triggers an alarm (typically below 50-100 k\u03a9).",
    "id": "T02_HV_026",
    "topic": "T02_HV",
    "cat": "IRM"
  },
  {
    "q": "In tanker electrical zones, what is Zone 0?",
    "a": "An area where a flammable atmosphere is continuously present (e.g., inside cargo tanks)",
    "opts": [
      "A completely safe area",
      "An area where flammable atmosphere is likely during normal operation",
      "An area where flammable atmosphere is unlikely",
      "An area where a flammable atmosphere is continuously present (e.g., inside cargo tanks)"
    ],
    "exp": "Zone 0 is the most hazardous. Only Category 'ia' Intrinsically Safe (Ex-ia) equipment is permitted in Zone 0.",
    "id": "T02_HV_027",
    "topic": "T02_HV",
    "cat": "BON"
  },
  {
    "q": "What is the correct sequence for bonding and connecting hoses during tanker cargo operations?",
    "a": "Connect ship-to-jetty bonding cable FIRST, then connect cargo hose. (Disconnect in reverse order).",
    "opts": [
      "Connect hose first, then bonding cable",
      "Connect ship-to-jetty bonding cable FIRST, then connect cargo hose. (Disconnect in reverse order).",
      "Bonding is not required for modern tankers",
      "Connect hose, start pumping, then connect bonding cable"
    ],
    "exp": "The ship and jetty must be brought to the same electrical potential BEFORE the hose flanges come near each other, preventing static sparks from igniting vapours.",
    "id": "T02_HV_028",
    "topic": "T02_HV",
    "cat": "BON"
  },
  {
    "q": "What is the principle behind 'Ex-d' (Flameproof) equipment used in Zone 1 areas?",
    "a": "The heavy enclosure contains any internal explosion and cools escaping gases via long flame paths below ignition temperature",
    "opts": [
      "It prevents any gas from entering the enclosure",
      "It limits the circuit energy so sparks cannot ignite gas",
      "The heavy enclosure contains any internal explosion and cools escaping gases via long flame paths below ignition temperature",
      "It is constantly purged with fresh air"
    ],
    "exp": "Ex-d doesn't stop gas getting in. It allows internal explosions but ensures the flame cannot propagate outside the enclosure to the surrounding atmosphere.",
    "id": "T02_HV_029",
    "topic": "T02_HV",
    "cat": "BON"
  },
  {
    "q": "Why is a Shaft Earthing system required on modern vessels?",
    "a": "To provide a direct electrical path from shaft to hull, preventing stray currents from causing electrolytic pitting in the bearings",
    "opts": [
      "To ground the main engine block",
      "To protect the propeller from lightning strikes",
      "To provide a direct electrical path from shaft to hull, preventing stray currents from causing electrolytic pitting in the bearings",
      "To monitor shaft speed"
    ],
    "exp": "The bearing oil film insulates the shaft. Stray common-mode currents (from alternators or VFDs) build up voltage and arc through the oil film, destroying the bearings. The shaft earthing brush safely bypasses this current to the hull.",
    "id": "T02_HV_030",
    "topic": "T02_HV",
    "cat": "SHF"
  },
  {
    "q": "Surveyor Sanjib frequently asks: What is the primary purpose of a Neutral Earthing Resistor (NER) in HV systems?",
    "a": "Limits earth fault current to prevent stator core damage",
    "opts": [
      "Limits earth fault current to prevent stator core damage",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_001",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "According to Surveyor Kamath, what is the required IR value for an HV motor (e.g. 6.6kV) before starting?",
    "a": "(Un/1000) + 1 Megohm, so minimum 7.6 Megohms (often practical rule is >100 M\u03a9)",
    "opts": [
      "(Un/1000) + 1 Megohm, so minimum 7.6 Megohms (often practical rule is >100 M\u03a9)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_002",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Deswal usually asks: How is the arc extinguished in a Vacuum Circuit Breaker (VCB)?",
    "a": "By interrupting the current in a high vacuum where no ionizable gas exists",
    "opts": [
      "By interrupting the current in a high vacuum where no ionizable gas exists",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_003",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the significance of the Polarization Index (PI) test in HV cables as requested by surveyors?",
    "a": "It indicates the cleanliness and dryness of the insulation over time (10 min / 1 min ratio)",
    "opts": [
      "It indicates the cleanliness and dryness of the insulation over time (10 min / 1 min ratio)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_004",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What happens if a vacuum bottle in a VCB loses its vacuum? (Common surveyor question)",
    "a": "The arc cannot be extinguished and the breaker may violently explode if operated under load",
    "opts": [
      "The arc cannot be extinguished and the breaker may violently explode if operated under load",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_005",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "According to MMD Surveyors, what is the most critical safety document required before commencing HV maintenance?",
    "a": "Permit to Work (PTW)",
    "opts": [
      "Permit to Work (PTW)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_006",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the function of the corona shield in high voltage systems?",
    "a": "To evenly distribute electric field and prevent corona discharge",
    "opts": [
      "To evenly distribute electric field and prevent corona discharge",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_007",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib asks: How do you prove a high voltage circuit is dead?",
    "a": "By using an approved and tested Voltage Indicating Device (VID)",
    "opts": [
      "By using an approved and tested Voltage Indicating Device (VID)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_008",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "During an oral exam, how would you explain 'Sanction to Test' for HV systems?",
    "a": "A formal document allowing testing on HV equipment without a full PTW for operational checks",
    "opts": [
      "A formal document allowing testing on HV equipment without a full PTW for operational checks",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_009",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the minimum safe distance (clearance) when working near exposed 6.6kV conductors?",
    "a": "Usually minimum 1 meter for 6.6kV, depending on company SMS",
    "opts": [
      "Usually minimum 1 meter for 6.6kV, depending on company SMS",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_010",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Deswal asks: Why are HV cables screened with a copper tape or wire?",
    "a": "To confine the electric field within the insulation and provide a path for earth fault currents",
    "opts": [
      "To confine the electric field within the insulation and provide a path for earth fault currents",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_011",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the purpose of a discharge stick in HV maintenance?",
    "a": "To safely discharge residual static charge from HV cables to earth before touching",
    "opts": [
      "To safely discharge residual static charge from HV cables to earth before touching",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_012",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "How do you test an HV voltage indicating device (VID) before use?",
    "a": "By testing it on a known live source or using a proving unit before and after use",
    "opts": [
      "By testing it on a known live source or using a proving unit before and after use",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_013",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Kamath asks: Why do we use vacuum instead of air for 6.6kV breakers?",
    "a": "Vacuum has superior dielectric strength and allows very compact breaker designs",
    "opts": [
      "Vacuum has superior dielectric strength and allows very compact breaker designs",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_014",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the dielectric strength of the vacuum used in VCBs?",
    "a": "Typically 10^-5 to 10^-7 torr",
    "opts": [
      "Typically 10^-5 to 10^-7 torr",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_015",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "According to surveyors, why is the NER rated for a specific time limit (e.g. 10 seconds)?",
    "a": "To prevent the resistor from melting due to excessive heat during a sustained earth fault",
    "opts": [
      "To prevent the resistor from melting due to excessive heat during a sustained earth fault",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_016",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What happens if the HV earth fault is not cleared within the NER rating time?",
    "a": "The NER could fail, leading to an uncontrolled earth fault and potential fire",
    "opts": [
      "The NER could fail, leading to an uncontrolled earth fault and potential fire",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_017",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib: What is the difference between an Earthing Switch and a Circuit Breaker?",
    "a": "Earthing switch is designed to handle fault making current, but not load breaking current",
    "opts": [
      "Earthing switch is designed to handle fault making current, but not load breaking current",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_018",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Why must the earthing switch be closed before issuing a Permit to Work?",
    "a": "To ensure any accidental energization results in a safe short to ground, protecting workers",
    "opts": [
      "To ensure any accidental energization results in a safe short to ground, protecting workers",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_019",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "During an MMD exam, how do you describe a 'High Voltage' system limit on ships?",
    "a": "Any voltage exceeding 1000V AC or 1500V DC",
    "opts": [
      "Any voltage exceeding 1000V AC or 1500V DC",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_020",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the primary risk of arc flash in HV switchboards?",
    "a": "Severe burns from intense heat, pressure wave, and flying molten metal",
    "opts": [
      "Severe burns from intense heat, pressure wave, and flying molten metal",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_021",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Deswal asks: What PPE is mandatory for racking out a VCB?",
    "a": "Arc flash suit, face shield, and rated HV gloves",
    "opts": [
      "Arc flash suit, face shield, and rated HV gloves",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_022",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "How do you measure the contact resistance of a VCB?",
    "a": "Using a micro-ohmmeter (Ductor tester) injecting DC current",
    "opts": [
      "Using a micro-ohmmeter (Ductor tester) injecting DC current",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_023",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the significance of tracking in HV insulation?",
    "a": "Formation of a permanent conductive path across the surface of insulation",
    "opts": [
      "Formation of a permanent conductive path across the surface of insulation",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_024",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "According to Surveyor Kamath, what causes corona discharge?",
    "a": "Ionization of air around conductors due to concentrated electric fields",
    "opts": [
      "Ionization of air around conductors due to concentrated electric fields",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_025",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is a PTW (Permit to Work) and who issues it for HV?",
    "a": "A safety document issued by the Chief Engineer (or authorized HV person)",
    "opts": [
      "A safety document issued by the Chief Engineer (or authorized HV person)",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_026",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "Surveyor Sanjib: What is the function of the anti-condensation heater in an HV motor?",
    "a": "To prevent moisture condensation on windings when the motor is stopped",
    "opts": [
      "To prevent moisture condensation on windings when the motor is stopped",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_027",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "How is the anti-condensation heater interlocked with the main HV contactor?",
    "a": "It is normally closed when the main contactor is open, and vice versa",
    "opts": [
      "It is normally closed when the main contactor is open, and vice versa",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_028",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "During surveyor exams, what is the accepted value of a PI test that indicates good insulation?",
    "a": "A PI value greater than 2.0 indicates good insulation",
    "opts": [
      "A PI value greater than 2.0 indicates good insulation",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_029",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What does a PI value below 1.0 indicate according to surveyors?",
    "a": "The insulation is dangerously wet or degraded and must not be energized",
    "opts": [
      "The insulation is dangerously wet or degraded and must not be energized",
      "Incorrect answer A",
      "Incorrect answer B",
      "Incorrect answer C"
    ],
    "exp": "Surveyor specific HV question.",
    "id": "T02_SURV_030",
    "topic": "T02_HV",
    "cat": "Surveyor Questions"
  },
  {
    "q": "What is the primary operational advantage of transmitting power at High Voltage (e.g., 6.6kV) rather than Low Voltage (440V) on a large vessel?",
    "a": "It significantly reduces the current for a given power level, allowing for smaller, lighter cables and reducing I2R copper losses.",
    "opts": [
      "It eliminates the need for circuit breakers.",
      "It significantly reduces the current for a given power level, allowing for smaller, lighter cables and reducing I2R copper losses.",
      "It makes the power perfectly immune to harmonics.",
      "It removes the need for step-down transformers."
    ],
    "exp": "According to P = V x I x cos(phi), if Voltage increases, Current decreases for the same Power. Lower current means thinner, lighter cables and massive savings on copper weight.",
    "cat": "HV",
    "id": "T02_HV_061",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "According to standard marine practice (IEC 60092), any system operating at or above what AC voltage is classified as High Voltage?",
    "a": "1000V AC",
    "opts": [
      "440V AC",
      "690V AC",
      "1000V AC",
      "3300V AC"
    ],
    "exp": "Marine rules classify voltages up to 1000V AC (and 1500V DC) as Low Voltage. Anything strictly above 1000V AC is High Voltage and requires special certification (STCW A-III/1, A-III/2, A-III/6).",
    "cat": "HV",
    "id": "T02_HV_062",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are standard ship HV generation voltages exactly 3.3kV, 6.6kV, or 11kV?",
    "a": "To provide a 10% allowance for voltage drop across the system to ensure equipment receives its nominal 3kV, 6kV, or 10kV rating.",
    "opts": [
      "Because 1.1 is the universal magnetic permeability constant.",
      "To provide a 10% allowance for voltage drop across the system to ensure equipment receives its nominal 3kV, 6kV, or 10kV rating.",
      "Because alternators cannot generate exactly 3000V.",
      "It is an arbitrary historical standard with no engineering basis."
    ],
    "exp": "The 1.1 multiplier (e.g., 3kV x 1.1 = 3.3kV) compensates for the inherent voltage drop in long cables, transformers, and distribution networks, ensuring the end consumer receives adequate voltage.",
    "cat": "HV",
    "id": "T02_HV_063",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When is an ETO or Engineer permitted to work on live High Voltage equipment?",
    "a": "Never. Live working on HV equipment is strictly prohibited under all circumstances.",
    "opts": [
      "When wearing Class 4 rubber gloves.",
      "If authorized by the Chief Engineer.",
      "Never. Live working on HV equipment is strictly prohibited under all circumstances.",
      "When using an insulated fiberglass hook."
    ],
    "exp": "Unlike 220V/440V systems where live troubleshooting is sometimes necessary (with precautions), HV safety rules globally prohibit working on live HV parts. It must always be Isolated, Dead, and Earthed.",
    "cat": "HV",
    "id": "T02_HV_064",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What phenomenon occurs in HV cables if the insulation is degraded and micro-voids exist within the dielectric?",
    "a": "Partial Discharge (Corona), leading to rapid insulation breakdown.",
    "opts": [
      "Galvanic corrosion.",
      "Partial Discharge (Corona), leading to rapid insulation breakdown.",
      "Capacitive reactance inversion.",
      "Thermal runaway of the copper core."
    ],
    "exp": "High voltage stresses the insulation. If microscopic air gaps exist, the air ionizes (partial discharge), producing ozone and UV light that rapidly destroys the surrounding insulation.",
    "cat": "HV",
    "id": "T02_HV_065",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are Vacuum Circuit Breakers (VCBs) preferred over Air Circuit Breakers (ACBs) for marine High Voltage applications?",
    "a": "Vacuum has vastly superior dielectric strength, allowing rapid arc quenching in a very small physical space.",
    "opts": [
      "They are much cheaper to manufacture.",
      "Vacuum has vastly superior dielectric strength, allowing rapid arc quenching in a very small physical space.",
      "They never require any maintenance.",
      "They do not require an operating mechanism."
    ],
    "exp": "At 6.6kV, an arc drawn in air can stretch for meters. In a high vacuum (10^-6 Torr), there are no gas molecules to ionize, meaning the arc collapses almost instantly at the first zero-crossing of the AC current.",
    "cat": "VCB",
    "id": "T02_HV_066",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if the vacuum integrity of a VCB 'bottle' is compromised?",
    "a": "The breaker loses its arc-quenching ability and will explode catastrophically if opened under load.",
    "opts": [
      "The breaker simply will not close.",
      "The breaker loses its arc-quenching ability and will explode catastrophically if opened under load.",
      "The contacts will weld together but remain safe.",
      "The vacuum pump automatically restarts."
    ],
    "exp": "If air leaks into the vacuum interrupter, it acts as a conductor at 6.6kV. When the contacts separate, the arc will not extinguish, building massive pressure and causing a violent explosion.",
    "cat": "VCB",
    "id": "T02_HV_067",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How is the vacuum integrity of a VCB bottle practically tested during maintenance?",
    "a": "By applying a high voltage DC test (e.g., 10kV to 30kV) across the open contacts and measuring leakage current.",
    "opts": [
      "By shaking it to hear loose parts.",
      "By applying a high voltage DC test (e.g., 10kV to 30kV) across the open contacts and measuring leakage current.",
      "By connecting a vacuum gauge.",
      "By submerging it in water to look for bubbles."
    ],
    "exp": "Since you cannot physically measure the vacuum inside a sealed ceramic bottle, you apply a high DC voltage across the open contacts. If the vacuum is good, leakage current is negligible (micro-amps). If it has failed, it will flash over.",
    "cat": "VCB",
    "id": "T02_HV_068",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does 'racking out' a VCB mean?",
    "a": "Physically withdrawing the entire breaker unit from the switchboard to guarantee a visible air gap isolation.",
    "opts": [
      "Opening the internal contacts.",
      "Physically withdrawing the entire breaker unit from the switchboard to guarantee a visible air gap isolation.",
      "Testing the vacuum bottles.",
      "Connecting the earthing switch."
    ],
    "exp": "Safety requires physical isolation. Racking the breaker out on its rails disconnects the primary 'tulip' contacts from the live busbars, providing a physical, visible air gap.",
    "cat": "VCB",
    "id": "T02_HV_069",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is an interlock fitted to prevent a VCB from being racked in or out while the main contacts are CLOSED?",
    "a": "To prevent drawing a massive, unquenchable arc in the open air at the isolating plug-in contacts.",
    "opts": [
      "To protect the racking handle from breaking.",
      "To prevent drawing a massive, unquenchable arc in the open air at the isolating plug-in contacts.",
      "To ensure the vacuum doesn't leak.",
      "Because the breaker is physically heavier when closed."
    ],
    "exp": "The primary isolating 'tulip' contacts are not designed to break load current. If you rack a closed breaker out under load, a 6.6kV arc will strike between the breaker and the busbar, causing an immediate arc flash explosion.",
    "cat": "VCB",
    "id": "T02_HV_070",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary function of a Neutral Earthing Resistor (NER) in a marine 6.6kV system?",
    "a": "To strictly limit the magnitude of a single phase-to-earth fault current, preventing catastrophic core damage while allowing protection relays to detect the fault.",
    "opts": [
      "To increase the short-circuit current for faster tripping.",
      "To strictly limit the magnitude of a single phase-to-earth fault current, preventing catastrophic core damage while allowing protection relays to detect the fault.",
      "To absorb harmonic distortions.",
      "To convert the system to an insulated neutral (IT) system."
    ],
    "exp": "In a 440V system, earth faults are tolerated (IT system). In 6.6kV, the voltage is too high; a phase-to-earth arc would destroy the stator iron. The NER grounds the star point but limits the fault current to a safe, low value (often matching the generator's full load current or less).",
    "cat": "NER",
    "id": "T02_HV_071",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a 6.6kV generator is star-connected, what is the phase-to-neutral voltage across the NER during a solid earth fault on one phase?",
    "a": "3810 Volts",
    "opts": [
      "6600 Volts",
      "3810 Volts",
      "440 Volts",
      "0 Volts"
    ],
    "exp": "Phase voltage = Line Voltage / sqrt(3). Therefore, 6600 / 1.732 = 3810V. During a solid earth fault on one phase, the neutral point is driven to phase potential relative to earth, putting 3810V across the NER.",
    "cat": "NER",
    "id": "T02_HV_072",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if a second phase-to-earth fault occurs on a different phase before the first one is cleared in an NER system?",
    "a": "It becomes a Phase-to-Phase short circuit, bypassing the NER entirely, resulting in massive, unrestricted fault current.",
    "opts": [
      "The NER limits the current even more.",
      "It becomes a Phase-to-Phase short circuit, bypassing the NER entirely, resulting in massive, unrestricted fault current.",
      "The voltage drops to zero safely.",
      "The generators automatically synchronize."
    ],
    "exp": "The NER only protects against a single phase-to-earth fault. If Phase A earths in one motor, and Phase B earths in another, the current travels A -> Earth -> B, bypassing the neutral point and the NER, causing a massive short circuit.",
    "cat": "NER",
    "id": "T02_HV_073",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are High Voltage systems on ships designed to automatically trip upon detecting a single earth fault, unlike 440V systems?",
    "a": "Because the high voltage will cause severe, rapid arcing damage to equipment and poses extreme risk of a secondary phase-to-phase fault.",
    "opts": [
      "Because HV cables cannot handle earth faults.",
      "Because the high voltage will cause severe, rapid arcing damage to equipment and poses extreme risk of a secondary phase-to-phase fault.",
      "Because the NER will instantly explode.",
      "It is merely a suggestion, not a requirement."
    ],
    "exp": "While a 440V IT system can run with one earth fault safely to maintain essential services, a 6.6kV arc is highly destructive. It will burn through insulation in seconds, so the protection relay must trip the faulty circuit immediately.",
    "cat": "NER",
    "id": "T02_HV_074",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How is a Neutral Earthing Resistor continuously monitored for integrity?",
    "a": "By using an NER monitor relay that injects a small measuring current to ensure the resistor has not burned out or gone open-circuit.",
    "opts": [
      "By visual inspection only.",
      "By measuring its temperature constantly.",
      "By using an NER monitor relay that injects a small measuring current to ensure the resistor has not burned out or gone open-circuit.",
      "By bypassing it periodically."
    ],
    "exp": "If the NER breaks (open circuit), the HV system becomes an ungrounded IT system without anyone knowing. The monitor relay ensures the earth path is intact and raises an alarm if the resistance changes.",
    "cat": "NER",
    "id": "T02_HV_075",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is an 'Arc Flash'?",
    "a": "A massive, explosive release of thermal energy caused by a high-voltage electrical arc traveling through ionized air.",
    "opts": [
      "A small spark when opening a switch.",
      "A massive, explosive release of thermal energy caused by a high-voltage electrical arc traveling through ionized air.",
      "The light emitted by a fluorescent tube.",
      "A type of welding used in shipbuilding."
    ],
    "exp": "An arc flash is essentially an electrical explosion. The temperature of the arc can reach 20,000\u00b0C (four times hotter than the sun), vaporizing copper and creating a lethal blast wave of molten metal and superheated air.",
    "cat": "SAF",
    "id": "T02_HV_076",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What piece of documentation is absolutely mandatory before beginning any work on isolated High Voltage equipment?",
    "a": "A specialized High Voltage Permit to Work (PTW) signed by the Chief Engineer.",
    "opts": [
      "A simple verbal agreement with the watchkeeper.",
      "A specialized High Voltage Permit to Work (PTW) signed by the Chief Engineer.",
      "A hot work permit.",
      "A generic risk assessment."
    ],
    "exp": "The HV PTW is a legal and life-saving document. It proves that the equipment has been properly isolated, locked off, tested dead, and earthed by an authorized person before work begins.",
    "cat": "SAF",
    "id": "T02_HV_077",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the correct sequence for making High Voltage equipment safe to work on?",
    "a": "Isolate, Secure (Lock out), Verify Dead (Prove dead), Earth and Short-circuit, Issue PTW.",
    "opts": [
      "Issue PTW, Isolate, Earth.",
      "Isolate, Secure (Lock out), Verify Dead (Prove dead), Earth and Short-circuit, Issue PTW.",
      "Earth, Verify Dead, Isolate.",
      "Verify Dead, Isolate, Lock out, Issue PTW."
    ],
    "exp": "This is the universally accepted strict sequence. You must completely disconnect power, physically lock the breakers open, use a certified tester to prove there is no voltage, physically connect the phases to earth, and only then issue the permit.",
    "cat": "SAF",
    "id": "T02_HV_078",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is 'Earthing and Short-circuiting' a mandatory step before working on HV cables, even after proving them dead?",
    "a": "To discharge any lethal capacitive voltage stored in the cables and to instantly trip the breaker if it is accidentally energized.",
    "opts": [
      "To test the NER.",
      "To prevent the cables from rusting.",
      "To discharge any lethal capacitive voltage stored in the cables and to instantly trip the breaker if it is accidentally energized.",
      "To keep the cables warm."
    ],
    "exp": "Long HV cables act as massive capacitors and hold a lethal charge for hours. Earthing bleeds this off safely. Also, if someone accidentally switches the power back on, the solid earth connection instantly trips the breaker, saving the worker.",
    "cat": "SAF",
    "id": "T02_HV_079",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary IEC standard that governs the testing and certification of electrically insulating gloves?",
    "a": "IEC 60903",
    "opts": [
      "IEC 60092",
      "IEC 60903",
      "IEC 61892",
      "IEC 60529"
    ],
    "exp": "IEC 60903 specifies the requirements for insulating gloves and mitts used for protection against electrical shock.",
    "cat": "GLV",
    "id": "T02_HV_080",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "For a marine 6.6kV system, what class of rubber insulating glove is minimally required for safe operation?",
    "a": "Class 1 (Proof tested to 10kV, maximum use 7.5kV AC)",
    "opts": [
      "Class 00 (Max 500V)",
      "Class 0 (Max 1000V)",
      "Class 1 (Proof tested to 10kV, maximum use 7.5kV AC)",
      "Class 4 (Max 36kV)"
    ],
    "exp": "Class 1 gloves are rated for a maximum AC use voltage of 7,500V, which safely covers standard 6.6kV shipboard distribution networks.",
    "cat": "GLV",
    "id": "T02_HV_081",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the standard color code label assigned to Class 1 insulating gloves according to IEC standards?",
    "a": "White",
    "opts": [
      "Red",
      "White",
      "Yellow",
      "Green"
    ],
    "exp": "IEC colour coding for gloves: Class 00 (Beige), Class 0 (Red), Class 1 (White), Class 2 (Yellow), Class 3 (Green), Class 4 (Orange).",
    "cat": "GLV",
    "id": "T02_HV_082",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What must ALWAYS be worn over rubber insulating gloves when working near HV equipment?",
    "a": "Leather protector gloves to prevent mechanical damage to the rubber.",
    "opts": [
      "Cotton sweat liners.",
      "Leather protector gloves to prevent mechanical damage to the rubber.",
      "Flame-retardant gauntlets.",
      "Kevlar cut-resistant gloves."
    ],
    "exp": "Rubber insulating gloves are fragile and easily punctured by sharp edges, wire strands, or tools. Leather protectors are mandatory to prevent any physical damage that would compromise the electrical insulation.",
    "cat": "GLV",
    "id": "T02_HV_083",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Before every single use, what test MUST the ETO perform on their HV rubber gloves?",
    "a": "A manual air inflation test (visual and auditory check for leaks).",
    "opts": [
      "A 10kV dielectric breakdown test.",
      "A water submersion test.",
      "A manual air inflation test (visual and auditory check for leaks).",
      "A continuity test with a multimeter."
    ],
    "exp": "By rolling the cuff tightly, air is trapped inside the glove. The user must listen and look for tiny pinhole leaks. Even a microscopic hole renders the glove lethal at 6.6kV.",
    "cat": "GLV",
    "id": "T02_HV_084",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How often must HV insulating gloves be sent to a certified laboratory for routine electrical re-testing?",
    "a": "Every 6 months from the date of issue (or 12 months from the date of manufacture if unused).",
    "opts": [
      "Every month.",
      "Every 6 months from the date of issue (or 12 months from the date of manufacture if unused).",
      "Every 5 years during special survey.",
      "They never need testing, only replacement when torn."
    ],
    "exp": "Rubber degrades over time due to ozone, UV, and temperature. Strict marine standards demand periodic laboratory dielectric proof testing, typically every 6 months of active service.",
    "cat": "GLV",
    "id": "T02_HV_085",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the maximum permissible AC use voltage for Class 0 rubber gloves (Red label)?",
    "a": "1,000 Volts AC",
    "opts": [
      "500 Volts AC",
      "1,000 Volts AC",
      "3,300 Volts AC",
      "7,500 Volts AC"
    ],
    "exp": "Class 0 gloves are only for Low Voltage work (up to 1000V AC). They offer zero protection on a 6.6kV system.",
    "cat": "GLV",
    "id": "T02_HV_086",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a Class 1 glove is used without a leather protector (even once), what is the correct procedure?",
    "a": "It must immediately be removed from service and sent for laboratory dielectric re-testing.",
    "opts": [
      "It can be reused if no visible damage is found.",
      "It should be washed in warm soapy water.",
      "It must immediately be removed from service and sent for laboratory dielectric re-testing.",
      "It must be downgraded to a Class 0 glove."
    ],
    "exp": "Because microscopic cuts from a single unprotected use can compromise the 7.5kV rating, the glove is considered unsafe until scientifically proven otherwise by a high-voltage test machine.",
    "cat": "GLV",
    "id": "T02_HV_087",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How should HV rubber insulating gloves be stored when not in use?",
    "a": "Stored flat in a dedicated canvas bag, in a cool, dark, dry place away from ozone sources.",
    "opts": [
      "Folded tightly in the engineer's toolbox.",
      "Hung by the fingers near the switchboard.",
      "Stored flat in a dedicated canvas bag, in a cool, dark, dry place away from ozone sources.",
      "Kept inside the main MSB panel."
    ],
    "exp": "Folding causes stress cracks. Heat and UV light destroy rubber. Ozone (generated by electric motors and switchgear) accelerates rubber rot. Thus, flat storage in a dark bag is required.",
    "cat": "GLV",
    "id": "T02_HV_088",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If an ETO is preparing to rack out a 6.6kV VCB, besides HV gloves, what other critical PPE is mandated?",
    "a": "An Arc Flash suit, including a face shield with the appropriate cal/cm2 rating, and an arc-rated balaclava.",
    "opts": [
      "Standard cotton boiler suit and safety glasses.",
      "A chemical splash suit and respirator.",
      "An Arc Flash suit, including a face shield with the appropriate cal/cm2 rating, and an arc-rated balaclava.",
      "High visibility vest and hard hat."
    ],
    "exp": "Racking a breaker is the highest risk time for an arc flash. HV gloves prevent shock, but an arc flash suit (Nomex/Kevlar blend) prevents third-degree burns from the explosive thermal energy.",
    "cat": "GLV",
    "id": "T02_HV_089",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What degrades the dielectric strength of rubber gloves the fastest in an engine room environment?",
    "a": "Contamination by oil, grease, or petroleum-based solvents.",
    "opts": [
      "Loud noise and vibration.",
      "High humidity.",
      "Contamination by oil, grease, or petroleum-based solvents.",
      "Fresh water condensation."
    ],
    "exp": "Petroleum products rapidly attack natural rubber, causing it to swell, soften, and lose all insulating properties. Gloves must be kept strictly away from oil.",
    "cat": "GLV",
    "id": "T02_HV_090",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the correct procedure for washing HV rubber gloves if they become dirty?",
    "a": "Wash with mild soap and lukewarm water, rinse thoroughly, and air dry away from direct heat.",
    "opts": [
      "Clean with engine degreaser.",
      "Wash with mild soap and lukewarm water, rinse thoroughly, and air dry away from direct heat.",
      "Dry clean only.",
      "Scrub with a wire brush and diesel."
    ],
    "exp": "Harsh chemicals destroy rubber. Mild soap is safe, but the gloves must be completely dry inside and out before use, as moisture conducts electricity.",
    "cat": "GLV",
    "id": "T02_HV_091",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of the 'clearance' requirement between the cuff of the rubber glove and the leather protector?",
    "a": "To prevent surface tracking (flashover) of high voltage across the leather to the user's arm.",
    "opts": [
      "To allow air circulation to cool the hands.",
      "To make the gloves easier to take off.",
      "To prevent surface tracking (flashover) of high voltage across the leather to the user's arm.",
      "To allow room for a wristwatch."
    ],
    "exp": "Leather is not an insulator. If the leather protector covers the entire rubber cuff, HV can track across the dirty leather directly to the skin. A gap (e.g., 25mm for Class 1) must be maintained.",
    "cat": "GLV",
    "id": "T02_HV_092",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When donning HV PPE, why must watches and rings be removed?",
    "a": "They can tear the rubber gloves and act as highly conductive, heat-retaining points during a shock or arc flash.",
    "opts": [
      "They affect the magnetic field of the switchboard.",
      "They can tear the rubber gloves and act as highly conductive, heat-retaining points during a shock or arc flash.",
      "They are not allowed by the company uniform policy.",
      "They cause static electricity buildup."
    ],
    "exp": "Jewelry easily punctures the delicate rubber. In an arc flash, metal jewelry rapidly absorbs heat, causing severe localized third-degree burns melting into the skin.",
    "cat": "GLV",
    "id": "T02_HV_093",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Class 2 insulating gloves (Yellow label) are rated for what maximum AC use voltage?",
    "a": "17,000 Volts AC",
    "opts": [
      "7,500 Volts AC",
      "11,000 Volts AC",
      "17,000 Volts AC",
      "26,500 Volts AC"
    ],
    "exp": "Class 2 gloves are proof tested to 20kV and have a maximum use voltage of 17kV. They are sometimes used on 11kV shipboard systems.",
    "cat": "GLV",
    "id": "T02_HV_094",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What indicates that an HV glove has failed the air inflation test?",
    "a": "A whistling sound or a noticeable decrease in pressure when the trapped air is held.",
    "opts": [
      "The glove turns a lighter color.",
      "A whistling sound or a noticeable decrease in pressure when the trapped air is held.",
      "The glove feels warm to the touch.",
      "The rubber becomes sticky."
    ],
    "exp": "Even if the hole is invisible, air escaping under pressure will produce a distinct hiss or whistle, and the glove will physically deflate.",
    "cat": "GLV",
    "id": "T02_HV_095",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you use HV insulating gloves that are past their stamped re-test date, provided they pass an air inflation test?",
    "a": "No, it is strictly prohibited. They must be re-tested by a certified lab before any further use.",
    "opts": [
      "Yes, in an emergency only.",
      "Yes, if authorized by the Chief Engineer.",
      "No, it is strictly prohibited. They must be re-tested by a certified lab before any further use.",
      "Yes, if they are Class 4 gloves."
    ],
    "exp": "The air test only finds physical holes; it cannot detect chemical degradation or dielectric breakdown of the rubber matrix. Only high-voltage lab testing ensures they are safe.",
    "cat": "GLV",
    "id": "T02_HV_096",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is an alternative to standard natural rubber gloves for personnel with severe latex allergies?",
    "a": "Gloves made from synthetic polymers (like EPDM or Polychloroprene) certified to IEC 60903.",
    "opts": [
      "Thick leather welding gloves.",
      "Gloves made from synthetic polymers (like EPDM or Polychloroprene) certified to IEC 60903.",
      "Standard nitrile surgical gloves.",
      "Working barehanded but standing on a rubber mat."
    ],
    "exp": "Manufacturers provide synthetic (Type II) insulating gloves that are ozone resistant and do not contain natural latex proteins, suitable for allergic personnel.",
    "cat": "GLV",
    "id": "T02_HV_097",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When is it acceptable to turn HV gloves inside out?",
    "a": "Never, except specifically instructed by the manufacturer during cleaning and drying, as it stresses the rubber.",
    "opts": [
      "Whenever putting them back in the bag.",
      "Never, except specifically instructed by the manufacturer during cleaning and drying, as it stresses the rubber.",
      "Always, to protect the outer surface.",
      "Only when performing the air test."
    ],
    "exp": "Repeatedly turning thick rubber gloves inside out places extreme mechanical stress on the seams and crotches of the fingers, leading to premature cracking.",
    "cat": "GLV",
    "id": "T02_HV_098",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does ozone (O3) damage rubber insulating gloves?",
    "a": "It attacks the polymer chains, causing 'ozone cutting'\u2014deep, brittle cracks that destroy the dielectric strength.",
    "opts": [
      "It makes the gloves highly conductive.",
      "It attacks the polymer chains, causing 'ozone cutting'\u2014deep, brittle cracks that destroy the dielectric strength.",
      "It melts the rubber into a liquid.",
      "It causes the gloves to shrink."
    ],
    "exp": "Ozone, generated by corona discharge from HV equipment, rapidly oxidizes natural rubber. When stressed (like being folded), the rubber splits deeply, forming visible cracks.",
    "cat": "GLV",
    "id": "T02_HV_099",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of wearing cotton inner liners under HV rubber gloves?",
    "a": "To absorb sweat, improving comfort and preventing the hands from slipping inside the glove.",
    "opts": [
      "To increase the voltage rating of the glove.",
      "To absorb sweat, improving comfort and preventing the hands from slipping inside the glove.",
      "To prevent the rubber from tearing.",
      "To provide extra heat protection from an arc flash."
    ],
    "exp": "Rubber gloves do not breathe. Sweaty hands can make precision work impossible and make the gloves extremely difficult to remove. Liners solve this comfort issue.",
    "cat": "GLV",
    "id": "T02_HV_100",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if a leather protector is excessively wet with water or sweat?",
    "a": "It can conduct electricity, potentially bridging the clearance gap and causing a shock.",
    "opts": [
      "It shrinks and crushes the rubber glove.",
      "It can conduct electricity, potentially bridging the clearance gap and causing a shock.",
      "It provides better grip on the breaker handle.",
      "It acts as a better insulator."
    ],
    "exp": "Wet leather is conductive. If the wet leather touches grounded metal and the clearance to the rubber cuff is compromised, current can track along the moisture path.",
    "cat": "GLV",
    "id": "T02_HV_101",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the 'Two-Color' construction found in some premium HV gloves?",
    "a": "The inside and outside are different colors; if the outer color is worn away revealing the inner color, the glove must be discarded.",
    "opts": [
      "It indicates they can be used for both AC and DC.",
      "The inside and outside are different colors; if the outer color is worn away revealing the inner color, the glove must be discarded.",
      "It helps identify the left and right hand.",
      "It proves they are made of synthetic rubber."
    ],
    "exp": "A contrasting inner color (e.g., black outside, yellow inside) provides an instant visual indicator of severe mechanical wear or deep cuts that compromise the glove's thickness.",
    "cat": "GLV",
    "id": "T02_HV_102",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What must be checked on the leather protectors before donning them over the rubber gloves?",
    "a": "Check for embedded metal shards, wire clippings, or sharp debris inside that could puncture the rubber.",
    "opts": [
      "Check the date of manufacture.",
      "Check for embedded metal shards, wire clippings, or sharp debris inside that could puncture the rubber.",
      "Check if they are fully oiled.",
      "Check the voltage rating stamped on the leather."
    ],
    "exp": "Protectors face harsh environments. If a piece of copper wire is trapped inside the leather, it will stab directly through the rubber glove when the user grips a tool.",
    "cat": "GLV",
    "id": "T02_HV_103",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Which of the following is NOT a valid test for HV gloves onboard a ship?",
    "a": "High-voltage dielectric breakdown test.",
    "opts": [
      "Visual inspection for cracks.",
      "Manual air inflation test.",
      "Checking the date of the last laboratory test.",
      "High-voltage dielectric breakdown test."
    ],
    "exp": "Ships do not have the specialized, calibrated AC/DC high voltage testing tanks required to perform a proper dielectric breakdown test. This must be done ashore.",
    "cat": "GLV",
    "id": "T02_HV_104",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the IEC 60903 definition of 'Proof Test Voltage' for a glove?",
    "a": "The high voltage applied under specified conditions for 3 minutes to verify the electrical strength of the glove.",
    "opts": [
      "The voltage at which the glove instantly melts.",
      "The high voltage applied under specified conditions for 3 minutes to verify the electrical strength of the glove.",
      "The normal working voltage of the switchboard.",
      "The voltage rating of the leather protector."
    ],
    "exp": "The proof test (e.g., 10kV for Class 1) is a factory/lab quality assurance test. The glove must withstand this voltage for 3 minutes without puncturing and while keeping leakage current within strict limits.",
    "cat": "GLV",
    "id": "T02_HV_105",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you use talcum powder inside HV gloves to make them easier to put on?",
    "a": "Yes, provided it is pure, non-conductive, and approved by the glove manufacturer.",
    "opts": [
      "No, it acts as an abrasive.",
      "Yes, provided it is pure, non-conductive, and approved by the glove manufacturer.",
      "Yes, but only graphite powder.",
      "No, it interacts with the ozone."
    ],
    "exp": "Pure French chalk or approved talc is often used to prevent the rubber from sticking to the skin, but it must not contain metallic impurities or chemicals that degrade rubber.",
    "cat": "GLV",
    "id": "T02_HV_106",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a ship's HV system is 11kV, what Class of rubber gloves MUST be used?",
    "a": "Class 2 (Maximum use 17kV AC)",
    "opts": [
      "Class 0",
      "Class 1",
      "Class 2 (Maximum use 17kV AC)",
      "Class 3 (Maximum use 26.5kV AC)"
    ],
    "exp": "Class 1 maxes out at 7.5kV. For an 11kV system (commonly found on very large cruise ships or LNG carriers), Class 2 (Yellow label) is the minimum required rating.",
    "cat": "GLV",
    "id": "T02_HV_107",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What feature defines an HV switchboard as 'Metal-Clad' according to IEC 62271-200?",
    "a": "All major components (breakers, busbars, cables) are enclosed in separate, earthed metal compartments.",
    "opts": [
      "It is painted with a metallic coating.",
      "All major components (breakers, busbars, cables) are enclosed in separate, earthed metal compartments.",
      "It uses aluminum busbars instead of copper.",
      "The entire switchboard is suspended on metal springs."
    ],
    "exp": "Metal-clad switchgear provides the highest safety level. If an arc flash occurs in the breaker compartment, grounded metal barriers prevent the blast from spreading to the busbar or cable compartments.",
    "cat": "MSB",
    "id": "T02_HV_108",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is an 'Arc Relief Flap' or 'Pressure Relief Duct' on an HV switchboard?",
    "a": "A weak point designed to blow open and direct the explosive pressure of an arc flash upwards and safely away from operators.",
    "opts": [
      "A vent to let out excess heat during normal operation.",
      "A flap to insert a fire extinguisher nozzle.",
      "A weak point designed to blow open and direct the explosive pressure of an arc flash upwards and safely away from operators.",
      "A viewing window for the busbars."
    ],
    "exp": "An arc flash causes an instantaneous, massive increase in air pressure. Without relief flaps directing this blast out the top of the board, the steel doors would blow off like shrapnel into the operator.",
    "cat": "MSB",
    "id": "T02_HV_109",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why do HV switchboards utilize 'Busbar Shutters'?",
    "a": "To automatically cover the live fixed contacts when the circuit breaker is racked out, preventing accidental contact.",
    "opts": [
      "To keep dust off the circuit breaker.",
      "To automatically cover the live fixed contacts when the circuit breaker is racked out, preventing accidental contact.",
      "To secure the breaker during rough weather.",
      "To provide ventilation to the busbars."
    ],
    "exp": "When a VCB is drawn out, the live 6.6kV busbar connections are exposed. Mechanical shutters automatically drop down over these spouts, providing a physical barrier against accidental touch.",
    "cat": "MSB",
    "id": "T02_HV_110",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of 'Anti-Condensation Heaters' inside HV switchboard compartments?",
    "a": "To keep the internal temperature slightly above ambient, preventing moisture from condensing on the high-voltage insulation.",
    "opts": [
      "To keep the operator warm during maintenance.",
      "To keep the internal temperature slightly above ambient, preventing moisture from condensing on the high-voltage insulation.",
      "To bake the insulating varnish on the busbars.",
      "To melt any ice that forms in the engine room."
    ],
    "exp": "Moisture is the enemy of high voltage. If the board cools down, condensation forms on the insulators, causing tracking and eventual flashover. Small heaters run continuously (when the breaker is open) to prevent this.",
    "cat": "MSB",
    "id": "T02_HV_111",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "In HV switchboards, what material is typically used to insulate the copper busbars themselves, aside from air?",
    "a": "Heat-shrinkable tubing or epoxy resin casting.",
    "opts": [
      "Asbestos tape.",
      "Heat-shrinkable tubing or epoxy resin casting.",
      "Standard PVC electrical tape.",
      "Cotton cloth soaked in oil."
    ],
    "exp": "While air provides some insulation, HV busbars are heavily insulated with special anti-tracking heat-shrink sleeves or epoxy resin to reduce the necessary air gap distance and prevent phase-to-phase arcing from rodents or tools.",
    "cat": "MSB",
    "id": "T02_HV_112",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the 'Earthing Switch' (or Make-Proof Earthing Switch) in an HV switchboard?",
    "a": "A mechanically interlocked switch used to solidly connect the outgoing cables to earth before maintenance.",
    "opts": [
      "A switch that turns on the NER.",
      "A mechanically interlocked switch used to solidly connect the outgoing cables to earth before maintenance.",
      "A switch used to bypass the main breaker.",
      "A switch that detects earth faults."
    ],
    "exp": "To ensure absolute safety, once the breaker is racked out, an earthing switch is thrown. 'Make-proof' means if the cable is accidentally live when earthed, the switch can safely withstand the resulting short-circuit force without exploding.",
    "cat": "MSB",
    "id": "T02_HV_113",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What mechanical interlock prevents closing the earthing switch on a live circuit?",
    "a": "The earthing switch can only be operated if the main circuit breaker is in the 'Test' or 'Withdrawn' position.",
    "opts": [
      "A software lock in the PMS.",
      "The earthing switch can only be operated if the main circuit breaker is in the 'Test' or 'Withdrawn' position.",
      "A padlock held by the captain.",
      "A sensor that measures voltage."
    ],
    "exp": "Mechanical cams and levers physically block the earthing switch handle from being inserted or turned unless the main VCB has been safely disconnected from the busbars.",
    "cat": "MSB",
    "id": "T02_HV_114",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the 'Test' position for a VCB in an HV switchboard?",
    "a": "The main HV contacts are disconnected, but the low voltage control circuits remain connected to test breaker operation.",
    "opts": [
      "The breaker is fully connected to the busbars but cannot take load.",
      "The main HV contacts are disconnected, but the low voltage control circuits remain connected to test breaker operation.",
      "The breaker is entirely removed from the panel.",
      "The breaker applies a test voltage to the cables."
    ],
    "exp": "In the 'Test' position, the 6.6kV circuit is physically broken (air gap). However, the umbilical cord for the 24V/110V control logic is still plugged in, allowing engineers to test the open/close coils and protection relays safely.",
    "cat": "MSB",
    "id": "T02_HV_115",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must the compartment doors of an HV switchboard remain closed and bolted before operating a circuit breaker?",
    "a": "To ensure the arc flash containment structure is fully intact in case of a catastrophic breaker failure.",
    "opts": [
      "To keep the noise down.",
      "To ensure the arc flash containment structure is fully intact in case of a catastrophic breaker failure.",
      "To prevent the anti-condensation heaters from losing heat.",
      "To stop the vacuum in the bottles from escaping."
    ],
    "exp": "Internal arc classification (IAC) ratings rely entirely on the steel doors being securely latched. Operating a breaker with the door open bypasses this protection, exposing the operator directly to a potential blast.",
    "cat": "MSB",
    "id": "T02_HV_116",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Protection Relay' in the context of an HV switchboard?",
    "a": "A microprocessor-based device that monitors CT and PT signals and commands the breaker to trip during abnormal conditions.",
    "opts": [
      "A mechanical spring that holds the breaker open.",
      "A microprocessor-based device that monitors CT and PT signals and commands the breaker to trip during abnormal conditions.",
      "A relay that turns on the switchboard lights.",
      "A device that automatically synchronizes the generators."
    ],
    "exp": "Modern Intelligent Electronic Devices (IEDs) analyze current (from CTs) and voltage (from PTs). If they detect overcurrent, short circuit, or earth faults, they send a 24V DC signal to the breaker's trip coil.",
    "cat": "MSB",
    "id": "T02_HV_117",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What are CTs (Current Transformers) and PTs (Potential Transformers) used for in HV switchboards?",
    "a": "To safely step down 6.6kV and high currents to low, measurable values (e.g., 110V and 5A) for meters and relays.",
    "opts": [
      "To increase the voltage for transmission.",
      "To safely step down 6.6kV and high currents to low, measurable values (e.g., 110V and 5A) for meters and relays.",
      "To convert AC to DC for the control circuits.",
      "To provide emergency power to the switchboard."
    ],
    "exp": "You cannot connect a 6.6kV line directly to a meter. PTs step 6600V down to 110V. CTs step 1000A down to 1A or 5A, completely isolating the operator and delicate electronics from the lethal primary high voltage.",
    "cat": "MSB",
    "id": "T02_HV_118",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a critical safety rule regarding the secondary circuit of a Current Transformer (CT) while the primary is live?",
    "a": "The secondary circuit MUST NEVER be open-circuited; it must always be shorted or connected to a load.",
    "opts": [
      "It must never be short-circuited.",
      "The secondary circuit MUST NEVER be open-circuited; it must always be shorted or connected to a load.",
      "It must be grounded to exactly 440V.",
      "It must be connected to a DC source."
    ],
    "exp": "If a CT secondary is opened while primary current flows, the core saturates and induces thousands of volts across the open secondary terminals, creating a lethal shock hazard and destroying the CT insulation.",
    "cat": "MSB",
    "id": "T02_HV_119",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is meant by 'Internal Arc Classification' (IAC) for marine HV switchboards?",
    "a": "A rating indicating the switchboard has been tested to withstand and contain an internal arc flash for a specific duration and current.",
    "opts": [
      "The ability of the switchboard to generate an arc.",
      "A rating indicating the switchboard has been tested to withstand and contain an internal arc flash for a specific duration and current.",
      "The classification of the vacuum bottles.",
      "The speed at which the breaker opens."
    ],
    "exp": "An IAC rating (e.g., IAC AFLR 31.5kA 1s) guarantees that if a massive 31.5kA short-circuit arc occurs inside, the metal casing will not rupture and operators outside will not be injured for 1 second.",
    "cat": "MSB",
    "id": "T02_HV_120",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does an 'Optical Arc Fault Sensor' protect an HV switchboard?",
    "a": "It uses fiber optic lenses to detect the intense flash of light from an arc, sending an instantaneous trip signal before pressure builds.",
    "opts": [
      "It uses lasers to measure the air gap.",
      "It uses fiber optic lenses to detect the intense flash of light from an arc, sending an instantaneous trip signal before pressure builds.",
      "It visually inspects the busbars for corrosion.",
      "It takes photographs of the operator for security."
    ],
    "exp": "Light travels faster than pressure. By detecting the blinding flash of an arc fault (often combined with an overcurrent signal), the relay trips the incoming breaker in milliseconds, drastically minimizing explosive damage.",
    "cat": "MSB",
    "id": "T02_HV_121",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Mimic Panel' on the front of an HV switchboard?",
    "a": "A graphical line diagram showing the layout of busbars, breakers, and generators, often with LED indicators showing live/dead status.",
    "opts": [
      "A mirror for the operator to check their PPE.",
      "A graphical line diagram showing the layout of busbars, breakers, and generators, often with LED indicators showing live/dead status.",
      "A touchscreen used to play training videos.",
      "A panel that mimics the sounds of the engine room."
    ],
    "exp": "The mimic diagram provides an instant, easy-to-understand visual representation of the ship's electrical topology, reducing operator error during stressful switching operations.",
    "cat": "MSB",
    "id": "T02_HV_122",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are key-exchange interlock systems (like Castell keys) used on HV systems?",
    "a": "To ensure a strict, forced sequence of operations (e.g., you cannot unlock a transformer door until the main breaker is locked open).",
    "opts": [
      "To prevent the crew from stealing the breakers.",
      "To ensure a strict, forced sequence of operations (e.g., you cannot unlock a transformer door until the main breaker is locked open).",
      "To start the emergency generator.",
      "To provide encryption for the SCADA network."
    ],
    "exp": "Castell keys trap a physical key in a lock. Turning off the breaker releases Key A. Key A is used to unlock the earthing switch, which releases Key B. Key B unlocks the compartment door. This completely eliminates human sequencing errors.",
    "cat": "MSB",
    "id": "T02_HV_123",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Control Voltage' in the context of an HV switchboard?",
    "a": "The low voltage (usually 24V DC, 110V DC, or 220V AC) used to power the protection relays, indicator lights, and breaker trip/close coils.",
    "opts": [
      "The 6.6kV generated by the alternators.",
      "The low voltage (usually 24V DC, 110V DC, or 220V AC) used to power the protection relays, indicator lights, and breaker trip/close coils.",
      "The voltage required to test the vacuum bottles.",
      "The voltage sent to the ship's navigation lights."
    ],
    "exp": "The massive 6.6kV system is entirely controlled by a safe, reliable low-voltage network, usually backed up by batteries (UPS) so breakers can still trip even during a total blackout.",
    "cat": "MSB",
    "id": "T02_HV_124",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the 24V DC control power to a VCB panel is lost, what happens to the breaker?",
    "a": "It remains in its current state (open or closed), but it cannot be operated electrically and protection relays are disabled.",
    "opts": [
      "It automatically trips open.",
      "It automatically closes.",
      "It remains in its current state (open or closed), but it cannot be operated electrically and protection relays are disabled.",
      "It causes an arc flash."
    ],
    "exp": "The main contacts are held closed by mechanical latches, not electromagnets. Without control power, the trip coil cannot fire. The breaker must be tripped manually by pressing the mechanical push-button on the front.",
    "cat": "MSB",
    "id": "T02_HV_125",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Trip Circuit Supervision' (TCS) relay?",
    "a": "A relay that continuously monitors the integrity of the wiring to the breaker's trip coil, alarming if the wire breaks.",
    "opts": [
      "A relay that monitors the temperature of the busbars.",
      "A relay that continuously monitors the integrity of the wiring to the breaker's trip coil, alarming if the wire breaks.",
      "A device that supervises the ETO during maintenance.",
      "A relay that prevents the breaker from closing."
    ],
    "exp": "If the tiny wire leading to the trip coil breaks, the protection relay cannot open the breaker during a short circuit. TCS passes a harmless milliamp current through the trip coil 24/7 to prove the circuit is intact.",
    "cat": "MSB",
    "id": "T02_HV_126",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When visually inspecting a live HV switchboard (through a viewing window), what is a sign of Corona discharge?",
    "a": "A faint blue or purple glow around busbar joints or cable terminations, accompanied by a hissing sound and ozone smell.",
    "opts": [
      "Bright orange sparks.",
      "A faint blue or purple glow around busbar joints or cable terminations, accompanied by a hissing sound and ozone smell.",
      "The busbars turning bright red.",
      "Water dripping from the roof."
    ],
    "exp": "Corona is the ionization of air due to high electric field stress. It emits UV light (appearing purple/blue in the dark) and creates ozone gas. It indicates failing insulation or sharp edges on conductors.",
    "cat": "MSB",
    "id": "T02_HV_127",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What tool is used to prove a 6.6kV busbar is dead before applying earths?",
    "a": "A certified High Voltage Potential Indicator (voltage detector), which must be proved on a known live source before and after use.",
    "opts": [
      "A standard 1000V digital multimeter.",
      "A certified High Voltage Potential Indicator (voltage detector), which must be proved on a known live source before and after use.",
      "A neon screwdriver.",
      "A megger."
    ],
    "exp": "Standard multimeters will explode at 6.6kV. A specialized HV detector wand (usually with lights and a siren) on a long fiberglass pole is used. The crucial 'prove-test-prove' method ensures the wand's battery wasn't dead.",
    "cat": "MSB",
    "id": "T02_HV_128",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the 'Anti-Pumping' relay in a circuit breaker control circuit?",
    "a": "It prevents the breaker from rapidly opening and closing (pumping) if the 'Close' command is maintained while a 'Trip' condition exists.",
    "opts": [
      "It pumps insulating oil into the breaker.",
      "It prevents the breaker from rapidly opening and closing (pumping) if the 'Close' command is maintained while a 'Trip' condition exists.",
      "It ensures the vacuum pump stays off.",
      "It stops the ship's fuel pumps during a blackout."
    ],
    "exp": "If an operator holds the 'Close' button while a fault exists on the line, the protection relay instantly trips the breaker. Without anti-pumping, the continuous close signal would immediately close it again, destroying the breaker.",
    "cat": "MSB",
    "id": "T02_HV_129",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary difference between a 'Switch Disconnector' and a 'Circuit Breaker' in HV gear?",
    "a": "A circuit breaker can safely interrupt massive short-circuit fault currents; a switch disconnector can only break normal load currents.",
    "opts": [
      "A switch disconnector operates at 440V.",
      "A circuit breaker can safely interrupt massive short-circuit fault currents; a switch disconnector can only break normal load currents.",
      "A switch disconnector is always filled with oil.",
      "There is no difference; the terms are interchangeable."
    ],
    "exp": "Switch disconnectors are cheaper and used for isolating transformers or ring mains under normal load. They do not have the heavy-duty arc quenching capacity to stop a 40,000 Amp short circuit.",
    "cat": "MSB",
    "id": "T02_HV_130",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is SF6 (Sulphur Hexafluoride) sometimes used instead of air in some HV switchboards (GIS)?",
    "a": "SF6 is a highly electronegative gas with excellent dielectric strength, allowing the switchboard to be made much smaller and immune to salt air.",
    "opts": [
      "SF6 is lighter than air.",
      "SF6 is a highly electronegative gas with excellent dielectric strength, allowing the switchboard to be made much smaller and immune to salt air.",
      "SF6 makes the copper busbars more conductive.",
      "SF6 is cheaper than air."
    ],
    "exp": "Gas Insulated Switchgear (GIS) seals the busbars in a tank of SF6 gas. Because SF6 insulates much better than air, the components can be placed very close together, saving critical space on modern vessels.",
    "cat": "MSB",
    "id": "T02_HV_131",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the required minimum clearance distance in front of an HV switchboard for operator safety?",
    "a": "Typically at least 1 meter (or more depending on Class rules) of clear, unobstructed walkway covered with an HV rubber mat.",
    "opts": [
      "0.5 meters.",
      "Typically at least 1 meter (or more depending on Class rules) of clear, unobstructed walkway covered with an HV rubber mat.",
      "3 meters.",
      "No specific clearance is required."
    ],
    "exp": "Sufficient space is required so that operators can safely rack breakers in and out using the long handle without backing into handrails, and to allow an escape path if an arc flash occurs.",
    "cat": "MSB",
    "id": "T02_HV_132",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does a 'Differential Protection' relay work on an HV generator or large transformer?",
    "a": "It compares the current entering the equipment to the current leaving it; if they are not exactly equal, it trips instantly for an internal fault.",
    "opts": [
      "It measures the voltage difference between phases.",
      "It compares the current entering the equipment to the current leaving it; if they are not exactly equal, it trips instantly for an internal fault.",
      "It relies on measuring the temperature difference.",
      "It compares the speed of two generators."
    ],
    "exp": "Kirchhoff's Current Law: Current in must equal Current out. Differential relays use CTs at both ends of a stator winding. If a phase-to-phase short occurs inside the winding, the currents unbalance, and the relay trips instantaneously (0 seconds).",
    "cat": "MSB",
    "id": "T02_HV_133",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What must be done to the ship's 6.6kV cables before megger testing them?",
    "a": "They must be isolated, proved dead, completely discharged to earth to remove capacitive charge, and disconnected from sensitive electronics.",
    "opts": [
      "They must be energized to 440V.",
      "They must be isolated, proved dead, completely discharged to earth to remove capacitive charge, and disconnected from sensitive electronics.",
      "They must be washed with fresh water.",
      "They must be connected to the MSB."
    ],
    "exp": "HV cables store massive energy. You must earth them to bleed the charge. Then, before meggering at 5000V DC, you must ensure voltage transformers (PTs) or electronics are disconnected, or the megger will destroy them.",
    "cat": "MSB",
    "id": "T02_HV_134",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is a 5000V DC megger typically used for testing 6.6kV High Voltage cables instead of a standard 500V megger?",
    "a": "To properly stress the thick insulation and detect deep-seated micro-voids or moisture that a low voltage cannot bridge.",
    "opts": [
      "Because 500V is not enough to power the meter's display.",
      "To properly stress the thick insulation and detect deep-seated micro-voids or moisture that a low voltage cannot bridge.",
      "Because HV cables have negative resistance at low voltages.",
      "To burn off any surface dirt."
    ],
    "exp": "Insulation acts like a resistor. A 500V test might show 'Infinity' on a 6.6kV cable even if there is a massive internal crack, because 500V isn't strong enough to arc across the crack. 5000V puts the dielectric under realistic stress.",
    "cat": "IR",
    "id": "T02_HV_135",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the recommended minimum acceptable Insulation Resistance (IR) value for a 6.6kV stator winding at operating temperature?",
    "a": "Generally at least 100 Mega-ohms, though modern standards often demand >1000 Mega-ohms.",
    "opts": [
      "1 Mega-ohm",
      "10 Mega-ohms",
      "Generally at least 100 Mega-ohms, though modern standards often demand >1000 Mega-ohms.",
      "Zero ohms"
    ],
    "exp": "The old rule of thumb is (kV + 1) Mega-ohms (e.g., 7.6 M-ohms), but this is dangerously low for modern HV systems. Leading manufacturers stipulate minimums of 100 M-ohms to 1 Giga-ohm before safely applying 6.6kV.",
    "cat": "IR",
    "id": "T02_HV_136",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the Polarization Index (PI) test?",
    "a": "The ratio of the Insulation Resistance measured at 10 minutes divided by the IR measured at 1 minute.",
    "opts": [
      "The ratio of voltage to current after 1 hour.",
      "The resistance measured at 0 degrees Celsius.",
      "The ratio of the Insulation Resistance measured at 10 minutes divided by the IR measured at 1 minute.",
      "A test to see if the magnetic poles are reversed."
    ],
    "exp": "PI = IR(10 min) / IR(1 min). It is a superior diagnostic tool because it cancels out the effect of temperature and assesses the actual cleanliness and dryness of the winding insulation.",
    "cat": "IR",
    "id": "T02_HV_137",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does a Polarization Index (PI) value of 1.0 or less indicate?",
    "a": "Severe contamination, moisture, or degraded insulation that is unsafe to energize.",
    "opts": [
      "Perfectly clean and dry insulation.",
      "Severe contamination, moisture, or degraded insulation that is unsafe to energize.",
      "The alternator is running backwards.",
      "The megger battery is dead."
    ],
    "exp": "A healthy insulation matrix 'polarizes' (aligns its molecules) under DC voltage, meaning resistance should steadily increase over 10 minutes. If it stays flat (PI=1.0) or drops, leakage current is overpowering the polarization, indicating dirty/wet windings.",
    "cat": "IR",
    "id": "T02_HV_138",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is considered a 'Good' Polarization Index (PI) for Class F high-voltage marine insulation?",
    "a": "Between 2.0 and 4.0",
    "opts": [
      "Less than 1.0",
      "Exactly 1.5",
      "Between 2.0 and 4.0",
      "Greater than 10.0"
    ],
    "exp": "A PI between 2.0 and 4.0 indicates clean, dry, healthy insulation. Values below 1.5 are questionable (requires cleaning/baking), and values above 5.0 on modern epoxy might indicate brittle, dry-cracked insulation.",
    "cat": "IR",
    "id": "T02_HV_139",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must the high-voltage cables be earthed for at least 15-30 minutes AFTER completing a 5000V megger test?",
    "a": "To safely bleed off the lethal capacitive charge absorbed by the long cables during the DC test.",
    "opts": [
      "To recalibrate the megger.",
      "To prevent the cables from rusting.",
      "To safely bleed off the lethal capacitive charge absorbed by the long cables during the DC test.",
      "To cool down the copper conductors."
    ],
    "exp": "High voltage cables have massive capacitance. The 5000V DC megger charges this capacitor. If you disconnect the megger and touch the cable, it will discharge 5000V directly through you. The charge must be earthed away.",
    "cat": "IR",
    "id": "T02_HV_140",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the Dielectric Absorption Ratio (DAR)?",
    "a": "The ratio of Insulation Resistance at 60 seconds divided by the IR at 30 seconds.",
    "opts": [
      "The speed at which water absorbs into cables.",
      "The ratio of Insulation Resistance at 60 seconds divided by the IR at 30 seconds.",
      "The maximum voltage a cable can absorb.",
      "A measurement of cable diameter."
    ],
    "exp": "DAR is similar to PI but used for shorter tests or smaller equipment where polarization happens faster. A DAR of >1.25 is generally considered acceptable.",
    "cat": "IR",
    "id": "T02_HV_141",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When performing an IR test on a 6.6kV generator, what must be done to the Automatic Voltage Regulator (AVR) sensing lines?",
    "a": "They must be completely disconnected to prevent the 5000V test voltage from destroying the delicate AVR electronics.",
    "opts": [
      "They must be connected to earth.",
      "They must be completely disconnected to prevent the 5000V test voltage from destroying the delicate AVR electronics.",
      "They must be short-circuited together.",
      "They require a separate 10kV test."
    ],
    "exp": "AVRs contain low-voltage microprocessors and diodes. The 5000V DC from the megger will instantly fry these components if the sensing or power lines are left connected to the stator terminals.",
    "cat": "IR",
    "id": "T02_HV_142",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Guard Terminal' on a high-voltage 5000V megger?",
    "a": "A third connection used to bypass surface leakage currents around insulators, ensuring only the true internal volumetric resistance is measured.",
    "opts": [
      "A physical lock to prevent unauthorized use.",
      "A third connection used to bypass surface leakage currents around insulators, ensuring only the true internal volumetric resistance is measured.",
      "A terminal that connects to the ship's alarm system.",
      "A backup earth connection."
    ],
    "exp": "If an insulator is dirty, current crawls across the dirt (surface leakage), giving a falsely low reading. Wrapping a bare wire around the insulator and connecting it to the 'Guard' terminal shunts this surface current away from the measurement circuit.",
    "cat": "IR",
    "id": "T02_HV_143",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does temperature affect Insulation Resistance (IR) readings?",
    "a": "IR is highly temperature-dependent; an increase of 10\u00b0C roughly halves the insulation resistance.",
    "opts": [
      "Temperature has no effect on IR.",
      "IR increases as temperature increases.",
      "IR is highly temperature-dependent; an increase of 10\u00b0C roughly halves the insulation resistance.",
      "IR doubles for every 1\u00b0C increase."
    ],
    "exp": "Because resistance drops drastically as windings get hotter, a reading taken at 70\u00b0C will look terribly low compared to a reading taken at 20\u00b0C. Readings must always be mathematically corrected to a base temperature (usually 40\u00b0C) for trending.",
    "cat": "IR",
    "id": "T02_HV_144",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the 'Step Voltage' test used in HV cable maintenance?",
    "a": "Applying DC voltage in increasing steps (e.g., 1kV, 2kV, 3kV) and ensuring the IR reading remains stable at each step.",
    "opts": [
      "Walking on the cable to test for physical damage.",
      "Applying DC voltage in increasing steps (e.g., 1kV, 2kV, 3kV) and ensuring the IR reading remains stable at each step.",
      "Measuring the voltage drop across a 1-meter step.",
      "Testing the stairs leading to the HV switchboard."
    ],
    "exp": "If insulation is healthy, its resistance remains relatively constant regardless of applied voltage. If the IR drops significantly as voltage steps up, it indicates micro-cracks or voids are beginning to break down under stress.",
    "cat": "IR",
    "id": "T02_HV_145",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is DC used for megger testing rather than AC?",
    "a": "AC would continuously charge and discharge the cable's capacitance, drawing massive reactive current and requiring a huge, impractical power supply.",
    "opts": [
      "AC is too dangerous.",
      "DC is easier to generate with a hand crank.",
      "AC would continuously charge and discharge the cable's capacitance, drawing massive reactive current and requiring a huge, impractical power supply.",
      "AC destroys rubber insulation."
    ],
    "exp": "Cables act as capacitors. With AC, the capacitance must be constantly charged and discharged 50/60 times a second. A DC megger only has to charge the capacitance once, after which it only measures the tiny, true leakage current.",
    "cat": "IR",
    "id": "T02_HV_146",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a 6.6kV motor has been sitting idle in a humid environment for 6 months, what is the best practice before starting?",
    "a": "Perform an IR and PI test; if low, apply space heaters or low-voltage DC to bake out the moisture before applying 6.6kV.",
    "opts": [
      "Start it immediately to let the running heat dry it out.",
      "Wash it with fresh water first.",
      "Perform an IR and PI test; if low, apply space heaters or low-voltage DC to bake out the moisture before applying 6.6kV.",
      "Double the fuse rating."
    ],
    "exp": "Applying 6.6kV to wet windings will cause an instantaneous phase-to-earth explosion. The moisture must be driven out slowly using internal anti-condensation heaters or external warm air blowers.",
    "cat": "IR",
    "id": "T02_HV_147",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if you touch the copper core of an HV cable during a 5000V megger test?",
    "a": "You will receive a severe, potentially lethal 5000V DC electric shock.",
    "opts": [
      "Nothing, the current is too low to feel.",
      "You will feel a mild tingle.",
      "You will receive a severe, potentially lethal 5000V DC electric shock.",
      "The megger will automatically shut off."
    ],
    "exp": "While meggers have limited output current (usually a few milliamps), a 5000V shock across the human heart can cause lethal ventricular fibrillation, and the stored capacitive energy in the cable can deliver a massive jolt.",
    "cat": "IR",
    "id": "T02_HV_148",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the typical sequence of testing a 3-core HV cable?",
    "a": "Phase U to Earth, V to Earth, W to Earth, then Phase U-V, V-W, and W-U.",
    "opts": [
      "Only measure all three tied together to earth.",
      "Phase U to Earth only.",
      "Phase U to Earth, V to Earth, W to Earth, then Phase U-V, V-W, and W-U.",
      "Measure from one end of the cable to the other."
    ],
    "exp": "Complete testing requires checking the insulation between every conductor and the earthed metallic sheath, AND checking the insulation between the conductors themselves (cross-phase).",
    "cat": "IR",
    "id": "T02_HV_149",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does a reading of '0 Megohms' during a megger test indicate?",
    "a": "A dead short circuit (solid metallic contact between the conductor and earth/other phase).",
    "opts": [
      "Perfect insulation.",
      "The megger is switched off.",
      "A dead short circuit (solid metallic contact between the conductor and earth/other phase).",
      "High moisture content."
    ],
    "exp": "Zero resistance means the test current is flowing entirely unimpeded. The insulation has completely failed, or an earthing strap was accidentally left connected.",
    "cat": "IR",
    "id": "T02_HV_150",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the IR reading is dangerously low due to heavy carbon dust contamination, what is the remedy?",
    "a": "Vacuum the windings, wash with an approved electro-cleaner solvent, and bake dry.",
    "opts": [
      "Increase the voltage to burn the dust away.",
      "Vacuum the windings, wash with an approved electro-cleaner solvent, and bake dry.",
      "Paint over the dust with insulating varnish.",
      "Rinse with sea water."
    ],
    "exp": "Carbon dust is highly conductive. It must be physically removed using vacuuming and non-residue evaporating solvents. Never use compressed air, which drives the dust deeper into the crevices.",
    "cat": "IR",
    "id": "T02_HV_151",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you perform a 5000V megger test on a 440V motor?",
    "a": "No, 5000V will severely stress and likely puncture the low-voltage insulation.",
    "opts": [
      "Yes, it provides a better reading.",
      "No, 5000V will severely stress and likely puncture the low-voltage insulation.",
      "Yes, but only for 30 seconds.",
      "No, the megger will break."
    ],
    "exp": "Test voltages must match the equipment rating. 440V equipment is tested at 500V or 1000V DC. Applying 5000V to a 440V winding will destroy it.",
    "cat": "IR",
    "id": "T02_HV_152",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the 'Dielectric Discharge' (DD) test?",
    "a": "A test that measures the discharge current after the megger is turned off, diagnosing the health of multiple layers of insulation.",
    "opts": [
      "A test to see how far an arc can jump.",
      "A test that measures the discharge current after the megger is turned off, diagnosing the health of multiple layers of insulation.",
      "Testing the oil in a transformer.",
      "Checking the battery of the megger."
    ],
    "exp": "Advanced testers use the DD test to find individual weak layers in multi-layer insulation (like stator coils). A high discharge current indicates a specific layer has absorbed too much charge due to degradation.",
    "cat": "IR",
    "id": "T02_HV_153",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is it vital to ensure the HV circuit breaker is racked out and locked off before meggering an outgoing cable?",
    "a": "To ensure the cable is completely isolated from the live busbars and cannot be accidentally energized by someone else.",
    "opts": [
      "To save battery power on the megger.",
      "To ensure the cable is completely isolated from the live busbars and cannot be accidentally energized by someone else.",
      "To prevent the megger from reading the busbar resistance.",
      "Because racking out automatically connects the megger."
    ],
    "exp": "Safety is paramount. If the breaker is left racked in, someone could close it via automation, sending 6.6kV into the cable while the ETO is holding the megger leads, resulting in a fatality.",
    "cat": "IR",
    "id": "T02_HV_154",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does an unstable, violently jumping needle/display on a megger during a 5000V test suggest?",
    "a": "Continuous arcing or partial discharge occurring across a crack or moisture track during the test.",
    "opts": [
      "A perfectly healthy cable.",
      "The ship is vibrating too much.",
      "Continuous arcing or partial discharge occurring across a crack or moisture track during the test.",
      "The batteries are low."
    ],
    "exp": "If the reading jumps wildly (e.g., from 500M down to 10M, back to 400M), the 5000V is literally causing a microscopic spark inside the cable. The arc flashes, resistance drops, the arc extinguishes, resistance rises, repeating rapidly.",
    "cat": "IR",
    "id": "T02_HV_155",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When interpreting IR trending data, what is more important than the absolute Megohm value?",
    "a": "The historical trend over time; a sudden, steep drop indicates an acute problem.",
    "opts": [
      "The specific brand of megger used.",
      "The historical trend over time; a sudden, steep drop indicates an acute problem.",
      "Ensuring it is exactly 100 Megohms.",
      "The humidity of the room on that exact day."
    ],
    "exp": "If a motor reads 800M for 5 years, and suddenly drops to 150M in one month, that is a massive red flag (water ingress, oil leak), even though 150M is technically above the 'minimum' limit.",
    "cat": "IR",
    "id": "T02_HV_156",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What component in a VCB panel MUST be earthed before meggering the incoming cables?",
    "a": "The Voltage Transformers (PTs) must be racked out or disconnected.",
    "opts": [
      "The main busbars.",
      "The current transformers (CTs).",
      "The Voltage Transformers (PTs) must be racked out or disconnected.",
      "The anti-condensation heaters."
    ],
    "exp": "PTs are connected directly phase-to-earth across the incoming lines to measure voltage. If left connected, the megger will measure the low resistance of the PT primary coil, giving a false 'Short Circuit' reading and potentially damaging the PT.",
    "cat": "IR",
    "id": "T02_HV_157",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the recommended test duration to obtain a true Insulation Resistance (IR) value for a large HV motor?",
    "a": "At least 1 minute (60 seconds) to allow the capacitive charging current to decay.",
    "opts": [
      "1 second.",
      "10 seconds.",
      "At least 1 minute (60 seconds) to allow the capacitive charging current to decay.",
      "1 hour."
    ],
    "exp": "When DC is first applied, a heavy 'charging current' flows, making the resistance appear falsely low. After 60 seconds, this current approaches zero, leaving only the true leakage current to be measured.",
    "cat": "IR",
    "id": "T02_HV_158",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a megger reading is taken at 60\u00b0C and is 50 Megohms, what is the approximate corrected value at 40\u00b0C?",
    "a": "200 Megohms",
    "opts": [
      "12.5 Megohms",
      "50 Megohms",
      "100 Megohms",
      "200 Megohms"
    ],
    "exp": "Using the rule of thumb that IR doubles for every 10\u00b0C drop: Drop to 50\u00b0C = 100M. Drop to 40\u00b0C = 200M. The insulation is actually much healthier than the raw 50M reading suggested.",
    "cat": "IR",
    "id": "T02_HV_159",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What safety equipment must the ETO wear while actually performing the 5000V megger test?",
    "a": "Class 1 HV Rubber insulating gloves with leather protectors.",
    "opts": [
      "Only safety glasses.",
      "Class 1 HV Rubber insulating gloves with leather protectors.",
      "No gloves are needed for testing.",
      "A full chemical suit."
    ],
    "exp": "Even though it's a test instrument, 5000V DC is lethal. If the test leads have compromised insulation or the user accidentally touches the bare crocodile clip, severe shock will occur.",
    "cat": "IR",
    "id": "T02_HV_160",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if a VLF (Very Low Frequency) AC test is used instead of a DC Megger test for HV cables?",
    "a": "It stresses the cable with AC (which is closer to operational stress) without requiring a massive power supply, effectively finding insulation defects.",
    "opts": [
      "It melts the cable.",
      "It stresses the cable with AC (which is closer to operational stress) without requiring a massive power supply, effectively finding insulation defects.",
      "It magnetizes the copper core.",
      "It cannot detect moisture."
    ],
    "exp": "VLF testing (usually at 0.1 Hz) is an advanced alternative to DC meggers. Because the frequency is so low, the capacitive charging current is minimal, yet it applies an AC wave that better simulates actual running conditions to find water trees.",
    "cat": "IR",
    "id": "T02_HV_161",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is a Shaft Earthing System absolutely critical on modern vessels, especially those with variable frequency drives or high-voltage alternators?",
    "a": "To provide a low-resistance path for induced shaft currents to earth, preventing them from discharging through and destroying the main engine bearings.",
    "opts": [
      "To power the steering gear.",
      "To provide a low-resistance path for induced shaft currents to earth, preventing them from discharging through and destroying the main engine bearings.",
      "To act as a lightning rod for the propeller.",
      "To measure the RPM of the shaft."
    ],
    "exp": "Electrical machinery and hull cathodic protection systems induce electrical potentials on the rotating propeller shaft. If not earthed, this voltage builds up until it arcs across the thin oil film in the main thrust bearings, causing severe pitting and rapid failure.",
    "cat": "SHF",
    "id": "T02_HV_162",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary component of a shaft earthing assembly that contacts the spinning propeller shaft?",
    "a": "Silver-graphite slip rings and heavy-duty grounding brushes.",
    "opts": [
      "A bath of liquid mercury.",
      "Silver-graphite slip rings and heavy-duty grounding brushes.",
      "A solid copper wire bolted to the shaft.",
      "A magnetic induction coil."
    ],
    "exp": "A highly conductive band (often silver alloy) is clamped around the shaft. Spring-loaded silver-graphite brushes ride on this band to continuously conduct the induced currents directly to the ship's hull.",
    "cat": "SHF",
    "id": "T02_HV_163",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does 'Spark Erosion' damage a main engine bearing?",
    "a": "Shaft voltage arcs across the microscopic lubricating oil film, melting tiny craters into the white metal bearing surface.",
    "opts": [
      "Friction ignites the lubricating oil.",
      "Shaft voltage arcs across the microscopic lubricating oil film, melting tiny craters into the white metal bearing surface.",
      "Static electricity causes the bearing to rust.",
      "The bearing becomes magnetized and seizes."
    ],
    "exp": "The LO film acts as an insulator. When shaft voltage exceeds the dielectric strength of the thin oil film (usually around 0.5V to 1V), it flashes over. Millions of these micro-arcs rip molecules of metal away, leaving a frosted, pitted surface.",
    "cat": "SHF",
    "id": "T02_HV_164",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the acceptable limit for the potential difference (voltage) between the rotating shaft and the ship's hull?",
    "a": "Typically less than 50 milli-volts (0.05V).",
    "opts": [
      "Less than 5 Volts.",
      "Less than 50 milli-volts (0.05V).",
      "Less than 24 Volts.",
      "Zero is impossible, up to 12V is acceptable."
    ],
    "exp": "To guarantee that the voltage can never bridge the oil film in the bearings, the shaft earthing system must keep the shaft potential clamped firmly below 50mV at all times.",
    "cat": "SHF",
    "id": "T02_HV_165",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the milli-voltmeter mounted on the shaft earthing panel?",
    "a": "To continuously monitor the voltage between the shaft and the hull, triggering an alarm if the earthing brushes fail.",
    "opts": [
      "To measure the power output of the main engine.",
      "To continuously monitor the voltage between the shaft and the hull, triggering an alarm if the earthing brushes fail.",
      "To check the battery voltage.",
      "To measure the speed of the propeller."
    ],
    "exp": "The panel uses a separate, dedicated sensing brush to measure the actual shaft voltage. If the main grounding brushes get dirty or wear out, the voltage spikes, and the meter triggers a 'High Shaft Voltage' alarm.",
    "cat": "SHF",
    "id": "T02_HV_166",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must the shaft earthing slip ring track be kept impeccably clean?",
    "a": "Dirt or oil creates a high-resistance barrier, rendering the brushes useless and forcing currents through the bearings.",
    "opts": [
      "To look good for port state control.",
      "Dirt or oil creates a high-resistance barrier, rendering the brushes useless and forcing currents through the bearings.",
      "To prevent the shaft from rusting.",
      "To reduce mechanical friction."
    ],
    "exp": "The system only works if the path of least resistance is through the brushes. If oil coats the silver ring, the brush resistance goes up, and the current will seek an easier path\u2014usually through the expensive main thrust bearing.",
    "cat": "SHF",
    "id": "T02_HV_167",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What material is strictly forbidden for cleaning the silver slip ring of a shaft earthing system?",
    "a": "Emery cloth, sandpaper, or any abrasive containing silicon carbide or aluminum oxide.",
    "opts": [
      "Clean dry cotton cloths.",
      "Emery cloth, sandpaper, or any abrasive containing silicon carbide or aluminum oxide.",
      "Approved electrical solvent.",
      "Specialized burnishing blocks."
    ],
    "exp": "Standard abrasives shed hard microscopic particles that imbed in the soft silver ring. These particles will rapidly machine away the carbon brushes. Only non-abrasive Scotch-Brite or specialized burnishing tools should be used.",
    "cat": "SHF",
    "id": "T02_HV_168",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Where is the shaft earthing system typically installed on the vessel?",
    "a": "As far aft as possible, on the intermediate shaft near the stern tube, before the main engine.",
    "opts": [
      "Inside the main engine crankcase.",
      "As far aft as possible, on the intermediate shaft near the stern tube, before the main engine.",
      "On the bridge.",
      "At the bow thruster."
    ],
    "exp": "By placing the earthing brushes between the propeller (the source of much of the galvanic current) and the main engine, the currents are shunted to the hull before they can reach the engine bearings.",
    "cat": "SHF",
    "id": "T02_HV_169",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What causes the galvanic currents that the shaft earthing system must dissipate?",
    "a": "The dissimilar metals of the bronze propeller and the steel hull rotating in seawater (an electrolyte).",
    "opts": [
      "Lightning strikes.",
      "The dissimilar metals of the bronze propeller and the steel hull rotating in seawater (an electrolyte).",
      "Friction from the wind.",
      "Radio waves from the radar."
    ],
    "exp": "The ship acts like a giant battery. The bronze propeller, steel hull, and salty seawater create a galvanic cell. The shaft earthing system provides a deliberate short-circuit to neutralize this battery effect safely.",
    "cat": "SHF",
    "id": "T02_HV_170",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does the ICCP (Impressed Current Cathodic Protection) system interact with the shaft earthing system?",
    "a": "The ICCP protects the hull by injecting current; the shaft earthing ensures the propeller is bonded to the hull so it is also protected by the ICCP.",
    "opts": [
      "They must never be used on the same ship.",
      "The ICCP protects the hull by injecting current; the shaft earthing ensures the propeller is bonded to the hull so it is also protected by the ICCP.",
      "The shaft earthing powers the ICCP.",
      "The ICCP destroys the shaft earthing brushes."
    ],
    "exp": "If the shaft is electrically floating (due to the oil film), the ICCP cannot protect the bronze propeller from corrosion. The shaft earthing brushes solidly connect the propeller to the hull, extending the ICCP's protective blanket over the propeller.",
    "cat": "SHF",
    "id": "T02_HV_171",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the typical composition of a shaft earthing brush?",
    "a": "High silver content (up to 80%) mixed with graphite.",
    "opts": [
      "Pure hard copper.",
      "High silver content (up to 80%) mixed with graphite.",
      "Standard pure carbon.",
      "Lead and tin."
    ],
    "exp": "Standard carbon brushes have too much electrical resistance for this application. Silver provides extreme conductivity to keep voltage below 50mV, while graphite provides lubrication to prevent wear on the ring.",
    "cat": "SHF",
    "id": "T02_HV_172",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the 'High Shaft Voltage' alarm sounds in the Engine Control Room, what is the most immediate troubleshooting step?",
    "a": "Check the shaft earthing brushes for wear, sticking in their holders, or severe oil contamination on the ring.",
    "opts": [
      "Shut down the main engine immediately.",
      "Check the shaft earthing brushes for wear, sticking in their holders, or severe oil contamination on the ring.",
      "Turn off the ICCP system.",
      "Increase the AVR voltage."
    ],
    "exp": "A high voltage means the earthing path is broken. Usually, a brush has worn too short, jammed in its holder due to dirt, or the silver track is coated in oil leaked from a nearby bearing.",
    "cat": "SHF",
    "id": "T02_HV_173",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are there usually two or more grounding brushes running on the same slip ring?",
    "a": "For redundancy and to increase the total contact area, ensuring ultra-low resistance to earth.",
    "opts": [
      "One is for AC, one is for DC.",
      "For redundancy and to increase the total contact area, ensuring ultra-low resistance to earth.",
      "One measures speed, one measures voltage.",
      "To act as a mechanical brake on the shaft."
    ],
    "exp": "Having multiple brushes in parallel halves the electrical resistance to the hull. If one brush bounces or gets dirty, the other maintains the vital earth connection, preventing bearing damage.",
    "cat": "SHF",
    "id": "T02_HV_174",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the separate 'Sensing Brush'?",
    "a": "It does not carry earth current; it only measures the true voltage of the shaft to feed the alarm panel.",
    "opts": [
      "It injects test current into the shaft.",
      "It cleans the slip ring.",
      "It does not carry earth current; it only measures the true voltage of the shaft to feed the alarm panel.",
      "It powers the shaft rotation sensor."
    ],
    "exp": "If you measured voltage from the grounding brushes themselves, a bad connection would show a falsely low voltage (0V) because it's disconnected. A dedicated, high-impedance sensing brush ensures accurate reading of the actual shaft potential.",
    "cat": "SHF",
    "id": "T02_HV_175",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does Variable Frequency Drive (VFD) propulsion increase the need for shaft earthing?",
    "a": "VFDs use high-frequency IGBT switching (PWM) which induces significant high-frequency capacitive currents in the motor shaft.",
    "opts": [
      "VFDs use DC power which rusts the shaft.",
      "VFDs use high-frequency IGBT switching (PWM) which induces significant high-frequency capacitive currents in the motor shaft.",
      "VFDs remove all lubrication from the bearings.",
      "VFDs generate massive magnetic fields that stop the propeller."
    ],
    "exp": "The rapid pulsing of a PWM drive creates 'Common Mode Voltage'. This high-frequency voltage easily couples across the internal capacitances of the motor onto the rotor shaft, leading to severe spark erosion if not aggressively earthed.",
    "cat": "SHF",
    "id": "T02_HV_176",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if you accidentally reverse the connections on the milli-voltmeter of the shaft earthing panel?",
    "a": "The meter will read backwards (negative), but the earthing brushes will still physically protect the bearings.",
    "opts": [
      "The main engine will trip.",
      "The meter will read backwards (negative), but the earthing brushes will still physically protect the bearings.",
      "The shaft will instantly corrode.",
      "The ICCP system will explode."
    ],
    "exp": "The earthing brushes are passive, physical connections to the hull. The meter is just an observation tool. Reversing the meter wires just reverses the needle polarity; it doesn't break the physical earth path.",
    "cat": "SHF",
    "id": "T02_HV_177",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "During dry dock, what maintenance should be performed on the shaft earthing system?",
    "a": "Clean the silver track, verify the hull bonding strap integrity, replace worn brushes, and calibrate the alarm panel.",
    "opts": [
      "Paint the silver track with anti-fouling.",
      "Clean the silver track, verify the hull bonding strap integrity, replace worn brushes, and calibrate the alarm panel.",
      "Remove it entirely as it is only needed in water.",
      "Grease the slip ring heavily to prevent rust."
    ],
    "exp": "Dry dock is the perfect time to do a deep clean, ensure the thick braided copper wire connecting the brush holder to the actual steel hull is totally free of corrosion, and renew the expensive silver brushes.",
    "cat": "SHF",
    "id": "T02_HV_178",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'V-Ring' or 'Wiper' sometimes installed near the shaft earthing system?",
    "a": "A mechanical seal/flinger to prevent oil or water from migrating along the shaft onto the sensitive silver slip ring.",
    "opts": [
      "A device to measure shaft torque.",
      "A mechanical seal/flinger to prevent oil or water from migrating along the shaft onto the sensitive silver slip ring.",
      "A grounding strap for the propeller.",
      "A device to cut fishing nets."
    ],
    "exp": "Since oil destroys the electrical contact, rubber flingers are strapped to the shaft forward and aft of the earthing ring. Centrifugal force flings any creeping oil outwards, keeping the track dry.",
    "cat": "SHF",
    "id": "T02_HV_179",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the shaft voltage is hovering at 150mV despite brand new brushes and a clean track, what might be the issue?",
    "a": "The braided copper grounding strap connecting the brush holder to the ship's hull is corroded, loose, or broken.",
    "opts": [
      "The propeller has fallen off.",
      "The braided copper grounding strap connecting the brush holder to the ship's hull is corroded, loose, or broken.",
      "The main engine is running too fast.",
      "The sea water is too salty."
    ],
    "exp": "The current must get from the brush holder to the hull. If the massive copper strap connecting the holder to the deck plates has rusted at the bolted joint, the resistance rises, causing the voltage to spike.",
    "cat": "SHF",
    "id": "T02_HV_180",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why shouldn't you paint the brush holder assembly of the shaft earthing system?",
    "a": "Paint acts as an insulator; if it gets between mating surfaces or the earthing strap, it destroys the low-resistance path to the hull.",
    "opts": [
      "Paint makes it look messy.",
      "Paint acts as an insulator; if it gets between mating surfaces or the earthing strap, it destroys the low-resistance path to the hull.",
      "Paint causes the silver to melt.",
      "The paint will catch fire from the sparks."
    ],
    "exp": "Overzealous deck crew painting the bilge area often paint over the copper earthing straps and bolts. This insulates the bolts, breaking the vital connection to the ship's steel hull.",
    "cat": "SHF",
    "id": "T02_HV_181",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the typical brush pressure for a silver-graphite shaft earthing brush?",
    "a": "Relatively low (e.g., 200-300 g/cm2) to prevent excessive wear of the soft silver, while still maintaining contact.",
    "opts": [
      "Extremely high (over 10 kg).",
      "Relatively low (e.g., 200-300 g/cm2) to prevent excessive wear of the soft silver, while still maintaining contact.",
      "Zero, it hovers using magnets.",
      "It varies with the speed of the engine."
    ],
    "exp": "Because the silver ring is soft and expensive, spring pressure must be carefully calibrated. Too much pressure wears the brushes and ring out in weeks; too little causes bouncing and arcing.",
    "cat": "SHF",
    "id": "T02_HV_182",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "In twin-screw vessels, how many shaft earthing systems are required?",
    "a": "One complete, independent system per propeller shaft.",
    "opts": [
      "One system shared between both shafts.",
      "One complete, independent system per propeller shaft.",
      "Only the starboard shaft needs one.",
      "Twin screws cancel out the voltage, so none are needed."
    ],
    "exp": "Each shaft generates its own galvanic and static potentials independently. Therefore, every rotating propulsion shaft must have its own dedicated earthing ring, brushes, and monitor.",
    "cat": "SHF",
    "id": "T02_HV_183",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the effect of an un-earthed shaft on the ship's ICCP system?",
    "a": "The ICCP reference cells will read unstable potentials, and the propeller will suffer severe galvanic corrosion.",
    "opts": [
      "The ICCP will work perfectly.",
      "The ICCP reference cells will read unstable potentials, and the propeller will suffer severe galvanic corrosion.",
      "The ICCP will shut down the main engine.",
      "The ICCP anodes will dissolve instantly."
    ],
    "exp": "The ICCP is designed to protect the hull AND the propeller. If the shaft is insulated by oil, the ICCP current cannot reach the propeller. The bronze propeller will then aggressively corrode the nearby steel stern tube.",
    "cat": "SHF",
    "id": "T02_HV_184",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can a standard multimeter accurately measure shaft voltage?",
    "a": "No, shaft voltage is a mix of DC (galvanic) and high-frequency AC (PWM/static). A specialized oscilloscope or wide-band meter is needed for accurate analysis.",
    "opts": [
      "Yes, any cheap meter works fine.",
      "No, shaft voltage is a mix of DC (galvanic) and high-frequency AC (PWM/static). A specialized oscilloscope or wide-band meter is needed for accurate analysis.",
      "Yes, but only on the Amps setting.",
      "No, meters explode near the shaft."
    ],
    "exp": "While the panel meter gives a rough DC average, the actual destructive spikes are high-frequency AC transients that a standard digital multimeter is too slow to detect.",
    "cat": "SHF",
    "id": "T02_HV_185",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'fluting' on a bearing?",
    "a": "A distinct washboard or ribbed pattern worn into the bearing surface, a classic symptom of prolonged electrical spark erosion.",
    "opts": [
      "A type of lubrication groove.",
      "A distinct washboard or ribbed pattern worn into the bearing surface, a classic symptom of prolonged electrical spark erosion.",
      "Rust caused by water in the oil.",
      "A manufacturing defect."
    ],
    "exp": "As the shaft rotates and arcs rhythmically through the oil film, it creates a pattern of parallel ridges (fluting) on the bearing race. Once fluting starts, bearing failure is rapid and catastrophic.",
    "cat": "SHF",
    "id": "T02_HV_186",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How do you safely clean a silver-graphite brush while under way?",
    "a": "Carefully remove it from the holder, wipe it with a lint-free cloth and electrical contact cleaner, and ensure it slides freely before replacing.",
    "opts": [
      "Spray it heavily with WD-40.",
      "Carefully remove it from the holder, wipe it with a lint-free cloth and electrical contact cleaner, and ensure it slides freely before replacing.",
      "Sand it down with a coarse file.",
      "Wash it in soapy water."
    ],
    "exp": "Brushes can get sticky from carbon dust. Safely pulling one brush out (while the redundant brush maintains the earth) to clean it with evaporating solvent is standard maintenance.",
    "cat": "SHF",
    "id": "T02_HV_187",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Passive' shaft earthing system vs an 'Active' system?",
    "a": "Passive relies only on physical brushes shorting to the hull. Active systems inject a counter-voltage or high-frequency current to actively cancel out the shaft potential.",
    "opts": [
      "Passive uses magnets; Active uses springs.",
      "Passive relies only on physical brushes shorting to the hull. Active systems inject a counter-voltage or high-frequency current to actively cancel out the shaft potential.",
      "Passive systems are illegal.",
      "Active systems only work in fresh water."
    ],
    "exp": "Most ships use passive (brushes). High-tech vessels with severe VFD issues might use Active systems that measure the shaft voltage and instantly inject an opposing voltage to force the potential to absolute zero.",
    "cat": "SHF",
    "id": "T02_HV_188",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is it important that the grounding strap from the brush holder is bolted directly to the hull structure, rather than a pipe or handrail?",
    "a": "Pipes and handrails may have rubber gaskets or painted joints, creating high electrical resistance to the true sea-earth.",
    "opts": [
      "Pipes might get too hot.",
      "Pipes and handrails may have rubber gaskets or painted joints, creating high electrical resistance to the true sea-earth.",
      "It is illegal to drill holes in pipes.",
      "Handrails vibrate too much."
    ],
    "exp": "The goal is the absolute lowest resistance to the surrounding seawater. The main structural steel frames of the ship provide the best path. Piping systems are often electrically isolated.",
    "cat": "SHF",
    "id": "T02_HV_189",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the shaft voltage spikes only when the shaft is turning at high RPM, but is zero when slow, what does this indicate?",
    "a": "Hydrodynamic lift. At high speed, the shaft fully rides on a thick film of oil (insulating it). At low speed, metal-to-metal contact naturally earths it.",
    "opts": [
      "The ICCP system only works at low speed.",
      "Hydrodynamic lift. At high speed, the shaft fully rides on a thick film of oil (insulating it). At low speed, metal-to-metal contact naturally earths it.",
      "The brushes are being blown away by the wind.",
      "The generator is over-producing voltage."
    ],
    "exp": "Bearings are designed to lift the shaft on a wedge of oil (hydrodynamic lubrication). Once lifted, the shaft is electrically floating, and voltage builds up immediately until the brushes take it to earth.",
    "cat": "SHF",
    "id": "T02_HV_190",
    "topic": "T02_HighVoltage"
  }
]);

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
  },
  {
    "q": "According to marine classification societies, what voltage level is considered 'High Voltage' on board a ship?",
    "a": "Any voltage exceeding 1000V AC or 1500V DC.",
    "opts": [
      "Any voltage exceeding 440V AC.",
      "Any voltage exceeding 1000V AC or 1500V DC.",
      "Any voltage above 11kV.",
      "Voltages above 6.6kV only."
    ],
    "exp": "Standard low voltage marine systems run up to 440V or 690V. The regulatory threshold where stringent High Voltage rules (like earthing, permits, and interlocks) apply is >1000V AC.",
    "cat": "HV",
    "id": "T02_HV_191",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why do modern large vessels (like LNG carriers or mega container ships) use High Voltage (e.g., 6.6kV) instead of standard 440V?",
    "a": "To significantly reduce the current for a given power, which reduces copper cable size, weight, and I\u00b2R heat losses.",
    "opts": [
      "To make the motors spin faster.",
      "To significantly reduce the current for a given power, which reduces copper cable size, weight, and I\u00b2R heat losses.",
      "High voltage is less dangerous to humans.",
      "To eliminate the need for transformers."
    ],
    "exp": "Power = Voltage \u00d7 Current. If you increase the voltage by 15 times (440V to 6600V), the current drops by 15 times. This allows for much thinner cables, saving massive amounts of weight and cost on large ships with high power demands (like bow thrusters).",
    "cat": "HV",
    "id": "T02_HV_192",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the phenomenon called 'Corona Discharge' in High Voltage systems?",
    "a": "The ionization of air surrounding a high-voltage conductor, producing a faint purple glow, a hissing sound, and ozone gas.",
    "opts": [
      "A type of mechanical failure in circuit breakers.",
      "The ionization of air surrounding a high-voltage conductor, producing a faint purple glow, a hissing sound, and ozone gas.",
      "A buildup of static electricity on the hull.",
      "The arc that occurs when opening a breaker."
    ],
    "exp": "When voltage is very high, the electric field can strip electrons from the surrounding air molecules (ionization). This creates a conductive halo (corona), producing ozone which degrades rubber insulation.",
    "cat": "HV",
    "id": "T02_HV_193",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does a 'Tracking' failure refer to in HV insulators?",
    "a": "An irreversible, conductive carbon path burned across the surface of an insulator due to dirt, moisture, and high voltage.",
    "opts": [
      "Following the wiring diagram accurately.",
      "An irreversible, conductive carbon path burned across the surface of an insulator due to dirt, moisture, and high voltage.",
      "The physical cracking of a ceramic insulator.",
      "The path an arc takes through a vacuum."
    ],
    "exp": "If an insulator is dirty, small leakage currents flow across the surface. These currents heat up and char the dirt, creating a permanent carbon track. Carbon is conductive, so eventually, a massive short circuit flashes across this track.",
    "cat": "HV",
    "id": "T02_HV_194",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "In an HV system, what is the purpose of 'Creepage Distance'?",
    "a": "The shortest distance along the surface of an insulator between two conductive parts, designed to prevent tracking.",
    "opts": [
      "The distance a cable can stretch.",
      "The shortest distance along the surface of an insulator between two conductive parts, designed to prevent tracking.",
      "The distance an arc can jump through the air.",
      "The physical length of the switchboard room."
    ],
    "exp": "Creepage is measured along the *surface*. To increase creepage without making the insulator physically taller, manufacturers mold 'sheds' or ribs into the insulator to make the surface path longer, defeating tracking.",
    "cat": "HV",
    "id": "T02_HV_195",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Clearance Distance' in contrast to Creepage?",
    "a": "The shortest straight-line distance through the air between two conductive parts.",
    "opts": [
      "The distance required between two switchboards.",
      "The shortest straight-line distance through the air between two conductive parts.",
      "The distance along the surface of an insulator.",
      "The minimum height of the ceiling."
    ],
    "exp": "Clearance is the straight-line 'jump' distance through the air. If clearance is too small for the voltage, the air will ionize, and an arc will strike directly through the air between the phases.",
    "cat": "HV",
    "id": "T02_HV_196",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are High Voltage busbars often heavily insulated (e.g., heat-shrink sleeved) unlike bare 440V busbars?",
    "a": "To prevent accidental phase-to-phase faults from vermin, dropped tools, or severe environmental contamination.",
    "opts": [
      "To keep the copper from rusting.",
      "To prevent accidental phase-to-phase faults from vermin, dropped tools, or severe environmental contamination.",
      "To increase the current carrying capacity.",
      "To change the color for phase identification."
    ],
    "exp": "At 6.6kV, a rat walking across bare busbars will instantly vaporize, causing a catastrophic arc flash that can destroy the switchboard. Insulation prevents this and reduces required clearance distances.",
    "cat": "HV",
    "id": "T02_HV_197",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary lethal hazard of an Arc Flash in an HV switchboard?",
    "a": "The explosive release of thermal energy, vaporized copper, and intense ultraviolet light.",
    "opts": [
      "The loud noise.",
      "The explosive release of thermal energy, vaporized copper, and intense ultraviolet light.",
      "The magnetic field disrupting pacemakers.",
      "The generation of ozone gas."
    ],
    "exp": "An arc flash is essentially a bomb. Temperatures reach 20,000\u00b0C (hotter than the sun), instantly vaporizing copper (which expands 67,000 times in volume), creating a blast wave, molten shrapnel, and blinding light.",
    "cat": "HV",
    "id": "T02_HV_198",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does moisture affect the dielectric strength of high voltage insulation?",
    "a": "Moisture drastically reduces dielectric strength, making the insulation highly susceptible to breakdown and arcing.",
    "opts": [
      "Moisture increases dielectric strength.",
      "Moisture has no effect.",
      "Moisture drastically reduces dielectric strength, making the insulation highly susceptible to breakdown and arcing.",
      "Moisture acts as a cooling agent, improving performance."
    ],
    "exp": "Water is a conductor. When absorbed into insulation (like older paper/oil types or micro-cracks in epoxy), it provides a path for current to flow, inevitably leading to a catastrophic short circuit.",
    "cat": "HV",
    "id": "T02_HV_199",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Partial Discharge' (PD) in an HV cable?",
    "a": "Localized microscopic electrical discharges within voids or bubbles inside the solid insulation.",
    "opts": [
      "A battery losing half its charge.",
      "Localized microscopic electrical discharges within voids or bubbles inside the solid insulation.",
      "A switch opening slowly.",
      "Current leaking to the ship's hull."
    ],
    "exp": "If a cable has a tiny air bubble inside its insulation from manufacturing, the air breaks down (sparks) under high voltage before the solid rubber does. These tiny, continuous internal sparks slowly eat away the insulation from the inside out.",
    "cat": "HV",
    "id": "T02_HV_200",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is anti-condensation heating crucial in High Voltage alternators and switchboards?",
    "a": "To keep the internal temperature slightly above ambient dew point, preventing moisture from condensing on the high-voltage insulators.",
    "opts": [
      "To keep the copper soft and flexible.",
      "To keep the internal temperature slightly above ambient dew point, preventing moisture from condensing on the high-voltage insulators.",
      "To warm up the engine room.",
      "To burn off carbon dust."
    ],
    "exp": "If the ship moves from a warm to a cold climate, water will condense on the cold insulators. At 6.6kV, this thin film of water will instantly cause a flashover when energized. Heaters keep the equipment dry when offline.",
    "cat": "HV",
    "id": "T02_HV_201",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the semi-conductive screen layer in a High Voltage cable?",
    "a": "To smooth out the electrical field stresses around the conductor and prevent localized voltage concentration.",
    "opts": [
      "To provide a path for the signal current.",
      "To smooth out the electrical field stresses around the conductor and prevent localized voltage concentration.",
      "To make the cable flexible.",
      "To prevent water ingress."
    ],
    "exp": "The copper conductor consists of many twisted wires, meaning the surface is bumpy. Voltage stress concentrates sharply on bumps. A smooth semi-conductive layer surrounds the copper, giving the voltage field a perfectly smooth, stress-free boundary.",
    "cat": "HV",
    "id": "T02_HV_202",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a 6.6kV system has a rated current of 2000A, what is the approximate apparent power capacity?",
    "a": "22.8 MVA",
    "opts": [
      "13.2 MVA",
      "22.8 MVA",
      "6.6 MVA",
      "2.0 MVA"
    ],
    "exp": "Power = \u221a3 \u00d7 V \u00d7 I. (1.732 \u00d7 6600V \u00d7 2000A = 22,862,400 VA, or roughly 22.8 MVA). This illustrates the massive power levels handled by marine HV boards.",
    "cat": "HV",
    "id": "T02_HV_203",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does a 'Capacitive Voltage Indicator' (Neon indicator) on an HV switchboard panel do?",
    "a": "It provides a visual indication (flashing lights) that the busbars or cables behind the panel are live with high voltage.",
    "opts": [
      "It measures the exact voltage level.",
      "It provides a visual indication (flashing lights) that the busbars or cables behind the panel are live with high voltage.",
      "It indicates the battery charge level.",
      "It shows if the circuit breaker is open."
    ],
    "exp": "These indicators use the capacitive coupling of the insulators to bleed off a tiny amount of voltage to flash a neon light. If they are flashing, the system is DEADLY. They must be checked before opening any panel.",
    "cat": "HV",
    "id": "T02_HV_204",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Is it safe to assume a circuit is dead if the Capacitive Voltage Indicators are NOT flashing?",
    "a": "No, the bulbs or capacitive circuits could be broken. Always verify with an approved high voltage proving unit and tester.",
    "opts": [
      "Yes, they are fail-safe.",
      "No, the bulbs or capacitive circuits could be broken. Always verify with an approved high voltage proving unit and tester.",
      "Yes, as long as the breaker is open.",
      "No, they only flash on DC."
    ],
    "exp": "Never trust your life to a lightbulb. Before touching any HV conductor, you must 'Prove Dead' using a certified HV probe, and you must test the probe itself on a known source before and after.",
    "cat": "HV",
    "id": "T02_HV_205",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Treeing' failure in solid dielectric cables (like XLPE)?",
    "a": "Microscopic, tree-like hollow channels that grow through the insulation over time due to electrical stress and moisture.",
    "opts": [
      "Fungus growing on the outer sheath.",
      "Microscopic, tree-like hollow channels that grow through the insulation over time due to electrical stress and moisture.",
      "The cable splitting into multiple branches.",
      "Roots from cargo entering the cable ducts."
    ],
    "exp": "'Water trees' or 'Electrical trees' are permanent degradations inside the plastic insulation. They grow slowly over years until they bridge the gap between the conductor and the earth sheath, causing a massive short circuit.",
    "cat": "HV",
    "id": "T02_HV_206",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must High Voltage cables have an earthed metallic shield (copper tape or wire mesh) around the insulation?",
    "a": "To confine the electric field entirely within the insulation and provide a path for fault currents if the insulation fails.",
    "opts": [
      "To make the cable heavier.",
      "To confine the electric field entirely within the insulation and provide a path for fault currents if the insulation fails.",
      "To act as the neutral conductor.",
      "To prevent magnetic interference with compasses."
    ],
    "exp": "Without the earth shield, the lethal electric field would extend outside the cable, meaning touching the plastic jacket could kill you. The shield keeps the field inside and guarantees that any internal failure shorts directly to earth, tripping the breaker immediately.",
    "cat": "HV",
    "id": "T02_HV_207",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of 'Stress Cones' or 'Terminations' at the ends of an HV cable?",
    "a": "To safely graduate and relieve the intense electrical field concentration that occurs where the earth shield is cut back.",
    "opts": [
      "To physically clamp the cable to the wall.",
      "To safely graduate and relieve the intense electrical field concentration that occurs where the earth shield is cut back.",
      "To cool the ends of the wire.",
      "To connect the three phases together."
    ],
    "exp": "When you strip back the earthed shield to connect the cable to a terminal, the electrical field violently concentrates at the sharp edge of the cut shield, causing immediate breakdown. A stress cone spreads this field out over a safe distance.",
    "cat": "HV",
    "id": "T02_HV_208",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "In a marine 6.6kV system, what color is typically used to denote 'High Voltage' warning signs and cables?",
    "a": "Red.",
    "opts": [
      "Green.",
      "Red.",
      "Blue.",
      "Yellow."
    ],
    "exp": "Standard convention uses bold Red signage (often with a lightning bolt) to explicitly differentiate HV equipment spaces, panels, and cables from standard 440V (which often uses yellow or black).",
    "cat": "HV",
    "id": "T02_HV_209",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you use standard insulated hand tools (rated 1000V) on a live 6.6kV system?",
    "a": "Absolutely not. Standard tools will immediately break down; moreover, working on live marine HV systems is strictly prohibited.",
    "opts": [
      "Yes, if you wear two pairs of gloves.",
      "Absolutely not. Standard tools will immediately break down; moreover, working on live marine HV systems is strictly prohibited.",
      "Yes, but only for a few seconds.",
      "Yes, the 1000V rating has a 10x safety factor."
    ],
    "exp": "1000V tools offer zero protection against 6600V. Furthermore, unlike low voltage where 'live work' is sometimes (dangerously) done, HV must ALWAYS be isolated, locked out, and earthed before any panel is opened.",
    "cat": "HV",
    "id": "T02_HV_210",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'BIL' (Basic Impulse Level) regarding HV equipment?",
    "a": "The maximum peak voltage surge (like a lightning strike or switching transient) the insulation can withstand without breaking down.",
    "opts": [
      "The lowest voltage the system can run on.",
      "The maximum peak voltage surge (like a lightning strike or switching transient) the insulation can withstand without breaking down.",
      "The battery level of the UPS.",
      "The current required to open a breaker."
    ],
    "exp": "Switching a massive inductive load (like a bow thruster) off creates a massive voltage spike (transient). A 6.6kV switchboard must have a BIL of perhaps 60kV to ensure these microsecond spikes don't blow up the insulators.",
    "cat": "HV",
    "id": "T02_HV_211",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of the 'Anti-Pumping' relay in an HV circuit breaker closing circuit?",
    "a": "To prevent the breaker from rapidly opening and closing (pumping) if the 'Close' button is held down while a fault condition (trip) exists.",
    "opts": [
      "To pump cooling oil through the breaker.",
      "To prevent the breaker from rapidly opening and closing (pumping) if the 'Close' button is held down while a fault condition (trip) exists.",
      "To pump air out of the vacuum bottle.",
      "To prevent water from entering the panel."
    ],
    "exp": "If you command a breaker to close onto a short circuit, the protection relay instantly trips it. If you are still holding the close button, it would close again, trip again, close again, destroying the breaker. The anti-pumping relay locks out the close command until you release the button.",
    "cat": "HV",
    "id": "T02_HV_212",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary insulating and arc-quenching medium in a VCB?",
    "a": "A high vacuum.",
    "opts": [
      "SF6 Gas.",
      "A high vacuum.",
      "Dielectric Oil.",
      "Compressed Air."
    ],
    "exp": "Vacuum is an excellent insulator because without air molecules, ionization cannot occur easily, making it highly effective at quenching arcs quickly.",
    "cat": "VCB",
    "id": "T02_HV_213",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does a Vacuum Circuit Breaker extinguish the arc when opening under load?",
    "a": "The arc vaporizes a tiny amount of the contact metal; at the first AC current zero-crossing, this vapor rapidly condenses, removing the conductive path in the vacuum.",
    "opts": [
      "By blowing a puff of air across the contacts.",
      "The arc vaporizes a tiny amount of the contact metal; at the first AC current zero-crossing, this vapor rapidly condenses, removing the conductive path in the vacuum.",
      "By submerging the contacts in oil.",
      "By stretching the arc until it breaks mechanically."
    ],
    "exp": "In a vacuum, the arc is sustained purely by ionized metal vapor boiled off the contacts. When the AC sine wave hits zero amps, the vapor instantly condenses back onto the contacts, restoring the vacuum's perfect insulation before the voltage rises again.",
    "cat": "VCB",
    "id": "T02_HV_214",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is the travel distance (contact gap) of a 6.6kV VCB so incredibly short (e.g., 10-15mm) compared to an Air Circuit Breaker?",
    "a": "Because the dielectric strength of a hard vacuum is phenomenally high, so a large physical gap is not required to stop the arc.",
    "opts": [
      "Because VCBs operate at low voltage.",
      "Because the dielectric strength of a hard vacuum is phenomenally high, so a large physical gap is not required to stop the arc.",
      "To save manufacturing costs on copper.",
      "Because vacuum slows down the moving parts."
    ],
    "exp": "A vacuum can withstand roughly 30kV per millimeter of gap. Therefore, a gap of just 12mm is more than enough to safely isolate a 6.6kV circuit, making VCBs very compact and fast-acting.",
    "cat": "VCB",
    "id": "T02_HV_215",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Current Chopping' in a Vacuum Circuit Breaker?",
    "a": "When the VCB brutally snaps the current to zero slightly BEFORE the natural AC zero-crossing, causing massive inductive voltage spikes.",
    "opts": [
      "Cutting the cables during removal.",
      "When the VCB brutally snaps the current to zero slightly BEFORE the natural AC zero-crossing, causing massive inductive voltage spikes.",
      "Chopping the sine wave into a square wave.",
      "The physical hammering action of the contacts."
    ],
    "exp": "Vacuum is so efficient at quenching that it can 'chop' the arc prematurely. By formula V = L(di/dt), an instant change in current (dt=0) through an inductive motor generates a lethal voltage spike that can destroy the motor's insulation.",
    "cat": "VCB",
    "id": "T02_HV_216",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How is the issue of 'Current Chopping' mitigated in modern VCBs?",
    "a": "By using specially formulated contact materials (like Copper-Chromium alloys) that sustain a tiny amount of metal vapor right up to the true zero-crossing.",
    "opts": [
      "By filling the vacuum bottle with air.",
      "By using specially formulated contact materials (like Copper-Chromium alloys) that sustain a tiny amount of metal vapor right up to the true zero-crossing.",
      "By opening the breaker very slowly.",
      "By using a massive external resistor."
    ],
    "exp": "Pure copper chops badly. Metallurgists mix in Chromium or Bismuth. These metals have high vapor pressures, meaning they keep 'boiling' just long enough to bridge the gap until the AC current naturally and gently hits zero.",
    "cat": "VCB",
    "id": "T02_HV_217",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What component is often installed alongside a VCB to protect motors from switching transients (voltage spikes)?",
    "a": "Surge Arresters or RC Snubber circuits.",
    "opts": [
      "Thermal Overloads.",
      "Surge Arresters or RC Snubber circuits.",
      "Reverse Power Relays.",
      "Heater coils."
    ],
    "exp": "Because VCBs operate so fast, they can generate steep voltage transients. Surge arresters clamp these high voltages to earth, and RC (Resistor-Capacitor) snubbers smooth out the sharp spikes, protecting the motor windings.",
    "cat": "VCB",
    "id": "T02_HV_218",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How can you tell if the vacuum inside a Vacuum Interrupter (bottle) has been lost?",
    "a": "By performing a high-voltage Hipot (Dielectric Withstand) test across the open contacts.",
    "opts": [
      "By shaking it to hear if it rattles.",
      "By performing a high-voltage Hipot (Dielectric Withstand) test across the open contacts.",
      "By looking through the glass for air bubbles.",
      "By measuring it with a standard ohmmeter."
    ],
    "exp": "You cannot see a vacuum leak. If air enters the bottle, it loses its insulating properties. Applying a high test voltage (e.g., 15kV DC) across the OPEN contacts will cause it to flash over instantly if the vacuum is gone.",
    "cat": "VCB",
    "id": "T02_HV_219",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of the metallic bellows inside a VCB vacuum bottle?",
    "a": "To allow the moving contact to travel in and out while maintaining a perfect, permanent hermetic vacuum seal.",
    "opts": [
      "To pump air into the bottle.",
      "To allow the moving contact to travel in and out while maintaining a perfect, permanent hermetic vacuum seal.",
      "To make a loud noise when closing.",
      "To act as the main conducting wire."
    ],
    "exp": "You cannot use rubber O-rings in a hard vacuum; they leak over time. The moving contact is welded to a corrugated stainless steel bellows that flexes like an accordion, allowing movement without breaking the seal.",
    "cat": "VCB",
    "id": "T02_HV_220",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is contact wear relatively low in a Vacuum Circuit Breaker compared to an Air Circuit Breaker?",
    "a": "Because the arc energy is much lower and the vaporized contact metal condenses back onto the contacts instead of blowing away.",
    "opts": [
      "Because they are never used under load.",
      "Because the arc energy is much lower and the vaporized contact metal condenses back onto the contacts instead of blowing away.",
      "Because vacuum makes the metal harder.",
      "Because they operate at lower currents."
    ],
    "exp": "In an air breaker, the arc literally burns the copper, turning it to oxide dust which is blown out the chute. In a vacuum, there is no oxygen to burn the metal. It vaporizes and then plates back onto the cool surfaces, preserving the contact mass.",
    "cat": "VCB",
    "id": "T02_HV_221",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the typical lifespan of a VCB vacuum bottle under normal operating conditions?",
    "a": "Usually 20 to 30 years, or upwards of 10,000 to 30,000 mechanical operations.",
    "opts": [
      "6 months.",
      "Usually 20 to 30 years, or upwards of 10,000 to 30,000 mechanical operations.",
      "100 operations max.",
      "They must be replaced every dry dock."
    ],
    "exp": "VCBs are largely maintenance-free internally. The vacuum seal is robust, and contact wear is minimal. The mechanical spring operating mechanism requires maintenance long before the vacuum bottle fails.",
    "cat": "VCB",
    "id": "T02_HV_222",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does a 'Contact Wear Indicator' on a VCB show?",
    "a": "The physical erosion of the contact surfaces, usually indicated by a mark on the moving stem that disappears as the contacts wear down.",
    "opts": [
      "The temperature of the contacts.",
      "The physical erosion of the contact surfaces, usually indicated by a mark on the moving stem that disappears as the contacts wear down.",
      "The vacuum level inside the bottle.",
      "The pressure of the closing spring."
    ],
    "exp": "Because the contacts are sealed inside the ceramic/glass bottle, you cannot see them. The manufacturer provides a gauge or scribe line on the external moving push-rod to measure how far the contacts have burned away over the years.",
    "cat": "VCB",
    "id": "T02_HV_223",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are VCBs preferred over SF6 gas breakers for most marine medium-voltage applications (up to 11kV)?",
    "a": "VCBs are completely maintenance-free internally, environmentally friendly, and don't require gas pressure monitoring.",
    "opts": [
      "SF6 gas is highly explosive.",
      "VCBs are completely maintenance-free internally, environmentally friendly, and don't require gas pressure monitoring.",
      "VCBs are much heavier and add ballast.",
      "SF6 gas breakers cannot interrupt high currents."
    ],
    "exp": "SF6 is a potent greenhouse gas, requires pressure gauges, and forms toxic byproducts when arced. Vacuum bottles are sealed for life, safe, and perfectly suited for the 6.6kV range.",
    "cat": "VCB",
    "id": "T02_HV_224",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the 'Closing Spring' in a VCB operating mechanism?",
    "a": "To store immense mechanical energy required to slam the contacts shut at extremely high speed against the vacuum force.",
    "opts": [
      "To keep the panel door closed.",
      "To store immense mechanical energy required to slam the contacts shut at extremely high speed against the vacuum force.",
      "To absorb vibration from the ship.",
      "To slowly close the contacts to prevent sparks."
    ],
    "exp": "Closing a breaker onto a live load or short circuit requires massive, instantaneous force to overcome magnetic repulsion and prevent pre-striking arcs. The spring is charged by a small motor, ready to unleash its energy instantly.",
    "cat": "VCB",
    "id": "T02_HV_225",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Pre-Strike' during the closing of a VCB?",
    "a": "When the high voltage jumps the gap and starts an arc just fractions of a second BEFORE the contacts physically touch.",
    "opts": [
      "A strike by the crew before the ship sails.",
      "When the high voltage jumps the gap and starts an arc just fractions of a second BEFORE the contacts physically touch.",
      "When the breaker trips before being commanded.",
      "When the contacts hit too hard and bounce."
    ],
    "exp": "As the moving contact approaches the fixed contact, the gap shrinks. Eventually, the voltage overcomes the remaining vacuum gap. The mechanism must be incredibly fast to close the remaining gap instantly to minimize the duration of this pre-strike arc.",
    "cat": "VCB",
    "id": "T02_HV_226",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you visually inspect the contacts of a Vacuum Interrupter?",
    "a": "No, they are permanently sealed inside an opaque ceramic or metallic cylinder.",
    "opts": [
      "Yes, they have a glass window.",
      "No, they are permanently sealed inside an opaque ceramic or metallic cylinder.",
      "Yes, by unscrewing the top cap.",
      "Yes, using an X-ray machine onboard."
    ],
    "exp": "Unlike old air breakers where you take off the arc chutes and look at the copper, VCBs are black boxes. Assessment relies entirely on external wear indicators and high-voltage Hipot testing.",
    "cat": "VCB",
    "id": "T02_HV_227",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What prevents a VCB from being racked in or out while it is CLOSED?",
    "a": "Mechanical and electrical interlocks physically block the racking handle insertion or movement if the breaker mechanism is in the 'Closed' state.",
    "opts": [
      "The extreme weight of the breaker.",
      "Mechanical and electrical interlocks physically block the racking handle insertion or movement if the breaker mechanism is in the 'Closed' state.",
      "A padlock held by the Captain.",
      "A warning sticker on the panel."
    ],
    "exp": "Racking a closed breaker out would draw a lethal arc across the rear busbar plug-in contacts, which are not designed to interrupt current. The interlock ensures you can only rack the breaker when it is OPEN (dead).",
    "cat": "VCB",
    "id": "T02_HV_228",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the spring charging motor on a VCB fails, can the breaker still be closed?",
    "a": "Yes, it can be manually charged using a specialized pumping handle provided by the manufacturer.",
    "opts": [
      "No, the breaker is permanently locked.",
      "Yes, it can be manually charged using a specialized pumping handle provided by the manufacturer.",
      "Yes, by pushing the contacts together with a stick.",
      "No, it must be replaced."
    ],
    "exp": "For emergency black-start capability, all VCB mechanisms have a manual socket. The ETO pumps the handle 10-20 times until the spring indicates 'CHARGED', and then pushes the mechanical 'CLOSE' button.",
    "cat": "VCB",
    "id": "T02_HV_229",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if a VCB loses vacuum completely while carrying full load current?",
    "a": "The next time it attempts to open, it will fail to extinguish the arc, leading to a catastrophic meltdown and switchboard fire.",
    "opts": [
      "It will automatically close tighter.",
      "The next time it attempts to open, it will fail to extinguish the arc, leading to a catastrophic meltdown and switchboard fire.",
      "It will beep loudly.",
      "The current will safely stop flowing."
    ],
    "exp": "Without vacuum, normal air fills the small 12mm gap. Air cannot quench a 6.6kV arc across 12mm. The arc will burn continuously until upstream protection (like a generator trip) activates, likely destroying the VCB in the process.",
    "cat": "VCB",
    "id": "T02_HV_230",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the primary purpose of a Neutral Earthing Resistor (NER) in a marine High Voltage system?",
    "a": "To limit the maximum fault current that can flow during a phase-to-earth short circuit, preventing catastrophic damage to equipment.",
    "opts": [
      "To increase the voltage of the system.",
      "To limit the maximum fault current that can flow during a phase-to-earth short circuit, preventing catastrophic damage to equipment.",
      "To measure the power factor of the generators.",
      "To act as a heater for the engine room."
    ],
    "exp": "If the neutral was solidly connected to earth, an earth fault would cause tens of thousands of amps to flow, blowing up the motor or switchboard. The NER restricts this current to a safe level (usually a few hundred amps).",
    "cat": "NER",
    "id": "T02_HV_231",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Where is the NER physically connected in the electrical system?",
    "a": "Between the star point (neutral) of the main HV generator windings and the ship's hull (earth).",
    "opts": [
      "Between the three phases.",
      "Between the star point (neutral) of the main HV generator windings and the ship's hull (earth).",
      "At the bow thruster motor terminals.",
      "Between the AVR and the exciter."
    ],
    "exp": "Marine HV alternators are always Star (Wye) wound. The center point where the three phases meet is the neutral. The NER sits exactly between this point and the physical steel of the ship.",
    "cat": "NER",
    "id": "T02_HV_232",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Unlike a 440V system which is typically 'Insulated Earth', a 6.6kV system is 'Impedance Earthed' via the NER. Why?",
    "a": "At 6.6kV, massive capacitive charging currents exist. An insulated system would suffer lethal, unquenchable arcing faults (arcing grounds) destroying the insulation.",
    "opts": [
      "To save money on cables.",
      "At 6.6kV, massive capacitive charging currents exist. An insulated system would suffer lethal, unquenchable arcing faults (arcing grounds) destroying the insulation.",
      "Because 440V systems are safer.",
      "To allow single-phase motors to run."
    ],
    "exp": "In an insulated 6.6kV system, if one phase hits earth, the other two phases jump to 6.6kV relative to earth. The massive cable capacitance causes violent, repetitive sparking at the fault site. The NER bleeds off this capacitance, stabilizing the voltage.",
    "cat": "NER",
    "id": "T02_HV_233",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a phase-to-earth fault occurs on an NER-earthed 6.6kV system, does the breaker trip immediately?",
    "a": "Yes, unlike 440V systems, HV systems are designed to trip instantly on a single earth fault.",
    "opts": [
      "No, it just triggers an alarm and keeps running.",
      "Yes, unlike 440V systems, HV systems are designed to trip instantly on a single earth fault.",
      "Only if two phases hit earth.",
      "No, it waits for the engineer to reset it."
    ],
    "exp": "In 440V insulated systems, the ship keeps running on a single earth fault. In 6.6kV, the fault energy is too high and dangerous. The NER limits the damage, but the protection relays trip the faulty circuit immediately to isolate it.",
    "cat": "NER",
    "id": "T02_HV_234",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a typical current rating for a marine NER?",
    "a": "Often sized to limit earth fault current to between 200 Amps and 400 Amps.",
    "opts": [
      "1 Amp.",
      "Often sized to limit earth fault current to between 200 Amps and 400 Amps.",
      "10,000 Amps.",
      "Zero Amps."
    ],
    "exp": "The resistor must allow enough current to flow so that the protective relays can easily detect it and trip (e.g., 200A is easily read by a CT), but low enough to prevent melting the stator core of a faulted motor.",
    "cat": "NER",
    "id": "T02_HV_235",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the typical time rating of a Neutral Earthing Resistor?",
    "a": "Usually 10 seconds. It is designed to carry the fault current only long enough for the breakers to trip.",
    "opts": [
      "Continuous (24 hours).",
      "Usually 10 seconds. It is designed to carry the fault current only long enough for the breakers to trip.",
      "1 millisecond.",
      "1 hour."
    ],
    "exp": "NERs are made of stainless steel grids. If 400 Amps flows through it, it generates massive heat. It will literally melt if the fault is not cleared by the breaker within 10 seconds.",
    "cat": "NER",
    "id": "T02_HV_236",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What protection device is usually fitted directly to the NER enclosure?",
    "a": "An Earth Fault Current Transformer (CT) and a high-temperature alarm/trip.",
    "opts": [
      "A reverse power relay.",
      "An Earth Fault Current Transformer (CT) and a high-temperature alarm/trip.",
      "A vacuum bottle.",
      "A frequency meter."
    ],
    "exp": "The CT monitors how much current is flowing to earth. If the main breaker fails to clear the fault, the NER will overheat. A temperature sensor will trip the main generator to save the NER from melting.",
    "cat": "NER",
    "id": "T02_HV_237",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a ship has three 6.6kV generators running in parallel, how many NERs should be connected to earth?",
    "a": "Only ONE. A vacuum contactor system ensures only the designated 'Master' generator has its NER connected to earth.",
    "opts": [
      "All three.",
      "Only ONE. A vacuum contactor system ensures only the designated 'Master' generator has its NER connected to earth.",
      "None of them.",
      "Two of them."
    ],
    "exp": "If three NERs are connected in parallel, the total resistance drops to one-third, meaning the fault current triples (e.g., 1200A instead of 400A), defeating the purpose of the NER. An interlock system connects only one NER at a time.",
    "cat": "NER",
    "id": "T02_HV_238",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the Neutral Earthing Contactor (NEC)?",
    "a": "It is a specialized switch that physically connects or disconnects the generator's neutral point to the NER.",
    "opts": [
      "It starts the main engine.",
      "It is a specialized switch that physically connects or disconnects the generator's neutral point to the NER.",
      "It connects the ship to shore power.",
      "It bypasses the circuit breaker."
    ],
    "exp": "To enforce the 'Only One NER' rule, the Power Management System (PMS) opens and closes these contactors automatically. When Generator 1 starts, its NEC closes. When Gen 2 parallels, its NEC stays open.",
    "cat": "NER",
    "id": "T02_HV_239",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if an earth fault occurs, but the active generator's Neutral Earthing Contactor (NEC) was accidentally left open?",
    "a": "The system acts as an 'Insulated' system. Zero fault current flows, the breaker does not trip, and massive destructive overvoltages (arcing grounds) can destroy equipment.",
    "opts": [
      "The system works perfectly.",
      "The system acts as an 'Insulated' system. Zero fault current flows, the breaker does not trip, and massive destructive overvoltages (arcing grounds) can destroy equipment.",
      "The generator immediately shuts down.",
      "The NER catches fire."
    ],
    "exp": "Without the earth return path through the NER, the fault current cannot complete the circuit. The protection relays see nothing, but the entire 6.6kV system experiences a massive voltage shift, blowing insulators ship-wide.",
    "cat": "NER",
    "id": "T02_HV_240",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How is the resistance value of the NER calculated?",
    "a": "R = (Phase Voltage) / (Desired Max Fault Current). For 6.6kV and 400A: R = (6600/\u221a3) / 400 = Approx 9.5 Ohms.",
    "opts": [
      "R = Voltage \u00d7 Current.",
      "R = (Phase Voltage) / (Desired Max Fault Current). For 6.6kV and 400A: R = (6600/\u221a3) / 400 = Approx 9.5 Ohms.",
      "R is always exactly 50 Ohms.",
      "R = Frequency \u00d7 Voltage."
    ],
    "exp": "Using Ohm's Law (V=IR), you take the phase-to-neutral voltage (6600 divided by 1.732 = 3810V) and divide it by the maximum allowable current to find the physical resistance required.",
    "cat": "NER",
    "id": "T02_HV_241",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What material is typically used for the resistor elements inside the NER?",
    "a": "Stainless steel or cast iron grids due to their high thermal capacity and stable resistance at high temperatures.",
    "opts": [
      "Copper wire.",
      "Stainless steel or cast iron grids due to their high thermal capacity and stable resistance at high temperatures.",
      "Carbon fiber.",
      "Aluminum plates."
    ],
    "exp": "During a fault, the resistor must absorb a tremendous amount of energy (e.g., 1.5 Megawatts) for 10 seconds without melting. Stainless steel banks are robust and handle thermal shock well.",
    "cat": "NER",
    "id": "T02_HV_242",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is it critical to inspect the NER enclosure during dry dock?",
    "a": "To check for broken resistor grids, loose connections, or corrosion that could alter the resistance or break the earth path entirely.",
    "opts": [
      "To refill the cooling oil.",
      "To check for broken resistor grids, loose connections, or corrosion that could alter the resistance or break the earth path entirely.",
      "To polish the stainless steel for inspections.",
      "To change the batteries."
    ],
    "exp": "The NER sits idle for years. If a grid element rusts through and snaps, the system unknowingly becomes an 'insulated earth' system. When a fault finally happens, the lack of earth path causes catastrophic overvoltages.",
    "cat": "NER",
    "id": "T02_HV_243",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the difference between Low Resistance Earthing (LRE) and High Resistance Earthing (HRE)?",
    "a": "LRE limits current to hundreds of amps (trips instantly). HRE limits current to less than 10 amps (usually just alarms, no trip).",
    "opts": [
      "LRE uses copper; HRE uses steel.",
      "LRE limits current to hundreds of amps (trips instantly). HRE limits current to less than 10 amps (usually just alarms, no trip).",
      "LRE is for 6.6kV; HRE is for 440V.",
      "LRE is illegal on ships."
    ],
    "exp": "Marine 6.6kV systems almost exclusively use Low Resistance Earthing (LRE) to ensure positive, instant tripping of massive faults. HRE is sometimes used on smaller industrial systems where continuity of process is vital.",
    "cat": "NER",
    "id": "T02_HV_244",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you bypass a damaged NER and connect the neutral directly to the hull to keep the ship running?",
    "a": "Absolutely not. This creates a solidly earthed system; the next earth fault will draw tens of thousands of amps, causing massive arc flash explosions.",
    "opts": [
      "Yes, it is a standard emergency procedure.",
      "Absolutely not. This creates a solidly earthed system; the next earth fault will draw tens of thousands of amps, causing massive arc flash explosions.",
      "Yes, but only if you reduce engine speed.",
      "Yes, as long as you bypass the AVR too."
    ],
    "exp": "Solid earthing on a marine 6.6kV system is highly dangerous. The fault current would only be limited by the generator's internal impedance, leading to catastrophic destruction of the faulted equipment.",
    "cat": "NER",
    "id": "T02_HV_245",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What provides the primary earth fault protection sensing in an NER system?",
    "a": "A Core Balance Current Transformer (CBCT) or Zero Sequence CT wrapped around all three phase cables.",
    "opts": [
      "A simple fuse.",
      "A Core Balance Current Transformer (CBCT) or Zero Sequence CT wrapped around all three phase cables.",
      "A reverse power relay.",
      "A voltmeter connected to the hull."
    ],
    "exp": "Under normal conditions, the sum of current in all three phases is zero. If current leaks to earth, the sum is no longer zero, inducing a current in the CBCT which immediately trips the relay.",
    "cat": "NER",
    "id": "T02_HV_246",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If an earth fault occurs on Phase U, what happens to the voltage of Phase V and Phase W relative to earth in an NER system?",
    "a": "Their voltage relative to earth rises significantly, approaching the full line-to-line voltage (6.6kV).",
    "opts": [
      "They drop to zero volts.",
      "Their voltage relative to earth rises significantly, approaching the full line-to-line voltage (6.6kV).",
      "They remain completely unchanged.",
      "They reverse polarity."
    ],
    "exp": "Because the neutral point shifts during an earth fault (due to the voltage drop across the NER), the healthy phases experience higher voltage stress. The insulation of the entire system must be rated to handle this temporary overvoltage.",
    "cat": "NER",
    "id": "T02_HV_247",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is the NER physically housed in a highly ventilated, cage-like enclosure?",
    "a": "To allow rapid dissipation of massive heat during an earth fault.",
    "opts": [
      "To let the crew see the resistors.",
      "To allow rapid dissipation of massive heat during an earth fault.",
      "To keep the resistor warm.",
      "To save weight on steel casing."
    ],
    "exp": "Dissipating 1.5 MW of heat, even for 10 seconds, generates an immense thermal plume. A sealed box would act like an oven, melting the insulators inside. The cage prevents personnel contact while allowing extreme airflow.",
    "cat": "NER",
    "id": "T02_HV_248",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the role of the 'Neutral Disconnect Link'?",
    "a": "A manual copper link used to physically isolate the generator neutral from the NER for maintenance and Megger testing.",
    "opts": [
      "A fuse that blows during a fault.",
      "A manual copper link used to physically isolate the generator neutral from the NER for maintenance and Megger testing.",
      "A switch for the shore power.",
      "A link that parallels two generators."
    ],
    "exp": "If you try to Megger the stator windings while the neutral is still connected to the earthed NER, your Megger will read a dead short circuit to earth. You must remove this physical copper link to isolate the windings before testing.",
    "cat": "NER",
    "id": "T02_HV_249",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the ship has a 6.6kV to 440V step-down transformer, how is the 440V secondary side earthed?",
    "a": "It is usually left insulated (ungrounded), maintaining the standard marine 440V IT system architecture.",
    "opts": [
      "It is earthed through a second NER.",
      "It is usually left insulated (ungrounded), maintaining the standard marine 440V IT system architecture.",
      "It is solidly connected to the hull.",
      "It shares the main 6.6kV NER."
    ],
    "exp": "The HV side (6.6kV) is impedance earthed via the NER for safety and stability. The transformer provides galvanic isolation. The LV side (440V) remains insulated to ensure a single earth fault doesn't black out essential low-voltage pumps.",
    "cat": "NER",
    "id": "T02_HV_250",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What indicates to the Power Management System (PMS) which generator's Neutral Earthing Contactor (NEC) should be closed?",
    "a": "Usually, the PMS designates the first generator to come online as the 'Master', closing its NEC. Subsequent generators run with NECs open.",
    "opts": [
      "The generator with the highest fuel level.",
      "Usually, the PMS designates the first generator to come online as the 'Master', closing its NEC. Subsequent generators run with NECs open.",
      "The engineer must manually flip a coin.",
      "The generator closest to the bow."
    ],
    "exp": "The logic is simple: First one on the bus provides the earth path. If the master generator is stopped, the PMS must instantly close the NEC of one of the remaining running generators BEFORE opening the master's breaker.",
    "cat": "NER",
    "id": "T02_HV_251",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Zig-Zag Transformer' used for in relation to NERs?",
    "a": "It is an earthing transformer used to create an artificial neutral point on a system (like a Delta wound system) that doesn't have one.",
    "opts": [
      "To change 60Hz to 50Hz.",
      "It is an earthing transformer used to create an artificial neutral point on a system (like a Delta wound system) that doesn't have one.",
      "To step up voltage for radar.",
      "To smooth out DC ripples."
    ],
    "exp": "If a ship's HV system is supplied by a Delta transformer (which has no star neutral point), you cannot connect an NER. A Zig-Zag transformer is installed purely to provide a stable neutral point to connect the NER to earth.",
    "cat": "NER",
    "id": "T02_HV_252",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must the cables connecting the generator neutral to the NER be rated for High Voltage?",
    "a": "During an earth fault, the voltage at the neutral point rises dramatically above earth potential.",
    "opts": [
      "Because they carry massive currents.",
      "During an earth fault, the voltage at the neutral point rises dramatically above earth potential.",
      "Because it looks better for inspections.",
      "To match the color of the main cables."
    ],
    "exp": "Normally, the neutral is at 0V. But during a solid phase-to-earth fault, the full phase voltage (e.g., 3.8kV) is dropped across the NER. The neutral cable sits at 3.8kV relative to the hull, so it must be fully insulated.",
    "cat": "NER",
    "id": "T02_HV_253",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the very first step before commencing any work on a High Voltage system?",
    "a": "Obtain a formal Permit to Work (PTW) explicitly authorizing the specific task on the specified equipment.",
    "opts": [
      "Put on rubber gloves.",
      "Obtain a formal Permit to Work (PTW) explicitly authorizing the specific task on the specified equipment.",
      "Turn off the main generators.",
      "Notify the bridge."
    ],
    "exp": "Administrative control is paramount. A PTW ensures the task is planned, the equipment is identified, the Chief Engineer is aware, and the isolation plan is formalized before anyone touches a panel.",
    "cat": "SAF",
    "id": "T02_HV_254",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does the term 'Dead' mean in the context of HV safety?",
    "a": "At or about zero voltage, and disconnected from any live system.",
    "opts": [
      "Switched off at the panel.",
      "At or about zero voltage, and disconnected from any live system.",
      "The fuses have been removed.",
      "The generator is stopped."
    ],
    "exp": "Simply opening a breaker does not make a circuit 'dead'. It must be physically isolated (racked out) and proven to have zero voltage.",
    "cat": "SAF",
    "id": "T02_HV_255",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does the term 'Earthed' mean in the context of HV safety?",
    "a": "Connected to the general mass of earth (the ship's hull) in such a manner as to ensure immediate discharge of electrical energy without danger.",
    "opts": [
      "Touching the floor.",
      "Connected to the general mass of earth (the ship's hull) in such a manner as to ensure immediate discharge of electrical energy without danger.",
      "Connected to the neutral wire.",
      "The circuit breaker is open."
    ],
    "exp": "Earthing ensures that if the system is accidentally energized (or retains a capacitive charge), the current flows instantly to the hull, tripping the breakers and protecting the worker.",
    "cat": "SAF",
    "id": "T02_HV_256",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "According to standard HV safety rules, what is the 'Isolate' step?",
    "a": "Physically breaking the electrical supply to the equipment, usually by racking out a circuit breaker or removing bolted links.",
    "opts": [
      "Turning the control switch to OFF.",
      "Physically breaking the electrical supply to the equipment, usually by racking out a circuit breaker or removing bolted links.",
      "Pressing the emergency stop.",
      "Disconnecting the battery."
    ],
    "exp": "Isolation must be a physical, visible break in the circuit that cannot be easily or accidentally bridged, unlike a simple switch contact.",
    "cat": "SAF",
    "id": "T02_HV_257",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "After isolating an HV circuit breaker, what is the mandatory next step?",
    "a": "Secure the isolation with a physical padlock (Lock-Out) and attach a high-visibility warning tag (Tag-Out).",
    "opts": [
      "Prove dead immediately.",
      "Secure the isolation with a physical padlock (Lock-Out) and attach a high-visibility warning tag (Tag-Out).",
      "Connect the earth leads.",
      "Start the maintenance work."
    ],
    "exp": "LOTO (Lock-Out, Tag-Out) ensures that no one else can come along and rack the breaker back in while you are working on the downstream equipment.",
    "cat": "SAF",
    "id": "T02_HV_258",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the crucial rule regarding the High Voltage Test Indicator (Proving Unit) used to 'Prove Dead'?",
    "a": "It must be tested on a known live source (or its dedicated battery proving unit) BOTH immediately before AND immediately after testing the isolated circuit.",
    "opts": [
      "It must be calibrated every 10 years.",
      "It must be tested on a known live source (or its dedicated battery proving unit) BOTH immediately before AND immediately after testing the isolated circuit.",
      "It can only be used by the Chief Engineer.",
      "It must be held with two hands."
    ],
    "exp": "If the tester is broken, it will indicate 'Dead' even if the busbars are at 6.6kV. Testing it before ensures it works. Testing it after ensures it didn't break while you were using it.",
    "cat": "SAF",
    "id": "T02_HV_259",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is 'Earthing Down' mandatory on HV cables before touching them, even if they have been proven dead?",
    "a": "To safely discharge any trapped capacitive energy and to protect against accidental re-energization from another source.",
    "opts": [
      "To provide a path for the Megger.",
      "To safely discharge any trapped capacitive energy and to protect against accidental re-energization from another source.",
      "To test the earth fault relay.",
      "To keep the cables warm."
    ],
    "exp": "Long 6.6kV cables act as massive capacitors and hold a lethal charge long after being isolated. Earthing bleeds this off. It also provides a dead-short if someone bypasses your lock-out and closes a breaker.",
    "cat": "SAF",
    "id": "T02_HV_260",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When applying portable earthing leads to a busbar, what is the correct sequence of connection?",
    "a": "Always connect the earth clamp to the ship's hull/earth bar FIRST, then apply the live clamp to the isolated phase conductors.",
    "opts": [
      "Connect to the phase conductors first, then to earth.",
      "Always connect the earth clamp to the ship's hull/earth bar FIRST, then apply the live clamp to the isolated phase conductors.",
      "Connect all phases together, then to earth.",
      "The order does not matter."
    ],
    "exp": "If you connect to the conductor first and it happens to be charged, the loose earth clamp in your hand becomes instantly energized at high voltage.",
    "cat": "SAF",
    "id": "T02_HV_261",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When removing portable earthing leads, what is the correct sequence?",
    "a": "Remove the phase connections FIRST, and disconnect from the ship's earth bar LAST.",
    "opts": [
      "Remove the earth connection first.",
      "Remove the phase connections FIRST, and disconnect from the ship's earth bar LAST.",
      "Pull all of them off at once.",
      "The order does not matter."
    ],
    "exp": "You must maintain the safety ground path until the very last moment. Disconnecting the earth first leaves the leads potentially floating at a dangerous potential if an induced voltage exists.",
    "cat": "SAF",
    "id": "T02_HV_262",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Who is authorized to issue a High Voltage Sanction to Test or Permit to Work?",
    "a": "Only a specially trained and designated Chief Engineer or Senior Electrical Officer (often termed the 'Authorized Person').",
    "opts": [
      "Any engineer on watch.",
      "Only a specially trained and designated Chief Engineer or Senior Electrical Officer (often termed the 'Authorized Person').",
      "The ship's Master.",
      "The shore superintendent."
    ],
    "exp": "HV work requires specific legal competency. Not every ETO or Engineer is automatically authorized to isolate and issue permits for 6.6kV systems without passing an approved HV Management course.",
    "cat": "SAF",
    "id": "T02_HV_263",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is an 'HV Sanction to Test' as opposed to a standard 'Permit to Work'?",
    "a": "A specific permit used when the equipment must be temporarily energized (e.g., for Meggering or phase rotation checks) during the maintenance period.",
    "opts": [
      "A permit for low voltage work.",
      "A specific permit used when the equipment must be temporarily energized (e.g., for Meggering or phase rotation checks) during the maintenance period.",
      "A permit to run the main engine.",
      "A permit to test the fire alarms."
    ],
    "exp": "Under a standard PTW, the system must remain dead and earthed. If you need to remove the earths to apply 5000V from a Megger, the standard PTW is canceled, and a Sanction to Test is issued because the area is now hazardous again.",
    "cat": "SAF",
    "id": "T02_HV_264",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of an 'Arc Flash Suit' (Flash suit)?",
    "a": "To protect the worker from the extreme thermal radiation (heat), molten metal, and blinding light generated during an accidental arc flash.",
    "opts": [
      "To protect against electric shock.",
      "To protect the worker from the extreme thermal radiation (heat), molten metal, and blinding light generated during an accidental arc flash.",
      "To keep the worker clean.",
      "To protect against toxic gases."
    ],
    "exp": "Standard cotton or poly-blend boiler suits will instantly ignite and melt to the skin in an arc flash. Arc flash suits are made of heavy, flame-resistant materials (like Kevlar/Nomex) rated for specific calorie/cm2 thermal energy.",
    "cat": "SAF",
    "id": "T02_HV_265",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why should you never point or reach your bare hand into an open HV switchboard cubicle?",
    "a": "High voltage can arc (jump) through the air; you do not need to physically touch the copper to receive a lethal shock.",
    "opts": [
      "It is considered rude.",
      "High voltage can arc (jump) through the air; you do not need to physically touch the copper to receive a lethal shock.",
      "The panels are usually hot.",
      "You might drop your pen."
    ],
    "exp": "Clearance distances are critical. If your finger breaches the safe clearance distance (e.g., within a few inches of 6.6kV), the air will ionize and the voltage will jump to your hand.",
    "cat": "SAF",
    "id": "T02_HV_266",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the 'Competent Person' in the context of an HV Permit to Work?",
    "a": "The person (e.g., the ETO or Electrician) who receives the permit, performs the actual work, and is responsible for their own safety and their team.",
    "opts": [
      "The person who issues the permit.",
      "The person (e.g., the ETO or Electrician) who receives the permit, performs the actual work, and is responsible for their own safety and their team.",
      "The Captain.",
      "The Class Surveyor."
    ],
    "exp": "The 'Authorized Person' plans the isolation and issues the permit. The 'Competent Person' accepts the permit, understands the isolation, and executes the physical work safely.",
    "cat": "SAF",
    "id": "T02_HV_267",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What should be done with the key to the padlock used to lock out an HV breaker?",
    "a": "It must be kept in the personal possession of the 'Competent Person' doing the work, or placed in a secure lock-box.",
    "opts": [
      "Left in the padlock for convenience.",
      "It must be kept in the personal possession of the 'Competent Person' doing the work, or placed in a secure lock-box.",
      "Given to the Captain.",
      "Hidden behind the panel."
    ],
    "exp": "Lockout implies exclusive control. If someone else has the key, they could remove the lock and energize the system while you are working. The person at risk must hold the key.",
    "cat": "SAF",
    "id": "T02_HV_268",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When is it permissible to work on live High Voltage equipment on a ship?",
    "a": "Never. Working on live High Voltage systems is strictly prohibited under marine safety regulations.",
    "opts": [
      "When the Chief Engineer authorizes it.",
      "Never. Working on live High Voltage systems is strictly prohibited under marine safety regulations.",
      "When wearing two pairs of gloves.",
      "Only during an emergency at sea."
    ],
    "exp": "There is no justification for live HV work on a vessel. The arc flash and shock risks are too extreme. The equipment must always be dead, isolated, and earthed.",
    "cat": "SAF",
    "id": "T02_HV_269",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Circuit Main Earth' (CME)?",
    "a": "An earthing switch integral to the switchgear that physically bolts the circuit to earth when closed.",
    "opts": [
      "A portable wire.",
      "An earthing switch integral to the switchgear that physically bolts the circuit to earth when closed.",
      "The main earth strap for the generator.",
      "The earth connection for the shore power."
    ],
    "exp": "Modern HV switchboards have mechanical earthing switches built-in. When the breaker is racked out, a separate handle can close the CME, solidly earthing the outgoing cable to the hull without needing portable wires.",
    "cat": "SAF",
    "id": "T02_HV_270",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Before closing a Circuit Main Earth (CME) switch on an outgoing cable, what must be verified?",
    "a": "You must positively verify the cable is DEAD using the capacitive voltage indicators or a proving unit.",
    "opts": [
      "That the generator is running.",
      "You must positively verify the cable is DEAD using the capacitive voltage indicators or a proving unit.",
      "That the fire alarm is off.",
      "That the motor is uncoupled."
    ],
    "exp": "Closing an earthing switch onto a live 6.6kV cable will cause an immediate, massive three-phase short circuit to earth, potentially destroying the switchgear. You must prove dead before earthing.",
    "cat": "SAF",
    "id": "T02_HV_271",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of an 'Additional Earth' or 'Working Earth'?",
    "a": "Portable earthing leads applied directly adjacent to the work site to provide immediate protection if the CME is compromised.",
    "opts": [
      "To ground the test equipment.",
      "Portable earthing leads applied directly adjacent to the work site to provide immediate protection if the CME is compromised.",
      "To replace a broken hull connection.",
      "To test the Megger."
    ],
    "exp": "If the main switchboard is 100 meters away, a CME earths the cable at the board. But a 'Working Earth' applied right at the motor terminal box ensures the ETO is protected exactly where they are working.",
    "cat": "SAF",
    "id": "T02_HV_272",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If you find a person unconscious next to an open HV panel, what is your FIRST action?",
    "a": "Do not touch them! Hit the Emergency Stop or trip the main breaker to isolate the power before approaching.",
    "opts": [
      "Grab them and pull them away immediately.",
      "Do not touch them! Hit the Emergency Stop or trip the main breaker to isolate the power before approaching.",
      "Perform CPR immediately.",
      "Throw water on them to cool the burns."
    ],
    "exp": "If they are still in contact with 6.6kV, touching them will instantly electrocute you as well. You must break the circuit remotely before attempting any rescue.",
    "cat": "SAF",
    "id": "T02_HV_273",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What document clearly defines the exact steps taken to isolate, lock, and earth a specific piece of HV equipment?",
    "a": "The Isolation Certificate or Switching Plan, which is usually attached to the Permit to Work.",
    "opts": [
      "The ship's general arrangement plan.",
      "The Isolation Certificate or Switching Plan, which is usually attached to the Permit to Work.",
      "The manufacturer's manual.",
      "The daily logbook."
    ],
    "exp": "A complex system might require opening 3 different breakers and closing 2 earth switches to isolate one ring-main component. This must be written out, step-by-step, in an approved Switching Plan to prevent errors.",
    "cat": "SAF",
    "id": "T02_HV_274",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "In a 440V IT (Insulated) system, how is the insulation resistance of the entire active network continuously monitored?",
    "a": "By an Insulation Monitoring Device (IMD) that continuously measures the resistance between the active phases and the ship's hull.",
    "opts": [
      "By manually Meggering the system every day.",
      "By an Insulation Monitoring Device (IMD) that continuously measures the resistance between the active phases and the ship's hull.",
      "By measuring the voltage between phases.",
      "By checking the frequency of the generator."
    ],
    "exp": "Because 440V systems are ungrounded, a single earth fault doesn't cause a short circuit. The IMD injects a small DC or low-frequency AC signal into the network to constantly monitor the resistance to earth.",
    "cat": "IRM",
    "id": "T02_HV_275",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens in a 440V system if the Insulation Monitoring Device (IMD) detects an earth fault (e.g., resistance drops below 10 kOhms)?",
    "a": "It triggers an audible and visual alarm in the Engine Control Room, but it DOES NOT trip the power.",
    "opts": [
      "It immediately blacks out the ship.",
      "It triggers an audible and visual alarm in the Engine Control Room, but it DOES NOT trip the power.",
      "It automatically starts the emergency generator.",
      "It shuts down the main engine."
    ],
    "exp": "The primary advantage of the IT (insulated) system is continuity of service. Essential pumps (like steering gear or cooling water) won't stop running just because of one earth fault. It alerts the ETO to find the fault.",
    "cat": "IRM",
    "id": "T02_HV_276",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is it dangerous to ignore a single earth fault on a 440V IT system?",
    "a": "If a SECOND earth fault occurs on a different phase, it creates a massive phase-to-phase short circuit through the hull, causing a blackout or fire.",
    "opts": [
      "It consumes too much fuel.",
      "If a SECOND earth fault occurs on a different phase, it creates a massive phase-to-phase short circuit through the hull, causing a blackout or fire.",
      "It reverses the rotation of all motors.",
      "It stops the IMD from working."
    ],
    "exp": "The first fault brings that phase to 0V relative to earth, but the equipment keeps running. If another phase touches earth anywhere else on the ship, you now have a dead short between two phases via the ship's steel.",
    "cat": "IRM",
    "id": "T02_HV_277",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does a basic DC-injection Insulation Monitoring Device (IMD) work?",
    "a": "It superimposes a small DC measuring voltage between the AC phases and earth. If insulation fails, a DC leakage current flows back to the IMD.",
    "opts": [
      "It measures the temperature of the cables.",
      "It superimposes a small DC measuring voltage between the AC phases and earth. If insulation fails, a DC leakage current flows back to the IMD.",
      "It measures the magnetic field of the hull.",
      "It physically weighs the insulation."
    ],
    "exp": "By using DC, the capacitive charging currents of the AC cables are ignored. The IMD only measures the true resistive leakage path (the actual degraded insulation) to earth.",
    "cat": "IRM",
    "id": "T02_HV_278",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why do modern ships with many Variable Frequency Drives (VFDs) struggle with older DC-injection IMDs?",
    "a": "VFDs have massive internal DC links and high-frequency noise that interfere with and blind the simple DC-measuring circuit of older IMDs.",
    "opts": [
      "VFDs use too much power.",
      "VFDs have massive internal DC links and high-frequency noise that interfere with and blind the simple DC-measuring circuit of older IMDs.",
      "VFDs are perfectly insulated.",
      "VFDs generate extreme heat."
    ],
    "exp": "If an earth fault occurs on the DC side of a VFD, an older DC IMD might not detect it properly, or the VFD's rectifiers might block the IMD's test signal. Modern IMDs use complex multi-frequency pulse techniques.",
    "cat": "IRM",
    "id": "T02_HV_279",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the typical alarm setpoint for a 440V system Insulation Monitoring Device?",
    "a": "Usually a pre-alarm at 50 kOhms and a main alarm at 10 to 20 kOhms.",
    "opts": [
      "1 Ohm.",
      "Usually a pre-alarm at 50 kOhms and a main alarm at 10 to 20 kOhms.",
      "1000 Megohms.",
      "Zero ohms."
    ],
    "exp": "While a motor should ideally be >1 Megohm, a large ship network has hundreds of motors and miles of cable connected in parallel. The overall system resistance is naturally lower. 20kOhms indicates a definitive fault somewhere.",
    "cat": "IRM",
    "id": "T02_HV_280",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When tracing an earth fault that has triggered the main IMD alarm, what is the standard procedure?",
    "a": "Sequentially open (switch off) non-essential circuit breakers on the main switchboard one by one until the IMD reading returns to normal.",
    "opts": [
      "Switch off the main generators.",
      "Sequentially open (switch off) non-essential circuit breakers on the main switchboard one by one until the IMD reading returns to normal.",
      "Increase the voltage to burn the fault.",
      "Ignore it until dry dock."
    ],
    "exp": "By isolating circuits one at a time, you watch the IMD meter. When you switch off the Galley panel and the IMD suddenly jumps back to 'Infinity', you know the earth fault is on the Galley circuit.",
    "cat": "IRM",
    "id": "T02_HV_281",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "After isolating the earth fault to the Galley distribution board, how do you find the specific faulty equipment?",
    "a": "Go to the Galley board and repeat the process: switch off individual galley breakers until the local IMD or main IMD clears.",
    "opts": [
      "Megger the entire switchboard at 5000V.",
      "Go to the Galley board and repeat the process: switch off individual galley breakers until the local IMD or main IMD clears.",
      "Replace all the cables in the galley.",
      "Wash the equipment with water."
    ],
    "exp": "Fault finding is a process of elimination. Narrow it from the Main Board -> Sub Board -> Individual load (e.g., the Deep Fryer element has shorted to earth).",
    "cat": "IRM",
    "id": "T02_HV_282",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can you have two Insulation Monitoring Devices (IMDs) actively monitoring the same galvanically connected network?",
    "a": "No, they will interfere with each other, leading to false readings or alarms.",
    "opts": [
      "Yes, for redundancy.",
      "No, they will interfere with each other, leading to false readings or alarms.",
      "Yes, if they are different brands.",
      "Yes, but they must be wired in series."
    ],
    "exp": "If Gen 1 has an IMD and Gen 2 has an IMD, when they are paralleled, both IMDs are injecting signals into the same cables. They will read each other's signals as a fault. The PMS automatically disconnects one IMD when paralleling.",
    "cat": "IRM",
    "id": "T02_HV_283",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is an 'Earth Fault Location System' (EDS)?",
    "a": "An advanced system that injects a specific pulse and uses fixed current transformers on every outgoing breaker to instantly pinpoint which circuit has the fault.",
    "opts": [
      "A GPS tracker for cables.",
      "An advanced system that injects a specific pulse and uses fixed current transformers on every outgoing breaker to instantly pinpoint which circuit has the fault.",
      "A system that automatically fixes insulation.",
      "A system used only in dry dock."
    ],
    "exp": "Instead of the ETO manually switching off breakers (which disrupts operations), an EDS uses tiny CTs on every wire. It traces its own test pulse directly to the faulty breaker and displays 'Fault on Feeder 4' on a screen.",
    "cat": "IRM",
    "id": "T02_HV_284",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a ship's 440V IMD shows 0 Ohms (dead short to earth), but switching off EVERY breaker on the main switchboard doesn't clear it, where is the fault?",
    "a": "The fault must be on the main busbars themselves, or inside one of the running generator alternators.",
    "opts": [
      "In the emergency generator.",
      "The fault must be on the main busbars themselves, or inside one of the running generator alternators.",
      "In the shore connection box.",
      "In the 24V DC battery system."
    ],
    "exp": "If all outgoing loads are disconnected, the only things left connected to the IMD are the busbars and the generator supplying them. The generator must be stopped and Meggered immediately.",
    "cat": "IRM",
    "id": "T02_HV_285",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why are galleys and laundries common sources of 440V earth faults?",
    "a": "Because they involve heating elements, high humidity, water spills, and frequent physical abuse of equipment.",
    "opts": [
      "Because they use DC power.",
      "Because they involve heating elements, high humidity, water spills, and frequent physical abuse of equipment.",
      "Because the cooks are not electricians.",
      "Because they operate at 6.6kV."
    ],
    "exp": "Heating elements (like in ovens or washing machines) degrade over time, and water ingress into terminal boxes is extremely common in these wet areas, providing a low-resistance path to earth.",
    "cat": "IRM",
    "id": "T02_HV_286",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What happens if an earth fault occurs on a 220V lighting circuit?",
    "a": "If the 220V system is supplied by an isolating transformer, it has its own independent IMD which will alarm. It will NOT trigger the main 440V IMD.",
    "opts": [
      "The main engine will trip.",
      "If the 220V system is supplied by an isolating transformer, it has its own independent IMD which will alarm. It will NOT trigger the main 440V IMD.",
      "The 440V system will short out.",
      "The lights will explode."
    ],
    "exp": "Transformers provide galvanic isolation. The 220V network is electrically separate from the 440V network. A fault on the 220V side cannot 'pass through' the transformer to the 440V IMD.",
    "cat": "IRM",
    "id": "T02_HV_287",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does an Earth Fault affect the reading of a standard voltmeter connected between Phase and Earth on a 440V IT system?",
    "a": "The faulted phase will read 0V to earth, while the healthy phases will rise to the full line-to-line voltage (440V) to earth.",
    "opts": [
      "All phases will read 0V.",
      "The faulted phase will read 0V to earth, while the healthy phases will rise to the full line-to-line voltage (440V) to earth.",
      "All phases will read 440V.",
      "The voltage drops to 220V."
    ],
    "exp": "Normally, 440V phases float at about 254V to earth (440 / \u221a3). If Phase A hits earth, Phase A becomes 0V. Because Phase B is 440V away from Phase A, Phase B is now 440V away from earth.",
    "cat": "IRM",
    "id": "T02_HV_288",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Capacitive Leakage' in a ship's electrical network?",
    "a": "The natural capacitance between miles of parallel cables and the steel hull, which allows small amounts of AC current to 'leak' to earth even with perfect insulation.",
    "opts": [
      "Water leaking into a capacitor.",
      "The natural capacitance between miles of parallel cables and the steel hull, which allows small amounts of AC current to 'leak' to earth even with perfect insulation.",
      "A battery losing its charge.",
      "Oil leaking from a transformer."
    ],
    "exp": "AC current can pass through a capacitor. The cable insulation acts as the dielectric between the copper and the hull. This natural AC leakage is why simple AC monitoring systems fail on large ships; they read this capacitance as a fault.",
    "cat": "IRM",
    "id": "T02_HV_289",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must the IMD be temporarily disconnected when Megger testing the main switchboard?",
    "a": "The 500V or 1000V DC from the Megger will flow directly into the sensitive IMD electronics and destroy them.",
    "opts": [
      "To save the Megger's battery.",
      "The 500V or 1000V DC from the Megger will flow directly into the sensitive IMD electronics and destroy them.",
      "Because the IMD will trigger the fire alarm.",
      "To prevent the ship from moving."
    ],
    "exp": "The IMD is permanently wired between the busbars and earth. A Megger injects high voltage between the busbars and earth. If the IMD is left connected, it takes the full brunt of the Megger test.",
    "cat": "IRM",
    "id": "T02_HV_290",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Phantom' or 'Transient' earth fault?",
    "a": "An earth fault alarm that appears briefly and clears itself, often caused by starting a specific motor, moisture drying out, or VFD harmonics.",
    "opts": [
      "A ghost on the ship.",
      "An earth fault alarm that appears briefly and clears itself, often caused by starting a specific motor, moisture drying out, or VFD harmonics.",
      "A fault caused by the moon's gravity.",
      "A fault on the radar system."
    ],
    "exp": "These are the hardest to find. For example, a deck crane motor might have damp windings. It throws an earth fault when started, but the heat of running dries it out in 5 minutes, clearing the fault before the ETO can trace it.",
    "cat": "IRM",
    "id": "T02_HV_291",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How can you test if the IMD panel is actually functioning correctly?",
    "a": "Most IMDs have a built-in 'TEST' button that internally connects a known test resistor to earth, simulating a fault to trigger the alarm.",
    "opts": [
      "By throwing water on the switchboard.",
      "Most IMDs have a built-in 'TEST' button that internally connects a known test resistor to earth, simulating a fault to trigger the alarm.",
      "By shorting a live wire to the hull with a screwdriver.",
      "By turning it off and on again."
    ],
    "exp": "You should regularly test the IMD using its self-test function to ensure the alarm relays and ECR buzzers are fully operational.",
    "cat": "IRM",
    "id": "T02_HV_292",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "In a 24V DC control system, is an earth fault dangerous?",
    "a": "Yes, a double earth fault on a DC control system can bypass control switches, causing machinery to start unexpectedly or fail to stop.",
    "opts": [
      "No, 24V cannot hurt you.",
      "Yes, a double earth fault on a DC control system can bypass control switches, causing machinery to start unexpectedly or fail to stop.",
      "No, DC doesn't use earth.",
      "Only if it is a negative earth fault."
    ],
    "exp": "If the positive wire shorts to earth after the start button, and the negative wire shorts to earth before the relay coil, the current flows through the hull, bypassing the start button entirely. The motor starts on its own.",
    "cat": "IRM",
    "id": "T02_HV_293",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What component is used to connect an IMD to a 6.6kV High Voltage system?",
    "a": "A high-voltage coupling device (coupling resistors or capacitors) to step down the voltage before it reaches the low-voltage IMD.",
    "opts": [
      "A standard 440V fuse.",
      "A high-voltage coupling device (coupling resistors or capacitors) to step down the voltage before it reaches the low-voltage IMD.",
      "Direct copper wires.",
      "A fiber optic cable."
    ],
    "exp": "You cannot connect a standard electronic IMD directly to 6.6kV. A specialized coupling module safely isolates the high voltage while allowing the IMD's test signal to pass through to the HV busbars.",
    "cat": "IRM",
    "id": "T02_HV_294",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a ship uses a solidly earthed 440V neutral system (rare on ships, common ashore), would it use an IMD?",
    "a": "No, solidly earthed systems use Earth Leakage Circuit Breakers (RCDs/GFCI) or overcurrent relays that trip instantly on an earth fault.",
    "opts": [
      "Yes, they use three IMDs.",
      "No, solidly earthed systems use Earth Leakage Circuit Breakers (RCDs/GFCI) or overcurrent relays that trip instantly on an earth fault.",
      "Yes, but only in the engine room.",
      "No, they don't need any protection."
    ],
    "exp": "An IMD is ONLY used on Insulated (IT) or highly impedance-earthed networks where a fault does not draw enough current to blow a fuse. Solidly earthed systems rely on massive fault current to trip breakers instantly.",
    "cat": "IRM",
    "id": "T02_HV_295",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the consequence of leaving a Megger connected to a circuit after the test is complete?",
    "a": "The Megger itself provides a path to earth. If the circuit is energized, it acts as a permanent earth fault.",
    "opts": [
      "It charges the battery of the Megger.",
      "The Megger itself provides a path to earth. If the circuit is energized, it acts as a permanent earth fault.",
      "It improves the insulation of the cable.",
      "Nothing happens."
    ],
    "exp": "If you forget to disconnect the test leads and close the breaker, the live current flows through the Megger's internal circuitry to earth, destroying the Megger and triggering the ship's earth fault alarm.",
    "cat": "IRM",
    "id": "T02_HV_296",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Can a fluorescent light fitting cause an earth fault?",
    "a": "Yes, degrading ballasts or moisture inside the fitting housing are very common causes of earth faults on 220V lighting circuits.",
    "opts": [
      "No, light is not electrical.",
      "Yes, degrading ballasts or moisture inside the fitting housing are very common causes of earth faults on 220V lighting circuits.",
      "No, they don't have earth wires.",
      "Only if the bulb is broken."
    ],
    "exp": "Deck lights exposed to weather often leak. The water bridges the gap between the live ballast and the earthed metal casing, causing a persistent, low-resistance earth fault.",
    "cat": "IRM",
    "id": "T02_HV_297",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is it important to check the IMD reading during heavy weather or rolling?",
    "a": "Bilge water sloshing into low-mounted terminal boxes or motors can cause intermittent earth faults.",
    "opts": [
      "The IMD measures the ship's roll angle.",
      "Bilge water sloshing into low-mounted terminal boxes or motors can cause intermittent earth faults.",
      "The IMD screen might fall off.",
      "Because generators produce more power in heavy seas."
    ],
    "exp": "If the earth fault alarm only goes off when the ship rolls 15 degrees to port, you know exactly where to look: a low-lying bilge pump or sensor on the port side that is getting submerged.",
    "cat": "IRM",
    "id": "T02_HV_298",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the difference between an 'Active' and 'Passive' earth fault location method?",
    "a": "Passive means the ETO manually switches off breakers. Active means an EDS system automatically injects a pulse to locate the fault without shutting anything down.",
    "opts": [
      "Active uses AC; Passive uses DC.",
      "Passive means the ETO manually switches off breakers. Active means an EDS system automatically injects a pulse to locate the fault without shutting anything down.",
      "Active is for HV; Passive is for LV.",
      "Passive is illegal."
    ],
    "exp": "Active EDS systems are highly preferred on modern vessels because you don't have to blackout the galley, air conditioning, or essential pumps just to find a minor fault.",
    "cat": "IRM",
    "id": "T02_HV_299",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the earth fault is traced to a large 440V motor, and Meggering shows 10 kOhms, what is the usual repair?",
    "a": "Disconnect it, open the terminal box to check for water/carbon. If internal, the motor must be removed, washed, baked in an oven, and re-varnished.",
    "opts": [
      "Replace the fuse with a bigger one.",
      "Disconnect it, open the terminal box to check for water/carbon. If internal, the motor must be removed, washed, baked in an oven, and re-varnished.",
      "Paint the outside of the motor.",
      "Run it at half speed."
    ],
    "exp": "You cannot 'fix' wet or carbonized insulation just by wiping the outside. The moisture must be driven out of the deep windings with heat, and sealed with dielectric varnish.",
    "cat": "IRM",
    "id": "T02_HV_300",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How do intrinsically safe (Ex i) circuits handle earth faults?",
    "a": "They often have their own dedicated, highly sensitive IMDs. An earth fault in a hazardous area must be cleared immediately to prevent any risk of sparking.",
    "opts": [
      "They ignore earth faults completely.",
      "They often have their own dedicated, highly sensitive IMDs. An earth fault in a hazardous area must be cleared immediately to prevent any risk of sparking.",
      "They explode on the first fault.",
      "They are solidly earthed."
    ],
    "exp": "In a gas-dangerous zone (like a tanker deck), an earth fault means the energy limitation of the Zener barrier might be bypassed. The fault must be rectified immediately to maintain the explosion-proof rating.",
    "cat": "IRM",
    "id": "T02_HV_301",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the 'System Leakage Capacitance' displayed on advanced IMDs?",
    "a": "The total electrical capacitance of the ship's cabling network. High values indicate a massive network and can slow down the IMD's response time.",
    "opts": [
      "The amount of water leaking into the ship.",
      "The total electrical capacitance of the ship's cabling network. High values indicate a massive network and can slow down the IMD's response time.",
      "The battery capacity of the UPS.",
      "The size of the main generators."
    ],
    "exp": "Advanced IMDs measure both Resistance (the fault) and Capacitance (the network size). If a ship has massive capacitance, the IMD must inject its test pulse much slower to get an accurate reading.",
    "cat": "IRM",
    "id": "T02_HV_302",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If the earth fault meter oscillates wildly between Infinity and Zero, what is the likely cause?",
    "a": "A loose connection rubbing against the hull, or an arcing fault inside a vibrating piece of machinery.",
    "opts": [
      "The IMD is perfectly calibrated.",
      "A loose connection rubbing against the hull, or an arcing fault inside a vibrating piece of machinery.",
      "The ship is changing speed.",
      "A ghost."
    ],
    "exp": "A solid fault (like a flooded motor) gives a steady low reading. An oscillating reading implies a physical wire is bouncing against the earthed steel due to ship vibration, making and breaking the fault.",
    "cat": "IRM",
    "id": "T02_HV_303",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Equipotential Bonding' on a ship?",
    "a": "The practice of electrically connecting all exposed metallic parts (casings, pipes, decks) together to ensure they remain at the same zero-voltage potential.",
    "opts": [
      "Gluing two pieces of metal together.",
      "The practice of electrically connecting all exposed metallic parts (casings, pipes, decks) together to ensure they remain at the same zero-voltage potential.",
      "Connecting the positive and negative wires.",
      "Bonding with the crew."
    ],
    "exp": "If a live wire touches a motor casing, bonding ensures that casing is at exactly the same voltage as the steel deck you are standing on. Since there is no voltage difference between the casing and the deck, no current flows through your body.",
    "cat": "BON",
    "id": "T02_HV_304",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How is equipotential bonding practically achieved for a large electrical motor?",
    "a": "Through a thick, braided copper grounding strap bolted from the motor casing directly to a welded stud on the ship's steel hull.",
    "opts": [
      "By painting it with metallic paint.",
      "Through a thick, braided copper grounding strap bolted from the motor casing directly to a welded stud on the ship's steel hull.",
      "By the rubber mounts it sits on.",
      "By wrapping it in copper tape."
    ],
    "exp": "While the motor is bolted to the deck, rust, paint, and anti-vibration rubber mounts act as insulators. A dedicated copper earth strap guarantees a zero-ohm path to the hull.",
    "cat": "BON",
    "id": "T02_HV_305",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Ductor Tester' or Micro-Ohmmeter used for in maintenance?",
    "a": "To measure the extremely low contact resistance (in micro-ohms) of circuit breaker contacts and heavy busbar bolted joints.",
    "opts": [
      "To measure insulation resistance at 5000V.",
      "To measure the extremely low contact resistance (in micro-ohms) of circuit breaker contacts and heavy busbar bolted joints.",
      "To test the RPM of a motor.",
      "To check the air pressure in a VCB."
    ],
    "exp": "If a busbar joint is slightly loose, its resistance might rise from 10 micro-ohms to 1000 micro-ohms. At 2000 Amps, that tiny resistance generates massive heat, causing a fire. A Ductor tester injects a heavy DC current (e.g., 100A) to measure these tiny resistances accurately.",
    "cat": "BON",
    "id": "T02_HV_306",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is it critical to torque-wrench busbar bolts to the manufacturer's exact specifications?",
    "a": "Too loose causes high electrical resistance and overheating; too tight stretches the bolt, reducing clamping force or snapping it during thermal expansion.",
    "opts": [
      "Because it looks more professional.",
      "Too loose causes high electrical resistance and overheating; too tight stretches the bolt, reducing clamping force or snapping it during thermal expansion.",
      "To make them easier to remove later.",
      "To prevent the ship from vibrating."
    ],
    "exp": "Busbars expand and contract wildly as loads change. A perfectly torqued bolt with a Belleville (spring) washer maintains constant clamping pressure across all temperature ranges, keeping resistance near zero.",
    "cat": "BON",
    "id": "T02_HV_307",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is 'Thermographic Inspection' (Infrared Scanning) used for on switchboards?",
    "a": "To visually identify loose connections, unbalanced loads, or failing contacts by detecting the heat they generate before they fail catastrophically.",
    "opts": [
      "To check if the switchboard is too cold.",
      "To visually identify loose connections, unbalanced loads, or failing contacts by detecting the heat they generate before they fail catastrophically.",
      "To see through the metal panels.",
      "To detect water leaks."
    ],
    "exp": "An infrared camera can look at a live, closed switchboard and instantly show a bright white 'hot spot' where a single bolt is loose on a busbar, allowing the ETO to plan a shutdown before a fire occurs.",
    "cat": "BON",
    "id": "T02_HV_308",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "When is the best time to perform a Thermographic Inspection on a switchboard?",
    "a": "When the switchboard is under heavy, normal operating load (at least 40-50% load).",
    "opts": [
      "When the ship is in blackout.",
      "When the switchboard is under heavy, normal operating load (at least 40-50% load).",
      "Immediately after turning it off.",
      "When the panels are completely open and dead."
    ],
    "exp": "Heat is generated by current (I\u00b2R). If you scan a switchboard while it has no load, a loose connection will not generate any heat and will appear perfectly normal.",
    "cat": "BON",
    "id": "T02_HV_309",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What maintenance must be performed on the contactors of an Air Circuit Breaker (ACB)?",
    "a": "Inspect the silver/tungsten arcing contacts for severe pitting, check the main copper contacts for alignment, and measure contact resistance.",
    "opts": [
      "File them down until they are completely smooth.",
      "Inspect the silver/tungsten arcing contacts for severe pitting, check the main copper contacts for alignment, and measure contact resistance.",
      "Grease the electrical contacts heavily.",
      "Replace the vacuum bottle."
    ],
    "exp": "ACBs use 'arcing contacts' to take the brunt of the spark, protecting the main current-carrying contacts. If the arcing contacts burn away completely, the main contacts will be destroyed on the next trip.",
    "cat": "BON",
    "id": "T02_HV_310",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must you NEVER use a file or sandpaper on the main silver-plated contacts of a breaker?",
    "a": "It removes the microscopic silver plating, exposing the bare copper which quickly oxidizes, drastically increasing contact resistance and causing overheating.",
    "opts": [
      "It makes them too shiny.",
      "It removes the microscopic silver plating, exposing the bare copper which quickly oxidizes, drastically increasing contact resistance and causing overheating.",
      "It makes the breaker close too fast.",
      "It causes a vacuum leak."
    ],
    "exp": "Silver oxide is conductive; copper oxide is an insulator. Contacts are thinly plated with silver. Filing destroys this. They should only be cleaned with a lint-free cloth and approved solvent.",
    "cat": "BON",
    "id": "T02_HV_311",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is Secondary Injection Testing?",
    "a": "Injecting simulated low-voltage/current signals directly into a protection relay to verify it trips at the correct settings, without actually passing massive fault currents through the primary busbars.",
    "opts": [
      "Testing the secondary winding of a transformer.",
      "Injecting simulated low-voltage/current signals directly into a protection relay to verify it trips at the correct settings, without actually passing massive fault currents through the primary busbars.",
      "Injecting fuel into the emergency generator.",
      "Testing the backup batteries."
    ],
    "exp": "To test if an Overcurrent relay works at 2000A, you don't actually short-circuit the ship. You use a test kit to inject a small 5A signal directly into the relay's sensing terminals (mimicking the CT output) and time how fast it trips.",
    "cat": "BON",
    "id": "T02_HV_312",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is Primary Injection Testing?",
    "a": "Passing a massive, actual test current (e.g., 2000A) through the primary busbars to test the entire protection chain: CTs, wiring, relay, and breaker.",
    "opts": [
      "Testing the main engine injection pumps.",
      "Passing a massive, actual test current (e.g., 2000A) through the primary busbars to test the entire protection chain: CTs, wiring, relay, and breaker.",
      "Injecting high voltage to test insulation.",
      "Testing the primary radar."
    ],
    "exp": "Primary injection is comprehensive but difficult, requiring massive specialized test rigs. It proves that the Current Transformer (CT) is actually measuring the busbar current correctly, something secondary injection cannot prove.",
    "cat": "BON",
    "id": "T02_HV_313",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What must be done to a Current Transformer (CT) if the protection relay it is connected to is removed for maintenance while the busbar is live?",
    "a": "The secondary terminals of the CT MUST be solidly short-circuited together.",
    "opts": [
      "The terminals must be left open-circuited.",
      "The secondary terminals of the CT MUST be solidly short-circuited together.",
      "The CT must be earthed.",
      "The CT must be removed as well."
    ],
    "exp": "NEVER open-circuit a live CT. If current is flowing in the primary busbar, an open-circuited secondary will induce lethal thousands of volts across its terminals, destroying the CT and electrocuting the worker.",
    "cat": "BON",
    "id": "T02_HV_314",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "During routine maintenance, how is the mechanical operation of a circuit breaker tested?",
    "a": "By racking it to the 'TEST' position, where the main power contacts are disconnected, but the low-voltage control circuits remain connected.",
    "opts": [
      "By hitting it with a hammer.",
      "By racking it to the 'TEST' position, where the main power contacts are disconnected, but the low-voltage control circuits remain connected.",
      "By short-circuiting the busbars.",
      "By turning off the ship."
    ],
    "exp": "The TEST position allows the ETO to press 'Close' and 'Open' to verify the springs, motors, and anti-pumping relays work perfectly, without actually connecting or disconnecting high voltage power.",
    "cat": "BON",
    "id": "T02_HV_315",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of dielectric oil testing for high voltage transformers?",
    "a": "To test the breakdown voltage (dielectric strength), moisture content, and dissolved gases in the oil to assess the internal health of the transformer.",
    "opts": [
      "To check if the oil can be used for the main engine.",
      "To test the breakdown voltage (dielectric strength), moisture content, and dissolved gases in the oil to assess the internal health of the transformer.",
      "To measure the speed of the transformer.",
      "To check the color of the oil for aesthetic reasons."
    ],
    "exp": "Oil acts as both an insulator and a coolant. Over time, it absorbs moisture (lowering its insulation value) and arcing creates specific dissolved gases. Testing a sample reveals internal faults before the transformer explodes.",
    "cat": "BON",
    "id": "T02_HV_316",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is 'Dissolved Gas Analysis' (DGA) performed on transformer oil?",
    "a": "Because different types of internal electrical faults (arcing, corona, overheating) break the oil down into specific distinct gases (Hydrogen, Acetylene, Ethylene).",
    "opts": [
      "To make sure the oil doesn't smell bad.",
      "Because different types of internal electrical faults (arcing, corona, overheating) break the oil down into specific distinct gases (Hydrogen, Acetylene, Ethylene).",
      "To see if the oil has turned into water.",
      "To check for carbon monoxide for crew safety."
    ],
    "exp": "DGA is like a blood test for the transformer. High Acetylene indicates a massive arcing fault. High Ethylene indicates severe overheating of the copper. It pinpoints the exact problem.",
    "cat": "BON",
    "id": "T02_HV_317",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Hipot' (High Potential) test?",
    "a": "An overvoltage withstand test applying highly elevated voltage (e.g., 15kV on a 6.6kV system) for 1 minute to ensure the insulation can handle transient spikes without breaking down.",
    "opts": [
      "A test for low voltage batteries.",
      "An overvoltage withstand test applying highly elevated voltage (e.g., 15kV on a 6.6kV system) for 1 minute to ensure the insulation can handle transient spikes without breaking down.",
      "A test to see how hot the cable gets.",
      "Testing the physical strength of the copper."
    ],
    "exp": "Unlike a Megger which measures resistance safely, a Hipot test stresses the insulation to the breaking point. It is a 'Pass/Fail' test. If it fails, the equipment is destroyed. It is usually only done during commissioning or after major rewinds.",
    "cat": "BON",
    "id": "T02_HV_318",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why must you carefully clean the porcelain or epoxy insulators (bushings) inside an HV switchboard during maintenance?",
    "a": "Dust, salt, and oil accumulation create a conductive path across the surface, leading to tracking and eventual explosive flashover.",
    "opts": [
      "To keep the switchboard looking brand new.",
      "Dust, salt, and oil accumulation create a conductive path across the surface, leading to tracking and eventual explosive flashover.",
      "To prevent the metal from rusting.",
      "To improve the magnetic field."
    ],
    "exp": "Marine environments are salty and oily. This conductive grime settles on the red epoxy insulators. Regular cleaning with specialized evaporating solvents is critical to maintain the required 'creepage' resistance.",
    "cat": "BON",
    "id": "T02_HV_319",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the function of the silica gel breather on an oil-filled transformer?",
    "a": "To absorb moisture from the air that is drawn into the transformer as the oil cools and contracts, preventing water from contaminating the oil.",
    "opts": [
      "To filter out dust and dirt.",
      "To absorb moisture from the air that is drawn into the transformer as the oil cools and contracts, preventing water from contaminating the oil.",
      "To provide oxygen to the oil.",
      "To cool the oil down."
    ],
    "exp": "Transformers 'breathe' as they heat up and cool down. The silica gel crystals turn from blue (or orange) to pink when saturated with water, indicating they need to be replaced or baked dry.",
    "cat": "BON",
    "id": "T02_HV_320",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "During breaker maintenance, what type of grease is applied to the main draw-out (racking) contacts?",
    "a": "A specialized, highly conductive electrical contact grease (like silver-loaded grease) designed to prevent oxidation and reduce friction.",
    "opts": [
      "Standard marine bearing grease.",
      "A specialized, highly conductive electrical contact grease (like silver-loaded grease) designed to prevent oxidation and reduce friction.",
      "WD-40.",
      "No grease, they must be bone dry."
    ],
    "exp": "Using standard mechanical grease on electrical contacts acts as an insulator, causing the plug-in clusters to overheat and melt when 2000A flows through them.",
    "cat": "BON",
    "id": "T02_HV_321",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the purpose of testing the 'Trip Coil' of a circuit breaker?",
    "a": "To ensure the electro-magnet that unlatches the breaker mechanism operates swiftly at its lowest specified voltage (e.g., 70% of battery voltage).",
    "opts": [
      "To check if the breaker can handle high currents.",
      "To ensure the electro-magnet that unlatches the breaker mechanism operates swiftly at its lowest specified voltage (e.g., 70% of battery voltage).",
      "To test the main contacts.",
      "To charge the closing spring."
    ],
    "exp": "The trip coil is the final defense. If the ship loses AC power and the 24V batteries are weak, the trip coil must still have the power to instantly unlatch the breaker during a fault.",
    "cat": "BON",
    "id": "T02_HV_322",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "Why is anti-condensation heating maintenance vital?",
    "a": "If the heaters fail, moisture immediately condenses on cold HV windings when the motor is stopped, leading to instant failure upon the next start.",
    "opts": [
      "To keep the engineers warm.",
      "If the heaters fail, moisture immediately condenses on cold HV windings when the motor is stopped, leading to instant failure upon the next start.",
      "To burn off excess fuel.",
      "To keep the bearings lubricated."
    ],
    "exp": "Checking the resistance and current draw of space heaters inside alternators and motors is a critical routine task. A broken 500-watt heater can lead to the destruction of a 3 Megawatt motor.",
    "cat": "BON",
    "id": "T02_HV_323",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is a 'Phase Rotation Check' and when is it performed?",
    "a": "Verifying that the three phases (U-V-W) peak in the correct sequence. It must be performed before paralleling a newly repaired generator or connecting shore power.",
    "opts": [
      "Checking how fast the motor spins.",
      "Verifying that the three phases (U-V-W) peak in the correct sequence. It must be performed before paralleling a newly repaired generator or connecting shore power.",
      "Checking the physical rotation of the ship's propeller.",
      "Testing the frequency of the AVR."
    ],
    "exp": "If cables are swapped during maintenance (e.g., U-W-V), paralleling that generator to the busbar will cause a catastrophic dead-short, instantly destroying the generator and switchboard.",
    "cat": "BON",
    "id": "T02_HV_324",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "How does a Phase Rotation Indicator work?",
    "a": "It uses a small three-phase motor or solid-state LEDs. If connected to U-V-W, it spins clockwise (or shows Green). If two phases are swapped, it spins counter-clockwise (or shows Red).",
    "opts": [
      "It measures the voltage drop across the phases.",
      "It uses a small three-phase motor or solid-state LEDs. If connected to U-V-W, it spins clockwise (or shows Green). If two phases are swapped, it spins counter-clockwise (or shows Red).",
      "It measures the frequency of each phase.",
      "It weighs the cables."
    ],
    "exp": "It is a simple but vital tool. You test the busbar (which is correct), then test the incoming shore power. If they match, it is safe to close the breaker.",
    "cat": "BON",
    "id": "T02_HV_325",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the importance of maintaining the physical interlocks on HV switchgear doors?",
    "a": "They physically prevent the door from being opened unless the breaker is racked out and the earthing switch is closed, preventing access to live 6.6kV busbars.",
    "opts": [
      "They keep the doors from rattling.",
      "They physically prevent the door from being opened unless the breaker is racked out and the earthing switch is closed, preventing access to live 6.6kV busbars.",
      "They lock the ship down during pirate attacks.",
      "They look good for surveyors."
    ],
    "exp": "Human error is inevitable. Mechanical interlocks (cams, rods, and key-exchanges) are foolproof physical barriers that make it mechanically impossible for an operator to make a fatal sequencing mistake.",
    "cat": "BON",
    "id": "T02_HV_326",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "During a blackout test, what critical system must supply the switchboard protection relays and breaker trip coils?",
    "a": "The Uninterruptible Power Supply (UPS) or the 24V/110V DC Station Battery bank.",
    "opts": [
      "The emergency generator.",
      "The Uninterruptible Power Supply (UPS) or the 24V/110V DC Station Battery bank.",
      "The main engine.",
      "The shore power connection."
    ],
    "exp": "If the ship blacks out (0V on the busbars), the protection relays must still remain alive to sense faults, and the breakers must have DC power to trip. Maintaining this battery bank is critical.",
    "cat": "BON",
    "id": "T02_HV_327",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What is the danger of using standard vacuum cleaners inside a switchboard?",
    "a": "Standard vacuums generate massive static electricity on the plastic nozzle, which can discharge into sensitive relays and destroy them.",
    "opts": [
      "They are too loud.",
      "Standard vacuums generate massive static electricity on the plastic nozzle, which can discharge into sensitive relays and destroy them.",
      "They suck out the air from the vacuum breaker.",
      "They might suck up a loose bolt."
    ],
    "exp": "Specialized anti-static (ESD-safe) vacuums must be used when cleaning dust from modern microprocessor-based protection relays inside switchboards.",
    "cat": "BON",
    "id": "T02_HV_328",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "If a large HV motor is found to have a Polarization Index (PI) of 1.1, what maintenance action is required?",
    "a": "The motor is severely contaminated or wet. It must not be started. It requires extensive cleaning, solvent washing, and baking.",
    "opts": [
      "The motor is perfectly fine to run.",
      "The motor is severely contaminated or wet. It must not be started. It requires extensive cleaning, solvent washing, and baking.",
      "The motor needs more lubricating oil.",
      "The motor is running backwards."
    ],
    "exp": "A PI near 1.0 means the insulation has zero polarizing ability; it is acting purely as a conductor. Applying high voltage will cause an instant flashover to earth.",
    "cat": "BON",
    "id": "T02_HV_329",
    "topic": "T02_HighVoltage"
  },
  {
    "q": "What does a 'Buchholz Relay' on an oil transformer do, and how is it tested?",
    "a": "It detects gas bubbles generated by internal arcing. It is tested by pumping air into the test valve to verify the float switch drops and trips the transformer.",
    "opts": [
      "It measures the temperature of the oil.",
      "It detects gas bubbles generated by internal arcing. It is tested by pumping air into the test valve to verify the float switch drops and trips the transformer.",
      "It filters the oil.",
      "It cools the transformer down."
    ],
    "exp": "Located in the pipe between the main tank and the conservator, the Buchholz relay catches rising gas bubbles. A slow gas buildup triggers an alarm (minor fault); a massive oil surge (major explosion) triggers an instant trip.",
    "cat": "BON",
    "id": "T02_HV_330",
    "topic": "T02_HighVoltage"
  }
]);

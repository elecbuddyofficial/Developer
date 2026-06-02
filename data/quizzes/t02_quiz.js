window.loadQuizzes('T02_HV', [
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
  }
]);
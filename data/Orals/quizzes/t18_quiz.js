window.loadQuizzes("T18_ElecSurvey", [
  {
    "q": "During an electrical survey, which comprehensive set of documents must the ETO present to the classification surveyor?",
    "a": "Safety Equipment Certificate (SEC), PMS records, IR test records, battery logs, emergency generator test logs, and approved single-line diagrams",
    "opts": [
      "Hot work permits, garbage record books, and the Chief Cook's inventory logs",
      "Original equipment purchase invoices, cargo manifests, and crew rest hour logs",
      "Safety Equipment Certificate (SEC), PMS records, IR test records, battery logs, emergency generator test logs, and approved single-line diagrams",
      "VDR manual, engine room daily sounding logs, and heavy weather checklists"
    ],
    "exp": "The surveyor requires the SEC, complete PMS maintenance records, IR tests with temperatures, battery and emergency generator logs, and approved single-line drawings.",
    "cat": "Survey",
    "id": "T18E_001"
  },
  {
    "q": "Under a Continuous Machinery Survey (CMS) programme, what percentage of electrical items is typically surveyed each year?",
    "a": "Approximately 20% per year over a 5-year rolling cycle",
    "opts": [
      "10% per year over a 10-year rolling cycle",
      "50% per year over a 2-year rolling cycle",
      "33% per year over a 3-year rolling cycle",
      "Approximately 20% per year over a 5-year rolling cycle"
    ],
    "exp": "Continuous survey allows items to be surveyed on a rolling 5-year cycle, surveying about 20% per year without requiring a drydock for every item.",
    "cat": "Survey",
    "id": "T18E_002"
  },
  {
    "q": "Which SOLAS chapter and part mandates regulations for shipboard electrical installations including main and emergency power sources?",
    "a": "SOLAS Chapter II-1, Part D",
    "opts": [
      "SOLAS Chapter II-1, Part D",
      "SOLAS Chapter IV, Part C",
      "SOLAS Chapter V, Part B",
      "SOLAS Chapter II-2, Part A"
    ],
    "exp": "SOLAS Chapter II-1, Part D covers all electrical installations including the main source of power, emergency switchboards, and precautions against shock and fire.",
    "cat": "Survey",
    "id": "T18E_003"
  },
  {
    "q": "How must the emergency generator be tested to satisfy a class surveyor during an annual survey?",
    "a": "By simulating a full blackout, causing the generator to auto-start and connect to the emergency switchboard within 45 seconds",
    "opts": [
      "By manually starting the generator locally and running it off-load for 10 minutes",
      "By verifying its 18-hour fuel tank capacity and checking the battery specific gravity only",
      "By starting it from the bridge panel and connecting a dummy load bank for 15 minutes",
      "By simulating a full blackout, causing the generator to auto-start and connect to the emergency switchboard within 45 seconds"
    ],
    "exp": "The blackout test requires simulating a main power failure by tripping the running generator ACB, forcing the emergency generator to auto-start and connect within 45 seconds.",
    "cat": "Survey",
    "id": "T18E_004"
  },
  {
    "q": "What defines a 'dead front panel' on a marine switchboard?",
    "a": "A switchboard where no live electrical conductors or uninsulated parts are accessible from the front face during normal operation",
    "opts": [
      "A panel that automatically isolates all internal power if the ambient temperature exceeds 60 degrees C",
      "A switchboard section that has been permanently decommissioned and disconnected from the busbars",
      "A switchboard where no live electrical conductors or uninsulated parts are accessible from the front face during normal operation",
      "A control panel that operates exclusively on 24V DC for instrumentation purposes"
    ],
    "exp": "A dead front panel fully encloses live busbars and terminals behind barriers; operators interact only with insulated controls, ensuring safety during operation.",
    "cat": "MSB",
    "id": "T18E_005"
  },
  {
    "q": "What is the standard formula for calculating the test voltage applied during a Hi-Pot dielectric withstand test for marine switchboards?",
    "a": "2 times the rated voltage plus 1000V AC",
    "opts": [
      "3 times the rated voltage exactly",
      "1.5 times the rated voltage plus 500V",
      "10 times the rated voltage divided by 2",
      "2 times the rated voltage plus 1000V AC"
    ],
    "exp": "The standard dielectric withstand (Hi-Pot) test voltage is 2V + 1000V. For a 440V panel this is approximately 1880V, often rounded to a 2000V test maintained for 1 minute.",
    "cat": "MSB",
    "id": "T18E_006"
  },
  {
    "q": "Which protective device on the MSB sheds non-essential loads such as galley ovens and HVAC to prevent a complete generator blackout?",
    "a": "Preferential trip relay",
    "opts": [
      "Negative phase sequence relay",
      "Differential protection relay",
      "Reverse power relay",
      "Preferential trip relay"
    ],
    "exp": "The preferential trip relay drops non-essential loads in stages using time delays of 5-30 seconds when the generator approaches 90-100% capacity.",
    "cat": "MSB",
    "id": "T18E_007"
  },
  {
    "q": "Which equipment group is permanently protected and NEVER shed by the preferential trip system?",
    "a": "Steering gear, navigation equipment, fire pumps, and emergency bilge pumps",
    "opts": [
      "Workshop machinery and provision room refrigeration compressors",
      "Accommodation ventilation fans and deck cranes",
      "Galley ovens, water heaters, and laundry equipment",
      "Steering gear, navigation equipment, fire pumps, and emergency bilge pumps"
    ],
    "exp": "Essential safety loads such as navigation, steering, fire pumps, and GMDSS are hardwired and never shed by preferential trip to avoid immediate SOLAS violations.",
    "cat": "MSB",
    "id": "T18E_008"
  },
  {
    "q": "What is the most effective method for detecting a loose connection hotspot on MSB busbars without shutting down the switchboard?",
    "a": "Using an infrared thermal imaging camera during normal live operation",
    "opts": [
      "Using an infrared thermal imaging camera during normal live operation",
      "Spraying contact cleaner on the joints and watching for rapid evaporation",
      "Performing a 500V DC megger test between phases",
      "Racking out the ACBs and performing a secondary injection test"
    ],
    "exp": "Infrared thermography detects temperature differences on live busbar joints caused by high contact resistance, safely identifying hotspots without live working.",
    "cat": "MSB",
    "id": "T18E_009"
  },
  {
    "q": "What is the correct procedure for testing an ACB overcurrent trip during an electrical survey?",
    "a": "Rack the ACB to the TEST position and use a secondary injection test set to inject current into the relay via the CT secondary terminals",
    "opts": [
      "Disconnect the under-voltage trip coil and verify the breaker opens via the mechanical push button",
      "Short circuit the busbars momentarily to simulate a fault while monitoring the trip time",
      "Run the generator at 150% load until the bimetallic thermal relay physically bends and trips the breaker",
      "Rack the ACB to the TEST position and use a secondary injection test set to inject current into the relay via the CT secondary terminals"
    ],
    "exp": "Secondary injection testing involves isolating the power contacts (TEST position) and injecting simulated overcurrent into the CT secondaries to verify the IDMT protection curve.",
    "cat": "ACB",
    "id": "T18E_010"
  },
  {
    "q": "During an ACB overcurrent secondary injection test, at what typical current multiples of the rated setting is the relay tested?",
    "a": "150%, 200%, and 600% of the rated current",
    "opts": [
      "1000%, 2000%, and 5000% of the rated current",
      "150%, 200%, and 600% of the rated current",
      "10%, 25%, and 50% of the rated current",
      "80%, 90%, and 100% of the rated current"
    ],
    "exp": "To verify the Inverse Definite Minimum Time (IDMT) curve, test currents are injected at 150% (slow trip), 200% (moderate time), and 600% (instantaneous element).",
    "cat": "ACB",
    "id": "T18E_011"
  },
  {
    "q": "How does an Air Circuit Breaker (ACB) extinguish the arc when its contacts open under load?",
    "a": "Magnetic forces drive the arc into arc chutes where splitter plates divide it into multiple shorter arcs, raising total arc voltage above the supply voltage",
    "opts": [
      "A cooling fan blows cold engine room air across the main contacts",
      "A blast of highly pressurized SF6 gas blows out the arc instantly",
      "Magnetic forces drive the arc into arc chutes where splitter plates divide it into multiple shorter arcs, raising total arc voltage above the supply voltage",
      "The arc is drawn into a pure vacuum chamber where lack of oxygen prevents it from sustaining"
    ],
    "exp": "ACBs use arc chutes equipped with insulating splitter plates. The arc is divided, increasing its voltage drop until it exceeds the supply voltage and extinguishes.",
    "cat": "ACB",
    "id": "T18E_012"
  },
  {
    "q": "At what voltage threshold does the Under-Voltage Release (UVR) coil release its latch and trip the generator ACB?",
    "a": "70-80% of the rated generator voltage",
    "opts": [
      "95-100% of the rated generator voltage",
      "10-20% of the rated generator voltage",
      "110-115% of the rated generator voltage",
      "70-80% of the rated generator voltage"
    ],
    "exp": "The UVR is a continuous-duty holding coil. If generator voltage drops below 70-80% of rated, the coil magnetic force falls, releasing the latch and tripping the breaker.",
    "cat": "ACB",
    "id": "T18E_013"
  },
  {
    "q": "What is the typical threshold setting and time delay for a marine Reverse Power Relay (RPR)?",
    "a": "5-15% of rated generator kW with a 3-5 second time delay",
    "opts": [
      "50-60% of rated generator kW with a 10-15 second time delay",
      "5-15% of rated generator kW with a 3-5 second time delay",
      "100-110% of rated generator kW with a 1-minute time delay",
      "1-2% of rated generator kW with an instantaneous trip (0 seconds)"
    ],
    "exp": "To prevent motoring the prime mover, the RPR trips at 5-15% reverse power. A 3-5 second delay prevents nuisance tripping during synchronization transients.",
    "cat": "ACB",
    "id": "T18E_014"
  },
  {
    "q": "How is an RPR tested during drydock when the generator cannot be back-driven?",
    "a": "Using a secondary injection test kit, inject current phase-shifted 180 degrees out of phase with the voltage reference to simulate reverse power",
    "opts": [
      "Manually turn the generator rotor backwards by hand until the relay trips",
      "Using a secondary injection test kit, inject current phase-shifted 180 degrees out of phase with the voltage reference to simulate reverse power",
      "Apply a resistive dummy load exceeding 110% rating until power direction reverses",
      "Temporarily parallel two generators and reduce fuel to one until the relay activates"
    ],
    "exp": "The 180-degree phase-shift injection trick forces the wattmetric element to read negative power, verifying the RPR trip threshold and time delay without physically back-driving the engine.",
    "cat": "ACB",
    "id": "T18E_015"
  },
  {
    "q": "What is the practical formula for determining the minimum acceptable insulation resistance for a marine electrical machine?",
    "a": "IR (Mohm) >= Rated Voltage (kV) + 1",
    "opts": [
      "IR (Mohm) >= Rated Voltage (kV) + 1",
      "IR (Mohm) >= Rated Voltage (V) / 100",
      "IR (Mohm) >= Rated Current (A) + 10",
      "IR (kohm) >= Rated Voltage (kV) x 1000"
    ],
    "exp": "The general rule for minimum acceptable IR is: IR (Mohm) >= kV + 1. For a 440V (0.44 kV) motor, minimum is approximately 1.44 Mohm. For 6.6 kV, minimum is 7.6 Mohm.",
    "cat": "IR",
    "id": "T18E_016"
  },
  {
    "q": "Why must the Automatic Voltage Regulator (AVR) be completely disconnected before performing an IR test on an alternator?",
    "a": "The megger's high DC test voltage (500V-1000V) will irreversibly damage the AVR's sensitive low-voltage semiconductor components",
    "opts": [
      "The AVR's internal capacitors will absorb the test current, giving a false zero reading",
      "The AVR will falsely read the megger's output and attempt to start the emergency generator",
      "The megger's high DC test voltage (500V-1000V) will irreversibly damage the AVR's sensitive low-voltage semiconductor components",
      "The megger's voltage will demagnetize the alternator's residual magnetism, requiring flashing"
    ],
    "exp": "The AVR contains low-voltage electronics (diodes, transistors, ICs). Subjecting them to 500V or 1000V DC from a megger causes immediate avalanche breakdown and destruction.",
    "cat": "IR",
    "id": "T18E_017"
  },
  {
    "q": "When performing a Polarisation Index (PI) test on a High Voltage winding, what does a flat PI value of 1.0 to 1.2 indicate?",
    "a": "Very poor insulation heavily contaminated by moisture or carbon, where steady conductive leakage current dominates",
    "opts": [
      "A perfectly normal reading for a Class H insulated steering gear motor",
      "Excellent, dry insulation that is completely safe to energize",
      "A recently rewound motor that has not yet completed its thermal break-in period",
      "Very poor insulation heavily contaminated by moisture or carbon, where steady conductive leakage current dominates"
    ],
    "exp": "A PI near 1.0 means the 10-minute IR reading equals the 1-minute reading, indicating moisture-dominated leakage current has not decayed, making it unsafe to energize.",
    "cat": "IR",
    "id": "T18E_018"
  },
  {
    "q": "What test voltage must be applied by a megger when conducting an IR test on a 6.6 kV high voltage cable?",
    "a": "5000V DC",
    "opts": [
      "5000V DC",
      "1000V AC",
      "500V DC",
      "10,000V DC"
    ],
    "exp": "For 6.6kV high voltage cables, a 5000V DC megger is used to properly stress the thick insulation and reveal moisture or degradation that a lower voltage would miss.",
    "cat": "IR",
    "id": "T18E_019"
  },
  {
    "q": "What is the minimum IR test voltage to use on sensitive electronics, control cards, and PCBs?",
    "a": "50-100V DC only — standard 500V megger will destroy semiconductor junctions",
    "opts": [
      "1000V DC — to guarantee proper stress-testing of the insulation",
      "500V DC — same as for 440V motors",
      "No testing required — circuit boards are pre-tested at the factory and exempt from IR testing",
      "50-100V DC only — standard 500V megger will destroy semiconductor junctions"
    ],
    "exp": "Standard 500V meggers instantly destroy semiconductor junctions on control boards. A dedicated low-voltage insulation tester set to 50-100V DC must be used for sensitive electronics.",
    "cat": "IR",
    "id": "T18E_020"
  },
  {
    "q": "What is the primary function of the Neutral Earthing Resistor (NER) in a ship's 6.6 kV system?",
    "a": "It limits earth fault current to a safe level (typically 5-10A) to prevent severe equipment damage while providing a defined earth reference",
    "opts": [
      "It limits earth fault current to a safe level (typically 5-10A) to prevent severe equipment damage while providing a defined earth reference",
      "It intentionally increases the fault current to thousands of amperes to guarantee the circuit breaker trips instantaneously",
      "It regulates the high voltage busbar frequency during transient load changes",
      "It completely isolates the neutral from the hull, ensuring the ship continues to run on the first earth fault without alarming"
    ],
    "exp": "The NER provides a compromise between a solidly earthed system (massive destructive fault currents) and an insulated system (dangerous overvoltages on healthy phases).",
    "cat": "HV",
    "id": "T18E_021"
  },
  {
    "q": "How is the NER resistance calculated to limit the maximum earth fault current to 5A on a 6.6 kV system?",
    "a": "R = (6600 / root 3) / 5 = approximately 762 Ohms",
    "opts": [
      "R = (6600 / root 3) / 5 = approximately 762 Ohms",
      "R = 6600 / 5 = 1320 Ohms",
      "R = (6600 / 5) x root 3 = 2286 Ohms",
      "R = (6600 x root 3) / 5 = 2286 Ohms"
    ],
    "exp": "Phase voltage = 6600 / root 3 = 3810V. NER resistance R = V_phase / I_max = 3810 / 5 = 762 Ohms. The NER limits fault energy to prevent catastrophic thermal damage.",
    "cat": "HV",
    "id": "T18E_022"
  },
  {
    "q": "What specific rubber insulating gloves must the ETO wear when executing maintenance on a 6.6 kV high voltage system?",
    "a": "Class 2 (Yellow) rubber gloves rated for 17,000V AC maximum use voltage",
    "opts": [
      "Standard leather rigger gloves as long as the system is confirmed dead",
      "Class 2 (Yellow) rubber gloves rated for 17,000V AC maximum use voltage",
      "Class 0 (Red) rubber gloves rated for 1,000V AC maximum use voltage",
      "Class 00 (Beige) rubber gloves rated for 500V AC maximum use voltage"
    ],
    "exp": "6.6kV systems require minimum Class 2 (Yellow) gloves which are rated for 17,000V AC. They must be worn with leather outer protectors to prevent mechanical damage.",
    "cat": "HV",
    "id": "T18E_023"
  },
  {
    "q": "In HV switchboards, what is the primary purpose of a mechanical Castell key interlock system?",
    "a": "To enforce a strict sequence of operations — ensuring an earth switch cannot be closed until the circuit breaker is racked out and locked",
    "opts": [
      "To lock the engine telegraph in the Stop position until the HV busbars are fully synchronized",
      "To encrypt the digital HART communication signals between the MSB and the Engine Control Room",
      "To bypass the Under-Voltage Trip coil manually during a blackout start",
      "To enforce a strict sequence of operations — ensuring an earth switch cannot be closed until the circuit breaker is racked out and locked"
    ],
    "exp": "Castell keys are trapped-key mechanical interlocks that force the operator to follow a safe sequence. A key from a racked-out VCB is physically required to unlock and close the associated earth switch.",
    "cat": "HV",
    "id": "T18E_024"
  },
  {
    "q": "Why is a double-wound isolation transformer required when connecting a ship to shore power?",
    "a": "To break the galvanic path between the solidly earthed shore supply and the ship's unearthed IT system, preventing severe stray current hull corrosion",
    "opts": [
      "To convert the shore's 50 Hz frequency to the ship's 60 Hz system",
      "To step down the high voltage grid power to 24V DC for the emergency switchboard",
      "To break the galvanic path between the solidly earthed shore supply and the ship's unearthed IT system, preventing severe stray current hull corrosion",
      "To filter out harmonic distortion caused by the shore facility's variable frequency drives"
    ],
    "exp": "Shore supplies are solidly earthed (TN-S). Connecting directly to a ship's insulated neutral (IT) system creates a galvanic cell with seawater through the hull earth, causing rapid electrolytic hull corrosion.",
    "cat": "ShorePower",
    "id": "T18E_025"
  },
  {
    "q": "During shore connection, if the phase sequence indicator is broken, what is a safe alternative method to verify phase sequence?",
    "a": "Connect shore power at minimal load and briefly start a small 3-phase motor to observe if its direction of rotation is correct",
    "opts": [
      "Check the voltage between Phase L1 and Neutral — if it is 220V, the sequence is correct",
      "Connect shore power at minimal load and briefly start a small 3-phase motor to observe if its direction of rotation is correct",
      "Measure the resistance between the three phase conductors using a standard multimeter",
      "Connect shore power fully and rely on the Main Engine's Wrong Way Alarm to warn of sequence errors"
    ],
    "exp": "Running a small non-critical 3-phase motor reveals the sequence. If it runs backward, the sequence is reversed and two phase conductors must be swapped before connecting fully.",
    "cat": "ShorePower",
    "id": "T18E_026"
  },
  {
    "q": "How does the shore connection breaker interlock prevent dangerous paralleling of shore power with the ship's running generators?",
    "a": "A normally-closed auxiliary contact from each generator ACB is wired in series with the shore breaker's closing coil, preventing it from energizing if any generator ACB is closed",
    "opts": [
      "A normally-closed auxiliary contact from each generator ACB is wired in series with the shore breaker's closing coil, preventing it from energizing if any generator ACB is closed",
      "A PLC program monitors the phase angle and physically locks the shore box door if generators are running",
      "The reverse power relay of the shore connection box automatically trips the generators if shore power is detected",
      "A mechanical Castell key must be manually removed from the running generator and inserted into the shore panel"
    ],
    "exp": "The electrical interlock routes the shore breaker closing coil supply through the auxiliary contacts of the generator ACBs. If a generator ACB is closed the circuit breaks, physically preventing shore breaker closure.",
    "cat": "ShorePower",
    "id": "T18E_027"
  },
  {
    "q": "Under the ISM Code, what is the standard validity period for the Document of Compliance (DOC) and Safety Management Certificate (SMC)?",
    "a": "DOC valid for 5 years with annual verification; SMC valid for 5 years with one intermediate verification at 2.5 years",
    "opts": [
      "Both certificates valid indefinitely as long as the ship does not change flag states",
      "DOC valid for 1 year; SMC valid for 10 years",
      "DOC valid for 2.5 years; SMC valid for 1 year",
      "DOC valid for 5 years with annual verification; SMC valid for 5 years with one intermediate verification at 2.5 years"
    ],
    "exp": "The DOC (issued to the company) is valid for 5 years with annual audits. The SMC (issued to the ship) is valid for 5 years with an intermediate audit between the 2nd and 3rd years.",
    "cat": "ISM",
    "id": "T18E_028"
  },
  {
    "q": "What constitutes a Major Non-Conformity (MNC) under the ISM Code?",
    "a": "An identifiable deviation that poses a serious threat to personnel or ship safety, or a serious risk to the environment, requiring immediate corrective action",
    "opts": [
      "A single burnt-out indicator lamp on the preferential trip panel",
      "A minor clerical error in the engine room logbook that was corrected before the auditor noticed",
      "The delayed submission of the monthly spare parts inventory to the company's purchasing department",
      "An identifiable deviation that poses a serious threat to personnel or ship safety, or a serious risk to the environment, requiring immediate corrective action"
    ],
    "exp": "An MNC represents an immediate, serious threat to safety or the environment. It leads to the immediate suspension of the vessel's SMC or the company's DOC until resolved.",
    "cat": "ISM",
    "id": "T18E_029"
  },
  {
    "q": "Which specific SOLAS chapter mandates the implementation of the International Safety Management (ISM) Code?",
    "a": "SOLAS Chapter IX — Management for the Safe Operation of Ships",
    "opts": [
      "SOLAS Chapter IV — Radiocommunications",
      "SOLAS Chapter II-1 — Construction, Structure, Subdivision and Stability",
      "SOLAS Chapter IX — Management for the Safe Operation of Ships",
      "SOLAS Chapter XI-2 — Special measures to enhance maritime security"
    ],
    "exp": "SOLAS Chapter IX formally makes the ISM Code mandatory for commercial vessels, establishing safety management objectives and certification requirements.",
    "cat": "ISM",
    "id": "T18E_030"
  },
  {
    "q": "Under STCW 2010 Manila Amendments, what are the mandatory minimum hours of rest required for an ETO in any 24-hour period?",
    "a": "Minimum 10 hours of rest in any 24-hour period, which may be divided into no more than two periods, one of which must be at least 6 hours",
    "opts": [
      "Minimum 8 hours of continuous rest in any 24-hour period with no exceptions",
      "Minimum 6 hours of rest in any 24-hour period provided the weekly total exceeds 40 hours",
      "Minimum 10 hours of rest in any 24-hour period, which may be divided into no more than two periods, one of which must be at least 6 hours",
      "Minimum 12 hours of rest in any 24-hour period divided into exactly three 4-hour periods"
    ],
    "exp": "STCW requires a minimum of 10 hours of rest in any 24-hour period and 77 hours in any 7-day period. The 10 hours can be split into two periods but one must be at least 6 hours.",
    "cat": "ISM",
    "id": "T18E_031"
  },
  {
    "q": "Which permit specifically documents the LOTO procedures, isolation points, and de-energization testing before work on an MSB breaker?",
    "a": "Electrical Isolation Permit (EIP)",
    "opts": [
      "Enclosed Space Entry Permit",
      "Hot Work Permit",
      "Cold Work Permit",
      "Electrical Isolation Permit (EIP)"
    ],
    "exp": "The Electrical Isolation Permit (EIP) is the primary PTW for electrical maintenance, ensuring the circuit is safely isolated, locked, tagged, and verified dead before work commences.",
    "cat": "PTW",
    "id": "T18E_032"
  },
  {
    "q": "According to IMO enclosed space entry procedures, what is the absolute minimum safe oxygen concentration before personnel may enter?",
    "a": "19.5% oxygen by volume",
    "opts": [
      "15.5% oxygen by volume",
      "20.9% oxygen by volume",
      "23.5% oxygen by volume",
      "19.5% oxygen by volume"
    ],
    "exp": "Normal atmospheric oxygen is 20.9%. An atmosphere with less than 19.5% oxygen is considered oxygen-deficient and strictly prohibits entry without breathing apparatus.",
    "cat": "PTW",
    "id": "T18E_033"
  },
  {
    "q": "After locking out and tagging a 6.6 kV circuit breaker, what is the mandatory minimum wait time before applying a HV detector or earth clamps?",
    "a": "5 minutes, to allow the lethal capacitive charge stored in HV cables and equipment to fully dissipate",
    "opts": [
      "0 seconds — earth clamps must be applied instantly to short out any incoming faults",
      "30 seconds, to allow the under-voltage trip coil to reset",
      "5 minutes, to allow the lethal capacitive charge stored in HV cables and equipment to fully dissipate",
      "1 hour, to ensure the vacuum bottles in the breaker have completely cooled down"
    ],
    "exp": "HV cables and windings act as large capacitors. They retain lethal capacitive energy even after isolation. A 5-minute discharge wait is mandatory before testing for dead and applying earths.",
    "cat": "PTW",
    "id": "T18E_034"
  },
  {
    "q": "What is the mandatory minimum weekly rest hour requirement under STCW for all officers including the ETO?",
    "a": "77 hours of rest in any 7-day period",
    "opts": [
      "77 hours of rest in any 7-day period",
      "48 hours of rest in any 7-day period",
      "84 hours of rest in any 7-day period",
      "56 hours of rest in any 7-day period"
    ],
    "exp": "STCW mandates both a 10-hour minimum in any 24-hour period AND a 77-hour minimum in any 7-day period. Falsifying rest records is a PSC deficiency that can lead to vessel detention.",
    "cat": "ISM",
    "id": "T18E_035"
  },
  {
    "q": "What is the permitted time window for conducting an Annual Class Survey?",
    "a": "±3 months from the anniversary date",
    "opts": [
      "±3 months from the anniversary date",
      "±1 month from the anniversary date",
      "±6 months from the anniversary date",
      "Any time within the calendar year"
    ],
    "exp": "Annual surveys have a ±3 month window. Missing this window results in automatic class suspension.",
    "cat": "Survey",
    "id": "T18E_036"
  },
  {
    "q": "What percentage of electrical equipment is typically surveyed each year under a Continuous Survey (CMS) programme?",
    "a": "Approximately 20% per year",
    "opts": [
      "100% per year",
      "Approximately 20% per year",
      "10% per year",
      "50% per year"
    ],
    "exp": "CMS uses a 5-year rolling cycle, surveying about 20% of the ship's equipment annually to avoid massive drydock scopes.",
    "cat": "Survey",
    "id": "T18E_037"
  },
  {
    "q": "Which survey involves the most comprehensive electrical inspection, including full secondary injection tests and IR testing of all cables?",
    "a": "Special Survey (Class Renewal Survey)",
    "opts": [
      "Intermediate Survey",
      "Special Survey (Class Renewal Survey)",
      "Annual Survey",
      "Safety Equipment Survey"
    ],
    "exp": "The Special Survey occurs every 5 years, usually in drydock, and requires complete testing and renewal of the class certificate.",
    "cat": "Survey",
    "id": "T18E_038"
  },
  {
    "q": "When does the Intermediate Survey take place in the 5-year class cycle?",
    "a": "Between the 2nd and 3rd annual survey",
    "opts": [
      "At the 1-year mark",
      "Between the 2nd and 3rd annual survey",
      "Every 6 months",
      "Exactly at the 4-year mark"
    ],
    "exp": "The intermediate survey is a more detailed inspection typically conducted at the 2.5-year mid-point of the class cycle.",
    "cat": "Survey",
    "id": "T18E_039"
  },
  {
    "q": "Which statutory certificate covers fire detection, nav lights, and GMDSS equipment?",
    "a": "Safety Equipment Certificate (SEC)",
    "opts": [
      "Safety Equipment Certificate (SEC)",
      "IAPP Certificate",
      "Load Line Certificate",
      "Safety Construction Certificate (SCC)"
    ],
    "exp": "The SEC is issued by the flag state or RO and covers all critical life-saving and safety-related electrical equipment.",
    "cat": "Survey",
    "id": "T18E_040"
  },
  {
    "q": "What does the Safety Construction Certificate (SCC) cover regarding electrical systems?",
    "a": "It verifies structural, machinery, and electrical construction standards",
    "opts": [
      "Only the navigational lights",
      "Only the main engine mechanics",
      "Only the radio equipment",
      "It verifies structural, machinery, and electrical construction standards"
    ],
    "exp": "The SCC ensures the fundamental build and safety of the ship's electrical and mechanical infrastructure.",
    "cat": "Survey",
    "id": "T18E_041"
  },
  {
    "q": "Which certificate is directly associated with the ODS (Ozone Depleting Substances) Record Book?",
    "a": "IAPP Certificate",
    "opts": [
      "SCC Certificate",
      "SEC Certificate",
      "IAPP Certificate",
      "ISPP Certificate"
    ],
    "exp": "The International Air Pollution Prevention (IAPP) certificate covers MARPOL Annex VI, which includes ODS tracking.",
    "cat": "Survey",
    "id": "T18E_042"
  },
  {
    "q": "How frequently must the Voyage Data Recorder (VDR) undergo a Performance Test Certificate renewal?",
    "a": "Annually",
    "opts": [
      "Every 5 years",
      "Annually",
      "Every 2.5 years",
      "Monthly"
    ],
    "exp": "VDRs require an annual performance test by an approved service provider to maintain statutory validity.",
    "cat": "Survey",
    "id": "T18E_043"
  },
  {
    "q": "Which drawing must be presented to the surveyor to show the overall power distribution including generators and MSB?",
    "a": "Approved Single-line electrical diagram",
    "opts": [
      "Capacity Plan",
      "General Arrangement plan",
      "Piping and Instrumentation Diagram",
      "Approved Single-line electrical diagram"
    ],
    "exp": "The single-line diagram is the master schematic for the ship's electrical generation and distribution network.",
    "cat": "Survey",
    "id": "T18E_044"
  },
  {
    "q": "Which SOLAS chapter specifically details the technical standards for electrical installations surveyed by class?",
    "a": "SOLAS Chapter II-1",
    "opts": [
      "SOLAS Chapter I",
      "SOLAS Chapter IV",
      "SOLAS Chapter III",
      "SOLAS Chapter II-1"
    ],
    "exp": "Chapter II-1 covers Construction - Structure, subdivision and stability, machinery and electrical installations.",
    "cat": "Survey",
    "id": "T18E_045"
  },
  {
    "q": "What must be included with every Insulation Resistance (IR) test record presented to the surveyor?",
    "a": "Date, temperature, and temperature-corrected values",
    "opts": [
      "Date, temperature, and temperature-corrected values",
      "Photographs of the tested motor",
      "The names of all crew on board",
      "The brand of the megger used"
    ],
    "exp": "IR values vary heavily with temperature. Raw readings must be temperature-corrected to a 40°C baseline for accurate assessment.",
    "cat": "Survey",
    "id": "T18E_046"
  },
  {
    "q": "During an emergency generator blackout test, within what maximum time limit must the generator auto-start and connect to the switchboard?",
    "a": "45 seconds",
    "opts": [
      "30 seconds",
      "10 seconds",
      "60 seconds",
      "45 seconds"
    ],
    "exp": "SOLAS II-1/43 requires the emergency generator on a cargo ship to auto-start and supply loads within 45 seconds.",
    "cat": "Survey",
    "id": "T18E_047"
  },
  {
    "q": "During a generator voltage regulation test, what is the pass criterion for voltage recovery after a sudden large load is applied?",
    "a": "Voltage must recover to within ±3% of rated within 1.5 seconds",
    "opts": [
      "Voltage must recover to within ±5% within 5 seconds",
      "Voltage must recover to within ±1% within 0.5 seconds",
      "Voltage must not drop at all",
      "Voltage must recover to within ±3% of rated within 1.5 seconds"
    ],
    "exp": "SOLAS II-1/40 dictates that the AVR must restore stable voltage rapidly to prevent stalling other running motors.",
    "cat": "Survey",
    "id": "T18E_048"
  },
  {
    "q": "What is the typical time delay sequence tested during a Preferential Trip test?",
    "a": "Stage 1: 5s, Stage 2: 15s, Stage 3: 25s",
    "opts": [
      "All stages trip instantly",
      "Stage 1: 30s, Stage 2: 60s, Stage 3: 90s",
      "Stage 1: 1s, Stage 2: 2s, Stage 3: 3s",
      "Stage 1: 5s, Stage 2: 15s, Stage 3: 25s"
    ],
    "exp": "Preferential tripping sheds non-essential loads in timed sequential stages to give the generator a chance to recover from overload.",
    "cat": "Survey",
    "id": "T18E_049"
  },
  {
    "q": "Which organization sets the Unified Requirements (URs) that all major class societies must follow for electrical surveys?",
    "a": "IACS (International Association of Classification Societies)",
    "opts": [
      "IMO (International Maritime Organization)",
      "IEC (International Electrotechnical Commission)",
      "IACS (International Association of Classification Societies)",
      "IEEE"
    ],
    "exp": "IACS develops the unified technical rules that member class societies implement in their individual rulebooks.",
    "cat": "Survey",
    "id": "T18E_050"
  },
  {
    "q": "What is verified regarding motor starter overload relays during the survey?",
    "a": "Settings must match the motor nameplate Full Load Amps (FLA)",
    "opts": [
      "Relays must be bypassed for emergency use",
      "Settings must match the motor nameplate Full Load Amps (FLA)",
      "Settings must be at 200% of FLA",
      "Relays must trip instantly on startup"
    ],
    "exp": "Overload relays protect the motor winding insulation from thermal degradation and must be precisely calibrated to the motor's rating.",
    "cat": "Survey",
    "id": "T18E_051"
  },
  {
    "q": "What specific log must the ETO maintain to prove the emergency generator is ready for surveyor inspection?",
    "a": "Monthly auto-start test records and annual load test records",
    "opts": [
      "Daily fuel consumption logs",
      "Hourly frequency deviation logs",
      "Weekly insulation resistance logs",
      "Monthly auto-start test records and annual load test records"
    ],
    "exp": "Statutory rules require a functional auto-start test every month and a full load test annually.",
    "cat": "Survey",
    "id": "T18E_052"
  },
  {
    "q": "What is the minimum acceptable Megger reading for a 440V motor phase-to-earth during a Special Survey?",
    "a": "Minimum 1 MΩ corrected to 40°C",
    "opts": [
      "Minimum 1 MΩ corrected to 40°C",
      "100 MΩ",
      "100 kΩ",
      "10 MΩ"
    ],
    "exp": "While 1 MΩ is the absolute minimum safe limit, good marine practice aims for ≥ rated kV + 1 MΩ.",
    "cat": "Survey",
    "id": "T18E_053"
  },
  {
    "q": "What is checked during the MSB busbar torque survey?",
    "a": "All busbar joint bolts are torqued to manufacturer specification to prevent loose connections",
    "opts": [
      "The magnetic field strength of the joints",
      "The rotational speed of the busbars",
      "All busbar joint bolts are torqued to manufacturer specification to prevent loose connections",
      "The physical weight of the busbars"
    ],
    "exp": "Loose busbar joints cause extreme localized heating under high current, leading to copper melting and MSB fires.",
    "cat": "Survey",
    "id": "T18E_054"
  },
  {
    "q": "Who typically issues the GMDSS Radio Station Licence that is checked during survey?",
    "a": "The flag state telecom authority",
    "opts": [
      "The local port state control",
      "The flag state telecom authority",
      "The classification society surveyor",
      "The ship's captain"
    ],
    "exp": "The radio license assigns the MMSI and call sign and is a statutory document issued by the vessel's flag state.",
    "cat": "Survey",
    "id": "T18E_055"
  },
  {
    "q": "Which drawing shows the specific protection relay settings and ACB positions?",
    "a": "MSB arrangement drawing",
    "opts": [
      "General Arrangement plan",
      "Piping diagram",
      "MSB arrangement drawing",
      "Emergency lighting plan"
    ],
    "exp": "The MSB arrangement diagram maps out the physical and electrical layout of the switchboard and its protective devices.",
    "cat": "Survey",
    "id": "T18E_056"
  },
  {
    "q": "How is the Over-Voltage Trip tested during a survey?",
    "a": "Use the AVR test point or trimmer to raise voltage above setpoint (without load)",
    "opts": [
      "Short circuit the main busbars",
      "Use the AVR test point or trimmer to raise voltage above setpoint (without load)",
      "Inject 440V into the control circuit",
      "Increase the engine speed to 120%"
    ],
    "exp": "The surveyor verifies that the over-voltage relay trips the ACB (and usually the excitation) when voltage exceeds 110-115%.",
    "cat": "Survey",
    "id": "T18E_057"
  },
  {
    "q": "What battery records are heavily scrutinized during the electrical survey?",
    "a": "Specific gravity, electrolyte levels, and load test results for all emergency/safety batteries",
    "opts": [
      "Specific gravity, electrolyte levels, and load test results for all emergency/safety batteries",
      "Only the brand names of the batteries",
      "The physical weight of each cell",
      "The disposal records for old batteries only"
    ],
    "exp": "GMDSS, emergency generator, and UPS batteries must have proven capacity to handle a real blackout emergency.",
    "cat": "Survey",
    "id": "T18E_058"
  },
  {
    "q": "What action results from missing the ±3 month window for an Annual Survey?",
    "a": "Class is suspended and the ship may not trade",
    "opts": [
      "Class is suspended and the ship may not trade",
      "The Chief Engineer loses their license",
      "A small fine is issued",
      "The survey is pushed to the next year"
    ],
    "exp": "Statutory survey windows are rigid. Trading with suspended class invalidates insurance and violates international maritime law.",
    "cat": "Survey",
    "id": "T18E_059"
  },
  {
    "q": "What is the primary difference between a Class Society and a Flag State regarding surveys?",
    "a": "Flag state sets statutory rules; Class society verifies compliance on behalf of the flag state as a Recognized Organization",
    "opts": [
      "Class society issues passports; Flag state issues visas",
      "There is no difference; they are the same entity",
      "Flag state builds the ship; Class society operates it",
      "Flag state sets statutory rules; Class society verifies compliance on behalf of the flag state as a Recognized Organization"
    ],
    "exp": "Class societies (like DNV, LR) possess the technical expertise to survey ships and issue certificates on behalf of the government (Flag).",
    "cat": "Survey",
    "id": "T18E_060"
  },
  {
    "q": "What condition must the MSB be in to perform a 500V Megger test on the main busbars?",
    "a": "All generator ACBs and feeder breakers must be OPEN",
    "opts": [
      "All generator ACBs and feeder breakers must be OPEN",
      "The 24V DC supply must be connected",
      "Generators must be running at full load",
      "The bus tie breaker must be closed"
    ],
    "exp": "Meggering a live busbar is lethal and destroys the instrument. The busbars must be completely dead and isolated.",
    "cat": "Survey",
    "id": "T18E_061"
  },
  {
    "q": "What document calculates and proves that the generators can handle the worst-case electrical demand?",
    "a": "Ship's electrical load analysis / power balance calculation",
    "opts": [
      "The fuel consumption log",
      "The stability booklet",
      "Ship's electrical load analysis / power balance calculation",
      "The continuous synopsis record"
    ],
    "exp": "The load analysis proves that even with max cargo and thruster load, the generators won't black out.",
    "cat": "Survey",
    "id": "T18E_062"
  },
  {
    "q": "How is an earth fault trip on a generator tested during survey?",
    "a": "By injecting current into the neutral CT secondary to simulate fault current above the 10-30% setting",
    "opts": [
      "By injecting current into the neutral CT secondary to simulate fault current above the 10-30% setting",
      "By physically touching a live phase to the hull",
      "By shorting the AVR output",
      "By pouring saltwater on the MSB"
    ],
    "exp": "Injecting secondary current tests the relay's response to an unbalanced phase-to-earth fault without risking actual high-voltage arcs.",
    "cat": "Survey",
    "id": "T18E_063"
  },
  {
    "q": "What does a month-end electrical report typically signify to a surveyor?",
    "a": "That regular maintenance and parameter logging are actively monitored by the Chief Engineer",
    "opts": [
      "That the ETO is preparing to sign off",
      "That regular maintenance and parameter logging are actively monitored by the Chief Engineer",
      "That the ship is out of spare parts",
      "That the generators have failed"
    ],
    "exp": "Signed month-end reports prove a culture of continuous monitoring and compliance with the Planned Maintenance System (PMS).",
    "cat": "Survey",
    "id": "T18E_064"
  },
  {
    "q": "What is the test criterion for the auxiliary steering gear system?",
    "a": "Hard-over (15° to 15°) in ≤60 seconds at half speed",
    "opts": [
      "Hard-over (15° to 15°) in ≤60 seconds at half speed",
      "Hard-over while engine is stopped",
      "Hard-over in ≤28 seconds at full speed",
      "Hard-over in 10 seconds"
    ],
    "exp": "While main steering is 35° to 30° in 28s, auxiliary steering has a relaxed requirement of 60 seconds.",
    "cat": "Survey",
    "id": "T18E_065"
  },
  {
    "q": "What is the exact definition of a 'Dead Front Panel' on a Main Switchboard?",
    "a": "No live electrical conductors or uninsulated parts are accessible from the front face during normal operation",
    "opts": [
      "A panel located at the forward bow of the ship",
      "A panel that has lost all electrical power",
      "A panel painted black to indicate high voltage",
      "No live electrical conductors or uninsulated parts are accessible from the front face during normal operation"
    ],
    "exp": "The front face is 'dead' (earth potential), allowing operators to safely use insulated handles and pushbuttons.",
    "cat": "MSB",
    "id": "T18E_066"
  },
  {
    "q": "What is the critical safety interlock principle of a dead front MSB panel?",
    "a": "Without a circuit break (isolation), the panel doors cannot be opened to expose live parts",
    "opts": [
      "The breakers trip if someone walks past",
      "Without a circuit break (isolation), the panel doors cannot be opened to expose live parts",
      "The panel doors automatically lock at sea",
      "The MSB shuts down if the ECR gets too hot"
    ],
    "exp": "Mechanical interlocks force the operator to open the breaker before accessing the dangerous busbar chamber.",
    "cat": "MSB",
    "id": "T18E_067"
  },
  {
    "q": "For a 440V AC dead front panel, what is the standard test voltage applied to the insulating face to prove compliance?",
    "a": "2000V AC",
    "opts": [
      "2000V AC",
      "440V AC",
      "5000V AC",
      "1000V AC"
    ],
    "exp": "IEC 60092-302 requires the insulating barriers of a 440V dead front panel to withstand a 2000V AC dielectric test.",
    "cat": "MSB",
    "id": "T18E_068"
  },
  {
    "q": "At what DC voltage must a panel be built with dead front construction (barriers/shutters) rather than open construction?",
    "a": "Above 50V DC (Safety Extra Low Voltage)",
    "opts": [
      "Above 24V DC",
      "Above 12V DC",
      "Above 220V DC",
      "Above 50V DC (Safety Extra Low Voltage)"
    ],
    "exp": "Voltages above 50V DC pose a lethal shock hazard and require full dead-front insulating protection.",
    "cat": "MSB",
    "id": "T18E_069"
  },
  {
    "q": "What is the minimum working clearance required in front of the MSB?",
    "a": "0.6 metres",
    "opts": [
      "0.3 metres",
      "1.0 metres",
      "1.5 metres",
      "0.6 metres"
    ],
    "exp": "SOLAS II-1/45.5 mandates at least 0.6m of unobstructed space to allow safe operation and emergency escape.",
    "cat": "MSB",
    "id": "T18E_070"
  },
  {
    "q": "What rating of insulating rubber mat is required in front of a 440V MSB?",
    "a": "Minimum Class 2 mat (rated for 17,000V AC)",
    "opts": [
      "Minimum Class 2 mat (rated for 17,000V AC)",
      "Class 00 mat (rated 500V)",
      "Class 0 mat (rated 1000V)",
      "A standard anti-slip rubber mat"
    ],
    "exp": "A Class 2 mat ensures complete isolation from the steel deck even during severe high-voltage fault transients.",
    "cat": "MSB",
    "id": "T18E_071"
  },
  {
    "q": "Why is the MSB frame bonded to the ship's hull with a heavy copper cable?",
    "a": "To provide a low-resistance path for fault currents to safely return and operate protection devices",
    "opts": [
      "To serve as a radio antenna ground",
      "To provide a low-resistance path for fault currents to safely return and operate protection devices",
      "To prevent static electricity from shocking the crew",
      "To power the ICCP system"
    ],
    "exp": "Equipment earthing ensures that if a live wire touches the metal MSB frame, the resulting high fault current immediately trips the breaker.",
    "cat": "MSB",
    "id": "T18E_072"
  },
  {
    "q": "What does the Earth Fault Indicator (Insulation Monitoring Device) do on a 440V insulated neutral MSB?",
    "a": "It gives an alarm on the first earth fault without tripping the supply",
    "opts": [
      "It neutralizes the fault using a capacitor",
      "It instantly trips the main generators",
      "It gives an alarm on the first earth fault without tripping the supply",
      "It isolates the faulty phase automatically"
    ],
    "exp": "Marine 440V systems are ungrounded. A single earth fault causes an alarm (allowing repairs) rather than a blackout.",
    "cat": "MSB",
    "id": "T18E_073"
  },
  {
    "q": "At what typical resistance value will the 440V insulation monitoring device trigger an earth fault alarm?",
    "a": "25–50 kΩ",
    "opts": [
      "1–5 Ω",
      "25–50 kΩ",
      "1 MΩ",
      "100 MΩ"
    ],
    "exp": "When insulation degrades below 50kΩ, the IMD detects the leakage current and triggers an audible/visual alarm on the MSB.",
    "cat": "MSB",
    "id": "T18E_074"
  },
  {
    "q": "What is the primary function of the Bus Tie Breaker interlock on the MSB?",
    "a": "Prevents closing the bus tie when generators on separate sections are running to avoid unsynchronized paralleling",
    "opts": [
      "Locks the MSB doors during rough weather",
      "Automatically closes when load is high",
      "Prevents closing the bus tie when generators on separate sections are running to avoid unsynchronized paralleling",
      "Prevents the emergency generator from starting"
    ],
    "exp": "If two unsynchronized live bus sections are tied together, the resulting massive circulating currents would cause catastrophic damage.",
    "cat": "MSB",
    "id": "T18E_075"
  },
  {
    "q": "Why are physical safety barriers or gates installed at the forward and aft ends of the MSB walkway?",
    "a": "To prevent accidental entry by non-working personnel",
    "opts": [
      "To act as heat shields in case of fire",
      "To prevent accidental entry by non-working personnel",
      "To stop water from flooding the MSB",
      "To store logbooks and tools"
    ],
    "exp": "Barriers physically demarcate the high-voltage restricted area, keeping unauthorized crew away from danger.",
    "cat": "MSB",
    "id": "T18E_076"
  },
  {
    "q": "If the aft bulkhead door swings open into the 0.6m MSB clearance zone, what must be done to comply with regulations?",
    "a": "The door must be redesigned to open outward or a physical stop must be fitted",
    "opts": [
      "The door must be redesigned to open outward or a physical stop must be fitted",
      "The clearance rule is waived for doors",
      "A warning sign must be placed on the door",
      "The MSB must be moved forward"
    ],
    "exp": "An inward-swinging door could trap or crush an operator working at the MSB, violating the escape route requirement.",
    "cat": "MSB",
    "id": "T18E_077"
  },
  {
    "q": "What should the ETO inspect on the MSB insulating mat during routine rounds?",
    "a": "Check for cuts, holes, or oil contamination which compromise its dielectric strength",
    "opts": [
      "Check that it is painted red",
      "Measure its exact length with a tape",
      "Check for cuts, holes, or oil contamination which compromise its dielectric strength",
      "Verify it smells like fresh rubber"
    ],
    "exp": "Even a tiny pinhole or oil degradation can allow lethal high voltage to arc through the mat to the deck.",
    "cat": "MSB",
    "id": "T18E_078"
  },
  {
    "q": "Why does the MSB room require dedicated mechanical ventilation?",
    "a": "To remove the significant heat generated by high-current busbars and switchgear",
    "opts": [
      "To keep the operators from sweating",
      "To remove the significant heat generated by high-current busbars and switchgear",
      "To supply oxygen to the generators",
      "To prevent explosive hydrogen gas buildup"
    ],
    "exp": "Thousands of amps flowing through copper bars generate resistive heating (I²R) that will derate components if not exhausted.",
    "cat": "MSB",
    "id": "T18E_079"
  },
  {
    "q": "What type of fire detector is mandatory in the MSB room?",
    "a": "A fixed heat or multi-sensor type detector",
    "opts": [
      "A water sprinkler nozzle",
      "A carbon monoxide detector",
      "A fixed heat or multi-sensor type detector",
      "A manual pull station only"
    ],
    "exp": "Early detection of electrical overheating or arcing is critical before a catastrophic switchboard fire erupts.",
    "cat": "MSB",
    "id": "T18E_080"
  },
  {
    "q": "What does it mean if the earth fault indicator shows 0 kΩ?",
    "a": "There is a 'dead short' (solid earth fault) between one live phase and the ship's hull",
    "opts": [
      "The generator has tripped",
      "The insulation is perfectly healthy",
      "The measuring instrument is broken",
      "There is a 'dead short' (solid earth fault) between one live phase and the ship's hull"
    ],
    "exp": "Zero ohms means the phase conductor is in direct metal-to-metal contact with the hull steel.",
    "cat": "MSB",
    "id": "T18E_081"
  },
  {
    "q": "When is it acceptable for an operator to contact live busbars inside the MSB?",
    "a": "Never. All circuits must be isolated, locked out, and proven dead before access",
    "opts": [
      "If the ship is in dry dock",
      "If the Chief Engineer is watching",
      "If wearing rubber gloves",
      "Never. All circuits must be isolated, locked out, and proven dead before access"
    ],
    "exp": "Routine live working on main busbars is prohibited. Complete isolation is mandatory for internal MSB maintenance.",
    "cat": "MSB",
    "id": "T18E_082"
  },
  {
    "q": "What happens if a second earth fault occurs on a different phase in a 440V insulated neutral system?",
    "a": "It creates a massive phase-to-phase short circuit through the hull, instantly tripping both circuit breakers",
    "opts": [
      "The system continues to run normally with a louder alarm",
      "The voltage doubles",
      "The neutral cable melts",
      "It creates a massive phase-to-phase short circuit through the hull, instantly tripping both circuit breakers"
    ],
    "exp": "While a single fault is tolerated, a double fault completes a short circuit path through the steel deck, causing a massive fault current.",
    "cat": "MSB",
    "id": "T18E_083"
  },
  {
    "q": "What is the primary advantage of the 'Dead Front' design during a massive short-circuit arc flash event inside the MSB?",
    "a": "The heavy metal barriers contain the explosive plasma and molten copper, protecting the operator in front",
    "opts": [
      "It generates foam to extinguish the fire",
      "It prevents the arc from happening entirely",
      "It instantly disconnects the ship's battery",
      "The heavy metal barriers contain the explosive plasma and molten copper, protecting the operator in front"
    ],
    "exp": "Dead front construction forces the explosive energy of an arc flash to vent upwards or backwards, away from the human operator.",
    "cat": "MSB",
    "id": "T18E_084"
  },
  {
    "q": "What tool is used to ensure MSB busbar joints do not loosen over time due to ship vibration?",
    "a": "A calibrated torque wrench",
    "opts": [
      "A calibrated torque wrench",
      "A pneumatic impact drill",
      "Locktite glue",
      "A standard crescent wrench"
    ],
    "exp": "Bolts must be torqued to exact manufacturer specifications to maintain low contact resistance without crushing the copper.",
    "cat": "MSB",
    "id": "T18E_085"
  },
  {
    "q": "What component physically separates the different voltage sections (e.g., 440V, 220V, 24V) within the MSB?",
    "a": "Internal metal partition bulkheads",
    "opts": [
      "Internal metal partition bulkheads",
      "Rubber curtains",
      "Glass windows",
      "Air gaps only"
    ],
    "exp": "Segregation prevents a high-voltage arc or fault from cascading into the sensitive low-voltage control sections.",
    "cat": "MSB",
    "id": "T18E_086"
  },
  {
    "q": "Why are insulating handrails sometimes fitted on the front of the MSB?",
    "a": "To prevent a person from falling against the panel in rough seas while providing a non-conductive grip",
    "opts": [
      "To act as a backup earth connection",
      "To prevent a person from falling against the panel in rough seas while providing a non-conductive grip",
      "To hang tools and cables",
      "For decorative purposes"
    ],
    "exp": "In heavy rolling, the operator can hold the rail for stability without risk of electrical shock.",
    "cat": "MSB",
    "id": "T18E_087"
  },
  {
    "q": "If the earth fault meter reads 100 MΩ, what is the condition of the MSB insulation?",
    "a": "Excellent; the system is highly insulated from earth",
    "opts": [
      "Excellent; the system is highly insulated from earth",
      "The meter is disconnected",
      "Dangerous; a short circuit is imminent",
      "Marginal; requires immediate cleaning"
    ],
    "exp": "High resistance to ground means no current is leaking from the live phases to the ship's hull.",
    "cat": "MSB",
    "id": "T18E_088"
  },
  {
    "q": "What is the danger of carbon dust accumulation on the insulators supporting the MSB busbars?",
    "a": "It creates a conductive tracking path that can lead to an explosive arc flash between phases",
    "opts": [
      "It creates a conductive tracking path that can lead to an explosive arc flash between phases",
      "It causes the busbars to rust",
      "It makes the busbars spin faster",
      "It reduces the physical weight of the panel"
    ],
    "exp": "Carbon is conductive. When it coats a plastic/ceramic insulator, high voltage eventually arcs across the dust layer.",
    "cat": "MSB",
    "id": "T18E_089"
  },
  {
    "q": "What is the purpose of the 'Emergency Stop' buttons located on the front of the MSB?",
    "a": "To instantly trip specific heavy consumers or fuel pumps in case of emergency",
    "opts": [
      "To instantly trip specific heavy consumers or fuel pumps in case of emergency",
      "To turn off the MSB room lights",
      "To stop the main propeller",
      "To disconnect the ICCP system"
    ],
    "exp": "These buttons directly actuate the shunt trips on critical circuit breakers to halt machinery instantly.",
    "cat": "MSB",
    "id": "T18E_090"
  },
  {
    "q": "Why are color-coded mimic lines often painted on the front of a dead-front MSB?",
    "a": "To visually represent the invisible busbar layout and breaker connections behind the solid panels",
    "opts": [
      "To indicate where to drill holes",
      "To make the panel look modern",
      "To act as a secondary grounding wire",
      "To visually represent the invisible busbar layout and breaker connections behind the solid panels"
    ],
    "exp": "Mimic diagrams help the operator understand the electrical topology (e.g., split bus, shore connection) at a glance.",
    "cat": "MSB",
    "id": "T18E_091"
  },
  {
    "q": "What is meant by 'Draw-out' or 'Rack-out' execution of an ACB in the MSB?",
    "a": "The ACB is mounted on a sliding chassis, allowing it to be physically withdrawn from the live busbars for safe maintenance",
    "opts": [
      "The ACB contains a vacuum chamber",
      "The ACB is welded permanently to the wall",
      "The ACB can only be operated remotely",
      "The ACB is mounted on a sliding chassis, allowing it to be physically withdrawn from the live busbars for safe maintenance"
    ],
    "exp": "This mechanical isolation feature is critical for marine switchboards, allowing safe breaker replacement without blacking out the whole bus.",
    "cat": "MSB",
    "id": "T18E_092"
  },
  {
    "q": "What safety device prevents an operator from racking in an ACB while it is in the 'ON' (closed) position?",
    "a": "A mechanical interlock linked to the closing mechanism",
    "opts": [
      "A padlock on the door",
      "A mechanical interlock linked to the closing mechanism",
      "A software timer",
      "A high-temperature alarm"
    ],
    "exp": "Racking a closed breaker would draw a massive open-air arc as the primary contacts engage. The interlock forces it to trip first.",
    "cat": "MSB",
    "id": "T18E_093"
  },
  {
    "q": "How does SOLAS regulate the location of the MSB relative to the main generators?",
    "a": "The MSB should be placed as close as practicable to the main generators",
    "opts": [
      "It must be separated by a watertight bulkhead",
      "It must be placed on the bridge",
      "It must be inside the cargo hold",
      "The MSB should be placed as close as practicable to the main generators"
    ],
    "exp": "Minimizing cable length reduces heavy power losses and improves system fault response.",
    "cat": "MSB",
    "id": "T18E_094"
  },
  {
    "q": "What action does the 'Safety Switch' (Lockout Relay) perform on an ACB trip circuit?",
    "a": "It opens the supply to the Under-Voltage Trip (UVT) coil, causing the ACB to trip immediately and safely lock out",
    "opts": [
      "It closes the ACB remotely",
      "It tests the overcurrent relay",
      "It recharges the closing spring",
      "It opens the supply to the Under-Voltage Trip (UVT) coil, causing the ACB to trip immediately and safely lock out"
    ],
    "exp": "De-energizing the UVT coil removes the holding force on the latch, ensuring the breaker fails-safe to the OPEN position.",
    "cat": "MSB",
    "id": "T18E_095"
  },
  {
    "q": "What type of coil is the Under-Voltage Trip (UVT) on a generator ACB?",
    "a": "A continuous-duty electromagnetic coil",
    "opts": [
      "A continuous-duty electromagnetic coil",
      "A momentary pulse coil",
      "A permanent magnet",
      "A thermal bimetallic strip"
    ],
    "exp": "The UVT is constantly energized by generator voltage to hold the breaker latch. If voltage fails, it releases the latch.",
    "cat": "ACB",
    "id": "T18E_096"
  },
  {
    "q": "At what voltage threshold will the UVT coil typically release the latch and trip the ACB?",
    "a": "70–80% of rated voltage",
    "opts": [
      "50–60% of rated voltage",
      "70–80% of rated voltage",
      "10–20% of rated voltage",
      "95–100% of rated voltage"
    ],
    "exp": "If voltage drops below 308-352V (on a 440V system), the electromagnetic force is overcome by the spring, tripping the breaker.",
    "cat": "ACB",
    "id": "T18E_097"
  },
  {
    "q": "What is the primary purpose of the Under-Voltage Trip (UVT) on a generator ACB?",
    "a": "To protect the busbars from being supplied with abnormally low voltage, which would cause motors to draw excessive current and stall",
    "opts": [
      "To protect the busbars from being supplied with abnormally low voltage, which would cause motors to draw excessive current and stall",
      "To prevent reverse power flow",
      "To start the emergency generator",
      "To measure the generator frequency"
    ],
    "exp": "Low voltage (brownout) destroys induction motors by causing massive current draw. UVT isolates the bad generator.",
    "cat": "ACB",
    "id": "T18E_098"
  },
  {
    "q": "How is the Overcurrent Trip (OCR) on an ACB tested during a survey?",
    "a": "By using a secondary injection test set to inject 150%, 200%, and 600% of rated current into the relay and timing the trip",
    "opts": [
      "By shorting the main busbars with a crowbar",
      "By using a secondary injection test set to inject 150%, 200%, and 600% of rated current into the relay and timing the trip",
      "By increasing the UVT voltage",
      "By running the generator at double speed"
    ],
    "exp": "Secondary injection safely simulates massive fault currents without putting high voltage or actual heavy current through the primary bus.",
    "cat": "ACB",
    "id": "T18E_099"
  },
  {
    "q": "What does IDMT stand for regarding the overcurrent relay characteristic?",
    "a": "Inverse Definite Minimum Time",
    "opts": [
      "Internal Delay Motor Trip",
      "Instantaneous Direct Maximum Trip",
      "Inverse Definite Minimum Time",
      "Integrated Digital Measuring Technology"
    ],
    "exp": "IDMT means the higher the overcurrent, the faster it trips (Inverse), but it has a fixed minimum delay to prevent nuisance trips.",
    "cat": "ACB",
    "id": "T18E_100"
  },
  {
    "q": "What is the difference between racking an ACB to the 'TEST' position versus the 'WITHDRAWN/ISOLATED' position?",
    "a": "In TEST, control circuits remain connected for relay testing; in ISOLATED, both main and control circuits are fully disconnected",
    "opts": [
      "There is no difference; they mean the same thing",
      "TEST is for AC, ISOLATED is for DC",
      "In TEST, control circuits remain connected for relay testing; in ISOLATED, both main and control circuits are fully disconnected",
      "In TEST, the main busbars are still live; in ISOLATED, they are dead"
    ],
    "exp": "TEST position allows safe secondary injection testing because the massive primary stabs are disconnected from the bus.",
    "cat": "ACB",
    "id": "T18E_101"
  },
  {
    "q": "Why must the stored spring energy of an ACB be discharged before opening the breaker housing for maintenance?",
    "a": "To prevent severe physical injury from the mechanism snapping shut accidentally",
    "opts": [
      "To prevent severe physical injury from the mechanism snapping shut accidentally",
      "To cool down the contacts",
      "To reset the digital display",
      "To stop electrical sparks"
    ],
    "exp": "The closing springs hold massive mechanical force. If triggered while hands are inside, it can crush fingers or hands.",
    "cat": "ACB",
    "id": "T18E_102"
  },
  {
    "q": "How is the Under-Voltage Trip (UVT) physically tested by the ETO or surveyor?",
    "a": "By using a variac or test switch to slowly reduce the voltage supplied to the coil until it trips",
    "opts": [
      "By physically hitting the relay with a hammer",
      "By using a variac or test switch to slowly reduce the voltage supplied to the coil until it trips",
      "By reversing the generator rotation",
      "By injecting high current into the CT"
    ],
    "exp": "Reducing the supply voltage precisely identifies the drop-out threshold of the holding coil.",
    "cat": "ACB",
    "id": "T18E_103"
  },
  {
    "q": "What is the function of the instantaneous element on an overcurrent relay?",
    "a": "It trips the ACB immediately with no intentional delay for massive short-circuit currents (e.g., 600-800% rated)",
    "opts": [
      "It trips the ACB immediately with no intentional delay for massive short-circuit currents (e.g., 600-800% rated)",
      "It overrides all other alarms",
      "It starts the standby generator instantly",
      "It trips on slight overloads after 10 minutes"
    ],
    "exp": "While IDMT handles moderate overloads slowly, a dead short requires instant clearing (<0.1s) to prevent fire and explosion.",
    "cat": "ACB",
    "id": "T18E_104"
  },
  {
    "q": "What is the difference between a Shunt Trip Coil and a UVT Coil?",
    "a": "Shunt trip is momentarily energized to actively push the trip latch; UVT is continuously energized and releases the latch if power fails",
    "opts": [
      "Shunt trip protects against low voltage, UVT protects against high current",
      "Shunt trip is for DC, UVT is for AC",
      "Shunt trip is momentarily energized to actively push the trip latch; UVT is continuously energized and releases the latch if power fails",
      "They are exactly the same thing"
    ],
    "exp": "UVT fails-safe on power loss. Shunt requires power to execute the trip command.",
    "cat": "ACB",
    "id": "T18E_105"
  },
  {
    "q": "If the UVT coil burns out and creates an open circuit, what happens to the ACB?",
    "a": "The ACB trips immediately and cannot be closed again until the coil is replaced",
    "opts": [
      "The ACB switches to emergency battery power",
      "The generator speeds up to 120%",
      "The ACB trips immediately and cannot be closed again until the coil is replaced",
      "The ACB stays closed permanently"
    ],
    "exp": "Since the holding force is gone, the spring pulls the breaker open. The fail-safe design prevents operation with a broken safety coil.",
    "cat": "ACB",
    "id": "T18E_106"
  },
  {
    "q": "Where are the secondary injection points (CT test terminals) located for ACB testing?",
    "a": "On the secondary control wiring block, accessible when the ACB is in the TEST position",
    "opts": [
      "On the ship's outer hull",
      "Directly on the main copper busbars",
      "Inside the main engine control room console",
      "On the secondary control wiring block, accessible when the ACB is in the TEST position"
    ],
    "exp": "The TEST position aligns sliding secondary contacts so instruments can inject test currents safely without primary power.",
    "cat": "ACB",
    "id": "T18E_107"
  },
  {
    "q": "During secondary injection testing, why must the ACB be racked out from the CONNECTED position?",
    "a": "To ensure test currents do not back-feed into live busbars or loads, which is extremely dangerous",
    "opts": [
      "Because the surveyor needs to see the back of the panel",
      "Because the test set requires 440V to operate",
      "To allow the springs to charge",
      "To ensure test currents do not back-feed into live busbars or loads, which is extremely dangerous"
    ],
    "exp": "Testing in the CONNECTED position would inject current into the whole ship network and could cause lethal voltage step-ups in the CTs.",
    "cat": "ACB",
    "id": "T18E_108"
  },
  {
    "q": "What happens if you open the manual safety lockout switch on the ACB panel?",
    "a": "It breaks the circuit to the UVT coil, instantly tripping the ACB and safely locking it out",
    "opts": [
      "It bypasses all safety trips for emergency running",
      "It closes the bus tie breaker",
      "It turns off the MSB room lights",
      "It breaks the circuit to the UVT coil, instantly tripping the ACB and safely locking it out"
    ],
    "exp": "This is the primary method an ETO uses to positively lock out a generator before maintenance.",
    "cat": "ACB",
    "id": "T18E_109"
  },
  {
    "q": "What parameter is timed with a stopwatch during the secondary injection test?",
    "a": "The time delay from the moment the fault current is injected until the ACB mechanism physically trips",
    "opts": [
      "The time it takes to charge the closing spring",
      "The time delay from the moment the fault current is injected until the ACB mechanism physically trips",
      "The time the alarm bell rings",
      "The time it takes for the generator to slow down"
    ],
    "exp": "The surveyor compares this measured physical trip time against the theoretical graph (curve) provided by the relay manufacturer.",
    "cat": "ACB",
    "id": "T18E_110"
  },
  {
    "q": "Why is 600% rated current commonly injected during ACB tests?",
    "a": "To verify the operation of the instantaneous trip element for short-circuit protection",
    "opts": [
      "To warm up the ACB contacts",
      "To verify the operation of the instantaneous trip element for short-circuit protection",
      "To test the reverse power relay",
      "To check the under-voltage dropout"
    ],
    "exp": "600% is typical of a dead short. The relay must ignore its time delay and fire the instantaneous trip instantly (<0.1s).",
    "cat": "ACB",
    "id": "T18E_111"
  },
  {
    "q": "What happens to the CT (Current Transformer) secondary circuit during secondary injection testing?",
    "a": "The secondary injection set takes over, feeding test current directly into the relay while isolating the actual CT",
    "opts": [
      "It is connected to the 440V bus",
      "The secondary injection set takes over, feeding test current directly into the relay while isolating the actual CT",
      "It is grounded to the hull",
      "It is left open-circuited"
    ],
    "exp": "The test set acts as a 'fake' CT, simulating the high fault currents the relay would see during a real crisis.",
    "cat": "ACB",
    "id": "T18E_112"
  },
  {
    "q": "Which of the following relays uses BOTH a Current Transformer (CT) and a Voltage Transformer (VT)?",
    "a": "Reverse Power Relay",
    "opts": [
      "Under-Frequency Relay",
      "Overcurrent Relay",
      "Under-Voltage Relay",
      "Reverse Power Relay"
    ],
    "exp": "Reverse power is a directional watt-metric measurement. Power (Watts) = Volts x Amps, requiring inputs from both VT and CT.",
    "cat": "ACB",
    "id": "T18E_113"
  },
  {
    "q": "What is the function of the arc chutes on an ACB?",
    "a": "To stretch, cool, and split the electrical arc into smaller segments to extinguish it rapidly during a trip",
    "opts": [
      "To stretch, cool, and split the electrical arc into smaller segments to extinguish it rapidly during a trip",
      "To measure the arc voltage",
      "To guide the operator's hands safely",
      "To store closing spring energy"
    ],
    "exp": "When contacts open under 10,000 Amps of fault current, the resulting plasma arc must be quenched instantly by the steel splitters in the chute.",
    "cat": "ACB",
    "id": "T18E_114"
  },
  {
    "q": "How does the 'Anti-Pumping' relay protect the ACB?",
    "a": "It prevents the ACB from repeatedly attempting to close and tripping continuously if a fault is present and the close button is held",
    "opts": [
      "It stops the contacts from bouncing",
      "It stops water from entering the MSB",
      "It prevents the ACB from repeatedly attempting to close and tripping continuously if a fault is present and the close button is held",
      "It prevents the fuel pump from over-pressurizing"
    ],
    "exp": "Without anti-pumping, a stuck 'close' command on a faulted circuit would cause the breaker to machine-gun (close-trip-close-trip) until it exploded.",
    "cat": "ACB",
    "id": "T18E_115"
  },
  {
    "q": "What defines the 'Icu' (Ultimate Breaking Capacity) rating of an ACB?",
    "a": "The maximum short-circuit current the breaker can safely interrupt once, after which it may require replacement",
    "opts": [
      "The maximum short-circuit current the breaker can safely interrupt once, after which it may require replacement",
      "The current drawn by the UVT coil",
      "The normal full-load current of the generator",
      "The minimum current required to trip the breaker"
    ],
    "exp": "Icu is the absolute survival limit. The breaker successfully clears the fault without exploding, but its contacts and chutes may be destroyed.",
    "cat": "ACB",
    "id": "T18E_116"
  },
  {
    "q": "What does a 'Ductor Test' measure on an ACB?",
    "a": "The micro-ohm contact resistance across the closed main contacts",
    "opts": [
      "The megohm insulation resistance of the casing",
      "The voltage drop of the UVT coil",
      "The micro-ohm contact resistance across the closed main contacts",
      "The speed of the closing spring"
    ],
    "exp": "A micro-ohmmeter verifies that the massive silver-tungsten contacts have near-zero resistance (e.g. <50 µΩ) to prevent overheating.",
    "cat": "ACB",
    "id": "T18E_117"
  },
  {
    "q": "If the main contacts of an ACB are heavily pitted, what will a Ductor Test likely show?",
    "a": "A high resistance reading (e.g., >100 µΩ), indicating a risk of overheating under heavy load",
    "opts": [
      "A high voltage reading",
      "A zero resistance reading",
      "A low insulation reading",
      "A high resistance reading (e.g., >100 µΩ), indicating a risk of overheating under heavy load"
    ],
    "exp": "Pitted contacts have less surface area touching. Higher resistance means I²R losses create massive heat, melting the ACB.",
    "cat": "ACB",
    "id": "T18E_118"
  },
  {
    "q": "What is the purpose of the 'Arcing Contacts' in an ACB?",
    "a": "They make first and break last, taking the brunt of the destructive arc to keep the main contacts clean",
    "opts": [
      "They provide a backup connection if main contacts fail",
      "They make first and break last, taking the brunt of the destructive arc to keep the main contacts clean",
      "They measure the arc current",
      "They generate arcs for welding"
    ],
    "exp": "Arcing contacts are sacrificial (often carbon/copper-tungsten). By taking the spark, the silver main contacts remain smooth and low-resistance.",
    "cat": "ACB",
    "id": "T18E_119"
  },
  {
    "q": "During ACB maintenance, why should you NEVER use emery cloth to clean the silver-plated main contacts?",
    "a": "Emery particles embed in the soft silver, acting as insulators and causing rapid overheating",
    "opts": [
      "It will make the contacts too shiny",
      "It creates static electricity",
      "Emery particles embed in the soft silver, acting as insulators and causing rapid overheating",
      "It magnetizes the contacts"
    ],
    "exp": "Only fine glass-paper or specialized contact cleaners should be used, followed by a thorough wipe with lint-free cloth.",
    "cat": "ACB",
    "id": "T18E_120"
  },
  {
    "q": "What indicates that an ACB's closing spring is fully charged?",
    "a": "A mechanical indicator flag on the front panel changes from 'DISCHARGED' to 'CHARGED'",
    "opts": [
      "The UVT coil drops out",
      "The breaker automatically closes",
      "A mechanical indicator flag on the front panel changes from 'DISCHARGED' to 'CHARGED'",
      "A loud ringing bell sounds"
    ],
    "exp": "The spring motor hums and then stops, flipping the yellow/white indicator flag to show it is ready for a close command.",
    "cat": "ACB",
    "id": "T18E_121"
  },
  {
    "q": "How is an ACB manually closed if the electrical spring-charging motor fails?",
    "a": "By pumping the manual charging handle on the front panel until the spring latches 'CHARGED', then pressing the mechanical CLOSE button",
    "opts": [
      "By pushing the contacts together with a screwdriver",
      "By pumping the manual charging handle on the front panel until the spring latches 'CHARGED', then pressing the mechanical CLOSE button",
      "By applying 24V DC to the shunt trip",
      "It cannot be closed manually"
    ],
    "exp": "All marine generator ACBs feature a heavy lever to manually compress the closing springs in case of control power failure.",
    "cat": "ACB",
    "id": "T18E_122"
  },
  {
    "q": "What does a 'Trip Free' mechanism ensure on an ACB?",
    "a": "The breaker is free to trip instantly on a fault even if the operator is forcefully holding the mechanical close button down",
    "opts": [
      "The breaker trips freely without drawing an arc",
      "The breaker is free to trip instantly on a fault even if the operator is forcefully holding the mechanical close button down",
      "It trips without needing any voltage",
      "The trips can be bypassed for free"
    ],
    "exp": "This safety feature ensures a human operator cannot override a massive short-circuit trip by jamming the handle closed.",
    "cat": "ACB",
    "id": "T18E_123"
  },
  {
    "q": "What is the typical setting for a Reverse Power Trip on a marine diesel generator?",
    "a": "5–15% of rated generator KW",
    "opts": [
      "1–2% of rated generator KW",
      "5–15% of rated generator KW",
      "50–60% of rated generator KW",
      "100–110% of rated generator KW"
    ],
    "exp": "5-15% reverse power is sufficient to detect that the engine has lost fuel and is being driven by the busbars.",
    "cat": "Trips",
    "id": "T18E_124"
  },
  {
    "q": "What catastrophic mechanical failure does the Reverse Power Relay prevent?",
    "a": "The diesel engine being motored without fuel, causing pistons and valves to seize due to lack of combustion lubrication",
    "opts": [
      "The busbars melting from reverse voltage",
      "The diesel engine being motored without fuel, causing pistons and valves to seize due to lack of combustion lubrication",
      "The ACB exploding from overcurrent",
      "The generator spinning backwards and unwinding the coils"
    ],
    "exp": "Without fuel combustion to provide lubricating blow-by and heat balance, a motored engine quickly scores cylinder liners and seizes.",
    "cat": "Trips",
    "id": "T18E_125"
  },
  {
    "q": "Why does the Reverse Power Relay have an intentional time delay (typically 1–5 seconds)?",
    "a": "To prevent nuisance tripping during synchronizing transients or sudden load swings where momentary reverse power may occur",
    "opts": [
      "To prevent nuisance tripping during synchronizing transients or sudden load swings where momentary reverse power may occur",
      "To allow the engine to restart automatically",
      "To give the ETO time to manually trip the breaker",
      "Because the relay takes 5 seconds to measure the power"
    ],
    "exp": "When paralleling, slight governor hunting causes brief power reversals. The delay ensures only sustained motoring causes a trip.",
    "cat": "Trips",
    "id": "T18E_126"
  },
  {
    "q": "How is the Reverse Power Trip most practically tested AT SEA?",
    "a": "Run two generators in parallel, slowly reduce fuel/governor on one until its KW drops to zero and reverses, observing the trip",
    "opts": [
      "Swap the phase cables on the generator output",
      "Run two generators in parallel, slowly reduce fuel/governor on one until its KW drops to zero and reverses, observing the trip",
      "Inject a reverse current signal from a battery",
      "Press the 'Test' button on the MSB panel"
    ],
    "exp": "This is a real-world functional test. The active generator drives the disabled one, proving the watt-metric relay functions perfectly.",
    "cat": "Trips",
    "id": "T18E_127"
  },
  {
    "q": "How is the Reverse Power Trip tested during a drydock survey when engines cannot be run?",
    "a": "By using a relay test set to inject phase-shifted secondary current and voltage signals to simulate reverse power flow",
    "opts": [
      "By using a relay test set to inject phase-shifted secondary current and voltage signals to simulate reverse power flow",
      "It cannot be tested in drydock",
      "By shorting the VT and CT together",
      "By spinning the generator backward with a crane"
    ],
    "exp": "Secondary injection simulates the V-I phase reversal that occurs during motoring, proving the relay logic without running the engine.",
    "cat": "Trips",
    "id": "T18E_128"
  },
  {
    "q": "At what threshold does the Over-Speed Trip activate on a Diesel Generator (Auxiliary Engine)?",
    "a": "10–15% above rated RPM",
    "opts": [
      "10–15% above rated RPM",
      "50% above rated RPM",
      "2–5% above rated RPM",
      "25–30% above rated RPM"
    ],
    "exp": "For a 720 RPM engine, tripping around 792–828 RPM prevents connecting rods from shattering due to excessive centrifugal forces.",
    "cat": "Trips",
    "id": "T18E_129"
  },
  {
    "q": "What is the procedure to test the Over-Speed Trip on a Diesel Generator?",
    "a": "Run unloaded in manual mode, slowly increase the governor speed setpoint above rated RPM until the mechanical fly-weight activates",
    "opts": [
      "Suddenly drop full load off the generator and watch it speed up",
      "Run unloaded in manual mode, slowly increase the governor speed setpoint above rated RPM until the mechanical fly-weight activates",
      "Disconnect the governor linkage while running at full load",
      "Inject a high frequency signal into the ECU"
    ],
    "exp": "Gradually raising the speed setpoint is the safest way to verify the mechanical centrifugal trip pushes the fuel rack to zero.",
    "cat": "Trips",
    "id": "T18E_130"
  },
  {
    "q": "Why is the Main Engine Over-Speed Trip NOT tested by physically overspeeding the engine during normal operation?",
    "a": "The massive mechanical forces could cause catastrophic engine failure",
    "opts": [
      "The massive mechanical forces could cause catastrophic engine failure",
      "Because the propeller would fall off",
      "Because it is illegal under MARPOL",
      "Because the ship would go too fast"
    ],
    "exp": "Physically overspeeding a huge 2-stroke engine risks total destruction. Instead, it is simulated electronically.",
    "cat": "Trips",
    "id": "T18E_131"
  },
  {
    "q": "How is the Main Engine Over-Speed Trip tested for the surveyor?",
    "a": "By using the Engine Management System (EMS) simulation function to electronically trigger the over-speed signal and verify fuel shut-off",
    "opts": [
      "By using the Engine Management System (EMS) simulation function to electronically trigger the over-speed signal and verify fuel shut-off",
      "By disconnecting the tachometer completely",
      "By physically overspeeding the engine in reverse",
      "By lifting the propeller out of the water"
    ],
    "exp": "The simulation software tests the entire logic chain—from EMS to the fuel puncture valves—without risking engine damage.",
    "cat": "Trips",
    "id": "T18E_132"
  },
  {
    "q": "What happens when the Under-Frequency relay triggers a 'Preferential Trip' at Stage 2 (e.g., 47Hz)?",
    "a": "Non-essential loads are shed to reduce demand, allowing the prime mover to recover speed and frequency without blacking out",
    "opts": [
      "The emergency generator starts immediately",
      "The AVR increases voltage to compensate",
      "Non-essential loads are shed to reduce demand, allowing the prime mover to recover speed and frequency without blacking out",
      "The generator ACB trips immediately"
    ],
    "exp": "Shedding galley and A/C loads reduces the mechanical burden on the struggling diesel engine, saving the ship from a total blackout.",
    "cat": "Trips",
    "id": "T18E_133"
  },
  {
    "q": "What causes the system frequency to drop, triggering the under-frequency relay?",
    "a": "The generator is severely overloaded, and the prime mover lacks the torque to maintain synchronous speed",
    "opts": [
      "The cooling water is too cold",
      "The AVR is supplying too much voltage",
      "The reverse power relay has failed",
      "The generator is severely overloaded, and the prime mover lacks the torque to maintain synchronous speed"
    ],
    "exp": "Frequency is locked to engine RPM. If load exceeds engine power, the engine slows down, pulling frequency down with it.",
    "cat": "Trips",
    "id": "T18E_134"
  },
  {
    "q": "What are typical time delays for Stage 1, Stage 2, and Stage 3 Preferential Tripping?",
    "a": "Stage 1: 5s, Stage 2: 15s, Stage 3: 25s",
    "opts": [
      "Stage 1: 1min, Stage 2: 2min, Stage 3: 3min",
      "All stages trip instantly at 47Hz",
      "Stage 1: 1s, Stage 2: 2s, Stage 3: 3s",
      "Stage 1: 5s, Stage 2: 15s, Stage 3: 25s"
    ],
    "exp": "Sequential shedding (cascading) prevents dumping all loads at once and gives the governor time to react after each stage.",
    "cat": "Trips",
    "id": "T18E_135"
  },
  {
    "q": "Which loads are strictly EXEMPT from Preferential Tripping?",
    "a": "Essential safety loads like steering gear, nav lights, GMDSS, and emergency fire pumps",
    "opts": [
      "Bow thruster and cargo winches",
      "Accommodation lighting and water heaters",
      "Essential safety loads like steering gear, nav lights, GMDSS, and emergency fire pumps",
      "Air conditioning compressors and galley ovens"
    ],
    "exp": "Safety-critical systems must remain powered until the absolute last moment before total blackout.",
    "cat": "Trips",
    "id": "T18E_136"
  },
  {
    "q": "At what setting does the Over-Voltage Trip typically activate?",
    "a": "110–115% of rated voltage",
    "opts": [
      "200% of rated voltage",
      "130–150% of rated voltage",
      "110–115% of rated voltage",
      "102–105% of rated voltage"
    ],
    "exp": "An AVR failure (runaway excitation) pushes voltage too high, threatening to fry all connected electronics. The relay trips the ACB to save the ship.",
    "cat": "Trips",
    "id": "T18E_137"
  },
  {
    "q": "What happens to ship cooling pumps if frequency drops to 45Hz on a 50Hz system without the ACB tripping?",
    "a": "Pump motor speed drops 10%, drastically reducing cooling water flow and risking severe main engine overheating",
    "opts": [
      "The pumps spin faster to compensate",
      "The pumps switch to emergency battery power",
      "Pump motor speed drops 10%, drastically reducing cooling water flow and risking severe main engine overheating",
      "The pumps draw zero current"
    ],
    "exp": "Induction motor speed is tied directly to frequency. A 10% drop in speed means a massive drop in centrifugal pump volume.",
    "cat": "Trips",
    "id": "T18E_138"
  },
  {
    "q": "Why is a time delay (dashpot or electronic) used on the Preferential Trip relay?",
    "a": "To prevent nuisance shedding during the brief, massive current surges of starting large motors",
    "opts": [
      "Because relays cannot operate instantly",
      "To allow the crew to finish cooking in the galley",
      "To prevent nuisance shedding during the brief, massive current surges of starting large motors",
      "To give the alarm bell time to ring"
    ],
    "exp": "Starting a thruster causes a momentary voltage/frequency dip. The delay ensures shedding only happens if the overload is sustained.",
    "cat": "Trips",
    "id": "T18E_139"
  },
  {
    "q": "If both Reverse Power and Under-Voltage trips completely fail during a prime mover failure, what is the ultimate backup protection?",
    "a": "The under-frequency relay will eventually trip as the engine slows down, or the overcurrent relay will trip if motoring draws excessive current",
    "opts": [
      "The ICCP system will shut down",
      "The under-frequency relay will eventually trip as the engine slows down, or the overcurrent relay will trip if motoring draws excessive current",
      "The MSB will explode",
      "The shore power will automatically connect"
    ],
    "exp": "As a last resort, the massive current drawn by the dragging engine will trigger the IDMT overcurrent protection, or frequency collapse will isolate it.",
    "cat": "Trips",
    "id": "T18E_140"
  },
  {
    "q": "What is the typical setting for the Earth Fault Trip on a 440V generator (if fitted with grounded neutral)?",
    "a": "10–30% of rated generator current",
    "opts": [
      "100% of rated current",
      "10–30% of rated generator current",
      "It trips on voltage, not current",
      "1–2% of rated current"
    ],
    "exp": "A neutral CT detects unbalanced phase-to-earth current. Tripping at 10-30% stops severe arcing before the phase-to-phase overcurrent trips.",
    "cat": "Trips",
    "id": "T18E_141"
  },
  {
    "q": "What is the fundamental difference between Under-Voltage and Under-Frequency conditions?",
    "a": "Under-Voltage is an AVR/excitation failure; Under-Frequency is a prime mover/governor overload issue",
    "opts": [
      "Under-Voltage only affects DC; Under-Frequency only affects AC",
      "Under-Voltage causes overspeed; Under-Frequency causes reverse power",
      "Under-Voltage is an AVR/excitation failure; Under-Frequency is a prime mover/governor overload issue",
      "There is no difference; they happen simultaneously"
    ],
    "exp": "Voltage depends on magnetic field strength (AVR). Frequency depends solely on engine RPM (Governor).",
    "cat": "Trips",
    "id": "T18E_142"
  },
  {
    "q": "Why must the overvoltage relay trip BOTH the ACB and the excitation circuit?",
    "a": "Tripping the ACB isolates the busbars, but tripping excitation stops the runaway generator from destroying its own internal windings with massive voltage",
    "opts": [
      "To save battery power",
      "To stop the diesel engine",
      "Because the AVR requires 440V to operate",
      "Tripping the ACB isolates the busbars, but tripping excitation stops the runaway generator from destroying its own internal windings with massive voltage"
    ],
    "exp": "A runaway AVR will push stator voltage to 600V+. Even if disconnected from the ship, the generator will fry its own insulation if excitation isn't killed.",
    "cat": "Trips",
    "id": "T18E_143"
  },
  {
    "q": "What is the 'NOx Technical File' checked during an electrical survey?",
    "a": "A MARPOL Annex VI document certifying the engine's emissions meet Tier I/II/III limits based on specific electronic and mechanical settings",
    "opts": [
      "A MARPOL Annex VI document certifying the engine's emissions meet Tier I/II/III limits based on specific electronic and mechanical settings",
      "A manual for fixing nitrogen leaks",
      "A log of all exhaust gas temperatures",
      "A certificate for the ICCP system"
    ],
    "exp": "The file details approved engine parameters (injection timing, ECU software versions) that must not be altered, ensuring emissions compliance.",
    "cat": "MainEng",
    "id": "T18E_144"
  },
  {
    "q": "What main engine safety trips are typically verified during the automation test survey?",
    "a": "Overspeed, high bearing temperature, low lube oil pressure, and high cooling water temperature",
    "opts": [
      "Low fuel level and high ambient room temperature",
      "Overspeed, high bearing temperature, low lube oil pressure, and high cooling water temperature",
      "High exhaust smoke and low bilge level",
      "Radar failure and steering failure"
    ],
    "exp": "These critical sensors prevent catastrophic destruction of the main engine. The surveyor ensures the PLC/automation correctly shuts down the engine on fault.",
    "cat": "MainEng",
    "id": "T18E_145"
  },
  {
    "q": "How is the Main Engine Telegraph tested during the survey?",
    "a": "By moving the telegraph to all positions (ahead/astern) and verifying the Bridge and ECR indicators perfectly match and alarms sound on mismatch",
    "opts": [
      "By moving the telegraph to all positions (ahead/astern) and verifying the Bridge and ECR indicators perfectly match and alarms sound on mismatch",
      "By testing the engine at full speed",
      "By sending a Morse code message to shore",
      "By measuring the voltage of the handle"
    ],
    "exp": "The telegraph is the primary communication link for propulsion commands and must be flawlessly synchronized.",
    "cat": "MainEng",
    "id": "T18E_146"
  },
  {
    "q": "What does measuring the Shaft Earthing Brush resistance verify?",
    "a": "That resistance is < 1 Ω, ensuring the rotating propeller is electrically bonded to the hull for ICCP protection",
    "opts": [
      "That resistance is < 1 Ω, ensuring the rotating propeller is electrically bonded to the hull for ICCP protection",
      "That the bearings are fully lubricated with thick oil",
      "That the shaft is not spinning",
      "That the shaft is generating 440V"
    ],
    "exp": "If the brush wears out, the bronze propeller becomes isolated and creates a massive galvanic cell, corroding the stern.",
    "cat": "MainEng",
    "id": "T18E_147"
  },
  {
    "q": "What are BDNs (Bunker Delivery Notes) and how long must they be retained for survey?",
    "a": "Certificates showing fuel sulphur content, retained for a minimum of 3 years for MARPOL Annex VI compliance",
    "opts": [
      "Certificates showing fuel sulphur content, retained for a minimum of 3 years for MARPOL Annex VI compliance",
      "Logs of battery charging, retained for 5 years",
      "Receipts for lubricating oil, retained for 1 year",
      "Records of shore power connection, retained forever"
    ],
    "exp": "PSC and Class inspectors check BDNs to prove the ship burned compliant low-sulphur fuel in emission control areas.",
    "cat": "MainEng",
    "id": "T18E_148"
  },
  {
    "q": "How is a 'High Bearing Temperature' trip simulated on the main engine?",
    "a": "By applying a calibrated resistance or mV signal to the automation system, simulating a hot PT100/thermocouple, and verifying the shutdown",
    "opts": [
      "By holding a blowtorch to the actual bearing",
      "By running the engine at 200% load",
      "By applying a calibrated resistance or mV signal to the automation system, simulating a hot PT100/thermocouple, and verifying the shutdown",
      "By draining all the oil from the engine"
    ],
    "exp": "Electronic simulation proves the PLC logic works without risking actual damage to the massive engine bearings.",
    "cat": "MainEng",
    "id": "T18E_149"
  },
  {
    "q": "What is the purpose of the Governor Droop test?",
    "a": "To ensure the engine speed drops by the correct percentage when full load is applied, allowing stable parallel operation",
    "opts": [
      "To test the overspeed trip",
      "To check if oil is leaking from the governor",
      "To ensure the engine speed drops by the correct percentage when full load is applied, allowing stable parallel operation",
      "To see how fast the ship can go"
    ],
    "exp": "Without droop (typically 3-5%), generators running in parallel would wildly hunt and fail to share KW load equally.",
    "cat": "MainEng",
    "id": "T18E_150"
  },
  {
    "q": "How is the Emergency Fuel Cut-Off (Emergency Stop) tested?",
    "a": "By pressing the physical emergency stop buttons on the Bridge/ECR and verifying the fuel solenoid valves instantly close",
    "opts": [
      "By pressing the physical emergency stop buttons on the Bridge/ECR and verifying the fuel solenoid valves instantly close",
      "By calling the Chief Engineer to turn a valve",
      "By tripping the main switchboard",
      "By dumping saltwater into the fuel tank"
    ],
    "exp": "The hardwired E-stop must bypass all PLCs and directly drop power to the fuel shut-off valves.",
    "cat": "MainEng",
    "id": "T18E_151"
  },
  {
    "q": "What is verified during a Tachometer and Speed Sensor Calibration check?",
    "a": "That the electronic RPM pickups on the flywheel match the physical RPM of the shaft perfectly",
    "opts": [
      "That the turbocharger is spinning",
      "That the ship's speed over ground is correct",
      "That the wind speed is accurate",
      "That the electronic RPM pickups on the flywheel match the physical RPM of the shaft perfectly"
    ],
    "exp": "Accurate RPM feedback is critical for the EMS injection timing and overspeed protection.",
    "cat": "MainEng",
    "id": "T18E_152"
  },
  {
    "q": "What is a 'Scavenge Fire Detector'?",
    "a": "A temperature sensor in the scavenge air space that triggers an alarm if unburned oil/carbon ignites",
    "opts": [
      "A temperature sensor in the scavenge air space that triggers an alarm if unburned oil/carbon ignites",
      "A water level sensor in the bilge",
      "A smoke detector on the bridge",
      "A UV flame detector in the funnel"
    ],
    "exp": "Scavenge fires cause massive engine damage. The sensor detects abnormal heat spikes in the intake manifold.",
    "cat": "MainEng",
    "id": "T18E_153"
  },
  {
    "q": "On electronically controlled engines (like ME/RT-flex), what specific ECU records are checked?",
    "a": "Software version control, injection timing parameters, and electronic cylinder condition monitoring data",
    "opts": [
      "The voltage of the bridge lights",
      "The brand of the computer monitor",
      "The ship's internet search history",
      "Software version control, injection timing parameters, and electronic cylinder condition monitoring data"
    ],
    "exp": "Modern engines rely entirely on Engine Control Units (ECUs). Unauthorized software tweaks invalidate the NOx emissions certificate.",
    "cat": "MainEng",
    "id": "T18E_154"
  },
  {
    "q": "Why is the Low Lube Oil Pressure trip critical for the main engine?",
    "a": "Loss of oil pressure destroys the crankshaft and main bearings in seconds; the trip stops the engine before metal-to-metal contact occurs",
    "opts": [
      "Loss of oil pressure destroys the crankshaft and main bearings in seconds; the trip stops the engine before metal-to-metal contact occurs",
      "It keeps the oil from freezing",
      "It stops the propeller from falling off",
      "It prevents oil from spilling overboard"
    ],
    "exp": "A massive 2-stroke engine relies entirely on hydrostatic oil pressure to keep the heavy shaft floating in the bearings.",
    "cat": "MainEng",
    "id": "T18E_155"
  },
  {
    "q": "What causes the 'Slow Down' function to activate on a main engine?",
    "a": "Parameters approaching trip limits (e.g., high exhaust temp); the EMS automatically reduces RPM to shed load and prevent a full shutdown",
    "opts": [
      "Running out of heavy fuel oil",
      "Parameters approaching trip limits (e.g., high exhaust temp); the EMS automatically reduces RPM to shed load and prevent a full shutdown",
      "The captain pulling the telegraph to half-ahead",
      "A fault in the steering gear"
    ],
    "exp": "Slow-down is a pre-emptive safety measure. By cutting RPM, heat drops, often avoiding a dangerous sudden dead-ship scenario.",
    "cat": "MainEng",
    "id": "T18E_156"
  },
  {
    "q": "How is a 'Load Step Response' test performed on a generator governor?",
    "a": "By suddenly throwing a large load (like a bow thruster) onto the bus and measuring how quickly the governor stabilizes the frequency",
    "opts": [
      "By lifting the engine with a crane",
      "By turning the AVR off and on",
      "By suddenly throwing a large load (like a bow thruster) onto the bus and measuring how quickly the governor stabilizes the frequency",
      "By checking the fuel oil density"
    ],
    "exp": "A sluggish governor allows massive frequency dips, which can trip other equipment or cause a blackout.",
    "cat": "MainEng",
    "id": "T18E_157"
  },
  {
    "q": "What is the primary function of the Oil Mist Detector (OMD) on a main engine?",
    "a": "To detect explosive oil vapor in the crankcase, triggering an immediate shutdown to prevent a massive crankcase explosion",
    "opts": [
      "To lubricate the pistons",
      "To detect explosive oil vapor in the crankcase, triggering an immediate shutdown to prevent a massive crankcase explosion",
      "To check if the oil needs changing",
      "To measure exhaust emissions"
    ],
    "exp": "A hot bearing vaporizes lube oil into an explosive white mist. The OMD uses optics to detect this opacity and saves the ship from a bomb-like explosion.",
    "cat": "MainEng",
    "id": "T18E_158"
  },
  {
    "q": "What is the very first check required before connecting a dry dock shore power supply?",
    "a": "Verify that the shore supply voltage and frequency exactly match the ship's system (e.g., 440V, 60Hz)",
    "opts": [
      "Verify that the shore supply voltage and frequency exactly match the ship's system (e.g., 440V, 60Hz)",
      "Start the ship's main engine",
      "Connect the massive cables as quickly as possible",
      "Turn on all the ship's lights"
    ],
    "exp": "Connecting 50Hz shore power to a 60Hz ship without a frequency converter will cause all induction motors to run 20% slower and overheat.",
    "cat": "ShorePower",
    "id": "T18E_159"
  },
  {
    "q": "What tool is essential to use before closing the shore power breaker to prevent motors from running backward?",
    "a": "A Phase Sequence Meter (to verify R-Y-B phase rotation matches)",
    "opts": [
      "A megger",
      "A thermal imaging camera",
      "A standard voltmeter",
      "A Phase Sequence Meter (to verify R-Y-B phase rotation matches)"
    ],
    "exp": "If two phases from shore are swapped, every 3-phase pump and fan on the ship will spin in reverse, destroying pumps and flooding bilges.",
    "cat": "ShorePower",
    "id": "T18E_160"
  },
  {
    "q": "If the ship is 440V/60Hz and the dry dock only offers 380V/50Hz, what equipment is mandatory?",
    "a": "A rotary or static Frequency Converter and a step-up transformer",
    "opts": [
      "A longer extension cord",
      "A massive rectifier bridge",
      "A rotary or static Frequency Converter and a step-up transformer",
      "A galvanic isolator alone"
    ],
    "exp": "You cannot change frequency with a transformer. A massive VFD-like converter is required to synthesize 60Hz from 50Hz.",
    "cat": "ShorePower",
    "id": "T18E_161"
  },
  {
    "q": "What is the status of the ship's Main Generator ACBs when connecting shore power in dry dock?",
    "a": "They must be OPEN and mechanically locked out/isolated",
    "opts": [
      "They must be in the TEST position",
      "They must be removed from the ship",
      "They must be OPEN and mechanically locked out/isolated",
      "They must be CLOSED to share the load"
    ],
    "exp": "You NEVER run shore power in parallel with ship's generators. The ACBs are opened and tagged out to prevent catastrophic dead-shorts.",
    "cat": "ShorePower",
    "id": "T18E_162"
  },
  {
    "q": "Why MUST the ICCP system be switched OFF before and during dry dock?",
    "a": "Running it in air causes high-voltage arcing with no electrolyte, presenting a severe fire risk and destroying the anodes",
    "opts": [
      "It draws too much shore power",
      "It will electrocute the dry dock workers",
      "It causes the hull to rust instantly",
      "Running it in air causes high-voltage arcing with no electrolyte, presenting a severe fire risk and destroying the anodes"
    ],
    "exp": "Without seawater, the circuit is open. The controller ramps to max voltage, and any moisture can cause sparks near flammable fresh paint.",
    "cat": "ShorePower",
    "id": "T18E_163"
  },
  {
    "q": "What is the role of a Galvanic Isolator on the shore earth connection?",
    "a": "It blocks low-voltage DC (stray ICCP current) but allows high-voltage AC fault currents to pass safely to earth",
    "opts": [
      "It blocks low-voltage DC (stray ICCP current) but allows high-voltage AC fault currents to pass safely to earth",
      "It stops AC voltage from entering the ship",
      "It converts shore AC to ship DC",
      "It acts as a lightning rod"
    ],
    "exp": "Back-to-back diodes block ~1.2V of stray galvanic current (stopping severe hull/jetty corrosion) while easily passing a 440V fault to ground.",
    "cat": "ShorePower",
    "id": "T18E_164"
  },
  {
    "q": "What is the recommended status of the Emergency Generator when running on shore supply in dry dock?",
    "a": "On standby in MANUAL mode, ready as a backup if shore power fails",
    "opts": [
      "On standby in MANUAL mode, ready as a backup if shore power fails",
      "Running constantly at full load",
      "Wired directly into the shore supply",
      "Completely dismantled for overhaul"
    ],
    "exp": "Auto-start is often disabled so an accidental shore trip doesn't unexpectedly roar the engine to life while mechanics are working on it.",
    "cat": "ShorePower",
    "id": "T18E_165"
  },
  {
    "q": "How should loads be applied after successfully closing the shore supply breaker?",
    "a": "Progressively — start with minimal load, verify voltage/frequency stability, then add heavy loads sequentially",
    "opts": [
      "Wait 24 hours before turning on any pumps",
      "Progressively — start with minimal load, verify voltage/frequency stability, then add heavy loads sequentially",
      "Only run 24V DC equipment",
      "Turn everything on at once to test capacity"
    ],
    "exp": "Dumping massive loads instantly can collapse the shore voltage or blow the dockyard fuses. Gradual loading proves the connection is solid.",
    "cat": "ShorePower",
    "id": "T18E_166"
  },
  {
    "q": "What determines the maximum load the ship can draw while in dry dock?",
    "a": "The current rating of the shore supply cables and the shore connection box breaker",
    "opts": [
      "The amount of fuel remaining",
      "The capacity of the ICCP system",
      "The current rating of the shore supply cables and the shore connection box breaker",
      "The size of the ship's generators"
    ],
    "exp": "Shore cables are thick but have limits (e.g., 400A). Drawing too much current will melt the cables or trip the shore-side substation.",
    "cat": "ShorePower",
    "id": "T18E_167"
  },
  {
    "q": "What happens if shore earth is NOT connected to the ship's hull?",
    "a": "A deadly shock hazard exists because a fault on the ship will not return to the shore transformer to trip the breaker",
    "opts": [
      "Nothing, the seawater acts as the earth",
      "A deadly shock hazard exists because a fault on the ship will not return to the shore transformer to trip the breaker",
      "The ship will become heavily magnetized",
      "The ship's lights will flicker"
    ],
    "exp": "In drydock, there is no seawater earth. A massive copper earth cable must bond the hull to the dockyard earth grid for life safety.",
    "cat": "ShorePower",
    "id": "T18E_168"
  },
  {
    "q": "Where is the shore supply physically connected to the ship?",
    "a": "At the Shore Connection Box (typically using heavy-duty IEC 60309 sockets/plugs)",
    "opts": [
      "Directly onto the main engine",
      "Via the anchor chain",
      "At the emergency generator terminals",
      "At the Shore Connection Box (typically using heavy-duty IEC 60309 sockets/plugs)"
    ],
    "exp": "This dedicated box has a breaker, phase sequence meter, and heavy brass terminals to safely receive the massive dockyard cables.",
    "cat": "ShorePower",
    "id": "T18E_169"
  },
  {
    "q": "What administrative action is required when shore power is connected?",
    "a": "Log the connection in the electrical logbook with date, time, voltage, frequency, and phase check results",
    "opts": [
      "Call the port state control",
      "Nothing, it is an informal procedure",
      "Log the connection in the electrical logbook with date, time, voltage, frequency, and phase check results",
      "Update the ship's registry"
    ],
    "exp": "Strict documentation proves to surveyors and management that critical safety protocols were followed during the handover of power.",
    "cat": "ShorePower",
    "id": "T18E_170"
  },
  {
    "q": "Why might a ship experience severe voltage drop when running heavy pumps on shore power?",
    "a": "The long, thick shore cables have significant electrical resistance; high current causes high voltage drop (V=IR) over the distance",
    "opts": [
      "The dry dock is underwater",
      "The ship's transformer is broken",
      "The shore power is AC instead of DC",
      "The long, thick shore cables have significant electrical resistance; high current causes high voltage drop (V=IR) over the distance"
    ],
    "exp": "Cable impedance over 100 meters can cause a 440V supply to sag to 380V under heavy load, potentially stalling motors.",
    "cat": "ShorePower",
    "id": "T18E_171"
  },
  {
    "q": "If the ship's MSB requires shore power to be brought 'on-line' without blackout (transfer under load), what is required?",
    "a": "The shore supply must be synchronized (voltage, frequency, phase) with the running generator before momentarily closing the breaker",
    "opts": [
      "The shore supply must be synchronized (voltage, frequency, phase) with the running generator before momentarily closing the breaker",
      "It is physically impossible",
      "A massive battery bank",
      "A very fast pair of hands"
    ],
    "exp": "Just like paralleling two generators, closing a live shore supply onto a live bus requires exact synchronization to avoid an explosion.",
    "cat": "ShorePower",
    "id": "T18E_172"
  },
  {
    "q": "Why is the Shore Connection Breaker usually fitted with an under-voltage trip?",
    "a": "To automatically disconnect the ship if shore power fails, preventing the ship's motors from stalling and burning out on low voltage",
    "opts": [
      "To signal the dry dock workers",
      "To automatically disconnect the ship if shore power fails, preventing the ship's motors from stalling and burning out on low voltage",
      "To save electricity",
      "To start the main engine"
    ],
    "exp": "If the dockyard crane shorts the grid causing a brownout, the breaker trips to protect the ship's delicate electronics and induction motors.",
    "cat": "ShorePower",
    "id": "T18E_173"
  },
  {
    "q": "How is the Emergency Lighting system tested during a Safety Equipment Survey?",
    "a": "By simulating a main power failure and verifying that all required emergency lights illuminate from the emergency supply/batteries",
    "opts": [
      "By looking at the lightbulbs during the day",
      "By measuring the voltage of the main switchboard",
      "By simulating a main power failure and verifying that all required emergency lights illuminate from the emergency supply/batteries",
      "By replacing all the batteries"
    ],
    "exp": "The surveyor removes main AC power. Battery-backed fixtures or the emergency generator must immediately light up escape routes and embarkation stations.",
    "cat": "SafEqp",
    "id": "T18E_174"
  },
  {
    "q": "What is the specific test requirement for the Main Steering Gear at full speed ahead?",
    "a": "Hard-over (35° on one side to 30° on the other) in ≤ 28 seconds",
    "opts": [
      "Instantaneous movement to 10 degrees",
      "Hard-over (15° to 15°) in 60 seconds",
      "Hard-over (35° on one side to 30° on the other) in ≤ 28 seconds",
      "360 degree rotation in 1 minute"
    ],
    "exp": "SOLAS dictates powerful, rapid steering response to avoid collisions at full sea speed.",
    "cat": "SafEqp",
    "id": "T18E_175"
  },
  {
    "q": "What is the test requirement for the Auxiliary Steering Gear?",
    "a": "Hard-over (15° on one side to 15° on the other) in ≤ 60 seconds at half speed",
    "opts": [
      "Hard-over (15° on one side to 15° on the other) in ≤ 60 seconds at half speed",
      "Hard-over (35° to 30°) in 28 seconds",
      "It must steer the ship in reverse",
      "It operates entirely on manual hand wheels"
    ],
    "exp": "The backup system provides enough control to keep the ship safe at reduced speed if the main hydraulics fail.",
    "cat": "SafEqp",
    "id": "T18E_176"
  },
  {
    "q": "How is the Fire Detection System tested during the survey?",
    "a": "Activate detectors in each zone using test aerosol (smoke) or heat guns, and verify the correct zone alarm sounds on the main panel",
    "opts": [
      "Activate detectors in each zone using test aerosol (smoke) or heat guns, and verify the correct zone alarm sounds on the main panel",
      "Check the voltage of the backup battery",
      "Press the 'Test' button on the panel only",
      "Light a small fire in a bucket"
    ],
    "exp": "Physical stimulation of the sensor proves the detector head, wiring, and panel logic all function perfectly.",
    "cat": "SafEqp",
    "id": "T18E_177"
  },
  {
    "q": "What does a BNWAS (Bridge Navigational Watch Alarm System) escalation test verify?",
    "a": "That an unacknowledged alarm escalates correctly from the Bridge, to the Master's cabin, and then to the general crew/engineering alarm",
    "opts": [
      "That the radar screen turns off",
      "That the autopilot disengages",
      "That the ship stops moving if the captain sleeps",
      "That an unacknowledged alarm escalates correctly from the Bridge, to the Master's cabin, and then to the general crew/engineering alarm"
    ],
    "exp": "If the Officer of the Watch is incapacitated, the system must wake the Master, then the entire ship, to prevent a grounding.",
    "cat": "SafEqp",
    "id": "T18E_178"
  },
  {
    "q": "What is the expiration interval for the battery and Hydrostatic Release Unit (HRU) of an EPIRB?",
    "a": "Battery typically 5 years; HRU strictly 2 years",
    "opts": [
      "Both expire every 10 years",
      "Battery 1 year; HRU 1 year",
      "Battery typically 5 years; HRU strictly 2 years",
      "They never expire"
    ],
    "exp": "The HRU blade mechanism degrades in salt air and must be swapped every 2 years. The lithium battery lasts 5 years.",
    "cat": "SafEqp",
    "id": "T18E_179"
  },
  {
    "q": "How is a SART (Search and Rescue Transponder) tested during the safety survey?",
    "a": "Using its self-test switch to trigger a brief transmission, which is verified on the ship's 9GHz X-band radar as a 12-dot pattern",
    "opts": [
      "By pressing the Mayday button",
      "By throwing it in the water",
      "Using its self-test switch to trigger a brief transmission, which is verified on the ship's 9GHz X-band radar as a 12-dot pattern",
      "By measuring its physical weight"
    ],
    "exp": "The self-test proves the battery works and the transmitter is successfully painting the emergency dots on nearby radar screens.",
    "cat": "SafEqp",
    "id": "T18E_180"
  },
  {
    "q": "What specifically is checked regarding Navigational Lights during the survey?",
    "a": "Main and backup bulbs work, the backup power supply functions, and the failure alarm activates if a bulb burns out",
    "opts": [
      "That they are visible from space",
      "That they flash in Morse code",
      "Main and backup bulbs work, the backup power supply functions, and the failure alarm activates if a bulb burns out",
      "That they are painted the correct color"
    ],
    "exp": "A burnt-out masthead light at sea causes collisions. The panel must immediately scream to alert the bridge team to switch to the backup bulb.",
    "cat": "SafEqp",
    "id": "T18E_181"
  },
  {
    "q": "During the GMDSS test, what specific channel is used to test the VHF DSC (Digital Selective Calling)?",
    "a": "Channel 70",
    "opts": [
      "Channel 16",
      "Channel 70",
      "Channel 09",
      "Channel 13"
    ],
    "exp": "Channel 70 is exclusively reserved for digital distress alerts and automated testing. Voice calling is prohibited on 70.",
    "cat": "SafEqp",
    "id": "T18E_182"
  },
  {
    "q": "What happens during the VDR (Voyage Data Recorder) Annual Performance Test?",
    "a": "An approved technician downloads data to verify all sensors (Radar, Audio, GPS, Engine alarms) are successfully recording to the hardened capsule",
    "opts": [
      "The ship is steered in a circle",
      "An approved technician downloads data to verify all sensors (Radar, Audio, GPS, Engine alarms) are successfully recording to the hardened capsule",
      "The hard drive is wiped clean",
      "The capsule is dropped from the mast"
    ],
    "exp": "The 'black box' is useless if radar or bridge microphones have quietly failed. The annual test proves data integrity.",
    "cat": "SafEqp",
    "id": "T18E_183"
  },
  {
    "q": "What is the critical check for the AIS (Automatic Identification System) during survey?",
    "a": "Verifying that the transmitted dynamic data (position/speed) and static data (MMSI/Ship Name) are correct and updating",
    "opts": [
      "That it can detect submarines",
      "That it steers the ship automatically",
      "Verifying that the transmitted dynamic data (position/speed) and static data (MMSI/Ship Name) are correct and updating",
      "That it blocks spam messages"
    ],
    "exp": "Transmitting incorrect draught or a stuck GPS position poses a severe hazard to vessel traffic management.",
    "cat": "SafEqp",
    "id": "T18E_184"
  },
  {
    "q": "What does a Permit to Work (PTW) document physically achieve?",
    "a": "It provides a formal, signed checklist proving a Task Risk Assessment was done and all safety isolations are in place before dangerous work begins",
    "opts": [
      "It acts as a map of the ship",
      "It replaces the need for a manual",
      "It guarantees the worker extra pay",
      "It provides a formal, signed checklist proving a Task Risk Assessment was done and all safety isolations are in place before dangerous work begins"
    ],
    "exp": "The PTW forces senior officers to review and authorize high-risk jobs (like high-voltage access), ensuring no safety steps are skipped.",
    "cat": "PTW",
    "id": "T18E_185"
  },
  {
    "q": "What does LOTO stand for?",
    "a": "Lock Out, Tag Out",
    "opts": [
      "Line Out, Test Output",
      "Live Operations, Trained Operators",
      "Leave Open, Turn Off",
      "Lock Out, Tag Out"
    ],
    "exp": "LOTO is the universal safety procedure of applying a physical padlock (Lock) and a warning sign (Tag) to an isolated breaker.",
    "cat": "PTW",
    "id": "T18E_186"
  },
  {
    "q": "Why must an ACB be racked out to the 'ISOLATED/WITHDRAWN' position during LOTO?",
    "a": "To provide visible, physical disconnection of the massive main copper contacts from the live busbars",
    "opts": [
      "To provide visible, physical disconnection of the massive main copper contacts from the live busbars",
      "To keep the breaker warm",
      "To allow the springs to charge",
      "To clean the dust off the back"
    ],
    "exp": "Simply pressing 'OFF' relies on a tiny internal latch. Racking it out creates a giant air gap, ensuring absolute zero chance of power flow.",
    "cat": "PTW",
    "id": "T18E_187"
  },
  {
    "q": "What specific information MUST be written on a Safety Tag (Tag Out)?",
    "a": "Warning ('Do Not Operate'), Name of the person working, Date, and Reason for isolation",
    "opts": [
      "The brand of the circuit breaker",
      "The voltage of the circuit",
      "The ship's destination",
      "Warning ('Do Not Operate'), Name of the person working, Date, and Reason for isolation"
    ],
    "exp": "The tag identifies exactly who owns the lock. Only the person whose name is on the tag is legally allowed to remove it.",
    "cat": "PTW",
    "id": "T18E_188"
  },
  {
    "q": "What is the crucial final step of the isolation procedure BEFORE touching a conductor?",
    "a": "Prove dead: Use an approved voltage tester to verify zero voltage exists across all phases and to earth",
    "opts": [
      "Prove dead: Use an approved voltage tester to verify zero voltage exists across all phases and to earth",
      "Call the captain",
      "Sign the PTW paper",
      "Put on a hard hat"
    ],
    "exp": "Never trust a switch position. You must physically measure the copper with a known-working meter to guarantee it is dead.",
    "cat": "PTW",
    "id": "T18E_189"
  },
  {
    "q": "When is 'Working on a Live MSB' permitted?",
    "a": "Only as an absolute last resort (e.g., fault tracing requiring power), with a specialized PTW and stringent PPE",
    "opts": [
      "Only as an absolute last resort (e.g., fault tracing requiring power), with a specialized PTW and stringent PPE",
      "For daily routine cleaning",
      "Whenever the ETO is in a hurry",
      "It is never permitted under any circumstances"
    ],
    "exp": "Live working is highly dangerous. It is only done when diagnosing a problem that disappears when power is cut.",
    "cat": "PTW",
    "id": "T18E_190"
  },
  {
    "q": "What is the minimum requirement for personnel when working on a live MSB?",
    "a": "At least two persons must be present: one working, and one standing by ready to hit the emergency stop and provide rescue",
    "opts": [
      "A full medical team",
      "At least two persons must be present: one working, and one standing by ready to hit the emergency stop and provide rescue",
      "Three engineers",
      "One highly trained ETO"
    ],
    "exp": "If the worker is electrocuted, their muscles may lock. The standby person kills power and pulls them away with a rescue hook.",
    "cat": "PTW",
    "id": "T18E_191"
  },
  {
    "q": "What rating of rubber gloves is required for working on a live 440V AC MSB?",
    "a": "Minimum Class 0 (rated for 1000V AC)",
    "opts": [
      "Surgical latex gloves",
      "Standard leather work gloves",
      "Minimum Class 0 (rated for 1000V AC)",
      "Class 00 (rated for 500V AC)"
    ],
    "exp": "Class 0 provides a massive safety margin over 440V to protect against inductive spikes and sweat conductivity.",
    "cat": "PTW",
    "id": "T18E_192"
  },
  {
    "q": "What certification mark must be on the insulated hand tools used for live MSB work?",
    "a": "IEC 60900 (certified 1000V insulated)",
    "opts": [
      "ISO 9001",
      "Marine grade stainless",
      "IEC 60900 (certified 1000V insulated)",
      "CE marking only"
    ],
    "exp": "These tools have thick, dual-layer insulation bonded to the steel to prevent a dropped wrench from causing an explosive arc flash.",
    "cat": "PTW",
    "id": "T18E_193"
  },
  {
    "q": "Why are metal watches, rings, and jewelry strictly prohibited when working on electrical panels?",
    "a": "They bypass skin resistance (causing severe shock) and can bridge live contacts, melting into the skin instantly",
    "opts": [
      "They violate uniform codes",
      "They interfere with the magnetic fields of the relays",
      "They reflect the MSB lights into the operator's eyes",
      "They bypass skin resistance (causing severe shock) and can bridge live contacts, melting into the skin instantly"
    ],
    "exp": "A gold ring dropping across 24V or 440V busbars acts as a dead short, turning white-hot and burning off the finger.",
    "cat": "PTW",
    "id": "T18E_194"
  },
  {
    "q": "What specific PPE item protects the face and eyes during live MSB work?",
    "a": "An Arc Flash rated visor or insulating face shield",
    "opts": [
      "A wool balaclava",
      "A welding mask",
      "Standard reading glasses",
      "An Arc Flash rated visor or insulating face shield"
    ],
    "exp": "An arc flash generates plasma hotter than the sun. The visor stops the explosive blast of molten copper and blinding UV light from destroying the face.",
    "cat": "PTW",
    "id": "T18E_195"
  },
  {
    "q": "After isolating an ACB, why is a second lockout tag often placed at the local engine start panel?",
    "a": "To ensure an operator doesn't start the prime mover locally while someone is working on its breaker",
    "opts": [
      "Because the company requires two tags for paperwork",
      "To remind the oiler to check the oil",
      "To ensure an operator doesn't start the prime mover locally while someone is working on its breaker",
      "To drain the fuel lines"
    ],
    "exp": "Absolute isolation means disabling both the electrical path and the mechanical source of power.",
    "cat": "PTW",
    "id": "T18E_196"
  },
  {
    "q": "What action discharges the stored spring energy of an ACB during isolation?",
    "a": "Pressing the manual 'Close' and then 'Open' buttons after the breaker is racked out and control power is removed",
    "opts": [
      "Pressing the manual 'Close' and then 'Open' buttons after the breaker is racked out and control power is removed",
      "Pouring oil on the spring",
      "Waiting 24 hours",
      "Hitting the breaker with a rubber mallet"
    ],
    "exp": "If the spring is cocked, removing power doesn't make it safe. You must deliberately fire the mechanism into thin air to release the tension.",
    "cat": "PTW",
    "id": "T18E_197"
  },
  {
    "q": "What does a Task Risk Assessment (TRA) primarily identify?",
    "a": "The specific hazards of the job and the required control measures (like PPE and isolations) to mitigate them",
    "opts": [
      "Who gets blamed if something breaks",
      "The fastest way to finish the job",
      "The specific hazards of the job and the required control measures (like PPE and isolations) to mitigate them",
      "The cost of the spare parts"
    ],
    "exp": "Before writing the PTW, the team sits down to brainstorm every way they could get hurt and plans how to stop it.",
    "cat": "PTW",
    "id": "T18E_198"
  },
  {
    "q": "When is the PTW (Permit to Work) officially closed and signed off?",
    "a": "Only after the work is complete, all tools are removed, guards are replaced, and the system is safely restored to normal operation",
    "opts": [
      "Before the risk assessment is done",
      "When the surveyor arrives",
      "Only after the work is complete, all tools are removed, guards are replaced, and the system is safely restored to normal operation",
      "As soon as the work begins"
    ],
    "exp": "Closing the permit is the formal declaration that the danger zone has been dismantled and the machine is safe to run.",
    "cat": "PTW",
    "id": "T18E_199"
  }

]);
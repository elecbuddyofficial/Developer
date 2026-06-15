window.loadQuizzes("T14_BridgeEquip2", [
  {
    "q": "Which instrument is used to check a cargo tank before a human enters it in fresh-air conditions?",
    "a": "Explosimeter",
    "opts": [
      "Tankscope",
      "Explosimeter",
      "Oxygen Analyser",
      "Toxic Gas Detector"
    ],
    "exp": "The explosimeter is exclusively designed to verify that a fresh-air enclosed space is below explosive boundaries before human entry.",
    "cat": "GAS",
    "id": "T14A_001"
  },
  {
    "q": "What is the reading scale of an explosimeter?",
    "a": "0–100 % LEL",
    "opts": [
      "0–100 % LEL",
      "0–100 % HC by volume",
      "0–25 % O₂",
      "0–100 ppm"
    ],
    "exp": "An explosimeter measures the lower explosive limit, ranging from 0–100 % LEL.",
    "cat": "GAS",
    "id": "T14A_002"
  },
  {
    "q": "What sensor technology does the explosimeter use?",
    "a": "Pellistor catalytic bead",
    "opts": [
      "Non-Dispersive Infrared (NDIR)",
      "Electrochemical cell",
      "Paramagnetic dumbbell",
      "Pellistor catalytic bead"
    ],
    "exp": "The explosimeter uses a pellistor catalytic bead set up in a Wheatstone bridge to detect combustible gases.",
    "cat": "GAS",
    "id": "T14A_003"
  },
  {
    "q": "What happens if an explosimeter is used in an inerted cargo tank?",
    "a": "It reads a FALSE ZERO (0 % LEL)",
    "opts": [
      "It reads a FALSE ZERO (0 % LEL)",
      "It reads 100 % LEL continuously",
      "It accurately reads the hydrocarbon volume",
      "The sensor burns out immediately"
    ],
    "exp": "Without sufficient oxygen for catalytic combustion, the bridge remains balanced, causing a deadly false zero reading even if gas is present.",
    "cat": "GAS",
    "id": "T14A_004"
  },
  {
    "q": "What is the minimum oxygen concentration required for an explosimeter to function?",
    "a": "10 % O₂",
    "opts": [
      "5 % O₂",
      "10 % O₂",
      "19.5 % O₂",
      "21 % O₂"
    ],
    "exp": "The pellistor requires at least ~10 % oxygen for the catalytic combustion to sustain itself.",
    "cat": "GAS",
    "id": "T14A_005"
  },
  {
    "q": "What is the active bead in a pellistor coated with?",
    "a": "Palladium/platinum catalyst",
    "opts": [
      "Zinc oxide",
      "Lead sulfide",
      "Palladium/platinum catalyst",
      "Zirconia ceramic"
    ],
    "exp": "The active bead is coated with a palladium/platinum catalyst where flammable gas burns, raising its resistance.",
    "cat": "GAS",
    "id": "T14A_006"
  },
  {
    "q": "What is the role of the reference bead in an explosimeter?",
    "a": "Compensates for ambient temperature drift",
    "opts": [
      "Increases the combustion rate",
      "Compensates for ambient temperature drift",
      "Filters out toxic gases",
      "Amplifies the Wheatstone bridge signal"
    ],
    "exp": "The reference bead is uncoated so no combustion occurs, allowing it to solely track and compensate for ambient temperature drift.",
    "cat": "GAS",
    "id": "T14A_007"
  },
  {
    "q": "What principle does the Tankscope use to measure gas?",
    "a": "Non-Dispersive Infrared (NDIR)",
    "opts": [
      "Catalytic Pellistor",
      "Electrochemical oxidation",
      "Paramagnetic wind",
      "Non-Dispersive Infrared (NDIR)"
    ],
    "exp": "The Tankscope uses NDIR, which relies on infrared light absorption to measure hydrocarbon concentration.",
    "cat": "GAS",
    "id": "T14A_008"
  },
  {
    "q": "What is the reading scale of a Tankscope?",
    "a": "0–100 % HC by volume",
    "opts": [
      "0–100 % LEL",
      "0–100 % HC by volume",
      "0–25 % O₂",
      "0–100 ppm"
    ],
    "exp": "A Tankscope measures the total hydrocarbon concentration by volume (0–100 % HC).",
    "cat": "GAS",
    "id": "T14A_009"
  },
  {
    "q": "At what wavelength do hydrocarbon molecules absorb IR energy in a Tankscope?",
    "a": "3.4 μm",
    "opts": [
      "1.5 μm",
      "2.2 μm",
      "3.4 μm",
      "5.0 μm"
    ],
    "exp": "Hydrocarbons absorb IR energy at the 3.4 μm C–H bond-stretching band.",
    "cat": "GAS",
    "id": "T14A_010"
  },
  {
    "q": "What is considered a safe entry reading on a Tankscope?",
    "a": "Below 1–2 % HC",
    "opts": [
      "Below 10 % LEL",
      "Below 1–2 % HC",
      "Below 5 % HC",
      "0 % LEL"
    ],
    "exp": "A safe tank-entry reading on the Tankscope scale is well below the explosive range, typically below 1–2 % HC.",
    "cat": "GAS",
    "id": "T14A_011"
  },
  {
    "q": "Does the Tankscope (NDIR) require oxygen to function?",
    "a": "NO - works at 0 % O₂",
    "opts": [
      "YES - requires minimum 10 % O₂",
      "YES - requires 21 % O₂",
      "NO - works at 0 % O₂",
      "NO - requires at least 5 % O₂"
    ],
    "exp": "NDIR works purely on infrared light absorption and requires no combustion, making oxygen levels irrelevant.",
    "cat": "GAS",
    "id": "T14A_012"
  },
  {
    "q": "Which substances pose a sensor poison risk to a pellistor explosimeter?",
    "a": "Lead, silicon, sulfur compounds",
    "opts": [
      "Carbon dioxide and nitrogen",
      "Water vapor and argon",
      "Lead, silicon, sulfur compounds",
      "Methane and propane"
    ],
    "exp": "Lead, silicon, and sulfur compounds poison the catalyst on the active bead, causing the meter to read low.",
    "cat": "GAS",
    "id": "T14A_013"
  },
  {
    "q": "What is the SOLAS/ISGOTT standard alarm level for an explosimeter before entry?",
    "a": "<10 % LEL",
    "opts": [
      "<1 % LEL",
      "<5 % LEL",
      "<10 % LEL",
      "<20 % LEL"
    ],
    "exp": "The flammable gas alarm limit for enclosed space entry checks is <10 % LEL.",
    "cat": "GAS",
    "id": "T14A_014"
  },
  {
    "q": "Which memory aid relates to using gas detectors correctly?",
    "a": "PELE plays in fresh air",
    "opts": [
      "PELE plays in fresh air",
      "NDIR needs oxygen",
      "PELE loves inert tanks",
      "NDIR plays in fresh air"
    ],
    "exp": "PELE (Pellistor) = fresh air only. NDIR = safe in inert/no-oxygen atmospheres.",
    "cat": "GAS",
    "id": "T14A_015"
  },
  {
    "q": "What unique magnetic property makes oxygen easy to detect?",
    "a": "Strongly paramagnetic",
    "opts": [
      "Strongly diamagnetic",
      "Weakly diamagnetic",
      "Ferromagnetic",
      "Strongly paramagnetic"
    ],
    "exp": "Oxygen is strongly paramagnetic because its two outer electrons are unpaired, meaning it is attracted to magnetic fields.",
    "cat": "OXY",
    "id": "T14A_016"
  },
  {
    "q": "What principle operates the thermomagnetic oxygen analyser?",
    "a": "Magnetic wind convective flow",
    "opts": [
      "Paramagnetic dumbbell rotation",
      "Electrochemical oxidation",
      "Magnetic wind convective flow",
      "Nernst potential difference"
    ],
    "exp": "O₂ is drawn into the magnetic field, heated, loses paramagnetism, and is expelled by incoming O₂, creating a magnetic wind.",
    "cat": "OXY",
    "id": "T14A_017"
  },
  {
    "q": "What happens when oxygen is heated by the platinum wire in a thermomagnetic analyser?",
    "a": "It loses its paramagnetism",
    "opts": [
      "It loses its paramagnetism",
      "Its paramagnetism doubles",
      "It combusts instantly",
      "It becomes strongly diamagnetic"
    ],
    "exp": "According to Curie's Law, as temperature increases, magnetic susceptibility decreases, causing the O₂ to lose its paramagnetism.",
    "cat": "OXY",
    "id": "T14A_018"
  },
  {
    "q": "In a thermomagnetic O₂ analyser, what unbalances the Wheatstone bridge?",
    "a": "The magnetic wind cooling the Pt wire",
    "opts": [
      "The combustion of oxygen on the bead",
      "The magnetic wind cooling the Pt wire",
      "Physical rotation of a dumbbell",
      "The generation of a Nernst potential"
    ],
    "exp": "The convective 'magnetic wind' flows over the heated Pt wire, cooling it. This changes its resistance and unbalances the bridge.",
    "cat": "OXY",
    "id": "T14A_019"
  },
  {
    "q": "How does a dumbbell paramagnetic analyser measure oxygen?",
    "a": "O₂ displaces a diamagnetic dumbbell",
    "opts": [
      "O₂ cools a platinum wire",
      "O₂ displaces a diamagnetic dumbbell",
      "O₂ undergoes electrochemical reduction",
      "O₂ combusts on a heated ceramic bead"
    ],
    "exp": "O₂ molecules are drawn into the strongest part of the magnetic field and physically displace a nitrogen-filled diamagnetic dumbbell.",
    "cat": "OXY",
    "id": "T14A_020"
  },
  {
    "q": "What is the reading range of a Dumbbell Paramagnetic Analyser?",
    "a": "0–25 % O₂",
    "opts": [
      "0–100 % O₂",
      "0–21 % O₂",
      "0–25 % O₂",
      "0–50 % O₂"
    ],
    "exp": "The Dumbbell paramagnetic analyser has a typical reading range of 0–25 % O₂.",
    "cat": "OXY",
    "id": "T14A_021"
  },
  {
    "q": "In an electrochemical O₂ analyser, what happens to the oxygen at the cathode?",
    "a": "O₂ is reduced",
    "opts": [
      "O₂ is oxidised",
      "O₂ is combusted",
      "O₂ is reduced",
      "O₂ displaces electrolyte"
    ],
    "exp": "Oxygen permeates the diffusion membrane and is reduced at the cathode, producing a small current proportional to its partial pressure.",
    "cat": "OXY",
    "id": "T14A_022"
  },
  {
    "q": "What is the standard low alarm level for an electrochemical O₂ sensor?",
    "a": "19.5 %",
    "opts": [
      "21 %",
      "19.5 %",
      "23 %",
      "18 %"
    ],
    "exp": "The low alarm activates at 19.5 %, indicating an oxygen-deficient atmosphere.",
    "cat": "OXY",
    "id": "T14A_023"
  },
  {
    "q": "What is the standard high alarm level for an electrochemical O₂ sensor?",
    "a": "23 %",
    "opts": [
      "21 %",
      "23 %",
      "25 %",
      "19.5 %"
    ],
    "exp": "The high alarm activates at 23 %, indicating an oxygen-enriched (flammability risk) atmosphere.",
    "cat": "OXY",
    "id": "T14A_024"
  },
  {
    "q": "What is a major limitation of an electrochemical O₂ cell?",
    "a": "Limited life of 1–2 years before electrolyte exhaustion",
    "opts": [
      "Susceptible to catalyst poisoning",
      "Cannot measure below 10 % O₂",
      "Requires high temperatures (600 °C) to operate",
      "Limited life of 1–2 years before electrolyte exhaustion"
    ],
    "exp": "Electrochemical cells are consumable sensors that typically require replacement every 1–2 years due to electrolyte exhaustion.",
    "cat": "OXY",
    "id": "T14A_025"
  },
  {
    "q": "At what temperature does a Zirconia O₂ sensor operate?",
    "a": "600–800 °C",
    "opts": [
      "100–200 °C",
      "300–400 °C",
      "600–800 °C",
      "1000–1200 °C"
    ],
    "exp": "A zirconia ceramic tube must be heated to 600–800 °C for oxygen ions to become mobile through the crystal lattice.",
    "cat": "OXY",
    "id": "T14A_026"
  },
  {
    "q": "What electrical property is measured by a Zirconia cell?",
    "a": "Nernst potential",
    "opts": [
      "Wheatstone bridge imbalance",
      "Galvanic current",
      "Nernst potential",
      "Capacitive reactance"
    ],
    "exp": "A Nernst potential (EMF) develops across the heated cell walls, proportional to the log of the O₂ ratio.",
    "cat": "OXY",
    "id": "T14A_027"
  },
  {
    "q": "Where is the Zirconia O₂ sensor most commonly applied?",
    "a": "Boiler flue gas and engine exhaust",
    "opts": [
      "Enclosed space entry monitoring",
      "Inert gas generator panels",
      "Boiler flue gas and engine exhaust",
      "Portable multi-gas detectors"
    ],
    "exp": "Zirconia cells require extreme heat and are used for boiler flue gas and engine exhaust O₂ measurement. They are not suitable for ambient air.",
    "cat": "OXY",
    "id": "T14A_028"
  },
  {
    "q": "In a thermomagnetic analyser, why don't N₂ and CO₂ trigger a reading?",
    "a": "They are diamagnetic",
    "opts": [
      "They are diamagnetic",
      "They are ferromagnetic",
      "They do not absorb infrared light",
      "They cannot be oxidised"
    ],
    "exp": "Nearly all other atmospheric gases like N₂ and CO₂ are diamagnetic (weakly repelled by a magnetic field) and do not create the magnetic wind.",
    "cat": "OXY",
    "id": "T14A_029"
  },
  {
    "q": "In the TYDEZ memory aid, what does 'T' stand for?",
    "a": "Thermomagnetic",
    "opts": [
      "Temperature",
      "Toxic",
      "Thermomagnetic",
      "Transducer"
    ],
    "exp": "TYDEZ stands for Thermomagnetic, dYnamic dumbbell, electrochemical, Zirconia.",
    "cat": "OXY",
    "id": "T14A_030"
  },
  {
    "q": "Why is H₂S highly dangerous in pump rooms and deep tanks?",
    "a": "It is heavier than air",
    "opts": [
      "It is lighter than air",
      "It displaces oxygen rapidly",
      "It is heavier than air",
      "It highly flammable at 1 ppm"
    ],
    "exp": "H₂S has a molecular weight of 34 (vs air 29), making it heavier than air so it settles in low areas like bilges and pump rooms.",
    "cat": "TOXIC",
    "id": "T14A_031"
  },
  {
    "q": "Why is the sense of smell an unreliable indicator of H₂S?",
    "a": "It paralyses the olfactory nerve at concentrations above ~100 ppm",
    "opts": [
      "It is completely odourless at all concentrations",
      "It paralyses the olfactory nerve at concentrations above ~100 ppm",
      "It smells like sweet fruit at lethal levels",
      "The rotten egg smell only appears at 1000 ppm"
    ],
    "exp": "While it smells like rotten eggs at low levels, above ~100 ppm it rapidly paralyses the olfactory nerve, giving a false sense of safety.",
    "cat": "TOXIC",
    "id": "T14A_032"
  },
  {
    "q": "What type of sensor is typically used in a portable H₂S detector?",
    "a": "Electrochemical (amperometric) cell",
    "opts": [
      "Pellistor catalytic bead",
      "Non-Dispersive Infrared (NDIR)",
      "Electrochemical (amperometric) cell",
      "Thermomagnetic cell"
    ],
    "exp": "Toxic gas detectors for H₂S and CO use a 3-electrode electrochemical amperometric cell.",
    "cat": "TOXIC",
    "id": "T14A_033"
  },
  {
    "q": "In an H₂S sensor, what chemical reaction occurs at the working electrode?",
    "a": "H₂S is oxidised",
    "opts": [
      "H₂S is reduced",
      "H₂S is oxidised",
      "H₂S combusts",
      "H₂S absorbs infrared energy"
    ],
    "exp": "At the working electrode, H₂S is oxidised (H₂S → S + 2H⁺ + 2e⁻), producing a small current proportional to the concentration.",
    "cat": "TOXIC",
    "id": "T14A_034"
  },
  {
    "q": "What is the Time-Weighted Average (TWA, 8 hr) exposure limit for H₂S?",
    "a": "1 ppm",
    "opts": [
      "1 ppm",
      "5 ppm",
      "10 ppm",
      "20 ppm"
    ],
    "exp": "The 8-hour TWA occupational exposure limit for H₂S is strictly 1 ppm.",
    "cat": "TOXIC",
    "id": "T14A_035"
  },
  {
    "q": "What is the SOLAS enclosed space entry alarm level for H₂S?",
    "a": "10 ppm",
    "opts": [
      "1 ppm",
      "5 ppm",
      "10 ppm",
      "100 ppm"
    ],
    "exp": "The alarm level for enclosed space entry checks for H₂S, per SOLAS, is 10 ppm.",
    "cat": "TOXIC",
    "id": "T14A_036"
  },
  {
    "q": "What H₂S concentration represents the IDLH (Immediately Dangerous to Life) limit?",
    "a": "100 ppm",
    "opts": [
      "10 ppm",
      "35 ppm",
      "100 ppm",
      "300 ppm"
    ],
    "exp": "100 ppm of H₂S is considered Immediately Dangerous to Life and Health (IDLH), requiring immediate evacuation.",
    "cat": "TOXIC",
    "id": "T14A_037"
  },
  {
    "q": "What is the Lower Explosive Limit (LEL) of H₂S?",
    "a": "4.3 % vol",
    "opts": [
      "1.0 % vol",
      "4.3 % vol",
      "10.0 % vol",
      "12.5 % vol"
    ],
    "exp": "H₂S is flammable and has a Lower Explosive Limit (LEL) of 4.3 % vol (43,000 ppm).",
    "cat": "TOXIC",
    "id": "T14A_038"
  },
  {
    "q": "Which cargo can produce high levels of Carbon Monoxide (CO)?",
    "a": "Coal, charcoal, wood pulp",
    "opts": [
      "Crude oil",
      "Sulphur ore",
      "Coal, charcoal, wood pulp",
      "Liquified Natural Gas (LNG)"
    ],
    "exp": "CO is produced in cargo holds when cargoes like coal, charcoal, and wood pulp self-oxidise.",
    "cat": "TOXIC",
    "id": "T14A_039"
  },
  {
    "q": "What happens to CO at the working electrode of an electrochemical cell?",
    "a": "CO + H₂O → CO₂ + 2H⁺ + 2e⁻",
    "opts": [
      "CO + O₂ → CO₂",
      "CO + H₂O → CO₂ + 2H⁺ + 2e⁻",
      "CO → C + O₂",
      "2CO + 2e⁻ → CO₂"
    ],
    "exp": "CO diffuses through the membrane and is oxidised: CO + H₂O → CO₂ + 2H⁺ + 2e⁻.",
    "cat": "TOXIC",
    "id": "T14A_040"
  },
  {
    "q": "What is the 8-hour TWA occupational limit for CO?",
    "a": "20 ppm",
    "opts": [
      "10 ppm",
      "20 ppm",
      "35 ppm",
      "100 ppm"
    ],
    "exp": "The TWA (8 hr) occupational limit for CO is 20 ppm.",
    "cat": "TOXIC",
    "id": "T14A_041"
  },
  {
    "q": "What is the SOLAS enclosed space alarm trigger limit for CO?",
    "a": "35 ppm",
    "opts": [
      "20 ppm",
      "35 ppm",
      "100 ppm",
      "1200 ppm"
    ],
    "exp": "The alarm trigger for enclosed space entry checks for CO is 35 ppm.",
    "cat": "TOXIC",
    "id": "T14A_042"
  },
  {
    "q": "What is the IDLH limit for Carbon Monoxide?",
    "a": "1200 ppm",
    "opts": [
      "100 ppm",
      "300 ppm",
      "800 ppm",
      "1200 ppm"
    ],
    "exp": "The Immediately Dangerous to Life and Health (IDLH) limit for CO is 1200 ppm.",
    "cat": "TOXIC",
    "id": "T14A_043"
  },
  {
    "q": "What is the SOLAS enclosed space limit for Sulphur Dioxide (SO₂)?",
    "a": "2 ppm TWA",
    "opts": [
      "1 ppm TWA",
      "2 ppm TWA",
      "5 ppm TWA",
      "10 ppm TWA"
    ],
    "exp": "The SOLAS enclosed space entry requirement for SO₂ is strictly <2 ppm TWA.",
    "cat": "TOXIC",
    "id": "T14A_044"
  },
  {
    "q": "What is the complete safe range for O₂ during an enclosed space entry check?",
    "a": "19.5 – 23.5 %",
    "opts": [
      "18.0 – 21.0 %",
      "19.5 – 23.5 %",
      "20.9 – 25.0 %",
      "19.5 – 21.0 %"
    ],
    "exp": "The approved safe range for oxygen is between 19.5 % (deficiency limit) and 23.5 % (enrichment limit).",
    "cat": "TOXIC",
    "id": "T14A_045"
  },
  {
    "q": "What is the primary purpose of a bump test?",
    "a": "Verify sensor responds & alarms work",
    "opts": [
      "Adjust the sensor reading accuracy",
      "Zero the instrument in fresh air",
      "Verify sensor responds & alarms work",
      "Check the linearity of the sensor"
    ],
    "exp": "A bump test is a quick functional check to ensure the sensor responds to the target gas and triggers the alarms correctly.",
    "cat": "CALIB",
    "id": "T14A_046"
  },
  {
    "q": "Does a bump test involve adjusting the instrument's reading?",
    "a": "NO - Pass/Fail only",
    "opts": [
      "YES - Zero and Span adjusted",
      "YES - Only Span is adjusted",
      "NO - Pass/Fail only",
      "NO - but the linearity is verified"
    ],
    "exp": "A bump test verifies functionality but makes no adjustments to the electronic output. It is strictly Pass/Fail.",
    "cat": "CALIB",
    "id": "T14A_047"
  },
  {
    "q": "How frequently should a portable gas detector bump test be performed?",
    "a": "Before every use / daily",
    "opts": [
      "Before every use / daily",
      "Weekly",
      "Every 3–6 months",
      "Annually"
    ],
    "exp": "Manufacturers and ISGOTT recommend a bump test before each use or daily.",
    "cat": "CALIB",
    "id": "T14A_048"
  },
  {
    "q": "What is the goal of a full calibration?",
    "a": "Verify AND adjust reading accuracy",
    "opts": [
      "Verify sensor responds & alarms work",
      "Verify AND adjust reading accuracy",
      "Replace the electrolyte membrane",
      "Check the battery voltage under load"
    ],
    "exp": "Unlike a bump test, full calibration adjusts the instrument's electronic output to match known reference gas concentrations.",
    "cat": "CALIB",
    "id": "T14A_049"
  },
  {
    "q": "What is the target reading when performing a Fresh Air Zero on an oxygen sensor?",
    "a": "20.9 % O₂",
    "opts": [
      "0 % O₂",
      "19.5 % O₂",
      "20.9 % O₂",
      "23.5 % O₂"
    ],
    "exp": "Clean air contains 20.9 % oxygen, so the zero adjustment for an O₂ sensor must read exactly 20.9 % O₂.",
    "cat": "CALIB",
    "id": "T14A_050"
  },
  {
    "q": "What must be used to perform a Span Calibration on an explosimeter?",
    "a": "Certified traceable span gas (known ppm/% LEL)",
    "opts": [
      "Any concentration above alarm threshold",
      "Certified traceable span gas (known ppm/% LEL)",
      "Exhaust gas from an engine",
      "Pure nitrogen gas"
    ],
    "exp": "Span calibration requires certified span gas from a traceable cylinder at a known concentration (e.g. 50 % LEL methane/propane).",
    "cat": "CALIB",
    "id": "T14A_051"
  },
  {
    "q": "What is checked during a Linearity Check?",
    "a": "Apply a mid-range gas and verify reading without adjustment",
    "opts": [
      "Adjust the zero pot in clean air",
      "Apply full-scale gas and turn the span pot",
      "Apply a mid-range gas and verify reading without adjustment",
      "Verify the alarms sound at exactly 10 % LEL"
    ],
    "exp": "A mid-range gas (like 25 % LEL) is applied to verify the sensor responds linearly across its range without making further adjustments.",
    "cat": "CALIB",
    "id": "T14A_052"
  },
  {
    "q": "What is the acceptable tolerance for the linearity check?",
    "a": "±5 %",
    "opts": [
      "±1 %",
      "±2.5 %",
      "±5 %",
      "±10 %"
    ],
    "exp": "If the reading is outside ±5 % during the linearity check, the sensor may be failing.",
    "cat": "CALIB",
    "id": "T14A_053"
  },
  {
    "q": "What is the typical required interval for a full calibration?",
    "a": "Every 3–6 months or after sensor replacement",
    "opts": [
      "Before every confined space entry",
      "Once a month",
      "Every 3–6 months or after sensor replacement",
      "Every 5 years during special survey"
    ],
    "exp": "Full calibration is scheduled every 3–6 months or immediately following any sensor replacement or failed bump test.",
    "cat": "CALIB",
    "id": "T14A_054"
  },
  {
    "q": "What must immediately follow a sensor replacement in a portable gas detector?",
    "a": "Full Calibration",
    "opts": [
      "Bump Test",
      "Full Calibration",
      "Linearity Check only",
      "Battery change"
    ],
    "exp": "Replacing a sensor requires an immediate full calibration (zero and span) to align the new sensor's output with the electronics.",
    "cat": "CALIB",
    "id": "T14A_055"
  },
  {
    "q": "What action is required if an instrument fails a routine bump test?",
    "a": "Full Calibration",
    "opts": [
      "Ignore it and use the instrument anyway",
      "Full Calibration",
      "Replace the entire instrument",
      "Ventilate the space for another hour"
    ],
    "exp": "If an instrument does not respond properly during a bump test, a full calibration must be performed.",
    "cat": "CALIB",
    "id": "T14A_056"
  },
  {
    "q": "How much time does a typical bump test take?",
    "a": "<1 minute",
    "opts": [
      "<1 minute",
      "5–15 minutes",
      "30 minutes",
      "1 hour"
    ],
    "exp": "A bump test is a very rapid functional check, typically taking less than 30 seconds (<1 minute).",
    "cat": "CALIB",
    "id": "T14A_057"
  },
  {
    "q": "How much time is typically required to perform a full calibration?",
    "a": "5–15 minutes",
    "opts": [
      "<1 minute",
      "5–15 minutes",
      "1–2 hours",
      "24 hours"
    ],
    "exp": "A full calibration takes 5–15 minutes as it involves zeroing, spanning, and linearity checks with certified gas.",
    "cat": "CALIB",
    "id": "T14A_058"
  },
  {
    "q": "What gas is used for a bump test?",
    "a": "Any concentration above alarm threshold",
    "opts": [
      "Fresh clean air only",
      "Certified traceable span gas exactly at 50 % LEL",
      "Any concentration above alarm threshold",
      "Pure 100 % vol methane"
    ],
    "exp": "A bump test merely needs to trigger the alarm, so any gas concentration above the alarm threshold is sufficient.",
    "cat": "CALIB",
    "id": "T14A_059"
  },
  {
    "q": "How is a full calibration documented?",
    "a": "Full calibration certificate",
    "opts": [
      "Simple log entry",
      "Verbal confirmation to the Master",
      "Full calibration certificate",
      "No documentation required"
    ],
    "exp": "A full calibration requires a formal certificate recording the date, serial number, batch, readings before/after, and technician signature.",
    "cat": "CALIB",
    "id": "T14A_060"
  },
  {
    "q": "What three parameters does a portable UTI dipping tape measure?",
    "a": "Ullage, Temperature, Interface",
    "opts": [
      "Ullage, Temperature, Interface",
      "Ullage, Toxicity, Ignition point",
      "Under-keel clearance, Trim, Interface",
      "Ullage, Temperature, Inert gas"
    ],
    "exp": "UTI stands for Ullage, Temperature, and Interface.",
    "cat": "GAUGE",
    "id": "T14A_061"
  },
  {
    "q": "How is ullage defined in cargo gauging?",
    "a": "Empty space volume between the tank top reference plug and the liquid surface",
    "opts": [
      "Total distance from tank bottom to deck level",
      "Empty space volume between the tank top reference plug and the liquid surface",
      "Depth of the free water layer at the bottom of the tank",
      "Total volume of liquid cargo loaded"
    ],
    "exp": "Ullage is the measurement of the empty space above the liquid. Ullage = Total Tank Height − Liquid Level.",
    "cat": "GAUGE",
    "id": "T14A_062"
  },
  {
    "q": "What is the standard normalised temperature baseline for custody transfer billing?",
    "a": "15 °C",
    "opts": [
      "0 °C",
      "15 °C",
      "20 °C",
      "25 °C"
    ],
    "exp": "Volume calculations are adjusted to the normalised baseline of 15 °C for commercial custody transfer.",
    "cat": "GAUGE",
    "id": "T14A_063"
  },
  {
    "q": "How does the interface probe differentiate between oil and water?",
    "a": "High-sensitivity conductivity sensor",
    "opts": [
      "Differential pressure sensor",
      "High-sensitivity conductivity sensor",
      "Ultrasonic density scanner",
      "Thermal expansion thermistor"
    ],
    "exp": "The probe uses a conductivity sensor that instantly detects the transition from non-conductive hydrocarbons to the conductive free water layer.",
    "cat": "GAUGE",
    "id": "T14A_064"
  },
  {
    "q": "What is the intrinsic safety rating requirement for a UTI tape entering a cargo tank?",
    "a": "Ex ia Zone 0",
    "opts": [
      "Ex d Zone 1",
      "Ex e Zone 2",
      "Ex ia Zone 0",
      "Ex p Safe Area"
    ],
    "exp": "Because the probe drops directly into a Category Zone 0 explosive atmosphere, it must be intrinsically safe (Ex ia).",
    "cat": "GAUGE",
    "id": "T14A_065"
  },
  {
    "q": "What is the typical battery supply limit for a UTI circuit to maintain intrinsic safety?",
    "a": "6–9 V DC battery supply",
    "opts": [
      "1–3 V DC battery supply",
      "6–9 V DC battery supply",
      "12–24 V DC battery supply",
      "110 V AC supply"
    ],
    "exp": "Circuit power is highly restricted to a 6–9 V DC battery supply to prevent sufficient thermal energy for ignition.",
    "cat": "GAUGE",
    "id": "T14A_066"
  },
  {
    "q": "To maintain intrinsic safety, the open-circuit voltage of the UTI tape must remain below what value?",
    "a": "Below 25 V",
    "opts": [
      "Below 5 V",
      "Below 12 V",
      "Below 25 V",
      "Below 50 V"
    ],
    "exp": "The Ex ia intrinsically safe parameters require open-circuit voltage to remain below 25 V.",
    "cat": "GAUGE",
    "id": "T14A_067"
  },
  {
    "q": "What is the maximum allowed short-circuit current for a UTI tape?",
    "a": "Below 25 mA",
    "opts": [
      "Below 5 mA",
      "Below 10 mA",
      "Below 25 mA",
      "Below 100 mA"
    ],
    "exp": "The Ex ia standard restricts short-circuit current to below 25 mA to prevent ignition-capable sparks.",
    "cat": "GAUGE",
    "id": "T14A_068"
  },
  {
    "q": "What component is installed inline on a UTI tape to guarantee intrinsic safety?",
    "a": "Inline zener barriers",
    "opts": [
      "Thermal overload relays",
      "Galvanic isolators",
      "Inline zener barriers",
      "Magnetic circuit breakers"
    ],
    "exp": "Inline zener barriers limit voltage and current to ensure no fault condition can ignite the explosive atmosphere.",
    "cat": "GAUGE",
    "id": "T14A_069"
  },
  {
    "q": "What is the measurement accuracy of a Servo Float remote gauging system?",
    "a": "±1 mm",
    "opts": [
      "±0.1 mm",
      "±1 mm",
      "±5–10 mm",
      "±10–20 mm"
    ],
    "exp": "Servo float systems achieve custody transfer grade accuracy of ±1 mm.",
    "cat": "GAUGE",
    "id": "T14A_070"
  },
  {
    "q": "What operating principle does FMCW Radar use for tank gauging?",
    "a": "Frequency difference between transmitted and reflected signal",
    "opts": [
      "Motorized servo tracking a fluid interface",
      "Frequency difference between transmitted and reflected signal",
      "Differential pressure between tank bottom and top",
      "Dielectric capacitance shift"
    ],
    "exp": "FMCW (Frequency Modulated Continuous Wave) calculates distance via time-of-flight derived from the frequency difference between transmitted and reflected signals.",
    "cat": "GAUGE",
    "id": "T14A_071"
  },
  {
    "q": "How does a Hydrostatic DP remote gauging system determine fluid height?",
    "a": "Differential pressure between tank bottom and upper vapour seal",
    "opts": [
      "Encoder counts tape payout for position",
      "Frequency difference between transmitted and reflected signal",
      "Differential pressure between tank bottom and upper vapour seal",
      "Dielectric capacitance shift"
    ],
    "exp": "Hydrostatic DP uses the formula DP = ρ·g·h by measuring the differential pressure between the tank bottom and the upper vapour seal.",
    "cat": "GAUGE",
    "id": "T14A_072"
  },
  {
    "q": "Where are capacitance probe gauging systems commonly used?",
    "a": "Engine bilges, overflow alarms, sludge tanks",
    "opts": [
      "Main cargo tanks",
      "Crude oil and LPG pressure tanks",
      "Fuel oil settling and ballast tanks",
      "Engine bilges, overflow alarms, sludge tanks"
    ],
    "exp": "Capacitance probes, which measure shifts in dielectric capacitance, are typically used for engine bilges, overflow alarms, and sludge tanks.",
    "cat": "GAUGE",
    "id": "T14A_073"
  },
  {
    "q": "Which gauging system has no moving parts and is ideal for chemical and LPG pressure tanks?",
    "a": "FMCW Radar",
    "opts": [
      "Servo Float",
      "FMCW Radar",
      "UTI Dipping Tape",
      "Mechanical Float Switch"
    ],
    "exp": "FMCW Radar provides non-contact measurement (±1–3 mm) with no moving parts, making it ideal for crude, chemical, and LPG tanks.",
    "cat": "GAUGE",
    "id": "T14A_074"
  },
  {
    "q": "Which gauging system is primarily used for main cargo tanks requiring custody transfer grade accuracy?",
    "a": "Servo Float",
    "opts": [
      "Hydrostatic DP",
      "Capacitance Probe",
      "Mechanical Float Switch",
      "Servo Float"
    ],
    "exp": "The motorized Servo Float system offers ±1 mm accuracy, standard for custody transfer grade requirements in main cargo tanks.",
    "cat": "GAUGE",
    "id": "T14A_075"
  },
  {
    "q": "What is the primary function of a cargo computer?",
    "a": "Approved software system that calculates stability and structural loading",
    "opts": [
      "Monitors engine fuel consumption",
      "Approved software system that calculates stability and structural loading",
      "Navigates the vessel automatically",
      "Logs cargo temperatures for charterers"
    ],
    "exp": "The cargo computer (loading instrument) calculates the vessel's stability (GM, GZ) and structural loading (SF, BM) for any planned condition.",
    "cat": "COMP",
    "id": "T14A_076"
  },
  {
    "q": "What formal certification must a loading instrument carry?",
    "a": "Type Approval Certificate",
    "opts": [
      "Safety Construction Certificate",
      "Type Approval Certificate",
      "Load Line Certificate",
      "Intrinsic Safety Certificate"
    ],
    "exp": "The loading instrument is type-approved by a Classification Society and must carry a valid Type Approval Certificate onboard.",
    "cat": "COMP",
    "id": "T14A_077"
  },
  {
    "q": "Which of the following is a key Stability output calculated by the cargo computer?",
    "a": "GM (metacentric height)",
    "opts": [
      "Shear Force (SF)",
      "Bending Moment (BM)",
      "Torsional Moment",
      "GM (metacentric height)"
    ],
    "exp": "GM is an initial stability indicator. SF, BM, and Torsional Moment are structural outputs.",
    "cat": "COMP",
    "id": "T14A_078"
  },
  {
    "q": "How is Shear Force (SF) defined in the context of ship structural loading?",
    "a": "Vertical force acting at each cross-section of the hull",
    "opts": [
      "Twist force from asymmetric loading",
      "Vertical force acting at each cross-section of the hull",
      "The bending stress applied to the hull girder",
      "Total vessel weight in tonnes"
    ],
    "exp": "Shear Force is the net vertical upward or downward force acting at any cut cross-section of the hull due to uneven weight and buoyancy distribution.",
    "cat": "COMP",
    "id": "T14A_079"
  },
  {
    "q": "What causes the structural stress known as Bending Moment (BM)?",
    "a": "The bending stress applied to the hull girder at each cross-section",
    "opts": [
      "Asymmetric loading of deck openings",
      "Reduction of GM due to slack tanks",
      "Vertical force acting at each cross-section of the hull",
      "The bending stress applied to the hull girder at each cross-section"
    ],
    "exp": "Bending moment is the integral of shear force along the length, representing the bending stress (sagging or hogging) applied to the hull girder.",
    "cat": "COMP",
    "id": "T14A_080"
  },
  {
    "q": "What condition occurs when weight is concentrated at the ends of the ship and buoyancy is amidships?",
    "a": "Sagging",
    "opts": [
      "Hogging",
      "Sagging",
      "Torsion",
      "Parametric rolling"
    ],
    "exp": "If weight is at the ends and buoyancy is pushing up amidships, the middle of the ship droops downward, known as sagging.",
    "cat": "COMP",
    "id": "T14A_081"
  },
  {
    "q": "What condition occurs when weight is concentrated amidships and buoyancy is distributed along the length?",
    "a": "Hogging",
    "opts": [
      "Hogging",
      "Sagging",
      "Listing",
      "Shearing"
    ],
    "exp": "Hogging occurs when the heavy middle sinks relative to the buoyant ends, causing the ends to droop down (belly up, arch down).",
    "cat": "COMP",
    "id": "T14A_082"
  },
  {
    "q": "Torsional moment is a structural calculation particularly critical for which type of vessel?",
    "a": "Container ships",
    "opts": [
      "Crude oil tankers",
      "Container ships",
      "Passenger ferries",
      "Tugboats"
    ],
    "exp": "Torsional moment represents the twist force from asymmetric loading of large deck openings, which is characteristic of container ships.",
    "cat": "COMP",
    "id": "T14A_083"
  },
  {
    "q": "What is the consequence of slack fluid tanks on the vessel's stability?",
    "a": "Reduces effective GM when slack tanks are present",
    "opts": [
      "Increases the vessel's Bending Moment",
      "Increases the metacentric height (GM)",
      "Reduces effective GM when slack tanks are present",
      "Causes severe hull torsion"
    ],
    "exp": "This is known as the Free Surface Effect, which shifts the center of gravity and reduces the effective GM (stability).",
    "cat": "COMP",
    "id": "T14A_084"
  },
  {
    "q": "How does the cargo computer indicate that a structural or stability parameter has exceeded class-approved limits?",
    "a": "RED indicator",
    "opts": [
      "GREEN indicator",
      "AMBER indicator",
      "RED indicator",
      "BLUE indicator"
    ],
    "exp": "Results are displayed with GREEN (within limits), AMBER (near limit), or RED (exceeded) indicators.",
    "cat": "COMP",
    "id": "T14A_085"
  },
  {
    "q": "What is the ETO's role regarding the loading computer before departure?",
    "a": "Verify operational, check parameters, print/sign stability calculation",
    "opts": [
      "Manually override stability alarms",
      "Enter the planned loading sequence into the VDR",
      "Verify operational, check parameters, print/sign stability calculation",
      "Approve the structural loading for the classification society"
    ],
    "exp": "The ETO must verify the computer is operational, check that all stability and structural parameters are within limits, and print/sign the calculation for the Master.",
    "cat": "COMP",
    "id": "T14A_086"
  },
  {
    "q": "What must be available on board as a backup to the approved loading computer?",
    "a": "Independent manual calculation method (trim and stability booklet)",
    "opts": [
      "A second identical laptop",
      "Independent manual calculation method (trim and stability booklet)",
      "An ECDIS planning station",
      "Shore-based calculation service"
    ],
    "exp": "Class rules mandate that an independent manual calculation method must be available as a backup if the computer fails.",
    "cat": "COMP",
    "id": "T14A_087"
  },
  {
    "q": "What could happen if a ship loads cargo exceeding the permissible Shear Force (SF) or Bending Moment (BM) limits?",
    "a": "Permanent hull deformation or fracture",
    "opts": [
      "Instantaneous capsizing",
      "Permanent hull deformation or fracture",
      "Loss of main engine propulsion",
      "Free surface effect becomes zero"
    ],
    "exp": "Exceeding class-approved maximum permissible limits for SF and BM can cause the hull to permanently deform or break apart.",
    "cat": "COMP",
    "id": "T14A_088"
  },
  {
    "q": "In the ETO memory aid SDGBFT for loading computers, what do S and B stand for?",
    "a": "Shear force and Bending moment",
    "opts": [
      "Stability and Buoyancy",
      "Shear force and Bending moment",
      "Stress and Ballast",
      "Stowage and Bulk"
    ],
    "exp": "SDGBFT stands for Shear force, Draft, GM, Bending moment, Freeboard, Trim.",
    "cat": "COMP",
    "id": "T14A_089"
  },
  {
    "q": "What regulatory criteria must the GZ curve (static stability arm) meet in the loading computer?",
    "a": "IMO A.749 criteria",
    "opts": [
      "SOLAS Chapter XII",
      "MARPOL Annex I",
      "IMO A.749 criteria",
      "STCW Code Section A-III/6"
    ],
    "exp": "The GZ curve must meet IMO A.749 criteria, which specifies area under the curve, maximum GZ, and angle of maximum GZ.",
    "cat": "COMP",
    "id": "T14A_090"
  },
  {
    "q": "What is an ENC in the context of ECDIS?",
    "a": "Intelligent object-based vector chart",
    "opts": [
      "Simple digital scan of a paper chart",
      "Intelligent object-based vector chart",
      "Radar image overlay",
      "A meteorological forecasting tool"
    ],
    "exp": "An ENC (Electronic Navigational Chart) is an intelligent vector chart where data is stored as discrete objects with specific attributes.",
    "cat": "ECDIS",
    "id": "T14A_091"
  },
  {
    "q": "Which standard dictates the data format for ENCs?",
    "a": "IHO S-57",
    "opts": [
      "IMO A.749",
      "SOLAS V/19",
      "IHO S-57",
      "NMEA 0183"
    ],
    "exp": "ENCs conform to the IHO S-57 data standard and IHO S-52 presentation standard.",
    "cat": "ECDIS",
    "id": "T14A_092"
  },
  {
    "q": "What triggers the ECDIS Safety Contour Alarm?",
    "a": "Projected track crosses the user-set safety contour depth",
    "opts": [
      "Vessel speed exceeds maximum allowed",
      "Projected track crosses the user-set safety contour depth",
      "ENCs have not been updated weekly",
      "GPS signal is temporarily lost"
    ],
    "exp": "The anti-grounding alarm fires when the vessel's projected track crosses the user-set safety contour depth. It is the most critical alarm.",
    "cat": "ECDIS",
    "id": "T14A_093"
  },
  {
    "q": "What is an RNC?",
    "a": "A simple digital scan of a traditional paper nautical chart",
    "opts": [
      "An intelligent vector chart with alarm capabilities",
      "A simple digital scan of a traditional paper nautical chart",
      "A radar image mapped over vector objects",
      "A mandatory backup hardware unit for ECDIS"
    ],
    "exp": "Raster Navigational Charts (RNCs) are simply scanned bitmaps of paper charts, containing no underlying object intelligence.",
    "cat": "ECDIS",
    "id": "T14A_094"
  },
  {
    "q": "What is the SOLAS requirement if a ship uses RNCs on its ECDIS?",
    "a": "Full portfolio of up-to-date paper charts as backup",
    "opts": [
      "No paper backup is required",
      "A second, independent ECDIS is required",
      "Full portfolio of up-to-date paper charts as backup",
      "Only the passage plan must be printed"
    ],
    "exp": "Because RNCs lack object intelligence and automatic alarms, using them requires maintaining a full portfolio of up-to-date paper charts.",
    "cat": "ECDIS",
    "id": "T14A_095"
  },
  {
    "q": "How frequently must ENCs be updated?",
    "a": "Weekly security-encrypted updates",
    "opts": [
      "Daily via VHF",
      "Weekly security-encrypted updates",
      "Monthly via USB",
      "Annually during drydock"
    ],
    "exp": "ENCs require weekly security-encrypted updates via VSAT, USB, or AVCS to ensure navigational data is current.",
    "cat": "ECDIS",
    "id": "T14A_096"
  },
  {
    "q": "Under SOLAS V/19, ECDIS is mandated on ships of what minimum gross tonnage?",
    "a": "≥500 GT",
    "opts": [
      "≥150 GT",
      "≥500 GT",
      "≥3000 GT",
      "≥10000 GT"
    ],
    "exp": "SOLAS V/19 mandates ECDIS with ENCs on ships ≥500 GT (implemented via a retrofit schedule from 2012).",
    "cat": "ECDIS",
    "id": "T14A_097"
  },
  {
    "q": "WIDAS (Water Ingress Detection and Alarm System) is mandatory for which type of vessels?",
    "a": "All bulk carriers ≥150 m in length",
    "opts": [
      "All containerships ≥3000 GT",
      "All bulk carriers ≥150 m in length",
      "All oil tankers ≥500 GT",
      "All passenger ships regardless of length"
    ],
    "exp": "Under SOLAS XII/12, all bulk carriers ≥150 m must have WIDAS fitted in cargo holds, ballast tanks, and cofferdams.",
    "cat": "ECDIS",
    "id": "T14A_098"
  },
  {
    "q": "How does a conductivity probe in a WIDAS detect water?",
    "a": "Two exposed stainless steel electrodes separated by an air gap",
    "opts": [
      "A magnetic microswitch actuating a float",
      "Two exposed stainless steel electrodes separated by an air gap",
      "A piezoelectric crystal detecting water pressure",
      "An ultrasonic pulse measuring distance to water"
    ],
    "exp": "When rising water bridges the air gap between the two exposed stainless steel electrodes, current flows to activate the alarm.",
    "cat": "ECDIS",
    "id": "T14A_099"
  },
  {
    "q": "What does a Yellow state indicate on the WIDAS master bridge panel?",
    "a": "Fault - broken wire or open circuit",
    "opts": [
      "Normal - no water detected",
      "Alarm - water ingress detected",
      "Fault - broken wire or open circuit",
      "Test mode activated"
    ],
    "exp": "The panel indicates Normal (Green), Alarm (Red), and Fault (Yellow) which signifies loop integrity issues like a broken wire.",
    "cat": "ECDIS",
    "id": "T14A_100"
  },
  {
    "q": "What is the mandatory frequency for the ETO to perform WIDAS field tests?",
    "a": "Quarterly field tests",
    "opts": [
      "Weekly field tests",
      "Monthly field tests",
      "Quarterly field tests",
      "Annual field tests"
    ],
    "exp": "ETOs must manually activate each sensor quarterly and verify the bridge panel response, logging it in the SMS.",
    "cat": "ECDIS",
    "id": "T14A_101"
  },
  {
    "q": "What is the first step in the Emergency Steering Telemotor Failure Protocol?",
    "a": "Alert bridge immediately - OOW reduces main engine load",
    "opts": [
      "Dispatch engineer to aft steering gear flat",
      "Turn local changeover switch to Local Manual Control",
      "Top up the telemotor hydraulic fluid",
      "Alert bridge immediately - OOW reduces main engine load"
    ],
    "exp": "The immediate action is to alert the bridge so the OOW can reduce engine load and broadcast a navigational warning.",
    "cat": "ECDIS",
    "id": "T14A_102"
  },
  {
    "q": "How is the defective telemotor signal loop isolated in the steering gear room?",
    "a": "Turn local changeover switch from Remote/Bridge to Local Manual Control",
    "opts": [
      "Turn off the main hydraulic pump breakers",
      "Turn local changeover switch from Remote/Bridge to Local Manual Control",
      "Disconnect the rudder angle indicator feedback arm",
      "Engage the manual hand-hydraulic pump wheel"
    ],
    "exp": "Switching to Local Manual Control physically disconnects the defective telemotor signal loop from the steering pumps.",
    "cat": "ECDIS",
    "id": "T14A_103"
  },
  {
    "q": "What triggers an ECDIS Cross-Track Distance (XTD) alarm?",
    "a": "Vessel deviates beyond a set corridor from the planned route",
    "opts": [
      "Vessel approaches a waypoint",
      "Projected track crosses the safety contour",
      "Vessel deviates beyond a set corridor from the planned route",
      "GPS position input is lost"
    ],
    "exp": "The XTD alarm fires if the vessel drifts outside the pre-set cross-track corridor limits defined in the route plan.",
    "cat": "ECDIS",
    "id": "T14A_104"
  },
  {
    "q": "What triggers an ECDIS System Test Alarm?",
    "a": "ECDIS loses GPS or gyro sensor input",
    "opts": [
      "Chart cells are out-of-date",
      "ECDIS loses GPS or gyro sensor input",
      "The vessel enters water shallower than safety contour",
      "The vessel approaches the final waypoint"
    ],
    "exp": "The system test alarm alerts the user to fundamental equipment failures, such as losing inputs from GPS, gyro, log, or chart database corruption.",
    "cat": "ECDIS",
    "id": "T14A_105"
  },
  {
    "q": "When do the new SOLAS amendments regarding inclinometers and container loss enter into force?",
    "a": "1 January 2026",
    "opts": [
      "1 January 2025",
      "1 January 2026",
      "1 July 2026",
      "1 January 2030"
    ],
    "exp": "The new statutory forces take effect strictly on 1 January 2026, and non-compliance will trigger PSC detention.",
    "cat": "SOLAS",
    "id": "T14A_106"
  },
  {
    "q": "Which ships must carry an approved electronic inclinometer under the 2026 SOLAS V amendment?",
    "a": "All containerships and bulk carriers ≥3,000 GT",
    "opts": [
      "All cargo ships ≥500 GT",
      "All containerships and bulk carriers ≥3,000 GT",
      "Passenger ships ≥1,000 GT only",
      "All tankers and bulk carriers ≥150 m"
    ],
    "exp": "The amendment mandates inclinometers specifically on containerships and bulk carriers of 3,000 GT and upwards.",
    "cat": "SOLAS",
    "id": "T14A_107"
  },
  {
    "q": "What dangerous phenomenon are the new electronic inclinometers designed to help mitigate?",
    "a": "Parametric rolling",
    "opts": [
      "Hull hogging and sagging",
      "Free surface effect",
      "Parametric rolling",
      "Torsional hull twisting"
    ],
    "exp": "The goal is to detect extreme rolling angles caused by parametric rolling, which rips apart deck lashing gear and causes container loss.",
    "cat": "SOLAS",
    "id": "T14A_108"
  },
  {
    "q": "What causes parametric rolling on a vessel?",
    "a": "Wave encounter frequency aligns with hull's natural roll period",
    "opts": [
      "Wind strikes the vessel directly on the beam",
      "Wave encounter frequency aligns with hull's natural roll period",
      "Cargo weight is shifted unevenly to one side",
      "Vessel navigates through extremely shallow water"
    ],
    "exp": "Parametric rolling is an unstable phenomenon triggered when the frequency of encountering waves matches the hull's natural roll period.",
    "cat": "SOLAS",
    "id": "T14A_109"
  },
  {
    "q": "What is the mandatory measurement precision requirement for the electronic inclinometer?",
    "a": "±0.5° or better",
    "opts": [
      "±0.1° or better",
      "±0.5° or better",
      "±1.0° or better",
      "±2.5° or better"
    ],
    "exp": "SOLAS requires the inclinometer to measure roll metrics with a high precision of ±0.5° or better.",
    "cat": "SOLAS",
    "id": "T14A_110"
  },
  {
    "q": "To ensure data survival during switchboard disturbances, the inclinometer must be wired to what?",
    "a": "UPS",
    "opts": [
      "The emergency generator switchboard directly",
      "A 24V DC battery bank exclusively",
      "UPS",
      "The ship's main propulsion bus"
    ],
    "exp": "The unit must be wired to an Uninterruptible Power Supply (UPS) to guarantee data survival during blackouts.",
    "cat": "SOLAS",
    "id": "T14A_111"
  },
  {
    "q": "Who must be immediately notified if containers are lost overboard under the 2026 amendments?",
    "a": "Nearest coastal state MRCC",
    "opts": [
      "The ship's classification society",
      "Nearest coastal state MRCC",
      "The charterer's designated person ashore",
      "IMO Headquarters in London"
    ],
    "exp": "A detailed hazard report must be immediately transmitted to the nearest coastal state Maritime Rescue Coordination Centre (MRCC).",
    "cat": "SOLAS",
    "id": "T14A_112"
  },
  {
    "q": "What is the critical emergency action the ETO must take during a container loss or heavy rolling incident?",
    "a": "Activate the VDR data preservation save function",
    "opts": [
      "Activate the VDR data preservation save function",
      "Manually override the steering gear telemotor",
      "Shut down power to the electronic inclinometer",
      "Eject the VDR float-free capsule into the sea"
    ],
    "exp": "The ETO must immediately activate the VDR preservation save function to freeze the data so it isn't overwritten by the continuous loop.",
    "cat": "SOLAS",
    "id": "T14A_113"
  },
  {
    "q": "A standard VDR continuous loop will overwrite data after how many hours?",
    "a": "48 hours",
    "opts": [
      "12 hours",
      "24 hours",
      "48 hours",
      "72 hours"
    ],
    "exp": "The standard VDR capsule runs a continuous loop that overwrites data after 48 hours.",
    "cat": "SOLAS",
    "id": "T14A_114"
  },
  {
    "q": "Where must the electronic inclinometer display be located?",
    "a": "Conning tower, visible to the OOW at all times",
    "opts": [
      "Engine Control Room",
      "Cargo Office",
      "Conning tower, visible to the OOW at all times",
      "Master's cabin"
    ],
    "exp": "The real-time illuminated roll angle display must be located at the conning position, visible to the Officer of the Watch (OOW).",
    "cat": "SOLAS",
    "id": "T14A_115"
  },
  {
    "q": "What is the consequence if the ETO fails to lock the VDR data after a container loss incident?",
    "a": "Data may be unrecoverable for the incident investigation",
    "opts": [
      "The VDR capsule will automatically eject",
      "The vessel's main engine will shut down",
      "Data may be unrecoverable for the incident investigation",
      "The inclinometer will lose calibration"
    ],
    "exp": "Failure to lock the data allows the 48-hour loop to overwrite crucial incident history, making it unrecoverable for investigators.",
    "cat": "SOLAS",
    "id": "T14A_116"
  },
  {
    "q": "When does the ETO calibrate the electronic inclinometer?",
    "a": "At even-keel in calm harbour before departure",
    "opts": [
      "During rough weather to establish max roll",
      "In drydock only",
      "At even-keel in calm harbour before departure",
      "Annually via remote satellite connection"
    ],
    "exp": "The sensor must be calibrated to establish a true zero reference at even-keel in calm water before departure.",
    "cat": "SOLAS",
    "id": "T14A_117"
  },
  {
    "q": "Non-compliance with the 2026 inclinometer requirement compromises which vessel certificate?",
    "a": "Safety Construction Certificate",
    "opts": [
      "Safety Radio Certificate",
      "Safety Equipment Certificate",
      "Safety Construction Certificate",
      "Load Line Certificate"
    ],
    "exp": "Non-compliance directly compromises the vessel's Safety Construction Certificate and will trigger a Port State Control detention.",
    "cat": "SOLAS",
    "id": "T14A_118"
  },
  {
    "q": "What specific information must the lost container hazard report contain?",
    "a": "Exact number of lost containers, GPS coordinates, timestamp, IMDG details",
    "opts": [
      "Charterer name, port of destination, wind speed, wave height",
      "Exact number of lost containers, GPS coordinates, timestamp, IMDG details",
      "Inclinometer calibration data, VDR model, crew list",
      "Fuel oil remaining, engine RPM, rudder angle, hull stress"
    ],
    "exp": "The immediate report must specify the exact number of lost containers, last known GPS coordinates, timestamp, and if IMDG dangerous goods are involved.",
    "cat": "SOLAS",
    "id": "T14A_119"
  },
  {
    "q": "Where does the digital data stream from the inclinometer go for unalterable post-incident history?",
    "a": "VDR",
    "opts": [
      "ECDIS",
      "Cargo Computer",
      "VDR",
      "AIS transponder"
    ],
    "exp": "The inclinometer's digital data interfaces directly with the Voyage Data Recorder (VDR).",
    "cat": "SOLAS",
    "id": "T14A_120"
  },
  {
    "q": "Why is an explosimeter unsafe to use in an inerted cargo tank?",
    "a": "Combustion requires oxygen, causing a false zero",
    "opts": [
      "Inert gas poisons the pellistor catalyst",
      "Combustion requires oxygen, causing a false zero",
      "The sensor will overheat and explode",
      "It reads 100 % LEL continuously"
    ],
    "exp": "An explosimeter relies on combustion (catalytic bead) which needs oxygen. Without O₂, it gives a fatal false zero reading in a gas-rich tank.",
    "cat": "SURV",
    "id": "T14A_121"
  },
  {
    "q": "In Surveyor terms, what components create the 'magnetic wind' in a thermomagnetic O₂ analyser?",
    "a": "Two Pt wires + magnet",
    "opts": [
      "A spinning dumbbell + optics",
      "Electrochemical cell + membrane",
      "Two Pt wires + magnet",
      "A zirconia tube + heating element"
    ],
    "exp": "The thermomagnetic O₂ analyser works using a strong permanent magnet and two Platinum (Pt) resistance wires to create and measure convective cooling.",
    "cat": "SURV",
    "id": "T14A_122"
  },
  {
    "q": "Before entering an enclosed space, what is the maximum safe limit for H₂S?",
    "a": "<10 ppm",
    "opts": [
      "<1 ppm",
      "<10 ppm",
      "<35 ppm",
      "<100 ppm"
    ],
    "exp": "The standard SOLAS safe limit for H₂S for enclosed space entry is strictly <10 ppm.",
    "cat": "SURV",
    "id": "T14A_123"
  },
  {
    "q": "What physical principle dictates the working of a thermocouple?",
    "a": "Seebeck Effect",
    "opts": [
      "Piezoelectric Effect",
      "Seebeck Effect",
      "Nernst Potential",
      "Curie's Law"
    ],
    "exp": "The Seebeck Effect states that two dissimilar metals joined together generate an EMF proportional to the temperature difference.",
    "cat": "SURV",
    "id": "T14A_124"
  },
  {
    "q": "What is the maximum measuring range of a Type K thermocouple (used for exhausts)?",
    "a": "Up to 1350 °C",
    "opts": [
      "Up to 600 °C",
      "Up to 850 °C",
      "Up to 1350 °C",
      "Up to 2000 °C"
    ],
    "exp": "A Type K (Chromel-Alumel) thermocouple can accurately measure temperatures up to 1350 °C.",
    "cat": "SURV",
    "id": "T14A_125"
  },
  {
    "q": "What does 'PT100' refer to in the context of an RTD sensor?",
    "a": "100 Ω at 0 °C",
    "opts": [
      "100 Ω at 100 °C",
      "100 Ω at 0 °C",
      "Max temperature of 100 °C",
      "100 mA excitation current"
    ],
    "exp": "PT100 means the sensing element is Platinum (PT) and it has a resistance of exactly 100 Ω at 0 °C.",
    "cat": "SURV",
    "id": "T14A_126"
  },
  {
    "q": "When calibrating a DP cell (pressure transmitter), what should the ZERO output read at zero pressure?",
    "a": "4.000 mA",
    "opts": [
      "0.000 mA",
      "4.000 mA",
      "12.000 mA",
      "20.000 mA"
    ],
    "exp": "The standard industrial signal loop is 4–20 mA, so the zero point must be adjusted to output exactly 4.000 mA.",
    "cat": "SURV",
    "id": "T14A_127"
  },
  {
    "q": "When calibrating a DP cell, what should the SPAN output read at full-scale pressure?",
    "a": "20.000 mA",
    "opts": [
      "4.000 mA",
      "10.000 mA",
      "20.000 mA",
      "24.000 mA"
    ],
    "exp": "At full-scale reference pressure, the SPAN pot is adjusted so the transmitter outputs exactly 20.000 mA.",
    "cat": "SURV",
    "id": "T14A_128"
  },
  {
    "q": "What physical effect is exploited by an echo sounder transducer?",
    "a": "Piezoelectric effect",
    "opts": [
      "Seebeck effect",
      "Piezoelectric effect",
      "Doppler effect",
      "Photoelectric effect"
    ],
    "exp": "The echo sounder uses the converse piezoelectric effect to transmit pulses and the direct piezoelectric effect to receive the returning echo.",
    "cat": "SURV",
    "id": "T14A_129"
  },
  {
    "q": "How is water depth calculated by an echo sounder using time (t) in seconds?",
    "a": "750 × t",
    "opts": [
      "1500 × t",
      "750 × t",
      "t / 1500",
      "343 × t"
    ],
    "exp": "Depth = (Speed × Time) / 2. Using seawater speed of 1500 m/s, Depth = 1500 × t / 2, which simplifies to 750 × t metres.",
    "cat": "SURV",
    "id": "T14A_130"
  },
  {
    "q": "What are the fire test specifications that a VDR orange float-free capsule must withstand?",
    "a": "260 °C for 10 hours",
    "opts": [
      "100 °C for 24 hours",
      "260 °C for 10 hours",
      "600 °C for 1 hour",
      "1000 °C for 30 minutes"
    ],
    "exp": "The VDR float-free capsule must survive a fire test of 260 °C for 10 hours to protect investigative data.",
    "cat": "SURV",
    "id": "T14A_131"
  },
  {
    "q": "What two mechanisms allow a gyrocompass to indicate True North?",
    "a": "Gyroscopic rigidity in space and controlled precession",
    "opts": [
      "Magnetic alignment and gyroscopic rigidity in space",
      "Gyroscopic rigidity in space and controlled precession",
      "Earth's magnetic field and pendulous mass",
      "Coriolis effect and rapid rotation"
    ],
    "exp": "A high-speed rotor uses gyroscopic rigidity to hold its axis, while gravity and Earth's rotation cause controlled precession to settle on True North.",
    "cat": "SURV",
    "id": "T14A_132"
  },
  {
    "q": "What happens if a gyrocompass experiences a total loss of UPS power?",
    "a": "Requires 2–6 hours for the gyro to resettle",
    "opts": [
      "It loses True North permanently",
      "Requires 2–6 hours for the gyro to resettle",
      "It reverts to acting as a magnetic compass",
      "It resynchronizes instantly upon power restoration"
    ],
    "exp": "Never cut power to the gyro without bridge permission, as a power loss drops the rotor speed and requires 2–6 hours to fully resettle on True North.",
    "cat": "SURV",
    "id": "T14A_133"
  },
  {
    "q": "In the Autopilot PID controller, what is the role of the Proportional (P) action?",
    "a": "Rudder angle applied in direct proportion to the course error",
    "opts": [
      "Eliminates steady-state offset",
      "Rudder angle applied in direct proportion to the course error",
      "Applies counter-rudder to prevent overshoot",
      "Calculates the ship's rate of turn"
    ],
    "exp": "The Proportional term applies a primary corrective rudder angle that is directly proportional to how far the ship is off course.",
    "cat": "SURV",
    "id": "T14A_134"
  },
  {
    "q": "In the Autopilot PID loop, what does the Integral (I) action eliminate?",
    "a": "Steady-state offset (weather helm)",
    "opts": [
      "Yaw oscillation",
      "Rudder overshoot",
      "Steady-state offset (weather helm)",
      "Sensor noise from the gyrocompass"
    ],
    "exp": "The Integral term builds up over time to eliminate any steady-state offset, such as weather helm caused by a persistent beam wind.",
    "cat": "SURV",
    "id": "T14A_135"
  },
  {
    "q": "What is the acceptable range for Oxygen (O₂) during an enclosed space entry check?",
    "a": "19.5–23.5 %",
    "opts": [
      "18.0–21.0 %",
      "19.5–23.5 %",
      "21.0–25.0 %",
      "15.0–20.0 %"
    ],
    "exp": "The SOLAS safe range for oxygen before entering an enclosed space is between 19.5 % and 23.5 %.",
    "cat": "REV",
    "id": "T14A_136"
  },
  {
    "q": "What is the TWA limit for Sulphur Dioxide (SO₂) in enclosed spaces?",
    "a": "<2 ppm TWA",
    "opts": [
      "<1 ppm TWA",
      "<2 ppm TWA",
      "<10 ppm TWA",
      "<35 ppm TWA"
    ],
    "exp": "The TWA limit for SO₂, often found near battery charging areas or sulphur cargoes, is strictly <2 ppm.",
    "cat": "REV",
    "id": "T14A_137"
  },
  {
    "q": "How frequently must a bump test be performed on a portable gas detector?",
    "a": "Before every use",
    "opts": [
      "Before every use",
      "Weekly",
      "Every 3–6 months",
      "Annually"
    ],
    "exp": "A bump test checks that the sensor and alarms are functioning and must be done before every use.",
    "cat": "REV",
    "id": "T14A_138"
  },
  {
    "q": "What depth must a VDR float-free capsule withstand during a pressure test?",
    "a": "6000 m",
    "opts": [
      "1000 m",
      "3000 m",
      "6000 m",
      "10000 m"
    ],
    "exp": "SOLAS specifications require the VDR capsule to survive extreme hydrostatic pressure equivalent to 6000 m depth.",
    "cat": "REV",
    "id": "T14A_139"
  },
  {
    "q": "What are the three freedoms of movement for a gyrocompass?",
    "a": "Spin, tilt, drift",
    "opts": [
      "Pitch, roll, yaw",
      "Surge, sway, heave",
      "Spin, tilt, drift",
      "Rigidity, precession, nutation"
    ],
    "exp": "A gyro has three freedoms of movement: spin (own axis), tilt (horizontal axis), and drift (vertical axis).",
    "cat": "REV",
    "id": "T14A_140"
  },
  {
    "q": "How often must ECDIS Electronic Navigational Charts (ENCs) be updated?",
    "a": "Weekly",
    "opts": [
      "Daily",
      "Weekly",
      "Monthly",
      "Every voyage"
    ],
    "exp": "ENCs require weekly security-encrypted updates via VSAT, USB, or AVCS.",
    "cat": "REV",
    "id": "T14A_141"
  },
  {
    "q": "What are the Zone 0 intrinsic safety circuit limits for a UTI tape?",
    "a": "<25 V, <25 mA",
    "opts": [
      "<5 V, <10 mA",
      "<12 V, <50 mA",
      "<25 V, <25 mA",
      "<110 V, <1 A"
    ],
    "exp": "To prevent ignition-capable sparks, open-circuit voltage must be <25 V and short-circuit current <25 mA.",
    "cat": "REV",
    "id": "T14A_142"
  },
  {
    "q": "How does a thermistor's resistance respond to temperature?",
    "a": "3–5 %/°C decrease",
    "opts": [
      "0.385 Ω/°C increase",
      "3–5 %/°C decrease",
      "Linear increase up to 1350 °C",
      "Exponential increase above 100 °C"
    ],
    "exp": "A thermistor is an NTC (Negative Temperature Coefficient) semiconductor where resistance drops 3–5 % per °C rise.",
    "cat": "REV",
    "id": "T14A_143"
  },
  {
    "q": "What is the purpose of the Derivative (D) term in an autopilot PID controller?",
    "a": "Counter-rudder, prevents overshoot",
    "opts": [
      "Rudder proportional to error",
      "Eliminates steady-state offset",
      "Counter-rudder, prevents overshoot",
      "Calculates the ship's stability parameters"
    ],
    "exp": "The D-term acts on the rate of change, applying counter-rudder to stop the ship from overshooting the course and reducing yaw oscillation.",
    "cat": "REV",
    "id": "T14A_144"
  },
  {
    "q": "What is the typical measurement range of a Zirconia high-temperature O₂ cell?",
    "a": "0–21 % (or ppm range)",
    "opts": [
      "0–25 % O₂",
      "0–100 % O₂",
      "0–21 % (or ppm range)",
      "0–100 % LEL"
    ],
    "exp": "Zirconia cells measure O₂ accurately in exhaust gases in the 0–21 % or ppm range.",
    "cat": "REV",
    "id": "T14A_145"
  },
  {
    "q": "What is the appropriate alarm level for safe tank-entry using a Tankscope (NDIR)?",
    "a": "<1 % HC vol",
    "opts": [
      "<10 % LEL",
      "<1 % HC vol",
      "<5 % HC vol",
      "<20 % HC vol"
    ],
    "exp": "A Tankscope measures hydrocarbon volume. A reading of <1 % HC vol indicates the atmosphere is well below explosive bounds.",
    "cat": "REV",
    "id": "T14A_146"
  },
  {
    "q": "What concentration of H₂S represents the Immediately Dangerous to Life and Health (IDLH) limit?",
    "a": "100 ppm",
    "opts": [
      "10 ppm",
      "35 ppm",
      "100 ppm",
      "1200 ppm"
    ],
    "exp": "Exposure to 100 ppm H₂S is considered immediately dangerous to life and health, requiring rapid evacuation.",
    "cat": "REV",
    "id": "T14A_147"
  },
  {
    "q": "Which bulk carriers must fit a Water Ingress Detection and Alarm System (WIDAS)?",
    "a": "≥150 m",
    "opts": [
      "≥50 m",
      "≥100 m",
      "≥150 m",
      "≥300 m"
    ],
    "exp": "Under SOLAS XII/12, all bulk carriers ≥150 m in length must be fitted with WIDAS.",
    "cat": "REV",
    "id": "T14A_148"
  },
  {
    "q": "What is the mandated precision for the SOLAS 2026 electronic inclinometer?",
    "a": "±0.5°",
    "opts": [
      "±0.1°",
      "±0.5°",
      "±1.0°",
      "±2.5°"
    ],
    "exp": "The mandated electronic inclinometers must be capable of precision resolution of ±0.5° or better to record parametric rolling.",
    "cat": "REV",
    "id": "T14A_149"
  },
  {
    "q": "What are the standard test points for verifying the linearity of a DP cell during calibration?",
    "a": "25 %, 50 %, 75 %",
    "opts": [
      "0 %, 50 %, 100 %",
      "10 %, 50 %, 90 %",
      "25 %, 50 %, 75 %",
      "20 %, 40 %, 60 %, 80 %"
    ],
    "exp": "After setting zero (4 mA) and span (20 mA), linearity is checked at 25 %, 50 %, and 75 % of the scale range.",
    "cat": "REV",
    "id": "T14A_150"
  }

]);
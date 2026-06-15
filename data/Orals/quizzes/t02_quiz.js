window.loadQuizzes("T02_HV", [
  {
    "q": "What is the IEC definition of High Voltage AC?",
    "a": "Above 1000V AC",
    "opts": [
      "Above 500V AC",
      "Above 1000V AC",
      "Above 1500V AC",
      "Above 6600V AC"
    ],
    "exp": "According to IEC 60092, HV is defined as exceeding 1000V AC or 1500V DC.",
    "cat": "BAS",
    "id": "T02A_001"
  },
  {
    "q": "Which is the most common High Voltage level found on ships?",
    "a": "6.6 kV",
    "opts": [
      "3.3 kV",
      "6.6 kV",
      "11 kV",
      "440 V"
    ],
    "exp": "While 3.3 kV and 11 kV are used, 6.6 kV is the most prevalent standard on modern HV vessels.",
    "cat": "BAS",
    "id": "T02A_002"
  },
  {
    "q": "At what power demand level is High Voltage usually justified?",
    "a": "3–5 MW",
    "opts": [
      "1–2 MW",
      "3–5 MW",
      "10–15 MW",
      "Above 20 MW"
    ],
    "exp": "HV becomes economical when total ship electrical power requirements exceed 3 to 5 MW.",
    "cat": "BAS",
    "id": "T02A_003"
  },
  {
    "q": "Which equation provides the primary justification for using High Voltage?",
    "a": "P = √3 × V × I × PF",
    "opts": [
      "P = I²R",
      "P = √3 × V × I × PF",
      "V = IR",
      "P = V × I"
    ],
    "exp": "The formula P = √3 × V × I × PF shows that doubling voltage allows current to be halved for the same power.",
    "cat": "BAS",
    "id": "T02A_004"
  },
  {
    "q": "What happens to cable size when increasing voltage from 440V to 6.6 kV?",
    "a": "Cable size decreases significantly",
    "opts": [
      "Cable size remains the same",
      "Cable size increases significantly",
      "Cable size decreases significantly",
      "Cable size is no longer relevant"
    ],
    "exp": "Higher voltage allows for lower current, which requires thinner, cheaper cables.",
    "cat": "BAS",
    "id": "T02A_005"
  },
  {
    "q": "How much copper is saved when using 6.6 kV instead of 440V for the same power?",
    "a": "A massive saving in weight and cost",
    "opts": [
      "Copper weight remains identical",
      "Copper weight doubles",
      "A massive saving in weight and cost",
      "Copper is replaced by aluminum"
    ],
    "exp": "The lower current requirement directly translates to less copper being needed for the conductors.",
    "cat": "BAS",
    "id": "T02A_006"
  },
  {
    "q": "Why is the use of High Voltage better for long cable runs?",
    "a": "Lower resistive voltage drop along cables",
    "opts": [
      "Higher frequency capacity",
      "Lower resistive voltage drop along cables",
      "Increased insulation resistance",
      "Better arc quenching"
    ],
    "exp": "Lower current means less voltage lost to conductor resistance (V = IR), improving regulation.",
    "cat": "BAS",
    "id": "T02A_007"
  },
  {
    "q": "Which types of large ship frequently use 11 kV systems?",
    "a": "LNG carriers, cruise ships, and VLCCs",
    "opts": [
      "Small fishing vessels",
      "Coastal tankers",
      "LNG carriers, cruise ships, and VLCCs",
      "Tug boats"
    ],
    "exp": "Very large vessels with propulsion demands in the 20+ MW range utilize 11 kV.",
    "cat": "BAS",
    "id": "T02A_008"
  },
  {
    "q": "If P = √3 × V × I × PF, doubling V means I must?",
    "a": "Be halved",
    "opts": [
      "Remain unchanged",
      "Double",
      "Be halved",
      "Be quadrupled"
    ],
    "exp": "Since P is constant, I and V are inversely proportional.",
    "cat": "BAS",
    "id": "T02A_009"
  },
  {
    "q": "What is the consequence of lower current in terms of losses?",
    "a": "Lower I²R losses",
    "opts": [
      "Higher I²R losses",
      "Lower I²R losses",
      "No change in losses",
      "Increased friction losses"
    ],
    "exp": "The heating loss in a conductor is proportional to the square of the current (I²R).",
    "cat": "BAS",
    "id": "T02A_010"
  },
  {
    "q": "What is a major engineering advantage of thinner HV cables?",
    "a": "Reduces weight and space in cable trays/bulkheads",
    "opts": [
      "Increases cable flexibility",
      "Reduces weight and space in cable trays/bulkheads",
      "Allows cables to carry more current",
      "Eliminates the need for insulation"
    ],
    "exp": "Weight and space saving is critical on modern complex vessels.",
    "cat": "BAS",
    "id": "T02A_011"
  },
  {
    "q": "For the same kVA rating, how does HV generator copper requirement compare to LV?",
    "a": "Less copper required",
    "opts": [
      "More copper required",
      "Less copper required",
      "Exactly the same amount",
      "Copper is not used in generators"
    ],
    "exp": "Lower current requirement means thinner windings can be used.",
    "cat": "BAS",
    "id": "T02A_012"
  },
  {
    "q": "Which loads typically necessitate HV systems on modern ships?",
    "a": "VFD-driven cargo pumps, azipods, and bow thrusters",
    "opts": [
      "Lighting and domestic fans",
      "VFD-driven cargo pumps, azipods, and bow thrusters",
      "Navigation lights",
      "Galley refrigeration"
    ],
    "exp": "These high-power mechanical loads reach the MW range, exceeding LV capacity limits.",
    "cat": "BAS",
    "id": "T02A_013"
  },
  {
    "q": "Does HV justify itself for ships with 1 MW total demand?",
    "a": "No, it is typically justified above 3–5 MW",
    "opts": [
      "Yes, for safety reasons",
      "No, it is typically justified above 3–5 MW",
      "Yes, for lower frequency",
      "No, it requires higher current"
    ],
    "exp": "Below the 3-5 MW threshold, the cost of HV switchgear and transformers outweighs the cable savings.",
    "cat": "BAS",
    "id": "T02A_014"
  },
  {
    "q": "What does HV stand for in the context of ship power systems?",
    "a": "High Voltage",
    "opts": [
      "Heavy Vessel",
      "High Voltage",
      "High Velocity",
      "High Variable"
    ],
    "exp": "HV is the industry standard abbreviation for High Voltage.",
    "cat": "BAS",
    "id": "T02A_015"
  },
  {
    "q": "What is the form factor of a pure sinusoidal AC waveform?",
    "a": "1.11",
    "opts": [
      "1.00",
      "1.11",
      "1.41",
      "0.707"
    ],
    "exp": "Form factor = V_rms / V_avg ≈ 1.11.",
    "cat": "MULT",
    "id": "T02A_016"
  },
  {
    "q": "The IEC base unit for the standard voltage series is?",
    "a": "1.1 kV",
    "opts": [
      "0.44 kV",
      "1.1 kV",
      "2.2 kV",
      "6.6 kV"
    ],
    "exp": "The 1.11 form factor leads to the 1.1 kV base unit for standardized equipment.",
    "cat": "MULT",
    "id": "T02A_017"
  },
  {
    "q": "Which of the following is NOT part of the standard IEC voltage series?",
    "a": "5.5 kV",
    "opts": [
      "3.3 kV",
      "6.6 kV",
      "11 kV",
      "5.5 kV"
    ],
    "exp": "The series follows 1.1, 3.3, 6.6, 11 kV. 5.5 kV is not a standard step.",
    "cat": "MULT",
    "id": "T02A_018"
  },
  {
    "q": "Why is standardization of the HV series important?",
    "a": "Simplifies transformer design and ensures interoperability",
    "opts": [
      "Makes cables cheaper to manufacture",
      "Simplifies transformer design and ensures interoperability",
      "Reduces the number of phases required",
      "Allows the use of DC transmission"
    ],
    "exp": "Consistent voltage levels allow manufacturers to produce transformers and switchgear globally.",
    "cat": "MULT",
    "id": "T02A_019"
  },
  {
    "q": "HV insulation must be designed to withstand which voltage value?",
    "a": "Peak voltage",
    "opts": [
      "RMS voltage",
      "Average voltage",
      "Peak voltage",
      "Minimum voltage"
    ],
    "exp": "Dielectric breakdown occurs at the voltage peak, not the RMS value.",
    "cat": "MULT",
    "id": "T02A_020"
  },
  {
    "q": "How is peak voltage related to RMS voltage for a sine wave?",
    "a": "V_peak = V_rms × √2",
    "opts": [
      "V_peak = V_rms / √2",
      "V_peak = V_rms × √2",
      "V_peak = V_rms × 2",
      "V_peak = V_rms / 2"
    ],
    "exp": "Peak voltage is approximately 1.414 times the RMS voltage.",
    "cat": "MULT",
    "id": "T02A_021"
  },
  {
    "q": "What happens on a fully floating HV system during a single earth fault?",
    "a": "Healthy phase voltage rises from phase voltage to line voltage",
    "opts": [
      "Current becomes zero",
      "Healthy phase voltage rises from phase voltage to line voltage",
      "The system automatically trips",
      "The frequency drops"
    ],
    "exp": "The phase-to-ground voltage on unfaulted phases rises by factor of √3 (from 3.81 kV to 6.6 kV).",
    "cat": "MULT",
    "id": "T02A_022"
  },
  {
    "q": "What is the ferroresonance risk in fully floating HV systems?",
    "a": "Dangerous oscillatory overvoltages",
    "opts": [
      "Loss of phase sequence",
      "Dangerous oscillatory overvoltages",
      "Instantaneous short circuit",
      "Reduction of harmonics"
    ],
    "exp": "Floating neutrals can interact with cable capacitance to cause self-excited oscillatory voltage spikes.",
    "cat": "MULT",
    "id": "T02A_023"
  },
  {
    "q": "What does an NER provide that a floating system lacks?",
    "a": "A defined earth reference",
    "opts": [
      "A higher current flow",
      "A defined earth reference",
      "Lower cable costs",
      "More harmonics"
    ],
    "exp": "The NER connects the neutral to earth to fix the reference and stabilize voltage.",
    "cat": "MULT",
    "id": "T02A_024"
  },
  {
    "q": "Who frequently asks about the 1.1 kV multiples?",
    "a": "Praveen Nair",
    "opts": [
      "Kamath",
      "Vishwanathan",
      "Praveen Nair",
      "Sanjib"
    ],
    "exp": "The notes explicitly identify Praveen Nair as the surveyor who asks this.",
    "cat": "MULT",
    "id": "T02A_025"
  },
  {
    "q": "What is the base of the entire IEC standard voltage series?",
    "a": "1.1",
    "opts": [
      "1.0",
      "1.1",
      "1.5",
      "2.0"
    ],
    "exp": "Derived from the 1.11 form factor, 1.1 is the base multiplier for the series.",
    "cat": "MULT",
    "id": "T02A_026"
  },
  {
    "q": "Why is the voltage rise on healthy phases a concern?",
    "a": "It severely stresses insulation of healthy phases",
    "opts": [
      "It causes the generator to over-speed",
      "It severely stresses insulation of healthy phases",
      "It makes cables lighter",
      "It reduces electrical interference"
    ],
    "exp": "Running at 6.6 kV instead of 3.8 kV stresses the insulation right at its design limit.",
    "cat": "MULT",
    "id": "T02A_027"
  },
  {
    "q": "The IEC voltage series is derived from which AC parameter?",
    "a": "Form Factor",
    "opts": [
      "Frequency",
      "Phase Shift",
      "Form Factor",
      "Power Factor"
    ],
    "exp": "The ratio of RMS to Average voltage (1.11) defines the base standard.",
    "cat": "MULT",
    "id": "T02A_028"
  },
  {
    "q": "Is the HV system floating like most LV ships?",
    "a": "No, it is earthed via an NER",
    "opts": [
      "Yes, it is fully floating",
      "No, it is earthed via an NER",
      "Yes, but only in emergencies",
      "No, it is solidly earthed"
    ],
    "exp": "Using an NER prevents the overvoltage issues of floating systems.",
    "cat": "MULT",
    "id": "T02A_029"
  },
  {
    "q": "What value in the IEC standard is 6.6 kV derived from?",
    "a": "6 × 1.1",
    "opts": [
      "3 × 1.1",
      "6 × 1.1",
      "10 × 1.1",
      "1.1 × 1.1"
    ],
    "exp": "6.6 is exactly 6 times the 1.1 kV base unit.",
    "cat": "MULT",
    "id": "T02A_030"
  },
  {
    "q": "Which is an advantage of HV compared to LV?",
    "a": "Smaller cable cross-sections",
    "opts": [
      "Increased cable weight",
      "Smaller cable cross-sections",
      "Requires more maintenance",
      "Requires higher current"
    ],
    "exp": "Lower current for same power allows for significantly smaller, lighter cables.",
    "cat": "ADV",
    "id": "T02A_031"
  },
  {
    "q": "Why does HV have lower I²R losses?",
    "a": "Lower current",
    "opts": [
      "Higher voltage",
      "Lower current",
      "Smaller insulation",
      "Lower frequency"
    ],
    "exp": "Since loss is proportional to current squared, halving the current reduces loss to one quarter.",
    "cat": "ADV",
    "id": "T02A_032"
  },
  {
    "q": "What is a disadvantage of HV systems?",
    "a": "Special switchgear requirements",
    "opts": [
      "Increased cable cross-section",
      "Special switchgear requirements",
      "Lower voltage regulation",
      "Simplified safety procedures"
    ],
    "exp": "VCBs and SF6 breakers are necessary, which are expensive compared to LV air breakers.",
    "cat": "ADV",
    "id": "T02A_033"
  },
  {
    "q": "Why do HV systems require trained personnel?",
    "a": "Safety hazard and certification requirements",
    "opts": [
      "They generate more heat",
      "Safety hazard and certification requirements",
      "They work at higher frequencies",
      "They have complex mechanical gearboxes"
    ],
    "exp": "HV systems are more lethal; STCW III/6 requires specialized training/authorization for ETOs.",
    "cat": "ADV",
    "id": "T02A_034"
  },
  {
    "q": "What type of transformer is needed for LV loads in an HV ship?",
    "a": "Step-down transformer",
    "opts": [
      "Step-up transformer",
      "Step-down transformer",
      "Auto-transformer only",
      "Isolation transformer"
    ],
    "exp": "You must step down the 6.6 kV or 11 kV to 440 V for general hotel/pump usage.",
    "cat": "ADV",
    "id": "T02A_035"
  },
  {
    "q": "Why do HV cables take longer to discharge?",
    "a": "High capacitive charge storage",
    "opts": [
      "They are shorter in length",
      "High capacitive charge storage",
      "They are poorly insulated",
      "They have higher frequency"
    ],
    "exp": "Long cables act as capacitors; they hold a dangerous charge even when isolated.",
    "cat": "ADV",
    "id": "T02A_036"
  },
  {
    "q": "How long must one wait after HV isolation before testing?",
    "a": "Minimum 5 minutes",
    "opts": [
      "Minimum 1 minute",
      "Minimum 5 minutes",
      "Minimum 30 minutes",
      "Instantaneous"
    ],
    "exp": "The notes specify a 5-minute minimum wait for capacitive discharge.",
    "cat": "ADV",
    "id": "T02A_037"
  },
  {
    "q": "What is one economic benefit of HV systems?",
    "a": "Smaller generator windings",
    "opts": [
      "Higher number of windings",
      "Smaller generator windings",
      "No need for an AVR",
      "Less protection relaying"
    ],
    "exp": "Less copper is required to produce the same kVA rating at higher voltage.",
    "cat": "ADV",
    "id": "T02A_038"
  },
  {
    "q": "Are HV motors cheaper or more expensive than LV motors?",
    "a": "More expensive",
    "opts": [
      "Cheaper",
      "More expensive",
      "Same cost",
      "Free with switchgear"
    ],
    "exp": "HV insulation and build quality requirements make HV equipment costlier.",
    "cat": "ADV",
    "id": "T02A_039"
  },
  {
    "q": "Why does HV enableVery Large Loads?",
    "a": "Limits total current to manageable levels",
    "opts": [
      "Increases the prime mover speed",
      "Limits total current to manageable levels",
      "Requires more generators",
      "Requires higher frequency"
    ],
    "exp": "Without HV, 20 MW would require tens of thousands of amps, which is impractical for copper distribution.",
    "cat": "ADV",
    "id": "T02A_040"
  },
  {
    "q": "Is the HV protection system simpler or more complex than LV?",
    "a": "More complex",
    "opts": [
      "Simpler",
      "More complex",
      "Exactly the same",
      "No protection needed"
    ],
    "exp": "NERs, IRMs, and differential relays add layers of complexity absent in basic LV boards.",
    "cat": "ADV",
    "id": "T02A_041"
  },
  {
    "q": "Do HV systems use thin cables?",
    "a": "Yes, compared to equivalent LV power cables",
    "opts": [
      "No, they use massive copper bars only",
      "Yes, compared to equivalent LV power cables",
      "No, they are larger due to insulation",
      "They don't use cables"
    ],
    "exp": "The conductor cross-section is smaller because the required current is much lower.",
    "cat": "ADV",
    "id": "T02A_042"
  },
  {
    "q": "What is required to make HV equipment safe?",
    "a": "Specialized training and PTW procedures",
    "opts": [
      "Lowering the voltage frequently",
      "Specialized training and PTW procedures",
      "Using open-type switchboards",
      "No special requirements"
    ],
    "exp": "Safety is paramount; strict PTW and certification are mandatory for HV operations.",
    "cat": "ADV",
    "id": "T02A_043"
  },
  {
    "q": "Are HV losses higher than LV losses?",
    "a": "No, they are generally lower due to reduced current",
    "opts": [
      "Yes, due to corona",
      "No, they are generally lower due to reduced current",
      "They are equivalent",
      "Losses do not exist in HV"
    ],
    "exp": "Lower current is the key to energy efficiency in electrical transmission.",
    "cat": "ADV",
    "id": "T02A_044"
  },
  {
    "q": "Does HV justify itself for small vessels?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only if they have batteries",
      "Only if they are diesel-electric"
    ],
    "exp": "The overhead of HV switchgear and transformers makes it inefficient for low power demand.",
    "cat": "ADV",
    "id": "T02A_045"
  },
  {
    "q": "What does NER stand for?",
    "a": "Neutral Earthing Resistor",
    "opts": [
      "Neutral Energy Relay",
      "Neutral Earthing Resistor",
      "Negative Earth Relay",
      "New Earth Regulation"
    ],
    "exp": "The NER provides the earth reference for the HV system.",
    "cat": "NER",
    "id": "T02A_046"
  },
  {
    "q": "What is the fault current limit typically set to for a shipboard NER?",
    "a": "5–30 A",
    "opts": [
      "1–5 A",
      "5–30 A",
      "100–500 A",
      "1000 A"
    ],
    "exp": "It is low enough to prevent fire/arc damage but high enough for relay detection.",
    "cat": "NER",
    "id": "T02A_047"
  },
  {
    "q": "What happens if a solid earth fault occurs without an NER?",
    "a": "Fault current reaches thousands of amps, leading to stator destruction",
    "opts": [
      "Fault current is zero",
      "Fault current reaches thousands of amps, leading to stator destruction",
      "The system stays healthy",
      "The frequency increases"
    ],
    "exp": "The impedance is only the generator winding itself, which is near-zero for massive short-circuit amps.",
    "cat": "NER",
    "id": "T02A_048"
  },
  {
    "q": "What is used to create an artificial neutral for a delta-connected generator?",
    "a": "Zig-zag (earthing) transformer",
    "opts": [
      "Step-down transformer",
      "Zig-zag (earthing) transformer",
      "NER alone",
      "High-voltage diode bridge"
    ],
    "exp": "A zig-zag transformer provides a neutral path in systems lacking a physical star point.",
    "cat": "NER",
    "id": "T02A_049"
  },
  {
    "q": "Where is the NER physically connected?",
    "a": "Between the star point and the ship's hull (earth)",
    "opts": [
      "Across the phase conductors",
      "Between the star point and the ship's hull (earth)",
      "Across the AVR terminals",
      "In parallel with the VCB"
    ],
    "exp": "The connection forces the system neutral to reference ground through a limiting resistor.",
    "cat": "NER",
    "id": "T02A_050"
  },
  {
    "q": "What is the formula for NER resistance value?",
    "a": "R = V_phase / I_fault",
    "opts": [
      "R = V_line / I_fault",
      "R = V_phase / I_fault",
      "R = I_fault / V_phase",
      "R = V_phase × I_fault"
    ],
    "exp": "Resistance equals phase voltage divided by the desired fault current.",
    "cat": "NER",
    "id": "T02A_051"
  },
  {
    "q": "What is the typical resistance range for a 6.6 kV NER?",
    "a": "300–800 Ω",
    "opts": [
      "1–5 Ω",
      "300–800 Ω",
      "1000–5000 Ω",
      "0.1–0.5 Ω"
    ],
    "exp": "For 6.6 kV, calculations yield values in this range depending on the desired fault current.",
    "cat": "NER",
    "id": "T02A_052"
  },
  {
    "q": "Why is the NER mounted in a restricted-access enclosure?",
    "a": "Because the resistor elements are live at the system neutral",
    "opts": [
      "Because the oil inside is flammable",
      "Because the resistor elements are live at the system neutral",
      "To keep the air inside dry",
      "To prevent electromagnetic interference"
    ],
    "exp": "While the neutral is close to earth, it is still part of the HV circuit and a shock hazard.",
    "cat": "NER",
    "id": "T02A_053"
  },
  {
    "q": "What is the typical thermal rating duration for an NER?",
    "a": "5–10 seconds",
    "opts": [
      "1–2 seconds",
      "5–10 seconds",
      "1 hour",
      "Continuous"
    ],
    "exp": "It must handle the fault current just long enough for the relay to trip, otherwise it burns out.",
    "cat": "NER",
    "id": "T02A_054"
  },
  {
    "q": "What is the modern alternative to the conventional NER?",
    "a": "High-Resistance Grounding (HRG)",
    "opts": [
      "Low-Resistance Grounding",
      "High-Resistance Grounding (HRG)",
      "Solid Grounding",
      "Floating Grounding"
    ],
    "exp": "HRG is increasingly popular for its operational continuity benefits.",
    "cat": "NER",
    "id": "T02A_055"
  },
  {
    "q": "How does HRG differ from a conventional NER?",
    "a": "Limits fault current to a very low level (1–5 A) and prevents tripping on first fault",
    "opts": [
      "Limits fault current to 500 A",
      "Limits fault current to a very low level (1–5 A) and prevents tripping on first fault",
      "Trips faster than an NER",
      "Does not use any resistor"
    ],
    "exp": "The lower current in HRG is too low to cause damage, allowing continued operation.",
    "cat": "NER",
    "id": "T02A_056"
  },
  {
    "q": "What component in HRG provides per-phase earth indication?",
    "a": "Ground Fault Monitor (GFM)",
    "opts": [
      "The VCB",
      "Ground Fault Monitor (GFM)",
      "The AVR",
      "The zig-zag transformer"
    ],
    "exp": "The GFM measures impedance to identify which phase has faulted.",
    "cat": "NER",
    "id": "T02A_057"
  },
  {
    "q": "What happens if a second earth fault occurs on an HRG system?",
    "a": "It creates a phase-to-phase fault, which must be cleared",
    "opts": [
      "It continues operating normally",
      "It converts to an NER system",
      "It creates a phase-to-phase fault, which must be cleared",
      "It trips on undervoltage"
    ],
    "exp": "The advantage is lost; the second fault creates a short circuit requiring immediate clearing.",
    "cat": "NER",
    "id": "T02A_058"
  },
  {
    "q": "What IEC 80005-1 requirement exists for HVSC NERs?",
    "a": "Minimum 25 A for 5 seconds",
    "opts": [
      "Maximum 10 A for 1 second",
      "Minimum 25 A for 5 seconds",
      "Maximum 5 A for 10 minutes",
      "Minimum 100 A for 1 second"
    ],
    "exp": "Shore-to-ship connection standards are specific about fault current ratings.",
    "cat": "NER",
    "id": "T02A_059"
  },
  {
    "q": "What is the primary material used for NER elements?",
    "a": "Stainless steel or nichrome",
    "opts": [
      "Copper",
      "Aluminum",
      "Stainless steel or nichrome",
      "Ceramic"
    ],
    "exp": "These alloys maintain resistance and physical integrity under high-heat fault conditions.",
    "cat": "NER",
    "id": "T02A_060"
  },
  {
    "q": "Why is an ACB unsuitable for 6.6 kV?",
    "a": "Air ionises and becomes conducting at high voltage",
    "opts": [
      "It is too physically large",
      "Air ionises and becomes conducting at high voltage",
      "It lacks a spring mechanism",
      "It is too quiet"
    ],
    "exp": "The arc in air at HV creates a plasma that sustains itself, making air quenching impossible.",
    "cat": "VCB",
    "id": "T02A_061"
  },
  {
    "q": "What is the medium inside a VCB bottle?",
    "a": "Vacuum",
    "opts": [
      "SF6 Gas",
      "Vacuum",
      "Oil",
      "Air"
    ],
    "exp": "A vacuum bottle provides both quenching and insulation for the open contacts.",
    "cat": "VCB",
    "id": "T02A_062"
  },
  {
    "q": "How long does a VCB arc typically last?",
    "a": "1/2 cycle (10 ms at 50 Hz)",
    "opts": [
      "2-3 cycles",
      "1/2 cycle (10 ms at 50 Hz)",
      "1 second",
      "Continuous"
    ],
    "exp": "The arc extinguishes at the very first current zero crossing.",
    "cat": "VCB",
    "id": "T02A_063"
  },
  {
    "q": "What is the operational life limit of a vacuum bottle?",
    "a": "Finite",
    "opts": [
      "Infinite",
      "Finite",
      "1 year",
      "100 cycles"
    ],
    "exp": "Bottles eventually lose vacuum over time and use.",
    "cat": "VCB",
    "id": "T02A_064"
  },
  {
    "q": "How do you verify vacuum integrity?",
    "a": "Apply 30–40 kV DC across open contacts",
    "opts": [
      "Visually inspect the ceramic casing",
      "Apply 30–40 kV DC across open contacts",
      "Check the weight of the bottle",
      "Test with a 500V megger"
    ],
    "exp": "Only an HV test can confirm if the vacuum level is still sufficient for insulation.",
    "cat": "VCB",
    "id": "T02A_065"
  },
  {
    "q": "What is the maximum voltage rating of an ACB?",
    "a": "Up to 1000 V",
    "opts": [
      "Up to 500 V",
      "Up to 1000 V",
      "Up to 6.6 kV",
      "Up to 36 kV"
    ],
    "exp": "ACBs are strictly limited to LV (Low Voltage) service.",
    "cat": "VCB",
    "id": "T02A_066"
  },
  {
    "q": "Which quench medium is suitable for up to 800 kV?",
    "a": "SF6",
    "opts": [
      "Vacuum",
      "Air",
      "SF6",
      "Oil"
    ],
    "exp": "SF6 is the only medium capable of handling extreme ultra-high voltage grids.",
    "cat": "VCB",
    "id": "T02A_067"
  },
  {
    "q": "Why is SF6 so effective as an arc quencher?",
    "a": "It is electronegative and absorbs free electrons",
    "opts": [
      "It is cheaper than air",
      "It is electronegative and absorbs free electrons",
      "It is a liquid",
      "It prevents short circuits"
    ],
    "exp": "By capturing the free electrons that sustain an arc, it halts the discharge immediately.",
    "cat": "VCB",
    "id": "T02A_068"
  },
  {
    "q": "Which is an environmental concern with SF6?",
    "a": "Very high Global Warming Potential (GWP)",
    "opts": [
      "It is toxic in its pure form",
      "Very high Global Warming Potential (GWP)",
      "It ozone depletes",
      "It is flammable"
    ],
    "exp": "SF6 is one of the most potent greenhouse gases known.",
    "cat": "VCB",
    "id": "T02A_069"
  },
  {
    "q": "VCB maintenance is generally considered:",
    "a": "Low",
    "opts": [
      "High",
      "Low",
      "Zero",
      "Very demanding"
    ],
    "exp": "With no arc products or quenching medium to change, VCBs are very reliable.",
    "cat": "VCB",
    "id": "T02A_070"
  },
  {
    "q": "What defines the VCB quench speed?",
    "a": "First current zero crossing",
    "opts": [
      "Mechanical spring speed",
      "First current zero crossing",
      "Operator reaction time",
      "Relay reset time"
    ],
    "exp": "It doesn't just quench; it extinguishes at the moment current naturally hits zero.",
    "cat": "VCB",
    "id": "T02A_071"
  },
  {
    "q": "What happens if a VCB bottle loses its vacuum?",
    "a": "Dielectric strength vanishes, causing flashover",
    "opts": [
      "It acts like an ACB",
      "Dielectric strength vanishes, causing flashover",
      "It becomes a better insulator",
      "The VCB trips on overcurrent"
    ],
    "exp": "Vacuum is the insulation; without it, the contacts will arc immediately upon closing.",
    "cat": "VCB",
    "id": "T02A_072"
  },
  {
    "q": "Which switchgear uses arc chutes?",
    "a": "ACB",
    "opts": [
      "VCB",
      "SF6",
      "ACB",
      "None"
    ],
    "exp": "ACBs use physical chutes to stretch and cool the air-borne arc.",
    "cat": "VCB",
    "id": "T02A_073"
  },
  {
    "q": "Is VCB or ACB standard for 6.6 kV shipboards?",
    "a": "VCB",
    "opts": [
      "ACB",
      "VCB",
      "Neither",
      "Oil breakers"
    ],
    "exp": "VCBs are the standard choice for all 3.3 kV - 11 kV marine boards.",
    "cat": "VCB",
    "id": "T02A_074"
  },
  {
    "q": "Compared to air, how much better is SF6 dielectric strength at 1 bar?",
    "a": "2.5 times better",
    "opts": [
      "Equal",
      "2.5 times better",
      "10 times better",
      "0.5 times better"
    ],
    "exp": "At atmospheric pressure, SF6 is 2.5x more effective than air as an insulator.",
    "cat": "VCB",
    "id": "T02A_075"
  },
  {
    "q": "What is SF6 gas composed of?",
    "a": "Sulphur and Fluorine",
    "opts": [
      "Sulphur and Oxygen",
      "Sulphur and Fluorine",
      "Sulphur and Helium",
      "Carbon and Fluorine"
    ],
    "exp": "Sulphur Hexafluoride (1 atom of Sulphur, 6 atoms of Fluorine).",
    "cat": "SF6",
    "id": "T02A_076"
  },
  {
    "q": "Is SF6 gas toxic in its pure, un-arced state?",
    "a": "No, it is non-toxic",
    "opts": [
      "Yes, it is highly toxic",
      "No, it is non-toxic",
      "Only when compressed",
      "Only in sunlight"
    ],
    "exp": "Pure SF6 is inert and used safely in many applications, but arc products change this entirely.",
    "cat": "SF6",
    "id": "T02A_077"
  },
  {
    "q": "What is the GWP of SF6?",
    "a": "23,500",
    "opts": [
      "1",
      "100",
      "23,500",
      "1,000,000"
    ],
    "exp": "Its GWP is 23,500 times that of CO2, making its release a significant environmental incident.",
    "cat": "SF6",
    "id": "T02A_078"
  },
  {
    "q": "What is a dangerous arc decomposition product of SF6?",
    "a": "HF (Hydrogen fluoride)",
    "opts": [
      "Pure Oxygen",
      "HF (Hydrogen fluoride)",
      "Helium",
      "Nitrogen"
    ],
    "exp": "HF is an extremely corrosive acid formed when the arc energy breaks SF6 bonds in the presence of moisture.",
    "cat": "SF6",
    "id": "T02A_079"
  },
  {
    "q": "What PPE is required when entering an enclosure after an SF6 arc event?",
    "a": "SCBA and chemical protective gloves",
    "opts": [
      "Simple dust mask",
      "Standard boiler suit and safety glasses",
      "SCBA and chemical protective gloves",
      "No special PPE needed if well ventilated"
    ],
    "exp": "Toxic decomposition gases require full breathing apparatus and skin protection.",
    "cat": "SF6",
    "id": "T02A_080"
  },
  {
    "q": "What chemical powder is used to neutralize SF6 arc products?",
    "a": "Calcium hydroxide",
    "opts": [
      "Sodium bicarbonate",
      "Calcium hydroxide",
      "Salt powder",
      "Sand"
    ],
    "exp": "Ca(OH)₂ neutralizes the acidic HF and other fluoride compounds before inspection.",
    "cat": "SF6",
    "id": "T02A_081"
  },
  {
    "q": "How long should you ventilate an enclosure after an SF6 arc event?",
    "a": "Minimum 30 minutes",
    "opts": [
      "5 minutes",
      "30 minutes",
      "2 hours",
      "10 seconds"
    ],
    "exp": "Forced ventilation is vital to remove toxic byproducts before entry.",
    "cat": "SF6",
    "id": "T02A_082"
  },
  {
    "q": "What is the atmospheric lifetime of SF6 gas?",
    "a": "3200 years",
    "opts": [
      "10 years",
      "3200 years",
      "1 year",
      "100 years"
    ],
    "exp": "It is nearly permanent once released into the atmosphere.",
    "cat": "SF6",
    "id": "T02A_083"
  },
  {
    "q": "Is SF6 flammable?",
    "a": "No, it is non-flammable",
    "opts": [
      "Yes, highly flammable",
      "No, it is non-flammable",
      "Only when mixed with air",
      "Only when heated"
    ],
    "exp": "SF6 is chemically stable and non-combustible.",
    "cat": "SF6",
    "id": "T02A_084"
  },
  {
    "q": "Why is SF6 dangerous even if not inhaled?",
    "a": "It can cause asphyxiation by displacing oxygen in confined spaces",
    "opts": [
      "It is radioactive",
      "It can cause asphyxiation by displacing oxygen in confined spaces",
      "It emits high levels of UV",
      "It induces voltage on nearby metal"
    ],
    "exp": "As a dense gas, it can settle in pits, suffocating anyone entering without oxygen monitoring.",
    "cat": "SF6",
    "id": "T02A_085"
  },
  {
    "q": "What happens if HF (Hydrogen fluoride) contacts the skin?",
    "a": "Biological tissue damage (burns)",
    "opts": [
      "It turns into harmless gas",
      "Biological tissue damage (burns)",
      "It has no effect",
      "It immediately freezes the tissue"
    ],
    "exp": "HF is a severe systemic poison that attacks skin and bone, requiring immediate medical attention.",
    "cat": "SF6",
    "id": "T02A_086"
  },
  {
    "q": "What does a VCB bottle smell like?",
    "a": "Nothing",
    "opts": [
      "Ozone",
      "Nothing",
      "Burning metal",
      "Sulfur"
    ],
    "exp": "It is a sealed vacuum, containing no chemicals that release odors unless it has been opened or compromised.",
    "cat": "SF6",
    "id": "T02A_087"
  },
  {
    "q": "Why monitor SF6 gas pressure?",
    "a": "Leak control and arc integrity",
    "opts": [
      "To measure voltage",
      "Leak control and arc integrity",
      "To identify the GWP",
      "To monitor internal temperature"
    ],
    "exp": "Loss of pressure indicates a leak and lowers dielectric strength for arc quenching.",
    "cat": "SF6",
    "id": "T02A_088"
  },
  {
    "q": "Is SF6 lighter than air?",
    "a": "No, it is much denser than air",
    "opts": [
      "Yes",
      "No, it is much denser than air",
      "They are the same weight",
      "It depends on the temperature"
    ],
    "exp": "SF6 is a heavy gas and tends to pool at the bottom of compartments.",
    "cat": "SF6",
    "id": "T02A_089"
  },
  {
    "q": "What is the primary danger of SF6 arc products?",
    "a": "They are highly toxic",
    "opts": [
      "They are highly explosive",
      "They are highly toxic",
      "They neutralise the SF6",
      "They are radioactive"
    ],
    "exp": "Decomposition produces hazardous fluorides and sulphates that are extremely harmful to human health.",
    "cat": "SF6",
    "id": "T02A_090"
  },
  {
    "q": "What is a Dead Front panel?",
    "a": "A switchboard where no live parts are accessible from the front during normal operation",
    "opts": [
      "A switchboard that is never used",
      "A switchboard where no live parts are accessible from the front during normal operation",
      "A switchboard with no meters",
      "A switchboard that only works in blackout"
    ],
    "exp": "The defining safety feature is the total enclosure of all live busbars behind barriers.",
    "cat": "DEAD",
    "id": "T02A_091"
  },
  {
    "q": "What IEC standard requires dead-front construction?",
    "a": "IEC 60092",
    "opts": [
      "IEC 60034",
      "IEC 60092",
      "ISO 9001",
      "SOLAS III"
    ],
    "exp": "IEC 60092 covers electrical installations in ships and mandates dead-front construction.",
    "cat": "DEAD",
    "id": "T02A_092"
  },
  {
    "q": "What is the maximum allowable touch voltage on the front of an MSB?",
    "a": "50 V AC or 120 V DC",
    "opts": [
      "24 V AC or 48 V DC",
      "50 V AC or 120 V DC",
      "440 V AC",
      "6.6 kV"
    ],
    "exp": "Standard limits for safe-to-touch operating interfaces.",
    "cat": "DEAD",
    "id": "T02A_093"
  },
  {
    "q": "What happens if a door on a dead-front panel is opened?",
    "a": "It either trips the circuit or requires prior isolation",
    "opts": [
      "The entire MSB shuts down",
      "It either trips the circuit or requires prior isolation",
      "It sounds the ship's general alarm",
      "It does nothing"
    ],
    "exp": "Interlocks or physical barriers ensure you cannot touch HV/LV live busbars by just swinging a door open.",
    "cat": "DEAD",
    "id": "T02A_094"
  },
  {
    "q": "Why were older open-type MSBs dangerous?",
    "a": "Live busbars were exposed",
    "opts": [
      "They lacked meters",
      "Live busbars were exposed",
      "They had no earth fault monitoring",
      "They required too much space"
    ],
    "exp": "Accidental contact with exposed copper busbars frequently caused severe electrocutions.",
    "cat": "DEAD",
    "id": "T02A_095"
  },
  {
    "q": "Are operating handles insulated on a dead-front panel?",
    "a": "Yes, they are insulated or at safe touch voltage",
    "opts": [
      "No, they are always bare metal",
      "Yes, they are insulated or at safe touch voltage",
      "Only the HV handles",
      "Only the LV handles"
    ],
    "exp": "Every interface you interact with must be safe for human contact.",
    "cat": "DEAD",
    "id": "T02A_096"
  },
  {
    "q": "What protects the interior of the switchboard?",
    "a": "Barriers, doors, and shutters",
    "opts": [
      "Only the door lock",
      "Barriers, doors, and shutters",
      "Only the operator",
      "Nothing, it is open"
    ],
    "exp": "Multiple layers of protection isolate the user from internal live components.",
    "cat": "DEAD",
    "id": "T02A_097"
  },
  {
    "q": "Can any voltage level exist inside a dead-front panel?",
    "a": "Yes",
    "opts": [
      "No, only 440 V max",
      "Yes",
      "No, only 24 V max",
      "No, only HV"
    ],
    "exp": "The enclosure makes it safe regardless of whether the internal bus is 440 V or 11 kV.",
    "cat": "DEAD",
    "id": "T02A_098"
  },
  {
    "q": "What is the primary function of a dead-front panel?",
    "a": "Prevent operator access to live parts during normal operation",
    "opts": [
      "Increase busbar cooling",
      "Prevent operator access to live parts during normal operation",
      "Improve synchronization speed",
      "Allow easy access for repairs"
    ],
    "exp": "Normal operation involves operating breakers, not working inside the board.",
    "cat": "DEAD",
    "id": "T02A_099"
  },
  {
    "q": "If internal live parts are 6.6 kV, are they exposed on the front?",
    "a": "No",
    "opts": [
      "Yes, but only when locked",
      "No",
      "Yes, if not grounded",
      "Sometimes"
    ],
    "exp": "Regardless of voltage, the panel remains dead-front, blocking all access to the 6.6 kV bus.",
    "cat": "DEAD",
    "id": "T02A_100"
  },
  {
    "q": "What do the handles and buttons represent on a dead-front panel?",
    "a": "Safe touch voltage operating interface",
    "opts": [
      "Bare live busbar extensions",
      "Safe touch voltage operating interface",
      "High voltage terminals",
      "Maintenance points only"
    ],
    "exp": "All buttons are designed for touch safety.",
    "cat": "DEAD",
    "id": "T02A_101"
  },
  {
    "q": "Is the front of the MSB meant for internal maintenance?",
    "a": "No, internal maintenance requires doors/covers to be opened",
    "opts": [
      "Yes, always",
      "No, internal maintenance requires doors/covers to be opened",
      "Yes, if gloves are worn",
      "Yes, if in TEST position"
    ],
    "exp": "The front is for control; internal maintenance involves deeper, controlled access.",
    "cat": "DEAD",
    "id": "T02A_102"
  },
  {
    "q": "Why are dead-front panels mandatory?",
    "a": "For safety and operator protection",
    "opts": [
      "For busbar cooling",
      "For safety and operator protection",
      "For easier cable termination",
      "For faster load transfer"
    ],
    "exp": "Protecting life is the absolute driver behind IEC 60092 standards.",
    "cat": "DEAD",
    "id": "T02A_103"
  },
  {
    "q": "Does dead-front mean the MSB is not live?",
    "a": "No, it just means live parts are not accessible from the front",
    "opts": [
      "Yes",
      "No, it just means live parts are not accessible from the front",
      "It depends on the position",
      "Only for HV"
    ],
    "exp": "The board is likely energized; you just cannot touch the dangerous bits.",
    "cat": "DEAD",
    "id": "T02A_104"
  },
  {
    "q": "How does an operator interact with a dead-front MSB?",
    "a": "Using controls designed for safety",
    "opts": [
      "Using an insulated stick only",
      "Using controls designed for safety",
      "By opening the front doors",
      "By removing the barriers"
    ],
    "exp": "The controls are specifically designed to safely interface with the energized system.",
    "cat": "DEAD",
    "id": "T02A_105"
  },
  {
    "q": "How many safeties are listed in the complete MSB guide?",
    "a": "14",
    "opts": [
      "5",
      "10",
      "14",
      "20"
    ],
    "exp": "The comprehensive MSB safety guide in the notes lists 14 specific items.",
    "cat": "MSB",
    "id": "T02A_106"
  },
  {
    "q": "What is the minimum thickness requirement for LV (440V) rubber mats?",
    "a": "6 mm",
    "opts": [
      "3 mm",
      "6 mm",
      "12 mm",
      "25 mm"
    ],
    "exp": "The notes specify 6 mm for LV systems.",
    "cat": "MSB",
    "id": "T02A_107"
  },
  {
    "q": "What is the minimum thickness for HV system rubber mats?",
    "a": "12 mm",
    "opts": [
      "6 mm",
      "10 mm",
      "12 mm",
      "20 mm"
    ],
    "exp": "The notes specify 12 mm for HV ships.",
    "cat": "MSB",
    "id": "T02A_108"
  },
  {
    "q": "What is the minimum front working space required for an MSB?",
    "a": "1000 mm",
    "opts": [
      "600 mm",
      "1000 mm",
      "1500 mm",
      "2000 mm"
    ],
    "exp": "A clear, safe path of 1 meter is required in front of the MSB.",
    "cat": "MSB",
    "id": "T02A_109"
  },
  {
    "q": "What is the minimum rear clearance required for an MSB?",
    "a": "600 mm",
    "opts": [
      "500 mm",
      "600 mm",
      "1000 mm",
      "200 mm"
    ],
    "exp": "600 mm is the required space for safely accessing rear cable entries.",
    "cat": "MSB",
    "id": "T02A_110"
  },
  {
    "q": "What is the function of the bus tie breaker?",
    "a": "Allows isolation of one MSB section while the other stays live",
    "opts": [
      "Connects the generator to the bus",
      "Allows isolation of one MSB section while the other stays live",
      "Protects the system against overspeed",
      "Monitors insulation resistance"
    ],
    "exp": "It is essential for dividing the MSB to allow safe maintenance on part of it.",
    "cat": "MSB",
    "id": "T02A_111"
  },
  {
    "q": "What type of fire extinguisher must be provided at the MSB?",
    "a": "CO2",
    "opts": [
      "Water",
      "Foam",
      "CO2",
      "Dry Chemical Powder"
    ],
    "exp": "CO2 is non-conductive and residue-free, perfect for electrical fires.",
    "cat": "MSB",
    "id": "T02A_112"
  },
  {
    "q": "What colours identify L1, L2, L3 in modern IEC standards?",
    "a": "Brown, Black, Grey",
    "opts": [
      "Red, Yellow, Blue",
      "Brown, Black, Grey",
      "Yellow, Green, Red",
      "Black, Red, Blue"
    ],
    "exp": "Brown, Black, Grey is the current IEC 60446 international standard.",
    "cat": "MSB",
    "id": "T02A_113"
  },
  {
    "q": "What are the L1, L2, L3 colours in older BS 158 systems?",
    "a": "Red, Yellow, Blue",
    "opts": [
      "Brown, Black, Grey",
      "Red, Yellow, Blue",
      "Blue, Black, Red",
      "Grey, Brown, Black"
    ],
    "exp": "Older UK/Indian ships used the Red-Yellow-Blue convention.",
    "cat": "MSB",
    "id": "T02A_114"
  },
  {
    "q": "What is the purpose of an Earth bus running through the MSB?",
    "a": "To bond all equipment cases to hull potential",
    "opts": [
      "To carry neutral current",
      "To bond all equipment cases to hull potential",
      "To carry the HV phases",
      "To improve aesthetic appearance"
    ],
    "exp": "Ensuring all conductive cases are at earth potential prevents lethal shocks if a fault occurs.",
    "cat": "MSB",
    "id": "T02A_115"
  },
  {
    "q": "What must be installed on all MSB breakers/isolators for maintenance?",
    "a": "Lockout/tagout (LOTO) facilities",
    "opts": [
      "Automatic shut-off sensors",
      "Lockout/tagout (LOTO) facilities",
      "Remote reset buttons",
      "Warning lights only"
    ],
    "exp": "LOTO padlocks prevent accidental energization while maintenance is underway.",
    "cat": "MSB",
    "id": "T02A_116"
  },
  {
    "q": "Why should MSB rooms have forward and aft doors?",
    "a": "Emergency escape if fire blocks one end",
    "opts": [
      "For ventilation efficiency",
      "Emergency escape if fire blocks one end",
      "To balance weight distribution",
      "To accommodate switchboard length"
    ],
    "exp": "Safety dictates that any personnel in the MSB must have two paths out during an emergency.",
    "cat": "MSB",
    "id": "T02A_117"
  },
  {
    "q": "What should the MSB lighting be supplied from?",
    "a": "Emergency lighting circuit",
    "opts": [
      "The main busbar",
      "The emergency lighting circuit",
      "Battery power only",
      "The ventilation circuit"
    ],
    "exp": "If the main generator fails, the MSB must still be lit so that the crew can manually operate breakers.",
    "cat": "MSB",
    "id": "T02A_118"
  },
  {
    "q": "What is the function of phase barriers?",
    "a": "Prevent phase-to-phase flashover during a fault",
    "opts": [
      "Increase busbar voltage",
      "Prevent phase-to-phase flashover during a fault",
      "Provide cooling to the phases",
      "Identify the phases"
    ],
    "exp": "If one phase shorts to earth, the barrier stops the arc from jumping to the other phases.",
    "cat": "MSB",
    "id": "T02A_119"
  },
  {
    "q": "How hot can an arc flash reach?",
    "a": "Over 20,000°C",
    "opts": [
      "1,000°C",
      "5,000°C",
      "Over 20,000°C",
      "100°C"
    ],
    "exp": "The extreme energy release in a few milliseconds produces temperatures hotter than the sun's surface.",
    "cat": "ARC",
    "id": "T02A_120"
  },
  {
    "q": "What is an Arc Flash?",
    "a": "Explosive release of energy from an electrical arc fault through air",
    "opts": [
      "A slow heat release from a wire",
      "Explosive release of energy from an electrical arc fault through air",
      "A magnetic pulse only",
      "A light display"
    ],
    "exp": "It's the rapid conversion of electrical energy into thermal energy and plasma.",
    "cat": "ARC",
    "id": "T02A_121"
  },
  {
    "q": "What does an Arc Blast produce?",
    "a": "Overpressure shock wave",
    "opts": [
      "A cooling breeze",
      "Overpressure shock wave",
      "A magnetic field increase",
      "Frequency stability"
    ],
    "exp": "Rapid air expansion and copper vaporisation generate a blast wave that can collapse switchgear walls.",
    "cat": "ARC",
    "id": "T02A_122"
  },
  {
    "q": "What is the minimum pressure blast can exceed?",
    "a": "1000 lbf/ft²",
    "opts": [
      "10 lbf/ft²",
      "50 lbf/ft²",
      "1000 lbf/ft²",
      "10,000 lbf/ft²"
    ],
    "exp": "The blast wave is powerful enough to throw personnel and destroy metal structures.",
    "cat": "ARC",
    "id": "T02A_123"
  },
  {
    "q": "What can happen to molten copper during an arc flash?",
    "a": "It is vaporised and projected at high velocity",
    "opts": [
      "It solidifies and stays on the busbar",
      "It is vaporised and projected at high velocity",
      "It creates a new connection",
      "It is sucked into the ventilation"
    ],
    "exp": "The intense heat vaporises the copper, which then turns into high-speed shrapnel.",
    "cat": "ARC",
    "id": "T02A_124"
  },
  {
    "q": "What type of burn injury results from an arc flash?",
    "a": "Third-degree burns",
    "opts": [
      "Mild sunburn",
      "First-degree burns",
      "Third-degree burns",
      "Frostbite"
    ],
    "exp": "The radiant heat is so intense that it causes severe, permanent burns even from meters away.",
    "cat": "ARC",
    "id": "T02A_125"
  },
  {
    "q": "What is the risk to the eyes during an arc flash?",
    "a": "Intense UV/IR light causes retinal damage",
    "opts": [
      "Temporary loss of night vision",
      "Intense UV/IR light causes retinal damage",
      "No risk to the eyes",
      "Only thermal burns"
    ],
    "exp": "The flash is blindingly bright with heavy UV/IR content that can permanently blind.",
    "cat": "ARC",
    "id": "T02A_126"
  },
  {
    "q": "What PPE is required for arc protection?",
    "a": "Arc-flash rated coverall suit and face shield",
    "opts": [
      "Simple cotton overalls",
      "Arc-flash rated coverall suit and face shield",
      "Rubber apron",
      "Polarized sunglasses"
    ],
    "exp": "Standard PPE doesn't stop arc heat; you need certified arc-rated suits.",
    "cat": "ARC",
    "id": "T02A_127"
  },
  {
    "q": "How is arc-flash rating typically measured?",
    "a": "cal/cm²",
    "opts": [
      "Watts",
      "Volts",
      "cal/cm²",
      "Amps"
    ],
    "exp": "The incident energy is measured in calories per square centimeter (cal/cm²).",
    "cat": "ARC",
    "id": "T02A_128"
  },
  {
    "q": "Can a standard face shield protect against arc flash?",
    "a": "No, must be an arc-rated face shield",
    "opts": [
      "Yes, any plastic shield",
      "No, must be an arc-rated face shield",
      "Yes, if worn with sunglasses",
      "No, face shields are forbidden"
    ],
    "exp": "Standard clear shields are not heat resistant and will melt onto the face.",
    "cat": "ARC",
    "id": "T02A_129"
  },
  {
    "q": "Is working alone on HV permissible?",
    "a": "No, a second person is mandatory for rescue",
    "opts": [
      "Yes, if the ETO is certified",
      "No, a second person is mandatory for rescue",
      "Yes, if there is a phone nearby",
      "Yes, if in the MSB room"
    ],
    "exp": "If you are incapacitated, a second person is the only way to rescue you safely.",
    "cat": "ARC",
    "id": "T02A_130"
  },
  {
    "q": "What type of gloves must be worn for HV work?",
    "a": "Class 2 (or higher) rubber insulating gloves with leather outer protectors",
    "opts": [
      "Basic cotton gloves",
      "Class 2 (or higher) rubber insulating gloves with leather outer protectors",
      "Thin plastic gloves",
      "No gloves needed"
    ],
    "exp": "Rubber provides the insulation; leather provides mechanical puncture resistance.",
    "cat": "ARC",
    "id": "T02A_131"
  },
  {
    "q": "What happens if a balaclava is not arc-rated?",
    "a": "It can ignite or melt, causing facial burns",
    "opts": [
      "It acts as a shield",
      "It can ignite or melt, causing facial burns",
      "It protects better than a hood",
      "It has no impact"
    ],
    "exp": "Non-rated fabrics burn instantly when exposed to the high energy of an arc.",
    "cat": "ARC",
    "id": "T02A_132"
  },
  {
    "q": "Is arc flash just about light?",
    "a": "No, it is light, heat, sound, and pressure",
    "opts": [
      "Yes",
      "No, it is light, heat, sound, and pressure",
      "No, it is only light and heat",
      "No, it is only heat and pressure"
    ],
    "exp": "It is an explosive, multi-modal energy event.",
    "cat": "ARC",
    "id": "T02A_133"
  },
  {
    "q": "What is the primary objective of arc flash PPE?",
    "a": "To protect against burns and fatal energy transfer",
    "opts": [
      "To look professional",
      "To protect against burns and fatal energy transfer",
      "To keep the operator clean",
      "To prevent electrical shocks only"
    ],
    "exp": "PPE is the final layer of safety when electrical isolation is not fully possible or as secondary defense.",
    "cat": "ARC",
    "id": "T02A_134"
  },
  {
    "q": "What is the absolute golden rule for HV work?",
    "a": "Assume live until proved dead",
    "opts": [
      "Always wear gloves",
      "Assume live until proved dead",
      "Always work in pairs",
      "Always check the fuse first"
    ],
    "exp": "Never trust panel indicators or memory; the test for dead is the only reliable verification.",
    "cat": "PTW",
    "id": "T02A_135"
  },
  {
    "q": "Who must sign the PTW for HV work?",
    "a": "Chief Engineer",
    "opts": [
      "Master",
      "Chief Engineer",
      "ETO",
      "Duty Oiler"
    ],
    "exp": "The Chief Engineer authorizes all high-risk high-voltage operations.",
    "cat": "PTW",
    "id": "T02A_136"
  },
  {
    "q": "What is the purpose of LOTO?",
    "a": "Prevent accidental energization",
    "opts": [
      "Labeling the equipment",
      "Prevent accidental energization",
      "Cooling the breakers",
      "Grounding the phases"
    ],
    "exp": "Locks keep the switch mechanically held open so someone else cannot accidentally close it.",
    "cat": "PTW",
    "id": "T02A_137"
  },
  {
    "q": "How long should you wait for capacitive discharge before testing?",
    "a": "5 minutes",
    "opts": [
      "1 minute",
      "5 minutes",
      "30 minutes",
      "1 hour"
    ],
    "exp": "5 minutes is the specified wait time for HV equipment discharge.",
    "cat": "PTW",
    "id": "T02A_138"
  },
  {
    "q": "What is the correct 'Test for Dead' sequence?",
    "a": "Prove tester on known live → test work point → re-prove tester on known live",
    "opts": [
      "Test work point → prove tester",
      "Prove tester on known live → test work point → re-prove tester on known live",
      "Test work point directly",
      "Use only visual indicators"
    ],
    "exp": "Proving the tester both before and after ensures you haven't been working with a broken detector.",
    "cat": "PTW",
    "id": "T02A_139"
  },
  {
    "q": "When applying earthing clamps, what is connected first?",
    "a": "The earth side (to hull/ground) first",
    "opts": [
      "The conductor side (to the busbar) first",
      "The earth side (to hull/ground) first",
      "Both at the same time",
      "Doesn't matter"
    ],
    "exp": "Always connect to earth first so you are not handling a dangling lead that might have come into contact with HV.",
    "cat": "PTW",
    "id": "T02A_140"
  },
  {
    "q": "What should be placed around the HV work area?",
    "a": "Physical barriers and warning signs",
    "opts": [
      "Temporary lighting",
      "Physical barriers and warning signs",
      "Additional fire extinguishers",
      "Extra rubber mats"
    ],
    "exp": "Barriers define the safe working perimeter to exclude unauthorized personnel.",
    "cat": "PTW",
    "id": "T02A_141"
  },
  {
    "q": "In what order are earths removed?",
    "a": "LAST before re-energisation",
    "opts": [
      "First thing in the morning",
      "After re-energisation",
      "LAST before re-energisation",
      "Before removing the barrier"
    ],
    "exp": "If you leave them on and switch power, you get a short circuit; they must be removed immediately before startup.",
    "cat": "PTW",
    "id": "T02A_142"
  },
  {
    "q": "What is the purpose of the PTW briefing?",
    "a": "Ensure all involved personnel understand hazards and procedure",
    "opts": [
      "To check equipment availability",
      "Ensure all involved personnel understand hazards and procedure",
      "To verify the weather",
      "To assign maintenance tasks"
    ],
    "exp": "Communication of the specific risks and steps is the primary tool for accident prevention.",
    "cat": "PTW",
    "id": "T02A_143"
  },
  {
    "q": "Why is the bridge informed before HV work?",
    "a": "To ensure they are aware of electrical isolation status",
    "opts": [
      "To request a coffee",
      "To ensure they are aware of electrical isolation status",
      "To check the engine speed",
      "To update the logbook"
    ],
    "exp": "Isolation status can affect propulsion, steering, or navigation system availability.",
    "cat": "PTW",
    "id": "T02A_144"
  },
  {
    "q": "Who keeps the key to the LOTO lock?",
    "a": "The ETO",
    "opts": [
      "The Chief Engineer",
      "The ETO",
      "The Duty Officer",
      "The shore tech"
    ],
    "exp": "The person performing the work maintains control of the isolation key.",
    "cat": "PTW",
    "id": "T02A_145"
  },
  {
    "q": "What do 'Men At Work' tags indicate?",
    "a": "That equipment must not be operated",
    "opts": [
      "That the equipment is ready to use",
      "That equipment must not be operated",
      "That the ETO is absent",
      "That voltage is low"
    ],
    "exp": "Tags act as a visual deterrent to prevent accidental switch manipulation.",
    "cat": "PTW",
    "id": "T02A_146"
  },
  {
    "q": "Does isolation replace the test for dead?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "Isolation is a process; test for dead is the verification of the process's success.",
    "cat": "PTW",
    "id": "T02A_147"
  },
  {
    "q": "Are induction-induced voltages possible in isolated HV cables?",
    "a": "Yes, especially if parallel runs are live",
    "opts": [
      "No",
      "Yes, especially if parallel runs are live",
      "Only in DC systems",
      "Only in air"
    ],
    "exp": "Capacitive and inductive coupling from nearby energized cables can induce lethal voltages on isolated lines.",
    "cat": "PTW",
    "id": "T02A_148"
  },
  {
    "q": "Which class of HV glove is used for 6.6 kV?",
    "a": "Class 2",
    "opts": [
      "Class 0",
      "Class 1",
      "Class 2",
      "Class 4"
    ],
    "exp": "Class 2 is rated for 17 kV, making it the correct and safest choice for 6.6 kV systems.",
    "cat": "GLOV",
    "id": "T02A_149"
  },
  {
    "q": "What is the colour of Class 2 gloves?",
    "a": "Yellow",
    "opts": [
      "White",
      "Yellow",
      "Green",
      "Orange"
    ],
    "exp": "Class 2 gloves are internationally colour-coded as yellow.",
    "cat": "GLOV",
    "id": "T02A_150"
  },
  {
    "q": "What is the voltage rating of Class 3 gloves?",
    "a": "26,500 V",
    "opts": [
      "17,000 V",
      "26,500 V",
      "36,000 V",
      "7,500 V"
    ],
    "exp": "Class 3 provides protection up to 26.5 kV.",
    "cat": "GLOV",
    "id": "T02A_151"
  },
  {
    "q": "What is the colour of Class 3 gloves?",
    "a": "Green",
    "opts": [
      "White",
      "Yellow",
      "Green",
      "Orange"
    ],
    "exp": "Class 3 gloves are green.",
    "cat": "GLOV",
    "id": "T02A_152"
  },
  {
    "q": "When should gloves undergo a dielectric test?",
    "a": "Every 6 months",
    "opts": [
      "Every year",
      "Every 6 months",
      "Every 2 years",
      "Only when damaged"
    ],
    "exp": "The standard interval for electrical dielectric re-testing is every 6 months.",
    "cat": "GLOV",
    "id": "T02A_153"
  },
  {
    "q": "What must you do before EVERY use of the gloves?",
    "a": "Inflation test",
    "opts": [
      "Electrical test",
      "Inflation test",
      "Wash with soap",
      "Replace them"
    ],
    "exp": "A manual air-check inflation test helps find microscopic punctures.",
    "cat": "GLOV",
    "id": "T02A_154"
  },
  {
    "q": "What is the purpose of leather outer protectors?",
    "a": "Puncture resistance",
    "opts": [
      "Insulation boost",
      "Puncture resistance",
      "Cold protection",
      "Better grip"
    ],
    "exp": "Rubber punctures easily; leather protects the rubber from sharp objects.",
    "cat": "GLOV",
    "id": "T02A_155"
  },
  {
    "q": "What happens if a glove fails the inflation test?",
    "a": "Reject it immediately",
    "opts": [
      "Patch it",
      "Reject it immediately",
      "Use it anyway",
      "Double glove"
    ],
    "exp": "Any leak means the glove provides zero electrical safety.",
    "cat": "GLOV",
    "id": "T02A_156"
  },
  {
    "q": "Which class is suited for 3.3 kV?",
    "a": "Class 1",
    "opts": [
      "Class 0",
      "Class 1",
      "Class 2",
      "Class 3"
    ],
    "exp": "Class 1 is rated for 7.5 kV, sufficient for 3.3 kV.",
    "cat": "GLOV",
    "id": "T02A_157"
  },
  {
    "q": "Can you repair a puncture in an HV glove?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only with rubber glue",
      "Only with tape"
    ],
    "exp": "Safety equipment reliability cannot be maintained via patches; replacement is mandatory.",
    "cat": "GLOV",
    "id": "T02A_158"
  },
  {
    "q": "What class is Orange?",
    "a": "Class 4",
    "opts": [
      "Class 1",
      "Class 2",
      "Class 3",
      "Class 4"
    ],
    "exp": "Class 4 gloves are orange, rated up to 36 kV.",
    "cat": "GLOV",
    "id": "T02A_159"
  },
  {
    "q": "Is the leather protector tested?",
    "a": "Yes, inspected for cuts/holes",
    "opts": [
      "No",
      "Yes, inspected for cuts/holes",
      "Only if it gets wet",
      "It is replaced every 6 months"
    ],
    "exp": "Damaged leather may allow sharp metal to penetrate and puncture the rubber beneath.",
    "cat": "GLOV",
    "id": "T02A_160"
  },
  {
    "q": "What should the glove tag show?",
    "a": "Date of last electrical dielectric test",
    "opts": [
      "Expiry date only",
      "Date of last electrical dielectric test",
      "User name",
      "Brand name"
    ],
    "exp": "The tag is proof that the glove has passed the certified dielectric test within the 6-month window.",
    "cat": "GLOV",
    "id": "T02A_161"
  },
  {
    "q": "What is the consequence of missing the tag?",
    "a": "DO NOT USE - remove from service",
    "opts": [
      "It is acceptable",
      "DO NOT USE - remove from service",
      "Re-test it yourself",
      "Use only for LV"
    ],
    "exp": "Lack of a current, verified test tag means safety compliance cannot be proven.",
    "cat": "GLOV",
    "id": "T02A_162"
  },
  {
    "q": "What is the voltage rating of Class 1 gloves?",
    "a": "7,500 V",
    "opts": [
      "1,000 V",
      "7,500 V",
      "17,000 V",
      "26,500 V"
    ],
    "exp": "Class 1 covers up to 7.5 kV.",
    "cat": "GLOV",
    "id": "T02A_163"
  },
  {
    "q": "How often should you inspect gloves for damage?",
    "a": "Visually before every use",
    "opts": [
      "Every year",
      "Visually before every use",
      "Only when cleaning",
      "Never"
    ],
    "exp": "A daily check protects you against a puncture that occurred since last use.",
    "cat": "RULE",
    "id": "T02A_164"
  },
  {
    "q": "What must you keep away from gloves?",
    "a": "Oil and petroleum products",
    "opts": [
      "Water",
      "Oil and petroleum products",
      "Plastic bags",
      "Wooden boxes"
    ],
    "exp": "Petroleum strips the rubber of its flexibility and dielectric integrity.",
    "cat": "RULE",
    "id": "T02A_165"
  },
  {
    "q": "Why avoid UV light exposure?",
    "a": "UV degrades rubber over time",
    "opts": [
      "It causes them to shrink",
      "UV degrades rubber over time",
      "It makes them sticky",
      "No reason"
    ],
    "exp": "Prolonged UV exposure turns rubber brittle, leading to cracking.",
    "cat": "RULE",
    "id": "T02A_166"
  },
  {
    "q": "What does Ozone do to rubber gloves?",
    "a": "Causes invisible micro-fractures",
    "opts": [
      "Enhances strength",
      "Causes invisible micro-fractures",
      "It does nothing",
      "It disinfects"
    ],
    "exp": "Ozone (produced by electric motors/sparks) causes 'ozone cracking', which ruins the glove.",
    "cat": "RULE",
    "id": "T02A_167"
  },
  {
    "q": "Where should gloves be stored?",
    "a": "In a cool, dark, dry location",
    "opts": [
      "Near the engine room door",
      "In a cool, dark, dry location",
      "In the bridge locker",
      "Near the boiler"
    ],
    "exp": "Optimal storage prevents UV, heat, and humidity degradation.",
    "cat": "RULE",
    "id": "T02A_168"
  },
  {
    "q": "How should a leak be identified in an inflation test?",
    "a": "Deflation or audible leak",
    "opts": [
      "Colour change",
      "Deflation or audible leak",
      "Increased pressure",
      "Feeling cold"
    ],
    "exp": "If the trapped air escapes, the rubber is compromised.",
    "cat": "RULE",
    "id": "T02A_169"
  },
  {
    "q": "What is the first step in the rack-out sequence?",
    "a": "OPEN VCB",
    "opts": [
      "Disconnect control power",
      "OPEN VCB",
      "Turn the handle",
      "Apply earth"
    ],
    "exp": "Safety interlocks prohibit movement while the breaker is carrying load.",
    "cat": "MAINT",
    "id": "T02A_170"
  },
  {
    "q": "What should you do after opening the VCB during rack-out?",
    "a": "Discharge closing spring",
    "opts": [
      "Apply earth",
      "Test for dead",
      "Discharge closing spring",
      "Open the door"
    ],
    "exp": "Preventing accidental energy release is a critical step in the sequence.",
    "cat": "MAINT",
    "id": "T02A_171"
  },
  {
    "q": "What happens in the TEST position?",
    "a": "Disconnected from HV busbars, control circuits still connected",
    "opts": [
      "Fully live",
      "Disconnected from HV busbars, control circuits still connected",
      "Fully isolated",
      "The door is locked"
    ],
    "exp": "TEST allows safe testing of protection relays without HV exposure.",
    "cat": "MAINT",
    "id": "T02A_172"
  },
  {
    "q": "How do you know the VCB is in the ISOLATED position?",
    "a": "Confirmed by shutter closure over busbar spouts",
    "opts": [
      "The VCB light turns green",
      "Confirmed by shutter closure over busbar spouts",
      "The door pops open",
      "The handle stops turning"
    ],
    "exp": "Shutters provide a physical barrier between you and the live busbar.",
    "cat": "MAINT",
    "id": "T02A_173"
  },
  {
    "q": "What is the typical contact resistance (ductor test) spec?",
    "a": "< 100 μΩ",
    "opts": [
      "< 1 Ω",
      "< 100 μΩ",
      "< 10 mΩ",
      "< 1 kΩ"
    ],
    "exp": "Extremely low resistance is required to avoid heat during high-current fault events.",
    "cat": "MAINT",
    "id": "T02A_174"
  },
  {
    "q": "What does a VCB timing test measure?",
    "a": "Time to open or close contacts",
    "opts": [
      "Vacuum bottle pressure",
      "Time to open or close contacts",
      "Spring charging motor speed",
      "Resistance between phases"
    ],
    "exp": "Timing determines the mechanical health and speed of the operating mechanism.",
    "cat": "MAINT",
    "id": "T02A_175"
  },
  {
    "q": "How are VCB pivot points maintained?",
    "a": "Lubricated per maker's manual",
    "opts": [
      "Painted",
      "Lubricated per maker's manual",
      "Welded",
      "Taped over"
    ],
    "exp": "Specified grease ensures smooth, predictable mechanical timing.",
    "cat": "MAINT",
    "id": "T02A_176"
  },
  {
    "q": "What does high contact resistance mean?",
    "a": "Worn or oxidised contacts",
    "opts": [
      "The vacuum is too high",
      "Worn or oxidised contacts",
      "The breaker is too fast",
      "The spring is too tight"
    ],
    "exp": "Surface degradation adds resistive heating, leading to failure.",
    "cat": "MAINT",
    "id": "T02A_177"
  },
  {
    "q": "What happens to the VCB if lubrication is wrong?",
    "a": "Mechanism can slow down or freeze",
    "opts": [
      "It catches fire",
      "Mechanism can slow down or freeze",
      "It loses vacuum",
      "It gains speed"
    ],
    "exp": "Hardened grease or dirty lubricant restricts mechanical operation speed.",
    "cat": "MAINT",
    "id": "T02A_178"
  },
  {
    "q": "Can you visually check the vacuum bottle?",
    "a": "No, it requires special HV test equipment",
    "opts": [
      "Yes, just look for cracks",
      "No, it requires special HV test equipment",
      "Yes, if you use a microscope",
      "Only if it is cracked"
    ],
    "exp": "Vacuum is invisible; only an electrical breakdown test can confirm the integrity.",
    "cat": "MAINT",
    "id": "T02A_179"
  },
  {
    "q": "What indicates slow VCB operation?",
    "a": "Mechanism wear or spring fatigue",
    "opts": [
      "Vacuum leakage",
      "Mechanism wear or spring fatigue",
      "Low temperature",
      "Excessive lubrication"
    ],
    "exp": "As parts wear or springs lose tension, the mechanical travel takes longer.",
    "cat": "MAINT",
    "id": "T02A_180"
  },
  {
    "q": "What is indicated by extended settling time in a VCB?",
    "a": "Contact bounce",
    "opts": [
      "Vacuum loss",
      "Contact bounce",
      "Fast timing",
      "High contact resistance"
    ],
    "exp": "If contacts 'bounce' or chatter upon closing, they are not firmly seated.",
    "cat": "MAINT",
    "id": "T02A_181"
  },
  {
    "q": "What is the typical operating time for a marine VCB?",
    "a": "40–80 ms",
    "opts": [
      "10–20 ms",
      "40–80 ms",
      "200–500 ms",
      "1–2 seconds"
    ],
    "exp": "This is the industry standard window for reliable mechanical switching.",
    "cat": "MAINT",
    "id": "T02A_182"
  },
  {
    "q": "How can you detect spring fatigue?",
    "a": "Measure spring compression against specification",
    "opts": [
      "By sound",
      "Measure spring compression against specification",
      "By observing the vacuum",
      "By feeling the heat"
    ],
    "exp": "Compressing the spring and checking the force/dimension against manual specs reveals loss of tension.",
    "cat": "MAINT",
    "id": "T02A_183"
  },
  {
    "q": "Is mechanical timing data valuable?",
    "a": "Yes, for trend analysis",
    "opts": [
      "No, it is useless",
      "Yes, for trend analysis",
      "Only if it fails",
      "Only for new VCBs"
    ],
    "exp": "Tracking timing changes over years helps predict failure before it happens.",
    "cat": "MAINT",
    "id": "T02A_184"
  },
  {
    "q": "What is a major indicator of contact bounce?",
    "a": "Extended settling time during closing test",
    "opts": [
      "Low vacuum",
      "Extended settling time during closing test",
      "High operating temperature",
      "Loose fasteners"
    ],
    "exp": "The contacts fail to lock into place cleanly, oscillating before finally seating.",
    "cat": "MAINT",
    "id": "T02A_185"
  },
  {
    "q": "What is the remedy for high contact bounce?",
    "a": "Replace contacts or adjust spring tension",
    "opts": [
      "Clean the mechanism",
      "Replace contacts or adjust spring tension",
      "Re-lubricate the pivot",
      "Do nothing"
    ],
    "exp": "If the spring pressure isn't enough to hold the contact closed against magnetic/mechanical force, it bounces.",
    "cat": "MAINT",
    "id": "T02A_186"
  },
  {
    "q": "Does timing test detect spring fatigue?",
    "a": "Yes, via slow operation results",
    "opts": [
      "No",
      "Yes, via slow operation results",
      "Only vacuum leakage",
      "Only electrical faults"
    ],
    "exp": "A weak spring takes longer to force the contacts shut.",
    "cat": "MAINT",
    "id": "T02A_187"
  },
  {
    "q": "Why is it important to trend mechanical timing?",
    "a": "Deterioration is gradual and detectable",
    "opts": [
      "It's a SOLAS requirement",
      "Deterioration is gradual and detectable",
      "To avoid testing too often",
      "To compare with other ships"
    ],
    "exp": "Sudden failure is rare; progressive timing delay is a reliable sign of approaching end-of-life.",
    "cat": "MAINT",
    "id": "T02A_188"
  },
  {
    "q": "What could cause slow operation in a mechanism?",
    "a": "Dried or wrong lubrication",
    "opts": [
      "Vacuum bottle is too full",
      "Dried or wrong lubrication",
      "Over-speeding the VCB",
      "Excessive spring tension"
    ],
    "exp": "Friction from dirty/stuck grease dramatically increases mechanical closing time.",
    "cat": "MAINT",
    "id": "T02A_189"
  },
  {
    "q": "What megger voltage is used for 3.3 kV HV equipment?",
    "a": "2500 V DC",
    "opts": [
      "500 V DC",
      "2500 V DC",
      "5000 V DC",
      "100 V DC"
    ],
    "exp": "2500V is the standard stress level for 3.3 kV systems.",
    "cat": "IR",
    "id": "T02A_190"
  },
  {
    "q": "What megger voltage is preferred for 6.6 kV cables?",
    "a": "5000 V DC",
    "opts": [
      "500 V DC",
      "2500 V DC",
      "5000 V DC",
      "100 V DC"
    ],
    "exp": "The thick insulation of 6.6 kV cables requires 5 kV for an effective stress test.",
    "cat": "IR",
    "id": "T02A_191"
  },
  {
    "q": "Why use high voltage for megger testing?",
    "a": "To meaningfully stress insulation toward operating voltage",
    "opts": [
      "To measure lower resistance",
      "To meaningfully stress insulation toward operating voltage",
      "To check for vacuum integrity",
      "To save time"
    ],
    "exp": "Insulation weakness often remains dormant at low voltages but breaks down at operational HV levels.",
    "cat": "IR",
    "id": "T02A_192"
  },
  {
    "q": "What is the IEC minimum IR formula?",
    "a": "Working Voltage (kV) + 1 MΩ",
    "opts": [
      "Working Voltage (kV) - 1 MΩ",
      "Working Voltage (kV) + 1 MΩ",
      "Working Voltage (kV) × 2 MΩ",
      "Working Voltage (kV) / 2 MΩ"
    ],
    "exp": "This universal standard defines the minimum acceptable performance for ship insulation.",
    "cat": "IR",
    "id": "T02A_193"
  },
  {
    "q": "What is the minimum IR for a 6.6 kV machine?",
    "a": "7.6 MΩ",
    "opts": [
      "1 MΩ",
      "6.6 MΩ",
      "7.6 MΩ",
      "15 MΩ"
    ],
    "exp": "6.6 + 1 = 7.6 MΩ.",
    "cat": "IR",
    "id": "T02A_194"
  },
  {
    "q": "What is the minimum IR for a 3.3 kV machine?",
    "a": "4.3 MΩ",
    "opts": [
      "3.3 MΩ",
      "4.3 MΩ",
      "5.3 MΩ",
      "1 MΩ"
    ],
    "exp": "3.3 + 1 = 4.3 MΩ.",
    "cat": "IR",
    "id": "T02A_195"
  },
  {
    "q": "What is the 200% return-to-service rule?",
    "a": "After repair, IR must be twice the minimum acceptable value",
    "opts": [
      "After repair, IR must be 200 MΩ",
      "After repair, IR must be twice the minimum acceptable value",
      "After repair, IR must be 1 MΩ",
      "After repair, IR must be 500% of minimum"
    ],
    "exp": "A high safety buffer (doubling minimum) ensures equipment can handle operational aging.",
    "cat": "IR",
    "id": "T02A_196"
  },
  {
    "q": "What is the return-to-service IR for a 6.6 kV machine?",
    "a": "15.2 MΩ",
    "opts": [
      "7.6 MΩ",
      "15.2 MΩ",
      "20 MΩ",
      "30 MΩ"
    ],
    "exp": "7.6 MΩ × 2 = 15.2 MΩ.",
    "cat": "IR",
    "id": "T02A_197"
  },
  {
    "q": "Why is PI test used on HV cables?",
    "a": "Capacitance makes a single IR reading unreliable",
    "opts": [
      "It is faster",
      "Capacitance makes a single IR reading unreliable",
      "It is a SOLAS requirement",
      "It detects continuity"
    ],
    "exp": "Large cables act like capacitors, and the leakage current takes time to steady, hence the ratio is more representative.",
    "cat": "IR",
    "id": "T02A_198"
  },
  {
    "q": "What voltage is forbidden on sensitive electronics?",
    "a": "500 V megger",
    "opts": [
      "50 V megger",
      "500 V megger",
      "2500 V megger",
      "100 V megger"
    ],
    "exp": "500 V instantly blows sensitive semiconductor junctions on control boards.",
    "cat": "IR",
    "id": "T02A_199"
  },
  {
    "q": "What is the discharge rule for HV terminals?",
    "a": "1 minute per kV applied",
    "opts": [
      "30 seconds",
      "1 minute per kV applied",
      "5 minutes",
      "10 minutes"
    ],
    "exp": "This ensures the capacitive charge is drained to a non-lethal level.",
    "cat": "IR",
    "id": "T02A_200"
  },
  {
    "q": "What is the IEC minimum IR for 11 kV?",
    "a": "12 MΩ",
    "opts": [
      "11 MΩ",
      "12 MΩ",
      "13 MΩ",
      "10 MΩ"
    ],
    "exp": "11 + 1 = 12 MΩ.",
    "cat": "IR",
    "id": "T02A_201"
  },
  {
    "q": "What is the return-to-service IR for 11 kV?",
    "a": "24 MΩ",
    "opts": [
      "12 MΩ",
      "22 MΩ",
      "24 MΩ",
      "25 MΩ"
    ],
    "exp": "12 MΩ × 2 = 24 MΩ.",
    "cat": "IR",
    "id": "T02A_202"
  },
  {
    "q": "What megger voltage is used for LV alternator test?",
    "a": "1000 V DC",
    "opts": [
      "500 V DC",
      "1000 V DC",
      "2500 V DC",
      "5000 V DC"
    ],
    "exp": "Large transformers and alternators are often tested at 1000V DC.",
    "cat": "IR",
    "id": "T02A_203"
  },
  {
    "q": "If IR is 2 MΩ on a 6.6 kV machine, is it safe to operate?",
    "a": "No, 2 MΩ < 7.6 MΩ minimum",
    "opts": [
      "Yes, > 1 MΩ",
      "No, 2 MΩ < 7.6 MΩ minimum",
      "Yes, > 0 MΩ",
      "Unsure"
    ],
    "exp": "It fails the minimum 7.6 MΩ threshold.",
    "cat": "IR",
    "id": "T02A_204"
  },
  {
    "q": "What system uses an IRM?",
    "a": "IT (Insulated Neutral) system",
    "opts": [
      "TNC-S system",
      "IT (Insulated Neutral) system",
      "TN-C system",
      "Solidly earthed system"
    ],
    "exp": "Floating systems use IRMs because they don't trip on a first earth fault.",
    "cat": "IRM",
    "id": "T02A_205"
  },
  {
    "q": "What is the IRM's main job?",
    "a": "Continuously monitor impedance between live conductors and hull",
    "opts": [
      "Trip the breaker on short circuit",
      "Continuously monitor impedance between live conductors and hull",
      "Inject HV for testing",
      "Ground the neutral"
    ],
    "exp": "It provides the early warning system that an insulation breach has occurred.",
    "cat": "IRM",
    "id": "T02A_206"
  },
  {
    "q": "What voltage does the IRM inject?",
    "a": "Low-level DC (1–5 V)",
    "opts": [
      "440 V AC",
      "Low-level DC (1–5 V)",
      "6.6 kV DC",
      "1000 V AC"
    ],
    "exp": "It uses a safe, low injection voltage to sense leakage current.",
    "cat": "IRM",
    "id": "T02A_207"
  },
  {
    "q": "How does the IRM indicate a fault?",
    "a": "Visual + audible ALARM when impedance drops below threshold",
    "opts": [
      "It trips the MSB",
      "Visual + audible ALARM when impedance drops below threshold",
      "It displays the fault location",
      "It shuts down the generator"
    ],
    "exp": "It warns of degradation without causing a blackout.",
    "cat": "IRM",
    "id": "T02A_208"
  },
  {
    "q": "What is the typical LV IRM alarm threshold?",
    "a": "50–100 kΩ",
    "opts": [
      "1–5 kΩ",
      "50–100 kΩ",
      "1–5 MΩ",
      "10 MΩ"
    ],
    "exp": "An impedance of 50-100 kΩ is the danger zone for LV electrical systems.",
    "cat": "IRM",
    "id": "T02A_209"
  },
  {
    "q": "How do you find the fault after an IRM alarm?",
    "a": "Switch off non-essential circuits sequentially until alarm clears",
    "opts": [
      "Look for smoke",
      "Switch off non-essential circuits sequentially until alarm clears",
      "Trip the main ACB",
      "Use the thermal camera"
    ],
    "exp": "Elimination is the standard manual troubleshooting method for earth faults.",
    "cat": "IRM",
    "id": "T02A_210"
  },
  {
    "q": "What happens if a second earth fault occurs on a different phase?",
    "a": "Phase-to-phase short circuit that trips the OCR",
    "opts": [
      "Nothing",
      "Phase-to-phase short circuit that trips the OCR",
      "The IRM alarm clears",
      "The generator over-speeds"
    ],
    "exp": "Two earth faults on different phases complete a circuit through the hull, causing a short.",
    "cat": "IRM",
    "id": "T02A_211"
  },
  {
    "q": "Does the IRM tell you where the fault is?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Sometimes",
      "Only for HV"
    ],
    "exp": "It detects the *existence* of a fault, not its *location*.",
    "cat": "IRM",
    "id": "T02A_212"
  },
  {
    "q": "On an HV system, what does the IRM monitor?",
    "a": "Current through the NER",
    "opts": [
      "Phase voltage",
      "Current through the NER",
      "Transformer temperature",
      "Voltage frequency"
    ],
    "exp": "Since the NER connects the neutral to earth, current flowing through it signifies an earth fault.",
    "cat": "IRM",
    "id": "T02A_213"
  },
  {
    "q": "Is the system floating if an NER is present?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only partially",
      "Yes, above 6.6 kV"
    ],
    "exp": "An NER provides a high-resistance path to ground, effectively 'grounding' the neutral, not floating it.",
    "cat": "IRM",
    "id": "T02A_214"
  },
  {
    "q": "Why investigate the first earth fault immediately?",
    "a": "To fix it before a second fault creates a short circuit",
    "opts": [
      "To prevent the light bulbs from blowing",
      "To fix it before a second fault creates a short circuit",
      "To improve generator efficiency",
      "To stop the IRM from buzzing"
    ],
    "exp": "Two earth faults equal a major short-circuit event.",
    "cat": "IRM",
    "id": "T02A_215"
  },
  {
    "q": "Can IRM detect earth faults in the stator?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in cables",
      "Only in transformers"
    ],
    "exp": "Yes, any insulation degradation anywhere on the distribution network affects the total leakage.",
    "cat": "IRM",
    "id": "T02A_216"
  },
  {
    "q": "What occurs when the alarm clears during fault finding?",
    "a": "The last circuit switched off contains the fault",
    "opts": [
      "The IRM has failed",
      "The last circuit switched off contains the fault",
      "The generator has tripped",
      "The fault has repaired itself"
    ],
    "exp": "Isolating the faulty branch removes the leakage path to earth, clearing the IRM alarm.",
    "cat": "IRM",
    "id": "T02A_217"
  },
  {
    "q": "What is an earth fault?",
    "a": "Breakdown of insulation between live parts and ground/hull",
    "opts": [
      "A short between two phases",
      "Breakdown of insulation between live parts and ground/hull",
      "Loss of generator excitation",
      "Overload of a pump motor"
    ],
    "exp": "Earth faults mean current is leaking to the structure of the ship.",
    "cat": "IRM",
    "id": "T02A_218"
  },
  {
    "q": "What is the permitted category for Zone 0?",
    "a": "Ex-ia (Intrinsically safe Cat. ia)",
    "opts": [
      "Ex-d (Flameproof)",
      "Ex-ia (Intrinsically safe Cat. ia)",
      "Ex-n",
      "Ex-p"
    ],
    "exp": "Only Ex-ia is safe enough for the high-risk, continuous explosive atmosphere of Zone 0.",
    "cat": "TANK",
    "id": "T02A_219"
  },
  {
    "q": "Where is Zone 0 located?",
    "a": "Inside cargo tanks",
    "opts": [
      "Engine room",
      "Inside cargo tanks",
      "Navigation bridge",
      "Accommodation cabin"
    ],
    "exp": "Cargo tanks carry fuel continuously, making them the most hazardous area.",
    "cat": "TANK",
    "id": "T02A_220"
  },
  {
    "q": "What is Ex-d (Flameproof) enclosure?",
    "a": "Contains internal explosion and cools gases below ignition temperature",
    "opts": [
      "Prevents internal explosion entirely",
      "Contains internal explosion and cools gases below ignition temperature",
      "Pressurised with nitrogen",
      "Intrinsically safe energy limit"
    ],
    "exp": "Ex-d allows an explosion to happen inside but ensures no flame escapes to ignite the outside gas.",
    "cat": "TANK",
    "id": "T02A_221"
  },
  {
    "q": "What is the purpose of ship-to-jetty bonding cable?",
    "a": "Equalise electrical potential to prevent static spark discharge",
    "opts": [
      "Provide ship with shore power",
      "Equalise electrical potential to prevent static spark discharge",
      "Ground the cargo pumps",
      "Check the shore voltage"
    ],
    "exp": "Different potential between ship and jetty causes static build-up, which discharges as a spark.",
    "cat": "TANK",
    "id": "T02A_222"
  },
  {
    "q": "When do you remove the bonding cable?",
    "a": "LAST - after all hose/arm connections are broken",
    "opts": [
      "FIRST - before connecting hoses",
      "LAST - after all hose/arm connections are broken",
      "During cargo transfer",
      "Never"
    ],
    "exp": "Bonding must remain in place whenever the ship and jetty are physically connected.",
    "cat": "TANK",
    "id": "T02A_223"
  },
  {
    "q": "Which hose type drains static charge?",
    "a": "Conductive hose",
    "opts": [
      "Non-conductive (insulating) hose",
      "Conductive hose",
      "PVC hose",
      "Rubber tube only"
    ],
    "exp": "Conductive hoses allow the static charge generated by flowing fluid to drain to the ship's earth.",
    "cat": "TANK",
    "id": "T02A_224"
  },
  {
    "q": "What does 'intrinsically safe' mean?",
    "a": "Energy limited below the minimum ignition energy of the gas",
    "opts": [
      "Enclosure is very strong",
      "Energy limited below the minimum ignition energy of the gas",
      "Pressurised with air",
      "Shielded from sparks"
    ],
    "exp": "If the energy is kept low, even if a spark occurs, it has insufficient thermal content to ignite gas.",
    "cat": "TANK",
    "id": "T02A_225"
  },
  {
    "q": "Where is Ex-n equipment typically permitted?",
    "a": "Zone 2",
    "opts": [
      "Zone 0",
      "Zone 1",
      "Zone 2",
      "Nowhere"
    ],
    "exp": "Ex-n is a category restricted to areas where hazard is unlikely.",
    "cat": "TANK",
    "id": "T02A_226"
  },
  {
    "q": "What is Ex-p (Pressurised) equipment?",
    "a": "Enclosure pressurised with inert gas to exclude explosive atmosphere",
    "opts": [
      "Explosion-proof enclosure",
      "Enclosure pressurised with inert gas to exclude explosive atmosphere",
      "Intrinsically safe limited circuit",
      "Portable handheld equipment"
    ],
    "exp": "Overpressure keeps explosive gases out of the motor/panel enclosure.",
    "cat": "TANK",
    "id": "T02A_227"
  },
  {
    "q": "What is the risk of non-conductive hose?",
    "a": "Static charge accumulation",
    "opts": [
      "Too heavy",
      "Static charge accumulation",
      "Too fragile",
      "Too conductive"
    ],
    "exp": "Static cannot drain, potentially sparking when decoupled near vapor vents.",
    "cat": "TANK",
    "id": "T02A_228"
  },
  {
    "q": "Is the cargo hose tested?",
    "a": "Yes, IR test before cargo operations",
    "opts": [
      "No",
      "Yes, IR test before cargo operations",
      "Only after hose breaks",
      "Only annually"
    ],
    "exp": "The cargo transfer checklist must confirm the hose type (conductive/non-conductive) is verified via megger.",
    "cat": "TANK",
    "id": "T02A_229"
  },
  {
    "q": "What happens if a bonding cable is NOT connected?",
    "a": "Potential difference causes static sparks",
    "opts": [
      "No effect",
      "Potential difference causes static sparks",
      "The ship speeds up",
      "Voltage rises to 11 kV"
    ],
    "exp": "Without bonding, static charge accumulates and discharges at the coupling/flanges.",
    "cat": "TANK",
    "id": "T02A_230"
  },
  {
    "q": "Which zone is the pump room?",
    "a": "Zone 1",
    "opts": [
      "Zone 0",
      "Zone 1",
      "Zone 2",
      "Zone 3"
    ],
    "exp": "Pump rooms are classified Zone 1 due to inevitable leaks/fumes.",
    "cat": "TANK",
    "id": "T02A_231"
  },
  {
    "q": "Why connect bonding first?",
    "a": "Equalise potential before hydrocarbon contact",
    "opts": [
      "To check terminal voltage",
      "Equalise electrical potential before hydrocarbon contact",
      "To verify shore power",
      "To prevent tripping the MSB"
    ],
    "exp": "Safety protocol dictates bonding is always the very first step of the transfer.",
    "cat": "TANK",
    "id": "T02A_232"
  },
  {
    "q": "What causes electrolytic pitting of the propeller shaft?",
    "a": "Stray currents discharging through the bearing oil film",
    "opts": [
      "Salt water splashing",
      "Stray currents discharging through the bearing oil film",
      "High frequency vibrations",
      "Magnetic field from the motor"
    ],
    "exp": "Oil film is a dielectric; stray currents turn it into a tiny discharge arc, pitting the metal.",
    "cat": "SHAFT",
    "id": "T02A_233"
  },
  {
    "q": "What is the purpose of shaft earthing assemblies?",
    "a": "Maintain shaft at hull potential",
    "opts": [
      "Increase shaft speed",
      "Maintain shaft at hull potential",
      "Stop vibration",
      "Reduce friction"
    ],
    "exp": "By connecting the rotating shaft to the hull, current bypasses the bearing oil.",
    "cat": "SHAFT",
    "id": "T02A_234"
  },
  {
    "q": "What components are used in shaft earthing?",
    "a": "Spring-loaded carbon brush assembly",
    "opts": [
      "Magnetic brake",
      "Spring-loaded carbon brush assembly",
      "Copper rollers",
      "Oil seals"
    ],
    "exp": "The brushes ride on the shaft surface to continuously drain static/stray current.",
    "cat": "SHAFT",
    "id": "T02A_235"
  },
  {
    "q": "What should the shaft-to-hull resistance measure?",
    "a": "< 1 Ω",
    "opts": [
      "< 100 Ω",
      "< 1 Ω",
      "> 1 MΩ",
      "1 kΩ"
    ],
    "exp": "A very low resistance confirms a perfect electrical bond.",
    "cat": "SHAFT",
    "id": "T02A_236"
  },
  {
    "q": "What happens if shaft-to-hull resistance is high?",
    "a": "Current will find another path, through bearing oil",
    "opts": [
      "The shaft is safe",
      "Current will find another path, through bearing oil",
      "The generator will trip",
      "The shaft locks"
    ],
    "exp": "If the brush is worn or isolated, stray current reverts to pitting the journal.",
    "cat": "SHAFT",
    "id": "T02A_237"
  },
  {
    "q": "What is checked on carbon shaft brushes?",
    "a": "Wear against manufacturer's minimum mark",
    "opts": [
      "The colour of the brush",
      "Wear against manufacturer's minimum mark",
      "The weight of the brush",
      "The hardness of the brush"
    ],
    "exp": "Brushes shorten as they wear; once they hit the limit, contact pressure fails.",
    "cat": "SHAFT",
    "id": "T02A_238"
  },
  {
    "q": "Why keep oil contamination off the shaft slip ring?",
    "a": "Oil is an insulator and prevents electrical contact",
    "opts": [
      "Oil is conductive",
      "Oil is an insulator and prevents electrical contact",
      "Oil is a hazard for fire",
      "Oil is harmless"
    ],
    "exp": "Oil film between the brush and shaft breaks the grounding connection.",
    "cat": "SHAFT",
    "id": "T02A_239"
  },
  {
    "q": "What kind of current is shaft earthing dealing with?",
    "a": "Stray currents (from alternators/VFDs)",
    "opts": [
      "Only AC current",
      "Stray currents (from alternators/VFDs)",
      "Only DC current",
      "None"
    ],
    "exp": "High frequency switching from modern drives creates capacitive currents seeking ground through the shaft.",
    "cat": "SHAFT",
    "id": "T02A_240"
  },
  {
    "q": "What happens if shaft earthing fails?",
    "a": "Bearing failure due to electrolytic corrosion",
    "opts": [
      "Propeller loses pitch",
      "Bearing failure due to electrolytic corrosion",
      "Overheating of the propeller",
      "Total ship blackout"
    ],
    "exp": "Pitting makes the bearing surface rough, leading to rapid degradation and final seizure.",
    "cat": "SHAFT",
    "id": "T02A_241"
  },
  {
    "q": "How often check shaft earthing?",
    "a": "Periodically, recorded in PMS",
    "opts": [
      "Every time the ship berths",
      "Periodically, recorded in PMS",
      "Only if it fails",
      "Once a year"
    ],
    "exp": "Consistent monitoring and logging are the only way to catch degradation early.",
    "cat": "SHAFT",
    "id": "T02A_242"
  },
  {
    "q": "What generates streaming current in cargo pipes?",
    "a": "Friction between cargo fluid and pipe wall",
    "opts": [
      "The ship's engine",
      "Friction between cargo fluid and pipe wall",
      "Cargo pump motor",
      "The shore power"
    ],
    "exp": "Triboelectric charging occurs as fluid rushes against fixed pipe surfaces.",
    "cat": "STREAM",
    "id": "T02A_243"
  },
  {
    "q": "Why is streaming current dangerous?",
    "a": "Accumulated charge causes static sparks",
    "opts": [
      "It melts the hoses",
      "Accumulated charge causes static sparks",
      "It reduces cargo pump flow",
      "It makes hoses float"
    ],
    "exp": "A spark in a fuel vapour environment causes an immediate explosion.",
    "cat": "STREAM",
    "id": "T02A_244"
  },
  {
    "q": "What is the purpose of bonding before connecting hoses?",
    "a": "Drain static charge to the ship's earth",
    "opts": [
      "To boost voltage",
      "Drain static charge to the ship's earth",
      "To check for leaks",
      "To test for resistance"
    ],
    "exp": "A continuous low-resistance path bleeds off static before it builds to spark-level voltage.",
    "cat": "STREAM",
    "id": "T02A_245"
  },
  {
    "q": "How does non-conductive hose prevent cathodic corrosion?",
    "a": "Prevents cathodic protection current flow between ship and shore",
    "opts": [
      "By having lower resistance",
      "Prevents cathodic protection current flow between ship and shore",
      "By using an extra heavy gauge",
      "By adding an isolator"
    ],
    "exp": "Some terminals use strong impressed current anodes; metal hoses would complete a galvanic cell between them.",
    "cat": "STREAM",
    "id": "T02A_246"
  },
  {
    "q": "What does IR test on cargo hose verify?",
    "a": "Whether it is conductive or non-conductive",
    "opts": [
      "Whether it is leak-free",
      "Whether it is conductive or non-conductive",
      "Whether the pressure is safe",
      "Whether it is clean"
    ],
    "exp": "A megger tells you if the hose contains the internal wire bonding mesh.",
    "cat": "STREAM",
    "id": "T02A_247"
  },
  {
    "q": "What happens if a conductive hose is used where a non-conductive one is required?",
    "a": "Galvanic corrosion problems",
    "opts": [
      "Immediate hose failure",
      "Galvanic corrosion problems",
      "Better flow rates",
      "Higher static charge"
    ],
    "exp": "Completing the galvanic circuit between ship and shore is destructive to anodes/hulls.",
    "cat": "STREAM",
    "id": "T02A_248"
  },
  {
    "q": "Is cargo hose continuity verified?",
    "a": "Yes, during hose preparation",
    "opts": [
      "Only if it looks damaged",
      "Yes, during hose preparation",
      "No",
      "Only after cargo operation"
    ],
    "exp": "Verify the resistance is within maker's spec to ensure it will carry static or protect the cathodics correctly.",
    "cat": "STREAM",
    "id": "T02A_249"
  },
  {
    "q": "What happens to the charge on a hose surface?",
    "a": "It can ignite cargo vapours if it sparks",
    "opts": [
      "It discharges silently",
      "It can ignite cargo vapours if it sparks",
      "It does not matter",
      "It is sucked away by vacuum"
    ],
    "exp": "The discharge of the accumulated static is the high-energy event that triggers an ignition.",
    "cat": "STREAM",
    "id": "T02A_250"
  },
  {
    "q": "What standard covers HVSC systems?",
    "a": "IEC/IEEE 80005-1:2019",
    "opts": [
      "IEC 60092",
      "IEC/IEEE 80005-1:2019",
      "ISO 20000",
      "SOLAS"
    ],
    "exp": "This international standard defines how shore power is safely transferred to ships.",
    "cat": "HVSC",
    "id": "T02A_251"
  },
  {
    "q": "What is the max prospective short-circuit current limit for HVSC?",
    "a": "≤ 25 kA RMS",
    "opts": [
      "≤ 10 kA",
      "≤ 25 kA RMS",
      "≤ 100 kA",
      "≤ 5 kA"
    ],
    "exp": "Combined ship and shore contributions must not exceed 25 kA.",
    "cat": "HVSC",
    "id": "T02A_252"
  },
  {
    "q": "What is the maximum allowed THD for HVSC?",
    "a": "≤ 5%",
    "opts": [
      "≤ 1%",
      "≤ 5%",
      "≤ 10%",
      "≤ 20%"
    ],
    "exp": "Total Harmonic Distortion must be strictly controlled to maintain power quality.",
    "cat": "HVSC",
    "id": "T02A_253"
  },
  {
    "q": "What is the limit for any individual harmonic in HVSC?",
    "a": "≤ 3%",
    "opts": [
      "≤ 1%",
      "≤ 3%",
      "≤ 5%",
      "≤ 10%"
    ],
    "exp": "Individual harmonics are more restricted than the total distortion.",
    "cat": "HVSC",
    "id": "T02A_254"
  },
  {
    "q": "What is the equipotential bonding resistance limit?",
    "a": "≤ 0.1 Ω",
    "opts": [
      "≤ 1 Ω",
      "≤ 0.1 Ω",
      "≤ 0.01 Ω",
      "≤ 10 Ω"
    ],
    "exp": "Continuous monitoring ensures this safe low-resistance path is always available.",
    "cat": "HVSC",
    "id": "T02A_255"
  },
  {
    "q": "What is the safety pilot loop minimum current?",
    "a": "50 mA",
    "opts": [
      "10 mA",
      "50 mA",
      "100 mA",
      "1 A"
    ],
    "exp": "The pilot loop must maintain 50 mA to signify a healthy plug connection.",
    "cat": "HVSC",
    "id": "T02A_256"
  },
  {
    "q": "What is the safety trip time for the pilot loop?",
    "a": "Maximum 200 ms",
    "opts": [
      "10 ms",
      "100 ms",
      "200 ms",
      "500 ms"
    ],
    "exp": "Within 0.2 seconds of the loop breaking, the breakers must trip.",
    "cat": "HVSC",
    "id": "T02A_257"
  },
  {
    "q": "Why is the pilot loop critical?",
    "a": "Prevents catastrophic arc flash if the plug is pulled live",
    "opts": [
      "Increases voltage",
      "Prevents catastrophic arc flash if the plug is pulled live",
      "Connects the ship to earth",
      "Measures harmonics"
    ],
    "exp": "It detects plug withdrawal immediately, killing power before the contacts physically separate.",
    "cat": "HVSC",
    "id": "T02A_258"
  },
  {
    "q": "Are HVSC standards applicable to existing ships?",
    "a": "Yes, but they define compatibility",
    "opts": [
      "No",
      "Yes, but they define compatibility",
      "Only for cruise ships",
      "Only for new builds"
    ],
    "exp": "80005-1 is the global standard for ensuring shore power connectivity works across any vessel/port pair.",
    "cat": "HVSC",
    "id": "T02A_259"
  },
  {
    "q": "What causes Skin Effect?",
    "a": "Eddy currents opposing current in the conductor interior",
    "opts": [
      "Insulation leakage",
      "Eddy currents opposing current in the conductor interior",
      "Magnetic saturation of the core",
      "Excessive heat"
    ],
    "exp": "Eddy currents push AC charge flow to the conductor's outer surface.",
    "cat": "SKIN",
    "id": "T02A_260"
  },
  {
    "q": "How does skin effect change with frequency?",
    "a": "Skin depth decreases as frequency increases",
    "opts": [
      "Skin depth increases as frequency increases",
      "Skin depth decreases as frequency increases",
      "No change",
      "Random changes"
    ],
    "exp": "Higher frequency means higher eddy induction, restricting charge to an even thinner skin.",
    "cat": "SKIN",
    "id": "T02A_261"
  },
  {
    "q": "What is the consequence of skin effect on resistance?",
    "a": "AC resistance (R_AC) increases compared to DC (R_DC)",
    "opts": [
      "R_AC decreases",
      "AC resistance (R_AC) increases compared to DC (R_DC)",
      "Both become identical",
      "Resistance disappears"
    ],
    "exp": "Reduced effective cross-sectional area leads to higher resistance.",
    "cat": "SKIN",
    "id": "T02A_262"
  },
  {
    "q": "What conductor shape is used to mitigate skin effect?",
    "a": "Hollow or stranded",
    "opts": [
      "Solid rectangular",
      "Hollow or stranded",
      "Single solid round",
      "Shielded only"
    ],
    "exp": "Stranded bundles break the conductor into many small pieces, increasing the total surface area and reducing skin-depth losses.",
    "cat": "SKIN",
    "id": "T02A_263"
  },
  {
    "q": "What determines skin depth at 50 Hz?",
    "a": "Approximately 9.5 mm in copper",
    "opts": [
      "Exactly 1 mm",
      "Approximately 9.5 mm in copper",
      "20 mm",
      "100 mm"
    ],
    "exp": "This is a standard physical constant for AC copper transmission.",
    "cat": "SKIN",
    "id": "T02A_264"
  },
  {
    "q": "What is Corona Effect?",
    "a": "Ionisation of air molecules around a conductor",
    "opts": [
      "A type of insulation",
      "Ionisation of air molecules around a conductor",
      "A magnetic effect",
      "A type of short circuit"
    ],
    "exp": "High electric fields strip electrons from air molecules, creating a conductive glow.",
    "cat": "CORONA",
    "id": "T02A_265"
  },
  {
    "q": "At what field intensity does corona occur in air?",
    "a": "Approximately 30 kV/cm",
    "opts": [
      "1 kV/cm",
      "Approximately 30 kV/cm",
      "66 kV/cm",
      "110 kV/cm"
    ],
    "exp": "The dielectric strength of air is roughly 30 kV/cm; exceeding this causes partial breakdown.",
    "cat": "CORONA",
    "id": "T02A_266"
  },
  {
    "q": "What is a visible sign of corona?",
    "a": "Faint bluish-purple glow",
    "opts": [
      "Sparking",
      "Faint bluish-purple glow",
      "Fire",
      "Smoke"
    ],
    "exp": "The ionisation produces light in the blue/purple part of the spectrum.",
    "cat": "CORONA",
    "id": "T02A_267"
  },
  {
    "q": "What is an audible sign of corona?",
    "a": "Hissing or crackling noise",
    "opts": [
      "Deep humming",
      "Hissing or crackling noise",
      "Ticking",
      "Silence"
    ],
    "exp": "The rapid air movement from ionisation causes the characteristic hissing sound.",
    "cat": "CORONA",
    "id": "T02A_268"
  },
  {
    "q": "Does corona consume energy?",
    "a": "Yes, power is wasted ionising air",
    "opts": [
      "No",
      "Yes, power is wasted ionising air",
      "Only during faults",
      "Only at night"
    ],
    "exp": "The power used to break air molecular bonds is drawn from the electrical system.",
    "cat": "CORONA",
    "id": "T02A_269"
  },
  {
    "q": "What gas is produced by corona?",
    "a": "Ozone (O₃)",
    "opts": [
      "Oxygen",
      "Ozone (O₃)",
      "SF6",
      "CO₂"
    ],
    "exp": "Ozone is generated by the high energy of the discharge.",
    "cat": "CORONA",
    "id": "T02A_270"
  },
  {
    "q": "Why is ozone harmful?",
    "a": "It is corrosive to insulation and metal",
    "opts": [
      "It is explosive",
      "It is corrosive to insulation and metal",
      "It causes electric shock",
      "It smells good"
    ],
    "exp": "Ozone is a strong oxidiser and will rot rubber/plastic insulation and rust metals.",
    "cat": "CORONA",
    "id": "T02A_271"
  },
  {
    "q": "How to mitigate corona?",
    "a": "Use smooth surfaces and corona rings",
    "opts": [
      "Use sharp points",
      "Use smooth surfaces and corona rings",
      "Use dusty air",
      "Add more voltage"
    ],
    "exp": "Smooth conductors and field-grading rings prevent high-field 'hot spots'.",
    "cat": "CORONA",
    "id": "T02A_272"
  },
  {
    "q": "What lowers the critical onset voltage of corona?",
    "a": "Moisture, dust, and sharp points",
    "opts": [
      "Cold temperatures",
      "Moisture, dust, and sharp points",
      "Increased conductor diameter",
      "Corona rings"
    ],
    "exp": "These factors create electric field concentrations that cause earlier ionization.",
    "cat": "CORONA",
    "id": "T02A_273"
  },
  {
    "q": "What does corona produce besides ozone?",
    "a": "Oxides of nitrogen",
    "opts": [
      "SF6 gas",
      "Oxides of nitrogen",
      "Copper dust",
      "Steam"
    ],
    "exp": "The heat of ionisation combines nitrogen and oxygen in the air.",
    "cat": "CORONA",
    "id": "T02A_274"
  },
  {
    "q": "What is the danger of an open-circuited CT secondary?",
    "a": "Lethal high voltage induced",
    "opts": [
      "Zero voltage",
      "Lethal high voltage induced",
      "Overcurrent trip",
      "No danger"
    ],
    "exp": "Primary current drives the core into deep saturation, inducing kilovolts of secondary emf.",
    "cat": "CT",
    "id": "T02A_275"
  },
  {
    "q": "What is a 'shorting-type' terminal block?",
    "a": "Make-before-break short circuiting terminal",
    "opts": [
      "A regular terminal",
      "Make-before-break short circuiting terminal",
      "An insulating terminal",
      "A high-voltage terminal"
    ],
    "exp": "Ensures the CT circuit is never open-circuited during maintenance.",
    "cat": "CT",
    "id": "T02A_276"
  },
  {
    "q": "Why MUST CTs never be open-circuited?",
    "a": "Core saturation leads to secondary insulation breakdown",
    "opts": [
      "It wastes current",
      "Core saturation leads to secondary insulation breakdown",
      "It affects the AVR",
      "It causes the breaker to trip"
    ],
    "exp": "The lack of secondary counter-flux allows the core to saturate and the voltage to spike to destructive levels.",
    "cat": "CT",
    "id": "T02A_277"
  },
  {
    "q": "When do you apply the shorting link?",
    "a": "BEFORE disconnecting the meter",
    "opts": [
      "AFTER disconnecting the meter",
      "BEFORE disconnecting the meter",
      "Only during a fault",
      "Never"
    ],
    "exp": "Short first, then disconnect ensures continuity is always maintained.",
    "cat": "CT",
    "id": "T02A_278"
  },
  {
    "q": "What damage can an open-circuit CT cause?",
    "a": "CT insulation, iron core, and wiring destruction",
    "opts": [
      "Only meter damage",
      "CT insulation, iron core, and wiring destruction",
      "Nothing",
      "Only AVR damage"
    ],
    "exp": "The uncontrolled energy release destroys the internal windings and core.",
    "cat": "CT",
    "id": "T02A_279"
  },
  {
    "q": "Can you use a fuse on a CT secondary?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "A blown fuse would create an open-circuit, causing the exact destruction you seek to prevent.",
    "cat": "CT",
    "id": "T02A_280"
  },
  {
    "q": "What is the secondary current of a typical CT?",
    "a": "1 A or 5 A",
    "opts": [
      "100 A",
      "1 A or 5 A",
      "10 A",
      "Zero"
    ],
    "exp": "These are the two standard secondary ratings for metering/protection.",
    "cat": "CT",
    "id": "T02A_281"
  },
  {
    "q": "What does a PT measure?",
    "a": "Voltage",
    "opts": [
      "Current",
      "Voltage",
      "Resistance",
      "Power"
    ],
    "exp": "PTs step down high busbar voltage to safe levels for meters.",
    "cat": "PT",
    "id": "T02A_282"
  },
  {
    "q": "Why is a fuse safe for a PT secondary?",
    "a": "Secondary short-circuit is the fault; a fuse isolates it",
    "opts": [
      "A fuse is not safe",
      "Secondary short-circuit is the fault; a fuse isolates it",
      "It prevents over-voltage",
      "It only blows when the voltage is low"
    ],
    "exp": "For a PT, a fault is an over-current/short; the fuse clears it safely.",
    "cat": "PT",
    "id": "T02A_283"
  },
  {
    "q": "What happens if a fuse blows on a PT secondary?",
    "a": "Voltmeter reads zero",
    "opts": [
      "The entire MSB trips",
      "Voltmeter reads zero",
      "The generator trips",
      "High voltage is induced"
    ],
    "exp": "Loss of PT input is a non-destructive state; the meter simply shows no signal.",
    "cat": "PT",
    "id": "T02A_284"
  },
  {
    "q": "Why is a fuse forbidden on CT secondary?",
    "a": "Blown fuse = Open circuit = Lethal voltage",
    "opts": [
      "It is too expensive",
      "Blown fuse = Open circuit = Lethal voltage",
      "CT current is too low",
      "There is no space"
    ],
    "exp": "The fuse acts as a trigger for the destructive open-circuit condition.",
    "cat": "PT",
    "id": "T02A_285"
  },
  {
    "q": "What is preferential trip?",
    "a": "Automatic load shedding to prevent blackout",
    "opts": [
      "Automatic synchronization",
      "Automatic load shedding to prevent blackout",
      "Automatic voltage regulation",
      "Automatic bearing protection"
    ],
    "exp": "It is the last line of defense against the main OCR tripping.",
    "cat": "PREF",
    "id": "T02A_286"
  },
  {
    "q": "Is the steering gear shed by preferential trip?",
    "a": "No, essential services are never shed",
    "opts": [
      "Yes",
      "No, essential services are never shed",
      "Only if it's overloaded",
      "Yes, if in harbor"
    ],
    "exp": "Steering gear is essential; it stays on no matter what.",
    "cat": "PREF",
    "id": "T02A_287"
  },
  {
    "q": "At what load current does the preferential trip typically activate?",
    "a": "~110% of rated",
    "opts": [
      "50% of rated",
      "~110% of rated",
      "200% of rated",
      "1000% of rated"
    ],
    "exp": "It detects the initial onset of overload.",
    "cat": "PREF",
    "id": "T02A_288"
  },
  {
    "q": "What is the typical dashpot delay for preferential trip?",
    "a": "5–10 seconds",
    "opts": [
      "1 second",
      "5–10 seconds",
      "30 seconds",
      "1 hour"
    ],
    "exp": "Allows short spikes (motors starting) to pass.",
    "cat": "PREF",
    "id": "T02A_289"
  },
  {
    "q": "What is the result if preferential trip is ignored?",
    "a": "Main OCR trips and causes blackout",
    "opts": [
      "Generator cools down",
      "Main OCR trips and causes blackout",
      "Nothing",
      "Voltage stabilises"
    ],
    "exp": "The main breaker is the ultimate safety; it protects itself by killing power entirely.",
    "cat": "PREF",
    "id": "T02A_290"
  },
  {
    "q": "What does a megger measure?",
    "a": "Insulation resistance",
    "opts": [
      "Voltage",
      "Insulation resistance",
      "Current",
      "Frequency"
    ],
    "exp": "Megger is a brand name synonym for a high-voltage insulation resistance tester.",
    "cat": "MEG",
    "id": "T02A_291"
  },
  {
    "q": "Why is a megger better than a multimeter?",
    "a": "High voltage stresses weak insulation",
    "opts": [
      "It is smaller",
      "High voltage stresses weak insulation",
      "It is cheaper",
      "It measures current"
    ],
    "exp": "Weak insulation might pass a low-voltage test but break down under operational stress.",
    "cat": "MEG",
    "id": "T02A_292"
  },
  {
    "q": "What resistance range do insulation tests operate in?",
    "a": "MΩ to GΩ",
    "opts": [
      "kΩ to MΩ",
      "MΩ to GΩ",
      "0 to 10 Ω",
      "None"
    ],
    "exp": "Good insulation has extremely high resistance, needing sensitive measurement.",
    "cat": "MEG",
    "id": "T02A_293"
  },
  {
    "q": "Can you use a 500V megger on electronics?",
    "a": "No, it destroys them",
    "opts": [
      "Yes",
      "No, it destroys them",
      "Only for low load",
      "Only with battery"
    ],
    "exp": "Semiconductors like transistors and diodes cannot handle 500V; they will punch through.",
    "cat": "MEG",
    "id": "T02A_294"
  },
  {
    "q": "What does the PI ratio test?",
    "a": "Insulation moisture and quality",
    "opts": [
      "Current leakage",
      "Insulation moisture and quality",
      "Voltage level",
      "Frequency stability"
    ],
    "exp": "It detects the absorption trend over 10 minutes, revealing hidden moisture tracks.",
    "cat": "MEG",
    "id": "T02A_295"
  },
  {
    "q": "What is a Diesel-Electric system?",
    "a": "Generators power motors through frequency converters",
    "opts": [
      "Diesels directly drive propellers",
      "Generators power motors through frequency converters",
      "All electrics powered by batteries",
      "Propulsion via steam"
    ],
    "exp": "It's an electric propulsion system where prime movers are diesels.",
    "cat": "DE",
    "id": "T02A_296"
  },
  {
    "q": "What is an advantage of diesel-electric propulsion?",
    "a": "Fuel economy at partial load",
    "opts": [
      "Higher capital cost",
      "Fuel economy at partial load",
      "Less protection required",
      "Smaller motors"
    ],
    "exp": "By shutting down extra generators, you keep the active ones loaded efficiently.",
    "cat": "DE",
    "id": "T02A_297"
  },
  {
    "q": "Why is diesel-electric good for DP vessels?",
    "a": "Redundancy and flexible power",
    "opts": [
      "No switchboard needed",
      "Redundancy and flexible power",
      "Lower maintenance",
      "Simplified controls"
    ],
    "exp": "Multiple generators provide the redundancy required for Class 2/3 Dynamic Positioning.",
    "cat": "DE",
    "id": "T02A_298"
  },
  {
    "q": "What converters are used in DE systems?",
    "a": "Frequency converters (VFDs)",
    "opts": [
      "Step-up transformers",
      "Frequency converters (VFDs)",
      "Rectifiers only",
      "Inverters only"
    ],
    "exp": "These change AC to DC and back to variable AC for motor speed control.",
    "cat": "DE",
    "id": "T02A_299"
  },
  {
    "q": "Which ships use diesel-electric?",
    "a": "Cruise ships, LNG carriers, DP drillships",
    "opts": [
      "Barges only",
      "Cruise ships, LNG carriers, DP drillships",
      "All cargo ships",
      "Sailing vessels"
    ],
    "exp": "Any vessel needing flexible station-keeping or highly variable load capability.",
    "cat": "DE",
    "id": "T02A_300"
  },
  {
    "q": "What is the primary surveyor expectation for 'What is NER?'?",
    "a": "Neutral Earthing Resistor connects star point to hull to limit fault current to 5-30 A.",
    "opts": [
      "It is a grounding wire",
      "Neutral Earthing Resistor connects star point to hull to limit fault current to 5-30 A.",
      "It is a type of fuse",
      "It is used for shorting CTs"
    ],
    "exp": "Key terms: Star point, hull, limit current, 5-30A.",
    "cat": "QA",
    "id": "T02A_301"
  },
  {
    "q": "How do you explain 'VCB arc quenching'?",
    "a": "Contacts separate in vacuum; metal vapour arc extinguishes at first current zero (10 ms).",
    "opts": [
      "It uses high pressure air",
      "Contacts separate in vacuum; metal vapour arc extinguishes at first current zero (10 ms).",
      "It blows the arc out with oil",
      "It is slower than ACB"
    ],
    "exp": "Key points: Vacuum, first current zero.",
    "cat": "QA",
    "id": "T02A_302"
  },
  {
    "q": "How to answer 'Why HV system?'?",
    "a": "Doubling V halves I → smaller cables, lower losses, smaller windings, economical for >3 MW.",
    "opts": [
      "It increases the frequency",
      "Doubling V halves I → smaller cables, lower losses, smaller windings, economical for >3 MW.",
      "It simplifies the protection",
      "It requires no switchgear"
    ],
    "exp": "The P=IV link is the mathematical core of the justification.",
    "cat": "QA",
    "id": "T02A_303"
  },
  {
    "q": "What is the '14 MSB Safeties' trick?",
    "a": "List as many as possible clearly, focus on the standard 14.",
    "opts": [
      "Just list one",
      "List as many as possible clearly, focus on the standard 14.",
      "Say there are none",
      "List only HV ones"
    ],
    "exp": "Memorising all 14 shows high competence and exam readiness.",
    "cat": "QA",
    "id": "T02A_304"
  },
  {
    "q": "What is the answer for HV gloves?",
    "a": "Class 2 (Yellow) for 6.6 kV; Class 3 (Green) for 11 kV. 6-monthly test.",
    "opts": [
      "Use any glove",
      "Class 2 (Yellow) for 6.6 kV; Class 3 (Green) for 11 kV. 6-monthly test.",
      "Every 5 years",
      "No gloves needed"
    ],
    "exp": "Correct class/colour matching is the key differentiator.",
    "cat": "QA",
    "id": "T02A_305"
  },
  {
    "q": "How do you answer 'Why PT has fuse and CT does not'?",
    "a": "PT short = fault (needs fuse); CT open = high-voltage destruction (forbidden).",
    "opts": [
      "PT needs fuse because of voltage",
      "PT short = fault (needs fuse); CT open = high-voltage destruction (forbidden).",
      "CT needs fuse because of current",
      "They are the same"
    ],
    "exp": "Simple logic linking PT behavior (over-current fault) to CT behavior (voltage spike fault).",
    "cat": "QA",
    "id": "T02A_306"
  },
  {
    "q": "What is the answer for 'What is a dead front panel'?",
    "a": "No live parts accessible from front during operation; all enclosed by barriers.",
    "opts": [
      "A broken panel",
      "No live parts accessible from front during operation; all enclosed by barriers.",
      "An LV panel only",
      "Any panel with doors"
    ],
    "exp": "Key points: Live parts enclosed, safe operating interface.",
    "cat": "QA",
    "id": "T02A_307"
  },
  {
    "q": "What to do post-SF6 arc?",
    "a": "Forced ventilation (30 min), SCBA, chemical gloves, neutralize with Ca(OH)₂.",
    "opts": [
      "Clean with water",
      "Forced ventilation (30 min), SCBA, chemical gloves, neutralize with Ca(OH)₂.",
      "Just enter and work",
      "Sweep with a broom"
    ],
    "exp": "Ensuring safety from toxic fluoride by-products is non-negotiable.",
    "cat": "QA",
    "id": "T02A_308"
  },
  {
    "q": "What is the 200% IR rule?",
    "a": "After repair, IR must be double the minimum.",
    "opts": [
      "Double the voltage",
      "After repair, IR must be double the minimum.",
      "Double the time",
      "None"
    ],
    "exp": "Ensuring a safety margin after overhaul.",
    "cat": "QA",
    "id": "T02A_309"
  },
  {
    "q": "Why 5 minutes for discharge?",
    "a": "Capacitive charge storage in HV cables",
    "opts": [
      "To cool the machine",
      "Capacitive charge storage in HV cables",
      "To verify frequency",
      "To check for leaks"
    ],
    "exp": "HV cables hold lethal energy even when isolated.",
    "cat": "QA",
    "id": "T02A_310"
  },
  {
    "q": "How to answer 'Why not floating HV?'?",
    "a": "Voltage rise to line voltage on healthy phases, ferroresonance risks.",
    "opts": [
      "It is too expensive",
      "Voltage rise to line voltage on healthy phases, ferroresonance risks.",
      "It uses too much copper",
      "It needs too many relays"
    ],
    "exp": "Explaining the voltage stress/oscillatory issues is high-scoring.",
    "cat": "QA",
    "id": "T02A_311"
  },
  {
    "q": "Which is more common: 3.3 kV or 6.6 kV?",
    "a": "6.6 kV",
    "opts": [
      "3.3 kV",
      "6.6 kV",
      "11 kV",
      "440 V"
    ],
    "exp": "6.6 kV is the industry standard for most HV vessels.",
    "cat": "QA",
    "id": "T02A_312"
  },
  {
    "q": "Why use stranded cables?",
    "a": "Mitigate skin effect",
    "opts": [
      "Easier to pull",
      "Mitigate skin effect",
      "Cheaper",
      "Heavier"
    ],
    "exp": "Strands increase surface area, reducing the resistive losses from current crowding.",
    "cat": "QA",
    "id": "T02A_313"
  },
  {
    "q": "What is corona?",
    "a": "Ionisation of air at high voltage",
    "opts": [
      "An insulation type",
      "Ionisation of air at high voltage",
      "A magnetic effect",
      "A fault condition"
    ],
    "exp": "Air becomes conductive at field intensities > 30 kV/cm.",
    "cat": "QA",
    "id": "T02A_314"
  },
  {
    "q": "What is the function of the IRM?",
    "a": "Continuously monitor for insulation breaches in IT system",
    "opts": [
      "Trip the breaker",
      "Continuously monitor for insulation breaches in IT system",
      "Check the temperature",
      "Calculate the load"
    ],
    "exp": "Early warning of degradation before a second fault happens.",
    "cat": "QA",
    "id": "T02A_315"
  },
  {
    "q": "What is HV justification?",
    "a": "Demand > 3–5 MW",
    "opts": [
      "Any ship",
      "Demand > 3–5 MW",
      "Only if diesel-electric",
      "None"
    ],
    "exp": "It is an economic decision based on power volume.",
    "cat": "QUICK",
    "id": "T02A_316"
  },
  {
    "q": "What is the VCB quench time?",
    "a": "10 ms (first zero)",
    "opts": [
      "1 ms",
      "10 ms (first zero)",
      "1 s",
      "5 s"
    ],
    "exp": "Extremely fast compared to ACBs.",
    "cat": "QUICK",
    "id": "T02A_317"
  },
  {
    "q": "What is the NER limit?",
    "a": "5–30 A",
    "opts": [
      "1 A",
      "5–30 A",
      "100 A",
      "1000 A"
    ],
    "exp": "A small enough fault to prevent damage, but large enough for the relay to see it.",
    "cat": "QUICK",
    "id": "T02A_318"
  },
  {
    "q": "What PPE for arc flash?",
    "a": "Arc-rated suit, shield, gloves",
    "opts": [
      "Normal coveralls",
      "Arc-rated suit, shield, gloves",
      "Raincoat",
      "None"
    ],
    "exp": "Full coverage against intense heat/light/pressure.",
    "cat": "QUICK",
    "id": "T02A_319"
  },
  {
    "q": "What are SF6 arc products?",
    "a": "HF, SOF₂, toxic fluorides",
    "opts": [
      "Only Oxygen",
      "HF, SOF₂, toxic fluorides",
      "Clean air",
      "Water vapour"
    ],
    "exp": "These gases are dangerous to health.",
    "cat": "QUICK",
    "id": "T02A_320"
  },
  {
    "q": "What is the minimum IR?",
    "a": "kV + 1",
    "opts": [
      "1 MΩ",
      "kV + 1",
      "10 MΩ",
      "Infinity"
    ],
    "exp": "IEC rule for minimal insulation standards.",
    "cat": "QUICK",
    "id": "T02A_321"
  },
  {
    "q": "What is the 200% rule?",
    "a": "Return-to-service IR threshold",
    "opts": [
      "Current limit",
      "Return-to-service IR threshold",
      "Voltage limit",
      "Wait time"
    ],
    "exp": "Post-repair IR must double the minimum acceptable value.",
    "cat": "QUICK",
    "id": "T02A_322"
  },
  {
    "q": "What is the IRM alarm threshold?",
    "a": "50–100 kΩ",
    "opts": [
      "1–5 MΩ",
      "50–100 kΩ",
      "0 Ω",
      "1000 kΩ"
    ],
    "exp": "Below this, the system is leaking too much to be considered safe.",
    "cat": "QUICK",
    "id": "T02A_323"
  },
  {
    "q": "Which zone is cargo tank?",
    "a": "Zone 0",
    "opts": [
      "Zone 1",
      "Zone 0",
      "Zone 2",
      "Safe zone"
    ],
    "exp": "Highest hazard continuous atmosphere.",
    "cat": "QUICK",
    "id": "T02A_324"
  },
  {
    "q": "What is the shaft earthing resistance?",
    "a": "< 1 Ω",
    "opts": [
      "< 10 Ω",
      "< 1 Ω",
      "> 1 kΩ",
      "> 1 MΩ"
    ],
    "exp": "The connection must be essentially a dead short to hull.",
    "cat": "QUICK",
    "id": "T02A_325"
  },
  {
    "q": "What is the HVSC pilot loop trip time?",
    "a": "200 ms",
    "opts": [
      "10 ms",
      "200 ms",
      "1 s",
      "5 s"
    ],
    "exp": "Fast enough to prevent any plug-pulling arc.",
    "cat": "QUICK",
    "id": "T02A_326"
  },
  {
    "q": "What creates skin effect?",
    "a": "Eddy currents",
    "opts": [
      "Resistance",
      "Eddy currents",
      "Voltage",
      "Frequency"
    ],
    "exp": "Inductive effect in the conductor pushes current to the surface.",
    "cat": "QUICK",
    "id": "T02A_327"
  },
  {
    "q": "What is the Corona onset field?",
    "a": "30 kV/cm",
    "opts": [
      "10 kV/cm",
      "30 kV/cm",
      "66 kV/cm",
      "100 kV/cm"
    ],
    "exp": "The dielectric limit of air.",
    "cat": "QUICK",
    "id": "T02A_328"
  },
  {
    "q": "Why no fuse on CT?",
    "a": "Blown fuse causes open secondary = destruction",
    "opts": [
      "It saves money",
      "Blown fuse causes open secondary = destruction",
      "It is easier to install",
      "Fuses are too big"
    ],
    "exp": "A blown fuse creates the very open-circuit hazard we must avoid.",
    "cat": "QUICK",
    "id": "T02A_329"
  },
  {
    "q": "What is the preferential trip limit?",
    "a": "110% overload",
    "opts": [
      "105% overload",
      "110% overload",
      "150% overload",
      "200% overload"
    ],
    "exp": "The system monitors for sustained overload to save the busbar.",
    "cat": "QUICK",
    "id": "T02A_330"
  },
  {
    "q": "What is the purpose of HVSC?",
    "a": "Shore-to-ship connection to shut down DGs in port",
    "opts": [
      "To charge batteries",
      "Shore-to-ship connection to shut down DGs in port",
      "To sync the generators",
      "To power the main propulsion"
    ],
    "exp": "Cold ironing reduces ship exhaust in port.",
    "cat": "QUICK",
    "id": "T02A_331"
  },
  {
    "q": "What happens if a brush-type shaft earthing fails?",
    "a": "Bearing failure",
    "opts": [
      "Propeller fall off",
      "Bearing failure",
      "Hull rust",
      "Frequency drop"
    ],
    "exp": "Unchecked stray currents destroy bearing surfaces via pitting.",
    "cat": "QUICK",
    "id": "T02A_332"
  },
  {
    "q": "Which is more conductive: conductive or non-conductive hose?",
    "a": "Conductive",
    "opts": [
      "Non-conductive",
      "Conductive",
      "They are the same",
      "None"
    ],
    "exp": "Conductive hose contains bonding elements to drain static.",
    "cat": "QUICK",
    "id": "T02A_333"
  },
  {
    "q": "Does SF6 have an atmospheric lifetime?",
    "a": "Yes, 3200 years",
    "opts": [
      "No, it dissolves",
      "Yes, 3200 years",
      "Only 1 year",
      "Only 100 years"
    ],
    "exp": "It is effectively a permanent environmental contaminant.",
    "cat": "QUICK",
    "id": "T02A_334"
  },
  {
    "q": "Can you enter an SF6 enclosure after an arc event?",
    "a": "Only after ventilation, SCBA, and chem suit",
    "opts": [
      "Yes, immediately",
      "Only after ventilation, SCBA, and chem suit",
      "Yes, if you hold your breath",
      "Only after 5 minutes"
    ],
    "exp": "Safety first: air exchange and PPE protect from toxic fumes.",
    "cat": "QUICK",
    "id": "T02A_335"
  },
  {
    "q": "Which class is Class 0 glove?",
    "a": "Red",
    "opts": [
      "Yellow",
      "Red",
      "Green",
      "Orange"
    ],
    "exp": "Class 0 is red (1 kV rating).",
    "cat": "QUICK",
    "id": "T02A_336"
  },
  {
    "q": "Which class is Class 00 glove?",
    "a": "Beige",
    "opts": [
      "Beige",
      "Red",
      "Yellow",
      "Orange"
    ],
    "exp": "Class 00 is beige (500 V rating).",
    "cat": "QUICK",
    "id": "T02A_337"
  },
  {
    "q": "Is the MSB room an essential space?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only if it's HV",
      "Only if it's LV"
    ],
    "exp": "It is critical for ship operation and requires emergency lighting.",
    "cat": "QUICK",
    "id": "T02A_338"
  },
  {
    "q": "What is a major advantage of diesel-electric propulsion regarding redundancy?",
    "a": "Multiple independent generator sets",
    "opts": [
      "Single engine drive",
      "Multiple independent generator sets",
      "No generator required",
      "Batteries only"
    ],
    "exp": "If one generator fails, others remain to power the ship.",
    "cat": "QUICK",
    "id": "T02A_339"
  },
  {
    "q": "Does diesel-electric have shaft line?",
    "a": "No mechanical shaft line",
    "opts": [
      "Yes",
      "No mechanical shaft line",
      "Only a short one",
      "Yes, if it's Azipod"
    ],
    "exp": "Energy is transferred purely electrically to motors near the propeller.",
    "cat": "QUICK",
    "id": "T02A_340"
  },
  {
    "q": "What indicates corona?",
    "a": "Hissing noise and blue glow",
    "opts": [
      "Vibration",
      "Hissing noise and blue glow",
      "Temperature rise",
      "Current rise"
    ],
    "exp": "Audible/visual cues are key diagnostics.",
    "cat": "QUICK",
    "id": "T02A_341"
  },
  {
    "q": "What is the IEC for HV?",
    "a": "60092",
    "opts": [
      "80005",
      "60092",
      "1000",
      "None"
    ],
    "exp": "IEC 60092 standardises shipboard electrical installations.",
    "cat": "QUICK",
    "id": "T02A_342"
  },
  {
    "q": "What protects the PT secondary?",
    "a": "A fuse",
    "opts": [
      "An OCR",
      "A fuse",
      "An NER",
      "Nothing"
    ],
    "exp": "A simple fuse safely clears a secondary short circuit.",
    "cat": "QUICK",
    "id": "T02A_343"
  },
  {
    "q": "What happens if you use 500V megger on 6.6 kV?",
    "a": "Insufficent stress to reveal weak insulation",
    "opts": [
      "Instant burnout",
      "Insufficent stress to reveal weak insulation",
      "It is correct",
      "It is too high"
    ],
    "exp": "Voltage stress is too low to prove HV insulation strength.",
    "cat": "QUICK",
    "id": "T02A_344"
  },
  {
    "q": "Are rubber mats required?",
    "a": "Yes, front and rear of MSB",
    "opts": [
      "No",
      "Yes, front and rear of MSB",
      "Only if it is cold",
      "Only at night"
    ],
    "exp": "Front and rear coverage is required to prevent accidental shock during maintenance.",
    "cat": "QUICK",
    "id": "T02A_345"
  },
  {
    "q": "What is the purpose of the Earth bus?",
    "a": "Common hull potential bonding",
    "opts": [
      "Busbar cooling",
      "Common hull potential bonding",
      "Signal return",
      "Shielding only"
    ],
    "exp": "Everything must be at the same potential (hull) to avoid shock hazards.",
    "cat": "QUICK",
    "id": "T02A_346"
  },
  {
    "q": "How does VCB quench the arc?",
    "a": "Vacuum",
    "opts": [
      "Air",
      "Vacuum",
      "Oil",
      "SF6"
    ],
    "exp": "Vacuum bottle contacts open in space where ionisation is impossible.",
    "cat": "QUICK",
    "id": "T02A_347"
  },
  {
    "q": "What is the minimum voltage for HV?",
    "a": "1000 V",
    "opts": [
      "440 V",
      "1000 V",
      "6600 V",
      "11000 V"
    ],
    "exp": "Standard definition per IEC.",
    "cat": "QUICK",
    "id": "T02A_348"
  },
  {
    "q": "Is LV floating?",
    "a": "Yes, standard for shipboard IT systems",
    "opts": [
      "No",
      "Yes, standard for shipboard IT systems",
      "Only for tankers",
      "Only in port"
    ],
    "exp": "Floating (Insulated Neutral) is standard for safety.",
    "cat": "QUICK",
    "id": "T02A_349"
  },
  {
    "q": "What is the 3+3 rule?",
    "a": "Emergency starts rule",
    "opts": [
      "Rubber gloves rule",
      "Emergency starts rule",
      "MSB clearance",
      "PTW stages"
    ],
    "exp": "Refers to the two independent starting methods for emergency generators.",
    "cat": "QUICK",
    "id": "T02A_350"
  },
  {
    "q": "Does SF6 have an odour?",
    "a": "No, it is odourless",
    "opts": [
      "Yes, strong",
      "No, it is odourless",
      "Only when arced",
      "Only when leaked"
    ],
    "exp": "Pure gas has no sensory detection.",
    "cat": "QUICK",
    "id": "T02A_351"
  },
  {
    "q": "Can IRM tell you where the fault is?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only on HV",
      "Only on LV"
    ],
    "exp": "It only monitors the total system leakage.",
    "cat": "QUICK",
    "id": "T02A_352"
  },
  {
    "q": "Are capacitors used on tankers?",
    "a": "Yes, for PF correction",
    "opts": [
      "No",
      "Yes, for PF correction",
      "Only in cargo tanks",
      "Only for HVSC"
    ],
    "exp": "Correction reduces current and heating, making it widely applied.",
    "cat": "QUICK",
    "id": "T02A_353"
  },
  {
    "q": "What is the typical setting for a preferental trip delay?",
    "a": "5-10 seconds",
    "opts": [
      "1 second",
      "5-10 seconds",
      "1 minute",
      "10 minutes"
    ],
    "exp": "Allows temporary starting spikes to finish.",
    "cat": "QUICK",
    "id": "T02A_354"
  },
  {
    "q": "Are CTs short-circuited when testing?",
    "a": "Yes, always",
    "opts": [
      "No",
      "Yes, always",
      "Only if they are old",
      "Only for HV"
    ],
    "exp": "To prevent lethal induced voltage.",
    "cat": "QUICK",
    "id": "T02A_355"
  },
  {
    "q": "Is 6.6 kV an HV system?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in tankers",
      "Only in cruise"
    ],
    "exp": "Well above the 1000V limit.",
    "cat": "QUICK",
    "id": "T02A_356"
  },
  {
    "q": "What is the purpose of phase barriers in the MSB?",
    "a": "Prevent phase-to-phase flashover",
    "opts": [
      "Increase space",
      "Prevent phase-to-phase flashover",
      "Cool the phases",
      "Measure current"
    ],
    "exp": "If insulation fails on one phase, the barrier prevents it shorting to neighbors.",
    "cat": "QUICK",
    "id": "T02A_357"
  },
  {
    "q": "What is the primary danger of a dead-front panel door open?",
    "a": "Access to live busbars",
    "opts": [
      "The door falling off",
      "Access to live busbars",
      "Loss of light",
      "Loss of voltage"
    ],
    "exp": "You expose parts that are normally hidden and safe.",
    "cat": "QUICK",
    "id": "T02A_358"
  },
  {
    "q": "Is the IRM continuous?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only when tested",
      "Only at night"
    ],
    "exp": "It must always be on to provide instant alarm.",
    "cat": "QUICK",
    "id": "T02A_359"
  },
  {
    "q": "Why is the NER connection to neutral important?",
    "a": "Fixed potential reference",
    "opts": [
      "Voltage boost",
      "Fixed potential reference",
      "Current boost",
      "Power factor fix"
    ],
    "exp": "Provides the zero-point stability for the HV system.",
    "cat": "QUICK",
    "id": "T02A_360"
  },
  {
    "q": "How does VCB handle first zero crossing?",
    "a": "Arc extinguished",
    "opts": [
      "Arc gets larger",
      "Arc extinguished",
      "Voltage jumps",
      "Vacuum disappears"
    ],
    "exp": "The natural zero current point is where the arc dies in the vacuum.",
    "cat": "QUICK",
    "id": "T02A_361"
  },
  {
    "q": "Are HV gloves for LV use?",
    "a": "Yes, but they may be bulkier/unnecessary",
    "opts": [
      "No",
      "Yes, but they may be bulkier/unnecessary",
      "Only in emergencies",
      "Only for Class 00"
    ],
    "exp": "A Class 2 glove safely insulates against 440V, but is overkill for the task.",
    "cat": "QUICK",
    "id": "T02A_362"
  },
  {
    "q": "What is the purpose of the pilot loop?",
    "a": "Continuity of connection monitoring",
    "opts": [
      "Check voltage",
      "Continuity of connection monitoring",
      "Check load",
      "Check frequency"
    ],
    "exp": "Ensures the shore cable is plugged in and intact.",
    "cat": "QUICK",
    "id": "T02A_363"
  },
  {
    "q": "Why does corona occur?",
    "a": "Electric field > 30 kV/cm",
    "opts": [
      "High current",
      "Electric field > 30 kV/cm",
      "Low frequency",
      "High power"
    ],
    "exp": "Field strength in the air exceeds dielectric strength.",
    "cat": "QUICK",
    "id": "T02A_364"
  },
  {
    "q": "Is the MSB room essential space?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for tanker",
      "Only if manned"
    ],
    "exp": "It is critical infrastructure.",
    "cat": "QUICK",
    "id": "T02A_365"
  },
  {
    "q": "What is the standard megger voltage for 440V machines?",
    "a": "500 V",
    "opts": [
      "100 V",
      "500 V",
      "1000 V",
      "2500 V"
    ],
    "exp": "Industry baseline for standard LV motors/machines.",
    "cat": "QUICK",
    "id": "T02A_366"
  },
  {
    "q": "What is the maximum transient voltage dip allowed?",
    "a": "20%",
    "opts": [
      "5%",
      "20%",
      "50%",
      "10%"
    ],
    "exp": "SOLAS permits a temporary dip to 80% (i.e. a 20% dip).",
    "cat": "QUICK",
    "id": "T02A_367"
  },
  {
    "q": "How does VCB quench current?",
    "a": "Vacuum",
    "opts": [
      "Air",
      "Vacuum",
      "SF6",
      "Oil"
    ],
    "exp": "Vacuum is the quench agent.",
    "cat": "QUICK",
    "id": "T02A_368"
  },
  {
    "q": "Which is more conductive?",
    "a": "Copper busbars",
    "opts": [
      "Rubber",
      "Copper busbars",
      "Air",
      "Ceramic"
    ],
    "exp": "Copper carries the current.",
    "cat": "QUICK",
    "id": "T02A_369"
  },
  {
    "q": "What is the primary function of the IRM?",
    "a": "Alarm for earth fault",
    "opts": [
      "Trip the generator",
      "Alarm for earth fault",
      "Monitor voltage",
      "Check current"
    ],
    "exp": "It is a supervisory, not a protection, relay.",
    "cat": "QUICK",
    "id": "T02A_370"
  },
  {
    "q": "Can you enter SF6 space before ventilation?",
    "a": "No, it is toxic",
    "opts": [
      "Yes",
      "No, it is toxic",
      "Only for a second",
      "Yes, if wearing goggles"
    ],
    "exp": "Toxic products require clearance through air exchange.",
    "cat": "QUICK",
    "id": "T02A_371"
  },
  {
    "q": "How many safeties are there?",
    "a": "14",
    "opts": [
      "5",
      "14",
      "20",
      "2"
    ],
    "exp": "Standard 14-point safety list.",
    "cat": "QUICK",
    "id": "T02A_372"
  },
  {
    "q": "Which is an example of Zone 1?",
    "a": "Pump rooms",
    "opts": [
      "Bridge",
      "Pump rooms",
      "Inside cargo tank",
      "Engine room"
    ],
    "exp": "Pump rooms have high fume risk.",
    "cat": "QUICK",
    "id": "T02A_373"
  },
  {
    "q": "Why is the shaft earthed?",
    "a": "To avoid bearing corrosion",
    "opts": [
      "To measure speed",
      "To avoid bearing corrosion",
      "To boost voltage",
      "To cool the oil"
    ],
    "exp": "Electrolytic pitting protection.",
    "cat": "QUICK",
    "id": "T02A_374"
  },
  {
    "q": "What is the IEC for SC?",
    "a": "80005-1",
    "opts": [
      "60092",
      "80005-1",
      "60034",
      "1000"
    ],
    "exp": "Shore Connection standard.",
    "cat": "QUICK",
    "id": "T02A_375"
  },
  {
    "q": "Does SF6 have a colour?",
    "a": "No",
    "opts": [
      "Yes, blue",
      "No",
      "Yes, green",
      "Yes, orange"
    ],
    "exp": "It's an invisible gas.",
    "cat": "QUICK",
    "id": "T02A_376"
  },
  {
    "q": "Is the MSB an essential space?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for tanker",
      "Only if HV"
    ],
    "exp": "Core ship safety requirement.",
    "cat": "QUICK",
    "id": "T02A_377"
  },
  {
    "q": "Are there fuses in a PT?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for LV",
      "Only for HV"
    ],
    "exp": "PTs are protected by fuses.",
    "cat": "QUICK",
    "id": "T02A_378"
  },
  {
    "q": "Are there fuses in a CT?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "CT secondary fuses are dangerous.",
    "cat": "QUICK",
    "id": "T02A_379"
  },
  {
    "q": "Is HV dangerous?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only if arcing",
      "Only in cargo tank"
    ],
    "exp": "It requires the strictest safety protocols.",
    "cat": "QUICK",
    "id": "T02A_380"
  },
  {
    "q": "What is a major advantage of HV systems?",
    "a": "Lower current",
    "opts": [
      "Higher current",
      "Lower current",
      "Simpler protection",
      "Lower cost"
    ],
    "exp": "Low current is the root benefit.",
    "cat": "QUICK",
    "id": "T02A_381"
  },
  {
    "q": "How do you test VCB vacuum?",
    "a": "High voltage test",
    "opts": [
      "Megger test",
      "High voltage test",
      "Visual test",
      "Timing test"
    ],
    "exp": "Electrical breakdown in the bottle proves the vacuum is gone.",
    "cat": "QUICK",
    "id": "T02A_382"
  },
  {
    "q": "What is the minimum IR for 6.6 kV?",
    "a": "7.6 MΩ",
    "opts": [
      "1 MΩ",
      "7.6 MΩ",
      "10 MΩ",
      "0.1 MΩ"
    ],
    "exp": "6.6 + 1 = 7.6 MΩ.",
    "cat": "QUICK",
    "id": "T02A_383"
  },
  {
    "q": "Are rubber mats required?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for guests",
      "Only if carpeted"
    ],
    "exp": "Mandatory safety floor covering.",
    "cat": "QUICK",
    "id": "T02A_384"
  },
  {
    "q": "What creates the magnetic field in an alternator?",
    "a": "Rotor",
    "opts": [
      "Stator",
      "Rotor",
      "AVR",
      "PMG"
    ],
    "exp": "DC in the rotor creates the rotating field.",
    "cat": "QUICK",
    "id": "T02A_385"
  },
  {
    "q": "Does SF6 absorb electrons?",
    "a": "Yes (electronegative)",
    "opts": [
      "No",
      "Yes (electronegative)",
      "It loses them",
      "It makes heat"
    ],
    "exp": "This is why it quenches arcs so well.",
    "cat": "QUICK",
    "id": "T02A_386"
  },
  {
    "q": "Can you use 500V megger on electronics?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only for HV",
      "Only for testing"
    ],
    "exp": "Never; it ruins control cards.",
    "cat": "QUICK",
    "id": "T02A_387"
  },
  {
    "q": "Is the MSB room a fire hazard zone?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in port",
      "Only at sea"
    ],
    "exp": "Electrical cabinets are a known fire starting point.",
    "cat": "QUICK",
    "id": "T02A_388"
  },
  {
    "q": "What happens if you open a CT secondary?",
    "a": "Lethal voltage",
    "opts": [
      "Nothing",
      "Lethal voltage",
      "Overcurrent trip",
      "Undercurrent trip"
    ],
    "exp": "Dangerous induced voltage.",
    "cat": "QUICK",
    "id": "T02A_389"
  },
  {
    "q": "Does the IRM monitor phase-to-phase?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "It monitors leakage to ground.",
    "cat": "QUICK",
    "id": "T02A_390"
  },
  {
    "q": "What colour are Class 1 gloves?",
    "a": "White",
    "opts": [
      "Yellow",
      "White",
      "Green",
      "Orange"
    ],
    "exp": "Class 1 gloves are white.",
    "cat": "QUICK",
    "id": "T02A_391"
  },
  {
    "q": "Why is the pilot loop important?",
    "a": "Prevents live plug pulls",
    "opts": [
      "Measures voltage",
      "Prevents live plug pulls",
      "Increases power",
      "Saves fuel"
    ],
    "exp": "Ensures the connection is physically secure before/during HV flow.",
    "cat": "QUICK",
    "id": "T02A_392"
  },
  {
    "q": "What is the return-to-service IR rule?",
    "a": "200% of minimum",
    "opts": [
      "50% of minimum",
      "200% of minimum",
      "10% of minimum",
      "None"
    ],
    "exp": "Safety margin required.",
    "cat": "QUICK",
    "id": "T02A_393"
  },
  {
    "q": "Is the VCB mechanism lubricant important?",
    "a": "Yes, timing depends on it",
    "opts": [
      "No",
      "Yes, timing depends on it",
      "Only for cooling",
      "Only for visual"
    ],
    "exp": "Mechanical timing is critical for breaker safety.",
    "cat": "QUICK",
    "id": "T02A_394"
  },
  {
    "q": "Are HV gloves for LV use?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for shore",
      "Only in cargo tank"
    ],
    "exp": "They protect against both voltages effectively.",
    "cat": "QUICK",
    "id": "T02A_395"
  },
  {
    "q": "What is the purpose of the Earth busbar?",
    "a": "Bonding for safety",
    "opts": [
      "To ground the signal",
      "Bonding for safety",
      "To increase voltage",
      "To carry power"
    ],
    "exp": "Maintains a safe equipotential plane.",
    "cat": "QUICK",
    "id": "T02A_396"
  },
  {
    "q": "What does a VCB quench?",
    "a": "The arc",
    "opts": [
      "The current",
      "The arc",
      "The voltage",
      "The gas"
    ],
    "exp": "The arc is the hazard to be terminated.",
    "cat": "QUICK",
    "id": "T02A_397"
  },
  {
    "q": "What is the limit for LV touch voltage?",
    "a": "50 V AC",
    "opts": [
      "100 V AC",
      "50 V AC",
      "440 V AC",
      "None"
    ],
    "exp": "Standard safety limit.",
    "cat": "QUICK",
    "id": "T02A_398"
  },
  {
    "q": "Is the system floating if an NER is present?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only when arcing",
      "Only on weekends"
    ],
    "exp": "NER connects it to earth, making it grounded-neutral.",
    "cat": "QUICK",
    "id": "T02A_399"
  },
  {
    "q": "Why 5 minutes for discharge?",
    "a": "Capacitive charge",
    "opts": [
      "Inductive charge",
      "Capacitive charge",
      "Static charge",
      "None"
    ],
    "exp": "Stored energy in the line needs time to bleed away.",
    "cat": "QUICK",
    "id": "T02A_400"
  },
  {
    "q": "Why is the VCB maintenance low?",
    "a": "Sealed unit",
    "opts": [
      "Uses air",
      "Sealed unit",
      "No switchgear",
      "No protection"
    ],
    "exp": "Hermetic seal keeps out dirt and prevents internal wear.",
    "cat": "QUICK",
    "id": "T02A_401"
  },
  {
    "q": "What is the voltage of HV systems?",
    "a": "Above 1000 V",
    "opts": [
      "Below 1000 V",
      "Above 1000 V",
      "Only 6.6 kV",
      "Only 11 kV"
    ],
    "exp": "Official threshold.",
    "cat": "QUICK",
    "id": "T02A_402"
  },
  {
    "q": "Is the MSB room a fire risk?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Never",
      "Depends on season"
    ],
    "exp": "Electrical arcs provide high energy ignition sources.",
    "cat": "QUICK",
    "id": "T02A_403"
  },
  {
    "q": "What is the function of the CT?",
    "a": "Step down current for meters",
    "opts": [
      "Measure voltage",
      "Step down current for meters",
      "Step down voltage",
      "Step up voltage"
    ],
    "exp": "Converts primary Amps to secondary Amps.",
    "cat": "QUICK",
    "id": "T02A_404"
  },
  {
    "q": "What is the IRM doing?",
    "a": "Continuous monitoring",
    "opts": [
      "Tripping the system",
      "Continuous monitoring",
      "Powering the lights",
      "Charging batteries"
    ],
    "exp": "Always on, always watching.",
    "cat": "QUICK",
    "id": "T02A_405"
  },
  {
    "q": "Can you enter SF6 space before ventilation?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Sometimes",
      "If you hurry"
    ],
    "exp": "Ventilation is the first mandatory safety action.",
    "cat": "QUICK",
    "id": "T02A_406"
  },
  {
    "q": "How many safeties?",
    "a": "14",
    "opts": [
      "5",
      "14",
      "10",
      "4"
    ],
    "exp": "Standard 14 list.",
    "cat": "QUICK",
    "id": "T02A_407"
  },
  {
    "q": "Which is Zone 0?",
    "a": "Cargo tanks",
    "opts": [
      "Bridge",
      "Cargo tanks",
      "Engine room",
      "Accommodation"
    ],
    "exp": "Where the oil lives.",
    "cat": "QUICK",
    "id": "T02A_408"
  },
  {
    "q": "Why is shaft earthing done?",
    "a": "Avoid electrolytic pitting",
    "opts": [
      "Improve speed",
      "Avoid electrolytic pitting",
      "Reduce noise",
      "Measure resistance"
    ],
    "exp": "Bearing safety from stray currents.",
    "cat": "QUICK",
    "id": "T02A_409"
  },
  {
    "q": "What is IEC 80005-1?",
    "a": "HV shore connection",
    "opts": [
      "Switchgear design",
      "HV shore connection",
      "Rubber glove test",
      "Cable sizing"
    ],
    "exp": "Standard for ship-to-shore power.",
    "cat": "QUICK",
    "id": "T02A_410"
  },
  {
    "q": "Is SF6 coloured?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only blue",
      "Only green"
    ],
    "exp": "Invisible gas.",
    "cat": "QUICK",
    "id": "T02A_411"
  },
  {
    "q": "Is MSB essential space?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Maybe",
      "Never"
    ],
    "exp": "Ship cannot run without power.",
    "cat": "QUICK",
    "id": "T02A_412"
  },
  {
    "q": "Why PT has fuse?",
    "a": "Protects against short-circuited PT",
    "opts": [
      "Protects the generator",
      "Protects against short-circuited PT",
      "Protects against overvoltage",
      "None"
    ],
    "exp": "Clears a secondary fault.",
    "cat": "QUICK",
    "id": "T02A_413"
  },
  {
    "q": "What happens if 500V megger used on HV?",
    "a": "Insufficient stress",
    "opts": [
      "Dangerous",
      "Insufficient stress",
      "Overcurrent trip",
      "Overvoltage trip"
    ],
    "exp": "Won't reliably test HV insulation strength.",
    "cat": "QUICK",
    "id": "T02A_414"
  },
  {
    "q": "Are mats required?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "Safety requirement.",
    "cat": "QUICK",
    "id": "T02A_415"
  },
  {
    "q": "Who makes the magnetic field?",
    "a": "Rotor",
    "opts": [
      "Stator",
      "Rotor",
      "Exciter",
      "AVR"
    ],
    "exp": "The rotating field source.",
    "cat": "QUICK",
    "id": "T02A_416"
  },
  {
    "q": "Is SF6 electronegative?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Sometimes",
      "Only with gas"
    ],
    "exp": "It attracts electrons, quenching the arc.",
    "cat": "QUICK",
    "id": "T02A_417"
  },
  {
    "q": "Can 500V megger break electronics?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only HV",
      "Only LV"
    ],
    "exp": "Semiconductor failure is instantaneous.",
    "cat": "QUICK",
    "id": "T02A_418"
  },
  {
    "q": "Fire risk in MSB?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Never",
      "Only when open"
    ],
    "exp": "Common electrical room danger.",
    "cat": "QUICK",
    "id": "T02A_419"
  },
  {
    "q": "What happens on open CT?",
    "a": "Lethal voltage",
    "opts": [
      "Zero amps",
      "Lethal voltage",
      "Voltage drop",
      "Power surge"
    ],
    "exp": "Extreme safety hazard.",
    "cat": "QUICK",
    "id": "T02A_420"
  },
  {
    "q": "IRM phase monitoring?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only HV",
      "Only LV"
    ],
    "exp": "It is a global system leakage monitor.",
    "cat": "QUICK",
    "id": "T02A_421"
  },
  {
    "q": "Class 1 glove colour?",
    "a": "White",
    "opts": [
      "White",
      "Yellow",
      "Green",
      "Orange"
    ],
    "exp": "Standard class identification.",
    "cat": "QUICK",
    "id": "T02A_422"
  },
  {
    "q": "Pilot loop trip?",
    "a": "Yes, live pull protection",
    "opts": [
      "No",
      "Yes, live pull protection",
      "Only for shore",
      "Only for ship"
    ],
    "exp": "Safety interlock prevents pulling a loaded plug.",
    "cat": "QUICK",
    "id": "T02A_423"
  },
  {
    "q": "Return to service IR?",
    "a": "200% of minimum",
    "opts": [
      "100% of minimum",
      "200% of minimum",
      "50%",
      "None"
    ],
    "exp": "The 200% rule applies post-repair.",
    "cat": "QUICK",
    "id": "T02A_424"
  },
  {
    "q": "Is lubricant important?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in summer",
      "Only in winter"
    ],
    "exp": "Critical for reliable mechanical operation.",
    "cat": "QUICK",
    "id": "T02A_425"
  },
  {
    "q": "Are HV gloves for LV use?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in port",
      "Only on tanker"
    ],
    "exp": "They insulate perfectly well at LV.",
    "cat": "QUICK",
    "id": "T02A_426"
  },
  {
    "q": "Earth bus purpose?",
    "a": "Bonding",
    "opts": [
      "Cooling",
      "Bonding",
      "Switching",
      "None"
    ],
    "exp": "Safety bonding.",
    "cat": "QUICK",
    "id": "T02A_427"
  },
  {
    "q": "VCB quench?",
    "a": "Vacuum",
    "opts": [
      "Air",
      "Vacuum",
      "Oil",
      "None"
    ],
    "exp": "Vacuum is the key.",
    "cat": "QUICK",
    "id": "T02A_428"
  },
  {
    "q": "HV limit?",
    "a": "1000V",
    "opts": [
      "440V",
      "1000V",
      "6600V",
      "None"
    ],
    "exp": "The definition threshold.",
    "cat": "QUICK",
    "id": "T02A_429"
  },
  {
    "q": "Float?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only tanker",
      "Only bridge"
    ],
    "exp": "Floating neutral is for LV.",
    "cat": "QUICK",
    "id": "T02A_430"
  },
  {
    "q": "5 min discharge?",
    "a": "Yes, HV cable",
    "opts": [
      "No",
      "Yes, HV cable",
      "Only LV",
      "Only battery"
    ],
    "exp": "Discharge time constant.",
    "cat": "QUICK",
    "id": "T02A_431"
  },
  {
    "q": "Low maintenance VCB?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Sometimes",
      "Depends"
    ],
    "exp": "Solid state/sealed simplicity.",
    "cat": "QUICK",
    "id": "T02A_432"
  },
  {
    "q": "HV justification?",
    "a": ">3 MW",
    "opts": [
      "1 MW",
      ">3 MW",
      "No limit",
      "None"
    ],
    "exp": "Economic threshold.",
    "cat": "QUICK",
    "id": "T02A_433"
  },
  {
    "q": "Fire risk in MSB?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only HV",
      "Only LV"
    ],
    "exp": "Every MSB is a risk.",
    "cat": "QUICK",
    "id": "T02A_434"
  },
  {
    "q": "CT open circuit?",
    "a": "Voltage spike",
    "opts": [
      "Current drop",
      "Voltage spike",
      "Nothing",
      "Power drop"
    ],
    "exp": "Lethal induced voltage.",
    "cat": "QUICK",
    "id": "T02A_435"
  },
  {
    "q": "IRM continuous?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for shore",
      "Only for tanker"
    ],
    "exp": "Mandatory surveillance.",
    "cat": "QUICK",
    "id": "T02A_436"
  },
  {
    "q": "SF6 ventilate?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Depends",
      "Sometimes"
    ],
    "exp": "Before entry is mandatory.",
    "cat": "QUICK",
    "id": "T02A_437"
  },
  {
    "q": "14 safeties?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Sometimes",
      "None"
    ],
    "exp": "Correct number.",
    "cat": "QUICK",
    "id": "T02A_438"
  },
  {
    "q": "Zone 0?",
    "a": "Cargo tanks",
    "opts": [
      "Bridge",
      "Cargo tanks",
      "Engine room",
      "Accommodation"
    ],
    "exp": "Most dangerous.",
    "cat": "QUICK",
    "id": "T02A_439"
  },
  {
    "q": "Shaft earthing?",
    "a": "Bearing protection",
    "opts": [
      "Speed control",
      "Bearing protection",
      "Voltage boost",
      "Frequency"
    ],
    "exp": "Prevents pitting.",
    "cat": "QUICK",
    "id": "T02A_440"
  },
  {
    "q": "IEC 80005-1?",
    "a": "HVSC",
    "opts": [
      "HV Switchgear",
      "HVSC",
      "Gloves",
      "None"
    ],
    "exp": "Shore connection standard.",
    "cat": "QUICK",
    "id": "T02A_441"
  },
  {
    "q": "SF6 colour?",
    "a": "None",
    "opts": [
      "Yellow",
      "None",
      "Green",
      "Orange"
    ],
    "exp": "Invisible.",
    "cat": "QUICK",
    "id": "T02A_442"
  },
  {
    "q": "Essential?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in port",
      "Only at sea"
    ],
    "exp": "Critical.",
    "cat": "QUICK",
    "id": "T02A_443"
  },
  {
    "q": "PT has fuse?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "Standard protection.",
    "cat": "QUICK",
    "id": "T02A_444"
  },
  {
    "q": "Megger voltage?",
    "a": "2500 V for HV",
    "opts": [
      "50 V",
      "2500 V for HV",
      "500 V",
      "10 V"
    ],
    "exp": "Correct stress level.",
    "cat": "QUICK",
    "id": "T02A_445"
  },
  {
    "q": "Rubber mats?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Maybe",
      "Never"
    ],
    "exp": "Safety requirement.",
    "cat": "QUICK",
    "id": "T02A_446"
  },
  {
    "q": "Magnetic field source?",
    "a": "Rotor",
    "opts": [
      "Stator",
      "Rotor",
      "AVR",
      "PMG"
    ],
    "exp": "Rotating field.",
    "cat": "QUICK",
    "id": "T02A_447"
  },
  {
    "q": "SF6 absorption?",
    "a": "Absorbs electrons",
    "opts": [
      "Repels electrons",
      "Absorbs electrons",
      "Makes them",
      "None"
    ],
    "exp": "Electronegative quenching.",
    "cat": "QUICK",
    "id": "T02A_448"
  },
  {
    "q": "Electronics megger?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only HV",
      "Only LV"
    ],
    "exp": "500V destroys chips.",
    "cat": "QUICK",
    "id": "T02A_449"
  },
  {
    "q": "MSB essential?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Depends",
      "Sometimes"
    ],
    "exp": "Core ship safety.",
    "cat": "QUICK",
    "id": "T02A_450"
  },
  {
    "q": "What protects the CT?",
    "a": "Shorting terminal",
    "opts": [
      "Fuse",
      "Shorting terminal",
      "Nothing",
      "AVR"
    ],
    "exp": "Prevents open-circuit spike.",
    "cat": "QUICK",
    "id": "T02A_451"
  },
  {
    "q": "Is MSB room a fire zone?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Never",
      "Only in tanker"
    ],
    "exp": "Electrical fire risk.",
    "cat": "QUICK",
    "id": "T02A_452"
  },
  {
    "q": "Does IRM have location?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only HV",
      "Only LV"
    ],
    "exp": "Requires manual isolation.",
    "cat": "QUICK",
    "id": "T02A_453"
  },
  {
    "q": "Glove Class 1?",
    "a": "White",
    "opts": [
      "Yellow",
      "White",
      "Green",
      "Orange"
    ],
    "exp": "Correct class colour.",
    "cat": "QUICK",
    "id": "T02A_454"
  },
  {
    "q": "Pilot loop function?",
    "a": "Connection check",
    "opts": [
      "Voltage check",
      "Connection check",
      "Power boost",
      "None"
    ],
    "exp": "Verifies physical connectivity.",
    "cat": "QUICK",
    "id": "T02A_455"
  },
  {
    "q": "200% IR rule?",
    "a": "Return-to-service",
    "opts": [
      "Current",
      "Return-to-service",
      "Voltage",
      "None"
    ],
    "exp": "Post-repair safety buffer.",
    "cat": "QUICK",
    "id": "T02A_456"
  },
  {
    "q": "Lubrication VCB?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Depends",
      "Sometimes"
    ],
    "exp": "Mechanical reliability.",
    "cat": "QUICK",
    "id": "T02A_457"
  },
  {
    "q": "Are HV gloves for LV?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only in port",
      "Only at sea"
    ],
    "exp": "They cover both.",
    "cat": "QUICK",
    "id": "T02A_458"
  },
  {
    "q": "Earth bus?",
    "a": "Bonding",
    "opts": [
      "Cooling",
      "Bonding",
      "Switching",
      "Powering"
    ],
    "exp": "Hull connection.",
    "cat": "QUICK",
    "id": "T02A_459"
  },
  {
    "q": "VCB arc?",
    "a": "Vacuum",
    "opts": [
      "Air",
      "Vacuum",
      "SF6",
      "None"
    ],
    "exp": "Vacuum bottle.",
    "cat": "QUICK",
    "id": "T02A_460"
  },
  {
    "q": "HV 1000V?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only 6600",
      "None"
    ],
    "exp": "Threshold value.",
    "cat": "QUICK",
    "id": "T02A_461"
  },
  {
    "q": "Floating?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only HV",
      "Only LV"
    ],
    "exp": "Floating neutral is LV concept.",
    "cat": "QUICK",
    "id": "T02A_462"
  },
  {
    "q": "5 min discharge?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only LV",
      "Only Battery"
    ],
    "exp": "Capacitive discharge time.",
    "cat": "QUICK",
    "id": "T02A_463"
  },
  {
    "q": "Low maintenance VCB?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Sometimes",
      "Depends"
    ],
    "exp": "Simple mechanical design.",
    "cat": "QUICK",
    "id": "T02A_464"
  },
  {
    "q": "HV justification?",
    "a": ">3 MW",
    "opts": [
      "1 MW",
      ">3 MW",
      "No limit",
      "None"
    ],
    "exp": "Threshold for HV efficiency.",
    "cat": "QUICK",
    "id": "T02A_465"
  },
  {
    "q": "Fire MSB?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Never",
      "Only LV"
    ],
    "exp": "Electrical fire risk.",
    "cat": "QUICK",
    "id": "T02A_466"
  },
  {
    "q": "Open CT?",
    "a": "Lethal voltage",
    "opts": [
      "Zero",
      "Lethal voltage",
      "Trip",
      "Nothing"
    ],
    "exp": "Destructive secondary EMF.",
    "cat": "QUICK",
    "id": "T02A_467"
  },
  {
    "q": "IRM continuous?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Sometimes",
      "Only port"
    ],
    "exp": "Safety surveillance.",
    "cat": "QUICK",
    "id": "T02A_468"
  },
  {
    "q": "SF6 ventilation?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Depends",
      "Sometimes"
    ],
    "exp": "Toxic gas risk.",
    "cat": "QUICK",
    "id": "T02A_469"
  },
  {
    "q": "14 safeties?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Maybe",
      "Never"
    ],
    "exp": "Standardized list.",
    "cat": "QUICK",
    "id": "T02A_470"
  },
  {
    "q": "Zone 0?",
    "a": "Cargo tanks",
    "opts": [
      "Engine room",
      "Cargo tanks",
      "Bridge",
      "Accommodation"
    ],
    "exp": "Highest zone risk.",
    "cat": "QUICK",
    "id": "T02A_471"
  },
  {
    "q": "Shaft earthing?",
    "a": "Bearing protection",
    "opts": [
      "None",
      "Bearing protection",
      "Voltage boost",
      "None"
    ],
    "exp": "Corrosion prevention.",
    "cat": "QUICK",
    "id": "T02A_472"
  },
  {
    "q": "IEC 80005-1?",
    "a": "HVSC",
    "opts": [
      "HV Switchgear",
      "HVSC",
      "Gloves",
      "None"
    ],
    "exp": "Shore connection standard.",
    "cat": "QUICK",
    "id": "T02A_473"
  },
  {
    "q": "SF6 colour?",
    "a": "None",
    "opts": [
      "Yes",
      "None",
      "Only green",
      "Only orange"
    ],
    "exp": "Invisible gas.",
    "cat": "QUICK",
    "id": "T02A_474"
  },
  {
    "q": "Essential?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Sometimes",
      "Never"
    ],
    "exp": "Must stay powered.",
    "cat": "QUICK",
    "id": "T02A_475"
  },
  {
    "q": "PT has fuse?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Only for HV",
      "Only for LV"
    ],
    "exp": "Protective fuse.",
    "cat": "QUICK",
    "id": "T02A_476"
  },
  {
    "q": "Megger voltage?",
    "a": "2500 V for HV",
    "opts": [
      "500 V",
      "2500 V for HV",
      "100 V",
      "10 V"
    ],
    "exp": "Correct test stress.",
    "cat": "QUICK",
    "id": "T02A_477"
  },
  {
    "q": "Rubber mats?",
    "a": "Yes",
    "opts": [
      "No",
      "Yes",
      "Maybe",
      "Never"
    ],
    "exp": "Required safety equipment.",
    "cat": "QUICK",
    "id": "T02A_478"
  },
  {
    "q": "Magnetic field?",
    "a": "Rotor",
    "opts": [
      "Stator",
      "Rotor",
      "AVR",
      "PMG"
    ],
    "exp": "Rotating field source.",
    "cat": "QUICK",
    "id": "T02A_479"
  },
  {
    "q": "Final HV fact?",
    "a": "Standardization simplifies design",
    "opts": [
      "Standardization complicates design",
      "Standardization simplifies design",
      "No standard",
      "None"
    ],
    "exp": "Standardisation is the goal of IEC 60092/80005.",
    "cat": "QUICK",
    "id": "T02A_480"
  }

]);

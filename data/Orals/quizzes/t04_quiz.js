window.loadQuizzes("T04_Switchboard", [
  {
    "q": "What is the primary purpose of the dead-front panel construction on an MSB?",
    "a": "Prevents physical contact with live busbars during normal operation",
    "opts": [
      "Trips the generator during reverse power",
      "Sheds non-essential loads automatically",
      "Prevents physical contact with live busbars during normal operation",
      "Provides digital readout of earth fault resistance"
    ],
    "exp": "Dead-front construction uses physical or electrical interlocks to make contact with live parts impossible during normal operation.",
    "cat": "SAF",
    "id": "T04A_001"
  },
  {
    "q": "At what typical value is the IDMT Over-current relay (OCR) set?",
    "a": "~110% rated generator current",
    "opts": [
      "~85% rated generator current",
      "~110% rated generator current",
      "~50% rated generator current",
      "~5-10% rated generator current"
    ],
    "exp": "The OCR is set at ~110% to protect busbars, cables, and ACBs from sustained overcurrent and short circuits.",
    "cat": "SAF",
    "id": "T04A_002"
  },
  {
    "q": "What happens when the under-voltage (UV) trip relay activates?",
    "a": "Trips generator ACB when bus voltage falls below ~85% rated",
    "opts": [
      "Sheds Stage 1 loads immediately",
      "Trips generator ACB when bus voltage falls below ~85% rated",
      "Starts the emergency generator within 45 seconds",
      "Energises the reverse power relay"
    ],
    "exp": "The UV relay trips the generator ACB when voltage falls below ~85%, preventing the alternator from acting as a motor.",
    "cat": "SAF",
    "id": "T04A_003"
  },
  {
    "q": "What is the time delay for the under-voltage (UV) trip relay?",
    "a": "1–3 s",
    "opts": [
      "0 ms",
      "1–3 s",
      "5–10 s",
      "30 s"
    ],
    "exp": "A 1–3 s time delay allows the relay to ride through transient voltage dips, such as during large motor starts.",
    "cat": "SAF",
    "id": "T04A_004"
  },
  {
    "q": "What is the typical setting for a reverse power relay?",
    "a": "5–10% rated kW with a 3–5 s delay",
    "opts": [
      "~110% rated kW with no delay",
      "5–10% rated kW with a 3–5 s delay",
      "~85% rated voltage with a 1-3 s delay",
      "10-15% rated current with a 5 s delay"
    ],
    "exp": "The relay is set at 5–10% of rated kW with a 3–5 s delay to avoid tripping during normal synchronisation transients.",
    "cat": "SAF",
    "id": "T04A_005"
  },
  {
    "q": "How does the earth fault indicator (IRM) signal an alarm?",
    "a": "Provides a continuous digital readout and alarms below 50 kΩ",
    "opts": [
      "Trips the main generator ACB when reading falls below 1 MΩ",
      "Provides a continuous digital readout and alarms below 50 kΩ",
      "Automatically sheds non-essential loads",
      "Opens the bus-tie breaker automatically"
    ],
    "exp": "The IRM gives continuous digital readouts and typically triggers an alarm when insulation resistance drops below 50 kΩ.",
    "cat": "SAF",
    "id": "T04A_006"
  },
  {
    "q": "What is the function of the Bus-tie (BTB) interlock?",
    "a": "Ensures only synchronised buses connect and prevents circulating currents",
    "opts": [
      "Disconnects the emergency generator from the MSB",
      "Ensures only synchronised buses connect and prevents circulating currents",
      "Connects the shore supply to the main busbar automatically",
      "Protects the busbar from lightning surges"
    ],
    "exp": "The BTB interlock prevents unsynchronised paralleling, avoiding circulating currents and fault propagation.",
    "cat": "SAF",
    "id": "T04A_007"
  },
  {
    "q": "What does the preferential trip relay do?",
    "a": "Sheds non-essential loads sequentially to prevent total blackout",
    "opts": [
      "Sheds non-essential loads sequentially to prevent total blackout",
      "Trips the generator on reverse power",
      "Starts the standby generator automatically",
      "Isolates the emergency switchboard from the main switchboard"
    ],
    "exp": "It sheds lowest-priority circuits in stages as the generator nears overload to prevent a total blackout.",
    "cat": "SAF",
    "id": "T04A_008"
  },
  {
    "q": "Why is it dangerous if the reverse power relay is not fitted?",
    "a": "The live busbar drives the stalled generator as a synchronous motor, causing engine damage",
    "opts": [
      "The generator will catch fire due to excessive overvoltage",
      "The live busbar drives the stalled generator as a synchronous motor, causing engine damage",
      "The bus-tie breaker will rapidly open and close",
      "The emergency generator will auto-start while the main generator is running"
    ],
    "exp": "Without it, a stalled prime mover is driven by the bus as a motor, damaging the crankshaft, bearings, and turbocharger.",
    "cat": "SAF",
    "id": "T04A_009"
  },
  {
    "q": "What does the symbol 'In' represent on an ACB nameplate?",
    "a": "Continuous current the ACB can carry indefinitely without overheating",
    "opts": [
      "Maximum short-circuit breaking capacity",
      "Continuous current the ACB can carry indefinitely without overheating",
      "Rated operational voltage of the system",
      "Rated impulse withstand voltage"
    ],
    "exp": "In is the Normal Current Rating, stamped on the frame (e.g., 1600 A), which the ACB can carry indefinitely at rated ambient temp.",
    "cat": "RATING",
    "id": "T04A_010"
  },
  {
    "q": "What is the difference between Icu and Ics on an ACB?",
    "a": "Icu is the ultimate breaking capacity, while Ics is the service capacity it can repeat",
    "opts": [
      "Icu is for AC circuits, Ics is for DC circuits",
      "Icu is the making capacity, Ics is the breaking capacity",
      "Icu is the ultimate breaking capacity, while Ics is the service capacity it can repeat",
      "Icu is the insulation voltage, Ics is the operational voltage"
    ],
    "exp": "Icu is the ultimate max fault current interrupted once; Ics is a percentage of Icu that the breaker can repeat in service.",
    "cat": "RATING",
    "id": "T04A_011"
  },
  {
    "q": "Which voltage rating is always higher on an ACB nameplate?",
    "a": "Ui (Rated Insulation Voltage) is higher than Ue (Rated Operational Voltage)",
    "opts": [
      "Ue (Rated Operational Voltage) is higher than Ui (Rated Insulation Voltage)",
      "Ui (Rated Insulation Voltage) is higher than Uimp (Impulse Withstand)",
      "Ui (Rated Insulation Voltage) is higher than Ue (Rated Operational Voltage)",
      "Ue (Rated Operational Voltage) is higher than Uimp (Impulse Withstand)"
    ],
    "exp": "Ui defines the maximum dielectric withstand of the insulation, which is always higher than the normal operating voltage (Ue).",
    "cat": "RATING",
    "id": "T04A_012"
  },
  {
    "q": "What does Uimp represent?",
    "a": "Peak impulse voltage the ACB can withstand without flashover",
    "opts": [
      "Maximum continuous operating voltage",
      "Peak impulse voltage the ACB can withstand without flashover",
      "The voltage threshold for the under-voltage trip coil",
      "The minimum voltage required to energise the close coil"
    ],
    "exp": "Uimp is the Rated Impulse Withstand Voltage, protecting against lightning surges and switching transients.",
    "cat": "RATING",
    "id": "T04A_013"
  },
  {
    "q": "What is the function of the NVC / UVT coil on an ACB?",
    "a": "It de-energises and spring-opens the ACB if control supply is lost",
    "opts": [
      "It energises to close the main contacts on command",
      "It provides the trip signal during a short circuit",
      "It de-energises and spring-opens the ACB if control supply is lost",
      "It measures the phase angle for reverse power detection"
    ],
    "exp": "The No-Volt/Under-Volt coil holds the ACB closed; on power loss, it drops out to prevent accidental re-closure onto a dead bus.",
    "cat": "RATING",
    "id": "T04A_014"
  },
  {
    "q": "How does an ACB quench an arc during opening?",
    "a": "Main contacts open first, then arcing contacts open to draw the arc into the arc chute",
    "opts": [
      "Arcing contacts open first, then main contacts draw the arc into the vacuum bottle",
      "Main contacts open first, then arcing contacts open to draw the arc into the arc chute",
      "The arc is quenched instantly by the NVC coil",
      "SF6 gas is released across the main contacts as they open"
    ],
    "exp": "The arcing sequence protects the main contacts. The arc is drawn into ceramic splitter plates in the arc chute and extinguished.",
    "cat": "RATING",
    "id": "T04A_015"
  },
  {
    "q": "What is the typical current range for an Air Circuit Breaker (ACB) on ships?",
    "a": "400 A – 6300 A",
    "opts": [
      "100 A – 1600 A",
      "Up to ~75 A",
      "400 A – 6300 A",
      "10 A – 100 A"
    ],
    "exp": "ACBs are used for large feeders and generators, operating in the 400 A to 6300 A range.",
    "cat": "RATING",
    "id": "T04A_016"
  },
  {
    "q": "What component is used to manually reset small branch circuits in accommodations?",
    "a": "NFB (No-Fuse Breaker)",
    "opts": [
      "ACB (Air Circuit Breaker)",
      "NFB (No-Fuse Breaker)",
      "MCCB (Moulded Case Circuit Breaker)",
      "VCB (Vacuum Circuit Breaker)"
    ],
    "exp": "NFBs (up to ~75A) are used for lighting and socket panels and replace rewirable fuses.",
    "cat": "RATING",
    "id": "T04A_017"
  },
  {
    "q": "What relationship is required by IEC 60947-2 between Making Capacity (Icm) and Breaking Capacity (Icu) for ACBs?",
    "a": "Icm ≥ 2.2 × Icu",
    "opts": [
      "Icm = Icu",
      "Icm ≥ 2.2 × Icu",
      "Icu ≥ 2.2 × Icm",
      "Icm ≥ 10 × Icu"
    ],
    "exp": "The asymmetric making current can be up to 2.2 × Icu due to the DC offset in the first half-cycle of an AC fault.",
    "cat": "RATING",
    "id": "T04A_018"
  },
  {
    "q": "When maintaining ACB arc chutes, what must NEVER be used to clean ceramic splitter plates?",
    "a": "Damp cloth",
    "opts": [
      "Dry cloth",
      "Dry compressed air",
      "Damp cloth",
      "Soft bristle brush"
    ],
    "exp": "A damp cloth introduces moisture into the ceramic, which causes electrical tracking and failure.",
    "cat": "MAINT",
    "id": "T04A_019"
  },
  {
    "q": "At what wear level are arcing contacts typically replaced?",
    "a": "At 50% erosion limit",
    "opts": [
      "At 10% erosion limit",
      "At 25% erosion limit",
      "At 50% erosion limit",
      "At 90% erosion limit"
    ],
    "exp": "Arcing contacts are usually replaced before reaching their minimum thickness, typically around the 50% erosion mark.",
    "cat": "MAINT",
    "id": "T04A_020"
  },
  {
    "q": "What should the main contact resistance be across closed ACB contacts?",
    "a": "<100 µΩ",
    "opts": [
      ">1 MΩ",
      "<100 µΩ",
      "1–5 Ω",
      "50 kΩ"
    ],
    "exp": "Resistance must be very low (<100 µΩ measured with a micro-ohmmeter) to prevent thermal hotspots.",
    "cat": "MAINT",
    "id": "T04A_021"
  },
  {
    "q": "What type of grease should NEVER be used near ACB arc chutes?",
    "a": "Petroleum-based grease",
    "opts": [
      "Silicone grease",
      "Lithium-based grease",
      "Petroleum-based grease",
      "Copper anti-seize"
    ],
    "exp": "Petroleum-based greases pose a fire risk and carbonize under arcing conditions; silicone or lithium are used.",
    "cat": "MAINT",
    "id": "T04A_022"
  },
  {
    "q": "What is the purpose of testing the ACB in the TEST position?",
    "a": "Control circuit remains connected while power contacts are disconnected",
    "opts": [
      "Both control and power circuits are completely isolated",
      "The ACB is connected to the busbars but cannot trip",
      "Control circuit remains connected while power contacts are disconnected",
      "The bus-tie breaker automatically opens"
    ],
    "exp": "The TEST position allows safe operational testing of relays and trip coils without exposing the busbars to load.",
    "cat": "MAINT",
    "id": "T04A_023"
  },
  {
    "q": "What is the very first step in the 7-step ACB isolation procedure?",
    "a": "Obtain PTW (Permit to Work)",
    "opts": [
      "Rack out to ISOLATED position",
      "Apply LOTO",
      "Obtain PTW (Permit to Work)",
      "Apply earth clamps"
    ],
    "exp": "Before any work, a Permit to Work must be obtained, and the bridge/Chief Engineer must be informed.",
    "cat": "MAINT",
    "id": "T04A_024"
  },
  {
    "q": "In the ACB ISOLATED position, what provides protection from live bus stabs?",
    "a": "Shutters close automatically over the bus stabs",
    "opts": [
      "The ceramic arc chutes",
      "The NVC coil de-energises",
      "Shutters close automatically over the bus stabs",
      "The earth fault indicator trips the bus"
    ],
    "exp": "When the ACB is racked out to ISOLATED, safety shutters mechanically close over the live busbar stabs.",
    "cat": "MAINT",
    "id": "T04A_025"
  },
  {
    "q": "Why are earth clamps applied during ACB maintenance?",
    "a": "To drain any capacitive charge on the bus side",
    "opts": [
      "To bypass the reverse power relay",
      "To test the micro-ohmmeter",
      "To prevent the NVC coil from dropping out",
      "To drain any capacitive charge on the bus side"
    ],
    "exp": "Earth clamps are connected to the bus stabs to safely drain any remaining capacitive voltage before work begins.",
    "cat": "MAINT",
    "id": "T04A_026"
  },
  {
    "q": "Where must the voltage indicator test be performed during ACB isolation?",
    "a": "On BOTH sides of the ACB terminals (bus side AND load side)",
    "opts": [
      "Only on the bus side",
      "Only on the load side",
      "On BOTH sides of the ACB terminals (bus side AND load side)",
      "On the control circuit pins"
    ],
    "exp": "Testing both sides ensures complete isolation from both the source (bus) and any possible feedback from the load.",
    "cat": "MAINT",
    "id": "T04A_027"
  },
  {
    "q": "Why must rewirable (Kit-Kat) fuses NEVER be used on 440 V MSB feeders?",
    "a": "They have low breaking capacity and variable current rating, lacking arc quench",
    "opts": [
      "They are too expensive to replace",
      "They have low breaking capacity and variable current rating, lacking arc quench",
      "They trip too quickly during transient overloads",
      "They require silicone grease for installation"
    ],
    "exp": "Rewirable fuses are unsafe for high fault currents on MSB feeders because they lack proper arc quenching and accurate calibration.",
    "cat": "FUSE",
    "id": "T04A_028"
  },
  {
    "q": "What is the typical breaking capacity of an HRC fuse?",
    "a": "80–100 kA",
    "opts": [
      "10–20 kA",
      "80–100 kA",
      "2–3 kA",
      "400–600 A"
    ],
    "exp": "HRC fuses can safely interrupt the highest ship fault currents (80–100 kA) without explosive failure.",
    "cat": "FUSE",
    "id": "T04A_029"
  },
  {
    "q": "What material makes up the body of an HRC fuse?",
    "a": "High-purity ceramic or glass tube",
    "opts": [
      "High-purity ceramic or glass tube",
      "Moulded plastic casing",
      "Copper-clad aluminum",
      "Silicone-impregnated rubber"
    ],
    "exp": "The body is made of ceramic or glass to withstand the explosive arc pressure when clearing a fault.",
    "cat": "FUSE",
    "id": "T04A_030"
  },
  {
    "q": "Why is silver chosen for the HRC fuse element?",
    "a": "Low resistance and vaporises cleanly at fault current without explosive fragmentation",
    "opts": [
      "It melts slowly to allow long time delays",
      "Low resistance and vaporises cleanly at fault current without explosive fragmentation",
      "It combines with oxygen to form an insulating gas",
      "It is highly resistant to tracking"
    ],
    "exp": "Silver has low resistance (no normal heating) and vaporises cleanly when the fuse blows.",
    "cat": "FUSE",
    "id": "T04A_031"
  },
  {
    "q": "What acts as the arc quench filler inside an HRC fuse?",
    "a": "Silica (quartz) sand",
    "opts": [
      "SF6 gas",
      "Mineral oil",
      "Silica (quartz) sand",
      "Ceramic splitter plates"
    ],
    "exp": "Silica sand absorbs arc energy and vaporises into silica dioxide, quenching the arc without gas pressure buildup.",
    "cat": "FUSE",
    "id": "T04A_032"
  },
  {
    "q": "How fast does an HRC fuse typically operate during a heavy fault?",
    "a": "0.25–3 cycles",
    "opts": [
      "10–15 seconds",
      "1–3 seconds",
      "0.25–3 cycles",
      "5–10 minutes"
    ],
    "exp": "HRC fuses are current-limiting and interrupt the fault before the current reaches its first prospective peak (0.25–3 cycles).",
    "cat": "FUSE",
    "id": "T04A_033"
  },
  {
    "q": "What controls the blow point on an HRC fuse silver element?",
    "a": "Precision-machined notches",
    "opts": [
      "A bimetallic thermal strip",
      "Precision-machined notches",
      "The amount of silica sand filler",
      "A magnetic blow-out coil"
    ],
    "exp": "The silver element has calibrated notches that dictate exactly where and when the element vaporises.",
    "cat": "FUSE",
    "id": "T04A_034"
  },
  {
    "q": "Where are Cartridge fuses typically used on ships?",
    "a": "Small panel distribution circuits and control panel protection",
    "opts": [
      "MSB bus-section isolation",
      "Small panel distribution circuits and control panel protection",
      "Main generator feeders",
      "High voltage 6.6 kV switchboards"
    ],
    "exp": "Cartridge fuses have low-to-medium breaking capacity, suitable for small distribution and control circuits.",
    "cat": "FUSE",
    "id": "T04A_035"
  },
  {
    "q": "What happens after an HRC fuse operates?",
    "a": "The entire fuse unit must be replaced",
    "opts": [
      "The fuse element is manually reset",
      "The silver wire is rewired into the body",
      "The entire fuse unit must be replaced",
      "The silica sand is topped up"
    ],
    "exp": "HRC fuses are sacrificial and non-replaceable internally; the whole cartridge must be discarded and replaced.",
    "cat": "FUSE",
    "id": "T04A_036"
  },
  {
    "q": "What principle does a thermal bimetallic overload relay use?",
    "a": "Bimetallic strip heated by load current bends at a set temperature",
    "opts": [
      "CT samples line current to calculate IDMT",
      "Compares IN current vs OUT current",
      "Bimetallic strip heated by load current bends at a set temperature",
      "Measures voltage drop across an EOL resistor"
    ],
    "exp": "Overload relays use a bimetallic strip that bends when heated by prolonged overcurrent to trip the contactor.",
    "cat": "DIFF",
    "id": "T04A_037"
  },
  {
    "q": "Which relay type is best for protecting motor windings from sustained overcurrent <10× FLA?",
    "a": "Overload relay (thermal bimetallic)",
    "opts": [
      "Differential relay",
      "OCR - IDMT",
      "Reverse power relay",
      "Overload relay (thermal bimetallic)"
    ],
    "exp": "Thermal overload relays have a slow thermal time constant that matches motor heating curves perfectly for sustained overloads.",
    "cat": "DIFF",
    "id": "T04A_038"
  },
  {
    "q": "How does an OCR (IDMT) react to different fault currents?",
    "a": "Trips faster at higher multiples of the current setting",
    "opts": [
      "Trips instantly for all faults above the setting",
      "Trips faster at higher multiples of the current setting",
      "Provides a fixed time delay regardless of current magnitude",
      "Bends a bimetallic strip proportionally to voltage"
    ],
    "exp": "IDMT (Inverse Definite Minimum Time) means the higher the overcurrent, the faster the relay operates.",
    "cat": "DIFF",
    "id": "T04A_039"
  },
  {
    "q": "What does a differential relay measure to detect a fault?",
    "a": "It compares current flowing INTO a zone vs current flowing OUT",
    "opts": [
      "It compares current flowing INTO a zone vs current flowing OUT",
      "It measures the phase angle between voltage and current",
      "It monitors the thermal heat generated by the load",
      "It calculates the inverse time of the overcurrent"
    ],
    "exp": "A differential relay expects IN = OUT. If IN ≠ OUT, it detects an internal leakage/fault immediately.",
    "cat": "DIFF",
    "id": "T04A_040"
  },
  {
    "q": "What type of faults are differential relays specifically designed to detect?",
    "a": "Internal faults: earth fault, winding-to-winding short, low-level insulation breakdown",
    "opts": [
      "Sustained external overload on motor feeders",
      "Reverse power motoring of the alternator",
      "Internal faults: earth fault, winding-to-winding short, low-level insulation breakdown",
      "Voltage surges from AVR failure"
    ],
    "exp": "Differential relays detect very small internal faults (as low as 5-10% rated) inside generators and transformers without delay.",
    "cat": "DIFF",
    "id": "T04A_041"
  },
  {
    "q": "What is the typical speed of operation for a differential relay?",
    "a": "Very fast - no intentional time delay",
    "opts": [
      "Very fast - no intentional time delay",
      "Slow - matches the thermal heating curve",
      "3–5 seconds delay",
      "5–10 seconds dashpot delay"
    ],
    "exp": "Because an internal fault signifies immediate equipment breakdown, differential relays operate instantly.",
    "cat": "DIFF",
    "id": "T04A_042"
  },
  {
    "q": "Where are differential relays most commonly fitted on a ship?",
    "a": "Large generators (>500 kVA), large transformers, main busbars",
    "opts": [
      "Small motor starters and group distribution panels",
      "Large generators (>500 kVA), large transformers, main busbars",
      "Emergency lighting circuits",
      "Galley ovens and water heaters"
    ],
    "exp": "They protect high-value, high-power zones like main generators and transformers from catastrophic internal winding faults.",
    "cat": "DIFF",
    "id": "T04A_043"
  },
  {
    "q": "What is a key difference between a fuse and an OCR?",
    "a": "A fuse is single-use and must be replaced; an OCR is reusable and adjustable",
    "opts": [
      "An OCR is single-use and must be replaced; a fuse is reusable",
      "A fuse detects internal faults better than an OCR",
      "A fuse is single-use and must be replaced; an OCR is reusable and adjustable",
      "An OCR trips faster than an HRC fuse at 100 kA"
    ],
    "exp": "Fuses are sacrificial devices, whereas OCRs are electromagnetic or electronic relays that reset after operation.",
    "cat": "DIFF",
    "id": "T04A_044"
  },
  {
    "q": "At what operating speed does an OCR trip at 10× its set current?",
    "a": "<100 ms",
    "opts": [
      "1-3 seconds",
      "3-5 seconds",
      "<100 ms",
      "Zero delay instantly"
    ],
    "exp": "Following the IDMT characteristic, extremely high faults (like 10× setting) trigger a very fast trip (<100 ms).",
    "cat": "DIFF",
    "id": "T04A_045"
  },
  {
    "q": "What is the preferred method for conducting an overload test on a generator OCR?",
    "a": "Secondary injection method",
    "opts": [
      "Primary injection method",
      "Load bank test at 110% power",
      "Secondary injection method",
      "Megger testing the OCR terminals"
    ],
    "exp": "Secondary injection allows precise relay testing without exposing the actual ship systems to hazardous overload currents.",
    "cat": "OLR",
    "id": "T04A_046"
  },
  {
    "q": "Before starting a secondary injection test on an OCR, what state should the ACB be in?",
    "a": "TEST position",
    "opts": [
      "SERVICE position",
      "ISOLATED position",
      "TEST position",
      "CLOSED position"
    ],
    "exp": "The TEST position connects the control circuit for relay testing but disconnects the main power contacts from the bus.",
    "cat": "OLR",
    "id": "T04A_047"
  },
  {
    "q": "During secondary injection, what should happen when you inject 1.05× the pickup current?",
    "a": "Relay must NOT trip",
    "opts": [
      "Relay must trip instantly",
      "Relay must trip within 3 seconds",
      "Relay must NOT trip",
      "ACB closes automatically"
    ],
    "exp": "Injecting 1.05× verifies the lower threshold ensures the relay does not operate spuriously on minor, harmless overloads.",
    "cat": "OLR",
    "id": "T04A_048"
  },
  {
    "q": "What multiples of pickup current are injected to verify the OCR's IDMT curve shape?",
    "a": "2×, 5×, and 10× pickup",
    "opts": [
      "0.5×, 1.0×, and 1.5× pickup",
      "2×, 5×, and 10× pickup",
      "10×, 20×, and 50× pickup",
      "1.05× only"
    ],
    "exp": "Testing at 2×, 5×, and 10× records varied trip times to confirm the inverse curve is functioning correctly.",
    "cat": "OLR",
    "id": "T04A_049"
  },
  {
    "q": "What equipment is commonly used to perform the secondary injection test?",
    "a": "Relay test set (e.g. Omicron CMC 256, FREJA)",
    "opts": [
      "500 V DC Megger",
      "Relay test set (e.g. Omicron CMC 256, FREJA)",
      "Hydrometer",
      "Micro-ohmmeter (DLRO)"
    ],
    "exp": "Specialized secondary injection test sets precisely control injected current and measure trip times.",
    "cat": "OLR",
    "id": "T04A_050"
  },
  {
    "q": "Why might a trip circuit link be opened or a test block inserted during secondary injection?",
    "a": "To prevent an accidental ACB trip during current injection",
    "opts": [
      "To increase the secondary current",
      "To prevent an accidental ACB trip during current injection",
      "To simulate a busbar short circuit",
      "To disable the under-voltage relay"
    ],
    "exp": "Isolating the trip circuit prevents the actual ACB from springing open during the curve verification phase.",
    "cat": "OLR",
    "id": "T04A_051"
  },
  {
    "q": "What must be done immediately after verifying the relay curve but before racking back to SERVICE?",
    "a": "Re-engage trip circuit and verify trip output contact operates the ACB",
    "opts": [
      "Re-engage trip circuit and verify trip output contact operates the ACB",
      "Perform a full primary load bank test",
      "Open the generator terminal box to check CT polarity",
      "Reset the preferential trip dashpot"
    ],
    "exp": "You must confirm that the relay's trip signal successfully fires the ACB's shunt trip coil.",
    "cat": "OLR",
    "id": "T04A_052"
  },
  {
    "q": "When is a Load Bank test used instead of secondary injection?",
    "a": "When relay test equipment is unavailable or for functional system-level verification",
    "opts": [
      "When testing differential relays",
      "When the ACB is in the ISOLATED position",
      "When relay test equipment is unavailable or for functional system-level verification",
      "To verify the reverse power phase angle"
    ],
    "exp": "Load banks apply real load, but are less precise for relay curve calibration compared to secondary injection.",
    "cat": "OLR",
    "id": "T04A_053"
  },
  {
    "q": "In the IDMT formula, what does a trip at 10× setting indicate?",
    "a": "A very fast trip (<100 ms)",
    "opts": [
      "A slow thermal trip (minutes)",
      "A steady delay of 5 seconds",
      "A very fast trip (<100 ms)",
      "An open circuit fault"
    ],
    "exp": "At 10× setting, the IDMT curve dictates an almost instantaneous trip to clear extreme short circuits.",
    "cat": "OLR",
    "id": "T04A_054"
  },
  {
    "q": "Which of the following causes a reverse power condition?",
    "a": "Prime mover fuel supply fails causing the engine to stall",
    "opts": [
      "Excitation voltage on the AVR increases suddenly",
      "A short circuit on the main switchboard",
      "Prime mover fuel supply fails causing the engine to stall",
      "The shore power connection is made without synchronisation"
    ],
    "exp": "If the engine loses power, the live busbar drives the generator as a motor, drawing power IN instead of OUT.",
    "cat": "RP",
    "id": "T04A_055"
  },
  {
    "q": "What core principle does the reverse power relay use to detect motoring?",
    "a": "Wattmetric principle (directional power using phase angle)",
    "opts": [
      "Thermal bimetallic bending",
      "IDMT current magnitude detection",
      "Wattmetric principle (directional power using phase angle)",
      "Dielectric polarization"
    ],
    "exp": "The relay multiplies V × I × cos φ. When motoring, the phase angle shifts ~180°, turning the power product negative.",
    "cat": "RP",
    "id": "T04A_056"
  },
  {
    "q": "Why cannot a standard Over-Current Relay (OCR) detect reverse power?",
    "a": "It only detects current magnitude, not power direction",
    "opts": [
      "It operates too quickly",
      "It only detects current magnitude, not power direction",
      "It measures only voltage drops",
      "It requires a direct connection to the engine governor"
    ],
    "exp": "During motoring, the current magnitude is normal (no-load power). Only a directional relay detects the 180° phase shift.",
    "cat": "RP",
    "id": "T04A_057"
  },
  {
    "q": "What is the primary reason for the 3–5 second time delay on a reverse power relay?",
    "a": "To ride through transient reverse power during normal synchronisation",
    "opts": [
      "To allow the engine to restart automatically",
      "To ride through transient reverse power during normal synchronisation",
      "To give the preferential trip time to shed loads",
      "To allow the AVR to boost excitation"
    ],
    "exp": "Brief reverse power occurs normally when an incoming generator is paralled; the delay prevents nuisance tripping.",
    "cat": "RP",
    "id": "T04A_058"
  },
  {
    "q": "What phase angle is injected during a secondary injection test of a reverse power relay?",
    "a": "Lagging ~170–175° (nearly anti-phase)",
    "opts": [
      "0° (in phase)",
      "90° (quadrature)",
      "Lagging ~170–175° (nearly anti-phase)",
      "Leading 45°"
    ],
    "exp": "To simulate motoring, the test set applies voltage and current almost entirely in anti-phase to create negative kW.",
    "cat": "RP",
    "id": "T04A_059"
  },
  {
    "q": "What is an opportunistic method to functionally test the reverse power relay?",
    "a": "During shore power transfer when backing down the generator",
    "opts": [
      "Running the emergency generator unloaded",
      "Tripping the bus-tie breaker",
      "During shore power transfer when backing down the generator",
      "Activating the emergency stop push button"
    ],
    "exp": "During transfer, the generator momentarily takes reverse power as it steps down, providing a real functional check.",
    "cat": "RP",
    "id": "T04A_060"
  },
  {
    "q": "Which components supply the signals to the reverse power relay?",
    "a": "A CT (stator current) and a PT (bus voltage)",
    "opts": [
      "Two CTs at both ends of the generator",
      "A CT (stator current) and a PT (bus voltage)",
      "An AVR and an OCR",
      "A thermal bimetallic strip and a dashpot"
    ],
    "exp": "The relay needs both Current (from CT) and Voltage (from PT) to calculate directional power.",
    "cat": "RP",
    "id": "T04A_061"
  },
  {
    "q": "At what percentage of rated generator kW does the reverse power relay typically trip?",
    "a": "5–10%",
    "opts": [
      "50–60%",
      "85–90%",
      "110%",
      "5–10%"
    ],
    "exp": "5-10% is low enough to catch a stalled engine before damage, but high enough to ignore minor power swings.",
    "cat": "RP",
    "id": "T04A_062"
  },
  {
    "q": "What hazard is caused by a spinning, unfuelled diesel engine driven by the busbar?",
    "a": "No lubrication pressure buildup, leading to bearing and turbocharger damage",
    "opts": [
      "Excessive voltage generation that destroys the AVR",
      "No lubrication pressure buildup, leading to bearing and turbocharger damage",
      "Overcharging of the start batteries",
      "Immediate activation of the CO2 flooding system"
    ],
    "exp": "Without fuel, the engine isn't self-driving its lube oil pumps properly at synchronous speed, causing severe mechanical damage.",
    "cat": "RP",
    "id": "T04A_063"
  },
  {
    "q": "At what load percentage does Stage 1 of the preferential trip typically activate?",
    "a": "~90% rated kW",
    "opts": [
      "~50% rated kW",
      "~90% rated kW",
      "~110% rated kW",
      "~70% rated kW"
    ],
    "exp": "Stage 1 activates near 90% load to shed high-consumption, non-essential domestic loads before overload trips the generator.",
    "cat": "PREF",
    "id": "T04A_064"
  },
  {
    "q": "Which loads are typically shed during Stage 1 of the preferential trip?",
    "a": "Galley ovens, water heaters, laundry machines",
    "opts": [
      "Navigation lights and steering gear",
      "Accommodation ventilation fans and deck machinery",
      "Galley ovens, water heaters, laundry machines",
      "Fire pumps and bilge pumps"
    ],
    "exp": "Stage 1 sheds the highest connected domestic loads that can be dropped without affecting vessel safety.",
    "cat": "PREF",
    "id": "T04A_065"
  },
  {
    "q": "How long is the intentional dashpot delay for Stage 1 of the preferential trip?",
    "a": "5–10 seconds",
    "opts": [
      "<100 ms",
      "1–3 seconds",
      "5–10 seconds",
      "30–45 seconds"
    ],
    "exp": "The 5-10 second delay allows transient motor starting surges to pass without unnecessarily shedding loads.",
    "cat": "PREF",
    "id": "T04A_066"
  },
  {
    "q": "Which of the following loads must NEVER be shed by the preferential trip?",
    "a": "Steering gear motor",
    "opts": [
      "Accommodation ventilation fans",
      "Galley ovens",
      "Steering gear motor",
      "Laundry machines"
    ],
    "exp": "Essential safety and navigation equipment (steering, nav lights, fire pumps) must never be shed.",
    "cat": "PREF",
    "id": "T04A_067"
  },
  {
    "q": "How does the mechanical dashpot create a time delay?",
    "a": "A piston displaces fluid through an adjustable needle valve orifice",
    "opts": [
      "A bimetallic strip bends as it heats up",
      "A capacitor charges until it reaches a voltage threshold",
      "A piston displaces fluid through an adjustable needle valve orifice",
      "An internal clock counts the grid frequency cycles"
    ],
    "exp": "The restricted flow of oil or air through the needle valve slows the relay armature movement, creating the delay.",
    "cat": "PREF",
    "id": "T04A_068"
  },
  {
    "q": "What happens in a dashpot if the needle valve orifice is adjusted to be wider?",
    "a": "Faster fluid flow results in a shorter time delay",
    "opts": [
      "Slower fluid flow results in a longer time delay",
      "Faster fluid flow results in a shorter time delay",
      "The relay trips at a higher kW percentage",
      "The relay trips at a lower kW percentage"
    ],
    "exp": "A wider orifice provides less resistance to the piston, allowing it to move faster and trip sooner.",
    "cat": "PREF",
    "id": "T04A_069"
  },
  {
    "q": "What is shed during Stage 2 of the preferential trip?",
    "a": "Accommodation ventilation fans and non-essential HVAC",
    "opts": [
      "Galley ovens and water heaters",
      "Steering gear and navigation lights",
      "Accommodation ventilation fans and non-essential HVAC",
      "Emergency lighting and GMDSS"
    ],
    "exp": "Stage 2 sheds the next tier of non-essential loads (like HVAC) if Stage 1 shedding wasn't enough.",
    "cat": "PREF",
    "id": "T04A_070"
  },
  {
    "q": "If a generator trips as soon as it comes on load and the pref trip keeps operating, what is a likely first step?",
    "a": "Check for a sustained busbar fault (short circuit)",
    "opts": [
      "Immediately increase the dashpot delay to 30 seconds",
      "Override the OCR relay",
      "Check for a sustained busbar fault (short circuit)",
      "Turn off the emergency generator"
    ],
    "exp": "A continuous heavy fault on the bus will cause immediate overload behavior across all protections.",
    "cat": "PREF",
    "id": "T04A_071"
  },
  {
    "q": "Why is staged shedding used instead of shedding everything at once?",
    "a": "To avoid shedding too much load too fast",
    "opts": [
      "Because the relay only has one contact block",
      "To avoid shedding too much load too fast",
      "Because Stage 2 loads operate on 220V instead of 440V",
      "To ensure the emergency generator starts correctly"
    ],
    "exp": "Staging drops just enough load to recover the plant. Dropping too much load abruptly can cause a dangerous voltage/frequency spike.",
    "cat": "PREF",
    "id": "T04A_072"
  },
  {
    "q": "What is the typical dielectric strength of Air in an ACB?",
    "a": "2–3 kV/mm",
    "opts": [
      "8–10 kV/mm",
      "2–3 kV/mm",
      "~89 kV/mm",
      "50–60 kV/mm"
    ],
    "exp": "Air has relatively poor dielectric strength (2-3 kV/mm) and ionises easily under heavy arc energy.",
    "cat": "DIEL",
    "id": "T04A_073"
  },
  {
    "q": "Why are ACBs impractical for 6.6 kV ship High Voltage switchboards?",
    "a": "The arc energy is too high to quench with air and would require massive physical separation",
    "opts": [
      "The contact resistance is too low for HV",
      "The arc energy is too high to quench with air and would require massive physical separation",
      "ACBs cannot be fitted with NVC coils",
      "Air turns into SF6 gas under high voltage"
    ],
    "exp": "At 6.6kV, arc energy is ~225x higher than 440V; air cannot quench it without an explosively large housing.",
    "cat": "DIEL",
    "id": "T04A_074"
  },
  {
    "q": "What is the standard breaker type used for 6.6 kV ship HV switchboards?",
    "a": "Vacuum Circuit Breaker (VCB)",
    "opts": [
      "Air Circuit Breaker (ACB)",
      "Moulded Case Circuit Breaker (MCCB)",
      "Vacuum Circuit Breaker (VCB)",
      "No-Fuse Breaker (NFB)"
    ],
    "exp": "VCBs use vacuum bottles with 8-10 kV/mm dielectric strength, making them compact and safe for 6.6 kV.",
    "cat": "DIEL",
    "id": "T04A_075"
  },
  {
    "q": "How does a Vacuum Circuit Breaker (VCB) quench an arc?",
    "a": "Lack of gas molecules prevents ionization, extinguishing the arc at the first natural current zero",
    "opts": [
      "Ceramic splitter plates divide the arc",
      "Lack of gas molecules prevents ionization, extinguishing the arc at the first natural current zero",
      "Silica sand absorbs the arc energy",
      "SF6 gas captures free electrons"
    ],
    "exp": "In a vacuum, there is nothing to ionize to sustain the plasma, so the arc dies cleanly at the zero-crossing.",
    "cat": "DIEL",
    "id": "T04A_076"
  },
  {
    "q": "What is the dielectric strength of SF6 gas at 4 bar pressure?",
    "a": "~89 kV/mm",
    "opts": [
      "~89 kV/mm",
      "8–10 kV/mm",
      "2–3 kV/mm",
      "440 V/mm"
    ],
    "exp": "Pressurized SF6 gas offers extreme dielectric strength (~89 kV/mm), making it ideal for very high voltage (>33kV).",
    "cat": "DIEL",
    "id": "T04A_077"
  },
  {
    "q": "Why is SF6 gas effective at suppressing arc formation?",
    "a": "It is highly electronegative and captures free electrons",
    "opts": [
      "It creates a strong physical draft that blows out the arc",
      "It freezes the contacts upon opening",
      "It is highly electronegative and captures free electrons",
      "It converts into silica dioxide to quench the arc"
    ],
    "exp": "SF6's electronegative nature rapidly strips free electrons from the arc plasma, de-ionizing it.",
    "cat": "DIEL",
    "id": "T04A_078"
  },
  {
    "q": "Why is SF6 gear not common on ships below 11 kV?",
    "a": "It requires special gas handling procedures and SF6 is a potent greenhouse gas",
    "opts": [
      "It cannot operate at 60 Hz",
      "It requires special gas handling procedures and SF6 is a potent greenhouse gas",
      "SF6 gas dissolves in humid sea air",
      "It has a lower dielectric strength than vacuum at 6.6 kV"
    ],
    "exp": "SF6 has a Global Warming Potential of 23,900 and needs complex handling, making sealed VCBs vastly preferred for ship 6.6kV.",
    "cat": "DIEL",
    "id": "T04A_079"
  },
  {
    "q": "Roughly how many times higher is the arc energy at 6.6 kV compared to 440 V?",
    "a": "225× higher",
    "opts": [
      "15× higher",
      "50× higher",
      "225× higher",
      "1000× higher"
    ],
    "exp": "Arc energy scales with the square of voltage ratio. (6600 / 440)² = 15² = 225 times more energy.",
    "cat": "DIEL",
    "id": "T04A_080"
  },
  {
    "q": "What separation distance do VCB contacts typically need to quench an arc?",
    "a": "~8–10 mm",
    "opts": [
      "~100 mm",
      "~8–10 mm",
      "~2–3 mm",
      "~50 mm"
    ],
    "exp": "Due to the extreme dielectric strength of a vacuum, only a tiny ~8-10 mm separation is required to break high voltages safely.",
    "cat": "DIEL",
    "id": "T04A_081"
  },
  {
    "q": "During a DC insulation (Megger) test, which current component decays to near-zero within 10–30 seconds?",
    "a": "Capacitive current (Ic)",
    "opts": [
      "Absorption current (Ia)",
      "True leakage current (Il)",
      "Capacitive current (Ic)",
      "Inductive reactive current (Ir)"
    ],
    "exp": "Capacitive current is simply the initial geometric charging of the cable and decays in seconds.",
    "cat": "PI",
    "id": "T04A_082"
  },
  {
    "q": "What causes the Absorption current (Ia) during an insulation test?",
    "a": "Molecular dipoles in the insulation aligning to the applied electric field",
    "opts": [
      "Surface tracking over dirty insulators",
      "Molecular dipoles in the insulation aligning to the applied electric field",
      "Physical movement of the copper conductors",
      "The charging of the copper-to-hull capacitance"
    ],
    "exp": "Absorption current reflects dielectric polarisation as dipoles in healthy insulation slowly align over ~10 minutes.",
    "cat": "PI",
    "id": "T04A_083"
  },
  {
    "q": "Which current component is constant throughout the test and reflects actual insulation quality?",
    "a": "True (conductive) leakage current (Il)",
    "opts": [
      "Capacitive current (Ic)",
      "Absorption current (Ia)",
      "True (conductive) leakage current (Il)",
      "Harmonic distortion current (Ih)"
    ],
    "exp": "Once capacitive and absorption currents decay, only true leakage current remains flowing through the insulation bulk.",
    "cat": "PI",
    "id": "T04A_084"
  },
  {
    "q": "Why is a Polarization Index (PI) test conducted over exactly 10 minutes?",
    "a": "It takes ~10 minutes for absorption current to mostly decay, revealing true leakage resistance",
    "opts": [
      "It takes ~10 minutes to charge the capacitive current fully",
      "It takes ~10 minutes for absorption current to mostly decay, revealing true leakage resistance",
      "10 minutes is the maximum run time of a Megger battery",
      "It ensures the motor windings reach operating temperature"
    ],
    "exp": "At 10 minutes, the dipoles have settled, absorption current is gone, and the reading reflects true insulation health.",
    "cat": "PI",
    "id": "T04A_085"
  },
  {
    "q": "What is the formula to calculate the Polarization Index (PI)?",
    "a": "PI = IR(10 min) / IR(1 min)",
    "opts": [
      "PI = IR(1 min) / IR(10 min)",
      "PI = IR(10 min) - IR(1 min)",
      "PI = IR(10 min) / IR(1 min)",
      "PI = IR(1 min) + IR(10 min)"
    ],
    "exp": "PI is the ratio of the 10-minute resistance reading to the 1-minute resistance reading.",
    "cat": "PI",
    "id": "T04A_086"
  },
  {
    "q": "What PI value indicates dangerous, degraded, or wet insulation?",
    "a": "< 1.0",
    "opts": [
      "> 4.0",
      "2.0 – 4.0",
      "1.0 – 2.0",
      "< 1.0"
    ],
    "exp": "A PI less than 1.0 means absorption current was negligible because water/contamination disrupted the molecular structure.",
    "cat": "PI",
    "id": "T04A_087"
  },
  {
    "q": "What is an acceptable PI value for good, healthy insulation?",
    "a": "2.0 – 4.0",
    "opts": [
      "< 1.0",
      "1.0 – 2.0",
      "2.0 – 4.0",
      "Exactly 0.5"
    ],
    "exp": "A PI between 2.0 and 4.0 means the insulation is dry and dipoles aligned well, yielding a healthy ratio.",
    "cat": "PI",
    "id": "T04A_088"
  },
  {
    "q": "If the 1-minute reading is 10 MΩ and the 10-minute reading is 30 MΩ, what is the PI and is it acceptable?",
    "a": "PI = 3.0, Good - Acceptable for service",
    "opts": [
      "PI = 0.33, Dangerous - Do not energise",
      "PI = 3.0, Good - Acceptable for service",
      "PI = 20.0, Questionable - Dry out needed",
      "PI = 40.0, Excellent"
    ],
    "exp": "30 / 10 = 3.0. A PI of 3.0 falls in the 2.0-4.0 range, which is good/healthy.",
    "cat": "PI",
    "id": "T04A_089"
  },
  {
    "q": "Why does wet insulation result in a low PI ratio?",
    "a": "Contamination disrupts the molecular structure, reducing absorption current and dropping the ratio",
    "opts": [
      "Water increases the capacitive current significantly",
      "Water acts as an excellent dielectric insulator",
      "Contamination disrupts the molecular structure, reducing absorption current and dropping the ratio",
      "Wet insulation blocks true leakage current completely"
    ],
    "exp": "Moisture stops the dipoles from aligning properly, so the slow-decay absorption current doesn't happen, flattening the curve.",
    "cat": "PI",
    "id": "T04A_090"
  },
  {
    "q": "What Specific Gravity (SG) reading indicates a fully charged lead-acid battery?",
    "a": "1.260 – 1.280",
    "opts": [
      "1.100 – 1.120",
      "~1.200",
      "1.260 – 1.280",
      "1.350 – 1.400"
    ],
    "exp": "A healthy, fully charged cell will measure between 1.260 and 1.280 SG on a hydrometer.",
    "cat": "BATT",
    "id": "T04A_091"
  },
  {
    "q": "What is the danger of leaving a battery fully discharged (SG 1.100) for more than 24-48 hours?",
    "a": "Risk of permanent sulphation and irreversible capacity loss",
    "opts": [
      "Risk of thermal runaway during the next charge",
      "Risk of permanent sulphation and irreversible capacity loss",
      "The distilled water will evaporate instantly",
      "The battery case will shatter from freezing"
    ],
    "exp": "Lead sulphate crystals harden into permanent sulphation if left discharged, destroying capacity forever.",
    "cat": "BATT",
    "id": "T04A_092"
  },
  {
    "q": "What indicates a specific cell fault (like internal short or shedding) within a battery bank?",
    "a": ">0.050 SG difference between cells in the same bank",
    "opts": [
      "All cells reading 1.200 evenly",
      "White sulphate deposits on the external terminals",
      ">0.050 SG difference between cells in the same bank",
      "SG readings rising slowly during equalising charge"
    ],
    "exp": "A variation greater than 0.050 SG flags a degraded or faulty cell compared to the rest of the bank.",
    "cat": "BATT",
    "id": "T04A_093"
  },
  {
    "q": "How is battery SG corrected for electrolyte temperature?",
    "a": "±0.007 SG per 10 °C deviation from 25 °C",
    "opts": [
      "±0.001 SG per 5 °C deviation from 20 °C",
      "±0.007 SG per 10 °C deviation from 25 °C",
      "±0.050 SG per 1 °C deviation from 0 °C",
      "±0.100 SG per 10 °C deviation from 35 °C"
    ],
    "exp": "Add 0.007 to the reading for every 10 °C above the 25 °C baseline, or subtract if colder.",
    "cat": "BATT",
    "id": "T04A_094"
  },
  {
    "q": "What fluid MUST be used to top up a battery electrolyte level?",
    "a": "Distilled water ONLY",
    "opts": [
      "Sulphuric acid ONLY",
      "Tap water",
      "Distilled water ONLY",
      "Mineral water"
    ],
    "exp": "Only distilled water is used. Tap water contains minerals that accelerate sulphation, and adding acid ruins the chemistry.",
    "cat": "BATT",
    "id": "T04A_095"
  },
  {
    "q": "When is the correct time to top up battery electrolyte with distilled water?",
    "a": "AFTER charging",
    "opts": [
      "BEFORE charging",
      "DURING the equalising phase",
      "AFTER charging",
      "When the battery is fully discharged"
    ],
    "exp": "Charging causes gas evolution which raises the liquid level. Topping up before charging causes overflow and acid spills.",
    "cat": "BATT",
    "id": "T04A_096"
  },
  {
    "q": "What solution is used to neutralize acid and wash terminal posts?",
    "a": "Dilute bicarbonate of soda solution",
    "opts": [
      "Dilute sulphuric acid",
      "Pure distilled water",
      "Dilute bicarbonate of soda solution",
      "Lithium grease"
    ],
    "exp": "Bicarbonate of soda safely neutralises spilled acid and sulphate deposits on the battery terminals.",
    "cat": "BATT",
    "id": "T04A_097"
  },
  {
    "q": "What is the typical voltage per cell used during an equalising charge?",
    "a": "2.4 V/cell",
    "opts": [
      "2.25 V/cell",
      "2.4 V/cell",
      "2.0 V/cell",
      "12.0 V/cell"
    ],
    "exp": "Equalising pushes a higher voltage (2.4 V/cell vs normal 2.25 float) to force all cells to 100% and break mild sulphation.",
    "cat": "BATT",
    "id": "T04A_098"
  },
  {
    "q": "Why must emergency generator starting batteries be kept on float charge continuously?",
    "a": "To prevent sulphation from occurring when left in a discharged state",
    "opts": [
      "To boil off excess distilled water",
      "To prevent sulphation from occurring when left in a discharged state",
      "To keep the engine block warm",
      "To power the preferential trip dashpot"
    ],
    "exp": "Float charge maintains 100% capacity and entirely prevents lead sulphate crystals from forming on the plates.",
    "cat": "BATT",
    "id": "T04A_099"
  },
  {
    "q": "What is the switchover time for an Online (Double Conversion) UPS?",
    "a": "ZERO - no switchover",
    "opts": [
      "2–4 ms",
      "4–12 ms",
      "ZERO - no switchover",
      "45 seconds"
    ],
    "exp": "Because the load is continuously fed through the battery-backed inverter, there is zero switchover delay.",
    "cat": "UPS",
    "id": "T04A_100"
  },
  {
    "q": "How does an Offline (Standby) UPS operate normally?",
    "a": "Load connected directly to mains; static switch transfers to inverter on failure",
    "opts": [
      "Load ALWAYS supplied through the inverter",
      "Load connected directly to mains; static switch transfers to inverter on failure",
      "Auto-transformer conditions mains voltage continuously",
      "Thyristor directly connects load to emergency generator"
    ],
    "exp": "Offline UPS powers the load via raw mains normally, and only switches to the inverter (with a 4-12ms delay) during failure.",
    "cat": "UPS",
    "id": "T04A_101"
  },
  {
    "q": "Which critical ship system requires an Online UPS because it cannot tolerate any power interruption?",
    "a": "ECDIS and GMDSS",
    "opts": [
      "Galley ovens",
      "Accommodation ventilation fans",
      "ECDIS and GMDSS",
      "Deck winches"
    ],
    "exp": "Navigation (ECDIS) and continuous watch (GMDSS) systems crash or lose memory if interrupted, requiring Double Conversion UPS.",
    "cat": "UPS",
    "id": "T04A_102"
  },
  {
    "q": "How long must GMDSS operate on dedicated batteries if no UPS is present? (SOLAS)",
    "a": "6 hours",
    "opts": [
      "30 minutes",
      "1 hour",
      "6 hours",
      "18 hours"
    ],
    "exp": "SOLAS requires 1 hour of backup if a UPS/charger system is attached, or 6 hours on standalone dedicated batteries.",
    "cat": "UPS",
    "id": "T04A_103"
  },
  {
    "q": "What is the function of the Static Bypass in a UPS?",
    "a": "Transfers load directly to mains automatically if the UPS inverter fails",
    "opts": [
      "Allows manual isolation of the UPS for battery replacement",
      "Converts AC directly to DC for the battery bank",
      "Transfers load directly to mains automatically if the UPS inverter fails",
      "Sheds non-essential loads during a blackout"
    ],
    "exp": "The static bypass uses a thyristor switch to instantly (microseconds) dump the load to raw mains if the inverter overloads or faults.",
    "cat": "UPS",
    "id": "T04A_104"
  },
  {
    "q": "When is the Maintenance Bypass used on a UPS?",
    "a": "Only when the UPS must be completely de-energised for servicing",
    "opts": [
      "Automatically during a blackout to start the emergency generator",
      "Only when the UPS must be completely de-energised for servicing",
      "To parallel the UPS inverter with the main generator",
      "When the shore connection is established"
    ],
    "exp": "It's a manual switch that routes mains directly to the load, fully isolating the UPS chassis safely for physical repairs.",
    "cat": "UPS",
    "id": "T04A_105"
  },
  {
    "q": "What is a key difference between Static bypass and Maintenance bypass?",
    "a": "Static is automatic for faults; Maintenance is manual for servicing",
    "opts": [
      "Static provides battery backup; Maintenance provides generator backup",
      "Static is manual for servicing; Maintenance is automatic for faults",
      "Static is automatic for faults; Maintenance is manual for servicing",
      "Static connects to the ESB; Maintenance connects to the MSB"
    ],
    "exp": "Static bypass relies on automated electronics to save the load; maintenance bypass relies on a human turning a mechanical switch.",
    "cat": "UPS",
    "id": "T04A_106"
  },
  {
    "q": "What type of UPS offers a 2-4 ms switchover time and conditions mains voltage continuously?",
    "a": "Line Interactive",
    "opts": [
      "Online (Double Conversion)",
      "Offline (Standby)",
      "Line Interactive",
      "Static Bypass Transformer"
    ],
    "exp": "Line Interactive uses an AVR transformer to condition normal mains, switching to inverter slightly faster than an Offline UPS.",
    "cat": "UPS",
    "id": "T04A_107"
  },
  {
    "q": "Why does the fire alarm panel require UPS support?",
    "a": "It must remain active at all times, even during a blackout transition",
    "opts": [
      "To provide high-voltage power to the sirens",
      "It must remain active at all times, even during a blackout transition",
      "To run the main fire pumps automatically",
      "To monitor the preferential trip relays"
    ],
    "exp": "Fire safety systems cannot lose power or reboot during the 45-second blackout gap before the emergency generator starts.",
    "cat": "UPS",
    "id": "T04A_108"
  },
  {
    "q": "What component in a starter panel provides short-circuit protection for the motor downstream?",
    "a": "Incoming fuse (HRC) or MCB",
    "opts": [
      "Thermal overload relay",
      "Main contactor",
      "Incoming fuse (HRC) or MCB",
      "Dashpot timer"
    ],
    "exp": "HRC Fuses or MCBs catch catastrophic short-circuits, while the overload relay handles smaller sustained overcurrents.",
    "cat": "MCC",
    "id": "T04A_109"
  },
  {
    "q": "What does a GREEN indicator lamp mean according to IEC 60073 standards?",
    "a": "Motor STOPPED - safe state, no hazard",
    "opts": [
      "Motor RUNNING - hazard present",
      "FAULT or ALARM condition",
      "Power available / supply healthy",
      "Motor STOPPED - safe state, no hazard"
    ],
    "exp": "Under IEC 60073, green means safe to approach (stopped), which is the opposite of traffic light logic.",
    "cat": "MCC",
    "id": "T04A_110"
  },
  {
    "q": "What does a RED indicator lamp signify on a starter panel?",
    "a": "Motor RUNNING - hazard / danger present",
    "opts": [
      "Motor STOPPED - safe state",
      "Motor RUNNING - hazard / danger present",
      "Overload trip active",
      "Control circuit fuse blown"
    ],
    "exp": "Red means danger-the machine is rotating, energized, or pressurized.",
    "cat": "MCC",
    "id": "T04A_111"
  },
  {
    "q": "What color lamp indicates a FAULT or ALARM condition on an MCC?",
    "a": "AMBER / YELLOW",
    "opts": [
      "RED",
      "WHITE",
      "BLUE",
      "AMBER / YELLOW"
    ],
    "exp": "Yellow/Amber is universally used for faults, warnings, or tripped overload status.",
    "cat": "MCC",
    "id": "T04A_112"
  },
  {
    "q": "Which component is an electromagnetic switch that actually starts and stops the motor under load?",
    "a": "Main contactor",
    "opts": [
      "Overload relay",
      "Main contactor",
      "NFB",
      "HRC fuse"
    ],
    "exp": "The main contactor closes the heavy-duty contacts using a low-voltage control coil to run the motor.",
    "cat": "MCC",
    "id": "T04A_113"
  },
  {
    "q": "What color lamp generally indicates 'Power available' or 'Supply healthy' without implying danger?",
    "a": "WHITE",
    "opts": [
      "GREEN",
      "WHITE",
      "BLUE",
      "AMBER / YELLOW"
    ],
    "exp": "White simply provides information that control voltage or main bus power is present to the panel.",
    "cat": "MCC",
    "id": "T04A_114"
  },
  {
    "q": "What is a primary advantage of a Group Starter Panel (MCC) over individual scattered starters?",
    "a": "Centralised control and easier maintenance in one location",
    "opts": [
      "It requires higher rated HRC fuses",
      "Centralised control and easier maintenance in one location",
      "It eliminates the need for thermal overload relays",
      "It prevents short circuits entirely"
    ],
    "exp": "Grouping all starters in the ECR saves deck space and allows engineers to troubleshoot without entering confined spaces.",
    "cat": "MCC",
    "id": "T04A_115"
  },
  {
    "q": "Why is control circuit voltage typically 24 V DC or 110 V AC?",
    "a": "For safe operator interface at the push buttons",
    "opts": [
      "To provide higher torque to the motor",
      "To prevent dashpot oil from leaking",
      "For safe operator interface at the push buttons",
      "Because HRC fuses only work at low voltages"
    ],
    "exp": "Low voltage keeps the human-operated push buttons safe from lethal 440V potential.",
    "cat": "MCC",
    "id": "T04A_116"
  },
  {
    "q": "What is a blue lamp typically used for on a ship's starter panel?",
    "a": "Mandatory action required / remote-auto mode active",
    "opts": [
      "Motor stopped",
      "Motor running",
      "Mandatory action required / remote-auto mode active",
      "Earth fault present"
    ],
    "exp": "Blue indicates special operational states like 'Remote Control Active' or a mandatory operator intervention.",
    "cat": "MCC",
    "id": "T04A_117"
  },
  {
    "q": "According to SOLAS II-1/Reg 42, where must the Emergency Switchboard (ESB) be located vertically?",
    "a": "Above the bulkhead deck (freeboard deck)",
    "opts": [
      "Below the main watertight subdivision deck",
      "In the main engine room bottom platform",
      "Above the bulkhead deck (freeboard deck)",
      "At the lowest possible point to maintain stability"
    ],
    "exp": "It must be above the bulkhead deck so it survives major hull flooding scenarios.",
    "cat": "ESBLOC",
    "id": "T04A_118"
  },
  {
    "q": "Where must the ESB be located in relation to machinery spaces?",
    "a": "Outside all machinery spaces",
    "opts": [
      "Inside the main engine room next to the MSB",
      "Outside all machinery spaces",
      "Inside the purifier room",
      "Adjacent to the steering gear room"
    ],
    "exp": "It must be outside the main machinery space so it remains accessible if the engine room is on fire or sealed with CO2.",
    "cat": "ESBLOC",
    "id": "T04A_119"
  },
  {
    "q": "From where must the ESB be readily accessible during an emergency?",
    "a": "The navigation bridge",
    "opts": [
      "The main engine room control room",
      "The cargo control room",
      "The navigation bridge",
      "The forward mooring station"
    ],
    "exp": "The bridge needs quick, clear access to the ESB for manual control if the engine room is inaccessible.",
    "cat": "ESBLOC",
    "id": "T04A_120"
  },
  {
    "q": "Within how many seconds must the emergency generator start and connect on a cargo ship?",
    "a": "45 seconds",
    "opts": [
      "10 seconds",
      "30 seconds",
      "45 seconds",
      "60 seconds"
    ],
    "exp": "SOLAS requires a cargo ship's emergency generator to automatically restore power within 45 seconds.",
    "cat": "ESBLOC",
    "id": "T04A_121"
  },
  {
    "q": "What connects to the ESB to bridge the gap before the emergency generator starts?",
    "a": "The Transitional Source (Battery or UPS)",
    "opts": [
      "The Shore Supply breaker",
      "The Transitional Source (Battery or UPS)",
      "The main generator ACB",
      "A hand-cranked dynamo"
    ],
    "exp": "The 30-minute transitional battery source provides instant power to essential loads during the 45-second start delay.",
    "cat": "ESBLOC",
    "id": "T04A_122"
  },
  {
    "q": "Which of the following is an essential service fed by the ESB?",
    "a": "Steering gear (one motor minimum)",
    "opts": [
      "Galley ovens",
      "Steering gear (one motor minimum)",
      "Air conditioning compressors",
      "Main engine lube oil purifiers"
    ],
    "exp": "SOLAS requires essential survival and navigation systems, like one steering gear motor, to be on the ESB.",
    "cat": "ESBLOC",
    "id": "T04A_123"
  },
  {
    "q": "Why is a Shore Connection point provided on the ESB?",
    "a": "Allows essential services to be powered in-port without running the emergency generator continuously",
    "opts": [
      "To discharge the transitional batteries safely",
      "Allows essential services to be powered in-port without running the emergency generator continuously",
      "To test the reverse power relay without load",
      "To synchronize the main generators with the shore grid"
    ],
    "exp": "During drydock or dead-ship port stays, shore power feeds the ESB to keep essential lighting and alarms alive.",
    "cat": "ESBLOC",
    "id": "T04A_124"
  },
  {
    "q": "Within how many seconds must the emergency generator start and connect on a passenger ship?",
    "a": "30 seconds",
    "opts": [
      "15 seconds",
      "30 seconds",
      "45 seconds",
      "60 seconds"
    ],
    "exp": "Passenger ships have stricter requirements (30 seconds) compared to cargo ships (45 seconds).",
    "cat": "ESBLOC",
    "id": "T04A_125"
  },
  {
    "q": "For how long must the transitional source supply essential loads without ANY generating source running?",
    "a": "30 minutes",
    "opts": [
      "5 minutes",
      "30 minutes",
      "1 hour",
      "6 hours"
    ],
    "exp": "SOLAS mandates the transitional battery bank must carry emergency lighting and comms for 30 minutes standalone.",
    "cat": "ESBLOC",
    "id": "T04A_126"
  },
  {
    "q": "What is the primary function of the anti-parallel interlock between the MSB and ESB?",
    "a": "Prevents simultaneous closing of the MSB-ESB link and emergency generator ACB without synchronisation",
    "opts": [
      "Ensures the emergency generator starts within 45 seconds",
      "Prevents simultaneous closing of the MSB-ESB link and emergency generator ACB without synchronisation",
      "Disconnects the shore supply automatically",
      "Sheds non-essential loads from the ESB"
    ],
    "exp": "Closing both together would connect unsynchronised generators, causing massive circulating fault currents.",
    "cat": "INTLK",
    "id": "T04A_127"
  },
  {
    "q": "What happens if unsynchronised main and emergency generators are paralleled?",
    "a": "A large circulating fault current flows, causing winding damage and potential explosion",
    "opts": [
      "The reverse power relay safely trips them after 5 seconds",
      "A large circulating fault current flows, causing winding damage and potential explosion",
      "The ship's voltage doubles to 880V",
      "The preferential trip sheds Stage 1 loads"
    ],
    "exp": "The huge phase and frequency difference drives tens of kiloamperes between them, destroying the windings and breakers instantly.",
    "cat": "INTLK",
    "id": "T04A_128"
  },
  {
    "q": "During normal sea operation, what is the state of the MSB–ESB link?",
    "a": "CLOSED, meaning the MSB feeds the ESB continuously",
    "opts": [
      "OPEN, meaning the ESB is dead",
      "CLOSED, meaning the MSB feeds the ESB continuously",
      "OPEN, meaning the emergency generator feeds the ESB",
      "CLOSED, meaning the shore supply feeds the ESB"
    ],
    "exp": "Normally, the MSB supplies all power to the ship, flowing through the closed bus-tie to the ESB.",
    "cat": "INTLK",
    "id": "T04A_129"
  },
  {
    "q": "During normal sea operation, what is the state of the emergency generator ACB?",
    "a": "OPEN, but field maintained at nominal voltage on standby",
    "opts": [
      "CLOSED, sharing load with the MSB",
      "OPEN, but field maintained at nominal voltage on standby",
      "CLOSED, feeding only the transitional batteries",
      "OPEN, with all field excitation removed completely"
    ],
    "exp": "The Emergency Generator runs on standby ready to close its ACB the moment the bus-tie opens during a blackout.",
    "cat": "INTLK",
    "id": "T04A_130"
  },
  {
    "q": "In the cross-interlocking logic, what holds the emergency generator ACB open normally?",
    "a": "An interlock relay confirms the MSB-ESB bus-tie breaker is closed",
    "opts": [
      "An interlock relay confirms the MSB-ESB bus-tie breaker is closed",
      "The reverse power relay prevents it",
      "The preferential trip dashpot holds it mechanically",
      "The under-voltage relay on the main generator"
    ],
    "exp": "The logic dictates: If Bus-Tie is Closed -> Hold EG ACB Open. If EG ACB is Closed -> Hold Bus-Tie Open.",
    "cat": "INTLK",
    "id": "T04A_131"
  },
  {
    "q": "What triggers the blackout sequence for the ESB?",
    "a": "Voltage monitoring relay on the ESB detects bus dead (e.g. below 70%)",
    "opts": [
      "Earth fault monitor reads below 50 kΩ",
      "Voltage monitoring relay on the ESB detects bus dead (e.g. below 70%)",
      "Overcurrent relay reaches 110%",
      "Differential relay trips on the main busbar"
    ],
    "exp": "The ESB voltage relay monitors the bus; if it drops off completely, it commands the bus-tie to open and the EG to start.",
    "cat": "INTLK",
    "id": "T04A_132"
  },
  {
    "q": "Why does the voltage monitoring relay have a slight delay (~0.5 s) before triggering a blackout sequence?",
    "a": "To avoid spurious starts on transient voltage dips from motor starting",
    "opts": [
      "To allow the preferential trip to act first",
      "To give the main generator time to cool down",
      "To avoid spurious starts on transient voltage dips from motor starting",
      "To synchronize the emergency generator with the dead bus"
    ],
    "exp": "A small 0.5s delay ensures it's a real blackout, not just a voltage sag from starting a large pump.",
    "cat": "INTLK",
    "id": "T04A_133"
  },
  {
    "q": "How many sources can feed the ESB bus bar at any one time?",
    "a": "Only ONE source",
    "opts": [
      "Two sources (MSB and Shore)",
      "Two sources (MSB and EG)",
      "Only ONE source",
      "Three sources simultaneously"
    ],
    "exp": "The core rule of the ESB interlock is that the bus-tie and EG ACB are mutually exclusive.",
    "cat": "INTLK",
    "id": "T04A_134"
  },
  {
    "q": "After an emergency generator starts during a blackout, what conditions must be met before its ACB closes?",
    "a": "Voltage builds to rated and frequency stabilises within ±5%",
    "opts": [
      "It must synchronize its phase angle with the dead MSB",
      "Voltage builds to rated and frequency stabilises within ±5%",
      "The main generator must be physically disconnected at the terminals",
      "The transitional batteries must be fully depleted"
    ],
    "exp": "The EG control panel checks that V and Hz are stable and correct before throwing the breaker onto the ESB.",
    "cat": "INTLK",
    "id": "T04A_135"
  },
  {
    "q": "What is the required fuel endurance for an emergency generator on a cargo ship?",
    "a": "18 hours",
    "opts": [
      "12 hours",
      "18 hours",
      "24 hours",
      "36 hours"
    ],
    "exp": "SOLAS dictates an 18-hour fuel supply for cargo ships (36 hours for passenger ships).",
    "cat": "EG",
    "id": "T04A_136"
  },
  {
    "q": "How many independent starting means are required for the emergency generator under SOLAS?",
    "a": "Two independent means",
    "opts": [
      "One reliable battery bank",
      "Two independent means",
      "Three independent means",
      "A single manual hand-crank"
    ],
    "exp": "SOLAS requires a primary source (e.g., battery) and a completely separate secondary source (e.g., hydraulic or second battery).",
    "cat": "EG",
    "id": "T04A_137"
  },
  {
    "q": "How many consecutive starts must the primary stored energy source (battery) provide without recharging?",
    "a": "3 consecutive starts",
    "opts": [
      "1 start",
      "3 consecutive starts",
      "6 consecutive starts",
      "10 consecutive starts"
    ],
    "exp": "The primary battery must crank the engine at least 3 times. The secondary system provides another 3.",
    "cat": "EG",
    "id": "T04A_138"
  },
  {
    "q": "How often must the emergency generator auto-start test be conducted?",
    "a": "Monthly",
    "opts": [
      "Weekly",
      "Monthly",
      "Quarterly",
      "Annually"
    ],
    "exp": "A monthly functional blackout simulation is required to ensure the auto-start works within 45s.",
    "cat": "EG",
    "id": "T04A_139"
  },
  {
    "q": "What action simulates a blackout for the monthly emergency generator test?",
    "a": "Switching off MSB supply to the ESB via the bus-tie",
    "opts": [
      "Pressing the emergency stop on the main generator",
      "Activating the reverse power relay",
      "Switching off MSB supply to the ESB via the bus-tie",
      "Disconnecting the transitional battery bank"
    ],
    "exp": "Opening the bus-tie removes voltage from the ESB, triggering the dead-bus relay and the exact automated sequence.",
    "cat": "EG",
    "id": "T04A_140"
  },
  {
    "q": "What is the requirement for the annual full load test of the emergency generator?",
    "a": "Connect calibrated load bank at rated kW for 4 hours minimum",
    "opts": [
      "Run unloaded for 4 hours",
      "Connect calibrated load bank at rated kW for 4 hours minimum",
      "Run at 50% load for 30 minutes",
      "Perform a secondary injection test on its OCR"
    ],
    "exp": "During class survey, a 4-hour full kW load bank test verifies the engine won't overheat and can carry the SOLAS load.",
    "cat": "EG",
    "id": "T04A_141"
  },
  {
    "q": "Which of the following is considered an essential service supplied by the Emergency Generator?",
    "a": "Emergency bilge pumping system",
    "opts": [
      "Main engine cooling pumps",
      "Emergency bilge pumping system",
      "Accommodation air conditioning",
      "Cargo hold cranes"
    ],
    "exp": "Survival systems like emergency bilge pumps, steering, and fire pumps must run on the EG.",
    "cat": "EG",
    "id": "T04A_142"
  },
  {
    "q": "What must the officer on watch do manually to switch over to the transitional source during a blackout?",
    "a": "No manual action required; switchover is fully automatic",
    "opts": [
      "Engage the static bypass switch",
      "Close the emergency generator ACB",
      "No manual action required; switchover is fully automatic",
      "Start the steering gear motor from the bridge panel"
    ],
    "exp": "Transitional batteries or UPS take over the instant voltage drops seamlessly to keep nav lights and comms alive.",
    "cat": "EG",
    "id": "T04A_143"
  },
  {
    "q": "What is the required fuel endurance for an emergency generator on a passenger ship?",
    "a": "36 hours",
    "opts": [
      "18 hours",
      "24 hours",
      "36 hours",
      "72 hours"
    ],
    "exp": "Passenger ships require 36 hours of emergency fuel endurance due to the complexity of evacuation.",
    "cat": "EG",
    "id": "T04A_144"
  },
  {
    "q": "What is the main purpose of the Power Management System (PMS)?",
    "a": "Automatically manages generator starting, stopping, and load sharing to prevent blackout",
    "opts": [
      "Manually isolates the ACB during maintenance",
      "Automatically manages generator starting, stopping, and load sharing to prevent blackout",
      "Detects earth faults on the 440V bus",
      "Charges the emergency generator batteries"
    ],
    "exp": "The PMS is the automatic brain that watches the kW load and ensures enough generation is always running.",
    "cat": "PMS",
    "id": "T04A_145"
  },
  {
    "q": "At what typical load threshold will the PMS auto-start an additional standby generator?",
    "a": "~80% of running generator capacity",
    "opts": [
      "~110% of running generator capacity",
      "~80% of running generator capacity",
      "~30% of running generator capacity",
      "~5-10% of running generator capacity"
    ],
    "exp": "When load hits ~80%, PMS pre-emptively starts and parallels a standby machine to avoid overload.",
    "cat": "PMS",
    "id": "T04A_146"
  },
  {
    "q": "When does the PMS automatically stop a generator?",
    "a": "When total load falls below ~30% of two generators' combined capacity",
    "opts": [
      "When total load falls below ~30% of two generators' combined capacity",
      "When the reverse power relay activates",
      "Immediately after the preferential trip sheds Stage 1",
      "When the shore connection is made"
    ],
    "exp": "To save fuel and running hours, PMS shuts down the extra unit when the load drops low enough for one machine.",
    "cat": "PMS",
    "id": "T04A_147"
  },
  {
    "q": "How does the PMS manage Reactive Load (kVAr) sharing between generators?",
    "a": "Via AVR voltage signals",
    "opts": [
      "Via governor speed signals",
      "Via AVR voltage signals",
      "By adjusting the dashpot delay",
      "By shedding non-essential loads"
    ],
    "exp": "Active load (kW) is shared via the engine governor; reactive load (kVAr) is shared via the alternator AVR.",
    "cat": "PMS",
    "id": "T04A_148"
  },
  {
    "q": "How does the PMS manage Active Load (kW) sharing between generators?",
    "a": "Via governor speed signals",
    "opts": [
      "Via governor speed signals",
      "Via AVR voltage signals",
      "Through the differential relay",
      "By isolating the neutral"
    ],
    "exp": "The PMS adjusts the fuel rack via the governor to balance the active kW load equally across machines.",
    "cat": "PMS",
    "id": "T04A_149"
  },
  {
    "q": "What is the PMS 'Start Inhibit' function used for?",
    "a": "Blocking large motor starts if running generators cannot handle the surge",
    "opts": [
      "Preventing the emergency generator from starting during a test",
      "Blocking large motor starts if running generators cannot handle the surge",
      "Stopping the reverse power relay from tripping",
      "Delaying the shore power connection"
    ],
    "exp": "Heavy Starts request permission from PMS. If spare capacity is too low, PMS blocks the start until another generator runs.",
    "cat": "PMS",
    "id": "T04A_150"
  },
  {
    "q": "What system does the PMS initiate before a generator trips on overload?",
    "a": "Preferential trip sequence",
    "opts": [
      "Reverse power sequence",
      "Under-voltage trip sequence",
      "Preferential trip sequence",
      "Earth fault alarm"
    ],
    "exp": "PMS acts as the supervisory logic, often triggering the preferential shed at 90/95% to save the bus.",
    "cat": "PMS",
    "id": "T04A_151"
  },
  {
    "q": "If generators repeatedly trip on load and the preferential trip operates, what manual action should be taken with large motors?",
    "a": "Take them to local manual control and start them one by one",
    "opts": [
      "Start them all simultaneously from the ECR",
      "Take them to local manual control and start them one by one",
      "Bypass their thermal overload relays",
      "Disconnect them from the MSB and wire them to the ESB"
    ],
    "exp": "Starting them sequentially avoids the massive combined starting current surge that crashes the bus.",
    "cat": "PMS",
    "id": "T04A_152"
  },
  {
    "q": "What changes when the operator selects 'Harbour mode' on the PMS?",
    "a": "Lower load thresholds are used and shore power integration is enabled",
    "opts": [
      "Higher thresholds are used and manoeuvring monitoring tightens",
      "Lower load thresholds are used and shore power integration is enabled",
      "The preferential trip is completely disabled",
      "The emergency generator is locked out from starting"
    ],
    "exp": "Harbour mode expects lower loads and allows integration with shore power, compared to the aggressive availability needed at sea.",
    "cat": "PMS",
    "id": "T04A_153"
  },
  {
    "q": "Why is an Isolated Neutral (IT) system used on ships instead of a Solidly Earthed (TN) system?",
    "a": "A single earth fault does not cause fault current to flow, keeping the circuit operational",
    "opts": [
      "It makes the 440V voltage completely harmless to touch",
      "A single earth fault does not cause fault current to flow, keeping the circuit operational",
      "It prevents short circuits from ever occurring",
      "It eliminates the need for an emergency generator"
    ],
    "exp": "An IT system allows essential machinery to keep running on a single ground fault, buying time to find it safely.",
    "cat": "EF",
    "id": "T04A_154"
  },
  {
    "q": "What happens if a second earth fault occurs on a different phase before the first is fixed?",
    "a": "It creates a short circuit through the hull, causing a phase-to-phase fault",
    "opts": [
      "The IRM reading increases back to infinity",
      "It creates a short circuit through the hull, causing a phase-to-phase fault",
      "The preferential trip sheds both faulted circuits",
      "The isolated neutral system absorbs the voltage spike"
    ],
    "exp": "Two earth faults on different lines complete a hard short-circuit loop directly through the steel hull.",
    "cat": "EF",
    "id": "T04A_155"
  },
  {
    "q": "When investigating an earth fault, what indicates the faulted phase on the panel?",
    "a": "The lamp for the faulted phase dims to near-off",
    "opts": [
      "The lamp for the faulted phase brightens significantly",
      "The lamp for the faulted phase dims to near-off",
      "All three lamps turn off",
      "The IRM reading spikes above 1 MΩ"
    ],
    "exp": "The phase with the fault is pulled down to earth potential (0V), so its lamp goes dark.",
    "cat": "EF",
    "id": "T04A_156"
  },
  {
    "q": "What happens to the two healthy phase lamps when one phase goes to earth?",
    "a": "They brighten significantly as they now see full line voltage to earth",
    "opts": [
      "They also dim to near-off",
      "They brighten significantly as they now see full line voltage to earth",
      "They change from green to red",
      "They flash intermittently"
    ],
    "exp": "The healthy phases shift from phase voltage (254V) to full line voltage (440V) relative to the hull, over-brightening the lamps.",
    "cat": "EF",
    "id": "T04A_157"
  },
  {
    "q": "What is the typical alarm threshold for the Insulation Resistance Monitor (IRM)?",
    "a": "Below 50 kΩ",
    "opts": [
      "Below 1 MΩ",
      "Below 50 kΩ",
      "Above 100 kΩ",
      "Above 5 MΩ"
    ],
    "exp": "The digital IRM typically alarms when global insulation resistance drops below 50 kΩ.",
    "cat": "EF",
    "id": "T04A_158"
  },
  {
    "q": "What is the standard procedure to isolate the location of an earth fault?",
    "a": "Switch off non-essential circuits one at a time and watch if the IRM reading rises",
    "opts": [
      "Trip the main generator ACB and megger the busbars immediately",
      "Switch off non-essential circuits one at a time and watch if the IRM reading rises",
      "Increase the AVR voltage until the fault burns out",
      "Switch off all essential loads first"
    ],
    "exp": "Sequentially dropping breakers isolates the branch. When the faulty branch opens, the global IRM reading jumps back to normal.",
    "cat": "EF",
    "id": "T04A_159"
  },
  {
    "q": "Which circuits MUST NOT be switched off during an earth fault hunt?",
    "a": "Essential services (steering, fire pump, GMDSS)",
    "opts": [
      "Galley ovens and laundry",
      "Accommodation lighting",
      "Deck machinery and cranes",
      "Essential services (steering, fire pump, GMDSS)"
    ],
    "exp": "You cannot drop steering or safety systems during navigation just to hunt a fault.",
    "cat": "EF",
    "id": "T04A_160"
  },
  {
    "q": "After isolating the faulty circuit via LOTO, what voltage megger should be used for a 440V system?",
    "a": "500 V DC megger",
    "opts": [
      "100 V DC megger",
      "500 V DC megger",
      "1000 V DC megger",
      "5000 V DC megger"
    ],
    "exp": "A 500V DC megger applies slightly more than system voltage to properly test the insulation strength.",
    "cat": "EF",
    "id": "T04A_161"
  },
  {
    "q": "What minimum megger reading confirms a repair is successful before re-energising?",
    "a": "≥ 1 MΩ",
    "opts": [
      "≥ 50 kΩ",
      "≥ 100 Ω",
      "≥ 1 MΩ",
      "≥ 10 MΩ"
    ],
    "exp": "1 MΩ is the minimum acceptable regulatory limit for LV equipment, though higher is preferred after repair.",
    "cat": "EF",
    "id": "T04A_162"
  },
  {
    "q": "On a balanced 440 V ship system, what voltage normally appears between one phase and earth (hull)?",
    "a": "254 V",
    "opts": [
      "440 V",
      "254 V",
      "127 V",
      "0 V"
    ],
    "exp": "Phase voltage = Line Voltage ÷ √3. 440 ÷ 1.732 ≈ 254 V between any phase and the floating neutral/hull.",
    "cat": "ISO",
    "id": "T04A_163"
  },
  {
    "q": "Why do the three earth fault indicator lamps glow at REDUCED brightness normally?",
    "a": "Each lamp sees approximately 127 V, half of the 254 V phase-to-earth voltage",
    "opts": [
      "They are 440 V rated bulbs seeing only 220 V",
      "Each lamp sees approximately 127 V, half of the 254 V phase-to-earth voltage",
      "The IRM inserts a large resistor in series with them",
      "They operate on 24 V DC control power"
    ],
    "exp": "The lamps are wired in pairs across the 254V path to the hull; 254/2 ≈ 127V per lamp makes them run dim.",
    "cat": "ISO",
    "id": "T04A_164"
  },
  {
    "q": "What voltage does the faulty phase lamp experience during a hard earth fault?",
    "a": "~0 V",
    "opts": [
      "~127 V",
      "~220 V",
      "~254 V",
      "~0 V"
    ],
    "exp": "A dead short pulls that phase to hull potential. Hull-to-Hull = 0V, so the lamp goes completely out.",
    "cat": "ISO",
    "id": "T04A_165"
  },
  {
    "q": "What voltage do the healthy phase lamps experience during a hard earth fault?",
    "a": "~220 V each",
    "opts": [
      "~127 V each",
      "~220 V each",
      "~440 V each",
      "~254 V each"
    ],
    "exp": "The healthy phases now see the full 440V line voltage to the hull. Shared across two series lamps: 440/2 = 220V.",
    "cat": "ISO",
    "id": "T04A_166"
  },
  {
    "q": "What does a line-to-line voltage measurement show on a standard ship IT system?",
    "a": "440 V",
    "opts": [
      "254 V",
      "440 V",
      "220 V",
      "127 V"
    ],
    "exp": "The phase-to-phase (line) voltage across the busbars remains 440V.",
    "cat": "ISO",
    "id": "T04A_167"
  },
  {
    "q": "In an IT system, where does the neutral point theoretically sit under balanced, no-fault conditions?",
    "a": "It floats at zero earth potential by symmetry",
    "opts": [
      "It is solidly bolted to the ship's steel frame",
      "It is connected to the shore earth via the isolation transformer",
      "It floats at zero earth potential by symmetry",
      "It operates at 254 V above earth"
    ],
    "exp": "Because of symmetrical 3-phase loading, the geometric center of the vectors sits at 0V relative to the hull, even though ungrounded.",
    "cat": "ISO",
    "id": "T04A_168"
  },
  {
    "q": "What does the abbreviation 'IT system' stand for in electrical engineering?",
    "a": "Isolated Terra / Insulated neutral",
    "opts": [
      "Integrated Transformer",
      "Isolated Terra / Insulated neutral",
      "Interlocked Tie",
      "Inverted Three-phase"
    ],
    "exp": "Terra means Earth. IT means the source is Isolated (Insulated) from Terra (Earth).",
    "cat": "ISO",
    "id": "T04A_169"
  },
  {
    "q": "How does the lamp behaviour immediately tell the engineer which phase is faulted?",
    "a": "The phase whose lamp goes dark is the faulted phase",
    "opts": [
      "The phase whose lamp flashes red is the faulted phase",
      "The phase whose lamp is brightest is the faulted phase",
      "The phase whose lamp goes dark is the faulted phase",
      "All lamps go dark, requiring a megger to check"
    ],
    "exp": "Since the short to hull removes all potential difference across that specific lamp, it turns off.",
    "cat": "ISO",
    "id": "T04A_170"
  },
  {
    "q": "Why is it mathematically true that healthy lamps see ~220V during an earth fault?",
    "a": "They divide the 440V line-to-earth fault path equally across two lamps in series",
    "opts": [
      "They divide the 440V line-to-earth fault path equally across two lamps in series",
      "The AVR boosts voltage by 1.732",
      "They draw capacitive current from the hull",
      "The EOL resistor bypasses the 127V drop"
    ],
    "exp": "With one phase pinned to earth, the other two lines are 440V above earth. Two identical lamps share 440V, yielding 220V each.",
    "cat": "ISO",
    "id": "T04A_171"
  },
  {
    "q": "What is the primary function of the EOL (End Of Line) resistor in a fire detection loop?",
    "a": "Creates a known normal circuit resistance to provide a baseline loop current",
    "opts": [
      "Detects smoke particles by varying its resistance",
      "Creates a known normal circuit resistance to provide a baseline loop current",
      "Isolates short circuits to a single zone",
      "Provides 24V power to the addressable detectors"
    ],
    "exp": "The EOL resistor allows a tiny, constant monitoring current (e.g. 5mA) to flow so the panel knows the wire isn't broken.",
    "cat": "FIRE",
    "id": "T04A_172"
  },
  {
    "q": "What current state indicates an OPEN CIRCUIT fault on a fire loop?",
    "a": "Zero current (EOL resistor disconnected)",
    "opts": [
      "Normal 5 mA current",
      "Zero current (EOL resistor disconnected)",
      "Current increases to 15-20 mA",
      "Massive uncontrolled short-circuit current"
    ],
    "exp": "A broken wire stops all current flow. The panel sees 0 mA and throws a FAULT, not a FIRE alarm.",
    "cat": "FIRE",
    "id": "T04A_173"
  },
  {
    "q": "What does a sharp increase in current, bypassing the EOL resistor entirely, indicate?",
    "a": "SHORT CIRCUIT fault",
    "opts": [
      "NORMAL healthy state",
      "FIRE ALARM state",
      "SHORT CIRCUIT fault",
      "OPEN CIRCUIT fault"
    ],
    "exp": "A wire-to-wire short causes current to skip the EOL completely, drawing huge current which the panel reads as a FAULT.",
    "cat": "FIRE",
    "id": "T04A_174"
  },
  {
    "q": "How does the panel detect an actual FIRE ALARM?",
    "a": "The detector activates and changes the loop current to a specific intermediate value (e.g. 15-20 mA)",
    "opts": [
      "The detector breaks the loop, dropping current to zero",
      "The detector shorts the loop completely",
      "The detector activates and changes the loop current to a specific intermediate value (e.g. 15-20 mA)",
      "The EOL resistor catches fire and burns out"
    ],
    "exp": "A triggered detector drops its internal resistance to draw more current than the EOL, but less than a dead short.",
    "cat": "FIRE",
    "id": "T04A_175"
  },
  {
    "q": "According to SOLAS (FSS Code Ch.9), what must the fire detection system do if a circuit wire breaks?",
    "a": "Give a 'fault' alarm that is clearly distinct from a 'fire' alarm",
    "opts": [
      "Automatically ring the general alarm",
      "Give a 'fault' alarm that is clearly distinct from a 'fire' alarm",
      "Activate the local sprinkler system",
      "Switch to the emergency generator"
    ],
    "exp": "A broken wire isn't a fire. SOLAS demands the panel distinguish between equipment failure (Fault) and an actual emergency (Fire).",
    "cat": "FIRE",
    "id": "T04A_176"
  },
  {
    "q": "What advantage do Addressable fire detection systems have over conventional EOL zones?",
    "a": "They transmit unique digital addresses to display exact detector location without zone ambiguity",
    "opts": [
      "They do not require any wiring",
      "They run entirely on battery power",
      "They transmit unique digital addresses to display exact detector location without zone ambiguity",
      "They cannot detect short circuits"
    ],
    "exp": "Addressable heads send data packets so the panel tells you 'Cabin 402 Smoke' instead of just 'Zone 3'.",
    "cat": "FIRE",
    "id": "T04A_177"
  },
  {
    "q": "In a conventional circuit, if loop current is measuring exactly the EOL baseline (e.g. 5 mA), what does the panel display?",
    "a": "HEALTHY - no alarm or fault",
    "opts": [
      "FIRE ALARM",
      "OPEN CIRCUIT FAULT",
      "HEALTHY - no alarm or fault",
      "SHORT CIRCUIT FAULT"
    ],
    "exp": "The EOL current proves the loop is intact and ready.",
    "cat": "FIRE",
    "id": "T04A_178"
  },
  {
    "q": "What component in modern loops prevents a short circuit from taking down the entire ship's fire system?",
    "a": "Short circuit isolator modules",
    "opts": [
      "HRC fuses at the panel",
      "Short circuit isolator modules",
      "The EOL resistor",
      "Bimetallic dashpots"
    ],
    "exp": "Isolators physically open the loop wire on either side of a short, isolating only that section and leaving the rest alive.",
    "cat": "FIRE",
    "id": "T04A_179"
  },
  {
    "q": "Why is an ambiguous 'no signal' bad in fire detection design?",
    "a": "Without an EOL resistor, the panel cannot tell the difference between 'standby' and a 'cut wire'",
    "opts": [
      "It triggers the CO2 release accidentally",
      "Without an EOL resistor, the panel cannot tell the difference between 'standby' and a 'cut wire'",
      "It causes the battery to drain too fast",
      "It creates excessive absorption current"
    ],
    "exp": "If 0mA meant 'Normal', a severed wire would go completely unnoticed until a fire happened and no alarm sounded.",
    "cat": "FIRE",
    "id": "T04A_180"
  },
  {
    "q": "What is the minimum required thickness for a rubber mat in front of an LV (440 V) switchboard?",
    "a": "6 mm minimum",
    "opts": [
      "2 mm minimum",
      "6 mm minimum",
      "12 mm minimum",
      "25 mm minimum"
    ],
    "exp": "Class rules require at least 6 mm thickness for 440V insulating rubber mats.",
    "cat": "SURV",
    "id": "T04A_181"
  },
  {
    "q": "What is the minimum required thickness for a rubber mat at a 6.6 kV HV switchboard?",
    "a": "12 mm",
    "opts": [
      "6 mm",
      "10 mm",
      "12 mm",
      "25 mm"
    ],
    "exp": "HV gear requires thicker (12 mm) mats for higher dielectric operator protection.",
    "cat": "SURV",
    "id": "T04A_182"
  },
  {
    "q": "Why must all copper busbar connections be tightened to a specified torque before survey?",
    "a": "Loose connections cause thermal hotspots and IR drop, leading to class findings",
    "opts": [
      "To prevent the busbars from bending during ship roll",
      "Loose connections cause thermal hotspots and IR drop, leading to class findings",
      "To improve the dielectric strength of the air gap",
      "To increase the speed of the differential relay"
    ],
    "exp": "A loose joint creates I²R heating, which can melt the copper or start a fire.",
    "cat": "SURV",
    "id": "T04A_183"
  },
  {
    "q": "What is the minimum IR test value allowed for MSB feeder circuits to earth?",
    "a": "1 MΩ",
    "opts": [
      "50 kΩ",
      "500 kΩ",
      "1 MΩ",
      "10 MΩ"
    ],
    "exp": "Using a 500V Megger, all feeders must show at least 1 MΩ to pass Class requirements.",
    "cat": "SURV",
    "id": "T04A_184"
  },
  {
    "q": "Against what document must OCR settings be verified by the surveyor?",
    "a": "The approved protection coordination study (load analysis document)",
    "opts": [
      "The ship's general arrangement plan",
      "The approved protection coordination study (load analysis document)",
      "The ECR daily log book",
      "The manufacturer's marketing brochure"
    ],
    "exp": "Settings cannot be arbitrary; they must match the engineered coordination study to ensure correct trip sequencing.",
    "cat": "SURV",
    "id": "T04A_185"
  },
  {
    "q": "What must be confirmed when testing the preferential trip sequence for survey?",
    "a": "NEVER-shed loads are NOT affected while Stage 1 drops at correct time",
    "opts": [
      "The emergency generator auto-starts immediately",
      "The bus-tie opens automatically",
      "NEVER-shed loads are NOT affected while Stage 1 drops at correct time",
      "The reverse power relay is bypassed"
    ],
    "exp": "The surveyor wants to see domestic loads drop while steering and nav lights remain solidly powered.",
    "cat": "SURV",
    "id": "T04A_186"
  },
  {
    "q": "What emergency generator record do surveyors always check for the 45-second rule?",
    "a": "Last monthly auto-start test - time to start and take load",
    "opts": [
      "Last annual full-load test",
      "Last monthly auto-start test - time to start and take load",
      "The lube oil consumption log",
      "The battery equalisation date"
    ],
    "exp": "The log must prove the engine actually hit voltage and closed its ACB within the 45-second SOLAS window.",
    "cat": "SURV",
    "id": "T04A_187"
  },
  {
    "q": "What function must the synchroscope and synchronising lamps demonstrate?",
    "a": "Dark-lamp method must function correctly and synchroscope deflects smoothly",
    "opts": [
      "Lamps must flash red when out of phase",
      "Dark-lamp method must function correctly and synchroscope deflects smoothly",
      "Synchroscope must lock at 6 o'clock position",
      "Lamps must remain constantly bright"
    ],
    "exp": "The surveyor checks that the physical synchronisation panel works perfectly for manual paralleling.",
    "cat": "SURV",
    "id": "T04A_188"
  },
  {
    "q": "Why are phase barriers checked for cracks and secure mounting during an MSB survey?",
    "a": "They insulate busbars from each other and must not vibrate loose under ship motion",
    "opts": [
      "They hold the rubber mats in place",
      "They insulate busbars from each other and must not vibrate loose under ship motion",
      "They prevent moisture from entering the generator",
      "They act as the dielectric medium replacing air"
    ],
    "exp": "FRP phase barriers prevent flashovers between live copper bars; if broken or loose, they are a major arc-flash hazard.",
    "cat": "SURV",
    "id": "T04A_189"
  },
  {
    "q": "What happens if the MSB-ESB link breaker and emergency generator breaker close at the same time?",
    "a": "A massive circulating current flows due to phase difference, destroying windings and breakers",
    "opts": [
      "The PMS balances the load equally between them",
      "A massive circulating current flows due to phase difference, destroying windings and breakers",
      "The shore power connection is triggered",
      "The UPS takes over the load smoothly"
    ],
    "exp": "Unsynchronised paralleling throws the machines completely out of phase, acting like a direct short circuit.",
    "cat": "SQNA",
    "id": "T04A_190"
  },
  {
    "q": "Why is an isolation transformer required in the shore power connection?",
    "a": "It breaks the galvanic path between the solidly earthed shore and floating ship hull to prevent corrosion",
    "opts": [
      "It steps down the voltage from 6.6 kV to 440 V",
      "It breaks the galvanic path between the solidly earthed shore and floating ship hull to prevent corrosion",
      "It filters out harmonic distortion from port cranes",
      "It converts shore 50Hz to ship 60Hz"
    ],
    "exp": "Without it, the shore's TN earth bonds to the ship's IT hull, destroying the isolated neutral system and causing severe hull corrosion.",
    "cat": "SQNA",
    "id": "T04A_191"
  },
  {
    "q": "Explain ACB arc quenching.",
    "a": "Arc forms on arcing contacts, draws into chute, ceramic plates divide it into series arcs until voltage > 440V, extinguishing at current zero",
    "opts": [
      "Vacuum bottle seals the arc, freezing the electrons instantly",
      "Arc forms on arcing contacts, draws into chute, ceramic plates divide it into series arcs until voltage > 440V, extinguishing at current zero",
      "Silica sand absorbs the arc, turning into glass",
      "NVC coil blows a magnetic field to cool the copper contacts"
    ],
    "exp": "This is the classic sequence: Arcing contacts save the main contacts, splitter plates stretch and cool the arc.",
    "cat": "SQNA",
    "id": "T04A_192"
  },
  {
    "q": "Difference between NVC and UVT?",
    "a": "NVC drops instantly on control power loss; UVT trips after 1-3s delay on bus voltage drop",
    "opts": [
      "NVC has a 3-5s delay; UVT operates instantly",
      "NVC drops instantly on control power loss; UVT trips after 1-3s delay on bus voltage drop",
      "NVC protects against overcurrent; UVT protects against reverse power",
      "There is no difference, they are identical terms"
    ],
    "exp": "NVC (No Volt Coil) is a zero-delay holding coil for the control circuit. UVT (Under Voltage Trip) monitors the main bus with a delay.",
    "cat": "SQNA",
    "id": "T04A_193"
  },
  {
    "q": "What is the Transitional Source of power?",
    "a": "A battery bank or UPS that supplies essential services for 30 minutes while the EG starts",
    "opts": [
      "A hand-cranked generator on the bridge",
      "A battery bank or UPS that supplies essential services for 30 minutes while the EG starts",
      "The connection to the port's shore grid",
      "A small steam turbine kept on standby"
    ],
    "exp": "It bridges the 45-second blackout gap automatically so navigation lights and comms don't die.",
    "cat": "SQNA",
    "id": "T04A_194"
  },
  {
    "q": "How do you safely isolate an ACB?",
    "a": "PTW -> Open -> Rack to ISOLATED -> LOTO padlock -> Test dead both sides -> Apply earth clamps",
    "opts": [
      "Rack to TEST -> Megger -> Apply silicone grease",
      "Trip bus-tie -> Disconnect NVC -> Rack to SERVICE",
      "PTW -> Open -> Rack to ISOLATED -> LOTO padlock -> Test dead both sides -> Apply earth clamps",
      "Close shore supply -> Rack to ISOLATED -> Remove arc chutes"
    ],
    "exp": "This is the standard 7-step LOTO procedure for high-power switchgear.",
    "cat": "SQNA",
    "id": "T04A_195"
  },
  {
    "q": "What does IDMT mean?",
    "a": "Inverse Definite Minimum Time - trips faster for higher multiples of set current",
    "opts": [
      "Instantaneous Direct Motor Trip - stops motors instantly",
      "Inverse Definite Minimum Time - trips faster for higher multiples of set current",
      "Internal Dielectric Measurement Test - tests insulation strength",
      "Isolated Distribution Main Transformer - steps down voltage"
    ],
    "exp": "IDMT provides graded selectivity: slow for small overloads, extremely fast for heavy short circuits.",
    "cat": "SQNA",
    "id": "T04A_196"
  },
  {
    "q": "GMDSS battery requirements?",
    "a": "1 hour (with UPS) or 6 hours (no UPS), dedicated battery, annual load test",
    "opts": [
      "30 minutes, shared with emergency lighting",
      "18 hours for cargo, 36 hours for passenger",
      "1 hour (with UPS) or 6 hours (no UPS), dedicated battery, annual load test",
      "No battery required if emergency generator auto-starts in 45s"
    ],
    "exp": "SOLAS Reg IV strictly requires independent, dedicated GMDSS batteries capable of long stand-alone operation.",
    "cat": "SQNA",
    "id": "T04A_197"
  },
  {
    "q": "Why do we wait 10 minutes for a PI test?",
    "a": "To allow the absorption current from molecular dipole alignment to fully decay",
    "opts": [
      "To charge the capacitive plates to 500V",
      "To allow the true leakage current to build up to maximum",
      "To allow the absorption current from molecular dipole alignment to fully decay",
      "To warm up the Megger instrument"
    ],
    "exp": "Absorption current artificially depresses the 1-minute reading. At 10 minutes, only the true leakage remains.",
    "cat": "SQNA",
    "id": "T04A_198"
  },
  {
    "q": "Quick Revision: What is the setting and delay for a Reverse Power relay?",
    "a": "5–10% rated kW, 3–5 s delay",
    "opts": [
      "90% rated kW, 5-10 s delay",
      "5–10% rated kW, 3–5 s delay",
      "110% rated current, <100 ms delay",
      "85% rated voltage, 1-3 s delay"
    ],
    "exp": "5-10% catches motoring early. 3-5s delay ignores synchronising transients.",
    "cat": "REV",
    "id": "T04A_199"
  },
  {
    "q": "Quick Revision: What is the sequential load restore logic after a blackout?",
    "a": "Cooling water → LO → fuel → boiler → air compressor → HVAC, with delays to prevent surge",
    "opts": [
      "HVAC → air compressor → boiler → fuel → LO → cooling water",
      "Cooling water → LO → fuel → boiler → air compressor → HVAC, with delays to prevent surge",
      "All motors started simultaneously by the PMS",
      "Emergency lighting → GMDSS → steering → nav lights"
    ],
    "exp": "Essential engine support systems are started first, separated by 30s-2m delays to prevent overloading the generator.",
    "cat": "REV",
    "id": "T04A_200"
  },
  {
    "q": "Quick Revision: What are the three states detected by a Fire Detector EOL circuit?",
    "a": "Normal (5mA), Fire (15-20mA), Fault (Zero or Short Circuit)",
    "opts": [
      "Green, Yellow, Red",
      "Stage 1, Stage 2, Emergency",
      "Normal (5mA), Fire (15-20mA), Fault (Zero or Short Circuit)",
      "Capacitive, Absorption, Leakage"
    ],
    "exp": "The EOL allows the panel to distinguish perfectly between a healthy standby loop, an active detector, and a broken/shorted wire.",
    "cat": "REV",
    "id": "T04A_201"
  },
  {
    "q": "Quick Revision: Where is a Differential Relay primarily fitted?",
    "a": "Large generators (>500 kVA), transformers, busbars",
    "opts": [
      "Small motor starters",
      "Large generators (>500 kVA), transformers, busbars",
      "Lighting distribution panels",
      "Galley supply breakers"
    ],
    "exp": "They protect massive, critical components by detecting tiny internal fault leakage instantly.",
    "cat": "REV",
    "id": "T04A_202"
  },
  {
    "q": "Quick Revision: What is the Breaking Capacity of an HRC fuse?",
    "a": "80–100 kA",
    "opts": [
      "2-3 kV/mm",
      "1600 A",
      "80–100 kA",
      "254 V"
    ],
    "exp": "HRC fuses can safely interrupt the massive short-circuit currents (up to 100 kA) found on main switchboards.",
    "cat": "REV",
    "id": "T04A_203"
  },
  {
    "q": "Quick Revision: What is the phase-to-earth voltage on a 440 V IT system?",
    "a": "254 V",
    "opts": [
      "440 V",
      "220 V",
      "127 V",
      "254 V"
    ],
    "exp": "440 V divided by the square root of 3 equals 254 V from phase to the floating neutral/hull.",
    "cat": "REV",
    "id": "T04A_204"
  },
  {
    "q": "Quick Revision: How fast must the emergency generator auto-start on a cargo ship?",
    "a": "45 s",
    "opts": [
      "30 s",
      "45 s",
      "60 s",
      "10 s"
    ],
    "exp": "Cargo ships have a 45-second SOLAS requirement (passenger ships are 30s).",
    "cat": "REV",
    "id": "T04A_205"
  },
  {
    "q": "Quick Revision: What indicates a good PI test result?",
    "a": "≥ 2.0",
    "opts": [
      "< 1.0",
      "1.0 - 1.5",
      "≥ 2.0",
      "Exactly 0"
    ],
    "exp": "A ratio of 2.0 or higher proves the absorption current was strong, meaning the insulation is dry and healthy.",
    "cat": "REV",
    "id": "T04A_206"
  },
  {
    "q": "Quick Revision: How does a Preferential trip relay create its delay?",
    "a": "Dashpot with an oil/air piston and adjustable needle valve",
    "opts": [
      "Bimetallic thermal strip",
      "Dashpot with an oil/air piston and adjustable needle valve",
      "Digital microprocessor counter",
      "Capacitor discharge timer"
    ],
    "exp": "The mechanical dashpot restricts fluid flow to slow the relay armature, preventing trips on transient motor starts.",
    "cat": "REV",
    "id": "T04A_207"
  }

]);

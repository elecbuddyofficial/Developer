window.loadQuizzes("F24_MarineElec", [

  /* ═══════════ POWER SYSTEM OVERVIEW ═══════════ */
  {
    "q": "What produces the ship's three phase AC power at the start of the generation chain?",
    "a": "Diesel, steam or gas turbine driven alternators",
    "opts": [
      "Diesel, steam or gas turbine driven alternators",
      "The emergency battery bank",
      "A shore-side transformer",
      "The main switchboard busbars themselves"
    ],
    "exp": "One or more diesel (or on some vessels steam or gas turbine driven) alternators generate the three phase AC power. The battery bank is only a transitional emergency source, and the switchboard distributes power rather than generating it.",
    "cat": "OVERVIEW",
    "id": "F24_001"
  },
  {
    "q": "On a conventional vessel, at what voltage is power typically generated?",
    "a": "440 V",
    "opts": ["440 V", "1000 V", "6.6 kV", "24 V"],
    "exp": "A conventional vessel typically generates at 440 V three phase. Larger high power vessels, particularly those with electric propulsion, generate at high voltage instead, covered separately in this module.",
    "cat": "OVERVIEW",
    "id": "F24_002"
  },
  {
    "q": "What does the AVR on an alternator control, as distinct from the governor?",
    "a": "Excitation and output voltage",
    "opts": [
      "Excitation and output voltage",
      "Prime mover speed and hence frequency",
      "Circuit breaker tripping",
      "Load sharing between switchboards"
    ],
    "exp": "The AVR (automatic voltage regulator) controls excitation and therefore output voltage. The governor is the one controlling prime mover speed and hence frequency. Both are needed before two generators can be paralleled.",
    "cat": "OVERVIEW",
    "id": "F24_003"
  },
  {
    "q": "What is the purpose of a bus tie breaker on the main switchboard?",
    "a": "It splits the busbars into sections so a fault or maintenance on one section does not necessarily black out the other",
    "opts": [
      "It splits the busbars into sections so a fault or maintenance on one section does not necessarily black out the other",
      "It automatically starts the emergency generator on loss of main power",
      "It matches shore supply frequency to the ship's system",
      "It converts AC output to DC for battery charging"
      ],
    "exp": "The bus tie breaker joins or separates busbar sections, so an issue on one section can be isolated without losing the whole board. Starting the emergency generator and converting AC to DC are unrelated functions handled elsewhere.",
    "cat": "OVERVIEW",
    "id": "F24_004"
  },
  {
    "q": "Before closing a generator breaker to parallel with a running system, what three quantities must be matched?",
    "a": "Voltage, frequency and phase sequence",
    "opts": [
      "Voltage, frequency and phase sequence",
      "Current, power factor and kVA rating",
      "Insulation resistance, earth continuity and polarity",
      "Speed, torque and excitation current only"
    ],
    "exp": "Generators (and shore supply, by the same principle) must be matched on voltage, frequency and phase sequence before the breaker closes. Load is then shared afterwards by adjusting governor and AVR settings.",
    "cat": "OVERVIEW",
    "id": "F24_005"
  },
  {
    "q": "How does the emergency switchboard normally relate to the main switchboard?",
    "a": "It is normally fed from the main switchboard but backed by its own dedicated emergency generator, able to stand alone",
    "opts": [
      "It is normally fed from the main switchboard but backed by its own dedicated emergency generator, able to stand alone",
      "It is permanently disconnected from the main switchboard at all times",
      "It only operates when connected to shore power",
      "It shares the same generator as the main switchboard but a separate set of busbars"
    ],
    "exp": "The emergency board is a parallel path: normally fed from the main board, but with its own independent generator so it can stand alone entirely if the main system is lost, connected through a link designed to open automatically on failure.",
    "cat": "OVERVIEW",
    "id": "F24_006"
  },

  /* ═══════════ EMERGENCY SOURCE OF POWER ═══════════ */
  {
    "q": "Which SOLAS chapter governs the emergency source of electrical power?",
    "a": "Chapter II-1, Part D",
    "opts": ["Chapter II-1, Part D", "Chapter III", "Chapter V", "Chapter II-2, Part A"],
    "exp": "The emergency source of power requirements are set out in SOLAS Chapter II-1, Part D, and this is one of the most heavily tested areas of marine electrical knowledge at oral exam level.",
    "cat": "EMERGENCY",
    "id": "F24_007"
  },
  {
    "q": "What is the minimum duration SOLAS requires the emergency source of power to supply essential services on a cargo ship?",
    "a": "18 hours",
    "opts": ["18 hours", "36 hours", "6 hours", "45 seconds"],
    "exp": "Cargo ships require a minimum of 18 hours. Passenger ships require 36 hours because of their larger, more vulnerable population needing a longer evacuation and rescue window.",
    "cat": "EMERGENCY",
    "id": "F24_008"
  },
  {
    "q": "What is the minimum duration SOLAS requires the emergency source of power to supply essential services on a passenger ship?",
    "a": "36 hours",
    "opts": ["36 hours", "18 hours", "24 hours", "12 hours"],
    "exp": "Passenger ships require 36 hours, roughly double the cargo ship requirement, built around a much larger, more vulnerable population needing a longer window for evacuation and rescue.",
    "cat": "EMERGENCY",
    "id": "F24_009"
  },
  {
    "q": "Why is the passenger ship emergency power duration roughly double that of a cargo ship?",
    "a": "A passenger ship has a much larger, more vulnerable population that needs a longer window for evacuation and rescue",
    "opts": [
      "A passenger ship has a much larger, more vulnerable population that needs a longer window for evacuation and rescue",
      "Passenger ship emergency generators are inherently less reliable",
      "Passenger ships are not permitted to carry a transitional battery supply",
      "Cargo ships are required to reach port faster in an emergency"
    ],
    "exp": "The duration scales with how long it realistically takes to either fix the problem or get everyone off safely. A far larger, more vulnerable population on a passenger ship needs a longer window, which is why its duration is roughly double a cargo ship's.",
    "cat": "EMERGENCY",
    "id": "F24_010"
  },
  {
    "q": "Within what time must the emergency generator start automatically and be capable of supplying its full rated load?",
    "a": "45 seconds",
    "opts": ["45 seconds", "5 minutes", "30 minutes", "18 hours"],
    "exp": "The emergency generator must start automatically and be able to supply full rated load within 45 seconds of loss of the main supply. Because this cannot always be guaranteed under all conditions, a transitional battery source bridges any gap.",
    "cat": "EMERGENCY",
    "id": "F24_011"
  },
  {
    "q": "What bridges the gap before the emergency generator reaches full load, and for roughly how long?",
    "a": "A transitional battery bank, typically for at least 30 minutes",
    "opts": [
      "A transitional battery bank, typically for at least 30 minutes",
      "A second emergency generator running continuously on standby",
      "The shore supply connection, if alongside",
      "The main generator, kept running on minimal load"
    ],
    "exp": "A battery bank sized to carry emergency lighting and essential alarm and communication loads bridges the gap, typically for at least 30 minutes, ensuring there is no period with no power at all to those services.",
    "cat": "EMERGENCY",
    "id": "F24_012"
  },
  {
    "q": "Where must the emergency generator and its switchboard be located?",
    "a": "Above the bulkhead deck and outside the machinery space boundaries, readily accessible from the open deck",
    "opts": [
      "Above the bulkhead deck and outside the machinery space boundaries, readily accessible from the open deck",
      "Immediately adjacent to the main switchboard for fast changeover",
      "Below the waterline, alongside the main engine room",
      "Inside the category A machinery space casing, for easy maintenance access"
    ],
    "exp": "SOLAS requires the emergency source to sit above the bulkhead deck and outside the boundaries of machinery spaces and category A machinery space casings, not adjacent to the machinery spaces or the main source of power.",
    "cat": "EMERGENCY",
    "id": "F24_013"
  },
  {
    "q": "Why must the emergency generator not be located in or next to the main machinery space?",
    "a": "Fire or flooding in the main machinery space is the single most likely event to disable the main source, and a nearby emergency source would often be disabled by the same casualty",
    "opts": [
      "Fire or flooding in the main machinery space is the single most likely event to disable the main source, and a nearby emergency source would often be disabled by the same casualty",
      "Machinery spaces are too small to fit an additional generator",
      "Classification societies simply require it as an arbitrary formality",
      "The main machinery space lacks sufficient ventilation for a second generator"
    ],
    "exp": "Independence of location is the whole point, not a formality. If the emergency source sat in or next to the main machinery space, the one casualty most likely to knock out the main source would very often take the emergency source out with it too.",
    "cat": "EMERGENCY",
    "id": "F24_014"
  },
  {
    "q": "Which of the following is NOT listed among the essential services the emergency source must supply?",
    "a": "Cargo hold refrigeration compressors",
    "opts": [
      "Cargo hold refrigeration compressors",
      "Emergency lighting throughout the vessel",
      "Fire detection and alarm systems",
      "Steering gear where the main supply to it is lost"
    ],
    "exp": "Essential services include emergency lighting, navigation lights and equipment, internal communications and alarms, fire detection and alarm systems, fire and emergency pumps, and steering gear. Cargo refrigeration compressors are not on the SOLAS essential services list.",
    "cat": "EMERGENCY",
    "id": "F24_015"
  },
  {
    "q": "Loads such as steering gear, watertight door operation and emergency lift movement need to be supplied for how long, and why?",
    "a": "Only around half an hour, because these are heavy demand loads rather than continuous ones",
    "opts": [
      "Only around half an hour, because these are heavy demand loads rather than continuous ones",
      "The full 18 or 36 hour duration, the same as lighting",
      "Only 45 seconds, matching the generator start time",
      "They do not need to be backed by the emergency source at all"
    ],
    "exp": "These loads have a heavier but shorter duty and only need supply for a much shorter period, commonly around half an hour, since they are demand loads rather than continuous ones like lighting or communications.",
    "cat": "EMERGENCY",
    "id": "F24_016"
  },

  /* ═══════════ SHORE SUPPLY ═══════════ */
  {
    "q": "Why do ships connect to shore power when alongside, rather than continuing to run a main generator?",
    "a": "Running a main generator purely to hold hotel and essential loads is wasteful, noisy and adds running hours for no propulsion benefit",
    "opts": [
      "Running a main generator purely to hold hotel and essential loads is wasteful, noisy and adds running hours for no propulsion benefit",
      "Ship generators cannot legally run while alongside in most ports",
      "Shore supply is always at a lower voltage than the ship's own system",
      "Marine generators are not designed to run at low load"
    ],
    "exp": "Running a main generator just for hotel and essential loads wastes fuel, is noisy, and adds running hours with no propulsion benefit, so ships connect to shore power instead when practical.",
    "cat": "SHORE",
    "id": "F24_017"
  },
  {
    "q": "What three things must be checked or matched before a shore supply connection is closed onto the ship's board?",
    "a": "Voltage, frequency and phase sequence",
    "opts": [
      "Voltage, frequency and phase sequence",
      "Power factor, kVA rating and cable size",
      "Insulation resistance, hull potential and battery charge",
      "Ambient temperature, humidity and salinity"
    ],
    "exp": "Shore supply is an independent source with its own voltage, frequency and phase sequence, and all three must be matched or converted before the connection is closed, in the same way two generators are matched before paralleling.",
    "cat": "SHORE",
    "id": "F24_018"
  },
  {
    "q": "What happens if the shore supply phase sequence does not match the ship's own, and the connection is made anyway?",
    "a": "Motors run in reverse the instant they start, which is genuinely dangerous on equipment such as a steering pump or thruster",
    "opts": [
      "Motors run in reverse the instant they start, which is genuinely dangerous on equipment such as a steering pump or thruster",
      "The shore breaker simply fails to close and no harm results",
      "Only the lighting circuits are affected, motors are unaffected by phase sequence",
      "The ship's frequency drifts slightly until adjusted"
    ],
    "exp": "A reversed phase sequence is a classic hazard: connected motors run in reverse the instant they start. On a steering pump or thruster that is genuinely dangerous, not just inconvenient, which is why phase sequence is always confirmed before closing the shore breaker.",
    "cat": "SHORE",
    "id": "F24_019"
  },
  {
    "q": "What is needed if a ship running 60 Hz calls at a port supplying 50 Hz shore power?",
    "a": "A frequency converter routed into the shore connection",
    "opts": [
      "A frequency converter routed into the shore connection",
      "A step-up transformer only, frequency is not affected by shore connections",
      "Nothing extra is needed, ship equipment automatically adapts to any frequency",
      "The ship's own generators must be run in parallel with the shore supply permanently"
    ],
    "exp": "A frequency mismatch between the ship and the shore grid requires the shore connection to be routed through a frequency converter, otherwise motors, governors and frequency sensitive equipment onboard would see the wrong frequency.",
    "cat": "SHORE",
    "id": "F24_020"
  },
  {
    "q": "What are the two ways a shore supply can be brought onto the ship's switchboard?",
    "a": "The ship's generators are shut down first so the board is dead, or the shore supply is synchronised onto the still-live board the same way a generator is paralleled",
    "opts": [
      "The ship's generators are shut down first so the board is dead, or the shore supply is synchronised onto the still-live board the same way a generator is paralleled",
      "Shore supply is always connected directly to a live board without any checks",
      "The ship must always be fully blacked out for at least an hour before shore connection",
      "Shore supply can only ever be connected to a dead board, synchronising is never used"
    ],
    "exp": "Depending on the installation, either a dead-bus transfer is used (generators shut down first) or the shore supply is synchronised onto the still-live board the same way a generator is paralleled, before the ship's generator is taken off load.",
    "cat": "SHORE",
    "id": "F24_021"
  },
  {
    "q": "What must never happen when connecting shore power?",
    "a": "Shore supply and a running generator should never be connected to the same live board out of synchronism",
    "opts": [
      "Shore supply and a running generator should never be connected to the same live board out of synchronism",
      "The shore cable should never be checked for polarity before energising",
      "The ship's generator breaker should never be opened before shore connection",
      "Shore supply should never be used to supply navigation equipment"
    ],
    "exp": "At no point should shore supply and a running generator be connected to the same live board out of synchronism, exactly the same hazard as closing a generator breaker out of synchronism onto a live board.",
    "cat": "SHORE",
    "id": "F24_022"
  },
  {
    "q": "What is checked on the shore cable and connection box before it is energised?",
    "a": "Polarity, earthing continuity and insulation resistance",
    "opts": [
      "Polarity, earthing continuity and insulation resistance",
      "Only the physical condition of the cable jacket",
      "The cable's manufacturing date and country of origin",
      "Ambient dockside temperature and humidity"
    ],
    "exp": "The shore cable and connection box are checked for correct polarity, earthing continuity and insulation resistance before energising, brought in through its own breaker coordinated against the ship's own switchboard protection.",
    "cat": "SHORE",
    "id": "F24_023"
  },
  {
    "q": "The process of matching and closing a shore supply connection is most similar to which other shipboard procedure?",
    "a": "Paralleling two generators on the switchboard",
    "opts": [
      "Paralleling two generators on the switchboard",
      "Insulation resistance testing of a motor",
      "Starting the emergency generator automatically",
      "Applying portable earthing leads to isolated HV equipment"
    ],
    "exp": "Shore power is an outside source being married onto the ship's system, and it must be matched on voltage, frequency and phase sequence before closing the breaker, in exactly the same way as paralleling a generator onto a live board.",
    "cat": "SHORE",
    "id": "F24_024"
  },

  /* ═══════════ MARINE HV SYSTEMS ═══════════ */
  {
    "q": "Under IEC 60092, at what voltage is the boundary between low voltage and high voltage drawn on ships?",
    "a": "1000 V AC",
    "opts": ["1000 V AC", "440 V AC", "6600 V AC", "250 V AC"],
    "exp": "The LV/HV boundary is drawn at 1000 V AC under IEC 60092. This threshold, and the P = VI reasoning for why higher voltage suits large loads, is covered in full in F13.",
    "cat": "HV",
    "id": "F24_025"
  },
  {
    "q": "Why do larger vessels such as cruise ships or those with electric propulsion generate and distribute at high voltage?",
    "a": "Individual loads run into several megawatts, and at low voltage the required current would demand impractically large cable and switchgear",
    "opts": [
      "Individual loads run into several megawatts, and at low voltage the required current would demand impractically large cable and switchgear",
      "High voltage equipment is cheaper to purchase and install than low voltage equipment",
      "Classification societies require all vessels over a certain length to use high voltage",
      "High voltage systems require no special safety precautions, simplifying design"
    ],
    "exp": "The benefit of HV scales with load. Vessels with loads running into several megawatts, such as those with podded or thruster electric propulsion, would need impractically large LV cable and switchgear, so they generate and distribute at HV instead, stepping down locally where needed.",
    "cat": "HV",
    "id": "F24_026"
  },
  {
    "q": "Which of the following vessel types is most likely to use a marine HV electrical system?",
    "a": "A large LNG carrier or drillship with electric propulsion",
    "opts": [
      "A large LNG carrier or drillship with electric propulsion",
      "A small coastal fishing vessel",
      "A harbour tugboat with a single small auxiliary generator",
      "A vessel with only a few hundred kW of hotel and auxiliary load"
    ],
    "exp": "HV is used where the benefit outweighs the extra cost, weight and safety burden, typically on cruise ships, large LNG carriers, drillships and vessels with electric propulsion running into several megawatts. A vessel with only a few hundred kW load has little to gain.",
    "cat": "HV",
    "id": "F24_027"
  },
  {
    "q": "Why is HV switchgear and cabling treated with a stricter formal discipline than LV equipment?",
    "a": "HV arc flash energy is much higher, and HV can jump a gap that would be entirely safe at LV",
    "opts": [
      "HV arc flash energy is much higher, and HV can jump a gap that would be entirely safe at LV",
      "HV cables are physically larger and simply harder to route",
      "HV equipment is more expensive to replace if damaged",
      "HV systems are always installed in flammable atmosphere zones"
    ],
    "exp": "The consequences of an error on HV equipment are far more severe: arc flash energy is much higher, and HV can jump a gap that would be entirely safe at LV, which is why a formal permit to work discipline is applied.",
    "cat": "HV",
    "id": "F24_028"
  },
  {
    "q": "What is a permit to work, in the context of HV maintenance?",
    "a": "A formal, signed document authorising specific named personnel to work on specific identified HV equipment, issued only after isolation is proven",
    "opts": [
      "A formal, signed document authorising specific named personnel to work on specific identified HV equipment, issued only after isolation is proven",
      "A verbal agreement between the ETO and the chief engineer",
      "A general certificate allowing any crew member to work on any electrical equipment",
      "A maintenance schedule listing when HV equipment should next be serviced"
    ],
    "exp": "A permit to work is a formal, signed document authorising specific named personnel to work on specific identified HV equipment, issued only after the equipment has been proven isolated. No HV work proceeds without one.",
    "cat": "HV",
    "id": "F24_029"
  },
  {
    "q": "What actually proves that HV equipment is dead before work begins?",
    "a": "Testing it with a correctly rated HV voltage indicator immediately before work starts",
    "opts": [
      "Testing it with a correctly rated HV voltage indicator immediately before work starts",
      "Seeing the isolated status displayed on the switchboard mimic panel",
      "Waiting 24 hours after the breaker is opened",
      "Confirming the breaker handle is in the open position"
    ],
    "exp": "Isolation shown on a mimic panel is not itself proof. The physical test with a correctly rated HV voltage indicator, done immediately before work starts, is what actually counts as proving dead.",
    "cat": "HV",
    "id": "F24_030"
  },
  {
    "q": "Why are portable earthing leads applied to HV conductors after they are proven dead?",
    "a": "They protect against residual charge and accidental re-energising, because a solid earth connection blows a fuse or trips a breaker immediately rather than letting voltage reach the person working",
    "opts": [
      "They protect against residual charge and accidental re-energising, because a solid earth connection blows a fuse or trips a breaker immediately rather than letting voltage reach the person working",
      "They are only required for cosmetic compliance with class survey checklists",
      "They increase the insulation resistance of the isolated equipment",
      "They allow the equipment to be tested for correct phase rotation"
    ],
    "exp": "Earthing down after proving dead protects against residual charge and against accidental re-energising: if voltage were somehow reapplied, a solid earth connection trips protection immediately rather than letting it reach the person working on the equipment.",
    "cat": "HV",
    "id": "F24_031"
  },
  {
    "q": "Who is permitted to open HV panels on board?",
    "a": "Only personnel specifically trained and authorised for HV work",
    "opts": [
      "Only personnel specifically trained and authorised for HV work",
      "Any qualified ETO, regardless of specific HV training",
      "Any deck or engine officer with a valid certificate of competency",
      "Any crew member, provided the master gives verbal permission"
    ],
    "exp": "Restricted access is a stricter line than LV work: only personnel specifically trained and authorised for HV work may open HV panels at all, removing judgement calls from individuals under time pressure.",
    "cat": "HV",
    "id": "F24_032"
  },

  /* ═══════════ INSULATED VS EARTHED NEUTRAL ═══════════ */
  {
    "q": "In an insulated (IT) neutral system, how is the neutral point connected to earth?",
    "a": "Not connected to earth, or connected only through a very high impedance",
    "opts": [
      "Not connected to earth, or connected only through a very high impedance",
      "Solidly connected to earth at the source",
      "Connected to earth through the hull only during a fault",
      "Connected to earth via the shore power cable"
    ],
    "exp": "In an insulated (IT) system the neutral point is not connected to earth, or only through a very high impedance, which is what limits the current on a first earth fault to a small leakage value.",
    "cat": "NEUTRAL",
    "id": "F24_033"
  },
  {
    "q": "In an earthed (TN) neutral system, how is the neutral point connected to earth?",
    "a": "Solidly connected to earth, or through a low, deliberately designed impedance, at the source",
    "opts": [
      "Solidly connected to earth, or through a low, deliberately designed impedance, at the source",
      "Not connected to earth at all under any condition",
      "Connected only through the ship's insulation monitoring device",
      "Connected to earth only during shore power connection"
    ],
    "exp": "A TN system has its neutral solidly earthed, or earthed through a low, deliberately designed impedance, at the source. This is the arrangement standard in shore utility and most industrial LV installations ashore.",
    "cat": "NEUTRAL",
    "id": "F24_034"
  },
  {
    "q": "What happens on a first earth fault on an insulated (IT) neutral system?",
    "a": "A small leakage current flows through the system's natural capacitance to earth, alarmed by an insulation monitoring device, and the system keeps running",
    "opts": [
      "A small leakage current flows through the system's natural capacitance to earth, alarmed by an insulation monitoring device, and the system keeps running",
      "A substantial fault current immediately trips the affected circuit's protection",
      "The whole switchboard blacks out instantly",
      "The generator's AVR automatically shuts down to prevent damage"
    ],
    "exp": "On an IT system a first earth fault produces only a small leakage current through the system's natural capacitance to earth. It is alarmed by an insulation monitoring device but the system keeps running, unlike a TN system where it would trip immediately.",
    "cat": "NEUTRAL",
    "id": "F24_035"
  },
  {
    "q": "What happens on an earth fault on an earthed (TN) neutral system?",
    "a": "A substantial fault current flows that operates protection and disconnects the faulted circuit essentially immediately",
    "opts": [
      "A substantial fault current flows that operates protection and disconnects the faulted circuit essentially immediately",
      "Only a small leakage current flows and no protection operates",
      "The fault is simply alarmed with no automatic disconnection",
      "Nothing happens until a second fault develops"
    ],
    "exp": "On a TN system the low impedance earth connection means an earth fault produces a substantial fault current that trips protection and disconnects the faulted circuit essentially immediately, unlike the small leakage current on an IT system.",
    "cat": "NEUTRAL",
    "id": "F24_036"
  },
  {
    "q": "Why does marine LV distribution traditionally favour an insulated neutral, unlike most shore installations?",
    "a": "A ship is its own entire electrical grid with no wider network to fall back on, and essential services must not be lost the moment a single fault develops",
    "opts": [
      "A ship is its own entire electrical grid with no wider network to fall back on, and essential services must not be lost the moment a single fault develops",
      "Insulated neutral systems are cheaper to install than earthed systems",
      "Marine cables cannot physically support an earthed neutral connection",
      "Classification societies simply prefer the insulated arrangement for historical reasons only"
    ],
    "exp": "Ashore, a tripped circuit is rarely serious because the wider grid is unaffected and help is nearby. At sea there is no wider network, and essential services like steering, navigation and fire pumps may be needed continuously, so a single fault must not remove power from them.",
    "cat": "NEUTRAL",
    "id": "F24_037"
  },
  {
    "q": "What must happen when an earth fault alarm is raised on an insulated neutral system?",
    "a": "It must be investigated and cleared promptly, not left standing",
    "opts": [
      "It must be investigated and cleared promptly, not left standing",
      "It can be safely ignored indefinitely since the system keeps running",
      "The insulation monitoring device should be switched off to stop the alarm",
      "The affected circuit should be immediately and permanently disconnected"
    ],
    "exp": "A first fault does not trip anything, but leaving it unresolved is dangerous: a second, independent earth fault on a different phase creates a genuine low impedance path and will operate protection, so the first alarm must be found and cleared promptly.",
    "cat": "NEUTRAL",
    "id": "F24_038"
  },
  {
    "q": "What happens if a second, independent earth fault develops on a different phase while a first fault is still present on an IT system?",
    "a": "It creates a genuine low impedance path and will operate protection",
    "opts": [
      "It creates a genuine low impedance path and will operate protection",
      "It has no additional effect since the system already has one fault",
      "It automatically clears the first fault",
      "It only raises a second, separate alarm with no fault current"
    ],
    "exp": "A single fault on an IT system produces only a small leakage current, but a second independent fault on a different phase creates a real low impedance path between the two faults and will operate protection, which is why the first fault must be cleared promptly.",
    "cat": "NEUTRAL",
    "id": "F24_039"
  },
  {
    "q": "What device continuously monitors an insulated (IT) neutral system for the onset of a fault?",
    "a": "An insulation monitoring device, injecting a small test signal and watching for a drop in insulation resistance",
    "opts": [
      "An insulation monitoring device, injecting a small test signal and watching for a drop in insulation resistance",
      "The generator's AVR",
      "A standard overcurrent circuit breaker",
      "The bus tie breaker"
    ],
    "exp": "Because faults on an IT system do not announce themselves by tripping something, continuous insulation monitoring is needed: a device injects a small test signal and watches for a drop in insulation resistance, alarming if one is detected.",
    "cat": "NEUTRAL",
    "id": "F24_040"
  },

  /* ═══════════ ICCP ═══════════ */
  {
    "q": "What is corrosion of a steel hull in seawater fundamentally?",
    "a": "An electrochemical process in which the steel acts as an anode, giving up electrons and going into solution as ions",
    "opts": [
      "An electrochemical process in which the steel acts as an anode, giving up electrons and going into solution as ions",
      "A purely mechanical process caused by wave action wearing away the steel",
      "A biological process caused entirely by marine organisms attacking the hull",
      "A thermal process caused by temperature differences across the hull plating"
    ],
    "exp": "Corrosion of the steel hull is fundamentally electrochemical: the steel naturally gives up electrons and goes into solution as ions, acting as an anode in a natural electrochemical cell with seawater as the electrolyte.",
    "cat": "ICCP",
    "id": "F24_041"
  },
  {
    "q": "What does cathodic protection force the hull to become?",
    "a": "A cathode, which does not corrode, rather than an anode, which does",
    "opts": [
      "A cathode, which does not corrode, rather than an anode, which does",
      "An insulator, isolated electrically from the surrounding seawater",
      "A capacitor, storing charge rather than losing electrons",
      "A neutral conductor with no defined polarity"
    ],
    "exp": "Cathodic protection works by deliberately forcing the hull to behave as a cathode, which does not corrode, instead of an anode, which does, whether that is achieved with sacrificial anodes or ICCP.",
    "cat": "ICCP",
    "id": "F24_042"
  },
  {
    "q": "How do sacrificial anodes protect a hull, without any external power source?",
    "a": "A more reactive metal such as zinc or aluminium alloy is more electrochemically active than steel and corrodes preferentially, forcing the hull steel to remain cathodic",
    "opts": [
      "A more reactive metal such as zinc or aluminium alloy is more electrochemically active than steel and corrodes preferentially, forcing the hull steel to remain cathodic",
      "They physically coat the hull surface, preventing seawater contact entirely",
      "They generate a small AC voltage that repels corrosive ions",
      "They absorb dissolved oxygen from the seawater near the hull"
    ],
    "exp": "Sacrificial anodes are made of a metal more electrochemically active than steel, commonly zinc or aluminium alloy. Being more reactive, they corrode preferentially, sacrificing themselves and keeping the hull steel cathodic, with no power source needed.",
    "cat": "ICCP",
    "id": "F24_043"
  },
  {
    "q": "What powers a sacrificial anode system?",
    "a": "Nothing external is needed, the driving force is purely the natural potential difference between the two metals",
    "opts": [
      "Nothing external is needed, the driving force is purely the natural potential difference between the two metals",
      "A dedicated transformer-rectifier fed from the ship's distribution system",
      "The ship's emergency battery bank",
      "A small solar panel mounted on deck"
    ],
    "exp": "Sacrificial anode systems need no power source at all: the driving force is purely the natural potential difference between the more reactive anode metal and the steel hull. ICCP, by contrast, requires a dedicated DC power source.",
    "cat": "ICCP",
    "id": "F24_044"
  },
  {
    "q": "What powers an ICCP system?",
    "a": "A dedicated DC supply, rectified and regulated from the ship's electrical system",
    "opts": [
      "A dedicated DC supply, rectified and regulated from the ship's electrical system",
      "The natural potential difference between the anode metal and the hull, exactly as with sacrificial anodes",
      "Only the emergency generator, since ICCP is classed as an essential service",
      "Wave motion converted to electrical energy by the anodes themselves"
    ],
    "exp": "Unlike sacrificial anodes, ICCP requires a dedicated DC power source: an external supply, rectified and regulated from the ship's electrical system, actively driving a protective current through the hull.",
    "cat": "ICCP",
    "id": "F24_045"
  },
  {
    "q": "What material are ICCP anodes commonly made from, and why?",
    "a": "Platinised titanium or MMO coated titanium, because they are inert and non-consumable",
    "opts": [
      "Platinised titanium or MMO coated titanium, because they are inert and non-consumable",
      "Zinc alloy, exactly the same material used for sacrificial anodes",
      "Mild steel, matched to the hull material itself",
      "Pure copper, for its high electrical conductivity"
    ],
    "exp": "ICCP anodes are commonly platinised titanium or MMO (mixed metal oxide) coated titanium, inert materials that are not consumed in service, unlike sacrificial anodes which physically wear away.",
    "cat": "ICCP",
    "id": "F24_046"
  },
  {
    "q": "What eventually happens to sacrificial anodes, and when are they typically replaced?",
    "a": "They are consumed over time and must be physically replaced, typically in dry dock",
    "opts": [
      "They are consumed over time and must be physically replaced, typically in dry dock",
      "They never need replacement once fitted",
      "They are replaced automatically by the ICCP controller",
      "They dissolve completely within a few days of fitting"
    ],
    "exp": "Sacrificial anodes are consumed as they protect the hull and must be physically replaced, typically during dry docking, unlike ICCP's inert anodes which are not intended for replacement within normal drydocking intervals.",
    "cat": "ICCP",
    "id": "F24_047"
  },
  {
    "q": "What is the first step in the ICCP control loop?",
    "a": "Reference electrodes, fitted at several locations below the waterline, continuously measure the hull's electrical potential relative to the surrounding seawater",
    "opts": [
      "Reference electrodes, fitted at several locations below the waterline, continuously measure the hull's electrical potential relative to the surrounding seawater",
      "The transformer-rectifier immediately applies full rated current to the anodes",
      "A diver manually checks the anode condition every watch",
      "The main switchboard trips the ICCP supply breaker"
    ],
    "exp": "ICCP is a closed loop system. Reference electrodes fitted below the waterline continuously measure the hull's actual potential relative to the seawater, and that signal is what drives the rest of the control loop.",
    "cat": "ICCP",
    "id": "F24_048"
  },
  {
    "q": "What does the ICCP controller do with the signal from the reference electrodes?",
    "a": "Compares it against the target protective potential for steel in seawater and adjusts the transformer-rectifier output accordingly",
    "opts": [
      "Compares it against the target protective potential for steel in seawater and adjusts the transformer-rectifier output accordingly",
      "Stores it for later review during dry docking only",
      "Uses it solely to trigger an alarm, with no automatic adjustment",
      "Discards it and applies a fixed, unchanging current at all times"
    ],
    "exp": "The controller compares the measured hull potential against the target protective potential for steel in seawater, then adjusts the transformer-rectifier unit's output to hold the hull at that correct potential automatically.",
    "cat": "ICCP",
    "id": "F24_049"
  },
  {
    "q": "What does the transformer-rectifier unit do in an ICCP system?",
    "a": "Takes AC power from the ship's distribution system and converts it to a regulated DC output, adjusted by the controller",
    "opts": [
      "Takes AC power from the ship's distribution system and converts it to a regulated DC output, adjusted by the controller",
      "Converts the hull's own corrosion current back into usable AC power",
      "Measures the hull's potential relative to seawater",
      "Physically replaces consumed anodes automatically"
    ],
    "exp": "The transformer-rectifier unit takes AC power from the ship's distribution system and converts it to a regulated DC output, with the controller adjusting that output based on what the reference electrodes are sensing.",
    "cat": "ICCP",
    "id": "F24_050"
  },
  {
    "q": "Why must the current output of an ICCP system be continuously and automatically adjusted, rather than fixed?",
    "a": "Conditions such as fouling, temperature, salinity, coating condition and ship's speed change, altering how much current is needed to hold the correct protective potential",
    "opts": [
      "Conditions such as fouling, temperature, salinity, coating condition and ship's speed change, altering how much current is needed to hold the correct protective potential",
      "The transformer-rectifier overheats if run at a constant output",
      "Classification rules require the current to change every hour regardless of conditions",
      "A fixed current would immediately consume the anodes"
    ],
    "exp": "As conditions change (fouling, temperature, salinity, coating condition, speed), the reference electrodes keep sensing the actual hull potential and the controller trims the output to hold it correct, rather than applying a fixed current the way a sacrificial anode system does by its nature.",
    "cat": "ICCP",
    "id": "F24_051"
  },
  {
    "q": "What is the key operational difference between ICCP and sacrificial anode protection?",
    "a": "ICCP uses an actively controlled current from a power source with non-consumable anodes, while sacrificial anodes provide a fixed, unadjustable current from a metal that physically wears away",
    "opts": [
      "ICCP uses an actively controlled current from a power source with non-consumable anodes, while sacrificial anodes provide a fixed, unadjustable current from a metal that physically wears away",
      "Sacrificial anodes require far more electrical power to operate than ICCP",
      "ICCP anodes must be replaced far more frequently than sacrificial anodes",
      "There is no real difference, both use exactly the same anode material and control method"
    ],
    "exp": "Both force the hull cathodic, but ICCP does it with an actively controlled current from inert, non-consumable anodes, while sacrificial anodes provide a fixed, passive current from a metal that physically corrodes and must eventually be replaced.",
    "cat": "ICCP",
    "id": "F24_052"
  },

  /* ═══════════ MGPS ═══════════ */
  {
    "q": "What problem does MGPS address, as distinct from ICCP?",
    "a": "Biofouling, the growth of marine organisms inside seawater cooling pipework, sea chests and intakes",
    "opts": [
      "Biofouling, the growth of marine organisms inside seawater cooling pipework, sea chests and intakes",
      "Corrosion of the external hull plating below the waterline",
      "Corrosion of the propeller shaft and rudder stock",
      "Fouling of the main switchboard busbars"
    ],
    "exp": "MGPS is a separate system from ICCP, addressing biofouling by marine organisms such as barnacles, mussels and algae inside seawater pipework, sea chests and intakes, rather than external hull corrosion.",
    "cat": "MGPS",
    "id": "F24_053"
  },
  {
    "q": "In outline, how does MGPS commonly prevent marine growth inside seawater pipework?",
    "a": "By dosing the seawater system with a small, controlled concentration of copper and aluminium (or copper and iron) ions, generated electrolytically from anodes at the sea chest",
    "opts": [
      "By dosing the seawater system with a small, controlled concentration of copper and aluminium (or copper and iron) ions, generated electrolytically from anodes at the sea chest",
      "By heating the seawater to a temperature marine organisms cannot survive",
      "By continuously filtering all incoming seawater through a fine mesh screen",
      "By forcing the pipework to act as a cathode, exactly like ICCP on the hull"
    ],
    "exp": "MGPS commonly dispenses copper and aluminium (or copper and iron) ions, generated electrolytically from anodes fitted at the sea chest or intake and energised by a small DC control unit, dosed at a low, controlled concentration.",
    "cat": "MGPS",
    "id": "F24_054"
  },
  {
    "q": "Why are copper ions effective at preventing marine growth in seawater pipework?",
    "a": "They are toxic to marine organisms even at very low concentration, preventing settlement and growth",
    "opts": [
      "They are toxic to marine organisms even at very low concentration, preventing settlement and growth",
      "They physically coat the pipe interior, blocking organisms mechanically",
      "They raise the seawater's pH to a level organisms cannot tolerate",
      "They increase the seawater's oxygen content, which organisms cannot survive"
    ],
    "exp": "Copper ions are toxic to marine organisms at very low concentration, preventing settlement and growth inside the pipework, at a dose rate low enough to have no meaningful environmental impact once diluted into the discharge.",
    "cat": "MGPS",
    "id": "F24_055"
  },
  {
    "q": "How does MGPS differ from ICCP in terms of what it protects?",
    "a": "MGPS protects internal seawater pipework and sea chests from marine growth, while ICCP protects the external hull from corrosion",
    "opts": [
      "MGPS protects internal seawater pipework and sea chests from marine growth, while ICCP protects the external hull from corrosion",
      "MGPS protects the external hull from corrosion, while ICCP protects internal pipework from marine growth",
      "Both systems protect exactly the same equipment using identical methods",
      "MGPS is simply an older name for the same system as ICCP"
    ],
    "exp": "MGPS addresses biofouling inside seawater cooling pipework, sea chests and intakes. ICCP addresses corrosion of the external hull. They are separate systems solving two different problems, though both commonly use anodes and a small DC control unit.",
    "cat": "MGPS",
    "id": "F24_056"
  },
  {
    "q": "What happens to MGPS anodes over time, and how does this compare with ICCP anodes?",
    "a": "MGPS anodes are consumed and periodically inspected and renewed, unlike ICCP's inert, non-consumable anodes",
    "opts": [
      "MGPS anodes are consumed and periodically inspected and renewed, unlike ICCP's inert, non-consumable anodes",
      "MGPS anodes are inert and non-consumable, exactly like ICCP's anodes",
      "MGPS uses no anodes at all, only chemical dosing tanks",
      "MGPS anodes only need renewal once during a vessel's entire service life"
    ],
    "exp": "MGPS anodes, generating copper and aluminium or iron ions electrolytically, are consumed in the process and are periodically inspected and renewed, unlike ICCP's inert titanium-based anodes which are not intended for replacement within normal drydocking intervals.",
    "cat": "MGPS",
    "id": "F24_057"
  },

  /* ═══════════ EX RATINGS AND HAZARDOUS AREAS ═══════════ */
  {
    "q": "What defines a hazardous area on a ship?",
    "a": "A space that can contain a flammable gas or vapour atmosphere under normal or fault conditions",
    "opts": [
      "A space that can contain a flammable gas or vapour atmosphere under normal or fault conditions",
      "Any space located below the waterline",
      "Any space that draws more than 100 A of current",
      "Any space accessible only through a watertight door"
    ],
    "exp": "A hazardous area is one that can contain a flammable gas or vapour atmosphere under normal or fault conditions, most obviously cargo tanks and pump rooms on a tanker, but also paint stores and battery rooms on any vessel.",
    "cat": "EX",
    "id": "F24_058"
  },
  {
    "q": "What characterises a Zone 0 hazardous area?",
    "a": "An explosive atmosphere is present continuously or for long periods, such as inside a cargo tank itself",
    "opts": [
      "An explosive atmosphere is present continuously or for long periods, such as inside a cargo tank itself",
      "An explosive atmosphere is only likely to occur periodically in normal operation",
      "An explosive atmosphere is not likely in normal operation, and if it occurs, only briefly",
      "No explosive atmosphere can ever occur in that space"
    ],
    "exp": "Zone 0 is where an explosive gas atmosphere is present continuously or for long periods, such as inside a cargo tank itself. This is the strictest zone, dictating the most rigorous equipment protection.",
    "cat": "EX",
    "id": "F24_059"
  },
  {
    "q": "What characterises a Zone 1 hazardous area?",
    "a": "An explosive atmosphere is likely to occur periodically in normal operation, such as near a tank vent or cargo pump room deckhead ventilation",
    "opts": [
      "An explosive atmosphere is likely to occur periodically in normal operation, such as near a tank vent or cargo pump room deckhead ventilation",
      "An explosive atmosphere is present continuously, such as inside a cargo tank",
      "An explosive atmosphere is not likely in normal operation, and if it occurs, only briefly",
      "The space is entirely free of any flammable substances"
    ],
    "exp": "Zone 1 is where an explosive atmosphere is likely to occur periodically in normal operation, for example near a tank vent or in a cargo pump room's deckhead ventilation area.",
    "cat": "EX",
    "id": "F24_060"
  },
  {
    "q": "What characterises a Zone 2 hazardous area?",
    "a": "An explosive atmosphere is not likely in normal operation, and if it does occur, only briefly",
    "opts": [
      "An explosive atmosphere is not likely in normal operation, and if it does occur, only briefly",
      "An explosive atmosphere is present continuously or for long periods",
      "An explosive atmosphere is likely to occur periodically in normal operation",
      "The zone classification depends entirely on ambient temperature"
    ],
    "exp": "Zone 2 covers areas where an explosive atmosphere is not likely in normal operation, and if it does occur, only briefly, such as a more open deck area around a cargo zone.",
    "cat": "EX",
    "id": "F24_061"
  },
  {
    "q": "How does the Ex d (flameproof) protection concept prevent an explosion reaching the surrounding atmosphere?",
    "a": "It does not stop a spark occurring inside the enclosure, but the enclosure is built to contain the internal explosion, with flame path gaps that cool escaping hot gases below ignition temperature",
    "opts": [
      "It does not stop a spark occurring inside the enclosure, but the enclosure is built to contain the internal explosion, with flame path gaps that cool escaping hot gases below ignition temperature",
      "It limits the circuit's available energy so no spark can ever occur",
      "It uses extra design margins so a spark is highly unlikely to occur at all",
      "It physically removes all oxygen from inside the enclosure"
    ],
    "exp": "Ex d assumes an ignition source will occur inside the enclosure and contains its effects: precisely machined flame path gaps at every joint let hot gases escape and cool below ignition temperature before reaching the outside atmosphere.",
    "cat": "EX",
    "id": "F24_062"
  },
  {
    "q": "How does the Ex e (increased safety) protection concept work?",
    "a": "It uses extra design margins, larger clearances and creepage distances, and tighter temperature limits to make a spark or dangerous surface temperature highly unlikely, on equipment that does not normally spark",
    "opts": [
      "It uses extra design margins, larger clearances and creepage distances, and tighter temperature limits to make a spark or dangerous surface temperature highly unlikely, on equipment that does not normally spark",
      "It contains an internal explosion within a robust flameproof enclosure",
      "It limits the circuit's stored energy so low that even a fault cannot ignite the atmosphere",
      "It floods the enclosure with an inert protective gas at positive pressure"
    ],
    "exp": "Ex e uses extra design margins, larger clearances, tighter temperature limits and better terminals to make a spark or dangerous temperature highly unlikely by design, rather than containing one after the fact. Equipment that normally sparks is excluded from this method.",
    "cat": "EX",
    "id": "F24_063"
  },
  {
    "q": "How does the Ex i (intrinsically safe) protection concept work?",
    "a": "It limits the electrical and stored energy in the circuit itself so low that even a fault cannot release enough energy to ignite the atmosphere",
    "opts": [
      "It limits the electrical and stored energy in the circuit itself so low that even a fault cannot release enough energy to ignite the atmosphere",
      "It contains a spark inside a heavy, precisely machined enclosure",
      "It relies on extra clearances and creepage distances to make a spark unlikely",
      "It requires the circuit to be earthed through the ship's hull"
    ],
    "exp": "Ex i keeps a circuit's available energy so low that not even a fault can release enough to ignite the atmosphere. Safety is built into the circuit's power budget itself, not a strong enclosure or generous design margins.",
    "cat": "EX",
    "id": "F24_064"
  },
  {
    "q": "Which Ex protection concept is typically used on motors and switchgear that inherently produce sparks or heat?",
    "a": "Ex d, flameproof",
    "opts": ["Ex d, flameproof", "Ex e, increased safety", "Ex i, intrinsically safe", "None, such equipment cannot be used in hazardous areas at all"],
    "exp": "Equipment that inherently sparks or produces heat, such as motors and switchgear, is typically flameproofed (Ex d), since the spark cannot practically be eliminated and instead the explosion is contained.",
    "cat": "EX",
    "id": "F24_065"
  },
  {
    "q": "Which Ex protection concept is typically used on low power instrumentation such as sensors and transmitters?",
    "a": "Ex i, intrinsically safe",
    "opts": ["Ex i, intrinsically safe", "Ex d, flameproof", "Ex e, increased safety", "None of these, low power devices are exempt from Ex certification"],
    "exp": "Low power instrumentation and control devices, such as sensors, transmitters and small field instruments, are typically made intrinsically safe (Ex i), since their circuit energy is naturally low enough to limit effectively.",
    "cat": "EX",
    "id": "F24_066"
  },
  {
    "q": "Why can a high power motor not practically be made intrinsically safe?",
    "a": "Its running current is far too large to limit down to intrinsically safe energy levels",
    "opts": [
      "Its running current is far too large to limit down to intrinsically safe energy levels",
      "Intrinsically safe circuits cannot be used with AC power",
      "Motors are never installed in hazardous areas under any circumstances",
      "Intrinsically safe equipment is more expensive than flameproof equipment"
    ],
    "exp": "The right Ex concept follows the equipment's power level. A high power motor's running current is far too large to limit down to intrinsically safe energy levels, so it is flameproofed instead, while a small low power sensor is too low power to justify a heavy flameproof enclosure.",
    "cat": "EX",
    "id": "F24_067"
  },

  /* ═══════════ HULL AS EARTH ═══════════ */
  {
    "q": "Why does the steel hull commonly serve as the electrical earth reference on a ship?",
    "a": "It is a huge, continuous, low resistance conductor already in direct contact with seawater over its entire submerged surface",
    "opts": [
      "It is a huge, continuous, low resistance conductor already in direct contact with seawater over its entire submerged surface",
      "Class rules require a dedicated earth electrode to be driven into the hull plating",
      "The hull is electrically insulated from seawater, making it a safe reference",
      "It is the only metal object on board large enough to act as an earth"
    ],
    "exp": "A steel hull is an enormous, continuous, low resistance conductor already in contact with seawater, itself a reasonably good conductor, over its entire submerged surface, unlike a shore installation which needs a purpose-built earth electrode driven into the ground.",
    "cat": "HULL",
    "id": "F24_068"
  },
  {
    "q": "What is the practical benefit of bonding equipment frames, cable armouring and switchboard earth bars to the hull?",
    "a": "Every piece of equipment gets a common, very low impedance path to a single shared reference point, without running a dedicated earth conductor the length of the vessel",
    "opts": [
      "Every piece of equipment gets a common, very low impedance path to a single shared reference point, without running a dedicated earth conductor the length of the vessel",
      "It eliminates the need for any insulation monitoring on the ship's system",
      "It allows the ship to be permanently connected to shore earth at all times",
      "It reduces the total generated power the alternators need to supply"
    ],
    "exp": "Bonding to the hull gives every piece of equipment a common, very low impedance path to a single shared reference point, without running a dedicated earth conductor the length of the vessel, the way a shore installation must run one back to its own earth electrode.",
    "cat": "HULL",
    "id": "F24_069"
  },
  {
    "q": "Why is the fact that the hull is such an effective conductor also the reason marine LV distribution uses an insulated rather than solidly earthed neutral?",
    "a": "With everything metallic bonded to such a good conductor, a solidly earthed system would find an immediate low impedance path back to source through the hull on the first fault, tripping protection immediately",
    "opts": [
      "With everything metallic bonded to such a good conductor, a solidly earthed system would find an immediate low impedance path back to source through the hull on the first fault, tripping protection immediately",
      "The hull's resistance is too high for a solidly earthed system to work at all",
      "Solidly earthed systems are incompatible with seawater contact of any kind",
      "The hull would corrode faster under a solidly earthed system"
    ],
    "exp": "Because the hull is such an effective conductor and everything metallic tends to be bonded to it, a solidly earthed system would very often find an immediate, low impedance path back to source through the hull, producing a large fault current and tripping protection on the very first fault, exactly what the insulated neutral approach is chosen to avoid for essential services.",
    "cat": "HULL",
    "id": "F24_070"
  }

]);

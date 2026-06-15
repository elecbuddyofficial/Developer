window.loadQuizzes("T16_SOLAS", [
  {
    "q": "SOLAS Reg 40: permissible steady-state voltage limit?",
    "a": "±2.5% of rated voltage",
    "opts": [
      "±5.0%",
      "±10.0%",
      "±2.5% of rated voltage",
      "±1.5%"
    ],
    "exp": "SOLAS II-1/Reg 40: AVR must maintain steady-state voltage within ±2.5% of rated voltage from no-load to full-load. Transient dip allowed ±20% but must recover to ±3% within 1.5 seconds.",
    "cat": "ELECTRICAL",
    "id": "T16S_001"
  },
  {
    "q": "SOLAS Reg 40: maximum transient voltage dip and recovery time?",
    "a": "±20% transient dip, recovering to ±3% within 1.5 seconds",
    "opts": [
      "±10% dip, recovery within 5.0 seconds",
      "±20% transient dip, recovering to ±3% within 1.5 seconds",
      "±15% dip, recovery within 3.0 seconds",
      "±30% dip, recovery within 1.0 second"
    ],
    "exp": "On sudden load application/rejection: ±20% transient allowed. Must recover to within ±3% of rated voltage within 1.5 seconds. Frequency: ±10% transient, recover within 5 seconds.",
    "cat": "ELECTRICAL",
    "id": "T16S_002"
  },
  {
    "q": "Where must the emergency generator be located per SOLAS?",
    "a": "Above the uppermost continuous bulkhead deck and outside the main machinery space",
    "opts": [
      "Below waterline for adequate cooling water pressure",
      "Inside ER enclosed in A-60 fire boundary",
      "Adjacent to bridge on navigating deck",
      "Above the uppermost continuous bulkhead deck and outside the main machinery space"
    ],
    "exp": "SOLAS II-1/Reg 43: Emergency generator must be above the bulkhead deck (protection from flooding) and outside the main machinery space (protection from fire/flooding of ER). If ER floods or burns, emergency generator remains accessible and functional.",
    "cat": "EMERGENCY",
    "id": "T16S_003"
  },
  {
    "q": "Maximum auto-start time for emergency generator on a CARGO ship?",
    "a": "45 seconds",
    "opts": [
      "30 seconds",
      "45 seconds",
      "60 seconds",
      "90 seconds"
    ],
    "exp": "SOLAS II-1/Reg 43: Cargo ships - emergency generator must auto-start and supply essential loads within 45 seconds of main power failure. Passenger ships have stricter 30 second requirement. Time includes engine start, voltage build-up, and ACB closure.",
    "cat": "EMERGENCY",
    "id": "T16S_004"
  },
  {
    "q": "Maximum auto-start time for emergency generator on a PASSENGER ship?",
    "a": "30 seconds",
    "opts": [
      "30 seconds",
      "45 seconds",
      "60 seconds",
      "15 seconds"
    ],
    "exp": "SOLAS II-1/Reg 43: Passenger ships - 30 seconds (stricter than 45 seconds for cargo ships). Faster requirement due to larger numbers of passengers and more critical safety systems. Passenger ships also require 36-hour fuel endurance (vs 18 hours for cargo ships).",
    "cat": "EMERGENCY",
    "id": "T16S_005"
  },
  {
    "q": "Minimum fuel endurance for emergency generator on a CARGO ship?",
    "a": "18 hours continuous at full emergency load",
    "opts": [
      "18 hours continuous at full emergency load",
      "36 hours continuous",
      "12 hours continuous",
      "24 hours continuous"
    ],
    "exp": "SOLAS II-1/Reg 43: Cargo ships - 18 hours minimum. Passenger ships - 36 hours. Emergency generator fuel tank must be dedicated (separate from main engine room fuel). This endurance allows time for repair or rescue in the event of main machinery failure.",
    "cat": "EMERGENCY",
    "id": "T16S_006"
  },
  {
    "q": "Minimum fuel endurance for emergency generator on a PASSENGER ship?",
    "a": "36 hours continuous at full emergency load",
    "opts": [
      "18 hours",
      "36 hours continuous at full emergency load",
      "48 hours",
      "72 hours"
    ],
    "exp": "SOLAS II-1/Reg 43: Passenger ships - 36 hours minimum. Higher requirement due to: more passengers to evacuate, more essential systems (fire sprinklers, passenger alarms), larger ships taking longer to abandon or repair.",
    "cat": "EMERGENCY",
    "id": "T16S_007"
  },
  {
    "q": "Purpose and minimum duration of the transitional source of emergency power?",
    "a": "Battery supplying essential lighting and communications for 30 minutes while emergency generator starts",
    "opts": [
      "Supercapacitor preventing voltage dips during bow thruster starting (5 seconds)",
      "Standby diesel running 18 hours if emergency generator fails",
      "UPS powering entire main switchboard for 1 hour",
      "Battery supplying essential lighting and communications for 30 minutes while emergency generator starts"
    ],
    "exp": "Transitional source = battery bank that automatically supplies emergency lighting, navigation lights, internal communications (at least 30 minutes). Bridges the gap between blackout and emergency generator coming online (45 seconds). No manual switching required - automatic.",
    "cat": "EMERGENCY",
    "id": "T16S_008"
  },
  {
    "q": "What does IEC 60331 signify for cables feeding essential services?",
    "a": "Fire resistant - maintains circuit integrity during a fire (minimum 3 hours at 750°C)",
    "opts": [
      "Flame retardant - self-extinguishes to prevent flame spread (circuit may fail)",
      "Halogen-free - emits zero toxic smoke when melted",
      "Heavily armoured - withstands direct mechanical impact",
      "Fire resistant - maintains circuit integrity during a fire (minimum 3 hours at 750°C)"
    ],
    "exp": "IEC 60331 = fire resistant. Circuit continues operating during fire using mica tape insulation. Required for: fire pumps, steering gear, emergency lighting, GMDSS. IEC 60332 = flame retardant (stops burning when ignition removed but circuit fails in fire). Different applications.",
    "cat": "CABLES",
    "id": "T16S_009"
  },
  {
    "q": "IEC 60331 fire resistant cable must withstand what conditions?",
    "a": "3 hours at 750°C while maintaining electrical circuit integrity",
    "opts": [
      "1 hour at 1000°C",
      "3 hours at 750°C while maintaining electrical circuit integrity",
      "30 minutes at 500°C",
      "12 hours at 200°C"
    ],
    "exp": "IEC 60331: minimum 3 hours at 750°C maintaining circuit function. The mica tape layer is the key - remains functional even when outer XLPE/PVC insulation has burned away. Essential for life-safety circuits that must operate throughout a fire.",
    "cat": "CABLES",
    "id": "T16S_010"
  },
  {
    "q": "New SOLAS 2026 lifting appliances regulation - what is it?",
    "a": "SOLAS II-1/3-13 - first mandatory global standard for shipboard cranes, winches and lifting appliances",
    "opts": [
      "SOLAS II-2/10 - fire protection standards for crane hydraulics",
      "SOLAS III/20 - LSA requirements for crane safety nets",
      "SOLAS V/19 - navigation equipment for crane operators",
      "SOLAS II-1/3-13 - first mandatory global standard for shipboard cranes, winches and lifting appliances"
    ],
    "exp": "SOLAS II-1/Reg 3-13 effective 1 January 2026. First-ever uniform global standard covering design, testing, and maintenance of all onboard lifting appliances (cargo cranes, ER cranes, stores cranes) and anchor handling winches. Existing ships: test at first SAFCON renewal after January 2026.",
    "cat": "LIFTING",
    "id": "T16S_011"
  },
  {
    "q": "Required proof load test for lifting appliances under SOLAS II-1/3-13 (2026)?",
    "a": "125% of Safe Working Load (SWL) witnessed by class surveyor",
    "opts": [
      "100% SWL",
      "125% of Safe Working Load (SWL) witnessed by class surveyor",
      "110% SWL",
      "150% SWL"
    ],
    "exp": "New regulation requires proof load testing at 125% SWL. Witnessed by class surveyor. Test result must be documented. Annual examination by Competent Person also required. Missing or faded SWL markings now constitute a SOLAS statutory deficiency.",
    "cat": "LIFTING",
    "id": "T16S_012"
  },
  {
    "q": "Mandatory marking on lifting appliances under SOLAS II-1/3-13?",
    "a": "Safe Working Load (SWL) - permanently and legibly marked",
    "opts": [
      "Maximum Breaking Strength (MBS)",
      "Ultimate tensile stress limit",
      "Date of last 5-year class renewal survey",
      "Safe Working Load (SWL) - permanently and legibly marked"
    ],
    "exp": "Every lifting appliance must be permanently marked with its SWL. Variable SWL cranes: load chart showing SWL at each radius. Faded, missing, or undocumented SWL = direct SOLAS statutory deficiency = can result in PSC detention and affects Safety Construction Certificate validity.",
    "cat": "LIFTING",
    "id": "T16S_013"
  },
  {
    "q": "EEBD - what does it provide and for how long?",
    "a": "10 minutes of breathable air strictly for emergency escape only",
    "opts": [
      "15 minutes for firefighting support",
      "30 minutes for enclosed space entry",
      "10 minutes of breathable air strictly for emergency escape only",
      "45 minutes for damage control work"
    ],
    "exp": "EEBD (Emergency Escape Breathing Device): 10 minutes of compressed air for escape ONLY from smoke or toxic gases. NOT for: firefighting, enclosed space entry, damage control, or medical oxygen. No thermal protection. One-time use. Min 2 in bridge, min 2 in machinery space.",
    "cat": "SAFETY",
    "id": "T16S_014"
  },
  {
    "q": "EEBD is designed for what specific purpose?",
    "a": "Escaping from a hazardous atmosphere to a safe area - NOT for firefighting or enclosed space entry",
    "opts": [
      "Entering enclosed spaces for routine inspections",
      "Fighting small electrical fires in engine room",
      "Backup medical oxygen for injured crew",
      "Escaping from a hazardous atmosphere to a safe area - NOT for firefighting or enclosed space entry"
    ],
    "exp": "EEBD = escape hood for rapid evacuation. 10 minutes air is sufficient to escape from most enclosed spaces to fresh air. If work requires entering a hazardous atmosphere, a full SCBA (typically 30-60 minutes) must be used. Confusing EEBD with SCBA is a dangerous mistake.",
    "cat": "SAFETY",
    "id": "T16S_015"
  },
  {
    "q": "SOLAS Chapter and Section covering main and emergency electrical power?",
    "a": "Chapter II-1, Part D (Electrical Installations)",
    "opts": [
      "Chapter II-2 (Fire Protection)",
      "Chapter III (Life-Saving Appliances)",
      "Chapter V (Safety of Navigation)",
      "Chapter II-1, Part D (Electrical Installations)"
    ],
    "exp": "SOLAS Chapter II-1 covers construction and machinery. Part D specifically covers all electrical requirements: main source of power, emergency source, starting arrangements, blackout procedures, UMS requirements, precautions against shock and fire. All ETO-relevant SOLAS requirements are in Chapter II-1 Part D.",
    "cat": "ELECTRICAL",
    "id": "T16S_016"
  },
  {
    "q": "Why does SOLAS require steering gear motor overload to alarm NOT trip?",
    "a": "Losing steering during critical manoeuvring is more dangerous than burning out the steering motor",
    "opts": [
      "Steering motors cannot catch fire due to Class H insulation",
      "Tripping causes hydraulic oil to boil and explode",
      "Emergency generator cannot handle sudden steering motor trips",
      "Losing steering during critical manoeuvring is more dangerous than burning out the steering motor"
    ],
    "exp": "SOLAS II-1/Reg 29: steering gear overload = alarm only. A burning steering motor still provides steering. Lost steering during collision avoidance or harbour approach = catastrophic. ETO must investigate immediately when alarm sounds. Phase failure relay is also mandatory.",
    "cat": "ELECTRICAL",
    "id": "T16S_017"
  },
  {
    "q": "BNWAS dormant period - adjustable range per SOLAS Chapter V?",
    "a": "3 to 12 minutes",
    "opts": [
      "1 to 5 minutes",
      "3 to 12 minutes",
      "10 to 20 minutes",
      "15 to 30 minutes"
    ],
    "exp": "BNWAS (Bridge Navigational Watch Alarm System): Officer of the Watch must reset the alarm every 3-12 minutes (officer sets preferred interval within this range). If not reset → first alarm sounds on bridge → then escalates to captain's cabin → then to engine room. Detects OOW incapacitation.",
    "cat": "SAFETY",
    "id": "T16S_018"
  },
  {
    "q": "Primary SOLAS criterion verified in a blackout test on a cargo ship?",
    "a": "Emergency generator auto-starts and supplies emergency switchboard within 45 seconds of main power loss",
    "opts": [
      "Main generators restart and synchronise within 2 minutes",
      "Transitional battery powers full MSB for 10 minutes",
      "Vessel auto-anchors if power not restored in 5 minutes",
      "Emergency generator auto-starts and supplies emergency switchboard within 45 seconds of main power loss"
    ],
    "exp": "Blackout test procedure: inform bridge + brief all staff + verify DG in AUTO → trip main generator ACB → start stopwatch → verify DG starts and ESB closes within 45 seconds → verify essential loads supplied → restore normal power sequentially. Record all times. PSC will check.",
    "cat": "EMERGENCY",
    "id": "T16S_019"
  },
  {
    "q": "New 2026 SOLAS requirement for electronic inclinometer?",
    "a": "Containerships and bulk carriers ≥3000 GT must carry electronic inclinometer connected to VDR",
    "opts": [
      "All ships >500 GT must install inclinometer connected to ECDIS",
      "Only passenger ships require inclinometer for stability monitoring",
      "Tankers only - to detect cargo shift during loading",
      "Containerships and bulk carriers ≥3000 GT must carry electronic inclinometer connected to VDR"
    ],
    "exp": "New 2026 requirement: containerships and bulk carriers ≥3000 GT must carry an electronic inclinometer connected to the VDR. Records real-time roll angles - provides hard data on ship motion to prevent parametric rolling casualties. Following several major container ship losses attributed to parametric rolling.",
    "cat": "SAFETY",
    "id": "T16S_020"
  },
  {
    "q": "Under SOLAS Chapter II-2, what specific international standard must cables serving 'essential services' (like fire pumps and steering gear) meet to ensure they survive a fire?",
    "a": "IEC 60331 (Fire Resistant)",
    "opts": [
      "ISO 9001 (Quality Assurance)",
      "IEC 60079 (Explosion Proof)",
      "IEC 60332 (Flame Retardant)",
      "IEC 60331 (Fire Resistant)"
    ],
    "exp": "Cables for essential safety services must be 'Fire Resistant' (IEC 60331), meaning they can continue to conduct electricity and operate critical equipment for a minimum specified time even while directly engulfed in flames.",
    "cat": "CABLES",
    "id": "T16S_021"
  },
  {
    "q": "What is the SOLAS requirement for all standard electrical cables installed in enclosed spaces onboard a ship?",
    "a": "They must be Flame Retardant (IEC 60332) to ensure they do not propagate a flame along the cable run",
    "opts": [
      "They must be completely Fire Resistant (IEC 60331)",
      "They must be painted with red intumescent paint",
      "They must be wrapped in asbestos insulation",
      "They must be Flame Retardant (IEC 60332) to ensure they do not propagate a flame along the cable run"
    ],
    "exp": "While only essential services need to survive a fire (Fire Resistant), ALL cables in enclosed spaces must be 'Flame Retardant'. If a fire hits them, they might melt and short out, but they will not act as a wick to carry the fire to the next room.",
    "cat": "CABLES",
    "id": "T16S_022"
  },
  {
    "q": "According to SOLAS II-1/45.1, what is the strict rule regarding overcurrent protection on an 'earthed conductor'?",
    "a": "No fuse, switch, or circuit breaker shall be fitted in any earthed conductor to ensure the hull earth connection is continuously maintained",
    "opts": [
      "A fast-acting glass fuse must be installed to prevent hull magnetization",
      "An isolation switch must be fitted to allow megger testing",
      "No fuse, switch, or circuit breaker shall be fitted in any earthed conductor to ensure the hull earth connection is continuously maintained",
      "It must be protected by a 10-amp dedicated MCB"
    ],
    "exp": "If an earth wire had a fuse and that fuse blew, the equipment's metal casing would lose its protective ground without the crew knowing. Any subsequent short circuit would make the casing lethally live. Earth paths must be solid and unbreakable.",
    "cat": "CABLES",
    "id": "T16S_023"
  },
  {
    "q": "How does SOLAS dictate the routing of cables feeding essential services and emergency power?",
    "a": "Where practicable, they must be routed clear of high fire risk areas (like galleys, laundries, and category A machinery spaces) to prevent a single fire from destroying them",
    "opts": [
      "They must be run exclusively inside the fuel oil double bottom tanks for cooling",
      "Where practicable, they must be routed clear of high fire risk areas (like galleys, laundries, and category A machinery spaces) to prevent a single fire from destroying them",
      "They must be routed through the center of the engine room for easiest maintenance access",
      "They must be bundled tightly with standard lighting cables to save space"
    ],
    "exp": "Redundancy is useless if a single galley fire burns through both the main and emergency steering gear cables. SOLAS requires critical cables to take the safest possible paths through the ship.",
    "cat": "CABLES",
    "id": "T16S_024"
  },
  {
    "q": "What international standard governs the specific construction and certification of cables and electrical equipment used in hazardous (explosive) areas like a Paint Locker?",
    "a": "IEC 60079",
    "opts": [
      "IEC 60079",
      "MARPOL Annex VI",
      "IEC 60331",
      "IEC 60332"
    ],
    "exp": "IEC 60079 is the overarching standard for 'Explosive Atmospheres', defining equipment classes like Ex d (flameproof) and Ex i (intrinsically safe) mandated by SOLAS for areas where flammable gases exist.",
    "cat": "CABLES",
    "id": "T16S_025"
  },
  {
    "q": "Why are standard commercial PVC cables not typically permitted for marine use without specific classification society approval?",
    "a": "Standard PVC releases highly toxic, dense, and corrosive smoke (Hydrogen Chloride) when burned, which is lethal in enclosed ship compartments",
    "opts": [
      "Standard PVC releases highly toxic, dense, and corrosive smoke (Hydrogen Chloride) when burned, which is lethal in enclosed ship compartments",
      "Standard PVC cannot carry 60Hz alternating current",
      "Standard PVC is too heavy and affects the ship's stability",
      "Standard PVC dissolves when exposed to marine salt air"
    ],
    "exp": "Marine cables are generally Low Smoke Zero Halogen (LSZH). When they burn, they do not release the lethal, blinding, acidic black smoke that standard PVC does, giving the crew a better chance to escape.",
    "cat": "CABLES",
    "id": "T16S_026"
  },
  {
    "q": "What is the SOLAS requirement regarding the armor or metal sheathing of a marine electrical cable?",
    "a": "All metal sheathing and armor must be electrically continuous and effectively earthed to the ship's hull at both ends (except for certain specific control signals)",
    "opts": [
      "It must be insulated from the ship's hull using rubber grommets",
      "It is only required to be earthed if the voltage exceeds 1000V",
      "All metal sheathing and armor must be electrically continuous and effectively earthed to the ship's hull at both ends (except for certain specific control signals)",
      "It must be removed before the cable is pulled through a bulkhead"
    ],
    "exp": "Earthing the outer steel wire armor protects the crew. If the cable is crushed and the live copper touches the armor, the short goes straight to the hull, tripping the breaker rather than electrocuting the person touching the cable.",
    "cat": "CABLES",
    "id": "T16S_027"
  },
  {
    "q": "Under SOLAS, if two independent power cables are required for a critical system (e.g., steering gear), how must they be installed?",
    "a": "They must be separated as widely as is practicable throughout their entire length to avoid simultaneous damage",
    "opts": [
      "They must run through the same cable tray for neatness",
      "They must be taped together inside the same conduit",
      "They must both be routed through the engine casing",
      "They must be separated as widely as is practicable throughout their entire length to avoid simultaneous damage"
    ],
    "exp": "Physical separation is key to redundancy. If both steering cables are in the same tray, one falling pipe or localized fire destroys both feeds instantly.",
    "cat": "CABLES",
    "id": "T16S_028"
  },
  {
    "q": "If a cable penetrates a watertight or fire-rated bulkhead (e.g., an A-60 division), what SOLAS rule applies?",
    "a": "The penetration must be sealed with a class-approved transit system (like Roxtec or MCT) to maintain the fire, smoke, and watertight integrity of the bulkhead",
    "opts": [
      "The hole can be filled with standard silicone sealant or expanding foam",
      "The bulkhead must be reinforced with extra steel plates",
      "The penetration must be sealed with a class-approved transit system (like Roxtec or MCT) to maintain the fire, smoke, and watertight integrity of the bulkhead",
      "The cable must be stripped of its armor at the penetration point"
    ],
    "exp": "A bulkhead is only as strong as its weakest hole. If a cable passes through an A-60 wall, the gap around it must be packed with approved intumescent blocks that swell up during a fire, sealing off smoke and flames.",
    "cat": "CABLES",
    "id": "T16S_029"
  },
  {
    "q": "What is the SOLAS limitation on cable joints or splices in hazardous areas (e.g., a pump room)?",
    "a": "Cable joints are strictly prohibited in hazardous areas unless absolutely necessary for repair, and even then, must be executed using specially approved, flameproof resin jointing kits",
    "opts": [
      "Cables can be soldered as long as the area is ventilated",
      "Cable joints are strictly prohibited in hazardous areas unless absolutely necessary for repair, and even then, must be executed using specially approved, flameproof resin jointing kits",
      "Joints are allowed provided they are marked with red paint",
      "Standard wire nuts wrapped in electrical tape are acceptable"
    ],
    "exp": "A splice is a weak point that can spark or overheat. In an area filled with explosive gas, a continuous, unbroken cable run from the safe area to the certified equipment is legally demanded whenever possible.",
    "cat": "CABLES",
    "id": "T16S_030"
  },
  {
    "q": "According to SOLAS II-1, how must circuits be protected against overcurrent?",
    "a": "Every circuit must be protected by a fuse or circuit breaker of an appropriate rating, sized to clear short circuits before cable insulation damage occurs",
    "opts": [
      "Only circuits over 100 amps require protection",
      "Fuses are illegal on modern ships; only PLCs can limit current",
      "Every circuit must be protected by a fuse or circuit breaker of an appropriate rating, sized to clear short circuits before cable insulation damage occurs",
      "Overcurrent protection is optional if the cable is Fire Resistant"
    ],
    "exp": "Cables will melt and cause fires if they carry more current than their cross-sectional area can handle. The protective device (MCB/fuse) must always be rated lower than the maximum current capacity of the wire it protects.",
    "cat": "CABLES",
    "id": "T16S_031"
  },
  {
    "q": "What is the requirement for cables installed in refrigerated spaces or cold rooms?",
    "a": "They must have a special low-temperature outer sheath (e.g., EPR or specialized PVC) that will not crack or become brittle when flexed at sub-zero temperatures",
    "opts": [
      "They must have a special low-temperature outer sheath (e.g., EPR or specialized PVC) that will not crack or become brittle when flexed at sub-zero temperatures",
      "They are exempt from all SOLAS fire ratings",
      "They must be routed through the center of the room to avoid touching walls",
      "They must be wrapped in thermal heating tape"
    ],
    "exp": "Standard plastic insulation freezes solid in a -25°C meat room. If the ship vibrates, the frozen plastic shatters like glass, exposing the live copper wires to the humid air.",
    "cat": "CABLES",
    "id": "T16S_032"
  },
  {
    "q": "How does SOLAS classify the separation of cables of different voltage levels (e.g., 24V control cables vs 440V power cables)?",
    "a": "Cables operating at different voltage levels should be routed in separate trays or separated by physical barriers to prevent high-voltage shorts into low-voltage systems and minimize EMI",
    "opts": [
      "Cables operating at different voltage levels should be routed in separate trays or separated by physical barriers to prevent high-voltage shorts into low-voltage systems and minimize EMI",
      "They must be twisted together to cancel out magnetic fields",
      "They can share the same tray if the 24V cable is painted yellow",
      "There are no separation rules if they are both flame retardant"
    ],
    "exp": "If a 440V power cable melts into a 24V fire alarm cable, it will instantly blow up the entire 24V fire detection panel. Segregation protects delicate control systems and reduces electromagnetic interference (noise).",
    "cat": "CABLES",
    "id": "T16S_033"
  },
  {
    "q": "What is the SOLAS regulation regarding the support and securing of cable runs?",
    "a": "Cables must be effectively supported and secured (e.g., with stainless steel or UV-resistant nylon ties on trays) to prevent chafing and fatigue from ship vibration",
    "opts": [
      "Cables must be glued to the bulkheads using marine epoxy",
      "Cables must be left loose so they can stretch when the ship bends",
      "Cables should hang freely from the deckhead to improve air cooling",
      "Cables must be effectively supported and secured (e.g., with stainless steel or UV-resistant nylon ties on trays) to prevent chafing and fatigue from ship vibration"
    ],
    "exp": "A ship is a highly vibrating environment. If a heavy cable is left loose against a sharp steel edge, the vibration will saw through the armor and insulation in weeks, causing a dead short.",
    "cat": "CABLES",
    "id": "T16S_034"
  },
  {
    "q": "When is the use of 'Single Core' AC power cables generally permitted, and what is the strict installation rule?",
    "a": "Used for very high currents; all three phases must be bundled together in a trefoil (cloverleaf) formation to cancel out their massive individual magnetic fields",
    "opts": [
      "Used for emergency lighting; they must be run in completely different rooms",
      "Never; single core AC cables are strictly banned by SOLAS",
      "Used for bow thrusters; they must be separated by at least 1 meter",
      "Used for very high currents; all three phases must be bundled together in a trefoil (cloverleaf) formation to cancel out their massive individual magnetic fields"
    ],
    "exp": "If you run one single massive 1000A AC cable near a steel bulkhead, its raw magnetic field will induce massive eddy currents in the steel, heating the wall until it catches fire. Bundling L1, L2, and L3 together cancels out their magnetic fields perfectly.",
    "cat": "CABLES",
    "id": "T16S_035"
  },
  {
    "q": "Under SOLAS, what happens if a cable must pass through an expansion joint in the ship's superstructure?",
    "a": "An expansion loop (a physical slack coil of cable) must be provided to absorb the stretching and compression of the hull without snapping the copper conductors",
    "opts": [
      "The cable must be replaced with a wireless transmitter",
      "The cable must be cut and fitted with a slip-ring connector",
      "An expansion loop (a physical slack coil of cable) must be provided to absorb the stretching and compression of the hull without snapping the copper conductors",
      "The cable must be pulled as tight as possible to brace the joint"
    ],
    "exp": "Ships flex and bend in heavy seas. A rigid cable pulled tight across a structural expansion joint will literally snap in half when the ship rides over a massive wave.",
    "cat": "CABLES",
    "id": "T16S_036"
  },
  {
    "q": "What is the primary indicator of a degrading or failing cable insulation onboard?",
    "a": "A low Insulation Resistance (IR) value, measured in Mega-Ohms using a 500V or 1000V Megger during routine survey checks",
    "opts": [
      "The cable emits a high-pitched buzzing sound",
      "A low Insulation Resistance (IR) value, measured in Mega-Ohms using a 500V or 1000V Megger during routine survey checks",
      "The cable outer sheath changes color from black to grey",
      "The cable feels physically colder than ambient temperature"
    ],
    "exp": "Visual inspections don't show micro-cracks or internal moisture. The only way the ETO or Surveyor proves a cable is safe is by shooting 500V through it to ground and ensuring it reads >1 MΩ.",
    "cat": "CABLES",
    "id": "T16S_037"
  },
  {
    "q": "How does SOLAS define 'Safety Voltage' for portable equipment used in confined or damp spaces (e.g., inside a boiler)?",
    "a": "Not exceeding 50V AC or DC; typically 24V is used for hand lamps to eliminate the risk of lethal electrocution",
    "opts": [
      "Not exceeding 110V AC",
      "Not exceeding 50V AC or DC; typically 24V is used for hand lamps to eliminate the risk of lethal electrocution",
      "Not exceeding 12V AC",
      "Not exceeding 220V AC"
    ],
    "exp": "If an engineer is sweating inside a steel boiler drum, their body resistance is incredibly low. A standard 220V hand lamp shorting out would be instantly fatal. They must use specialized 24V isolated lighting.",
    "cat": "CABLES",
    "id": "T16S_038"
  },
  {
    "q": "What is the significance of the 'Flame Retardant' test (IEC 60332) for a single vertical cable?",
    "a": "It ensures that if a localized flame is applied to the cable, it will self-extinguish shortly after the external flame is removed, stopping the spread of fire",
    "opts": [
      "It ensures the cable can survive 1000°C for 3 hours while functioning",
      "It proves the cable is completely indestructible by fire",
      "It ensures that if a localized flame is applied to the cable, it will self-extinguish shortly after the external flame is removed, stopping the spread of fire",
      "It guarantees the cable releases zero toxic smoke"
    ],
    "exp": "Flame retardant does NOT mean fireproof. It just means the plastic jacket is chemically designed to choke itself out and stop burning once the primary fire is removed, preventing it from acting like a fuse.",
    "cat": "CABLES",
    "id": "T16S_039"
  },
  {
    "q": "When surveying cable installations, what does 'Derating' mean when multiple cables are bundled tightly together in a tray?",
    "a": "The maximum safe current capacity of each cable is reduced (derated) because the bundle traps heat, preventing normal air cooling",
    "opts": [
      "The maximum safe current capacity of each cable is reduced (derated) because the bundle traps heat, preventing normal air cooling",
      "The frequency of the alternating current is reduced",
      "The cables are given a lower fire resistance classification",
      "The voltage of the cables drops due to magnetic interference"
    ],
    "exp": "A single cable running in open air cools efficiently. If 20 power cables are zip-tied into a thick solid block, the cables in the center cannot reject their I²R heat. The ETO must use a 'derating factor' (e.g., 0.7) to ensure they don't melt.",
    "cat": "CABLES",
    "id": "T16S_040"
  },
  {
    "q": "What type of insulation is completely BANNED on all modern ships due to its severe health hazard?",
    "a": "Asbestos-based insulation",
    "opts": [
      "Cross-linked polyethylene (XLPE)",
      "Asbestos-based insulation",
      "Polyvinyl chloride (PVC)",
      "Ethylene propylene rubber (EPR)"
    ],
    "exp": "Historically used for high-temperature and fire-resistant cables, asbestos fibers cause mesothelioma and lung cancer. It is strictly prohibited in all new ship construction under SOLAS Chapter II-1.",
    "cat": "CABLES",
    "id": "T16S_041"
  },
  {
    "q": "What happens if a cable's bending radius is tighter than the manufacturer's specified minimum limit?",
    "a": "The outer sheath cracks, the steel armor deforms, and the internal copper conductors can stretch or snap, severely degrading the cable's electrical and watertight integrity",
    "opts": [
      "The voltage increases slightly at the bend",
      "The cable generates excess harmonic distortion",
      "The cable functions better by creating a magnetic choke point",
      "The outer sheath cracks, the steel armor deforms, and the internal copper conductors can stretch or snap, severely degrading the cable's electrical and watertight integrity"
    ],
    "exp": "Thick marine cables cannot be bent like household extension cords. Forcing a sharp 90-degree corner physically breaks the insulation layers and pinches the copper, creating a hidden hot spot.",
    "cat": "CABLES",
    "id": "T16S_042"
  },
  {
    "q": "What is a 'Cable Transit Log' or 'MCT Register'?",
    "a": "A mandatory documented record tracking every single fire-sealed cable penetration (Multi-Cable Transit) on the ship, ensuring they are intact and pass survey inspections",
    "opts": [
      "A logbook of how many meters of cable are onboard",
      "A list of the manufacturer warranties for the cables",
      "A record of the voltage drops across the ship's length",
      "A mandatory documented record tracking every single fire-sealed cable penetration (Multi-Cable Transit) on the ship, ensuring they are intact and pass survey inspections"
    ],
    "exp": "Because contractors often pull new cables and forget to repack the fire seal blocks (Roxtec), the ship must maintain a log. Surveyors will pick a random MCT block on the map and physically inspect it to ensure it is airtight.",
    "cat": "CABLES",
    "id": "T16S_043"
  },
  {
    "q": "Why are cables feeding the Emergency Fire Pump explicitly required to be routed outside the main machinery space where possible?",
    "a": "Because if the main engine room catches fire, the flames would burn the cable, disabling the emergency pump located in the bow just when it is needed most",
    "opts": [
      "To keep the cables cool from the sea spray",
      "To prevent electromagnetic interference with the main engine",
      "To reduce the voltage drop from the emergency generator",
      "Because if the main engine room catches fire, the flames would burn the cable, disabling the emergency pump located in the bow just when it is needed most"
    ],
    "exp": "The emergency fire pump is the ultimate backup. If its power cable runs through the engine room, a fire in the engine room instantly kills the only pump that can put the fire out.",
    "cat": "CABLES",
    "id": "T16S_044"
  },
  {
    "q": "If a cable's outer sheath is damaged on the open weather deck, what is the immediate long-term risk?",
    "a": "Saltwater ingress; capillary action will suck the saltwater hundreds of meters down the inside of the cable, corroding the copper to green dust and causing dead shorts inside control panels",
    "opts": [
      "The voltage will double due to the saltwater's conductivity",
      "UV radiation will instantly melt the copper",
      "The cable will begin to generate static electricity",
      "Saltwater ingress; capillary action will suck the saltwater hundreds of meters down the inside of the cable, corroding the copper to green dust and causing dead shorts inside control panels"
    ],
    "exp": "A nicked cable is a disaster. Water wicks between the copper strands. Months later, saltwater drips out of the cable end inside the dry bridge console, destroying the electronics.",
    "cat": "CABLES",
    "id": "T16S_045"
  },
  {
    "q": "What is the primary function of the galvanized steel wire braid (armor) found just under the outer sheath of most marine cables?",
    "a": "It provides crucial mechanical protection against physical impacts, crushing, and chafing, and acts as an earthed shield against electrical faults",
    "opts": [
      "It acts as a backup neutral conductor",
      "It conducts heat away from the copper core",
      "It provides crucial mechanical protection against physical impacts, crushing, and chafing, and acts as an earthed shield against electrical faults",
      "It prevents the cable from stretching when pulled"
    ],
    "exp": "Engine rooms are brutal environments. Dropped tools, vibrating pipes, and dragging equipment will instantly slice through normal plastic. The steel braid armor is physical armor for the copper.",
    "cat": "CABLES",
    "id": "T16S_046"
  },
  {
    "q": "Under SOLAS, are you allowed to paint electrical cables?",
    "a": "Generally discouraged and often prohibited for specific cables; heavy paint can hide thermal damage, degrade the outer sheath chemically, and make cable identification codes illegible",
    "opts": [
      "Yes, they must be painted to match the bulkhead color for aesthetics",
      "Yes, but only with white paint",
      "Generally discouraged and often prohibited for specific cables; heavy paint can hide thermal damage, degrade the outer sheath chemically, and make cable identification codes illegible",
      "Yes, paint adds an extra layer of fire resistance"
    ],
    "exp": "Surveyors dislike painted cables. The paint makes it impossible to see if the cable jacket has heat blisters, hides the manufacturer's IEC fire rating stamp, and solvent-based paints can chemically melt the PVC/LSZH sheath.",
    "cat": "CABLES",
    "id": "T16S_047"
  },
  {
    "q": "If an ETO must replace a section of cable in the intrinsically safe circuit of an explosive cargo tank, what strict rule applies?",
    "a": "The exact type, capacitance, and inductance ratings of the original cable must be perfectly matched, as the intrinsically safe safety barrier relies on these specific cable properties to prevent sparks",
    "opts": [
      "The new cable must carry 220V to ensure a strong signal",
      "The new cable must be wrapped in lead foil",
      "The exact type, capacitance, and inductance ratings of the original cable must be perfectly matched, as the intrinsically safe safety barrier relies on these specific cable properties to prevent sparks",
      "Any cable is fine as long as it is thicker than the original"
    ],
    "exp": "Intrinsically Safe (Ex i) circuits mathematically prove that a spark cannot happen. If you use a random piece of cable, its different internal capacitance might store enough energy to generate a spark if it breaks, blowing up the cargo tank.",
    "cat": "CABLES",
    "id": "T16S_048"
  },
  {
    "q": "What is 'Halogen-Free' or 'Zero Halogen' (LSZH) cable, and why is it mandated on passenger ships?",
    "a": "It contains no halogens (like chlorine or fluorine); when it burns, it does not release toxic, acidic gases that would blind and suffocate evacuating passengers and destroy electronics",
    "opts": [
      "It emits a pleasant-smelling gas when overheated to warn the crew",
      "It contains no copper, making it significantly lighter",
      "It contains no halogens (like chlorine or fluorine); when it burns, it does not release toxic, acidic gases that would blind and suffocate evacuating passengers and destroy electronics",
      "It is completely immune to catching fire under any circumstance"
    ],
    "exp": "When standard PVC burns, the 'C' (Chloride) bonds with hydrogen to make Hydrogen Chloride gas, which turns into Hydrochloric acid in your lungs. LSZH saves lives by eliminating this deadly smoke.",
    "cat": "CABLES",
    "id": "T16S_049"
  },
  {
    "q": "Why is it important to physically separate the ship's 24V DC communication cables from the massive VFD motor cables?",
    "a": "To prevent Electromagnetic Interference (EMI); the high-frequency switching noise of the VFD can easily induce false voltages in the data cables, corrupting network communication",
    "opts": [
      "To prevent the VFD from overheating the data cables",
      "To prevent Electromagnetic Interference (EMI); the high-frequency switching noise of the VFD can easily induce false voltages in the data cables, corrupting network communication",
      "Because the 24V cables will draw power from the VFD cables wirelessly",
      "Because SOLAS bans DC and AC cables from being in the same room"
    ],
    "exp": "VFDs are exceptionally 'noisy' electrically. If you lay a delicate NMEA 0183 radar data cable next to a 2000kW bow thruster cable, the thruster's magnetic fields will completely scramble the radar data.",
    "cat": "CABLES",
    "id": "T16S_050"
  },
  {
    "q": "What major regulatory shift occurs on January 1, 2026, regarding shipboard lifting appliances under SOLAS Chapter II-1 Regulation 3-13?",
    "a": "Lifting appliances and anchor handling winches are brought directly under SOLAS statutory regulation; defects can now result in PSC detention via the Safety Construction Certificate",
    "opts": [
      "All engine room cranes must be upgraded to fully automated robotic systems",
      "All deck cranes must be removed from cargo ships",
      "Lifting appliances and anchor handling winches are brought directly under SOLAS statutory regulation; defects can now result in PSC detention via the Safety Construction Certificate",
      "Cranes can only be operated by specialized shore personnel"
    ],
    "exp": "Historically, cranes were managed by Class Society rules and ILO. Now, they are hard SOLAS law. A broken limit switch on a crane can directly invalidate the ship's Safety Construction Certificate, preventing the ship from sailing.",
    "cat": "LIFTING",
    "id": "T16S_051"
  },
  {
    "q": "Under the new SOLAS guidelines, what is the standard 'Proof Load' required during a dynamic load test of a standard marine deck crane?",
    "a": "125% of the Safe Working Load (SWL)",
    "opts": [
      "100% of the SWL",
      "150% of the SWL",
      "125% of the Safe Working Load (SWL)",
      "200% of the SWL"
    ],
    "exp": "To definitively prove that the crane's steel structure won't bend and the EM brakes won't slip, surveyors demand the crane successfully lift a weight 25% heavier than its maximum rated capacity (e.g., a 40T crane must lift 50T).",
    "cat": "LIFTING",
    "id": "T16S_052"
  },
  {
    "q": "What specific physical marking is explicitly mandated for every lifting appliance under SOLAS II-1/3-13?",
    "a": "A permanent, highly visible marking of its Safe Working Load (SWL) in tonnes, clearly legible from the operator's control position",
    "opts": [
      "The name of the shipyard that built the crane",
      "The date of the last oil change painted on the boom",
      "A QR code linking to the manufacturer's website",
      "A permanent, highly visible marking of its Safe Working Load (SWL) in tonnes, clearly legible from the operator's control position"
    ],
    "exp": "Faded or missing SWL paint is no longer a minor note; it's a statutory deficiency. If the operator cannot clearly read that the limit is 30T, they might try to lift 40T and capsize the ship.",
    "cat": "LIFTING",
    "id": "T16S_053"
  },
  {
    "q": "How must the Safe Working Load (SWL) be marked on a crane that has a variable operating radius (e.g., it lifts less weight when the boom is fully extended)?",
    "a": "The crane must display a clear, permanent load chart showing the specific SWL at each distinct operating radius",
    "opts": [
      "The crane must display a clear, permanent load chart showing the specific SWL at each distinct operating radius",
      "It must be marked with the lowest possible weight to be safe",
      "It must be marked with the absolute maximum weight it can lift at its shortest radius",
      "It only needs a digital load readout; physical markings are banned"
    ],
    "exp": "Physics dictates that a crane loses leverage the further out it reaches. The operator must have a chart directly in front of them showing '40T at 15m, 20T at 30m' to prevent structural collapse.",
    "cat": "LIFTING",
    "id": "T16S_054"
  },
  {
    "q": "What is the primary electronic safety device on a crane that an ETO must maintain to prevent structural overloading?",
    "a": "The Hoist Overload limit switch (or load cell system), which automatically cuts power to the 'Hoist UP' contactor if the load exceeds the SWL",
    "opts": [
      "The Hoist Overload limit switch (or load cell system), which automatically cuts power to the 'Hoist UP' contactor if the load exceeds the SWL",
      "The Thermal Overload Relay on the motor",
      "The Anemometer (wind speed sensor)",
      "The Slack Rope switch"
    ],
    "exp": "A motor thermal relay protects the motor from heat, but a 50T motor can easily rip the jib off a 30T crane before it gets hot. The load cell measures the physical tension in the wire and halts the crane if the stevedore tries to lift too much weight.",
    "cat": "LIFTING",
    "id": "T16S_055"
  },
  {
    "q": "Under SOLAS II-1/3-13, does the new regulation apply to the small, 2-tonne overhead crane located deep inside the Engine Room?",
    "a": "Yes, it covers all lifting appliances used onboard, including Engine Room overhead cranes, which must be load tested and permanently marked with their SWL",
    "opts": [
      "Yes, it covers all lifting appliances used onboard, including Engine Room overhead cranes, which must be load tested and permanently marked with their SWL",
      "Only if the engine room crane is capable of lifting over 10 tonnes",
      "No, engine room cranes are exempt if they are manually operated",
      "No, it strictly applies only to cargo cranes on the weather deck"
    ],
    "exp": "Engine room cranes are notorious for causing severe injuries during main engine overhauls. They are fully covered by the new rules. If the SWL mark is missing from the ER crane, the ship faces PSC deficiency.",
    "cat": "LIFTING",
    "id": "T16S_056"
  },
  {
    "q": "What is the function of the 'Upper Limit Switch' (Over-Hoist) on a crane or davit?",
    "a": "It cuts power to the 'Hoist UP' contactor just before the massive hook block physically smashes into the top sheaves of the boom (Two-Blocking)",
    "opts": [
      "It prevents the crane from slewing more than 360 degrees",
      "It cuts power to the 'Hoist UP' contactor just before the massive hook block physically smashes into the top sheaves of the boom (Two-Blocking)",
      "It automatically stops the hook when it touches the deck",
      "It prevents the load from swaying in high winds"
    ],
    "exp": "If an operator holds the 'UP' joystick too long, the hook block will crush into the boom tip. The wire rope will snap, dropping the load. The upper limit switch is a hard physical stop that prevents this.",
    "cat": "LIFTING",
    "id": "T16S_057"
  },
  {
    "q": "What is the function of the 'Lower Limit Switch' (Over-Payout) on a crane or winch?",
    "a": "It stops the drum from paying out more wire when only 3-5 wraps are left, preventing the wire from completely detaching from the drum clamp and falling",
    "opts": [
      "It stops the drum from paying out more wire when only 3-5 wraps are left, preventing the wire from completely detaching from the drum clamp and falling",
      "It prevents the crane from lowering loads heavier than the SWL",
      "It engages the mechanical brake permanently when the load is set down",
      "It stops the motor when the hook touches the water"
    ],
    "exp": "If you unspool the drum completely, the immense weight of the load will pull the bitter end of the wire right out of its anchoring clamp. Keeping a minimum of 3 tight wraps ensures friction holds the load, not just the tiny clamp.",
    "cat": "LIFTING",
    "id": "T16S_058"
  },
  {
    "q": "What happens electrically if the 'Slack Rope' limit switch activates on a deck crane?",
    "a": "It detects that the wire has lost tension (e.g., the load hit the deck) and immediately cuts the 'Hoist DOWN' circuit to prevent the wire from spooling off the drum and tangling (bird-nesting)",
    "opts": [
      "It detects that the wire has lost tension (e.g., the load hit the deck) and immediately cuts the 'Hoist DOWN' circuit to prevent the wire from spooling off the drum and tangling (bird-nesting)",
      "It triggers the general ship alarm",
      "It drops the load instantly to prevent the crane from tipping",
      "It increases the motor speed to tighten the rope"
    ],
    "exp": "If the container hits the dock but the operator keeps holding 'DOWN', the drum keeps spinning. The loose wire jumps off the grooves, creating a tangled, crushed mess of steel wire (bird-nest) that ruins the rope.",
    "cat": "LIFTING",
    "id": "T16S_059"
  },
  {
    "q": "What is the vital 'Fail-Safe' principle of the Electromagnetic (EM) Brake installed on all SOLAS-approved lifting appliances?",
    "a": "The brake is heavily spring-applied (held ON by physical force) and electrically released; any power failure causes the brake to clamp shut instantly and hold the load",
    "opts": [
      "The brake drops the load slowly to the ground using a hydraulic dampener",
      "The brake is heavily spring-applied (held ON by physical force) and electrically released; any power failure causes the brake to clamp shut instantly and hold the load",
      "The brake uses a magnetic field to physically push the pads against the rotor",
      "The brake relies on a battery backup to engage during a blackout"
    ],
    "exp": "If a crane is holding a 30T container in the air and the ship blacks out, you CANNOT rely on electricity to hold the load. Huge mechanical springs slam the brake pads closed when power is lost.",
    "cat": "LIFTING",
    "id": "T16S_060"
  },
  {
    "q": "If the ETO discovers the air gap on a crane's EM brake is significantly wider than the manufacturer's specification (e.g., 1.5mm instead of 0.4mm), what is the danger?",
    "a": "The magnetic coil may lack the strength to pull the armature across the wide gap; the brake will fail to release, causing the motor to stall, overheat, and trip on overload",
    "opts": [
      "The magnetic coil may lack the strength to pull the armature across the wide gap; the brake will fail to release, causing the motor to stall, overheat, and trip on overload",
      "The magnetic field will permanently magnetize the motor shaft",
      "The brake will engage too quickly, snapping the wire rope",
      "The crane will automatically run at double speed"
    ],
    "exp": "Magnetic pull decreases exponentially with distance. As the brake pads wear down, the gap gets wider. If it gets too wide, the coil can't overcome the heavy springs, and the brake drags or stays locked.",
    "cat": "LIFTING",
    "id": "T16S_061"
  },
  {
    "q": "According to the new SOLAS rules, what physical document MUST be kept onboard and presented to the Port State Control inspector regarding the ship's cranes?",
    "a": "A valid Register of Lifting Appliances and Cargo Handling Gear, containing the certificates of the 5-yearly dynamic proof load tests and annual inspections",
    "opts": [
      "A photograph of the crane lifting a container",
      "A valid Register of Lifting Appliances and Cargo Handling Gear, containing the certificates of the 5-yearly dynamic proof load tests and annual inspections",
      "A receipt of purchase for the crane's wire ropes",
      "A signed letter from the Chief Engineer stating the crane works"
    ],
    "exp": "The paper trail is now statutory. The surveyor checks the Register. If the certificate shows the crane hasn't been load-tested with physical water bags or weights in the last 5 years, the ship gets a deficiency.",
    "cat": "LIFTING",
    "id": "T16S_062"
  },
  {
    "q": "What role does the 'Anemometer' play in the safety of a large deck crane?",
    "a": "It continuously measures wind speed; if the wind exceeds the safe operational limit (e.g., 20 m/s), it sounds an alarm and electronically disables further crane operations to prevent tipping",
    "opts": [
      "It detects explosive gases venting from the cargo holds",
      "It cools the main hoist motor during heavy lifting",
      "It continuously measures wind speed; if the wind exceeds the safe operational limit (e.g., 20 m/s), it sounds an alarm and electronically disables further crane operations to prevent tipping",
      "It measures the angle of the ship's heel during loading"
    ],
    "exp": "Cranes present massive surface areas. A strong gust of wind hitting a 40T container on a crane jib can generate enough leverage to overpower the slewing brakes or capsize the vessel.",
    "cat": "LIFTING",
    "id": "T16S_063"
  },
  {
    "q": "In a Variable Frequency Drive (VFD) controlled crane, how does the drive manage the massive kinetic energy generated when lowering a heavy load?",
    "a": "Using a Dynamic Braking Resistor (DBR) or regenerative unit; the motor acts as a generator, and the VFD dumps the electrical energy into massive resistor banks as heat to slow the load",
    "opts": [
      "It uses the mechanical EM brake to grind the load to a halt",
      "It vents compressed air to cool the VFD cabinet",
      "It reverses the phases instantly to stop the motor",
      "Using a Dynamic Braking Resistor (DBR) or regenerative unit; the motor acts as a generator, and the VFD dumps the electrical energy into massive resistor banks as heat to slow the load"
    ],
    "exp": "Gravity pulls the container down, spinning the motor. The motor becomes a generator, pushing power back into the VFD. If the VFD can't burn off this power (via large heating elements called DBRs), its DC link voltage will skyrocket, and it will trip, dropping the load.",
    "cat": "LIFTING",
    "id": "T16S_064"
  },
  {
    "q": "What happens if a crane operator attempts to hoist and slew at maximum speed simultaneously on a crane powered by a limited hydraulic pack?",
    "a": "The crane's Power Limit system (or hydraulic cross-sensing) will automatically scale back the speed of both functions to prevent stalling the main electric drive motor",
    "opts": [
      "The hydraulic fluid will boil and burst the hoses",
      "The crane's Power Limit system (or hydraulic cross-sensing) will automatically scale back the speed of both functions to prevent stalling the main electric drive motor",
      "The crane will instantly trip and engage the EM brakes",
      "The crane will execute the hoist first, then slew second"
    ],
    "exp": "The main electric motor can only provide a fixed amount of horsepower. If the operator demands 100% hoist and 100% slew, the automation intelligently splits the available power so the motor doesn't overload and black out the crane.",
    "cat": "LIFTING",
    "id": "T16S_065"
  },
  {
    "q": "Why is 'Level Luffing' an essential safety and operational feature on modern cargo cranes?",
    "a": "It automatically pays out or heaves in the hoist wire as the jib moves up or down, ensuring the heavy load travels perfectly horizontally without crashing into the deck or swinging wildly",
    "opts": [
      "It ensures the crane cabin stays perfectly level when the ship rolls",
      "It pumps hydraulic oil between tanks to balance the crane's weight",
      "It automatically pays out or heaves in the hoist wire as the jib moves up or down, ensuring the heavy load travels perfectly horizontally without crashing into the deck or swinging wildly",
      "It automatically adjusts the ship's ballast system"
    ],
    "exp": "Normally, lowering the boom causes the hook to drop toward the deck. Level luffing mechanically or electronically hauls the wire in at the exact same rate, keeping the container at a steady height over the hatch.",
    "cat": "LIFTING",
    "id": "T16S_066"
  },
  {
    "q": "What does SOLAS II-1/3-13 require regarding 'Anchor Handling Winches' on offshore vessels?",
    "a": "They are now treated as statutory lifting appliances; they must be load-tested, SWL marked, and integrated into the ship's formal certification scheme",
    "opts": [
      "They are explicitly exempt from all SOLAS regulations",
      "They must be operable remotely from the company headquarters ashore",
      "They are now treated as statutory lifting appliances; they must be load-tested, SWL marked, and integrated into the ship's formal certification scheme",
      "They must be replaced with completely hydraulic systems"
    ],
    "exp": "Anchor handling involves insane dynamic loads that frequently snap wires or capsize vessels. The new 2026 rules bring these massive winches strictly under the same rigorous testing regime as cargo cranes.",
    "cat": "LIFTING",
    "id": "T16S_067"
  },
  {
    "q": "When performing the 5-yearly 125% dynamic proof load test on a crane, what specific action must the testing team demonstrate?",
    "a": "They must hoist the 125% test weight, slew it through its full operational arc, luff the jib to minimum and maximum radius, and demonstrate that the brakes can halt and hold the load mid-air",
    "opts": [
      "They must drive the crane physically along the deck tracks while loaded",
      "They must merely lift the weight 10 centimeters off the deck for 5 seconds",
      "They must hoist the 125% test weight, slew it through its full operational arc, luff the jib to minimum and maximum radius, and demonstrate that the brakes can halt and hold the load mid-air",
      "They must lift the weight and immediately drop it into the sea"
    ],
    "exp": "A static test proves nothing about the slewing gears or the dynamic holding power of the EM brakes. The crane must perform its full normal working cycle while heavily overloaded to prove it won't fail under stress.",
    "cat": "LIFTING",
    "id": "T16S_068"
  },
  {
    "q": "What electrical interlock is typically found on the access door of an Engine Room Overhead Crane?",
    "a": "A door limit switch that cuts the main power contactor to the crane if the door is open, preventing someone from walking onto the high crane tracks while it is moving",
    "opts": [
      "A switch that forces the crane to return to its parking station",
      "An alarm that rings on the bridge continuously",
      "A switch that turns on the emergency lighting",
      "A door limit switch that cuts the main power contactor to the crane if the door is open, preventing someone from walking onto the high crane tracks while it is moving"
    ],
    "exp": "Engine room cranes run on rails high above the floor. If a mechanic opens the access door to step onto the rails, the crane must be electrically dead to prevent crushing them.",
    "cat": "LIFTING",
    "id": "T16S_069"
  },
  {
    "q": "If the ETO replaces the wire rope on a lifeboat davit or provision crane, what must happen before it is used again?",
    "a": "The new wire rope must come with a valid manufacturer's test certificate, and the appliance should be operationally tested before being returned to service",
    "opts": [
      "The SWL of the crane must be permanently reduced by 10%",
      "The entire crane must undergo a 125% proof load test immediately",
      "The wire must be painted bright yellow for visibility",
      "The new wire rope must come with a valid manufacturer's test certificate, and the appliance should be operationally tested before being returned to service"
    ],
    "exp": "Wire ropes are highly regulated. You cannot just buy a random steel cable from a hardware store. It must have a traceably certified breaking strength that exceeds the crane's requirements by a specific safety factor (often 5:1 or 6:1).",
    "cat": "LIFTING",
    "id": "T16S_070"
  },
  {
    "q": "What is the function of the 'Anti-Collision' limit system on vessels with multiple cargo cranes?",
    "a": "It uses sensors (encoders or limit switches) to track the position of adjacent crane jibs; if they swing too close to each other, it automatically stops the slewing motion to prevent a mid-air collision",
    "opts": [
      "It uses radar to prevent the crane from hitting shore-based structures",
      "It uses sensors (encoders or limit switches) to track the position of adjacent crane jibs; if they swing too close to each other, it automatically stops the slewing motion to prevent a mid-air collision",
      "It prevents the load from swaying into the ship's own funnel",
      "It tracks the movement of tugboats alongside the ship"
    ],
    "exp": "On a busy container ship, four cranes might be working simultaneously. If two operators aren't paying attention, they will smash their booms together. The anti-collision software creates an invisible electronic boundary between them.",
    "cat": "LIFTING",
    "id": "T16S_071"
  },
  {
    "q": "Under SOLAS, if a crane is found to have a defective overload limit switch, what is the surveyor's likely action?",
    "a": "The crane will be red-tagged (prohibited from use) and it may trigger a deficiency on the ship's Safety Construction Certificate, potentially detaining the vessel until repaired",
    "opts": [
      "The surveyor will simply make a note in the logbook",
      "The surveyor will manually lower the SWL limit by 50%",
      "The crane will be red-tagged (prohibited from use) and it may trigger a deficiency on the ship's Safety Construction Certificate, potentially detaining the vessel until repaired",
      "The surveyor will fine the ETO personally"
    ],
    "exp": "The overload switch is the primary safety device preventing catastrophic structural failure. Operating without it is a gross violation of the new SOLAS II-1/3-13 rules.",
    "cat": "LIFTING",
    "id": "T16S_072"
  },
  {
    "q": "How does an ETO typically adjust or calibrate a crane's Electronic Load Cell (Overload Protection)?",
    "a": "By hoisting a known, certified test weight (e.g., 100% and 110% of SWL) and adjusting the amplifier or PLC software parameters until the system trips accurately at the overload point",
    "opts": [
      "By shorting the 4-20mA wires together to simulate maximum weight",
      "By guessing the weight of a container and turning a screw until it trips",
      "By relying solely on the factory default settings",
      "By hoisting a known, certified test weight (e.g., 100% and 110% of SWL) and adjusting the amplifier or PLC software parameters until the system trips accurately at the overload point"
    ],
    "exp": "Load cells drift over time. You cannot calibrate safety equipment by guessing. You must use physical water bags or certified steel blocks of an exact, known weight to prove the sensor cuts the motor correctly.",
    "cat": "LIFTING",
    "id": "T16S_073"
  },
  {
    "q": "Why do crane EM brake coils frequently suffer from burnout (short-circuiting)?",
    "a": "Because they are large electromagnets; if the air gap is too large, the coil draws massive 'pull-in' current for too long, overheating and melting the internal insulation",
    "opts": [
      "Because they are large electromagnets; if the air gap is too large, the coil draws massive 'pull-in' current for too long, overheating and melting the internal insulation",
      "Because they operate on low-voltage 24V DC",
      "Because they are physically hit by the swinging load",
      "Because sea spray chemically reacts with the copper winding"
    ],
    "exp": "An EM coil draws huge amps to initially pull the heavy metal armature plate against the springs. Once pulled in, the current drops. If the gap is too wide and the plate never pulls in, the coil stays in high-amp mode and cooks itself.",
    "cat": "LIFTING",
    "id": "T16S_074"
  },
  {
    "q": "What happens if a single phase is lost (Phase Failure) to the main 440V supply feeding a crane?",
    "a": "The crane's Phase Failure Relay will instantly detect the imbalance and trip the main contactor, protecting the massive hoist and slew motors from single-phasing and burning out",
    "opts": [
      "The crane's Phase Failure Relay will instantly detect the imbalance and trip the main contactor, protecting the massive hoist and slew motors from single-phasing and burning out",
      "The VFD will generate its own third phase artificially",
      "The EM brake will release permanently",
      "The crane will operate perfectly but at 66% speed"
    ],
    "exp": "Heavy crane motors will melt in minutes if they try to lift a 30T load on only two phases. The protection relay is a mandatory first line of defense in the crane base panel.",
    "cat": "LIFTING",
    "id": "T16S_075"
  },
  {
    "q": "What is the function of the 'Emergency Stop' button located in the crane operator's cabin and at the base of the crane?",
    "a": "It hard-cuts the control power to the main line contactor; all motors instantly lose power, and all EM brakes slam shut simultaneously, freezing the crane in place",
    "opts": [
      "It hard-cuts the control power to the main line contactor; all motors instantly lose power, and all EM brakes slam shut simultaneously, freezing the crane in place",
      "It sounds the ship's general alarm and drops the anchor",
      "It sends an email to the port authority requesting assistance",
      "It gently lowers the load to the deck before shutting down"
    ],
    "exp": "In a panic scenario (e.g., control joystick jams), the operator smashes the E-Stop. It bypasses all PLCs and cuts the raw 220V control voltage. No power means the fail-safe springs lock everything solid instantly.",
    "cat": "LIFTING",
    "id": "T16S_076"
  },
  {
    "q": "How does an operator safely recover a suspended load if a crane's main hoist motor completely burns out mid-lift?",
    "a": "Most cranes have a 'Manual Brake Release' lever or hydraulic hand-pump mechanism; the operator carefully uses this to manually lift the brake pads, allowing gravity to slowly lower the load to the deck",
    "opts": [
      "They must hook the emergency generator directly to the EM brake",
      "They wait for a shore crane to come and lift it off",
      "Most cranes have a 'Manual Brake Release' lever or hydraulic hand-pump mechanism; the operator carefully uses this to manually lift the brake pads, allowing gravity to slowly lower the load to the deck",
      "They must cut the wire rope with an oxy-acetylene torch"
    ],
    "exp": "You cannot sail a ship with a 30-tonne box dangling in the air. The EM brake has a mechanical override (like a parking brake release) that lets the crew safely drift the load to the deck without electricity.",
    "cat": "LIFTING",
    "id": "T16S_077"
  },
  {
    "q": "What is the primary maintenance check for the 'Slip Rings' found in older Wound-Rotor (Slip Ring) crane motors?",
    "a": "Inspect the carbon brushes for wear, check spring tension, and ensure the copper/brass slip rings are clean, smooth, and free of heavy grooving or carbon dust buildup",
    "opts": [
      "Fill the slip ring housing with heavy grease",
      "Paint the slip rings with an anti-corrosive coating",
      "Inspect the carbon brushes for wear, check spring tension, and ensure the copper/brass slip rings are clean, smooth, and free of heavy grooving or carbon dust buildup",
      "Megger test the slip rings at 5000V DC"
    ],
    "exp": "Slip ring motors vary their speed by adding resistance to the spinning rotor. If the brushes are worn out or bouncing on a dirty ring, the electrical connection sparks and fails, causing the crane to stutter or lose lifting power.",
    "cat": "LIFTING",
    "id": "T16S_078"
  },
  {
    "q": "Why is the crane's main power supply cable (which travels from the ship's deck up through the rotating crane pedestal) a frequent point of electrical failure?",
    "a": "It is subjected to constant twisting, torsion, and physical stress every time the crane slews; over time, this fatigue can snap the internal copper conductors or damage the insulation",
    "opts": [
      "It is frequently submerged in seawater",
      "It is made of low-quality aluminum instead of copper",
      "It is subjected to constant twisting, torsion, and physical stress every time the crane slews; over time, this fatigue can snap the internal copper conductors or damage the insulation",
      "It gets too hot from the sun"
    ],
    "exp": "To allow the crane to spin 360 degrees, the power cable hangs in a loose loop inside the pedestal (or uses a massive slip-ring assembly). This constant twisting is brutal on thick, rigid cables, often leading to internal phase-to-phase shorts.",
    "cat": "LIFTING",
    "id": "T16S_079"
  },
  {
    "q": "If a surveyor asks to see the crane's 'Limit Switch Test Record', what is the ETO expected to show?",
    "a": "A PMS logbook entry confirming that the ETO physically drove the crane to its extreme limits (up/down, left/right) to prove that the switches reliably cut the power before mechanical collision occurred",
    "opts": [
      "A printout of the PLC's software code",
      "A PMS logbook entry confirming that the ETO physically drove the crane to its extreme limits (up/down, left/right) to prove that the switches reliably cut the power before mechanical collision occurred",
      "A certificate from the factory where the switches were built",
      "A receipt showing new switches were purchased"
    ],
    "exp": "Limit switches get rusty, sticky, and out of alignment. The only way to prove they will save the crane from a careless operator is to intentionally try to overdrive the crane slowly and verify the switch clicks and stops the motion.",
    "cat": "LIFTING",
    "id": "T16S_080"
  },
  {
    "q": "What is the primary document presented to the Class Surveyor during a 5-yearly survey that proves the electrical system complies with SOLAS?",
    "a": "The Cargo Ship Safety Equipment Certificate (SEC) and the Safety Construction Certificate (SCC)",
    "opts": [
      "The Cargo Ship Safety Equipment Certificate (SEC) and the Safety Construction Certificate (SCC)",
      "The International Ship Security Certificate (ISSC)",
      "The Maritime Labour Certificate (MLC)",
      "The Bill of Lading"
    ],
    "exp": "The Safety Construction Certificate relies heavily on the electrical installation being robust, safe from fire, and redundant. The surveyor is verifying the ship still meets the standards required to hold this certificate.",
    "cat": "ELECTRICAL",
    "id": "T16S_081"
  },
  {
    "q": "When preparing for an electrical survey, what specific technical logs MUST the ETO have ready for the surveyor to review?",
    "a": "Insulation Resistance (Megger) logs for all major motors and generators, Emergency Generator test logs, battery specific gravity/load test logs, and the general Planned Maintenance System (PMS) records",
    "opts": [
      "The crew's internet usage logs",
      "The daily temperature logs of the main engine exhaust",
      "Insulation Resistance (Megger) logs for all major motors and generators, Emergency Generator test logs, battery specific gravity/load test logs, and the general Planned Maintenance System (PMS) records",
      "The radar target tracking history logs"
    ],
    "exp": "Surveyors don't have time to test every motor on the ship. They look at your Megger logbook. If you have cleanly recorded monthly IR readings for 5 years showing the motors are above 1 MΩ, they trust the system is maintained.",
    "cat": "ELECTRICAL",
    "id": "T16S_082"
  },
  {
    "q": "What is the exact physical procedure for testing the Overcurrent Trip of an Air Circuit Breaker (ACB) during a class survey?",
    "a": "Rack out the ACB to the 'Test' position, connect a secondary injection test kit to the CT terminals, and inject high currents (e.g., 150%, 200%, 600% of rated) to verify the relay trips at the exact time shown on its IDMT curve",
    "opts": [
      "Turn on all the ship's pumps at the same time until the breaker trips naturally",
      "Use a multimeter to measure the resistance of the breaker contacts",
      "Rack out the ACB to the 'Test' position, connect a secondary injection test kit to the CT terminals, and inject high currents (e.g., 150%, 200%, 600% of rated) to verify the relay trips at the exact time shown on its IDMT curve",
      "Press the red 'TRIP' button on the front of the panel"
    ],
    "exp": "You cannot safely test a 3000A breaker by actually short-circuiting the main busbar. You isolate the breaker, and use a briefcase-sized computer to inject 5 amps directly into the delicate relay brain to see if it reacts correctly to simulated massive faults.",
    "cat": "ELECTRICAL",
    "id": "T16S_083"
  },
  {
    "q": "During a secondary injection test, if the relay is injected with 600% of its rated current setting, what should the expected trip time be?",
    "a": "Virtually instantaneous (typically less than 0.1 seconds), as this represents a massive dead short-circuit fault",
    "opts": [
      "Virtually instantaneous (typically less than 0.1 seconds), as this represents a massive dead short-circuit fault",
      "It should never trip at 600%; it should just sound an alarm",
      "5 minutes",
      "15 to 20 seconds"
    ],
    "exp": "This tests the 'Instantaneous' element of the relay. 600% means two massive copper busbars just touched. The breaker must explode open instantly to prevent the switchboard from vaporizing.",
    "cat": "ELECTRICAL",
    "id": "T16S_084"
  },
  {
    "q": "According to SOLAS II-1/40, what are the strict 'Steady-State' limits for a generator's Automatic Voltage Regulator (AVR)?",
    "a": "The voltage must be maintained within ±2.5% of the rated voltage for all load conditions from no-load to full load",
    "opts": [
      "Within ±1% of rated voltage",
      "Within ±10% of rated voltage",
      "Within ±2.5% of the rated voltage for all load conditions from no-load to full load",
      "Within ±5% of rated voltage"
    ],
    "exp": "If the ship is running normally, the lights shouldn't flicker and the motors shouldn't overheat. The AVR must constantly tweak the magnetic field to hold 440V dead-steady within a tiny 2.5% window.",
    "cat": "ELECTRICAL",
    "id": "T16S_085"
  },
  {
    "q": "According to SOLAS II-1/40, what is the strict 'Transient' (Sudden Load) recovery limit for a generator's AVR?",
    "a": "When a massive load is suddenly switched on or off, the voltage must recover to within ±3% of the rated voltage within 1.5 seconds (commonly cited as 2 seconds in orals)",
    "opts": [
      "When a massive load is suddenly switched on or off, the voltage must recover to within ±3% of the rated voltage within 1.5 seconds (commonly cited as 2 seconds in orals)",
      "The voltage must never drop at all; it must be held perfectly flat",
      "The generator must trip instantly to protect the load",
      "The voltage must recover within 10 seconds"
    ],
    "exp": "When a 300kW bow thruster starts, the voltage violently crashes. The AVR must sense this crash, flood the rotor with DC field current, and yank the voltage back up to 440V in under 1.5 to 2 seconds.",
    "cat": "ELECTRICAL",
    "id": "T16S_086"
  },
  {
    "q": "How is the Transient Voltage Recovery test practically demonstrated to a surveyor during sea trials or surveys?",
    "a": "By running the generator at a steady load, then suddenly 'Throwing-On' a massive load (like a massive cooling pump started Direct-On-Line) while monitoring the voltage dip and recovery time on a fast-acting meter or oscilloscope",
    "opts": [
      "By manually turning off the AVR switch",
      "By throwing a bucket of water on the generator casing",
      "By running the generator at a steady load, then suddenly 'Throwing-On' a massive load (like a massive cooling pump started Direct-On-Line) while monitoring the voltage dip and recovery time on a fast-acting meter or oscilloscope",
      "By shorting out the main busbars"
    ],
    "exp": "The 'Load Throw-On' test is brutal. You watch the needle drop from 440V to 380V, and count how fast it snaps back to 440V. If it takes 5 seconds, the AVR is sluggish and fails SOLAS.",
    "cat": "ELECTRICAL",
    "id": "T16S_087"
  },
  {
    "q": "What is the SOLAS requirement for normal 'Steady-State' frequency variation on a marine generator?",
    "a": "Frequency must be maintained within ±5% of the rated frequency (e.g., ±3 Hz on a 60Hz system)",
    "opts": [
      "±10% of rated frequency",
      "±1% of rated frequency",
      "±5% of the rated frequency (e.g., ±3 Hz on a 60Hz system)",
      "Frequency is allowed to drift freely depending on the load"
    ],
    "exp": "This is a test of the engine's Governor, not the AVR. The governor must regulate fuel well enough to keep the AC sine wave between 57Hz and 63Hz at all times to prevent motors from overspeeding or stalling.",
    "cat": "ELECTRICAL",
    "id": "T16S_088"
  },
  {
    "q": "According to SOLAS II-1/29, what is the strict performance requirement for the Main Steering Gear?",
    "a": "It must be capable of putting the rudder from 35° on one side to 30° on the other side in not more than 28 seconds, with the ship at its deepest draught and maximum ahead service speed",
    "opts": [
      "It must be capable of putting the rudder from 35° on one side to 30° on the other side in not more than 28 seconds, with the ship at its deepest draught and maximum ahead service speed",
      "It must turn the rudder 90 degrees in 10 seconds",
      "It must automatically steer the ship to the nearest port if abandoned",
      "It must be capable of holding the rudder steady during a hurricane"
    ],
    "exp": "This proves the hydraulic pumps and electric motors are strong enough to fight the massive hydrodynamic force of the ocean hitting the rudder when the ship is at top speed.",
    "cat": "ELECTRICAL",
    "id": "T16S_089"
  },
  {
    "q": "Under SOLAS, how many identical, independent steering gear power units (motors/pumps) must be fitted on cargo ships over 10,000 GT?",
    "a": "At least two independent power units; if one fails, the other must be capable of maintaining steering capability immediately",
    "opts": [
      "It depends entirely on the ship's length, not GT",
      "At least two independent power units; if one fails, the other must be capable of maintaining steering capability immediately",
      "One massive unit is sufficient",
      "Four small units connected in series"
    ],
    "exp": "Redundancy is king. Over 10,000 GT, the ship is too large to rely on a single motor. If Motor 1 burns out, Motor 2 takes over the hydraulic pumping instantly.",
    "cat": "ELECTRICAL",
    "id": "T16S_090"
  },
  {
    "q": "What happens automatically if the primary steering gear power unit fails on a large vessel?",
    "a": "The standby unit must automatically start and come online within 45 seconds to restore steering pressure",
    "opts": [
      "The bridge must steer using a manual hand-crank",
      "The standby unit must automatically start and come online within 45 seconds to restore steering pressure",
      "The rudder locks in place permanently",
      "The ship drops anchor automatically"
    ],
    "exp": "If you are in a narrow canal and the steering motor trips, you don't have time to run to the engine room to press start. The auto-changeover logic ensures the backup motor fires up almost instantly.",
    "cat": "ELECTRICAL",
    "id": "T16S_091"
  },
  {
    "q": "What is the SOLAS requirement for pre-departure testing of the steering gear?",
    "a": "Within 12 hours before departure, the entire steering gear must be checked and tested, including full movement from bridge/local control, changeover between units, and all alarms",
    "opts": [
      "It only needs to be tested if the captain suspects a fault",
      "Within 12 hours before departure, the entire steering gear must be checked and tested, including full movement from bridge/local control, changeover between units, and all alarms",
      "It must be tested while the ship is moving at 5 knots",
      "It must be tested once a month"
    ],
    "exp": "Finding out your steering is broken while sailing out of the dock is too late. The crew must log a full functional test in the 12-hour window before unmooring.",
    "cat": "ELECTRICAL",
    "id": "T16S_092"
  },
  {
    "q": "What is WIDAS, and which specific SOLAS Chapter mandates its installation on bulk carriers?",
    "a": "Water Ingress Detection and Alarm System; mandated by SOLAS Chapter XII (Additional Safety Measures for Bulk Carriers)",
    "opts": [
      "Warning Indication for Dangerous Atmospheric Substances; SOLAS Chapter VII",
      "Water Ingress Detection and Alarm System; mandated by SOLAS Chapter XII (Additional Safety Measures for Bulk Carriers)",
      "Weather Indicator and Data Alert System; SOLAS Chapter V",
      "Wired Internal Distress Alarm System; SOLAS Chapter IV"
    ],
    "exp": "Bulk carriers used to sink rapidly without warning because water would flood a massive cargo hold invisibly. Chapter 12 forced all bulkers to install alarms so the bridge knows instantly if the ship is taking on water.",
    "cat": "ELECTRICAL",
    "id": "T16S_093"
  },
  {
    "q": "Where must WIDAS sensors be physically located inside a bulk carrier's cargo hold according to SOLAS XII/12?",
    "a": "They must be positioned to trigger alarms when the water level reaches 0.5 meters above the inner bottom, and a second alarm at no less than 15% of the hold depth (max 2 meters)",
    "opts": [
      "Floating freely on top of the cargo",
      "Embedded in the outer hull plating",
      "At the very top of the hatch coaming",
      "They must be positioned to trigger alarms when the water level reaches 0.5 meters above the inner bottom, and a second alarm at no less than 15% of the hold depth (max 2 meters)"
    ],
    "exp": "The 0.5m alarm gives an early 'Pre-Alarm' warning of a small leak. The 2m alarm is the 'Main Alarm', indicating massive, life-threatening flooding of the hold.",
    "cat": "ELECTRICAL",
    "id": "T16S_094"
  },
  {
    "q": "Besides the cargo holds, where else MUST WIDAS sensors be installed on a bulk carrier?",
    "a": "In any ballast tank forward of the collision bulkhead (Forepeak tank) and any dry/void space extending forward of the foremost cargo hold",
    "opts": [
      "Inside the ship's funnel",
      "In the Master's cabin and the galley",
      "Inside the main engine lube oil sump",
      "In any ballast tank forward of the collision bulkhead (Forepeak tank) and any dry/void space extending forward of the foremost cargo hold"
    ],
    "exp": "If the ship hits a rogue wave or floating container, the bow takes the impact. A flooded forepeak drops the ship's nose into the water, making sinking imminent. The bridge must know if the bow is filling with water.",
    "cat": "ELECTRICAL",
    "id": "T16S_095"
  },
  {
    "q": "What type of sensors are most commonly used in WIDAS installations?",
    "a": "Magnetic float switches in heavy protective cages, or electrochemical conductivity probes that detect when seawater bridges the gap between two electrodes",
    "opts": [
      "Magnetic float switches in heavy protective cages, or electrochemical conductivity probes that detect when seawater bridges the gap between two electrodes",
      "Acoustic sonar pingers",
      "Thermal cameras that look for cold water",
      "Optical lasers that measure the distance to the floor"
    ],
    "exp": "Cargo holds are incredibly harsh environments (coal dust, iron ore, heavy grabs). The sensors must be ultra-robust. Float switches or rugged metal conductivity prongs are the only things that survive the abuse.",
    "cat": "ELECTRICAL",
    "id": "T16S_096"
  },
  {
    "q": "What does SOLAS require regarding the 'Transitional Source of Emergency Electrical Power'?",
    "a": "A battery bank capable of automatically supplying emergency lighting, navigation lights, and internal comms for a minimum of 30 minutes during the time the emergency generator is starting up",
    "opts": [
      "A hand-cranked generator located on the bridge",
      "A battery bank capable of automatically supplying emergency lighting, navigation lights, and internal comms for a minimum of 30 minutes during the time the emergency generator is starting up",
      "A dedicated solar panel array",
      "A massive supercapacitor that runs the main engine for 1 minute"
    ],
    "exp": "When the ship blacks out, it takes up to 45 seconds for the emergency generator to start and connect. The transitional 24V battery bank instantly kicks on, keeping the ship from going pitch black and allowing the crew to see while they react.",
    "cat": "ELECTRICAL",
    "id": "T16S_097"
  },
  {
    "q": "During a blackout test with a surveyor, how do you verify the Transitional Source is working?",
    "a": "Trip the main breaker; immediately verify that specific emergency lights (often marked with a red dot) and the bridge console stay illuminated by the batteries BEFORE the emergency generator starts",
    "opts": [
      "Ask the captain if his cabin lights are on",
      "Wait 45 seconds and see if the lights turn off",
      "Measure the voltage of the main switchboard",
      "Trip the main breaker; immediately verify that specific emergency lights (often marked with a red dot) and the bridge console stay illuminated by the batteries BEFORE the emergency generator starts"
    ],
    "exp": "The test proves that the instant AC power dies, the 24V DC contactors drop in, bridging the battery power to the vital LED lights in the stairwells and engine room.",
    "cat": "ELECTRICAL",
    "id": "T16S_098"
  },
  {
    "q": "What is a 'Preferential Trip' test during an electrical survey?",
    "a": "A test to prove that if the running generator becomes overloaded, the switchboard automatically sheds (turns off) non-essential loads (like AC or galley ovens) in a timed sequence to save the generator from blacking out",
    "opts": [
      "A test to prove that if the running generator becomes overloaded, the switchboard automatically sheds (turns off) non-essential loads (like AC or galley ovens) in a timed sequence to save the generator from blacking out",
      "A test to see which generator starts fastest",
      "A test of the crew's preference for emergency lighting",
      "A test that forces the ship to steer in a circle"
    ],
    "exp": "If the ship needs more power to run a critical fire pump, it sacrifices comfort. The ETO simulates an overload (using injection or software), and verifies that Stage 1 trips the AC, Stage 2 trips the blowers, etc.",
    "cat": "ELECTRICAL",
    "id": "T16S_099"
  },
  {
    "q": "What is the function of the 'Reverse Power Relay' tested during the generator survey?",
    "a": "It prevents a running generator from acting as an electric motor if its diesel engine fails, by tripping the breaker when power flows backward from the live busbar into the generator",
    "opts": [
      "It acts as a battery charger for the main engine",
      "It prevents a running generator from acting as an electric motor if its diesel engine fails, by tripping the breaker when power flows backward from the live busbar into the generator",
      "It reverses the flow of electricity to clear short circuits",
      "It prevents the ship from moving backward"
    ],
    "exp": "If Gen 1 and Gen 2 are sharing load, and Gen 1 runs out of fuel, it stops pushing. The live 440V from Gen 2 will rush into Gen 1, turning it into a massive motor that violently spins the dead diesel engine. The relay detects this backward current and cuts the cord.",
    "cat": "ELECTRICAL",
    "id": "T16S_100"
  },
  {
    "q": "How is a Reverse Power Relay physically tested during a survey?",
    "a": "While two generators are running in parallel, the ETO slowly reduces the fuel/speed governor setting of the test generator until it stops taking load and begins drawing power (motoring); the relay should trip at around 5-10% reverse power",
    "opts": [
      "By shorting the main busbar to ground",
      "While two generators are running in parallel, the ETO slowly reduces the fuel/speed governor setting of the test generator until it stops taking load and begins drawing power (motoring); the relay should trip at around 5-10% reverse power",
      "By applying 440V directly to the rotor",
      "By swapping two phases of the generator"
    ],
    "exp": "You intentionally starve one engine of fuel using the switchboard speed-lower switch. The kW meter drops to zero, goes negative, and the breaker should instantly trip open.",
    "cat": "ELECTRICAL",
    "id": "T16S_101"
  },
  {
    "q": "What does SOLAS II-1 require regarding the electrical equipment used in the ship's battery room?",
    "a": "The room must be treated as a hazardous explosive area due to hydrogen gas generation; all electrical fittings (lights, fans) must be Ex-certified (explosion-proof)",
    "opts": [
      "It must be heated to 40°C at all times",
      "The room must be treated as a hazardous explosive area due to hydrogen gas generation; all electrical fittings (lights, fans) must be Ex-certified (explosion-proof)",
      "No electrical equipment is allowed inside the room whatsoever",
      "It must be flooded with CO2 permanently"
    ],
    "exp": "Lead-acid batteries vent highly explosive Hydrogen gas while charging. A standard light switch sparking would blow the room apart. Spark-proof (Ex d or Ex e) fittings and powerful exhaust fans are mandatory.",
    "cat": "ELECTRICAL",
    "id": "T16S_102"
  },
  {
    "q": "What is the SOLAS requirement for 'Earth Fault' monitoring on a ship's ungrounded 440V distribution system?",
    "a": "A device must be installed (Earth Fault Indicator or Relay) to continuously monitor the insulation level to earth and give a visible and audible alarm if the insulation resistance drops to a dangerously low value",
    "opts": [
      "Earth faults are ignored on ships to maintain power",
      "A device must be installed (Earth Fault Indicator or Relay) to continuously monitor the insulation level to earth and give a visible and audible alarm if the insulation resistance drops to a dangerously low value",
      "The system must instantly trip the main generator if an earth fault occurs",
      "The system must route all earth faults into a battery bank"
    ],
    "exp": "Marine systems are usually 'Insulated Neutral'. The first earth fault doesn't cause a short circuit or trip any breakers; it just rings an alarm. This allows the ship to keep running its pumps while the ETO hunts down the grounded wire.",
    "cat": "ELECTRICAL",
    "id": "T16S_103"
  },
  {
    "q": "If the Surveyor asks for the ship's 'Electrical Load Analysis' or 'Power Balance Calculation', what are they looking for?",
    "a": "An approved document proving that the ship's generators have the mathematical capacity to supply all maximum combined loads during various operational states (At Sea, Maneuvering, Cargo Operations)",
    "opts": [
      "A graph showing the voltage fluctuations over the last year",
      "An approved document proving that the ship's generators have the mathematical capacity to supply all maximum combined loads during various operational states (At Sea, Maneuvering, Cargo Operations)",
      "A log of the daily fuel consumed by the generators",
      "A list of the spare parts available for the switchboard"
    ],
    "exp": "Before the ship is built, engineers calculate the worst-case scenario (e.g., Bow Thruster + Fire Pumps + Reefers all running). This document proves to the class society that the 3 installed generators are actually big enough to handle the ship without blacking out.",
    "cat": "ELECTRICAL",
    "id": "T16S_104"
  },
  {
    "q": "What specific tests are performed on the ship's Navigational Lights during the safety survey?",
    "a": "Verify all primary lights work, manually test the changeover switch to the backup bulbs/circuits, and prove that if a bulb burns out, the 'Failure Alarm' on the bridge panel immediately sounds",
    "opts": [
      "Measure the brightness of the lights in lumens",
      "Check that the lights are visible from outer space",
      "Ensure the lights can strobe to send Morse code",
      "Verify all primary lights work, manually test the changeover switch to the backup bulbs/circuits, and prove that if a bulb burns out, the 'Failure Alarm' on the bridge panel immediately sounds"
    ],
    "exp": "If the Port red light burns out at night, another ship might think you are a different vessel and crash into you. The panel must scream at the officer so they can immediately flick the switch to the duplicate backup bulb in the housing.",
    "cat": "ELECTRICAL",
    "id": "T16S_105"
  },
  {
    "q": "What is the SOLAS requirement for the power supply to the Navigational Light Panel?",
    "a": "It must be supplied by two alternative circuits, one from the main switchboard and one directly from the emergency switchboard, with a changeover switch located on the bridge",
    "opts": [
      "It must be supplied by two alternative circuits, one from the main switchboard and one directly from the emergency switchboard, with a changeover switch located on the bridge",
      "It must be powered by small AA batteries",
      "It must be wired directly to the ship's propeller shaft generator",
      "It is only powered by the emergency generator"
    ],
    "exp": "Nav lights are a critical anti-collision system. If the main board dies, the officer must be able to instantly switch the lights over to the emergency board so the ship isn't invisible in the dark.",
    "cat": "ELECTRICAL",
    "id": "T16S_106"
  },
  {
    "q": "Under SOLAS, what must be fitted to an electric motor that is installed in an environment where condensation is likely to form when it is stopped (e.g., Bow Thruster)?",
    "a": "An anti-condensation space heater; this 220V heater must turn ON automatically when the motor stops to keep the windings dry and maintain insulation resistance",
    "opts": [
      "An anti-condensation space heater; this 220V heater must turn ON automatically when the motor stops to keep the windings dry and maintain insulation resistance",
      "A permanent silica-gel dehumidifier packet",
      "A waterproof tarp thrown over the motor",
      "A small drain hole drilled into the stator casing"
    ],
    "exp": "Cold iron in a damp bow tunnel sweats water. Water ruins copper insulation. The heater keeps the inside of the motor 5 degrees warmer than the room, preventing condensation entirely.",
    "cat": "ELECTRICAL",
    "id": "T16S_107"
  },
  {
    "q": "How does the surveyor check the 'Under-Voltage Trip' (UVT) on an Air Circuit Breaker during a survey?",
    "a": "By isolating the control voltage to the UVT coil while the breaker is closed; the breaker should instantly snap open (trip) to protect the bus from a low-voltage condition",
    "opts": [
      "By manually pressing the OFF button on the generator",
      "By turning off the lights in the switchboard room",
      "By isolating the control voltage to the UVT coil while the breaker is closed; the breaker should instantly snap open (trip) to protect the bus from a low-voltage condition",
      "By increasing the voltage to 500V to see if it trips"
    ],
    "exp": "The UVT acts as a fail-safe. If the generator voltage drops below ~70% (which would stall motors and cause massive current spikes), the UVT loses its magnetic grip and physically trips the breaker.",
    "cat": "ELECTRICAL",
    "id": "T16S_108"
  },
  {
    "q": "What specific electrical test must an ETO perform on the ship's Fire Detection Panel during a safety survey?",
    "a": "Test multiple individual smoke/heat detectors across different zones using test aerosol/heat to prove the panel correctly identifies the zone, sounds the alarms, and can successfully be reset",
    "opts": [
      "Test the panel's connection to the ship's Wi-Fi network",
      "Test multiple individual smoke/heat detectors across different zones using test aerosol/heat to prove the panel correctly identifies the zone, sounds the alarms, and can successfully be reset",
      "Disconnect all the detectors to see if the ship sinks",
      "Burn a piece of paper directly under the main panel"
    ],
    "exp": "The surveyor wants to see that a fire in Cabin 304 actually shows up as 'Cabin 304' on the bridge, and that the bell rings loudly enough to wake the crew.",
    "cat": "ELECTRICAL",
    "id": "T16S_109"
  },
  {
    "q": "If the Surveyor asks to see the 'GMDSS Maintenance Log', what critical electrical information are they looking for?",
    "a": "Records proving the ETO conducts daily, weekly, and monthly tests, specifically checking the voltage and specific gravity of the dedicated 24V GMDSS radio battery bank, and proving it can handle the load",
    "opts": [
      "Records proving the ETO conducts daily, weekly, and monthly tests, specifically checking the voltage and specific gravity of the dedicated 24V GMDSS radio battery bank, and proving it can handle the load",
      "The passwords to the ship's satellite internet",
      "The receipt for purchasing the VHF radios",
      "A list of all the radio stations the captain has spoken to"
    ],
    "exp": "GMDSS is the ultimate lifeline. If the ship goes down, those batteries are the only thing powering the distress beacon. Surveyors scrutinize the battery logs to ensure they aren't dead or dried out.",
    "cat": "ELECTRICAL",
    "id": "T16S_110"
  },
  {
    "q": "What is the primary objective of the ISM Code (International Safety Management Code) mandated by SOLAS Chapter IX?",
    "a": "To ensure safety at sea, prevention of human injury or loss of life, and avoidance of damage to the environment and to property",
    "opts": [
      "To regulate the wages and working hours of seafarers",
      "To provide armed guards for vessels in pirate waters",
      "To ensure safety at sea, prevention of human injury or loss of life, and avoidance of damage to the environment and to property",
      "To maximize the commercial profitability of shipping companies"
    ],
    "exp": "The ISM code forces companies to have a documented, systematic approach to safety (a Safety Management System or SMS), preventing the 'run it until it breaks' mentality that caused historic disasters.",
    "cat": "SAFETY",
    "id": "T16S_111"
  },
  {
    "q": "Under the ISM Code, what is the 'DOC' and to whom is it issued?",
    "a": "Document of Compliance; it is issued to the shipping COMPANY ashore by the flag state, proving their Safety Management System meets international standards",
    "opts": [
      "Details of Construction; issued to the shipyard",
      "Declaration of Cargo; issued to the ship's Master",
      "Directive of Crewing; issued to the manning agency",
      "Document of Compliance; it is issued to the shipping COMPANY ashore by the flag state, proving their Safety Management System meets international standards"
    ],
    "exp": "The DOC proves the office in London or Singapore knows how to manage safety. Without a valid DOC, the company legally cannot operate ships.",
    "cat": "SAFETY",
    "id": "T16S_112"
  },
  {
    "q": "Under the ISM Code, what is the 'SMC' and to whom is it issued?",
    "a": "Safety Management Certificate; it is issued to the individual SHIP after an onboard audit proves the crew is successfully implementing the company's SMS",
    "opts": [
      "Ship Manning Certificate; issued to the crewing manager",
      "System Maintenance Code; issued to the Chief Engineer",
      "Structural Maritime Certificate; issued by the shipyard",
      "Safety Management Certificate; it is issued to the individual SHIP after an onboard audit proves the crew is successfully implementing the company's SMS"
    ],
    "exp": "The DOC is for the office; the SMC is for the ship. The auditor comes onboard, watches drills, checks logs, and ensures the crew is actually following the safety binders provided by the company.",
    "cat": "SAFETY",
    "id": "T16S_113"
  },
  {
    "q": "What is the validity period for both the DOC and the SMC under the ISM Code?",
    "a": "5 years, subject to annual verification audits (for DOC) and intermediate audits (for SMC)",
    "opts": [
      "5 years, subject to annual verification audits (for DOC) and intermediate audits (for SMC)",
      "Lifetime validity as long as the ship doesn't sink",
      "10 years, with no intermediate checks",
      "1 year, requiring complete renewal annually"
    ],
    "exp": "Like most major maritime certificates, they operate on a 5-year cycle, but require regular 'check-ups' in between to ensure standards haven't slipped.",
    "cat": "SAFETY",
    "id": "T16S_114"
  },
  {
    "q": "What is the role of the 'Designated Person Ashore' (DPA) under the ISM Code?",
    "a": "A shore-based person providing a direct link between the ship's crew and the highest level of company management, responsible for monitoring the safety and pollution prevention aspects of the ship",
    "opts": [
      "The person responsible for buying spare parts for the engine room",
      "A lawyer who defends the company in court",
      "A shore-based person providing a direct link between the ship's crew and the highest level of company management, responsible for monitoring the safety and pollution prevention aspects of the ship",
      "The port agent who arranges pilotage and tugboats"
    ],
    "exp": "If the Captain ignores a safety hazard to save time, the ETO or any crew member can bypass the Captain and call the DPA directly. The DPA has the power to walk into the CEO's office and demand the ship be fixed.",
    "cat": "SAFETY",
    "id": "T16S_115"
  },
  {
    "q": "What is the difference between a 'Non-Conformity' and a 'Major Non-Conformity' during an ISM audit?",
    "a": "A Non-Conformity is a failure to comply with an SMS rule requiring eventual correction; a Major Non-Conformity poses a serious, immediate threat to life/ship/environment and requires immediate corrective action, often resulting in certificate suspension",
    "opts": [
      "There is no legal difference; both result in instant detention",
      "A Non-Conformity applies to paperwork; a Major Non-Conformity applies to machinery",
      "A Non-Conformity is a failure to comply with an SMS rule requiring eventual correction; a Major Non-Conformity poses a serious, immediate threat to life/ship/environment and requires immediate corrective action, often resulting in certificate suspension",
      "A Non-Conformity is a verbal warning; a Major Non-Conformity is a $10,000 fine"
    ],
    "exp": "Forgetting to sign a daily logbook is a minor non-conformity. The fire pumps being completely broken and hidden from the office is a Major Non-Conformity. The ship will be detained and its SMC pulled instantly.",
    "cat": "SAFETY",
    "id": "T16S_116"
  },
  {
    "q": "What does the ISPS Code (SOLAS Chapter XI-2) govern?",
    "a": "The International Ship and Port Facility Security Code; it establishes a framework to detect and deter security threats, terrorism, and piracy",
    "opts": [
      "The International Ship Pollution Standards; it governs oil spills",
      "The International Safety Plan for Ships; it replaces the ISM code",
      "The Internal Ship Power System; it regulates electrical generators",
      "The International Ship and Port Facility Security Code; it establishes a framework to detect and deter security threats, terrorism, and piracy"
    ],
    "exp": "Born out of the 9/11 attacks, ISPS treats the ship like an airport. It demands locked doors, ID checks, security patrols, and strict anti-terrorism protocols.",
    "cat": "SAFETY",
    "id": "T16S_117"
  },
  {
    "q": "Under the ISPS Code, what does 'Security Level 1' (MARSEC 1) mean?",
    "a": "NORMAL: The minimum appropriate protective security measures shall be maintained at all times",
    "opts": [
      "NORMAL: The minimum appropriate protective security measures shall be maintained at all times",
      "OFF: The ship is in a completely safe port with no security needed",
      "EXCEPTIONAL: An attack is imminent, requiring lockdown",
      "HEIGHTENED: A specific threat is likely, requiring extra guards"
    ],
    "exp": "Level 1 is everyday operation. Visitors must show ID, restricted areas (like the bridge and engine room) are locked, and basic watchkeeping is maintained.",
    "cat": "SAFETY",
    "id": "T16S_118"
  },
  {
    "q": "Under the ISPS Code, what does 'Security Level 3' (MARSEC 3) indicate, and what actions are taken?",
    "a": "EXCEPTIONAL: A security incident is probable or imminent; maximum security measures are enacted, the ship may be locked down, and non-essential personnel are evacuated or confined",
    "opts": [
      "PIRACY: The crew is issued weapons to fight off attackers",
      "EXCEPTIONAL: A security incident is probable or imminent; maximum security measures are enacted, the ship may be locked down, and non-essential personnel are evacuated or confined",
      "HEIGHTENED: Extra patrols are added, but cargo continues",
      "NORMAL: Standard operations continue"
    ],
    "exp": "Level 3 means intelligence says the ship or the specific port is about to be attacked. Cargo operations usually stop, the ship seals itself, and prepares to defend or escape.",
    "cat": "SAFETY",
    "id": "T16S_119"
  },
  {
    "q": "What specific ETO duties fall under the ISPS Code?",
    "a": "Maintaining the CCTV systems, ensuring electronic access control (keypads/card readers) to restricted areas works, and testing the Ship Security Alert System (SSAS) and communication networks",
    "opts": [
      "Searching passenger luggage for contraband",
      "Standing armed guard at the gangway",
      "Providing medical care to wounded security personnel",
      "Maintaining the CCTV systems, ensuring electronic access control (keypads/card readers) to restricted areas works, and testing the Ship Security Alert System (SSAS) and communication networks"
    ],
    "exp": "The ETO ensures the technological eyes, ears, and locks of the ship are functional so the crew can enforce the security plan effectively.",
    "cat": "SAFETY",
    "id": "T16S_120"
  },
  {
    "q": "What is the SSAS, and what happens when it is activated?",
    "a": "Ship Security Alert System; pressing the hidden button sends a silent distress signal via satellite directly to the flag state and shipping company, indicating the ship is under attack (piracy/terrorism)",
    "opts": [
      "Ship Security Alert System; pressing the hidden button sends a silent distress signal via satellite directly to the flag state and shipping company, indicating the ship is under attack (piracy/terrorism)",
      "Sonar Security Acoustic System; it blasts noise underwater to deter divers",
      "Ship Safety Alarm System; it rings loud bells throughout the ship",
      "Satellite Steering Action System; it allows the company to drive the ship remotely"
    ],
    "exp": "The SSAS is a silent panic button. If pirates board the ship, ringing an alarm might cause them to start shooting. The silent button alerts the military/company to send help without the attackers knowing.",
    "cat": "SAFETY",
    "id": "T16S_121"
  },
  {
    "q": "What is the MLC 2006 (Maritime Labour Convention), and which international body created it?",
    "a": "Created by the ILO (International Labour Organization), it is the 'Seafarers' Bill of Rights' establishing minimum standards for working conditions, wages, accommodation, and medical care",
    "opts": [
      "Created by the WHO, it dictates the exact diet of seafarers",
      "Created by the UN, it bans the transport of slaves",
      "Created by the ILO (International Labour Organization), it is the 'Seafarers' Bill of Rights' establishing minimum standards for working conditions, wages, accommodation, and medical care",
      "Created by the IMO, it regulates the size of lifeboats"
    ],
    "exp": "MLC protects human rights. If a ship isn't paying its crew, or feeding them properly, Port State Control can detain the ship under MLC violations just as strictly as if the engine was broken.",
    "cat": "SAFETY",
    "id": "T16S_122"
  },
  {
    "q": "According to the MLC 2006 and STCW, what are the strict minimum 'Rest Hour' requirements for a seafarer?",
    "a": "A minimum of 10 hours of rest in any 24-hour period, and 77 hours in any 7-day period; the daily rest can be divided into no more than two periods, one of which must be at least 6 hours long",
    "opts": [
      "Rest hours are entirely up to the discretion of the Captain",
      "A minimum of 10 hours of rest in any 24-hour period, and 77 hours in any 7-day period; the daily rest can be divided into no more than two periods, one of which must be at least 6 hours long",
      "A minimum of 8 hours of rest in 24 hours, and 40 hours a week",
      "A minimum of 12 hours of rest every single day without exception"
    ],
    "exp": "Fatigue causes shipwrecks. The law mandates these exact numbers. Falsifying rest hour logs to hide the fact that you worked 18 hours is a serious offense that can lead to ship detention and personal prosecution.",
    "cat": "SAFETY",
    "id": "T16S_123"
  },
  {
    "q": "What did the STCW 'Manila Amendments' (2010) specifically change regarding the Electro-Technical Officer (ETO)?",
    "a": "It formally recognized the ETO as a certified officer rank under STCW Chapter III (Table A-III/6), creating mandatory global training and certification standards for marine electrical officers",
    "opts": [
      "It formally recognized the ETO as a certified officer rank under STCW Chapter III (Table A-III/6), creating mandatory global training and certification standards for marine electrical officers",
      "It abolished the ETO rank, merging it with the Chief Engineer",
      "It restricted ETOs to only working on passenger ships",
      "It removed the requirement for ETOs to understand high voltage"
    ],
    "exp": "Before 2010, the 'Electrician' was an uncertified rating or a company-specific role. The Manila amendments recognized that modern ships are massive floating computers, making the ETO a legally mandated, licensed officer.",
    "cat": "SAFETY",
    "id": "T16S_124"
  },
  {
    "q": "What defines an 'Enclosed Space' on a ship?",
    "a": "A space with limited openings for entry/exit, inadequate natural ventilation, and not designed for continuous worker occupancy (e.g., cargo holds, ballast tanks, duct keels)",
    "opts": [
      "A space with limited openings for entry/exit, inadequate natural ventilation, and not designed for continuous worker occupancy (e.g., cargo holds, ballast tanks, duct keels)",
      "The engine control room (ECR)",
      "Only spaces that store toxic chemicals",
      "Any room with a locking door"
    ],
    "exp": "Because they lack fresh air flow, enclosed spaces can silently fill with toxic gas or lose all their oxygen due to rust. Walking into one without testing the air is frequently fatal.",
    "cat": "SAFETY",
    "id": "T16S_125"
  },
  {
    "q": "Before entering an Enclosed Space, the atmosphere must be tested. What is the safe range for Oxygen (O2) concentration?",
    "a": "Between 19.5% and 23.5% (Normal air is 20.9%)",
    "opts": [
      "Between 19.5% and 23.5% (Normal air is 20.9%)",
      "Between 10% and 15%",
      "Between 50% and 60%",
      "Exactly 100%"
    ],
    "exp": "Below 19.5%, you risk passing out from hypoxia. Above 23.5%, the air is 'oxygen enriched' making any spark wildly explosive.",
    "cat": "SAFETY",
    "id": "T16S_126"
  },
  {
    "q": "When testing an enclosed space, what is the highly toxic gas Hydrogen Sulfide (H2S), and what is its strict exposure limit?",
    "a": "A deadly gas that smells like rotten eggs (but quickly paralyzes the sense of smell); the Threshold Limit Value (TLV) is incredibly low, typically 1 to 5 ppm",
    "opts": [
      "A deadly gas that smells like rotten eggs (but quickly paralyzes the sense of smell); the Threshold Limit Value (TLV) is incredibly low, typically 1 to 5 ppm",
      "A sweet-smelling gas used for refrigeration; limit is 1000 ppm",
      "A heavy gas that turns into acid; limit is 500 ppm",
      "An invisible gas that causes uncontrollable laughing; limit is 50 ppm"
    ],
    "exp": "H2S is produced by rotting cargo, sewage, or crude oil. It is lethal. If your gas meter shows even 5 parts per million of H2S, you do not enter the space without a breathing apparatus.",
    "cat": "SAFETY",
    "id": "T16S_127"
  },
  {
    "q": "What is the 'Hong Kong Convention' (HKC)?",
    "a": "An international convention for the Safe and Environmentally Sound Recycling of Ships, ensuring end-of-life vessels do not pose risks to human health or the environment when scrapped",
    "opts": [
      "A regulation governing the taxation of cargo in Asian ports",
      "An international convention for the Safe and Environmentally Sound Recycling of Ships, ensuring end-of-life vessels do not pose risks to human health or the environment when scrapped",
      "A treaty establishing the rules for rescuing refugees at sea",
      "A treaty banning the transport of illegal wildlife"
    ],
    "exp": "Historically, ships were driven onto beaches in developing nations and chopped apart by hand, releasing tons of asbestos and oil into the sea. The HKC forces the industry to recycle ships cleanly and safely.",
    "cat": "SAFETY",
    "id": "T16S_128"
  },
  {
    "q": "Under the Hong Kong Convention, what is the 'IHM' (Inventory of Hazardous Materials) that an ETO must help maintain?",
    "a": "A living document listing the location and quantities of all hazardous materials onboard (e.g., asbestos, PCBs in old capacitors, mercury in fluorescent tubes, TBT paint)",
    "opts": [
      "A living document listing the location and quantities of all hazardous materials onboard (e.g., asbestos, PCBs in old capacitors, mercury in fluorescent tubes, TBT paint)",
      "A list of all the dangerous weapons carried by the anti-piracy guards",
      "A record of all the crew members with contagious diseases",
      "A logbook of all the fuel oil consumed during the voyage"
    ],
    "exp": "When you replace a radar screen or an old capacitor, you must update the IHM. When the ship is finally scrapped 20 years later, the recycling yard uses this document to safely remove the toxic components before chopping the steel.",
    "cat": "SAFETY",
    "id": "T16S_129"
  },
  {
    "q": "What is the 'CII' (Carbon Intensity Indicator) introduced by the IMO?",
    "a": "An operational rating system (A through E) that measures how efficiently a ship transports goods, calculated in grams of CO2 emitted per cargo-carrying capacity and nautical mile",
    "opts": [
      "A measure of how much black smoke comes out of the funnel",
      "An operational rating system (A through E) that measures how efficiently a ship transports goods, calculated in grams of CO2 emitted per cargo-carrying capacity and nautical mile",
      "A technical score measuring the physical horsepower of the engine",
      "A tax applied to ships entering European ports"
    ],
    "exp": "CII grades the ship every year. If you get a D or E rating (too much CO2 for the distance traveled), the ship is forced to submit a mandatory corrective action plan to improve its efficiency.",
    "cat": "SAFETY",
    "id": "T16S_130"
  },
  {
    "q": "How can an ETO directly contribute to improving a ship's CII rating under SEEMP Part 3?",
    "a": "By optimizing power management (avoiding running unnecessary generators), retrofitting LED lighting, installing VFDs on large cooling pumps, and maintaining Shore Power (Cold Ironing) equipment",
    "opts": [
      "By turning off the ship's navigation radars at night",
      "By dumping waste oil overboard to lighten the ship",
      "By overriding the governor to make the engine run faster",
      "By optimizing power management (avoiding running unnecessary generators), retrofitting LED lighting, installing VFDs on large cooling pumps, and maintaining Shore Power (Cold Ironing) equipment"
    ],
    "exp": "Every kilowatt of electricity wasted is fuel burned by the generator. By aggressively hunting down electrical inefficiency (using VFDs and LEDs), the ETO cuts fuel burn, lowering the ship's CO2 emissions and improving the CII score.",
    "cat": "SAFETY",
    "id": "T16S_131"
  },
  {
    "q": "What is the 'EEXI' (Energy Efficiency Existing Ship Index)?",
    "a": "A one-time technical measure of a ship's inherent design efficiency; many ships comply by installing a verifiable 'Shaft Power Limitation' (ShaPoLi) or Engine Power Limitation (EPL) system",
    "opts": [
      "A one-time technical measure of a ship's inherent design efficiency; many ships comply by installing a verifiable 'Shaft Power Limitation' (ShaPoLi) or Engine Power Limitation (EPL) system",
      "A rating of how much electricity the crew uses in their cabins",
      "A test of the emergency generator's fuel efficiency",
      "A daily report of the ship's fuel consumption"
    ],
    "exp": "While CII measures how you OPERATE the ship, EEXI measures how the ship is BUILT. To pass the new strict EEXI rules, older ships install electronic or mechanical limiters to permanently cap their maximum engine power, forcibly making them slower and greener.",
    "cat": "SAFETY",
    "id": "T16S_132"
  },
  {
    "q": "According to the new 2026 SOLAS V amendments, what new electronic device is mandatory on containerships and bulk carriers ≥3,000 GT?",
    "a": "An Electronic Inclinometer, which must provide real-time roll angle data to the bridge and actively record this data into the Voyage Data Recorder (VDR)",
    "opts": [
      "A massive gyroscope to stabilize the ship",
      "A drone to inspect the outside of the hull",
      "An Electronic Inclinometer, which must provide real-time roll angle data to the bridge and actively record this data into the Voyage Data Recorder (VDR)",
      "A laser system to measure the height of the waves"
    ],
    "exp": "Parametric rolling has caused container ships to violently lose thousands of boxes overboard. The inclinometer gives the captain hard data on how violently the ship is rolling, and records it in the 'black box' for accident investigation.",
    "cat": "SAFETY",
    "id": "T16S_133"
  },
  {
    "q": "What is the new mandatory reporting obligation under SOLAS/MARPOL effective Jan 1, 2026, regarding Lost Containers?",
    "a": "Ships MUST immediately report any containers lost overboard to the nearest coastal state, detailing the position, number of containers, and if Dangerous Goods (IMDG) were involved",
    "opts": [
      "Ships must abandon the voyage and return to the loading port",
      "Ships must stop and fish the containers out of the water",
      "Ships MUST immediately report any containers lost overboard to the nearest coastal state, detailing the position, number of containers, and if Dangerous Goods (IMDG) were involved",
      "Ships must pay a $1M fine immediately via satellite transfer"
    ],
    "exp": "Floating shipping containers are incredibly dangerous to small boats and submarines. Previously, reporting was encouraged but loose. Now, it is a strict statutory obligation to broadcast the hazard to coastal authorities immediately.",
    "cat": "SAFETY",
    "id": "T16S_134"
  },
  {
    "q": "What is the ETO's critical responsibility during a 'Lost Container' event?",
    "a": "Ensure all GMDSS communication equipment is working to broadcast the danger message, and IMMEDIATELY activate the Voyage Data Recorder (VDR) 'Save/Preserve' function to lock in the roll data and ship track",
    "opts": [
      "Reprogram the autopilot to avoid the area",
      "Shut down the main engine to prevent the propeller from hitting a box",
      "Ensure all GMDSS communication equipment is working to broadcast the danger message, and IMMEDIATELY activate the Voyage Data Recorder (VDR) 'Save/Preserve' function to lock in the roll data and ship track",
      "Turn on all the floodlights to look for the boxes"
    ],
    "exp": "The VDR constantly overwrites old data (usually every 12 to 48 hours). If the ETO doesn't hit the 'Save' button, the crucial data proving why the ship rolled and lost the cargo will be erased before the investigators arrive.",
    "cat": "SAFETY",
    "id": "T16S_135"
  },
  {
    "q": "What is 'Override Authority' regarding safety trips on shipboard machinery?",
    "a": "The Master or Chief Engineer's authority to intentionally bypass a safety shutdown (e.g., overriding a main engine trip to avoid crashing the ship), accepting mechanical damage to maintain navigational control",
    "opts": [
      "The Master or Chief Engineer's authority to intentionally bypass a safety shutdown (e.g., overriding a main engine trip to avoid crashing the ship), accepting mechanical damage to maintain navigational control",
      "The ETO's ability to change passwords on the alarm computer",
      "The Port State Control officer's right to detain the ship",
      "The automatic system bypassing human commands"
    ],
    "exp": "If a low oil pressure trip is about to kill the engine while you are 50 meters from hitting a dock, the Captain can flick the override. The engine will be destroyed by friction, but it will keep pushing water long enough to save the ship and crew.",
    "cat": "SAFETY",
    "id": "T16S_136"
  },
  {
    "q": "What strict protocol MUST be followed when any safety system or alarm is overridden or bypassed?",
    "a": "It must be explicitly authorized by the C/E or Master, logged in the official override register, accompanied by increased manual monitoring, and cancelled the moment the emergency is resolved",
    "opts": [
      "It requires a signed letter from the company CEO",
      "It must be done secretly so Port State Control doesn't find out",
      "It must only be done using a laptop connected to the internet",
      "It must be explicitly authorized by the C/E or Master, logged in the official override register, accompanied by increased manual monitoring, and cancelled the moment the emergency is resolved"
    ],
    "exp": "Bypassing a safety alarm is incredibly dangerous. If you turn off the bilge alarm to clean the tank, and forget to turn it back on, the ship could sink. Every override must be documented and highly visible so the next watch knows the ship is vulnerable.",
    "cat": "SAFETY",
    "id": "T16S_137"
  },
  {
    "q": "Under the STCW convention, what is required for an ETO to maintain their Certificate of Competency (CoC) over time?",
    "a": "They must complete formal refresher/revalidation training every 5 years to demonstrate ongoing competency and keep up with changing technology and safety rules",
    "opts": [
      "They must pass a physical fitness test every month",
      "They must build a working electric motor from scratch to prove their skills",
      "They must complete formal refresher/revalidation training every 5 years to demonstrate ongoing competency and keep up with changing technology and safety rules",
      "They never have to renew it; it is valid for life"
    ],
    "exp": "Maritime law and technology evolve rapidly. STCW ensures that an ETO who got their license in 2015 is still aware of the new 2026 SOLAS rules regarding cranes and high-voltage safety by mandating 5-yearly refresher courses.",
    "cat": "SAFETY",
    "id": "T16S_138"
  },
  {
    "q": "What are the four 'Pillars' of the International Maritime Organization (IMO)?",
    "a": "Safety (SOLAS), Security (ISPS), Environmental Protection (MARPOL), and Rule of Law/Efficiency (STCW/FAL)",
    "opts": [
      "Safety (SOLAS), Security (ISPS), Environmental Protection (MARPOL), and Rule of Law/Efficiency (STCW/FAL)",
      "Speed, Cargo, Profit, and Navigation",
      "Piracy, Pollution, Personnel, and Ports",
      "Engineering, Deck, Catering, and Management"
    ],
    "exp": "These four foundational areas represent the core mission of the IMO in regulating the global shipping industry to ensure it is safe, secure, green, and efficient.",
    "cat": "SAFETY",
    "id": "T16S_139"
  },
  {
    "q": "What is a 'Continuous Synopsis Record' (CSR) under SOLAS XI-1/5?",
    "a": "An onboard document providing a continuous, unalterable history of the ship (its flag, owner, ISM company, and class society), designed to prevent owners from hiding the ship's history by constantly changing flags",
    "opts": [
      "A digital recording of the main engine's RPM over the last year",
      "A record of all the ports the ship has visited in its lifetime",
      "A logbook where the crew writes down their daily tasks",
      "An onboard document providing a continuous, unalterable history of the ship (its flag, owner, ISM company, and class society), designed to prevent owners from hiding the ship's history by constantly changing flags"
    ],
    "exp": "Before the CSR, shady owners of dangerous ships would just rename the ship and switch to a new country's flag every year to avoid scrutiny. The CSR is a permanent, transparent 'passport' that stays with the ship forever.",
    "cat": "SAFETY",
    "id": "T16S_140"
  },
  {
    "q": "Under SOLAS Chapter II-1 Reg 43, what is the mandatory physical location of the Emergency Generator?",
    "a": "Above the uppermost continuous deck, outside the main machinery space, and readily accessible from the open deck",
    "opts": [
      "In the very bottom of the engine room to keep it cool",
      "Inside the cargo control room",
      "Directly next to the main switchboard for easy wiring",
      "Above the uppermost continuous deck, outside the main machinery space, and readily accessible from the open deck"
    ],
    "exp": "If the engine room is flooded to the ceiling or completely engulfed in flames, the emergency generator must survive. Putting it high up in the superstructure isolates it from the primary risks affecting the main machinery.",
    "cat": "EMERGENCY",
    "id": "T16S_141"
  },
  {
    "q": "What is the SOLAS requirement for the fuel endurance of the Emergency Generator on a standard Cargo Ship?",
    "a": "It must have a dedicated fuel tank with sufficient capacity to run the generator at full emergency load for a minimum of 18 hours",
    "opts": [
      "It must run for 36 hours",
      "It must run for 6 hours",
      "It must run indefinitely by pulling fuel from the main bunker tanks",
      "It must have a dedicated fuel tank with sufficient capacity to run the generator at full emergency load for a minimum of 18 hours"
    ],
    "exp": "A severe fire or grounding might take the crew a full day to fight or abandon ship safely. 18 hours guarantees the emergency fire pumps and lights stay on during the critical survival phase.",
    "cat": "EMERGENCY",
    "id": "T16S_142"
  },
  {
    "q": "What is the SOLAS requirement for the fuel endurance of the Emergency Generator on a Passenger Ship?",
    "a": "Minimum of 36 hours at full load",
    "opts": [
      "Minimum of 12 hours at full load",
      "Minimum of 72 hours at full load",
      "Minimum of 36 hours at full load",
      "Minimum of 18 hours at full load"
    ],
    "exp": "Evacuating 5,000 panicking passengers off a cruise ship takes significantly more time and coordination than evacuating 20 trained sailors off a cargo ship. Thus, the emergency power must last twice as long.",
    "cat": "EMERGENCY",
    "id": "T16S_143"
  },
  {
    "q": "What is the mandatory auto-start time limit for the Emergency Generator?",
    "a": "It must automatically start and assume the full emergency electrical load within 45 seconds of the failure of the main electrical supply",
    "opts": [
      "It must automatically start and assume the full emergency electrical load within 45 seconds of the failure of the main electrical supply",
      "It must start within 10 seconds",
      "It must start within 5 minutes",
      "It must start within 2 minutes"
    ],
    "exp": "45 seconds is the absolute legal maximum a ship can remain without AC power. This ensures critical systems like steering and fire pumps are restored rapidly.",
    "cat": "EMERGENCY",
    "id": "T16S_144"
  },
  {
    "q": "According to SOLAS, how robust must the primary automatic starting system (e.g., batteries) be for the Emergency Generator?",
    "a": "It must be capable of providing at least 3 consecutive automatic starting attempts",
    "opts": [
      "It must provide 10 consecutive starting attempts",
      "It relies entirely on a hand-crank",
      "It must be capable of providing at least 3 consecutive automatic starting attempts",
      "It must provide 1 continuous crank for 60 seconds"
    ],
    "exp": "Cold diesel engines don't always catch on the first try. The batteries must hold enough massive cranking amps to spin the heavy engine up to speed three separate times before they are considered depleted.",
    "cat": "EMERGENCY",
    "id": "T16S_145"
  },
  {
    "q": "If the primary automatic starting system (e.g., the 3 battery attempts) fails entirely, what does SOLAS demand?",
    "a": "A second, completely independent means of starting must be provided (e.g., a secondary battery bank, a hydraulic accumulator hand-pump, or a spring starter) capable of 3 more starts within 30 minutes",
    "opts": [
      "The crew must use jumper cables from the main engine",
      "A second, completely independent means of starting must be provided (e.g., a secondary battery bank, a hydraulic accumulator hand-pump, or a spring starter) capable of 3 more starts within 30 minutes",
      "The generator can be started by pushing it down a ramp",
      "The ship must drop anchor and wait for a tug"
    ],
    "exp": "Total redundancy. If the battery charger broke and the batteries are dead, the engineer must be able to walk up to the engine, manually pump a hydraulic handle 50 times to build pressure, and snap a lever to spin the engine hydraulically without using a single volt of electricity.",
    "cat": "EMERGENCY",
    "id": "T16S_146"
  },
  {
    "q": "Which of the following is NOT typically powered by the Emergency Switchboard?",
    "a": "Main engine lubricating oil pumps and heavy fuel oil purifiers",
    "opts": [
      "Emergency fire pump and steering gear",
      "Emergency lighting in the engine room and stairwells",
      "Main engine lubricating oil pumps and heavy fuel oil purifiers",
      "Navigation lights and GMDSS radio equipment"
    ],
    "exp": "The emergency generator is tiny compared to the main generators. It is designed to save LIVES (lights, radio, fire pumps, steering), not to support the massive commercial propulsion plant.",
    "cat": "EMERGENCY",
    "id": "T16S_147"
  },
  {
    "q": "What is the proper preparation sequence before demonstrating a 'Blackout Test' for a PSC Surveyor?",
    "a": "Inform the Bridge/Master, warn the crew, reduce the ship's electrical load to a minimum, and place all standby main generators into MANUAL mode so they do not auto-start and interfere with the test",
    "opts": [
      "Increase the ship's load to 100% to simulate a heavy blackout",
      "Inform the Bridge/Master, warn the crew, reduce the ship's electrical load to a minimum, and place all standby main generators into MANUAL mode so they do not auto-start and interfere with the test",
      "Turn off the emergency generator battery charger and drain the fuel tank",
      "Disconnect the transitional 24V batteries"
    ],
    "exp": "If you trip the running generator but leave the standby generator in 'AUTO', the ship's Power Management System will just start the standby main generator in 5 seconds. You must cripple the main system intentionally to force the Emergency system to wake up and prove itself.",
    "cat": "EMERGENCY",
    "id": "T16S_148"
  },
  {
    "q": "How is the actual 'Blackout' initiated during the test with the surveyor?",
    "a": "By manually opening (tripping) the Air Circuit Breaker (ACB) of the running main generator at the Main Switchboard, instantly killing the 440V main busbar",
    "opts": [
      "By manually opening (tripping) the Air Circuit Breaker (ACB) of the running main generator at the Main Switchboard, instantly killing the 440V main busbar",
      "By shutting off the fuel to the main engine",
      "By pressing the test button on the Emergency Switchboard",
      "By throwing the main electrical disconnect on the bridge"
    ],
    "exp": "Tripping the main ACB perfectly mimics a catastrophic generator failure. The ship goes instantly dark, the 24V emergency lights pop on, and the clock starts ticking for the 45-second emergency generator test.",
    "cat": "EMERGENCY",
    "id": "T16S_149"
  },
  {
    "q": "During the 45 seconds of total darkness before the emergency generator connects, how does the crew see the stairs and escape routes?",
    "a": "The 'Transitional Source of Emergency Power' (a 24V DC battery bank) automatically clicks on instantly, powering specific LED/halogen emergency lights for a minimum of 30 minutes",
    "opts": [
      "The main generator continues to spin slowly, providing dim lighting",
      "The 'Transitional Source of Emergency Power' (a 24V DC battery bank) automatically clicks on instantly, powering specific LED/halogen emergency lights for a minimum of 30 minutes",
      "Glow-in-the-dark paint illuminates the entire ship",
      "They must rely on personal flashlights"
    ],
    "exp": "This is a strictly tested SOLAS requirement. Total pitch darkness causes panic and injury. The transitional batteries bridge the terrifying 45-second gap.",
    "cat": "EMERGENCY",
    "id": "T16S_150"
  },
  {
    "q": "What defines a 'Dead Ship Condition'?",
    "a": "A catastrophic scenario where the main power is dead, the emergency generator is dead, and absolutely ALL stored energy (like starting air bottles and batteries) is completely depleted",
    "opts": [
      "A catastrophic scenario where the main power is dead, the emergency generator is dead, and absolutely ALL stored energy (like starting air bottles and batteries) is completely depleted",
      "A ship that has been officially scrapped at a shipyard",
      "A situation where the ship's main engine is stopped in port",
      "A normal blackout where the emergency generator starts correctly"
    ],
    "exp": "A blackout is an inconvenience. A Dead Ship is a nightmare. It means you have zero electricity and zero compressed air. You must literally build energy from scratch using hand-cranks or isolated backup systems to bring the massive plant back to life.",
    "cat": "EMERGENCY",
    "id": "T16S_151"
  },
  {
    "q": "What is the mandatory first step in a manual 'Dead Ship' recovery process?",
    "a": "Start the Emergency Generator using its secondary/manual starting method (e.g., hand-pumped hydraulics), as it is the only machine on the ship with its own independent, isolated starting energy",
    "opts": [
      "Start the Emergency Generator using its secondary/manual starting method (e.g., hand-pumped hydraulics), as it is the only machine on the ship with its own independent, isolated starting energy",
      "Open the starting air valve to the main engine",
      "Manually crank the main engine with the turning gear",
      "Light a fire in the boiler to generate steam pressure"
    ],
    "exp": "You cannot start a massive main generator without 30 bar of compressed air. You cannot make compressed air without electricity. You must start the small emergency diesel manually, use its electricity to run a tiny emergency air compressor, fill a small bottle, and use that bottle to start the first main generator.",
    "cat": "EMERGENCY",
    "id": "T16S_152"
  },
  {
    "q": "What prevents the Emergency Generator from attempting to connect to the Main Switchboard while the main generators are running?",
    "a": "An electrical and mechanical interlock on the Emergency Switchboard tie-breaker prevents the Emergency Generator breaker from closing if the main bus-tie is energized",
    "opts": [
      "The captain holds the only key to the breaker",
      "The emergency generator rotates in the opposite direction",
      "The emergency generator produces 50Hz, while the main produces 60Hz",
      "An electrical and mechanical interlock on the Emergency Switchboard tie-breaker prevents the Emergency Generator breaker from closing if the main bus-tie is energized"
    ],
    "exp": "If the tiny 200kW emergency generator accidentally paralleled with the massive 2000kW main generator without being perfectly synchronized, it would be instantly destroyed. The interlocks make it physically impossible for them to connect to the same live busbar.",
    "cat": "EMERGENCY",
    "id": "T16S_153"
  },
  {
    "q": "How frequently must the Emergency Generator be tested according to standard SOLAS / PMS requirements?",
    "a": "A short operational/no-load test weekly, and a full load test (transferring the actual ship's emergency loads) monthly",
    "opts": [
      "It should never be tested to save its fuel for a real emergency",
      "Only once a year during the class survey",
      "A short operational/no-load test weekly, and a full load test (transferring the actual ship's emergency loads) monthly",
      "Daily before the captain wakes up"
    ],
    "exp": "Running a diesel unloaded (weekly) proves the starter works but causes carbon buildup. Running it loaded (monthly) burns the carbon off and proves the generator end can actually carry the pumps and lights without stalling.",
    "cat": "EMERGENCY",
    "id": "T16S_154"
  },
  {
    "q": "What happens to the Emergency Generator if it is running to supply a blackout, and the main power is suddenly restored?",
    "a": "The tie-breaker closes, the emergency breaker automatically trips open (transferring the load seamlessly back to the main board), and the emergency diesel runs for a few minutes to cool down before auto-stopping",
    "opts": [
      "It automatically pumps its remaining fuel back to the main tank",
      "It instantly seizes and requires a manual reset",
      "It runs in parallel with the main generator permanently",
      "The tie-breaker closes, the emergency breaker automatically trips open (transferring the load seamlessly back to the main board), and the emergency diesel runs for a few minutes to cool down before auto-stopping"
    ],
    "exp": "The system restores itself. The emergency board drops the emergency generator, grabs the main power, and the emergency engine runs unloaded for ~3-5 minutes to cool its turbocharger and block before shutting down, returning to standby mode.",
    "cat": "EMERGENCY",
    "id": "T16S_155"
  },
  {
    "q": "Why is the fuel supply for the Emergency Generator mandated to be purely gravity-fed from a daily service tank?",
    "a": "To eliminate any reliance on electric fuel booster pumps; if the ship is completely dead, gravity guarantees fuel will reach the injection pump to start the engine",
    "opts": [
      "To increase the pressure of the fuel entering the engine",
      "To eliminate any reliance on electric fuel booster pumps; if the ship is completely dead, gravity guarantees fuel will reach the injection pump to start the engine",
      "To prevent water from mixing with the fuel",
      "To comply with MARPOL environmental regulations"
    ],
    "exp": "Dead ships have no power to run fuel transfer pumps. The emergency fuel tank is mounted on the wall above the engine. Turn the valve, and physics delivers the fuel.",
    "cat": "EMERGENCY",
    "id": "T16S_156"
  },
  {
    "q": "What happens during an Automatic Blackout Recovery once the first Main Generator is successfully started and connected to the dead busbar?",
    "a": "The Power Management System (PMS) begins a 'Sequential Restart'; it automatically starts massive pumps (like sea water and lube oil) one by one with 5-10 second delays between each to prevent massive overlapping starting currents from crashing the generator again",
    "opts": [
      "The Power Management System (PMS) begins a 'Sequential Restart'; it automatically starts massive pumps (like sea water and lube oil) one by one with 5-10 second delays between each to prevent massive overlapping starting currents from crashing the generator again",
      "It drops the emergency generator into the sea",
      "It instantly starts the main propulsion engine",
      "It waits for the ETO to manually press start on every single pump"
    ],
    "exp": "If 10 giant pumps all tried to start DOL at the exact same millisecond, they would draw 50,000 amps. The voltage would collapse, the generator would trip on under-voltage, and the blackout would repeat endlessly. Sequential timing is critical.",
    "cat": "EMERGENCY",
    "id": "T16S_157"
  },
  {
    "q": "During a sequential restart, which pumps are prioritized first?",
    "a": "Essential main engine support systems (Main Lube Oil, Jacket Cooling Water, Sea Water Cooling) and Steering Gear to ensure the ship can maneuver and the engine doesn't melt",
    "opts": [
      "Essential main engine support systems (Main Lube Oil, Jacket Cooling Water, Sea Water Cooling) and Steering Gear to ensure the ship can maneuver and the engine doesn't melt",
      "Fresh water generators and sewage treatment plants",
      "Air conditioning compressors and galley ovens",
      "Cargo hold ventilation fans"
    ],
    "exp": "You must secure the heart of the ship first. Cooking dinner and running the AC are irrelevant if the main engine bearings are running dry.",
    "cat": "EMERGENCY",
    "id": "T16S_158"
  },
  {
    "q": "What is the function of the 'Preferential Trip' relays during a situation where a generator is struggling to carry the load?",
    "a": "They automatically and intentionally trip (disconnect) non-essential electrical loads (like AC and deck cranes) in stages to reduce the burden on the generator and prevent a total blackout",
    "opts": [
      "They intentionally trip the main engine to save fuel",
      "They trip the emergency generator to protect it from over-voltage",
      "They disconnect the shore power cables",
      "They automatically and intentionally trip (disconnect) non-essential electrical loads (like AC and deck cranes) in stages to reduce the burden on the generator and prevent a total blackout"
    ],
    "exp": "It is a sacrifice mechanism. If the generator is at 105% load, it drops the galley ovens. If it's still at 105%, it drops the AC. It sheds comfort to save survival equipment.",
    "cat": "EMERGENCY",
    "id": "T16S_159"
  },
  {
    "q": "If a ship is running in UMS (Unattended Machinery Space) mode at night and suffers a blackout, what is the required response of the automation?",
    "a": "The entire blackout recovery (start standby gen, close breaker, sequential restart of pumps) must happen flawlessly and automatically without human intervention, while sounding alarms in the engineers' cabins",
    "opts": [
      "The captain must steer using a manual wheel on the bridge",
      "The entire blackout recovery (start standby gen, close breaker, sequential restart of pumps) must happen flawlessly and automatically without human intervention, while sounding alarms in the engineers' cabins",
      "The ship just drifts until the engineers wake up and fix it",
      "The emergency generator takes over propulsion automatically"
    ],
    "exp": "Because nobody is in the engine room, the computers (PMS) must be smart enough to act like a Chief Engineer, rescuing the ship and restoring cooling while the humans are still putting their boots on.",
    "cat": "EMERGENCY",
    "id": "T16S_160"
  },
  {
    "q": "Why is the Emergency Generator room strictly forbidden from being used as a storage locker for paint, oil, or spare parts?",
    "a": "It introduces a massive fire hazard into the ultimate safe haven of the ship, and loose gear could block access to the generator during a frantic blackout scenario",
    "opts": [
      "It makes the room too heavy, affecting stability",
      "It introduces a massive fire hazard into the ultimate safe haven of the ship, and loose gear could block access to the generator during a frantic blackout scenario",
      "The paint fumes will cause the generator to run too fast",
      "The surveyor needs the space to sit down during inspections"
    ],
    "exp": "Surveyors heavily fine ships for this. The emergency room must be pristine, empty, and ready. Tripping over a box of rags while trying to hand-crank the emergency diesel in pitch darkness is unacceptable.",
    "cat": "EMERGENCY",
    "id": "T16S_161"
  },
  {
    "q": "If the Emergency Generator fails to auto-start during the blackout test, what is the most common, easily preventable cause that the ETO should check first?",
    "a": "The selector switch on the control panel was accidentally left in 'MANUAL' or 'OFF' instead of 'AUTO' after a previous maintenance job",
    "opts": [
      "The transitional batteries are overcharged",
      "The selector switch on the control panel was accidentally left in 'MANUAL' or 'OFF' instead of 'AUTO' after a previous maintenance job",
      "The ship is sailing through a magnetic storm",
      "The main engine governor is jammed"
    ],
    "exp": "Human error is the #1 cause of failed tests. If you test the generator manually on Tuesday and forget to flick the switch back to AUTO, the ship will stay dark during a real blackout on Wednesday.",
    "cat": "EMERGENCY",
    "id": "T16S_162"
  },
  {
    "q": "What is the consequence of running the Emergency Generator on 'No-Load' (just spinning without supplying power) for extended periods every week?",
    "a": "It causes 'Wet Stacking' or carbon buildup; unburned fuel and oil bake onto the exhaust valves and turbocharger because the engine isn't hot enough to burn them off properly",
    "opts": [
      "It makes the generator run extremely efficiently",
      "It causes 'Wet Stacking' or carbon buildup; unburned fuel and oil bake onto the exhaust valves and turbocharger because the engine isn't hot enough to burn them off properly",
      "It drains the starting batteries completely",
      "It causes the copper windings in the alternator to melt"
    ],
    "exp": "Diesels are designed to work hard. Running an empty diesel creates a cold fire. Thick black carbon sludge builds up in the exhaust. When a real emergency hits and it finally takes full load, the sludge catches fire (uptake fire) or the valves stick.",
    "cat": "EMERGENCY",
    "id": "T16S_163"
  },
  {
    "q": "During a Dead Ship start, why must you open the 'Indicator Cocks' before using air to spin the main engine?",
    "a": "To ensure no water or oil has accumulated in the cylinders; turning the engine with fluid inside (which is incompressible) will cause a massive hydraulic lock, bending the connecting rods and destroying the engine",
    "opts": [
      "To blow out the carbon from the exhaust stack",
      "To ensure no water or oil has accumulated in the cylinders; turning the engine with fluid inside (which is incompressible) will cause a massive hydraulic lock, bending the connecting rods and destroying the engine",
      "To let fresh oxygen into the engine for a better fire",
      "To check the color of the fuel burning inside"
    ],
    "exp": "After a long blackout, a cracked cooler might have dripped water onto the piston. Opening the indicator cocks (valves on top of the cylinder) allows the turning gear to safely squeeze that water out onto the deck instead of shattering the engine.",
    "cat": "EMERGENCY",
    "id": "T16S_164"
  },
  {
    "q": "What is the purpose of the 'Emergency Air Compressor' in the Dead Ship recovery process?",
    "a": "It is a tiny, often hand-startable or emergency-powered compressor used solely to fill a small, dedicated starting air bottle to start the FIRST main auxiliary diesel generator",
    "opts": [
      "It is a massive compressor used to run the ship's horn",
      "It is a tiny, often hand-startable or emergency-powered compressor used solely to fill a small, dedicated starting air bottle to start the FIRST main auxiliary diesel generator",
      "It pumps breathable air into the engine control room",
      "It is used to inflate the life rafts during abandon ship"
    ],
    "exp": "You cannot start a massive main compressor with a tiny emergency generator. The emergency compressor is the 'bootstrap'. It gives you just enough 30-bar air to get one main generator running, which then powers the massive main compressors to finish the job.",
    "cat": "EMERGENCY",
    "id": "T16S_165"
  },
  {
    "q": "Under SOLAS, what critical heating element is typically powered by the Emergency Switchboard to aid in starting the emergency generator in arctic conditions?",
    "a": "The jacket water 'Block Heater', which keeps the engine metal warm (~40°C) so the diesel fuel will easily ignite under compression when cranking",
    "opts": [
      "The jacket water 'Block Heater', which keeps the engine metal warm (~40°C) so the diesel fuel will easily ignite under compression when cranking",
      "The electric stove in the galley",
      "The accommodation central heating system",
      "The heavy fuel oil steam heater"
    ],
    "exp": "A freezing cold diesel engine will just blow white smoke and drain the batteries without starting. The block heater uses main ship power to keep the emergency engine toasty warm 24/7, guaranteeing an instant start.",
    "cat": "EMERGENCY",
    "id": "T16S_166"
  },
  {
    "q": "What happens if you accidentally try to close a main generator Air Circuit Breaker (ACB) onto a completely dead busbar while the diesel engine is heavily loaded (e.g., pumps connected)?",
    "a": "The generator will instantly stall and trip; a generator must be started unloaded and brought to 60Hz before closing the breaker and subsequently applying loads",
    "opts": [
      "The generator will instantly stall and trip; a generator must be started unloaded and brought to 60Hz before closing the breaker and subsequently applying loads",
      "The AVR will automatically compensate by tripling the voltage",
      "It will smoothly pick up the load and run perfectly",
      "The busbar will instantly magnetize the hull"
    ],
    "exp": "You cannot start a car in 5th gear. Closing an ACB onto a dead bus with 5 massive pumps switched ON is like trying to start a generator with a million-pound weight attached. The diesel engine doesn't have the torque, and will violently stall.",
    "cat": "EMERGENCY",
    "id": "T16S_167"
  },
  {
    "q": "What is 'Reverse Power' protection on a marine generator?",
    "a": "A safety relay that prevents a generator from acting as an electric motor (drawing power from the busbar to spin a dead diesel engine) by tripping its breaker if power flows the wrong way",
    "opts": [
      "A device that reverses the polarity of the battery charger",
      "A safety relay that prevents a generator from acting as an electric motor (drawing power from the busbar to spin a dead diesel engine) by tripping its breaker if power flows the wrong way",
      "A system that pumps fuel out of the engine back to the tank",
      "A switch that allows the ship to drive backward"
    ],
    "exp": "If two generators are parallel and Gen 1 runs out of fuel, it stops pushing. The live electricity from Gen 2 rushes into Gen 1, turning it into a massive motor that forcibly spins the dead diesel engine, causing extreme mechanical damage.",
    "cat": "EMERGENCY",
    "id": "T16S_168"
  },
  {
    "q": "How is a 'Reverse Power' relay practically tested by the ETO during a survey?",
    "a": "With two generators in parallel, slowly reduce the governor speed setting (throttle down the fuel) of the test generator until its kW drops below zero; the relay should trip at around 5-10% reverse load",
    "opts": [
      "By pushing the emergency stop button on both engines simultaneously",
      "With two generators in parallel, slowly reduce the governor speed setting (throttle down the fuel) of the test generator until its kW drops below zero; the relay should trip at around 5-10% reverse load",
      "By shorting the main busbar to ground with a heavy wire",
      "By swapping the L1 and L2 cables on the generator output"
    ],
    "exp": "The ETO intentionally starves the test generator of fuel. It stops making power and starts absorbing it from the other running generator. The relay must recognize this backward flow of kW and snap the breaker open.",
    "cat": "EMERGENCY",
    "id": "T16S_169"
  },
  {
    "q": "What is the primary function of the 'Tie Breaker' on the Main Switchboard during a major electrical fault or fire?",
    "a": "It splits the massive switchboard into two independent halves; if one half has a dead short or is burning, the tie breaker isolates it, allowing the surviving half to be safely powered by a remaining generator",
    "opts": [
      "It connects the ship to shore power",
      "It splits the massive switchboard into two independent halves; if one half has a dead short or is burning, the tie breaker isolates it, allowing the surviving half to be safely powered by a remaining generator",
      "It permanently ties all the generators together so they cannot be separated",
      "It physically ties the massive copper busbars to the steel hull to prevent vibration"
    ],
    "exp": "A dead short on the Port busbar will trip every generator you try to connect to it. Opening the Tie Breaker cuts the switchboard in half. You leave the Port side dead, and safely restore power to the Starboard side to keep the ship alive.",
    "cat": "EMERGENCY",
    "id": "T16S_170"
  }

]);
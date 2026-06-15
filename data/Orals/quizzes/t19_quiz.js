window.loadQuizzes("T19_Tanker", [
  {
    "q": "IEC 60079 Zone 0 definition and permitted equipment?",
    "a": "Continuous flammable atmosphere (e.g. inside cargo tanks) - only Ex ia (intrinsically safe) permitted",
    "opts": [
      "Likely during normal operation - Ex d and Ex e permitted",
      "Unlikely during abnormal operation - Ex n permitted",
      "Outside cargo hold - Ex e only permitted",
      "Continuous flammable atmosphere (e.g. inside cargo tanks) - only Ex ia (intrinsically safe) permitted"
    ],
    "exp": "Zone 0 = continuous or long-period flammable atmosphere (inside tanks, void spaces). Only Ex ia = highest safety level. Zone 1 = likely during normal ops (pump rooms, manifold) = Ex d, Ex e, Ex ia. Zone 2 = unlikely during abnormal ops = Ex n also permitted.",
    "cat": "ZONES",
    "id": "T19T_001"
  },
  {
    "q": "How does Ex d (Flameproof) enclosure protect in Zone 1?",
    "a": "Contains any internal explosion; flame paths cool escaping gases below ignition temperature of surrounding atmosphere",
    "opts": [
      "Limits circuit energy below ignition threshold (that is Ex ia)",
      "Maintains inert gas overpressure to keep vapour out (that is Ex p)",
      "Hermetically sealed vacuum - no oxygen inside",
      "Contains any internal explosion; flame paths cool escaping gases below ignition temperature of surrounding atmosphere"
    ],
    "exp": "Ex d does NOT prevent vapour from entering. Instead: heavy cast enclosure contains any internal explosion. Machined gaps (flame paths) between enclosure parts cool escaping combustion gases below the auto-ignition temperature of the surrounding atmosphere. Never used in Zone 0.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_002"
  },
  {
    "q": "Defining characteristic of Ex ia (Intrinsically Safe) equipment for tanker instrumentation?",
    "a": "Zener barriers limit circuit energy below ignition threshold - even under fault conditions cannot ignite surrounding vapour",
    "opts": [
      "Thick cast iron enclosure for blast containment (that is Ex d)",
      "Operates on compressed air instead of electricity (that is Ex p purging)",
      "Auto-sprays halon gas if spark detected",
      "Zener barriers limit circuit energy below ignition threshold - even under fault conditions cannot ignite surrounding vapour"
    ],
    "exp": "Ex ia = highest intrinsic safety level. Zener barriers/galvanic isolators in safe area limit voltage and current to field device. Even two simultaneous faults cannot produce an incendive spark. Used for sensors and instruments in Zone 0 and Zone 1. Never megger Ex ia circuits.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_003"
  },
  {
    "q": "Why connect ship-to-shore bonding cable before cargo transfer on tanker?",
    "a": "Equalises electrical potential between ship and terminal - prevents incendive static spark discharge during initial cargo flow",
    "opts": [
      "Provides shore power to cargo pumps",
      "Creates lightning strike path to shore earthing grid",
      "Grounds ICCP to prevent interference with terminal cathodic protection",
      "Equalises electrical potential between ship and terminal - prevents incendive static spark discharge during initial cargo flow"
    ],
    "exp": "Fluid movement generates static electricity. Before connecting cargo hose flanges, bond cable brings ship and terminal to same potential. Without bonding, approaching flange (creating a closing air gap) = capacitor discharging = incendive spark near flammable cargo vapour. Connect bond FIRST, disconnect LAST.",
    "cat": "BONDING",
    "id": "T19T_004"
  },
  {
    "q": "MGPS working principle and copper ion concentration?",
    "a": "Electrolytically dissolves copper anodes releasing Cu2+ ions at ~2 ppb - toxic to marine larvae preventing attachment",
    "opts": [
      "High-voltage AC pulses electrocute incoming barnacles",
      "Injects chlorine gas at 15 ppm into cooling pipes",
      "Dissolves zinc anodes creating inert gas barrier",
      "Electrolytically dissolves copper anodes releasing Cu2+ ions at ~2 ppb - toxic to marine larvae preventing attachment"
    ],
    "exp": "MGPS low DC current (0.5-4A at 0.5-4V) through copper anodes in sea chest. Cu dissolves, releasing Cu2+ at ~2 ppb. At this concentration: lethal to barnacle larvae, mussel larvae, algae spores preventing attachment in sea chests and cooling pipes. Aluminium anodes paired with copper form anti-fouling coating on pipe walls.",
    "cat": "MGPS",
    "id": "T19T_005"
  },
  {
    "q": "According to IEC 60079-10-1, what defines a Zone 0 hazardous area on a tanker?",
    "a": "An area where an explosive gas atmosphere is present continuously, for long periods, or frequently - e.g. inside cargo tanks",
    "opts": [
      "Any area where a secondary explosion hazard exists but is unlikely during normal operation",
      "An area where an explosive gas atmosphere is present continuously, for long periods, or frequently - e.g. inside cargo tanks",
      "An area where explosive gas is likely only during maintenance operations",
      "An area within 3 metres of cargo vents where gas may occasionally be present"
    ],
    "exp": "Zone 0 is the highest hazard zone. Requires Ex ia (intrinsically safe) equipment limited to milliwatt energy levels. Examples: inside cargo tanks, slop tanks, vapour recovery piping.",
    "cat": "HazZone",
    "id": "T19T_006"
  },
  {
    "q": "What hazardous area classification applies to a tanker's cargo pump room and areas within 3 metres of cargo vents?",
    "a": "Zone 1 - explosive gas atmosphere likely to occur in normal operation occasionally",
    "opts": [
      "Unclassified - pump rooms are treated as safe spaces when ventilation is running",
      "Zone 1 - explosive gas atmosphere likely to occur in normal operation occasionally",
      "Zone 2 - explosive gas atmosphere unlikely in normal operation",
      "Zone 0 - explosive gas atmosphere present continuously"
    ],
    "exp": "Zone 1 applies to pump rooms, cargo manifolds, and within 3 m of tank openings. Accepts Ex d (flameproof) or Ex e (increased safety) equipment. ETO must verify all equipment carries correct Ex certification.",
    "cat": "HazZone",
    "id": "T19T_007"
  },
  {
    "q": "What type of Ex protection is mandated for sensors and transmitters installed in Zone 0 cargo tank spaces?",
    "a": "Ex ia - Intrinsically Safe (circuit energy limited below ignition threshold)",
    "opts": [
      "Ex ia - Intrinsically Safe (circuit energy limited below ignition threshold)",
      "Ex e - Increased Safety (no sparking parts)",
      "Ex n - Non-sparking (Zone 2 only)",
      "Ex d - Flameproof enclosure"
    ],
    "exp": "Zone 0 requires Ex ia because only intrinsically safe circuits guarantee that electrical energy in the hazardous zone is always too low to cause ignition even under two-fault conditions.",
    "cat": "HazZone",
    "id": "T19T_008"
  },
  {
    "q": "Why is it absolutely prohibited to use a megger to test insulation resistance on an Ex ia intrinsically safe circuit?",
    "a": "The megger's high DC voltage (500-1000V) would inject lethal ignition energy into the Zone 0 circuit, potentially causing an explosion",
    "opts": [
      "There is no prohibition - standard 500V megger testing is routine on Ex ia circuits",
      "The megger would permanently magnetize the Zener barriers, rendering them useless",
      "The megger's high DC voltage (500-1000V) would inject lethal ignition energy into the Zone 0 circuit, potentially causing an explosion",
      "The high voltage would cause the Zener barriers to blow their fuses, disconnecting the sensor loop"
    ],
    "exp": "Ex ia circuits are designed to keep energy below ignition levels at all times. Applying megger test voltage completely destroys this safety property and creates an immediate explosion hazard in Zone 0.",
    "cat": "HazZone",
    "id": "T19T_009"
  },
  {
    "q": "What is the core physical working principle of an Ex d (flameproof) enclosure?",
    "a": "The enclosure withstands an internal explosion without igniting the outside atmosphere - achieved via precision flame-path gaps around mating surfaces",
    "opts": [
      "The enclosure withstands an internal explosion without igniting the outside atmosphere - achieved via precision flame-path gaps around mating surfaces",
      "The enclosure is filled with pressurized inert gas to prevent explosive gas from entering",
      "The enclosure is hermetically sealed so no gas can enter and reach the electrical components inside",
      "The enclosure is constructed from non-sparking aluminium alloy that cannot initiate an explosive reaction"
    ],
    "exp": "Ex d does NOT prevent gas entry - gas can enter the enclosure. If internal ignition occurs, the flame-path gaps (machined to IEC tolerances) cool the hot gases before they escape, preventing external ignition.",
    "cat": "HazZone",
    "id": "T19T_010"
  },
  {
    "q": "What positive pressure must the accommodation HVAC system maintain relative to the outside atmosphere on a tanker?",
    "a": "50 Pa (0.5 mbar) positive pressure to prevent hydrocarbon vapours from entering living spaces",
    "opts": [
      "5 Pa (0.05 mbar) - just enough to prevent natural convection-driven vapour migration",
      "No pressure difference is required - natural ventilation is sufficient on modern tankers",
      "50 Pa (0.5 mbar) positive pressure to prevent hydrocarbon vapours from entering living spaces",
      "500 Pa (5 mbar) to create a strong enough barrier against cargo tank vapour concentrations"
    ],
    "exp": "The accommodation HVAC maintains 50 Pa positive pressure to prevent heavier-than-air cargo vapours from drifting into safe spaces. The ETO must verify this pressure differential on PMS and after any HVAC maintenance.",
    "cat": "HazZone",
    "id": "T19T_011"
  },
  {
    "q": "How long may an accommodation air lock door remain open before the alarm activates and automatic safety responses are triggered?",
    "a": "60 seconds - after which audible/visual alarms activate on the bridge and ECR, and HVAC fans may auto-trip",
    "opts": [
      "5 seconds - the door must be closed almost immediately to maintain pressurisation",
      "There is no time limit - the double-door interlock alone provides sufficient protection",
      "30 minutes - long enough for cargo operations crew to pass equipment through",
      "60 seconds - after which audible/visual alarms activate on the bridge and ECR, and HVAC fans may auto-trip"
    ],
    "exp": "If a door is held open more than 60 seconds, the positive pressure drops, triggering alarms. Extended opening can trigger auto-trip of HVAC intake fans and closure of fire dampers to isolate living spaces.",
    "cat": "HazZone",
    "id": "T19T_012"
  },
  {
    "q": "What is the maximum permissible oxygen content of inert gas delivered to cargo tanks under SOLAS requirements?",
    "a": "Less than 5% oxygen by volume",
    "opts": [
      "Less than 8% oxygen by volume",
      "Less than 2% oxygen by volume",
      "Less than 10% oxygen by volume",
      "Less than 5% oxygen by volume"
    ],
    "exp": "SOLAS requires IG to contain less than 5% O2 by volume to ensure the tank atmosphere is well below the 11% minimum O2 needed to sustain hydrocarbon combustion.",
    "cat": "InertGas",
    "id": "T19T_013"
  },
  {
    "q": "What scientific principle does a zirconia ceramic oxygen analyser use to measure oxygen concentration in inert gas?",
    "a": "The Nernst equation - oxygen ions migrate through a heated zirconia crystal (600-700 deg C) creating a voltage proportional to the O2 concentration ratio",
    "opts": [
      "Paramagnetic attraction - oxygen is drawn into a magnetic field deflecting a dumbbell indicator proportionally",
      "Infrared absorption - O2 molecules absorb infrared light at a specific wavelength reducing detector intensity",
      "The Nernst equation - oxygen ions migrate through a heated zirconia crystal (600-700 deg C) creating a voltage proportional to the O2 concentration ratio",
      "Catalytic oxidation - oxygen burns a platinum filament, changing its resistance in proportion to O2 concentration"
    ],
    "exp": "Zirconia sensors heated to 600-700 degrees C become selective oxygen ion conductors. The EMF generated by the Nernst equation is directly related to the ratio of O2 in the reference air versus the sample gas.",
    "cat": "InertGas",
    "id": "T19T_014"
  },
  {
    "q": "What is the typical operational lifespan of an electrochemical galvanic fuel cell oxygen sensor used in portable gas analysers?",
    "a": "1-2 years - the lead anode is gradually consumed by oxidation and must be replaced before full depletion",
    "opts": [
      "1-2 years - the lead anode is gradually consumed by oxidation and must be replaced before full depletion",
      "5-7 years - replacement is only required when the cell's output voltage drops below 0.1V",
      "10-15 years - electrochemical cells have virtually unlimited lifespan if kept moist",
      "The cell is permanent - only the electrolyte gel requires replenishment annually"
    ],
    "exp": "The electrochemical O2 cell uses a gold cathode and consumable lead anode. Lead is oxidized to PbO during O2 reduction, depleting the anode over 1-2 years. Expired cells give false low O2 readings - highly dangerous.",
    "cat": "InertGas",
    "id": "T19T_015"
  },
  {
    "q": "What is the MOST critical immediate consequence if the inert gas system delivers gas with more than 5% O2 to a cargo tank during discharge?",
    "a": "The tank atmosphere may enter the explosive range - if a static discharge or spark occurs, a catastrophic tank explosion can result",
    "opts": [
      "The cargo pump efficiency is reduced by up to 15% due to the increased gas resistance in the suction line",
      "MARPOL Annex I will be violated, resulting in a Port State Control deficiency",
      "The tank atmosphere may enter the explosive range - if a static discharge or spark occurs, a catastrophic tank explosion can result",
      "The inert gas becomes slightly corrosive, causing minor staining of the tank coating"
    ],
    "exp": "When O2 exceeds 5% in the presence of residual hydrocarbon vapours, the tank atmosphere can reach the flammable range (LEL-UEL). A single static discharge during stripping operations can then cause a catastrophic explosion.",
    "cat": "InertGas",
    "id": "T19T_016"
  },
  {
    "q": "Which of the following is a mandatory starting interlock on a bow thruster motor?",
    "a": "All 7 interlocks must be satisfied: hydraulic oil pressure, lub oil pressure, bearing temperature, shaft seal confirmation, local/remote selector, guard removed alarm, and zero-pitch confirmation",
    "opts": [
      "A single interlock is sufficient - the bridge remote/local changeover switch",
      "All 7 interlocks must be satisfied: hydraulic oil pressure, lub oil pressure, bearing temperature, shaft seal confirmation, local/remote selector, guard removed alarm, and zero-pitch confirmation",
      "Only two interlocks are required by SOLAS - low oil pressure and shaft seal status",
      "Bow thrusters have no starting interlocks because they are considered non-essential machinery"
    ],
    "exp": "Bow thruster motors require all 7 interlocks satisfied before the main contactor can close. Zero-pitch confirmation prevents full-load starting torque being applied to the motor before the CPP blades are in the feathered position.",
    "cat": "BowThruster",
    "id": "T19T_017"
  },
  {
    "q": "What causes the zero-pitch hunting fault in a Controllable Pitch Propeller (CPP) bow thruster, and how does the ETO correct it?",
    "a": "Slippage of the zero-pitch feedback potentiometer dead-band inside the control drive card - corrected by recalibrating the potentiometer dead-band setting",
    "opts": [
      "Worn carbon brushes in the DC excitation circuit causing armature voltage fluctuations that force the blades to oscillate",
      "Slippage of the zero-pitch feedback potentiometer dead-band inside the control drive card - corrected by recalibrating the potentiometer dead-band setting",
      "Air trapped in the hydraulic servo cylinder preventing stable blade positioning",
      "Contaminated hydraulic oil in the CPP hub causing pressure surges that physically push blades away from zero pitch"
    ],
    "exp": "At zero pitch the CPP blades are flat, drawing minimal current. If the feedback potentiometer dead-band is miscalibrated, the drive hunts between slight positive and negative pitch - causing the main generator to oscillate in reactive current output.",
    "cat": "BowThruster",
    "id": "T19T_018"
  },
  {
    "q": "Why is introducing any metallic object - such as a sounding tape or UTI probe - into a cargo tank strictly prohibited for at least 30 minutes after loading stops?",
    "a": "Electrostatic charge accumulated during cargo loading takes up to 30 minutes to dissipate via the cargo fluid's dielectric relaxation time constant - a metallic object bridges the gap and causes a high-energy ignition spark",
    "opts": [
      "Vapour pressure in the tank is at maximum immediately after loading - any disturbance through the ullage hatch releases a toxic gas cloud",
      "Electrostatic charge accumulated during cargo loading takes up to 30 minutes to dissipate via the cargo fluid's dielectric relaxation time constant - a metallic object bridges the gap and causes a high-energy ignition spark",
      "The cargo fluid temperature is still rising after loading stops - a metallic object could cause thermal shock cracking of the tank coating",
      "The 30-minute rule applies only to ship-shore bonding cables, not to gauging equipment"
    ],
    "exp": "Non-conductive distillate cargoes build up streaming current charge during pumping. The charge decays exponentially with a time constant that can be minutes. A grounded probe inserted before decay creates a spark that can detonate residual explosive vapours.",
    "cat": "Static",
    "id": "T19T_019"
  },
  {
    "q": "What is the primary electrical safety measure that must be verified before connecting cargo loading hoses between a ship and a shore terminal?",
    "a": "The ship-to-shore bonding cable must be connected first to equalise the potential difference between ship and terminal before any hose connection",
    "opts": [
      "The ship's cathodic protection ICCP system must be switched OFF to prevent stray current flow through the cargo hoses",
      "The tanker's emergency generator must be started and confirmed on standby before hose connection",
      "The ship-to-shore bonding cable must be connected first to equalise the potential difference between ship and terminal before any hose connection",
      "All accommodation air lock doors must be confirmed fully closed before the bonding cable is touched"
    ],
    "exp": "A potential difference exists between the ship hull and the shore earth due to different grounding systems. Connecting the bonding cable first equalises this potential, preventing a spark when the first metal-to-metal contact is made on the cargo hose fitting.",
    "cat": "Static",
    "id": "T19T_020"
  },
  {
    "q": "What is the minimum required ventilation rate for a tanker cargo pump room to comply with SOLAS Chapter II-2?",
    "a": "At least 20 air changes per hour, confirmed by a continuous mechanical exhaust fan with airflow monitoring",
    "opts": [
      "6 air changes per hour - the same standard as a battery room on a conventional ship",
      "At least 20 air changes per hour, confirmed by a continuous mechanical exhaust fan with airflow monitoring",
      "Ventilation is optional in pump rooms if fixed gas detection monitors are installed and alarmed",
      "2 air changes per hour - sufficient to prevent accumulation of heavier-than-air vapours near the bilge"
    ],
    "exp": "SOLAS mandates minimum 20 air changes per hour in pump rooms due to the continuous risk of cargo vapour accumulation from seal leaks. The fan must run continuously during pump room operations.",
    "cat": "PumpRoom",
    "id": "T19T_021"
  },
  {
    "q": "Why must all electrical equipment inside a cargo pump room carry full Ex d (flameproof) certification as a minimum standard?",
    "a": "The pump room is classified Zone 1 - cargo seal leaks mean explosive gas mixtures are likely to occur during normal pump operation",
    "opts": [
      "Ex d is required for pump rooms only when carrying IMDG Class 3 flammable liquid cargo",
      "The pump room is classified Zone 1 - cargo seal leaks mean explosive gas mixtures are likely to occur during normal pump operation",
      "Ex d is recommended but not mandatory - Ex e (increased safety) equipment is acceptable in pump rooms",
      "Pump rooms are classified Zone 0 because cargo fills the bilge during discharge operations"
    ],
    "exp": "Pump room is Zone 1 due to regular occurrence of vapour from mechanical seals. All electrical equipment including motors, junction boxes, lighting, and instrumentation must be Ex d or Ex e certified to IEC 60079 standards.",
    "cat": "PumpRoom",
    "id": "T19T_022"
  },
  {
    "q": "What action must the ETO take if a pump room gas detector activates its alarm during a discharge operation?",
    "a": "Immediately stop all pump room operations, sound the emergency alarm, shut down pump room electrical equipment, and evacuate - do not enter without SCBA and EEx rated lighting",
    "opts": [
      "Silence the alarm and notify the Chief Mate - gas detector false alarms are common on tankers",
      "Immediately stop all pump room operations, sound the emergency alarm, shut down pump room electrical equipment, and evacuate - do not enter without SCBA and EEx rated lighting",
      "Increase pump room ventilation to maximum and continue operations while monitoring the gas readings",
      "Enter the pump room alone with a portable gas detector to locate and isolate the source of the vapour"
    ],
    "exp": "Gas detection alarm in a Zone 1 space requires immediate cessation of all operations and evacuation. The explosive mixture in the pump room can ignite from any electrical arcing - do NOT enter without SCBA, EEx equipment, and a standby person.",
    "cat": "PumpRoom",
    "id": "T19T_023"
  },
  {
    "q": "Under which MARPOL Annex VI regulation is the Vapour Emission Control System (VECS) mandated for tankers loading at shore terminals?",
    "a": "MARPOL Annex VI Regulation 15 - Volatile Organic Compound emissions",
    "opts": [
      "MARPOL Annex II Regulation 18 - Noxious liquid substance emissions",
      "MARPOL Annex VI Regulation 15 - Volatile Organic Compound emissions",
      "MARPOL Annex I Regulation 34 - Oil discharge monitoring requirements",
      "MARPOL Annex VI Regulation 12 - Ozone depleting substances"
    ],
    "exp": "MARPOL Annex VI Reg 15 requires VECS on tankers operating at terminals that have shore-side vapour recovery facilities. The ETO maintains the VECS solenoids, interlocks, and VOC monitoring sensors.",
    "cat": "VECS",
    "id": "T19T_024"
  },
  {
    "q": "What explosion protection standard must all VECS electrical components, solenoid valves, and pressure transmitters comply with?",
    "a": "Ex d (flameproof) or Ex e (increased safety) because the VECS manifold routes explosive hydrocarbon vapour mixtures",
    "opts": [
      "Standard IP65 weatherproof rating - VECS operates with inert gas providing a non-explosive atmosphere",
      "No Ex rating is required because VECS pipework is always under positive vapour pressure preventing air ingress",
      "Ex d (flameproof) or Ex e (increased safety) because the VECS manifold routes explosive hydrocarbon vapour mixtures",
      "Ex ia (intrinsically safe) only - VECS operates at very low power levels"
    ],
    "exp": "VECS routes dense VOC mixtures at concentrations well above LEL. All electrical components in the vapour path must be Ex d or Ex e certified to IEC 60079 to prevent ignition from solenoid switching or sensor wiring faults.",
    "cat": "VECS",
    "id": "T19T_025"
  },
  {
    "q": "Under the IGF Code 2026 amendments, what specific information must be mutually documented in writing before bunkering operations for LNG or methanol can commence?",
    "a": "Agreed minimum and maximum transfer pressures, minimum and maximum transfer temperatures, and the pressure relief valve settings on both the ship's tanks and the supply terminal manifolds",
    "opts": [
      "The Master's oral confirmation that the crew has been briefed and the emergency generator has been tested",
      "Agreed minimum and maximum transfer pressures, minimum and maximum transfer temperatures, and the pressure relief valve settings on both the ship's tanks and the supply terminal manifolds",
      "The cargo manifest showing the expected calorific value and the bill of lading for the fuel batch",
      "The supplier's company name, contact number, and insurance certificate number"
    ],
    "exp": "IGF Code 2026 amendments require a pre-bunkering safety checklist signed by both Chief Engineer and terminal. Without this documented data, the ship's manifold ESD valves remain locked out by the automated control system.",
    "cat": "IGF",
    "id": "T19T_026"
  },
  {
    "q": "On a modern auto-tensioning mooring system, at what load percentage above the preset tension boundary does the drive software automatically pay out rope to prevent line breakage?",
    "a": "125% of the preset tension boundary - the drive clips the torque loop reference and dynamically pays out rope in a controlled manner",
    "opts": [
      "90% - the system pays out rope well before maximum tension to maintain a safety margin",
      "150% - only at this point does the system override the operator's set tension",
      "125% of the preset tension boundary - the drive clips the torque loop reference and dynamically pays out rope in a controlled manner",
      "200% - the mooring line must reach double the preset tension before any automatic response occurs"
    ],
    "exp": "At 125% of preset tension, the auto-tensioning VFD clips its torque reference. The motor dynamically pays out line rather than maintaining tension, preventing catastrophic wire rope or deck fitting breakage.",
    "cat": "IGF",
    "id": "T19T_027"
  },
  {
    "q": "Which of the following correctly describes the difference between an Ex d and an Ex e electrical enclosure?",
    "a": "Ex d withstands and contains an internal explosion; Ex e has no sparking parts and relies on construction quality to prevent ignition",
    "opts": [
      "Ex d is used in Zone 2; Ex e is used in Zone 0 applications requiring higher protection",
      "Ex d withstands and contains an internal explosion; Ex e has no sparking parts and relies on construction quality to prevent ignition",
      "Ex d is for fixed equipment only; Ex e is specifically designed for portable instruments",
      "Ex d uses hermetic sealing with inert gas; Ex e uses flame-path gaps to cool escaping gases"
    ],
    "exp": "Ex d (flameproof) allows gas in but contains any internal ignition. Ex e (increased safety) has no arcing or sparking parts in normal operation, relying on tighter construction tolerances to prevent ignition initiation.",
    "cat": "ExEquip",
    "id": "T19T_028"
  },
  {
    "q": "What is the function of the Zener barrier installed in the safe area on an Ex ia sensor circuit?",
    "a": "It limits the maximum open-circuit voltage and short-circuit current entering the hazardous zone to safe levels below ignition thresholds under all fault conditions",
    "opts": [
      "It limits the maximum open-circuit voltage and short-circuit current entering the hazardous zone to safe levels below ignition thresholds under all fault conditions",
      "It provides galvanic isolation to prevent ICCP stray currents from corrupting the sensor signal",
      "It converts the DC sensor signal to a safe 24V AC signal for transmission to the PLC panel",
      "It amplifies the weak 4-20mA signal from the sensor to compensate for cable resistance losses"
    ],
    "exp": "Zener barriers (or galvanic isolators) are mandatory safety components in Ex ia circuits. They clamp voltage and current to defined safe energy limits, ensuring that even under double-fault conditions the energy in Zone 0 cannot cause ignition.",
    "cat": "ExEquip",
    "id": "T19T_029"
  },
  {
    "q": "What is the key maintenance step that must NEVER be omitted when reassembling an Ex d motor terminal box after cable glanding work?",
    "a": "Verify the flame-path gap dimensions with feeler gauges and re-lubricate all mating surfaces with approved anti-corrosion grease before reassembling",
    "opts": [
      "Run the motor for 30 minutes off-load to verify no vibration has been introduced by disturbing the cable entries",
      "Verify the flame-path gap dimensions with feeler gauges and re-lubricate all mating surfaces with approved anti-corrosion grease before reassembling",
      "Fill the terminal box with nitrogen gas and seal it completely to create an inert atmosphere",
      "Paint the exterior of the terminal box with at least two coats of anti-corrosion paint rated for marine use"
    ],
    "exp": "The flame-path gap between the cover and body of an Ex d box is its critical safety feature. Corrosion, damage, or debris in the gap will prevent proper sealing. Feeler gauge check and approved grease are mandatory to maintain the IEC 60079-1 specification.",
    "cat": "ExEquip",
    "id": "T19T_030"
  },
  {
    "q": "During a Port State Control inspection of a tanker, the inspector finds a standard IP44 junction box in the cargo pump room. What is the immediate PSC finding?",
    "a": "Detention or deficiency - the junction box must be Ex d or Ex e certified for Zone 1; standard IP44 is only suitable for safe spaces",
    "opts": [
      "Advisory only - IP44 boxes are permitted if the pump room has continuous gas detection monitoring",
      "No finding - IP44 is an internationally accepted standard for pump room equipment on tankers",
      "Minor observation - the inspector will note it for correction at next scheduled drydock",
      "Detention or deficiency - the junction box must be Ex d or Ex e certified for Zone 1; standard IP44 is only suitable for safe spaces"
    ],
    "exp": "The cargo pump room is a Zone 1 hazardous area requiring Ex d or Ex e certified equipment per IEC 60079 and SOLAS Chapter II-2. A standard IP44 box is not explosion-proof and constitutes an immediate safety deficiency.",
    "cat": "ExEquip",
    "id": "T19T_031"
  },
  {
    "q": "On a tanker under the IEC 60079 hazardous area classification, what zone classification applies to the 3-5 metre annular ring around Zone 1 areas on the open cargo deck?",
    "a": "Zone 2 - explosive gas atmosphere not likely in normal operation but possible for short periods; accepts Ex n (non-sparking) equipment",
    "opts": [
      "Zone 2 - explosive gas atmosphere not likely in normal operation but possible for short periods; accepts Ex n (non-sparking) equipment",
      "Unclassified - beyond 3 metres from the cargo vents, no hazardous area restrictions apply",
      "Zone 1 - the risk is identical to the pump room because the open deck has no ventilation",
      "Zone 0 - the entire cargo deck must be treated as continuously hazardous regardless of distance from vents"
    ],
    "exp": "Zone 2 surrounds Zone 1 boundaries. It is low probability and short duration. Ex n (non-sparking in normal operation) is the minimum acceptable equipment class. The ETO must verify equipment certificates for all deck fittings and light fixtures in this annular zone.",
    "cat": "HazZone",
    "id": "T19T_032"
  },
  {
    "q": "A tanker ETO notices the cargo pump room bilge shows traces of oil despite the pump mechanical seals appearing intact externally. What is the MOST likely cause?",
    "a": "Internal seal face wear - the lapped carbon/ceramic seal faces have worn to a point where fluid is bypassing under the seal face loading pressure",
    "opts": [
      "The cargo is expanding due to temperature rise during sea passage and is forced through the vent pipes into the bilge",
      "The ship's cathodic protection system is creating galvanic corrosion in the pump casing, causing microscopic weepage",
      "The bilge level sensor is malfunctioning and the reported oil is actually residual water from cargo washing",
      "Internal seal face wear - the lapped carbon/ceramic seal faces have worn to a point where fluid is bypassing under the seal face loading pressure"
    ],
    "exp": "Mechanical seal face wear on cargo pumps is the most common source of pump room oil accumulation. Carbon/ceramic face contact surfaces degrade over time. ETO must verify bilge contents with a calibrated OWS meter and log any accumulation as per MARPOL ORB Part I.",
    "cat": "PumpRoom",
    "id": "T19T_033"
  },
  {
    "q": "What is the purpose of the high-pressure scrubber in an inert gas plant on a crude oil tanker?",
    "a": "To remove sulphur dioxide (SO2) and particulate soot from the flue gas before it enters the cargo tanks, preventing acidic corrosion of the tank coating and cargo contamination",
    "opts": [
      "To filter out hydrocarbon vapours from the flue gas to prevent re-ignition in the scrubber housing",
      "To remove sulphur dioxide (SO2) and particulate soot from the flue gas before it enters the cargo tanks, preventing acidic corrosion of the tank coating and cargo contamination",
      "To heat the cold flue gas to prevent condensation from forming inside the IG distribution piping",
      "To inject additional nitrogen into the flue gas to reduce its oxygen content below 5%"
    ],
    "exp": "Flue gas from the ship's boiler or main engine contains SO2, soot, and acidic compounds. The scrubber uses seawater to wash the gas, removing corrosive SO2 before the now clean, low-O2 gas is delivered to the cargo tanks.",
    "cat": "InertGas",
    "id": "T19T_034"
  },
  {
    "q": "What is the function of the deck water seal (DWS) in a tanker's inert gas system?",
    "a": "It acts as a hydraulic non-return valve - a water column prevents cargo gas from back-flowing through the IG main into the engine room when IG pressure falls below deck pressure",
    "opts": [
      "It monitors the oxygen content of the gas flowing to the cargo deck and isolates flow if O2 exceeds 5%",
      "It cools the hot flue gas from the boiler before it enters the cargo distribution piping",
      "It filters water droplets from the inert gas to prevent liquid ingress into the cargo tanks",
      "It acts as a hydraulic non-return valve - a water column prevents cargo gas from back-flowing through the IG main into the engine room when IG pressure falls below deck pressure"
    ],
    "exp": "The deck water seal uses a water loop as a hydraulic check valve. It allows IG to flow to cargo tanks but prevents the reverse flow of flammable cargo vapours back to the engine room - a critical safety device under SOLAS Regulation II-2/4.",
    "cat": "InertGas",
    "id": "T19T_035"
  },
  {
    "q": "What is the maximum permissible oxygen content inside a cargo tank immediately before any hot work is permitted in adjacent spaces?",
    "a": "Less than 1% oxygen by volume in the tank atmosphere - achieved through inerting and gas-freeing verification",
    "opts": [
      "Less than 1% oxygen by volume in the tank atmosphere - achieved through inerting and gas-freeing verification",
      "Less than 20% oxygen - the same as normal atmospheric oxygen",
      "Less than 10% oxygen by volume - sufficiently below the lower explosive limit",
      "Less than 5% oxygen by volume - the same as the IG delivery standard"
    ],
    "exp": "Before hot work in adjacent spaces, cargo tanks must be inerted to below 1% O2 AND gas-freed (hydrocarbon vapour below 1% LEL). The ETO must personally verify both conditions with a calibrated multi-gas meter and issue a Hot Work Permit.",
    "cat": "InertGas",
    "id": "T19T_036"
  },
  {
    "q": "What is the typical pressure range maintained inside an inerted cargo tank during sea passage to prevent tank structure collapse or overpressure?",
    "a": "100 to 1000 Pa (1 to 10 mbar) positive pressure - just enough to prevent air ingress without stressing the tank structure",
    "opts": [
      "Atmospheric pressure exactly - tanks are maintained at 0 Pa to avoid any structural load on the venting system",
      "5000 to 10000 Pa (50 to 100 mbar) - enough positive pressure to prevent all possible sea water ingress through vents",
      "100 to 1000 Pa (1 to 10 mbar) positive pressure - just enough to prevent air ingress without stressing the tank structure",
      "Slight negative pressure of minus 100 Pa - to allow natural ventilation of any residual vapours"
    ],
    "exp": "Tanks are kept at slight positive pressure (100-1000 Pa) to prevent air ingress that could create an explosive atmosphere. Pressure/vacuum relief valves (P/V valves) open at typically 1400 Pa to prevent overpressure during thermal expansion.",
    "cat": "InertGas",
    "id": "T19T_037"
  },
  {
    "q": "How is a 'Zone 0' hazardous area defined in marine electro-technology?",
    "a": "An area where an explosive gas atmosphere is present continuously, or for long periods, or frequently",
    "opts": [
      "An area where explosive gas is present only in abnormal conditions",
      "An area where explosive dust is present",
      "An area where explosive gas is completely absent",
      "An area where an explosive gas atmosphere is present continuously, or for long periods, or frequently"
    ],
    "exp": "Zone 0 represents the highest level of explosion hazard, such as the vapour space inside a cargo tank.",
    "cat": "ZONES",
    "id": "T19T_038"
  },
  {
    "q": "Which location on an oil tanker is typically classified as Zone 0?",
    "a": "The interior of the cargo tanks and cargo piping",
    "opts": [
      "The interior of the cargo tanks and cargo piping",
      "The open deck above the cargo tanks",
      "The paint locker",
      "The cargo pump room"
    ],
    "exp": "Because the space is constantly filled with hydrocarbon vapours from the cargo, it meets the strict definition of Zone 0.",
    "cat": "ZONES",
    "id": "T19T_039"
  },
  {
    "q": "How is a 'Zone 1' hazardous area defined?",
    "a": "An area where an explosive gas atmosphere is likely to occur in normal operation occasionally",
    "opts": [
      "An area where explosive gas is present continuously",
      "An area restricted to authorised personnel only",
      "An area where gas is only present if a pipe bursts",
      "An area where an explosive gas atmosphere is likely to occur in normal operation occasionally"
    ],
    "exp": "Zone 1 areas have a high probability of containing explosive mixtures during standard operational procedures like loading or discharging.",
    "cat": "ZONES",
    "id": "T19T_040"
  },
  {
    "q": "Which of the following spaces is universally classified as Zone 1 on an oil tanker?",
    "a": "The Cargo Pump Room",
    "opts": [
      "The interior of the cargo tanks",
      "The Engine Control Room",
      "The navigation bridge",
      "The Cargo Pump Room"
    ],
    "exp": "Pump rooms frequently experience minor leaks and vapours during normal cargo operations, placing them squarely in Zone 1.",
    "cat": "ZONES",
    "id": "T19T_041"
  },
  {
    "q": "How is a 'Zone 2' hazardous area defined?",
    "a": "An area where an explosive gas atmosphere is not likely to occur in normal operation, and if it does, it will persist for a short period only",
    "opts": [
      "An area where an explosive gas atmosphere is not likely to occur in normal operation, and if it does, it will persist for a short period only",
      "An area where explosive gas is present continuously",
      "A completely safe area",
      "An area containing liquid cargo"
    ],
    "exp": "Zone 2 covers abnormal leak scenarios or areas directly adjacent to Zone 1 where vapours might temporarily drift.",
    "cat": "ZONES",
    "id": "T19T_042"
  },
  {
    "q": "What is the classification of the open deck area extending 3 metres radially from a cargo tank ventilation outlet?",
    "a": "Zone 1",
    "opts": [
      "Zone 2",
      "Zone 1",
      "Safe Area",
      "Zone 0"
    ],
    "exp": "Because explosive vapours are intentionally expelled from the vent during normal loading, the immediate 3-metre radius is Zone 1.",
    "cat": "ZONES",
    "id": "T19T_043"
  },
  {
    "q": "Under IEC 60079, which Gas Group represents the most easily ignitable and hazardous gases (e.g., Hydrogen)?",
    "a": "Group IIC",
    "opts": [
      "Group IIA",
      "Group IIC",
      "Group III",
      "Group IIB"
    ],
    "exp": "Group IIC gases require the least amount of spark energy to ignite. Equipment rated for IIC can safely be used in IIA and IIB environments.",
    "cat": "ZONES",
    "id": "T19T_044"
  },
  {
    "q": "Which Gas Group covers standard petroleum vapours, propane, and methane?",
    "a": "Group IIA",
    "opts": [
      "Group IIC",
      "Group I",
      "Group IIB",
      "Group IIA"
    ],
    "exp": "Group IIA covers the majority of standard crude oil and petroleum product vapours encountered on standard tankers.",
    "cat": "ZONES",
    "id": "T19T_045"
  },
  {
    "q": "What does Temperature Class T6 indicate regarding electrical equipment?",
    "a": "The maximum surface temperature of the equipment will not exceed 85°C",
    "opts": [
      "The maximum surface temperature of the equipment will not exceed 85°C",
      "The equipment is immune to freezing",
      "The maximum surface temperature is 450°C",
      "The equipment operates at 600°C"
    ],
    "exp": "T6 is the strictest temperature class. It ensures the equipment stays cool enough (≤85°C) to prevent auto-ignition of highly volatile gases.",
    "cat": "ZONES",
    "id": "T19T_046"
  },
  {
    "q": "What is the maximum allowable surface temperature for equipment rated as Class T1?",
    "a": "450°C",
    "opts": [
      "450°C",
      "85°C",
      "200°C",
      "135°C"
    ],
    "exp": "T1 equipment can get very hot (up to 450°C). It is only safe in environments where the gases have a very high auto-ignition temperature.",
    "cat": "ZONES",
    "id": "T19T_047"
  },
  {
    "q": "How is a 'Safe Area' defined on a tanker?",
    "a": "An area where an explosive gas atmosphere is not expected to be present in quantities such as to require special precautions",
    "opts": [
      "Any area with forced ventilation",
      "Any area outside the cargo tanks",
      "An area where an explosive gas atmosphere is not expected to be present in quantities such as to require special precautions",
      "The deck area forward of the accommodation"
    ],
    "exp": "Safe areas (like the accommodation block and engine room) allow the use of standard, non-Ex electrical equipment.",
    "cat": "ZONES",
    "id": "T19T_048"
  },
  {
    "q": "What mechanism maintains the Engine Room as a Safe Area despite its proximity to the pump room?",
    "a": "It is physically separated by a gas-tight bulkhead and maintained at a positive air pressure relative to the pump room",
    "opts": [
      "It is filled with inert gas",
      "It is physically separated by a gas-tight bulkhead and maintained at a positive air pressure relative to the pump room",
      "It uses only 24V equipment",
      "It has open windows for natural draft"
    ],
    "exp": "Positive pressure ensures that if any crack develops, clean air blows OUT of the engine room into the hazardous area, never allowing gas IN.",
    "cat": "ZONES",
    "id": "T19T_049"
  },
  {
    "q": "What is an 'Airlock' between a safe area and a hazardous area?",
    "a": "A space with two gas-tight doors in series, mechanically interlocked so only one can be opened at a time",
    "opts": [
      "A vacuum chamber",
      "A ventilation duct with a high-speed fan",
      "A space with two gas-tight doors in series, mechanically interlocked so only one can be opened at a time",
      "A room filled with water"
    ],
    "exp": "Airlocks prevent the direct exchange of atmospheres, maintaining the safety boundary between Zone 1 and the accommodation.",
    "cat": "ZONES",
    "id": "T19T_050"
  },
  {
    "q": "What must happen electrically if an airlock loses its positive pressure ventilation?",
    "a": "An alarm must sound and all non-certified electrical equipment inside the airlock must automatically trip (disconnect)",
    "opts": [
      "The fire pumps must start",
      "The ship must stop its engines",
      "The lights must flash red",
      "An alarm must sound and all non-certified electrical equipment inside the airlock must automatically trip (disconnect)"
    ],
    "exp": "Loss of pressure means explosive gas might enter. Any equipment not rated for Zone 1 must be instantly killed to prevent ignition.",
    "cat": "ZONES",
    "id": "T19T_051"
  },
  {
    "q": "What does LEL stand for in gas detection?",
    "a": "Lower Explosive Limit",
    "opts": [
      "Lowest Emission Level",
      "Lowest Electrical Load",
      "Latent Energy Limit",
      "Lower Explosive Limit"
    ],
    "exp": "LEL is the minimum concentration of vapour in air that is capable of propagating a flame when ignited.",
    "cat": "ZONES",
    "id": "T19T_052"
  },
  {
    "q": "What does UEL stand for?",
    "a": "Upper Explosive Limit",
    "opts": [
      "Upper Electrical Load",
      "Unrestricted Emission Limit",
      "Upper Explosive Limit",
      "Ultimate Energy Level"
    ],
    "exp": "If the gas concentration exceeds the UEL, the mixture is 'too rich' to burn because there is not enough oxygen.",
    "cat": "ZONES",
    "id": "T19T_053"
  },
  {
    "q": "What is the 'Flammable Range'?",
    "a": "The concentration range between the LEL and UEL where the gas-air mixture will explode if ignited",
    "opts": [
      "The distance a flame can travel",
      "The concentration range between the LEL and UEL where the gas-air mixture will explode if ignited",
      "The distance from a vent to a safe area",
      "The maximum temperature of a fire"
    ],
    "exp": "Safety systems (like Inert Gas) aim to keep the atmosphere either too lean (below LEL) or starved of oxygen to prevent entering this range.",
    "cat": "ZONES",
    "id": "T19T_054"
  },
  {
    "q": "What is the primary function of the Inert Gas (IG) system in cargo tanks?",
    "a": "To reduce the oxygen content inside the tank below 8% by volume, preventing any explosion regardless of hydrocarbon concentration",
    "opts": [
      "To neutralize the smell of the oil",
      "To cool the cargo down",
      "To increase the pressure of the oil",
      "To reduce the oxygen content inside the tank below 8% by volume, preventing any explosion regardless of hydrocarbon concentration"
    ],
    "exp": "By removing the 'oxygen' leg of the fire triangle, the cargo tank cannot explode even if a spark occurs in Zone 0.",
    "cat": "ZONES",
    "id": "T19T_055"
  },
  {
    "q": "What happens in a cargo pump room if the mechanical exhaust ventilation fails?",
    "a": "A visual/audible alarm activates and cargo pumps are usually interlocked to prevent starting",
    "opts": [
      "The room automatically floods with CO2",
      "A visual/audible alarm activates and cargo pumps are usually interlocked to prevent starting",
      "The main engine trips",
      "Nothing, natural draft is sufficient"
    ],
    "exp": "Ventilation is critical to sweeping away heavy vapours. Operating pumps without ventilation risks massive explosive gas accumulation.",
    "cat": "ZONES",
    "id": "T19T_056"
  },
  {
    "q": "How many air changes per hour are typically required for a hazardous cargo pump room?",
    "a": "20 air changes per hour",
    "opts": [
      "10 air changes per hour",
      "20 air changes per hour",
      "5 air changes per hour",
      "60 air changes per hour"
    ],
    "exp": "Marine rules strictly require 20 volume changes per hour to guarantee explosive vapours do not pool in the bilges.",
    "cat": "ZONES",
    "id": "T19T_057"
  },
  {
    "q": "Why are pump room extraction fan motors located OUTSIDE the exhaust ducting?",
    "a": "To ensure electrical sparks from the motor cannot ignite the explosive vapours being extracted",
    "opts": [
      "To ensure electrical sparks from the motor cannot ignite the explosive vapours being extracted",
      "To keep the motor cool",
      "To save space in the duct",
      "To make maintenance easier"
    ],
    "exp": "The fan blade is inside the duct (made of non-sparking brass/bronze), but the driving electric motor sits in a safe area, connected via a gas-tight shaft seal.",
    "cat": "ZONES",
    "id": "T19T_058"
  },
  {
    "q": "What classification does a typical marine paint locker fall under?",
    "a": "Zone 1",
    "opts": [
      "Zone 1",
      "Safe Area",
      "Zone 2",
      "Zone 0"
    ],
    "exp": "Due to the storage of highly flammable solvents and thinners, paint lockers are treated as Zone 1 and require Ex-rated lighting and extraction.",
    "cat": "ZONES",
    "id": "T19T_059"
  },
  {
    "q": "What classification does the ship's battery room fall under during charging?",
    "a": "Zone 1 (due to hydrogen gas evolution)",
    "opts": [
      "Safe Area",
      "Zone 1",
      "Zone 2",
      "Zone 0"
    ],
    "exp": "Battery rooms produce explosive hydrogen, mandating Zone 1 Ex IIC equipment and dedicated ventilation.",
    "cat": "ZONES",
    "id": "T19T_060"
  },
  {
    "q": "What does a 'Hazardous Area Classification Drawing' show?",
    "a": "A plan view of the ship delineating the exact boundaries of all Zone 0, Zone 1, and Zone 2 areas",
    "opts": [
      "The cargo piping layout",
      "The electrical wiring schematic",
      "A plan view of the ship delineating the exact boundaries of all Zone 0, Zone 1, and Zone 2 areas",
      "A diagram of the fire mains"
    ],
    "exp": "This master document is required by class to ensure no unapproved equipment is installed within the hatched boundary zones.",
    "cat": "ZONES",
    "id": "T19T_061"
  },
  {
    "q": "Which types of Ex equipment are permitted to be installed in Zone 0?",
    "a": "Only Intrinsically Safe 'Ex ia' (and some specialized encapsulated equipment)",
    "opts": [
      "Increased Safety (Ex e)",
      "Only Intrinsically Safe 'Ex ia' (and some specialized encapsulated equipment)",
      "Any Ex-rated equipment",
      "Flameproof (Ex d) only"
    ],
    "exp": "Zone 0 is so hazardous that only equipment inherently incapable of storing enough energy to cause a spark (Ex ia) is allowed.",
    "cat": "ZONES",
    "id": "T19T_062"
  },
  {
    "q": "Are portable radios and flashlights allowed to be used in Zone 1 areas on a tanker?",
    "a": "Only if they are specifically certified as Intrinsically Safe for Zone 1 and carry the appropriate Ex markings",
    "opts": [
      "No, no portable electronics are ever allowed",
      "Yes, any commercial equipment is allowed",
      "Only if they are specifically certified as Intrinsically Safe for Zone 1 and carry the appropriate Ex markings",
      "Yes, if they are turned off first"
    ],
    "exp": "Dropping a standard flashlight can break the bulb and ignite gas. Only ATEX/IECEx certified portable gear is permitted.",
    "cat": "ZONES",
    "id": "T19T_063"
  },
  {
    "q": "What dictates the extent of a hazardous zone around a vent pipe?",
    "a": "The volume of gas released, the vent velocity, and the density of the gas",
    "opts": [
      "The volume of gas released, the vent velocity, and the density of the gas",
      "The color of the pipe",
      "The ship's speed",
      "The age of the vessel"
    ],
    "exp": "Heavier-than-air vapours pool near the deck, whereas lighter gases dissipate upward. Standards define the radius based on these physics.",
    "cat": "ZONES",
    "id": "T19T_064"
  },
  {
    "q": "If an open deck is entirely classified as Zone 1, what happens to the area 1.5 metres above the deck?",
    "a": "It remains Zone 1; hazardous areas extend in 3D volumes, not just flat lines",
    "opts": [
      "It becomes a safe area",
      "It remains Zone 1; hazardous areas extend in 3D volumes, not just flat lines",
      "It becomes Zone 0",
      "It becomes Zone 2"
    ],
    "exp": "Zone limits are three-dimensional bubbles (often hemispherical or cylindrical) defined by the source of the release.",
    "cat": "ZONES",
    "id": "T19T_065"
  },
  {
    "q": "What is the primary danger if the gas-tight seal on the pump room bulkhead drive shaft fails?",
    "a": "Explosive vapours from the pump room (Zone 1) will leak into the engine room (Safe Area)",
    "opts": [
      "Water will flood the engine room",
      "The pump will over-pressurize",
      "The motor will spin backwards",
      "Explosive vapours from the pump room (Zone 1) will leak into the engine room (Safe Area)"
    ],
    "exp": "The bulkhead seal physically isolates the hazardous cargo pumps from the non-Ex electric driving motors in the engine room.",
    "cat": "ZONES",
    "id": "T19T_066"
  },
  {
    "q": "What is an 'Ex d' piece of electrical equipment?",
    "a": "Flameproof Enclosure: It contains an internal explosion and cools escaping gases so they cannot ignite the external atmosphere",
    "opts": [
      "Flameproof Enclosure: It contains an internal explosion and cools escaping gases so they cannot ignite the external atmosphere",
      "Intrinsically safe device",
      "Waterproof container",
      "Dust-proof enclosure"
    ],
    "exp": "Ex d expects an internal explosion. Its heavy casing and precisely machined flange gaps cool the escaping flame below the auto-ignition temperature.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_067"
  },
  {
    "q": "Why must you NEVER paint the flange faces of an Ex d enclosure?",
    "a": "Paint alters the microscopic gap dimensions, allowing hot flames to escape and ignite the outside atmosphere",
    "opts": [
      "Paint alters the microscopic gap dimensions, allowing hot flames to escape and ignite the outside atmosphere",
      "Paint makes it too hard to open",
      "Paint traps moisture inside the box",
      "Paint is conductive and causes short circuits"
    ],
    "exp": "The 'flamepath' gap is machined to tiny tolerances (e.g., 0.1mm) to quench flames. Paint widens the gap or burns away, ruining the certification.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_068"
  },
  {
    "q": "What should be applied to the machined flange faces of an Ex d enclosure to prevent rust?",
    "a": "A thin smear of approved non-setting, non-hardening silicone or petroleum grease",
    "opts": [
      "Silicone sealant or RTV",
      "Thick marine epoxy paint",
      "Standard bearing grease",
      "A thin smear of approved non-setting, non-hardening silicone or petroleum grease"
    ],
    "exp": "Only approved light greases that will not harden or prop the gap open are permitted on flamepaths.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_069"
  },
  {
    "q": "What is the defining principle of 'Ex i' (Intrinsically Safe) equipment?",
    "a": "It limits electrical energy (voltage and current) to levels far below what is required to cause an ignition spark or hot surface",
    "opts": [
      "It purges the box with nitrogen",
      "It surrounds the electronics with heavy steel",
      "It limits electrical energy (voltage and current) to levels far below what is required to cause an ignition spark or hot surface",
      "It uses only 220V AC"
    ],
    "exp": "Ex i starves the circuit. Even if you short the wires or break them, the resulting micro-spark lacks the energy to ignite gas.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_070"
  },
  {
    "q": "What is the difference between Ex ia and Ex ib?",
    "a": "Ex ia remains safe with TWO simultaneous faults (allowed in Zone 0); Ex ib remains safe with ONE fault (allowed in Zone 1)",
    "opts": [
      "Ex ia is flameproof, Ex ib is increased safety",
      "Ex ia is for AC, Ex ib is for DC",
      "There is no difference",
      "Ex ia remains safe with TWO simultaneous faults (allowed in Zone 0); Ex ib remains safe with ONE fault (allowed in Zone 1)"
    ],
    "exp": "Zone 0 requires maximum redundancy. Ex ia guarantees safety even if two internal safety components fail simultaneously.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_071"
  },
  {
    "q": "What is a Zener Barrier used for in an Ex i circuit?",
    "a": "It acts as the safety gateway in the Safe Area, clamping voltage (Zener diodes) and limiting current (resistor) sent into the Hazardous Area",
    "opts": [
      "It increases the power to the sensors",
      "It boosts the signal for long cables",
      "It acts as the safety gateway in the Safe Area, clamping voltage (Zener diodes) and limiting current (resistor) sent into the Hazardous Area",
      "It blocks gas from entering the conduit"
    ],
    "exp": "The barrier sits in the control room. If 220V hits the PLC, the barrier fuses and clamps the voltage, protecting the deck sensors.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_072"
  },
  {
    "q": "What is 'Ex e' (Increased Safety) equipment?",
    "a": "Equipment that produces no arcs or sparks in normal operation, upgraded with high IP protection, secure terminals, and excellent insulation",
    "opts": [
      "Equipment submerged in oil",
      "Equipment that produces no arcs or sparks in normal operation, upgraded with high IP protection, secure terminals, and excellent insulation",
      "Equipment that contains explosions",
      "Equipment filled with sand"
    ],
    "exp": "Ex e is used for terminal boxes and some motors. It simply over-engineers the components so a fault (spark) is virtually impossible.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_073"
  },
  {
    "q": "What does the 'tE time' specify on an Ex e motor nameplate?",
    "a": "The maximum time the motor can survive a locked-rotor (stall) condition before its temperature exceeds the hazardous gas ignition limit",
    "opts": [
      "The cooling time required after stopping",
      "The maximum time the motor can survive a locked-rotor (stall) condition before its temperature exceeds the hazardous gas ignition limit",
      "The time it takes to reach full speed",
      "The total expected lifespan of the motor"
    ],
    "exp": "The overload relay MUST be set to trip faster than the tE time (e.g., 10 seconds), otherwise a stalled motor becomes an ignition source.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_074"
  },
  {
    "q": "What is 'Ex p' equipment?",
    "a": "Pressurized/Purged equipment: Uses continuous positive air pressure to keep explosive gas out of a standard enclosure",
    "opts": [
      "Potted equipment",
      "Protected equipment",
      "Powder-filled equipment",
      "Pressurized/Purged equipment: Uses continuous positive air pressure to keep explosive gas out of a standard enclosure"
    ],
    "exp": "Clean air is pumped into the box. Because pressure inside > pressure outside, hazardous gas cannot enter.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_075"
  },
  {
    "q": "Before powering ON an Ex p system, what safety sequence must occur?",
    "a": "A pre-purge cycle must run, changing the air volume inside the enclosure at least 5 times to flush out any leaked gas",
    "opts": [
      "A pre-purge cycle must run, changing the air volume inside the enclosure at least 5 times to flush out any leaked gas",
      "The box must be heated",
      "A vacuum must be pulled",
      "The main engine must be started"
    ],
    "exp": "If gas crept in while it was off, sparking it on would cause a bomb. The pre-purge ensures the box is 100% clean air.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_076"
  },
  {
    "q": "What happens if an Ex p enclosure loses air pressure?",
    "a": "An alarm sounds, and power to the uncertified equipment inside must be automatically tripped (disconnected)",
    "opts": [
      "It fills with CO2",
      "An alarm sounds, and power to the uncertified equipment inside must be automatically tripped (disconnected)",
      "The enclosure doors automatically lock",
      "It switches to battery power"
    ],
    "exp": "Loss of the pressure barrier removes the safety protection. Power must die before gas can drift inside.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_077"
  },
  {
    "q": "What is 'Ex m' equipment?",
    "a": "Encapsulation: The sparking electrical components are completely potted (buried) in solid resin or epoxy",
    "opts": [
      "Motorized equipment",
      "Magnetic equipment",
      "Movable equipment",
      "Encapsulation: The sparking electrical components are completely potted (buried) in solid resin or epoxy"
    ],
    "exp": "Gas cannot reach the sparks because they are physically entombed in hard plastic.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_078"
  },
  {
    "q": "Where is 'Ex n' (Non-sparking) equipment permitted to be used?",
    "a": "Only in Zone 2",
    "opts": [
      "Zone 0, 1, and 2",
      "Only in Zone 2",
      "Zone 1 and 2",
      "Only in Safe Areas"
    ],
    "exp": "Ex n relies solely on the fact that it doesn't spark under NORMAL conditions. It has no protection against faults, so it is banned from Zone 0 and 1.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_079"
  },
  {
    "q": "What is a major maintenance violation regarding the bolts on an Ex d enclosure?",
    "a": "Replacing a lost bolt with a standard mild steel bolt or one of incorrect length",
    "opts": [
      "Applying grease to the threads",
      "Replacing a lost bolt with a standard mild steel bolt or one of incorrect length",
      "Tightening them with a torque wrench",
      "Painting the bolt heads"
    ],
    "exp": "Ex d bolts are high-tensile strength to survive internal explosions. The wrong length might 'bottom out' and leave a gap in the flamepath.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_080"
  },
  {
    "q": "Can you drill a new cable entry hole in a certified Ex d enclosure onboard?",
    "a": "No, drilling invalidates the certification; all entries must be factory machined",
    "opts": [
      "Yes, but only on the bottom face",
      "Yes, if painted afterwards",
      "No, drilling invalidates the certification; all entries must be factory machined",
      "Yes, if you use a rubber grommet"
    ],
    "exp": "Any uncontrolled modification ruins the flameproof pressure containment and instantly voids the Ex certificate.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_081"
  },
  {
    "q": "What type of cable gland MUST be used on an Ex d enclosure?",
    "a": "An ATEX/IECEx certified Ex d barrier gland, sometimes requiring epoxy compound filling depending on cable volume",
    "opts": [
      "Any metal gland",
      "A rubber push-fit grommet",
      "A standard plastic weatherproof gland",
      "An ATEX/IECEx certified Ex d barrier gland, sometimes requiring epoxy compound filling depending on cable volume"
    ],
    "exp": "The gland itself forms part of the explosion containment. If an explosion occurs, it cannot be allowed to shoot fire down the hollow spaces inside the cable.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_082"
  },
  {
    "q": "What does a 'Detailed' grade of Ex inspection entail?",
    "a": "Opening the equipment, disconnecting power, and checking internal components, flamepaths, and terminal tightness",
    "opts": [
      "Washing the equipment",
      "Looking at it from a distance",
      "Opening the equipment, disconnecting power, and checking internal components, flamepaths, and terminal tightness",
      "Taking a thermal photograph"
    ],
    "exp": "Unlike visual or close inspections, detailed inspections require complete power isolation and physical dismantling by a competent person.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_083"
  },
  {
    "q": "What does the CE mark accompanied by 'Ex' in a hexagon represent?",
    "a": "Compliance with the European ATEX directive for explosive atmospheres",
    "opts": [
      "It is exempt from class surveys",
      "It generates its own electricity",
      "Compliance with the European ATEX directive for explosive atmospheres",
      "It is safe to use underwater"
    ],
    "exp": "The hexagon Ex symbol is the universal visual identifier that the equipment is legally certified for hazardous zones.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_084"
  },
  {
    "q": "What colour is strictly reserved for the outer sheath of Intrinsically Safe (Ex i) cables?",
    "a": "Light Blue",
    "opts": [
      "Black",
      "Yellow",
      "Red",
      "Light Blue"
    ],
    "exp": "Blue sheathing instantly warns electricians not to mix these safe, low-energy cables with high-voltage power cables in trays.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_085"
  },
  {
    "q": "Why must the shield/screen of an Ex i cable be earthed at ONE end only (usually the safe area)?",
    "a": "To prevent circulating ground loop currents which could induce unsafe voltages in the hazardous area",
    "opts": [
      "To amplify the 4-20mA signal",
      "To make the cable waterproof",
      "To prevent circulating ground loop currents which could induce unsafe voltages in the hazardous area",
      "To save wire costs"
    ],
    "exp": "If earthed at both ends, hull potential differences will drive massive stray currents through the shield, destroying the intrinsic safety.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_086"
  },
  {
    "q": "Can Ex e (Increased Safety) enclosures be made of plastic?",
    "a": "Yes, provided the plastic is anti-static and certified to withstand impacts and UV light",
    "opts": [
      "Yes, provided the plastic is anti-static and certified to withstand impacts and UV light",
      "Yes, any standard plastic box is fine",
      "No, they must be cast iron",
      "No, plastic melts too easily"
    ],
    "exp": "Unlike Ex d (which must survive explosions), Ex e just prevents sparks, so tough, carbon-loaded anti-static GRP is perfectly acceptable.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_087"
  },
  {
    "q": "What happens if a weather seal (O-ring) is removed from an Ex e terminal box?",
    "a": "It loses its required IP rating (usually IP54+), allowing water/dust to enter and cause sparks, voiding the Ex e certification",
    "opts": [
      "It becomes an Ex d box",
      "It works better due to ventilation",
      "Nothing, it is still safe",
      "It loses its required IP rating (usually IP54+), allowing water/dust to enter and cause sparks, voiding the Ex e certification"
    ],
    "exp": "Ex e completely relies on keeping water and dust away from the live terminals to prevent tracking arcs.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_088"
  },
  {
    "q": "Is a weather seal (O-ring) strictly required for the explosion protection of an Ex d flamepath?",
    "a": "No, the metal-to-metal gap is the flamepath. O-rings are only for weatherproofing (IP rating) and must not prop the gap open",
    "opts": [
      "No, the metal-to-metal gap is the flamepath. O-rings are only for weatherproofing (IP rating) and must not prop the gap open",
      "No, Ex d boxes cannot use O-rings",
      "Yes, the rubber stops the explosion",
      "Yes, it seals the gas inside"
    ],
    "exp": "The explosive pressure escapes through the machined metal gap. If an O-ring sits IN the flamepath, it burns away instantly.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_089"
  },
  {
    "q": "How is 'Creepage' defined in the context of Ex e terminal boxes?",
    "a": "The shortest distance along the surface of an insulating material between two conductive parts",
    "opts": [
      "The speed at which gas enters the box",
      "The distance a flame travels in air",
      "The gap between the flange faces",
      "The shortest distance along the surface of an insulating material between two conductive parts"
    ],
    "exp": "Ex e mandates massive creepage distances to ensure high-voltage tracking (arcing across dusty plastic) cannot happen.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_090"
  },
  {
    "q": "How is 'Clearance' defined in Ex e boxes?",
    "a": "The shortest direct distance straight through the air between two conductive parts",
    "opts": [
      "The shortest direct distance straight through the air between two conductive parts",
      "The distance along the plastic surface",
      "The minimum distance to the bulkhead",
      "The size of the cable entry hole"
    ],
    "exp": "Clearance prevents air-arcing. Ex e requires larger clearances than standard equipment.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_091"
  },
  {
    "q": "Can you replace a blown fuse inside a Zener Barrier?",
    "a": "No, Zener barriers are encapsulated for safety; the entire barrier block must be replaced",
    "opts": [
      "No, Zener barriers are encapsulated for safety; the entire barrier block must be replaced",
      "Yes, with standard glass fuses",
      "Yes, but only in dry dock",
      "Yes, if you use silver wire"
    ],
    "exp": "The components are potted in resin to prevent tampering. If it blows, it did its job and must be discarded.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_092"
  },
  {
    "q": "What is 'Ex o' protection?",
    "a": "Oil Immersion: Electrical parts are submerged in oil so explosive gas cannot reach the sparks",
    "opts": [
      "Oxygen purged",
      "Open to atmosphere",
      "Oil Immersion: Electrical parts are submerged in oil so explosive gas cannot reach the sparks",
      "Optical isolation"
    ],
    "exp": "Often used for heavy switchgear or transformers, the oil acts as both an insulator and a physical barrier to gas.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_093"
  },
  {
    "q": "What does a 'Galvanic Isolator' do differently from a Zener Barrier in an Ex i system?",
    "a": "It provides full electrical isolation (via transformers/optocouplers), eliminating the need for a dedicated high-integrity earth connection",
    "opts": [
      "It provides full electrical isolation (via transformers/optocouplers), eliminating the need for a dedicated high-integrity earth connection",
      "It allows massive currents to pass",
      "It uses zinc to protect the wires",
      "It is only used for AC power"
    ],
    "exp": "Zener barriers require a flawless <1 ohm earth to shunt faults. Galvanic isolators use optics, making them safer and easier to install.",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_094"
  },
  {
    "q": "If the nameplate of an instrument says 'EEx ia IIC T4', can it be installed in a pump room where Group IIB gases are present?",
    "a": "Yes, Group IIC is the highest standard and covers IIB, and 'ia' covers Zone 1 pump rooms",
    "opts": [
      "No, it must match IIB exactly",
      "Yes, Group IIC is the highest standard and covers IIB, and 'ia' covers Zone 1 pump rooms",
      "No, 'ia' is only for safe areas",
      "No, T4 is not safe enough"
    ],
    "exp": "Equipment certified for the worst-case scenario (IIC, Hydrogen) is over-qualified and perfectly safe for lesser hazards (IIB, Crude).",
    "cat": "EX_EQUIPMENT",
    "id": "T19T_095"
  },
  {
    "q": "What generates static electricity during tanker cargo operations?",
    "a": "The physical flow and friction of non-conductive petroleum liquids through pipes and filters",
    "opts": [
      "The ship's radar sweeping the deck",
      "The physical flow and friction of non-conductive petroleum liquids through pipes and filters",
      "Solar radiation on the deck",
      "The ICCP system"
    ],
    "exp": "Liquids shear electrons off the pipe walls as they flow, creating a massive build-up of static charge in the liquid body.",
    "cat": "BONDING",
    "id": "T19T_096"
  },
  {
    "q": "What is considered a 'Static Accumulator' cargo?",
    "a": "Refined products with very low electrical conductivity (e.g., Jet fuel, Diesel, Kerosene)",
    "opts": [
      "Saltwater ballast",
      "Refined products with very low electrical conductivity (e.g., Jet fuel, Diesel, Kerosene)",
      "Heavy crude oil",
      "Liquid nitrogen"
    ],
    "exp": "Pure, refined oils don't have the impurities to conduct electricity. The static charge is trapped inside the liquid bulk.",
    "cat": "BONDING",
    "id": "T19T_097"
  },
  {
    "q": "Why is 'Splash Filling' (free fall of liquid into a tank) strictly prohibited?",
    "a": "The breaking apart of the liquid stream generates massive amounts of highly charged static mist/foam",
    "opts": [
      "It ruins the paint",
      "It causes too much noise",
      "The breaking apart of the liquid stream generates massive amounts of highly charged static mist/foam",
      "It causes the tank to overflow"
    ],
    "exp": "A charged mist behaves like a thundercloud inside the tank, eventually throwing a massive lightning-like spark to the bulkheads.",
    "cat": "BONDING",
    "id": "T19T_098"
  },
  {
    "q": "What is the initial flow rate restriction when commencing loading of a static accumulator cargo?",
    "a": "Linear velocity must not exceed 1 metre per second until the bottom piping is submerged",
    "opts": [
      "Linear velocity must not exceed 1 metre per second until the bottom piping is submerged",
      "100 litres per minute",
      "Maximum speed to load fast",
      "10 metres per second"
    ],
    "exp": "Restricting speed prevents splashing and reduces friction until the pipe inlets are covered and splash-risk is gone.",
    "cat": "BONDING",
    "id": "T19T_099"
  },
  {
    "q": "What is 'Relaxation Time' in static electricity management?",
    "a": "A mandatory waiting period (usually 30 minutes) after pumping stops, allowing the static charge in the liquid to bleed off to the grounded hull",
    "opts": [
      "A mandatory waiting period (usually 30 minutes) after pumping stops, allowing the static charge in the liquid to bleed off to the grounded hull",
      "The time it takes the cargo to cool",
      "The crew's break time",
      "The time required to sign the permit"
    ],
    "exp": "No sampling tapes or sounding rods can be lowered into the tank during this 30-minute window, as they could act as a spark conductor.",
    "cat": "BONDING",
    "id": "T19T_100"
  },
  {
    "q": "What is the primary function of Equipotential Bonding on a tanker deck?",
    "a": "To connect all metallic components to the hull, ensuring zero voltage difference exists to cause a spark",
    "opts": [
      "To power the deck lighting",
      "To stop the ship from rusting",
      "To connect all metallic components to the hull, ensuring zero voltage difference exists to cause a spark",
      "To act as a lightning rod"
    ],
    "exp": "If a pipe and the deck are at the same voltage (equipotential), a spark cannot physically jump between them.",
    "cat": "BONDING",
    "id": "T19T_101"
  },
  {
    "q": "What is the maximum acceptable electrical resistance across a bonding connection (e.g., across a pipe flange)?",
    "a": "Less than 1 Ohm (< 1 Ω)",
    "opts": [
      "Greater than 1 Megaohm",
      "Less than 1 Ohm (< 1 Ω)",
      "Less than 100 Ohms",
      "Zero exactly"
    ],
    "exp": "A resistance of less than 1 ohm ensures static charge dissipates instantly without building up.",
    "cat": "BONDING",
    "id": "T19T_102"
  },
  {
    "q": "Why are copper bonding straps bolted across pipe flanges?",
    "a": "Because rubber gaskets and painted bolts can insulate the pipe sections; the strap ensures continuous conductivity",
    "opts": [
      "To hold the pipes together",
      "To prevent theft of the pipes",
      "Because rubber gaskets and painted bolts can insulate the pipe sections; the strap ensures continuous conductivity",
      "To act as a sacrificial anode"
    ],
    "exp": "A gasket breaks the electrical circuit. The copper strap bridges the gap, allowing static to flow safely back to the hull.",
    "cat": "BONDING",
    "id": "T19T_103"
  },
  {
    "q": "Why is the traditional 'Ship-to-Shore bonding cable' NO LONGER recommended by ISGOTT?",
    "a": "If the cable breaks or is disconnected last, it can draw an explosive spark from massive ICCP stray currents",
    "opts": [
      "It is too heavy to lift",
      "It causes the cargo to freeze",
      "It transmits computer viruses",
      "If the cable breaks or is disconnected last, it can draw an explosive spark from massive ICCP stray currents"
    ],
    "exp": "Instead of a bonding cable, an insulating flange is used to block current entirely, which is far safer.",
    "cat": "BONDING",
    "id": "T19T_104"
  },
  {
    "q": "What is the purpose of the Insulating Flange at the ship-to-shore manifold?",
    "a": "To electrically isolate the ship from the jetty, preventing low-voltage ICCP stray currents from flowing through the cargo hoses and sparking",
    "opts": [
      "To keep the cargo hot",
      "To prevent static electricity",
      "To electrically isolate the ship from the jetty, preventing low-voltage ICCP stray currents from flowing through the cargo hoses and sparking",
      "To filter the oil"
    ],
    "exp": "The flange stops the jetty and ship from acting as a giant galvanic cell. It has a high resistance (e.g., > 1000 ohms).",
    "cat": "BONDING",
    "id": "T19T_105"
  },
  {
    "q": "How does the ship protect against STATIC electricity on cargo hoses if the insulating flange blocks current?",
    "a": "The hose on the ship side is bonded to the ship, and the hose on the shore side is bonded to the shore; only the flange between them is insulated",
    "opts": [
      "The hoses are made of pure copper",
      "The hose on the ship side is bonded to the ship, and the hose on the shore side is bonded to the shore; only the flange between them is insulated",
      "Water is sprayed on the hoses",
      "Static is ignored"
    ],
    "exp": "Each half dissipates its own static to its respective earth, while the insulator prevents the separate ICCP stray current from jumping across.",
    "cat": "BONDING",
    "id": "T19T_106"
  },
  {
    "q": "What danger arises if steam is injected into a cargo tank for cleaning?",
    "a": "Steam jets generate massive clouds of highly charged static mist, creating an extreme explosion hazard",
    "opts": [
      "Steam jets generate massive clouds of highly charged static mist, creating an extreme explosion hazard",
      "It ruins the ICCP system",
      "The steel melts",
      "The steam freezes instantly"
    ],
    "exp": "Steam cleaning must never be done in an explosive atmosphere. The tank must be completely washed and gas-freed first.",
    "cat": "BONDING",
    "id": "T19T_107"
  },
  {
    "q": "Why must all portable sounding tapes or UTI meters be firmly bonded to the deck before being lowered into a tank?",
    "a": "To ensure the metal tape does not act as an isolated capacitor, picking up charge and sparking against the tank hatch",
    "opts": [
      "To power the digital screen",
      "To ensure the metal tape does not act as an isolated capacitor, picking up charge and sparking against the tank hatch",
      "To provide a plumb bob effect",
      "So they don't fall in"
    ],
    "exp": "The bonding wire is clipped to the deck FIRST, ensuring the person, the tape, and the deck are all at zero volts before entering the vapour zone.",
    "cat": "BONDING",
    "id": "T19T_108"
  },
  {
    "q": "What happens if a crew member wears highly insulating rubber-soled shoes on a tanker deck?",
    "a": "They become a walking capacitor, accumulating static charge that can spark when they touch a grounded valve handle",
    "opts": [
      "They trigger the gas alarms",
      "They become a walking capacitor, accumulating static charge that can spark when they touch a grounded valve handle",
      "They are protected from lightning",
      "They slip and fall"
    ],
    "exp": "Anti-static footwear is mandatory. It has a slight conductivity (10^5 to 10^8 ohms) to bleed body charge safely into the steel deck.",
    "cat": "BONDING",
    "id": "T19T_109"
  },
  {
    "q": "How does Inert Gas (IG) relate to static electricity hazards?",
    "a": "IG does not stop static generation, but it removes the oxygen, preventing the spark from causing an explosion",
    "opts": [
      "IG increases static massive",
      "IG grounds the tank",
      "IG prevents static from forming",
      "IG does not stop static generation, but it removes the oxygen, preventing the spark from causing an explosion"
    ],
    "exp": "Static sparks still happen inside IG-filled tanks, but because O2 is below 8%, there is no fire triangle.",
    "cat": "BONDING",
    "id": "T19T_110"
  },
  {
    "q": "What is the danger of using synthetic ropes (nylon/polypropylene) in hazardous areas?",
    "a": "They are highly non-conductive and can generate massive static charges when sliding or rubbing",
    "opts": [
      "They are too weak",
      "They absorb oil",
      "They are highly non-conductive and can generate massive static charges when sliding or rubbing",
      "They interfere with radios"
    ],
    "exp": "Friction on synthetic ropes acts like rubbing a balloon. They cannot bleed off the charge, posing a spark risk.",
    "cat": "BONDING",
    "id": "T19T_111"
  },
  {
    "q": "Why are drive belts (V-belts) on pump room fans made of special materials?",
    "a": "They must be anti-static belts to prevent friction from generating high-voltage static sparks during rotation",
    "opts": [
      "They must be anti-static belts to prevent friction from generating high-voltage static sparks during rotation",
      "They must be made of pure rubber",
      "They must be fireproof",
      "They must be bulletproof"
    ],
    "exp": "Standard rubber belts act like Van de Graaff generators. Anti-static belts contain carbon to bleed the friction charge to the grounded pulleys.",
    "cat": "BONDING",
    "id": "T19T_112"
  },
  {
    "q": "What is an 'Inductive' spark vs a 'Resistive' discharge?",
    "a": "Inductive sparks (metal to metal) are sharp, energetic, and incendiary. Resistive discharges (liquid to metal) are diffuse and less incendiary",
    "opts": [
      "Resistive sparks are caused by ICCP",
      "Inductive is from water, Resistive from oil",
      "They are exactly the same",
      "Inductive sparks (metal to metal) are sharp, energetic, and incendiary. Resistive discharges (liquid to metal) are diffuse and less incendiary"
    ],
    "exp": "This is why ungrounded metal objects (like a dropped wrench or unbonded tape) in a tank are so deadly-they produce the sharp, concentrated sparks.",
    "cat": "BONDING",
    "id": "T19T_113"
  },
  {
    "q": "How is the resistance of an Insulating Flange tested during dry dock?",
    "a": "With an insulation tester (Megger), verifying resistance is greater than 1000 Ohms",
    "opts": [
      "With a micro-ohmmeter, verifying < 1 Ohm",
      "With a high voltage spark test",
      "It is not tested",
      "With an insulation tester (Megger), verifying resistance is greater than 1000 Ohms"
    ],
    "exp": "Unlike bonding (which must be <1 ohm), the insulating flange must block current, requiring a high resistance.",
    "cat": "BONDING",
    "id": "T19T_114"
  },
  {
    "q": "What is 'Micro-sparking' in cargo tanks?",
    "a": "Tiny discharges between the charged liquid surface and internal tank structures (ladders, bulkheads)",
    "opts": [
      "Sparks in the pump room",
      "Sparks from small electronics",
      "Sparks from the ICCP system",
      "Tiny discharges between the charged liquid surface and internal tank structures (ladders, bulkheads)"
    ],
    "exp": "As the charged oil level rises, it gets close to roof beams and throws tiny sparks. Inert Gas ensures these sparks find no oxygen.",
    "cat": "BONDING",
    "id": "T19T_115"
  },
  {
    "q": "If a portable pump is used in a hazardous area, what critical electrical step must be taken before operation?",
    "a": "A dedicated earth bonding wire must be clamped from the pump casing to the ship's bare steel deck",
    "opts": [
      "It must be painted red",
      "It must be wrapped in plastic",
      "A dedicated earth bonding wire must be clamped from the pump casing to the ship's bare steel deck",
      "The battery must be removed"
    ],
    "exp": "Any isolated metal equipment will accumulate static from the fluid flow. The earthing clamp bleeds it safely away.",
    "cat": "BONDING",
    "id": "T19T_116"
  },
  {
    "q": "Why is water washing of tanks capable of causing explosions (if not inerted)?",
    "a": "High-pressure water jets break into fine droplets, creating a highly charged electro-static mist inside the tank",
    "opts": [
      "Water causes short circuits in the lights",
      "High-pressure water jets break into fine droplets, creating a highly charged electro-static mist inside the tank",
      "Water reacts chemically with steel",
      "Water washes away the paint"
    ],
    "exp": "The friction of the water tearing out of the nozzle acts identically to a thunderstorm, separating charges into a massive spark hazard.",
    "cat": "BONDING",
    "id": "T19T_117"
  },
  {
    "q": "What are the key parameters measured by a low-resistance ohmmeter (Ductor) when checking deck bonding?",
    "a": "Values typically in the milli-ohm or micro-ohm range to prove flawless metal-to-metal continuity",
    "opts": [
      "Values in the Mega-ohm range",
      "Voltage up to 500V",
      "Values typically in the milli-ohm or micro-ohm range to prove flawless metal-to-metal continuity",
      "Capacitance of the pipe"
    ],
    "exp": "A standard multimeter isn't accurate enough near zero. Special bonding testers inject high current to measure tiny resistances accurately.",
    "cat": "BONDING",
    "id": "T19T_118"
  },
  {
    "q": "Is the ship's hull considered a perfect earth for static electricity?",
    "a": "Yes, the massive steel hull in contact with the infinite ocean provides an absolute zero-volt earth reference",
    "opts": [
      "No, it floats so it has no earth",
      "Only when the anchor is dropped",
      "Only if the ICCP is turned off",
      "Yes, the massive steel hull in contact with the infinite ocean provides an absolute zero-volt earth reference"
    ],
    "exp": "Bonding to the hull guarantees the equipment is perfectly neutralized to the potential of the surrounding sea.",
    "cat": "BONDING",
    "id": "T19T_119"
  },
  {
    "q": "What happens if crude oil is mixed with water during pumping?",
    "a": "The presence of a second phase (water droplets in oil) massively increases the generation of static electricity",
    "opts": [
      "It causes the pipes to freeze",
      "It cancels out the static charge",
      "It dissolves the pipe flanges",
      "The presence of a second phase (water droplets in oil) massively increases the generation of static electricity"
    ],
    "exp": "Water droplets settling through the oil layer strip electrons violently. 'Water bottoms' in tanks are a major static hazard during loading.",
    "cat": "BONDING",
    "id": "T19T_120"
  },
  {
    "q": "Are sacrificial anodes inside cargo tanks an explosion risk?",
    "a": "Yes, if an aluminum or magnesium anode falls from the roof and strikes rusty steel, it causes an incendiary thermite spark",
    "opts": [
      "Yes, they generate hydrogen gas",
      "No, they absorb all static",
      "No, they are totally safe",
      "Yes, if an aluminum or magnesium anode falls from the roof and strikes rusty steel, it causes an incendiary thermite spark"
    ],
    "exp": "Therefore, class rules heavily restrict the height and placement of aluminum anodes inside tanks, preferring zinc instead.",
    "cat": "BONDING",
    "id": "T19T_121"
  },
  {
    "q": "Why do some marine fuels contain 'Anti-Static Additives'?",
    "a": "To increase the electrical conductivity of the fuel, allowing static charge to bleed away naturally to the pipe walls",
    "opts": [
      "To make the fuel burn hotter",
      "To increase the electrical conductivity of the fuel, allowing static charge to bleed away naturally to the pipe walls",
      "To change the color of the fuel",
      "To stop the fuel from freezing"
    ],
    "exp": "Doping jet fuel with a few parts-per-million of conductive salts prevents it from acting as a static accumulator.",
    "cat": "BONDING",
    "id": "T19T_122"
  },
  {
    "q": "What must the ETO ensure regarding the electrical continuity of cargo hoses?",
    "a": "That the internal bonding wire of the hose is intact to bleed static, unless it is specifically designed as a non-conducting hose",
    "opts": [
      "That it glows in the dark",
      "That the hose carries 24V power",
      "That the internal bonding wire of the hose is intact to bleed static, unless it is specifically designed as a non-conducting hose",
      "That the hose has high resistance"
    ],
    "exp": "Hoses usually have a steel helix wire inside. It must be tested for continuity to ensure static from flow bleeds back to the ship.",
    "cat": "BONDING",
    "id": "T19T_123"
  },
  {
    "q": "If a pipeline is completely painted inside and out, how is static dissipated?",
    "a": "Paint is highly resistive; static may accumulate unless physical metal-to-metal bonding paths (straps or unpainted bosses) are maintained",
    "opts": [
      "The paint absorbs the static",
      "It dissipates into the air",
      "The fluid breaks down the paint",
      "Paint is highly resistive; static may accumulate unless physical metal-to-metal bonding paths (straps or unpainted bosses) are maintained"
    ],
    "exp": "Heavy epoxy coatings insulate the steel. Bonding wires must connect bare metal to bare metal.",
    "cat": "BONDING",
    "id": "T19T_124"
  },
  {
    "q": "What is the consequence of opening a tank hatch immediately after high-speed loading of diesel?",
    "a": "The relaxation time is violated; drawing air in or inserting a tool could trigger an explosion from the un-dissipated static cloud",
    "opts": [
      "The relaxation time is violated; drawing air in or inserting a tool could trigger an explosion from the un-dissipated static cloud",
      "The tank loses its pressure",
      "The diesel evaporates instantly",
      "The ship rolls over"
    ],
    "exp": "The 30-minute rule is absolute life-safety. No ullage ports or hatches can be opened until the charge bleeds off.",
    "cat": "BONDING",
    "id": "T19T_125"
  },
  {
    "q": "What does MGPS stand for in marine engineering?",
    "a": "Marine Growth Prevention System",
    "opts": [
      "Marine Growth Prevention System",
      "Main Generator Power Supply",
      "Motor Gear Protection System",
      "Marine Galvanic Protection System"
    ],
    "exp": "The system prevents barnacles, mussels, and algae from clogging the ship's internal seawater cooling pipes.",
    "cat": "MGPS",
    "id": "T19T_126"
  },
  {
    "q": "What are the two most common anode materials used in an MGPS?",
    "a": "Copper (Cu) and Aluminium (Al)",
    "opts": [
      "Copper (Cu) and Aluminium (Al)",
      "Iron and Steel",
      "Titanium and Platinum",
      "Zinc and Magnesium"
    ],
    "exp": "Copper acts as the biocide. Aluminium provides an anti-corrosive film inside the pipes.",
    "cat": "MGPS",
    "id": "T19T_127"
  },
  {
    "q": "How does the Copper (Cu) anode prevent marine growth?",
    "a": "Electrolysis dissolves the copper, releasing toxic Cu²⁺ ions that prevent microscopic larvae from settling and attaching to pipe walls",
    "opts": [
      "It raises the water temperature",
      "It physically blocks the pipes",
      "It electrocutes the fish",
      "Electrolysis dissolves the copper, releasing toxic Cu²⁺ ions that prevent microscopic larvae from settling and attaching to pipe walls"
    ],
    "exp": "Just a tiny concentration (2 parts per billion) makes the environment hostile to larvae without harming the open ocean.",
    "cat": "MGPS",
    "id": "T19T_128"
  },
  {
    "q": "Where are MGPS anodes typically installed?",
    "a": "Inside the sea chests or seawater intake strainers",
    "opts": [
      "Inside the sea chests or seawater intake strainers",
      "On the external hull near the bow",
      "Inside the cargo tanks",
      "On the main engine block"
    ],
    "exp": "Placing them at the very inlet ensures the treated water flows through the entire cooling network of the ship.",
    "cat": "MGPS",
    "id": "T19T_129"
  },
  {
    "q": "What is the typical operating current for an MGPS anode?",
    "a": "0.5 to 4 Amps DC",
    "opts": [
      "50 to 60 Amps AC",
      "Microamps",
      "0.5 to 4 Amps DC",
      "100 to 200 Amps DC"
    ],
    "exp": "Because the anodes are slowly dissolved over 2.5 years, only a very small, controlled DC current is required.",
    "cat": "MGPS",
    "id": "T19T_130"
  },
  {
    "q": "What acts as the cathode in the MGPS electrical circuit?",
    "a": "The steel casing of the sea chest and the surrounding seawater pipework",
    "opts": [
      "The steel casing of the sea chest and the surrounding seawater pipework",
      "A dedicated titanium rod",
      "The shore power earth",
      "The hull ICCP anodes"
    ],
    "exp": "Current flows from the positive copper rod through the seawater to the grounded steel walls of the sea chest.",
    "cat": "MGPS",
    "id": "T19T_131"
  },
  {
    "q": "How does an MGPS controller differ from an ICCP controller?",
    "a": "MGPS runs on a fixed, manually set current based on pump flow rate; ICCP uses automated feedback from a reference electrode",
    "opts": [
      "MGPS runs on a fixed, manually set current based on pump flow rate; ICCP uses automated feedback from a reference electrode",
      "MGPS uses massive voltages",
      "MGPS uses AC, ICCP uses DC",
      "There is no difference"
    ],
    "exp": "There is no 'potential' to measure in MGPS. The ETO simply turns the current up if more seawater pumps are turned on.",
    "cat": "MGPS",
    "id": "T19T_132"
  },
  {
    "q": "What is the function of the Aluminium (Al) anode in the MGPS?",
    "a": "It releases ions that form a gelatinous aluminium hydroxide floc, which coats the inside of steel pipes to prevent corrosion",
    "opts": [
      "It cools the water",
      "It filters the seawater",
      "It kills the barnacles",
      "It releases ions that form a gelatinous aluminium hydroxide floc, which coats the inside of steel pipes to prevent corrosion"
    ],
    "exp": "While copper stops biology, aluminium stops rust. (Note: If pipes are Cu-Ni alloy, Iron anodes are used instead of Al).",
    "cat": "MGPS",
    "id": "T19T_133"
  },
  {
    "q": "Why is MGPS operation particularly critical while the ship is in port?",
    "a": "Shallow, warm coastal waters contain the highest concentrations of marine larvae and bio-fouling organisms",
    "opts": [
      "Because the ship is connected to shore power",
      "Because the main engine is off",
      "Because deep ocean water has more barnacles",
      "Shallow, warm coastal waters contain the highest concentrations of marine larvae and bio-fouling organisms"
    ],
    "exp": "Ports are breeding grounds. Unlike ICCP, MGPS must absolutely be left ON while alongside to protect the idling coolers.",
    "cat": "MGPS",
    "id": "T19T_134"
  },
  {
    "q": "What happens if the MGPS current is set too high for a prolonged period?",
    "a": "The copper anodes will dissolve completely long before the next scheduled dry dock, leaving the system unprotected",
    "opts": [
      "The copper anodes will dissolve completely long before the next scheduled dry dock, leaving the system unprotected",
      "The pipes will turn green",
      "The seawater will boil",
      "The ICCP system will trip"
    ],
    "exp": "Current determines the physical melt rate (Faraday's Law). Setting 4A instead of 2A cuts the anode lifespan exactly in half.",
    "cat": "MGPS",
    "id": "T19T_135"
  },
  {
    "q": "If the MGPS panel alarms for 'Open Circuit' on an anode, what is the most likely physical cause?",
    "a": "The anode has been completely consumed (dissolved) and the electrical path into the seawater is broken",
    "opts": [
      "The sea chest is flooded",
      "The water is too salty",
      "The AC power failed",
      "The anode has been completely consumed (dissolved) and the electrical path into the seawater is broken"
    ],
    "exp": "Once the copper rod melts away to the nub, there is no metal left to pass current into the water, causing an open circuit.",
    "cat": "MGPS",
    "id": "T19T_136"
  },
  {
    "q": "Can MGPS anodes be replaced while the ship is afloat?",
    "a": "Usually no, as they are inside the flooded sea chest, though some specialized housings allow withdrawal through a gate valve",
    "opts": [
      "No, they must be replaced by submarines",
      "Yes, by emptying the ocean",
      "Usually no, as they are inside the flooded sea chest, though some specialized housings allow withdrawal through a gate valve",
      "Yes, easily from the main deck"
    ],
    "exp": "Most standard MGPS installations require the sea chest to be drained in dry dock to unbolt the massive anode flanges.",
    "cat": "MGPS",
    "id": "T19T_137"
  },
  {
    "q": "What happens to the MGPS system if the sea chest is painted completely, including the anode?",
    "a": "The paint acts as an insulator, blocking current flow; no copper ions are released, and the system fails to protect the pipes",
    "opts": [
      "The anode generates hydrogen",
      "The system works perfectly",
      "The paint dissolves instantly",
      "The paint acts as an insulator, blocking current flow; no copper ions are released, and the system fails to protect the pipes"
    ],
    "exp": "A common dry dock mistake. If the active surface of the copper is sealed with epoxy, the system registers an open circuit.",
    "cat": "MGPS",
    "id": "T19T_138"
  },
  {
    "q": "What environmental regulation makes MGPS superior to traditional chemical dosing (like chlorine)?",
    "a": "The 2 ppb copper output is highly localized and environmentally benign compared to dumping bulk toxic chemicals into the ocean",
    "opts": [
      "It requires no electricity",
      "It produces zero carbon emissions",
      "It runs on solar power",
      "The 2 ppb copper output is highly localized and environmentally benign compared to dumping bulk toxic chemicals into the ocean"
    ],
    "exp": "Electrolytic dosing is incredibly precise and safe for discharge, whereas bleach/chlorine dosing is heavily restricted by port states.",
    "cat": "MGPS",
    "id": "T19T_139"
  },
  {
    "q": "Does MGPS cause 'Stray Current Corrosion' on the external hull or jetties?",
    "a": "No, the extremely low voltage and fully enclosed internal circuit within the sea chest prevents external stray currents",
    "opts": [
      "Only in freshwater",
      "Yes, if the ship is made of aluminium",
      "Yes, it is worse than ICCP",
      "No, the extremely low voltage and fully enclosed internal circuit within the sea chest prevents external stray currents"
    ],
    "exp": "The circuit is complete within the span of a few inches inside the steel box. It poses no threat to external structures.",
    "cat": "MGPS",
    "id": "T19T_140"
  },
  {
    "q": "How does cold seawater (e.g., Arctic conditions) affect the required MGPS settings?",
    "a": "Bio-fouling is minimal in freezing water, so the ETO can reduce the current to save anode material",
    "opts": [
      "Cold water requires higher voltage",
      "The system must be turned to AC",
      "Current must be maxed out to stop freezing",
      "Bio-fouling is minimal in freezing water, so the ETO can reduce the current to save anode material"
    ],
    "exp": "Lower biological threat means lower biocidal demand, allowing the engineer to dial back the consumption rate.",
    "cat": "MGPS",
    "id": "T19T_141"
  },
  {
    "q": "What is the typical operating voltage seen on an MGPS panel during normal operation?",
    "a": "0.5 to 5 Volts DC",
    "opts": [
      "220 Volts AC",
      "24 Volts DC",
      "100 Volts DC",
      "0.5 to 5 Volts DC"
    ],
    "exp": "Because the anode is inches from the grounded sea chest wall, the resistance is tiny. Only a few volts are needed to push 2 amps.",
    "cat": "MGPS",
    "id": "T19T_142"
  },
  {
    "q": "If the MGPS panel reads 24V (maximum) but 0 Amps, what is the diagnosis?",
    "a": "The circuit is broken (anode depleted, cable snapped, or anode painted over)",
    "opts": [
      "The system is working perfectly",
      "The circuit is broken (anode depleted, cable snapped, or anode painted over)",
      "The water is too salty",
      "A dead short circuit"
    ],
    "exp": "The controller maxes out its voltage trying to force current through a broken path, but fails.",
    "cat": "MGPS",
    "id": "T19T_143"
  },
  {
    "q": "If the MGPS panel reads 0 Volts but 4 Amps, what is the diagnosis?",
    "a": "A short circuit (the anode is physically touching the steel sea chest casing)",
    "opts": [
      "A short circuit (the anode is physically touching the steel sea chest casing)",
      "Normal operation",
      "The controller is turned off",
      "The anode is depleted"
    ],
    "exp": "If the insulating flange breaks, the rod touches the hull. Zero resistance means zero voltage required to push current, but no ions enter the water.",
    "cat": "MGPS",
    "id": "T19T_144"
  },
  {
    "q": "Why is the continuous operation of MGPS critical for the ship's main engine?",
    "a": "If bio-fouling blocks the central seawater coolers, the main engine will overheat and trip, causing a dead ship",
    "opts": [
      "The engine uses copper as fuel",
      "It prevents rust on the outside of the engine",
      "If bio-fouling blocks the central seawater coolers, the main engine will overheat and trip, causing a dead ship",
      "It keeps the oil warm"
    ],
    "exp": "Mussels growing inside the titanium plates of a heat exchanger will completely destroy the ship's cooling capacity.",
    "cat": "MGPS",
    "id": "T19T_145"
  },
  {
    "q": "Are MGPS anodes ever installed directly in the main seawater piping instead of the sea chest?",
    "a": "Yes, in 'Strainer-mounted' systems where the sea chest is inaccessible, anodes are placed in the massive pipe strainers",
    "opts": [
      "Only on passenger ships",
      "No, this is physically impossible",
      "Yes, but they must be made of plastic",
      "Yes, in 'Strainer-mounted' systems where the sea chest is inaccessible, anodes are placed in the massive pipe strainers"
    ],
    "exp": "As long as they are upstream of the heat exchangers, strainer-mounted anodes work perfectly and are easier to replace.",
    "cat": "MGPS",
    "id": "T19T_146"
  },
  {
    "q": "What happens if a ship uses cupro-nickel (CuNi) seawater pipes instead of mild steel?",
    "a": "An Iron (Fe) anode is used instead of Aluminium to provide the anti-corrosive protective film",
    "opts": [
      "An Iron (Fe) anode is used instead of Aluminium to provide the anti-corrosive protective film",
      "The pipes must be painted inside",
      "The copper anode is doubled in size",
      "The MGPS is not needed"
    ],
    "exp": "CuNi pipes suffer from impingement attack. Iron ions form a tough ferrous film that protects the soft CuNi from erosion.",
    "cat": "MGPS",
    "id": "T19T_147"
  },
  {
    "q": "Can MGPS be tested in dry dock?",
    "a": "No, powering it without seawater causes severe overheating and destroys the controller/anodes",
    "opts": [
      "Yes, it works exactly the same in air",
      "No, powering it without seawater causes severe overheating and destroys the controller/anodes",
      "Yes, but only the aluminium ones",
      "Yes, by turning it to max"
    ],
    "exp": "Like ICCP, the system requires the seawater electrolyte to complete the circuit safely.",
    "cat": "MGPS",
    "id": "T19T_148"
  },
  {
    "q": "What routine ETO check is required for the MGPS?",
    "a": "Log the voltage and current daily, ensuring the current matches the number of active seawater pumps",
    "opts": [
      "Replacing the copper rods weekly",
      "Painting the anodes monthly",
      "Diving into the sea chest weekly",
      "Log the voltage and current daily, ensuring the current matches the number of active seawater pumps"
    ],
    "exp": "Simple daily parameter logging confirms the circuit is healthy and the consumption rate is on track.",
    "cat": "MGPS",
    "id": "T19T_149"
  },
  {
    "q": "What is the consequence of reversing the DC polarity on the MGPS connections?",
    "a": "The sea chest casing becomes the anode and dissolves, while the copper rod is protected",
    "opts": [
      "The sea chest casing becomes the anode and dissolves, while the copper rod is protected",
      "It works twice as well",
      "The controller immediately explodes",
      "The water turns to ice"
    ],
    "exp": "Disastrous wiring mistake. The ship's hull will melt away, and no biocide will be released.",
    "cat": "MGPS",
    "id": "T19T_150"
  },
  {
    "q": "What is the typical weight of a new copper MGPS anode for a large cargo ship?",
    "a": "30 to 100 kilograms",
    "opts": [
      "10 grams",
      "1 to 2 kilograms",
      "500 kilograms",
      "30 to 100 kilograms"
    ],
    "exp": "They are massive, heavy billets of solid metal designed to last 2.5 years of continuous melting.",
    "cat": "MGPS",
    "id": "T19T_151"
  },
  {
    "q": "What happens to the copper ions after they pass through the ship's cooling system?",
    "a": "They are discharged overboard and rapidly dilute to harmless, natural background levels in the open ocean",
    "opts": [
      "They form solid rocks in the bilge",
      "They are discharged overboard and rapidly dilute to harmless, natural background levels in the open ocean",
      "They are recovered by a filter",
      "They coat the propeller"
    ],
    "exp": "At 2 ppb, the discharge is environmentally compliant and disperses instantly in the wake.",
    "cat": "MGPS",
    "id": "T19T_152"
  },
  {
    "q": "What is the 'Kingstone Valve' in relation to MGPS?",
    "a": "It is the main sea inlet valve, usually located immediately after the sea chest where MGPS treated water first enters the ship",
    "opts": [
      "The main fuel valve",
      "A pressure relief valve",
      "The valve that controls the ICCP",
      "It is the main sea inlet valve, usually located immediately after the sea chest where MGPS treated water first enters the ship"
    ],
    "exp": "The treated water must pass through this massive valve, protecting it and everything downstream from barnacles.",
    "cat": "MGPS",
    "id": "T19T_153"
  },
  {
    "q": "If a ship operates primarily in freshwater rivers, is MGPS effective?",
    "a": "Freshwater has high electrical resistance and few marine organisms, so MGPS is largely ineffective and unnecessary",
    "opts": [
      "It causes the river to catch fire",
      "It runs normally but at 440V",
      "Freshwater has high electrical resistance and few marine organisms, so MGPS is largely ineffective and unnecessary",
      "It is 100 times more effective"
    ],
    "exp": "Freshwater lacks the salt ions needed for low-voltage electrolysis, but river water also doesn't grow marine barnacles.",
    "cat": "MGPS",
    "id": "T19T_154"
  },
  {
    "q": "What happens if the MGPS anodes are wired in series instead of parallel?",
    "a": "If one anode depletes completely and breaks the circuit, all anodes stop working",
    "opts": [
      "If one anode depletes completely and breaks the circuit, all anodes stop working",
      "They last twice as long",
      "The voltage requirement drops",
      "It produces double the copper"
    ],
    "exp": "They are always wired in parallel. If one rod melts away, the other sea chests continue receiving protection.",
    "cat": "MGPS",
    "id": "T19T_155"
  },
  {
    "q": "Why is a Bow Thruster considered a 'Heavy Consumer' on the ship's electrical grid?",
    "a": "It draws a massive amount of power (often 1000kW to 3000kW), requiring the Power Management System (PMS) to prepare the grid before starting",
    "opts": [
      "It draws a massive amount of power (often 1000kW to 3000kW), requiring the Power Management System (PMS) to prepare the grid before starting",
      "It operates on 24V DC",
      "It runs continuously during the entire voyage",
      "It weighs over 50 tons"
    ],
    "exp": "Starting a MW-scale motor causes massive voltage dips. The PMS must often start a standby generator just to handle the bow thruster.",
    "cat": "BowThruster",
    "id": "T19T_156"
  },
  {
    "q": "What is the primary function of the Heavy Consumer Interlock for a Bow Thruster?",
    "a": "It blocks the bridge start command, forces the PMS to start another generator, and only releases the interlock when sufficient spare MW capacity is online",
    "opts": [
      "It stops the main engine to save power",
      "It reduces the thruster pitch to zero permanently",
      "It blocks the bridge start command, forces the PMS to start another generator, and only releases the interlock when sufficient spare MW capacity is online",
      "It trips the galley power"
    ],
    "exp": "Pressing 'Start' sends a request. The PMS checks the spinning reserve, starts an engine if needed, syncs it, and then allows the BT breaker to close.",
    "cat": "BowThruster",
    "id": "T19T_157"
  },
  {
    "q": "What starting method is traditionally used for massive Bow Thruster induction motors to reduce the inrush current?",
    "a": "Star-Delta starting, Soft Starters, or VFDs",
    "opts": [
      "Capacitor start",
      "Battery inverter start",
      "Direct On Line (DOL)",
      "Star-Delta starting, Soft Starters, or VFDs"
    ],
    "exp": "DOL starting a 2000kW motor draws 6x full load current (12,000kW equivalent), instantly blacking out the ship. Reduced-voltage starting is mandatory.",
    "cat": "BowThruster",
    "id": "T19T_158"
  },
  {
    "q": "How does a Controllable Pitch Propeller (CPP) bow thruster operate?",
    "a": "The motor runs continuously at a constant speed, and thrust is varied by hydraulically twisting the propeller blades",
    "opts": [
      "The motor speed is varied using a VFD",
      "It uses compressed air to push water",
      "The motor spins forward and backward rapidly",
      "The motor runs continuously at a constant speed, and thrust is varied by hydraulically twisting the propeller blades"
    ],
    "exp": "CPP systems are mechanically complex but electrically simple. The massive motor only starts once (at 0 pitch), avoiding repeated heavy starting currents.",
    "cat": "BowThruster",
    "id": "T19T_159"
  },
  {
    "q": "How does a Fixed Pitch Propeller (FPP) bow thruster operate?",
    "a": "The blades are fixed; thrust direction and magnitude are controlled by a massive Variable Frequency Drive (VFD) changing motor speed and direction",
    "opts": [
      "It only operates at 100% thrust or zero",
      "The motor runs at constant speed and a gearbox shifts gears",
      "The blades are fixed; thrust direction and magnitude are controlled by a massive Variable Frequency Drive (VFD) changing motor speed and direction",
      "Thrust is controlled by opening and closing tunnel doors"
    ],
    "exp": "FPP uses modern power electronics (VFDs) to ramp the motor RPM up, down, and in reverse, eliminating the complex hydraulic pitch mechanics.",
    "cat": "BowThruster",
    "id": "T19T_160"
  },
  {
    "q": "What is the typical voltage supply for a large (2000kW+) bow thruster motor?",
    "a": "High Voltage (e.g., 3.3kV, 6.6kV, or 11kV)",
    "opts": [
      "24V DC",
      "High Voltage (e.g., 3.3kV, 6.6kV, or 11kV)",
      "220V AC",
      "440V AC"
    ],
    "exp": "At 440V, a 2000kW motor would draw over 3000 Amps, requiring unmanageably massive cables. High voltage drops the current to a manageable ~150 Amps.",
    "cat": "BowThruster",
    "id": "T19T_161"
  },
  {
    "q": "Why is there usually a strict 'Time Delay' or 'Starts-per-Hour limit' programmed into the Bow Thruster logic?",
    "a": "To prevent the stator windings from melting due to the massive I²R heat generated during repeated starting transients",
    "opts": [
      "To save fuel",
      "To prevent the ship from turning too fast",
      "To prevent the stator windings from melting due to the massive I²R heat generated during repeated starting transients",
      "To let the hydraulic oil cool down"
    ],
    "exp": "Large motors take a massive thermal beating during startup. The PLC enforces a cooldown lockout (e.g., max 3 starts per hour) to save the insulation.",
    "cat": "BowThruster",
    "id": "T19T_162"
  },
  {
    "q": "Where is the Bow Thruster electric motor typically located on a tanker?",
    "a": "In a dedicated Bow Thruster room located forward, separated from hazardous cargo zones",
    "opts": [
      "Inside the main engine room",
      "On the open deck",
      "In a dedicated Bow Thruster room located forward, separated from hazardous cargo zones",
      "Submerged underwater inside the tunnel"
    ],
    "exp": "The motor is massive and requires its own dry, ventilated, safe-area compartment directly above the transverse tunnel.",
    "cat": "BowThruster",
    "id": "T19T_163"
  },
  {
    "q": "What must be running before the Bow Thruster main motor is permitted to start?",
    "a": "The ventilation fans, lubricating oil pumps, and hydraulic power pack (for CPP)",
    "opts": [
      "The main propulsion engine",
      "The emergency generator",
      "The ventilation fans, lubricating oil pumps, and hydraulic power pack (for CPP)",
      "The cargo pumps"
    ],
    "exp": "The PLC interlocks require all auxiliary support systems to prove they are healthy (pressure/flow switches) before the main high-voltage breaker closes.",
    "cat": "BowThruster",
    "id": "T19T_164"
  },
  {
    "q": "What happens if the Bow Thruster room loses ventilation while the thruster is running at full load?",
    "a": "The ambient temperature skyrockets, stator winding PT100 sensors detect the heat, and the motor trips on High Temperature",
    "opts": [
      "The ship blacks out",
      "The room fills with explosive gas",
      "The thruster pitch locks at 100%",
      "The ambient temperature skyrockets, stator winding PT100 sensors detect the heat, and the motor trips on High Temperature"
    ],
    "exp": "A 2000kW motor dissipates 100kW of waste heat. Without massive forced ventilation, the room turns into an oven in minutes.",
    "cat": "BowThruster",
    "id": "T19T_165"
  },
  {
    "q": "What is the purpose of the Space Heater inside the Bow Thruster motor?",
    "a": "To keep the windings warm when stopped, preventing condensation from forming and destroying the high-voltage insulation",
    "opts": [
      "To prevent the hydraulic oil from freezing",
      "To pre-heat the bearings for smoother starts",
      "To warm the bow thruster room for the crew",
      "To keep the windings warm when stopped, preventing condensation from forming and destroying the high-voltage insulation"
    ],
    "exp": "The heater switches ON automatically when the motor breaker opens. Moisture is the number one killer of HV motor megger readings.",
    "cat": "BowThruster",
    "id": "T19T_166"
  },
  {
    "q": "How is a Bow Thruster motor typically Megger tested (Insulation Resistance test)?",
    "a": "Using a 1000V or 5000V Megger (depending on motor rating), measuring phase-to-earth with the space heater off",
    "opts": [
      "Using a 1000V or 5000V Megger (depending on motor rating), measuring phase-to-earth with the space heater off",
      "Using a 24V multimeter",
      "By shorting the phases together",
      "It is never meggered because it is underwater"
    ],
    "exp": "High voltage motors require high voltage meggers. Readings must strictly be above the minimum threshold (e.g., > 100 MΩ for a 6.6kV motor) before starting.",
    "cat": "BowThruster",
    "id": "T19T_167"
  },
  {
    "q": "What happens during a 'Zero Pitch Interlock' on a CPP bow thruster?",
    "a": "The main motor ACB is physically prevented from closing unless the propeller blades are proven to be at exactly 0% pitch (neutral)",
    "opts": [
      "The ship must be completely stopped",
      "The main motor ACB is physically prevented from closing unless the propeller blades are proven to be at exactly 0% pitch (neutral)",
      "The steering gear must be locked straight",
      "The thruster automatically goes to 100% pitch"
    ],
    "exp": "Starting the motor with pitch applied means starting against a massive wall of water (huge torque load), which would draw catastrophic overcurrent.",
    "cat": "BowThruster",
    "id": "T19T_168"
  },
  {
    "q": "What is the function of the 'Gravity Header Tank' in the bow thruster room?",
    "a": "To maintain a static head of lubricating oil higher than the external sea pressure, ensuring oil leaks OUT rather than seawater leaking IN if the shaft seal fails",
    "opts": [
      "To maintain a static head of lubricating oil higher than the external sea pressure, ensuring oil leaks OUT rather than seawater leaking IN if the shaft seal fails",
      "To provide hydraulic power for pitch",
      "To cool the stator windings",
      "To store fuel for the thruster"
    ],
    "exp": "A low-level alarm on this small tank is the first warning that the underwater propeller seals have ruptured.",
    "cat": "BowThruster",
    "id": "T19T_169"
  },
  {
    "q": "Why is the Bow Thruster control automatically disabled when the ship exceeds a certain speed (e.g., 5-7 knots)?",
    "a": "Hydrodynamic forces wash the water past the tunnel opening, making the thruster physically useless and prone to cavitation damage at high speeds",
    "opts": [
      "To save electricity",
      "To prevent the ship from rolling over",
      "Because the main engine needs all the power",
      "Hydrodynamic forces wash the water past the tunnel opening, making the thruster physically useless and prone to cavitation damage at high speeds"
    ],
    "exp": "A speed interlock from the GPS/Log cuts the command. Transverse thrust only works when the hull is nearly stationary in the water.",
    "cat": "BowThruster",
    "id": "T19T_170"
  },
  {
    "q": "What does a 'Load Shedding Trip' mean for a Bow Thruster?",
    "a": "If the ship's generators hit a critical overload, the PMS instantly kills the Bow Thruster breaker to save the ship from a total blackout",
    "opts": [
      "If the ship's generators hit a critical overload, the PMS instantly kills the Bow Thruster breaker to save the ship from a total blackout",
      "The thruster sheds its blades",
      "The thruster drops to 50% speed",
      "The thruster runs on emergency power"
    ],
    "exp": "As a massive consumer, sacrificing the thruster is the fastest way to save the struggling power grid.",
    "cat": "BowThruster",
    "id": "T19T_171"
  },
  {
    "q": "How is the bridge command (joystick) transmitted to the Bow Thruster room?",
    "a": "Via a 4-20mA analog signal, or a digital fieldbus network (like CAN or Profibus), linking the bridge PLC to the thruster PLC",
    "opts": [
      "Via pneumatic air lines",
      "Via a 4-20mA analog signal, or a digital fieldbus network (like CAN or Profibus), linking the bridge PLC to the thruster PLC",
      "Via massive high-voltage cables",
      "Via a steel mechanical cable"
    ],
    "exp": "Modern ships use a simple data cable. The bridge moves the stick, the PLC calculates the requested %, and the thruster hydraulic valves react.",
    "cat": "BowThruster",
    "id": "T19T_172"
  },
  {
    "q": "What happens if the control signal wire between the bridge and the bow thruster breaks?",
    "a": "The PLC detects the signal loss (e.g., drops below 4mA) and fails-safe to Zero Pitch (0%), stopping thrust immediately",
    "opts": [
      "The ship spins in circles",
      "The motor catches fire",
      "The PLC detects the signal loss (e.g., drops below 4mA) and fails-safe to Zero Pitch (0%), stopping thrust immediately",
      "The thruster jams at 100% pitch"
    ],
    "exp": "A broken wire means 0mA. The 'live zero' 4-20mA loop recognises this as a fault, triggering a 'Control Loop Fail' alarm and neutralizing the prop.",
    "cat": "BowThruster",
    "id": "T19T_173"
  },
  {
    "q": "What is the typical sequence to transfer control from Local to Bridge?",
    "a": "The Local panel must be switched to 'Remote', and the Bridge must acknowledge and 'Take Control' via a push button",
    "opts": [
      "The Local panel must be switched to 'Remote', and the Bridge must acknowledge and 'Take Control' via a push button",
      "The captain yells down the radio",
      "The steering gear must be turned on",
      "The power must be cycled off and on"
    ],
    "exp": "Command transfer is strict to prevent two stations fighting for control of the massive vessel movement.",
    "cat": "BowThruster",
    "id": "T19T_174"
  },
  {
    "q": "What is the purpose of the 'Emergency Stop' button for the Bow Thruster on the bridge wing?",
    "a": "It hard-wires directly to the Under-Voltage Trip (UVT) or Shunt Trip of the main High Voltage breaker, instantly killing power to the motor",
    "opts": [
      "It turns off the bridge lights",
      "It slowly ramps down the VFD",
      "It hard-wires directly to the Under-Voltage Trip (UVT) or Shunt Trip of the main High Voltage breaker, instantly killing power to the motor",
      "It drops the anchor"
    ],
    "exp": "In a crisis (e.g., thruster stuck at 100% pushing the ship into a pier), hitting the E-stop bypasses all computers and physically rips the main breaker open.",
    "cat": "BowThruster",
    "id": "T19T_175"
  },
  {
    "q": "Why are Bow Thruster motors generally NOT certified as Ex (Explosion Proof)?",
    "a": "The bow thruster room is designed as a Safe Area with positive pressure ventilation; the equipment does not need to be Ex rated",
    "opts": [
      "Because Ex motors are illegal on tankers",
      "Because the voltage is too high",
      "Because they are underwater",
      "The bow thruster room is designed as a Safe Area with positive pressure ventilation; the equipment does not need to be Ex rated"
    ],
    "exp": "Making a 3000kW motor flameproof is almost physically impossible. The room itself is kept safe from tanker deck gas via high-powered supply fans.",
    "cat": "BowThruster",
    "id": "T19T_176"
  },
  {
    "q": "What is the function of the 'Overload' alarm on a Bow Thruster?",
    "a": "It warns the bridge that motor current is nearing the thermal trip limit, prompting the operator to reduce pitch before a total shutdown occurs",
    "opts": [
      "It starts the fire pumps",
      "It indicates the ship is too heavy",
      "It warns the bridge that motor current is nearing the thermal trip limit, prompting the operator to reduce pitch before a total shutdown occurs",
      "It means the voltage is too high"
    ],
    "exp": "The thermal relay gives an advance warning. If the captain backs off the joystick from 100% to 80%, the current drops and a blackout is avoided.",
    "cat": "BowThruster",
    "id": "T19T_177"
  },
  {
    "q": "What typically causes a Bow Thruster motor to draw excessively high current while running?",
    "a": "Applying 100% pitch too rapidly, or a fouled propeller (rope/nets caught in the tunnel)",
    "opts": [
      "Low seawater temperature",
      "Applying 100% pitch too rapidly, or a fouled propeller (rope/nets caught in the tunnel)",
      "High voltage from the MSB",
      "A broken space heater"
    ],
    "exp": "A jammed or heavily loaded prop forces the induction motor to slip, causing a massive surge in stator current.",
    "cat": "BowThruster",
    "id": "T19T_178"
  },
  {
    "q": "What maintenance is required on the slip rings inside a massive synchronous Bow Thruster motor?",
    "a": "Checking brush wear, ensuring adequate spring tension, and cleaning carbon dust to prevent tracking shorts",
    "opts": [
      "Lubricating them with heavy grease",
      "Checking brush wear, ensuring adequate spring tension, and cleaning carbon dust to prevent tracking shorts",
      "Painting them with epoxy",
      "Submerging them in fresh water"
    ],
    "exp": "If the motor uses a wound rotor (synchronous type), the slip rings transfer DC excitation. Worn brushes cause sparking and loss of torque.",
    "cat": "BowThruster",
    "id": "T19T_179"
  },
  {
    "q": "What is a 'Soft Starter' when used for a Bow Thruster?",
    "a": "A solid-state controller using Thyristors (SCRs) to gradually increase voltage to the motor during startup, limiting the massive inrush current",
    "opts": [
      "A solid-state controller using Thyristors (SCRs) to gradually increase voltage to the motor during startup, limiting the massive inrush current",
      "A small pilot motor that spins the big one",
      "A rubber coupling on the shaft",
      "A software program on the bridge"
    ],
    "exp": "The soft starter chops the AC wave, feeding it to the motor gently. Once at full speed, a bypass contactor closes to run the motor directly from the grid.",
    "cat": "BowThruster",
    "id": "T19T_180"
  },
  {
    "q": "Why is there an isolation transformer feeding the Bow Thruster VFD?",
    "a": "To step down/match voltage and block severe high-frequency harmonic distortion generated by the VFD from polluting the ship's main grid",
    "opts": [
      "To increase the speed of the motor",
      "To provide 24V for the lights",
      "To step down/match voltage and block severe high-frequency harmonic distortion generated by the VFD from polluting the ship's main grid",
      "To convert AC to DC"
    ],
    "exp": "Massive VFDs chop power violently. The heavy iron core of the phase-shifting transformer smooths out these jagged electrical waves.",
    "cat": "BowThruster",
    "id": "T19T_181"
  },
  {
    "q": "What happens during a 'Crash Astern' test involving the Bow Thruster?",
    "a": "Nothing directly; the Bow Thruster is not designed for longitudinal stopping, it only provides transverse (sideways) thrust",
    "opts": [
      "The thruster spins backward at max speed",
      "The blades flatten out",
      "Nothing directly; the Bow Thruster is not designed for longitudinal stopping, it only provides transverse (sideways) thrust",
      "It drops into the water like an anchor"
    ],
    "exp": "Bow thrusters are purely for port manoeuvring. The main engine handles all forward/astern braking.",
    "cat": "BowThruster",
    "id": "T19T_182"
  },
  {
    "q": "What is the consequence of frequent, short-duration jogging of the Bow Thruster joystick?",
    "a": "It forces the hydraulic pitch pumps to work continuously and violently, leading to hydraulic overheating and accelerated mechanical wear",
    "opts": [
      "It confuses the ship's radar",
      "It forces the hydraulic pitch pumps to work continuously and violently, leading to hydraulic overheating and accelerated mechanical wear",
      "It saves electricity",
      "It keeps the electrical motor cool"
    ],
    "exp": "Smooth, steady commands are required. Jerking the stick 0-100-0-100 beats the massive hydraulic servos to death.",
    "cat": "BowThruster",
    "id": "T19T_183"
  },
  {
    "q": "If the Bow Thruster is running smoothly, but the ship is not moving sideways, what is the most likely mechanical/electrical fault?",
    "a": "The hydraulic pitch mechanism has failed or the 4-20mA control signal is lost, leaving the blades stuck at 0% pitch",
    "opts": [
      "The hydraulic pitch mechanism has failed or the 4-20mA control signal is lost, leaving the blades stuck at 0% pitch",
      "The high-voltage breaker is open",
      "The main motor has burned out",
      "The water is too deep"
    ],
    "exp": "If the motor is roaring and drawing low steady current, but no thrust occurs, the blades haven't twisted. The problem is in the pitch servos or PLC command.",
    "cat": "BowThruster",
    "id": "T19T_184"
  },
  {
    "q": "Why are Bow Thruster tunnels often fitted with gratings?",
    "a": "To physically block large debris, ice, or mooring ropes from being sucked into the massive spinning propeller blades",
    "opts": [
      "To stop fish from entering",
      "To physically block large debris, ice, or mooring ropes from being sucked into the massive spinning propeller blades",
      "To increase the speed of the water",
      "To act as ICCP anodes"
    ],
    "exp": "A large rope wrapping around the shaft will instantly destroy the underwater seals, flooding the gear casing with seawater.",
    "cat": "BowThruster",
    "id": "T19T_185"
  },
  {
    "q": "What is the primary operational purpose of an Explosimeter (Combustible Gas Indicator) onboard a vessel?",
    "a": "To detect flammable gases below the Lower Explosive Limit (LEL) for pre-entry safety checks of enclosed spaces",
    "opts": [
      "To detect toxic H2S gas leaks in the engine room bilges",
      "To measure the amount of oxygen present in a ballast tank to prevent corrosion",
      "To detect flammable gases below the Lower Explosive Limit (LEL) for pre-entry safety checks of enclosed spaces",
      "To measure the exact volume percentage of hydrocarbon gas inside a fully inerted cargo tank"
    ],
    "exp": "An explosimeter is designed strictly to warn personnel before a gas concentration reaches explosive levels. It measures from 0–100% LEL and is used to verify an enclosed space is safe (<20% LEL) before crew entry.",
    "cat": "GAS",
    "id": "T14B_111"
  },
  {
    "q": "What is the critical environmental limitation of a standard Explosimeter (Pellistor type) that an ETO must be aware of?",
    "a": "It requires oxygen to function; it will give dangerously false zero readings in an inerted or oxygen-deficient atmosphere",
    "opts": [
      "It cannot operate in temperatures above 30°C",
      "It only works in total darkness and must be shielded from sunlight",
      "It requires oxygen to function; it will give dangerously false zero readings in an inerted or oxygen-deficient atmosphere",
      "It is blinded by high humidity and will constantly alarm in rain"
    ],
    "exp": "A pellistor sensor burns the flammable gas catalytically to detect it. Without sufficient atmospheric oxygen (like inside an inerted cargo tank), the gas cannot burn, and the meter will falsely indicate that no flammable gas is present.",
    "cat": "GAS",
    "id": "T14B_112"
  },
  {
    "q": "What is the internal sensing element of an Explosimeter called, and how does it basically function?",
    "a": "A Pellistor (catalytic bead) arranged in a Wheatstone bridge; flammable gas burns on the heated catalyst, raising its temperature and electrical resistance",
    "opts": [
      "A Pellistor (catalytic bead) arranged in a Wheatstone bridge; flammable gas burns on the heated catalyst, raising its temperature and electrical resistance",
      "An NDIR sensor; it shoots infrared light through the gas and measures absorption",
      "A Piezoelectric crystal; gas pressure alters the resonant frequency of the crystal",
      "A Galvanic cell; gas diffuses through a membrane and creates a micro-current"
    ],
    "exp": "The active pellistor is coated with a catalyst (like palladium) and heated to ~500°C. When flammable gas touches it, the gas oxidizes (burns), generating heat. This heat increases the resistance of the platinum wire inside, unbalancing the Wheatstone bridge to give a reading.",
    "cat": "GAS",
    "id": "T14B_113"
  },
  {
    "q": "Why does the Wheatstone bridge circuit in a Pellistor explosimeter include a 'Reference' element alongside the 'Active' element?",
    "a": "The reference element lacks the catalyst coating and is used purely to compensate for changes in ambient air temperature and humidity",
    "opts": [
      "The reference element lacks the catalyst coating and is used purely to compensate for changes in ambient air temperature and humidity",
      "The reference element burns a known calibration gas continuously for comparison",
      "The reference element measures oxygen content simultaneously",
      "The reference element provides the 24V power supply to the bridge"
    ],
    "exp": "If the ambient temperature drops, the active bead will cool down, falsely lowering the resistance. The reference bead (which does not react to gas) cools down by the exact same amount, keeping the bridge perfectly balanced against environmental changes.",
    "cat": "GAS",
    "id": "T14B_114"
  },
  {
    "q": "At what levels are the alarms typically set on a standard marine Explosimeter used for enclosed space entry?",
    "a": "A warning alarm at 10–20% LEL, and a danger/evacuation alarm at 20–30% LEL",
    "opts": [
      "A warning alarm at 1% LEL, and a danger alarm at 5% LEL",
      "A warning alarm at 10–20% LEL, and a danger/evacuation alarm at 20–30% LEL",
      "A warning alarm at 50% LEL, and a danger alarm at 100% LEL",
      "A warning alarm at 80% Volume, and a danger alarm at 100% Volume"
    ],
    "exp": "Safety margins are strict. If a space reaches 100% LEL, it is explosive. Alarms are set very low (20-30% LEL) to give crew members ample time to evacuate the space before the atmosphere becomes genuinely hazardous.",
    "cat": "GAS",
    "id": "T14B_115"
  },
  {
    "q": "How does a 'Tankscope' fundamentally differ from an Explosimeter in its intended application?",
    "a": "A Tankscope is a comprehensive multi-gas analyzer designed to measure hydrocarbon volume safely in completely inerted (oxygen-deficient) cargo tanks",
    "opts": [
      "A Tankscope is strictly used for detecting fire inside the engine room",
      "A Tankscope is permanently fixed to the bulkhead, while an Explosimeter is portable",
      "A Tankscope is a comprehensive multi-gas analyzer designed to measure hydrocarbon volume safely in completely inerted (oxygen-deficient) cargo tanks",
      "A Tankscope is only used for measuring water depth, not gas"
    ],
    "exp": "While an explosimeter is for breathing-air pre-entry checks, a Tankscope is used to assess the deep atmosphere of cargo tanks during inerting and purging operations, where oxygen is deliberately removed and hydrocarbon levels are extremely high.",
    "cat": "GAS",
    "id": "T14B_116"
  },
  {
    "q": "What type of sensor does a Tankscope use to measure high concentrations of Hydrocarbon (HC) gas without requiring oxygen?",
    "a": "Non-Dispersive Infrared (NDIR) absorption sensor",
    "opts": [
      "Galvanic Fuel Cell",
      "Non-Dispersive Infrared (NDIR) absorption sensor",
      "Paramagnetic Oxygen Sensor",
      "Pellistor Catalytic Bead"
    ],
    "exp": "The NDIR sensor shines an infrared light through the gas sample. Hydrocarbon molecules absorb specific IR wavelengths. Because this is purely an optical measurement, it does not rely on burning the gas and functions perfectly in 0% oxygen atmospheres.",
    "cat": "GAS",
    "id": "T14B_117"
  },
  {
    "q": "How does an NDIR sensor in a Tankscope specifically distinguish LPG (Propane/Butane) from other gases?",
    "a": "It uses an optical filter that only allows infrared light at the specific absorption wavelength of C-H molecular bonds (approx. 3.4 µm) to reach the detector",
    "opts": [
      "It uses a chemical reactant that turns pink in the presence of LPG",
      "It measures the exact physical weight of the gas sample entering the chamber",
      "It chills the gas until it liquefies, then measures the liquid volume",
      "It uses an optical filter that only allows infrared light at the specific absorption wavelength of C-H molecular bonds (approx. 3.4 µm) to reach the detector"
    ],
    "exp": "Gases have unique 'optical fingerprints'. Propane and Butane absorb IR light heavily at the 3.4 micrometer wavelength. The sensor filters out all other light, so any drop in intensity at this specific wavelength confirms the exact concentration of HC gas.",
    "cat": "GAS",
    "id": "T14B_118"
  },
  {
    "q": "What technology is typically used inside a Tankscope to measure Oxygen (O2) concentration?",
    "a": "An Electrochemical (Galvanic) cell",
    "opts": [
      "An Electrochemical (Galvanic) cell",
      "A Bimetallic strip",
      "A Pellistor bead",
      "An NDIR optical sensor"
    ],
    "exp": "Oxygen diffuses through a permeable membrane into an electrolyte, reacting at a gold cathode and lead anode. This chemical reaction generates a tiny micro-current directly proportional to the amount of oxygen present in the sample.",
    "cat": "GAS",
    "id": "T14B_119"
  },
  {
    "q": "What are the standard alarm thresholds for an Oxygen sensor on a multi-gas meter prior to enclosed space entry?",
    "a": "Low alarm at < 19.5% (Oxygen Deficient) and High alarm at > 23.5% (Oxygen Enriched)",
    "opts": [
      "Low alarm at < 5% and High alarm at > 95%",
      "Low alarm at < 19.5% (Oxygen Deficient) and High alarm at > 23.5% (Oxygen Enriched)",
      "Low alarm at < 21% and High alarm at > 21%",
      "Low alarm at < 10% and High alarm at > 50%"
    ],
    "exp": "Normal atmospheric oxygen is 20.9%. Below 19.5% impairs human function and causes unconsciousness. Above 23.5% creates an extreme fire hazard where materials burn violently. (Note: marine rules often stipulate exactly 20.9% or minimum 20.0% for entry, but typical meter alarms sit around 19.5%).",
    "cat": "GAS",
    "id": "T14B_120"
  },
  {
    "q": "If an ETO is calibrating a Tankscope's NDIR hydrocarbon sensor, what type of gas is strictly required for the 'Span' calibration?",
    "a": "A certified cylinder of calibration gas with a known, precise concentration (e.g., 50% Vol Propane in Nitrogen)",
    "opts": [
      "100% pure Oxygen gas",
      "A certified cylinder of calibration gas with a known, precise concentration (e.g., 50% Vol Propane in Nitrogen)",
      "Pure, clean instrument air from the engine room",
      "Exhaust gas extracted directly from the main engine"
    ],
    "exp": "Span calibration adjusts the gain of the sensor. You must inject a lab-certified gas mixture with an exact known concentration so the electronics can be aligned to display that precise value.",
    "cat": "GAS",
    "id": "T14B_121"
  },
  {
    "q": "What is 'Catalyst Poisoning' in relation to Pellistor explosimeters?",
    "a": "Exposure to certain chemicals (like silicones, lead, or high sulfur) permanently destroys the catalytic coating on the bead, rendering it blind to flammable gas",
    "opts": [
      "Exposure to certain chemicals (like silicones, lead, or high sulfur) permanently destroys the catalytic coating on the bead, rendering it blind to flammable gas",
      "The battery leaking acid into the sensor chamber",
      "The sensor becoming dangerously radioactive after exposure to UV light",
      "The catalyst igniting the gas inside the meter and blowing it up"
    ],
    "exp": "Pellistors are sensitive. Traces of silicone (from WD-40 or sealants) or heavy sulfur can coat the active bead, preventing the catalytic combustion of the gas. The meter will read 0% LEL even in a fully explosive atmosphere. This is why regular bump testing is mandatory.",
    "cat": "GAS",
    "id": "T14B_122"
  },
  {
    "q": "What is a 'Bump Test' for a portable gas detector?",
    "a": "A brief exposure to a known concentration of test gas to verify that the sensors respond quickly and the alarms sound correctly, without performing a full calibration",
    "opts": [
      "Physically dropping the meter from 1 meter height to test its shock resistance",
      "A brief exposure to a known concentration of test gas to verify that the sensors respond quickly and the alarms sound correctly, without performing a full calibration",
      "Submerging the meter in water to test the IP68 rating",
      "Pressing the 'Test' button to illuminate all the pixels on the LCD screen"
    ],
    "exp": "A bump test proves the gas actually reaches the sensors (no blocked filters) and that the sensors are not 'poisoned' or dead. It is a mandatory pre-use functional check, distinct from a formal span calibration.",
    "cat": "GAS",
    "id": "T14B_123"
  },
  {
    "q": "Why must an ETO change the hydrophobic and dust filters on a portable gas detector regularly?",
    "a": "To prevent dust or water from blocking the gas sample from reaching the sensors, which would cause false zero readings",
    "opts": [
      "To ensure the LCD screen remains readable in bright sunlight",
      "To comply with MARPOL emission standards for portable electronics",
      "To prevent the internal battery from overheating",
      "To prevent dust or water from blocking the gas sample from reaching the sensors, which would cause false zero readings"
    ],
    "exp": "Gas detectors rely on diffusion or a tiny internal pump to draw air over the sensors. If the external PTFE/dust filters are clogged with oil or dirt, the ambient gas cannot enter the sensor chamber, and the device will falsely report safe conditions.",
    "cat": "GAS",
    "id": "T14B_124"
  },
  {
    "q": "Which two toxic gases are most commonly measured by the electrochemical sensors in a ship's 4-gas portable monitor?",
    "a": "Carbon Monoxide (CO) and Hydrogen Sulfide (H2S)",
    "opts": [
      "Carbon Dioxide (CO2) and Nitrogen (N2)",
      "Carbon Monoxide (CO) and Hydrogen Sulfide (H2S)",
      "Methane (CH4) and Butane (C4H10)",
      "Ozone (O3) and Argon (Ar)"
    ],
    "exp": "A standard '4-gas' meter for confined space entry measures Oxygen (O2), Flammables (LEL), Carbon Monoxide (CO - from exhaust/fire), and Hydrogen Sulfide (H2S - from rotting organic matter or crude oil).",
    "cat": "GAS",
    "id": "T14B_125"
  },
  {
    "q": "What happens to a pellistor explosimeter if it is exposed to a massive concentration of gas well ABOVE the 100% LEL mark (e.g., 80% Volume)?",
    "a": "The gas mixture becomes too rich to burn (lack of oxygen), causing the meter reading to spike initially and then drop falsely back towards zero",
    "opts": [
      "The gas mixture becomes too rich to burn (lack of oxygen), causing the meter reading to spike initially and then drop falsely back towards zero",
      "The meter detonates the gas, destroying the instrument",
      "The meter automatically switches to NDIR mode",
      "The sensor accurately displays 800% LEL"
    ],
    "exp": "This is a deadly phenomenon known as 'sensor flooding'. A pellistor needs oxygen. If plunged into pure gas, there is no oxygen for the catalytic burn. The needle may peg at 100% briefly, but then drop back to 0%, tricking the user into thinking the gas cleared.",
    "cat": "GAS",
    "id": "T14B_126"
  },
  {
    "q": "To prevent sensor flooding misinterpretations, modern explosimeters feature a 'Latched Over-Range Alarm'. What does this do?",
    "a": "If the reading hits 100% LEL, the display locks at maximum and alarms continuously, requiring the user to move to fresh air and manually reset the device",
    "opts": [
      "If the reading hits 100% LEL, the display locks at maximum and alarms continuously, requiring the user to move to fresh air and manually reset the device",
      "It automatically turns the device off to save the sensor",
      "It transmits an SOS signal via the ship's AIS",
      "It vents compressed air into the sensor to clear the gas"
    ],
    "exp": "Latching prevents the user from being fooled by the needle dropping back to zero in a 100% gas environment. Once the LEL limit is breached, the alarm stays on forcefully until reset in a known safe environment.",
    "cat": "GAS",
    "id": "T14B_127"
  },
  {
    "q": "What is the typical lifespan of an electrochemical Oxygen (O2) sensor inside a portable gas detector, and why?",
    "a": "Approximately 1 to 2 years; the sensor operates like a battery and continuously consumes its internal lead anode reacting with oxygen in the air",
    "opts": [
      "Approximately 10 years, as it uses solid-state lasers",
      "It never needs replacement unless physically crushed",
      "Approximately 1 to 2 years; the sensor operates like a battery and continuously consumes its internal lead anode reacting with oxygen in the air",
      "About 1 month, after which the acid electrolyte boils away"
    ],
    "exp": "O2 sensors are consumable galvanic cells. They are constantly 'on' because they are constantly exposed to 20.9% atmospheric oxygen. Eventually, the lead anode is completely oxidized, the output signal drops, and the sensor must be replaced and recalibrated.",
    "cat": "GAS",
    "id": "T14B_128"
  },
  {
    "q": "On an LPG carrier, fixed gas detection systems use sample lines to draw air from various spaces to a central panel. What is a critical maintenance task for the ETO on these sample lines?",
    "a": "Regularly blowing out the lines with compressed air to clear condensation and inspecting the inline flame arrestors/filters",
    "opts": [
      "Coating the inside of the lines with anti-static spray",
      "Replacing the stainless steel lines with copper tubing every drydock",
      "Regularly blowing out the lines with compressed air to clear condensation and inspecting the inline flame arrestors/filters",
      "Filling the lines with nitrogen to preserve the sensors"
    ],
    "exp": "Sample lines travel through different temperature zones, causing condensation (water) to build up. Water blocking the 6mm tube prevents gas from reaching the central sensor. The ETO must purge these lines and clear water traps/filters to ensure continuous monitoring.",
    "cat": "GAS",
    "id": "T14B_129"
  },
  {
    "q": "What component in a fixed gas sampling system prevents an internal sensor explosion from travelling back down the sample tube and igniting the cargo hold?",
    "a": "A Flame Arrestor",
    "opts": [
      "A Pneumatic Dashpot",
      "A Flame Arrestor",
      "A Non-Return Check Valve",
      "A Hydrophobic Filter"
    ],
    "exp": "A flame arrestor (often a sintered metal block) allows gas to flow but extinguishes any flame front by absorbing the heat of the combustion. It must be installed on sample lines passing between safe and hazardous areas.",
    "cat": "GAS",
    "id": "T14B_130"
  },
  {
    "q": "If a Tankscope is used to measure an inerted cargo tank and displays '3% Volume HC' and '2% Oxygen', is the tank safe to open for hot work?",
    "a": "Absolutely NOT; while the oxygen is too low to burn currently, the 3% Volume of HC represents a massive amount of fuel that will become highly explosive the moment fresh air (oxygen) is admitted",
    "opts": [
      "Yes, because the oxygen is below 8%, making fires impossible",
      "Absolutely NOT; while the oxygen is too low to burn currently, the 3% Volume of HC represents a massive amount of fuel that will become highly explosive the moment fresh air (oxygen) is admitted",
      "Yes, because 3% is well below the 100% threshold",
      "Yes, provided the crew wears breathing apparatus"
    ],
    "exp": "3% by VOLUME is vastly different from 3% LEL. For many hydrocarbon gases, 1% Volume equals 100% LEL. Therefore, 3% Volume is roughly 300% LEL. The moment the tank is opened and 21% oxygen rushes in, the mixture passes through the explosive range and poses a catastrophic risk.",
    "cat": "GAS",
    "id": "T14B_131"
  },
  {
    "q": "Why is Hydrogen Sulfide (H2S) considered particularly dangerous for marine crew, necessitating strict gas detector alarms?",
    "a": "It is highly toxic even at low PPM, and it causes 'olfactory fatigue', quickly deadening the sense of smell so victims falsely believe the gas has cleared",
    "opts": [
      "It floats near the ceiling, making it impossible to detect at ground level",
      "It is invisible to all electronic sensors and can only be detected by chemical tubes",
      "It is highly toxic even at low PPM, and it causes 'olfactory fatigue', quickly deadening the sense of smell so victims falsely believe the gas has cleared",
      "It reacts with seawater to form explosive hydrogen gas"
    ],
    "exp": "H2S smells like rotten eggs at low concentrations. However, at lethal concentrations, it paralyzes the olfactory nerves in seconds. The crew member stops smelling it, assumes they are safe, and then collapses. H2S alarms are set very low (e.g., 5-10 ppm).",
    "cat": "GAS",
    "id": "T14B_132"
  },
  {
    "q": "When preparing a portable multi-gas detector for a confined space entry, why is a 'Fresh Air Calibration' (Zeroing) performed?",
    "a": "To set the baseline for the sensors in a known clean environment; telling the meter that the current air contains 20.9% O2, 0% LEL, 0 ppm CO, and 0 ppm H2S",
    "opts": [
      "To purge the internal pump with compressed instrument air",
      "To recharge the battery fully before entry",
      "To set the baseline for the sensors in a known clean environment; telling the meter that the current air contains 20.9% O2, 0% LEL, 0 ppm CO, and 0 ppm H2S",
      "To automatically connect the device to the ship's Wi-Fi network"
    ],
    "exp": "Zeroing must only be done on the open deck in clean sea air. This aligns the sensors to their correct starting points. If you zero a meter inside a slightly contaminated engine room, it will subtract that contamination from its readings, giving false-low safety numbers later.",
    "cat": "GAS",
    "id": "T14B_133"
  },
  {
    "q": "What is the typical output signal format of fixed gas detection sensor heads installed in the pump room, feeding back to the central panel?",
    "a": "4-20 mA analog signal, where 4 mA represents 0% LEL and 20 mA represents 100% LEL",
    "opts": [
      "0-5 V DC analog signal",
      "Pulse Width Modulated (PWM) frequency signal",
      "Digital NMEA 0183 sentences",
      "4-20 mA analog signal, where 4 mA represents 0% LEL and 20 mA represents 100% LEL"
    ],
    "exp": "Like most marine industrial sensors, 4-20mA provides a robust signal over long distances (from the pump room to the CCR) and provides a 'live zero'. If the cable is severed, the panel reads 0 mA and triggers a 'Sensor Fault' rather than falsely reading 0% gas.",
    "cat": "GAS",
    "id": "T14B_134"
  },
  {
    "q": "During span calibration of an H2S sensor on a multi-gas meter, you apply 25 ppm H2S test gas, but the meter only reads 12 ppm. What is the correct ETO action?",
    "a": "Use the device's calibration menu to adjust the 'Span' gain so the display reads exactly 25 ppm; if it cannot reach 25 ppm, the sensor is exhausted and must be replaced",
    "opts": [
      "Continue using the meter but mentally multiply all future readings by 2",
      "Use the device's calibration menu to adjust the 'Span' gain so the display reads exactly 25 ppm; if it cannot reach 25 ppm, the sensor is exhausted and must be replaced",
      "Increase the flow rate of the gas cylinder until the meter reads 25 ppm",
      "Adjust the 'Zero' setting downward to compensate for the difference"
    ],
    "exp": "Electrochemical sensors lose sensitivity over time. Span calibration adjusts the internal software multiplier (gain) to match the degraded sensor output back to reality. Once the gain is maxed out and it still reads low, the sensor cell is dead and must be physically swapped.",
    "cat": "GAS",
    "id": "T14B_135"
  },
  {
    "q": "Why is a hand-aspirator or motorized pump attachment strictly required when checking the atmosphere of a deep tank prior to entry?",
    "a": "Because different gases layer at different heights due to their specific gravity (weight relative to air); the pump allows sampling of the absolute bottom, middle, and top without sending a human inside",
    "opts": [
      "Because the sensors require pressurized gas at 2 bar to function",
      "Because different gases layer at different heights due to their specific gravity (weight relative to air); the pump allows sampling of the absolute bottom, middle, and top without sending a human inside",
      "To prevent the meter from falling into the tank",
      "Because the pump filters out all water vapour from the sample"
    ],
    "exp": "H2S is heavier than air and pools at the bottom of the tank. Methane is lighter than air and gathers at the top. You cannot just hold a meter inside the hatch. You must drop a sampling hose to the floor and use a pump to draw the gas up to the meter.",
    "cat": "GAS",
    "id": "T14B_136"
  },
  {
    "q": "When replacing an electrochemical sensor cell in a portable gas detector, why must the new sensor be allowed to 'stabilize' for a certain period before calibration?",
    "a": "The new cell needs time to establish chemical equilibrium with the ambient air and the bias voltage applied by the detector's circuit",
    "opts": [
      "The new cell must warm up to 500°C to burn off manufacturing residues",
      "To allow the gold and lead electrodes to physically fuse together",
      "The new cell needs time to establish chemical equilibrium with the ambient air and the bias voltage applied by the detector's circuit",
      "The internal battery of the cell must charge up from the main device"
    ],
    "exp": "When a new galvanic or electrochemical cell is plugged into the PCB, the bias voltage disturbs its chemical state. It takes time (often 30 minutes to several hours, depending on the gas type) for the chemical reaction to stabilize into a flat baseline before it can be accurately zeroed and spanned.",
    "cat": "GAS",
    "id": "T14B_137"
  },
  {
    "q": "What does an 'Over-range' or 'OL' error specifically indicate on a Carbon Monoxide (CO) electrochemical sensor?",
    "a": "The gas concentration is so massively high that it has saturated the sensor's chemical capability, exceeding its maximum display limit (e.g., >1000 ppm)",
    "opts": [
      "The gas concentration is so massively high that it has saturated the sensor's chemical capability, exceeding its maximum display limit (e.g., >1000 ppm)",
      "The sensor's internal battery is dead",
      "The sensor is operating perfectly in optimal limits",
      "The calibration gas cylinder was empty during the last test"
    ],
    "exp": "Unlike Pellistors which can flood and drop to zero, electrochemical toxic sensors simply hit their absolute maximum chemical reaction rate and max out the display. The atmosphere is immediately lethal, and the sensor may require extended time in fresh air to 'recover' from the saturation.",
    "cat": "GAS",
    "id": "T14B_138"
  },
  {
    "q": "Why is it important to check the expiration date on a cylinder of calibration span gas?",
    "a": "Certain reactive gases (like H2S and CO) can degrade or react with the cylinder walls over time, reducing the actual concentration below the certified level and causing an inaccurate calibration",
    "opts": [
      "Because expired gas becomes highly toxic to the ETO during testing",
      "Because the pressure in the cylinder naturally increases over time, risking an explosion",
      "Certain reactive gases (like H2S and CO) can degrade or react with the cylinder walls over time, reducing the actual concentration below the certified level and causing an inaccurate calibration",
      "Because maritime law requires all steel cylinders to be melted down annually"
    ],
    "exp": "A cylinder might say '25 ppm H2S'. But H2S is reactive. Over 1-2 years, it binds to the aluminum or steel walls of the cylinder. A 3-year-old cylinder might actually only contain 15 ppm. If you use it to span a meter to 25, you are dangerously miscalibrating the device to be far less sensitive than it should be.",
    "cat": "GAS",
    "id": "T14B_139"
  },
  {
    "q": "In a fixed gas sampling system, what is the consequence of a leak in the sampling tubing running between the cargo hold and the central detector panel?",
    "a": "The pump will draw in fresh ambient air through the leak, diluting the cargo gas sample and causing a dangerously false low reading",
    "opts": [
      "The gas will travel back down the tube and ignite the cargo hold",
      "The pump will draw in fresh ambient air through the leak, diluting the cargo gas sample and causing a dangerously false low reading",
      "The fixed system will automatically switch to a wireless connection",
      "The leak will cause a high-pressure buildup and blow the sensor off the panel"
    ],
    "exp": "The vacuum pump at the central panel is sucking air. If there is a cracked tube in the passageway, it sucks fresh air from the passageway instead of explosive gas from the deep tank. Diluted samples lead to false safety. Tubing integrity checks are vital.",
    "cat": "GAS",
    "id": "T14B_140"
  }

]);

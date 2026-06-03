window.loadQuizzes("T20_Construction", [
  {
    "q": "Why is ICCP switched OFF before entering dry dock?",
    "a": "Without seawater electrolyte, energised anodes in air cause high-voltage arcing near flammable paint and solvents",
    "opts": ["Dry dock blocks crush anodes causing MSB short circuit", "ICCP drains emergency batteries while generators are off", "Reference electrodes shatter in dry air", "Without seawater electrolyte, energised anodes in air cause high-voltage arcing near flammable paint and solvents"],
    "exp": "ICCP requires seawater as ionic conductor. In dry dock without seawater, normal current flow impossible. High voltage at exposed anodes = arcing risk, especially near freshly applied hull paint and solvent fumes = serious fire hazard. Also: ICCP must be commissioned in MANUAL mode after flooding \u2014 verify reference potentials before switching to AUTO.",
    "cat": "DRYDOCK",
    "id": "T20C_001"
  },
  {
    "q": "Purpose of shaft earthing brush during drydock?",
    "a": "Provides <1 \u03a9 path (shaft to hull) preventing stray current arcing through bearing oil film \u2014 prevents bearing pitting",
    "opts": ["Measures exact propeller shaft RPM for tachometer", "Scrapes marine growth from intermediate shaft", "Acts as reference electrode for MGPS", "Provides <1 \u03a9 path (shaft to hull) preventing stray current arcing through bearing oil film \u2014 prevents bearing pitting"],
    "exp": "Shaft insulated from hull by bearing oil film. Stray currents (from propulsion systems, VFDs, or shore power) build up voltage on shaft and arc through oil film \u2192 bearing pitting and failure. Shaft earthing brush provides low-resistance metallic path bypassing oil film. Check wear at every survey \u2014 replace if below minimum length.",
    "cat": "DRYDOCK",
    "id": "T20C_002"
  },
  {
    "q": "Why must alternator anti-condensation heaters stay energised in drydock?",
    "a": "Maintains winding temperature 5-10\u00b0C above ambient \u2014 prevents moisture absorption and IR drop to dangerous levels",
    "opts": ["Bakes old varnish off copper windings before class survey", "Keeps bearing grease liquid for turning by hand", "Maintains AVR reference voltage to prevent loss of settings", "Maintains winding temperature 5-10\u00b0C above ambient \u2014 prevents moisture absorption and IR drop to dangerous levels"],
    "exp": "Cold idle alternator in humid engine room: moisture condenses on cool winding surfaces. Water absorption drastically reduces insulation resistance \u2192 possible winding faults when re-energised. Anti-condensation heaters keep windings slightly above dew point. Power from shore supply via ESB. Check heater continuity at every survey.",
    "cat": "DRYDOCK",
    "id": "T20C_003"
  },
  {
    "q": "In ship construction, what is a 'hogging' condition?",
    "a": "Hull arches upward in the middle \u2014 keel in compression, deck in tension (centre supported by wave crest, ends unsupported)",
    "opts": ["Ends supported by wave crests, centre sags \u2014 keel in tension (sagging)", "Ship lists heavily to one side from uneven cargo", "Ship's roll period matches wave frequency causing resonance", "Hull arches upward in the middle \u2014 keel in compression, deck in tension (centre supported by wave crest, ends unsupported)"],
    "exp": "Hogging = centre of ship supported by wave crest, bow and stern unsupported = hull bends upward like a bow. Keel = compression. Main deck = tension. Sagging (opposite) = centre between wave crests, unsupported = hull bends downward. Both are critical structural loading conditions.",
    "cat": "CONSTRUCTION",
    "id": "T20C_004"
  },
  {
    "q": "What does IEC motor frame number (e.g. 132) indicate to an ETO ordering a replacement?",
    "a": "Shaft centre height in mm \u2014 vertical distance from mounting feet to shaft centreline = 132 mm",
    "opts": ["Maximum safe insulation temperature = 132\u00b0C", "Rated motor output = 132 kW", "Overall motor casing length = 132 mm", "Shaft centre height in mm \u2014 vertical distance from mounting feet to shaft centreline = 132 mm"],
    "exp": "IEC frame number = shaft centre height in millimetres. Frame 132 = 132 mm from bottom of mounting feet to shaft centreline. Critical for direct-coupled pump replacements \u2014 wrong frame = misalignment = coupling failure + vibration + bearing damage. Also specifies bolt hole dimensions and spacing.",
    "cat": "CONSTRUCTION",
    "id": "T20C_005"
  },
  {
    "q": "What does the term 'hogging' describe in the context of a ship's structural stress?",
    "a": "The hull bends upward at the centre (arch shape) when the wave crest is amidships, putting the keel in compression and the deck in tension",
    "opts": ["The hull bends upward at the centre (arch shape) when the wave crest is amidships, putting the keel in compression and the deck in tension", "The hull twists diagonally due to asymmetric cargo loading causing torsional stress", "The hull bends downward at the centre (hammock shape) when the wave trough is amidships", "The hull expands longitudinally due to thermal heating in tropical waters"],
    "exp": "Hogging occurs when buoyancy is concentrated at the centre (wave crest amidships) but weight is at the ends. Keel is in compression, deck is in tension. Opposite of sagging.",
    "cat": "Structure",
    "id": "T20C_006"
  },
  {
    "q": "What does the term 'sagging' describe in the context of a ship's structural stress?",
    "a": "The hull bends downward at the centre (hammock shape) when the wave trough is amidships, putting the keel in tension and the deck in compression",
    "opts": ["The hull bends upward at the centre when the wave crest is amidships", "The hull bends downward at the centre (hammock shape) when the wave trough is amidships, putting the keel in tension and the deck in compression", "The hull flexes athwartship due to beam seas causing racking stress", "The hull sinks progressively at the stern due to heavy aft cargo loading"],
    "exp": "Sagging occurs when weight is concentrated amidships but buoyancy is at the ends (wave trough amidships). Keel is in tension, deck is in compression. The ship droops like a hammock.",
    "cat": "Structure",
    "id": "T20C_007"
  },
  {
    "q": "Where does the Bending Moment reach its absolute maximum value along the ship's length?",
    "a": "Exactly where the Shear Force curve crosses zero \u2014 typically near amidships",
    "opts": ["At every watertight bulkhead position, where structural discontinuities concentrate stress", "Exactly where the Shear Force curve crosses zero \u2014 typically near amidships", "At the stern, because the weight of the main engine creates the greatest moment arm", "At the bow, where the vessel first encounters wave pressure"],
    "exp": "By the mathematical relationship between shear force and bending moment, the maximum bending moment occurs precisely where the shear force is zero. This is typically near amidships for conventional cargo ships.",
    "cat": "Structure",
    "id": "T20C_008"
  },
  {
    "q": "What is the minimum metacentric height (GM) required for a loaded cargo ship under SOLAS stability criteria?",
    "a": "Minimum positive GM of 0.15 metres at all stages of loading and voyage",
    "opts": ["Minimum positive GM of 1.0 metre \u2014 one metre is the industry standard for all vessel types", "Minimum positive GM of 0.15 metres at all stages of loading and voyage", "GM must equal exactly zero for neutral stability \u2014 positive GM causes excessive rolling", "No minimum GM is specified by SOLAS \u2014 stability is governed by the loading computer only"],
    "exp": "SOLAS A.749 requires GM >= 0.15m for cargo ships. A positive GM creates a righting moment. Negative GM means G is above M \u2014 the ship is unstable and will capsize if heeled.",
    "cat": "Stability",
    "id": "T20C_009"
  },
  {
    "q": "What does the GZ righting lever represent in ship stability analysis?",
    "a": "The horizontal distance between the vertical lines of action of buoyancy and gravity at a given angle of heel \u2014 represents the ship's actual righting moment at that angle",
    "opts": ["The distance between the ship's neutral axis and the waterplane area", "The horizontal distance between the vertical lines of action of buoyancy and gravity at a given angle of heel \u2014 represents the ship's actual righting moment at that angle", "The distance from the keel to the centre of gravity, measuring load distribution", "The vertical height of the metacentre above the keel, measuring initial stability only"],
    "exp": "GZ is the righting lever that indicates actual stability across all heel angles. A positive GZ means the ship has a righting moment. The GZ curve shows stability reserves at large angles beyond the small-angle GM approximation.",
    "cat": "Stability",
    "id": "T20C_010"
  },
  {
    "q": "What minimum GZ righting lever value at 30 degrees heel is required under SOLAS A.749 stability criteria?",
    "a": "Minimum GZ of 0.20 metres at 30 degrees heel",
    "opts": ["Minimum GZ of 0.20 metres at 30 degrees heel", "GZ is not required to be positive at 30 degrees \u2014 only at 15 degrees", "Minimum GZ of 0.05 metres at 30 degrees heel", "Minimum GZ of 1.0 metre at 30 degrees heel"],
    "exp": "SOLAS A.749 requires: GZ >= 0.20m at 30 deg, angle of maximum GZ >= 25 deg, and righting lever area 0-30 deg >= 0.055 m.rad. These criteria apply to all loading conditions.",
    "cat": "Stability",
    "id": "T20C_011"
  },
  {
    "q": "What is the purpose of a watertight collision bulkhead and where is it positioned in the ship?",
    "a": "A transverse watertight bulkhead located 5-8% of ship length from the forward perpendicular to preserve hull integrity after a head-on collision by limiting forward compartment flooding",
    "opts": ["A retractable structural member that deploys automatically when the bow sonar detects an underwater obstruction", "A longitudinal bulkhead running the full length of the ship to prevent cargo from shifting and causing list", "A transverse watertight bulkhead located 5-8% of ship length from the forward perpendicular to preserve hull integrity after a head-on collision by limiting forward compartment flooding", "A special fire-resistant bulkhead at the engine room forward boundary to contain machinery space fires"],
    "exp": "SOLAS II-1 mandates the collision bulkhead at 5-8% ship length from the bow. Its purpose is to subdivide the foreship so flooding of the forepeak does not propagate to cargo holds.",
    "cat": "Structure",
    "id": "T20C_012"
  },
  {
    "q": "What are the fire integrity ratings of A-Class and B-Class fire bulkheads under SOLAS?",
    "a": "A-Class maintains structural integrity and limits temperature rise for 60 minutes (A-60) or 30 minutes (A-30); B-Class for 30 minutes (B-30) or 15 minutes (B-15)",
    "opts": ["A-Class is rated for 30 minutes; B-Class is rated for 60 minutes \u2014 the letters simply indicate the construction material used", "A-Class maintains structural integrity and limits temperature rise for 60 minutes (A-60) or 30 minutes (A-30); B-Class for 30 minutes (B-30) or 15 minutes (B-15)", "Both A-Class and B-Class provide indefinite fire resistance \u2014 the number indicates steel plate thickness in millimetres", "A-Class is for engine room boundaries only; B-Class is for accommodation spaces only"],
    "exp": "SOLAS II-2 A-Class bulkheads must prevent flame and smoke passage and limit temperature rise on the unexposed side for 60 minutes (A-60). B-Class provides 30 minutes. Numbers in parentheses denote the thermal insulation period.",
    "cat": "Structure",
    "id": "T20C_013"
  },
  {
    "q": "What information must appear on the CSC Safety Approval Plate fitted to every intermodal shipping container?",
    "a": "Country of approval, manufacturer, maximum gross weight, allowable stacking weight, and next examination date",
    "opts": ["Container serial number, shipping line name, port of origin, and customs seal number", "Volume in TEU, refrigeration temperature setting, and IMDG dangerous goods class rating", "Country of approval, manufacturer, maximum gross weight, allowable stacking weight, and next examination date", "Builder's name, steel grade specification, and last anti-corrosion treatment date"],
    "exp": "The CSC (Convention for Safe Containers) plate certifies structural integrity. It shows max gross weight, stacking load, racking test force, and next inspection date (first at 5 years, then every 30 months).",
    "cat": "Container",
    "id": "T20C_014"
  },
  {
    "q": "What are the required intervals for periodic re-examination of shipping containers under the CSC Convention?",
    "a": "First examination 5 years after manufacture, then every 30 months thereafter",
    "opts": ["First examination 5 years after manufacture, then every 30 months thereafter", "First examination 3 years after manufacture, then annually", "No mandatory examination \u2014 containers are replaced rather than inspected", "Single examination at 10 years, then every 5 years"],
    "exp": "CSC requires first re-exam at 5 years (or at the date stamped on the plate). Subsequent exams every 30 months. ETOs on container ships must verify CSC plate validity as part of cargo safety checks.",
    "cat": "Container",
    "id": "T20C_015"
  },
  {
    "q": "During drydocking, what is the purpose of measuring the ship's block coefficient (Cb) at various hull positions?",
    "a": "To determine the fullness of the hull form and calculate displacement, deadweight, and stability parameters for the vessel's loading manual",
    "opts": ["To estimate the amount of sacrificial anode zinc required for the next docking cycle", "To determine the fullness of the hull form and calculate displacement, deadweight, and stability parameters for the vessel's loading manual", "To measure the thickness of antifouling paint remaining on the hull prior to blasting", "To calculate the required electrical power for the dry dock's dehumidification system"],
    "exp": "The block coefficient Cb = displacement volume / (L x B x D). It quantifies hull form fullness and is fundamental to all hydrostatic calculations including displacement, stability curves, and trim calculations.",
    "cat": "Drydock",
    "id": "T20C_016"
  },
  {
    "q": "What is the primary purpose of anodes fitted to the ship's hull during drydocking?",
    "a": "Sacrificial anodes made of zinc or aluminium are fitted as a passive cathodic protection system \u2014 they corrode preferentially to protect the steel hull from electrolytic corrosion",
    "opts": ["Anodes are steel stiffening brackets welded to the hull to reinforce structural frame members at stress concentration points", "Anodes are electrical isolation pads that prevent shore power stray current from entering the hull plating", "Sacrificial anodes made of zinc or aluminium are fitted as a passive cathodic protection system \u2014 they corrode preferentially to protect the steel hull from electrolytic corrosion", "Anodes are non-structural aesthetic fairings that improve hull hydrodynamic efficiency by smoothing turbulent flow"],
    "exp": "In seawater, the steel hull is the cathode in a galvanic cell. Zinc or aluminium anodes act as a more reactive anode, sacrificing themselves by oxidizing preferentially. This prevents hull pitting and corrosion.",
    "cat": "Drydock",
    "id": "T20C_017"
  },
  {
    "q": "The Emergency Switchboard (ESB) must be capable of taking full emergency load within how many seconds of a main power failure under SOLAS?",
    "a": "45 seconds \u2014 the emergency generator must auto-start and connect to the ESB within 45 seconds",
    "opts": ["5 seconds \u2014 battery-backed UPS covers the immediate period, then generator connects", "45 seconds \u2014 the emergency generator must auto-start and connect to the ESB within 45 seconds", "10 minutes \u2014 the ESB is only required to take load after the manual blackout procedure is completed", "120 seconds \u2014 two minutes is the SOLAS standard for emergency power restoration"],
    "exp": "SOLAS II-1/43 requires the emergency source of power to be capable of being brought into service within 45 seconds of a main power failure. The emergency generator must auto-start and auto-connect.",
    "cat": "ESB",
    "id": "T20C_018"
  },
  {
    "q": "What minimum duration must the emergency generator fuel oil tank support continuous operation under SOLAS requirements?",
    "a": "18 hours of continuous operation at full emergency load",
    "opts": ["30 minutes \u2014 just long enough to restore the main generator", "8 hours \u2014 sufficient for one working day emergency response", "18 hours of continuous operation at full emergency load", "72 hours \u2014 three days for extended SAR or salvage operations"],
    "exp": "SOLAS II-1/44 requires the emergency generator fuel tank to support 18 hours of continuous emergency operation. This covers the time needed to safely navigate to port after a catastrophic main power failure.",
    "cat": "ESB",
    "id": "T20C_019"
  },
  {
    "q": "What electrical loads MUST be connected to the Emergency Switchboard under SOLAS Chapter II-1?",
    "a": "Navigation lights, steering gear, fire detection system, fire pumps, GMDSS, emergency lighting, bilge pumps, and watertight door controls",
    "opts": ["Main engine fuel injection system, turbocharger lubrication, and exhaust gas economiser", "Cargo refrigeration, ballast water treatment system, and satellite TV receivers", "Galley ovens, accommodation HVAC, and deck cranes to maintain crew comfort during an emergency", "Navigation lights, steering gear, fire detection system, fire pumps, GMDSS, emergency lighting, bilge pumps, and watertight door controls"],
    "exp": "SOLAS II-1/42 lists mandatory emergency loads including: navigation lights, VHF, GMDSS, steering gear, fire detection, sprinkler, fire pumps, emergency bilge pump, emergency lighting, and watertight door power.",
    "cat": "ESB",
    "id": "T20C_020"
  },
  {
    "q": "During a sequential start procedure for bringing a dead ship back to life, which system must be started FIRST after the emergency generator takes load?",
    "a": "Cooling seawater pumps \u2014 to enable the main engines and generators to be started without thermal damage",
    "opts": ["The air conditioning system \u2014 to cool the ECR before the engine room team begins the recovery sequence", "Cooling seawater pumps \u2014 to enable the main engines and generators to be started without thermal damage", "The main engine \u2014 it must be started immediately to provide propulsive power as quickly as possible", "The cargo pumps \u2014 to transfer ballast and restore the correct trim before main power restoration"],
    "exp": "The correct dead ship recovery sequence: Emergency gen \u2192 Cooling pumps \u2192 Lube oil pumps \u2192 Starting air compressors \u2192 Auxiliary boiler \u2192 Main generator \u2192 Main engine. Cooling must come first to protect engine bearings.",
    "cat": "ESB",
    "id": "T20C_021"
  },
  {
    "q": "What is the purpose of a double bottom tank on a ship, and what structural feature makes it different from a single-bottom ship?",
    "a": "The double bottom creates a watertight inner bottom above the keel, providing flooding protection if the outer shell is holed \u2014 and serves as a tank for ballast water, fuel oil, or fresh water",
    "opts": ["The double bottom is a decorative structural feature that adds stiffness without serving any functional watertight purpose", "The double bottom creates a watertight inner bottom above the keel, providing flooding protection if the outer shell is holed \u2014 and serves as a tank for ballast water, fuel oil, or fresh water", "The double bottom refers to two layers of antifouling paint applied in drydock for extended hull protection", "The double bottom spaces are always kept empty and inerted with nitrogen to reduce corrosion of the outer hull plating"],
    "exp": "The double bottom extends from the keel to the inner bottom plating, forming watertight cellular compartments. SOLAS requires double bottoms for cargo ships over 50m. The spaces serve dual purpose: structural integrity and tank capacity.",
    "cat": "Structure",
    "id": "T20C_022"
  },
  {
    "q": "What does the Plimsoll load line mark (freeboard mark) indicate, and what does the alphabet suffix on each line mean?",
    "a": "The maximum legal depth to which the ship may be loaded in specified sea conditions \u2014 TF (tropical fresh), F (fresh), T (tropical salt), S (summer salt), W (winter salt), WNA (winter North Atlantic)",
    "opts": ["The minimum depth of keel below the waterline required to prevent propeller cavitation in shallow water", "The maximum legal depth to which the ship may be loaded in specified sea conditions \u2014 TF (tropical fresh), F (fresh), T (tropical salt), S (summer salt), W (winter salt), WNA (winter North Atlantic)", "The load line indicates the maximum cargo weight in TEUs that may be carried on the upper deck", "The Plimsoll mark shows the height of the waterline above the engine room bilge suction \u2014 used for bilge pumping calculations"],
    "exp": "The Plimsoll mark (freeboard mark) shows how deep the ship may be loaded in different seasons and sea areas. Different water densities and wave heights require different freeboards for structural safety.",
    "cat": "Structure",
    "id": "T20C_023"
  },
  {
    "q": "What test must the steering gear pass before a vessel sails, according to SOLAS Chapter V/26?",
    "a": "The steering gear must put the rudder hard over to 35 degrees on each side and the telemotor and emergency steering must be tested",
    "opts": ["A 24-hour continuous running test of the autopilot must be completed in port before departure", "The steering gear oil level must be checked and the filter changed as per PMS schedule", "The steering gear alarm system must be functionally tested from the bridge and ECR simultaneously", "The steering gear must put the rudder hard over to 35 degrees on each side and the telemotor and emergency steering must be tested"],
    "exp": "SOLAS V/26 requires pre-departure steering gear test: move rudder from 35 deg one side to 30 deg the other side. Verify telemotor response, emergency steering, rudder angle indicators, and communication between bridge and steering gear room.",
    "cat": "Structure",
    "id": "T20C_024"
  },
  {
    "q": "What is the purpose of bilge keel fins welded to the bilge radius of a ship's hull?",
    "a": "Passive anti-rolling devices \u2014 they extend transversely from the hull bilge radius and increase hydrodynamic damping resistance to rolling motion without requiring any power",
    "opts": ["Structural reinforcement strips that stiffen the hull turn of bilge against hydrostatic pressure in loaded condition", "Passive anti-rolling devices \u2014 they extend transversely from the hull bilge radius and increase hydrodynamic damping resistance to rolling motion without requiring any power", "Cathodic protection anodes permanently welded in place of the removable sacrificial anodes to reduce drydock intervals", "Longitudinal strengthening members required by classification societies for tankers carrying heavy fuel cargoes"],
    "exp": "Bilge keels are passive anti-rolling fins running 25-40% of the ship's length along the bilge radius. Their bluff shape creates eddy resistance when the ship rolls, reducing roll amplitude by 35-45% compared to a bare hull.",
    "cat": "Structure",
    "id": "T20C_025"
  },
  {
    "q": "What is the structural condition known as 'Hogging' on a ship?",
    "a": "A bending state where the ship's hull arches upward in the middle; the main deck is in tension, and the keel is in compression",
    "opts": ["A bending state where the ship's hull arches upward in the middle; the main deck is in tension, and the keel is in compression", "A localized stress caused by dropping heavy cargo on the deck", "A twisting state caused by diagonal waves striking the bow", "A bending state where the ship sags downward in the middle; the main deck is in compression, and the keel is in tension"],
    "exp": "Imagine a ship supported by a single massive wave directly amidships, with the bow and stern hanging in the air. The ship bends over the wave like a bridge arch (Hogging). This pulls the deck apart (tension) and crushes the bottom (compression).",
    "cat": "CONSTRUCTION",
    "id": "T20C_026"
  },
  {
    "q": "What is the structural condition known as 'Sagging' on a ship?",
    "a": "A bending state where the ship droops downward in the middle; the main deck is in compression, and the keel is in tension",
    "opts": ["A bending state where the ship's hull arches upward in the middle; the main deck is in tension, and the keel is in compression", "The physical denting of the hull plates due to slamming into waves", "A bending state where the ship droops downward in the middle; the main deck is in compression, and the keel is in tension", "The leaning of the ship to one side due to wind"],
    "exp": "Imagine a ship supported by two waves at the bow and stern, with the middle hanging in the trough. The ship sags like a hammock. The deck is squeezed together (compression) and the keel is pulled apart (tension).",
    "cat": "CONSTRUCTION",
    "id": "T20C_027"
  },
  {
    "q": "Which cargo loading scenario artificially induces a 'Hogging' stress on the vessel?",
    "a": "Loading heavy cargo exclusively in the extreme forward and aft holds, while leaving the midship holds completely empty",
    "opts": ["Loading heavy cargo exclusively in the midship holds, while leaving the ends empty", "Loading heavy cargo exclusively in the extreme forward and aft holds, while leaving the midship holds completely empty", "Loading cargo entirely on the port side of the vessel", "Distributing the cargo perfectly evenly across all holds"],
    "exp": "Heavy weight at the ends pulls the bow and stern down, causing the middle to arch upward, artificially creating a hogging bending moment even in calm water.",
    "cat": "CONSTRUCTION",
    "id": "T20C_028"
  },
  {
    "q": "Which cargo loading scenario artificially induces a 'Sagging' stress on the vessel?",
    "a": "Loading heavy cargo exclusively in the midship holds, while leaving the forward and aft holds completely empty",
    "opts": ["Loading heavy cargo exclusively in the extreme forward and aft holds", "Loading cargo only on the upper decks", "Loading heavy cargo exclusively in the midship holds, while leaving the forward and aft holds completely empty", "Pumping all the ballast water overboard"],
    "exp": "Heavy weight concentrated in the middle of the ship pushes the center down relative to the buoyant ends, making the ship sag like a hammock.",
    "cat": "CONSTRUCTION",
    "id": "T20C_029"
  },
  {
    "q": "What is 'Shear Force' in the context of ship construction?",
    "a": "The vertical sliding force that occurs when two adjacent sections of the ship's hull experience different upward buoyancy or downward weight forces, trying to slice the hull vertically",
    "opts": ["The force of the wind pushing the superstructure sideways", "The horizontal crushing force of ice against the bow", "The twisting force caused by quartering seas", "The vertical sliding force that occurs when two adjacent sections of the ship's hull experience different upward buoyancy or downward weight forces, trying to slice the hull vertically"],
    "exp": "If Hold 1 is full of heavy iron ore and Hold 2 is completely empty, Hold 1 wants to sink and Hold 2 wants to float. The bulkhead between them experiences massive vertical 'shear' stress, like a pair of scissors trying to cut the ship.",
    "cat": "CONSTRUCTION",
    "id": "T20C_030"
  },
  {
    "q": "Where along the length of the ship is the Shear Force typically at its absolute MAXIMUM?",
    "a": "At the transverse bulkheads separating empty holds from loaded holds",
    "opts": ["Exactly amidships", "At the top of the radar mast", "At the transverse bulkheads separating empty holds from loaded holds", "At the very tip of the bow"],
    "exp": "Shear force peaks wherever there is a sudden, drastic change in weight distribution. This typically occurs precisely at the bulkheads dividing a heavily loaded cargo hold from an empty one.",
    "cat": "CONSTRUCTION",
    "id": "T20C_031"
  },
  {
    "q": "Where along the length of the ship is the longitudinal Bending Moment (Hogging/Sagging) typically at its absolute MAXIMUM?",
    "a": "Exactly amidships (the middle of the ship)",
    "opts": ["At the stern frame", "At the transverse bulkheads", "At the collision bulkhead", "Exactly amidships (the middle of the ship)"],
    "exp": "Just like a wooden plank supported at the ends, the maximum bending stress (the point where it is most likely to snap) occurs right in the middle.",
    "cat": "CONSTRUCTION",
    "id": "T20C_032"
  },
  {
    "q": "What is a 'Duct Keel'?",
    "a": "A hollow, box-like internal keel running longitudinally along the ship's bottom, providing massive structural strength and acting as a tunnel for routing ballast and cargo pipes",
    "opts": ["A fin attached to the side of the ship to reduce rolling", "A hollow, box-like internal keel running longitudinally along the ship's bottom, providing massive structural strength and acting as a tunnel for routing ballast and cargo pipes", "A solid block of lead attached to the bottom to improve stability", "A specialized exhaust duct for the main engine"],
    "exp": "Instead of a single flat plate, double-bottom ships often use a duct keel. It acts as the ship's massive steel 'spine' and provides a convenient, protected tunnel for engineers to run pipelines from the engine room to the forward holds.",
    "cat": "CONSTRUCTION",
    "id": "T20C_033"
  },
  {
    "q": "What are 'Panting Stresses' on a ship's hull?",
    "a": "The rhythmic in-and-out flexing of the hull plating at the bow, caused by fluctuating water pressure as the ship pitches up and down into the waves",
    "opts": ["The rhythmic in-and-out flexing of the hull plating at the bow, caused by fluctuating water pressure as the ship pitches up and down into the waves", "The twisting of the hull caused by cargo cranes", "The vertical sliding forces between cargo holds", "The severe vibration caused by the main engine"],
    "exp": "As the bow dives into a wave, water pressure crushes the steel plates inward. As it rises out, the pressure drops and the plates pop outward. This 'breathing' or 'panting' causes metal fatigue, which is why the bow is heavily reinforced with panting beams.",
    "cat": "CONSTRUCTION",
    "id": "T20C_034"
  },
  {
    "q": "What are 'Pounding Stresses' on a ship?",
    "a": "The severe, localized impact shocks inflicted on the flat bottom of the forward hull when the bow lifts out of the water and violently slams back down into the sea",
    "opts": ["The severe, localized impact shocks inflicted on the flat bottom of the forward hull when the bow lifts out of the water and violently slams back down into the sea", "The continuous vibration of the propeller", "The twisting force of an asymmetrical cargo load", "The stress of dropping heavy containers onto the deck"],
    "exp": "Also known as 'slamming'. When an empty ship pitches heavily, the bow clears the water entirely. When it falls, the flat bottom slams into the ocean like concrete, causing massive shockwaves through the hull.",
    "cat": "CONSTRUCTION",
    "id": "T20C_035"
  },
  {
    "q": "What is 'Torsion' in ship structures?",
    "a": "A twisting stress along the ship's longitudinal axis, typically caused by quartering seas (waves striking at an angle) or asymmetrical cargo loading",
    "opts": ["A crushing stress from ice pressure", "A twisting stress along the ship's longitudinal axis, typically caused by quartering seas (waves striking at an angle) or asymmetrical cargo loading", "The stress caused by drydock blocks", "A bending stress causing the ship to sag"],
    "exp": "Imagine grabbing the bow and the stern and twisting them in opposite directions. Container ships with massive open hatch covers are particularly vulnerable to torsional stress.",
    "cat": "CONSTRUCTION",
    "id": "T20C_036"
  },
  {
    "q": "What are 'Racking Stresses'?",
    "a": "Transverse distortion of the ship's cross-section (the hull trying to fold like a parallelogram), usually caused by severe rolling in heavy beam seas",
    "opts": ["Longitudinal bending over a wave", "Transverse distortion of the ship's cross-section (the hull trying to fold like a parallelogram), usually caused by severe rolling in heavy beam seas", "The vibration of the main engine mounts", "The localized stress of an anchor hitting the hull"],
    "exp": "If you look at the ship from the front (a square cross-section), racking is the force trying to push the top corners sideways, turning the square into a leaning parallelogram. Transverse bulkheads and brackets resist this.",
    "cat": "CONSTRUCTION",
    "id": "T20C_037"
  },
  {
    "q": "What is the primary structural purpose of Transverse Bulkheads?",
    "a": "To divide the ship into watertight compartments for damage stability, and to provide massive cross-sectional strength to resist racking and shear stresses",
    "opts": ["To provide a mounting point for electrical cables", "To act as fuel storage tanks", "To divide the ship into watertight compartments for damage stability, and to provide massive cross-sectional strength to resist racking and shear stresses", "To completely prevent hogging and sagging"],
    "exp": "Bulkheads are the walls inside the ship. They stop water from flooding the whole ship if the hull is breached, and they act like structural ribs, keeping the hull's shape rigid against twisting and racking forces.",
    "cat": "CONSTRUCTION",
    "id": "T20C_038"
  },
  {
    "q": "Under SOLAS, where must the 'Collision Bulkhead' be located?",
    "a": "Located near the bow, typically between 5% and 8% of the ship's length aft of the forward perpendicular, to contain flooding if the ship rams into another vessel or rock",
    "opts": ["Located directly in front of the engine room", "Located at the very stern to protect the propeller", "Located near the bow, typically between 5% and 8% of the ship's length aft of the forward perpendicular, to contain flooding if the ship rams into another vessel or rock", "Located exactly amidships"],
    "exp": "The bow is designed as a 'crumple zone'. The collision bulkhead is an ultra-strong, watertight wall located just far enough back that a severe head-on collision will crush the bow but not breach the bulkhead, saving the cargo holds from flooding.",
    "cat": "CONSTRUCTION",
    "id": "T20C_039"
  },
  {
    "q": "What is an 'A-60' Class bulkhead?",
    "a": "A fire-rated bulkhead constructed of steel, heavily insulated so that it blocks smoke/flames for 60 minutes, and prevents the unexposed side from exceeding 139\u00b0C above ambient for 60 minutes",
    "opts": ["A watertight bulkhead designed to hold back 60 meters of water pressure", "A fire-rated bulkhead constructed of steel, heavily insulated so that it blocks smoke/flames for 60 minutes, and prevents the unexposed side from exceeding 139\u00b0C above ambient for 60 minutes", "A bulkhead made of aluminum that melts after 60 seconds", "A bulkhead designed to withstand a 60-knot collision"],
    "exp": "A-Class means it stops the physical fire (steel). The '60' means it has enough rockwool insulation that even if a roaring fire is on one side, you can safely lean against the other side for 60 minutes without being burned.",
    "cat": "CONSTRUCTION",
    "id": "T20C_040"
  },
  {
    "q": "What is a 'B-15' Class bulkhead?",
    "a": "A fire-rated division (often non-combustible panels in accommodation) that blocks flames for 30 minutes, and keeps the unexposed side cool for 15 minutes",
    "opts": ["A bulkhead that contains 15 fire extinguishers", "A fire-rated division (often non-combustible panels in accommodation) that blocks flames for 30 minutes, and keeps the unexposed side cool for 15 minutes", "A structural steel bulkhead that holds 15 tons of cargo", "A bulkhead designed to withstand 15 bar of pressure"],
    "exp": "B-Class divisions are lighter walls used inside the living quarters to separate cabins. They don't have the heavy steel integrity of A-Class, but they provide critical escape time during a cabin fire.",
    "cat": "CONSTRUCTION",
    "id": "T20C_041"
  },
  {
    "q": "What is the function of 'Corrugated Bulkheads' often seen in bulk carriers?",
    "a": "They use folded, zig-zag steel plates which provide immense strength without needing heavy vertical stiffener beams, allowing bulk cargo to slide off easily during discharge",
    "opts": ["They act as heat sinks to cool the cargo", "They are designed to flex and absorb explosive pressure", "They use folded, zig-zag steel plates which provide immense strength without needing heavy vertical stiffener beams, allowing bulk cargo to slide off easily during discharge", "They are decorative walls used only in passenger ships"],
    "exp": "Corrugation (folding steel like an accordion) gives the metal massive rigidity. By eliminating the T-bar stiffeners, there are no flat ledges for grain or coal to get stuck on, making cleaning the holds much faster.",
    "cat": "CONSTRUCTION",
    "id": "T20C_042"
  },
  {
    "q": "What is 'Longitudinal Framing'?",
    "a": "A structural design where the primary stiffening beams run lengthwise from bow to stern, highly effective at resisting longitudinal bending stresses (Hogging/Sagging) in long ships like tankers",
    "opts": ["A system of bulkheads that divide the ship left to right", "Beams that run vertically from the keel to the deck", "A structural design where the primary stiffening beams run lengthwise from bow to stern, highly effective at resisting longitudinal bending stresses (Hogging/Sagging) in long ships like tankers", "A framework built entirely of wood"],
    "exp": "Long ships want to snap in half over waves. Running continuous steel beams end-to-end creates a massive, rigid spine. This is the standard for modern VLCCs and large container vessels.",
    "cat": "CONSTRUCTION",
    "id": "T20C_043"
  },
  {
    "q": "What is 'Transverse Framing'?",
    "a": "A structural design where the primary stiffening ribs run athwartships (side to side, like the ribs of a ribcage), heavily resisting side impacts, racking, and water pressure",
    "opts": ["A structural design where the primary stiffening ribs run athwartships (side to side, like the ribs of a ribcage), heavily resisting side impacts, racking, and water pressure", "A method of hanging electrical cables", "Beams that run from bow to stern", "A design used only in submarines"],
    "exp": "While longitudinal framing stops the ship from breaking its back, transverse framing (like ribs) stops the sides from caving in under the crushing pressure of the ocean. Most ships use a combination (Longitudinal on deck/bottom, Transverse on the sides).",
    "cat": "CONSTRUCTION",
    "id": "T20C_044"
  },
  {
    "q": "What is the 'Plimsoll Line' or Load Line mark painted on the side of the hull?",
    "a": "A mandatory statutory mark indicating the absolute maximum legal depth to which the ship can be loaded with cargo in various water densities and seasons (e.g., Summer, Tropical, Winter)",
    "opts": ["A mandatory statutory mark indicating the absolute maximum legal depth to which the ship can be loaded with cargo in various water densities and seasons (e.g., Summer, Tropical, Winter)", "A decorative stripe showing the waterline", "A line showing where the fuel tanks are located", "A mark used by submarines to target torpedoes"],
    "exp": "Invented by Samuel Plimsoll to stop greedy owners from overloading ships until they sank. The mark guarantees the ship always maintains enough 'Reserve Buoyancy' (empty hull volume above the water) to survive rough seas.",
    "cat": "CONSTRUCTION",
    "id": "T20C_045"
  },
  {
    "q": "What does the 'WNA' mark on a load line stand for?",
    "a": "Winter North Atlantic; the lowest (strictest) load line mark, requiring the ship to carry the least cargo to maximize freeboard and survivability in the most brutal winter ocean conditions",
    "opts": ["Western Naval Association", "Water Navigation Area", "Winter North Atlantic; the lowest (strictest) load line mark, requiring the ship to carry the least cargo to maximize freeboard and survivability in the most brutal winter ocean conditions", "Weight Not Allowed"],
    "exp": "The Winter North Atlantic is famous for monster waves. Ships crossing it in winter must be legally loaded 'lighter' (higher out of the water) than they would be in the calm Tropical (T) zones.",
    "cat": "CONSTRUCTION",
    "id": "T20C_046"
  },
  {
    "q": "What is the 'Neutral Axis' of a ship's hull?",
    "a": "An imaginary horizontal plane running through the hull where the steel experiences exactly zero bending stress (neither tension nor compression) during hogging or sagging",
    "opts": ["The point where the anchor chain attaches", "An imaginary horizontal plane running through the hull where the steel experiences exactly zero bending stress (neither tension nor compression) during hogging or sagging", "The physical electrical ground of the ship", "The vertical centerline dividing Port and Starboard"],
    "exp": "When a ship hogs, the deck stretches and the keel crushes. Somewhere in the middle of the wall, the steel transitions from pulling to pushing. At that exact transition line, the stress is zero.",
    "cat": "CONSTRUCTION",
    "id": "T20C_047"
  },
  {
    "q": "How does the ETO assist with Hull Stress Monitoring Systems?",
    "a": "By maintaining the electronic strain gauges (often fiber-optic or resistive) welded to the deck plates, which feed real-time hog/sag bending data to the load computer on the bridge",
    "opts": ["By maintaining the electronic strain gauges (often fiber-optic or resistive) welded to the deck plates, which feed real-time hog/sag bending data to the load computer on the bridge", "By visually inspecting the rust on the hull", "By painting over cracks in the steel", "By manually measuring the ship's draft with a rope"],
    "exp": "Large bulkers and container ships can break their backs if loaded wrong. Strain gauges act like electronic nerves on the steel deck, sounding an alarm if the metal stretches too close to its breaking point during cargo ops.",
    "cat": "CONSTRUCTION",
    "id": "T20C_048"
  },
  {
    "q": "What are 'Bilge Keels'?",
    "a": "Long, shallow steel fins welded externally along the turn of the bilge (bottom corners of the hull) designed to drastically dampen and reduce the ship's rolling motion in waves",
    "opts": ["Heavy lead weights dropped to anchor the ship", "Long, shallow steel fins welded externally along the turn of the bilge (bottom corners of the hull) designed to drastically dampen and reduce the ship's rolling motion in waves", "The main structural beams running down the center of the ship", "Tanks inside the engine room for storing oily water"],
    "exp": "When the ship tries to roll sideways, these long fins act like massive paddles pushing against the water, creating hydrodynamic drag that acts as a natural, unpowered shock absorber against rolling.",
    "cat": "CONSTRUCTION",
    "id": "T20C_049"
  },
  {
    "q": "Why is the Double Bottom an essential construction feature on modern commercial ships?",
    "a": "It provides a crucial second layer of watertight defense; if the ship grounds on a rock and tears the outer bottom plate, the inner bottom plate prevents the ocean from flooding the cargo holds",
    "opts": ["It allows the ship to carry two types of cargo at once", "It provides a crucial second layer of watertight defense; if the ship grounds on a rock and tears the outer bottom plate, the inner bottom plate prevents the ocean from flooding the cargo holds", "It is used exclusively to store fresh drinking water", "It makes the ship sit lower in the water to avoid low bridges"],
    "exp": "The double bottom is a 1-to-2 meter gap between the ocean and the cargo. It is usually filled with ballast water or fuel. It provides massive longitudinal strength and prevents catastrophic sinking during minor groundings.",
    "cat": "CONSTRUCTION",
    "id": "T20C_050"
  },
  {
    "q": "What happens to a long propeller shaft if a ship undergoes severe hogging or sagging?",
    "a": "The hull bending physically bows the engine room floor; this misaligns the shaft bearings, causing severe vibration, overheating of the stern tube, and potential bearing failure",
    "opts": ["The propeller falls off", "The shaft spins faster to compensate", "The shaft automatically disconnects from the engine", "The hull bending physically bows the engine room floor; this misaligns the shaft bearings, causing severe vibration, overheating of the stern tube, and potential bearing failure"],
    "exp": "The engine and the propeller are bolted to the hull. If the hull bends like a banana, the perfectly straight steel propeller shaft doesn't want to bend. It grinds aggressively into its supporting bearings.",
    "cat": "CONSTRUCTION",
    "id": "T20C_051"
  },
  {
    "q": "What are 'Draft Marks'?",
    "a": "Numbers painted on the bow, stern, and amidships that allow the crew to physically read exactly how deep the ship is sitting in the water, calculating displacement and trim",
    "opts": ["Marks indicating the location of the Plimsoll line", "Numbers painted on the bow, stern, and amidships that allow the crew to physically read exactly how deep the ship is sitting in the water, calculating displacement and trim", "Marks showing where the tugboats should push", "Marks showing where the anchor chains are located"],
    "exp": "Before electronic draft sensors, the Chief Officer literally leaned over the side and read the numbers touching the waterline to ensure the ship wasn't overloaded and wasn't digging its nose into the water (trimmed by the head).",
    "cat": "CONSTRUCTION",
    "id": "T20C_052"
  },
  {
    "q": "What is 'Metal Fatigue' in a ship's hull?",
    "a": "The progressive micro-cracking and weakening of the steel plates caused by millions of cycles of alternating stress (constantly hogging and sagging over waves during a 20-year lifespan)",
    "opts": ["The chemical breakdown of the steel due to acidic cargo", "The progressive micro-cracking and weakening of the steel plates caused by millions of cycles of alternating stress (constantly hogging and sagging over waves during a 20-year lifespan)", "The rusting of the metal due to saltwater", "The melting of the metal in an engine room fire"],
    "exp": "If you bend a paperclip back and forth 100 times, it snaps. The ocean bends a 300-meter ship back and forth millions of times. Fatigue is the primary reason ships are scrapped; the steel simply gets 'tired' and brittle.",
    "cat": "CONSTRUCTION",
    "id": "T20C_053"
  },
  {
    "q": "What is the function of the 'Stern Frame'?",
    "a": "A massive, heavy steel casting or fabrication at the extreme rear of the ship that forms the structural support for the rudder hinges (pintles) and houses the propeller shaft exit (stern tube)",
    "opts": ["The framework that supports the radar mast", "The steel box that holds the anchor chain", "A massive, heavy steel casting or fabrication at the extreme rear of the ship that forms the structural support for the rudder hinges (pintles) and houses the propeller shaft exit (stern tube)", "The wall that separates the engine room from the cargo holds"],
    "exp": "The rudder undergoes immense hydrodynamic slamming forces. The stern frame is a giant, ultra-thick backbone that ensures the rudder isn't ripped off the back of the ship.",
    "cat": "CONSTRUCTION",
    "id": "T20C_054"
  },
  {
    "q": "What is the 'Freeboard' of a ship?",
    "a": "The vertical distance from the actual waterline up to the main continuous weather deck; it represents the ship's reserve buoyancy and survivability against sinking",
    "opts": ["The distance from the keel to the mast", "The depth of the water under the keel", "The horizontal width of the main deck", "The vertical distance from the actual waterline up to the main continuous weather deck; it represents the ship's reserve buoyancy and survivability against sinking"],
    "exp": "If a ship has 5 meters of freeboard, it can sink 5 meters before the ocean flows over the deck and down the hatches. Maximizing freeboard is critical for weathering storms without swamping.",
    "cat": "CONSTRUCTION",
    "id": "T20C_055"
  },
  {
    "q": "In ship stability, what does 'G' represent?",
    "a": "The Center of Gravity; the theoretical point through which the entire downward weight force of the ship and its cargo acts",
    "opts": ["The Center of Gravity; the theoretical point through which the entire downward weight force of the ship and its cargo acts", "The Geometric Center of the hull", "The Center of Buoyancy", "The Metacentric Height"],
    "exp": "Gravity pulls everything down. 'G' is the exact center of balance. If you load heavy steel on the top deck, the Center of Gravity (G) moves upwards.",
    "cat": "STABILITY",
    "id": "T20C_056"
  },
  {
    "q": "What does 'B' represent in ship stability?",
    "a": "The Center of Buoyancy; the geometric center of the underwater volume of the hull, through which the upward push of the water acts",
    "opts": ["The Baseline of the keel", "The Bending Moment", "The Bulkhead location", "The Center of Buoyancy; the geometric center of the underwater volume of the hull, through which the upward push of the water acts"],
    "exp": "Buoyancy pushes up. Gravity pulls down. As a ship rolls, the shape of the underwater hull changes, causing the Center of Buoyancy (B) to constantly shift sideways to support the ship.",
    "cat": "STABILITY",
    "id": "T20C_057"
  },
  {
    "q": "What is the 'Metacenter' (M)?",
    "a": "The theoretical pivot point at which the vertical line of buoyancy (pushing up) intersects the ship's centerline when the ship is slightly heeled over",
    "opts": ["The point where the ship will snap in half", "The exact center of the cargo holds", "The theoretical pivot point at which the vertical line of buoyancy (pushing up) intersects the ship's centerline when the ship is slightly heeled over", "The physical point where the anchor is attached"],
    "exp": "Imagine the ship swinging on a pendulum string. The Metacenter (M) is the pin holding the top of the string. For a ship to be stable, its weight (G) must hang below that pin (M).",
    "cat": "STABILITY",
    "id": "T20C_058"
  },
  {
    "q": "What is the mathematical formula for calculating Metacentric Height (GM)?",
    "a": "GM = KM - KG (Height of Metacenter minus Height of Gravity)",
    "opts": ["GM = KG - KM", "GM = Total Weight / Volume", "GM = KM - KG (Height of Metacenter minus Height of Gravity)", "GM = KG + BM"],
    "exp": "This is the most critical stability formula. KM is based purely on the shape of the hull. KG is how high the cargo is stacked. Subtracting them tells you if G is safely below M.",
    "cat": "STABILITY",
    "id": "T20C_059"
  },
  {
    "q": "What does a 'Positive GM' (where G is below M) indicate about the ship's stability?",
    "a": "The ship is STABLE. If pushed over by a wave, the opposing forces of Gravity and Buoyancy create a 'Righting Lever' (GZ) that forcefully snaps the ship back upright",
    "opts": ["The ship is UNSTABLE and will capsize", "The ship has neutral stability and will stay leaned over", "The ship is STABLE. If pushed over by a wave, the opposing forces of Gravity and Buoyancy create a 'Righting Lever' (GZ) that forcefully snaps the ship back upright", "The ship will sink straight down"],
    "exp": "Positive GM is safe. It means the ship wants to be upright. The larger the positive GM, the harder the ship fights to stand up straight.",
    "cat": "STABILITY",
    "id": "T20C_060"
  },
  {
    "q": "What does a 'Negative GM' (where G is above M) indicate?",
    "a": "The ship is UNSTABLE. The center of gravity is too high (top-heavy). If nudged by a wave, the forces will actively push the ship further over, leading to capsize or a dangerous 'Angle of Loll'",
    "opts": ["The ship is perfectly stable but sits deep in the water", "The ship will resist all rolling motion", "The ship is UNSTABLE. The center of gravity is too high (top-heavy). If nudged by a wave, the forces will actively push the ship further over, leading to capsize or a dangerous 'Angle of Loll'", "The ship's structural steel is failing"],
    "exp": "Imagine balancing a broomstick on your finger. The weight is above the pivot point. Any slight disturbance, and it falls over. Loading 500 containers on the top deck with empty holds causes Negative GM.",
    "cat": "STABILITY",
    "id": "T20C_061"
  },
  {
    "q": "According to SOLAS intact stability criteria, what is the absolute minimum acceptable GM (Metacentric Height) for a standard cargo ship?",
    "a": "0.15 meters",
    "opts": ["0.15 meters", "5.00 meters", "0.00 meters", "1.50 meters"],
    "exp": "A GM of 0.15m is the legal bare minimum to prove the ship won't instantly roll over when it leaves port. Most ships operate with a GM of 0.5m to 2.0m.",
    "cat": "STABILITY",
    "id": "T20C_062"
  },
  {
    "q": "What describes a 'Stiff' ship?",
    "a": "A ship with a very LARGE positive GM. It acts like a pendulum with a heavy weight at the bottom, snapping back upright violently and quickly, creating a harsh, uncomfortable ride",
    "opts": ["A ship that is structurally inflexible and snaps in half", "A ship with a Negative GM that leans permanently", "A ship with a SMALL GM that rolls very slowly", "A ship with a very LARGE positive GM. It acts like a pendulum with a heavy weight at the bottom, snapping back upright violently and quickly, creating a harsh, uncomfortable ride"],
    "exp": "If all the heavy cargo (iron ore) is piled at the very bottom of the hull, G is very low. GM is huge. When a wave tilts the ship, it jerks violently back to center. This snaps container lashings and breaks legs.",
    "cat": "STABILITY",
    "id": "T20C_063"
  },
  {
    "q": "What describes a 'Tender' ship?",
    "a": "A ship with a very SMALL positive GM. It rolls slowly, sluggishly, and comfortably, but hangs precariously at large angles before slowly returning upright",
    "opts": ["A ship with a LARGE GM that rolls violently", "A ship with a very SMALL positive GM. It rolls slowly, sluggishly, and comfortably, but hangs precariously at large angles before slowly returning upright", "A ship that cannot float in fresh water", "A ship that is made of thin, weak steel"],
    "exp": "Cruise ships are designed to be Tender (small GM) because passengers hate violent, jerky rolling. It feels like a smooth, slow hammock swing. However, a small GM provides less safety margin against capsizing in a hurricane.",
    "cat": "STABILITY",
    "id": "T20C_064"
  },
  {
    "q": "What is the 'Free Surface Effect' (FSE)?",
    "a": "When a tank is partially filled (slack), the liquid sloshes to the low side during a roll. This actively shifts the ship's center of gravity (G) outward, dangerously reducing the effective GM and stability",
    "opts": ["The friction of the wind against the ship's superstructure", "The effect of rainwater freezing on the open deck", "The drag caused by barnacles on the hull", "When a tank is partially filled (slack), the liquid sloshes to the low side during a roll. This actively shifts the ship's center of gravity (G) outward, dangerously reducing the effective GM and stability"],
    "exp": "Sloshing water actively works against the ship. If the ship rolls left, the water in a half-empty ballast tank rushes left, making the ship want to roll even further left. It mathematically creates a 'Virtual Rise' in G.",
    "cat": "STABILITY",
    "id": "T20C_065"
  },
  {
    "q": "How do naval architects mechanically minimize the dangerous Free Surface Effect in large fuel and ballast tanks?",
    "a": "By installing internal longitudinal 'Wash Bulkheads' (baffle plates) inside the tanks, breaking one wide sloshing wave into several tiny, harmless ripples",
    "opts": ["By adding chemicals to make the water thicker", "By ensuring tanks are always kept at exactly 50% capacity", "By heating the tanks to evaporate the liquid", "By installing internal longitudinal 'Wash Bulkheads' (baffle plates) inside the tanks, breaking one wide sloshing wave into several tiny, harmless ripples"],
    "exp": "Free Surface Effect is proportional to the CUBE of the tank's width. Slicing a wide tank in half with a steel wall drastically kills the sloshing momentum of the liquid.",
    "cat": "STABILITY",
    "id": "T20C_066"
  },
  {
    "q": "What is the technical difference between a 'List' and a 'Heel'?",
    "a": "A List is a permanent tilt caused by internal weight imbalance (e.g., uneven cargo). A Heel is a temporary tilt caused by external forces (e.g., wind pushing the ship, or turning in a tight circle)",
    "opts": ["List refers to forward/aft tilt; Heel refers to side-to-side tilt", "A List is a temporary tilt caused by external forces. A Heel is a permanent tilt caused by internal weight imbalance", "A List is a permanent tilt caused by internal weight imbalance (e.g., uneven cargo). A Heel is a temporary tilt caused by external forces (e.g., wind pushing the ship, or turning in a tight circle)", "They are two words for exactly the same thing"],
    "exp": "If the ship is tied to the dock in calm weather and is leaning 3 degrees to Port, it has a LIST (someone pumped too much fuel into the port tank). If it is perfectly upright but gets pushed over by a squall, it is HEELING.",
    "cat": "STABILITY",
    "id": "T20C_067"
  },
  {
    "q": "What is an 'Angle of Loll'?",
    "a": "The terrifying angle at which an UNSTABLE ship (Negative GM) finally finds a temporary resting balance. If a wave pushes it past this point, it will completely capsize",
    "opts": ["The terrifying angle at which an UNSTABLE ship (Negative GM) finally finds a temporary resting balance. If a wave pushes it past this point, it will completely capsize", "The maximum safe angle a ship can roll without spilling coffee", "The angle at which the radar loses its picture", "The angle of the ship's bow relative to true North"],
    "exp": "A top-heavy ship (Negative GM) falls over. As it falls, the shape of the hull changes, pushing the Center of Buoyancy (B) out wide. Eventually, B gets far enough out to catch the falling ship. It rests there, tilted heavily. This is the Loll. It is a hair's breadth from disaster.",
    "cat": "STABILITY",
    "id": "T20C_068"
  },
  {
    "q": "If a ship is suffering from an Angle of Loll (Negative GM), why is it fatal to simply pump water out of the low side ballast tank to try and straighten it?",
    "a": "Because the ship is inherently top-heavy. Pumping water out removes weight from the bottom, raising G even higher, causing the ship to flop violently over to the other side and capsize instantly",
    "opts": ["Because the pumps cannot operate when tilted", "Because the water is needed to cool the engine", "Because it violates MARPOL pollution rules", "Because the ship is inherently top-heavy. Pumping water out removes weight from the bottom, raising G even higher, causing the ship to flop violently over to the other side and capsize instantly"],
    "exp": "This is a classic stability trap. A Loll looks exactly like a List. If you try to 'correct' a Loll by shifting or dumping ballast, you worsen the top-heavy state. The only cure for a Loll is to add weight to the absolute lowest point of the ship (fill DB tanks) to pull G back down.",
    "cat": "STABILITY",
    "id": "T20C_069"
  },
  {
    "q": "What is the 'Righting Lever' (GZ)?",
    "a": "The horizontal distance between the downward force of Gravity (G) and the upward force of Buoyancy (B) when the ship is heeled over; it defines the actual physical torque twisting the ship upright",
    "opts": ["The physical lever used to manually turn the rudder", "The distance between the bow and the stern", "The joystick used to control the bow thruster", "The horizontal distance between the downward force of Gravity (G) and the upward force of Buoyancy (B) when the ship is heeled over; it defines the actual physical torque twisting the ship upright"],
    "exp": "GM is a theoretical number for when the ship is perfectly upright. GZ is the real-world lever arm when the ship is tossed into a wave. A large GZ means massive corrective force.",
    "cat": "STABILITY",
    "id": "T20C_070"
  },
  {
    "q": "What happens to the ship's stability if the Chief Engineer consumes 500 tons of Heavy Fuel Oil entirely from the Double Bottom (DB) tanks during a voyage?",
    "a": "Removing massive weight from the very bottom of the ship raises the Center of Gravity (G), reducing the GM and making the ship more tender/unstable",
    "opts": ["Removing weight makes the ship instantly more stable", "It lowers the Center of Gravity (G), making the ship stiff", "Removing massive weight from the very bottom of the ship raises the Center of Gravity (G), reducing the GM and making the ship more tender/unstable", "It has zero effect on stability, only on draft"],
    "exp": "Imagine a balloon with a coin taped to the bottom to keep it upright. If you peel the coin off (burn the bottom fuel), the balloon becomes top-heavy and wants to flip over. Engineers must carefully manage which tanks they draw from.",
    "cat": "STABILITY",
    "id": "T20C_071"
  },
  {
    "q": "How does ice accretion (ice forming heavily on the superstructure and masts in the Arctic) affect ship stability?",
    "a": "It adds massive, uncontrolled weight to the absolute highest points of the ship, violently raising the Center of Gravity (G) and risking a sudden capsize",
    "opts": ["It seals the hatches, increasing reserve buoyancy", "It improves the aerodynamic profile of the ship", "It lowers the center of gravity, making the ship safer", "It adds massive, uncontrolled weight to the absolute highest points of the ship, violently raising the Center of Gravity (G) and risking a sudden capsize"],
    "exp": "Hundreds of tons of frozen sea spray high up in the rigging destroys a ship's GM. Smaller fishing vessels frequently capsize and vanish in winter due to top-heavy ice accumulation.",
    "cat": "STABILITY",
    "id": "T20C_072"
  },
  {
    "q": "What happens to the ship's Center of Gravity (G) the exact moment a ship's crane lifts a 40-ton container off the deck?",
    "a": "The entire 40-ton weight acts as if it is instantly located at the absolute tip of the crane boom, causing a massive, instantaneous upward shift in G and a sudden heeling moment",
    "opts": ["The weight disappears from stability calculations completely", "The weight acts at the base of the crane pedestal", "The weight acts at the hook, lowering G", "The entire 40-ton weight acts as if it is instantly located at the absolute tip of the crane boom, causing a massive, instantaneous upward shift in G and a sudden heeling moment"],
    "exp": "This is the 'Suspended Weight' rule. The moment the box leaves the deck, physics dictates its weight is transferred entirely to the suspension point (the top of the jib, 30 meters in the air). The ship will lurch sideways instantly.",
    "cat": "STABILITY",
    "id": "T20C_073"
  },
  {
    "q": "What is the function of the Anti-Heeling system (frequently maintained by the ETO)?",
    "a": "It uses a massive, reversible axial pump and electronic inclinometers to automatically blast ballast water from Port to Starboard (and vice versa) to keep the ship perfectly level (0\u00b0 List) while heavy cranes are swinging cargo",
    "opts": ["It prevents the ship from pitching forward and backward", "It deploys fins underwater to stop rolling in heavy storms", "It physically locks the cargo containers to the deck", "It uses a massive, reversible axial pump and electronic inclinometers to automatically blast ballast water from Port to Starboard (and vice versa) to keep the ship perfectly level (0\u00b0 List) while heavy cranes are swinging cargo"],
    "exp": "If a crane swings 40 tons out to the Port side, the ship leans Port. If it leans too far, the container gets stuck against the guides. The anti-heeling system senses the 1-degree tilt and instantly pumps 40 tons of water to the Starboard tank to balance the scale.",
    "cat": "STABILITY",
    "id": "T20C_074"
  },
  {
    "q": "What does the Anti-Heeling Inclinometer measure?",
    "a": "The exact transverse angle of tilt (List) of the ship, sending a digital or analog signal to the PLC to trigger the correction pumps",
    "opts": ["The draft depth of the bow", "The magnetic heading of the ship", "The exact transverse angle of tilt (List) of the ship, sending a digital or analog signal to the PLC to trigger the correction pumps", "The speed of the wind hitting the superstructure"],
    "exp": "The inclinometer is the electronic bubble-level. It tells the computer 'We are leaning 1.5 degrees left, turn on the pump throwing water to the right'.",
    "cat": "STABILITY",
    "id": "T20C_075"
  },
  {
    "q": "What is 'Parametric Rolling'?",
    "a": "A violent, rapidly escalating roll phenomenon unique to modern containerships in head or following seas, caused by the extreme flare of the bow and stern entering and exiting waves, which can throw containers overboard without warning",
    "opts": ["A roll caused solely by the wind hitting the containers", "A roll induced intentionally by the anti-heeling system to wash the decks", "A gentle, rhythmic rolling that puts the crew to sleep", "A violent, rapidly escalating roll phenomenon unique to modern containerships in head or following seas, caused by the extreme flare of the bow and stern entering and exiting waves, which can throw containers overboard without warning"],
    "exp": "Containerships have massive, wide bows. When the bow hits a wave, the ship's stability geometry changes instantly. If the wave period matches the ship's natural roll period, the ship can go from 0 degrees to a 40-degree violent roll in just 3 wave cycles, snapping lashings like twigs.",
    "cat": "STABILITY",
    "id": "T20C_076"
  },
  {
    "q": "Under the new SOLAS V amendments (effective 2026), what device MUST be installed on large containerships to combat Parametric Rolling?",
    "a": "An Electronic Inclinometer directly connected to the VDR, which actively alerts the bridge officers to severe roll angles and records the data for accident investigation",
    "opts": ["A set of massive underwater stabilizer fins", "A system to automatically dump ballast water", "A computerized automatic steering override", "An Electronic Inclinometer directly connected to the VDR, which actively alerts the bridge officers to severe roll angles and records the data for accident investigation"],
    "exp": "Because parametric rolling happens so fast, human senses fail to recognize the danger until the boxes are in the water. The electronic inclinometer provides objective data and screams at the captain to change course immediately.",
    "cat": "STABILITY",
    "id": "T20C_077"
  },
  {
    "q": "What is the 'Trim' of a vessel?",
    "a": "The difference between the draft at the Forward perpendicular (bow) and the draft at the Aft perpendicular (stern); it represents the longitudinal tilt of the ship",
    "opts": ["The total weight of the cargo onboard", "The transverse tilt (List) of the ship from port to starboard", "The difference between the draft at the Forward perpendicular (bow) and the draft at the Aft perpendicular (stern); it represents the longitudinal tilt of the ship", "The aesthetic paint line along the hull"],
    "exp": "If the bow draft reads 10 meters, and the stern draft reads 12 meters, the ship has a Trim of 2 meters 'by the stern'. Ships usually sail slightly trimmed by the stern to keep the propeller deeply submerged.",
    "cat": "STABILITY",
    "id": "T20C_078"
  },
  {
    "q": "What is 'Reserve Buoyancy'?",
    "a": "The enclosed, watertight volume of the ship's hull located strictly ABOVE the actual waterline, providing the critical lifesaver margin that prevents the ship from sinking when damaged",
    "opts": ["The water pumped into the ballast tanks to stabilize the ship", "The air inside the crew's lifejackets", "The buoyancy provided by the wooden deck planks", "The enclosed, watertight volume of the ship's hull located strictly ABOVE the actual waterline, providing the critical lifesaver margin that prevents the ship from sinking when damaged"],
    "exp": "The part of the ship underwater provides Buoyancy (keeping it afloat). The empty part of the hull sticking up into the air is the Reserve. If a torpedo blows a hole in the ship, the ship sinks deeper, trading its Reserve Buoyancy to stay alive.",
    "cat": "STABILITY",
    "id": "T20C_079"
  },
  {
    "q": "What is 'Intact Stability' vs 'Damage Stability'?",
    "a": "Intact looks at how safely the ship handles waves when perfectly healthy; Damage looks at whether the ship will survive and remain upright if a torpedo or rock rips open specific watertight compartments",
    "opts": ["Intact looks at how safely the ship handles waves when perfectly healthy; Damage looks at whether the ship will survive and remain upright if a torpedo or rock rips open specific watertight compartments", "There is no difference in the mathematical formulas", "Intact is for cargo ships; Damage is for warships", "Intact refers to the hull; Damage refers to the engine"],
    "exp": "Naval architects must prove to SOLAS that if a ship hits an iceberg and floods the two largest cargo holds (Damage Stability), the ship won't instantly capsize, allowing the crew time to launch the lifeboats.",
    "cat": "STABILITY",
    "id": "T20C_080"
  },
  {
    "q": "What is the function of 'Cross-Flooding Valves' (often actuated by the ETO via the automation system)?",
    "a": "In the event of asymmetrical damage (e.g., a port-side tank is ripped open), these valves open to intentionally flood the identical starboard-side tank, equalizing the weight and preventing a catastrophic capsize",
    "opts": ["They pump seawater directly into the engine room to fight fires", "In the event of asymmetrical damage (e.g., a port-side tank is ripped open), these valves open to intentionally flood the identical starboard-side tank, equalizing the weight and preventing a catastrophic capsize", "They empty the swimming pool into the ballast tanks", "They connect the heavy fuel oil tanks together to mix the fuel"],
    "exp": "If a cruise ship is torpedoed on the Port side, 5000 tons of water rush into the Port wing tanks. The ship will violently roll over to Port and sink. Opening the massive cross-flooding valves lets that water rush across to the Starboard tanks, keeping the sinking ship perfectly level.",
    "cat": "STABILITY",
    "id": "T20C_081"
  },
  {
    "q": "What happens if a ship's Natural Roll Period exactly synchronizes with the period of the ocean waves it is encountering?",
    "a": "Synchronous Rolling; the wave pushes the ship perfectly in time with its natural swing, escalating the roll angle with every wave until the ship completely capsizes",
    "opts": ["The ship perfectly flattens out and glides over the waves", "The radar will lose its target tracking ability", "Synchronous Rolling; the wave pushes the ship perfectly in time with its natural swing, escalating the roll angle with every wave until the ship completely capsizes", "The ship's main engine will overspeed"],
    "exp": "Think of pushing a child on a swing. If you push at the exact right millisecond of the return swing, they go higher and higher. If the ocean does this to a ship, the ship will roll 10\u00b0, then 20\u00b0, then 40\u00b0, then sink. The captain MUST alter course or speed to break the synchronization.",
    "cat": "STABILITY",
    "id": "T20C_082"
  },
  {
    "q": "If the ship is loading cargo and a 20-ton container is shifted from the port side of the deck to the starboard side of the deck, what happens to G?",
    "a": "The Center of Gravity (G) moves horizontally to starboard, parallel to the shift in weight, causing the ship to List to starboard",
    "opts": ["G moves vertically upwards", "The Center of Gravity (G) moves horizontally to starboard, parallel to the shift in weight, causing the ship to List to starboard", "G remains perfectly stationary", "G moves vertically downwards"],
    "exp": "G always follows the weight. Move weight right, G moves right. Move weight up, G moves up.",
    "cat": "STABILITY",
    "id": "T20C_083"
  },
  {
    "q": "If the ship is loading cargo and a 20-ton container is moved from the bottom of the hold up to the highest tier on the weather deck, what happens to G?",
    "a": "The Center of Gravity (G) moves vertically upwards, decreasing the GM and reducing the ship's stability margin",
    "opts": ["G moves vertically downwards, making the ship stiffer", "G shifts horizontally to port", "The metacenter (M) crashes downwards to meet G", "The Center of Gravity (G) moves vertically upwards, decreasing the GM and reducing the ship's stability margin"],
    "exp": "Moving weight upwards raises G. A high G means a small GM. A small GM means the ship is tender and closer to becoming unstable.",
    "cat": "STABILITY",
    "id": "T20C_084"
  },
  {
    "q": "What is the purpose of taking 'Soundings' of all ballast and fuel tanks before departure?",
    "a": "To provide the Chief Mate with the exact weight and location of all liquids onboard, allowing the Load Computer to calculate the precise KG, GM, and Free Surface Effects to ensure the ship is legally stable to sail",
    "opts": ["To provide the Chief Mate with the exact weight and location of all liquids onboard, allowing the Load Computer to calculate the precise KG, GM, and Free Surface Effects to ensure the ship is legally stable to sail", "To check if the water is salty or fresh", "To ensure there is enough water to fight a fire", "To listen for cracks in the hull plates"],
    "exp": "The computer needs raw data to prove the ship won't sink. Knowing that Tank #3 is half-full of heavy fuel tells the computer exactly how much FSE penalty to apply to the GM calculation.",
    "cat": "STABILITY",
    "id": "T20C_085"
  },
  {
    "q": "When looking at an electric motor nameplate, what does the IEC 'Frame Number' (e.g., Frame 160) specify?",
    "a": "The exact physical height from the bottom of the motor mounting feet to the dead center of the rotating shaft, measured in millimeters (e.g., 160 mm)",
    "opts": ["The diameter of the cooling fan casing in millimeters", "The physical weight of the bare motor in kilograms", "The exact physical height from the bottom of the motor mounting feet to the dead center of the rotating shaft, measured in millimeters (e.g., 160 mm)", "The maximum horsepower the motor can safely output continuously"],
    "exp": "This is a strictly standardized dimension. If a Frame 160 motor burns out, you can order ANY brand of Frame 160 motor, and its shaft will line up perfectly with the existing pump shaft at exactly 160mm off the deck.",
    "cat": "FRAME",
    "id": "T20C_086"
  },
  {
    "q": "If a Surveyor asks: 'Why is the Frame Number the most critical piece of information when ordering a replacement motor?', what is the correct answer?",
    "a": "Because it guarantees physical interchangeability; it ensures the new motor's shaft height, footprint, and bolt hole dimensions will perfectly match the existing pump/foundation without requiring massive steel modifications",
    "opts": ["Because the frame number dictates the voltage and frequency of the motor", "Because it guarantees physical interchangeability; it ensures the new motor's shaft height, footprint, and bolt hole dimensions will perfectly match the existing pump/foundation without requiring massive steel modifications", "Because the frame number indicates the IP rating and waterproofing", "Because it determines the color the motor must be painted"],
    "exp": "An electrical mismatch (e.g., wrong RPM) is bad, but a physical mismatch is a disaster. If the new motor's shaft is 20mm lower than the pump's shaft, you cannot couple them together, rendering the motor useless.",
    "cat": "FRAME",
    "id": "T20C_087"
  },
  {
    "q": "What does the IEC mounting code 'B3' signify on a motor nameplate?",
    "a": "Foot Mounted (The motor sits horizontally on flat feet bolted to a baseplate)",
    "opts": ["Flange Mounted", "Vertical Flange Mounted facing downward", "Foot Mounted (The motor sits horizontally on flat feet bolted to a baseplate)", "Face Mounted"],
    "exp": "B3 is the most common standard motor configuration, sitting flat on the deck.",
    "cat": "FRAME",
    "id": "T20C_088"
  },
  {
    "q": "What does the IEC mounting code 'B5' signify on a motor nameplate?",
    "a": "Flange Mounted (The motor has no feet; it is bolted directly to the driven machinery using a large flange ring around the drive shaft)",
    "opts": ["Flange Mounted (The motor has no feet; it is bolted directly to the driven machinery using a large flange ring around the drive shaft)", "Water-Cooled casing", "Foot Mounted", "Ceiling Mounted"],
    "exp": "B5 motors are often bolted directly into the side of a gearbox or a hydraulic power pack, hanging in mid-air supported entirely by the massive bolts on the face flange.",
    "cat": "FRAME",
    "id": "T20C_089"
  },
  {
    "q": "What is the difference between an IEC 'B5' flange and a 'B14' face mount?",
    "a": "B5 has a large flange with through-holes where the bolts pass completely through; B14 has a smaller flat face with threaded, tapped holes where the bolts screw directly into the motor casing",
    "opts": ["B5 is foot-mounted; B14 is ceiling-mounted", "B5 uses rubber mounts; B14 uses rigid steel mounts", "B5 has a large flange with through-holes where the bolts pass completely through; B14 has a smaller flat face with threaded, tapped holes where the bolts screw directly into the motor casing", "B5 is for DC motors; B14 is for AC motors"],
    "exp": "B14 is common on smaller pumps. The pump body is bolted directly into the threaded holes on the flat face of the motor.",
    "cat": "FRAME",
    "id": "T20C_090"
  },
  {
    "q": "What does the mounting code 'V1' signify?",
    "a": "Vertical Flange Mounted, with the shaft pointing directly DOWNWARD",
    "opts": ["Vibration Isolated mounting pads", "Vertical Flange Mounted, with the shaft pointing directly DOWNWARD", "Variable Voltage Input configuration", "Vertical Foot Mounted, bolted to a wall"],
    "exp": "Common for deep-well cargo pumps or tall engine room water pumps, where the motor sits vertically on top of the pump casing.",
    "cat": "FRAME",
    "id": "T20C_091"
  },
  {
    "q": "In motor frame designations like '160M' or '160L', what do the letters S, M, and L represent?",
    "a": "Short, Medium, and Long. They indicate the physical length of the motor casing and the distance between the front and rear mounting feet",
    "opts": ["Single-phase, Multi-phase, and Line-to-Line", "Short, Medium, and Long. They indicate the physical length of the motor casing and the distance between the front and rear mounting feet", "Standard, Marine, and Lightweight construction", "Small, Medium, and Large cooling fans"],
    "exp": "A Frame 160M and a 160L both have a 160mm shaft height, but the 'L' (Long) motor packs more copper and iron into a longer body to generate more horsepower/kW. The mounting bolt holes on the floor will be spaced further apart front-to-back.",
    "cat": "FRAME",
    "id": "T20C_092"
  },
  {
    "q": "When aligning a motor to a pump, what is a 'Soft Foot' condition?",
    "a": "When the motor is resting on its baseplate, but one of the four feet is slightly raised in the air and not touching the steel; tightening the bolt will physically warp and twist the entire motor casing",
    "opts": ["When the motor is resting on its baseplate, but one of the four feet is slightly raised in the air and not touching the steel; tightening the bolt will physically warp and twist the entire motor casing", "When the concrete foundation under the pump begins to crumble", "When the motor is mounted on rubber vibration isolators", "When the shaft bearings have too much internal clearance"],
    "exp": "Like a wobbly cafe table with one short leg. If you brute-force tighten the bolt on that short leg, you bend the cast-iron motor frame. This warps the stator, destroying the microscopic air gap between the rotor and stator, leading to severe vibration and burnout.",
    "cat": "FRAME",
    "id": "T20C_093"
  },
  {
    "q": "How does an ETO or Fitter check for and fix a 'Soft Foot' before beginning precision shaft alignment?",
    "a": "Loosen all 4 bolts, try to slide a feeler gauge under each foot. If a gap exists, insert stainless steel shims of exactly that thickness under the hovering foot until it rests solid, then tighten the bolts",
    "opts": ["Weld the motor directly to the baseplate", "Pour liquid epoxy under the motor and wait 24 hours", "Loosen all 4 bolts, try to slide a feeler gauge under each foot. If a gap exists, insert stainless steel shims of exactly that thickness under the hovering foot until it rests solid, then tighten the bolts", "Tighten all bolts with a heavy impact wrench to force the feet flat"],
    "exp": "Shimming fills the void with solid metal. Once the void is perfectly filled, tightening the bolt holds the motor secure without bending the frame.",
    "cat": "FRAME",
    "id": "T20C_094"
  },
  {
    "q": "What are the two specific types of shaft misalignment that must be corrected using Dial Test Indicators (DTIs) or a Laser Alignment tool?",
    "a": "Parallel Offset misalignment (shafts are perfectly straight but sitting at different heights/side-to-side) and Angular misalignment (shafts meet at the center but are pointing at an angle to each other)",
    "opts": ["Rotational and Stationary misalignment", "Parallel Offset misalignment (shafts are perfectly straight but sitting at different heights/side-to-side) and Angular misalignment (shafts meet at the center but are pointing at an angle to each other)", "Internal and External misalignment", "Horizontal and Vertical misalignment"],
    "exp": "Most bad alignments are a combination of both. You must shift the motor left/right/up/down to fix Parallel offset, AND shim the front or back feet differently to tilt the motor to fix the Angular offset.",
    "cat": "FRAME",
    "id": "T20C_095"
  },
  {
    "q": "When using a Dial Test Indicator (DTI) for alignment, reading the outer circumference (RIM) of the coupling measures which type of misalignment?",
    "a": "Parallel Offset misalignment",
    "opts": ["Bearing clearance", "Axial thrust end-play", "Parallel Offset misalignment", "Angular misalignment"],
    "exp": "Sweeping the dial indicator around the outside edge (rim) tells you if one shaft is sitting higher or lower than the other.",
    "cat": "FRAME",
    "id": "T20C_096"
  },
  {
    "q": "When using a Dial Test Indicator (DTI) for alignment, reading the flat front surface (FACE) of the coupling measures which type of misalignment?",
    "a": "Angular misalignment",
    "opts": ["Shaft bowing", "Soft foot twist", "Parallel Offset misalignment", "Angular misalignment"],
    "exp": "Sweeping the dial against the flat face tells you if the gap between the two couplings is wider at the top than at the bottom (indicating the shafts are tilted away from each other).",
    "cat": "FRAME",
    "id": "T20C_097"
  },
  {
    "q": "What is the typical industry-accepted tolerance for precision motor-to-pump shaft alignment on auxiliary marine machinery?",
    "a": "Typically less than 0.05 mm (5 hundredths of a millimeter) for both parallel and angular misalignment",
    "opts": ["Less than 0.50 mm", "Less than 1.00 mm", "Typically less than 0.05 mm (5 hundredths of a millimeter) for both parallel and angular misalignment", "Zero tolerance (0.000 mm) is strictly required"],
    "exp": "0.05 mm is roughly the thickness of a human hair. Anything worse than this will cause vibration that destroys the mechanical seals and ruins the roller bearings within a few months of continuous running.",
    "cat": "FRAME",
    "id": "T20C_098"
  },
  {
    "q": "Why is 'Thermal Growth' (Thermal Expansion) a critical factor in aligning massive hot-fluid pumps (like boiler feed pumps or HFO booster pumps)?",
    "a": "The pump casing will expand massively when filled with 150\u00b0C fluid, physically lifting the pump shaft upward; the cold alignment must intentionally position the motor shaft slightly higher so they perfectly align only when the system is blazing hot",
    "opts": ["The motor copper will expand and short out the stator", "The coupling bolts will stretch and loosen in the heat", "The pump casing will expand massively when filled with 150\u00b0C fluid, physically lifting the pump shaft upward; the cold alignment must intentionally position the motor shaft slightly higher so they perfectly align only when the system is blazing hot", "The laser alignment tool will be blinded by the heat haze"],
    "exp": "If you align a cold 150\u00b0C boiler pump perfectly to a cold motor, the moment the pump hits 150\u00b0C, the steel expands. The pump shaft rises by 0.5mm, ruining the alignment. You must calculate this thermal growth and intentionally misalign them while cold.",
    "cat": "FRAME",
    "id": "T20C_099"
  },
  {
    "q": "What is the primary advantage of a 'Flexible Coupling' (e.g., rubber spider gear or jaw coupling) over a solid, rigid steel coupling?",
    "a": "It can safely absorb microscopic amounts of vibration, thermal growth, and minor shaft misalignment (< 0.1 mm) without transferring destructive forces into the delicate motor bearings",
    "opts": ["It completely eliminates the need for precision dial-indicator alignment", "It can safely absorb microscopic amounts of vibration, thermal growth, and minor shaft misalignment (< 0.1 mm) without transferring destructive forces into the delicate motor bearings", "It allows the motor to run at variable speeds", "It acts as a physical fuse, snapping instantly if the pump jams"],
    "exp": "A rigid coupling transfers every ounce of vibration and misalignment directly into the bearings, destroying them. A flexible rubber or spring-steel element provides a tiny cushion. However, it is NOT an excuse to perform a lazy, bad alignment.",
    "cat": "FRAME",
    "id": "T20C_100"
  },
  {
    "q": "What are 'Dowel Pins' (Taper Pins) used for on a motor baseplate?",
    "a": "After achieving a perfect precision alignment, holes are drilled through the motor feet into the baseplate, and solid steel pins are hammered in to permanently lock the motor in that exact position, preventing it from vibrating out of alignment",
    "opts": ["They act as shear pins that snap if the motor over-torques", "They act as electrical grounding spikes", "After achieving a perfect precision alignment, holes are drilled through the motor feet into the baseplate, and solid steel pins are hammered in to permanently lock the motor in that exact position, preventing it from vibrating out of alignment", "They are used to measure the depth of the oil in the bearings"],
    "exp": "Holding a 2-ton motor perfectly aligned to 0.05mm using just the clamping force of 4 bolts is risky; severe vibration can cause the motor to slide sideways over time. Dowel pins physically pin it permanently to the deck.",
    "cat": "FRAME",
    "id": "T20C_101"
  },
  {
    "q": "If a surveyor asks you to read the ISO bearing number '6312-ZZ', what does the '12' tell you about the physical dimensions of the motor shaft?",
    "a": "The bore diameter (the thickness of the shaft that fits inside the bearing) is exactly 60 mm",
    "opts": ["The bearing can handle 12,000 RPM", "The outer diameter of the bearing is 12 inches", "The bore diameter is 12 mm", "The bore diameter (the thickness of the shaft that fits inside the bearing) is exactly 60 mm"],
    "exp": "The golden rule of ISO bearings: For numbers ending in 04 and above, multiply the last two digits by 5 to get the inner bore diameter in millimeters. 12 \u00d7 5 = 60mm shaft.",
    "cat": "FRAME",
    "id": "T20C_102"
  },
  {
    "q": "What does the 'ZZ' suffix mean on the bearing number '6312-ZZ'?",
    "a": "It means the bearing is fitted with Two Metal Shields (one on each side) to retain grease and block large debris, but it is not completely watertight",
    "opts": ["It indicates 'Zero Zero' clearance, meaning it is an ultra-precision tight fit", "It means the bearing is made of Zinc", "It means the bearing is fitted with Two Metal Shields (one on each side) to retain grease and block large debris, but it is not completely watertight", "It means the bearing has Two Rubber Seals (completely waterproof)"],
    "exp": "ZZ = Metal Shields. 2RS = Two Rubber Seals. Rubber seals create friction but block water perfectly. Metal shields have less friction but let fine dust/water in.",
    "cat": "FRAME",
    "id": "T20C_103"
  },
  {
    "q": "What does the 'C3' suffix mean on a bearing (e.g., 6205-C3)?",
    "a": "It indicates 'Greater than Normal' internal radial clearance. It is designed for motors that run very hot; the extra space allows the metal balls to thermally expand without seizing the bearing",
    "opts": ["It indicates 'Greater than Normal' internal radial clearance. It is designed for motors that run very hot; the extra space allows the metal balls to thermally expand without seizing the bearing", "It indicates a tight clearance for high-precision robotic motors", "It means it has 3 rows of ceramic balls", "It means it is certified for Class 3 hazardous explosive areas"],
    "exp": "If you put a normal bearing in a hot boiler pump motor, the steel balls heat up, swell, jam tight against the races, and destroy the bearing in hours. C3 bearings are built loose when cold, and tighten to a perfect fit only when blazing hot.",
    "cat": "FRAME",
    "id": "T20C_104"
  },
  {
    "q": "What is the primary difference in application between a Deep Groove Ball Bearing (Type 6) and a Cylindrical Roller Bearing (Type NU/NJ)?",
    "a": "Ball bearings handle moderate radial and thrust loads at high speeds; Roller bearings provide massive radial load capacity (for heavy belt drives) but cannot handle thrust (axial) forces",
    "opts": ["There is no difference; they are interchangeable", "Ball bearings handle moderate radial and thrust loads at high speeds; Roller bearings provide massive radial load capacity (for heavy belt drives) but cannot handle thrust (axial) forces", "Ball bearings are used for high torque; Roller bearings are used for high speed", "Ball bearings require no grease; Roller bearings require continuous oil baths"],
    "exp": "Rollers are flat cylinders. They spread the crushing weight over a wide line (massive radial strength). But because they are flat, if you push the shaft in or out (thrust), the rollers just slide sideways and pop out.",
    "cat": "FRAME",
    "id": "T20C_105"
  },
  {
    "q": "When looking at the physical layout of a motor, what do the terms DE and NDE refer to?",
    "a": "Drive End (the side where the shaft sticks out to connect to the pump) and Non-Drive End (the back side, usually where the cooling fan is located)",
    "opts": ["Diesel Engine and Naval Diesel Engine", "Direct Current End and No-Direct Current End", "Drive End (the side where the shaft sticks out to connect to the pump) and Non-Drive End (the back side, usually where the cooling fan is located)", "Delta End and Neutral Delta End"],
    "exp": "The Drive End bearing usually takes a massive beating from the coupling vibration and over-tightened belts. The NDE bearing just holds up the back of the rotor. You must specify which bearing you are ordering.",
    "cat": "FRAME",
    "id": "T20C_106"
  },
  {
    "q": "Why are standard marine motor frames constructed from heavy Cast Iron rather than lightweight Aluminum?",
    "a": "Cast iron provides superior mechanical rigidity, massive vibration dampening, and excellent resistance to saltwater corrosion compared to aluminum",
    "opts": ["Aluminum cannot conduct electricity", "Cast iron is legally required to make the ship heavier for stability", "Aluminum is highly magnetic and ruins the motor's efficiency", "Cast iron provides superior mechanical rigidity, massive vibration dampening, and excellent resistance to saltwater corrosion compared to aluminum"],
    "exp": "Aluminum frames are great for weight-saving ashore, but in an engine room, salt air rapidly corrodes aluminum into white powder. Cast iron rusts on the surface but stays solid for decades, and its sheer mass eats vibration.",
    "cat": "FRAME",
    "id": "T20C_107"
  },
  {
    "q": "What does an IP55 rating mean on a motor frame?",
    "a": "Dust Protected (5) - dust may enter but won't interfere with operation, and Water Jets (5) - protected against low-pressure water streams from any direction",
    "opts": ["Protected against solid objects >50mm (1) and dripping water (2)", "Totally dust-tight (6) and submersible underwater (8)", "Explosion-proof (5) and Fire-resistant (5)", "Dust Protected (5) - dust may enter but won't interfere with operation, and Water Jets (5) - protected against low-pressure water streams from any direction"],
    "exp": "IP55 is the standard 'Weatherproof / Hose-proof' rating for open cargo decks. You can wash the deck around it with a fire hose, but you cannot submerge the motor entirely.",
    "cat": "FRAME",
    "id": "T20C_108"
  },
  {
    "q": "What does an IP22 rating mean, and where are these motors typically used?",
    "a": "Protected against fingers/objects >12.5mm (2) and dripping water when tilted up to 15 degrees (2); typically used for main generators and large motors inside the dry, enclosed Engine Room",
    "opts": ["Dust-tight and splash-proof; used on the open deck", "Protected against fingers/objects >12.5mm (2) and dripping water when tilted up to 15 degrees (2); typically used for main generators and large motors inside the dry, enclosed Engine Room", "Fully submersible; used for deep-well cargo pumps", "Intrinsically safe; used in paint lockers"],
    "exp": "IP22 is an 'Open Drip-Proof' motor. The massive vents allow excellent air cooling, but leave the windings exposed. Because the engine room ceiling keeps rain out, they only need protection from an accidental leaky pipe dripping from above.",
    "cat": "FRAME",
    "id": "T20C_109"
  },
  {
    "q": "When ordering a replacement motor, why might you need to specify the Terminal Box position (e.g., Top, Left, Right)?",
    "a": "Because heavy marine power cables are extremely rigid; if a 'Right-Box' motor is delivered to replace a 'Left-Box' motor, the existing thick copper cables may be too short or too stiff to stretch over the top to the other side",
    "opts": ["Because SOLAS requires all boxes to face the center of the ship", "Because the terminal box position dictates the direction of rotation", "Because it changes the center of gravity (G) of the motor", "Because heavy marine power cables are extremely rigid; if a 'Right-Box' motor is delivered to replace a 'Left-Box' motor, the existing thick copper cables may be too short or too stiff to stretch over the top to the other side"],
    "exp": "In a tight bilge, you cannot bend a 95mm\u00b2 SWA cable around a cast iron motor frame. The terminal box MUST be located exactly where the old one was to mate with the existing cable tray.",
    "cat": "FRAME",
    "id": "T20C_110"
  },
  {
    "q": "What is the standard configuration for the cooling fan on a TEFC (Totally Enclosed Fan Cooled) marine motor?",
    "a": "A plastic or aluminum fan is mounted on the NDE (Non-Drive End) of the shaft, enclosed in a cowl that forces ambient air directly over the external cooling fins of the cast iron frame",
    "opts": ["A plastic or aluminum fan is mounted on the NDE (Non-Drive End) of the shaft, enclosed in a cowl that forces ambient air directly over the external cooling fins of the cast iron frame", "The motor relies entirely on seawater pumped through a jacket", "A separate 24V DC fan is mounted on the ceiling above it", "A massive internal fan blows air directly through the copper windings"],
    "exp": "Because the motor is 'Totally Enclosed' (IP55), the dirty outside air never touches the delicate copper inside. The internal heat radiates to the cast-iron fins, and the shaft-driven fan blasts air over the fins to carry the heat away.",
    "cat": "FRAME",
    "id": "T20C_111"
  },
  {
    "q": "What happens if a TEFC motor's external cooling fins are heavily caked with oily dirt and sawdust?",
    "a": "The dirt acts as a thick insulating blanket, preventing the internal I\u00b2R heat from radiating into the air stream; the motor will overheat internally and trip the thermal overload relay",
    "opts": ["The motor will spin faster due to reduced air friction", "The fan will shatter from the impact of the dirt", "The dirt acts as a thick insulating blanket, preventing the internal I\u00b2R heat from radiating into the air stream; the motor will overheat internally and trip the thermal overload relay", "The dirt conducts electricity and shorts the casing to the hull"],
    "exp": "Air cooling relies entirely on bare metal touching fast-moving air. If you wrap the metal in an oily sweater, the heat stays trapped inside the stator, baking the Class F insulation until it fails.",
    "cat": "FRAME",
    "id": "T20C_112"
  },
  {
    "q": "How does the NEMA 'Frame Size' system differ drastically from the IEC system?",
    "a": "NEMA uses inches and fractions, where the first two digits divided by 4 equal the shaft height in inches (e.g., Frame 324 = 32/4 = 8 inches); IEC uses direct millimeters",
    "opts": ["NEMA frame numbers dictate the exact horsepower of the motor", "NEMA uses inches and fractions, where the first two digits divided by 4 equal the shaft height in inches (e.g., Frame 324 = 32/4 = 8 inches); IEC uses direct millimeters", "NEMA uses weight in pounds; IEC uses kilograms", "NEMA only applies to DC motors; IEC applies to AC motors"],
    "exp": "If an American ship has a burned-out NEMA motor, you cannot just drop a European IEC motor in its place. The bolt holes will be drilled in inches, and the shaft height will be fractions of a millimeter off, destroying the alignment.",
    "cat": "FRAME",
    "id": "T20C_113"
  },
  {
    "q": "In the context of motor alignment, what is 'Rim and Face' alignment vs 'Reverse Dial' alignment?",
    "a": "Rim and Face uses one dial on the rim and one on the face of the coupling; Reverse Dial uses two dials simultaneously sweeping the outer rims of both the pump and motor couplings",
    "opts": ["Rim and Face uses lasers; Reverse Dial uses string", "Rim and Face uses one dial on the rim and one on the face of the coupling; Reverse Dial uses two dials simultaneously sweeping the outer rims of both the pump and motor couplings", "There is no difference; they are regional terms for the exact same method", "Rim and Face is for small motors; Reverse Dial is only for massive propellers"],
    "exp": "Reverse Dial is highly accurate because it eliminates the error caused by the dial indicator rod sagging under its own weight (sag error) when stretched across a wide gap.",
    "cat": "FRAME",
    "id": "T20C_114"
  },
  {
    "q": "What is the primary danger of operating a large motor with severe angular misalignment?",
    "a": "It causes cyclic bending stress on the rigid shafts every single revolution, leading to rapid metal fatigue, snapping the shaft in half, and destroying the coupling flex-elements",
    "opts": ["It causes cyclic bending stress on the rigid shafts every single revolution, leading to rapid metal fatigue, snapping the shaft in half, and destroying the coupling flex-elements", "It causes the motor to draw 10 times its starting current continuously", "It generates a magnetic field that erases the ship's hard drives", "It causes the motor to spin backwards"],
    "exp": "If the shafts meet at an angle, they are forced to bend slightly to couple together. Spinning a bent shaft 1500 times a minute creates incredible metal fatigue. The shaft will snap right at the coupling base.",
    "cat": "FRAME",
    "id": "T20C_115"
  }
]);
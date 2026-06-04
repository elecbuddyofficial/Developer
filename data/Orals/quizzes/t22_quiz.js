window.loadQuizzes("T22_Practical", [
  {
    "q": "Why is an isolation transformer mandatory for shore power connection?",
    "a": "Prevents stray currents and hull corrosion by breaking galvanic path between solidly earthed shore system (TN-S) and ship's unearthed system (IT)",
    "opts": ["Automatically converts 50Hz to 60Hz for ship's motors", "Boosts low shore voltage to 6.6kV to match MSB", "Acts as capacitor to correct power factor on shore grid", "Prevents stray currents and hull corrosion by breaking galvanic path between solidly earthed shore system (TN-S) and ship's unearthed system (IT)"],
    "exp": "Shore supply (TN-S): neutral solidly connected to ground. Ship's IT system: floating neutral. Direct connection = shore earth connects to ship neutral = current flows through seawater between hull and jetty = rapid electrolytic hull corrosion. Isolation transformer breaks this galvanic path.",
    "cat": "COLD_IRONING",
    "id": "T22P_001"
  },
  {
    "q": "Fundamental earth cable rule during shore power connection/disconnection?",
    "a": "Earth cable: connect FIRST, disconnect LAST - ensures hull bonded to shore ground before live phase conductors handled",
    "opts": ["Connect simultaneously with phase conductors via 4-pin plug", "Disconnect earth before energising phases to prevent ground loops", "Connect earth last and disconnect first to avoid static sparks", "Earth cable: connect FIRST, disconnect LAST - ensures hull bonded to shore ground before live phase conductors handled"],
    "exp": "Earth cable first ensures ship hull is at same potential as shore ground before any live conductors are near personnel. Disconnecting it last ensures protection throughout the operation. If earth disconnected first and phase fault develops during disconnection = lethal shock hazard.",
    "cat": "COLD_IRONING",
    "id": "T22P_002"
  },
  {
    "q": "Shore phase sequence indicator is broken - acceptable alternative verification method?",
    "a": "Connect at minimal load and observe rotation direction of a 3-phase motor - check it runs in normal direction",
    "opts": ["Use multimeter to measure voltage difference between Phase 1 and Phase 3", "Check cable colour coding and match to ship's busbar colours without further testing", "Connect two phases to observe synchronising lamp flicker direction", "Connect at minimal load and observe rotation direction of a 3-phase motor - check it runs in normal direction"],
    "exp": "If no portable phase sequence meter available: briefly energise a non-critical 3-phase motor (e.g. ventilation fan). If it runs backwards, swap any two phases. Colour coding varies globally - never rely on it alone. Multimeter cannot measure phase sequence. Two-phase connection would single-phase the motor.",
    "cat": "COLD_IRONING",
    "id": "T22P_003"
  },
  {
    "q": "How does the shore connection interlock prevent dangerous paralleling with ship's generators?",
    "a": "NC auxiliary contacts from each generator ACB are wired in series with shore breaker closing coil - prevents closure if any generator is online",
    "opts": ["Preferential trip sheds all loads before shore breaker can close", "Synchroscope bypassed and reverse power relay trips if generator runs", "Mechanical key trapped in emergency generator panel requires total blackout first", "NC auxiliary contacts from each generator ACB are wired in series with shore breaker closing coil - prevents closure if any generator is online"],
    "exp": "Electrical interlock: NC contacts from all generator ACBs break the control circuit to the shore breaker's closing coil. While any generator ACB is closed, the shore breaker CANNOT close. Not the preferential trip (for load shedding) - that's a different protection system.",
    "cat": "COLD_IRONING",
    "id": "T22P_004"
  },
  {
    "q": "IEC standard for High Voltage Shore Connections?",
    "a": "IEC/IEEE 80005-1",
    "opts": ["IEC/IEEE 80005-1", "IEC 60092-353 (shipboard cables)", "IEC 60331 (fire resistant cables)", "IEC 61363 (short circuit calculations)"],
    "exp": "IEC/IEEE 80005-1 governs HVSC: standardised voltages (6.6kV/11kV), compatibility assessment, connection procedures, safety requirements, THD limits (\u22645%), bonding resistance (\u22640.1\u03a9), safety pilot loop (50mA minimum, 200ms trip). Referenced in SOLAS II-1.",
    "cat": "COLD_IRONING",
    "id": "T22P_005"
  },
  {
    "q": "Primary function of an Electrical Isolation Permit (EIP)?",
    "a": "Formally documents LOTO applied, circuit tested de-energised, scope of work, and re-energisation procedure",
    "opts": ["Allows working on live 440V switchboards without arc flash PPE", "Substitutes for enclosed space entry permit in cargo holds", "Certifies generators synchronised with shore power grid", "Formally documents LOTO applied, circuit tested de-energised, scope of work, and re-energisation procedure"],
    "exp": "EIP (Electrical Isolation Permit): the formal PTW for ALL electrical maintenance. Documents: which circuit isolated, who applied LOTO, test for dead result, work scope, protective equipment required, re-energisation procedure, sign-off. Cannot be substituted for other permit types.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_006"
  },
  {
    "q": "Critical safety requirement when executing a Hot Work Permit in the engine room?",
    "a": "Continuous fire watch stationed with extinguisher during work and minimum 30 minutes after completion",
    "opts": ["Fixed CO2 system placed in auto-release mode during welding", "All ventilation fans switched off to prevent sparks spreading", "ICCP set to maximum voltage to ground stray welding currents", "Continuous fire watch stationed with extinguisher during work and minimum 30 minutes after completion"],
    "exp": "Hot Work Permit requires dedicated fire watch: one person stationed continuously observing for sparks/embers during and for 30 minutes after work stops. They do NOT work - observation only. CO2 auto-release in occupied space = lethal. Turning off ventilation = toxic fume accumulation.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_007"
  },
  {
    "q": "Enclosed Space Entry - acceptable O2 and LEL limits before entry?",
    "a": "O2 = 20.9% (normal atmospheric); LEL < 1%",
    "opts": ["O2 = 15% minimum; LEL < 10%", "O2 > 23.5% mandatory; LEL = zero", "O2 between 18-19.5%; LEL exactly 5%", "O2 = 20.9% (normal atmospheric); LEL < 1%"],
    "exp": "Safe entry: O2 = 20.9% (normal air). Below 19.5% = oxygen deficient = asphyxiation risk. Above 23.5% = oxygen enrichment = severe fire risk. LEL <1% = safe from explosion risk. 1-10% LEL = dangerous. >10% LEL = immediately dangerous to life and health.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_008"
  },
  {
    "q": "Mandatory requirement during entire duration of enclosed space entry?",
    "a": "Dedicated standby person at entrance - communication maintained, alarm raised if emergency without entering space",
    "opts": ["Chief Engineer must accompany entrant inside at all times", "Certified medic stationed directly inside with the worker", "Two ratings continuously pumping fresh air with bellows", "Dedicated standby person at entrance - communication maintained, alarm raised if emergency without entering space"],
    "exp": "Standby person = most critical requirement. They must: remain at entrance (NEVER enter), maintain continuous communication with entrant, be able to raise alarm immediately, know emergency rescue procedure. If entrant becomes incapacitated, standby person raises alarm - DOES NOT enter alone.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_009"
  },
  {
    "q": "Why switch ICCP OFF before drydock?",
    "a": "Without seawater electrolyte, energised anodes in air cause high-voltage arcing - severe fire hazard near fresh paint",
    "opts": ["ICCP current drains transitional batteries while generators offline", "Dry dock blocks crush active anodes causing MSB short circuit", "Reference electrodes automatically flood dry dock if ICCP left on", "Without seawater electrolyte, energised anodes in air cause high-voltage arcing - severe fire hazard near fresh paint"],
    "exp": "ICCP requires seawater as ionic conductor. In air: circuit is broken, controller ramps voltage to try to drive current \u2192 high voltage at anodes \u2192 arcing. Freshly applied hull paint + solvent fumes + electrical arcing = fire. Must be OFF before docking, commissioned in MANUAL after flooding.",
    "cat": "DRYDOCK",
    "id": "T22P_010"
  },
  {
    "q": "Why keep alternator anti-condensation heaters energised during drydock?",
    "a": "Maintains winding temperature 5-10\u00b0C above ambient - prevents moisture condensation on windings and IR drop",
    "opts": ["Bakes old varnish off windings in preparation for class survey", "Keeps bearing grease liquid for manual shaft turning", "Maintains AVR reference voltage to preserve settings", "Maintains winding temperature 5-10\u00b0C above ambient - prevents moisture condensation on windings and IR drop"],
    "exp": "Cold idle alternator + humid environment = moisture condenses on windings = insulation resistance drops dramatically. Heaters (low wattage, typically 50-200W) powered from shore supply via ESB keep windings above dew point. Annual check: verify heater continuity with multimeter when machine is shut down.",
    "cat": "DRYDOCK",
    "id": "T22P_011"
  },
  {
    "q": "Why perform baseline IR tests on all major equipment BEFORE entering drydock?",
    "a": "Establishes before/after comparison - detects insulation damage caused by docking operations (welding, water blasting, vibration)",
    "opts": ["Class surveyor requires all equipment short-circuited before dock gates close", "Permanently discharges capacitive energy stored in 440V cables to dock floor", "Proves to port authorities ship won't consume excessive reactive power from shore grid", "Establishes before/after comparison - detects insulation damage caused by docking operations (welding, water blasting, vibration)"],
    "exp": "Pre-drydock IR readings = baseline. Post-drydock readings compared to baseline. If IR has dropped = damage occurred during docking (welding sparks, water ingress from blasting, vibration from hull work). Without baseline, no way to prove what condition the equipment was in before.",
    "cat": "DRYDOCK",
    "id": "T22P_012"
  },
  {
    "q": "Shaft earthing assembly maintenance during drydock?",
    "a": "Inspect carbon brush length, check spring tension, clean slip ring surface, verify shaft-to-hull resistance < 1 \u03a9",
    "opts": ["Replace slip ring with solid zinc block to prevent bearing erosion", "Coat carbon brushes with dielectric grease to prevent saltwater corrosion", "Disconnect permanently so ICCP can use propeller as reference electrode", "Inspect carbon brush length, check spring tension, clean slip ring surface, verify shaft-to-hull resistance < 1 \u03a9"],
    "exp": "Carbon brush must have adequate length and spring pressure to maintain firm contact. Slip ring surface must be clean and smooth. Resistance must be <1 \u03a9 shaft-to-hull. If resistance too high: stray currents arc through bearing oil film \u2192 bearing pitting \u2192 bearing failure. Greasing brushes would insulate them defeating their purpose.",
    "cat": "DRYDOCK",
    "id": "T22P_013"
  },
  {
    "q": "Minimum height requiring a Working at Height Permit for electrical maintenance?",
    "a": "Above 2 metres from a fixed surface - full body harness and fall arrest required",
    "opts": ["Above 5 metres", "Above 10 metres", "Above 0.5 metres", "Above 2 metres from a fixed surface - full body harness and fall arrest required"],
    "exp": "Maritime safety standard: Working at Height Permit required for work \u22652 metres above a solid deck or fixed platform. Includes: replacing radar scanners, working on mast lighting, aerial work on funnel. Requires: full body harness, fall arrest lanyard, buddy system, rescue plan.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_014"
  },
  {
    "q": "Ship with 60Hz system connects to 50Hz shore without frequency converter - primary effect on induction motors?",
    "a": "Run ~17% slower - significantly reduces output flow of cooling pumps and ventilation fans",
    "opts": ["Run 20% faster - severe mechanical damage to pump impellers", "Reverse direction regardless of phase sequence", "Switch to regenerative braking feeding power back to shore grid", "Run ~17% slower - significantly reduces output flow of cooling pumps and ventilation fans"],
    "exp": "Synchronous speed Ns = 120f/P. At 50Hz vs 60Hz: 50/60 = 83.3% of rated speed = 17% reduction. Cooling pumps and fans deliver proportionally less flow. Critical: seawater cooling pump running 17% slower in 50Hz port. Frequency converter (rectifier \u2192 DC \u2192 inverter at correct frequency) required for proper operation.",
    "cat": "COLD_IRONING",
    "id": "T22P_015"
  },
  {
    "q": "Purpose of Isolation of Safety Systems Permit?",
    "a": "Authorises temporary disabling of fire detectors or sprinklers during maintenance - requires fire watch and logging of isolated zone",
    "opts": ["Allows permanent disconnection of emergency generator from MSB", "Permits Chief Engineer to bypass main engine overspeed trip during sea trial", "Authorises crew to enter enclosed space without EEBD", "Authorises temporary disabling of fire detectors or sprinklers during maintenance - requires fire watch and logging of isolated zone"],
    "exp": "When disabling smoke detectors (to prevent false alarms during hot work or painting) a fire watch must be substituted - person physically observing the area. Zone isolation must be logged on fire panel. Permit must specify: which devices isolated, duration, fire watch details, sign-off by Chief Engineer.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_016"
  },
  {
    "q": "Which ICCP component must be replaced at every drydock (~2.5 years)?",
    "a": "Ag/AgCl reference electrodes - internal gel electrolyte depletes over time causing drift",
    "opts": ["MMO/Ti impressed current anodes - fully consumed after 5 years", "Main power transformer windings", "Zinc sacrificial blocks on rudder", "Ag/AgCl reference electrodes - internal gel electrolyte depletes over time causing drift"],
    "exp": "Ag/AgCl electrodes have gel electrolyte that depletes over ~2.5 years \u2192 measurement drift \u2192 wrong protection potential. MMO/Ti anodes = inert, last 20-25 years. Transformer windings = permanent. Zinc blocks are separate passive anodes, replaced as they dissolve but not on fixed 2.5-year cycle.",
    "cat": "DRYDOCK",
    "id": "T22P_017"
  },
  {
    "q": "Which PTW is required for mechanical painting inside a void space (no heat/sparks)?",
    "a": "Cold Work Permit AND Enclosed Space Entry Permit",
    "opts": ["Hot Work Permit", "Electrical Isolation Permit (EIP)", "Isolation of Safety Systems Permit", "Cold Work Permit AND Enclosed Space Entry Permit"],
    "exp": "Cold Work Permit: for non-spark, non-heat mechanical or chemical work in hazardous areas. Combined with Enclosed Space Entry Permit because void spaces = confined space with potential oxygen deficiency and toxic atmosphere. Hot work = welding/cutting. EIP = electrical LOTO. Two permits may be required simultaneously.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_018"
  },
  {
    "q": "Origin of the term 'cold ironing'?",
    "a": "Steam era: coal boilers and engines (the 'irons') allowed to go completely cold when shore power connected in port",
    "opts": ["Refers to cooling massive iron isolation transformers with cold seawater", "Grounding ship's iron hull to cold seabed to prevent static buildup", "Describes ironing out harmonic distortions in shore power grid", "Steam era: coal boilers and engines (the 'irons') allowed to go completely cold when shore power connected in port"],
    "exp": "Historical term from steam ship era. When a vessel connected to shore power in port, coal fires were extinguished and the iron engines and boilers were allowed to cool ('go cold'). Modern usage: connecting any ship to shore power eliminating need to run generators in port.",
    "cat": "COLD_IRONING",
    "id": "T22P_019"
  },
  {
    "q": "Typical HVSC standard voltages globally?",
    "a": "6.6 kV or 11 kV per IEC/IEEE 80005-1",
    "opts": ["440V or 690V (standard shipboard LV)", "220V or 110V (domestic)", "33kV or 66kV (utility transmission)", "6.6 kV or 11 kV per IEC/IEEE 80005-1"],
    "exp": "IEC/IEEE 80005-1 specifies two standard HVSC voltage levels: 6.6 kV (common in Europe and Asia) and 11 kV (used in North America and some European ports). Smaller vessels may use 440V LV shore connection but this is not HVSC. 33kV/66kV are transmission voltages, not distribution to ships.",
    "cat": "COLD_IRONING",
    "id": "T22P_020"
  },
  {
    "q": "What happens at the HVSC connection if the safety circuit pilot loop breaks?",
    "a": "Both ship and shore HV circuit breakers must open within maximum 200 ms - prevents catastrophic arc flash",
    "opts": ["Only shore breaker opens - ship keeps running on its own generation", "Pilot loop alarm sounds for 30 seconds before any breaker opens", "System automatically reduces current to 50% as a safety measure", "Both ship and shore HV circuit breakers must open within maximum 200 ms - prevents catastrophic arc flash"],
    "exp": "IEC 80005-1: safety pilot loop carries minimum 50 mA. If loop broken (plug physically pulled, fault in connection) \u2192 safety circuit fails \u2192 BOTH ship and shore HV breakers open within 200 ms. Prevents operator error of pulling live HV plug = catastrophic arc flash explosion.",
    "cat": "COLD_IRONING",
    "id": "T22P_021"
  },
  {
    "q": "Why is a double-wound isolation transformer considered mandatory when connecting a ship's unearthed electrical system to a shore power supply?",
    "a": "It prevents stray currents and severe electrolytic hull corrosion by breaking the galvanic path between the solidly earthed shore system and the ship.",
    "opts": ["It boosts the low-voltage shore supply into high-voltage (6.6kV) to match the ship's main switchboard rating.", "It acts as a giant capacitor to correct the ship's power factor while running entirely on the shore grid.", "It automatically converts the incoming shore frequency from 50 Hz to 60 Hz to protect the ship's induction motors.", "It prevents stray currents and severe electrolytic hull corrosion by breaking the galvanic path between the solidly earthed shore system and the ship."],
    "exp": "The isolation transformer provides galvanic isolation so the solidly earthed shore neutral (TN-S) does not connect to the ship's hull (IT system), preventing stray currents that cause severe electrolytic hull corrosion.",
    "cat": "COLD_IRONING",
    "id": "T22P_022"
  },
  {
    "q": "What is the fundamental electrical safety rule regarding the earth cable during a cold ironing (shore power) connection and disconnection procedure?",
    "a": "The earth cable must always be the first conductor connected and the last conductor disconnected.",
    "opts": ["The earth cable must be completely disconnected before any phase conductors are energized to prevent ground loops.", "The earth cable must be the last conductor connected and the first conductor disconnected to avoid static sparks.", "The earth cable must always be the first conductor connected and the last conductor disconnected.", "The earth cable must be connected simultaneously with the three phase conductors using a specialized 4-pin plug."],
    "exp": "Connecting the earth cable first and disconnecting it last ensures that the ship's hull is safely bonded to shore ground before any live phase conductors are handled, preventing lethal shock hazards.",
    "cat": "COLD_IRONING",
    "id": "T22P_023"
  },
  {
    "q": "If the phase sequence indicator in the shore connection box is broken, what is an acceptable alternative method for the ETO to verify correct shore phase rotation?",
    "a": "Connect the shore power at minimal load and observe the rotation direction of a three-phase motor, ensuring it runs in the normal direction.",
    "opts": ["Connect only two phases initially to observe if the synchronizing lamps flicker clockwise or counter-clockwise.", "Check the colour coding of the shore cables and match them exactly to the ship's busbar colours without further testing.", "Use a standard digital multimeter to measure the voltage difference between Phase 1 and Phase 3, looking for a negative reading.", "Connect the shore power at minimal load and observe the rotation direction of a three-phase motor, ensuring it runs in the normal direction."],
    "exp": "If no portable phase sequence meter is available, temporarily powering a non-critical three-phase motor allows visual confirmation; if it runs backwards, two phases must be swapped. Cable colors vary globally and are not reliable.",
    "cat": "COLD_IRONING",
    "id": "T22P_024"
  },
  {
    "q": "How does the electrical interlock system in the ship's shore connection box prevent accidental and dangerous paralleling of shore power with the ship's generators?",
    "a": "A normally-closed (NC) auxiliary contact from each generator ACB is wired in series with the shore breaker's closing coil, preventing closure if any generator is online.",
    "opts": ["The synchroscope is permanently bypassed, forcing the shore breaker to trip on reverse power if a generator is running.", "The shore connection box automatically triggers the ship's preferential trip system to shed all loads before allowing the shore breaker to close.", "A mechanical key is physically trapped inside the emergency generator control panel and can only be removed after a total blackout.", "A normally-closed (NC) auxiliary contact from each generator ACB is wired in series with the shore breaker's closing coil, preventing closure if any generator is online."],
    "exp": "The electrical interlock uses normally-closed contacts from the generator ACBs to break the control circuit to the shore breaker's closing coil, physically blocking it from energizing while a generator is connected.",
    "cat": "COLD_IRONING",
    "id": "T22P_025"
  },
  {
    "q": "Which international standard specifies the technical, compatibility, and testing requirements for High Voltage Shore Connection (HVSC) systems?",
    "a": "IEC/IEEE 80005-1",
    "opts": ["IEC/IEEE 80005-1", "IEC 60092-353", "IEC 61363-1", "IEC 60331-2"],
    "exp": "IEC/IEEE 80005-1 is the dedicated international standard governing High Voltage Shore Connection (HVSC) systems, outlining safe connection protocols, voltage levels, and compatibility assessments.",
    "cat": "COLD_IRONING",
    "id": "T22P_026"
  },
  {
    "q": "Under the ship's Permit to Work (PTW) system, what is the primary function of an Electrical Isolation Permit (EIP)?",
    "a": "It formally documents that Lockout/Tagout (LOTO) has been applied, the circuit is verified de-energized, and outlines the re-energization procedure.",
    "opts": ["It formally documents that Lockout/Tagout (LOTO) has been applied, the circuit is verified de-energized, and outlines the re-energization procedure.", "It certifies that the ship's main generators have been successfully synchronized with the shore power grid.", "It acts as a substitute for an enclosed space entry permit when repairing lights inside a cargo hold.", "It allows the ETO to work on live 440V switchboards without wearing arc flash PPE."],
    "exp": "The Electrical Isolation Permit (EIP) is specifically designed to enforce and document the LOTO process, ensuring equipment is safely isolated and tested for dead before work begins.",
    "cat": "PTW",
    "id": "T22P_027"
  },
  {
    "q": "What critical safety requirement must be enforced when executing a Hot Work Permit in the engine room?",
    "a": "A continuous fire watch must be stationed with an extinguisher during the work and for at least 30 minutes after completion.",
    "opts": ["All engine room ventilation fans must be turned off to prevent sparks from spreading.", "The ICCP system must be switched to maximum voltage to ground out stray welding currents.", "The ship's fixed CO2 total flooding system must be placed in auto-release mode.", "A continuous fire watch must be stationed with an extinguisher during the work and for at least 30 minutes after completion."],
    "exp": "A Hot Work Permit strictly mandates a dedicated fire watch during welding or cutting operations and for 30 minutes afterward to ensure no smouldering embers ignite a fire.",
    "cat": "PTW",
    "id": "T22P_028"
  },
  {
    "q": "Before an Enclosed Space Entry Permit can be authorized, what are the strict acceptable limits for Oxygen (O2) and Lower Explosive Limit (LEL)?",
    "a": "O2 must be 20.9% and LEL must be less than 1%.",
    "opts": ["O2 must be between 18.0% and 19.5% and LEL must be exactly 5%.", "O2 must be above 23.5% and LEL must be zero.", "O2 must be exactly 15.0% and LEL must be less than 10%.", "O2 must be 20.9% and LEL must be less than 1%."],
    "exp": "Safe entry requires an oxygen concentration of 20.9% and an LEL of less than 1% to eliminate asphyxiation and explosion risks.",
    "cat": "PTW",
    "id": "T22P_029"
  },
  {
    "q": "Which personnel requirement is absolutely mandatory during the entire duration of an enclosed space entry?",
    "a": "A dedicated standby person must remain at the entrance to maintain communication and raise the alarm if necessary.",
    "opts": ["The Chief Engineer must accompany the entrant into the space at all times.", "A certified medical officer must be stationed directly inside the space with the worker.", "Two off-duty ratings must continuously manually pump fresh air into the compartment using a bellows.", "A dedicated standby person must remain at the entrance to maintain communication and raise the alarm if necessary."],
    "exp": "A dedicated standby person stationed at the entrance is crucial for continuous monitoring, communication, and raising an immediate alarm without entering the space themselves if an emergency occurs.",
    "cat": "PTW",
    "id": "T22P_030"
  },
  {
    "q": "When preparing the ship for dry dock, why is it absolutely mandatory for the ETO to switch OFF the ICCP system?",
    "a": "Without seawater to complete the circuit, operating the ICCP in air can cause high-voltage arcing, posing a severe fire hazard near fresh paint.",
    "opts": ["Without seawater to complete the circuit, operating the ICCP in air can cause high-voltage arcing, posing a severe fire hazard near fresh paint.", "The ICCP current will rapidly drain the ship's transitional batteries while the generators are offline.", "The dry dock blocks will crush the active anodes and cause a short circuit directly to the ship's 440V busbars.", "The reference electrodes will measure a massive negative potential and automatically flood the dry dock."],
    "exp": "The ICCP system relies on seawater as the electrolyte to conduct current; running it in dry air breaks this circuit, causing the controller to ramp up voltage and creating dangerous arcs near flammable hull coatings.",
    "cat": "Drydock",
    "id": "T22P_031"
  },
  {
    "q": "Why must the alternator stator anti-condensation heaters remain continuously energized from the shore supply during a long dry dock period?",
    "a": "To maintain the winding temperature 5-10 degrees C above ambient air, preventing moisture absorption and a dangerous drop in insulation resistance.",
    "opts": ["To keep the bearing grease in a liquid state so the shaft can be turned manually by the fitters.", "To bake old insulating varnish off the copper windings in preparation for the class renewal survey.", "To maintain the winding temperature 5-10 degrees C above ambient air, preventing moisture absorption and a dangerous drop in insulation resistance.", "To generate a small reference voltage that prevents the Automatic Voltage Regulator (AVR) from losing its memory."],
    "exp": "Anti-condensation heaters keep the stator slightly warmer than the surrounding humid air, ensuring moisture does not condense on and degrade the windings insulation resistance while the machine is cold and idle.",
    "cat": "Drydock",
    "id": "T22P_032"
  },
  {
    "q": "Why is it critical for the ETO to perform baseline Insulation Resistance (IR) tests on all major electrical equipment immediately before entering dry dock?",
    "a": "To establish a baseline to compare against post-drydock readings, allowing the ETO to detect any insulation damage caused during docking operations.",
    "opts": ["To permanently discharge the capacitive energy stored in the 440V cables into the dry dock floor.", "To prove to port authorities that the ship will not consume excessive reactive power from the shore grid.", "To establish a baseline to compare against post-drydock readings, allowing the ETO to detect any insulation damage caused during docking operations.", "Because the class surveyor requires all equipment to be fully short-circuited before the dock gates can be closed."],
    "exp": "Baseline IR testing gives the ETO a before-and-after snapshot, making it easy to identify if welding, water blasting, or extended idle time in the dry dock compromised any motor or cable insulation.",
    "cat": "Drydock",
    "id": "T22P_033"
  },
  {
    "q": "What specific maintenance must the ETO perform on the propeller shaft earthing assembly during a dry dock period?",
    "a": "Inspect the carbon brush length, check spring tension, clean the slip ring surface, and verify the shaft-to-hull resistance is less than 1 ohm.",
    "opts": ["Replace the entire slip ring with a solid zinc sacrificial block to prevent bearing spark erosion.", "Inspect the carbon brush length, check spring tension, clean the slip ring surface, and verify the shaft-to-hull resistance is less than 1 ohm.", "Coat the carbon brushes in a thick layer of dielectric grease to prevent saltwater corrosion.", "Disconnect the assembly permanently so that the ICCP system can utilize the propeller as a reference electrode."],
    "exp": "Proper maintenance of the shaft earthing device involves ensuring physical contact and extremely low electrical resistance (less than 1 ohm) between the shaft and the hull to prevent bearing pitting from stray currents.",
    "cat": "Drydock",
    "id": "T22P_034"
  },
  {
    "q": "At what minimum working height does electrical maintenance legally require a Working at Height Permit?",
    "a": "Above 2 metres from a fixed surface",
    "opts": ["Above 10 metres from a fixed surface", "Above 0.5 metres from a fixed surface", "Above 5 metres from a fixed surface", "Above 2 metres from a fixed surface"],
    "exp": "Maritime safety standards generally mandate a Working at Height Permit, alongside full body harnesses and fall arrest gear, for any work conducted 2 metres or more above a solid deck or fixed surface.",
    "cat": "PTW",
    "id": "T22P_035"
  },
  {
    "q": "If a ship with a 60 Hz electrical system connects to a 50 Hz shore power grid without using a frequency converter, what will be the primary effect on the ship's induction motors?",
    "a": "They will run approximately 17% slower, significantly reducing the output flow of critical cooling pumps and ventilation fans.",
    "opts": ["They will run 20% faster, risking severe mechanical damage to the pump impellers and overcurrent trips.", "They will run approximately 17% slower, significantly reducing the output flow of critical cooling pumps and ventilation fans.", "They will switch to a regenerative braking mode, feeding power back into the shore grid.", "They will immediately reverse their direction of rotation regardless of the phase sequence."],
    "exp": "The synchronous speed of an AC induction motor is directly proportional to frequency (Ns = 120f/P). Dropping from 60 Hz to 50 Hz slows the motors by roughly 17%, crippling the output of centrifugal pumps and fans.",
    "cat": "COLD_IRONING",
    "id": "T22P_036"
  },
  {
    "q": "How does a main engine Wrong Way Alarm logically determine the actual direction of shaft rotation?",
    "a": "It uses two inductive proximity sensors mounted 90 degrees apart; the sequence in which they pulse determines the rotation direction.",
    "opts": ["It uses a piezoelectric vibration sensor that measures the thrust bearing pressure.", "It measures the polarity of the DC tachometer generator connected to the free end of the shaft.", "It uses two inductive proximity sensors mounted 90 degrees apart; the sequence in which they pulse determines the rotation direction.", "It calculates the slip frequency of the shaft using a single optical encoder."],
    "exp": "The Wrong Way alarm uses two inductive proximity sensors mounted at an angle to read shaft markers. The order in which the pulses arrive at the PLC identifies whether the shaft is turning ahead or astern.",
    "cat": "Diagnostic",
    "id": "T22P_037"
  },
  {
    "q": "When a replacement motor arrives from shore just before departure, what is the most critical electrical test the ETO must perform before installation?",
    "a": "A 500V DC megger test to ensure the insulation resistance between phases and the frame is greater than 1 Mohm.",
    "opts": ["A Polarization Index (PI) test lasting exactly 10 minutes to verify the moisture content.", "A high-potential (Hi-pot) test at 5000V AC to check the dielectric strength of the new varnish.", "A 500V DC megger test to ensure the insulation resistance between phases and the frame is greater than 1 Mohm.", "A phase sequence test to ensure the U, V, and W terminals match the ship's busbars."],
    "exp": "Insulation resistance is critical because the motor may have absorbed moisture during transport or storage; it must read greater than 1 Mohm before it can be safely energized.",
    "cat": "MotorCheck",
    "id": "T22P_038"
  },
  {
    "q": "How can an ETO identify which terminals belong to the same phase winding on a rewound 3-phase motor with completely missing terminal labels?",
    "a": "By using a multimeter on the resistance/continuity setting to find pairs of terminals that show continuity.",
    "opts": ["By shorting all terminals together and using a clamp meter to measure the residual magnetism.", "By connecting a 440V supply to random pairs until the motor shaft begins to turn smoothly.", "By applying a 500V DC megger across random pairs to find the ones with infinite resistance.", "By using a multimeter on the resistance/continuity setting to find pairs of terminals that show continuity."],
    "exp": "A simple continuity or resistance test will group the six terminals into three distinct pairs, each representing the two ends of a single phase winding. Further tests with a low voltage DC battery (kick test) can determine the polarity of each winding.",
    "cat": "MotorCheck",
    "id": "T22P_039"
  },
  {
    "q": "What is the specific purpose of an Isolation of Safety Systems Permit onboard a vessel?",
    "a": "It formally authorizes the temporary disabling of fire detectors or sprinklers during maintenance, ensuring a fire watch is instituted and the zone is logged.",
    "opts": ["It authorizes crew members to enter an enclosed space without carrying an emergency escape breathing device (EEBD).", "It permits the Chief Engineer to bypass the main engine overspeed trip during a sea trial.", "It formally authorizes the temporary disabling of fire detectors or sprinklers during maintenance, ensuring a fire watch is instituted and the zone is logged.", "It allows the ETO to permanently disconnect the emergency generator from the main switchboard."],
    "exp": "This specific permit ensures that when a safety system like a smoke detector is temporarily disabled to prevent false alarms during work, compensatory measures like a human fire watch are formally put in place.",
    "cat": "PTW",
    "id": "T22P_040"
  },
  {
    "q": "What type of Permit to Work is required for mechanical dismantling or painting inside a void space where no heat or sparks are generated?",
    "a": "Cold Work Permit (and typically an Enclosed Space Entry Permit)",
    "opts": ["Cold Work Permit (and typically an Enclosed Space Entry Permit)", "Hot Work Permit", "Isolation of Safety Systems Permit", "Electrical Isolation Permit (EIP)"],
    "exp": "A Cold Work Permit authorizes non-sparking, non-heat-generating mechanical or chemical work in hazardous or confined areas, combined with an enclosed space permit if applicable.",
    "cat": "PTW",
    "id": "T22P_041"
  },
  {
    "q": "What is the primary environmental benefit of 'Cold Ironing' in port?",
    "a": "It eliminates local diesel exhaust emissions from the ship's generators",
    "opts": ["It prevents static electricity build-up on the hull", "It reduces the ship's total electrical consumption", "It eliminates local diesel exhaust emissions from the ship's generators", "It cools the main engine faster"],
    "exp": "By shutting down the auxiliary generators and taking shore power, the ship emits zero SOx, NOx, and particulates into the local port environment.",
    "cat": "ColdIroning",
    "id": "T22P_042"
  },
  {
    "q": "Where does the term 'Cold Ironing' originate?",
    "a": "From the steam age, when ships let their coal-fired boilers and engines ('irons') go completely cold during shore leave",
    "opts": ["From the steam age, when ships let their coal-fired boilers and engines ('irons') go completely cold during shore leave", "From the process of chilling the ship's hull in freezing waters", "From the mandatory use of cold-rolled steel in shore cables", "From the procedure of disconnecting the electric irons in the laundry"],
    "exp": "The term is a historical metaphor describing a ship's machinery going completely cold when connected to shore services.",
    "cat": "ColdIroning",
    "id": "T22P_043"
  },
  {
    "q": "What is the most critical safety feature located inside the shore connection box?",
    "a": "An electrical interlock preventing the shore breaker from closing if any generator ACB is closed",
    "opts": ["An electrical interlock preventing the shore breaker from closing if any generator ACB is closed", "A surge arrester for lightning strikes", "A manual changeover switch for 24V DC", "A high-capacity fire extinguisher"],
    "exp": "The interlock prevents the catastrophic accidental paralleling of an unsynchronized shore grid with the ship's running generators.",
    "cat": "ColdIroning",
    "id": "T22P_044"
  },
  {
    "q": "Which component in the shore connection box confirms the incoming R-Y-B alignment?",
    "a": "The phase sequence indicator",
    "opts": ["The voltmeter", "The frequency meter", "The earth fault indicator", "The phase sequence indicator"],
    "exp": "The phase sequence indicator confirms the shore supply's rotation matches the ship's, ensuring 3-phase motors turn in the correct direction.",
    "cat": "ColdIroning",
    "id": "T22P_045"
  },
  {
    "q": "What happens if a ship connects to shore power with an incorrect phase sequence?",
    "a": "All three-phase induction motors on the ship will run in reverse",
    "opts": ["All three-phase induction motors on the ship will run in reverse", "The voltage will double", "The shore breaker will trip on overcurrent immediately", "The ship's switchboard will immediately explode"],
    "exp": "Swapped phases reverse the magnetic field rotation in induction motors, causing pumps to push instead of pull and compressors to run backward.",
    "cat": "ColdIroning",
    "id": "T22P_046"
  },
  {
    "q": "If the built-in phase sequence indicator is broken, what is the safest alternative method to check phase rotation?",
    "a": "Use a calibrated portable phase sequence meter across the incoming shore terminals",
    "opts": ["Assume the shore facility always wires it correctly", "Use a calibrated portable phase sequence meter across the incoming shore terminals", "Measure the voltage between any two phases", "Connect the power and listen to the engine room fans"],
    "exp": "A portable rotation meter provides a safe, definitive reading of the phase order before any breakers are closed.",
    "cat": "ColdIroning",
    "id": "T22P_047"
  },
  {
    "q": "If no portable phase sequence meter is available, what is the 'bump test' method?",
    "a": "Connect minimal load, briefly start a small 3-phase motor, and observe its physical rotation direction",
    "opts": ["Short two phases together quickly with a fuse", "Run the emergency generator and watch the synchroscope", "Connect minimal load, briefly start a small 3-phase motor, and observe its physical rotation direction", "Start the main engine on air and check the tachometer"],
    "exp": "By isolating the bus and only bumping one visible fan motor, the ETO can verify if it spins the correct way without risking major pumps.",
    "cat": "ColdIroning",
    "id": "T22P_048"
  },
  {
    "q": "If the phase sequence is discovered to be reversed, how is it corrected?",
    "a": "By swapping any two of the three incoming phase conductors at the shore connection socket",
    "opts": ["By installing a phase inverter transformer", "By swapping any two of the three incoming phase conductors at the shore connection socket", "By swapping all three phase conductors", "By reversing the generator cables"],
    "exp": "Swapping any two legs of a 3-phase supply will reverse the magnetic field rotation back to standard.",
    "cat": "ColdIroning",
    "id": "T22P_049"
  },
  {
    "q": "When connecting heavy shore power cables, what is the strict rule regarding the earth conductor?",
    "a": "It must be connected first and disconnected last",
    "opts": ["It is only connected if it is raining", "It must be connected first and disconnected last", "It must be connected last and disconnected first", "It should be connected simultaneously with phase cables"],
    "exp": "Connecting earth first ensures that if a phase cable is accidentally live and faults to the chassis, the fault current safely trips the shore breaker.",
    "cat": "ColdIroning",
    "id": "T22P_050"
  },
  {
    "q": "Why MUST the ICCP system be switched off prior to connecting shore power?",
    "a": "To prevent stray ICCP DC current from flowing through the shore earth cable and causing severe galvanic corrosion to the jetty or ship",
    "opts": ["To save power so the shore cables don't overload", "Because the ICCP only runs on generator power", "To prevent stray ICCP DC current from flowing through the shore earth cable and causing severe galvanic corrosion to the jetty or ship", "To reset the ICCP reference electrodes"],
    "exp": "The shore earth ties the ship's hull to the port's earth grid. If ICCP is on, it will use this path, creating a massive stray current loop.",
    "cat": "ColdIroning",
    "id": "T22P_051"
  },
  {
    "q": "What component is sometimes fitted in the shore earth connection to safely block low-voltage stray currents while allowing fault currents to pass?",
    "a": "A galvanic isolator",
    "opts": ["A surge arrester", "A galvanic isolator", "A heavy-duty fuse", "A high-pass filter"],
    "exp": "Galvanic isolators use back-to-back diodes. They block the 1-2V of stray galvanic current but instantly pass a 440V fault current to ground.",
    "cat": "ColdIroning",
    "id": "T22P_052"
  },
  {
    "q": "If a ship is rated for 60Hz and the shore supply is 50Hz, what equipment is mandatory for cold ironing?",
    "a": "A rotary or static frequency converter",
    "opts": ["A standard step-down transformer", "A larger shore connection box", "A rotary or static frequency converter", "A pure sine wave filter"],
    "exp": "A transformer cannot change frequency. A frequency converter (like a massive VFD) is required to synthesize 60Hz from 50Hz mains.",
    "cat": "ColdIroning",
    "id": "T22P_053"
  },
  {
    "q": "What standard defines the heavy-duty industrial plugs and sockets used for low-voltage shore connections?",
    "a": "IEC 60309",
    "opts": ["ISO 9001", "SOLAS Chapter III", "IEEE 802.3", "IEC 60309"],
    "exp": "IEC 60309 standardizes the large, colour-coded pin-and-sleeve connectors used globally for industrial marine connections.",
    "cat": "ColdIroning",
    "id": "T22P_054"
  },
  {
    "q": "What is the very first administrative step before preparing to connect shore power?",
    "a": "Inform the Master, Chief Engineer, and Officer of the Watch to obtain permission",
    "opts": ["Inform the Master, Chief Engineer, and Officer of the Watch to obtain permission", "Open the shore connection box", "Turn off the main generators", "Plug the cable in"],
    "exp": "Connecting shore power alters the vessel's readiness and safety status; senior command must authorize the operation.",
    "cat": "ColdIroning",
    "id": "T22P_055"
  },
  {
    "q": "How does the generator interlock physically prevent the shore breaker from closing?",
    "a": "An auxiliary Normally Closed (NC) contact on the generator ACB breaks the closing coil circuit of the shore breaker when the generator is online",
    "opts": ["An auxiliary Normally Closed (NC) contact on the generator ACB breaks the closing coil circuit of the shore breaker when the generator is online", "A software timer delays the breaker", "A mechanical padlock drops into place", "It forces the shore voltage to zero"],
    "exp": "If ANY generator ACB is closed, its auxiliary NC contact opens, cutting power to the shore breaker's closing mechanism.",
    "cat": "ColdIroning",
    "id": "T22P_056"
  },
  {
    "q": "When restoring ship's power from shore power, what is the procedure if 'seamless transfer' (synchronizing) is NOT supported?",
    "a": "Open the shore breaker (blackout the ship), start the generator, and close the generator ACB",
    "opts": ["Start the emergency generator in parallel", "Wait for the shore voltage to drop slowly", "Close the generator ACB, then open the shore breaker", "Open the shore breaker (blackout the ship), start the generator, and close the generator ACB"],
    "exp": "Without synchronizing gear for the shore connection, a brief 'break-before-make' blackout is mandatory to prevent an explosive short circuit.",
    "cat": "ColdIroning",
    "id": "T22P_057"
  },
  {
    "q": "Why is it important to transfer load to the shore supply 'gradually'?",
    "a": "To prevent a massive sudden inrush current that could collapse the shore voltage or trip the dockyard fuses",
    "opts": ["To test the earth fault relay slowly", "To warm up the ship's cables", "To prevent a massive sudden inrush current that could collapse the shore voltage or trip the dockyard fuses", "To allow the ICCP system to reset"],
    "exp": "Shore grids have limits. Dumping 1000kW of pump load instantly onto a cold shore cable causes severe voltage dips.",
    "cat": "ColdIroning",
    "id": "T22P_058"
  },
  {
    "q": "During a drydock cold ironing evolution, what is the standard status of the emergency generator?",
    "a": "Placed on standby in MANUAL mode to prevent unexpected auto-starts while mechanics work on it",
    "opts": ["Completely disconnected and removed", "Placed on standby in MANUAL mode to prevent unexpected auto-starts while mechanics work on it", "Wired directly into the shore supply box", "Running continuously to share the load"],
    "exp": "A sudden shore power trip shouldn't trigger an automatic roaring diesel engine if fitters have their hands near the belts.",
    "cat": "ColdIroning",
    "id": "T22P_059"
  },
  {
    "q": "If a ship draws heavy current through a 100-meter shore cable, what electrical phenomenon might cause motors to stall?",
    "a": "Voltage drop (V=IR) across the long, resistive shore cable",
    "opts": ["Phase sequence reversal", "Frequency drop from the long cable", "Capacitive reactance spikes", "Voltage drop (V=IR) across the long, resistive shore cable"],
    "exp": "Long cables have high resistance. Pulling 400A through them can drop a 440V supply down to 380V, starving induction motors of power.",
    "cat": "ColdIroning",
    "id": "T22P_060"
  },
  {
    "q": "What safety equipment must an ETO wear when physically plugging in a high-voltage shore connection cable?",
    "a": "High-voltage insulating gloves, arc flash visor, and appropriate flash-resistant clothing",
    "opts": ["Only safety boots are required", "High-voltage insulating gloves, arc flash visor, and appropriate flash-resistant clothing", "A standard boiler suit and safety glasses", "A chemical hazmat suit"],
    "exp": "Handling massive HV cables carries a risk of arc flash or insulation failure; full HV PPE is mandatory.",
    "cat": "ColdIroning",
    "id": "T22P_061"
  },
  {
    "q": "What is the primary function of the Voltmeter inside the shore connection box?",
    "a": "To confirm the incoming shore voltage is present and matches the ship's required system voltage before closing the breaker",
    "opts": ["To check the battery level of the emergency generator", "To count the frequency cycles", "To measure the power factor of the shore grid", "To confirm the incoming shore voltage is present and matches the ship's required system voltage before closing the breaker"],
    "exp": "Connecting 440V shore power to a 220V ship bus would destroy all connected electronics instantly.",
    "cat": "ColdIroning",
    "id": "T22P_062"
  },
  {
    "q": "What does AMP stand for in the context of port operations?",
    "a": "Alternative Maritime Power",
    "opts": ["Asynchronous Marine Propulsion", "Auxiliary Motor Protection", "Automated Mains Paralleling", "Alternative Maritime Power"],
    "exp": "AMP is the regulatory term used by authorities (like CARB in California) for mandatory shore power connections.",
    "cat": "ColdIroning",
    "id": "T22P_063"
  },
  {
    "q": "Why is the shore connection box usually located near the gangway or main deck edge?",
    "a": "To minimize the distance heavy, stiff shore cables must be dragged across the ship's deck",
    "opts": ["Because the main switchboard is always located there", "To minimize the distance heavy, stiff shore cables must be dragged across the ship's deck", "To be close to the bridge", "Because it must be exposed to rain for cooling"],
    "exp": "Shore power cables are extremely heavy and hard to handle. Putting the box near the boarding point makes connection feasible.",
    "cat": "ColdIroning",
    "id": "T22P_064"
  },
  {
    "q": "What log entry is mandatory after successfully switching to shore power?",
    "a": "Time of connection, incoming voltage, frequency, phase check confirmation, and shore current drawn",
    "opts": ["Time of connection, incoming voltage, frequency, phase check confirmation, and shore current drawn", "The fuel level of the ship", "The name of the port electrician", "The weather conditions"],
    "exp": "A formal electrical log entry proves due diligence and safety checks were completed before handing over the ship's power.",
    "cat": "ColdIroning",
    "id": "T22P_065"
  },
  {
    "q": "If shore power is supplying the ship, what happens to the ship's Earth Fault Indicator?",
    "a": "It now monitors the combined insulation resistance of the ship's grid AND the shore supply transformer",
    "opts": ["It now monitors the combined insulation resistance of the ship's grid AND the shore supply transformer", "It reads zero ohms permanently", "It stops working completely", "It trips the shore breaker instantly"],
    "exp": "Because the grids are linked, an earth fault on the shore side will show up as a fault on the ship's MSB indicator.",
    "cat": "ColdIroning",
    "id": "T22P_066"
  },
  {
    "q": "Can you run cargo operations (cranes/pumps) purely on shore power?",
    "a": "Yes, provided the shore connection's Ampere rating is large enough to handle the massive peak loads of cargo machinery",
    "opts": ["No, shore power is only for lighting", "No, cargo pumps require DC power", "Yes, provided the shore connection's Ampere rating is large enough to handle the massive peak loads of cargo machinery", "Yes, but only in 50Hz countries"],
    "exp": "If the shore terminal supplies enough kVA, full cargo operations can proceed without running the ship's diesels.",
    "cat": "ColdIroning",
    "id": "T22P_067"
  },
  {
    "q": "What happens if the shore power plug is accidentally kicked out or dropped into the water while live?",
    "a": "The pilot pins in the plug disconnect first, instantly tripping the shore breaker before the main power pins separate, preventing an arc",
    "opts": ["The water catches on fire", "The ship's emergency generator explodes", "The pilot pins in the plug disconnect first, instantly tripping the shore breaker before the main power pins separate, preventing an arc", "The plug locks itself in place magnetically"],
    "exp": "Modern HV and LV shore plugs use short pilot pins. If the plug pulls out, the control circuit breaks first, killing power before the massive copper pins draw an explosive arc.",
    "cat": "ColdIroning",
    "id": "T22P_068"
  },
  {
    "q": "If a ship has an integrated AMP system, what component lowers the heavy shore cables down to the dock?",
    "a": "A dedicated cable management system (cable reel winch) permanently installed on the ship",
    "opts": ["The anchor windlass", "A dedicated cable management system (cable reel winch) permanently installed on the ship", "A helicopter", "The life raft davit"],
    "exp": "Modern vessels designed for frequent cold ironing have motorized reels to safely spool the massive high-voltage cables out to the pier.",
    "cat": "ColdIroning",
    "id": "T22P_069"
  },
  {
    "q": "Why must the shore connection breaker have an Under-Voltage Trip (UVT)?",
    "a": "To trip and protect the ship's motors from stalling and burning out if the port experiences a severe brownout or power loss",
    "opts": ["To trip and protect the ship's motors from stalling and burning out if the port experiences a severe brownout or power loss", "To automatically start the main engine", "To charge the batteries faster", "To prevent lightning strikes"],
    "exp": "A severe voltage dip from the shore grid will cause induction motors to draw massive current. The UVT safely isolates the ship.",
    "cat": "ColdIroning",
    "id": "T22P_070"
  },
  {
    "q": "When disconnecting from shore power, what is the final step after opening the breaker and removing the phase cables?",
    "a": "Disconnecting the shore earth cable",
    "opts": ["Starting the main engine", "Testing the phase sequence", "Turning on the ICCP system", "Disconnecting the shore earth cable"],
    "exp": "The earth connection must be the absolute last thing removed to maintain a safe path for fault currents until all power is totally cleared.",
    "cat": "ColdIroning",
    "id": "T22P_071"
  },
  {
    "q": "What is the specific purpose of a 'Wrong Way Alarm' on a ship's main engine?",
    "a": "To instantly warn the bridge and ECR if the engine starts rotating in the opposite direction to the telegraph command",
    "opts": ["To alert if the ship drifts off its GPS course", "To detect if the engine is using the wrong type of fuel", "To warn if the propeller is turning too fast", "To instantly warn the bridge and ECR if the engine starts rotating in the opposite direction to the telegraph command"],
    "exp": "If 'Ahead' is commanded but the massive diesel engine catches on 'Astern' air, it will propel the ship backward, risking collision.",
    "cat": "WrongWayAlarm",
    "id": "T22P_072"
  },
  {
    "q": "Where is the Wrong Way Alarm typically fitted besides the main engine?",
    "a": "On the steering gear hydraulic pumps",
    "opts": ["On the steering gear hydraulic pumps", "On the emergency generator", "On the galley exhaust fans", "On the ballast water treatment plant"],
    "exp": "If a steering gear pump runs backward (e.g., due to reversed phase sequence), it pumps hydraulic fluid the wrong way, turning the rudder opposite to the wheel command.",
    "cat": "WrongWayAlarm",
    "id": "T22P_073"
  },
  {
    "q": "What kind of sensors are typically used to detect shaft rotation direction?",
    "a": "Two magnetic proximity sensors (or Hall effect sensors) mounted closely together near the flywheel gear teeth",
    "opts": ["A single optical laser", "A gyroscope on the shaft", "A mechanical friction pad", "Two magnetic proximity sensors (or Hall effect sensors) mounted closely together near the flywheel gear teeth"],
    "exp": "These sensors detect the passing of metal teeth or bolt heads, sending electrical pulses to the control logic.",
    "cat": "WrongWayAlarm",
    "id": "T22P_074"
  },
  {
    "q": "How do two proximity sensors determine the DIRECTION of rotation?",
    "a": "By their phase offset (90 degrees); the logic checks whether Sensor A pulses before Sensor B, or B before A",
    "opts": ["By their phase offset (90 degrees); the logic checks whether Sensor A pulses before Sensor B, or B before A", "By sensing the temperature of the shaft", "By counting the total number of pulses", "By measuring the voltage difference between them"],
    "exp": "This is called quadrature decoding. The order in which the overlapping pulses arrive guarantees absolute proof of direction.",
    "cat": "WrongWayAlarm",
    "id": "T22P_075"
  },
  {
    "q": "Why is a single proximity sensor insufficient for a Wrong Way Alarm?",
    "a": "A single sensor can only measure speed (RPM), it cannot detect which way the shaft is turning",
    "opts": ["A single sensor uses too much power", "A single sensor cannot handle high RPMs", "A single sensor can only measure speed (RPM), it cannot detect which way the shaft is turning", "A single sensor cannot detect metal"],
    "exp": "One sensor just outputs a train of pulses. Without a second staggered sensor to provide a timing reference, direction is invisible.",
    "cat": "WrongWayAlarm",
    "id": "T22P_076"
  },
  {
    "q": "How quickly must the Wrong Way Alarm activate upon a faulty start?",
    "a": "Almost instantly, typically within 2 to 3 shaft revolutions",
    "opts": ["After the ship has moved 10 meters", "Within 30 seconds", "Almost instantly, typically within 2 to 3 shaft revolutions", "When the engine reaches full speed"],
    "exp": "The system must catch the error immediately so the engine control system can abort the start before significant torque is developed.",
    "cat": "WrongWayAlarm",
    "id": "T22P_077"
  },
  {
    "q": "What action occurs when the Main Engine Wrong Way Alarm triggers?",
    "a": "A loud alarm sounds on the bridge, and the engine control system automatically stops the engine and initiates a restart in the correct direction",
    "opts": ["The telegraph locks in place", "A loud alarm sounds on the bridge, and the engine control system automatically stops the engine and initiates a restart in the correct direction", "The main circuit breaker trips", "The ship's anchor automatically drops"],
    "exp": "It acts as an immediate interlock to puncture the fuel pumps, stopping the reverse rotation, and attempting to correct the error.",
    "cat": "WrongWayAlarm",
    "id": "T22P_078"
  },
  {
    "q": "What is the difference between a 'Telegraph Mismatch' alarm and a 'Wrong Way' alarm?",
    "a": "Mismatch means ECR acknowledged a different command than the Bridge ordered; Wrong Way means the physical engine is actually rotating opposite to the command",
    "opts": ["They are exactly the same thing", "Mismatch is for speed, Wrong Way is for direction", "Mismatch means ECR acknowledged a different command than the Bridge ordered; Wrong Way means the physical engine is actually rotating opposite to the command", "Mismatch is electrical, Wrong Way is mechanical"],
    "exp": "Mismatch is a communication error between operators. Wrong Way is a dangerous physical reality of the machine.",
    "cat": "WrongWayAlarm",
    "id": "T22P_079"
  },
  {
    "q": "What must the Officer of the Watch (OOW) do if the Wrong Way alarm sounds during a critical manoeuvre?",
    "a": "Acknowledge the alarm, immediately command STOP on the telegraph, and inform the Master and Engine Control Room",
    "opts": ["Push the telegraph to Full Ahead", "Ignore it and wait for it to fix itself", "Sound the abandon ship alarm", "Acknowledge the alarm, immediately command STOP on the telegraph, and inform the Master and Engine Control Room"],
    "exp": "The OOW must manually intervene to stop the erratic engine if the automation hasn't already done so, to prevent a collision.",
    "cat": "WrongWayAlarm",
    "id": "T22P_080"
  },
  {
    "q": "During routine maintenance, how can the ETO test the Wrong Way Alarm without starting the main engine?",
    "a": "By putting the telegraph 'Ahead', then manually passing a piece of metal rapidly across Sensor B then Sensor A to simulate reverse rotation",
    "opts": ["By disconnecting the power to the sensors", "By pushing the test button on the MSB", "By reversing the ship's battery", "By putting the telegraph 'Ahead', then manually passing a piece of metal rapidly across Sensor B then Sensor A to simulate reverse rotation"],
    "exp": "Swiping a wrench across the inductive sensors in the 'wrong' order tricks the PLC into thinking the shaft just spun backward.",
    "cat": "WrongWayAlarm",
    "id": "T22P_081"
  },
  {
    "q": "What is a common cause of nuisance (false) Wrong Way alarms?",
    "a": "An excessively large air gap between the proximity sensors and the flywheel gear teeth",
    "opts": ["The ship rolling in heavy seas", "An excessively large air gap between the proximity sensors and the flywheel gear teeth", "Using low-sulphur fuel oil", "High engine room temperature"],
    "exp": "If the gap is too large, the sensors miss pulses, scrambling the quadrature logic and causing false direction readings.",
    "cat": "WrongWayAlarm",
    "id": "T22P_082"
  },
  {
    "q": "What is the typical air gap required for a magnetic proximity sensor on a flywheel?",
    "a": "Usually 1.0 to 2.5 mm, defined precisely by the manufacturer",
    "opts": ["Usually 1.0 to 2.5 mm, defined precisely by the manufacturer", "0 mm (touching the metal)", "10 to 15 mm", "5 to 10 cm"],
    "exp": "The sensor must be close enough to detect the magnetic field disturbance of the passing tooth, but far enough not to be smashed by vibrations.",
    "cat": "WrongWayAlarm",
    "id": "T22P_083"
  },
  {
    "q": "Why is the Wrong Way Alarm critical for a Fixed Pitch Propeller (FPP) ship but less relevant for a Controllable Pitch Propeller (CPP) ship?",
    "a": "FPP ships must reverse the physical engine rotation to go astern; CPP ships keep the engine spinning one way and twist the blades",
    "opts": ["FPP ships must reverse the physical engine rotation to go astern; CPP ships keep the engine spinning one way and twist the blades", "FPP ships are faster", "CPP ships do not have alarms", "FPP ships run on AC, CPP on DC"],
    "exp": "A CPP engine never reverses rotation, so an engine wrong way alarm isn't applicable (though the pitch direction is monitored).",
    "cat": "WrongWayAlarm",
    "id": "T22P_084"
  },
  {
    "q": "How does a 'variable reluctance' sensor differ from a standard inductive proximity switch in this application?",
    "a": "It generates its own AC voltage pulse when a gear tooth passes, requiring no external power supply to the sensor head",
    "opts": ["It requires a 440V supply", "It only works in a vacuum", "It generates its own AC voltage pulse when a gear tooth passes, requiring no external power supply to the sensor head", "It uses a laser beam"],
    "exp": "A permanent magnet inside a coil generates a tiny voltage spike when iron sweeps past it. It's highly robust for dirty engine rooms.",
    "cat": "WrongWayAlarm",
    "id": "T22P_085"
  },
  {
    "q": "If the Wrong Way alarm activates on the Steering Gear pump motor after shore power connection, what is the cause?",
    "a": "The shore power phase sequence was connected incorrectly (reversed R-Y-B), causing the 3-phase motor to run backward",
    "opts": ["The hydraulic fluid is empty", "The pump has a blown fuse", "The shore power phase sequence was connected incorrectly (reversed R-Y-B), causing the 3-phase motor to run backward", "The steering wheel is broken"],
    "exp": "This is the classic symptom of a bad shore connection. The alarm saves the steering gear from pumping backwards.",
    "cat": "WrongWayAlarm",
    "id": "T22P_086"
  },
  {
    "q": "Is the Wrong Way Alarm active continuously while the engine is running at full speed?",
    "a": "Yes, it constantly monitors direction, though a reversal at full speed is physically impossible without catastrophic failure",
    "opts": ["Yes, it constantly monitors direction, though a reversal at full speed is physically impossible without catastrophic failure", "No, it only works during starting", "No, it turns off after 100 RPM", "Yes, but it only checks every 5 minutes"],
    "exp": "The logic circuit is always active, confirming the pulse sequence matches the telegraph lever state.",
    "cat": "WrongWayAlarm",
    "id": "T22P_087"
  },
  {
    "q": "What logic device inside the alarm panel processes the signals from Sensor A and Sensor B?",
    "a": "A quadrature decoder or a D-type Flip-Flop logic circuit",
    "opts": ["A simple AND gate", "A quadrature decoder or a D-type Flip-Flop logic circuit", "A high-pass frequency filter", "An analog to digital converter"],
    "exp": "A flip-flop uses the rising edge of Sensor A to 'clock' the state of Sensor B. If B is 1, it's forward; if B is 0, it's reverse.",
    "cat": "WrongWayAlarm",
    "id": "T22P_088"
  },
  {
    "q": "If a ship's engine normally rotates clockwise for 'Ahead', what does the Wrong Way system output if it detects counter-clockwise rotation while the telegraph is at 'Ahead'?",
    "a": "It triggers the Wrong Way Alarm relay, sounding the siren and dropping the safety interlock",
    "opts": ["It automatically reverses the ship's rudder", "It triggers the Wrong Way Alarm relay, sounding the siren and dropping the safety interlock", "It ignores the rotation until the ship speeds up", "It flashes a green light"],
    "exp": "Clockwise rotation must match the 'Ahead' command logic state. Any mismatch drops the safety relay.",
    "cat": "WrongWayAlarm",
    "id": "T22P_089"
  },
  {
    "q": "Can the Wrong Way Alarm be bypassed if it is malfunctioning?",
    "a": "Usually yes, via a secure override switch in the ECR, allowing the engine to be started manually under direct human observation",
    "opts": ["Usually yes, via a secure override switch in the ECR, allowing the engine to be started manually under direct human observation", "No, SOLAS forbids bypassing it", "No, the ship must be towed", "Yes, but only by the Chief Engineer pulling a fuse"],
    "exp": "To prevent a dead ship scenario due to a broken $50 sensor, critical safety systems have sealed overrides for manual operation.",
    "cat": "WrongWayAlarm",
    "id": "T22P_090"
  },
  {
    "q": "Why is keeping the proximity sensor heads clean of metal shavings critical?",
    "a": "Metal dust sticks to the magnetic sensor face, 'blinding' it and causing it to output a constant signal instead of pulses",
    "opts": ["The shavings will catch fire", "Metal dust sticks to the magnetic sensor face, 'blinding' it and causing it to output a constant signal instead of pulses", "The shavings create a short circuit to 440V", "The shavings will scratch the flywheel"],
    "exp": "A blinded sensor misses the gear teeth, breaking the quadrature sequence and causing false alarms.",
    "cat": "WrongWayAlarm",
    "id": "T22P_091"
  },
  {
    "q": "What happens if Sensor A and Sensor B are accidentally wired backward during a replacement?",
    "a": "The system will read reverse when going forward, causing a Wrong Way alarm every time a correct start is attempted",
    "opts": ["The system will read reverse when going forward, causing a Wrong Way alarm every time a correct start is attempted", "The alarm will be permanently silenced", "The sensors will short out and burn", "The engine will physically start backwards"],
    "exp": "Swapping the A and B pulse trains inverts the logic direction. The ETO simply swaps the wires back at the terminal block.",
    "cat": "WrongWayAlarm",
    "id": "T22P_092"
  },
  {
    "q": "Is the Wrong Way Alarm required by classification societies?",
    "a": "Yes, it is a mandatory safety feature for directly reversible main engines and critical pumps",
    "opts": ["No, it is an optional extra for passenger ships", "Yes, it is a mandatory safety feature for directly reversible main engines and critical pumps", "Only on ships built after 2020", "No, it is only required for submarines"],
    "exp": "Class rules (like DNV, LR) require positive proof of direction to prevent catastrophic manoeuvring failures.",
    "cat": "WrongWayAlarm",
    "id": "T22P_093"
  },
  {
    "q": "What is the typical output signal of an industrial magnetic proximity sensor used for this alarm?",
    "a": "A 24V DC square wave pulse train",
    "opts": ["A continuous 5V DC signal", "A 220V AC sine wave", "A 4-20mA analog signal", "A 24V DC square wave pulse train"],
    "exp": "As each tooth passes, the sensor switches 24V on and off sharply, creating a crisp digital pulse for the PLC.",
    "cat": "WrongWayAlarm",
    "id": "T22P_094"
  },
  {
    "q": "When does the bridge Wrong Way alarm panel illuminate with a red flashing light?",
    "a": "Immediately upon the logic detecting a rotation direction mismatch",
    "opts": ["Immediately upon the logic detecting a rotation direction mismatch", "When the engine is running smoothly", "When the telegraph is moved", "When the ship exceeds 10 knots"],
    "exp": "The red flasher alerts the navigator that the propulsion is failing to execute the commanded evasive or docking manoeuvre.",
    "cat": "WrongWayAlarm",
    "id": "T22P_095"
  },
  {
    "q": "How does the engine automation use the Wrong Way signal during a 'Crash Astern' manoeuvre?",
    "a": "It waits until the forward RPM drops low enough, injects braking air, and only injects fuel once the Wrong Way sensors confirm the shaft is turning astern",
    "opts": ["It waits until the forward RPM drops low enough, injects braking air, and only injects fuel once the Wrong Way sensors confirm the shaft is turning astern", "It sounds the alarm continuously until stopped", "It uses the signal to drop the anchor", "It ignores the signal entirely during emergencies"],
    "exp": "Injecting fuel while the shaft is still spinning forward (due to water dragging the prop) would destroy the engine. The sensors give the green light.",
    "cat": "WrongWayAlarm",
    "id": "T22P_096"
  },
  {
    "q": "What is the consequence of a broken cable connecting the Wrong Way sensors to the ECR?",
    "a": "The system loses pulses, triggers a sensor failure alarm, and may prevent the engine from starting in 'Auto' mode",
    "opts": ["The ship's rudder jams hard over", "The engine speeds up uncontrollably", "The main breaker trips instantly", "The system loses pulses, triggers a sensor failure alarm, and may prevent the engine from starting in 'Auto' mode"],
    "exp": "Without pulse feedback, the safety interlock fails-safe, demanding manual intervention to move the ship.",
    "cat": "WrongWayAlarm",
    "id": "T22P_097"
  },
  {
    "q": "Where are the sensor pulse cables typically routed to avoid electromagnetic interference?",
    "a": "Through shielded twisted-pair cables, isolated from high-power AC cables",
    "opts": ["Attached to the ship's antenna", "Inside the main water pipes", "Through shielded twisted-pair cables, isolated from high-power AC cables", "Wrapped around the generator output"],
    "exp": "The sharp square waves are sensitive to noise. Shielding prevents 60Hz hum from creating false 'extra' teeth in the logic.",
    "cat": "WrongWayAlarm",
    "id": "T22P_098"
  },
  {
    "q": "What does a 'Hot Work Permit' physically authorize on a ship?",
    "a": "Work that produces heat, sparks, or open flames (like welding or grinding) in controlled conditions",
    "opts": ["Work that produces heat, sparks, or open flames (like welding or grinding) in controlled conditions", "Working on live electrical switchboards", "Working on the steam boilers only", "Working outside in tropical climates"],
    "exp": "Hot work requires strict fire precautions because the sparks can ignite flammable gases, oil spills, or adjacent materials.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_099"
  },
  {
    "q": "What is the absolute prerequisite before Hot Work can be carried out in a hazardous area (like near cargo tanks)?",
    "a": "A 'Gas Free Certificate' issued by a competent officer, proving explosive gases are absent",
    "opts": ["A 'Gas Free Certificate' issued by a competent officer, proving explosive gases are absent", "A bucket of sand must be present", "The main engine must be running", "The area must be painted first"],
    "exp": "Without absolute proof (via gas meters) that the atmosphere is below 1% LEL, striking an arc is a literal death sentence.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_100"
  },
  {
    "q": "What is the role of a 'Fire Watch' during a Hot Work permit operation?",
    "a": "A designated person with an extinguisher watching for sparks igniting fires, during the work and for at least 30 minutes after completion",
    "opts": ["To watch the fire alarm panel in the ECR", "To measure the temperature of the weld", "To provide lighting for the welder", "A designated person with an extinguisher watching for sparks igniting fires, during the work and for at least 30 minutes after completion"],
    "exp": "Sparks can smolder in hidden crevices for minutes before bursting into flame. The fire watch ensures the area is genuinely cold.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_101"
  },
  {
    "q": "What does an 'Electrical Isolation Permit' (EIP) formally document?",
    "a": "That a circuit has been de-energized, locked out (LOTO), tested dead, and is safe to work on",
    "opts": ["That the ETO has permission to sleep", "That a circuit has been de-energized, locked out (LOTO), tested dead, and is safe to work on", "That a high voltage test was passed", "That the ship is running on shore power"],
    "exp": "The EIP is the paper trail guaranteeing that the lethal energy source has been physically removed and secured.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_102"
  },
  {
    "q": "What does the 'Tag Out' portion of LOTO require?",
    "a": "A highly visible warning tag stating 'Do Not Operate', the name of the worker, the date, and the reason for isolation",
    "opts": ["A permanent metal plaque welded to the breaker", "A verbal warning to the oiler", "A highly visible warning tag stating 'Do Not Operate', the name of the worker, the date, and the reason for isolation", "A piece of masking tape"],
    "exp": "The tag identifies exactly who holds the key to the lock and why the system is dead, preventing ignorant interference.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_103"
  },
  {
    "q": "Who is the ONLY person legally permitted to remove a LOTO padlock and tag?",
    "a": "The specific person whose name is written on the tag (the one who applied it)",
    "opts": ["The Chief Engineer", "The Captain", "Any member of the engine crew", "The specific person whose name is written on the tag (the one who applied it)"],
    "exp": "This absolute rule ensures nobody energizes a circuit while the original worker's hands are still inside the machinery.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_104"
  },
  {
    "q": "What is the crucial 'Prove Dead' step in an Electrical Isolation Permit?",
    "a": "Using an approved, known-working voltage tester to physically verify zero volts exist across all phases and to earth at the work location",
    "opts": ["Asking the Chief Engineer if it's safe", "Touching the wire quickly with the back of the hand", "Using an approved, known-working voltage tester to physically verify zero volts exist across all phases and to earth at the work location", "Looking at the breaker handle to see if it says OFF"],
    "exp": "Breaker mechanics fail. Labels are wrong. Only a physical voltage measurement guarantees your life.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_105"
  },
  {
    "q": "What is a 'Cold Work Permit'?",
    "a": "A permit authorizing hazardous but non-sparking work, such as mechanical dismantling or using chemicals in confined spaces",
    "opts": ["A permit authorizing hazardous but non-sparking work, such as mechanical dismantling or using chemicals in confined spaces", "A permit to clean the AC vents", "A permit to work outside in winter", "A permit to work inside the ship's freezer"],
    "exp": "It ensures safety controls are in place for risky jobs (like pipe breaking) that don't involve flames.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_106"
  },
  {
    "q": "What critical environmental checks are required before issuing an 'Enclosed Space Entry Permit'?",
    "a": "Testing the atmosphere for sufficient Oxygen (21%), and the absence of explosive gases (LEL) and toxic gases (H2S, CO)",
    "opts": ["Ensuring the space is painted", "Testing the atmosphere for sufficient Oxygen (21%), and the absence of explosive gases (LEL) and toxic gases (H2S, CO)", "Checking the lighting levels", "Checking the temperature and humidity"],
    "exp": "Entering a void space or empty tank without atmosphere testing is the leading cause of multi-fatality accidents on ships.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_107"
  },
  {
    "q": "During Enclosed Space Entry, what is the role of the 'Standby Person'?",
    "a": "To remain outside the entrance at all times, maintain communication with entrants, and raise the alarm in an emergency (never entering themselves)",
    "opts": ["To clean the entrance area", "To remain outside the entrance at all times, maintain communication with entrants, and raise the alarm in an emergency (never entering themselves)", "To fetch tools for the workers", "To operate the welding machine"],
    "exp": "If the entrants collapse from bad air, the standby person triggers the rescue team. If they go in, they die too.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_108"
  },
  {
    "q": "What is required by a 'Working at Height Permit'?",
    "a": "Authorizes work above 2 meters, mandating the use of safety harnesses, fall arrestors, and barricades below the work area",
    "opts": ["Authorizes work above 2 meters, mandating the use of safety harnesses, fall arrestors, and barricades below the work area", "Work inside the funnel only", "Using a tall ladder", "Permission to fly the ship's drone"],
    "exp": "Falling is a severe hazard. The permit enforces the use of lifelines when servicing mast lights or overhead cranes.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_109"
  },
  {
    "q": "Why would an ETO require an 'Isolation of Safety Systems Permit'?",
    "a": "To temporarily disable a fire detector or sprinkler zone to prevent false alarms during maintenance, like welding or grinding",
    "opts": ["To mute the general alarm during drills", "To turn off the ship's steering gear", "To temporarily disable a fire detector or sprinkler zone to prevent false alarms during maintenance, like welding or grinding", "To bypass the main engine trips permanently"],
    "exp": "Disabling a smoke detector creates a blind spot. The permit ensures a human fire watch is posted and the system is reactivated afterward.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_110"
  },
  {
    "q": "What is the maximum time limit typically allowed on a standard Permit to Work?",
    "a": "Valid for one specific shift or a maximum of 12-24 hours; it must be reissued if work continues to the next day",
    "opts": ["Valid until the ship is sold", "Valid for the entire voyage", "Valid for exactly 1 hour", "Valid for one specific shift or a maximum of 12-24 hours; it must be reissued if work continues to the next day"],
    "exp": "Conditions change. A permit cannot stay open indefinitely; it must be reviewed and re-signed daily by the Chief Engineer/Master.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_111"
  },
  {
    "q": "When is 'Working on Live Equipment' (Live MSB Work) permitted?",
    "a": "Only as an absolute last resort for fault-finding that requires power, under a strict specialized PTW and using full protective PPE",
    "opts": ["Only as an absolute last resort for fault-finding that requires power, under a strict specialized PTW and using full protective PPE", "For all daily maintenance tasks", "It is completely illegal globally", "Whenever the ETO feels like it"],
    "exp": "If a fault disappears when power is cut, live probing is required. It demands extreme precautions, Class 0 gloves, and a standby rescuer.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_112"
  },
  {
    "q": "What is the 'Two-Person Rule' for live electrical work?",
    "a": "One trained person performs the work, while a second trained person stands by ready to hit the emergency stop and perform a rescue",
    "opts": ["One person works while the other reads the manual aloud", "One trained person performs the work, while a second trained person stands by ready to hit the emergency stop and perform a rescue", "Both people must be Chief Engineers", "Two people must hold the tool together"],
    "exp": "If the worker gets shocked and their muscles lock onto the live bar, the standby person kills the power to save their life.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_113"
  },
  {
    "q": "What certification must insulated tools have for working inside a 440V MSB?",
    "a": "IEC 60900 (certified 1000V insulated)",
    "opts": ["Wrapped in electrical tape", "IEC 60900 (certified 1000V insulated)", "ISO 9001 quality mark", "Standard hardware store grips"],
    "exp": "These tools have thick, molded insulation that guarantees a dropped wrench won't short across two busbars and cause an explosion.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_114"
  },
  {
    "q": "Why are metal rings, watches, and necklaces strictly prohibited when performing electrical work under a PTW?",
    "a": "They bypass skin resistance (causing severe shock) and can bridge live contacts, instantly melting into the skin",
    "opts": ["They cause magnetic interference", "They bypass skin resistance (causing severe shock) and can bridge live contacts, instantly melting into the skin", "They can get scratched", "They reflect light into the worker's eyes"],
    "exp": "A gold ring dropping across 24V busbars acts as a dead short, turning white-hot and burning the finger to the bone.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_115"
  },
  {
    "q": "What piece of PPE protects the face during high-voltage live work?",
    "a": "An Arc Flash rated visor or face shield",
    "opts": ["Standard reading glasses", "An Arc Flash rated visor or face shield", "A welding hood", "A paper dust mask"],
    "exp": "An arc flash blasts molten copper and blinding UV light. The visor prevents the worker from being blinded and severely burned.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_116"
  },
  {
    "q": "What is a 'Task Risk Assessment' (TRA) in the context of a PTW?",
    "a": "A documented brainstorming session before the job to identify all specific hazards and list the control measures required to mitigate them",
    "opts": ["A post-job performance review", "A documented brainstorming session before the job to identify all specific hazards and list the control measures required to mitigate them", "A form to evaluate the worker's speed", "A budget calculation for spare parts"],
    "exp": "The TRA proves that the team stopped and thought 'How could this kill us?' before picking up the tools.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_117"
  },
  {
    "q": "When is a Permit to Work officially considered 'Closed'?",
    "a": "Only after the work is complete, all tools are removed, guards are replaced, LOTO is removed, and the system is safely restored to normal",
    "opts": ["When the worker goes on break", "As soon as the paper is signed", "After exactly 12 hours", "Only after the work is complete, all tools are removed, guards are replaced, LOTO is removed, and the system is safely restored to normal"],
    "exp": "Closing the permit is the formal handover, telling the Chief Engineer 'The machine is fully reassembled and safe to run.'",
    "cat": "PTW_SYSTEM",
    "id": "T22P_118"
  },
  {
    "q": "Why is a second lockout tag often placed at the local engine start panel during an ACB isolation?",
    "a": "To ensure an oiler doesn't physically start the prime mover while the ETO is working on its breaker in the MSB",
    "opts": ["To test the local buttons", "To remind the crew to check the oil", "To ensure an oiler doesn't physically start the prime mover while the ETO is working on its breaker in the MSB", "Because the company likes extra paperwork"],
    "exp": "Total isolation means securing the electrical output AND preventing the mechanical source of power from waking up.",
    "cat": "PTW_SYSTEM",
    "id": "T22P_119"
  },
  {
    "q": "Under the ISM Code Element 10, what is the ETO's primary responsibility regarding the PMS (Planned Maintenance System)?",
    "a": "To execute and accurately record all scheduled electrical maintenance tasks by their due dates, or formally document deferrals",
    "opts": ["To rewrite the software program", "To ignore tasks that seem unnecessary", "To execute and accurately record all scheduled electrical maintenance tasks by their due dates, or formally document deferrals", "To perform mechanical overhauls of the engines"],
    "exp": "The PMS is legal proof of seaworthiness. Completing and signing off tasks proves the ship is being kept in safe condition.",
    "cat": "ETODuties",
    "id": "T22P_120"
  },
  {
    "q": "What is the ETO's duty regarding electrical defects that cannot be immediately fixed?",
    "a": "They must be formally reported to the Chief Engineer and entered into the ship's open defect tracking list",
    "opts": ["They should be hidden until drydock", "They must be formally reported to the Chief Engineer and entered into the ship's open defect tracking list", "They only need to be reported if the Captain asks", "They should be fixed with duct tape"],
    "exp": "The SMS requires transparent tracking of all broken equipment. Hidden defects lead to catastrophic surprises during emergencies.",
    "cat": "ETODuties",
    "id": "T22P_121"
  },
  {
    "q": "What constitutes a 'Near-Miss' in electrical work that an ETO must report?",
    "a": "An event that did not cause injury or damage, but had the potential to do so (e.g., finding a bare 440V wire touching a handrail)",
    "opts": ["A lightbulb burning out normally", "Dropping a cheap tool in the ocean", "An event that did not cause injury or damage, but had the potential to do so (e.g., finding a bare 440V wire touching a handrail)", "Arriving late to a safety meeting"],
    "exp": "Near-miss reporting is the core of proactive safety. Fixing the bare wire today prevents a fatal electrocution tomorrow.",
    "cat": "ETODuties",
    "id": "T22P_122"
  },
  {
    "q": "During cargo loading on a container ship, what is a crucial ETO duty regarding Reefer containers?",
    "a": "Monitoring the total electrical load to ensure the massive current draw of hundreds of compressors does not overload the ship's generators",
    "opts": ["Monitoring the total electrical load to ensure the massive current draw of hundreds of compressors does not overload the ship's generators", "Opening the containers to check the cargo", "Washing the outside of the containers", "Repainting the reefer sockets"],
    "exp": "Plugging in 500 reefers simultaneously will instantly black out the ship if the ETO hasn't requested extra generators to be brought online.",
    "cat": "ETODuties",
    "id": "T22P_123"
  },
  {
    "q": "Before arriving in port on an Oil Tanker, what electrical system must the ETO ensure is switched OFF?",
    "a": "The ICCP (Impressed Current Cathodic Protection) system",
    "opts": ["The emergency lighting", "The ICCP (Impressed Current Cathodic Protection) system", "The main steering gear", "The GMDSS radios"],
    "exp": "Leaving ICCP on alongside a jetty causes massive stray current corrosion, destroying the dock infrastructure.",
    "cat": "ETODuties",
    "id": "T22P_124"
  },
  {
    "q": "What is the ETO's responsibility regarding the ship's Safety Committee?",
    "a": "To attend the monthly meetings, report on electrical safety findings, and help implement safety improvement recommendations",
    "opts": ["To attend the monthly meetings, report on electrical safety findings, and help implement safety improvement recommendations", "To chair the meeting", "To ignore it as it is a deck department issue", "To write the minutes"],
    "exp": "The ETO is the technical expert for electrical hazards and must advise the Master and crew on safety upgrades.",
    "cat": "ETODuties",
    "id": "T22P_125"
  },
  {
    "q": "What is a standard 'Morning Round' task for an ETO concerning the Main Switchboard (MSB)?",
    "a": "Checking the kW load, power factor, voltage, frequency, and verifying that all Earth Fault indicator lamps show no leaks",
    "opts": ["Cleaning the busbars with water", "Repainting the panel doors", "Tripping the breakers to test them", "Checking the kW load, power factor, voltage, frequency, and verifying that all Earth Fault indicator lamps show no leaks"],
    "exp": "A daily visual check of the MSB catches degrading power factors or creeping earth faults before they become emergencies.",
    "cat": "ETODuties",
    "id": "T22P_126"
  },
  {
    "q": "If the ETO notices the Power Factor (PF) on a running generator has dropped to 0.6 lagging, what does this indicate?",
    "a": "The generator is supplying excessive reactive power (kVAR), which may require adjusting the AVR or sharing the load better",
    "opts": ["The generator is supplying excessive reactive power (kVAR), which may require adjusting the AVR or sharing the load better", "The voltage is too high", "The battery is dead", "The engine is running out of fuel"],
    "exp": "A low PF means the alternator windings are heating up with 'useless' magnetic current. The ETO must tune the AVR to fix it.",
    "cat": "ETODuties",
    "id": "T22P_127"
  },
  {
    "q": "What must the ETO check on the Fire Detection panel every day?",
    "a": "That all zones show 'HEALTHY' with no latched fire alarms, no isolated zones, and no system fault indicators",
    "opts": ["That the siren is muted permanently", "That all zones show 'HEALTHY' with no latched fire alarms, no isolated zones, and no system fault indicators", "That the smoke detectors are covered", "That the backup battery is removed"],
    "exp": "A fault on the panel means a section of the ship is unprotected. It must be addressed immediately.",
    "cat": "ETODuties",
    "id": "T22P_128"
  },
  {
    "q": "At the end of the working day, what administrative task MUST the ETO complete?",
    "a": "Updating the official Electrical Logbook with all jobs completed, tests performed, and alarms responded to during the day",
    "opts": ["Turning off the engine room lights", "Calling the company CEO", "Updating the official Electrical Logbook with all jobs completed, tests performed, and alarms responded to during the day", "Printing all emails"],
    "exp": "The logbook is a legal document. It provides proof of due diligence in case of an accident or PSC inspection.",
    "cat": "ETODuties",
    "id": "T22P_129"
  },
  {
    "q": "What is 'Critical Equipment' in the Planned Maintenance System (PMS)?",
    "a": "Equipment whose sudden failure would result in hazardous situations, loss of propulsion, or MARPOL violations",
    "opts": ["Equipment that is very expensive", "Equipment whose sudden failure would result in hazardous situations, loss of propulsion, or MARPOL violations", "Any equipment older than 10 years", "The coffee machine in the galley"],
    "exp": "Tasks flagged as 'Critical' (like steering gear checks or blackout tests) are given absolute priority and cannot be deferred casually.",
    "cat": "ETODuties",
    "id": "T22P_130"
  },
  {
    "q": "How does the ETO participate in an 'Abandon Ship' drill?",
    "a": "By reporting to their assigned muster station, often with designated duties like securing electrical power or launching the lifeboat",
    "opts": ["By staying in the engine room to keep the lights on", "By hiding in the cabin", "By testing the MSB", "By reporting to their assigned muster station, often with designated duties like securing electrical power or launching the lifeboat"],
    "exp": "Every crew member has a strict role on the Muster List. The ETO's role is critical for life-saving appliance deployment.",
    "cat": "ETODuties",
    "id": "T22P_131"
  },
  {
    "q": "What is the ETO's role regarding Spare Parts Management?",
    "a": "Monitoring inventory levels of fuses, contactors, and critical boards, and creating requisitions before minimum stock levels are breached",
    "opts": ["Paying for parts out of pocket", "Ignoring it, as the C/E orders everything", "Monitoring inventory levels of fuses, contactors, and critical boards, and creating requisitions before minimum stock levels are breached", "Manufacturing new parts from scrap metal"],
    "exp": "A ship cannot sail if a critical 5-dollar fuse blows and there are no spares on board.",
    "cat": "ETODuties",
    "id": "T22P_132"
  },
  {
    "q": "What must the ETO do before handing over the Engine Room to UMS (Unattended Machinery Space) mode at night?",
    "a": "Ensure all alarms are acknowledged, no critical faults are active, and the UMS alarm routing is switched to the Duty Engineer's cabin",
    "opts": ["Turn off the main switchboard", "Lock the engine room doors", "Turn off all the lights", "Ensure all alarms are acknowledged, no critical faults are active, and the UMS alarm routing is switched to the Duty Engineer's cabin"],
    "exp": "If the alarm transfer is not engaged, a fire or flood at night will go unnoticed by the sleeping crew.",
    "cat": "ETODuties",
    "id": "T22P_133"
  },
  {
    "q": "When a new motor arrives onboard just before departure, what is the most critical test the ETO must perform before installing it?",
    "a": "A Megger (Insulation Resistance) test at 500V DC to ensure it hasn't absorbed moisture during transit",
    "opts": ["Painting it to match the ship", "A Megger (Insulation Resistance) test at 500V DC to ensure it hasn't absorbed moisture during transit", "Testing it with 440V AC immediately", "Weighing it"],
    "exp": "Motors stored on damp docks absorb water. Installing a wet motor will cause it to explode in a dead short the moment 440V hits it.",
    "cat": "MotorCheck",
    "id": "T22P_134"
  },
  {
    "q": "What physical check should be done on a newly received motor before wiring it up?",
    "a": "Turn the shaft by hand to verify it rotates smoothly without grinding or binding, checking for bearing damage in transit",
    "opts": ["Hit it with a hammer", "Turn the shaft by hand to verify it rotates smoothly without grinding or binding, checking for bearing damage in transit", "Remove the cooling fan", "Fill the terminal box with grease"],
    "exp": "If the motor was dropped, the shaft could be bent or bearings shattered. Hand-turning confirms mechanical integrity.",
    "cat": "MotorCheck",
    "id": "T22P_135"
  },
  {
    "q": "You receive a rewound motor, but all the terminal markings (U1, V1, W1, etc.) are painted over. What is your very first step to identify them?",
    "a": "Use a continuity tester (ohmmeter) to identify the three separate pairs of wires that belong to the three individual phase windings",
    "opts": ["Look at the colour of the paint", "Connect it straight to 440V and see what happens", "Use a continuity tester (ohmmeter) to identify the three separate pairs of wires that belong to the three individual phase windings", "Cut the wires and guess"],
    "exp": "Before doing anything else, you must separate the 6 wires into 3 distinct coils (Winding 1, Winding 2, Winding 3).",
    "cat": "MotorCheck",
    "id": "T22P_136"
  },
  {
    "q": "After grouping the three windings of an unmarked motor, how do you determine the 'start' and 'finish' polarities?",
    "a": "By applying a 12V DC battery momentarily to one winding and using a millivoltmeter on the others to check the direction of the induced voltage kick",
    "opts": ["By measuring the resistance again", "By smelling the wires", "By weighing the coils", "By applying a 12V DC battery momentarily to one winding and using a millivoltmeter on the others to check the direction of the induced voltage kick"],
    "exp": "A positive kick on the meter means the terminals match. This allows you to label them 1a/1b, 2a/2b, 3a/3b accurately.",
    "cat": "MotorCheck",
    "id": "T22P_137"
  },
  {
    "q": "Once the starts (a) and finishes (b) are identified, how do you configure the motor for a STAR (Wye) connection?",
    "a": "Connect all three 'finish' ends (1b, 2b, 3b) together to form the neutral point, and apply power to the three 'start' ends (1a, 2a, 3a)",
    "opts": ["Connect all three 'finish' ends (1b, 2b, 3b) together to form the neutral point, and apply power to the three 'start' ends (1a, 2a, 3a)", "Connect 1b to 2a, 2b to 3a, 3b to 1a", "Connect 1a to 1b", "Leave them all disconnected"],
    "exp": "Joining one side of all three coils creates the classic 'Y' shaped star point for high-voltage starting.",
    "cat": "MotorCheck",
    "id": "T22P_138"
  },
  {
    "q": "How do you configure the newly identified windings for a DELTA connection?",
    "a": "Connect the finish of one to the start of the next in a triangle: 1b to 2a, 2b to 3a, 3b to 1a, and apply power to the three junctions",
    "opts": ["Connect them directly to ground", "Connect the finish of one to the start of the next in a triangle: 1b to 2a, 2b to 3a, 3b to 1a, and apply power to the three junctions", "Connect 1a to 2a to 3a", "Connect all starts together"],
    "exp": "This forms the closed-loop Delta triangle required for full-power running.",
    "cat": "MotorCheck",
    "id": "T22P_139"
  },
  {
    "q": "What happens if you connect a motor in Delta but get the polarity of one winding reversed?",
    "a": "It creates a massive internal short circuit loop; the motor will growl, draw extreme current, and rapidly burn out or blow the fuses",
    "opts": ["It becomes a stepper motor", "It creates a massive internal short circuit loop; the motor will growl, draw extreme current, and rapidly burn out or blow the fuses", "It generates 440V to the grid", "The motor runs perfectly but in reverse"],
    "exp": "A reversed coil in a Delta loop means the voltages no longer sum to zero, creating a dead short circulating current.",
    "cat": "MotorCheck",
    "id": "T22P_140"
  },
  {
    "q": "What is the standard IEC terminal marking convention for a 3-phase motor?",
    "a": "U1-U2, V1-V2, W1-W2",
    "opts": ["T1-T9", "U1-U2, V1-V2, W1-W2", "A-B, C-D, E-F", "L1-L2, L3-L4"],
    "exp": "This is the global standard for European/Asian marine motors. (NEMA uses T1-T9).",
    "cat": "MotorCheck",
    "id": "T22P_141"
  },
  {
    "q": "If a megger test on a newly received motor shows an Insulation Resistance (IR) of 0.2 M\u03a9, what must be done?",
    "a": "The motor is wet/damp and MUST be dried out (e.g., using a space heater or low-voltage heating) until IR rises above 1 M\u03a9 before applying 440V",
    "opts": ["Submerge it in oil", "Install it immediately", "The motor is wet/damp and MUST be dried out (e.g., using a space heater or low-voltage heating) until IR rises above 1 M\u03a9 before applying 440V", "Rewind it instantly"],
    "exp": "0.2 M\u03a9 is dangerously low. The moisture must be baked out of the varnish before high voltage is applied.",
    "cat": "MotorCheck",
    "id": "T22P_142"
  },
  {
    "q": "What is a Polarisation Index (PI) test?",
    "a": "The ratio of the 10-minute Megger reading divided by the 1-minute Megger reading (PI = IR_10min / IR_1min)",
    "opts": ["The temperature difference over 10 minutes", "The magnetic strength of the stator", "The ratio of voltage to current", "The ratio of the 10-minute Megger reading divided by the 1-minute Megger reading (PI = IR_10min / IR_1min)"],
    "exp": "Healthy, dry insulation absorbs charging current slowly. The resistance reading should steadily climb over 10 minutes.",
    "cat": "MotorCheck",
    "id": "T22P_143"
  },
  {
    "q": "What PI value indicates a healthy, dry motor winding?",
    "a": "A PI value greater than or equal to 2.0",
    "opts": ["A PI value of 0", "A PI value less than 0.5", "A PI value of exactly 1.0", "A PI value greater than or equal to 2.0"],
    "exp": "If the 10-minute reading is double the 1-minute reading, the insulation is clean and dry. A PI around 1.0 means it is wet or dirty.",
    "cat": "MotorCheck",
    "id": "T22P_144"
  },
  {
    "q": "Why must Insulation Resistance (IR) readings be corrected for temperature?",
    "a": "Because insulation resistance halves for approximately every 10\u00b0C rise in temperature; a hot motor naturally reads much lower than a cold one",
    "opts": ["Because the megger battery weakens when hot", "Because temperature increases voltage", "Because insulation resistance halves for approximately every 10\u00b0C rise in temperature; a hot motor naturally reads much lower than a cold one", "Because cold weather makes resistance drop"],
    "exp": "A reading of 5 M\u03a9 at 80\u00b0C is actually excellent (equivalent to 80 M\u03a9 at 40\u00b0C). Failing to correct for temp causes false alarms.",
    "cat": "MotorCheck",
    "id": "T22P_145"
  },
  {
    "q": "What is the standard base temperature to which all marine IR readings should be corrected for comparison?",
    "a": "40\u00b0C",
    "opts": ["100\u00b0C", "25\u00b0C", "0\u00b0C", "40\u00b0C"],
    "exp": "IEC 60034 standardizes 40\u00b0C as the reference ambient for marine machinery insulation comparisons.",
    "cat": "MotorCheck",
    "id": "T22P_146"
  },
  {
    "q": "If you Megger a 440V motor while it is operating at 80\u00b0C and get 10 M\u03a9, what is the approximate temperature-corrected IR at 40\u00b0C?",
    "a": "160 M\u03a9 (It doubles 4 times: 10 -> 20 -> 40 -> 80 -> 160)",
    "opts": ["20 M\u03a9", "160 M\u03a9 (It doubles 4 times: 10 -> 20 -> 40 -> 80 -> 160)", "10 M\u03a9", "0.625 M\u03a9"],
    "exp": "Using the halving rule: 80 to 70 (x2), 70 to 60 (x2), 60 to 50 (x2), 50 to 40 (x2). 10 x 16 = 160 M\u03a9.",
    "cat": "MotorCheck",
    "id": "T22P_147"
  },
  {
    "q": "When should an ETO condemn a motor and send it ashore for rewinding?",
    "a": "When the IR is near zero (dead short), or when extended drying procedures fail to raise a low IR above the 1 M\u03a9 minimum threshold",
    "opts": ["When the IR is near zero (dead short), or when extended drying procedures fail to raise a low IR above the 1 M\u03a9 minimum threshold", "When it runs smoothly", "When the PI is exactly 2.0", "When the paint is scratched"],
    "exp": "If baking the moisture out doesn't fix it, the copper varnish has physically broken down and shorted. It must be rewound.",
    "cat": "MotorCheck",
    "id": "T22P_148"
  },
  {
    "q": "When a ship enters drydock and the main alternators are isolated for weeks, what electrical protection is MANDATORY?",
    "a": "The stator anti-condensation heater must be continuously energized from the shore supply",
    "opts": ["The stator anti-condensation heater must be continuously energized from the shore supply", "The alternator must be filled with oil", "The alternator must be kept in a freezer", "The ICCP system must be attached to it"],
    "exp": "A cold, idle machine in a humid engine room will suck moisture into its windings like a sponge, ruining the insulation. The heater prevents this.",
    "cat": "Drydock",
    "id": "T22P_149"
  },
  {
    "q": "How much warmer than the ambient air should the stator heater keep the alternator windings?",
    "a": "Approximately 5 to 10\u00b0C above ambient",
    "opts": ["100\u00b0C above ambient", "Approximately 5 to 10\u00b0C above ambient", "Exactly the same as ambient", "Below ambient temperature"],
    "exp": "Keeping the steel slightly warmer than the air prevents the dew point from being reached, stopping condensation.",
    "cat": "Drydock",
    "id": "T22P_150"
  },
  {
    "q": "How can the ETO verify the alternator stator heater is actually working during drydock?",
    "a": "Check that its circuit breaker is closed, measure its current draw with a clamp meter, and verify the winding temperature is slightly warm to the touch",
    "opts": ["Megger the live heater", "Check that its circuit breaker is closed, measure its current draw with a clamp meter, and verify the winding temperature is slightly warm to the touch", "Look for smoke coming from the generator", "Start the main engine"],
    "exp": "The heater is just a big resistor. If it's drawing its rated Amps, it's making heat.",
    "cat": "Drydock",
    "id": "T22P_151"
  },
  {
    "q": "What happens if you Megger the alternator just before undocking and find the IR has dropped significantly despite the heater?",
    "a": "Do not energize; apply supplemental heat (like hot air blowers) and run the alternator on short-circuit (dry-out run) until the IR recovers",
    "opts": ["Do not energize; apply supplemental heat (like hot air blowers) and run the alternator on short-circuit (dry-out run) until the IR recovers", "Rewind it immediately", "Energize it immediately to burn off the water", "Pour fresh water on it"],
    "exp": "Moisture ingress must be baked out slowly. A short-circuit run circulates warming current safely without high voltage.",
    "cat": "Drydock",
    "id": "T22P_152"
  },
  {
    "q": "When ordering a replacement power cable for the ship in drydock, why must you specify 'Stranded Copper' rather than 'Solid'?",
    "a": "Shipboard cables must be flexible to withstand constant vessel vibration without snapping from metal fatigue",
    "opts": ["Shipboard cables must be flexible to withstand constant vessel vibration without snapping from metal fatigue", "Solid copper rusts faster", "Stranded copper is cheaper", "Solid copper causes magnetic interference"],
    "exp": "Solid core wire (like in houses) breaks quickly when shaken continuously by massive diesel engines.",
    "cat": "Drydock",
    "id": "T22P_153"
  },
  {
    "q": "What insulation material is preferred for modern marine power cables due to its high 90\u00b0C thermal rating and water resistance?",
    "a": "XLPE (Cross-Linked Polyethylene)",
    "opts": ["XLPE (Cross-Linked Polyethylene)", "Standard PVC", "Cotton braid", "Paper and Oil"],
    "exp": "XLPE is the standard for high-performance marine cables, carrying more current safely than older PVC cables.",
    "cat": "Drydock",
    "id": "T22P_154"
  },
  {
    "q": "Why is 'LSZH' (Low Smoke Zero Halogen) sheathing mandated for new ship cables?",
    "a": "In a fire, PVC burns to create blinding black smoke and lethal, corrosive Hydrogen Chloride gas; LSZH produces minimal smoke and no toxic halogens",
    "opts": ["LSZH is much cheaper", "LSZH is completely fireproof", "In a fire, PVC burns to create blinding black smoke and lethal, corrosive Hydrogen Chloride gas; LSZH produces minimal smoke and no toxic halogens", "LSZH floats in water"],
    "exp": "Toxic smoke kills more sailors than flames. LSZH ensures escape routes remain visible and breathable.",
    "cat": "Drydock",
    "id": "T22P_155"
  },
  {
    "q": "What does 'SWA' stand for when ordering a marine cable?",
    "a": "Steel Wire Armoured",
    "opts": ["Solid Water proof Application", "Steel Wire Armoured", "Standard Weight Allowance", "Single Wire Aluminum"],
    "exp": "A basket of steel wires under the outer sheath protects the cable from being crushed or sliced by heavy machinery.",
    "cat": "Drydock",
    "id": "T22P_156"
  },
  {
    "q": "What is the standard IEC marine voltage rating for a cable used on a 440V system?",
    "a": "0.6/1 kV (600V phase-to-neutral / 1000V phase-to-phase)",
    "opts": ["12/24 V", "400/440 V", "0.6/1 kV (600V phase-to-neutral / 1000V phase-to-phase)", "10/11 kV"],
    "exp": "The cable insulation must comfortably exceed the peak voltage (622V) of the 440V RMS system.",
    "cat": "Drydock",
    "id": "T22P_157"
  },
  {
    "q": "Which international standard dictates the construction and testing of cables specifically for ships?",
    "a": "IEC 60092-350",
    "opts": ["SOLAS Chapter 1", "ISO 9001", "MARPOL Annex 6", "IEC 60092-350"],
    "exp": "This specific IEC code ensures the cable survives salt, oil, vibration, and flame tests unique to the marine environment.",
    "cat": "Drydock",
    "id": "T22P_158"
  },
  {
    "q": "If ordering a 4-20mA instrumentation cable, what specific feature must be requested to prevent signal noise?",
    "a": "An overall copper braid or aluminium foil SCREEN (shielding)",
    "opts": ["Steel wire armour", "An overall copper braid or aluminium foil SCREEN (shielding)", "A 6.6kV insulation rating", "Solid core wire"],
    "exp": "The grounded screen acts as a Faraday cage, preventing 60Hz hum from VFDs from corrupting the delicate analog sensor signals.",
    "cat": "Drydock",
    "id": "T22P_159"
  },
  {
    "q": "During drydock, the hull welders ask to connect their ground clamp. What is the rule for the welding return cable?",
    "a": "It must be as short as possible and connected directly to the workpiece being welded, NEVER passing through bearings or the ship's hull unnecessarily",
    "opts": ["It must be as short as possible and connected directly to the workpiece being welded, NEVER passing through bearings or the ship's hull unnecessarily", "It can be attached anywhere on the ship", "It must be thrown in the water", "It must be connected to the ICCP anode"],
    "exp": "If 400A of welding current flows through a propeller bearing to get to the earth, it will micro-weld and destroy the smooth bearing surface.",
    "cat": "Drydock",
    "id": "T22P_160"
  },
  {
    "q": "What is the purpose of conducting a 'Short Circuit Test' on a marine transformer?",
    "a": "To determine the copper losses (I\u00b2R) and calculate the Percentage Impedance (%Z) of the transformer",
    "opts": ["To determine the copper losses (I\u00b2R) and calculate the Percentage Impedance (%Z) of the transformer", "To see if it catches fire", "To test the iron core losses", "To clean the windings"],
    "exp": "By shorting the secondary and applying a tiny primary voltage until full load current flows, the pure resistive properties of the copper are isolated and measured.",
    "cat": "Drydock",
    "id": "T22P_161"
  },
  {
    "q": "Why is knowing a transformer's Percentage Impedance (%Z) critical for the ETO?",
    "a": "It dictates the maximum possible short-circuit fault current on the secondary side, which is necessary to correctly size the circuit breakers",
    "opts": ["It prevents static electricity", "It tells you how much fuel the generator will use", "It calculates the physical weight of the transformer", "It dictates the maximum possible short-circuit fault current on the secondary side, which is necessary to correctly size the circuit breakers"],
    "exp": "A lower %Z means a much higher fault current. The downstream breakers must have an Icu rating capable of surviving that massive blast of energy.",
    "cat": "Drydock",
    "id": "T22P_162"
  },
  {
    "q": "If an engine room overhead crane fails to stop lifting and snaps its wire rope, which safety device has failed?",
    "a": "The Upper Limit Switch",
    "opts": ["The dead-man button", "The Upper Limit Switch", "The ICCP controller", "The overload relay"],
    "exp": "The upper limit switch is a physical lever that cuts power to the hoist motor just before the hook block smashes into the drum.",
    "cat": "Drydock",
    "id": "T22P_163"
  },
  {
    "q": "What is the very first step in the MCA 6-Step Response Framework for an electrical emergency?",
    "a": "IMMEDIATE ACTIONS (Safety-Critical): Isolate the live fault to prevent electrocution or raise the alarm, prioritizing life safety before investigation",
    "opts": ["IMMEDIATE ACTIONS (Safety-Critical): Isolate the live fault to prevent electrocution or raise the alarm, prioritizing life safety before investigation", "Log the event in the PMS", "Call the company DPA", "Read the manual"],
    "exp": "If someone is being shocked or a fire is starting, you act immediately to remove the lethal threat. Diagnosis comes later.",
    "cat": "Diagnostic",
    "id": "T22P_164"
  },
  {
    "q": "In the 6-Step Framework, what follows the Immediate Safety actions?",
    "a": "ASSESSMENT: Systematically gather information (read alarms, check gauges, talk to witnesses) to diagnose the root cause before taking technical action",
    "opts": ["ASSESSMENT: Systematically gather information (read alarms, check gauges, talk to witnesses) to diagnose the root cause before taking technical action", "Start replacing parts randomly", "Order spare parts", "Write the final report"],
    "exp": "Assessment prevents making the situation worse. You must know why it tripped before you try to reset it.",
    "cat": "Diagnostic",
    "id": "T22P_165"
  },
  {
    "q": "Why is 'Communication' explicitly listed as Step 3 in the framework?",
    "a": "To ensure the Bridge (OOW) and Chief Engineer are informed of the status, recognizing the ETO is part of a command structure, not a lone technician",
    "opts": ["To practice radio etiquette", "To call the Coast Guard immediately for any fault", "To ensure the Bridge (OOW) and Chief Engineer are informed of the status, recognizing the ETO is part of a command structure, not a lone technician", "To order coffee"],
    "exp": "A blackout isn't just an electrical puzzle; it's a navigational crisis. The Captain needs to know if he has steering.",
    "cat": "Diagnostic",
    "id": "T22P_166"
  },
  {
    "q": "What is the absolute first action if you find a crew member locked onto a live 440V busbar?",
    "a": "ISOLATE THE SUPPLY: Switch off the nearest circuit breaker to kill the power",
    "opts": ["ISOLATE THE SUPPLY: Switch off the nearest circuit breaker to kill the power", "Grab them and pull them off", "Take a photograph for the report", "Start CPR immediately"],
    "exp": "Touching a person being shocked will electrocute you too. Cutting the power is the only safe rescue.",
    "cat": "Diagnostic",
    "id": "T22P_167"
  },
  {
    "q": "If a casualty is stuck to a live wire and the breaker cannot be found quickly, what must you do?",
    "a": "Use a DRY, non-conducting object (like a wooden broom handle or rubber hook) to physically push or pull them away from the source",
    "opts": ["Wait for the power to trip itself", "Use a DRY, non-conducting object (like a wooden broom handle or rubber hook) to physically push or pull them away from the source", "Throw water on them", "Use a metal crowbar"],
    "exp": "An insulator protects the rescuer while breaking the victim's physical contact with the lethal voltage.",
    "cat": "Diagnostic",
    "id": "T22P_168"
  },
  {
    "q": "After removing a shock victim from the power source, they are unresponsive and not breathing. What is the immediate action?",
    "a": "Commence CPR immediately at a ratio of 30 chest compressions to 2 rescue breaths",
    "opts": ["Give them water", "Put them in the recovery position", "Wait for a doctor to arrive", "Commence CPR immediately at a ratio of 30 chest compressions to 2 rescue breaths"],
    "exp": "Without breathing or a pulse, brain death occurs in minutes. CPR keeps oxygenated blood flowing to the brain.",
    "cat": "Diagnostic",
    "id": "T22P_169"
  },
  {
    "q": "What device is critical to use on an electric shock victim in cardiac arrest (Ventricular Fibrillation)?",
    "a": "An AED (Automated External Defibrillator)",
    "opts": ["An AED (Automated External Defibrillator)", "A thermal blanket", "An oxygen mask", "A megger"],
    "exp": "AC shock causes the heart to quiver uselessly. The AED delivers a massive DC shock to reset the heart's electrical rhythm.",
    "cat": "Diagnostic",
    "id": "T22P_170"
  },
  {
    "q": "Why must an electric shock victim receive a medical assessment even if they stand up and claim to feel fine?",
    "a": "Current flowing through the body causes hidden internal tissue burns and can trigger fatal cardiac arrhythmias hours after the event",
    "opts": ["Current flowing through the body causes hidden internal tissue burns and can trigger fatal cardiac arrhythmias hours after the event", "To test their reflexes", "Because they might be lying", "To fill out the insurance forms"],
    "exp": "Internal damage is invisible. The victim must be monitored via MedAdvice to ensure their heart doesn't stop later in their sleep.",
    "cat": "Diagnostic",
    "id": "T22P_171"
  },
  {
    "q": "During a simulated Blackout Test, how long do you have from the moment the MSB goes dead until the emergency switchboard is fully powered?",
    "a": "45 seconds",
    "opts": ["5 minutes", "10 seconds", "60 seconds", "45 seconds"],
    "exp": "SOLAS mandates that the emergency diesel generator must auto-start, synchronize, and pick up the load within 45 seconds.",
    "cat": "Diagnostic",
    "id": "T22P_172"
  },
  {
    "q": "If the engine room starts rapidly flooding from a burst sea water pipe, what is the ETO's priority after informing the Bridge?",
    "a": "Ensure the bilge pumps start, then protect the MSB by isolating lower generators and transferring essential loads to the emergency switchboard",
    "opts": ["Start the cargo pumps", "Turn off all power immediately to save electricity", "Jump into the water to fix the pipe", "Ensure the bilge pumps start, then protect the MSB by isolating lower generators and transferring essential loads to the emergency switchboard"],
    "exp": "Water hitting a live 440V MSB causes catastrophic arcs. Preserving power via the elevated emergency generator is vital for survival.",
    "cat": "Diagnostic",
    "id": "T22P_173"
  },
  {
    "q": "You get a 0.3 M\u03a9 reading on a 440V motor circuit. To isolate the fault systematically, what is your first physical step after LOTO?",
    "a": "Disconnect the cable at both ends (motor terminal box and MSB starter) to separate the cable from the equipment",
    "opts": ["Replace the contactor", "Disconnect the cable at both ends (motor terminal box and MSB starter) to separate the cable from the equipment", "Megger the live busbars", "Rewind the motor immediately"],
    "exp": "You cannot know if the short is in the motor, the cable, or the starter until you physically break them into three separate pieces.",
    "cat": "Diagnostic",
    "id": "T22P_174"
  },
  {
    "q": "After isolating the cable, you megger the cable alone and it reads 0.1 M\u03a9 to earth. What does this prove?",
    "a": "The insulation fault is in the cable run (e.g., pinched tray, water ingress), not the motor",
    "opts": ["The motor is burned out", "The MSB is faulty", "The megger is broken", "The insulation fault is in the cable run (e.g., pinched tray, water ingress), not the motor"],
    "exp": "By isolating the cable, you proved the motor is fine. The wire itself has been crushed or flooded somewhere in the ship.",
    "cat": "Diagnostic",
    "id": "T22P_175"
  },
  {
    "q": "How should slightly oxidized copper contacts in an ACB be cleaned?",
    "a": "By dressing them with a smooth flat file to remove minimum metal and retain shape, then wiping with isopropyl alcohol (IPA)",
    "opts": ["By soaking them in seawater", "By aggressively grinding them with an angle grinder", "By dressing them with a smooth flat file to remove minimum metal and retain shape, then wiping with isopropyl alcohol (IPA)", "By using heavy-grit emery cloth"],
    "exp": "Filing creates a clean, flat mating surface. Emery cloth is banned because the grit embeds in the copper and causes arcing.",
    "cat": "Diagnostic",
    "id": "T22P_176"
  },
  {
    "q": "Why must you NEVER use a file on Silver-plated electrical contacts?",
    "a": "Filing removes the ultra-thin silver plating (5-20 microns), exposing the base metal which will corrode rapidly and overheat",
    "opts": ["It will make them too shiny", "It causes magnetic interference", "It changes the voltage rating", "Filing removes the ultra-thin silver plating (5-20 microns), exposing the base metal which will corrode rapidly and overheat"],
    "exp": "Silver contacts should only be wiped clean with alcohol. Tarnish on silver doesn't significantly increase resistance, but losing the plating ruins the contact.",
    "cat": "Diagnostic",
    "id": "T22P_177"
  },
  {
    "q": "What tool is used to accurately verify the success of contact cleaning on a heavy busbar joint?",
    "a": "A Micro-ohmmeter (DLRO) measuring resistance in the micro-ohm (\u00b5\u03a9) range",
    "opts": ["A clamp-on ammeter", "A Micro-ohmmeter (DLRO) measuring resistance in the micro-ohm (\u00b5\u03a9) range", "A standard cheap multimeter", "A 5000V Megger"],
    "exp": "A standard multimeter uses too little current to measure near-zero resistance. A DLRO blasts 10-100 Amps to accurately read tiny resistances (<50 \u00b5\u03a9).",
    "cat": "Diagnostic",
    "id": "T22P_178"
  }
]);